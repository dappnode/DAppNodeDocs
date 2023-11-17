# How to Use Smooth

Smooth is an MEV Smoothing Pool by Dappnode made for allowing Solo Stakers to maximize their MEV rewards by pooling them together. It prevents cheating from its participants by having a “Pending Balance” that becomes active once a block is proposed, this way Solo Stakers are not limited to just the rewards from the block they propose, but the ones that have been accumulating in the pool.

### Automatic Registration
:::info
The automatic registration will ask for a deposit of 0.08 ETH as a collateral to start acumulating fees as soon as the validator is registered. This collateral will not be sent to the pool, and will be released after the validator's first block proposal after registering to Smooth as a claimable reward.
:::

1. Connect your wallet to the app. The address should match the registred validator's withdrawal address.
![Connect Wallet - Smooth](/img/smooth-connect-wallet.png)

2. Click on Subscribe. If you haven't set your Fee Recipient to Smooth's contract yet (`0xF21fbbA423f3a893A2402d68240B219308AbCA46`), you'll see this error:
![Fee Recipient Error - Smooth](/img/smooth-fee-recipient-error.png)

If you don't know how to change your Fee Recipient on Dappnode's UI, please visit the [Ethereum Staking documentation](https://docs.dappnode.io/docs/user/staking/ethereum/solo/mainnet#1-install-the-necessary-packages-on-dappnode). Once you've set your Fee Recipient correctly, you should be ready to move to the next step:
![Fee Recipient Set - Smooth](/img/smooth-fee-recipient-set.png)

3. The next step will auto-detect which MEV relays you're running (if applies), and then you'll have to make the collateral deposit of 0.08 ETH.

### Manual Registration
:::caution
Only when
:::

To be completed
