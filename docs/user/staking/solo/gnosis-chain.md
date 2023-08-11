Gnosis Chain is a canary chain for Ethereum run and maintained by the GnosisDAO community. More than 10% of its validators are home stakers running Dappnode. Starting a new validator requires only 1 GNO, making it accessible for anyone to run a Gnosis Chain validator node.

In the Stakers Menu under the Gnosis Chain tab, you'll find the needed clients to run a node:
- 1 execution client (only Nethermind Xdai available, Erigon coming soon!)
- 1 consensus client (Lighthouse, Teku and Lodestar available)

![Gnosis Chain](/img/stakers-gnosis.png)

You'll find that picking Nethermind Xdai and a consensus client is very intuitive. For your consensus client, keep in mind that enabling checksync when selecting it, will significantly reduce sync time by starting off a synced checkpoint and then syncing backwards from there. Once your consensus client is synced, Nethermind Xdai will start syncing and take a few hours to sync. Please be patient and if in doubt, always check Nethermind's logs.

Just like in Ethereum mainnet, you'll need Web3Signer Gnosis if you plan on running one or multiple validators.
