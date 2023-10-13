# How to Connect to My Blockchain Node

When you've set up your Dappnode, you might want to connect various applications to your blockchain node. This process can vary depending on which blockchain you've selected. Below is a guide on how to do this:

## Ethereum Mainnet Node

If you've selected an Ethereum mainnet node in **Repository > Ethereum** or **Stakers > Ethereum**, here's how to connect:

1. The Execution client you have selected will expose its RPC at:

```
http://fullnode.dappnode:8545
```

2. Do note that this domain is only accessible when you're connected to Dappnode either via WiFi or VPN.

3. If you intend to use the RPC externally (i.e., without needing to connect to Dappnode), you'll need to refer to our tutorial on ["How to expose an RPC externally"](link-to-that-tutorial).

## Other Nodes in Stakers tab

For blockchain nodes other than Ethereum mainnet:

1. Identify the specific network for your node, e.g., `lukso`, `gnosis`, or `prater`.

2. The endpoint for these nodes will be:

```
http://<network>.fullnode.dappnode:8545
```

Replace `<network>` with your specific blockchain network name.

3. Ensure that the node is correctly set in **Stakers > `<network>`**.

## Connecting to Metamask

To connect your node to Metamask:

1. You will need to provide the Chain ID of the blockchain you're connecting to.

2. Chain IDs for various blockchains can be found at [Chainlist](https://chainlist.org/).

3. In Metamask, navigate to **Settings > Networks > Add Network**. Input the RPC URL (`http://<network>.fullnode.dappnode:8545`) and the Chain ID from Chainlist.

## Important Reminders

- Your node needs to be fully synced to function correctly. This ensures that the latest state of the blockchain and its transactions are available for your applications.

- Always ensure the safety and privacy of your Dappnode by not unnecessarily exposing ports or services that might be targets for malicious actors.
