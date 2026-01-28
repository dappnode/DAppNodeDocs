> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Metrics Collected by Ethical Metrics

Dappnode has absolutely no hidden telemetry and is completely private by design. We were reluctant of setting up a monitoring service because we did NOT want to collect any data from our users. Because of our community's continuous requests to offer alerts, we came up with a solution that doesn't compromise your privacy.

Even if we can't link the metrics from your Dappnode to your identity, **we are fully committed to maintain total transparency about the metrics we collect from your Dappnode when using Ethical Metrics**. We want you to have a clear understanding of the information that is being monitored. The metrics we collect fall into several categories. Here's an overview of the metrics we gather.

:::info
These metrics also help us better allocate resources by knowing what our users are running on their Dappnodes. This way, we can better understand which packages are the most popular and which ones need improvement.
:::

:::note
Ethical Metrics is one of our newest packages and it is still under constant improvement. This section will be updated as we add or remove metrics.
:::

## Dappnode host metrics

These are all the metrics related directly to the host machine running your Dappnode. All of these metrics are collected by the Dappnode Exporter package.

- `node_cpu_seconds_total`: Total CPU usage in seconds by the node.
- `container_memory_usage_bytes`: Memory usage in bytes by containers.
- `container_memory_cache`: Memory cache usage by containers.
- `node_memory_MemTotal_bytes`: Total memory available in bytes on the node.
- `node_memory_MemFree_bytes`: Free memory in bytes on the node.
- `node_memory_Buffers_bytes`: Memory used for buffers in bytes on the node.
- `node_memory_Cached_bytes`: Cached memory in bytes on the node.
- `node_disk_io_time_seconds_total`: Total disk I/O time in seconds on the node.
- `node_disk_reads_completed_total`: Total completed disk reads on the node.
- `node_disk_writes_completed_total`: Total completed disk writes on the node.
- `container_fs_usage_bytes`: Filesystem usage by containers in bytes.
- `node_filesystem_size_bytes`: Total size of the filesystem in bytes on the node.
- `node_filesystem_free_bytes`: Free space in the filesystem in bytes on the node.
- `container_last_seen`: Timestamp of the last seen container.
- `cadvisor_version_info`: Information about the cAdvisor version.
- `container_cpu_usage_seconds_total`: Total CPU usage in seconds by containers.

## Dappmanager metrics

The following are all the metrics related to your Dappnode's configuration. These are all stored in your Dappmanager.

- `dappmmanager_staker_config`: Your current staking package.
- `dappmanager_ipfs_client_target_local`: Whether IPFS client is in local or remote mode.
- `dappmanager_eth_fallback_enabled`: Whether the ethereum fallback client is enabled.
- `dappmanager_eth_client_target_local`: Whether ethereum client is in local or remote mode.
- `dappmanager_auto_updates_user_packages`: Whether auto updates for user packages is enabled.
- `dappmanager_auto_updates_system_packages`: Whether auto updates for system packages is enabled.
- `dappmanager_host_info`: Details including Docker and Docker Compose versions, kernel version, operating system version, and architecture type.

## Staking Metrics

The following metrics are all related directly to the staking packages, including Web3Signer.

- `eth2_slashingprotection_prevented_signings`: Number of prevented slashing signings.
- `signing_signers_loaded_count`: Count of loaded validators signing in web3signer.
- `signing_bls_signing_duration`: Duration of BLS signing.
- `signing_bls_signing_duration_count`: Count of BLS signing durations.
- `signing_bls_signing_duration_sum`: Sum of BLS signing durations.
- `signing_bls_missing_identifier_count`: Count of missing BLS identifier.
- `api_rpc_cons_peers`: Number of connected peers to your staking execution clients.
- `api_rpc_exec_peers`: Number of connected peers to your staking consensus clients.
- `api_rpc_cons_syncing`: Whether your staking execution clients are syncing.
- `api_rpc_exec_syncing`: Whether your staking consensus clients are syncing.

To sum it up, the metrics we collect give us a peek into how your Dappnode is doing overall, how it allocates resources, memory, disk, and even info related to staking performance.

Your privacy is of utmost importance to us. Remember that all this data transmission occurs through the TOR network to protect your privacy.

:::note
For any questions or concerns about the metrics collected by Ethical Metrics, feel free to reach out to our support team.
:::
