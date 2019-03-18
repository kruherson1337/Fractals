{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.j4(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ff"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ff"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ff(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={f0:function f0(){},
i4:function(a,b,c,d){H.p(a,"$iz",[c],"$az")
H.b(b,{func:1,ret:d,args:[c]})
return new H.cF(a,b,[c,d])},
cE:function cE(){},
aF:function aF(){},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
d0:function d0(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
aD:function aD(){},
ay:function(a){var u,t
u=H.t(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
iR:function(a){return v.types[H.G(a)]},
jL:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.x(a).$ibG},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.co(a)
if(typeof u!=="string")throw H.f(H.eD(a))
return u},
aJ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ia:function(a){var u,t
if(typeof a!=="string")H.V(H.eD(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.hL(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bc:function(a){return H.i7(a)+H.eA(H.aw(a),0,null)},
i7:function(a){var u,t,s,r,q,p,o,n,m
u=J.x(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.S||!!u.$ias){p=C.o(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ay(r.length>1&&C.d.a6(r,0)===36?C.d.bY(r,1):r)},
i8:function(){return Date.now()},
i9:function(){var u,t
if($.db!=null)return
$.db=1000
$.dc=H.iw()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.db=1e6
$.dc=new H.da(t)},
R:function(a){throw H.f(H.eD(a))},
j:function(a,b){if(a==null)J.cn(a)
throw H.f(H.bu(a,b))},
bu:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
u=H.G(J.cn(a))
if(!(b<0)){if(typeof u!=="number")return H.R(u)
t=b>=u}else t=!0
if(t)return P.eZ(b,a,"index",null,u)
return P.bP(b,"index")},
eD:function(a){return new P.ac(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.aI()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.hr})
u.name=""}else u.toString=H.hr
return u},
hr:function(){return J.co(this.dartException)},
V:function(a){throw H.f(a)},
fl:function(a){throw H.f(P.b1(a))},
a9:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.o([],[P.w])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.dK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
dL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
fQ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
fN:function(a,b){return new H.d7(a,b==null?null:b.method)},
f1:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.cS(a,t,u?null:b.receiver)},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.eT(a)
if(a==null)return
if(a instanceof H.b5)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.d0(s,16)&8191)===10)switch(r){case 438:return u.$1(H.f1(H.d(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.fN(H.d(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.hw()
p=$.hx()
o=$.hy()
n=$.hz()
m=$.hC()
l=$.hD()
k=$.hB()
$.hA()
j=$.hF()
i=$.hE()
h=q.C(t)
if(h!=null)return u.$1(H.f1(H.t(t),h))
else{h=p.C(t)
if(h!=null){h.method="call"
return u.$1(H.f1(H.t(t),h))}else{h=o.C(t)
if(h==null){h=n.C(t)
if(h==null){h=m.C(t)
if(h==null){h=l.C(t)
if(h==null){h=k.C(t)
if(h==null){h=n.C(t)
if(h==null){h=j.C(t)
if(h==null){h=i.C(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.fN(H.t(t),h))}}return u.$1(new H.dN(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.c1()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ac(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.c1()
return a},
ax:function(a){var u
if(a instanceof H.b5)return a.b
if(a==null)return new H.cf(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.cf(a)},
iN:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.t(0,a[t],a[s])}return b},
iW:function(a,b,c,d,e,f){H.k(a,"$ieY")
switch(H.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.e6("Unsupported number of arguments for wrapped closure"))},
aT:function(a,b){var u
H.G(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.iW)
a.$identity=u
return u},
hS:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.dD().constructor.prototype):Object.create(new H.aZ(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.a1
if(typeof q!=="number")return q.F()
$.a1=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.fC(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.iR,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.fz:H.eV
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.f("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.fC(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
hP:function(a,b,c,d){var u=H.eV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
fC:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.hR(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.hP(t,!r,u,b)
if(t===0){r=$.a1
if(typeof r!=="number")return r.F()
$.a1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.b_
if(q==null){q=H.cy("self")
$.b_=q}return new Function(r+H.d(q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a1
if(typeof r!=="number")return r.F()
$.a1=r+1
o+=r
r="return function("+o+"){return this."
q=$.b_
if(q==null){q=H.cy("self")
$.b_=q}return new Function(r+H.d(q)+"."+H.d(u)+"("+o+");}")()},
hQ:function(a,b,c,d){var u,t
u=H.eV
t=H.fz
switch(b?-1:a){case 0:throw H.f(H.ih("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
hR:function(a,b){var u,t,s,r,q,p,o,n
u=$.b_
if(u==null){u=H.cy("self")
$.b_=u}t=$.fy
if(t==null){t=H.cy("receiver")
$.fy=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.hQ(r,!p,s,b)
if(r===1){u="return function(){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+");"
t=$.a1
if(typeof t!=="number")return t.F()
$.a1=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+", "+n+");"
t=$.a1
if(typeof t!=="number")return t.F()
$.a1=t+1
return new Function(u+t+"}")()},
ff:function(a,b,c,d,e,f,g){return H.hS(a,b,H.G(c),d,!!e,!!f,g)},
eV:function(a){return a.a},
fz:function(a){return a.c},
cy:function(a){var u,t,s,r,q
u=new H.aZ("self","target","receiver","name")
t=J.fG(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.Z(a,"String"))},
jJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.Z(a,"double"))},
eR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.Z(a,"num"))},
jF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.Z(a,"bool"))},
G:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.Z(a,"int"))},
fj:function(a,b){throw H.f(H.Z(a,H.ay(H.t(b).substring(2))))},
j3:function(a,b){throw H.f(H.fB(a,H.ay(H.t(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.fj(a,b)},
iV:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.x(a)[b]
else u=!0
if(u)return a
H.j3(a,b)},
jN:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.x(a)[b])return a
H.fj(a,b)},
cl:function(a){if(a==null)return a
if(!!J.x(a).$ir)return a
throw H.f(H.Z(a,"List<dynamic>"))},
iX:function(a,b){var u
if(a==null)return a
u=J.x(a)
if(!!u.$ir)return a
if(u[b])return a
H.fj(a,b)},
hj:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.G(u)]
else return a.$S()}return},
aU:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.hj(J.x(a))
if(u==null)return!1
return H.h3(u,null,b,null)},
b:function(a,b){var u,t
if(a==null)return a
if($.fb)return a
$.fb=!0
try{if(H.aU(a,b))return a
u=H.aW(b)
t=H.Z(a,u)
throw H.f(t)}finally{$.fb=!1}},
aV:function(a,b){if(a!=null&&!H.fe(a,b))H.V(H.Z(a,H.aW(b)))
return a},
Z:function(a,b){return new H.c5("TypeError: "+P.cG(a)+": type '"+H.ha(a)+"' is not a subtype of type '"+b+"'")},
fB:function(a,b){return new H.cz("CastError: "+P.cG(a)+": type '"+H.ha(a)+"' is not a subtype of type '"+b+"'")},
ha:function(a){var u,t
u=J.x(a)
if(!!u.$ib0){t=H.hj(u)
if(t!=null)return H.aW(t)
return"Closure"}return H.bc(a)},
j4:function(a){throw H.f(new P.cC(H.t(a)))},
ih:function(a){return new H.dv(a)},
hm:function(a){return v.getIsolateTag(a)},
o:function(a,b){a.$ti=b
return a},
aw:function(a){if(a==null)return
return a.$ti},
jK:function(a,b,c){return H.aX(a["$a"+H.d(c)],H.aw(b))},
fg:function(a,b,c,d){var u
H.t(c)
H.G(d)
u=H.aX(a["$a"+H.d(c)],H.aw(b))
return u==null?null:u[d]},
eJ:function(a,b,c){var u
H.t(b)
H.G(c)
u=H.aX(a["$a"+H.d(b)],H.aw(a))
return u==null?null:u[c]},
e:function(a,b){var u
H.G(b)
u=H.aw(a)
return u==null?null:u[b]},
aW:function(a){return H.av(a,null)},
av:function(a,b){var u,t
H.p(b,"$ir",[P.w],"$ar")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ay(a[0].name)+H.eA(a,1,b)
if(typeof a=="function")return H.ay(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.G(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.d(b[t])}if('func' in a)return H.iu(a,b)
if('futureOr' in a)return"FutureOr<"+H.av("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iu:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.w]
H.p(b,"$ir",u,"$ar")
if("bounds" in a){t=a.bounds
if(b==null){b=H.o([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.j(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.j(b,m)
o=C.d.F(o,b[m])
l=t[p]
if(l!=null&&l!==P.m)o+=" extends "+H.av(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.av(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.av(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.av(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.iM(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.t(u[g])
i=i+h+H.av(d[c],b)+(" "+H.d(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
eA:function(a,b,c){var u,t,s,r,q,p
H.p(c,"$ir",[P.w],"$ar")
if(a==null)return""
u=new P.bg("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.av(p,c)}return"<"+u.h(0)+">"},
aX:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
F:function(a,b,c,d){var u,t
H.t(b)
H.cl(c)
H.t(d)
if(a==null)return!1
u=H.aw(a)
t=J.x(a)
if(t[b]==null)return!1
return H.he(H.aX(t[d],u),null,c,null)},
fk:function(a,b,c,d){H.t(b)
H.cl(c)
H.t(d)
if(a==null)return a
if(H.F(a,b,c,d))return a
throw H.f(H.fB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ay(b.substring(2))+H.eA(c,0,null),v.mangledGlobalNames)))},
p:function(a,b,c,d){H.t(b)
H.cl(c)
H.t(d)
if(a==null)return a
if(H.F(a,b,c,d))return a
throw H.f(H.Z(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ay(b.substring(2))+H.eA(c,0,null),v.mangledGlobalNames)))},
hf:function(a,b,c,d,e){H.t(c)
H.t(d)
H.t(e)
if(!H.Q(a,null,b,null))H.j5("TypeError: "+H.d(c)+H.aW(a)+H.d(d)+H.aW(b)+H.d(e))},
j5:function(a){throw H.f(new H.c5(H.t(a)))},
he:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.Q(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.Q(a[t],b,c[t],d))return!1
return!0},
jG:function(a,b,c){return a.apply(b,H.aX(J.x(b)["$a"+H.d(c)],H.aw(b)))},
ho:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="m"||a.name==="q"||a===-1||a===-2||H.ho(u)}return!1},
fe:function(a,b){var u,t
if(a==null)return b==null||b.name==="m"||b.name==="q"||b===-1||b===-2||H.ho(b)
if(b==null||b===-1||b.name==="m"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.fe(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aU(a,b)}u=J.x(a).constructor
t=H.aw(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.Q(u,null,b,null)},
i:function(a,b){if(a!=null&&!H.fe(a,b))throw H.f(H.Z(a,H.aW(b)))
return a},
Q:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="m"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="m"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Q(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="q")return!0
if('func' in c)return H.h3(a,b,c,d)
if('func' in a)return c.name==="eY"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.Q("type" in a?a.type:null,b,s,d)
else if(H.Q(a,b,s,d))return!0
else{if(!('$i'+"B" in t.prototype))return!1
r=t.prototype["$a"+"B"]
q=H.aX(r,u?a.slice(1):null)
return H.Q(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.he(H.aX(m,u),b,p,d)},
h3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.Q(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.Q(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.Q(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.Q(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.j1(h,b,g,d)},
j1:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.Q(c[r],d,a[r],b))return!1}return!0},
i2:function(a,b){return new H.a5([a,b])},
jH:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
iY:function(a){var u,t,s,r,q,p
u=H.t($.hn.$1(a))
t=$.eG[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.eN[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.t($.hd.$2(a,u))
if(u!=null){t=$.eG[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.eN[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.eQ(s)
$.eG[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.eN[u]=s
return s}if(q==="-"){p=H.eQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.hp(a,s)
if(q==="*")throw H.f(P.fR(u))
if(v.leafTags[u]===true){p=H.eQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.hp(a,s)},
hp:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.fi(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
eQ:function(a){return J.fi(a,!1,null,!!a.$ibG)},
j_:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.eQ(u)
else return J.fi(u,c,null,null)},
iT:function(){if(!0===$.fh)return
$.fh=!0
H.iU()},
iU:function(){var u,t,s,r,q,p,o,n
$.eG=Object.create(null)
$.eN=Object.create(null)
H.iS()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.hq.$1(q)
if(p!=null){o=H.j_(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
iS:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.aS(C.J,H.aS(C.K,H.aS(C.p,H.aS(C.p,H.aS(C.L,H.aS(C.M,H.aS(C.N(C.o),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.hn=new H.eK(q)
$.hd=new H.eL(p)
$.hq=new H.eM(o)},
aS:function(a,b){return a(b)||b},
i1:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(P.fE("Illegal RegExp pattern ("+String(r)+")",a))},
da:function da(a){this.a=a},
dK:function dK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d7:function d7(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a){this.a=a},
b5:function b5(a,b){this.a=a
this.b=b},
eT:function eT(a){this.a=a},
cf:function cf(a){this.a=a
this.b=null},
b0:function b0(){},
dG:function dG(){},
dD:function dD(){},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a){this.a=a},
cz:function cz(a){this.a=a},
dv:function dv(a){this.a=a},
bh:function bh(a){this.a=a
this.d=this.b=null},
a5:function a5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cR:function cR(a){this.a=a},
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cV:function cV(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eK:function eK(a){this.a=a},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
cQ:function cQ(a,b){this.a=a
this.b=b
this.c=null},
em:function em(a){this.b=a},
h0:function(a,b,c){},
h_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bu(b,a))},
bL:function bL(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
d5:function d5(){},
d6:function d6(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
iM:function(a){return J.hZ(a?Object.keys(a):[],null)},
j2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
fi:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eI:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.fh==null){H.iT()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.fR("Return interceptor for "+H.d(t(a,u))))}r=a.constructor
q=r==null?null:r[$.fm()]
if(q!=null)return q
q=H.iY(a)
if(q!=null)return q
if(typeof a=="function")return C.U
t=Object.getPrototypeOf(a)
if(t==null)return C.u
if(t===Object.prototype)return C.u
if(typeof r=="function"){Object.defineProperty(r,$.fm(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
hZ:function(a,b){return J.fG(H.o(a,[b]))},
fG:function(a){H.cl(a)
a.fixed$length=Array
return a},
fH:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
i_:function(a,b){var u,t
for(u=a.length;b<u;){t=C.d.a6(a,b)
if(t!==32&&t!==13&&!J.fH(t))break;++b}return b},
i0:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.d.bv(a,u)
if(t!==32&&t!==13&&!J.fH(t))break}return b},
x:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bE.prototype
return J.cP.prototype}if(typeof a=="string")return J.aE.prototype
if(a==null)return J.bF.prototype
if(typeof a=="boolean")return J.cO.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.m)return a
return J.eI(a)},
hk:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.m)return a
return J.eI(a)},
hl:function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.m)return a
return J.eI(a)},
iO:function(a){if(typeof a=="number")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.as.prototype
return a},
iP:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.as.prototype
return a},
ck:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
return a}if(a instanceof P.m)return a
return J.eI(a)},
iQ:function(a){if(a==null)return a
if(!(a instanceof P.m))return J.as.prototype
return a},
eU:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).u(a,b)},
hH:function(a,b,c,d){return J.ck(a).c9(a,b,c,d)},
hI:function(a,b,c,d){return J.ck(a).cU(a,b,c,d)},
hJ:function(a,b){return J.hl(a).R(a,b)},
az:function(a){return J.x(a).gi(a)},
fu:function(a){return J.hl(a).gw(a)},
cn:function(a){return J.hk(a).gk(a)},
fv:function(a){return J.iQ(a).gM(a)},
co:function(a){return J.x(a).h(a)},
hK:function(a,b){return J.iO(a).dU(a,b)},
hL:function(a){return J.iP(a).dW(a)},
y:function y(){},
cO:function cO(){},
bF:function bF(){},
bH:function bH(){},
d9:function d9(){},
as:function as(){},
an:function an(){},
am:function am(a){this.$ti=a},
f_:function f_(a){this.$ti=a},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
b8:function b8(){},
bE:function bE(){},
cP:function cP(){},
aE:function aE(){}},P={
im:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.iF()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.aT(new P.dV(u),1)).observe(t,{childList:true})
return new P.dU(u,t,s)}else if(self.setImmediate!=null)return P.iG()
return P.iH()},
io:function(a){self.scheduleImmediate(H.aT(new P.dW(H.b(a,{func:1,ret:-1})),0))},
ip:function(a){self.setImmediate(H.aT(new P.dX(H.b(a,{func:1,ret:-1})),0))},
iq:function(a){H.b(a,{func:1,ret:-1})
P.ir(0,a)},
ir:function(a,b){var u=new P.eu()
u.c7(a,b)
return u},
h4:function(a){return new P.c7(new P.cg(new P.v(0,$.n,[a]),[a]),!1,[a])},
fZ:function(a,b){H.b(a,{func:1,ret:-1,args:[P.A,,]})
H.k(b,"$ic7")
a.$2(0,null)
b.b=!0
return b.a.a},
fW:function(a,b){P.is(a,H.b(b,{func:1,ret:-1,args:[P.A,,]}))},
fY:function(a,b){H.k(b,"$ieW").D(0,a)},
fX:function(a,b){H.k(b,"$ieW").P(H.a0(a),H.ax(a))},
is:function(a,b){var u,t,s,r
H.b(b,{func:1,ret:-1,args:[P.A,,]})
u=new P.ex(b)
t=new P.ey(b)
s=J.x(a)
if(!!s.$iv)a.aB(u,t,null)
else if(!!s.$iB)a.a3(u,t,null)
else{r=new P.v(0,$.n,[null])
H.i(a,null)
r.a=4
r.c=a
r.aB(u,null,null)}},
hb:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.n.aR(new P.eC(u),P.q,P.A,null)},
hW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
m={}
u=null
t=!1
H.p(a,"$iz",[[P.B,b]],"$az")
l=[[P.r,b]]
s=new P.v(0,$.n,l)
m.a=null
m.b=0
m.c=null
m.d=null
r=new P.cL(m,u,t,s)
try{for(k=a,j=J.x(k),k=new H.ba(k,j.gk(k),0,[H.fg(j,k,"aF",0)]);k.m();){q=k.d
p=m.b
q.a3(new P.cK(m,p,s,u,t,b),r,null);++m.b}k=m.b
if(k===0){k=new P.v(0,$.n,l)
k.b6(C.V)
return k}k=new Array(k)
k.fixed$length=Array
m.a=H.o(k,[b])}catch(i){o=H.a0(i)
n=H.ax(i)
if(m.b===0||t){h=o
if(h==null)h=new P.aI()
k=$.n
if(k!==C.c)k.toString
l=new P.v(0,k,l)
l.b7(h,n)
return l}else{m.c=o
m.d=n}}return s},
fS:function(a,b){var u,t,s
b.a=1
try{a.a3(new P.eb(b),new P.ec(b),null)}catch(s){u=H.a0(s)
t=H.ax(s)
P.eS(new P.ed(b,u,t))}},
ea:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iv")
if(u>=4){t=b.a8()
b.a=a.a
b.c=a.c
P.aO(b,t)}else{t=H.k(b.c,"$iU")
b.a=2
b.c=a
a.bj(t)}},
aO:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iH")
t=t.b
p=q.a
o=q.b
t.toString
P.cj(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.aO(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.k(m,"$iH")
t=t.b
p=m.a
o=m.b
t.toString
P.cj(null,null,t,p,o)
return}j=$.n
if(j!=l)$.n=l
else j=null
t=b.c
if(t===8)new P.ei(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.eh(s,b,m).$0()}else if((t&2)!==0)new P.eg(u,s,b).$0()
if(j!=null)$.n=j
t=s.b
if(!!J.x(t).$iB){if(t.a>=4){i=H.k(o.c,"$iU")
o.c=null
b=o.a9(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ea(t,o)
return}}h=b.b
i=H.k(h.c,"$iU")
h.c=null
b=h.a9(i)
t=s.a
p=s.b
if(!t){H.i(p,H.e(h,0))
h.a=4
h.c=p}else{H.k(p,"$iH")
h.a=8
h.c=p}u.a=h
t=h}},
h6:function(a,b){if(H.aU(a,{func:1,args:[P.m,P.u]}))return b.aR(a,null,P.m,P.u)
if(H.aU(a,{func:1,args:[P.m]})){b.toString
return H.b(a,{func:1,ret:null,args:[P.m]})}throw H.f(P.fw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ix:function(){var u,t
for(;u=$.aR,u!=null;){$.bt=null
t=u.b
$.aR=t
if(t==null)$.bs=null
u.a.$0()}},
iC:function(){$.fc=!0
try{P.ix()}finally{$.bt=null
$.fc=!1
if($.aR!=null)$.fo().$1(P.hh())}},
h9:function(a){var u=new P.c8(H.b(a,{func:1,ret:-1}))
if($.aR==null){$.bs=u
$.aR=u
if(!$.fc)$.fo().$1(P.hh())}else{$.bs.b=u
$.bs=u}},
iB:function(a){var u,t,s
H.b(a,{func:1,ret:-1})
u=$.aR
if(u==null){P.h9(a)
$.bt=$.bs
return}t=new P.c8(a)
s=$.bt
if(s==null){t.b=u
$.bt=t
$.aR=t}else{t.b=s.b
s.b=t
$.bt=t
if(t.b==null)$.bs=t}},
eS:function(a){var u,t
u={func:1,ret:-1}
H.b(a,u)
t=$.n
if(C.c===t){P.au(null,null,C.c,a)
return}t.toString
P.au(null,null,t,H.b(t.bs(a),u))},
jh:function(a,b){return new P.et(H.p(a,"$ibf",[b],"$abf"),[b])},
ag:function(a){return new P.dT(null,null,0,[a])},
iA:function(a){return},
h5:function(a,b){var u=$.n
u.toString
P.cj(null,null,u,a,b)},
iy:function(){},
cj:function(a,b,c,d,e){var u={}
u.a=d
P.iB(new P.eB(u,e))},
h7:function(a,b,c,d,e){var u,t
H.b(d,{func:1,ret:e})
t=$.n
if(t===c)return d.$0()
$.n=c
u=t
try{t=d.$0()
return t}finally{$.n=u}},
h8:function(a,b,c,d,e,f,g){var u,t
H.b(d,{func:1,ret:f,args:[g]})
H.i(e,g)
t=$.n
if(t===c)return d.$1(e)
$.n=c
u=t
try{t=d.$1(e)
return t}finally{$.n=u}},
iz:function(a,b,c,d,e,f,g,h,i){var u,t
H.b(d,{func:1,ret:g,args:[h,i]})
H.i(e,h)
H.i(f,i)
t=$.n
if(t===c)return d.$2(e,f)
$.n=c
u=t
try{t=d.$2(e,f)
return t}finally{$.n=u}},
au:function(a,b,c,d){var u
H.b(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.bs(d):c.de(d,-1)
P.h9(d)},
dV:function dV(a){this.a=a},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a},
dX:function dX(a){this.a=a},
eu:function eu(){},
ev:function ev(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
dS:function dS(a,b){this.a=a
this.b=b},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a},
ey:function ey(a){this.a=a},
eC:function eC(a){this.a=a},
dY:function dY(a,b){this.a=a
this.$ti=b},
K:function K(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
dZ:function dZ(){},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=_.e=_.d=null
_.$ti=d},
B:function B(){},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cK:function cK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ca:function ca(){},
c9:function c9(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b){this.a=a
this.$ti=b},
U:function U(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
e7:function e7(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
eb:function eb(a){this.a=a},
ec:function ec(a){this.a=a},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ej:function ej(a){this.a=a},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a){this.a=a
this.b=null},
bf:function bf(){},
dE:function dE(a,b){this.a=a
this.b=b},
dF:function dF(a,b){this.a=a
this.b=b},
a7:function a7(){},
cb:function cb(){},
e0:function e0(){},
e_:function e_(){},
es:function es(){},
e2:function e2(){},
e1:function e1(a,b){this.b=a
this.a=null
this.$ti=b},
bq:function bq(){},
en:function en(a,b){this.a=a
this.b=b},
br:function br(a,b){var _=this
_.c=_.b=null
_.a=a
_.$ti=b},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
et:function et(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
H:function H(a,b){this.a=a
this.b=b},
ew:function ew(){},
eB:function eB(a,b){this.a=a
this.b=b},
eo:function eo(){},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function(a,b,c){H.cl(a)
return H.p(H.iN(a,new H.a5([b,c])),"$ifK",[b,c],"$afK")},
hY:function(a,b,c){var u,t
if(P.fd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.o([],[P.w])
t=$.bv()
C.a.j(t,a)
try{P.iv(a,u)}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}t=P.fP(b,H.iX(u,"$iz"),", ")+c
return t.charCodeAt(0)==0?t:t},
fF:function(a,b,c){var u,t,s
if(P.fd(a))return b+"..."+c
u=new P.bg(b)
t=$.bv()
C.a.j(t,a)
try{s=u
s.a=P.fP(s.a,a,", ")}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
fd:function(a){var u,t
for(u=0;t=$.bv(),u<t.length;++u)if(a===t[u])return!0
return!1},
iv:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.p(b,"$ir",[P.w],"$ar")
u=a.gw(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.m())return
r=H.d(u.gp())
C.a.j(b,r)
t+=r.length+2;++s}if(!u.m()){if(s<=5)return
if(0>=b.length)return H.j(b,-1)
q=b.pop()
if(0>=b.length)return H.j(b,-1)
p=b.pop()}else{o=u.gp();++s
if(!u.m()){if(s<=4){C.a.j(b,H.d(o))
return}q=H.d(o)
if(0>=b.length)return H.j(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gp();++s
for(;u.m();o=n,n=m){m=u.gp();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2;--s}C.a.j(b,"...")
return}}p=H.d(o)
q=H.d(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.j(b,l)
C.a.j(b,p)
C.a.j(b,q)},
fM:function(a){var u,t
t={}
if(P.fd(a))return"{...}"
u=new P.bg("")
try{C.a.j($.bv(),a)
u.a+="{"
t.a=!0
a.K(0,new P.cZ(t,u))
u.a+="}"}finally{t=$.bv()
if(0>=t.length)return H.j(t,-1)
t.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
a6:function a6(){},
cY:function cY(){},
cZ:function cZ(a,b){this.a=a
this.b=b},
d_:function d_(){},
iL:function(a){var u=H.ia(a)
if(u!=null)return u
throw H.f(P.fE("Invalid double",a))},
hV:function(a){if(a instanceof H.b0)return a.h(0)
return"Instance of '"+H.bc(a)+"'"},
f2:function(a,b,c){var u,t
u=H.o([],[c])
for(t=a.gw(a);t.m();)C.a.j(u,H.i(t.gp(),c))
return u},
id:function(a){return new H.cQ(a,H.i1(a,!1,!0,!1))},
fP:function(a,b,c){var u=J.fu(b)
if(!u.m())return a
if(c.length===0){do a+=H.d(u.gp())
while(u.m())}else{a+=H.d(u.gp())
for(;u.m();)a=a+c+H.d(u.gp())}return a},
fD:function(){return new P.ad()},
cG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.co(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hV(a)},
bw:function(a){return new P.ac(!1,null,null,a)},
fw:function(a,b,c){return new P.ac(!0,a,b,c)},
bP:function(a,b){return new P.bN(null,null,!0,a,b,"Value not in range")},
bO:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
ic:function(a,b,c){if(0>a||a>c)throw H.f(P.bO(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.bO(b,a,c,"end",null))
return b}return c},
ib:function(a,b){if(typeof a!=="number")return a.b_()
if(a<0)throw H.f(P.bO(a,0,null,b,null))},
eZ:function(a,b,c,d,e){var u=H.G(e==null?J.cn(b):e)
return new P.cM(u,!0,a,c,"Index out of range")},
a_:function(a){return new P.dO(a)},
fR:function(a){return new P.dM(a)},
Y:function(a){return new P.be(a)},
b1:function(a){return new P.cA(a)},
fE:function(a,b){return new P.cJ(a,b,null)},
L:function L(){},
ab:function ab(){},
ad:function ad(){},
aI:function aI(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cM:function cM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dO:function dO(a){this.a=a},
dM:function dM(a){this.a=a},
be:function be(a){this.a=a},
cA:function cA(a){this.a=a},
d8:function d8(){},
c1:function c1(){},
cC:function cC(a){this.a=a},
e6:function e6(a){this.a=a},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
A:function A(){},
z:function z(){},
ae:function ae(){},
r:function r(){},
q:function q(){},
l:function l(){},
m:function m(){},
u:function u(){},
f6:function f6(){this.b=this.a=0},
w:function w(){},
bg:function bg(a){this.a=a},
iK:function(a){var u={}
a.K(0,new P.eF(u))
return u},
hT:function(a){var u,t,s
try{t=document.createEvent(a)
t.initEvent("",!0,!0)
u=t
return!!J.x(u).$ia}catch(s){H.a0(s)}return!1},
eF:function eF(a){this.a=a},
fT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
by:function by(){},
a2:function a2(){},
bM:function bM(){},
aq:function aq(){},
c3:function c3(){},
bi:function bi(){}},W={
j6:function(){return window},
hO:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
hU:function(a){H.k(a,"$iaB")
return"wheel"},
hX:function(){var u=document.createElement("img")
return u},
ek:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fU:function(a,b,c,d){var u,t
u=W.ek(W.ek(W.ek(W.ek(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
E:function(a,b,c,d,e){var u=W.hc(new W.e5(c),W.a)
u=new W.e4(a,b,u,!1,[e])
u.d6()
return u},
hc:function(a,b){var u
H.b(a,{func:1,ret:-1,args:[b]})
u=$.n
if(u===C.c)return a
return u.df(a,b)},
h:function h(){},
cp:function cp(){},
cq:function cq(){},
aj:function aj(){},
bz:function bz(){},
b2:function b2(){},
cB:function cB(){},
cD:function cD(){},
bA:function bA(){},
c:function c(){},
a:function a(){},
aB:function aB(){},
cI:function cI(){},
a4:function a4(){},
af:function af(){},
bb:function bb(){},
S:function S(){},
aH:function aH(){},
dw:function dw(){},
a8:function a8(){},
ah:function ah(){},
dH:function dH(){},
ar:function ar(){},
dP:function dP(){},
aa:function aa(){},
bk:function bk(){},
cd:function cd(){},
e3:function e3(){},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
e4:function e4(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
e5:function e5(a){this.a=a},
b6:function b6(){},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cc:function cc(){},
ch:function ch(){},
ci:function ci(){}},K={
fJ:function(){var u,t
u=new K.cT(0,P.ag(P.l))
t=new K.c6()
u.a=t
u.b=t
return u},
il:function(a){return a},
ij:function(a){var u
a*=2
if(a<1)u=0.5*(a*a*a)
else{a=1-(a-1)
u=0.5*(1-a*a*a)+0.5}return u},
ik:function(a){if(a<0.36363636363636365)return 7.5625*a*a
else if(a<0.7272727272727273){a-=0.5454545454545454
return 7.5625*a*a+0.75}else if(a<0.9090909090909091){a-=0.8181818181818182
return 7.5625*a*a+0.9375}else{a-=0.9545454545454546
return 7.5625*a*a+0.984375}},
c6:function c6(){this.b=this.a=null},
cT:function cT(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b},
dI:function dI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=d
_.x=e
_.Q=_.z=!1},
c4:function c4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dJ:function dJ(a,b){this.a=a
this.b=b}},A={
fx:function(a,b){var u,t,s,r,q,p,o,n
b=$.hs()
u=A.hN(a,b.d)
t=u.b
s=u.c
b.e
r=W.hX()
q=W.a4
p=new P.v(0,$.n,[q])
o=new N.bC(r,new P.c9(p,[q]),t)
q=W.a
n={func:1,ret:-1,args:[q]}
o.d=W.E(r,"load",H.b(o.gcK(),n),!1,q)
o.e=W.E(r,"error",H.b(o.gcI(),n),!1,q)
r.src=t
return p.a2(new A.cw(s),A.W)},
hN:function(a,b){var u=new A.ct()
u.c3(a,b)
return u},
ii:function(a,b,c,d){var u,t,s,r,q,p,o,n
u=P.l
t=T.N()
s=T.N()
r=T.N()
q=H.o([],[A.at])
p=H.o([new A.aP("mouseDown","mouseUp","click","doubleClick"),new A.aP("middleMouseDown","middleMouseUp","middleClick","middleClick"),new A.aP("rightMouseDown","rightMouseUp","rightClick","rightClick")],[A.aP])
o=K.fJ()
n=H.o([],[A.a3])
$.ak=$.ak+1
n=new A.J(1,0,0,0,0,new U.X(0,0,0,0,[u]),t,s,r,new R.aK("render",!1),C.i,C.l,C.m,C.h,"default",new U.C(0,0,[u]),q,new H.a5([P.A,A.aQ]),p,o,4294967295,n,"auto",0,0,0,0,1,1,0,0,0,1,H.o([],[A.aY]),T.N())
n.c5(a,b,c,d)
return n},
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.k3=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=!0
_.cy=!1
_.dx=_.db=null
_.dy=l
_.fy=_.fr=null
_.go=m
_.id=!0
_.a=null},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a){this.a=a},
ct:function ct(){this.c=this.b=this.a=null},
cu:function cu(a){this.a=a},
cv:function cv(a){this.c=!1
this.d=a
this.e=!1},
aY:function aY(){},
a3:function a3(){},
b3:function b3(){},
bD:function bD(){},
dg:function dg(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.a=!1},
dh:function dh(a){this.a=a},
di:function di(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.ae=_.E=null
_.I=a
_.dz=!0
_.k3=!1
_.k4=!0
_.r1=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=!0
_.cy=!1
_.dx=_.db=null
_.dy=m
_.fy=_.fr=null
_.go=n
_.id=!0
_.a=null},
bd:function bd(a){this.b=a},
aM:function aM(a){this.b=a},
T:function T(a){this.b=a},
J:function J(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var _=this
_.J=_.ae=_.S=_.E=null
_.bJ=_.bI=_.bH=_.bG=0
_.af=a
_.dA=!1
_.aL=b
_.aM=c
_.aN=d
_.aO=e
_.dB=f
_.ag=g
_.bK=h
_.bz=i
_.dr=j
_.H=null
_.aH=k
_.ad=l
_.bA=m
_.bB=n
_.bC=o
_.bD=p
_.aI=null
_.bE=q
_.bF=r
_.ds=s
_.aJ=t
_.e2=null
_.aK=u
_.du=_.dt=!0
_.dw=_.dv=!1
_.I=a0
_.dz=!0
_.k3=!1
_.k4=!0
_.r1=a1
_.c=a2
_.d=a3
_.e=a4
_.f=a5
_.r=a6
_.x=a7
_.y=a8
_.z=a9
_.Q=b0
_.ch=b1
_.cx=!0
_.cy=!1
_.dx=_.db=null
_.dy=b2
_.fy=_.fr=null
_.go=b3
_.id=!0
_.a=null},
dC:function dC(a){this.a=a},
dz:function dz(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
c2:function c2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.ry=_.rx=0
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.ch=n
_.cx=!0
_.cy=!1
_.dx=_.db=null
_.dy=o
_.fy=_.fr=null
_.go=p
_.id=!0
_.a=null},
dy:function dy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.x=_.r=!1
_.y=g
_.Q=_.z=!0
_.cx=_.ch=!1},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.x=_.r=0},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(){}},L={
h1:function(){var u,t
if($.fa===-1){u=window
t=H.b(new L.ez(),{func:1,ret:-1,args:[P.l]})
C.H.cp(u)
$.fa=C.H.cW(u,W.hc(t,P.l))}},
ie:function(a){var u,t
u=T.N()
t=new T.aG(new Float32Array(16))
t.X()
t=new L.bl(1,C.e,u,t,null)
u=new L.dk(a,t)
u.e=t
return u},
f5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
u=new Int16Array(6)
t=new Float32Array(16)
s=new L.c_(a,b,c,d,e,u,t)
r=d===0
if(r||d===2){q=0-c.a
p=q/e
t[12]=p
t[0]=p
p=0-c.b
o=p/e
t[5]=o
t[1]=o
q=(q+b.c)/e
t[4]=q
t[8]=q
p=(p+b.d)/e
t[13]=p
t[9]=p}else if(d===1||d===3){q=0-c.a
p=q/e
t[12]=p
t[0]=p
p=0-c.b
o=p/e
t[5]=o
t[1]=o
q=(q+b.d)/e
t[4]=q
t[8]=q
p=(p+b.c)/e
t[13]=p
t[9]=p}else H.V(P.fD())
if(r){r=b.a
q=a.a
p=r/q
t[14]=p
t[2]=p
p=b.b
o=a.b
n=p/o
t[7]=n
t[3]=n
n=H.e(b,0)
q=H.i(r+b.c,n)/q
t[6]=q
t[10]=q
o=H.i(p+b.d,n)/o
t[15]=o
t[11]=o}else if(d===1){r=b.a
q=H.e(b,0)
p=H.i(r+b.c,q)
o=a.a
p/=o
t[6]=p
t[2]=p
p=b.b
n=a.b
m=p/n
t[15]=m
t[3]=m
o=r/o
t[14]=o
t[10]=o
n=H.i(p+b.d,q)/n
t[7]=n
t[11]=n}else if(d===2){r=b.a
q=H.e(b,0)
p=H.i(r+b.c,q)
o=a.a
p/=o
t[14]=p
t[2]=p
p=b.b
q=H.i(p+b.d,q)
n=a.b
q/=n
t[7]=q
t[3]=q
o=r/o
t[6]=o
t[10]=o
n=p/n
t[15]=n
t[11]=n}else if(d===3){r=b.a
q=a.a
p=r/q
t[6]=p
t[2]=p
p=b.b
o=H.e(b,0)
n=H.i(p+b.d,o)
m=a.b
n/=m
t[15]=n
t[3]=n
q=H.i(r+b.c,o)/q
t[14]=q
t[10]=q
m=p/m
t[7]=m
t[11]=m}else H.V(P.fD())
u[0]=0
u[1]=1
u[2]=2
u[3]=0
u[4]=2
u[5]=3
s.y=t
s.x=u
return s},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.e=c
_.x=_.r=_.f=null},
bR:function bR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.e=c
_.x=_.r=_.f=null},
bU:function bU(a){this.b=a},
ap:function ap(){},
dd:function dd(){},
bS:function bS(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.a=f
_.b=g
_.c=h},
bT:function bT(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.d=a
_.e=null
_.f=b
_.r=c
_.Q=_.z=_.y=_.x=null
_.cx=0
_.cy=d
_.dy=e
_.fr=f
_.fx=g
_.fy=h
_.a=i
_.b=j
_.c=k},
df:function df(){},
bV:function bV(){},
ez:function ez(){},
bW:function bW(){},
el:function el(){},
bX:function bX(){},
dj:function dj(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
f3:function f3(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
f4:function f4(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
bl:function bl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null},
dk:function dk(a,b){this.c=a
this.d=b
this.e=null},
aL:function aL(){this.c=this.b=this.a=0},
bY:function bY(a,b,c,d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.f=b
_.r=c
_.x=null
_.y=d
_.z=!1
_.ch=_.Q=null},
bZ:function bZ(a){this.a=a},
c_:function c_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.z=!1},
dl:function dl(a){this.a=a}},T={cX:function cX(a,b){this.a=a
this.b=b},
N:function(){var u=new Float32Array(6)
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0
return new T.d3(u)},
d3:function d3(a){this.a=a},
aG:function aG(a){this.a=a}},R={
f9:function(a,b,c){var u,t,s,r
H.hf(c,R.bx,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in '_dispatchBroadcastEvent'.")
H.p(b,"$ir",[[R.D,c]],"$ar")
u=b.length
for(t={func:1,ret:-1,args:[c]},s=0;s<u;++s){if(s<0||s>=b.length)return H.j(b,s)
r=b[s]
if(!r.c){a.f=!1
a.r=!1
H.b(r.f,t).$1(H.i(a,c))}else{C.a.bN(b,s);--u;--s}}},
bx:function bx(){},
aA:function aA(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
aC:function aC(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
aK:function aK(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
M:function M(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
bB:function bB(){},
b4:function b4(a){this.b=a},
al:function al(a,b,c){var _=this
_.a=a
_.c=b
_.d=0
_.$ti=c},
D:function D(a,b,c,d,e){var _=this
_.a=a
_.b=0
_.c=!1
_.d=b
_.e=c
_.f=d
_.$ti=e},
b7:function b7(a){this.b=a},
cN:function cN(){},
I:function I(a,b){var _=this
_.db=!1
_.a=a
_.b=b
_.r=_.f=!1},
ai:function ai(a,b){var _=this
_.db=!1
_.a=a
_.b=b
_.r=_.f=!1}},U={C:function C(a,b,c){this.a=a
this.b=b
this.$ti=c},X:function X(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},N={bC:function bC(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null}},O={
ig:function(a,b,c,d){var u=new O.P(a,b,c,new P.c9(new P.v(0,$.n,[null]),[null]))
u.c4(a,b,c,d)
return u},
c0:function c0(a,b){this.a=a
this.b=b},
dt:function dt(){},
ds:function ds(){},
du:function du(){},
dr:function dr(){},
dq:function dq(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null
_.f=d},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
b9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},Q={d4:function d4(){},
it:function(){var u,t
try{u=P.hT("TouchEvent")
return u}catch(t){H.a0(t)
return!1}}},F={
cm:function(){return F.iZ()},
iZ:function(){var u=0,t=P.h4(P.q),s,r,q,p,o,n,m,l,k,j,i,h
var $async$cm=P.hb(function(a,b){if(a===1)return P.fX(b,t)
while(true)switch(u){case 0:s={}
r=A.ii(H.k(document.querySelector("#stage"),"$iaj"),800,new A.dy(C.j,C.i,C.l,C.m,C.h,4294967295,5),1280)
q=K.fJ()
p=H.o([],[A.J])
o=new A.dg(q,p,new R.aA("enterFrame",!1),new R.aC("exitFrame",!1),0)
o.a=!0
L.h1()
q=$.fr();(q&&C.a).j(q,o.gcG())
q=r.ae
if(q!=null)if(C.a.am(q.c,r))r.ae=null
r.ae=o
C.a.j(p,r)
q=P.w
n=new O.c0(new H.a5([q,O.P]),P.ag(P.l))
n.cc("BitmapData","dart","images/dart@1x.png",A.fx("images/dart@1x.png",null))
u=2
return P.fW(n.aj(0),$async$cm)
case 2:m=H.iV(n.ct("BitmapData","dart"),"$iW")
p=H.o([],[A.a3])
$.ak=$.ak+1
l=[A.aY]
k=new A.dx(p,"auto",0,0,0,0,1,1,0,0,0,1,H.o([],l),T.N())
$.ak=$.ak+1
k.bp(new A.cs(m,0,0,0,0,1,1,0,0,0,1,H.o([],l),T.N()))
k.e=m.a/2
k.id=!0
k.f=m.b/2
k.c=640
k.d=0
r.bp(k)
j=r.aJ.bq(k,3,K.iE())
p=j.gbr(j)
p.a.bb(p,1).d=400
s.a=null
p=R.I
H.hf(p,R.M,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'on'.")
i=k.a
if(i==null){i=new H.a5([q,[R.al,R.M]])
k.scq(i)}q=[p]
h=H.p(i.n(0,"click"),"$ial",q,"$aal")
if(h==null){l=new Array(0)
l.fixed$length=Array
h=new R.al(k,H.o(l,[[R.D,p]]),q)
i.t(0,"click",h)}h.bl(H.b(new F.eP(s,r,k),{func:1,ret:-1,args:[H.e(h,0)]}),!1,0)
k.r1="pointer"
return P.fY(null,t)}})
return P.fZ($async$cm,t)},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.a=a}},V={
iJ:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.d((a>>>24&255)/255)+")"},
j0:function(a,b){if(typeof b!=="number")return H.R(b)
if(a<=b)return a
else return b},
eE:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
eH:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.f(P.bw("The supplied value ("+H.d(a)+") is not an int."))},
hi:function(a){return a}}
var w=[C,H,J,P,W,K,A,L,T,R,U,N,O,Q,F,V]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.f0.prototype={}
J.y.prototype={
u:function(a,b){return a===b},
gi:function(a){return H.aJ(a)},
h:function(a){return"Instance of '"+H.bc(a)+"'"}}
J.cO.prototype={
h:function(a){return String(a)},
gi:function(a){return a?519018:218159},
$iL:1}
J.bF.prototype={
u:function(a,b){return null==b},
h:function(a){return"null"},
gi:function(a){return 0},
$iq:1}
J.bH.prototype={
gi:function(a){return 0},
h:function(a){return String(a)}}
J.d9.prototype={}
J.as.prototype={}
J.an.prototype={
h:function(a){var u=a[$.ht()]
if(u==null)return this.c0(a)
return"JavaScript function for "+H.d(J.co(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ieY:1}
J.am.prototype={
j:function(a,b){H.i(b,H.e(a,0))
if(!!a.fixed$length)H.V(P.a_("add"))
a.push(b)},
bN:function(a,b){if(!!a.fixed$length)H.V(P.a_("removeAt"))
if(b<0||b>=a.length)throw H.f(P.bP(b,null))
return a.splice(b,1)[0]},
am:function(a,b){var u
if(!!a.fixed$length)H.V(P.a_("remove"))
for(u=0;u<a.length;++u)if(J.eU(a[u],b)){a.splice(u,1)
return!0}return!1},
K:function(a,b){var u,t
H.b(b,{func:1,ret:-1,args:[H.e(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b1(a))}},
dG:function(a,b,c,d){var u,t,s
H.i(b,d)
H.b(c,{func:1,ret:d,args:[d,H.e(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.f(P.b1(a))}return t},
R:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
dK:function(a,b){var u
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(J.eU(a[u],b))return u
return-1},
h:function(a){return P.fF(a,"[","]")},
gw:function(a){return new J.cr(a,a.length,0,[H.e(a,0)])},
gi:function(a){return H.aJ(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.V(P.a_("set length"))
if(b<0)throw H.f(P.bO(b,0,null,"newLength",null))
a.length=b},
t:function(a,b,c){H.i(c,H.e(a,0))
if(!!a.immutable$list)H.V(P.a_("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bu(a,b))
a[b]=c},
$iz:1,
$ir:1}
J.f_.prototype={}
J.cr.prototype={
gp:function(){return this.d},
m:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.fl(u))
s=this.c
if(s>=t){this.sb3(null)
return!1}this.sb3(u[s]);++this.c
return!0},
sb3:function(a){this.d=H.i(a,H.e(this,0))},
$iae:1}
J.b8.prototype={
dF:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a_(""+a+".floor()"))},
q:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a_(""+a+".round()"))},
dU:function(a,b){var u,t
if(b<0||b>20)throw H.f(P.bO(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
bW:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
c2:function(a,b){if(typeof b!=="number")throw H.f(H.eD(b))
if((a|0)===a)if(b>=1||!1)return a/b|0
return this.d2(a,b)},
d2:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a_("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
d0:function(a,b){var u
if(a>0)u=this.d_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
d_:function(a,b){return b>31?0:a>>>b},
$iab:1,
$il:1}
J.bE.prototype={$iA:1}
J.cP.prototype={}
J.aE.prototype={
bv:function(a,b){if(b<0)throw H.f(H.bu(a,b))
if(b>=a.length)H.V(H.bu(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(b>=a.length)throw H.f(H.bu(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.f(P.fw(b,null,null))
return a+b},
b2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.bP(b,null))
if(b>c)throw H.f(P.bP(b,null))
if(c>a.length)throw H.f(P.bP(c,null))
return a.substring(b,c)},
bY:function(a,b){return this.b2(a,b,null)},
dW:function(a){var u,t,s,r,q
u=a.trim()
t=u.length
if(t===0)return u
if(this.a6(u,0)===133){s=J.i_(u,1)
if(s===t)return""}else s=0
r=t-1
q=this.bv(u,r)===133?J.i0(u,r):t
if(s===0&&q===t)return u
return u.substring(s,q)},
a4:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.O)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.a4(" ",u)+a},
h:function(a){return a},
gi:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ifO:1,
$iw:1}
H.cE.prototype={}
H.aF.prototype={
gw:function(a){return new H.ba(this,this.gk(this),0,[H.eJ(this,"aF",0)])}}
H.ba.prototype={
gp:function(){return this.d},
m:function(){var u,t,s,r
u=this.a
t=J.hk(u)
s=t.gk(u)
if(this.b!==s)throw H.f(P.b1(u))
r=this.c
if(r>=s){this.sY(null)
return!1}this.sY(t.R(u,r));++this.c
return!0},
sY:function(a){this.d=H.i(a,H.e(this,0))},
$iae:1}
H.d0.prototype={
gw:function(a){var u=this.a
return new H.d1(u.gw(u),this.b,this.$ti)},
gk:function(a){return this.a.a.a},
$az:function(a,b){return[b]}}
H.cF.prototype={}
H.d1.prototype={
m:function(){var u=this.b
if(u.m()){this.sY(this.c.$1(u.d))
return!0}this.sY(null)
return!1},
gp:function(){return this.a},
sY:function(a){this.a=H.i(a,H.e(this,1))},
$aae:function(a,b){return[b]}}
H.d2.prototype={
gk:function(a){return J.cn(this.a)},
R:function(a,b){return this.b.$1(J.hJ(this.a,b))},
$aaF:function(a,b){return[b]},
$az:function(a,b){return[b]}}
H.bj.prototype={
gw:function(a){return new H.dQ(J.fu(this.a),this.b,this.$ti)}}
H.dQ.prototype={
m:function(){var u,t
for(u=this.a,t=this.b;u.m();)if(t.$1(u.gp()))return!0
return!1},
gp:function(){return this.a.gp()}}
H.aD.prototype={}
H.da.prototype={
$0:function(){return C.b.dF(1000*this.a.now())},
$S:16}
H.dK.prototype={
C:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.d7.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.cS.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.d(this.a)+")"}}
H.dN.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.b5.prototype={}
H.eT.prototype={
$1:function(a){if(!!J.x(a).$iad)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.cf.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iu:1}
H.b0.prototype={
h:function(a){return"Closure '"+H.bc(this).trim()+"'"},
$ieY:1,
gdZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dG.prototype={}
H.dD.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ay(u)+"'"}}
H.aZ.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.aZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gi:function(a){var u,t
u=this.c
if(u==null)t=H.aJ(this.a)
else t=typeof u!=="object"?J.az(u):H.aJ(u)
return(t^H.aJ(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bc(u)+"'")}}
H.c5.prototype={
h:function(a){return this.a}}
H.cz.prototype={
h:function(a){return this.a}}
H.dv.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.bh.prototype={
gaa:function(){var u=this.b
if(u==null){u=H.aW(this.a)
this.b=u}return u},
h:function(a){return this.gaa()},
gi:function(a){var u=this.d
if(u==null){u=C.d.gi(this.gaa())
this.d=u}return u},
u:function(a,b){if(b==null)return!1
return b instanceof H.bh&&this.gaa()===b.gaa()}}
H.a5.prototype={
gk:function(a){return this.a},
gaW:function(a){var u=H.e(this,0)
return H.i4(new H.cV(this,[u]),new H.cR(this),u,H.e(this,1))},
aF:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.b9(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.b9(t,a)}else return this.dL(a)},
dL:function(a){var u=this.d
if(u==null)return!1
return this.ah(this.a7(u,J.az(a)&0x3ffffff),a)>=0},
n:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.Z(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.Z(r,b)
s=t==null?null:t.b
return s}else return this.dM(b)},
dM:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.a7(u,J.az(a)&0x3ffffff)
s=this.ah(t,a)
if(s<0)return
return t[s].b},
t:function(a,b,c){var u,t,s,r,q,p
H.i(b,H.e(this,0))
H.i(c,H.e(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.au()
this.b=u}this.b5(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.au()
this.c=t}this.b5(t,b,c)}else{s=this.d
if(s==null){s=this.au()
this.d=s}r=J.az(b)&0x3ffffff
q=this.a7(s,r)
if(q==null)this.aA(s,r,[this.av(b,c)])
else{p=this.ah(q,b)
if(p>=0)q[p].b=c
else q.push(this.av(b,c))}}},
dS:function(a,b){var u
H.i(a,H.e(this,0))
H.b(b,{func:1,ret:H.e(this,1)})
if(this.aF(a))return this.n(0,a)
u=b.$0()
this.t(0,a,u)
return u},
am:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cV(this.c,b)
else return this.dN(b)},
dN:function(a){var u,t,s,r
u=this.d
if(u==null)return
t=this.a7(u,J.az(a)&0x3ffffff)
s=this.ah(t,a)
if(s<0)return
r=t.splice(s,1)[0]
this.bm(r)
return r.b},
bu:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.at()}},
K:function(a,b){var u,t
H.b(b,{func:1,ret:-1,args:[H.e(this,0),H.e(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.b1(this))
u=u.c}},
b5:function(a,b,c){var u
H.i(b,H.e(this,0))
H.i(c,H.e(this,1))
u=this.Z(a,b)
if(u==null)this.aA(a,b,this.av(b,c))
else u.b=c},
cV:function(a,b){var u
if(a==null)return
u=this.Z(a,b)
if(u==null)return
this.bm(u)
this.bd(a,b)
return u.b},
at:function(){this.r=this.r+1&67108863},
av:function(a,b){var u,t
u=new H.cU(H.i(a,H.e(this,0)),H.i(b,H.e(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.at()
return u},
bm:function(a){var u,t
u=a.d
t=a.c
if(u==null)this.e=t
else u.c=t
if(t==null)this.f=u
else t.d=u;--this.a
this.at()},
ah:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.eU(a[t].a,b))return t
return-1},
h:function(a){return P.fM(this)},
Z:function(a,b){return a[b]},
a7:function(a,b){return a[b]},
aA:function(a,b,c){a[b]=c},
bd:function(a,b){delete a[b]},
b9:function(a,b){return this.Z(a,b)!=null},
au:function(){var u=Object.create(null)
this.aA(u,"<non-identifier-key>",u)
this.bd(u,"<non-identifier-key>")
return u},
$ifK:1}
H.cR.prototype={
$1:function(a){var u=this.a
return u.n(0,H.i(a,H.e(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.e(u,1),args:[H.e(u,0)]}}}
H.cU.prototype={}
H.cV.prototype={
gk:function(a){return this.a.a},
gw:function(a){var u,t
u=this.a
t=new H.cW(u,u.r,this.$ti)
t.c=u.e
return t}}
H.cW.prototype={
gp:function(){return this.d},
m:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b1(u))
else{u=this.c
if(u==null){this.sb4(null)
return!1}else{this.sb4(u.a)
this.c=this.c.c
return!0}}},
sb4:function(a){this.d=H.i(a,H.e(this,0))},
$iae:1}
H.eK.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.eL.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.eM.prototype={
$1:function(a){return this.a(H.t(a))},
$S:37}
H.cQ.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
dE:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.em(u)},
$ifO:1}
H.em.prototype={
gdn:function(){var u=this.b
return u.index+u[0].length}}
H.bL.prototype={$ijv:1}
H.bI.prototype={
gk:function(a){return a.length},
$ibG:1,
$abG:function(){}}
H.bJ.prototype={
n:function(a,b){H.h_(b,a,a.length)
return a[b]},
$aaD:function(){return[P.ab]},
$aa6:function(){return[P.ab]},
$iz:1,
$az:function(){return[P.ab]},
$ir:1,
$ar:function(){return[P.ab]}}
H.bK.prototype={
$aaD:function(){return[P.A]},
$aa6:function(){return[P.A]},
$iz:1,
$az:function(){return[P.A]},
$ir:1,
$ar:function(){return[P.A]}}
H.d5.prototype={$ij9:1}
H.d6.prototype={
n:function(a,b){H.h_(b,a,a.length)
return a[b]},
$ija:1}
H.bm.prototype={}
H.bn.prototype={}
H.bo.prototype={}
H.bp.prototype={}
P.dV.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:2}
P.dU.prototype={
$1:function(a){var u,t
this.a.a=H.b(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.dW.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dX.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eu.prototype={
c7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aT(new P.ev(this,b),0),a)
else throw H.f(P.a_("`setTimeout()` not found."))}}
P.ev.prototype={
$0:function(){this.b.$0()},
$S:1}
P.c7.prototype={
D:function(a,b){var u
H.aV(b,{futureOr:1,type:H.e(this,0)})
if(this.b)this.a.D(0,b)
else if(H.F(b,"$iB",this.$ti,"$aB")){u=this.a
b.a3(u.gdg(u),u.gdi(),-1)}else P.eS(new P.dS(this,b))},
P:function(a,b){if(this.b)this.a.P(a,b)
else P.eS(new P.dR(this,a,b))},
$ieW:1}
P.dS.prototype={
$0:function(){this.a.a.D(0,this.b)},
$S:0}
P.dR.prototype={
$0:function(){this.a.a.P(this.b,this.c)},
$S:0}
P.ex.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:13}
P.ey.prototype={
$2:function(a,b){this.a.$2(1,new H.b5(a,H.k(b,"$iu")))},
$S:8}
P.eC.prototype={
$2:function(a,b){this.a(H.G(a),b)},
$S:14}
P.dY.prototype={}
P.K.prototype={
ax:function(){},
ay:function(){},
saw:function(a){this.dy=H.p(a,"$iK",this.$ti,"$aK")},
sbk:function(a){this.fr=H.p(a,"$iK",this.$ti,"$aK")}}
P.dZ.prototype={
gcw:function(){return this.c<4},
ce:function(a,b,c,d){var u,t,s,r,q,p
u=H.e(this,0)
H.b(a,{func:1,ret:-1,args:[u]})
H.b(c,{func:1,ret:-1})
if((this.c&4)!==0){if(c==null)c=P.hg()
u=new P.ce($.n,c,this.$ti)
u.cX()
return u}t=$.n
s=d?1:0
r=this.$ti
q=new P.K(this,t,s,r)
q.c6(a,b,c,d,u)
q.sbk(q)
q.saw(q)
H.p(q,"$iK",r,"$aK")
q.dx=this.c&1
p=this.e
this.scv(q)
q.saw(null)
q.sbk(p)
if(p==null)this.scr(q)
else p.saw(q)
if(this.d==this.e)P.iA(this.a)
return q},
c8:function(){if((this.c&4)!==0)return new P.be("Cannot add new events after calling close")
return new P.be("Cannot add new events while doing an addStream")},
j:function(a,b){H.i(b,H.e(this,0))
if(!this.gcw())throw H.f(this.c8())
this.az(b)},
scr:function(a){this.d=H.p(a,"$iK",this.$ti,"$aK")},
scv:function(a){this.e=H.p(a,"$iK",this.$ti,"$aK")},
$ijg:1,
$ijy:1,
$iaN:1}
P.dT.prototype={
az:function(a){var u,t
H.i(a,H.e(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.cb(new P.e1(a,t))}}
P.B.prototype={}
P.cL.prototype={
$2:function(a,b){var u,t
H.k(b,"$iu")
u=this.a
t=--u.b
if(u.a!=null){u.a=null
if(u.b===0||this.c)this.d.v(a,b)
else{u.c=a
u.d=b}}else if(t===0&&!this.c)this.d.v(u.c,u.d)},
$S:8}
P.cK.prototype={
$1:function(a){var u,t
H.i(a,this.f)
u=this.a;--u.b
t=u.a
if(t!=null){C.a.t(t,this.b,a)
if(u.b===0)this.c.b8(u.a)}else if(u.b===0&&!this.e)this.c.v(u.c,u.d)},
$S:function(){return{func:1,ret:P.q,args:[this.f]}}}
P.ca.prototype={
P:function(a,b){H.k(b,"$iu")
if(a==null)a=new P.aI()
if(this.a.a!==0)throw H.f(P.Y("Future already completed"))
$.n.toString
this.v(a,b)},
bw:function(a){return this.P(a,null)},
$ieW:1}
P.c9.prototype={
D:function(a,b){var u
H.aV(b,{futureOr:1,type:H.e(this,0)})
u=this.a
if(u.a!==0)throw H.f(P.Y("Future already completed"))
u.b6(b)},
v:function(a,b){this.a.b7(a,b)}}
P.cg.prototype={
D:function(a,b){var u
H.aV(b,{futureOr:1,type:H.e(this,0)})
u=this.a
if(u.a!==0)throw H.f(P.Y("Future already completed"))
u.aq(b)},
dh:function(a){return this.D(a,null)},
v:function(a,b){this.a.v(a,b)}}
P.U.prototype={
dP:function(a){if(this.c!==6)return!0
return this.b.b.aT(H.b(this.d,{func:1,ret:P.L,args:[P.m]}),a.a,P.L,P.m)},
dH:function(a){var u,t,s,r
u=this.e
t=P.m
s={futureOr:1,type:H.e(this,1)}
r=this.b.b
if(H.aU(u,{func:1,args:[P.m,P.u]}))return H.aV(r.dT(u,a.a,a.b,null,t,P.u),s)
else return H.aV(r.aT(H.b(u,{func:1,args:[P.m]}),a.a,null,t),s)}}
P.v.prototype={
a3:function(a,b,c){var u,t
u=H.e(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.n
if(t!==C.c){t.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.h6(b,t)}return this.aB(a,b,c)},
a2:function(a,b){return this.a3(a,null,b)},
aB:function(a,b,c){var u,t,s
u=H.e(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=new P.v(0,$.n,[c])
s=b==null?1:3
this.a5(new P.U(t,s,a,b,[u,c]))
return t},
a5:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$iU")
this.c=a}else{if(u===2){t=H.k(this.c,"$iv")
u=t.a
if(u<4){t.a5(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.au(null,null,u,H.b(new P.e7(this,a),{func:1,ret:-1}))}},
bj:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$iU")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iv")
t=p.a
if(t<4){p.bj(a)
return}this.a=t
this.c=p.c}u.a=this.a9(a)
t=this.b
t.toString
P.au(null,null,t,H.b(new P.ef(u,this),{func:1,ret:-1}))}},
a8:function(){var u=H.k(this.c,"$iU")
this.c=null
return this.a9(u)},
a9:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aq:function(a){var u,t,s
u=H.e(this,0)
H.aV(a,{futureOr:1,type:u})
t=this.$ti
if(H.F(a,"$iB",t,"$aB"))if(H.F(a,"$iv",t,null))P.ea(a,this)
else P.fS(a,this)
else{s=this.a8()
H.i(a,u)
this.a=4
this.c=a
P.aO(this,s)}},
b8:function(a){var u
H.i(a,H.e(this,0))
u=this.a8()
this.a=4
this.c=a
P.aO(this,u)},
v:function(a,b){var u
H.k(b,"$iu")
u=this.a8()
this.a=8
this.c=new P.H(a,b)
P.aO(this,u)},
cl:function(a){return this.v(a,null)},
b6:function(a){var u
H.aV(a,{futureOr:1,type:H.e(this,0)})
if(H.F(a,"$iB",this.$ti,"$aB")){this.ci(a)
return}this.a=1
u=this.b
u.toString
P.au(null,null,u,H.b(new P.e9(this,a),{func:1,ret:-1}))},
ci:function(a){var u=this.$ti
H.p(a,"$iB",u,"$aB")
if(H.F(a,"$iv",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.au(null,null,u,H.b(new P.ee(this,a),{func:1,ret:-1}))}else P.ea(a,this)
return}P.fS(a,this)},
b7:function(a,b){var u
H.k(b,"$iu")
this.a=1
u=this.b
u.toString
P.au(null,null,u,H.b(new P.e8(this,a,b),{func:1,ret:-1}))},
$iB:1}
P.e7.prototype={
$0:function(){P.aO(this.a,this.b)},
$S:0}
P.ef.prototype={
$0:function(){P.aO(this.b,this.a.a)},
$S:0}
P.eb.prototype={
$1:function(a){var u=this.a
u.a=0
u.aq(a)},
$S:2}
P.ec.prototype={
$2:function(a,b){H.k(b,"$iu")
this.a.v(a,b)},
$1:function(a){return this.$2(a,null)},
$S:21}
P.ed.prototype={
$0:function(){this.a.v(this.b,this.c)},
$S:0}
P.e9.prototype={
$0:function(){var u=this.a
u.b8(H.i(this.b,H.e(u,0)))},
$S:0}
P.ee.prototype={
$0:function(){P.ea(this.b,this.a)},
$S:0}
P.e8.prototype={
$0:function(){this.a.v(this.b,this.c)},
$S:0}
P.ei.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.bR(H.b(r.d,{func:1}),null)}catch(q){t=H.a0(q)
s=H.ax(q)
if(this.d){r=H.k(this.a.a.c,"$iH").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iH")
else p.b=new P.H(t,s)
p.a=!0
return}if(!!J.x(u).$iB){if(u instanceof P.v&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iH")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.a2(new P.ej(o),null)
r.a=!1}},
$S:1}
P.ej.prototype={
$1:function(a){return this.a},
$S:17}
P.eh.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.e(s,0)
q=H.i(this.c,r)
p=H.e(s,1)
this.a.b=s.b.b.aT(H.b(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a0(o)
t=H.ax(o)
s=this.a
s.b=new P.H(u,t)
s.a=!0}},
$S:1}
P.eg.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iH")
r=this.c
if(r.dP(u)&&r.e!=null){q=this.b
q.b=r.dH(u)
q.a=!1}}catch(p){t=H.a0(p)
s=H.ax(p)
r=H.k(this.a.a.c,"$iH")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.H(t,s)
n.a=!0}},
$S:1}
P.c8.prototype={}
P.bf.prototype={
gk:function(a){var u,t
u={}
t=new P.v(0,$.n,[P.A])
u.a=0
this.ai(new P.dE(u,this),!0,new P.dF(u,t),t.gck())
return t}}
P.dE.prototype={
$1:function(a){H.i(a,H.e(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.q,args:[H.e(this.b,0)]}}}
P.dF.prototype={
$0:function(){this.b.aq(this.a.a)},
$S:0}
P.a7.prototype={}
P.cb.prototype={
gi:function(a){return(H.aJ(this.a)^892482866)>>>0},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cb&&b.a===this.a}}
P.e0.prototype={
ax:function(){H.p(this,"$ia7",[H.e(this.x,0)],"$aa7")},
ay:function(){H.p(this,"$ia7",[H.e(this.x,0)],"$aa7")}}
P.e_.prototype={
c6:function(a,b,c,d,e){var u,t,s,r
u=H.e(this,0)
H.b(a,{func:1,ret:-1,args:[u]})
t=this.d
t.toString
this.scd(H.b(a,{func:1,ret:null,args:[u]}))
s=b==null?P.iI():b
if(H.aU(s,{func:1,ret:-1,args:[P.m,P.u]}))t.aR(s,null,P.m,P.u)
else if(H.aU(s,{func:1,ret:-1,args:[P.m]}))H.b(s,{func:1,ret:null,args:[P.m]})
else H.V(P.bw("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.b(c,{func:1,ret:-1})
r=c==null?P.hg():c
this.scF(H.b(r,{func:1,ret:-1}))},
ax:function(){},
ay:function(){},
cb:function(a){var u,t
u=this.$ti
t=H.p(this.r,"$ibr",u,"$abr")
if(t==null){t=new P.br(0,u)
this.sbi(t)}u=t.c
if(u==null){t.c=a
t.b=a}else{u.a=a
t.c=a}u=this.e
if((u&64)===0){u=(u|64)>>>0
this.e=u
if(u<128)this.r.b0(this)}},
az:function(a){var u,t
u=H.e(this,0)
H.i(a,u)
t=this.e
this.e=(t|32)>>>0
this.d.bT(this.a,a,u)
this.e=(this.e&4294967263)>>>0
this.cj((t&4)!==0)},
cj:function(a){var u,t,s
u=this.e
if((u&64)!==0&&this.r.c==null){u=(u&4294967231)>>>0
this.e=u
if((u&4)!==0)if(u<128){t=this.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){u=(u&4294967291)>>>0
this.e=u}}for(;!0;a=s){if((u&8)!==0){this.sbi(null)
return}s=(u&4)!==0
if(a===s)break
this.e=(u^32)>>>0
if(s)this.ax()
else this.ay()
u=(this.e&4294967263)>>>0
this.e=u}if((u&64)!==0&&u<128)this.r.b0(this)},
scd:function(a){this.a=H.b(a,{func:1,ret:-1,args:[H.e(this,0)]})},
scF:function(a){H.b(a,{func:1,ret:-1})},
sbi:function(a){this.r=H.p(a,"$ibq",this.$ti,"$abq")},
$ia7:1,
$iaN:1}
P.es.prototype={
ai:function(a,b,c,d){H.b(a,{func:1,ret:-1,args:[H.e(this,0)]})
H.b(c,{func:1,ret:-1})
return this.a.ce(H.b(a,{func:1,ret:-1,args:[H.e(this,0)]}),d,c,!0===b)},
dO:function(a){return this.ai(a,null,null,null)}}
P.e2.prototype={}
P.e1.prototype={}
P.bq.prototype={
b0:function(a){var u
H.p(a,"$iaN",this.$ti,"$aaN")
u=this.a
if(u===1)return
if(u>=1){this.a=1
return}P.eS(new P.en(this,a))
this.a=1}}
P.en.prototype={
$0:function(){var u,t,s,r,q
u=this.a
t=u.a
u.a=0
if(t===3)return
s=H.p(this.b,"$iaN",[H.e(u,0)],"$aaN")
r=u.b
q=r.a
u.b=q
if(q==null)u.c=null
H.p(s,"$iaN",[H.e(r,0)],"$aaN").az(r.b)},
$S:0}
P.br.prototype={}
P.ce.prototype={
cX:function(){if((this.b&2)!==0)return
var u=this.a
u.toString
P.au(null,null,u,H.b(this.gcY(),{func:1,ret:-1}))
this.b=(this.b|2)>>>0},
cZ:function(){var u=(this.b&4294967293)>>>0
this.b=u
if(u>=4)return
this.b=(u|1)>>>0
this.a.bS(this.c)},
$ia7:1}
P.et.prototype={}
P.H.prototype={
h:function(a){return H.d(this.a)},
$iad:1}
P.ew.prototype={$ijw:1}
P.eB.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.aI()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.h(0)
throw s},
$S:0}
P.eo.prototype={
bS:function(a){var u,t,s
H.b(a,{func:1,ret:-1})
try{if(C.c===$.n){a.$0()
return}P.h7(null,null,this,a,-1)}catch(s){u=H.a0(s)
t=H.ax(s)
P.cj(null,null,this,u,H.k(t,"$iu"))}},
bT:function(a,b,c){var u,t,s
H.b(a,{func:1,ret:-1,args:[c]})
H.i(b,c)
try{if(C.c===$.n){a.$1(b)
return}P.h8(null,null,this,a,b,-1,c)}catch(s){u=H.a0(s)
t=H.ax(s)
P.cj(null,null,this,u,H.k(t,"$iu"))}},
de:function(a,b){return new P.eq(this,H.b(a,{func:1,ret:b}),b)},
bs:function(a){return new P.ep(this,H.b(a,{func:1,ret:-1}))},
df:function(a,b){return new P.er(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
bR:function(a,b){H.b(a,{func:1,ret:b})
if($.n===C.c)return a.$0()
return P.h7(null,null,this,a,b)},
aT:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.i(b,d)
if($.n===C.c)return a.$1(b)
return P.h8(null,null,this,a,b,c,d)},
dT:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.i(b,e)
H.i(c,f)
if($.n===C.c)return a.$2(b,c)
return P.iz(null,null,this,a,b,c,d,e,f)},
aR:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}}
P.eq.prototype={
$0:function(){return this.a.bR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ep.prototype={
$0:function(){return this.a.bS(this.b)},
$S:1}
P.er.prototype={
$1:function(a){var u=this.c
return this.a.bT(this.b,H.i(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.a6.prototype={
gw:function(a){return new H.ba(a,this.gk(a),0,[H.fg(this,a,"a6",0)])},
R:function(a,b){return this.n(a,b)},
h:function(a){return P.fF(a,"[","]")}}
P.cY.prototype={}
P.cZ.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.d(a)
u.a=t+": "
u.a+=H.d(b)},
$S:10}
P.d_.prototype={
gk:function(a){return this.a},
h:function(a){return P.fM(this)},
$ifL:1}
P.L.prototype={}
P.ab.prototype={}
P.ad.prototype={}
P.aI.prototype={
h:function(a){return"Throw of null."}}
P.ac.prototype={
gas:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gar:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gas()+t+s
if(!this.a)return r
q=this.gar()
p=P.cG(this.b)
return r+q+": "+p}}
P.bN.prototype={
gas:function(){return"RangeError"},
gar:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.d(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.d(u)
else if(s>u)t=": Not in range "+H.d(u)+".."+H.d(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.d(u)}return t}}
P.cM.prototype={
gas:function(){return"RangeError"},
gar:function(){var u,t
u=H.G(this.b)
if(typeof u!=="number")return u.b_()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gk:function(a){return this.f}}
P.dO.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.dM.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.be.prototype={
h:function(a){return"Bad state: "+H.d(this.a)}}
P.cA.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cG(u)+"."}}
P.d8.prototype={
h:function(a){return"Out of Memory"},
$iad:1}
P.c1.prototype={
h:function(a){return"Stack Overflow"},
$iad:1}
P.cC.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e6.prototype={
h:function(a){return"Exception: "+this.a}}
P.cJ.prototype={
h:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
if(typeof s==="string"){r=s.length>78?C.d.b2(s,0,75)+"...":s
return t+"\n"+r}else return t}}
P.A.prototype={}
P.z.prototype={
gk:function(a){var u,t
u=this.gw(this)
for(t=0;u.m();)++t
return t},
R:function(a,b){var u,t,s
P.ib(b,"index")
for(u=this.gw(this),t=0;u.m();){s=u.gp()
if(b===t)return s;++t}throw H.f(P.eZ(b,this,"index",null,t))},
h:function(a){return P.hY(this,"(",")")}}
P.ae.prototype={}
P.r.prototype={$iz:1}
P.q.prototype={
gi:function(a){return P.m.prototype.gi.call(this,this)},
h:function(a){return"null"}}
P.l.prototype={}
P.m.prototype={constructor:P.m,$im:1,
u:function(a,b){return this===b},
gi:function(a){return H.aJ(this)},
h:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.h(this)}}
P.u.prototype={}
P.f6.prototype={}
P.w.prototype={$ifO:1}
P.bg.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.h.prototype={}
W.cp.prototype={
h:function(a){return String(a)}}
W.cq.prototype={
h:function(a){return String(a)}}
W.aj.prototype={
aZ:function(a,b,c){var u=a.getContext(b,P.iK(c))
return u},
$iaj:1,
$ifA:1}
W.bz.prototype={$ibz:1}
W.b2.prototype={
gk:function(a){return a.length}}
W.cB.prototype={}
W.cD.prototype={
h:function(a){return String(a)}}
W.bA.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.F(b,"$iao",[P.l],"$aao"))return!1
u=J.ck(b)
return a.left===u.gU(b)&&a.top===u.gV(b)&&a.width===u.gW(b)&&a.height===u.gT(b)},
gi:function(a){return W.fU(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gU:function(a){return a.left},
gV:function(a){return a.top},
$iao:1,
$aao:function(){return[P.l]}}
W.c.prototype={
h:function(a){return a.localName},
$ic:1}
W.a.prototype={$ia:1}
W.aB.prototype={
c9:function(a,b,c,d){return a.addEventListener(b,H.aT(H.b(c,{func:1,args:[W.a]}),1),!1)},
cU:function(a,b,c,d){return a.removeEventListener(b,H.aT(H.b(c,{func:1,args:[W.a]}),1),!1)},
$iaB:1}
W.cI.prototype={
gk:function(a){return a.length}}
W.a4.prototype={$ia4:1,$ifA:1}
W.af.prototype={$iaf:1}
W.bb.prototype={}
W.S.prototype={$iS:1}
W.aH.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.c_(a):u}}
W.dw.prototype={
gk:function(a){return a.length}}
W.a8.prototype={$ia8:1}
W.ah.prototype={$iah:1}
W.dH.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.eZ(b,a,null,null,null))
return a[b]},
R:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$ibG:1,
$abG:function(){return[W.a8]},
$aa6:function(){return[W.a8]},
$iz:1,
$az:function(){return[W.a8]},
$ir:1,
$ar:function(){return[W.a8]},
$ab6:function(){return[W.a8]}}
W.ar.prototype={}
W.dP.prototype={$ifA:1}
W.aa.prototype={
gdm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a_("deltaY is not supported"))},
gdl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a_("deltaX is not supported"))},
$iaa:1}
W.bk.prototype={
cW:function(a,b){return a.requestAnimationFrame(H.aT(H.b(b,{func:1,ret:-1,args:[P.l]}),1))},
cp:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cd.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.F(b,"$iao",[P.l],"$aao"))return!1
u=J.ck(b)
return a.left===u.gU(b)&&a.top===u.gV(b)&&a.width===u.gW(b)&&a.height===u.gT(b)},
gi:function(a){return W.fU(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gT:function(a){return a.height},
gW:function(a){return a.width}}
W.e3.prototype={
ai:function(a,b,c,d){var u=H.e(this,0)
H.b(a,{func:1,ret:-1,args:[u]})
H.b(c,{func:1,ret:-1})
return W.E(this.a,this.b,a,!1,u)}}
W.f8.prototype={}
W.e4.prototype={
ac:function(){if(this.b==null)return
this.d7()
this.b=null
this.scE(null)
return},
d6:function(){var u,t,s
u=this.d
t=u!=null
if(t&&this.a<=0){s=this.b
s.toString
H.b(u,{func:1,args:[W.a]})
if(t)J.hH(s,this.c,u,!1)}},
d7:function(){var u,t,s
u=this.d
t=u!=null
if(t){s=this.b
s.toString
H.b(u,{func:1,args:[W.a]})
if(t)J.hI(s,this.c,u,!1)}},
scE:function(a){this.d=H.b(a,{func:1,args:[W.a]})}}
W.e5.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ia"))},
$S:18}
W.b6.prototype={
gw:function(a){return new W.cH(a,a.length,-1,[H.fg(this,a,"b6",0)])}}
W.cH.prototype={
m:function(){var u,t
u=this.c+1
t=this.b
if(u<t){t=this.a
if(u<0||u>=t.length)return H.j(t,u)
this.sbc(t[u])
this.c=u
return!0}this.sbc(null)
this.c=t
return!1},
gp:function(){return this.d},
sbc:function(a){this.d=H.i(a,H.e(this,0))},
$iae:1}
W.cc.prototype={}
W.ch.prototype={}
W.ci.prototype={}
P.eF.prototype={
$2:function(a,b){this.a[a]=b},
$S:10}
P.O.prototype={
h:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
u:function(a,b){if(b==null)return!1
return H.F(b,"$iO",[P.l],"$aO")&&this.a==J.fv(b)&&this.b==b.gG(b)},
gi:function(a){var u,t,s
u=J.az(this.a)
t=J.az(this.b)
t=P.fT(P.fT(0,u),t)
s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
gM:function(a){return this.a},
gG:function(a){return this.b}}
P.by.prototype={$iby:1}
P.a2.prototype={$ia2:1}
P.bM.prototype={$ibM:1}
P.aq.prototype={
bV:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}t=J.x(g)
if(!!t.$ia4&&h==null&&u&&!0){this.d3(a,b,c,d,e,f,g)
return}if(!!t.$iaj&&h==null&&u&&!0){this.d4(a,b,c,d,e,f,g)
return}throw H.f(P.bw("Incorrect number or type of arguments"))},
bU:function(a,b,c,d,e,f,g){return this.bV(a,b,c,d,e,f,g,null,null,null)},
d3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
d4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dX:function(a,b,c){return a.uniform1i(b,c)},
$iaq:1}
P.c3.prototype={$ic3:1}
P.bi.prototype={$ibi:1}
K.c6.prototype={}
K.cT.prototype={
dj:function(a,b){var u,t
u=this.a
for(t=this.b;u!==t;){if(u.a===b)return!0
u=u.b}return!1},
bq:function(a,b,c){var u,t,s
u=new K.dI(a,H.b(c,{func:1,ret:P.l,args:[P.l]}),H.o([],[K.c4]),0,0)
u.r=Math.max(0.0001,b)
if(!this.dj(0,u)){t=new K.c6()
s=this.b
s.a=u
s.b=t
this.b=t}return u},
O:function(a){var u,t,s,r,q
u=this.c+=a
this.d.j(0,u)
t=this.a
s=this.b
for(;t!=s;){r=t.a
if(r==null){q=t.b
t.a=q.a
t.b=q.b
if(q==s)s=t
if(q===this.b)this.b=t}else if(!r.O(a))t.a=null
else t=t.b}return!0},
$ihM:1}
K.dI.prototype={
gbr:function(a){return new K.dJ(this,this.a)},
bb:function(a,b){var u=new K.c4(a,b,0/0,0/0,0/0)
if(!this.Q)C.a.j(this.c,u)
return u},
O:function(a){var u,t,s,r,q,p,o
u=this.x
t=this.r
if(u<t||!this.Q){u+=a
this.x=u
if(u>t){this.x=t
u=t}if(u>=0){if(!this.Q){this.Q=!0
for(u=this.c,s=0;s<u.length;++s){t=u[s]
t.c=t.a.cu(t.b)
if(isNaN(t.e)&&isFinite(t.d))t.e=t.d-t.c
if(isNaN(t.d)&&isFinite(t.e))t.d=t.c+t.e}}u=this.b.$1(this.x/this.r)
u.toString
for(t=this.c,s=0;s<t.length;++s){r=t[s]
if(isFinite(r.c)&&isFinite(r.d)){q=r.c
p=r.d
if(typeof u!=="number")return u.a4()
o=q+u*(p-q)
q=r.a
switch(r.b){case 0:r=q.b
r.c=o
r.id=!0
break
case 1:r=q.b
r.d=o
r.id=!0
break
case 2:r=q.b
r.e=o
r.id=!0
break
case 3:r=q.b
r.f=o
r.id=!0
break
case 4:r=q.b
r.r=o
r.id=!0
break
case 5:r=q.b
r.x=o
r.id=!0
break
case 6:r=q.b
r.y=o
r.id=!0
break
case 7:r=q.b
r.z=o
r.id=!0
break
case 8:r=q.b
r.Q=o
r.id=!0
break
case 9:if(o<=0)o=0
if(o>=1)o=1
q.b.ch=o
break}}}u=this.f
if(u!=null&&this.x===this.r)u.$0()}}return this.x<this.r},
$ihM:1}
K.c4.prototype={}
K.dJ.prototype={
cu:function(a){switch(a){case 0:return this.b.c
case 1:return this.b.d
case 2:return this.b.e
case 3:return this.b.f
case 4:return this.b.r
case 5:return this.b.x
case 6:return this.b.y
case 7:return this.b.z
case 8:return this.b.Q
case 9:return this.b.ch
default:return 0}},
$ijk:1}
A.cs.prototype={
L:function(a,b){var u=this.k3
if(u==null)return
if(a<0||a>=u.a)return
if(b<0||b>=u.b)return
return this},
a_:function(a){var u=this.k3
if(u!=null)a.c.a0(a,u.c)}}
A.W.prototype={}
A.cw.prototype={
$1:function(a){var u,t,s,r,q
H.k(a,"$ia4")
u=new L.bY(C.X,C.w,C.w,-1)
t=V.eH(a.width)
u.a=t
s=V.eH(a.height)
u.b=s
u.c=a
r=[P.A]
r=L.f5(u,new U.X(0,0,t,s,r),new U.X(0,0,t,s,r),0,1)
q=L.f5(r.a,r.b,r.c,r.d,this.a)
r=q.c
s=q.e
return new A.W(r.c/s,r.d/s,q)},
$S:19}
A.ct.prototype={
c3:function(a,b){var u,t,s,r,q,p,o,n,m
this.a=a
this.b=a
this.c=1
u=P.id("@(\\d+(.\\d+)?)x").dE(this.a)
if(u!=null){t=u.b
if(2>=t.length)return H.j(t,2)
s=t[2]
if(s==null)s="."
r=P.iL(t[1])
q=C.a.dG(b,0,new A.cu($.ft()),P.l)
p=J.hK(q,s.length-1)
t=t.index+1
s=u.gdn()
o=P.ic(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
this.b=n+p+m
if(typeof r!=="number")return H.R(r)
this.c=q/r}}}
A.cu.prototype={
$2:function(a,b){var u
H.eR(a)
H.eR(b)
u=this.a
if(typeof a!=="number")return a.ao()
if(typeof u!=="number")return H.R(u)
if(typeof b!=="number")return b.ao()
if(Math.abs(a-u)<Math.abs(b-u)&&a>0)u=a
else u=b
return u},
$S:20}
A.cv.prototype={}
A.aY.prototype={}
A.a3.prototype={
gM:function(a){return this.c},
gG:function(a){return this.d},
gbQ:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gaV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(this.id){this.id=!1
u=this.go
t=this.Q
s=this.r
r=this.x
q=this.y
p=this.z
if(s>-0.0001&&s<0.0001)s=s>=0?0.0001:-0.0001
if(r>-0.0001&&r<0.0001)r=r>=0?0.0001:-0.0001
if(q!==0||p!==0){o=p+t
n=s*Math.cos(o)
m=s*Math.sin(o)
o=q+t
l=-r*Math.sin(o)
k=r*Math.cos(o)
o=this.c
j=this.e
i=this.f
u.N(n,m,l,k,o-j*n-i*l,this.d-j*m-i*k)}else if(t!==0){h=Math.cos(t)
g=Math.sin(t)
n=s*h
m=s*g
l=-r*g
k=r*h
o=this.c
j=this.e
i=this.f
u.N(n,m,l,k,o-j*n-i*l,this.d-j*m-i*k)}else u.N(s,0,0,r,this.c-this.e*s,this.d-this.f*r)}return this.go},
A:function(a,b){var u,t
u=[P.l]
H.p(a,"$iC",u,"$aC")
H.p(b,"$iC",u,"$aC")
t=H.F(b,"$iC",u,null)?b:new U.C(0,0,u)
t.sM(0,a.a)
t.sG(0,a.b)
this.bg(t)
return t},
bg:function(a){var u,t,s,r,q,p
u=[P.l]
H.p(a,"$iC",u,"$aC")
t=this.fy
if(t!=null)t.bg(a)
s=H.F(a,"$iC",u,null)?a:new U.C(0,0,u)
r=a.a
q=a.b
p=this.gaV()
u=p.a
s.sM(0,(u[3]*(r-u[4])-u[2]*(q-u[5]))/p.gby())
s.sG(0,(u[0]*(q-u[5])-u[1]*(r-u[4]))/p.gby())},
l:function(a,b){var u,t,s,r,q
u=H.o([],[R.bB])
for(t=this.fy;t!=null;t=t.fy)C.a.j(u,t)
s=u.length-1
while(!0){if(!(s>=0&&b.gbt()))break
if(s<0||s>=u.length)return H.j(u,s)
u[s].aG(b,this,C.r);--s}this.aG(b,this,C.P)
r=b.b
s=0
while(!0){q=u.length
if(!(s<q&&r))break
if(s>=q)return H.j(u,s)
u[s].aG(b,this,C.Q);++s}},
sbh:function(a){this.fy=H.p(a,"$ieX",[A.a3],"$aeX")},
$iji:1,
$ijj:1,
$ijf:1}
A.b3.prototype={
bp:function(a){var u,t,s,r
if(a===this)throw H.f(P.bw("An object cannot be added as a child of itself."))
else{u=a.fy
if(u===this)this.ca(a)
else{if(u!=null){t=u.I
s=C.a.dK(t,a)
a.l(0,new R.M("removed",!0))
r=u.gbQ()
if((r instanceof A.J?r:null)!=null)u.be(a,"removedFromStage")
a.sbh(null)
C.a.bN(t,s)}this.d5(a)
C.a.j(this.I,a)
a.sbh(this)
a.l(0,new R.M("added",!0))
r=this.gbQ()
if((r instanceof A.J?r:null)!=null)this.be(a,"addedToStage")}}},
L:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
for(u=this.I,t=u.length-1,s=null;t>=0;--t){if(t>=u.length)return H.j(u,t)
r=u[t]
q=r.gaV()
if(r.cx&&!0){p=q.a
o=a-p[4]
n=b-p[5]
m=p[3]
l=p[2]
k=p[0]
p=p[1]
j=k*m-p*l
i=r.L((m*o-l*n)/j,(k*n-p*o)/j)
if(i==null)continue
if(!!i.$ibD&&!0)return i
s=this}}return s},
a_:function(a){var u,t,s
for(u=this.I,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.aS(s)}},
d5:function(a){var u
for(u=this;u!=null;u=u.fy)if(u===a)throw H.f(P.bw("An object cannot be added as a child to one of it's children (or children's children, etc.)."))},
ca:function(a){var u,t,s,r
u=this.I
for(t=u.length-1,s=a;t>=0;--t,s=r){if(t>=u.length)return H.j(u,t)
r=u[t]
C.a.t(u,t,s)
if(a===r)break}},
be:function(a,b){var u,t
u=!1
t=this
while(!0){if(!(t!=null&&!u))break
if(t.aQ(b,!0))u=!0
t=t.fy}this.bf(a,new R.M(b,!1),u)},
bf:function(a,b,c){var u,t,s
u=!c
if(!u||a.dI(b.a))a.l(0,b)
if(!!a.$ib3){c=!u||a.aQ(b.a,!0)
t=a.I
for(s=0;s<t.length;++s)this.bf(t[s],b,c)}},
$ieX:1,
$aeX:function(){return[A.a3]}}
A.bD.prototype={}
A.dg.prototype={
O:function(a){var u
this.f+=a
R.f9(this.d,$.fp(),R.aA)
this.b.O(a)
u=this.c
C.a.K(u,new A.dh(a))
C.a.K(u,new A.di(this,a))
R.f9(this.e,$.fq(),R.aC)}}
A.dh.prototype={
$1:function(a){H.k(a,"$iJ").aJ.O(this.a)
return!0},
$S:38}
A.di.prototype={
$1:function(a){var u,t,s,r,q,p
H.k(a,"$iJ")
u=this.a.f
t=a.ad
if(t!==C.l)t=t===C.F
else t=!0
if(t){if($.f7==null){H.i9()
$.f7=$.db}t=H.G($.dc.$0())
if(typeof t!=="number")return t.ao()
t-=0
a.bn()
R.f9(a.dr,$.fs(),R.aK)
a.S.a1(0)
s=a.S
r=s.a
r.a=0
r.b=0
r.c=0
s.aE(0,a.aK)
a.H.bP(0,a.bK)
V.hi(u)
V.hi(this.b)
a.H.aS(a)
a.H.c.B(0)
a.dA=!1
q=a.S.a
u=H.G($.dc.$0())
if(typeof u!=="number")return u.ao()
s=$.f7
if(typeof s!=="number")return H.R(s)
p=C.f.c2((u-t)*1000,s)
a.aM=a.aM*0.75+q.a*0.25
a.aN=a.aN*0.75+q.b*0.25
a.aO=a.aO*0.75+q.c*0.25
a.aL=a.aL*0.95+p*0.05
u=a.J
if(u.cx){u.cy
t=!0}else t=!1
if(t){C.a.sk(u.r2,0)
u.rx=0
u.ry=0
a.J.al(0,"FRAMETIME"+C.d.ak(C.f.h(C.b.q(a.aL)),6))
a.J.al(0,"DRAWCALLS"+C.d.ak(C.f.h(C.b.q(a.aM)),6))
a.J.al(0,"VERTICES"+C.d.ak(C.f.h(C.b.q(a.aN)),7))
a.J.al(0,"INDICES"+C.d.ak(C.f.h(C.b.q(a.aO)),8))
a.H.bP(0,a.bz)
a.H.aS(a.J)
a.H.c.B(0)}}if(a.ad===C.F)a.ad=C.Y
return},
$S:22}
A.dx.prototype={
L:function(a,b){var u=this.ap(a,b)
return u},
a_:function(a){this.bZ(a)}}
A.bd.prototype={
h:function(a){return this.b}}
A.aM.prototype={
h:function(a){return this.b}}
A.T.prototype={
h:function(a){return this.b}}
A.J.prototype={
c5:function(a,b,c,d){var u,t,s
u=a.tabIndex
if(typeof u!=="number")return u.e0()
if(u<=0)a.tabIndex=1
u=a.style
if(u.outline==="")u.outline="none"
this.aK=c.f
this.dt=!0
this.du=!0
this.dv=!1
this.dw=!1
this.E=a
this.bB=c.e
this.bA=c.d
this.ad=c.c
this.aH=c.b
this.bG=V.eH(d)
this.bH=V.eH(b)
this.af=V.j0(c.y,$.ft())
u=this.cn(a,c)
this.S=u
this.H=L.ie(u)
u=H.o([],[L.c_])
t=T.N()
s=H.o([],[P.w])
$.ak=$.ak+1
s=new A.c2("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC",u,t,s,0,0,0,0,1,1,0,0,0,1,H.o([],[A.aY]),T.N())
A.fx("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC",null).a2(s.gcf(),-1)
s.cx=!1
this.J=s
H.j2("StageXL render engine : "+this.S.gbO().h(0))
u=W.af
t=H.b(this.gcM(),{func:1,ret:-1,args:[u]})
W.E(a,"keydown",t,!1,u)
W.E(a,"keyup",t,!1,u)
W.E(a,"keypress",t,!1,u)
u=this.aH
if(u===C.i||u===C.t){u=W.S
t=H.b(this.gcO(),{func:1,ret:-1,args:[u]})
W.E(a,"mousedown",t,!1,u)
W.E(a,"mouseup",t,!1,u)
W.E(a,"mousemove",t,!1,u)
W.E(a,"mouseout",t,!1,u)
W.E(a,"contextmenu",t,!1,u)
u=W.aa
W.E(a,H.t(W.hU(a)),H.b(this.gcQ(),{func:1,ret:-1,args:[u]}),!1,u)}u=this.aH
if((u===C.R||u===C.t)&&$.hG()){u=W.ah
t=H.b(this.gcS(),{func:1,ret:-1,args:[u]})
W.E(a,"touchstart",t,!1,u)
W.E(a,"touchend",t,!1,u)
W.E(a,"touchmove",t,!1,u)
W.E(a,"touchenter",t,!1,u)
W.E(a,"touchleave",t,!1,u)
W.E(a,"touchcancel",t,!1,u)}$.hv().dO(new A.dC(this))
this.aC()
this.bn()
this.S.aE(0,this.aK)},
L:function(a,b){var u=this.ap(a,b)
return u!=null?u:this},
cn:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
u=b.a
if(u===C.j)try{u=new T.aG(new Float32Array(16))
u.X()
t=H.o([],[L.el])
s=P.w
r=new Int16Array(0)
r=new L.dj(-1,new H.a5([s,P.A]),new H.a5([s,P.bi]),new L.bQ(r,35048,-1),new L.bR(new Float32Array(0),35048,-1),new L.aL())
new Int16Array(0)
new Float32Array(0)
new Int16Array(0)
new Float32Array(0)
q=new Int16Array(16384)
p=new Float32Array(32768)
o=new Array(8)
o.fixed$length=Array
o=H.o(o,[L.bY])
n=H.o([],[L.bV])
m=L.ap
m=new L.bT(a,u,t,r,new L.bQ(q,35048,-1),new L.bR(p,35048,-1),o,n,new L.aL(),P.ag(m),P.ag(m))
n=P.a2
o={func:1,ret:-1,args:[n]}
W.E(a,"webglcontextlost",H.b(m.gcA(),o),!1,n)
W.E(a,"webglcontextrestored",H.b(m.gcC(),o),!1,n)
b=P.i3(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],s,null)
l=C.q.aZ(a,"webgl",b)
l=H.k(l==null?C.q.aZ(a,"experimental-webgl",b):l,"$iaq")
if(!J.x(l).$iaq)H.V(P.Y("Failed to get WebGL context."))
m.e=l
l.enable(3042)
m.e.disable(2960)
m.e.disable(2929)
m.e.disable(2884)
m.e.pixelStorei(37441,1)
m.e.blendFunc(1,771)
m.x=r
r.ab(m)
u=$.de+1
$.de=u
m.cx=u
m.a1(0)
return m}catch(k){H.a0(k)
u=T.N()
t=L.ap
t=new L.bS(a,a.getContext("2d"),u,C.e,1,new L.aL(),P.ag(t),P.ag(t))
t.a1(0)
return t}else if(u===C.v){u=T.N()
t=L.ap
t=new L.bS(a,a.getContext("2d"),u,C.e,1,new L.aL(),P.ag(t),P.ag(t))
t.a1(0)
return t}else throw H.f(P.Y("Unknown RenderEngine"))},
bn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=this.bG
t=this.bH
s=this.E.getBoundingClientRect()
r=this.E
q=r.clientLeft
p=C.b.q(s.left)
if(typeof q!=="number")return q.F()
o=r.clientTop
n=C.b.q(s.top)
if(typeof o!=="number")return o.F()
m=r.clientWidth
l=r.clientHeight
if(m===0||l===0)return
if(typeof m!=="number")return m.aY()
k=m/u
if(typeof l!=="number")return l.aY()
j=l/t
switch(this.bA){case C.Z:i=j
h=k
break
case C.a_:i=k>j?k:j
h=i
break
case C.a0:h=1
i=1
break
case C.m:i=k<j?k:j
h=i
break
default:h=1
i=1}r=this.bB
switch(r){case C.A:case C.C:case C.x:g=0
break
case C.y:case C.h:case C.D:g=(m-u*h)/2
break
case C.z:case C.B:case C.E:g=m-u*h
break
default:g=0}switch(r){case C.x:case C.y:case C.z:f=0
break
case C.A:case C.h:case C.B:f=(l-t*i)/2
break
case C.C:case C.D:case C.E:f=l-t*i
break
default:f=0}r=this.dB
r.sU(0,-g/h)
r.sV(0,-f/i)
r.sW(0,m/h)
r.sT(0,l/i)
r=this.bK
r.N(h,0,0,i,g,f)
e=this.af
r.an(0,e,e)
e=this.ag
e.N(1,0,0,1,-(q+p)-g,-(o+n)-f)
e.an(0,1/h,1/i)
e=this.bz
e.bL()
n=this.af
e.an(0,n,n)
if(this.bI!==m||this.bJ!==l){this.bI=m
this.bJ=l
r=this.E
q=this.af
if(typeof q!=="number")return H.R(q)
r.width=C.b.q(m*q)
r.height=C.b.q(l*q)
if(r.clientWidth!==m||r.clientHeight!==l){r=r.style
q=""+m+"px"
r.width=q
r=this.E.style
q=""+l+"px"
r.height=q}this.l(0,new R.M("resize",!1))}},
aC:function(){var u,t,s,r,q,p,o,n,m,l
u=this.aI
t=$.i6
if(u!=null&&t==="auto"){s=u.r1
if(s!=="auto")t=s}if(t==="auto")t="default"
if(this.bC!=t){this.bC=t
r=this.E.style
if($.fn().aF(t)){q=$.fn().n(0,t)
p=C.T.ge3(q)
o=q.gdJ()
n=o.gM(o)
o=q.gdJ()
m=o.gG(o)
l="url('"+H.d(p)+"') "+H.d(n)+" "+H.d(m)+", "+H.d(t)}else l=t
o=$.i5?"none":l
r.toString
r.cursor=o==null?"":o}},
cP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.k(a,"$iS")
a.preventDefault()
u=Date.now()
t=a.button
s=P.l
r=this.ag.aU(new P.O(a.clientX,a.clientY,[s]))
q=new U.C(0,0,[s])
if(typeof t!=="number")return t.b_()
if(t<0||t>2)return
if(a.type==="mousemove"&&this.bD.u(0,r))return
s=this.ds
if(t<0||t>=3)return H.j(s,t)
p=s[t]
this.scz(r)
C.a.K(this.bE,new A.dz(r))
if(a.type!=="mouseout")o=this.L(r.a,r.b)
else{this.l(0,new R.M("mouseLeave",!1))
o=null}n=this.aI
if(n!=o){s=[A.a3]
m=H.o([],s)
l=H.o([],s)
for(k=n;k!=null;k=k.fy)C.a.j(m,k)
for(k=o;k!=null;k=k.fy)C.a.j(l,k)
for(s=m.length,j=l.length,i=0;!0;++i){if(i===s)break
if(i===j)break
h=s-i-1
if(h<0)return H.j(m,h)
g=m[h]
h=j-i-1
if(h<0)return H.j(l,h)
if(g!==l[h])break}if(n!=null){n.A(r,q)
n.l(0,new R.I("mouseOut",!0))}for(f=0;f<m.length-i;++f){e=m[f]
e.A(r,q)
e.l(0,new R.I("rollOut",!1))}for(f=l.length-i-1;f>=0;--f){if(f>=l.length)return H.j(l,f)
e=l[f]
e.A(r,q)
e.l(0,new R.I("rollOver",!1))}if(o!=null){o.A(r,q)
o.l(0,new R.I("mouseOver",!0))}this.aI=o}this.aC()
if(a.type==="mousedown"){this.E.focus()
d=p.a
if(o!=p.e||u>p.r+500)p.x=0
p.f=!0
p.e=o
p.r=u;++p.x}else d=null
if(a.type==="mouseup"){d=p.b
p.f=!1
c=p.e==o
c}else c=!1
u=a.type
if(u==="mousemove")d="mouseMove"
if(u==="contextmenu")d="contextMenu"
if(d!=null&&o!=null){o.A(r,q)
o.l(0,new R.I(d,!0))
if(c)o.l(0,new R.I(p.c,!0))}},
cR:function(a){var u,t,s
H.k(a,"$iaa")
u=P.l
t=this.ag.aU(new P.O(a.clientX,a.clientY,[u]))
s=this.L(t.a,t.b)
s.A(t,new U.C(0,0,[u]));(a&&C.G).gdl(a)
C.G.gdm(a)
s.l(0,new R.I("mouseWheel",!0))},
cT:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
H.k(b3,"$iah")
b3.preventDefault()
u=b3.type
for(t=b3.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=this.bF,m=this.bE,l=P.l,k=[l],j=this.ag,l=[l],i=[A.a3],h=0;h<t.length;t.length===s||(0,H.fl)(t),++h){g=t[h]
f=g.identifier
e=j.aU(new P.O(C.b.q(g.clientX),C.b.q(g.clientY),k))
d=new U.C(0,0,l)
c=this.ap(e.a,e.b)
c=c!=null?c:this
b=n.dS(f,new A.dA(this,c))
a=b.a
b.b
C.a.K(m,new A.dB(a,e))
a0=b.d
if(a0!==c){a1=H.o([],i)
a2=H.o([],i)
for(a3=a0;a3!=null;a3=a3.fy)C.a.j(a1,a3)
for(a3=c;a3!=null;a3=a3.fy)C.a.j(a2,a3)
for(a4=a1.length,a5=a2.length,a6=0;!0;++a6){if(a6===a4)break
if(a6===a5)break
a7=a4-a6-1
if(a7<0)return H.j(a1,a7)
a8=a1[a7]
a7=a5-a6-1
if(a7<0)return H.j(a2,a7)
if(a8!==a2[a7])break}if(a0!=null){a0.A(e,d)
a0.l(0,new R.ai("touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.A(e,d)
b0.l(0,new R.ai("touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.j(a2,a9)
b0=a2[a9]
b0.A(e,d)
b0.l(0,new R.ai("touchRollOver",!1))}c.A(e,d)
c.l(0,new R.ai("touchOver",!0))
b.d=c}if(o){this.E.focus()
n.t(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.am(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.am(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.A(e,d)
c.l(0,new R.ai(b1,!0))
if(b2)c.l(0,new R.ai("touchTap",!0))}}},
cN:function(a){H.k(a,"$iaf")
return},
scz:function(a){this.bD=H.p(a,"$iC",[P.l],"$aC")}}
A.dC.prototype={
$1:function(a){H.t(a)
return this.a.aC()},
$S:32}
A.dz.prototype={
$1:function(a){return H.k(a,"$iat").dY(0,this.a)},
$S:11}
A.dA.prototype={
$0:function(){var u,t,s
u=this.b
t=this.a.bF.a
s=$.fV
$.fV=s+1
return new A.aQ(s,t===0,u,u)},
$S:28}
A.dB.prototype={
$1:function(a){return H.k(a,"$iat").dY(this.a,this.b)},
$S:11}
A.c2.prototype={
al:function(a,b){var u,t
C.a.j(this.r2,b)
u=b.length
t=this.rx
this.rx=u>t?u:t;++this.ry},
a_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
this.l(0,new R.M("Update",!1))
for(u=this.k4,t=a.c,s=this.r1,r=this.r2,q=0;q<this.ry;++q)for(p=q*14,o=0;o<this.rx;++o){if(q>=r.length)return H.j(r,q)
n=r[q]
m=o<n.length?C.d.a6(n,o)-32:0
if(m<0||m>=64)m=0
s.N(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.N()
j=new T.aG(new Float32Array(16))
j.X()
k=new L.bl(1,C.e,n,j,l)
l.f=k}k.c.bx(s,l.c)
k.b=C.e
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.j(u,m)
t.a0(a,u[m])
a.e=a.e.e}},
cg:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
u=H.k(b3,"$iW").c
t=u.a
t.sdC(C.W)
for(s=[P.A],r=this.k4,q=[P.l],p=u.e,o=0*p,n=u.d,m=u.b,l=H.e(m,0),u=u.c,k=0;k<64;++k){j=k*7
i=H.p(new U.X(j,0,7,14,s),"$iX",q,"$aX")
h=C.b.q(j*p)
g=C.b.q(o)
i=H.e(i,0)
j=C.b.q(H.i(j+7,i)*p)-h
i=C.b.q(H.i(14,i)*p)-g
f=m.a
e=m.b
d=H.i(f+m.c,l)
c=H.i(e+m.d,l)
b=u.a
a=u.b
a0=C.f.bW(n,4)
a1=h+j
a2=g+i
if(n===0){a3=f+b
a4=a3+h
a5=e+a
a6=a5+g
a7=a3+a1
a8=a5+a2}else if(n===1){a3=d-a
a4=a3-a2
a5=e+b
a6=a5+h
a7=a3-g
a8=a5+a1}else if(n===2){a3=d-b
a4=a3-a1
a5=c-a
a6=a5-a2
a7=a3-h
a8=a5-g}else if(n===3){a3=f+a
a4=a3+g
a5=c-b
a6=a5-a1
a7=a3+a2
a8=a5-h}else{a4=0
a6=0
a7=0
a8=0}a9=V.eE(a4,f,d)
b0=V.eE(a6,e,c)
a1=V.eE(a7,f,d)
a2=V.eE(a8,e,c)
if(a0===0){b1=a4-a9
b2=a6-b0}else if(a0===1){b1=a6-b0
b2=a1-a7}else if(a0===2){b1=a1-a7
b2=a8-a2}else if(a0===3){b1=a2-a8
b2=a9-a4}else{b1=0
b2=0}C.a.j(r,L.f5(t,new U.X(a9,b0,a1-a9,a2-b0,s),new U.X(b1,b2,j,i,s),a0,p))}}}
A.dy.prototype={}
A.aP.prototype={}
A.aQ.prototype={}
A.at.prototype={}
L.cx.prototype={}
L.bQ.prototype={}
L.bR.prototype={
aD:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.bU.prototype={
h:function(a){return this.b}}
L.ap.prototype={}
L.dd.prototype={}
L.bS.prototype={
gbO:function(){return C.v},
a1:function(a){var u
this.b1(0,this.f)
this.r=C.e
u=this.e
u.globalCompositeOperation="source-over"
this.x=1
u.globalAlpha=1},
aE:function(a,b){var u,t,s
this.b1(0,this.f)
this.r=C.e
u=this.e
u.globalCompositeOperation="source-over"
this.x=1
u.globalAlpha=1
t=b>>>24&255
if(t<255){s=this.d
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.iJ(b)
s=this.d
u.fillRect(0,0,s.width,s.height)}},
B:function(a){},
a0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
t=b.a.c
s=b.d
r=b.b
q=b.r
p=a.e
o=p.c
n=p.a
m=p.b
if(this.x!==n){this.x=n
u.globalAlpha=n}if(this.r!==m){this.r=m
u.globalCompositeOperation=m.c}if(s===0){p=o.a
u.setTransform(p[0],p[1],p[2],p[3],p[4],p[5])
p=r.a
l=r.b
k=r.c
j=r.d
i=q[0]
h=q[1]
u.drawImage(t,p,l,k,j,i,h,q[8]-i,q[9]-h)}else if(s===1){p=o.a
u.setTransform(-p[2],-p[3],p[0],p[1],p[4],p[5])
u.drawImage(t,r.a,r.b,r.c,r.d,0-q[13],q[12],q[9]-q[1],q[8]-q[0])}else if(s===2){p=o.a
u.setTransform(-p[0],-p[1],-p[2],-p[3],p[4],p[5])
p=r.a
l=r.b
k=r.c
j=r.d
i=q[8]
h=q[9]
u.drawImage(t,p,l,k,j,0-i,0-h,i-q[0],h-q[1])}else if(s===3){p=o.a
u.setTransform(p[2],p[3],-p[0],-p[1],p[4],p[5])
u.drawImage(t,r.a,r.b,r.c,r.d,q[5],0-q[4],q[9]-q[1],q[8]-q[0])}},
b1:function(a,b){var u=b.a
this.e.setTransform(u[0],u[1],u[2],u[3],u[4],u[5])}}
L.bT.prototype={
gbO:function(){return C.j},
a1:function(a){var u,t,s
u=this.d
t=u.width
s=u.height
this.y=null
this.e.bindFramebuffer(36160,null)
this.e.viewport(0,0,t,s)
u=this.f
u.X()
if(typeof t!=="number")return H.R(t)
if(typeof s!=="number")return H.R(s)
u.bX(0,2/t,-2/s,1)
u.dV(0,-1,1,0)
this.x.sbM(u)},
aE:function(a,b){var u
C.a.sk(this.cs(),0)
this.d9(null)
this.da(0)
u=(b>>>24&255)/255
this.e.colorMask(!0,!0,!0,!0)
this.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
this.e.clear(17408)},
B:function(a){this.x.B(0)},
a0:function(a,b){var u,t
u=this.cy
t=this.x
if(u!==t){t.B(0)
this.x=u
u.ab(this)
this.x.sbM(this.f)}this.dd(a.e.b)
this.bo(b.a)
u.a0(a,b)},
dd:function(a){if(a!==this.Q){this.x.B(0)
this.Q=a
this.e.blendFunc(a.a,a.b)}},
bo:function(a){var u,t,s,r
u=this.fx
if(a!==u[0]){this.x.B(0)
C.a.t(u,0,a)
u=a.y
t=this.cx
if(u!==t){a.x=this
a.y=t
u=this.e
a.Q=u
a.ch=u.createTexture()
a.Q.activeTexture(33984)
a.Q.bindTexture(3553,a.ch)
s=a.Q.isEnabled(3089)
if(s)a.Q.disable(3089)
u=a.c
t=a.Q
r=t&&C.k
if(u!=null){r.bU(t,3553,0,6408,6408,5121,u)
a.z=a.Q.getError()===1281}else r.bV(t,3553,0,6408,a.a,a.b,0,6408,5121,null)
if(a.z){u=a.a
u=W.hO(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.k).bU(u,3553,0,6408,6408,5121,a.d)}if(s)a.Q.enable(3089)
a.Q.texParameteri(3553,10242,a.f.a)
a.Q.texParameteri(3553,10243,a.r.a)
a.Q.texParameteri(3553,10241,a.e.a)
a.Q.texParameteri(3553,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(3553,a.ch)}}},
cs:function(){var u=this.y
return u instanceof L.bV?u.r:this.r},
da:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
d9:function(a){this.e.disable(3089)},
cB:function(a){H.k(a,"$ia2").preventDefault()
this.b.j(0,new L.ap())},
cD:function(a){var u
H.k(a,"$ia2")
u=$.de+1
$.de=u
this.cx=u
this.c.j(0,new L.ap())}}
L.df.prototype={}
L.bV.prototype={}
L.ez.prototype={
$1:function(a){var u,t,s,r,q
H.eR(a)
if(typeof a!=="number")return a.aY()
u=a/1000
t=$.h2
if(typeof t!=="number")return H.R(t)
s=u-t
$.h2=u
$.fa=-1
L.h1()
t=$.fr()
t=H.o(t.slice(0),[H.e(t,0)])
r=t.length
q=0
for(;q<t.length;t.length===r||(0,H.fl)(t),++q)t[q].$1(s)},
$S:30}
L.bW.prototype={
cH:function(a){var u
H.eR(a)
if(this.a){if(typeof a!=="number")return a.e_()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.O(a)}}
L.el.prototype={}
L.bX.prototype={
sbM:function(a){var u=this.e.n(0,"uProjectionMatrix")
this.b.uniformMatrix4fv(u,!1,a.a)},
ab:function(a){var u,t,s,r
u=this.a
t=a.cx
if(u!==t){this.a=t
u=a.e
this.b=u
s=a.a
this.x=s
r=a.dy
this.f=r
this.r=a.fr
if(r.e!==t){r.e=t
r.x=s
r.r=u
u=u.createBuffer()
r.f=u
r.r.bindBuffer(34963,u)
r.r.bufferData(34963,r.a,r.b)}r.r.bindBuffer(34963,r.f)
u=this.r
t=u.e
r=a.cx
if(t!==r){u.e=r
u.x=s
t=a.e
u.r=t
t=t.createBuffer()
u.f=t
u.r.bindBuffer(34962,t)
u.r.bufferData(34962,u.a,u.b)}u.r.bindBuffer(34962,u.f)
u=this.cm(this.b)
this.c=u
this.d8(this.b,u)
this.dc(this.b,this.c)}this.b.useProgram(this.c)},
B:function(a){var u,t,s,r,q
u=this.f
t=u.c
if(t>0&&this.r.c>0){s=u.a.buffer
s.toString
H.h0(s,0,t)
r=new Int16Array(s,0,t)
u.r.bufferSubData(34963,0,r)
s=u.x
s.c=s.c+u.d
u=this.f
u.c=0
u.d=0
u=this.r
s=u.a.buffer
q=u.c
s.toString
H.h0(s,0,q)
r=new Float32Array(s,0,q)
u.r.bufferSubData(34962,0,r)
s=u.x
s.b=s.b+u.d
u=this.r
u.c=0
u.d=0
this.b.drawElements(4,t,5123,0);++this.x.a}},
cm:function(a){var u,t,s
u=a.createProgram()
t=this.ba(a,this.gaX(),35633)
s=this.ba(a,this.gaP(),35632)
a.attachShader(u,t)
a.attachShader(u,s)
a.linkProgram(u)
if(a.getProgramParameter(u,35714)===!0)return u
throw H.f(P.Y(a.isContextLost()?"ContextLost":a.getProgramInfoLog(u)))},
ba:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.f(P.Y(a.isContextLost()?"ContextLost":a.getShaderInfoLog(u)))},
d8:function(a,b){var u,t,s,r,q
u=this.d
u.bu(0)
t=H.G(a.getProgramParameter(b,35721))
if(typeof t!=="number")return H.R(t)
s=0
for(;s<t;++s){r=a.getActiveAttrib(b,s)
q=a.getAttribLocation(b,r.name)
a.enableVertexAttribArray(q)
u.t(0,r.name,q)}},
dc:function(a,b){var u,t,s,r,q
u=this.e
u.bu(0)
t=H.G(a.getProgramParameter(b,35718))
if(typeof t!=="number")return H.R(t)
s=0
for(;s<t;++s){r=a.getActiveUniform(b,s)
q=a.getUniformLocation(b,r.name)
u.t(0,r.name,q)}}}
L.dj.prototype={
gaX:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gaP:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
ab:function(a){var u
this.c1(a)
u=this.b;(u&&C.k).dX(u,this.e.n(0,"uSampler"),0)
u=this.d
this.r.aD(u.n(0,"aVertexPosition"),2,20,0)
this.r.aD(u.n(0,"aVertexTextCoord"),2,20,8)
this.r.aD(u.n(0,"aVertexAlpha"),1,20,16)},
a0:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=a2.e
t=u.a
s=u.c
r=a3.r
u=this.f
q=u.a
p=q.length
if(u.c+6>=p)this.B(0)
u=this.r
o=u.a
n=o.length
if(u.c+20>=n)this.B(0)
u=this.f
m=u.c
l=this.r
k=l.c
j=l.d
if(m>=p)return H.j(q,m)
q[m]=j
i=m+1
if(i>=p)return H.j(q,i)
q[i]=j+1
i=m+2
h=j+2
if(i>=p)return H.j(q,i)
q[i]=h
i=m+3
if(i>=p)return H.j(q,i)
q[i]=j
i=m+4
if(i>=p)return H.j(q,i)
q[i]=h
h=m+5
if(h>=p)return H.j(q,h)
q[h]=j+3
u.c=m+6
u.d+=6
u=r[0]
h=s.a
p=h[0]
i=h[4]
g=u*p+i
f=r[8]
e=f*p+i
i=h[1]
p=h[5]
d=u*i+p
c=f*i+p
p=r[1]
i=h[2]
b=p*i
f=r[9]
a=f*i
h=h[3]
a0=p*h
a1=f*h
if(k>=n)return H.j(o,k)
o[k]=g+b
h=k+1
if(h>=n)return H.j(o,h)
o[h]=d+a0
h=k+2
f=r[2]
if(h>=n)return H.j(o,h)
o[h]=f
f=k+3
h=r[3]
if(f>=n)return H.j(o,f)
o[f]=h
h=k+4
if(h>=n)return H.j(o,h)
o[h]=t
h=k+5
if(h>=n)return H.j(o,h)
o[h]=e+b
h=k+6
if(h>=n)return H.j(o,h)
o[h]=c+a0
h=k+7
f=r[6]
if(h>=n)return H.j(o,h)
o[h]=f
f=k+8
h=r[7]
if(f>=n)return H.j(o,f)
o[f]=h
h=k+9
if(h>=n)return H.j(o,h)
o[h]=t
h=k+10
if(h>=n)return H.j(o,h)
o[h]=e+a
h=k+11
if(h>=n)return H.j(o,h)
o[h]=c+a1
h=k+12
f=r[10]
if(h>=n)return H.j(o,h)
o[h]=f
f=k+13
h=r[11]
if(f>=n)return H.j(o,f)
o[f]=h
h=k+14
if(h>=n)return H.j(o,h)
o[h]=t
h=k+15
if(h>=n)return H.j(o,h)
o[h]=g+a
h=k+16
if(h>=n)return H.j(o,h)
o[h]=d+a1
h=k+17
f=r[14]
if(h>=n)return H.j(o,h)
o[h]=f
f=k+18
h=r[15]
if(f>=n)return H.j(o,f)
o[f]=h
h=k+19
if(h>=n)return H.j(o,h)
o[h]=t
l.c=k+20
l.d=j+4}}
L.f3.prototype={
gaX:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gaP:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.f4.prototype={
gaX:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gaP:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "}}
L.bl.prototype={
gdQ:function(){var u,t
u=this.f
if(u==null){u=T.N()
t=new T.aG(new Float32Array(16))
t.X()
t=new L.bl(1,C.e,u,t,this)
this.f=t
u=t}return u}}
L.dk.prototype={
bP:function(a,b){var u,t
u=this.d
this.e=u
u=u.c
u.bL()
t=this.e
t.a=1
t.b=C.e
u.dk(b)},
aS:function(a){var u,t,s,r,q
u=a.gaV()
t=a.ch
s=this.e
r=s.gdQ()
r.c.bx(u,s.c)
q=s.b
r.b=q
r.a=t*s.a
this.e=r
a.a_(this)
this.e=s}}
L.aL.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.bY.prototype={
sdC:function(a){var u
if(this.e===a)return
this.e=a
u=this.x
if(u==null||this.ch==null)return
if(u.cx!==this.y)return
u.bo(this)
this.Q.texParameteri(3553,10241,this.e.a)
this.Q.texParameteri(3553,10240,this.e.a)}}
L.bZ.prototype={}
L.c_.prototype={}
L.dl.prototype={}
T.cX.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.bx.prototype={
gbt:function(){return!1}}
R.aA.prototype={}
R.aC.prototype={}
R.aK.prototype={}
R.M.prototype={
gbt:function(){return!0}}
R.bB.prototype={
aQ:function(a,b){var u,t,s
u=this.a
if(u==null)return!1
t=u.n(0,a)
if(t==null)return!1
s=t.d
return b?s>0:t.c.length>s},
dI:function(a){return this.aQ(a,!1)},
aG:function(a,b,c){var u,t
a.f=!1
a.r=!1
u=this.a
if(u==null)return
t=u.n(0,a.a)
if(t==null)return
t.co(a,b,c)},
scq:function(a){this.a=H.p(a,"$ifL",[P.w,[R.al,R.M]],"$afL")}}
R.b4.prototype={
h:function(a){return this.b}}
R.al.prototype={
ai:function(a,b,c,d){H.b(a,{func:1,ret:-1,args:[H.e(this,0)]})
H.b(c,{func:1,ret:-1})
return this.bl(a,!1,0)},
bl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
u=H.e(this,0)
t=new R.D(c,!1,this,H.b(a,{func:1,ret:-1,args:[u]}),this.$ti)
s=this.c
r=s.length
q=new Array(r+1)
q.fixed$length=Array
p=H.o(q,[[R.D,u]])
o=p.length-1
for(n=0,m=0;n<r;++n,m=k){l=s[n]
if(n===m&&l.a<c){k=m+1
o=m
m=k}k=m+1
C.a.t(p,m,l)}C.a.t(p,o,t)
this.sd1(p)
u=[R.aA]
if(H.F(t,"$iD",u,null)){r=$.fp();(r&&C.a).j(r,H.fk(t,"$iD",u,"$aD"))}else{u=[R.aC]
if(H.F(t,"$iD",u,null)){r=$.fq();(r&&C.a).j(r,H.fk(t,"$iD",u,"$aD"))}else{u=[R.aK]
if(H.F(t,"$iD",u,null)){r=$.fs();(r&&C.a).j(r,H.fk(t,"$iD",u,"$aD"))}}}return t},
co:function(a,b,c){var u,t,s,r,q,p,o
u=H.e(this,0)
H.i(a,u)
t=this.c
s=c===C.r
for(r=t.length,u={func:1,ret:-1,args:[u]},q=0;q<r;++q){p=t[q]
if(!p.c)if(p.b<=0){p.d
o=s}else o=!0
else o=!0
if(o)continue
H.b(p.f,u).$1(a)}},
sd1:function(a){this.c=H.p(a,"$ir",[[R.D,H.e(this,0)]],"$ar")}}
R.D.prototype={}
R.b7.prototype={
h:function(a){return this.b}}
R.cN.prototype={}
R.I.prototype={}
R.ai.prototype={}
T.d3.prototype={
h:function(a){var u=this.a
return"Matrix [a="+H.d(u[0])+", b="+H.d(u[1])+", c="+H.d(u[2])+", d="+H.d(u[3])+", tx="+H.d(u[4])+", ty="+H.d(u[5])+"]"},
gby:function(){var u=this.a
return u[0]*u[3]-u[1]*u[2]},
aU:function(a){var u,t,s,r,q,p,o,n
u=P.l
H.p(a,"$iO",[u],"$aO")
t=a.a
t.toString
s=a.b
s.toString
r=this.a
q=r[0]
if(typeof t!=="number")return t.a4()
p=r[2]
if(typeof s!=="number")return s.a4()
o=t*q+s*p+r[4]
n=t*r[1]+s*r[3]+r[5]
u=[u]
if(H.F(null,"$iC",u,null)){null.e1(o,n)
return}else return new U.C(o,n,u)},
bL:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
an:function(a,b,c){var u,t
u=this.a
t=u[0]
if(typeof b!=="number")return H.R(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.R(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
N:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
dk:function(a){var u,t
u=this.a
t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
bx:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=a.a
t=u[0]
s=u[1]
r=u[2]
q=u[3]
p=u[4]
o=u[5]
u=b.a
n=u[0]
m=u[1]
l=u[2]
k=u[3]
j=u[4]
i=u[5]
u=this.a
u[0]=t*n+s*l
u[1]=t*m+s*k
u[2]=r*n+q*l
u[3]=r*m+q*k
u[4]=p*n+o*l+j
u[5]=p*m+o*k+i}}
T.aG.prototype={
X:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=1
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=1
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=1},
bX:function(a,b,c,d){var u=this.a
u[0]=u[0]*b
u[1]=u[1]*b
u[2]=u[2]*b
u[3]=u[3]*b
u[4]=u[4]*c
u[5]=u[5]*c
u[6]=u[6]*c
u[7]=u[7]*c
u[8]=u[8]*d
u[9]=u[9]*d
u[10]=u[10]*d
u[11]=u[11]*d},
dV:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d}}
U.C.prototype={
h:function(a){return"Point<"+new H.bh(H.e(this,0)).h(0)+"> [x="+H.d(this.a)+", y="+H.d(this.b)+"]"},
u:function(a,b){if(b==null)return!1
return H.F(b,"$iO",[P.l],"$aO")&&this.a===J.fv(b)&&this.b===b.gG(b)},
gi:function(a){var u,t
u=C.b.gi(this.a)
t=C.b.gi(this.b)
return O.fI(O.b9(O.b9(0,u),t))},
sM:function(a,b){this.a=H.i(b,H.e(this,0))},
sG:function(a,b){this.b=H.i(b,H.e(this,0))},
$iO:1,
gM:function(a){return this.a},
gG:function(a){return this.b}}
U.X.prototype={
h:function(a){return"Rectangle<"+new H.bh(H.e(this,0)).h(0)+"> [left="+H.d(this.a)+", top="+H.d(this.b)+", width="+H.d(this.c)+", height="+H.d(this.d)+"]"},
u:function(a,b){var u
if(b==null)return!1
if(H.F(b,"$iao",[P.l],"$aao")){u=J.ck(b)
u=this.a===u.gU(b)&&this.b===u.gV(b)&&this.c===u.gW(b)&&this.d===u.gT(b)}else u=!1
return u},
gi:function(a){var u,t,s,r
u=C.b.gi(this.a)
t=C.b.gi(this.b)
s=C.b.gi(this.c)
r=C.b.gi(this.d)
return O.fI(O.b9(O.b9(O.b9(O.b9(0,u),t),s),r))},
sU:function(a,b){this.a=H.i(b,H.e(this,0))},
sV:function(a,b){this.b=H.i(b,H.e(this,0))},
sW:function(a,b){this.c=H.i(b,H.e(this,0))},
sT:function(a,b){this.d=H.i(b,H.e(this,0))},
$iao:1,
gU:function(a){return this.a},
gV:function(a){return this.b},
gW:function(a){return this.c},
gT:function(a){return this.d}}
N.bC.prototype={
cL:function(a){this.d.ac()
this.e.ac()
this.b.D(0,this.a)},
cJ:function(a){this.d.ac()
this.e.ac()
this.b.bw(new T.cX("Failed to load "+H.d(this.a.src)+".",null))}}
O.c0.prototype={
aj:function(a){var u=0,t=P.h4(O.c0),s,r=this,q,p,o,n
var $async$aj=P.hb(function(b,c){if(b===1)return P.fX(c,t)
while(true)switch(u){case 0:q=r.gdR()
p=[P.B,,]
o=H.e(q,0)
u=3
return P.fW(P.hW(new H.d2(q,H.b(new O.dt(),{func:1,ret:p,args:[o]}),[o,p]),null),$async$aj)
case 3:n=r.gdq().length
if(n>0)throw H.f(P.Y("Failed to load "+n+" resource(s)."))
else{s=r
u=1
break}case 1:return P.fY(s,t)}})
return P.fZ($async$aj,t)},
gdD:function(){var u,t
u=this.a
u=u.gaW(u)
t=H.eJ(u,"z",0)
return P.f2(new H.bj(u,H.b(new O.ds(),{func:1,ret:P.L,args:[t]}),[t]),!0,t)},
gdR:function(){var u,t
u=this.a
u=u.gaW(u)
t=H.eJ(u,"z",0)
return P.f2(new H.bj(u,H.b(new O.du(),{func:1,ret:P.L,args:[t]}),[t]),!0,t)},
gdq:function(){var u,t
u=this.a
u=u.gaW(u)
t=H.eJ(u,"z",0)
return P.f2(new H.bj(u,H.b(new O.dr(),{func:1,ret:P.L,args:[t]}),[t]),!0,t)},
cc:function(a,b,c,d){var u,t,s
u=a+"."+b
t=O.ig(a,b,c,d)
s=this.a
if(s.aF(u))throw H.f(P.Y("ResourceManager already contains a resource called '"+b+"'"))
else s.t(0,u,t)
t.f.a.a2(new O.dq(this),null)},
ct:function(a,b){var u,t
u=this.a.n(0,a+"."+b)
if(u==null)throw H.f(P.Y("Resource '"+b+"' does not exist."))
else{t=u.d
if(t!=null)return t
else{t=u.e
if(t!=null)throw H.f(t)
else throw H.f(P.Y("Resource '"+b+"' has not finished loading yet."))}}}}
O.dt.prototype={
$1:function(a){return H.k(a,"$iP").f.a},
$S:33}
O.ds.prototype={
$1:function(a){return H.k(a,"$iP").d!=null},
$S:6}
O.du.prototype={
$1:function(a){H.k(a,"$iP")
return a.d==null&&a.e==null},
$S:6}
O.dr.prototype={
$1:function(a){return H.k(a,"$iP").e!=null},
$S:6}
O.dq.prototype={
$1:function(a){var u=this.a
u.b.j(0,u.gdD().length/u.a.a)},
$S:2}
O.P.prototype={
c4:function(a,b,c,d){var u,t,s,r,q,p,o
u=d.a2(new O.dm(this),null)
t=new O.dn(this)
s=H.e(u,0)
r=$.n
q=[s]
p=new P.v(0,r,q)
if(r!==C.c)t=P.h6(t,r)
s=[s,s]
u.a5(new P.U(p,2,null,t,s))
o=H.b(new O.dp(this),{func:1})
u=$.n
if(u!==C.c){u.toString
H.b(o,{func:1,ret:null})}p.a5(new P.U(new P.v(0,u,q),8,o,null,s))},
h:function(a){return"ResourceManagerResource [kind="+this.a+", name="+this.b+", url = "+this.c+"]"}}
O.dm.prototype={
$1:function(a){this.a.d=a},
$S:2}
O.dn.prototype={
$1:function(a){this.a.e=a},
$S:2}
O.dp.prototype={
$0:function(){var u=this.a
u.f.D(0,u)},
$S:0}
Q.d4.prototype={}
F.eP.prototype={
$1:function(a){var u,t,s
H.k(a,"$iI")
u=this.a
if(u.a!=null)return
t=this.b.aJ.bq(this.c,0.5,K.iD())
u.a=t
s=t.gbr(t)
s.a.bb(s,8).e=6.283185307179586
s=u.a
s.toString
s.f=H.b(new F.eO(u),{func:1,ret:-1})},
$S:35}
F.eO.prototype={
$0:function(){this.a.a=null
return},
$S:0};(function aliases(){var u=J.y.prototype
u.c_=u.h
u=J.bH.prototype
u.c0=u.h
u=A.b3.prototype
u.ap=u.L
u.bZ=u.a_
u=L.bX.prototype
u.c1=u.ab})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
u(H,"iw","i8",36)
t(P,"iF","io",3)
t(P,"iG","ip",3)
t(P,"iH","iq",3)
u(P,"hh","iC",1)
s(P,"iI",1,null,["$2","$1"],["h5",function(a){return P.h5(a,null)}],4,0)
u(P,"hg","iy",1)
r(P.ca.prototype,"gdi",0,1,null,["$2","$1"],["P","bw"],4,0)
r(P.cg.prototype,"gdg",1,0,null,["$1","$0"],["D","dh"],15,0)
r(P.v.prototype,"gck",0,1,null,["$2","$1"],["v","cl"],4,0)
q(P.ce.prototype,"gcY","cZ",1)
t(K,"jE","il",5)
t(K,"iD","ij",5)
t(K,"iE","ik",5)
var o
p(o=A.J.prototype,"gcO","cP",23)
p(o,"gcQ","cR",24)
p(o,"gcS","cT",25)
p(o,"gcM","cN",26)
p(A.c2.prototype,"gcf","cg",29)
p(o=L.bT.prototype,"gcA","cB",12)
p(o,"gcC","cD",12)
p(L.bW.prototype,"gcG","cH",31)
p(o=N.bC.prototype,"gcK","cL",7)
p(o,"gcI","cJ",7)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.m,null)
s(P.m,[H.f0,J.y,J.cr,P.z,H.ba,P.ae,H.aD,H.b0,H.dK,P.ad,H.b5,H.cf,H.bh,P.d_,H.cU,H.cW,H.cQ,H.em,P.eu,P.c7,P.bf,P.e_,P.dZ,P.B,P.ca,P.U,P.v,P.c8,P.a7,P.e2,P.bq,P.ce,P.et,P.H,P.ew,P.a6,P.L,P.l,P.d8,P.c1,P.e6,P.cJ,P.r,P.q,P.u,P.f6,P.w,P.bg,W.cB,W.b6,W.cH,P.O,K.c6,K.cT,K.dI,K.c4,K.dJ,R.bB,A.W,A.ct,A.cv,L.df,L.bW,A.bd,A.aM,A.T,A.dy,A.aP,A.aQ,A.at,L.cx,L.bQ,L.bR,L.bU,L.ap,L.dd,L.bV,L.el,L.bX,L.bl,L.dk,L.aL,L.bY,L.bZ,L.c_,L.dl,R.M,R.b4,R.b7,T.d3,T.aG,U.C,U.X,N.bC,O.c0,O.P,Q.d4])
s(J.y,[J.cO,J.bF,J.bH,J.am,J.b8,J.aE,H.bL,W.aB,W.bz,W.cc,W.cD,W.bA,W.a,W.a8,W.ch,P.by,P.bM,P.aq,P.c3,P.bi])
s(J.bH,[J.d9,J.as,J.an])
t(J.f_,J.am)
s(J.b8,[J.bE,J.cP])
s(P.z,[H.cE,H.d0,H.bj])
s(H.cE,[H.aF,H.cV])
t(H.cF,H.d0)
s(P.ae,[H.d1,H.dQ])
t(H.d2,H.aF)
s(H.b0,[H.da,H.eT,H.dG,H.cR,H.eK,H.eL,H.eM,P.dV,P.dU,P.dW,P.dX,P.ev,P.dS,P.dR,P.ex,P.ey,P.eC,P.cL,P.cK,P.e7,P.ef,P.eb,P.ec,P.ed,P.e9,P.ee,P.e8,P.ei,P.ej,P.eh,P.eg,P.dE,P.dF,P.en,P.eB,P.eq,P.ep,P.er,P.cZ,W.e5,P.eF,A.cw,A.cu,A.dh,A.di,A.dC,A.dz,A.dA,A.dB,L.ez,O.dt,O.ds,O.du,O.dr,O.dq,O.dm,O.dn,O.dp,F.eP,F.eO])
s(P.ad,[H.d7,H.cS,H.dN,H.c5,H.cz,H.dv,P.aI,P.ac,P.dO,P.dM,P.be,P.cA,P.cC,T.cX])
s(H.dG,[H.dD,H.aZ])
t(P.cY,P.d_)
t(H.a5,P.cY)
t(H.bI,H.bL)
s(H.bI,[H.bm,H.bo])
t(H.bn,H.bm)
t(H.bJ,H.bn)
t(H.bp,H.bo)
t(H.bK,H.bp)
t(H.d5,H.bJ)
t(H.d6,H.bK)
s(P.bf,[P.es,W.e3,R.al])
t(P.cb,P.es)
t(P.dY,P.cb)
t(P.e0,P.e_)
t(P.K,P.e0)
t(P.dT,P.dZ)
s(P.ca,[P.c9,P.cg])
t(P.e1,P.e2)
t(P.br,P.bq)
t(P.eo,P.ew)
s(P.l,[P.ab,P.A])
s(P.ac,[P.bN,P.cM])
s(W.aB,[W.aH,W.bk])
t(W.c,W.aH)
t(W.h,W.c)
s(W.h,[W.cp,W.cq,W.aj,W.cI,W.a4,W.bb,W.dw])
t(W.b2,W.cc)
s(W.a,[W.ar,P.a2])
s(W.ar,[W.af,W.S,W.ah])
t(W.ci,W.ch)
t(W.dH,W.ci)
t(W.dP,W.bb)
t(W.aa,W.S)
t(W.cd,W.bA)
t(W.f8,W.e3)
s(P.a7,[W.e4,R.D])
t(A.a3,R.bB)
s(A.a3,[A.cs,A.bD,A.c2])
t(A.aY,L.df)
t(A.b3,A.bD)
t(A.dg,L.bW)
s(A.b3,[A.dx,A.J])
s(L.dd,[L.bS,L.bT])
s(L.bX,[L.dj,L.f3,L.f4])
s(R.M,[R.bx,R.cN])
s(R.bx,[R.aA,R.aC,R.aK])
s(R.cN,[R.I,R.ai])
u(H.bm,P.a6)
u(H.bn,H.aD)
u(H.bo,P.a6)
u(H.bp,H.aD)
u(W.cc,W.cB)
u(W.ch,P.a6)
u(W.ci,W.b6)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.aj.prototype
C.S=J.y.prototype
C.a=J.am.prototype
C.f=J.bE.prototype
C.T=J.bF.prototype
C.b=J.b8.prototype
C.d=J.aE.prototype
C.U=J.an.prototype
C.u=J.d9.prototype
C.k=P.aq.prototype
C.n=J.as.prototype
C.G=W.aa.prototype
C.H=W.bk.prototype
C.e=new L.cx(1,771,"source-over")
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.N=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.M=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.L=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.p=function(hooks) { return hooks; }

C.O=new P.d8()
C.c=new P.eo()
C.r=new R.b4("EventPhase.CAPTURING_PHASE")
C.P=new R.b4("EventPhase.AT_TARGET")
C.Q=new R.b4("EventPhase.BUBBLING_PHASE")
C.i=new R.b7("InputEventMode.MouseOnly")
C.R=new R.b7("InputEventMode.TouchOnly")
C.t=new R.b7("InputEventMode.MouseAndTouch")
C.V=H.o(u([]),[P.q])
C.j=new L.bU("RenderEngine.WebGL")
C.v=new L.bU("RenderEngine.Canvas2D")
C.W=new L.bZ(9728)
C.X=new L.bZ(9729)
C.w=new L.dl(33071)
C.x=new A.T("StageAlign.TOP_LEFT")
C.y=new A.T("StageAlign.TOP")
C.z=new A.T("StageAlign.TOP_RIGHT")
C.A=new A.T("StageAlign.LEFT")
C.h=new A.T("StageAlign.NONE")
C.B=new A.T("StageAlign.RIGHT")
C.C=new A.T("StageAlign.BOTTOM_LEFT")
C.D=new A.T("StageAlign.BOTTOM")
C.E=new A.T("StageAlign.BOTTOM_RIGHT")
C.l=new A.bd("StageRenderMode.AUTO")
C.F=new A.bd("StageRenderMode.ONCE")
C.Y=new A.bd("StageRenderMode.STOP")
C.Z=new A.aM("StageScaleMode.EXACT_FIT")
C.a_=new A.aM("StageScaleMode.NO_BORDER")
C.a0=new A.aM("StageScaleMode.NO_SCALE")
C.m=new A.aM("StageScaleMode.SHOW_ALL")})();(function staticFields(){$.db=null
$.dc=null
$.a1=0
$.b_=null
$.fy=null
$.fb=!1
$.hn=null
$.hd=null
$.hq=null
$.eG=null
$.eN=null
$.fh=null
$.aR=null
$.bs=null
$.bt=null
$.fc=!1
$.n=C.c
$.f7=null
$.ak=0
$.fV=1
$.de=0
$.h2=17976931348623157e292
$.fa=-1
$.i5=!1
$.i6="auto"})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"j8","ht",function(){return H.hm("_$dart_dartClosure")})
u($,"jb","fm",function(){return H.hm("_$dart_js")})
u($,"jl","hw",function(){return H.a9(H.dL({
toString:function(){return"$receiver$"}}))})
u($,"jm","hx",function(){return H.a9(H.dL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"jn","hy",function(){return H.a9(H.dL(null))})
u($,"jo","hz",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jr","hC",function(){return H.a9(H.dL(void 0))})
u($,"js","hD",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jq","hB",function(){return H.a9(H.fQ(null))})
u($,"jp","hA",function(){return H.a9(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ju","hF",function(){return H.a9(H.fQ(void 0))})
u($,"jt","hE",function(){return H.a9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"jx","fo",function(){return P.im()})
u($,"jD","bv",function(){return[]})
u($,"j7","hs",function(){return new A.cv(H.o([1,2],[P.ab]))})
u($,"jB","fr",function(){return[]})
u($,"jz","fp",function(){return H.o([],[[R.D,R.aA]])})
u($,"jA","fq",function(){return H.o([],[[R.D,R.aC]])})
u($,"jC","fs",function(){return H.o([],[[R.D,R.aK]])})
u($,"jI","ft",function(){var t=W.j6().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"jM","hG",function(){return Q.it()})
u($,"jd","fn",function(){return H.i2(P.w,Q.d4)})
u($,"jc","hu",function(){return P.ag(P.w)})
u($,"je","hv",function(){var t=$.hu()
t.toString
return new P.dY(t,[H.e(t,0)])})})()
var v={mangledGlobalNames:{A:"int",ab:"double",l:"num",w:"String",L:"bool",q:"Null",r:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.q},{func:1,ret:-1},{func:1,ret:P.q,args:[,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.m],opt:[P.u]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:P.L,args:[O.P]},{func:1,ret:-1,args:[W.a]},{func:1,ret:P.q,args:[,P.u]},{func:1,args:[,]},{func:1,ret:P.q,args:[,,]},{func:1,ret:-1,args:[A.at]},{func:1,ret:-1,args:[P.a2]},{func:1,ret:-1,args:[,]},{func:1,ret:P.q,args:[P.A,,]},{func:1,ret:-1,opt:[P.m]},{func:1,ret:P.A},{func:1,ret:[P.v,,],args:[,]},{func:1,args:[W.a]},{func:1,ret:A.W,args:[W.a4]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:P.q,args:[,],opt:[P.u]},{func:1,ret:-1,args:[A.J]},{func:1,ret:-1,args:[W.S]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.q,args:[{func:1,ret:-1}]},{func:1,ret:A.aQ},{func:1,ret:-1,args:[A.W]},{func:1,ret:P.q,args:[P.l]},{func:1,ret:-1,args:[P.l]},{func:1,ret:-1,args:[P.w]},{func:1,ret:[P.B,,],args:[O.P]},{func:1,args:[,P.w]},{func:1,ret:P.q,args:[R.I]},{func:1,ret:P.l},{func:1,args:[P.w]},{func:1,ret:P.L,args:[A.J]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.y,CanvasGradient:J.y,CanvasPattern:J.y,DOMError:J.y,MediaError:J.y,Navigator:J.y,NavigatorConcurrentHardware:J.y,NavigatorUserMediaError:J.y,OverconstrainedError:J.y,PositionError:J.y,WebGLActiveInfo:J.y,WebGLFramebuffer:J.y,WebGLRenderbuffer:J.y,WebGL2RenderingContext:J.y,WebGLShader:J.y,SQLError:J.y,ArrayBufferView:H.bL,Float32Array:H.d5,Int16Array:H.d6,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,HTMLAnchorElement:W.cp,HTMLAreaElement:W.cq,HTMLCanvasElement:W.aj,CanvasRenderingContext2D:W.bz,CSSStyleDeclaration:W.b2,MSStyleCSSProperties:W.b2,CSS2Properties:W.b2,DOMException:W.cD,DOMRectReadOnly:W.bA,SVGAElement:W.c,SVGAnimateElement:W.c,SVGAnimateMotionElement:W.c,SVGAnimateTransformElement:W.c,SVGAnimationElement:W.c,SVGCircleElement:W.c,SVGClipPathElement:W.c,SVGDefsElement:W.c,SVGDescElement:W.c,SVGDiscardElement:W.c,SVGEllipseElement:W.c,SVGFEBlendElement:W.c,SVGFEColorMatrixElement:W.c,SVGFEComponentTransferElement:W.c,SVGFECompositeElement:W.c,SVGFEConvolveMatrixElement:W.c,SVGFEDiffuseLightingElement:W.c,SVGFEDisplacementMapElement:W.c,SVGFEDistantLightElement:W.c,SVGFEFloodElement:W.c,SVGFEFuncAElement:W.c,SVGFEFuncBElement:W.c,SVGFEFuncGElement:W.c,SVGFEFuncRElement:W.c,SVGFEGaussianBlurElement:W.c,SVGFEImageElement:W.c,SVGFEMergeElement:W.c,SVGFEMergeNodeElement:W.c,SVGFEMorphologyElement:W.c,SVGFEOffsetElement:W.c,SVGFEPointLightElement:W.c,SVGFESpecularLightingElement:W.c,SVGFESpotLightElement:W.c,SVGFETileElement:W.c,SVGFETurbulenceElement:W.c,SVGFilterElement:W.c,SVGForeignObjectElement:W.c,SVGGElement:W.c,SVGGeometryElement:W.c,SVGGraphicsElement:W.c,SVGImageElement:W.c,SVGLineElement:W.c,SVGLinearGradientElement:W.c,SVGMarkerElement:W.c,SVGMaskElement:W.c,SVGMetadataElement:W.c,SVGPathElement:W.c,SVGPatternElement:W.c,SVGPolygonElement:W.c,SVGPolylineElement:W.c,SVGRadialGradientElement:W.c,SVGRectElement:W.c,SVGScriptElement:W.c,SVGSetElement:W.c,SVGStopElement:W.c,SVGStyleElement:W.c,SVGElement:W.c,SVGSVGElement:W.c,SVGSwitchElement:W.c,SVGSymbolElement:W.c,SVGTSpanElement:W.c,SVGTextContentElement:W.c,SVGTextElement:W.c,SVGTextPathElement:W.c,SVGTextPositioningElement:W.c,SVGTitleElement:W.c,SVGUseElement:W.c,SVGViewElement:W.c,SVGGradientElement:W.c,SVGComponentTransferFunctionElement:W.c,SVGFEDropShadowElement:W.c,SVGMPathElement:W.c,Element:W.c,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,Event:W.a,InputEvent:W.a,EventTarget:W.aB,HTMLFormElement:W.cI,HTMLImageElement:W.a4,KeyboardEvent:W.af,HTMLAudioElement:W.bb,HTMLMediaElement:W.bb,PointerEvent:W.S,MouseEvent:W.S,DragEvent:W.S,Document:W.aH,HTMLDocument:W.aH,Node:W.aH,HTMLSelectElement:W.dw,Touch:W.a8,TouchEvent:W.ah,TouchList:W.dH,CompositionEvent:W.ar,FocusEvent:W.ar,TextEvent:W.ar,UIEvent:W.ar,HTMLVideoElement:W.dP,WheelEvent:W.aa,Window:W.bk,DOMWindow:W.bk,ClientRect:W.cd,DOMRect:W.cd,WebGLBuffer:P.by,WebGLContextEvent:P.a2,WebGLProgram:P.bM,WebGLRenderingContext:P.aq,WebGLTexture:P.c3,WebGLUniformLocation:P.bi})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLFramebuffer:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.bm.$nativeSuperclassTag="ArrayBufferView"
H.bn.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bo.$nativeSuperclassTag="ArrayBufferView"
H.bp.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.cm,[])
else F.cm([])})})()
//# sourceMappingURL=main.dart.js.map
