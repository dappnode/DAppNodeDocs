# Install DAppNode

Think of DAppNode as an operating system. In fact, it is; our savvy team has taken Debian 10 and have super-powered it to be your gateway to access the decentralized web. (We started with Ubuntu but DAppNode 0.2.0 has moved to Debian)

While you can run DAppNode on a Virtual Private Server (VPS), we **highly encourage you to run DAppNode on your own physical server**. The intention of DAppNode is to create a strong network of decentralized servers. Running DAppNode on centralized virtual servers defeats the purpose. 😉That being said, we realize it may be easiest to get started and test the system on a VPS.

---

⚠️ **DAppNode is intended to use in a server. Do not install DAppNode on your laptop**

⚠️ If you do so the installation will erase all its content. See details below

---

## Minimum requirements

You will need a dedicated machine to install it.

Ethereum is big! To cope with it, you’ll need to have a dedicated machine with some minimum specs to keep up with Ethereum's chain.

That is why we recommend having at least 4gbs RAM (ideally 8GB) and an SSD hard drive with at least 256 GB (add capacity as you like, keep in mind that only Ethereum mainet is 180 GB at press time).

In the client side you just need an OpenVPN client installed in the device with which you want to connect to your DAppNode. See info on recommended clients and installation instructions below.

## How to install DAppNode on your machine

Okay, so you’re ready to join the real DAppers. Let us show you how to make that hardware sing the hardware decentralization song!

### How to install DAppNode from an ISO

Download the image from [DAppNode-ubuntu-18.04-server-amd64_v0.1.21.iso](https://github.com/dappnode/DAppNode/releases/download/v0.1.21/DAppNode-ubuntu-18.04-server-amd64_v0.1.21.iso) or [build it from source](https://github.com/dappnode/DAppNode_Installer)

### Burn the ISO in a USB (~8 min)

Burn the ISO to an USB stick. To do so we recommend using [Etcher](https://www.balena.io/etcher/) for the OS with which you will prepare the USB to boot from your server and install DAppNode

Please note that Etcher is intended to generate the ISO image in a bootable USB from your desktop device, and then install it in a server. 

**_IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA IT WILL BE ERASED._** 

Also, DAppNode is intended to run 24/7 so if you install it in a laptop or desktop machine and you turn it off it will lose the sync

### Install a Debian distribution (~15 min)

Insert the USB into your Server and prepare to install a Debian distribution. You will have to make sure that your Server boots from the USB. If you succeed at booting up from your USB, you will be greeted with this screen or a similar one:

<p align="center">
  <img width="600" height="450" src="https://github.com/Shelpin/DAppNode/raw/master/doc/dappnode-installation-welcome-screen.png">
  </a>
</p>

Follow the Debian installation steps; various screens will guide you through the process. You can follow this standard option for a default installation:

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

For this example, we'll be installing DAppNode on a Digital Ocean droplet, but the process should work for any other Debian 10 Server.

**_We strongly recommend using 8GB+ of RAM and a <= 200 Gbs SSD hard drive._**

### Install DAppNode and its dependencies

Install the prerequisites (docker and docker-compose) running this command in the terminal of the machine you want to install the DAppNode server, if using a Virtual Service Provider, you have first to connect you via SSH to that machine.

```
sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.21/dappnode_install_pre.sh | sudo bash
```

### Install DAppNode

```
sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.21/dappnode_install.sh | sudo bash
```

If you have a static IP and want to set it up right from the connection, then run the command with the following variable including your static IP

```
sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.21/dappnode_install.sh | sudo STATIC_IP="your static IP" bash
```

When the installation is done and is successful, you will be given a link from where you can download the credentials to connect to your DAppNode. You will also see in that page the links to the recommended versions for each OS of the needed OPenVPN client. You should download and install an OpenVPN client to open the file downnloadable from the link to connect to the ADMIN UI.

Take into account that the chain will take some time to synchronize and you will not be able to perform most of the actions before that.

### How to restore an installed DAppNode to the latest version:

If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes.

```
sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.21/dappnode_install.sh | sudo UPDATE=true bash
```


