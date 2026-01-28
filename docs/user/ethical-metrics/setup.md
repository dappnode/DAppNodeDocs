---
title: "Setting up Ethical Metrics"
llm_description: "Step-by-step guide to configure Telegram and email notifications for Ethical Metrics alerts."
---

# Setting up Ethical Metrics

:::tip
We highly recommend utilizing the Telegram channel option in addition to or instead of relying solely on email notifications.
:::

Email notifications may sometimes encounter hurdles such as being categorized as spam or getting lost in a cluttered inbox. This could inadvertently lead to missing out on important notifications that require your immediate attention.

In contrast, Telegram channels provide a streamlined and efficient way to receive notifications directly to your device, ensuring that you stay informed without any interruptions.

![setup-6](/img/ethical-metrics-setup.png)

In order to setup your Ethical Metrics notification system, you need to follow these steps:

## Telegram Notifications

1. Access Telegram Web:
   Open Telegram Web using [this link](https://web.telegram.org/a/) and login with your account. Ensure the URL ends with `/a/`. If not, manually add `/a/` after `https://web.telegram.org/`.
2. Create a Private Channel.
3. Add the DappNode bot (`@ethicalMetricsAlerts_bot`) to your channel as an administrator.
4. Find Your Channel ID:
   Copy the channel ID from the URL.
   It's a 13-digit number following the `-` in the URL. The ID always starts with `-100`. Ensure to include the `-` when copying.

   ![telegram-channel-id](/img/telegram-channel-id.png)

5. Navigate to http://my.dappnode/system/notifications
6. Enable Notifications:
   Paste the channel ID into the Telegram Channel ID field and toggle the switch `ON` to start receiving notifications.

## Email Notifications

1. Navigate to http://my.dappnode/system/notifications
2. Introduce the email address where you want to receive the notifications and click on the switch to activate the notifications.
3. That's it! Your Ethical Metrics will automatically register your TOR instance with the email address you provided. This will happen through the TOR network, preserving your privacy. You should receive a welcome email in the following minutes.

:::caution
To send email notifications, it is necessary that you provide an email address. In order to remain private, we recommend you to use an address that can't be linked to your identity. For example, John Doe probably wouldn't want to use "johndoe@gmail.com" if he wanted to remain anonymous.
:::
