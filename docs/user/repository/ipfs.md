# IPFS repository

Dappnode leverages IPFS for distributing packages available in the Dappstore. To download these packages, your Dappnode requires a connection to an IPFS node. When it comes to connecting to the IPFS network, you have two primary choices:

- **Run Your Own IPFS Node**: By opting for this, you maintain full control, ensuring that you directly access the distributed packages without intermediaries. However, it might require some disk space.
  
- **Use a Remote Node**: This is a convenient option, but it comes with the caveat of needing to trust the remote node operator. It is really useful in case your own IPFS node becomes unreliable or unavailable.

:::tip
To configure your dappnode IPFS repository go to http://my.dappnode/repository/ipfs
:::

## Run your own IPFS node

You can run your own IPFS node to connect to the IPFS network. This is the recommended option for those users who want to have full control over their dappnode. Dappnode comes with an IPFS node preinstalled and configured. You can access the [IPFS Web UI](http://ipfs.dappnode:5001/webui) while connected to your Dappnode.

![ipfs-remote-local](/img/repository-ipfs-local.png)

:::caution
Running your own IPFS node may affect your internet connection. If you don't want to run your own IPFS node, you can use a remote IPFS node. Consider stopping your IPFS node if you are not using it at [IPFS Package](http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info)
:::

## Use a remote IPFS node

You can use a remote IPFS node gateway to connect to the IPFS network. You will need to trust the node operator. Dappnode provides an [Official IPFS gateway](https://gateway.ipfs.dappnode.io) by default, but you can choose any other IPFS gateway.

![ipfs-remote-node](/img/repository-ipfs-remote.png)

:::note IPFS gateways and security

Connecting to IPFS remote gateways could entail security risks. For example, the gateway could attempt to serve malicious content to the user. We mitigate this risk by verifying the content downladed with [CID technology](https://docs.ipfs.io/concepts/content-addressing/).

If the Dappnode IPFS gateway is not available (we make no uptime guarantees and we offer it on a best-effort basis) the user can set another IPFS gateway in the input field as last resort. Check out all the [IPFS gateways available](https://ipfs.github.io/public-gateway-checker/)
:::

<hr />

### Troubleshooting

<details>
  <summary><b>I'm running local IPFS and I'm having issues, what can I do?</b></summary>
This may be due to different reasons:

- **Poor internet connection**: in this case you can try switching your IPFS node mode to lowpower mode at http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/config
- **Your local IPFS node space is full**: remode your IPFS node volume data by clicking on "Remove volumes" here http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info
- **Dappnode Official Gateway has not been added as peer to your local IPFS**. Add it by clicking [here](http://my.dappnode/system/add-ipfs-peer/%2Fdns4%2Fipfs.dappnode.io%2Ftcp%2F4001%2Fipfs%2FQmfB6dT5zxUq1BXiXisgcZKYkvjywdDYBK5keRaqDKH633)

If none of this works you can always **switch to remote IPFS mode** at http://my.dappnode/repository/ipfs

</details>
