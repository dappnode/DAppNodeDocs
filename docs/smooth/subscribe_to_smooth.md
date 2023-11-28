# Subscribing to Smooth

The following is a guide to subscribing to Smooth, where you will find all the information on how to subscribe your Validators to Smooth. Even though the process is simple, it is important to follow the steps carefully.

## Automatic Subscription

The simplest way to subscribe to Smooth is to do it automatically when giving your next proposed block rewards to Smooth. This can be done easily by just changing the fee recipient of your validator to Smooth's address. In dappnode, this process is as simple as changing the fee recipient in your [staking brain](http://brain.web3signer.dappnode/). Once Smooth recieves the rewards from your validator, it will automatically subscribe your validator to Smooth, and you will start receiving rewards from other members of Smooth!

:::caution Keep the fee recipient set to Smooth's address!
It is extremely important that you keep the fee recipient of your validator set to Smooth's address. If, at any point, you change the fee recipient of your validator and propose a block without unsubscribing from Smooth first, you will be banned from Smooth and will not be able to participate in it again.
:::



## Manual Subscription

If you dont want to wait until your next proposed block to start accumulating rewards, you can go a step further and subscribe manually. In this process, you will change your validator's fee recipient to Smooth's address, just like in automatic subscription, but you will also manually subscribe your validator through [Smooth's website](https://smooth.dappnode.io/). 

### Step 1: Change your fee recipient to Smooth's address.

Change the fee recipient of your validator to Smooth's address, just as if you were subscribing automatically. In dappnode, this process is as simple as changing the fee recipient in your [staking brain](http://brain.web3signer.dappnode/).

:::caution Keep the fee recipient set to Smooth's address!
It is extremely important that you keep the fee recipient of your validator set to Smooth's address. If, at any point, you change the fee recipient of your validator and propose a block to Smooth while being subscribed to it, you will be banned from Smooth and will not be able to participate in it again.
:::

### Step 2: Log in to Smooth's website

Go to [Smooth's website](https://smooth.dappnode.io/) and log in with your wallet. A list of all the validators with the same withdrawal address as your logged in wallet will appear. 

### Step 3: Select your validator 

Select the validator you want to subscribe to Smooth by clicking on the "Subscribe" button.
![my_validators](/img/smooth_my_validators.png)

When clicking on the "Subscribe" button, Smooth will check if your validator is registered to any MEV relay. If it is, it will also check if the fee recipient of your validator is set to Smooth's address in each relay. Three different dialogs can appear, depending on the state of your validator and the MEV relays it is registered to.

#### Dialog 1: Validator is not registered to any MEV relay

<p align="center">
  <img src="/img/smooth_no_relays.png" alt="no_relays" width="400"/>
</p>

When doing a manual subscription, it is obligatory to be registered in at least one MEV relay. In dappnode, registering and using a relay is as simple as selecting the desired relay in the "MEV Boost" Card at the [Stakers UI](http://my.dappnode/stakers/ethereum/). Once you have selected at least one relay, you can go back to the Smooth website and click on the "Subscribe" button again.



#### Dialog 2: Validator does not have the Smooth's address as fee recipient in relays.

<p align="center">
  <img src="/img/smooth_incorrect_fee_recipient.png" alt="incorrect_fee_recipient" width="400"/>
</p>

When registered to a MEV relay, Smooth can check if your validator has the Smooth's address as the fee recipient in each relay registered to. Since having the correct fee recipient (Smooth's address) is crucial to not get banned and participate in Smooth correctly, we will warn you if your validator does not have the correct fee recipient set in any of the relays it is registered to. If this warning appears, please make sure that you have done step 1 correctly, and that the fee recipient of your validator is set to Smooth's address in your [staking brain](http://brain.web3signer.dappnode/). 

If you have already changed your fee recipient but the warning still appears, please check the "Troubleshooting" section down below.

#### Dialog 3: Validator is registered to at least one MEV relay and has the correct fee recipient set.

<p align="center">
  <img src="/img/smooth_correct_fee_recipient.png" alt="correct_fee_recipient" width="400"/>
</p>

This is the dialog you want to see! If you see this dialog, it means that your validator is registered to at least one MEV relay, and that the fee recipient of your validator is set to Smooth's address all relays it has been registered to. In other words, this means that your validator is ready to subscribe to Smooth!


### Step 4: Confirm Relays check

<p align="center">
  <img src="/img/smooth_mev_blocks.png" alt="mev_blocks" width="400"/>
</p>

This step is just a confirmation of the relays your validators has the correct fee recipient set in. Click on "Next" to continue the subscription process, we're almost there!

### Step 5: Make the deposit and subscribe!
<p align="center">
  <img src="/img/smooth_make_deposit.png" alt="deposit" width="400"/>
</p>

This is the last step! In this step, you will make the deposit to subscribe your validator to Smooth. The deposit is a one-time upfront payment that will be returned to you as Claimable rewards when proposing your first block to Smooth. The deposit is 0.1 ETH, and it is used to prevent spam and malicious validators from subscribing to Smooth.

Once the deposit transaction is processed by the chain, your validator will be subscribed to Smooth and you will start recieving rewards from other members of Smooth!

<p align="center">
  <img src="/img/smooth_subscribe_success.png" alt="subscription_success" width="400"/>
</p>