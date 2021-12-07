---
sidebar_position: 1
---

# Core Packages

## What is a core package?

The general definition of a core package would be a package is core if this one is required for the basic performance of a dappnode.

## What are the core packages?

The core packages are the next:

- [Wifi](https://github.com/dappnode/DNP_WIFI): This package set up the wifi access.
- [Dappmanager](https://github.com/dappnode/DNP_DAPPMANAGER): This package contains the front-end and backend that managers the containers, packages, etc. It's the main package of dappnode.
- [Ipfs](https://github.com/dappnode/DNP_IPFS):
- [bind](https://github.com/dappnode/DNP_BIND) (will be removed soon and replaced by docker bind): This package manage the urls of dappnode.
- [Https](https://github.com/dappnode/DNP_HTTPS):
- [OpenVpn](https://github.com/dappnode/DNP_VPN): It's a package that let you set up the vpn access via OpenVPN to your dappnode.
- [Wireguard](https://github.com/dappnode/DNP_WIREGUARD): It's a package that let you set up the vpn access via Wireguard to your dappnode.

## Characteristics of core packages

Firstly, we can separate the core packages into two types: mandatory and optional.

The mandatory core packages are installed and they can't be uninstalled:

- Wifi
- Dappmanager
- Ipfs
- bind

The optional core packages can be uninstalled if the user wishes it but they bring you up some basic features:

- https
- openvpn
- wireguard
