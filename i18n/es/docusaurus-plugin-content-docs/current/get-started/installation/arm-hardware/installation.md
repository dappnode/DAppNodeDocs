---
sidebar_position: 2
---

# Installation

## Prepare and boot ISO

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
    <img src="../../../../img/arm_installation_2.png"/>
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

## Basic Set up

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
