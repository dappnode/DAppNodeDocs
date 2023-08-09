# WireGuard Access to Dappnode

WireGuard is a modern, high-performance VPN protocol that offers a simple and streamlined approach for securely accessing your Dappnode. This guide will walk you through setting up WireGuard with your Dappnode.

## Setting Up WireGuard

### 1. Get VPN Credentials

There are two primary methods to obtain your VPN credentials:

#### Option 1: Via Dappmanager UI

If you have access to the Dappmanager:

- Navigate to **VPN > WireGuard**.

   - **If you don't see any device added to the list:**
     1. Provide a name for your device.
     2. Click on 'Add New Device'.

   - **To retrieve the credentials:**
     1. Click on the 'Get Credentials' button.
     2. Copy the credentials displayed directly from the UI.

  - **For Local Access Credentials:**
    1. Click on 'Show Local Credentials'.
    2. Copy the local credentials displayed.

#### Option 2: Via Dappnode Terminal

If you can't access the Dappmanager, you'll need to get the credentials via the Dappnode terminal:

1. Access the Dappnode terminal, as explained [here](/docs/user/access-my-dappnode/terminal).

2. Execute the command: `dappnode_wireguard`.

3. The credentials will be displayed directly on the terminal. Copy these credentials.

  - **For Local Access Credentials:**
    1. Execute the command: `dappnode_wireguard --local`.
    2. Copy the local credentials displayed.

:::info Local Credentials Explained
Local credentials allow you to establish a connection to your Dappnode when you are on the same local network. They are especially useful when remote credentials might not work due to certain network restrictions or configurations.

While remote credentials enable access from outside your local network, local credentials ensure a reliable connection within your home or office network. It's recommended to use local credentials when you are in proximity to your Dappnode to guarantee a stable and swift connection.

Always remember: Local credentials **only work inside your own network**. If you're trying to access your Dappnode from a different location or network, you'll need to use the remote credentials.
:::


:::tip
Ensure you store these credentials securely. They provide direct access to your Dappnode. Treat them with the same level of caution as you would a password.
:::

### 2. Input WireGuard Credentials

Once you have the credentials:

1. Install a WireGuard client on your device. The official WireGuard website provides [clients for various platforms](https://www.wireguard.com/install/).

2. Launch the WireGuard client and add a new VPN configuration.
   
3. Paste the credentials you copied into the appropriate fields or section in the client interface.

4. Connect to your Dappnode using the WireGuard client. If everything is set up correctly, you should establish a secure connection.

:::note
Always ensure your WireGuard client is updated to the latest version to maintain a secure and stable connection to your Dappnode.
:::
