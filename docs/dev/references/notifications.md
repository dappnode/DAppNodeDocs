> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Notifications File Reference (Comming soon)

This document serves as a reference for the Notifications configuration file in DAppNode. It defines the structure, fields, and expected values based on the [JSON Schema](https://github.com/dappnode/DAppNode/raw/schema/notifications.schema.json).

---

## Root Object

The root object defines the top-level structure and contains the following properties:

### (Gatus) `endpoints` (optional)

The most common and easiest way to configure notifications in DAppNode is by using the [Gatus](https://github.com/TwiN/gatus) standard. To configure notifications using Gatus, you need to create a `*notifications.yaml` file. This file must follow the standard defined in the [Gatus - notifications file reference](https://docs.dappnode.io/docs/dev/references/notifications).

Gatus monitors the endpoints you define and automatically triggers alerts with the desired notification payload. Additionally, you can benefit from Gatus features.

#### Example (gatus) `endpoints`

```yaml
endpoints:
  - name: "Mainnet ETH Node Syncing Check" # Notification title
    enabled: true
    group: "ethereum"
    url: "http://geth.dappnode:8545"
    method: "POST"
    body: |
      {"jsonrpc": "2.0", "id": 1, "method": "eth_syncing", "params": []}
    headers:
      Content-Type: "application/json"
    interval: "30s"
    conditions:
      - "[BODY].result == false"
    definition:
      title: "Mainnet ETH Node Synced Check" # Notifications - settings: title of the notification to be configured
      description: "Check if the Mainnet ETH Node is synced. You will receive a notification if the node is syncing and another one when it is synced." # Notifications - settings: description of the notification to be configured
    correlationId: "geth-eth-syncing" # Unique identifier for each notification endpoint
    isBanner: false  
    priority: "medium"
    alerts:
      - type: custom
        enabled: true
        description: "Geth Ethereum Node syncing" # Notification description
        failure-threshold: 2
        success-threshold: 1
        send-on-resolved: true
```

An array of configured notification endpoints. Each endpoint object includes:

- **`name`** (`string`, required): Unique name for the endpoint.
- **`enabled`** (`boolean`, required): Whether this endpoint is active.
- **`url`** (`string`, required): URL to send notifications to. Must match the pattern `^(https?|ftp)://[^s/$.?#].[^s]*$`
- **`method`** (`string`, required): HTTP method to use. One of: `GET`, `POST`, `PUT`, `DELETE`
- **`conditions`** (`string[]`, required): Array of string expressions representing the conditions that trigger the alert.
- **`interval`** (`string`, required): Time between checks. Must match the pattern `^[0-9]+[smhd]$` (e.g., `10s`, `5m`, `1h`, `1d`).
- **`group`** (`string`, required): Group to which the endpoint belongs.
- **`correlationId`** (`string`, required): It is the unique identifier that links triggered and resolved notifications based on their endpoint.
- **`isBanner`** (`boolean`, required): Boolean that controls whether a banner displaying the notification appears at the top of the DAppManager UI. Should be set to `true` only for relevant notifications.
- **`priority`** (`string`, required): Priority that will be displayed on the notification. One of: `low`, `medium`, `high`, `critical`.
- **`alerts`** (`array`, required): List of alert configurations for this endpoint.

  Each alert object includes:

  - **`type`** (`string`, required): Alert type identifier.
  - **`failure-threshold`** (`integer`, required): Number of consecutive failures before alert triggers.
  - **`success-threshold`** (`integer`, required): Number of successful checks to mark alert as resolved.
  - **`send-on-resolved`** (`boolean`, required): Whether to send a notification when the alert is resolved.
  - **`description`** (`string`, required): Description of the alert.
  - **`enabled`** (`boolean`, required): Whether this alert is enabled.

- **`definition`** (`object`, required): Defines the endpoint's purpose.
  - **`title`** (`string`, required): Human-readable name.
  - **`description`** (`string`, required): Detailed explanation.
- **`metric`** (`object`, optional): Optional metadata about the metric.
  - **`min`** (`number`, optional): Minimum acceptable value.
  - **`max`** (`number`, optional): Maximum acceptable value.
  - **`unit`** (`string`, optional): Measurement unit (e.g., `%`, `ms`).

---

### `customEndpoints` (optional)

Defines custom metrics that are not covered by built-in endpoints. In cases where Gatus has limitations, you can create custom endpoints. These endpoints are responsible for sending notifications when required to the notifications package.

To use custom endpoints, you should retrieve the user settings from the DAppManager API:

```bash
curl -X GET \
  http://dappmanager.dappnode/package-manifest/dms.dnp.dappnode.eth \
  -H 'Content-Type: application/json'
```

The response will include the manifest with user settings for custom endpoints:

```json
{
  "notifications": {
    "customEndpoints": [
      {
        "name": "string", // e.g., "Package updates notifications"
        "description": "string", // e.g., "Receive package updates notifications when a new version is available."
        "enabled": true // e.g., true
      }
    ]
  }
}
```

#### Example `customEndpoints`

```yaml
customEndpoints:
  - name: "Package updates notifications"
    isBanner: false
    correlationId: "dappmanager-update-pkg"
    description: "Receive package updates notifications when a new version is available."
    enabled: true
```

Each object includes:

- **`enabled`** (`boolean`, required): Whether the custom endpoint is active.
- **`name`** (`string`, required): Unique name for the custom metric.
- **`description`** (`string`, required): Explanation of the custom metric.
- **`correlationId`** (`string`, required): It is the unique identifier that links triggered and resolved notifications based on their endpoint.
- **`isBanner`** (`boolean`, required): Boolean that controls whether a banner displaying the notification appears at the top of the DAppManager UI. Should be set to `true` only for relevant notifications.
- **`metric`** (`object`, optional): Metric boundaries and unit.
  - **`treshold`** (`number`, optional): Threshold value to trigger alert (note: possibly a typo, intended to be `threshold`).
  - **`min`** (`number`, optional): Minimum acceptable value.
  - **`max`** (`number`, optional): Maximum acceptable value.
  - **`unit`** (`string`, optional): Measurement unit.

---

## Updating the Notifications File

If the package is already published and you want to change the notifications, you need to update the `*notifications.yaml` file in the package repository. After making changes, you must publish a new version of the package for the updates to take effect.

:::warning
Changing the endpoint name will create a new notification and the old one will be removed. This is because the notification is identified by its name, and changing it will create a new entry in the notifications system.
:::

---

## Notes

- Schema draft version: [JSON Schema Draft-07](http://json-schema.org/draft-07/schema#)
- Schema ID: `https://github.com/dappnode/DAppNode/raw/schema/notifications.schema.json`
- Fields not marked as required are considered optional.
- This schema is extensible to allow future fields and integrations.
- The `*notifications.yaml` file will injected in the manifest (`dappnode_package.json`) for convenience. You can see the manifest inside the dappmanager container in the path `/usr/src/app/dnp_repo/<packageName>/dappnode_package.json`

---

For examples or more usage details, visit the [DAppNode developer documentation](https://docs.dappnode.io).
