---
sidebar_position: 4
---

# CLI

## SSH

Default credentials for SSH access are:

U: `dappnode`

P: `dappnode.s0`

*Note: This user does not have sudo privledges by default for security reasons.  Also these default host credentials can be changed during the initial install/setup, so make sure you securely store and label your credentials.
Also for security reasons the root user cannot be used to login over SSH when DAppNode is installed using an ISO file*

## Physically by plugging a monitor and keyboard to access the console (Advanced)

Your DAppNode will ask you for the username and password to log in. The default credentials are:

U: `dappnode`

P: `dappnode.s0`

*Note if you have changed the root password in an .ISO install, you can log right into the root account when directly attached to the console, but not over SSH. you would need to elevate privledges by logging into the host account and executing `su -` (or `sudo su -`, depending on the ISO version) followed by the root password to get root access remotely over SSH*

*Also note that if you have changed the host password from the web UI (http://my.dappnode), this will be the password for the user dappnode of the host machine*
