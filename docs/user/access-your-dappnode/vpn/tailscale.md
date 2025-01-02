# Connect to Your Dappnode Using Tailscale

Tailscale is a secure, peer-to-peer VPN solution that simplifies connecting to your Dappnode without requiring complex port forwarding, solving issues such as UPnP not being recognized, routers behind CGNAT, or other port forwarding challenges. This guide walks you through setting up Tailscale to access your Dappnode.

:::tip
Using Tailscale is an excellent alternative if you're experiencing issues with UPnP, CGNAT, or port forwarding. It's easy to set up and ensures a seamless connection to your Dappnode.
:::

---

## Prerequisites

Before starting, ensure you have:

- Access to your [Dappnode's Admin UI](http://my.dappnode).
- A [Tailscale account](https://tailscale.com/).
- Tailscale installed on the device you want to access your Dappnode from. Download [here](https://tailscale.com/download).

## Setting Up Tailscale

### 1. Create an Auth Key

1. Log in to Tailscale and navigate to [Tailscale Admin Settings](https://login.tailscale.com/admin/settings/keys). Click on ***Generate auth key***.
<p align="center">
    <img width="80%"src="/img/authkey1.png"/>
</p>
2. Create a new auth key. Any name will work.
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

#### a. Accept Advertised Routes from Your Dappnode

1. Go to your [Tailscale Machines Dashboard](https://login.tailscale.com/admin/machines).
<p align="center">
    <img width="80%"src="/img/machinelist.png"/>
</p>
2. Find your Dappnode device in the list of machines
3. Open the "Edit Route Settings" modal and check the Subnet Route that appears.
<p align="center">
    <img width="50%"src="/img/subnetcheck.png"/>
</p>

#### b. Add a Custom Nameserver

1. Go to your [Tailscale DNS Admin Panel](https://login.tailscale.com/admin/dns).
2. Find the Nameservers section, click Add nameserver button and add a custom nameserver.
<p align="center">
    <img width="50%"src="/img/customserver.png"/>
</p>

3. Fill the popup with:
   - **Nameserver IP:** `172.33.1.2`
   - Activate "Restrict to domain" switch.
   - Set the domain as `dappnode`.


That's it! You've successfully configured Tailscale to connect to your Dappnode. All that's left is to install Tailscale on the device you want to access your Dappnode from.

### 4. Connecting to Dappnode with Tailscale


<details>
<summary><b>macOS</b></summary>

1. Open tailscale app in your finder
2. Go to the top bar and click the tailscale logo (9 dots)
<p align="center">
    <img width="50%"src="/img/tailscale-2.png"/>
3. Activate the switch to connect.

</details>

<details>
<summary> <b>Linux</b></summary>

Open up a terminal and run the following command:
```bash
sudo tailscale up --accept-routes
```
To stop the connection, run:
```bash
sudo tailscale down
```


</details>

<details>
<summary><b>Windows</b></summary>

1. Comming Soon!

</details>

<details>
<summary><b>Android</b></summary>

1. Comming Soon!

</details>

<br/>


If you encounter any issues or need further assistance, refer to Dappnode's [Discord](https://discord.gg/dappnode), the [Dappnode Community Forums](https://forum.dappnode.io/), or [Tailscale Support](https://tailscale.com/support/).
