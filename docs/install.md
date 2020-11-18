# Install DAppNode

DAppNode is an Operating System. Our team has taken Debian and super-powered it to be your gateway to access the decentralized web.

While you can run DAppNode on a Virtual Private Server (VPS), we **highly encourage you to run DAppNode on your own physical server**. The intention of DAppNode is to create a strong network of decentralized servers. Running DAppNode on (politically) centralized virtual servers defeats the purpose 😉. That being said, we realize it may be easiest to get started and test the system on a VPS.

<!-- prettier-ignore-start -->
!!! warning
    Do not install DAppNode on your laptop. The ISO installation will erase all its content. DAppNode is intended to be installed on a dedicated machine.
<!-- prettier-ignore-end -->

## Minimum requirements

You will need a dedicated machine to install it.

We recommend having at least 4GB RAM (ideally 8GB+) and an SSD hard drive with at least 256GB (add capacity as you like, keep in mind that only Ethereum mainnet is 180GB at press time).

In the client side you just need an OpenVPN client installed in the device with which you want to connect to your DAppNode. See info on recommended clients and installation [here](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide)

## How to install DAppNode on your machine

Okay, so you’re ready to be a Nodler. Let us show you how to make that hardware sing the hardware decentralization song!

You can choose between two methods to install DAppNode:

- **Install DAppNode from an ISO** - When you want to perform a clean installation, installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode

- **Installation using the installer script** - When you already have a machine with Debian installed and you just want to install DAppNode on it.

## How to install DAppNode from an ISO

