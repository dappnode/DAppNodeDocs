# FAQ & Glossary

## FAQ

<details>
<summary><b>What do I need to do to claim my rewards?</b></summary>

  Once your pending rewards are transformed into accumulated rewards after your block proposal, a small claim transaction will be required from the withdrawal address to send the ETH rewards to your wallet.

</details>



<details>
  <summary><b>Is there a fee that Dappnode takes for participating in <a href="https://smooth.dappnode.io/">Smooth</a>?</b></summary>

  7% of all the Rewards goes to supporting the development of Dappnode and sustainability of <a href="https://smooth.dappnode.io/">Smooth</a>
</details>

<details>
  <summary><b>If I want to unsubscribe my validator from <a href="https://smooth.dappnode.io/">Smooth</a>, when is the best time to do it?</b></summary>

  Unsubscribing a validator from <a href="https://smooth.dappnode.io/">Smooth</a> causes it to lose all its pending rewards. Hence, the ideal moment to exit <a href="https://smooth.dappnode.io/">Smooth</a> is just after your last successful block proposal is reflected in Smooth's Smart Contract. A successful block proposal transfers all pending rewards claimable, allowing you to claim them before unsubscribing. This approach minimizes the pending rewards lost when unsubscribing.
</details>

<details>
  <summary><b>Does <a href="https://smooth.dappnode.io/">Smooth</a> take my Consensus Layer (CL) rewards?</b></summary>
  
  No, <a href="https://smooth.dappnode.io/">Smooth</a> does not take your CL rewards. CL rewards are always sent directly to your withdrawal address. <a href="https://smooth.dappnode.io/">Smooth</a> only takes the execution layer rewards, which are the fees or MEV of the blocks you propose. These are the rewards that are sent to the fee recipient.
</details>

## Glossary

`Reward`: Any balance denominated in ETH that is sent to [Smooth](https://smooth.dappnode.io/). Rewards are detected by the oracle and shared fairly among all the participants in the pool. The oracle will detect all types of rewards and distribute them fairly. All rewards are denominated in `ETH` and other types of tokens such as ERC20 are not considered by the oracle. The vast majority of rewards come from block proposals of Smooth's validators and Donations.

`Pending rewards`: Pending rewards are those to be owned by the validator but not yet consolidated, rendering them unclaimable. Upon a successful block proposal by the validator, these rewards transition into the 'Accumulated rewards' category, becoming claimable. This mechanism ensures that validators can only claim rewards after contributing to the pool, guarding against cheating or exploiting the system.

`Accumulated rewards`: All consolidated rewards your validator has generated, i.e. those claimed and claimable.

`Claimable rewards`: Rewards ready to claim. Claimable rewards are the sum of all your accumulated rewards minus the rewards that have been claimed already. Only the withdrawal address of the validator can claim its rewards.
