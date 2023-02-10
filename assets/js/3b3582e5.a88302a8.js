"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[5428],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>v});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(o),v=n,f=u["".concat(i,".").concat(v)]||u[v]||s[v]||r;return o?a.createElement(f,p(p({ref:t},c),{},{components:o})):a.createElement(f,p({ref:t},c))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,p=new Array(r);p[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,p[1]=d;for(var l=2;l<r;l++)p[l]=o[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5574:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=o(3117),n=(o(7294),o(3905));const r={sidebar_position:1},p="What do I need to develop packages for DAppNode?",d={unversionedId:"developers/package-dev/what-do-i-need-to-develop-for-dappnode",id:"developers/package-dev/what-do-i-need-to-develop-for-dappnode",title:"What do I need to develop packages for DAppNode?",description:"It's required to use the DAppNodeSDK, this tool will help you to create the basic files to create a package, let you to upload the package to IPFS and prepare the package for dappnode software.",source:"@site/docs/developers/package-dev/what-do-i-need-to-develop-for-dappnode.md",sourceDirName:"developers/package-dev",slug:"/developers/package-dev/what-do-i-need-to-develop-for-dappnode",permalink:"/developers/package-dev/what-do-i-need-to-develop-for-dappnode",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/developers/package-dev/what-do-i-need-to-develop-for-dappnode.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Welcome to the DAppNode Documentation",permalink:"/intro"},next:{title:"Tutorial: How to create a package from scratch",permalink:"/developers/package-dev/create-a-package-tutorial"}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"DAppNodeSDK",id:"dappnodesdk",level:2},{value:"Installation",id:"installation",level:3},{value:"Basic commands",id:"basic-commands",level:3},{value:"init",id:"init",level:4},{value:"build",id:"build",level:4},{value:"provider",id:"provider",level:4}],c={toc:l};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-do-i-need-to-develop-packages-for-dappnode"},"What do I need to develop packages for DAppNode?"),(0,n.kt)("p",null,"It's required to use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dappnode/DAppNodeSDK"},"DAppNodeSDK"),", this tool will help you to create the basic files to create a package, let you to upload the package to IPFS and prepare the package for dappnode software."),(0,n.kt)("p",null,"It's optional but we recommend having installed docker-compose and docker. So you can test if the containers work themselves, with no interactions of the dappnode system."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"You need to have installed npm."),(0,n.kt)("h2",{id:"dappnodesdk"},"DAppNodeSDK"),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("p",null,"You can install it globally in your laptop or PC by executing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install -g @dappnode/dappnodesdk\n")),(0,n.kt)("h3",{id:"basic-commands"},"Basic commands"),(0,n.kt)("h4",{id:"init"},"init"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dappnodesdk init\n")),(0,n.kt)("p",null,"This command creates basic files of a package. Even you can build this package and install it in a dappnode to check if all is correct."),(0,n.kt)("h4",{id:"build"},"build"),(0,n.kt)("p",null,"This command without options builds the package and uploads the package via IPFS to your dappnode only if you are connected via VPN to your dappnode."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dappnodesdk build\n")),(0,n.kt)("h4",{id:"provider"},"provider"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dappnodesdk build --provider\n")),(0,n.kt)("p",null,"This option by default uses dappnode(and if you are connected via VPN you can upload the package to IPFS using the IPFS node that dappnode uses). But you can use a IP:PORT or some service like infura you upload the package to IPFS and obtain a hash."))}s.isMDXComponent=!0}}]);