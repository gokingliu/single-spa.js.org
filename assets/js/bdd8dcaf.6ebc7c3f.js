"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8353],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1373:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),i=["components"],o={id:"ecosystem-angularjs",title:"single-spa-angularjs",sidebar_label:"AngularJS"},u=void 0,s={unversionedId:"ecosystem-angularjs",id:"version-4.x/ecosystem-angularjs",title:"single-spa-angularjs",description:"single-spa-angularjs is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with AngularJS. Check out the single-spa-angularjs github.",source:"@site/versioned_docs/version-4.x/ecosystem-angularjs.md",sourceDirName:".",slug:"/ecosystem-angularjs",permalink:"/docs/4.x/ecosystem-angularjs",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/ecosystem-angularjs.md",tags:[],version:"4.x",frontMatter:{id:"ecosystem-angularjs",title:"single-spa-angularjs",sidebar_label:"AngularJS"},sidebar:"version-4.x/docs",previous:{title:"Angular",permalink:"/docs/4.x/ecosystem-angular"},next:{title:"Cycle",permalink:"/docs/4.x/ecosystem-cycle"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"With a bundler",id:"with-a-bundler",children:[],level:2},{value:"Without a bundler",id:"without-a-bundler",children:[{value:"As a SystemJS module",id:"as-a-systemjs-module",children:[],level:3},{value:"As a global variable",id:"as-a-global-variable",children:[],level:3}],level:2},{value:"Options",id:"options",children:[],level:2},{value:"ES5 Example",id:"es5-example",children:[],level:2}],m={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"single-spa-angularjs is a helper library that helps implement ",(0,l.kt)("a",{parentName:"p",href:"configuration#registering-applications"},"single-spa registered application")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/4.x/building-applications#registered-application-lifecycle"},"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",(0,l.kt)("a",{parentName:"p",href:"https://angularjs.org/"},"AngularJS"),". Check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-angularjs"},"single-spa-angularjs github"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save single-spa-angularjs\n")),(0,l.kt)("p",null,"Note that you can alternatively ",(0,l.kt)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-angularjs"><\/script>')," and access the library\nvia the ",(0,l.kt)("inlineCode",{parentName:"p"},"singleSpaAngularjs")," global variable if that is easier for you."),(0,l.kt)("h2",{id:"with-a-bundler"},"With a bundler"),(0,l.kt)("p",null,"If you're using a bundler such as webpack, add the following to your entry file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import singleSpaAngularJS from 'single-spa-angularjs';\nimport angular from 'angular';\n\nconst ngLifecycles = singleSpaAngularJS({\n  angular: angular,\n  mainAngularModule: 'app',\n  uiRouter: true,\n  preserveGlobal: false,\n  template: '<my-component />',\n});\n\nexport const bootstrap = ngLifecycles.bootstrap;\nexport const mount = ngLifecycles.mount;\nexport const unmount = ngLifecycles.unmount;\n")),(0,l.kt)("h2",{id:"without-a-bundler"},"Without a bundler"),(0,l.kt)("p",null,"If you're not using a bundler, you'll need to make your angularjs application a SystemJS module or a global variable. The SystemJS\nmodule is preferred, and you can read about it more in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/faq.html#is-there-a-recommended-setup"},"recommended single-spa setup"),"."),(0,l.kt)("h3",{id:"as-a-systemjs-module"},"As a SystemJS module"),(0,l.kt)("p",null,"Add the following to your AngularJS application. If you're using gulp/grunt to concatenate files together, just create a new file called\n",(0,l.kt)("inlineCode",{parentName:"p"},"single-spa-application.js")," and make sure it's included in your final build file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"System.register([], function(_export) {\n  return {\n    execute: function() {\n      _export(singleSpaAngularJS({\n        angular: angular,\n        mainAngularModule: 'app',\n        uiRouter: true,\n        preserveGlobal: false,\n        template: '<my-component />',\n      }))\n    }\n  }\n})\n")),(0,l.kt)("p",null,"Once you do this, you can ",(0,l.kt)("inlineCode",{parentName:"p"},"System.import()")," the bundle file and SystemJS + single-spa will know what to do with your module. Your\n",(0,l.kt)("a",{parentName:"p",href:"/docs/configuration.html#loading-function-or-application"},"loading function")," should be ",(0,l.kt)("inlineCode",{parentName:"p"},"System.import('name-of-app')"),". Make sure to\nadd ",(0,l.kt)("inlineCode",{parentName:"p"},"name-of-app")," to your ",(0,l.kt)("a",{parentName:"p",href:"https://single-spa-playground.org/playground/import-map"},"import map"),"."),(0,l.kt)("h3",{id:"as-a-global-variable"},"As a global variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.myAngularApp = singleSpaAngularJS({\n  angular: angular,\n  mainAngularModule: 'app',\n  uiRouter: true,\n  preserveGlobal: false,\n  template: '<my-component />',\n})\n")),(0,l.kt)("p",null,"Your ",(0,l.kt)("a",{parentName:"p",href:"/docs/configuration.html#loading-function-or-application"},"loading function")," should just be the global variable itself. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"singleSpa.registerApplication('my-angular-app', myAngularApp, () => true);\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"All options are passed to single-spa-angularjs via the ",(0,l.kt)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",(0,l.kt)("inlineCode",{parentName:"p"},"singleSpaAngularJS(opts)"),". The following options are available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"angular"),": (required) The main angular object, which is generally either exposed onto the window or is available via ",(0,l.kt)("inlineCode",{parentName:"li"},"require('angular')")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"import angular from 'angular'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"domElementGetter"),": (optional) A function that takes in no arguments and returns a DOMElement. This dom element is where the angular\napplication will be bootstrapped, mounted, and unmounted. If not provided, the default is to create a div and append it to ",(0,l.kt)("inlineCode",{parentName:"li"},"document.body"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mainAngularModule"),": (required) A string that is the name of the angular module that will be bootstrapped by angular. See ",(0,l.kt)("a",{parentName:"li",href:"https://docs.angularjs.org/api/ng/function/angular.bootstrap"},"angular docs")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"angular.bootstrap()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uiRouter"),": (optional) If you are using angular-ui-router, set this option to either ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," or to a string value. The string value will be the value of the ui-view HTML attribute. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},"uiRouter: 'core'")," will be ",(0,l.kt)("inlineCode",{parentName:"li"},'<div ui-view="core" />')," whereas ",(0,l.kt)("inlineCode",{parentName:"li"},"uiRouter: true")," turns into ",(0,l.kt)("inlineCode",{parentName:"li"},"<div ui-view />"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"preserveGlobal"),": (optional) A boolean that defaults to false. Set if you want to keep angular on the global even after an app unmounts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"elementId"),": (optional) A string which will be used to identify the element appended to the DOM and bootstrapped by Angular."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"strictDi"),": (optional - part of the bootstrap ",(0,l.kt)("a",{parentName:"li",href:"https://docs.angularjs.org/api/ng/function/angular.bootstrap#usage"},"config object"),") A boolean that defaults to false. Set if you want to enable StrictDi mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"template"),": (optional) An HTML string that will be inserted into the DOM when the app is mounted. The template goes inside of the element returned by domElementGetter. If not provided, no template will be inserted. When using angular-ui-router, you often do not need to use this since ui-router will be putting a template onto the dom for you.")),(0,l.kt)("h2",{id:"es5-example"},"ES5 Example"),(0,l.kt)("p",null,"Check out ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/single-spa-es5-angularjs"},"this example repo")))}c.isMDXComponent=!0}}]);