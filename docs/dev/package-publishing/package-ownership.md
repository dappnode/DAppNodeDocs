---
llm_description: "Role permission system for managing package ownership via Aragon ACL contracts."
---

# Package Ownership

This guide outlines the role permission system used in Dappnode package management, powered by Aragon’s ACL (Access Control List) smart contracts. It explains how to check and modify roles such as permission managers and developers.

Whether you're assigning roles or verifying access, this doc walks you through each step clearly and effectively.

## Roles 🎖️

For every package, there are three possible roles for any Ethereum address:

- #### Permission manager:

  The address that can grant or revoke developer permissions for other addresses. This role can be held by only one address.

- #### Developer:

  Addresses that are allowed to publish new versions of the package.

- #### Standard:
  Addresses that do not have any permissions related to the package.

## Dappnode's ACLs :closed_lock_with_key:

Dappnode package permissions are managed via the smart contract ACL of their respective package repositories.

:::info
In Aragon, the ACL (Access Control List) is a core smart contract that manages permissions. It determines which address (or entity) can call which function on which app (smart contract).
:::

**Dappnode's ACLs by package suffix:**

- ACL `.public` => [See the SC in Etherscan](https://etherscan.io/address/0xFCb2C44E61031AE29e5c54A700FB6B4FB430dA4C#readProxyContract)
- ACL `.dnp` => [See the SC in Etherscan](https://etherscan.io/address/0x89d0A07b792754460Faa49e57437B40aA33FB757#readProxyContract)

## Package Management UI ⚙️

Our package publishing UI includes an "Ownership" tab that allows you to check the current role of an address for a specified package and perform actions based on that role.

You can access this UI by navigating to the [Dappnode SDK-publish UI](https://dappnode.github.io/sdk-publish).

Here's a guide to help you use it:

1. **Connect your wallet**, if it’s not already connected. The connected wallet address will be used for role checking.
   ![Connect Wallet](/img/pkg-ownership-connect.png)

2. **Click the "Ownership" tab** in the navigation bar.
   ![Navigate to "Ownership" tab](/img/pkg-ownership-navigate.png)

3. **Enter the package's ENS** you want to check or manage.
   ![Provide ENS](/img/pkg-ownership-ens.png)

4. **Review your role.**

Once the ENS is submitted, your role for the specified package will be displayed:

- ### Standard Address

  Your address has no special permissions for this package. You can check who the current manager is and contact them to request permission.
  ![Standard Address](/img/pkg-ownership-standard.png)

- ### Developer Address

  As a developer, you are allowed to publish new versions of the package. To do this, click on the "Publishing" tab in the navigation bar.
  ![Developer Address](/img/pkg-ownership-developer.png)

  :::info
  A package can have multiple addresses with developer permissions.
  :::

- ### Manager Address

  The manager is typically the address that published the first version of the package. It is the only address that can transfer management rights, as well as grant or revoke developer permissions.

  :::info
  A package can only have one address as its package manager.
  :::

  - #### Set a New Permission Manager

    :::danger
    Changing the manager will transfer full control of the package to the specified address, revoking all manager permissions from the current manager. This action is irreversible.
    :::

    To change the manager address, provide the new manager address and click **"Transfer Manager Role"** in the **"Change Manager"** section.

    ![Change manager Address](/img/pkg-ownership-change-manager.png)
    :::info
    Transferring the manager role does **not** automatically grant developer permissions to the new address. If you want to provide publishing access, you must grant developer rights separately.
    :::

  - #### Grant Developer (Publishing Permissions)

    Granting developer permissions allows the specified address to publish new versions of the package.

    To do this, enter the new developer address and click **"Grant Developer Permission"** in the **"Grant Developer"** section.
    ![Grant developer Address](/img/pkg-ownership-grant-developer.png)

  - #### Revoke Developer (Publishing Permissions):

    Revoking developer permissions prevents the specified address from publishing new versions of the package (if it previously had developer access).

    To revoke, enter the address and click **"Revoke Developer Permission"** in the **"Revoke Developer"** section.
    ![Revoke developer Address](/img/pkg-ownership-revoke-developer.png)
