---
sidebar_position: 2
---

# Installation

## Prepare and boot ISO

1. Download the file `DAppNodeARM-x.x.xx.img.gz/zip` from [here](https://github.com/dappnode/DAppNode/releases/tag/v0.2.39).

2. Unzip the file.

3. Write the image into the microSD. To do that, there are different tools such as [Raspberry pi imager](https://www.raspberrypi.org/software/) and Rufus(for windows). In this example we used Raspberry pi imager.

<p align="center">
    <img src="../../../../img/arm_installation_1.png"/>
</p>

4. Insert the microSD into the Rpi.

5. Connect the raspberry pi to a screen and a keyboard.

6. Switch on the Rpi and wait for the startup process.

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
