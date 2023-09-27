## **Ethereum Rollups: An Overview**

Rollups are advanced layer-2 scaling solutions designed to increase the throughput of the Ethereum network. By executing and storing transaction data off the main Ethereum chain while keeping a cryptographic commitment on-chain, Rollups enhance scalability and reduce fees. Rollups can be broadly categorized into two types: Optimistic Rollups and zk-Rollups, each with its unique approach and trade-offs.

![Rollups](/img/rollups-menu.png)

## Running an Optimism Node
Optimism is the first implementation in the Rollups menu. Running an Optimism node in Dappnode is very similar to the Stakers Menu you familiarize with, but with a couple of key differences:
You’ll need an `op-node` client to connect to the Optimism Mainnet.
An `op-geth` or `op-erigon` client to connect your `op-node` with Ethereum mainnet’s execution layer. Similar to how a beacon chain/consensus client works on mainnet.
For archive nodes, you’ll need `op-legacy` for transactions previous to the Bedrock upgrade.
You’ll also need to be connected to an Ethereum Mainnet node. In case your Dappnode is running one, the Rollups menu will take care of the configuration for you. If this isn’t the case, you can add a public RPC for connecting to Ethereum Mainnet, like Infura: `https://mainnet.infura.io/v3/`.

For more information, we recommend visiting Optimism’s [documentation on op-geth](https://op-geth.optimism.io/).
