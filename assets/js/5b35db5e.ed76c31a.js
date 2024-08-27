"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7775],{2292:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=i(5893),t=i(1151);const s={},l="OpenVPN Access to Dappnode",d={id:"user/access-your-dappnode/vpn/openvpn",title:"OpenVPN Access to Dappnode",description:"OpenVPN is a widely-accepted VPN protocol known for its reliability and high-security standards. Here's how you can set it up with Dappnode.",source:"@site/docs/user/access-your-dappnode/vpn/openvpn.md",sourceDirName:"user/access-your-dappnode/vpn",slug:"/user/access-your-dappnode/vpn/openvpn",permalink:"/docs/user/access-your-dappnode/vpn/openvpn",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/access-your-dappnode/vpn/openvpn.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"WireGuard Access to Dappnode",permalink:"/docs/user/access-your-dappnode/vpn/wireguard"},next:{title:"Terminal Access to Dappnode",permalink:"/docs/user/access-your-dappnode/terminal"}},r={},c=[{value:"Setting Up OpenVPN",id:"setting-up-openvpn",level:2},{value:"1. Get VPN Credentials URL",id:"1-get-vpn-credentials-url",level:3},{value:"<em>Option 1</em>: Via Dappmanager UI",id:"option-1-via-dappmanager-ui",level:4},{value:"<em>Option 2</em>: Via Dappnode Terminal",id:"option-2-via-dappnode-terminal",level:4},{value:"2. Download OpenVPN Credentials",id:"2-download-openvpn-credentials",level:3},{value:"3. OpenVPN Installation",id:"3-openvpn-installation",level:2},{value:"4. Connecting to Dappnode via OpenVPN",id:"4-connecting-to-dappnode-via-openvpn",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"openvpn-access-to-dappnode",children:"OpenVPN Access to Dappnode"}),"\n",(0,o.jsx)(n.p,{children:"OpenVPN is a widely-accepted VPN protocol known for its reliability and high-security standards. Here's how you can set it up with Dappnode."}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-openvpn",children:"Setting Up OpenVPN"}),"\n",(0,o.jsx)(n.h3,{id:"1-get-vpn-credentials-url",children:"1. Get VPN Credentials URL"}),"\n",(0,o.jsx)(n.p,{children:"There are two primary methods to obtain your VPN credentials, based on your access level to the Dappmanager:"}),"\n",(0,o.jsxs)(n.h4,{id:"option-1-via-dappmanager-ui",children:[(0,o.jsx)(n.em,{children:"Option 1"}),": Via Dappmanager UI"]}),"\n",(0,o.jsx)(n.p,{children:"If you have access to the Dappmanager:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to ",(0,o.jsx)(n.strong,{children:"VPN > OpenVPN"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"If you don't see any device added to the list:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Provide a name for your device."}),"\n",(0,o.jsx)(n.li,{children:"Click on 'Add New Device'."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To retrieve the credentials:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Click on the 'Get Link' button."}),"\n",(0,o.jsx)(n.li,{children:"Copy the URL displayed."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{title:"Separate Credentials for Each Device",type:"tip",children:[(0,o.jsx)(n.p,{children:"For the best experience and to enable simultaneous access, it's recommended to create a separate device entry in the Dappnode VPN list for each device you intend to use for accessing your Dappnode."}),(0,o.jsx)(n.p,{children:"While it's technically possible to use the same credentials on multiple devices, doing so can lead to connectivity issues when trying to access the Dappnode from multiple devices at the same time."}),(0,o.jsx)(n.p,{children:"By setting up distinct credentials for each device, you ensure a smooth, uninterrupted connection for all your devices."})]}),"\n",(0,o.jsxs)(n.h4,{id:"option-2-via-dappnode-terminal",children:[(0,o.jsx)(n.em,{children:"Option 2"}),": Via Dappnode Terminal"]}),"\n",(0,o.jsx)(n.p,{children:"If you can't access the Dappmanager, you'll need to get the credentials via the Dappnode terminal:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Access the Dappnode terminal, as explained ",(0,o.jsx)(n.a,{href:"/docs/user/access-your-dappnode/terminal",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Execute the command: ",(0,o.jsx)(n.code,{children:"dappnode_openvpn"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A URL will be displayed on the terminal. Copy it."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"2-download-openvpn-credentials",children:"2. Download OpenVPN Credentials"}),"\n",(0,o.jsx)(n.p,{children:"With the URL you obtained in the previous step, you'll now download the OpenVPN credentials:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open a web browser on any device."}),"\n",(0,o.jsx)(n.li,{children:"Paste the URL you copied into the address bar and navigate to it."}),"\n",(0,o.jsxs)(n.li,{children:["You should be taken to a page where the OpenVPN credentials for your Dappnode can be downloaded. Click on the download button or link to download the ",(0,o.jsx)(n.code,{children:".ovpn"})," file, which contains your OpenVPN configuration and credentials."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Ensure that you ",(0,o.jsx)(n.strong,{children:"store credentials securely"}),". The ",(0,o.jsx)(n.code,{children:".ovpn"})," file provides direct access to your Dappnode, so treat it with the same caution you'd treat a password."]})}),"\n",(0,o.jsx)(n.h2,{id:"3-openvpn-installation",children:"3. OpenVPN Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Once you've obtained your OpenVPN credentials, the next step is to install an OpenVPN client. You can download the one that's compatible with the device you are going to use to connect to the Dappnode machine from the ",(0,o.jsx)(n.a,{href:"https://openvpn.net/client/",children:"OpenVPN website"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"4-connecting-to-dappnode-via-openvpn",children:"4. Connecting to Dappnode via OpenVPN"}),"\n",(0,o.jsx)(n.p,{children:"Once you have installed the OpenVPN client on your device, follow the steps below based on your operating system to connect to Dappnode:"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Android"})}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Launch the OpenVPN for Android app."}),"\n",(0,o.jsx)(n.li,{children:'Tap on "Import file".'}),"\n",(0,o.jsxs)(n.li,{children:["Upload the ",(0,o.jsx)(n.code,{children:".ovpn"})," file you downloaded earlier."]}),"\n",(0,o.jsx)(n.li,{children:'Click on "Connect".'}),"\n",(0,o.jsx)(n.li,{children:"Allow the app to create a VPN connection."}),"\n"]}),(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"/img/openvpn_android.jpg",alt:"Import file in Android",style:{width:"20em"}})})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"iPhone/iPad"})}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Go to the URL you obtained in the previous step."}),"\n",(0,o.jsxs)(n.li,{children:["Download the ",(0,o.jsx)(n.code,{children:".ovpn"})," file."]}),"\n",(0,o.jsx)(n.li,{children:'Click on "Open in OpenVPN".'}),"\n",(0,o.jsx)(n.li,{children:'Click on "Add".'}),"\n",(0,o.jsx)(n.li,{children:'Click on "Connect"'}),"\n",(0,o.jsx)(n.li,{children:"Allow the app to create a VPN connection."}),"\n"]}),(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"/img/openvpn_iphone_import.jpg",alt:"Import file in iPhone",style:{width:"10em"}})})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"macOS"})}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Launch Tunnelblick app for macOS."}),"\n",(0,o.jsx)(n.li,{children:'Click on "VPN Details" in the top bar menu.'}),"\n",(0,o.jsxs)(n.li,{children:["Drag and drop the ",(0,o.jsx)(n.code,{children:".ovpn"})," file you downloaded earlier in the left side bar."]}),"\n",(0,o.jsx)(n.li,{children:"Click on Connect."}),"\n"]}),(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"/img/openvpn_mac.png",alt:"Import file in macOS",style:{width:"20em"}})})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Windows"})}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Launch the OpenVPN for Windows app."}),"\n",(0,o.jsx)(n.li,{children:'Click on "Import file".'}),"\n",(0,o.jsxs)(n.li,{children:["Upload the ",(0,o.jsx)(n.code,{children:".ovpn"})," file you downloaded earlier."]}),"\n",(0,o.jsx)(n.li,{children:"Allow the app to create a VPN connection."}),"\n"]}),(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"/img/openvpn_windows.jpg",alt:"Import file in Windows",style:{width:"20em"}})})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsxs)("summary",{children:[" ",(0,o.jsx)("b",{children:"Recent Ubuntu"})]}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open Settings>Network."}),"\n",(0,o.jsx)(n.li,{children:'Click on the "+" button to add a new VPN connection.'}),"\n",(0,o.jsx)(n.li,{children:'Select "Import from file".'}),"\n",(0,o.jsxs)(n.li,{children:["Upload the ",(0,o.jsx)(n.code,{children:".ovpn"})," file you downloaded earlier."]}),"\n",(0,o.jsx)(n.li,{children:'Click on "Add".'}),"\n",(0,o.jsx)(n.li,{children:"Toggle the switch button to connect."}),"\n"]}),(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"/img/openvpn_ubuntu_network.png",alt:"Import file in Ubuntu",style:{width:"40em"}})}),(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"/img/openvpn_ubuntu_import.png",alt:"Import file in Ubuntu",style:{width:"40em"}})})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsxs)("summary",{children:[" ",(0,o.jsx)("b",{children:"Other Linux"})]}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open the terminal."}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to the directory where you have stored your ",(0,o.jsx)(n.code,{children:".ovpn"})," file."]}),"\n",(0,o.jsxs)(n.li,{children:["Execute the command: ",(0,o.jsx)(n.code,{children:"sudo openvpn Dappnode_VPN.ovpn"}),"."]}),"\n"]})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.admonition,{title:"Testing Your Connection",type:"tip",children:(0,o.jsxs)(n.p,{children:["Once connected, you can directly type ",(0,o.jsx)(n.a,{href:"http://my.dappnode",children:"http://my.dappnode"})," in your browser to access the Dappmanager."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var o=i(7294);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);