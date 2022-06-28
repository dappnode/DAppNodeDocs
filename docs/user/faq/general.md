---
title: General
---

## What is DAppNode?

## What is the point of DAppNode?

The main objective of DAppNode is to decentralize the infrastructure of the blockchain environment.

## What can I do with DAppNode?

DAppNode system let you run nodes of different blockchain like bitcoin, ethereum,gnosis in a easy way. Furthermore, you can run validators in networks like Ethereum 2.0, Gnosis chain and avalanche.

## What do I need to run a DAppNode?

You can run DAppNode on machines with not so many resources, even on some old laptop or pc. The resources you will need will depend on how many and what packages you are going to run.
The most basic you need are:

- Ethernet wired connection
- Screen + keyboard
- SSD disk
- 8gb RAM

  We recommend to run validator:

- 16gb RAM
- 2TB Nvme
- Ethernet wired connection
- Screen + keyboard

## What are the advantages of running a DAppNode?

The two main advantages of having your nodes are privacy and independence. Always is more secure to use your nodes than to use the public ones. Public and third-party services can fail their service when the demand is so high, but if your node works that is not gonna happen.

## What is a DAO? What is de DAppNode DAO?

## I can't access my DAppNode

If its the first time you try to access your dappnode, these are the methods you have to access:

- If you are connected to the same network that your dappnode, you should be able to access the UI through http://dappnode.local/
- Wifi, if you have installed dappnode or bought one, you should see a new wifi network called DAppNodeWifi, if so, connect to it.

  If its some specific problem, We recommend you to go to the discord or forum and talk about your specific case.

## What is the difference between buying a dappnode or installing dappnode by yourself?

The system is the same. The dappnode prebuilt machine has been enabled for people who do not want to worry about buying a hardware requirement or installing even. It's a product that tries to be the easiest to use possible.
But if you want to install dappnode on an old PC or in custom hardware you can do it, here you should install dappnode using an ISO or via script.

## Is my internet connection fast enough?

## Do I need to type in commands on a terminal?

Generally, not, you only will have to access the terminal in case your machine require specific support. But one of the objectives of the dappnode system is avoiding the user using the terminal.

## What are the first steps after I logged in?

After logging in for the first time you need to change the root password, this password is the password you will use in case you access the terminal of the dappnode, it's so important you write down this password. You will select what kind of client you are going to install.

## Which packages should I install?

From dappnode, we recommend installing an Ethereum client and the dms and export packages.
Ethereum client because the smart contract that makes the dappstore work is on ethereum and the dappnode requires to communicate with an ethereum endpoint to work and the dms + exporter package because there is a package to collect metrics that helps the user to know-how is the performance of the dappnode.

## How do I install a fallback?

## Is there a way to monitor CPU usage or validator uptime?

In the DAppStore there are 2 package dedicated to monitor your dappnode machine and how every package is working. These two package are:

- DMS package: it shows specific metrics of the package
- Exporter package: it shows metrics related to the resources of every package is using

In case you have validators, in some dashboards of the DMS you can find some metrics related to the uptime. But you can find how your validator is workin on the next pages:

- Ethereum 2.0: https://beaconcha.in/
- GNosis: https://beacon.gnosischain.com/

## How to test staking with goEth and where do I get goEth?

Currently, we are testing the multiclient feature in DAppNode, you have a guide here where it's explained how to install the required packages for participating in a testnet of Ethereum.
Firstly, you will need at least 32 görli Eth. You can obtain this token from the faucet and some discord channels that are related to staking like ethstakers.

- https://goerlifaucet.com/
- https://goerli-faucet.slock.it/
- https://goerli-faucet.mudit.blog/

## What can I do if my hardrive runs out of space?

You can find a detailed guide how you can expand the space of your dappnode [here](https://forum.dappnode.io/t/how-to-expand-your-dappnode-filesystem-space/1296).
You can add a nvme hard disk (if there is a free slot in the dappnode machine), and set it up using the feature which is in the system > hardware. This feature only works with nvme hard disk.

## Who helps me if I run into a problem?

If you have some issue with your dappnode, we recommend using the [dappnode discord channel](https://discord.com/invite/c28an8dA5k) or the forum. If its something more technical, you can go to dappnode github repository and open an issue.

## What are the most important security aspects?

Change the default passwords. The wifi password and the admin password. This last password is asked to change when you access the UI for the first time.
Furthermore, it's a good practice to change the ssh port or disabled in case you are not going to use it.

## What is Portforwarding and why do I need it?

Port forwarding let the router know where to send some information packages, this happens usually when something from outside of the network communicates with the dappnode.
The routers uses the UPnP to make this redirections but sometimes this protocol does not work well or is not enabled.
In the dappnode case, usually is required to set up the port forwarding in case you are using a vpn service to access to your dappnode.

## How to find out which Ports I need to forward?

Usually is not required to open port in the package you install. But if it's required it will depend on the specific service. Usually, the port you need to open in dappnode is always the same. These ports are the ports required for VPN packages.

- If you want to use OpenVPN package, you probably will need to open the ports: TCP port 8092 and 1194 UDP
- In the case of Wireguard package, it could be you need to open the port 51820 UDP.

In the mod advanced configuration, if you want to set up ssh access to your dappnode, you will have to open the ssh port in the router to be able to access it from the outside of the network.

## What happens if my node is offline while validating - do I get slashed?

There are two kinds of punishment when you validate on Ethereum 2.0 (this is applied in gnosis chain too):

- Penalty: Reduce the token of the validator
- Slashing: Remove the validator from the beacon-chain and the balance of the validator continues decreasing.

The penalty happens when a validator is not active or misses some attestation.

A validator gets slashed if :

- Acts like a proposer and signs two different beacon blocks for the same slot
- Acts like an attester and signs two different attestations with the same target

  The second one can happen in case you have two validators running with the same key.
