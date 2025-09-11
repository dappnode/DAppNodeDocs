# 🚀 StarkNet Validator Solo Staking Guide

**StarkNet** is a Layer 2 network built on Ethereum, designed for scalability and performance using STARK proofs.  
This guide will walk you through the **complete process of becoming a StarkNet validator and Solo Staker**, from wallet setup to running your attestation client and validator on DAppNode.

We’ll use **[Argent Wallet](https://www.argent.xyz/)** and StarkNet's block explorer interfaces for all on-chain interactions.

---

## 🛠 Prerequisites

✅ [Argent Wallet](https://www.argent.xyz/) installed  
✅ Access to a synced StarkNet full node (e.g., [Juno](https://github.com/dappnode/DAppNodePackage-juno-generic))  
✅ Minimum STRK balance:
- **Sepolia:** 1 STRK  
- **Mainnet:** 20,000 STRK  

---

## 1️⃣ Create Accounts

We’ll use **three StarkNet accounts** in Argent:

- **staker** → Holds your stake  
- **operator** → Runs the validator  
- **rewards** → Receives rewards  

👉 Create them directly in Argent Wallet as _Standard Account_

![Argent wallet create account](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/argent-create-account.png)

---

## 2️⃣ Fund and Deploy the Accounts

- Fund your **staker** and **operator** accounts with the required STRK amount.  
> On Sepolia, you can use the [StarkNet Faucet](https://starknet-faucet.vercel.app).  

- Deploy your **accounts** in Argent Wallet following these steps:  
![account deploy](https://i.imgur.com/LzwWHl0.gif)

---

## 3️⃣ Export your operator address private key

The _starknetstaking_ package needs your **operator** address private key to make the _attestations_.  
You can obtain it from *Argent Wallet* following ![these steps](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/export-pk.gif)

---

## 4️⃣ Approve spending

1. Go to the block exporer STRK Token contract [STRK (Sepolia)](https://sepolia.voyager.online/contract/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d#writeContract) or [STRK (Mainnet)](https://sepolia.voyager.online/contract/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d#writeContract)
2. Connect your **staker** Argent Wallet.  
3. Scroll down to the `approve` function.  
4. Fill in the calldata:
   - **spender** → Starknet Staking Contract [Starknet Addresses](https://docs.starknet.io/resources/chain-info/#staking)  
   - **amount** → Amount in FRI (1 STRK = `1000000000000000000`)  
5. Submit the transaction.  



## 5️⃣ Stake STRK

1. Open the [Staking Contract on Voyager (Sepolia)](https://sepolia.voyager.online/contract/0x03745ab04a431fc02871a139be6b93d9260b0ff3e779ad9c8b377183b23109f1#writeContract) or the [Staking Contract on Voyager (Mainnet)](https://voyager.online/contract/0x00ca1702e64c81d9a07b86bd2c540188d92a2c73cf5cc0e508d949015e7e84a7#writeContract).  
2. Connect your **staker** Argent Wallet.  
3. Scroll down to the `stake` function.  
4. Fill in the calldata:
   - **rewards_address** → Your rewards account  
   - **operational_address** → Your operator account  
   - **amount** → Amount in FRI (1 STRK = `1000000000000000000`)  
5. Submit the transaction.  

📌 **Staking contract addresses:** [StarkNet Docs – Staking](https://docs.starknet.io/resources/chain-info/#staking)

![Voyager write contract stake](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/voyager-stake.png)

---

## 6️⃣ Install the StarkNet Staking Package on DAppNode

Now that you’ve staked, you need to set up the validator client on your DAppNode.

1. Open your DAppNode UI.  
2. Go to the **DAppStore** and search for `starknetstaking`.  
3. Click **Install**.  

Once installed, open the package configuration screen and provide:

- `OPERATIONAL ADDRESS` → Your operator account  
- `PRIVATE KEY` → The private key from your operator account (exported from Argent Wallet)

The attestation process will start automatically, and your validator will be live.

---

## 🧠 Notes & Tips

- You can **claim rewards** or **increase stake** later from the same Voyager contract UI.  
- Make sure your validator client runs **24/7** to avoid penalties.  
- Always test your setup on Sepolia before moving to mainnet.  

---

**References:**
- [Argent Wallet](https://www.argent.xyz/)  
- [Voyager StarkNet Explorer](https://voyager.online/)  
- [Starkscan Starknet Explorer](https://starkscan.co/)  
- [StarkNet Staking Docs](https://docs.starknet.io/architecture/staking/)  
- [Juno Full Node](https://github.com/NethermindEth/juno)  
