# Architecture

**testPABLO**

DAppNode is a collection of interdependent docker containerized packages (referred here as core DNPs). DAppNode's core DNPs are:

- DNP_BIND
- DNP_VPN
- DNP_ETHCHAIN
- DNP_ETHFORWARD
- DNP_IPFS
- DNP_WAMP
- DNP_ADMIN
- DNP_DAPPMANAGER

## BIND

Local DAppNode DNS. Links each package docker IP to a name in the format of my.[package-name].dnp.dappnode.eth. It also redirects .eth domains to the Ethforward. All rules can be consulted at `eth.hosts <https://github.com/dappnode/DNP_BIND/raw/master/build/bind/eth.hosts>`\_.

It runs the native Linux bind package with a configuration specified at `named.conf <https://github.com/dappnode/DNP_BIND/raw/master/build/bind/named.conf>`\_. It attempts resolution and otherwise forwards to the Google Public DNS 8.8.8.8 / 8.8.4.4.

## VPN

Provides a basic VPN for users to consume DAppNode's services.

It runs a `xl2tpd <https://github.com/xelerance/xl2tpd>`_ process alongside a NodeJS app, both controlled by a supervisord process. The NodeJS app connects with the WAMP to manage VPN users directly editing the `/etc/ppp/chap-secrets <http://l4u-00.jinr.ru/usoft/WWW/HOWTO/PPP-HOWTO-13.html>`_ file, which holds the users' credentials.

The user IP is static and set when that user is created. The static IP is used by the WAMP for authentication to allow only admin users to perform certain actions. Currently, there are three types of users:

- 172.33.10.1: Super admin. It is created when DAppNode is installed and can never be deleted
- 172.33.10.x: Admin user.
- 172.33.100.x: Non-admin user.

## ETHCHAIN

Local full mainnet Ethereum node. Right now it uses parity, but we are testing Geth against Parity to take a decision based on each client's efficiency, memory usage, time to use among other parameters.

## ETHFORWARD

Resolves .eth domains by intercepting outgoing requests, calling ENS, and redirecting to the local IPFS node.

It is a NodeJS HTTP proxy server, which also returns custom 404 pages if the content is not found or available or if the chain is still not synced.

## IPFS

Local IFPS node. Its gateway is available at:

```js
host: my.ipfs.dnp.dappnode.eth;
port: 5001;
protocol: http;
```

## WAMP

Handles inter-package communications. Restricts certain operations to only admin users.

We are using `crossbar.io <https://crossbar.io>`_ and its javascript client `autobahn.js <https://github.com/crossbario/autobahn-js>`_. Please refer to their documentation for more details.

## DAPPMANAGER

Installs and manages DAppNode packages (DNPs). It's a Nodejs app whose procedures are only consumed by the ADMIN and depends on IPFS and ETHCHAIN to function.

## ADMIN

Handles admin users <-> DAppNode interactions, such as managing packages or VPN users. It is an NGINX process that serves a single-page React app that consumes RPCs of the DAPPMANAGER and the VPN.
