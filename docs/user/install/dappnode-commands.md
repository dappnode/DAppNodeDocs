# Dappnode commands

Dappnode comes with a set of commands that can be used to manage the system. These commands can be used directly from the command line.

![commands-welcome-message](/img/commands_welcome_message.png)

:::tip
Go to the [Access your dappnode via ssh](/docs/user/cli/) section to learn more about how to access your dappnode via ssh
:::

Below is a list of available commands in Dappnode:

- `dappnode_help`: prints out this message

- `dappnode_wifi`: get wifi credentials (SSID and password)

- `dappnode_openvpn`: get Open VPN credentials

- `dappnode_wireguard`: get Wireguard VPN credentials. Use `dappnode_wireguard --help` for more info

- `dappnode_connect`: check connectivity methods available in Dappnode

- `dappnode_status`: get status of dappnode containers

- `dappnode_start`: start dappnode containers

- `dappnode_stop`: stop dappnode containers

To run a command, enter it in your Dappnode terminal. For example:

```bash
dappnode_help
```

<details>
  <summary><b>I get the error "command not found"</b></summary>
  
If you get the error `command not found` when trying to execute a dappnode command, it means that the command is not available in your system. You need to load the dappndoe profile as follows:

```bash
source /usr/src/dappnode/DNCORE/.dappnode_profile
```

</details>
