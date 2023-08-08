# Setup

![setup-1](/img/setup-1.png)

Setting up DAppNode is a straightforward process. This guide will walk you through configuring your DAppNode for the first time.

## Choose Repository Source

![setup-2](/img/setup-2.png)

To start with, you need to decide the source from which your DAppNode fetches data.

Remote Node: This option lets your DAppNode connect to a remote Ethereum node. It's a lighter choice as you won't be hosting the blockchain data on your machine.

Full Node: Opting for a Full Node means your DAppNode will host the entire Ethereum blockchain. This ensures maximum decentralization and independence, but it requires more storage and bandwidth.

:::info
Why is this important?
DAppNode uses smart contracts to publish DApps. For this reason, DAppNode needs access to an Ethereum node to read the contents of the smart contract. Choosing between a remote and a full node directly impacts how decentralized your setup is.

Decentralization Benefits: By relying less on third-party services, you enhance security, reduce points of failure, and support the Ethereum network's robustness.
:::

## System Auto Updates

DAppNode offers a feature where it automatically updates itself when new releases are available. This ensures that you always run the latest and safest version of DAppNode. By enabling auto-updates, you'll reduce the maintenance time and stay ahead of potential vulnerabilities.

![setup-3](/img/setup-3.png)

## Change Host User Password

The DAppNode runs on a Linux machine, and like any computer, it's secured with a password. To bolster the security of your DAppNode:

1. Change the default Linux machine password.
2. Choose a strong, unique password that's not easily guessable.
3. Remember to store this password in a secure location. If you lose access to this password, you could be locked out of your DAppNode.

:::caution
Always save and backup your password. This is crucial for ensuring uninterrupted access to your DAppNode.
:::

![setup-4](/img/setup-4.png)

## All Set! Ready to Go

Congratulations! Your DAppNode is now configured and ready for use. Dive into the world of decentralized applications and enjoy the self-hosted, decentralized internet experience.

Remember to regularly check for updates and best practices to ensure your DAppNode stays secure and efficient.

With these steps, your DAppNode should be up and running efficiently. Always refer to the official DAppNode documentation or community for any further queries or support.

![setup-5](/img/setup-5.png)
