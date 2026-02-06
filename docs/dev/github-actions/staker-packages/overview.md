---
title: "Staker Packages CI Overview"
sidebar_label: Overview
llm_description: "Overview of CI/CD workflows for DAppNode staker packages including execution clients, consensus clients, and web3signer."
---

# Staker Packages CI Overview

Staker packages require more complex CI than standard packages because they need integration testing on real DAppNode hardware. This ensures that execution clients, consensus clients, web3signer, and MEV-boost work correctly together in a real staking environment.

## Architecture

The staker package CI runs on a **GitHub self-hosted runner** with the following characteristics:

- **DAppNode pre-installed** and running with `DEV=true`
- The `DEV=true` environment variable enables the **WebSocket frontend-backend RPC as an API**
- The CI uses the **same RPC calls a user would make** to configure a staker setup
- **Pre-synced execution client volumes** are loaded on the runner, enabling fast sync and attestation tests
- Consensus clients use **checkpoint sync**, so no pre-synced volume is required

## Test Types

### Sync Test

Verifies that both execution and consensus clients reach a synced state. This test ensures:

- The staker configuration is valid
- Clients can synchronize with the network
- The package builds correctly and can be installed

A report is posted to the PR with test details including:

- Clients used and their versions
- Timing measurements
- Container error logs (if any)

### Proof of Attestation Test

This is the most comprehensive test, executed during releases:

1. **Sync phase**: Same as the sync test - ensures clients are synchronized
2. **Attestation phase**: Imports validators into web3signer and waits for them to become live on the beacon chain

A successful attestation proves the **full staker stack is operational end-to-end**.

## Package-Specific Workflows

Different staker packages have different workflow requirements:

| Package Type      | auto_check.yml | sync.yml | sync-test.yml | release.yml |
| ----------------- | -------------- | -------- | ------------- | ----------- |
| Execution Clients | ✅             | ✅       | ✅            | ✅          |
| Consensus Clients | ✅             | ❌       | ✅            | ✅          |
| Web3Signer        | 🔄 TBD         | 🔄 TBD   | 🔄 TBD        | 🔄 TBD      |

See the specific workflow documentation:

- [Execution Client Workflows](./execution-clients.md)
- [Consensus Client Workflows](./consensus-clients.md)
- [Web3Signer Workflows](./web3signer.md)

## Manual Triggering

All staker package workflows can be **triggered manually** via `workflow_dispatch`, allowing you to:

- Test any client combination (execution + consensus)
- Debug issues with specific client pairings
- Run tests outside of the normal CI triggers

When triggering manually, you can select the consensus client to pair with the execution client (or vice versa).

## Self-Hosted Runners

The staker tests run on specific self-hosted runners:

- **`staking-test-hoodi`**: Main runner for sync and attestation tests on Hoodi testnet
- **`ipfs-dev-gateway`**: Used for the final release step to publish packages

## Test Report Example

When a sync test completes, a report like this is posted to the PR:

```markdown
## ✅ SYNC TEST REPORT - PASSED

### 📦 Clients Used

| Component | DNP Name                      | DNP Version |
| --------- | ----------------------------- | ----------- |
| Execution | `hoodi-reth.dnp.dappnode.eth` | `0.1.4`     |
| Consensus | `teku-hoodi.dnp.dappnode.eth` | `0.1.3`     |

### ⏱️ Timing Measurements

| Operation              | Duration | Status |
| ---------------------- | -------- | ------ |
| WaitForBeaconchainSync | 3ms      | ✅     |
| WaitForExecutionSync   | 24.015s  | ✅     |
```

The report includes version tracking (before/after install), timing measurements, and any container error logs for debugging.
