# Connect to DAppNode's VPN

Once you have your DAppNode running, you will get an URL in your terminal from where you can download the VPN config file and install it on your device. Just download it and follow the instructions. For Android, Ubuntu, and Windows you have to set the VPN following the instructions.

Installing (or manually setting up)this VPN file will configure your VPN connection to your DAppNode from your device. The first device VPN connection will have super admin privileges so you can access and manage the DAppNode admin UI; this user cannot be deleted.

Take into account that some VPN clients might send all traffic through the VPN, which is not very ideal if you have many people connected to your DAppNode, or only to send traffic which points to an ETH domain.

DAppNode is not intended to manage all the traffic of the devices connected to it, only the ETH domains access requests.
As a general rule, if your DAppNode is not connected through a router that supports UPnP, you will have to manually open some ports to have complete functionality. For the VPN to work you must make sure that you have opened the 4500 and 500 ports (UDP).

Here you have a sample table of the ports that should be opened in your DAppNode:

| Service       | TCP   | UDP       |
| ------------- | ----- | --------- |
| VPN           |       | 500, 4500 |
| Ethereum Node | 30303 | 30303     |
| IPFS          | 4001  | 4002      |

***Note that SSH port (22) is only needed when you need ssh access to your server, and it's not a very  good idea to let that port opened , consider restricting the access to your own IP or just open it when you need it and then close it***

If you are not able to download or install the config file, you can set it up manually following the instructions for different platforms contained in the link that the terminal gives after installation. All the parameters you need to fill in are given by your terminal when you first install it or when you connect to it vía SSH.

These are the parameters you will need to configure, still depending on your operating system follow the instructions you will find on the website you will be directed to.

<p align="center">
    <img width="300"src="https://github.com/Shelpin/DAppNode/raw/master/doc/credentialsscreen.png">
</p>

**VPN TYPE**: Select L2TP over IPSEC

**Server IP**: Select the IP given by the terminal when connecting to the DAppNode via SSH. If you are behind a router without NAT Loopback, you will also find in the terminal the internal IP you need to use to be able to connect is in the same network without NAT Loopback enabled.

**PSK**: Shared secret, you will find it in the terminal.

**VPN User**: This is the username of the super administrator and your terminal will give it to you too.

**Password**: You can also find the password in the terminal output when connecting to your DAppNode.

**Important note on DAppNode´s VPN**

**When you download and install a VPN credentials file only your ETH traffic will be going out through the VPN, the regular IP traffic will still be done with your regular IP.** 

**If you want to route all your Internet traffic through your DAppNode so you are behind your VPN, you should configure it in your VPN client settings by checking the Box "Send all traffic".** 

## Connect to DAppNode via the built-in Wifi hotspot

If you have your DAppNode installed in a physical device with Wi-Fi, you can directly connect to your server's Admin UI by connecting your client device to the DAppNode's wifi hotspot. 

When you connect your DAppNode server to your router via Ethernet you will see a network called DAppNodeWIFI, just connect to that Wifi using the defaul password "dappnode" and you will have direct access to your DappNode server ADMIN UI while connected to that WIFI. 

You can change the name of the WIFI and the password by setting up the new values in the WIFI package under the system tab. 

Once you have entered the admini UI you can download your VPN credentials and create new ones under the "devices" tab

Now it is time…
