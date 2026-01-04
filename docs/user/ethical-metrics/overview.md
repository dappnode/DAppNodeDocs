# Ethical Metrics

:::note
Ethical Metrics requires the [Dappnode Monitoring Service (DMS)](../packages/dms.md) as a dependency.
:::

## Introduction

When it comes to monitoring your dappnode, the [Dappnode Monitoring Service (DMS)](../packages/dms.md) offers valuable insights into the health and performance of your packages and system. Yet, there's a key thing that DMS can't do: **DMS can't notify you when your dappnode goes offline**. This limitation arises because DMS operates from within your dappnode, so it can't help when your dappnode experiences downtime.

**Ethical Metrics solves this DMS limitation.** It is a service that allows for external monitoring of your dappnode externally **without leaking any identifying information**. This way, you will be able to recieve notifications when your dappnode goes offline and other useful cases, such as when your dappnode is at high CPU usage during an extended period of time or your disk space is running out.

:::info
Ethical Metrics comes from the request of the users to have useful alerts and the strict compromise of Dappnode of preserving privacy for its users.
:::

So, how did we manage to overcome the difficulty of monitoring your dappnode without compromising your privacy? In order to keep your privacy intact, **all the communication between your dappnode and our monitoring servers is done through the TOR network**. The TOR network is enables anonymous communication by directing Internet traffic via a free, worldwide, volunteer overlay network that consists of more than seven thousand relays.

:::tip
In a nutshell, your dappnode signals that it's alive via a private channel so we don't know where it comes from. If it stops sending the signal that it's alive, we can assume that it's offline and send an alert to the email associated with that particular dappnode. This way, your dappnode's IP address remains hidden and nobody (not even us) can identify which metrics belong to who.
:::

:::caution
To send alerts, it is necessary that you provide an alert where to send these alerts. In order to remain private, we recommend you to use an email address that can't be linked to your identity. For example, John Doe probably wouldn't want to use "JohnDoe@gmail.com" if he wanted to remain anoymous.
:::

**To put it simply:** Ethical Metrics enables us to monitor a group of dappnode metrics for you. In the event that your dappnode goes offline, Ethical Metrics can send notifications to an email address you provide during installation. All this communication occurs via the TOR network, which guarantees the protection of your DappNode's IP address and the confidentiality of your metrics.

![setup-5](/img/ethical-metrics.png)

:::info
Ethical metrics is one of our newest packages and it is still under constant improvement. Please come back to this page to check for updates on this package.
:::

## Set-up Ethical Metrics

In order to setup your Ethical Metrics notification system, you need to follow these steps:

1. Navigate to http://my.dappnode/system/notifications
2. Introduce the email address where you want to receive the notifications and click on the switch to activate the notifications.
3. Thats it! Your ethical metrics will automatically register your tor instance with the email address you provided through the Tor network preserving your privacy. (you should have received a welcome email)

![setup-6](/img/ethical-metrics-setup.png)

<hr />

## Troubleshooting

<details>
  <summary><strong>How can I make sure my dappnode is registered?</strong></summary>
  
  Upon registering, an email will be sent to your configured email address. If you don't receive this email, please check your spam folder.
</details>

<details>
  <summary><strong>How can I test a "dappnode down" notification?</strong></summary>
  
  There are various ways to test a "dappnode down" notification. The easiest way is to stop your dappnode, but you can also test it by stopping the "prometheus" service of your Ethical Metrics package. After an hour, you should receive a "dappnode down" notification in your email.
</details>

<details>
    <summary><strong>How can I unregister from the Ethical Metrics monitoring system?</strong></summary>
    
    <p><strong>1. Using the Dappnode Interface:</strong> For an active Dappnode, simply navigate to <a href="http://my.dappnode/system/notifications">System > Notifications</a> and toggle off <b>Ethical Metrics</b>. This will stop all notifications and halt metric collection from your Dappnode. As long as Ethical Metrics notifications are enabled in the Dappnode UI, your device remains registered in our monitoring system.</p>
  
    <p><strong>2. For Inactive Dappnodes:</strong> If your Dappnode is no longer accessible, locate the <b>unregister link</b> in the welcome email you received upon registration. Keep in mind that using this method won't employ our IP hiding measures, but you can enhance security using tools like a VPN. Please keep in mind that if your DAppNode is still up and running with Ethical Metrics notifications turned on, it'll register again by itself.</p>
    
    <p><strong>3. Manual Unregistration:</strong> Lost the welcome email? You can also unregister by inputting the following URL into your browser: <code>https://ethical-metrics.dappnode.io/unregister-from-email/?instance=<i>YOUR_INSTANCE</i>.onion%3A9090</code>. Make sure to replace <i>YOUR_INSTANCE</i> with the unique identifier for your Dappnode, excluding ".onion:9090", which is already included in the provided URL.</p>

</details>
