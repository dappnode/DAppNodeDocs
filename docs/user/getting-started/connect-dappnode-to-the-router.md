# Connect your dappnode to the router

DAppNode offers a seamless plug-and-play experience. For optimal performance and to ensure smooth operation, please connect your DAppNode to your router and enable UPnP settings within the router.

![Connect to router](/img/connect-to-router.png)

## Enable UPnP in your router

Enabling UPnP (Universal Plug and Play) on a router allows devices on your network to set up port forwarding rules for themselves automatically. This simplifies device communication and functions, especially for applications that require open ports, like some games and peer-to-peer programs.

Here are basic instructions to enable UPnP on most routers:

1. **Log into Your Router**: Open a web browser on a computer connected to your network.
   Enter your router's IP address in the address bar. Common addresses include 192.168.1.1, 192.168.0.1, or 10.0.0.1. If you're unsure of your router's IP, you can check your device's network settings or consult the router's manual.
   You'll be prompted for a username and password. If you haven't changed them, the default details are usually admin/admin, admin/password, or some similar combination. Refer to your router's documentation if you're unsure.

2. **Navigate to the UPnP Section**: Once logged in, look for a section labeled "UPnP", often found under "Advanced Settings", "WAN", "NAT", or similar categories. The exact path can vary based on the router manufacturer and model.

3. **Enable UPnP**: There should be an option to enable or disable UPnP. Make sure it's set to "Enable" or "On".
   Save or apply the changes.

<hr />

### Troubleshooting

<details>
  <summary>How can I check the ports have been opened successfully by UPnP?</summary>

Access your dappnode <a href="http://my.dappnode/support/ports">support > ports</a> view and execute an API scan of the ports.

An alternative is to manually check if the ports have been opened successfully, follow these steps:

1. Use an online port checker tool, like "YouGetSignal" or "Canyouseeme."
2. Enter your external IP address and the port number you want to check.
3. Click "Check." If the port is open and accessible from the outside, the tool will confirm it.

Alternatively, you can use tools like `nmap` to scan your own ports from a different network.

</details>
<details>
  <summary>Why I cannot connect my dappnode to the router via wifi?</summary>
  
ATM, Dappnode does not support to connect to a router via Wi-fi, only via ethernet. Make sure your dappnode is directly wired to the router via an ethernet cable

</details>