Download the image from [DAppNodeISO](https://iso.dappnode.io) or [build it from source](https://github.com/dappnode/DAppNode_Installer)

### Burn the ISO in a USB (~8 min)

Burn the ISO to an USB stick. To do so we recommend using [Etcher](https://www.balena.io/etcher/) for the OS with which you will prepare the USB to boot from your server and install DAppNode

<!-- prettier-ignore-start -->
!!! info
    Please note that Etcher is intended to generate the ISO image in a bootable USB from your desktop device, and then install it in a server
<!-- prettier-ignore-end -->

**_IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA IT WILL BE ERASED._**

Also, DAppNode is intended to run 24/7 so if you install it in a laptop or desktop machine and you turn it off it will lose the sync

### Install the DAppNode ISO (~15 min)

Insert the USB into your Server and prepare to install a Debian distribution. You will have to make sure that your Server boots from the USB. If you succeed at booting up from your USB, you will be greeted with this screen or a similar one:

<p align="center">
  <img width="600" height="450" src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/VirtualBox_install.png?raw=true">
</p>

Follow the installation steps. Various screens will guide you through the process and you can follow the recommended setup below for a default installation:

### Recommended setup

\*Note by following these instructions you will erase ALL your server's disk contents.

1. **Select a language** - Language: [English]
2. **Select your location** - Country, territory or area: [United States or your own]
3. **Configure the keyboard** - Keymap to use? [American English or your own]
4. **Configure the network** - Hostname: [dappnode]
5. **Set up users and passwords** - Root password: [Leave blank (twice)]
6. **Set up users and passwords** - Username for your account: [dappnode]
7. **Set up users and passwords** Choose a password for the new user: [YOUR_PASSWORD]
8. **Set up users and passwords** - Re-enter password to verify: [YOUR_PASSWORD]
9. **Configure the clock** - Select your time zone: [Select your own]
10. **Partition disk** - Partitioning method: [Guided - use entire disk and set up LVM]
11. **Partition disk** - Select disk to partition: [SCSIX (0,0,0) (sda) - ...]
12. **Partition disk** - Selected for partitioning: [All files in one partition]
13. **Partition disk** - Write the changes to disks and configure LVM? [Yes]
14. **Partition disk** - Amount of volume group to use for guided partitioning: [Continue]
15. **Partition disk** - Write the changes to disks? [Yes]
16. **Install the GRUB boot loader on a hard disk** - Install the GRUB boot loader to the master boot record? [Yes]
17. **Install the GRUB boot loader on a hard disk** - [/dev/sda (or the disk selected above)]
18. **Your public IP** - [Unless you have a fixed IP leave it blank]
19. **Finish the installation** - Installation complete [continue]

Resume DAppNode's installation

If the installation succeeded, your system will reboot and you will have to log in with the user and password provided in the installation steps above. Then the following screen should appear:

<p align="center">
  <img width="800" height="600" src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/VirtualBox_console.png?raw=true">
  </a>
</p>

Now you can connect to your DAppNode by downloading the .ovpn file that you will be able to download from the link / QR show at the end of the installation by double click in it to open it with a compatible OpenVPN client. Here you have the [recommended ones and connection instructions](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide)

<!-- prettier-ignore-start -->
!!! info
    Note that for the ovpn to be correctly downloaded from the link given you will need to have the TCP port 8092 opened and that the default port to connect via OpenVPN is 1194 UDP. UPnP should have opened them for you if your router has UPnP enabled, if not you will have to open and forward them manually
<!-- prettier-ignore-end -->

Even if the OpenVPN files are served via HTTP, they are served encrypted, and then decrypted locally in your browser with the key provided in the link, so anyone snooping the file transfer cannot use it.

## Installation via installer script

<!-- prettier-ignore-start -->
!!! info
    This software is not meant to be run in a remote machine hosted by a remote provider. What DAppNode specifically wants to avoid is centralization of the machines that our digital lives rely on. That said, we understand that before buying a dedicated machine to run your DAppNode you might want to test it and see how easy it is to use.
<!-- prettier-ignore-end -->

Remember **_Your hardware, your coins, your privacy, your freedom._**

**_We strongly recommend using 8GB+ of RAM and a 200GB+ SSD hard drive._**

### Install DAppNode prerequisites

- [docker](https://docs.docker.com/install/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [xz](https://tukaani.org/xz/) (usually it comes pre-installed by default)

To install all the above prerequisites, execute the command below in the terminal of the machine you want to install DAppNode.
If you already have the dependencies installed or you want to install them on your own you can skip this step.

```
sudo wget -O - https://prerequisites.dappnode.io  | sudo bash
```

### Install DAppNode

Run the following command to install DAppNode:

```
sudo wget -O - https://installer.dappnode.io | sudo bash
```

If you have a static IP and want to set it up right from the connection, run the command below, which includes a variable for your static IP. The majority of users will not need to add that as dynamic IPs are the most common.

```
sudo wget -O - https://installer.dappnode.io | sudo STATIC_IP="your static IP" bash

```

When the installation is done and is successful, be it you can connect to your DAppNode by downloading the .ovpn file that you will be able to download from the link / QR show at the end of the installation, just double click in it to open it with a compatible OpenVPN client. Here you have the [recommended ones and connection instructions](https://github.com/dappnode/DAppNode/wiki/OpenVPN-Client-Guide)

<!-- prettier-ignore-start -->
!!! info
    Note that for the ovpn to be correctly downloaded from the link given you will need to have the TCP port 8092 opened and that the default port to connect via OpenVPN is 1194 UDP. UPnP should have opened them for you if your router has UPnP enabled, if not you will have to open them manually
<!-- prettier-ignore-end -->

Please, after installation be aware that the ethereum blockchain will take some time to synchronize and you will not be able to perform most actions before that.

### How to restore an installed DAppNode to the latest version:

If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes.

⚠️ Please note that volumes are not deleted, but any EXTRA_OPTS set by the user in the packages config **must be set again** after using this script to restore the system ⚠️  

```
sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash
```
### How to uninstall DAppNode

This command will uninstall DAppNode components (but not docker et al.):
⚠️ BEWARE! It will also delete all volumes and stored data!⚠️
```
wget -qO - https://uninstaller.dappnode.io  |  sudo bash
```

## Enter your DAppNode!

Connect to your DAppNode through VPN and navigate to [my.dappnode](http://my.dappnode) to access DAppNode's admin page. DAppNode's functionality will be limited until the Ethereum mainnet chain is synced.

### 2.3. Now you can do things like for example:

- Navigate to a decentralized web [decentral.eth](http://decentral.eth):

  - Decentralized version of [Mycrypto](http://mycrypto.dappnode.eth)
  - Decentralized version of [ENS Manager](http://ens.dappnode.eth)
  - Decentralized version of [Wallet Gnosis](http://gmultisig.dappnode.eth)

- Go to the IPFS web interface by entering [http://ipfs.dappnode:5001/webui](http://ipfs.dappnode:5001/webui) into your browser.

The first time you access to it will ask you for your `Custom API address`, just fill the field with this address and you will be connected to your IPFS node, this is the input you have to enter in the field `Is your API in a port other than 5001?`

```
/dns4/ipfs.dappnode/tcp/5001/http
```

### **You can have a look to our user guide [https://docs.dappnode.io](https://docs.dappnode.io)**

---

Even if it's just a message to confirm that everything is running successfully, we need your feedback to provide the best decentralized server network infrastructure possible. Please message us with questions, suggestions, or just to confirm you got your DAppNode set up:

- Message us in our [Discourse forum](https://discourse.dappnode.io/)
- Make a tweet mentioning [@dappnode](https://twitter.com/dappnode)!
