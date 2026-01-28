---
title: Publish your packages seamlessly
llm_description: "Step-by-step guide for publishing packages using the SDK-publish UI."
---

# Publish your packages seamlessly

The aim of this guide is to help you publish the new packages of your product in Dappnode seamlessly. We created a new UI to ease the publication of your packages in a few minutes. 

<aside>
👀

In this guide we are using images of a test repository to exemplify the process of publishing the packages. The actual screens may vary slightly.

</aside>

### Publishing process


**Step 1.** Go to [Dappnode Github](https://github.com/dappnode) and search for the generic repository of your product. You will find it with the name of **DAppNodePackage-yourproduct-generic.**

If your product is not listed and you want it to be included in Dappnode, contact us in Discord or Telegram.


**Step 2.** Click on the **Releases** title section on the right side column (highlighted in red)

![Step2](/img/Step2.png)

**Step 3.** In the releases section you can see all the packages of your product in the different blockchains. Select the package and click on 📣 Publish.

Ideally you should have tested the package before publishing. You can use the IPFS hash from the release to install the package without having to publish it.

![Step3](/img/Step3.png)

**Step 4.** Once in this screen, click Connect wallet. Remember that the publishing wallet needs to be **whitelisted** by Dappnode. If your wallet is not whitelisted yet, contact us in Discord / Telegram. 

![Step4_connect](/img/Step4_connect.png)


Your wallet is mainly used for two tasks: to authenticate that you are eligible to publish in the APM SmartContracts  and to sign the package to be published. This signature is used in the dappnode to verify that the package was actually signed by a "trusted key"


**Step 5.** Configure your custom IPFS settings. If you do not change it, default settings shown will be applied. Click Next button. 

![Step5](/img/Step5.png)


**Step 6.** Specify the details of your release. 
Dappnode package name: You can find it in dappnode_package.json file in the package.
Developer address: In case you want to add a developer address to publish future versions a part from the owner. 
Next version: You can find it in dappnode_package.json file in the package.
Release hash: You find it in the release table in Step3. 
Click Next button

![Step6](/img/Step6.png)

**Step 7.** Check the details of the package and sign the transaction with your wallet. The wallet must be connected in Ethereum mainnet to sign the transaction (even if the package is from other blockchain).

![Step7](/img/Step7.png)


**Step 8.** After signing the first transaction, you need to click the Publish button and sign again with your wallet. This time you need ETH (gas) to sign the transaction. 

![Step8](/img/Step8.png)

**Step 9.** Your package was successfully published! Congrats! 🎉 
If your product has a community of dappnode users, we invite you to announce it in our Discord community. Every user with this package installed and auto-updates enabled will auto update it within less than 3 days.

Thanks for reading the guide! If you found some problem in the process, do not hesitate to contact us in Discord / Telegram.

