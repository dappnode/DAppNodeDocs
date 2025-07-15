# Dappnode App

The Dappnode app is a new form of interaction with Dappnode from mobile and desktop devices.  It helps users to enter the Dappmanager remotely and get notified about the hardware status and the staking performance.

The Dappnode App is a Progressive Web App (PWA) that can be installed as an application in mobile and desktop. 

### Benefits
- Use the **Dappmanager in your mobile phone** in a seamless experience. 
- Receive **advanced push notifications** of your Dappnode and your validators to monitor its performance.
- Configure the **staking clients remotely** from your mobile


### How to install the Dappnode app
- Go to http://my.dappnode
- Go to **System** in the navigation menu on the left and click **App** section. 
- After clicking Continue, you will be redirected to a private domain (https) to start the App installation. In the first login you will need to type your Dappnode credentials. 

    ![continue-app](/img/continue-app.png)

- You need to **set up your VPN connection before installing the Dappnode app**. This is mandatory to connect remotely to your Dappnode.
![install-button](/img/install-button.png)


There are two VPN options: **Tailscale and Wireguard.** OpenVPN is not supported. 
You can do the setup in the VPN section in the navigation menu on the left.

Follow these steps to setup the VPN connection: 

**1. Download the VPN package in your Dappnode.**
    - Wireguard is installed by default in your Dappnode
    - Tailscale can be downloaded in the Dappstore
    
**2. Configure the VPN.**
    - Follow the installation process of [Wireguard](https://docs.dappnode.io/docs/user/access-your-dappnode/vpn/wireguard) or [Tailscale](https://docs.dappnode.io/docs/user/access-your-dappnode/vpn/tailscale)
    
**3. Install the VPN app in your phone.**
    - Go to Google play/App store and **download the VPN app in your phone**. After the previous configuration, you just need to **activate the VPN connection in the VPN mobile app.** 
    
### Dappnode App specific installation

Now that you are done with the VPN connection, you can **install the Dappnode App** in your phone or computer. 

The Dappnode App will be installed in the browser. **We recommend you to use Chrome** to have the best experience. Other browser options are Brave and Safari (requires manual setup, check FAQ below)


#### Mobile
1. Go to http://my.dappnode and System / App

2. Click the **Install App** button and then click Install in the pop up. 
![dnp_app_mobile](/img/dnp-app-mobile.png)

3. The App will open in a new window and you need to click **Grant permissions** button. In the following browser pop up click **Allow**.

![grant-mobile](/img/grant-mobile.png)

4. The app was **succesfully configured**. You can manage your subscribed devices and test the notifications.
![devices_mobile](/img/devices-mobile.png)
    


#### Desktop
1. Go to http://my.dappnode System / App
![install-button](/img/install-button.png)


2. Click **Install** in the browser pop up. The app will be installed and opened in a new window.
![install-app](/img/install-app.png)

3. **Grant permissions** to receive push notifications. 
![grant-permission](/img/grant-permission.png)

4. Change "Remember my decision" to **Forever** in the Pop up. Click **Allow**. This step is critical to receive the notifications. 
![allow-notifications](/img/allow-notifications.png)

5. In Brave you must activate the field "Use Google services for push messaging" in Settings / Privacy & security. 
![activate-push-messaging](/img/brave-settings.png)

6. The Dappnode app is **successfully installed** and you can manage your **subscribed devices**.  
![app-installed](/img/app-installed.png)

7. In the **Device subscriptions** section you can edit the name of the device subscription, delete the subscription and send a test notification to your device. 
![devices](/img/devices.png)


### Frequent Asked Questions

#### How can I access the Dappnode app after installing it?
Option 1: You will have the Dappnode app icon in your phone or computer home screen (as any other app). 
Option 2: You can type the following in your browser search bar 
- brave://apps/ (For Brave)
- chrome://apps/ (For Chrome)

Option 3: You can access the Dappnode app using your **dyndns** (Dappnode's unique identifier) and **https** writing the domain below in the browser:  
https://pwa."your-dyndns".io
e.g. https://pwa.e17cb74a302298e6.dyndns.dappnode.io/
You can find your dyndns in the top right icon in the Dappmanager.
![dyndns](/img/dyndns.png)


#### I blocked the notifications in the pop up accidentally. What can I do?
If you deny the permission to send you push notifications, you need to change the notifications setup manually.
In **Chrome** go to: Settings/Privacy and security/ Site and settings or Copy **chrome://settings/content** in the search bar. In mobile the route changes slightly Settings/Site settings/ Notifications/Managed by app. 

In Brave go to: Settings/Privacy and security/ Site and Shield settings or Copy **brave://settings/content** in the search bar

In Safari go to: System Settings/Notifications
 
#### What are the requirements to use the Dappnode app?

You need to update at least to Dappnode Core v0.3.2.

Default packages like Https, Notifications and Bind will be updated automatically with the Core update.
A VPN connection is needed to have the Dappnode App working.

#### How can I install the Dappnode app in Safari?

1. Go to http://my.dappnode in Safari, then go to System / App 
2. In the Safari menu, go to File / Add to Dock
![add-dock](/img/add-dock.png)

3. Click the Dappnode App icon in the dock (bottom menu) to open it.
4. Go to System / App within the Dappnode App. 
5. Click Grant Permissions.
![safari-grant](/img/safari-grant.png)

6. Click on the Popup to activate the notifications
![grant-popup](/img/grant-popup.png)

7. Activate Dappnode app Notifications with the general toggle. The Dappnode app notifications are configured directly as a native application installed in the device (not in the browser).
![activate-notifications](/img/activate-notifications.png)

8. Close the Dappnode App by clicking Quit at the dock icon to update the configuration changes.
    
9. Open the Dappnode App again and click manage devices to subscribe your device to notifications. 
![manage-devices](/img/manage-devices.png)

10. The Dappnode App installation is complete in Safari. 