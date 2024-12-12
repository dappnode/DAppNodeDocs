# **Become a Lido Node Operator with Dappnode**

**Dappnode** provides an easy-to-use and intuitive interface for most of the infrastructure needed to become a Lido Node Operator. The process is straightforward and requires only a few steps to set up a node operator and start earning rewards. An overview of the process is how the Lido CSM UI will greet you when first connecting your wallet to the dApp:

![Lido-CSM1](/img/lido-csm-ss-docs1.png)

---

## **First Steps to create a Node Operator in Dappnode**

### 1. **Getting your Dappnode ready**

- Navigate to [Dappnode Staking for Ethereum](http://my.dappnode/stakers/ethereum) or [Dappnode Staking for Holesky](http://my.dappnode/stakers/holesky).
- Select your desired execution and consensus clients.
- Choose Web3Signer to upload the keystores.
- Configure MEV Boost with as many relays as possible. For additional info on MEV in CSM, check the [Lido CSM Docs](https://operatorportal.lido.fi/modules/community-staking-module).
  - Mainnet relays see `get_relays` from [Mainnet](https://etherscan.io/address/0xf95f069f9ad107938f6ba802a3da87892298610e#readContract)
  - Holesky relays see `get_relays` from [Holesky](https://holesky.etherscan.io/address/0x2d86C5855581194a386941806E38cA119E50aEA3#readContract)

:::warning
It is mandatory to choose at least one relay to ensure the node operator does not propose vanilla blocks. When uploading the keystores with the "Lido" tag, this requirement will be automatically checked. As a Lido Node Operator, it is your responsibility to ensure that your infrastructure is properly using MEV Boost.
:::

### 2. **Create the Keystores & Deposit Data**

:::info
In order to run a validator, you need to generate the necessary keystores and deposit data. The keystores **must** be created with the withdrawal credential of Lido:
:::

- Holesky: `0xF0179dEC45a37423EAD4FaD5fCb136197872EAd9`.
- Ethereum: `0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f`.
- We recommend using official tools like [Staking-Deposit-CLI](https://github.com/ethereum/staking-deposit-cli) or the [Wagyu Key Gen Tool](https://wagyu.gg/) to create the keystores. This step is crucial and mandatory.

The validator Keystores will be used to run the validators on the Ethereum network, while the deposit data will be used to register the validators in the Lido protocol.

![Lido-CSM2](/img/lido-csm-ss-docs2.png)

:::warning
Make sure you correcly set the withdrawal address up, otherwise the Lido CSM won't let you move forward with the validator deposits.
:::

### 3. **Upload the Keystores in your Dappnode**

- Go to the Web3signer UI for [Ethereum](http://brain.web3signer.dappnode) or [Holesky](http://brain.web3signer-holesky.dappnode).
- Upload the keystores and tag them with "Lido".
- The fee recipient will be automatically set to `0xE73a3602b99f1f913e72F8bdcBC235e206794Ac8` for Holesky and `0x388C818CA8B9251b393131C08a736A67ccB19297` for Mainnet. It is not editable.

![Lido-CSM3](/img/lido-csm-ss-docs3.png)

:::caution
Double-check that your Lido keystores are tagged correctly. This is crucial to ensure that the node operator is properly set up, and has the correct fee recipient set.
:::

:::danger
Do not edit the fee recipient address. Doing so will result in penalties.
:::

### 4. **Register as a Lido Node Operator & your validators**

- Navigate to the [Lido Deposit UI](https://csm.lido.fi/?ref=dappnode) and complete the deposit process by submitting the `deposit_data.json` file you generated with your keystore(s).
  ![Lido-CSM4](/img/lido-csm-ss-docs4.png)
- You'll be prompted to sign an ETH bond depending on the number of validators you're submitting to the CSM.
- Once the deposit has been confirmed, the CSM and then the Beacon Chain will process your deposit. Keep in mind you'll have to wait 16-24 hours plus the Becaon Chain's entry queue for your validators to activate. Your node operator setup is now complete!

### 5. **Setup notifications**

- Get your bot token and user ID from the [Telegram BotFather](https://core.telegram.org/bots/tutorial#obtain-your-bot-token) and [userinfobot](https://t.me/userinfobot) respectively.
- Introduce your bot token and user ID and confirm
- You should receive a confirmation message from the bot.

:::warning
You must start the conversation with the bot using `/start` so it can send you notifications.
:::

![lido-notifications-onboarding](/img/lido-notifications-onboarding.png)
