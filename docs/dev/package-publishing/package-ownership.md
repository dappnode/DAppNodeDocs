# Package Ownership

This guide outlines the role permission system used in Dappnode package management, powered by Aragon’s ACL (Access Control List) smart contracts. It explains how to check and modify roles such as permission managers and developers. 

Whether you're assigning roles or verifying access, this doc walks you through each step clearly and effectively.

## Roles 🎖️

For every package, there are three possible roles for any Ethereum address:

- **Permission manager** => The address that can grant or revoke developer permissions for other addresses. This role can be held by only one address.
- **Developer** => Addresses that are allowed to publish new versions of the package.
- **Default / Standard** => Addresses that do not have any permissions related to the package.

## Dappnode's ACLs :closed_lock_with_key:

Currently, granting or revoking developer permissions, or assigning a new permission manager, must be done through the respective smart contract ACL of the package repository.

:::info
In Aragon, the ACL (Access Control List) is a core smart contract that manages permissions. It determines which address (or entity) can call which function on which app (smart contract).
:::

**Dappnode's ACLs by package suffix:**

- ACL `.public` => [See the SC in Etherscan](https://etherscan.io/address/0xFCb2C44E61031AE29e5c54A700FB6B4FB430dA4C#readProxyContract)
- ACL `.dnp` => [See the SC in Etherscan](https://etherscan.io/address/0x89d0A07b792754460Faa49e57437B40aA33FB757#readProxyContract)

## Actions 💪

The following outlines how to perform each possible action:

- **Check permission manager**

  1. Go to the `Read As Proxy` tab in the package's respective ACL
  2. Expand and provide the following arguments to the `getPermissionManager` function:
     - **\_app** => The address where the current version of the package is deployed

       :::info
       This address can be found by typing the package ENS into Etherscan's Mainnet search bar.
       :::
     - **role** => `0x0000000000000000000000000000000000000000000000000000000000000001`
  3. Click `Query` to retrieve the permission manager address

     :::info
     By default, the permission manager does not have publishing rights. After (or before) becoming the manager, the address must also be granted developer permissions if it intends to publish new versions.
     :::

- **Set a new permission manager**

  :::danger
  This action will revoke the current manager's permissions and assign management to a new address.
  :::

  1. Go to the `Write As Proxy` tab in the package's respective ACL
  2. Connect with the current permission manager address (click `Connect to Web3`)
  3. Expand and provide the following arguments to the `setPermissionManager` function:
     - **\_newManager** => The address that will become the new permission manager
     - **\_app** => The address where the current version of the package is deployed
     - **role** => `0x0000000000000000000000000000000000000000000000000000000000000001`
  4. Click `Write` and confirm the transaction

- **Grant publishing permissions to an address (developer):**

  1. Go to the `Write As Proxy` tab in the package's respective ACL
  2. Connect with the current permission manager address (click `Connect to Web3`)
  3. Expand and provide the following arguments to the `grantPermission` function:
     - **\_entity** => The address to be granted with developer permissions
     - **\_app** => The address where the current version of the package is deployed
     - **role** => `0x0000000000000000000000000000000000000000000000000000000000000001`
  4. Click `Write` and confirm the transaction

- **Revoke publishing permissions from an address:**

  1. Go to the `Write As Proxy` tab in the package's respective ACL
  2. Connect with the current permission manager address (click `Connect to Web3`)
  3. Expand and provide the following arguments to the `revokePermission` function:
     - **\_entity** => The address to revoke developer permissions from
     - **\_app** => The address where the current version of the package is deployed
     - **role** => `0x0000000000000000000000000000000000000000000000000000000000000001`
  4. Click `Write` and confirm the transaction

- **Check if an address is a developer (can publish new versions):**

  This is the only action that cannot be verified directly from the ACL smart contract.

  1. Go to the smart contract address of the current package version
     :::info
     This address can be found by typing the package ENS into Etherscan's Mainnet search bar.
     :::

  2. Go to the `Contract` > `Read As Proxy` tab
  3. Expand and provide the following arguments to the `canPerform` function:
     - **\_sender** => The address to check
     - **role** => `0x0000000000000000000000000000000000000000000000000000000000000001`
     - **params** => `[]` (an empty array)
  4. Click `Query` to receive a boolean indicating permission

## Package management UI ⚙️

Coming soon...👀
