# Install DAppNode

Think of DAppNode as an operating system. In fact, it is; our savvy team has taken an Ubuntu distribution and super-powered it to be your gateway to access the decentralized web.

While you can run DAppNode on a Virtual Private Server (VPS), we **highly encourage you to run DAppNode on your own physical server**. The intention of DAppNode is to create a strong network of decentralized servers. Running DAppNode on centralized virtual servers defeats the purpose. 😉That being said, we realize it may be easiest to get started and test the system on a VPS.

---

⚠️ **DAppNode is intended to use in a server. Do not install DAppNode on your laptop**

⚠️ If you do so the installation will erase all its content. See details below

---

## Minimum requirements

You will need a dedicated machine to install it.

Ethereum is big! To cope with that, you’ll need to have a powerful enough machine to keep up with Ethereum's rapidly splitting blocks.

That is why we recommend having at least 8gbs RAM and an SSD hard drive with at least 160 GBs (add capacity as you like, keep in mind that Ethereum is 130GBs at press time).

In the client side you just need an OpenVPN client installed in the device with which you want to connect to your DAppNode, see info on recommended clients and installation instructions below.

## How to install DAppNode on your machine

Okay, so you’re ready to join the real DAppers. Let us show you how to make that hardware sing the hardware decentralization song!

### How to install DAppNode from an ISO

