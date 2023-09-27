## Optimism rollup

Optimism is a Layer 2 scaling solution for Ethereum, using Optimistic Rollups to increase transaction speeds and reduce costs. It processes transactions off-chain and settles final states on the Ethereum main chain, while maintaining compatibility with Ethereum smart contracts.

## Running an Optimism Node

Optimism is the first implementation in the Rollups menu. Running an Optimism node in Dappnode is very similar to the Stakers Menu you familiarize with, but with a couple of key differences:
You’ll need an `op-node` client to connect to the Optimism Mainnet.
An `op-geth` or `op-erigon` (coming soon) client to connect your `op-node` with Ethereum mainnet’s execution layer. Similar to how a beacon chain/consensus client works on mainnet.
Only for archive nodes, you’ll need `op-legacy` for transactions previous to the Bedrock upgrade.
You’ll also need to be connected to an Ethereum Mainnet node. In case your Dappnode is running one, the Rollups menu will take care of the configuration for you. If this isn’t the case, you can add a public RPC for connecting to Ethereum Mainnet.

For more information, we recommend visiting Optimism’s [documentation on op-geth](https://op-geth.optimism.io/).
