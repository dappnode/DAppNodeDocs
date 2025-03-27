# 🔔 Package Notifications

Notifications are a way to inform users about events happening in the DAppNode. They are displayed in the [notifications tab](http://dappmanager.dappnode/notifications) within the DAppNode UI. Notifications are sent by third-party software, "Gatus," which monitors the services running in the DAppNode or arbitrary services that send notifications. Users can configure the notifications they want to receive and set thresholds (if applicable) for these notifications.

:::info
It is mandatory for users to install the [Notifications package](https://github.com/dappnode/DNP_NOTIFICATIONS) to receive notifications.
:::

---

## **Notification Structure**

Each notification has a structure that includes the following fields:

- `title`: The title of the notification. Part of the notification payload.
- `body`: The body of the notification. Part of the notification payload.
- `category`: The category of the notification, used to group notifications by type. Part of the notification payload.
- `dnpName`: The DNP name of the package that sent the notification, used to identify the source package. Part of the notification payload.
- `seen`: A boolean value indicating whether the notification has been seen by the user. This is handled automatically by the notifications package, with a default value of `false`. It is set to `true` once the user views the notification.
- `timestamp`: The timestamp of when the notification was sent, used to sort notifications by date. This is automatically set by the notifications package when the notification is received.
- `callToAction`: An optional field that includes a title and a URL, providing a link for the user to take action on the notification. Part of the notification payload.
  - `title`: The title of the call to action.
  - `url`: The URL for the call to action.
- `errors`: An optional field that includes an error message, providing additional information about the notification. If provided, the notification will not be shown in the inbox. Part of the notification payload.
- `icon`: An optional field that includes an icon URL, used to display an icon for the notification. If not provided, the icon of the package that sent the notification will be used. Part of the notification payload.

---

### **Example Notification Payload**

```json
{
  "title": "string", // e.g., "Geth Ethereum Node Sync Status"
  "body": "string", // e.g., "Triggered: Geth Ethereum Node Syncing"
  "category": "string", // e.g., "ethereum"
  "dnpName": "string", // e.g., "geth.dnp.dappnode.eth"
  "seen": false, // e.g., false
  "timestamp": "string", // e.g., "2023-10-01T12:00:00Z"
  "callToAction": {
    "title": "string", // e.g., "View Logs"
    "url": "string" // e.g., "http://dappmanager.dappnode/packages/my/geth.dnp.dappnode.eth/logs"
  },
  "errors": "string", // e.g., "Error: no such host: geth.dappnode"
  "icon": "string" // e.g., "https://gateway.ipfs.dappnode.io/ipfs/QmTVc5LQkTuaN3VxcteQ2E27pHSVJakE6XPo2FMxQTP284"
}
```

---

## **Notifications Package API**

The notifications package exposes an API that allows other packages to send notifications. This API is a simple HTTP POST request that includes the notification structure as the body of the request. The API is available at the following URL:

```
http://notifier.notifications.dappnode:8080/api/v1/notifications
```

### **Example API Request**

```bash
curl -X POST \
  http://notifier.notifications.dappnode:8080/api/v1/notifications \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Test Notification",
    "body": "This is a test notification sent with curl",
    "category": "other",
    "dnpName": "test.dnp.dappnode.eth",
    "callToAction": {
      "title": "Hello World",
      "url": "http://dappmanager.dappnode"
    },
    "icon": "https://gateway.ipfs.dappnode.io/ipfs/QmTVc5LQkTuaN3VxcteQ2E27pHSVJakE6XPo2FMxQTP284"
}'
```

---

## **Notifications Inbox**

The notifications inbox is a place where users can see all the notifications that have been sent to them. Notifications are grouped by category and can be filtered by date, `dnpName`, and category. Users can also mark notifications as read or delete them.

<p align="center">
  <img src="/img/notifications-inbox.png" alt="Notifications Inbox" width="400"/>
</p>

---

## **Notifications Settings**

The notifications settings allow users to configure the notifications they want to receive. Users can enable or disable notifications for each category and set thresholds for each notification. Thresholds determine when a notification should be sent. For example, if a user wants to receive a notification when CPU usage exceeds 80%, they can set the threshold to 80%. If the CPU usage goes above 80%, a notification will be sent.

<p align="center">
  <img src="/img/notifications-settings.png" alt="Notifications Settings" width="400"/>
</p>

---

## **Gatus Endpoints**

The most common and easiest way to configure notifications in DAppNode is by using the [Gatus](https://github.com/TwiN/gatus) standard. To configure notifications using Gatus, you need to create a `*notifications.yaml` file. This file must follow the standard defined in the [Gatus - notifications file reference]().

Gatus monitors the endpoints you define and automatically triggers alerts with the desired notification payload. Additionally, you can benefit from Gatus features such as:

- `interval`: The interval at which the endpoint will be monitored.
- `failure-threshold`: The number of consecutive failures before the alert is triggered.
- `success-threshold`: The number of consecutive successes before the alert is resolved.
- `send-on-resolved`: If set to `true`, a notification will be sent when the alert is resolved.

### **Example**

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
    alerts:
      - type: custom
        enabled: true
        description: "Geth Ethereum Node syncing" # Notification description
        failure-threshold: 2
        success-threshold: 1
        send-on-resolved: true
```

---

## **Custom Endpoints**

In cases where Gatus has limitations, you can create custom endpoints that will be triggered by Gatus. These endpoints are responsible for sending notifications to the notifications package.

To use custom endpoints, retrieve the user settings from the DAppManager API:

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

### **Example**

```yaml
customEndpoints:
  - name: "Package updates notifications"
    description: "Receive package updates notifications when a new version is available."
    enabled: true
```

---

## **Communication Channels**

Currently, the only communication channel available is the DAppNode UI. However, there are plans to implement additional communication channels, with the following priorities:

1. Web push notifications
2. Telegram
