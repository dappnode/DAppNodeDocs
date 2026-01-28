> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Troubleshooting

Experiencing trouble when setting your notifications up? Check this FAQ. If your issue isn't listed, please pay us a visit in the [Dappnode Discord](https://discord.gg/dappnode) and we'll be happy to assist you!

<details>
  <summary><strong>How can I make sure my Dappnode is registered?</strong></summary>
  
  <b>Email:</b> Upon registering, an email will be sent to your configured email address. If you don't receive this email, please check your spam folder. <br/>
  
  <b>Telegram:</b> Once your bot has been set up, you can press the "Send Test Notification" button to see if everything is working as expected.
</details>

<details>
  <summary><strong>How can I test a "Dappnode down" notification?</strong></summary>
  
  There are various ways to test a "Dappnode down" notification. The easiest way is to stop your Dappnode temporarily, but you can also test it by stopping the "Prometheus" service of your Ethical Metrics package. After an hour, you should receive a "Dappnode down" notification in your Email and/or Telegram.
</details>

<details>
    <summary><strong>How can I unregister from the Ethical Metrics monitoring system?</strong></summary>
    
    <p><strong> 1. Using the Dappnode Interface:</strong> From the active Dappnode, simply navigate to <a href="http://my.dappnode/system/notifications">System > Notifications</a> and toggle off <b>Ethical Metrics</b>. This will stop all notifications and halt metric collection from your Dappnode. As long as Ethical Metrics notifications are enabled in the Dappnode UI, your device remains registered in our monitoring system.</p>
  
    <p><strong>2. For Inactive Dappnodes:</strong> If your Dappnode is no longer accessible, locate the <b>unregister link</b> in the welcome email you received upon registration. Keep in mind that using this method won't employ our IP hiding measures, but you can enhance security using tools like a VPN. Please keep in mind that if your Dappnode is still up and running with Ethical Metrics notifications turned on, it'll register again by itself.</p>
    
    <p><strong>3. Manual Unregistration:</strong> Lost the welcome email? You can also unregister by inputting the following URL into your browser: <code>https://ethical-metrics.dappnode.io/unregister-from-email/?instance=<i>YOUR_INSTANCE</i>.onion%3A9090</code>. Make sure to replace <i>YOUR_INSTANCE</i> with the unique identifier for your Dappnode, excluding ".onion:9090", which is already included in the provided URL.</p>

</details>
