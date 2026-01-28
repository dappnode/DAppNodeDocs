---
title: "FAQs & Troubleshooting"
llm_description: "AWS FAQs: machine selection, storage requirements, security groups, Telegram setup, troubleshooting."
---

# FAQs & Troubleshooting

<details>
    <summary><strong>Which machine should I choose?</strong></summary>
    
All available machines on AWS when launching an instance are suitable for running Dappnode. However, the best choice depends on your specific needs and intentions. Here's a general guide to help you decide:

- **Basic Testing and Development:** For basic testing or development purposes, where you don't need high performance or large storage, a smaller instance with 2 vCPUs and 4 GB RAM should be sufficient. This setup allows you to explore Dappnode functionalities without significant resource investment.

- **Running a Node**: For running a full node in any network, a more powerful instance is required. We recommend an instance with at least 2 vCPUs and 8 GB RAM, but to handle the heavy computational, an instance with 4 vCPUs, 16 GB RAM would be the perfect option.

Evaluate your use case and choose an instance that aligns with your performance and scalability requirements.

</details>

<details>
    <summary><strong>How much storage do I need?</strong></summary>
    
The storage requirements for your Dappnode instance depend largely on your intended use. Here are some guidelines for different scenarios:

- **Dappnode Testing:** For basic testing purposes, a minimum of 30 GB of disk space is recommended. This is sufficient for exploring the Dappnode environment and testing small applications without significant data storage needs.

- **Running a Node in Mainnet:** If you plan to run a full node in the Ethereum mainnet, you will need approximately 1.4 TB (1304 GiB)

- **Running a Node in Holesky:** For running a node in the Holesky testnet, you should allocate around 180 GB (168 GiB)
- **Running a Node in Lukso:** If your goal is to run a node in the Lukso network, you will need about 40 GB (38 GiB)
- **Running a Node in Gnosis:** To run a node in the Gnosis network, you should provision around 503 GB (469 GiB)

:::tip
Regardless of your initial choice, AWS EC2 allows you to scale your storage as needed after the instance is launched. You can easily adjust the storage size through the AWS EC2 UI to meet your growing needs.
:::

</details>

<details>
    <summary><strong>Is it safe to have those security groups? Why are they needed?</strong></summary>
    
Setting the security groups as explained in the <a href='/docs/user/dappnode-cloud/providers/aws/set-up-instance#instance-configuration'>Launch an instance</a> section does not automatically open the specified ports. This configuration allows services from your Dappnode to open the specified ports when needed. It's crucial to understand that having these inbound rules does not mean those ports are constantly exposed.
<br />
<br />

**SSH (Port 22):**

- Purpose: Allows you to securely connect to your instance via SSH.
- Why Needed: Essential for remote management and troubleshooting of your instance.

**HTTP (Port 80):**

- Purpose: Enables HTTP traffic to your instance.
- Why Needed: Required for accessing web services and interfaces hosted on your Dappnode.

**HTTPS (Port 443):**

- Purpose: Enables HTTPS traffic, providing secure access to web services.
- Why Needed: Ensures secure connections to web interfaces and services, protecting data in transit.

**Wireguard (Port 51820):**

- Purpose: Facilitates Wireguard VPN connections.
- Why Needed: Necessary for establishing secure VPN connections to your Dappnode instance.

**General TCP (Ports 1024-65535):**

- Purpose: Allows various TCP services to communicate over a wide range of ports.
- Why Needed: Ensures that your Dappnode instance can communicate effectively with other nodes and services, enhancing overall performance.

**General UDP (Ports 1024-65535):**

- Purpose: Allows various UDP services to communicate over a wide range of ports.
- Why Needed: Similar to TCP, but for UDP traffic, this rule ensures that your Dappnode instance can efficiently handle peer-to-peer connections and other UDP-based communications.\

:::tip
We recommend including all the ports mentioned in your security group inbound rules. This ensures that your Dappnode instance can perform optimally and access all necessary services. However, if you are an experienced user, you can customize these rules to suit your specific needs. You can control which ports to expose based on your security preferences and operational requirements.
:::

</details>

<details>
    <summary><strong>Why is it necessary to provide my Telegram user ID if I also provide my bot token?</strong></summary>
    
<p>If you want to run commands to your Dappnode via Telegram is it essential to provide your Telegram user ID. Even if you already provide the bot token, anyone with the bot's username could send messages (and running commands so) to your dappnode. This could lead on someone getting the wireguard credentials of your Dappnode and connecting to it.</p>
<p>That is why its mandatory to provide it, so your bot only listens to commands given by the account linked to your Telegram user ID.</p>
</details>

<details>
    <summary><strong>Why do I want to connect via SSH to my Dappnode?</strong></summary>

Connecting via SSH to your Dappnode allows you to access your instance's terminal directly. Even if you have obtained your Wireguard credentials via Telegram, having SSH access is important for several reasons:

- **Full Control:** SSH access gives you complete control over your Dappnode instance, allowing you to perform advanced configurations and manage the system directly.

- **Troubleshooting:** In case of potential issues or errors, accessing the terminal via SSH enables you to diagnose and fix problems efficiently.
- **Advanced Management:** You can run commands, update software, monitor system performance, and manage services that may not be accessible through the standard Dappnode UI.

Having SSH access is crucial for maintaining and managing your Dappnode instance effectively, ensuring you can handle any technical challenges that arise.

</details>

<details>
    <summary><strong>I've already launched my instance and I'm not getting my Wireguard credentials</strong></summary>

If you are not receiving your Wireguard credentials immediately after launching your instance, the Dappnode Image might still be installing. If this happens, wait a few minutes and try again.

- **Via SSH**: If you encounter this issue, exit your SSH session with the `exit` command in your instance terminal and reconnect as explained in the guide.
- **Via Telegram Bot**: Simply retry the `/get_wireguard_credentials` command after a short wait.

Additionally, ensure that your instance storage has not filled up during the installation. For a testing Dappnode (a Dappnode not intended to run a node in any network), we recommend at least 30 GB of storage.

</details>
