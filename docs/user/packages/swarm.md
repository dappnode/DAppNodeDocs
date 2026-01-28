---
llm_description: "Guide to installing and running a Swarm Bee node on Dappnode for decentralized storage."
---

# Guide to Installing Bee Node on Dappnode

## Introduction to Swarm
Swarm is a decentralized data storage and distribution technology. Ready to power the next generation of censorship-resistant, unstoppable, serverless dApps.

Node operators can [stake BZZ](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#stake-your-node-with-bee) to participate in the redistribution of funds, allowing Bee node operators to receive BZZ in return for providing storage and bandwidth.

Node operators are rewarded with BZZ tokens, the native ERC-20 token.

Beyond earning rewards, the Bee node serves as your personalized gateway to the Swarm network, offering you interactive access to content and dApps hosted on Swarm. The app enables you to:

- Securely store (upload and download) files on Swarm's decentralized storage.
- Share files privately and securely with others.
- Host and manage HTML websites conveniently.

## Introduction to Dappnode
DappNode is a decentralized platform that serves as critical infrastructure for launching and managing decentralized applications (dApps) with an essence of providing users with self-sovereign data management and secure, uncensorable application interfaces.

Node operators on DappNode can gain enhanced control over their participation in various blockchain networks and ensure that their activities, whether it be validating transactions, participating in consensus mechanisms, or supporting network security, are conducted in a seamless, autonomous manner.

The unique DappNode ecosystem ensures:

- Seamless deployment and management of decentralized applications and nodes.
- Enhanced user control over data and privacy.
- Autonomous and secure participation in various blockchain networks.
- Simplification of running blockchain nodes, reducing technical barriers for participants.

## Gnosis Chain
Swarm uses [Gnosis Chain](https://www.gnosis.io/), formerly known as xDai, for managing its incentives.

Therefore, the Swarm Bee client necessitates a connection to the Gnosis Chain. As such, we recommend installing Nethermind (direct Dappnode install link) as your RPC endpoint.

## Installing a Bee node
Step 1: Navigate to the package installer — [Install Swarm](http://my.dappnode/installer/public/swarm.public.dappnode.eth)(direct Dappnode install link). Click Install to initiate the installation.

Step 2: Setup optional parameters:
- **Swap RPC Endpoint (Gnosis Chain)** — if you installed Nethermind and are running your own node, you can leave the default settings. Otherwise, if you use an external RPC endpoint, this is where you should set it.
- **ENS resolver RPC (Ethereum Mainnet)** — As bee can resolve ENS (a special type of blockchain name), it requires an Ethereum mainnet RPC endpoint. Install links are available for a variety of clients, or you can use an Infura RPC endpoint, or alternatively leave it blank to disable the ENS resolver.
- **Initial chequebook deposit (xBZZ)** — is the amount of xBZZ the bee node must have deposited to its address in order to deploy the chequebook. You have the option to set this to 0 and deposit BZZ into the chequebook later via the UI.
- **Welcome message** — some graffiti that you can admire at Swarm Scan or if you happen to be peering through the logs
- **Full node mode** — must be set to true or false, in order to stake and participate in storage incentives, and subsequently be rewarded, it should be set to true
- **Storage data mountpoint** — for advanced users; recommended to leave at default.

### Engage in Storage Incentives by Staking Your BZZ
1. Import your gift code into Metamask or another web3 wallet on Gnosis chain. Remember, the gift code is a private key that holds 12 BZZ and 0.12xDAI.
2. Transfer funds to your Node wallet address, which can be found in the logs or at Swarm UI/Account/[Wallet](http://dashboard.swarm.public.dappnode/#/account/wallet).
3. Visit Account/[Staking](http://dashboard.swarm.public.dappnode/#/account/staking).
4. Click on 'Stake', input an amount of 10 BZZ, and then press the 'Stake' button.