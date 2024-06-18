# Understanding Dappnode Packages

## What are Dappnode packages and what features do they offer?

---

### **Introduction**

One of Dappnode's top features is to offer a user-friendly interface to interact with different packages that contain clients and other applications. This section will go over the basic features you'll find in any Dappnode package.

---

#### Info
- **Version**: You'll find both the package's version and its upstream version here.
- **Getting Started**: Some of the basic information needed to run the package.
- **URLs**: These will offer a number of different options, starting with bundled package UI/Dashboards and related tools such as Launchpads or external documentation.
- **Package Status**: Will provide information about the package's status, for example if it's running fine or if it has crashed or in the process of restarting.
- **Pause/Restart Package**: Useful for troubleshooting or restarting a stopped package.
- **Remove Volumes**: Also known as the "gray trash bin", this option will wipe all of the package's data and start syncing from scratch in the case of clients.
- **Remove Package**: This would be the "red trash bin", and clicking it will give you the option to preserve or delete the associated database.

![dappnode_packages1](/img/dappnode_packages1.png)

---

#### Config
The package's settings will be available under this tab in both a simple and advanced mode. The advanced mode can be accessed by clicking the lower-right corner of the screen when available.

![dappnode_packages2](/img/dappnode_packages2.png)

---

#### Network
- **Service**: Some packages may have multiple services running as part of the same container. This option will allow you to adjust each of their network settings separately.
- **Public port mapping**: Need to change your package's port mapping? You can change this setting in this field as well as its protocol between TCP and UDP.
- **HTTPs domain mapping**: Do you want to expose your package to the internet? You'll be able to add multiple public domains to your package here. This is a great way to share your node's RPC with friends and family!

![dappnode_packages3](/img/dappnode_packages3.png)

---

#### Logs
This is a great section for finding out something that is not working in your package or to look for both expected and unexpected behavior. Packages with multiple services will give you the option to switch logs in the top "Service" bar, something common for consensus clients for example, which usually run one service for the `beacon-chain` and another one for `validator`. Whenever you request for support in the Dappnode community, keep these handy!

![dappnode_packages4](/img/dappnode_packages4.png)

---

#### Backup
This option will be available in packages that generate any kind of local database that includes sensitive information such as validator keystores. You'll have two very self-explainatory options: "Backup Now" and "Restore Backup".

![dappnode_packages5](/img/dappnode_packages5.png)

---

#### File Manager
Also handy whenever your package has a database you'll need to access or modify, but without going through a terminal. Download and upload files in an easy way with the File Manager.

![dappnode_packages6](/img/dappnode_packages6.png)
