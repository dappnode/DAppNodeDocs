# Notifications & Warnings

The DAppNodePackage-lido-csm provides notifications and warnings to help you monitor your infraestructure and validator performance. You will be able to setup your notifications either during the onboarding process if you are registering as a new Node Operator and from the UI navigating to `/notifications`.

## **UI Warnings**

The UI will display in the dashboard the following warnings:

- Infraestructure healthcheck:
  - Execution client health: you will be able to check the status of your execution client, either if its installed, running and syncing.
  - Consensus client health: you will be able to check the status of your consensus client, either if its installed, running and syncing.
  - Web3signer: you will be able to check the status of your web3signer, either if its installed and running.
  - MEV Boost: you will be able to check the status of your MEV Boost, either if its installed and running.
- Relays (comming soon):
  - Blocklisted relay: you will be able to check if your validator is using a blocklisted relay.
  - No mandatory relay: you will be able to check if your validator is not using any mandatory relay.
- Attestations performance (comming soon): you will be able to check if your validator is not performing as expected according to the Lido tresholds.
- Keystores not imported: you will be able to check if there are 1 or more keystores that belongs to your Node Operator and are not imported in the web3signer.

## **Telegram notifications**

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
- Keystores not imported (comming soon):
  - You will receive a notification when there are 1 or more keystores that belongs to your Node Operator and are not imported in the web3signer.
