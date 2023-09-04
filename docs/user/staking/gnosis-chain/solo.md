# Gnosis Chain

**Gnosis Chain** stands as a sentinel, functioning as a canary chain for Ethereum. It's operated and nurtured by the **GnosisDAO community**. With over 10% of its validators being home stakers via Dappnode, it's a testament to its popularity and accessibility.

## Joining the Gnosis Chain as a Validator

Staking on the Gnosis Chain is both easy and economical. All it takes is **1 GNO** to kickstart your journey as a Gnosis Chain validator. This low barrier to entry ensures that anyone, regardless of their financial position, can participate actively in the network as a block proposer. You will need to do 3 main tasks, broken down below:

1. Install the necessary packages on Dappnode
2. Create validator keys for Gnosis Chain
3. Deposit GNO into the Gnosis Beacon Chain deposit contract

## 1. Install the necessary packages on Dappnode

Similar to Ethereum mainnet, Dappnode makes it very easy to set up you Gnosis Chain validator. Here's what the Stakers UI looks like for Gnosis Chain:

![Stakers](/img/gnosischain-staking-screenshot.png)

- **Execution Client** (Choose one):
   - Nethermind Xdai (Available now)
   - Gnosis Erigon (Coming soon!)
- **Consensus Client** (Choose one):
   - Lighthouse Gnosis
   - Teku Gnosis
   - Lodestar Gnosis
- **Web3Signer Gnosis**

:::tip Checkpoint Sync is your friend for syncing Consensus Clients
Execution clients take a long time to sync. Hence, once you start staking with one you will most likely stick with it. However, you can switch consensus clients at any time thanks to the magic of "checkpoint sync". Make sure to toggle the "use checksync" option when installing your consensus client, and you can change at any point from one to another with barely any downtime.
:::

After syncing your consensus client, the execution client starts its synchronization process. This can take a few hours, so patience is essential. For clarity or troubleshooting, consult your execution client's logs.

## 2. Creating validator keys for Gnosis Chain

:::info
This guide will use the [Gnosis Wagyu keygen tool](https://github.com/alexpeterson91/Gnosis-Wagyu-Key-Gen/releases) to generate your validator keys. This is a fork of the [Wagyu Keygen tool](https://github.com/stake-house/wagyu-key-gen/releases) for Ethereum mainnet.
:::

:::caution What are all these keys?
🔒 **Validator keys** will be online (stored in your Dappnode) and signing the blocks of the Gnosis Chain. You will create them from a **mnemonic phrase**, which is important to keep safe as it's the **only way** to regenerate these validator keys if you lose them.

🛡️ The damage of getting your **mnemonic phrase** compromised has been reduced dramatically since withdrawals have been activated, as you can create the keystores with a set withdrawal address and nobody can change that after, even if they get to your **mnemonic phrase**. Nevertheless, if you lose the keystore and the mnemonic, you will not be able to sign an exit message and you will be forced to validate forever. 

🔑 **Withdrawal address** this brings us to the withdrawal address, which is the address that will receive all the balance above 1 GNO while your validator is active, and all your balance above 0 GNO when you exit the validator set. You need to keep this address safe as it's where your GNO will go, and cannot be changed. 
:::


1) Download the latest release of the Gnosis Wagyu Key Gen from [here](https://github.com/alexpeterson91/Gnosis-Wagyu-Key-Gen/releases).


2) Disconnect from the internet, so it will be harder to have any leaks on the information you use, and open the Gnosis Wagyu keygen tool. You will be given 2 options, either create a new mnemonic or import an existing mnemonic. The GUI is very user friendly and explains all steps along the way.

![Gnosis Wagyu - 1st screen](/img/gnosis-wagyu1.png)

You will be shown your Mnemonic Phrase. Keep it safe, as it is used to recreate the validator keys! We recommend copying it in an encrypted volume or in paper stored in a safe place. 

To ensure that you have copied it somewhere, it will ask you to type it again.

![Gnosis Wagyu - 2nd screen](/img/gnosis-wagyu2.png)

Choose 1) How many keys you want to create, 2) the password to protect the keys and 3) the Withdrawal Address where your Consensus Layer profits will be sent.

![Gnosis Wagyu - 3rd screen](/img/wagyu4.png)

Select a folder where to save the keys.

![Gnosis Wagyu - 4th screen](/img/wagyu5.png)

Wait for the keys to be generated.

![Gnosis Wagyu - 5th screen](/img/wagyu6.png)

And you are done! You will find your keys in the folder you selected.

![Gnosis Wagyu - 6th screen](/img/wagyu7.png)

You are now done with the key generation process, and your generated keys and deposit data are in the folder/directory chosen, and displayed at the top of the final page.

:::tip
💡 *`Want to learn more about Ethereum keys and key generation?`*💡[Learn more](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/#two-types-of-keys)
:::

Now that you’ve generated your deposit data and keystores, go ahead and upload your keystores to Web3Signer Gnosis, the package that you installed during step 1. 

Return to the Dappnode UI and navigate to the Stakers > Gnosis Chain menu. Your Web3Signer will have a link saying `Upload Keystores` . If it doesn’t, make sure that you have waited enough time since step 1 for all the packages to be installed (around 5 minutes) and refresh the page.

Then click on the `Import Keystores` button on the lower part of the Web3Signer Gnosis UI.

Here browse for the keystore file(s) you generated in the previous step and enter them along with the password you chose to secure your keystores. 

You are now ready to fund these validator accounts and start validating!

## 3: Deposit GNO into the Gnosis Chain deposit contract

The final step is to fund your validator with 1 GNO necessary to register as a validator and start receiving validation work!

To do this, you will need to send 1 GNO to the Gnosis Chain deposit contract.

Navigate to [the Gnosis Chain deposit launchpad](https://deposit.gnosischain.com/)

![Gnosis Launchpad 1](/img/gnosis-launchpad1.png)

Under the Deposit tab, you'll find a box where you can import the `deposit_data.json` file you generated in Step 2. You can find it in the same folder you chose when generating the keys.

![Gnosis Launchpad 2](/img/gnosis-launchpad2.png)

The app will validate the json file and list the number of validator deposits you are making and the required GNO to deposit. Click Deposit to continue.

![Gnosis Launchpad 3](/img/gnosis-launchpad3.png)

Check that you understand the risks and [ensure you are interacting with the correct contract](https://docs.gnosischain.com/node/manual/validator/deposit#step-5-verify-transaction-parameters) before proceeding.

![Gnosis Launchpad 4](/img/gnosis-launchpad4.png)
![Gnosis Launchpad 5](/img/gnosis-launchpad5.png)

The moment to do the deposit is here! Connect your wallet with the GNO's you'll be depositing, and follow the steps to send the GNOs to the deposit contract!

:::warning
Please review the deposit address in the next step! MAKE SURE YOU ARE SENDING YOUR GNO FUNDS TO THE RIGHT DEPOSIT ADDRESS!
:::

![Gnosis Launchpad 6](/img/gnosis-launchpad6.png)
![Gnosis Launchpad 7](/img/gnosis-launchpad7.png)

After the deposit is gone, you will be able to check the progress of your deposit by searching for your validator key in the [Gnosis Beacon Chain Explorer](https://gnosischa.in/), which is a fork of the [Ethereum Beaconcha.in](https://beaconcha.in/) explorer. You can get a direct link to this by clicking on the `View in Beaconcha.in` button in the upper, right corner of the Dappnode Web3signer Gnosis UI, where you uploaded the keystores.

**Remember**: Embarking on the staking journey requires diligence. Always keep abreast of developments and make informed decisions.
