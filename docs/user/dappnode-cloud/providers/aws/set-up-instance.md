# How to Set Up an Instance

To launch a Dappnode AMI instance, follow these steps:

### 1. **Navigate to AWS Marketplace** 🧭

- Go to the [AWS Marketplace](https://aws.amazon.com/marketplace/).

### 2. **AWS Account** 👤

- If you already have an AWS account, log in. If not, create an account. For more information on signing up, you can visit the [AWS Sign-Up Documentation](https://docs.aws.amazon.com/SetUp/latest/UserGuide/setup-AWSsignup.html).

- In case you end up on another website after signing up, navigate again to the [AWS Marketplace](https://aws.amazon.com/marketplace/).

### 3. **Subscribe to Dappnode AMI** 📀

- Search "Dappnode" in the top search bar and choose the "Dappnode Cloud - Telegram Credentials - By Dappnode" option.

- On our Dappnode AMI page, you can check some information about our image. When you are ready, click "Continue to Subscribe".

- Accept the terms and click "Continue to Configuration".

- Check the region and click "Continue to Launch" to proceed with the instance launch.

- In the "Choose Action" dropdown, select "Launch through EC2" and click "Launch".

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/s-ZPmD5471Y" frameborder="0" allow="accelerometer; autoplay; fullscreen"></iframe>
</center>

### 4. **Set Up Telegram for Wireguard Credentials (Optional)** 💬

This step is only necessary if you are planning to get your Wireguard credentials via Telegram.

- Create a new bot using the `/newbot` command via BotFather's chat. It will ask you for a name and username, then generate an authentication token for your new bot. Save this token, as you will need to provide it when launching the AWS instance.

- You will also need to provide your Telegram user ID. You can get it by sending `/start` to a bot such as `@RawDataBot`.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/K2DGBWxCTZk" frameborder="0" allow="accelerometer; autoplay; fullscreen"></iframe>
</center>

### 5. **Launch Instance** 🚀

Once in the EC2 "Launch an instance" UI you will have to choose the configuration of your instance. Next steps will explain you what configurations do you need to modify section by section.

1.  **Name:** Give a name to your instance. This name is for you to identify it in the EC2 UI.

2.  **Application and OS Images (Amazon Machine Image)**: No changes needed, it comes pre-configurted according to the Dappnode Image.

3.  **Instance type:** Choose an instance type. All selectable options are suitable for running Dappnode. For more context based on your requirements, check the [FAQs section](/docs/user/dappnode-cloud/providers/aws/faqs).

4.  **Key Pair:** If you already have a key pair linked to your AWS account, you can use it. Alternatively, you can import keys to the EC2 or create a new one. These keys are essential for SSH access to the instance. Losing these keys could result in losing access to your instance.

5.  **Network Settings:**

    In this section, you will create a security group to allow necessary ports exposure. Follow these steps to ensure your Dappnode instance can perform optimally and access all required services:

    1. Click "Edit" under Network Settings and ensure the "Create security group" option is chosen.

    2. To add a new rule to the group, click the "Add security group rule" button below. Include the following rules:

       **SSH:**

       - Type: SSH

       **HTTP:**

       - Type: HTTP

       **HTTPS:**

       - Type: HTTPS

       **Wireguard:**

       - Type: Custom UDP
       - Port Range: 51820
       - Source: 0.0.0.0/0

       **General TCP:**

       - Type: Custom TCP
       - Port Range: 1024-65535
       - Source: 0.0.0.0/0

       **General UDP:**

       - Type: Custom UDP
       - Port Range: 1024-65535
       - Source: 0.0.0.0/0

    For more information about why this Inbound rules are needed and details about each one, visit the [FAQs Section](/docs/user/dappnode-cloud/providers/aws/faqs).

6.  **Storage:** Define the amount and type of storage for the instance. The storage requirements depend largely on your intended use.

    For more suggestions and context, refer to the [FAQs section](/docs/user/dappnode-cloud/providers/aws/faqs).

    :::info
    AWS also offers the possibility of extending storage once launched if needed.
    :::

7.  **Advanced details (optional):** No modifications are needed here unless you plan to get your **Wireguard credentials via Telegram**. If so, provide your userID and botToken in the text area at the end of "Advanced details", separated by a comma in the following format: (`userID,botToken`).
    Example => `123456789,1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456`

8.  **Summary:** Finally, review your configuration on the 'Summary' section located on the right and click the "Launch instance" button. Once clicked, your instance will be launched.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/K8IA5s9bl3g" frameborder="0" allow="accelerometer; autoplay; fullscreen"></iframe>
</center>

### 6. **Get wireguard credentials** 🔐

To obtain the Wireguard credentials for your instance, you have two different approaches:

1.  **Via Telegram Bot**

    - Ensure you have completed the optional Telegram setup steps mentioned earlier in the guide.

    - After launching the instance, go to your new bot's chat using the link provided by BotFather.

    - Send any message to your bot. If the configuration is correct, you should receive a message saying `✅ Successfully saved channel ID`.

    - Send the command `/get_wireguard_credentials` in the bot chat. The bot should return your Wireguard credentials. Copy them, as the next step will explain how to use these credentials.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/WlJyHS3KUYU" frameborder="0" allow="accelerometer; autoplay; fullscreen"></iframe>
</center>

2.  **Via SSH**

    This approach is for more expiremented users, since you will have to use the terminal.

    - After launching the instance, click the "Connect" button in the AWS console.

    - Go to the "SSH client" tab where it will provide you with a command like this:
      `ssh -i "yourKeyPair-aws.pem" root@yourInstanceDNS`
      Open your terminal and modify the command to use the `ubuntu` user and add `sudo` for permissions:

    ```sh
    sudo ssh -i "yourKeyPair-aws.pem" ubuntu@yourInstanceDNS
    ```

    :::tip
    Ensure this command is run in the directory where your key pair file is located.
    :::

    - Once connected to your instance, run the following command:

    ```sh
    dappnode_wireguard
    ```

    This command will output your Wireguard credentials. Copy them from your terminal using `Ctrl+Shift+C` / `⌘+Shift+C`. The next step will explain how to use these credentials.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/k-y8E4G15WI" frameborder="0" allow="accelerometer; autoplay; fullscreen"></iframe>
</center>
<br/>

:::info
The installation of Dappnode on your instance may take a few minutes. If you try to obtain the credentials before the installation is complete, you may not receive them. If this happens, wait a few minutes and try again.

- **Via SSH**: If you encounter this issue, exit your SSH session with the `exit` command and reconnect as explained above.
- **Via Telegram Bot**: Simply retry the `/get_wireguard_credentials` command after a short wait.
:::

### 7. **Connect via Wireguard** 🔌

The setup process for connecting via Wireguard will depend on the operating system you are using. Refer to the [Wireguard documentation section](/docs/user/access-your-dappnode/vpn/wireguard.md#2-installing-wireguard-client) specific to your OS for detailed instructions.

Once you have installed Wireguard and configured it with the credentials you obtained, you will be able to connect to your Dappnode instance securely.

### 8. **Navigate to Dappnode's UI** 🏁

Once your Wireguard tunnel is active, simply open your web browser and go to [http://my.dappnode](http://my.dappnode) to begin your journey with Dappnode Cloud!
