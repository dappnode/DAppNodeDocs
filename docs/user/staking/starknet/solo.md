# 🚀 Starknet Validator Solo Staking Guide

**Starknet** is a Layer 2 network built on Ethereum, designed for scalability and performance using STARK proofs.  
This guide will walk you through the **complete process of becoming a Starknet validator and Solo Staker**, from wallet setup to running your attestation client and validator on DAppNode.

We’ll use **[Ready Wallet](https://www.ready.co/)** and Starknet's block explorer interfaces for all on-chain interactions.

---

## 🛠 Prerequisites

✅ [Ready Wallet](https://www.ready.co/) installed  
✅ Access to a synced Starknet full node (Juno or Pathfinder)  
✅ Minimum STRK balance:

- **Sepolia:** 1 STRK  
- **Mainnet:** 20,000 STRK  

---

## 1️⃣ Create Accounts

We’ll use **three Starknet accounts** in Ready:

- **staker** → Holds your stake  
- **operator** → Runs the validator  
- **rewards** → Receives rewards  

👉 Create them directly in Ready Wallet as _Standard Account_

![Ready wallet create account](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/argent-create-account.png)

---

## 2️⃣ Fund and Deploy the Accounts

- Fund your **staker** and **operator** accounts with the required STRK amount.  

> Remember to add more than the minnimin Staking ammount to cover gass fees.
> On Sepolia, you can use the [Starknet Faucet](https://starknet-faucet.vercel.app).  

- Deploy your **accounts** in Ready Wallet following these steps:  
![account deploy](https://i.imgur.com/LzwWHl0.gif)

---

## 3️⃣ Export your operator address private key

The _starknetstaking_ package needs your **operator** address private key to make the _attestations_.  
You can obtain it from _Ready Wallet_ following these steps:  
![export PK](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/export-pk.gif)

---

## 4️⃣ Approve spending

1. Go to the block explorer STRK token contract [STRK (Sepolia)](https://sepolia.voyager.online/contract/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d#writeContract) or [STRK (Mainnet)](https://sepolia.voyager.online/contract/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d#writeContract)
2. Connect your **staker** Ready Wallet.  
3. In the implementation section, scroll down to the `approve` function (#19)  
4. Click and fill in the data:
   - **spender** → Starknet Staking Contract [Starknet Addresses](https://docs.starknet.io/resources/chain-info/#staking)  
   - **amount** → Amount in FRI (1 STRK = `1000000000000000000`)  
5. Submit the transaction.

![Voyager approve](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/voyager-approve.png)


## 5️⃣ Stake STRK

1. Open the [Staking Contract on Voyager (Sepolia)](https://sepolia.voyager.online/contract/0x03745ab04a431fc02871a139be6b93d9260b0ff3e779ad9c8b377183b23109f1#writeContract) or the [Staking Contract on Voyager (Mainnet)](https://voyager.online/contract/0x00ca1702e64c81d9a07b86bd2c540188d92a2c73cf5cc0e508d949015e7e84a7#writeContract).  
2. Connect your **staker** Ready Wallet.  
3. In the implementation section, scroll down to the `stake` function. (#1)  
4. Click and fill in the calldata:
   - **rewards_address** → Your rewards account  
   - **operational_address** → Your operator account  
   - **amount** → Amount in FRI (1 STRK = `1000000000000000000`)  
5. Submit the transaction.  

📌 **Staking contract addresses:** [Starknet Docs – Staking](https://docs.starknet.io/resources/chain-info/#staking)

![Voyager write contract stake](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/voyager-stake.png)

---

## 6️⃣ Install the Starknet Staking Package on Dappnode

Now that you’ve staked, you need to set up the validator client on your DAppNode.

1. Open your Dappnode UI.  
2. Go to the **DappStore** and search for `starknetstaking`.  
3. Click **Install**.  

During the inatallation process, you will need to instruduce the following info:

- `Operational Address` → The address for the `operator` Account you created via Ready Wallet in step #1
- `Private Key` → The private key from your operator account (exported from Ready Wallet in step #3)

![Dappnode](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/dappnode-package.png)


The attestation process will start automatically, and your validator will be live. You can check reward and more info via the `staker_info_v1` contract in Voyager [Mainnet](https://voyager.online/contract/0x00ca1702e64c81d9a07b86bd2c540188d92a2c73cf5cc0e508d949015e7e84a7#readContract) or [Sepolia](https://sepolia.voyager.online/contract/0x03745Ab04a431fc02871A139be6B93D9260b0Ff3E779AD9c8B377183B23109F1#readContract)

---

## 🧠 Notes & Tips

- You can **claim rewards** or **increase stake** later from the same Voyager contract UI.  
- Make sure your validator client runs **24/7** to avoid penalties.  
- Always test your setup on Sepolia before moving to mainnet.  

---

**References:**

- [Ready Wallet](https://www.ready.co/)  
- [Voyager StarkNet Explorer](https://voyager.online/)  
- [Starkscan Starknet Explorer](https://starkscan.co/)  
- [Starknet Staking Docs](https://docs.starknet.io/architecture/staking/)  
- [Juno Full Node](https://github.com/NethermindEth/juno)  
