# Already a node operator

This document provides detailed instructions for existing Node Operators on integrating their setup with the Lido Community Staking Module (CSM) via Dappnode. By following these steps, you can efficiently manage your validators and ensure proper functionality within the Lido protocol.

## 1. Importing Keystores into the Brain UI

Keystore files contain critical information for managing your validators. When you becamo a Node Operator you lido deposists the necessary amount of ETH to the validator to start staking. These keys files must be imported into the Staking Brain (Brain UI) with the appropriate configuration for the Lido protocol.

### Steps to Import Keystores

1. Ensure your keys are not already uploaded in any node.

2. Access the `/import` tab in Brain UI:

   - Mainnet [Staking Brain](http://brain.web3signer.dappnode/import)

   - Holesky [Staking Brain](http://brain.web3signer-holesky.dappnode/import)

3. Select the “Lido” Tag:
   While uploading your keystore files, make sure to tag them with “Lido” to designate automatically the required fee recipient from the Lido protocol:

   - Mainnet: `0x388C818CA8B9251b393131C08a736A67ccB19297`

   - Holesky: `0xE73a3602b99f1f913e72F8bdcBC235e206794Ac8`

   :::danger
   Do not edit the fee recipient address. Doing so will result in penalties.
   :::

4. Provide the password

   ![Import keystores to Staking Brain](/img/lido-csm-brain-import.png)

:::tip  
For keys that have not yet been uploaded to the Lido protocol, you can import them to the Staking Brain through the Lido CSM UI while simultaneously submitting them to the Lido protocol via the `/keys/submit` path.
:::

## 2. Opening the Lido CSM UI and Wallet Connection

The Lido CSM UI serves as the central interface for managing validator keys and monitoring validator and infrastucture status. Before proceeding with any validator operations, ensure your wallet is connected.

1. Access the Lido CSM UI:

   Navigate to the Lido CSM package UI. - [Mainnet UI](http://ui.lido-csm-mainnet.dappnode/) - [Holesky UI](http://ui.lido-csm-holesky.dappnode/)

2. Connect Your Wallet:

   Use the “I am a Node Operator” button and choose your wallet provider.

   ![Log In as already Node Operator](/img/lido-csm-log-in-already-NO.png)

3. Authorize the Connection:

   - Follow the on-screen prompts to grant the necessary permissions.

   - Ensure the wallet’s network matches the intended environment (e.g., Mainnet or Holesky).

4. Verify Connection:

   Once connected, your wallet address will appear in the top-right corner of the interface.

   ![Ensure wallet is connected](/img/lido-csm-wallet-connected.png)

## 3. Configuring Telegram Notifications

To receive critical updates and alerts regarding your validator operations, it is essential to configure Telegram notifications.

This provides alerts about validator penalties, slashing incidents, exit requests, key deposits and smart contract events.

Staying informed helps safeguard your assets, reduce risks, and maintain transparency and control over your activities in the protocol, ensuring smooth and efficient participation.

1. Initial Setup:

   - When accessing the Lido CSM UI for the first time, a modal will appear prompting you to configure Telegram notifications.

   - Click “Navigate” to go to `/notifications`.

   ![Notifications Modal](/img/lido-csm-notifications-modal.png)

2. Generate a Telegram Bot Token:

   - Open Telegram and search for [`@BotFather`](https://web.telegram.org/a/#93372553).

   - Start a chat with BotFather and type `/newbot`.

   - Follow the instructions to name your bot and choose a username (must end with "bot").

   - Once created, BotFather will send you the bot token.

     - Example: `123456789:ABCDefghIJKLMNOPQRSTuvwxYZ`.

   - Start the chat with the created bot by clicking `Start` button.

   :::warning
   You must start the conversation with the bot clicking `Start` so it can send you notifications.
   :::

3. Obtain Your User ID:

   - Open [Telegram](https://web.telegram.org/a/) and search for [`@userinfobot`](https://web.telegram.org/a/#52504489) or [`@raw_data_bot`](https://web.telegram.org/a/#1533228735).

   - Start a chat with the bot by clicking `Start` button.

   - The bot will reply with your Telegram ID

4. Input the Bot Token and User ID:

   Enter the bot token and your user ID in the Lido CSM package UI and click `Update Telegram Data`.
   ![Set up Notifications](/img/lido-csm-setup-notifications.png)

   :::warning
   You must start the conversation with the bot using `/start` so it can send you notifications.
   :::

   :::caution
   To receive the notifications, is mandatory to fill both inputs, otherwise the notification system won't work
   :::

5. Verify Notifications:

   Ensure that test alert was sent to your Telegram to confirm that notifiactions are properly configured.
   ![Ensure Notifications are set](/img/lido-csm-ensure-notifications.png)

## 4. Monitoring Infrastructure

The dashboard provides an at-a-glance view of your infrastructure’s health and status, including execution clients, consensus clients, web3 signer, and subscribed relays.
