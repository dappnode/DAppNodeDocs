---
sidebar_position: 2
---

# Select a type of Client

The first time you enter to the admin UI of DAppNode, you will have to take this decision. Firstly, it's a decision you can modify whatever you want. From DAppNode we think it's so important to explain best as possible what this selection means. Then, you will see the next window.

<p align="center">
    <img src="../../../../img/system_view_repository.png"/>
</p>

You can select 3 different options. To understand correctly what are the consecuences, we will explain in a short way the context situation and the pros and cons of every option.

## Context

### What is a client and why do I need to communicate with an Ethereum Client

A Blockchain is a network where the different nodes share information. The way the user can get access to this information is using a client. On a short way, we can say that DAppNode update the packages direction on the Ethereum Blockchain. This means that you need your DAppNode connect to an Ethereum Client to be able to get the packages or on the way to be able to access to the DAppStore and get the package you want.

### Third Parties and Blockchains

One of the main objetives of blockchain technology is reducing the dependency of third parties. When we require a service of a enterprise, in this case, they got us access to an ethereum client. We are depending of them and if its infrastructure fails, we can't do anything. We are not independent!

## Type of Clients

Now you have a little idea of the context, we will explain the differences between these clients.

### Remote

Remote client means your node will communicate with the ethereum node that DAppNode maintain. The pros this kind of node has are the next:

- You have access to the DAppStore and your DAppNode does not have to allocate the memmory is neccesary by having a ethereum client.
- It can be used for devices with low resources.

The cons are:

- If the DAppNode Ethereum Node fails, you will not be able to connect with the DAppStore.

### Light Client

Light Client consists of having an ethereum client on your DAppNode, but this kind of client does not have all the information of the blockchain, so space this kind of client occupies is less. The pros of this set-up are the next:

- You don't depend on third parties.
- The hard disk space that this kind of client occupies is so much less than a full node.
- It can be used for devices with low resources.
- You can connect this node to your metamask and do operations with it.

The cons are:

- Light clients need to connect to one slot of a full node. We can say that a light client only has minimal information of the blockchain, but they require to have access to all blockchain information, so they need to be connected to a full node. Every full node only has slots for 5 light clients which means if there are so many light clients than full nodes, your node could not get a free slot.

### Full Node

Full Node means you will store all the data of the ethereum blockchain. You will release you can select different options. These options are the different "technologies":

- Geth: It's a full node client that is written in Go.
- Nethermind: It's a full node client that is written in . NET.
- OpenEthereum: It's a full node client that is written in Rust.

The main purpose of existing different clients is to increase the sturdiness of the network. If there is an error or bug on one of them, all the clients will not be affected by this failure.

The pros of this selection are the next:

- You are independent !!!!
- Your machine does not depend on full nodes with free slots.

The cons are:

- You need free space on the disk to be able to allocate an ethereum node. Currently, May 2021 the size is 439 GB.
- You can connect this node to your metamask and do operations with it.
- Some machines with low resources perhaps can't run this kind of node.

## Option: use remote during syncing or error

This option is below the three main options. If you select a light client or Full node until your node gets all the data it needs, you will not be able to access the DAppStore, turning on this option you will be able to stay connected to the DAppNode remote node in case your node is syncing(this process can take several hours) or it has some problem.
