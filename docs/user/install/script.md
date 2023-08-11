# Install - script

You can install DAppNode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system.

## Prerequisites

Before installing DAppNode, you need to install some prerequisites:

- [Docker](https://docs.docker.com/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- [xz](https://tukaani.org/xz/)

To install all the above prerequisites, execute the command below in the terminal of the machine you want to install DAppNode. If you already have the dependencies installed or you want to install them on your own you can skip this step.

```bash
sudo wget -O - https://prerequisites.dappnode.io | sudo bash
```

## Install DAppNode

To install DAppNode, install it executing the next script:

```bash
sudo wget -O - https://installer.dappnode.io | sudo bash
```

## Reboot

To finalize the installation once it has finished completing, reboot your machine:

```bash
shutdown -r now
```

## Restore to the latest version

If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes.

```bash
sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash
```

## Uninstall

This command will uninstall DAppNode components (but not docker et al.).

```bash
wget -qO - https://uninstaller.dappnode.io | sudo bash
```