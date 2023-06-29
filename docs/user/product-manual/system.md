---
sidebar_position: 6
---

# System View

This area is used to configure and manage your system with different options that will be progressively released. This page has several tabs where you can collect information about your machine and modify some configurations.

## Information

In this section you can see the general metrics of your machine:

- **Statistics of your machine**: RAM usage, Disk Space and CPU usage.
- **Volumes**: The volumes of your DAppNode and how much space they currently occupy.

![Select Stakers in the left side menu](/img/user/product-manual/system_view_page.png#center)

## Notifications

To set up notifications from your node, this section explains how to set up a free private Telegram Bot to send you DAppNode alert messages in a private Telegram channel you setup with your bot.

![Select Stakers in the left side menu](/img/user/product-manual/system_view_notifications.png#center)

If you are interested in enabling these kinds of remote notifications, we recommend you follow this guide [How to Set Up Telegram Notifications on DAppNode](https://forum.dappnode.io/t/set-up-your-dappnode-telegram-bot/816/4).

## Auto-Updates

You can now choose if you want your packages to be automatically updated by enabling this option for System Packages (Strongly reccomended to be enabled to ensure proper functioning of your Dappnode), selected user installed packages, or all. Please note that the auto-update(s) will be performed ~24 hours after an updated package is detected on the smart contracts which store our version data on-chain.

This feature works for non-major updates. Major updates, which are less frequent than normal (non-major) updates, require manual approval from the user to update in order to avoid unexpected breaking changes, which major updates often include.

![Select Stakers in the left side menu](/img/user/product-manual/system_view_auto_updates.png#center)

## Repository

In this section, you can select which Ethereum client(s) you will use on your DAppNode and set up the basic configuration for your IPFS service: Remote Node or Local Node (Local is a core installed package with additional advanced configuration options on its package configuration page).

### Ethereum Client

<!-- You can find a more detailed information on the section [select a type of client](./initial-configurations/select-a-client). It's important to understand the pros and cons of this decision.
This view is the same that you saw in that step. -->

![Select Stakers in the left side menu](/img/user/product-manual/system_view_repository.png#center)

Here you can choose several options:

- **Use a Remote Ethereum Client**: your Dappnode will use Dappnode's officially maintained Ethereum node.
- **Use a Full Node**: your Dappnode will locally run an Ethereum node and will not need to rely on trusting any third parties.
- **OPTION Use remote during syncing or errors**: This option, when enabled, will automatically switch from your Local node to the Dappnode Remote node if your Ethereum node is unreachable or unavailable because it's still syncing or is unavailable for some other reason. This option allows you to maintain a connection to the Dappnode smart contracts in case your Local node cannot, which can help keep your Dappnode updated in case theres some issue with your Local node.

<!-- As we said before if you want to know the pros and cons of this decisions, we recommend you read [select a type of client](./initial-configurations/select-a-client) section. -->

### IPFS Service

This feature allowes users to connect to a remote IPFS node instead of a locally hosted IPFS Package.
You can find a guide related to this feature in [this post on the forum](https://forum.dappnode.io/t/how-to-use-dappnode-ipfs-remote/1295)

#### When to use IPFS remote?

IPFS is a core and essential element of the DAppNode technology stack, but running a full IPFS node locally on your Dappnode sometimes causes problems with certain routers or consumes too much of capped data plans. If you experience any of the following issues, you might want to consider switching to IPFS remote:

- Home network issues being seemingly related to your Dappnode being on or off
- The DAppStore does not render properly
- Issues downloading new packages or updates

#### IPFS gateways and security

Connecting to IPFS remote gateways could enable security risks. For example, the gateway could attempt to serve malicious content to the user. We mitigate this risk by verifying the content downladed with [CID technology](https://docs.ipfs.io/concepts/content-addressing/).

If the DAppNode IPFS gateway is not available (we make no uptime guarantees and we offer it on a best-effort basis) the user can set another IPFS gateway in the input field, check out all the [IPFS gateways available](https://ipfs.github.io/public-gateway-checker/). DAppNode recommends using them as a last resort.

## Network

In the network section we can alter some technical networking configuration:

- Static IP: Usually, IPs assigned by residential ISPs are dynamic IPs. As a result most users do not have a static IP that remains unchaged. This means that it can be difficult to connect to your home IP as it changes dynamically as per your ISP. To resolve this very common situation, Dappnode uses DynDNS, a DDNS. DynDNS associates any IP including dynamicly assigned IPs to a unique URL such as `0773a23d34aed273.dyndns.dappnode.io`. This allows for persistent access to a dynamic destination. It's necessary to use a this to run some services, and DynDNS is the solution to this problem. If your IP is Static for any reason, and you don't want to use DynDNS, you can set up with this field.

**HTTPs Portal**: to see this option you need to install the HTTPS package. Here you can expose services using the protocol HTTPS. **_What does this mean?_** If you expose for example Geth, you expose your Geth RPC to the Internet, so you can connect to your node via MetaMask or another Web3 Wallet of your choice from anywhere. You must be careful using this feature. In this section we have listed the services we "recommend" or we believe can be useful for various use cases. None are exposed by default for security purposes but if you so choose to expose any of the ports of the listed services, you can, with one click, generate a secure link directly to your node's API port via a unique HTTPS URL to acces the API remotely. Take care in what you expose and with whom you share the generated URL as to not expose more than you intended. Be sure to understand the implications of opening/exposing any package's API ports to the Internet.

![Select Stakers in the left side menu](/img/user/product-manual/system_view_network.png#center)

## Profile

Here you can modify the password that is required to access to the UI.

![Select Stakers in the left side menu](/img/user/product-manual/system_view_profile.png#center)

## Peers

<!--
This section is about IPFS peers -->

![Select Stakers in the left side menu](/img/user/product-manual/system_view_peers.png#center)

On this view, you can do two things:

- **Share IPFS peer:** obtain a link of your Dappnode's IPFS, so you can share it with others to help them get or stay connected. For example if you can find an update to a package that they can't, if you share your IPFS Peer link with them when they click it they will automatically add you as a peer and be able to access the content they couldn't before.
- **Add IPFS Peer**: here you can paste the link of another user to stay connected.

## Security

This view shows some security checks of your Dappnode.

![System view security](/img/user/product-manual/system_view_security.png#center)

## Hardware

This page let the user to expand the store of the dappnode, you can follow a guide how to use in [this link](https://discourse.dappnode.io/t/how-to-expand-your-dappnode-filesystem-space/1296).

![System view hardware](/img/user/product-manual/system_view_hardware.png#center)

## Advanced

The advanced area collects many different functionalities

### Change Dappnode Name

You can change the name that appears on the UI on the top right. This is a visual change only, thus it's not a sentitive modification.

![System view advanced 1](/img/user/product-manual/system_view_advanced_1.png#center)

For example, if we type this name and click on the button **Change Dappnode Name**, the name will be what we entered in the field.

![System view advanced 2](/img/user/product-manual/system_view_advanced_2.png#center)

### SSH

The following space let the user manage the ssh configuration of his DAppNode. You can:

- **Enable/disable SSH**:
- **Check SSH State**:
- **Check what port ssh is using**:
- **Change SSH port**:

![System view advanced 3](/img/user/product-manual/system_view_advanced_3.png#center)

#### Check SSH status

You can check if SSH is enabled by clicking the **Fetch Status** button. In case the ssh is enabled you will see the word **enabled** on the field.

#### Enable/Disable SSH

You can enable/disable the ssh of your Dappnode machine, click on the respective button below.

#### Check what port is set on your Dappnode's SSH server for remote access

To check what port is using your Dappnode for SSH connections, you can find it out by clicking on the **Fech port** button.

#### Change SSH access port

If you want to change the port Dapppnode uses for SSH, you can change it by entering the port number you want to use in the field and press the **Change** button to apply.

### Docker Update

_This section is highly sensitive. Please take extreme care using these functions. If in doubt: ask for support on our [Discord](https://discord.gg/dappnode)._

Here you can update the Docker version(s) of your Dappnode. You can update: Docker-Compose and the Docker Engine.

![System view advanced 4](/img/user/product-manual/system_view_advanced_4.png#center)

If you want update Docker versions, you must update Docker-Compose first, and after it has comepleted updating, or shows that it is up-to-date, only then attempt to update the Docker Engine.

#### Update Docker-Compose

You must to click on the **Check requirements** button. Two things can happen:

- Receive a "Docker-Compose is updated" message, and you don't have to do anything as it's updated to the latest compatible version.
- Receive a "There is a new version" message, Update to it by clicking the update button.

#### Update the Docker Engine

You must to click on the **Check requirements** button. Several checks will be performed and inform you if you need to or even can update it currently.

### Clear cache db

Removes the local cache of Aragon Package Manager (APM) entries, package manifests, and package avatars. Also removes the user action logs shown in the Activity tab. **DO NOT USE unless instructed to by support staff**

![System view advanced 5](/img/user/product-manual/system_view_advanced_5.png#center)

### Clear main db

Removes the local database which contains critical information about your Dappnode, such as its DynDNS identity, IPFS registry, Telegram Bot configuration, auto-update and repository selections, etc. **DO NOT USE unless instructed to by support staff**

![System view advanced 6](/img/user/product-manual/system_view_advanced_6.png#center)

## Power

If you need to reboot or shut down your server as a last resort, you can do it from this section. Please be aware that if you shut down your server you will only be able to switch it on again when you have psysical access to your Dapnode.

![Powermanagement](/img/user/product-manual/powermanagement.png#center)
