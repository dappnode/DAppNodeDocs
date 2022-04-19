# Ethereum Consensus Layer (Eth 2.0) Multiclient

DAppNode is a key piece of infrastructure decentralization. Our mission is to make running infrastructure easy for everyone, so we are now introducing multiple clients to validate the Ethereum Consensus Layer.

In this document we will talk about the following chapters:

- Current situation
- Basics to start validating
- Installing a consensus layer client
- Migrating from one client to another

## Current Situation

**Status for Prater Testnet:** Testing phase of the new multiclient setup. Objective is to get as much feedback before releasing to Mainnet.

**Status for Mainnet:** Validating on Eth Mainnet on a DAppNode is supported with Prysm only. 
### Basics to start validating

Assumptions:

- The user has generated a minimum of one keystore
- A deposit of 32 ETH to the validator account has been made

### Previously on Prater tesnet and currently on mainnet (NOT MULTICLIENT):

1. The user connects to their DAppNode via Wifi or VPN
2. Installs the Prysm package
3. Complete the onboarding process where he imports their keystore/s.
4. Once the Prysm Beacon Chain is synced and the deposit phase is completed, the validator starts aggregating, attesting and proposing, generating rewards.

### Currently on Prater (MULTICLIENT):

1. The user connects to their DAppNode via Wifi or VPN
2. Picks between their validator client of choice: Prysm, Lighthouse or Teku (Nimbus and Lodestar coming soon)
3. With the installation of any client, a 2nd package gets installed: `Web3Signer`. This package will hold the keys and avoid having them in two places at the same time
4. Import the keys into the Web3Signer via the UI of the package
5. Once the selected client's Beacon Chain is synced and the deposit phase is completed, the validator starts aggregating, attesting and proposing, generating rewards.

## What is the web3signer package and why is it required?

The Web3signer is a remote signer that can hold validation keys and communicate with different clients. It comes bundled with a UI that makes it easier to import keystores and slashing protection data.
The Web3signer package and its combined use with the client packages is the solution to making it easier and safer for DAppNode users to set up a validator and use multiple clients.

## 1. Installing a client from scratch

We suppose that you have generated your keystore files and completed a deposit already. Access your DAppNode via Wifi or VPN and go to the DAppStore and select your Consensus Layer Client of choice. 

You can select some of the following:
- Teku
- Lighthouse
- Prysm

<p align="center">
    <img width="1000"src="../../../img/multiclient_test1.png"/>
</p>

Once you have installed a Ethereum Consensus Layer client, you need to set up the web3signer package, which was installed automatically when you installed one of the previous mentioned packages. In the web3signer package you'll decide which Consensus Layer client you want to use to validate.

### 1.1 Teku

Once you select the Teku package you will see the Package Information page, then click on the Install button.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_teku_1.png"/>
</p>

Fill out the other bits of information as needed:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_teku_2.png"/>
</p>

**Graffiti**: this is a message your validator writes on the blocks you have created,

**Eth1.x node URL**: This is the prater testnet, you'll need a Ethereum Goerli testnet RPC endpoint

