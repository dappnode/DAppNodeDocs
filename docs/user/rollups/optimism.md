# Optimism Rollup

Optimism is Ethereum's Layer 2 solution, leveraging Optimistic Rollups to enhance transaction speeds and lower costs. It conducts transactions off-chain, reconciling final states on the main Ethereum chain, all while preserving compatibility with Ethereum smart contracts.

## Setting Up an Optimism Node

Optimism stands out as the inaugural choice in the Rollups suite. Initiating an Optimism node on Dappnode parallels the familiar Stakers Menu, yet with some distinctions:

- Utilize an `op-node` client to link with the Optimism Mainnet.
- Employ `op-geth` or the forthcoming `op-erigon` client to bridge your `op-node` to Ethereum's execution layer, echoing the beacon chain/consensus client's role on the mainnet.
- For archive nodes, `op-legacy` is essential for transactions predating the Bedrock upgrade.
- A connection to an Ethereum Mainnet node is required. If your Dappnode already operates one, the Rollups menu will streamline configuration. Otherwise, integrate a public RPC for Ethereum Mainnet connection.

For a deeper dive, consult Optimism’s documentation:

- [OP Geth docs](https://op-geth.optimism.io/)

- [OP Node Operator](https://community.optimism.io/docs/developers/bedrock/node-operator-guide/)
