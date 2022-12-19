---
sidebar_position: 6
---

# System View

This area is used to configure and manage your system with different options that will be progressively released. This page has several tabs where you can collect information about your machine and modify some configurations.

## Information

In this section you can see the general metrics of your machine:

- **Statistics of your machine**: RAM usage, Disk Space and CPU usage.
- **Volumes**: The volumes of your DAppNode and how much space they occupy.
<p align="center">
    <img src="../../../../img/system_view_main.png"/>
</p>

## Notifications

To set up notifications from your node, this section explains how to set up a free private Telegram bot to send you DAppNode alert messages in a private Telegram channel you setup with your bot.

<p align="center">
    <img src="../../../../img/system_view_notifications.png"/>
</p>

If you are interested in enabling these kinds of remote notifications, we recommend you follow this guide [How to Set Up Telegram Notifications on DAppNode](https://forum.dappnode.io/t/set-up-your-dappnode-telegram-bot/816/4).

## Auto-Updates

You can now choose if you want your packages to be automatically updated by enabling this option for System Packages (Strongly reccomended to be enabled to ensure proper functioning of your Dappnode), installed packages, or both. Please note that tthe updates will be made 24 hours after the updated package is detected on the Smart Contracts

This feature is works for non-major updates, Major updates which are less frequent than normal updates requre manually approval by the user to avoid breaking changes, which major updates often include.

<p align="center">
    <img src="../../../../img/system_view_auto-updates.png"/>
</p>

## Repository

In this section, you will be able to set up what type of Ethereum client(s) you will use on your DAppNode and set up the IPFS service.

### Ethereum Client

<!-- You can find a more detailed information on the section [select a type of client](./initial-configurations/select-a-client). It's important to understand the pros and cons of this decision.
This view is the same that you saw in that step. -->

<p align="center">
    <img src="../../../../img/system_view_repository.png"/>
</p>

Here you can choose several options:

- **Use a Remote client of Ethereum**: your dappnode machine will use the "DAppNode's ethereum node.
- **Use a Full Node**: your dappnode machine will have an Ethereum node and will be full independent from anothers.
- **OPTION Use remote during syncing or errors**: This option lets you to use a remote node in case your ethereum node is syncyng or it is affected by an error.

<!-- As we said before if you want to know the pros and cons of this decisions, we recommend you to read [select a type of client](./initial-configurations/select-a-client) section. -->

### IPFS Service

This feature allowes users to connect to a remote IPFS node instead of the locally hosted version.
You can find a guide related to this feature in [this guide on the forum](https://forum.dappnode.io/t/how-to-use-dappnode-ipfs-remote/1295)

<p align="center">
    <img src="../../../../img/system_view_repository_2.png"/>
</p>

#### When to use IPFS remote?

IPFS is part of the DAppNode technology stack, but it sometimes causes problems with certain routers or consumes too much of capped data plans. If you experience any of the following issues, you might want to consider switching to IPFS remote:

- Home networking issues
- The DAppStore does not render properly
- Issues downloading new packages or updates

#### IPFS gateways and security

Connecting to IPFS remote gateways could enable security risks like the gateway serving malicious content to the user. We mitigate this by verifying the content downladed with the [CID technology](https://docs.ipfs.io/concepts/content-addressing/).

If the DAppNode IPFS gateway is not available (we make no uptime guarantees and we offer it on a best-effort basis) the user can set another IPFS gateway in the input field, check out all the [IPFS gateways available](https://ipfs.github.io/public-gateway-checker/). DAppNode recommends using them as a last resort.

## Network

In the network section we alter some technical networking configuration:

- Static IP: Usually, IPs assigned by residential ISPs are dynamic IPs. As a result most users do not have a static IP that remains unchaged.  This means that it can be difficult to connect to your home IP as it changes dynamically as per your ISP. To resolve this very common situation, Dappnode uses DynDNS, a DDNS. DynDNS associates any IP including dynamicly assigned IPs to a unique URL like 0773a23d34aed273.dyndns.dappnode.io, for example, for persistant access to a dynamic destination. It's necessary to use a this to run some services, and DynDNS is the solution to this problem. If your IP is Static for any reason, and you don't want to use DynDNS, you can set up with this field.

**HTTPs Portal**: to see this option you need to install the HTTPS package. Here you can expose services using the protocol HTTPS. What does it mean? If you expose for example Geth, you expose your Geth RPC to the Internet, so you can connect to your node via MetaMask or another Web3 Wallet of your choice from anywhere. You must be careful using this feature. In this section we have listed the services we "recommend" or we beleive can be useful for various use cases.  None are exposed by default for security purposes but if you so choose to expose any of the ports of the below services you can with one click generate a secure link directly to your node's API port via a unique HTTPS URL to acces the API remotely.  Take care in what you expose and with whom you share the generated URL as to not expose more than you intended.  Be sure to understand the implications of opening/exposing any package's API ports to the internet.

<p align="center">
    <img src="../../../../img/system_view_network.png"/>
</p>

## Profile

Here you can modify the password that is required to access to the UI.

<p align="center">
    <img src="../../../../img/system_view_profile.png"/>
</p>

## Peers

<!--
This section is about IPFS peers -->

<p align="center">
    <img src="../../../../img/system_view_peers.png"/>
</p>

On this view, we can do two things:

- **Share IPFS peer:** obtain a link of our IPFS, so we can share it with people to stay connected.
- **Add IPFS Peer**: here you can paste the link of another user to stay connected.

## Security

It shows some security checks of your DAppNode.

<p align="center">
    <img src="../../../../img/system_view_security.png"/>
</p>

## Advanced

The advanced area collects many different functionalities

### Change Dappnode Name

You can change the name that appears on the UI on the top right. This is a visual change only, thus it's not a sentitive modification.

<p align="center">
    <img src="../../../../img/system_view_advanced_1.png"/>
</p>

For example, if we type this name and click on the button **Change Dappnode Name**, the name will be what we entered in the field.

<p align="center">
    <img src="../../../../img/system_view_advanced_2.png"/>
</p>

### SSH

The following space let the user manage the ssh configuration of his DAppNode. You can:

- **Enable/disable SSH**:
- **Check SSH State**:
- **Check what port ssh is using**:
- **Change SSH port**:

<p align="center">
    <img src="../../../../img/system_view_advanced_3.png"/>
</p>

#### Check SSH status

You can check if SSH is enabled by clicking the **Fetch Status** button. In case the ssh is enabled you will see the word **enabled** on the field.

#### Enable/Disable SSH

You can enable/disable the ssh of your Dappnode machine, click on the respective button below.

#### Check what port is set on your Dappnode's SSH server for remote access

To check what port is using your DAppNode for SSH connections, you can find it out by clicking on the **Fech port** button.

#### Change SSH access port

If you want to change the port DAppNode use for SSH , you can change it by typing the number you want to use and pressing the **Change** button.

### Docker update

This section is highly sensitive. Please take extreme care using these functions; if in doubt, ask support on Discord. 
Here you can update the Docker version of your Dappnode. From here we can update specifically: Docker-Compose and the Docker Engine.

<p align="center">
    <img src="../../../../img/system_view_advanced_4.png"/>
</p>

In case you want update Docker versions, you must update Docker-Compose first, and after it has comepleted upating, only then attempt updating the Docker Engine.

#### Update Docker-Compose

You must to click on the **Check requirements** button. Two things can happen:

- Receive a "Docker-Compose is updated" message, and you don't have to do anything as it's updated to the latest compatible version.
- Receive a "There is a new version" message, Update to it by clicking the update button.

#### Update the Docker Engine

You must to click on the **Check requirements** button. Several checks will be performed and inform you if you need to or even can update it currently.

### Clear cache db

Remove the local cache of the Aragon Package Manager (APM) entries, package manifests, package avatars. Also removes the user action logs shown in the Activity tab.

<p align="center">
    <img src="../../../../img/system_view_advanced_5.png"/>
</p>

### Clear main db

Remove the local database which contains critical information about your DAppNode, such as its DynDNS identity, IPFS registry, Telegram Bot configuration, auto update and repository selections, etc.

<p align="center">
    <img src="../../../../img/system_view_advanced_6.png"/>
</p>

## Power

If you need to reboot or shut down your server as a last resort, you can do it from this section. Please be aware that if you shut down your server you will only be able to switch it on again when you have psysical access to your DAppNode.

<p align="center">
    <img src="../../../../img/powermanagement.png"/>
</p>
