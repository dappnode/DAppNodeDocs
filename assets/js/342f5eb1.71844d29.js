"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[6111],{6337:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"user/staking/ethereum/lsd-pools/lido/overview","title":"Lido Community Staking Module (CSM)","description":"---","source":"@site/docs/user/staking/ethereum/lsd-pools/lido/overview.md","sourceDirName":"user/staking/ethereum/lsd-pools/lido","slug":"/user/staking/ethereum/lsd-pools/lido/overview","permalink":"/docs/user/staking/ethereum/lsd-pools/lido/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/staking/ethereum/lsd-pools/lido/overview.md","tags":[],"version":"current","frontMatter":{},"sidebar":"userSidebar","previous":{"title":"Testnet","permalink":"/docs/user/staking/ethereum/solo/holesky"},"next":{"title":"Register as a Node Operator","permalink":"/docs/user/staking/ethereum/lsd-pools/lido/register"}}');var r=o(4848),n=o(8453);const s={},a="Lido Community Staking Module (CSM)",d={},l=[{value:"<strong>Lido CSM Overview</strong>",id:"lido-csm-overview",level:2},{value:"<strong>Lido CSM in dappnode</strong>",id:"lido-csm-in-dappnode",level:2},{value:"<strong>Notifications</strong>",id:"notifications",level:3},{value:"<strong>Ejector</strong>",id:"ejector",level:3},{value:"<strong>Track multiple Node Operators</strong>",id:"track-multiple-node-operators",level:3},{value:"<strong>Import keystores directly from the Lido CSM</strong>",id:"import-keystores-directly-from-the-lido-csm",level:3},{value:"<strong>Infraestructure monitoring</strong>",id:"infraestructure-monitoring",level:3},{value:"<strong>Performance</strong>",id:"performance",level:3},{value:"<strong>MEV Boost Relays</strong>",id:"mev-boost-relays",level:3},{value:"Testnet",id:"testnet",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"lido-community-staking-module-csm",children:"Lido Community Staking Module (CSM)"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"lido-csm-overview",children:(0,r.jsx)(t.strong,{children:"Lido CSM Overview"})}),"\n",(0,r.jsxs)(t.p,{children:["Lido is a ",(0,r.jsx)(t.strong,{children:"liquid staking"})," solution for Ethereum that addresses the liquidity issues of traditional staking. Instead of locking up assets and losing access to them, users can stake through Lido and receive liquid tokens. These tokens retain the value of the staked assets and can be used elsewhere while still earning staking rewards."]}),"\n",(0,r.jsxs)(t.p,{children:["Lido, with over ",(0,r.jsx)(t.a,{href:"https://lido.fi/ethereum",children:"9,8 million ETH"})," staked on its platform, is a significant contributor in the Ethereum ecosystem. To broaden and diversify its network of node operators, Lido recently introduced the ",(0,r.jsxs)(t.a,{href:"https://csm.lido.fi/?ref=dappnode",children:[(0,r.jsx)(t.strong,{children:"Community Staking Module"})," (CSM)"]}),", the first Lido module with a ",(0,r.jsx)(t.strong,{children:"permissionless entry"})," for Ethereum staking. By first providing an ETH-based bond, anyone can now become a node operator by running validators in the Lido protocol. Designed with solo stakers in mind, the CSM lowers the barrier to becoming an Ethereum validator with 2.4 ETH, requiring far less than the standard 32 ETH, and offers a user-friendly experience. While tailored for smaller stakers, it is open to all, including professional operators."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Becoming a Lido Node Operator is recommended for users with some experience in running validators. The process requires a basic understanding of the Ethereum network and the Lido protocol. If you are new to staking, we recommend setting up a validator on the Testnet first to familiarize yourself with the process, see ",(0,r.jsx)(t.a,{href:"/docs/user/staking/ethereum/solo/holesky",children:"Staking on the Ethereum Testnet"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"lido-csm-in-dappnode",children:(0,r.jsx)(t.strong,{children:"Lido CSM in dappnode"})}),"\n",(0,r.jsx)(t.p,{children:"Dappnode provides an easy-to-use and intuitive interface for most of the infrastructure needed to become a Lido Node Operator. The process is straightforward and requires only a few steps to set up a node operator and start earning rewards."}),"\n",(0,r.jsx)(t.p,{children:"Steps to become Node Operator"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to Dappnode platform ",(0,r.jsx)(t.a,{href:"https://my.dappnode/",children:"https://my.dappnode/"})]}),"\n",(0,r.jsx)(t.li,{children:"Go to Dappstore tab in the left menu"}),"\n",(0,r.jsx)(t.li,{children:"Search and install Lido CSM package"}),"\n",(0,r.jsx)(t.li,{children:"Once it is installed, go to packages tab and click on the name of the Lido CSM package and find the section Ui below the version title."}),"\n",(0,r.jsx)(t.li,{children:"You will be in the Lido interface, connect your wallet and start the staking process."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Dappnode takes care of the Lido protocol requirements, such as exiting validator when needed, and provides a user-friendly interface to manage the node operator."}),"\n",(0,r.jsx)(t.p,{children:"The main functionalities covered by Dappnode in the Lido CSM package are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Telegram Notifications"}),": you can setup notifications for your Node Operator to be informed about any event. You need to configure the user ID and Telegram token to received your notifications."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Ejector"}),": whenever any of your validator requires to be exited, it will be done automatically sending you the corresponding notification."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Track multiple Node Operators"}),": you can track multiple Node Operators from the same DAppNodePackage-lido-csm."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Performance"}),": your validators attestations performance will be tracked and you will be notified if they are not performing as expected according to the Lido tresholds."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"MEV boost relays"}),": you will receive notifications whenever your validators are using relays blocklisted in the Lido CSM or not using any relay at all."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Import keystores directly from the Lido CSM"}),": you can import your keystores directly from the Lido CSM to your DAppNodePackage-lido-csm and they will be automatically tagged as Lido."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Infraestructure monitoring"}),": you will be able to visualize the status of your infraestructure (EC - CC - Signer - MEV Boost)."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"notifications",children:(0,r.jsx)(t.strong,{children:"Notifications"})}),"\n",(0,r.jsxs)(t.p,{children:["The DAppNodePackage-lido-csm provides notifications and warnings to help you monitor your infraestructure and validator performance. You will be able to setup your notifications either during the onboarding process if you are registering as a new Node Operator and from the UI navigating to ",(0,r.jsx)(t.code,{children:"/notifications"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"For further information on how to setup your notifications, see Notifications section"})}),"\n",(0,r.jsx)(t.h3,{id:"ejector",children:(0,r.jsx)(t.strong,{children:"Ejector"})}),"\n",(0,r.jsx)(t.p,{children:"The Ejector is a service that will automatically exit your validator when needed. You will receive a notification when the validator has been successfully exited and when the exit has failed, letting you know that a manual exit is required. The ejector has the following characteristics:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Automatic exit"}),": the Ejector will automatically exit your validator when needed."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Ejector Notifications"}),": you will receive a notification when the validator has been successfully exited and when the exit has failed, letting you know that a manual exit is required."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Retry mechanism"}),": the Ejector will retry the exit process if it fails, ensuring that the validator is exited successfully."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"lido-notification-ejector",src:o(9526).A+"",width:"531",height:"111"})}),"\n",(0,r.jsx)(t.h3,{id:"track-multiple-node-operators",children:(0,r.jsx)(t.strong,{children:"Track multiple Node Operators"})}),"\n",(0,r.jsx)(t.p,{children:"The DAppNodePackage-lido-csm allows you to track multiple Node Operators from the same package. This feature is useful if you are managing multiple Node Operators and want to keep track of their performance and status in one place. To make the package to track a new Node Operator, you must sign in with the new Node Operator's wallet and import the keystores."}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Make sure to import the correct keystores for each Node Operator. Importing the wrong keystores can result in penalties."})}),"\n",(0,r.jsx)(t.h3,{id:"import-keystores-directly-from-the-lido-csm",children:(0,r.jsx)(t.strong,{children:"Import keystores directly from the Lido CSM"})}),"\n",(0,r.jsxs)(t.p,{children:["You can import your keystores directly from the DAppNodePackage-lido-csm UI during the onboarding process or from the ",(0,r.jsx)(t.code,{children:"/keystores"})," section (comming soon). The keystores will be automatically tagged as Lido, and you will be able to use them to run validators in the Lido protocol. These keystores will be located in the web3signer package, for further editing or deleting them you must go to the web3signer UI."]}),"\n",(0,r.jsx)(t.p,{children:"Whenever there are 1 or more keystores that belongs to your Node Operator and are not imported you will be able to see the following message in the DAppNodePackage-lido-csm UI:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"lido-keystore-not-imported",src:o(7051).A+"",width:"1901",height:"648"})}),"\n",(0,r.jsx)(t.h3,{id:"infraestructure-monitoring",children:(0,r.jsx)(t.strong,{children:"Infraestructure monitoring"})}),"\n",(0,r.jsx)(t.p,{children:"You will be able to visualize the status of your infraestructure (EC - CC - Signer - MEV Boost) from the DAppNodePackage-lido-csm UI. This feature is useful to monitor the status of your infraestructure and ensure that everything is running smoothly."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"lido-infra",src:o(5140).A+"",width:"1901",height:"516"})}),"\n",(0,r.jsx)(t.h3,{id:"performance",children:(0,r.jsx)(t.strong,{children:"Performance"})}),"\n",(0,r.jsxs)(t.p,{children:["You can check the performance of the validators associated with your Node Operator by visiting the ",(0,r.jsx)(t.code,{children:"/performance"})," tab. This section provides attestation rates for your validators in a table and a comparison with the Lido threshold in a chart."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"lido-performance-tab",src:o(5942).A+"",width:"1901",height:"1076"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"All the data displayed in the performance tab comes from reports already distributed by the Lido CSM team. This means the information is not in real-time but rather backwards looking."})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"The provided data is sourced from the Lido CSM team. It represents the information used to determine whether your validators received rewards for previous frames."})}),"\n",(0,r.jsxs)(t.p,{children:["For more details, visit the ",(0,r.jsx)(t.a,{href:"/docs/user/staking/ethereum/lsd-pools/lido/performance",children:"Validators' Performance section"})," in this documentation."]}),"\n",(0,r.jsx)(t.h3,{id:"mev-boost-relays",children:(0,r.jsx)(t.strong,{children:"MEV Boost Relays"})}),"\n",(0,r.jsx)(t.p,{children:"Lido CSM only allows certain relays for your node configuration. You must use at least some of the vetted relays, but you should not include any relays that are not on the approved list."}),"\n",(0,r.jsx)(t.p,{children:"You can check the list of allowed relays in the smart contracts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Mainnet relays"}),": See ",(0,r.jsx)(t.code,{children:"get_relays"})," from ",(0,r.jsx)(t.a,{href:"https://etherscan.io/address/0xf95f069f9ad107938f6ba802a3da87892298610e#readContract#F4",children:"Mainnet"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Holesky relays"}),": See ",(0,r.jsx)(t.code,{children:"get_relays"})," from ",(0,r.jsx)(t.a,{href:"https://holesky.etherscan.io/address/0x2d86C5855581194a386941806E38cA119E50aEA3#readContract#F4",children:"Holesky"})]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"You must select at least one relay to ensure the node operator does not propose vanilla blocks. As a Lido Node Operator, it is your responsibility to ensure that your infrastructure is correctly using MEV Boost."})}),"\n",(0,r.jsxs)(t.p,{children:["The Lido CSM Dappnode package also includes infrastructure checks and warnings in the ",(0,r.jsx)(t.code,{children:"/dashboard"})," tab. Here, you can verify whether the ",(0,r.jsx)(t.code,{children:"MEV Boost"})," package is running, confirm that you are subscribed to at least one approved relay, and ensure that you are not subscribed to any unauthorized relays."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"lido-relays-warnings",src:o(9318).A+"",width:"1901",height:"824"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can select/unselect relays in the ",(0,r.jsx)(t.a,{href:"http://my.dappnode/stakers",children:"Stakers"})," tab in the Dappmanager or directly modify the relay URLs in the ",(0,r.jsx)(t.code,{children:"MEV Boost"})," package configuration tab."]})}),"\n",(0,r.jsxs)(t.p,{children:["For more details on MEV in CSM, visit the ",(0,r.jsx)(t.a,{href:"https://operatorportal.lido.fi/modules/community-staking-module",children:"Lido CSM Docs"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"testnet",children:"Testnet"}),"\n",(0,r.jsxs)(t.p,{children:["The Lido Community Staking Module is available on the Ethereum Mainnet. If you are new to staking, we recommend setting up a validator on the Testnet first to familiarize yourself with the process. The process is the same, the dappnode package for Lido CSM in testnet is ",(0,r.jsx)(t.strong,{children:"lido-csm-holesky.dnp.dappnode.eth"}),"."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"Refer to the Lido Community Staking Module documentation for more details:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://blog.lido.fi/lido-community-staking-an-overview/",children:"Lido Community Staking Overview"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://operatorportal.lido.fi/modules/community-staking-module",children:"Lido Community Staking Module"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5942:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/lido-csm-performance-tab-0afcdd62fc4ab528a30c9d0f4c36ce48.png"},9318:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/lido-csm-relays-warnings-2a679e60b83cbc94f3bf3fbc572d4899.png"},5140:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/lido-infra-a00927b2b6ee742595c755da57c36fc8.png"},7051:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/lido-keystore-not-imported-ba70b9757a3c033322075d7fa85858f0.png"},9526:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/lido-notification-ejector-e74dca0b48d81e4b543f11a305324477.png"},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var i=o(6540);const r={},n=i.createContext(r);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);