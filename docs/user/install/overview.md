---
title: "Installation Overview"
llm_description: "Installation overview: supported platforms, hardware specs by use case, and installation method comparison."
---

# Installation Overview

Dappnode can be installed on **Linux (Debian/Ubuntu)** and **macOS** machines. Whether you are setting up a dedicated home server or running Dappnode on your personal computer, choose the platform and installation method that best fits your needs.

## Supported Platforms

| Platform | Installation Methods | Notes |
| --- | --- | --- |
| **Linux (Debian/Ubuntu)** | [ISO](/docs/user/install/iso), [Script](/docs/user/install/script) | Recommended for dedicated servers and staking |
| **macOS** | [Script](/docs/user/install/macos) | Apple Silicon & Intel supported |
| **ARM (Linux)** | [Script](/docs/user/install/arm) | Raspberry Pi and similar boards |

## Hardware Recommendations

Hardware requirements depend heavily on your intended use case. Below are general guidelines:

### Home Server (24/7 staking, full nodes)

This is the recommended setup for staking, running full blockchain nodes, and other always-on workloads.

| Component | Recommended | Minimum |
| --- | --- | --- |
| CPU | Intel Core i5/i7 or AMD equivalent | Intel Core i3 |
| RAM | 32 GB | 16 GB |
| Storage | 4 TB NVMe | 2 TB NVMe or fast SSD |

### Personal Desktop / Laptop (light usage)

If you are running Dappnode on your personal computer for lighter workloads (e.g. testing, light node operation, development), lower specs are acceptable:

| Component | Recommended | Minimum |
| --- | --- | --- |
| CPU | Intel Core i5 / Apple M1 or better | Intel Core i3 / Apple M1 |
| RAM | 16 GB | 8 GB |
| Storage | 1 TB NVMe or SSD | 512 GB SSD |

### AI & Advanced Workloads

Running AI packages or other compute-heavy workloads alongside blockchain nodes requires significantly more resources:

| Component | Recommended |
| --- | --- |
| CPU | Intel Core i7/i9 or Apple M2 Pro/Max or better |
| RAM | 64 GB+ |
| Storage | 4 TB+ NVMe |
| GPU | Dedicated GPU recommended for AI inference |

### macOS Compatibility

Dappnode supports macOS on both Apple Silicon (M1/M2/M3/M4) and Intel Macs. Server-class Macs (Mac mini, Mac Studio, Mac Pro) are recommended for always-on usage. Laptops and iMacs can run Dappnode in desktop/personal mode. See the [macOS installation guide](/docs/user/install/macos) for details.

:::tip
If you don't have enough technical experience to customize your own hardware, you can always get a plug-and-play [Dappnode Home](https://dappnode.com/collections/all) from our online shop.
:::

## Installation Methods at a Glance

### Linux (Debian/Ubuntu)

| Method | Best For | Link |
| --- | --- | --- |
| **ISO** | Clean installs on dedicated machines; wipes disk and installs Dappnode over Debian | [ISO Installation](/docs/user/install/iso) |
| **Script (server)** | Installing on an existing Debian/Ubuntu system as a 24/7 server | [Script Installation](/docs/user/install/script) |
| **Script (desktop / `--lite`)** | Installing on a personal Linux desktop or laptop | [Script Installation](/docs/user/install/script) |

### macOS

| Method | Best For | Link |
| --- | --- | --- |
| **Script (server)** | Always-on Mac mini / Mac Studio / Mac Pro | [macOS Installation](/docs/user/install/macos) |
| **Script (desktop / `--minimal`)** | Personal MacBook, iMac, or Mac mini used as a desktop | [macOS Installation](/docs/user/install/macos) |

:::caution Continuous Uptime

Dappnode is designed to run 24/7 when used as a server. Many features, especially blockchain nodes and validators, rely on continuous uptime:

- **Blockchain Nodes**: Turning off Dappnode causes nodes to lose sync. Re-syncing can be resource-intensive and time-consuming.
- **Validator Nodes**: For staking, continuous uptime is crucial. Being offline may result in missed rewards or penalties.

If you are running Dappnode on a personal desktop or laptop, be aware that shutting down or suspending the machine will stop all Dappnode services.
:::

