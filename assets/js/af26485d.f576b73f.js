"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[2217],{9316:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=o(5893),t=o(1151);const i={},r="IPFS repository",a={id:"user/repository/ipfs",title:"IPFS repository",description:"Dappnode leverages IPFS for distributing packages available in the Dappstore. To download these packages, your Dappnode requires a connection to an IPFS node. When it comes to connecting to the IPFS network, you have two primary choices:",source:"@site/docs/user/repository/ipfs.md",sourceDirName:"user/repository",slug:"/user/repository/ipfs",permalink:"/docs/user/repository/ipfs",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/repository/ipfs.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Ethereum repository",permalink:"/docs/user/repository/ethereum"},next:{title:"Installation Overview",permalink:"/docs/user/install/overview"}},d={},c=[{value:"Run your own IPFS node",id:"run-your-own-ipfs-node",level:2},{value:"Use a remote IPFS node",id:"use-a-remote-ipfs-node",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ipfs-repository",children:"IPFS repository"}),"\n",(0,s.jsx)(n.p,{children:"Dappnode leverages IPFS for distributing packages available in the Dappstore. To download these packages, your Dappnode requires a connection to an IPFS node. When it comes to connecting to the IPFS network, you have two primary choices:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Run Your Own IPFS Node"}),": By opting for this, you maintain full control, ensuring that you directly access the distributed packages without intermediaries. However, it might require some disk space."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use a Remote Node"}),": This is a convenient option, but it comes with the caveat of needing to trust the remote node operator. It is really useful in case your own IPFS node becomes unreliable or unavailable."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["To configure your dappnode IPFS repository go to ",(0,s.jsx)(n.a,{href:"http://my.dappnode/repository/ipfs",children:"http://my.dappnode/repository/ipfs"})]})}),"\n",(0,s.jsx)(n.h2,{id:"run-your-own-ipfs-node",children:"Run your own IPFS node"}),"\n",(0,s.jsxs)(n.p,{children:["You can run your own IPFS node to connect to the IPFS network. This is the recommended option for those users who want to have full control over their dappnode. Dappnode comes with an IPFS node preinstalled and configured. You can access the ",(0,s.jsx)(n.a,{href:"http://ipfs.dappnode:5001/webui",children:"IPFS Web UI"})," while connected to your Dappnode."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ipfs-remote-local",src:o(9796).Z+"",width:"2562",height:"1068"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Running your own IPFS node may affect your internet connection. If you don't want to run your own IPFS node, you can use a remote IPFS node. Consider stopping your IPFS node if you are not using it at ",(0,s.jsx)(n.a,{href:"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info",children:"IPFS Package"})]})}),"\n",(0,s.jsx)(n.h2,{id:"use-a-remote-ipfs-node",children:"Use a remote IPFS node"}),"\n",(0,s.jsxs)(n.p,{children:["You can use a remote IPFS node gateway to connect to the IPFS network. You will need to trust the node operator. Dappnode provides an ",(0,s.jsx)(n.a,{href:"https://gateway.ipfs.dappnode.io",children:"Official IPFS gateway"})," by default, but you can choose any other IPFS gateway."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ipfs-remote-node",src:o(8493).Z+"",width:"2562",height:"1068"})}),"\n",(0,s.jsxs)(n.admonition,{title:"IPFS gateways and security",type:"note",children:[(0,s.jsxs)(n.p,{children:["Connecting to IPFS remote gateways could entail security risks. For example, the gateway could attempt to serve malicious content to the user. We mitigate this risk by verifying the content downloaded with ",(0,s.jsx)(n.a,{href:"https://docs.ipfs.io/concepts/content-addressing/",children:"CID technology"}),"."]}),(0,s.jsxs)(n.p,{children:["If the Dappnode IPFS gateway is not available (we make no uptime guarantees and we offer it on a best-effort basis) the user can set another IPFS gateway in the input field as last resort. Check out all the ",(0,s.jsx)(n.a,{href:"https://ipfs.github.io/public-gateway-checker/",children:"IPFS gateways available"})]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"I can't see the logos of the packages in the Dappstore/Stakers tab. Why?"})}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.p,{children:"This might be related to an issue with IPFS. Try the following solutions:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IPFS Mode"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.a,{href:"http://my.dappnode/repository/ipfs",children:"repository"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Toggle between ",(0,s.jsx)(n.code,{children:"local"})," and ",(0,s.jsx)(n.code,{children:"remote"})," IPFS modes to see which one works."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IPFS Package Status"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If your IPFS mode is set to ",(0,s.jsx)(n.code,{children:"local"}),", ensure that the IPFS package is running."]}),"\n",(0,s.jsxs)(n.li,{children:["Visit ",(0,s.jsx)(n.a,{href:"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info",children:"IPFS Package"}),' to verify its status and click on "Start" if it is stopped.']}),"\n",(0,s.jsx)(n.li,{children:"If it's restarting, consider updating the IPFS package to its latest version. Post update, remove its volumes to address any potential database migration issues."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Gateway Validity"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For ",(0,s.jsx)(n.code,{children:"remote"})," IPFS mode, make sure the gateway URL in the ",(0,s.jsx)(n.a,{href:"http://my.dappnode/repository/ipfs",children:"repository"})," is correct."]}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"I'm using local IPFS and encountering issues downloading packages. What should I do?"})}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.p,{children:"This could arise from various factors:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Internet Connection"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Your connection might be unstable. Consider switching your IPFS node mode to ",(0,s.jsx)(n.code,{children:"lowpower"})," by accessing ",(0,s.jsx)(n.a,{href:"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/config",children:"IPFS config"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Disk Space"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Your local IPFS node might be out of storage."}),"\n",(0,s.jsxs)(n.li,{children:['Clear the storage by opting for "Remove volumes" at ',(0,s.jsx)(n.a,{href:"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info",children:"IPFS package info"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dappnode Official Gateway as Peer"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure that the Dappnode Official Gateway is added as a peer to your local IPFS."}),"\n",(0,s.jsxs)(n.li,{children:["You can add it directly by clicking ",(0,s.jsx)(n.a,{href:"http://my.dappnode/system/add-ipfs-peer/%2Fdns4%2Fipfs.dappnode.io%2Ftcp%2F4001%2Fipfs%2FQmfB6dT5zxUq1BXiXisgcZKYkvjywdDYBK5keRaqDKH633",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tip"}),": If these solutions don't resolve the issue, switch to the ",(0,s.jsx)(n.code,{children:"remote IPFS mode"})," at ",(0,s.jsx)(n.a,{href:"http://my.dappnode/repository/ipfs",children:"IPFS repository"}),"."]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9796:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/repository-ipfs-local-da32632842c89e3f1c4448b01ad12284.png"},8493:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/repository-ipfs-remote-7292c798454f1b0a934e647dacb1b055.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var s=o(7294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);