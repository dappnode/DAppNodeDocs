# How to install the Dappnode app

The complete process to install the Dappnode app is the following: 
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

The Dappnode App will be installed in the browser. **We recommend you to use Chrome** to have the best experience. Other browser options are Brave and Safari (requires manual setup, check Safari section below)

The following installation process is based on the **Chrome mobile and desktop experience**: 

#### Mobile installation
1. Go to http://my.dappnode and then go to System / App

2. Click the **Install App** button and then click Install in the pop up. 
![dnp_app_mobile](/img/dnp-app-mobile.png)

3. The App will open in a new window and you need to click **Grant permissions** button. In the following browser pop up click **Allow**.

    ![grantmobile](/img/grant-mobile.png)

4. The app was **succesfully configured**. You can manage your subscribed devices and test the notifications.
![devices_mobile](/img/devices-mobile.png)


#### Desktop installation
1. Go to http://my.dappnode and then go to System / App
![install-button](/img/install-button.png)

2. Click **Install** in the browser pop up. The app will be installed and opened in a new window.
![install-app](/img/install-app.png)

3. **Grant permissions** to receive push notifications. 
![grant-permission](/img/enable-notifications.png)

4. Click **Allow** in the popup to receive push notifications. 
![app-popup](/img/app-popup.png)

5. The Dappnode app is **successfully configured** and you can manage your **subscribed devices**.  
![app-installed](/img/app-success.png)

6. In the **Devices** tab in the Notifications section you can edit the name of the device subscription, delete the subscription and send a test notification to your device. 
![devices](/img/devices.png)


#### Brave browser
The installation process in Brave works similarly to Chrome but there are a few extra steps to consider: 

After installing the app, you need to grant permissions twice: 

1. Change "Remember my decision" to **Forever** in the Pop up. Click **Allow**. This step is critical to receive the notifications. 
![allow-notifications](/img/allow-notifications.png)

2. You must activate the field **"Use Google services for push messaging"** in Settings / Privacy & security. To change it, go to Brave settings or write brave://settings/privacy in the browser search bar in desktop. 
![activate-push-messaging](/img/brave-settings.png)

#### Safari browser

1. Go to http://my.dappnode in Safari, then go to System / App 
2. In the Safari menu, click on the first icon on the top right corner / **Add to Dock**
![add-dock](/img/add-to-dock.png)

3. Click the **Dappnode App icon in the dock** (bottom menu) to open it. 
4. Click Grant Permissions button.
![grant-permission](/img/enable-notifications.png)

5. **Click Options** and **Allow** on the Popup to activate the notifications. If you click over the banner, notifications will be blocked directly. 
![grant-popup](/img/safari-popup.png)

6. Your App was successfully configured.
![success-popup](/img/app-success.png)

7. In case you blocked the notifications, you need to go to **System Settings / Notifications / Dappnode app** and activate the **Allow notifications** toggle.
![activate-notifications](/img/activate-notifications.png)

8. To update the Permission changes in the App, **close the App by clicking Quit** at the dock icon.
    
9. Open the Dappnode App again and click **manage devices** to subscribe your device to notifications. 
![manage-devices](/img/manage-devices.png)

10. The Dappnode App **installation is completed** in Safari. Congrats! 


### Frequent Asked Questions

#### Access the Dappnode app after installation

Option 1: You will have the **Dappnode app icon** in your phone or computer home screen (as any other app).

Option 2: In desktop you can type in your browser search bar the following: 
- brave://apps/ (For Brave)
- chrome://apps/ (For Chrome)

Option 3: You can access the Dappnode app using your **dyndns** (Dappnode's unique identifier) and **https** writing the domain below in the browser:  
https://pwa."your-dyndns".io
e.g. https://pwa.e17cb74a302298e6.dyndns.dappnode.io/
You can find your dyndns in the top right icon in the Dappmanager.
![dyndns](/img/dyndns.png)


#### Reset notifications permissions

If you denied the permission to send you push notifications, you need to change the notifications configuration manually.

In **Chrome**: 
Within the app, go to the three vertical points in the top right corner. 
![points](/img/three-points.png)

Click App Info and activate Notifications. 
![app-info](/img/app-info.png)

In Chrome mobile the route changes slightly: 
Go directly to browser settings **Settings/Site settings/ Notifications/Managed by app/ Notifications**. and activate the permission. 

In **Brave**:

Within the app, go to the three horizontal lines in the top right corner. 
Click App Info and activate Notifications. 

In the browser you can go to **Settings/Privacy and security/ Site and Shield settings** 
In mobile the route changes slightly: **Settings/Site settings/Notifications**

In **Safari**:
In your Device go to **System Settings/Notifications/Dappnode App** and activate the general toggle to allow notifications. If you enter the App and your permissions are not granted yet, please close the App completely to update the permissions and try to enter again. 
 
#### Requirements to use the Dappnode app

You need to update at least to Dappnode Core v0.3.2.

Default packages like Https, Notifications and Bind will be updated automatically with the Core update.
A VPN connection is needed to have the Dappnode App working.

Enjoy your Dappnode App experience! 

