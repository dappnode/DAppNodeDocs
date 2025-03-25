# Release 0.3.0

The release 0.3.0 contains a migration of the docker network `dncore_network` subnet from 172.33.0.0/16 to 10.20.0.0/24. This migration is critical and should be triggered manually by the user.

## From public to private IP range

The aim of this migration is to move the `dncore_network` network from a public IP range to a private one. This will be a security improvement for the `dncore_network` network, as it will be isolated from the rest of the network. In any case you are safe, as the `dncore_network` network is not exposed to the internet and all the security is behind the router. Also

## How to migrate

The migration is pretty straight forward, just click as usual on the update button and wait for the update to finish. The update will take a bit longer than usual, as the migration will be performed during the update process.

:::warning
The following requirements must be met in order to perform the migration:

- Be in core version 0.2.88
- Have wireguard package in 0.1.3 (check it at http://my.dappnode/packages/system/wireguard.dnp.dappnode.eth/info)
- Have Openvpn in 0.2.10 (check it at http://my.dappnode/packages/system/vpn.dnp.dappnode.eth/info)

:::

:::info
Since the migration performs networking tasks, you might need to disconnect and reconnect your VPN or WiFi connection in order to get access to the dappnode UI.
:::

<hr />

## Troubleshooting

First of all, don't panic. We have done our best to make the migration as smooth as possible, catching as many edge cases as possible, implementing recovery methods that will ensure the networking configuration is persisted even if the migration fails:

<details>
  <summary><strong>I cannot access dappnode UI after the migration</strong></summary>
  
  There are several lightwheight services that ensures the network configuration desired. If you cannot access the UI after the migration waiting up to 30 minutes should be enoughto ensure the network configuration is restored.
</details>

<details>
  <summary><strong>I cannot access dappnode UI and I am using Wireguard as access method</strong></summary>
  
  If you cannot access the UI after waiting several minutes and you are using wireguard as access method, do not panic you might be experiencing a cache issue.
  Try refreshing the browser or even closing and reopening the browser. If you still cannot access the UI, try removing the legacy dns from the wireguard configuration:

From:

```config
[Interface]
PrivateKey = xxxxxxxxxxxxx
ListenPort = 51820
Address = xxxxxxxxx
DNS = 172.33.1.2, 10.20.0.2

[Peer]
PublicKey = xxxxxxxxxxxxxxxx
AllowedIPs = 172.33.0.0/16, 10.20.0.0/24 <- to change!
Endpoint = xxxxxxxxxxxxxxx
```

to:

```config
[Interface]
PrivateKey = xxxxxxxxxxxxx
ListenPort = 51820
Address = xxxxxxxxx
DNS = 172.33.1.2, 10.20.0.2

[Peer]
PublicKey = xxxxxxxxxxxxxxxx
AllowedIPs = 10.20.0.0/24
Endpoint = xxxxxxxxxxxxxxx
```

Then restart the wireguard service.

</details>

<details>
  <summary><strong>I cannot access dappnode UI after the migration and I have waited 30 mins</strong></summary>
  
  If you cannot access the UI after 30 minutes, you can try to restart the dappnode machine. This will restart all the services and ensure the network configuration is restored.
</details>

<details>
  <summary><strong>I cannot access dappnode UI and I have access to the terminal</strong></summary>
  
  If you cannot access the UI after 30 minutes, and you haves access to the terminal you could try running this script manually:

    ```bash
    sudo /bin/bash /usr/src/dappnode/DNCORE/scripts/host/recreate_dappnode.sh
    ```

    If the previous workaround did not work run:

    ```bash
    wget -O - https://installer.dappnode.io | sudo UPDATE=true bash 2>&1
    ```

</details>

<details>
  <summary><strong>I have tried everything and I cannot still access the UI</strong></summary>
  
  If you cannot access the UI after trying everything, please contact us at [discord](https://discord.gg/dappnode)
</details>
