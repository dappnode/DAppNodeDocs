"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3295],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const i={},a="Troubleshooting",s={unversionedId:"user/ethical-metrics/troubleshooting",id:"user/ethical-metrics/troubleshooting",title:"Troubleshooting",description:"Experiencing trouble when setting your notifications up? Check this FAQ. If your issue isn't listed, please pay us a visit in the Dappnode Discord and we'll be happy to assist you!",source:"@site/docs/user/ethical-metrics/troubleshooting.md",sourceDirName:"user/ethical-metrics",slug:"/user/ethical-metrics/troubleshooting",permalink:"/docs/user/ethical-metrics/troubleshooting",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/ethical-metrics/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Metrics Collected by Ethical Metrics",permalink:"/docs/user/ethical-metrics/metrics"},next:{title:"Videos and Tutorials",permalink:"/docs/user/videos-and-tutorials/overview"}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Experiencing trouble when setting your notifications up? Check this FAQ. If your issue isn't listed, please pay us a visit in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/dappnode"},"Dappnode Discord")," and we'll be happy to assist you!"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("strong",null,"How can I make sure my Dappnode is registered?")),(0,o.kt)("b",null,"Email:")," Upon registering, an email will be sent to your configured email address. If you don't receive this email, please check your spam folder. ",(0,o.kt)("br",null),(0,o.kt)("b",null,"Telegram:"),' Once your bot has been set up, you can press the "Send Test Notification" button to see if everything is working as expected.'),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("strong",null,'How can I test a "Dappnode down" notification?')),'There are various ways to test a "Dappnode down" notification. The easiest way is to stop your Dappnode temporarily, but you can also test it by stopping the "Prometheus" service of your Ethical Metrics package. After an hour, you should receive a "Dappnode down" notification in your Email and/or Telegram.'),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("strong",null,"How can I unregister from the Ethical Metrics monitoring system?")),(0,o.kt)("p",null,(0,o.kt)("strong",null," 1. Using the Dappnode Interface:")," From the active Dappnode, simply navigate to ",(0,o.kt)("a",{href:"http://my.dappnode/system/notifications"},"System > Notifications")," and toggle off ",(0,o.kt)("b",null,"Ethical Metrics"),". This will stop all notifications and halt metric collection from your Dappnode. As long as Ethical Metrics notifications are enabled in the Dappnode UI, your device remains registered in our monitoring system."),(0,o.kt)("p",null,(0,o.kt)("strong",null,"2. For Inactive Dappnodes:")," If your Dappnode is no longer accessible, locate the ",(0,o.kt)("b",null,"unregister link")," in the welcome email you received upon registration. Keep in mind that using this method won't employ our IP hiding measures, but you can enhance security using tools like a VPN. Please keep in mind that if your Dappnode is still up and running with Ethical Metrics notifications turned on, it'll register again by itself."),(0,o.kt)("p",null,(0,o.kt)("strong",null,"3. Manual Unregistration:")," Lost the welcome email? You can also unregister by inputting the following URL into your browser: ",(0,o.kt)("code",null,"https://ethical-metrics.dappnode.io/unregister-from-email/?instance=",(0,o.kt)("i",null,"YOUR_INSTANCE"),".onion%3A9090"),". Make sure to replace ",(0,o.kt)("i",null,"YOUR_INSTANCE"),' with the unique identifier for your Dappnode, excluding ".onion:9090", which is already included in the provided URL.')))}d.isMDXComponent=!0}}]);