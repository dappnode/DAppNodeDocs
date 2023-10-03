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
<summary><b>I can't see the logos of the packages in the Dappstore/Stakers tab. Why?</b></summary>
<p>

This might be related to an issue with IPFS. Try the following solutions:

1. **IPFS Mode**:

   - Navigate to the [repository](http://my.dappnode/repository/ipfs).
   - Toggle between `local` and `remote` IPFS modes to see which one works.

2. **IPFS Package Status**:

   - If your IPFS mode is set to `local`, ensure that the IPFS package is running.
   - Visit [IPFS Package](http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info) to verify its status and click on "Start" if it is stopped.
   - If it's restarting, consider updating the IPFS package to its latest version. Post update, remove its volumes to address any potential database migration issues.

3. **Gateway Validity**:
   - For `remote` IPFS mode, make sure the gateway URL in the [repository](http://my.dappnode/repository/ipfs) is correct.

</p>
</details>

<details>
<summary><b>I'm using local IPFS and encountering issues downloading packages. What should I do?</b></summary>
<p>

This could arise from various factors:

1. **Internet Connection**:

   - Your connection might be unstable. Consider switching your IPFS node mode to `lowpower` by accessing [IPFS config](http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/config).

2. **Disk Space**:

   - Your local IPFS node might be out of storage.
   - Clear the storage by opting for "Remove volumes" at [IPFS package info](http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info).

3. **Dappnode Official Gateway as Peer**:

   - Ensure that the Dappnode Official Gateway is added as a peer to your local IPFS.
   - You can add it directly by clicking [here](http://my.dappnode/system/add-ipfs-peer/%2Fdns4%2Fipfs.dappnode.io%2Ftcp%2F4001%2Fipfs%2FQmfB6dT5zxUq1BXiXisgcZKYkvjywdDYBK5keRaqDKH633).

**Tip**: If these solutions don't resolve the issue, switch to the `remote IPFS mode` at [IPFS repository](http://my.dappnode/repository/ipfs).

</p>
</details>
