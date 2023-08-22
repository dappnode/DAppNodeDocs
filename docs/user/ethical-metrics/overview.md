# Ethical Metrics
:::note
Ethical Metrics requires the [DappNode Monitoring Service (DMS)](../packages/dms.md) as a dependency.
:::

## Introduction
When it comes to monitoring your dappnode, the [DappNode Monitoring Service (DMS)](../packages/dms.md) offers valuable insights into the health and performance of your packages and system. Yet, there's a key thing that DMS can't do: **DMS can't notify you when your dappnode goes offline**. This limitation arises because DMS operates within your dappnode, making it powerless when your dappnode experiences downtime.

**Ethical Metrics solves this DMS limitation.** Ethical Metrics enables us to monitor your dappnode externally. This way, you will be able to recieve notifications when your dappnode goes offline. In addition to this, you will also be able to recieve other type of notifications such as when your dappnode is at high CPU usage during an extended period of time. However, there is one more challenge to overcome: monitoring your dappnode externally without compromising your privacy. In order to keep your privacy intact, **all the communication between your dappnode and our monitoring servers is done through the TOR network**. In a nutshell, the TOR network enables us to monitor your dappnode without knowing its IP address. This way, your dappnode's IP address remains hidden and nobody (not even us) can identify which metrics belong to who.

**To put it simply:** Ethical Metrics enables us to monitor a group of dappnode metrics for you. In the event that your dappnode goes offline, Ethical Metrics can send notifications to an email address you provide during installation. All this communication occurs via the TOR network, which guarantees the protection of your DappNode's IP address and the confidentiality of your metrics.


![setup-5](/img/ethical-metrics.png)

:::info
Ethical metrics is one of our newest packages and it is still under constant improvement. Please come back to this page to check for updates on this package.
:::
## Installing Ethical Metrics
In order to setup your Ethical Metrics notification system, you need to follow these steps:

1. Install the Ethical Metrics package from the DAppStore. Go to http://my.dappnode/installer/dnp/ethical-metrics.dnp.dappnode.eth
2. Introduce the email address where you want to receive the notifications.
3. Thats it! Your ethical metrics will automatically register your tor instance with the email address you provided through the Tor network preserving your privacy.

:::caution
In order to keep your privacy intact, we highly encourage our users to set up an email that can't be linked to your identity. This way, your privacy remains protected.
:::

<hr />

## Troubleshooting

<details>
  <summary><b>How can I make sure my dappnode is registered?</b> </summary>
</details>
<details>
  <summary><b>How can I test a dappnode down notification?</b> </summary>
</details>
<details>
  <summary><b>How can I unregister from the monitoring system?</b> </summary>
</details>
