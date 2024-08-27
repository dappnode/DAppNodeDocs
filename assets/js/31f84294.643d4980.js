"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3995],{9742:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var t=n(5893),i=n(1151);const o={},a="Gnosis Chain Incentive Program",d={id:"user/staking/gnosis-chain/incentive-program",title:"Gnosis Chain Incentive Program",description:"Gnosis Chain is a Proof of Stake blockchain that uses the GNO token for staking. The Gnosis incentive program rewards validators for their work in the network. It is designed to incentivize validators to participate and secure the network.",source:"@site/docs/user/staking/gnosis-chain/incentive-program.md",sourceDirName:"user/staking/gnosis-chain",slug:"/user/staking/gnosis-chain/incentive-program",permalink:"/docs/user/staking/gnosis-chain/incentive-program",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/staking/gnosis-chain/incentive-program.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Gnosis Chain",permalink:"/docs/user/staking/gnosis-chain/solo"},next:{title:"LUKSO",permalink:"/docs/user/staking/lukso/solo"}},r={},h=[{value:"So you got your Dappnode and want to know how to get your Gnosis Chain validators?",id:"so-you-got-your-dappnode-and-want-to-know-how-to-get-your-gnosis-chain-validators",level:2},{value:"1. Set Up Your Gnosis Chain Node",id:"1-set-up-your-gnosis-chain-node",level:2},{value:"2. Get safe address",id:"2-get-safe-address",level:2},{value:"3. Generate and import your validator keys",id:"3-generate-and-import-your-validator-keys",level:2},{value:"4. Submit deposit data",id:"4-submit-deposit-data",level:2},{value:"5. Start validating",id:"5-start-validating",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"gnosis-chain-incentive-program",children:"Gnosis Chain Incentive Program"}),"\n",(0,t.jsx)(s.p,{children:"Gnosis Chain is a Proof of Stake blockchain that uses the GNO token for staking. The Gnosis incentive program rewards validators for their work in the network. It is designed to incentivize validators to participate and secure the network."}),"\n",(0,t.jsx)(s.h2,{id:"so-you-got-your-dappnode-and-want-to-know-how-to-get-your-gnosis-chain-validators",children:"So you got your Dappnode and want to know how to get your Gnosis Chain validators?"}),"\n",(0,t.jsx)(s.p,{children:"Here are the prerequisites:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["You must have purchased a ",(0,t.jsx)(s.a,{href:"https://dappnode.com/collections/frontpage/products/gnosis-chain-home",children:"Dappnode Home - Gnosis Chain Edition"})]}),"\n",(0,t.jsxs)(s.li,{children:["You must have given us an Ethereum address you control for us to whitelist during that purchase. If you didn\u2019t, please send an email to ",(0,t.jsx)(s.a,{href:"mailto:support@nodlers.com",children:"support@nodlers.com"})," with your order number and your address"]}),"\n",(0,t.jsx)(s.li,{children:"You have set up your dappnode so you can use it"}),"\n",(0,t.jsx)(s.li,{children:"You can do step 1 immediately after receiving your dappnode, steps 2 and 3 after receiving a first email from dappnode, and finally 4 when"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"1-set-up-your-gnosis-chain-node",children:"1. Set Up Your Gnosis Chain Node"}),"\n",(0,t.jsxs)(s.p,{children:["Follow ",(0,t.jsx)(s.a,{href:"https://docs.dappnode.io/docs/user/staking/gnosis-chain/solo#1-install-the-necessary-packages-on-dappnode",children:"these instructions"})," to setup your Gnosis Chain node on Dappnode."]}),"\n",(0,t.jsx)(s.h2,{id:"2-get-safe-address",children:"2. Get safe address"}),"\n",(0,t.jsxs)(s.p,{children:["To participate in the Gnosis incentive program, you need to have a safe address provided by the Dappnode team. You should have received an email with the safe address. This email may not be send just after the order is done, it can take a few days. If you don't have it, please send an email to ",(0,t.jsx)(s.a,{href:"mailto:support@nodlers.com",children:"support@nodlers.com"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The safe address will be controlled by both the Dappnode team and you. It will have a threshold of 2, meaning that both parties need to sign a transaction to execute it. The address will have an expiration time of 1 year."}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["You can also use the ",(0,t.jsx)(s.a,{href:"https://deposit.gnosischain.com/",children:"Gnosis deposit UI"})," (Dappnode section) to visualize the safe address (withdrawal address) that must be used to generate the keys in step 3.\nYou must connect the wallet you specified while purchasing the Dappnode to the Gnosis deposit UI to see the safe address."]})}),"\n",(0,t.jsx)(s.h2,{id:"3-generate-and-import-your-validator-keys",children:"3. Generate and import your validator keys"}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:["Before generating the keys, make sure you have received an email from Dappnode letting you know which one should be your ",(0,t.jsx)(s.strong,{children:"withdrawal address"})," that these keys need to have. If you don't have it, please contact the Dappnode team."]})}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"It is mandatory that you specify 3 as the number of validators when generating the keys. If you have participated in the Dappcon program, you should select 4 instead."})}),"\n",(0,t.jsxs)(s.p,{children:["To generate the validator keys, follow the step detailed ",(0,t.jsx)(s.a,{href:"https://docs.dappnode.io/docs/user/staking/gnosis-chain/solo#2-creating-validator-keys-for-gnosis-chain",children:"here"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"4-submit-deposit-data",children:"4. Submit deposit data"}),"\n",(0,t.jsxs)(s.p,{children:["Once the validator keys are generated, you need to submit the deposit data to the ",(0,t.jsx)(s.a,{href:"https://deposit.gnosischain.com/",children:"Gnosis deposit UI"})," (dappnode section)."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Navigate to: ",(0,t.jsx)(s.a,{href:"https://deposit.gnosischain.com/",children:"https://deposit.gnosischain.com/"}),"\n",(0,t.jsx)(s.img,{alt:"Gnosis Deposit UI - Connect wallet",src:n(7458).Z+"",width:"1920",height:"959"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Connect ",(0,t.jsx)(s.strong,{children:"the wallet that you gave when filling the order for your DAppNode."})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:['Move to the "Dappnode" tab\n',(0,t.jsx)(s.img,{alt:"Gnosis Deposit UI - Upload Deposit",src:n(3273).Z+"",width:"1920",height:"959"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Upload the ",(0,t.jsx)(s.code,{children:"deposit_data*.json"})," you generated with the key generator tool in step 2\n",(0,t.jsx)(s.img,{alt:"Gnosis Deposit UI - Claim Deposit",src:n(6867).Z+"",width:"1920",height:"959"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.code,{children:"claim"})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["In case you need some xDai for transaction fees you can get some from this ",(0,t.jsx)(s.a,{href:"https://faucet.gnosischain.com/",children:"faucet"}),"."]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Gnosis Deposit UI - Submit Deposit",src:n(9077).Z+"",width:"1920",height:"959"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Dappnode Team will trigger the actual GNO deposits to the validator keys all the incentive program recipients submit ",(0,t.jsx)(s.strong,{children:"at least once a week"}),". You will receive a final email when this happens!"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"The execution of the deposit can take a few days. Once dappnode executes the deposit data for you, you should receive an email letting you know that the deposit has been submitted and your validators are ready."})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Gnosis Deposit UI - Deposit Executed",src:n(7133).Z+"",width:"1920",height:"959"})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["If you encounter an issue claiming your incentive program GNO validators, such as an error about your address not being whitelisted please visit the ",(0,t.jsx)(s.a,{href:"https://discord.gg/dappnode",children:"DAppNode Discord Server"})," and open a support ticket in this channel. (#1-sales-support-ticket)"]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"5-start-validating",children:"5. Start validating"}),"\n",(0,t.jsx)(s.p,{children:"Once the deposit is submitted, you can start validating on the Gnosis Chain network. Remember to upload your keystores to the Web3Signer Gnosis package that you installed during step 1."})]})}function l(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6867:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/gnosis-deposit-ui-claim-deposit-8270b3dcd297bab60c6003813c6c52ae.png"},7458:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/gnosis-deposit-ui-connect-wallet-7f55fa7b5429fc60f9cf81a130841875.png"},7133:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/gnosis-deposit-ui-deposit-executed-78daa713b036a8a46f512a1cda1d186f.png"},9077:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/gnosis-deposit-ui-deposit-submitted-e715e6c3f40dee64034d2445902261d3.png"},3273:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/gnosis-deposit-ui-upload-deposit-05733a1cdda007d8b01a92df65165e9d.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>a});var t=n(7294);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);