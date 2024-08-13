# Gnosis Chain Incentive Program

Gnosis Chain is a Proof of Stake blockchain that uses the GNO token for staking. The Gnosis incentive program rewards validators for their work in the network. It is designed to incentivize validators to participate and secure the network.

## So you got your Dappnode and want to know how to get your Gnosis Chain validators?

Here are the prerequisites:

- You must have purchased a [Dappnode Home - Gnosis Chain Edition](https://dappnode.com/collections/frontpage/products/gnosis-chain-home)
- You must have given us an Ethereum address you control for us to whitelist during that purchase. If you didn’t, please send an email to [support@nodlers.com](mailto:support@nodlers.com) with your order number and your address
- You have set up your dappnode so you can use it
- You can do step 1 immediately after receiving your dappnode, steps 2 and 3 after receiving a first email from dappnode, and finally 4 when

## 1. Set Up Your Gnosis Chain Node

Follow [these instructions](https://docs.dappnode.io/docs/user/staking/gnosis-chain/solo#1-install-the-necessary-packages-on-dappnode) to setup your Gnosis Chain node on Dappnode.

## 2. Get safe address

To participate in the Gnosis incentive program, you need to have a safe address provided by the Dappnode team. You should have received an email with the safe address. This email may not be send just after the order is done, it can take a few days. If you don't have it, please send an email to [support@nodlers.com](mailto:support@nodlers.com).

The safe address will be controlled by both the Dappnode team and you. It will have a threshold of 2, meaning that both parties need to sign a transaction to execute it. The address will have an expiration time of 1 year.

:::tip
You can also use the [Gnosis deposit UI](https://deposit.gnosischain.com/) (Dappnode section) to visualize the safe address (withdrawal address) that must be used to generate the keys in step 3.
You must connect the wallet you specified while purchasing the Dappnode to the Gnosis deposit UI to see the safe address.
:::

## 3. Generate and import your validator keys

:::caution
Before generating the keys, make sure you have received an email from Dappnode letting you know which one should be your **withdrawal address** that these keys need to have. If you don't have it, please contact the Dappnode team.
:::

:::caution
It is mandatory that you specify 3 as the number of validators when generating the keys. If you have participated in the Dappcon program, you should select 4 instead.
:::

To generate the validator keys, follow the step detailed [here](https://docs.dappnode.io/docs/user/staking/gnosis-chain/solo#2-creating-validator-keys-for-gnosis-chain).

## 4. Submit deposit data

Once the validator keys are generated, you need to submit the deposit data to the [Gnosis deposit UI](https://deposit.gnosischain.com/) (dappnode section).

1. Navigate to: https://deposit.gnosischain.com/
   ![Gnosis Deposit UI - Connect wallet](/img/gnosis-deposit-ui-connect-wallet.png)
2. Connect **the wallet that you gave when filling the order for your DAppNode.**
3. Move to the "Dappnode" tab
   ![Gnosis Deposit UI - Upload Deposit](/img/gnosis-deposit-ui-upload-deposit.png)
4. Upload the `deposit_data*.json` you generated with the key generator tool in step 2
   ![Gnosis Deposit UI - Claim Deposit](/img/gnosis-deposit-ui-claim-deposit.png)
5. Click `claim`

   :::tip
   In case you need some xDai for transaction fees you can get some from this [faucet](https://faucet.gnosischain.com/).
   :::
   ![Gnosis Deposit UI - Submit Deposit](/img/gnosis-deposit-ui-deposit-submitted.png)

6. Dappnode Team will trigger the actual GNO deposits to the validator keys all the incentive program recipients submit **at least once a week**. You will receive a final email when this happens!

   :::info
   The execution of the deposit can take a few days. Once dappnode executes the deposit data for you, you should receive an email letting you know that the deposit has been submitted and your validators are ready.
   :::
   ![Gnosis Deposit UI - Deposit Executed](/img/gnosis-deposit-ui-deposit-executed.png)

   :::info
   If you encounter an issue claiming your incentive program GNO validators, such as an error about your address not being whitelisted please visit the [DAppNode Discord Server](https://discord.gg/dappnode) and open a support ticket in this channel. (#1-sales-support-ticket)
   :::

## 5. Start validating

Once the deposit is submitted, you can start validating on the Gnosis Chain network. Remember to upload your keystores to the Web3Signer Gnosis package that you installed during step 1.
