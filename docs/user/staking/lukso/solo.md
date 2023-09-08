# LUKSO

**LUKSO** is the next-gen blockchain designed with creative industries in mind. Imagine a digital realm where the spirit of Ethereum meets the world of fashion, art, and design. That's LUKSO for you!

## What Makes LUKSO Special?

**Universal Profiles (UPs)**, supported by the ERC-725 standard, are LUKSO's magic trick. They act like digital passports in the LUKSO universe, ensuring that every creation and transaction carries the unique signature of its creator.

## Joining LUKSO as a validator

LUKSO shares more than just roots with Ethereum. It uses the same trusted tools to run its network. Some of the main Ethereum clients are also compatible with LUKSO. For becoming a validator in LUKSO, you'll need to:

1. Install the necessary LUKSO packages on Dappnode.
2. Create validator keys for LUKSO.
3. Deposit LYX into the LUKSO Consensus Chain deposit contract.

## 1. Install the necessary LUKSO packages on Dappnode.

Similar to Ethereum mainnet, Dappnode makes it very easy to set up your LUKSO validator. Here's what the Stakers UI looks like for LUKSO:

![Stakers](/img/lukso-staking-screenshot.png)

- **Execution Clients** (Choose one):
  - Lukso Geth
  - Lukso Erigon (Coming soon to Dappnode)
- **Consensus Clients** (Choose one):
  - Prysm Lukso
  - Teku Lukso
    -Web3Signer LUKSO

:::tip Checkpoint Sync is your friend for syncing Consensus Clients
Execution clients take a long time to sync. Hence, once you start staking with one you will most likely stick with it. However, you can switch consensus clients at any time thanks to the magic of "checkpoint sync". Make sure to toggle the "use checksync" option when installing your consensus client, and you can change at any point from one to another with barely any downtime.
:::

After syncing your consensus client, the execution client starts its synchronization process. This can take a few hours, so patience is essential. For clarity or troubleshooting, consult your execution client's logs.

## 2. Creating validator keys for LUKSO

:::info
This guide will use the [LUKSO Wagyu Keygen Tool](https://github.com/lukso-network/tools-wagyu-key-gen/releases) to generate your validator keys. This is a fork of the [Wagyu Keygen tool](https://github.com/stake-house/wagyu-key-gen/releases) for Ethereum mainnet.
:::

:::caution What are all these keys?
🔒 **Validator keys** will be online (stored in your Dappnode) and signing the blocks of the LUKSO blockchain. You will create them from a **mnemonic phrase**, which is important to keep safe as it's the **only way** to regenerate these validator keys if you lose them.

🛡️ The damage of getting your **mnemonic phrase** compromised has been reduced dramatically since withdrawals are already activated in LUKSO (Shapella upgrade), as you can create the keystores with a set withdrawal address and nobody can change that after, even if they get to your **mnemonic phrase**. Nevertheless, if you lose the keystore and the mnemonic, you will not be able to sign an exit message and you will be forced to validate forever.

🔑 **Withdrawal address** this brings us to the withdrawal address, which is the address that will receive all the balance above 32 LYX while your validator is active, and all your balance above 32 LYX when you exit the validator set. You need to keep this address safe as it's where your LYX will go, and cannot be changed.
:::

1. Download the latest release of the LUKSO Wagyu Keygen Tool from [here](https://github.com/lukso-network/tools-wagyu-key-gen/releases).

2. Disconnect from the internet, so it will be harder to have any leaks on the information you use, and open the LUKSO Wagyu Keygen Tool. You will be given 2 options, either create a new mnemonic or import an existing mnemonic. The GUI is very user friendly and explains all steps along the way.

![LUKSO Wagyu - 1st screen](/img/lukso-wagyu1.png)

You will be shown your Mnemonic Phrase. Keep it safe, as it is used to recreate the validator keys! We recommend copying it in an encrypted volume or in paper stored in a safe place.

To ensure that you have copied it somewhere, it will ask you to type it again.

![LUKSO Wagyu - 2nd screen](/img/lukso-wagyu2.png)

Choose 1) How many keys you want to create, 2) the password to protect the keys and 3) the Withdrawal Address where your Consensus Layer profits will be sent.

![LUKSO Wagyu - 3rd screen](/img/wagyu4.png)

Select a folder where to save the keys.

![LUKSO Wagyu - 4th screen](/img/wagyu5.png)

Wait for the keys to be generated.

![LUKSO Wagyu - 5th screen](/img/wagyu6.png)

And you are done! You will find your keys in the folder you selected.

![LUKSO Wagyu - 6th screen](/img/wagyu7.png)

You are now done with the key generation process, and your generated keys and deposit data are in the folder/directory chosen, and displayed at the top of the final page.

:::tip
💡 *`Want to learn more about Ethereum keys and key generation?`*💡[Learn more](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/#two-types-of-keys)
:::

Now that you’ve generated your deposit data and keystores, go ahead and upload your keystores to Web3Signer LUKSO, the package that you installed during step 1.

Return to the Dappnode UI and navigate to the Stakers > LUKSO menu. Your Web3Signer will have a link saying `Upload Keystores` . If it doesn’t, make sure that you have waited enough time since step 1 for all the packages to be installed (around 5 minutes) and refresh the page.

Then click on the `Import Keystores` button on the lower part of the Web3Signer LUKSO UI.

Here browse for the keystore file(s) you generated in the previous step and enter them along with the password you chose to secure your keystores.

You are now ready to fund these validator accounts and start validating in LUKSO!

## 3: Deposit LYX into the LUKSO deposit contract

The final step is to fund your validator with the 32 LYX necessary to register as a validator and start receiving validation work!

To do this, you will need to send 32 LYX to the LUKSO deposit contract. We will be using the official LUKSO launchpad for this.

Navigate to [the LUKSO launchpad](https://deposit.mainnet.lukso.network/en/)

Read all the advisories... they contain important information that will help you understand the whole process!

![LUKSO Launchpad 1](/img/lukso-launchpad1.png)

Because we are using Dappnode and we take care of the infrastructure and the software installation, we can skip the next sections:

![LUKSO Launchpad 2](/img/lukso-launchpad2.png)

We continue until the "Upload Deposit Data" section.

![LUKSO Launchpad 3](/img/lukso-launchpad3.png)

Here we will upload the deposit data that we generated in the previous step. You can find it in the folder you chose when generating the keys. It will be a file called `deposit_data-*.json`

The moment to do the deposit is here! Connect your wallet with the 32 LYX and [make sure](https://chainlist.org/chain/42) you're in the LUKSO network.

![LUKSO Launchpad 4](/img/lukso-launchpad4.png)

And follow the steps to send the 32 LYX to the deposit contract!

:::warning
Please review your deposit address! MAKE SURE YOU ARE SENDING THE 32 LYX TO THE RIGHT DEPOSIT ADDRESS!
:::

After the deposit is done, you will be able to check the progress of your deposit by searching for your validator key in the [LUKSO Consensus Explorer](https://explorer.consensus.mainnet.lukso.network/). You can get a direct link to this by clicking on the `View in Beaconcha.in` button in the upper, right corner of the Dappnode Web3signer LUKSO UI, where you uploaded the keystores

![LUKSO Web3Signer](/img/lukso-web3signer.png)

**Remember**: Embarking on the staking journey requires diligence. Always keep abreast of developments and make informed decisions.
