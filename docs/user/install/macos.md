---
title: "macOS Installation"
llm_description: "Guide to install Dappnode on macOS via script, covering both desktop and server modes."
---

# macOS Installation

Dappnode can be installed on macOS (Apple Silicon and Intel) using the installation script. The installer automatically detects your Mac model and adjusts the installation accordingly:

- **Server-class Macs** (Mac mini, Mac Studio, Mac Pro): Full installation with all services, suitable for 24/7 operation.
- **Desktop/Laptop Macs** (MacBook, iMac): Minimal installation optimized for personal use alongside your day-to-day work.

## Prerequisites

Before installing Dappnode, you need:

- [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/) installed and running
- `curl` or `wget` (macOS includes `curl` by default)

:::info Docker Desktop
Make sure Docker Desktop is running before starting the installation. You can verify it by running `docker ps` in your terminal.
:::

## Installation

### Desktop / Personal Mac (MacBook, iMac)

If you are running Dappnode on a Mac that you also use as your personal computer, use the `--minimal` flag. This installs only the essential Dappnode components (BIND, DAPPMANAGER, NOTIFICATIONS, PREMIUM), keeping your system lightweight:

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --minimal
```

### Server Mac (Mac mini, Mac Studio, Mac Pro)

For always-on Macs intended to run as dedicated servers, use the full installation:

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash
```

The installer automatically detects server-class Mac models and installs the full package set including WIFI, IPFS, VPN, WIREGUARD, and HTTPS.

:::tip
If you have a Mac mini that you use as a personal desktop rather than a server, you can force the minimal installation by passing `--minimal`.
:::

## Connecting to Dappnode

After installation, the script will display your VPN credentials. How you connect depends on your installation type:

### Desktop / Personal Mac

Since Dappnode is running locally on the same machine, connect using:

- **Wireguard VPN** (recommended): Import the Wireguard credentials displayed after installation into the [Wireguard app](https://apps.apple.com/app/wireguard/id1451685025). Use `dappnode_wireguard --localhost` to get credentials optimized for local connections.
- **OpenVPN**: Import the OpenVPN credentials into your preferred OpenVPN client. Use `dappnode_openvpn` to retrieve them.

Once connected via VPN, access the Dappnode UI at [http://my.dappnode](http://my.dappnode).

### Server Mac

For a server Mac on your local network, you have additional connectivity options:

- **WiFi**: Scan for `DAppNodeWIFI` and connect. Get WiFi credentials with `dappnode_wifi`.
- **Wireguard VPN** (recommended): Import credentials from `dappnode_wireguard` into the Wireguard app.
- **OpenVPN**: Import credentials from `dappnode_openvpn` into your OpenVPN client.

Once connected, access the Dappnode UI at [http://my.dappnode](http://my.dappnode).

## macOS-Specific Notes

- **Docker Desktop**: Dappnode runs inside Docker Desktop on macOS. Make sure Docker Desktop is configured to start at login if you want Dappnode to be available after a reboot.
- **File paths**: On macOS, Dappnode files are stored under `~/dappnode/` instead of `/usr/src/dappnode/`.
- **Host scripts**: Some Linux-specific host operations are automatically disabled on macOS (`DISABLE_HOST_SCRIPTS=true`).
- **Sleep/Suspend**: If your Mac goes to sleep, Docker containers will be paused. Disable sleep in System Settings for server usage.

## Restore to the Latest Version

To update Dappnode to the latest version without erasing any data:

```bash
sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash
```

## Uninstall

To uninstall Dappnode components:

```bash
wget -qO - https://uninstaller.dappnode.io | sudo bash
```

:::info
For advanced installation options (custom packages, IPFS endpoints, etc.), see the [Advanced Script Options](/docs/user/install/script/advanced) page.
:::
