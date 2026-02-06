---
title: "GitHub Actions for Dappnode Packages"
sidebar_label: Overview
llm_description: "Overview of GitHub Actions workflows for automating upstream updates, testing, and releases in Dappnode packages."
---

# GitHub Actions for Dappnode Packages

GitHub Actions help automate workflows around your projects on GitHub. For Dappnode packages, we utilize specific GitHub Actions to manage updates, testing, and releases.

## Types of Dappnode Packages

Dappnode packages fall into two main categories, each with different CI/CD requirements:

### Standard Packages

Standard packages (e.g., Rotki, IPFS, etc.) use a simpler CI workflow that includes:

- **Upstream version checking**: Automatically detects new upstream releases
- **Build and pre-release**: Builds packages and creates pre-releases on PRs and pushes

See [Standard Packages CI](./standard-packages.md) for detailed workflow configurations.

### Staker Packages

Staker packages require more complex CI that includes integration testing on real DAppNode hardware. These packages include:

- **Execution clients** (Geth, Reth, Nethermind, Besu, Erigon)
- **Consensus clients** (Lodestar, Teku, Prysm, Nimbus, Lighthouse)
- **Web3Signer**
- **MEV-Boost**

The staker package CI runs on a GitHub self-hosted runner with DAppNode pre-installed and running with `DEV=true`, which enables the WebSocket frontend-backend RPC as an API. This allows the CI to use the same RPC calls a user would make to configure a staker setup.

See [Staker Packages CI](./staker-packages/overview.md) for detailed information about:

- [Execution Client Workflows](./staker-packages/execution-clients.md)
- [Consensus Client Workflows](./staker-packages/consensus-clients.md)
- [Web3Signer Workflows](./staker-packages/web3signer.md)

## Common Requirements

All DAppNode package workflows require:

- **`GITHUB_TOKEN`**: Automatically provided by GitHub for authentication
- **`PINATA_API_KEY`** and **`PINATA_SECRET_API_KEY`**: For interfacing with the IPFS pinning service Pinata (standard packages)

Staker packages additionally require:

- Access to a self-hosted runner with DAppNode installed
- Pre-synced execution client volumes for faster test execution
