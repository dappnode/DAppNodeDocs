---
title: "Notifications & Warnings"
llm_description: "Configure Telegram notifications and UI warnings for Lido CSM validator monitoring."
---

# Notifications & Warnings

The DAppNodePackage-lido-csm provides notifications and warnings to help you monitor your infraestructure and validator performance. You will be able to setup your notifications either during the onboarding process if you are registering as a new Node Operator and from the UI navigating to `/notifications`.

## **UI Warnings**

The UI will display in the dashboard the following warnings:

- Infraestructure healthcheck:

  - Execution client health: you will be able to check the status of your execution client, either if its installed, running and syncing.
  - Consensus client health: you will be able to check the status of your consensus client, either if its installed, running and syncing.
  - Web3signer: you will be able to check the status of your web3signer, either if its installed and running.
  - MEV Boost: you will be able to check the status of your MEV Boost, either if its installed and running.

  ![lido-csm-infra-healthcheck](/img/lido-csm-infra-healthcheck.png)

- Relays (comming soon):
  - Blocklisted relay: you will be able to check if your validator is using a blocklisted relay.
  - No mandatory relay: you will be able to check if your validator is not using any mandatory relay.
- Attestations performance (comming soon): you will be able to check if your validator is not performing as expected according to the Lido tresholds.
- Keystores not imported: you will be able to check if there are 1 or more keystores that belongs to your Node Operator and are not imported in the web3signer.

  ![lido-csm-exit-requested](/img/lido-csm-keys-not-imported-warning.png)

- Exit requested: you will be able to check if you have to exit any of your validators manually if the ejector fails at auto-exiting

  ![lido-csm-exit-requested](/img/lido-csm-exit-request-warning.png)

## **Telegram notifications**

You will be able to setup your notifications either during the onboarding process if you are registering as a new Node Operator and from the UI navigating to `/notifications`. You must provide:

- Bot token: this is the secret token from a bot that you must create. You can get it from the Telegram BotFather. See the [obtain your bot token](https://core.telegram.org/bots/tutorial#obtain-your-bot-token) section.
- User ID: this is your Telegram user ID. You can get it from the [userinfobot](https://t.me/userinfobot) typing `/start`.

:::warning
You must start the conversation with the bot using `/start` so it can send you notifications.
:::

:::info
Once you setup your notifications, you will receive a test notification to confirm that everything is working properly.
:::

![lido-csm-telegram-update](/img/lido-csm-telegram-update.png)

Once your notifications are setup, you will receive notificatios for the following events:

- Lido Smart Contract events:
  - [Lido VEBO events](https://docs.lido.fi/run-on-lido/csm/alerts-and-monitoring/expert-custom-alerts/#contract-vebo): the most important event to remark is the validator exit request event, that will trigger the Ejector to exit the validator.
    ![lido-csm-report-submitted](/img/lido-csm-report-submitted.png)
  - [Lido CSM events](https://docs.lido.fi/run-on-lido/csm/alerts-and-monitoring/expert-custom-alerts/#contract-csm): check the Lido documentation for more details.
  - [Lido CSFeeDistributor](https://docs.lido.fi/run-on-lido/csm/alerts-and-monitoring/expert-custom-alerts#contract-csfeedistributor): check the Lido documentation for more details.
- Validator exit:
  - Exit requested: you will receive a notification when the validator exit has been requested.
    ![lido-csm-exit-requested](/img/lido-csm-exit-requested.png)
  - Successful exit: you will receive a notification when the validator has been successfully exited.
    ![lido-csm-exit-success](/img/lido-csm-exit-success.png)
  - Failed exit: you will receive a notification when the validator exit has failed, letting you know that a manual exit is required.
    ![lido-csm-exit-failed](/img/lido-csm-exit-failed.png)
- Performance:
  - Above the treshold: you will receive a notification when your validator is performing above the treshold.
    ![lido-csm-performance-notification-above](/img/lido-csm-performance-notification-above.png)
  - Below the treshold: you will receive a notification when your validator is performing below the treshold.
    ![lido-csm-performance-notification-below](/img/lido-csm-performance-notification-below.png)
- Operator stuck: you will receive a notification when your operator is stuck indicating the epoch range.
  ![lido-csm-stuck](/img/lido-csm-stuck.png)
- Relays (comming soon):
  - Blocklisted relay: you will receive a notification when your validator is using a blocklisted relay.
    ![lido-csm-relay-notification](/img/lido-csm-relay-notification.png)
  - No relay: you will receive a notification when your validator is not using any relay.
- Keystores not imported (comming soon):
  - You will receive a notification when there are 1 or more keystores that belongs to your Node Operator and are not imported in the web3signer.
