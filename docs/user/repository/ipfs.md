# IPFS repository

Dappnode uses IPFS to distribute the dappnode packages available in the Dappstore. Your dappnode will need a connection to an IPFS node in order to download the packages. You can choose how to connect to the IPFS network: you can run your own IPFS node or you can use a remote node. If you run your own IPFS node. If you use a remote node, you will need to trust the node operator.

:::tip
To configure your dappnode IPFS repository go to http://my.dappnode/repository/ipfs
:::

## Run your own IPFS node

You can run your own IPFS node to connect to the IPFS network. This is the recommended option for those users who want to have full control over their dappnode. Dappnode comes with an IPFS node preinstalled and configured. You can access the IPFS webui at http://ipfs.dappnode:5001/webui

![ipfs-remote-local](/img/repository-ipfs-local.png)

:::caution
Running your own IPFS node may affect your internet connection. If you don't want to run your own IPFS node, you can use a remote IPFS node. Consider stopping your IPFS node if you are not using it at http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info
:::

## Use a remote IPFS node

You can use a remote IPFS node gateway to connect to the IPFS network. You will need to trust the node operator. Dappnode provides an official IPFS gateway (https://gateway.ipfs.dappnode.io) but you can choose any other IPFS gateway.

![ipfs-remote-node](/img/repository-ipfs-remote.png)

:::info
Choose an IPFS gateway available at https://ipfs.github.io/public-gateway-checker/
:::

### IPFS gateways and security

Connecting to IPFS remote gateways could enable security risks. For example, the gateway could attempt to serve malicious content to the user. We mitigate this risk by verifying the content downladed with [CID technology](https://docs.ipfs.io/concepts/content-addressing/).

If the DAppNode IPFS gateway is not available (we make no uptime guarantees and we offer it on a best-effort basis) the user can set another IPFS gateway in the input field, check out all the [IPFS gateways available](https://ipfs.github.io/public-gateway-checker/). DAppNode recommends using them as a last resort.

<hr />

### Troubleshooting

<details>
  <summary>Im running local IPFS and Im having issues, what can I do?</summary>
This may be due to different reasons:

- Poor internet connection: in this case you can try switching your IPFS node mode to lowpower mode at http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/config
- Your local IPFS node is full of space: remode your IPFS node volume data by clicking on "Remove volumes" here http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info
- Your local IPFS node does not have added dappnode IPFS peer: add it here http://my.dappnode/system/add-ipfs-peer/%2Fdns4%2Fipfs.dappnode.io%2Ftcp%2F4001%2Fipfs%2FQmfB6dT5zxUq1BXiXisgcZKYkvjywdDYBK5keRaqDKH633

If none of this works you can always switch to remote IPFS mode at http://my.dappnode/repository/ipfs

</details>

<details>
  <summary></summary>
</details>
