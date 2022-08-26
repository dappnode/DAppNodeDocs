---
title: Ethereum Validator Questions
---

<details>
  <summary>Is there a way to monitor validator uptime?</summary>
  <div>
    <div>
    On some dashboards in the Dappnode Monitoring System (DMS) you can find metrics related to the uptime of your validator. 
    <br /><br />
    But you can also find out how your validator is doing on the Beaconchain website of their respective network. Just enter your validator index ID in the search field.
    <br /><br />

<ul>
  <li><a href="https://beaconcha.in/">Ethereum Beacon Chain</a></li>
  <li><a href="https://beacon.gnosischain.com/">Gnosis Beacon Chain</a></li>
</ul>

</div>
  </div>
</details>

<details>
  <summary>What happens if my node is offline while validating - do I get slashed?</summary>
  <div>
    <div>
    There are two kinds of punishment when you validate on Ethereum 2.0 (this is applied in gnosis chain too):
    <br /><br />
<ul>
  <li>Penalty or Inactivity Leak: Reduces the token balance of the validator for either not attesting or not getting included</li>
  <li>Slashing: Removes the validator from the consensus mechanism and slowly leaks Ether</li>
</ul>

Slashing only occurs if:

<ul>
  <li>A validator acts like a proposer and signs two different beacon blocks for the same slot</li>
  <li>A validator acts like an attester and signs two different attestations with the same target</li>
</ul>

You will not have to worry about getting slashed on Dappnode. Slashing usually occurs when you have two instances of the same validator running at the same time. DAppNodes are configured in a way where that does not happen.
</div>
  </div>
</details>