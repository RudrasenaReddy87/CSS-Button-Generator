(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const v of d.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function Js(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var fs={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function Zv(){if(i1)return Pl;i1=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,f,d){var v=null;if(d!==void 0&&(v=""+d),f.key!==void 0&&(v=""+f.key),"key"in f){d={};for(var p in f)p!=="key"&&(d[p]=f[p])}else d=f;return f=d.ref,{$$typeof:l,type:o,key:v,ref:f!==void 0?f:null,props:d}}return Pl.Fragment=r,Pl.jsx=s,Pl.jsxs=s,Pl}var u1;function Kv(){return u1||(u1=1,fs.exports=Zv()),fs.exports}var y=Kv(),cs={exports:{}},nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function Jv(){if(r1)return nt;r1=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),v=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),T=Symbol.iterator;function M(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,L={};function Y(x,H,Q){this.props=x,this.context=H,this.refs=L,this.updater=Q||U}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,H){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,H,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function B(){}B.prototype=Y.prototype;function J(x,H,Q){this.props=x,this.context=H,this.refs=L,this.updater=Q||U}var Z=J.prototype=new B;Z.constructor=J,q(Z,Y.prototype),Z.isPureReactComponent=!0;var ct=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},Tt=Object.prototype.hasOwnProperty;function zt(x,H,Q,G,W,dt){return Q=dt.ref,{$$typeof:l,type:x,key:H,ref:Q!==void 0?Q:null,props:dt}}function xt(x,H){return zt(x.type,H,void 0,void 0,void 0,x.props)}function Ot(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function ie(x){var H={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Q){return H[Q]})}var pe=/\/+/g;function Kt(x,H){return typeof x=="object"&&x!==null&&x.key!=null?ie(""+x.key):H.toString(36)}function La(){}function ka(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(La,La):(x.status="pending",x.then(function(H){x.status==="pending"&&(x.status="fulfilled",x.value=H)},function(H){x.status==="pending"&&(x.status="rejected",x.reason=H)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Jt(x,H,Q,G,W){var dt=typeof x;(dt==="undefined"||dt==="boolean")&&(x=null);var at=!1;if(x===null)at=!0;else switch(dt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(x.$$typeof){case l:case r:at=!0;break;case S:return at=x._init,Jt(at(x._payload),H,Q,G,W)}}if(at)return W=W(x),at=G===""?"."+Kt(x,0):G,ct(W)?(Q="",at!=null&&(Q=at.replace(pe,"$&/")+"/"),Jt(W,H,Q,"",function(sa){return sa})):W!=null&&(Ot(W)&&(W=xt(W,Q+(W.key==null||x&&x.key===W.key?"":(""+W.key).replace(pe,"$&/")+"/")+at)),H.push(W)),1;at=0;var ue=G===""?".":G+":";if(ct(x))for(var Nt=0;Nt<x.length;Nt++)G=x[Nt],dt=ue+Kt(G,Nt),at+=Jt(G,H,Q,dt,W);else if(Nt=M(x),typeof Nt=="function")for(x=Nt.call(x),Nt=0;!(G=x.next()).done;)G=G.value,dt=ue+Kt(G,Nt++),at+=Jt(G,H,Q,dt,W);else if(dt==="object"){if(typeof x.then=="function")return Jt(ka(x),H,Q,G,W);throw H=String(x),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return at}function j(x,H,Q){if(x==null)return x;var G=[],W=0;return Jt(x,G,"","",function(dt){return H.call(Q,dt,W++)}),G}function X(x){if(x._status===-1){var H=x._result;H=H(),H.then(function(Q){(x._status===0||x._status===-1)&&(x._status=1,x._result=Q)},function(Q){(x._status===0||x._status===-1)&&(x._status=2,x._result=Q)}),x._status===-1&&(x._status=0,x._result=H)}if(x._status===1)return x._result.default;throw x._result}var tt=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function St(){}return nt.Children={map:j,forEach:function(x,H,Q){j(x,function(){H.apply(this,arguments)},Q)},count:function(x){var H=0;return j(x,function(){H++}),H},toArray:function(x){return j(x,function(H){return H})||[]},only:function(x){if(!Ot(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},nt.Component=Y,nt.Fragment=s,nt.Profiler=f,nt.PureComponent=J,nt.StrictMode=o,nt.Suspense=b,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,nt.__COMPILER_RUNTIME={__proto__:null,c:function(x){return $.H.useMemoCache(x)}},nt.cache=function(x){return function(){return x.apply(null,arguments)}},nt.cloneElement=function(x,H,Q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var G=q({},x.props),W=x.key,dt=void 0;if(H!=null)for(at in H.ref!==void 0&&(dt=void 0),H.key!==void 0&&(W=""+H.key),H)!Tt.call(H,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&H.ref===void 0||(G[at]=H[at]);var at=arguments.length-2;if(at===1)G.children=Q;else if(1<at){for(var ue=Array(at),Nt=0;Nt<at;Nt++)ue[Nt]=arguments[Nt+2];G.children=ue}return zt(x.type,W,void 0,void 0,dt,G)},nt.createContext=function(x){return x={$$typeof:v,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},nt.createElement=function(x,H,Q){var G,W={},dt=null;if(H!=null)for(G in H.key!==void 0&&(dt=""+H.key),H)Tt.call(H,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(W[G]=H[G]);var at=arguments.length-2;if(at===1)W.children=Q;else if(1<at){for(var ue=Array(at),Nt=0;Nt<at;Nt++)ue[Nt]=arguments[Nt+2];W.children=ue}if(x&&x.defaultProps)for(G in at=x.defaultProps,at)W[G]===void 0&&(W[G]=at[G]);return zt(x,dt,void 0,void 0,null,W)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(x){return{$$typeof:p,render:x}},nt.isValidElement=Ot,nt.lazy=function(x){return{$$typeof:S,_payload:{_status:-1,_result:x},_init:X}},nt.memo=function(x,H){return{$$typeof:m,type:x,compare:H===void 0?null:H}},nt.startTransition=function(x){var H=$.T,Q={};$.T=Q;try{var G=x(),W=$.S;W!==null&&W(Q,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(St,tt)}catch(dt){tt(dt)}finally{$.T=H}},nt.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},nt.use=function(x){return $.H.use(x)},nt.useActionState=function(x,H,Q){return $.H.useActionState(x,H,Q)},nt.useCallback=function(x,H){return $.H.useCallback(x,H)},nt.useContext=function(x){return $.H.useContext(x)},nt.useDebugValue=function(){},nt.useDeferredValue=function(x,H){return $.H.useDeferredValue(x,H)},nt.useEffect=function(x,H,Q){var G=$.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(x,H)},nt.useId=function(){return $.H.useId()},nt.useImperativeHandle=function(x,H,Q){return $.H.useImperativeHandle(x,H,Q)},nt.useInsertionEffect=function(x,H){return $.H.useInsertionEffect(x,H)},nt.useLayoutEffect=function(x,H){return $.H.useLayoutEffect(x,H)},nt.useMemo=function(x,H){return $.H.useMemo(x,H)},nt.useOptimistic=function(x,H){return $.H.useOptimistic(x,H)},nt.useReducer=function(x,H,Q){return $.H.useReducer(x,H,Q)},nt.useRef=function(x){return $.H.useRef(x)},nt.useState=function(x){return $.H.useState(x)},nt.useSyncExternalStore=function(x,H,Q){return $.H.useSyncExternalStore(x,H,Q)},nt.useTransition=function(){return $.H.useTransition()},nt.version="19.1.0",nt}var o1;function $s(){return o1||(o1=1,cs.exports=Jv()),cs.exports}var C=$s();const nh=Js(C);var ds={exports:{}},Il={},hs={exports:{}},ms={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function $v(){return s1||(s1=1,function(l){function r(j,X){var tt=j.length;j.push(X);t:for(;0<tt;){var St=tt-1>>>1,x=j[St];if(0<f(x,X))j[St]=X,j[tt]=x,tt=St;else break t}}function s(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var X=j[0],tt=j.pop();if(tt!==X){j[0]=tt;t:for(var St=0,x=j.length,H=x>>>1;St<H;){var Q=2*(St+1)-1,G=j[Q],W=Q+1,dt=j[W];if(0>f(G,tt))W<x&&0>f(dt,G)?(j[St]=dt,j[W]=tt,St=W):(j[St]=G,j[Q]=tt,St=Q);else if(W<x&&0>f(dt,tt))j[St]=dt,j[W]=tt,St=W;else break t}}return X}function f(j,X){var tt=j.sortIndex-X.sortIndex;return tt!==0?tt:j.id-X.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var v=Date,p=v.now();l.unstable_now=function(){return v.now()-p}}var b=[],m=[],S=1,T=null,M=3,U=!1,q=!1,L=!1,Y=!1,B=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ct(j){for(var X=s(m);X!==null;){if(X.callback===null)o(m);else if(X.startTime<=j)o(m),X.sortIndex=X.expirationTime,r(b,X);else break;X=s(m)}}function $(j){if(L=!1,ct(j),!q)if(s(b)!==null)q=!0,Tt||(Tt=!0,Kt());else{var X=s(m);X!==null&&Jt($,X.startTime-j)}}var Tt=!1,zt=-1,xt=5,Ot=-1;function ie(){return Y?!0:!(l.unstable_now()-Ot<xt)}function pe(){if(Y=!1,Tt){var j=l.unstable_now();Ot=j;var X=!0;try{t:{q=!1,L&&(L=!1,J(zt),zt=-1),U=!0;var tt=M;try{e:{for(ct(j),T=s(b);T!==null&&!(T.expirationTime>j&&ie());){var St=T.callback;if(typeof St=="function"){T.callback=null,M=T.priorityLevel;var x=St(T.expirationTime<=j);if(j=l.unstable_now(),typeof x=="function"){T.callback=x,ct(j),X=!0;break e}T===s(b)&&o(b),ct(j)}else o(b);T=s(b)}if(T!==null)X=!0;else{var H=s(m);H!==null&&Jt($,H.startTime-j),X=!1}}break t}finally{T=null,M=tt,U=!1}X=void 0}}finally{X?Kt():Tt=!1}}}var Kt;if(typeof Z=="function")Kt=function(){Z(pe)};else if(typeof MessageChannel<"u"){var La=new MessageChannel,ka=La.port2;La.port1.onmessage=pe,Kt=function(){ka.postMessage(null)}}else Kt=function(){B(pe,0)};function Jt(j,X){zt=B(function(){j(l.unstable_now())},X)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(j){j.callback=null},l.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xt=0<j?Math.floor(1e3/j):5},l.unstable_getCurrentPriorityLevel=function(){return M},l.unstable_next=function(j){switch(M){case 1:case 2:case 3:var X=3;break;default:X=M}var tt=M;M=X;try{return j()}finally{M=tt}},l.unstable_requestPaint=function(){Y=!0},l.unstable_runWithPriority=function(j,X){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var tt=M;M=j;try{return X()}finally{M=tt}},l.unstable_scheduleCallback=function(j,X,tt){var St=l.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?St+tt:St):tt=St,j){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=tt+x,j={id:S++,callback:X,priorityLevel:j,startTime:tt,expirationTime:x,sortIndex:-1},tt>St?(j.sortIndex=tt,r(m,j),s(b)===null&&j===s(m)&&(L?(J(zt),zt=-1):L=!0,Jt($,tt-St))):(j.sortIndex=x,r(b,j),q||U||(q=!0,Tt||(Tt=!0,Kt()))),j},l.unstable_shouldYield=ie,l.unstable_wrapCallback=function(j){var X=M;return function(){var tt=M;M=X;try{return j.apply(this,arguments)}finally{M=tt}}}}(ms)),ms}var f1;function Fv(){return f1||(f1=1,hs.exports=$v()),hs.exports}var vs={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function Wv(){if(c1)return Wt;c1=1;var l=$s();function r(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(b,m,S){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:T==null?null:""+T,children:b,containerInfo:m,implementation:S}}var v=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Wt.createPortal=function(b,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return d(b,m,null,S)},Wt.flushSync=function(b){var m=v.T,S=o.p;try{if(v.T=null,o.p=2,b)return b()}finally{v.T=m,o.p=S,o.d.f()}},Wt.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(b,m))},Wt.prefetchDNS=function(b){typeof b=="string"&&o.d.D(b)},Wt.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var S=m.as,T=p(S,m.crossOrigin),M=typeof m.integrity=="string"?m.integrity:void 0,U=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?o.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:T,integrity:M,fetchPriority:U}):S==="script"&&o.d.X(b,{crossOrigin:T,integrity:M,fetchPriority:U,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Wt.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=p(m.as,m.crossOrigin);o.d.M(b,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(b)},Wt.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,T=p(S,m.crossOrigin);o.d.L(b,S,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Wt.preloadModule=function(b,m){if(typeof b=="string")if(m){var S=p(m.as,m.crossOrigin);o.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(b)},Wt.requestFormReset=function(b){o.d.r(b)},Wt.unstable_batchedUpdates=function(b,m){return b(m)},Wt.useFormState=function(b,m,S){return v.H.useFormState(b,m,S)},Wt.useFormStatus=function(){return v.H.useHostTransitionStatus()},Wt.version="19.1.0",Wt}var d1;function Pv(){if(d1)return vs.exports;d1=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),vs.exports=Wv(),vs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1;function Iv(){if(h1)return Il;h1=1;var l=Fv(),r=$s(),s=Pv();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(d(t)!==t)throw Error(o(188))}function b(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var u=i.alternate;if(u===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===a)return p(i),t;if(u===n)return p(i),e;u=u.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=u;else{for(var c=!1,h=i.child;h;){if(h===a){c=!0,a=i,n=u;break}if(h===n){c=!0,n=i,a=u;break}h=h.sibling}if(!c){for(h=u.child;h;){if(h===a){c=!0,a=u,n=i;break}if(h===n){c=!0,n=u,a=i;break}h=h.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var S=Object.assign,T=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Tt=Symbol.for("react.suspense_list"),zt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Ot=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Kt(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var La=Symbol.for("react.client.reference");function ka(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===La?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case Y:return"Profiler";case L:return"StrictMode";case $:return"Suspense";case Tt:return"SuspenseList";case Ot:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case Z:return(t.displayName||"Context")+".Provider";case J:return(t._context.displayName||"Context")+".Consumer";case ct:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zt:return e=t.displayName||null,e!==null?e:ka(t.type)||"Memo";case xt:e=t._payload,t=t._init;try{return ka(t(e))}catch{}}return null}var Jt=Array.isArray,j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},St=[],x=-1;function H(t){return{current:t}}function Q(t){0>x||(t.current=St[x],St[x]=null,x--)}function G(t,e){x++,St[x]=t.current,t.current=e}var W=H(null),dt=H(null),at=H(null),ue=H(null);function Nt(t,e){switch(G(at,e),G(dt,t),G(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?_0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=_0(e),t=D0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(W),G(W,t)}function sa(){Q(W),Q(dt),Q(at)}function Ju(t){t.memoizedState!==null&&G(ue,t);var e=W.current,a=D0(e,t.type);e!==a&&(G(dt,t),G(W,a))}function di(t){dt.current===t&&(Q(W),Q(dt)),ue.current===t&&(Q(ue),Kl._currentValue=tt)}var $u=Object.prototype.hasOwnProperty,Fu=l.unstable_scheduleCallback,Wu=l.unstable_cancelCallback,Tm=l.unstable_shouldYield,wm=l.unstable_requestPaint,je=l.unstable_now,zm=l.unstable_getCurrentPriorityLevel,hf=l.unstable_ImmediatePriority,mf=l.unstable_UserBlockingPriority,hi=l.unstable_NormalPriority,Om=l.unstable_LowPriority,vf=l.unstable_IdlePriority,Nm=l.log,Mm=l.unstable_setDisableYieldValue,el=null,re=null;function fa(t){if(typeof Nm=="function"&&Mm(t),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(el,t)}catch{}}var oe=Math.clz32?Math.clz32:jm,Cm=Math.log,Rm=Math.LN2;function jm(t){return t>>>=0,t===0?32:31-(Cm(t)/Rm|0)|0}var mi=256,vi=4194304;function qa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function bi(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,u=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var h=n&134217727;return h!==0?(n=h&~u,n!==0?i=qa(n):(c&=h,c!==0?i=qa(c):a||(a=h&~t,a!==0&&(i=qa(a))))):(h=n&~u,h!==0?i=qa(h):c!==0?i=qa(c):a||(a=n&~t,a!==0&&(i=qa(a)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:i}function al(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function _m(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(){var t=mi;return mi<<=1,(mi&4194048)===0&&(mi=256),t}function pf(){var t=vi;return vi<<=1,(vi&62914560)===0&&(vi=4194304),t}function Pu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function nl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Dm(t,e,a,n,i,u){var c=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var h=t.entanglements,g=t.expirationTimes,z=t.hiddenUpdates;for(a=c&~a;0<a;){var R=31-oe(a),D=1<<R;h[R]=0,g[R]=-1;var O=z[R];if(O!==null)for(z[R]=null,R=0;R<O.length;R++){var N=O[R];N!==null&&(N.lane&=-536870913)}a&=~D}n!==0&&gf(t,n,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(c&~e))}function gf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-oe(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function yf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-oe(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function Iu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xf(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:I0(t.type))}function Um(t,e){var a=X.p;try{return X.p=t,e()}finally{X.p=a}}var ca=Math.random().toString(36).slice(2),$t="__reactFiber$"+ca,te="__reactProps$"+ca,sn="__reactContainer$"+ca,er="__reactEvents$"+ca,Bm="__reactListeners$"+ca,Hm="__reactHandles$"+ca,Sf="__reactResources$"+ca,ll="__reactMarker$"+ca;function ar(t){delete t[$t],delete t[te],delete t[er],delete t[Bm],delete t[Hm]}function fn(t){var e=t[$t];if(e)return e;for(var a=t.parentNode;a;){if(e=a[sn]||a[$t]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=L0(t);t!==null;){if(a=t[$t])return a;t=L0(t)}return e}t=a,a=t.parentNode}return null}function cn(t){if(t=t[$t]||t[sn]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function il(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function dn(t){var e=t[Sf];return e||(e=t[Sf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function qt(t){t[ll]=!0}var Ef=new Set,Af={};function Ya(t,e){hn(t,e),hn(t+"Capture",e)}function hn(t,e){for(Af[t]=e,t=0;t<e.length;t++)Ef.add(e[t])}var Lm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tf={},wf={};function km(t){return $u.call(wf,t)?!0:$u.call(Tf,t)?!1:Lm.test(t)?wf[t]=!0:(Tf[t]=!0,!1)}function pi(t,e,a){if(km(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function gi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ge(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var nr,zf;function mn(t){if(nr===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);nr=e&&e[1]||"",zf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nr+t+zf}var lr=!1;function ir(t,e){if(!t||lr)return"";lr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(N){var O=N}Reflect.construct(t,[],D)}else{try{D.call()}catch(N){O=N}t.call(D.prototype)}}else{try{throw Error()}catch(N){O=N}(D=t())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(N){if(N&&O&&typeof N.stack=="string")return[N.stack,O.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),c=u[0],h=u[1];if(c&&h){var g=c.split(`
`),z=h.split(`
`);for(i=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(n===g.length||i===z.length)for(n=g.length-1,i=z.length-1;1<=n&&0<=i&&g[n]!==z[i];)i--;for(;1<=n&&0<=i;n--,i--)if(g[n]!==z[i]){if(n!==1||i!==1)do if(n--,i--,0>i||g[n]!==z[i]){var R=`
`+g[n].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=n&&0<=i);break}}}finally{lr=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mn(a):""}function qm(t){switch(t.tag){case 26:case 27:case 5:return mn(t.type);case 16:return mn("Lazy");case 13:return mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return ir(t.type,!1);case 11:return ir(t.type.render,!1);case 1:return ir(t.type,!0);case 31:return mn("Activity");default:return""}}function Of(t){try{var e="";do e+=qm(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ym(t){var e=Nf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(c){n=""+c,u.call(this,c)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yi(t){t._valueTracker||(t._valueTracker=Ym(t))}function Mf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Nf(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gm=/[\n"\\]/g;function ye(t){return t.replace(Gm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ur(t,e,a,n,i,u,c,h){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ge(e)):t.value!==""+ge(e)&&(t.value=""+ge(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?rr(t,c,ge(e)):a!=null?rr(t,c,ge(a)):n!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+ge(h):t.removeAttribute("name")}function Cf(t,e,a,n,i,u,c,h){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+ge(a):"",e=e!=null?""+ge(e):a,h||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=h?t.checked:!!n,t.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c)}function rr(t,e,a){e==="number"&&xi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rf(t,e,a){if(e!=null&&(e=""+ge(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ge(a):""}function jf(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(o(92));if(Jt(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=ge(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function bn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Xm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _f(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||Xm.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Df(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&_f(t,i,n)}else for(var u in e)e.hasOwnProperty(u)&&_f(t,u,e[u])}function or(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Si(t){return Vm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var sr=null;function fr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pn=null,gn=null;function Uf(t){var e=cn(t);if(e&&(t=e.stateNode)){var a=t[te]||null;t:switch(t=e.stateNode,e.type){case"input":if(ur(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ye(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[te]||null;if(!i)throw Error(o(90));ur(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Mf(n)}break t;case"textarea":Rf(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&vn(t,!!a.multiple,e,!1)}}}var cr=!1;function Bf(t,e,a){if(cr)return t(e,a);cr=!0;try{var n=t(e);return n}finally{if(cr=!1,(pn!==null||gn!==null)&&(uu(),pn&&(e=pn,t=gn,gn=pn=null,Uf(e),t)))for(e=0;e<t.length;e++)Uf(t[e])}}function ul(t,e){var a=t.stateNode;if(a===null)return null;var n=a[te]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dr=!1;if(Xe)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){dr=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{dr=!1}var da=null,hr=null,Ei=null;function Hf(){if(Ei)return Ei;var t,e=hr,a=e.length,n,i="value"in da?da.value:da.textContent,u=i.length;for(t=0;t<a&&e[t]===i[t];t++);var c=a-t;for(n=1;n<=c&&e[a-n]===i[u-n];n++);return Ei=i.slice(t,1<n?1-n:void 0)}function Ai(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ti(){return!0}function Lf(){return!1}function ee(t){function e(a,n,i,u,c){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(a=t[h],this[h]=a?a(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ti:Lf,this.isPropagationStopped=Lf,this}return S(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),e}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=ee(Ga),ol=S({},Ga,{view:0,detail:0}),Zm=ee(ol),mr,vr,sl,zi=S({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sl&&(sl&&t.type==="mousemove"?(mr=t.screenX-sl.screenX,vr=t.screenY-sl.screenY):vr=mr=0,sl=t),mr)},movementY:function(t){return"movementY"in t?t.movementY:vr}}),kf=ee(zi),Km=S({},zi,{dataTransfer:0}),Jm=ee(Km),$m=S({},ol,{relatedTarget:0}),br=ee($m),Fm=S({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Wm=ee(Fm),Pm=S({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Im=ee(Pm),t2=S({},Ga,{data:0}),qf=ee(t2),e2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n2[t])?!!e[t]:!1}function pr(){return l2}var i2=S({},ol,{key:function(t){if(t.key){var e=e2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ai(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(t){return t.type==="keypress"?Ai(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ai(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u2=ee(i2),r2=S({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=ee(r2),o2=S({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr}),s2=ee(o2),f2=S({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),c2=ee(f2),d2=S({},zi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h2=ee(d2),m2=S({},Ga,{newState:0,oldState:0}),v2=ee(m2),b2=[9,13,27,32],gr=Xe&&"CompositionEvent"in window,fl=null;Xe&&"documentMode"in document&&(fl=document.documentMode);var p2=Xe&&"TextEvent"in window&&!fl,Gf=Xe&&(!gr||fl&&8<fl&&11>=fl),Xf=" ",Qf=!1;function Vf(t,e){switch(t){case"keyup":return b2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yn=!1;function g2(t,e){switch(t){case"compositionend":return Zf(e);case"keypress":return e.which!==32?null:(Qf=!0,Xf);case"textInput":return t=e.data,t===Xf&&Qf?null:t;default:return null}}function y2(t,e){if(yn)return t==="compositionend"||!gr&&Vf(t,e)?(t=Hf(),Ei=hr=da=null,yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gf&&e.locale!=="ko"?null:e.data;default:return null}}var x2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x2[t.type]:e==="textarea"}function Jf(t,e,a,n){pn?gn?gn.push(n):gn=[n]:pn=n,e=du(e,"onChange"),0<e.length&&(a=new wi("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var cl=null,dl=null;function S2(t){N0(t,0)}function Oi(t){var e=il(t);if(Mf(e))return t}function $f(t,e){if(t==="change")return e}var Ff=!1;if(Xe){var yr;if(Xe){var xr="oninput"in document;if(!xr){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),xr=typeof Wf.oninput=="function"}yr=xr}else yr=!1;Ff=yr&&(!document.documentMode||9<document.documentMode)}function Pf(){cl&&(cl.detachEvent("onpropertychange",If),dl=cl=null)}function If(t){if(t.propertyName==="value"&&Oi(dl)){var e=[];Jf(e,dl,t,fr(t)),Bf(S2,e)}}function E2(t,e,a){t==="focusin"?(Pf(),cl=e,dl=a,cl.attachEvent("onpropertychange",If)):t==="focusout"&&Pf()}function A2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oi(dl)}function T2(t,e){if(t==="click")return Oi(e)}function w2(t,e){if(t==="input"||t==="change")return Oi(e)}function z2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var se=typeof Object.is=="function"?Object.is:z2;function hl(t,e){if(se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!$u.call(e,i)||!se(t[i],e[i]))return!1}return!0}function tc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ec(t,e){var a=tc(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tc(a)}}function ac(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ac(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=xi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=xi(t.document)}return e}function Sr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var O2=Xe&&"documentMode"in document&&11>=document.documentMode,xn=null,Er=null,ml=null,Ar=!1;function lc(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ar||xn==null||xn!==xi(n)||(n=xn,"selectionStart"in n&&Sr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ml&&hl(ml,n)||(ml=n,n=du(Er,"onSelect"),0<n.length&&(e=new wi("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=xn)))}function Xa(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Sn={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Tr={},ic={};Xe&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Qa(t){if(Tr[t])return Tr[t];if(!Sn[t])return t;var e=Sn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ic)return Tr[t]=e[a];return t}var uc=Qa("animationend"),rc=Qa("animationiteration"),oc=Qa("animationstart"),N2=Qa("transitionrun"),M2=Qa("transitionstart"),C2=Qa("transitioncancel"),sc=Qa("transitionend"),fc=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wr.push("scrollEnd");function Oe(t,e){fc.set(t,e),Ya(e,[t])}var cc=new WeakMap;function xe(t,e){if(typeof t=="object"&&t!==null){var a=cc.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Of(e)},cc.set(t,e),e)}return{value:t,source:e,stack:Of(e)}}var Se=[],En=0,zr=0;function Ni(){for(var t=En,e=zr=En=0;e<t;){var a=Se[e];Se[e++]=null;var n=Se[e];Se[e++]=null;var i=Se[e];Se[e++]=null;var u=Se[e];if(Se[e++]=null,n!==null&&i!==null){var c=n.pending;c===null?i.next=i:(i.next=c.next,c.next=i),n.pending=i}u!==0&&dc(a,i,u)}}function Mi(t,e,a,n){Se[En++]=t,Se[En++]=e,Se[En++]=a,Se[En++]=n,zr|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Or(t,e,a,n){return Mi(t,e,a,n),Ci(t)}function An(t,e){return Mi(t,null,null,e),Ci(t)}function dc(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,u=t.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-oe(a),t=u.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),u):null}function Ci(t){if(50<kl)throw kl=0,Do=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Tn={};function R2(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(t,e,a,n){return new R2(t,e,a,n)}function Nr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qe(t,e){var a=t.alternate;return a===null?(a=fe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hc(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ri(t,e,a,n,i,u){var c=0;if(n=t,typeof t=="function")Nr(t)&&(c=1);else if(typeof t=="string")c=_v(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ot:return t=fe(31,a,e,i),t.elementType=Ot,t.lanes=u,t;case q:return Va(a.children,i,u,e);case L:c=8,i|=24;break;case Y:return t=fe(12,a,e,i|2),t.elementType=Y,t.lanes=u,t;case $:return t=fe(13,a,e,i),t.elementType=$,t.lanes=u,t;case Tt:return t=fe(19,a,e,i),t.elementType=Tt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:case Z:c=10;break t;case J:c=9;break t;case ct:c=11;break t;case zt:c=14;break t;case xt:c=16,n=null;break t}c=29,a=Error(o(130,t===null?"null":typeof t,"")),n=null}return e=fe(c,a,e,i),e.elementType=t,e.type=n,e.lanes=u,e}function Va(t,e,a,n){return t=fe(7,t,n,e),t.lanes=a,t}function Mr(t,e,a){return t=fe(6,t,null,e),t.lanes=a,t}function Cr(t,e,a){return e=fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var wn=[],zn=0,ji=null,_i=0,Ee=[],Ae=0,Za=null,Ve=1,Ze="";function Ka(t,e){wn[zn++]=_i,wn[zn++]=ji,ji=t,_i=e}function mc(t,e,a){Ee[Ae++]=Ve,Ee[Ae++]=Ze,Ee[Ae++]=Za,Za=t;var n=Ve;t=Ze;var i=32-oe(n)-1;n&=~(1<<i),a+=1;var u=32-oe(e)+i;if(30<u){var c=i-i%5;u=(n&(1<<c)-1).toString(32),n>>=c,i-=c,Ve=1<<32-oe(e)+i|a<<i|n,Ze=u+t}else Ve=1<<u|a<<i|n,Ze=t}function Rr(t){t.return!==null&&(Ka(t,1),mc(t,1,0))}function jr(t){for(;t===ji;)ji=wn[--zn],wn[zn]=null,_i=wn[--zn],wn[zn]=null;for(;t===Za;)Za=Ee[--Ae],Ee[Ae]=null,Ze=Ee[--Ae],Ee[Ae]=null,Ve=Ee[--Ae],Ee[Ae]=null}var It=null,Rt=null,mt=!1,Ja=null,_e=!1,_r=Error(o(519));function $a(t){var e=Error(o(418,""));throw pl(xe(e,t)),_r}function vc(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[$t]=t,e[te]=n,a){case"dialog":ot("cancel",e),ot("close",e);break;case"iframe":case"object":case"embed":ot("load",e);break;case"video":case"audio":for(a=0;a<Yl.length;a++)ot(Yl[a],e);break;case"source":ot("error",e);break;case"img":case"image":case"link":ot("error",e),ot("load",e);break;case"details":ot("toggle",e);break;case"input":ot("invalid",e),Cf(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),yi(e);break;case"select":ot("invalid",e);break;case"textarea":ot("invalid",e),jf(e,n.value,n.defaultValue,n.children),yi(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||j0(e.textContent,a)?(n.popover!=null&&(ot("beforetoggle",e),ot("toggle",e)),n.onScroll!=null&&ot("scroll",e),n.onScrollEnd!=null&&ot("scrollend",e),n.onClick!=null&&(e.onclick=hu),e=!0):e=!1,e||$a(t)}function bc(t){for(It=t.return;It;)switch(It.tag){case 5:case 13:_e=!1;return;case 27:case 3:_e=!0;return;default:It=It.return}}function vl(t){if(t!==It)return!1;if(!mt)return bc(t),mt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Fo(t.type,t.memoizedProps)),a=!a),a&&Rt&&$a(t),bc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Rt=Me(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Rt=null}}else e===27?(e=Rt,Na(t.type)?(t=ts,ts=null,Rt=t):Rt=e):Rt=It?Me(t.stateNode.nextSibling):null;return!0}function bl(){Rt=It=null,mt=!1}function pc(){var t=Ja;return t!==null&&(le===null?le=t:le.push.apply(le,t),Ja=null),t}function pl(t){Ja===null?Ja=[t]:Ja.push(t)}var Dr=H(null),Fa=null,Ke=null;function ha(t,e,a){G(Dr,e._currentValue),e._currentValue=a}function Je(t){t._currentValue=Dr.current,Q(Dr)}function Ur(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Br(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var c=i.child;u=u.firstContext;t:for(;u!==null;){var h=u;u=i;for(var g=0;g<e.length;g++)if(h.context===e[g]){u.lanes|=a,h=u.alternate,h!==null&&(h.lanes|=a),Ur(u.return,a,t),n||(c=null);break t}u=h.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(o(341));c.lanes|=a,u=c.alternate,u!==null&&(u.lanes|=a),Ur(c,a,t),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function gl(t,e,a,n){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var h=i.type;se(i.pendingProps.value,c.value)||(t!==null?t.push(h):t=[h])}}else if(i===ue.current){if(c=i.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Kl):t=[Kl])}i=i.return}t!==null&&Br(e,t,a,n),e.flags|=262144}function Di(t){for(t=t.firstContext;t!==null;){if(!se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wa(t){Fa=t,Ke=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return gc(Fa,t)}function Ui(t,e){return Fa===null&&Wa(t),gc(t,e)}function gc(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ke===null){if(t===null)throw Error(o(308));Ke=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ke=Ke.next=e;return a}var j2=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},_2=l.unstable_scheduleCallback,D2=l.unstable_NormalPriority,Ht={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hr(){return{controller:new j2,data:new Map,refCount:0}}function yl(t){t.refCount--,t.refCount===0&&_2(D2,function(){t.controller.abort()})}var xl=null,Lr=0,On=0,Nn=null;function U2(t,e){if(xl===null){var a=xl=[];Lr=0,On=Yo(),Nn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Lr++,e.then(yc,yc),e}function yc(){if(--Lr===0&&xl!==null){Nn!==null&&(Nn.status="fulfilled");var t=xl;xl=null,On=0,Nn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function B2(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var xc=j.S;j.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&U2(t,e),xc!==null&&xc(t,e)};var Pa=H(null);function kr(){var t=Pa.current;return t!==null?t:At.pooledCache}function Bi(t,e){e===null?G(Pa,Pa.current):G(Pa,e.pool)}function Sc(){var t=kr();return t===null?null:{parent:Ht._currentValue,pool:t}}var Sl=Error(o(460)),Ec=Error(o(474)),Hi=Error(o(542)),qr={then:function(){}};function Ac(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Li(){}function Tc(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Li,Li),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zc(t),t;default:if(typeof e.status=="string")e.then(Li,Li);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,zc(t),t}throw El=e,Sl}}var El=null;function wc(){if(El===null)throw Error(o(459));var t=El;return El=null,t}function zc(t){if(t===Sl||t===Hi)throw Error(o(483))}var ma=!1;function Yr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(vt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Ci(t),dc(t,null,a),e}return Mi(t,n,e,a),Ci(t)}function Al(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,yf(t,a)}}function Xr(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?i=u=c:u=u.next=c,a=a.next}while(a!==null);u===null?i=u=e:u=u.next=e}else i=u=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Qr=!1;function Tl(){if(Qr){var t=Nn;if(t!==null)throw t}}function wl(t,e,a,n){Qr=!1;var i=t.updateQueue;ma=!1;var u=i.firstBaseUpdate,c=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var g=h,z=g.next;g.next=null,c===null?u=z:c.next=z,c=g;var R=t.alternate;R!==null&&(R=R.updateQueue,h=R.lastBaseUpdate,h!==c&&(h===null?R.firstBaseUpdate=z:h.next=z,R.lastBaseUpdate=g))}if(u!==null){var D=i.baseState;c=0,R=z=g=null,h=u;do{var O=h.lane&-536870913,N=O!==h.lane;if(N?(ft&O)===O:(n&O)===O){O!==0&&O===On&&(Qr=!0),R!==null&&(R=R.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var et=t,P=h;O=e;var yt=a;switch(P.tag){case 1:if(et=P.payload,typeof et=="function"){D=et.call(yt,D,O);break t}D=et;break t;case 3:et.flags=et.flags&-65537|128;case 0:if(et=P.payload,O=typeof et=="function"?et.call(yt,D,O):et,O==null)break t;D=S({},D,O);break t;case 2:ma=!0}}O=h.callback,O!==null&&(t.flags|=64,N&&(t.flags|=8192),N=i.callbacks,N===null?i.callbacks=[O]:N.push(O))}else N={lane:O,tag:h.tag,payload:h.payload,callback:h.callback,next:null},R===null?(z=R=N,g=D):R=R.next=N,c|=O;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;N=h,h=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);R===null&&(g=D),i.baseState=g,i.firstBaseUpdate=z,i.lastBaseUpdate=R,u===null&&(i.shared.lanes=0),Ta|=c,t.lanes=c,t.memoizedState=D}}function Oc(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Nc(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Oc(a[t],e)}var Mn=H(null),ki=H(0);function Mc(t,e){t=ea,G(ki,t),G(Mn,e),ea=t|e.baseLanes}function Vr(){G(ki,ea),G(Mn,Mn.current)}function Zr(){ea=ki.current,Q(Mn),Q(ki)}var pa=0,lt=null,pt=null,Ut=null,qi=!1,Cn=!1,Ia=!1,Yi=0,zl=0,Rn=null,H2=0;function _t(){throw Error(o(321))}function Kr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!se(t[a],e[a]))return!1;return!0}function Jr(t,e,a,n,i,u){return pa=u,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?dd:hd,Ia=!1,u=a(n,i),Ia=!1,Cn&&(u=Rc(e,a,n,i)),Cc(t),u}function Cc(t){j.H=Ki;var e=pt!==null&&pt.next!==null;if(pa=0,Ut=pt=lt=null,qi=!1,zl=0,Rn=null,e)throw Error(o(300));t===null||Yt||(t=t.dependencies,t!==null&&Di(t)&&(Yt=!0))}function Rc(t,e,a,n){lt=t;var i=0;do{if(Cn&&(Rn=null),zl=0,Cn=!1,25<=i)throw Error(o(301));if(i+=1,Ut=pt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Q2,u=e(a,n)}while(Cn);return u}function L2(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?Ol(e):e,t=t.useState()[0],(pt!==null?pt.memoizedState:null)!==t&&(lt.flags|=1024),e}function $r(){var t=Yi!==0;return Yi=0,t}function Fr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Wr(t){if(qi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}qi=!1}pa=0,Ut=pt=lt=null,Cn=!1,zl=Yi=0,Rn=null}function ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?lt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Bt(){if(pt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=Ut===null?lt.memoizedState:Ut.next;if(e!==null)Ut=e,pt=t;else{if(t===null)throw lt.alternate===null?Error(o(467)):Error(o(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Ut===null?lt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Pr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(t){var e=zl;return zl+=1,Rn===null&&(Rn=[]),t=Tc(Rn,t,e),e=lt,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?dd:hd),t}function Gi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ol(t);if(t.$$typeof===Z)return Ft(t)}throw Error(o(438,String(t)))}function Ir(t){var e=null,a=lt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=lt.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Pr(),lt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=ie;return e.index++,a}function $e(t,e){return typeof e=="function"?e(t):e}function Xi(t){var e=Bt();return to(e,pt,t)}function to(t,e,a){var n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=t.baseQueue,u=n.pending;if(u!==null){if(i!==null){var c=i.next;i.next=u.next,u.next=c}e.baseQueue=i=u,n.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var h=c=null,g=null,z=e,R=!1;do{var D=z.lane&-536870913;if(D!==z.lane?(ft&D)===D:(pa&D)===D){var O=z.revertLane;if(O===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),D===On&&(R=!0);else if((pa&O)===O){z=z.next,O===On&&(R=!0);continue}else D={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(h=g=D,c=u):g=g.next=D,lt.lanes|=O,Ta|=O;D=z.action,Ia&&a(u,D),u=z.hasEagerState?z.eagerState:a(u,D)}else O={lane:D,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(h=g=O,c=u):g=g.next=O,lt.lanes|=D,Ta|=D;z=z.next}while(z!==null&&z!==e);if(g===null?c=u:g.next=h,!se(u,t.memoizedState)&&(Yt=!0,R&&(a=Nn,a!==null)))throw a;t.memoizedState=u,t.baseState=c,t.baseQueue=g,n.lastRenderedState=u}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function eo(t){var e=Bt(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,u=e.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do u=t(u,c.action),c=c.next;while(c!==i);se(u,e.memoizedState)||(Yt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,n]}function jc(t,e,a){var n=lt,i=Bt(),u=mt;if(u){if(a===void 0)throw Error(o(407));a=a()}else a=e();var c=!se((pt||i).memoizedState,a);c&&(i.memoizedState=a,Yt=!0),i=i.queue;var h=Uc.bind(null,n,i,t);if(Nl(2048,8,h,[t]),i.getSnapshot!==e||c||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,jn(9,Qi(),Dc.bind(null,n,i,a,e),null),At===null)throw Error(o(349));u||(pa&124)!==0||_c(n,e,a)}return a}function _c(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=lt.updateQueue,e===null?(e=Pr(),lt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Dc(t,e,a,n){e.value=a,e.getSnapshot=n,Bc(e)&&Hc(t)}function Uc(t,e,a){return a(function(){Bc(e)&&Hc(t)})}function Bc(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!se(t,a)}catch{return!0}}function Hc(t){var e=An(t,2);e!==null&&ve(e,t,2)}function ao(t){var e=ae();if(typeof t=="function"){var a=t;if(t=a(),Ia){fa(!0);try{a()}finally{fa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$e,lastRenderedState:t},e}function Lc(t,e,a,n){return t.baseState=a,to(t,pt,typeof n=="function"?n:$e)}function k2(t,e,a,n,i){if(Zi(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};j.T!==null?a(!0):u.isTransition=!1,n(u),a=e.pending,a===null?(u.next=e.pending=u,kc(e,u)):(u.next=a.next,e.pending=a.next=u)}}function kc(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var u=j.T,c={};j.T=c;try{var h=a(i,n),g=j.S;g!==null&&g(c,h),qc(t,e,h)}catch(z){no(t,e,z)}finally{j.T=u}}else try{u=a(i,n),qc(t,e,u)}catch(z){no(t,e,z)}}function qc(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Yc(t,e,n)},function(n){return no(t,e,n)}):Yc(t,e,a)}function Yc(t,e,a){e.status="fulfilled",e.value=a,Gc(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,kc(t,a)))}function no(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Gc(e),e=e.next;while(e!==n)}t.action=null}function Gc(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Xc(t,e){return e}function Qc(t,e){if(mt){var a=At.formState;if(a!==null){t:{var n=lt;if(mt){if(Rt){e:{for(var i=Rt,u=_e;i.nodeType!==8;){if(!u){i=null;break e}if(i=Me(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Rt=Me(i.nextSibling),n=i.data==="F!";break t}}$a(n)}n=!1}n&&(e=a[0])}}return a=ae(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xc,lastRenderedState:e},a.queue=n,a=sd.bind(null,lt,n),n.dispatch=a,n=ao(!1),u=oo.bind(null,lt,!1,n.queue),n=ae(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=k2.bind(null,lt,i,u,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Vc(t){var e=Bt();return Zc(e,pt,t)}function Zc(t,e,a){if(e=to(t,e,Xc)[0],t=Xi($e)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Ol(e)}catch(c){throw c===Sl?Hi:c}else n=e;e=Bt();var i=e.queue,u=i.dispatch;return a!==e.memoizedState&&(lt.flags|=2048,jn(9,Qi(),q2.bind(null,i,a),null)),[n,u,t]}function q2(t,e){t.action=e}function Kc(t){var e=Bt(),a=pt;if(a!==null)return Zc(e,a,t);Bt(),e=e.memoizedState,a=Bt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function jn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=lt.updateQueue,e===null&&(e=Pr(),lt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Qi(){return{destroy:void 0,resource:void 0}}function Jc(){return Bt().memoizedState}function Vi(t,e,a,n){var i=ae();n=n===void 0?null:n,lt.flags|=t,i.memoizedState=jn(1|e,Qi(),a,n)}function Nl(t,e,a,n){var i=Bt();n=n===void 0?null:n;var u=i.memoizedState.inst;pt!==null&&n!==null&&Kr(n,pt.memoizedState.deps)?i.memoizedState=jn(e,u,a,n):(lt.flags|=t,i.memoizedState=jn(1|e,u,a,n))}function $c(t,e){Vi(8390656,8,t,e)}function Fc(t,e){Nl(2048,8,t,e)}function Wc(t,e){return Nl(4,2,t,e)}function Pc(t,e){return Nl(4,4,t,e)}function Ic(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function td(t,e,a){a=a!=null?a.concat([t]):null,Nl(4,4,Ic.bind(null,e,t),a)}function lo(){}function ed(t,e){var a=Bt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Kr(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function ad(t,e){var a=Bt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Kr(e,n[1]))return n[0];if(n=t(),Ia){fa(!0);try{t()}finally{fa(!1)}}return a.memoizedState=[n,e],n}function io(t,e,a){return a===void 0||(pa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=i0(),lt.lanes|=t,Ta|=t,a)}function nd(t,e,a,n){return se(a,e)?a:Mn.current!==null?(t=io(t,a,n),se(t,e)||(Yt=!0),t):(pa&42)===0?(Yt=!0,t.memoizedState=a):(t=i0(),lt.lanes|=t,Ta|=t,e)}function ld(t,e,a,n,i){var u=X.p;X.p=u!==0&&8>u?u:8;var c=j.T,h={};j.T=h,oo(t,!1,e,a);try{var g=i(),z=j.S;if(z!==null&&z(h,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var R=B2(g,n);Ml(t,e,R,me(t))}else Ml(t,e,n,me(t))}catch(D){Ml(t,e,{then:function(){},status:"rejected",reason:D},me())}finally{X.p=u,j.T=c}}function Y2(){}function uo(t,e,a,n){if(t.tag!==5)throw Error(o(476));var i=id(t).queue;ld(t,i,e,tt,a===null?Y2:function(){return ud(t),a(n)})}function id(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$e,lastRenderedState:tt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$e,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ud(t){var e=id(t).next.queue;Ml(t,e,{},me())}function ro(){return Ft(Kl)}function rd(){return Bt().memoizedState}function od(){return Bt().memoizedState}function G2(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=me();t=va(a);var n=ba(e,t,a);n!==null&&(ve(n,e,a),Al(n,e,a)),e={cache:Hr()},t.payload=e;return}e=e.return}}function X2(t,e,a){var n=me();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Zi(t)?fd(e,a):(a=Or(t,e,a,n),a!==null&&(ve(a,t,n),cd(a,e,n)))}function sd(t,e,a){var n=me();Ml(t,e,a,n)}function Ml(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zi(t))fd(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var c=e.lastRenderedState,h=u(c,a);if(i.hasEagerState=!0,i.eagerState=h,se(h,c))return Mi(t,e,i,0),At===null&&Ni(),!1}catch{}finally{}if(a=Or(t,e,i,n),a!==null)return ve(a,t,n),cd(a,e,n),!0}return!1}function oo(t,e,a,n){if(n={lane:2,revertLane:Yo(),action:n,hasEagerState:!1,eagerState:null,next:null},Zi(t)){if(e)throw Error(o(479))}else e=Or(t,a,n,2),e!==null&&ve(e,t,2)}function Zi(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function fd(t,e){Cn=qi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function cd(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,yf(t,a)}}var Ki={readContext:Ft,use:Gi,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},dd={readContext:Ft,use:Gi,useCallback:function(t,e){return ae().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:$c,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Vi(4194308,4,Ic.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Vi(4194308,4,t,e)},useInsertionEffect:function(t,e){Vi(4,2,t,e)},useMemo:function(t,e){var a=ae();e=e===void 0?null:e;var n=t();if(Ia){fa(!0);try{t()}finally{fa(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=ae();if(a!==void 0){var i=a(e);if(Ia){fa(!0);try{a(e)}finally{fa(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=X2.bind(null,lt,t),[n.memoizedState,t]},useRef:function(t){var e=ae();return t={current:t},e.memoizedState=t},useState:function(t){t=ao(t);var e=t.queue,a=sd.bind(null,lt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:lo,useDeferredValue:function(t,e){var a=ae();return io(a,t,e)},useTransition:function(){var t=ao(!1);return t=ld.bind(null,lt,t.queue,!0,!1),ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=lt,i=ae();if(mt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),At===null)throw Error(o(349));(ft&124)!==0||_c(n,e,a)}i.memoizedState=a;var u={value:a,getSnapshot:e};return i.queue=u,$c(Uc.bind(null,n,u,t),[t]),n.flags|=2048,jn(9,Qi(),Dc.bind(null,n,u,a,e),null),a},useId:function(){var t=ae(),e=At.identifierPrefix;if(mt){var a=Ze,n=Ve;a=(n&~(1<<32-oe(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Yi++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=H2++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ro,useFormState:Qc,useActionState:Qc,useOptimistic:function(t){var e=ae();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=oo.bind(null,lt,!0,a),a.dispatch=e,[t,e]},useMemoCache:Ir,useCacheRefresh:function(){return ae().memoizedState=G2.bind(null,lt)}},hd={readContext:Ft,use:Gi,useCallback:ed,useContext:Ft,useEffect:Fc,useImperativeHandle:td,useInsertionEffect:Wc,useLayoutEffect:Pc,useMemo:ad,useReducer:Xi,useRef:Jc,useState:function(){return Xi($e)},useDebugValue:lo,useDeferredValue:function(t,e){var a=Bt();return nd(a,pt.memoizedState,t,e)},useTransition:function(){var t=Xi($e)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Ol(t),e]},useSyncExternalStore:jc,useId:rd,useHostTransitionStatus:ro,useFormState:Vc,useActionState:Vc,useOptimistic:function(t,e){var a=Bt();return Lc(a,pt,t,e)},useMemoCache:Ir,useCacheRefresh:od},Q2={readContext:Ft,use:Gi,useCallback:ed,useContext:Ft,useEffect:Fc,useImperativeHandle:td,useInsertionEffect:Wc,useLayoutEffect:Pc,useMemo:ad,useReducer:eo,useRef:Jc,useState:function(){return eo($e)},useDebugValue:lo,useDeferredValue:function(t,e){var a=Bt();return pt===null?io(a,t,e):nd(a,pt.memoizedState,t,e)},useTransition:function(){var t=eo($e)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:Ol(t),e]},useSyncExternalStore:jc,useId:rd,useHostTransitionStatus:ro,useFormState:Kc,useActionState:Kc,useOptimistic:function(t,e){var a=Bt();return pt!==null?Lc(a,pt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ir,useCacheRefresh:od},_n=null,Cl=0;function Ji(t){var e=Cl;return Cl+=1,_n===null&&(_n=[]),Tc(_n,t,e)}function Rl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function $i(t,e){throw e.$$typeof===T?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function md(t){var e=t._init;return e(t._payload)}function vd(t){function e(A,E){if(t){var w=A.deletions;w===null?(A.deletions=[E],A.flags|=16):w.push(E)}}function a(A,E){if(!t)return null;for(;E!==null;)e(A,E),E=E.sibling;return null}function n(A){for(var E=new Map;A!==null;)A.key!==null?E.set(A.key,A):E.set(A.index,A),A=A.sibling;return E}function i(A,E){return A=Qe(A,E),A.index=0,A.sibling=null,A}function u(A,E,w){return A.index=w,t?(w=A.alternate,w!==null?(w=w.index,w<E?(A.flags|=67108866,E):w):(A.flags|=67108866,E)):(A.flags|=1048576,E)}function c(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function h(A,E,w,_){return E===null||E.tag!==6?(E=Mr(w,A.mode,_),E.return=A,E):(E=i(E,w),E.return=A,E)}function g(A,E,w,_){var V=w.type;return V===q?R(A,E,w.props.children,_,w.key):E!==null&&(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===xt&&md(V)===E.type)?(E=i(E,w.props),Rl(E,w),E.return=A,E):(E=Ri(w.type,w.key,w.props,null,A.mode,_),Rl(E,w),E.return=A,E)}function z(A,E,w,_){return E===null||E.tag!==4||E.stateNode.containerInfo!==w.containerInfo||E.stateNode.implementation!==w.implementation?(E=Cr(w,A.mode,_),E.return=A,E):(E=i(E,w.children||[]),E.return=A,E)}function R(A,E,w,_,V){return E===null||E.tag!==7?(E=Va(w,A.mode,_,V),E.return=A,E):(E=i(E,w),E.return=A,E)}function D(A,E,w){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Mr(""+E,A.mode,w),E.return=A,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case M:return w=Ri(E.type,E.key,E.props,null,A.mode,w),Rl(w,E),w.return=A,w;case U:return E=Cr(E,A.mode,w),E.return=A,E;case xt:var _=E._init;return E=_(E._payload),D(A,E,w)}if(Jt(E)||Kt(E))return E=Va(E,A.mode,w,null),E.return=A,E;if(typeof E.then=="function")return D(A,Ji(E),w);if(E.$$typeof===Z)return D(A,Ui(A,E),w);$i(A,E)}return null}function O(A,E,w,_){var V=E!==null?E.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return V!==null?null:h(A,E,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case M:return w.key===V?g(A,E,w,_):null;case U:return w.key===V?z(A,E,w,_):null;case xt:return V=w._init,w=V(w._payload),O(A,E,w,_)}if(Jt(w)||Kt(w))return V!==null?null:R(A,E,w,_,null);if(typeof w.then=="function")return O(A,E,Ji(w),_);if(w.$$typeof===Z)return O(A,E,Ui(A,w),_);$i(A,w)}return null}function N(A,E,w,_,V){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A=A.get(w)||null,h(E,A,""+_,V);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case M:return A=A.get(_.key===null?w:_.key)||null,g(E,A,_,V);case U:return A=A.get(_.key===null?w:_.key)||null,z(E,A,_,V);case xt:var ut=_._init;return _=ut(_._payload),N(A,E,w,_,V)}if(Jt(_)||Kt(_))return A=A.get(w)||null,R(E,A,_,V,null);if(typeof _.then=="function")return N(A,E,w,Ji(_),V);if(_.$$typeof===Z)return N(A,E,w,Ui(E,_),V);$i(E,_)}return null}function et(A,E,w,_){for(var V=null,ut=null,K=E,I=E=0,Xt=null;K!==null&&I<w.length;I++){K.index>I?(Xt=K,K=null):Xt=K.sibling;var ht=O(A,K,w[I],_);if(ht===null){K===null&&(K=Xt);break}t&&K&&ht.alternate===null&&e(A,K),E=u(ht,E,I),ut===null?V=ht:ut.sibling=ht,ut=ht,K=Xt}if(I===w.length)return a(A,K),mt&&Ka(A,I),V;if(K===null){for(;I<w.length;I++)K=D(A,w[I],_),K!==null&&(E=u(K,E,I),ut===null?V=K:ut.sibling=K,ut=K);return mt&&Ka(A,I),V}for(K=n(K);I<w.length;I++)Xt=N(K,A,I,w[I],_),Xt!==null&&(t&&Xt.alternate!==null&&K.delete(Xt.key===null?I:Xt.key),E=u(Xt,E,I),ut===null?V=Xt:ut.sibling=Xt,ut=Xt);return t&&K.forEach(function(_a){return e(A,_a)}),mt&&Ka(A,I),V}function P(A,E,w,_){if(w==null)throw Error(o(151));for(var V=null,ut=null,K=E,I=E=0,Xt=null,ht=w.next();K!==null&&!ht.done;I++,ht=w.next()){K.index>I?(Xt=K,K=null):Xt=K.sibling;var _a=O(A,K,ht.value,_);if(_a===null){K===null&&(K=Xt);break}t&&K&&_a.alternate===null&&e(A,K),E=u(_a,E,I),ut===null?V=_a:ut.sibling=_a,ut=_a,K=Xt}if(ht.done)return a(A,K),mt&&Ka(A,I),V;if(K===null){for(;!ht.done;I++,ht=w.next())ht=D(A,ht.value,_),ht!==null&&(E=u(ht,E,I),ut===null?V=ht:ut.sibling=ht,ut=ht);return mt&&Ka(A,I),V}for(K=n(K);!ht.done;I++,ht=w.next())ht=N(K,A,I,ht.value,_),ht!==null&&(t&&ht.alternate!==null&&K.delete(ht.key===null?I:ht.key),E=u(ht,E,I),ut===null?V=ht:ut.sibling=ht,ut=ht);return t&&K.forEach(function(Vv){return e(A,Vv)}),mt&&Ka(A,I),V}function yt(A,E,w,_){if(typeof w=="object"&&w!==null&&w.type===q&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case M:t:{for(var V=w.key;E!==null;){if(E.key===V){if(V=w.type,V===q){if(E.tag===7){a(A,E.sibling),_=i(E,w.props.children),_.return=A,A=_;break t}}else if(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===xt&&md(V)===E.type){a(A,E.sibling),_=i(E,w.props),Rl(_,w),_.return=A,A=_;break t}a(A,E);break}else e(A,E);E=E.sibling}w.type===q?(_=Va(w.props.children,A.mode,_,w.key),_.return=A,A=_):(_=Ri(w.type,w.key,w.props,null,A.mode,_),Rl(_,w),_.return=A,A=_)}return c(A);case U:t:{for(V=w.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===w.containerInfo&&E.stateNode.implementation===w.implementation){a(A,E.sibling),_=i(E,w.children||[]),_.return=A,A=_;break t}else{a(A,E);break}else e(A,E);E=E.sibling}_=Cr(w,A.mode,_),_.return=A,A=_}return c(A);case xt:return V=w._init,w=V(w._payload),yt(A,E,w,_)}if(Jt(w))return et(A,E,w,_);if(Kt(w)){if(V=Kt(w),typeof V!="function")throw Error(o(150));return w=V.call(w),P(A,E,w,_)}if(typeof w.then=="function")return yt(A,E,Ji(w),_);if(w.$$typeof===Z)return yt(A,E,Ui(A,w),_);$i(A,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,E!==null&&E.tag===6?(a(A,E.sibling),_=i(E,w),_.return=A,A=_):(a(A,E),_=Mr(w,A.mode,_),_.return=A,A=_),c(A)):a(A,E)}return function(A,E,w,_){try{Cl=0;var V=yt(A,E,w,_);return _n=null,V}catch(K){if(K===Sl||K===Hi)throw K;var ut=fe(29,K,null,A.mode);return ut.lanes=_,ut.return=A,ut}finally{}}}var Dn=vd(!0),bd=vd(!1),Te=H(null),De=null;function ga(t){var e=t.alternate;G(Lt,Lt.current&1),G(Te,t),De===null&&(e===null||Mn.current!==null||e.memoizedState!==null)&&(De=t)}function pd(t){if(t.tag===22){if(G(Lt,Lt.current),G(Te,t),De===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(De=t)}}else ya()}function ya(){G(Lt,Lt.current),G(Te,Te.current)}function Fe(t){Q(Te),De===t&&(De=null),Q(Lt)}var Lt=H(0);function Fi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Io(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function so(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:S({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fo={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=me(),i=va(n);i.payload=e,a!=null&&(i.callback=a),e=ba(t,i,n),e!==null&&(ve(e,t,n),Al(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=me(),i=va(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=ba(t,i,n),e!==null&&(ve(e,t,n),Al(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=me(),n=va(a);n.tag=2,e!=null&&(n.callback=e),e=ba(t,n,a),e!==null&&(ve(e,t,a),Al(e,t,a))}};function gd(t,e,a,n,i,u,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,c):e.prototype&&e.prototype.isPureReactComponent?!hl(a,n)||!hl(i,u):!0}function yd(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&fo.enqueueReplaceState(e,e.state,null)}function tn(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=S({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var Wi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function xd(t){Wi(t)}function Sd(t){console.error(t)}function Ed(t){Wi(t)}function Pi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function Ad(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function co(t,e,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Pi(t,e)},a}function Td(t){return t=va(t),t.tag=3,t}function wd(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var u=n.value;t.payload=function(){return i(u)},t.callback=function(){Ad(e,a,n)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Ad(e,a,n),typeof i!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function V2(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&gl(e,a,i,!0),a=Te.current,a!==null){switch(a.tag){case 13:return De===null?Bo():a.alternate===null&&jt===0&&(jt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===qr?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Lo(t,n,i)),!1;case 22:return a.flags|=65536,n===qr?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Lo(t,n,i)),!1}throw Error(o(435,a.tag))}return Lo(t,n,i),Bo(),!1}if(mt)return e=Te.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==_r&&(t=Error(o(422),{cause:n}),pl(xe(t,a)))):(n!==_r&&(e=Error(o(423),{cause:n}),pl(xe(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=xe(n,a),i=co(t.stateNode,n,i),Xr(t,i),jt!==4&&(jt=2)),!1;var u=Error(o(520),{cause:n});if(u=xe(u,a),Ll===null?Ll=[u]:Ll.push(u),jt!==4&&(jt=2),e===null)return!0;n=xe(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=co(a.stateNode,n,t),Xr(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(wa===null||!wa.has(u))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Td(i),wd(i,t,a,n),Xr(a,i),!1}a=a.return}while(a!==null);return!1}var zd=Error(o(461)),Yt=!1;function Qt(t,e,a,n){e.child=t===null?bd(e,null,a,n):Dn(e,t.child,a,n)}function Od(t,e,a,n,i){a=a.render;var u=e.ref;if("ref"in n){var c={};for(var h in n)h!=="ref"&&(c[h]=n[h])}else c=n;return Wa(e),n=Jr(t,e,a,c,u,i),h=$r(),t!==null&&!Yt?(Fr(t,e,i),We(t,e,i)):(mt&&h&&Rr(e),e.flags|=1,Qt(t,e,n,i),e.child)}function Nd(t,e,a,n,i){if(t===null){var u=a.type;return typeof u=="function"&&!Nr(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,Md(t,e,u,n,i)):(t=Ri(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!xo(t,i)){var c=u.memoizedProps;if(a=a.compare,a=a!==null?a:hl,a(c,n)&&t.ref===e.ref)return We(t,e,i)}return e.flags|=1,t=Qe(u,n),t.ref=e.ref,t.return=e,e.child=t}function Md(t,e,a,n,i){if(t!==null){var u=t.memoizedProps;if(hl(u,n)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=n=u,xo(t,i))(t.flags&131072)!==0&&(Yt=!0);else return e.lanes=t.lanes,We(t,e,i)}return ho(t,e,a,n,i)}function Cd(t,e,a){var n=e.pendingProps,i=n.children,u=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=u!==null?u.baseLanes|a:a,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~n}else e.childLanes=0,e.child=null;return Rd(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bi(e,u!==null?u.cachePool:null),u!==null?Mc(e,u):Vr(),pd(e);else return e.lanes=e.childLanes=536870912,Rd(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(Bi(e,u.cachePool),Mc(e,u),ya(),e.memoizedState=null):(t!==null&&Bi(e,null),Vr(),ya());return Qt(t,e,i,a),e.child}function Rd(t,e,a,n){var i=kr();return i=i===null?null:{parent:Ht._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Bi(e,null),Vr(),pd(e),t!==null&&gl(t,e,n,!0),null}function Ii(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function ho(t,e,a,n,i){return Wa(e),a=Jr(t,e,a,n,void 0,i),n=$r(),t!==null&&!Yt?(Fr(t,e,i),We(t,e,i)):(mt&&n&&Rr(e),e.flags|=1,Qt(t,e,a,i),e.child)}function jd(t,e,a,n,i,u){return Wa(e),e.updateQueue=null,a=Rc(e,n,a,i),Cc(t),n=$r(),t!==null&&!Yt?(Fr(t,e,u),We(t,e,u)):(mt&&n&&Rr(e),e.flags|=1,Qt(t,e,a,u),e.child)}function _d(t,e,a,n,i){if(Wa(e),e.stateNode===null){var u=Tn,c=a.contextType;typeof c=="object"&&c!==null&&(u=Ft(c)),u=new a(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=fo,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},Yr(e),c=a.contextType,u.context=typeof c=="object"&&c!==null?Ft(c):Tn,u.state=e.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(so(e,a,c,n),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&fo.enqueueReplaceState(u,u.state,null),wl(e,n,u,i),Tl(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var h=e.memoizedProps,g=tn(a,h);u.props=g;var z=u.context,R=a.contextType;c=Tn,typeof R=="object"&&R!==null&&(c=Ft(R));var D=a.getDerivedStateFromProps;R=typeof D=="function"||typeof u.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,R||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h||z!==c)&&yd(e,u,n,c),ma=!1;var O=e.memoizedState;u.state=O,wl(e,n,u,i),Tl(),z=e.memoizedState,h||O!==z||ma?(typeof D=="function"&&(so(e,a,D,n),z=e.memoizedState),(g=ma||gd(e,a,g,n,O,z,c))?(R||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=z),u.props=n,u.state=z,u.context=c,n=g):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Gr(t,e),c=e.memoizedProps,R=tn(a,c),u.props=R,D=e.pendingProps,O=u.context,z=a.contextType,g=Tn,typeof z=="object"&&z!==null&&(g=Ft(z)),h=a.getDerivedStateFromProps,(z=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==D||O!==g)&&yd(e,u,n,g),ma=!1,O=e.memoizedState,u.state=O,wl(e,n,u,i),Tl();var N=e.memoizedState;c!==D||O!==N||ma||t!==null&&t.dependencies!==null&&Di(t.dependencies)?(typeof h=="function"&&(so(e,a,h,n),N=e.memoizedState),(R=ma||gd(e,a,R,n,O,N,g)||t!==null&&t.dependencies!==null&&Di(t.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,N,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,N,g)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=N),u.props=n,u.state=N,u.context=g,n=R):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,Ii(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=Dn(e,t.child,null,i),e.child=Dn(e,null,a,i)):Qt(t,e,a,i),e.memoizedState=u.state,t=e.child):t=We(t,e,i),t}function Dd(t,e,a,n){return bl(),e.flags|=256,Qt(t,e,a,n),e.child}var mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vo(t){return{baseLanes:t,cachePool:Sc()}}function bo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=we),t}function Ud(t,e,a){var n=e.pendingProps,i=!1,u=(e.flags&128)!==0,c;if((c=u)||(c=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),c&&(i=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(mt){if(i?ga(e):ya(),mt){var h=Rt,g;if(g=h){t:{for(g=h,h=_e;g.nodeType!==8;){if(!h){h=null;break t}if(g=Me(g.nextSibling),g===null){h=null;break t}}h=g}h!==null?(e.memoizedState={dehydrated:h,treeContext:Za!==null?{id:Ve,overflow:Ze}:null,retryLane:536870912,hydrationErrors:null},g=fe(18,null,null,0),g.stateNode=h,g.return=e,e.child=g,It=e,Rt=null,g=!0):g=!1}g||$a(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Io(h)?e.lanes=32:e.lanes=536870912,null;Fe(e)}return h=n.children,n=n.fallback,i?(ya(),i=e.mode,h=tu({mode:"hidden",children:h},i),n=Va(n,i,a,null),h.return=e,n.return=e,h.sibling=n,e.child=h,i=e.child,i.memoizedState=vo(a),i.childLanes=bo(t,c,a),e.memoizedState=mo,n):(ga(e),po(e,h))}if(g=t.memoizedState,g!==null&&(h=g.dehydrated,h!==null)){if(u)e.flags&256?(ga(e),e.flags&=-257,e=go(t,e,a)):e.memoizedState!==null?(ya(),e.child=t.child,e.flags|=128,e=null):(ya(),i=n.fallback,h=e.mode,n=tu({mode:"visible",children:n.children},h),i=Va(i,h,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,Dn(e,t.child,null,a),n=e.child,n.memoizedState=vo(a),n.childLanes=bo(t,c,a),e.memoizedState=mo,e=i);else if(ga(e),Io(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var z=c.dgst;c=z,n=Error(o(419)),n.stack="",n.digest=c,pl({value:n,source:null,stack:null}),e=go(t,e,a)}else if(Yt||gl(t,e,a,!1),c=(a&t.childLanes)!==0,Yt||c){if(c=At,c!==null&&(n=a&-a,n=(n&42)!==0?1:Iu(n),n=(n&(c.suspendedLanes|a))!==0?0:n,n!==0&&n!==g.retryLane))throw g.retryLane=n,An(t,n),ve(c,t,n),zd;h.data==="$?"||Bo(),e=go(t,e,a)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,Rt=Me(h.nextSibling),It=e,mt=!0,Ja=null,_e=!1,t!==null&&(Ee[Ae++]=Ve,Ee[Ae++]=Ze,Ee[Ae++]=Za,Ve=t.id,Ze=t.overflow,Za=e),e=po(e,n.children),e.flags|=4096);return e}return i?(ya(),i=n.fallback,h=e.mode,g=t.child,z=g.sibling,n=Qe(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,z!==null?i=Qe(z,i):(i=Va(i,h,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,h=t.child.memoizedState,h===null?h=vo(a):(g=h.cachePool,g!==null?(z=Ht._currentValue,g=g.parent!==z?{parent:z,pool:z}:g):g=Sc(),h={baseLanes:h.baseLanes|a,cachePool:g}),i.memoizedState=h,i.childLanes=bo(t,c,a),e.memoizedState=mo,n):(ga(e),a=t.child,t=a.sibling,a=Qe(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=a,e.memoizedState=null,a)}function po(t,e){return e=tu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function tu(t,e){return t=fe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function go(t,e,a){return Dn(e,t.child,null,a),t=po(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Bd(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Ur(t.return,e,a)}function yo(t,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=i)}function Hd(t,e,a){var n=e.pendingProps,i=n.revealOrder,u=n.tail;if(Qt(t,e,n.children,a),n=Lt.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bd(t,a,e);else if(t.tag===19)Bd(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(G(Lt,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Fi(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),yo(e,!1,i,a,u);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fi(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}yo(e,!0,a,null,u);break;case"together":yo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function We(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(gl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=Qe(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Qe(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function xo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Di(t)))}function Z2(t,e,a){switch(e.tag){case 3:Nt(e,e.stateNode.containerInfo),ha(e,Ht,t.memoizedState.cache),bl();break;case 27:case 5:Ju(e);break;case 4:Nt(e,e.stateNode.containerInfo);break;case 10:ha(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(ga(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Ud(t,e,a):(ga(e),t=We(t,e,a),t!==null?t.sibling:null);ga(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(gl(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return Hd(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Lt,Lt.current),n)break;return null;case 22:case 23:return e.lanes=0,Cd(t,e,a);case 24:ha(e,Ht,t.memoizedState.cache)}return We(t,e,a)}function Ld(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Yt=!0;else{if(!xo(t,a)&&(e.flags&128)===0)return Yt=!1,Z2(t,e,a);Yt=(t.flags&131072)!==0}else Yt=!1,mt&&(e.flags&1048576)!==0&&mc(e,_i,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")Nr(n)?(t=tn(n,t),e.tag=1,e=_d(null,e,n,t,a)):(e.tag=0,e=ho(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===ct){e.tag=11,e=Od(null,e,n,t,a);break t}else if(i===zt){e.tag=14,e=Nd(null,e,n,t,a);break t}}throw e=ka(n)||n,Error(o(306,e,""))}}return e;case 0:return ho(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=tn(n,e.pendingProps),_d(t,e,n,i,a);case 3:t:{if(Nt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));n=e.pendingProps;var u=e.memoizedState;i=u.element,Gr(t,e),wl(e,n,null,a);var c=e.memoizedState;if(n=c.cache,ha(e,Ht,n),n!==u.cache&&Br(e,[Ht],a,!0),Tl(),n=c.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Dd(t,e,n,a);break t}else if(n!==i){i=xe(Error(o(424)),e),pl(i),e=Dd(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Rt=Me(t.firstChild),It=e,mt=!0,Ja=null,_e=!0,a=bd(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(bl(),n===i){e=We(t,e,a);break t}Qt(t,e,n,a)}e=e.child}return e;case 26:return Ii(t,e),t===null?(a=G0(e.type,null,e.pendingProps,null))?e.memoizedState=a:mt||(a=e.type,t=e.pendingProps,n=mu(at.current).createElement(a),n[$t]=e,n[te]=t,Zt(n,a,t),qt(n),e.stateNode=n):e.memoizedState=G0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ju(e),t===null&&mt&&(n=e.stateNode=k0(e.type,e.pendingProps,at.current),It=e,_e=!0,i=Rt,Na(e.type)?(ts=i,Rt=Me(n.firstChild)):Rt=i),Qt(t,e,e.pendingProps.children,a),Ii(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&mt&&((i=n=Rt)&&(n=xv(n,e.type,e.pendingProps,_e),n!==null?(e.stateNode=n,It=e,Rt=Me(n.firstChild),_e=!1,i=!0):i=!1),i||$a(e)),Ju(e),i=e.type,u=e.pendingProps,c=t!==null?t.memoizedProps:null,n=u.children,Fo(i,u)?n=null:c!==null&&Fo(i,c)&&(e.flags|=32),e.memoizedState!==null&&(i=Jr(t,e,L2,null,null,a),Kl._currentValue=i),Ii(t,e),Qt(t,e,n,a),e.child;case 6:return t===null&&mt&&((t=a=Rt)&&(a=Sv(a,e.pendingProps,_e),a!==null?(e.stateNode=a,It=e,Rt=null,t=!0):t=!1),t||$a(e)),null;case 13:return Ud(t,e,a);case 4:return Nt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Dn(e,null,n,a):Qt(t,e,n,a),e.child;case 11:return Od(t,e,e.type,e.pendingProps,a);case 7:return Qt(t,e,e.pendingProps,a),e.child;case 8:return Qt(t,e,e.pendingProps.children,a),e.child;case 12:return Qt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,ha(e,e.type,n.value),Qt(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Wa(e),i=Ft(i),n=n(i),e.flags|=1,Qt(t,e,n,a),e.child;case 14:return Nd(t,e,e.type,e.pendingProps,a);case 15:return Md(t,e,e.type,e.pendingProps,a);case 19:return Hd(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=tu(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Qe(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return Cd(t,e,a);case 24:return Wa(e),n=Ft(Ht),t===null?(i=kr(),i===null&&(i=At,u=Hr(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=a),i=u),e.memoizedState={parent:n,cache:i},Yr(e),ha(e,Ht,i)):((t.lanes&a)!==0&&(Gr(t,e),wl(e,null,null,a),Tl()),i=t.memoizedState,u=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),ha(e,Ht,n)):(n=u.cache,ha(e,Ht,n),n!==i.cache&&Br(e,[Ht],a,!0))),Qt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Pe(t){t.flags|=4}function kd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K0(e)){if(e=Te.current,e!==null&&((ft&4194048)===ft?De!==null:(ft&62914560)!==ft&&(ft&536870912)===0||e!==De))throw El=qr,Ec;t.flags|=8192}}function eu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?pf():536870912,t.lanes|=e,Ln|=e)}function jl(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function K2(t,e,a){var n=e.pendingProps;switch(jr(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Ct(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Je(Ht),sa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vl(e)?Pe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,pc())),Ct(e),null;case 26:return a=e.memoizedState,t===null?(Pe(e),a!==null?(Ct(e),kd(e,a)):(Ct(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Pe(e),Ct(e),kd(e,a)):(Ct(e),e.flags&=-16777217):(t.memoizedProps!==n&&Pe(e),Ct(e),e.flags&=-16777217),null;case 27:di(e),a=at.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Pe(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return Ct(e),null}t=W.current,vl(e)?vc(e):(t=k0(i,n,a),e.stateNode=t,Pe(e))}return Ct(e),null;case 5:if(di(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Pe(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return Ct(e),null}if(t=W.current,vl(e))vc(e);else{switch(i=mu(at.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[$t]=e,t[te]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Zt(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Pe(e)}}return Ct(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Pe(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(o(166));if(t=at.current,vl(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=It,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[$t]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||j0(t.nodeValue,a)),t||$a(e)}else t=mu(t).createTextNode(n),t[$t]=e,e.stateNode=t}return Ct(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=vl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(o(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[$t]=e}else bl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),i=!1}else i=pc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Fe(e),e):(Fe(e),null)}if(Fe(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var u=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),eu(e,e.updateQueue),Ct(e),null;case 4:return sa(),t===null&&Vo(e.stateNode.containerInfo),Ct(e),null;case 10:return Je(e.type),Ct(e),null;case 19:if(Q(Lt),i=e.memoizedState,i===null)return Ct(e),null;if(n=(e.flags&128)!==0,u=i.rendering,u===null)if(n)jl(i,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Fi(t),u!==null){for(e.flags|=128,jl(i,!1),t=u.updateQueue,e.updateQueue=t,eu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)hc(a,t),a=a.sibling;return G(Lt,Lt.current&1|2),e.child}t=t.sibling}i.tail!==null&&je()>lu&&(e.flags|=128,n=!0,jl(i,!1),e.lanes=4194304)}else{if(!n)if(t=Fi(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,eu(e,t),jl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!mt)return Ct(e),null}else 2*je()-i.renderingStartTime>lu&&a!==536870912&&(e.flags|=128,n=!0,jl(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=je(),e.sibling=null,t=Lt.current,G(Lt,n?t&1|2:t&1),e):(Ct(e),null);case 22:case 23:return Fe(e),Zr(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),a=e.updateQueue,a!==null&&eu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&Q(Pa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Je(Ht),Ct(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function J2(t,e){switch(jr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Je(Ht),sa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return di(e),null;case 13:if(Fe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));bl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(Lt),null;case 4:return sa(),null;case 10:return Je(e.type),null;case 22:case 23:return Fe(e),Zr(),t!==null&&Q(Pa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Je(Ht),null;case 25:return null;default:return null}}function qd(t,e){switch(jr(e),e.tag){case 3:Je(Ht),sa();break;case 26:case 27:case 5:di(e);break;case 4:sa();break;case 13:Fe(e);break;case 19:Q(Lt);break;case 10:Je(e.type);break;case 22:case 23:Fe(e),Zr(),t!==null&&Q(Pa);break;case 24:Je(Ht)}}function _l(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var u=a.create,c=a.inst;n=u(),c.destroy=n}a=a.next}while(a!==i)}}catch(h){Et(e,e.return,h)}}function xa(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&t)===t){var c=n.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,i=e;var g=a,z=h;try{z()}catch(R){Et(i,g,R)}}}n=n.next}while(n!==u)}}catch(R){Et(e,e.return,R)}}function Yd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Nc(e,a)}catch(n){Et(t,t.return,n)}}}function Gd(t,e,a){a.props=tn(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Et(t,e,n)}}function Dl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){Et(t,e,i)}}function Ue(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Et(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Et(t,e,i)}else a.current=null}function Xd(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Et(t,t.return,i)}}function So(t,e,a){try{var n=t.stateNode;vv(n,t.type,a,e),n[te]=e}catch(i){Et(t,t.return,i)}}function Qd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function Eo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ao(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=hu));else if(n!==4&&(n===27&&Na(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ao(t,e,a),t=t.sibling;t!==null;)Ao(t,e,a),t=t.sibling}function au(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(au(t,e,a),t=t.sibling;t!==null;)au(t,e,a),t=t.sibling}function Vd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Zt(e,n,a),e[$t]=t,e[te]=a}catch(u){Et(t,t.return,u)}}var Ie=!1,Dt=!1,To=!1,Zd=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function $2(t,e){if(t=t.containerInfo,Jo=xu,t=nc(t),Sr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var c=0,h=-1,g=-1,z=0,R=0,D=t,O=null;e:for(;;){for(var N;D!==a||i!==0&&D.nodeType!==3||(h=c+i),D!==u||n!==0&&D.nodeType!==3||(g=c+n),D.nodeType===3&&(c+=D.nodeValue.length),(N=D.firstChild)!==null;)O=D,D=N;for(;;){if(D===t)break e;if(O===a&&++z===i&&(h=c),O===u&&++R===n&&(g=c),(N=D.nextSibling)!==null)break;D=O,O=D.parentNode}D=N}a=h===-1||g===-1?null:{start:h,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for($o={focusedElem:t,selectionRange:a},xu=!1,Gt=e;Gt!==null;)if(e=Gt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Gt=t;else for(;Gt!==null;){switch(e=Gt,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,i=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var et=tn(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(et,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(P){Et(a,a.return,P)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Po(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Po(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Gt=t;break}Gt=e.return}}function Kd(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a),n&4&&_l(5,a);break;case 1:if(Sa(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(c){Et(a,a.return,c)}else{var i=tn(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Et(a,a.return,c)}}n&64&&Yd(a),n&512&&Dl(a,a.return);break;case 3:if(Sa(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Nc(t,e)}catch(c){Et(a,a.return,c)}}break;case 27:e===null&&n&4&&Vd(a);case 26:case 5:Sa(t,a),e===null&&n&4&&Xd(a),n&512&&Dl(a,a.return);break;case 12:Sa(t,a);break;case 13:Sa(t,a),n&4&&Fd(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=lv.bind(null,a),Ev(t,a))));break;case 22:if(n=a.memoizedState!==null||Ie,!n){e=e!==null&&e.memoizedState!==null||Dt,i=Ie;var u=Dt;Ie=n,(Dt=e)&&!u?Ea(t,a,(a.subtreeFlags&8772)!==0):Sa(t,a),Ie=i,Dt=u}break;case 30:break;default:Sa(t,a)}}function Jd(t){var e=t.alternate;e!==null&&(t.alternate=null,Jd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ar(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Mt=null,ne=!1;function ta(t,e,a){for(a=a.child;a!==null;)$d(t,e,a),a=a.sibling}function $d(t,e,a){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(el,a)}catch{}switch(a.tag){case 26:Dt||Ue(a,e),ta(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dt||Ue(a,e);var n=Mt,i=ne;Na(a.type)&&(Mt=a.stateNode,ne=!1),ta(t,e,a),Xl(a.stateNode),Mt=n,ne=i;break;case 5:Dt||Ue(a,e);case 6:if(n=Mt,i=ne,Mt=null,ta(t,e,a),Mt=n,ne=i,Mt!==null)if(ne)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(a.stateNode)}catch(u){Et(a,e,u)}else try{Mt.removeChild(a.stateNode)}catch(u){Et(a,e,u)}break;case 18:Mt!==null&&(ne?(t=Mt,H0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Wl(t)):H0(Mt,a.stateNode));break;case 4:n=Mt,i=ne,Mt=a.stateNode.containerInfo,ne=!0,ta(t,e,a),Mt=n,ne=i;break;case 0:case 11:case 14:case 15:Dt||xa(2,a,e),Dt||xa(4,a,e),ta(t,e,a);break;case 1:Dt||(Ue(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Gd(a,e,n)),ta(t,e,a);break;case 21:ta(t,e,a);break;case 22:Dt=(n=Dt)||a.memoizedState!==null,ta(t,e,a),Dt=n;break;default:ta(t,e,a)}}function Fd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wl(t)}catch(a){Et(e,e.return,a)}}function F2(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Zd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Zd),e;default:throw Error(o(435,t.tag))}}function wo(t,e){var a=F2(t);e.forEach(function(n){var i=iv.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function ce(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],u=t,c=e,h=c;t:for(;h!==null;){switch(h.tag){case 27:if(Na(h.type)){Mt=h.stateNode,ne=!1;break t}break;case 5:Mt=h.stateNode,ne=!1;break t;case 3:case 4:Mt=h.stateNode.containerInfo,ne=!0;break t}h=h.return}if(Mt===null)throw Error(o(160));$d(u,c,i),Mt=null,ne=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Wd(e,t),e=e.sibling}var Ne=null;function Wd(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ce(e,t),de(t),n&4&&(xa(3,t,t.return),_l(3,t),xa(5,t,t.return));break;case 1:ce(e,t),de(t),n&512&&(Dt||a===null||Ue(a,a.return)),n&64&&Ie&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ne;if(ce(e,t),de(t),n&512&&(Dt||a===null||Ue(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":u=i.getElementsByTagName("title")[0],(!u||u[ll]||u[$t]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(n),i.head.insertBefore(u,i.querySelector("head > title"))),Zt(u,n,a),u[$t]=t,qt(u),n=u;break t;case"link":var c=V0("link","href",i).get(n+(a.href||""));if(c){for(var h=0;h<c.length;h++)if(u=c[h],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(h,1);break e}}u=i.createElement(n),Zt(u,n,a),i.head.appendChild(u);break;case"meta":if(c=V0("meta","content",i).get(n+(a.content||""))){for(h=0;h<c.length;h++)if(u=c[h],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(h,1);break e}}u=i.createElement(n),Zt(u,n,a),i.head.appendChild(u);break;default:throw Error(o(468,n))}u[$t]=t,qt(u),n=u}t.stateNode=n}else Z0(i,t.type,t.stateNode);else t.stateNode=Q0(i,n,t.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?Z0(i,t.type,t.stateNode):Q0(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&So(t,t.memoizedProps,a.memoizedProps)}break;case 27:ce(e,t),de(t),n&512&&(Dt||a===null||Ue(a,a.return)),a!==null&&n&4&&So(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ce(e,t),de(t),n&512&&(Dt||a===null||Ue(a,a.return)),t.flags&32){i=t.stateNode;try{bn(i,"")}catch(N){Et(t,t.return,N)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,So(t,i,a!==null?a.memoizedProps:i)),n&1024&&(To=!0);break;case 6:if(ce(e,t),de(t),n&4){if(t.stateNode===null)throw Error(o(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(N){Et(t,t.return,N)}}break;case 3:if(pu=null,i=Ne,Ne=vu(e.containerInfo),ce(e,t),Ne=i,de(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Wl(e.containerInfo)}catch(N){Et(t,t.return,N)}To&&(To=!1,Pd(t));break;case 4:n=Ne,Ne=vu(t.stateNode.containerInfo),ce(e,t),de(t),Ne=n;break;case 12:ce(e,t),de(t);break;case 13:ce(e,t),de(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ro=je()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wo(t,n)));break;case 22:i=t.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,z=Ie,R=Dt;if(Ie=z||i,Dt=R||g,ce(e,t),Dt=R,Ie=z,de(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||g||Ie||Dt||en(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){g=a=e;try{if(u=g.stateNode,i)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=g.stateNode;var D=g.memoizedProps.style,O=D!=null&&D.hasOwnProperty("display")?D.display:null;h.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(N){Et(g,g.return,N)}}}else if(e.tag===6){if(a===null){g=e;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(N){Et(g,g.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,wo(t,a))));break;case 19:ce(e,t),de(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wo(t,n)));break;case 30:break;case 21:break;default:ce(e,t),de(t)}}function de(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Qd(n)){a=n;break}n=n.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var i=a.stateNode,u=Eo(t);au(t,u,i);break;case 5:var c=a.stateNode;a.flags&32&&(bn(c,""),a.flags&=-33);var h=Eo(t);au(t,h,c);break;case 3:case 4:var g=a.stateNode.containerInfo,z=Eo(t);Ao(t,z,g);break;default:throw Error(o(161))}}catch(R){Et(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Pd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Sa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Kd(t,e.alternate,e),e=e.sibling}function en(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:xa(4,e,e.return),en(e);break;case 1:Ue(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Gd(e,e.return,a),en(e);break;case 27:Xl(e.stateNode);case 26:case 5:Ue(e,e.return),en(e);break;case 22:e.memoizedState===null&&en(e);break;case 30:en(e);break;default:en(e)}t=t.sibling}}function Ea(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,u=e,c=u.flags;switch(u.tag){case 0:case 11:case 15:Ea(i,u,a),_l(4,u);break;case 1:if(Ea(i,u,a),n=u,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Et(n,n.return,z)}if(n=u,i=n.updateQueue,i!==null){var h=n.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)Oc(g[i],h)}catch(z){Et(n,n.return,z)}}a&&c&64&&Yd(u),Dl(u,u.return);break;case 27:Vd(u);case 26:case 5:Ea(i,u,a),a&&n===null&&c&4&&Xd(u),Dl(u,u.return);break;case 12:Ea(i,u,a);break;case 13:Ea(i,u,a),a&&c&4&&Fd(i,u);break;case 22:u.memoizedState===null&&Ea(i,u,a),Dl(u,u.return);break;case 30:break;default:Ea(i,u,a)}e=e.sibling}}function zo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&yl(a))}function Oo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&yl(t))}function Be(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Id(t,e,a,n),e=e.sibling}function Id(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Be(t,e,a,n),i&2048&&_l(9,e);break;case 1:Be(t,e,a,n);break;case 3:Be(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&yl(t)));break;case 12:if(i&2048){Be(t,e,a,n),t=e.stateNode;try{var u=e.memoizedProps,c=u.id,h=u.onPostCommit;typeof h=="function"&&h(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){Et(e,e.return,g)}}else Be(t,e,a,n);break;case 13:Be(t,e,a,n);break;case 23:break;case 22:u=e.stateNode,c=e.alternate,e.memoizedState!==null?u._visibility&2?Be(t,e,a,n):Ul(t,e):u._visibility&2?Be(t,e,a,n):(u._visibility|=2,Un(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&zo(c,e);break;case 24:Be(t,e,a,n),i&2048&&Oo(e.alternate,e);break;default:Be(t,e,a,n)}}function Un(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,c=e,h=a,g=n,z=c.flags;switch(c.tag){case 0:case 11:case 15:Un(u,c,h,g,i),_l(8,c);break;case 23:break;case 22:var R=c.stateNode;c.memoizedState!==null?R._visibility&2?Un(u,c,h,g,i):Ul(u,c):(R._visibility|=2,Un(u,c,h,g,i)),i&&z&2048&&zo(c.alternate,c);break;case 24:Un(u,c,h,g,i),i&&z&2048&&Oo(c.alternate,c);break;default:Un(u,c,h,g,i)}e=e.sibling}}function Ul(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Ul(a,n),i&2048&&zo(n.alternate,n);break;case 24:Ul(a,n),i&2048&&Oo(n.alternate,n);break;default:Ul(a,n)}e=e.sibling}}var Bl=8192;function Bn(t){if(t.subtreeFlags&Bl)for(t=t.child;t!==null;)t0(t),t=t.sibling}function t0(t){switch(t.tag){case 26:Bn(t),t.flags&Bl&&t.memoizedState!==null&&Uv(Ne,t.memoizedState,t.memoizedProps);break;case 5:Bn(t);break;case 3:case 4:var e=Ne;Ne=vu(t.stateNode.containerInfo),Bn(t),Ne=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Bl,Bl=16777216,Bn(t),Bl=e):Bn(t));break;default:Bn(t)}}function e0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Hl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Gt=n,n0(n,t)}e0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a0(t),t=t.sibling}function a0(t){switch(t.tag){case 0:case 11:case 15:Hl(t),t.flags&2048&&xa(9,t,t.return);break;case 3:Hl(t);break;case 12:Hl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,nu(t)):Hl(t);break;default:Hl(t)}}function nu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Gt=n,n0(n,t)}e0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:xa(8,e,e.return),nu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,nu(e));break;default:nu(e)}t=t.sibling}}function n0(t,e){for(;Gt!==null;){var a=Gt;switch(a.tag){case 0:case 11:case 15:xa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:yl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Gt=n;else t:for(a=t;Gt!==null;){n=Gt;var i=n.sibling,u=n.return;if(Jd(n),n===a){Gt=null;break t}if(i!==null){i.return=u,Gt=i;break t}Gt=u}}}var W2={getCacheForType:function(t){var e=Ft(Ht),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},P2=typeof WeakMap=="function"?WeakMap:Map,vt=0,At=null,rt=null,ft=0,bt=0,he=null,Aa=!1,Hn=!1,No=!1,ea=0,jt=0,Ta=0,an=0,Mo=0,we=0,Ln=0,Ll=null,le=null,Co=!1,Ro=0,lu=1/0,iu=null,wa=null,Vt=0,za=null,kn=null,qn=0,jo=0,_o=null,l0=null,kl=0,Do=null;function me(){if((vt&2)!==0&&ft!==0)return ft&-ft;if(j.T!==null){var t=On;return t!==0?t:Yo()}return xf()}function i0(){we===0&&(we=(ft&536870912)===0||mt?bf():536870912);var t=Te.current;return t!==null&&(t.flags|=32),we}function ve(t,e,a){(t===At&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(Yn(t,0),Oa(t,ft,we,!1)),nl(t,a),((vt&2)===0||t!==At)&&(t===At&&((vt&2)===0&&(an|=a),jt===4&&Oa(t,ft,we,!1)),He(t))}function u0(t,e,a){if((vt&6)!==0)throw Error(o(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||al(t,e),i=n?ev(t,e):Ho(t,e,!0),u=n;do{if(i===0){Hn&&!n&&Oa(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!I2(a)){i=Ho(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var h=t;i=Ll;var g=h.current.memoizedState.isDehydrated;if(g&&(Yn(h,c).flags|=256),c=Ho(h,c,!1),c!==2){if(No&&!g){h.errorRecoveryDisabledLanes|=u,an|=u,i=4;break t}u=le,le=i,u!==null&&(le===null?le=u:le.push.apply(le,u))}i=c}if(u=!1,i!==2)continue}}if(i===1){Yn(t,0),Oa(t,e,0,!0);break}t:{switch(n=t,u=i,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Oa(n,e,we,!Aa);break t;case 2:le=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(i=Ro+300-je(),10<i)){if(Oa(n,e,we,!Aa),bi(n,0,!0)!==0)break t;n.timeoutHandle=U0(r0.bind(null,n,a,le,iu,Co,e,we,an,Ln,Aa,u,2,-0,0),i);break t}r0(n,a,le,iu,Co,e,we,an,Ln,Aa,u,0,-0,0)}}break}while(!0);He(t)}function r0(t,e,a,n,i,u,c,h,g,z,R,D,O,N){if(t.timeoutHandle=-1,D=e.subtreeFlags,(D&8192||(D&16785408)===16785408)&&(Zl={stylesheets:null,count:0,unsuspend:Dv},t0(e),D=Bv(),D!==null)){t.cancelPendingCommit=D(m0.bind(null,t,e,u,a,n,i,c,h,g,R,1,O,N)),Oa(t,u,c,!z);return}m0(t,e,u,a,n,i,c,h,g)}function I2(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],u=i.getSnapshot;i=i.value;try{if(!se(u(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oa(t,e,a,n){e&=~Mo,e&=~an,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var u=31-oe(i),c=1<<u;n[u]=-1,i&=~c}a!==0&&gf(t,a,e)}function uu(){return(vt&6)===0?(ql(0),!1):!0}function Uo(){if(rt!==null){if(bt===0)var t=rt.return;else t=rt,Ke=Fa=null,Wr(t),_n=null,Cl=0,t=rt;for(;t!==null;)qd(t.alternate,t),t=t.return;rt=null}}function Yn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,pv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Uo(),At=t,rt=a=Qe(t.current,null),ft=e,bt=0,he=null,Aa=!1,Hn=al(t,e),No=!1,Ln=we=Mo=an=Ta=jt=0,le=Ll=null,Co=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-oe(n),u=1<<i;e|=t[i],n&=~u}return ea=e,Ni(),a}function o0(t,e){lt=null,j.H=Ki,e===Sl||e===Hi?(e=wc(),bt=3):e===Ec?(e=wc(),bt=4):bt=e===zd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,he=e,rt===null&&(jt=1,Pi(t,xe(e,t.current)))}function s0(){var t=j.H;return j.H=Ki,t===null?Ki:t}function f0(){var t=j.A;return j.A=W2,t}function Bo(){jt=4,Aa||(ft&4194048)!==ft&&Te.current!==null||(Hn=!0),(Ta&134217727)===0&&(an&134217727)===0||At===null||Oa(At,ft,we,!1)}function Ho(t,e,a){var n=vt;vt|=2;var i=s0(),u=f0();(At!==t||ft!==e)&&(iu=null,Yn(t,e)),e=!1;var c=jt;t:do try{if(bt!==0&&rt!==null){var h=rt,g=he;switch(bt){case 8:Uo(),c=6;break t;case 3:case 2:case 9:case 6:Te.current===null&&(e=!0);var z=bt;if(bt=0,he=null,Gn(t,h,g,z),a&&Hn){c=0;break t}break;default:z=bt,bt=0,he=null,Gn(t,h,g,z)}}tv(),c=jt;break}catch(R){o0(t,R)}while(!0);return e&&t.shellSuspendCounter++,Ke=Fa=null,vt=n,j.H=i,j.A=u,rt===null&&(At=null,ft=0,Ni()),c}function tv(){for(;rt!==null;)c0(rt)}function ev(t,e){var a=vt;vt|=2;var n=s0(),i=f0();At!==t||ft!==e?(iu=null,lu=je()+500,Yn(t,e)):Hn=al(t,e);t:do try{if(bt!==0&&rt!==null){e=rt;var u=he;e:switch(bt){case 1:bt=0,he=null,Gn(t,e,u,1);break;case 2:case 9:if(Ac(u)){bt=0,he=null,d0(e);break}e=function(){bt!==2&&bt!==9||At!==t||(bt=7),He(t)},u.then(e,e);break t;case 3:bt=7;break t;case 4:bt=5;break t;case 7:Ac(u)?(bt=0,he=null,d0(e)):(bt=0,he=null,Gn(t,e,u,7));break;case 5:var c=null;switch(rt.tag){case 26:c=rt.memoizedState;case 5:case 27:var h=rt;if(!c||K0(c)){bt=0,he=null;var g=h.sibling;if(g!==null)rt=g;else{var z=h.return;z!==null?(rt=z,ru(z)):rt=null}break e}}bt=0,he=null,Gn(t,e,u,5);break;case 6:bt=0,he=null,Gn(t,e,u,6);break;case 8:Uo(),jt=6;break t;default:throw Error(o(462))}}av();break}catch(R){o0(t,R)}while(!0);return Ke=Fa=null,j.H=n,j.A=i,vt=a,rt!==null?0:(At=null,ft=0,Ni(),jt)}function av(){for(;rt!==null&&!Tm();)c0(rt)}function c0(t){var e=Ld(t.alternate,t,ea);t.memoizedProps=t.pendingProps,e===null?ru(t):rt=e}function d0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=jd(a,e,e.pendingProps,e.type,void 0,ft);break;case 11:e=jd(a,e,e.pendingProps,e.type.render,e.ref,ft);break;case 5:Wr(e);default:qd(a,e),e=rt=hc(e,ea),e=Ld(a,e,ea)}t.memoizedProps=t.pendingProps,e===null?ru(t):rt=e}function Gn(t,e,a,n){Ke=Fa=null,Wr(e),_n=null,Cl=0;var i=e.return;try{if(V2(t,i,e,a,ft)){jt=1,Pi(t,xe(a,t.current)),rt=null;return}}catch(u){if(i!==null)throw rt=i,u;jt=1,Pi(t,xe(a,t.current)),rt=null;return}e.flags&32768?(mt||n===1?t=!0:Hn||(ft&536870912)!==0?t=!1:(Aa=t=!0,(n===2||n===9||n===3||n===6)&&(n=Te.current,n!==null&&n.tag===13&&(n.flags|=16384))),h0(e,t)):ru(e)}function ru(t){var e=t;do{if((e.flags&32768)!==0){h0(e,Aa);return}t=e.return;var a=K2(e.alternate,e,ea);if(a!==null){rt=a;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);jt===0&&(jt=5)}function h0(t,e){do{var a=J2(t.alternate,t);if(a!==null){a.flags&=32767,rt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){rt=t;return}rt=t=a}while(t!==null);jt=6,rt=null}function m0(t,e,a,n,i,u,c,h,g){t.cancelPendingCommit=null;do ou();while(Vt!==0);if((vt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=zr,Dm(t,a,u,c,h,g),t===At&&(rt=At=null,ft=0),kn=e,za=t,qn=a,jo=u,_o=i,l0=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,uv(hi,function(){return y0(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null,i=X.p,X.p=2,c=vt,vt|=4;try{$2(t,e,a)}finally{vt=c,X.p=i,j.T=n}}Vt=1,v0(),b0(),p0()}}function v0(){if(Vt===1){Vt=0;var t=za,e=kn,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var n=X.p;X.p=2;var i=vt;vt|=4;try{Wd(e,t);var u=$o,c=nc(t.containerInfo),h=u.focusedElem,g=u.selectionRange;if(c!==h&&h&&h.ownerDocument&&ac(h.ownerDocument.documentElement,h)){if(g!==null&&Sr(h)){var z=g.start,R=g.end;if(R===void 0&&(R=z),"selectionStart"in h)h.selectionStart=z,h.selectionEnd=Math.min(R,h.value.length);else{var D=h.ownerDocument||document,O=D&&D.defaultView||window;if(O.getSelection){var N=O.getSelection(),et=h.textContent.length,P=Math.min(g.start,et),yt=g.end===void 0?P:Math.min(g.end,et);!N.extend&&P>yt&&(c=yt,yt=P,P=c);var A=ec(h,P),E=ec(h,yt);if(A&&E&&(N.rangeCount!==1||N.anchorNode!==A.node||N.anchorOffset!==A.offset||N.focusNode!==E.node||N.focusOffset!==E.offset)){var w=D.createRange();w.setStart(A.node,A.offset),N.removeAllRanges(),P>yt?(N.addRange(w),N.extend(E.node,E.offset)):(w.setEnd(E.node,E.offset),N.addRange(w))}}}}for(D=[],N=h;N=N.parentNode;)N.nodeType===1&&D.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<D.length;h++){var _=D[h];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}xu=!!Jo,$o=Jo=null}finally{vt=i,X.p=n,j.T=a}}t.current=e,Vt=2}}function b0(){if(Vt===2){Vt=0;var t=za,e=kn,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var n=X.p;X.p=2;var i=vt;vt|=4;try{Kd(t,e.alternate,e)}finally{vt=i,X.p=n,j.T=a}}Vt=3}}function p0(){if(Vt===4||Vt===3){Vt=0,wm();var t=za,e=kn,a=qn,n=l0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Vt=5:(Vt=0,kn=za=null,g0(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(wa=null),tr(a),e=e.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=j.T,i=X.p,X.p=2,j.T=null;try{for(var u=t.onRecoverableError,c=0;c<n.length;c++){var h=n[c];u(h.value,{componentStack:h.stack})}}finally{j.T=e,X.p=i}}(qn&3)!==0&&ou(),He(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===Do?kl++:(kl=0,Do=t):kl=0,ql(0)}}function g0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,yl(e)))}function ou(t){return v0(),b0(),p0(),y0()}function y0(){if(Vt!==5)return!1;var t=za,e=jo;jo=0;var a=tr(qn),n=j.T,i=X.p;try{X.p=32>a?32:a,j.T=null,a=_o,_o=null;var u=za,c=qn;if(Vt=0,kn=za=null,qn=0,(vt&6)!==0)throw Error(o(331));var h=vt;if(vt|=4,a0(u.current),Id(u,u.current,c,a),vt=h,ql(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(el,u)}catch{}return!0}finally{X.p=i,j.T=n,g0(t,e)}}function x0(t,e,a){e=xe(a,e),e=co(t.stateNode,e,2),t=ba(t,e,2),t!==null&&(nl(t,2),He(t))}function Et(t,e,a){if(t.tag===3)x0(t,t,a);else for(;e!==null;){if(e.tag===3){x0(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(wa===null||!wa.has(n))){t=xe(a,t),a=Td(2),n=ba(e,a,2),n!==null&&(wd(a,n,e,t),nl(n,2),He(n));break}}e=e.return}}function Lo(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new P2;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(No=!0,i.add(a),t=nv.bind(null,t,e,a),e.then(t,t))}function nv(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,At===t&&(ft&a)===a&&(jt===4||jt===3&&(ft&62914560)===ft&&300>je()-Ro?(vt&2)===0&&Yn(t,0):Mo|=a,Ln===ft&&(Ln=0)),He(t)}function S0(t,e){e===0&&(e=pf()),t=An(t,e),t!==null&&(nl(t,e),He(t))}function lv(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),S0(t,a)}function iv(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(e),S0(t,a)}function uv(t,e){return Fu(t,e)}var su=null,Xn=null,ko=!1,fu=!1,qo=!1,nn=0;function He(t){t!==Xn&&t.next===null&&(Xn===null?su=Xn=t:Xn=Xn.next=t),fu=!0,ko||(ko=!0,ov())}function ql(t,e){if(!qo&&fu){qo=!0;do for(var a=!1,n=su;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var u=0;else{var c=n.suspendedLanes,h=n.pingedLanes;u=(1<<31-oe(42|t)+1)-1,u&=i&~(c&~h),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,w0(n,u))}else u=ft,u=bi(n,n===At?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||al(n,u)||(a=!0,w0(n,u));n=n.next}while(a);qo=!1}}function rv(){E0()}function E0(){fu=ko=!1;var t=0;nn!==0&&(bv()&&(t=nn),nn=0);for(var e=je(),a=null,n=su;n!==null;){var i=n.next,u=A0(n,e);u===0?(n.next=null,a===null?su=i:a.next=i,i===null&&(Xn=a)):(a=n,(t!==0||(u&3)!==0)&&(fu=!0)),n=i}ql(t)}function A0(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var c=31-oe(u),h=1<<c,g=i[c];g===-1?((h&a)===0||(h&n)!==0)&&(i[c]=_m(h,e)):g<=e&&(t.expiredLanes|=h),u&=~h}if(e=At,a=ft,a=bi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Wu(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||al(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Wu(n),tr(a)){case 2:case 8:a=mf;break;case 32:a=hi;break;case 268435456:a=vf;break;default:a=hi}return n=T0.bind(null,t),a=Fu(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Wu(n),t.callbackPriority=2,t.callbackNode=null,2}function T0(t,e){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ou()&&t.callbackNode!==a)return null;var n=ft;return n=bi(t,t===At?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(u0(t,n,e),A0(t,je()),t.callbackNode!=null&&t.callbackNode===a?T0.bind(null,t):null)}function w0(t,e){if(ou())return null;u0(t,e,!0)}function ov(){gv(function(){(vt&6)!==0?Fu(hf,rv):E0()})}function Yo(){return nn===0&&(nn=bf()),nn}function z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Si(""+t)}function O0(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function sv(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var u=z0((i[te]||null).action),c=n.submitter;c&&(e=(e=c[te]||null)?z0(e.formAction):c.getAttribute("formAction"),e!==null&&(u=e,c=null));var h=new wi("action","action",null,n,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(nn!==0){var g=c?O0(i,c):new FormData(i);uo(a,{pending:!0,data:g,method:i.method,action:u},null,g)}}else typeof u=="function"&&(h.preventDefault(),g=c?O0(i,c):new FormData(i),uo(a,{pending:!0,data:g,method:i.method,action:u},u,g))},currentTarget:i}]})}}for(var Go=0;Go<wr.length;Go++){var Xo=wr[Go],fv=Xo.toLowerCase(),cv=Xo[0].toUpperCase()+Xo.slice(1);Oe(fv,"on"+cv)}Oe(uc,"onAnimationEnd"),Oe(rc,"onAnimationIteration"),Oe(oc,"onAnimationStart"),Oe("dblclick","onDoubleClick"),Oe("focusin","onFocus"),Oe("focusout","onBlur"),Oe(N2,"onTransitionRun"),Oe(M2,"onTransitionStart"),Oe(C2,"onTransitionCancel"),Oe(sc,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function N0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var c=n.length-1;0<=c;c--){var h=n[c],g=h.instance,z=h.currentTarget;if(h=h.listener,g!==u&&i.isPropagationStopped())break t;u=h,i.currentTarget=z;try{u(i)}catch(R){Wi(R)}i.currentTarget=null,u=g}else for(c=0;c<n.length;c++){if(h=n[c],g=h.instance,z=h.currentTarget,h=h.listener,g!==u&&i.isPropagationStopped())break t;u=h,i.currentTarget=z;try{u(i)}catch(R){Wi(R)}i.currentTarget=null,u=g}}}}function ot(t,e){var a=e[er];a===void 0&&(a=e[er]=new Set);var n=t+"__bubble";a.has(n)||(M0(e,t,2,!1),a.add(n))}function Qo(t,e,a){var n=0;e&&(n|=4),M0(a,t,n,e)}var cu="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[cu]){t[cu]=!0,Ef.forEach(function(a){a!=="selectionchange"&&(dv.has(a)||Qo(a,!1,t),Qo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cu]||(e[cu]=!0,Qo("selectionchange",!1,e))}}function M0(t,e,a,n){switch(I0(e)){case 2:var i=kv;break;case 8:i=qv;break;default:i=is}a=i.bind(null,e,a,t),i=void 0,!dr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Zo(t,e,a,n,i){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var h=n.stateNode.containerInfo;if(h===i)break;if(c===4)for(c=n.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;h!==null;){if(c=fn(h),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){n=u=c;continue t}h=h.parentNode}}n=n.return}Bf(function(){var z=u,R=fr(a),D=[];t:{var O=fc.get(t);if(O!==void 0){var N=wi,et=t;switch(t){case"keypress":if(Ai(a)===0)break t;case"keydown":case"keyup":N=u2;break;case"focusin":et="focus",N=br;break;case"focusout":et="blur",N=br;break;case"beforeblur":case"afterblur":N=br;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=s2;break;case uc:case rc:case oc:N=Wm;break;case sc:N=c2;break;case"scroll":case"scrollend":N=Zm;break;case"wheel":N=h2;break;case"copy":case"cut":case"paste":N=Im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Yf;break;case"toggle":case"beforetoggle":N=v2}var P=(e&4)!==0,yt=!P&&(t==="scroll"||t==="scrollend"),A=P?O!==null?O+"Capture":null:O;P=[];for(var E=z,w;E!==null;){var _=E;if(w=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||w===null||A===null||(_=ul(E,A),_!=null&&P.push(Gl(E,_,w))),yt)break;E=E.return}0<P.length&&(O=new N(O,et,null,a,R),D.push({event:O,listeners:P}))}}if((e&7)===0){t:{if(O=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",O&&a!==sr&&(et=a.relatedTarget||a.fromElement)&&(fn(et)||et[sn]))break t;if((N||O)&&(O=R.window===R?R:(O=R.ownerDocument)?O.defaultView||O.parentWindow:window,N?(et=a.relatedTarget||a.toElement,N=z,et=et?fn(et):null,et!==null&&(yt=d(et),P=et.tag,et!==yt||P!==5&&P!==27&&P!==6)&&(et=null)):(N=null,et=z),N!==et)){if(P=kf,_="onMouseLeave",A="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(P=Yf,_="onPointerLeave",A="onPointerEnter",E="pointer"),yt=N==null?O:il(N),w=et==null?O:il(et),O=new P(_,E+"leave",N,a,R),O.target=yt,O.relatedTarget=w,_=null,fn(R)===z&&(P=new P(A,E+"enter",et,a,R),P.target=w,P.relatedTarget=yt,_=P),yt=_,N&&et)e:{for(P=N,A=et,E=0,w=P;w;w=Qn(w))E++;for(w=0,_=A;_;_=Qn(_))w++;for(;0<E-w;)P=Qn(P),E--;for(;0<w-E;)A=Qn(A),w--;for(;E--;){if(P===A||A!==null&&P===A.alternate)break e;P=Qn(P),A=Qn(A)}P=null}else P=null;N!==null&&C0(D,O,N,P,!1),et!==null&&yt!==null&&C0(D,yt,et,P,!0)}}t:{if(O=z?il(z):window,N=O.nodeName&&O.nodeName.toLowerCase(),N==="select"||N==="input"&&O.type==="file")var V=$f;else if(Kf(O))if(Ff)V=w2;else{V=A2;var ut=E2}else N=O.nodeName,!N||N.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?z&&or(z.elementType)&&(V=$f):V=T2;if(V&&(V=V(t,z))){Jf(D,V,a,R);break t}ut&&ut(t,O,z),t==="focusout"&&z&&O.type==="number"&&z.memoizedProps.value!=null&&rr(O,"number",O.value)}switch(ut=z?il(z):window,t){case"focusin":(Kf(ut)||ut.contentEditable==="true")&&(xn=ut,Er=z,ml=null);break;case"focusout":ml=Er=xn=null;break;case"mousedown":Ar=!0;break;case"contextmenu":case"mouseup":case"dragend":Ar=!1,lc(D,a,R);break;case"selectionchange":if(O2)break;case"keydown":case"keyup":lc(D,a,R)}var K;if(gr)t:{switch(t){case"compositionstart":var I="onCompositionStart";break t;case"compositionend":I="onCompositionEnd";break t;case"compositionupdate":I="onCompositionUpdate";break t}I=void 0}else yn?Vf(t,a)&&(I="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Gf&&a.locale!=="ko"&&(yn||I!=="onCompositionStart"?I==="onCompositionEnd"&&yn&&(K=Hf()):(da=R,hr="value"in da?da.value:da.textContent,yn=!0)),ut=du(z,I),0<ut.length&&(I=new qf(I,t,null,a,R),D.push({event:I,listeners:ut}),K?I.data=K:(K=Zf(a),K!==null&&(I.data=K)))),(K=p2?g2(t,a):y2(t,a))&&(I=du(z,"onBeforeInput"),0<I.length&&(ut=new qf("onBeforeInput","beforeinput",null,a,R),D.push({event:ut,listeners:I}),ut.data=K)),sv(D,t,z,a,R)}N0(D,e)})}function Gl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function du(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=ul(t,a),i!=null&&n.unshift(Gl(t,i,u)),i=ul(t,e),i!=null&&n.push(Gl(t,i,u))),t.tag===3)return n;t=t.return}return[]}function Qn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function C0(t,e,a,n,i){for(var u=e._reactName,c=[];a!==null&&a!==n;){var h=a,g=h.alternate,z=h.stateNode;if(h=h.tag,g!==null&&g===n)break;h!==5&&h!==26&&h!==27||z===null||(g=z,i?(z=ul(a,u),z!=null&&c.unshift(Gl(a,z,g))):i||(z=ul(a,u),z!=null&&c.push(Gl(a,z,g)))),a=a.return}c.length!==0&&t.push({event:e,listeners:c})}var hv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function R0(t){return(typeof t=="string"?t:""+t).replace(hv,`
`).replace(mv,"")}function j0(t,e){return e=R0(e),R0(t)===e}function hu(){}function gt(t,e,a,n,i,u){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||bn(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&bn(t,""+n);break;case"className":gi(t,"class",n);break;case"tabIndex":gi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(t,a,n);break;case"style":Df(t,n,u);break;case"data":if(e!=="object"){gi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Si(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&gt(t,e,"name",i.name,i,null),gt(t,e,"formEncType",i.formEncType,i,null),gt(t,e,"formMethod",i.formMethod,i,null),gt(t,e,"formTarget",i.formTarget,i,null)):(gt(t,e,"encType",i.encType,i,null),gt(t,e,"method",i.method,i,null),gt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Si(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=hu);break;case"onScroll":n!=null&&ot("scroll",t);break;case"onScrollEnd":n!=null&&ot("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Si(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":ot("beforetoggle",t),ot("toggle",t),pi(t,"popover",n);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":pi(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qm.get(a)||a,pi(t,a,n))}}function Ko(t,e,a,n,i,u){switch(a){case"style":Df(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof n=="string"?bn(t,n):(typeof n=="number"||typeof n=="bigint")&&bn(t,""+n);break;case"onScroll":n!=null&&ot("scroll",t);break;case"onScrollEnd":n!=null&&ot("scrollend",t);break;case"onClick":n!=null&&(t.onclick=hu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Af.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),u=t[te]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof n=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):pi(t,a,n)}}}function Zt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",t),ot("load",t);var n=!1,i=!1,u;for(u in a)if(a.hasOwnProperty(u)){var c=a[u];if(c!=null)switch(u){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:gt(t,e,u,c,a,null)}}i&&gt(t,e,"srcSet",a.srcSet,a,null),n&&gt(t,e,"src",a.src,a,null);return;case"input":ot("invalid",t);var h=u=c=i=null,g=null,z=null;for(n in a)if(a.hasOwnProperty(n)){var R=a[n];if(R!=null)switch(n){case"name":i=R;break;case"type":c=R;break;case"checked":g=R;break;case"defaultChecked":z=R;break;case"value":u=R;break;case"defaultValue":h=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,e));break;default:gt(t,e,n,R,a,null)}}Cf(t,u,h,g,z,c,i,!1),yi(t);return;case"select":ot("invalid",t),n=c=u=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":u=h;break;case"defaultValue":c=h;break;case"multiple":n=h;default:gt(t,e,i,h,a,null)}e=u,a=c,t.multiple=!!n,e!=null?vn(t,!!n,e,!1):a!=null&&vn(t,!!n,a,!0);return;case"textarea":ot("invalid",t),u=i=n=null;for(c in a)if(a.hasOwnProperty(c)&&(h=a[c],h!=null))switch(c){case"value":n=h;break;case"defaultValue":i=h;break;case"children":u=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:gt(t,e,c,h,a,null)}jf(t,n,i,u),yi(t);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:gt(t,e,g,n,a,null)}return;case"dialog":ot("beforetoggle",t),ot("toggle",t),ot("cancel",t),ot("close",t);break;case"iframe":case"object":ot("load",t);break;case"video":case"audio":for(n=0;n<Yl.length;n++)ot(Yl[n],t);break;case"image":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"embed":case"source":case"link":ot("error",t),ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(n=a[z],n!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:gt(t,e,z,n,a,null)}return;default:if(or(e)){for(R in a)a.hasOwnProperty(R)&&(n=a[R],n!==void 0&&Ko(t,e,R,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&gt(t,e,h,n,a,null))}function vv(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,c=null,h=null,g=null,z=null,R=null;for(N in a){var D=a[N];if(a.hasOwnProperty(N)&&D!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":g=D;default:n.hasOwnProperty(N)||gt(t,e,N,null,n,D)}}for(var O in n){var N=n[O];if(D=a[O],n.hasOwnProperty(O)&&(N!=null||D!=null))switch(O){case"type":u=N;break;case"name":i=N;break;case"checked":z=N;break;case"defaultChecked":R=N;break;case"value":c=N;break;case"defaultValue":h=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:N!==D&&gt(t,e,O,N,n,D)}}ur(t,c,h,g,z,R,u,i);return;case"select":N=c=h=O=null;for(u in a)if(g=a[u],a.hasOwnProperty(u)&&g!=null)switch(u){case"value":break;case"multiple":N=g;default:n.hasOwnProperty(u)||gt(t,e,u,null,n,g)}for(i in n)if(u=n[i],g=a[i],n.hasOwnProperty(i)&&(u!=null||g!=null))switch(i){case"value":O=u;break;case"defaultValue":h=u;break;case"multiple":c=u;default:u!==g&&gt(t,e,i,u,n,g)}e=h,a=c,n=N,O!=null?vn(t,!!a,O,!1):!!n!=!!a&&(e!=null?vn(t,!!a,e,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":N=O=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:gt(t,e,h,null,n,i)}for(c in n)if(i=n[c],u=a[c],n.hasOwnProperty(c)&&(i!=null||u!=null))switch(c){case"value":O=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==u&&gt(t,e,c,i,n,u)}Rf(t,O,N);return;case"option":for(var et in a)if(O=a[et],a.hasOwnProperty(et)&&O!=null&&!n.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:gt(t,e,et,null,n,O)}for(g in n)if(O=n[g],N=a[g],n.hasOwnProperty(g)&&O!==N&&(O!=null||N!=null))switch(g){case"selected":t.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:gt(t,e,g,O,n,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)O=a[P],a.hasOwnProperty(P)&&O!=null&&!n.hasOwnProperty(P)&&gt(t,e,P,null,n,O);for(z in n)if(O=n[z],N=a[z],n.hasOwnProperty(z)&&O!==N&&(O!=null||N!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,e));break;default:gt(t,e,z,O,n,N)}return;default:if(or(e)){for(var yt in a)O=a[yt],a.hasOwnProperty(yt)&&O!==void 0&&!n.hasOwnProperty(yt)&&Ko(t,e,yt,void 0,n,O);for(R in n)O=n[R],N=a[R],!n.hasOwnProperty(R)||O===N||O===void 0&&N===void 0||Ko(t,e,R,O,n,N);return}}for(var A in a)O=a[A],a.hasOwnProperty(A)&&O!=null&&!n.hasOwnProperty(A)&&gt(t,e,A,null,n,O);for(D in n)O=n[D],N=a[D],!n.hasOwnProperty(D)||O===N||O==null&&N==null||gt(t,e,D,O,n,N)}var Jo=null,$o=null;function mu(t){return t.nodeType===9?t:t.ownerDocument}function _0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Fo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wo=null;function bv(){var t=window.event;return t&&t.type==="popstate"?t===Wo?!1:(Wo=t,!0):(Wo=null,!1)}var U0=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(t){return B0.resolve(null).then(t).catch(yv)}:U0;function yv(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function H0(t,e){var a=e,n=0,i=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<n&&8>n){a=n;var c=t.ownerDocument;if(a&1&&Xl(c.documentElement),a&2&&Xl(c.body),a&4)for(a=c.head,Xl(a),c=a.firstChild;c;){var h=c.nextSibling,g=c.nodeName;c[ll]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=h}}if(i===0){t.removeChild(u),Wl(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=u}while(a);Wl(e)}function Po(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Po(a),ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xv(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[ll])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Me(t.nextSibling),t===null)break}return null}function Sv(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Me(t.nextSibling),t===null))return null;return t}function Io(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ev(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Me(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var ts=null;function L0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function k0(t,e,a){switch(e=mu(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Xl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ar(t)}var ze=new Map,q0=new Set;function vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=X.d;X.d={f:Av,r:Tv,D:wv,C:zv,L:Ov,m:Nv,X:Cv,S:Mv,M:Rv};function Av(){var t=aa.f(),e=uu();return t||e}function Tv(t){var e=cn(t);e!==null&&e.tag===5&&e.type==="form"?ud(e):aa.r(t)}var Vn=typeof document>"u"?null:document;function Y0(t,e,a){var n=Vn;if(n&&typeof e=="string"&&e){var i=ye(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),q0.has(i)||(q0.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Zt(e,"link",t),qt(e),n.head.appendChild(e)))}}function wv(t){aa.D(t),Y0("dns-prefetch",t,null)}function zv(t,e){aa.C(t,e),Y0("preconnect",t,e)}function Ov(t,e,a){aa.L(t,e,a);var n=Vn;if(n&&t&&e){var i='link[rel="preload"][as="'+ye(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ye(a.imageSizes)+'"]')):i+='[href="'+ye(t)+'"]';var u=i;switch(e){case"style":u=Zn(t);break;case"script":u=Kn(t)}ze.has(u)||(t=S({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ze.set(u,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Ql(u))||e==="script"&&n.querySelector(Vl(u))||(e=n.createElement("link"),Zt(e,"link",t),qt(e),n.head.appendChild(e)))}}function Nv(t,e){aa.m(t,e);var a=Vn;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ye(n)+'"][href="'+ye(t)+'"]',u=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Kn(t)}if(!ze.has(u)&&(t=S({rel:"modulepreload",href:t},e),ze.set(u,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vl(u)))return}n=a.createElement("link"),Zt(n,"link",t),qt(n),a.head.appendChild(n)}}}function Mv(t,e,a){aa.S(t,e,a);var n=Vn;if(n&&t){var i=dn(n).hoistableStyles,u=Zn(t);e=e||"default";var c=i.get(u);if(!c){var h={loading:0,preload:null};if(c=n.querySelector(Ql(u)))h.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ze.get(u))&&es(t,a);var g=c=n.createElement("link");qt(g),Zt(g,"link",t),g._p=new Promise(function(z,R){g.onload=z,g.onerror=R}),g.addEventListener("load",function(){h.loading|=1}),g.addEventListener("error",function(){h.loading|=2}),h.loading|=4,bu(c,e,n)}c={type:"stylesheet",instance:c,count:1,state:h},i.set(u,c)}}}function Cv(t,e){aa.X(t,e);var a=Vn;if(a&&t){var n=dn(a).hoistableScripts,i=Kn(t),u=n.get(i);u||(u=a.querySelector(Vl(i)),u||(t=S({src:t,async:!0},e),(e=ze.get(i))&&as(t,e),u=a.createElement("script"),qt(u),Zt(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function Rv(t,e){aa.M(t,e);var a=Vn;if(a&&t){var n=dn(a).hoistableScripts,i=Kn(t),u=n.get(i);u||(u=a.querySelector(Vl(i)),u||(t=S({src:t,async:!0,type:"module"},e),(e=ze.get(i))&&as(t,e),u=a.createElement("script"),qt(u),Zt(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function G0(t,e,a,n){var i=(i=at.current)?vu(i):null;if(!i)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Zn(a.href),a=dn(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zn(a.href);var u=dn(i).hoistableStyles,c=u.get(t);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,c),(u=i.querySelector(Ql(t)))&&!u._p&&(c.instance=u,c.state.loading=5),ze.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ze.set(t,a),u||jv(i,t,a,c.state))),e&&n===null)throw Error(o(528,""));return c}if(e&&n!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Kn(a),a=dn(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Zn(t){return'href="'+ye(t)+'"'}function Ql(t){return'link[rel="stylesheet"]['+t+"]"}function X0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function jv(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Zt(e,"link",a),qt(e),t.head.appendChild(e))}function Kn(t){return'[src="'+ye(t)+'"]'}function Vl(t){return"script[async]"+t}function Q0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+ye(a.href)+'"]');if(n)return e.instance=n,qt(n),n;var i=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),qt(n),Zt(n,"style",i),bu(n,a.precedence,t),e.instance=n;case"stylesheet":i=Zn(a.href);var u=t.querySelector(Ql(i));if(u)return e.state.loading|=4,e.instance=u,qt(u),u;n=X0(a),(i=ze.get(i))&&es(n,i),u=(t.ownerDocument||t).createElement("link"),qt(u);var c=u;return c._p=new Promise(function(h,g){c.onload=h,c.onerror=g}),Zt(u,"link",n),e.state.loading|=4,bu(u,a.precedence,t),e.instance=u;case"script":return u=Kn(a.src),(i=t.querySelector(Vl(u)))?(e.instance=i,qt(i),i):(n=a,(i=ze.get(u))&&(n=S({},a),as(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),qt(i),Zt(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,bu(n,a.precedence,t));return e.instance}function bu(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,u=i,c=0;c<n.length;c++){var h=n[c];if(h.dataset.precedence===e)u=h;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function es(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function as(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var pu=null;function V0(t,e,a){if(pu===null){var n=new Map,i=pu=new Map;i.set(a,n)}else i=pu,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var u=a[i];if(!(u[ll]||u[$t]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(e)||"";c=t+c;var h=n.get(c);h?h.push(u):n.set(c,[u])}}return n}function Z0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function _v(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function K0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Zl=null;function Dv(){}function Uv(t,e,a){if(Zl===null)throw Error(o(475));var n=Zl;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Zn(a.href),u=t.querySelector(Ql(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=gu.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=u,qt(u);return}u=t.ownerDocument||t,a=X0(a),(i=ze.get(i))&&es(a,i),u=u.createElement("link"),qt(u);var c=u;c._p=new Promise(function(h,g){c.onload=h,c.onerror=g}),Zt(u,"link",a),e.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=gu.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function Bv(){if(Zl===null)throw Error(o(475));var t=Zl;return t.stylesheets&&t.count===0&&ns(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&ns(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function gu(){if(this.count--,this.count===0){if(this.stylesheets)ns(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yu=null;function ns(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yu=new Map,e.forEach(Hv,t),yu=null,gu.call(t))}function Hv(t,e){if(!(e.state.loading&4)){var a=yu.get(t);if(a)var n=a.get(null);else{a=new Map,yu.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var c=i[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),n=c)}n&&a.set(null,n)}i=e.instance,c=i.getAttribute("data-precedence"),u=a.get(c)||n,u===n&&a.set(null,i),a.set(c,i),this.count++,n=gu.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Kl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Lv(t,e,a,n,i,u,c,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.hiddenUpdates=Pu(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function J0(t,e,a,n,i,u,c,h,g,z,R,D){return t=new Lv(t,e,a,c,h,g,z,D),e=1,u===!0&&(e|=24),u=fe(3,null,null,e),t.current=u,u.stateNode=t,e=Hr(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:e},Yr(u),t}function $0(t){return t?(t=Tn,t):Tn}function F0(t,e,a,n,i,u){i=$0(i),n.context===null?n.context=i:n.pendingContext=i,n=va(e),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=ba(t,n,e),a!==null&&(ve(a,t,e),Al(a,t,e))}function W0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function ls(t,e){W0(t,e),(t=t.alternate)&&W0(t,e)}function P0(t){if(t.tag===13){var e=An(t,67108864);e!==null&&ve(e,t,67108864),ls(t,67108864)}}var xu=!0;function kv(t,e,a,n){var i=j.T;j.T=null;var u=X.p;try{X.p=2,is(t,e,a,n)}finally{X.p=u,j.T=i}}function qv(t,e,a,n){var i=j.T;j.T=null;var u=X.p;try{X.p=8,is(t,e,a,n)}finally{X.p=u,j.T=i}}function is(t,e,a,n){if(xu){var i=us(n);if(i===null)Zo(t,e,n,Su,a),t1(t,n);else if(Gv(i,t,e,a,n))n.stopPropagation();else if(t1(t,n),e&4&&-1<Yv.indexOf(t)){for(;i!==null;){var u=cn(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=qa(u.pendingLanes);if(c!==0){var h=u;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var g=1<<31-oe(c);h.entanglements[1]|=g,c&=~g}He(u),(vt&6)===0&&(lu=je()+500,ql(0))}}break;case 13:h=An(u,2),h!==null&&ve(h,u,2),uu(),ls(u,2)}if(u=us(n),u===null&&Zo(t,e,n,Su,a),u===i)break;i=u}i!==null&&n.stopPropagation()}else Zo(t,e,n,null,a)}}function us(t){return t=fr(t),rs(t)}var Su=null;function rs(t){if(Su=null,t=fn(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=v(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Su=t,null}function I0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zm()){case hf:return 2;case mf:return 8;case hi:case Om:return 32;case vf:return 268435456;default:return 32}default:return 32}}var os=!1,Ma=null,Ca=null,Ra=null,Jl=new Map,$l=new Map,ja=[],Yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t1(t,e){switch(t){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Jl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(e.pointerId)}}function Fl(t,e,a,n,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[i]},e!==null&&(e=cn(e),e!==null&&P0(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Gv(t,e,a,n,i){switch(e){case"focusin":return Ma=Fl(Ma,t,e,a,n,i),!0;case"dragenter":return Ca=Fl(Ca,t,e,a,n,i),!0;case"mouseover":return Ra=Fl(Ra,t,e,a,n,i),!0;case"pointerover":var u=i.pointerId;return Jl.set(u,Fl(Jl.get(u)||null,t,e,a,n,i)),!0;case"gotpointercapture":return u=i.pointerId,$l.set(u,Fl($l.get(u)||null,t,e,a,n,i)),!0}return!1}function e1(t){var e=fn(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=v(a),e!==null){t.blockedOn=e,Um(t.priority,function(){if(a.tag===13){var n=me();n=Iu(n);var i=An(a,n);i!==null&&ve(i,a,n),ls(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=us(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);sr=n,a.target.dispatchEvent(n),sr=null}else return e=cn(a),e!==null&&P0(e),t.blockedOn=a,!1;e.shift()}return!0}function a1(t,e,a){Eu(t)&&a.delete(e)}function Xv(){os=!1,Ma!==null&&Eu(Ma)&&(Ma=null),Ca!==null&&Eu(Ca)&&(Ca=null),Ra!==null&&Eu(Ra)&&(Ra=null),Jl.forEach(a1),$l.forEach(a1)}function Au(t,e){t.blockedOn===e&&(t.blockedOn=null,os||(os=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Xv)))}var Tu=null;function n1(t){Tu!==t&&(Tu=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Tu===t&&(Tu=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(rs(n||a)===null)continue;break}var u=cn(a);u!==null&&(t.splice(e,3),e-=3,uo(u,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Wl(t){function e(g){return Au(g,t)}Ma!==null&&Au(Ma,t),Ca!==null&&Au(Ca,t),Ra!==null&&Au(Ra,t),Jl.forEach(e),$l.forEach(e);for(var a=0;a<ja.length;a++){var n=ja[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)e1(a),a.blockedOn===null&&ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],u=a[n+1],c=i[te]||null;if(typeof u=="function")c||n1(a);else if(c){var h=null;if(u&&u.hasAttribute("formAction")){if(i=u,c=u[te]||null)h=c.formAction;else if(rs(i)!==null)continue}else h=c.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),n1(a)}}}function ss(t){this._internalRoot=t}wu.prototype.render=ss.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,n=me();F0(a,n,t,e,null,null)},wu.prototype.unmount=ss.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;F0(t.current,2,null,t,null,null),uu(),e[sn]=null}};function wu(t){this._internalRoot=t}wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=xf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ja.length&&e!==0&&e<ja[a].priority;a++);ja.splice(a,0,t),a===0&&e1(t)}};var l1=r.version;if(l1!=="19.1.0")throw Error(o(527,l1,"19.1.0"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=b(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Qv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{el=zu.inject(Qv),re=zu}catch{}}return Il.createRoot=function(t,e){if(!f(t))throw Error(o(299));var a=!1,n="",i=xd,u=Sd,c=Ed,h=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=J0(t,1,!1,null,null,a,n,i,u,c,h,null),t[sn]=e.current,Vo(t),new ss(e)},Il.hydrateRoot=function(t,e,a){if(!f(t))throw Error(o(299));var n=!1,i="",u=xd,c=Sd,h=Ed,g=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),e=J0(t,1,!0,e,a??null,n,i,u,c,h,g,z),e.context=$0(null),a=e.current,n=me(),n=Iu(n),i=va(n),i.callback=null,ba(a,i,n),a=n,e.current.lanes=a,nl(e,a),He(e),t[sn]=e.current,Vo(t),new wu(e)},Il.version="19.1.0",Il}var m1;function tb(){if(m1)return ds.exports;m1=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),ds.exports=Iv(),ds.exports}var eb=tb();const ab=Js(eb);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var v1="popstate";function nb(l={}){function r(o,f){let{pathname:d,search:v,hash:p}=o.location;return Ms("",{pathname:d,search:v,hash:p},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(o,f){return typeof f=="string"?f:li(f)}return ib(r,s,null,l)}function kt(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function qe(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function lb(){return Math.random().toString(36).substring(2,10)}function b1(l,r){return{usr:l.state,key:l.key,idx:r}}function Ms(l,r,s=null,o){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?ui(r):r,state:s,key:r&&r.key||o||lb()}}function li({pathname:l="/",search:r="",hash:s=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function ui(l){let r={};if(l){let s=l.indexOf("#");s>=0&&(r.hash=l.substring(s),l=l.substring(0,s));let o=l.indexOf("?");o>=0&&(r.search=l.substring(o),l=l.substring(0,o)),l&&(r.pathname=l)}return r}function ib(l,r,s,o={}){let{window:f=document.defaultView,v5Compat:d=!1}=o,v=f.history,p="POP",b=null,m=S();m==null&&(m=0,v.replaceState({...v.state,idx:m},""));function S(){return(v.state||{idx:null}).idx}function T(){p="POP";let Y=S(),B=Y==null?null:Y-m;m=Y,b&&b({action:p,location:L.location,delta:B})}function M(Y,B){p="PUSH";let J=Ms(L.location,Y,B);m=S()+1;let Z=b1(J,m),ct=L.createHref(J);try{v.pushState(Z,"",ct)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;f.location.assign(ct)}d&&b&&b({action:p,location:L.location,delta:1})}function U(Y,B){p="REPLACE";let J=Ms(L.location,Y,B);m=S();let Z=b1(J,m),ct=L.createHref(J);v.replaceState(Z,"",ct),d&&b&&b({action:p,location:L.location,delta:0})}function q(Y){return ub(Y)}let L={get action(){return p},get location(){return l(f,v)},listen(Y){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(v1,T),b=Y,()=>{f.removeEventListener(v1,T),b=null}},createHref(Y){return r(f,Y)},createURL:q,encodeLocation(Y){let B=q(Y);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:M,replace:U,go(Y){return v.go(Y)}};return L}function ub(l,r=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),kt(s,"No window.location.(origin|href) available to create URL");let o=typeof l=="string"?l:li(l);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function lh(l,r,s="/"){return rb(l,r,s,!1)}function rb(l,r,s,o){let f=typeof r=="string"?ui(r):r,d=la(f.pathname||"/",s);if(d==null)return null;let v=ih(l);ob(v);let p=null;for(let b=0;p==null&&b<v.length;++b){let m=yb(d);p=pb(v[b],m,o)}return p}function ih(l,r=[],s=[],o=""){let f=(d,v,p)=>{let b={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:v,route:d};b.relativePath.startsWith("/")&&(kt(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length));let m=na([o,b.relativePath]),S=s.concat(b);d.children&&d.children.length>0&&(kt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),ih(d.children,r,S,m)),!(d.path==null&&!d.index)&&r.push({path:m,score:vb(m,d.index),routesMeta:S})};return l.forEach((d,v)=>{if(d.path===""||!d.path?.includes("?"))f(d,v);else for(let p of uh(d.path))f(d,v,p)}),r}function uh(l){let r=l.split("/");if(r.length===0)return[];let[s,...o]=r,f=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return f?[d,""]:[d];let v=uh(o.join("/")),p=[];return p.push(...v.map(b=>b===""?d:[d,b].join("/"))),f&&p.push(...v),p.map(b=>l.startsWith("/")&&b===""?"/":b)}function ob(l){l.sort((r,s)=>r.score!==s.score?s.score-r.score:bb(r.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var sb=/^:[\w-]+$/,fb=3,cb=2,db=1,hb=10,mb=-2,p1=l=>l==="*";function vb(l,r){let s=l.split("/"),o=s.length;return s.some(p1)&&(o+=mb),r&&(o+=cb),s.filter(f=>!p1(f)).reduce((f,d)=>f+(sb.test(d)?fb:d===""?db:hb),o)}function bb(l,r){return l.length===r.length&&l.slice(0,-1).every((o,f)=>o===r[f])?l[l.length-1]-r[r.length-1]:0}function pb(l,r,s=!1){let{routesMeta:o}=l,f={},d="/",v=[];for(let p=0;p<o.length;++p){let b=o[p],m=p===o.length-1,S=d==="/"?r:r.slice(d.length)||"/",T=Uu({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},S),M=b.route;if(!T&&m&&s&&!o[o.length-1].route.index&&(T=Uu({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},S)),!T)return null;Object.assign(f,T.params),v.push({params:f,pathname:na([d,T.pathname]),pathnameBase:Ab(na([d,T.pathnameBase])),route:M}),T.pathnameBase!=="/"&&(d=na([d,T.pathnameBase]))}return v}function Uu(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,o]=gb(l.path,l.caseSensitive,l.end),f=r.match(s);if(!f)return null;let d=f[0],v=d.replace(/(.)\/+$/,"$1"),p=f.slice(1);return{params:o.reduce((m,{paramName:S,isOptional:T},M)=>{if(S==="*"){let q=p[M]||"";v=d.slice(0,d.length-q.length).replace(/(.)\/+$/,"$1")}const U=p[M];return T&&!U?m[S]=void 0:m[S]=(U||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:v,pattern:l}}function gb(l,r=!1,s=!0){qe(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,p,b)=>(o.push({paramName:p,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(o.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,r?void 0:"i"),o]}function yb(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return qe(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function la(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,o=l.charAt(s);return o&&o!=="/"?null:l.slice(s)||"/"}function xb(l,r="/"){let{pathname:s,search:o="",hash:f=""}=typeof l=="string"?ui(l):l;return{pathname:s?s.startsWith("/")?s:Sb(s,r):r,search:Tb(o),hash:wb(f)}}function Sb(l,r){let s=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function bs(l,r,s,o){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eb(l){return l.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function rh(l){let r=Eb(l);return r.map((s,o)=>o===r.length-1?s.pathname:s.pathnameBase)}function oh(l,r,s,o=!1){let f;typeof l=="string"?f=ui(l):(f={...l},kt(!f.pathname||!f.pathname.includes("?"),bs("?","pathname","search",f)),kt(!f.pathname||!f.pathname.includes("#"),bs("#","pathname","hash",f)),kt(!f.search||!f.search.includes("#"),bs("#","search","hash",f)));let d=l===""||f.pathname==="",v=d?"/":f.pathname,p;if(v==null)p=s;else{let T=r.length-1;if(!o&&v.startsWith("..")){let M=v.split("/");for(;M[0]==="..";)M.shift(),T-=1;f.pathname=M.join("/")}p=T>=0?r[T]:"/"}let b=xb(f,p),m=v&&v!=="/"&&v.endsWith("/"),S=(d||v===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(m||S)&&(b.pathname+="/"),b}var na=l=>l.join("/").replace(/\/\/+/g,"/"),Ab=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Tb=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,wb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function zb(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var sh=["POST","PUT","PATCH","DELETE"];new Set(sh);var Ob=["GET",...sh];new Set(Ob);var In=C.createContext(null);In.displayName="DataRouter";var qu=C.createContext(null);qu.displayName="DataRouterState";C.createContext(!1);var fh=C.createContext({isTransitioning:!1});fh.displayName="ViewTransition";var Nb=C.createContext(new Map);Nb.displayName="Fetchers";var Mb=C.createContext(null);Mb.displayName="Await";var Ye=C.createContext(null);Ye.displayName="Navigation";var Yu=C.createContext(null);Yu.displayName="Location";var ra=C.createContext({outlet:null,matches:[],isDataRoute:!1});ra.displayName="Route";var Fs=C.createContext(null);Fs.displayName="RouteError";function Cb(l,{relative:r}={}){kt(ri(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=C.useContext(Ye),{hash:f,pathname:d,search:v}=oi(l,{relative:r}),p=d;return s!=="/"&&(p=d==="/"?s:na([s,d])),o.createHref({pathname:p,search:v,hash:f})}function ri(){return C.useContext(Yu)!=null}function on(){return kt(ri(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Yu).location}var ch="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dh(l){C.useContext(Ye).static||C.useLayoutEffect(l)}function Rb(){let{isDataRoute:l}=C.useContext(ra);return l?Qb():jb()}function jb(){kt(ri(),"useNavigate() may be used only in the context of a <Router> component.");let l=C.useContext(In),{basename:r,navigator:s}=C.useContext(Ye),{matches:o}=C.useContext(ra),{pathname:f}=on(),d=JSON.stringify(rh(o)),v=C.useRef(!1);return dh(()=>{v.current=!0}),C.useCallback((b,m={})=>{if(qe(v.current,ch),!v.current)return;if(typeof b=="number"){s.go(b);return}let S=oh(b,JSON.parse(d),f,m.relative==="path");l==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:na([r,S.pathname])),(m.replace?s.replace:s.push)(S,m.state,m)},[r,s,d,f,l])}C.createContext(null);function oi(l,{relative:r}={}){let{matches:s}=C.useContext(ra),{pathname:o}=on(),f=JSON.stringify(rh(s));return C.useMemo(()=>oh(l,JSON.parse(f),o,r==="path"),[l,f,o,r])}function _b(l,r,s,o){kt(ri(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=C.useContext(Ye),{matches:d}=C.useContext(ra),v=d[d.length-1],p=v?v.params:{},b=v?v.pathname:"/",m=v?v.pathnameBase:"/",S=v&&v.route;{let B=S&&S.path||"";hh(b,!S||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let T=on(),M;M=T;let U=M.pathname||"/",q=U;if(m!=="/"){let B=m.replace(/^\//,"").split("/");q="/"+U.replace(/^\//,"").split("/").slice(B.length).join("/")}let L=lh(l,{pathname:q});return qe(S||L!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),qe(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Lb(L&&L.map(B=>Object.assign({},B,{params:Object.assign({},p,B.params),pathname:na([m,f.encodeLocation?f.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?m:na([m,f.encodeLocation?f.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),d,s,o)}function Db(){let l=Xb(),r=zb(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},v=null;return console.error("Error handled by React Router default ErrorBoundary:",l),v=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:d},"ErrorBoundary")," or"," ",C.createElement("code",{style:d},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},r),s?C.createElement("pre",{style:f},s):null,v)}var Ub=C.createElement(Db,null),Bb=class extends C.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){console.error("React Router caught the following error during render",l,r)}render(){return this.state.error!==void 0?C.createElement(ra.Provider,{value:this.props.routeContext},C.createElement(Fs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hb({routeContext:l,match:r,children:s}){let o=C.useContext(In);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),C.createElement(ra.Provider,{value:l},s)}function Lb(l,r=[],s=null,o=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(r.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let f=l,d=s?.errors;if(d!=null){let b=f.findIndex(m=>m.route.id&&d?.[m.route.id]!==void 0);kt(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,b+1))}let v=!1,p=-1;if(s)for(let b=0;b<f.length;b++){let m=f[b];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=b),m.route.id){let{loaderData:S,errors:T}=s,M=m.route.loader&&!S.hasOwnProperty(m.route.id)&&(!T||T[m.route.id]===void 0);if(m.route.lazy||M){v=!0,p>=0?f=f.slice(0,p+1):f=[f[0]];break}}}return f.reduceRight((b,m,S)=>{let T,M=!1,U=null,q=null;s&&(T=d&&m.route.id?d[m.route.id]:void 0,U=m.route.errorElement||Ub,v&&(p<0&&S===0?(hh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,q=null):p===S&&(M=!0,q=m.route.hydrateFallbackElement||null)));let L=r.concat(f.slice(0,S+1)),Y=()=>{let B;return T?B=U:M?B=q:m.route.Component?B=C.createElement(m.route.Component,null):m.route.element?B=m.route.element:B=b,C.createElement(Hb,{match:m,routeContext:{outlet:b,matches:L,isDataRoute:s!=null},children:B})};return s&&(m.route.ErrorBoundary||m.route.errorElement||S===0)?C.createElement(Bb,{location:s.location,revalidation:s.revalidation,component:U,error:T,children:Y(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):Y()},null)}function Ws(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kb(l){let r=C.useContext(In);return kt(r,Ws(l)),r}function qb(l){let r=C.useContext(qu);return kt(r,Ws(l)),r}function Yb(l){let r=C.useContext(ra);return kt(r,Ws(l)),r}function Ps(l){let r=Yb(l),s=r.matches[r.matches.length-1];return kt(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function Gb(){return Ps("useRouteId")}function Xb(){let l=C.useContext(Fs),r=qb("useRouteError"),s=Ps("useRouteError");return l!==void 0?l:r.errors?.[s]}function Qb(){let{router:l}=kb("useNavigate"),r=Ps("useNavigate"),s=C.useRef(!1);return dh(()=>{s.current=!0}),C.useCallback(async(f,d={})=>{qe(s.current,ch),s.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:r,...d}))},[l,r])}var g1={};function hh(l,r,s){!r&&!g1[l]&&(g1[l]=!0,qe(!1,s))}C.memo(Vb);function Vb({routes:l,future:r,state:s}){return _b(l,void 0,s,r)}function Zb({basename:l="/",children:r=null,location:s,navigationType:o="POP",navigator:f,static:d=!1}){kt(!ri(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=l.replace(/^\/*/,"/"),p=C.useMemo(()=>({basename:v,navigator:f,static:d,future:{}}),[v,f,d]);typeof s=="string"&&(s=ui(s));let{pathname:b="/",search:m="",hash:S="",state:T=null,key:M="default"}=s,U=C.useMemo(()=>{let q=la(b,v);return q==null?null:{location:{pathname:q,search:m,hash:S,state:T,key:M},navigationType:o}},[v,b,m,S,T,M,o]);return qe(U!=null,`<Router basename="${v}"> is not able to match the URL "${b}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:C.createElement(Ye.Provider,{value:p},C.createElement(Yu.Provider,{children:r,value:U}))}var Cu="get",Ru="application/x-www-form-urlencoded";function Gu(l){return l!=null&&typeof l.tagName=="string"}function Kb(l){return Gu(l)&&l.tagName.toLowerCase()==="button"}function Jb(l){return Gu(l)&&l.tagName.toLowerCase()==="form"}function $b(l){return Gu(l)&&l.tagName.toLowerCase()==="input"}function Fb(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Wb(l,r){return l.button===0&&(!r||r==="_self")&&!Fb(l)}var Ou=null;function Pb(){if(Ou===null)try{new FormData(document.createElement("form"),0),Ou=!1}catch{Ou=!0}return Ou}var Ib=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ps(l){return l!=null&&!Ib.has(l)?(qe(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ru}"`),null):l}function tp(l,r){let s,o,f,d,v;if(Jb(l)){let p=l.getAttribute("action");o=p?la(p,r):null,s=l.getAttribute("method")||Cu,f=ps(l.getAttribute("enctype"))||Ru,d=new FormData(l)}else if(Kb(l)||$b(l)&&(l.type==="submit"||l.type==="image")){let p=l.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||p.getAttribute("action");if(o=b?la(b,r):null,s=l.getAttribute("formmethod")||p.getAttribute("method")||Cu,f=ps(l.getAttribute("formenctype"))||ps(p.getAttribute("enctype"))||Ru,d=new FormData(p,l),!Pb()){let{name:m,type:S,value:T}=l;if(S==="image"){let M=m?`${m}.`:"";d.append(`${M}x`,"0"),d.append(`${M}y`,"0")}else m&&d.append(m,T)}}else{if(Gu(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Cu,o=null,f=Ru,v=l}return d&&f==="text/plain"&&(v=d,d=void 0),{action:o,method:s.toLowerCase(),encType:f,formData:d,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Is(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function ep(l,r,s){let o=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return o.pathname==="/"?o.pathname=`_root.${s}`:r&&la(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function ap(l,r){if(l.id in r)return r[l.id];try{let s=await import(l.module);return r[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function np(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function lp(l,r,s){let o=await Promise.all(l.map(async f=>{let d=r.routes[f.route.id];if(d){let v=await ap(d,s);return v.links?v.links():[]}return[]}));return op(o.flat(1).filter(np).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function y1(l,r,s,o,f,d){let v=(b,m)=>s[m]?b.route.id!==s[m].route.id:!0,p=(b,m)=>s[m].pathname!==b.pathname||s[m].route.path?.endsWith("*")&&s[m].params["*"]!==b.params["*"];return d==="assets"?r.filter((b,m)=>v(b,m)||p(b,m)):d==="data"?r.filter((b,m)=>{let S=o.routes[b.route.id];if(!S||!S.hasLoader)return!1;if(v(b,m)||p(b,m))return!0;if(b.route.shouldRevalidate){let T=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function ip(l,r,{includeHydrateFallback:s}={}){return up(l.map(o=>{let f=r.routes[o.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function up(l){return[...new Set(l)]}function rp(l){let r={},s=Object.keys(l).sort();for(let o of s)r[o]=l[o];return r}function op(l,r){let s=new Set;return new Set(r),l.reduce((o,f)=>{let d=JSON.stringify(rp(f));return s.has(d)||(s.add(d),o.push({key:d,link:f})),o},[])}function mh(){let l=C.useContext(In);return Is(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function sp(){let l=C.useContext(qu);return Is(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var tf=C.createContext(void 0);tf.displayName="FrameworkContext";function vh(){let l=C.useContext(tf);return Is(l,"You must render this element inside a <HydratedRouter> element"),l}function fp(l,r){let s=C.useContext(tf),[o,f]=C.useState(!1),[d,v]=C.useState(!1),{onFocus:p,onBlur:b,onMouseEnter:m,onMouseLeave:S,onTouchStart:T}=r,M=C.useRef(null);C.useEffect(()=>{if(l==="render"&&v(!0),l==="viewport"){let L=B=>{B.forEach(J=>{v(J.isIntersecting)})},Y=new IntersectionObserver(L,{threshold:.5});return M.current&&Y.observe(M.current),()=>{Y.disconnect()}}},[l]),C.useEffect(()=>{if(o){let L=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(L)}}},[o]);let U=()=>{f(!0)},q=()=>{f(!1),v(!1)};return s?l!=="intent"?[d,M,{}]:[d,M,{onFocus:ti(p,U),onBlur:ti(b,q),onMouseEnter:ti(m,U),onMouseLeave:ti(S,q),onTouchStart:ti(T,U)}]:[!1,M,{}]}function ti(l,r){return s=>{l&&l(s),s.defaultPrevented||r(s)}}function cp({page:l,...r}){let{router:s}=mh(),o=C.useMemo(()=>lh(s.routes,l,s.basename),[s.routes,l,s.basename]);return o?C.createElement(hp,{page:l,matches:o,...r}):null}function dp(l){let{manifest:r,routeModules:s}=vh(),[o,f]=C.useState([]);return C.useEffect(()=>{let d=!1;return lp(l,r,s).then(v=>{d||f(v)}),()=>{d=!0}},[l,r,s]),o}function hp({page:l,matches:r,...s}){let o=on(),{manifest:f,routeModules:d}=vh(),{basename:v}=mh(),{loaderData:p,matches:b}=sp(),m=C.useMemo(()=>y1(l,r,b,f,o,"data"),[l,r,b,f,o]),S=C.useMemo(()=>y1(l,r,b,f,o,"assets"),[l,r,b,f,o]),T=C.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let q=new Set,L=!1;if(r.forEach(B=>{let J=f.routes[B.route.id];!J||!J.hasLoader||(!m.some(Z=>Z.route.id===B.route.id)&&B.route.id in p&&d[B.route.id]?.shouldRevalidate||J.hasClientLoader?L=!0:q.add(B.route.id))}),q.size===0)return[];let Y=ep(l,v,"data");return L&&q.size>0&&Y.searchParams.set("_routes",r.filter(B=>q.has(B.route.id)).map(B=>B.route.id).join(",")),[Y.pathname+Y.search]},[v,p,o,f,m,r,l,d]),M=C.useMemo(()=>ip(S,f),[S,f]),U=dp(S);return C.createElement(C.Fragment,null,T.map(q=>C.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...s})),M.map(q=>C.createElement("link",{key:q,rel:"modulepreload",href:q,...s})),U.map(({key:q,link:L})=>C.createElement("link",{key:q,...L})))}function mp(...l){return r=>{l.forEach(s=>{typeof s=="function"?s(r):s!=null&&(s.current=r)})}}var bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bh&&(window.__reactRouterVersion="7.7.1")}catch{}function vp({basename:l,children:r,window:s}){let o=C.useRef();o.current==null&&(o.current=nb({window:s,v5Compat:!0}));let f=o.current,[d,v]=C.useState({action:f.action,location:f.location}),p=C.useCallback(b=>{C.startTransition(()=>v(b))},[v]);return C.useLayoutEffect(()=>f.listen(p),[f,p]),C.createElement(Zb,{basename:l,children:r,location:d.location,navigationType:d.action,navigator:f})}var ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gh=C.forwardRef(function({onClick:r,discover:s="render",prefetch:o="none",relative:f,reloadDocument:d,replace:v,state:p,target:b,to:m,preventScrollReset:S,viewTransition:T,...M},U){let{basename:q}=C.useContext(Ye),L=typeof m=="string"&&ph.test(m),Y,B=!1;if(typeof m=="string"&&L&&(Y=m,bh))try{let Ot=new URL(window.location.href),ie=m.startsWith("//")?new URL(Ot.protocol+m):new URL(m),pe=la(ie.pathname,q);ie.origin===Ot.origin&&pe!=null?m=pe+ie.search+ie.hash:B=!0}catch{qe(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=Cb(m,{relative:f}),[Z,ct,$]=fp(o,M),Tt=yp(m,{replace:v,state:p,target:b,preventScrollReset:S,relative:f,viewTransition:T});function zt(Ot){r&&r(Ot),Ot.defaultPrevented||Tt(Ot)}let xt=C.createElement("a",{...M,...$,href:Y||J,onClick:B||d?r:zt,ref:mp(U,ct),target:b,"data-discover":!L&&s==="render"?"true":void 0});return Z&&!L?C.createElement(C.Fragment,null,xt,C.createElement(cp,{page:J})):xt});gh.displayName="Link";var bp=C.forwardRef(function({"aria-current":r="page",caseSensitive:s=!1,className:o="",end:f=!1,style:d,to:v,viewTransition:p,children:b,...m},S){let T=oi(v,{relative:m.relative}),M=on(),U=C.useContext(qu),{navigator:q,basename:L}=C.useContext(Ye),Y=U!=null&&Tp(T)&&p===!0,B=q.encodeLocation?q.encodeLocation(T).pathname:T.pathname,J=M.pathname,Z=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;s||(J=J.toLowerCase(),Z=Z?Z.toLowerCase():null,B=B.toLowerCase()),Z&&L&&(Z=la(Z,L)||Z);const ct=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let $=J===B||!f&&J.startsWith(B)&&J.charAt(ct)==="/",Tt=Z!=null&&(Z===B||!f&&Z.startsWith(B)&&Z.charAt(B.length)==="/"),zt={isActive:$,isPending:Tt,isTransitioning:Y},xt=$?r:void 0,Ot;typeof o=="function"?Ot=o(zt):Ot=[o,$?"active":null,Tt?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let ie=typeof d=="function"?d(zt):d;return C.createElement(gh,{...m,"aria-current":xt,className:Ot,ref:S,style:ie,to:v,viewTransition:p},typeof b=="function"?b(zt):b)});bp.displayName="NavLink";var pp=C.forwardRef(({discover:l="render",fetcherKey:r,navigate:s,reloadDocument:o,replace:f,state:d,method:v=Cu,action:p,onSubmit:b,relative:m,preventScrollReset:S,viewTransition:T,...M},U)=>{let q=Ep(),L=Ap(p,{relative:m}),Y=v.toLowerCase()==="get"?"get":"post",B=typeof p=="string"&&ph.test(p),J=Z=>{if(b&&b(Z),Z.defaultPrevented)return;Z.preventDefault();let ct=Z.nativeEvent.submitter,$=ct?.getAttribute("formmethod")||v;q(ct||Z.currentTarget,{fetcherKey:r,method:$,navigate:s,replace:f,state:d,relative:m,preventScrollReset:S,viewTransition:T})};return C.createElement("form",{ref:U,method:Y,action:L,onSubmit:o?b:J,...M,"data-discover":!B&&l==="render"?"true":void 0})});pp.displayName="Form";function gp(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yh(l){let r=C.useContext(In);return kt(r,gp(l)),r}function yp(l,{target:r,replace:s,state:o,preventScrollReset:f,relative:d,viewTransition:v}={}){let p=Rb(),b=on(),m=oi(l,{relative:d});return C.useCallback(S=>{if(Wb(S,r)){S.preventDefault();let T=s!==void 0?s:li(b)===li(m);p(l,{replace:T,state:o,preventScrollReset:f,relative:d,viewTransition:v})}},[b,p,m,s,o,r,l,f,d,v])}var xp=0,Sp=()=>`__${String(++xp)}__`;function Ep(){let{router:l}=yh("useSubmit"),{basename:r}=C.useContext(Ye),s=Gb();return C.useCallback(async(o,f={})=>{let{action:d,method:v,encType:p,formData:b,body:m}=tp(o,r);if(f.navigate===!1){let S=f.fetcherKey||Sp();await l.fetch(S,s,f.action||d,{preventScrollReset:f.preventScrollReset,formData:b,body:m,formMethod:f.method||v,formEncType:f.encType||p,flushSync:f.flushSync})}else await l.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:b,body:m,formMethod:f.method||v,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,r,s])}function Ap(l,{relative:r}={}){let{basename:s}=C.useContext(Ye),o=C.useContext(ra);kt(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),d={...oi(l||".",{relative:r})},v=on();if(l==null){d.search=v.search;let p=new URLSearchParams(d.search),b=p.getAll("index");if(b.some(S=>S==="")){p.delete("index"),b.filter(T=>T).forEach(T=>p.append("index",T));let S=p.toString();d.search=S?`?${S}`:""}}return(!l||l===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:na([s,d.pathname])),li(d)}function Tp(l,{relative:r}={}){let s=C.useContext(fh);kt(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=yh("useViewTransitionState"),f=oi(l,{relative:r});if(!s.isTransitioning)return!1;let d=la(s.currentLocation.pathname,o)||s.currentLocation.pathname,v=la(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Uu(f.pathname,v)!=null||Uu(f.pathname,d)!=null}function wp({start:l}){const[r,s]=C.useState(!1);return C.useEffect(()=>{const o=setTimeout(()=>s(!0),8e3);return()=>clearTimeout(o)},[]),y.jsx("div",{className:`flex items-center justify-center h-screen w-screen bg-black text-white transition-opacity duration-1000 ${r?"opacity-0":"opacity-100"}`,children:y.jsx("h1",{className:`text-4xl md:text-6xl font-bold transition-all duration-[4000ms] ease-in-out transform ${l?"scale-[28] opacity-0":"scale-100 opacity-100"}`,children:"Button Styles, Users will Love to Click..."})})}const zp="/CSS-Button-Generator/assets/logo-CStWi_qm.png";function Op(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>India Button Template</title>
  <style>
    /* Wrapper for positioning */
    .india-button-wrapper {
      position: absolute;
      bottom: 300px;
      left: 110px;
      z-index: 40;
    }

    /* 🇮🇳 India Button */
    .custom-flag-button {
      font-size: 17px;
      font-family: inherit;
      font-weight: 700;
      padding: 4px;
      border-radius: 20px;
      cursor: pointer;
      border: none;
      color: orange;
      background: linear-gradient(
        to bottom,
        #f8aa01 0%,
        #ffffff 50%,
        #18b40a 100%
      );
      box-shadow:
        rgba(108, 12, 12, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
      transition: all 0.1s ease-in-out;
      animation: pulse 2.5s infinite ease-in-out;
    }

    .custom-flag-button:active {
      transform: translateY(3px);
      box-shadow:
        rgba(148, 5, 5, 0.1) 0px 14px 25px -5px,
        rgba(2, 151, 121, 0.04) 0px 10px 10px -5px;
    }

    .custom-flag-button .button-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgb(251, 251, 253);
      padding: 0.7em 1.5em;
      padding-left: 1.2em;
      border-radius: 16px;
    }

    .custom-flag-button svg {
      width: 20px;
      height: 20px;
      margin-right: 6px;
      color: #ff8103;
      transition: transform 0.3s;
    }

    .custom-flag-button:hover svg {
      transform: scale(1.2);
    }

    .custom-flag-button .button-content span {
      transition: transform 0.2s ease;
    }

    .custom-flag-button:hover .button-content span {
      transform: translateX(4px);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  </style>
</head>
<body>

  <!-- 🇮🇳 India Button -->
  <div class="india-button-wrapper">
    <button class="custom-flag-button">
      <span class="button-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            fill="currentColor"
            d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 
            2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 
            2.265-2.264 5.888-2.34 8.244-.228z"
          />
        </svg>
        <span>India</span>
      </span>
    </button>
  </div>

</body>
</html>

    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[300px] left-[110px] z-40",children:y.jsx("button",{className:"custom-flag-button",children:y.jsxs("span",{className:"button-content flex items-center gap-2",children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-5 h-5",children:[y.jsx("path",{fill:"none",d:"M0 0H24V24H0z"}),y.jsx("path",{fill:"currentColor",d:`M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 \r
                2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 \r
                2.265-2.264 5.888-2.34 8.244-.228z`})]}),"India"]})})}),y.jsx("div",{className:"absolute bottom-[220px] left-[90px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function Np(){const[l,r]=C.useState(!1)}function Mp(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!-- Paste this into your HTML file where you want the button -->
<button class="bubble-button">Click Me</button>

<!-- Paste this inside a <style> tag in your <head> or anywhere inside HTML -->
<style>
/* Bubble Effect Button */

/* Author : Rudrasena Reddy */
/* Please Check Remaining Projects on Github */

.bubble-button {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #f9a703;
  transition: all 0.9s ease;
}

.bubble-button:active {
  transform: scale(1);
}

.bubble-button:before,
.bubble-button:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.bubble-button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #ff9500 20%, transparent 30%),
    radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #ff9500 15%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.8s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.bubble-button:hover::after {
  bottom: -120%;
  background-image: radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #fa9005 15%, transparent 20%),
    radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, #fa9005 20%, transparent 20%),
    radial-gradient(circle, #ff9500 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%; 
  animation: greenbottomBubbles 0.9s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>


    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[305px] left-[370px] z-40",children:y.jsx("button",{className:"button px-4 py-2 text-white font-bold text-base rounded-md bg-green-600 hover:bg-green-700 transition",children:"Button"})}),y.jsx("div",{className:"absolute bottom-[220px] left-[330px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function Cp(){const[l,r]=C.useState(!1);C.useEffect(()=>{const o=()=>{r(window.scrollY>100)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l?y.jsx("button",{className:"back-to-top-button",onClick:s,"aria-label":"Back to Top",children:y.jsx("svg",{className:"svgIcon",viewBox:"0 0 384 512",children:y.jsx("path",{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"})})}):null}function Rp(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tooltip Hover Button</title>
  <style>
    /* Button Tooltip Hover */
    /* Author : Rudrasena Reddy */
    /* Please Check Remaining Projects on Github */
    body {
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: sans-serif;
    }

    .tooltip-container {
      --background: #333333;
      --color: #e8e8e8;
      position: relative;
      cursor: pointer;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      font-size: 16px;
      font-weight: 600;
      color: var(--color);
      padding: 0.6em 1.8em;
      border-radius: 8px;
      text-transform: uppercase;
      height: 50px;
      width: 150px;
      display: grid;
      place-items: center;
      border: 2px solid var(--color);
    }

    .text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      transform-origin: -100%;
      transform: scale(1);
      transition: all 0.6s cubic-bezier(0.24, 1, 0.32, 1);
    }

    .tooltip-container span:last-child {
      position: absolute;
      top: 0%;
      left: 100%;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      opacity: 1;
      background-color: var(--background);
      z-index: -1;
      border: 2px solid var(--background);
      transform: scale(0);
      transform-origin: 0;
      transition: all 0.6s cubic-bezier(0.24, 1, 0.32, 1);
      display: grid;
      place-items: center;
    }

    .tooltip {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.3em 0.6em;
      opacity: 0;
      pointer-events: none;
      transition: all 0.7s cubic-bezier(0.28, 1, 0.30, 1);
      background: var(--background);
      z-index: -1;
      border-radius: 10px;
      scale: 2;
      transform-origin: 9 2;
      text-transform: capitalize;
      font-weight: 400;
      font-size: 16px;
      box-shadow: rgba(3, 3, 186, 0.25) 0 8px 15px;
    }

    .tooltip::before {
      position: absolute;
      content: "";
      height: 0.8em;
      width: 0.8em;
      bottom: -0.4em;
      left: 50%;
      transform: translate(-50%) rotate(46deg);
      background: var(--background);
    }

    .tooltip-container:hover .tooltip {
      top: -60%;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      scale: 1;
      animation: shake 0.6s ease-in-out both;
    }

    .tooltip-container:hover {
      box-shadow: rgba(1, 34, 249, 0.25) 0 8px 20px;
      color: white;
      border-color: transparent;
    }

    .tooltip-container:hover span:last-child {
      transform: scale(1);
      left: 0;
    }

    .tooltip-container:hover .text {
      opacity: 0;
      top: 0%;
      left: 100%;
      transform: scale(00.9s);
    }

    @keyframes shake {
      0% { rotate: 0; }
      25% { rotate: 20deg; }
      50% { rotate: -18deg; }
      75% { rotate: 20deg; }
      100% { rotate: 0; }
    }
  </style>
</head>
<body>

  <!-- Here HTML Button form-->
  <div class="tooltip-container">
    <span class="tooltip">By Rudra</span>
    <span class="text">Hover here👆</span>
    <span>Hi, Thanks ;)</span>
  </div>

</body>
</html>
    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[305px] left-[570px] z-40",children:y.jsxs("div",{className:"tooltip-container",children:[y.jsx("span",{className:"tooltip",children:"By Rudra"}),y.jsx("span",{className:"text",children:"Hover here👆"}),y.jsx("span",{children:"Hi, Thanks ;)"})]})}),y.jsx("div",{className:"absolute bottom-[220px] left-[590px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function jp(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Copy Link Button</title>
  <style>
    /* Center container */
    .button4-centralize {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: #ffffff;
    }

    /* Button base */
    .button4-btn {
      background-color: #f2f7fa;
      width: 100px;
      height: 30px;
      border: 0;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      overflow: hidden;
      transition-duration: 700ms;
      position: relative;
      outline: none;
    }

    /* Initial span (Copy link + icon) */
    .button4-btn span:first-child {
      color: #546678;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      transition: all 0.5s ease;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    /* Copied message (hidden initially) */
    .button4-btn span:last-child {
      position: absolute;
      color: #ffffff;
      opacity: 0;
      transform: translateY(100%) translateX(-50%);
      left: 50%;
      top: 50%;
      height: 14px;
      line-height: 13px;
      transition: all 0.5s ease;
    }

    /* Focus state triggers animation */
    .button4-btn:focus {
      background-color: #0370ff;
      width: 120px;
      height: 40px;
      transition-delay: 100ms;
      transition-duration: 500ms;
    }

    .button4-btn:focus span:first-child {
      color: #d0e0fd;
      transform: translateX(-50%) translateY(-150%);
      opacity: 0;
    }

    .button4-btn:focus span:last-child {
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
      transition-delay: 300ms;
    }
  </style>
</head>
<body>

  <!-- Button UI -->
  <div class="button4-centralize">
    <button class="button4-btn" onclick="copyToClipboard(this)">
      <span>
        <svg
          width="12"
          height="12"
          fill="#0E418F"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 467 512.22"
        >
          <path
            d="M131.07 372.11c.37 1 .57 2.08.57 3.2..."
          />
        </svg>
        Click Me
      </span>
      <span>Hello</span>
    </button>
  </div>

  <!-- Clipboard copy logic -->
  <script>
    function copyToClipboard(button) {
      const dummyLink = 'https://example.com';
      navigator.clipboard.writeText(dummyLink).then(() => {
        button.focus(); // trigger :focus animation
        setTimeout(() => button.blur(), 2000); // remove focus after animation
      });
    }
  <\/script>

</body>
</html>

    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[320px] left-[850px] z-40",children:y.jsx("div",{className:"button4-centralize",children:y.jsxs("button",{className:"button4-btn",children:[y.jsxs("span",{children:[y.jsx("svg",{width:"12",height:"12",fill:"#0E418F",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 467 512.22",children:y.jsx("path",{fillRule:"nonzero",d:"M131.07 372.11c.37 1 .57 2.08.57 3.2..."})}),"Click Me"]}),y.jsx("span",{children:"Hello"})]})})}),y.jsx("div",{className:"absolute bottom-[220px] left-[830px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function _p(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Button5 Hover Effect</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .button5-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "button5-bt1 button5-bt2 button5-bt3"
        "button5-bt4 button5-bt5 button5-bt6";
      position: relative;
      perspective: 800px;
      width: 135px;
      height: 47px;
      transition: all 0.3s ease-in-out;
    }

    .button5-container:active {
      transform: scale(0.95);
    }

    .button5-hover {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 200;
    }

    .button5-bt1 { grid-area: button5-bt1; }
    .button5-bt2 { grid-area: button5-bt2; }
    .button5-bt3 { grid-area: button5-bt3; }
    .button5-bt4 { grid-area: button5-bt4; }
    .button5-bt5 { grid-area: button5-bt5; }
    .button5-bt6 { grid-area: button5-bt6; }

    .button5-bt1:hover ~ .button5-btn {
      transform: rotateX(15deg) rotateY(-15deg);
      box-shadow: -2px -2px #18181888;
    }

    .button5-bt1:hover ~ .button5-btn::after {
      animation: button5-shake 0.5s ease-in-out 0.3s;
      text-shadow: -2px -2px #18181888;
    }

    .button5-bt3:hover ~ .button5-btn {
      transform: rotateX(15deg) rotateY(15deg);
      box-shadow: 2px -2px #18181888;
    }

    .button5-bt3:hover ~ .button5-btn::after {
      animation: button5-shake 0.5s ease-in-out 0.3s;
      text-shadow: 2px -2px #18181888;
    }

    .button5-bt4:hover ~ .button5-btn {
      transform: rotateX(-15deg) rotateY(-15deg);
      box-shadow: -2px 2px #18181888;
    }

    .button5-bt4:hover ~ .button5-btn::after {
      animation: button5-shake 0.5s ease-in-out 0.3s;
      text-shadow: -2px 2px #18181888;
    }

    .button5-bt6:hover ~ .button5-btn {
      transform: rotateX(-15deg) rotateY(15deg);
      box-shadow: 2px 2px #18181888;
    }

    .button5-bt6:hover ~ .button5-btn::after {
      animation: button5-shake 0.5s ease-in-out 0.3s;
      text-shadow: 2px 2px #18181888;
    }

    .button5-hover:hover ~ .button5-btn::before {
      background: transparent;
    }

    .button5-hover:hover ~ .button5-btn::after {
      content: "Click";
      top: -90%;
      font-size: 28px;
      color: #0bbc11;
    }

    .button5-btn {
      position: absolute;
      width: 135px;
      height: 47px;
      background: transparent;
      font-size: 17px;
      font-weight: 900;
      border: 3px solid #ff0afb;
      border-radius: 12px;
      transition: all 0.3s ease-in-out;
    }

    .button5-btn::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 135px;
      height: 47px;
      background-color: #f5bd05;
      border-radius: 12px;
      transition: all 0.3s ease-in-out;
      z-index: 2;
    }

    .button5-btn::after {
      content: "Hover";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 135px;
      height: 47px;
      font-size: 17px;
      font-weight: 900;
      line-height: 47px;
      color: #0bbc11;
      border: none;
      border-radius: 10px;
      transition: all 0.5s ease-in-out;
      z-index: 2;
    }

    @keyframes button5-shake {
      0%   { left: 48%; }
      25%  { left: 56%; }
      50%  { left: 49%; }
      75%  { left: 54%; }
      100% { left: 59%; }
    }
  </style>
</head>
<body>

  <div class="button5-container">
    <div class="button5-hover button5-bt1"></div>
    <div class="button5-hover button5-bt2"></div>
    <div class="button5-hover button5-bt3"></div>
    <div class="button5-hover button5-bt4"></div>
    <div class="button5-hover button5-bt5"></div>
    <div class="button5-hover button5-bt6"></div>
    <button class="button5-btn"></button>
  </div>

</body>
</html>

    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[320px] left-[1050px] z-40",children:y.jsxs("div",{className:"button5-container",children:[y.jsx("div",{className:"button5-hover button5-bt1"}),y.jsx("div",{className:"button5-hover button5-bt2"}),y.jsx("div",{className:"button5-hover button5-bt3"}),y.jsx("div",{className:"button5-hover button5-bt4"}),y.jsx("div",{className:"button5-hover button5-bt5"}),y.jsx("div",{className:"button5-hover button5-bt6"}),y.jsx("button",{className:"button5-btn"})]})}),y.jsx("div",{className:"absolute bottom-[220px] left-[1040px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function Dp(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Glowing LinkedIn Button</title>
  <style>
    /* Button6 - Glowing LinkedIn Style */
    .glow-btn {
      position: relative;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      padding: 0.5rem 1.25rem;
      background-color: rgb(0, 107, 179);
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #ffffff;
      gap: 10px;
      font-weight: bold;
      border: 3px solid #ffffff4d;
      outline: none;
      overflow: hidden;
      font-size: 15px;
    }

    .glow-btn svg {
      width: 24px;
      height: 24px;
      transition: all 0.3s ease-in-out;
    }

    .glow-btn:hover {
      transform: scale(1.05);
      border-color: #fff9;
    }

    .glow-btn:hover svg {
      transform: translate(4px);
    }

    .glow-btn:hover::before {
      animation: shine 1.5s ease-out infinite;
    }

    .glow-btn::before {
      content: "";
      position: absolute;
      width: 100px;
      height: 100%;
      background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 30%,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0) 70%
      );
      top: 0;
      left: -100px;
      opacity: 0.6;
    }

    @keyframes shine {
      0% {
        left: -100px;
      }
      60% {
        left: 100%;
      }
      100% {
        left: 100%;
      }
    }
  </style>
</head>
<body style="background: #f8f9fa; display: flex; justify-content: center; align-items: center; height: 100vh;">

  <button class="glow-btn">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 12l1.41 1.41L11 7.83v12.34h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
    </svg>
    LinkedIn
  </button>

</body>
</html>

    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[100px] left-[100px] z-40",children:y.jsxs("button",{className:"button6-glow-btn",children:[y.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",children:y.jsx("path",{d:"M4 12l1.41 1.41L11 7.83v12.34h2V7.83l5.59 5.58L20 12l-8-8-8 8z"})}),"Linkedin"]})}),y.jsx("div",{className:"absolute bottom-[20px] left-[90px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function Up(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Button7 - Glowing Centered Icon</title>
  <style>
   /* Button7 style*/
.button7-glow-btn {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  background-color: rgb(0 107 179);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  gap: 10px;
  font-weight: bold;
  border: 0px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  cursor: pointer;
  width: 50px;
  height: 50px;
}

.button7-icon {
  width: 35px;
  height: 35px;
  transition: all 0.3s ease-in-out;
}

.button7-glow-btn:hover {
  transform: scale(10.3s);
  border-color: #fff9;
}



.button7-glow-btn:hover::before {
  animation: button7-shine 1.2s ease-out infinite;
}

.button7-glow-btn::before {
  content: "";
  position:absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes button7-shine {
  0% {
    left: -100px;
  }
  60% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

  </style>
</head>
<body>

  <!-- Centered Glowing Icon Button -->
  <button class="button7-glow-btn">
    <svg fill="currentColor" viewBox="0 0 24 24" class="button7-icon">
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      />
    </svg>
  </button>

</body>
</html>

    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[100px] left-[400px] z-40",children:y.jsx("button",{className:"button7-glow-btn",children:y.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",className:"button7-icon",children:y.jsx("path",{clipRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z",fillRule:"evenodd"})})})}),y.jsx("div",{className:"absolute bottom-[20px] left-[330px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function Bp(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Centered Button8 - Add to Card</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    .btn8-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 40;
    }

    .btn8-button {
      border: none;
      outline: none;
      background-color: #3a3a3a;
      width: 180px;
      height: 60px;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      transition: all 0.3s;
    }

    .btn8-button::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      width: 106%;
      height: 120%;
      z-index: -1;
      border-radius: inherit;
      transition: all 0.3s;
    }

    .btn8-gradient-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 106%;
      height: 115%;
      overflow: hidden;
      border-radius: inherit;
      z-index: -2;
      filter: blur(10px);
      transition: all 0.3s;
    }

    .btn8-gradient {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 110%;
      aspect-ratio: 1;
      border-radius: 100%;
      transition: all 0.3s;
      background-image: linear-gradient(
        90deg,
        hsl(41, 100%, 50%),
        hsl(0, 0%, 100%),
        hsl(129, 100%, 50%),
        hsl(329, 100%, 51%),
        hsl(206, 97%, 40%),
        hsl(176, 100%, 50%),
        hsl(242, 100%, 50%),
        hsl(303, 100%, 51%)
      );
      animation: btn8-rotate 2s linear infinite;
      filter: blur(5px);
    }

    .btn8-label {
      width: 156px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      border-radius: 22px;
      background-color: rgba(43, 43, 43, 1);
      background-image: linear-gradient(
        180deg,
        rgb(43, 43, 43) 0%,
        rgb(68, 68, 68) 100%
      );
    }

    .btn8-button:hover .btn8-gradient-container {
      transform: translate(-50%, -50%) scale(0.98);
      filter: blur(2px);
    }

    .btn8-button:hover .btn8-gradient {
      filter: blur(4px);
    }

    @keyframes btn8-rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  </style>
</head>
<body>

  <div class="btn8-wrapper">
    <button class="btn8-button">
      <span class="btn8-label">+ Add to card</span>
      <span class="btn8-gradient-container">
        <span class="btn8-gradient"></span>
      </span>
    </button>
  </div>

</body>
</html>


    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[100px] left-[580px] z-40",children:y.jsxs("button",{className:"btn8-button",children:[y.jsx("span",{className:"btn8-label",children:"+ Add to card"}),y.jsx("span",{className:"btn8-gradient-container",children:y.jsx("span",{className:"btn8-gradient"})})]})}),y.jsx("div",{className:"absolute bottom-[20px] left-[590px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function Hp(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Button9 - Glowing Stars</title>
  <style>
   /* Button9 - Floating Glowing Stars (No Rotation) */

.button9-btn {
  position: relative;
  padding: 16px 42px;
  background: #111;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  border: 2px solid #014ccf;
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 0 10px #00ffe155, 0 0 20px #00ffe122;
}

.button9-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, #00f0ff, #ff00c8);
  z-index: -1;
  opacity: 0.25;
  filter: blur(20px);
  transition: 0.4s ease-in-out;
}

/* Stars hidden initially */
.button9-star-1,
.button9-star-2,
.button9-star-3,
.button9-star-4,
.button9-star-5,
.button9-star-6 {
  position: absolute;
  width: 12px;
  height: 12px;
  opacity: 0;
  z-index: 2;
  fill: #0ff;
  stroke: #00eaff;
  stroke-width: 2;
  pointer-events: none;
  transform: scale(0.3);
  transition: all 0.4s ease;
}

/* Base positions */
.button9-star-1 { top: 30%; left: 30%; }
.button9-star-2 { top: 50%; left: 50%; }
.button9-star-3 { top: 20%; left: 80%; }
.button9-star-4 { top: 60%; left: 20%; }
.button9-star-5 { top: 70%; left: 55%; }
.button9-star-6 { top: 10%; left: 70%; }

/* On hover */
.button9-btn:hover {
  background: #000000;
  color: #00ffe1;
  box-shadow: 0 0 20px #12dfc7aa, 0 0 40px #b3078de2;
  border-color: #053853;
}

.button9-btn:hover::before {
  opacity: 0.5;
}

/* Stars glow and float out slightly */
.button9-btn:hover .button9-star-1 {
  opacity: 2;
  transform: translate(-50px, -90px) scale(5);
  animation: star-float 0s ease-in-out infinite;
}

.button9-btn:hover .button9-star-2 {
  opacity: 1;
  transform: translate(20px, -16px) scale(1.1);
  animation: star-float 2.2s ease-in-out infinite;
}

.button9-btn:hover .button9-star-3 {
  opacity: 1;
  transform: translate(-1px, 2px) scale(1);
  animation: star-float 2.4s ease-in-out infinite;
}

.button9-btn:hover .button9-star-4 {
  opacity: 1;
  transform: translate(10px, 25px) scale(1.1);
  animation: star-float 1s ease-in-out infinite;
}

.button9-btn:hover .button9-star-5 {
  opacity: 1;
  transform: translate(-25px, 10px) scale(1.1);
  animation: star-float 2.8s ease-in-out infinite;
}

.button9-btn:hover .button9-star-6 {
  opacity: 1;
  transform: translate(30px, -20px) scale(1.1);
  animation: star-float 3s ease-in-out infinite;
}

/* Floating star animation */
@keyframes star-float {
  0% {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(-5px) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

  </style>
</head>
<body>

  <button class="button9-btn">
    Button
    <div class="button9-star-1">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-2">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-3">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-4">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-5">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
    <div class="button9-star-6">
      <svg viewBox="0 0 784.11 815.53" fill="currentColor">
        <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78
                 207.96,29.37 371.12,197.68 392.05,407.74
                 20.93,-210.06 184.09,-378.37 392.05,-407.74
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
      </svg>
    </div>
  </button>

</body>
</html>


    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[100px] left-[840px] z-40",children:y.jsxs("button",{className:"button9-btn",children:["Button",[1,2,3,4,5,6].map(o=>y.jsx("div",{className:`button9-star-${o}`,children:y.jsx("svg",{viewBox:"0 0 784.11 815.53",fill:"currentColor",children:y.jsx("path",{className:"button9-star",d:"M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})})},o))]})}),y.jsx("div",{className:"absolute bottom-[20px] left-[830px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function Lp(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Button10</title>
  <style>
   body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
 
    }
 /* Button10 style */
.button10-main {
  position: relative;
  padding: 12px 35px;
  background: #4c83fa;
  font-size: 17px;
  font-weight: 1000;
  color: #ffffff;
  border: 3px solid #4c83fa;
  border-radius: 8px;
  box-shadow: 0 0 0 #ffffff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.button10-star-1,
.button10-star-2,
.button10-star-3,
.button10-star-4,
.button10-star-5,
.button10-star-6 {
  position: absolute;
  filter: drop-shadow(0 0 0 #4c83fa);
  z-index: -5;
}

.button10-star-1 {
  top: 20%;
  left: 20%;
  width: 25px;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.button10-star-2 {
  top: 45%;
  left: 45%;
  width: 15px;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.button10-star-3 {
  top: 40%;
  left: 40%;
  width: 5px;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.button10-star-4 {
  top: 20%;
  left: 40%;
  width: 8px;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.button10-star-5 {
  top: 25%;
  left: 45%;
  width: 15px;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.button10-star-6 {
  top: 5%;
  left: 50%;
  width: 5px;
  transition: all 0.8s ease;
}

.button10-main:hover {
  background: transparent;
  color: #4c83fa;
  box-shadow: 0 0 0px #4c83fa;
}

.button10-main:hover .button10-star-1 {
  top: -80%;
  left: -30%;
  z-index: 2;
}

.button10-main:hover .button10-star-2 {
  top: 0%;
  left: 10%;
  z-index: 2;
}

.button10-main:hover .button10-star-3 {
  top: 55%;
  left: 25%;
  z-index: 2;
}

.button10-main:hover .button10-star-4 {
  top: 30%;
  left: 80%;
  z-index: 2;
}

.button10-main:hover .button10-star-5 {
  top: 25%;
  left: 115%;
  z-index: 2;
}

.button10-main:hover .button10-star-6 {
  top: 5%;
  left: 60%;
  z-index: 2;
}

.button10-fill {
  fill: #4c83fa;
}

  </style>
</head>
<body>

  <button class="button10-main">
    Hover Me
    <div class="button10-star-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
        <path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
        207.96,29.37 371.12,197.68 392.05,407.74 
        20.93,-210.06 184.09,-378.37 392.05,-407.74 
        -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/>
      </svg>
    </div>
    <div class="button10-star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
    <div class="button10-star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
    <div class="button10-star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
    <div class="button10-star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
    <div class="button10-star-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"><path class="button10-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"/></svg></div>
  </button>

</body>
</html>

    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"absolute bottom-[-90px] left-[90px] z-40",children:y.jsxs("button",{className:"button10-main",children:["Hover Me",[1,2,3,4,5,6].map(o=>y.jsx("div",{className:`button10-star-${o}`,children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 784.11 815.53",children:y.jsx("path",{className:"button10-fill",d:`M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78\r
                  207.96,29.37 371.12,197.68 392.05,407.74 \r
                  20.93,-210.06 184.09,-378.37 392.05,-407.74 \r
                  -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z`})})},o))]})}),y.jsx("div",{className:"absolute bottom-[-170px] left-[90px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}const kp=()=>y.jsx("div",{className:"button11-wrapper",children:y.jsx("a",{href:"https://github.com/RudrasenaReddy87",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:y.jsxs("button",{className:"btn11-bt",children:[y.jsxs("div",{className:"btn11-light-holder",children:[y.jsx("div",{className:"btn11-dot"}),y.jsx("div",{className:"btn11-light"})]}),y.jsxs("div",{className:"btn11-button-holder",children:[y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"#ffffff",children:y.jsx("path",{d:"M12 0.2975C5.37 0.2975 0 5.6675 0 12.2975c0 5.289 3.438 9.775 8.207 11.387.6.113.793-.26.793-.577 0-.285-.011-1.04-.017-2.042-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.513 11.513 0 0 1 3.003-.403c1.02.005 2.047.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.479 5.921.43.37.823 1.102.823 2.222 0 1.604-.015 2.898-.015 3.293 0 .32.192.694.801.576C20.565 22.068 24 17.584 24 12.2975 24 5.6675 18.627 0.2975 12 0.2975z"})}),y.jsx("p",{children:"GitHub"})]})]})})});function qp(){const[l,r]=C.useState(!1),s=()=>{const o=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Social Media Button</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            font-family: 'Courier New', Courier, monospace;
        }

        .button12-wrapper {
            display: inline-block;
        }

        .btn12 {
            all: unset;
            position: relative;
            display: flex;
            overflow: hidden;
            cursor: pointer;
            width: 150px;
            height: 50px;
            background-color: #eeeeed;
            border-radius: 80px;
            border: none;
            padding: 0 80px;
            transition: all 0.2s ease;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            font-family: inherit;
        }

        .btn12:hover {
            transform: scale(1.1);
        }

        .btn12 span {
            position: absolute;
            z-index: 99;
            width: 150px;
            height: 50px;
            border-radius: 80px;
            font-family: 'Courier New', Courier, monospace;
            font-weight: 600;
            font-size: 17px;
            text-align: center;
            line-height: 50px;
            letter-spacing: 2px;
            color: #eeeeed;
            background-color: #1f1f1f;
            padding: 0 10px;
            transition: all 1.2s ease;
        }

        .btn12-container {
            display: flex;
            width: 150px;
            border-radius: 80px;
            line-height: 50px;
            justify-content: center;
        }

        .btn12 svg {
            padding: 0 5px;
            opacity: 0;
            transition: opacity 0.3s ease;
            fill: #1f1f1f;
        }

        .btn12-container svg:nth-of-type(1) {
            transition-delay: 0.65s;
        }

        .btn12-container svg:nth-of-type(2) {
            transition-delay: 0.8s;
        }

        .btn12-container svg:nth-of-type(3) {
            transition-delay: 0.5s;
        }

        .btn12:hover span {
            opacity: 0;
        }

        .btn12:hover svg {
            opacity: 1;
        }
    </style>
</head>
<body>
    <div class="button12-wrapper">
        <button class="btn12">
            <span>Hover Me</span>
            <div class="btn12-container">
                <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"></path>
                </svg>
                <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3s59.9 133.3 133.3 133.3 133.3-59.9 133.3-133.3-59.9-133.3-133.3-133.3zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5-46.9 46.9-61.4 103.6-64.5 167.6-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1s91.6-205.1 205.1-205.1 205.1 91.6 205.1 205.1-91.6 205.1-205.1 205.1zm213.5-337.6c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9-21.4 47.9-47.9 47.9z"></path>
                </svg>
                <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
                </svg>
            </div>
        </button>
    </div>
</body>
</html>
    `.trim();navigator.clipboard.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return y.jsxs("div",{className:"button12-wrapper",children:[y.jsxs("button",{className:"btn12",children:[y.jsx("span",{children:"Hover Me"}),y.jsxs("div",{className:"btn12-container",children:[y.jsx("svg",{height:"35",width:"35",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:y.jsx("path",{fill:"",d:"M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"})}),y.jsx("svg",{height:"35",width:"35",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:y.jsx("path",{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3s59.9 133.3 133.3 133.3 133.3-59.9 133.3-133.3-59.9-133.3-133.3-133.3zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5-46.9 46.9-61.4 103.6-64.5 167.6-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1s91.6-205.1 205.1-205.1 205.1 91.6 205.1 205.1-91.6 205.1-205.1 205.1zm213.5-337.6c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9-21.4 47.9-47.9 47.9z"})}),y.jsx("svg",{height:"35",width:"35",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:y.jsx("path",{fill:"",d:"M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"})})]})]}),y.jsx("div",{className:"absolute bottom-[-80px] left-[-7px] z-40",children:y.jsx("button",{className:"ui-btn small-btn rounded-xl hover:glow-effect",onClick:s,children:y.jsx("span",{children:l?"Copied!":"Click to Copy"})})})]})}function Yp(){const[l,r]=C.useState(!1),[s,o]=C.useState(!1),f=C.useRef([]),d=C.useRef(null);C.useEffect(()=>{const m=S=>{if(d.current&&!d.current.contains(S.target)){const T=document.querySelector(".button13-main");T&&!T.contains(S.target)&&r(!1)}};return l&&document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[l]);const v=()=>{r(!l)},p=m=>{m.stopPropagation();const S=`
// src/components/buttons/Button13.jsx
import './Button13style.css';

export default function Button13() {
  return (
    <div className="button13-bottom-container">
      <div className="button13-container">
        <button className="button13-main">
          <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Explore More Buttons
          <span className="button13-inner">
            <span className="button13-blobs">
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
              <span className="button13-blob"></span>
            </span>
          </span>
        </button>
        <svg className="button13-svg">
          <defs>
            <filter id="button13-filter">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
`.trim();navigator.clipboard.writeText(S).then(()=>{o(!0),setTimeout(()=>o(!1),2e3)})};C.useEffect(()=>{const m=S=>{f.current.forEach(T=>{if(T){const M=T.getBoundingClientRect(),U=S.clientX-M.left-M.width/2,q=S.clientY-M.top-M.height/2;T.style.transform=`translate(${U*.15}px, ${q*.15}px)`}})};return window.addEventListener("mousemove",m),()=>window.removeEventListener("mousemove",m)},[]);const b=m=>{const S=m.currentTarget,T=document.createElement("span");T.className="ripple";const M=S.getBoundingClientRect(),U=Math.max(M.width,M.height),q=m.clientX-M.left-U/2,L=m.clientY-M.top-U/2;T.style.width=T.style.height=`${U}px`,T.style.left=`${q}px`,T.style.top=`${L}px`,S.appendChild(T),setTimeout(()=>{T.remove()},600)};return y.jsxs("div",{className:"button13-bottom-container",children:[y.jsxs("div",{className:"button13-container",children:[y.jsxs("button",{className:"button13-main",onClick:v,onContextMenu:p,"aria-label":"Toggle button collection","aria-expanded":l,"aria-haspopup":"dialog",children:[y.jsx("svg",{className:"svgIcon",viewBox:"0 0 512 512",height:"1em",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})}),l?"Hide Collection":"Click Here To Explore More Buttons",y.jsx("span",{className:"button13-inner",children:y.jsxs("span",{className:"button13-blobs",children:[y.jsx("span",{className:"button13-blob"}),y.jsx("span",{className:"button13-blob"}),y.jsx("span",{className:"button13-blob"}),y.jsx("span",{className:"button13-blob"})]})})]}),y.jsx("svg",{className:"button13-svg",children:y.jsx("defs",{children:y.jsxs("filter",{id:"button13-filter",children:[y.jsx("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"10"}),y.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7",result:"goo"}),y.jsx("feBlend",{in2:"goo",in:"SourceGraphic",result:"mix"})]})})})]}),l&&y.jsx("div",{className:"popup-overlay",children:y.jsxs("div",{className:"popup-center",ref:d,children:[y.jsx("div",{className:"collection-categories",children:y.jsx("button",{className:"category-tab active",children:"Few More Buttons"})}),y.jsxs("div",{className:"collection-buttons",children:[y.jsx("button",{className:"btn-depth",children:"Depth Press"}),y.jsx("button",{className:"btn-lift",children:"Soft Lift"}),y.jsxs("button",{className:"btn-3d-cube",children:[y.jsx("span",{className:"btn-3d-cube-shadow"}),y.jsxs("span",{className:"btn-3d-cube-sides",children:[y.jsx("span",{className:"btn-3d-cube-top"}),y.jsx("span",{className:"btn-3d-cube-right"})]}),y.jsx("span",{className:"btn-3d-c-front",children:"Shadow Button"})]}),y.jsx("button",{className:"btn-flip",children:"Color Flip"}),y.jsx("button",{className:"btn-pixel",children:"Pixel Press"}),y.jsx("button",{className:"btn-gradient",children:"Gradient"}),y.jsx("button",{className:"btn-handdrawn",children:"Hand Drawn"}),y.jsx("button",{className:"btn-border-morph",children:"Border Morph"}),y.jsx("button",{className:"btn-neon",children:"Neon Glow"}),y.jsx("button",{className:"btn-liquid",children:"Liquid Fill"}),y.jsx("button",{className:"btn-magnetic",ref:m=>f.current[0]=m,children:"Magnetic Button"}),y.jsx("button",{className:"btn-ripple",onClick:b,children:"Ripple Effect"}),y.jsx("button",{className:"btn-glow-pulse",children:"Glow Pulse"}),y.jsxs("button",{className:"btn-border-draw",children:[y.jsx("span",{children:"Border Draw"}),y.jsx("svg",{className:"border-draw-svg",viewBox:"0 0 200 50",children:y.jsx("path",{className:"border-draw-path",d:"M5,5 L195,5 L195,45 L5,45 Z"})})]}),y.jsx("button",{className:"btn-spring",children:"Spring"}),y.jsx("button",{className:"btn-pulse",children:"Pulse"}),y.jsx("button",{className:"btn-flip",children:y.jsxs("div",{className:"btn-flip-inner",children:[y.jsx("div",{className:"btn-flip-front",children:"Flip"}),y.jsx("div",{className:"btn-flip-back",children:"Back"})]})}),y.jsx("button",{className:"btn-jelly",children:"Jelly"}),y.jsx("button",{className:"btn-neon-flicker",children:"Neon Flicker"})]})]})})]})}/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Cs(l,r){(r==null||r>l.length)&&(r=l.length);for(var s=0,o=Array(r);s<r;s++)o[s]=l[s];return o}function Gp(l){if(Array.isArray(l))return l}function Xp(l){if(Array.isArray(l))return Cs(l)}function Qp(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}function Vp(l,r){for(var s=0;s<r.length;s++){var o=r[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,xh(o.key),o)}}function Zp(l,r,s){return r&&Vp(l.prototype,r),Object.defineProperty(l,"prototype",{writable:!1}),l}function ju(l,r){var s=typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(!s){if(Array.isArray(l)||(s=ef(l))||r){s&&(l=s);var o=0,f=function(){};return{s:f,n:function(){return o>=l.length?{done:!0}:{done:!1,value:l[o++]}},e:function(b){throw b},f}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,v=!0,p=!1;return{s:function(){s=s.call(l)},n:function(){var b=s.next();return v=b.done,b},e:function(b){p=!0,d=b},f:function(){try{v||s.return==null||s.return()}finally{if(p)throw d}}}}function st(l,r,s){return(r=xh(r))in l?Object.defineProperty(l,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[r]=s,l}function Kp(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function Jp(l,r){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var o,f,d,v,p=[],b=!0,m=!1;try{if(d=(s=s.call(l)).next,r===0){if(Object(s)!==s)return;b=!1}else for(;!(b=(o=d.call(s)).done)&&(p.push(o.value),p.length!==r);b=!0);}catch(S){m=!0,f=S}finally{try{if(!b&&s.return!=null&&(v=s.return(),Object(v)!==v))return}finally{if(m)throw f}}return p}}function $p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x1(l,r){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);r&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,o)}return s}function k(l){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?x1(Object(s),!0).forEach(function(o){st(l,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):x1(Object(s)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(s,o))})}return l}function Xu(l,r){return Gp(l)||Jp(l,r)||ef(l,r)||$p()}function Re(l){return Xp(l)||Kp(l)||ef(l)||Fp()}function Wp(l,r){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var o=s.call(l,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function xh(l){var r=Wp(l,"string");return typeof r=="symbol"?r:r+""}function Bu(l){"@babel/helpers - typeof";return Bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Bu(l)}function ef(l,r){if(l){if(typeof l=="string")return Cs(l,r);var s={}.toString.call(l).slice(8,-1);return s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set"?Array.from(l):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Cs(l,r):void 0}}var S1=function(){},af={},Sh={},Eh=null,Ah={mark:S1,measure:S1};try{typeof window<"u"&&(af=window),typeof document<"u"&&(Sh=document),typeof MutationObserver<"u"&&(Eh=MutationObserver),typeof performance<"u"&&(Ah=performance)}catch{}var Pp=af.navigator||{},E1=Pp.userAgent,A1=E1===void 0?"":E1,Ua=af,wt=Sh,T1=Eh,Nu=Ah;Ua.document;var oa=!!wt.documentElement&&!!wt.head&&typeof wt.addEventListener=="function"&&typeof wt.createElement=="function",Th=~A1.indexOf("MSIE")||~A1.indexOf("Trident/"),gs,Ip=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,tg=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,wh={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},eg={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},zh=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Pt="classic",si="duotone",Oh="sharp",Nh="sharp-duotone",Mh="chisel",Ch="etch",Rh="jelly",jh="jelly-duo",_h="jelly-fill",Dh="notdog",Uh="notdog-duo",Bh="slab",Hh="slab-press",Lh="thumbprint",kh="whiteboard",ag="Classic",ng="Duotone",lg="Sharp",ig="Sharp Duotone",ug="Chisel",rg="Etch",og="Jelly",sg="Jelly Duo",fg="Jelly Fill",cg="Notdog",dg="Notdog Duo",hg="Slab",mg="Slab Press",vg="Thumbprint",bg="Whiteboard",qh=[Pt,si,Oh,Nh,Mh,Ch,Rh,jh,_h,Dh,Uh,Bh,Hh,Lh,kh];gs={},st(st(st(st(st(st(st(st(st(st(gs,Pt,ag),si,ng),Oh,lg),Nh,ig),Mh,ug),Ch,rg),Rh,og),jh,sg),_h,fg),Dh,cg),st(st(st(st(st(gs,Uh,dg),Bh,hg),Hh,mg),Lh,vg),kh,bg);var pg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},gg={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},yg=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),xg={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Yh=["fak","fa-kit","fakd","fa-kit-duotone"],w1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Sg=["kit"],Eg="kit",Ag="kit-duotone",Tg="Kit",wg="Kit Duotone";st(st({},Eg,Tg),Ag,wg);var zg={kit:{"fa-kit":"fak"}},Og={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ng={kit:{fak:"fa-kit"}},z1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ys,Mu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mg=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Cg="classic",Rg="duotone",jg="sharp",_g="sharp-duotone",Dg="chisel",Ug="etch",Bg="jelly",Hg="jelly-duo",Lg="jelly-fill",kg="notdog",qg="notdog-duo",Yg="slab",Gg="slab-press",Xg="thumbprint",Qg="whiteboard",Vg="Classic",Zg="Duotone",Kg="Sharp",Jg="Sharp Duotone",$g="Chisel",Fg="Etch",Wg="Jelly",Pg="Jelly Duo",Ig="Jelly Fill",ty="Notdog",ey="Notdog Duo",ay="Slab",ny="Slab Press",ly="Thumbprint",iy="Whiteboard";ys={},st(st(st(st(st(st(st(st(st(st(ys,Cg,Vg),Rg,Zg),jg,Kg),_g,Jg),Dg,$g),Ug,Fg),Bg,Wg),Hg,Pg),Lg,Ig),kg,ty),st(st(st(st(st(ys,qg,ey),Yg,ay),Gg,ny),Xg,ly),Qg,iy);var uy="kit",ry="kit-duotone",oy="Kit",sy="Kit Duotone";st(st({},uy,oy),ry,sy);var fy={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},cy={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Rs={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},dy=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Gh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Mg,dy),hy=["solid","regular","light","thin","duotone","brands","semibold"],Xh=[1,2,3,4,5,6,7,8,9,10],my=Xh.concat([11,12,13,14,15,16,17,18,19,20]),vy=["aw","fw","pull-left","pull-right"],by=[].concat(Re(Object.keys(cy)),hy,vy,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Mu.GROUP,Mu.SWAP_OPACITY,Mu.PRIMARY,Mu.SECONDARY]).concat(Xh.map(function(l){return"".concat(l,"x")})).concat(my.map(function(l){return"w-".concat(l)})),py={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ia="___FONT_AWESOME___",js=16,Qh="fa",Vh="svg-inline--fa",un="data-fa-i2svg",_s="data-fa-pseudo-element",gy="data-fa-pseudo-element-pending",nf="data-prefix",lf="data-icon",O1="fontawesome-i2svg",yy="async",xy=["HTML","HEAD","STYLE","SCRIPT"],Zh=["::before","::after",":before",":after"],Kh=function(){try{return!0}catch{return!1}}();function fi(l){return new Proxy(l,{get:function(s,o){return o in s?s[o]:s[Pt]}})}var Jh=k({},wh);Jh[Pt]=k(k(k(k({},{"fa-duotone":"duotone"}),wh[Pt]),w1.kit),w1["kit-duotone"]);var Sy=fi(Jh),Ds=k({},xg);Ds[Pt]=k(k(k(k({},{duotone:"fad"}),Ds[Pt]),z1.kit),z1["kit-duotone"]);var N1=fi(Ds),Us=k({},Rs);Us[Pt]=k(k({},Us[Pt]),Ng.kit);var $h=fi(Us),Bs=k({},fy);Bs[Pt]=k(k({},Bs[Pt]),zg.kit);fi(Bs);var Ey=Ip,Fh="fa-layers-text",Ay=tg,Ty=k({},pg);fi(Ty);var wy=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xs=eg,zy=[].concat(Re(Sg),Re(by)),ai=Ua.FontAwesomeConfig||{};function Oy(l){var r=wt.querySelector("script["+l+"]");if(r)return r.getAttribute(l)}function Ny(l){return l===""?!0:l==="false"?!1:l==="true"?!0:l}if(wt&&typeof wt.querySelector=="function"){var My=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];My.forEach(function(l){var r=Xu(l,2),s=r[0],o=r[1],f=Ny(Oy(s));f!=null&&(ai[o]=f)})}var Wh={styleDefault:"solid",familyDefault:Pt,cssPrefix:Qh,replacementClass:Vh,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ai.familyPrefix&&(ai.cssPrefix=ai.familyPrefix);var Pn=k(k({},Wh),ai);Pn.autoReplaceSvg||(Pn.observeMutations=!1);var F={};Object.keys(Wh).forEach(function(l){Object.defineProperty(F,l,{enumerable:!0,set:function(s){Pn[l]=s,ni.forEach(function(o){return o(F)})},get:function(){return Pn[l]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(r){Pn.cssPrefix=r,ni.forEach(function(s){return s(F)})},get:function(){return Pn.cssPrefix}});Ua.FontAwesomeConfig=F;var ni=[];function Cy(l){return ni.push(l),function(){ni.splice(ni.indexOf(l),1)}}var Jn=js,ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ry(l){if(!(!l||!oa)){var r=wt.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=l;for(var s=wt.head.childNodes,o=null,f=s.length-1;f>-1;f--){var d=s[f],v=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(v)>-1&&(o=d)}return wt.head.insertBefore(r,o),l}}var jy="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function M1(){for(var l=12,r="";l-- >0;)r+=jy[Math.random()*62|0];return r}function tl(l){for(var r=[],s=(l||[]).length>>>0;s--;)r[s]=l[s];return r}function uf(l){return l.classList?tl(l.classList):(l.getAttribute("class")||"").split(" ").filter(function(r){return r})}function Ph(l){return"".concat(l).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _y(l){return Object.keys(l||{}).reduce(function(r,s){return r+"".concat(s,'="').concat(Ph(l[s]),'" ')},"").trim()}function Qu(l){return Object.keys(l||{}).reduce(function(r,s){return r+"".concat(s,": ").concat(l[s].trim(),";")},"")}function rf(l){return l.size!==ke.size||l.x!==ke.x||l.y!==ke.y||l.rotate!==ke.rotate||l.flipX||l.flipY}function Dy(l){var r=l.transform,s=l.containerWidth,o=l.iconWidth,f={transform:"translate(".concat(s/2," 256)")},d="translate(".concat(r.x*32,", ").concat(r.y*32,") "),v="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),p="rotate(".concat(r.rotate," 0 0)"),b={transform:"".concat(d," ").concat(v," ").concat(p)},m={transform:"translate(".concat(o/2*-1," -256)")};return{outer:f,inner:b,path:m}}function Uy(l){var r=l.transform,s=l.width,o=s===void 0?js:s,f=l.height,d=f===void 0?js:f,v="";return Th?v+="translate(".concat(r.x/Jn-o/2,"em, ").concat(r.y/Jn-d/2,"em) "):v+="translate(calc(-50% + ".concat(r.x/Jn,"em), calc(-50% + ").concat(r.y/Jn,"em)) "),v+="scale(".concat(r.size/Jn*(r.flipX?-1:1),", ").concat(r.size/Jn*(r.flipY?-1:1),") "),v+="rotate(".concat(r.rotate,"deg) "),v}var By=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ih(){var l=Qh,r=Vh,s=F.cssPrefix,o=F.replacementClass,f=By;if(s!==l||o!==r){var d=new RegExp("\\.".concat(l,"\\-"),"g"),v=new RegExp("\\--".concat(l,"\\-"),"g"),p=new RegExp("\\.".concat(r),"g");f=f.replace(d,".".concat(s,"-")).replace(v,"--".concat(s,"-")).replace(p,".".concat(o))}return f}var C1=!1;function Ss(){F.autoAddCss&&!C1&&(Ry(Ih()),C1=!0)}var Hy={mixout:function(){return{dom:{css:Ih,insertCss:Ss}}},hooks:function(){return{beforeDOMElementCreation:function(){Ss()},beforeI2svg:function(){Ss()}}}},ua=Ua||{};ua[ia]||(ua[ia]={});ua[ia].styles||(ua[ia].styles={});ua[ia].hooks||(ua[ia].hooks={});ua[ia].shims||(ua[ia].shims=[]);var Ce=ua[ia],tm=[],em=function(){wt.removeEventListener("DOMContentLoaded",em),Hu=1,tm.map(function(r){return r()})},Hu=!1;oa&&(Hu=(wt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(wt.readyState),Hu||wt.addEventListener("DOMContentLoaded",em));function Ly(l){oa&&(Hu?setTimeout(l,0):tm.push(l))}function ci(l){var r=l.tag,s=l.attributes,o=s===void 0?{}:s,f=l.children,d=f===void 0?[]:f;return typeof l=="string"?Ph(l):"<".concat(r," ").concat(_y(o),">").concat(d.map(ci).join(""),"</").concat(r,">")}function R1(l,r,s){if(l&&l[r]&&l[r][s])return{prefix:r,iconName:s,icon:l[r][s]}}var Es=function(r,s,o,f){var d=Object.keys(r),v=d.length,p=s,b,m,S;for(o===void 0?(b=1,S=r[d[0]]):(b=0,S=o);b<v;b++)m=d[b],S=p(S,r[m],m,r);return S};function am(l){return Re(l).length!==1?null:l.codePointAt(0).toString(16)}function j1(l){return Object.keys(l).reduce(function(r,s){var o=l[s],f=!!o.icon;return f?r[o.iconName]=o.icon:r[s]=o,r},{})}function nm(l,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=s.skipHooks,f=o===void 0?!1:o,d=j1(r);typeof Ce.hooks.addPack=="function"&&!f?Ce.hooks.addPack(l,j1(r)):Ce.styles[l]=k(k({},Ce.styles[l]||{}),d),l==="fas"&&nm("fa",r)}var ii=Ce.styles,ky=Ce.shims,lm=Object.keys($h),qy=lm.reduce(function(l,r){return l[r]=Object.keys($h[r]),l},{}),of=null,im={},um={},rm={},om={},sm={};function Yy(l){return~zy.indexOf(l)}function Gy(l,r){var s=r.split("-"),o=s[0],f=s.slice(1).join("-");return o===l&&f!==""&&!Yy(f)?f:null}var fm=function(){var r=function(d){return Es(ii,function(v,p,b){return v[b]=Es(p,d,{}),v},{})};im=r(function(f,d,v){if(d[3]&&(f[d[3]]=v),d[2]){var p=d[2].filter(function(b){return typeof b=="number"});p.forEach(function(b){f[b.toString(16)]=v})}return f}),um=r(function(f,d,v){if(f[v]=v,d[2]){var p=d[2].filter(function(b){return typeof b=="string"});p.forEach(function(b){f[b]=v})}return f}),sm=r(function(f,d,v){var p=d[2];return f[v]=v,p.forEach(function(b){f[b]=v}),f});var s="far"in ii||F.autoFetchSvg,o=Es(ky,function(f,d){var v=d[0],p=d[1],b=d[2];return p==="far"&&!s&&(p="fas"),typeof v=="string"&&(f.names[v]={prefix:p,iconName:b}),typeof v=="number"&&(f.unicodes[v.toString(16)]={prefix:p,iconName:b}),f},{names:{},unicodes:{}});rm=o.names,om=o.unicodes,of=Vu(F.styleDefault,{family:F.familyDefault})};Cy(function(l){of=Vu(l.styleDefault,{family:F.familyDefault})});fm();function sf(l,r){return(im[l]||{})[r]}function Xy(l,r){return(um[l]||{})[r]}function ln(l,r){return(sm[l]||{})[r]}function cm(l){return rm[l]||{prefix:null,iconName:null}}function Qy(l){var r=om[l],s=sf("fas",l);return r||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function Ba(){return of}var dm=function(){return{prefix:null,iconName:null,rest:[]}};function Vy(l){var r=Pt,s=lm.reduce(function(o,f){return o[f]="".concat(F.cssPrefix,"-").concat(f),o},{});return qh.forEach(function(o){(l.includes(s[o])||l.some(function(f){return qy[o].includes(f)}))&&(r=o)}),r}function Vu(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.family,o=s===void 0?Pt:s,f=Sy[o][l];if(o===si&&!l)return"fad";var d=N1[o][l]||N1[o][f],v=l in Ce.styles?l:null,p=d||v||null;return p}function Zy(l){var r=[],s=null;return l.forEach(function(o){var f=Gy(F.cssPrefix,o);f?s=f:o&&r.push(o)}),{iconName:s,rest:r}}function _1(l){return l.sort().filter(function(r,s,o){return o.indexOf(r)===s})}var D1=Gh.concat(Yh);function Zu(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.skipLookups,o=s===void 0?!1:s,f=null,d=_1(l.filter(function(U){return D1.includes(U)})),v=_1(l.filter(function(U){return!D1.includes(U)})),p=d.filter(function(U){return f=U,!zh.includes(U)}),b=Xu(p,1),m=b[0],S=m===void 0?null:m,T=Vy(d),M=k(k({},Zy(v)),{},{prefix:Vu(S,{family:T})});return k(k(k({},M),Fy({values:l,family:T,styles:ii,config:F,canonical:M,givenPrefix:f})),Ky(o,f,M))}function Ky(l,r,s){var o=s.prefix,f=s.iconName;if(l||!o||!f)return{prefix:o,iconName:f};var d=r==="fa"?cm(f):{},v=ln(o,f);return f=d.iconName||v||f,o=d.prefix||o,o==="far"&&!ii.far&&ii.fas&&!F.autoFetchSvg&&(o="fas"),{prefix:o,iconName:f}}var Jy=qh.filter(function(l){return l!==Pt||l!==si}),$y=Object.keys(Rs).filter(function(l){return l!==Pt}).map(function(l){return Object.keys(Rs[l])}).flat();function Fy(l){var r=l.values,s=l.family,o=l.canonical,f=l.givenPrefix,d=f===void 0?"":f,v=l.styles,p=v===void 0?{}:v,b=l.config,m=b===void 0?{}:b,S=s===si,T=r.includes("fa-duotone")||r.includes("fad"),M=m.familyDefault==="duotone",U=o.prefix==="fad"||o.prefix==="fa-duotone";if(!S&&(T||M||U)&&(o.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(o.prefix="fab"),!o.prefix&&Jy.includes(s)){var q=Object.keys(p).find(function(Y){return $y.includes(Y)});if(q||m.autoFetchSvg){var L=yg.get(s).defaultShortPrefixId;o.prefix=L,o.iconName=ln(o.prefix,o.iconName)||o.iconName}}return(o.prefix==="fa"||d==="fa")&&(o.prefix=Ba()||"fas"),o}var Wy=function(){function l(){Qp(this,l),this.definitions={}}return Zp(l,[{key:"add",value:function(){for(var s=this,o=arguments.length,f=new Array(o),d=0;d<o;d++)f[d]=arguments[d];var v=f.reduce(this._pullDefinitions,{});Object.keys(v).forEach(function(p){s.definitions[p]=k(k({},s.definitions[p]||{}),v[p]),nm(p,v[p]),fm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,o){var f=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(f).map(function(d){var v=f[d],p=v.prefix,b=v.iconName,m=v.icon,S=m[2];s[p]||(s[p]={}),S.length>0&&S.forEach(function(T){typeof T=="string"&&(s[p][T]=m)}),s[p][b]=m}),s}}])}(),U1=[],$n={},Wn={},Py=Object.keys(Wn);function Iy(l,r){var s=r.mixoutsTo;return U1=l,$n={},Object.keys(Wn).forEach(function(o){Py.indexOf(o)===-1&&delete Wn[o]}),U1.forEach(function(o){var f=o.mixout?o.mixout():{};if(Object.keys(f).forEach(function(v){typeof f[v]=="function"&&(s[v]=f[v]),Bu(f[v])==="object"&&Object.keys(f[v]).forEach(function(p){s[v]||(s[v]={}),s[v][p]=f[v][p]})}),o.hooks){var d=o.hooks();Object.keys(d).forEach(function(v){$n[v]||($n[v]=[]),$n[v].push(d[v])})}o.provides&&o.provides(Wn)}),s}function Hs(l,r){for(var s=arguments.length,o=new Array(s>2?s-2:0),f=2;f<s;f++)o[f-2]=arguments[f];var d=$n[l]||[];return d.forEach(function(v){r=v.apply(null,[r].concat(o))}),r}function rn(l){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];var f=$n[l]||[];f.forEach(function(d){d.apply(null,s)})}function Ha(){var l=arguments[0],r=Array.prototype.slice.call(arguments,1);return Wn[l]?Wn[l].apply(null,r):void 0}function Ls(l){l.prefix==="fa"&&(l.prefix="fas");var r=l.iconName,s=l.prefix||Ba();if(r)return r=ln(s,r)||r,R1(hm.definitions,s,r)||R1(Ce.styles,s,r)}var hm=new Wy,t3=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,rn("noAuto")},e3={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return oa?(rn("beforeI2svg",r),Ha("pseudoElements2svg",r),Ha("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=r.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Ly(function(){n3({autoReplaceSvgRoot:s}),rn("watch",r)})}},a3={icon:function(r){if(r===null)return null;if(Bu(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:ln(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var s=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],o=Vu(r[0]);return{prefix:o,iconName:ln(o,s)||s}}if(typeof r=="string"&&(r.indexOf("".concat(F.cssPrefix,"-"))>-1||r.match(Ey))){var f=Zu(r.split(" "),{skipLookups:!0});return{prefix:f.prefix||Ba(),iconName:ln(f.prefix,f.iconName)||f.iconName}}if(typeof r=="string"){var d=Ba();return{prefix:d,iconName:ln(d,r)||r}}}},be={noAuto:t3,config:F,dom:e3,parse:a3,library:hm,findIconDefinition:Ls,toHtml:ci},n3=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=r.autoReplaceSvgRoot,o=s===void 0?wt:s;(Object.keys(Ce.styles).length>0||F.autoFetchSvg)&&oa&&F.autoReplaceSvg&&be.dom.i2svg({node:o})};function Ku(l,r){return Object.defineProperty(l,"abstract",{get:r}),Object.defineProperty(l,"html",{get:function(){return l.abstract.map(function(o){return ci(o)})}}),Object.defineProperty(l,"node",{get:function(){if(oa){var o=wt.createElement("div");return o.innerHTML=l.html,o.children}}}),l}function l3(l){var r=l.children,s=l.main,o=l.mask,f=l.attributes,d=l.styles,v=l.transform;if(rf(v)&&s.found&&!o.found){var p=s.width,b=s.height,m={x:p/b/2,y:.5};f.style=Qu(k(k({},d),{},{"transform-origin":"".concat(m.x+v.x/16,"em ").concat(m.y+v.y/16,"em")}))}return[{tag:"svg",attributes:f,children:r}]}function i3(l){var r=l.prefix,s=l.iconName,o=l.children,f=l.attributes,d=l.symbol,v=d===!0?"".concat(r,"-").concat(F.cssPrefix,"-").concat(s):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},f),{},{id:v}),children:o}]}]}function u3(l){var r=["aria-label","aria-labelledby","title","role"];return r.some(function(s){return s in l})}function ff(l){var r=l.icons,s=r.main,o=r.mask,f=l.prefix,d=l.iconName,v=l.transform,p=l.symbol,b=l.maskId,m=l.extra,S=l.watchable,T=S===void 0?!1:S,M=o.found?o:s,U=M.width,q=M.height,L=[F.replacementClass,d?"".concat(F.cssPrefix,"-").concat(d):""].filter(function($){return m.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(m.classes).join(" "),Y={children:[],attributes:k(k({},m.attributes),{},{"data-prefix":f,"data-icon":d,class:L,role:m.attributes.role||"img",viewBox:"0 0 ".concat(U," ").concat(q)})};!u3(m.attributes)&&!m.attributes["aria-hidden"]&&(Y.attributes["aria-hidden"]="true"),T&&(Y.attributes[un]="");var B=k(k({},Y),{},{prefix:f,iconName:d,main:s,mask:o,maskId:b,transform:v,symbol:p,styles:k({},m.styles)}),J=o.found&&s.found?Ha("generateAbstractMask",B)||{children:[],attributes:{}}:Ha("generateAbstractIcon",B)||{children:[],attributes:{}},Z=J.children,ct=J.attributes;return B.children=Z,B.attributes=ct,p?i3(B):l3(B)}function B1(l){var r=l.content,s=l.width,o=l.height,f=l.transform,d=l.extra,v=l.watchable,p=v===void 0?!1:v,b=k(k({},d.attributes),{},{class:d.classes.join(" ")});p&&(b[un]="");var m=k({},d.styles);rf(f)&&(m.transform=Uy({transform:f,width:s,height:o}),m["-webkit-transform"]=m.transform);var S=Qu(m);S.length>0&&(b.style=S);var T=[];return T.push({tag:"span",attributes:b,children:[r]}),T}function r3(l){var r=l.content,s=l.extra,o=k(k({},s.attributes),{},{class:s.classes.join(" ")}),f=Qu(s.styles);f.length>0&&(o.style=f);var d=[];return d.push({tag:"span",attributes:o,children:[r]}),d}var As=Ce.styles;function ks(l){var r=l[0],s=l[1],o=l.slice(4),f=Xu(o,1),d=f[0],v=null;return Array.isArray(d)?v={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(xs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(xs.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(xs.PRIMARY),fill:"currentColor",d:d[1]}}]}:v={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:r,height:s,icon:v}}var o3={found:!1,width:512,height:512};function s3(l,r){!Kh&&!F.showMissingIcons&&l&&console.error('Icon with name "'.concat(l,'" and prefix "').concat(r,'" is missing.'))}function qs(l,r){var s=r;return r==="fa"&&F.styleDefault!==null&&(r=Ba()),new Promise(function(o,f){if(s==="fa"){var d=cm(l)||{};l=d.iconName||l,r=d.prefix||r}if(l&&r&&As[r]&&As[r][l]){var v=As[r][l];return o(ks(v))}s3(l,r),o(k(k({},o3),{},{icon:F.showMissingIcons&&l?Ha("missingIconAbstract")||{}:{}}))})}var H1=function(){},Ys=F.measurePerformance&&Nu&&Nu.mark&&Nu.measure?Nu:{mark:H1,measure:H1},ei='FA "7.0.0"',f3=function(r){return Ys.mark("".concat(ei," ").concat(r," begins")),function(){return mm(r)}},mm=function(r){Ys.mark("".concat(ei," ").concat(r," ends")),Ys.measure("".concat(ei," ").concat(r),"".concat(ei," ").concat(r," begins"),"".concat(ei," ").concat(r," ends"))},cf={begin:f3,end:mm},_u=function(){};function L1(l){var r=l.getAttribute?l.getAttribute(un):null;return typeof r=="string"}function c3(l){var r=l.getAttribute?l.getAttribute(nf):null,s=l.getAttribute?l.getAttribute(lf):null;return r&&s}function d3(l){return l&&l.classList&&l.classList.contains&&l.classList.contains(F.replacementClass)}function h3(){if(F.autoReplaceSvg===!0)return Du.replace;var l=Du[F.autoReplaceSvg];return l||Du.replace}function m3(l){return wt.createElementNS("http://www.w3.org/2000/svg",l)}function v3(l){return wt.createElement(l)}function vm(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.ceFn,o=s===void 0?l.tag==="svg"?m3:v3:s;if(typeof l=="string")return wt.createTextNode(l);var f=o(l.tag);Object.keys(l.attributes||[]).forEach(function(v){f.setAttribute(v,l.attributes[v])});var d=l.children||[];return d.forEach(function(v){f.appendChild(vm(v,{ceFn:o}))}),f}function b3(l){var r=" ".concat(l.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var Du={replace:function(r){var s=r[0];if(s.parentNode)if(r[1].forEach(function(f){s.parentNode.insertBefore(vm(f),s)}),s.getAttribute(un)===null&&F.keepOriginalSource){var o=wt.createComment(b3(s));s.parentNode.replaceChild(o,s)}else s.remove()},nest:function(r){var s=r[0],o=r[1];if(~uf(s).indexOf(F.replacementClass))return Du.replace(r);var f=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete o[0].attributes.id,o[0].attributes.class){var d=o[0].attributes.class.split(" ").reduce(function(p,b){return b===F.replacementClass||b.match(f)?p.toSvg.push(b):p.toNode.push(b),p},{toNode:[],toSvg:[]});o[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",d.toNode.join(" "))}var v=o.map(function(p){return ci(p)}).join(`
`);s.setAttribute(un,""),s.innerHTML=v}};function k1(l){l()}function bm(l,r){var s=typeof r=="function"?r:_u;if(l.length===0)s();else{var o=k1;F.mutateApproach===yy&&(o=Ua.requestAnimationFrame||k1),o(function(){var f=h3(),d=cf.begin("mutate");l.map(f),d(),s()})}}var df=!1;function pm(){df=!0}function Gs(){df=!1}var Lu=null;function q1(l){if(T1&&F.observeMutations){var r=l.treeCallback,s=r===void 0?_u:r,o=l.nodeCallback,f=o===void 0?_u:o,d=l.pseudoElementsCallback,v=d===void 0?_u:d,p=l.observeMutationsRoot,b=p===void 0?wt:p;Lu=new T1(function(m){if(!df){var S=Ba();tl(m).forEach(function(T){if(T.type==="childList"&&T.addedNodes.length>0&&!L1(T.addedNodes[0])&&(F.searchPseudoElements&&v(T.target),s(T.target)),T.type==="attributes"&&T.target.parentNode&&F.searchPseudoElements&&v([T.target],!0),T.type==="attributes"&&L1(T.target)&&~wy.indexOf(T.attributeName))if(T.attributeName==="class"&&c3(T.target)){var M=Zu(uf(T.target)),U=M.prefix,q=M.iconName;T.target.setAttribute(nf,U||S),q&&T.target.setAttribute(lf,q)}else d3(T.target)&&f(T.target)})}}),oa&&Lu.observe(b,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function p3(){Lu&&Lu.disconnect()}function g3(l){var r=l.getAttribute("style"),s=[];return r&&(s=r.split(";").reduce(function(o,f){var d=f.split(":"),v=d[0],p=d.slice(1);return v&&p.length>0&&(o[v]=p.join(":").trim()),o},{})),s}function y3(l){var r=l.getAttribute("data-prefix"),s=l.getAttribute("data-icon"),o=l.innerText!==void 0?l.innerText.trim():"",f=Zu(uf(l));return f.prefix||(f.prefix=Ba()),r&&s&&(f.prefix=r,f.iconName=s),f.iconName&&f.prefix||(f.prefix&&o.length>0&&(f.iconName=Xy(f.prefix,l.innerText)||sf(f.prefix,am(l.innerText))),!f.iconName&&F.autoFetchSvg&&l.firstChild&&l.firstChild.nodeType===Node.TEXT_NODE&&(f.iconName=l.firstChild.data)),f}function x3(l){var r=tl(l.attributes).reduce(function(s,o){return s.name!=="class"&&s.name!=="style"&&(s[o.name]=o.value),s},{});return r}function S3(){return{iconName:null,prefix:null,transform:ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Y1(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=y3(l),o=s.iconName,f=s.prefix,d=s.rest,v=x3(l),p=Hs("parseNodeAttributes",{},l),b=r.styleParser?g3(l):[];return k({iconName:o,prefix:f,transform:ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:b,attributes:v}},p)}var E3=Ce.styles;function gm(l){var r=F.autoReplaceSvg==="nest"?Y1(l,{styleParser:!1}):Y1(l);return~r.extra.classes.indexOf(Fh)?Ha("generateLayersText",l,r):Ha("generateSvgReplacementMutation",l,r)}function A3(){return[].concat(Re(Yh),Re(Gh))}function G1(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!oa)return Promise.resolve();var s=wt.documentElement.classList,o=function(T){return s.add("".concat(O1,"-").concat(T))},f=function(T){return s.remove("".concat(O1,"-").concat(T))},d=F.autoFetchSvg?A3():zh.concat(Object.keys(E3));d.includes("fa")||d.push("fa");var v=[".".concat(Fh,":not([").concat(un,"])")].concat(d.map(function(S){return".".concat(S,":not([").concat(un,"])")})).join(", ");if(v.length===0)return Promise.resolve();var p=[];try{p=tl(l.querySelectorAll(v))}catch{}if(p.length>0)o("pending"),f("complete");else return Promise.resolve();var b=cf.begin("onTree"),m=p.reduce(function(S,T){try{var M=gm(T);M&&S.push(M)}catch(U){Kh||U.name==="MissingIcon"&&console.error(U)}return S},[]);return new Promise(function(S,T){Promise.all(m).then(function(M){bm(M,function(){o("active"),o("complete"),f("pending"),typeof r=="function"&&r(),b(),S()})}).catch(function(M){b(),T(M)})})}function T3(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gm(l).then(function(s){s&&bm([s],r)})}function w3(l){return function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=(r||{}).icon?r:Ls(r||{}),f=s.mask;return f&&(f=(f||{}).icon?f:Ls(f||{})),l(o,k(k({},s),{},{mask:f}))}}var z3=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.transform,f=o===void 0?ke:o,d=s.symbol,v=d===void 0?!1:d,p=s.mask,b=p===void 0?null:p,m=s.maskId,S=m===void 0?null:m,T=s.classes,M=T===void 0?[]:T,U=s.attributes,q=U===void 0?{}:U,L=s.styles,Y=L===void 0?{}:L;if(r){var B=r.prefix,J=r.iconName,Z=r.icon;return Ku(k({type:"icon"},r),function(){return rn("beforeDOMElementCreation",{iconDefinition:r,params:s}),ff({icons:{main:ks(Z),mask:b?ks(b.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:J,transform:k(k({},ke),f),symbol:v,maskId:S,extra:{attributes:q,styles:Y,classes:M}})})}},O3={mixout:function(){return{icon:w3(z3)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=G1,s.nodeCallback=T3,s}}},provides:function(r){r.i2svg=function(s){var o=s.node,f=o===void 0?wt:o,d=s.callback,v=d===void 0?function(){}:d;return G1(f,v)},r.generateSvgReplacementMutation=function(s,o){var f=o.iconName,d=o.prefix,v=o.transform,p=o.symbol,b=o.mask,m=o.maskId,S=o.extra;return new Promise(function(T,M){Promise.all([qs(f,d),b.iconName?qs(b.iconName,b.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(U){var q=Xu(U,2),L=q[0],Y=q[1];T([s,ff({icons:{main:L,mask:Y},prefix:d,iconName:f,transform:v,symbol:p,maskId:m,extra:S,watchable:!0})])}).catch(M)})},r.generateAbstractIcon=function(s){var o=s.children,f=s.attributes,d=s.main,v=s.transform,p=s.styles,b=Qu(p);b.length>0&&(f.style=b);var m;return rf(v)&&(m=Ha("generateAbstractTransformGrouping",{main:d,transform:v,containerWidth:d.width,iconWidth:d.width})),o.push(m||d.icon),{children:o,attributes:f}}}},N3={mixout:function(){return{layer:function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=o.classes,d=f===void 0?[]:f;return Ku({type:"layer"},function(){rn("beforeDOMElementCreation",{assembler:s,params:o});var v=[];return s(function(p){Array.isArray(p)?p.map(function(b){v=v.concat(b.abstract)}):v=v.concat(p.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Re(d)).join(" ")},children:v}]})}}}},M3={mixout:function(){return{counter:function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};o.title;var f=o.classes,d=f===void 0?[]:f,v=o.attributes,p=v===void 0?{}:v,b=o.styles,m=b===void 0?{}:b;return Ku({type:"counter",content:s},function(){return rn("beforeDOMElementCreation",{content:s,params:o}),r3({content:s.toString(),extra:{attributes:p,styles:m,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Re(d))}})})}}}},C3={mixout:function(){return{text:function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=o.transform,d=f===void 0?ke:f,v=o.classes,p=v===void 0?[]:v,b=o.attributes,m=b===void 0?{}:b,S=o.styles,T=S===void 0?{}:S;return Ku({type:"text",content:s},function(){return rn("beforeDOMElementCreation",{content:s,params:o}),B1({content:s,transform:k(k({},ke),d),extra:{attributes:m,styles:T,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Re(p))}})})}}},provides:function(r){r.generateLayersText=function(s,o){var f=o.transform,d=o.extra,v=null,p=null;if(Th){var b=parseInt(getComputedStyle(s).fontSize,10),m=s.getBoundingClientRect();v=m.width/b,p=m.height/b}return Promise.resolve([s,B1({content:s.innerHTML,width:v,height:p,transform:f,extra:d,watchable:!0})])}}},ym=new RegExp('"',"ug"),X1=[1105920,1112319],Q1=k(k(k(k({},{FontAwesome:{normal:"fas",400:"fas"}}),gg),py),Og),Xs=Object.keys(Q1).reduce(function(l,r){return l[r.toLowerCase()]=Q1[r],l},{}),R3=Object.keys(Xs).reduce(function(l,r){var s=Xs[r];return l[r]=s[900]||Re(Object.entries(s))[0][1],l},{});function j3(l){var r=l.replace(ym,"");return am(Re(r)[0]||"")}function _3(l){var r=l.getPropertyValue("font-feature-settings").includes("ss01"),s=l.getPropertyValue("content"),o=s.replace(ym,""),f=o.codePointAt(0),d=f>=X1[0]&&f<=X1[1],v=o.length===2?o[0]===o[1]:!1;return d||v||r}function D3(l,r){var s=l.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(r),f=isNaN(o)?"normal":o;return(Xs[s]||{})[f]||R3[s]}function V1(l,r){var s="".concat(gy).concat(r.replace(":","-"));return new Promise(function(o,f){if(l.getAttribute(s)!==null)return o();var d=tl(l.children),v=d.filter(function(Tt){return Tt.getAttribute(_s)===r})[0],p=Ua.getComputedStyle(l,r),b=p.getPropertyValue("font-family"),m=b.match(Ay),S=p.getPropertyValue("font-weight"),T=p.getPropertyValue("content");if(v&&!m)return l.removeChild(v),o();if(m&&T!=="none"&&T!==""){var M=p.getPropertyValue("content"),U=D3(b,S),q=j3(M),L=m[0].startsWith("FontAwesome"),Y=_3(p),B=sf(U,q),J=B;if(L){var Z=Qy(q);Z.iconName&&Z.prefix&&(B=Z.iconName,U=Z.prefix)}if(B&&!Y&&(!v||v.getAttribute(nf)!==U||v.getAttribute(lf)!==J)){l.setAttribute(s,J),v&&l.removeChild(v);var ct=S3(),$=ct.extra;$.attributes[_s]=r,qs(B,U).then(function(Tt){var zt=ff(k(k({},ct),{},{icons:{main:Tt,mask:dm()},prefix:U,iconName:J,extra:$,watchable:!0})),xt=wt.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?l.insertBefore(xt,l.firstChild):l.appendChild(xt),xt.outerHTML=zt.map(function(Ot){return ci(Ot)}).join(`
`),l.removeAttribute(s),o()}).catch(f)}else o()}else o()})}function U3(l){return Promise.all([V1(l,"::before"),V1(l,"::after")])}function B3(l){return l.parentNode!==document.head&&!~xy.indexOf(l.tagName.toUpperCase())&&!l.getAttribute(_s)&&(!l.parentNode||l.parentNode.tagName!=="svg")}var H3=function(r){return!!r&&Zh.some(function(s){return r.includes(s)})},L3=function(r){if(!r)return[];for(var s=new Set,o=[r],f=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],d=function(){var U=p[v];o=o.flatMap(function(q){return q.split(U).map(function(L){return L.replace(/,\s*$/,"").trim()})})},v=0,p=f;v<p.length;v++)d();o=o.flatMap(function(M){return M.includes("(")?M:M.split(",").map(function(U){return U.trim()})});var b=ju(o),m;try{for(b.s();!(m=b.n()).done;){var S=m.value;if(H3(S)){var T=Zh.reduce(function(M,U){return M.replace(U,"")},S);T!==""&&T!=="*"&&s.add(T)}}}catch(M){b.e(M)}finally{b.f()}return s};function Z1(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(oa){var s;if(r)s=l;else if(F.searchPseudoElementsFullScan)s=l.querySelectorAll("*");else{var o=new Set,f=ju(document.styleSheets),d;try{for(f.s();!(d=f.n()).done;){var v=d.value;try{var p=ju(v.cssRules),b;try{for(p.s();!(b=p.n()).done;){var m=b.value,S=L3(m.selectorText),T=ju(S),M;try{for(T.s();!(M=T.n()).done;){var U=M.value;o.add(U)}}catch(L){T.e(L)}finally{T.f()}}}catch(L){p.e(L)}finally{p.f()}}catch(L){F.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(v.href," (").concat(L.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(L){f.e(L)}finally{f.f()}if(!o.size)return;var q=Array.from(o).join(", ");try{s=l.querySelectorAll(q)}catch{}}return new Promise(function(L,Y){var B=tl(s).filter(B3).map(U3),J=cf.begin("searchPseudoElements");pm(),Promise.all(B).then(function(){J(),Gs(),L()}).catch(function(){J(),Gs(),Y()})})}}var k3={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=Z1,s}}},provides:function(r){r.pseudoElements2svg=function(s){var o=s.node,f=o===void 0?wt:o;F.searchPseudoElements&&Z1(f)}}},K1=!1,q3={mixout:function(){return{dom:{unwatch:function(){pm(),K1=!0}}}},hooks:function(){return{bootstrap:function(){q1(Hs("mutationObserverCallbacks",{}))},noAuto:function(){p3()},watch:function(s){var o=s.observeMutationsRoot;K1?Gs():q1(Hs("mutationObserverCallbacks",{observeMutationsRoot:o}))}}}},J1=function(r){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(o,f){var d=f.toLowerCase().split("-"),v=d[0],p=d.slice(1).join("-");if(v&&p==="h")return o.flipX=!0,o;if(v&&p==="v")return o.flipY=!0,o;if(p=parseFloat(p),isNaN(p))return o;switch(v){case"grow":o.size=o.size+p;break;case"shrink":o.size=o.size-p;break;case"left":o.x=o.x-p;break;case"right":o.x=o.x+p;break;case"up":o.y=o.y-p;break;case"down":o.y=o.y+p;break;case"rotate":o.rotate=o.rotate+p;break}return o},s)},Y3={mixout:function(){return{parse:{transform:function(s){return J1(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,o){var f=o.getAttribute("data-fa-transform");return f&&(s.transform=J1(f)),s}}},provides:function(r){r.generateAbstractTransformGrouping=function(s){var o=s.main,f=s.transform,d=s.containerWidth,v=s.iconWidth,p={transform:"translate(".concat(d/2," 256)")},b="translate(".concat(f.x*32,", ").concat(f.y*32,") "),m="scale(".concat(f.size/16*(f.flipX?-1:1),", ").concat(f.size/16*(f.flipY?-1:1),") "),S="rotate(".concat(f.rotate," 0 0)"),T={transform:"".concat(b," ").concat(m," ").concat(S)},M={transform:"translate(".concat(v/2*-1," -256)")},U={outer:p,inner:T,path:M};return{tag:"g",attributes:k({},U.outer),children:[{tag:"g",attributes:k({},U.inner),children:[{tag:o.icon.tag,children:o.icon.children,attributes:k(k({},o.icon.attributes),U.path)}]}]}}}},Ts={x:0,y:0,width:"100%",height:"100%"};function $1(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l.attributes&&(l.attributes.fill||r)&&(l.attributes.fill="black"),l}function G3(l){return l.tag==="g"?l.children:[l]}var X3={hooks:function(){return{parseNodeAttributes:function(s,o){var f=o.getAttribute("data-fa-mask"),d=f?Zu(f.split(" ").map(function(v){return v.trim()})):dm();return d.prefix||(d.prefix=Ba()),s.mask=d,s.maskId=o.getAttribute("data-fa-mask-id"),s}}},provides:function(r){r.generateAbstractMask=function(s){var o=s.children,f=s.attributes,d=s.main,v=s.mask,p=s.maskId,b=s.transform,m=d.width,S=d.icon,T=v.width,M=v.icon,U=Dy({transform:b,containerWidth:T,iconWidth:m}),q={tag:"rect",attributes:k(k({},Ts),{},{fill:"white"})},L=S.children?{children:S.children.map($1)}:{},Y={tag:"g",attributes:k({},U.inner),children:[$1(k({tag:S.tag,attributes:k(k({},S.attributes),U.path)},L))]},B={tag:"g",attributes:k({},U.outer),children:[Y]},J="mask-".concat(p||M1()),Z="clip-".concat(p||M1()),ct={tag:"mask",attributes:k(k({},Ts),{},{id:J,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[q,B]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:Z},children:G3(M)},ct]};return o.push($,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(Z,")"),mask:"url(#".concat(J,")")},Ts)}),{children:o,attributes:f}}}},Q3={provides:function(r){var s=!1;Ua.matchMedia&&(s=Ua.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var o=[],f={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};o.push({tag:"path",attributes:k(k({},f),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var v=k(k({},d),{},{attributeName:"opacity"}),p={tag:"circle",attributes:k(k({},f),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||p.children.push({tag:"animate",attributes:k(k({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},v),{},{values:"1;0;1;1;0;1;"})}),o.push(p),o.push({tag:"path",attributes:k(k({},f),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:k(k({},v),{},{values:"1;0;0;0;0;1;"})}]}),s||o.push({tag:"path",attributes:k(k({},f),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},v),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:o}}}},V3={hooks:function(){return{parseNodeAttributes:function(s,o){var f=o.getAttribute("data-fa-symbol"),d=f===null?!1:f===""?!0:f;return s.symbol=d,s}}}},Z3=[Hy,O3,N3,M3,C3,k3,q3,Y3,X3,Q3,V3];Iy(Z3,{mixoutsTo:be});be.noAuto;be.config;be.library;be.dom;var Qs=be.parse;be.findIconDefinition;be.toHtml;var K3=be.icon;be.layer;be.text;be.counter;var ws={exports:{}},zs,F1;function J3(){if(F1)return zs;F1=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return zs=l,zs}var Os,W1;function $3(){if(W1)return Os;W1=1;var l=J3();function r(){}function s(){}return s.resetWarningCache=r,Os=function(){function o(v,p,b,m,S,T){if(T!==l){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}o.isRequired=o;function f(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:s,resetWarningCache:r};return d.PropTypes=d,d},Os}var P1;function F3(){return P1||(P1=1,ws.exports=$3()()),ws.exports}var W3=F3();const it=Js(W3);var P3={};function Vs(l,r){(r==null||r>l.length)&&(r=l.length);for(var s=0,o=Array(r);s<r;s++)o[s]=l[s];return o}function I3(l){if(Array.isArray(l))return l}function t5(l){if(Array.isArray(l))return Vs(l)}function Da(l,r,s){return(r=o5(r))in l?Object.defineProperty(l,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[r]=s,l}function e5(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function a5(l,r){var s=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(s!=null){var o,f,d,v,p=[],b=!0,m=!1;try{if(d=(s=s.call(l)).next,r!==0)for(;!(b=(o=d.call(s)).done)&&(p.push(o.value),p.length!==r);b=!0);}catch(S){m=!0,f=S}finally{try{if(!b&&s.return!=null&&(v=s.return(),Object(v)!==v))return}finally{if(m)throw f}}return p}}function n5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I1(l,r){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);r&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,o)}return s}function Le(l){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?I1(Object(s),!0).forEach(function(o){Da(l,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):I1(Object(s)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(s,o))})}return l}function i5(l,r){if(l==null)return{};var s,o,f=u5(l,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(o=0;o<d.length;o++)s=d[o],r.indexOf(s)===-1&&{}.propertyIsEnumerable.call(l,s)&&(f[s]=l[s])}return f}function u5(l,r){if(l==null)return{};var s={};for(var o in l)if({}.hasOwnProperty.call(l,o)){if(r.indexOf(o)!==-1)continue;s[o]=l[o]}return s}function th(l,r){return I3(l)||a5(l,r)||xm(l,r)||n5()}function Zs(l){return t5(l)||e5(l)||xm(l)||l5()}function r5(l,r){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var o=s.call(l,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function o5(l){var r=r5(l,"string");return typeof r=="symbol"?r:r+""}function ku(l){"@babel/helpers - typeof";return ku=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ku(l)}function xm(l,r){if(l){if(typeof l=="string")return Vs(l,r);var s={}.toString.call(l).slice(8,-1);return s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set"?Array.from(l):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Vs(l,r):void 0}}var s5="7.0.0-alpha1",Ks;try{var f5=require("@fortawesome/fontawesome-svg-core/package.json");Ks=f5.version}catch{Ks=P3.FA_VERSION||"7.0.0-alpha8"}function c5(l){var r=l.beat,s=l.fade,o=l.beatFade,f=l.bounce,d=l.shake,v=l.flash,p=l.spin,b=l.spinPulse,m=l.spinReverse,S=l.pulse,T=l.fixedWidth,M=l.inverse,U=l.border,q=l.listItem,L=l.flip,Y=l.size,B=l.rotation,J=l.pull,Z=l.swapOpacity,ct=l.rotateBy,$=l.widthAuto,Tt=d5(Ks,s5),zt=Da(Da(Da(Da(Da(Da({"fa-beat":r,"fa-fade":s,"fa-beat-fade":o,"fa-bounce":f,"fa-shake":d,"fa-flash":v,"fa-spin":p,"fa-spin-reverse":m,"fa-spin-pulse":b,"fa-pulse":S,"fa-fw":T,"fa-inverse":M,"fa-border":U,"fa-li":q,"fa-flip":L===!0,"fa-flip-horizontal":L==="horizontal"||L==="both","fa-flip-vertical":L==="vertical"||L==="both"},"fa-".concat(Y),typeof Y<"u"&&Y!==null),"fa-rotate-".concat(B),typeof B<"u"&&B!==null&&B!==0),"fa-pull-".concat(J),typeof J<"u"&&J!==null),"fa-swap-opacity",Z),"fa-rotate-by",Tt&&ct),"fa-width-auto",Tt&&$);return Object.keys(zt).map(function(xt){return zt[xt]?xt:null}).filter(function(xt){return xt})}function d5(l,r){for(var s=l.split("-"),o=th(s,2),f=o[0],d=o[1],v=r.split("-"),p=th(v,2),b=p[0],m=p[1],S=f.split("."),T=b.split("."),M=0;M<Math.max(S.length,T.length);M++){var U=S[M]||"0",q=T[M]||"0",L=parseInt(U,10),Y=parseInt(q,10);if(L!==Y)return L>Y}for(var B=0;B<Math.max(S.length,T.length);B++){var J=S[B]||"0",Z=T[B]||"0";if(J!==Z&&J.length!==Z.length)return J.length<Z.length}return!(d&&!m)}function h5(l){return l=l-0,l===l}function Sm(l){return h5(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(r,s){return s?s.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))}var m5=["style"];function v5(l){return l.charAt(0).toUpperCase()+l.slice(1)}function b5(l){return l.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,s){var o=s.indexOf(":"),f=Sm(s.slice(0,o)),d=s.slice(o+1).trim();return f.startsWith("webkit")?r[v5(f)]=d:r[f]=d,r},{})}function Em(l,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string")return r;var o=(r.children||[]).map(function(b){return Em(l,b)}),f=Object.keys(r.attributes||{}).reduce(function(b,m){var S=r.attributes[m];switch(m){case"class":b.attrs.className=S,delete r.attributes.class;break;case"style":b.attrs.style=b5(S);break;default:m.indexOf("aria-")===0||m.indexOf("data-")===0?b.attrs[m.toLowerCase()]=S:b.attrs[Sm(m)]=S}return b},{attrs:{}}),d=s.style,v=d===void 0?{}:d,p=i5(s,m5);return f.attrs.style=Le(Le({},f.attrs.style),v),l.apply(void 0,[r.tag,Le(Le({},f.attrs),p)].concat(Zs(o)))}var Am=!1;try{Am=!0}catch{}function p5(){if(!Am&&console&&typeof console.error=="function"){var l;(l=console).error.apply(l,arguments)}}function eh(l){if(l&&ku(l)==="object"&&l.prefix&&l.iconName&&l.icon)return l;if(Qs.icon)return Qs.icon(l);if(l===null)return null;if(l&&ku(l)==="object"&&l.prefix&&l.iconName)return l;if(Array.isArray(l)&&l.length===2)return{prefix:l[0],iconName:l[1]};if(typeof l=="string")return{prefix:"fas",iconName:l}}function Ns(l,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?Da({},l,r):{}}var ah={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Fn=nh.forwardRef(function(l,r){var s=Le(Le({},ah),l),o=s.icon,f=s.mask,d=s.symbol,v=s.className,p=s.title,b=s.titleId,m=s.maskId,S=eh(o),T=Ns("classes",[].concat(Zs(c5(s)),Zs((v||"").split(" ")))),M=Ns("transform",typeof s.transform=="string"?Qs.transform(s.transform):s.transform),U=Ns("mask",eh(f)),q=K3(S,Le(Le(Le(Le({},T),M),U),{},{symbol:d,title:p,titleId:b,maskId:m}));if(!q)return p5("Could not find icon",S),null;var L=q.abstract,Y={ref:r};return Object.keys(s).forEach(function(B){ah.hasOwnProperty(B)||(Y[B]=s[B])}),g5(L[0],Y)});Fn.displayName="FontAwesomeIcon";Fn.propTypes={beat:it.bool,border:it.bool,beatFade:it.bool,bounce:it.bool,className:it.string,fade:it.bool,flash:it.bool,mask:it.oneOfType([it.object,it.array,it.string]),maskId:it.string,fixedWidth:it.bool,inverse:it.bool,flip:it.oneOf([!0,!1,"horizontal","vertical","both"]),icon:it.oneOfType([it.object,it.array,it.string]),listItem:it.bool,pull:it.oneOf(["right","left"]),pulse:it.bool,rotation:it.oneOf([0,90,180,270]),rotateBy:it.bool,shake:it.bool,size:it.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:it.bool,spinPulse:it.bool,spinReverse:it.bool,symbol:it.oneOfType([it.bool,it.string]),title:it.string,titleId:it.string,transform:it.oneOfType([it.string,it.object]),swapOpacity:it.bool,widthAuto:it.bool};var g5=Em.bind(null,nh.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var y5={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},x5={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},S5={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var E5={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]};const A5=()=>y.jsx("div",{className:"social-container",children:y.jsxs("ul",{className:"social-icons",children:[y.jsx("li",{className:"social-item","data-tooltip":"Email & Coding",children:y.jsxs("a",{href:"https://rudrasenareddy87.github.io/Coding-Profiles/",className:"social-link email",children:[y.jsx(Fn,{icon:E5}),y.jsx("span",{className:"hover-area"})]})}),y.jsx("li",{className:"social-item","data-tooltip":"LinkedIn",children:y.jsxs("a",{href:"https://www.linkedin.com/in/bodireddyrudrasenareddy",className:"social-link linkedin",target:"_blank",rel:"noopener noreferrer",children:[y.jsx(Fn,{icon:x5}),y.jsx("span",{className:"hover-area"})]})}),y.jsx("li",{className:"social-item","data-tooltip":"Instagram",children:y.jsxs("a",{href:"https://www.instagram.com/rudrasenareddy_87",className:"social-link instagram",target:"_blank",rel:"noopener noreferrer",children:[y.jsx(Fn,{icon:S5}),y.jsx("span",{className:"hover-area"})]})}),y.jsx("li",{className:"social-item","data-tooltip":"GitHub",children:y.jsxs("a",{href:"https://github.com/RudrasenaReddy87",className:"social-link github",target:"_blank",rel:"noopener noreferrer",children:[y.jsx(Fn,{icon:y5}),y.jsx("span",{className:"hover-area"})]})})]})});function T5(){return y.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white px-6 py-4 relative",children:[y.jsx("img",{src:zp,alt:"Logo",className:"fixed top-2 left-3 w-[100px] h-[100px] object-contain cursor-pointer z-50",onClick:()=>window.location.href="/"}),y.jsxs("div",{className:"text-center pt-24",children:[y.jsx("h1",{className:"text-5xl font-bold mb-2",children:"Welcome to the Button Gallery"}),y.jsx("p",{style:{fontFamily:'"Courier New", monospace'},className:"text-lg font-bold text-gray-500 mb-8",children:"< Explore, Tap, and Copy Buttons />"})]}),y.jsx(Op,{}),y.jsx(Mp,{}),y.jsx(Rp,{}),y.jsx(jp,{}),y.jsx(_p,{}),y.jsx(Dp,{}),y.jsx(Up,{}),y.jsx(Bp,{}),y.jsx(Hp,{}),y.jsx(Lp,{}),y.jsx("div",{style:{position:"relative",bottom:"-530px",left:"780px",zIndex:999,width:"fit-content"},children:y.jsx(A5,{})}),y.jsx("div",{className:"button11-wrapper",style:{position:"absolute",top:"-24px",right:"-90px",zIndex:999},children:y.jsx(kp,{})}),y.jsx("div",{style:{position:"absolute",bottom:"100px",right:"30px",zIndex:999},children:y.jsx(qp,{})}),y.jsx(Yp,{}),y.jsx(Np,{}),y.jsx(Cp,{})]})}function w5(){const[l,r]=C.useState(!0),[s,o]=C.useState(!1);return C.useEffect(()=>{const f=setTimeout(()=>o(!0),4e3),d=setTimeout(()=>r(!1),8e3);return document.body.classList.add("overflow-hidden"),()=>{clearTimeout(f),clearTimeout(d),document.body.classList.remove("overflow-hidden")}},[]),C.useEffect(()=>{l||document.body.classList.remove("overflow-hidden")},[l]),l?y.jsx(wp,{start:s}):y.jsx(T5,{})}ab.createRoot(document.getElementById("root")).render(y.jsx(vp,{children:y.jsx(w5,{})}));
