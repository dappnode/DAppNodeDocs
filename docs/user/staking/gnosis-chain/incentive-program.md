# Gnosis Incentive Program

Gnosis Chain is a Proof of Stake blockchain that uses the GNO token for staking. The Gnosis incentive program rewards validators for their work in the network. It is designed to incentivize validators to participate and secure the network.

## 1. Set Up Your Gnosis Chain Node

Follow [these instructions](https://docs.dappnode.io/docs/user/staking/gnosis-chain/solo#1-install-the-necessary-packages-on-dappnode) to setup your Gnosis Chain node on Dappnode.

## 2. Get safe address

To participate in the Gnosis incentive program, you need to have a safe address. You should have received an email with the safe address. If you don't have it, please contact the Dappnode team.

The safe address will be controlled by both the Dappnode team and you. It will have a threshold of 2, meaning that both parties need to sign a transaction to execute it. The address will have an expiration time of 1 year.

:::tip
You can also use the [Gnosis deposit UI](https://deposit.gnosischain.com/) (Dappnode section) to visualize the safe address (withdrawal address) that must be used to generate the keys in step 3.
You must connect the wallet you specified while purchasing the Dappnode to the Gnosis deposit UI to see the safe address.
:::

## 3. Generate your validator keys

:::caution:::
It is mandatory to use the safe address you should have received in your email as the **withdrawal address**. If you don't have it, please contact the Dappnode team.

:::

:::caution:::
It is mandatory that you specify 3 as the number of validators when generating the keys. If you have participated in the Dappcon program, you should select 4 instead.
:::

To generate the validator keys, follow the steps detailed [here](https://docs.dappnode.io/docs/user/staking/gnosis-chain/solo#2-creating-validator-keys-for-gnosis-chain).

## 4. Submit deposit data

Once the validator keys are generated, you need to submit the deposit data to the [Gnosis deposit UI](https://deposit.gnosischain.com/) (dappnode section).

Dappnode will execute the submitted deposit for you.

:::info
Once dappnode executes the deposit data for you, you should receive an email letting you know that the deposit has been submitted and your validators are ready.
:::

## 5. Start validating

Once the deposit is submitted, you can start validating on the Gnosis Chain network. Remember to upload your keystores to the Web3Signer Gnosis package that you installed during step 1.
