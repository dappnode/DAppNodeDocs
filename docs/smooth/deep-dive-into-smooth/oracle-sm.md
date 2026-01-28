---
llm_description: Explains Smooth's Oracle and Smart Contract architecture for tracking validators and rewards.
---

# Smooth's architecture

[Smooth](https://smooth.dappnode.io/) is composed of two main components: the **Oracle** and the **Smart Contract**. These two components work together to track validators and distribute rewards fairly. Both are open source and indispensable to the functioning of [Smooth](https://smooth.dappnode.io/). While the Smart Contract serves to track all the events related to the pool onchain (subscriptions, unsubscriptions, block proposals, etc.), the Oracle is responsible for computing the rewards of each validator.

## The Smart Contract

Smooth's Smart Contract is deployed on the Ethereum mainnet and is responsible for "receiving" all the events related to the pool onchain. This includes subscriptions, unsubscriptions, block proposals, and more. Since it is the Smart Contract the one who holds all the ETH collected by the pool, it is from the Smart Contract where all [Smooth](https://smooth.dappnode.io/) users will claim their rewards.

Computing and storing all rewards calculations onchain would be almost impossible and very expensive, so merkle trees are used to summarize the state of all validators. This allows the Smart Contract to store a single hash onchain that represents the state of all validators subscribed to the pool. This hash is called the **Merkle Root** and **is computed by the Oracle**.


## The Oracle

As mentioned before, **the Oracle is responsible for computing the rewards of each validator**. It does so by computing a merkle tree that summarizes the state of all validators subscribed to the pool. This merkle tree, computed offchain, is summarized into a **Merkle Root**.

:::caution
Oracle works only with finalized data. This means that Oracle will effectively work with data from a few epochs ago. This is done to ensure that the data Oracle processes is non-reversible and no reorgs are possible.
:::

Once every 28800 slots (4 days), the Oracle sends a transaction to the Smart Contract with the updated Merkle Root. 

:::info
It is not until the Oracle sends the transaction to the Smart Contract with the updated Merkle Root that the rewards are available to be claimed by the validators. This means that if a validator correctly proposes a block, it will not be able to claim its rewards until the Oracle sends the transaction to the Smart Contract with the updated Merkle Root.
:::
