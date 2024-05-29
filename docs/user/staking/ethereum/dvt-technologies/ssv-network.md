# SSV Distributed Validator package for Dappnode

---

### **Introduction**

SSV is a network of validators that use a decentralized network of operators to run their validators. This package allows you to run an SSV Operator Node. The package is available for [Ethereum Mainnet](http://my.dappnode/installer/dnp/ssv.dnp.dappnode.eth) and the [Holesky Testnet](http://my.dappnode/installer/dnp/ssv-holesky.dnp.dappnode.eth).

A Distributed Validator is one or more logical 32 ETH validators being operated across a number of nodes that are all online simultaneously and that all control a subset of each validator’s private keys. Dividing a validator across a group of nodes allows for fault tolerant validators that can remain online and validating despite a subset of its nodes experiencing an outage.
The SSV network allows both users and operators to diversify staking risks, optimize performance, and promote decentralization across the Ethereum consensus layer.

### **Requirements**
1. The first thing you'll need to do is set up a fully-synced node. This can be don through the Stakers Menu in Dappnode by selecting:
- 1 Execution Client (Geth, Besu, Erigon or Nethermind)
- 1 Consensus Client (Prysm, Lighhouse, Lodestar, Teku or Nimbus)
- MEV Boost (optional)

2. Installing the SSV package for Dappnode. This can be done by visiting the [DAppStore](http://my.dappnode/installer/dnp) in the Dappnode UI and installing the SSV or SSV Holesky package.

3. Plus, you'll need to get the following information:
- **Operator public key**: Shown in your SSV package's Info tab after installing it.
- **Operator fee**: The fee charged by the operator per each managed validator. You can find [more info about this](https://docs.ssv.network/learn/protocol-overview/tokenomics/fees) in the SSV documentation. Keep in mind this fee can be changed later on if needed.

### **Getting Started with SSV - Registering as an Operator**
After successfully installing the SSV package, an operator must register it to the SSV Network in order to be discoverable by validators. You'll be able to do so in the SSV network [web app](https://app.ssv.network).

:::info
The wallet address used to register the operator is the only address that will hold management permissions for it, so make sure you keep it safe!
:::

1. Make sure to connect your Web3 wallet with the WebApp, and that the address corresponds with the one you want to manage your Operators with.

2. If you are connecting for the first time, you should see a screen like the image below. Select _Join as Operator_.
![SSV-Launchpad1](/img/registering_operator_0.png)

3. In the following screen, select _Register Operator_.
![SSV-Launchpad2](/img/registering_operator_2.png)

4. The next screen will ask you to input the Operator's public key and provide a confirmation of the Operator owner address. As mentioned earlier, this Operator's public key is shown in your SSV package's Info tab after installing it.
![Dappnode-SSV1](/img/dappnode-ssv1.png)

:::caution
Please verify once more that the owner address correspond to the wallet address you want to manage your operators with.
:::

Click _Next_ when ready.

5. In the following screen you'll be asked to set the Operator Fee, which is the fee charged by the operator per each managed validator. You can find [more info about this](https://docs.ssv.network/learn/protocol-overview/tokenomics/fees) in the SSV documentation. Keep in mind this fee can be changed later on if needed.

Enter a number and click _Next_ when ready.
![SSV-Launchpad4](/img/registering_operator_4.png)

6. This confirmation screen presents a recap of the information input so far. Double check everything and click _Register Operator_ when ready. This will generate a blockchain transaction you'll need to confirm to complete the Operator registration.
![SSV-Launchpad5](/img/registering_operator_5.png)

7. Once the transacion goes through your Operator is successfully registered, and stakers could now choose it to operate their validators.
![SSV-Launchpad7](/img/registering_operator_7.png)

### **Distributing a Validator with SSV**

:::info
In order to create a DV, it's important for all participants to have a successfully synced Dappnode before the Key Generation event.
:::

**PENDING**

:::tip It's important that you understand that the requirements of the DV node runner are not the same as a Solo Stakers'. This technology facilitates the creation of Distributed Validators between a group of independent people. This means you are placing significant trust in the participants you'll run this Distributed Validator with.
You need to ensure every operator in the Cluster is competent and trustworthy before sharing this responsibility. Negligence on behalf of others in your group can put you at risk, however a minimum amount of these nodes should be synced at all times in order to keep the validator running. tip::::

If you have any questions, don't hesitate to drop by the [Dappnode Discord server](https://discord.gg/dappnode).
