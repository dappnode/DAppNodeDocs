---
title: Switch staking clients

---

## Switch staking clients
This guide explains how to switch execution and consensus clients on Dappnode for Ethereum, Gnosis, and Lukso networks. It includes detailed information about the switching process and expected waiting times for resynchronization and attestation.

### General Information
Important considerations before switching clients:

**Downtime:** Switching clients will result in temporary downtime and missed attestations.
**Sync Time:** New clients will need time to synchronize with the network.
**Disk Space:** Ensure you have enough disk space for the new client before switching.
**Backup:** Always backup your validator keys and wallet information before making any changes.

**Basic Switching Process Overview**
The following switching process applies to Ethereum, Gnosis and Lukso. 
- Install new client. 
- Go to the stakers tab in the left menu. 
- Select the new client.
- Click on the Apply changes button.
 
![stakers tab](/img/stakerstab.png)

- Wait for synchronization. You can view the sync process in the dashboard tab or inside the client package in the logs section. 
![Dashboard](/img/dashboard.png)


**What's happening during Sync?**
- Connecting to peers on the network
- Downloading block headers and bodies
- Processing and validating transactions
- Building the state trie and other database structures
- Executing all historical transactions


**Verify correct operation** 
Go to the new client package in the packages tab and check the logs section (Technical knowledge is needed to read the logs) 
Go to Beaconcha.in dashboard and check if your validators are active and attesting. 


### Execution client switch

The current execution clients supported in Dappnode are the following: 

- Ethereum execution clients: Reth, Geth, Nethermind, Erigon and Besu
- Gnosis execution clients: Nethermind and Erigon
- Lukso execution client: Geth

Switching execution clients is a **critical operation that can substantially impact attestation performance** due to the extensive sync time required. Additionally, it is important to consider that installing a new execution client demands significant disk space. 



| Sync time | Attestattion impact | Disk space required |
| -------- | -------- | -------- |
| 12-48h   | 12-48h   | +2 TB    |


If the client was not downloaded and sync previously, an initial sync is needed. It typically takes from 12 to 48 hours depending on the client. All times mentioned here assume standard Solid State Disk storage and reasonable network conditions. Actual times may vary based on hardware, network conditions, and chain state. Attestation impact directly correlates with sync time plus small overhead for client initialization.

The sync process might **require high resources of your hardware**, do not worry if your CPU temperature reaches 100ºC or your CPU usage is +90%, it is normal during the sync process. It would be problematic only if it stays at these levels for several days. In this case check maintenance practices in this documentation. 

### Consensus client switch

The current consensus clients supported in Dappnode are the following: 
Ethereum consensus clients: Lighthouse, Teku, Lodestar Nimbus and Prysm.
Gnosis consensus clients: Lighthouse, Teku, Lodestar and Nimbus 
Lukso consensus clients: Teku and Prysm

Switching consensus clients is a **quick action and the attestation impact is limited**. Consensus clients do not require a lot of space to run properly. 

| Sync time | Attestattion impact | Disk space required |
| -------- | -------- | -------- |
| 10 min   | 30 min   | +30 GB    |

All consensus clients have a **sync time of 5-10 minutes** max thanks to checkpoint sync.
Checkpoint sync helps to connect to the current state of the blockchain getting the data from an external node, so it does not need to start from scratch, reducing the time of synchronization significantly. 

It is always advisable to switch to a new consensus client from scratch (without existent volumes) to trigger the checkpoint sync. Otherwise, if you have a client with previous blockchain data, it will require more time to sync. 

After sync time completes, it has an extra downtime of 1-3 epochs (6 - 18 minutes). This is the “doppelganger” check, an extra protection measure to avoid slashing.

### Blockchains sync time & recommended disk space
The sync time varies depending on the blockchain selected to run your validators. 

| Blockchain | Sync time | Disk space recommended |
| ---------- | --------- | ---------------------- |
| Ethereum   | 12-48 h   | +1.5 TB                |
| Gnosis     | 8-16 h    | +0.5 TB                |
|    Lukso        |    4-12 h       |   +0.5 TB   |
| Hoodi      | 2-4 h    | +0.5 TB                |


### Best Practices

**Plan Your Switch**: Choose a time with low network activity for switching to minimize the impact of missed attestations.


**Don't Delete Old Client Data Immediately:** Keep the data from your old client for a few days in case you need to switch back. If you want to keep the new client in the long term, we recommend deleting the previous client before installing the new one to ensure enough disk space 


**Monitor Synchronization:** Use Dappnode's dashboard to monitor the synchronization progress of your new client.


**Verify Client Health:** After switching, verify that your new client is properly connected to the network and producing attestations in the package logs. 


**Check Logs:** Regularly check the logs of your new client to ensure there are no errors or issues.


**Update API Connections:** If you have any external tools connecting to your node, update their connection settings to point to the new client.


**Enable Dappnode notifications:** Push notifications can help to track the status of your validators and clients. 


### Troubleshooting
Common Issues and Solutions

**New Client Won't Start**


- Check disk space availability (Go to Dashboard)
- Verify port conflicts aren't occurring (Go to Support tab/ Ports)
- Ensure JWT token is correctly configured (Go to Package info)


**Synchronization Takes Too Long**


- Check your internet connection speed 
- Verify sufficient disk I/O performance (use SSD)
- Restart client in the package to refresh peer connections
- Delete the volumes of the client package to trigger Checkpoint sync


**Missing Attestations After Switch**


- Verify execution and consensus clients are properly connected
- Check that validator keys were correctly imported 
- Ensure the beacon chain is fully synced


**API Connection Errors**


- Verify API endpoints are correctly configured
- Check firewall settings
- Ensure proper authentication is configured


**High Resource Usage**

- Different clients have different resource profiles
- Hardware Maintenance (cleaning dust…)
- Consider hardware upgrades if consistently overloaded


If you are experiencing a different problem, you can:
- Ask the community in the support channel in Discord.
- Subscribe to **Dappnode Premium** to be guided by a Dappnode team member personally.