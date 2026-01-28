> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# ISO Installation

When you want to perform a clean installation by installing the base operating system and Dappnode. Installing from an ISO will wipe the machine data and install Dappnode over Debian.

## Get the ISO

You can get the image downloading directly from [Dappnode ISO](https://github.com/dappnode/Dappnode/releases) or if you prefer you can build it from the [source](https://github.com/dappnode/Dappnode#install-dappnode-with-iso).

:::note Attended VS Unattended ISO

- **Attended ISO**: An attended ISO installation involves a manual setup process where the user must be present to make choices, answer prompts, and guide the installation through its various stages. It provides more control over the configuration, allowing for customization based on specific needs.

- **Unattended ISO**: The unattended ISO installation is an automated process where pre-defined settings are used to install Dappnode without user intervention. This is ideal for straightforward installations where default configurations are preferred. It speeds up the process and ensures consistency in the setup.

Consider your specific requirements and the level of customization you need when deciding between these two installation methods.
:::


## Burn the ISO in a USB

Burn the ISO to a USB stick. To do so we recommend using [Balena Etcher](https://www.balena.io/etcher/) for the OS with which you will prepare the USB to boot from your server and install Dappnode.

:::danger
If you trigger the installation in a machine containing data, all existing data will be erased.
:::

## Boot from the USB

After burning the ISO to the USB stick:

1. **Insert** the USB stick into the machine where you want to install Dappnode.
2. **Reboot** the machine.
3. During the boot process, access the **boot menu** (the key to press varies depending on the machine manufacturer; commonly used keys include F2, F10, F12, ESC, or DEL).
4. **Select** the USB stick as the boot device.

The machine should now boot from the USB, and you'll see the Dappnode installation interface.

:::info
Make sure that an Ethernet cable is plugged in to your device during the installation process, otherwise it will fail.
:::

## Follow the Installation Prompts

- If you've chosen the **Attended ISO**, you'll be presented with a series of prompts asking for configuration details and preferences. Follow the on-screen instructions and provide the necessary input to proceed.
  
- If you've opted for the **Unattended ISO**, the installation will proceed automatically, using predefined settings.

:::tip Default Credentials
If you're using the Unattended ISO, the default credentials are:

**user**: `dappnode` 

**pass**: `dappnode.s0`
:::

## Final Steps

Once the installation is complete:

1. **Remove** the USB stick.
2. **Reboot** the machine (you might need to do this twice)
3. On startup, Dappnode should be running. You can check it by executing `docker ps` in the terminal and some of the [Dappnode Commands](/docs/user/install/dappnode-commands)
4. Finally, you can begin the post-installation setup and configuration.

:::info
Remember to keep your Dappnode running 24/7 for optimal performance, especially if you are hosting blockchain nodes or other continuous services.
:::

Congratulations! You've successfully installed Dappnode using the ISO method. For any further assistance or troubleshooting, always refer to the official Dappnode documentation or community support.
