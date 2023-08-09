# Ethereum repository

Dappnode uses smart contracts to distribute the dappnode packages available in the Dappstore. The smart contracts are deployed in the Ethereum blockchain and the Dappnode client interacts with them to get the list of available packages and to download them. Your dappnode will need a connection to an Ethereum node in order to read the smart contracts and download the packages.

You can choose how to connect to the Ethereum network: you can run your own Ethereum node or you can use a remote node. If you run your own Ethereum node, you will need to sync the blockchain and keep it up to date. If you use a remote node, you will need to trust the node operator.

:::tip
To configure your dappnode Ethereum repository go to http://my.dappnode/repository/ethereum
:::

## Run your own Ethereum node

You can run your own Ethereum node to connect to the Ethereum network. You will need to sync the blockchain and keep it up to date. This is the recommended option for those users who want to have full control over their dappnode.

If you choose to run your own Ethereum node you have the following options:

- Select the Execution client
- Select the Consensus client
- Use remote during syncing or errors: This option, when enabled, will automatically switch from your Local node to the Dappnode Remote node if your Ethereum node is unreachable or unavailable because it's still syncing or is unavailable for some other reason. This option allows you to maintain a connection to the Dappnode smart contracts in case your Local node cannot, which can help keep your Dappnode updated in case theres some issue with your Local node.
- Use checkpointsync: This option, when enabled, will use a checkpoint to sync the Ethereum blockchain. This will speed up the syncing process.

![ethereum-remote-full](/img/repository-eth-full.png)

:::caution
Running your own Ethereum node requires a lot of resources. You will need a powerful machine with a lot of storage and a good internet connection. If you don't have a powerful machine, you can use a remote Ethereum node.
:::

## Use a remote Ethereum node

You can use a remote Ethereum node to connect to the Ethereum network. You will need to trust the node operator.

![ethereum-remote-node](/img/repository-eth-remote.png)

:::note
ATM we only support dappnode official Ethereum node. We are working on a way to allow users to add their own remote Ethereum nodes RPC endpoints. See https://github.com/dappnode/DNP_DAPPMANAGER/issues/1245
:::

<hr />

### Troubleshooting

<details>
  <summary> </summary>
</details>
