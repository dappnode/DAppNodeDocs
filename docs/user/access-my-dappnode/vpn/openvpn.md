# OpenVPN Access to Dappnode

OpenVPN is a widely-accepted VPN protocol known for its reliability and high-security standards.Here's how you can set it up with Dappnode.

## Setting Up OpenVPN

### 1. Get VPN Credentials URL

There are two primary methods to obtain your VPN credentials, based on your access level to the Dappmanager:

#### _Option 1_: Via Dappmanager UI

If you have access to the Dappmanager:

- Navigate to **VPN > OpenVPN**.

   - **If you don't see any device added to the list:**
     1. Provide a name for your device.
     2. Click on 'Add New Device'.

   - **To retrieve the credentials:**
     1. Click on the 'Get Link' button.
     2. Copy the URL displayed.

#### _Option 2_: Via Dappnode Terminal

If you can't access the Dappmanager, you'll need to get the credentials via the Dappnode terminal:

1. Access the Dappnode terminal, as explained [here](/docs/user/access-my-dappnode/terminal).

2. Execute the command: `dappnode_openvpn`.

3. A URL will be displayed on the terminal. Copy it.

### 2. Download OpenVPN Credentials

With the URL you obtained in the previous step, you'll now download the OpenVPN credentials:

1. Open a web browser on any device.
2. Paste the URL you copied into the address bar and navigate to it.
3. You should be taken to a page where the OpenVPN credentials for your Dappnode can be downloaded. Click on the download button or link to download the `.ovpn` file, which contains your OpenVPN configuration and credentials.

:::caution
Ensure that you **store credentials securely**. The `.ovpn` file provides direct access to your Dappnode, so treat it with the same caution you'd treat a password.
:::