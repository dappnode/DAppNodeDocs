"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[8012],{7945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"user/ethical-metrics/overview","title":"Ethical Metrics","description":"Ethical Metrics requires the Dappnode Monitoring Service (DMS) and Dappnode Exporter as dependencies.","source":"@site/docs/user/ethical-metrics/overview.md","sourceDirName":"user/ethical-metrics","slug":"/user/ethical-metrics/overview","permalink":"/docs/user/ethical-metrics/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/ethical-metrics/overview.md","tags":[],"version":"current","frontMatter":{},"sidebar":"userSidebar","previous":{"title":"Dappnode commands","permalink":"/docs/user/install/dappnode-commands"},"next":{"title":"Setting up Notifications","permalink":"/docs/user/ethical-metrics/setup"}}');var i=n(4848),s=n(8453);const r={},a="Ethical Metrics",c={},d=[{value:"Introduction",id:"introduction",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ethical-metrics",children:"Ethical Metrics"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Ethical Metrics requires the ",(0,i.jsx)(t.a,{href:"/docs/user/packages/dms",children:"Dappnode Monitoring Service (DMS)"})," and Dappnode Exporter as dependencies."]})}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["When it comes to monitoring your Dappnode, the ",(0,i.jsx)(t.a,{href:"/docs/user/packages/dms",children:"Dappnode Monitoring Service (DMS)"})," offers valuable insights into the health and performance of your packages and system. Yet, there's a key thing that DMS can't do: ",(0,i.jsx)(t.strong,{children:"DMS can't notify you when your Dappnode goes offline"}),". This limitation arises because DMS operates from within your Dappnode, so it can't help when it experiences downtime."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Ethical Metrics solves this DMS limitation."})," It is a service that allows for external monitoring of your Dappnode ",(0,i.jsx)(t.strong,{children:"without leaking any identifying information"}),". This way, you will be able to receive notifications when your Dappnode goes offline."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Ethical Metrics comes from the request of the users to have useful alerts and the strict compromise of Dappnode of preserving privacy for its users."})}),"\n",(0,i.jsxs)(t.p,{children:["So, how did we manage to overcome the difficulty of monitoring your Dappnode without compromising your privacy? In order to keep your privacy intact, ",(0,i.jsx)(t.strong,{children:"all the communication between your Dappnode and our monitoring servers is done through the TOR network"}),". The TOR network enables anonymous communication by directing Internet traffic through a free, worldwide, volunteered overlay network that consists of more than seven thousand relays."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"In a nutshell, your Dappnode signals that it's alive via a private channel so we don't know where it comes from. If it stops sending this signal, we can assume that it's offline and send an alert to the Email or Telegram associated with that particular Dappnode. This way, your Dappnode's IP address remains hidden and nobody (not even us) can identify which metrics belong to whom."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"To put it simply:"})," Ethical Metrics enables us to monitor a group of Dappnode metrics for you. In the event that your Dappnode goes offline, Ethical Metrics can send notifications to an email address or Telegram handle that you provide during configuration. All this communication occurs via the TOR network, which guarantees the protection of your Dappnode's IP address and the confidentiality of your metrics."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"setup-5",src:n(265).A+"",width:"1872",height:"1001"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Ethical metrics is one of our newest packages and it is still under constant improvement. Please come back to this page to check for updates."})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},265:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ethical-metrics-5c8cad2d72b6475a0294c8f482a49b3a.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);