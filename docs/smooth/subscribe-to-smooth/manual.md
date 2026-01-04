# Manual Subscription

Would you rather not wait until your next proposed block to subscribe and begin earning rewards? You can take a proactive step and opt for manual subscription right away. During this process, you'll change your validator's fee recipient to Smooth's address, just like in the automatic subscription. However, instead of waiting for your next proposed block, you'll immediately start accumulating rewards from Smooth.

The manual subscription is done through **[Smooth's website](https://smooth.dappnode.io/)**. 

### Step 1: Change your fee recipient to Smooth's address.

Change the fee recipient of your validator to Smooth's address, just as if you were subscribing automatically. In Dappnode, this process is as simple as changing the fee recipient in your [staking brain](http://brain.web3signer.dappnode/).

![fee_recipient](/img/smooth_fee_recipient.png)

**This step is extremely important**. Make sure you're changing the fee recipient of the validators you are going to manually subscribe and that the fee recipient is correctly set to Smooth's address (`0xAdFb8D27671F14f297eE94135e266aAFf8752e35`). If a subscribed validator proposes a block with an incorrect fee recipient, it will be banned from Smooth and will not be able to participate in it again.

:::danger Keep the fee recipient set to Smooth's address!
It is crucial that you keep the fee recipient of your validator set to Smooth's address (`0xAdFb8D27671F14f297eE94135e266aAFf8752e35`) as long as it is subscribed to Smooth. If, at any point, you change the fee recipient of your validator and propose a block without unsubscribing first, you will be banned from Smooth and will not be able to participate in it again.
:::
### Step 2: Log in to Smooth's website.

Go to [Smooth's website](https://smooth.dappnode.io/) and log in with your wallet. A list of all the validators with the same withdrawal address as your logged in wallet will appear.

### Step 3: Select your validator .

Select the validator you want to subscribe to Smooth by clicking on the "Subscribe" button.
![my_validators](/img/smooth_my_validators.png)

When clicking on the "Subscribe" button, Smooth will check if your validator is registered to any MEV relay. If it is, it will also check if the fee recipient of your validator is set to Smooth's address in each relay. **Three different dialogs can appear**, depending on the state of your validator and the MEV relays it is registered to.

#### Scenario 1: Validator is not registered to any MEV relay.

<p align="center">
  <img src="/img/smooth_no_relays.png" alt="no_relays" width="400"/>
</p>

When doing a manual subscription, it is obligatory to be registered in at least one MEV relay. In Dappnode, registering and using a relay is as simple as selecting the desired relay in the "MEV Boost" Card at the [Stakers UI](http://my.dappnode/stakers/ethereum/). Once you have selected at least one relay, you can go back to the Smooth website and click on the "Subscribe" button again.



#### Scenario 2: Validator does not have the Smooth's address as fee recipient in relays.

<p align="center">
  <img src="/img/smooth_incorrect_fee_recipient.png" alt="incorrect_fee_recipient" width="400"/>
</p>

If this dialog appears, it means that the fee recipient of your validator is not set to Smooth's address in at least one relay. Please make sure that you have done step 1 correctly, and that the fee recipient of your validator is set to Smooth's address in your [staking brain](http://brain.web3signer.dappnode/). 

:::info
Relays that you no longer use won't reflect the fee recipient changes you did for each validator in your staking brain. If you have already changed your fee recipient but the warning still appears, please check the "Troubleshooting" section down below for more information.
:::

#### Scenario 3: Validator is registered to at least one MEV relay and has the correct fee recipient set.

<p align="center">
  <img src="/img/smooth_correct_fee_recipient.png" alt="correct_fee_recipient" width="400"/>
</p>

This is the dialog you want to see! If you see this dialog, it means that your validator is registered to at least one MEV relay, and that the fee recipient of your validator is set to Smooth's address all relays it has been registered to. In other words, this means that your validator is ready to subscribe to Smooth!


### Step 4: Confirm Relays check.

<p align="center">
  <img src="/img/smooth_mev_blocks.png" alt="mev_blocks" width="400"/>
</p>

This step is just a confirmation of the relays your validators has the correct fee recipient set in. Click on "Next" to continue the subscription process, we're almost there!

### Step 5: Make the deposit and subscribe!
<p align="center">
  <img src="/img/smooth_make_deposit.png" alt="deposit" width="400"/>
</p>

This is the last step! In this step, you will make the deposit to subscribe your validator to Smooth. The deposit is a one-time upfront payment that will be returned to you as Claimable rewards when proposing your first block to Smooth. The deposit is 0.01 ETH, and it is used to prevent spam and malicious validators from subscribing to Smooth.

Once the deposit transaction is processed by the chain, your validator will be subscribed to Smooth and you will start recieving rewards from other members of Smooth!

<p align="center">
  <img src="/img/smooth_subscribe_success.png" alt="subscription_success" width="400"/>
</p>

:::caution
Since the Oracle operates with only finalized data, it will take up to 35 minutes to process your subscription. Your "My Validator" table will be updated instantly, but it may take a while to see how "Total Subscribers" counter increases. To know more, visit the [Deep Dive into Smooth](/docs/smooth/deep-dive-into-smooth/overview) section.
:::

## Troubleshooting.

<details>
  <summary><strong>I have changed my fee recipient but the <i>"Fee recipient warning"</i> warning still appears!</strong></summary>
  
If you have changed your fee recipient to Smooth's address (<code>0xAdFb8D27671F14f297eE94135e266aAFf8752e35</code>) but this warning still appears, it could be because of two reasons:
<ul>
    <li>The relays you are registered to are not reflecting the change in the fee recipient yet. It can take up to a few minutes for the relays to reflect your  fee recipient update. This is something that is out of Smooth's control. We recommend you to wait a few minutes and try again.</li>
    <li>The fee recipient is only updated in your current <strong>active</strong> relays. This means that if you used to be registered to a relay, but you are not using it anymore, the fee recipient of your validator will not be updated in that relay. This is something expected and that it wont affect your validator's subscription to Smooth. If you want to update the fee recipient in the relays you are no longer registered to, you can quickly register and unregister again to the outdated relays to force an update the fee recipient there.</li>
  </ul>
  To clarify: As long as the fee recipient of your validator is set to Smooth's address in your <a href="http://brain.web3signer.dappnode/">staking brain</a>, you can continue the subscription process normally.
 </details>