"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[5815],{718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(5893),a=n(1151);const s={},i="Obol Distributed Validator package for Dappnode",r={id:"user/staking/ethereum/dvt-technologies/obol-network",title:"Obol Distributed Validator package for Dappnode",description:"---",source:"@site/docs/user/staking/ethereum/dvt-technologies/obol-network.md",sourceDirName:"user/staking/ethereum/dvt-technologies",slug:"/user/staking/ethereum/dvt-technologies/obol-network",permalink:"/docs/user/staking/ethereum/dvt-technologies/obol-network",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/staking/ethereum/dvt-technologies/obol-network.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Stakehouse",permalink:"/docs/user/staking/ethereum/lsd-pools/stakehouse"},next:{title:"SSV Distributed Validator package for Dappnode",permalink:"/docs/user/staking/ethereum/dvt-technologies/ssv-network"}},d={},l=[{value:"<strong>Introduction</strong>",id:"introduction",level:3},{value:"<strong>Requirements</strong>",id:"requirements",level:3},{value:"<strong>First Steps</strong>",id:"first-steps",level:3},{value:"<strong>Cluster Configuration</strong>",id:"cluster-configuration",level:3},{value:"<strong>Distributed Key Generation (DKG) Event</strong>",id:"distributed-key-generation-dkg-event",level:3},{value:"Adding Validators to an Active Cluster",id:"adding-validators-to-an-active-cluster",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"obol-distributed-validator-package-for-dappnode",children:"Obol Distributed Validator package for Dappnode"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"introduction",children:(0,o.jsx)(t.strong,{children:"Introduction"})}),"\n",(0,o.jsx)(t.p,{children:"The Obol Network package for Dappnode aims to make it seamless for Dappnode users to integrate and benefit from Obol's Distributed Validator Technology (DVT)."}),"\n",(0,o.jsx)(t.p,{children:"A Distributed Validator is one or more logical Ethereum validators being operated across a number of nodes that are all online simultaneously and that all control a subset of the validators' private keys. Each of these nodes need to run an Execution client, a Consensus client, a Distributed Validator client, and a Validator client/Key Manager.\nThe distributed validator clients in these nodes come to consensus on what should be signed before constructing a signature for the validator that will be accepted by the wider Ethereum network. Dividing a validator across a group of nodes allows for fault tolerant validators that can remain online and validating despite a subset of its nodes experiencing an outage, contributing to a stronger and more resilient network."}),"\n",(0,o.jsxs)(t.p,{children:["The Obol Dappnode package is available for ",(0,o.jsx)(t.a,{href:"http://my.dappnode/installer/dnp/obol.dnp.dappnode.eth",children:"Ethereum Mainnet"})," and the ",(0,o.jsx)(t.a,{href:"http://my.dappnode/installer/dnp/holesky-obol.dnp.dappnode.eth",children:"Holesky Testnet"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"requirements",children:(0,o.jsx)(t.strong,{children:"Requirements"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["The first thing you'll need to do is set up a fully-synced node. This can be done through the Stakers Menu in Dappnode by selecting:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"1 Execution Client (Geth, Besu, Erigon or Nethermind)"}),"\n",(0,o.jsx)(t.li,{children:"1 Consensus Client (Prysm, Lighhouse, Lodestar, Teku or Nimbus)"}),"\n",(0,o.jsx)(t.li,{children:"MEV Boost (optional)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Install the Obol package from the DAppStore."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"first-steps",children:(0,o.jsx)(t.strong,{children:"First Steps"})}),"\n",(0,o.jsx)(t.admonition,{title:"It's important that you understand that the requirements of the DV node runner are not the same as a Solo Stakers'. This technology facilitates the creation of Distributed Validators between a group of independent people. This means you are placing significant trust in the participants you'll run this Distributed Validator Cluster with.",type:"tip",children:(0,o.jsx)(t.p,{children:"You need to ensure every operator in the Cluster is competent and trustworthy before sharing this responsibility. Negligence on behalf of others in your group can put you at risk, however as far as 66% of these nodes are synced the validators will keep performing their duties."})}),"\n",(0,o.jsxs)(t.p,{children:["Once all participants have synced nodes, you'll need to install the Obol Dappnode package. After Dappnodes are ready, the next steps will take place at  Obol's Distributed Validator Launchpad. There's a launchpad for ",(0,o.jsx)(t.a,{href:"https://launchpad.obol.org/",children:"Ethereum Mainnet"})," and another one for the ",(0,o.jsx)(t.a,{href:"https://holesky.launchpad.obol.org/",children:"Holesky Testnet"}),". Start by connecting your wallet and selecting the option that best fits your DV's distribution and setup."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ObolLaunchpad1",src:n(3921).Z+"",width:"1904",height:"1090"})}),"\n",(0,o.jsx)(t.h3,{id:"cluster-configuration",children:(0,o.jsx)(t.strong,{children:"Cluster Configuration"})}),"\n",(0,o.jsx)(t.p,{children:"For creating a new cluster with a group, all operators must have an operator's address, which will submit the necessary information to the launchpad. The first step in the configuration process will be to select the cluster size and to enter the operator's addresses."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ObolLaunchpad2",src:n(222).Z+"",width:"1904",height:"981"})}),"\n",(0,o.jsxs)(t.p,{children:["In this next step, you'll be required to enter your Charon client's ENR, which is a public key that will give your node a unique ID. This ENR can be obtained after installing the Obol Dappnode package ",(0,o.jsx)(t.a,{href:"http://my.dappnode/packages/my/holesky-obol.dnp.dappnode.eth/info",children:"under the Info tab"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"The Obol Dappnode package supports up to 5 ENRs. This means that you can participate in 5 different clusters with 5 different ENRs using the same package, however it's important to properly backup the package's database if the generated ENRs are committed to functional clusters."})}),"\n",(0,o.jsxs)(t.p,{children:["Next, you'll need to specify the amount of validator keys that this cluster will be generating and how these validators will be splitting the rewards. You can read more about the ",(0,o.jsx)(t.a,{href:"https://docs.obol.org/docs/sc/introducing-obol-splits",children:"Obol Splits contract"})," and the different options it offers in Obol's documentation."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ObolLaunchpad3",src:n(6912).Z+"",width:"1904",height:"1047"})}),"\n",(0,o.jsx)(t.p,{children:"The last step will require that you perform a signature from your operator's address to generate a cluster invite link. You'll need to share this invite link with the rest of the operators so that they can register their ENRs and set everything up for the Distributed Key Generation (DKG) event."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ObolLaunchpad4",src:n(9468).Z+"",width:"1604",height:"1478"})}),"\n",(0,o.jsx)(t.h3,{id:"distributed-key-generation-dkg-event",children:(0,o.jsx)(t.strong,{children:"Distributed Key Generation (DKG) Event"})}),"\n",(0,o.jsx)(t.p,{children:"After all operators have successfully submitted their ENRs, the Obol launchpad will generate a \"Definition File URL\" we'll need to load in our Obol Dappnode package's configuration to proceed with the DKG."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ObolLaunchpad5",src:n(7627).Z+"",width:"1904",height:"981"})}),"\n",(0,o.jsxs)(t.p,{children:["Copy the URL under the Dappnode tab in the Launchpad, go to your package's configuration section and enter it in the cluster number corresponding to the ENR you submitted in the launchpad. Make sure ",(0,o.jsx)(t.code,{children:"URL"}),' is selected under "Config Mode" and apply the configuration.']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ObolLaunchpad6",src:n(5158).Z+"",width:"1904",height:"1089"})}),"\n",(0,o.jsx)(t.p,{children:"After all operators have completed this step the DKG ceremony will start automatically and each of the operators' keystores will be stored in the Obol package's database."}),"\n",(0,o.jsx)(t.admonition,{type:"danger",children:(0,o.jsx)(t.p,{children:"Please make sure to create a backup of your Obol package. If you lose your private keys you won't be able to start the DV cluster successfully and may risk your validator deposit becoming unrecoverable. Ensure every operator has their backup secured before activating any validators."})}),"\n",(0,o.jsx)(t.h3,{id:"adding-validators-to-an-active-cluster",children:"Adding Validators to an Active Cluster"}),"\n",(0,o.jsxs)(t.p,{children:["After the DKG has succeeded and all of the operators have backed up their cluster's keys, it's time to move on to the validator's deposits. The launchpad will show you an option to submit a ",(0,o.jsx)(t.code,{children:"deposit_data.json"})," file."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ObolLaunchpad7",src:n(2882).Z+"",width:"1904",height:"1019"})}),"\n",(0,o.jsx)(t.p,{children:"You can get this file if you decompress your Obol package's backup and look for it inside the charon folder corresponding to the cluster number you intend to run. The launchpad will confirm that you have enough balance in your connected wallet to perform the validator deposit and make you go over final checks prior to signing the deposit."}),"\n",(0,o.jsxs)(t.p,{children:["Remember that if you have any questions, you can always drop by the ",(0,o.jsx)(t.a,{href:"https://discord.gg/dappnode",children:"Dappnode Discord server"})," to ask for community support."]})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3921:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obol-launchpad1-384f64d06e76a09d4ec520ee76cf7fdf.png"},222:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obol-launchpad2-ce96b4add6b5709c4d88acb38a73a1ee.png"},6912:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obol-launchpad3-c7f4df9b4d7b753d8d0e027b7a659bee.png"},9468:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obol-launchpad4-f9db7d75efeda34396609e991e2840b6.png"},7627:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obol-launchpad5-678df34a484ab38012fd657c9dcfaf7e.png"},5158:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obol-launchpad6-2048cc9b6c237bb96964596ee7bd32ec.png"},2882:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obol-launchpad7-11fdbb602d3e193d4a456ba9e0e05e1b.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(7294);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);