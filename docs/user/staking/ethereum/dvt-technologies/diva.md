---
llm_description: "Run a Diva DVT operator node for liquid staking with distributed validator technology."
---

# Diva package for Dappnode

---

### **Introduction**

Diva is an Ethereum Liquid Staking protocol powered by Distributed Validator Technology (DVT). It extends Ethereum's Proof of Stake providing new functionality for Stakers and Operators:

- Liquid Stakers receive divETH, a Liquid Staking Token which generates Ethereum Staking Rewards.
- Operators run a Distributed Validation node to fulfill staking duties and earn additional Operator Rewards.

This package allows you to run a Diva Operator node, and it is available for the [Holesky Testnet](http://my.dappnode/installer/public/diva-holesky.public.dappnode.eth). The Ethereum mainnet version of this package is still undergoing testing and will be available in the DAppStore soon.

### **Requirements**
1. The first thing you'll need to do is set up a fully-synced node. This can be done through the Stakers Menu in Dappnode by selecting:
- 1 Execution Client (Geth, Besu, Erigon or Nethermind)
- 1 Consensus Client (Prysm, Lighhouse, Lodestar, Teku or Nimbus)
- MEV Boost (optional)

2. Installing the Diva package for Dappnode. This can be done by visiting the [DAppStore](http://my.dappnode/installer/dnp) in the Dappnode UI. You'll be asked to set two passwords when going through the installation process, as well as your operator's address and Discord handle (for testnet purposes).

![Diva config tab](/img/diva-config1.png)

### **Registering a Dappnode Diva Operator**
After successfully installing the Diva package, you'll need to access the package's interface by clicking on UI. This will take you to the Diva app where you'll need to connect your wallet to register your Diva node as an operator. You can register multiple operators using the same wallet.

![Diva wizard](/img/diva-config2.png)

:::info
The wallet address used to register the operator is the only address that will hold management permissions for it, so make sure you keep it safe!
:::

### **Monitoring your Diva nodes**
[Divascan](https://divascan.io) is a tool developed to monitor Diva nodes and operators. You can enter your operator address to get information on the validators' performances. You can also get more information on the Diva protocol.
