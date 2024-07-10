# Network

![dappnode_packages3](/img/dappnode_packages3.png)

- **Service**: Some packages may have multiple services running as part of the same container. This option will allow you to adjust each of their network settings separately.
- **Public port mapping**: Need to change your package's port mapping? You can change this setting in this field as well as its protocol between TCP and UDP.
- **HTTPs domain mapping**: Do you want to expose your package to the internet? You'll be able to add multiple public domains to your package here. This is a great way to share your node's RPC with friends and family!
  - From subdomain: the domain name you want to set for the mapping. It will be appended to your dappnode dynDNS domain.
  - To port: The container port you want to map to the domain. Double check you have chosen correctly the port you want to map. Common ports are:
    - 80: Commonly used for exposing UIs
    - 8545: Commonly used for Ethereum RPCs
    - 8551: Commonly used for Ethereum Engine endpoints
    - 3500: Commonly used for the beacon chain API in dappnode.
    - 4500: Commonly used for the validator API in dappnode.
  - Basic auth: This parameter is optional and allows you to set a basic authentication for the domain. It will be required to access the domain, learn more about basic authentication [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication). The basic auth is composed of two fields:
    - User: The username you want to set for the basic authentication.
    - Password: The password you want to set for the basic authentication.
      :::warning
      For security reasons the password is stored hashed in the HTTPS package database. If you lose it, you will have to reset the password.
      :::

![dappnode_packages3](/img/dappnode_package_network.png)
