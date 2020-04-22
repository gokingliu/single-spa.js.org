(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(1),i=n(9),o=(n(0),n(297)),r={id:"ecosystem-vue",title:"single-spa-vue",sidebar_label:"Vue"},p=[{value:"Starter repo",id:"starter-repo",children:[]},{value:"Live demo",id:"live-demo",children:[]},{value:"Installation",id:"installation",children:[{value:"Vue CLI",id:"vue-cli",children:[]},{value:"Without Vue CLI",id:"without-vue-cli",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Shared dependencies",id:"shared-dependencies",children:[{value:"Shared deps with Vue CLI",id:"shared-deps-with-vue-cli",children:[]},{value:"Shared deps without Vue CLI",id:"shared-deps-without-vue-cli",children:[]}]},{value:"Options",id:"options",children:[]},{value:"As a single-spa parcel",id:"as-a-single-spa-parcel",children:[]},{value:"Custom Props",id:"custom-props",children:[]}],l={rightToc:p},s="wrapper";function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(s,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"single-spa-vue is a helper library that helps implement ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://vuejs.org/"}),"Vue.js"),". Check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-vue"}),"single-spa-vue github"),"."),Object(o.b)("h2",{id:"starter-repo"},"Starter repo"),Object(o.b)("p",null,"For a full example, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/joeldenning/coexisting-vue-microfrontends"}),"coexisting-vue-microfrontends"),"."),Object(o.b)("h2",{id:"live-demo"},"Live demo"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://coexisting-vue-microfrontends.surge.sh"}),"https://coexisting-vue-microfrontends.surge.sh")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h3",{id:"vue-cli"},"Vue CLI"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/vue-cli-plugin-single-spa"}),"vue-cli-plugin-single-spa")," will get everything set up."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"vue add single-spa\n")),Object(o.b)("p",null,"The CLI Plugin does the following for you:\n1) Modify your webpack config so that your project works as a single-spa application or parcel.\n2) Install ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-vue"}),"single-spa-vue"),".\n3) Modify your ",Object(o.b)("inlineCode",{parentName:"p"},"main.js")," or ",Object(o.b)("inlineCode",{parentName:"p"},"main.ts")," file so that your project works as a single-spa application or parcel.\n4) Add a ",Object(o.b)("inlineCode",{parentName:"p"},"set-public-path.js")," that will use ",Object(o.b)("inlineCode",{parentName:"p"},"systemjs-webpack-interop")," in order to set the public path of your application."),Object(o.b)("h3",{id:"without-vue-cli"},"Without Vue CLI"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-vue\n")),Object(o.b)("p",null,"Alternatively, you can use  single-spa-vue by adding ",Object(o.b)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-vue"><\/script>')," to your html file and\naccessing the ",Object(o.b)("inlineCode",{parentName:"p"},"singleSpaVue")," global variable."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"systemjs-webpack-interop")," if you have not already done so."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm install systemjs-webpack-interop -S")),Object(o.b)("p",null,"Create a file at the same level as your ",Object(o.b)("inlineCode",{parentName:"p"},"main.js/ts")," called ",Object(o.b)("inlineCode",{parentName:"p"},"set-public-path.js")," "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { setPublicPath } from 'systemjs-webpack-interop';\n\nsetPublicPath('appName');\n\n")),Object(o.b)("p",null,"Change your application's entry file to be the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import './set-public-path';\nimport Vue from 'vue';\nimport App from './App.vue';\nimport router from './router';\nimport singleSpaVue from 'single-spa-vue';\n\nconst vueLifecycles = singleSpaVue({\n  Vue,\n  appOptions: {\n    render: h => h(App),\n    router,\n  },\n});\n\nexport const bootstrap = vueLifecycles.bootstrap;\nexport const mount = vueLifecycles.mount;\nexport const unmount = vueLifecycles.unmount;\n\n")),Object(o.b)("p",null,"Note that if you are using the Vue CLI Plugin, your ",Object(o.b)("inlineCode",{parentName:"p"},"main.ts")," or ",Object(o.b)("inlineCode",{parentName:"p"},"main.js")," file will be updated with this code automatically and the ",Object(o.b)("inlineCode",{parentName:"p"},"set-public-path.js")," file\nwill automatically be created with the app name being your package.json's name property."),Object(o.b)("h2",{id:"shared-dependencies"},"Shared dependencies"),Object(o.b)("p",null,"For performance, it is best to share a single version and instance of Vue, Vue Router, and other large libraries."),Object(o.b)("p",null,"To do this, add your shared dependencies as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/externals"}),"webpack externals"),". Then you use\nan in-browser module loader such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/systemjs/systemjs"}),"systemjs")," to provide those shared dependencies\nto each of the single-spa applications. Adding ",Object(o.b)("inlineCode",{parentName:"p"},"vue")," and other libraries to your\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://single-spa-playground.org/playground/import-map"}),"import map"),". For an example import map that is doing this,\ncheckout ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/joeldenning/coexisting-vue-microfrontends/blob/master/root-html-file/index.html"}),"coexisting-vue-microfrontends' index.html file"),"."),Object(o.b)("p",null,"Sharing a single instance of Vue and other common libraries is highly recommended. See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/faq.html#is-there-a-recommended-setup"}),"recommended setup for single-spa")," for more details on why."),Object(o.b)("h3",{id:"shared-deps-with-vue-cli"},"Shared deps with Vue CLI"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// vue.config.js\nmodule.exports = {\n  chainWebpack: config => {\n    config.externals(['vue', 'vue-router'])\n  }\n}\n")),Object(o.b)("h3",{id:"shared-deps-without-vue-cli"},"Shared deps without Vue CLI"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// webpack.config.js\nmodule.exports = {\n  externals: ['vue', 'vue-router'],\n}\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"All options are passed to single-spa-vue via the ",Object(o.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(o.b)("inlineCode",{parentName:"p"},"singleSpaVue(opts)"),". The following options are available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Vue"),": (required) The main Vue object, which is generally either exposed onto the window or is available via ",Object(o.b)("inlineCode",{parentName:"li"},"require('vue')")," ",Object(o.b)("inlineCode",{parentName:"li"},"import Vue from 'vue'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"appOptions"),": (required) An object which will be used to instantiate your Vue.js application. ",Object(o.b)("inlineCode",{parentName:"li"},"appOptions")," will pass directly through to ",Object(o.b)("inlineCode",{parentName:"li"},"new Vue(appOptions)"),". Note that if you do not provide an ",Object(o.b)("inlineCode",{parentName:"li"},"el")," to appOptions, that a div will be created and appended to the DOM as a default container for your Vue application."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"loadRootComponent"),": (optional and replaces ",Object(o.b)("inlineCode",{parentName:"li"},"appOptions.render"),") A promise that resolves with your root component. This is useful for lazy loading.")),Object(o.b)("h2",{id:"as-a-single-spa-parcel"},"As a single-spa parcel"),Object(o.b)("p",null,"To create a single-spa parcel, simply omit the ",Object(o.b)("inlineCode",{parentName:"p"},"el")," option from your appOptions, since the dom element will be specified by the user of the Parcel. Every other\noption should be provided exactly the same as in the example above."),Object(o.b)("h2",{id:"custom-props"},"Custom Props"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications.html#custom-props"}),"single-spa custom props")," are added to your App component as\n",Object(o.b)("inlineCode",{parentName:"p"},"appOptions.data"),", and are accessible via ",Object(o.b)("inlineCode",{parentName:"p"},"vm.$data"),". See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://vuejs.org/v2/api/#data"}),"this Vue documentation"),"\nfor more information on ",Object(o.b)("inlineCode",{parentName:"p"},"appOptions.data"),"."))}c.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),o=i.a.createContext({}),r=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=r(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=r(n),b=a,u=c[p+"."+b]||c[b]||s[b]||o;return n?i.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,r[1]=p;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);