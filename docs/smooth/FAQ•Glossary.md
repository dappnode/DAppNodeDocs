## FAQ

<details open>
  <summary>What do I need to claim rewards?</summary>
  Once your pending balance goes active after successfully proposing a block, a small claim transaction will be required from the withdrawal address to send the ETH rewards to your wallet.
</details>

<details open>
  <summary>Is there a fee that Dappnode takes for participating in Smooth?</summary>
  A 7% fee of Smooth goes to supporting the development of Dappnode.
</details>

<details open>
  <summary>If I want to unsibscribe my validator from Smooth, what's the best way to do it?</summary>
  The best moment to exit Smooth would be after successfully proposing a block, as it will activate your pending rewards and you'll be able to claim all of the accumulated rewards.
</details>

<details open>
  <summary>If I choose automatic subscription to Smooth, will part of my first block proposal still go to me?</summary>
  Yes, although manual subscription is recommended so that validators can start accumulating rewards as soon as they subscribe, as oposed to wait until a successful block proposal.
</details>

## Glossary

`Reward`: is considered to be any balance denominated in ETH that is sent to the `POOL_CONTRACT_ADDRESS`. These are detected by the oracle and shared fairly among all the participants in the pool at a given time. The oracle shall detect all these types of rewards and distribute them fairly (see rewards calculation section). All of these rewards are denominated in `ETH` and other types of tokens such as ERC20 are not considered by the oracle.
`MevBlock`: Comes from a block proposal where the reward was obtained via an off-chain agreement using tools such as mev-boost, usually coming as the last transaction in the block.
`VanilaBlock`: Comes from a block proposal where the reward was sent via the protocol `fee_recipient`.
`Donation`: Any address can send an arbitrary amount, either via an Eth tx or via a smart contract to the pool.