Download the image from [DAppNode-ubuntu-18.04-server-amd64_v0.1.18.iso](https://github.com/dappnode/DAppNode/releases/download/v0.1.18/DAppNode-ubuntu-18.04-server-amd64_v0.1.18.iso) or [build it from source](https://github.com/dappnode/DAppNode_Installer)

### Burn the ISO in a USB (~8 min)

Burn the ISO to an USB stick, please follow the official Ubuntu instructions for [MacOS](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos#0), [Windows](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows#0) or [Ubuntu](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-ubuntu#0>).

Please note that these instructions are intended to generate the ISO image in a bootable USB from a Mac, Windows or Linux device, and then install it in a server. **_IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA IT WILL BE ERASED._** DAppNode is intended to run 24/7 so if you install it in a laptop or desktop machine and you turn it off it will lose the sync

### Install an Ubuntu distribution (~15 min)

Insert the USB into your Server and prepare to install an Ubuntu distribution. You will have to make sure that your Server boots from the USB. If you succeed at booting up from your USB, you will be greeted with this screen or a similar one:

<p align="center">
  <img width="600" height="450" src="https://github.com/Shelpin/DAppNode/raw/master/doc/dappnode-installation-welcome-screen.png">
  </a>
</p>

Follow the Ubuntu installation steps; various screens will guide you through the process. You can follow this standard option for a default installation:

### Recommended setup

Note by following these instructions you will erase your Server's disk contents.

1. **_Select a language_** - Language: [English]
2. **_Select your location_** - Country, territory or area: [United States]
3. **_Configure the keyboard_** - Detect keyboard layout? [Yes] Follow the instructions to detect your keyboard
4. **_Configure the network_** - Hostname: [DAppNode]
5. **_Set up users and passwords_** - Full name for the new user: [DAppNode]
6. **_Set up users and passwords_** - Username for your account: [dappnode]
7. **_Set up users and passwords_** Choose a password for the new user: [YOUR_PASSWORD]
8. **_Set up users and passwords_** - Re-enter password to verify: [YOUR_PASSWORD]
9. **_Set up users and passwords_** - Encrypt your home directory? [No]
10. **_Configure the clock_** - Is this time zone correct? [Yes]
11. **_Partition disk_** - Partitioning method: [Guided - use entire disk and set up LVM]
12. **_Partition disk_** - Select disk to partition: [SCSI33 (0,0,0) (sda) - ...]
13. **_Partition disk_** - Write the changes to disks and configure LVM? [Yes]
14. **_Partition disk_** - Amount of volume group to use for guided partitioning: [Continue]
15. **_Partition disk_** - Write the changes to disks? [Yes]
16. **_Configure the package manager_** - HTTP proxy information (black for none): [Continue]
17. **_Configuring tasksel_** - How do you want to manage upgrades on this system? [Install security updates automatically]
18. **_Software selection_** - Choose software to install [OpenSSH server] Use the arrows to navigate to the option, and the spacebar to select it.
19. **_Install the GRUB boot loader on a hard disk_** - Install the GRUB boot loader to the master boot record? [Yes]
20. **_Finish the installation_** - Installation complete [continue]

If the installation succeeded, your system will reboot, you will have to log in with the user and password provided in the installation, and it should finish with this screen:

<p align="center">
  <img width="800" height="450" src="https://github.com/Shelpin/DAppNode/raw/master/doc/dappnode-installation-ending-screen.png?raw=true">
  </a>
</p>

## Installation via script

### WARNING

This software is not meant to be run in a remote machine hosted by any remote provider. What DAppNode specifically wants to avoid is centralization of the machines that our digital lives rely on; nevertheless, we understand that before buying a dedicated machine to run your DAppNode you might want to test it and see how easy it is to use….

And… only for that reason will we look aside when someone installs a DAppNode in a virtual provider. We want it to be clear that kind of use is not the recommended use, but for testing purposes only.

Remember **_Your hardware, your coins, your privacy, your freedom._**

### Script installation guide

For this example, we'll be installing DAppNode on a Digital Ocean droplet, but the process should work for any other Ubuntu Server 18.04.

**_We strongly recommend using 8GB+ of RAM and a <= 200 Gbs SSD hard drive._**

### Install DAppNode and its dependencies

Install the prerequisites (docker and docker-compose) running this command in the terminal of the machine you want to install the DAppNode server, if using a Virtual Service Provider, you have first to connect you via SSH to that machine.

```
sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.18/dappnode_install_pre.sh | sudo bash
```

### Install DAppNode

```
sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.18/dappnode_install.sh | sudo bash
```

If you have a static IP and want to set it up right from the connection, then run the command with the following variable including your static IP

```
sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.18/dappnode_install.sh | sudo STATIC_IP="your static IP" bash
```

When the installation is done and is successful, you will be given credentials to connect to your DAppNode.

Take into account that the chain will take some time to synchronize and you will not be able to perform most of the actions before that.

### How to restore an installed DAppNode to the latest version:

If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes.

```
sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.18/dappnode_install.sh | sudo UPDATE=true bash
```

# Install your OpenVPN Client

For connecting to DAppNode 0.2.0 OpenVPN, you will need to have a client that supports the OpenVPN protocol in every device with which you´d like to connect to your DAppNode.

These are the recommended Open VPN clients for each OS:

* Mac os: [Tunnelblick](https://tunnelblick.net/) 
* Ios: [Open VPN connect](https://itunes.apple.com/us/app/openvpn-connect/id590379981)
* Windows: [Open VPN (community installer)](https://openvpn.net/community-downloads/)
* Android: [Open VPN for Android](https://play.google.com/store/apps/details?id=de.blinkt.openvpn)
* Linux: Included in Ubuntu recent versions. 

Depending on your OS these are the instructions for installing our recommended OpenVPN clients. 


## Linux

### Ubuntu / NetworkManager

OpenVPN comes installed in Ubuntu recent versions, but to be sure, follow these steps. Run the terminal application:

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu1.png">
</p>


Install OpenVPN and plugin for NetworkManager:

    sudo apt-get install network-manager-openvpn-gnome openvpn

Once the installation is complete, restart Network Manager by typing:

    sudo service network-manager restart

Go to "Settings -> Network" and click to the "+" button to add a VPN connection:
<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu2.png">
</p>

Select "Import from file..."

 <p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu4.png">
</p>

Browse the filesystem to select the downloaded file:
<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu3.png">
</p>

Add the profile with the default settings:

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu5.png">
</p>

Now you can connect selecting the profile from the network tray icon:
<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu6.png">
</p>


## MacOS

The recommended OpenVPN client is Tunnelblick and you can download it [here](https://tunnelblick.net)

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/Mac1.png">
</p>

Once you have followed the steps to install the tunnelblick client in your MAC, download the file from the URL given in the console to download the OVPN file with your credentials. 

If you have already downloaded the config file before installing Tunnelblick, you can select the "I have a config file" option and browse to its location. If not, once you have downloaded the OVPN file, just double click on it and Tunnelblick will add the config for you.

Select your preferred option about the users that will have access to the config. 

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/MAC4.png">
</p>

The system will probably ask for your admin password to install the VPN configuration, and it is done!

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/MAC5.png">
</p>


Just open Tunnelblick in your MAC and click on Connect DAppNode.

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/MAC6.png">
</p>


Once connected you can already access http://my.admin.dnp.dappnode.eth with your new OpenVPN connection!

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/MAC8.png">
</p>


## iOS

The recommended OpenVPN client is OpenVPN Connect and you can download it [here](https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8)

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/ios1.PNG">
</p>

Once you have installed it you can just scan the QR code and hit download:

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/ios4.jpg">
</p> 

and click in "Open in OpenVPN"

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/ios5.PNG">
</p> 

Tap the add button and name your connection

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/ios7.PNG">
</p> 

The phone will ask you permission for OpenVPN to add a configuration profile , please do.

And it is done, you can just connect to your new OpenVPN now

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/ios9.PNG">
</p> 
  
After a few seconds, you will see in the OopoenVPN interface that you are connected. You can either connect to your server through the OpoenVPN app or directly from the phone´s "VPN" menu in "Settings"

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/blob/OpenVPN-client-installation-instructions/doc/openvpn/ios10.PNG">
</p> 

Once connected you can access http://my.admin.dnp.dappnode.eth with your new OpenVPN connection!

## Android

Install **OpenVPN for Android** from [Google Play](https://play.google.com/store/apps/details?id=de.blinkt.openvpn) or [F-Droid](https://f-droid.org/en/packages/de.blinkt.openvpn/):

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android1.jpg">
</p>

Download the OpenVPN profile from the URL or scanned QR code:

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android2.jpg">
</p>

Open the downloaded file and import it to the application, then save it with your preferred name:

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android3.jpg">
</p>

Select the saved profile to connect to it:

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android4.jpg">
</p>

Accept the connection request:

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android5.jpg">
</p>

You should see a connection log similar to this:

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android6.jpg">
</p>

Once connected, you should be able to browse the DAppNode Admin page:

[http://my.admin.dnp.dappnode.eth](http://my.admin.dnp.dappnode.eth)

<p align="center">
    <img width="300" src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android7.jpg">
</p>



## Windows

Download the recommended client for [OpenVPN WINDOWS INSTALLER (NSIS)](https://openvpn.net/community-downloads/) and follow the steps to install it:

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows1.png">
</p>

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows2.png">
</p>

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows3.png">
</p>

Download the file from the provided link by the DAppNode administrator.

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows4.png">
</p>

Run the OpenVPN GUI program:

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows5.png">
</p>

Select "Import file..." from the tray bar icon (right click):

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows6.png">
</p>

Select the downloaded file:

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows7.png">
</p>

Finally, select "Connect" from the tray bar icon menu:

<p align="center">
    <img src="https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows8.png">
</p>

