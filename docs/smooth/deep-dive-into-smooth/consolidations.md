# Consolidations

Since the [Pectra](https://ethereum.org/en/history/#pectra) update on May 7, 2025, validators can stake up to 2048 ETH. Instead of having to manage multiple 32 ETH validators, users can now choose to stake an arbitrary amount of ETH in a single validator. 

To make a validator able to stake more than 32 ETH, users will have to **upgrade the validator's withdrawal credentials**: From 0x01 to 0x02. You can do it in the [Staking Launchpad](https://launchpad.ethereum.org/en/) interface.

It is also possible to **consolidate** multiple 32 ETH validators into a single validator with a higher stake. This requires an extra step: a **consolidation**. In a consolidation, two validators are merged into a single one. The _"source"_ validator will exit the chain, transferring its stake to the _"target"_ validator. 

Consolidations can also be done through the [Staking Launchpad](https://launchpad.ethereum.org/en/) interface.

## How Smooth manages consolidations

Smooth will automatically detect when a validator is the source of a consolidation. Upon doing so, it will transfer all the _pending rewards_ from the source validator to the target validator. This way, no pending rewards will be lost during the consolidation process. Smooth will also remove the source validator from the pool.

## As a Smooth user, what do I need to do?

Consolidation is not required—Smooth will continue to work normally even if you don’t consolidate your validators.

However, if you want to consolidate any of your validators, you will need to upgrade your validator’s withdrawal credentials to 0x02 and perform the consolidation through the [Staking Launchpad](https://launchpad.ethereum.org/en/) interface. You will not need to do anything else; Smooth will take care of the rest. **Please ensure that the "target" validator of your consolidation is already subscribed to Smooth.** 

:::danger
DO NOT manually unsubscribe any validator. Manually unsubscribing a validator will remove its pending rewards and Smooth will not be able to transfer them to the target validator. Smooth will automatically unsubscribe the source validator once the consolidation is complete.
:::

A consolidation may take a few days to complete. Once your source validator exits the chain, Smooth will transfer the pending rewards to the target validator. We recommend checking [Smooth's dashboard](https://smooth.dappnode.io/dashboard) to see if the transfer was successful.