**CHECKPOINT_SYNC_URL for fast sync**: By default, the package will start to sync from the genesis, if you paste here an URL your node will start to work immediately, and it will download all the chains in the background. Below you have a little guide how to get this url.
(We recommend using this option because makes the client works faster. In case you don't set it up, you need to wait for the client to sync from scratch and that takes time.) Fast Sync option is explained at the bottom of this page.

**Eth2 client**: Select the client you want to use, in this case, Teku.

Click on the submit button, now you have to wait some minutes until the package gets installed.

### 1.2 Lighthouse

Once you select the Lighthouse package you will see the Package Information page, then click on the Install button.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_light_1.png"/>
</p>

Fill out the other bits of information as needed:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_light_2.png"/>
</p>

**Graffiti**: this is a message your validator writes on the blocks you have created,

**Eth1.x node URL**: This is the prater testnet, you'll need a Ethereum Goerli testnet RPC endpoint

**CHECKPOINT_SYNC_URL for fast sync**: By default, the package will start to sync from the genesis, if you paste here an URL your node will start to work immediately, and it will download all the chains in the background. Below you have a little guide how to get this url.
(We recommend using this option because makes the client works faster. In case you don't set it up, you need to wait for the client to sync from scratch and that takes time.) Fast Sync option is explained at the bottom of this page.

**Eth2 client**: Select the client you want to use, in this case, Lightouse.

Click on the submit button, now you have to wait some minutes until the package gets installed.

### 1.3 Prysm

Once you select the Prysm package you will see the Package Information page, then click on the Install button.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_prysm_1.png"/>
</p>

Fill out the other bits of information as needed:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_prysm_2.png"/>
</p>

**Graffiti**: this is a message your validator writes on the blocks you have created,

**Eth1.x node URL**: This is the prater testnet, you'll need a Ethereum Goerli testnet RPC endpoint

**CHECKPOINT_SYNC_URL for fast sync**: By default, the package will start to sync from the genesis, if you paste here an URL your node will start to work immediately, and it will download all the chains in the background. Below you have a little guide how to get this url.
(We recommend using this option because makes the client works faster. In case you don't set it up, you need to wait for the client to sync from scratch and that takes time.) Fast Sync option is explained at the bottom of this page.

**Eth2 client**: Select the client you want to use, in this case, Prysm.

Click on the submit button, now you have to wait some minutes until the package gets installed.

## 2. Import the keystore files

You will realise that 2 packages have been installed. The package you have selected and another one is called Web3Signer Prater. Click on the last one.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_web3signer_1.png"/>
</p>

Click on UI link, and you will be redirected to http://ui.web3signer-prater.dappnode/?signer_url=http://web3signer.web3signer-prater.dappnode:9000, and you will see something like this:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_web3signer_2.png"/>
</p>

Click on the import Keystores button:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_web3signer_3.png"/>
</p>

Select your keystore files, if this keystore has not been validated yet, it's the first time you import the keystores you don't need to import the slashing protection data. In another case, you need to import the slashing protection data or wait for 2 epochs (30 min) to avoid being slashed.

When you select your keystore, you will be asked for the password you used when you created the keystore files during the keystore generation process.

Finally, click on submit keystores.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_web3signer_4.png"/>
</p>

## 3. Metrics and Checks

People who have running ethereum validators on DAppNode are used to using the Prysm UI dashboard, but that dashboard does not exist in this infrastructure anymore.

You should install the DMS package to check the performance of your validator and the resources it using and the beaconcha web page to check your validator is attesting.

### 3.1 Validator metrics

Firstly, go to the dappstore and install the DMS package, http://my.dappnode/#/installer/dms.dnp.dappnode.eth.

<p align="center">
    <img width="1000"src="../../../img/dms_package_1.png"/>
</p>

When the package is installed, go to Packages > DMS > click on the UI link (http://dms.dappnode/dashboards/):

<p align="center">
    <img width="1000"src="../../../img/dms_package_2.png"/>
</p>

### 3.2 Check process

## Change from one client to another

If you have installed and set up a validator and you want to change the client you are using for validating the recommended process would be the following one:

- Install the client you want, wait until this client is synced to the head of the chain
- Set up the web3signer package to work with this new client
- Check it's working and delete, if you wish to do so, the previous client you have installed.

### Example of changing client

In this example we will change from Prysm to Teku. Firstly, we should go to the DAppStore and install the Teku package.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_teku_1.png"/>
</p>

You should fill the next configurations:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_teku_2.png"/>
</p>

Wait until this package is synced. When this happens, its time to go to the web3signer package, config section and change this parameter to the new client you want to use.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_change_1.png"/>
</p>

Change to the new client.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_change_2.png"/>
</p>

## Fast sync option

Go to https://infura.io/dashboard , click on create new project.

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_infura_1.png"/>
</p>

Select Endpoints Prater:

<p align="center">
    <img width="1000"src="../../../img/multiclient_test_infura_2.png"/>
</p>

Then, copy the https url. This is the url you should paste in the field.
In this example, i should copy and paste this `https://27Tg3BWDMSnd7sE4LLQt5jYwRVs:f6a18cd69f23267d1b5acacfc4fa37f8@eth2-beacon-prater.infura.io`.
