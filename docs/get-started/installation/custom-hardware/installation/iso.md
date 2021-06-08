---
sidebar_position: 2
---

# ISO Installation

When you want to perform a clean installation, installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode.

## Get the ISO

You can get the image downloading directly from [DAppNodeISO](https://iso.dappnode.io/) or if you prefer you can [build it from the source](https://github.com/dappnode/DAppNode_Installer).

## Burn the ISO in a USB

Burn the ISO to an USB stick. To do so we recommend using [Etcher](https://www.balena.io/etcher/) for the OS with which you will prepare the USB to boot from your server and install DAppNode

> :warning: Please note that Etcher is intended to generate the ISO image in a bootable USB from your desktop device, and then install it in a server

IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA IT WILL BE ERASED.

Also, DAppNode is intended to run 24/7 so if you install it in a laptop or desktop machine and you turn it off it will lose the sync

## Boot from ISO

Insert the USB into your Server and prepare to install a Debian distribution. You will have to make sure that your Server boots from the USB. If you succeed at booting up from your USB, you will be greeted with this screen or a similar one:

<p align="center">
    <img src="../../../../static/img/VirtualBox_install.png"/>
</p>

Select a language.

<p align="center">
    <img src="../../../../static/img/iso_install_1.png"/>
</p>

Select a location.

<p align="center">
    <img src="../../../../static/img/iso_install_2.png"/>
</p>

<p align="center">
    <img src="../../../../static/img/iso_install_3.png"/>
</p>

Select a keyboard configuration.

<p align="center">
    <img src="../../../../static/img/iso_install_4.png"/>
</p>

Type a hostname, this is like the name your machine will have on the network. It's not important.

<p align="center">
    <img src="../../../../static/img/iso_install_5.png"/>
</p>

Define a password for the user root.

<p align="center">
    <img src="../../../../static/img/iso_install_6.png"/>
</p>

> :warning: Write down this password, you will need it in case you need to access as root to the cli of DAppNode.

Select an username for your DAppNode and define a password.

<p align="center">
    <img src="../../../../static/img/iso_install_7.png"/>
</p>

> :warning: Write down the user for dappnode and the password you define for him.

<p align="center">
    <img src="../../../../static/img/iso_install_8.png"/>
</p>

Set up your time zone.

<p align="center">
    <img src="../../../../static/img/iso_install_9.png"/>
</p>

Partition disk configuration. On this guide we will use the second option **Partitioning method: [Guided - use entire disk and set up LVM]**.

<p align="center">
    <img src="../../../../static/img/iso_install_10.png"/>
</p>

After choosing the disk, we need to define the partioning scheme. We will select **All files in one partition (recommended for new users)**.

<p align="center">
    <img src="../../../../static/img/iso_install_11.png"/>
</p>

Confirm we will write the disk.

<p align="center">
    <img src="../../../../static/img/iso_install_12.png"/>
</p>

We want to use all the disk ont he partioning process. So we dont modificate the value.

<p align="center">
    <img src="../../../../static/img/iso_install_13.png"/>
</p>

Confirm we want to write the changes to disks.

<p align="center">
    <img src="../../../../static/img/iso_install_14.png"/>
</p>

The next decision depends of you. We resommend to select yes because you dont have to confirm all the operations.

<p align="center">
    <img src="../../../../static/img/iso_install_15.png"/>
</p>

Install the grub.

<p align="center">
    <img src="../../../../static/img/iso_install_16.png"/>
</p>

Select the disk.

<p align="center">
    <img src="../../../../static/img/iso_install_17.png"/>
</p>

If you have a static IP you should define here. In other case, leave the field blank.

<p align="center">
    <img src="../../../../static/img/iso_install_18.png"/>
</p>

You will see this message indicating you have finished this installation.

<p align="center">
    <img src="../../../../static/img/iso_install_19.png"/>
</p>

The machine will restart and you will see this screen.

<p align="center">
    <img src="../../../../static/img/iso_install_20.png"/>
</p>

Log in into the machine with the user you have defined before and the password.

## Post-Installation

Once the installation process has finished, automatically DAppNode will try to prepare the first access to your DAppNode on the next order:

1. [Local Proxy](https://docs.dappnode.io/user-guide/ui/access/local-proxy)
2. [Wifi](https://docs.dappnode.io/user-guide/ui/access/wifi)
3. [Wireguard](https://docs.dappnode.io/user-guide/ui/access/vpn#wireguard)
4. [OpenVPN](https://docs.dappnode.io/user-guide/ui/access/vpn#openvpn)
