# Troubleshooting

## VPN Connection issues ( Applies to DAppNode 0.1.0...pending review of ports that need to be opened and validation for NAT / UPnP)

The VPN is one of the pillars of the whole DAppNode functioning, you will need a somehow decent and stable internet connection to be able to connect to the server.

### Os & Ios Users

As the config file is automated you should not have any problem to access caused by the VPN configuration so possible causes might be:

### NAT Loopback disabled

You are in the same local area network that the DAppNode you want to connect to, and your router does not support or does not have enabled NAT LOOPBACK, so there are IP conflicts that prevent you from connecting.

To solve it you have to figure out if your router is doing NAT LOOPBACK and activate it if it is not the case . You can easily know it by opening the terminal and typing ping + DynDNS domain is given at the end of the installation as server address. If the ping is successful (100% packets are transmitted with no packet loss) your router is doing NAT LOOPBACK, if it is not solving you have to either enter the admin panel of your router and look for that option and activate it, or edit the server address in the VPN profile and substitute the domain given by the internal IP of the DAppNode server (usually starting with 192.168……..).

This will allow you to connect from the same local network but not from outside, to connect to your DAppNode from outside your network you will need to download another VPN profile pointing to the DynDNS address (exactly as it is downloaded)

### VPN ports closed (needs review for OPEN VPN)

If your router is doing NAT LOOPBACK and you can't access your DAppNode it is very likely that the ports used to establish the VPN connection with the server are not available. To solve this you have to enter the router admin UI and open the 1194 UDP and 8090 TCP ports. 

If you have NAT LOOPBACK activated and the VPN ports are opened it is very likely that an extension you have installed or any setup you have that affects DNS routing might be interfering in the connection, please deactivate any piece of your configuration that can have influence DNS solving.

If you are still experiencing problems to connect from your mac / iPhone please ping us in our channels, we will be happy to help!!.

### Windows users

The above situations are also relevant for Windows users, please check them before continuing reading.

If you have NAT LOOPBACK, the ports are opened and still, you can´t connect the problem is in the configuration/ VPN client. Make sure you have thoroughly followed the instructions given to set up your VPN profile step by step and that you have run the following commands that can be needed for Windows machines.

Sometimes when having configured the VPN profile following the instructions the connection can not be established and you will get a “The network connection between your computer and the VPN server could not be established because the remote server is not responding”

To fix this error, a one-time registry change is required because the VPN server and/or client is behind NAT (e.g. home router). Run the following from an elevated command prompt. You must reboot your PC when finished.

### For Windows Vista, 7, 8.x and 10

`REG ADD HKLM\SYSTEM\CurrentControlSet\Services\PolicyAgent /v AssumeUDPEncapsulationContextOnSendRule /t REG_DWORD /d 0x2 /f`

Note that you have to run this command as elevated command prompt and then reboot your computer.

### For Windows XP

`REG ADD HKLM\SYSTEM\CurrentControlSet\Services\RasMan\Parameters /v ProhibitIpSec /t REG_DWORD /d 0x0 /f`

### Disabled Ipsec Encryption

Although uncommon, some Windows systems disable IPsec encryption, causing the connection to fail. To re-enable it, run the following command and reboot your PC.

For Windows XP, Vista, 7, 8.x and 10

`REG ADD HKLM\SYSTEM\CurrentControlSet\Services\RasMan\Parameters /v ProhibitIpSec /t REG_DWORD /d 0x0 /f`

Note that you have to run this command as elevated command prompt and then reboot your computer.

### Linux & Android

If following the instructions has not made your connection to work, try to manually set up a VPN profile within your computer/phone using the credentials given in the OTP web you get after installation under the tab Linux/Android.

<p align="center">
    <img width="600"src="https://github.com/Shelpin/DAppNode/raw/master/doc/ipsecoopotions.jpg">
</p>

<p align="center">
    <img width="600"src="https://github.com/Shelpin/DAppNode/raw/master/doc/username.jpg">
</p>

<p align="center">
    <img width="600"src="https://github.com/Shelpin/DAppNode/raw/master/doc/routes.jpg">
</p>

If you are still experiencing problems to connect from your Linux device please ping us in our channels, we will be happy to help!!.

## I can´t connect with another device to my DAppNode

Only one device can access your DAppNode for each VPN credentials created; each device connected should have its own VPN configuration adding the desired devices in the Devices tab of your admin UI. You can add as many devices as you want! Be nice and provide all your friends and family access to the decentralized web, please!!

## My ETH node never ends up syncing

If you are not on a 4 GB (ideally 8 GB) RAM configuration/your HD has not a high writing speed (SSD needed), it might happen that the server is not able to catch up with Ethereum Blocks, so it never gets synced. We are sorry but the server might not be able to cope up with the chain.

It is also possible that the initial sync gets stuck at a given snapshot of the first sync if this happens try removing ETHCHAIN volume and let the sync start again. To do so you have to enter in System / Ethchain / Open and hit remove volume, the existing synced snapshots will be erased and the sync will start again.

If you have a proper internet connection, an SSD disk and at least 4 GB RAM the initial sync should be fine.

## I can´t access the ADMIN UI

You have to be connected to the VPN to access the ADMIN UI, in case you are connected and still not able to access just disconnect the VPN and connect it again.

## I can´t install packages or it takes a lot of time to install them

For installing packages the ETH node should be synchronized. In case the node is sync and you are experiencing this, enter in System and restart IPFS and VPN and connect again.

## Ports that need to be opened (To be updated for OpenVPN)

Please find in this table the ports that need to be opened for the smooth functioning of your DAppNode and installed packages.

| Service       | TCP   | UDP       |
| ------------- | ----- | --------- |
| VPN (L2TP)    |       | 500, 4500 |
| SSH           | 22    |           |
| Ethereum Node | 30303 | 30303     |
| IPFS          | 4001  | 4002      |

However, if your router supports UPnP, do not worry about this, it will manage all the ports stuff for you.

## I need to restore the system without losing any data

Execute this command in your DAppNode terminal, this will update the core packages to the latest versions without erasing any data from your volumes.

`sudo wget -O - https://github.com/dappnode/DAppNode/releases/download/v0.1.16/dappnode_install.sh | sudo UPDATE=true bash`
