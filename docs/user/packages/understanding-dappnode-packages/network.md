# Network

The Network section allows you to manage and configure the network settings for your packages. This includes adjusting network settings for individual services, changing port mappings, and setting up domain mappings to expose your package to the internet.

![dappnode_packages3](/img/dappnode_packages3.png)

- **Service**: Some packages may have multiple services running as part of the same container. This option will allow you to adjust each of their network settings separately.

- **Public port mapping**: Need to change your package's port mapping? You can change this setting in this field as well as its protocol between TCP and UDP. Remember that Dappnode features UPnP technology, so if this protocol is enabled in your router, the port opened here will be forwarded in the router, too.

- **HTTPs domain mapping**: Do you want to expose your package to the internet? You'll be able to add multiple public domains to your package here. This is a great way to share your node's RPC with friends and family!
  - <u>From subdomain</u>: the domain name you want to set for the mapping. It will be appended to your dappnode dynDNS domain.

  - <u>To port</u>: The container port you want to map to the domain. Double check you have chosen correctly the port you want to map. These ports are commonly used:
    - 80: Exposing UIs
    - 8545: Ethereum RPC APIs
    - 8551: Ethereum Engine endpoints
    - 3500: Beacon chain or validator API in Dappnode.

  - <u>Basic auth</u>: This parameter is optional and allows you to set a basic authentication for the domain. It will be required to access the domain, learn more about basic authentication [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). The basic auth is composed of fields **User** and **Password**

      :::warning
      For security reasons, the password is not stored in plain text. This means it cannot be recovered if lost. In such case, you will have to re-create the port mapping with a new password.
      :::

![dappnode_packages3](/img/dappnode_package_network.png)
