---
title: "Connect to Your Dappnode Using Tailscale"
llm_description: "Setup Tailscale VPN for easy access without port forwarding; solves UPnP and CGNAT issues."
---

# Connect to Your Dappnode Using Tailscale

Tailscale is a secure, peer-to-peer VPN solution that simplifies connecting to your Dappnode without requiring complex port forwarding, solving issues such as UPnP not being recognized, routers behind CGNAT, or other port forwarding challenges. This guide walks you through setting up Tailscale to access your Dappnode.

:::tip
Using Tailscale is an excellent alternative if you're experiencing issues with UPnP, CGNAT, or port forwarding. It's easy to set up and ensures a seamless connection to your Dappnode.
:::

:::warning
When updating or reinstalling Tailscale, a new auth key might be required if the previous one is no longed valid (expired). You can check your current auth key status in the [Tailscale Admin Settings](https://login.tailscale.com/admin/settings/keys). If you encounter issues, generate a new auth key and update it in your Dappnode's Tailscale package settings.
:::

---

## Prerequisites

Before starting, ensure you have:

- Access to your [Dappnode's Admin UI](http://my.dappnode).
- A [Tailscale account](https://tailscale.com/).
- Tailscale installed on the device you want to access your Dappnode from. Download [here](https://tailscale.com/download).

## Setting Up Tailscale

### 1. Create an Auth Key

1. Log in to Tailscale and navigate to [Tailscale Admin Settings](https://login.tailscale.com/admin/settings/keys). Click on **_Generate auth key_**.
<p align="center">
    <img width="80%"src="/img/authkey1.png"/>
</p>
2. Create a new auth key. Any name will work. We recommend activating the "Reusable" option so you can use the same key multiple times.
<p align="center">
    <img width="50%"src="/img/authkey2.png"/>
</p>
3. Save the key for the next step. Do not share this key with anyone.
<p align="center">
    <img width="50%"src="/img/authkey3.png"/>
</p>

### 2. Install Tailscale on Your Dappnode

1. Access your [Dappnode's Admin UI](https://my.dappnode)
2. Navigate to **Dappstore** and search for the `Tailscale` package.
3. Click **Install**
4. Go to the Tailscale package in **Packages** tab and enter the auth key you created during installation.
<p align="center">
    <img width="80%"src="/img/authkey4.png"/>
</p>

Once installed, Tailscale will run as as any other package on your Dappnode. In order to connect to your Dappnode with Tailscale, this package will need to be running.

### 3. Configure Tailscale to Connect to Dappnode Internal Networks

To ensure you can access your Dappnode's internal networks and services, you need to configure Tailscale to accept routes and set up custom DNS servers. There are two main steps to complete this configuration. Accepting advertised routes and adding custom nameservers (DNS).

#### a. Accept Advertised Routes from Your Dappnode

Dappnode advertises its internal networks through Tailscale, allowing you to access services like the Dappnode Admin UI and other packages. To ensure these routes are accepted:

1. Go to your [Tailscale Machines Dashboard](https://login.tailscale.com/admin/machines).
<p align="center">
    <img width="80%"src="/img/machinelist.png"/>
</p>
2. Find your Dappnode device in the list of machines
3. Open the "Edit Route Settings" modal and check the Subnet Route that appears.
<p align="center">
    <img width="50%"src="/img/subnetcheck.png"/>
</p>

#### b. Add Dappnode Custom Nameservers

1. Go to your [Tailscale DNS Admin Panel](https://login.tailscale.com/admin/dns).
2. Find the Nameservers section, click on **"Add nameserver"** and add a custom nameserver. 
<p align="center">
    <img width="50%"src="/img/customserver.png"/>
</p>

3. Fill the popup with:
   - **Nameserver IP:** `10.20.0.2`

4. Click and activate the "Override DNS servers" switch.

The end result should look like this, with two nameservers active:
<p align="center">
    <img width="50%"src="/img/tailscalednsconfignormal.png"/>
</p>


That's it! You've successfully configured Tailscale to connect to your Dappnode. All that's left is to install Tailscale on the device you want to access your Dappnode from. 

:::warning
If you were already connected to your Dappnode with Tailscale, you may need to disconnect and reconnect to apply the new DNS settings.
:::

<details>
<summary><b>Advanced DNS configuration</b></summary>

If you don't want to use the default Dappnode DNS server for everything, you can set up Dappnode's DNS server to only resolve Dappnode services. For this, you will need to add a custom DNS server for each dappnode service, restricted to a specific domain. 

The following screenshot shows a configuration that only uses Dappnode's DNS server for services under the `dappnode`, `dappnode.private` and `dyndns.dappnode` domains, while using the default Tailscale DNS server for everything else.

<p align="center">
    <img width="50%"src="/img/tailscalednsadvanced.png"/>
</p>

</details>

### 4. Connecting to Dappnode with Tailscale

<details>
<summary><b>macOS</b></summary>

1. Open tailscale app in your finder
2. Go to the top bar and click the tailscale logo (9 dots)
<p align="center">
    <img width="50%"src="/img/tailscale-2.png"/>
    </p>
3. Activate the switch to connect.

</details>

<details>
<summary> <b>Linux</b></summary>

1. Open up a terminal and run the following command:

```bash
sudo tailscale up --accept-routes
```

2. If it's your first time using Tailscale in this device, a browser window may open asking to connect this device to your Tailscale account. Click on **"Connect"**. That's it! You're now connected to your Dappnode.

3. To stop Tailscale in any moment, run the following command:

```bash
sudo tailscale down
```

:::note  
Having trouble using Tailscale on Linux? Check out the [Tailscale Linux documentation](https://tailscale.com/kb/1031/install-linux) for more information.
:::

</details>

<details>
<summary><b>Windows</b></summary>

1. Once installed, Tailscale's icon will appear in your system tray. Click on it.
2. If it's your first time using Tailscale in this device, a browser window may open asking to connect this device to your Tailscale account. Click on **"Connect"**. That's it! You're now connected to your Dappnode.

<p align="center">
    <img width="50%"src="/img/tailscalewindows.png"/>
</p>

3. To disconnect tailscale, right click on the icon on the system tray and log out or exit the application.

:::note  
Having trouble using Tailscale on Windows? Check out the [Tailscale Windows documentation](https://tailscale.com/kb/1022/install-windows) for more information.
:::

</details>

<details>
<summary><b>iOS</b></summary>

1. Download Tailscale from the [App Store](https://apps.apple.com/us/app/tailscale/id1470499037).
2. Open your Tailscale app and Log in
3. Connect to your dappnode by clicking on the "Connect" button.

:::note  
Having trouble installing Tailscale on iOS? Check out the [Tailscale iOS documentation](https://tailscale.com/kb/1020/install-ios) for more information.
:::
</details>

<details>
<summary><b>Android</b></summary>

1. Download Tailscale from the [Google Play Store](https://play.google.com/store/apps/details?id=com.tailscale.ipn).
2. Open your Tailscale app and Log in
3. Connect to your dappnode by clicking on the "Connect" button.

:::note  
Having trouble installing Tailscale on Android? Check out the [Tailscale Android documentation](https://tailscale.com/kb/1079/install-android) for more information.
:::
</details>

<br/>

### 5. Do you have two Dappnodes?

It won't work automatically and you won't be able to choose which one connects.

You have to go to the machines that you don't want to access and disable subnet routes. Your tailscale will direct you to the one that does have the subnets activated.

<p align="center">
    <img width="50%"src="/img/connect-two-dappnodes.png"/>
</p>

If you encounter any issues or need further assistance, refer to Dappnode's [Discord](https://discord.gg/dappnode), the [Dappnode Community Forums](https://forum.dappnode.io/), or [Tailscale Support](https://tailscale.com/support/).
