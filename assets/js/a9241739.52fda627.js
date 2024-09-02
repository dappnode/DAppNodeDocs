"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3295],{5137:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(5893),o=i(1151);const s={},r="Troubleshooting",a={id:"user/ethical-metrics/troubleshooting",title:"Troubleshooting",description:"Experiencing trouble when setting your notifications up? Check this FAQ. If your issue isn't listed, please pay us a visit in the Dappnode Discord and we'll be happy to assist you!",source:"@site/docs/user/ethical-metrics/troubleshooting.md",sourceDirName:"user/ethical-metrics",slug:"/user/ethical-metrics/troubleshooting",permalink:"/docs/user/ethical-metrics/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/tree/master/docs/user/ethical-metrics/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Metrics Collected by Ethical Metrics",permalink:"/docs/user/ethical-metrics/metrics"},next:{title:"What is Dappnode Cloud?",permalink:"/docs/user/dappnode-cloud/overview"}},c={},l=[];function d(e){const t={a:"a",h1:"h1",p:"p",...(0,o.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(t.p,{children:["Experiencing trouble when setting your notifications up? Check this FAQ. If your issue isn't listed, please pay us a visit in the ",(0,n.jsx)(t.a,{href:"https://discord.gg/dappnode",children:"Dappnode Discord"})," and we'll be happy to assist you!"]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"How can I make sure my Dappnode is registered?"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)("b",{children:"Email:"})," Upon registering, an email will be sent to your configured email address. If you don't receive this email, please check your spam folder. ",(0,n.jsx)("br",{})]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)("b",{children:"Telegram:"}),' Once your bot has been set up, you can press the "Send Test Notification" button to see if everything is working as expected.']})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:'How can I test a "Dappnode down" notification?'})}),(0,n.jsx)(t.p,{children:'There are various ways to test a "Dappnode down" notification. The easiest way is to stop your Dappnode temporarily, but you can also test it by stopping the "Prometheus" service of your Ethical Metrics package. After an hour, you should receive a "Dappnode down" notification in your Email and/or Telegram.'})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"How can I unregister from the Ethical Metrics monitoring system?"})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:" 1. Using the Dappnode Interface:"})," From the active Dappnode, simply navigate to ",(0,n.jsx)("a",{href:"http://my.dappnode/system/notifications",children:"System > Notifications"})," and toggle off ",(0,n.jsx)("b",{children:"Ethical Metrics"}),". This will stop all notifications and halt metric collection from your Dappnode. As long as Ethical Metrics notifications are enabled in the Dappnode UI, your device remains registered in our monitoring system."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2. For Inactive Dappnodes:"})," If your Dappnode is no longer accessible, locate the ",(0,n.jsx)("b",{children:"unregister link"})," in the welcome email you received upon registration. Keep in mind that using this method won't employ our IP hiding measures, but you can enhance security using tools like a VPN. Please keep in mind that if your Dappnode is still up and running with Ethical Metrics notifications turned on, it'll register again by itself."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"3. Manual Unregistration:"})," Lost the welcome email? You can also unregister by inputting the following URL into your browser: ",(0,n.jsxs)("code",{children:[(0,n.jsx)(t.a,{href:"https://ethical-metrics.dappnode.io/unregister-from-email/?instance=",children:"https://ethical-metrics.dappnode.io/unregister-from-email/?instance="}),(0,n.jsx)("i",{children:"YOUR_INSTANCE"}),".onion%3A9090"]}),". Make sure to replace ",(0,n.jsx)("i",{children:"YOUR_INSTANCE"}),' with the unique identifier for your Dappnode, excluding ".onion:9090", which is already included in the provided URL.']})]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(7294);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);