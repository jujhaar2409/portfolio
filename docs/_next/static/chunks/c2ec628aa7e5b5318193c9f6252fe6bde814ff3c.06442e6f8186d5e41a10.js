(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"9VHL":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("wEEd"),i=n("Pumc"),s=n.n(i),l=a.a.createElement;t.a=function(e){var t=Object(o.b)({config:{mass:4,tension:200,fricton:40},opacity:1,transform:"translateY(0px)",from:{opacity:.3,transform:"translateY(20px)"}});return l(o.a.div,{className:s.a.Div,style:t},e.children)}},Fp9w:function(e,t,n){e.exports={container:"Layout_container__2FvzS",bodycontainer:"Layout_bodycontainer__2GX_x",logo:"Layout_logo__2hR1F",pagetitle:"Layout_pagetitle__28Xl6"}},Pumc:function(e,t,n){e.exports={Div:"InfoCard_Div__1lji0"}},YFqc:function(e,t,n){e.exports=n("cTJO")},aCC4:function(e,t,n){e.exports={LinkContainer:"NavItems_LinkContainer__1Efjp"}},cSXg:function(e,t,n){e.exports={main:"DropdownLogo_main__3gikV",span1:"DropdownLogo_span1__3_Age",open:"DropdownLogo_open__3DnXv",span2:"DropdownLogo_span2__28ghu",span3:"DropdownLogo_span3__3p2JO"}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),s=n("elyg"),l=n("nOHt"),c=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function h(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],c=a[1],p=(0,l.useRouter)(),g=p&&p.pathname||"/",m=i.default.useMemo((function(){var t=(0,s.resolveHref)(g,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(g,e.as):o||a}}),[g,e.href,e.as]),y=m.href,v=m.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,s.isLocalURL)(y)&&!d[y+"%"+v])return f(o,(function(){h(p,y,v)}))}),[t,o,y,v,p]);var b=e.children,w=e.replace,k=e.shallow,O=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var j=i.Children.only(b),E={ref:function(e){e&&c(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,y,v,w,k,O)}};return t&&(E.onMouseEnter=function(e){(0,s.isLocalURL)(y)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),h(p,y,v,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(E.href=(0,s.addBasePath)((0,s.addLocale)(v,p&&p.locale,p&&p.defaultLocale))),i.default.cloneElement(j,E)};t.default=p},lO0m:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Fp9w"),i=n.n(o),s=n("cSXg"),l=n.n(s),c=a.a.createElement,u=function(e){var t=e.clicked,n=e.isOpen;return c("div",{className:l.a.main+(n?" open":""),ref:e.dropdownLogoRef,onClick:t},c("p",{className:[l.a.span1,n?l.a.open:""].join(" ")}),c("p",{className:[l.a.span2,n?l.a.open:""].join(" ")}),c("p",{className:[l.a.span3,n?l.a.open:""].join(" ")}))},d=n("YFqc"),f=n.n(d),h=n("pGXY"),p=n.n(h),g=a.a.createElement,m=function(e){var t=Object(r.useState)(!1),n=t[0],a=t[1];return Object(r.useEffect)((function(){var t=window.location.pathname.split("/"),n=t[t.length-1];""===n&&"home"===e.children.toLowerCase()||n===e.children.toLowerCase()?a(!0):a(!1)}),[]),g(f.a,{href:"Home"!=e.children?"/"+e.children.toLowerCase():"/"},g("a",{className:n?p.a.selected:"",onClick:e.clicked},e.children))},y=function(e){return g("div",{ref:e.dropdownRef,className:[p.a.main,e.isOpen?p.a.open:""].join(" ")},g("h1",null,"Find Your Way Around..."),g("div",{className:p.a.linkcontainer},g(m,{clicked:e.clicked},"Home"),g(m,{clicked:e.clicked},"Projects"),g(m,{clicked:e.clicked},"Skills"),g(m,{clicked:e.clicked},"Contact")))},v=n("aCC4"),b=n.n(v),w=a.a.createElement,k=function(e){var t=Object(r.useState)(""),n=t[0],a=t[1];return Object(r.useEffect)((function(){var t=window.location.pathname.split("/"),n=t[t.length-1];""===n&&"home"===e.children.toLowerCase()||n===e.children.toLowerCase()?a("selected"):a("")}),[]),w(f.a,{href:"Home"!=e.children?"/"+e.children.toLowerCase():"/"},w("a",{className:n,onClick:e.clicked},e.children))},O=function(){return w("div",{className:b.a.LinkContainer},w(k,null,"Home"),w(k,null,"Projects"),w(k,null,"Skills"),w(k,null,"Contact"))},j=a.a.createElement;t.a=function(e){var t=Object(r.useState)(!1),n=t[0],o=t[1],s=Object(r.useRef)(),l=Object(r.useRef)(),c=function(){o((function(e){return!e}))};return Object(r.useEffect)((function(){function e(e){s.current.contains(e.target)||l.current.contains(e.target)||o(!1)}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[s]),j(a.a.Fragment,null,j("div",{className:i.a.container},j("h1",{className:i.a.logo},"JS"),j(O,null),j(u,{dropdownLogoRef:l,clicked:c,isOpen:n})),j(y,{dropdownRef:s,isOpen:n,clicked:c}),j("h1",{className:i.a.pagetitle},e.title),j("div",{className:i.a.bodycontainer},e.children))}},pGXY:function(e,t,n){e.exports={main:"Dropdown_main__2j4U4",open:"Dropdown_open__NOjbT",selected:"Dropdown_selected__3SWe5",linkcontainer:"Dropdown_linkcontainer__JJUnF"}},wEEd:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return ye})),n.d(t,"b",(function(){return $})),n.d(t,"c",(function(){return H}));var o=n("q1tI"),i=n.n(o);const s={arr:Array.isArray,obj:e=>"[object Object]"===Object.prototype.toString.call(e),fun:e=>"function"===typeof e,str:e=>"string"===typeof e,num:e=>"number"===typeof e,und:e=>void 0===e,nul:e=>null===e,set:e=>e instanceof Set,map:e=>e instanceof Map,equ(e,t){if(typeof e!==typeof t)return!1;if(s.str(e)||s.num(e))return e===t;if(s.obj(e)&&s.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;let n;for(n in e)if(!(n in t))return!1;for(n in t)if(e[n]!==t[n])return!1;return!s.und(n)||e===t}};function l(){const e=Object(o.useState)(!1)[1];return Object(o.useCallback)(()=>e(e=>!e),[])}function c(e,t){return s.und(e)||s.nul(e)?t:e}function u(e){return s.und(e)?[]:s.arr(e)?e:[e]}function d(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return s.fun(e)?e(...n):e}function f(e){const t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,a(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(s.und(t))return r({to:t},e);const n=Object.keys(e).reduce((n,a)=>s.und(t[a])?r({},n,{[a]:e[a]}):n,{});return r({to:t},n)}class h{constructor(){this.payload=void 0,this.children=[]}getAnimatedValue(){return this.getValue()}getPayload(){return this.payload||this}attach(){}detach(){}getChildren(){return this.children}addChild(e){0===this.children.length&&this.attach(),this.children.push(e)}removeChild(e){const t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}class p extends h{constructor(){super(...arguments),this.payload=[],this.attach=()=>this.payload.forEach(e=>e instanceof h&&e.addChild(this)),this.detach=()=>this.payload.forEach(e=>e instanceof h&&e.removeChild(this))}}class g extends h{constructor(){super(...arguments),this.payload={},this.attach=()=>Object.values(this.payload).forEach(e=>e instanceof h&&e.addChild(this)),this.detach=()=>Object.values(this.payload).forEach(e=>e instanceof h&&e.removeChild(this))}getValue(e){void 0===e&&(e=!1);const t={};for(const n in this.payload){const r=this.payload[n];(!e||r instanceof h)&&(t[n]=r instanceof h?r[e?"getAnimatedValue":"getValue"]():r)}return t}getAnimatedValue(){return this.getValue(!0)}}let m,y;function v(e,t){m={fn:e,transform:t}}function b(e){y=e}let w,k=e=>"undefined"!==typeof window?window.requestAnimationFrame(e):-1;function O(e){w=e}let j,E=()=>Date.now();function x(e){j=e}let V,_,C=e=>e.current;function L(e){V=e}class A extends g{constructor(e,t){super(),this.update=void 0,this.payload=e.style?r({},e,{style:V(e.style)}):e,this.update=t,this.attach()}}let R=!1;const S=new Set,P=()=>{if(!R)return!1;let e=E();for(let t of S){let n=!1;for(let r=0;r<t.configs.length;r++){let a,o,i=t.configs[r];for(let t=0;t<i.animatedValues.length;t++){let r=i.animatedValues[t];if(r.done)continue;let s=i.fromValues[t],l=i.toValues[t],c=r.lastPosition,u=l instanceof h,d=Array.isArray(i.initialVelocity)?i.initialVelocity[t]:i.initialVelocity;if(u&&(l=l.getValue()),i.immediate)r.setValue(l),r.done=!0;else if("string"!==typeof s&&"string"!==typeof l){if(void 0!==i.duration)c=s+i.easing((e-r.startTime)/i.duration)*(l-s),a=e>=r.startTime+i.duration;else if(i.decay)c=s+d/(1-.998)*(1-Math.exp(-(1-.998)*(e-r.startTime))),a=Math.abs(r.lastPosition-c)<.1,a&&(l=c);else{o=void 0!==r.lastTime?r.lastTime:e,d=void 0!==r.lastVelocity?r.lastVelocity:i.initialVelocity,e>o+64&&(o=e);let t=Math.floor(e-o);for(let e=0;e<t;++e){d+=1*((-i.tension*(c-l)+-i.friction*d)/i.mass)/1e3,c+=1*d/1e3}let n=!(!i.clamp||0===i.tension)&&(s<l?c>l:c<l),u=Math.abs(d)<=i.precision,f=0===i.tension||Math.abs(l-c)<=i.precision;a=n||u&&f,r.lastVelocity=d,r.lastTime=e}u&&!i.toValues[t].done&&(a=!1),a?(r.value!==l&&(c=l),r.done=!0):n=!0,r.setValue(c),r.lastPosition=c}else r.setValue(l),r.done=!0}t.props.onFrame&&(t.values[i.name]=i.interpolation.getValue())}t.props.onFrame&&t.props.onFrame(t.values),n||(S.delete(t),t.stop(!0))}return S.size?_?_():k(P):R=!1,R};function q(e,t,n){if("function"===typeof e)return e;if(Array.isArray(e))return q({range:e,output:t,extrapolate:n});if(w&&"string"===typeof e.output[0])return w(e);const r=e,a=r.output,o=r.range||[0,1],i=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,a,o,i,s,l){let c=l?l(e):e;if(c<t){if("identity"===i)return c;"clamp"===i&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===a)return r;if(t===n)return e<=t?r:a;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:a===1/0?c+=r:c=c*(a-r)+r;return c}(e,o[t],o[t+1],a[t],a[t+1],l,i,s,r.map)}}class F extends p{constructor(e,t,n,r){super(),this.calc=void 0,this.payload=e instanceof p&&!(e instanceof F)?e.getPayload():Array.isArray(e)?e:[e],this.calc=q(t,n,r)}getValue(){return this.calc(...this.payload.map(e=>e.getValue()))}updateConfig(e,t,n){this.calc=q(e,t,n)}interpolate(e,t,n){return new F(this,e,t,n)}}class M extends h{constructor(e){var t;super(),t=this,this.animatedStyles=new Set,this.value=void 0,this.startPosition=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.startTime=void 0,this.lastTime=void 0,this.done=!1,this.setValue=function(e,n){void 0===n&&(n=!0),t.value=e,n&&t.flush()},this.value=e,this.startPosition=e,this.lastPosition=e}flush(){0===this.animatedStyles.size&&function e(t,n){"update"in t?n.add(t):t.getChildren().forEach(t=>e(t,n))}(this,this.animatedStyles),this.animatedStyles.forEach(e=>e.update())}clearStyles(){this.animatedStyles.clear()}getValue(){return this.value}interpolate(e,t,n){return new F(this,e,t,n)}}class T extends p{constructor(e){super(),this.payload=e.map(e=>new M(e))}setValue(e,t){void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach((e,n)=>this.payload[n].setValue(e,t)):this.payload.forEach(n=>n.setValue(e,t))}getValue(){return this.payload.map(e=>e.getValue())}interpolate(e,t){return new F(this,e,t)}}let N=0;class I{constructor(){this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=()=>this.interpolations,this.id=N++}update(e){if(!e)return this;const t=f(e),n=t.delay,o=void 0===n?0:n,i=t.to,l=a(t,["delay","to"]);if(s.arr(i)||s.fun(i))this.queue.push(r({},l,{delay:o,to:i}));else if(i){let e={};Object.entries(i).forEach(t=>{let n=t[0];const a=r({to:{[n]:t[1]},delay:d(o,n)},l),i=e[a.delay]&&e[a.delay].to;e[a.delay]=r({},e[a.delay],a,{to:r({},i,a.to)})}),this.queue=Object.values(e)}return this.queue=this.queue.sort((e,t)=>e.delay-t.delay),this.diff(l),this}start(e){if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach(e=>{let t=e.from,n=void 0===t?{}:t,a=e.to,o=void 0===a?{}:a;s.obj(n)&&(this.merged=r({},n,this.merged)),s.obj(o)&&(this.merged=r({},this.merged,o))});const t=this.local=++this.guid,n=this.localQueue=this.queue;this.queue=[],n.forEach((r,o)=>{let i=r.delay,l=a(r,["delay"]);const c=r=>{o===n.length-1&&t===this.guid&&r&&(this.idle=!0,this.props.onRest&&this.props.onRest(this.merged)),e&&e()};let u=s.arr(l.to)||s.fun(l.to);i?setTimeout(()=>{t===this.guid&&(u?this.runAsync(l,c):this.diff(l).start(c))},i):u?this.runAsync(l,c):this.diff(l).start(c)})}else s.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,S.has(t)||S.add(t),R||(R=!0,k(_||P));var t;return this}stop(e){return this.listeners.forEach(t=>t(e)),this.listeners=[],this}pause(e){var t;return this.stop(!0),e&&(t=this,S.has(t)&&S.delete(t)),this}runAsync(e,t){var n=this;e.delay;let o=a(e,["delay"]);const i=this.local;let l=Promise.resolve(void 0);if(s.arr(o.to))for(let a=0;a<o.to.length;a++){const e=a,t=r({},o,f(o.to[e]));s.arr(t.config)&&(t.config=t.config[e]),l=l.then(()=>{if(i===this.guid)return new Promise(e=>this.diff(t).start(e))})}else if(s.fun(o.to)){let e,t=0;l=l.then(()=>o.to(n=>{const a=r({},o,f(n));if(s.arr(a.config)&&(a.config=a.config[t]),t++,i===this.guid)return e=new Promise(e=>this.diff(a).start(e))},(function(e){return void 0===e&&(e=!0),n.stop(e)})).then(()=>e))}l.then(t)}diff(e){this.props=r({},this.props,e);let t=this.props,n=t.from,a=void 0===n?{}:n,o=t.to,i=void 0===o?{}:o,l=t.config,f=void 0===l?{}:l,h=t.reverse,p=t.attach,g=t.reset,m=t.immediate;if(h){var v=[i,a];a=v[0],i=v[1]}this.merged=r({},a,this.merged,i),this.hasChanged=!1;let b=p&&p(this);if(this.animations=Object.entries(this.merged).reduce((e,t)=>{let n=t[0],o=t[1],i=e[n]||{};const l=s.num(o),h=s.str(o)&&!o.startsWith("#")&&!/\d/.test(o)&&!y[o],p=s.arr(o),v=!l&&!p&&!h;let k=s.und(a[n])?o:a[n],O=l||p||h?o:1,j=d(f,n);b&&(O=b.animations[n].parent);let x,V=i.parent,_=i.interpolation,C=u(b?O.getPayload():O),L=o;v&&(L=w({range:[0,1],output:[o,o]})(1));let A=_&&_.getValue();const R=!s.und(V)&&i.animatedValues.some(e=>!e.done),S=!s.equ(L,A),P=!s.equ(L,i.previous),q=!s.equ(j,i.config);if(g||P&&S||q){if(l||h)V=_=i.parent||new M(k);else if(p)V=_=i.parent||new T(k);else if(v){let e=i.interpolation&&i.interpolation.calc(i.parent.value);e=void 0===e||g?k:e,i.parent?(V=i.parent,V.setValue(0,!1)):V=new M(0);const t={output:[e,o]};i.interpolation?(_=i.interpolation,i.interpolation.updateConfig(t)):_=V.interpolate(t)}return C=u(b?O.getPayload():O),x=u(V.getPayload()),g&&!v&&V.setValue(k,!1),this.hasChanged=!0,x.forEach(e=>{e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=R?e.lastVelocity:void 0,e.lastTime=R?e.lastTime:void 0,e.startTime=E(),e.done=!1,e.animatedStyles.clear()}),d(m,n)&&V.setValue(v?O:o,!1),r({},e,{[n]:r({},i,{name:n,parent:V,interpolation:_,animatedValues:x,toValues:C,previous:L,config:j,fromValues:u(V.getValue()),immediate:d(m,n),initialVelocity:c(j.velocity,0),clamp:c(j.clamp,!1),precision:c(j.precision,.01),tension:c(j.tension,170),friction:c(j.friction,26),mass:c(j.mass,1),duration:j.duration,easing:c(j.easing,e=>e),decay:j.decay})})}return S?e:(v&&(V.setValue(1,!1),_.updateConfig({output:[L,L]})),V.done=!0,this.hasChanged=!0,r({},e,{[n]:r({},e[n],{previous:L})}))},this.animations),this.hasChanged){this.configs=Object.values(this.animations),this.values={},this.interpolations={};for(let e in this.animations)this.interpolations[e]=this.animations[e].interpolation,this.values[e]=this.animations[e].interpolation.getValue()}return this}destroy(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}const D=(e,t)=>{const n=Object(o.useRef)(!1),r=Object(o.useRef)(),a=s.fun(t),i=Object(o.useMemo)(()=>{let n;return r.current&&(r.current.map(e=>e.destroy()),r.current=void 0),[new Array(e).fill().map((e,r)=>{const o=new I,i=a?d(t,r,o):t[r];return 0===r&&(n=i.ref),o.update(i),n||o.start(),o}),n]},[e]),l=i[0],c=i[1];r.current=l;Object(o.useImperativeHandle)(c,()=>({start:()=>Promise.all(r.current.map(e=>new Promise(t=>e.start(t)))),stop:e=>r.current.forEach(t=>t.stop(e)),get controllers(){return r.current}}));const u=Object(o.useMemo)(()=>e=>r.current.map((t,n)=>{t.update(a?d(e,n,t):e[n]),c||t.start()}),[e]);Object(o.useEffect)(()=>{n.current?a||u(t):c||r.current.forEach(e=>e.start())}),Object(o.useEffect)(()=>(n.current=!0,()=>r.current.forEach(e=>e.destroy())),[]);const f=r.current.map(e=>e.getValues());return a?[f,u,e=>r.current.forEach(t=>t.pause(e))]:f},$=e=>{const t=s.fun(e),n=D(1,t?e:[e]),r=n[0],a=n[1],o=n[2];return t?[r[0],a,o]:r},H=(e,t)=>{const n=Object(o.useRef)(!1),a=s.fun(t),i=d(t),l=Object(o.useRef)(),c=D(e,(e,t)=>(0===e&&(l.current=[]),l.current.push(t),r({},i,{config:d(i.config,e),attach:e>0&&(()=>l.current[e-1])}))),u=c[0],f=c[1],h=c[2],p=Object(o.useMemo)(()=>e=>f((t,n)=>{e.reverse;const a=e.reverse?t+1:t-1,o=l.current[a];return r({},e,{config:d(e.config||i.config,t),attach:o&&(()=>o)})}),[e,i.reverse]);return Object(o.useEffect)(()=>{n.current&&!a&&p(t)}),Object(o.useEffect)(()=>{n.current=!0},[]),a?[u,p,h]:u};class z extends g{constructor(e){void 0===e&&(e={}),super(),!e.transform||e.transform instanceof h||(e=m.transform(e)),this.payload=e}}const J={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},G="[-+]?\\d*\\.?\\d+";function U(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const W=new RegExp("rgb"+U(G,G,G)),X=new RegExp("rgba"+U(G,G,G,G)),Y=new RegExp("hsl"+U(G,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%")),K=new RegExp("hsla"+U(G,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%",G)),Q=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,B=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Z=/^#([0-9a-fA-F]{6})$/,ee=/^#([0-9a-fA-F]{8})$/;function te(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ne(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,a=2*n-r,o=te(a,r,e+1/3),i=te(a,r,e),s=te(a,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*i)<<16|Math.round(255*s)<<8}function re(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ae(e){return(parseFloat(e)%360+360)%360/360}function oe(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ie(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function se(e){let t=function(e){let t;return"number"===typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Z.exec(e))?parseInt(t[1]+"ff",16)>>>0:J.hasOwnProperty(e)?J[e]:(t=W.exec(e))?(re(t[1])<<24|re(t[2])<<16|re(t[3])<<8|255)>>>0:(t=X.exec(e))?(re(t[1])<<24|re(t[2])<<16|re(t[3])<<8|oe(t[4]))>>>0:(t=Q.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ee.exec(e))?parseInt(t[1],16)>>>0:(t=B.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Y.exec(e))?(255|ne(ae(t[1]),ie(t[2]),ie(t[3])))>>>0:(t=K.exec(e))?(ne(ae(t[1]),ie(t[2]),ie(t[3]))|oe(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const le=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ce=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ue=new RegExp(`(${Object.keys(J).join("|")})`,"g");let de={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const fe=["Webkit","Ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||de.hasOwnProperty(e)&&de[e]?(""+t).trim():t+"px"}de=Object.keys(de).reduce((e,t)=>(fe.forEach(n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t]),e),de);const pe={};L(e=>new z(e)),x("div"),O(e=>{const t=e.output.map(e=>e.replace(ce,se)).map(e=>e.replace(ue,se)),n=t[0].match(le).map(()=>[]);t.forEach(e=>{e.match(le).forEach((e,t)=>n[t].push(+e))});const a=t[0].match(le).map((t,a)=>q(r({},e,{output:n[a]})));return e=>{let n=0;return t[0].replace(le,()=>a[n++](e)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,(e,t,n,r,a)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`)}}),b(J),v((e,t)=>{if(!e.nodeType||void 0===e.setAttribute)return!1;{const o=t.style,i=t.children,s=t.scrollTop,l=t.scrollLeft,c=a(t,["style","children","scrollTop","scrollLeft"]),u="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;void 0!==s&&(e.scrollTop=s),void 0!==l&&(e.scrollLeft=l),void 0!==i&&(e.textContent=i);for(let t in o)if(o.hasOwnProperty(t)){var n=0===t.indexOf("--"),r=he(t,o[t],n);"float"===t&&(t="cssFloat"),n?e.style.setProperty(t,r):e.style[t]=r}for(let t in c){const n=u?t:pe[t]||(pe[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase()));"undefined"!==typeof e.getAttribute(n)&&e.setAttribute(n,c[t])}}},e=>e);var ge,me;const ye=(ge=e=>Object(o.forwardRef)((t,n)=>{const c=l(),u=Object(o.useRef)(!0),d=Object(o.useRef)(null),f=Object(o.useRef)(null),h=Object(o.useCallback)(e=>{const t=d.current;d.current=new A(e,()=>{let e=!1;f.current&&(e=m.fn(f.current,d.current.getAnimatedValue())),f.current&&!1!==e||c()}),t&&t.detach()},[]);Object(o.useEffect)(()=>()=>{u.current=!1,d.current&&d.current.detach()},[]),Object(o.useImperativeHandle)(n,()=>C(f,u,c)),h(t);const p=d.current.getValue(),g=(p.scrollTop,p.scrollLeft,a(p,["scrollTop","scrollLeft"])),y=(v=e,!s.fun(v)||v.prototype instanceof i.a.Component?e=>f.current=function(e,t){return t&&(s.fun(t)?t(e):s.obj(t)&&(t.current=e)),e}(e,n):void 0);var v;return i.a.createElement(e,r({},g,{ref:y}))}),void 0===(me=!1)&&(me=!0),e=>(s.arr(e)?e:Object.keys(e)).reduce((e,t)=>{const n=me?t[0].toLowerCase()+t.substring(1):t;return e[n]=ge(n),e},ge))(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"])}}]);