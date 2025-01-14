"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[2170],{1354:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user/install/script","title":"Script installation","description":"You can install Dappnode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system.","source":"@site/docs/user/install/script.md","sourceDirName":"user/install","slug":"/user/install/script","permalink":"/docs/user/install/script","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/install/script.md","tags":[],"version":"current","frontMatter":{},"sidebar":"userSidebar","previous":{"title":"ISO","permalink":"/docs/user/install/iso"},"next":{"title":"ARM","permalink":"/docs/user/install/arm"}}');var i=s(4848),o=s(8453);const a={},l="Script installation",r={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Dappnode",id:"install-dappnode",level:2},{value:"Reboot",id:"reboot",level:2},{value:"Restore to the latest version",id:"restore-to-the-latest-version",level:2},{value:"Uninstall",id:"uninstall",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"script-installation",children:"Script installation"})}),"\n",(0,i.jsx)(n.p,{children:"You can install Dappnode using the installation script. In this case, we recommend you use Ubuntu or Debian as your operating system."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before installing Dappnode, you need to install some prerequisites:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"Docker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker-compose"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://packages.debian.org/sid/xz-utils",children:"xz"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To install all the above prerequisites, execute the command below in the terminal of the machine you want to install Dappnode. If you already have the dependencies installed or you want to install them on your own you can skip this step."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo wget -O - https://prerequisites.dappnode.io | sudo bash\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-dappnode",children:"Install Dappnode"}),"\n",(0,i.jsx)(n.p,{children:"To install Dappnode, execute the next script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo wget -O - https://installer.dappnode.io | sudo bash\n"})}),"\n",(0,i.jsx)(n.h2,{id:"reboot",children:"Reboot"}),"\n",(0,i.jsx)(n.p,{children:"To finalize the installation once it has finished completing, reboot your machine (you might need to do this twice):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"shutdown -r now\n"})}),"\n",(0,i.jsx)(n.h2,{id:"restore-to-the-latest-version",children:"Restore to the latest version"}),"\n",(0,i.jsx)(n.p,{children:"If you are experiencing any problem or just want to make sure you are running the latest Dappnode versions, execute this command in the Dappnode terminal. This will update the core packages to the latest versions without erasing any data from your volumes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo wget -O - https://installer.dappnode.io | sudo UPDATE=true bash\n"})}),"\n",(0,i.jsx)(n.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,i.jsx)(n.p,{children:"This command will uninstall Dappnode components (but not docker et al.)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wget -qO - https://uninstaller.dappnode.io | sudo bash\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);