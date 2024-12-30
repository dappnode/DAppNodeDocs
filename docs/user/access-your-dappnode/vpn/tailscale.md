# Connect to Your Dappnode Using Tailscale

Tailscale is a secure, peer-to-peer VPN solution that simplifies connecting to your Dappnode without requiring complex port forwarding, solving issues such as UPnP not being recognized, routers behind CGNAT, or other port forwarding challenges. This guide walks you through setting up Tailscale to access your Dappnode.

:::tip
Using Tailscale is an excellent alternative if you're experiencing issues with UPnP, CGNAT, or port forwarding. It's easy to set up and ensures a seamless connection to your Dappnode.
:::

---

## Prerequisites

Before starting, ensure you have:

- A [Tailscale account](https://tailscale.com/).
- Tailscale installed on your device. Download [here](https://tailscale.com/download)
- Having access to your [Dappnode's Admin UI](https://my.dappnode) 

## Step 1: Create an Auth Key

1. Visit [Tailscale Admin Settings](https://login.tailscale.com/admin/settings/keys).
![Authkey1](/img/authkey1.png)
2. Create a new auth key. Any name will work.
![Authkey2](/img/authkey2.png)
3. Save the key for the next step.
![Authkey3](/img/authkey3.png)

## Step 2: Install Tailscale on Your Dappnode

1. Access your [Dappnode's Admin UI](https://my.dappnode) 
2. Navigate to **Dappstore** and search for the `Tailscale` package.
3. Click **Install** 
4. Go to the Tailscale package in **Packages** tab and enter the auth key you created during installation.
![Authkey4](/img/authkey4.png)

Once installed, Tailscale will run as a service on your Dappnode.

## Step 3: Configure Tailscale to Connect to Dappnode Internal Networks

### a. Accept Advertised Routes from Your Dappnode

1. Go to your [Tailscale Machines Dashboard](https://login.tailscale.com/admin/machines).
![Machinelist](/img/machinelist.png)
2. Find your Dappnode device in the list of machines
3. Open the "Edit Route Settings" modal and check the Subnet Route that appears.
![Subnetcheck](/img/subnetcheck.png)

### b. Add a Custom Nameserver

1. Go to your [Tailscale DNS Admin Panel](https://login.tailscale.com/admin/dns).
2. Find the Nameservers section, click Add nameserver button and add a custom nameserver.
![Customserver](/img/customserver.png)
3. Fill the popup with:
   - **Nameserver IP:** `172.33.1.2`
   - Activate "Restrict to domain" switch.
   - Set the domain as `dappnode`.

## Step 4: Access Your Dappnode

### a. Connect to Tailscale

Ensure that your laptop, computer, or phone is connected to Tailscale.

### b. Access Dappnode Services

Visit [http://my.dappnode](http://my.dappnode) in your browser.

:::warning
Have 2 or more Dappnodes? It won't work out of the box. You won't be able to choose which one it connects to.

You need to go to the machines you don't want to access and disable subnet routes. Your Tailscale will then direct you to the Dappnode that has subnets activated.
:::

---

If you encounter any issues or need further assistance, refer to the [Dappnode Community Forums](https://forum.dappnode.io/) or the [Tailscale Support](https://tailscale.com/support/).
