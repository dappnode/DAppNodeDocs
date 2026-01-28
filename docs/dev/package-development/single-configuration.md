---
title: "Single-Variant Package Development"
llm_description: "Step-by-step guide for developing single-variant Dappnode packages."
---

# Single-Variant Package Development

This guide will walk you through the steps to develop a single-variant Dappnode package using a simple example. We'll start with initializing a basic package and progress to a more complex setup, using the Holesky Geth package as a reference.

## Step 1: Initialize the Package

Start by running the following command to initialize your Dappnode package:

```bash
npx @dappnode/dappnodesdk@latest init
```

This will create the following directory structure:

```
.
├── avatar-default.png
├── dappnode_package.json
├── docker-compose.yml
└── Dockerfile
```

## Step 2: Customize your Package

### Create a Directory for Container Files

For more complex packages, such as the Holesky Geth package, it is recommended to create a directory (e.g., `geth`) that will contain everything that needs to go inside each Docker container corresponding to a service in the compose file. This includes the `Dockerfile`, an `entrypoint.sh` script, and any security or configuration files. Example:

```
geth/
├── Dockerfile
├── entrypoint.sh
└── security/
    └── jwtsecret.hex
```

### Customize the avatar

Replace the default avatar (`avatar-default.png`) with a square `.png` image that represents your package (recommended dimensions: width between 200px and 300px). This image will appear in the Dappnode UI, so it's important to choose one that aligns with your package's branding.

### Key Changes in `docker-compose.yml` and `dappnode_package.json`

In the `docker-compose.yml`, modify the services section to:

- Reference the newly created directory (`geth` in this example) where the `Dockerfile` and other container files are stored.
- Set up environment variables, ports, and volumes relevant to your service.

In the `dappnode_package.json`, update fields such as:

- `name`, `version`, `description`, and `author` to reflect your package.
- Add relevant `categories`, `architectures`, and exposed services (e.g., API endpoints).

### Simplified Dockerfile

Here’s a simplified version of the Dockerfile inside the `geth` directory:

```Dockerfile
ARG UPSTREAM_VERSION

FROM ethereum/client-go:${UPSTREAM_VERSION}

COPY /security /security
COPY entrypoint.sh /usr/local/bin/entrypoint.sh

# Additional commands or package installation

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
```

### Simplified entrypoint.sh

The `entrypoint.sh` script is responsible for setting up the environment and running the application. Here’s a simplified version:

```bash
#!/bin/sh

# Additional logic related to JWT token

# Start the Geth process (add any flags you consider relevant)
exec geth --authrpc.jwtsecret ${JWT_PATH} ${EXTRA_FLAGS}
```

## Step 3: Build the package

Once all the necessary customizations are made, you can build your package by running the following command while connected to your Dappnode box:

```bash
npx @dappnode/dappnodesdk@latest build
```

This will package your service, making it ready for installation on a Dappnode machine. Once you get the package hash, you just have to paste it into the Dappstore search bar to download it.

## Step 4: Publish the package

Publishing the package is optional; you can install and use the package locally after building it. However, if you want the package to be available in the public Dappstore for other users to discover and install, publishing is required. To publish the package, start by running the following command:

```bash
npx @dappnode/dappnodesdk@latest publish --type=<patch/minor/major> --eth-provider=<your ETH RPC> --content-provider=<your IPFS API> --developer-address=<the address to sign>
```

This command will return a link where you can perform the transaction to publish the package.

### Naming conventions for packages

All package names must follow this convention:

```
<name>.<public/dnp>.dappnode.eth
```

- DNP: This suffix is reserved for official Dappnode packages and must be approved by the Dappnode Association.
- Public: This suffix is for community-contributed packages that can be published by anyone.

### Automating Publication with GitHub Actions

If the package source code is hosted on GitHub, you can automate the publishing process by setting up GitHub Actions. Use the workflows [here](/docs/dev/github-actions.md) to integrate publishing workflows.
