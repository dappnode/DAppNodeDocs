Ethereum is the industry-leading smart contract platform. Since its transition of consensus mechanisms, from Proof of Work (PoW) to Proof of Stake (PoS), participating in Ethereum's block production by staking ETH has been an increasingly popular activity. Dappnode is an easy way to become a Solo Staker, but to achieve this you'll need a synced Ethereum full node. A full node is made of:
- 1x execution client (Geth, Nethermind, Erigon or Besu)
- 1x consensus client (Prysm, Lighthouse, Teku, Nimbus or Lodestar)

![Stakers](/img/stakers-mainnet.png)

If you visit the Stakers Menu, you'll find that picking an execution and consensus client is very intuitive. For your consensus client, keep in mind that enabling checksync when selecting it, will significantly reduce sync time by starting off a synced checkpoint and then syncing backwards from there. Once your consensus client is synced, your execution client will start syncing and take several hours to sync. Please be patient and if in doubt, always check your execution client's logs.

If you are becoming a Solo Staker, to run a validator you'll need to select Web3Signer, which is a tool that will help you load your keystore files into your node.

Optionally, you can include MEV Boost if you're interested in offering different relays whenever your validator node gets to propose a block. We highly recommend doing your own, extensive research on those relays you'll be running, as well as any local regulations in your jurisdiction.
