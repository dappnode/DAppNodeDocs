---
title: "Script Installation"
llm_description: "Install Dappnode via bash script on Debian/Ubuntu, including prerequisites, install modes, and update commands."
---

# Script Installation

You can install Dappnode using the installation script on any Debian-based Linux distribution (Debian, Ubuntu). The script method is also the only option for [ARM devices](/docs/user/install/arm) and [macOS](/docs/user/install/macos).

## Prerequisites

Before installing Dappnode, you need:

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/) (plugin or standalone)
- [xz-utils](https://packages.debian.org/sid/xz-utils)

To install all prerequisites at once, run:

```bash
sudo wget -O - https://prerequisites.dappnode.io | sudo bash
```

If you already have the dependencies installed you can skip this step.

## Install Dappnode

### Server (default — full installation)

For a dedicated server running 24/7:

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash
```

This installs all core components: HTTPS, BIND, IPFS, VPN, WIREGUARD, DAPPMANAGER, WIFI, NOTIFICATIONS, and PREMIUM.

### Desktop / Laptop (lite installation)

For a personal Linux desktop or laptop, use the `--lite` flag to install a reduced set of components:

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --lite
```

This installs: BIND, VPN, WIREGUARD, DAPPMANAGER, NOTIFICATIONS, and PREMIUM.

:::caution .dappnode domains on Desktop mode
When running in `--lite` (desktop) mode, `.dappnode` domain resolution is currently under investigation and may not work as expected. This is a known limitation that is expected to be fixed in a future release.
:::

### Minimal installation

For the smallest possible footprint (useful for testing or custom setups):

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --minimal
```

This installs only: BIND, DAPPMANAGER, NOTIFICATIONS, and PREMIUM.

## Reboot

After the installation completes, reboot your machine (you might need to do this twice):

```bash
shutdown -r now
```

## Restore to the Latest Version

If you are experiencing any problem or just want to make sure you are running the latest Dappnode versions, execute this command in the Dappnode terminal. This will update the core packages to the latest versions without erasing any data from your volumes.

```bash
sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash
```

## Uninstall

This command will uninstall Dappnode components (but not Docker).

```bash
wget -qO - https://uninstaller.dappnode.io | sudo bash
```

## Advanced Options

The installer supports additional flags and environment variables for fine-grained control over the installation. See the [Advanced Script Options](/docs/user/install/script/advanced) page for the full reference.
