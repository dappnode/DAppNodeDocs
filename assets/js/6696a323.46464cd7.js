"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[9091],{7362:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"dev/package-development/multi-configuration","title":"Multi-Config Package Development","description":"This guide will walk you through the steps to develop a multi-config Dappnode package, allowing you to create multiple package configurations from a single source. We\'ll use the Lodestar Generic package as a reference, which builds multiple variants for different networks like Mainnet, Holesky, and Gnosis.","source":"@site/docs/dev/package-development/multi-configuration.md","sourceDirName":"dev/package-development","slug":"/dev/package-development/multi-configuration","permalink":"/docs/dev/package-development/multi-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/dappnode/DappnodeDocs/edit/master/docs/dev/package-development/multi-configuration.md","tags":[],"version":"current","frontMatter":{},"sidebar":"devSidebar","previous":{"title":"Single Configuration","permalink":"/docs/dev/package-development/single-configuration"},"next":{"title":"Package Publishing","permalink":"/docs/dev/package-publishing/publish-packages-clients"}}');var t=a(4848),o=a(8453);const s={},r="Multi-Config Package Development",c={},l=[{value:"Step 1: Initialize the Package",id:"step-1-initialize-the-package",level:2},{value:"Step 2: Customize your package",id:"step-2-customize-your-package",level:2},{value:"Create a directory for each variant",id:"create-a-directory-for-each-variant",level:3},{value:"Customize the Avatar",id:"customize-the-avatar",level:3},{value:"Key Changes in <code>docker-compose.yml</code> and <code>dappnode_package.json</code>",id:"key-changes-in-docker-composeyml-and-dappnode_packagejson",level:3},{value:"Simplified Dockerfile",id:"simplified-dockerfile",level:3},{value:"Simplified entrypoint",id:"simplified-entrypoint",level:3},{value:"Prometheus and Grafana",id:"prometheus-and-grafana",level:3},{value:"Step 3: Build the packages",id:"step-3-build-the-packages",level:2},{value:"Step 4: Publish the Packages",id:"step-4-publish-the-packages",level:2},{value:"Automating Publication with GitHub Actions",id:"automating-publication-with-github-actions",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"multi-config-package-development",children:"Multi-Config Package Development"})}),"\n",(0,t.jsx)(n.p,{children:"This guide will walk you through the steps to develop a multi-config Dappnode package, allowing you to create multiple package configurations from a single source. We'll use the Lodestar Generic package as a reference, which builds multiple variants for different networks like Mainnet, Holesky, and Gnosis."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-initialize-the-package",children:"Step 1: Initialize the Package"}),"\n",(0,t.jsx)(n.p,{children:"Start by running the following command to initialize your multi-variant Dappnode package:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @dappnode/dappnodesdk@latest init --use-variants\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will create the following directory structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\n\u251c\u2500\u2500 avatar-default.png\n\u251c\u2500\u2500 dappnode_package.json\n\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 Dockerfile\n\u2514\u2500\u2500 package_variants\n    \u251c\u2500\u2500 mainnet\n    \u2502   \u251c\u2500\u2500 dappnode_package.json\n    \u2502   \u2514\u2500\u2500 docker-compose.yml\n    \u2514\u2500\u2500 testnet\n        \u251c\u2500\u2500 dappnode_package.json\n        \u2514\u2500\u2500 docker-compose.yml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-customize-your-package",children:"Step 2: Customize your package"}),"\n",(0,t.jsx)(n.h3,{id:"create-a-directory-for-each-variant",children:"Create a directory for each variant"}),"\n",(0,t.jsxs)(n.p,{children:["Each variant of your package will have its own configuration files under ",(0,t.jsx)(n.code,{children:"package_variants"}),". For example, if you have ",(0,t.jsx)(n.code,{children:"mainnet"})," and ",(0,t.jsx)(n.code,{children:"testnet"})," variants, you will find the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"package_variants/\n\u251c\u2500\u2500 mainnet/\n\u2502   \u251c\u2500\u2500 dappnode_package.json\n\u2502   \u2514\u2500\u2500 docker-compose.yml\n\u2514\u2500\u2500 testnet/\n    \u251c\u2500\u2500 dappnode_package.json\n    \u2514\u2500\u2500 docker-compose.yml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The contents within each variant directory include the fields that differ from one variant to another. When building a specific variant, such as ",(0,t.jsx)(n.code,{children:"testnet"}),", the data from these variant-specific files is merged with the root-level ",(0,t.jsx)(n.code,{children:"dappnode_package.json"})," and ",(0,t.jsx)(n.code,{children:"docker-compose.yml"}),". This ensures that only the necessary variant-specific changes are applied, while the common configuration remains consistent across all variants."]}),"\n",(0,t.jsx)(n.p,{children:"You can add more variants as needed by creating additional directories and files following this structure."}),"\n",(0,t.jsx)(n.h3,{id:"customize-the-avatar",children:"Customize the Avatar"}),"\n",(0,t.jsxs)(n.p,{children:["Replace the default avatar (",(0,t.jsx)(n.code,{children:"avatar-default.png"}),") with a square ",(0,t.jsx)(n.code,{children:".png"})," image that represents your package (recommended dimensions: width between 200px and 300px). This image will appear in the Dappnode UI, so it's important to choose one that aligns with your package's branding. The avatar is common for each of the variants."]}),"\n",(0,t.jsxs)(n.h3,{id:"key-changes-in-docker-composeyml-and-dappnode_packagejson",children:["Key Changes in ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," and ",(0,t.jsx)(n.code,{children:"dappnode_package.json"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the root-level ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," and ",(0,t.jsx)(n.code,{children:"dappnode_package.json"}),", specify the general configuration that applies across all variants."]}),"\n",(0,t.jsxs)(n.p,{children:["Each variant in ",(0,t.jsx)(n.code,{children:"package_variants"})," will have its own ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," and ",(0,t.jsx)(n.code,{children:"dappnode_package.json"}),", tailored to the network or environment it is intended for."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.code,{children:"package_variants/mainnet/docker-compose.yml"})," could define services using ",(0,t.jsx)(n.code,{children:"NETWORK=mainnet"}),", while ",(0,t.jsx)(n.code,{children:"package_variants/testnet/docker-compose.yml"})," would use ",(0,t.jsx)(n.code,{children:"NETWORK=testnet"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Example of a variant-specific ",(0,t.jsx)(n.code,{children:"dappnode_package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "test-mainnet.public.dappnode.eth",\n  "version": "0.1.0",\n  "type": "service"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["And the corresponding ",(0,t.jsx)(n.code,{children:"docker-compose.yml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'version: "3.5"\nservices:\n  test:\n    build:\n      args:\n        NETWORK: mainnet\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"simplified-dockerfile",children:"Simplified Dockerfile"}),"\n",(0,t.jsxs)(n.p,{children:["Here\u2019s an example of the ",(0,t.jsx)(n.code,{children:"Dockerfile"})," used for the Lodestar Generic package. This ",(0,t.jsx)(n.code,{children:"Dockerfile"})," is responsible for configuring the Lodestar Ethereum client and handling multiple variants."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Dockerfile",children:'ARG UPSTREAM_VERSION\n\nFROM chainsafe/lodestar:${UPSTREAM_VERSION}\n\nARG NETWORK\nARG STAKER_SCRIPTS_VERSION\n\n# Additional envs\n\nENV STAKER_SCRIPTS_URL=https://github.com/dappnode/staker-package-scripts/releases/download/${STAKER_SCRIPTS_VERSION}\n\nCOPY entrypoint.sh /usr/local/bin/entrypoint.sh\n\n# These scripts provide useful tools for the entrypoint\nADD ${STAKER_SCRIPTS_URL}/consensus_tools.sh /etc/profile.d/\nRUN chmod +rx /etc/profile.d/consensus_tools.sh\n\n# Additional commands or package installation\n\n# This environment variable sets the variant (e.g., mainnet, testnet)\nENV NETWORK=${NETWORK}\n\nENTRYPOINT ["/usr/local/bin/entrypoint.sh"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"simplified-entrypoint",children:"Simplified entrypoint"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"entrypoint.sh"})," script for the Lodestar client manages different network setups (e.g., Holesky, Gnosis, Mainnet) and configures runtime flags accordingly. Here\u2019s a simplified version:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/sh\n\nSUPPORTED_NETWORKS="gnosis holesky mainnet"\nMEVBOOST_FLAG_KEY="--builder"\nCLIENT="lodestar"\n\n# Load the tools scripts\n. /etc/profile\n\n# Get the necessary environment variables for the beacon node\nENGINE_URL="http://execution.${NETWORK}.staker.dappnode:8551"\nVALID_FEE_RECIPIENT=$(get_valid_fee_recipient "${FEE_RECIPIENT}")\nMEVBOOST_FLAG=$(get_mevboost_flag "${NETWORK}" "${MEVBOOST_FLAG_KEY}")\n\nJWT_SECRET=$(get_jwt_secret_by_network "${NETWORK}")\necho "${JWT_SECRET}" >"${JWT_FILE_PATH}"\n\n# Start the beacon node with the appropriate flags\necho "[INFO - entrypoint] Running beacon node"\n\nFLAGS="beacon \\\n    --network=${NETWORK} \\\n    --suggestedFeeRecipient=${VALID_FEE_RECIPIENT} \\\n    --jwt-secret=${JWT_FILE_PATH} \\\n    --execution.urls=${ENGINE_URL} \\\n    # ... Additional flags here\n    --logFileDailyRotate=5 $MEVBOOST_FLAG $EXTRA_OPTS"\n\n# Run the Lodestar client with the specified flags\nexec ${CLIENT_BIN} $FLAGS\n'})}),"\n",(0,t.jsx)(n.h3,{id:"prometheus-and-grafana",children:"Prometheus and Grafana"}),"\n",(0,t.jsxs)(n.p,{children:["In multi-variant packages, you can use a common Grafana dashboard located at the root level, while each variant can have its own Prometheus targets. These are stored in variant-specific directories like ",(0,t.jsx)(n.code,{children:"package_variants/gnosis/prometheus-targets.json"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"By following this guide, you\u2019ll be able to create multi-variant packages that support different networks or configurations within a single source code base."}),"\n",(0,t.jsx)(n.h2,{id:"step-3-build-the-packages",children:"Step 3: Build the packages"}),"\n",(0,t.jsx)(n.p,{children:"Once your variants are configured, build any of them using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @dappnode/dappnodesdk@latest build --variants=<comma-separated-list-of-variants>\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you want to build all variants at the same time, you can use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @dappnode/dappnodesdk@latest build --all-variants\n"})}),"\n",(0,t.jsx)(n.p,{children:"These commands will package your services, making them ready for installation on Dappnode machines."}),"\n",(0,t.jsx)(n.h2,{id:"step-4-publish-the-packages",children:"Step 4: Publish the Packages"}),"\n",(0,t.jsx)(n.p,{children:"Once you have built your variants, you can choose to publish them. While publishing is optional if you only want to use the package locally, it is required if you want your package to be available in the public Dappstore for other users to discover and install."}),"\n",(0,t.jsxs)(n.p,{children:["The publish command allows you to specify which variants you want to publish, using the same ",(0,t.jsx)(n.code,{children:"--variants"})," flag as the build command. You can publish one or more variants as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @dappnode/dappnodesdk@latest publish --type=<patch/minor/major> --variants=<comma-separated-list-of-variants> --eth-provider=<your ETH RPC> --content-provider=<your IPFS API> --developer-address=<the address to sign>\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you want to generate all variants publish links at once, you can use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @dappnode/dappnodesdk@latest publish --type=patch --all-variants --eth-provider=https://your-eth-node --content-provider=https://your-ipfs-api --developer-address=0xYourAddress\n"})}),"\n",(0,t.jsx)(n.p,{children:"After running the publish command, you will receive a link to sign the transaction to complete the publishing process."}),"\n",(0,t.jsx)(n.h3,{id:"automating-publication-with-github-actions",children:"Automating Publication with GitHub Actions"}),"\n",(0,t.jsxs)(n.p,{children:["If your package source code is hosted on GitHub, you can automate the publishing process by setting up GitHub Actions. Use the workflows ",(0,t.jsx)(n.a,{href:"/docs/dev/github-actions",children:"here"})," to integrate publishing workflows, ensuring your package builds and publishes automatically."]}),"\n",(0,t.jsx)(n.p,{children:"By following these steps, you'll be able to develop, build, and publish multi-variant packages on Dappnode, making it easier to support multiple configurations from a single codebase."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var i=a(6540);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);