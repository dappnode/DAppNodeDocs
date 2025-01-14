"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[1733],{6646:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"dev/package-development/single-configuration","title":"Single-Variant Package Development","description":"This guide will walk you through the steps to develop a single-variant Dappnode package using a simple example. We\'ll start with initializing a basic package and progress to a more complex setup, using the Holesky Geth package as a reference.","source":"@site/docs/dev/package-development/single-configuration.md","sourceDirName":"dev/package-development","slug":"/dev/package-development/single-configuration","permalink":"/docs/dev/package-development/single-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/dev/package-development/single-configuration.md","tags":[],"version":"current","frontMatter":{},"sidebar":"devSidebar","previous":{"title":"Overview","permalink":"/docs/dev/package-development/overview"},"next":{"title":"Multi-Configuration","permalink":"/docs/dev/package-development/multi-configuration"}}');var t=i(4848),o=i(8453);const s={},c="Single-Variant Package Development",r={},l=[{value:"Step 1: Initialize the Package",id:"step-1-initialize-the-package",level:2},{value:"Step 2: Customize your Package",id:"step-2-customize-your-package",level:2},{value:"Create a Directory for Container Files",id:"create-a-directory-for-container-files",level:3},{value:"Customize the avatar",id:"customize-the-avatar",level:3},{value:"Key Changes in <code>docker-compose.yml</code> and <code>dappnode_package.json</code>",id:"key-changes-in-docker-composeyml-and-dappnode_packagejson",level:3},{value:"Simplified Dockerfile",id:"simplified-dockerfile",level:3},{value:"Simplified entrypoint.sh",id:"simplified-entrypointsh",level:3},{value:"Step 3: Build the package",id:"step-3-build-the-package",level:2},{value:"Step 4: Publish the package",id:"step-4-publish-the-package",level:2},{value:"Naming conventions for packages",id:"naming-conventions-for-packages",level:3},{value:"Automating Publication with GitHub Actions",id:"automating-publication-with-github-actions",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"single-variant-package-development",children:"Single-Variant Package Development"})}),"\n",(0,t.jsx)(n.p,{children:"This guide will walk you through the steps to develop a single-variant Dappnode package using a simple example. We'll start with initializing a basic package and progress to a more complex setup, using the Holesky Geth package as a reference."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-initialize-the-package",children:"Step 1: Initialize the Package"}),"\n",(0,t.jsx)(n.p,{children:"Start by running the following command to initialize your Dappnode package:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @dappnode/dappnodesdk@latest init\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will create the following directory structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\n\u251c\u2500\u2500 avatar-default.png\n\u251c\u2500\u2500 dappnode_package.json\n\u251c\u2500\u2500 docker-compose.yml\n\u2514\u2500\u2500 Dockerfile\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-customize-your-package",children:"Step 2: Customize your Package"}),"\n",(0,t.jsx)(n.h3,{id:"create-a-directory-for-container-files",children:"Create a Directory for Container Files"}),"\n",(0,t.jsxs)(n.p,{children:["For more complex packages, such as the Holesky Geth package, it is recommended to create a directory (e.g., ",(0,t.jsx)(n.code,{children:"geth"}),") that will contain everything that needs to go inside each Docker container corresponding to a service in the compose file. This includes the ",(0,t.jsx)(n.code,{children:"Dockerfile"}),", an ",(0,t.jsx)(n.code,{children:"entrypoint.sh"})," script, and any security or configuration files. Example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"geth/\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 entrypoint.sh\n\u2514\u2500\u2500 security/\n    \u2514\u2500\u2500 jwtsecret.hex\n"})}),"\n",(0,t.jsx)(n.h3,{id:"customize-the-avatar",children:"Customize the avatar"}),"\n",(0,t.jsxs)(n.p,{children:["Replace the default avatar (",(0,t.jsx)(n.code,{children:"avatar-default.png"}),") with a square ",(0,t.jsx)(n.code,{children:".png"})," image that represents your package (recommended dimensions: width between 200px and 300px). This image will appear in the Dappnode UI, so it's important to choose one that aligns with your package's branding."]}),"\n",(0,t.jsxs)(n.h3,{id:"key-changes-in-docker-composeyml-and-dappnode_packagejson",children:["Key Changes in ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," and ",(0,t.jsx)(n.code,{children:"dappnode_package.json"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"docker-compose.yml"}),", modify the services section to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Reference the newly created directory (",(0,t.jsx)(n.code,{children:"geth"})," in this example) where the ",(0,t.jsx)(n.code,{children:"Dockerfile"})," and other container files are stored."]}),"\n",(0,t.jsx)(n.li,{children:"Set up environment variables, ports, and volumes relevant to your service."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"dappnode_package.json"}),", update fields such as:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"version"}),", ",(0,t.jsx)(n.code,{children:"description"}),", and ",(0,t.jsx)(n.code,{children:"author"})," to reflect your package."]}),"\n",(0,t.jsxs)(n.li,{children:["Add relevant ",(0,t.jsx)(n.code,{children:"categories"}),", ",(0,t.jsx)(n.code,{children:"architectures"}),", and exposed services (e.g., API endpoints)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"simplified-dockerfile",children:"Simplified Dockerfile"}),"\n",(0,t.jsxs)(n.p,{children:["Here\u2019s a simplified version of the Dockerfile inside the ",(0,t.jsx)(n.code,{children:"geth"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Dockerfile",children:'ARG UPSTREAM_VERSION\n\nFROM ethereum/client-go:${UPSTREAM_VERSION}\n\nCOPY /security /security\nCOPY entrypoint.sh /usr/local/bin/entrypoint.sh\n\n# Additional commands or package installation\n\nENTRYPOINT ["/usr/local/bin/entrypoint.sh"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"simplified-entrypointsh",children:"Simplified entrypoint.sh"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"entrypoint.sh"})," script is responsible for setting up the environment and running the application. Here\u2019s a simplified version:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\n\n# Additional logic related to JWT token\n\n# Start the Geth process (add any flags you consider relevant)\nexec geth --authrpc.jwtsecret ${JWT_PATH} ${EXTRA_FLAGS}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-3-build-the-package",children:"Step 3: Build the package"}),"\n",(0,t.jsx)(n.p,{children:"Once all the necessary customizations are made, you can build your package by running the following command while connected to your Dappnode box:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @dappnode/dappnodesdk@latest build\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will package your service, making it ready for installation on a Dappnode machine. Once you get the package hash, you just have to paste it into the Dappstore search bar to download it."}),"\n",(0,t.jsx)(n.h2,{id:"step-4-publish-the-package",children:"Step 4: Publish the package"}),"\n",(0,t.jsx)(n.p,{children:"Publishing the package is optional; you can install and use the package locally after building it. However, if you want the package to be available in the public Dappstore for other users to discover and install, publishing is required. To publish the package, start by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @dappnode/dappnodesdk@latest publish --type=<patch/minor/major> --eth-provider=<your ETH RPC> --content-provider=<your IPFS API> --developer-address=<the address to sign>\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command will return a link where you can perform the transaction to publish the package."}),"\n",(0,t.jsx)(n.h3,{id:"naming-conventions-for-packages",children:"Naming conventions for packages"}),"\n",(0,t.jsx)(n.p,{children:"All package names must follow this convention:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<name>.<public/dnp>.dappnode.eth\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DNP: This suffix is reserved for official Dappnode packages and must be approved by the Dappnode Association."}),"\n",(0,t.jsx)(n.li,{children:"Public: This suffix is for community-contributed packages that can be published by anyone."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"automating-publication-with-github-actions",children:"Automating Publication with GitHub Actions"}),"\n",(0,t.jsxs)(n.p,{children:["If the package source code is hosted on GitHub, you can automate the publishing process by setting up GitHub Actions. Use the workflows ",(0,t.jsx)(n.a,{href:"/docs/dev/github-actions",children:"here"})," to integrate publishing workflows."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var a=i(6540);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);