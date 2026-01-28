> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Smooth Validator States

A [Smooth](https://smooth.dappnode.io/) validator can be in multiple states depending on its behavior. In this section we will explain all possible states a validator can have, the consequences of being each state, and how a validator can transition from one state to another.

## State Machine Overview

The oracle employs a **state machine** to monitor the status of subscribed validators within [Smooth](https://smooth.dappnode.io/). Various actions trigger state changes, detailed in the following image encompassing all possible transitions. Let's take a look at it:

![statemachine](/img/smooth_states.png)


There are 6 different states a validator can have:

* 🟢 **Active**: The validator is active and subscribed to the pool, earning rewards over time. 
* 🟡 **YellowCard**: The validator missed its last block proposal but not two in a row. This validator earns rewards as if it was active.
* 🔴 **RedCard**: The validator missed its latest two block proposals in a row. As a penalty, the validator does not earn rewards until its next block is successfully proposed to the pool. In other words, this validator is not receiving `Pending Rewards` when somebody else contributes to the pool. 
* ⚪ **NotSubscribed**: The validator is no longer subscribed to the pool, but still tracked by the validator. For example, a validator that unsubscribed. Note that this is still tracked because a validator can unsubscribe but it may still have pending balance to claim. In this state, the validator does not earn rewards. 
* ☠️ **Banned**: The validator is banned forever from the pool. A validator is banned when it is subscribed to the pool but proposes a block with the wrong fee recipient. 
* ❓**Untracked**: The validator is not tracked by the pool. It has never subscribed to the pool. 


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
