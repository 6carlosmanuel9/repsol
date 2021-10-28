(function(){var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;ea=ia.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=da;
function la(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.J=b.prototype}
var ma="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},na="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function oa(a,b){if(b){for(var c=na,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ma(c,d,{configurable:!0,writable:!0,value:f})}}
function pa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
oa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
oa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function qa(){qa=function(){};
na.Symbol||(na.Symbol=ra)}
function sa(a,b){this.f=a;ma(this,"description",{configurable:!0,writable:!0,value:b})}
sa.prototype.toString=function(){return this.f};
var ra=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new sa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ta(){qa();var a=na.Symbol.iterator;a||(a=na.Symbol.iterator=na.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ma(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ua(aa(this))}});
ta=function(){}}
function ua(a){ta();a={next:a};a[na.Symbol.iterator]=function(){return this};
return a}
function va(a,b){ta();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
oa("Array.prototype.keys",function(a){return a?a:function(){return va(this,function(b){return b})}});
oa("Array.prototype.values",function(a){return a?a:function(){return va(this,function(b,c){return c})}});
function wa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)wa(d,e)&&(a[e]=d[e])}return a};
oa("Object.assign",function(a){return a||xa});
oa("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)wa(b,d)&&c.push(b[d]);return c}});
oa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
oa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
oa("WeakMap",function(a){function b(k){this.f=(g+=Math.random()+1).toString();if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){if(!wa(k,f)){var l=new c;ma(k,f,{value:l})}}
function e(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;d(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(k,l){d(k);if(!wa(k,f))throw Error("WeakMap key fail: "+k);k[f][this.f]=l;return this};
b.prototype.get=function(k){return wa(k,f)?k[f][this.f]:void 0};
b.prototype.has=function(k){return wa(k,f)&&wa(k[f],this.f)};
b.prototype["delete"]=function(k){return wa(k,f)&&wa(k[f],this.f)?delete k[f][this.f]:!1};
return b});
oa("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.f=[];var k=this.j();try{g(k.resolve,k.reject)}catch(l){k.reject(l)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.i(function(){k.l()})}this.f.push(g)};
var e=na.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var l=g[k];g[k]=null;try{l()}catch(m){this.j(m)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(m){return function(q){l||(l=!0,m.call(k,q))}}
var k=this,l=!1;return{resolve:g(this.D),reject:g(this.l)}};
b.prototype.D=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.H(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.A(g):this.B(g)}};
b.prototype.A=function(g){var k=void 0;try{k=g.then}catch(l){this.l(l);return}"function"==typeof k?this.L(k,g):this.B(g)};
b.prototype.l=function(g){this.w(2,g)};
b.prototype.B=function(g){this.w(1,g)};
b.prototype.w=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.i=k;this.F()};
b.prototype.F=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.H=function(g){var k=this.j();g.Lb(k.resolve,k.reject)};
b.prototype.L=function(g,k){var l=this.j();try{g.call(k,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,k){function l(v,x){return"function"==typeof v?function(N){try{m(v(N))}catch(fa){q(fa)}}:x}
var m,q,u=new b(function(v,x){m=v;q=x});
this.Lb(l(g,m),l(k,q));return u};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.Lb=function(g,k){function l(){switch(m.g){case 1:g(m.i);break;case 2:k(m.i);break;default:throw Error("Unexpected state: "+m.g);}}
var m=this;null==this.f?f.g(l):this.f.push(l)};
b.resolve=d;b.reject=function(g){return new b(function(k,l){l(g)})};
b.race=function(g){return new b(function(k,l){for(var m=ba(g),q=m.next();!q.done;q=m.next())d(q.value).Lb(k,l)})};
b.all=function(g){var k=ba(g),l=k.next();return l.done?d([]):new b(function(m,q){function u(N){return function(fa){v[N]=fa;x--;0==x&&m(v)}}
var v=[],x=0;do v.push(void 0),x++,d(l.value).Lb(u(v.length-1),q),l=k.next();while(!l.done)})};
return b});
oa("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,l){var m=k.f;return ua(function(){if(m){for(;m.head!=k.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(k,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var q=k.g[m];if(q&&wa(k.g,m))for(var u=0;u<q.length;u++){var v=q[u];if(l!==l&&v.key!==v.key||l===v.key)return{id:m,list:q,index:u,ca:v}}return{id:m,list:q,index:-1,ca:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),l=new a(ba([[k,"s"]]));if("s"!=l.get(k)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),q=m.next();if(q.done||q.value[0]!=k||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
ta();var f=new WeakMap;e.prototype.set=function(k,l){k=0===k?0:k;var m=d(this,k);m.list||(m.list=this.g[m.id]=[]);m.ca?m.ca.value=l:(m.ca={next:this.f,previous:this.f.previous,head:this.f,key:k,value:l},m.list.push(m.ca),this.f.previous.next=m.ca,this.f.previous=m.ca,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.ca&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.ca.previous.next=k.ca.next,k.ca.next.previous=k.ca.previous,k.ca.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).ca};
e.prototype.get=function(k){return(k=d(this,k).ca)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,l){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,k.call(l,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
oa("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ta();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var ya=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
oa("Reflect.construct",function(){return ya});
var za=za||{},n=this||self;function p(a){return void 0!==a}
function r(a){return"string"==typeof a}
function Aa(a){return"boolean"==typeof a}
function Ba(a){return"number"==typeof a}
function t(a,b,c){a=a.split(".");c=c||n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function Ca(a){if(a&&a!=n)return Da(a.document);null===Ea&&(Ea=Da(n.document));return Ea}
var Fa=/^[\w+/_-]+[=]{0,2}$/,Ea=null;function Da(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Fa.test(a)?a:""}
function w(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ga(){}
function Ha(a){a.da=void 0;a.getInstance=function(){return a.da?a.da:a.da=new a}}
function Ia(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ja(a){return"array"==Ia(a)}
function Ka(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){return"function"==Ia(a)}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Sa:y=Ta;return y.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Va(a,b){for(var c in b)a[c]=b[c]}
var z=Date.now||function(){return+new Date};
function A(a,b){function c(){}
c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ej=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}}
;function Wa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Wa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(Wa,Error);Wa.prototype.name="CustomError";var Xa;function Ya(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Wa.call(this,d+c[e])}
A(Ya,Wa);Ya.prototype.name="AssertionError";var $a=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ab=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(r(a))return r(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},bb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},cb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
B(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},eb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},fb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function gb(a,b,c){b=hb(a,b,c);return 0>b?null:r(a)?a.charAt(b):a[b]}
function hb(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function ib(a,b){a:{var c=r(a)?a.split(""):a;for(var d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){c=d;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function jb(a,b){return 0<=$a(a,b)}
function kb(a,b){jb(a,b)||a.push(b)}
function lb(a,b){var c=$a(a,b),d;(d=0<=c)&&mb(a,c);return d}
function mb(a,b){Array.prototype.splice.call(a,b,1)}
function nb(a,b){var c=hb(a,b,void 0);0<=c&&mb(a,c)}
function ob(a){return Array.prototype.concat.apply([],arguments)}
function pb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function qb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function rb(a,b,c,d){return Array.prototype.splice.apply(a,sb(arguments,1))}
function sb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function tb(a,b){if(!Ka(a)||!Ka(b)||a.length!=b.length)return!1;for(var c=a.length,d=ub,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function vb(a,b){return a>b?1:a<b?-1:0}
function ub(a,b){return a===b}
function wb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Ja(d))for(var e=0;e<d.length;e+=8192)for(var f=wb.apply(null,sb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
function xb(a){for(var b=Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}}
;function yb(){return function(){return""}}
function zb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ab(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Bb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function Db(a){var b=0,c;for(c in a)b++;return b}
function Eb(a,b){return Fb(a,b)}
function Gb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Hb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Ib(a,b){return null!==a&&b in a}
function Fb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Jb(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}
function Kb(a){for(var b in a)return!1;return!0}
function Lb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function Nb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ob(a){var b=Ia(a);if("object"==b||"array"==b){if(La(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Ob(a[c]);return b}return a}
var Pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Pb.length;f++)c=Pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Rb(a){var b=arguments.length;if(1==b&&Ja(arguments[0]))return Rb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var Sb={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function Tb(a,b){this.f=a===Ub&&b||"";this.g=Vb}
Tb.prototype.Ja=!0;Tb.prototype.oa=function(){return this.f};
Tb.prototype.toString=function(){return"Const{"+this.f+"}"};
function Wb(a){return a instanceof Tb&&a.constructor===Tb&&a.g===Vb?a.f:"type_error:Const"}
var Vb={},Ub={},Xb=new Tb(Ub,"");var Yb=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Zb=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");function $b(){this.g="";this.i=ac}
$b.prototype.Ja=!0;$b.prototype.oa=function(){return this.g.toString()};
$b.prototype.Ac=!0;$b.prototype.f=function(){return 1};
function cc(a){if(a instanceof $b&&a.constructor===$b&&a.i===ac)return a.g;Ia(a);return"type_error:TrustedResourceUrl"}
var ac={};function dc(a){var b=new $b;b.g=a;return b}
;function ec(a){return/^[\s\xa0]*$/.test(a)}
var fc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function gc(a,b){if(b)a=a.replace(hc,"&amp;").replace(ic,"&lt;").replace(jc,"&gt;").replace(kc,"&quot;").replace(lc,"&#39;").replace(mc,"&#0;");else{if(!nc.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(hc,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ic,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(jc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(kc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(lc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(mc,"&#0;"))}return a}
var hc=/&/g,ic=/</g,jc=/>/g,kc=/"/g,lc=/'/g,mc=/\x00/g,nc=/[\x00&<>"']/;
function oc(a,b){for(var c=0,d=fc(String(a)).split("."),e=fc(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=pc(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||pc(0==k[2].length,0==l[2].length)||pc(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function pc(a,b){return a<b?-1:a>b?1:0}
;function qc(){this.g="";this.i=tc}
qc.prototype.Ja=!0;qc.prototype.oa=function(){return this.g.toString()};
qc.prototype.Ac=!0;qc.prototype.f=function(){return 1};
function uc(a){if(a instanceof qc&&a.constructor===qc&&a.i===tc)return a.g;Ia(a);return"type_error:SafeUrl"}
var vc=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,wc=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,xc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yc(a){if(a instanceof qc)return a;a="object"==typeof a&&a.Ja?a.oa():String(a);xc.test(a)||(a="about:invalid#zClosurez");return zc(a)}
function Ac(a,b){if(a instanceof qc)return a;a="object"==typeof a&&a.Ja?a.oa():String(a);if(b&&/^data:/i.test(a)){var c=a.replace(/(%0A|%0D)/g,"");var d=c.match(wc);d=d&&vc.test(d[1]);c=zc(d?c:"about:invalid#zClosurez");if(c.oa()==a)return c}xc.test(a)||(a="about:invalid#zClosurez");return zc(a)}
var tc={};function zc(a){var b=new qc;b.g=a;return b}
zc("about:blank");function Bc(){this.f="";this.g=Cc}
Bc.prototype.Ja=!0;var Cc={};Bc.prototype.oa=function(){return this.f};
function Dc(a){var b=new Bc;b.f=a;return b}
var Ec=Dc("");function Fc(a){if(a instanceof qc)return'url("'+uc(a).toString().replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof Tb)a=Wb(a);else{a=String(a);var b=a.replace(Gc,"$1").replace(Gc,"$1").replace(Hc,"url");if(Ic.test(b)){if(b=!Jc.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Kc(a)}a=b?Lc(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Ya("Value does not allow [{;}], got: %s.",[a]);return a}
function Kc(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Ic=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Hc=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Gc=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),Jc=/\/\*/;function Lc(a){return a.replace(Hc,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,k,l){f=k;return l});
b=yc(d).oa();return c+f+b+f+e})}
;var Mc;a:{var Nc=n.navigator;if(Nc){var Oc=Nc.userAgent;if(Oc){Mc=Oc;break a}}Mc=""}function C(a){return-1!=Mc.indexOf(a)}
function Pc(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function Qc(){return C("Trident")||C("MSIE")}
function Rc(){return C("Firefox")||C("FxiOS")}
function Sc(){return C("Safari")&&!(Tc()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Rc()||C("Silk")||C("Android"))}
function Tc(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
function Uc(){return C("Android")&&!(Tc()||Rc()||C("Opera")||C("Silk"))}
function Vc(){function a(e){e=gb(e,d);return c[e]||""}
var b=Mc;if(Qc())return Wc(b);b=Pc(b);var c={};B(b,function(e){c[e[0]]=e[1]});
var d=Ua(Ib,c);return C("Opera")?a(["Version","Opera"]):C("Edge")?a(["Edge"]):C("Edg/")?a(["Edg"]):Tc()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""}
function Wc(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function Xc(){this.g="";this.j=Yc;this.i=null}
Xc.prototype.Ac=!0;Xc.prototype.f=function(){return this.i};
Xc.prototype.Ja=!0;Xc.prototype.oa=function(){return this.g.toString()};
function Zc(a){if(a instanceof Xc&&a.constructor===Xc&&a.j===Yc)return a.g;Ia(a);return"type_error:SafeHtml"}
function $c(a){if(a instanceof Xc)return a;var b="object"==typeof a,c=null;b&&a.Ac&&(c=a.f());return ad(gc(b&&a.Ja?a.oa():String(a)),c)}
var bd=/^[a-zA-Z0-9-]+$/,cd={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},dd={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
function ed(a,b,c){var d=String(a);if(!bd.test(d))throw Error("Invalid tag name <"+d+">.");if(d.toUpperCase()in dd)throw Error("Tag name <"+d+"> is not allowed for SafeHtml.");a=String(a);d=null;var e="<"+a,f="";if(b)for(u in b){if(!bd.test(u))throw Error('Invalid attribute name "'+u+'".');var g=b[u];if(null!=g){var k=a;var l=u;var m=g;if(m instanceof Tb)m=Wb(m);else if("style"==l.toLowerCase()){g=void 0;k=m;if(!Ma(k))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+
typeof k+" given: "+k);if(!(k instanceof Bc)){m="";for(g in k){if(!/^[-_a-zA-Z0-9]+$/.test(g))throw Error("Name allows only [-_a-zA-Z0-9], got: "+g);var q=k[g];null!=q&&(q=Ja(q)?cb(q,Fc).join(" "):Fc(q),m+=g+":"+q+";")}k=m?Dc(m):Ec}k instanceof Bc&&k.constructor===Bc&&k.g===Cc?g=k.f:(Ia(k),g="type_error:SafeStyle");m=g}else{if(/^on/i.test(l))throw Error('Attribute "'+l+'" requires goog.string.Const value, "'+m+'" given.');if(l.toLowerCase()in cd)if(m instanceof $b)m=cc(m).toString();else if(m instanceof
qc)m=uc(m).toString();else if(r(m))m=yc(m).oa();else throw Error('Attribute "'+l+'" on tag "'+k+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+m+'" given.');}m.Ja&&(m=m.oa());l=l+'="'+gc(String(m))+'"';f+=" "+l}}var u=e+f;null!=c?Ja(c)||(c=[c]):c=[];!0===Sb[a.toLowerCase()]?u+=">":(c=fd(c),u+=">"+Zc(c).toString()+"</"+a+">",d=c.f());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?d=0:d=null);return gd(u,d)}
function hd(a){function b(f){Ja(f)?B(f,b):(f=$c(f),e.push(Zc(f).toString()),f=f.f(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=$c(id),d=c.f(),e=[];B(a,b);return ad(e.join(Zc(c).toString()),d)}
function fd(a){return hd(Array.prototype.slice.call(arguments))}
var Yc={};function ad(a,b){return gd(a,b)}
function gd(a,b){var c=new Xc;c.g=a;c.i=b;return c}
gd("<!DOCTYPE html>",0);var id=gd("",0),nd=gd("<br>",0);var od=zb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Zc(id);return!b.parentElement});
function pd(a,b){if(od())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Zc(b)}
function qd(a,b){pd(a,b)}
function rd(a,b){var c=b instanceof qc?b:Ac(b);a.href=uc(c)}
function sd(a,b){var c=b instanceof qc?b:Ac(b,/^data:image\//i.test(b));a.src=uc(c)}
function td(a){var b=dc(Wb(Xb));a.src=cc(b).toString()}
function ud(a,b){a.src=cc(b);var c=Ca();c&&a.setAttribute("nonce",c)}
function vd(a,b){var c=b instanceof qc?b:Ac(b);a.href=uc(c)}
;function wd(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function xd(a){return encodeURIComponent(String(a))}
function yd(a){return decodeURIComponent(a.replace(/\+/g," "))}
function zd(a){return a=gc(a,void 0)}
function Ad(a){return-1!=a.indexOf("&")?"document"in n?Bd(a):Cd(a):a}
function Bd(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=n.document.createElement("div");return a.replace(Dd,function(d,e){var f=b[d];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(f=gd(d+" ",null),pd(c,f),f=c.firstChild.nodeValue.slice(0,-1));return b[d]=f})}
function Cd(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return b}})}
var Dd=/&([^;\s<&]+);?/g,Ed={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},Fd={"'":"\\'"};function Gd(a){return null==a?"":String(a)}
function Hd(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Id(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Jd(a){var b=r(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(c,d,e){return d+e.toUpperCase()})}
;function Kd(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Ld(){return Kd()||C("iPad")||C("iPod")}
;function Md(a){Md[" "](a);return a}
Md[" "]=Ga;function Nd(a,b){try{return Md(a[b]),!0}catch(c){}return!1}
function Pd(a,b){var c=Qd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Rd=C("Opera"),E=Qc(),Sd=C("Edge"),Td=Sd||E,Ud=C("Gecko")&&!(-1!=Mc.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Vd=-1!=Mc.toLowerCase().indexOf("webkit")&&!C("Edge"),Wd=C("Macintosh"),Xd=C("Windows"),Yd=C("Android"),Zd=Kd(),$d=C("iPad"),ae=C("iPod"),be=Ld();function ce(){var a=n.document;return a?a.documentMode:void 0}
var de;a:{var ee="",fe=function(){var a=Mc;if(Ud)return/rv:([^\);]+)(\)|;)/.exec(a);if(Sd)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Vd)return/WebKit\/(\S+)/.exec(a);if(Rd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fe&&(ee=fe?fe[1]:"");if(E){var ge=ce();if(null!=ge&&ge>parseFloat(ee)){de=String(ge);break a}}de=ee}var he=de,Qd={};function ie(a){return Pd(a,function(){return 0<=oc(he,a)})}
function je(a){return Number(ke)>=a}
var le;le=n.document&&E?ce():void 0;var ke=le;var me=Rc(),ne=Kd()||C("iPod"),oe=C("iPad"),pe=Uc(),qe=Tc(),re=Sc()&&!Ld();var se={},te=null;function ue(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var ve=ue("loadCastFramework")||ue("loadCastApplicationFramework");function we(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var xe=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function ye(a){a.length?Ee(a.shift(),function(){ye(a)}):Fe()}
function Ge(a){return"chrome-extension://"+a+"/cast_sender.js"}
function Ee(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Fe(){var a=we();a&&a(!1,"No cast extension found")}
function He(){if(ve){var a=2,b=we(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Ee("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Fe,c)}}
function Ie(){He();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);ye(["//www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//www.gstatic.com/eureka/clank/cast_sender.js"])}
;var Je=document,Ke=window;var Le={};function Me(a){this.f=a||{cookie:""}}
h=Me.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=fc(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
h.Aa=function(){return Ne(this).keys};
h.qa=function(){return Ne(this).values};
h.isEmpty=function(){return!this.f.cookie};
h.clear=function(){for(var a=Ne(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ne(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=fc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Oe=new Me("undefined"==typeof document?null:document);function Pe(a){var b=w("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(r(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Qe[b]?b=Qe[b]:(b=String(b),Qe[b]||(c=/function\s+([^\(]+)/m.exec(b),Qe[b]=c?c[1]:"[Anonymous]"),b=Qe[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Qe={};var Re=!E||je(9),Se=!Ud&&!E||E&&je(9)||Ud&&ie("1.9.1"),Te=E&&!ie("9"),Ue=E||Rd||Vd;function Ve(a,b,c){return a+c*(b-a)}
;function We(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
h=We.prototype;h.clone=function(){return new We(this.x,this.y)};
h.equals=function(a){return a instanceof We&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Xe(a,b){return new We(a.x-b.x,a.y-b.y)}
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ye(a,b){this.width=a;this.height=b}
h=Ye.prototype;h.clone=function(){return new Ye(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ze(a){return a?new $e(af(a)):Xa||(Xa=new $e)}
function F(a){return r(a)?document.getElementById(a):a}
function bf(a){var b=document;return r(a)?b.getElementById(a):a}
function cf(a,b,c){return df(document,a,b,c)}
function ef(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):df(document,"*",a,b)}
function G(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=ff("*",a,b);return d||null}
function df(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&jb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function ff(a,b,c){var d=document,e=c||d,f=a&&"*"!=a?String(a).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||b)?e.querySelector(f+(b?"."+b:"")):df(d,a,b,c)[0]||null}
function gf(a,b){Ab(b,function(c,d){c&&"object"==typeof c&&c.Ja&&(c=c.oa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:hf.hasOwnProperty(d)?a.setAttribute(hf[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var hf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function jf(a){a=a.document;a=kf(a)?a.documentElement:a.body;return new Ye(a.clientWidth,a.clientHeight)}
function lf(a){var b=mf(a);a=nf(a);return E&&ie("10")&&a.pageYOffset!=b.scrollTop?new We(b.scrollLeft,b.scrollTop):new We(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function mf(a){return a.scrollingElement?a.scrollingElement:!Vd&&kf(a)?a.documentElement:a.body||a.documentElement}
function nf(a){return a.parentWindow||a.defaultView}
function of(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Re&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',zd(g.name),'"');if(g.type){f.push(' type="',zd(g.type),'"');var k={};Qb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:Ja(g)?f.className=g.join(" "):gf(f,g));2<d.length&&pf(e,f,d,2);return f}
function pf(a,b,c,d){function e(g){g&&b.appendChild(r(g)?a.createTextNode(g):g)}
for(;d<c.length;d++){var f=c[d];!Ka(f)||Ma(f)&&0<f.nodeType?e(f):B(qf(f)?pb(f):f,e)}}
function rf(a){return document.createElement(String(a))}
function sf(a){var b=document,c=b.createElement("DIV");E?(a=fd(nd,a),pd(c,a),c.removeChild(c.firstChild)):pd(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function kf(a){return"CSS1Compat"==a.compatMode}
function xf(a,b){pf(af(a),a,arguments,1)}
function yf(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function zf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Af(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function Bf(a){return Se&&void 0!=a.children?a.children:bb(a.childNodes,function(b){return 1==b.nodeType})}
function Cf(a){return p(a.firstElementChild)?a.firstElementChild:Df(a.firstChild,!0)}
function Df(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function Ef(a){return Ma(a)&&1==a.nodeType}
function Ff(a){var b;if(Ue&&!(E&&ie("9")&&!ie("10")&&n.SVGElement&&a instanceof n.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return Ef(b)?b:null}
function Gf(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function af(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Hf(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else yf(a),a.appendChild(af(a).createTextNode(String(b)))}
function If(a,b){var c=[];return Jf(a,b,c,!0)?c[0]:void 0}
function Jf(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Jf(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Kf={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Lf={IMG:" ",BR:"\n"};function Mf(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Nf(a)||Of(a)):Nf(a)&&Of(a))&&E){var c;!La(a.getBoundingClientRect)||E&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Nf(a){return E&&!ie("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Of(a){a=a.tabIndex;return Ba(a)&&0<=a&&32768>a}
function Pf(a){if(Te&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Qf(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Te||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Qf(a,b,c){if(!(a.nodeName in Kf))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Lf)b.push(Lf[a.nodeName]);else for(a=a.firstChild;a;)Qf(a,b,c),a=a.nextSibling}
function qf(a){if(a&&"number"==typeof a.length){if(Ma(a))return"function"==typeof a.item||"string"==typeof a.item;if(La(a))return"function"==typeof a.item}return!1}
function Rf(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Sf(a,function(f){return(!e||f.nodeName==e)&&(!c||r(f.className)&&jb(f.className.split(/\s+/),c))},!0,d)}
function H(a,b){return Rf(a,null,b,void 0)}
function Sf(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function $e(a){this.f=a||n.document||document}
h=$e.prototype;h.qc=function(){return r(void 0)?this.f.getElementById(void 0):void 0};
h.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
h.createElement=function(a){return this.f.createElement(String(a))};
h.appendChild=function(a,b){a.appendChild(b)};
h.isElement=Ef;h.contains=Gf;function Tf(a){Uf();return gd(a,null)}
function Vf(a){Uf();return dc(a)}
var Uf=Ga;var Wf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xf(a){return a.match(Wf)}
function Yf(a){return a?decodeURI(a):a}
function Zf(a){return Yf(Xf(a)[3]||null)}
function $f(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?yd(f):"")}}
function ag(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function bg(a,b,c){if(Ja(b))for(var d=0;d<b.length;d++)bg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+xd(b)))}
function cg(a,b){for(var c=[],d=b||0;d<a.length;d+=2)bg(a[d],a[d+1],c);return c.join("&")}
function dg(a){var b=[],c;for(c in a)bg(c,a[c],b);return b.join("&")}
function eg(a,b){var c=2==arguments.length?cg(arguments[1],0):cg(arguments,1);return ag(a,c)}
function fg(a,b){var c=dg(b);return ag(a,c)}
function gg(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var hg=/#|$/;function ig(a,b){var c=a.search(hg),d=gg(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return yd(a.substr(d,e-d))}
var jg=/[?&]($|#)/;function kg(a){for(var b=lg(),c=a.search(hg),d=0,e,f=[];0<=(e=gg(a,d,"lact",c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));a=f.join("").replace(jg,"$1");b=null!=b?"="+xd(b):"";return ag(a,"lact"+b)}
;function mg(a){try{return!!a&&null!=a.location.href&&Nd(a,"foo")}catch(b){return!1}}
function ng(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function og(a){var b=[];ng(a,function(c){b.push(c)});
return b}
function pg(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c}
var qg={Fh:"allow-forms",Gh:"allow-modals",Hh:"allow-orientation-lock",Ih:"allow-pointer-lock",Jh:"allow-popups",Kh:"allow-popups-to-escape-sandbox",Lh:"allow-presentation",Mh:"allow-same-origin",Nh:"allow-scripts",Oh:"allow-top-navigation",Ph:"allow-top-navigation-by-user-activation"},rg=zb(function(){return og(qg)});
function sg(){var a=rf("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};B(rg(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function tg(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}
;function ug(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=function(e){b&&b(e);c.removeEventListener&&c.removeEventListener("load",d,!1);c.removeEventListener&&c.removeEventListener("error",d,!1)};
tg(c,"load",d);tg(c,"error",d)}c.src=a;n.google_image_requests.push(c)}
;function vg(){var a=wg(Ke),b=xg();this.i=a;this.pubWin=b;this.f=(this.iframeWin=Ke)||{};this.j=-1;this.B=!1;this.w="";this.l=this.g=0}
;function yg(){return Vd?"Webkit":Ud?"Moz":E?"ms":Rd?"O":null}
function zg(){return Vd?"-webkit":Ud?"-moz":E?"-ms":Rd?"-o":null}
;function Ag(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=Ag.prototype;h.getHeight=function(){return this.bottom-this.top};
h.clone=function(){return new Ag(this.top,this.right,this.bottom,this.left)};
h.contains=function(a){return Bg(this,a)};
function Bg(a,b){return a&&b?b instanceof Ag?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1}
function Cg(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Dg(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
h=Dg.prototype;h.clone=function(){return new Dg(this.left,this.top,this.width,this.height)};
h.contains=function(a){return a instanceof We?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Eg(a,b,c){if(r(b))(b=Fg(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Fg(c,d);f&&(c.style[f]=e)}}
var Gg={};function Fg(a,b){var c=Gg[b];if(!c){var d=Id(b);c=d;void 0===a.style[d]&&(d=yg()+Jd(d),void 0!==a.style[d]&&(c=d));Gg[b]=c}return c}
function Hg(a,b){var c=af(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Ig(a,b){return Hg(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Jg(a){return Ig(a,"position")}
function Kg(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}E&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Lg(a){if(E&&!je(8))return a.offsetParent;var b=af(a),c=Ig(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Ig(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Mg(a){for(var b=new Ag(0,Infinity,Infinity,0),c=Ze(a),d=c.f.body,e=c.f.documentElement,f=mf(c.f);a=Lg(a);)if(!(E&&0==a.clientWidth||Vd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Ig(a,"overflow")){var g=Ng(a),k=new We(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=jf(nf(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Ng(a){var b=af(a),c=new We(0,0);var d=b?af(b):document;d=!E||je(9)||kf(Ze(d).f)?d.documentElement:d.body;if(a==d)return c;a=Kg(a);b=lf(Ze(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Og(a){return Ng(a).x}
function Pg(a){a=Kg(a);return new We(a.left,a.top)}
function Qg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Rg(a){var b=Sg;if("none"!=Ig(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Sg(a){var b=a.offsetWidth,c=a.offsetHeight,d=Vd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Ye(b,c):(a=Kg(a),new Ye(a.right-a.left,a.bottom-a.top))}
function Tg(a){var b=Ng(a);a=Rg(a);return new Dg(b.x,b.y,a.width,a.height)}
function Ug(a){return"rtl"==Ig(a,"direction")}
function Vg(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Wg(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Vg(a,c):0}
var Xg={thin:2,medium:4,thick:6};function Yg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Xg?Xg[c]:Vg(a,c)}
;var Zg={"AMP-CAROUSEL":"ac","AMP-FX-FLYING-CARPET":"fc","AMP-LIGHTBOX":"lb","AMP-STICKY-AD":"sa"};function $g(a){a=void 0===a?n:a;var b=a.context||a.AMP_CONTEXT_DATA;if(!b)try{b=a.parent.context||a.parent.AMP_CONTEXT_DATA}catch(c){}try{if(b&&b.pageViewId&&b.canonicalUrl)return b}catch(c){}return null}
;function ah(a,b){return typeof a===b}
function bh(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function ch(a){return!(!a||!a.call)&&ah(a,"function")}
function dh(a,b){if(a.filter)return a.filter(b,void 0);for(var c=[],d=0;d<a.length;d++)b.call(void 0,a[d],d,a)&&c.push(a[d]);return c}
function eh(a,b){var c=b.slice(-1),d="?"===c||"#"===c?"":"&",e=[b];bh(a,function(f,g){if(f||0===f||!1===f)ah(f,"boolean")&&(f=f?1:0),e.push(d),e.push(g),e.push("="),e.push(encodeURIComponent(String(f))),d="&"});
return e.join("")}
function fh(){var a=void 0===a?Ke:a;try{return a.history.length}catch(b){return 0}}
function gh(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=fh();a.u_java=!!Ke.navigator&&!ah(Ke.navigator.javaEnabled,"unknown")&&!!Ke.navigator.javaEnabled&&Ke.navigator.javaEnabled();Ke.screen&&(a.u_h=Ke.screen.height,a.u_w=Ke.screen.width,a.u_ah=Ke.screen.availHeight,a.u_aw=Ke.screen.availWidth,a.u_cd=Ke.screen.colorDepth);Ke.navigator&&Ke.navigator.plugins&&(a.u_nplug=Ke.navigator.plugins.length);Ke.navigator&&Ke.navigator.mimeTypes&&(a.u_nmime=Ke.navigator.mimeTypes.length)}
var wh=!!window.google_async_iframe_id,xh=wh&&window.parent||window;function xg(){if(wh&&!mg(xh)){var a="."+Je.domain;try{for(;2<a.split(".").length&&!mg(xh);)Je.domain=a=a.substr(a.indexOf(".")+1),xh=window.parent}catch(b){}mg(xh)||(xh=window)}return xh}
function yh(){var a,b=window.ActiveXObject;if(navigator.plugins&&navigator.mimeTypes.length){if((a=navigator.plugins["Shockwave Flash"])&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else{if(navigator.userAgent&&0<=navigator.userAgent.indexOf("Windows CE")){var c=3;for(a=1;a;)try{a=new b("ShockwaveFlash.ShockwaveFlash."+(c+1)),c++}catch(d){a=null}return c.toString()}if(Qc()){a=null;try{a=new b("ShockwaveFlash.ShockwaveFlash.7")}catch(d){c=0;try{a=new b("ShockwaveFlash.ShockwaveFlash.6"),
c=6,a.AllowScriptAccess="always"}catch(e){if(6===c)return c.toString()}try{a=new b("ShockwaveFlash.ShockwaveFlash")}catch(e){}}if(a)return c=a.GetVariable("$version").split(" ")[1],c.replace(/,/g,".")}}return"0"}
function wg(a){a=a.top;return mg(a)?a:null}
;function zh(a){a:{Ke.google_ad_modifications||(Ke.google_ad_modifications={});var b=Ke.google_ad_modifications.eids||[];if(b.indexOf)a=b.indexOf(a),a=0<a||0===a;else{for(var c=0;c<b.length;c++)if(b[c]===a){a=!0;break a}a=!1}}return a}
;var I={},Ah=(I.google_ad_channel="channel",I.google_ad_type="ad_type",I.google_ad_format="format",I.google_color_bg="color_bg",I.google_color_border="color_border",I.google_color_link="color_link",I.google_color_text="color_text",I.google_color_url="color_url",I.google_page_url="url",I.google_allow_expandable_ads="ea",I.google_ad_section="region",I.google_cpm="cpm",I.google_encoding="oe",I.google_safe="adsafe",I.google_flash_version="flash",I.google_font_face="f",I.google_font_size="fs",I.google_hints=
"hints",I.google_ad_host="host",I.google_ad_host_channel="h_ch",I.google_ad_host_tier_id="ht_id",I.google_kw_type="kw_type",I.google_kw="kw",I.google_contents="contents",I.google_targeting="targeting",I.google_adtest="adtest",I.google_alternate_color="alt_color",I.google_alternate_ad_url="alternate_ad_url",I.google_cust_age="cust_age",I.google_cust_ch="cust_ch",I.google_cust_gender="cust_gender",I.google_cust_interests="cust_interests",I.google_cust_job="cust_job",I.google_cust_l="cust_l",I.google_cust_lh=
"cust_lh",I.google_cust_u_url="cust_u_url",I.google_cust_id="cust_id",I.google_language="hl",I.google_city="gcs",I.google_country="gl",I.google_region="gr",I.google_available_width="avail_w",I.google_content_recommendation_ad_positions="ad_pos",I.google_content_recommendation_columns_num="cr_col",I.google_content_recommendation_rows_num="cr_row",I.google_content_recommendation_ui_type="crui",I.google_content_recommendation_use_square_imgs="cr_sq_img",I.google_color_line="color_line",I.google_disable_video_autoplay=
"disable_video_autoplay",I.google_full_width_responsive_allowed="fwr",I.google_full_width_responsive="fwrattr",I.efwr="efwr",I.google_pgb_reactive="pra",I.google_resizing_allowed="rs",I.google_resizing_height="rh",I.google_resizing_width="rw",I.rpe="rpe",I.google_responsive_formats="resp_fmts",I.google_safe_for_responsive_override="sfro",I.google_video_doc_id="video_doc_id",I.google_video_product_type="video_product_type",I.google_webgl_support="wgl",I.google_refresh_count="rc",I),J={},Bh=(J.google_ad_block=
"ad_block",J.google_ad_client="client",J.google_ad_output="output",J.google_ad_callback="callback",J.google_ad_height="h",J.google_ad_resize="twa",J.google_ad_slot="slotname",J.google_ad_unit_key="adk",J.google_ad_dom_fingerprint="adf",J.google_ad_width="w",J.google_captcha_token="captok",J.google_content_recommendation_columns_num="cr_col",J.google_content_recommendation_rows_num="cr_row",J.google_ctr_threshold="ctr_t",J.google_cust_criteria="cust_params",J.google_full_width_responsive="fwr_io",
J.gfwrnwer="fwrn",J.gfwrnher="fwrnh",J.google_bfa="bfa",J.ebfa="ebfa",J.ebfaca="ebfaca",J.google_image_size="image_size",J.google_last_modified_time="lmt",J.google_loeid="loeid",J.google_max_num_ads="num_ads",J.google_max_radlink_len="max_radlink_len",J.google_mtl="mtl",J.google_native_settings_key="nsk",J.google_enable_content_recommendations="ecr",J.google_infinite_scroll_slot_type="ifsl",J.google_num_radlinks="num_radlinks",J.google_num_radlinks_per_unit="num_radlinks_per_unit",J.google_pucrd=
"pucrd",J.google_reactive_plaf="plaf",J.google_reactive_plat="plat",J.google_reactive_fba="fba",J.google_reactive_sra_channels="plach",J.google_responsive_auto_format="rafmt",J.armr="armr",J.google_rl_dest_url="rl_dest_url",J.google_rl_filtering="rl_filtering",J.google_rl_mode="rl_mode",J.google_rt="rt",J.google_source_type="src_type",J.google_tag_for_child_directed_treatment="tfcd",J.google_tag_for_under_age_of_consent="tfua",J.google_tag_origin="to",J.google_ad_semantic_area="sem",J.google_tfs=
"tfs",J.google_package="pwprc",J.google_tag_partner="tp",J.fra="fpla",J.google_ml_rank="mlr",J),Ch={},Dh=(Ch.google_core_dbp="dbp",Ch.google_lact="lact",Ch.google_only_pyv_ads="pyv",Ch.google_scs="scs",Ch.google_video_url_to_fetch="durl",Ch.google_yt_pt="yt_pt",Ch.google_yt_up="yt_up",Ch);var Eh={google_ad_client:!0,google_ad_host:!0,google_ad_host_channel:!0,google_adtest:!0,google_tag_for_child_directed_treatment:!0,google_tag_for_under_age_of_consent:!0,google_tag_partner:!0},Fh=Eh;Object.isFrozen&&!Object.isFrozen(Eh)&&(Fh=Object.create(Eh),Object.freeze(Fh));function Gh(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}
;var Hh=[/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i,/^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i,/^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i,/^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i];function Ih(a){return eb(Hh,function(b){return b.test(a)})}
function Jh(a){if(a=/[-\w]+\.[-\w]+$/.exec(a))switch(Hd(a[0].toLowerCase())){case 1967261364:return 0;case 3147493546:return 1;case 1567346461:return 2;case 2183041838:return 3;case 763236279:return 4;case 1342279801:return 5;case 526831769:return 6;case 352806002:return 7;case 2755048925:return 8;case 3306848407:return 9;case 2207000920:return 10;case 484037040:return 11;case 3506871055:return 12;case 672143848:return 13;case 2528751226:return 14;case 2744854768:return 15;case 3703278665:return 16;
case 2014749173:return 17;case 133063824:return 18;case 2749334602:return 19;case 3131239845:return 20;case 2074086763:return 21;case 795772493:return 22;case 290857819:return 23;case 3035947606:return 24;case 2983138003:return 25;case 2197138676:return 26;case 4216016165:return 27;case 239803524:return 28;case 975993579:return 29;case 1794940339:return 30;case 1314429186:return 31;case 1643618937:return 32;case 497159982:return 33}return-1}
function Kh(a){if(!a.length)return 0;for(var b=[],c=0;33>=c;c++)b[c]=0;for(c=a.length-1;0<=c;c--){var d=Jh(a[c]);0<=d&&(b[33-d]=1)}return parseInt(b.join(""),2)}
;var Lh=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function Mh(a){a=(this.g=a||n)||n;this.i=a.top==a?1:mg(a.top)?2:3;3!=this.i&&(this.lastModifiedTime=Date.parse(n.top.document.lastModified)/1E3);this.f=Nh(this.g)}
function Oh(a){for(var b=[],c=Math.min(a.f.length,27),d=1;d<c;d++)a.f[d]&&a.f[d].url&&(b[d-1]=a.f[d].url);return Ph(a,b.reverse())}
function Qh(a){var b=a.g.document&&a.g.document.scripts?a.g.document.scripts:[];if(!b)return 0;for(var c=[],d=b.length-1;0<=d&&26>c.length;)b[d].src&&c.unshift(b[d].src),d--;return Ph(a,c)}
function Ph(a,b){for(var c,d=0,e=(c=a.f[Math.max(a.f.length-1,0)].url||null)&&Zf(c),f=Math.min(b.length,26),g=0;g<f;g++)c=null!=b[g]&&Zf(b[g])||"",d*=4,c&&(e&&c==e?d+=3:Ih(b[g])?d+=2:c&&0<=Jh(c)&&(d+=1));return d}
function Rh(a){a=a.f;for(var b=[],c=a.length-1;0<c;c--){var d=a[c];d&&null!=d.url&&b.push(Zf(d.url))}return Kh(b)}
function Sh(a){a=a.g.document&&a.g.document.scripts?a.g.document.scripts:[];if(!a)return 0;for(var b=[],c=a.length-1;0<=c;c--){var d=a[c];d&&null!=d.src&&b.push(Zf(d.src))}return Kh(b)}
function Nh(a){var b=a||n,c=[],d=null;do{var e=b;if(mg(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new Th(f||"",e));try{b=e.parent}catch(g){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.wd=!0);return c}
function Uh(a,b){this.f=a;this.g=b}
function Th(a,b,c){this.url=a;this.qb=b;this.wd=!!c;this.depth=Ba(void 0)?void 0:null}
;function Vh(){this.i="&";this.j=p(void 0)?void 0:"trn";this.l=!1;this.g={};this.B=0;this.f=[]}
function Wh(a,b){var c={};c[a]=b;return[c]}
function Xh(a,b,c,d,e){var f=[];ng(a,function(g,k){var l=Yh(g,b,c,d,e);l&&f.push(k+"="+l)});
return f.join(b)}
function Yh(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Yh(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Xh(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}
function Zh(a,b,c,d){a.f.push(b);a.g[b]=Wh(c,d)}
function $h(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=ai(a)-c.length;if(0>d)return"";a.f.sort(function(q,u){return q-u});
c=null;for(var e="",f=0;f<a.f.length;f++)for(var g=a.f[f],k=a.g[g],l=0;l<k.length;l++){if(!d){c=null==c?g:c;break}var m=Xh(k[l],a.i,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.i;break}else a.l&&(e=d,m[e-1]==a.i&&--e,b+=m.substr(0,e),e=a.i,d=0);c=null==c?g:c}}f="";a.j&&null!=c&&(f=e+a.j+"="+c);return b+f+""}
function ai(a){if(!a.j)return 4E3;var b=1,c;for(c in a.g)b=c.length>b?c.length:b;return 4E3-a.j.length-b-a.i.length-1}
;function bi(a,b,c,d,e){if(Math.random()<(d||.01))try{if(c instanceof Vh)var f=c;else f=new Vh,ng(c,function(k,l){var m=f,q=m.B++,u=Wh(l,k);m.f.push(q);m.g[q]=u});
var g=$h(f,a.f,"/pagead/gen_204?id="+b+"&");g&&("undefined"===typeof e?ug(g,null):ug(g,void 0===e?null:e))}catch(k){}}
;var ci=null;function di(a){this.g={};this.f={};a=a||[];for(var b=0,c=a.length;b<c;++b)this.f[a[b]]=""}
function ei(){var a=fi(),b=new di;ng(a.g,function(c,d){b.g[d]=c});
ng(a.f,function(c,d){b.f[d]=c});
return b}
function gi(a){var b=hi();return b.f.hasOwnProperty(a)?b.f[a]:""}
function ii(a){var b=[];ng(a.g,function(c,d){b.push(d)});
ng(a.f,function(c){""!=c&&b.push(c)});
return b}
;function ji(){var a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):z()}
function ki(){var a=void 0===a?n:a;return(a=a.performance)&&a.now?a.now():null}
;function li(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}
;var mi=n.performance,ni=!!(mi&&mi.mark&&mi.measure&&mi.clearMarks),oi=zb(function(){var a;if(a=ni){var b;if(null===ci){ci="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(ci=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=ci;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function pi(){var a=qi;this.events=[];this.g=a||n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.f=oi()||(null!=b?b:1>Math.random())}
pi.prototype.disable=function(){this.f=!1;this.events!=this.g.google_js_reporting_queue&&(oi()&&B(this.events,ri),this.events.length=0)};
function ri(a){a&&mi&&oi()&&(mi.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),mi.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}
pi.prototype.start=function(a,b){if(!this.f)return null;var c=ki()||ji();c=new li(a,b,c);var d="goog_"+c.label+"_"+c.uniqueId+"_start";mi&&oi()&&mi.mark(d);return c};
pi.prototype.end=function(a){if(this.f&&Ba(a.value)){var b=ki()||ji();a.duration=b-a.value;b="goog_"+a.label+"_"+a.uniqueId+"_end";mi&&oi()&&mi.mark(b);!this.f||2048<this.events.length||this.events.push(a)}};function si(){var a=ti;this.i=ui;this.j=this.g;this.f=void 0===a?null:a}
function vi(a,b,c){try{if(a.f&&a.f.f){var d=a.f.start(b.toString(),3);var e=c();a.f.end(d)}else e=c()}catch(g){c=!0;try{ri(d);var f=new Gh(g,{message:wi(g)});c=a.j(b,f,void 0,void 0)}catch(k){a.g(217,k)}if(!c)throw g;}return e}
function xi(a,b){var c=yi;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return vi(c,a,function(){return b.apply(void 0,e)})}}
si.prototype.g=function(a,b,c,d,e){e=e||"jserror";try{var f=new Vh;f.l=!0;Zh(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Gh(b,{message:wi(b)}));b.msg&&Zh(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(d)try{d(g)}catch(x){}b=[g];f.f.push(3);f.g[3]=b;var k=Nh(),l=new Th(n.location.href,n,!1);b=null;var m=k.length-1;for(d=m;0<=d;--d){var q=k[d];!b&&Lh.test(q.url)&&(b=q);if(q.url&&!q.wd){l=q;break}}q=null;var u=k.length&&k[m].url;0!=l.depth&&u&&(q=k[m]);var v=new Uh(l,q);v.g&&Zh(f,4,"top",v.g.url||
"");Zh(f,5,"url",v.f.url||"");bi(this.i,e,f,c)}catch(x){try{bi(this.i,e,{context:"ecmserr",rctx:a,msg:wi(x),url:v&&v.f.url},c)}catch(N){}}return!0};
function wi(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}
;var ui,yi,qi=xg(),ti=new pi;ui=new function(){var a=void 0===a?Ke:a;this.f="http:"===a.location.protocol?"http:":"https:"};
yi=new si;"complete"==qi.document.readyState?qi.google_measure_js_timing||ti.disable():ti.f&&tg(qi,"load",function(){qi.google_measure_js_timing||ti.disable()});
function zi(a,b){return xi(a,b)}
;function Ai(){this.F=this.F;this.B=this.B}
Ai.prototype.F=!1;Ai.prototype.P=function(){return this.F};
Ai.prototype.dispose=function(){this.F||(this.F=!0,this.K())};
function Bi(a,b){a.F?p(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(p(void 0)?y(b,void 0):b))}
Ai.prototype.K=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Ci(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Di(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Ei(a){var b=[];Fi(new Gi,a,b);return b.join("")}
function Gi(){}
function Fi(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Ja(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Fi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Hi(d,c),c.push(":"),Fi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Hi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ii={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ji=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Hi(a,b){b.push('"',a.replace(Ji,function(c){var d=Ii[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ii[c]=d);return d}),'"')}
;var Ki={He:1,Ie:2,fi:8,Qi:9,Ni:16,Sh:26,Qh:27,Je:30,mi:32};function Li(){this.wasPlaTagProcessed=!1;this.wasReactiveAdConfigReceived={};this.adCount={};this.wasReactiveAdVisible={};this.stateForType={};this.reactiveTypeEnabledInAsfe={};this.isReactiveTagFirstOnPage=this.wasReactiveAdConfigHandlerRegistered=this.wasReactiveTagRequestSent=!1;this.reactiveTypeDisabledByPublisher={};this.tagSpecificState={};this.adRegion=this.floatingAdsFillMessage=null;this.improveCollisionDetection=0;this.messageValidationEnabled=!1}
function Mi(a){a.google_reactive_ads_global_state||(a.google_reactive_ads_global_state=new Li);return a.google_reactive_ads_global_state}
;var Ni=728*1.38;function Oi(a){return a!=a.top?512:0}
function Pi(a,b){var c=Qi(a).clientWidth;return c?c>(void 0===b?420:b)?32768:320>c?65536:0:16384}
function Ri(a){var b=Qi(a).clientWidth;a=a.innerWidth;return(b=b&&a?b/a:0)?1.05<b?262144:.95>b?524288:0:131072}
function Qi(a){a=a.document;var b={};a&&(b="CSS1Compat"==a.compatMode?a.documentElement:a.body);return b||{}}
function Si(a,b){if(!a.adCount)return!1;if(1==b||2==b)return!(!a.adCount[1]&&!a.adCount[2]);var c=a.adCount[b];return c&&27!=b&&26!=b?1<=c:!1}
;var Ti={9:"<<<RESPONSIVE_LINK_UNIT_HEIGHT_LIMIT_LOWER>>>",10:"<<<RESPONSIVE_LINK_UNIT_HEIGHT_LIMIT_WIDTH>>>",13:"<<<LATENCY_REPORTING_FRACTION>>>",22:"<<<JS_RNG_EXP_FRACTION>>>",24:"<<<ENABLE_CMS_DETECTION_EXP_FRACTION>>>",28:"<<<OSD_ACTIVEVIEW_MEASURABLE_FRACTION>>>",29:"<<<PAGE_LATENCY_REPORTING_FRACTION>>>",34:"<<<SANDBOX_IFRAME_FRACTION>>>",60:"<<<REAL_USER_MONITORING_FRACTION>>>",66:"<<<REAL_USER_MONITORING_WITH_FLAGS_FRACTION>>>",78:"<<<SANDBOX_IFRAME_CHROME_58_NON_DESKTOP_FRACTION>>>",79:"<<<CONTENT_RECOMMENDATION_PEDESTAL_MAX_WIDTH>>>",
82:"<<<VIEW_OPTIMIZED_MOBILE_SCALING_FACTOR>>>",96:"<<<FIXED_SIZE_TO_AUTO_RESPONSIVE_SLOT_MOD_LOWER>>>",97:"<<<FIXED_SIZE_TO_AUTO_RESPONSIVE_SLOT_MOD_WIDTH>>>",98:"<<<FULL_WIDTH_RESPONSIVE_ELIGIBILITY_FRACTION>>>",99:"<<<FULL_WIDTH_RESPONSIVE_CORE_MOD_LOWER>>>",100:"<<<FULL_WIDTH_RESPONSIVE_CORE_MOD_WIDTH>>>",103:"<<<OSD_START_ON_ELEMENT_LOADED_FRACTION>>>",111:"<<<SANDBOX_IFRAME_TOP_NAVIGATION_USER_GESTURE_FRACTION>>>",118:"<<<DISABLE_LAZY_LOAD>>>",120:"<<<FIXED_SIZE_TO_AUTO_RESPONSIVE_SLOT_HOLDBACK_MOD_LOWER>>>",
121:"<<<FIXED_SIZE_TO_AUTO_RESPONSIVE_SLOT_HOLDBACK_MOD_WIDTH>>>",126:"<<<ACTIVE_VIEW_MEASUREMENT_STRATEGY_VERIFICATION_FRACTION>>>",128:"<<<SHOULD_USE_IAB_CMPS>>>",129:"<<<USE_IAB_CMPS_EXP_FRACTION>>>",135:"<<<RUM_ENABLE_PPRUE_COLLECTION_FRACTION>>>",136:"<<<FULL_WIDTH_MANUAL_RESPONSIVE_DISABLED_FRACTION>>>",137:"<<<RUM_SCROLL_METRICS_FRACTION>>>",142:"<<<OBSERVE_OVERLAP_FREQUENCY>>>",149:"<<<AUTO_PAGE_LEVEL_TAG_LAB_MOD_LOWER>>>",150:"<<<AUTO_PAGE_LEVEL_TAG_LAB_MOD_WIDTH>>>",152:"<<<FIXED_SIZE_TO_AUTO_RESPONSIVE_SLOT_GA_HOLDBACK_MOD_LOWER>>>",
153:"<<<FIXED_SIZE_TO_AUTO_RESPONSIVE_SLOT_GA_HOLDBACK_MOD_WIDTH>>>",155:"<<<IMPROVE_COLLISION_DETECTION_FRACTION>>>",157:"<<<HARMONIZE_RESPONSIVE_BEHAVIOUR_MOD_LOWER>>>",158:"<<<HARMONIZE_RESPONSIVE_BEHAVIOUR_MOD_WIDTH>>>",160:"<<<BIG_FORMAT_AD_MOD_LOWER>>>",161:"<<<BIG_FORMAT_AD_MOD_WIDTH>>>",162:"<<<REMOVE_ASWIFT_REACTIVE_SLOTS_FRACTION>>>",165:"<<<REMOVE_ASWIFT_ALL_SLOTS_FRACTION>>>",173:"<<<RESPONSIVE_CORE_TO_RESPONSIVE_AUTO_MOD_LOWER>>>",174:"<<<RESPONSIVE_CORE_TO_RESPONSIVE_AUTO_MOD_WIDTH>>>",
176:"<<<LAZY_LOAD_FIRST_SLOT_FRACTION>>>",177:"<<<PAGE_HEIGHT_LOGGING_FRACTION>>>",179:"<<<AUTO_REACTIVE_REQUEST_MOD_LOWER>>>",180:"<<<AUTO_REACTIVE_REQUEST_MOD_WIDTH>>>",182:"<<<INTERSTITIAL_AD_ACCESSIBILITY_FRACTION>>>",185:"<<<REMOVE_CHROME_WORKAROUND_FRACTION>>>",187:"<<<AUTO_REACTIVE_REQUEST_IS_LAUNCHED>>>",189:"<<<ANTMAN_SIZELESS_ADS_MOD_LOWER>>>",190:"<<<ANTMAN_SIZELESS_ADS_MOD_WIDTH>>>",191:"<<<LAZY_LOAD_V2_FRACTION>>>",192:"<<<GFP_COOKIE_FRACTION>>>",193:"<<<INARTICLE_SPACE_RESERVATION_MOD_LOWER>>>",
194:"<<<INARTICLE_SPACE_RESERVATION_MOD_WIDTH>>>",195:"<<<THROW_TAG_ERROR_ON_MISSING_AD_CLIENT_MOD_LOWER>>>",196:"<<<THROW_TAG_ERROR_ON_MISSING_AD_CLIENT_MOD_WIDTH>>>",197:"<<<IS_HARMONIZE_RESPONSIVE_EXPERIMENT_LAUNCHED>>>",198:"<<<ALWAYS_USE_HTTPS_HOLDBACK_EXP_FRACTION>>>",199:"<<<FIX_FULL_WIDTH_RESPONSIVE_OFFSET_MOD_LOWER>>>",200:"<<<FIX_FULL_WIDTH_RESPONSIVE_OFFSET_MOD_WIDTH>>>",201:"<<<THROW_TAG_ERROR_ON_MISSING_AD_CLIENT_IS_LAUNCHED>>>"};var Ui=null;function Vi(){this.f=Ti}
function Wi(){Ui||(Ui=new Vi);return Ui}
;var Xi=null;function Yi(a,b){for(var c=0,d=a,e=0;a&&a!=a.parent;)if(a=a.parent,e++,mg(a))d=a,c=e;else if(b)break;return{qb:d,level:c}}
function Zi(){Xi||(Xi=Yi(n,!0).qb);return Xi}
;function $i(a){di.call(this,a);this.dfltBktExt=this.g;this.lrsExt=this.f}
la($i,di);function aj(){this.S={}}
function bj(){if(cj)return cj;var a=dj(),b=a.google_persistent_state_async;return null!=b&&"object"==typeof b&&null!=b.S&&"object"==typeof b.S?cj=b:a.google_persistent_state_async=cj=new aj}
function ej(a,b,c){b=fj[b]||"google_ps_"+b;a=a.S;var d=a[b];return void 0===d?a[b]=c:d}
function dj(){var a=$g();return(a?mg(a.master)?a.master:null:null)||xg()}
var cj=null,gj={},fj=(gj[8]="google_prev_ad_formats_by_region",gj[9]="google_prev_ad_slotnames_by_region",gj);var hj={hi:5,bi:7,vi:17,Uh:41,Fi:62,yi:67,Hi:82,Ii:83,Bi:87,Oi:88,Wh:89,Zh:103,ii:106,Xi:107,di:108,pi:141,zi:114,Dh:124,Wi:126,Eh:128,ki:132,Gi:134,wi:138,Ai:139},ij=null;function jj(a){try{return!!a&&Md(!0)}catch(b){return!1}}
function kj(){if(jj(ij))return!0;var a=bj();if(a=ej(a,3,null)){if(a&&a.dfltBktExt&&a.lrsExt){var b=new $i;b.g=a.dfltBktExt;b.dfltBktExt=b.g;b.f=a.lrsExt;b.lrsExt=b.f;a=b}else a=null;a||(a=new $i,b={context:"ps::gpes::cf",url:xg().location.href},bi(ui,"jserror",b,void 0,void 0))}return jj(a)?(ij=a,!0):!1}
function fi(){if(kj())return ij;var a=bj(),b=new $i(og(hj));return ij=a.S[fj[3]||"google_ps_3"]=b}
var lj=null;function hi(){lj||(lj=ei());return lj}
var mj={};function nj(a){a=void 0===a?hi():a;return dh(ii(a),function(b){return!!mj[b]})}
function oj(a){a=void 0===a?hi():a;return dh(ii(a),function(b){return!mj[b]})}
;function pj(a){var b=a.f;null==b.google_ad_output&&(b.google_ad_output="html");var c;if(c=null==b.google_ad_client){c=Wi();c=/^true$/.test(c.f[201]);var d=zh("368226371"),e=zh("368226370");c=d||c&&!e}c||((c=String(b.google_ad_client))?(c=c.toLowerCase())&&"ca-"!=c.substring(0,3)&&(c="ca-"+c):c="",b.google_ad_client=c);null!=b.google_ad_slot&&(b.google_ad_slot=String(b.google_ad_slot));if(null==b.google_flash_version){try{var f=yh()}catch(g){f="0"}b.google_flash_version=f}b.google_webgl_support=!!Ke.WebGLRenderingContext;
b.google_ad_section=b.google_ad_section||b.google_ad_region||"";b.google_country=b.google_country||b.google_gl||"";f=(new Date).getTime();Ja(b.google_color_bg)&&(b.google_color_bg=qj(a,b.google_color_bg,f));Ja(b.google_color_text)&&(b.google_color_text=qj(a,b.google_color_text,f));Ja(b.google_color_link)&&(b.google_color_link=qj(a,b.google_color_link,f));Ja(b.google_color_url)&&(b.google_color_url=qj(a,b.google_color_url,f));Ja(b.google_color_border)&&(b.google_color_border=qj(a,b.google_color_border,
f));Ja(b.google_color_line)&&(b.google_color_line=qj(a,b.google_color_line,f))}
function rj(){var a=window;bh(Ah,function(b,c){a[c]=null});
bh(Bh,function(b,c){a[c]=null});
bh(Dh,function(b,c){a[c]=null});
a.google_container_id=null;a.google_enable_async=null;a.google_eids=null;a.google_page_location=null;a.google_referrer_url=null;a.google_enable_single_iframe=null;a.google_ad_region=null;a.google_gl=null;a.google_loader_used=null;a.google_loader_features_used=null;a.google_debug_params=null}
function qj(a,b,c){a.g|=2;return b[c%b.length]}
;var sj=navigator;function tj(){try{return sj.javaEnabled()}catch(a){return!1}}
function uj(a){var b=1,c;if(void 0!=a&&""!=a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b}
function Sj(a,b){if(!a||"none"==a)return 1;a=String(a);"auto"==a&&(a=b,"www."==a.substring(0,4)&&(a=a.substring(4,a.length)));return uj(a.toLowerCase())}
var Tj=/^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,Uj=/^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,Vj=/^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;Vd&&rf("IFRAME");var Wj={Th:"google_ads_preview",ai:"google_mc_lab",Ie:"google_anchor_debug",He:"google_bottom_anchor_debug",li:"google_ifsl_debug",oi:"google_ia_debug",ji:"google_scr_debug",ri:"google_ia_debug_allow_onclick",Ci:"googleads",Je:"google_pedestal_debug",Ji:"google_resize_debug",Ri:"google_shoppable_images_debug",Si:"google_shoppable_images_cookie",Ti:"google_shoppable_images_forced",Ki:"google_responsive_slot_debug",Mi:"google_responsive_slot_preview",Li:"google_responsive_dummy_ad"},Xj={},Yj=(Xj.google_bottom_anchor_debug=
1,Xj.google_anchor_debug=2,Xj.google_ia_debug=8,Xj.google_resize_debug=16,Xj.google_ifsl_debug=32,Xj.google_scr_debug=9,Xj.googleads=2,Xj.google_pedestal_debug=30,Xj);function Zj(a,b){if(!a)return!1;var c=a.hash;if(!c||!c.indexOf)return!1;if(-1!=c.indexOf(b))return!0;var d=ak(b);return"go"!=d&&-1!=c.indexOf(d)?!0:!1}
function ak(a){var b="";bh(a.split("_"),function(c){b+=c.substr(0,2)});
return b}
;function bk(a,b){try{return(void 0===b?0:b)?(new Ye(a.innerWidth,a.innerHeight)).round():jf(a||window).round()}catch(c){return new Ye(-12245933,-12245933)}}
;function ck(a,b){var c;c||(c="https");n.location&&"https:"==n.location.protocol&&"http"==c&&(c="https");return[c,"://",a,b].join("")}
;function dk(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0}
;function ek(a,b){bh(a,function(c,d){b[d]=c})}
function fk(a){var b=a.location.href;if(a==a.top)return{url:b,Cc:!0};var c=!1,d=a.document;d&&d.referrer&&(b=d.referrer,a.parent==a.top&&(c=!0));(a=a.location.ancestorOrigins)&&(a=a[a.length-1])&&-1==b.indexOf(a)&&(c=!1,b=a);return{url:b,Cc:c}}
function gk(){var a=xg();if(a==a.top)return 0;for(;a&&a!=a.top&&mg(a);a=a.parent){if(a.sf_)return 2;if(a.$sf)return 3;if(a.inGptIF)return 4;if(a.inDapIF)return 5}return 1}
;var hk={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1},ik=/(corp|borg)\.google\.com:\d+$/;function jk(a){a=a.google_reactive_ad_format;return Fb(Ki,a)?""+a:null}
function kk(a){return!!jk(a)||null!=a.google_pgb_reactive}
;function lk(a,b){var c=jk(b);if(c){if("32"==c)return 1;if("30"==c)return 0}a:{for(c=xg();c&&mg(c);){if(c.name&&-1!=c.name.indexOf("google_ifsl_cifr")){c=!0;break a}if(c.parent==c)break;c=c.parent}c=!1}if(c)return 3;if(!mg(a))return 0;c=Mi(a);return c.stateForType[32]?2:c.stateForType[30]?4:0}
;var mk=!E&&!Sc();function nk(a,b){if(/-[a-z]/.test(b))return null;if(mk&&a.dataset){if(Uc()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function ok(a,b){this.i=a;this.j=b;this.g=0;this.f=null}
ok.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function pk(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function qk(a){n.setTimeout(function(){throw a;},0)}
var rk;
function sk(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";td(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Zc(id));e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(l){if(("*"==k||l.origin==k)&&l.data==
g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!Qc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var e=c.Vc;c.Vc=null;e()}};
return function(e){d.next={Vc:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){n.setTimeout(e,0)}}
;function tk(){this.g=this.f=null}
var vk=new ok(function(){return new uk},function(a){a.reset()});
tk.prototype.add=function(a,b){var c=vk.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
tk.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function uk(){this.next=this.scope=this.ua=null}
uk.prototype.set=function(a,b){this.ua=a;this.scope=b;this.next=null};
uk.prototype.reset=function(){this.next=this.scope=this.ua=null};function wk(a,b){xk||yk();zk||(xk(),zk=!0);Ak.add(a,b)}
var xk;function yk(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);xk=function(){a.then(Bk)}}else xk=function(){var b=Bk;
!La(n.setImmediate)||n.Window&&n.Window.prototype&&!C("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(rk||(rk=sk()),rk(b)):n.setImmediate(b)}}
var zk=!1,Ak=new tk;function Bk(){for(var a;a=Ak.remove();){try{a.ua.call(a.scope)}catch(b){qk(b)}pk(vk,a)}zk=!1}
;function Ck(a){this.f=0;this.w=void 0;this.j=this.g=this.i=null;this.l=this.B=!1;if(a!=Ga)try{var b=this;a.call(void 0,function(c){Dk(b,2,c)},function(c){Dk(b,3,c)})}catch(c){Dk(this,3,c)}}
function Ek(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
Ek.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var Fk=new ok(function(){return new Ek},function(a){a.reset()});
function Gk(a,b,c){var d=Fk.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Hk(a){if(a instanceof Ck)return a;var b=new Ck(Ga);Dk(b,2,a);return b}
function Ik(a,b,c){Jk(a,b,c,null)||wk(Ua(b,a))}
function Kk(a){return new Ck(function(b,c){var d=a.length,e=[];if(d)for(var f=function(m,q){d--;e[m]=q;0==d&&b(e)},g=function(m){c(m)},k=0,l;k<a.length;k++)l=a[k],Ik(l,Ua(f,k),g);
else b(e)})}
Ck.prototype.then=function(a,b,c){return Lk(this,La(a)?a:null,La(b)?b:null,c)};
Ck.prototype.$goog_Thenable=!0;Ck.prototype.cancel=function(a){0==this.f&&wk(function(){var b=new Mk(a);Nk(this,b)},this)};
function Nk(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Nk(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Ok(c),Pk(c,e,3,b)))}a.i=null}else Dk(a,3,b)}
function Qk(a,b){a.g||2!=a.f&&3!=a.f||Rk(a);a.j?a.j.next=b:a.g=b;a.j=b}
function Lk(a,b,c,d){var e=Gk(null,null,null);e.f=new Ck(function(f,g){e.g=b?function(k){try{var l=b.call(d,k);f(l)}catch(m){g(m)}}:f;
e.onRejected=c?function(k){try{var l=c.call(d,k);!p(l)&&k instanceof Mk?g(k):f(l)}catch(m){g(m)}}:g});
e.f.i=a;Qk(a,e);return e.f}
Ck.prototype.A=function(a){this.f=0;Dk(this,2,a)};
Ck.prototype.D=function(a){this.f=0;Dk(this,3,a)};
function Dk(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,Jk(c,a.A,a.D,a)||(a.w=c,a.f=b,a.i=null,Rk(a),3!=b||c instanceof Mk||Sk(a,c)))}
function Jk(a,b,c,d){if(a instanceof Ck)return Qk(a,Gk(b||Ga,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Ma(a))try{var f=a.then;if(La(f))return Tk(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Tk(a,b,c,d,e){function f(l){k||(k=!0,d.call(e,l))}
function g(l){k||(k=!0,c.call(e,l))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Rk(a){a.B||(a.B=!0,wk(a.F,a))}
function Ok(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}
Ck.prototype.F=function(){for(var a;a=Ok(this);)Pk(this,a,this.f,this.w);this.B=!1};
function Pk(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,Uk(b,c,d);else try{b.i?b.g.call(b.context):Uk(b,c,d)}catch(e){Vk.call(null,e)}pk(Fk,b)}
function Uk(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Sk(a,b){a.l=!0;wk(function(){a.l&&Vk.call(null,b)})}
var Vk=qk;function Mk(a){Wa.call(this,a)}
A(Mk,Wa);Mk.prototype.name="cancel";var Wk={},Xk=(Wk[16]=4,Wk[27]=512,Wk[26]=128,Wk[32]=16,Wk);
function Yk(a,b,c){switch(c){case 1:case 2:var d=0;try{d|=Oi(a);var e=Math.min(a.screen.width||0,a.screen.height||0);d|=e?320>e?8192:0:2048;var f;if(f=a.navigator){var g=a.navigator.userAgent;f=/Firefox/.test(g)||/Android 2/.test(g)||/iPhone OS [34]_/.test(g)||/Windows Phone (?:OS )?[67]/.test(g)}d|=f?1048576:0}catch(u){d|=32}var k=0;try{k|=a.innerHeight>=a.innerWidth?0:8,k|=Pi(a,Ni),k|=Ri(a)}catch(u){k|=32}if(2==c){a:{c=a.document;g=a.innerWidth;e=Mi(a).improveCollisionDetection;var l=Math.round(a.innerWidth/
320*50+15);f=[];for(var m=0;3>m;m++)for(var q=0;3>q;q++)f.push({x:q/2*g,y:m/2*l});for(g=0;g<f.length;g++){if((m=l=c.elementFromPoint(f[g].x,f[g].y))&&!(m="fixed"==Jg(l))&&(m=1==e))b:{m=a.document;for(l=l.offsetParent;l&&l!=m.body;l=l.offsetParent)if("fixed"==Jg(l)){m=!0;break b}m=!1}if(m){a=!0;break a}}a=!1}a&&(k|=16777216)}return d|k;case 8:d=0;try{d|=Oi(a),d|=a.navigator&&/Android 2/.test(a.navigator.userAgent)?1048576:0}catch(u){d|=32}k=0;try{k|=Pi(a,Ni),k|=Ri(a),k|=a.innerHeight>=a.innerWidth?
0:8}catch(u){k|=32}return d|k;case 9:d=0;try{d|=Oi(a),d|=Ri(a),d|=Pi(a),d|=a.innerHeight>=a.innerWidth?0:8,d|=a.navigator&&/Android 2/.test(a.navigator.userAgent)?1048576:0}catch(u){d|=32}return d;case 32:d=0;try{d|=Oi(a)}catch(u){d|=32}return d;case 16:return b.google_ad_resizable&&!b.google_reactive_ad_format&&a.navigator&&/iPhone|iPod|iPad|Android|BlackBerry/.test(a.navigator.userAgent)&&a.top==a?0:8388608;case 30:c=0;try{c|=Oi(a);c|=a.getComputedStyle?0:2097152;!(C("iPad")||C("Android")&&!C("Mobile")||
C("Silk"))&&(C("iPod")||C("iPhone")||C("Android")||C("IEMobile"))||(c|=1048576);l=Math.floor(a.document.body.getBoundingClientRect().width);m=Wi();q=parseFloat(m.f[79]);l<=(isNaN(q)?0:q)||(c|=32768);a:{k=a.document.getElementsByClassName("adsbygoogle");for(a=0;a<k.length;a++)if("autorelaxed"==nk(k[a],"adFormat")){d=!0;break a}d=!1}d&&(c|=33554432)}catch(u){c|=32}return c;case 26:d=0;try{d|=Oi(a),d|=a.getComputedStyle?0:2097152,d|=a.document.querySelectorAll&&a.document.querySelector?0:4194304,d|=
Pi(a,1E4)}catch(u){d|=32}return d;case 27:d=0;try{d|=Oi(a),d|=a.getComputedStyle?0:2097152,d|=Pi(a,1E4)}catch(u){d|=32}return d;default:return 32}}
function Zk(a){if(!a.hash)return null;var b=null;bh(Wj,function(c){!b&&Zj(a,c)&&(b=Yj[c])});
return b}
function $k(a,b){if(!b)return null;var c=Mi(b);if(!c.wasReactiveAdConfigHandlerRegistered)return null;var d=0;bh(Ki,function(e){var f=Xk[e];f&&0===al(a,b,e)&&(d|=f)});
c.wasPlaTagProcessed&&(d|=256);c.isReactiveTagFirstOnPage&&(d|=1024);return d?""+d:null}
function al(a,b,c){if(!b)return 256;var d=0,e=Mi(b),f=Si(e,c);if(a.google_reactive_ad_format==c||26!=c&&27!=c&&f)d|=64;var g=!1;bh(e.reactiveTypeDisabledByPublisher,function(k,l){String(c)===l&&(g=!0)});
g&&Zk(b.location)!==c&&(d|=128);return d|Yk(b,a,c)}
;Md("script");/*

 Copyright 2019 The AMP HTML Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var bl={"image-top":0,"image-middle":1,"image-side":2,"text-only":3,"in-article":4};function cl(a){this.j=[];this.g=a||window;this.f=0;this.i=null;this.l=0}
var dl;h=cl.prototype;h.Qe=function(a,b){0!=this.f||0!=this.j.length||b&&b!=window?this.gd(a,b):(this.f=2,this.ee(new el(a,window)))};
h.gd=function(a,b){this.j.push(new el(a,b||this.g));fl(this)};
h.Og=function(a){this.f=1;if(a){var b=zi(188,y(this.ce,this,!0));this.i=this.g.setTimeout(b,a)}};
h.ce=function(a){a&&++this.l;1==this.f&&(null!=this.i&&(this.g.clearTimeout(this.i),this.i=null),this.f=0);fl(this)};
h.eh=function(){return!(!window||!Array)};
h.af=function(){return this.l};
function fl(a){var b=zi(189,y(a.gh,a));a.g.setTimeout(b,0)}
h.gh=function(){if(0==this.f&&this.j.length){var a=this.j.shift();this.f=2;var b=zi(190,y(this.ee,this,a));a.qb.setTimeout(b,0);fl(this)}};
h.ee=function(a){this.f=0;a.ua()};
function gl(a){try{return a.sz()}catch(b){return!1}}
cl.prototype.nq=cl.prototype.Qe;cl.prototype.nqa=cl.prototype.gd;cl.prototype.al=cl.prototype.Og;cl.prototype.rl=cl.prototype.ce;cl.prototype.sz=cl.prototype.eh;cl.prototype.tc=cl.prototype.af;function el(a,b){this.ua=a;this.qb=b}
;function hl(a,b,c,d,e){var f={};f.context=a;f.msg=b.substring(0,512);c&&(f.file=c);0<d&&(f.line=d.toString());f.sw=1;il(f,e);return!0}
function il(a,b,c){try{if(Math.random()<(b||.01)){var d="https://pagead2.googlesyndication.com/pagead/gen_204?id=jserror"+jl(a);d=d.substring(0,2E3);var e=n.fetch(d,{mode:"no-cors"});c&&e.then(c,c)}}catch(f){}}
function jl(a){var b="";Object.getOwnPropertyNames(a).forEach(function(c){var d=a[c];if(0===d||d)b+="&"+c+"="+encodeURIComponent(String(d))});
return b}
;var kl="adsafe channel client description_url durl google_ad_channel h h_ch iu kfa page_slots prev_ius prev_slotnames slotname tfcd video_url_to_fetch w".split(" ");
function ll(a){var b=!0;try{var c=a()}catch(g){try{var d=wi(g);a="";g.fileName&&(a=g.fileName);var e=-1;g.lineNumber&&(e=g.lineNumber);b=hl("cache_key.js",d,a,e)}catch(k){d=k;try{var f=wi(d);a="";d.fileName&&(a=d.fileName);e=-1;d.lineNumber&&(e=d.lineNumber);hl("pAR",f,a,e,void 0)}catch(l){il({context:"mRE",msg:l.toString()+"\n"+(l.stack||""),sw:1},void 0,void 0)}}if(!b)throw g;}finally{}return c?String(c):""}
function ml(a){a=a.url;return Zf(r(a)?a:"")||""}
function nl(a,b){B(kl,function(c){var d=a[c];if(d||0===d||!1===d)Aa(d)&&(d=Number(d)),b(c,d)})}
function ol(a){return ll(function(){var b={};nl(a,function(d,e){return b[d]=e});
b.domain=ml(a);var c=dg(b);return String(pg(c))})}
;var pl=(new Date).getTime();function ql(a,b,c){a-=b;return a>=(void 0===c?1E5:c)?"M":0<=a?a:"-M"}
;zd("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");var rl=/^\.google\.(com?\.)?[a-z]{2,3}$/,sl=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,tl=n,ul,vl;function wl(){tl=n;ul=tl.googleToken=tl.googleToken||{};var a=z();ul[1]&&ul[3]>a&&0<ul[2]||(ul[1]="",ul[2]=-1,ul[3]=-1,ul[4]="",ul[6]="");vl=tl.googleIMState=tl.googleIMState||{};a=vl[1];rl.test(a)&&!sl.test(a)||(vl[1]=".google.com");Ja(vl[5])||(vl[5]=[]);Aa(vl[6])||(vl[6]=!1);Ja(vl[7])||(vl[7]=[]);Ba(vl[8])||(vl[8]=0)}
;Md("script");function xl(a){try{var b=a.screenX;var c=a.screenY}catch(k){}try{var d=a.outerWidth;var e=a.outerHeight}catch(k){}try{var f=a.innerWidth;var g=a.innerHeight}catch(k){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,g]}
;var yl=/^blogger$/,zl=/^wordpress(.|\s|$)/i,Al=/^joomla!/i,Bl=/^drupal/i,Cl=/\/wp-content\//,Dl=/\/wp-content\/plugins\/advanced-ads/,El=/\/wp-content\/themes\/genesis/,Fl=/\/wp-content\/plugins\/genesis/;
function Gl(a){for(var b=a.getElementsByTagName("script"),c=b.length,d=0;d<c;++d){var e=b[d];if(e.hasAttribute("src")){e=e.getAttribute("src");if(Dl.test(e))return 5;if(Fl.test(e))return 6}}b=a.getElementsByTagName("link");c=b.length;for(d=0;d<c;++d)if(e=b[d],e.hasAttribute("href")&&(e=e.getAttribute("href"),El.test(e)||Fl.test(e)))return 6;a=a.getElementsByTagName("meta");d=a.length;for(e=0;e<d;++e){var f=a[e];if("generator"==f.getAttribute("name")&&f.hasAttribute("content")){f=f.getAttribute("content");
if(yl.test(f))return 1;if(zl.test(f))return 2;if(Al.test(f))return 3;if(Bl.test(f))return 4}}for(a=0;a<c;++a)if(d=b[a],"stylesheet"==d.getAttribute("rel")&&d.hasAttribute("href")&&(d=d.getAttribute("href"),Cl.test(d)))return 2;return 0}
;function Hl(){this.g=[];this.f=-1}
Hl.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Hl.prototype.get=function(a){return!!this.g[a]};
function Il(a){-1==a.f&&(a.f=db(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Jl(){var a=new Hl;n.SVGElement&&n.document.createElementNS&&a.set(0);var b=sg();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);n.crypto&&n.crypto.subtle&&a.set(3);n.TextDecoder&&n.TextEncoder&&a.set(4);return Il(a)}
;var Kl=zb(function(){if(E)return ie("10.0");var a=rf("DIV"),b=zg(),c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");b=ed("div",{style:c});pd(a,b);a=a.firstChild;b=a.style[Id("transition")];return""!=("undefined"!==typeof b?b:a.style[Fg(a,"transition")]||"")});for(var Ll="margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),Ml=0;Ml<Ll.length;Ml++);Ll="margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");for(var Nl=0;Nl<Ll.length;Nl++);var Ol=/[+, ]/;
function Pl(a){var b=a.f,c=xg().document,d={},e=xg(),f;var g=Yi(xg(),!1).qb;var k=fk(g);a:{var l=xg(),m=b.google_ad_width||l.google_ad_width,q=b.google_ad_height||l.google_ad_height;if(l&&l.top==l)var u=!1;else{var v=c.documentElement;if(m&&q){var x=1,N=1;l.innerHeight?(x=l.innerWidth,N=l.innerHeight):v&&v.clientHeight?(x=v.clientWidth,N=v.clientHeight):c.body&&(x=c.body.clientWidth,N=c.body.clientHeight);if(N>2*q||x>2*m){u=!1;break a}}u=!0}}var fa=f=u,ja=k.Cc,rc=xg();var Oa=rc.top==rc?0:mg(rc.top)?
1:2;var Za=4;fa||1!=Oa?fa||2!=Oa?fa&&1==Oa?Za=7:fa&&2==Oa&&(Za=8):Za=6:Za=5;ja&&(Za|=16);var ze=""+Za;var Ae=gk();var tn=g,un=f,vn=!!b.google_page_url;d.google_iframing=ze;0!=Ae&&(d.google_iframing_environment=Ae);if(!vn&&"ad.yieldmanager.com"==c.domain){for(var hh=c.URL.substring(c.URL.lastIndexOf("http"));-1<hh.indexOf("%");)try{hh=decodeURIComponent(hh)}catch(jd){break}b.google_page_url=hh;vn=!!hh}vn?(d.google_page_url=b.google_page_url,d.google_page_location=(un?c.referrer:c.URL)||"EMPTY"):(un&&
mg(e.top)&&c.referrer&&e.top.document.referrer===c.referrer?d.google_page_url=e.top.document.URL:d.google_page_url=un?c.referrer:c.URL,d.google_page_location=null);a:{if(c.URL==d.google_page_url)try{var ru=Date.parse(c.lastModified)/1E3;break a}catch(jd){}ru=null}d.google_last_modified_time=ru;if(tn==tn.top)var su=tn.document.referrer;else{var tu=$g();su=tu&&tu.referrer||""}d.google_referrer_url=su;ek(d,b);var vj=b.google_page_location||b.google_page_url;"EMPTY"==vj&&(vj=b.google_page_url);if(vj){var sc=
vj.toString();0==sc.indexOf("http://")?sc=sc.substring(7,sc.length):0==sc.indexOf("https://")&&(sc=sc.substring(8,sc.length));var wn=sc.indexOf("/");-1==wn&&(wn=sc.length);var uu=sc.substring(0,wn);if(ik.test(uu))var xn=!1;else{var tf=uu.split("."),wj=!1;3<=tf.length&&(wj=tf[tf.length-3]in hk);2<=tf.length&&(wj=wj||tf[tf.length-2]in hk);xn=wj}}else xn=!1;var vu=xn?"pagead2.googlesyndication.com":"googleads.g.doubleclick.net",D={};Ql(a,D);wl();D.adsid=ul[1];wl();D.pucrd=ul[6];var bc=a.f,ih=a.f;D.dt=
pl;ih.google_async_iframe_id&&ih.google_bpp&&(D.bpp=ih.google_bpp);var wu,kF=xg();a:{var lF=xg();try{var uf=lF.performance;if(uf&&uf.timing&&uf.now){var xu=uf.timing.navigationStart+Math.round(uf.now())-uf.timing.domLoading;break a}}catch(jd){}xu=null}var yu=xu;(wu=yu?ql(yu,kF.Date.now()-pl,1E6):null)&&(D.bdt=wu);var zu=ih.google_iframe_start_time;if(Ba(zu)){ih.google_iframe_start_time=null;var Au=ql(zu,pl)}else Au=null;var Bu=Au;null!=Bu&&(D.fdt=Bu);D.idt=ql(0,pl);var Cu=a.f;D.shv="r20100101";D.cbv=
"/r20100101".replace("/","");/^\w{1,3}$/.test(Cu.google_loader_used)&&(D.saldr=Cu.google_loader_used);var yn=$g(a.pubWin);if(yn){D.is_amp=1;var zn=yn||$g();D.amp_v=zn&&zn.mode?+zn.mode.version||null:null;var An=yn||$g();if(An&&An.container){for(var Du=An.container.split(","),Eu=[],Bn=0;Bn<Du.length;Bn++)Eu.push(Zg[Du[Bn]]||"x");var Fu=Eu.join()}else Fu=null;var Gu=Fu;Gu&&(D.act=Gu)}xg()==window.top&&(D.abxe=1);var Od=bj(),Hu=ej(Od,8,{}),xj=bc.google_ad_section;Hu[xj]&&(D.prev_fmts=Hu[xj]);var Iu=
ej(Od,9,{});Iu[xj]&&(D.prev_slotnames=Iu[xj].toLowerCase());var Cn=ej(Od,8,{}),Dn=ej(Od,9,{}),vf=bc.google_ad_section,En=bc.google_ad_format,Fn=bc.google_ad_slot;En?Cn[vf]=Cn[vf]?Cn[vf]+(","+En):En:Fn&&(Dn[vf]=Dn[vf]?Dn[vf]+(","+Fn):Fn);var Ju=ej(Od,15,0);0<Ju&&(D.nras=String(Ju));var Ku=xg(),Lu=$g(Ku);if(Lu){var Gn=Lu||$g();if(Gn){var Mu=Gn.pageViewId,Nu=Gn.clientId;r(Nu)&&(Mu+=Nu.replace(/\D/g,"").substr(0,6));var Ou=Mu}else Ou=null;var Pu=+Ou}else{var Qu=Yi(Ku,!1).qb,Hn=Qu.google_global_correlator;
Hn||(Qu.google_global_correlator=Hn=1+Math.floor(Math.random()*Math.pow(2,43)));Pu=Hn}D.correlator=ej(Od,7,Pu);hi().g["21060549"]&&(D.rume=1);if(bc.google_ad_channel){for(var Ru=ej(Od,10,{}),Su="",Tu=bc.google_ad_channel.split(Ol),In=0;In<Tu.length;In++){var Jn=Tu[In];Ru[Jn]?Su+=Jn+"+":Ru[Jn]=!0}D.pv_ch=Su}if(bc.google_ad_host_channel){for(var yj=ej(Od,11,[]),Uu=bc.google_ad_host_channel.split("|"),zj=-1,Kn=[],kd=0;kd<Uu.length;kd++){var Vu=Uu[kd].split(Ol);yj[kd]||(yj[kd]={});for(var jh="",Ln=0;Ln<
Vu.length;Ln++){var Aj=Vu[Ln];""!==Aj&&(yj[kd][Aj]?jh+="+"+Aj:yj[kd][Aj]=!0)}jh=jh.slice(1);Kn[kd]=jh;""!==jh&&(zj=kd)}var Mn="";if(-1<zj){for(var Nn=0;Nn<zj;Nn++)Mn+=Kn[Nn]+"|";Mn+=Kn[zj]}D.pv_h_ch=Mn}D.frm=bc.google_iframing;D.ife=bc.google_iframing_environment;var Wu=bc.google_ad_client;try{var Xu=Zi(),Bj=Xu.google_prev_clients;Bj||(Bj=Xu.google_prev_clients={});if(Wu in Bj)var On=1;else Bj[Wu]=!0,On=2}catch(jd){On=0}D.pv=On;var Pn=a.pubWin.document,Yu=a.f,Zu="";try{Zu=Pn.cookie}catch(jd){}var $u=
Pn.domain,kh=Zu,Cj=a.pubWin.screen,mF=Pn.referrer,nF=fh();if($g())var av=xg().gaGlobal||{};else{var Qn=Math.round((new Date).getTime()/1E3),Rn=Yu.google_analytics_domain_name,Dj="undefined"==typeof Rn?Sj("auto",$u):Sj(Rn,$u),oF=-1<kh.indexOf("__utma="+Dj+"."),pF=-1<kh.indexOf("__utmb="+Dj),Sn;if(!(Sn=dj().gaGlobal)){var qF={};Sn=dj().gaGlobal=qF}var Ra=Sn,bv=!1;if(oF){var Tn=kh.split("__utma="+Dj+".")[1].split(";")[0].split(".");pF?Ra.sid=Tn[3]+"":Ra.sid||(Ra.sid=Qn+"");Ra.vid=Tn[0]+"."+Tn[1];Ra.from_cookie=
!0}else{Ra.sid||(Ra.sid=Qn+"");if(!Ra.vid){bv=!0;var rF=Math.round(2147483647*Math.random()),cv=nF,dv,Be=[sj.appName,sj.version,sj.language?sj.language:sj.browserLanguage,sj.platform,sj.userAgent,tj()?1:0].join("");if(Cj)Be+=Cj.width+"x"+Cj.height+Cj.colorDepth;else if(n.java&&n.java.awt){var ev=n.java.awt.Toolkit.getDefaultToolkit().getScreenSize();Be+=ev.screen.width+"x"+ev.screen.height}Be=Be+kh+(mF||"");for(dv=Be.length;0<cv;)Be+=cv--^dv++;Ra.vid=(rF^uj(Be)&2147483647)+"."+Qn}Ra.from_cookie=!1}if(!Ra.cid){b:{var wf=
Rn,fv=999;wf&&(wf=0==wf.indexOf(".")?wf.substr(1):wf,fv=(""+wf).split(".").length);for(var gv,hv=999,Ej=kh.split(";"),lh=0;lh<Ej.length;lh++){var Fj=Tj.exec(Ej[lh])||Uj.exec(Ej[lh])||Vj.exec(Ej[lh]);if(Fj){var Un=Fj[1]||0;if(Un==fv){var iv=Fj[2];break b}Un<hv&&(hv=Un,gv=Fj[2])}}iv=gv}var mh=iv;bv&&mh&&-1!=mh.search(/^\d+\.\d+$/)?Ra.vid=mh:mh!=Ra.vid&&(Ra.cid=mh)}Ra.dh=Dj;Ra.hid||(Ra.hid=Math.round(2147483647*Math.random()));av=Ra}var nh=av;D.ga_vid=nh.vid;D.ga_sid=nh.sid;D.ga_hid=nh.hid;D.ga_fc=nh.from_cookie;
D.ga_cid=nh.cid;D.ga_wpids=Yu.google_analytics_uacct;var oh=a.pubWin,ph=new Mh(oh);oh.location&&oh.location.ancestorOrigins&&(D.iag=Oh(ph));D.icsg=Qh(ph);var Vn=ph.f[0].depth;Vn&&0<Vn&&(D.nhd=Vn);D.dssz=oh.document.scripts?oh.document.scripts.length:0;D.mdo=Rh(ph);D.mso=Sh(ph);var Wn=bc.google_ad_layout;Wn&&0<=bl[Wn]&&(D.rplot=bl[Wn]);gh(D);var jv=$g(),Gj=jv&&jv.initialIntersection,Xn=(Gj&&Ma(Gj.rootBounds)?new Ye(Gj.rootBounds.width,Gj.rootBounds.height):null)||bk(a.pubWin.top);Xn&&(D.biw=Xn.width,
D.bih=Xn.height);var kv=a.pubWin;if(kv.top!=kv){var Yn=bk(a.pubWin);Yn&&(D.isw=Yn.width,D.ish=Yn.height)}var Ce=a.pubWin;if(null!==Ce&&Ce!=Ce.top){var Hj=[Ce.document.URL];Ce.name&&Hj.push(Ce.name);var lv=bk(Ce,!1);Hj.push(lv.width.toString());Hj.push(lv.height.toString());var mv=pg(Hj.join(""))}else mv=0;var nv=mv;0!==nv&&(D.ifk=nv);var Ij=wg(a.pubWin);if(Ij&&Ij.document){var Jj=Ij.document,qh=Ij;qh=void 0===qh?n:qh;var ov=Jj.scrollingElement||("CSS1Compat"==Jj.compatMode?Jj.documentElement:Jj.body);
var pv=new We(qh.pageXOffset||ov.scrollLeft,qh.pageYOffset||ov.scrollTop)}else pv=new We(-12245933,-12245933);var qv=pv;D.scr_x=qv.x;D.scr_y=qv.y;var rv=hi(),sv=oj(rv),Kj=a.f.google_eids;if(Ja(Kj)){a.g|=64;for(var Lj=0;Lj<Kj.length;Lj++)r(Kj[Lj])&&sv.push(Kj[Lj])}D.eid=sv.join();var tv=nj(rv),uv=a.f.google_loeid;r(uv)&&(a.g|=4096,qb(tv,uv.split(",")));D.loeid=tv.join();a.l&&(D.oid=a.l);if("423550201"===gi(139)){var Zn=wg(a.pubWin);if(Zn){var $n=Qi(Zn);D.pg_h=$n.scrollHeight==Qi(Zn).clientHeight?$n.offsetHeight:
$n.scrollHeight}}var sF=bj(),vv=ej(sF,20,{})[a.f.google_ad_client];vv&&(D.psts=vv.join());var Cb=a.f,Mj=a.pubWin,wv=Zi();D.ref=Cb.google_referrer_url;D.loc=Cb.google_page_location;var Nj=$g(a.pubWin);if(Nj&&Ma(Nj.data)&&r(Nj.data.type)){var ao=Nj.data.type.toLowerCase();var xv="doubleclick"==ao||"adsense"==ao?null:ao}else xv=null;var yv=xv;yv&&(D.apn=yv.substr(0,10));var rh=fk(wv);D.url||D.loc||!rh.url||(D.url=rh.url,rh.Cc||(D.usrc=1));rh.url!=(D.loc||D.url)&&(D.top=rh.url);Cb.google_async_rrc&&(D.rr=
Cb.google_async_rrc);D.rx=0;var zv;if(dl&&gl(dl))var Av=dl;else{var bo=Zi(),ld=bo.google_jobrunner;Av=ld&&(ah(ld,"object")||ah(ld,"function"))&&gl(ld)&&ch(ld.nq)&&ch(ld.nqa)&&ch(ld.al)&&ch(ld.rl)?dl=ld:bo.google_jobrunner=dl=new cl(bo)}var Bv=Av;(zv=ch(Bv.tc)?Bv.tc():null)&&(D.jtc=zv);0<=a.j&&(D.eae=a.j);var Cv=$k(Cb,a.i);Cv&&(D.fc=Cv);var Dv=Cb.google_ad_format;if(!(Dv&&0<Dv.indexOf("_0ads"))){var sh=(a.iframeWin||a.pubWin).document,Ev="";if(sh.documentMode){var De=(new $e(sh)).createElement("IFRAME");
De.frameBorder="0";De.style.height=0;De.style.width=0;De.style.position="absolute";if(sh.body){sh.body.appendChild(De);try{var Oj=De.contentWindow.document;Oj.open();Oj.write("<!DOCTYPE html>");Oj.close();Ev+=Oj.documentMode}catch(jd){}sh.body.removeChild(De)}}D.docm=Ev}D.brdim=xl(Mj).join();var tF="618018086"===gi(67),Pj=0;!p(n.postMessage)&&(Pj|=1);if(tF){var Fv=$g(Mj);Fv&&Fv.observeIntersection&&(Pj|=256);var Gv=Mj.document;Gv&&La(Gv.elementFromPoint)&&(Pj|=1024)}var Hv=Pj;0<Hv&&(D.osd=Hv);D.vis=
dk(Mj.document);if(!kk(Cb)){a:{var th=Number(Cb.google_ad_width),uh=Number(Cb.google_ad_height);if(!(0<th&&0<uh)){b:{try{var co=String(Cb.google_ad_format);if(co&&co.match){var eo=co.match(/(\d+)x(\d+)/i);if(eo){var Iv=parseInt(eo[1],10),Jv=parseInt(eo[2],10);if(0<Iv&&0<Jv){var Kv={width:Iv,height:Jv};break b}}}}catch(jd){}Kv=null}var fo=Kv;if(!fo){var Lv=null;break a}th=0<th?th:fo.width;uh=0<uh?uh:fo.height}Lv={width:th,height:uh}}var go=Lv;if(go){var Mv=0;a:{try{var Nv=Cb.google_async_iframe_id,
Ov=xg().document;if(Nv)var Pv=Ov.getElementById(Nv);else{var Qv=Ov.getElementsByTagName("script"),Rv=Qv[Qv.length-1];Pv=Rv&&Rv.parentNode||null}var Sv=Pv;if(Sv){for(var vh=[],Qj=Sv,uF=0,vF=z();100>=++uF&&50>z()-vF&&(Qj=Rl(Qj));)1===Qj.nodeType&&vh.push(Qj);b:{for(var ho=0;ho<vh.length;ho++){c:{var md=vh[ho];try{if(md.parentNode&&0<md.offsetWidth&&0<md.offsetHeight&&md.style&&"none"!==md.style.display&&"hidden"!==md.style.visibility&&(!md.style.opacity||0!==Number(md.style.opacity))){var Tv=md.getBoundingClientRect();
var Uv=0<Tv.right&&0<Tv.bottom;break c}}catch(jd){}Uv=!1}if(!Uv){var Vv=!1;break b}}Vv=!0}if(Vv){b:{for(var xF=z(),yF=/^html|body$/i,zF=/^fixed/i,io=0;io<vh.length&&50>z()-xF;io++){var Rj=vh[io];if(!yF.test(Rj.tagName)&&zF.test(Rj.style.position||Jg(Rj))){var jo=Rj;break b}}jo=null}break a}}}catch(jd){}jo=null}var ko=jo;ko&&ko.offsetWidth*ko.offsetHeight<=4*go.width*go.height&&(Mv=1);D.pfx=Mv}}if("26835106"===gi(41)&&a.i){try{var Wv=a.i.document.getElementsByTagName("head")[0];var Xv=Wv?Gl(Wv):0}catch(jd){Xv=
0}var Yv=Xv;0!==Yv&&(D.cms=Yv)}var Zv=lk(wv,Cb);0!=Zv&&(D.ifsl=Zv);"r20100101"!==Cb.google_lrv&&(D.alvm=Cb.google_lrv||"none");D.fu=a.g;D.bc=Jl();wl();D.jar=ul[4];D.url&&0==String(D.url).lastIndexOf("https:",0)&&Tc()&&0<=oc(Vc(),57)&&(D.osw_key=ol(D));var $v=a.f,AF=$v.google_ad_channel,aw="/pagead/ads?";"ca-pub-6219811747049371"===$v.google_ad_client&&Sl.test(AF)&&(aw="/pagead/lopri?");var lo=ck(vu,aw);3===dk(a.pubWin.document)&&(a.B=!0,a.w=lo,lo=ck(vu,"/pagead/blank.gif#?"));var CF=eh(D,lo+"");return b.google_ad_url=
CF}
function Rl(a){try{if(a.parentNode)return a.parentNode}catch(e){return null}if(9===a.nodeType)a:{try{var b=a?nf(a):window;if(b){var c=b.frameElement;if(c&&mg(b.parent)){var d=c;break a}}}catch(e){}d=null}else d=null;return d}
function Ql(a,b){var c=a.f;bh(Bh,function(d,e){b[d]=c[e]});
bh(Ah,function(d,e){b[d]=c[e]});
bh(Dh,function(d,e){b[d]=c[e]});
kk(c)&&(b.fa=jk(c))}
var Sl=/YtLoPri/;function Tl(a){this.f=a;a.then(y(function(){},this))}
function Ul(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=Vl(a,b).then(function(f){return f.apply(null,d)});
return new Tl(e)}
var Wl={};function Vl(a,b){var c=Wl[b];if(c)return c;c=(c=w(b))?Hk(c):(new Ck(function(d,e){var f=(new $e(document)).createElement("SCRIPT");f.async=!0;ud(f,dc(Wb(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};
f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){var d=w(b);
if(!d)throw Error("Failed to load "+b+" from "+a);return d});
return Wl[b]=c}
function Xl(a,b,c){a.f.then(function(d){var e=d[b];if(!e)throw Error("Method not found: "+b);return e.apply(d,c)})}
;function Yl(a){this.f=a}
function Zl(a,b){var c=b||{};c=Ul($l,"help.service.Lazy.create",a,{apiKey:c.apiKey||c.apiKey,environment:c.fj||c.environment,helpCenterPath:c.ij||c.helpCenterPath,locale:c.locale||c.locale||"en".replace(/-/g,"_"),nonce:c.nonce||c.nonce,productData:c.productData||c.productData,receiverUri:c.nj||c.receiverUri,renderApiUri:c.pj||c.renderApiUri,theme:c.theme||c.theme,window:c.window||c.window});return new Yl(c)}
var $l=new Tb(Ub,"https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");Yl.prototype.i=function(a){Xl(this.f,"startFeedback",arguments)};
Yl.prototype.j=function(a){Xl(this.f,"startHelp",arguments)};
Yl.prototype.g=function(a){Xl(this.f,"loadChatSupport",arguments)};function am(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var bm=window,cm=document,dm=bm.location;function em(){}
var fm=/\[native code\]/;function gm(a,b,c){return a[b]=a[b]||c}
function hm(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function im(){var a;if((a=Object.create)&&fm.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var jm=gm(bm,"gapi",{});var km;km=gm(bm,"___jsl",im());gm(km,"I",0);gm(km,"hel",10);function lm(){var a=dm.href;if(km.dpo)var b=km.h;else{b=km.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function mm(a){var b=gm(km,"PQ",[]);km.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function nm(a){return gm(gm(km,"H",im()),a,im())}
;function om(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(u){for(var v=g,x=0;64>x;x+=4)v[x/4]=u[x]<<24|u[x+1]<<16|u[x+2]<<8|u[x+3];for(x=16;80>x;x++)u=v[x-3]^v[x-8]^v[x-14]^v[x-16],v[x]=(u<<1|u>>>31)&4294967295;u=e[0];var N=e[1],fa=e[2],ja=e[3],rc=e[4];for(x=0;80>x;x++){if(40>x)if(20>x){var Oa=ja^N&(fa^ja);var Za=1518500249}else Oa=N^fa^ja,Za=1859775393;else 60>x?(Oa=N&fa|ja&(N|fa),Za=2400959708):(Oa=N^fa^ja,Za=3395469782);Oa=((u<<5|u>>>27)&4294967295)+Oa+rc+Za+v[x]&4294967295;rc=ja;ja=fa;fa=(N<<30|N>>>2)&4294967295;N=u;u=Oa}e[0]=e[0]+u&4294967295;
e[1]=e[1]+N&4294967295;e[2]=e[2]+fa&4294967295;e[3]=e[3]+ja&4294967295;e[4]=e[4]+rc&4294967295}
function c(u,v){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var x=[],N=0,fa=u.length;N<fa;++N)x.push(u.charCodeAt(N));u=x}v||(v=u.length);x=0;if(0==m)for(;x+64<v;)b(u.slice(x,x+64)),x+=64,q+=64;for(;x<v;)if(f[m++]=u[x++],q++,64==m)for(m=0,b(f);x+64<v;)b(u.slice(x,x+64)),x+=64,q+=64}
function d(){var u=[],v=8*q;56>m?c(k,56-m):c(k,64-(m-56));for(var x=63;56<=x;x--)f[x]=v&255,v>>>=8;b(f);for(x=v=0;5>x;x++)for(var N=24;0<=N;N-=8)u[v++]=e[x]>>N&255;return u}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,q;a();return{reset:a,update:c,digest:d,Me:function(){for(var u=d(),v="",x=0;x<u.length;x++)v+="0123456789ABCDEF".charAt(Math.floor(u[x]/16))+"0123456789ABCDEF".charAt(u[x]%16);return v}}}
;function pm(a,b,c){var d=[],e=[];if(1==(Ja(c)?2:1))return e=[b,a],B(d,function(k){e.push(k)}),qm(e.join(" "));
var f=[],g=[];B(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(k){e.push(k)});
a=qm(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qm(a){var b=om();b.update(a);return b.Me().toLowerCase()}
;function rm(a){var b=am(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new Me(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new Me(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&b&&c?[c,pm(am(d),b,a||null)].join(" "):null}return null}
;var sm=gm(km,"perf",im());gm(sm,"g",im());var tm=gm(sm,"i",im());gm(sm,"r",[]);im();im();function um(a,b,c){b&&0<b.length&&(b=vm(b),c&&0<c.length&&(b+="___"+vm(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=gm(tm,"_p",im()),gm(b,c,im())[a]=(new Date).getTime(),b=sm.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function vm(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var wm=im(),xm=[];function ym(a){throw Error("Bad hint"+(a?": "+a:""));}
xm.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?km[b]=gm(km,b,[]).concat(c):gm(km,b,c)}if(b=a.u)a=gm(km,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var zm=/^(\/[a-zA-Z0-9_\-]+)+$/,Am=[/\/amp\//,/\/amp$/,/^\/amp$/],Bm=/^[a-zA-Z0-9\-_\.,!]+$/,Cm=/^gapi\.loaded_[0-9]+$/,Dm=/^[a-zA-Z0-9,._-]+$/;function Em(a,b,c,d){var e=a.split(";"),f=e.shift(),g=wm[f],k=null;g?k=g(e,b,c,d):ym("no hint processor for: "+f);k||ym("failed to generate load url");b=k;c=b.match(Fm);(d=b.match(Gm))&&1===d.length&&Hm.test(b)&&c&&1===c.length||ym("failed sanity: "+a);return k}
function Im(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=Jm(a);Cm.test(c)||ym("invalid_callback");b=Km(b);d=d&&d.length?Km(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Oc?"/am="+e(a.Oc):"",a.be?"/rs="+e(a.be):"",a.Ge?"/t="+e(a.Ge):"","/cb=",e(c)].join("")}
function Jm(a){"/"!==a.charAt(0)&&ym("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))ym("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");zm.test(b)||ym("invalid_prefix");c=0;for(d=Am.length;c<d;++c)Am[c].test(b)&&ym("invalid_prefix");c=Lm(a,
"k",!0);d=Lm(a,"am");e=Lm(a,"rs");a=Lm(a,"t");return{pathPrefix:b,version:c,Oc:d,be:e,Ge:a}}
function Km(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Dm.test(e)&&b.push(e)}return b.join(",")}
function Lm(a,b,c){a=a[b];!a&&c&&ym("missing: "+b);if(a){if(Bm.test(a))return a;ym("invalid: "+b)}return null}
var Hm=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Gm=/\/cb=/g,Fm=/\/\//g;function Mm(){var a=lm();if(!a)throw Error("Bad hint");return a}
wm.m=function(a,b,c,d){(a=a[0])||ym("missing_hint");return"https://apis.google.com"+Im(a,b,c,d)};
var Nm=decodeURI("%73cript"),Om=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Pm(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Qm(){var a=km.nonce;return void 0!==a?a&&a===String(a)&&a.match(Om)?a:km.nonce=null:cm.querySelector?(a=cm.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Om)?km.nonce=a:km.nonce=null):null:null}
function Rm(a){if("loading"!=cm.readyState)Sm(a);else{var b=Qm(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+Nm+' src="'+encodeURI(a)+'"'+c+"></"+Nm+">";cm.write(a)}}
function Sm(a){var b=cm.createElement(Nm);b.setAttribute("src",a);a=Qm();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=cm.getElementsByTagName(Nm)[0])?a.parentNode.insertBefore(b,a):(cm.head||cm.body||cm.documentElement).appendChild(b)}
function Tm(a,b){var c=b&&b._c;if(c)for(var d=0;d<xm.length;d++){var e=xm[d][0],f=xm[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Um(a,b,c){Vm(function(){var d=b===lm()?gm(jm,"_",im()):im();d=gm(nm(b),"_",d);a(d)},c)}
function Wm(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Tm(a,c);var d=a?a.split(":"):[],e=c.h||Mm(),f=gm(km,"ah",im());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var l=k.split(".");l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,q=m;m&&m.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(k)}var u=g.length;if(1<u){var v=c.callback;v&&(c.callback=function(){0==--u&&v()})}for(;d=g.shift();)Xm(d.features,c,d.hint)}else Xm(d||[],c,e)}
function Xm(a,b,c){function d(Oa,Za){if(u)return 0;bm.clearTimeout(q);v.push.apply(v,N);var ze=((jm||{}).config||{}).update;ze?ze(f):f&&gm(km,"cu",[]).push(f);if(Za){um("me0",Oa,x);try{Um(Za,c,m)}finally{um("me1",Oa,x)}}return 1}
a=hm(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var q=null,u=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=gm(nm(c),"r",[]).sort();var v=gm(nm(c),"L",[]).sort(),x=[].concat(l);0<g&&(q=bm.setTimeout(function(){u=!0;k()},g));
var N=Pm(a,v);if(N.length){N=Pm(a,l);var fa=gm(km,"CP",[]),ja=fa.length;fa[ja]=function(Oa){function Za(){var Ae=fa[ja+1];Ae&&Ae()}
function ze(Ae){fa[ja]=null;d(N,Oa)&&mm(function(){e&&e();Ae()})}
if(!Oa)return 0;um("ml1",N,x);0<ja&&fa[ja-1]?fa[ja]=function(){ze(Za)}:ze(Za)};
if(N.length){var rc="loaded_"+km.I++;jm[rc]=function(Oa){fa[ja](Oa);jm[rc]=null};
a=Em(c,N,"gapi."+rc,l);l.push.apply(l,N);um("ml0",N,x);b.sync||bm.___gapisync?Rm(a):Sm(a)}else fa[ja](em)}else d(N)&&e&&e()}
function Vm(a,b){if(km.hee&&0<km.hel)try{return a()}catch(c){b&&b(c),km.hel--,Wm("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
jm.load=function(a,b){return Vm(function(){return Wm(a,b)})};Rb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Ym(a,b){this.type=a;this.currentTarget=this.target=b;this.f=!1;this.de=!0}
Ym.prototype.stopPropagation=function(){this.f=!0};
Ym.prototype.preventDefault=function(){this.de=!1};var Zm=!E||je(9),$m=E&&!ie("9"),an=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{n.addEventListener("test",Ga,b),n.removeEventListener("test",Ga,b)}catch(c){}return a}();var bn;bn=Vd?"webkitTransitionEnd":Rd?"otransitionend":"transitionend";function cn(a,b){Ym.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
A(cn,Ym);var dn={2:"touch",3:"pen",4:"mouse"};
cn.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?Ud&&(Nd(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=r(a.pointerType)?a.pointerType:dn[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
cn.prototype.stopPropagation=function(){cn.J.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
cn.prototype.preventDefault=function(){cn.J.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$m)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var en="closure_listenable_"+(1E6*Math.random()|0),fn=0;function gn(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.Rb=e;this.key=++fn;this.kb=this.Kb=!1}
function hn(a){a.kb=!0;a.listener=null;a.f=null;a.src=null;a.Rb=null}
;function jn(a){this.src=a;this.listeners={};this.f=0}
jn.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=kn(a,b,d,e);-1<g?(b=a[g],c||(b.Kb=!1)):(b=new gn(b,this.src,f,!!d,e),b.Kb=c,a.push(b));return b};
jn.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=kn(e,b,c,d);return-1<b?(hn(e[b]),mb(e,b),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ln(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(hn(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function kn(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.kb&&f.listener==b&&f.capture==!!c&&f.Rb==d)return e}return-1}
;var mn="closure_lm_"+(1E6*Math.random()|0),nn={},on=0;function pn(a,b,c,d,e){if(d&&d.once)return qn(a,b,c,d,e);if(Ja(b)){for(var f=0;f<b.length;f++)pn(a,b[f],c,d,e);return null}c=rn(c);return a&&a[en]?a.i.add(String(b),c,!1,Ma(d)?!!d.capture:!!d,e):sn(a,b,c,!1,d,e)}
function sn(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,k=mo(a);k||(a[mn]=k=new jn(a));c=k.add(b,c,d,g,f);if(c.f)return c;d=no();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)an||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(oo(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");on++;return c}
function no(){var a=po,b=Zm?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function qn(a,b,c,d,e){if(Ja(b)){for(var f=0;f<b.length;f++)qn(a,b[f],c,d,e);return null}c=rn(c);return a&&a[en]?a.i.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):sn(a,b,c,!0,d,e)}
function qo(a,b,c,d,e){if(Ja(b))for(var f=0;f<b.length;f++)qo(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=rn(c),a&&a[en])?a.i.remove(String(b),c,d,e):a&&(a=mo(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=kn(b,c,d,e)),(c=-1<a?b[a]:null)&&ro(c))}
function ro(a){if(!Ba(a)&&a&&!a.kb){var b=a.src;if(b&&b[en])ln(b.i,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(oo(c),d):b.addListener&&b.removeListener&&b.removeListener(d);on--;(c=mo(b))?(ln(c,a),0==c.f&&(c.src=null,b[mn]=null)):hn(a)}}}
function oo(a){return a in nn?nn[a]:nn[a]="on"+a}
function so(a,b,c,d){var e=!0;if(a=mo(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.kb&&(f=to(f,d),e=e&&!1!==f)}return e}
function to(a,b){var c=a.listener,d=a.Rb||a.src;a.Kb&&ro(a);return c.call(d,b)}
function po(a,b){if(a.kb)return!0;if(!Zm){var c=b||w("window.event"),d=new cn(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var k=so(c[g],f,!0,d);e=e&&k}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],k=so(c[g],f,!1,d),e=e&&k}return e}return to(a,new cn(b,this))}
function mo(a){a=a[mn];return a instanceof jn?a:null}
var uo="__closure_events_fn_"+(1E9*Math.random()>>>0);function rn(a){if(La(a))return a;a[uo]||(a[uo]=function(b){return a.handleEvent(b)});
return a[uo]}
;function vo(){Ai.call(this);this.i=new jn(this);this.mc=this;this.ja=null}
A(vo,Ai);vo.prototype[en]=!0;h=vo.prototype;h.Ic=function(a){this.ja=a};
h.addEventListener=function(a,b,c,d){pn(this,a,b,c,d)};
h.removeEventListener=function(a,b,c,d){qo(this,a,b,c,d)};
h.dispatchEvent=function(a){var b=this.ja;if(b){var c=[];for(var d=1;b;b=b.ja)c.push(b),++d}b=this.mc;d=a.type||a;if(r(a))a=new Ym(a,b);else if(a instanceof Ym)a.target=a.target||b;else{var e=a;a=new Ym(d,b);Qb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=wo(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=wo(g,d,!0,a)&&e,a.f||(e=wo(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=wo(g,d,!1,a)&&e;return e};
h.K=function(){vo.J.K.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,hn(d[e]);delete a.listeners[c];a.f--}}this.ja=null};
function wo(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.kb&&g.capture==c){var k=g.listener,l=g.Rb||g.src;g.Kb&&ln(a.i,g);e=!1!==k.call(l,d)&&e}}return e&&0!=d.de}
;function xo(a,b){vo.call(this);this.g=a||1;this.f=b||n;this.j=y(this.bf,this);this.l=z()}
A(xo,vo);h=xo.prototype;h.enabled=!1;h.va=null;h.setInterval=function(a){this.g=a;this.va&&this.enabled?(this.stop(),this.start()):this.va&&this.stop()};
h.bf=function(){if(this.enabled){var a=z()-this.l;0<a&&a<.8*this.g?this.va=this.f.setTimeout(this.j,this.g-a):(this.va&&(this.f.clearTimeout(this.va),this.va=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.va||(this.va=this.f.setTimeout(this.j,this.g),this.l=z())};
h.stop=function(){this.enabled=!1;this.va&&(this.f.clearTimeout(this.va),this.va=null)};
h.K=function(){xo.J.K.call(this);this.stop();delete this.f};
function yo(a,b,c){if(La(a))c&&(a=y(a,c));else if(a&&"function"==typeof a.handleEvent)a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:n.setTimeout(a,b||0)}
;function zo(a,b,c){Ai.call(this);this.f=a;this.j=b||0;this.g=c;this.i=y(this.nd,this)}
A(zo,Ai);h=zo.prototype;h.zb=0;h.K=function(){zo.J.K.call(this);this.stop();delete this.f;delete this.g};
h.start=function(a){this.stop();this.zb=yo(this.i,p(a)?a:this.j)};
h.stop=function(){this.isActive()&&n.clearTimeout(this.zb);this.zb=0};
h.isActive=function(){return 0!=this.zb};
h.nd=function(){this.zb=0;this.f&&this.f.call(this.g)};function Ao(a,b,c){Ai.call(this);this.j=null!=c?y(a,c):a;this.i=b;this.g=y(this.Fg,this);this.f=[]}
A(Ao,Ai);h=Ao.prototype;h.mb=!1;h.Eb=0;h.Va=null;h.cf=function(a){this.f=arguments;this.Va||this.Eb?this.mb=!0:Bo(this)};
h.stop=function(){this.Va&&(n.clearTimeout(this.Va),this.Va=null,this.mb=!1,this.f=[])};
h.pause=function(){this.Eb++};
h.resume=function(){this.Eb--;this.Eb||!this.mb||this.Va||(this.mb=!1,Bo(this))};
h.K=function(){Ao.J.K.call(this);this.stop()};
h.Fg=function(){this.Va=null;this.mb&&!this.Eb&&(this.mb=!1,Bo(this))};
function Bo(a){a.Va=yo(a.g,a.i);a.j.apply(null,a.f)}
;function Co(){this.g=-1}
;function Do(){this.g=64;this.f=[];this.B=[];this.w=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
A(Do,Co);Do.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function Eo(a,b,c){c||(c=0);var d=a.w;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],l=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+l&4294967295}
Do.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.B,f=this.i;d<b;){if(0==f)for(;d<=c;)Eo(this,a,d),d+=this.g;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Eo(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Eo(this,e);f=0;break}}this.i=f;this.l+=b}};
Do.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.B[c]=b&255,b/=256;Eo(this,this.B);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Fo(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function K(a,b){return a.classList?a.classList.contains(b):jb(Fo(a),b)}
function L(a,b){a.classList?a.classList.add(b):K(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Go(a,b){if(a.classList)B(b,function(e){L(a,e)});
else{var c={};B(Fo(a),function(e){c[e]=!0});
B(b,function(e){c[e]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function Ho(a,b){a.classList?a.classList.remove(b):K(a,b)&&(a.className=bb(Fo(a),function(c){return c!=b}).join(" "))}
function Io(a,b){a.classList?B(b,function(c){Ho(a,c)}):a.className=bb(Fo(a),function(c){return!jb(b,c)}).join(" ")}
function Jo(a,b,c){c?L(a,b):Ho(a,b)}
function Ko(a,b,c){K(a,b)&&(Ho(a,b),L(a,c))}
function Lo(a,b){var c=!K(a,b);Jo(a,b,c);return c}
;var Mo="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function No(){}
No.prototype.next=function(){throw Mo;};
No.prototype.Ea=function(){return this};
function Oo(a){if(a instanceof No)return a;if("function"==typeof a.Ea)return a.Ea(!1);if(Ka(a)){var b=0,c=new No;c.next=function(){for(;;){if(b>=a.length)throw Mo;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Po(a,b,c){if(Ka(a))try{B(a,b,c)}catch(d){if(d!==Mo)throw d;}else{a=Oo(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Mo)throw d;}}}
function Qo(a){if(Ka(a))return pb(a);a=Oo(a);var b=[];Po(a,function(c){b.push(c)});
return b}
;function Ro(a,b){this.g={};this.f=[];this.Ra=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ro)for(c=a.Aa(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
h=Ro.prototype;h.qa=function(){So(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
h.Aa=function(){So(this);return this.f.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||To;So(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function To(a,b){return a===b}
h.isEmpty=function(){return 0==this.i};
h.clear=function(){this.g={};this.Ra=this.i=this.f.length=0};
h.remove=function(a){return Uo(this.g,a)?(delete this.g[a],this.i--,this.Ra++,this.f.length>2*this.i&&So(this),!0):!1};
function So(a){if(a.i!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Uo(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.i!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Uo(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
h.get=function(a,b){return Uo(this.g,a)?this.g[a]:b};
h.set=function(a,b){Uo(this.g,a)||(this.i++,this.f.push(a),this.Ra++);this.g[a]=b};
h.forEach=function(a,b){for(var c=this.Aa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new Ro(this)};
h.Ea=function(a){So(this);var b=0,c=this.Ra,d=this,e=new No;e.next=function(){if(c!=d.Ra)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Mo;var f=d.f[b++];return a?f:d.g[f]};
return e};
function Uo(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Vo(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Wo(a){var b=a.type;switch(r(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;function Xo(a){Ai.call(this);this.g=a;this.f={}}
A(Xo,Ai);var Yo=[];function Zo(a,b,c,d){Ja(c)||(c&&(Yo[0]=c.toString()),c=Yo);for(var e=0;e<c.length;e++){var f=pn(b,c[e],d||a.handleEvent,!1,a.g||a);if(!f)break;a.f[f.key]=f}}
function $o(a){Ab(a.f,function(b,c){this.f.hasOwnProperty(c)&&ro(b)},a);
a.f={}}
Xo.prototype.K=function(){Xo.J.K.call(this);$o(this)};
Xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function ap(a){return Ad(fc(a.replace(bp,function(b,c){return cp.test(c)?"":" "}).replace(/[\t\n ]+/g," ")))}
var cp=/^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,bp=/<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;function dp(a){if(n.JSON)try{return n.JSON.parse(a)}catch(b){}return Di(a)}
;function ep(){}
ep.prototype.stringify=function(a){return n.JSON.stringify(a,void 0)};
ep.prototype.parse=function(a){return n.JSON.parse(a,void 0)};function fp(a,b,c,d,e,f,g,k){this.f=a;this.l=b;this.i=c;this.B=d;this.j=e;this.w=f;this.g=g;this.F=k}
fp.prototype.clone=function(){return new fp(this.f,this.l,this.i,this.B,this.j,this.w,this.g,this.F)};
fp.prototype.equals=function(a){return this.f==a.f&&this.l==a.l&&this.i==a.i&&this.B==a.B&&this.j==a.j&&this.w==a.w&&this.g==a.g&&this.F==a.F};
function gp(a,b){if(0==b)return a.f;if(1==b)return a.g;var c=Ve(a.f,a.i,b),d=Ve(a.i,a.j,b),e=Ve(a.j,a.g,b);c=Ve(c,d,b);d=Ve(d,e,b);return Ve(c,d,b)}
function hp(a,b){var c=(b-a.f)/(a.g-a.f);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,g=0;8>g;g++){f=gp(a,c);var k=(gp(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(k))break;else f<b?d=c:e=c,c-=(f-b)/k}for(g=0;1E-6<Math.abs(f-b)&&8>g;g++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=gp(a,c);return c}
function ip(a,b){var c=hp(a,b);if(0==c)c=a.l;else if(1==c)c=a.F;else{var d=Ve(a.l,a.B,c),e=Ve(a.B,a.w,c),f=Ve(a.w,a.F,c);d=Ve(d,e,c);e=Ve(e,f,c);c=Ve(d,e,c)}return c}
;function jp(){}
jp.prototype.f=null;jp.prototype.getOptions=function(){var a;(a=this.f)||(a={},kp(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var lp;function mp(){}
A(mp,jp);function np(a){return(a=kp(a))?new ActiveXObject(a):new XMLHttpRequest}
function kp(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
lp=new mp;function op(a,b,c,d){this.f=a;this.i=b;this.F=c;this.w=d||1;this.l=45E3;this.j=new Xo(this);this.g=new xo;this.g.setInterval(250)}
h=op.prototype;h.Wa=null;h.xa=!1;h.pb=null;h.Mc=null;h.lb=null;h.nb=null;h.Ka=null;h.Pa=null;h.Ya=null;h.aa=null;h.Gb=0;h.ya=null;h.kc=null;h.Na=null;h.Bb=-1;h.ge=!0;h.Sa=!1;h.zc=0;h.ac=null;var pp={},qp={};h=op.prototype;h.setTimeout=function(a){this.l=a};
function rp(a,b,c){a.nb=1;a.Ka=sp(b.clone());a.Ya=c;a.B=!0;tp(a,null)}
function up(a,b,c,d,e){a.nb=1;a.Ka=sp(b.clone());a.Ya=null;a.B=c;e&&(a.ge=!1);tp(a,d)}
function tp(a,b){a.lb=z();vp(a);a.Pa=a.Ka.clone();wp(a.Pa,"t",a.w);a.Gb=0;a.aa=a.f.pc(a.f.Fb()?b:null);0<a.zc&&(a.ac=new Ao(y(a.oe,a,a.aa),a.zc));Zo(a.j,a.aa,"readystatechange",a.Rg);var c=a.Wa?Nb(a.Wa):{};a.Ya?(a.kc="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.aa.send(a.Pa,a.kc,a.Ya,c)):(a.kc="GET",a.ge&&!Vd&&(c.Connection="close"),a.aa.send(a.Pa,a.kc,null,c));a.f.wa(1)}
h.Rg=function(a){a=a.target;var b=this.ac;b&&3==xp(a)?b.cf():this.oe(a)};
h.oe=function(a){try{if(a==this.aa)a:{var b=xp(this.aa),c=this.aa.w,d=this.aa.getStatus();if(E&&!je(10)||Vd&&!ie("420+")){if(4>b)break a}else if(3>b||3==b&&!Rd&&!yp(this.aa))break a;this.Sa||4!=b||7==c||(8==c||0>=d?this.f.wa(3):this.f.wa(2));zp(this);var e=this.aa.getStatus();this.Bb=e;var f=yp(this.aa);(this.xa=200==e)?(4==b&&Ap(this),this.B?(Bp(this,b,f),Rd&&this.xa&&3==b&&(Zo(this.j,this.g,"tick",this.Pg),this.g.start())):Cp(this,f),this.xa&&!this.Sa&&(4==b?this.f.Wb(this):(this.xa=!1,vp(this)))):
(400==e&&0<f.indexOf("Unknown SID")?(this.Na=3,Dp(13)):(this.Na=0,Dp(14)),Ap(this),Ep(this))}}catch(g){}finally{}};
function Bp(a,b,c){for(var d=!0;!a.Sa&&a.Gb<c.length;){var e=Fp(a,c);if(e==qp){4==b&&(a.Na=4,Dp(15),d=!1);break}else if(e==pp){a.Na=4;Dp(16);d=!1;break}else Cp(a,e)}4==b&&0==c.length&&(a.Na=1,Dp(17),d=!1);a.xa=a.xa&&d;d||(Ap(a),Ep(a))}
h.Pg=function(){var a=xp(this.aa),b=yp(this.aa);this.Gb<b.length&&(zp(this),Bp(this,a,b),this.xa&&4!=a&&vp(this))};
function Fp(a,b){var c=a.Gb,d=b.indexOf("\n",c);if(-1==d)return qp;c=Number(b.substring(c,d));if(isNaN(c))return pp;d+=1;if(d+c>b.length)return qp;var e=b.substr(d,c);a.Gb=d+c;return e}
function Gp(a,b){a.lb=z();vp(a);var c=b?window.location.hostname:"";a.Pa=a.Ka.clone();Hp(a.Pa,"DOMAIN",c);Hp(a.Pa,"t",a.w);try{a.ya=new ActiveXObject("htmlfile")}catch(m){Ap(a);a.Na=7;Dp(22);Ep(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var g=c.charAt(f);if("<"==g)e+="\\x3c";else if(">"==g)e+="\\x3e";else{var k=g;if(k in Fd)g=Fd[k];else if(k in Ed)g=Fd[k]=Ed[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)g=k;else{if(256>l){if(g="\\x",16>l||256<l)g+="0"}else g="\\u",4096>l&&
(g+="0");g+=l.toString(16).toUpperCase()}g=Fd[k]=g}e+=g}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=gd(d+"</body></html>",null);a.ya.open();a.ya.write(Zc(c));a.ya.close();a.ya.parentWindow.m=y(a.Ig,a);a.ya.parentWindow.d=y(a.Vd,a,!0);a.ya.parentWindow.rpcClose=y(a.Vd,a,!1);c=a.ya.createElement("DIV");a.ya.parentWindow.document.body.appendChild(c);d=yc(a.Pa.toString());d=zd(uc(d).toString());d=gd('<iframe src="'+d+'"></iframe>',null);pd(c,d);a.f.wa(1)}
h.Ig=function(a){Ip(y(this.Hg,this,a),0)};
h.Hg=function(a){this.Sa||(zp(this),Cp(this,a),vp(this))};
h.Vd=function(a){Ip(y(this.Gg,this,a),0)};
h.Gg=function(a){this.Sa||(Ap(this),this.xa=a,this.f.Wb(this),this.f.wa(4))};
h.cancel=function(){this.Sa=!0;Ap(this)};
function vp(a){a.Mc=z()+a.l;Jp(a,a.l)}
function Jp(a,b){if(null!=a.pb)throw Error("WatchDog timer not null");a.pb=Ip(y(a.Lg,a),b)}
function zp(a){a.pb&&(n.clearTimeout(a.pb),a.pb=null)}
h.Lg=function(){this.pb=null;var a=z();0<=a-this.Mc?(2!=this.nb&&this.f.wa(3),Ap(this),this.Na=2,Dp(18),Ep(this)):Jp(this,this.Mc-a)};
function Ep(a){a.f.vd()||a.Sa||a.f.Wb(a)}
function Ap(a){zp(a);Ci(a.ac);a.ac=null;a.g.stop();$o(a.j);if(a.aa){var b=a.aa;a.aa=null;b.abort();b.dispose()}a.ya&&(a.ya=null)}
h.getLastError=function(){return this.Na};
function Cp(a,b){try{a.f.Qd(a,b),a.f.wa(4)}catch(c){}}
;function Kp(a){if(a.qa&&"function"==typeof a.qa)return a.qa();if(r(a))return a.split("");if(Ka(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Gb(a)}
function Lp(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Ka(a)||r(a))B(a,b,c);else{if(a.Aa&&"function"==typeof a.Aa)var d=a.Aa();else if(a.qa&&"function"==typeof a.qa)d=void 0;else if(Ka(a)||r(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=Hb(a);e=Kp(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function Mp(a,b){this.i=this.F=this.j="";this.w=null;this.l=this.f="";this.B=!1;var c;a instanceof Mp?(this.B=p(b)?b:a.B,Np(this,a.j),this.F=a.F,Op(this,a.i),Pp(this,a.w),this.f=a.f,Qp(this,a.g.clone()),this.l=a.l):a&&(c=Xf(String(a)))?(this.B=!!b,Np(this,c[1]||"",!0),this.F=Rp(c[2]||""),Op(this,c[3]||"",!0),Pp(this,c[4]),this.f=Rp(c[5]||"",!0),Qp(this,c[6]||"",!0),this.l=Rp(c[7]||"")):(this.B=!!b,this.g=new Sp(null,this.B))}
Mp.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Tp(b,Up,!0),":");var c=this.i;if(c||"file"==b)a.push("//"),(b=this.F)&&a.push(Tp(b,Up,!0),"@"),a.push(xd(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.w,null!=c&&a.push(":",String(c));if(c=this.f)this.i&&"/"!=c.charAt(0)&&a.push("/"),a.push(Tp(c,"/"==c.charAt(0)?Vp:Wp,!0));(c=this.g.toString())&&a.push("?",c);(c=this.l)&&a.push("#",Tp(c,Xp));return a.join("")};
Mp.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?Np(b,a.j):c=!!a.F;c?b.F=a.F:c=!!a.i;c?Op(b,a.i):c=null!=a.w;var d=a.f;if(c)Pp(b,a.w);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.i&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.g.toString();c?Qp(b,a.g.clone()):c=!!a.l;c&&(b.l=a.l);return b};
Mp.prototype.clone=function(){return new Mp(this)};
function Np(a,b,c){a.j=c?Rp(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function Op(a,b,c){a.i=c?Rp(b,!0):b}
function Pp(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.w=b}else a.w=null}
function Qp(a,b,c){b instanceof Sp?(a.g=b,Yp(a.g,a.B)):(c||(b=Tp(b,Zp)),a.g=new Sp(b,a.B))}
function Hp(a,b,c){a.g.set(b,c)}
function wp(a,b,c){Ja(c)||(c=[String(c)]);$p(a.g,b,c)}
function sp(a){Hp(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^z()).toString(36));return a}
function aq(a){return a instanceof Mp?a.clone():new Mp(a,void 0)}
function bq(a,b,c,d){var e=new Mp(null,void 0);a&&Np(e,a);b&&Op(e,b);c&&Pp(e,c);d&&(e.f=d);return e}
function Rp(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Tp(a,b,c){return r(a)?(a=encodeURI(a).replace(b,cq),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function cq(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Up=/[#\/\?@]/g,Wp=/[#\?:]/g,Vp=/[#\?]/g,Zp=/[#\?@]/g,Xp=/#/g;function Sp(a,b){this.g=this.f=null;this.i=a||null;this.j=!!b}
function dq(a){a.f||(a.f=new Ro,a.g=0,a.i&&$f(a.i,function(b,c){a.add(yd(b),c)}))}
h=Sp.prototype;h.add=function(a,b){dq(this);this.i=null;a=eq(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
h.remove=function(a){dq(this);a=eq(this,a);return Uo(this.f.g,a)?(this.i=null,this.g=this.g-this.f.get(a).length,this.f.remove(a)):!1};
h.clear=function(){this.f=this.i=null;this.g=0};
h.isEmpty=function(){dq(this);return 0==this.g};
function fq(a,b){dq(a);b=eq(a,b);return Uo(a.f.g,b)}
h.forEach=function(a,b){dq(this);this.f.forEach(function(c,d){B(c,function(e){a.call(b,e,d,this)},this)},this)};
h.Aa=function(){dq(this);for(var a=this.f.qa(),b=this.f.Aa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.qa=function(a){dq(this);var b=[];if(r(a))fq(this,a)&&(b=ob(b,this.f.get(eq(this,a))));else{a=this.f.qa();for(var c=0;c<a.length;c++)b=ob(b,a[c])}return b};
h.set=function(a,b){dq(this);this.i=null;a=eq(this,a);fq(this,a)&&(this.g=this.g-this.f.get(a).length);this.f.set(a,[b]);this.g=this.g+1;return this};
h.get=function(a,b){if(!a)return b;var c=this.qa(a);return 0<c.length?String(c[0]):b};
function $p(a,b,c){a.remove(b);0<c.length&&(a.i=null,a.f.set(eq(a,b),pb(c)),a.g=a.g+c.length)}
h.toString=function(){if(this.i)return this.i;if(!this.f)return"";for(var a=[],b=this.f.Aa(),c=0;c<b.length;c++){var d=b[c],e=xd(d);d=this.qa(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+xd(d[f]));a.push(g)}}return this.i=a.join("&")};
h.clone=function(){var a=new Sp;a.i=this.i;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function eq(a,b){var c=String(b);a.j&&(c=c.toLowerCase());return c}
function Yp(a,b){b&&!a.j&&(dq(a),a.i=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),$p(this,e,c))},a));
a.j=b}
h.extend=function(a){for(var b=0;b<arguments.length;b++)Lp(arguments[b],function(c,d){this.add(d,c)},this)};function gq(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;hq(a,b,function(g){g?c(!0):n.setTimeout(function(){gq(a,b,c,d,f)},f)})}}
function hq(a,b,c){var d=new Image;d.onload=function(){try{iq(d),c(!0)}catch(e){}};
d.onerror=function(){try{iq(d),c(!1)}catch(e){}};
d.onabort=function(){try{iq(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{iq(d),c(!1)}catch(e){}};
n.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
sd(d,a)}
function iq(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function jq(a){this.f=a;this.g=new ep}
h=jq.prototype;h.xc=null;h.ia=null;h.cc=!1;h.ke=null;h.Nb=null;h.Dc=null;h.yc=null;h.ra=null;h.Ia=-1;h.Ab=null;h.vb=null;h.connect=function(a){this.yc=a;a=kq(this.f,null,this.yc);Dp(3);this.ke=z();var b=this.f.F;null!=b?(this.Ab=b[0],(this.vb=b[1])?(this.ra=1,lq(this)):(this.ra=2,mq(this))):(wp(a,"MODE","init"),this.ia=new op(this,void 0,void 0,void 0),this.ia.Wa=this.xc,up(this.ia,a,!1,null,!0),this.ra=0)};
function lq(a){var b=kq(a.f,a.vb,"/mail/images/cleardot.gif");sp(b);gq(b.toString(),5E3,y(a.Le,a),3,2E3);a.wa(1)}
h.Le=function(a){if(a)this.ra=2,mq(this);else{Dp(4);var b=this.f;b.Ba=b.La.Ia;nq(b,9)}a&&this.wa(2)};
function mq(a){var b=a.f.A;if(null!=b)Dp(5),b?(Dp(11),oq(a.f,a,!1)):(Dp(12),oq(a.f,a,!0));else if(a.ia=new op(a,void 0,void 0,void 0),a.ia.Wa=a.xc,b=a.f,b=kq(b,b.Fb()?a.Ab:null,a.yc),Dp(5),!E||je(10))wp(b,"TYPE","xmlhttp"),up(a.ia,b,!1,a.Ab,!1);else{wp(b,"TYPE","html");var c=a.ia;a=!!a.Ab;c.nb=3;c.Ka=sp(b.clone());Gp(c,a)}}
h.pc=function(a){return this.f.pc(a)};
h.abort=function(){this.ia&&(this.ia.cancel(),this.ia=null);this.Ia=-1};
h.vd=function(){return!1};
h.Qd=function(a,b){this.Ia=a.Bb;if(0==this.ra)if(b){try{var c=this.g.parse(b)}catch(d){c=this.f;c.Ba=this.Ia;nq(c,2);return}this.Ab=c[0];this.vb=c[1]}else c=this.f,c.Ba=this.Ia,nq(c,2);else if(2==this.ra)if(this.cc)Dp(7),this.Dc=z();else if("11111"==b){if(Dp(6),this.cc=!0,this.Nb=z(),c=this.Nb-this.ke,!E||je(10)||500>c)this.Ia=200,this.ia.cancel(),Dp(12),oq(this.f,this,!0)}else Dp(8),this.Nb=this.Dc=z(),this.cc=!1};
h.Wb=function(){this.Ia=this.ia.Bb;if(this.ia.xa)0==this.ra?this.vb?(this.ra=1,lq(this)):(this.ra=2,mq(this)):2==this.ra&&((!E||je(10)?!this.cc:200>this.Dc-this.Nb)?(Dp(11),oq(this.f,this,!1)):(Dp(12),oq(this.f,this,!0)));else{0==this.ra?Dp(9):2==this.ra&&Dp(10);var a=this.f;this.ia.getLastError();a.Ba=this.Ia;nq(a,2)}};
h.Fb=function(){return this.f.Fb()};
h.isActive=function(){return this.f.isActive()};
h.wa=function(a){this.f.wa(a)};function pq(a){vo.call(this);this.headers=new Ro;this.N=a||null;this.g=!1;this.L=this.f=null;this.W="";this.w=0;this.j="";this.l=this.U=this.A=this.R=!1;this.H=0;this.D=null;this.Da="";this.Z=this.ea=!1}
A(pq,vo);var qq=/^https?$/i,rq=["POST","PUT"];h=pq.prototype;
h.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.W+"; newUri="+a);b=b?b.toUpperCase():"GET";this.W=a;this.j="";this.w=0;this.R=!1;this.g=!0;this.f=this.N?np(this.N):np(lp);this.L=this.N?this.N.getOptions():lp.getOptions();this.f.onreadystatechange=y(this.Pd,this);try{this.getStatus(),this.U=!0,this.f.open(b,String(a),!0),this.U=!1}catch(f){this.getStatus();sq(this,f);return}a=c||"";var e=this.headers.clone();d&&Lp(d,function(f,g){e.set(g,
f)});
d=gb(e.Aa(),tq);c=n.FormData&&a instanceof n.FormData;!jb(rq,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,g){this.f.setRequestHeader(g,f)},this);
this.Da&&(this.f.responseType=this.Da);"withCredentials"in this.f&&this.f.withCredentials!==this.ea&&(this.f.withCredentials=this.ea);try{uq(this),0<this.H&&(this.Z=vq(this.f),this.getStatus(),this.Z?(this.f.timeout=this.H,this.f.ontimeout=y(this.od,this)):this.D=yo(this.od,this.H,this)),this.getStatus(),this.A=!0,this.f.send(a),this.A=!1}catch(f){this.getStatus(),sq(this,f)}};
function vq(a){return E&&ie(9)&&Ba(a.timeout)&&p(a.ontimeout)}
function tq(a){return"content-type"==a.toLowerCase()}
h.od=function(){"undefined"!=typeof za&&this.f&&(this.j="Timed out after "+this.H+"ms, aborting",this.w=8,this.getStatus(),this.dispatchEvent("timeout"),this.abort(8))};
function sq(a,b){a.g=!1;a.f&&(a.l=!0,a.f.abort(),a.l=!1);a.j=b;a.w=5;wq(a);xq(a)}
function wq(a){a.R||(a.R=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(a){this.f&&this.g&&(this.getStatus(),this.g=!1,this.l=!0,this.f.abort(),this.l=!1,this.w=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),xq(this))};
h.K=function(){this.f&&(this.g&&(this.g=!1,this.l=!0,this.f.abort(),this.l=!1),xq(this,!0));pq.J.K.call(this)};
h.Pd=function(){this.P()||(this.U||this.A||this.l?yq(this):this.wg())};
h.wg=function(){yq(this)};
function yq(a){if(a.g&&"undefined"!=typeof za)if(a.L[1]&&4==xp(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==xp(a))yo(a.Pd,0,a);else if(a.dispatchEvent("readystatechange"),4==xp(a)){a.getStatus();a.g=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Xf(String(a.W))[1]||null;if(!f&&n.self&&n.self.location){var g=n.self.location.protocol;f=g.substr(0,g.length-1)}e=!qq.test(f?
f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.w=6;try{var k=2<xp(a)?a.f.statusText:""}catch(l){k=""}a.j=k+" ["+a.getStatus()+"]";wq(a)}}finally{xq(a)}}}
function xq(a,b){if(a.f){uq(a);var c=a.f,d=a.L[0]?Ga:null;a.f=null;a.L=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function uq(a){a.f&&a.Z&&(a.f.ontimeout=null);a.D&&(n.clearTimeout(a.D),a.D=null)}
h.isActive=function(){return!!this.f};
function xp(a){return a.f?a.f.readyState:0}
h.getStatus=function(){try{return 2<xp(this)?this.f.status:-1}catch(a){return-1}};
function yp(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
h.getLastError=function(){return r(this.j)?this.j:String(this.j)};function zq(a,b,c){this.f=1;this.g=[];this.j=[];this.l=new ep;this.F=a||null;this.A=null!=b?b:null;this.B=c||!1}
function Aq(a,b){this.g=a;this.f=b;this.context=null}
h=zq.prototype;h.wb=null;h.ga=null;h.X=null;h.wc=null;h.Pb=null;h.Sc=null;h.Qb=null;h.Cb=0;h.Tf=0;h.ba=null;h.Ma=null;h.Fa=null;h.Ua=null;h.La=null;h.jc=null;h.hb=-1;h.yd=-1;h.Ba=-1;h.fb=0;h.bb=0;h.Ta=8;var Bq=new vo;function Cq(a){Ym.call(this,"statevent",a)}
A(Cq,Ym);function Dq(a,b){Ym.call(this,"timingevent",a);this.size=b}
A(Dq,Ym);function Eq(a){Ym.call(this,"serverreachability",a)}
A(Eq,Ym);h=zq.prototype;h.connect=function(a,b,c,d,e){Dp(0);this.wc=b;this.wb=c||{};d&&p(e)&&(this.wb.OSID=d,this.wb.OAID=e);this.B?(Ip(y(this.ed,this,a),100),Fq(this)):this.ed(a)};
function Gq(a){Hq(a);if(3==a.f){var b=a.Cb++,c=a.Pb.clone();Hp(c,"SID",a.i);Hp(c,"RID",b);Hp(c,"TYPE","terminate");Iq(a,c);b=new op(a,a.i,b,void 0);b.nb=2;b.Ka=sp(c.clone());sd(new Image,b.Ka.toString());b.lb=z();vp(b)}Jq(a)}
h.ed=function(a){this.La=new jq(this);this.La.xc=null;this.La.g=this.l;this.La.connect(a)};
function Fq(a){a.Re(1,0);a.Pb=kq(a,null,a.wc);Kq(a)}
function Hq(a){a.La&&(a.La.abort(),a.La=null);a.X&&(a.X.cancel(),a.X=null);a.Fa&&(n.clearTimeout(a.Fa),a.Fa=null);Lq(a);a.ga&&(a.ga.cancel(),a.ga=null);a.Ma&&(n.clearTimeout(a.Ma),a.Ma=null)}
function Mq(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.g.push(new Aq(a.Tf++,b));2!=a.f&&3!=a.f||Kq(a)}
h.vd=function(){return 0==this.f};
function Kq(a){a.ga||a.Ma||(a.Ma=Ip(y(a.Ud,a),0),a.fb=0)}
h.Ud=function(a){this.Ma=null;Nq(this,a)};
function Nq(a,b){if(1==a.f){if(!b){a.Cb=Math.floor(1E5*Math.random());var c=a.Cb++,d=new op(a,"",c,void 0);d.Wa=null;var e=Oq(a),f=a.Pb.clone();Hp(f,"RID",c);Hp(f,"CVER","1");Iq(a,f);rp(d,f,e);a.ga=d;a.f=2}}else 3==a.f&&(b?Pq(a,b):0==a.g.length||a.ga||Pq(a))}
function Pq(a,b){if(b)if(6<a.Ta){a.g=a.j.concat(a.g);a.j.length=0;var c=a.Cb-1;var d=Oq(a)}else c=b.F,d=b.Ya;else c=a.Cb++,d=Oq(a);var e=a.Pb.clone();Hp(e,"SID",a.i);Hp(e,"RID",c);Hp(e,"AID",a.hb);Iq(a,e);c=new op(a,a.i,c,a.fb+1);c.Wa=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ga=c;rp(c,e,d)}
function Iq(a,b){if(a.ba){var c=a.ba.kd();c&&Ab(c,function(d,e){Hp(b,e,d)})}}
function Oq(a){var b=Math.min(a.g.length,1E3),c=["count="+b];if(6<a.Ta&&0<b){var d=a.g[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.g[e].g,g=a.g[e].f;f=6>=a.Ta?e:f-d;try{Ab(g,function(k,l){c.push("req"+f+"_"+l+"="+encodeURIComponent(k))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.j=a.j.concat(a.g.splice(0,b));
return c.join("&")}
function Qq(a){a.X||a.Fa||(a.w=1,a.Fa=Ip(y(a.Td,a),0),a.bb=0)}
function Rq(a){if(a.X||a.Fa||3<=a.bb)return!1;a.w++;a.Fa=Ip(y(a.Td,a),Sq(a,a.bb));a.bb++;return!0}
h.Td=function(){this.Fa=null;this.X=new op(this,this.i,"rpc",this.w);this.X.Wa=null;this.X.zc=0;var a=this.Sc.clone();Hp(a,"RID","rpc");Hp(a,"SID",this.i);Hp(a,"CI",this.jc?"0":"1");Hp(a,"AID",this.hb);Iq(this,a);if(!E||je(10))Hp(a,"TYPE","xmlhttp"),up(this.X,a,!0,this.Qb,!1);else{Hp(a,"TYPE","html");var b=this.X,c=!!this.Qb;b.nb=3;b.Ka=sp(a.clone());Gp(b,c)}};
function oq(a,b,c){a.jc=c;a.Ba=b.Ia;a.B||Fq(a)}
h.Qd=function(a,b){if(0!=this.f&&(this.X==a||this.ga==a))if(this.Ba=a.Bb,this.ga==a&&3==this.f)if(7<this.Ta){try{var c=this.l.parse(b)}catch(f){c=null}if(Ja(c)&&3==c.length)if(0==c[0])a:{if(!this.Fa){if(this.X)if(this.X.lb+3E3<this.ga.lb)Lq(this),this.X.cancel(),this.X=null;else break a;Rq(this);Dp(19)}}else this.yd=c[1],0<this.yd-this.hb&&37500>c[2]&&this.jc&&0==this.bb&&!this.Ua&&(this.Ua=Ip(y(this.Wf,this),6E3));else nq(this,11)}else b!=Le.Yh.f&&nq(this,11);else if(this.X==a&&Lq(this),!ec(b)){c=
this.l.parse(b);Ja(c);for(var d=0;d<c.length;d++){var e=c[d];this.hb=e[0];e=e[1];2==this.f?"c"==e[0]?(this.i=e[1],this.Qb=e[2],e=e[3],null!=e?this.Ta=e:this.Ta=6,this.f=3,this.ba&&this.ba.Yc(),this.Sc=kq(this,this.Fb()?this.Qb:null,this.wc),Qq(this)):"stop"==e[0]&&nq(this,7):3==this.f&&("stop"==e[0]?nq(this,7):"noop"!=e[0]&&this.ba&&this.ba.Xc(e),this.bb=0)}}};
h.Wf=function(){null!=this.Ua&&(this.Ua=null,this.X.cancel(),this.X=null,Rq(this),Dp(20))};
function Lq(a){null!=a.Ua&&(n.clearTimeout(a.Ua),a.Ua=null)}
h.Wb=function(a){if(this.X==a){Lq(this);this.X=null;var b=2}else if(this.ga==a)this.ga=null,b=1;else return;this.Ba=a.Bb;if(0!=this.f)if(a.xa)1==b?(b=z()-a.lb,Bq.dispatchEvent(new Dq(Bq,a.Ya?a.Ya.length:0,b,this.fb)),Kq(this),this.j.length=0):Qq(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Ba)){if(d=1==b)this.ga||this.Ma||1==this.f||2<=this.fb?d=!1:(this.Ma=Ip(y(this.Ud,this,a),Sq(this,this.fb)),this.fb++,d=!0);d=!(d||2==b&&Rq(this))}if(d)switch(c){case 1:nq(this,5);break;case 4:nq(this,
10);break;case 3:nq(this,6);break;case 7:nq(this,12);break;default:nq(this,2)}}};
function Sq(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
h.Re=function(a){if(!jb(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function nq(a,b){if(2==b||9==b){var c=null;a.ba&&(c=null);var d=y(a.fh,a);c||(c=new Mp("//www.google.com/images/cleardot.gif"),sp(c));hq(c.toString(),1E4,d)}else Dp(2);Tq(a,b)}
h.fh=function(a){a?Dp(2):(Dp(1),Tq(this,8))};
function Tq(a,b){a.f=0;a.ba&&a.ba.Wc(b);Jq(a);Hq(a)}
function Jq(a){a.f=0;a.Ba=-1;if(a.ba)if(0==a.j.length&&0==a.g.length)a.ba.nc();else{pb(a.j);var b=pb(a.g);a.j.length=0;a.g.length=0;a.ba.nc(b)}}
function kq(a,b,c){var d=aq(c);if(""!=d.i)b&&Op(d,b+"."+d.i),Pp(d,d.w);else{var e=window.location;d=bq(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.wb&&Ab(a.wb,function(f,g){Hp(d,g,f)});
Hp(d,"VER",a.Ta);Iq(a,d);return d}
h.pc=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new pq;a.ea=!1;return a};
h.isActive=function(){return!!this.ba&&this.ba.isActive(this)};
function Ip(a,b){if(!La(a))throw Error("Fn must not be null and must be a function");return n.setTimeout(function(){a()},b)}
h.wa=function(a){Bq.dispatchEvent(new Eq(Bq,a))};
function Dp(a){Bq.dispatchEvent(new Cq(Bq,a))}
h.Fb=function(){return!(!E||je(10))};
function Uq(){}
h=Uq.prototype;h.Yc=function(){};
h.Xc=function(){};
h.Wc=function(){};
h.nc=function(){};
h.kd=function(){return{}};
h.isActive=function(){return!0};var Vq=function(){if(Xd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Mc))?a[1]:"0"}return Wd?(a=/10[_.][0-9_.]+/,(a=a.exec(Mc))?a[0].replace(/_/g,"."):"10"):Yd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Mc))?a[1]:""):Zd||$d||ae?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Mc))?a[1].replace(/_/g,"."):""):""}();function Wq(a){return(a=a.exec(Mc))?a[1]:""}
var Xq=function(){if(me)return Wq(/Firefox\/([0-9.]+)/);if(E||Sd||Rd)return he;if(qe)return Ld()?Wq(/CriOS\/([0-9.]+)/):Wq(/Chrome\/([0-9.]+)/);if(re&&!Ld())return Wq(/Version\/([0-9.]+)/);if(ne||oe){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Mc);if(a)return a[1]+"."+a[2]}else if(pe)return(a=Wq(/Android\s+([0-9.]+)/))?a:Wq(/Version\/([0-9.]+)/);return""}();
function Yq(a){return 0<=oc(Xq,a)}
;function Zq(a,b,c,d,e,f,g){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=Jg(k)){var m=Ng(k);if(!l){l=Ug(k);var q;if(q=l){q=re&&Yq(10);var u;if(u=be)u=0<=oc(Vq,10);q=Ud||q||u}l=q?-k.scrollLeft:!l||Td&&ie("8")||"visible"==Ig(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;m=Xe(m,new We(l,k.scrollTop))}}}k=m||new We;m=Tg(a);if(l=Mg(a)){var v=new Dg(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,v.left);q=Math.min(m.left+m.width,
v.left+v.width);l<=q&&(u=Math.max(m.top,v.top),v=Math.min(m.top+m.height,v.top+v.height),u<=v&&(m.left=l,m.top=u,m.width=q-l,m.height=v-u))}l=Ze(a);u=Ze(c);if(l.f!=u.f){q=l.f.body;u=nf(u.f);v=new We(0,0);var x=(x=af(q))?nf(x):window;if(Nd(x,"parent")){var N=q;do{var fa=x==u?Ng(N):Pg(N);v.x+=fa.x;v.y+=fa.y}while(x&&x!=u&&x!=x.parent&&(N=x.frameElement)&&(x=x.parent))}q=Xe(v,Ng(q));!E||je(9)||kf(l.f)||(q=Xe(q,lf(l.f)));m.left+=q.x;m.top+=q.y}a=$q(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new We(b,
m.top+(a&1?m.height:0));b=Xe(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var ja;g&&(ja=Mg(c))&&(ja.top-=k.y,ja.right-=k.x,ja.bottom-=k.y,ja.left-=k.x);return ar(b,c,d,f,ja,g,void 0)}
function ar(a,b,c,d,e,f,g){a=a.clone();var k=$q(b,c);c=Rg(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=k)k&4?a.x-=g.width+(d?d.right:0):k&2?a.x-=g.width/2:d&&(a.x+=d.left),k&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+k.width>e.right&&(k.width=Math.min(e.right-d.x,
m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new Dg(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;a=new We(f.left,f.top);a instanceof We?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Qg(g,!1);b.style.top=Qg(a,!1);g=new Ye(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,a=kf(Ze(af(b)).f),!E||ie("10")||a&&ie("8")?(b=b.style,Ud?b.MozBoxSizing="border-box":Vd?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(g=b.style,a?(E?(a=Wg(b,"paddingLeft"),f=Wg(b,"paddingRight"),d=Wg(b,"paddingTop"),k=Wg(b,"paddingBottom"),a=new Ag(d,f,k,a)):(a=Hg(b,"paddingLeft"),f=Hg(b,"paddingRight"),d=Hg(b,"paddingTop"),k=Hg(b,"paddingBottom"),a=new Ag(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(a))),E&&!je(9)?(f=Yg(b,"borderLeft"),d=Yg(b,"borderRight"),k=Yg(b,"borderTop"),b=Yg(b,"borderBottom"),b=new Ag(k,d,b,f)):(f=Hg(b,"borderLeftWidth"),d=Hg(b,"borderRightWidth"),k=Hg(b,"borderTopWidth"),b=Hg(b,"borderBottomWidth"),
b=new Ag(parseFloat(k),parseFloat(d),parseFloat(b),parseFloat(f))),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function $q(a,b){return(b&8&&Ug(a)?b^4:b)&-9}
;function br(a){Ai.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.g={};this.w=!!a}
A(br,Ai);h=br.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function cr(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.sa(d),b.apply(void 0,arguments))},a)}
function dr(a,b,c,d){if(b=a.g[b]){var e=a.f;(b=gb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.sa(b)}}
h.sa=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ga):(c&&lb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
h.ka=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];er(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.sa(c)}}return 0!=e}return!1};
function er(a,b,c){wk(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(B(b,this.sa,this),delete this.g[a])}else this.f.length=0,this.g={}};
function fr(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=fr(a,d);return c}
h.K=function(){br.J.K.call(this);this.clear();this.i.length=0};function gr(a){this.f=a}
gr.prototype.set=function(a,b){p(b)?this.f.set(a,Ei(b)):this.f.remove(a)};
gr.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
gr.prototype.remove=function(a){this.f.remove(a)};function hr(a){this.f=a}
A(hr,gr);function ir(a){this.data=a}
function jr(a){return!p(a)||a instanceof ir?a:new ir(a)}
hr.prototype.set=function(a,b){hr.J.set.call(this,a,jr(b))};
hr.prototype.g=function(a){a=hr.J.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
hr.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function kr(a){this.f=a}
A(kr,hr);function lr(a){var b=a.creation;a=a.expiration;return!!a&&a<z()||!!b&&b>z()}
kr.prototype.set=function(a,b,c){if(b=jr(b)){if(c){if(c<z()){kr.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}kr.J.set.call(this,a,b)};
kr.prototype.g=function(a,b){var c=kr.J.g.call(this,a);if(c)if(!b&&lr(c))kr.prototype.remove.call(this,a);else return c};function mr(a){this.f=a}
A(mr,kr);function nr(a,b){var c=[];Po(b,function(d){try{var e=mr.prototype.g.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(e)?lr(e)&&c.push(d):c.push(d)},a);
return c}
function or(a,b){var c=nr(a,b);B(c,function(d){mr.prototype.remove.call(this,d)},a)}
;function pr(){}
;function qr(){}
A(qr,pr);qr.prototype.clear=function(){var a=Qo(this.Ea(!0)),b=this;B(a,function(c){b.remove(c)})};function rr(a){this.f=a}
A(rr,qr);h=rr.prototype;h.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.f.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeItem(a)};
h.Ea=function(a){var b=0,c=this.f,d=new No;d.next=function(){if(b>=c.length)throw Mo;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!r(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){this.f.clear()};
h.key=function(a){return this.f.key(a)};function sr(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(sr,rr);function tr(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
A(tr,rr);function ur(a,b){this.g=a;this.f=null;if(E&&!je(9)){vr||(vr=new Ro);this.f=vr.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),vr.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
A(ur,qr);var wr={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},vr=null;function xr(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return wr[b]})}
h=ur.prototype;h.isAvailable=function(){return!!this.f};
h.set=function(a,b){this.f.setAttribute(xr(a),b);yr(this)};
h.get=function(a){a=this.f.getAttribute(xr(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeAttribute(xr(a));yr(this)};
h.Ea=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new No;d.next=function(){if(b>=c.length)throw Mo;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!r(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);yr(this)};
function yr(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function zr(a,b){this.g=a;this.f=b+"::"}
A(zr,qr);zr.prototype.set=function(a,b){this.g.set(this.f+a,b)};
zr.prototype.get=function(a){return this.g.get(this.f+a)};
zr.prototype.remove=function(a){this.g.remove(this.f+a)};
zr.prototype.Ea=function(a){var b=this.g.Ea(!0),c=this,d=new No;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Ar(a){var b=new sr;return b.isAvailable()?a?new zr(b,a):b:null}
;function Br(){this.f=[];this.g=[]}
h=Br.prototype;h.isEmpty=function(){return 0==this.f.length&&0==this.g.length};
h.clear=function(){this.f=[];this.g=[]};
h.contains=function(a){return jb(this.f,a)||jb(this.g,a)};
h.remove=function(a){var b=this.f;var c=ab(b,a);0<=c?(mb(b,c),b=!0):b=!1;return b||lb(this.g,a)};
h.qa=function(){for(var a=[],b=this.f.length-1;0<=b;--b)a.push(this.f[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};function Cr(){}
Ha(Cr);Cr.prototype.f=0;function Dr(a){vo.call(this);this.N=a||Ze();this.ab=null;this.gb=!1;this.g=null;this.A=void 0;this.H=this.L=this.W=null;this.ub=!1}
A(Dr,vo);h=Dr.prototype;h.yf=Cr.getInstance();h.getId=function(){return this.ab||(this.ab=":"+(this.yf.f++).toString(36))};
h.qc=function(){return this.g};
function Er(a,b){return a.g?G(b,a.g||a.N.f):null}
h.Ic=function(a){if(this.W&&this.W!=a)throw Error("Method not supported");Dr.J.Ic.call(this,a)};
function Fr(a,b){if(a.gb)throw Error("Component already rendered");if(b){a.ub=!0;var c=af(b);a.N&&a.N.f==c||(a.N=Ze(b));a.g=b;a.eb()}else throw Error("Invalid element to decorate");}
h.eb=function(){this.gb=!0;Gr(this,function(a){!a.gb&&a.qc()&&a.eb()})};
h.Ha=function(){Gr(this,function(a){a.gb&&a.Ha()});
this.A&&$o(this.A);this.gb=!1};
h.K=function(){this.gb&&this.Ha();this.A&&(this.A.dispose(),delete this.A);Gr(this,function(a){a.dispose()});
!this.ub&&this.g&&zf(this.g);this.W=this.g=this.H=this.L=null;Dr.J.K.call(this)};
function Gr(a,b){a.L&&B(a.L,b,void 0)}
h.removeChild=function(a,b){if(a){var c=r(a)?a:a.getId();if(this.H&&c){var d=this.H;d=(null!==d&&c in d?d[c]:void 0)||null}else d=null;a=d;if(c&&a){d=this.H;c in d&&delete d[c];lb(this.L,a);b&&(a.Ha(),a.g&&zf(a.g));c=a;if(null==c)throw Error("Unable to set parent component");c.W=null;Dr.J.Ic.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function Hr(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||n,e=d.document,f=Ca(d);f&&(a.nonce=f);if("help"==a.flow){var g=w("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var k=JSON.stringify(b);(g=1200>=k.length)&&(a.psdJson=k)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{d=c+"/load.js?";for(var l in a)b=
a[l],null!=b&&!Ma(b)&&(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=Ze(e).createElement("SCRIPT");f&&a.setAttribute("nonce",f);ud(a,Vf(d));e.body.appendChild(a)}}
t("userfeedback.api.startFeedback",Hr,void 0);t("userfeedback.api.isBrowserSupportedForGenie",function(){return Ir()},void 0);
function Ir(){return E?Yq("8"):me?Yq("15"):re?Yq("5"):qe||Sd}
t("userfeedback.api.isBrowserSupportedForHelp",Ir,void 0);function Jr(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var Kr=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Lr=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Lr,void 0);function Mr(a){Jr(Lr,arguments)}
function M(a,b){return a in Lr?Lr[a]:b}
function Nr(a){var b=Lr.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function Or(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Pr(b)}}:a}
function Pr(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,b,c,d,e):(f=M("ERRORS",[]),f.push([a,b,c,d,e]),Mr("ERRORS",f))}
function Qr(a){Pr(a,"WARNING",void 0,void 0,void 0)}
;function Rr(a){var b=[];Ab(a,function(c,d){var e=xd(d),f;Ja(c)?f=c:f=[c];B(f,function(g){""==g?b.push(e):b.push(e+"="+xd(g))})});
return b.join("&")}
function Sr(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=yd(e[0]||""),g=yd(e[1]||"");f in b?Ja(b[f])?qb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){var k=Error("Error decoding URL component");k.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?Qr(k):Pr(k)}}return b}
function Tr(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Sr(1<a.length?a[1]:a[0])):{}}
function Ur(a,b){return Vr(a,b||{},!0)}
function Vr(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Sr(e[1]||"");for(var f in b)if(c||!Ib(e,f))e[f]=b[f];return fg(a,e)+d}
function Wr(){var a=Zf(Xr);return null===a?null:a.split(".").reverse()}
;function Yr(a){var b=Zr;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign($r(b),as(b));b.ca_type="image";a&&(b.bid=a);return b}
function $r(a){var b={};b.dt=pl;b.flash="0";a:{try{var c=a.f.top.location.href}catch(d){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);gh(b);return b}
function as(a){var b=xl(a.f),c=bk(a.f.top),d={};return d.bc=Jl(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=dk(a.g),d.wgl=!!Ke.WebGLRenderingContext,d}
var Zr=new function(){var a=window.document;this.f=window;this.g=a};
t("yt.ads_.signals_.getAdSignalsString",function(a){return Rr(Yr(a))},void 0);z();function bs(a,b){var c=cs(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function cs(a){return M("EXPERIMENT_FLAGS",{})[a]}
;var ds=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function es(){if(!ds)return null;var a=ds();return"open"in a?a:null}
;function O(a,b){La(a)&&(a=Or(a));return window.setTimeout(a,b)}
function fs(a,b){La(a)&&(a=Or(a));return window.setInterval(a,b)}
function P(a){window.clearTimeout(a)}
function gs(a){window.clearInterval(a)}
;var hs={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},is="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
js=!1;
function ks(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=Xf(a)[1]||null,e=Zf(a);d&&e?(d=c,c=Xf(a),d=Xf(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Zf(c)==e&&(Number(Xf(c)[4]||null)||null)==(Number(Xf(a)[4]||null)||null):!0;d=!!cs("web_ajax_ignore_global_headers_if_set");for(var f in hs)e=M(hs[f]),!e||!c&&!ls(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||ls(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(cs("pass_biscotti_id_in_header_ajax")||cs("pass_biscotti_id_in_header_ajax_tv"))&&(c||
ls(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=Rr(Yr(void 0)));return b}
function ms(a){var b=window.location.search,c=Zf(a),d=Yf(Xf(a)[5]||null);d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Sr(b),f={};B(is,function(g){e[g]&&(f[g]=e[g])});
return Vr(a,f||{},!1)}
function ls(a,b){var c=M("CORS_HEADER_WHITELIST")||{},d=Zf(a);return d?(c=c[d])?jb(c,b):!1:!0}
function ns(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=os(a,b);var d=ps(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&P(f);var k=g.ok,l=function(m){m=m||{};var q=b.context||n;k?b.onSuccess&&b.onSuccess.call(q,m,g):b.onError&&b.onError.call(q,m,g);b.la&&b.la.call(q,m,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.Ld&&0<b.timeout&&(f=O(function(){e||(e=!0,P(f),b.Ld.call(b.context||n))},b.timeout))}else qs(a,b)}
function qs(a,b){var c=b.format||"JSON";a=os(a,b);var d=ps(a,b),e=!1,f,g=rs(a,function(k){if(!e){e=!0;f&&P(f);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(l||q||u)m=ss(c,k,b.Ga);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};q=b.context||n;
l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.la&&b.la.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Xa&&0<b.timeout&&(f=O(function(){e||(e=!0,g.abort(),P(f),b.Xa.call(b.context||n,g))},b.timeout));
return g}
function os(a,b){b.jj&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME",void 0),d=b.ta;d&&(d[c]&&delete d[c],a=Ur(a,d));return a}
function ps(a,b){var c=M("XSRF_FIELD_NAME",void 0),d=M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.O,g=M("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.gj||Zf(a)&&!b.withCredentials&&Zf(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.O&&b.O[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Sr(e),Qb(e,f),e=b.Xd&&"JSON"==b.Xd?JSON.stringify(e):dg(e));f=e||f&&!Kb(f);!js&&f&&"POST"!=b.method&&(js=!0,Pr(Error("AJAX request with postData should use POST")));
return e}
function ss(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ts(b):null)d={},B(b.getElementsByTagName("*"),function(e){d[e.tagName]=us(e)})}c&&vs(d);
return d}
function vs(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=gd(a[b],null):vs(a[b])}}
function ts(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function us(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ws(a,b){if(!a)return null;var c=a.getElementsByTagName(b);return c&&0<c.length?us(c[0]):null}
var xs=ts;function rs(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Or(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=es();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;cs("debug_forward_web_query_parameters")&&(a=ms(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ks(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var ys={},zs=0;
function As(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Mc,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=uc(yc(a)).toString(),"about:invalid#zClosurez"===a?a="":(a=Zc($c(a)).toString(),a=xd(Ei(a))),ec(a)||(a=of("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),af(a).body.appendChild(a))):e?rs(a,b,"POST",e,d):M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?rs(a,b,"GET","",d):(Nr("web_use_beacon_api_for_ad_click_server_pings")&&-1!=Yf(Xf(a)[5]||null).indexOf("/aclk")&&
"1"===ig(a,"ae")&&"1"===ig(a,"act")?Bs(a)?(b&&b(),d=!0):d=!1:d=!1,d||Cs(a,b)))}
function Bs(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Cs(a,b){var c=new Image,d=""+zs++;ys[d]=c;c.onload=c.onerror=function(){b&&ys[d]&&b();delete ys[d]};
c.src=a}
;var Ds=0;function Es(a){var b=a.__yt_uid_key;b||(b=Fs(),a.__yt_uid_key=b);return b}
function Gs(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?B(a.childNodes,function(c){b.appendChild(Gs(c))}):b.innerHTML=a.innerHTML;
return b}
function Hs(a,b){a=F(a);b=F(b);return!!Sf(a,function(c){return c===b},!0,void 0)}
function Is(a,b){var c=cf(a,null,b);return c.length?c[0]:null}
function Js(){var a=document,b;eb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Ks(){Jo(document.body,"hide-players",!1);B(ef("preserve-players"),function(a){Ho(a,"preserve-players")})}
var Fs=w("ytDomDomGetNextId")||function(){return++Ds};
t("ytDomDomGetNextId",Fs,void 0);var Ls={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ms(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Ls||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Ns(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Ms.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ms.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ms.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Os=w("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Os,void 0);var Ps=w("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",Ps,void 0);
function Qs(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Jb(Os,function(e){var f=Aa(e[4])&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&Mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Q(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Qs(a,b,c,d);if(e)return e;e=++Ps.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new Ms(k);if(!Sf(k.relatedTarget,function(l){return l==a},!0))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new Ms(k);
k.currentTarget=a;return c.call(a,k)};
g=Or(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Rs()||Aa(d)?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Os[e]=[a,b,c,g,d];return e}
function Ss(a,b,c,d){var e=a||document;return Q(e,b,function(f){var g=Sf(f.target,function(k){return k===e||d(k)},!0);
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function R(a){a&&("string"==typeof a&&(a=[a]),B(a,function(b){if(b in Os){var c=Os[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Rs()||Aa(c)?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Os[b]}}))}
function Ts(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Us(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}
var Rs=zb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Vs(a,b,c,d){return Ss(a,b,c,function(e){return K(e,d)})}
function Ws(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function Xs(a,b,c){var d=void 0===d?{}:d;var e=Q(a,b,function(){R(e);c.apply(a,arguments)},d)}
function Ys(a){for(var b in Os)Os[b][0]==a&&R(b)}
;var Zs=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,$s=/^https?:\/\/(www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/slav)/,at=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;function bt(a,b,c,d){!a&&(void 0===c?0:c)&&Qr(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a}
function ct(a){var b=void 0===b?!1:b;if(!(b=bt(Zs.test(a),a,b,"Active View 3rd Party Integration URL"))){var c=void 0===c?!1:c;b=bt($s.test(a),a,c,"Google/YouTube Brand Lift URL")}if(!(c=b)){var d=void 0===d?!1:d;c=bt(at.test(a),a,d,"Nielsen OCR URL")}return c}
;var dt={},et=0;
function ft(a,b,c,d,e,f){f=f||{};f.name=c||M("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=et||(cs("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=Pe(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&La(window.yterr)&&window.yterr(a),dt[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={ta:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},O:{url:M("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.O.stack=e);for(var g in f)b.O["client."+g]=f[g];if(g=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var k in g)b.O[k]=g[k];qs(M("ECATCHER_REPORT_HOST","")+"/error_204",b);dt[a.message]=!0;et++}}
;var gt={Rh:"atp",Vi:"ska",Ei:"que",xi:"mus",Ui:"sus",gi:"dsp",Pi:"seq"};var ht=w("ytPubsubPubsubInstance")||new br;br.prototype.subscribe=br.prototype.subscribe;br.prototype.unsubscribeByKey=br.prototype.sa;br.prototype.publish=br.prototype.ka;br.prototype.clear=br.prototype.clear;t("ytPubsubPubsubInstance",ht,void 0);var it=w("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",it,void 0);var jt=w("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",jt,void 0);var kt=w("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",kt,void 0);
function S(a,b,c){var d=lt();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){it[e]&&b.apply(c||window,f)};
try{kt[a]?g():O(g,0)}catch(k){Pr(k)}},c);
it[e]=!0;jt[a]||(jt[a]=[]);jt[a].push(e);return e}return 0}
function mt(a,b,c){var d=S(a,function(e){b.apply(c,arguments);nt(d)},c)}
function nt(a){var b=lt();b&&(Ba(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),B(a,function(c){b.unsubscribeByKey(c);delete it[c]}))}
function T(a,b){var c=lt();return c?c.publish.apply(c,arguments):!1}
function ot(a,b){kt[a]=!0;var c=lt();c=c?c.publish.apply(c,arguments):!1;kt[a]=!1;return c}
function pt(a){var b=lt();if(b)if(b.clear(a),a)qt(a);else for(var c in jt)qt(c)}
function lt(){return w("ytPubsubPubsubInstance")}
function qt(a){jt[a]&&(a=jt[a],B(a,function(b){it[b]&&delete it[b]}),a.length=0)}
;var rt=Math.pow(2,16)-1,st=null,tt=0,ut={log_event:"events",log_interaction:"interactions"},vt=Object.create(null);vt.log_event="GENERIC_EVENT_LOGGING";vt.log_interaction="INTERACTION_LOGGING";var wt=new Set(["log_event"]),xt={},zt=0,At=0,Bt=w("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",Bt,void 0);var Ct=w("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",Ct,void 0);var Dt=w("ytLoggingTransportDispatchedStats_")||{};
t("ytLoggingTransportDispatchedStats_",Dt,void 0);var Et=w("ytLoggingTransportCapturedTime_")||{};t("ytytLoggingTransportCapturedTime_",Et,void 0);function Ft(){P(zt);P(At);At=0;if(!Kb(Bt)){for(var a in Bt){var b=xt[a];b&&(Gt(a,b),delete Bt[a])}Kb(Bt)||Ht()}}
function It(){var a=[];for(e in Bt){var b=Dt[e]||{};Dt[e]=b;for(var c in Bt[e]){var d=Jt(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(Kr());for(var f in Dt)b=Dt[f],b.eventType=f in vt?vt[f]:"UNKNOWN_TYPE",c=Et[f],b.metricIntervalMs=c?e-c:e-NaN,a.push(b),Et[f]=e,delete Dt[f];return a}
function Ht(){cs("web_gel_timeout_cap")&&!At&&(At=O(Ft,6E4));P(zt);zt=O(Ft,M("LOGGING_BATCH_TIMEOUT",bs("web_gel_debounce_ms",1E4)))}
function Jt(a,b){b=void 0===b?"":b;Bt[a]=Bt[a]||{};Bt[a][b]=Bt[a][b]||[];return Bt[a][b]}
function Gt(a,b){var c=ut[a],d=Dt[a]||{};Dt[a]=d;var e=Math.round(Kr());for(m in Bt[a]){var f=Ob,g=b.f;g={client:{hl:g.If,gl:g.Hf,clientName:g.Ff,clientVersion:g.Gf,configInfo:g.Ef}};var k=window.devicePixelRatio;k&&1!=k&&(g.client.screenDensityFloat=String(k));M("DELEGATED_SESSION_ID")&&!cs("pageid_as_header_web")&&(g.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=Jt(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=Ct[m])a:{var l=
m;if(g.videoId)k="VIDEO";else if(g.playlistId)k="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:k}]}delete Ct[m];f.requestTimeMs=e;if(g=M("EVENT_ID",void 0))k=(M("BATCH_CLIENT_COUNTER",void 0)||0)+1,k>rt&&(k=1),Mr("BATCH_CLIENT_COUNTER",k),g={serializedEventId:g,clientCounter:k},f.serializedClientEventId=g,st&&tt&&cs("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:st,
roundtripMs:tt}),st=g,tt=0;Kt(b,a,f,{retry:wt.has(a),onSuccess:y(Lt,this,Kr())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function Lt(a){tt=Math.round(Kr()-a)}
;function Mt(a){this.N=a;this.f=null;this.j=0;this.w=null;this.l=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.i=0;this.D=Q(window,"mousemove",y(this.H,this));this.L=fs(y(this.A,this),25)}
A(Mt,Ai);Mt.prototype.H=function(a){p(a.f)||Ns(a);var b=a.f;p(a.g)||Ns(a);this.f=new We(b,a.g)};
Mt.prototype.A=function(){if(this.f){var a=Kr();if(0!=this.j){var b=this.w,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.g[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.N();this.l=d}this.j=a;this.w=this.f;this.i=(this.i+1)%4}};
Mt.prototype.K=function(){gs(this.L);R(this.D)};function Nt(){}
function Ot(a,b){return Pt(a,1,b)}
;function Qt(){}
la(Qt,Nt);function Pt(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):O(a,c||0)}
function Rt(a){if(!isNaN(a)){var b=w("yt.scheduler.instance.cancelJob");b?b(a):P(a)}}
Qt.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
Qt.prototype.pause=function(){var a=w("yt.scheduler.instance.pause");a&&a()};
Ha(Qt);Qt.getInstance();var St={};
function Tt(a){var b=void 0===a?{}:a;a=void 0===b.Af?!0:b.Af;b=void 0===b.Qg?!1:b.Qg;if(null==w("_lact",window)){var c=parseInt(M("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;t("_lact",c,window);t("_fact",c,window);-1==c&&Ut();Q(document,"keydown",Ut);Q(document,"keyup",Ut);Q(document,"mousedown",Ut);Q(document,"mouseup",Ut);a&&(b?Q(window,"touchmove",function(){Vt("touchmove",200)},{passive:!0}):(Q(window,"resize",function(){Vt("resize",200)}),Q(window,"scroll",function(){Vt("scroll",200)})));
new Mt(function(){Vt("mouse",100)});
Q(document,"touchstart",Ut,{passive:!0});Q(document,"touchend",Ut,{passive:!0})}}
function Vt(a,b){St[a]||(St[a]=!0,Ot(function(){Ut();St[a]=!1},b))}
function Ut(){null==w("_lact",window)&&Tt();var a=z();t("_lact",a,window);-1==w("_fact",window)&&t("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function lg(){var a=w("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var Wt=w("ytLoggingGelSequenceIdObj_")||{};t("ytLoggingGelSequenceIdObj_",Wt,void 0);
function Xt(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Kr());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:lg())};cs("log_sequence_info_on_gel_web")&&d.ec&&(a=e.context,b=d.ec,Wt[b]=b in Wt?Wt[b]+1:0,a.sequence={index:Wt[b],groupKey:b},d.Pe&&delete Wt[d.ec]);(d=d.fd)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Ct[d.token]=a,d=Jt("log_event",d.token)):d=Jt("log_event");d.push(e);c&&(xt.log_event=new c);d.length>=(bs("web_logging_max_batch")||
100)?Ft():Ht()}
;function Yt(a){this.f=a}
function Zt(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=Zt(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
Yt.prototype.toString=function(){return JSON.stringify(Zt(this))};function $t(a,b,c){a={mj:a,payload:b,options:c};(b=M("INTERACTIONS_LOGGER_QUEUE",void 0))?b.push(a):Mr("INTERACTIONS_LOGGER_QUEUE",[a])}
;function au(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.dj||M("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().aj:b=rm([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=M("SESSION_INDEX",0),cs("pageid_as_header_web")&&(d["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return d}
function bu(a){a=Object.assign({},a);delete a.Authorization;var b=rm();if(b){var c=new Do;c.update(M("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=!0;Ka(b);!1===c||void 0===c?c=0:!0===c&&(c=3);if(!te){te={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));se[f]=g;for(var k=0;k<g.length;k++){var l=g[k];void 0===te[l]&&(te[l]=k)}}}c=se[c];d=[];for(e=0;e<b.length;e+=3){var m=b[e],
q=(f=e+1<b.length)?b[e+1]:0;l=(g=e+2<b.length)?b[e+2]:0;k=m>>2;m=(m&3)<<4|q>>4;q=(q&15)<<2|l>>6;l&=63;g||(l=64,f||(q=64));d.push(c[k],c[m],c[q]||"",c[l]||"")}a.hash=d.join("")}return a}
;function cu(a,b,c,d,e,f){Oe.set(""+a,b,c,d,void 0===e?"youtube.com":e,void 0===f?!1:f)}
function du(a,b){return Oe.get(""+a,b)}
function eu(a,b,c){return Oe.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;function fu(){var a;(a=Ar("yt.innertube"))||(a=new ur("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new kr(a):null;this.g=document.domain||window.location.hostname}
fu.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ei(b))}catch(f){return}else e=escape(b);cu(a,e,c,"/",this.g)};
fu.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=du(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
fu.prototype.remove=function(a){this.f&&this.f.remove(a);eu(a,"/",this.g)};var gu=new fu;function hu(a,b,c,d){if(d)return null;d=gu.get("nextId",!0)||1;var e=gu.get("requests",!0)||{};e[d]={method:a,request:b,authState:bu(c),requestTime:Math.round(Kr())};gu.set("nextId",d+1,86400,!0);gu.set("requests",e,86400,!0);return d}
function iu(a){var b=gu.get("requests",!0)||{};delete b[a];gu.set("requests",b,86400,!0)}
function ju(a){var b=gu.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Kr())-d.requestTime)){var e=d.authState,f=bu(au(!1));Mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Kr())),Kt(a,d.method,e,{}));delete b[c]}}gu.set("requests",b,86400,!0)}}
;function ku(a){var b=this;this.f=a||{Cf:M("INNERTUBE_API_KEY",void 0),Df:M("INNERTUBE_API_VERSION",void 0),Ef:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ff:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Gf:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),If:M("INNERTUBE_CONTEXT_HL",void 0),Hf:M("INNERTUBE_CONTEXT_GL",void 0),Jf:M("INNERTUBE_HOST_OVERRIDE",void 0)||"",Kf:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Pt(function(){ju(b)},0,5E3)}
function Kt(a,b,c,d){!M("VISITOR_DATA")&&.01>Math.random()&&Pr(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",O:c,Xd:"JSON",Xa:function(){d.Xa()},
Ld:d.Xa,onSuccess:function(v,x){if(d.onSuccess)d.onSuccess(x)},
Kd:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,x){if(d.onError)d.onError(x)},
lj:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Jf;g&&(f=g);g=a.f.Kf||!1;var k=au(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=Ur(""+f+("/youtubei/"+a.f.Df+"/"+b),{alt:"json",key:a.f.Cf}),m;if(d.retry&&cs("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=hu(b,c,k,g))){var q=e.onSuccess,u=e.Kd;e.onSuccess=function(v,x){iu(m);q(v,x)};
c.Kd=function(v,x){iu(m);u(v,x)}}try{cs("use_fetch_for_op_xhr")?ns(l,e):(e.method="POST",e.O||(e.O={}),qs(l,e))}catch(v){if("InvalidAccessError"==v)m&&(iu(m),m=0),Pr(Error("An extension is blocking network request."),"WARNING");
else throw v;}m&&Pt(function(){ju(a)},0,5E3)}
;var lu=z().toString();
function mu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(lu)for(a=1,b=0;b<lu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^lu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var nu=w("ytLoggingTimeDocumentNonce_")||mu();t("ytLoggingTimeDocumentNonce_",nu,void 0);var ou=0,pu=null,qu=null;function bw(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function cw(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function dw(a){return M(cw(void 0===a?0:a),void 0)}
t("yt_logging_screen.getRootVeType",dw,void 0);function ew(a){a=void 0===a?0:a;var b=M(bw(a));b||0!=a||(cs("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=M("EVENT_ID"));return b?b:null}
t("yt_logging_screen.getCurrentCsn",ew,void 0);t("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==M(bw(c))||b!==M(cw(c)))Mr(bw(c),a),Mr(cw(c),b),0==c&&(b=function(){setTimeout(function(){a&&Xt("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:nu,clientScreenNonce:a},ku)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())},void 0);function fw(a,b,c){var d=void 0===d?!0:d;var e=M("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Zf(window.location.href);f&&e.push(f);f=Zf(a);if(jb(e,f)||!f&&0==a.lastIndexOf("/",0))if(cs("autoescape_tempdata_url")&&(e=document.createElement("a"),rd(e,a),a=e.href),a){f=Xf(a);a=f[5];e=f[6];f=f[7];var g="";a&&(g+=a);e&&(g+="?"+e);f&&(g+="#"+f);a=g;e=a.indexOf("#");if(a=0>e?a:a.substr(0,e))d&&(b.itct||b.ved)&&(b.csn=b.csn||ew()),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+Hd(a).toString(36),b=b?dg(b):"",
cu(d,b,c||5,"/"))):(c="ST-"+Hd(a).toString(36),b=b?dg(b):"",cu(c,b,5,"/"))}}
;function gw(a,b,c){c=void 0===c?{}:c;var d=ku;M("ytLoggingEventsDefaultDisabled",!1)&&ku==ku&&(d=null);Xt(a,b,d,c)}
function hw(){cs("log_web_meta")&&It().forEach(function(a){gw("delayedEventMetricCaptured",a)})}
;var iw=w("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",iw,void 0);var jw=0;function kw(a){iw[a]=iw[a]||{count:0};var b=iw[a];b.count++;b.time=Kr();jw||(jw=Pt(lw,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;ft(c,b)}return!0}return!1}
function lw(){var a=Kr(),b;for(b in iw)6E4<a-iw[b].time&&delete iw[b];jw=0}
;function mw(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!nw(a)||c.some(function(e){return!nw(e)}))throw Error("Only objects may be merged.");
c=ba(c);for(d=c.next();!d.done;d=c.next())ow(a,d.value)}
function ow(a,b){for(var c in b)if(nw(b[c])){if(c in a&&!nw(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ow(a[c],b[c])}else if(pw(b[c])){if(c in a&&!pw(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);qw(a[c],b[c])}else a[c]=b[c];return a}
function qw(a,b){for(var c=ba(b),d=c.next();!d.done;d=c.next())d=d.value,nw(d)?a.push(ow({},d)):pw(d)?a.push(qw([],d)):a.push(d);return a}
function nw(a){return"object"===typeof a&&!Array.isArray(a)}
function pw(a){return"object"===typeof a&&Array.isArray(a)}
;function rw(a,b){this.version=a;this.args=b}
;function sw(a,b){this.topic=a;this.f=b}
sw.prototype.toString=function(){return this.topic};var tw=w("ytPubsub2Pubsub2Instance")||new br;br.prototype.subscribe=br.prototype.subscribe;br.prototype.unsubscribeByKey=br.prototype.sa;br.prototype.publish=br.prototype.ka;br.prototype.clear=br.prototype.clear;t("ytPubsub2Pubsub2Instance",tw,void 0);var uw=w("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",uw,void 0);var vw=w("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",vw,void 0);var ww=w("ytPubsub2Pubsub2IsAsync")||{};
t("ytPubsub2Pubsub2IsAsync",ww,void 0);t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function xw(a,b){var c=yw();return c?c.publish.call(c,a.toString(),a,b):!1}
function zw(a,b,c){var d=yw();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var k=w("ytPubsub2Pubsub2SkipSubKey");k&&k==e||(k=function(){if(uw[e])try{if(g&&a instanceof sw&&a!=f)try{var l=a.f,m=g;if(!m.args||!m.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!l.Ra){var q=new l;l.Ra=q.version}var u=l.Ra}catch(v){}if(!u||m.version!=u)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(l,
pb(m.args))}catch(v){throw v.message="yt.pubsub2.Data.deserialize(): "+v.message,v;}}catch(v){throw v.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+v.message,v;}b.call(c||window,g)}catch(v){Pr(v)}},ww[a.toString()]?w("yt.scheduler.instance")?Ot(k):O(k,0):k())});
uw[e]=!0;vw[a.toString()]||(vw[a.toString()]=[]);vw[a.toString()].push(e);return e}
function Aw(a){var b=yw();b&&(Ba(a)&&(a=[a]),B(a,function(c){b.unsubscribeByKey(c);delete uw[c]}))}
function yw(){return w("ytPubsub2Pubsub2Instance")}
;var Bw=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Cw(){var a=M("TIMING_TICK_EXPIRATION");a||(a={},Mr("TIMING_TICK_EXPIRATION",a));return a}
function Dw(){var a=Cw(),b;for(b in a)Rt(a[b]);Mr("TIMING_TICK_EXPIRATION",{})}
;function Ew(a,b){rw.call(this,1,arguments)}
la(Ew,rw);function Fw(a,b){rw.call(this,1,arguments)}
la(Fw,rw);var Gw=new sw("aft-recorded",Ew),Hw=new sw("timing-sent",Fw);var Iw={vc:!0},U={},Jw=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cpn="clientPlaybackNonce",U.cseg="creatorInfo.creatorSegment",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="getHomeRequestId",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",
U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.ncnp="webInfo.nonPreloadedNodeCount",U.prt="playbackRequiresTap",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre=
"playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.st="serverTimeMs",U.aq="tvInfo.appQuality",U.br_trs="tvInfo.bedrockTriggerState",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U),Kw="ap c cver cbrand cmodel ei srt yt_fss yt_li plid all_vc vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Lw="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Mw={},Nw=(Mw.mver="MEASUREMENT_VERSION_",Mw.pis="PLAYER_INITIALIZED_STATE_",Mw.yt_pt="LATENCY_PLAYER_",Mw.pa="LATENCY_ACTION_",Mw.yt_vst="VIDEO_STREAM_TYPE_",Mw),Ow=!1;
function Pw(a,b,c){if(!b&&"_"!=a[0]){var d=a;Bw.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Bw.mark(d))}d=Qw(c);var e=b||Kr();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=Cw();if(e=d[a])Rt(e),d[a]=0;Rw(c)["tick_"+a]=b;c||b||Kr();Sw(c)?(d=Tw(c),"_start"==a?kw("baseline_"+d)||gw("latencyActionBaselined",{clientActionNonce:d},{timestamp:b}):kw("tick_"+a+"_"+d)||gw("latencyActionTicked",{tickName:a,clientActionNonce:d},{timestamp:b}),a=!0):a=!1;a||Uw(!1,c)}
function Vw(a,b,c){Ww(c).info[a]=b;if(Sw(c))if(Rw(c)["info_"+a]=b,a in Jw){var d=Jw[a];jb(Lw,d)&&(b=!!b);a in Nw&&(b=Nw[a]+b.toUpperCase());a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;Sw(c)&&(b=Ww(c),"gelInfo"in b||(b.gelInfo={}),mw(b.gelInfo,a),c=Tw(c),b=Object.keys(a).join(""),kw("info_"+b+"_"+c)||(a.clientActionNonce=c,gw("latencyActionInfo",a)))}else jb(Kw,a)||(c=Error("Unknown label logged with GEL CSI"),c.params=a,Qr(c))}
function Xw(a){var b=Qw(a);if(b.aft)return b.aft;a=M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Uw(a,b){if(!Yw(b)){var c=M((b||"")+"TIMING_ACTION",void 0),d=Qw(b);if(w("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Xw(b)))if(Ow||(xw(Gw,new Ew(Math.round(c-d._start),b)),Ow=!0),a||b)Zw(b);else{c=!0;var e=M("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in d)){c=!1;break}c&&Zw(b)}}}
y(Bw.clearResourceTimings||Bw.webkitClearResourceTimings||Bw.mozClearResourceTimings||Bw.msClearResourceTimings||Bw.oClearResourceTimings||Ga,Bw);function Tw(a){var b=Ww(a).nonce;b||(b=mu(),Ww(a).nonce=b);return b}
function Qw(a){return Ww(a).tick}
function Rw(a){a=Ww(a);"gel"in a||(a.gel={});return a.gel}
function Ww(a){var b;(b=w("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},t("ytcsi."+(a||"")+"data_",b,void 0));return b}
function Yw(a){return!!w("yt.timing."+(a||"")+"pingSent_")}
function $w(a){var b=Qw(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Ww(a).info.yt_pvis}
function Sw(a){return!!cs("csi_on_gel")||!!Ww(a).useGel}
function Zw(a){Dw();if(!Sw(a)){var b=Qw(a),c=Ww(a).info,d=b._start;for(g in b)if(0==g.lastIndexOf("_",0)&&Ja(b[g])){var e=g.slice(1);if(e in Iw){var f=cb(b[g],function(q){return Math.round(q-d)});
c["all_"+e]=f.join()}delete b[g]}f=M("CSI_SERVICE_NAME","youtube");var g={v:2,s:f,action:M((a||"")+"TIMING_ACTION",void 0)};e=Vw.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var k=window.location.protocol+w("ytplayer.config.assets.js");(k=Bw.getEntriesByName?Bw.getEntriesByName(k)[0]:null)?c.h5jse=Math.round(c.h5jse-k.responseEnd):delete c.h5jse}b.aft=Xw(a);$w(a)&&"youtube"==f&&(Vw("yt_lt","hot_bg",a),f=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-f));for(var l in c)"_"!=l.charAt(0)&&(g[l]=c[l]);
b.ps=Kr();l={};f=[];for(var m in b)"_"!=m.charAt(0)&&(k=Math.round(b[m]-d),l[m]=k,f.push(m+"."+k));g.rt=f.join(",");(b=w("ytdebug.logTiming"))&&b(g,l);ax(g,!!c.ap,a);xw(Hw,new Fw(l.aft+(e||0),a))}}
function ax(a,b,c){if(cs("debug_csi_data")){var d=w("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;Bs(a,f)||As(a,void 0,void 0,void 0,f)}else As(a);t("yt.timing."+(c||"")+"pingSent_",!0,void 0)}
;function bx(a,b,c,d){Ai.call(this);this.l=a;this.g=b;this.L=c;this.j=d;this.i=of("DIV",{"class":"ads-mute-button"});Hf(this.i,String.fromCharCode(215));this.f=of("DIV");qd(this.f,cx(this));this.w=G("ads-mute-undo",this.f);Q(this.i,"click",y(this.A,this));this.l.firstElementChild.appendChild(this.i);a=Hb(this.g.mute_survey);xb(a);B(a,function(e){var f=of("INPUT",{"class":"yt-uix-form-input-radio",type:"radio"}),g=of("SPAN",{"class":"yt-uix-form-input-radio-element"});f=of("SPAN",{"class":"yt-uix-form-input-radio-container"},
f,g);f=of("LABEL","ads-mute-option",f,e);Q(f,"click",y(this.D,this,this.g.mute_survey[e]));this.f.firstChild.appendChild(f)},this);
Q(this.f,"click",Us);Q(this.w,"click",y(this.H,this));mt("dispose",this.dispose,this)}
A(bx,Ai);function cx(a){var b=a.g.mute_gone||id,c=a.g.mute_question||id;a=a.g.mute_undo||id;return ed("div",{"class":"ads-mute-survey"},fd(ed("span",{"class":"ads-mute-check"}),ed("b",{},b)," ",c,ed("div",{"class":"ads-mute-undo"},a)))}
bx.prototype.K=function(){B(ef("ads-mute-option",this.f),function(a){Ys(a)});
Ys(this.i);zf(this.i);Ys(this.f);zf(this.f);Ys(this.w)};
bx.prototype.A=function(a){a.stopPropagation();a.preventDefault();this.j&&As(this.g.mute_url);this.l.firstElementChild.appendChild(this.f);L(Ff(this.f),"contains-mute-survey")};
bx.prototype.H=function(a){a.stopPropagation();a.preventDefault();this.g.mute_undo_url&&this.j&&As(this.g.mute_undo_url);Ho(Ff(this.f),"contains-mute-survey");zf(this.f)};
bx.prototype.D=function(a,b){b.stopPropagation();b.preventDefault();this.j&&As(a);zf(this.l);this.L();this.dispose()};function dx(){var a=new Mh(Ke),b=a.f[0].depth,c={};c=(c.dssz=Je.scripts?Je.scripts.length:0,c.icsg=Qh(a),c.mdo=Rh(a),c.mso=Sh(a),c);Ke.location&&Ke.location.ancestorOrigins&&(c.iag=Oh(a));0<b&&(c.nhd=b);return c}
;var ex="",fx=[],gx="";function hx(a,b){var c=a.media_template_data;(c=Ja(c)?gb(c,function(d){return!!d.imageUrl}):null)?(gx=c.videoId,c={video_id:c.videoId,
ad_type:"watch_related",headline:Ad(a.line1),image_url:c.imageUrl,description1:Ad(a.line2),description2:Ad(a.line3),channel_title:c.channelName,visible_url:Ad(a.visible_url)},ex=Ad(a.url),(new Mp(ex)).g.get("adurl"),ec(Gd(a.creative_view_url))||fx.push(ix(Ad(a.creative_view_url))),ec(Gd(a.p_creative_view_url))||fx.push(ix(Ad(a.p_creative_view_url))),ec(Gd(a.engaged_view_url))||ix(Ad(a.engaged_view_url)),ec(Gd(a.p_engaged_view_url))||ix(Ad(a.p_engaged_view_url)),ec(Gd(a.videoplaytime_25_url))||ix(Ad(a.videoplaytime_25_url)),
ec(Gd(a.p_videoplaytime_25_url))||ix(Ad(a.p_videoplaytime_25_url)),ec(Gd(a.videoplaytime_50_url))||ix(Ad(a.videoplaytime_50_url)),ec(Gd(a.p_videoplaytime_50_url))||ix(Ad(a.p_videoplaytime_50_url)),ec(Gd(a.videoplaytime_75_url))||ix(Ad(a.videoplaytime_75_url)),ec(Gd(a.p_videoplaytime_75_url))||ix(Ad(a.p_videoplaytime_75_url)),ec(Gd(a.videoplaytime_100_url))||ix(Ad(a.videoplaytime_100_url)),ec(Gd(a.p_videoplaytime_100_url))||ix(Ad(a.p_videoplaytime_100_url)),qs("/pyv?"+dg(c),{format:"XML",onSuccess:function(d,
e){b&&b(d,e)},
onError:function(){jx()},
Ga:!0})):jx()}
function kx(a){Pw("parc");0==a.length?jx():hx(a[0],function(b,c){var d=c.html_content,e=F(window.pyv_related_box_id||"watch-related");if(e){var f=e.innerHTML;d&&0!=f.indexOf(Zc(d).toString())&&e.insertBefore(sf(d),e.firstChild);if(d=F("pyv-watch-related-dest-url"))e=!M("PYV_DISABLE_MUTE")&&a[0].mute_url&&a[0].mute_survey,d.setAttribute("href",ex),e&&(d=Ff(d),L(d,"contains-mute-button"),new bx(d,a[0],Ga,!0));Pw("parn");lx();B(fx,function(g){As(g,void 0,ct(g))})}})}
window.google_ad_request_done=function(a){kx(a)};
function mx(a){if(!a||ec(a.responseText))jx();else try{eval(a.responseText)}catch(b){throw jx(),b;}}
function nx(){var a={};return a.dff="times new roman",a.dfs="16",a.ppjl="u",a.rsz="||n|",a}
function lx(){var a={ad_id:"",ad_sys:"",ad_v:gx,break_type:6,content_v:M("VIDEO_ID",void 0),cpn:(w("yt.www.watch.player.getClientPlaybackNonce")||yb())(),device:"1",devicever:"html5",ei:M("GET_PLAYER_EVENT_ID",void 0),el:"detailpage",event:2,format:"2_6",mt:"0",ns:1,slot_pos:"0",ver:"2.0",wt:(new Date).getTime()};a=fg("/api/stats/ads",a);As(a,void 0,ct(a))}
function jx(){var a=M("TIMING_WAIT",[]);lb(a,"parn")&&(Mr("TIMING_WAIT",a),Uw())}
function ix(a){if("https:"==window.location.protocol){var b=new Mp(a);if("https"==b.j)return a;Np(b,"https");return b.toString()}return a}
;function ox(a,b,c){a&&(a.dataset?a.dataset[px(b)]=String(c):a.setAttribute("data-"+b,c))}
function V(a,b){return a?a.dataset?a.dataset[px(b)]:a.getAttribute("data-"+b):null}
function qx(a,b){a&&(a.dataset?delete a.dataset[px(b)]:a.removeAttribute("data-"+b))}
var rx={};function px(a){return rx[a]||(rx[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var sx=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,tx=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ux(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(sx,""),c=c.replace(tx,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b);return null}return vx(a,b,c)}
function vx(a,b,c){c=void 0===c?null:c;var d=wx(a),e=document.getElementById(d),f=e&&V(e,"loaded"),g=e&&!f;if(f)return b&&b(),e;b&&(f=S(d,b),b=""+Na(b),xx[b]=f);return g?e:e=yx(a,d,function(){V(e,"loaded")||(ox(e,"loaded","true"),T(d),O(Ua(pt,d),0))},c)}
function yx(a,b,c,d){d=void 0===d?null:d;var e=rf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ud(e,Vf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function wx(a){var b=document.createElement("a");rd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Hd(a)}
var xx={};function zx(a,b,c){As("/gen_204?a="+(a+(b?"&"+b:"")),c)}
;function Ax(){this.i=1E3/24;this.g=null;this.f=[]}
var Bx=new Ax;Ax.prototype.j=function(){for(var a=z(),b=this.f.length-1;0<=b;b--)Cx(this.f[b],a)&&Dx(this,b)};
Ax.prototype.add=function(a){this.f.push(a);this.g||(this.g=fs(y(this.j,this),this.i))};
Ax.prototype.remove=function(a){a=$a(this.f,a);0<=a&&Dx(this,a)};
function Dx(a,b){mb(a.f,b);a.f.length||(gs(a.g),delete a.g)}
;function Ex(a,b){this.f=new fp(0,0,a.x,a.y,b.x,b.y,1,1)}
function Fx(a){return a}
var Gx=new Ex({x:.25,y:.1},{x:.25,y:1});function Hx(a){return ip(Gx.f,a)}
var Ix=new Ex({x:.42,y:0},{x:1,y:1});function Jx(a){return ip(Ix.f,a)}
var Kx=new Ex({x:0,y:0},{x:.58,y:1});function Lx(a){return ip(Kx.f,a)}
var Mx=new Ex({x:.42,y:0},{x:.58,y:1});function Nx(a){return ip(Mx.f,a)}
function Ox(a){switch(a){case "linear":return Fx;case "ease-in":return Jx;case "ease-out":return Lx;case "ease-in-out":return Nx;default:return Hx}}
;function Px(a,b){var c=b||{};this.el=a;this.duration=c.duration||.25;this.Vb=c.la||null;this.Lc=c.Lc||"ease";this.setup(c);c.kj||this.play()}
Px.prototype.setup=function(){};function Qx(a,b){this.g=this.f=0;this.i=Bx;this.w=null;Px.call(this,a,b)}
A(Qx,Px);Qx.prototype.setup=function(a){this.f=0;this.i=a.loop||Bx;this.w=Ox(this.Lc)};
Qx.prototype.play=function(){this.g=z();Cx(this,this.g);this.i.add(this)};
Qx.prototype.pause=function(){this.i.remove(this)};
function Cx(a,b){var c=1E3*a.duration;a.f=Math.min(a.f+(b-a.g),c);a.g=b;var d=a.w(a.f/c);d=a.B-(a.B-a.l)*d;a.j?a.el.style.filter="alpha(opacity="+Math.floor(100*d)+")":a.el.style.opacity=d;if(c=a.f>=c)a.la(),a.Vb&&O(y(a.Vb,n,a),0);return c}
Qx.prototype.la=function(){};function Rx(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||Nb(b);this.assets=a.assets||{};this.attrs=a.attrs||Nb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Rx.prototype.clone=function(){var a=new Rx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ia(c)?a[b]=Nb(c):a[b]=c}return a};function Sx(){return parseInt(M("DCLKSTAT",0),10)}
;function Tx(){this.g=!1;this.f=null}
Tx.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,ux(b,function(){f.g=!1;if(window.botguard)Ux(f,c,d);else{var g=wx(b),k=document.getElementById(g);k&&(pt(g),k.parentNode.removeChild(k));g=Error("Unable to load Botguard");g.params="from "+b;Qr(g)}},e)):a&&(eval(a),window.botguard?Ux(this,c,d):Qr(Error("Unable to load Botguard from JS")))};
function Ux(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){Qr(d)}c&&c(b)}
Tx.prototype.dispose=function(){this.f=null};var Vx=new Tx;function Wx(){return!!Vx.f}
function Xx(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Vx.f?Vx.f.invoke(void 0,void 0,a):null}
;function Yx(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?"":c;d=void 0===d?window:d;vd(d.location,fg(a,b)+c)}
function Zx(a,b){b&&fw(a,b);(window.ytspf||{}).enabled?spf.navigate(a):Yx(a)}
function $x(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=M("EVENT_ID");d&&(b.ei||(b.ei=d));b&&fw(a,b);if(c)return!1;Zx(a);return!0}
;function ay(){Ai.call(this);this.f=[]}
la(ay,Ai);ay.prototype.K=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.callback)}Ai.prototype.K.call(this)};var by=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function cy(a,b){a=a||"";if(window.spf){var c=a.match(by);spf.style.load(a,c?c[1]:"",b);return null}return dy(a,b)}
function dy(a,b){var c=ey(a),d=document.getElementById(c),e=d&&V(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(S(c,b),Na(b));return f?d:d=fy(a,c,function(){V(d,"loaded")||(ox(d,"loaded","true"),T(c),O(Ua(pt,c),0))})}
function fy(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Vf(a);d.rel="stylesheet";d.href=cc(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ey(a){var b=rf("A");a=zc(a);rd(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Hd(b)}
;function gy(a,b){Ai.call(this);this.l=this.ja=a;this.L=b;this.w=!1;this.api={};this.W=this.H=null;this.D=new br;Bi(this,Ua(Ci,this.D));this.i={};this.R=this.Z=this.g=this.ab=this.f=null;this.N=!1;this.j=this.A=null;this.ea={};this.Ib=["onReady"];this.Da=null;this.ub=NaN;this.U={};hy(this);this.Jb("WATCH_LATER_VIDEO_ADDED",this.tg.bind(this));this.Jb("WATCH_LATER_VIDEO_REMOVED",this.ug.bind(this));this.Jb("onAdAnnounce",this.Ke.bind(this));this.mc=new ay(this);Bi(this,Ua(Ci,this.mc))}
la(gy,Ai);h=gy.prototype;h.getId=function(){return this.L};
h.loadNewVideoConfig=function(a){if(!this.P()){a instanceof Rx||(a=new Rx(a));this.ab=a;this.f=a.clone();this.g=this.f.attrs.id||this.g;"video-player"==this.g&&(this.g=this.L,this.f.attrs.id=this.L);this.l.id==this.g&&(this.g+="-player",this.f.attrs.id=this.g);this.f.args.enablejsapi="1";this.f.args.playerapiid=this.L;this.Z||(this.Z=iy(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=Qg(Number(a)||a,!0);if(a=this.f.attrs.height)this.l.style.height=
Qg(Number(a)||a,!0);jy(this);this.w&&ky(this)}};
h.Ve=function(){return this.ab};
function ky(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function ly(a){var b=!0,c=my(a);c&&a.f&&(a=a.f,b=V(c,"version")==a.assets.js);return b&&!!w("yt.player.Application.create")}
function jy(a){if(!a.P()&&!a.N){var b=ly(a);if(b&&"html5"==(my(a)?"html5":null))a.R="html5",a.w||ny(a);else if(oy(a),a.R="html5",b&&a.j)a.ja.appendChild(a.j),ny(a);else{a.f.loaded=!0;var c=!1;a.A=function(){c=!0;var d=a.f.clone();w("yt.player.Application.create")(a.ja,d);ny(a)};
a.N=!0;b?a.A():(ux(a.f.assets.js,a.A),cy(a.f.assets.css),py(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function my(a){var b=F(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
function ny(a){if(!a.P()){var b=my(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.N=!1,b.isNotServable&&b.isNotServable(a.f.args.video_id)||qy(a)):a.ub=O(function(){ny(a)},50)}}
function qy(a){hy(a);a.w=!0;var b=my(a);b.addEventListener&&(a.H=ry(a,b,"addEventListener"));b.removeEventListener&&(a.W=ry(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=ry(a,b,e))}for(var f in a.i)a.H(f,a.i[f]);ky(a);a.Z&&a.Z(a.api);a.D.ka("onReady",a.api)}
function ry(a,b,c){var d=b[c];return function(){try{return a.Da=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Da=e,Qr(e))}}}
function hy(a){a.w=!1;if(a.W)for(var b in a.i)a.W(b,a.i[b]);for(var c in a.U)P(parseInt(c,10));a.U={};a.H=null;a.W=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Jb.bind(a);a.api.removeEventListener=a.Tg.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.We.bind(a);a.api.getPlayerType=a.Ye.bind(a);a.api.getCurrentVideoConfig=a.Ve.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Rf.bind(a)}
h.Rf=function(){return this.w};
h.Jb=function(a,b){var c=this,d=iy(this,b);if(d){if(!jb(this.Ib,a)&&!this.i[a]){var e=sy(this,a);this.H&&this.H(a,e)}this.D.subscribe(a,d);"onReady"==a&&this.w&&O(function(){d(c.api)},0)}};
h.Tg=function(a,b){if(!this.P()){var c=iy(this,b);c&&dr(this.D,a,c)}};
function iy(a,b){var c=b;if("string"==typeof b){if(a.ea[b])return a.ea[b];c=function(){var d=w(b);d&&d.apply(n,arguments)};
a.ea[b]=c}return c?c:null}
function sy(a,b){var c="ytPlayer"+b+a.L;a.i[b]=c;n[c]=function(d){var e=O(function(){if(!a.P()){a.D.ka(b,d);var f=a.U,g=String(e);g in f&&delete f[g]}},0);
Lb(a.U,String(e))};
return c}
h.Ke=function(a){T("a11y-announce",a)};
h.tg=function(a){T("WATCH_LATER_VIDEO_ADDED",a)};
h.ug=function(a){T("WATCH_LATER_VIDEO_REMOVED",a)};
h.Ye=function(){return this.R||(my(this)?"html5":null)};
h.We=function(){return this.Da};
function oy(a){a.cancel();hy(a);a.R=null;a.f&&(a.f.loaded=!1);var b=my(a);b&&(ly(a)||!py(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));yf(a.ja)}
h.cancel=function(){if(this.A){var a=this.A;this.f.assets.js&&a&&(a=""+Na(a),(a=xx[a])&&nt(a))}P(this.ub);this.N=!1};
h.K=function(){oy(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){Pr(b)}this.ea=null;for(var a in this.i)n[this.i[a]]=null;this.ab=this.f=this.api=null;delete this.ja;delete this.l;Ai.prototype.K.call(this)};
function py(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var ty={},uy="player_uid_"+(1E9*Math.random()>>>0);function vy(a){delete ty[a.getId()]}
function wy(){var a;if(a=document.getElementById("player-api")){var b=uy+"_"+Na(a),c=ty[b];c||(c=new gy(a,b),ty[b]=c);a=c.api}else a=null;return a}
;var xy="",yy="",zy=!1;function Ay(a,b){a||(a="");b||(b=!1);var c=F("watch-channel-brand-div");c&&Jo(c,"collapsible",b);if(c=F("google_companion_ad_div"))c.innerHTML=a}
function By(a){var b=Math.round(1E4*Math.random());return['<iframe src="',a,'" name="ifr_300x250ad',b,'" id="ifr_300x250ad',b,'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")}
function Cy(a){return!!a.match("/ad_companion.*render=video_wall_companion")}
function Dy(a,b){var c=250;"video"==a&&(c=60);var d=decodeURIComponent(b);Ay(['<iframe name="fw_ad" id="fw_ad" ','width="300" height="'+c+'" ','marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join(""));var e=F("fw_ad");if(e){e=e.contentWindow?e.contentWindow:e.contentDocument&&e.contentDocument.document?e.contentDocument.document:e.contentDocument;var f=navigator.userAgent.toLowerCase();c=-1!=f.indexOf("msie");f=-1!=f.indexOf("opera");e.document.open();
e.document.write(d);c||f?O(function(){e.document.close()},7500):e.document.close()}}
function Ey(){window.google_ad_output="html";window.google_ad_height="250";window.google_ad_format="300x250_as";window.google_container_id="google_companion_ad_div"}
function Fy(){var a=document.getElementById("google_companion_ad_div");if(a&&(a=a.firstElementChild)){"DIV"==a.nodeName&&(a=a.firstElementChild);try{var b=encodeURIComponent(xy)+","+encodeURIComponent(yy);a.contentWindow.postMessage(b,"*");a.width=370;a.height=null!=xy?210:185}catch(c){}}}
function Gy(){var a=document.getElementById("movie_player");a&&a.pauseVideo()}
function Hy(a){if(!zy&&a)if(cs("remove_yt_uds")){zy=!0;window.google_ad_client=a.afv_vars.google_ad_client;window.google_page_url=a.afv_vars.google_page_url;window.google_page_location=window.location.href;var b=a.afc_vars,c;for(c in b){var d=b[c];if("no_initial_ads"==c&&d){rj();return}if("format"!=c||ec(Gd(d)))if("loeid"!=c||ec(Gd(d))){var e="google_"+c;(Ah[e]||Bh[e]||Dh[e])&&(window[e]=d)}else window.google_loeid=Gd(d);else if(d=Gd(d),e=d.match(/(\d+)x(\d+)/))window.google_ad_width=e[1],window.google_ad_height=
e[2],window.google_ad_format=d}b=new vg;pj(b);window.google_loader_used="yt";(b=Pl(b))&&Iy(b);rj()}else(b=w("google.ads.Ad"))?(zy=!0,new b(a.afv_vars.google_ad_client,"google_companion_ad_div",a.afc_vars)):O(function(){Hy(a)},200)}
function Iy(a){var b=F("google_companion_ad_div");null!=b&&(a=of("IFRAME",{width:window.google_ad_width,height:window.google_ad_height,frameBorder:0,marginWidth:0,marginHeight:0,vpsace:0,hspace:0,allowTransparency:"true",scrolling:"no",src:a,style:{visibility:"visible"}}),b.appendChild(a))}
var Jy=[];t("yt.www.watch.ads.setAdId",function(a){window.ad_debug=a},void 0);
t("yt.www.watch.ads.setCompanion",Ay,void 0);t("yt.www.watch.ads.showForcedMpu",function(a){var b=By(a);a=Cy(a);Ay(b,a)},void 0);
t("yt.www.watch.ads.setGutSlotSizes",function(){},void 0);
t("yt.www.watch.ads.handleSetCompanion",function(a){a=a.replace(";dc_seed=",";kmyd=watch-channel-brand-div;dc_seed=");var b=By(a);a=Cy(a);Ay(b,a)},void 0);
t("yt.www.watch.ads.handleSetCompanionForFreewheel",Dy,void 0);t("yt.www.watch.ads.handleSetAfvCompanionVars",Ey,void 0);t("yt.www.watch.ads.companionSetupComplete",Fy,void 0);t("yt.www.watch.ads.pauseVideo",Gy,void 0);t("yt.www.watch.ads.loadAfc",Hy,void 0);t("yt.www.watch.ads.isAfcAdVisible",function(){var a=F("google_companion_ad_div");return a?(a=Cf(a))&&"IFRAME"==a.tagName?-1!=a.src.indexOf("youtube.com%2Fad_frame"):!1:!1},void 0);
t("yt.www.watch.ads.checkInit",function(){},void 0);
t("yt.www.watch.ads.initVideoWallCompanionListeners",function(a,b){xy=a;yy=b;window.addEventListener("message",function(c){"companion-setup-complete"==c.data?Fy():"pause-video"==c.data&&Gy()},!1)},void 0);
t("yt.www.watch.ads.getGlobals",function(){return Jy},void 0);
t("window.google_ad_request_done",window.hj,void 0);t("yt.www.ads.pyv.pyvWatchAfcCallback",kx,void 0);t("yt.www.ads.pyv.loadPyvAjax",function(a){var b=$r(Zr);Va(b,as(Zr));cs("desktop_pyv_on_watch_missing_params")&&(Va(b,nx()),Va(b,dx()));a=fg(a,b);cs("desktop_pyv_on_watch_override_lact")&&(a=kg(a));qs(a,{format:"RAW",onSuccess:mx,onError:function(){jx()},
withCredentials:!0});Pw("parq")},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){As(a+"mac_204?action_fcts=1");return!0},void 0);
t("yt.www.watch.ads.isPromotionShelfSlotExist",function(){return null!=F("promotion-shelf")},void 0);
t("yt.www.watch.ads.promotionShelfClear",function(){var a=F("promotion-shelf");a&&(L(a,"hid"),yf(a))},void 0);
t("yt.www.watch.ads.promotionShelfShow",function(a){var b=F("promotion-shelf");b&&(b.appendChild(a),Ho(b,"hid"))},void 0);
t("yt.www.watch.ads.addInstreamCompanionWtaUi",function(a){var b=F("google_companion_ad_div");if(b){if(G("iv-cards-companion",b)){if(!cs("desktop_shopping_companion_wta_support"))return}else if(G("iv-website-companion",b)){if(!cs("desktop_action_companion_wta_support"))return}else if(ff("iframe",null,b)){var c=ff("iframe",null,b);if(c.src&&-1!=c.src.indexOf("ad_companion")){if(!cs("desktop_videowall_companion_wta_support"))return}else if(!cs("desktop_image_companion_wta_support"))return}c=G("iv-cards-companion",
b)||G("iv-website-companion",b)||b;L(b,"companion-with-wta");c.appendChild(a)}else Pr(Error("Cannot find google_companion_ad_div"))},void 0);
t("setFreewheelCompanion",Dy,void 0);t("setAfvCompanionVars",Ey,void 0);var Ky=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Ky,void 0);function Ly(a){Jr(Ky,arguments)}
function My(a,b,c){b=void 0===b?{}:b;a=(a=a in Ky?Ky[a]:c)||"";c={};for(var d in b)c.Hb=d,a=a.replace(new RegExp("\\$"+c.Hb,"gi"),function(e){return function(){return b[e.Hb]}}(c)),c={Hb:c.Hb};
return a}
function Ny(a){Jr(Ky,arguments)}
;function Oy(a,b,c){var d=c&&0<c?c:0;c=d?z()+1E3*d:0;if((d=d?Py():Qy())&&window.JSON){r(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function Ry(a){var b=Qy(),c=Py();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if(!r(d))try{d=c.get(a)}catch(e){}if(!r(d))return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function Sy(a){try{var b=Qy(),c=Py();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function Ty(){var a=Py();a&&or(a,a.f.Ea(!0))}
var Py=zb(function(){var a=new sr;return a.isAvailable()?new mr(a):null}),Qy=zb(function(){var a=new tr;
return a.isAvailable()?new mr(a):null});function Uy(a,b){(a=F(a))&&a.style&&(a.style.display=b?"":"none",Jo(a,"hid",!b))}
function Vy(a){return(a=F(a))?"none"!=a.style.display&&!K(a,"hid"):!1}
function Wy(a){if(a=F(a))Vy(a)?(a.style.display="none",L(a,"hid")):(a.style.display="",Ho(a,"hid"))}
function Xy(a){B(arguments,function(b){!Ka(b)||b instanceof Element?Uy(b,!0):B(b,function(c){Xy(c)})})}
function Yy(a){B(arguments,function(b){!Ka(b)||b instanceof Element?Uy(b,!1):B(b,function(c){Yy(c)})})}
function Zy(a){B(arguments,function(b){Ka(b)?B(b,function(c){Zy(c)}):Wy(b)})}
var $y={};function az(a){if(a in $y)return $y[a];var b;if((b=document.body.style)&&a in b)b=a;else{var c=yg();c?(c=c.toLowerCase(),c+=Jd(a),b=!p(b)||c in b?c:null):b=null}return $y[a]=b}
function bz(a){if(!Kl()||!a)return null;var b=az("transitionProperty");b=Hg(a,b);var c=az("transitionDuration");a=Hg(a,c);if(!b||!a)return null;var d={},e=b.split(",");B(a.split(","),function(f,g){var k=e[g].trim();k&&(d[k]=-1<f.indexOf("ms")?parseInt(f,10):Math.round(1E3*parseFloat(f)))});
return d}
;var cz={},dz="ontouchstart"in document;function ez(a,b,c){b in cz||(cz[b]=new br);cz[b].subscribe(a,c)}
function fz(a,b,c){if(b in cz){var d=cz[b];dr(d,a,c);0>=fr(d)&&(d.dispose(),delete cz[b])}}
function gz(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Sf(c,function(e){return K(e,b)},!0,d)}
function hz(a){var b="mouseover"==a.type&&"mouseenter"in cz||"mouseout"==a.type&&"mouseleave"in cz,c=a.type in cz||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=cz[b];for(var d in c.g){var e=gz(b,d,a.target);e&&!Sf(a.relatedTarget,function(f){return f==e},!0)&&c.ka(d,e,b,a)}}if(b=cz[a.type])for(d in b.g)(e=gz(a.type,d,a.target))&&b.ka(d,e,a.type,a)}}
Q(document,"blur",hz,!0);Q(document,"change",hz,!0);Q(document,"click",hz);Q(document,"focus",hz,!0);Q(document,"mouseover",hz);Q(document,"mouseout",hz);Q(document,"mousedown",hz);Q(document,"keydown",hz);Q(document,"keyup",hz);Q(document,"keypress",hz);Q(document,"cut",hz);Q(document,"paste",hz);dz&&(Q(document,"touchstart",hz),Q(document,"touchend",hz),Q(document,"touchcancel",hz));function W(a){this.l=a;this.w={};this.D=[];this.A=[]}
h=W.prototype;h.V=function(a){return H(a,X(this))};
function X(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
h.unregister=function(){nt(this.D);this.D.length=0;Aw(this.A);this.A.length=0};
h.init=Ga;h.dispose=Ga;h.ha=function(a,b){this.D.push(S(a,b,this))};
function iz(a,b,c){a.A.push(zw(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=y(c,a);ez(d,b,e);a.w[c]=e}
function Z(a,b,c,d){fz(X(a,d),b,a.w[c]);delete a.w[c]}
h.za=function(a,b,c){var d=this.C(a,b);if(d&&(d=w(d))){var e=sb(arguments,2);rb(e,0,0,a);d.apply(null,e)}};
h.C=function(a,b){return V(a,b)};
function jz(a,b){ox(a,"tooltip-text",b)}
function kz(a,b,c){return G(X(a,b),c)}
;function lz(){W.call(this,"button");this.f=null;this.i=[];this.g={}}
A(lz,W);Ha(lz);h=lz.prototype;h.register=function(){Y(this,"click",this.te);Y(this,"keydown",this.xd);Y(this,"keypress",this.ue);this.ha("page-scroll",this.sf)};
h.unregister=function(){Z(this,"click",this.te);Z(this,"keydown",this.xd);Z(this,"keypress",this.ue);mz(this);this.g={};lz.J.unregister.call(this)};
h.te=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.xd=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=nz(this,a))){var d=function(g){var k="";g.tagName&&(k=g.tagName.toLowerCase());return"ul"==k||"table"==k},e;
d(b)?e=b:e=If(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Pf;else"table"==e&&(f=this.Of);f&&oz(this,a,b,c,y(f,this))}}};
h.sf=function(){var a=this.g;if(0!=Db(a))for(var b in a){var c=a[b],d=pz(this,c);if(void 0==d||void 0==c)break;qz(this,d,c,!0)}};
function oz(a,b,c,d,e){var f=Vy(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=rz(a,c))?(b=Cf(d),"a"==b.tagName.toLowerCase()?Yx(b.href):Ws(b,"click")):g&&sz(a,b):f?27==d.keyCode?(rz(a,c),sz(a,b)):e(b,c,d):(a=K(b,X(a,"reverse"))?38:40,d.keyCode==a&&(Ws(b,"click"),d.preventDefault()))}
h.ue=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=nz(this,a),Vy(a)&&c.preventDefault())};
function rz(a,b){var c=X(a,"menu-item-highlight"),d=G(c,b);d&&Ho(d,c);return d}
function tz(a,b,c){L(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Na(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.Of=function(a,b,c){var d=rz(this,b),e=Is("table",b);b=cf("td",null,e);d=uz(d,b,cf("td",null,Is("tr",e)).length,c);-1!=d&&(tz(this,a,b[d]),c.preventDefault())};
h.Pf=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=rz(this,b);b=bb(cf("li",null,b),Vy);tz(this,a,b[uz(d,b,1,c)]);c.preventDefault()}};
function uz(a,b,c,d){var e=b.length;a=$a(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function vz(a,b){var c=b.iframeMask;c||(c=rf("IFRAME"),c.src='javascript:""',c.className=X(a,"menu-mask"),Yy(c),b.iframeMask=c);return c}
function qz(a,b,c,d){var e=H(b,X(a,"group")),f=!!a.C(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=Tg(b);if(K(b,X(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(q){}}K(b,"flip")&&(K(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.C(b,"button-has-sibling-menu")?l=Lg(e):a.C(b,"button-menu-root-container")&&(l=wz(a,b));E&&!ie("8")&&(l=null);if(l){var m=Tg(l);m=new Ag(-m.top,m.left,m.top,-m.left)}l=new We(0,1);K(b,X(a,"center-menu"))&&(l.x-=Math.round((Rg(c).width-Rg(b).width)/
2));d&&(l.y+=lf(document).y);if(a=vz(a,b))b=Rg(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Zq(e,f,a,g,l,m,197),d&&Eg(a,"position","fixed");Zq(e,f,c,g,l,m,197)}
function wz(a,b){if(a.C(b,"button-menu-root-container")){var c=a.C(b,"button-menu-root-container");return H(b,c)}return document.body}
h.xe=function(a){if(a){var b=nz(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.C(a,"button-has-sibling-menu")?c=a.parentNode:c=wz(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=vz(this,a);d&&c.appendChild(d);(c=!!this.C(a,"button-menu-fixed"))&&(this.g[Es(a).toString()]=b);qz(this,a,b,c);ot("yt-uix-button-menu-before-show",a,b);Xy(b);d&&Xy(d);
this.za(a,"button-menu-action",!0);L(a,X(this,"active"));b=y(this.we,this,a,!1);d=y(this.we,this,a,!0);c=y(this.ih,this,a,void 0);this.f&&nz(this,this.f)==nz(this,a)||mz(this);T("yt-uix-button-menu-show",a);R(this.i);this.i=[Q(document,"click",d),Q(document,"contextmenu",b),Q(window,"resize",c)];this.f=a}}};
function sz(a,b){if(b){var c=nz(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Yy(c);a.za(b,"button-menu-action",!1);var d=vz(a,b),e=Es(c).toString();delete a.g[e];O(function(){d&&d.parentNode&&(Yy(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=H(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));Io(b,f);T("yt-uix-button-menu-hide",b);R(a.i);a.i.length=0}}
h.ih=function(a,b){var c=nz(this,a);if(c){b&&(b instanceof Xc?pd(c,b):Hf(c,b));var d=!!this.C(a,"button-menu-fixed");qz(this,a,c,d)}};
function pz(a,b){return H(b.activeButtonNode||b.parentNode,X(a))}
h.we=function(a,b,c){c=Ts(c);var d=H(c,X(this));if(d){d=nz(this,d);var e=nz(this,a);if(d==e)return}d=H(c,X(this,"menu"));e=d==nz(this,a);var f=K(c,X(this,"menu-item")),g=K(c,X(this,"menu-close"));if(!d||e&&(f||g))sz(this,a),d&&b&&this.C(a,"button-menu-indicate-selected")&&((a=G(X(this,"content"),a))&&Hf(a,Pf(c)),xz(this,d,c))};
function xz(a,b,c){var d=X(a,"menu-item-selected");B(ef(d,b),function(e){Ho(e,d)});
L(c.parentNode,d)}
function nz(a,b){if(!b.widgetMenu){var c=a.C(b,"button-menu-id");c=c&&F(c);var d=X(a,"menu");c?Go(c,[d,X(a,"menu-external")]):c=G(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return K(a,X(this,"toggled"))};
h.toggle=function(a){if(this.C(a,"button-toggle")){var b=H(a,X(this,"group")),c=X(this,"toggled"),d=K(a,c);if(b&&this.C(b,"button-toggle-group")){var e=this.C(b,"button-toggle-group");B(ef(X(this),b),function(f){f!=a||"optional"==e&&d?(Ho(f,c),f.removeAttribute("aria-pressed")):(L(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Lo(a,c)}};
h.click=function(a){if(nz(this,a)){var b=nz(this,a);if(b){var c=pz(this,b);c&&c!=a?(sz(this,c),O(y(this.xe,this,a),1)):Vy(b)?sz(this,a):this.xe(a)}a.focus()}this.za(a,"button-action")};
function mz(a){a.f&&sz(a,a.f)}
;function yz(a){W.call(this,a);this.i=null}
A(yz,W);h=yz.prototype;h.V=function(a){var b=W.prototype.V.call(this,a);return b?b:a};
h.register=function(){this.ha("yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){zz(this);yz.J.dispose.call(this)};
h.C=function(a,b){var c=yz.J.C.call(this,a,b);return c?c:(c=yz.J.C.call(this,a,"card-config"))&&(c=w(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.V(a);if(b){L(b,X(this,"active"));var c=Az(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Bz(this,a,c);var d=X(this,"card-visible"),e=this.C(a,"card-delegate-show")&&this.C(b,"card-action");this.za(b,"card-action",a);this.i=a;Yy(c);O(y(function(){e||(Xy(c),T("yt-uix-card-show",b,a,c));Cz(c);L(c,d);T("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Az(a,b,c){var d=c||b,e=X(a,"card");c=Dz(a,d);var f=F(X(a,"card")+Es(d));if(f)return a=G(X(a,"card-body"),f),Gf(a,c)||(zf(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Es(d);f.className=e;(d=a.C(d,"card-class"))&&Go(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.C(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;zf(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Bz(a,b,c){var d=a.C(b,"orientation")||"horizontal",e=G(X(a,"anchor"),b)||b,f=a.C(b,"position"),g=!!a.C(b,"force-position"),k=a.C(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var q=13;var u=8}else m&&!l?(q=12,u=9):!m&&l?(q=9,u=12):(q=8,u=13);var v=Ug(document.body);f=Ug(b);v!=f&&(q^=4);if(d){f=b.offsetHeight/2-12;var x=new We(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,x=new We(b.offsetWidth+6,-12);var N=Rg(c);
f=Math.min(f,(d?N.height:N.width)-24-6);6>f&&(f=6,d?x.y+=12-b.offsetHeight/2:x.x+=12-b.offsetWidth/2);N=null;g||(N=10);b=X(a,"card-flip");a=X(a,"card-reverse");Jo(c,b,m);Jo(c,a,l);N=Zq(e,q,c,u,x,null,N);!g&&N&&(N&48&&(m=!m,q^=4,u^=4),N&192&&(l=!l,q^=1,u^=1),Jo(c,b,m),Jo(c,a,l),Zq(e,q,c,u,x));k&&(e=parseInt(c.style.top,10),g=lf(document).y,Eg(c,"position","fixed"),Eg(c,"top",e-g+"px"));v&&(c.style.right="",e=Tg(c),e.left=e.left||parseInt(c.style.left,10),g=jf(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=G("yt-uix-card-body-arrow",c);g=G("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!v&&m||v&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=G("yt-uix-card-arrow",c);m=G("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Rg(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.V(a)){var b=F(X(this,"card")+Es(a));b&&(Ho(a,X(this,"active")),Ho(b,X(this,"card-visible")),Yy(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(zf(b.cardMask),b.cardMask=null))}};
function zz(a){a.i&&a.hide(a.i)}
h.hh=function(a,b){var c=this.V(a);if(c){if(b){var d=Dz(this,c);if(!d)return;b instanceof Xc?pd(d,b):Hf(d,b)}K(c,X(this,"active"))&&(c=Az(this,a,c),Bz(this,a,c),Xy(c),Cz(c))}};
h.isActive=function(a){return(a=this.V(a))?K(a,X(this,"active")):!1};
function Dz(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.C(b,"card-id"))?F(c):G(d,b))||(c=document.createElement("div"));var f=c;Ho(f,d);L(f,e);b.cardContentNode=c}return c}
function Cz(a){var b=a.cardMask;b||(b=rf("IFRAME"),b.src='javascript:""',Go(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Ez(){W.call(this,"kbd-nav")}
var Fz;A(Ez,W);Ha(Ez);h=Ez.prototype;h.register=function(){Y(this,"keydown",this.ye);this.ha("yt-uix-kbd-nav-move-in",this.Gd);this.ha("yt-uix-kbd-nav-move-in-to",this.Sf);this.ha("yt-uix-kbd-move-next",this.Hd);this.ha("yt-uix-kbd-nav-move-to",this.Ob)};
h.unregister=function(){Z(this,"keydown",this.ye);R(Fz)};
h.ye=function(a,b,c){var d=c.keyCode;if(a=H(a,X(this)))switch(d){case 13:case 32:this.Gd(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=nk(a,"kbdNavMoveOut");!c;){c=H(a.parentElement,X(this));if(!c)break a;c=nk(c,"kbdNavMoveOut")}c=F(c);this.Ob(c);T("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&K(a,X(this,"list")))switch(d){case 40:this.Hd(b,a);break;case 38:d=document.activeElement==a,a=Gz(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Hz(this,a[b]))}c.preventDefault()}};
h.Gd=function(a){var b=nk(a,"kbdNavMoveIn");b=F(b);Iz(this,a,b);this.Ob(b)};
h.Sf=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Iz(this,d,a);this.Ob(a)};
h.Ob=function(a){if(a)if(Mf(a))a.focus();else{var b=If(a,function(c){return Ef(c)?Mf(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Iz(a,b,c){if(b&&c)if(L(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,mk&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.Hd=function(a,b){var c=document.activeElement==b,d=Gz(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Hz(this,d[c]))};
function Hz(a,b){if(b){var c=Rf(b,"LI");c&&(L(c,X(a,"highlight")),Fz=Q(b,"blur",y(function(d){Ho(d,X(this,"highlight"));R(Fz)},a,c)))}}
function Gz(a){if("UL"!=a.tagName.toUpperCase())return[];a=bb(Bf(a),function(b){return"LI"==b.tagName.toUpperCase()});
return bb(cb(a,function(b){return Vy(b)?If(b,function(c){return Ef(c)?Mf(c):!1}):!1}),function(b){return!!b})}
;function Jz(){W.call(this,"menu");this.g=this.f=null;this.i={};this.B={};this.j=null}
A(Jz,W);Ha(Jz);function Kz(a){var b=Jz.getInstance();if(K(a,X(b)))return a;var c=b.V(a);return c?c:H(a,X(b,"content"))==b.f?b.g:null}
h=Jz.prototype;h.register=function(){Y(this,"click",this.ze);Y(this,"mouseenter",this.nf);this.ha("page-scroll",this.vh);this.ha("yt-uix-kbd-nav-move-out-done",function(a){a=this.V(a);Lz(this,a)});
this.j=new br};
h.unregister=function(){Z(this,"click",this.ze);this.g=this.f=null;R(wb(Gb(this.i)));this.i={};Ab(this.B,function(a){zf(a)},this);
this.B={};Ci(this.j);this.j=null;Jz.J.unregister.call(this)};
h.ze=function(a,b,c){a&&(b=Mz(this,a),!b.disabled&&Hs(c.target,b)&&Nz(this,a))};
h.nf=function(a,b,c){a&&K(a,X(this,"hover"))&&Hs(c.target,Mz(this,a))&&Nz(this,a,!0)};
h.vh=function(){this.f&&this.g&&Oz(this,this.g,this.f)};
function Oz(a,b,c){var d=Pz(a,b);if(d){var e=Rg(c);if(e instanceof Ye){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Qg(e,!0);d.style.height=Qg(f,!0)}c==a.f&&(e=9,f=8,K(b,X(a,"reversed"))&&(e^=1,f^=1),K(b,X(a,"flipped"))&&(e^=4,f^=4),a=new We(0,1),d&&Zq(b,e,d,f,a,null,197),Zq(b,e,c,f,a,null,197))}
function Nz(a,b,c){Qz(a,b)&&!c?Lz(a,b):(Rz(a,b),!a.f||Hs(b,a.f)?a.Ae(b):cr(a.j,y(a.Ae,a,b)))}
h.Ae=function(a){if(a){var b=Sz(this,a);if(b){ot("yt-uix-menu-before-show",a,b);this.f?Hs(a,this.f)||Lz(this,this.g):(this.g=a,this.f=b,K(a,X(this,"sibling-content"))||(zf(b),document.body.appendChild(b)),b.style.minWidth=Mz(this,a).offsetWidth-2+"px");var c=Pz(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);Ho(b,X(this,"content-hidden"));Oz(this,a,b);Go(Mz(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);T("yt-uix-menu-show",a);Tz(b);Uz(this,a);T("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.wh,this,a),e=y(this.Mf,this,a);c=Na(a).toString();this.i[c]=[Q(b,"click",e),Q(document,"click",d)];K(a,X(this,"indicate-selected"))&&(d=y(this.Nf,this,a),this.i[c].push(Q(b,"click",d)));K(a,X(this,"hover"))&&(a=y(this.pf,this,a),this.i[c].push(Q(document,"mousemove",a)))}}};
h.pf=function(a,b){var c=Ts(b);c&&(Hs(c,Mz(this,a))||Vz(this,c)||Wz(this,a))};
h.wh=function(a,b){var c=Ts(b);if(c){if(Vz(this,c)){var d=H(c,X(this,"content")),e=Rf(c,"LI");e&&d&&Gf(d,e)&&ot("yt-uix-menu-item-clicked",c);c=H(c,X(this,"close-on-select"));if(!c)return;d=Kz(c)}Lz(this,d||a)}};
function Rz(a,b){if(b){var c=H(b,X(a,"content"));c&&B(ef(X(a),c),function(d){!Hs(d,b)&&Qz(this,d)&&Wz(this,d)},a)}}
function Lz(a,b){if(b){var c=[];c.push(b);var d=Sz(a,b);d&&(d=ef(X(a),d),d=pb(d),c=c.concat(d),B(c,function(e){Qz(this,e)&&Wz(this,e)},a))}}
function Wz(a,b){if(b){var c=Sz(a,b);Io(Mz(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);L(c,X(a,"content-hidden"));var d=Sz(a,b);d&&gf(d,{"aria-expanded":"false"});(d=Pz(a,b))&&d.parentNode&&zf(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.j&&a.j.ka("ROOT_MENU_REMOVED"));T("yt-uix-menu-hide",b);c=Na(b).toString();R(a.i[c]);delete a.i[c]}}
h.Mf=function(a,b){var c=Ts(b);c&&Xz(this,a,c)};
h.Nf=function(a,b){var c=Ts(b);if(c){var d=Mz(this,a);if(d&&(c=Rf(c,"LI")))if(c=Pf(c).trim(),d.hasChildNodes()){var e=lz.getInstance();(d=G(X(e,"content"),d))&&Hf(d,c)}else Hf(d,c)}};
function Uz(a,b){var c=Sz(a,b);if(c){B(c.children,function(e){"LI"==e.tagName&&gf(e,{role:"menuitem"})});
gf(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Na(c),c.id=d);(c=Mz(a,b))&&gf(c,{"aria-controls":d})}}
function Xz(a,b,c){var d=Sz(a,b);d&&K(b,X(a,"checked"))&&(a=Rf(c,"LI"))&&(a=G("yt-ui-menu-item-checked-hid",a))&&(B(ef("yt-ui-menu-item-checked",d),function(e){Ko(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Ko(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Qz(a,b){var c=Sz(a,b);return c?!K(c,X(a,"content-hidden")):!1}
function Tz(a){B(cf("UL",null,a),function(b){b.tabIndex=0;var c=Ez.getInstance();Go(b,[X(c),X(c,"list")])})}
function Sz(a,b){var c=V(b,"menu-content-id");return c&&(c=F(c))?(Go(c,[X(a,"content"),X(a,"content-external")]),c):b==a.g?a.f:G(X(a,"content"),b)}
function Pz(a,b){var c=Na(b).toString(),d=a.B[c];if(!d){d=rf("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];B(Fo(b),function(f){e.push(f+"-mask")});
Go(d,e);a.B[c]=d}return d||null}
function Mz(a,b){return G(X(a,"trigger"),b)}
function Vz(a,b){return Hs(b,a.f)||Hs(b,a.g)}
;function Yz(){yz.call(this,"clickcard");this.f={};this.g={}}
A(Yz,yz);Ha(Yz);h=Yz.prototype;h.register=function(){Yz.J.register.call(this);Y(this,"click",this.cd,"target");Y(this,"click",this.Zc,"close")};
h.unregister=function(){Yz.J.unregister.call(this);Z(this,"click",this.cd,"target");Z(this,"click",this.Zc,"close");for(var a in this.f)R(this.f[a]);this.f={};for(a in this.g)R(this.g[a]);this.g={}};
h.cd=function(a,b,c){c.preventDefault();b=Rf(c.target,"button");b&&b.disabled||(a=(b=this.C(a,"card-target"))?bf(b):a,b=this.V(a),this.C(b,"disabled")||(K(b,X(this,"active"))?(this.hide(a),Ho(b,X(this,"active"))):(this.show(a),L(b,X(this,"active")))))};
h.show=function(a){Yz.J.show.call(this,a);var b=this.V(a),c=Na(a).toString();if(!V(b,"click-outside-persists")){if(this.f[c])return;b=Q(document,"click",y(this.dd,this,a));var d=Q(window,"blur",y(this.dd,this,a));this.f[c]=[b,d]}a=Q(window,"resize",y(this.hh,this,a,void 0));this.g[c]=a};
h.hide=function(a){Yz.J.hide.call(this,a);a=Na(a).toString();var b=this.f[a];b&&(R(b),this.f[a]=null);if(b=this.g[a])R(b),delete this.g[a]};
h.dd=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=H(b.target,c)||H(Kz(b.target),c));(d=d||H(document.activeElement,c)||H(Kz(document.activeElement),c))||this.hide(a)};
h.Zc=function(a){(a=H(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Zz(){yz.call(this,"hovercard")}
A(Zz,yz);Ha(Zz);h=Zz.prototype;h.register=function(){Y(this,"mouseenter",this.Ad,"target");Y(this,"mouseleave",this.Cd,"target");Y(this,"mouseenter",this.Bd,"card");Y(this,"mouseleave",this.Dd,"card")};
h.unregister=function(){Z(this,"mouseenter",this.Ad,"target");Z(this,"mouseleave",this.Cd,"target");Z(this,"mouseenter",this.Bd,"card");Z(this,"mouseleave",this.Dd,"card")};
h.Ad=function(a){if($z!=a){$z&&(this.hide($z),$z=null);var b=y(this.show,this,a),c=parseInt(this.C(a,"delay-show"),10);b=O(b,-1<c?c:200);ox(a,"card-timer",b.toString());$z=a;a.alt&&(ox(a,"card-alt",a.alt),a.alt="");a.title&&(ox(a,"card-title",a.title),a.title="")}};
h.Cd=function(a){var b=parseInt(this.C(a,"card-timer"),10);P(b);this.V(a).isCardHidable=!0;b=parseInt(this.C(a,"delay-hide"),10);b=-1<b?b:200;O(y(this.xf,this,a),b);if(b=this.C(a,"card-alt"))a.alt=b;if(b=this.C(a,"card-title"))a.title=b};
h.xf=function(a){this.V(a).isCardHidable&&(this.hide(a),$z=null)};
h.Bd=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.Dd=function(a){a&&this.hide(a.cardTargetNode)};
var $z=null;function aA(a,b,c,d,e,f){this.f=a;this.F=null;this.i=G("yt-dialog-fg",this.f)||this.f;if(a=G("yt-dialog-title",this.i)){var g="yt-dialog-title-"+Na(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.N=G("yt-dialog-focus-trap",this.f);this.R=!1;this.j=new br;this.A=[];this.A.push(Vs(this.f,"click",y(this.jg,this),"yt-dialog-dismiss"));this.A.push(Q(this.N,"focus",y(this.Se,this),!0));bA(this,"content");this.U=b;this.Z=c;this.W=d;this.L=
e;this.ea=f;this.H=this.w=this.B=null}
var cA={LOADING:"loading",Vh:"content",Zi:"working"};function dA(a,b,c){a.P()||a.j.subscribe((c?"pre-":"post-")+"all",b)}
function bA(a,b){var c=G("yt-dialog-fg-content",a.f),d=[];Ab(cA,function(e){d.push("yt-dialog-show-"+e)});
Io(c,d);L(c,"yt-dialog-show-"+b)}
h=aA.prototype;
h.show=function(a){if(!this.P()){this.F=document.activeElement;if(!this.W){this.g||(this.g=F("yt-dialog-bg"),this.g||(this.g=rf("div"),this.g.id="yt-dialog-bg",this.g.className="yt-dialog-bg",document.body.appendChild(this.g)));var b=window,c=b.document;var d=0;if(c){d=c.body;var e=c.documentElement;if(e&&d)if(b=jf(b).height,kf(c)&&e.scrollHeight)d=e.scrollHeight!=b?e.scrollHeight:e.offsetHeight;else{c=e.scrollHeight;var f=e.offsetHeight;e.clientHeight!=f&&(c=d.scrollHeight,f=d.offsetHeight);d=c>
b?c>f?c:f:c<f?c:f}else d=0}this.g.style.height=d+"px";Xy(this.g)}this.ud();d=eA(this);fA(d);this.B=Q(document,"keydown",y(this.Lf,this));d=this.f;e=S("player-added",this.ud,this);ox(d,"player-ready-pubsub-key",e);this.Z&&(this.w=Q(document,"click",y(this.Ng,this)));Xy(this.f);this.i.setAttribute("tabindex","0");gA(this);this.L||L(document.body,"yt-dialog-active");mz(lz.getInstance());zz(Yz.getInstance());zz(Zz.getInstance());this.H=a;T("yt-ui-dialog-show-complete",this)}};
function hA(){return eb(ef("yt-dialog"),function(a){return Vy(a)})}
h.ud=function(){if(!this.ea){var a=this.f;Jo(document.body,"hide-players",!0);a&&Jo(a,"preserve-players",!0)}};
function eA(a){var b=cf("iframe",null,a.f);B(b,function(c){var d=V(c,"onload");d&&(d=w(d))&&Q(c,"load",d);if(d=V(c,"src"))c.src=d},a);
return pb(b)}
function fA(a){B(document.getElementsByTagName("iframe"),function(b){-1==$a(a,b)&&L(b,"iframe-hid")})}
function iA(){B(ef("iframe-hid"),function(a){Ho(a,"iframe-hid")})}
h.jg=function(a){a=a.currentTarget;a.disabled||(a=V(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.P()){this.j.ka("pre-all");this.j.ka("pre-"+a);Yy(this.f);zz(Yz.getInstance());zz(Zz.getInstance());this.i.setAttribute("tabindex","-1");hA()||(Yy(this.g),this.L||Ho(document.body,"yt-dialog-active"),Ks(),iA());this.B&&(R(this.B),this.B=null);this.w&&(R(this.w),this.w=null);var b=this.f;if(b){var c=V(b,"player-ready-pubsub-key");c&&(nt(c),qx(b,"player-ready-pubsub-key"))}this.j.ka("post-all");T("yt-ui-dialog-hide-complete",this);"cancel"==a&&T("yt-ui-dialog-cancelled",
this);this.j&&this.j.ka("post-"+a);this.H=null;this.F&&this.F.focus()}};
h.setTitle=function(a){Hf(G("yt-dialog-title",this.f),a)};
h.Lf=function(a){O(y(function(){this.U||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&K(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Ng=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.P=function(){return this.R};
h.dispose=function(){Vy(this.f)&&this.dismiss("dispose");R(this.A);this.A.length=0;O(y(function(){this.F=null},this),0);
this.N=this.i=null;this.j.dispose();this.j=null;this.R=!0};
h.Se=function(a){a.stopPropagation();gA(this)};
function gA(a){O(y(function(){this.i&&this.i.focus()},a),0)}
t("yt.ui.Dialog",aA,void 0);function jA(a){Dr.call(this,a);this.Da=[];this.Ib=[]}
A(jA,Dr);function kA(a,b,c,d,e,f){b=Vs(f||a.qc(),b,y(d,e||a),c);a.Da.push(b)}
jA.prototype.Ha=function(){B(this.Da,R);nt(this.Ib);jA.J.Ha.call(this)};
jA.prototype.ha=function(a,b){var c=S(a,y(b,this));this.Ib.push(c)};function lA(){W.call(this,"form-input")}
A(lA,W);Ha(lA);h=lA.prototype;
h.register=function(){E&&!ie(9)&&(Y(this,"click",this.Oa,"checkbox"),Y(this,"keypressed",this.Oa,"checkbox"),Y(this,"click",this.dc,"radio"),Y(this,"keypressed",this.dc,"radio"));E&&!ie(10)&&Y(this,"click",this.rd,"placeholder");Y(this,"change",this.Oa,"checkbox");Y(this,"blur",this.Uc,"select-element");Y(this,"change",this.Qa,"select-element");Y(this,"keyup",this.Qa,"select-element");Y(this,"focus",this.jd,"select-element");Y(this,"keyup",this.jb,"text");Y(this,"keyup",this.jb,"textarea");Y(this,
"keyup",this.jb,"bidi");Y(this,"click",this.tf,"reset")};
h.unregister=function(){E&&!ie(9)&&(Z(this,"click",this.Oa,"checkbox"),Z(this,"keypressed",this.Oa,"checkbox"),Z(this,"click",this.dc,"radio"),Z(this,"keypressed",this.dc,"radio"));E&&!ie(10)&&Z(this,"click",this.rd,"placeholder");Z(this,"change",this.Oa,"checkbox");Z(this,"blur",this.Uc,"select-element");Z(this,"change",this.Qa,"select-element");Z(this,"keyup",this.Qa,"select-element");Z(this,"focus",this.jd,"select-element");Z(this,"keyup",this.jb,"text");Z(this,"keyup",this.jb,"textarea");Z(this,
"keyup",this.jb,"bidi");lA.J.unregister.call(this)};
h.Oa=function(a){var b=H(a,X(this,"checkbox-container"));a.checked&&K(b,"partial")&&(a.checked=!1,a.indeterminate=!1,Ho(b,"partial"));Jo(b,"checked",a.checked)};
h.Sg=function(a){var b=H(a,X(this,"radio-container"));b&&Jo(b,"checked",a.checked)};
h.dc=function(){mA()};
h.jb=function(a){var b=a.value;Zb.test(b)?a.dir="rtl":Yb.test(b)?a.dir="ltr":a.removeAttribute("dir");E&&!ie(10)&&(b=H(a,X(this,"container")))&&Jo(b,X(this,"non-empty"),!!a.value)};
h.rd=function(a){(a=H(a,X(this,"container")))&&(a=kz(this,"text",a)||kz(this,"textarea",a))&&a.focus()};
h.jd=function(a){var b=H(a,X(this,"select"));L(b,"focused");this.Qa(a)};
h.Uc=function(a){var b=H(a,X(this,"select"));Ho(b,"focused");this.Qa(a)};
h.Qa=function(a){var b=H(a,X(this,"select")),c=G(X(this,"select-value"),b),d=nA(a);if(d)for(""!=c.innerHTML&&d.innerHTML!=c.innerHTML&&this.za(a,"onchange-callback"),d=Gs(d),yf(c);0<d.childNodes.length;)c.appendChild(d.childNodes[0]);Jo(b,X(this,"select-disabled"),a.disabled)};
h.tf=function(){var a=lA.getInstance();B(ef(X(a,"checkbox")),a.Oa,a);mA();oA()};
function nA(a){return a.options[Math.max(a.selectedIndex,0)]}
function pA(a,b){a.checked=b;lA.getInstance().Oa(a)}
function mA(){var a=lA.getInstance();B(ef(X(a,"radio")),a.Sg,a)}
function oA(){var a=lA.getInstance();B(ef(X(a,"select-element")),a.Qa,a)}
function qA(){var a;return(a=(rA||document).querySelector('input[type="radio"][name="overlay-confirmation-preferences-update-frequency"]:checked'))?a.value:null}
;function sA(a,b){aA.call(this,a,!0,!1);this.Ca=b;this.l=Ff(a);this.D=null}
la(sA,aA);sA.prototype.show=function(a){aA.prototype.show.call(this,a);this.D=new tA(this.Ca,this.ja.bind(this));Fr(this.D,this.f)};
sA.prototype.dismiss=function(a){aA.prototype.dismiss.call(this,a);this.D=null;zf(this.l)};
sA.prototype.ja=function(a,b){var c=this,d=Ff(this.l);Af(a,this.l);this.l=Cf(d);d=new aA(G("yt-dialog",d),!1,!1);dA(d,function(e){zf(c.l);b(e)},!0);
d.show()};
function tA(a,b){jA.call(this);this.Ca=a;this.R=b;this.f=this.D=this.j=this.l=this.w=null}
la(tA,jA);h=tA.prototype;
h.eb=function(){jA.prototype.eb.call(this);this.w=Er(this,"legal-report-details-form-renderer-description");this.l=Er(this,"legal-report-details-form-renderer-issue-type-select");this.j=Er(this,"legal-report-details-form-renderer-affiliation-select");this.D=Er(this,"legal-report-details-form-renderer-name");this.f=Er(this,"legal-report-details-form-renderer-submit-button");kA(this,"keyup","legal-report-details-form-renderer-description",this.Sb.bind(this));kA(this,"change","legal-report-details-form-renderer-issue-type-select",
this.Sb.bind(this));kA(this,"change","legal-report-details-form-renderer-affiliation-select",this.Sb.bind(this));kA(this,"click","yt-dialog-content",this.Sb.bind(this));kA(this,"click","legal-report-details-form-renderer-submit-button",this.Qf.bind(this));oA()};
h.Ha=function(){this.f=this.D=this.j=this.l=this.w=null;jA.prototype.Ha.call(this)};
h.Qf=function(){var a=V(this.f,"flag-url"),b=V(this.f,"flag-action"),c=this.w.value,d=parseInt(this.l.options[this.l.selectedIndex].value||"0",10),e=parseInt(this.j.options[this.j.selectedIndex].value||"0",10),f=this.D.value;a&&b&&c&&d&&e&&(b={flagging_action:b,report_issue:d,report_affiliation:e,report_description:c},f&&(b.report_full_name=f),this.f.disabled=!0,qs(a,{format:"JSON",method:"POST",Ga:!0,onSuccess:this.Dg.bind(this),onError:this.Cg.bind(this),O:b}))};
h.Dg=function(a,b){var c=this;this.f.disabled=!1;if(b.html_content){var d=sf(b.html_content);this.R(d,function(){T("commentreported",c.Ca,b.feedback_text)})}else T("commentreported",this.Ca,b.feedback_text)};
h.Cg=function(){this.f.disabled=!1};
h.Sb=function(){this.f.disabled=this.w&&this.l&&this.j&&this.w.value&&this.l.selectedIndex&&this.j.selectedIndex?!1:!0};function uA(a){jA.call(this);this.ea=this.U=this.R=this.Y=null;this.Ca=a;this.j=this.D=this.Z=this.l=this.f=this.w=this.Yd=null}
A(uA,jA);function vA(a){if("radio"==a.type)return a=H(a,"option-selectable-item-renderer-radio-container"),G("option-selectable-item-renderer-confirm-dialog",a);a=nA(a);return F(a?a.value||a.text:null)}
function wA(a){a=Rf(a,"LI");return G("option-item-supported-renderers-sub-options",a)}
h=uA.prototype;h.lg=function(a){a=a.target;oA();if(this.f){Ho(this.f,"option-selectable-item-renderer-radio-selected");var b=wA(this.f);b&&Yy(b)}this.l=null;this.f=a;L(this.f,"option-selectable-item-renderer-radio-selected");(a=wA(this.f))?(Xy(a),a=!!V(nA(G("yt-uix-form-input-select-element",a)),"disable-submit"),xA(this,a)):xA(this,!1);this.D&&(G("yt-uix-form-input-checkbox",this.D).checked=!1,Jo(this.D,"checked",!1));Yy(this.j);Xy(this.w);yA(this,this.f)};
function zA(a){if(a.R&&a.U){var b={flagging_action:a.R};qs(a.U,{format:"JSON",method:"POST",Ga:!0,onSuccess:y(function(c,d){d.feedback_text&&(this.Yd=d.feedback_text);if(d.html_content){var e=sf(d.html_content);this.Y?Af(e,this.Y):document.body.appendChild(e);e=new aA(F("flagging-response-message-dialog"),!1,!0);dA(e,y(this.Zb,this),!0);e.show()}else this.Zb()},a),
onError:y(function(){xA(this,!1)},a),
O:b})}else AA(a)}
function AA(a){if(a.ea){var b={feedback_tokens:a.ea};qs("/feed_change_ajax?action_give_feedback=1",{format:"JSON",method:"POST",Ga:!0,onSuccess:y(function(c,d){if(d.feedback_responses){var e=new aA(this.Y,!1,!0);dA(e,y(this.Zb,this),!0);e.dismiss("close");BA(this,d)}else this.Zb()},a),
onError:y(function(){xA(this,!1)},a),
O:b})}}
function BA(a,b){var c=G("service-endpoint-replace-enclosing-action-notification",a.Ca);var d=a.Ca;var e=H(d,"yt-lockup"),f=H(d,"feed-item-container");if(e){var g=G("yt-lockup-notifications-container",e);d=G("yt-lockup-dismissable",e)}else if(f)g=G("feed-item-dismissal-notices",f),d=G("feed-item-dismissable",f);else return;g&&c&&(yf(g),xf(g,c));var k;g&&(k=function(){Xy(g);c&&Xy(c)});
d?CA(d,k):k&&k();T("yt-dom-content-change",e||f);e=document.createElement("div");b.feedback_responses.length?(k=b.feedback_responses[0].follow_up_confirmation_html,pd(e,k)):e.innerHTML="Thanks for the report";e.className="follow-up-confirmation hid";k=G("replace-enclosing-action-options",c);c.insertBefore(e,c.firstChild);c.removeChild(k);L(G("replace-enclosing-action-message",c),"hid");Ho(G("follow-up-confirmation",c),"hid")}
function CA(a,b){Yy(a);b&&b();T("yt-dom-content-change",a)}
h.uh=function(){xA(this,!0);this.U=V(this.f,"flag-url");this.R=V(this.f,"flag-action");this.ea=V(this.f,"feedback-token");var a=vA(this.f),b=wA(this.f);b&&(a=vA(G("yt-uix-form-input-select-element",b)));a?(this.Y?Af(a,this.Y):document.body.appendChild(a),b=new aA(a,!1,!0),kA(this,"click","option-selectable-item-renderer-confirm-button",this.hg,null,a),b.show()):zA(this)};
h.hg=function(a){var b=H(a.target,"option-selectable-item-renderer-confirm-button"),c=V(b,"url");a=V(b,"flag-action");b=V(b,"flag-url");if(c){var d=yc(c);d=uc(d).toString();c!=d&&Qr(Error("Unsafe window.open URL: "+c));c=d;window.open(c,Hd(c).toString(36))}a&&b&&(this.R=a,this.U=b);zA(this)};
h.Zb=function(){T("commentreported",this.Ca,this.Yd)};
h.Zf=function(a){this.l=nA(a.target);yA(this,this.l);a=!!V(this.l,"disable-submit");xA(this,a)};
h.gg=function(a){a.target.checked?(Yy(this.w),Xy(this.j)):(Yy(this.j),Xy(this.w))};
function xA(a,b){a.w.disabled=b;a.j&&(a.j.disabled=b)}
h.kg=function(){xA(this,!0);var a=V(this.j,"flag-url"),b=V(this.l?this.l:this.f,"flag-action");a&&b?(b={flagging_action:b,flagging_checkbox_checked:1},qs(a,{format:"JSON",method:"POST",Ga:!0,onSuccess:y(function(c,d){if(d.html_content&&this.Y){var e=sf(d.html_content),f=Ff(Ff(this.Y));Af(e,Ff(this.Y));this.Y=e=G("yt-dialog",f);(new sA(e,this.Ca)).show()}else xA(this,!1)},this),
onError:y(function(){xA(this,!1)},this),
O:b})):xA(this,!1)};
function yA(a,b){b&&(V(b,"action-legal-checkbox-show")?Xy(a.Z):V(b,"action-legal-checkbox-hide")&&Yy(a.Z))}
h.eb=function(){uA.J.eb.call(this);this.w=Er(this,"options-renderer-submit-button");this.Y=H(this.w,"yt-dialog");this.Z=Er(this,"legal-report-checkbox-container");this.D=Er(this,"legal-report-checkbox");this.j=Er(this,"report-form-modal-renderer-next-button");kA(this,"click","options-renderer-submit-button",this.uh);kA(this,"click","option-selectable-item-renderer-radio",this.lg);kA(this,"change","yt-uix-form-input-select-element",this.Zf);kA(this,"click","legal-report-checkbox",this.gg);kA(this,
"click","report-form-modal-renderer-next-button",this.kg)};
h.Ha=function(){this.j=this.D=this.Z=this.Ca=this.l=this.f=this.w=this.Y=null;uA.J.Ha.call(this)};function DA(a){aA.call(this,a,!1,!0);this.ja=F("report-form-modal-renderer");this.l=null;this.f=a}
A(DA,aA);DA.prototype.D=function(){this.dismiss("close")};
DA.prototype.show=function(a){DA.J.show.call(this,a);this.l=new uA(this.H);Fr(this.l,G("yt-dialog-fg-content",this.f));mt("yt-ui-dialog-hide-complete",y(this.D,this))};
DA.prototype.dismiss=function(a){DA.J.dismiss.call(this,a);this.l&&(this.l=null);zf(this.ja)};function EA(){W.call(this,"report-thumb-wrap");this.f=null;this.g=!1}
la(EA,W);EA.prototype.register=function(){Y(this,"click",this.i)};
EA.prototype.unregister=function(){Z(this,"click",this.i);W.prototype.unregister.call(this)};
EA.prototype.i=function(a){var b=Kz(a);b=H(b,"yt-lockup");this.f=of("DIV",{"class":"video-renderer-abuse"});var c=of("DIV",{"class":"video-renderer-abuse-content"});this.f.appendChild(c);b.appendChild(this.f);FA(this,Cf(this.f),a,b);Xy(this.f)};
function FA(a,b,c,d){if(!a.g){var e=V(c,"url");(c=V(c,"params"))&&e&&(c={params:c},a.g=!0,qs(e,{format:"JSON",method:"POST",Ga:!0,onSuccess:function(f,g){a.g=!1;if(!F("report-form-modal-renderer")){var k=sf(g.html_content);b.appendChild(k);(new DA(G("yt-dialog",F("report-form-modal-renderer")))).show(d)}},
onError:function(){a.g=!1},
O:c}))}}
Ha(EA);function GA(){W.call(this,"overlay");this.j=this.g=this.i=this.f=null}
A(GA,W);Ha(GA);h=GA.prototype;h.register=function(){Y(this,"click",this.Kc,"target");Y(this,"click",this.hide,"close");HA(this)};
h.unregister=function(){GA.J.unregister.call(this);Z(this,"click",this.Kc,"target");Z(this,"click",this.hide,"close");this.j&&(nt(this.j),this.j=null);this.g&&(R(this.g),this.g=null)};
h.Kc=function(a){if(!this.f||!Vy(this.f.f)){var b=this.V(a);a=IA(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.C(b,"disable-shortcuts")||!1,d=!!this.C(b,"disable-outside-click-dismiss")||!1;this.f=new aA(a,c);this.i=b;var e=G("yt-dialog-fg",a);if(e){var f=this.C(b,"overlay-class")||"",g=this.C(b,"overlay-style")||"default",k=this.C(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,k));Go(e,f)}this.f.show();T("yt-uix-kbd-nav-move-to",e||a);HA(this);c||
d||(c=y(function(l){K(l.target,"yt-dialog-base")&&JA(this)},this),this.g=Q(G("yt-dialog-base",a),"click",c));
this.za(b,"overlay-shown");T("yt-uix-overlay-shown",b)}}};
function HA(a){a.j||(a.j=S("yt-uix-overlay-hide",KA));a.f&&dA(a.f,function(){var b=GA.getInstance();b.i=null;b.f.dispose();b.f=null})}
function JA(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.za(b,"overlay-hidden");a.i=null;a.g&&(R(a.g),a.g=null);a.f=null}}
function IA(a,b){var c;if(a)if(c=G("yt-dialog",a)){var d=F("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=H(b,"yt-dialog"));return c}
function LA(){var a=GA.getInstance();if(a.i)a=G("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=ef("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=H(a[b],"yt-dialog");if(Vy(c)){a=a[b];break a}}a=null}return a}
h.hide=function(a){a&&a.disabled||T("yt-uix-overlay-hide")};
function KA(){JA(GA.getInstance())}
h.show=function(a){this.Kc(a)};function MA(){W.call(this,"char-counter")}
A(MA,W);Ha(MA);MA.prototype.register=function(){Y(this,"keydown",this.f,"input");Y(this,"paste",this.f,"input");Y(this,"cut",this.f,"input");Y(this,"blur",this.f,"input")};
MA.prototype.unregister=function(){Z(this,"keydown",this.f,"input");Z(this,"paste",this.f,"input");Z(this,"cut",this.f,"input");Z(this,"blur",this.f,"input")};
MA.prototype.f=function(a){var b=this.V(a);if(b){var c="true"==this.C(b,"count-char-by-size"),d=parseInt(this.C(b,"char-limit"),10);isNaN(d)||0>=d||O(y(function(){var e="true"==this.C(b,"use-plaintext-length");NA(a,c,e);var f=parseInt(this.C(b,"warn-at-chars-remaining"),10);isNaN(f)&&(f=0);var g=d-OA(a,c,e);Jo(b,X(this,"maxed-out"),g<f);Jo(b,X(this,"maxed-out-singular"),1==Math.abs(g));"true"==this.C(b,"maxed-out-as-positive")&&(g=Math.abs(g));B(ef(X(this,"remaining"),b),function(k){Hf(k,g)})},this),
0)}};
function NA(a,b,c){var d=parseInt(a.getAttribute("maxlength"),10);if(!isNaN(d)){var e=OA(a,b,c);if(b){if(e>d){b=a.value;c=b.length;var f=0;d=e-d;e="";do{e+=b[c-f];var g=unescape(encodeURIComponent(e)).length;f++}while(g<d);a.value=a.value.substring(0,c-f)}}else e>d&&(a.value=a.value.substring(0,d))}}
function OA(a,b,c){a=a.value;c&&(a=ap(a));return b?unescape(encodeURIComponent(a)).length:a.length}
;function PA(){W.call(this,"close")}
A(PA,W);Ha(PA);PA.prototype.register=function(){Y(this,"click",this.f)};
PA.prototype.unregister=function(){Z(this,"click",this.f)};
PA.prototype.f=function(a){var b,c=this.C(a,"close-parent-class"),d=this.C(a,"close-parent-id");d?b=F(d):c&&(b=H(a,c));b&&(Yy(b),c=this.C(a,"close-focus-target-id"))&&(c=F(c))&&(d=lz.getInstance(),d.isToggled(c)&&d.toggle(c),c.focus());this.za(a,"close-callback",b)};function QA(){W.call(this,"expander")}
A(QA,W);Ha(QA);QA.prototype.register=function(){Y(this,"click",this.f,"head");Y(this,"keypress",this.g,"head")};
QA.prototype.unregister=function(){Z(this,"click",this.f,"head");Z(this,"keypress",this.g,"head")};
QA.prototype.f=function(a){RA(this,a)};
QA.prototype.g=function(a,b,c){c&&13==c.keyCode&&RA(this,a)};
function RA(a,b){var c=a.V(b);if(c){c&&(Mf(c)||gf(c,{tabIndex:"0"}),c.focus());Lo(c,X(a,"collapsed"));var d=!K(c,X(a,"collapsed"));T("yt-uix-expander-toggle",c,d);T("yt-dom-content-change",c);a.za(c,"expander-action")}}
;function SA(){W.call(this,"languagepicker");this.f={}}
A(SA,W);Ha(SA);h=SA.prototype;h.register=function(){Y(this,"click",this.qd,"menu-item");Y(this,"keyup",this.fe,"search-input");Y(this,"keydown",this.td,"search-input");Y(this,"blur",this.sd,"search-input");Y(this,"focus",this.pd);this.ha("yt-uix-button-menu-before-show",this.mf);this.ha("yt-uix-button-menu-hide",this.lf)};
h.unregister=function(){Z(this,"click",this.qd,"menu-item");Z(this,"keyup",this.fe,"search-input");Z(this,"keydown",this.td,"search-input");Z(this,"blur",this.sd,"search-input");Z(this,"focus",this.pd);R(Gb(this.f));this.f={};SA.J.unregister.call(this)};
h.mf=function(a){if(K(a,"yt-languagepicker-button")){var b=Na(a);a=Q(a,"keydown",y(this.gf,this));this.f[b]=a}};
h.lf=function(a){K(a,"yt-languagepicker-button")&&(a=Na(a),R(this.f[a]),delete this.f[a])};
function TA(a,b){return fb(b,function(c){return!fb(a,function(d){return 0!=d.lastIndexOf(c,0)})})}
function UA(a,b,c){B(a,function(d){var e=nk(d,"value"),f=VA(d);Uy(d,e!=c&&f&&TA(f,b))})}
function VA(a){if("undefined"===typeof a.f){var b=nk(a,"searchTerms");b?(a.f=[],B(b.split(";"),function(c){qb(a.f,WA(c))})):a.f=WA(Pf(a))}return a.f}
function WA(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function XA(a,b){var c=lz.getInstance(),d=pz(c,a);rz(c,a);tz(c,d,b)}
h.fe=function(a){var b=this.V(a),c=kz(this,"search-result",b),d=WA(a.value);if(d){var e=Bf(c);a=nk(b,"fallbackOption");UA(e,d,a);d=gb(e,Vy);a=c.querySelector('li[data-value="'+a+'"]');Uy(c,!(!d&&!a));d?XA(b,d):a&&(Xy(a),XA(b,a))}else Uy(c,!1)};
h.td=function(a,b,c){b=lz.getInstance();a=this.V(a);var d=pz(b,a);switch(c.keyCode){case 13:case 9:(b=rz(b,a))&&Ws(Cf(b),"click");c.preventDefault();break;case 27:rz(b,a);sz(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
h.qd=function(a){var b=nk(a,"value"),c=this.V(a),d=nk(c,"languagepickerInputId");d=F(d);d.value=b;Ws(d,"change");(d=kz(this,"suggestions",c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=kz(this,"selected",c))&&zf(b),a=a.cloneNode(!0),L(a,X(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function YA(a,b){var c=lz.getInstance(),d=a.V(b);pz(c,d).focus()}
h.sd=function(a){YA(this,a)};
h.pd=function(a,b,c){"INPUT"!=c.target.tagName&&YA(this,a)};
h.gf=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=lz.getInstance();b=nz(c,b);b=kz(this,"search-input",b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var ZA;function $A(){if(!p(ZA)){var a=document.createElement("div");p(a.style.MozTransition)?ZA="Moz":p(a.style.WebkitTransition)?ZA="Webkit":p(a.style.f)?ZA="O":ZA=null}return ZA}
;function aB(a,b){Px.call(this,a,b)}
A(aB,Px);function bB(a,b,c){b=$A()+b;a.el.style[b]=c}
aB.prototype.play=function(){this.el.style.opacity=this.g;O(y(function(){bB(this,"TransitionTimingFunction",this.Lc);bB(this,"TransitionDuration",this.duration+"s");bB(this,"TransitionProperty","opacity");Xs(this.el,Vd?"webkitTransitionEnd":Rd?"oTransitionEnd":"transitionend",y(function(){bB(this,"TransitionTimingFunction","");bB(this,"TransitionDuration","");bB(this,"TransitionProperty","");this.Vb&&this.Vb(this)},this));
this.el.style.opacity=this.f},this),20)};function cB(a,b){this.B=1;this.l=0;this.j=!1;Qx.call(this,a,b)}
A(cB,Qx);cB.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.B=isNaN(b)?1:b;this.l=isNaN(c)?0:c;this.j=!p(this.el.style.opacity);cB.J.setup.call(this,a)};
cB.prototype.la=function(){this.j&&1==this.l&&(this.el.style.filter="")};
function dB(a,b){this.g=1;this.f=0;Px.call(this,a,b)}
A(dB,aB);dB.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.g=isNaN(b)?1:b;this.f=isNaN(c)?0:c;dB.J.setup.call(this,a)};function eB(a,b,c){var d={duration:.5};d.start=b;d.end=c;$A()?new dB(a,d):new cB(a,d)}
;function fB(a,b){B(b,function(c){var d=!0;d=void 0===d?!1:d;c={csn:a,ve:Zt(c),eventType:d?16:8};d={fd:void 0,ec:a,Pe:d};"UNDEFINED_CSN"==a?$t("visualElementHidden",c,d):Xt("visualElementHidden",c,ku,d)})}
;function gB(){W.call(this,"mouseover-img-wrap");this.j=this.f=!1;this.F=this.B=this.g=-1;this.i=""}
A(gB,W);Ha(gB);var hB=0,iB=0;h=gB.prototype;h.register=function(){Y(this,"mouseover",this.sb);Y(this,"focusin",this.sb);Y(this,"focus",this.sb);Y(this,"mouseout",this.rb);Y(this,"focusout",this.rb);Y(this,"blur",this.rb);Y(this,"click",this.Be);Y(this,"mousedown",this.Ed)};
h.unregister=function(){P(hB);P(iB);Z(this,"mouseover",this.sb);Z(this,"focusin",this.sb);Z(this,"focus",this.sb);Z(this,"mouseout",this.rb);Z(this,"focusout",this.rb);Z(this,"blur",this.rb);Z(this,"click",this.Be);Z(this,"mousedown",this.Ed);gB.J.unregister.call(this)};
function jB(a){a=a.getElementsByTagName("img");return 0<a.length?a[0]:null}
function kB(a){return(a=a.match(/\/([a-zA-Z0-9_-]{11})\//))?a[1]:""}
function lB(a,b){if(a.j){var c={isMovingThumbnail:a.f};if(a.f&&0<a.g){var d=a.F-a.B;0<a.B&&0<d&&(c.movingThumbnailLoadingDurationMs=Math.round(d));c.durationHoveredMs=Math.round(Kr()-a.g)}a.i&&(c.videoId=a.i);d=ew();var e=V(b,"visibility-tracking");d&&e&&(c={thumbnailHoveredData:c},e={csn:d,ve:Zt(new Yt({trackingParams:e})),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_HOVER"},c&&(e.clientData=c),c={fd:void 0,ec:d},"UNDEFINED_CSN"==d?$t("visualElementGestured",e,c):Xt("visualElementGestured",e,ku,
c));a.j=!1;a.f=!1;a.g=-1;a.B=-1;a.F=-1;a.i=""}}
function mB(a,b){var c=a.C(b,"mouseover-src");return of("IMG",{"class":"mouseover-img",src:c,width:b.width,height:b.height})}
function nB(a){return G("mouseover-img",a)}
function oB(a,b,c){120!=b.naturalWidth?(a.g=Kr(),a.F=Kr(),hB=O(a.wf,2500),eB(b,0,1)):c&&eB(c,0,1)}
h.wf=function(a){P(hB);hB=0;var b=nB(a);b&&(eB(b,1,0),(a=G("mouseover-play",a))&&eB(a,0,1))};
function pB(){var a=of("DIV",{"class":"mouseover-play"}),b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("width","48px");b.setAttribute("height","48px");b.setAttribute("viewBox","0 0 24 24");b.setAttribute("fill","#fff");var c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M8 5v14l11-7z");b.appendChild(c);a.appendChild(b);return a}
function qB(a){return"none"!=(Hg(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display)}
h.Ed=function(a){P(iB);iB=0;(a=nB(a))&&!a.complete&&(sd(a,""),a.onload=null,P(hB),hB=0)};
h.sb=function(a){var b=jB(a);if(b){var c=this.C(b,"mouseover-src"),d=G("mouseover-play",a),e=nB(a);if(!d||c&&!e)c?(this.f=!0,this.i=kB(c)):(this.f=!1,b.src&&(this.i=kB(b.src))),d||(d=pB(),b.parentNode.appendChild(d)),P(iB),iB=0,this.j=!1,iB=O(function(){this.B=Kr();this.j=!0;d&&!c&&eB(d,0,1);c&&!e&&(e=mB(this,b),b.parentNode.appendChild(e),e.complete?oB(this,e,d):e.onload=function(){oB(this,e,d)}.bind(this))}.bind(this),150)}};
h.rb=function(a){var b=jB(a);if(null!=b){var c=this.C(b,"mouseover-src");b=this.C(b,"mouseover-log");var d=G("mouseover-play",a),e=nB(a);if(d&&!qB(d)||c&&e&&!qB(e))P(iB),iB=0,d&&d.parentNode.removeChild(d),e&&(e.onload=null,e.complete&&120!=e.naturalWidth||(this.g=0),P(hB),hB=0,sd(e,""),e.parentNode.removeChild(e)),b&&lB(this,H(a,"yt-lockup-video"))}};
h.Be=function(a){var b=jB(a);null!=b&&this.C(b,"mouseover-log")&&lB(this,H(a,"yt-lockup-video"))};function rB(){W.call(this,"redirect-link")}
A(rB,W);Ha(rB);rB.prototype.register=function(){Y(this,"click",this.f)};
rB.prototype.unregister=function(){Z(this,"click",this.f)};
rB.prototype.f=function(a){if(!V(a,"redirect-href-updated")){ox(a,"redirect-href-updated","true");var b=M("XSRF_REDIRECT_TOKEN");if(b){var c={};c.q=a.href;c.redir_token=b;rd(a,fg("/redirect",c))}}};function sB(){W.call(this,"scroller");this.f={}}
A(sB,W);Ha(sB);h=sB.prototype;h.register=function(){Y(this,"mouseenter",this.Fd);Y(this,"mouseleave",this.Tb)};
h.unregister=function(){Z(this,"mouseenter",this.Fd);Z(this,"mouseleave",this.Tb);for(var a in this.f)this.Tb(this.f[a]);this.f={};sB.J.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.Tb(this.f[a]);this.f={}};
h.Fd=function(a){var b=Q(a,"mousewheel",y(this.qf,this,a));ox(a,"scroller-mousewheel-listener",b);b=Q(a,"scroll",y(this.xh,this,a));ox(a,"scroller-scroll-listener",b);a&&(b=Na(a).toString(),this.f[b]=a)};
h.Tb=function(a){var b=this.C(a,"scroller-mousewheel-listener")||"";ox(a,"scroller-mousewheel-listener","");var c=this.C(a,"scroller-scroll-listener")||"";ox(a,"scroller-scroll-listener","");R(b);R(c);ox(a,"scroller-scroll-listener","");a&&(a=Na(a).toString(),delete this.f[a])};
h.qf=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.C(a,"scroller-allow-pagescroll")||b.preventDefault()};
h.xh=function(a){this.za(a,"scroll-action");T("yt-dom-content-change",a)};function tB(){W.call(this,"sessionlink")}
A(tB,W);Ha(tB);tB.prototype.register=function(){Y(this,"mousedown",this.f);Y(this,"click",this.f)};
tB.prototype.unregister=function(){Z(this,"mousedown",this.f);Z(this,"click",this.f)};
tB.prototype.f=function(a){uB(a)};
function uB(a){var b;if(b=V(a,"sessionlink-target")||a.href||""){var c=V(a,"sessionlink")||"";c=Sr(c);(a=parseInt(V(a,"sessionlink-lifetime"),10))?fw(b,c,a):fw(b,c)}}
;function vB(a){W.call(this,a||"slider");this.g=0;this.f=null}
A(vB,W);Ha(vB);h=vB.prototype;h.register=function(){Y(this,"click",this.bd,"prev");Y(this,"click",this.ad,"next");Y(this,"keyup",this.Md,"item");this.f=Q(window,"resize",y(this.rf,this));this.ha("yt-uix-expander-toggle",this.hc)};
h.unregister=function(){Z(this,"click",this.bd,"prev");Z(this,"click",this.ad,"next");Z(this,"click",this.Md,"item");R(this.f);vB.J.unregister.call(this)};
h.hc=function(){B(ef(X(this)),function(a){wB(this,a)},this)};
h.rf=function(){P(this.g);this.g=O(y(this.hc,this),200)};
function xB(a,b,c){var d=a.V(b);if(!K(d,X(a,"is-moving"))){b=kz(a,"list",d);var e=kz(a,"body",d),f=pb(ef(X(a,"item"),d));if(f){var g=f[0];if("forward"==c){var k=yB(d,e,f);c=p(k.nextElementSibling)?k.nextElementSibling:Df(k.nextSibling,!0);if(!c)return;k=zB(a,c,e,f);g=c}else if("back"==c){k=AB(d,e,f);c=p(k.previousElementSibling)?k.previousElementSibling:Df(k.previousSibling,!1);if(!c)return;k=BB(a,c,e,f);g=c}L(d,X(a,"is-moving"));Ug(d)?b.style.right=(parseInt(b.style.right,10)||0)-k+"px":b.style.left=
(parseInt(b.style.left,10)||0)+k+"px";var l=O(y(a.Zd,a,d,g),510);Xs(b,bn,y(function(m){P(l);this.Zd(d,m)},a,g))}}}
h.ad=function(a){xB(this,a,"forward")};
h.bd=function(a){xB(this,a,"back")};
h.Md=function(a){(a=this.V(a))&&T("yt-dom-content-change",a)};
function AB(a,b,c){return Ug(a)?CB(a,b,c):DB(a,b,c)}
function yB(a,b,c){return Ug(a)?DB(a,b,c):CB(a,b,c)}
function DB(a,b,c){function d(f){return Og(f)>e-1}
var e=Og(b);return Ug(a)?ib(c,d):gb(c,d)}
function CB(a,b,c){function d(f){f=Og(f)+f.offsetWidth;return e>f-1}
var e=Og(b)+b.offsetWidth;return Ug(a)?gb(c,d):ib(c,d)}
function BB(a,b,c,d){var e=a.V(b);var f=Og(c);var g=f+c.offsetWidth,k=Og(b);b=k+b.offsetWidth;var l=d[0];d=Og(l);l=d+l.offsetWidth;Ug(e)?(c=a.sc(e,c)-k,f=g-l):(c=a.uc(e,c)-b,f-=d);Jo(e,X(a,"at-tail"),!1);if(Math.abs(c)+1<Math.abs(f))return c;Jo(e,X(a,"at-head"),!0);return f}
function zB(a,b,c,d){var e=a.V(b);var f=Og(c);var g=f+c.offsetWidth,k=Og(b);b=k+b.offsetWidth;var l=d[d.length-1];d=Og(l);l=d+l.offsetWidth;Ug(e)?(c=a.uc(e,c)-b,f-=d):(c=a.sc(e,c)-k,f=g-l);Jo(e,X(a,"at-head"),!1);if(Math.abs(c)+1<Math.abs(f))return c;Jo(e,X(a,"at-tail"),!0);return f}
h.sc=function(a,b){return Og(b)};
h.uc=function(a,b){return Og(b)+b.offsetWidth};
h.Zd=function(a,b){a&&(Ho(a,X(this,"is-moving")),wB(this,a),T("yt-uix-slider-slide-shown",b),T("yt-dom-content-change",a))};
function wB(a,b){var c=kz(a,"body",b),d=pb(ef(X(a,"item"),b));if(d&&d.length){var e=AB(b,c,d);c=yB(b,c,d);e=e==d[0];d=c==d[d.length-1]}else e=d=!0;Jo(b,X(a,"at-head"),e);Jo(b,X(a,"at-tail"),d);if(a.C(b,"disable-slider-buttons")){if(c=kz(a,"prev",b))c.disabled=e;if(e=kz(a,"next",b))e.disabled=d}}
;function EB(){W.call(this,"tabs")}
A(EB,W);Ha(EB);EB.prototype.register=function(){Y(this,"click",this.f,"tab");Y(this,"keydown",this.g,"tab")};
EB.prototype.unregister=function(){Z(this,"click",this.f,"tab");Z(this,"keydown",this.g,"tab");EB.J.unregister.call(this)};
EB.prototype.f=function(a){if(!K(a,"disabled")){var b=this.V(a),c=X(this,"selected"),d=this.C(b,"uix-tabs-selected-extra-class");if(b=G(c,b)){var e=FB(this,b);Ho(b,c);d&&Ho(b,d);Yy(e)}b=FB(this,a);L(a,c);d&&L(a,d);Xy(b);T("yt-uix-tabs-after-shown",a,b)}};
EB.prototype.g=function(a,b,c){13==c.keyCode&&this.f(a)};
function FB(a,b){var c=a.C(b,"uix-tabs-target-id");return F(c)}
;function GB(){W.call(this,"tile")}
A(GB,W);Ha(GB);GB.prototype.register=function(){Y(this,"click",this.f)};
GB.prototype.unregister=function(){Z(this,"click",this.f)};
GB.prototype.f=function(a,b,c){Rf(c.target,"a")||Rf(c.target,"button")||!(a=G(X(this,"link"),a))||(E&&!ie(9)?a.click():(K(a,"yt-uix-sessionlink")&&uB(a),K(a,"spf-link")?Zx(a.href):Yx(a.href)))};function HB(){var a=Js();return a?a:null}
;function IB(){W.call(this,"tooltip");this.f=0;this.g={}}
A(IB,W);Ha(IB);h=IB.prototype;h.register=function(){Y(this,"mouseover",this.lc);Y(this,"mouseout",this.Za);Y(this,"focus",this.hd);Y(this,"blur",this.Tc);Y(this,"click",this.Za);Y(this,"touchstart",this.le);Y(this,"touchend",this.gc);Y(this,"touchcancel",this.gc)};
h.unregister=function(){Z(this,"mouseover",this.lc);Z(this,"mouseout",this.Za);Z(this,"focus",this.hd);Z(this,"blur",this.Tc);Z(this,"click",this.Za);Z(this,"touchstart",this.le);Z(this,"touchend",this.gc);Z(this,"touchcancel",this.gc);this.dispose();IB.J.unregister.call(this)};
h.dispose=function(){for(var a in this.g)this.Za(this.g[a]);this.g={}};
h.lc=function(a){if(!(this.f&&1E3>z()-this.f)){var b=parseInt(this.C(a,"tooltip-hide-timer"),10);b&&(qx(a,"tooltip-hide-timer"),P(b));b=y(function(){JB(this,a);qx(a,"tooltip-show-timer")},this);
var c=parseInt(this.C(a,"tooltip-show-delay"),10)||0;b=O(b,c);ox(a,"tooltip-show-timer",b.toString());a.title&&(jz(a,KB(this,a)),a.title="");b=Na(a).toString();this.g[b]=a}};
h.Za=function(a){var b=parseInt(this.C(a,"tooltip-show-timer"),10);b&&(P(b),qx(a,"tooltip-show-timer"));b=y(function(){if(a){var c=F(LB(this,a));c&&(MB(c),zf(c),qx(a,"content-id"));c=F(LB(this,a,"arialabel"));zf(c)}qx(a,"tooltip-hide-timer")},this);
b=O(b,50);ox(a,"tooltip-hide-timer",b.toString());if(b=this.C(a,"tooltip-text"))a.title=b;b=Na(a).toString();delete this.g[b]};
h.hd=function(a,b){this.f=0;this.lc(a,b)};
h.Tc=function(a){this.f=0;this.Za(a)};
h.le=function(a,b,c){c.changedTouches&&(this.f=0,(a=gz(b,X(this),c.changedTouches[0].target))&&this.lc(a,b))};
h.gc=function(a,b,c){c.changedTouches&&(this.f=z(),(a=gz(b,X(this),c.changedTouches[0].target))&&this.Za(a))};
function NB(a,b,c){jz(b,c);a=a.C(b,"content-id");(a=F(a))&&Hf(a,c)}
function KB(a,b){return a.C(b,"tooltip-text")||b.title}
function JB(a,b){if(b){var c=KB(a,b);if(c){var d=F(LB(a,b));if(!d){d=document.createElement("div");d.id=LB(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var k=OB(a,b),l=LB(a,b,"content");g.id=l;ox(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var m=Pf(b);l=LB(a,b,"arialabel");f=document.createElement("div");L(f,X(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Hf(f,m);b.setAttribute("aria-labelledby",l);l=HB()||document.body;l.appendChild(f);l.appendChild(d);NB(a,b,c);(c=parseInt(a.C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",L(g,X(a,"normal-wrap")));g=K(b,X(a,"reverse"));PB(a,b,d,e,k,g)||PB(a,b,d,e,k,!g);var q=X(a,"tip-visible");
O(function(){L(d,q)},0)}}}}
function PB(a,b,c,d,e,f){Jo(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=Rg(b);f=new We((k.width-10)/2,f?k.height:0);var l=Ng(b);ar(new We(l.x+f.x,l.y+f.y),c,g);f=jf(window);if(1==c.nodeType)var m=Pg(c);else c=c.changedTouches?c.changedTouches[0]:c,m=new We(c.clientX,c.clientY);c=Rg(d);var q=Math.floor(c.width/2);g=!!(f.height<m.y+k.height);k=!!(m.y<k.height);l=!!(m.x<q);f=!!(f.width<m.x+q);m=(c.width+3)/-2- -5;a=a.C(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||k)}
function LB(a,b,c){a=X(a)+Es(b);c&&(a+="-"+c);return a}
function OB(a,b){var c=null;Xd&&K(b,X(a,"masked"))&&((c=F("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Xy(c)):(c=rf("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function MB(a){var b=F("yt-uix-tooltip-shared-mask"),c=b&&Sf(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Yy(b),document.body.appendChild(b))}
;var QB=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};t("yt.uix.widgets_",QB,void 0);function RB(a){a=a.getInstance();var b=X(a);b in QB||(a.register(),a.ha("yt-uix-init-"+b,a.init),a.ha("yt-uix-dispose-"+b,a.dispose),QB[b]=a)}
;function SB(){this.i=[]}
h=SB.prototype;h.Jd=function(){};
h.dispose=function(){this.i&&(R(this.i),this.i=[]);this.Jd()};
function TB(a,b,c,d,e){a.i.push(Vs(b,c,y(d,a),e))}
h.redirect=function(a){Yx(a)};
function UB(a,b){if(!b)return!1;var c=b.redirect_url;if(!c)try{var d=xs(b);c=ws(d,"redirect_url")}catch(e){c=null}if(!c)return!1;a.redirect(c);return!0}
h.Ub=function(){};
h.Uf=function(a,b,c){(c=JSON.parse(c.responseText))&&(a&&UB(this,c)||b&&b.call(this,c))};
function VB(a,b,c,d,e,f,g){a={format:b,method:"POST",onError:g||y(a.Ub,a),la:void 0,onSuccess:f,O:e||{},ta:d||{},Ga:!0};qs(c,a)}
;function WB(){this.i=[];this.w=this.B="";this.A=null;this.F=this.j=!1;this.D=null;this.L=this.H=""}
A(WB,SB);h=WB.prototype;h.Id=function(){};
h.close=function(a){this.F=!1;this.f.dismiss(a||"close");this.dispose()};
h.create=function(a,b,c,d){this.F&&(b&&(this.A=b),c&&(this.D=c),a&&!this.j?this.Xg({},d):this.oc())};
h.open=function(a,b,c,d,e,f,g,k,l){this.B=a;this.H=b;if(this.l=F(this.B+"-lb")){(a=wy())&&a.pauseVideo&&a.pauseVideo();if(this.j)this.reset();else{this.f=new aA(this.l,k);try{this.f.setTitle("")}catch(m){}}XB(this,"loading");this.f.show();this.F=!0}d&&this.create(e,f,g,l)};
h.reset=function(){this.j&&YB(this)};
h.setClass=function(a,b){Jo(this.Y,a,b)};
function ZB(a,b){dA(a.f,b)}
h.Xg=function(a,b,c,d,e){arguments.length&&XB(this,e||"loading");var f=a||{};this.A&&(f.feature=this.A);this.D&&(f.next=this.D);VB(this,"XML",this.H,f,b||{},y(this.Vf,this,c),d)};
function XB(a,b){switch(b){case "content":bA(a.f,"content");break;case "loading":bA(a.f,"loading");break;case "working":bA(a.f,"working")}}
function YB(a,b){if(a.j){var c=b||a.L;if(c){if(a.w){var d=a.Y;Ho(d,a.w);L(d,c)}else L(a.Y,c);a.w=c}}}
h.oc=function(a,b){a&&pd(F(this.B+"-dialog"),a);if(b)try{this.f.setTitle(b)}catch(c){}this.Y=G("yt-dialog-fg",this.l);this.L=V(G("yt-pd-params",this.l),"start-page")||"";TB(this,this.Y,"click",this.mg,"yt-pd-close");TB(this,this.Y,"click",this.fg,"yt-pd-setclass");TB(this,this.Y,"click",this.sg,"yt-pd-setpage");this.Id();XB(this,"content");this.j=!0;YB(this)};
h.mg=function(){this.close("cancel")};
h.fg=function(a){a=H(a.target,"yt-pd-setclass");var b=V(a,"off");b&&this.setClass(b,!1);(a=V(a,"on"))&&this.setClass(a,!0)};
h.sg=function(a){a=H(a.target,"yt-pd-setpage");(a=V(a,"state-container-id"))&&YB(this,a)};
h.Ub=function(a){WB.J.Ub.call(this,a);this.close()};
h.Vf=function(a,b,c){var d=xs(b);if(d){var e=ws(d,"not_eligible"),f=ws(d,"error_message");e||f?this.Ub(b):UB(this,b)||(c=c.html_content||void 0,d=ws(d,"title")||void 0,a?a(b,y(this.oc,this,c,d)):this.oc(c,d))}};function $B(){this.i=[];this.H=this.A=null;this.D=this.j=!1}
A($B,SB);h=$B.prototype;h.Ec=function(){};
h.Yb=function(){};
h.init=function(a,b,c,d,e){this.A=a||null;this.H=b||null;c?d&&e&&(TB(this,d,"mousedown",this.De,e),TB(this,d,"click",this.je,e)):(this.De(),this.je())};
h.Mb=function(a,b){(r(a)?w(a+".init"):a.init).apply(this,Array.prototype.slice.call(arguments,1))};
h.De=function(){this.j||(this.A&&cy(this.A),this.H&&ux(this.H,y(function(){(this.j=!0,this.D)&&this.Yb()},this)))};
h.je=function(a){this.Ec(a);this.D=!0;this.j&&this.D&&this.Yb()};var aC={};function bC(a){var b=Na(a),c=aC[b];c||(c=new a,aC[b]=c);return c}
;function cC(){$B.call(this);this.l=null}
A(cC,$B);cC.prototype.Ec=function(a){a&&(this.l=V(a.currentTarget,"pageid"))};
cC.prototype.Yb=function(){this.Mb("yt.www.account.AddNewChannelDialog",this.l)};function dC(){$B.call(this);this.g=this.f=null;this.N=!1;this.B=this.w=this.F=null}
A(dC,$B);function eC(a,b,c,d,e){var f=bC(dC);b&&(f.f=b);c&&(f.F=c);d&&(f.w=d);e&&(f.B=e);f.init(M("CREATE_CHANNEL_CSS_URL",void 0),M("CREATE_CHANNEL_JS_URL",void 0),!a,F("body-container"),"create-channel-lightbox")}
dC.prototype.Ec=function(a){this.f||(a&&(a=V(a.currentTarget,"upsell"),"settings"==a||"upload"==a||"playlist"==a||"guide"==a||"comment"==a||"message"==a||"captions"==a||"live_chat"==a||"tbd_channel_account"==a)&&(this.f=a),this.f||(this.f="default"))};
dC.prototype.Yb=function(){switch(this.f){case "settings":this.g="/profile";break;case "guide":this.g=M("CREATE_CHANNEL_NEXT_URL_GUIDE",void 0);break;case "upload":this.g=M("CREATE_CHANNEL_NEXT_URL_UPLOAD",void 0);break;default:this.g=document.location.href}M("CREATE_CHANNEL_NEXT_URL")&&(this.g=M("CREATE_CHANNEL_NEXT_URL",void 0));if(!this.N){this.N=!0;var a=y(this.Uf,this,!1,this.R||null);VB(this,"JSON","/create_channel_ajax",{action_get_type:1},{},a)}};
dC.prototype.L=function(){var a=M("CREATE_CHANNEL_NEXT_URL",void 0);a&&("/"==a?Yx(a):window.history.back())};
dC.prototype.R=function(a){this.N=!1;if(a.open_generic_dialog)fC(this);else if("success"in a&&a.success)switch(a.type){case 15:case 17:case 18:this.Mb("yt.www.account.CreateCoreIdChannelDialog",this.L,this.f,this.g,this.F,this.w,this.B);break;case 8:Yx("/oops");break;case 5:Yx("/create_channel?action_blocked_misc=1");break;case 9:if("tbd_channel_account"==this.f){this.Mb("yt.www.account.CreateCoreIdChannelDialog",this.L,this.f,this.g,this.F,this.w,this.B);break}default:this.Mb("yt.www.account.CreateChannelDialog",
this.L,this.f,this.g)}else"redirect_url"in a&&a.redirect_url?Yx(a.redirect_url):Yx("/oops")};
function fC(a){var b=bC(WB),c=a.g;c&&(-1<c.indexOf("create_channel")||-1<c.indexOf("upload")||-1<c.indexOf("profile"))&&(c="/");b.open("create-channel-identity","/create_channel_ajax","create_channel_ajax",!0,!0,a.f,c);c&&ZB(b,function(){Yx(c)})}
;function gC(a,b){if(Kl()){var c=bz(a),d=0,e=zg()+"-opacity";c&&(c.opacity||c[e])&&(d=c.opacity||c[e]);var f=O(function(){R(g);b.call(a)},d+100),g=Q(a,bn,function(k){k.target==a&&"opacity"==k.propertyName&&(R(g),P(f),b.call(a))})}else O(function(){b.call(a)},0)}
;var hC=Gb({SUCCESS:"yt-alert-success",ERROR:"yt-alert-error",Yi:"yt-alert-warn",INFO:"yt-alert-info",Di:"yt-alert-promo"});function iC(a,b,c){if(c){B(ef("yt-alert",c),function(e){gC(e,function(){e.parentNode&&e.parentNode.removeChild(e)});
L(e,"yt-alert-fading")});
b.removeAttribute("id");Io(b,hC);L(b,"yt-alert-success");var d=G("yt-alert-content",b);(G("yt-alert-message",b)||d).innerHTML=a;c.appendChild(b);Xy(b)}}
;function jC(a,b){this.f=new aA(a,!0);this.l=b;this.j=this.g=this.B=""}
var kC=[],lC=[],mC=null;function nC(a,b,c,d){var e=F("feed-privacy-lb");e&&(mC=new jC(e,a),mC.B=b||"",mC.g=c||"",mC.j=d||"",a=mC,cy(M("FEED_PRIVACY_CSS_URL",void 0)),oC(a,null,{channel_id:a.g,setting_type:a.l,playlist_id:a.j,video_id:a.B}))}
function pC(a){nC("SUBSCRIPTIONS",void 0,a)}
function qC(a){nC("LIKES",a)}
function rC(a){nC("FAVORITES",a)}
function sC(a,b){nC("PLAYLISTS",a,void 0,b)}
function tC(a){nC("LIKE_PLAYLISTS",void 0,void 0,a)}
jC.prototype.dismiss=function(){this.f.dismiss("cancel")};
function oC(a,b,c){a={method:"POST",format:"XML",ta:b||{},O:c||{},Ga:!0,onSuccess:y(a.w,a),onError:y(a.F,a)};qs("/feed_privacy_ajax",a)}
jC.prototype.w=function(a,b){var c=xs(a),d=ws(c,"invalid_request"),e=ws(c,"missing_setting_type"),f=ws(c,"already_seen_dialog");if(!(d||e||f))if(d=F("feed-privacy-dialog"),e=wy(),c=ws(c,"success_message")){f=F("alerts");var g=Zc(b.alert_template_html).toString();g=g.replace(/^[\s\xa0]+/,"");var k=String(g.substr(0,3)).toLowerCase();0==("<tr"<k?-1:"<tr"==k?0:1)?(g=sf(Tf("<table><tbody>"+g+"</tbody></table>")),g=Is("tr",g)):(k=document.createElement("div"),k.innerHTML=g,g=Cf(k));iC(c,g,f);Ys(d);window.scroll(0,
0);this.dismiss();e&&e.playVideo&&e.playVideo()}else e&&e.pauseVideo&&e.pauseVideo(),pd(d,b.html_content),lC.push(Vs(d,"click",y(this.i,this,!1),"make-activity-public-button")),lC.push(Vs(d,"click",y(this.i,this,!0),"make-activity-private-button")),T("yt-dom-content-change",d),bA(this.f,"content"),this.f.show()};
jC.prototype.F=function(){this.dismiss()};
jC.prototype.i=function(a){var b={};b[a?"action_make_private":"action_make_public"]="1";a={setting_type:this.l};bA(this.f,"working");oC(this,b,a)};function uC(){WB.call(this);this.g=[];cy(M("IDENTITY_PROMPT_CSS_URL",void 0))}
A(uC,WB);h=uC.prototype;h.Id=function(){this.g.push(Vs(this.Y,"click",y(this.hf,this),"identity-prompt-account-list-item"));this.g.push(Vs(this.Y,"click",y(this.vf,this),"specialized-identity-prompt-account-item"));this.g.push(Vs(this.Y,"click",y(this.ef,this),"authuser-mismatch-identity-prompt-account-item"))};
h.Jd=function(){R(this.g);this.g.length=0};
h.hf=function(a){var b=F("identity-prompt-form");a=cf("input",void 0,a.currentTarget);b&&b.action&&a&&1==a.length&&(b.action=Ur(b.action,{pageId:a[0].value}));var c=F("identity-prompt-confirm-button");c?c.disabled=!1:b&&a&&1==a.length&&(a[0].checked=!0,b.submit())};
h.vf=function(a){a=V(a.currentTarget,"switch-url");F("dont_ask_again").checked&&(a+="&dont_ask_again=on");Yx(a)};
h.ef=function(a){a=V(a.currentTarget,"switch-url");Yx(a)};function vC(a){this.g=a;this.f=null;a=wC(this.g);a=wd("__%s__","("+a.join("|")+")");this.f=new RegExp(a,"g");this.i={}}
var xC=/__([a-z]+(?:_[a-z]+)*)__/g;function wC(a){var b=[],c={};a.replace(xC,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
function yC(a,b){var c=y(function(d,e){return b[e]||this.i[e]||""},a);
return a.g.replace(a.f,c)}
;function zC(a){var b={};void 0!==AC()&&(b.ar=AC());void 0!==BC().nv&&(b.nv=BC().nv);Object.assign(a,b);a.o=BC().o;return a}
function AC(){return void 0!==BC().earst?""+(CC+(Date.now()-DC)):BC().ar}
var CC=Date.now(),DC=Date.now();function BC(){return M("CREATOR_CONTEXT",EC)}
var EC={o:"U"},FC=BC().earst;void 0!==FC&&(CC=FC,DC=Date.now());function GC(){this.w=null;this.f=[];this.promo=null;this.l="";this.g=null;this.R=bf("mcn-affiliate-agreement-overlay-template");var a=F(this.R).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");this.N=new vC(a);this.i=!1}
A(GC,Ai);GC.prototype.init=function(a,b,c){this.promo=a;this.l=b;this.g=c;this.f.push(Q(this.promo,"click",y(this.W,this)));this.f.push(Vs(this.g,"click",y(this.U,this),this.l));this.f.push(Vs(this.g,"click",y(this.A,this),"yt-uix-overlay-close"));a=LA();this.f.push(Vs(a,"click",y(this.A,this),"yt-dialog-close"));this.f.push(Vs(this.g,"click",y(this.H,this),"mcn-affiliate-agreement-checkbox"));this.f.push(Vs(this.g,"change",y(this.H,this),"commerce-creator-signup-text-fields"))};
GC.prototype.A=Ga;GC.prototype.H=function(){var a=bf("agreement-checkbox-1"),b=bf("agreement-checkbox-2"),c=bf("agreement-checkbox-3"),d=!0;this.i&&(d=K(bf("sign-contract-form"),"ng-valid"));G(this.l,void 0).disabled=!(a.checked&&b.checked&&c.checked&&d)};
function HC(a,b,c,d,e){b=zC({action_load_agreement:1,is_modal:b});qs("/account_mcn_affiliate_monetization_ajax",{method:"POST",ta:b,context:a,onSuccess:y(function(f,g){this.w=g.contract_tags;this.i="user_contact_info_form"in g;c(g);this.i&&(angular.module("mcnAffiliateAgreement",[]),angular.bootstrap(document,["mcnAffiliateAgreement"]))},a),
onError:y(function(){this.w=null;d()},a),
la:function(){e()}})}
function IC(){var a=zd(bf("full_name").value),b=zd(bf("title").value),c=zd(bf("email_address").value),d=zd(bf("phone_number").value),e=zd(bf("company_name").value);return{full_name:a,title:b,email_address:c,phone_number:d,company_name:e}}
function JC(a,b,c){bf("agreement-checkbox-1").disabled=!0;bf("agreement-checkbox-2").disabled=!0;bf("agreement-checkbox-3").disabled=!0;var d=bf("agreement-email-yes"),e=zC({action_sign_up:1});d={contract_tags:a.w.join(),has_commerce_feature:a.i,receive_emails:d.checked};if(a.i){var f=IC();Qb(d,f)}qs("/account_mcn_affiliate_monetization_ajax",{method:"POST",ta:e,O:d,context:a,onSuccess:y(function(){b()},a),
onError:y(function(){c()},a)})}
GC.prototype.K=function(){R(this.f);this.f.length=0;GC.J.K.call(this)};function KC(a){GC.call(this);var b=bf("mcn-affiliate-signup-button");this.init(b,"mcn-affiliate-sign-agreement-button",bf("mcn-affiliate-agreement"));this.D=a;this.j=!1;if(M("SHOW_MCNA_YPE_MODAL")){this.j=!0;a=M("MCNA_YPE_CONTRACT_CSS_URL",void 0);var c=M("ACCOUNT_MONETIZATION_CSS_URL",void 0);cy(M("MCNA_YPE_COMMERCE_CREATOR_CSS_URL",void 0));cy(a);cy(c);ux(M("ANGULAR_JS",void 0));b.click()}}
A(KC,GC);
KC.prototype.W=function(a){a.preventDefault();a.stopPropagation();var b=a.currentTarget;b.disabled=!0;HC(this,this.j,y(function(c){a.currentTarget.disabled=!1;var d=a.currentTarget;GA.getInstance().show(d);d=LA();G("yt-dialog-content",d).innerHTML=yC(this.N,{agreements_title:c.agreements_title,agreements_disclaimer:c.agreements_disclaimer,agreements:c.agreements,review_disclaimer:c.review_disclaimer,underage_message:c.underage_message,agreements_action_buttons:c.agreements_action_buttons,user_contact_info_form:c.user_contact_info_form});
a.currentTarget.disabled=!0},this),function(){Xy(bf("mcn-affiliate-promo-error-msg"))},function(){b.disabled=!1})};
KC.prototype.U=function(a){a.preventDefault();a.stopPropagation();a=a.currentTarget;a.disabled||(a.disabled=!0,this.j||(bf("agreement-close-button").disabled=!0),JC(this,y(this.L,this),function(){GA.getInstance().hide();Xy(bf("mcn-affiliate-promo-error-msg"))}))};
KC.prototype.A=function(){if(this.j){var a=zC({action_ask_me_later:1});qs("/account_mcn_affiliate_monetization_ajax",{method:"POST",ta:a,context:this})}};
KC.prototype.L=function(){this.D?Yx(this.D):(GA.getInstance().hide(),Uy(this.promo,!1))};var LC=w("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",LC,void 0);function MC(){this.f=M("ALT_PREF_COOKIE_NAME","PREF");var a=du(this.f);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(LC[d]=c.toString())}}}
h=MC.prototype;h.get=function(a,b){NC(a);OC(a);var c=void 0!==LC[a]?LC[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){NC(a);OC(a);if(null==b)throw Error("ExpectedNotNull");LC[a]=b.toString()};
h.remove=function(a){NC(a);OC(a);delete LC[a]};
h.save=function(){cu(this.f,this.dump(),63072E3,"/")};
h.clear=function(){for(var a in LC)delete LC[a]};
h.dump=function(){var a=[],b;for(b in LC)a.push(b+"="+encodeURIComponent(String(LC[b])));return a.join("&")};
function OC(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function NC(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function PC(a){a=void 0!==LC[a]?LC[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ha(MC);function QC(a,b){Ai.call(this);this.g=a;this.l=b;this.f=null;this.i=F("page");this.f=Q(F("premium-yva-close"),"click",y(this.ne,this));var c=this.g;MC.getInstance().get("HIDDEN_MASTHEAD_ID")==c||L(this.i,"masthead-ad-expanded");this.j=Q(window,"message",y(this.df,this))}
A(QC,Ai);var RC=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;h=QC.prototype;h.df=function(a){a&&a.origin&&RC.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.Ce()};
h.K=function(){QC.J.K.call(this);R(this.f);R(this.j);this.j=this.f=null};
h.Ce=function(){Yy("ad_creative_1");T("ads-masthead-hide");T("yt-dom-content-change");this.l&&Yy("ad_creative_collapse_btn_1");Xy("ad_creative_expand_btn_1");Ho(this.i,"masthead-ad-expanded");SC(this.g);zx("homepage_collapse_masthead_ad")};
h.ne=function(){Xy("ad_creative_expand_btn_1");zf(F("premium-yva"));zf(F("video-masthead"));T("yt-dom-content-change");SC(this.g)};
function SC(a){var b=MC.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()}
h.yh=function(){var a=MC.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();zx("homepage_expand_masthead_ad");Yx(document.location.href)};function TC(){vB.call(this,"shelfslider")}
A(TC,vB);Ha(TC);TC.prototype.sc=function(a){a=Ug(a)?kz(this,"next",a):kz(this,"prev",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Og(a)+a.offsetWidth-NaN:Og(a)+a.offsetWidth};
TC.prototype.uc=function(a){a=Ug(a)?kz(this,"prev",a):kz(this,"next",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Og(a)+void 0:Og(a)};var UC=!1,VC=!1;function WC(a){a=void 0===a?{}:a;La(a)&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||Qb(a,{_c:{jsl:{h:M("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||M("GAPI_HINT_OVERRIDE")){var b=Tr(document.location.href).gapi_jsh;b&&Qb(a,{_c:{jsl:{h:b}}})}Wm("client",a)}
;var XC=[],YC={},ZC=[],$C=!1;function aD(){XC.push(Vs(document.body,"click",bD,"yt-google-help-link"))}
function bD(a){a.preventDefault();var b=V(a.currentTarget,"ghelp-anchor")||a.currentTarget,c=V(a.currentTarget,"ghelp-tracking-param")||"";b=document.getElementById(b);var d=a.currentTarget,e=M("GOOGLE_HELP_CONTEXT",void 0);a=M("GOOGLE_HELP_PRODUCT_ID",void 0)||V(a.currentTarget,"feedback-product-id");d=!!V(d,"load-chat-support");cD(b,a,e,M("GOOGLE_HELP_PRODUCT_DATA"),d,!1,c)}
function dD(a,b){var c=M("FEEDBACK_LOCALE_LANGUAGE"),d=YC;Qb(d,M("FEEDBACK_LOCALE_EXTRAS",{}));a&&Qb(d,a);try{var e=wy();e&&e.pauseVideo&&e.pauseVideo();e&&(d.playback_id=e.getVideoData().cpn,e.getLastError&&(d.api_error=e.getLastError()))}catch(f){}b&&Qb(d,{trackingParam:b});return{helpCenterPath:"/youtube",locale:c,productData:d}}
function eD(){var a=M("SESSION_INDEX"),b=M("FEEDBACK_BUCKET_ID"),c={abuseLink:"https://support.google.com/youtube/bin/answer.py?answer=140536",customZIndex:"2000000005"};cs("gfeedback_for_signed_out_users_enabled")&&(c.allowNonLoggedInFeedback=!0);a&&(c.authuser=a+"");b&&(c.bucket=b);return c}
function fD(a,b,c,d){a={context:b,anchor:a,enableSendFeedback:c?!1:!0,defaultHelpArticleId:d};Qb(a,eD());return a}
function cD(a,b,c,d,e,f,g,k){var l=(b||"59")+"",m=dD(d,g),q=fD(a,c,f,k),u=e||!!cs("web_always_load_chat_support");WC(function(){var v=Zl(l,m);if(u&&!$C)try{v.g(q),$C=!0}catch(x){}v.j(q)});
return!1}
function gD(){(E?Yq("7"):me?Yq("3.6"):re?Yq("5"):qe||Sd)||B(ef("reportbug"),function(a){Uy(a,!1)})}
;var hD,iD=[];function jD(a){kD("keyboard");27!=a.keyCode||a.event&&!1===a.event.returnValue||!document.activeElement||document.activeElement.blur()}
function lD(a){0>=a.event.clientX&&0>=a.event.clientY||kD("mouse")}
function kD(a){hD!==a&&(hD=a,R(iD),iD.length=0,"keyboard"==hD?(mD(!0),iD=[Q(window,"click",lD),Q(window,"mousemove",lD)]):"mouse"==hD&&(mD(!1),iD=[Q(window,"keydown",jD)]))}
function mD(a){Jo(document.documentElement,"no-focus-outline",!a)}
;function nD(a){var b=["guide"];b=oD(b);if(b.length){var c=a||{};c.frags=b.join(",");a=M("XSRF_FIELD_NAME",void 0);var d=M("XSRF_TOKEN",void 0),e="/watch_fragments_ajax";cs("use_watch_fragments2")&&(e="/watch_fragments2_ajax");c=fg(e,c);e={};e[a]=d;e.client_url=window.location.href;a=dg(e);pD.push(spf.load(c,{method:"POST",postData:a,onDone:function(){if(jb(b,"guide")){var f=w("yt.www.guide.setup");f&&f(!1);f=M("GUIDE_SELECTED_ITEM",void 0);var g=w("yt.www.guide.selectGuideItem");g&&g(f);T("appbar-guide-delay-load")}T("yt-www-pageFrameCssNotifications-load")}}));
qD=ob(qD,b)}}
function rD(){var a=Tr(window.location.href);a.tr="nonwatch";nD(a)}
function oD(a){return bb(a,function(b){return!jb(qD,b)})}
var pD=[],qD=[],sD=[];function tD(a,b,c){uD("add_to_watch_later_list",a,b,c)}
function vD(a){uD("delete_from_watch_later_list",a,void 0,void 0)}
function uD(a,b,c,d){qs(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",ta:{feature:b.feature||null,authuser:b.cj||null,pageid:b.pageId||null},O:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.oj||null,add_to_playlists:b.bj||null,plid:M("PLAYBACK_ID")||null},context:b.context,onError:b.onError,onSuccess:function(e,f){b.onSuccess.call(this,e,f)},
la:b.la,withCredentials:!!d})}
;var wD=[],xD="";function yD(){ez("addto-watch-later-button","click",zD);ez("addto-watch-later-button-success","click",AD);ez("addto-watch-later-button-remove","click",BD);ez("addto-watch-later-button-sign-in","click",CD);var a=F("shared-addto-watch-later-login");wD.push(Vs(a,"click",DD,"sign-in-link"));wD.push(Vs(a,"focusout",ED,"sign-in-link"))}
function CD(a){xD=V(a,"video-ids");var b=G("sign-in-link",F("shared-addto-watch-later-login"));b&&(L(a,"addto-wl-focused"),O(function(){b.focus()},0))}
function ED(){var a=G("addto-wl-focused");a&&(Ho(a,"addto-wl-focused"),O(function(){a.focus()},0))}
function DD(a){var b=Ur("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:xD,next_url:document.location}),c=rf("form");c.action=b;c.method="POST";b=rf("input");b.type="hidden";b.name=M("XSRF_FIELD_NAME",void 0);b.value=M("XSRF_TOKEN",void 0);c.appendChild(b);document.body.appendChild(c);c.submit();a.preventDefault()}
function zD(a){Ko(a,"addto-watch-later-button","addto-watch-later-button-loading");gf(a,{"aria-pressed":"true"});var b=V(a,"video-ids");tD({videoIds:b,onSuccess:function(c,d){var e=d.list_id;FD(e,b,a);T("playlist-addto",b,e)},
onError:function(c,d){6==d.return_code?FD(d.list_id,b,a):GD(a,d)}})}
function AD(a){Ko(a,"addto-watch-later-button-success","addto-watch-later-button-loading");var b=V(a,"video-ids");vD({videoIds:b,onSuccess:function(){Ko(a,"addto-watch-later-button-loading","addto-watch-later-button");var c=My("ADDTO_WATCH_LATER");NB(IB.getInstance(),a,c);T("WATCH_LATER_VIDEO_REMOVED")},
onError:function(c,d){GD(a,d)}})}
function BD(a){var b=V(a,"video-ids");vD({videoIds:b,onSuccess:function(c,d){T("WATCH_LATER_VIDEO_REMOVED",a,d.result.video_count)},
onError:function(c,d){GD(a,d)}})}
function FD(a,b,c){Ko(c,"addto-watch-later-button-loading","addto-watch-later-button-success");var d=My("ADDTO_WATCH_LATER_ADDED");NB(IB.getInstance(),c,d);T("WATCH_LATER_VIDEO_ADDED",a,b.split(","))}
function GD(a,b){Ko(a,"addto-watch-later-button-loading","addto-watch-later-button-error");var c=b.error_message||My("ADDTO_WATCH_LATER_ERROR");NB(IB.getInstance(),a,c)}
;function HD(a){if(!ID||a)ID=jf(window);return ID}
function JD(){return KD=lf(document)}
function LD(){MD||(MD=Ot(ND,100))}
function ND(){MD=0;OD?ot("page-mouse",OD.f||new We):Qr(Error("MouseTracker missing during publish."))}
function PD(){QD||(QD=Ot(RD,200))}
function RD(){QD=0;var a=HD(!0);ot("page-resize",a)}
function SD(){TD||(TD=Ot(UD,200))}
function UD(){TD=0;var a=JD();ot("page-scroll",a)}
var ID=null,KD=null,VD=[],OD=null,MD=0,QD=0,TD=0;var WD,XD,YD,ZD,$D,aE,bE=0,cE=!1;function dE(){cE||(w("yt.www.page.visibilitymonitor").dispose(),XD={},YD={},WD={},ZD={},aE=[],$D=eE(),aE.push(S("page-resize",fE)),aE.push(S("page-scroll",gE)),aE.push(S("yt-dom-content-change",hE)),cE=!0,iE(!0))}
function jE(){cE&&(nt(aE),kE(),XD={},YD={},WD={},ZD={},aE.length=0,$D=null,cE=!1)}
function fE(){$D=eE();hE()}
function gE(){$D=eE();lE()}
function eE(){var a=JD(),b=HD();return new Ag(a.y,a.x+b.width-1,a.y+b.height-1,a.x)}
function mE(a){var b=Es(a),c=WD[b];if(c)return c;c=Q(a,"scroll",nE);return c=WD[b]={el:a,Wg:c,ob:null}}
function kE(){Ab(WD,function(a,b){var c=WD[b];c&&R(c.Wg);delete WD[b]})}
function nE(a){hE(a.target)}
function oE(a,b){var c=[Es(a),b.complete];if(b.transform){var d=b.transform;c.push(d.top,d.right,d.bottom,d.left)}return c.join(":")}
function pE(a,b){var c;b?c=a:c=Ff(a);return c?(c=H(c,"yt-viewport"))?mE(c):null:null}
function qE(a,b){if(a.ob&&!b)return a.ob;var c=rE(a.el),d=pE(a.el);d&&(d=qE(d,b),c=sE(c,d));return a.ob=c}
function rE(a){var b=Ng(a);a=new Ye(a.offsetWidth,a.offsetHeight);return new Ag(b.y,b.x+a.width-1,b.y+a.height-1,b.x)}
function sE(a){var b=[],c=[],d=[],e=[];B(arguments,function(m){b.push(m.top);c.push(m.right);d.push(m.bottom);e.push(m.left)});
var f=Math.max.apply(Math,b),g=Math.min.apply(Math,c),k=Math.min.apply(Math,d),l=Math.max.apply(Math,e);return f>k||l>g?new Ag(0,0,0,0):new Ag(f,g,k,l)}
function tE(a,b){var c=$D,d=rE(a);if(b.transform){var e=b.transform;Ma(e)?(d.top-=e.top,d.right+=e.right,d.bottom+=e.bottom,d.left-=e.left):(d.top-=e,d.right+=Number(void 0),d.bottom+=Number(void 0),d.left-=Number(void 0))}var f;b.complete?f=Bg:f=Cg;if(!f.call(Ag,c,d))return!1;e=pE(a);if(!e)return!0;qE(e);c=sE(c,e.ob);return f.call(Ag,c,d)}
function uE(a,b,c){var d=oE(a,c);b.hasOwnProperty(d)||(b[d]=tE(a,c));return b[d]}
function vE(a,b,c){a=oE(a,c);if(!!ZD[a]!=b)return b?"visible":"hidden"}
function wE(a,b){Ab(XD,function(c){if(c&&(!b||Gf(b,c.el))){var d=uE(c.el,a,c.options);(d=vE(c.el,d,c.options))&&d==c.type&&O(Ua(c.ua,c.el),0)}})}
function xE(a,b){Ab(YD,function(c){if(c&&(!b||Gf(c.el,b)||Gf(b,c.el))){var d=c.filter(c.el);if(d&&d.length){var e=[],f=[],g=[];B(d,function(k){var l=uE(k,a,c.options);l?f.push(k):g.push(k);(l=vE(k,l,c.options))&&l==c.type&&e.push(k)});
e.length&&O(Ua(c.ua,e,f,g),0)}}})}
function lE(a){var b={};wE(b,a);xE(b,a);Qb(ZD,b)}
function yE(a,b,c,d){return Jb(XD,function(e){return e.el==a&&e.type==b&&e.ua==c&&Mb(e.options,d)})}
function zE(a,b,c,d,e){return Jb(YD,function(f){return f.el==a&&f.type==b&&f.ua==c&&f.className==d&&Mb(f.options,e)})}
function AE(a,b){B(ef("yt-viewport",b),a)}
function BE(a){AE(function(b){mE(b)},a);
Ef(a)&&pE(a,!0)}
function CE(a,b){Ab(WD,function(c){b&&!Gf(b,c.el)||b==c.el||a(c)})}
function DE(a){var b=qE(a,!0);a=a.ob;return!(a==b||a&&b&&a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left)}
function hE(a){if(cE){var b;if(a)for(b=pE(a,!0);b&&DE(b);)b=pE(a);CE(function(c){delete c.ob},b?b.el:a);
lE(a)}}
function EE(a,b){if(!cE)throw Error("yt.www.page.visibilitymonitor is not initialized.");return tE(a,b||{})}
function FE(a,b,c,d){if(!cE)return"";d=d||{transform:void 0,complete:void 0};var e=yE(a,b,c,d);if(e)return e;BE(a);e=++bE+"";XD[e]={el:a,type:b,ua:c,options:d};return e}
function GE(a,b,c,d,e){if(!cE)return"";a=a||document;e=e||{transform:void 0,complete:void 0};var f=zE(a,b,c,d,e);if(f)return f;BE(a);f=++bE+"";YD[f]={el:a,type:b,ua:c,filter:function(g){return ef(d,g)},
className:d,options:e};return f}
function HE(a){cE&&(delete XD[a],delete YD[a])}
function iE(a){var b=w("yt.www.page.visibilitymonitor");if(a||!b)t("yt.www.page.visibilitymonitor.States.VISIBLE","visible",void 0),t("yt.www.page.visibilitymonitor.States.HIDDEN","hidden",void 0),t("yt.www.page.visibilitymonitor.init",dE,void 0),t("yt.www.page.visibilitymonitor.dispose",jE,void 0),t("yt.www.page.visibilitymonitor.refresh",hE,void 0),t("yt.www.page.visibilitymonitor.isVisible",EE,void 0),t("yt.www.page.visibilitymonitor.listen",FE,void 0),t("yt.www.page.visibilitymonitor.delegateByClass",
GE,void 0),t("yt.www.page.visibilitymonitor.unlistenByKey",HE,void 0)}
iE(!1);function IE(){(function(){try{for(var a=this;a.parent!=a;){if("$"==a.frameElement.src)throw Error("odd");a=a.parent}if(null!=a.frameElement)throw Error("busted");}catch(b){document.close(),document.open(),window.open("/","_top"),vd(top.location,"/")}})()}
function JE(a){"block"==a.responseText&&IE()}
if(window!=window.top){var Xr=document.referrer;if(window.parent!=window.top)IE();else{var KE=Wr();if(null===KE?0:"com"==KE[0]&&KE[1].match(/^youtube(?:kids|-nocookie)?$/))IE();else{var LE=Wr();if(!(null===LE?0:"google"==LE[1]||"google"==LE[2]&&("au"==LE[0]&&"com"==LE[1]||"uk"==LE[0]&&"co"==LE[1]))){var ME={location:encodeURIComponent(Xr),self:encodeURIComponent(window.location.href),user_agent:encodeURIComponent(navigator.userAgent)};qs("/roger_rabbit",{format:"RAW",method:"POST",ta:ME,onSuccess:JE})}}}};function NE(a){rw.call(this,1,arguments);this.f=a}
A(NE,rw);function OE(a){rw.call(this,1,arguments);this.f=a}
A(OE,rw);function PE(a,b,c){rw.call(this,3,arguments);this.i=a;this.f=b;this.g=null!=c?!!c:null}
A(PE,rw);function QE(a,b){rw.call(this,1,arguments);this.button=a;this.f=b}
A(QE,rw);function RE(a,b,c,d,e){rw.call(this,2,arguments);this.g=a;this.f=b;this.j=c||null;this.i=d||null;this.source=e||null}
A(RE,rw);function SE(a,b,c){rw.call(this,1,arguments);this.f=a;this.g=b}
A(SE,rw);function TE(a,b,c,d,e,f,g){rw.call(this,1,arguments);this.g=a;this.l=b;this.f=c;this.B=d||null;this.j=e||null;this.i=f||null;this.source=g||null}
A(TE,rw);
var UE=new sw("subscription-batch-subscribe",NE),VE=new sw("subscription-batch-unsubscribe",NE),WE=new sw("subscription-show-pref-overlay",QE),XE=new sw("subscription-subscribe",RE),YE=new sw("subscription-subscribe-loading",OE),ZE=new sw("subscription-subscribe-loaded",OE),$E=new sw("subscription-subscribe-success",SE),aF=new sw("subscription-subscribe-external",RE),bF=new sw("subscription-unsubscribe",TE),cF=new sw("subscription-unsubscirbe-loading",OE),dF=new sw("subscription-unsubscribe-loaded",OE),
eF=new sw("subscription-unsubscribe-success",OE),fF=new sw("subscription-external-unsubscribe",TE),gF=new sw("subscription-enable-ypc",OE),hF=new sw("subscription-disable-ypc",OE),iF=new sw("subscription-prefs",PE),jF=new sw("subscription-prefs-success",PE),wF=new sw("subscription-prefs-failure",PE);var rA,BF=[],DF=[],EF=null,FF=null;function GF(a){EF=a.f;FF=a.g}
function HF(){if(EF){var a=gb(ef("overlay-confirmation-preferences-update-frequency",rA),function(b){return b.value==EF});
a&&(a.checked=!0,mA())}(a=G("receive-post-updates-checkbox",rA))&&null!==FF&&pA(a,FF)}
function IF(){return G("receive-post-updates-checkbox",rA)}
function JF(){var a=IF();a&&!a.disabled&&(FF=a.checked)}
function KF(){var a=IF();a&&("receive-no-updates"==qA()?(pA(a,!1),a.disabled=!0):(a.disabled=!1,null===FF||pA(a,FF)))}
function LF(a){a=H(a.currentTarget,"overlay-confirmation-content");var b=G("updates-frequency-menu",a);b&&(b.disabled=!G("receive-all-updates",a).checked)}
function MF(a){var b=a.currentTarget;a=V(b,"frequency");var c=lz.getInstance();b=H(b,X(c,"menu"));c=lz.getInstance();b=pz(c,b);V(b,"frequency")!=a&&ox(b,"frequency",a)}
function NF(a){rA||(rA=G("yt-dialog",G("subscription-preferences-overlay-container",Ff(a.button))));OF(!0);GA.getInstance().show(rA);var b={};b.c=a.f;qs("/subscription_ajax?action_get_subscription_preferences_overlay=1",{method:"POST",O:b,Ga:!0,onSuccess:function(c,d){var e=d.content_html;OF(!1);pd(G("subscription-preferences-overlay-content",rA),e);e=LA();var f=G("overlay-confirmation-save-button",e);R(DF);DF.length=0;DF.push(Q(f,"click",PF),Vs(e,"click",LF,"receive-all-updates"),Vs(e,"keypressed",
LF,"receive-all-updates"),Vs(e,"click",JF,"receive-post-updates"),Vs(e,"keypressed",JF,"receive-post-updates"),Vs(e,"click",KF,"overlay-confirmation-preferences-update-frequency"),Vs(e,"keypressed",KF,"overlay-confirmation-preferences-update-frequency"),Vs(document.body,"click",MF,"updates-frequency-choice"));EF=qA();FF=(e=IF())?e.checked:null},
onError:function(){GA.getInstance().hide()}})}
function OF(a){var b=rA,c=G("subscription-preferences-overlay-content",b);Uy(G("subscription-preferences-overlay-loading",b),a);Uy(c,!a)}
function PF(a){var b=H(a.currentTarget,"yt-dialog-fg");if(b){a=V(a.currentTarget,"channel-external-id");var c=qA(),d=IF();if(c)a=new PE(a,c,d?d.checked:null);else{c=G("receive-all-updates",b);var e=G("updates-frequency-menu",b);b=!1;var f=!e||K(e,"hidden");f||"occasionally"!=V(e,"frequency")||(b=!0);e="receive-highlight-updates";c.checked&&!b?e="receive-all-updates":f||c.checked||(e="receive-no-updates");a=new PE(a,e,d?d.checked:null)}xw(iF,a);GA.getInstance().hide()}}
;function QF(a,b){rw.call(this,1,arguments);this.container=a;this.offerId=b||null}
A(QF,rw);function RF(a){rw.call(this,1,arguments);this.callback=a}
A(RF,rw);function SF(a,b){rw.call(this,2,arguments);this.g=a;this.f=b}
A(SF,rw);function TF(a,b,c,d){rw.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
A(TF,rw);function UF(a,b){rw.call(this,1,arguments);this.g=a;this.f=b||null}
A(UF,rw);function VF(a){rw.call(this,1,arguments);this.f=a}
A(VF,rw);var WF=new sw("ypc-init-purchase-for-container",QF),XF=new sw("ypc-core-load",RF),YF=new sw("ypc-guide-sync-success",SF),ZF=new sw("ypc-purchase-success",TF),$F=new sw("ypc-subscription-cancel",VF),aG=new sw("ypc-subscription-cancel-success",UF),bG=new sw("ypc-init-subscription",VF);var cG=!1,dG=[];function eG(a){a.f?cG?xw(aF,a):xw(XF,new RF(function(){xw(bG,new VF(a.f))})):fG(a.g,a.j,a.i,a.source)}
function gG(a){a.f?cG?xw(fF,a):xw(XF,new RF(function(){xw($F,new VF(a.f))})):hG(a.g,a.l,a.j,a.i,a.source)}
function iG(a){jG(pb(a.f))}
function kG(a){lG(pb(a.f))}
function mG(a){nG(a.i,a.f,a.g)}
function oG(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&xw($E,new SE(b,c,a.f.channelInfo))}
function pG(a){var b=a.f;Ab(a.g,function(c,d){xw($E,new SE(d,c,b[d]))})}
function qG(a){xw(eF,new OE(a.g.itemId));a.f&&a.f.length&&(rG(a.f,eF),rG(a.f,gF))}
function fG(a,b,c,d){var e=new OE(a);xw(YE,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=M("PLAYBACK_ID"))&&(c.plid=d);(d=M("EVENT_ID"))&&(c.ei=d);b&&sG(b,c);qs("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ta:f,O:c,onSuccess:function(g,k){var l=k.response;xw($E,new SE(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&T("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
la:function(){xw(ZE,e)}})}
function hG(a,b,c,d,e){var f=new OE(a);xw(cF,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=M("PLAYBACK_ID"))&&(d.plid=a);(a=M("EVENT_ID"))&&(d.ei=a);c&&sG(c,d);qs("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ta:g,O:d,onSuccess:function(){xw(eF,f)},
la:function(){xw(dF,f)}})}
function nG(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new PE(a,b,c);qs("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",O:d,onError:function(){xw(wF,e)},
onSuccess:function(){xw(jF,e)}})}}
function jG(a){if(a.length){var b=rb(a,0,40);xw("subscription-batch-subscribe-loading");rG(b,YE);var c={};c.a=b.join(",");var d=function(){xw("subscription-batch-subscribe-loaded");rG(b,ZE)};
qs("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",O:c,onSuccess:function(e,f){d();var g=f.response,k=g.id;if(Ja(k)&&k.length==b.length){var l=g.channel_info_map;B(k,function(m,q){var u=b[q];xw($E,new SE(u,m,l[u]))});
a.length?jG(a):xw("subscription-batch-subscribe-finished")}},
onError:function(){d();xw("subscription-batch-subscribe-failure")}})}}
function lG(a){if(a.length){var b=rb(a,0,40);xw("subscription-batch-unsubscribe-loading");rG(b,cF);var c={};c.c=b.join(",");var d=function(){xw("subscription-batch-unsubscribe-loaded");rG(b,dF)};
qs("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",O:c,onSuccess:function(){d();rG(b,eF);a.length&&lG(a)},
onError:function(){d()}})}}
function rG(a,b){B(a,function(c){xw(b,new OE(c))})}
function sG(a,b){var c=Sr(a);Va(b,c)}
;var tG={},uG=[];function vG(a){a=H(a,"yt-uix-button-subscription-container");return G("yt-dialog",G("unsubscribe-confirmation-overlay-container",a))}
function wG(a,b){R(uG);uG.length=0;tG[b]||(tG[b]=vG(a));GA.getInstance().show(tG[b]);var c=LA();return new Ck(function(d){uG.push(Vs(c,"click",function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function xG(a){for(var b=0,c=a.length;b<c;b++){var d=ff("IMG",null,a[b]);if(d){var e=V(d,"thumb");e&&(d.src=e,qx(d,"thumb"))}}}
;function yG(){var a=M("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!M("SESSION_INDEX")&&!M("LOGGED_IN"))}
;function zG(){W.call(this,"simple-thumb-wrap")}
var AG,BG;A(zG,W);Ha(zG);var CG="",DG=/__VIDEO_ID__/g;
zG.prototype.register=function(){if(CG=M("WATCH_LATER_BUTTON",void 0))AG=M("WATCH_QUEUE_BUTTON",void 0),BG=M("WATCH_QUEUE_MENU",void 0),B(ef(X(this)),function(a){var b=yG(),c=H(a,"thumb-wrapper");if(!(c&&(b?G("addto-watch-later-button",c):G("addto-watch-later-button-sign-in",c)))){var d=this.C(a,"vid");b=CG.replace(DG,d);c=AG.replace(DG,d);d=BG.replace(DG,d);var e=H(a,"thumb-wrapper");e.appendChild(sf(Tf(b)));e.appendChild(sf(Tf(d)));e.appendChild(sf(Tf(c)));(a=H(a,"video-list-item"))&&Ho(a,"show-video-time")}},
this)};
zG.prototype.unregister=function(){zG.J.unregister.call(this);BG=AG=CG=""};function EG(a){var b=FG();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=S("LOGGED_IN",function(d){nt(M("LOGGED_IN_PUBSUB_KEY",void 0));Mr("LOGGED_IN",!0);a(d)});
Mr("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function FG(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=eg(a,"mode","subscribe");a=eg("/signin?context=popup","next",a);return a=eg(a,"feature","sub_button")}
t("yt.pubsub.publish",T,void 0);function GG(){W.call(this,"subscription-button")}
A(GG,W);Ha(GG);h=GG.prototype;h.register=function(){Y(this,"click",this.Nc);iz(this,YE,this.Od);iz(this,ZE,this.Nd);iz(this,$E,this.Ah);iz(this,cF,this.Od);iz(this,dF,this.Nd);iz(this,eF,this.Jg);iz(this,gF,this.qg);iz(this,hF,this.pg)};
h.unregister=function(){Z(this,"click",this.Nc);GG.J.unregister.call(this)};
h.isSubscribed=function(a){return!!this.C(a,"is-subscribed")};
h.Nc=function(a){var b=this.C(a,"href"),c=this.C(a,"insecure");if(b)a=this.C(a,"target")||"_self",window.open(b,a);else if(!c)if(yG()){b=this.xb(a);c=this.C(a,"clicktracking");var d=HG(this,a),e=this.C(a,"parent-url");if(this.C(a,"is-subscribed")){var f=this.C(a,"subscription-id"),g=new TE(b,f,d,a,c,e);this.C(a,"show-unsub-confirm-dialog")?wG(a,b).then(function(){xw(bF,g)}):xw(bF,g)}else xw(XE,new RE(b,d,c,e))}else IG(this,a)};
h.Od=function(a){this.tb(a.f,this.he,!0)};
h.Nd=function(a){this.tb(a.f,this.he,!1)};
h.Ah=function(a){this.tb(a.f,this.ie,!0,a.g)};
h.Jg=function(a){this.tb(a.f,this.ie,!1)};
h.qg=function(a){this.tb(a.f,this.Oe)};
h.pg=function(a){this.tb(a.f,this.Ne)};
h.ie=function(a,b,c){b?(ox(a,"is-subscribed","true"),c&&ox(a,"subscription-id",c)):(qx(a,"is-subscribed"),qx(a,"subscription-id"));JG(this,a)};
h.xb=function(a){return this.C(a,"channel-external-id")};
function HG(a,b){if(!a.C(b,"ypc-enabled"))return null;var c=a.C(b,"ypc-item-type"),d=a.C(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
h.he=function(a,b){var c=H(a,"yt-uix-button-subscription-container");Jo(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function JG(a,b){var c=a.C(b,"style-type"),d=!!a.C(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;Jo(b,"yt-uix-button-subscribe"+c,!d);Jo(b,e,d);a.C(b,"subscriber-count-tooltip")&&!a.C(b,"subscriber-count-show-when-subscribed")&&(c=X(IB.getInstance()),Jo(b,c,!d),b.title=d?"":a.C(b,"subscriber-count-title"));d?O(function(){L(b,"hover-enabled")},1E3):Ho(b,"hover-enabled")}
h.Oe=function(a){var b=!!this.C(a,"ypc-item-type"),c=!!this.C(a,"ypc-item-id");!this.C(a,"ypc-enabled")&&b&&c&&(L(a,"ypc-enabled"),ox(a,"ypc-enabled","true"))};
h.Ne=function(a){this.C(a,"ypc-enabled")&&(Ho(a,"ypc-enabled"),qx(a,"ypc-enabled"))};
function KG(a,b){return bb(ef(X(a)),function(c){return b==this.xb(c)},a)}
h.zh=function(a,b,c){var d=sb(arguments,2);B(a,function(e){b.apply(this,ob(e,d))},this)};
h.tb=function(a,b,c){var d=KG(this,a);this.zh.apply(this,ob([d],sb(arguments,1)))};
function IG(a,b){var c=y(function(d){d.discoverable_subscriptions&&Mr("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.Nc(b)},a);
EG(c)}
;function LG(){W.call(this,"subscription-preferences-button")}
A(LG,W);Ha(LG);LG.prototype.register=function(){Y(this,"click",this.Fe);iz(this,$E,this.Ch);iz(this,jF,this.Kg)};
LG.prototype.unregister=function(){Z(this,"click",this.Fe);LG.J.unregister.call(this)};
var MG={"receive-all-updates":"yt-uix-subscription-notifications-all","receive-highlight-updates":"yt-uix-subscription-notifications-highlights","receive-no-updates":"yt-uix-subscription-notifications-none"};h=LG.prototype;h.Fe=function(a){var b=this.xb(a);xw(WE,new QE(a,b))};
h.me=function(a,b){Io(a,["yt-uix-subscription-notifications-all","yt-uix-subscription-notifications-highlights","yt-uix-subscription-notifications-none"]);L(a,b)};
h.Kg=function(a){this.Ee(a.i,this.me,MG[a.f])};
h.Ch=function(a){this.Ee(a.f,this.me,"yt-uix-subscription-notifications-highlights")};
h.xb=function(a){return this.C(a,"channel-external-id")};
h.Ee=function(a,b,c){var d=NG(this,a);this.Bh.apply(this,ob([d],sb(arguments,1)))};
function NG(a,b){return bb(ef(X(a)),function(c){return b==this.xb(c)},a)}
h.Bh=function(a,b,c){var d=sb(arguments,2);B(a,function(e){b.apply(this,ob(e,d))},this)};var OG=0,PG=[],QG=[],RG=0,SG={},TG={},VG=new zo(UG,1E3);function WG(){RG++;var a=jf(window),b=new Dg(0,0,a.width,a.height);Vw("vph",a.height);Vw("vpw",a.width);Pw("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;VG.start();for(var f=0;f<c;f++){var g=a[f];if(XG(g,b)){var k=YG(g);k.then(ZG);d.push(k);PG.push(k);g.loadTime||(e=!1)}}e&&Vw("yt_eil",1);Pw("vpcc");b=Kk(d).then($G);Lk(b,null,aH,void 0);b.then(bH);PG.push(b);return b}
function bH(){VG.stop()}
function aH(){Pw("vpr")}
function XG(a,b){for(var c=a,d=[];c!=document.body;){var e=Es(c);if(e in SG)return!0;if(e in TG)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return TG[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return TG[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)SG[d[c]]=!0;return!0}
function $G(a){var b=jf(window);b=new Dg(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;XG(a[d].zf,b)&&c<f&&(c=f)}return c}
function YG(a){var b=RG;return new Ck(function(c,d){var e={zf:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){RG!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},QG.push(a))})}
function ZG(a){VG.start();a=a.time;OG<a&&(OG=a,Pw("lim",a))}
function UG(){Pw("vptl",OG);Pw("vpl",OG)}
function cH(){PG.forEach(function(a){a.cancel()});
OG=PG.length=0;SG={};TG={};QG.forEach(function(a){a.slt=void 0});
QG.length=0}
;function dH(){Pw("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){Pw("cpt");T("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(Pw("cpt"),T("on_cpt_tick",(new Date).getTime())):setTimeout(function(){Pw("cpt");
T("on_cpt_tick",(new Date).getTime())},0);
eH();M("CSI_VIEWPORT")&&(fH=WG(),fH.then(function(a){Pw("vpl",a);fH=null},function(){}))}
function eH(){gH("init");var a=M("PAGE_NAME",void 0);a&&gH("init-"+a)}
var fH=null;function gH(a){w("yt.scheduler.instance")?hH.push(Ot(Ua(ot,a),0)):T(a)}
var hH=[];var iH;function jH(){if(!iH){var a=F("watch-queue");if(!a)return[];iH=G("watch-queue-items-list",a)}if(!iH)return[];var b=[];a=Bf(iH);B(a,function(c){(c=V(c,"video-id"))&&b.push(c)});
return b}
;function kH(a){this.port=this.domain="";this.f="/api/lounge";this.g=!0;a=a||document.location.href;var b=Number(Xf(a)[4]||null)||"";b&&(this.port=":"+b);this.domain=Zf(a)||"";a=Mc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>oc(a,"10.0")&&(this.g=!1))}
function lH(a,b){var c=a.f;if(p(void 0)?0:a.g)c="https://"+a.domain+a.port+a.f;return fg(c+b,{})}
function mH(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:Ua(a.j,d,!0),onError:Ua(a.i,e),Xa:Ua(a.l,e)};c&&(a.O=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return qs(b,a)}
kH.prototype.j=function(a,b,c,d){b?a(d):a({text:c.responseText})};
kH.prototype.i=function(a,b){a(Error("Request error: "+b.status))};
kH.prototype.l=function(a){a(Error("request timed out"))};var nH=z(),oH=null,pH=Array(50),qH=-1,rH=!1;function sH(){var a=tH;uH();oH.push(a);vH(oH)}
function wH(a,b){uH();var c=oH,d=xH(a,String(b));0==c.length?yH(d):(vH(c),B(c,function(e){e(d)}))}
function zH(a){wH("CP",a)}
function uH(){oH||(oH=w("yt.mdx.remote.debug.handlers_")||[],t("yt.mdx.remote.debug.handlers_",oH,void 0))}
function yH(a){var b=(qH+1)%50;qH=b;pH[b]=a;rH||(rH=49==b)}
function vH(a){var b=pH;if(b[0]){var c=qH,d=rH?c:-1;do{d=(d+1)%50;var e=b[d];B(a,function(f){f(e)})}while(d!=c);
pH=Array(50);qH=-1;rH=!1}}
function xH(a,b){var c=(z()-nH)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function AH(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function BH(a,b){return!!b&&(a.id==b||a.uuid==b)}
function CH(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function DH(a){return new AH(a)}
function EH(a){return Ja(a)?cb(a,DH):[]}
function FH(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function GH(a){return Ja(a)?"["+cb(a,FH).join(",")+"]":"null"}
;function HH(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function IH(a,b){return gb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})}
function JH(a,b){return gb(a,function(c){return BH(c,b)})}
;function KH(a){a=void 0===a?!1:a;Ai.call(this);this.w=new br(a);Bi(this,Ua(Ci,this.w))}
A(KH,Ai);KH.prototype.subscribe=function(a,b,c){return this.P()?0:this.w.subscribe(a,b,c)};
KH.prototype.zd=function(a,b){this.P()||dr(this.w,a,b,void 0)};
KH.prototype.sa=function(a){return this.P()?!1:this.w.sa(a)};
KH.prototype.G=function(a,b){this.P()||this.w.ka.apply(this.w,arguments)};function LH(a){KH.call(this);this.D=a;this.f=[]}
A(LH,KH);LH.prototype.na=function(){return this.f};
LH.prototype.contains=function(a){return!!IH(this.f,a)};
LH.prototype.get=function(a){return a?JH(this.f,a):null};
function MH(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.f.push(b);return!0}
function NH(a,b){var c=a.f.length!=b.length;a.f=bb(a.f,function(f){return!!IH(b,f)});
for(var d=0,e=b.length;d<e;d++)c=MH(a,b[d])||c;return c}
function OH(a,b){var c=a.f.length;a.f=bb(a.f,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.f.length<c}
LH.prototype.info=function(a){wH(this.D,a)};function PH(a,b,c,d){KH.call(this);this.D=a;this.A=b;this.j=c;this.l=d;this.i=0;this.f=null;this.g=NaN}
la(PH,KH);h=PH.prototype;h.start=function(){!this.f&&isNaN(this.g)&&this.Wd()};
h.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.g)||(P(this.g),this.g=NaN)};
h.K=function(){this.stop();KH.prototype.K.call(this)};
h.Wd=function(){this.g=NaN;this.f=qs(lH(this.D,"/pairing/get_screen"),{method:"POST",O:{pairing_code:this.A},timeout:5E3,onSuccess:y(this.lh,this),onError:y(this.kh,this),Xa:y(this.mh,this)})};
h.lh=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.j;c.name=this.l;this.G("pairingComplete",new AH(c))};
h.kh=function(a){this.f=null;a.status&&404==a.status?this.i>=QH.length?this.G("pairingFailed",Error("DIAL polling timed out")):(a=QH[this.i],this.g=O(y(this.Wd,this),a),this.i++):this.G("pairingFailed",Error("Server error "+a.status))};
h.mh=function(){this.f=null;this.G("pairingFailed",Error("Server not responding"))};
var QH=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];function RH(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.i=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new Ro;this.f=this.g="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",SH(this,a.capabilities||""),TH(this,a.experiments||""),this.g=
a.remoteControllerUrl||"",this.f=a.localChannelEncryptionKey||"")}
RH.prototype.copy=function(){var a=new RH({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.i=this.i;a.g=this.g;a.f=this.f;return a};
RH.prototype.equals=function(a){return a?this.id==a.id:!1};
function SH(a,b){a.capabilities.clear();bb(b.split(","),Ua(Eb,gt)).forEach(function(c){a.capabilities.add(c)})}
function TH(a,b){a.experiments.clear();b.split(",").forEach(function(c){a.experiments.add(c)})}
;var UH;function VH(){var a=WH(),b=XH();if(YH()){var c=a;var d=0;for(var e=c.length,f;d<e;){var g=d+e>>1;var k=vb(b,c[g]);0<k?d=g+1:(e=g,f=!k)}d=f?d:~d;0>d&&rb(c,-(d+1),0,b)}a=ZH(a);if(0==a.length)try{eu("remote_sid")}catch(l){}else try{cu("remote_sid",a.join(","),-1,"/")}catch(l){}}
function WH(){var a=Ry("yt-remote-connected-devices")||[];a.sort(vb);return a}
function ZH(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return cb(a,function(d,e){return 0==e?d:d.substring(c.length)})}
function $H(a){Oy("yt-remote-connected-devices",a,86400)}
function XH(){if(aI)return aI;var a=Ry("yt-remote-device-id");a||(a=HH(),Oy("yt-remote-device-id",a,31536E3));for(var b=WH(),c=1,d=a;jb(b,d);)c++,d=a+"#"+c;return aI=d}
function bI(){return Ry("yt-remote-session-browser-channel")}
function YH(){return Ry("yt-remote-session-screen-id")}
function cI(a){5<a.length&&(a=a.slice(a.length-5));var b=cb(dI(),function(d){return d.loungeToken}),c=cb(a,function(d){return d.loungeToken});
fb(c,function(d){return!jb(b,d)})&&eI();
Oy("yt-remote-local-screens",a,31536E3)}
function dI(){return Ry("yt-remote-local-screens")||[]}
function eI(){Oy("yt-remote-lounge-token-expiration",!0,86400)}
function fI(a,b){Oy("yt-remote-session-browser-channel",a);Oy("yt-remote-session-screen-id",b);var c=WH(),d=XH();jb(c,d)||c.push(d);$H(c);VH()}
function gI(a){a||(Sy("yt-remote-session-screen-id"),Sy("yt-remote-session-video-id"));VH();a=WH();lb(a,XH());$H(a)}
function hI(){if(!UH){var a=Ar();a&&(UH=new gr(a))}return UH?!!UH.get("yt-remote-use-staging-server"):!1}
var aI="";function iI(a){LH.call(this,"LocalScreenService");this.i=a;this.g=NaN;jI(this);this.info("Initializing with "+GH(this.f))}
A(iI,LH);h=iI.prototype;h.start=function(){jI(this)&&this.G("screenChange");!Ry("yt-remote-lounge-token-expiration")&&kI(this);P(this.g);this.g=O(y(this.start,this),1E4)};
h.add=function(a,b){jI(this);MH(this,a);lI(this,!1);this.G("screenChange");b(a);a.token||kI(this)};
h.remove=function(a,b){var c=jI(this);OH(this,a)&&(lI(this,!1),c=!0);b(a);c&&this.G("screenChange")};
h.ic=function(a,b,c,d){var e=jI(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,lI(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.G("screenChange")};
h.K=function(){P(this.g);iI.J.K.call(this)};
function kI(a){if(a.f.length){var b=cb(a.f,function(d){return d.id}),c=lH(a.i,"/pairing/get_lounge_token_batch");
mH(a.i,c,{screen_ids:b.join(",")},y(a.kf,a),y(a.jf,a))}}
h.kf=function(a){jI(this);var b=this.f.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}lI(this,!b);b&&wH(this.D,"Missed "+b+" lounge tokens.")};
h.jf=function(a){wH(this.D,"Requesting lounge tokens failed: "+a)};
function jI(a){var b=EH(dI());b=bb(b,function(c){return!c.uuid});
return NH(a,b)}
function lI(a,b){cI(cb(a.f,CH));b&&eI()}
;function mI(a,b){KH.call(this);this.A=b;var c=Ry("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.A(),f=0,g=e.length;f<g;++f){var k=e[f].id;d[k]=jb(c,k)}this.f=d;this.l=a;this.i=this.j=NaN;this.g=null;nI("Initialized with "+Ei(this.f))}
la(mI,KH);h=mI.prototype;h.start=function(){var a=parseInt(Ry("yt-remote-fast-check-period")||"0",10);(this.j=z()-144E5<a?0:a)?oI(this):(this.j=z()+3E5,Oy("yt-remote-fast-check-period",this.j),this.Fc())};
h.isEmpty=function(){return Kb(this.f)};
h.update=function(){nI("Updating availability on schedule.");var a=this.A(),b=Bb(this.f,function(c,d){return c&&!!JH(a,d)},this);
pI(this,b)};
function qI(a,b,c){var d=lH(a.l,"/pairing/get_screen_availability");mH(a.l,d,{lounge_token:b.token},y(function(e){e=e.screens||[];for(var f=0,g=e.length;f<g;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),y(function(){c(!1)},a))}
h.K=function(){P(this.i);this.i=NaN;this.g&&(this.g.abort(),this.g=null);KH.prototype.K.call(this)};
function pI(a,b){a:if(Db(b)!=Db(a.f))var c=!1;else{c=Hb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(nI("Updated online screens: "+Ei(a.f)),a.f=b,a.G("screenChange"));rI(a)}
function oI(a){isNaN(a.i)||P(a.i);a.i=O(y(a.Fc,a),0<a.j&&a.j<z()?2E4:1E4)}
h.Fc=function(){P(this.i);this.i=NaN;this.g&&this.g.abort();var a=sI(this);if(Db(a)){var b=lH(this.l,"/pairing/get_screen_availability");this.g=mH(this.l,b,{lounge_token:Hb(a).join(",")},y(this.Ag,this,a),y(this.zg,this))}else pI(this,{}),oI(this)};
h.Ag=function(a,b){this.g=null;var c=Hb(sI(this));if(tb(c,Hb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;pI(this,d);oI(this)}else this.T("Changing Screen set during request."),this.Fc()};
h.zg=function(a){this.T("Screen availability failed: "+a);this.g=null;oI(this)};
function nI(a){wH("OnlineScreenService",a)}
h.T=function(a){wH("OnlineScreenService",a)};
function sI(a){var b={};B(a.A(),function(c){c.token?b[c.token]=c.id:this.T("Requesting availability of screen w/o lounge token.")});
return b}
function rI(a){a=Hb(Bb(a.f,function(b){return b}));
a.sort(vb);a.length?Oy("yt-remote-online-screen-ids",a.join(","),60):Sy("yt-remote-online-screen-ids")}
;function tI(a){LH.call(this,"ScreenService");this.A=a;this.g=this.i=null;this.j=[];this.l={};uI(this)}
A(tI,LH);h=tI.prototype;h.start=function(){this.i.start();this.g.start();this.f.length&&(this.G("screenChange"),this.g.isEmpty()||this.G("onlineScreenChange"))};
h.add=function(a,b,c){this.i.add(a,b,c)};
h.remove=function(a,b,c){this.i.remove(a,b,c);this.g.update()};
h.ic=function(a,b,c,d){this.i.contains(a)?this.i.ic(a,b,c,d):(a="Updating name of unknown screen: "+a.name,wH(this.D,a),d(Error(a)))};
h.na=function(a){return a?this.f:ob(this.f,bb(this.j,function(b){return!this.contains(b)},this))};
h.pe=function(){return bb(this.na(!0),function(a){return!!this.g.f[a.id]},this)};
function vI(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.l[b]);var g=a.na();if(g=(c?JH(g,c):null)||JH(g,b)){g.uuid=b;var k=wI(a,g);qI(a.g,k,function(l){e(l?k:null)})}else c?xI(a,c,y(function(l){var m=wI(this,new AH({name:d,
screenId:c,loungeToken:l,dialId:b||""}));qI(this.g,m,function(q){e(q?m:null)})},a),f):e(null)}
h.qe=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new PH(this.A,a,b,c);f.subscribe("pairingComplete",y(function(g){Ci(f);d(wI(this,g))},this));
f.subscribe("pairingFailed",function(g){Ci(f);e(g)});
f.start();return y(f.stop,f)};
function yI(a,b){for(var c=0,d=a.f.length;c<d;++c)if(a.f[c].name==b)return a.f[c];return null}
h.oh=function(a,b,c,d){qs(lH(this.A,"/pairing/get_screen"),{method:"POST",O:{pairing_code:a},timeout:5E3,onSuccess:y(function(e,f){var g=new AH(f.screen||{});if(!g.name||yI(this,g.name)){a:{var k=g.name;for(var l=2,m=b(k,l);yI(this,m);){l++;if(20<l)break a;m=b(k,l)}k=m}g.name=k}c(wI(this,g))},this),
onError:y(function(e){d(Error("pairing request failed: "+e.status))},this),
Xa:y(function(){d(Error("pairing request timed out."))},this)})};
h.K=function(){Ci(this.i);Ci(this.g);tI.J.K.call(this)};
function xI(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={O:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,g){var k=g&&g.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
qs(lH(a.A,"/pairing/get_lounge_token_batch"),e)}
function zI(a){a.f=a.i.na();var b=a.l,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.f.length;b<d;++b){var e=a.f[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+GH(a.f))}
h.uf=function(){zI(this);this.G("screenChange");this.g.update()};
function uI(a){AI(a);a.i=new iI(a.A);a.i.subscribe("screenChange",y(a.uf,a));zI(a);a.j=EH(Ry("yt-remote-automatic-screen-cache")||[]);AI(a);a.info("Initializing automatic screens: "+GH(a.j));a.g=new mI(a.A,y(a.na,a,!0));a.g.subscribe("screenChange",y(function(){this.G("onlineScreenChange")},a))}
function wI(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=JH(a.j,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.j.push(b),Oy("yt-remote-automatic-screen-cache",cb(a.j,CH)));AI(a);a.l[b.uuid]=b.id;Oy("yt-remote-device-id-map",a.l,31536E3);return b}
function AI(a){a.l=Ry("yt-remote-device-id-map")||{}}
tI.prototype.dispose=tI.prototype.dispose;function BI(a,b,c){KH.call(this);this.U=c;this.L=a;this.f=b;this.i=null}
A(BI,KH);h=BI.prototype;h.Xb=function(a){this.i=a;this.G("sessionScreen",this.i)};
h.ma=function(a){this.P()||(a&&CI(this,""+a),this.i=null,this.G("sessionScreen",null))};
h.info=function(a){wH(this.U,a)};
function CI(a,b){wH(a.U,b)}
h.se=function(){return null};
h.Hc=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,y(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),y(function(){CI(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
h.K=function(){this.Hc("");BI.J.K.call(this)};function DI(a,b){BI.call(this,a,b,"CastSession");this.g=null;this.j=0;this.A=y(this.ph,this);this.l=y(this.Mg,this);this.j=O(y(function(){EI(this,null)},this),12E4)}
A(DI,BI);h=DI.prototype;h.Gc=function(a){if(this.g){if(this.g==a)return;CI(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.A);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.l)}this.g=a;this.g.addUpdateListener(this.A);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.l);FI(this)};
h.ib=function(a){this.info("launchWithParams no-op for Cast: "+Ei(a))};
h.stop=function(){this.g?this.g.stop(y(function(){this.ma()},this),y(function(){this.ma(Error("Failed to stop receiver app."))},this)):this.ma(Error("Stopping cast device witout session."))};
h.Hc=Ga;h.K=function(){this.info("disposeInternal");P(this.j);this.j=0;this.g&&(this.g.removeUpdateListener(this.A),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.l));this.g=null;DI.J.K.call(this)};
function FI(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+Ei(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,Ga,y(function(){CI(this,"Failed to send message: getMdxSessionStatus.")},a)):CI(a,"Sending yt message without session: "+Ei(b))}
h.Mg=function(a,b){if(!this.P())if(b){var c=dp(b);if(Ma(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+Ei(c));switch(d){case "mdxSessionStatus":EI(this,c.screenId);break;default:CI(this,"Unknown youtube message: "+d)}}else CI(this,"Unable to parse message.")}else CI(this,"No data in message.")};
function EI(a,b){P(a.j);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.i||a.i.id!=b){var c=y(a.Xb,a),d=y(a.ma,a);a.md(b,c,d,5)}}else a.ma(Error("Waiting for session status timed out."))}
h.md=function(a,b,c,d){vI(this.L,this.f.label,a,this.f.friendlyName,y(function(e){e?b(e):0<=d?(CI(this,"Screen "+a+" appears to be offline. "+d+" retries left."),O(y(this.md,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
h.se=function(){return this.g};
h.ph=function(a){this.P()||a||(CI(this,"Cast session died."),this.ma())};function GI(a,b,c){BI.call(this,a,b,"DialSession");this.j=this.H=null;this.N="";this.W=c;this.l=null;this.D=Ga;this.A=NaN;this.R=y(this.sh,this);this.g=Ga}
A(GI,BI);h=GI.prototype;h.Gc=function(a){this.j=a;this.j.addUpdateListener(this.R)};
h.ib=function(a){this.l=a;this.D()};
h.stop=function(){this.g();this.g=Ga;P(this.A);this.j?this.j.stop(y(this.ma,this,null),y(this.ma,this,"Failed to stop DIAL device.")):this.ma()};
h.K=function(){this.g();this.g=Ga;P(this.A);this.j&&this.j.removeUpdateListener(this.R);this.j=null;GI.J.K.call(this)};
function HI(a){a.g=a.L.qe(a.N,a.f.label,a.f.friendlyName,y(function(b){this.g=Ga;this.Xb(b)},a),y(function(b){this.g=Ga;
this.ma(b)},a))}
h.sh=function(a){this.P()||a||(CI(this,"DIAL session died."),this.g(),this.g=Ga,this.ma())};
function II(a){var b={};b.pairingCode=a.N;b.theme=a.W;if(a.l){var c=a.l.currentTime||0;b.v=a.l.videoId;b.t=c}hI()&&(b.env_useStageMdx=1);return dg(b)}
h.Bc=function(a){this.N=HH();if(this.l){var b=new chrome.cast.DialLaunchResponse(!0,II(this));a(b);HI(this)}else this.D=y(function(){P(this.A);this.D=Ga;this.A=NaN;var c=new chrome.cast.DialLaunchResponse(!0,II(this));a(c);HI(this)},this),this.A=O(y(function(){this.D()},this),100)};
h.Bf=function(a,b,c){vI(this.L,this.H.receiver.label,a,this.f.friendlyName,y(function(d){d&&d.token?(this.Xb(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Bc(b,c)},this),y(function(d){CI(this,"Failed to get DIAL screen: "+d);
this.Bc(b,c)},this))};function JI(a,b){BI.call(this,a,b,"ManualSession");this.g=O(y(this.ib,this,null),150)}
A(JI,BI);JI.prototype.stop=function(){this.ma()};
JI.prototype.Gc=Ga;JI.prototype.ib=function(){P(this.g);this.g=NaN;var a=JH(this.L.na(),this.f.label);a?this.Xb(a):this.ma(Error("No such screen"))};
JI.prototype.K=function(){P(this.g);this.g=NaN;JI.J.K.call(this)};function KI(a,b,c,d){KH.call(this);this.g=a;this.D=b||"233637DE";this.A=c||"cl";this.H=d||!1;this.f=null;this.l=!1;this.i=[];this.j=y(this.xg,this)}
A(KI,KH);h=KI.prototype;
h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.D);this.H||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=y(this.yg,this);c=new chrome.cast.ApiConfig(c,y(this.Rd,this),f,d,e);c.customDialLaunchCallback=y(this.og,this);chrome.cast.initialize(c,y(function(){this.P()||(chrome.cast.addReceiverActionListener(this.j),
sH(),this.g.subscribe("onlineScreenChange",y(this.re,this)),this.i=LI(this),chrome.cast.setCustomReceivers(this.i,Ga,y(function(g){this.T("Failed to set initial custom receivers: "+Ei(g))},this)),this.G("yt-remote-cast2-availability-change",MI(this)),b(!0))},this),y(function(g){this.T("Failed to initialize API: "+Ei(g));
b(!1)},this))};
h.Zg=function(a,b){NI("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.i;if(!a||c&&c.id!=a)NI("Unsetting old screen status: "+this.f.f.friendlyName),OI(this,null)}if(a&&b){if(!this.f){c=JH(this.g.na(),a);if(!c){NI("setConnectedScreenStatus: Unknown screen.");return}var d=PI(this,c);d||(NI("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.i.push(d),chrome.cast.setCustomReceivers(this.i,
Ga,y(function(e){this.T("Failed to set initial custom receivers: "+Ei(e))},this)));
NI("setConnectedScreenStatus: new active receiver: "+d.friendlyName);OI(this,new JI(this.g,d),!0)}this.f.Hc(b)}else NI("setConnectedScreenStatus: no screen.")};
function PI(a,b){return b?gb(a.i,function(c){return BH(b,c.label)},a):null}
h.ah=function(a){this.P()?this.T("Setting connection data on disposed cast v2"):this.f?this.f.ib(a):this.T("Setting connection data without a session")};
h.rh=function(){this.P()?this.T("Stopping session on disposed cast v2"):this.f?(this.f.stop(),OI(this,null)):NI("Stopping non-existing session")};
h.requestSession=function(){chrome.cast.requestSession(y(this.Rd,this),y(this.Bg,this))};
h.K=function(){this.g.zd("onlineScreenChange",y(this.re,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.j);lb(w("yt.mdx.remote.debug.handlers_")||[],tH);Ci(this.f);KI.J.K.call(this)};
function NI(a){wH("Controller",a)}
h.T=function(a){wH("Controller",a)};
function tH(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function MI(a){return a.l||!!a.i.length||!!a.f}
function OI(a,b,c){b!=a.f&&(Ci(a.f),(a.f=b)?(c?a.G("yt-remote-cast2-receiver-resumed",b.f):a.G("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",y(a.Sd,a,b)),b.i?a.G("yt-remote-cast2-session-change",b.i):c&&a.f.ib(null)):a.G("yt-remote-cast2-session-change",null))}
h.Sd=function(a,b){this.f==a&&(b||OI(this,null),this.G("yt-remote-cast2-session-change",b))};
h.xg=function(a,b){if(!this.P())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),NI("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.f.label!=a.label)NI("onReceiverAction_: Stopping active receiver: "+this.f.f.friendlyName),this.f.stop();else{NI("onReceiverAction_: Casting to active receiver.");this.f.i&&this.G("yt-remote-cast2-session-change",this.f.i);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:OI(this,
new JI(this.g,a));break;case chrome.cast.ReceiverType.DIAL:OI(this,new GI(this.g,a,this.A));break;case chrome.cast.ReceiverType.CAST:OI(this,new DI(this.g,a));break;default:this.T("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.f.label==a.label?this.f.stop():this.T("Stopping receiver w/o session: "+a.friendlyName)}else this.T("onReceiverAction_ called without receiver.")};
h.og=function(a){if(this.P())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.T("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.f:null;if(!c||c.label!=b.label)return this.T("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.i)return NI("Reselecting dial screen."),
this.G("yt-remote-cast2-session-change",this.f.i),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.T('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);OI(this,new GI(this.g,b,this.A))}b=this.f;b.H=a;return b.H.appState==chrome.cast.DialAppState.RUNNING?new Promise(y(b.Bf,b,(b.H.extraData||{}).screenId||null)):new Promise(y(b.Bc,b))};
h.Rd=function(a){if(!this.P()){NI("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)NI("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),OI(this,new DI(this.g,b),!0);else{this.T("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.f,d=JH(this.g.na(),c.label);d&&BH(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(NI("onSessionEstablished_: manual to cast session change "+b.friendlyName),Ci(this.f),this.f=new DI(this.g,b),this.f.subscribe("sessionScreen",y(this.Sd,this,this.f)),this.f.ib(null));this.f.Gc(a)}}};
h.qh=function(){return this.f?this.f.se():null};
h.Bg=function(a){this.P()||(this.T("Failed to estabilish a session: "+Ei(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&OI(this,null))};
h.yg=function(a){NI("Receiver availability updated: "+a);if(!this.P()){var b=MI(this);this.l=a==chrome.cast.ReceiverAvailability.AVAILABLE;MI(this)!=b&&this.G("yt-remote-cast2-availability-change",MI(this))}};
function LI(a){var b=a.g.pe(),c=a.f&&a.f.f;a=cb(b,function(d){c&&BH(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=PI(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
h.re=function(){this.P()||(this.i=LI(this),NI("Updating custom receivers: "+Ei(this.i)),chrome.cast.setCustomReceivers(this.i,Ga,y(function(){this.T("Failed to set custom receivers.")},this)),this.G("yt-remote-cast2-availability-change",MI(this)))};
KI.prototype.setLaunchParams=KI.prototype.ah;KI.prototype.setConnectedScreenStatus=KI.prototype.Zg;KI.prototype.stopSession=KI.prototype.rh;KI.prototype.getCastSession=KI.prototype.qh;KI.prototype.requestSession=KI.prototype.requestSession;KI.prototype.init=KI.prototype.init;KI.prototype.dispose=KI.prototype.dispose;function QI(a,b,c,d,e,f){RI()?TI(a,d,e,f)&&(UI(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?VI(b):(window.__onGCastApiAvailable=function(g,k){g?VI(b):(WI("Failed to load cast API: "+k),XI(!1),UI(!1),Sy("yt-remote-cast-available"),Sy("yt-remote-cast-receiver"),YI(),b(!1))},c?ux("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Ie():!window.chrome||!window.navigator.presentation||
0<=window.navigator.userAgent.indexOf("Edge")?Fe():(He(),ye(xe.map(Ge))))):SI("Cannot initialize because not running Chrome")}
function YI(){SI("dispose");var a=ZI();a&&a.dispose();t("yt.mdx.remote.cloudview.instance_",null,void 0);$I(!1);nt(aJ);aJ.length=0}
function bJ(){SI("clearCurrentReceiver");Sy("yt-remote-cast-receiver")}
function cJ(){return Ry("yt-remote-cast-installed")?ZI()?ZI().getCastSession():(WI("getCastSelector: Cast is not initialized."),null):(WI("getCastSelector: Cast API is not installed!"),null)}
function dJ(a,b){eJ()?ZI().setConnectedScreenStatus(a,b):WI("setConnectedScreenStatus called before ready.")}
function RI(){var a=0<=Mc.search(/ (CrMo|Chrome|CriOS)\//);return qe||a}
function TI(a,b,c,d){var e=!1;ZI()||(a=new KI(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){Oy("yt-remote-cast-available",f);ot("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){SI("onReceiverSelected: "+f.friendlyName);
Oy("yt-remote-cast-receiver",f);ot("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){SI("onReceiverResumed: "+f.friendlyName);
Oy("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){SI("onSessionChange: "+FH(f));
f||Sy("yt-remote-cast-receiver");ot("yt-remote-cast2-session-change",f)}),t("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
SI("cloudview.createSingleton_: "+e);return e}
function ZI(){return w("yt.mdx.remote.cloudview.instance_")}
function VI(a){XI(!0);UI(!1);ZI().init(!1,function(b){b?($I(!0),T("yt-remote-cast2-api-ready")):(WI("Failed to initialize cast API."),XI(!1),Sy("yt-remote-cast-available"),Sy("yt-remote-cast-receiver"),YI());a(b)})}
function SI(a){wH("cloudview",a)}
function WI(a){wH("cloudview",a)}
function XI(a){SI("setCastInstalled_ "+a);Oy("yt-remote-cast-installed",a)}
function eJ(){return!!w("yt.mdx.remote.cloudview.apiReady_")}
function $I(a){SI("setApiReady_ "+a);t("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function UI(a){t("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var aJ=[];function fJ(a,b){this.action=a;this.params=b||{}}
;function gJ(a,b){Ai.call(this);this.f=new zo(this.Eg,0,this);Bi(this,Ua(Ci,this.f));this.i=5E3;this.g=0;if(La(a))b&&(a=y(a,b));else if(a&&La(a.handleEvent))a=y(a.handleEvent,a);else throw Error("Invalid listener argument");this.j=a}
A(gJ,Ai);h=gJ.prototype;h.Eg=function(){this.i=Math.min(3E5,2*this.i);this.j();this.g&&this.start()};
h.start=function(){var a=this.i+15E3*Math.random(),b=this.f;b.isActive()||b.start(a);this.g=z()+a};
h.stop=function(){this.f.stop();this.g=0};
h.isActive=function(){return this.f.isActive()};
h.reset=function(){this.f.stop();this.i=5E3};function hJ(a,b,c){this.H=a;this.B=b;this.i=new br;this.g=new gJ(this.Vg,this);this.f=null;this.D=!1;this.l=null;this.A="";this.F=this.j=0;this.w=[];this.L=c||!1}
A(hJ,Uq);h=hJ.prototype;h.subscribe=function(a,b,c){return this.i.subscribe(a,b,c)};
h.zd=function(a,b){dr(this.i,a,b,void 0)};
h.sa=function(a){return this.i.sa(a)};
h.G=function(a,b){this.i.ka.apply(this.i,arguments)};
h.dispose=function(){this.D||(this.D=!0,Ci(this.i),iJ(this),Ci(this.g),this.g=null)};
h.P=function(){return this.D};
function jJ(a){return{firstTestResults:[""],secondTestResults:!a.f.jc,sessionId:a.f.i,arrayId:a.f.hb}}
h.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.A="";this.g.stop();this.l=a||null;this.j=b||0;a=this.H+"/test";b=this.H+"/bind";var d=new zq(c?c.firstTestResults:null,c?c.secondTestResults:null,this.L),e=this.f;e&&(e.ba=null);d.ba=this;this.f=d;e?this.f.connect(a,b,this.B,e.i,e.hb):c?this.f.connect(a,b,this.B,c.sessionId,c.arrayId):this.f.connect(a,b,this.B)}};
function iJ(a,b){a.F=b||0;a.g.stop();a.f&&(3==a.f.f&&Nq(a.f),Gq(a.f));a.F=0}
h.sendMessage=function(a,b){var c={_sc:a};b&&Qb(c,b);this.g.isActive()||2==(this.f?this.f.f:0)?this.w.push(c):kJ(this)&&Mq(this.f,c)};
h.Yc=function(){this.g.reset();this.l=null;this.j=0;if(this.w.length){var a=this.w;this.w=[];for(var b=0,c=a.length;b<c;++b)Mq(this.f,a[b])}this.G("handlerOpened")};
h.Wc=function(a){var b=2==a&&401==this.f.Ba;4==a||b||this.g.start();this.G("handlerError",a)};
h.nc=function(a){if(!this.g.isActive())this.G("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].f;d&&this.w.push(d)}};
h.kd=function(){var a={v:2};this.A&&(a.gsessionid=this.A);0!=this.j&&(a.ui=""+this.j);0!=this.F&&(a.ui=""+this.F);this.l&&Qb(a,this.l);return a};
h.Xc=function(a){"S"==a[0]?this.A=a[1]:"gracefulReconnect"==a[0]?(this.g.start(),Gq(this.f)):this.G("handlerMessage",new fJ(a[0],a[1]))};
function kJ(a){return!!a.f&&3==a.f.f}
function lJ(a,b){(a.B.loungeIdToken=b)||a.g.stop()}
h.Vg=function(){this.g.isActive();var a=this.f,b=0;a.X&&b++;a.ga&&b++;0==b&&this.connect(this.l,this.j)};function mJ(a){this.index=-1;this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.i=this.j=0;this.f=null;this.hasNext=this.B=!1;this.F=this.g=this.A=this.D=0;this.l=NaN;this.w=!1;this.reset(a)}
function nJ(a){a.audioTrackId=null;a.f=null;a.playerState=-1;a.B=!1;a.hasNext=!1;a.j=0;a.i=z();a.D=0;a.A=0;a.g=0;a.F=0;a.l=NaN;a.w=!1}
mJ.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";nJ(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.f=a.trackData,this.B=a.hasPrevious,this.hasNext=a.hasNext,this.j=a.playerTime,this.i=a.playerTimeAt,this.D=a.seekableStart,this.A=a.seekableEnd,this.g=a.duration,this.F=a.loadedTime,this.l=a.liveIngestionTime,this.w=
!isNaN(this.l))};
mJ.prototype.isAdPlaying=function(){return 1081==this.playerState};
function oJ(a,b){a.j=b;a.i=z()}
function pJ(a){switch(a.playerState){case 1:case 1081:return(z()-a.i)/1E3+a.j;case -1E3:return 0}return a.j}
mJ.prototype.getDuration=function(){return this.w?this.g+(1==this.playerState?(z()-this.i)/1E3:0):this.g};
function qJ(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&nJ(a)}
function rJ(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=Ob(a.f);b.hasPrevious=a.B;b.hasNext=a.hasNext;b.playerTime=a.j;b.playerTimeAt=a.i;b.seekableStart=a.D;b.seekableEnd=a.A;b.duration=a.g;b.loadedTime=a.F;b.liveIngestionTime=a.l;return b}
mJ.prototype.clone=function(){return new mJ(rJ(this))};function sJ(a,b){KH.call(this);this.f=0;this.j=a;this.A=[];this.l=new Br;this.i=this.g=null;this.L=y(this.Yf,this);this.D=y(this.Db,this);this.H=y(this.Xf,this);this.N=y(this.ng,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Jc,this),tJ(this))):c=3;0!=c&&(b?this.Jc(c):O(y(function(){this.Jc(c)},this),0));
var d=cJ();d&&uJ(this,d);this.subscribe("yt-remote-cast2-session-change",this.N)}
la(sJ,KH);function vJ(a){return new mJ(a.j.getPlayerContextData())}
h=sJ.prototype;h.play=function(){1==this.f?(this.g?this.g.play(null,Ga,wJ(this,"play")):xJ(this,"play"),yJ(this,1,pJ(vJ(this))),this.G("remotePlayerChange")):zJ(this,this.play)};
h.pause=function(){1==this.f?(this.g?this.g.pause(null,Ga,wJ(this,"pause")):xJ(this,"pause"),yJ(this,2,pJ(vJ(this))),this.G("remotePlayerChange")):zJ(this,this.pause)};
h.seekTo=function(a){if(1==this.f){if(this.g){var b=vJ(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.g.seek(c,Ga,wJ(this,"seekTo",{newTime:a}))}else xJ(this,"seekTo",{newTime:a});yJ(this,3,a);this.G("remotePlayerChange")}else zJ(this,Ua(this.seekTo,a))};
h.stop=function(){if(1==this.f){this.g?this.g.stop(null,Ga,wJ(this,"stopVideo")):xJ(this,"stopVideo");var a=vJ(this);a.index=-1;a.videoId="";nJ(a);AJ(this,a);this.G("remotePlayerChange")}else zJ(this,this.stop)};
h.setVolume=function(a,b){if(1==this.f){var c=vJ(this);if(this.i){if(c.volume!=a){var d=Math.round(a)/100;this.i.setReceiverVolumeLevel(d,y(function(){zH("set receiver volume: "+d)},this),y(function(){this.T("failed to set receiver volume.")},this))}c.muted!=b&&this.i.setReceiverMuted(b,y(function(){zH("set receiver muted: "+b)},this),y(function(){this.T("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);xJ(this,"setVolume",e)}c.muted=b;c.volume=a;AJ(this,c)}else zJ(this,Ua(this.setVolume,a,b))};
h.setAudioTrack=function(a,b){if(1==this.f){var c=b.getLanguageInfo().getId();xJ(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=vJ(this);d.audioTrackId=c;AJ(this,d)}else zJ(this,Ua(this.setAudioTrack,a,b))};
h.Qc=function(a){1==this.f?xJ(this,"addVideo",{videoId:a}):zJ(this,Ua(this.Qc,a))};
h.Pc=function(a){1==this.f?xJ(this,"addVideos",{listId:a}):zJ(this,Ua(this.Pc,a))};
h.Rc=function(a){0==a.length?this.T("Ignore add videos request due to empty list"):1==this.f?xJ(this,"addVideos",{videoIds:a.join(",")}):zJ(this,Ua(this.Rc,a))};
h.ae=function(a){1==this.f?xJ(this,"removeVideo",{videoId:a}):zJ(this,Ua(this.ae,a))};
h.playVideo=function(a,b,c,d,e,f,g){var k=vJ(this);c=c||0;var l={videoId:a,currentIndex:c};qJ(k,a,c);p(b)&&(oJ(k,b),l.currentTime=b);p(d)&&(l.listId=d);null!=e&&(l.playerParams=e);null!=f&&(l.clickTrackingParams=f);null!=g&&(l.locationInfo=Ei(g));xJ(this,"setPlaylist",l);d||AJ(this,k)};
h.nextVideo=function(a,b){if(1==this.f){if(a&&b){var c=vJ(this);qJ(c,a,b);AJ(this,c)}xJ(this,"next")}else zJ(this,Ua(this.nextVideo,a,b))};
h.dispose=function(){if(3!=this.f){var a=this.f;this.f=3;this.G("proxyStateChange",a,this.f)}KH.prototype.dispose.call(this)};
h.K=function(){BJ(this);this.j=null;this.l.clear();uJ(this,null);KH.prototype.K.call(this)};
function tJ(a){B("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.A.push(this.j.subscribe(b,Ua(this.vg,b),this))},a)}
function BJ(a){B(a.A,function(b){this.j.unsubscribeByKey(b)},a);
a.A.length=0}
function zJ(a,b){var c=a.l;50>c.f.length+c.g.length&&a.l.g.push(b)}
function yJ(a,b,c){var d=vJ(a);oJ(d,c);-1E3!=d.playerState&&(d.playerState=b);AJ(a,d)}
function xJ(a,b,c){a.j.sendMessage(b,c)}
function AJ(a,b){BJ(a);a.j.setPlayerContextData(rJ(b));tJ(a)}
h.Jc=function(a){if((a!=this.f||2==a)&&3!=this.f&&0!=a){var b=this.f;this.f=a;this.G("proxyStateChange",b,a);if(1==a)for(;!this.l.isEmpty();)b=a=this.l,0==b.f.length&&(b.f=b.g,b.f.reverse(),b.g=[]),a.f.pop().apply(this);else 3==a&&this.dispose()}};
h.vg=function(a,b){this.G(a,b)};
function uJ(a,b){a.i&&(a.i.removeUpdateListener(a.L),a.i.removeMediaListener(a.D),a.Db(null));a.i=b;a.i&&(zH("Setting cast session: "+a.i.sessionId),a.i.addUpdateListener(a.L),a.i.addMediaListener(a.D),a.i.media.length&&a.Db(a.i.media[0]))}
h.Yf=function(a){if(!a)this.Db(null),uJ(this,null);else if(this.i.receiver.volume){a=this.i.receiver.volume;var b=vJ(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)zH("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,AJ(this,b)}};
h.Db=function(a){zH("Cast media: "+!!a);this.g&&this.g.removeUpdateListener(this.H);if(this.g=a)this.g.addUpdateListener(this.H),CJ(this),this.G("remotePlayerChange")};
function CJ(a){var b=a.g.media,c=a.g.customData;if(b&&c){var d=vJ(a);b.contentId!=d.videoId&&zH("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;oJ(d,a.g.getEstimatedTime());AJ(a,d)}else zH("No cast media video. Ignoring state update.")}
h.Xf=function(a){a?(CJ(this),this.G("remotePlayerChange")):this.Db(null)};
h.ng=function(){var a=cJ();a&&uJ(this,a)};
h.T=function(a){wH("CP",a)};
function wJ(a,b,c){return y(function(d){this.T("Failed to "+b+" with cast v2 channel. Error code: "+d.code);d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.T("Retrying "+b+" using MDx browser channel."),xJ(this,b,c))},a)}
;function DJ(a,b,c){KH.call(this);this.l=NaN;this.U=!1;this.H=this.D=this.N=this.R=NaN;this.L=[];this.j=this.A=this.i=this.M=this.f=null;this.Z=a;this.L.push(Q(window,"beforeunload",y(this.ff,this)));this.g=[];this.M=new mJ;this.W=b.id;this.f=EJ(this,c);this.f.subscribe("handlerOpened",this.eg,this);this.f.subscribe("handlerClosed",this.ag,this);this.f.subscribe("handlerError",this.cg,this);this.f.subscribe("handlerMessage",this.dg,this);lJ(this.f,b.token);this.subscribe("remoteQueueChange",function(){var d=
this.M.videoId;YH()&&Oy("yt-remote-session-video-id",d)},this)}
la(DJ,KH);h=DJ.prototype;
h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,g=b.index,k={videoId:d},l=b.currentTime,m=b.locationInfo;p(l)&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);m&&(k.locationInfo=m);f&&(k.clickTrackingParams=f);c&&(k.listId=c);p(g)&&(k.currentIndex=g);c&&(this.M.listId=c);this.M.videoId=d;this.M.index=g||0;this.M.state=3;oJ(this.M,l);this.j="UNSUPPORTED";FJ("Connecting with setPlaylist and params: "+Ei(k));this.f.connect({method:"setPlaylist",params:Ei(k)},
a,bI())}else FJ("Connecting without params"),this.f.connect({},a,bI());GJ(this)};
h.dispose=function(){this.P()||(this.G("beforeDispose"),HJ(this,3));KH.prototype.dispose.call(this)};
h.K=function(){IJ(this);JJ(this);KJ(this);P(this.D);this.D=NaN;P(this.H);this.H=NaN;this.i=null;R(this.L);this.L.length=0;this.f.dispose();KH.prototype.K.call(this);this.j=this.A=this.g=this.M=this.f=null};
function FJ(a){wH("conn",a)}
h.ff=function(){this.cb(2)};
function EJ(a,b){return new hJ(lH(a.Z,"/bc"),b)}
function HJ(a,b){a.G("proxyStateChange",b)}
function GJ(a){a.l=O(y(function(){FJ("Connecting timeout");this.cb(1)},a),2E4)}
function IJ(a){P(a.l);a.l=NaN}
function KJ(a){P(a.R);a.R=NaN}
function LJ(a){JJ(a);a.N=O(y(function(){MJ(this,"getNowPlaying")},a),2E4)}
function JJ(a){P(a.N);a.N=NaN}
h.eg=function(){FJ("Channel opened");this.U&&(this.U=!1,KJ(this),this.R=O(y(function(){FJ("Timing out waiting for a screen.");this.cb(1)},this),15E3));
fI(jJ(this.f),this.W)};
h.ag=function(){FJ("Channel closed");isNaN(this.l)?gI(!0):gI();this.dispose()};
h.cg=function(a){gI();isNaN(this.yb())?(FJ("Channel error: "+a+" without reconnection"),this.dispose()):(this.U=!0,FJ("Channel error: "+a+" with reconnection in "+this.yb()+" ms"),HJ(this,2))};
function NJ(a,b){b&&(IJ(a),KJ(a));b==(kJ(a.f)&&isNaN(a.l))?b&&(HJ(a,1),MJ(a,"getSubtitlesTrack")):b?(a.ld()&&a.M.reset(),HJ(a,1),MJ(a,"getNowPlaying"),OJ(a)):a.cb(1)}
function PJ(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.M.videoId&&(Kb(b.params)?a.M.f=null:a.M.f=b.params,a.G("remotePlayerChange"))}
function QJ(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.M.listId=b.params.listId||a.M.listId;qJ(a.M,c,d);a.G("remoteQueueChange")}
function RJ(a,b){b.params=b.params||{};QJ(a,b);SJ(a,b);a.G("autoplayDismissed")}
function SJ(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);oJ(a.M,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.M.playerState&&(c=-1E3);a.M.playerState=c;c=Number(b.params.loadedTime);a.M.F=isNaN(c)?0:c;c=Number(b.params.duration);a.M.g=isNaN(c)?0:c;c=a.M;var d=Number(b.params.liveIngestionTime);c.l=d;c.w=isNaN(d)?!1:!0;c=a.M;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.D=isNaN(d)?0:d;c.A=isNaN(e)?0:e;1==a.M.playerState?
LJ(a):JJ(a);a.G("remotePlayerChange")}
function TJ(a,b){if(-1E3!=a.M.playerState){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.M.playerState=c;c=parseInt(b.params.currentTime,10);oJ(a.M,isNaN(c)?0:c);a.G("remotePlayerChange")}}
function UJ(a,b){var c="true"==b.params.muted;a.M.volume=parseInt(b.params.volume,10);a.M.muted=c;a.G("remotePlayerChange")}
function VJ(a,b){a.A=b.params.videoId;a.G("nowAutoplaying",parseInt(b.params.timeout,10))}
function WJ(a,b){var c="true"==b.params.hasNext;a.M.B="true"==b.params.hasPrevious;a.M.hasNext=c;a.G("previousNextChange")}
h.dg=function(a){a.params?FJ("Received: action="+a.action+", params="+Ei(a.params)):FJ("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=dp(a.params.devices);this.g=cb(a,function(c){return new RH(c)});
a=!!gb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
NJ(this,a);break;case "loungeScreenDisconnected":nb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
NJ(this,!1);break;case "remoteConnected":var b=new RH(dp(a.params.device));gb(this.g,function(c){return c.equals(b)})||kb(this.g,b);
break;case "remoteDisconnected":b=new RH(dp(a.params.device));nb(this.g,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":QJ(this,a);break;case "nowPlaying":RJ(this,a);break;case "onStateChange":SJ(this,a);break;case "onAdStateChange":TJ(this,a);break;case "onVolumeChanged":UJ(this,a);break;case "onSubtitlesTrackChanged":PJ(this,a);break;case "nowAutoplaying":VJ(this,a);break;case "autoplayDismissed":this.G("autoplayDismissed");break;case "autoplayUpNext":this.A=a.params.videoId||null;this.G("autoplayUpNext",this.A);break;case "onAutoplayModeChanged":this.j=
a.params.autoplayMode;this.G("autoplayModeChange",this.j);"DISABLED"==this.j&&this.G("autoplayDismissed");break;case "onHasPreviousNextChanged":WJ(this,a);break;case "requestAssistedSignIn":this.G("assistedSignInRequested",a.params.authCode);break;default:FJ("Unrecognized action: "+a.action)}};
h.Ug=function(){if(this.i){var a=this.i;this.i=null;this.M.videoId!=a&&MJ(this,"getNowPlaying")}};
h.Ze=function(){var a=3;this.P()||(a=0,isNaN(this.yb())?kJ(this.f)&&isNaN(this.l)&&(a=1):a=2);return a};
h.cb=function(a){FJ("Disconnecting with "+a);IJ(this);this.G("beforeDisconnect",a);1==a&&gI();iJ(this.f,a);this.dispose()};
h.Xe=function(){var a=this.M;this.i&&(a=this.M.clone(),qJ(a,this.i,a.index));return rJ(a)};
h.bh=function(a){var b=new mJ(a);b.videoId&&b.videoId!=this.M.videoId&&(this.i=b.videoId,P(this.D),this.D=O(y(this.Ug,this),5E3));var c=[];this.M.listId==b.listId&&this.M.videoId==b.videoId&&this.M.index==b.index||c.push("remoteQueueChange");this.M.playerState==b.playerState&&this.M.volume==b.volume&&this.M.muted==b.muted&&pJ(this.M)==pJ(b)&&Ei(this.M.f)==Ei(b.f)||c.push("remotePlayerChange");this.M.reset(a);B(c,function(d){this.G(d)},this)};
h.ld=function(){var a=this.f.B.id,b=gb(this.g,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
h.yb=function(){var a=this.f;return a.g.isActive()?a.g.g-z():NaN};
h.Te=function(){return this.j||"UNSUPPORTED"};
h.Ue=function(){return this.A||""};
h.jh=function(){if(!isNaN(this.yb())){var a=this.f.g,b=a.f;b.stop();b.nd();a.start()}};
function OJ(a){P(a.H);a.H=O(y(a.cb,a,1),864E5)}
function MJ(a,b,c){c?FJ("Sending: action="+b+", params="+Ei(c)):FJ("Sending: action="+b);a.f.sendMessage(b,c)}
h.Yg=function(a,b){MJ(this,a,b);OJ(this)};
DJ.prototype.subscribe=DJ.prototype.subscribe;DJ.prototype.unsubscribeByKey=DJ.prototype.sa;DJ.prototype.getProxyState=DJ.prototype.Ze;DJ.prototype.disconnect=DJ.prototype.cb;DJ.prototype.getPlayerContextData=DJ.prototype.Xe;DJ.prototype.setPlayerContextData=DJ.prototype.bh;DJ.prototype.getOtherConnectedRemoteId=DJ.prototype.ld;DJ.prototype.getReconnectTimeout=DJ.prototype.yb;DJ.prototype.getAutoplayMode=DJ.prototype.Te;DJ.prototype.getAutoplayVideoId=DJ.prototype.Ue;DJ.prototype.reconnect=DJ.prototype.jh;
DJ.prototype.sendMessage=DJ.prototype.Yg;function XJ(a){LH.call(this,"ScreenServiceProxy");this.da=a;this.g=[];this.g.push(this.da.$_s("screenChange",y(this.nh,this)));this.g.push(this.da.$_s("onlineScreenChange",y(this.rg,this)))}
la(XJ,LH);h=XJ.prototype;h.na=function(a){return this.da.$_gs(a)};
h.contains=function(a){return!!this.da.$_c(a)};
h.get=function(a){return this.da.$_g(a)};
h.start=function(){this.da.$_st()};
h.add=function(a,b,c){this.da.$_a(a,b,c)};
h.remove=function(a,b,c){this.da.$_r(a,b,c)};
h.ic=function(a,b,c,d){this.da.$_un(a,b,c,d)};
h.K=function(){for(var a=0,b=this.g.length;a<b;++a)this.da.$_ubk(this.g[a]);this.g.length=0;this.da=null;LH.prototype.K.call(this)};
h.nh=function(){this.G("screenChange")};
h.rg=function(){this.G("onlineScreenChange")};
tI.prototype.$_st=tI.prototype.start;tI.prototype.$_gspc=tI.prototype.oh;tI.prototype.$_gsppc=tI.prototype.qe;tI.prototype.$_c=tI.prototype.contains;tI.prototype.$_g=tI.prototype.get;tI.prototype.$_a=tI.prototype.add;tI.prototype.$_un=tI.prototype.ic;tI.prototype.$_r=tI.prototype.remove;tI.prototype.$_gs=tI.prototype.na;tI.prototype.$_gos=tI.prototype.pe;tI.prototype.$_s=tI.prototype.subscribe;tI.prototype.$_ubk=tI.prototype.sa;function YJ(){var a=M("MDX_CONFIG")||a;Ty();VH();ZJ||(ZJ=new kH(a?a.loungeApiHost:void 0),hI()&&(ZJ.f="/api/loungedev"));$J||($J=w("yt.mdx.remote.deferredProxies_")||[],t("yt.mdx.remote.deferredProxies_",$J,void 0));aK();var b=bK();if(!b){var c=new tI(ZJ);t("yt.mdx.remote.screenService_",c,void 0);b=bK();var d=!1,e=void 0,f=void 0,g=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,g=!!a.disableDial);QI(c,function(k){k?cK()&&dJ(cK(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){ot("yt-remote-receiver-availability-change")})},
d,e,f,g)}a&&!w("yt.mdx.remote.initialized_")&&(t("yt.mdx.remote.initialized_",!0,void 0),dK("Initializing: "+Ei(a)),eK.push(S("yt-remote-cast2-availability-change",function(){ot("yt-remote-receiver-availability-change")})),eK.push(S("yt-remote-cast2-receiver-selected",function(){fK();
ot("yt-remote-auto-connect","cast-selector-receiver")})),eK.push(S("yt-remote-cast2-receiver-resumed",function(){ot("yt-remote-receiver-resumed","cast-selector-receiver")})),eK.push(S("yt-remote-cast2-session-change",gK)),eK.push(S("yt-remote-connection-change",function(k){k?dJ(cK(),"YouTube TV"):hK()||(dJ(null,null),bJ())})),d=iK(),a.isAuto&&(d.id+="#dial"),cs("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),dK(" -- with channel params: "+
Ei(d)),jK(d),b.start(),cK()||kK())}
function lK(){nt(eK);eK.length=0;Ci(mK);mK=null;$J&&(B($J,function(a){a(null)}),$J.length=0,$J=null,t("yt.mdx.remote.deferredProxies_",null,void 0));
ZJ=null}
function nK(){var a=cK();if(!a)return null;var b=bK().na();return JH(b,a)}
function gK(a){dK("remote.onCastSessionChange_: "+FH(a));if(a){var b=nK();b&&b.id==a.id?dJ(b.id,"YouTube TV"):(b&&oK(),pK(a,1))}else qK()&&oK()}
function oK(){eJ()?ZI().stopSession():WI("stopSession called before API ready.");var a=qK();a&&(a.disconnect(1),rK(null))}
function sK(){var a=qK();return a&&3!=a.getProxyState()?new sJ(qK(),void 0):null}
function dK(a){wH("remote",a)}
function bK(){if(!mK){var a=w("yt.mdx.remote.screenService_");mK=a?new XJ(a):null}return mK}
function cK(){return w("yt.mdx.remote.currentScreenId_")}
function tK(a){t("yt.mdx.remote.currentScreenId_",a,void 0)}
function fK(){t("yt.mdx.remote.connectData_",null,void 0)}
function qK(){return w("yt.mdx.remote.connection_")}
function rK(a){var b=qK();fK();a||tK("");t("yt.mdx.remote.connection_",a,void 0);$J&&(B($J,function(c){c(a)}),$J.length=0);
b&&!a?ot("yt-remote-connection-change",!1):!b&&a&&ot("yt-remote-connection-change",!0)}
function hK(){var a=YH();if(!a)return null;var b=bK().na();return JH(b,a)}
function pK(a,b){nK()&&nK();tK(a.id);var c=new DJ(ZJ,a,iK());c.connect(b,w("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(d){ot("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){qK()&&rK(null)});
rK(c)}
function kK(){var a=hK();a?(dK("Resume connection to: "+FH(a)),pK(a,0)):(gI(),bJ(),dK("Skipping connecting because no session screen found."))}
var ZJ=null,$J=null,mK=null;function aK(){var a=iK();if(Kb(a)){a=XH();var b=Ry("yt-remote-session-name")||"",c=Ry("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};t("yt.mdx.remote.channelParams_",a,void 0)}}
function iK(){return w("yt.mdx.remote.channelParams_")||{}}
function jK(a){a?(Oy("yt-remote-session-app",a.app),Oy("yt-remote-session-name",a.name)):(Sy("yt-remote-session-app"),Sy("yt-remote-session-name"));t("yt.mdx.remote.channelParams_",a,void 0)}
var eK=[];var uK;function vK(a,b){this.type=a;this.videoIds=b||[]}
function wK(a,b){qs("/watch_queue_ajax",{method:"POST",ta:{action_check_playability:1},O:{video_ids:a.join(",")},onSuccess:function(c,d){d&&Ja(d)?b(d):b([])},
onError:function(){b([])}})}
function xK(a,b,c){wK(r(a)?[a]:a,function(d){0==d.length?c&&c():r(a)?yK(a,b,c):yK(d,b,c)})}
function yK(a,b,c){var d="";r(a)&&(d=a,a=[d]);var e=new vK(0,a);uK?zK(function(){d?uK.Qc(d):uK.Rc(a)},e,b,c):AK(e,{action_add_to_watch_queue:1},a,b,c)}
function BK(a,b,c){r(a)&&(a=[a]);var d=new vK(1,a);uK?zK(function(){B(a,function(e){uK.ae(e)})},d,b,c):AK(d,{action_remove_from_watch_queue:1},a,b,c)}
function CK(a,b,c){var d=new vK(2);uK?zK(function(){uK.Pc(a)},d,b,c):c&&O(function(){c("Not implemented")},0)}
function DK(a,b){var c=new vK(2);uK?zK(function(){},c,a,b):b&&O(function(){b("Not implemented")},0)}
function EK(a){uK=a;uK.subscribe("remoteQueueChange",function(){T("queue-change",new vK(2))})}
function FK(){var a=sK();Ci(uK);uK=null;a?EK(a):T("queue-change",new vK(2))}
function zK(a,b,c,d){uK&&1==uK.f?(a.call(n),c&&O(function(){c()},0),p(b)&&T("queue-change",b)):d&&O(function(){d()},0)}
function AK(a,b,c,d,e){qs("/watch_queue_ajax",{method:"POST",ta:b,O:{list:"WQ",video_ids:c.join(",")},onSuccess:function(){d&&d();T("queue-change",a)},
onError:function(){e&&e()}})}
var GK=[];function HK(a,b){var c=M("RESUME_COOKIE_NAME",void 0);if(c){var d=du(c,"").split(",");d=bb(d,function(e){return 0!=e.indexOf(a)&&!!e.length});
4<=d.length&&d.shift();d.push(a+":"+b);cu(c,d.join(","),1814400,"/")}}
function IK(a){var b=M("RESUME_COOKIE_NAME",void 0);if(b){var c=du(b,"").split(",");c=bb(c,function(d){return 0!=d.indexOf(a)});
0==c.length?eu(b):cu(b,c.join(","),1814400,"/")}}
;function JK(){YJ();GK.push(S("yt-remote-connection-change",FK));var a=sK();a&&EK(a);ez("addto-watch-queue-button","click",KK);ez("addto-tv-queue-button","click",KK);ez("addto-watch-queue-button-success","click",LK);ez("addto-watch-queue-menu-choice","click",MK);NK.push(S("watch-queue-update",OK));OK()}
function PK(a){return"tv-queue"==V(a,"style")?"addto-tv-queue-button":"addto-watch-queue-button"}
function KK(a){var b=PK(a);Ko(a,b,"addto-watch-queue-button-loading");var c=V(a,"video-ids"),d=V(a,"list-id"),e=KB(IB.getInstance(),a);d?CK(d,function(){QK(a)},function(f){RK(a,b,e,f)}):xK(c,function(){QK(a)},function(f){RK(a,b,e,f)})}
function MK(a){var b=V(a,"action");SK(a,TK[b])}
function LK(a){Ko(a,"addto-watch-queue-button-success","addto-watch-queue-button-loading");var b=V(a,"video-ids"),c=V(a,"list-id"),d=KB(IB.getInstance(),a);c?DK(function(){UK(a)},function(e){RK(a,"addto-watch-queue-button-success",d,e)}):BK(b,function(){UK(a)},function(e){RK(a,"addto-watch-queue-button-success",d,e)})}
function QK(a){Ko(a,"addto-watch-queue-button-loading","addto-watch-queue-button-success");var b=My("ADDTO_WATCH_QUEUE_ADDED");NB(IB.getInstance(),a,b);V(a,"list-id")?T("watch-queue-addto-playlist-added"):T("watch-queue-addto-video-added")}
function UK(a){var b=PK(a);Ko(a,"addto-watch-queue-button-loading",b);b="addto-watch-queue-button"==b?My("ADDTO_WATCH_QUEUE"):My("ADDTO_TV_QUEUE");NB(IB.getInstance(),a,b);V(a,"list-id")?T("watch-queue-addto-playlist-removed"):T("watch-queue-addto-video-removed")}
function RK(a,b,c,d){Ko(a,"addto-watch-queue-button-loading","addto-watch-queue-button-error");d=d||My("ADDTO_WATCH_QUEUE_ERROR");NB(IB.getInstance(),a,d);O(function(){Ko(a,"addto-watch-queue-button-error",b);NB(IB.getInstance(),a,c)},5E3)}
function SK(a,b){var c=V(a,"video-ids");c&&(r(c)&&(c=[c]),wK(c,function(d){d.length==c.length&&b(a)}))}
function OK(){var a=jH();if(!tb(VK,a)){VK=a;var b={};B(VK,function(c){b[c]=!0});
B(ef("addto-queue-button"),function(c){var d=V(c,"video-ids");if(d&&r(d)){var e=PK(c);b[d]?(Ko(c,e,"addto-watch-queue-button-success"),d=My("ADDTO_WATCH_QUEUE_ADDED")):(Ko(c,"addto-watch-queue-button-success",e),d="addto-watch-queue-button"==e?My("ADDTO_WATCH_QUEUE"):My("ADDTO_TV_QUEUE"));NB(IB.getInstance(),c,d)}})}}
var TK={"play-next":function(a){var b=V(a,"list-id");a=V(a,"video-ids");b?T("watch-queue-addto-playlist-play-next",b,a):T("watch-queue-addto-video-play-next",a)},
"play-now":function(a){var b=V(a,"list-id");a=V(a,"video-ids");b?T("watch-queue-addto-playlist-play-now",b,a):T("watch-queue-addto-video-play-now",a)}},NK=[],VK=[];var WK=[];var XK=[],YK=!1;function ZK(a){var b=M("YPC_LOADER_CSS",void 0),c=M("YPC_LOADER_JS",void 0);YK&&(c="www/ypc_core");XK.length||(XK.push(new Ck(function(d){cy(b,d)})),XK.push(new Ck(function(d){ux(c,d)})));
Kk(XK).then(function(){a&&a()})}
;function $K(a,b,c,d,e,f,g,k,l,m,q,u,v){a={config:{couponCode:e,fromPurchaseIds:f,flowType:d},itemData:{itemId:c,itemType:b},offerData:{offerId:a}};if(g||k)b={},g&&(b.jwt=g),k&&(b.encryptedPurchaseParams=k),a.walletPrefetchdata=b;l&&(a.innertubeRequestParams=l);m&&(a.transactionAction=m);q&&(a.transactionParams=q);u&&(a.transactionLoggingParams=u);v&&(a.gtmData=v);return a}
function aL(a,b){if(!a)return null;var c=V(a,"ypc-item-type"),d=V(a,"ypc-item-id"),e=V(a,"ypc-offer-id"),f=V(a,"coupon-code"),g=V(a,"ypc-from-purchase-ids"),k=V(a,"ypc-gtm-data"),l=V(a,"ypc-offer-jwt"),m=V(a,"ypc-offer-encrypted-purchase-params"),q=V(a,"ypc-irp"),u=V(a,"ypc-transaction-action"),v=V(a,"ypc-transaction-params"),x=V(a,"ypc-serialized-transaction-flow-logging-params");return $K(e,c,d,b,f,g,l,m,q,u,v,x,k)}
function bL(a){var b=a.itemData.itemId,c=a.config.flowType,d=a.offerData?a.offerData.offerId:null,e=a.innertubeRequestParams,f=a.transactionAction,g={};g.ypc_it=a.itemData.itemType;g.ypc_ii=b;g.ypc_ft=c;e&&(g.ypc_irp=e);d&&(g.ypc_oi=d);f&&(g.ypc_ta=f);return g}
;function cL(a,b,c,d,e){if(yG())ZK(function(){w("yt.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var f={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(f.ypc_irp=d);e&&(f.ypc_cc=e);f=dL(f);Yx(f)}}
function eL(a){if(yG())ZK(function(){w("yt.ypc.checkout.showPrepurchaseOverlay")(a)});
else{var b=dL({});Yx(b)}}
function fL(a,b){if(yG())ZK(function(){w("yt.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=dL({ypc_ft:a,ypc_irp:b});Yx(c)}}
function gL(a,b,c){yG()?ZK(function(){w("yt.ypc.checkout.offerpurchaser.purchaseOffer")(a,c)}):(b=dL(b),Yx(b))}
function hL(a,b){if(yG())ZK(function(){w("yt.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");}
function dL(a){a=Ur(window.location.href,a);var b=M("YPC_SIGNIN_URL",void 0),c=Tr(b)["continue"];c=Ur(c,{next:a});return Ur(b,{"continue":c})}
;var iL=[],jL=[];function kL(a){if(a=a.currentTarget)lL(a),(a=V(a,"ytr-prepurchase-html"))&&eL(Ad(a))}
function mL(a){var b=a.currentTarget;if(b)if(a=V(b,"ypc-transaction-action"),b=aL(b,"D")){if(b.gtmData){var c=JSON.parse(b.gtmData);c&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(c))}(a="start_payment"==a)&&nL("inline-offer-button-click",b.itemData);gL(b,bL(b),a);setTimeout(Ft,0)}else Pr(Error("ypc-offer-button does not contain purchaseFlowData."))}
function oL(a){(a=a.currentTarget)&&pL(a)}
function qL(a){ZK(a.callback)}
function rL(a){nL("container-button-click-attempt");var b=G("ypc-checkout-button",a.container);(a=G("ytr-purchase-button",a.container))?(b=K(a,"ypc-offer-button"),(a.href||b)&&a.click()):b&&pL(b)}
function sL(a){var b=a.f;a=b.itemId;var c=b.itemType;b=b.flowType;nL("paid-subscribe-button-click",{itemType:c,itemId:a});cL(c,a,b)}
function pL(a){var b=V(a,"ypc-item-type"),c=V(a,"ypc-item-id"),d=V(a,"ypc-flow-type");a=V(a,"ypc-irp")||void 0;yG()?nL("purchase-button-click",{itemId:c,itemType:b}):nL("signin-button-click");cL(b,c,d,a)}
function tL(a){var b=a.currentTarget;a=V(b,"ypc-item-type");b=V(b,"ypc-item-id");a&&b&&(nL("unsubscribe-button-click",{itemId:b,itemType:a}),hL(a,b))}
function uL(a){var b=a.f;a=b.itemType;b=b.itemId;nL("paid-unsubscribe-button-click",{itemType:a,itemId:b});hL(a,b)}
function nL(a,b){var c={};Qb(c,{label:a,pageName:M("PAGE_NAME")});b&&Qb(c,b);zx("ypc-checkout",dg(c))}
function lL(a){var b;K(a,"yt-unlimited-more-offer-button")?b="YTO_GTM_2_BUTTON_CLICK_DATA":K(a,"ypc-offer-button")&&(b="YTO_GTM_1_BUTTON_CLICK_DATA");b&&(a=M(b,""))&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(a))}
function vL(a){a=a.currentTarget;var b=V(a,"tab-id");if(b){for(var c=ef("offer-module-tab-content"),d=0;d<c.length;d++)c[d].classList.remove("active-tab");c=ef("offer-module-tab");for(d=0;d<c.length;d++)c[d].classList.remove("active-tab");F(b).classList.add("active-tab");a.classList.add("active-tab")}}
function wL(a){if(a=a.currentTarget){lL(a);var b=aL(a,"U");b?(ZK(function(){w("yt.ypc.checkout.offerpurchaser.completeTransaction")(b)}),setTimeout(Ft,0)):Pr(Error("ypc-complete-transaction-button does not contain purchaseFlowData"))}}
function xL(a){a=a.currentTarget;var b=V(a,"feedback-token");b&&(a={itct:V(a,"innertube-clicktracking"),feedback_tokens:[b],wait_for_response:1},qs("/feed_change_ajax?action_give_feedback=1",{method:"POST",onSuccess:function(c,d){if(d&&d.actions){var e=d.actions.url_endpoint.url,f=window,g=new Tb(Ub,"_self");e=e instanceof qc?e:Ac(e);(f||n).open(uc(e),g?Wb(g):"",void 0,void 0)}},
O:a}))}
;var yL=E&&8<=document.documentMode||Ud&&ie("1.9.2")||Vd&&ie("532.1"),zL=E&&!yL;function AL(){var a=BL,b=F("legacy-history-iframe");this.j=this.i=this.f=null;this.g=a;this.B=zL?b:null;this.F=window;this.l=this.F.location;this.A=this.l.href.split("#")[0];this.w=y(this.H,this)}
AL.prototype.D=function(a,b){this.i&&(R(this.i),delete this.i);this.j&&(gs(this.j),delete this.j);if(a){this.f=CL(this);if(zL){var c=this.B.contentWindow.document.body;c&&c.innerHTML||DL(this,this.f)}b||this.g(this.f);yL?this.i=Q(this.F,"hashchange",this.w):this.j=fs(this.w,200)}};
AL.prototype.H=function(){if(zL){var a=(a=this.B.contentWindow.document.body)?yd(Pf(a).substring(1)):"";a!=this.f?(this.f=a,EL(this,a),this.g(a)):(a=CL(this),a!=this.f&&(this.f=a,DL(this,a),this.g(a)))}else a=CL(this),a!=this.f&&(this.f=a,this.g(a))};
function CL(a){a=a.l.href;var b=a.indexOf("#");return 0>b?"":a.substring(b+1)}
function EL(a,b){var c=a.A+"#"+b,d=a.l.href;d!=c&&d+"#"!=c&&vd(a.l,c)}
function DL(a,b){var c=a.B.contentWindow.document,d=c.body?c.body.innerHTML:"",e="#"+xd(b);d!=e&&(d=fd(ed("title",{},window.document.title||""),ed("body")),c.open("text/html"),c.write(Zc(d)),Hf(c.body,e),c.close())}
AL.prototype.add=function(a,b,c){this.f=""+a;zL&&DL(this,a);EL(this,a);c||this.g(this.f)};function FL(){var a=BL;this.l=this.B=this.f=null;this.i=a;this.j=window;this.g=this.j.location;this.w=y(this.F,this)}
FL.prototype.A=function(a,b){this.l&&(R(this.l),delete this.l);this.B&&(gs(this.B),delete this.B);a&&GL&&(this.f=this.g.href,b||this.i(this.f),this.l=Q(this.j,"popstate",this.w))};
FL.prototype.F=function(a){var b=this.g.href;if((a=a.state)||b!=this.f)this.f=b,this.i(b,a)};
FL.prototype.add=function(a,b,c){if(a||b)a=a||this.g.href,this.j.history.pushState(b,"",a),this.f=a,c||this.i(a,b)};
FL.prototype.replace=function(a,b,c){if(a||b)a=a||this.g.href,this.j.history.replaceState(b,"",a),this.f=a,c||this.i(a,b)};
var GL=!!window.history.pushState&&(!Vd||Vd&&ie("534.11"));function HL(){var a=IL("state");a.setEnabled.call(a,!0,!0)}
function JL(a){var b=null,c=IL();b=b||window.history&&window.history.state;c.replace.call(c,a,b,!0)}
function IL(a){var b=w("ytglobal.HistoryHistoryInstance");b||("state"==(void 0===a?"hash":a)?(b=new FL,FL.prototype.setEnabled=FL.prototype.A,FL.prototype.add=FL.prototype.add,FL.prototype.replace=FL.prototype.replace):(b=new AL,AL.prototype.setEnabled=AL.prototype.D,AL.prototype.add=AL.prototype.add,AL.prototype.replace=AL.prototype.add),t("ytglobal.HistoryHistoryInstance",b,void 0));return b}
function BL(a,b){T("navigate",a,b)}
;var KL={Xh:"ypc_cc",ci:"ypc_ft",ni:"ypc_irp",si:"ypc_ii",ti:"ypc_it"};function LL(){var a=Tr(window.location.href);if(GL){Ab(KL,function(c){c in a&&delete a[c]});
var b=fg(window.location.href.split("?",2)[0],a);HL();JL(b)}}
;function ML(a){YK=!!a;G("ypc-delayedloader-target")&&ZK();a=Tr(window.location.href);var b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_oi,f=a.ypc_irp,g=a.ypc_cc,k=a.ypc_ta;"channel"==M("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=M("CHANNEL_ID",void 0));if(f||c&&b)LL(),"start_payment"==k?(a=$K(e,b,c,d,g,null,"","",f,k),gL(a,bL(a),!0)):c&&b?cL(b,c,d,f,g):fL(d,f);iL.push(Vs(document.body,"click",oL,"ypc-checkout-button"),Vs(document.body,"click",mL,"ypc-offer-button"),Vs(document.body,"click",wL,"ypc-complete-transaction-button"),
Vs(document.body,"click",kL,"ytr-pre-purchase-button"),Vs(document.documentElement,"click",tL,"ypc-unsubscribe-link"),Vs(document.documentElement,"click",tL,"ypc-unsubscribe-button"),Vs(document.documentElement,"click",vL,"offer-module-tab"),Vs(document.documentElement,"click",xL,"yt-unlimited-more-offer-button"));jL.push(zw(XF,qL),zw(WF,rL),zw(bG,sL),zw($F,uL))}
;window.onload=function(){dH()};
window.onunload=function(){M("TIMING_REPORT_ON_UNLOAD")&&Uw(!0);if(!Yw(void 0)){var a=M("CSI_SERVICE_NAME","youtube");M("TIMING_ACTION",void 0)&&a&&(Pw("aa",void 0,void 0),Vw("ap",1,void 0),Vw("yt_fss","u",void 0),Zw(void 0))}if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"!=qu){qu="FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND";a=-1;pu&&(a=Math.round(Kr()-pu));var b=String;var c=w("_fact",window);c=null==c||-1==c?-1:Math.max(z()-c,0);a={firstActivityMs:b(c),clientDocumentNonce:nu,index:String(ou),lastEventDeltaMs:String(a),
trigger:"FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"};Xt("foregroundHeartbeat",a,ku);t("_fact",-1,window);ou++;pu=Kr()}a=(a=dw(0))?new Yt({veType:a,youtubeData:void 0}):null;(b=ew())&&a&&fB(b,[a]);hw();Ft();a=hH;b=0;for(c=a.length;b<c;b++)Rt(a[b]);hH.length=0;cH();fH&&(fH.cancel(),fH=null);(a=M("PAGE_NAME",void 0))&&ot("dispose-"+a);ot("dispose");ot("pageunload")};
window.onerror=function(a,b,c,d,e){var f=!1,g=Nr("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var k=0,l=g.length;k<l;k++)if(0<g[k].src.indexOf("/debug-")){f=!0;break}}f&&(e||(r(a)?f=a:ErrorEvent&&a instanceof ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=
d),Pr(e))};
window.yt=window.yt||{};t("_gel",F,void 0);t("_hasclass",K,void 0);t("_addclass",L,void 0);t("_removeclass",Ho,void 0);t("_toggleclass",Lo,void 0);t("_showdiv",Xy,void 0);t("_hidediv",Yy,void 0);t("_ajax",rs,void 0);t("yt.style.show",Xy,void 0);t("yt.style.hide",Yy,void 0);t("goog.bind",y,void 0);t("goog.dom.getElementByClass",G,void 0);t("goog.dom.getElementsByTagNameAndClass",cf,void 0);t("goog.dom.getFirstElementChild",Cf,void 0);t("goog.array.forEach",B,void 0);t("goog.array.indexOf",$a,void 0);
t("goog.array.contains",jb,void 0);t("yt.setConfig",Mr,void 0);t("yt.config.set",Mr,void 0);t("yt.getConfig",M,void 0);t("yt.config.get",M,void 0);t("yt.logging.errors.log",ft,void 0);t("yt.setTimeout",O,void 0);t("yt.setInterval",fs,void 0);t("yt.clearTimeout",P,void 0);t("yt.clearInterval",gs,void 0);t("yt.timers.setTimeout",O,void 0);t("yt.timers.setInterval",fs,void 0);t("yt.timers.clearTimeout",P,void 0);t("yt.timers.clearInterval",gs,void 0);t("yt.setMsg",Ly,void 0);t("yt.setGoogMsg",Ny,void 0);
t("yt.getMsg",My,void 0);t("yt.msgs.set",Ly,void 0);t("yt.msgs.setGoog",Ny,void 0);t("yt.msgs.get",My,void 0);t("yt.events.listen",Q,void 0);t("yt.events.unlisten",function(a,b,c,d){d=void 0===d?{}:d;(a=Qs(a,b,c,d))&&R(a)},void 0);
t("yt.events.stopPropagation",Us,void 0);t("yt.events.preventDefault",function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault();return!1},void 0);
t("yt.events.getTarget",Ts,void 0);t("yt.events.clear",function(){for(var a in Os)R(a)},void 0);
t("yt.events.Event",Ms,void 0);Ms.prototype.preventDefault=Ms.prototype.preventDefault;Ms.prototype.stopPropagation=Ms.prototype.stopPropagation;t("yt.pubsub.subscribe",S,void 0);t("yt.pubsub.unsubscribeByKey",nt,void 0);t("yt.pubsub.publish",T,void 0);t("yt.pubsub2.publish",xw,void 0);
S("init",function(){OD=new Mt(LD);VD.push(Q(window,"resize",PD));VD.push(Q(window,"scroll",SD));L(document.body,"page-loaded");var a=MC.getInstance(),b=!!((PC("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;document.body&&K(document.body,"exp-invert-logo")&&(c&&!K(document.body,"inverted-hdpi")?L(document.body,"inverted-hdpi"):!c&&K(document.body,"inverted-hdpi")&&Ho(document.body,"inverted-hdpi"));if(b!=c){b="f"+(Math.floor(119/31)+1);var d=PC(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete LC[b]:(c=d.toString(16),LC[b]=c.toString());a.save()}});
S("dispose",Ty);S("init",Ty);kD("keyboard");t("yt.uix.FormInput.selectOnChangeActionIE",function(a){lA.getInstance().Qa(a)},void 0);
S("init",function(){oA()});
t("goog.i18n.bidi.setDirAttribute",function(a,b){var c=b.value,d="";Zb.test(c)?d="rtl":Zb.test(c)||(d="ltr");b.dir=d},void 0);
t("yt.style.toggle",Zy,void 0);t("yt.style.setDisplayed",Uy,void 0);t("yt.style.isDisplayed",Vy,void 0);t("yt.style.setVisible",function(a,b){if(a=F(a))a.style.visibility=b?"visible":"hidden"},void 0);
t("yt.net.ajax.sendWithOptionsFromUncompiled",function(a,b){return qs(a,{format:b.format,method:b.method,postBody:b.postBody,onSuccess:b.onSuccess})},void 0);
t("yt.net.ajax.ResponseFormat.JSON","JSON",void 0);t("yt.net.ajax.ResponseFormat.RAW","RAW",void 0);t("yt.net.ajax.ResponseFormat.LEGACY_XML","XML",void 0);t("yt.net.ajax.getRootNode",xs,void 0);t("yt.net.ajax.getNodeValue",ws,void 0);t("yt.net.scriptloader.load",ux,void 0);t("yt.net.styleloader.load",cy,void 0);
t("goog.dom.forms.getFormDataString",function(a){for(var b=[],c=a.elements,d,e=0;d=c[e];e++)if(d.form==a&&!d.disabled&&"FIELDSET"!=d.tagName){var f=d.name;switch(d.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":d=Wo(d);if(null!=d)for(var g,k=0;g=d[k];k++)Vo(b,f,g);break;default:g=Wo(d),null!=g&&Vo(b,f,g)}}c=a.getElementsByTagName("INPUT");for(e=0;d=c[e];e++)d.form==a&&"image"==d.type.toLowerCase()&&(f=d.name,Vo(b,f,d.value),Vo(b,f+".x","0"),Vo(b,
f+".y","0"));return b.join("&")},void 0);
t("yt.uri.buildQueryData",dg,void 0);t("yt.uri.appendQueryData",fg,void 0);t("yt.www.feedback.init",aD,void 0);t("yt.www.feedback.start",function(a,b){try{var c=(a||"59")+"",d=dD(b),e=eD();cs("gfeedback_for_signed_out_users_enabled")?(e.productId=c,e.locale=d.locale,e.helpCenterPath=d.helpCenterPath,Hr(e,d.productData)):Zl(c,d).i(e);return!1}catch(f){return!0}},void 0);
t("yt.www.feedback.startHelp",cD,void 0);t("yt.www.feedback.displayLink",gD,void 0);S("init",aD);S("init",gD);S("dispose",function(){nt(ZC);R(XC);ZC.length=0;XC.length=0;YC={}});
t("yt.net.cookies.set",cu,void 0);t("yt.net.cookies.get",du,void 0);t("yt.net.cookies.remove",eu,void 0);t("yt.window.redirect",Yx,void 0);
t("yt.window.popup",function(a,b){b=void 0===b?{}:b;b.target=b.target||"YouTube";b.width=b.width||"600";b.height=b.height||"600";var c;(c=b)||(c={});var d=window;var e=a instanceof qc?a:yc("undefined"!=typeof a.href?a.href:String(a));var f=c.target||a.target,g=[],k;for(k in c)switch(k){case "width":case "height":case "top":case "left":g.push(k+"="+c[k]);break;case "target":case "noopener":case "noreferrer":break;default:g.push(k+"="+(c[k]?1:0))}g=g.join(",");Ld()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f?(g=d.document.createElement("A"),rd(g,e),g.setAttribute("target",f),c.noreferrer&&g.setAttribute("rel","noreferrer"),c=document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(c),d={}):c.noreferrer?(d=d.open("",f,g),c=uc(e).toString(),d&&(Td&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,c=gd('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+zd(c)+'">',null),d.document.write(Zc(c)),d.document.close())):
(d=d.open(uc(e).toString(),f,g))&&c.noopener&&(d.opener=null);c=d;if(!c)return null;c.opener||(c.opener=window);c.focus();return c},void 0);
t("yt.window.navigate",Zx,void 0);S("init",function(){vB.getInstance().hc();TC.getInstance().hc()});
S("init",function(){var a=!!G("guide-module-loading");window.spf&&spf.load&&a&&(M("GUIDE_DELAY_LOAD")||rD(),sD.push(S("appbar-show-guide",rD)))});
RB(lz);RB(MA);RB(Yz);RB(PA);RB(QA);RB(lA);RB(Zz);RB(Ez);RB(SA);RB(Jz);RB(gB);RB(EA);RB(GA);RB(rB);RB(sB);RB(tB);RB(zG);RB(TC);RB(vB);RB(GG);RB(LG);RB(EB);RB(GB);RB(IB);t("yt.player.instances.create",function(a,b){a=r(a)?bf(a):a;var c=uy+"_"+Na(a),d=ty[c];if(d)return d.loadNewVideoConfig(b),d.api;d=new gy(a,c);ty[c]=d;T("player-added",d.api);Bi(d,Ua(vy,d));O(function(){d.loadNewVideoConfig(b)},0);
return d.api},void 0);
t("yt.www.watch.player.seekTo",function(){},void 0);
t("yt.www.watch.player.saveResumeOffset",function(a){var b;(b=M("PAGE_NAME"))&&"watch"!=b?(Pr(Error("getPlayer called on "+b),"WARNING"),b=null):b=wy();if(b&&b.isReady()){a&&Mr("RESUME_COOKIE_NAME",a);a=M("VIDEO_ID",void 0);var c=b.getDuration();b=Math.floor(b.getCurrentTime());0==c||120>=b||b+120>=c?IK(a):HK(a,Math.floor(b))}},void 0);
t("yt.www.lists.data.addto.saveToWatchLater",tD,void 0);t("yt.www.lists.addtowatchlater.init",yD,void 0);S("init",yD);S("dispose",function(){fz("addto-watch-later-button","click",zD);fz("addto-watch-later-button-success","click",AD);fz("addto-watch-later-button-remove","click",BD);fz("addto-watch-later-button-sign-in","click",CD);R(wD);wD=[]});
t("yt.www.watchqueue.addtowatchqueue.init",JK,void 0);S("init",JK);S("dispose",function(){nt(NK);NK.length=0;VK=[];fz("addto-watch-queue-button","click",KK);fz("addto-tv-queue-button","click",KK);fz("addto-watch-queue-button-success","click",LK);fz("addto-watch-queue-menu-choice","click",MK);Ci(uK);uK=null;nt(GK);GK.length=0;lK()});
t("yt.dom.datasets.get",V,void 0);t("yt.dom.datasets.set",ox,void 0);t("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||Wx,void 0);t("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||Xx,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||Sx,void 0);t("yt.player.exports.navigate",w("yt.player.exports.navigate")||$x,void 0);t("yt.util.activity.init",w("yt.util.activity.init")||Tt,void 0);
t("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||lg,void 0);t("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||Ut,void 0);
var NL=S("init",function(){dE();w("yt.www.page.visibilitymonitor.delegateByClass")(null,w("yt.www.page.visibilitymonitor.States.VISIBLE"),xG,"yt-thumb");w("yt.www.page.visibilitymonitor.delegateByClass")(null,w("yt.www.page.visibilitymonitor.States.VISIBLE"),xG,"yt-uix-simple-thumb-wrap");w("yt.www.page.visibilitymonitor.refresh")();Pw("tdl");nt(NL)});
S("init",function(){for(var a=0;a<document.forms.length;a++){for(var b=!1,c=0;c<WK.length;c++)document.forms[a].name==WK[c]&&(b=!0);c=document.forms[a];if("post"==c.method.toLowerCase()&&0==b){b=!1;for(var d=0;d<c.elements.length;d++)c.elements[d].name==M("XSRF_FIELD_NAME")&&(b=!0);b||(b=M("XSRF_TOKEN"),d=document.createElement("input"),d.setAttribute("name",M("XSRF_FIELD_NAME")),d.setAttribute("type","hidden"),d.setAttribute("value",b),c.appendChild(d))}}});
t("yt.www.ads.MastheadAd",QC,void 0);QC.prototype.collapse_ad=QC.prototype.Ce;QC.prototype.expand_ad=QC.prototype.yh;QC.prototype.userCollapsePremiumYva=QC.prototype.ne;t("yt.www.feed.ui.ads.workaroundIE",function(a){!VC&&UC&&(VC=!0,O(function(){a.focus()},0))},void 0);
t("yt.www.feed.ui.ads.workaroundLoad",function(){UC=!0},void 0);
t("yt.www.feed.ui.ads.writeAdsContentToIframe",function(a,b){var c=F(a);c&&(c=c.contentDocument||c.contentWindow.document,c.open(),c.write("<!DOCTYPE html><html><head></head><body>"+b+"</body></html>"),E||c.close())},void 0);
t("yt.net.ping.send",As,void 0);t("yt.tracking.doubleclick.trackActivity",function(a,b,c){a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+xd(M("DBLCLK_ADVERTISER_ID"))+";type="+xd(a)+";cat="+xd(b);c&&!c.ord&&(a+=";ord=1");for(var d in c)a+=";"+xd(d)+"="+xd(c[d]);a+=";num="+z();c=rf("IFRAME");c.src=a;c.style.display="none";document.body.appendChild(c)},void 0);
t("yt.tracking.track",zx,void 0);t("yt.tracking.share",function(a,b,c,d,e,f){var g={};b&&(g.v=b);c&&(g.list=c);d&&(g.url=d);a={name:a,locale:e,feature:f};for(var k in g)a[k]=g[k];g=fg("/sharing_services",a);As(g)},void 0);
t("yt.www.subscription.autoaction.continueAction",function(a,b,c){xw(XE,new RE(a,{itemType:b,itemId:c}))},void 0);
S("init",function(a){cG=!!a;dG.push(zw(XE,eG),zw(bF,gG));cG||dG.push(zw(aF,eG),zw(fF,gG),zw(UE,iG),zw(VE,kG),zw(iF,mG),zw(ZF,oG),zw(aG,qG),zw(YF,pG))});
S("init",function(){BF.push(zw(WE,NF),zw(wF,HF),zw(jF,GF))});
S("dispose",function(){Aw(BF);BF.length=0;R(DF);DF.length=0;rA&&(zf(rA),rA=null)});
S("init",function(){});
S("dispose",function(){R(uG);uG.length=0;Object.keys(tG).forEach(function(a){zf(tG[a])});
tG={}});
S("init",function(){M("CREATE_CHANNEL_LIGHTBOX")&&eC();M("FEED_PRIVACY_LIGHTBOX_ENABLED")&&(kC.push(S("SHOW-FEED-PRIVACY-FAVORITE-DIALOG",rC)),kC.push(S("SHOW-FEED-PRIVACY-LIKE-DIALOG",qC)),kC.push(S("SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG",sC)),kC.push(S("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG",tC)),kC.push(S("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",pC)));if(M("SHOW_IDENTITY_PROMPT_LIGHTBOX")){var a=bC(uC);var b=M("IDENTITY_PROMPT_NEXT_URL",document.location.href),c=M("IDENTITY_PROMPT_AUTHUSER",void 0),
d=M("IDENTITY_PROMPT_PAGEID",void 0),e={};c&&(e.authuser=c);d&&(e.pageid=d);a.open("identity-prompt","/identity_prompt_ajax","identity_prompt_ajax",!0,!0,void 0,b,!0,e)}M("SHOW_MCNA_YPE_MODAL")&&new KC("")});
S("dispose",function(){});
t("yt.www.account.AddNewChannelLoader.init",function(){var a=bC(cC);a.l=M("ADD_NEW_CHANNEL_PAGE_ID",void 0)||null;a.init(M("ADD_NEW_CHANNEL_CSS_URL",void 0),M("ADD_NEW_CHANNEL_JS_URL",void 0),!a.l,F("body-container"),"add-secondary-channel")},void 0);
t("yt.www.account.CreateChannelLoader.show",function(a,b,c,d){eC(!0,a,b,c,d)},void 0);
S("init",ML);t("yt.ypc.bootstrap.init",ML,void 0);var OL=S("init",function(){M("PAGEFRAME_JS")&&ux(M("PAGEFRAME_JS",void 0),function(){w("ytbin.www.pageframe.setup")()});
nt(OL)});}).call(this);
