"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[1097],{3294:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"user/videos-and-tutorials/guides/connect-node","title":"How to Connect to My Blockchain Node","description":"When you\'ve set up your Dappnode, you might want to connect various applications to your blockchain node. This process can vary depending on which blockchain you\'ve selected. Below is a guide on how to do this:","source":"@site/docs/user/videos-and-tutorials/guides/connect-node.md","sourceDirName":"user/videos-and-tutorials/guides","slug":"/user/videos-and-tutorials/guides/connect-node","permalink":"/docs/user/videos-and-tutorials/guides/connect-node","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/videos-and-tutorials/guides/connect-node.md","tags":[],"version":"current","frontMatter":{},"sidebar":"userSidebar","previous":{"title":"Crash Course","permalink":"/docs/user/videos-and-tutorials/crash-course"},"next":{"title":"Migrating from Avado","permalink":"/docs/user/videos-and-tutorials/guides/migrating-from-avado"}}');var s=o(4848),i=o(8453);const r={},d="How to Connect to My Blockchain Node",c={},a=[{value:"Ethereum Mainnet Node",id:"ethereum-mainnet-node",level:2},{value:"Other Nodes in Stakers tab",id:"other-nodes-in-stakers-tab",level:2},{value:"Connecting to Metamask",id:"connecting-to-metamask",level:2},{value:"Important Reminders",id:"important-reminders",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"how-to-connect-to-my-blockchain-node",children:"How to Connect to My Blockchain Node"})}),"\n",(0,s.jsx)(n.p,{children:"When you've set up your Dappnode, you might want to connect various applications to your blockchain node. This process can vary depending on which blockchain you've selected. Below is a guide on how to do this:"}),"\n",(0,s.jsx)(n.h2,{id:"ethereum-mainnet-node",children:"Ethereum Mainnet Node"}),"\n",(0,s.jsxs)(n.p,{children:["If you've selected an Ethereum mainnet node in ",(0,s.jsx)(n.strong,{children:"Repository > Ethereum"})," or ",(0,s.jsx)(n.strong,{children:"Stakers > Ethereum"}),", here's how to connect:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The Execution client you have selected will expose its RPC at:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://fullnode.dappnode:8545\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Do note that this domain is only accessible when you're connected to Dappnode either via WiFi or VPN."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you intend to use the RPC externally (i.e., without needing to connect to Dappnode), you'll need to refer to our tutorial on How to expose an RPC externally."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"other-nodes-in-stakers-tab",children:"Other Nodes in Stakers tab"}),"\n",(0,s.jsx)(n.p,{children:"For blockchain nodes other than Ethereum mainnet:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Identify the specific network for your node, e.g., ",(0,s.jsx)(n.code,{children:"lukso"}),", ",(0,s.jsx)(n.code,{children:"gnosis"}),", or ",(0,s.jsx)(n.code,{children:"prater"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The endpoint for these nodes will be:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://<network>.fullnode.dappnode:8545\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"<network>"})," with your specific blockchain network name."]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Ensure that the node is correctly set in ",(0,s.jsxs)(n.strong,{children:["Stakers > ",(0,s.jsx)(n.code,{children:"<network>"})]}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"connecting-to-metamask",children:"Connecting to Metamask"}),"\n",(0,s.jsx)(n.p,{children:"To connect your node to Metamask:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You will need to provide the Chain ID of the blockchain you're connecting to."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Chain IDs for various blockchains can be found at ",(0,s.jsx)(n.a,{href:"https://chainlist.org/",children:"Chainlist"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In Metamask, navigate to ",(0,s.jsx)(n.strong,{children:"Settings > Networks > Add Network"}),". Input the RPC URL (",(0,s.jsx)(n.code,{children:"http://<network>.fullnode.dappnode:8545"}),") and the Chain ID from Chainlist."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"important-reminders",children:"Important Reminders"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Your node needs to be fully synced to function correctly. This ensures that the latest state of the blockchain and its transactions are available for your applications."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Always ensure the safety and privacy of your Dappnode by not unnecessarily exposing ports or services that might be targets for malicious actors."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var t=o(6540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);