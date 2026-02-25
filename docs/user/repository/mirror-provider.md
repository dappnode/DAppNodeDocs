> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Dappnode content provider

Dappnode offers an optional content provider as an alternative download source for packages in the Dappstore. Instead of fetching packages exclusively from IPFS, Dappnode can route downloads through its own HTTP infrastructure at `https://packages.dappnode.net`.

This is especially useful for large Docker images, which can be slow or unreliable to download via IPFS depending on network conditions.

:::tip
To enable or disable the Dappnode content provider, go to [System → Advanced → Dappnode Content Provider](http://my.dappnode/system/advanced) in the Dappnode admin UI and toggle the switch. The setting takes effect immediately — no restart required.
:::

## Why it exists

IPFS is a decentralized protocol and, as such, download speed and reliability depend on the availability of peers seeding the content. For large packages this can result in slow or failed installations. The Dappnode content provider offers a fast, reliable alternative backed by Dappnode infrastructure to improve the installation experience.

## Security model

When using the Dappnode content provider, the standard IPFS-based signature verification is skipped for packages downloaded through it. Instead, trust is delegated to Dappnode as the content provider operator.

## Default state

The Dappnode content provider is **disabled by default**. Users must explicitly opt in from the admin UI.
