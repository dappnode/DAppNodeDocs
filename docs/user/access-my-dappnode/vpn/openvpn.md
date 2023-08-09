# OpenVPN Access to Dappnode

OpenVPN is a widely-accepted VPN protocol known for its reliability and high-security standards.Here's how you can set it up with Dappnode.

## Setting Up OpenVPN

### 1. Get VPN Credentials Link

There are two primary methods to obtain your VPN credentials, based on your access level to the Dappmanager:

#### Option 1: Via Dappmanager UI

If you have access to the Dappmanager:

- Navigate to **VPN > OpenVPN**.

   - **If you don't see any device added to the list:**
     1. Provide a name for your device.
     2. Click on 'Add New Device'.

   - **To retrieve the credentials:**
     1. Click on the 'Get Link' button.
     2. Copy the URL displayed. This URL contains the necessary credentials for OpenVPN access.

#### Option 2: Via Dappnode Terminal

If you can't access the Dappmanager, you'll need to get the credentials via the Dappnode terminal:

1. Access the Dappnode terminal, as explained [here](/docs/user/access-my-dappnode/terminal).

2. Execute the command: `dappnode_openvpn`.

3. A URL will be displayed on the terminal. Copy this URL. Like in the previous method, this URL contains your OpenVPN credentials.

:::tip
Ensure that you store the URL or credentials securely. It provides direct access to your Dappnode, so treat it with the same caution you'd treat a password.
:::

### 2. Download OpenVPN Credentials

With the URL you obtained in the previous step, you'll now download the OpenVPN credentials:

1. Open a web browser on any device.
2. Paste the URL you copied into the address bar and navigate to it.
3. You should be taken to a page where the OpenVPN credentials for your Dappnode can be downloaded. Click on the download button or link to download the `.ovpn` file, which contains your OpenVPN configuration and credentials.

:::note
The `.ovpn` file is essential for connecting to your Dappnode via OpenVPN. Keep it safe and do not share it recklessly. Anyone with this file can access your Dappnode.
:::
