---
title: "Advanced Script Options"
llm_description: "Full reference of all CLI flags and environment variables for the Dappnode install script."
---

# Advanced Script Options

The Dappnode installation script supports a variety of flags and environment variables that give you fine-grained control over the installation process. Each flag has an equivalent environment variable.

## CLI Flags

| Flag                          | Description                                                                                                               | Equivalent Env Variable     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `--update`                    | Clean existing downloaded artifacts before installing. Useful to force a fresh re-download of all components.             | `UPDATE=true`               |
| `--static-ip <ipv4>`          | Set a static IP address for the Dappnode instance.                                                                        | `STATIC_IP=<ipv4>`          |
| `--local-profile-path <path>` | Use a local `.dappnode_profile` file instead of downloading one from GitHub. Useful for offline or custom installations.  | `LOCAL_PROFILE_PATH=<path>` |
| `--ipfs-endpoint <url>`       | Override the default IPFS gateway endpoint used to download packages.                                                     | `IPFS_ENDPOINT=<url>`       |
| `--profile-url <url>`         | Override the URL from which the core packages profile (version list) is downloaded.                                       | `PROFILE_URL=<url>`         |
| `--minimal`                   | Install only the bare minimum packages: BIND, DAPPMANAGER, NOTIFICATIONS, PREMIUM. No VPN, WIFI, IPFS, or HTTPS.          | `MINIMAL=true`              |
| `--lite`                      | Install a reduced package set: BIND, VPN, WIREGUARD, DAPPMANAGER, NOTIFICATIONS, PREMIUM. No WIFI, IPFS, or HTTPS.        | `LITE=true`                 |
| `--packages <list>`           | Override the package selection entirely. Comma or space-separated list. DAPPMANAGER is automatically included if omitted. | `PACKAGES=<list>`           |
| `-h`, `--help`                | Show the help message and exit.                                                                                           | —                           |

:::note
`--minimal` and `--lite` are mutually exclusive. If both are specified, the installer will exit with an error. If `--packages` is provided, it takes priority over `--minimal` and `--lite`.
:::

## Environment Variables

All flags can also be passed as environment variables. Environment variables are useful when piping the installer from a URL:

```bash
sudo wget -O - https://installer.dappnode.io | sudo MINIMAL=true bash
```

| Variable             | Default                                                                             | Description                                                |
| -------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `UPDATE`             | `false`                                                                             | Set to `true` to clean cached artifacts before installing. |
| `STATIC_IP`          | _(empty)_                                                                           | IPv4 address to configure as static IP.                    |
| `LOCAL_PROFILE_PATH` | _(empty)_                                                                           | Path to a local `.dappnode_profile` file.                  |
| `IPFS_ENDPOINT`      | `https://ipfs-gateway-dev.dappnode.net`                                             | IPFS gateway URL for downloading packages.                 |
| `PROFILE_URL`        | `https://github.com/dappnode/DAppNode/releases/latest/download/dappnode_profile.sh` | URL to download the version profile from.                  |
| `MINIMAL`            | `false`                                                                             | Enable minimal installation mode.                          |
| `LITE`               | `false`                                                                             | Enable lite installation mode.                             |
| `PACKAGES`           | _(empty)_                                                                           | Comma or space-separated list of packages to install.      |

## Available Packages

The following packages can be specified with `--packages`:

| Package         | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `BIND`          | DNS service for `.dappnode` domain resolution                         |
| `IPFS`          | IPFS node for decentralized package distribution                      |
| `VPN`           | OpenVPN server for remote access                                      |
| `WIREGUARD`     | Wireguard VPN server for remote access                                |
| `DAPPMANAGER`   | Core Dappnode management UI and API (always required)                 |
| `WIFI`          | WiFi hotspot for local access                                         |
| `HTTPS`         | HTTPS portal for secure web access (requires ports 80/443 to be free) |
| `NOTIFICATIONS` | Notification service                                                  |
| `PREMIUM`       | Premium features                                                      |

:::info
DAPPMANAGER is required for a functional installation. If you specify `--packages` without including DAPPMANAGER, it will be automatically added.

HTTPS is automatically skipped if ports 80 or 443 are already in use by another service.
:::

## Installation Mode Summary

| Mode                 | Packages Installed                                                           | Use Case                                      |
| -------------------- | ---------------------------------------------------------------------------- | --------------------------------------------- |
| **Default (server)** | HTTPS, BIND, IPFS, VPN, WIREGUARD, DAPPMANAGER, WIFI, NOTIFICATIONS, PREMIUM | Dedicated 24/7 server                         |
| **`--lite`**         | BIND, VPN, WIREGUARD, DAPPMANAGER, NOTIFICATIONS, PREMIUM                    | Linux desktop / laptop                        |
| **`--minimal`**      | BIND, DAPPMANAGER, NOTIFICATIONS, PREMIUM                                    | macOS personal use, testing, or custom setups |
| **`--packages`**     | Custom selection                                                             | Full control over installed components        |

## Examples

### Full server installation with update

```bash
sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash
```

### Lite installation for a Linux desktop

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --lite
```

### Minimal installation for a personal Mac

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --minimal
```

### Custom package selection

Install only BIND, WIREGUARD, and DAPPMANAGER:

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --packages BIND,WIREGUARD,DAPPMANAGER
```

### Using a custom IPFS gateway

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --ipfs-endpoint https://my-ipfs-gateway.example.com
```

### Setting a static IP

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --static-ip 192.168.1.100
```

### Using a local profile for offline installation

```bash
sudo bash dappnode_install.sh --local-profile-path /path/to/.dappnode_profile
```

### Combining flags

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash -s -- --lite --static-ip 192.168.1.50 --update
```
