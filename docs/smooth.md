---
title: Smooth
description: Smooth introduction
---

# Welcome to Smooth, dappnode's MEV Smoothing Pool!

Welcome to the Smooth Documentation! This section provides valuable insights into the Smooth project, an MEV Smoothing Pool designed to enhance rewards for participants in the Ethereum network. 

:::info
This documentation is a work in progress. 
:::
## What is Smooth and why it matters

Smooth is an MEV Smoothing Pool. It helps earn higher rewards on average by pooling MEV rewards among a group of Stakers. 

**Smooth works by setting the Fee Recipient address of a group of validators to the Smooth Smart Contract, and the rewards that the Smart Contract receives are distributed among all those who are pooling their rewards.**

### Higher rewards?

A Solo staker proposes 5 or 6 blocks on average per year. The chances of getting a "Lottery Block" are very slim, and most likely we are going to get rewards on the order of 0.00-something ETH. 

If we pool together all our rewards, we have collectively a much higher chance of getting lottery blocks, and then we divide the big payout among all participants! It's the same concept as Bitcoin Mining Pools.

In short, a participant gives up their almost impossible chance of getting a Lottery Block by the much higher chance of getting higher rewards. **In [backtesting simulations](https://github.com/htimsk/SPanalysis), rewards were up to 80% higher than being a solo staker!**

### Finally getting at par with Lido and big Exchanges!

Lido, Centralized Exchanges and other pools with lots of validators consistently hit lottery blocks because of the sheer numbers of validators they have. They naturally split these rewards between all their validators, effectively being at an advantage vs the average solo staker. 

This is a centralizing force, as the rich become richer and bigger operations get bigger rewards. Now Solo Stakers with few validators don't depend on luck to be at par with the big guys!

The pool has two main components:
* **oracle**: Calculates off-chain the rewards that each participant of the smoothing pool can claim, using on-chain data from the consensus and execution layer. It also summarizes all balances and addresses with the right to claim in a merkle root, that is periodically stored on-chain, making it non-revertable. On the other hand it serves as a data availability layer, that can be used to get the proofs one needs to use on-chain to claim their share of the rewards.
* **contract**: Gets all the rewards produced by the members of the pool and provides a set of functions to subscribe, unsubscribe and claim rewards by providing the appropriate proofs.
