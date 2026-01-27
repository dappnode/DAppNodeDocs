---
title: Premium services
llm_description: "Premium features: push notifications, validator alerts, backup node (168h/month), and support calls."
---

## Advanced push notifications
All Dappnode users have **complete access to the whole set of notifications** in the Dappmanager or in the app for free. The advantage of being a Premium user is to **receive push notifications in mobile and desktop**.

Dappnode users can activate their preferred notifications and manage the subscribed devices in the Dappmanager's Notification section.

### Validator notifications
In addition to the current [list of notifications](https://docs.dappnode.io/docs/user/notifications/notifications-list) (System, DMS, Execution and Consensus clients and Direct notifications), the following free **validator notifications** have been added recently:

- **Validator offline**. Sent you if any of your validator(s) missed an attestation. 
- **Validator back online**. Sent if all your validator(s) are attesting again.
- **Validator slashed**. Sent if your validator(s) was slashed.
- **Missed block proposal** Sent if you missed a proposal.
- **Submitted block proposal** Sent if you proposed a block.

All validator notifications are sent approximately 6 minutes after the event happens, based on the latest justified epoch data.

:::info
All the data needed to send these notifications is fetched directly from your local consensus client. No third party services are used. Because of this, these notifications are only available if your consensus client is fully synced and running properly. 

Best effort is made to gather the data, but in some cases (e.g. if your consensus client has recently restarted) some notifications may be missed.
:::

More notifications will be added to the current set gradually to provide a more complete monitoring experience. 

## Backup node for validators

The Backup node ensures that all imported validators in your Dappnode remain active when your execution client or beacon node experience issues.

### Use cases for the Backup node

- If your Execution Client gets corrupted, you will have a backup while you resync it.
- If you want to switch Execution Client, you will have a backup while you sync the new client.
- If your Beacon Node is down, you will be covered by the backup while resyncing even if it requires a short time using checkpoint-sync.
- If your MEV Boost is down, the backup node also has MEV Boost configured, so you will build MEV blocks while using the backup.

![Map-backup](/img/backup-node-infra.png)

### Backup node characteristics

- The backup node for validators is available in Ethereum, Gnosis and Hoodi.
- It provides 168h of backup coverage per month in each network. This time should allow users to fix their attestation issues safely and return to normal operation. 
- The backup is activated manually by the user in the Premium interface. You can activate and deactivate it at any moment. You will only spend backup time when the backup is active in the selected network.
- After activating the backup, you will need to wait 2 epochs (13 min) to start attesting.

### Validators limit per network

The backup has a default limit of validators per network. 

In Ethereum, the backup service has a limit of **10 validators**. If you exceed this number, you have two options: 
- 1. Consolidation. You can consolidate your validators in 10 or less validators. Consolidation could be beneficial to reduce maintenance and validator management.
- 2. Custom backup coverage. You can ask to our team to get extra backup coverage for your validators. Please open a support ticket in Discord. 

In Hoodi (testnet) applies the same limit of **10 validators**. 

In Gnosis, the backup service has a limit of **100 validators**.If you exceed this number, you can ask to our team to get extra backup coverage for your validators. Please open a support ticket in Discord to let us know.

Prysm and Teku consensus clients are not supported in the backup service. Please use alternative consensus clients. 

The backup service connects to the user's consensus client via an API key. Validator keys are not managed by Dappnode in the backup process. The users always retains full control of their keys.

The Backup Node ensures that **all imported validators in your Dappnode remain active** when attestation issues arise. 


## Personalized support

Dappnode's Support system is based on 4 levels: 
- Community support (Dappnode users' shared knowledge in Discord)
- Dappnode Home support (Individual private chats)
- Paid Individual sessions (private 30 min call, 60 USD/session)
- **Premium Personalized support** 

As part of the Premium subscription, Dappnode users can book **4 personalized support sessions with Dappnode experts in a year**.

Personalized support has been created to **guide Dappnode users in every step of your staking process**. Premium users can book a 30-minute video call to discuss any relevant topic related to Dappnode.

Most common support sessions: 

- **Guided onboarding:** Receive guidance from a Dappnode expert to start your staking journey.
- **Most adequate staking setup:** A Dappnode expert can assist you in selecting the best performing clients for your needs.
- **Resolve problems:** If you are experiencing issues with your validators, a Dappnode expert can help you resolve them.

## Subscribe to Dappnode Premium
Visit the [Dappnode Premium website](https://dappnode.com/pages/dappnode-premium) and get your subscription for 9.99€/month
 
