> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# OpenVPN Access to Dappnode

OpenVPN is a widely-accepted VPN protocol known for its reliability and high-security standards. Here's how you can set it up with Dappnode.

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

:::tip Separate Credentials for Each Device
For the best experience and to enable simultaneous access, it's recommended to create a separate device entry in the Dappnode VPN list for each device you intend to use for accessing your Dappnode. 

While it's technically possible to use the same credentials on multiple devices, doing so can lead to connectivity issues when trying to access the Dappnode from multiple devices at the same time.

By setting up distinct credentials for each device, you ensure a smooth, uninterrupted connection for all your devices.
:::


#### _Option 2_: Via Dappnode Terminal

If you can't access the Dappmanager, you'll need to get the credentials via the Dappnode terminal:

1. Access the Dappnode terminal, as explained [here](/docs/user/access-your-dappnode/terminal).

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

## 3. OpenVPN Installation

Once you've obtained your OpenVPN credentials, the next step is to install an OpenVPN client. You can download the one that's compatible with the device you are going to use to connect to the Dappnode machine from the [OpenVPN website](https://openvpn.net/client/).


## 4. Connecting to Dappnode via OpenVPN

Once you have installed the OpenVPN client on your device, follow the steps below based on your operating system to connect to Dappnode:

<details>
<summary><b>Android</b></summary>

1. Launch the OpenVPN for Android app.
2. Tap on "Import file".
3. Upload the `.ovpn` file you downloaded earlier.
4. Click on "Connect".
5. Allow the app to create a VPN connection.

<p align="center">
  <img src="/img/openvpn_android.jpg" alt="Import file in Android" style={{width: 20 + "em"}}/>
</p>

</details>

<details>
<summary><b>iPhone/iPad</b></summary>

1. Go to the URL you obtained in the previous step.
2. Download the `.ovpn` file.
3. Click on "Open in OpenVPN".
4. Click on "Add".
5. Click on "Connect"
6. Allow the app to create a VPN connection.

<p align="center">
  <img src="/img/openvpn_iphone_import.jpg" alt="Import file in iPhone" style={{width: 10 + "em"}}/>
</p>

</details>

<details>
<summary><b>macOS</b></summary>

1. Launch Tunnelblick app for macOS.
2. Click on "VPN Details" in the top bar menu.
3. Drag and drop the `.ovpn` file you downloaded earlier in the left side bar.
4. Click on Connect.

<p align="center">
  <img src="/img/openvpn_mac.png" alt="Import file in macOS" style={{width: 20 + "em"}}/>
</p>

</details>

<details>
<summary><b>Windows</b></summary>

1. Launch the OpenVPN for Windows app.
2. Click on "Import file".
3. Upload the `.ovpn` file you downloaded earlier.
4. Allow the app to create a VPN connection.

<p align="center">
  <img src="/img/openvpn_windows.jpg" alt="Import file in Windows" style={{width: 20 + "em"}}/>
</p>

</details>

<details>
<summary> <b>Recent Ubuntu</b></summary>

1. Open Settings>Network.
2. Click on the "+" button to add a new VPN connection.
3. Select "Import from file".
4. Upload the `.ovpn` file you downloaded earlier.
5. Click on "Add".
6. Toggle the switch button to connect.

<p align="center">
  <img src="/img/openvpn_ubuntu_network.png" alt="Import file in Ubuntu" style={{width: 40 + "em"}}/>
</p>

<p align="center">
  <img src="/img/openvpn_ubuntu_import.png" alt="Import file in Ubuntu" style={{width: 40 + "em"}}/>
</p>

</details>

<details>
<summary> <b>Other Linux</b></summary>

1. Open the terminal.
2. Navigate to the directory where you have stored your `.ovpn` file.
3. Execute the command: `sudo openvpn Dappnode_VPN.ovpn`.

</details>

<br/>

:::tip Testing Your Connection
Once connected, you can directly type [http://my.dappnode](http://my.dappnode) in your browser to access the Dappmanager.
:::
