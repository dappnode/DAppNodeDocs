> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Ethereum repository

Dappnode uses smart contracts to distribute Dappnode's packages available in the Dappstore and the Stakers tab. These smart contracts are deployed on the Ethereum blockchain, and the execution client interacts with them to get the list of available packages and download them.

Your Dappnode will therefore need access to an Ethereum node in order to read the smart contracts and fetch the packages.

## How the connection works

Dappnode automatically manages the connection between **local** and **remote** Ethereum nodes:

- If you have a **healthy Ethereum node** running locally, Dappnode will use it.
- If your local node is **syncing, unavailable, or unhealthy**, Dappnode will automatically fall back to a **remote node** to ensure uninterrupted access to the packages.

This means you no longer need to manually toggle between local and remote. Dappnode takes care of it for you.

## Overwrite Dappnode's remote Ethereum node

When remote mode is used, by default Dappnode connects to the **official Dappnode Ethereum node**.

If desired, you can **overwrite the RPC endpoint** by configuring it in the Dappmanager’s package settings:  
[http://my.dappnode/packages/system/dappmanager.dnp.dappnode.eth/config](http://my.dappnode/packages/system/dappmanager.dnp.dappnode.eth/config)
![Overwrite remote ethereum RPC](/img/overwrite-remote-eth-rpc.png)
