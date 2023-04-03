# Creating and Publishing a DAppNode Package with DAppNodeSDK

DAppNodeSDK is a tool that simplifies the process of creating and publishing a DAppNode package (DNP). It generates necessary files for the package, validates its contents, and facilitates uploading and publishing it to [IPFS](https://ipfs.tech/). In this guide, we will show you how to use DAppNodeSDK to develop a DNP.

Before proceeding, it is assumed that you have a basic understanding of DNP and the DAppNode ecosystem. If you're new to DAppNode, we recommend starting with the official [User Guide](https://docs.dappnode.io/).

If you are someone who prefers following videos, scroll down for a 1h workshop on how to build packages.

## Prerequisites
1. [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installing DAppNodeSDK
To install DAppNodeSDK, open a terminal window and run the following command:

```console
$ npm install -g @dappnode/dappnodesdk
```
This will install DAppNodeSDK globally on your machine. Alternatively, if you have `npx` installed on your machine, you can use the following command to ensure that you're using the latest version of DAppNodeSDK without having to install it globally:

```console
$ npx @dappnode/dappnodesdk <command>
```

## Initalizing a new DappNode Package
After installing DAppNodeSDK, the first step in creating a DAppNode package is to initialize the repository containing all its files. You can do this by running the `init` command in a terminal window:
```console
$ dappnodesdk init
```
This command opens an interactive process that prompts the user for information such as the package name, version, description, author, and license. This information is used to create and initialize the `dappnode_package.json` file.

The `init` command will also create three additional files: `avatar-default.png`, `docker-compose.yml` and a `Dockerfile`. A complete guide on all files of a DNP and its content can be found [here](https://docs.dappnode.io/developers/package-dev/dappnode-package-files-guide).


## Developing the package

All DNP should be built and run inside a Docker container. As a DNP developer, it is your responsibility to configure the `docker-compose.yml` file, along with any additional Dockerfiles, environment variable files, or entrypoints that it may use. This will ensure that all the necessary containers for your DNP are created and initialized when it is run.

Aside from that, we recommend creating a few other optional but useful files, such as `setup-wizard.yml`, that will be used to guide the user through the installation of your package via the DAppNode UI. 

## Building the DappNode package and publishing it to IPFS
When the package is ready to be published, open a terminal window and run the following command inside the DNP repository:
```console
$ dappnodesdk build
```
This command will initalize a process where all the package files in your current directory will be validated. If DAppNodeSDK does not find any errors, all the Docker images found will be built and compressed. The compressed images and your other DNP files will be then uploaded to IPFS. Once this process is done, an IPFS hash will be printed through console. You can now use this hash to install the package as any other DAppNode Package.

To use your own IPFS node when connecting to IPFS, use the flag ``--provider=[URL]``. More information 

Please note that if a custom DNP fails to meet the requirements validated by DAppNodeSDK, it will not be installable through the DAppNode platform. To learn more about the DAppNode package requirements, click [here](https://docs.dappnode.io/developers/package-dev/dappnode-package-files-guide).

## Other DAppNodeSDK utilities
Besides `init` and `build`, DAppNodeSDK offers more tool to easen the mainteinance of your package. A complete guide on all the DAppNodeSDK commands can be found [here](https://docs.dappnode.io/developers/dappnode-sdk/dappnodesdk-commands).


## Video Tutorial: How to create your own DNP

<iframe width="560" height="315" src="https://www.youtube.com/embed/KjsonhjX2eM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>