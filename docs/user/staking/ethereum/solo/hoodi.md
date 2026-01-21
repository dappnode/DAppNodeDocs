# Hoodi Testnet

The **Hoodi testnet** is a testnet for the Ethereum ecosystem, serving as a validator sandbox for users. Hoodi is the perfect place to start for new node runners, since Dappnode offers exactly the same process as mainnet to set up a home validator.

## Navigating to Hoodi in Dappnode

You can locate the Hoodi testnet under the [**Hoodi** tab](http://my.dappnode/stakers/hoodi) in the **Stakers Menu**. If you want to run Hoodi testnet validators, you'll also need to select Web3Signer Hoodi to import your keystores in Dappnode's user-friendly UI.

![Hoodi - Stakers Menu](/img/hoodi-stakers.png)

## How to set up a Hoodi testnet validator

:::tip
If you're new to Ethereum validators or wish to familiarize yourself with node operation intricacies, starting with the Hoodi testnet is highly recommended. It's the perfect platform for hands-on learning in a risk-free environment.
:::

### 1. Install the necessary packages on Dappnode

Dappnode makes it super simple to install everything you need to run a Hoodi validator. Via the Stakers menu you will be able to install one of each of the following packages:

- **Execution Client** (Choose one): Geth, Nethermind, Reth, or Besu. (Erigon3 coming soon!)
- **Consensus Client** (Choose one): Prysm, Lighthouse, Teku, Nimbus, or Lodestar.

:::tip Checkpoint Sync is your friend for syncing Consensus Clients
Execution clients take a long time to sync. Hence, once you start staking with one you will most likely stick with it. However, you can switch consensus clients at any time thanks to the magic of "checkpoint sync", a feature that's enabled by default on Dappnode consensus client packages. This will allow your consensus clients to sync in 5 minutes or less!
:::

After syncing your consensus client, the execution client starts its synchronization process. This can take a few hours, so patience is essential. For clarity or troubleshooting, consult your execution client's logs.

### 2. Creating the keys for your validator

:::info
This guide will use the Wagyu keygen tool to generate your validator keys. There are other options like a command-line tool by the Ethereum Foundation, but they are harder to use.
:::

:::caution What are all these keys?
🔒 **Validator keys** will be online (stored in your Dappnode) and signing the blocks of the chain. You will create them from a **mnemonic phrase**, which is important to keep safe as it's the only way to regenerate these validator keys if you lose them.

🔑 **Withdrawal address** this brings us to the withdrawal address, which is the address that will receive all the rewards while your validator is active, and all your balance above 0 ETH when you exit the validator set. You need to keep this address safe as it's where your ETH will go, and cannot be changed.

🛡 **Testnet ETH** yes, since Hoodi ETH isn't real ETH, security practices like the ones mentioned above and hereon can be taken lightly, however we encourage you to treat this process like the real mainnet thing. This will give you a richer experience as a node operator and better prepare you for mainnet validators.
:::

a) Download the latest release of the Wagyu Key Gen from [here](https://wagyu.gg).

b) Disconnect from the internet, so it will be harder to have any leaks on the information you use, and open the program. You will be given 2 options, either create a new mnemonic or import an existing mnemonic, and you will be able to choose the network for which you are generating the keys. The GUI is very user friendly and explains all steps along the way.

![Wagyu - 1st screen](/img/wagyu1.png)
![Wagyu - 2nd screen](/img/wagyu2.png)

You will be shown your Mnemonic Phrase. Keep it safe, as it is used to recreate the validator keys! We recommend copying it in an encrypted volume or in paper stored in a safe place.

To ensure that you have copied it somewhere, it will ask you to type it again.

![Wagyu - 3rd screen](/img/wagyu3.png)

Choose 1) How many keys you want to create, 2) the password to protect the keys and 3) the Withdrawal Address where your Consensus Layer profits will be sent.

![Wagyu - 4th screen](/img/wagyu4.png)

Select a folder where to save the keys

![Wagyu - 5th screen](/img/wagyu5.png)

Wait for the keys to be generated

![Wagyu - 6th screen](/img/wagyu6.png)

And you are done! You will find your keys in the folder you selected.

![Wagyu - 7th screen](/img/wagyu7.png)

You are now done with the key generation process, and your generated keys and deposit data are in the folder/directory chosen, and displayed at the top of the final page.

c) Now that you’ve generated your deposit data and keystores, go ahead and upload your keystores to the Web3signer that you installed during step A.

Return to the Dappnode UI and navigate to the Stakers > Hoodi menu. Your Web3Signer Hoodi will have a link saying `Upload Keystores`. You can also go to Packages > Web3Signer Hoodi > UI.

Then click on the `Import Keystores` button on the lower part of the Web3Signer UI.

Here browse for the keystore file(s) you generated in the previous step and enter them along with the password you chose to secure your keystores.

You are now ready to fund these validator accounts and start validating!

### 3. Deposit HooETH into the Hoodi deposit contract

The final step is to fund your validator with the 32 HooETH minimum required to register as a validator and start receiving validation work!

To do this, you will need to send 32 HooETH to the Ethereum deposit contract. We will be using the official Ethereum launchpad for this.

Navigate to [the launchpad](https://hoodi.launchpad.ethereum.org/) and follow the steps of the process.

After the deposit is done, you will be able to check the progress of your deposit by searching for your validator key in the [beaconcha.in](https://hoodi.beaconcha.in/) explorer. You can get a direct link to this by clicking on the `View in Beaconcha.in` button in the Dappnode Web3signer Hoodi UI, where you uploaded the keystores.

### 4. Withdrawing my HooETH

Once you want to finish your staking journey, you will need to withdraw your HooETH from the Beacon Chain. This process consists of exiting the validator from the Dappnode UI.

:::info Ethereum withdrawals are state changes in the execution layer
This means that once you reach the end of the Beacon Chain's exit queue, your HooETH will show up in your withdrawal address as a state change in the blockchain, and not as a deposit. You can find more info [here](https://ethereum.org/en/staking/withdrawals/#exiting-staking-entirely).
:::

Navigate to the Stakers > Hoodi menu. Your Web3Signer Hoodi will have a link saying `Upload Keystores`. You can also go to Packages > Web3Signer Hoodi > UI.

Once you are in the Staking Brain UI, select the validators you want to exit and click on the `Exit Validator` button on the top right part of the UI.

![Ethereum Withdrawals](/img/ethereum-exit-validator.png)

Follow the instructions and type "I want to exit", followed by `Exit`.

Now the message to exit will be broadcasted to the network.

:::caution Withdrawal queue
Your validator will not exit immediately. It will be queued to exit and you can track when it's due in the [Beacon Chain Explorer](https://hoodi.beaconcha.in/). Please be patient as the Beacon Chain exit queue can get long and wait times might take up to several weeks.
:::

Voilà! Your HooETH will appear on your withdrawal address!

## Hoodi Faucet
If you're interested in getting at least 32 HooETH for running a test validator, you can get it in the [Hoodi PoW Faucet](https://hoodi-faucet.pk910.de/). Make sure you understand how the faucet works before doing your request, as it will temporarily impact your computer's performance in the claiming process.
