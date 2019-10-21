# User Guide

## Welcome to DAppNode – The Admin UI

Once you have succeeded in connecting to your DAppNode via VPN, you will have access to http://my.admin.dnp.dappnode.eth . Be aware of this historic moment; it might very likely be the first ETH domain you visit. And remember that from DAppNode 0.2.0 you can also access by typing http://my.dappnode as easy as that.

The Admin UI allows the installation of packages in your DAppNode, adding devices to connect for your friends and family, monitoring its health and allowing fully functional operation without having to open the console.

Let’s have a look to see what you will find here.

## Dashboard

When you first enter the Admin UI, you will see a link to a survey made to tell us how the installation went and provide your insights about the process. We greatly appreciate this feedback in order to help us to make a better product.

By clicking “Dashboard” you can have a fast look to your server state, if you want to check the overall status and functioning click on the report button at the top right corner.

1. Tabs area

2. Name of the server / IP / DynDNS

3. Sync State

4. Server Stats

5. Size of ETHCHAIN and IPFS volumes

6. Fast access to sync state

7. Notifications area

8. Autodiagnose tool / Report Issue

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/dashboard0.2.5.png?raw=true">
</p>

<!-- prettier-ignore-start -->
!!! info
    IMPORTANT NOTE ON SERVER STATS: if you note that the disk capacity is getting near to 100 % you should disable services to avoid the disk getting full. If this happens the DAppNode will get unfunctional, and you will not be able to erase packages once the memory is at 100%
<!-- prettier-ignore-end -->

To avoid this, non core packages will be automatically stopped when there is less than 5 Gbs left, and ETHCHAIN and IPFS will be automatically stopped when there is less than 1 GB available. If by any chance your DAppNode server gets to 100 % busy disk space, it will become unworkable from the ADMIN UI and you will have to erase containers/volumes manually from the commmand line of your server.


## Devices

This tab is one of the cornerstones of our vision, as the functionality is meant to build trusted circles that connect to the decentralized web through a DAppNode installed on a piece of self-owned hardware that provides access to your friends and family. Remember that they should have a compatible OpenVPN client installed in their device.

Just click “add a device”, name it and you will get a QR / link that contains the file to configure the VPN to connect to your DAppNode for any friend or family member.

This is the same process that you performed while installing your DAppNode when you accessed the first URL that the DAppNode sent you to. In fact, the DAppNode created the first device for you, now it is your turn…

Take into account that each device added has its own VPN credentials and is valid only for one concurrent connection, but you can add as many devices as you want.

If there is a device using the same VPN credentials, you will be able to connect to the VPN with other devices, but you won't be able to access the DAppNode.

You also have the ability to give a device admin privileges so the ADMIN UI can be used by them. If any device without admin credentials tries to access the ADMIN UI, it will not work.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/devices.png?raw=true">
</p>


<!-- prettier-ignore-start -->
!!! info
    Take in account that if you remove admin privileges to any device while that device is connected to the server, it will still be able to access the admin UI and thus that device can make itself admin again, to prevent this, after removing admin privileges to any user you should restart the VPN package by going to System / VPN / Restart. This also applies when you want to remove access to any device without admin privileges.
<!-- prettier-ignore-end -->

## Installer

Here you have the DAppstore where you can directly install a growing amount of services and libraries just by a click and they will install.

In the installer you can find two kind of packages: 

### DAppNode Association Verified Packages

These packages have been built and uploaded to DAppNode by the DAppNode association and are maintained by DAppNode, you will find a blue ticker in the DAppNode Association Verified packages. 

Please let us know which ones would you like to have in the DAppstore by filling out this little survey.
https://goo.gl/forms/EjVTHu6UBWBk60Z62

### Non verified packages

Packages without the blue ticker have been developed and uploaded by third parties. DAppNode association is not maintaining these package and has not performed any audit on its content. Use them at your own risk. DAppNode will not be liable for any loss or damage produced by the use of any package within the installer.

From the installer you can also install packages not shown in the interface by pasting its IPFS hash or its ENS domain in the above bar. The interface will show you the corresponding package to that IPFS hash/ETH domain and you will be able to install it if there are no compatibility issues. (see below section Have your own packages in DAppNode).

### Customizing packages installation

We have added a functionality that allows to customize some packages with predefined configurations (Extra opts) made by the developer of the node/ DApp, please check the project documentation to see which options to customize are available. You can set the custom parameters in the config tab of each package. 

You can also select your own customized path for the installation of the package and its volume by writing your selected path in the field aside the path by default. Remember that you can only do this in the installation, by clicking "Show advanced options"

Last, if you are an advanced user you can also chooose the ports to be used by the package by editing the "ports" section and upload and download files to any package using the File Manager.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/newinstaller.png?raw=true">
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

### Vipnode

Vipnode is an open source implementation of economic incentives for running Ethereum full nodes who serve light clients — a critical component of ETH2.0 sharding. Vipnode is meant to be an incentive structure that allows nodlers — using DAppNode or any other full node — to be paid for running these nodes. At the moment the payments are made in Rinkeby ETH but soon it will be real ether.

### Swarm

Swarm is a distributed storage platform and content distribution service, a native base layer service of the ethereum web3 stack that we have made available as a DAppNode package so you can easily install and maintain your own Swarm node.

### Raiden

Raiden Network is a second layer scaling solution for near instant paymnents on top of the Ethereum Network. Mainet and testnet packages are available in DAppode installer so you can run a Raiden node in the blink of an eye.

### Monero

DAppNode has a Monero daemon package available that will be your very own Monero node, as using Monero without your own node is a bit like having your DAppNode in AWS (defeats the purpose).

Let’s see how to connect a Monero wallet to your node.

