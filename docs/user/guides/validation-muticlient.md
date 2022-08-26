# DAppNode Multiclient for Validators (ETH2, GNO)
---
DAppNode is a key piece of infrastructure decentralization. Our mission is to make running infrastructure easy for everyone, so we are now introducing multiple clients to validate on the Ethereum and Gnosis Consensus Layers (including testnets).

---

## Current Status of Multiclient on DAppNode

**Status for ETH Mainnet:** Multiclient officially released for public use!

**Status for ETH Prater Testnet:** Multiclient officially released for public use!

**Status for Gnosis Chain:** Multiclient officially released for public use!

---

## Short Multiclient Guide

1. The user connects to their DAppNode via Wifi or VPN
2. Picks between their validator client of choice (depending on the Network this includes: Prysm, Lighthouse, Teku, Nimbus or Lodestar)
3. With the installation of any client, a second package gets installed called `Web3Signer`. This package will hold the keys and avoid having them in two places at the same time
4. User imports the keys into Web3Signer via the UI of the package
5. Once the selected clients Beacon Chain is synced and the deposit phase is completed, the validator starts aggregating, attesting and proposing, generating rewards :tada:

---

## Detailed Multiclient Guide (using ETH Mainnet as an example)

## 1. Installing a client from scratch 

We suppose that you have generated your keystore files and completed a deposit already. <br /> <br />
Access your DAppNode via WiFi or VPN and go to the DAppStore and select your Consensus Layer Client of choice.

You can select any of the following for ETH Mainnet (might be different for other networks):

