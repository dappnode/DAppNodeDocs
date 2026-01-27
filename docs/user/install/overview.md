---
llm_description: "Installation overview: minimum hardware specs and comparison of ISO vs script methods."
---

# Installation Overview

## Specifications & Minimum Requirements
Dappnode is a Debian-based OS, which makes it friendly with most available commercial hardware. Depending on what you intend to run in your Dappnode you might need higher specifications, but a great number of available features can be used with the following recommendations:
- Intel Core i5/i7
- 32 GB RAM
- 4 TB NVMe storage

As minimum requirements we recommend:
- Intel Core i3
- 16 GB RAM
- 2 TB NVMe or fast SSD storage

If you don't have enough technical experience to customize your own hardware, remember you can always get a plug n play [Dappnode Home](https://dappnode.com/collections/all) in our online shop.

## Installation Methods

Installing Dappnode can be achieved through two primary methods:

### 1. [ISO Installation](/docs/user/install/iso)
- **Description**: This method involves downloading the Dappnode ISO file and using it to directly install Dappnode on your system.
- **Best for**: Most users as it provides a comprehensive setup designed specifically for Dappnode.

### 2. [Script Installation](/docs/user/install/script) over Debian-based Distribution
- **Description**: If you're already running a Debian-based distribution, you can utilize the Dappnode script to facilitate the installation process.
- **Best for**: Users who want to install Dappnode on a cloud server, ARM device (where it's the only option), or those who desire a specific Debian-based distro.

:::note
For ARM-based systems, only the script installation method is available.
:::

Choose the method that best fits your needs and system setup. Make sure to follow the respective installation instructions carefully for a smooth and successful Dappnode deployment.

:::caution Continuous Uptime

Dappnode is designed to run 24/7. Many features and functions within Dappnode, especially blockchain nodes, rely on continuous uptime to maintain their state, sync, and functionality. For instance:

- **Blockchain Nodes**: If you have a synced blockchain node and you turn off Dappnode, the node will lose its sync. This means when you turn it back on, it'll take time to catch up to the latest state, which can be resource-intensive and time-consuming.

- **Validator Nodes**: For users staking on certain blockchain networks, continuous uptime is crucial. Being offline might result in missed opportunities or even penalties.

Considering these aspects, it's recommended to ensure your Dappnode device remains powered on and running at all times.
:::

