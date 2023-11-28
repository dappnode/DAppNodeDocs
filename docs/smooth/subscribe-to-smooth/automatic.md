# Automatic Subscription

This is the simplest way to subscribe to Smooth. It consists of changing the fee recipient of your validator to Smooth's address and subscribing automatically when proposing your next block.

### Step 1: Change your fee recipient to Smooth's address.

Go to your dappnode's [staking brain](http://brain.web3signer.dappnode/) and change the fee recipient of the validators you want to subscribe to Smooth's address (`0xAdFb8D27671F14f297eE94135e266aAFf8752e35`). Once Smooth recieves the rewards from your validator, it will automatically subscribe your validator to Smooth, and you will start receiving rewards from other members of Smooth!

:::danger Keep the fee recipient set to Smooth's address!
It is extremely important that you keep the fee recipient of your validator set to Smooth's address (`0xAdFb8D27671F14f297eE94135e266aAFf8752e35`) as long as it is subscribed to Smooth. If, at any point, you change the fee recipient of your validator and propose a block without unsubscribing first, you will be banned from Smooth and will not be able to participate in it again.
:::

:::info Check your subscription status in Smooth's website
You can check the subscription status of your validators in [Smooth's website](https://smooth.dappnode.io/). Once logged in with your wallet, your validators will appear in the "My Validators" section.