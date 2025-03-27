# 🔔 Package notifications

Notifications are a way to inform users about events that are happening in the dappnode. They are displayed in the [notifications tab](http://dappmanager.dappnode/notifications) in the dappnode UI. Notifications are sent by a third party software "gatus" that monitors the services running in the dappnode or arbitrary services that send notifications. The user will be able to configure the notifications they want to receive as well as the tresholds (if any) for the notifications.

:::info
It is mandatory for users to receive notifications having installed the [Notifications package](https://github.com/dappnode/DNP_NOTIFICATIONS)
:::

**Notifications structure**: each notification has a structure that includes the following fields:

- `title`: The title of the notification. Belongs to notification payload.
- `body`: The body of the notification. Belongs to notification payload.
- `category`: The category of the notification. This is used to group notifications by type. Belongs to notification payload.
- `dnpName`: The DNP name of the package that sent the notification. This is used to identify the package that sent the notification. Belongs to notification payload.
- `seen`: A boolean value that indicates whether the notification has been seen by the user or not. It is handled automatically by the notifications package, setting the default value false. Seen will be set to true once the uer sees the notification.
- `timestamp`: The timestamp of when the notification was sent. This is used to sort notifications by date. It is automatically set by the notifications package when receiving the notification.
- `callToAction`: An optional field that includes a title and a URL. This is used to provide a link to the user to take action on the notification. Belongs to notification payload.
  - `title`: The title of the call to action. This is used to provide a title for the link.
  - `url`: The URL of the call to action. This is used to provide a link for the user to take action on the notification.
- `errors`: An optional field that includes an error message. This is used to provide additional information about the notification. If provided, the notification will not be shown in the inbox. Belongs to notification payload.
- `icon`: An optional field that includes an icon URL. This is used to provide an icon for the notification. If not provided it will be used the pkg icon that sent the notification. Belongs to notification payload.

```json
{
  "title": "string", // e.g "Geth ethereum node sync status"
  "body": "string", // e.g "Triggered: Geth ethereum node syncing"
  "category": "string", // e.g "ethereum"
  "dnpName": "string", // e.g "geth.dnp.dappnode.eth"
  "seen": "boolean", // e.g "false"
  "timestamp": "string", // e.g "2023-10-01T12:00:00Z"
  "callToAction?": {
    "title": "string", // e.g "View logs"
    "url": "string" // e.g "http://dappmanager.dappnode/packages/my/geth.dnpo.dappnode.eth/logs"
  },
  "errors?": "string", // e.g "Error: no such host: geth.dappnode"
  "icon?": "string" // e.g "https://gateway.ipfs.dappnode.io/ipfs/QmTVc5LQkTuaN3VxcteQ2E27pHSVJakE6XPo2FMxQTP284"
}
```

**Notifications package API**: The notifications package exposes an API that allows other packages to send notifications. The API is a simple HTTP POST request that includes the notification structure as the body of the request. The API is available at the following URL: `http://notifier.notifications.dappnode:8080/api/v1/notifications`.

```bash
curl -X POST \
  http://notifier.notifications.dappnode:8080/api/v1/notifications \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Test notification",
    "body": "This is a test notification sent with curl",
    "category": "other",
    "dnpName": "test.dnp.dappnode.eth",
    "callToAction": {
      "title": "Hello world",
      "url": "http://dappmanager.dappnode"
    },
    "icon": "https://gateway.ipfs.dappnode.io/ipfs/QmTVc5LQkTuaN3VxcteQ2E27pHSVJakE6XPo2FMxQTP284"
}'
```

## Notifications Inbox

The notifications inbox is a place where users can see all the notifications that have been sent to them. The notifications are grouped by category and can be filtered by date, dnpName and category. Users can also mark notifications as read or delete them.

<p align="center">
  <img src="/img/notifications-inbox.png" alt="unsub-initial-dialog" width="400"/>
</p>

## Notifications Settings

The notifications settings are a place where users can configure the notifications they want to receive. Users can enable or disable notifications for each category and set the thresholds for each notification. The thresholds are used to determine when a notification should be sent. For example, if a user wants to receive a notification when the CPU usage is above 80%, they can set the threshold to 80%. If the CPU usage is above 80%, a notification will be sent.

<p align="center">
  <img src="/img/notifications-settings.png" alt="unsub-initial-dialog" width="400"/>
</p>

## Gatus endpoints

The most common and easiest way to configure notifications in dappnode is using the [gatus](https://github.com/TwiN/gatus) standard. To configure notifications using gatus, you need to create a `*notifications.yaml` file. This file must follow the standard defined in the [gatus - notifications file reference]().

Gatus will take care of monitoring the endpoint you defined, automatically triggering the alert with the desired notification payload. Furhtermore you can benefit from some of the gatus features, such as:

- `interval`: The interval at which the endpoint will be monitored. This is used to determine how often the endpoint will be checked.
- `failure-threshold`: The number of consecutive failures before the alert is triggered. This is used to determine how many times the endpoint must fail before a notification is sent.
- `success-threshold`: The number of consecutive successes before the alert is resolved. This is used to determine how many times the endpoint must succeed before the notification is resolved.
- `send-on-resolved`: If set to true, a notification will be sent when the alert is resolved. This is used to inform the user when the issue has been resolved.

**Example**

```yaml
endpoints:
  - name: "Mainnet ETH Node Syncing Check" # Notification title
    enabled: true
    group: "ethereum" # Notification category
    url: "http://geth.dappnode:8545" # Notification dnpName
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

In the example from above:

- Notification payload:
  - Name: will be used as the title of the notification.
  - Alerts - description: will be used as the body of the notification.
  - Group: will be used as the category of the notification.
  - URL: will be used as the dnpName of the notification. The dnpName will be inferred from the URL.
- Notification settings:
  - Title: will be used as the title of the notification in the notifications settings.
  - Description: will be used as the description of the notification in the notifications settings.

:::info
[Gatus](https://github.com/TwiN/gatus) is a third party software that monitors the services defined in a config file. It can be configured to trigger automatic alerting based on needs.
:::

## Custom endpoints

There might be some cases where Gatus has some limitations and your notification requires some custom logic. In this case, you can create a custom endpoint that will be triggered by Gatus. This endpoint will be responsible for sending the notification to the notifications package.

When using custom endpoints, you need to retrieve the user settings from the dappmanager API:

```bash
curl -X GET \
  http://dappmanager.dappnode/package-manifest/dms.dnp.dappnode.eth \
  -H 'Content-Type: application/json'
```

You will receive the manifest as a response from the server. Within this manifest you can get the notifications user settings for the custom endpoints:

```json
{
  "notifications": {
    "customEndpoints": [
      {
        "name": "string", // e.g "Package updates notifications"
        "description": "string", // e.g "Receive package updates notifications when a new version is available."
        "enabled": true // e.g true
      }
    ]
  }
}
```

From the example above, you can see that the user has enabled the custom endpoint for such notifications. You can use this information to trigger the notification.

**Example**

```yaml
customEndpoints:
  - name: "Package updates notifications"
    description: "Receive package updates notifications when a new version is available."
    enabled: true
```

## Communication channels

As for now there are only the UI communication channel with the user.

There are plans to implement more communications channels, probably with the following priorities:

- Web push notifications
- Telegram