- [Teku](http://my.dappnode/#/installer/teku.dnp.dappnode.eth)
- [Lighthouse](http://my.dappnode/#/installer/lighthouse.dnp.dappnode.eth)
- [Prysm](http://my.dappnode/#/installer/prysm.dnp.dappnode.eth) 
- [Nimbus](http://my.dappnode/#/installer/nimbus.dnp.dappnode.eth)

During the installation of your chosen CL client, you'll be asked to select a client in the web3signer package. Choose the client you're about to install there. This allows the web3signer package to talk to your chosen client.
### 1.1 Teku

Install Teku using [this link](http://my.dappnode/#/installer/teku.dnp.dappnode.eth) or search for it in the DAppStore.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_teku_1.png"/>
</p>

Fill in the following details:
- **Graffiti**: A word or underscore/dash-delimited sentence that gets appended to blocks and will be visible on chain
- **Execution Client Endpoint**: Engine API of your Execution Layer Client (usually ends with port :8551)
- **Fee Recipient Address**: An address you control where fees for proposed blocks will be sent to
- **Optional: Checkpoint sync**: You can use this to use a Infura checkpoint sync endpoint or point it to the beacon API of an already installed CL client. For more on that, check out [this](#checkpoint-sync-option)

<p align="center">
    <img width="1000"src="../../../img/multiclient_config_page.png"/>
</p>

Click on the Submit/Update button and wait until the package gets installed, configured and booted up.

### 1.2 Lighthouse

Install Lighthouse using [this link](http://my.dappnode/#/installer/lighthouse.dnp.dappnode.eth) or search for it in the DAppStore.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_light_1.png"/>
</p>

Fill in the following details:
- **Graffiti**: A word or underscore/dash-delimited sentence that gets appended to blocks and will be visible on chain
- **Execution Client Endpoint**: Engine API of your Execution Layer Client (usually ends with port :8551)
- **Fee Recipient Address**: An address you control where fees for proposed blocks will be sent to
- **Optional: Checkpoint sync**: You can use this to use a Infura checkpoint sync endpoint or point it to the beacon API of an already installed CL client. For more on that, check out [this](#checkpoint-sync-option)

<p align="center">
    <img width="1000"src="../../../img/multiclient_config_page.png"/>
</p>

Click on the Submit/Update button and wait until the package gets installed, configured and booted up.

### 1.3 Prysm

Install Prysm using [this link](http://my.dappnode/#/installer/prysm.dnp.dappnode.eth) or search for it in the DAppStore.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_prysm_1.png"/>
</p>

Fill in the following details:
- **Graffiti**: A word or underscore/dash-delimited sentence that gets appended to blocks and will be visible on chain
- **Execution Client Endpoint**: Engine API of your Execution Layer Client (usually ends with port :8551)
- **Fee Recipient Address**: An address you control where fees for proposed blocks will be sent to
- **Optional: Checkpoint sync**: You can use this to use a Infura checkpoint sync endpoint or point it to the beacon API of an already installed CL client. For more on that, check out [this](#checkpoint-sync-option)

<p align="center">
    <img width="1000"src="../../../img/multiclient_config_page.png"/>
</p>

Click on the Submit/Update button and wait until the package gets installed, configured and booted up.
### 1.4 Nimbus

Install Nimbus using [this link](http://my.dappnode/#/installer/nimbus.dnp.dappnode.eth) or search for it in the DAppStore.

<p align="center">
    <img width="1000"src="../../../img/multiclient_nimbus_install.png"/>
</p>

Fill in the following details:
- **Graffiti**: A word or underscore/dash-delimited sentence that gets appended to blocks and will be visible on chain
- **Execution Client Endpoint**: Engine API of your Execution Layer Client (usually ends with port :8551)
- **Fee Recipient Address**: An address you control where fees for proposed blocks will be sent to
- **Optional: Checkpoint sync**: You can use this to use a Infura checkpoint sync endpoint or point it to the beacon API of an already installed CL client. For more on that, check out [this](#checkpoint-sync-option)

<p align="center">
    <img width="1000"src="../../../img/multiclient_config_page.png"/>
</p>

Click on the Submit/Update button and wait until the package gets installed, configured and booted up.

## 2. Web3Signer Setup

### Question: Why is this package needed?

The Web3signer is a remote signer that holds validation keys and communicates with different clients through a standardized API. It comes bundled with a UI that makes it easy to import keystores and slashing protection data.
The Web3signer package and its combined use with the CL client packages is the solution to making it easier and safer for DAppNode users to set up a validator and switch between multiple clients seamlessly.

### 2.1 Import the keystore files

After installing your chosen CL client, a new package will appear in your `Packages` tab. <br /><br />
Open the Web3Signer package page.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_web3signer_1.png"/>
</p>

Click on `UI`, listed below the version of the package. You will then see something like this appear:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_web3signer_2.png"/>
</p>

Click on the <font color="royalblue">blue</font> `Import Keystores` button:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_web3signer_3.png"/>
</p>


You can import your keystore using the first highlighted box. You can either click this box or drag-and-drop your validator keystore over this box.

When you have selected your keystore, you will be asked for the keystores password you used when you created the during its generation process.

If it is the first time using this validator or this validator hasn't been attesting for the past 2 to 3 epochs, it is not needed to import the slashing protection database via the second highlighted box. 

Otherwise, before importing your keystore, make sure your validator has not attested in the past 2 to 3 epochs or import the slashing database you pulled from your old validator. 

>## :warning: If you do not follow the paragraph above, you might get slashed! :warning:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_web3signer_4.png"/>
</p>

## 3. Metrics and Checks

You should install the DMS package to check the performance of your validator(s) and the resources they're consuming and the beaconcha.in web page to check how well your validator is attesting.

### 3.1 Validator metrics

To install the DMS package, go to the DAppStore or use [this link](http://my.dappnode/#/installer/dms.dnp.dappnode.eth).

<p align="center">
    <img width="1000"src="../../../img/dms_package_1.png"/>
</p>

When the package is installed, go to Packages > DMS > click on the UI link (or [this link](http://dms.dappnode/dashboards/)) and look for the dashboard that belongs to your chosen client.

<p align="center">
    <img width="1000"src="../../../img/dms_package_2.png"/>
</p>

## Migrating from one client to another

If you have installed and set up a validator and you want to change the client you are using the recommended process would be the following one:

- **Install** the client you want, wait until this client is synced to the head of the chain (using checkpoint sync or normal sync)
- **Set up** the web3signer package to work with this new client
- **Verify** your setup is working and delete the previous client if you wish to do so

### Example of migrating clients

In this example we will migrate from Prysm to Teku. First of all, we should go to the DAppStore and install the Teku package.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_teku_1.png"/>
</p>

Fill in the following details:
- **Graffiti**: A word or underscore/dash-delimited sentence that gets appended to blocks and will be visible on chain
- **Execution Client Endpoint**: Engine API of your Execution Layer Client (usually ends with port :8551)
- **Fee Recipient Address**: An address you control where fees for proposed blocks will be sent to
- **Optional: Checkpoint sync**: You can use this to use a Infura checkpoint sync endpoint or point it to the beacon API of an already installed CL client. For more on that, check out [this](#checkpoint-sync-option)

<p align="center">
    <img width="1000"src="../../../img/multiclient_config_page.png"/>
</p>

Wait until this package is synced to the head of the chain. <br /> 
Once that has happened, it is time to go to the web3signer package config section and change the following parameter to the new client you want to use.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_change_1.png"/>
</p>

Change to the new client.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_change_2.png"/>
</p>

## Checkpoint sync option

Infura provides everyone with an account a free ETH CL Beacon API. For that, you'll need to create an account [here](https://infura.io/dashboard). <br /> <br />
Once you've done this and logged in, go to your [Infura Dashboard](https://infura.io/dashboard) and click on create new project and select `ETH2`.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_Infura_1.png"/>
</p>

Once the project has been created, click on `Manage Key` at the top right of the page.

Select the Ethereum Mainnet endpoint and copy the URL that starts with `https://`:

<p align="center">
    <img width="1000"src="../../../img/multiclient_infura_checkpoint_endpoint.png"/>
</p>

Paste this URL into the checkpoint sync option of your chosen CL client.