Once you have installed the Monero daemon, with a couple of clicks you are ready to set up your wallet connected to your node.

In Monero a node is called a daemon, and does not have a wallet functionality. They are two separate pieces of software that work together by connecting your Graphic User Interface, or command line wallet to your own node.

For this example, we will use the official Monero GUI that you can get at  www.getmonero.org

Select the GUI wallet version for your OS. Install it and open it. After showing you your keys and so on, the app will ask you which node you want to connect to.Simply select remote node, include http://my.monero.dnp.dappnode.eth as the node address, 18081 as the port and you are done!

Now you have your Monero wallet connected to your own node!

Do not buy any tanks please ;)...

## Packages

This screen shows you the system packages and your installed packages in two tabs in a submenu, from where you can manag the operation of a package

### My Packages

Here you can see the packages you have installed and see their info, manage them, access to their logs, configure  them, and upload and download files to and from a  package

#### Info

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/packageinfo.png?raw=true">
</p>

In this screen you will find the relevant info about the package:

- Version of the package
- Use link
- Volumes and space occupied (remember you can only choose a customised path in the installation)
- Info links
- Ports used (remember you can change them, in the instalalation or after it)

#### Control

These are the main options you can execute on your installed packages:


<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/packagecontrol.png?raw=true">
</p>

Note that when removing a non core package you have the following options :

- Remove only the container: This will only remove the package but data will be kept, so if you insatll the package again in the same path,the container will mount the volume again and you won't have to sync the whole package again.

- Remove Package + volume : This will erase the container and the associated data. If you want to reinstall, the volume will have to sync again

#### Config

In this screen you can set up the different existing options and configs for each package.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/packageconfig.png?raw=true">
</p>

#### Ports

With this feature you can add customised port mappings to specific packages, select the host port and the container port and hit "Update port mappings" . Please do not change these settings unless you really know what you are doing, be cautious out there. 

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/addports.png?raw=true">
</p>

#### Logs 

This tab will show you the package logs in real time. 

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/packagelogs.png?raw=true">
</p>

#### Backup and restore

Some DAppNode packages as Lightning Network and Raiden contain private keys so we have added a simple way to backup and restore the sensitive info stored in your DAppNode,as usual,with a couple of clicks. In the packages that hold private keys in their volumes you will find a backup tab. Let us see how it works looking at the Lightning Network Package.   

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNode/blob/master/doc/backupscreen.jpg?raw=true">
</p>

##### Backup

Hit the "Backup now" button and select where do you want to keep your backup file safe. A tar.xz file will be downloaded to the selected path.


##### Restore

If anything happens with your LN node and you have your backup you can always restore it from the ADMIN UI. Just go to Packages / My Packages and select the LN package and the backup tab. Aside the backup button you will see a "Restore" button. 

Just hit that sweet restore button, select your tar.xz backup file and confirm. 

<p align="center"><a href="#"><img width="600" title="Backup" src='https://github.com/dappnode/DAppNode/blob/master/doc/restorescreen.jpg?raw=true' /></a></p>

After the backup file is uploaded your LN node is restored. 

#### File Manager

This option will allow you to upload and download files from a package container. For example you will use it to upload a keystore file to Raiden package, and to restore or to do a backup from your account. 

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/filemanager.png?raw=true">
</p>


### System Packages

Here you can access the packages that are part of the DAppNode core and manage them, see their logs, restart them or delete its associated data to be restored, with the same navigation structure as the installed packages

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/systempackages.png?raw=true">
</p>


## System

This area is used to configure and manage your system with different options that will be progressively released.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/systemtab.png?raw=true">
</p> 

### Auto-updates

You can now choose if you want your packages to be  automatically updated by enabling these option for System Packages, installed packages, or both. Please note that tthe updates will be made 24 hours after the updated package availability is detected. 

This feature is valid for non major updates, in which an admin intervention will always be needed.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/autoupdates.png?raw=true">
</p>


### Static IP

If you have a Static IP you can set it up here so the future VPN credentials generated point to that fixed ip, just include your Static IP in the box and hit “Set”, you can always disable it.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/systemip.png?raw=true">
</p>



### Power Management

If you need to reboot or shut down your server as a last resource, you can do it from this section. Please be aware that if you shut down your server you will only be able to switch it on again when you have psysical access to your DAppNode. 

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/powermanagement.png?raw=true">
</p>


## SDK

Together with DAppNode´s SDK, this tab will help you to make the metamask transaction to publish your own package.

Once you have used the command line SDK and you have the DNP name, the version about to be published and the IPFS hash of the manifest, you can use this tool to make the last step and send the transaction once you have connected your metamask by clicking the "Connect" button

## Support

### Autodiagnose 

In this screen you will have an overview of the functioning of your DAppNode with checks that will indicate you if there is any problem for the normal operation of your DAppNode. You can contribute to DAppNode´s improvement by opening issues directly from the ADMIN UI. 

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/autodiagnose.png?raw=true">
</p>

### Report

When you click the "Report" tab you will chave the option of sending the issue with a prepopulated form that will be automatically loaded in the report screen. You can also choose to open the issue without any data.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/report.png?raw=true">
</p>

### Activity

This tab allows easy access to the DAppNode logs in order to debug errors. We work hard to make this tab irrelevant to you, but for the time being, if you are experiencing any issue, these logs will help our support team help you identify and fix any problem. You will also find a button to download a log report file.


<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/activity.png?raw=true">
</p>

## Notifications

In the upper right part of the ADMIN UI you will see a bell icon that will be highlighted when there is an important notification for you. It will turn yellow to warn you about the need of creating new VPN credentials when you set a Static IP, or prompt you to restart the VPN services when you want to remove access to users in your DAppNode. It will turn red when packages have been stopped to prevent the machine disk getting full.
