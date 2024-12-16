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

### 3. Install the Lido CSM package

To install the Lido CSM package, select the variant that suits your needs:

- [Holesky package](http://my.dappnode/installer/dnp/lido-csm-holesky.dnp.dappnode.eth)
- [Ethereum package](http://my.dappnode/installer/dnp/lido-csm-mainnet.dnp.dappnode.eth)

### 4. Register as Node Operator

#### 4.1 Connect your wallet

- Open the Lido CSM package UI.
- Connect your wallet.
- Click the Register Node Operator button.

#### 4.2 Ensure you have the requirements

While registering as a node operator, the UI will verify that you meet the following requirements:

- Stake Requirement: You need 2 ETH or an equivalent amount in stETH or wstETH for the first validator.
- Infrastructure Setup: Your Dappnode must be running:
  - An execution client.
  - A consensus client.
  - Web3Signer.
  - MEV relay subscriptions.

#### 4.3 **Setup notifications**

- Use the [Telegram BotFather](https://core.telegram.org/bots/tutorial#obtain-your-bot-token) to create bot and get its token.
- Start the chat with your bot.

:::warning
You must start the conversation with the bot using `/start` so it can send you notifications.
:::

- Use [userinfobot](https://t.me/userinfobot) to retrieve your user ID.
- Introduce your bot token and user ID in the UI and confirm.
- You should receive a confirmation message from the bot.

![lido-notifications-onboarding](/img/lido-notifications-onboarding.png)

#### 4.4 **Submit register & Upload your validators' keys**

- Navigate to the Lido CSM UI and complete the deposit process by submitting the `deposit_data.json` file you generated with your keystore(s).
  ![Lido-CSM4](/img/lido-csm-ss-docs4.png)

- If your validator keys are not already uploaded to Web3Signer, you can import them directly through the Lido CSM package UI.

  Automatically, after providing the `deposit_data.json` a prompt will appear in the UI, allowing you to:

  - Select or drag-and-drop the keystore files associated with your `deposit_data.json`.
  - Enter the password for the keys in the provided field.
  ![Lido-CSM4](/img/lido-csm-ss-docs5.png)

- You'll be prompted to sign an ETH bond depending on the number of validators you're submitting to the CSM.
- Once the deposit has been confirmed, the CSM and then the Beacon Chain will process your deposit. Keep in mind you'll have to wait 16-24 hours plus the Becaon Chain's entry queue for your validators to activate. Your node operator setup is now complete!
