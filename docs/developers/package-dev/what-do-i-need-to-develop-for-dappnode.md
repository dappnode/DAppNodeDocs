---
sidebar_position: 1
---

# What do I need to develop packages for DAppNode?

It's required to use the [DAppNodeSDK](https://github.com/dappnode/DAppNodeSDK), this tool will help you to create the basic files to create a package, let you to upload the package to IPFS and prepare the package for dappnode software.

Its optional but we recommend to have installed docker-compose and docker. So you can test if the containers works themselves, with no interactions of the dappnode system.

## Prerequisites

You need to have installed npm.

## DAppNodeSDK

### Installation

You can install it gloablly in your laptop or PC by executing:

```
npm install -g @dappnode/dappnodesdk
```

### Basic commands

#### init

```
dappnodesdk init
```

This command creates a basic files of a pakcage. Even you can build this package and install it in a dappnode in order to check if all is correct.

#### build

This command without options build the package and upload the package via IPFS to your dappnode only if you are connected via VPN to your dappnode.

```
dappnodesdk build
```

#### provider

```
dappnodesdk build --provider
```

This option by default uses dappnode(and if you are connected via VPN you can upload the package to IPFS using the IPFS node that dappnode uses). But you can use a IP:PORT or some service like infura you upload the package to IPFS and obtain a hash.
