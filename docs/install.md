# Install DAppNode

Think of DAppNode as an operating system. In fact, it is; our savvy team has taken Debian and have super-powered it to be your gateway to access the decentralized web.

While you can run DAppNode on a Virtual Private Server (VPS), we **highly encourage you to run DAppNode on your own physical server**. The intention of DAppNode is to create a strong network of decentralized servers. Running DAppNode on centralized virtual servers defeats the purpose. 😉That being said, we realize it may be easiest to get started and test the system on a VPS.

---

⚠️ **DAppNode is intended to be installed on a dedicated machine. Do not install DAppNode on your laptop**
⚠️ If you do so the installation will erase all its content. See details below

---

# Minimum requirements

You will need a dedicated machine to install it.

We recommend having at least 4GB RAM (ideally 8GB+) and an SSD hard drive with at least 256GB (add capacity as you like, keep in mind that only Ethereum mainnet is 180GB at press time).

In the client side you just need an OpenVPN client installed in the device with which you want to connect to your DAppNode. See info on recommended clients and installation [here](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide)

# How to install DAppNode on your machine

Okay, so you’re ready to join the real DAppers. Let us show you how to make that hardware sing the hardware decentralization song!

You can choose between two methods to install DAppNode:
* **Install DAppNode from an ISO** - When you want to perform a clean installation, installing the base operating system and DAppNode.
* **Installation using the installer script** - When you already have a machine with an operating system and you want just to install DAppNode on it.

## How to install DAppNode from an ISO

