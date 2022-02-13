---
sidebar_position: 1
---

# Overview

DAppNode project is open source which means you can install it on your hardware. There are two main ways to install DAppNode:

- [Installing with a script](./script.md)
- [Installing with an ISO](./iso.md)

There are some little differences that we have to mention. These differences are important for more technical users. It does not affect the performance of the DAppNode but it does have a slightly different user experience that is generally limited to advanced users who interact with command line often.

If you install DAppNode with an ISO:

The root account will be locked from SSH when installed via ISO, and the host account (default username: `dappnode`) will need to manually be added to the sudoers file to access root directories or use the `sudo` command.

Both the install script and ISO install the same core packages.

