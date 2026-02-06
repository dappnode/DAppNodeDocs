---
title: "Consensus Client Workflows"
sidebar_label: Consensus Clients
llm_description: "GitHub Actions workflows for DAppNode consensus client packages including sync-test and release workflows."
---

# Consensus Client Workflows

Consensus client packages (Lodestar, Teku, Prysm, Nimbus, Lighthouse) use three GitHub Actions workflows. Unlike execution clients, consensus clients **do not need a `sync.yml` workflow** because they use checkpoint sync, which doesn't require pre-synced volumes.

## Workflow Overview

| Workflow         | Trigger                | Purpose                       |
| ---------------- | ---------------------- | ----------------------------- |
| `auto_check.yml` | Scheduled (every 4h)   | Check for upstream updates    |
| `sync-test.yml`  | Pull requests + manual | Test package changes          |
| `release.yml`    | Push to main + manual  | Release with attestation test |

:::note
Consensus clients don't have a `sync.yml` workflow because they use **checkpoint sync**. This allows them to sync quickly from a trusted checkpoint rather than from genesis, eliminating the need for pre-synced volumes.
:::

## 1. Auto Check for Upstream Updates (`auto_check.yml`)

Same as standard packages - checks for upstream updates and creates PRs when new versions are available.

```yaml
name: Bump upstream version

on:
  schedule:
    - cron: "00 */4 * * *"
  push:
    branches:
      - "master"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npx @dappnode/dappnodesdk github-action bump-upstream
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          PINATA_API_KEY: ${{ secrets.PINATA_API_KEY }}
          PINATA_SECRET_API_KEY: ${{ secrets.PINATA_SECRET_API_KEY }}
```

## 2. Sync Test (`sync-test.yml`)

Triggered on PRs to test package changes. Builds the consensus client package, uploads it to the local IPFS node, and runs a sync test paired with an execution client.

### Workflow File

```yaml
name: Consensus Client Sync Test

on:
  workflow_dispatch:
    inputs:
      execution_client:
        description: "Execution Client"
        required: true
        type: choice
        options: [geth, reth, nethermind, besu, erigon]
  pull_request:
    branches:
      - "main"
    paths-ignore:
      - "README.md"

jobs:
  build:
    runs-on: staking-test-hoodi
    name: Build
    outputs:
      ipfs_hash: ${{ steps.extract_hash.outputs.ipfs_hash }}
    steps:
      - uses: actions/checkout@v6
      - name: Build and upload
        run: npx @dappnode/dappnodesdk build --provider=http://$(docker inspect DAppNodeCore-ipfs.dnp.dappnode.eth --format '{{.NetworkSettings.Networks.dncore_network.IPAddress}}'):5001 --variant=hoodi
      - name: Extract IPFS hash from releases.json
        id: extract_hash
        run: |
          # Get the last key's hash from releases.json
          IPFS_HASH=$(jq -r 'to_entries | last | .value.hash' package_variants/hoodi/releases.json)
          echo "ipfs_hash=$IPFS_HASH" >> $GITHUB_OUTPUT
          echo "Extracted IPFS hash: $IPFS_HASH"

  sync-test:
    runs-on: staking-test-hoodi
    name: Consensus Client Sync Test
    needs: [build]
    steps:
      - name: Run sync
        run: |
          docker run --rm --pull=always --network dncore_network \
            -v /var/run/docker.sock:/var/run/docker.sock \
            -e MODE=sync \
            -e CONSENSUS_CLIENT='teku' \
            -e IPFS_HASH=${{ needs.build.outputs.ipfs_hash }} \
            -e EXECUTION_CLIENT=${{ github.event.inputs.execution_client }} \
            -e GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }} \
            -e GITHUB_REPOSITORY=${{ github.repository }} \
            -e GITHUB_PR_NUMBER=${{ github.event.pull_request.number }} \
            -e GITHUB_RUN_ID=${{ github.run_id }} \
            -e GITHUB_SERVER_URL=${{ github.server_url }} \
            ghcr.io/dappnode/staker-test-util/test-runner:latest
```

### Key Differences from Execution Client Workflows

- **`CONSENSUS_CLIENT`** is set to the package being tested (e.g., `teku`)
- **`EXECUTION_CLIENT`** is the input parameter for selecting which execution client to pair with
- The IPFS hash refers to the consensus client package being tested

### PR Report

After the test completes, a report is posted to the PR including:

- Clients used and versions (before/after install)
- Timing measurements for each operation
- Container error logs (if any)
- Link to full CI logs

