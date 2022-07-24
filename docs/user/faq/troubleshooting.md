---
title: Troubleshooting
---

## I can't access my DAppNode
If its the first time you try to access your dappnode, these are the methods you have to access:

- If you are connected to the same network that your dappnode, you should be able to access the UI through http://dappnode.local/
- Wifi, if you have installed dappnode or bought one, you should see a new wifi network called DAppNodeWifi, if so, connect to it.

  If its some specific problem, We recommend you to go to the discord or forum and talk about your specific case.
## I can't access the ADMIN UI

There are several ways to access the dappnode.
If you are connected to the same network as the dappnode, you can try to access it via local by going to the url http://dappnode.local/
If this is not possible, you can try to access it via wifi, by default the dappnode software tries to expose wifi called dappnodewifi.
These two methods are the basics methods to access the first time.

## Why can't I connect via VPN to my DAppNode?

If you have set up openvpn and you cant access your dappnode, remember you need to set up the port forwarding in your router. To do this, you need to access your router configuration and "open" the next ports: TCP port 8092 and 1194 UDP. Sometimes the UPnP of the router enable these ports automatically but another does not and it's required to do this.

In case you have set up wireguard vpn, you have to create two profiles:

- Local: This profile is used when you are connected from the same network that the dappnode.
- Remote: This profile is used when you are connected from a different network that the dappnode.
  When you create the vpn profile there is a link that generate the profile for local or remote.

## Can I recover my admin password?

You can't recover your admin password, but you can access to your dappnode if you wrote down the recovery token, and then change the admin password.

The first time you access your DAppnode,it appears the next image:

<p align="center">
    <img src="../../../img/sign_in_image.png"/>
</p>

Once you fill the fields and press the register button, DAppNode provides you with a recovery code. If you forget te DAppNode's Password you will be able to access using this token.

<p align="center">
    <img src="../../../img/recovery_token.png"/>
</p>

You should save your token in a secure place like a password manager, paper, etc. In this case, we would save this:

```
4LMB9w3l50Yljwr6bIgQ
```

## Can I recover my recovery token?

Firstly, we have to go to the login page of our DAppNode:

<p align="center">
    <img src="../../../img/login.png"/>
</p>

We should select the option "Forgot password?". It will appear a field where you can reset your password using the recovery token. In this example, we would use the token <code>4LMB9w3l50Yljwr6bIgQ</code>. You have to use your recovery token.

<p align="center">
    <img src="../../../img/reset_password_with_recovery_token.png"/>
</p>

After confirming the recovery token, you can define an admin user in DAppNode and his password in the same way you did the first time you connect.

<p align="center">
    <img src="../../../img/sign_in_image.png"/>
</p>

Remember using a password with the next properties:

- Minimum 8 characters
- At least one Cap letter
- At least one number

Once you filled the field and press the register button, dappnode will provide a recovery token.

<p align="center">
    <img src="../../../img/recovery_token.png"/>
</p>

We write down and save that token and we accept we have copied our recovery token. We log in with our new credentials and we have access to our DAppNode.

## How to recover your recovery token and recover admin access

In case we have lost both the password and the recovery token, we need to access our DAppNode: SSH into the DAppNode host or plug a keyboard.

Once we are in our DAppNodeMachine, we type the next command which shows us the recovery token:

```
cat /usr/src/dappnode/DNCORE/admin-recovery-token.txt ; echo
```

The command does the next:

- The admin-recover-token.txt is where the token is saved.
- The <code>; echo</code> is used to make easier the read of the token.

After inserting the command we obtain the recovery token we have to use to reset our password.
On the above section, How to access to my DAppNode using the recovery token you can reset your password with this recovery token.

## I need to restore the system without losing any data

If you are experiencing any problem or just want to make sure you are running the latest DAppNode versions, execute this command in the DAppNode terminal. This will update the core packages to the latest versions without erasing any data from your volumes.
You need to access to the terminal, you can do it by plugging a keyboard and a screen, once you have logged in type the next command:
`sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash`
