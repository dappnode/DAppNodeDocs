# Ethereum repository

Dappnode uses smart contracts to distribute the dappnode packages available in the Dappstore. The smart contracts are deployed in the Ethereum blockchain and the Dappnode client interacts with them to get the list of available packages and to download them. Your dappnode will need a connection to an Ethereum node in order to read the smart contracts and download the packages. There are two ways to establish this connection:

- **Full Node**: By running a Full Node, you host the Ethereum blockchain. This ensures maximum control and independence, but requires syncing and maintaining the blockchain's latest state.
  
- **Remote Node**: Using a Remote Node means relying on an external Ethereum node. It's less resource-intensive but demands trust in the node operator.


:::tip
To configure your dappnode Ethereum repository go to http://my.dappnode/repository/eth
:::

## Run your own Ethereum node

When choosing to run your own Ethereum node, you will need to select:

1. **Execution client**
2. **Consensus client**

Moreover, it is **highly recommended to enable** these additional options:

3. **Use remote during syncing or errors**: If enabled, this will auto-switch from your Local node to the Dappnode Remote node under certain conditions. For instance, if your Ethereum node is syncing or if it's unavailable for some reason. Activating this option ensures uninterrupted access to the Dappnode smart contracts even if there's an issue with your Local node.

4. **Use checkpointsync**: By enabling this, your consensus client will utilize a checkpoint to fast-track the syncing of the Ethereum blockchain, making the process much quicker quicker.

:::caution
Making changes here will also modify selections in the [Stakers](http://my.dappnode/stakers) tab.
:::

![ethereum-remote-full](/img/repository-eth-full.png)

:::caution
Running your own Ethereum node requires a lot of resources. You will need a powerful machine with a lot of storage and a good internet connection. If you don't have a powerful machine, you can use a remote Ethereum node.
:::

## Use a remote Ethereum node

You can use a remote Ethereum node to connect to the Ethereum network. You will need to trust the node operator.

![ethereum-remote-node](/img/repository-eth-remote.png)

:::note
At the moment, we only support Dappnode official Ethereum node. We are working on a way to allow users to add their own remote Ethereum nodes RPC endpoints. See https://github.com/dappnode/DNP_DAPPMANAGER/issues/1245
:::

<hr />

### Troubleshooting

<details>
  <summary><b>Why did my clients change in the Full Node Repository selection?</b></summary>

  At the moment, Dappnode only supports running one Ethereum mainnet node. If you change your selection in the [Stakers](http://my.dappnode/stakers/ethereum) menu, it will also change in the [Repository](http://my.dappnode/repository/eth) menu.
</details>
