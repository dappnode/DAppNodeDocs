---
title: "Package Development"
llm_description: "Overview of single-config and multi-config package repository types."
---

# Package Development

Welcome to the **Package Development** section! This guide will help you create your own Dappnode packages. In Dappnode, packages are applications that you can download and install on your Dappnode machine, allowing you to enhance its functionality.

### Types of Package Repositories

There are two main types of package repositories:

- **Standard Package Repository**: Used to generate a single package, tailored for a specific configuration.
- **Multi-Configuration (Generic) Package Repository**: Used to generate multiple packages with varying configurations, such as different networks or client setups. For example, a multi-configuration repository could be used to build packages for both **Holesky Nethermind** and **Mainnet Nethermind**, which differ in their configurations.

### Developing Packages

- **Single-Configuration Package**: If you want to develop a package with a single configuration, like [Rotki](https://github.com/dappnode/DAppNodePackage-rotki), follow the instructions [here](/docs/dev/package-development/single-configuration.md).
- **Multi-Configuration Package**: For packages with multiple configurations, like [Lodestar](https://github.com/dappnode/DAppNodePackage-lodestar-generic), refer to [this guide](/docs/dev/package-development/multi-configuration.md).

By following these guides, you'll be able to create and contribute your own packages to the Dappnode ecosystem.
