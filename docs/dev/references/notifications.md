# Notifications File Reference

This document serves as a reference for the Notifications configuration file in DAppNode. It defines the structure, fields, and expected values based on the [JSON Schema](https://github.com/dappnode/DAppNode/raw/schema/notifications.schema.json).

---

## Root Object

The root object defines the top-level structure and contains the following properties:

### `endpoints` (optional)

An array of configured notification endpoints.

Each endpoint object includes:

- **`name`** (`string`, required): Unique name for the endpoint.
- **`enabled`** (`boolean`, required): Whether this endpoint is active.
- **`url`** (`string`, required): URL to send notifications to. Must match the pattern `^(https?|ftp)://[^s/$.?#].[^s]*$`
- **`method`** (`string`, required): HTTP method to use. One of: `GET`, `POST`, `PUT`, `DELETE`
- **`conditions`** (`string[]`, required): Array of string expressions representing the conditions that trigger the alert.
- **`interval`** (`string`, required): Time between checks. Must match the pattern `^[0-9]+[smhd]$` (e.g., `10s`, `5m`, `1h`, `1d`).
- **`group`** (`string`, required): Group to which the endpoint belongs.
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

Defines custom metrics that are not covered by built-in endpoints.

Each object includes:

- **`enabled`** (`boolean`, required): Whether the custom endpoint is active.
- **`name`** (`string`, required): Unique name for the custom metric.
- **`description`** (`string`, required): Explanation of the custom metric.
- **`metric`** (`object`, optional): Metric boundaries and unit.
  - **`treshold`** (`number`, optional): Threshold value to trigger alert (note: possibly a typo, intended to be `threshold`).
  - **`min`** (`number`, optional): Minimum acceptable value.
  - **`max`** (`number`, optional): Maximum acceptable value.
  - **`unit`** (`string`, optional): Measurement unit.

---

## Notes

- Schema draft version: [JSON Schema Draft-07](http://json-schema.org/draft-07/schema#)
- Schema ID: `https://github.com/dappnode/DAppNode/raw/schema/notifications.schema.json`
- Fields not marked as required are considered optional.
- This schema is extensible to allow future fields and integrations.

---

For examples or more usage details, visit the [DAppNode developer documentation](https://docs.dappnode.io).
