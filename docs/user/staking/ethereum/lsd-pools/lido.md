# Lido

---

### **Lido Overview**

Lido is a **liquid staking** solution for Ethereum that addresses the liquidity issues of traditional staking. Instead of locking up assets and losing access to them, users can stake through Lido and receive liquid tokens. These tokens retain the value of the staked assets and can be used elsewhere while still earning staking rewards.

Ethereum plays a significant role in the Lido ecosystem, with more than [9 million ETH](https://lido.fi/ethereum) staked through the platform. Lido stakes these assets on behalf of the users, who receive stETH in return. A set of permissioned **node operators** are responsible for managing the staking infrastructure.

Recently, Lido introduced the [**Community Staking Module** (CSM)](https://csm.testnet.fi/?ref=dappnode), the first Lido Ethereum module with a **permissionless entry**. By first providing an ETH-based bond, anyone can now become a node operator by running validators in the Lido protocol. The module was designed for solo stakers and community stakers, providing them with the unique ability of becoming Ethereum validator with way less than 32 ETH and one of the friendliest UX possible, but may be utilized by anyone, including professional operators.

:::info
Becoming a Lido Node Operator is recommended for users with some experience in running validators. The process requires a basic understanding of the Ethereum network and the Lido protocol. If you are new to staking, we recommend setting up a validator on the Testnet first to familiarize yourself with the process, see [Staking on the Ethereum Testnet](/docs/user/staking/ethereum/solo/holesky.md).
:::

---

### **Become a Lido Node Operator with Dappnode**

**Dappnode** provides an easy-to-use and intuitive interface for most of the infrastructure needed to become a Lido Node Operator. The process is straightforward and requires only a few steps to set up a node operator and start earning rewards.

---

<!-- ---

### **Package Key Features**

- **DAO Governance**: Governed by a DAO to ensure decentralization and security.
- **Community Staking Module**: Enables the community to participate as node operators staking on behalf of the DAO with way less than the 32 ETH required for solo staking.

--- -->

### **First Steps to create a Node Operator in Dappnode**

1. **Create the Keystores & Deposit Data**: In order to run a validator, you need to generate the necessary keystores and deposit data. The keystores must be created with the withdrawal credential of Lido:

   - Holesky: `0xF0179dEC45a37423EAD4FaD5fCb136197872EAd9`.
   - Ethereum: _coming soon_.
   - We recommend using official tools like the [Wagyu Key Gen Tool](https://wagyu.gg/) to create the keystores. This step is crucial and mandatory.

   The validator Keystores will be used to run the validators on the Ethereum network, while the deposit data will be used to register the validators in the Lido protocol.

2. **Set up the Infrastructure**:

   - Navigate to [Dappnode Staking for Ethereum](http://my.dappnode/stakers/ethereum) or [Dappnode Staking for Holesky](http://my.dappnode/stakers/holesky).
   - Select your desired execution and consensus clients.
   - Choose Web3signer to upload the keystores.
   - Configure MEV Boost with as many relays as possible.

   :::warning
   It is mandatory to choose at least one relay to ensure the node operator does not propose vanilla blocks. When uploading the keystores with the "Lido" tag, this requirement will be automatically checked. As a Lido Node Operator, it is your responsibility to ensure that your infrastructure is properly using MEV Boost.
   :::

3. **Upload the Keystores in your Dappnode**:

   - Go to the Web3signer UI for [Ethereum](http://brain.web3signer.dappnode) or [Holesky](http://brain.web3signer-holesky.dappnode).
   - Upload the keystores and tag them with "Lido".
   - The fee recipient will be automatically set to `0xE73a3602b99f1f913e72F8bdcBC235e206794Ac8` for Holesky. It is not editable.

   :::danger
   Do not edit the fee recipient address. Doing so will result in penalties.
   :::

   :::caution
   Double-check that your Lido keystores are tagged correctly. This is crucial to ensure that the node operator is properly set up, and has the correct fee recipient set.
   :::

4. **Register as a Lido Node Operator & your validators**:

   - Navigate to the [Lido Deposit UI](https://csm.testnet.fi/?ref=dappnode) and complete the deposit process.
   - Your node operator setup is now complete!

   <!-- (or do it locally directly from your dappnode installing [this package](http://my.dappnode/installer/dnp/)!) -->

5. **Manage Your Node Operator performance in Dappnode (coming soon)**: Dappnode will provide a dashboard to monitor the performance of your node operator by aggregating data from the operator itself and the dappnode host machine, allowing Node operators to monitor their performance and take action if needed to ensure the best possible performance, acting as professional operators.

---

### **FAQs**

<details>
   <summary><b>Where can I track the performance of validator as Node Operator?</b></summary>
   
   Dappnode will provide you a UI in form of a dappnode package where you will be able to track the performance of your validator as Node Operator taking advantage of the data provided by the operator itself and the dappnode host machine.
</details>

---

Refer to the Lido documentation for the Community Staking Module for more details:

- [Lido Community Staking Overview](https://blog.lido.fi/lido-community-staking-an-overview/)
- [Lido Community Staking Module](https://operatorportal.lido.fi/modules/community-staking-module#block-d3ad2b2bd3994a06b19dccc0794ac8d6)
