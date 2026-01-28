---
title: "Connect your dappnode to the router and power"
llm_description: "Instructions to connect Dappnode to router via ethernet and enable UPnP for port forwarding."
---

# Connect your dappnode to the router and power

Dappnode offers a seamless plug-and-play experience. For optimal performance and to ensure smooth operation, please connect your Dappnode to your router and enable UPnP settings within the router.

![Connect to router](/img/connect-to-router.png)

Make sure you also connect your Dappnode to a power outlet and you are ready to turn it on.

## Enable UPnP in your router

Enabling UPnP (Universal Plug and Play) on a router allows devices on your network to set up port forwarding rules for themselves automatically. This simplifies device communication and functions, especially for applications that require open ports, like some games and peer-to-peer programs.

Here are basic instructions to enable UPnP on most routers:

1. **Log into Your Router**: Open a web browser on a computer connected to your network.
   Enter your router's IP address in the address bar. Common addresses include 192.168.1.1, 192.168.0.1, or 10.0.0.1. If you're unsure of your router's IP, you can check your device's network settings or consult the router's manual.
   You'll be prompted for a username and password. If you haven't changed them, the default details are usually admin/admin, admin/password, or some similar combination. Refer to your router's documentation if you're unsure.

2. **Navigate to the UPnP Section**: Once logged in, look for a section labeled "UPnP", often found under "Advanced Settings", "WAN", "NAT", or similar categories. The exact path can vary based on the router manufacturer and model.

3. **Enable UPnP**: There should be an option to enable or disable UPnP. Make sure it's set to "Enable" or "On".
   Save or apply the changes.

## [Advanced] Using dappnode without UPnP enabled

If you want to have your UPnP disabled on router, manual port forwarding must be done. First, make sure that your Wireguard is reachable by forwarding default port 51820. (Pro tip: You can choose any external port you like, but you have to set that port wireguard configuration file by yourself.)

After that is done, go to [ports page](http://my.dappnode/support/ports) and manually forward all the ports listed there.

Please note that this list is updated automatically after you install new package and you should make sure that you update ports in your router as well.

<hr />

### Troubleshooting

<details>
  <summary><b>How can I verify that the ports were successfully opened by UPnP? </b></summary>

Access your dappnode <a href="http://my.dappnode/support/ports">support > ports</a> view and execute an API scan of the ports.

An alternative is to manually check if the ports have been opened successfully, follow these steps:

1. Use an online port checker tool, like "YouGetSignal" or "Canyouseeme."
2. Enter your external IP address and the port number you want to check.
3. Click "Check." If the port is open and accessible from the outside, the tool will confirm it.

Alternatively, you can use tools like `nmap` to scan your own ports from a different network.

</details>
<details>
  <summary><b>Why can't I connect my DappNode to the router via Wi-Fi?</b></summary>
  
Currently, Dappnode doesn't support Wi-Fi connections to a router. Ensure your Dappnode is connected directly to the router using an ethernet cable.

</details>
