"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[2767],{6763:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"user/install/arm","title":"Install - ARM","description":"Hardware Recommendations","source":"@site/docs/user/install/arm.md","sourceDirName":"user/install","slug":"/user/install/arm","permalink":"/docs/user/install/arm","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/install/arm.md","tags":[],"version":"current","frontMatter":{},"sidebar":"userSidebar","previous":{"title":"Script","permalink":"/docs/user/install/script"},"next":{"title":"Dappnode commands","permalink":"/docs/user/install/dappnode-commands"}}');var d=s(4848),r=s(8453);const a={},i="Install - ARM",l={},o=[{value:"Hardware Recommendations",id:"hardware-recommendations",level:2},{value:"Install Dappnode via Script",id:"install-dappnode-via-script",level:2},{value:"Add an external SSD",id:"add-an-external-ssd",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"install---arm",children:"Install - ARM"})}),"\n",(0,d.jsx)(n.h2,{id:"hardware-recommendations",children:"Hardware Recommendations"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"8 Gb RAM memory"}),"\n",(0,d.jsx)(n.li,{children:"Screen and keyboard (Only for the first installation)"}),"\n",(0,d.jsx)(n.li,{children:"Wired connection to the Dappnode"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"install-dappnode-via-script",children:"Install Dappnode via Script"}),"\n",(0,d.jsxs)(n.p,{children:["Follow the instructions you can find in ",(0,d.jsx)(n.a,{href:"/docs/user/install/script",children:"Script Installation"})]}),"\n",(0,d.jsx)(n.h2,{id:"add-an-external-ssd",children:"Add an external SSD"}),"\n",(0,d.jsx)(n.p,{children:"In case you have installed Dappnode in a Raspberry using a SD card and you want to add an external SSD you should mount docker data in it. To do this, follow the next steps:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Stop Docker service\n",(0,d.jsx)(n.code,{children:"systemctl stop docker"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Create a new mountpoint for docker data. As an example:\n",(0,d.jsx)(n.code,{children:"mkdir /data"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Add your partition on the new device to ",(0,d.jsx)(n.code,{children:"/etc/fstab"}),". You can identify its UUID using the ",(0,d.jsx)(n.code,{children:"blkid"})," tool. Make sure your device is properly partitioned first. Your line in ",(0,d.jsx)(n.code,{children:"/etc/fstab"})," should look like this:\n",(0,d.jsx)(n.code,{children:"UUID=b311b983-bda6-4e9f-835c-266d40d64f07 /data/ ext4 defaults 0 0"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Mount your SSD drive\n",(0,d.jsx)(n.code,{children:"mount /data"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Move docker data to the mountpoint\n",(0,d.jsx)(n.code,{children:"mv /var/lib/docker/* /data/"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Edit Docker settings to use the alternative location. Edit ",(0,d.jsx)(n.code,{children:"/etc/docker/daemon.json"})," as follows:"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "data-root": "/data"\n}\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Restart docker"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"systemctl start docker"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(6540);const d={},r=t.createContext(d);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);