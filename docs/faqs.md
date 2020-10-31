# FAQ´s

## What are the hardware minimum requirements for DAppNode to work?

It depends on the use you want to do with it, basically the number of nodes / DApps that you want to host in it. A basic setup is at least 4 GB RAM (ideally 8GBs) and > 200 GB SSD disk, it is important that the disk is SSD, otherwise writing speed won't be able to cope with the ETH chain sync. On top of that requirements add capacity as needed to run the nodes you wish to run.

## Can I mine with my DAppNode server?

Yes, you can! However, you may not be able to get any proof of work reward, as it is not very likely for any of the main cryptocurrencies. Still, DAppNode in a near future will be a great solution for hosting your proof of stake nodes and get some coins out of your stake easily and securely stored in your DAppNode or mine new cryptocurrencies that are CPU mineable and still have a relatively low difficulty.

## Can I run DAppNode in a laptop?

DAppNode software is intended to be running 24/7 so a server config is more suitable for running a DAppNode and avoiding chains getting unsynced when the laptop is not online, but if you have a spare laptop with the minimum requirements you can install DAppNode in it. Please note that in the installation process the laptop will be formatted to install DAppNode so do not try to install DAppNode in your personal computer or your files might be compromised.

## Can I run DAppNode in a cloud service?

Technically you can, and we recognize is the best way to try it and check how wonderful it is before buying a dedicated piece of hardware. However, that defeats the whole purpose of DAppNode mission about building a self-owned and censorship-resistant infrastructure layer… so please if you want to try it in a VPS please do, but then move it to your own piece of hardware (it will also be cheaper )

## Why should I run a DAppNode?

Centralization of blockchain networks and infrastructure is a huge problem for the whole blockchain vision, that can even make it dystopian. By running your own nodes you contribute to decentralization and censorship resistance of blockchain networks, with a higher degree of privacy while getting some incentives for sharing your infrastructure if you wish to.

## Why can't I connect via VPN to my DAppNode?

If the device with which you are trying to connect to your DAppNode is in the same local network as the DAppNode, you should have a router that supports NAT Loopback or edit the VPN configuration and change the Server IP to the internal IP of your DAppNode. You can easily know if your router has NAT loopback enabled without accessing the router admin UI by opening your terminal and type ping + the IP of your DAppNode (where your VPN connection profile points to).
If the ping works without getting stuck your router has NAT Loopback so if you can't connect to the VPN the cause is not being in the same network. Check that UDP is activated in your router to allow the opening of the needed ports for VPN access.

More information about these issues in the "VPN Connection issues" section.

## Can I share my DAppNode?

You can and you should! The devices tab of the DAppNode it is thought for you to add your beloved ones to access/use your DAppNode. You just generate his/her credentials from the ADMIN UI and they can connect via VPN to your DAppNode and use a trusted infrastructure as a gateway to the decentralized web.

## Can I use Metamask / MyCrypto connected to my own DAppNode node?

Yep! You can customize the nodes your Metamask or MyCrypto connect to point to your very own node! To do so you just have to add the RPC URL http://fullnode.dappnode:8545

## Can I install DAppNode in a Raspberry Pi with extra storage?

Unfortunately not at the moment, DAppNode includes an Ethereum full node and an IPFS node by default so they need powerful hardware to be run on that a Raspberry Pi with extra storage cannot provide.

## If DAppNode is free how do you maintain operations/development?

DAppNode software is an open-source platform developed by the non-profit association DAppNode association in Zug. DAppNode Association is driven and funded by the community, at the moment we have three grants from EF, Aragon, and ECF, but the association also has sustainability sources relying on projects that want their package uploaded to DAppNode and featured in the installer section, or the selling of hardware with DApp Node preinstalled which implies a donation to the association for every piece of hardware with DAppNode pre-installed sold, we are also backed by individual donors and supporters.

## Can I upload my own packages to DAppNode?

Yes! We have developed an SDK to make the loading of packages to DAppNode easy for everyone. Check this doc! https://github.com/dappnode/DAppNodeSDK/wiki/DAppNode-SDK-tutorial

## Do I need technical knowledge to install/run a DAppNode?

No! One of our the critical aspects to achieve our objectives is eliminating the technical friction to install and run nodes so a minimum knowledge is enough to run your own DAppNode. If you know how to open the terminal and run a couple of commands in the console terminal you are done!

## Can I use IPFS once DAppNode is installed?

Yes! Take in account that IPFS is a core component of DAppNode itself, used for example to host the packages to be downloaded but you can also use it your own, as you have a totally functional IPFS node. You can access to it by typing http://ipfs.dappnode:5001/webui

The first time you access to it will ask you for your “Custom API address”, just fill the field with this address and you will be connected to your IPFS node. This is the input you have to enter in the field "Is your API in a port other than 5001?

`/ip4/172.33.1.5/tcp/5001`

## Is there any way to have a Web GUI for the Parity client?

Since we updated from Parity 2.1.6 to newer versions, WEB GUI support has been deprecated by Parity, so at the moment the only way to interact with your node is through the command line. We are looking for solutions but it is not an easy issue.

## Default USB keyboard connected to DAppNode is in QWERTY mode. How to change for AZERTY?

ssh connect to your DappNode.
Edit following files and add your local :

```bash
sudo vi /etc/default/locale
```

For instance for me : `LANG="fr_FR.UTF-8"`

```bash
sudo vi /etc/default/keyboard
```

For instance for me : `XKBLAYOUT="fr"`

When you reboot you will this error. `Failed to start set console font and keymap.`

You need to fix it with this command :

```bash
`sudo systemctl status console-setup.service
```

Reboot and your keyboard is in now AZERTY mode.
