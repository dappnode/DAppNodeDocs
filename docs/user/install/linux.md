---
title: "Linux (Debian/Ubuntu)"
llm_description: "Overview of installing Dappnode on Linux: ISO and script methods for server and desktop use cases."
---

# Linux (Debian/Ubuntu)

Dappnode runs natively on Debian-based Linux distributions. You can install it on a dedicated server for 24/7 operation or on your personal Linux desktop or laptop.

## Installation Methods

### 1. [ISO Installation](/docs/user/install/iso)

The ISO method performs a clean install: it wipes the disk and installs Dappnode over Debian. This is the recommended approach for dedicated machines.

- **Best for**: New dedicated servers, users who want a turnkey setup.
- **Supported architectures**: amd64

### 2. [Script Installation](/docs/user/install/script)

The script method installs Dappnode on top of an existing Debian or Ubuntu system. It offers more flexibility through flags that control which components are installed.

- **Best for**: Existing Debian/Ubuntu systems, cloud servers, ARM devices, or users who want more control over the installation.

## Server vs Desktop Installation

The installer supports different modes depending on whether your machine will be a dedicated server or a personal desktop:

### Server (24/7, dedicated machine)

Install the full Dappnode package set. This is the default behavior:

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash
```

This installs all core components including HTTPS, BIND, IPFS, VPN, WIREGUARD, DAPPMANAGER, WIFI, NOTIFICATIONS, and PREMIUM.

**Connectivity options after installation:**

- **WiFi**: Scan for `DAppNodeWIFI` and connect. Get credentials with `dappnode_wifi`.
- **Wireguard VPN** (recommended): Import credentials from `dappnode_wireguard`.
- **OpenVPN**: Import credentials from `dappnode_openvpn`.
- **Local Proxy**: Connect to the same router and go to `http://dappnode.local`.

### Desktop / Personal Computer (lite mode)

If you want to run Dappnode on your personal Linux desktop or laptop, use the `--lite` flag. This installs a reduced set of components (BIND, VPN, WIREGUARD, DAPPMANAGER, NOTIFICATIONS, PREMIUM) without WIFI, IPFS, or HTTPS:

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --lite
```

**Connectivity options after installation:**

- **Wireguard VPN** (recommended): Import credentials from `dappnode_wireguard`.
- **OpenVPN**: Import credentials from `dappnode_openvpn`.

:::caution .dappnode domains on Desktop mode
When running in `--lite` (desktop) mode, `.dappnode` domain resolution is currently under investigation and may not work as expected. This is a known limitation that is expected to be fixed in a future release.
:::

Once connected via VPN, access the Dappnode UI at [http://my.dappnode](http://my.dappnode).

## Next Steps

- [ISO Installation guide](/docs/user/install/iso) — step-by-step clean install
- [Script Installation guide](/docs/user/install/script) — install on an existing system
- [Advanced Script Options](/docs/user/install/script/advanced) — all flags and environment variables
- [ARM Installation](/docs/user/install/arm) — ARM-specific instructions
- [Dappnode Commands](/docs/user/install/dappnode-commands) — CLI reference
