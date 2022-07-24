## Is there a way to monitor validator uptime?

In some dashboards of the DMS you can find some metrics related to the uptime. But you can find how your validator is workin on the next pages:

- Ethereum 2.0: https://beaconcha.in/
- GNosis: https://beacon.gnosischain.com/

## How to test staking with goEth and where do I get goEth?

Currently, we are testing the multiclient feature in DAppNode, you have a guide here where it's explained how to install the required packages for participating in a testnet of Ethereum.
Firstly, you will need at least 32 görli Eth. You can obtain this token from the faucet and some discord channels that are related to staking like ethstakers.

- https://goerlifaucet.com/
- https://goerli-faucet.slock.it/
- https://goerli-faucet.mudit.blog/

## What happens if my node is offline while validating - do I get slashed?

There are two kinds of punishment when you validate on Ethereum 2.0 (this is applied in gnosis chain too):

- Penalty: Reduce the token of the validator
- Slashing: Remove the validator from the beacon-chain and the balance of the validator continues decreasing.

The penalty happens when a validator is not active or misses some attestation.

A validator gets slashed if :

- Acts like a proposer and signs two different beacon blocks for the same slot
- Acts like an attester and signs two different attestations with the same target

  The second one can happen in case you have two validators running with the same key.
