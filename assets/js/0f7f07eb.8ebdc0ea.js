"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7675],{4027:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var r=s(5893),o=s(1151);const a={},i="Terminal Access to Dappnode",t={id:"user/access-your-dappnode/terminal",title:"Terminal Access to Dappnode",description:"Accessing the terminal of your Dappnode, often referred to as the command-line interface (CLI), provides deep control and management capabilities. However, this method is considered advanced and requires familiarity with command line interactions. Incorrect or misguided commands can lead to unintended changes or potential system damage.",source:"@site/docs/user/access-your-dappnode/terminal.md",sourceDirName:"user/access-your-dappnode",slug:"/user/access-your-dappnode/terminal",permalink:"/docs/user/access-your-dappnode/terminal",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/tree/master/docs/user/access-your-dappnode/terminal.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"OpenVPN Access to Dappnode",permalink:"/docs/user/access-your-dappnode/vpn/openvpn"},next:{title:"Local Proxy Access to Dappnode",permalink:"/docs/user/access-your-dappnode/local"}},c={},d=[{value:"SSH Access",id:"ssh-access",level:2},{value:"External SSH Access",id:"external-ssh-access",level:3},{value:"Physical Terminal Access",id:"physical-terminal-access",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"terminal-access-to-dappnode",children:"Terminal Access to Dappnode"}),"\n",(0,r.jsx)(n.p,{children:"Accessing the terminal of your Dappnode, often referred to as the command-line interface (CLI), provides deep control and management capabilities. However, this method is considered advanced and requires familiarity with command line interactions. Incorrect or misguided commands can lead to unintended changes or potential system damage."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Proceed with caution when using terminal access. Always understand the implications of commands and configurations before executing them."})}),"\n",(0,r.jsx)(n.h2,{id:"ssh-access",children:"SSH Access"}),"\n",(0,r.jsx)(n.p,{children:"SSH (Secure Shell) allows secure remote access to systems."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ensure your device is connected to the same network as the Dappnode."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open a terminal or command prompt on your device."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh dappnode@<DAPPNODE_LOCAL_IP_ADDRESS>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<DAPPNODE_LOCAL_IP_ADDRESS>"})," with your Dappnode's actual IP address."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When prompted, use the following credentials:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Username:"})," dappnode"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Password:"})," dappnode.s0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:['During the onboarding process in Dappmanager, you are prompted to change the default host password for the "dappnode" user. If you have completed this step, the default password ',(0,r.jsx)(n.code,{children:"dappnode.s0"})," might no longer work. Always use the password you set during onboarding."]})}),"\n",(0,r.jsx)(n.h3,{id:"external-ssh-access",children:"External SSH Access"}),"\n",(0,r.jsx)(n.p,{children:"For accessing Dappnode from outside your local network:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configure port forwarding on your router. Direct external SSH requests (typically port 22) to your Dappnode's internal IP address."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For added security, use a strong password or implement SSH keys."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To SSH, use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh dappnode@<EXTERNAL_IP_ADDRESS>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Exposing SSH to the internet can be risky. Ensure you adopt robust security practices and are aware of potential vulnerabilities."})}),"\n",(0,r.jsx)(n.h2,{id:"physical-terminal-access",children:"Physical Terminal Access"}),"\n",(0,r.jsx)(n.p,{children:"Directly interface with Dappnode using a monitor and keyboard:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Connect a monitor via the HDMI/VGA port."}),"\n",(0,r.jsx)(n.li,{children:"Plug in a USB keyboard."}),"\n",(0,r.jsx)(n.li,{children:"Power on or restart the Dappnode machine."}),"\n",(0,r.jsxs)(n.li,{children:["When prompted, enter the password: ",(0,r.jsx)(n.code,{children:"dappnode.s0"})," (or ",(0,r.jsx)(n.a,{href:"/docs/user/getting-started/setup",children:"the one you've set if changed during onboarding"}),")."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>i});var r=s(7294);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);