!function(e){function t(t){for(var o,c,a=t[0],u=t[1],l=t[2],y=0,M=[];y<a.length;y++)c=a[y],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&M.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(s&&s(t);M.length;)M.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={3:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;i.push([134,0]),n()}({12:function(e,t,n){"use strict";n(13),n(15),n(16),n(11),n(17),n(18),n(19),n(20),n(21),n(22),n(23);var o=n(0);n(39),n(25),n(33);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return s}));var l=n(27),s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,a(t).call(this,e))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(e){e.querySelector(".main-nav .".concat(this.props.activeLink)).classList.toggle("active"),document.addEventListener("DOMContentLoaded",(function(){l({apiKey:"2eb478ca5883df99298c859f13049c88",indexName:"teddy",inputSelector:"#search-bar",debug:!0})}))}},{key:"render",value:function(){return o.b.h("nav",null,o.b.h("nav",{class:"navbar site-header fixed-top navbar-expand-lg navbar-dark bg-teddy"},o.b.h("a",{class:"navbar-brand",href:"https://teddy.js.org"},o.b.h("img",{height:"50",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNNjIuNzI4NyAzNy44Njg2QzQyLjg4ODcgMzcuODY4NiAzMy4xNzMzIDUyLjczNyA0MS4xMzc1IDcwLjkwODFMMTA5LjY3OCAyMjcuMjg0QzExNy42NDMgMjQ1LjQ1NSAxMzAuNjc2IDI0NS40NTUgMTM4LjY0IDIyNy4yODRMMjA3LjE4MyA3MC45MDgxQzIxNS4xNDcgNTIuNzM3IDIwNS40MjggMzcuODY4NiAxODUuNTg4IDM3Ljg2ODZINjIuNzI4N1YzNy44Njg2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ3Ljk5MyA2MS4zMTlDNDUuNjQyIDY0LjY2OCA0MC45NjQgNjUuNTA2IDM3LjU5NyA2My4xODJMMi40Mjc5OSAzOC45MUMtMC45NDAwMTQgMzYuNTg2IC0wLjc5MTAxNCAzMy4wMTcgMi43NTc5OSAzMC45OEw0Mi4wMyA4LjQ0NTAzQzQ1LjU3OSA2LjQwODAzIDQ5LjIwOCA4LjAxMDAzIDUwLjA5MiAxMi4wMDhMNTYuMjgxIDM5Ljk0OUM1Ny4xNjYgNDMuOTQ1IDU1Ljk2NyA0OS45NTUgNTMuNjE2IDUzLjMwNEw0Ny45OTMgNjEuMzE5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE3LjUzIDQxLjA2MTFDMTMuOTY1IDM5LjA1MjEgMTMuOTI5IDM1LjcwNjEgMTcuNDUxIDMzLjYyMzFMMzkuMDcgMjAuODM5MUM0Mi41OTEgMTguNzU2MSA0NS41MDggMjAuNDAwMSA0NS41NTEgMjQuNDkyMUw0NS44MTMgNDkuNjAwMUM0NS44NTYgNTMuNjkyMSA0Mi45NzMgNTUuMzk1MSAzOS40MDggNTMuMzg3MUwxNy41MyA0MS4wNjExWiIgZmlsbD0iIzc0M0MxQiIvPgo8cGF0aCBkPSJNMjAxLjcwMyA1OS40NjA5QzIwMy45ODQgNjIuNzA4NCAyMDguNTIxIDYzLjUyMSAyMTEuNzg2IDYxLjI2NzRMMjQ1Ljg4NiAzNy43MjlDMjQ5LjE1NSAzNS40NzU0IDI0OS4wMDkgMzIuMDE1NSAyNDUuNTY3IDMwLjAzOTNMMjA3LjQ4NCA4LjE4ODE1QzIwNC4wNDMgNi4yMTI4OCAyMDAuNTI2IDcuNzY3MyAxOTkuNjY1IDExLjY0MjJMMTkzLjY2NCAzOC43Mzc1QzE5Mi44MDYgNDIuNjExNCAxOTMuOTcgNDguNDQwMyAxOTYuMjQ5IDUxLjY4NzhMMjAxLjcwMyA1OS40NjA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyOS44NjYgNDAuNTQ5OEMyMzMuMzk1IDM4LjczNjUgMjMzLjU1NSAzNS40OTM4IDIzMC4yMTkgMzMuMzQ0TDIwOS43NDcgMjAuMTUyM0MyMDYuNDEzIDE4LjAwMjQgMjAzLjUyNCAxOS40ODcxIDIwMy4zMyAyMy40NTEyTDIwMi4xNDEgNDcuNzcxMkMyMDEuOTQ4IDUxLjczNDMgMjA0LjY3NyA1My40OTM0IDIwOC4yMDYgNTEuNjc5MUwyMjkuODY2IDQwLjU0OThaIiBmaWxsPSIjNzQzQzFCIi8+CjxwYXRoIGQ9Ik0xMDEuNDcyIDkyLjExNTRDMTA1LjIwMiA5Mi4xMTU0IDEwOC4yMjYgODcuMzA0NiAxMDguMjI2IDgxLjM3MDJDMTA4LjIyNiA3NS40MzU4IDEwNS4yMDIgNzAuNjI1IDEwMS40NzIgNzAuNjI1Qzk3Ljc0MTkgNzAuNjI1IDk0LjcxODEgNzUuNDM1OCA5NC43MTgxIDgxLjM3MDJDOTQuNzE4MSA4Ny4zMDQ2IDk3Ljc0MTkgOTIuMTE1NCAxMDEuNDcyIDkyLjExNTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTQ3LjAzMiA5Mi4xMTU0QzE1MC43NjIgOTIuMTE1NCAxNTMuNzg2IDg3LjMwNDYgMTUzLjc4NiA4MS4zNzAyQzE1My43ODYgNzUuNDM1OCAxNTAuNzYyIDcwLjYyNSAxNDcuMDMyIDcwLjYyNUMxNDMuMzAyIDcwLjYyNSAxNDAuMjc4IDc1LjQzNTggMTQwLjI3OCA4MS4zNzAyQzE0MC4yNzggODcuMzA0NiAxNDMuMzAyIDkyLjExNTQgMTQ3LjAzMiA5Mi4xMTU0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyMi43NDYgMTUxLjQyOUMxNDEuNTY3IDE1MS40MjkgMTU2LjgyNCAxNDEuMjU4IDE1Ni44MjQgMTI4LjcxMUMxNTYuODI0IDExNi4xNjQgMTQxLjU2NyAxMDUuOTkzIDEyMi43NDYgMTA1Ljk5M0MxMDMuOTI1IDEwNS45OTMgODguNjY4MSAxMTYuMTY0IDg4LjY2ODEgMTI4LjcxMUM4OC42NjgxIDE0MS4yNTggMTAzLjkyNSAxNTEuNDI5IDEyMi43NDYgMTUxLjQyOVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMTMuOTY4IDEyNy44OTJDMTE5LjU5NyAxMjcuODkyIDEyNC4xNiAxMjQuODUgMTI0LjE2IDEyMS4wOThDMTI0LjE2IDExNy4zNDUgMTE5LjU5NyAxMTQuMzAzIDExMy45NjggMTE0LjMwM0MxMDguMzM4IDExNC4zMDMgMTAzLjc3NSAxMTcuMzQ1IDEwMy43NzUgMTIxLjA5OEMxMDMuNzc1IDEyNC44NSAxMDguMzM4IDEyNy44OTIgMTEzLjk2OCAxMjcuODkyWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",alt:"#"}),"TeddyTags"),o.b.h("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"},o.b.h("span",{class:"navbar-toggler-icon"})),o.b.h("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},o.b.h("ul",{class:"main-nav navbar-nav mr-auto"},o.b.h("li",{class:"nav-item"},o.b.h("a",{class:"nav-link home",href:"/"},"Home")),o.b.h("li",{class:"nav-item"},o.b.h("a",{class:"nav-link repl",href:"/repl"},"REPL")),o.b.h("li",{class:"nav-item dropdown"},o.b.h("a",{class:"nav-link dropdown-toggle docs",href:"#","data-toggle":"dropdown"},"Docs"),o.b.h("div",{class:"dropdown-menu"},o.b.h("a",{class:"dropdown-item",href:"/docs/getting-started"},"Getting Started"),o.b.h("a",{class:"dropdown-item",href:"/docs/api"},"API")))),o.b.h("div",{class:"input-group justify-content-md-end"},o.b.h("div",{class:"input-group-prepend"},o.b.h("i",{class:"input-group-text bg-light lead icon-search"})),o.b.h("input",{id:"search-bar",class:"form-control border border-light",type:"search",placeholder:"Search"})),o.b.h("ul",{class:"navbar-nav flex-row ml-auto justify-content-start px-2 py-2"},o.b.h("li",{class:"nav-item px-2"},o.b.h("a",{class:"text-light text-decoration-none",href:"https://github.com/teddytags/teddytags"},o.b.h("i",{class:"lead icon-github"}))),o.b.h("li",{class:"nav-item px-2"},o.b.h("a",{class:"text-danger text-decoration-none",href:"https://npmjs.com/package/teddytags"},o.b.h("i",{class:"lead icon-npm"}))),o.b.h("li",{class:"nav-item px-2"},o.b.h("a",{class:"text-info text-decoration-none",href:"https://yarn.pm/teddytags"},o.b.h("i",{class:"lead icon-yarn"})))))),o.b.h("div",{class:"mt-5 pt-3"}))}}])&&i(n.prototype,r),s&&i(n,s),t}(o.b.Component)},133:function(e,t,n){"use strict";n(13),n(15),n(16),n(11),n(145),n(17),n(18),n(19),n(20),n(21),n(146),n(22),n(23);var o=n(0),r=n.p+"assets/images/big-dark-logo.f39fd259f704e621b94b90cb743c6bfd.svg";n(161);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,u(t).call(this,e))}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){return o.b.h("div",{class:"jumbotron text-center hero-head"},o.b.h("div",{id:"logo"},o.b.h("img",{height:"250",src:r,alt:"TeddyTags Logo"})),o.b.h("div",{class:"lead"},"The superfast way to custom elements."))}}])&&c(n.prototype,i),s&&c(n,s),t}(o.b.Component),y=n(87),M=(n(166),n(40)),f=n.n(M);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return j}));var j=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,g(t).call(this,e))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(e){document.addEventListener("DOMContentLoaded",(function(){var t=new f.a({placement:"right",icon:"#",class:"nav-link text-secondary d-inline"});t.add(".content h1"),t.add(".content h2"),t.add(".content h3"),fetch("https://api.npmjs.org/downloads/point/last-day/teddytags").then((function(t){t.json().then((function(t){e.querySelector("span.npm-count").innerHTML=t.downloads}))}))}))}},{key:"render",value:function(){return o.b.h("article",{class:"content"},o.b.h(s,null),o.b.h("div",{class:"pl-5 pr-5"},o.b.h("h1",{class:"td-title"},"Your DOM has got its best friend ever."),o.b.h("br",null),o.b.h("h2",{class:"td-lead"},"DOM's sidekick"),o.b.h("p",{class:"lead"},"TeddyTags is like a minimal wrapper on the DOM. It just processes all the things you give and then lets the DOM to do its own magic."),o.b.h("hr",null),o.b.h("h2",{class:"td-lead"},"Light on Performance"),o.b.h("p",{class:"lead"},"The whole package consists just 1.5KB minified + gzipped JavaScript which can be plugged anywhere, in the browser or in node*."),o.b.h("hr",null),o.b.h("h2",{class:"td-lead"},"Minimal and expressive"),o.b.h("p",{class:"lead"},"TeddyTags has an API which looks minimal but is expressive. Think big, but write small."),o.b.h("ul",null,o.b.h("li",{class:"lead"},"Defining a custom element"),o.b.h(y.a,{lang:"js",code:"new TeddyTags('myCustomElement').set('h1')"}),o.b.h("li",{class:"lead"},"Defining an awesome Component"),o.b.h(y.a,{lang:"jsx",code:["class MyComponent extends Component{","   constructor(props){","     super(props)","   }","   render(){","     return (","       <h1>Hello, Component!</h1>","     )","   }"," }"].join("\n")})),o.b.h("hr",null),o.b.h("h1",{class:"td-title"},"Statistics"),o.b.h("p",{class:"td-lead stats"},"TeddyTags has been downloaded ",o.b.h("span",{class:"npm-count"})," times today from NPM."),o.b.h("h1",{class:"td-title"},"Ready to take over the world??"),o.b.h("p",{class:"lead"},"Head straight to the"," ",o.b.h("a",{href:"/docs/getting-started"},"Getting Started")," section or get your hands dirty by playing with TeddyTags in the"," ",o.b.h("a",{href:"/repl"},"REPL"),".")))}}])&&b(n.prototype,r),i&&b(n,i),t}(o.b.Component)},134:function(e,t,n){"use strict";n.r(t),function(e){n(13),n(15),n(16),n(11),n(17),n(18),n(19),n(20),n(21),n(22),n(23);var t=n(0),o=n(133),r=n(12);n(62),n(25),n(63);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),a(this,u(n).call(this,e))}var i,s,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,e),i=n,(s=[{key:"render",value:function(){return t.b.h("main",null,t.b.h(r.a,{activeLink:"home"}),t.b.h(o.a,null))}}])&&c(i.prototype,s),y&&c(i,y),n}(t.a);t.b.render(t.b.h(s,null),document.querySelector("#root")),e.h=t.b.h,e.Component=t.b.Component,e.render=t.b.render,e.TeddyTags=t.b.TeddyTags,"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js")}))}.call(this,n(4))},161:function(e,t,n){},166:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},87:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return y}));n(13),n(15),n(16),n(80),n(11),n(17),n(18),n(19),n(20),n(21),n(22),n(81),n(23);var o=n(0),r=n(131),i=n.n(r);n(31),n(46),n(47),n(163),n(164),n(165);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}e.Prism=i.a;var y=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,l(t).call(this,e))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"CopyToClipboard",value:function(e){if(window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),document.selection)(t=document.body.createTextRange()).moveToElementText(e),t.select().createTextRange(),document.execCommand("copy");else if(window.getSelection){var t;(t=document.createRange()).selectNode(e),window.getSelection().addRange(t),document.execCommand("copy")}}},{key:"componentDidMount",value:function(e){var t=this,n=e.outerHTML;e.outerHTML='<div id="codewrapper">\n    <button id="copybutton">Copy</button>\n    '.concat(n,"\n    </div>"),e.querySelectorAll("#copybutton").forEach((function(e){e.addEventListener("click",(function(){var n=e.nextSibling;t.CopyToClipboard(n)}))}))}},{key:"render",value:function(){return o.b.h("pre",{class:"language-".concat(this.props.lang),style:"position: relative;"},o.b.h("code",null,this.props.code))}}])&&a(n.prototype,r),i&&a(n,i),t}(o.b.Component)}).call(this,n(4))}});