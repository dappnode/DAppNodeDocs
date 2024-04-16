# FAQs

<details>
    <summary><strong>How can I start validating?</strong></summary>
    
    <p>These steps will help you set up an Ethereum/Gnosis Chain/LUKSO solo staker validator:</p>
    <ol>
        <li>Go to the Stakers menu, select the network tab that you want to validate in and select an execution client (Geth, Nethermind, Erigon or Besu), a consensus client (Prysm, Lighthouse, Teku, Nimbus or Lodestar) and Web3Signer. You can optionally select MEV Boost and any relays you choose to run (where applies).</li>
        <li>Create keystore and deposit files using Ethereum/Gnosis/LUKSO CLI or the Wagyu Keygen tool.</li>
        <li>Wait until clients are synced and check logs to see that everything is running fine.</li>
        <li>Import keystore file(s) into Web3Signer.</li>
        <li>Do the deposit. Make sure to triple-check you're interacting with the right website/contract!</li>
        <li>Wait until you start attesting.</li>
    </ol>
</details>

<details>
    <summary><strong>I'm not able to install! / Package not found</strong></summary>
    
    <p>You'll most likely have to switch your IPFS repository to remote, perform updates and go back to your Local IPFS node:</p>
    <ol>
        <li>Try switching local/remote in IPFS repository: <a href="http://my.dappnode/#/repository/ipfs">http://my.dappnode/#/repository/ipfs</a></li>
        <li>Wait a few seconds, then retry downloading/updating your package.</li>
        <li>Make sure you set your IPFS node to Local for optimal Dappnode performance.</li>
    </ol>
</details>

<details>
    <summary><strong>I want to install Dappnode, what are the minimum specs I need?</strong></summary>
    
    <p>Assuming you want to sync only one chain (two clients) you should have at least:</p>
    <ul>
        <li>16GB RAM</li>
        <li>2TB of FAST storage (NVMe recommended)</li>
        <li>Intel i3 or i5 processor</li>
    </ul>
    <p>If you want to run Dappnode as recommended, we suggest the following specs:</p>
    <ul>
        <li>32-64GB RAM</li>
        <li>4TB NVMe</li>
        <li>Intel i7 processor</li>
    </ul>
</details>

<details>
    <summary><strong>VPN/Wireguard isn't working!</strong></summary>
    
    <ul>
        <li>Are you in the same network as the Dappnode? Use the local proxy access to configure your VPN: <a href="http://dappnode.local/">http://dappnode.local/</a></li>
        <li>Is UPnP enabled in your router settings? Try restarting your router after applying this setting!</li>
        <li>Is the port for Wireguard open in your router's port forwarding settings? (UDP 51820)</li>
        <li>If you're using OpenVPN, is its port open as well? (UDP 1194)</li>
        <li>Are you behind a CGNAT? You need to contact your ISP and request an IPv4 static address.</li>
        <li>Are you connected to another VPN? Please disconnect from this VPN before connecting to your Dappnode's VPN.</li>
        <li>If you're trying to access with Wireguard through a local network, **make sure you're using your local credentials**</li>
    </ul>
      
</details>

<!--![vpn-fix](/img/vpn-fix-faq.png)-->

<details>
    <summary><strong>How can I know if I'm using Wireguard's local or remote credentials?</strong></summary>
    
    <ul>
        <li>If you're using local credentials, your Wireguard profile's endpoint should be an IP + Port. Ex. `192.168.X.X:<port>`</li>
        <li> If you're using remote credentials, then the endpoint should be a dynDNS string + Port. Ex. `<randomstring>.dyndns.dappnode.io:<port>`</li>
    </ul>
      
</details>

<details>
    <summary><strong>My Web3Signer status has an odd grey bar in its status, is something wrong?</strong></summary>
    
    <p>Web3Signer includes 4 containers (services): Web3Signer, Brain, Flyway and Postgres. You can check it yourself in the package view.</p>
    <p>Whenever one is indicated as Stopped (gray), it means that it was stopped. But in this case - just the flyway service is stopped, which is an expected behavior - it should run only once, while migration of the database. If it’s indicated as grey - that means that whenever it migrated - everything went well, and now there is no need for it to run!</p>
</details>

<!--![w3s-ss](/img/web3signer-flyway.png)-->

<details>
    <summary><strong>My clients are not syncing!</strong></summary>
    
    <p>It's always a good idea to check the logs first for any specific errors, but here are some of the most common issues:</p>
    <ul>
        <li>Have you selected both Execution and Consensus clients in the Stakers Menu?</li>
        <li>If something looks wrong in the dashboard, always check the logs first! The clients might be syncing as expected. Check if the block number and the package's volume size are increasing. This is a common issue for Nethermind.</li>
    </ul>
</details>

<details>
    <summary><strong>How long do clients take to sync?</strong></summary>
    
    <p>This is very different for every Dappnode depending on a number of factors:</p>
    <ul>
        <li>Geographic location</li>
        <li>Bandwidth</li>
        <li>ISP limitations</li>
        <li>Chosen EL and CL clients</li>
    </ul>
    <p>There is no exact information on how long exactly every client takes to sync, but there are a couple of facts that would be useful:</p>
    <ul>
        <li>Consensus client usually doesn't take longer than 5 minutes, as long as you enabled checksync when selecting your clients in the Stakers menu.</li>
        <li>Execution client syncing time depends on many factors, but it might take up to several days in some cases, so if you felt like consensus client synced fast, and execution client is still syncing after several hours - that's ok, it might take some time!</li>
    </ul>
</details>
