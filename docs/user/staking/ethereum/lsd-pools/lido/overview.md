# Lido Community Staking Module (CSM)

---

## **Lido CSM Overview**

Lido is a **liquid staking** solution for Ethereum that addresses the liquidity issues of traditional staking. Instead of locking up assets and losing access to them, users can stake through Lido and receive liquid tokens. These tokens retain the value of the staked assets and can be used elsewhere while still earning staking rewards.

Lido, with over [9,8 million ETH](https://lido.fi/ethereum) staked on its platform, is a significant contributor in the Ethereum ecosystem. To broaden and diversify its network of node operators, Lido recently introduced the [**Community Staking Module** (CSM)](https://csm.lido.fi/?ref=dappnode), the first Lido module with a **permissionless entry** for Ethereum staking. By first providing an ETH-based bond, anyone can now become a node operator by running validators in the Lido protocol. Designed with solo stakers in mind, the CSM lowers the barrier to becoming an Ethereum validator with 2.4 ETH, requiring far less than the standard 32 ETH, and offers a user-friendly experience. While tailored for smaller stakers, it is open to all, including professional operators.

:::info
Becoming a Lido Node Operator is recommended for users with some experience in running validators. The process requires a basic understanding of the Ethereum network and the Lido protocol. If you are new to staking, we recommend setting up a validator on the Testnet first to familiarize yourself with the process, see [Staking on the Ethereum Testnet](/docs/user/staking/ethereum/solo/holesky.md).
:::

## **Lido CSM in dappnode**

Dappnode provides an easy-to-use and intuitive interface for most of the infrastructure needed to become a Lido Node Operator. The process is straightforward and requires only a few steps to set up a node operator and start earning rewards. 

Steps to become Node Operator
1. Go to Dappnode platform https://my.dappnode/
2. Go to Dappstore tab in the left menu
3. Search and install Lido CSM package
4. Once it is installed, go to packages tab and click on the name of the Lido CSM package and find the section Ui below the version title. 
5. You will be in the Lido interface, connect your wallet and start the staking process. 

Dappnode takes care of the Lido protocol requirements, such as exiting validator when needed, and provides a user-friendly interface to manage the node operator.


The main functionalities covered by Dappnode in the Lido CSM package are:

- **Telegram Notifications**: you can setup notifications for your Node Operator to be informed about any event. You need to configure the user ID and Telegram token to received your notifications. 
- **Ejector**: whenever any of your validator requires to be exited, it will be done automatically sending you the corresponding notification.
- **Track multiple Node Operators**: you can track multiple Node Operators from the same DAppNodePackage-lido-csm.
- **Performance**: your validators attestations performance will be tracked and you will be notified if they are not performing as expected according to the Lido tresholds.
- **MEV boost relays**: you will receive notifications whenever your validators are using relays blocklisted in the Lido CSM or not using any relay at all.
- **Import keystores directly from the Lido CSM**: you can import your keystores directly from the Lido CSM to your DAppNodePackage-lido-csm and they will be automatically tagged as Lido.
- **Infraestructure monitoring**: you will be able to visualize the status of your infraestructure (EC - CC - Signer - MEV Boost).

### **Telegram Notifications**

You will be able to setup your notifications either during the onboarding process if you are registering as a new Node Operator and from the UI navigating to `/notifications`. You must provide:

- Bot token: this is the secret token from a bot that you must create. You can get it from the Telegram BotFather. See the [obtain your bot token](https://core.telegram.org/bots/tutorial#obtain-your-bot-token) section.
- User ID: this is your Telegram user ID. You can get it from the [userinfobot](https://t.me/userinfobot) typing `/start`.

Once your notifications are setup, you will receive notificatios for the following events:

- Lido Smart Contract events:
  - [Lido VEVO events](https://docs.lido.fi/staking-modules/csm/guides/events/#contract-vebo): the most important event to remark is the validator exit request event, that will trigger the Ejector to exit the validator.
  - [Lido CSM events](https://docs.lido.fi/staking-modules/csm/guides/events/#contract-csm): check the Lido documentation for more details.
  - [Lido CSFeeDistributor](https://docs.lido.fi/staking-modules/csm/guides/events/#contract-csfeedistributor): check the Lido documentation for more details.
- Validator exit:
  - Successful exit: you will receive a notification when the validator has been successfully exited.
  - Failed exit: you will receive a notification when the validator exit has failed, letting you know that a manual exit is required.
- Relays (comming soon):
  - Blocklisted relay: you will receive a notification when your validator is using a blocklisted relay.
  - No relay: you will receive a notification when your validator is not using any relay.
- Performance (comming soon):
  - Attestations performance: you will receive a notification when your validator is not performing as expected according to the Lido tresholds.

### **Ejector**

The Ejector is a service that will automatically exit your validator when needed. You will receive a notification when the validator has been successfully exited and when the exit has failed, letting you know that a manual exit is required. The ejector has the following characteristics:

- **Automatic exit**: the Ejector will automatically exit your validator when needed.
- **Ejector Notifications**: you will receive a notification when the validator has been successfully exited and when the exit has failed, letting you know that a manual exit is required.
- **Retry mechanism**: the Ejector will retry the exit process if it fails, ensuring that the validator is exited successfully.

![lido-notification-ejector](/img/lido-notification-ejector.png)

### **Track multiple Node Operators**

The DAppNodePackage-lido-csm allows you to track multiple Node Operators from the same package. This feature is useful if you are managing multiple Node Operators and want to keep track of their performance and status in one place. To make the package to track a new Node Operator, you must sign in with the new Node Operator's wallet and import the keystores.

:::warning
Make sure to import the correct keystores for each Node Operator. Importing the wrong keystores can result in penalties.
:::

### **Import keystores directly from the Lido CSM**

You can import your keystores directly from the DAppNodePackage-lido-csm UI during the onboarding process or from the `/keystores` section (comming soon). The keystores will be automatically tagged as Lido, and you will be able to use them to run validators in the Lido protocol. These keystores will be located in the web3signer package, for further editing or deleting them you must go to the web3signer UI.

Whenever there are 1 or more keystores that belongs to your Node Operator and are not imported you will be able to see the following message in the DAppNodePackage-lido-csm UI:

![lido-keystore-not-imported](/img/lido-keystore-not-imported.png)

### **Infraestructure monitoring**

You will be able to visualize the status of your infraestructure (EC - CC - Signer - MEV Boost) from the DAppNodePackage-lido-csm UI. This feature is useful to monitor the status of your infraestructure and ensure that everything is running smoothly.

![lido-infra](/img/lido-infra.png)

### **Performance**

🚀 Cooming soon

### **MEV boost relays**

🚀 Cooming soon

## Testnet

The Lido Community Staking Module is available on the Ethereum Mainnet. If you are new to staking, we recommend setting up a validator on the Testnet first to familiarize yourself with the process. The process is the same, the dappnode package for Lido CSM in testnet is **lido-csm-holesky.dnp.dappnode.eth**.

---

Refer to the Lido Community Staking Module documentation for more details:

- [Lido Community Staking Overview](https://blog.lido.fi/lido-community-staking-an-overview/)
- [Lido Community Staking Module](https://operatorportal.lido.fi/modules/community-staking-module)
