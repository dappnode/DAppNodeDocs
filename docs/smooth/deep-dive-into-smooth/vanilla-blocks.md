---
title: What is a vanilla block?

---

**What is a vanilla block?**

In the context of the Smooth protocol, we define a vanilla block as a block build locally by the execution client, as opposed to a block built by professional block builders with sofisticated algorithms for extracting MEV and sometimes private transactions that do not appear in the mempool. 

While building blocks locally is a perfectly valid option for validators, it is one that doesn't serve to maximize the profit that can be extracted from proposing that block. Since the goal of Smooth as a MEV smoothing pool is to use these MEV rewards to maximize high and consistent rewards, proposing vanilla blocks into the pool is suboptimal.

Those wishing to build their own blocks locally when they propose a block are free to do so, but outside of Smooth.

**Why proposing a Vanilla block is not beneficial for you?**
As a Smooth user, your goal is to maximize your rewards. Proposing a vanilla block can hinder this objective for several reasons:

1. Lower Rewards: Vanilla blocks generally include less transaction fees for the block builder (or for the smoothing pool) because blocks built by professional operators include custom algorithms for reordering transactions, inject transactions to extract value (front-running and back-running) and potentially have access to transactions coming via private channels that do not appear in the mempool. Hence, without these algorithms, capital to take advantage of the arbitrage opportunities and value extraction and private flow of transactions, it will almost always be less profitable to build a vanilla block.

Then, if a vanilla block is almost assured to propose lower rewards than an MEV block, a validator proposing vanilla blocks is capping the amount that they can contribute to the pool while enjoying the smoothing from blocks that are not capped from the rest of the participants in the pool. These validators can be considered "free riders" because they contribute less than what they get from the pool. 


**How can you avoid to propose a Vanilla block?**

Update Your Node Configuration: If you are running a validator in Smooth, make sure that your configuration is up to date and that the MEV boost module is enabled. You can go to the Stakers tab in the Dappmanager and activate the relays in the MEV boost section. It is highly recommended to activate all the relays to ensure that one of them is building your block and therefore optimizing your rewards.

![MEVboost](/img/MEV_boost.png)


**How does Smooth act on Vanilla blocks?**

In order to maximize the rewards for all the participants in Smooth, vanilla block proposers will be banned after 3 consecutive vanilla blocks proposed if they had the chance to be MEV blocks/had MEV opportunity. 
This banning process requires a voting phase by the SmoothDAO to effectively ban the withdrawal address of the validator. You can read more about it [here](https://snapshot.box/#/s:dao.smooth.dappnode.eth/proposal/0xddd71930ac1a2876cc7e012861320a19b24fc2c4cc8289060c626737413251a3) 