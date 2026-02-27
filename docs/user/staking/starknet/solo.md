# 🚀 Starknet Validator Solo Staking Guide

**Starknet** is a Layer 2 network built on Ethereum, designed for scalability and performance using STARK proofs ⚡
This guide walks you through the **complete process of becoming a Starknet validator and Solo Staker** using the DAppNode Starknet Staking package and its built-in UI. Let's get started! 🎉

---

## ✅ Prerequisites

- 🦊 A Starknet-compatible wallet: [Ready Wallet](https://www.ready.co/), [MetaMask (Starknet Snap)](https://snaps.metamask.io/snap/npm/consensys/starknet-snap/), or [Braavos](https://braavos.app/)
- 🖥️ Access to a synced Starknet full node (Juno or Pathfinder)
- 💰 Minimum STRK balance:
  - **Sepolia:** 1 STRK
  - **Mainnet:** 20,000 STRK

---

## 1️⃣ Install the Starknet Staking Package on DAppNode

1. Open your DAppNode UI.
2. Go to the **Stakers** tab and select **Starknet** 🎯
3. Follow the setup flow to install the package.

![Stakers tab](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/stakers-tab.png)

During the installation process, you will need to enter:

- `Operational Address` — The address for your **operator** account
- `Private Key` — The private key from your operator account (needed for attestations 🔑)

> 💡 See step 2 for how to create and set up your accounts if you haven't already.

![Dappnode](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/dappnode-package.png)

---

## 2️⃣ Set Up Your Accounts

Open the package UI from DAppNode. The **landing page** guides you through the entire setup! 🧭

![Landing page](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/ui-landing.png)

### 🦊 Choose Your Wallet

Download and install one of the supported wallets:

- [Ready Wallet](https://www.ready.co/) (Argent)
- [MetaMask](https://snaps.metamask.io/snap/npm/consensys/starknet-snap/) (Starknet Snap)
- [Braavos](https://braavos.app/)

### 👛 Create Three Accounts

You need **three Starknet accounts** for security:

- 🏦 **Staker** — Holds your stake (cold wallet recommended)
- ⚙️ **Operator** — Signs attestations and pays gas (hot wallet)
- 🎁 **Rewards** — Receives earned rewards

Create them in your wallet as _Standard Accounts_.

![Ready wallet create account](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/argent-create-account.png)

### 💸 Fund Your Accounts

- Fund your **staker** account with the required STRK amount (plus extra for gas fees).
- Fund your **operator** account with a small amount for gas.

> 🧪 On Sepolia, you can use the [Starknet Faucet](https://starknet-faucet.vercel.app).
> 🌉 You can bridge STRK from Ethereum via [StarkGate](https://starkgate.starknet.io/) or swap on a Starknet DEX like [AVNU](https://app.avnu.fi/).

### 🔐 Export Your Operator Private Key

The staking package needs your **operator** private key for attestations. Export it from your wallet:

![export PK](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/export-pk.gif)

---

## 3️⃣ Connect Your Wallet

1. Open the package UI from DAppNode.
2. Click **Connect Wallet** in the header 🔗
3. Select your wallet and approve the connection.
4. The UI will verify you are on the correct network (Mainnet or Sepolia).

![Connect Wallet](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/ui-connect-wallet.png)

Once connected, you'll see the **Dashboard** with your account balances! 🎊

![Dashboard](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/ui-dashboard.png)

---

## 4️⃣ Create Your Validator

From the Dashboard, click **Create Validator**. The UI handles the full staking process for you! 🪄

<img src="https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/ui-create-validator.png" alt="Create Validator" width="500" />

### Step 1: Approve STRK ✍️

- Enter the amount you want to stake.
- Click **Approve STRK Allowance** and confirm in your wallet.

### Step 2: Stake 🥩

- Enter your **operator address** and **rewards address**.
- Click **Confirm Stake** and confirm in your wallet.

The attestation process starts automatically and your validator will be live! 🟢🎉

---

## 5️⃣ Manage Your Validator

The Dashboard shows your validator status with real-time data:

- 🟢 **Validator status** — Active, Paused, Exiting, or Exited
- 💰 **Staked amount** — Total STRK staked
- 🎁 **Rewards earned** — Accumulated rewards

![Validator](https://github.com/dappnode/DAppNodePackage-starknetstaking-generic/raw/main/images/ui-validator.png)

### 🎮 Available Actions

- 🎁 **Claim Rewards** — Withdraw earned rewards to your rewards account
- ➕ **Add Stake** — Increase your staked amount (approve + stake flow)
- 📝 **Change Reward Address** — Update where rewards are sent
- 🔓 **Unstake** — Initiate the unstaking process (irreversible)

### ⏳ Unstaking Process

Unstaking is a two-phase process:

1. 🚪 **Initiate Unstake** — Start the withdrawal process. This action is irreversible!
2. ⏰ **Waiting Period** — 7 days on Mainnet / 5 minutes on Sepolia. The UI shows a countdown.
3. ✅ **Complete Unstake** — Once the waiting period ends, withdraw your staked funds.

---

## 💡 Notes & Tips

- ⏰ Keep your validator client running **24/7** to avoid penalties.
- 🧪 Always test your setup on **Sepolia** before moving to Mainnet.
- 🔐 Use separate accounts for staker, operator, and rewards for better security.

---

## 📚 References

- [Ready Wallet](https://www.ready.co/)
- [Braavos Wallet](https://braavos.app/)
- [MetaMask Starknet Snap](https://snaps.metamask.io/snap/npm/consensys/starknet-snap/)
- [Voyager StarkNet Explorer](https://voyager.online/)
- [Starknet Staking Docs](https://docs.starknet.io/architecture/staking/)
- [Starknet Chain Info & Contract Addresses](https://docs.starknet.io/resources/chain-info/#staking)
- [Juno Full Node](https://github.com/NethermindEth/juno)
