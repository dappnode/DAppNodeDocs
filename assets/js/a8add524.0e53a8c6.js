"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[2664],{2921:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user/access-your-dappnode/vpn/tailscale","title":"Connect to Your Dappnode Using Tailscale","description":"Tailscale is a secure, peer-to-peer VPN solution that simplifies connecting to your Dappnode without requiring complex port forwarding, solving issues such as UPnP not being recognized, routers behind CGNAT, or other port forwarding challenges. This guide walks you through setting up Tailscale to access your Dappnode.","source":"@site/docs/user/access-your-dappnode/vpn/tailscale.md","sourceDirName":"user/access-your-dappnode/vpn","slug":"/user/access-your-dappnode/vpn/tailscale","permalink":"/docs/user/access-your-dappnode/vpn/tailscale","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/access-your-dappnode/vpn/tailscale.md","tags":[],"version":"current","frontMatter":{},"sidebar":"userSidebar","previous":{"title":"Overview","permalink":"/docs/user/access-your-dappnode/vpn/overview"},"next":{"title":"Wireguard","permalink":"/docs/user/access-your-dappnode/vpn/wireguard"}}');var t=s(4848),o=s(8453);const a={},l="Connect to Your Dappnode Using Tailscale",r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up Tailscale",id:"setting-up-tailscale",level:2},{value:"1. Create an Auth Key",id:"1-create-an-auth-key",level:3},{value:"2. Install Tailscale on Your Dappnode",id:"2-install-tailscale-on-your-dappnode",level:3},{value:"3. Configure Tailscale to Connect to Dappnode Internal Networks",id:"3-configure-tailscale-to-connect-to-dappnode-internal-networks",level:3},{value:"a. Accept Advertised Routes from Your Dappnode",id:"a-accept-advertised-routes-from-your-dappnode",level:4},{value:"b. Add a Custom Nameserver",id:"b-add-a-custom-nameserver",level:4},{value:"4. Connecting to Dappnode with Tailscale",id:"4-connecting-to-dappnode-with-tailscale",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connect-to-your-dappnode-using-tailscale",children:"Connect to Your Dappnode Using Tailscale"})}),"\n",(0,t.jsx)(n.p,{children:"Tailscale is a secure, peer-to-peer VPN solution that simplifies connecting to your Dappnode without requiring complex port forwarding, solving issues such as UPnP not being recognized, routers behind CGNAT, or other port forwarding challenges. This guide walks you through setting up Tailscale to access your Dappnode."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Using Tailscale is an excellent alternative if you're experiencing issues with UPnP, CGNAT, or port forwarding. It's easy to set up and ensures a seamless connection to your Dappnode."})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before starting, ensure you have:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Access to your ",(0,t.jsx)(n.a,{href:"http://my.dappnode",children:"Dappnode's Admin UI"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://tailscale.com/",children:"Tailscale account"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Tailscale installed on the device you want to access your Dappnode from. Download ",(0,t.jsx)(n.a,{href:"https://tailscale.com/download",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-tailscale",children:"Setting Up Tailscale"}),"\n",(0,t.jsx)(n.h3,{id:"1-create-an-auth-key",children:"1. Create an Auth Key"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Log in to Tailscale and navigate to ",(0,t.jsx)(n.a,{href:"https://login.tailscale.com/admin/settings/keys",children:"Tailscale Admin Settings"}),". Click on ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Generate auth key"})}),"."]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"80%",src:"/img/authkey1.png"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create a new auth key. Any name will work."}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"50%",src:"/img/authkey2.png"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Save the key for the next step. Do not share this key with anyone."}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"50%",src:"/img/authkey3.png"})}),"\n",(0,t.jsx)(n.h3,{id:"2-install-tailscale-on-your-dappnode",children:"2. Install Tailscale on Your Dappnode"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Access your ",(0,t.jsx)(n.a,{href:"https://my.dappnode",children:"Dappnode's Admin UI"})]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Dappstore"})," and search for the ",(0,t.jsx)(n.code,{children:"Tailscale"})," package."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Install"})]}),"\n",(0,t.jsxs)(n.li,{children:["Go to the Tailscale package in ",(0,t.jsx)(n.strong,{children:"Packages"})," tab and enter the auth key you created during installation."]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"80%",src:"/img/authkey4.png"})}),"\n",(0,t.jsx)(n.p,{children:"Once installed, Tailscale will run as as any other package on your Dappnode. In order to connect to your Dappnode with Tailscale, this package will need to be running."}),"\n",(0,t.jsx)(n.h3,{id:"3-configure-tailscale-to-connect-to-dappnode-internal-networks",children:"3. Configure Tailscale to Connect to Dappnode Internal Networks"}),"\n",(0,t.jsx)(n.h4,{id:"a-accept-advertised-routes-from-your-dappnode",children:"a. Accept Advertised Routes from Your Dappnode"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to your ",(0,t.jsx)(n.a,{href:"https://login.tailscale.com/admin/machines",children:"Tailscale Machines Dashboard"}),"."]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"80%",src:"/img/machinelist.png"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Find your Dappnode device in the list of machines"}),"\n",(0,t.jsx)(n.li,{children:'Open the "Edit Route Settings" modal and check the Subnet Route that appears.'}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"50%",src:"/img/subnetcheck.png"})}),"\n",(0,t.jsx)(n.h4,{id:"b-add-a-custom-nameserver",children:"b. Add a Custom Nameserver"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to your ",(0,t.jsx)(n.a,{href:"https://login.tailscale.com/admin/dns",children:"Tailscale DNS Admin Panel"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Find the Nameservers section, click on ",(0,t.jsx)(n.strong,{children:'"Add nameserver"'})," and add a custom nameserver."]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"50%",src:"/img/customserver.png"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Fill the popup with:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nameserver IP:"})," ",(0,t.jsx)(n.code,{children:"172.33.1.2"})]}),"\n",(0,t.jsxs)(n.li,{children:["Activate ",(0,t.jsx)(n.strong,{children:'"Restrict to domain"'})," switch."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the domain as ",(0,t.jsx)(n.code,{children:"dappnode"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"That's it! You've successfully configured Tailscale to connect to your Dappnode. All that's left is to install Tailscale on the device you want to access your Dappnode from."}),"\n",(0,t.jsx)(n.h3,{id:"4-connecting-to-dappnode-with-tailscale",children:"4. Connecting to Dappnode with Tailscale"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"macOS"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open tailscale app in your finder"}),"\n",(0,t.jsx)(n.li,{children:"Go to the top bar and click the tailscale logo (9 dots)"}),"\n"]}),(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"50%",src:"/img/tailscale-2.png"})}),(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Activate the switch to connect."}),"\n"]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:[" ",(0,t.jsx)("b",{children:"Linux"})]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open up a terminal and run the following command:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo tailscale up --accept-routes\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If it's your first time using Tailscale in this device, a browser window may open asking to connect this device to your Tailscale account. Click on ",(0,t.jsx)(n.strong,{children:'"Connect"'}),". That's it! You're now connected to your Dappnode."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To stop Tailscale in any moment, run the following command:"}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo tailscale down\n"})}),(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Having trouble using Tailscale on Linux? Check out the ",(0,t.jsx)(n.a,{href:"https://tailscale.com/kb/1031/install-linux",children:"Tailscale Linux documentation"})," for more information."]})]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Windows"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Once installed, Tailscale's icon will appear in your system tray. Click on it."}),"\n",(0,t.jsxs)(n.li,{children:["If it's your first time using Tailscale in this device, a browser window may open asking to connect this device to your Tailscale account. Click on ",(0,t.jsx)(n.strong,{children:'"Connect"'}),". That's it! You're now connected to your Dappnode."]}),"\n"]}),(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{width:"50%",src:"/img/tailscalewindows.png"})}),(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"To disconnect tailscale, right click on the icon on the system tray and log out or exit the application."}),"\n"]}),(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Having trouble using Tailscale on Windows? Check out the ",(0,t.jsx)(n.a,{href:"https://tailscale.com/kb/1022/install-windows",children:"Tailscale Windows documentation"})," for more information."]})]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Android"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open your Tailscale app"}),"\n",(0,t.jsx)(n.li,{children:'Connect to your dappnode by clicking on the "Connect" button.'}),"\n"]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter any issues or need further assistance, refer to Dappnode's ",(0,t.jsx)(n.a,{href:"https://discord.gg/dappnode",children:"Discord"}),", the ",(0,t.jsx)(n.a,{href:"https://forum.dappnode.io/",children:"Dappnode Community Forums"}),", or ",(0,t.jsx)(n.a,{href:"https://tailscale.com/support/",children:"Tailscale Support"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(6540);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);