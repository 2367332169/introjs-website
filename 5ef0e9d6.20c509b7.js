(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{125:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(125)),i={id:"community",title:"Community"},c={unversionedId:"community",id:"community",isDocsHomePage:!1,title:"Community",description:"StackOverflow",source:"@site/docs/community.md",slug:"/community",permalink:"/docs/community",editUrl:"https://github.com/usablica/introjs-website/edit/master/docs/community.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1606669059,sidebar:"someSidebar",previous:{title:"Support",permalink:"/docs/support"},next:{title:"Intro API",permalink:"/docs/intro/api"}},u=[{value:"StackOverflow",id:"stackoverflow",children:[]},{value:"Bug report",id:"bug-report",children:[]},{value:"Feature request",id:"feature-request",children:[]},{value:"Blog",id:"blog",children:[]}],s={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"stackoverflow"},"StackOverflow"),Object(a.b)("p",null,"Explore ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/intro.js"}),"existing questions")," or ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/ask?tags=intro.js"}),"ask your own"),"."),Object(a.b)("h2",{id:"bug-report"},"Bug report"),Object(a.b)("p",null,"Please open a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/usablica/intro.js/issues/new?assignees=&labels=&template=bug_report.md&title="}),"bug report")," ticket on GitHub."),Object(a.b)("h2",{id:"feature-request"},"Feature request"),Object(a.b)("p",null,"Please file a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/usablica/intro.js/issues/new?assignees=&labels=&template=feature_request.md&title="}),"feature request")," issue on GitHub."),Object(a.b)("h2",{id:"blog"},"Blog"),Object(a.b)("p",null,"Read our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/blog"}),"blog")," for the latest updates and announcements or follow our Twitter account\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/usablica"}),"@usablica")))}l.isMDXComponent=!0}}]);