# DAppNode Migration guide to v0.2.0

DAppNode is continuously evolving to enhance the performance, security, and privacy delivered to #nodlers. That is why we are releasing DAppNode v0.2.0, which includes a switch from L2TP to OpenVPN. This is a more convenient VPN scheme for DAppNode users.

We are committed to make the user experience as easy as possible. By following this guide you will be able to upgrade without any troubles despite the major change that breaks compatibility with the current VPN system.

#### **Important warning:**

:warning: **L2TP and OpenVPN can not run at the same time**, so once you update to OpenVPN, either with an installation script or using the Admin UI, your old credentials and VPN will not work anymore and you will not be able to access the Admin UI. But **worry not**! Below you will find how to get credentials for OpenVPN whether you have access to your physical device or not :warning:

## Quickguide

Refer to the sections below for more detailed information

1. Get an OpenVPN client for your machine (see [recommended clients and download links below](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#step-1-install-an-openvpn-client>)). **If you usually connect via WIFI and do not use the VPN you can skip this step.**
2. Execute the migration (either through the [ADMIN UI hitting the "Update" button](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#method-2-connected-through-vpn>) connected [via WIFI](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#method-1-via-wifi-hotspot-no-vpn-connection>) or VPN; or [via script](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#method-3-via-script-with-physical-access-or-via-ssh>) connecting via ssh or directly with a keyboard screen to your console)
3. Allow some minutes to complete the installation. Please note that :warning: **The update progress indicator will never show the end of the update. Since a new VPN package will be installed, the current VPN connection will be lost and the Admin UI will stop refreshing. Allow for a couple of minutes after this happens to make sure all packages are installed correctly and proceed to the next step** :warning:

4. Connect to your machine via a) ssh (if you do not have physical access to your DAppNode) b) WIFI Hotspot (if you have access to your physical machine) c) connecting a keyboard and a screen to your DAppNode and logging in.
5. After you connect via ssh or logging in to your server, you will immediately receive a link to your new OpenVPN credentials. Copy paste and access it to download the credentials file (.ovpn). If you are connected via WIFI you can get your new link to download the OpenVPN credentials from the devices tab.
6. Double click the credentials file you just obtained in the previous step.
7. Your OpenVPN client will import the file and you can already click in "connect".
8. Once connected you can type http://my.dappnode to access the UI. If you do not see the complete interface just refresh the screen -the old interface might be in cache!
9. Welcome to your DAppNode v0.2.0!

## Detailed explanation

### Step 1: Install an OpenVPN client

You can skip this step if you use the connection via the WIFI hotspot.

#### Open VPN client installation guides and the recommended OpenVPN clients for each OS

- [MacOS](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide#MacOS) guide - [Tunnelblick](https://tunnelblick.net/) client
- [iOS](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide#iOS) guide - [OpenVPN connect](https://itunes.apple.com/us/app/openvpn-connect/id590379981) client
- [Windows](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide#Windows) guide - [OpenVPN (community installer)](https://openvpn.net/community-downloads/) client
- [Android](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide#Android) guide - [OpenVPN for Android](https://play.google.com/store/apps/details?id=de.blinkt.openvpn) client
- [Linux](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide#Linux) guide - It's natively included in recent versions.

### Step 2: How to upgrade to DAppNode v0.2.0 (OpenVPN)

Now that you already have your OpenVPN client you are ready to update your DAppNode and receive your new OpenVPN credentials, in case you use them. If not you can go on connecting to your DAppNode via WIFI. You have three methods to upgrade and regain access to your DAppNode with OpenVPN if you use it:

There are three methods depending on your level of comfort or your setup:

1. [Without VPN](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#method-1-via-wifi-hotspot-no-vpn-connection>). The easiest way if you can connect to your DAppNode via the built-in WIFI hotspot.
2. [Through VPN](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#method-2-connected-through-vpn>). **The standard way if you connect through a client device**.
3. [Via Script](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#method-3-via-script-with-physical-access-or-via-ssh>). If you are comfortable with the terminal/command line, and have physical or ssh access to your server.

#### Method 1: via WIFI hotspot (No VPN Connection)

If you have a physical DAppNode and can connect your client device to the WIFI hotspot, you have it the easiest of all:

- Just hit the `update` button while connected to the Admin UI of the server **via WIFI and not VPN**.
- At the end of the update go to the `devices` tab and access the link to download and install your newly generated OpenVPN credentials to connect to your DAppNode when you do not have access to the WIFI hotspot.

#### Method 2: Connected through VPN

:warning: **L2TP and OpenVPN can not run at the same time**, so once you update to OpenVPN, either with an installation script or using the Admin UI, your old credentials and VPN will not work anymore and you will not be able to access the Admin UI. But **worry not**! Below you will find how to get credentials for OpenVPN whether you have access to your physical device or not :warning:

- You will find an `update` button in your Admin UI. After installing your OpenVPN client, go ahead, hit that `update` button!

<!-- prettier-ignore-start -->
!!! info
    The update progress indicator will never show the end of the update. Since a new VPN package will be installed, the current VPN connection will be lost and the Admin UI will stop refreshing. Allow for a few minutes after this happens to make sure all packages are installed correctly and proceed to the next step
<!-- prettier-ignore-end -->

- As noted above after a while after hitting update you will be disconnected from the old VPN. Please wait 5 minutes (aprox.) to make sure that all the new packages are deployed, and you can get the new credentials you need. You can get them in 3 ways, depending on whether you have physical access to your machine and can connect your client device to the WIFI hotspot or not:

  - **I can access my server device and connect my client to the WIFI hotspot**. In this case, connect to the WIFI hotspot and generate new credentials under the `devices` tab.
  - **I can physically access my server device but not connect to the WiFi hotspot**. Connecting a keyboard and a screen and logging in to your DAppNode will show you a new link and QR from where you can download your new OpenVPN credentials.
  - **I cannot physically access my DAppNode**. You need to access your machine via ssh and you will get your new credentials in the terminal screen. To connect via ssh just open your client device command line/terminal and type `ssh username@yourServerIP`.

- Once you are connected to the server through one of methods 2-3 above you will find a new URL from which you will be able to download your new credentials file. Access the provided link and download the ovpn file in your client machine. In case you can connect via WIFI, you can directly get the new credentials from the devices tab. When you enter the new credentials link you will see this screen.

![](https://i.imgur.com/Dhy9dd5.png)

In case you have problems accessing check that you have the ports of the router open: [I can’t access the credentials OTP web link to download the .ovpn file](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#i-cant-access-the-credentials-otp-web-link-to-download-the-ovpn-file>)

- Download the file, double click on it and you will be connected to your new OpenVPN profile (provided that you already have installed your OpenVPN client in step 1).

- Access again your [Admin UI](http://my.dappnode).

#### Method 3: Via script with physical access or via ssh

If you feel comfortable with the terminal/command line or can not connect to your DAppNode server through the WIFI hotspot, you can do the update and immediately get your new OpenVPN credentials following the next steps:

- Open your server terminal and run the following command `sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash`
  You can do this directly over your server connecting a keyboard and a screen or connecting through ssh.

- In both cases you will get a new link and QR to the web from where you have to download your new credentials

![](https://i.imgur.com/Dhy9dd5.png)

In case you have problems accessing check that you have the ports of the router open: [I can’t access the credentials OTP web link to download the .ovpn file](<https://github.com/dappnode/DAppNode/wiki/DAppNode-Migration-guide-to-v0.2.0-(OpenVPN)#i-cant-access-the-credentials-otp-web-link-to-download-the-ovpn-file>)

- Download the file, double click it and you will be connected to your newly added OpenVPN profile (provided that you already have installed your OpenVPN client in step 1).

- Access again your [Admin UI](http://my.dappnode).

If something goes wrong make sure you check the Troubleshooting section below!

## Troubleshooting

This section will be continuously updated as we detect more common issues:

#### After connecting via ssh or logging to my machine I get old L2TP credentials that can't be opened in my OpenVPN client.

The new VPN package has not finished the installation and it is not running yet, so you get old credentials again. Just wait a few minutes and connect again via SSH. Once the new VPN package is running you will get your brand new OpenVPN credentials. You can check that the migration has been correctly performed and that you are getting the new OpenVPN credentials by typing in the server terminal `docker ps --format "{{.Image}}"` and checking that the installed core packages have the mention 0.2.x

```
root@DAppNode:# docker ps --format "{{.Image}}"
wifi.dnp.dappnode.eth:0.2.0
ipfs.dnp.dappnode.eth:0.2.0
wamp.dnp.dappnode.eth:0.2.0
admin.dnp.dappnode.eth:00.2.0
dappmanager.dnp.dappnode.eth:0.2.0
bind.dnp.dappnode.eth:0.2.0
ethchain.dnp.dappnode.eth:0.2.0
vpn.dnp.dappnode.eth:0.2.0
ethforward.dnp.dappnode.eth:0.2.0
```

#### I can't access the credentials OTP web link to download the .ovpn file

For the credentials file to be correctly downloaded you need to have port 8092 TCP opened, please check that the following ports are opened in the router to which your server is connected

| Service       | TCP   | UDP   |
| ------------- | ----- | ----- |
| VPN (OpenVPN) | 8092  | 1194  |
| Ethereum Node | 30303 | 30303 |
| IPFS          | 4001  | 4002  |

#### I have a message in the console saying that admin credentials expired

Once a file with credentials is downloaded, and used for connecting once, the link expires after that first connection and you see that message. If for any reason you need to get new credentials, connect via ssh to the server and run the command

```
dappnode_get dappnode_admin
```

If you get a `command not found` message you can run

```
docker exec -ti DAppNodeCore-vpn.dnp.dappnode.eth vpncli get dappnode_admin
```

#### I can't import the file in Linux Open VPN client.

Make sure you have the network-manager-openvpn and network-manager-openvpn-gnome packages installed. See instructions for [Linux here](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide#Linux).

The complete user guide of DAppNode v0.2.0 can be found [here](https://docs.dappnode.io).