Download the image from [DAppNodeISO](https://iso.dappnode.io) or [build it from source](https://github.com/dappnode/DAppNode_Installer)

### Burn the ISO in a USB (~8 min)

Burn the ISO to an USB stick. To do so we recommend using [Etcher](https://www.balena.io/etcher/) for the OS with which you will prepare the USB to boot from your server and install DAppNode

Please note that Etcher is intended to generate the ISO image in a bootable USB from your desktop device, and then install it in a server. 

**_IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA IT WILL BE ERASED._** 

Also, DAppNode is intended to run 24/7 so if you install it in a laptop or desktop machine and you turn it off it will lose the sync

### Install a Debian distribution (~15 min)

Insert the USB into your Server and prepare to install a Debian distribution. You will have to make sure that your Server boots from the USB. If you succeed at booting up from your USB, you will be greeted with this screen or a similar one:

<p align="center">
  <img width="600" height="450" src="https://github.com/dappnode/DAppNodeDocs/blob/DAppNodeDocsOpenVPN/img/2019-05-07%2017.22.10.jpg">
  </a>
</p>

Follow the Debian installation steps; various screens will guide you through the process. You can follow this standard option for a default installation:

### Recommended setup

*Note* by following these instructions you will erase ALL your server's disk contents.

1. **Select a language** - Language: [English]
2. **Select your location** - Country, territory or area: [United States or your own]
3. **Configure the keyboard** - Keymap to use? [American English or your own] 
4. **Configure the network** - Hostname: [dappnode]
5. **Set up users and passwords** - Root password: [Leave blank (twice)]
6. **Set up users and passwords** - Username for your account: [dappnode]
7. **Set up users and passwords** Choose a password for the new user: [YOUR_PASSWORD]
8. **Set up users and passwords** - Re-enter password to verify: [YOUR_PASSWORD]
10. **Configure the clock** - Select your time zone: [Select your own]
11. **Partition disk** - Partitioning method: [Guided - use entire disk and set up LVM]
12. **Partition disk** - Select disk to partition: [SCSIX (0,0,0) (sda) - ...]
13. **Partition disk** - Selected for partitioning: [All files in one partition]
14. **Partition disk** - Write the changes to disks and configure LVM? [Yes]
15. **Partition disk** - Amount of volume group to use for guided partitioning: [Continue]
16. **Partition disk** - Write the changes to disks? [Yes]
17. **Install the GRUB boot loader on a hard disk** - Install the GRUB boot loader to the master boot record? [Yes]
18. **Install the GRUB boot loader on a hard disk** - [/dev/sda (or the disk selected above)]
19. **Your public IP** - [Unless you have a fixed IP leave it blank]
20. **Finish the installation** - Installation complete [continue]

Resume DAppNode's installation 

If the installation succeeded, your system will reboot, you will have to log in with the user and password provided in the installation, and it should finish with this screen:

<p align="center">
  <img width="800" height="450" src="https://github.com/dappnode/DAppNodeDocs/blob/DAppNodeDocsOpenVPN/img/installendscreen.jpg">
  </a>
</p>

Now you can connect to your DAppNode by downloading the .ovpn file that you will be able to download from the link / QR show at the end of the installation by double click in it to open it with a compatible OpenVPN client. Here you have the [recommended ones and connection instructions](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide)
 
⚠️ Note that for the ovpn to be correctly downloaded from the link given you will need to have the TCP port 8090 opened and that the default port to connect via OpenVPN is 1194 UDP. UPnP should have opened them for you if your router has UPnP enabled, if not you will have to open them manually ⚠️

## Installation via installer

### WARNING

This software is not meant to be run in a remote machine hosted by any remote provider. What DAppNode specifically wants to avoid is centralization of the machines that our digital lives rely on; nevertheless, we understand that before buying a dedicated machine to run your DAppNode you might want to test it and see how easy it is to use.

Remember **_Your hardware, your coins, your privacy, your freedom._**

**_We strongly recommend using 8GB+ of RAM and a 200GB+ SSD hard drive._**

### Install DAppNode prerequisites

* [docker](https://docs.docker.com/install/)
* [docker-compose](https://docs.docker.com/compose/install/)
* [xz](https://tukaani.org/xz/) (usually pre-installed by default on some OS)

To install the prerequisites running this command in the terminal of the machine you want to install the DAppNode.
(If you already have the dependencies installed or you want to install them by your own you can skip this step)

```
sudo wget -O - https://prerequisites.dappnode.io  | sudo bash
```

### Install DAppNode

```
sudo wget -O - https://installer.dappnode.io | sudo bash
```

If you have a static IP and want to set it up right from the connection, then run the command with the following variable including your static IP

```
sudo wget -O - https://installer.dappnode.io | sudo STATIC_IP="your static IP" bash

```

When the installation is done and is successful, you can connect to your DAppNode by downloading the .ovpn file that you will be able to download from the link / QR show at the end of the installation, just double click in it to open it with a compatible OpenVPN client. Here you have the [recommended ones and connection instructions](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide)

⚠️ Note that for the ovpn to be correctly downloaded from the link given you will need to have the TCP port 8090 opened and that the default port to connect via OpenVPN is 1194 UDP. UPnP should have opened them for you if your router has UPnP enabled, if not you will have to open them manually ⚠️

Take into account that the ethereum blockchain will take some time to synchronize and you will not be able to perform most of the actions before that.

### How to restore an installed DAppNode to the latest version:

If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes.

```
sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash
```

## Enter your DAppNode!
Navigate to [my.dappnode](http://my.dappnode) to access DAppNode's administrative page. Bare in mind that DAppNode's functionality will be limited until the Ethereum mainnet chain is synced.

### 2.3. Now you can do things like for example:

* Navigate to a decentralized web [decentral.eth](http://decentral.eth): 
    * Decentralized version of [Mycrypto](http://mycrypto.dappnode.eth)
    * Decentralized version of [ENS Manager](http://ens.dappnode.eth)
    * Decentralized version of [Wallet Gnosis](http://gmultisig.dappnode.eth)

* Go to IPFS by entering [http://ipfs.dappnode:5001/webui](http://ipfs.dappnode:5001/webui) into your browser.

The first time you access to it will ask you for your `Custom API address`, just fill the field with this address and you will be connected to your IPFS node, this is the input you have to enter in the field `Is your API in a port other than 5001?`

```
/dns4/ipfs.dappnode/tcp/5001/http
```

### **You can have a look to our user guide [https://docs.dappnode.io](https://docs.dappnode.io)**

***

Even if it's just a message to confirm that everything is running successfully, we need your feedback to provide the best decentralized server network infrastructure possible. Please message us with questions, suggestions, or just to confirm you got your DAppNode set up: 
* Message us in our [Riot channel](https://riot.im/app/#/room/#dappnode:matrix.org)
* Make a tweet mentioning [@dappnode](https://twitter.com/dappnode)!
