## How can I start validating?

These steps will help you set up an Ethereum/Gnosis Chain/LUKSO solo staker validator:

1. Go to the Stakers menu, select the network tab that you want to validate in and select an execution client (Geth, Nethermind, Erigon or Besu), a consensus client (Prysm, Lighthouse, Teku, Nimbus or Lodestar) and Web3Signer. You can optionally select MEV Boost and any relays you choose to run (where applies).
2. Create keystore and deposit files using Ethereum/Gnosis/LUKSO CLI or the Wagyu Keygen tool.
3. Wait until clients are synced and check logs to see that everything is running fine.
4. Import keystore file(s) into Web3Signer.
5. Do the deposit. Make sure to triple-check you're interacting with the right website/contract!
6. Wait until you start attesting.

## I'm not able to install! / Package not found

You'll most likely have to switch your IPFS repository to remote, perform updates and go back to your Local IPFS node:

1. Try switching local/remote in IPFS repository: [http://my.dappnode/#/repository/ipfs](http://my.dappnode/#/repository/ipfs)
2. Wait a few seconds, then retry downloading/updating your package.
3. Make sure you set your IPFS node to Local for optimal Dappnode performance.

## I want to install Dappnode, what are the minimum specs I need?

- Assuming you want to sync only one chain (two clients) you should have at least:
  a) 16GB RAM
  b) 2TB of FAST storage (NVMe recommended)
  c) Intel i3 or i5 processor
- If you want to run Dappnode as recommended, we suggest the following specs:
  a) 32-64GB RAM
  b) 4TB NVMe
  c) Intel i7 processor

## VPN/Wireguard isn't working!

- Are you in the same network as the Dappnode? Use the local proxy access to configure your VPN: [http://dappnode.local/](http://dappnode.local/)
- Is UPnP enabled in your router settings? Try restarting your router after applying this setting!
- Is the port for Wireguard open in your router's port forwarding settings? (UDP 51820)
- Are you behind a CGNAT? You need to contact your ISP and request an IPv4 static address.
- Are you connected to another VPN? Please disconnect from this VPN before connecting to your Dappnode's VPN.
- If you're trying to access with Wireguard through a local network, make sure you're using your local credentials:
  ![vpn-fix](/img/vpn-fix-faq.png)

## My Web3Signer status has an odd grey bar in its status, is something wrong?

Web3Signer includes 4 containers (services): Web3Signer, Brain, Flyway and Postgres. You can check it yourself in the package view:
![w3s-ss](/img/web3signer-flyway.png)
Whenever one is indicated as Stopped (gray), it means that it was stopped. But in this case - just the flyway service is stopped, which is an expected behavior - it should run only once, while migration of the database. If it’s indicated as grey - that means that whenever it migrated - everything went well, and now there is no need for it to run!

## My clients are not syncing!

It's always a good idea to check the logs first for any specific errors, but here are some of the most common issues:

- Have you selected both Execution and Consensus clients in the Stakers Menu?
- If something looks wrong in the dashboard, always check the logs first! The clients might be syncing as expected. Check if the block number and the package's volume size are increasing. This is a common issue for Nethermind.

## How long do clients take to sync?

This is very different for every Dappnode depending on a number of factors:

- Geographic location
- Bandwidth
- ISP limitations
- Chosen EL and CL clients

There is no exact information on how long exactly every client takes to sync, but there are a couple of facts that would be useful:

- Consensus client usually doesn't take longer than 5 minutes, as long as you enabled checksync when selecting your clients in the Stakers menu.
- Execution client syncing time depends on many factors, but it might take up to several days in some cases, so if you felt like consensus client synced fast, and execution client is still syncing after several hours - that's ok, it might take some time!

## How can I connect to my own node using a web3 wallet?

1. Go to the package of the client that you want to connect to (Ex. Geth for Ethereum mainnet).
2. Copy the `Querying API`.
3. Go to your web3 wallet and paste the `Querying API` as the RPC URL when adding a new network.
