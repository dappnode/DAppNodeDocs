# SDK-Publish

The SDK-Publish tool is a component of the Dappnode Software Development Kit (dappnodesdk). This tool simplifies the process of signing and publishing Dappnode package releases, utilizing your wallet for secure and efficient transaction management.

With SDK-Publish, developers can ensure their Dappnode packages are authenticated and ready for deployment, enhancing the security and integrity of their releases. Whether you are a seasoned developer or new to Dappnode, SDK-Publish provides an intuitive interface to facilitate the package release process, making it an essential tool for anyone involved in Dappnode Packages development.

## How it works?

Below you have a step-by-step guide about the package releases publishing process.

1. **@dappnode/dappnodesdk publish**

   ```sh
   npx @dappnode/dappnodesdk publish [type]
   ```

   - Execute `npx @dappnode/dappnodesdk publish` in your package directory to generate a pre-filled URL with the parameters for the sdk-publish WebApp.

   - Providing the `[type]` will also be necessary. Choose between `patch | minor | major`, according to your package release. If you are pretending to upload the package to developing dappnode's IPFS node instead of your own IPFS node, make sure to include `--provider=remote` flag.

   - Navigate to the outputed URL to begin the publishing process in the WebApp.

2. **Connect Wallet**

   - Once in the SDK-Publish UI you will have to connect to your wallet provider. Click 'Connect wallet' to link your wallet. A permission pop-up will appear in your provider.
   - If your wallet network isn't set to 'Ethereum Mainnet', a 'Switch network' button will appear. This button will prompt your wallet to switch to Mainnet, after which the WebApp will refresh.
   - If already connected and set to 'Ethereum Mainnet', this step will be skipped.

3. **Edit IPFS settings**

   - Edit your IPFS settings for release propagation if desired. If not, the IPFS dappnode-dev node will be used.
     - `IPFS API URLs` => accepts multiple IPFS API URLs to facilitate the propagation of the signed release
     - `IPFS Gateway URL` => accepts a single IPFS Gateway URL to ensure the IPFS hash has propagated.

4. **Release Details**
   - Complete the form with your package release information. If accessed via the pre-filled URL from [@dappnode/dappnodesdk](https://github.com/dappnode/DAppNodeSDK), the form will be auto-filled. (For new repos, provide the developer address too).
   - It checks if the input values are valid, determines if it's a new repo deployment or an update, and verifies that the manifest information matches the provided hash manifest. If all checks pass, the 'Continue' button will be enabled.
5. **Sign and Publish**
   - Allows to sign the release and publishing after it, confirming actions via wallet pop-ups.
   - Before the sign, it verifies your address is whitelisted to publish a new version if deploying an update from an existing package.
   - Feedback on loading, errors, or success will be provided throughout the process.
6. **Release Published**
   - By this step, your transaction will be successfully queued! It will be processed
     sooner or later based on the gas fee you provided. You will receive confirmation and the transaction hash for the package deployment.
