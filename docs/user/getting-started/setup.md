> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Setup

Setting up Dappnode is a straightforward process. This guide will walk you through configuring your Dappnode for the first time.

![setup-1](/img/setup-1.png)

## Choose Repository Source

![setup-2](/img/setup-2.png)

Before you dive in, choose the source from which Dappnode retrieves its data:

- **Remote Node**: Connect your Dappnode to an external Ethereum node. This option is lightweight, as you won't need to host the blockchain data on your machine.

- **Full Node**: Have your Dappnode host the complete Ethereum blockchain. This ensures maximum decentralization and independence, but it requires more storage and bandwidth.

:::info Why is this important?
Dappnode uses smart contracts to publish the dapps that are accessible in the dappstore. For this reason, Dappnode needs access to an Ethereum node to read the contents of said smart contract. Choosing between a remote and a full node directly impacts how decentralized your setup is.

**Decentralization Benefits**: By relying less on third-party services, you enhance security, reduce points of failure, and support the Ethereum network's robustness, but it might not work for you if you have limited storage or bandwidth.
:::

## Enable/Disable System Auto Updates

Dappnode comes with an auto-update feature. This means it will automatically update itself with new releases, ensuring you always have the latest and most secure version. Activate auto-updates to lessen maintenance and better guard against vulnerabilities.

![setup-3](/img/setup-3.png)

:::tip
We **strongly** recommend activating auto-updates to ensure your Dappnode is always up to date with the latest versions.
:::

## Enable system notifications

Dappnode can send you notifications about important events, such as your dappnode being offline or high CPU usage. This is a great way to stay on top of your Dappnode's health and performance.

![setup-4](/img/setup-4.png)

## Change Host User Password

Beneath the hood, Dappnode operates on a Linux framework, protected by a password, which will be needed to access your [Dappnode's terminal](/docs/user/access-your-dappnode/terminal) To amplify your Dappnode's defense:

1. **Change** the **default Linux** machine **password** for user `dappnode`.
2. Choose a **strong, unique password** that's not easily guessable.
3. Remember to **store this password in a secure location**. If you lose access to this password, you could be locked out of your Dappnode.

:::caution
Always save and backup your password. This is crucial for ensuring uninterrupted access to your Dappnode.
:::

![setup-4](/img/setup-5.png)

## All Set!

Congratulations! Your Dappnode is now configured and ready for use. Dive into the world of decentralized applications and enjoy the self-hosted, decentralized internet experience.

With these steps, your Dappnode should be up and running efficiently. Always refer to the official Dappnode documentation or community for any further queries or support.

:::info Keep your Dappnode up to date
Remember to regularly check for updates and best practices to ensure your Dappnode stays secure and efficient.
:::

![setup-5](/img/setup-6.png)
