# Terminal Access to Dappnode

Accessing the terminal of your Dappnode, often referred to as the command-line interface (CLI), provides deep control and management capabilities. However, this method is considered advanced and requires familiarity with command line interactions. Incorrect or misguided commands can lead to unintended changes or potential system damage.

:::caution
Proceed with caution when using terminal access. Always understand the implications of commands and configurations before executing them.
:::

## SSH Access

SSH (Secure Shell) allows secure remote access to systems.

1. Ensure your device is connected to the same network as the Dappnode.
2. Open a terminal or command prompt on your device.
3. Type:

    ```bash
    ssh dappnode@<DAPPNODE_LOCAL_IP_ADDRESS>
    ```

    Replace `<DAPPNODE_LOCAL_IP_ADDRESS>` with your Dappnode's actual IP address.

4. When prompted, use the following credentials:
    - **Username:** dappnode
    - **Password:** dappnode.s0

:::note
During the onboarding process in Dappmanager, you are prompted to change the default host password for the "dappnode" user. If you have completed this step, the default password `dappnode.s0` might no longer work. Always use the password you set during onboarding.
:::

### External SSH Access

For accessing Dappnode from outside your local network:

1. Configure port forwarding on your router. Direct external SSH requests (typically port 22) to your Dappnode's internal IP address.
2. For added security, use a strong password or implement SSH keys.
3. To SSH, use:

    ```bash
    ssh dappnode@<EXTERNAL_IP_ADDRESS>
    ```

:::caution
Exposing SSH to the internet can be risky. Ensure you adopt robust security practices and are aware of potential vulnerabilities.
:::

## Physical Terminal Access

Directly interface with Dappnode using a monitor and keyboard:

1. Connect a monitor via the HDMI/VGA port.
2. Plug in a USB keyboard.
3. Power on or restart the Dappnode machine.
4. When prompted, enter the password: `dappnode.s0` (or the one you've set if changed during onboarding).