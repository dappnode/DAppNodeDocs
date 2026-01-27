---
llm_description: "Access Dappnode via http://dappnode.local on same network; limited to Admin UI dashboard only."
---

# Local Proxy Access to Dappnode

The local proxy method provides a way to access your Dappnode from within the same local network without any previous configuration required. However, it's essential to understand that due to certain network incompatibilities, this method might not work for all users.

## When to Use Local Proxy

- 🛠 **Setup & Recovery**: If you're setting up your VPN or recovering from access issues, the local proxy can be really useful.
- 📡 **Same Network**: It's crucial to be on the same local network as your Dappnode.
- ⚠️ **Network Limitations**: Local proxy access might not always be available due to specific network configurations or restrictions.

## Accessing Dappnode via Local Proxy

1. 📱 On a device of your choice that's connected to the same network as your Dappnode, open a web browser.
2. 🌐 Type in http://dappnode.local in the address bar.
3. 🛡 If prompted, use your Dappnode credentials to log in or register as a new user if you haven't already.

:::caution
If http://dappnode.local doesn't work, there might be network-specific restrictions or configurations preventing access. In such cases, consider other access methods or reach out for support.
:::

## Limitations & Settings

- ⚠️ **Access Limitations**: When using the local network proxy, you're limited to the Dappnode Admin UI dashboard at `dappnode.local` and cannot access other features like blockchain clients (Ethereum, Gnosis Chain, etc.). For full feature access, you'd need to configure and use either a VPN or the included Wi-Fi hotspot.
  
- **Turning Local Proxy Off**: If you primarily use VPN features or the included Wi-Fi hotspot and find no use for local network access, you can disable it. Disabling can also be a security measure if you don't want all devices on your network to have access to this UI, even though it's protected by a password. To toggle local network access, navigate to the Wi-Fi sidebar menu on your Dappnode:

    🔍 Navigate to the [Local Network menu](http://my.dappnode/wireless-network/local) on your Dappnode.

    🔧 Toggle the "Local Network Proxy" switch.

    <p align="center">
    <img src="/img/local-proxy-switch.png" alt="Dappnode Local Proxy Switch" width="600" />
    </p>

