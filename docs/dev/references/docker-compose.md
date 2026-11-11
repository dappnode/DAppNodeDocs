---
title: "Docker compose file"
llm_description: "Reference for docker-compose.yml structure, environment variables, and build arguments."
---

# Docker compose file

Dappnode packages are built upon Docker containers. The heart of defining how these containers run and interact lies in the `docker-compose.yml` file. In this guide, we will explain the typical structure of the `docker-compose.yml` file for a Dappnode package.

## Basic Example

A simple `docker-compose.yml` file looks like this:

```yaml
version: "3.5"
services:
  test.public.dappnode.eth:
    build: .
    image: "test.public.dappnode.eth:0.1.0"
    restart: unless-stopped
```

This example illustrates the basic elements, which include the version of the docker-compose file, services, and the service's basic attributes.

## Complex Example

A more intricate `docker-compose.yml` file could look like this:

```yaml
version: "3.5"
services:
  beacon-chain:
    build:
      context: beacon-chain
      args:
        UPSTREAM_VERSION: v4.0.7
    volumes:
      - "beacon-chain-data:/data"
    ports:
      - "12603:12603/tcp"
      - "12603:12603/udp"
    restart: unless-stopped
    environment:
      P2P_PORT: 12603
      CHECKPOINT_SYNC_URL: "https://checkpoints.mainnet.lukso.network"
      EXTRA_OPTS: ""
      LOG_VERBOSITY: info
      MIN_SYNC_PEERS: "0"
      MAX_PEERS: "250"
      SUBSCRIBE_ALL_SUBNETS: "true"
  validator:
    build:
      context: validator
      args:
        UPSTREAM_VERSION: v4.0.7
    volumes:
      - "validator-data:/data"
    restart: unless-stopped
    environment:
      LOG_VERBOSITY: info
      GRAFFITI: validating_from_DAppNode
      ENABLE_DOPPELGANGER: "true"
      EXTRA_OPTS: ""
volumes:
  beacon-chain-data: {}
  validator-data: {}
```

In the complex example, you'll find:

- Multiple services (like `beacon-chain` and `validator`).
- Build arguments, such as the relevant `UPSTREAM_VERSION`.
- Defined volumes, ports, and environment variables.

### Notable Features

#### Environment Variables

- All environment variables (`envs`) defined in the `docker-compose.yml` file will be visible in the package config post-installation. Users can modify these.
- If the package has a `setup-wizard`, those environment variables not set within it will be hidden by default in the configuration. Users can view these by selecting "Show advanced config".

#### Upstream build arguments

Declare an explicit argument for each upstream, such as `UPSTREAM_VERSION`, `GETH_VERSION` or `TEKU_VERSION`. The name is not fixed; it must match `upstream[].arg` exactly. Use a mapping under `build.args`.

Manifest excerpt:

```json
{
  "upstream": [
    { "repo": "ConsenSys/teku", "version": "v4.0.7", "arg": "TEKU_VERSION" }
  ]
}
```

Corresponding compose build configuration:

```yaml
services:
  beacon-chain:
    build:
      context: beacon-chain
      args:
        TEKU_VERSION: v4.0.7
```

```dockerfile
ARG TEKU_VERSION
FROM consensys/teku:${TEKU_VERSION}
```

If several services declare `TEKU_VERSION`, every value must match the manifest version. A digest pin must contain the same version followed by `@sha256:` and 64 hexadecimal characters. The legacy top-level `upstreamRepo`, `upstreamVersion` and `upstreamArg` fields are deprecated; use the [upstream array](manifest.md#upstream).

#### The `EXTRA_OPTS` Environment Variable

- `EXTRA_OPTS` is an environment variable that allows users to add any flags that might not have been included by default. 
- Here's a typical use case for `EXTRA_OPTS` in the entrypoint script:

  ```bash
  exec /opt/teku/bin/teku \
      --network=prater \
      ...(omitting other flags) \
      --log-destination=CONSOLE \
      $EXTRA_OPTS
  ```