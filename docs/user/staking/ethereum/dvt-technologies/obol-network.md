# Obol Distributed Validator package for Dappnode

---

### **Introduction**

The Obol Network, built as a visionary work layer atop Ethereum’s base layer consensus, is committed to enhancing Ethereum’s resiliency and promoting decentralization as it scales. The Obol Network package for Dappnode aims to make it seamless for Dappnode users to integrate and benefit from Obol's Distributed Validator Technology (DVT).

A Distributed Validator is one or more logical 32 ether validators being operated across a number of nodes that are all online simultaneously and that all control a subset of each validator’s private keys. Each of these nodes need to run an Execution client, a Consensus client, a Distributed Validator client, and a Validator client and Key Manager.
The distributed validator clients in these nodes come to consensus on what should be signed before constructing a signature for the validator that will be accepted by the wider Ethereum network. Dividing a validator across a group of nodes allows for fault tolerant validators that can remain online and validating despite a subset of its nodes experiencing an outage.

### **Package Key Features**

1. **Seamless Integration with Dappnode**: With the Obol Distributed Validator package, users can easily set up and operate DVs on their Dappnode utilizing Obol's middleware implementation of Distributed Validator Technology (DVT) to effortlessly operate distributed validator clusters on Dappnode.

2. **User-Friendly Interface**: Obol's Distributed Validator Launchpad is the easiest way to bootstrap a new DV.

3. **Test before Mainnet**: Obol Testnets are included, allowing operators of any size to test their deployment before transitioning to the mainnet Obol Network.

### **First Steps**
In order to create a DV, it's important for the participants to have a successfully synced Dappnode before the Key Generation event.

:::tip It's important that you understand that the requirements of the DV node runner are not the same as a Solo Stakers'. This technology facilitates the creation of Distributed Validators between a group of independent people. This means you are placing significant trust in the participants you'll run this Distributed Validator Cluster with.
You need to ensure every operator in the Cluster is competent and trustworthy before sharing this responsibility. Negligence on behalf of others in your group can put you at risk. however a minimum amount of these nodes should be synced at all times in order to keep the validator running.
:::

Once all participants have synced nodes, you'll need to install the [Obol Distributed Validator Dappnode package](http://my.dappnode/installer/dnp/%2Fipfs%2FQmfFh6YCjwh7b876G2KgYhvwUWyhmfugYDT5W5sTW5Fq53). After Dappnodes are ready, continue by entering Obol's [Distributed Validator Launchpad](https://goerli.launchpad.obol.tech/), connecting your wallet and selecting the option that best fits your DV's distribution and setup.

### **Cluster Configuration**
For creating a new cluster with a group, you'll need the following information from the participant node runners:
- Who the participant nodes are
- Clients every participant is running
- Distribution scheme of validator rewards between participants

The Obol wizard will guide you through this process and you'll need to input the information mentioned above. If you have any questions, don't hesitate to drop by the [Dappnode Discord server](https://discord.gg/dappnode).
