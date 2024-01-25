# WireGuard Access to Dappnode

WireGuard is a modern, high-performance VPN protocol that offers a simple and streamlined approach for securely accessing your Dappnode. This guide will walk you through setting up WireGuard with your Dappnode.

You will need:

1. Your dappnode
2. A Wireguard client installed on your usual device (laptop, mobile, etc.)

## Setting Up WireGuard

### 1. Get VPN Credentials

There are two primary methods to obtain your VPN credentials:

#### Option 1: Via Dappmanager UI

![VPN_credentials](/img/vpn-1.png)

If you have access to the Dappmanager:

- Navigate to **VPN > WireGuard**.

  - **If you don't see any device added to the list:**

    1. Provide a name for your device.
    2. Click on 'Add New Device'.

  - **To retrieve the credentials:**

    1. Click on the 'Get link' button on the credentials column.
    2. You will be shown 3 different ways of retrieving the credentials:
       - _Download config:_ it will download a .txt file with the credentials in plaintext
       - _Copy config:_ it will copy the credentials in your clipboard so you can paste them in your wireguard client
       - _Show config QR code:_ it will generate a QR that you can scan with a wireguard mobile client to add the config directly
    3. Please, see step 3. Setting up Wireguard client to see how to use this config once you have a client in your device (desktop/laptop/phone)

  - **For Local Access Credentials:**
    1. Click on 'Show Local Credentials'.
    2. Copy the local credentials displayed.

#### Option 2: Via Dappnode Terminal

If you can't access the Dappmanager, you'll need to get the credentials via the Dappnode terminal:

1. Access the Dappnode terminal, as explained [here](/docs/user/access-your-dappnode/terminal).

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

### 2. Installing WireGuard Client

After obtaining your VPN credentials, the next step is to install the WireGuard client. You can download the one that's compatible with the device you are going to use to connect to the Dappnode machine from the [WireGuard website](https://www.wireguard.com/install/).

### 3. Setting Up WireGuard Client

After installing the client:

1. Launch the WireGuard application.
2. Click on 'Add Tunnel' or 'Import Tunnel from File' based on your platform.
3. Import the credentials you obtained in the earlier steps.
4. Once imported, connect to your Dappnode by activating the tunnel.

:::tip Connection Status
You can verify your connection status within the WireGuard application. It will display if the tunnel is active, as well as data transfer rates.
:::

### 4. Connecting to Dappnode via WireGuard

<details>
<summary><b>Android</b></summary>

1. Launch the OpenVPN for Android app.
2. Tap on "+" icon.
3. Select the option that fits you best to import the credentials: Scan QR code, Import file or Paste from clipboard to an empty profile.

<p align="center">
  <img src="/img/wireguard_android.jpg" alt="Import file in Android" style={{width: 20 + "em"}}/>
</p>

</details>

<details>
<summary><b>iPhone/iPad</b></summary>

1. Launch the OpenVPN for Android app.
2. Tap on "Add a tunnel".
3. Select the option that fits you best to import the credentials: Scan QR code, Import file or Paste from clipboard to an empty profile.

<p align="center">
  <img src="/img/wireguard_ios_tunnel.jpeg" alt="Import file in iPhone" style={{width: 20 + "em"}}/>
</p>

</details>

<details>
<summary> <b>Linux</b></summary>

1. Create a file for your credentials: `sudo nano /etc/wireguard/wg0.conf`
2. Paste your credentials there and save the file (Ctrl+Shift+V, Ctrl+O, Ctrl+X).
3. Activate the tunnel: `sudo wg-quick up wg0`

:::note Tunnel Deactivation
To deactivate the tunnel, execute the command: `sudo wg-quick down wg0`.
:::

</details>

<details>
<summary><b>macOS</b></summary>

1. In the list of Applications, search for WireGuard and launch it.
2. Click on "Manage Tunnels".
3. Click on the "+" button.
4. Select "Add empty tunnel".
5. Paste the credentials you obtained earlier.
6. Give a name to this profile and click on "Save".
7. Click on "Activate" to connect to your Dappnode.

<p align="center">
  <img src="/img/wireguard_macos_tunnel.png" alt="Manage tunnels in macOS" style={{width: 40 + "em"}}/>
</p>

<p align="center">
  <img src="/img/wireguard_macos_credentials.png" alt="Credentials in macOS" style={{width: 40 + "em"}}/>
</p>

</details>

<details>
<summary><b>Windows</b></summary>

1. Launch the OpenVPN for Windows app.
2. Click on "Add Tunnel".
3. Paste the credentials you obtained earlier and save.
4. Activate the tunnel.

<p align="center">
  <img src="/img/wireguard_windows.png" alt="Import file in Windows" style={{width: 40 + "em"}}/>
</p>

<p align="center">
  <img src="/img/wireguard_windows_tunnel.png" alt="Import file in Windows" style={{width: 40 + "em"}}/>
</p>

<p align="center">
  <img src="/img/wireguard_windows_activate.png" alt="Import file in Windows" style={{width: 40 + "em"}}/>
</p>

</details>

<br/>

:::tip Testing Your Connection
Once connected, you can directly type [http://my.dappnode](http://my.dappnode) in your browser to access the Dappmanager.
:::
