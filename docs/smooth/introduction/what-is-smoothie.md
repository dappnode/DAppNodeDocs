# Smooth

## What is Smooth and why it matters

Smooth is an MEV Smoothing Pool. It helps earn higher rewards on average by pooling MEV rewards among a group of Stakers. 

It works by setting the Fee Recipient address to the Smooth Smart Contract, and the rewards that the Smart Contract receives are distributed among all those who are pooling their rewards.

### Higher rewards?

A Solo staker proposes 5 or 6 blocks on average per year. The chances of getting a "Lottery Block" are very slim, and most likely we are going to get rewards on the order of 0.00-something ETH. 

If we pool together all our rewards, we have collectively a much higher chance of getting lottery blocks, and then we divide the big payout among all participants! It's the same concept as Bitcoin Mining Pools.

In short, a participant gives up their almost impossible chance of getting a Lottery Block by the much higher chance of getting higher rewards. In [bakctesting simulations](https://github.com/htimsk/SPanalysis), rewards were up to 80% higher than being a solo staker!

### Finally getting at par with Lido and big Exchanges!

Lido, Centralized Exchanges and other pools with lots of validators consistently hit lottery blocks because of the sheer numbers of validators they have. They naturally split these rewards between all their validators, effectively being at an advantage vs the average solo staker. 

This is a centralizing force, as the rich become richer and bigger operations get bigger rewards. Now Solo Stakers with few validators don't depend on luck to be at par with the big guys!

The pool has two main components:
* **oracle**: Calculates off-chain the rewards that each participant of the smoothing pool can claim, using on-chain data from the consensus and execution layer. It also summarizes all balances and addresses with the right to claim in a merkle root, that is periodically stored on-chain, making it non-revertable. On the other hand it serves as a data availability layer, that can be used to get the proofs one needs to use on-chain to claim their share of the rewards.
* **contract**: Gets all the rewards produced by the members of the pool and provides a set of functions to subscribe, unsubscribe and claim rewards by providing the appropriate proofs.

## Configuration parameters

The smoothing pool shall contain the following configuration parameters:
* `COLLATERAL_GWEI`: Amount of collateral in gwei that a validator need to join the pool.
* `DEPLOYED_SLOT`: Slot when the smoothing pool contract was deployed.
* `CHECKPOINT_SIZE_SLOTS`: How often the smart contract root is updated with new rewards, in slots.
* `OWNER_ADDRESS`: Set of addresses with `0x` prefix that are allowed to update the smoothing pool contract.
* `QUORUM`: Amount of `OWNER_ADDRESS` that have to agree on the merkle root before it's considered consolidated. As an example this number could be 3/4, where 4 addresses are allowed to update the root and 3 of them have to agree.
* `POOL_CONTRACT_ADDRESS`: Address with `0x` prefix of the smoothing pool contract.
* `NETWORK`: Network where rewards are being calculated: `mainnet` or `goerli`.
* `POOL_FEES_ADDRESS`: Address with `0x` prefix of the account that can claim the smoothing pool fees.
* `POOL_FEES_PERCENT`: Amount in % (scaled by 100) that `POOL_FEES_ADDRESS` gets for every reward sent to the smoothing pool. Note that it also gets rounding remainders on top, but this is almost neglectable.

## Source of rewards

A `Reward` is considered to be any balance denominated in Eth that is sent to the `POOL_CONTRACT_ADDRESS`. These are detected by the oracle and shared fairly among all the participants in the pool at a given time. The oracle shall detect all these types of rewards and distribute them fairly (see rewards calculation section). All of these rewards are denominated in `ETH` and other types of tokens such as ERC20 are not considered by the oracle:
* `MevBlock`: Comes from a block proposal where the reward was obtained via an off-chain agreement using tools such as mev-boost, usually coming as the last transaction in the block.
* `VanilaBlock`: Comes from a block proposal where the reward was sent via the protocol `fee_recipient`.
* `Donation`: Any address can send an arbitrary amount, either via an Eth tx or via a smart contract to the pool.

## Subscribe/unsubscribe/ban

Only the following validators can subscribe into the pool:
* Validators in active state (not exiting nor slashed). Validators with a wrong state will be ignored.
* Validators with eth1 withdrawal credentials. Validators with BLS credentials will be ignored.

Rewards are only shared among subscribed participants in the pool. Hereunder it's explained the different ways in which a validator can join or leave the pool. Joining can be done with manual or automatatic subscription. And leaving can be done by unsubscribing to the pool or by being banned from it.

**Subscribing** to the pool:
* `ManualSubscription`: If any validator sends a `MevBlock` or `VanilaBlock` reward to the smoothing pool contract `POOL_CONTRACT_ADDRESS` it is considered automatically subscribed into the pool, and will start accruing rewards from that moment. This type of subscription doesn't require any collateral or lock up of funds, since by successfully proposing a block with the correct fee recipient, we consider that this validator has enough skin in the game. However, since block proposals are a rare event, it can take weeks or even months for a validator to get automatically subscribed. This is not ideal because it won't be leveraging the benefits of the smoothing pool during this time.
* `AutoSubscription`: On the other hand, a validator can start earning rewards from the very beginning if it adds `COLLATERAL_GWEI` amount as collateral. This collateral can be deposited by calling the register function in the oracle smart contract. This type of subscription allows the validator to start earning rewards without having to wait weeks or months until a proposal is detected. A subscription is only considered valid if:
  * `collateral>=COLLATERAL_GWEI`
  * The `validatorIndex` included is the transaction
  * The account that sent the transaction matches the `validatorIndex` withdrawal credentials.


Note that the collateral that a validator deposits via its withdrawal address is added to the validator `PendingRewards`. This means that it is returned after the first valid block proposal. In other words, the pool doesnt get the collateral, it just blocks it until the validator proposes a block. See `PendingRewards`, `AccumulatedRewards` down below. Note also that if by mistake a validator deposits the colateral twice, the second one is also returned.

**Unsunscribing** from the pool:
* `Unsubscribe`: Similarly, the oracle shall detect the following event from the smoothing pool smart contract, which signals that a given `validatorIndex` was unsubscribed from the pool. Note that the unsubscription is only considered valid if the `sender` matches the validator withdrawal address.

**Banning** from the pool:
* The oracle shall detect if an active validator in the smoothing pool proposed a block with a `fee_recipieint` different than `POOL_CONTRACT_ADDRESS`. This means that this validator sent its reward to a different address, so we consider this misbehaving and the validator will be banned forever from the smoothing pool.


## State machine

The oracle uses the following [state machine](https://excalidraw.com/#json=lnKxFVwNZ82gz7gVZNHoq,m3mIc64GhKrpg3urVyI6dg) to track the status of the different validators that are subscribed to the smoothing pool. Different actions can trigger a state change and in the following image all possible transitions are described.

![statemachine](https://github.com/dappnode/mev-sp-oracle/blob/main/spec/states.png?raw=true)

There are 5 different states a validator can have:
* `Active`: A validator is active and subscribed to the pool, earning rewards over the time.
* `YellowCard`: The validator missed only its last block proposal, but still earns rewards.
* `RedCard`: The validator missed two block proposals in a row. In this state the validator does not earn rewards until a valid block has been proposed.
* `NotSubscribed:` The validator is no longer subscribed to the pool, but still tracked by the validator. For example, a validator that unsubscribed. Note that this is still tracked because a validator can unsubscribe but it may still pending balance to claim. In this state the validator does not earn rewards.
* `Banned`: The validator is banned forever from the pool. A validator is banned when its subscribed to the pool but proposes a block with the wrong fee recipient.
* `Untracked`: The validator is not tracked by the pool. It never subscribed before nor has any active subscription.

And 6 different actions can trigger a state transition:
* `ProposalOk`: The validator proposed a valid block with its rewards correctly sent to the smoothing pool address.
* `ProposalMissed`: The validator should have proposed a block but missed its proposal.
* `ProposalWrongFee`: The validator proposes a block but with a wrong fee recipient.
* `ManualSubscription`: The validator manually subscribes to the pool, depositing collateral for its validator index by calling the smart contract function (see event).
* `AutoSubscription`: The validator is automatically subscribed to the pool, by setting as fee recipient the smoothing pool address.
* `Unsubscribe`: The validator manually unsubscribes to the pool, calling the unsubscribe function from the smart contract (see event).

## Rewards calculation

When a validator has an active subscription to the pool (`Active` or `YellowCard` state) it is eligible for rewards, meaning that it will receive a given share of each reward that is sent to the pool. Validators in `RedCard` are considered subscribed, but don't earn rewards until they become active again.

There are two **sources of rewards**:
* Block proposals (execution layer rewards earned via tips or MEV), see `MevBlock` or `VanilaBlock`.
* Donations by any user that sends an arbitrary amount of Eth balance to the contract, see `PayableDonation` or `NonPayableDonation`.

With the incoming rewards to the pool, the oracle calculates two different types of validator rewards:
* `AccumulatedRewards`: This rewards are already consolidated, meaning that they can be claimed at any time, by submitting a valid proof to the smart contract. This assumes that a `CHECKPOINT_SIZE_SLOTS` has been reached, and rewards are ready to be claimed onchain.
* `PendingRewards`: This rewards are not *consolidated* yet, meaning that they belong to the validator but they can be claimed, until a valid block proposal is sent to the smoothing pool.

It's defined as **consolidate balance** when a validator proposes a block whose fee recipient address is correctly sent to the smoothing pool (`POOL_CONTRACT_ADDRESS` address). When a validator consolidates its rewards, all its `PendingRewards` are added to its `AccumulatedRewards`, meaning that what was pending is now ready to claim at any time. Note also that after performing this operation the `PendingRewards` are reset. So consolidating can be seen as a way of converting the `Pending` into `Accumulated`.

All validator rewards are updated on every **finalized** block that is added to the chain. It is important to highlight that it is only done on finalized blocks, since this implies that the block is non-reversable and no reorgs are possible at this point (unless something major happens).

When calculating the rewards, the pool operator takes a cut for each reward that is sent to the pool, where `POOL_FEES_ADDRESS` gets `POOL_FEES_PERCENT`. The rest of the rewards are shared evenly among all eligible validators. This value shall not be higher than 100% and its stored as scaled by x100, which allows to have two decimal points.

Regarding the pool fees, note that the funds are not sent *per se* to the `POOL_FEES_ADDRESS` but they are added as a leaf in the merkle tree (see merkle tree section). In other words, the owner of the pool can claim the fees as if it were a validator, by providing a valid merkle proof and using said address as sender.

For each reward (see types of rewards) that is sent to the pool on a finalized block, it is distributed as follows:
* Get the amount of eligible validators (validators that are eligible for rewards) `Active` or `YellowCard` state.
* The pool takes `POOL_FEES_PERCENT` of that reward, increasing its balance `AccumulatedRewards` by that amount + remainder (if any). Note that all the arithmetic is integer based without decimals, hence the remainder.
* The reward minus the cut (and the remainder) is shared among all eligible validators. Note that if there is also a reminder, it goes to the `POOL_FEES_ADDRESS`, increasing its `AccumulatedRewards`.
* Each eligible validator gets its `PendingRewards` increased by that amount.
* If the reward comes from a block proposal, the validator gets its `AccumulatedRewards` consolidated, since it has proven that is participating in the pool.

Note that the pool gets the remainders from two different divisions, but this is done for simplicity and since the calculations are in wei, the value of it is neglectable. Doing this makes the oracle fair with all validators, since each one of them gets the exact same amount of rewards. So in practice, `POOL_FEES_ADDRESS` just gets `POOL_FEES_PERCENT`.

## Merkle trees and proofs

Since storing all rewards calculations on-chain would be almost impossible and very expensive, merkle trees are used to summarize the state of all validators tracked by the oracle in a given value called **merkle root*. All the computation of the rewards is done off-chain by the oracle, and on every `CHECKPOINT_SIZE_SLOTS` all rewards all calculated and summarized in a new merkle root that is stored on-chain in Ethereum.

Each leaf of the tree contains two values, the withdrawal address and the accumulated balance. Note that in order to be more gas efficient and allow to claim of multiple validators in just one transactions, all validators belonging to the same withdrawal address are aggregated.

```go
type RawLeaf struct {
	WithdrawalAddress     string
	AccumulatedBalance *big.Int
}
```

![trees](https://github.com/dappnode/mev-sp-oracle/blob/main/spec/merkles.png?raw=true)

* The merkle tree leafs are ordered by its deposit address in ascending order.
* The merkle tree is prepended (first element) with a leaf containing `POOL_FEES_ADDRESS` and the accumulated balance. See rewards calculation section.
* The merkle leafs are hashed with solidity `sha3` hashing algorithm.
* Withdrawal addresses in the merkle tree shall be unique.
* The hashing algorithm for the merkle tree is `keccak256`.
* The hashing algotithm for the merkle tree shall sort sibling pairs.
* The withdrawal addresses in the merkle tree shall be in lower case.

Every `CHECKPOINT_SIZE_SLOTS` the oracle updates in the smoothing pool smart contract stored in the Ethereum blockchain a new merkle root, that summarizes the rewards that each address can claim. Anyone that controls said address, can claim their rewards by providing a valid merkle proof, prooving that a given leaf is contained within the merkle tree represented by that merkle root.

Since all this data is not available in Ethereum, the oracle shall provide this proofs so that they can be used off-chain. Note that these proofs can be generated by anyone compliying with this specs and with the existing available data on-chain. See [merkle proofs](https://ethereum.org/es/developers/tutorials/merkle-proofs-for-offline-data-integrity/)


## Smart contract

See https://github.com/dappnode/mev-sp-contracts


