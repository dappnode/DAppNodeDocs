---
llm_description: "Step-by-step guide to becoming an Aztec sequencer using DAppNode infrastructure."
---

# 🚀 Becoming an Aztec Sequencer with DAppNode

Your comprehensive guide to setting up and joining the Aztec network as a sequencer using DAppNode infrastructure. Let's get you sequencing! 🎯

---

## 📦 Phase 1: Install DAppNode Package

Start by grabbing the Aztec package from the DAppStore. This sets up your sequencer environment all nice and integrated with your DAppNode setup.

---

## 🔐 Phase 2: Generate Your Keystore

### Step 1️⃣: Install Aztec CLI on Your Local Machine

Download and install the Aztec Command Line Interface (it's quick, I promise):

```bash
bash -i <(curl -s https://install.aztec.network)
```

### Step 2️⃣: Add Aztec CLI to Your PATH

Make the Aztec CLI globally accessible by adding it to your shell configuration:

```bash
echo 'export PATH="$HOME/.aztec/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Step 3️⃣: Generate Your Keystore

Time to create your secure keystore! 🛡️ You can go with either an automatically generated 12-word mnemonic but **we strongly recommend a 24 words mnemonic** for maximum security. Treat it like your most prized possession—store it securely in a password manager or encrypted vault and never share it with a soul!

For all the details on keystore generation, check out the [official Aztec keystore documentation](https://docs.aztec.network/devnet/the_aztec_network/operation/keystore).

Example:

```bash
aztec validator-keys new \
  --fee-recipient 0x0000000000000000000000000000000000000000000000000000000000000000 \
  --staker-output \
  --gse-address 0xfb243b9112bb65785a4a8edaf32529accf003614 \  # Check in Aztec's documentation for the correct GSE address
  --mnemonic "<MNEMONIC>" \
  --l1-rpc-urls http://geth.sepolia-geth.dappnode:8545 \  # or any execution RPC
  --data-dir ./
```

Please note that `--fee-recipient` needs to be an Aztec address, not an Ethereum address. It's OK to leave it as 0x00... for now because there are no txs in the Ignition phase (so no tx fees) and can be changed later.

### Step 4️⃣: Upload Keystore to DAppNode

1. Navigate to your **DAppNode Packages Tab** 📁
2. Open the **Aztec package** 🦆
3. Access the **File Manager** tab 📁
4. Upload your newly generated keystore file to the `/keystore` directory

Boom! 💥 Your keystore is now locked and loaded, ready for your Aztec sequencer to use.

If your logs show this error:

```log
[17:55:44.683] WARN: node:blob-sink:client Unable to get blob sidecar for XXXXXXX: Not Found (404) {"status":404,"statusText":"Not Found","body":"{\"message\":\"Block not found: the node does not custody enough data columns to reconstruct blobs - please start the beacon node with the `--subscribe-all-data-subnets` flag to ensure this call to succeed, or retry later if it is already the case\",\"code\":404}"}
```

Make sure to add `--subscribe-all-data-subnets` in your Beacon Chain package:

<img width="1227" height="528" alt="Screenshot 2025-11-12 at 15 00 40" src="https://github.com/user-attachments/assets/2d319f55-72e3-4ba4-a09b-b642b0c02369" />
<img width="1051" height="298" alt="Screenshot 2025-11-12 at 14 58 47" src="https://github.com/user-attachments/assets/29228b57-ba10-4a59-bb30-fb31a3442e48" />

---

## ✅ Phase 3: Approve STAKE Token Spending

Before you can join the party as a sequencer, you gotta approve the Aztec rollup contract to spend 200,000 STAKE tokens. That's your ticket to the show! 🎫

In order to perform this step you will need to install foundry in your computer (there will be a UI later on to perform this step, but for now you'll need to use CLI).

You can install foundry following [the instructions in their repo](https://github.com/foundry-rs/foundry)

```bash
curl -L https://foundry.paradigm.xyz | bash
```

### Step 1️⃣: Execute the Approval Transaction

Now execute the approval transaction from within the container:

```bash
cast send 0x139d2a7a0881e16332d7D1F8DB383A4507E1Ea7A \
  "approve(address,uint256)" \
  0xebd99ff0ff6677205509ae73f93d0ca52ac85d67 \
  200000ether \
  --private-key "$PRIVATE_KEY_OF_OLD_SEQUENCER" \
  --rpc-url http://execution.sepolia.dncore.dappnode:8545
```

Sit tight ⏳ and wait for the transaction to be confirmed on-chain. Grab some coffee ☕ while you wait!

---

## 💰 Phase 4: Fund Your Attester

Your attester address has been generated with the command in Step 3️⃣. Specifically in the `keyn_attestern_staker_output.json`, where `n` is the index of the key you've generated (1, for most of us who only generate 1).
Open the `...staker_output.json` file and you will find the address in the "attester" field.

### Attester ETH Funding 💸

Make sure your Attester Ethereum address has enough ETH to cover gas fees. Grab some from a testnet faucet or transfer from your funded account.
Faucets for testnet [here](https://sepolia-faucet.pk910.de/) and [here](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)

---

## 🎖️ Phase 5: Join as a Sequencer

Alright, moment of truth! 🎬 Let's register your validator on the Aztec network using the CLI.

Run this bad boy replacing the placeholders with your data and become a sequencer:

Note: `bls-secret-key` can be found in the file `key1.json` under the "bls" section.

```bash
aztec \
  add-l1-validator \
  --l1-rpc-urls http://execution.sepolia.dncore.dappnode:8545 \
  --network testnet \
  --private-key $PRIVATE_KEY_OF_OLD_SEQUENCER \
  --attester $ETH_ATTESTER_ADDRESS \
  --withdrawer $ANY_ETH_ADDRESS \
  --bls-secret-key $BLS_ATTESTER_PRIV_KEY \
  --rollup 0xebd99ff0ff6677205509ae73f93d0ca52ac85d67
```

Success! 🎉 Your sequencer is now registered on the Aztec testnet and ready to start producing blocks. Welcome to the sequencer club! 🏆

You can check the status of your sequencer in [Dashtec](https://testnet.dashtec.xyz). Remember that what is called "Sequencer address" in the dashboard is the "Attester" address in your `...staker_output.json` file.

---

## 🔒 Security Best Practices

- **🚫 Never ever share** your mnemonic or private keys with anyone, period
- **🔐 Lock down that mnemonic** — use a dedicated password manager or encrypted storage
- **💼 Hardware wallet time** — consider using hardware wallets for your withdrawal and attester addresses
- **🧪 Test first** — run everything through testnet before going anywhere near mainnet
- **👀 Keep an eye** on your sequencer logs regularly through DAppNode's dashboard

---

## 🆘 Troubleshooting

Running into issues? Here's a quick troubleshooting guide:

- **Keystore Upload Fails** 📤 — Make sure the file's in proper JSON format and has the right permissions
- **SSH Connection Failed** 🔓 — Verify your DAppNode is running and accessible on your network, check firewall settings
- **Docker Container Not Found** 🐳 — Ensure the Aztec package is installed and running, check the package name matches your network (e.g., `aztec-sepolia`)
- **Approval Transaction Reverts** ❌ — Check that you've got enough ETH for gas and sufficient STAKE balance
- **CLI Connection Errors** 🔌 — Verify your ETH RPC URL is actually reachable and the network's responding from within the container

---

## 🎯 You've Got This

You're all set to become an Aztec sequencer. Follow these steps carefully, keep your keys safe, and you'll be sequencing like a pro in no time. Happy validating! 🚀✨
