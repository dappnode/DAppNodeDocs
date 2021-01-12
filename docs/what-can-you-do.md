# What can you do with your DAppNode?

Enter <https://my.admin.dnp.dappnode.eth> to access DAppNode's admin interface. From DAppNode 0.2.0 you can also just type http://my.dappnode . Did we ever say that we wanted to make everything so easy...?

Bear in mind that DAppNode's functionality will be limited until the Ethereum mainnet chain is synced (should take around 6~8 hours to get a warp sync).

Now you can do things like for example:

- Navigate to a decentralized web [decentral.eth](http://decentral.eth)

- Decentralized version of [Mycrypto](http://mycrypto.dappnode.eth)

- Decentralized version of [ENS Manager](http://ens.dappnode.eth)

- Decentralized version of [Wallet Gnosis](http://gmultisig.dappnode.eth)

- Decentralized version of [Oasis Direct](http://oasis.dappnode.eth) and [Eth2Dai](http://eth2dai.dappnode.eth)

- Go to IPFS by entering <http://ipfs.dappnode:5001/webui> into your browser.

- You have a websocket of your parity node in ws://my.ethchain.dnp.dappnode.eth:8546 or ws://fullnode.dappnode:8546 and you can use http://fullnode.dappnode:8545 as a custom RPC to connect to metamask i.e.

<!-- prettier-ignore-start -->
!!! info
    We have updated our IPFS package (v.0.1.4), and one of the features is to provide a more complete and user friendly web interface. The first time you access to it will ask you for your “Custom API address”, just fill the field with this address and you will be connected to your IPFS node , this is the input you have to enter in the field seen in the image below.
<!-- prettier-ignore-end -->

```
/ip4/172.33.1.5/tcp/5001
```

<p align="center">
    <img width="1000"src="https://github.com/Shelpin/DAppNode/raw/master/doc/ipfsinterface.jpg">
</p>

## VPN connection

Now you have your own VPN service to privately connect to your DAppNode and also to provide access for your family and friends to connect to your installed nodes and to ETH domains through your DAppNode.

## Ethereum client

After a few hours of installing DAppNode you will have your own Ethereum fullnode running in your DAppNode.

You have available your node websocket in
ws://my.ethchain.dnp.dappnode.eth:8546 or ws//fullnode.dappnode:8546 and RPC connection through http://my.ethchain.dnp.dappnode.eth:8545 or http://fullnode.dappnode:8545

From version 0.2.7 Ethchain package allows the user to select the Ethereum client he wants to use as default of his DAppNode.

The available clients are Parity, which is the default until version 0.2.7, and Geth, which is the client with which your full node will sync by default since v0.2.7.

You can easily switch between them in the ethchain package screen, but please note that volumes where the chains are stored are different, so first time you switch from one to another the chain will have to sync.

To switch the client just go to “ Packages / System Packages / Ethchain / Choose client” and select your preferred option

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/chooseclient.jpg?raw=true">
</p>

When you switch clients you can choose between removing the chain volume of the client you are moving from, or keep it so you can easily switch back again without the need of syncing the whole chain again.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/changingclient.jpg?raw=true">
</p>

You can still set parameters for both chains in the extra opt fields of each client. Use Extra Opts to define variables to be applied in Parity and Extra opts GETH to do the same with the official EF client, and hit "Update environment variables"

More info on env vars for Parity client [here](https://wiki.parity.io/Configuring-Parity-Ethereum) and for Geth [here](https://github.com/ethereum/go-ethereum/wiki/Command-Line-Options)

 <p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/extraoptsgeth.jpg?raw=true">
</p>

## MyCrypto

You can now enter a decentralized version of MyCrypto that it is not only hosted in IPFS but is using your node to connect to the Ethereum network. However, note that as the access URL is not https there might be incompatibilities; we are working hard to solve this issue and give you an awesome user experience using MyCrypto in a decentralized way. You can access it in <http://mycrypto.dappnode.eth/>. In desktop version there is no need to have an https access to connect to a node or connect to your hardware wallet.

## Metamask

You also can use Metamask connected to your own node, not with the pre-set Metamask nodes. To configure your Metamask while connected to your DAppNode, just follow these steps:

First, you must be connected to your DAppNode’s VPN:

1. Click “Main network” on top to the left.

2. Click Custom RPC.

3. “New RPC URL”:

   3.1 Running a Full Node? http://fullnode.dappnode:8545

   3.2 Running Light Client? http://geth.dappnode:8545

   3.3 Running Remote? this means that you do not run you own node. You could use infura instead.

4. Now you should be connected to “Private Network” and that’s it!

5. But... Do you want to be connected to a "Private Network" or to your DAppNode???

To edit the name showed at the upper right corner just hit advanced options under the URL of the Custom RPC and include DAppNode (or the name you want to have) in the field alias.

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/customnamemetamask.png?raw=true">
</p>

## IPFS

When you install DAppNode an IPFS daemon is installed and your account is automatically created so you can start uploading and requesting the decentralized storage that the InterPlanetary File System offers.

You can access the web ui entering <http://ipfs.dappnode:5001/webui>

We have updated our IPFS package (v.0.1.6), and one of the features is to provide a more complete and user friendly web interfaz. The first time you access to it will ask you for your “Custom API address”, just fill the field with this address and you will be connected to your IPFS node , this is the input you have to enter in the field seen in the image below.

`/ip4/172.33.1.5/tcp/5001`

<p align="center">
    <img width="1000"src="https://github.com/Shelpin/DAppNode/raw/master/doc/ipfsinterface.jpg">
</p>

If you want to automatically peer-connect two IPFS nodes, go to Connect with peers and send the link to your peer. Use this resource to mitigate slow IPFS propagation

<p align="center">
    <img width="1000"src="https://github.com/dappnode/DAppNodeDocs/blob/master/docs/images/connectwithpeers.png?raw=true">
</p>

If you want to know a bit more on IPFS here you have a [useful link](https://medium.com/coinmonks/a-hands-on-introduction-to-ipfs-ee65b594937)

## ENS resolution

When your device is connected to a #DAppNode, you can use ".eth" domains that resolve to ipfs/swarm hashes.

Note that your browsing device is connected to your DAppNode via VPN, and the VPN is configured to distinguish DNS or ENS traffic, to send only the ENS traffic through the DAppNode (make sure in your VPN config that you select the most adequate option for you, either not sending all the traffic through the VPN, only ETH traffic or all the traffic). When you access a .eth domain from your browser, the DAppNode uses the ETHFORWARD core package to resolve the .eth domain to a IPFS hash via ENS, then the DAppNode looks for the hashed content in IPFS and serves the content to your browser.

Now you can seamlessly navigate ETH domains in a decentralized way.

# Advanced users bonus

## Have your own packages in your DAppNode

You have two ways to install your own DNPs (DAppNode Packages):

1. With their ENS name, i.e. kovan.dnp.dappnode.eth (a private repository controlled by our team) or yourpackage.public.dappnode.eth, a repository with free access is available so anyone can publish packages there.

Ultimately any ENS name that resolves to an IPFS containing a valid manifest is acceptable.

2. With an IPFS hash that contains a valid manifest, i.e. /ipfs/QmR28vMrQVkSLznCQF7G1eNPx3RBx27zKYpctwwgRAot9W

So for development what we recommend is:

1.  Develop your package and test it locally
2.  Use the SDK to build it and upload it to IPFS
3.  Test the package by installing it with its IPFS link
4.  Once you are sure it works perfect, publish it to the open repository public.dappnode.eth.

Please take a look at these refs regarding the SDK to deploy your own packages in your DAppNode:

- <https://github.com/dappnode/DAppNodeSDK>

- <https://github.com/dappnode/DAppNode/wiki/DAppNode-Package-Development>

- <https://github.com/dappnode/DAppNode/wiki/DAppNode-packages-manifest>

## How to decentralize wallet.ethereum.org with DAppNode

In this section, we’re going to explain how it’s possible to decentralize wallet.ethereum.org using DAppNode and by decentralize we mean; distribute it’s content through IPFS, making it possible to resolve via an ENS address.

Our first step is to clone the wallet.ethereum.org repository and follow the steps of the official guide, here (this tutorial is based on this commit [6a6463b1a6aa615e4364592c12c933ee816fb28b](https://github.com/ethereum/meteor-dapp-wallet/tree/6a6463b1a6aa615e4364592c12c933ee816fb28b).

Here’s a summary of the steps that we will need to follow:

### Install Meteor:

`$ curl https://install.meteor.com/ | sh`

`$ git clone https://github.com/ethereum/meteor-dapp-wallet.git`

`$ cd meteor-dapp-wallet/app`

`$ npm install`

`$ npm install -g meteor-build-client`

`$ meteor-build-client ../build - path ""`

After following these steps we will have a folder called `build` with a deployable version of wallet.ethereum.org.

In order for us to use the web inside DAppNode a site must be a static website that can be used directly from IPFS (another case would be a website with an accelerator or a DAppNode Package API installed to act as a backend). If we must make these modifications, the modifications will depend on each website and how it has been developed.

`meteor-dapp-wallet/app/client/lib/ethereum/1_web3Init.js`

Change:

web3 = new Web3('ws://localhost:8546');

By:

web3 = new Web3('ws://my.ethchain.dnp.dappnode.eth:8546');

After this step, the wallet will connect directly to our DAppNode, in case of not being able to go through MetaMask.

`meteor-dapp-wallet/app/client/lib/ethereum/observeTransactions.js`

In line 532 change:

Session.get('network') == 'main' &&

By:

Session.get('network') == 'centralized' && false &&

The reason we need to make this change is that we do not want the website to connect to centralized services like min-api.cryptocompare.com. Making this change means that we lose the functionality which converts the eth to other currencies, in future versions this service should be replaced by a decentralized service to get the exchange rate.

`meteor-dapp-wallet/app/client/lib/ethereum/walletConnector.js`

There seems to be a problem with the EthAccounts.init so we have to wrap line 86

try {
EthAccounts.init();
} catch (err) {
console.log(err);
}
Then comment `EthTools` on line 89, to avoid min-api.cryptocompare.com calls

/_
EthTools.ticker.start({
extraParams: typeof mist !== 'undefined' ? 'Mist-' + mist.version : '',currencies: ['BTC', 'USD', 'EUR', 'BRL', 'GBP'] });
_/

`meteor-dapp-wallet/app/client/routes.js`

To redirect on start to dashboard modify line 14:
if (location.origin === 'file://') {

To:

if (location.origin === 'file://' || location.origin === 'http://my.ipfs.dnp.dappnode.eth:8080') {

Solve SourceSansPro-ExtraLightIt error

```
wget -O ../build/packages/ethereum_dapp-styles/fonts/SourceSansPro-ExtraLightIt.otf https://www.wfonts.com/download/data/2015/10/11/source-sans-pro-extralight/Source%20Sans%20Pro%20ExtraLight%20Italic.otf
```

Once these steps are finished we’re in a position to create a new build:

```
$ meteor-build-client ../build — path ""
```

### Upload to IPFS

When uploading content to IPFS we use a tool we have created that can be used if you are connected to DAppNode (this tool is currently experimental, and it is in continous improvement) or you could use the command `ipfs add -r build`.

Using our tool the next steps would be:

```
$ cd ..
$ npm install -g @dappnode/ipfsuploader
$ ipfsuploader build/
```

After executing the last command you will obtain a similar output (they will not be the same hashes) to this one:

```
Qmb5oxJWf5Zw1UnvewkRM6V5qVbxWcY5s59FvhtWhC6F4Fbuild/i18n
QmQV1tXNCZsD82LiLwWpHvdwWqbGXJd8q1Pq2hMPxyiKFabuild/packages/es5-shim
QmTte2i1HQKRgUgA8ZuVANwmqLCjjYzddmCekbUqJ3fmCAbuild/packages/ethereum_dapp-styles/fonts
QmWMVompWymG8CmCgyB57dvaWegymjknMFTUQVrWfYebYubuild/packages/ethereum_dapp-styles/icons
QmTCXm13p6PW7CnKegNqFP3mCgt8sAaNNteCJDjFiGP3Jmbuild/packages/ethereum_dapp-styles
QmVvCPByChGfmEvxS2Nv6icKZSJ27aYqDSUzP2gta44XYbbuild/packages/ethereum_elements
QmXQ6fGzJsDAUGuLFxG8wgMgvyvgnR6pW9yeue3VUtdHnebuild/packages
QmTRpmNWiAkYQnesiGZRVE9NwbEfqZLH4DnLmbCmjMGaLLbuild/sockjs
QmZQ3GzqXHCRM6uccP6TcZdPGPSyqJXyhwLETD2T2o8m73build
```

If we use the hash associated with `build` and access it through this URL:

<http://my.ipfs.dnp.dappnode.eth:8080/ipfs/QmZQ3GzqXHCRM6uccP6TcZdPGPSyqJXyhwLETD2T2o8m73>

The website is now distributed in IPFS!

### Point the ENS domain to the IPFS hash

If you are the owner of an ENS domain you can make this point to the hash you want. We are going to use [wallet.dappnode.eth](http://wallet.dappnode.eth) for this example:

1. Go to <http://mycrypto.dappnode.eth/#contracts> (if you don’t have access to a DAppNode you can use the centralized alternative) <https://mycrypto.com#contracts> or <https://www.myetherwallet.com/#contracts>

2. Select: ENS: Public Resolver 0x5FfC014343cd971B7eb70732021E26C35B744cc4

3. Access

4. Go to <https://etherscan.io/enslookup> and search for wallet.dappnode.eth noting its NameHash (in this case 0x7407….8c02)

5. setText

   **node bytes 32:** 0x7407156505d4facdb6474ccee4aac0c34679f5d6fddb603ab6e8976d8e138c02

   **key:** dnslink

   **value:**/ipfs/QmZQ3GzqXHCRM6uccP6TcZdPGPSyqJXyhwLETD2T2o8m73

<p align="center">
    <img width="600"src="https://github.com/Shelpin/DAppNode/raw/master/doc/enstransaction.jpg">
</p>

With these parameters we make the transaction in ethereum mainet and once it’s mined the web will be accessible from that domain!

<p align="center">
    <img width="600"src="https://github.com/Shelpin/DAppNode/raw/master/doc/walletdappnodeeth.png">
</p>
