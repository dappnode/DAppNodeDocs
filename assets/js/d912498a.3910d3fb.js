"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[6209],{4775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=t(5893),r=t(1151);const s={},i="Ethereum repository",a={id:"user/repository/ethereum",title:"Ethereum repository",description:"Dappnode uses smart contracts to distribute the dappnode packages available in the Dappstore. The smart contracts are deployed in the Ethereum blockchain and the Dappnode client interacts with them to get the list of available packages and to download them. Your dappnode will need a connection to an Ethereum node in order to read the smart contracts and download the packages. There are two ways to establish this connection:",source:"@site/docs/user/repository/ethereum.md",sourceDirName:"user/repository",slug:"/user/repository/ethereum",permalink:"/docs/user/repository/ethereum",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/repository/ethereum.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Guide to Installing Bee Node on Dappnode",permalink:"/docs/user/packages/swarm"},next:{title:"IPFS repository",permalink:"/docs/user/repository/ipfs"}},d={},h=[{value:"Run your own Ethereum node",id:"run-your-own-ethereum-node",level:2},{value:"Use a remote Ethereum node",id:"use-a-remote-ethereum-node",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ethereum-repository",children:"Ethereum repository"}),"\n",(0,o.jsx)(n.p,{children:"Dappnode uses smart contracts to distribute the dappnode packages available in the Dappstore. The smart contracts are deployed in the Ethereum blockchain and the Dappnode client interacts with them to get the list of available packages and to download them. Your dappnode will need a connection to an Ethereum node in order to read the smart contracts and download the packages. There are two ways to establish this connection:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Full Node"}),": By running a Full Node, you host the Ethereum blockchain. This ensures maximum control and independence, but requires syncing and maintaining the blockchain's latest state."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Remote Node"}),": Using a Remote Node means relying on an external Ethereum node. It's less resource-intensive but demands trust in the node operator."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["To configure your dappnode Ethereum repository go to ",(0,o.jsx)(n.a,{href:"http://my.dappnode/repository/eth",children:"http://my.dappnode/repository/eth"})]})}),"\n",(0,o.jsx)(n.h2,{id:"run-your-own-ethereum-node",children:"Run your own Ethereum node"}),"\n",(0,o.jsx)(n.p,{children:"When choosing to run your own Ethereum node, you will need to select:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Execution client"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Consensus client"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Moreover, it is ",(0,o.jsx)(n.strong,{children:"highly recommended to enable"})," these additional options:"]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Use remote during syncing or errors"}),": If enabled, this will auto-switch from your Local node to the Dappnode Remote node under certain conditions. For instance, if your Ethereum node is syncing or if it's unavailable for some reason. Activating this option ensures uninterrupted access to the Dappnode smart contracts even if there's an issue with your Local node."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Use checkpointsync"}),": By enabling this, your consensus client will utilize a checkpoint to fast-track the syncing of the Ethereum blockchain, making the process much quicker."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Making changes here will also modify selections in the ",(0,o.jsx)(n.a,{href:"http://my.dappnode/stakers",children:"Stakers"})," tab."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"ethereum-remote-full",src:t(9930).Z+"",width:"2592",height:"1280"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Running your own Ethereum node requires a lot of resources. You will need a powerful machine with a lot of storage and a good internet connection. If you don't have a powerful machine, you can use a remote Ethereum node."})}),"\n",(0,o.jsx)(n.h2,{id:"use-a-remote-ethereum-node",children:"Use a remote Ethereum node"}),"\n",(0,o.jsx)(n.p,{children:"You can use a remote Ethereum node to connect to the Ethereum network. You will need to trust the node operator."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"ethereum-remote-node",src:t(2006).Z+"",width:"2592",height:"882"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["At the moment, we only support Dappnode official Ethereum node. We are working on a way to allow users to add their own remote Ethereum nodes RPC endpoints. See ",(0,o.jsx)(n.a,{href:"https://github.com/dappnode/DNP_DAPPMANAGER/issues/1245",children:"https://github.com/dappnode/DNP_DAPPMANAGER/issues/1245"})]})}),"\n",(0,o.jsx)("hr",{}),"\n",(0,o.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Why did my clients change in the Full Node Repository selection?"})}),(0,o.jsxs)(n.p,{children:["At the moment, Dappnode only supports running one Ethereum mainnet node. If you change your selection in the ",(0,o.jsx)(n.a,{href:"http://my.dappnode/stakers/ethereum",children:"Stakers"})," menu, it will also change in the ",(0,o.jsx)(n.a,{href:"http://my.dappnode/repository/eth",children:"Repository"})," menu."]})]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9930:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/repository-eth-full-f32d4f5e722bde24c2f4b871b8438c17.png"},2006:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/repository-eth-remote-d18929207921dfd4bb52055413a7998a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(7294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);