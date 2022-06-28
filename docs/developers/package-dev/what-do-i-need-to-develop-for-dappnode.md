---
sidebar_position: 1
---

# What do I need to develop packages for DAppNode?

It's required to use the [DAppNodeSDK](https://github.com/dappnode/DAppNodeSDK), this tool will help you to create the basic files to create a package, let you to upload the package to IPFS and prepare the package for dappnode software.

It's optional but we recommend having installed docker-compose and docker. So you can test if the containers work themselves, with no interactions of the dappnode system.

## Prerequisites

You need to have installed npm.

## DAppNodeSDK

### Installation

You can install it globally in your laptop or PC by executing:

```
npm install -g @dappnode/dappnodesdk
```

### Basic commands

#### init

```
dappnodesdk init
```

This command creates basic files of a package. Even you can build this package and install it in a dappnode to check if all is correct.

#### build

This command without options builds the package and uploads the package via IPFS to your dappnode only if you are connected via VPN to your dappnode.

```
dappnodesdk build
```

#### provider

```
dappnodesdk build --provider
```

This option by default uses dappnode(and if you are connected via VPN you can upload the package to IPFS using the IPFS node that dappnode uses). But you can use a IP:PORT or some service like infura you upload the package to IPFS and obtain a hash.
