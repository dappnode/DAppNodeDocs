# Multi-Config Package Development

This guide will walk you through the steps to develop a multi-config Dappnode package, allowing you to create multiple package configurations from a single source. We'll use the Lodestar Generic package as a reference, which builds multiple variants for different networks like Mainnet, Holesky, and Gnosis.

## Step 1: Initialize the Package

Start by running the following command to initialize your multi-variant Dappnode package:

```bash
npx @dappnode/dappnodesdk@latest init --use-variants
```

This will create the following directory structure:

```
.
├── avatar-default.png
├── dappnode_package.json
├── docker-compose.yml
├── Dockerfile
└── package_variants
    ├── mainnet
    │   ├── dappnode_package.json
    │   └── docker-compose.yml
    └── testnet
        ├── dappnode_package.json
        └── docker-compose.yml
```

## Step 2: Customize your package

### Create a directory for each variant

Each variant of your package will have its own configuration files under `package_variants`. For example, if you have `mainnet` and `testnet` variants, you will find the following:

```
package_variants/
├── mainnet/
│   ├── dappnode_package.json
│   └── docker-compose.yml
└── testnet/
    ├── dappnode_package.json
    └── docker-compose.yml
```

The contents within each variant directory include the fields that differ from one variant to another. When building a specific variant, such as `testnet`, the data from these variant-specific files is merged with the root-level `dappnode_package.json` and `docker-compose.yml`. This ensures that only the necessary variant-specific changes are applied, while the common configuration remains consistent across all variants.

You can add more variants as needed by creating additional directories and files following this structure.

### Customize the Avatar

Replace the default avatar (`avatar-default.png`) with a square `.png` image that represents your package (recommended dimensions: width between 200px and 300px). This image will appear in the Dappnode UI, so it's important to choose one that aligns with your package's branding. The avatar is common for each of the variants.

### Key Changes in `docker-compose.yml` and `dappnode_package.json`

In the root-level `docker-compose.yml` and `dappnode_package.json`, specify the general configuration that applies across all variants.

Each variant in `package_variants` will have its own `docker-compose.yml` and `dappnode_package.json`, tailored to the network or environment it is intended for.

For example, `package_variants/mainnet/docker-compose.yml` could define services using `NETWORK=mainnet`, while `package_variants/testnet/docker-compose.yml` would use `NETWORK=testnet`.

Example of a variant-specific `dappnode_package.json`:

```json
{
  "name": "test-mainnet.public.dappnode.eth",
  "version": "0.1.0",
  "type": "service"
}
```

And the corresponding `docker-compose.yml`:

```json
version: "3.5"
services:
  test:
    build:
      args:
        NETWORK: mainnet

```

### Simplified Dockerfile

Here’s an example of the `Dockerfile` used for the Lodestar Generic package. This `Dockerfile` is responsible for configuring the Lodestar Ethereum client and handling multiple variants.

```Dockerfile
ARG UPSTREAM_VERSION

FROM chainsafe/lodestar:${UPSTREAM_VERSION}

ARG NETWORK
ARG STAKER_SCRIPTS_VERSION

# Additional envs

ENV STAKER_SCRIPTS_URL=https://github.com/dappnode/staker-package-scripts/releases/download/${STAKER_SCRIPTS_VERSION}

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

# These scripts provide useful tools for the entrypoint
ADD ${STAKER_SCRIPTS_URL}/consensus_tools.sh /etc/profile.d/
RUN chmod +rx /etc/profile.d/consensus_tools.sh

# Additional commands or package installation

# This environment variable sets the variant (e.g., mainnet, testnet)
ENV NETWORK=${NETWORK}

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
```

### Simplified entrypoint

The `entrypoint.sh` script for the Lodestar client manages different network setups (e.g., Holesky, Gnosis, Mainnet) and configures runtime flags accordingly. Here’s a simplified version:

```bash
#!/bin/sh

SUPPORTED_NETWORKS="gnosis holesky mainnet"
MEVBOOST_FLAG_KEY="--builder"
CLIENT="lodestar"

# Load the tools scripts
. /etc/profile

# Get the necessary environment variables for the beacon node
ENGINE_URL="http://execution.${NETWORK}.staker.dappnode:8551"
VALID_FEE_RECIPIENT=$(get_valid_fee_recipient "${FEE_RECIPIENT}")
MEVBOOST_FLAG=$(get_mevboost_flag "${NETWORK}" "${MEVBOOST_FLAG_KEY}")

JWT_SECRET=$(get_jwt_secret_by_network "${NETWORK}")
echo "${JWT_SECRET}" >"${JWT_FILE_PATH}"

# Start the beacon node with the appropriate flags
echo "[INFO - entrypoint] Running beacon node"

FLAGS="beacon \
    --network=${NETWORK} \
    --suggestedFeeRecipient=${VALID_FEE_RECIPIENT} \
    --jwt-secret=${JWT_FILE_PATH} \
    --execution.urls=${ENGINE_URL} \
    # ... Additional flags here
    --logFileDailyRotate=5 $MEVBOOST_FLAG $EXTRA_OPTS"

# Run the Lodestar client with the specified flags
exec ${CLIENT_BIN} $FLAGS
```

### Prometheus and Grafana

In multi-variant packages, you can use a common Grafana dashboard located at the root level, while each variant can have its own Prometheus targets. These are stored in variant-specific directories like `package_variants/gnosis/prometheus-targets.json`.

By following this guide, you’ll be able to create multi-variant packages that support different networks or configurations within a single source code base.

## Step 3: Build the packages

Once your variants are configured, build any of them using the following command:

```bash
npx @dappnode/dappnodesdk@latest build --variants=<comma-separated-list-of-variants>
```

If you want to build all variants at the same time, you can use:

```bash
npx @dappnode/dappnodesdk@latest build --all-variants
```

These commands will package your services, making them ready for installation on Dappnode machines.

## Step 4: Publish the Packages

Once you have built your variants, you can choose to publish them. While publishing is optional if you only want to use the package locally, it is required if you want your package to be available in the public Dappstore for other users to discover and install.

The publish command allows you to specify which variants you want to publish, using the same `--variants` flag as the build command. You can publish one or more variants as follows:

```bash
npx @dappnode/dappnodesdk@latest publish --type=<patch/minor/major> --variants=<comma-separated-list-of-variants> --eth-provider=<your ETH RPC> --content-provider=<your IPFS API> --developer-address=<the address to sign>
```

If you want to generate all variants publish links at once, you can use the following command:

```bash
npx @dappnode/dappnodesdk@latest publish --type=patch --all-variants --eth-provider=https://your-eth-node --content-provider=https://your-ipfs-api --developer-address=0xYourAddress
```

After running the publish command, you will receive a link to sign the transaction to complete the publishing process.

### Automating Publication with GitHub Actions

If your package source code is hosted on GitHub, you can automate the publishing process by setting up GitHub Actions. Use the workflows [here](/docs/dev/github-actions.md) to integrate publishing workflows, ensuring your package builds and publishes automatically.

By following these steps, you'll be able to develop, build, and publish multi-variant packages on Dappnode, making it easier to support multiple configurations from a single codebase.
