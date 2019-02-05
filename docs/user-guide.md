# User Guide

[TOC]

## Welcome to DAppNode – The Admin UI

Once you have succeeded in connecting to your DAppNode via VPN, you will have access to the above-mentioned URL. Be aware of this historic moment; it might very likely be the first ETH domain you visit.

The Admin UI allows the installation of packages in your DAppNode, adding devices to connect for your friends and family, monitoring its health and allowing fully functional operation without having to open the console.

Let’s have a look to see what you will find here.

## Dashboard

When you first enter the Admin UI, you will see a link to a survey made to tell us how the installation went and provide your insights about the process. We greatly appreciate this feedback in order to help us to make a better product.

By clicking “Dashboard” you can see a summary of the components that make up the system and its status. This is what a healthy DAppNode dashboard looks like:

1. Tabs area

2. Name of the server / Internal IP

3. Health of core services

4. Error reporting area (in this example, the DAppNode is in good shape so nothing appears here)

5. Sync State

6. Server stats

7. Notifications area

8. Report issue / Autodiagnose tool

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/img/dashboard.jpg">
</p>

**IMPORTANT NOTE ON SERVER STATS: if you note that the disk capacity is getting near to 100 % you should disable services to avoid the disk getting full. If this happens the DAppNode will get unfunctional, and you will not be able to erase packages once the memory is at 100%**

To avoid this, non core packages will be automatically stopped when there is less than 5 Gbs left, and ETHCHAIN and IPFS will be automatically stopped when there is less than 1 GB available. If by any chance your DAppNode server gets to 100 % busy disk space, it will become unworkable from the ADMIN UI and you will have to erase containers/volumes manually from the commmand line of your server.

## Activity

This tab allows easy access to the DAppNode logs in order to debug errors. We work hard to make this tab irrelevant to you, but for the time being, if you are experiencing any issue, these logs will help our support team help you identify and fix any problem. You will also find a button to download a log report file.

## Devices

This tab is one of the cornerstones of our vision, as the functionality is meant to build trusted circles that connect to the decentralized web through a DAppNode installed on a piece of self-owned hardware that provides access to your friends and family.

Just click “add a device”, name it and you will get a QR / link that contains the file to configure the VPN to connect to your DAppNode for any friend or family member.

This is the same process that you performed while installing your DAppNode when you accessed the first URL that the DAppNode sent you to. In fact, the DAppNode created the first device for you, now it is your turn…

Take into account that each device added has its own VPN credentials and is valid only for one concurrent connection, but you can add as many devices as you want.

If there is a device using the same VPN credentials, you will be able to connect to the VPN with other devices, but you won´t be able to access the DAppNode.

You also have the ability to give a device admin privileges so the ADMIN UI can be used by them. If any device without admin credentials tries to access the ADMIN UI, it will not work.

⚠️ **Take in account that if you remove admin privileges to any device while that device is connected to the server, it will still be able to access the admin UI and thus that device can make itself admin again, to prevent this, after removing admin privileges to any user you should restart the VPN package by going to System / VPN / Restart. This also applies when you want to remove access to any device without admin privileges.** ⚠️

### Guest User functionality

In the devices section you will find a Guests functionality that can be enabled / disabled at your own discretion.

This functionality allows multiple users to connect with a single pair of credentials, what is specially useful in teaching environments or when you want to connect people without adding a device for each user.

When you disable this functionality, any user that is connected to the VPN will still be able to use your DAppNode until you restart the VPN service in System / VPN / Restart.

## Installer

Here you have the DAppstore where you can directly install a growing amount of services and libraries just by a click and they will install. Please let us know which ones would you like to have in the DAppstore by filling out this little survey.

https://goo.gl/forms/EjVTHu6UBWBk60Z62

From the installer you can also install packages not shown in the interface by pasting its IPFS hash or its ENS domain in the above bar. The interface will show you the corresponding package to that IPFS hash/ETH domain and you will be able to install it if there are no compatibility issues. (see below section Have your own packages in DAppNode)

We have added a functionality that allows to customize some packages with predefined configurations made by the developer of the node/ DApp, please check the project documentation to see which options to customize are available.

You can also select your own customized path for the installation of the package by writing your selected path in the field aside the path by default. Last, if you are an advanced user you can also chooose the ports to be used by the package by editing the "ports" section.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/img/installer.png">
</p>

