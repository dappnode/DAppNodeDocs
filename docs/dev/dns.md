# 🌐 DNS

By default every dappnode package runs on the docker network `dncore_network` and uses default docker dns server for name resolution. During installation time, the package is assigned a unique domain name (apart from the ones set by default by docker: container name, service name, etc) that can be used to access the services running inside the package. This document aims to provide a comprehensive guide on how to access services running inside a package using the assigned domain name.

## Multiservice packages

In multi-services packages the name convention is: `<serviceName>.<shortDnpName>.dappnode` where `serviceName` is the name of the service running inside the package and `shortDnpName` is the name of the package. For example, if you have a package named `my-package` running a service named `my-service`, the domain name to access the service would be `my-service.my-package.dappnode`.

:::info
The short dnp name relies on the first part of the dnp name, which is the name of the package. For example, if the dnp name is `my-package.dnp.dappnode.eth`, the short dnp name would be `my-package`.
:::

**Example multiservioce:** [Prysm](https://github.com/dappnode/DAppNodePackage-prysm-generic)

- Dnp name: `prysm.dnp.dappnode.eth`
- Docker compose

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

## Monoservice packages

In mono-services packages the domain name is the same as the package name. For example, if you have a package named `my-package`, the domain name to access the service would be `my-package.dappnode`. It also follows the same convention as the multi-service packages. For example, if you have a package named `my-package` running only one service named `my-service`, the domain name to access the service would be `my-service.my-package.dappnode` or `my-package.dappnode`.

**Example monoservice:** [Geth](https://github.com/dappnode/DAppNodePackage-geth-generic)

- Dnp name: `geth.dnp.dappnode.eth`
- Docker compose

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

The staker packages are a special case in dappnode, they do follow the same DNS conventions mentioned above, with some extra additions:

- **EVMs dedicated docker networks**: Each EVM network supported in dappnode has a dedicated docker network that is used by the staker packages to communicate each other. The docker network name follows the convenction `<network>_network`, i.e `hoodi_network` for the hoodi network or `mainnet_network` for the mainnet network.
- **Fullnode aliases**: The selected Execution and Consensus client has an extra domain name to indicate that its actually the client selected by the user. This domain name can be used by other packages to query the RPC node, the validator API, the beaconchain API, etc (in some cases it might reqire auth). The name convention is:
  - Execution: `execution.<network>.dncore.dappnode`. i.e `execution.mainnet.dncore.dappnode`
  - Consensus:
    - Beacon-chain: `beacon-chain.<network>.dncore.dappnode`. i.e `beacon-chain.mainnet.dncore.dappnode`
    - Validator: `validator.<network>.dncore.dappnode`. i.e `validator.mainnet.dncore.dappnode`

:::info
The fullnode alias is added in both docker networks, `dncore_network` and `<network>_network`, so it can be accessed from any package running in the dappnode.
:::
