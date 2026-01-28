---
title: "🌐 DNS"
llm_description: "DNS-based service discovery and domain naming conventions for DAppNode packages."
---

# 🌐 DNS

By default, every DAppNode package runs on Docker networks that provide DNS-based service discovery. The main network is `dncore_network`, which uses a public IP range, and starting from core version 0.3.2, there is also a `dnprivate_network` with the private IP range `10.20.0.0/24`. Both networks allow packages to communicate and resolve service names, but `dnprivate_network` adds a security layer by restricting access to a private IP range, making it ideal for accessing sensitive UIs and services.

During installation, each package is assigned a unique domain name (apart from the ones set by default by Docker: container name, service name, etc.) that can be used to access the services running inside the package. The aliasing convention is the same for both networks, with one key difference: domains in `dncore_network` end with `.dappnode`, while in `dnprivate_network` they end with `.dappnode.private`.

This document provides a comprehensive guide on how to access services running inside a package using the assigned domain names in both networks.

## Multiservice packages

In multiservice packages, the naming convention is: `<serviceName>.<shortDnpName>.dappnode` (for `dncore_network`) or `<serviceName>.<shortDnpName>.dappnode.private` (for `dnprivate_network`), where `serviceName` is the name of the service running inside the package and `shortDnpName` is the name of the package. For example, if you have a package named `my-package` running a service named `my-service`, the domain names to access the service would be:

- On `dncore_network`: `my-service.my-package.dappnode`
- On `dnprivate_network`: `my-service.my-package.dappnode.private`

:::info
The short DNP name is derived from the first part of the DNP name, which corresponds to the package name. For example, if the DNP name is `my-package.dnp.dappnode.eth`, the short DNP name would be `my-package`.
:::

**Example multiservice:** [Prysm](https://github.com/dappnode/DAppNodePackage-prysm-generic)

- DNP name: `prysm.dnp.dappnode.eth`
- Docker Compose

```yaml
version: "3.5"
services:
  beacon-chain:
    build:
      context: beacon-chain
      args:
    volumes:
      - beacon-chain-data:/data
    restart: unless-stopped
    environment:
  validator:
    build:
      context: validator
      args:
    restart: on-failure
    environment:
volumes:
  beacon-chain-data: {}
  validator-data: {}
```

Aliases will be:

- beacon-chain service: `beacon-chain.prysm.dnp.dappnode` (public) and `beacon-chain.prysm.dnp.dappnode.private` (private)
- validator service: `validator.prysm.dnp.dappnode` (public) and `validator.prysm.dnp.dappnode.private` (private)

:::tip
A main service can be defined in a multiservice package. This service will be the one used to access the package. For example, if you have a package named `my-package` running a service named `my-service` and you want to access the package using the domain name `my-package.dappnode` or `my-package.dappnode.private`, you can define the service `my-service` as the main service. See [manifest file reference - mainService](https://docs.dappnode.io/docs/dev/references/manifest#mainservice) for details on how to define the main service.
:::

## Monoservice packages

In monoservice packages, the domain name is the same as the package name. For example, if you have a package named `my-package`, the domain names to access the service would be:

- On `dncore_network`: `my-package.dappnode`
- On `dnprivate_network`: `my-package.dappnode.private`

It also follows the same convention as the multiservice packages. For example, if you have a package named `my-package` running only one service named `my-service`, the domain names to access the service would be:

- On `dncore_network`: `my-service.my-package.dappnode` or `my-package.dappnode`
- On `dnprivate_network`: `my-service.my-package.dappnode.private` or `my-package.dappnode.private`

**Example monoservice:** [Geth](https://github.com/dappnode/DAppNodePackage-geth-generic)

- DNP name: `geth.dnp.dappnode.eth`
- Docker Compose

```yaml
version: "3.5"
services:
  geth:
    build:
      context: geth
      args:
    environment:
    restart: unless-stopped
```

Alias will be:

- geth service: `geth.dnp.dappnode`, `geth.dnp.dappnode.eth`, `geth.dnp.dappnode.private`, and `geth.dnp.dappnode.eth.private`

## Staker packages - fullnode

Staker packages are a special case in DAppNode. They follow the same DNS conventions mentioned above, with some additional features:

- **EVMs dedicated Docker networks**: Each EVM network supported in DAppNode has a dedicated Docker network that is used by the staker packages to communicate with each other. The Docker network name follows the convention `<network>_network`, e.g., `hoodi_network` for the Hoodi network or `mainnet_network` for the Mainnet network.
- **Fullnode aliases**: The selected Execution and Consensus client has an extra domain name to indicate that it is the client selected by the user. This domain name can be used by other packages to query the RPC node, the validator API, the beacon chain API, etc. (in some cases, it might require authentication). The naming convention is:
  - Execution: `execution.<network>.dncore.dappnode` (public) and `execution.<network>.dncore.dappnode.private` (private)
  - Consensus:
    - Beacon-chain: `beacon-chain.<network>.dncore.dappnode` (public) and `beacon-chain.<network>.dncore.dappnode.private` (private)
    - Validator: `validator.<network>.dncore.dappnode` (public) and `validator.<network>.dncore.dappnode.private` (private)

:::info
The fullnode alias is added to both Docker networks, `dncore_network` and `<network>_network`, as well as to `dnprivate_network`, so it can be accessed from any package running in the DAppNode, using either the public or private domain.
:::
