---
sidebar_position: 1
---

# Installation

Now you know what is DAppNode and want to know how you can engage with DAppNode. Firstly, it is highly recommended to run DAppNode in a dedicated machine, that means you should use a machine only for dappnode. DAppNode packages usually need to be capable of using specific ports, so running external apps might result in port conflicts. Moreover, some packages require considerable usage of memory, disk or CPU, so having other apps running in the same machine can cause malfunctioning.

DAppNode users have to understand that every package is unique and has its own requirements. Some packages need more disk space or use more the RAM than others.

## AMD/Intel architecture

DAppNode project is open source which means you can install it on your hardware. There are two main ways to install DAppNode:

- Installation with a script
- Installatiion with an ISO

### Script installation

You can install DAppNode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system.

#### Prerequisites

Before installing DAppNode, you need to install some prerequisites:

- [Docker](https://docs.docker.com/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- [xz](https://tukaani.org/xz/)

To install all the above prerequisites, execute the command below in the terminal of the machine you want to install DAppNode. If you already have the dependencies installed or you want to install them on your own you can skip this step.

```
sudo wget -O - https://prerequisites.dappnode.io | sudo bash
```

#### Installation

To install DAppNode, install it executing the next script:

```
sudo wget -O - https://installer.dappnode.io | sudo bash
```

#### Reboot

To finalize the installation once it has finished completing, reboot your machine:

```
shutdown -r now
```

#### Restore to the latest version

If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes.

```
sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash
```

#### Uninstall

This command will uninstall DAppNode components (but not docker et al.).

```
wget -qO - https://uninstaller.dappnode.io | sudo bash
```

### ISO installation

When you want to perform a clean installation by installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode.

#### Get the ISO

You can get the image downloading directly from [DAppNodeISO](https://github.com/dappnode/DAppNode/releases) or if you prefer you can build it from the [source](https://github.com/dappnode/DAppNode#install-dappnode-with-iso).

#### Burn the ISO in a USB

Burn the ISO to an USB stick. To do so we recommend using [Etcher](https://www.balena.io/etcher/) for the OS with which you will prepare the USB to boot from your server and install DAppNode.

IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA, ALL EXISTING DATA WILL BE ERASED.

Also, DAppNode is intended to run 24/7 so if you install it on a laptop or desktop machine and you turn it off, it will not stay synced.

## ARM

### Hardware Recommendations

- 8 Gb RAM memory
- Screen and keyboard (Only for the first installation)
- Wired connection to the DAppNode

### Installation

#### Prepare and boot ISO

1. Download the file `DAppNodeARM-x.x.xx.img.gz/zip` from [here](https://github.com/dappnode/DAppNode/releases/tag/v0.2.39).

2. Unzip the file.

3. Write the image into the microSD. To do that, there are different tools such as [Raspberry Pi imager](https://www.raspberrypi.org/software/) and Rufus(for windows). In this example we used Raspberry Pi imager.

<p align="center">
    <img src="../../../../img/arm_installation_1.png"/>
</p>

4. Insert the microSD into the Raspberry Pi.

5. Connect the Raspberry Pi to a screen and a keyboard.

6. Switch on the Raspberry Pi and wait for the startup process.

You will see this screen.

<p align="center">
    <img src="../../../../img/arm_installation_2.jpeg"/>
</p>

The default credentials are.
User:
`dappnode`
Password:
`dappnodepi`

Once you have logged in, you will see the next message:
`If you want to add any additional partition or disk, do it now.`
`Run 'sudo dappnodepi-install' command to install DAppNode when ready.`
Connect your raspberry to the internet.
Execute `sudo dappnodedepi-install` to finalize the dappnode installation.

#### Basic Setup

In case you have installed DAppNode in a raspberry using a sd card and you want to use a ssd hard disk you should to mount docker in this ssd. To do this follow the next steps:

- Stop Docker service
  `systemctl stop docker`

- Create a new mountpoint for docker data. As an example:
  `mkdir /data`

- Add your partition on the new device to `/etc/fstab`. You can identify its UUID using the `blkid` tool. Make sure your device is properly partitioned first. Your line in `/etc/fstab` should look like this:
  `UUID=b311b983-bda6-4e9f-835c-266d40d64f07 /data/ ext4 defaults 0 0`

- Mount your SSD drive
  `mount /data`

- Move docker data to the mountpoint
  `mv /var/lib/docker/* /data/`

- Edit Docker settings to use the alternative location. Edit `/etc/docker/daemon.json` as follows:

```
{
  "data-root": "/data"
}
```

- Restart docker

`systemctl start docker`
