# Metrics Collected by Ethical Metrics

In Dappnode, we are fully committed to maintaining total transparency about the metrics we collect from your dappnode when using Ethical Metrics. We want you to have a clear understanding of the information that is being monitored. The metrics we collect fall into several categories. Here's an overview of the metrics we gather.

:::info
Ethical Metrics is one of our newest packages and it is still under improvement. This section will be updated as we add or remove metrics.
:::

## Dappnode host metrics

These are all the metrics related directly to the host machine running your dappnode. All of these metrics are collected by the Dappnode Exporter package.
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
The following are all the metrics related to your dappnode configuration. These are all stored in your dappmanager.
- `dappmmanager_staker_config`: Your current staking package. 
- `dappmanager_ipfs_client_target_local`: Wether IPFS client is in local or remote mode.
- `dappmanager_eth_fallback_enabled`: Wether the ethereum fallback client is enabled.
- `dappmanager_eth_client_target_local`: Wether ethereum client is in local or remote mode.
- `dappmanager_auto_updates_user_packages`: Wether auto updates for user packages is enabled.
- `dappmanager_auto_updates_system_packages`: Wether auto updates for system packages is enabled.

<!-- ## Eth2 Staking Metrics

- `eth2_slashingprotection_prevented_signings`: Number of prevented Eth2 slashing protection signings.
- `signing_signers_loaded_count`: Count of loaded signers for signing.
- `signing_bls_signing_duration`: Duration of BLS signing.
- `signing_bls_signing_duration_count`: Count of BLS signing durations.
- `signing_bls_signing_duration_sum`: Sum of BLS signing durations.
- `signing_bls_missing_identifier_count`: Count of missing BLS identifier. -->

These metrics provide insights into various aspects of your dappnode's performance and health, including resource utilization, memory usage, disk activity, and Eth2 staking-related data. Rest assured that your privacy is of utmost importance to us, and all data transmission occurs through the TOR network to protect your privacy.

For any questions or concerns about the metrics collected by Ethical Metrics, feel free to reach out to our support team.