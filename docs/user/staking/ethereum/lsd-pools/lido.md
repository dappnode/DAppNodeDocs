# Lido

---

### **Lido Overview**

Lido is a liquid staking solution for Ethereum. It allows users to stake their ETH while participating in on-chain activities, such as lending, to compound returns. Lido provides a seamless and secure staking experience for users and **node operators**. A Node Operator contributes to this module by running infrastructure. The module was designed for solo stakers and community stakers, providing them with the unique ability of becoming Ethereum validator with way less than 32 ETH and one of the friendliest UX possible, but may be utilized by anyone, including professional operators.

**Where dappnode comes in?** Dappnode provides an easy-to-use interface for setting up a node operator for Lido. The process involves creating keystores, setting up the infrastructure, uploading the keystores, and depositing to create your node operator.

---

### **Package Key Features**

- **DAO Governance**: Governed by a DAO to ensure decentralization and security.
- **Community Staking Module**: Enables the community to participate as node operators staking on behalf of the DAO with way less than the 32 ETH required for solo staking.

---

### **First Steps to create a Node Operator in Dappnode**

1. **Create the Keystores**: Generate keystores for the desired number of validators (each keystore equals 32 ETH). The keystores must be created with the withdrawal credential of Lido:
    - Holesky: `0xE73a3602b99f1f913e72F8bdcBC235e206794Ac8`.
    - Ethereum: comming soon.
    - Use official tools like the [Wagyu Key Gen Tool](https://wagyu.gg/) to create the keystores. This step is crucial and mandatory.

2. **Set up the Infrastructure**:
    - Navigate to [Dappnode Staking for Ethereum](http://my.dappnode/staking/ethereum) or [Dappnode Staking for Holesky](http://my.dappnode/staking/holesky).
    - Select your desired execution and consensus clients.
    - Choose Web3signer to upload the keystores.
    - Configure MEV Boost with as many relays as possible. 

    :::warning
    It is mandatory to choose at least one relay to ensure the node operator does not propose vanila blocks. When uploading the keystores with tag "lido" this requirement will be automatically checked.
    :::

3. **Upload the Keystores**:
    - Go to the Web3signer UI for [Ethereum](http://brain.web3signer.dappnode) or [Holesky](http://brain.web3signer-holesky.dappnode).
    - Upload the keystores and tag them with "lido".
    - The fee recipient will be automatically set to `0xE73a3602b99f1f913e72F8bdcBC235e206794Ac8` for Holesky and is not editable.

4. **Deposit to Create Your Node Operator**:
    - Navigate to the [Lido Deposit UI](https://csm-devnet.vercel.app/) (or do it locally directly from your dappnode installing [this package](http://my.dappnode/installer/dnp/)!) and complete the deposit process.
    - Your node operator setup is now complete!
  
5. **Manage Your Node Operator performance in Dappnode (coming soon)**: dappnode will provide a dashboard to monitor the performance of your node operator by aggregating data from the operator itself and the dappnode host machine, allowing Node operators to monitor their performance and take action if needed to ensure the best possible performance, acting as professional operators.

---

### **FAQs**

<details>
<summary>Where can I track the performance of validator as Node Operator?</summary>
Dappnode will provide you a UI in form of a dappnode pacakge where you will be able to track the performance of your validator as Node Operator taking advantage of the data provided by the operator itself and the dappnode host machine.
</details>

---

Refer to the Lido documentation for the Community Staking Module for more details:

- [Lido Community Staking Overview](https://blog.lido.fi/lido-community-staking-an-overview/)
- [Lido Community Staking Module](https://operatorportal.lido.fi/modules/community-staking-module#block-d3ad2b2bd3994a06b19dccc0794ac8d6)
