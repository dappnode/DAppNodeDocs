"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3078],{4702:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"user/getting-started/setup","title":"Setup","description":"Setting up Dappnode is a straightforward process. This guide will walk you through configuring your Dappnode for the first time.","source":"@site/docs/user/getting-started/setup.md","sourceDirName":"user/getting-started","slug":"/user/getting-started/setup","permalink":"/docs/user/getting-started/setup","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/getting-started/setup.md","tags":[],"version":"current","frontMatter":{},"sidebar":"userSidebar","previous":{"title":"Register","permalink":"/docs/user/getting-started/register"},"next":{"title":"Next steps","permalink":"/docs/user/getting-started/next-steps"}}');var o=t(4848),i=t(8453);const a={},r="Setup",d={},c=[{value:"Choose Repository Source",id:"choose-repository-source",level:2},{value:"Enable/Disable System Auto Updates",id:"enabledisable-system-auto-updates",level:2},{value:"Enable system notifications",id:"enable-system-notifications",level:2},{value:"Change Host User Password",id:"change-host-user-password",level:2},{value:"All Set!",id:"all-set",level:2}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"setup",children:"Setup"})}),"\n",(0,o.jsx)(s.p,{children:"Setting up Dappnode is a straightforward process. This guide will walk you through configuring your Dappnode for the first time."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"setup-1",src:t(2226).A+"",width:"2388",height:"638"})}),"\n",(0,o.jsx)(s.h2,{id:"choose-repository-source",children:"Choose Repository Source"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"setup-2",src:t(1961).A+"",width:"2422",height:"1358"})}),"\n",(0,o.jsx)(s.p,{children:"Before you dive in, choose the source from which Dappnode retrieves its data:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Remote Node"}),": Connect your Dappnode to an external Ethereum node. This option is lightweight, as you won't need to host the blockchain data on your machine."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Full Node"}),": Have your Dappnode host the complete Ethereum blockchain. This ensures maximum decentralization and independence, but it requires more storage and bandwidth."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.admonition,{title:"Why is this important?",type:"info",children:[(0,o.jsx)(s.p,{children:"Dappnode uses smart contracts to publish the dapps that are accessible in the dappstore. For this reason, Dappnode needs access to an Ethereum node to read the contents of said smart contract. Choosing between a remote and a full node directly impacts how decentralized your setup is."}),(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Decentralization Benefits"}),": By relying less on third-party services, you enhance security, reduce points of failure, and support the Ethereum network's robustness, but it might not work for you if you have limited storage or bandwidth."]})]}),"\n",(0,o.jsx)(s.h2,{id:"enabledisable-system-auto-updates",children:"Enable/Disable System Auto Updates"}),"\n",(0,o.jsx)(s.p,{children:"Dappnode comes with an auto-update feature. This means it will automatically update itself with new releases, ensuring you always have the latest and most secure version. Activate auto-updates to lessen maintenance and better guard against vulnerabilities."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"setup-3",src:t(5712).A+"",width:"2422",height:"948"})}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["We ",(0,o.jsx)(s.strong,{children:"strongly"})," recommend activating auto-updates to ensure your Dappnode is always up to date with the latest versions."]})}),"\n",(0,o.jsx)(s.h2,{id:"enable-system-notifications",children:"Enable system notifications"}),"\n",(0,o.jsx)(s.p,{children:"Dappnode can send you notifications about important events, such as your dappnode being offline or high CPU usage. This is a great way to stay on top of your Dappnode's health and performance."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"setup-4",src:t(7935).A+"",width:"1926",height:"886"})}),"\n",(0,o.jsx)(s.h2,{id:"change-host-user-password",children:"Change Host User Password"}),"\n",(0,o.jsxs)(s.p,{children:["Beneath the hood, Dappnode operates on a Linux framework, protected by a password, which will be needed to access your ",(0,o.jsx)(s.a,{href:"/docs/user/access-your-dappnode/terminal",children:"Dappnode's terminal"})," To amplify your Dappnode's defense:"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Change"})," the ",(0,o.jsx)(s.strong,{children:"default Linux"})," machine ",(0,o.jsx)(s.strong,{children:"password"})," for user ",(0,o.jsx)(s.code,{children:"dappnode"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Choose a ",(0,o.jsx)(s.strong,{children:"strong, unique password"})," that's not easily guessable."]}),"\n",(0,o.jsxs)(s.li,{children:["Remember to ",(0,o.jsx)(s.strong,{children:"store this password in a secure location"}),". If you lose access to this password, you could be locked out of your Dappnode."]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"caution",children:(0,o.jsx)(s.p,{children:"Always save and backup your password. This is crucial for ensuring uninterrupted access to your Dappnode."})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"setup-4",src:t(8918).A+"",width:"2422",height:"1180"})}),"\n",(0,o.jsx)(s.h2,{id:"all-set",children:"All Set!"}),"\n",(0,o.jsx)(s.p,{children:"Congratulations! Your Dappnode is now configured and ready for use. Dive into the world of decentralized applications and enjoy the self-hosted, decentralized internet experience."}),"\n",(0,o.jsx)(s.p,{children:"With these steps, your Dappnode should be up and running efficiently. Always refer to the official Dappnode documentation or community for any further queries or support."}),"\n",(0,o.jsx)(s.admonition,{title:"Keep your Dappnode up to date",type:"info",children:(0,o.jsx)(s.p,{children:"Remember to regularly check for updates and best practices to ensure your Dappnode stays secure and efficient."})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"setup-5",src:t(125).A+"",width:"2422",height:"804"})})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},2226:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/setup-1-20f4539a87a606b2ab7be68a06080912.png"},1961:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/setup-2-a5a1f0456cdbb9e861104376a30d3047.png"},5712:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/setup-3-6b0500114fc971ac2b4e23aee5e2a6a7.png"},7935:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/setup-4-853e6ca7d1d4f5dea03695e39223e572.png"},8918:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/setup-5-7ef2fb5a75d77003c5192bafbd656ff8.png"},125:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/setup-6-8ca9deab19513fdc4b62aa78b4a5297c.png"},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(6540);const o={},i=n.createContext(o);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);