---
llm_description: "Package signature verification system with trusted keys management and bypass options."
---

# Packages' Signature

## Dappnode's Packages Signatures

All Dappnode's packages must be on chain, which means that need a digital signature for verification. This cryptographic signature serves as a stamp of authenticity, enabling users to prove the identity of the package's author and ensuring the integrity of its source. Before installing any package into your Dappnode environment, is essential to ensure that it comes from a trusted author. This measure is vital for safeguarding your Dappnode infrastructure against unauthorized access or potential security breaches.

## Release trusted keys

By default, our software comes with a set of pre-approved keys that have validation by the Dappnode team to ensure their reliability. However, users have the flexibility to manage these trusted keys according to their preferences. If you want to check the addresses trusted by us, or even add an address trusted by yourself, you can do it in the "System" tab on the side menu, within the ["Advanced" module](http://my.dappnode/system/advanced), in the "Release trusted keys" section.

![Release trusted keys table](/img/release-trusted-keys.png)

This feature could be particularly useful when users intend to install Dappnode packages sourced from alternative providers or even when developing their own packages. Nevertheless, it is strongly advised to have caution when modifying trusted keys and to only incorporate new addresses after thorough verification of their credibility.

## Bypass trusted signature

If a user attempts to install a package whose signature fails to match any of the trusted keys listed in the system, installation will be automatically blocked. However, is it possible to bypass this safeguard by toggling the trusted signature switch during the installation process. This one is only displayed if advanced options dropdown menu is active before the installation.

![Trusted signature switch](/img/signed-safe-switch.png)
