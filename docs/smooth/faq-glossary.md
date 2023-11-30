# FAQ & Glossary
## FAQ

<details closed>
  <summary>What do I need to do to claim my rewards?</summary>
  Once your pending balance goes active after successfully proposing a block, a small claim transaction will be required from the withdrawal address to send the ETH rewards to your wallet.
</details>

<details closed>
  <summary>Is there a fee that Dappnode takes for participating in Smooth?</summary>
  7% of all the Rewards goes to supporting the development of Dappnode.
</details>

<details closed>
  <summary>If I want to unsubscribe my validator from Smooth, when is the best time to do it?</summary>
    Unsubscribing a validator from Smooth causes it to lose all its pending rewards. Hence, the ideal moment to exit Smooth is after successfully proposing a block. A successful block proposal transfers all pending rewards claimable, allowing you to claim them before unsubscribing. This approach minimizes the pending rewards lost when unsubscribing.
</details>

<details closed>
  <summary>If I choose automatic subscription to Smooth, will part of my first block proposal still go to me?</summary>
  Yes, although manual subscription is recommended so that validators can start accumulating rewards as soon as they subscribe, as oposed to wait until a successful block proposal.
</details>

## Glossary

`Reward`: Any balance denominated in ETH that is sent to Smooth. Rewards are detected by the oracle and shared fairly among all the participants in the pool. The oracle will detect all types of rewards and distribute them fairly. All rewards are denominated in `ETH` and other types of tokens such as ERC20 are not considered by the oracle. The vast majority of rewards come from block proposals of Smooth's validators and Donations.

`Pending rewards`: Pending rewards are those to be owned by the validator but not yet consolidated, rendering them unclaimable. Upon a successful block proposal by the validator, these rewards transition into the 'Accumulated rewards' category, becoming claimable. This mechanism ensures that validators can only claim rewards after contributing to the pool, guarding against cheating or exploiting the system.

`Accumulated rewards`: All consolidated rewards your validator has generated, i.e. those claimed and claimable.

`Claimable rewards`: Rewards ready to claim. Claimable rewards are the sum of all your accumulated rewards minus the rewards that have been claimed already. Only the withdrawal address of the validator can claim it's rewards.