---
sidebar_position: 3
---

# Script Installation

You can install DAppNode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system.

## Prerequisites

Before installing DAppNode, you need to install some prerequisites:

- [Docker](https://docs.docker.com/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- [xz](https://tukaani.org/xz/)

To install all the above prerequisites, execute the command below in the terminal of the machine you want to install DAppNode. If you already have the dependencies installed or you want to install them on your own you can skip this step.

`sudo wget -O - https://prerequisites.dappnode.io | sudo bash`

## Installation

To install DAppNode, install it executing the next script:

`sudo wget -O - https://installer.dappnode.io | sudo bash`

## Reboot

To finalize the installation once it has finished completing, reboot your machine:

`shutdown -r now`

## Post-Installation

Once the installation process has finished, DAppNode will try to automatically prepare the first access to your DAppNode on the next order:

1. [Local Proxy](../../../../user-guide/ui/access/local-proxy)
2. [Wifi](../../../../user-guide/ui/access/wifi)
3. [Wireguard](../../../../user-guide/ui/access/vpn#wireguard)
4. [OpenVPN](../../../../user-guide/ui/access/vpn#openvpn)

## Uninstall

This command will uninstall DAppNode components (but not docker et al.).

> :warning: BEWARE! It will also delete all volumes and stored data!

`wget -qO - https://uninstaller.dappnode.io | sudo bash`
