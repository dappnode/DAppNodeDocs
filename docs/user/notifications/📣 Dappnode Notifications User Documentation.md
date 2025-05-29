---
title: "\U0001F4E3 Notifications system"

---

# 📣 Notification system

## 1. Overview

Dappnode Notifications is a built-in system that keeps you informed about important events and updates across your Dappnode setup. Whether it's a new software release, a hardware warning, or a consensus sync alert — notifications are your go-to source for staying up to date.

Notifications are package-based, meaning each package can send its own alerts. To receive notifications, you have the Notifications package installed by default and running on your Dappnode.

### Benefits

### 🖥️ Monitor Your Hardware and System in one channel

Get real-time alerts about your system health: CPU load, disk space, temperature, and more. 
It’s like having all the information about your Dappnode and staking setup in one place running 24/7.

### ⚙️ Customization for Every Package

You can fine-tune notification settings per package, including the thresholds that triggers different alerts in the package.  

### 📬 Direct communication from the Dappnode Team

Receive **direct messages** from the Dappnode team for critical network events like chain forks or urgent updates (e.g. the Pectra fork). This aims to stay ahead and take action before it’s too late.

### How to Access Notifications

### 🔔 Bell Icon

Find the **bell icon** at the top right corner of your Dappmanager. Click it to view new or past notifications. The bell icon will show a blue dot when new notifications are triggered.

### 📚 Side Menu

You’ll also find a dedicated **Notifications** section in the side menu.
![Notifications-access](/img/Notifications_access.png)


## 2. List of Notifications

This is the full list of events that will be notified in your Dappnode. 

### 🛠️ System Notifications

- Auto-updates (core and non-core packages)
- Repository health (IPFS, Ethereum)
- Host password security
- Wi-Fi password security
- Static IP address changes
- Host reboot required
- Disk usage warnings
- Package stoppages due to system limits
- No internet connection

### 📊 DMS (Dappnode Monitoring Service)

- Memory usage
- CPU load
- Disk status
- Device temperature

### ⚙️ Execution Clients

- Sync status
- Peer count

### ⚖️ Consensus Clients

- Sync status
- Peer count

### 📡 Direct Notifications

- Important messages from the Dappnode team

And more notifications of your validators are coming soon!

## 3. Notifications sections

In the new notification tab you can find three sections: Inbox, Settings and Legacy.

### 📨 Inbox

In the inbox section, you will see new notifications and the complete history.
To understand how notifications work, there are several key characteristic to consider:

- **New notification**: Unread notification that will show at the top of the history.
- **History**:  Notifications seen previously
- **Priority**: Importance level of the notification: Informational, Relevant, Important and Critical
    - **Informational** – Awareness only; no action is needed.
    - **Relevant** – Action is recommended but not urgent.
    - **Important** – Prompt action is strongly advised.
    - **Critical** – Immediate action is required.
- **Status**:  Two notification status: `Triggered` when the notification is active and it is sent, and `Resolved` when the event notified is back to normal.
- **Category**: There are different notifications categories: Hardware, System, Ethereum, Lukso, Gnosis and Hoodi. You can filter the notifications by category.
- **Banner**: It is shown at the top of the UI for urgent notices.
- **Filter:** You can filter notifications in the search bar by Package name (`DnpName`) Title and keywords.

![Notifications_inbox](/img/Notifications_inbox.png)


### 🛠️ Settings

In the settings section you can configure the type of notification you would like to receive per package. 

🧩 **Notifications master switch:** Enable/disable all notifications.

**📦 Package-Level Configuration**

- Package Switch: Enable/disable notifications in the **package**
- Customize which types of notifications are active
- Set thresholds with a **slider** (e.g., temperature limit before alert)

![Notifications_settings](/img/Notifications_settings.png)

### Legacy

In the legacy section you have access to the previous system of notifications with email and telegram. The aim of the new notification system is to unify the notifications in a single channel in desktop and mobile to facilitate the user experience and be more reliable, configurable and scalable. Therefore, this section will be deprecated in the upcoming core releases. 

![Notifications_legacy](/img/Notifications_legacy.png)


### The Notification system will evolve continuously
We hope the new notification system will help you to have a 360º tracking of your Dappnode and staking activity. New notifications will be added to improve your monitoring continuously.

If you have feedback to improve the new notifications, let us know all your ideas **here.**