---
sidebar_position: 1
---

# First steps with Dappnode
---
If you bought a Dappnode from our [store](https://shop.dappnode.io/), built your own custom NUC or installed Dappnode on a device you have lying around, theres a few steps you need to do in order start accessing your favorite web3 applications and blockchains.  


### First login

The first time you access the [Dappnode UI](http://my.dappnode), you will be asked to create a new account on your Dappnode. You will need to supply a username and a strong password. We have the following password requirements:

- Between **8 and 32** characters
- At least **one (1)** capital letter
- At least **one (1)** number
- At least **one (1)** special character (eg. !,?,/)

Once you've chosen a username and a password that matches the criteria posted above, your Dappnode will prompt you with your personal Dappnode recovery token. You can use this token to reset your username and password in case you forget them. Make sure to keep this token in a safe place!

On your first login your Dappnode will guide you through some basic configuration settings. 

<p align="center">
    <img src="../../../../img/first_steps_1.png"/>
</p>

Let's dive in!

### Setting up your repository source

The first thing your Dappnode will ask you about is the `Repository Source`. This configures how your Dappnode will interact with the blockchain in order to grab packages from the DAppStore. 

We have three options available right now:

**<font color="green">Full node</font>**: This is the most secure and decentralized way of accessing a blockchain. This requires the most resources in terms of bandwidth, storage and CPU.

**<font color="yellow">Light client</font>**: This is a middle-of-the-road approach and will install the `Geth` blockchain client. This client uses slots on other Geth full nodes that act as a `light server`. Those slots can be sparse and might not return data if there is no open slot for your Dappnode to connect to. It also does not use as much of your resources as the full node option.

**<font color="orange">Remote source</font>**: This option is the least decentralized option, as you'll have to trust the full nodes from us, the Dappnode maintainers, to provide you with accurate blockchain data. This uses next to no resources and is well suited for low-power devices or network/bandwidth-constrained networks.

Now that you know what each of the options are, it's your time to choose. We generally recommend the following set-up:

- Use the **Full Node** option (if your hardware and your bandwidth allows you to)
- Turn on `Use remote during syncing or errors` on the bottom left
- Select one of the clients listed in the dropdown menu. All of them are tested options . If you need help choosing, you can take a look at the [Ethereum Foundation Website regarding 'Execution clients'](https://ethereum.org/en/developers/docs/nodes-and-clients/#advantages-of-different-implementations) 

<p align="center">
    <img src="../../../../img/first_steps_2.png"/>
</p>

### Automatic System Updates
The next window will ask you about automatic package updates for all packages, *core packages have automatic updates enabled by default*, If you enable this option, all your installed Dappnode packages will be updated automatically when it detects that there is a new version published to the official Dappnode repositories. Roughly 24 hours after your Dappnode recognizes that there is a new version, it will start the update to the new version.  

The Dappnode team **strongly** recommends you leave this option enabled.

:warning: Note: Major system upgrades will require manual approval, even with Auto Updates enabled for all packages.  

<p align="center">
    <img src="../../../../img/first_steps_3.png"/>
</p>

**You've made it**! This screen shows you that the initial Dappnode configuration is complete.

<p align="center">
    <img src="../../../../img/first_steps_4.png"/>
</p>
