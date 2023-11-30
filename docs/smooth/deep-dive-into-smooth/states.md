# Smooth Validator States

A Smooth validator can be in multiple states depending on its behavior. In this section we will explain all possible states a validator can have, the consequences of being each state, and how a validator can transition from one state to another.

## State Machine Overview

The oracle employs a **state machine** to monitor the status of subscribed validators within Smooth. Various actions trigger state changes, detailed in the following image encompassing all possible transitions. Let's take a look at it:

![statemachine](https://github.com/dappnode/mev-sp-oracle/blob/main/spec/states.png?raw=true)


There are 5 different states a validator can have:
* **Active**: A validator is active and subscribed to the pool, earning rewards over the time.
* **YellowCard**: The validator missed only its last block proposal, but still earns rewards.
* **RedCard**: The validator missed two block proposals in a row. In this state the validator does not earn rewards until a valid block has been proposed by it. In other words, this validator is not recieving `Pending Rewards` when somebody contributes to the pool.
* **NotSubscribed**: The validator is no longer subscribed to the pool, but still tracked by the validator. For example, a validator that unsubscribed. Note that this is still tracked because a validator can unsubscribe but it may still have pending balance to claim. In this state the validator does not earn rewards.
* **Banned**: The validator is banned forever from the pool. **A validator is banned when its subscribed to the pool but proposes a block with the wrong fee recipient**.
* **Untracked**: The validator is not tracked by the pool. It never subscribed before nor has any active subscription.

And 6 different actions can trigger a state transition:
* `ProposalOk`: The validator proposed a valid block with its rewards correctly sent to the smoothing pool address.
* `ProposalMissed`: The validator should have proposed a block but missed its proposal.
* `ProposalWrongFee`: The validator proposes a block but with a wrong fee recipient.
* `ManualSubscription`: The validator manually subscribes to the pool, depositing collateral for its validator index by calling the smart contract function (see event).
* `AutoSubscription`: The validator is automatically subscribed to the pool, by setting as fee recipient the smoothing pool address.
* `Unsubscribe`: The validator manually unsubscribes to the pool, calling the unsubscribe function from the smart contract (see event).


## The purpose of the State Machine

Beyond tracking validator statuses, the state machine ensures fair reward distribution and encourages correct behavior among validators.

Validators consistently proposing blocks receive greater rewards compared to those frequently missing proposals, promoting active participation and contribution to the pool.