Here you have a brief description of some of the available packages:

### Testnet nodes

With DAppNode, you can easily set up nodes of the Rinkeby, Kovan and Ropsten networks for testing purposes. Just find in Packages the testnet you want to set up in your DAppNode, install it and it will immediately start to synchronize.

As with Parity Main net node, you have your websocket in the port 8546 and your RPC connection in the port 8545 using the following URLs:

- my.rinkeby.dnp.dappnode.eth

- my.kovan.dnp.dappnode.eth

- my.ropsten.dnp.dappnode.eth

### Görli

Görli, the only Proof of Authority testnet that has compatibility with Geth, Pantheon and Parity is available for you to run with a couple of clicks in your DAppNode.

### Livepeer

Livepeer is an open Source Video Infrastructure Services platform, built on the Ethereum Blockchain (Rinkeby). With the Livepeer package you can easily set up a Livepeer node. Have a look to https://livepeer.org to get more info and docs.

Please note that if you install this package that is running in Rinkeby, you need to have installed the Rinkeby chain for LivePeer to work properly. This is the same with any other services. You will need to have a node of the chain it is running on.

### Swarm

Swarm is a distributed storage platform and content distribution service, a native base layer service of the ethereum web3 stack that we have made available as a DAppNode package so you can easily install and maintain your own Swarm node.

### Monero

DAppNode has a Monero daemon package available that will be your very own Monero node, as using Monero without your own node is a bit like having your DAppNode in AWS (defeats the purpose).

Let’s see how to connect a Monero wallet to your node.

Once you have installed the Monero daemon, with a couple of clicks you are ready to set up your wallet connected to your node.

In Monero a node is called a daemon, and does not have a wallet functionality. They are two separate pieces of software that work together by connecting your Graphic User Interface, or command line wallet to your own node.

For this example, we will use the official Monero GUI that you can get at  www.getmonero.org

Select the GUI wallet version for your OS. Install it and open it. After showing you your keys and so on, the app will ask you which node you want to connect to.Simply select remote node, include http://my.monero.dnp.dappnode.eth as the node address, 18081 as the port and you are done!!!

Now you have your Monero wallet connected to your own node!!!!

Do not buy any tanks please ;)...

## Packages

Here you can see the packages you have installed and manage them, access to their logs, stop and restart them, remove them and preserve its data, or remove the package and the data. In this screen you will also find the relevant info about the package:

- Version of the package
- Use link
- Volumes and space occupied (remember you can only choose a customised path in the installation)
- Info links
- Ports used (remember you can change them, in the instalalation or after iit)

These are the main options you can execute on your installed packages:

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/img/installerservices.png">
</p>

Note that when removing a non core package you have the following options :

- Remove only the container: This will only remove the package but data will be kept, so if you insatll the package again in the same path,thje container will mount the volume again and you won´t have to sync the whole package again.

- Remove Package + volume : This will erase the container and the asosicated data. If you want to reinstall, the volume will have to sync again

## System

Here you can access the packages that are part of the DAppNode core and manage them, see their logs, restart them or delete its associated data to be restored.

If you have a Static IP you can set it up here so the future VPN credentials generated point to that fixed ip, just include your Static IP in the box and hit “Set”, you can always disable.

## SDK

Together with DAppNode´s SDK, this tab will help you to make the metamask transaction to publish your own package.

Once you have used the command line SDK and you have the DNP name, the version about to be published and the IPFS hash of the manifest, you can use this tool to make the last step and send the transaction once you have connected your metamask by clicking the "Connect" button

## Notifications

In the upper right part of the ADMIN UI you will see a bell icon that will be highlighted when there is an important notification for you. It will turn yellow to warn you about the need of creating new VPN credentials when you set a Static IP, or prompt you to restart the VPN services when you want to remove access to users in your DAppNode. It wilil turn red when packages have been stopped to prevent the machine disk getting full.

## Report

You can contribute to DAppNode´s improvement by opening issues directly from the ADMIN UI. When you click the "Report" button and Auto diagnose tool will be run to check DAppNode´s overall performance. Also you have the option of sending tthe issuewith a prepopulated form thata will be automatically loaded in the report screen. You can also choose to open the issue without any data.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/img/reportscreen.png">
</p>
