"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[8636],{2243:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(5893),o=i(1151);const s={},r="Already a node operator",a={id:"user/staking/ethereum/lsd-pools/lido/already-node-operator",title:"Already a node operator",description:"This document provides detailed instructions for existing Node Operators on integrating their setup with the Lido Community Staking Module (CSM) via Dappnode. By following these steps, you can efficiently manage your validators and ensure proper functionality within the Lido protocol.",source:"@site/docs/user/staking/ethereum/lsd-pools/lido/already-node-operator.md",sourceDirName:"user/staking/ethereum/lsd-pools/lido",slug:"/user/staking/ethereum/lsd-pools/lido/already-node-operator",permalink:"/docs/user/staking/ethereum/lsd-pools/lido/already-node-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/staking/ethereum/lsd-pools/lido/already-node-operator.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"**Become a Lido Node Operator with Dappnode**",permalink:"/docs/user/staking/ethereum/lsd-pools/lido/register"},next:{title:"Notifications & Warnings",permalink:"/docs/user/staking/ethereum/lsd-pools/lido/notifications"}},d={},l=[{value:"1. Importing Keystores into the Brain UI",id:"1-importing-keystores-into-the-brain-ui",level:2},{value:"Steps to Import Keystores",id:"steps-to-import-keystores",level:3},{value:"2. Opening the Lido CSM UI and Wallet Connection",id:"2-opening-the-lido-csm-ui-and-wallet-connection",level:2},{value:"3. Configuring Telegram Notifications",id:"3-configuring-telegram-notifications",level:2},{value:"4. Monitoring Infrastructure",id:"4-monitoring-infrastructure",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"already-a-node-operator",children:"Already a node operator"}),"\n",(0,t.jsx)(n.p,{children:"This document provides detailed instructions for existing Node Operators on integrating their setup with the Lido Community Staking Module (CSM) via Dappnode. By following these steps, you can efficiently manage your validators and ensure proper functionality within the Lido protocol."}),"\n",(0,t.jsx)(n.h2,{id:"1-importing-keystores-into-the-brain-ui",children:"1. Importing Keystores into the Brain UI"}),"\n",(0,t.jsx)(n.p,{children:"Keystore files contain critical information for managing your validators. When you becamo a Node Operator you lido deposists the necessary amount of ETH to the validator to start staking. These keys files must be imported into the Staking Brain (Brain UI) with the appropriate configuration for the Lido protocol."}),"\n",(0,t.jsx)(n.h3,{id:"steps-to-import-keystores",children:"Steps to Import Keystores"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ensure your keys are not already uploaded in any node."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Access the ",(0,t.jsx)(n.code,{children:"/import"})," tab in Brain UI:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Mainnet ",(0,t.jsx)(n.a,{href:"http://brain.web3signer.dappnode/import",children:"Staking Brain"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Holesky ",(0,t.jsx)(n.a,{href:"http://brain.web3signer-holesky.dappnode/import",children:"Staking Brain"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select the \u201cLido\u201d Tag:\nWhile uploading your keystore files, make sure to tag them with \u201cLido\u201d to designate automatically the required fee recipient from the Lido protocol:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Mainnet: ",(0,t.jsx)(n.code,{children:"0x388C818CA8B9251b393131C08a736A67ccB19297"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Holesky: ",(0,t.jsx)(n.code,{children:"0xE73a3602b99f1f913e72F8bdcBC235e206794Ac8"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Do not edit the fee recipient address. Doing so will result in penalties."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Provide the password"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Import keystores to Staking Brain",src:i(5063).Z+"",width:"1919",height:"956"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["For keys that have not yet been uploaded to the Lido protocol, you can import them to the Staking Brain through the Lido CSM UI while simultaneously submitting them to the Lido protocol via the ",(0,t.jsx)(n.code,{children:"/keys/submit"})," path."]})]}),"\n",(0,t.jsx)(n.h2,{id:"2-opening-the-lido-csm-ui-and-wallet-connection",children:"2. Opening the Lido CSM UI and Wallet Connection"}),"\n",(0,t.jsx)(n.p,{children:"The Lido CSM UI serves as the central interface for managing validator keys and monitoring validator and infrastucture status. Before proceeding with any validator operations, ensure your wallet is connected."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Access the Lido CSM UI:"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to the Lido CSM package UI. - ",(0,t.jsx)(n.a,{href:"http://ui.lido-csm-mainnet.dappnode/",children:"Mainnet UI"})," - ",(0,t.jsx)(n.a,{href:"http://ui.lido-csm-holesky.dappnode/",children:"Holesky UI"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Connect Your Wallet:"}),"\n",(0,t.jsx)(n.p,{children:"Use the \u201cI am a Node Operator\u201d button and choose your wallet provider."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Log In as already Node Operator",src:i(3559).Z+"",width:"1460",height:"737"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Authorize the Connection:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Follow the on-screen prompts to grant the necessary permissions."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ensure the wallet\u2019s network matches the intended environment (e.g., Mainnet or Holesky)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify Connection:"}),"\n",(0,t.jsx)(n.p,{children:"Once connected, your wallet address will appear in the top-right corner of the interface."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Ensure wallet is connected",src:i(4079).Z+"",width:"664",height:"72"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-configuring-telegram-notifications",children:"3. Configuring Telegram Notifications"}),"\n",(0,t.jsx)(n.p,{children:"To receive critical updates and alerts regarding your validator operations, it is essential to configure Telegram notifications."}),"\n",(0,t.jsx)(n.p,{children:"This provides alerts about validator penalties, slashing incidents, exit requests, key deposits and smart contract events."}),"\n",(0,t.jsx)(n.p,{children:"Staying informed helps safeguard your assets, reduce risks, and maintain transparency and control over your activities in the protocol, ensuring smooth and efficient participation."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Initial Setup:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When accessing the Lido CSM UI for the first time, a modal will appear prompting you to configure Telegram notifications."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click \u201cNavigate\u201d to go to ",(0,t.jsx)(n.code,{children:"/notifications"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Notifications Modal",src:i(8228).Z+"",width:"1905",height:"1046"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Generate a Telegram Bot Token:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open Telegram and search for ",(0,t.jsx)(n.a,{href:"https://web.telegram.org/a/#93372553",children:(0,t.jsx)(n.code,{children:"@BotFather"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start a chat with BotFather and type ",(0,t.jsx)(n.code,{children:"/newbot"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Follow the instructions to name your bot and choose a username (must end with "bot").'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once created, BotFather will send you the bot token."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Example: ",(0,t.jsx)(n.code,{children:"123456789:ABCDefghIJKLMNOPQRSTuvwxYZ"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Obtain Your User ID:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.a,{href:"https://web.telegram.org/a/",children:"Telegram"})," and search for ",(0,t.jsx)(n.a,{href:"https://web.telegram.org/a/#52504489",children:(0,t.jsx)(n.code,{children:"@userinfobot"})})," or ",(0,t.jsx)(n.a,{href:"https://web.telegram.org/a/#1533228735",children:(0,t.jsx)(n.code,{children:"@raw_data_bot"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start a chat with the bot by clicking ",(0,t.jsx)(n.code,{children:"Start"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The bot will reply with your Telegram ID"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Input the Bot Token and User ID:"}),"\n",(0,t.jsxs)(n.p,{children:["Enter the bot token and your user ID in the Lido CSM package UI and click ",(0,t.jsx)(n.code,{children:"Update Telegram Data"}),".\n",(0,t.jsx)(n.img,{alt:"Set up Notifications",src:i(627).Z+"",width:"1905",height:"1046"})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["You must start the conversation with the bot using ",(0,t.jsx)(n.code,{children:"/start"})," so it can send you notifications."]})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"To receive the notifications, is mandatory to fill both inputs, otherwise the notification system won't work"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify Notifications:"}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that test alert was sent to your Telegram to confirm that notifiactions are properly configured.\n",(0,t.jsx)(n.img,{alt:"Ensure Notifications are set",src:i(731).Z+"",width:"770",height:"255"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4-monitoring-infrastructure",children:"4. Monitoring Infrastructure"}),"\n",(0,t.jsx)(n.p,{children:"The dashboard provides an at-a-glance view of your infrastructure\u2019s health and status, including execution clients, consensus clients, web3 signer, and subscribed relays."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5063:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/lido-csm-brain-import-931b025593e1e791ae472dce17b4a2f6.png"},731:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/lido-csm-ensure-notifications-24da5f8905ac0e8f88c02b3aa2ccc18e.png"},3559:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/lido-csm-log-in-already-NO-73d10878dc29bca9157afc26ca1bb611.png"},8228:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/lido-csm-notifications-modal-90a669424cf7b7048bd3ce55a2417279.png"},627:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/lido-csm-setup-notifications-6b2635b85b84d6d5def3534b1d8552e3.png"},4079:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/lido-csm-wallet-connected-113b5e31772ef307fb762443fa5cac15.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);