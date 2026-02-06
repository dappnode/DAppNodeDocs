---
title: "Execution Client Workflows"
sidebar_label: Execution Clients
llm_description: "GitHub Actions workflows for DAppNode execution client packages including sync, sync-test, and release workflows."
---

# Execution Client Workflows

Execution client packages (Geth, Reth, Nethermind, Besu, Erigon) use four GitHub Actions workflows to ensure proper testing and release automation.

## Workflow Overview

| Workflow         | Trigger                  | Purpose                       |
| ---------------- | ------------------------ | ----------------------------- |
| `auto_check.yml` | Scheduled (every 4h)     | Check for upstream updates    |
| `sync.yml`       | Scheduled daily + manual | Keep execution client synced  |
| `sync-test.yml`  | Pull requests + manual   | Test package changes          |
| `release.yml`    | Push to main + manual    | Release with attestation test |

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

## 2. Sync Production (`sync.yml`)

This workflow keeps the execution client synced on the self-hosted runner. By maintaining a synced state, other workflows (sync-test, release) complete much faster.

### Workflow File

```yaml
name: Execution Client Sync Production

on:
  schedule:
    - cron: "0 4 * * *"
  workflow_dispatch:
    inputs:
      consensus_client:
        description: "Consensus Client"
        required: true
        type: choice
        options: [lodestar, teku, prysm, nimbus, lighthouse]

jobs:
  sync:
    runs-on: staking-test-hoodi
    steps:
      - name: Run sync
        run: |
          docker run --rm --pull=always --network dncore_network \
            -v /var/run/docker.sock:/var/run/docker.sock \
            -e MODE=sync \
            -e EXECUTION_CLIENT='geth' \
            -e CONSENSUS_CLIENT=${{ github.event.inputs.consensus_client }} \
            -e NETWORK=hoodi \
            ghcr.io/dappnode/staker-test-util/test-runner:latest
```

### Features

- **Scheduled daily**: Runs at 4 AM UTC to keep the client synced
- **Manual trigger**: Can be triggered manually with any consensus client
- **Uses test-runner image**: The `ghcr.io/dappnode/staker-test-util/test-runner` container handles the sync logic
- **Network access**: Connects to the DAppNode's `dncore_network` to communicate with other services

## 3. Sync Test (`sync-test.yml`)

Triggered on PRs to test package changes. Builds the package, uploads it to the local IPFS node, and runs a sync test with the new version.

### Workflow File

```yaml
name: Execution Client Sync Test

on:
  workflow_dispatch:
    inputs:
      consensus_client:
        description: "Consensus Client"
        required: true
        type: choice
        options: [lodestar, teku, prysm, nimbus, lighthouse]
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
    name: Execution Client Sync Test
    needs: [build]
    steps:
      - name: Run sync
        run: |
          docker run --rm --pull=always --network dncore_network \
            -v /var/run/docker.sock:/var/run/docker.sock \
            -e MODE=sync \
            -e EXECUTION_CLIENT='geth' \
            -e IPFS_HASH=${{ needs.build.outputs.ipfs_hash }} \
            -e CONSENSUS_CLIENT=${{ github.event.inputs.consensus_client }} \
            -e GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }} \
            -e GITHUB_REPOSITORY=${{ github.repository }} \
            -e GITHUB_PR_NUMBER=${{ github.event.pull_request.number }} \
            -e GITHUB_RUN_ID=${{ github.run_id }} \
            -e GITHUB_SERVER_URL=${{ github.server_url }} \
            ghcr.io/dappnode/staker-test-util/test-runner:latest
```

### Features

- **Builds to local IPFS**: Uses the DAppNode's IPFS node as the provider
- **IPFS hash extraction**: Extracts the hash from `releases.json` for the test
- **PR integration**: Posts a test report to the PR with results
- **GitHub context**: Passes GitHub environment variables for PR commenting

### PR Report

After the test completes, a report is posted to the PR including:

- Clients used and versions (before/after install)
- Timing measurements for each operation
- Container error logs (if any)
- Link to full CI logs

## 4. Release (`release.yml`)

Triggered on push to main. Runs a full attestation test before releasing the package.

### Workflow File

```yaml
name: "Release"

on:
  workflow_dispatch:
    inputs:
      consensus_client:
        description: "Consensus Client"
        required: true
        type: choice
        options: [lodestar, teku, prysm, nimbus, lighthouse]
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
            -e CONSENSUS_CLIENT=${{ github.event.inputs.consensus_client }} \
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
  1. Syncs execution and consensus clients
  2. Imports validators into web3signer
  3. Waits for validators to become live on the beacon chain
  4. Confirms successful attestation
- **Three-stage pipeline**: Build → Test → Release
- **Different runners**: Test runs on `staking-test-hoodi`, release on `ipfs-dev-gateway`
- **All variants**: Publishes all package variants with `--all-variants`

### Test Logs

The proof of attestation test logs include:

- Validator beaconcha.in URL
- Clients used and versions
- Sync timing measurements
- Attestation confirmation

## Environment Variables

| Variable            | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `MODE`              | `sync` for sync only, `test` for full attestation test |
| `EXECUTION_CLIENT`  | The execution client name (e.g., `geth`, `reth`)       |
| `CONSENSUS_CLIENT`  | The consensus client to pair with                      |
| `IPFS_HASH`         | The IPFS hash of the built package to test             |
| `NETWORK`           | The network to use (e.g., `hoodi`)                     |
| `GITHUB_TOKEN`      | For PR commenting and GitHub API access                |
| `GITHUB_REPOSITORY` | Repository name for PR comments                        |
| `GITHUB_PR_NUMBER`  | PR number for posting reports                          |
| `GITHUB_RUN_ID`     | Run ID for linking to CI logs                          |
| `GITHUB_SERVER_URL` | GitHub server URL for links                            |
