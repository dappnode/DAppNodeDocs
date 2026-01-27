---
llm_description: "Prometheus and Grafana metrics framework for DAppNode packages via DMS."
---

# 📊 Package Metrics

DAppNode supports an integrated metrics framework based on [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/), powered by the [DMS package](https://docs.dappnode.io/docs/user/packages/dms/).

This framework enables package developers to expose useful metrics and provide prebuilt dashboards to monitor their services.

:::tip
🧠 What is DMS?
The DMS (DAppNode Monitoring Stack) package collects metrics using Prometheus and visualizes them through Grafana. It automatically discovers and injects metrics configurations from installed packages.
:::

## ⚙️ How It Works

To use the metrics framework in your package:

1. The DMS package must be installed by the user.
2. Your package must include:

   - One or more Grafana dashboard files
   - A Prometheus targets file

## 🧱 File Structure & Naming Convention

These files must follow specific naming conventions and formats:

- **Grafana dashboard files**:
  - Name: Must follow this naming pattern `/.*grafana-dashboard.json$/` and be placed in the root directory of your package (or within the variant directory).
  - Max size: 10MB
  - Multiple files: You can include multiple dashboard files, and they will be merged into a single dashboard in Grafana.
- **Prometheus targets file**:
  - Name: Must follow this naming pattern `/.*prometheus-targets.(json|yaml|yml)$/` and be placed in the root directory of your package (or within the variant directory).
  - Max size: 1MB
  - Only one file: You can only include one targets file.

:::tip
💡 Need the DNS name of a service to configure Prometheus targets?
Refer to the [Package DNS documentation](https://docs.dappnode.io/docs/dev/dns) to learn how to reference services within your Prometheus targets.
:::

## 📦 Single vs Multi-Variant Package Configuration

**Single Variant**
For packages with a single variant:

- Place 1 Prometheus targets file in the root of the package.
- Add as many Grafana dashboard files as needed in the same root directory.

**Multi-Variant**
For multi-variant packages:

- Place Grafana dashboard files in the root of the package, as they are usually shared. See [example](https://github.com/dappnode/DAppNodePackage-geth-generic/blob/main/geth-grafana-dashboard.json).

  :::tip
  📁 Example:
  geth-grafana-dashboard.json
  :::

- Place Prometheus targets files in each variant directory, as the data source may differ per variant. See [example](https://github.com/dappnode/DAppNodePackage-geth-generic/blob/main/package_variants/mainnet/prometheus-targets.json).

  :::tip
  📁 Example:
  mainnet/prometheus-targets.json
  :::

## 📊 Default Dashboards

The DMS package includes default dashboards and Prometheus targets for [cadvisor](https://github.com/google/cadvisor) and [node_exporter](https://github.com/prometheus/node_exporter). These dashboards provide metrics about the host and Docker containers running on the host.

- [Host dashboards](http://dms.dappnode/d/dms-host/host?orgId=1&refresh=10s)
- [Docker dashboards](http://dms.dappnode/d/dms-docker/docker?orgId=1&refresh=2h)

## 🔗 Useful Links

- Grafana: Access Grafana dashboards, create new ones, and more. **http://dms.dappnode/dashboards**
- Prometheus: Access the Prometheus UI to check target statuses, perform manual queries, and more. **http://prometheus.dms.dappnode:9090/**
- Manager status: Debug which dashboards and targets have been uploaded successfully. **http://manager.dms.dappnode/**
