---
llm_description: "Introduces Ethical Metrics for privacy-preserving external monitoring and offline alerts via TOR."
---

# Ethical Metrics

:::note
Ethical Metrics requires the [Dappnode Monitoring Service (DMS)](../packages/dms.md) and Dappnode Exporter as dependencies.
:::

## Introduction

When it comes to monitoring your Dappnode, the [Dappnode Monitoring Service (DMS)](../packages/dms.md) offers valuable insights into the health and performance of your packages and system. Yet, there's a key thing that DMS can't do: **DMS can't notify you when your Dappnode goes offline**. This limitation arises because DMS operates from within your Dappnode, so it can't help when it experiences downtime.

**Ethical Metrics solves this DMS limitation.** It is a service that allows for external monitoring of your Dappnode **without leaking any identifying information**. This way, you will be able to receive notifications when your Dappnode goes offline.

:::info
Ethical Metrics comes from the request of the users to have useful alerts and the strict compromise of Dappnode of preserving privacy for its users.
:::

So, how did we manage to overcome the difficulty of monitoring your Dappnode without compromising your privacy? In order to keep your privacy intact, **all the communication between your Dappnode and our monitoring servers is done through the TOR network**. The TOR network enables anonymous communication by directing Internet traffic through a free, worldwide, volunteered overlay network that consists of more than seven thousand relays.

:::tip
In a nutshell, your Dappnode signals that it's alive via a private channel so we don't know where it comes from. If it stops sending this signal, we can assume that it's offline and send an alert to the Email or Telegram associated with that particular Dappnode. This way, your Dappnode's IP address remains hidden and nobody (not even us) can identify which metrics belong to whom.
:::

**To put it simply:** Ethical Metrics enables us to monitor a group of Dappnode metrics for you. In the event that your Dappnode goes offline, Ethical Metrics can send notifications to an email address or Telegram handle that you provide during configuration. All this communication occurs via the TOR network, which guarantees the protection of your Dappnode's IP address and the confidentiality of your metrics.

![setup-5](/img/ethical-metrics.png)

:::info
Ethical metrics is one of our newest packages and it is still under constant improvement. Please come back to this page to check for updates.
:::
