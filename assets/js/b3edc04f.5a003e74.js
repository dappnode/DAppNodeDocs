"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[8138],{830:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"dev/package-publishing/publish-packages-clients","title":"Publish your packages seamlessly","description":"The aim of this guide is to help you publish the new packages of your product in Dappnode seamlessly. We created a new UI to ease the publication of your packages in a few minutes.","source":"@site/docs/dev/package-publishing/publish-packages-clients.md","sourceDirName":"dev/package-publishing","slug":"/dev/package-publishing/publish-packages-clients","permalink":"/docs/dev/package-publishing/publish-packages-clients","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/dev/package-publishing/publish-packages-clients.md","tags":[],"version":"current","frontMatter":{"title":"Publish your packages seamlessly"},"sidebar":"devSidebar","previous":{"title":"Multi-Configuration","permalink":"/docs/dev/package-development/multi-configuration"},"next":{"title":"Github Actions","permalink":"/docs/dev/github-actions"}}');var i=t(4848),a=t(8453);const o={title:"Publish your packages seamlessly"},c="Publish your packages seamlessly",r={},l=[{value:"Publishing process",id:"publishing-process",level:3}];function d(e){const s={a:"a",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"publish-your-packages-seamlessly",children:"Publish your packages seamlessly"})}),"\n",(0,i.jsx)(s.p,{children:"The aim of this guide is to help you publish the new packages of your product in Dappnode seamlessly. We created a new UI to ease the publication of your packages in a few minutes."}),"\n",(0,i.jsxs)("aside",{children:[(0,i.jsx)(s.p,{children:"\ud83d\udc40"}),(0,i.jsx)(s.p,{children:"In this guide we are using images of a test repository to exemplify the process of publishing the packages. The actual screens may vary slightly."})]}),"\n",(0,i.jsx)(s.h3,{id:"publishing-process",children:"Publishing process"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 1."})," Go to ",(0,i.jsx)(s.a,{href:"https://github.com/dappnode",children:"Dappnode Github"})," and search for the generic repository of your product. You will find it with the name of ",(0,i.jsx)(s.strong,{children:"DAppNodePackage-yourproduct-generic."})]}),"\n",(0,i.jsx)(s.p,{children:"If your product is not listed and you want it to be included in Dappnode, contact us in Discord or Telegram."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 2."})," Click on the ",(0,i.jsx)(s.strong,{children:"Releases"})," title section on the right side column (highlighted in red)"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Step2",src:t(2379).A+"",width:"2878",height:"1374"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 3."})," In the releases section you can see all the packages of your product in the different blockchains. Select the package and click on \ud83d\udce3\xa0Publish."]}),"\n",(0,i.jsx)(s.p,{children:"Ideally you should have tested the package before publishing. You can use the IPFS hash from the release to install the package without having to publish it."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Step3",src:t(6341).A+"",width:"2880",height:"1334"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 4."})," Once in this screen, click Connect wallet. Remember that the publishing wallet needs to be ",(0,i.jsx)(s.strong,{children:"whitelisted"})," by Dappnode. If your wallet is not whitelisted yet, contact us in Discord / Telegram."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Step4_connect",src:t(2898).A+"",width:"2874",height:"1018"})}),"\n",(0,i.jsx)(s.p,{children:'Your wallet is mainly used for two tasks: to authenticate that you are eligible to publish in the APM SmartContracts  and to sign the package to be published. This signature is used in the dappnode to verify that the package was actually signed by a "trusted key"'}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 5."})," Configure your custom IPFS settings. If you do not change it, default settings shown will be applied. Click Next button."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Step5",src:t(388).A+"",width:"2880",height:"1446"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 6."})," Specify the details of your release.\nDappnode package name: You can find it in dappnode_package.json file in the package.\nDeveloper address: In case you want to add a developer address to publish future versions a part from the owner.\nNext version: You can find it in dappnode_package.json file in the package.\nRelease hash: You find it in the release table in Step3.\nClick Next button"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Step6",src:t(2847).A+"",width:"2880",height:"1554"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 7."})," Check the details of the package and sign the transaction with your wallet. The wallet must be connected in Ethereum mainnet to sign the transaction (even if the package is from other blockchain)."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Step7",src:t(4102).A+"",width:"2876",height:"1352"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 8."})," After signing the first transaction, you need to click the Publish button and sign again with your wallet. This time you need ETH (gas) to sign the transaction."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Step8",src:t(3905).A+"",width:"2878",height:"1318"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 9."})," Your package was successfully published! Congrats! \ud83c\udf89\xa0\nIf your product has a community of dappnode users, we invite you to announce it in our Discord community. Every user with this package installed and auto-updates enabled will auto update it within less than 3 days."]}),"\n",(0,i.jsx)(s.p,{children:"Thanks for reading the guide! If you found some problem in the process, do not hesitate to contact us in Discord / Telegram."})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2379:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Step2-03f05ed784550e23e5fb8676be75147d.png"},6341:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Step3-a070005931f77f2357f9de8eaf9cc716.png"},2898:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Step4_connect-68c51fec5a0dc82814d430cce6312a23.png"},388:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Step5-cd8431bff08d3d816fc1dd6312569187.png"},2847:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Step6-b17dacf439a9c28c78bdf9adb184c369.png"},4102:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Step7-9f2a6741f351d8f164d4bf37b6e94d8d.png"},3905:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Step8-54a0af96b92605467d1f50f3e8132f60.png"},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var n=t(6540);const i={},a=n.createContext(i);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);