# 🌐 DNS

By default, every DAppNode package runs on the Docker network `dncore_network` and uses the default Docker DNS server for name resolution. During installation, the package is assigned a unique domain name (apart from the ones set by default by Docker: container name, service name, etc.) that can be used to access the services running inside the package. This document provides a comprehensive guide on how to access services running inside a package using the assigned domain name.

## Multiservice packages

In multiservice packages, the naming convention is: `<serviceName>.<shortDnpName>.dappnode`, where `serviceName` is the name of the service running inside the package and `shortDnpName` is the name of the package. For example, if you have a package named `my-package` running a service named `my-service`, the domain name to access the service would be `my-service.my-package.dappnode`.

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

- beacon-chain service: `beacon-chain.prysm.dnp.dappnode`
- validator service: `validator.prysm.dnp.dappnode`

:::tip
A main service can be defined in a multiservice package. This service will be the one used to access the package. For example, if you have a package named `my-package` running a service named `my-service` and you want to access the package using the domain name `my-package.dappnode`, you can define the service `my-service` as the main service. See [manifest file reference](https://docs.dappnode.io/docs/dev/references/manifest) for details on how to define the main service.
:::

## Monoservice packages

In monoservice packages, the domain name is the same as the package name. For example, if you have a package named `my-package`, the domain name to access the service would be `my-package.dappnode`. It also follows the same convention as the multiservice packages. For example, if you have a package named `my-package` running only one service named `my-service`, the domain name to access the service would be `my-service.my-package.dappnode` or `my-package.dappnode`.

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

- geth service: `geth.dnp.dappnode` and `geth.dnp.dappnode.eth`

## Staker packages - fullnode

Staker packages are a special case in DAppNode. They follow the same DNS conventions mentioned above, with some additional features:

- **EVMs dedicated Docker networks**: Each EVM network supported in DAppNode has a dedicated Docker network that is used by the staker packages to communicate with each other. The Docker network name follows the convention `<network>_network`, e.g., `hoodi_network` for the Hoodi network or `mainnet_network` for the Mainnet network.
- **Fullnode aliases**: The selected Execution and Consensus client has an extra domain name to indicate that it is the client selected by the user. This domain name can be used by other packages to query the RPC node, the validator API, the beacon chain API, etc. (in some cases, it might require authentication). The naming convention is:
  - Execution: `execution.<network>.dncore.dappnode`, e.g., `execution.mainnet.dncore.dappnode`
  - Consensus:
    - Beacon-chain: `beacon-chain.<network>.dncore.dappnode`, e.g., `beacon-chain.mainnet.dncore.dappnode`
    - Validator: `validator.<network>.dncore.dappnode`, e.g., `validator.mainnet.dncore.dappnode`

:::info
The fullnode alias is added to both Docker networks, `dncore_network` and `<network>_network`, so it can be accessed from any package running in the DAppNode.
:::
