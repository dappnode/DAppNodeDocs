# Consolidations

Since the [Pectra](https://ethereum.org/en/history/#pectra) update on May 7, 2025, validators can stake up to 2048 ETH. Instead of having to manage multiple 32 ETH validators, users can now choose to stake an arbitrary amount of ETH in a single validator. 

To make a validator able to stake more than 32 ETH, users  will have to **Upgrade the validator's withdrawal credentials**: From 0x01 to 0x02.

It is also possible to **Consolidate** multiple 32 ETH validators into a single validator with a higher stake. This requires an extra step: a **consolidation**. In a consolidation, two validators are merged into a single one. The _"source"_ validator will exit the chain, transferring its stake to the _"target"_ validator. 

Both these steps can be done through the [Staking Launchpad](https://launchpad.ethereum.org/en/) interface.

## How Smooth manages consolidations

Since the _source_ validator will exit the chain, it will not be able to propose blocks anymore and therefore convert its Smooth's _pending rewards_ into _accumulated rewards_. Effectively losing them.

To avoid this, Smooth will automatically detect when a validator is the source of a consolidation. Upon doing so, it will transfer all the _pending rewards_ from the source validator to the target validator. This way, no pending rewards will be lost during the consolidation process. Smooth will also remove the source validator from the pool.

## As a Smooth user, what do I need to do?

Consolidation is not required—Smooth will continue to work normally even if you don’t consolidate your validators.

However, if you want to consolidate any of your validators, we recommend upgrading your validator’s withdrawal credentials to 0x02 and performing the consolidation through the [Staking Launchpad](https://launchpad.ethereum.org/en/) interface. You will not need to do anything else; Smooth will take care of the rest.

:::danger
DO NOT manually unsubscribe any validator before consolidating it. Manually unsubscribing a validator will remove its pending rewards and Smooth will not be able to transfer them to the target validator.
:::

A consolidation may take a few days to complete. Once your source validator exits the chain, Smooth will transfer the pending rewards to the target validator. We recommend checking [Smooth's dashboard](https://smooth.dappnode.io/dashboard) to see if the transfer was successful.