## 3. Release (`release.yml`)

Triggered on push to main. Runs a full attestation test before releasing the package.

### Workflow File

```yaml
name: "Release"

on:
  workflow_dispatch:
    inputs:
      execution_client:
        description: "Execution Client"
        required: true
        type: choice
        options: [geth, reth, nethermind, besu, erigon]
  push:
    branches:
      - "main"
    paths-ignore:
      - "README.md"

jobs:
  build:
    runs-on: staking-test-hoodi
    name: Build
    outputs:
      ipfs_hash: ${{ steps.extract_hash.outputs.ipfs_hash }}
    steps:
      - uses: actions/checkout@v6
      - name: Build and upload
        run: npx @dappnode/dappnodesdk build --provider=http://$(docker inspect DAppNodeCore-ipfs.dnp.dappnode.eth --format '{{.NetworkSettings.Networks.dncore_network.IPAddress}}'):5001 --variant=hoodi
      - name: Extract IPFS hash from releases.json
        id: extract_hash
        run: |
          # Get the last key's hash from releases.json
          IPFS_HASH=$(jq -r 'to_entries | last | .value.hash' package_variants/hoodi/releases.json)
          echo "ipfs_hash=$IPFS_HASH" >> $GITHUB_OUTPUT
          echo "Extracted IPFS hash: $IPFS_HASH"

  test:
    name: Test
    runs-on: staking-test-hoodi
    needs: [build]
    steps:
      - uses: actions/checkout@v6
      - name: Run staker test runner
        run: |
          docker run --rm --pull=always \
            --network dncore_network \
            -v /var/run/docker.sock:/var/run/docker.sock \
            -e MODE=test \
            -e IPFS_HASH=${{ needs.build.outputs.ipfs_hash }} \
            -e CONSENSUS_CLIENT='teku' \
            -e EXECUTION_CLIENT=${{ github.event.inputs.execution_client }} \
            -e GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }} \
            -e GITHUB_REPOSITORY=${{ github.repository }} \
            -e GITHUB_PR_NUMBER=${{ github.event.pull_request.number }} \
            -e GITHUB_RUN_ID=${{ github.run_id }} \
            -e GITHUB_SERVER_URL=${{ github.server_url }} \
            ghcr.io/dappnode/staker-test-util/test-runner:latest

  release:
    name: Release
    runs-on: ipfs-dev-gateway
    needs: [test]
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v6
        with:
          node-version: "22"
      - name: Publish
        run: npx @dappnode/dappnodesdk publish patch --content_provider=http://10.200.200.7:5001 --eth_provider=https://web3.dappnode.net --timeout 2h --all-variants
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          DEVELOPER_ADDRESS: "0xf35960302a07022aba880dffaec2fdd64d5bf1c1"
```

### Features

- **Proof of Attestation Test**: The test job uses `MODE=test` which:
  1. Syncs execution and consensus clients (consensus uses checkpoint sync)
  2. Imports validators into web3signer
  3. Waits for validators to become live on the beacon chain
  4. Confirms successful attestation
- **Three-stage pipeline**: Build → Test → Release
- **Different runners**: Test runs on `staking-test-hoodi`, release on `ipfs-dev-gateway`

## Checkpoint Sync

Consensus clients benefit from **checkpoint sync**, which allows them to:

1. Start syncing from a recent finalized checkpoint instead of genesis
2. Sync in minutes rather than hours or days
3. Avoid the need for pre-synced volumes on the self-hosted runner

This is why consensus client packages don't need a dedicated `sync.yml` workflow to maintain a synced state.

## Environment Variables

| Variable            | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `MODE`              | `sync` for sync only, `test` for full attestation test              |
| `CONSENSUS_CLIENT`  | The consensus client name being tested (e.g., `teku`, `lighthouse`) |
| `EXECUTION_CLIENT`  | The execution client to pair with                                   |
| `IPFS_HASH`         | The IPFS hash of the built package to test                          |
| `NETWORK`           | The network to use (e.g., `hoodi`)                                  |
| `GITHUB_TOKEN`      | For PR commenting and GitHub API access                             |
| `GITHUB_REPOSITORY` | Repository name for PR comments                                     |
| `GITHUB_PR_NUMBER`  | PR number for posting reports                                       |
| `GITHUB_RUN_ID`     | Run ID for linking to CI logs                                       |
| `GITHUB_SERVER_URL` | GitHub server URL for links                                         |
