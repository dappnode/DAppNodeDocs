# Gnosis Chain

**Gnosis Chain** stands as a sentinel, functioning as a canary chain for Ethereum. It's operated and nurtured by the **GnosisDAO community**. With over 10% of its validators being home stakers via Dappnode, it's a testament to its popularity and accessibility.

## Joining the Gnosis Chain as a Validator

Staking on the Gnosis Chain is both easy and economical. All it takes is **1 GNO** to kickstart your journey as a Gnosis Chain validator. This low barrier to entry ensures that anyone, regardless of their financial position, can participate actively in the network as a block proposer. You will need to do 3 main tasks, broken down below:

1. Install the necessary packages on Dappnode
2. Create validator keys for Gnosis Chain
3. Deposit GNO into the Gnosis Beacon Chain deposit contract

## 1. Install the necessary packages on Dappnode

Similar to Ethereum mainnet, Dappnode makes it very easy to set up you Gnosis Chain validator. You need to be running a Gnosis Chain node in order to validate. A node consists of an Execution Layer Client (EL) and a Consensus Layer Client (CL) + Validator. 

Here's what the Stakers UI looks like for Gnosis Chain:

![Stakers](/img/gnosischain-staking.png)

- **Execution Client** (Choose one):
  - Nethermind Xdai (Available now)
  - Gnosis Erigon (Coming soon!)
- **Consensus Client** (Choose one):
  - Lighthouse Gnosis
  - Teku Gnosis
  - Lodestar Gnosis
- **Web3Signer Gnosis**

After you’ve chosen from the 3 columns (EL, CL and Remote Signer), click on accept changes.

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

1. Download the latest release of the Gnosis Wagyu Key Gen from [here](https://github.com/alexpeterson91/Gnosis-Wagyu-Key-Gen/releases).

2. Disconnect from the internet, so it will be harder to have any leaks on the information you use, and open the Gnosis Wagyu keygen tool. You will be given 2 options, either create a new mnemonic or import an existing mnemonic. The GUI is very user friendly and explains all steps along the way.

![Gnosis Wagyu - 1st screen](/img/gnosis-wagyu1.png)

You will be shown your Mnemonic Phrase. Keep it safe, as it is used to recreate the validator keys! We recommend copying it in an encrypted volume or in paper stored in a safe place.

To ensure that you have copied it somewhere, it will ask you to type it again.

![Gnosis Wagyu - 2nd screen](/img/gnosis-wagyu2.png)

Choose 1) How many keys you want to create, 2) the password to protect the keys and 3) the Withdrawal Address where your Consensus Layer profits will be sent.

:::warning GNO Incentive program:
If you are running this program to generate keys within the context of the DGNO Incentive program, make sure to generate the right amount of validators **3** (**4** if you have participated in Dappcon program) and to fill in the ETH1 Withdrawal Address Field with the withdrawal address that has been provided. Also make sure to choose a directory that reflects the folder where you want the files to be saved.
:::

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

Follow the official instructions in the [Gnosis Chain documentation](https://docs.gnosischain.com/node/manual/validator/deposit) to deposit your GNO into the deposit contract.

After the deposit is gone, you will be able to check the progress of your deposit by searching for your validator key in the [Gnosis Beacon Chain Explorer](https://gnosischa.in/), which is a fork of the [Ethereum Beaconcha.in](https://beaconcha.in/) explorer. You can get a direct link to this by clicking on the `View in Beaconcha.in` button in the upper, right corner of the Dappnode Web3signer Gnosis UI, where you uploaded the keystores.

**Remember**: Embarking on the staking journey requires diligence. Always keep abreast of developments and make informed decisions.

## Withdrawing my GNO

Once you want to finish your staking journey, you will need to withdraw your GNO from the Gnosis Chain. This is a 2 step process of exiting the validator from the Dappnode UI and claiming the GNO from the deposit contract.

:::info Gnosis Chain withdrawals ≠ Ethereum withdrawals
Because the native token of Gnosis Chain is xDAI (you pay fees in it), but the staking token is GNO, withdrawals work differently than in the Ethereum chain and do not happen automatically. You must claim your withdrawn tokens from the Deposit Contract. More info [here](https://docs.gnosischain.com/node/management/withdrawals).
:::

### 1. Exit the validator from the Dappnode UI

:::warning
It is recommended to update your withdrawal credentials to the `0x01` type before exiting your validator. Updating your withdrawal credentials later, when your node is stopped, is more difficult. To check if you already have updated withdrawal credentials you can check your validators in the [consensus explorer](https://gnosischa.in/), if your withdrawal address shows as an address that starts with a `0x00` it means that your withdrawal address needs to be upgraded to a `0x01`, please refer to the guide in the [Gnosis Chain documentation](https://docs.gnosischain.com/node/management/withdrawals#how-to-change-the-withdrawal-credential). If your validator already shows a `0x01` address, you DON'T need to follow these steps.
:::

![Gnosis Withdrawals](/img/gnosiswithdrawals1.png)

Navigate to the Stakers > Gnosis Chain menu and click on the `Upload Keystores` button on the Web3Signer card.
Once you are in the Web3Signer UI, select the validators you want to exit and click on the `Exit Validator` button on the top right part of the UI.
Follow the instructions and type "I want to exit", followed by `Exit`.

Now the message to exit will be broadcasted to the network.

:::caution Withdrawal queue
Your validator will not exit immediately. It will be queued to exit and you can track when it's due in the [Gnosis Beacon Chain Explorer](https://gnosischa.in/).
Even then, you will need to claim your GNO from the deposit contract as per the next step.
:::

### 2. Claim your GNO from the deposit contract

As soon as your withdrawal has been processed by the Beacon Chain, you will be able to claim your GNO from the deposit contract. You can claim from any of your wallets that hold xDAI to pay gas fees.

1. Go to the [Gnosis Chain Deposit Contract page in Gnosisscan.io](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F3) and navigate to the `Write as Proxy` tab,

2. Connect your wallet with the `Connect to Web3` button and then locate the `3. claimWithdrawal` function.

3. Type your withdrawal address in the field and click `Write`. A transaction should trigger on your wallet. Approve it and wait for it to be included in a block.

![Claiming from the Smart Contract](/img/gnosiswithdrawals2.png)

Voilà! Your GNO will appear on your withdrawal address!
