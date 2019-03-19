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
a[c]=function(){a[c]=function(){H.jF(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.fL(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={fv:function fv(){},
iv:function(){return new P.aB("No element")},
iw:function(){return new P.aB("Too many elements")},
d6:function d6(){},
aP:function aP(){},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dr:function dr(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(){},
bO:function(a){var u,t
u=H.q(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
jq:function(a){return v.types[H.F(a)]},
jx:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.x(a).$ian},
a:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.bR(a)
if(typeof u!=="string")throw H.f(H.f5(a))
return u},
aS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
iJ:function(a){var u,t
if(typeof a!=="string")H.G(H.f5(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.ih(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bq:function(a){return H.iG(a)+H.fJ(H.aK(a),0,null)},
iG:function(a){var u,t,s,r,q,p,o,n,m
u=J.x(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.X||!!u.$iaE){p=C.t(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bO(r.length>1&&C.c.a6(r,0)===36?C.c.cd(r,1):r)},
iH:function(){return Date.now()},
iI:function(){var u,t
if($.dC!=null)return
$.dC=1000
$.dD=H.j3()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.dC=1e6
$.dD=new H.dB(t)},
V:function(a){throw H.f(H.f5(a))},
k:function(a,b){if(a==null)J.bQ(a)
throw H.f(H.bM(a,b))},
bM:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a3(!0,b,"index",null)
u=H.F(J.bQ(a))
if(!(b<0)){if(typeof u!=="number")return H.V(u)
t=b>=u}else t=!0
if(t)return P.c0(b,a,"index",null,u)
return P.cg(b,"index")},
f5:function(a){return new P.a3(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.bp()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.hP})
u.name=""}else u.toString=H.hP
return u},
hP:function(){return J.bR(this.dartException)},
G:function(a){throw H.f(a)},
cR:function(a){throw H.f(P.au(a))},
ae:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.p([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.e0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
e1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
hk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
hh:function(a,b){return new H.dy(a,b==null?null:b.method)},
fw:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.dg(a,t,u?null:b.receiver)},
K:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.fk(a)
if(a==null)return
if(a instanceof H.bi)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.dj(s,16)&8191)===10)switch(r){case 438:return u.$1(H.fw(H.a(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.hh(H.a(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.hU()
p=$.hV()
o=$.hW()
n=$.hX()
m=$.i_()
l=$.i0()
k=$.hZ()
$.hY()
j=$.i2()
i=$.i1()
h=q.C(t)
if(h!=null)return u.$1(H.fw(H.q(t),h))
else{h=p.C(t)
if(h!=null){h.method="call"
return u.$1(H.fw(H.q(t),h))}else{h=o.C(t)
if(h==null){h=n.C(t)
if(h==null){h=m.C(t)
if(h==null){h=l.C(t)
if(h==null){h=k.C(t)
if(h==null){h=n.C(t)
if(h==null){h=j.C(t)
if(h==null){h=i.C(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.hh(H.q(t),h))}}return u.$1(new H.e3(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cq()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.a3(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cq()
return a},
b2:function(a){var u
if(a instanceof H.bi)return a.b
if(a==null)return new H.cI(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.cI(a)},
jn:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.D(0,a[t],a[s])}return b},
jw:function(a,b,c,d,e,f){H.i(a,"$iav")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.eq("Unsupported number of arguments for wrapped closure"))},
b_:function(a,b){var u
H.F(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jw)
a.$identity=u
return u},
io:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.dU().constructor.prototype):Object.create(new H.b9(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.a4
if(typeof q!=="number")return q.G()
$.a4=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.h5(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.jq,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.h3:H.fl
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.f("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.h5(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
ik:function(a,b,c,d){var u=H.fl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
h5:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.im(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ik(t,!r,u,b)
if(t===0){r=$.a4
if(typeof r!=="number")return r.G()
$.a4=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ba
if(q==null){q=H.d0("self")
$.ba=q}return new Function(r+H.a(q)+";return "+p+"."+H.a(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a4
if(typeof r!=="number")return r.G()
$.a4=r+1
o+=r
r="return function("+o+"){return this."
q=$.ba
if(q==null){q=H.d0("self")
$.ba=q}return new Function(r+H.a(q)+"."+H.a(u)+"("+o+");}")()},
il:function(a,b,c,d){var u,t
u=H.fl
t=H.h3
switch(b?-1:a){case 0:throw H.f(H.iO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
im:function(a,b){var u,t,s,r,q,p,o,n
u=$.ba
if(u==null){u=H.d0("self")
$.ba=u}t=$.h2
if(t==null){t=H.d0("receiver")
$.h2=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.il(r,!p,s,b)
if(r===1){u="return function(){return this."+H.a(u)+"."+H.a(s)+"(this."+H.a(t)+");"
t=$.a4
if(typeof t!=="number")return t.G()
$.a4=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.a(u)+"."+H.a(s)+"(this."+H.a(t)+", "+n+");"
t=$.a4
if(typeof t!=="number")return t.G()
$.a4=t+1
return new Function(u+t+"}")()},
fL:function(a,b,c,d,e,f,g){return H.io(a,b,H.F(c),d,!!e,!!f,g)},
fl:function(a){return a.a},
h3:function(a){return a.c},
d0:function(a){var u,t,s,r,q
u=new H.b9("self","target","receiver","name")
t=J.h9(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.a1(a,"String"))},
kl:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.a1(a,"double"))},
fi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.a1(a,"num"))},
jj:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.a1(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.a1(a,"int"))},
fS:function(a,b){throw H.f(H.a1(a,H.bO(H.q(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.fS(a,b)},
ko:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.x(a)[b])return a
H.fS(a,b)},
fe:function(a){if(a==null)return a
if(!!J.x(a).$it)return a
throw H.f(H.a1(a,"List<dynamic>"))},
jy:function(a,b){var u
if(a==null)return a
u=J.x(a)
if(!!u.$it)return a
if(u[b])return a
H.fS(a,b)},
hH:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.F(u)]
else return a.$S()}return},
b0:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.hH(J.x(a))
if(u==null)return!1
return H.hw(u,null,b,null)},
c:function(a,b){var u,t
if(a==null)return a
if($.fG)return a
$.fG=!0
try{if(H.b0(a,b))return a
u=H.b3(b)
t=H.a1(a,u)
throw H.f(t)}finally{$.fG=!1}},
b1:function(a,b){if(a!=null&&!H.fK(a,b))H.G(H.a1(a,H.b3(b)))
return a},
a1:function(a,b){return new H.cu("TypeError: "+P.fr(a)+": type '"+H.jc(a)+"' is not a subtype of type '"+b+"'")},
jc:function(a){var u,t
u=J.x(a)
if(!!u.$ibb){t=H.hH(u)
if(t!=null)return H.b3(t)
return"Closure"}return H.bq(a)},
jF:function(a){throw H.f(new P.d3(H.q(a)))},
iO:function(a){return new H.dN(a)},
hJ:function(a){return v.getIsolateTag(a)},
p:function(a,b){a.$ti=b
return a},
aK:function(a){if(a==null)return
return a.$ti},
km:function(a,b,c){return H.b4(a["$a"+H.a(c)],H.aK(b))},
fP:function(a,b,c,d){var u
H.q(c)
H.F(d)
u=H.b4(a["$a"+H.a(c)],H.aK(b))
return u==null?null:u[d]},
cQ:function(a,b,c){var u
H.q(b)
H.F(c)
u=H.b4(a["$a"+H.a(b)],H.aK(a))
return u==null?null:u[c]},
e:function(a,b){var u
H.F(b)
u=H.aK(a)
return u==null?null:u[b]},
b3:function(a){return H.aI(a,null)},
aI:function(a,b){var u,t
H.v(b,"$it",[P.l],"$at")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bO(a[0].name)+H.fJ(a,1,b)
if(typeof a=="function")return H.bO(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.a(b[t])}if('func' in a)return H.j1(a,b)
if('futureOr' in a)return"FutureOr<"+H.aI("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
j1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.l]
H.v(b,"$it",u,"$at")
if("bounds" in a){t=a.bounds
if(b==null){b=H.p([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.i(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.c.G(o,b[m])
l=t[p]
if(l!=null&&l!==P.n)o+=" extends "+H.aI(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.aI(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.aI(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.aI(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.jm(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.q(u[g])
i=i+h+H.aI(d[c],b)+(" "+H.a(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
fJ:function(a,b,c){var u,t,s,r,q,p
H.v(c,"$it",[P.l],"$at")
if(a==null)return""
u=new P.bw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aI(p,c)}return"<"+u.h(0)+">"},
b4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
Q:function(a,b,c,d){var u,t
H.q(b)
H.fe(c)
H.q(d)
if(a==null)return!1
u=H.aK(a)
t=J.x(a)
if(t[b]==null)return!1
return H.hD(H.b4(t[d],u),null,c,null)},
v:function(a,b,c,d){H.q(b)
H.fe(c)
H.q(d)
if(a==null)return a
if(H.Q(a,b,c,d))return a
throw H.f(H.a1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bO(b.substring(2))+H.fJ(c,0,null),v.mangledGlobalNames)))},
je:function(a,b,c,d,e){H.q(c)
H.q(d)
H.q(e)
if(!H.U(a,null,b,null))H.jG("TypeError: "+H.a(c)+H.b3(a)+H.a(d)+H.b3(b)+H.a(e))},
jG:function(a){throw H.f(new H.cu(H.q(a)))},
hD:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.U(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.U(a[t],b,c[t],d))return!1
return!0},
ki:function(a,b,c){return a.apply(b,H.b4(J.x(b)["$a"+H.a(c)],H.aK(b)))},
hL:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="u"||a===-1||a===-2||H.hL(u)}return!1},
fK:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="u"||b===-1||b===-2||H.hL(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.fK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b0(a,b)}u=J.x(a).constructor
t=H.aK(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.U(u,null,b,null)},
j:function(a,b){if(a!=null&&!H.fK(a,b))throw H.f(H.a1(a,H.b3(b)))
return a},
U:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="n"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="n"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.U(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="u")return!0
if('func' in c)return H.hw(a,b,c,d)
if('func' in a)return c.name==="av"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.U("type" in a?a.type:null,b,s,d)
else if(H.U(a,b,s,d))return!0
else{if(!('$i'+"R" in t.prototype))return!1
r=t.prototype["$a"+"R"]
q=H.b4(r,u?a.slice(1):null)
return H.U(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.hD(H.b4(m,u),b,p,d)},
hw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.U(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.U(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.U(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.U(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.jD(h,b,g,d)},
jD:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.U(c[r],d,a[r],b))return!1}return!0},
iB:function(a,b){return new H.ao([a,b])},
kj:function(a,b,c){Object.defineProperty(a,H.q(b),{value:c,enumerable:false,writable:true,configurable:true})},
jz:function(a){var u,t,s,r,q,p
u=H.q($.hK.$1(a))
t=$.f8[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.fd[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.q($.hC.$2(a,u))
if(u!=null){t=$.f8[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.fd[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.fh(s)
$.f8[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.fd[u]=s
return s}if(q==="-"){p=H.fh(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.hM(a,s)
if(q==="*")throw H.f(P.hl(u))
if(v.leafTags[u]===true){p=H.fh(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.hM(a,s)},
hM:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.fR(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
fh:function(a){return J.fR(a,!1,null,!!a.$ian)},
jB:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.fh(u)
else return J.fR(u,c,null,null)},
ju:function(){if(!0===$.fQ)return
$.fQ=!0
H.jv()},
jv:function(){var u,t,s,r,q,p,o,n
$.f8=Object.create(null)
$.fd=Object.create(null)
H.jt()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.hO.$1(q)
if(p!=null){o=H.jB(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
jt:function(){var u,t,s,r,q,p,o
u=C.M()
u=H.aZ(C.N,H.aZ(C.O,H.aZ(C.u,H.aZ(C.u,H.aZ(C.P,H.aZ(C.Q,H.aZ(C.R(C.t),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.hK=new H.fa(q)
$.hC=new H.fb(p)
$.hO=new H.fc(o)},
aZ:function(a,b){return a(b)||b},
iA:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(P.h8("Illegal RegExp pattern ("+String(r)+")",a))},
dB:function dB(a){this.a=a},
e0:function e0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dy:function dy(a,b){this.a=a
this.b=b},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a){this.a=a},
bi:function bi(a,b){this.a=a
this.b=b},
fk:function fk(a){this.a=a},
cI:function cI(a){this.a=a
this.b=null},
bb:function bb(){},
dZ:function dZ(){},
dU:function dU(){},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a){this.a=a},
dN:function dN(a){this.a=a},
by:function by(a){this.a=a
this.d=this.b=null},
ao:function ao(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
di:function di(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dj:function dj(a,b){this.a=a
this.$ti=b},
dk:function dk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fa:function fa(a){this.a=a},
fb:function fb(a){this.a=a},
fc:function fc(a){this.a=a},
df:function df(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eI:function eI(a){this.b=a},
ht:function(a,b,c){},
hs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bM(b,a))},
cb:function cb(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
du:function du(){},
dv:function dv(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
jm:function(a){return J.ix(a?Object.keys(a):[],null)},
jE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
fR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f9:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.fQ==null){H.ju()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.hl("Return interceptor for "+H.a(t(a,u))))}r=a.constructor
q=r==null?null:r[$.fT()]
if(q!=null)return q
q=H.jz(a)
if(q!=null)return q
if(typeof a=="function")return C.a_
t=Object.getPrototypeOf(a)
if(t==null)return C.x
if(t===Object.prototype)return C.x
if(typeof r=="function"){Object.defineProperty(r,$.fT(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
ix:function(a,b){return J.h9(H.p(a,[b]))},
h9:function(a){H.fe(a)
a.fixed$length=Array
return a},
ha:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iy:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.a6(a,b)
if(t!==32&&t!==13&&!J.ha(t))break;++b}return b},
iz:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.bH(a,u)
if(t!==32&&t!==13&&!J.ha(t))break}return b},
x:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c2.prototype
return J.c1.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.c3.prototype
if(typeof a=="boolean")return J.de.prototype
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f9(a)},
fN:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f9(a)},
fO:function(a){if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f9(a)},
jo:function(a){if(typeof a=="number")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aE.prototype
return a},
hI:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aE.prototype
return a},
aJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f9(a)},
jp:function(a){if(a==null)return a
if(!(a instanceof P.n))return J.aE.prototype
return a},
cS:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).v(a,b)},
i8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jx(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fN(a).l(a,b)},
i9:function(a,b,c,d){return J.aJ(a).ct(a,b,c,d)},
ia:function(a,b,c,d){return J.aJ(a).d9(a,b,c,d)},
ib:function(a,b){return J.fO(a).K(a,b)},
ic:function(a){return J.aJ(a).gdB(a)},
ar:function(a){return J.x(a).gj(a)},
cT:function(a){return J.fO(a).gu(a)},
bQ:function(a){return J.fN(a).gk(a)},
id:function(a){return J.aJ(a).ge9(a)},
fZ:function(a){return J.jp(a).ga_(a)},
h_:function(a){return J.fO(a).e7(a)},
h0:function(a,b){return J.aJ(a).sbZ(a,b)},
ie:function(a){return J.hI(a).ea(a)},
bR:function(a){return J.x(a).h(a)},
ig:function(a,b){return J.jo(a).eb(a,b)},
ih:function(a){return J.hI(a).ed(a)},
y:function y(){},
de:function de(){},
c3:function c3(){},
c4:function c4(){},
dA:function dA(){},
aE:function aE(){},
ax:function ax(){},
aw:function aw(a){this.$ti=a},
fu:function fu(a){this.$ti=a},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bl:function bl(){},
c2:function c2(){},
c1:function c1(){},
aO:function aO(){}},P={
iQ:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.jf()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.b_(new P.ec(u),1)).observe(t,{childList:true})
return new P.eb(u,t,s)}else if(self.setImmediate!=null)return P.jg()
return P.jh()},
iR:function(a){self.scheduleImmediate(H.b_(new P.ed(H.c(a,{func:1,ret:-1})),0))},
iS:function(a){self.setImmediate(H.b_(new P.ee(H.c(a,{func:1,ret:-1})),0))},
iT:function(a){H.c(a,{func:1,ret:-1})
P.iW(0,a)},
iW:function(a,b){var u=new P.eX()
u.cq(a,b)
return u},
j4:function(a){return new P.cw(new P.cJ(new P.E(0,$.r,[a]),[a]),!1,[a])},
iZ:function(a,b){H.c(a,{func:1,ret:-1,args:[P.A,,]})
H.i(b,"$icw")
a.$2(0,null)
b.b=!0
return b.a.a},
kc:function(a,b){P.j_(a,H.c(b,{func:1,ret:-1,args:[P.A,,]}))},
iY:function(a,b){H.i(b,"$ifn").J(0,a)},
iX:function(a,b){H.i(b,"$ifn").T(H.K(a),H.b2(a))},
j_:function(a,b){var u,t,s,r
H.c(b,{func:1,ret:-1,args:[P.A,,]})
u=new P.f0(b)
t=new P.f1(b)
s=J.x(a)
if(!!s.$iE)a.aI(u,t,null)
else if(!!s.$iR)a.an(u,t,null)
else{r=new P.E(0,$.r,[null])
H.j(a,null)
r.a=4
r.c=a
r.aI(u,null,null)}},
jd:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.r.b1(new P.f4(u),P.u,P.A,null)},
hm:function(a,b){var u,t,s
b.a=1
try{a.an(new P.ev(b),new P.ew(b),null)}catch(s){u=H.K(s)
t=H.b2(s)
P.fj(new P.ex(b,u,t))}},
eu:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$iE")
if(u>=4){t=b.a8()
b.a=a.a
b.c=a.c
P.aV(b,t)}else{t=H.i(b.c,"$iah")
b.a=2
b.c=a
a.bz(t)}},
aV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.i(t.c,"$iI")
t=t.b
p=q.a
o=q.b
t.toString
P.cP(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.aV(u.a,b)}t=u.a
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
if(k){H.i(m,"$iI")
t=t.b
p=m.a
o=m.b
t.toString
P.cP(null,null,t,p,o)
return}j=$.r
if(j!=l)$.r=l
else j=null
t=b.c
if(t===8)new P.eC(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.eB(s,b,m).$0()}else if((t&2)!==0)new P.eA(u,s,b).$0()
if(j!=null)$.r=j
t=s.b
if(!!J.x(t).$iR){if(t.a>=4){i=H.i(o.c,"$iah")
o.c=null
b=o.a9(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.eu(t,o)
return}}h=b.b
i=H.i(h.c,"$iah")
h.c=null
b=h.a9(i)
t=s.a
p=s.b
if(!t){H.j(p,H.e(h,0))
h.a=4
h.c=p}else{H.i(p,"$iI")
h.a=8
h.c=p}u.a=h
t=h}},
j7:function(a,b){if(H.b0(a,{func:1,args:[P.n,P.z]}))return b.b1(a,null,P.n,P.z)
if(H.b0(a,{func:1,args:[P.n]}))return H.c(a,{func:1,ret:null,args:[P.n]})
throw H.f(P.h1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
j5:function(){var u,t
for(;u=$.aY,u!=null;){$.bL=null
t=u.b
$.aY=t
if(t==null)$.bK=null
u.a.$0()}},
jb:function(){$.fH=!0
try{P.j5()}finally{$.bL=null
$.fH=!1
if($.aY!=null)$.fV().$1(P.hF())}},
hA:function(a){var u=new P.cx(H.c(a,{func:1,ret:-1}))
if($.aY==null){$.bK=u
$.aY=u
if(!$.fH)$.fV().$1(P.hF())}else{$.bK.b=u
$.bK=u}},
ja:function(a){var u,t,s
H.c(a,{func:1,ret:-1})
u=$.aY
if(u==null){P.hA(a)
$.bL=$.bK
return}t=new P.cx(a)
s=$.bL
if(s==null){t.b=u
$.bL=t
$.aY=t}else{t.b=s.b
s.b=t
$.bL=t
if(t.b==null)$.bK=t}},
fj:function(a){var u,t
u={func:1,ret:-1}
H.c(a,u)
t=$.r
if(C.e===t){P.aH(null,null,C.e,a)
return}t.toString
P.aH(null,null,t,H.c(t.bE(a),u))},
jV:function(a,b){return new P.eT(H.v(a,"$ibv",[b],"$abv"),[b])},
aC:function(a){return new P.ag(null,null,0,[a])},
j9:function(a){return},
hx:function(a,b){var u=$.r
u.toString
P.cP(null,null,u,a,b)},
j6:function(){},
cP:function(a,b,c,d,e){var u={}
u.a=d
P.ja(new P.f3(u,e))},
hy:function(a,b,c,d,e){var u,t
H.c(d,{func:1,ret:e})
t=$.r
if(t===c)return d.$0()
$.r=c
u=t
try{t=d.$0()
return t}finally{$.r=u}},
hz:function(a,b,c,d,e,f,g){var u,t
H.c(d,{func:1,ret:f,args:[g]})
H.j(e,g)
t=$.r
if(t===c)return d.$1(e)
$.r=c
u=t
try{t=d.$1(e)
return t}finally{$.r=u}},
j8:function(a,b,c,d,e,f,g,h,i){var u,t
H.c(d,{func:1,ret:g,args:[h,i]})
H.j(e,h)
H.j(f,i)
t=$.r
if(t===c)return d.$2(e,f)
$.r=c
u=t
try{t=d.$2(e,f)
return t}finally{$.r=u}},
aH:function(a,b,c,d){var u
H.c(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.bE(d):c.dC(d,-1)
P.hA(d)},
ec:function ec(a){this.a=a},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a},
ee:function ee(a){this.a=a},
eX:function eX(){},
eY:function eY(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
e9:function e9(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
f4:function f4(a){this.a=a},
eg:function eg(a,b){this.a=a
this.$ti=b},
O:function O(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
eh:function eh(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=_.e=_.d=null
_.$ti=d},
cy:function cy(){},
ea:function ea(a,b){this.a=a
this.$ti=b},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
E:function E(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
er:function er(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eD:function eD(a){this.a=a},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a){this.a=a
this.b=null},
bv:function bv(){},
dV:function dV(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
this.b=b},
ac:function ac(){},
cz:function cz(){},
ej:function ej(){},
ei:function ei(){},
eS:function eS(){},
el:function el(){},
ek:function ek(a,b){this.b=a
this.a=null
this.$ti=b},
bI:function bI(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){var _=this
_.c=_.b=null
_.a=a
_.$ti=b},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
eT:function eT(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
I:function I(a,b){this.a=a
this.b=b},
f_:function f_(){},
f3:function f3(a,b){this.a=a
this.b=b},
eK:function eK(){},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
eL:function eL(a,b){this.a=a
this.b=b},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function(a,b,c){H.fe(a)
return H.v(H.jn(a,new H.ao([b,c])),"$ihd",[b,c],"$ahd")},
iC:function(a,b){return new H.ao([a,b])},
dl:function(a){return new P.eF([a])},
fD:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
iu:function(a,b,c){var u,t
if(P.fI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.p([],[P.l])
t=$.bP()
C.a.i(t,a)
try{P.j2(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.hj(b,H.jy(u,"$iw"),", ")+c
return t.charCodeAt(0)==0?t:t},
ft:function(a,b,c){var u,t,s
if(P.fI(a))return b+"..."+c
u=new P.bw(b)
t=$.bP()
C.a.i(t,a)
try{s=u
s.a=P.hj(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
fI:function(a){var u,t
for(u=0;t=$.bP(),u<t.length;++u)if(a===t[u])return!0
return!1},
j2:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.v(b,"$it",[P.l],"$at")
u=a.gu(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.n())return
r=H.a(u.gp())
C.a.i(b,r)
t+=r.length+2;++s}if(!u.n()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gp();++s
if(!u.n()){if(s<=4){C.a.i(b,H.a(o))
return}q=H.a(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gp();++s
for(;u.n();o=n,n=m){m=u.gp();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.i(b,"...")
return}}p=H.a(o)
q=H.a(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.i(b,l)
C.a.i(b,p)
C.a.i(b,q)},
he:function(a,b){var u,t,s
u=P.dl(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.cR)(a),++s)u.i(0,H.j(a[s],b))
return u},
hg:function(a){var u,t
t={}
if(P.fI(a))return"{...}"
u=new P.bw("")
try{C.a.i($.bP(),a)
u.a+="{"
t.a=!0
a.F(0,new P.dq(t,u))
u.a+="}"}finally{t=$.bP()
if(0>=t.length)return H.k(t,-1)
t.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
eF:function eF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bD:function bD(a){this.a=a
this.b=null},
eG:function eG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dd:function dd(){},
dm:function dm(){},
H:function H(){},
dp:function dp(){},
dq:function dq(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
eP:function eP(){},
cD:function cD(){},
jl:function(a){var u=H.iJ(a)
if(u!=null)return u
throw H.f(P.h8("Invalid double",a))},
is:function(a){if(a instanceof H.bb)return a.h(0)
return"Instance of '"+H.bq(a)+"'"},
iM:function(a){return new H.df(a,H.iA(a,!1,!0,!1))},
hj:function(a,b,c){var u=J.cT(b)
if(!u.n())return a
if(c.length===0){do a+=H.a(u.gp())
while(u.n())}else{a+=H.a(u.gp())
for(;u.n();)a=a+c+H.a(u.gp())}return a},
fq:function(){return new P.al()},
fr:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bR(a)
if(typeof a==="string")return JSON.stringify(a)
return P.is(a)},
b5:function(a){return new P.a3(!1,null,null,a)},
h1:function(a,b,c){return new P.a3(!0,a,b,c)},
cg:function(a,b){return new P.ce(null,null,!0,a,b,"Value not in range")},
cf:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
iL:function(a,b,c){if(0>a||a>c)throw H.f(P.cf(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.cf(b,a,c,"end",null))
return b}return c},
iK:function(a,b){if(typeof a!=="number")return a.bc()
if(a<0)throw H.f(P.cf(a,0,null,b,null))},
c0:function(a,b,c,d,e){var u=H.F(e==null?J.bQ(b):e)
return new P.da(u,!0,a,c,"Index out of range")},
a2:function(a){return new P.e4(a)},
hl:function(a){return new P.e2(a)},
ab:function(a){return new P.aB(a)},
au:function(a){return new P.d1(a)},
h8:function(a,b){return new P.d9(a,b,null)},
hN:function(a){H.jE(a)},
D:function D(){},
ai:function ai(){},
al:function al(){},
bp:function bp(){},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
da:function da(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
e4:function e4(a){this.a=a},
e2:function e2(a){this.a=a},
aB:function aB(a){this.a=a},
d1:function d1(a){this.a=a},
dz:function dz(){},
cq:function cq(){},
d3:function d3(a){this.a=a},
eq:function eq(a){this.a=a},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(){},
A:function A(){},
w:function w(){},
am:function am(){},
t:function t(){},
u:function u(){},
m:function m(){},
n:function n(){},
z:function z(){},
fA:function fA(){this.b=this.a=0},
l:function l(){},
bw:function bw(a){this.a=a},
jk:function(a){var u={}
a.F(0,new P.f7(u))
return u},
ip:function(a){var u,t,s
try{t=document.createEvent(a)
t.initEvent("",!0,!0)
u=t
return!!J.x(u).$ib}catch(s){H.K(s)}return!1},
f7:function f7(a){this.a=a},
ho:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt:function bt(){},
d:function d(){},
bV:function bV(){},
a5:function a5(){},
cd:function cd(){},
aA:function aA(){},
ct:function ct(){},
bz:function bz(){}},W={
jH:function(){return window},
fm:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
iq:function(a,b,c){var u,t,s,r
u=document.body
t=(u&&C.r).A(u,a,b,c)
t.toString
u=W.o
u=new H.cv(new W.P(t),H.c(new W.d7(),{func:1,ret:P.D,args:[u]}),[u])
s=u.gu(u)
if(!s.n())H.G(H.iv())
r=s.gp()
if(s.n())H.G(H.iw())
return H.i(r,"$iL")},
ir:function(a){H.i(a,"$iaM")
return"wheel"},
bf:function(a){var u,t,s
u="element tag unavailable"
try{t=J.id(a)
if(typeof t==="string")u=a.tagName}catch(s){H.K(s)}return u},
it:function(){var u=document.createElement("img")
return u},
eE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hp:function(a,b,c,d){var u,t
u=W.eE(W.eE(W.eE(W.eE(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
C:function(a,b,c,d,e){var u=W.hB(new W.ep(c),W.b)
u=new W.eo(a,b,u,!1,[e])
u.dr()
return u},
hn:function(a){var u,t
u=document.createElement("a")
t=new W.eO(u,window.location)
t=new W.aG(t)
t.co(a)
return t},
iU:function(a,b,c,d){H.i(a,"$iL")
H.q(b)
H.q(c)
H.i(d,"$iaG")
return!0},
iV:function(a,b,c,d){var u,t,s
H.i(a,"$iL")
H.q(b)
H.q(c)
u=H.i(d,"$iaG").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
hq:function(){var u,t,s,r,q
u=P.l
t=P.he(C.l,u)
s=H.e(C.l,0)
r=H.c(new W.eW(),{func:1,ret:u,args:[s]})
q=H.p(["TEMPLATE"],[u])
t=new W.eV(t,P.dl(u),P.dl(u),P.dl(u),null)
t.cp(null,new H.dr(C.l,r,[s,u]),q,null)
return t},
hB:function(a,b){var u
H.c(a,{func:1,ret:-1,args:[b]})
u=$.r
if(u===C.e)return a
return u.dD(a,b)},
h:function h(){},
bS:function bS(){},
cU:function cU(){},
b6:function b6(){},
as:function as(){},
aj:function aj(){},
bW:function bW(){},
at:function at(){},
bc:function bc(){},
d2:function d2(){},
d5:function d5(){},
bX:function bX(){},
L:function L(){},
d7:function d7(){},
b:function b(){},
aM:function aM(){},
d8:function d8(){},
Z:function Z(){},
M:function M(){},
c6:function c6(){},
bn:function bn(){},
W:function W(){},
P:function P(a){this.a=a},
o:function o(){},
bo:function bo(){},
dO:function dO(){},
cs:function cs(){},
dX:function dX(){},
dY:function dY(){},
bx:function bx(){},
ad:function ad(){},
ap:function ap(){},
e_:function e_(){},
aD:function aD(){},
e5:function e5(){},
af:function af(){},
bA:function bA(){},
bB:function bB(){},
cB:function cB(){},
cE:function cE(){},
ef:function ef(){},
em:function em(a){this.a=a},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eo:function eo(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ep:function ep(a){this.a=a},
aG:function aG(a){this.a=a},
a_:function a_(){},
cc:function cc(a){this.a=a},
dx:function dx(a){this.a=a},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(){},
eQ:function eQ(){},
eR:function eR(){},
eV:function eV(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eW:function eW(){},
eU:function eU(){},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
S:function S(){},
eO:function eO(a,b){this.a=a
this.b=b},
cM:function cM(a){this.a=a},
eZ:function eZ(a){this.a=a},
cA:function cA(){},
cF:function cF(){},
cG:function cG(){},
cK:function cK(){},
cL:function cL(){},
cN:function cN(){},
cO:function cO(){}},K={
hc:function(){var u,t
u=new K.dh(0,P.aC(P.m))
t=new K.e7()
u.a=t
u.b=t
return u},
e7:function e7(){this.b=this.a=null},
dh:function dh(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b}},A={
ij:function(a){var u,t,s,r,q,p,o,n,m
u=$.hQ()
t=A.ii(a,u.d)
s=t.b
r=t.c
u.e
q=W.it()
p=W.Z
o=new P.E(0,$.r,[p])
n=new N.c_(q,new P.ea(o,[p]),s)
p=W.b
m={func:1,ret:-1,args:[p]}
n.d=W.C(q,"load",H.c(n.gd_(),m),!1,p)
n.e=W.C(q,"error",H.c(n.gcY(),m),!1,p)
q.src=s
return o.b5(new A.cZ(r),A.Y)},
ii:function(a,b){var u=new A.cW()
u.cl(a,b)
return u},
iP:function(a,b,c,d){var u,t,s,r,q,p,o,n
u=P.m
t=T.J()
s=T.J()
r=T.J()
q=H.p([],[A.aF])
p=H.p([new A.aW("mouseDown","mouseUp","click","doubleClick"),new A.aW("middleMouseDown","middleMouseUp","middleClick","middleClick"),new A.aW("rightMouseDown","rightMouseUp","rightClick","rightClick")],[A.aW])
o=K.hc()
n=H.p([],[A.a6])
$.be=$.be+1
n=new A.N(1,0,0,0,0,new U.a0(0,0,0,0,[u]),t,s,r,new R.br("render",!1),C.k,C.o,C.p,C.j,"default",new U.B(0,0,[u]),q,new H.ao([P.A,A.aX]),p,o,4294967295,n,"auto",0,0,0,0,1,1,0,0,0,1,H.p([],[A.b8]),T.J())
n.cm(a,b,c,d)
return n},
cV:function cV(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.a=a},
cW:function cW(){this.c=this.b=this.a=null},
cX:function cX(a){this.a=a},
cY:function cY(a){this.c=!1
this.d=a
this.e=!1},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(){},
a6:function a6(){},
d4:function d4(a,b){this.b=a
this.$ti=b},
bd:function bd(){},
dc:function dc(){},
dH:function dH(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.a=!1},
dI:function dI(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
bu:function bu(a){this.b=a},
aT:function aT(a){this.b=a},
X:function X(a){this.b=a},
N:function N(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var _=this
_.N=_.aT=_.U=_.L=null
_.bW=_.bV=_.bU=_.bT=0
_.ag=a
_.dT=!1
_.aU=b
_.aV=c
_.aW=d
_.aX=e
_.dU=f
_.ah=g
_.bX=h
_.bM=i
_.dM=j
_.M=null
_.aQ=k
_.ae=l
_.bN=m
_.bO=n
_.bP=o
_.bQ=p
_.aR=null
_.bR=q
_.bS=r
_.dN=s
_.dO=t
_.el=null
_.aS=u
_.dQ=_.dP=!0
_.dS=_.dR=!1
_.af=a0
_.em=!0
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
dT:function dT(a){this.a=a},
dQ:function dQ(a){this.a=a},
dR:function dR(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dP:function dP(a,b,c,d,e,f,g){var _=this
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
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.x=_.r=0},
aX:function aX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(){}},L={
hu:function(){var u,t
if($.fF===-1){u=window
t=H.c(new L.f2(),{func:1,ret:-1,args:[P.m]})
C.L.cJ(u)
$.fF=C.L.dc(u,W.hB(t,P.m))}},
iN:function(a){var u,t
u=T.J()
t=new T.aR(new Float32Array(16))
t.a0()
t=new L.bC(1,C.d,u,t,null)
u=new L.dL(a,t)
u.e=t
return u},
fz:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
u=new Int16Array(6)
t=new Float32Array(16)
s=new L.cp(a,b,c,d,e,u,t)
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
t[9]=p}else H.G(P.fq())
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
q=H.j(r+b.c,n)/q
t[6]=q
t[10]=q
o=H.j(p+b.d,n)/o
t[15]=o
t[11]=o}else if(d===1){r=b.a
q=H.e(b,0)
p=H.j(r+b.c,q)
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
n=H.j(p+b.d,q)/n
t[7]=n
t[11]=n}else if(d===2){r=b.a
q=H.e(b,0)
p=H.j(r+b.c,q)
o=a.a
p/=o
t[14]=p
t[2]=p
p=b.b
q=H.j(p+b.d,q)
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
n=H.j(p+b.d,o)
m=a.b
n/=m
t[15]=n
t[3]=n
q=H.j(r+b.c,o)/q
t[14]=q
t[10]=q
m=p/m
t[7]=m
t[11]=m}else H.G(P.fq())
u[0]=0
u[1]=1
u[2]=2
u[3]=0
u[4]=2
u[5]=3
s.y=t
s.x=u
return s},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.e=c
_.x=_.r=_.f=null},
ci:function ci(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.e=c
_.x=_.r=_.f=null},
ck:function ck(a){this.b=a},
a9:function a9(){},
dE:function dE(){},
az:function az(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.a=f
_.b=g
_.c=h},
cj:function cj(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
dG:function dG(){},
cl:function cl(){},
f2:function f2(){},
cm:function cm(){},
eH:function eH(){},
cn:function cn(){},
dK:function dK(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
fx:function fx(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
fy:function fy(a,b,c,d,e,f){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f},
bC:function bC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null},
dL:function dL(a,b){this.c=a
this.d=b
this.e=null},
aa:function aa(){this.c=this.b=this.a=0},
bs:function bs(a,b,c,d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.f=b
_.r=c
_.x=null
_.y=d
_.z=!1
_.ch=_.Q=null},
co:function co(a){this.a=a},
cp:function cp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.z=!1},
dM:function dM(a){this.a=a}},T={dn:function dn(a,b){this.a=a
this.b=b},
ds:function(a,b,c,d,e,f){var u=new Float32Array(6)
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f
return new T.c7(u)},
J:function(){var u=new Float32Array(6)
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0
return new T.c7(u)},
c7:function c7(a){this.a=a},
aR:function aR(a){this.a=a}},R={
fE:function(a,b,c){var u,t
H.je(c,R.bU,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in '_dispatchBroadcastEvent'.")
H.v(b,"$it",[[R.aL,c]],"$at")
u=b.length
for(t=0;t<u;t=t-1+1){if(t<0||t>=b.length)return H.k(b,t)
b[t].gen()
C.a.c1(b,t);--u}},
bU:function bU(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
bj:function bj(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
br:function br(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
bY:function bY(){},
bh:function bh(a){this.b=a},
fs:function fs(){},
aL:function aL(){},
bk:function bk(a){this.b=a},
db:function db(){},
a8:function a8(a,b){var _=this
_.db=!1
_.a=a
_.b=b
_.r=_.f=!1},
aq:function aq(a,b){var _=this
_.db=!1
_.a=a
_.b=b
_.r=_.f=!1}},U={B:function B(a,b,c){this.a=a
this.b=b
this.$ti=c},a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},N={c_:function c_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null}},Q={dt:function dt(){},
j0:function(){var u,t
try{u=P.ip("TouchEvent")
return u}catch(t){H.K(t)
return!1}}},F={
ff:function(){return F.jA()},
jA:function(){var u=0,t=P.j4(P.u),s,r,q,p,o,n,m,l
var $async$ff=P.jd(function(a,b){if(a===1)return P.iX(b,t)
while(true)switch(u){case 0:s={}
r=new A.dP(C.n,C.k,C.o,C.p,C.j,4294967295,5)
r.f=16777215
q=document
p=q.querySelector("#stage")
s.a=0
o=A.iP(H.i(p,"$iaj"),400,r,600)
n=q.querySelector("#header")
q=K.hc()
m=H.p([],[A.N])
l=new A.dH(q,m,new R.bg("enterFrame",!1),new R.bj("exitFrame",!1),0)
l.a=!0
L.hu()
q=$.fX();(q&&C.a).i(q,l.gcW())
q=o.aT
if(q!=null)if(C.a.al(q.c,o))o.aT=null
o.aT=l
C.a.i(m,o)
s.b=0
q=W.M
W.C(window,"keydown",H.c(new F.fg(s,o,600,400,n),{func:1,ret:-1,args:[q]}),!1,q)
return P.iY(null,t)}})
return P.iZ($async$ff,t)},
fg:function fg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},O={
bm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},V={
fM:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.a((a>>>24&255)/255)+")"},
jC:function(a,b){if(typeof b!=="number")return H.V(b)
if(a<=b)return a
else return b},
f6:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
bN:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.f(P.b5("The supplied value ("+H.a(a)+") is not an int."))},
hG:function(a){return a}}
var w=[C,H,J,P,W,K,A,L,T,R,U,N,Q,F,O,V]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fv.prototype={}
J.y.prototype={
v:function(a,b){return a===b},
gj:function(a){return H.aS(a)},
h:function(a){return"Instance of '"+H.bq(a)+"'"}}
J.de.prototype={
h:function(a){return String(a)},
gj:function(a){return a?519018:218159},
$iD:1}
J.c3.prototype={
v:function(a,b){return null==b},
h:function(a){return"null"},
gj:function(a){return 0},
$iu:1}
J.c4.prototype={
gj:function(a){return 0},
h:function(a){return String(a)}}
J.dA.prototype={}
J.aE.prototype={}
J.ax.prototype={
h:function(a){var u=a[$.hR()]
if(u==null)return this.cg(a)
return"JavaScript function for "+H.a(J.bR(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iav:1}
J.aw.prototype={
i:function(a,b){H.j(b,H.e(a,0))
if(!!a.fixed$length)H.G(P.a2("add"))
a.push(b)},
c1:function(a,b){if(!!a.fixed$length)H.G(P.a2("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cg(b,null))
return a.splice(b,1)[0]},
al:function(a,b){var u
if(!!a.fixed$length)H.G(P.a2("remove"))
for(u=0;u<a.length;++u)if(J.cS(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t
H.c(b,{func:1,ret:-1,args:[H.e(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.au(a))}},
dX:function(a,b,c,d){var u,t,s
H.j(b,d)
H.c(c,{func:1,ret:d,args:[d,H.e(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.f(P.au(a))}return t},
K:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
bD:function(a,b){var u,t
H.c(b,{func:1,ret:P.D,args:[H.e(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.au(a))}return!1},
t:function(a,b){var u
for(u=0;u<a.length;++u)if(J.cS(a[u],b))return!0
return!1},
h:function(a){return P.ft(a,"[","]")},
gu:function(a){return new J.bT(a,a.length,0,[H.e(a,0)])},
gj:function(a){return H.aS(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.G(P.a2("set length"))
if(b<0)throw H.f(P.cf(b,0,null,"newLength",null))
a.length=b},
D:function(a,b,c){H.j(c,H.e(a,0))
if(!!a.immutable$list)H.G(P.a2("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bM(a,b))
a[b]=c},
$iw:1,
$it:1}
J.fu.prototype={}
J.bT.prototype={
gp:function(){return this.d},
n:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.cR(u))
s=this.c
if(s>=t){this.sbh(null)
return!1}this.sbh(u[s]);++this.c
return!0},
sbh:function(a){this.d=H.j(a,H.e(this,0))},
$iam:1}
J.bl.prototype={
aY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a2(""+a+".floor()"))},
q:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a2(""+a+".round()"))},
eb:function(a,b){var u,t
if(b<0||b>20)throw H.f(P.cf(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
ca:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ck:function(a,b){if(typeof b!=="number")throw H.f(H.f5(b))
if((a|0)===a)if(b>=1||!1)return a/b|0
return this.dl(a,b)},
dl:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a2("Result of truncating division is "+H.a(u)+": "+H.a(a)+" ~/ "+b))},
dj:function(a,b){var u
if(a>0)u=this.di(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
di:function(a,b){return b>31?0:a>>>b},
$iai:1,
$im:1}
J.c2.prototype={$iA:1}
J.c1.prototype={}
J.aO.prototype={
bH:function(a,b){if(b<0)throw H.f(H.bM(a,b))
if(b>=a.length)H.G(H.bM(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(b>=a.length)throw H.f(H.bM(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(typeof b!=="string")throw H.f(P.h1(b,null,null))
return a+b},
cc:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
bf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cg(b,null))
if(b>c)throw H.f(P.cg(b,null))
if(c>a.length)throw H.f(P.cg(c,null))
return a.substring(b,c)},
cd:function(a,b){return this.bf(a,b,null)},
ea:function(a){return a.toLowerCase()},
ed:function(a){var u,t,s,r,q
u=a.trim()
t=u.length
if(t===0)return u
if(this.a6(u,0)===133){s=J.iy(u,1)
if(s===t)return""}else s=0
r=t-1
q=this.bH(u,r)===133?J.iz(u,r):t
if(s===0&&q===t)return u
return u.substring(s,q)},
ap:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aj:function(a,b){var u=b-a.length
if(u<=0)return a
return this.ap(" ",u)+a},
h:function(a){return a},
gj:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ihi:1,
$il:1}
H.d6.prototype={}
H.aP.prototype={
gu:function(a){return new H.c5(this,this.gk(this),0,[H.cQ(this,"aP",0)])},
ao:function(a,b){return this.cf(0,H.c(b,{func:1,ret:P.D,args:[H.cQ(this,"aP",0)]}))}}
H.c5.prototype={
gp:function(){return this.d},
n:function(){var u,t,s,r
u=this.a
t=J.fN(u)
s=t.gk(u)
if(this.b!==s)throw H.f(P.au(u))
r=this.c
if(r>=s){this.sbi(null)
return!1}this.sbi(t.K(u,r));++this.c
return!0},
sbi:function(a){this.d=H.j(a,H.e(this,0))},
$iam:1}
H.dr.prototype={
gk:function(a){return J.bQ(this.a)},
K:function(a,b){return this.b.$1(J.ib(this.a,b))},
$aaP:function(a,b){return[b]},
$aw:function(a,b){return[b]}}
H.cv.prototype={
gu:function(a){return new H.e6(J.cT(this.a),this.b,this.$ti)}}
H.e6.prototype={
n:function(){var u,t
for(u=this.a,t=this.b;u.n();)if(t.$1(u.gp()))return!0
return!1},
gp:function(){return this.a.gp()}}
H.aN.prototype={}
H.dB.prototype={
$0:function(){return C.b.aY(1000*this.a.now())},
$S:13}
H.e0.prototype={
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
H.dy.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.dg.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.a(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.a(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.a(this.a)+")"}}
H.e3.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bi.prototype={}
H.fk.prototype={
$1:function(a){if(!!J.x(a).$ial)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.cI.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iz:1}
H.bb.prototype={
h:function(a){return"Closure '"+H.bq(this).trim()+"'"},
$iav:1,
geg:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dZ.prototype={}
H.dU.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bO(u)+"'"}}
H.b9.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b9))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gj:function(a){var u,t
u=this.c
if(u==null)t=H.aS(this.a)
else t=typeof u!=="object"?J.ar(u):H.aS(u)
return(t^H.aS(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.bq(u)+"'")}}
H.cu.prototype={
h:function(a){return this.a}}
H.dN.prototype={
h:function(a){return"RuntimeError: "+H.a(this.a)}}
H.by.prototype={
gaa:function(){var u=this.b
if(u==null){u=H.b3(this.a)
this.b=u}return u},
h:function(a){return this.gaa()},
gj:function(a){var u=this.d
if(u==null){u=C.c.gj(this.gaa())
this.d=u}return u},
v:function(a,b){if(b==null)return!1
return b instanceof H.by&&this.gaa()===b.gaa()}}
H.ao.prototype={
gk:function(a){return this.a},
gO:function(){return new H.dj(this,[H.e(this,0)])},
bJ:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.bp(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.bp(t,a)}else return this.e0(a)},
e0:function(a){var u=this.d
if(u==null)return!1
return this.ai(this.a7(u,J.ar(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.a1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.a1(r,b)
s=t==null?null:t.b
return s}else return this.e1(b)},
e1:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.a7(u,J.ar(a)&0x3ffffff)
s=this.ai(t,a)
if(s<0)return
return t[s].b},
D:function(a,b,c){var u,t,s,r,q,p
H.j(b,H.e(this,0))
H.j(c,H.e(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.aB()
this.b=u}this.bj(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aB()
this.c=t}this.bj(t,b,c)}else{s=this.d
if(s==null){s=this.aB()
this.d=s}r=J.ar(b)&0x3ffffff
q=this.a7(s,r)
if(q==null)this.aH(s,r,[this.aw(b,c)])
else{p=this.ai(q,b)
if(p>=0)q[p].b=c
else q.push(this.aw(b,c))}}},
e6:function(a,b){var u
H.j(a,H.e(this,0))
H.c(b,{func:1,ret:H.e(this,1)})
if(this.bJ(a))return this.l(0,a)
u=b.$0()
this.D(0,a,u)
return u},
al:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.da(this.c,b)
else return this.e2(b)},
e2:function(a){var u,t,s,r
u=this.d
if(u==null)return
t=this.a7(u,J.ar(a)&0x3ffffff)
s=this.ai(t,a)
if(s<0)return
r=t.splice(s,1)[0]
this.bB(r)
return r.b},
bG:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aA()}},
F:function(a,b){var u,t
H.c(b,{func:1,ret:-1,args:[H.e(this,0),H.e(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.au(this))
u=u.c}},
bj:function(a,b,c){var u
H.j(b,H.e(this,0))
H.j(c,H.e(this,1))
u=this.a1(a,b)
if(u==null)this.aH(a,b,this.aw(b,c))
else u.b=c},
da:function(a,b){var u
if(a==null)return
u=this.a1(a,b)
if(u==null)return
this.bB(u)
this.bs(a,b)
return u.b},
aA:function(){this.r=this.r+1&67108863},
aw:function(a,b){var u,t
u=new H.di(H.j(a,H.e(this,0)),H.j(b,H.e(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.aA()
return u},
bB:function(a){var u,t
u=a.d
t=a.c
if(u==null)this.e=t
else u.c=t
if(t==null)this.f=u
else t.d=u;--this.a
this.aA()},
ai:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cS(a[t].a,b))return t
return-1},
h:function(a){return P.hg(this)},
a1:function(a,b){return a[b]},
a7:function(a,b){return a[b]},
aH:function(a,b,c){a[b]=c},
bs:function(a,b){delete a[b]},
bp:function(a,b){return this.a1(a,b)!=null},
aB:function(){var u=Object.create(null)
this.aH(u,"<non-identifier-key>",u)
this.bs(u,"<non-identifier-key>")
return u},
$ihd:1}
H.di.prototype={}
H.dj.prototype={
gk:function(a){return this.a.a},
gu:function(a){var u,t
u=this.a
t=new H.dk(u,u.r,this.$ti)
t.c=u.e
return t}}
H.dk.prototype={
gp:function(){return this.d},
n:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.au(u))
else{u=this.c
if(u==null){this.sbk(null)
return!1}else{this.sbk(u.a)
this.c=this.c.c
return!0}}},
sbk:function(a){this.d=H.j(a,H.e(this,0))},
$iam:1}
H.fa.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.fb.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.fc.prototype={
$1:function(a){return this.a(H.q(a))},
$S:18}
H.df.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
dW:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eI(u)},
$ihi:1}
H.eI.prototype={
gdL:function(){var u=this.b
return u.index+u[0].length}}
H.cb.prototype={$ik5:1}
H.c8.prototype={
gk:function(a){return a.length},
$ian:1,
$aan:function(){}}
H.c9.prototype={
l:function(a,b){H.hs(b,a,a.length)
return a[b]},
$aaN:function(){return[P.ai]},
$aH:function(){return[P.ai]},
$iw:1,
$aw:function(){return[P.ai]},
$it:1,
$at:function(){return[P.ai]}}
H.ca.prototype={
$aaN:function(){return[P.A]},
$aH:function(){return[P.A]},
$iw:1,
$aw:function(){return[P.A]},
$it:1,
$at:function(){return[P.A]}}
H.du.prototype={$ijL:1}
H.dv.prototype={
l:function(a,b){H.hs(b,a,a.length)
return a[b]},
$ijM:1}
H.bE.prototype={}
H.bF.prototype={}
H.bG.prototype={}
H.bH.prototype={}
P.ec.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:6}
P.eb.prototype={
$1:function(a){var u,t
this.a.a=H.c(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.ed.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ee.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eX.prototype={
cq:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b_(new P.eY(this,b),0),a)
else throw H.f(P.a2("`setTimeout()` not found."))}}
P.eY.prototype={
$0:function(){this.b.$0()},
$S:1}
P.cw.prototype={
J:function(a,b){var u
H.b1(b,{futureOr:1,type:H.e(this,0)})
if(this.b)this.a.J(0,b)
else if(H.Q(b,"$iR",this.$ti,"$aR")){u=this.a
b.an(u.gdE(u),u.gdG(),-1)}else P.fj(new P.e9(this,b))},
T:function(a,b){if(this.b)this.a.T(a,b)
else P.fj(new P.e8(this,a,b))},
$ifn:1}
P.e9.prototype={
$0:function(){this.a.a.J(0,this.b)},
$S:0}
P.e8.prototype={
$0:function(){this.a.a.T(this.b,this.c)},
$S:0}
P.f0.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:31}
P.f1.prototype={
$2:function(a,b){this.a.$2(1,new H.bi(a,H.i(b,"$iz")))},
$S:27}
P.f4.prototype={
$2:function(a,b){this.a(H.F(a),b)},
$S:19}
P.eg.prototype={}
P.O.prototype={
aE:function(){},
aF:function(){},
saD:function(a){this.dy=H.v(a,"$iO",this.$ti,"$aO")},
sbA:function(a){this.fr=H.v(a,"$iO",this.$ti,"$aO")}}
P.eh.prototype={
gcO:function(){return this.c<4},
dk:function(a,b,c,d){var u,t,s,r,q,p
u=H.e(this,0)
H.c(a,{func:1,ret:-1,args:[u]})
H.c(c,{func:1,ret:-1})
if((this.c&4)!==0){if(c==null)c=P.hE()
u=new P.cC($.r,c,this.$ti)
u.df()
return u}t=$.r
s=d?1:0
r=this.$ti
q=new P.O(this,t,s,r)
q.cn(a,b,c,d,u)
q.sbA(q)
q.saD(q)
H.v(q,"$iO",r,"$aO")
q.dx=this.c&1
p=this.e
this.scN(q)
q.saD(null)
q.sbA(p)
if(p==null)this.scK(q)
else p.saD(q)
if(this.d==this.e)P.j9(this.a)
return q},
cs:function(){if((this.c&4)!==0)return new P.aB("Cannot add new events after calling close")
return new P.aB("Cannot add new events while doing an addStream")},
i:function(a,b){H.j(b,H.e(this,0))
if(!this.gcO())throw H.f(this.cs())
this.aG(b)},
scK:function(a){this.d=H.v(a,"$iO",this.$ti,"$aO")},
scN:function(a){this.e=H.v(a,"$iO",this.$ti,"$aO")},
$ijU:1,
$ikb:1,
$iaU:1}
P.ag.prototype={
aG:function(a){var u,t
H.j(a,H.e(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.cu(new P.ek(a,t))}}
P.cy.prototype={
T:function(a,b){H.i(b,"$iz")
if(a==null)a=new P.bp()
if(this.a.a!==0)throw H.f(P.ab("Future already completed"))
$.r.toString
this.E(a,b)},
bI:function(a){return this.T(a,null)},
$ifn:1}
P.ea.prototype={
J:function(a,b){var u
H.b1(b,{futureOr:1,type:H.e(this,0)})
u=this.a
if(u.a!==0)throw H.f(P.ab("Future already completed"))
u.cv(b)},
E:function(a,b){this.a.cw(a,b)}}
P.cJ.prototype={
J:function(a,b){var u
H.b1(b,{futureOr:1,type:H.e(this,0)})
u=this.a
if(u.a!==0)throw H.f(P.ab("Future already completed"))
u.ax(b)},
dF:function(a){return this.J(a,null)},
E:function(a,b){this.a.E(a,b)}}
P.ah.prototype={
e4:function(a){if(this.c!==6)return!0
return this.b.b.b4(H.c(this.d,{func:1,ret:P.D,args:[P.n]}),a.a,P.D,P.n)},
dY:function(a){var u,t,s,r
u=this.e
t=P.n
s={futureOr:1,type:H.e(this,1)}
r=this.b.b
if(H.b0(u,{func:1,args:[P.n,P.z]}))return H.b1(r.e8(u,a.a,a.b,null,t,P.z),s)
else return H.b1(r.b4(H.c(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.E.prototype={
an:function(a,b,c){var u,t
u=H.e(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.r
if(t!==C.e){t.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.j7(b,t)}return this.aI(a,b,c)},
b5:function(a,b){return this.an(a,null,b)},
aI:function(a,b,c){var u,t,s
u=H.e(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=new P.E(0,$.r,[c])
s=b==null?1:3
this.bm(new P.ah(t,s,a,b,[u,c]))
return t},
bm:function(a){var u,t
u=this.a
if(u<=1){a.a=H.i(this.c,"$iah")
this.c=a}else{if(u===2){t=H.i(this.c,"$iE")
u=t.a
if(u<4){t.bm(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.aH(null,null,u,H.c(new P.er(this,a),{func:1,ret:-1}))}},
bz:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.i(this.c,"$iah")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.i(this.c,"$iE")
t=p.a
if(t<4){p.bz(a)
return}this.a=t
this.c=p.c}u.a=this.a9(a)
t=this.b
t.toString
P.aH(null,null,t,H.c(new P.ez(u,this),{func:1,ret:-1}))}},
a8:function(){var u=H.i(this.c,"$iah")
this.c=null
return this.a9(u)},
a9:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ax:function(a){var u,t,s
u=H.e(this,0)
H.b1(a,{futureOr:1,type:u})
t=this.$ti
if(H.Q(a,"$iR",t,"$aR"))if(H.Q(a,"$iE",t,null))P.eu(a,this)
else P.hm(a,this)
else{s=this.a8()
H.j(a,u)
this.a=4
this.c=a
P.aV(this,s)}},
E:function(a,b){var u
H.i(b,"$iz")
u=this.a8()
this.a=8
this.c=new P.I(a,b)
P.aV(this,u)},
cF:function(a){return this.E(a,null)},
cv:function(a){var u
H.b1(a,{futureOr:1,type:H.e(this,0)})
if(H.Q(a,"$iR",this.$ti,"$aR")){this.cB(a)
return}this.a=1
u=this.b
u.toString
P.aH(null,null,u,H.c(new P.et(this,a),{func:1,ret:-1}))},
cB:function(a){var u=this.$ti
H.v(a,"$iR",u,"$aR")
if(H.Q(a,"$iE",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.aH(null,null,u,H.c(new P.ey(this,a),{func:1,ret:-1}))}else P.eu(a,this)
return}P.hm(a,this)},
cw:function(a,b){var u
this.a=1
u=this.b
u.toString
P.aH(null,null,u,H.c(new P.es(this,a,b),{func:1,ret:-1}))},
$iR:1}
P.er.prototype={
$0:function(){P.aV(this.a,this.b)},
$S:0}
P.ez.prototype={
$0:function(){P.aV(this.b,this.a.a)},
$S:0}
P.ev.prototype={
$1:function(a){var u=this.a
u.a=0
u.ax(a)},
$S:6}
P.ew.prototype={
$2:function(a,b){H.i(b,"$iz")
this.a.E(a,b)},
$1:function(a){return this.$2(a,null)},
$S:20}
P.ex.prototype={
$0:function(){this.a.E(this.b,this.c)},
$S:0}
P.et.prototype={
$0:function(){var u,t,s
u=this.a
t=H.j(this.b,H.e(u,0))
s=u.a8()
u.a=4
u.c=t
P.aV(u,s)},
$S:0}
P.ey.prototype={
$0:function(){P.eu(this.b,this.a)},
$S:0}
P.es.prototype={
$0:function(){this.a.E(this.b,this.c)},
$S:0}
P.eC.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.c5(H.c(r.d,{func:1}),null)}catch(q){t=H.K(q)
s=H.b2(q)
if(this.d){r=H.i(this.a.a.c,"$iI").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.i(this.a.a.c,"$iI")
else p.b=new P.I(t,s)
p.a=!0
return}if(!!J.x(u).$iR){if(u instanceof P.E&&u.a>=4){if(u.a===8){r=this.b
r.b=H.i(u.c,"$iI")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.b5(new P.eD(o),null)
r.a=!1}},
$S:1}
P.eD.prototype={
$1:function(a){return this.a},
$S:14}
P.eB.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.e(s,0)
q=H.j(this.c,r)
p=H.e(s,1)
this.a.b=s.b.b.b4(H.c(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.K(o)
t=H.b2(o)
s=this.a
s.b=new P.I(u,t)
s.a=!0}},
$S:1}
P.eA.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.i(this.a.a.c,"$iI")
r=this.c
if(r.e4(u)&&r.e!=null){q=this.b
q.b=r.dY(u)
q.a=!1}}catch(p){t=H.K(p)
s=H.b2(p)
r=H.i(this.a.a.c,"$iI")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.I(t,s)
n.a=!0}},
$S:1}
P.cx.prototype={}
P.bv.prototype={
gk:function(a){var u,t
u={}
t=new P.E(0,$.r,[P.A])
u.a=0
this.b0(new P.dV(u,this),!0,new P.dW(u,t),t.gcE())
return t}}
P.dV.prototype={
$1:function(a){H.j(a,H.e(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.u,args:[H.e(this.b,0)]}}}
P.dW.prototype={
$0:function(){this.b.ax(this.a.a)},
$S:0}
P.ac.prototype={}
P.cz.prototype={
gj:function(a){return(H.aS(this.a)^892482866)>>>0},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cz&&b.a===this.a}}
P.ej.prototype={
aE:function(){H.v(this,"$iac",[H.e(this.x,0)],"$aac")},
aF:function(){H.v(this,"$iac",[H.e(this.x,0)],"$aac")}}
P.ei.prototype={
cn:function(a,b,c,d,e){var u,t,s,r
u=H.e(this,0)
H.c(a,{func:1,ret:-1,args:[u]})
t=this.d
t.toString
this.scU(H.c(a,{func:1,ret:null,args:[u]}))
s=b==null?P.ji():b
if(H.b0(s,{func:1,ret:-1,args:[P.n,P.z]}))t.b1(s,null,P.n,P.z)
else if(H.b0(s,{func:1,ret:-1,args:[P.n]}))H.c(s,{func:1,ret:null,args:[P.n]})
else H.G(P.b5("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.c(c,{func:1,ret:-1})
r=c==null?P.hE():c
this.scV(H.c(r,{func:1,ret:-1}))},
aE:function(){},
aF:function(){},
cu:function(a){var u,t
u=this.$ti
t=H.v(this.r,"$ibJ",u,"$abJ")
if(t==null){t=new P.bJ(0,u)
this.sby(t)}u=t.c
if(u==null){t.c=a
t.b=a}else{u.a=a
t.c=a}u=this.e
if((u&64)===0){u=(u|64)>>>0
this.e=u
if(u<128)this.r.be(this)}},
aG:function(a){var u,t
u=H.e(this,0)
H.j(a,u)
t=this.e
this.e=(t|32)>>>0
this.d.c7(this.a,a,u)
this.e=(this.e&4294967263)>>>0
this.cC((t&4)!==0)},
cC:function(a){var u,t,s
u=this.e
if((u&64)!==0&&this.r.c==null){u=(u&4294967231)>>>0
this.e=u
if((u&4)!==0)if(u<128){t=this.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){u=(u&4294967291)>>>0
this.e=u}}for(;!0;a=s){if((u&8)!==0){this.sby(null)
return}s=(u&4)!==0
if(a===s)break
this.e=(u^32)>>>0
if(s)this.aE()
else this.aF()
u=(this.e&4294967263)>>>0
this.e=u}if((u&64)!==0&&u<128)this.r.be(this)},
scU:function(a){this.a=H.c(a,{func:1,ret:-1,args:[H.e(this,0)]})},
scV:function(a){H.c(a,{func:1,ret:-1})},
sby:function(a){this.r=H.v(a,"$ibI",this.$ti,"$abI")},
$iac:1,
$iaU:1}
P.eS.prototype={
b0:function(a,b,c,d){H.c(a,{func:1,ret:-1,args:[H.e(this,0)]})
H.c(c,{func:1,ret:-1})
return this.a.dk(H.c(a,{func:1,ret:-1,args:[H.e(this,0)]}),d,c,!0===b)},
e3:function(a){return this.b0(a,null,null,null)}}
P.el.prototype={}
P.ek.prototype={}
P.bI.prototype={
be:function(a){var u
H.v(a,"$iaU",this.$ti,"$aaU")
u=this.a
if(u===1)return
if(u>=1){this.a=1
return}P.fj(new P.eJ(this,a))
this.a=1}}
P.eJ.prototype={
$0:function(){var u,t,s,r,q
u=this.a
t=u.a
u.a=0
if(t===3)return
s=H.v(this.b,"$iaU",[H.e(u,0)],"$aaU")
r=u.b
q=r.a
u.b=q
if(q==null)u.c=null
H.v(s,"$iaU",[H.e(r,0)],"$aaU").aG(r.b)},
$S:0}
P.bJ.prototype={}
P.cC.prototype={
df:function(){if((this.b&2)!==0)return
var u=this.a
u.toString
P.aH(null,null,u,H.c(this.gdg(),{func:1,ret:-1}))
this.b=(this.b|2)>>>0},
dh:function(){var u=(this.b&4294967293)>>>0
this.b=u
if(u>=4)return
this.b=(u|1)>>>0
this.a.c6(this.c)},
$iac:1}
P.eT.prototype={}
P.I.prototype={
h:function(a){return H.a(this.a)},
$ial:1}
P.f_.prototype={$ik7:1}
P.f3.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.bp()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.h(0)
throw s},
$S:0}
P.eK.prototype={
c6:function(a){var u,t,s
H.c(a,{func:1,ret:-1})
try{if(C.e===$.r){a.$0()
return}P.hy(null,null,this,a,-1)}catch(s){u=H.K(s)
t=H.b2(s)
P.cP(null,null,this,u,H.i(t,"$iz"))}},
c7:function(a,b,c){var u,t,s
H.c(a,{func:1,ret:-1,args:[c]})
H.j(b,c)
try{if(C.e===$.r){a.$1(b)
return}P.hz(null,null,this,a,b,-1,c)}catch(s){u=H.K(s)
t=H.b2(s)
P.cP(null,null,this,u,H.i(t,"$iz"))}},
dC:function(a,b){return new P.eM(this,H.c(a,{func:1,ret:b}),b)},
bE:function(a){return new P.eL(this,H.c(a,{func:1,ret:-1}))},
dD:function(a,b){return new P.eN(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
c5:function(a,b){H.c(a,{func:1,ret:b})
if($.r===C.e)return a.$0()
return P.hy(null,null,this,a,b)},
b4:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.j(b,d)
if($.r===C.e)return a.$1(b)
return P.hz(null,null,this,a,b,c,d)},
e8:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.j(b,e)
H.j(c,f)
if($.r===C.e)return a.$2(b,c)
return P.j8(null,null,this,a,b,c,d,e,f)},
b1:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}}
P.eM.prototype={
$0:function(){return this.a.c5(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.eL.prototype={
$0:function(){return this.a.c6(this.b)},
$S:1}
P.eN.prototype={
$1:function(a){var u=this.c
return this.a.c7(this.b,H.j(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.eF.prototype={
gu:function(a){var u=new P.eG(this,this.r,this.$ti)
u.c=this.e
return u},
gk:function(a){return this.a},
t:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.i(u[b],"$ibD")!=null}else{t=this.cG(b)
return t}},
cG:function(a){var u=this.d
if(u==null)return!1
return this.bv(u[this.bo(a)],a)>=0},
i:function(a,b){var u,t
H.j(b,H.e(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.fD()
this.b=u}return this.bl(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.fD()
this.c=t}return this.bl(t,b)}else return this.cr(b)},
cr:function(a){var u,t,s
H.j(a,H.e(this,0))
u=this.d
if(u==null){u=P.fD()
this.d=u}t=this.bo(a)
s=u[t]
if(s==null)u[t]=[this.aC(a)]
else{if(this.bv(s,a)>=0)return!1
s.push(this.aC(a))}return!0},
bl:function(a,b){H.j(b,H.e(this,0))
if(H.i(a[b],"$ibD")!=null)return!1
a[b]=this.aC(b)
return!0},
aC:function(a){var u=new P.bD(H.j(a,H.e(this,0)))
if(this.e==null){this.f=u
this.e=u}else{this.f.b=u
this.f=u}++this.a
this.r=1073741823&this.r+1
return u},
bo:function(a){return J.ar(a)&1073741823},
bv:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cS(a[t].a,b))return t
return-1}}
P.bD.prototype={}
P.eG.prototype={
gp:function(){return this.d},
n:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.au(u))
else{u=this.c
if(u==null){this.sbn(null)
return!1}else{this.sbn(H.j(u.a,H.e(this,0)))
this.c=this.c.b
return!0}}},
sbn:function(a){this.d=H.j(a,H.e(this,0))},
$iam:1}
P.dd.prototype={}
P.dm.prototype={$iw:1,$it:1}
P.H.prototype={
gu:function(a){return new H.c5(a,this.gk(a),0,[H.fP(this,a,"H",0)])},
K:function(a,b){return this.l(a,b)},
h:function(a){return P.ft(a,"[","]")}}
P.dp.prototype={}
P.dq.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.a(a)
u.a=t+": "
u.a+=H.a(b)},
$S:12}
P.aQ.prototype={
F:function(a,b){var u,t
H.c(b,{func:1,ret:-1,args:[H.cQ(this,"aQ",0),H.cQ(this,"aQ",1)]})
for(u=J.cT(this.gO());u.n();){t=u.gp()
b.$2(t,this.l(0,t))}},
gk:function(a){return J.bQ(this.gO())},
h:function(a){return P.hg(this)},
$ihf:1}
P.eP.prototype={
H:function(a,b){var u
for(u=J.cT(H.v(b,"$iw",this.$ti,"$aw"));u.n();)this.i(0,u.gp())},
h:function(a){return P.ft(this,"{","}")},
$iw:1,
$ijT:1}
P.cD.prototype={}
P.D.prototype={}
P.ai.prototype={}
P.al.prototype={}
P.bp.prototype={
h:function(a){return"Throw of null."}}
P.a3.prototype={
gaz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gay:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaz()+t+s
if(!this.a)return r
q=this.gay()
p=P.fr(this.b)
return r+q+": "+p}}
P.ce.prototype={
gaz:function(){return"RangeError"},
gay:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.a(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.a(u)
else if(s>u)t=": Not in range "+H.a(u)+".."+H.a(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.a(u)}return t}}
P.da.prototype={
gaz:function(){return"RangeError"},
gay:function(){var u,t
u=H.F(this.b)
if(typeof u!=="number")return u.bc()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.a(t)},
gk:function(a){return this.f}}
P.e4.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.e2.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aB.prototype={
h:function(a){return"Bad state: "+H.a(this.a)}}
P.d1.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fr(u)+"."}}
P.dz.prototype={
h:function(a){return"Out of Memory"},
$ial:1}
P.cq.prototype={
h:function(a){return"Stack Overflow"},
$ial:1}
P.d3.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eq.prototype={
h:function(a){return"Exception: "+this.a}}
P.d9.prototype={
h:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
if(typeof s==="string"){r=s.length>78?C.c.bf(s,0,75)+"...":s
return t+"\n"+r}else return t}}
P.av.prototype={}
P.A.prototype={}
P.w.prototype={
ao:function(a,b){var u=H.cQ(this,"w",0)
return new H.cv(this,H.c(b,{func:1,ret:P.D,args:[u]}),[u])},
gk:function(a){var u,t
u=this.gu(this)
for(t=0;u.n();)++t
return t},
K:function(a,b){var u,t,s
P.iK(b,"index")
for(u=this.gu(this),t=0;u.n();){s=u.gp()
if(b===t)return s;++t}throw H.f(P.c0(b,this,"index",null,t))},
h:function(a){return P.iu(this,"(",")")}}
P.am.prototype={}
P.t.prototype={$iw:1}
P.u.prototype={
gj:function(a){return P.n.prototype.gj.call(this,this)},
h:function(a){return"null"}}
P.m.prototype={}
P.n.prototype={constructor:P.n,$in:1,
v:function(a,b){return this===b},
gj:function(a){return H.aS(this)},
h:function(a){return"Instance of '"+H.bq(this)+"'"},
toString:function(){return this.h(this)}}
P.z.prototype={}
P.fA.prototype={}
P.l.prototype={$ihi:1}
P.bw.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.h.prototype={}
W.bS.prototype={
h:function(a){return String(a)},
$ibS:1}
W.cU.prototype={
h:function(a){return String(a)}}
W.b6.prototype={$ib6:1}
W.as.prototype={$ias:1}
W.aj.prototype={
bb:function(a,b,c){var u=a.getContext(b,P.jk(c))
return u},
$iaj:1,
$ih4:1}
W.bW.prototype={$ibW:1}
W.at.prototype={
gk:function(a){return a.length}}
W.bc.prototype={
gk:function(a){return a.length}}
W.d2.prototype={}
W.d5.prototype={
h:function(a){return String(a)}}
W.bX.prototype={
h:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.Q(b,"$iay",[P.m],"$aay"))return!1
u=J.aJ(b)
return a.left===u.gX(b)&&a.top===u.gY(b)&&a.width===u.gZ(b)&&a.height===u.gV(b)},
gj:function(a){return W.hp(C.b.gj(a.left),C.b.gj(a.top),C.b.gj(a.width),C.b.gj(a.height))},
gX:function(a){return a.left},
gY:function(a){return a.top},
$iay:1,
$aay:function(){return[P.m]}}
W.L.prototype={
gdB:function(a){return new W.em(a)},
h:function(a){return a.localName},
A:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.h7
if(u==null){u=H.p([],[W.S])
t=new W.cc(u)
C.a.i(u,W.hn(null))
C.a.i(u,W.hq())
$.h7=t
d=t}else d=u
u=$.h6
if(u==null){u=new W.cM(d)
$.h6=u
c=u}else{u.a=d
c=u}}if($.ak==null){u=document
t=u.implementation.createHTMLDocument("")
$.ak=t
$.fp=t.createRange()
t=$.ak.createElement("base")
H.i(t,"$ib6")
t.href=u.baseURI
$.ak.head.appendChild(t)}u=$.ak
if(u.body==null){t=u.createElement("body")
u.body=H.i(t,"$ias")}u=$.ak
if(!!this.$ias)s=u.body
else{s=u.createElement(a.tagName)
$.ak.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.t(C.a1,a.tagName)){$.fp.selectNodeContents(s)
r=$.fp.createContextualFragment(b)}else{s.innerHTML=b
r=$.ak.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.ak.body
if(s==null?u!=null:s!==u)J.h_(s)
c.bd(r)
document.adoptNode(r)
return r},
dI:function(a,b,c){return this.A(a,b,c,null)},
sbZ:function(a,b){this.ar(a,b)},
ar:function(a,b){a.textContent=null
a.appendChild(this.A(a,b,null,null))},
$iL:1,
ge9:function(a){return a.tagName}}
W.d7.prototype={
$1:function(a){return!!J.x(H.i(a,"$io")).$iL},
$S:16}
W.b.prototype={$ib:1}
W.aM.prototype={
ct:function(a,b,c,d){return a.addEventListener(b,H.b_(H.c(c,{func:1,args:[W.b]}),1),!1)},
d9:function(a,b,c,d){return a.removeEventListener(b,H.b_(H.c(c,{func:1,args:[W.b]}),1),!1)},
$iaM:1}
W.d8.prototype={
gk:function(a){return a.length}}
W.Z.prototype={$iZ:1,$ih4:1}
W.M.prototype={$iM:1}
W.c6.prototype={
h:function(a){return String(a)},
$ic6:1}
W.bn.prototype={}
W.W.prototype={$iW:1}
W.P.prototype={
ga5:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.ab("No elements"))
if(t>1)throw H.f(P.ab("More than one element"))
return u.firstChild},
H:function(a,b){var u,t,s,r
H.v(b,"$iw",[W.o],"$aw")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gu:function(a){var u=this.a.childNodes
return new W.bZ(u,u.length,-1,[H.fP(C.a3,u,"a_",0)])},
gk:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$aH:function(){return[W.o]},
$aw:function(){return[W.o]},
$at:function(){return[W.o]}}
W.o.prototype={
e7:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.ce(a):u},
$io:1}
W.bo.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.c0(b,a,null,null,null))
return a[b]},
K:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$ian:1,
$aan:function(){return[W.o]},
$aH:function(){return[W.o]},
$iw:1,
$aw:function(){return[W.o]},
$it:1,
$at:function(){return[W.o]},
$aa_:function(){return[W.o]}}
W.dO.prototype={
gk:function(a){return a.length}}
W.cs.prototype={
A:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
u=W.iq("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.P(t).H(0,new W.P(u))
return t}}
W.dX.prototype={
A:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.J.A(u.createElement("table"),b,c,d)
u.toString
u=new W.P(u)
s=u.ga5(u)
s.toString
u=new W.P(s)
r=u.ga5(u)
t.toString
r.toString
new W.P(t).H(0,new W.P(r))
return t}}
W.dY.prototype={
A:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.av(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.J.A(u.createElement("table"),b,c,d)
u.toString
u=new W.P(u)
s=u.ga5(u)
t.toString
s.toString
new W.P(t).H(0,new W.P(s))
return t}}
W.bx.prototype={
ar:function(a,b){var u
a.textContent=null
u=this.A(a,b,null,null)
a.content.appendChild(u)},
$ibx:1}
W.ad.prototype={$iad:1}
W.ap.prototype={$iap:1}
W.e_.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.c0(b,a,null,null,null))
return a[b]},
K:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$ian:1,
$aan:function(){return[W.ad]},
$aH:function(){return[W.ad]},
$iw:1,
$aw:function(){return[W.ad]},
$it:1,
$at:function(){return[W.ad]},
$aa_:function(){return[W.ad]}}
W.aD.prototype={}
W.e5.prototype={$ih4:1}
W.af.prototype={
gdK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a2("deltaY is not supported"))},
gdJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a2("deltaX is not supported"))},
$iaf:1}
W.bA.prototype={
dc:function(a,b){return a.requestAnimationFrame(H.b_(H.c(b,{func:1,ret:-1,args:[P.m]}),1))},
cJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bB.prototype={$ibB:1}
W.cB.prototype={
h:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.Q(b,"$iay",[P.m],"$aay"))return!1
u=J.aJ(b)
return a.left===u.gX(b)&&a.top===u.gY(b)&&a.width===u.gZ(b)&&a.height===u.gV(b)},
gj:function(a){return W.hp(C.b.gj(a.left),C.b.gj(a.top),C.b.gj(a.width),C.b.gj(a.height))},
gV:function(a){return a.height},
gZ:function(a){return a.width}}
W.cE.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.c0(b,a,null,null,null))
return a[b]},
K:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$ian:1,
$aan:function(){return[W.o]},
$aH:function(){return[W.o]},
$iw:1,
$aw:function(){return[W.o]},
$it:1,
$at:function(){return[W.o]},
$aa_:function(){return[W.o]}}
W.ef.prototype={
F:function(a,b){var u,t,s,r,q
H.c(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=this.gO(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.cR)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gO:function(){var u,t,s,r,q
u=this.a.attributes
t=H.p([],[P.l])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.i(u[r],"$ibB")
if(q.namespaceURI==null)C.a.i(t,q.name)}return t},
$aaQ:function(){return[P.l,P.l]},
$ahf:function(){return[P.l,P.l]}}
W.em.prototype={
l:function(a,b){return this.a.getAttribute(H.q(b))},
gk:function(a){return this.gO().length}}
W.en.prototype={
b0:function(a,b,c,d){var u=H.e(this,0)
H.c(a,{func:1,ret:-1,args:[u]})
H.c(c,{func:1,ret:-1})
return W.C(this.a,this.b,a,!1,u)}}
W.fC.prototype={}
W.eo.prototype={
ad:function(){if(this.b==null)return
this.ds()
this.b=null
this.scM(null)
return},
dr:function(){var u,t,s
u=this.d
t=u!=null
if(t&&this.a<=0){s=this.b
s.toString
H.c(u,{func:1,args:[W.b]})
if(t)J.i9(s,this.c,u,!1)}},
ds:function(){var u,t,s
u=this.d
t=u!=null
if(t){s=this.b
s.toString
H.c(u,{func:1,args:[W.b]})
if(t)J.ia(s,this.c,u,!1)}},
scM:function(a){this.d=H.c(a,{func:1,args:[W.b]})}}
W.ep.prototype={
$1:function(a){return this.a.$1(H.i(a,"$ib"))},
$S:17}
W.aG.prototype={
co:function(a){var u,t
u=$.fW()
if(u.a===0){for(t=0;t<262;++t)u.D(0,C.a0[t],W.jr())
for(t=0;t<12;++t)u.D(0,C.m[t],W.js())}},
S:function(a){return $.i3().t(0,W.bf(a))},
I:function(a,b,c){var u,t,s
u=W.bf(a)
t=$.fW()
s=t.l(0,H.a(u)+"::"+b)
if(s==null)s=t.l(0,"*::"+b)
if(s==null)return!1
return H.jj(s.$4(a,b,c,this))},
$iS:1}
W.a_.prototype={
gu:function(a){return new W.bZ(a,this.gk(a),-1,[H.fP(this,a,"a_",0)])}}
W.cc.prototype={
S:function(a){return C.a.bD(this.a,new W.dx(a))},
I:function(a,b,c){return C.a.bD(this.a,new W.dw(a,b,c))},
$iS:1}
W.dx.prototype={
$1:function(a){return H.i(a,"$iS").S(this.a)},
$S:11}
W.dw.prototype={
$1:function(a){return H.i(a,"$iS").I(this.a,this.b,this.c)},
$S:11}
W.cH.prototype={
cp:function(a,b,c,d){var u,t,s
this.a.H(0,c)
u=b.ao(0,new W.eQ())
t=b.ao(0,new W.eR())
this.b.H(0,u)
s=this.c
s.H(0,C.a2)
s.H(0,t)},
S:function(a){return this.a.t(0,W.bf(a))},
I:function(a,b,c){var u,t
u=W.bf(a)
t=this.c
if(t.t(0,H.a(u)+"::"+b))return this.d.dA(c)
else if(t.t(0,"*::"+b))return this.d.dA(c)
else{t=this.b
if(t.t(0,H.a(u)+"::"+b))return!0
else if(t.t(0,"*::"+b))return!0
else if(t.t(0,H.a(u)+"::*"))return!0
else if(t.t(0,"*::*"))return!0}return!1},
$iS:1}
W.eQ.prototype={
$1:function(a){return!C.a.t(C.m,H.q(a))},
$S:10}
W.eR.prototype={
$1:function(a){return C.a.t(C.m,H.q(a))},
$S:10}
W.eV.prototype={
I:function(a,b,c){if(this.cj(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.t(0,b)
return!1}}
W.eW.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.q(a))},
$S:41}
W.eU.prototype={
S:function(a){var u=J.x(a)
if(!!u.$ibt)return!1
u=!!u.$id
if(u&&W.bf(a)==="foreignObject")return!1
if(u)return!0
return!1},
I:function(a,b,c){if(b==="is"||C.c.cc(b,"on"))return!1
return this.S(a)},
$iS:1}
W.bZ.prototype={
n:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbr(J.i8(this.a,u))
this.c=u
return!0}this.sbr(null)
this.c=t
return!1},
gp:function(){return this.d},
sbr:function(a){this.d=H.j(a,H.e(this,0))},
$iam:1}
W.S.prototype={}
W.eO.prototype={$ik6:1}
W.cM.prototype={
bd:function(a){new W.eZ(this).$2(a,null)},
a2:function(a,b){if(b==null)J.h_(a)
else b.removeChild(a)},
de:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.ic(a)
s=t.a.getAttribute("is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.K(o)}q="element unprintable"
try{q=J.bR(a)}catch(o){H.K(o)}try{p=W.bf(a)
this.dd(H.i(a,"$iL"),b,u,q,p,H.i(t,"$ihf"),H.q(s))}catch(o){if(H.K(o) instanceof P.a3)throw o
else{this.a2(a,b)
window
n="Removing corrupted element "+H.a(q)
if(typeof console!="undefined")window.console.warn(n)}}},
dd:function(a,b,c,d,e,f,g){var u,t,s,r,q
if(c){this.a2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.S(a)){this.a2(a,b)
window
u="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.I(a,"is",g)){this.a2(a,b)
window
u="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gO()
t=H.p(u.slice(0),[H.e(u,0)])
for(s=f.gO().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.k(t,s)
r=t[s]
if(!this.a.I(a,J.ie(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.a(e)+" "+r+'="'+H.a(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.x(a).$ibx)this.bd(a.content)},
$ijR:1}
W.eZ.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.de(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.a2(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.K(r)
q=H.i(u,"$io")
if(s){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.i(t,"$io")}},
$S:21}
W.cA.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.cN.prototype={}
W.cO.prototype={}
P.f7.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.T.prototype={
h:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
v:function(a,b){if(b==null)return!1
return H.Q(b,"$iT",[P.m],"$aT")&&this.a==J.fZ(b)&&this.b==b.gP(b)},
gj:function(a){var u,t,s
u=J.ar(this.a)
t=J.ar(this.b)
t=P.ho(P.ho(0,u),t)
s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ga_:function(a){return this.a},
gP:function(a){return this.b}}
P.bt.prototype={$ibt:1}
P.d.prototype={
sbZ:function(a,b){this.ar(a,b)},
A:function(a,b,c,d){var u,t,s,r,q,p
u=H.p([],[W.S])
C.a.i(u,W.hn(null))
C.a.i(u,W.hq())
C.a.i(u,new W.eU())
c=new W.cM(new W.cc(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.r).dI(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.P(r)
p=u.ga5(u)
for(;u=p.firstChild,u!=null;)q.appendChild(u)
return q},
$id:1}
P.bV.prototype={$ibV:1}
P.a5.prototype={$ia5:1}
P.cd.prototype={$icd:1}
P.aA.prototype={
c8:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}t=J.x(g)
if(!!t.$iZ&&h==null&&u&&!0){this.dm(a,b,c,d,e,f,g)
return}if(!!t.$iaj&&h==null&&u&&!0){this.dn(a,b,c,d,e,f,g)
return}throw H.f(P.b5("Incorrect number or type of arguments"))},
am:function(a,b,c,d,e,f,g){return this.c8(a,b,c,d,e,f,g,null,null,null)},
dm:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dn:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ee:function(a,b,c){return a.uniform1i(b,c)},
$iaA:1}
P.ct.prototype={$ict:1}
P.bz.prototype={$ibz:1}
K.e7.prototype={}
K.dh.prototype={
ac:function(a){var u,t,s,r
u=this.c+=a
this.d.i(0,u)
t=this.a
s=this.b
for(;t!==s;){r=t.b
t.a=r.gek()
t.b=r.geo()}return!0},
$ijI:1}
A.cV.prototype={
W:function(a,b){if(a<0||a>=this.k3.a)return
if(b<0||b>=this.k3.b)return
return this},
b2:function(a){a.c.a3(a,this.k3.c)}}
A.Y.prototype={}
A.cZ.prototype={
$1:function(a){var u,t,s,r
H.i(a,"$iZ")
u=new L.bs(C.z,C.i,C.i,-1)
u.a=V.bN(a.width)
u.b=V.bN(a.height)
u.c=a
t=u.gc0().c9(this.a)
s=t.c
r=t.e
return new A.Y(s.c/r,s.d/r,t)},
$S:22}
A.cW.prototype={
cl:function(a,b){var u,t,s,r,q,p,o,n,m
this.a=a
this.b=a
this.c=1
u=P.iM("@(\\d+(.\\d+)?)x").dW(this.a)
if(u!=null){t=u.b
if(2>=t.length)return H.k(t,2)
s=t[2]
if(s==null)s="."
r=P.jl(t[1])
q=C.a.dX(b,0,new A.cX($.fY()),P.m)
p=J.ig(q,s.length-1)
t=t.index+1
s=u.gdL()
o=P.iL(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
this.b=n+p+m
if(typeof r!=="number")return H.V(r)
this.c=q/r}}}
A.cX.prototype={
$2:function(a,b){var u
H.fi(a)
H.fi(b)
u=this.a
if(typeof a!=="number")return a.au()
if(typeof u!=="number")return H.V(u)
if(typeof b!=="number")return b.au()
if(Math.abs(a-u)<Math.abs(b-u)&&a>0)u=a
else u=b
return u},
$S:23}
A.cY.prototype={}
A.b7.prototype={
as:function(a,b,c){var u=this.b
u.at(0,this.c)
u=u.e
u.fillStyle=V.fM(c)
u.clearRect(a,b,1,1)
u.fillRect(a,b,1,1)}}
A.b8.prototype={}
A.a6.prototype={
gc4:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gb7:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(this.id){this.id=!1
u=this.go
t=this.Q
s=this.r
r=this.x
q=this.y
p=this.z
if(s>-0.0001&&s<0.0001)s=0.0001
if(r>-0.0001&&r<0.0001)r=0.0001
if(q!==0||p!==0){o=p+t
n=s*Math.cos(o)
m=s*Math.sin(o)
o=q+t
l=-r*Math.sin(o)
k=r*Math.cos(o)
o=this.e
j=this.f
u.R(n,m,l,k,this.c-o*n-j*l,this.d-o*m-j*k)}else{o=this.c
j=this.e
i=this.d
h=this.f
if(t!==0){g=Math.cos(t)
f=Math.sin(t)
n=s*g
m=s*f
l=-r*f
k=r*g
u.R(n,m,l,k,o-j*n-h*l,i-j*m-h*k)}else u.R(s,0,0,r,o-j*s,i-h*r)}}return this.go},
w:function(a,b){var u,t
u=[P.m]
H.v(a,"$iB",u,"$aB")
H.v(b,"$iB",u,"$aB")
t=H.Q(b,"$iB",u,null)?b:new U.B(0,0,u)
t.sa_(0,a.a)
t.sP(0,a.b)
this.bw(t)
return t},
bw:function(a){var u,t,s,r,q,p
u=[P.m]
H.v(a,"$iB",u,"$aB")
t=this.fy
if(t!=null)t.bw(a)
s=H.Q(a,"$iB",u,null)?a:new U.B(0,0,u)
r=a.a
q=a.b
p=this.gb7()
u=p.a
s.sa_(0,(u[3]*(r-u[4])-u[2]*(q-u[5]))/p.gbL())
s.sP(0,(u[0]*(q-u[5])-u[1]*(r-u[4]))/p.gbL())},
m:function(a,b){var u,t,s,r,q
u=H.p([],[R.bY])
for(t=this.fy;t!=null;t=t.fy)C.a.i(u,t)
s=u.length-1
while(!0){if(!(s>=0&&b.gbF()))break
if(s<0||s>=u.length)return H.k(u,s)
u[s].aO(b,this,C.T);--s}this.aO(b,this,C.U)
r=b.b
s=0
while(!0){q=u.length
if(!(s<q&&r))break
if(s>=q)return H.k(u,s)
u[s].aO(b,this,C.V);++s}},
sbx:function(a){this.fy=H.v(a,"$ifo",[A.a6],"$afo")},
$ijS:1}
A.d4.prototype={
gu:function(a){var u=this.b
return new J.bT(u,u.length,0,[H.e(u,0)])}}
A.bd.prototype={
W:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
for(u=this.af,t=u.length-1,s=null;t>=0;--t){if(t>=u.length)return H.k(u,t)
r=u[t]
q=r.gb7()
if(r.cx&&!0){p=q.a
o=a-p[4]
n=b-p[5]
m=p[3]
l=p[2]
k=p[0]
p=p[1]
j=k*m-p*l
i=r.W((m*o-l*n)/j,(k*n-p*o)/j)
if(i==null)continue
s=this}}return s},
b2:function(a){var u,t,s
for(u=this.af,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.b3(s)}},
dq:function(a){var u
for(u=this;u!=null;u=u.fy);},
cD:function(a){var u
a.m(0,new R.a7("removed",!0))
u=this.gc4()
if((u instanceof A.N?u:null)!=null)this.bt(a,"removedFromStage")
a.sbx(null)},
bt:function(a,b){var u=this
while(!0){if(!(u!=null&&!0))break
u.b_(b,!0)
u=u.fy}this.bu(a,new R.a7(b,!1),!1)},
bu:function(a,b,c){var u,t,s,r
u=!c
if(u){a.dZ(b.a)
t=!1}else t=!0
if(t)a.m(0,b)
if(!!a.$ibd){if(u){a.b_(b.a,!0)
c=!1}else c=!0
s=a.af
for(r=0;r<s.length;++r)this.bu(s[r],b,c)}},
$ifo:1,
$afo:function(){return[A.a6]}}
A.dc.prototype={}
A.dH.prototype={
ac:function(a){var u
this.f+=a
R.fE(this.d,$.i4(),R.bg)
this.b.ac(a)
u=this.c
C.a.F(u,new A.dI(a))
C.a.F(u,new A.dJ(this,a))
R.fE(this.e,$.i5(),R.bj)}}
A.dI.prototype={
$1:function(a){H.i(a,"$iN").dO.ac(this.a)
return!0},
$S:24}
A.dJ.prototype={
$1:function(a){var u,t,s,r,q,p
H.i(a,"$iN")
u=this.a.f
t=a.ae
if(t!==C.o)t=t===C.I
else t=!0
if(t){if($.fB==null){H.iI()
$.fB=$.dC}t=H.F($.dD.$0())
if(typeof t!=="number")return t.au()
t-=0
a.bC()
R.fE(a.dM,$.i6(),R.br)
a.U.a4(0)
s=a.U
r=s.a
r.a=0
r.b=0
r.c=0
s.aN(0,a.aS)
a.M.c3(0,a.bX)
V.hG(u)
V.hG(this.b)
a.M.b3(a)
a.M.c.B(0)
a.dT=!1
q=a.U.a
u=H.F($.dD.$0())
if(typeof u!=="number")return u.au()
s=$.fB
if(typeof s!=="number")return H.V(s)
p=C.f.ck((u-t)*1000,s)
a.aV=a.aV*0.75+q.a*0.25
a.aW=a.aW*0.75+q.b*0.25
a.aX=a.aX*0.75+q.c*0.25
a.aU=a.aU*0.95+p*0.05
u=a.N
if(u.cx){u.cy
t=!0}else t=!1
if(t){C.a.sk(u.r2,0)
u.rx=0
u.ry=0
a.N.ak(0,"FRAMETIME"+C.c.aj(C.f.h(C.b.q(a.aU)),6))
a.N.ak(0,"DRAWCALLS"+C.c.aj(C.f.h(C.b.q(a.aV)),6))
a.N.ak(0,"VERTICES"+C.c.aj(C.f.h(C.b.q(a.aW)),7))
a.N.ak(0,"INDICES"+C.c.aj(C.f.h(C.b.q(a.aX)),8))
a.M.c3(0,a.bM)
a.M.b3(a.N)
a.M.c.B(0)}}if(a.ae===C.I)a.ae=C.a5
return},
$S:25}
A.bu.prototype={
h:function(a){return this.b}}
A.aT.prototype={
h:function(a){return this.b}}
A.X.prototype={
h:function(a){return this.b}}
A.N.prototype={
cm:function(a,b,c,d){var u,t,s
u=a.tabIndex
if(typeof u!=="number")return u.ei()
if(u<=0)a.tabIndex=1
u=a.style
if(u.outline==="")u.outline="none"
this.aS=c.f
this.dP=!0
this.dQ=!0
this.dR=!1
this.dS=!1
this.L=a
this.bO=c.e
this.bN=c.d
this.ae=c.c
this.aQ=c.b
this.bT=V.bN(d)
this.bU=V.bN(b)
this.ag=V.jC(c.y,$.fY())
u=this.cI(a,c)
this.U=u
this.M=L.iN(u)
u=H.p([],[L.cp])
t=T.J()
s=H.p([],[P.l])
$.be=$.be+1
s=new A.cr("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC",u,t,s,0,0,0,0,1,1,0,0,0,1,H.p([],[A.b8]),T.J())
A.ij("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC").b5(s.gcz(),-1)
s.cx=!1
this.N=s
P.hN("StageXL render engine : "+this.U.gc2().h(0))
u=W.M
t=H.c(this.gd1(),{func:1,ret:-1,args:[u]})
W.C(a,"keydown",t,!1,u)
W.C(a,"keyup",t,!1,u)
W.C(a,"keypress",t,!1,u)
u=this.aQ
if(u===C.k||u===C.w){u=W.W
t=H.c(this.gd3(),{func:1,ret:-1,args:[u]})
W.C(a,"mousedown",t,!1,u)
W.C(a,"mouseup",t,!1,u)
W.C(a,"mousemove",t,!1,u)
W.C(a,"mouseout",t,!1,u)
W.C(a,"contextmenu",t,!1,u)
u=W.af
W.C(a,H.q(W.ir(a)),H.c(this.gd5(),{func:1,ret:-1,args:[u]}),!1,u)}u=this.aQ
if((u===C.W||u===C.w)&&$.i7()){u=W.ap
t=H.c(this.gd7(),{func:1,ret:-1,args:[u]})
W.C(a,"touchstart",t,!1,u)
W.C(a,"touchend",t,!1,u)
W.C(a,"touchmove",t,!1,u)
W.C(a,"touchenter",t,!1,u)
W.C(a,"touchleave",t,!1,u)
W.C(a,"touchcancel",t,!1,u)}$.hT().e3(new A.dT(this))
this.aJ()
this.bC()
this.U.aN(0,this.aS)},
W:function(a,b){var u=this.bg(a,b)
return u!=null?u:this},
cI:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
u=b.a
if(u===C.n)try{u=new T.aR(new Float32Array(16))
u.a0()
t=H.p([],[L.eH])
s=P.l
r=new Int16Array(0)
r=new L.dK(-1,new H.ao([s,P.A]),new H.ao([s,P.bz]),new L.ch(r,35048,-1),new L.ci(new Float32Array(0),35048,-1),new L.aa())
new Int16Array(0)
new Float32Array(0)
new Int16Array(0)
new Float32Array(0)
q=new Int16Array(16384)
p=new Float32Array(32768)
o=new Array(8)
o.fixed$length=Array
o=H.p(o,[L.bs])
n=H.p([],[L.cl])
m=L.a9
m=new L.cj(a,u,t,r,new L.ch(q,35048,-1),new L.ci(p,35048,-1),o,n,new L.aa(),P.aC(m),P.aC(m))
n=P.a5
o={func:1,ret:-1,args:[n]}
W.C(a,"webglcontextlost",H.c(m.gcQ(),o),!1,n)
W.C(a,"webglcontextrestored",H.c(m.gcS(),o),!1,n)
b=P.iD(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],s,null)
l=C.v.bb(a,"webgl",b)
l=H.i(l==null?C.v.bb(a,"experimental-webgl",b):l,"$iaA")
if(!J.x(l).$iaA)H.G(P.ab("Failed to get WebGL context."))
m.e=l
l.enable(3042)
m.e.disable(2960)
m.e.disable(2929)
m.e.disable(2884)
m.e.pixelStorei(37441,1)
m.e.blendFunc(1,771)
m.x=r
r.ab(m)
u=$.dF+1
$.dF=u
m.cx=u
m.a4(0)
return m}catch(k){H.K(k)
u=T.J()
t=L.a9
t=new L.az(a,a.getContext("2d"),u,C.d,1,new L.aa(),P.aC(t),P.aC(t))
t.a4(0)
return t}else if(u===C.y){u=T.J()
t=L.a9
t=new L.az(a,a.getContext("2d"),u,C.d,1,new L.aa(),P.aC(t),P.aC(t))
t.a4(0)
return t}else throw H.f(P.ab("Unknown RenderEngine"))},
bC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=this.bT
t=this.bU
s=this.L.getBoundingClientRect()
r=this.L
q=r.clientLeft
p=C.b.q(s.left)
if(typeof q!=="number")return q.G()
o=r.clientTop
n=C.b.q(s.top)
if(typeof o!=="number")return o.G()
m=r.clientWidth
l=r.clientHeight
if(m===0||l===0)return
if(typeof m!=="number")return m.ba()
k=m/u
if(typeof l!=="number")return l.ba()
j=l/t
switch(this.bN){case C.a6:i=j
h=k
break
case C.a7:i=k>j?k:j
h=i
break
case C.a8:h=1
i=1
break
case C.p:i=k<j?k:j
h=i
break
default:h=1
i=1}r=this.bO
switch(r){case C.D:case C.F:case C.A:g=0
break
case C.B:case C.j:case C.G:g=(m-u*h)/2
break
case C.C:case C.E:case C.H:g=m-u*h
break
default:g=0}switch(r){case C.A:case C.B:case C.C:f=0
break
case C.D:case C.j:case C.E:f=(l-t*i)/2
break
case C.F:case C.G:case C.H:f=l-t*i
break
default:f=0}r=this.dU
r.sX(0,-g/h)
r.sY(0,-f/i)
r.sZ(0,m/h)
r.sV(0,l/i)
r=this.bX
r.R(h,0,0,i,g,f)
e=this.ag
r.aq(0,e,e)
e=this.ah
e.R(1,0,0,1,-(q+p)-g,-(o+n)-f)
e.aq(0,1/h,1/i)
e=this.bM
e.bY()
n=this.ag
e.aq(0,n,n)
if(this.bV!==m||this.bW!==l){this.bV=m
this.bW=l
r=this.L
q=this.ag
if(typeof q!=="number")return H.V(q)
r.width=C.b.q(m*q)
r.height=C.b.q(l*q)
if(r.clientWidth!==m||r.clientHeight!==l){r=r.style
q=""+m+"px"
r.width=q
r=this.L.style
q=""+l+"px"
r.height=q}this.m(0,new R.a7("resize",!1))}},
aJ:function(){var u,t,s,r,q,p,o,n,m,l
u=this.aR
t=$.iF
if(u!=null&&t==="auto"){s=u.r1
if(s!=="auto")t=s}if(t==="auto")t="default"
if(this.bP!=t){this.bP=t
r=this.L.style
if($.fU().bJ(t)){q=$.fU().l(0,t)
p=C.Z.gep(q)
o=q.ge_()
n=o.ga_(o)
o=q.ge_()
m=o.gP(o)
l="url('"+H.a(p)+"') "+H.a(n)+" "+H.a(m)+", "+H.a(t)}else l=t
o=$.iE?"none":l
r.toString
r.cursor=o==null?"":o}},
d4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.i(a,"$iW")
a.preventDefault()
u=Date.now()
t=a.button
s=P.m
r=this.ah.b6(new P.T(a.clientX,a.clientY,[s]))
q=new U.B(0,0,[s])
if(typeof t!=="number")return t.bc()
if(t<0||t>2)return
if(a.type==="mousemove"&&this.bQ.v(0,r))return
s=this.dN
if(t<0||t>=3)return H.k(s,t)
p=s[t]
this.scP(r)
C.a.F(this.bR,new A.dQ(r))
if(a.type!=="mouseout")o=this.W(r.a,r.b)
else{this.m(0,new R.a7("mouseLeave",!1))
o=null}n=this.aR
if(n!=o){s=[A.a6]
m=H.p([],s)
l=H.p([],s)
for(k=n;k!=null;k=k.fy)C.a.i(m,k)
for(k=o;k!=null;k=k.fy)C.a.i(l,k)
for(s=m.length,j=l.length,i=0;!0;++i){if(i===s)break
if(i===j)break
h=s-i-1
if(h<0)return H.k(m,h)
g=m[h]
h=j-i-1
if(h<0)return H.k(l,h)
if(g!==l[h])break}if(n!=null){n.w(r,q)
n.m(0,new R.a8("mouseOut",!0))}for(f=0;f<m.length-i;++f){e=m[f]
e.w(r,q)
e.m(0,new R.a8("rollOut",!1))}for(f=l.length-i-1;f>=0;--f){if(f>=l.length)return H.k(l,f)
e=l[f]
e.w(r,q)
e.m(0,new R.a8("rollOver",!1))}if(o!=null){o.w(r,q)
o.m(0,new R.a8("mouseOver",!0))}this.aR=o}this.aJ()
if(a.type==="mousedown"){this.L.focus()
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
if(d!=null&&o!=null){o.w(r,q)
o.m(0,new R.a8(d,!0))
if(c)o.m(0,new R.a8(p.c,!0))}},
d6:function(a){var u,t,s
H.i(a,"$iaf")
u=P.m
t=this.ah.b6(new P.T(a.clientX,a.clientY,[u]))
s=this.W(t.a,t.b)
s.w(t,new U.B(0,0,[u]));(a&&C.K).gdJ(a)
C.K.gdK(a)
s.m(0,new R.a8("mouseWheel",!0))},
d8:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
H.i(b3,"$iap")
b3.preventDefault()
u=b3.type
for(t=b3.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=this.bS,m=this.bR,l=P.m,k=[l],j=this.ah,l=[l],i=[A.a6],h=0;h<t.length;t.length===s||(0,H.cR)(t),++h){g=t[h]
f=g.identifier
e=j.b6(new P.T(C.b.q(g.clientX),C.b.q(g.clientY),k))
d=new U.B(0,0,l)
c=this.bg(e.a,e.b)
c=c!=null?c:this
b=n.e6(f,new A.dR(this,c))
a=b.a
b.b
C.a.F(m,new A.dS(a,e))
a0=b.d
if(a0!==c){a1=H.p([],i)
a2=H.p([],i)
for(a3=a0;a3!=null;a3=a3.fy)C.a.i(a1,a3)
for(a3=c;a3!=null;a3=a3.fy)C.a.i(a2,a3)
for(a4=a1.length,a5=a2.length,a6=0;!0;++a6){if(a6===a4)break
if(a6===a5)break
a7=a4-a6-1
if(a7<0)return H.k(a1,a7)
a8=a1[a7]
a7=a5-a6-1
if(a7<0)return H.k(a2,a7)
if(a8!==a2[a7])break}if(a0!=null){a0.w(e,d)
a0.m(0,new R.aq("touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.w(e,d)
b0.m(0,new R.aq("touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.k(a2,a9)
b0=a2[a9]
b0.w(e,d)
b0.m(0,new R.aq("touchRollOver",!1))}c.w(e,d)
c.m(0,new R.aq("touchOver",!0))
b.d=c}if(o){this.L.focus()
n.D(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.al(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.al(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.w(e,d)
c.m(0,new R.aq(b1,!0))
if(b2)c.m(0,new R.aq("touchTap",!0))}}},
d2:function(a){H.i(a,"$iM")
return},
scP:function(a){this.bQ=H.v(a,"$iB",[P.m],"$aB")}}
A.dT.prototype={
$1:function(a){H.q(a)
return this.a.aJ()},
$S:30}
A.dQ.prototype={
$1:function(a){return H.i(a,"$iaF").ef(0,this.a)},
$S:8}
A.dR.prototype={
$0:function(){var u,t,s
u=this.b
t=this.a.bS.a
s=$.hr
$.hr=s+1
return new A.aX(s,t===0,u,u)},
$S:32}
A.dS.prototype={
$1:function(a){return H.i(a,"$iaF").ef(this.a,this.b)},
$S:8}
A.cr.prototype={
ak:function(a,b){var u,t
C.a.i(this.r2,b)
u=b.length
t=this.rx
this.rx=u>t?u:t;++this.ry},
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
this.m(0,new R.a7("Update",!1))
for(u=this.k4,t=a.c,s=this.r1,r=this.r2,q=0;q<this.ry;++q)for(p=q*14,o=0;o<this.rx;++o){if(q>=r.length)return H.k(r,q)
n=r[q]
m=o<n.length?C.c.a6(n,o)-32:0
if(m<0||m>=64)m=0
s.R(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.J()
j=new T.aR(new Float32Array(16))
j.a0()
k=new L.bC(1,C.d,n,j,l)
l.f=k}k.c.bK(s,l.c)
k.b=C.d
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.k(u,m)
t.a3(a,u[m])
a.e=a.e.e}},
cA:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
u=H.i(b3,"$iY").c
t=u.a
t.sdV(C.a4)
for(s=[P.A],r=this.k4,q=[P.m],p=u.e,o=0*p,n=u.d,m=u.b,l=H.e(m,0),u=u.c,k=0;k<64;++k){j=k*7
i=H.v(new U.a0(j,0,7,14,s),"$ia0",q,"$aa0")
h=C.b.q(j*p)
g=C.b.q(o)
i=H.e(i,0)
j=C.b.q(H.j(j+7,i)*p)-h
i=C.b.q(H.j(14,i)*p)-g
f=m.a
e=m.b
d=H.j(f+m.c,l)
c=H.j(e+m.d,l)
b=u.a
a=u.b
a0=C.f.ca(n,4)
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
a8=0}a9=V.f6(a4,f,d)
b0=V.f6(a6,e,c)
a1=V.f6(a7,f,d)
a2=V.f6(a8,e,c)
if(a0===0){b1=a4-a9
b2=a6-b0}else if(a0===1){b1=a6-b0
b2=a1-a7}else if(a0===2){b1=a1-a7
b2=a8-a2}else if(a0===3){b1=a2-a8
b2=a9-a4}else{b1=0
b2=0}C.a.i(r,L.fz(t,new U.a0(a9,b0,a1-a9,a2-b0,s),new U.a0(b1,b2,j,i,s),a0,p))}}}
A.dP.prototype={}
A.aW.prototype={}
A.aX.prototype={}
A.aF.prototype={}
L.d_.prototype={}
L.ch.prototype={}
L.ci.prototype={
aL:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.ck.prototype={
h:function(a){return this.b}}
L.a9.prototype={}
L.dE.prototype={}
L.az.prototype={
gc2:function(){return C.y},
a4:function(a){var u
this.at(0,this.f)
this.r=C.d
u=this.e
u.globalCompositeOperation="source-over"
this.x=1
u.globalAlpha=1},
aN:function(a,b){var u,t,s
this.at(0,this.f)
this.r=C.d
u=this.e
u.globalCompositeOperation="source-over"
this.x=1
u.globalAlpha=1
t=b>>>24&255
if(t<255){s=this.d
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.fM(b)
s=this.d
u.fillRect(0,0,s.width,s.height)}},
B:function(a){},
a3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
at:function(a,b){var u=b.a
this.e.setTransform(u[0],u[1],u[2],u[3],u[4],u[5])}}
L.cj.prototype={
gc2:function(){return C.n},
a4:function(a){var u,t,s
u=this.d
t=u.width
s=u.height
this.y=null
this.e.bindFramebuffer(36160,null)
this.e.viewport(0,0,t,s)
u=this.f
u.a0()
if(typeof t!=="number")return H.V(t)
if(typeof s!=="number")return H.V(s)
u.cb(0,2/t,-2/s,1)
u.ec(0,-1,1,0)
this.x.sc_(u)},
aN:function(a,b){var u
C.a.sk(this.cL(),0)
this.du(null)
this.dv(0)
u=(b>>>24&255)/255
this.e.colorMask(!0,!0,!0,!0)
this.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
this.e.clear(17408)},
B:function(a){this.x.B(0)},
a3:function(a,b){var u,t
u=this.cy
t=this.x
if(u!==t){t.B(0)
this.x=u
u.ab(this)
this.x.sc_(this.f)}this.dz(a.e.b)
this.aK(b.a)
u.a3(a,b)},
dz:function(a){if(a!==this.Q){this.x.B(0)
this.Q=a
this.e.blendFunc(a.a,a.b)}},
aK:function(a){var u,t,s,r
u=this.fx
if(a!==u[0]){this.x.B(0)
C.a.D(u,0,a)
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
r=t&&C.h
if(u!=null){r.am(t,3553,0,6408,6408,5121,u)
a.z=a.Q.getError()===1281}else r.c8(t,3553,0,6408,a.a,a.b,0,6408,5121,null)
if(a.z){u=a.a
u=W.fm(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.h).am(u,3553,0,6408,6408,5121,a.d)}if(s)a.Q.enable(3089)
a.Q.texParameteri(3553,10242,a.f.a)
a.Q.texParameteri(3553,10243,a.r.a)
a.Q.texParameteri(3553,10241,a.e.a)
a.Q.texParameteri(3553,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(3553,a.ch)}}},
cL:function(){var u=this.y
return u instanceof L.cl?u.r:this.r},
dv:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
du:function(a){this.e.disable(3089)},
cR:function(a){H.i(a,"$ia5").preventDefault()
this.b.i(0,new L.a9())},
cT:function(a){var u
H.i(a,"$ia5")
u=$.dF+1
$.dF=u
this.cx=u
this.c.i(0,new L.a9())}}
L.dG.prototype={}
L.cl.prototype={}
L.f2.prototype={
$1:function(a){var u,t,s,r,q
H.fi(a)
if(typeof a!=="number")return a.ba()
u=a/1000
t=$.hv
if(typeof t!=="number")return H.V(t)
s=u-t
$.hv=u
$.fF=-1
L.hu()
t=$.fX()
t=H.p(t.slice(0),[H.e(t,0)])
r=t.length
q=0
for(;q<t.length;t.length===r||(0,H.cR)(t),++q)t[q].$1(s)},
$S:35}
L.cm.prototype={
cX:function(a){var u
H.fi(a)
if(this.a){if(typeof a!=="number")return a.eh()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.ac(a)}}
L.eH.prototype={}
L.cn.prototype={
sc_:function(a){var u=this.e.l(0,"uProjectionMatrix")
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
u=this.cH(this.b)
this.c=u
this.dt(this.b,u)
this.dw(this.b,this.c)}this.b.useProgram(this.c)},
B:function(a){var u,t,s,r,q
u=this.f
t=u.c
if(t>0&&this.r.c>0){s=u.a.buffer
s.toString
H.ht(s,0,t)
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
H.ht(s,0,q)
r=new Float32Array(s,0,q)
u.r.bufferSubData(34962,0,r)
s=u.x
s.b=s.b+u.d
u=this.r
u.c=0
u.d=0
this.b.drawElements(4,t,5123,0);++this.x.a}},
cH:function(a){var u,t,s
u=a.createProgram()
t=this.bq(a,this.gb9(),35633)
s=this.bq(a,this.gaZ(),35632)
a.attachShader(u,t)
a.attachShader(u,s)
a.linkProgram(u)
if(a.getProgramParameter(u,35714)===!0)return u
throw H.f(P.ab(a.isContextLost()?"ContextLost":a.getProgramInfoLog(u)))},
bq:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.f(P.ab(a.isContextLost()?"ContextLost":a.getShaderInfoLog(u)))},
dt:function(a,b){var u,t,s,r,q
u=this.d
u.bG(0)
t=H.F(a.getProgramParameter(b,35721))
if(typeof t!=="number")return H.V(t)
s=0
for(;s<t;++s){r=a.getActiveAttrib(b,s)
q=a.getAttribLocation(b,r.name)
a.enableVertexAttribArray(q)
u.D(0,r.name,q)}},
dw:function(a,b){var u,t,s,r,q
u=this.e
u.bG(0)
t=H.F(a.getProgramParameter(b,35718))
if(typeof t!=="number")return H.V(t)
s=0
for(;s<t;++s){r=a.getActiveUniform(b,s)
q=a.getUniformLocation(b,r.name)
u.D(0,r.name,q)}}}
L.dK.prototype={
gb9:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gaZ:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
ab:function(a){var u
this.ci(a)
u=this.b;(u&&C.h).ee(u,this.e.l(0,"uSampler"),0)
u=this.d
this.r.aL(u.l(0,"aVertexPosition"),2,20,0)
this.r.aL(u.l(0,"aVertexTextCoord"),2,20,8)
this.r.aL(u.l(0,"aVertexAlpha"),1,20,16)},
a3:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
if(m>=p)return H.k(q,m)
q[m]=j
i=m+1
if(i>=p)return H.k(q,i)
q[i]=j+1
i=m+2
h=j+2
if(i>=p)return H.k(q,i)
q[i]=h
i=m+3
if(i>=p)return H.k(q,i)
q[i]=j
i=m+4
if(i>=p)return H.k(q,i)
q[i]=h
h=m+5
if(h>=p)return H.k(q,h)
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
if(k>=n)return H.k(o,k)
o[k]=g+b
h=k+1
if(h>=n)return H.k(o,h)
o[h]=d+a0
h=k+2
f=r[2]
if(h>=n)return H.k(o,h)
o[h]=f
f=k+3
h=r[3]
if(f>=n)return H.k(o,f)
o[f]=h
h=k+4
if(h>=n)return H.k(o,h)
o[h]=t
h=k+5
if(h>=n)return H.k(o,h)
o[h]=e+b
h=k+6
if(h>=n)return H.k(o,h)
o[h]=c+a0
h=k+7
f=r[6]
if(h>=n)return H.k(o,h)
o[h]=f
f=k+8
h=r[7]
if(f>=n)return H.k(o,f)
o[f]=h
h=k+9
if(h>=n)return H.k(o,h)
o[h]=t
h=k+10
if(h>=n)return H.k(o,h)
o[h]=e+a
h=k+11
if(h>=n)return H.k(o,h)
o[h]=c+a1
h=k+12
f=r[10]
if(h>=n)return H.k(o,h)
o[h]=f
f=k+13
h=r[11]
if(f>=n)return H.k(o,f)
o[f]=h
h=k+14
if(h>=n)return H.k(o,h)
o[h]=t
h=k+15
if(h>=n)return H.k(o,h)
o[h]=g+a
h=k+16
if(h>=n)return H.k(o,h)
o[h]=d+a1
h=k+17
f=r[14]
if(h>=n)return H.k(o,h)
o[h]=f
f=k+18
h=r[15]
if(f>=n)return H.k(o,f)
o[f]=h
h=k+19
if(h>=n)return H.k(o,h)
o[h]=t
l.c=k+20
l.d=j+4}}
L.fx.prototype={
gb9:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gaZ:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.fy.prototype={
gb9:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gaZ:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "}}
L.bC.prototype={
ge5:function(){var u,t
u=this.f
if(u==null){u=T.J()
t=new T.aR(new Float32Array(16))
t.a0()
t=new L.bC(1,C.d,u,t,this)
this.f=t
u=t}return u}}
L.dL.prototype={
c3:function(a,b){var u,t
u=this.d
this.e=u
u=u.c
u.bY()
t=this.e
t.a=1
t.b=C.d
u.dH(b)},
b3:function(a){var u,t,s,r,q
u=a.gb7()
t=a.ch
s=this.e
r=s.ge5()
r.c.bK(u,s.c)
q=s.b
r.b=q
r.a=t*s.a
this.e=r
a.b2(this)
this.e=s}}
L.aa.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.bs.prototype={
gc0:function(){var u,t,s
u=this.a
t=this.b
s=[P.A]
return L.fz(this,new U.a0(0,0,u,t,s),new U.a0(0,0,u,t,s),0,1)},
gaM:function(a){var u,t
u=this.c
t=J.x(u)
if(!!t.$iaj)return u
else if(!!t.$iZ){t=this.a
t=W.fm(this.b,t)
this.c=t
this.d=t
t.getContext("2d").drawImage(u,0,0,this.a,this.b)
return this.d}else throw H.f(P.ab("RenderTexture is read only."))},
sdV:function(a){var u
if(this.e===a)return
this.e=a
u=this.x
if(u==null||this.ch==null)return
if(u.cx!==this.y)return
u.aK(this)
this.Q.texParameteri(3553,10241,this.e.a)
this.Q.texParameteri(3553,10240,this.e.a)},
b8:function(){var u,t
u=this.x
if(u==null||this.ch==null)return
if(u.cx!==this.y)return
u.x.B(0)
this.x.aK(this)
t=this.Q.isEnabled(3089)
if(t)this.Q.disable(3089)
if(this.z){this.d.getContext("2d").drawImage(this.c,0,0)
u=this.Q;(u&&C.h).am(u,3553,0,6408,6408,5121,this.d)}else{u=this.Q;(u&&C.h).am(u,3553,0,6408,6408,5121,this.c)}if(t)this.Q.enable(3089)}}
L.co.prototype={}
L.cp.prototype={
c9:function(a){return L.fz(this.a,this.b,this.c,this.d,a)},
gaP:function(){var u,t,s,r,q
u=this.e
t=this.d
if(t===0){t=this.b
s=this.c
return T.ds(u,0,0,u,t.a+s.a,t.b+s.b)}else if(t===1){t=this.b
s=this.c
return T.ds(0,u,0-u,0,H.j(t.a+t.c,H.e(t,0))-s.b,t.b+s.a)}else if(t===2){t=this.b
s=H.e(t,0)
r=this.c
q=0-u
return T.ds(q,0,0,q,H.j(t.a+t.c,s)-r.a,H.j(t.b+t.d,s)-r.b)}else if(t===3){t=this.b
s=this.c
return T.ds(0,0-u,u,0,t.a+s.b,H.j(t.b+t.d,H.e(t,0))-s.a)}else throw H.f(P.fq())}}
L.dM.prototype={}
T.dn.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.bU.prototype={
gbF:function(){return!1}}
R.bg.prototype={}
R.bj.prototype={}
R.br.prototype={}
R.a7.prototype={
gbF:function(){return!0}}
R.bY.prototype={
b_:function(a,b){return!1},
dZ:function(a){return this.b_(a,!1)},
aO:function(a,b,c){a.f=!1
a.r=!1
return}}
R.bh.prototype={
h:function(a){return this.b}}
R.fs.prototype={}
R.aL.prototype={}
R.bk.prototype={
h:function(a){return this.b}}
R.db.prototype={}
R.a8.prototype={}
R.aq.prototype={}
T.c7.prototype={
h:function(a){var u=this.a
return"Matrix [a="+H.a(u[0])+", b="+H.a(u[1])+", c="+H.a(u[2])+", d="+H.a(u[3])+", tx="+H.a(u[4])+", ty="+H.a(u[5])+"]"},
gbL:function(){var u=this.a
return u[0]*u[3]-u[1]*u[2]},
b6:function(a){var u,t,s,r,q,p,o,n
u=P.m
H.v(a,"$iT",[u],"$aT")
t=a.a
t.toString
s=a.b
s.toString
r=this.a
q=r[0]
if(typeof t!=="number")return t.ap()
p=r[2]
if(typeof s!=="number")return s.ap()
o=t*q+s*p+r[4]
n=t*r[1]+s*r[3]+r[5]
u=[u]
if(H.Q(null,"$iB",u,null)){null.ej(o,n)
return}else return new U.B(o,n,u)},
bY:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
aq:function(a,b,c){var u,t
u=this.a
t=u[0]
if(typeof b!=="number")return H.V(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.V(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
R:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
dH:function(a){var u,t
u=this.a
t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
bK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
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
T.aR.prototype={
a0:function(){var u=this.a
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
cb:function(a,b,c,d){var u=this.a
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
ec:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d}}
U.B.prototype={
h:function(a){return"Point<"+new H.by(H.e(this,0)).h(0)+"> [x="+H.a(this.a)+", y="+H.a(this.b)+"]"},
v:function(a,b){if(b==null)return!1
return H.Q(b,"$iT",[P.m],"$aT")&&this.a===J.fZ(b)&&this.b===b.gP(b)},
gj:function(a){var u,t
u=C.b.gj(this.a)
t=C.b.gj(this.b)
return O.hb(O.bm(O.bm(0,u),t))},
sa_:function(a,b){this.a=H.j(b,H.e(this,0))},
sP:function(a,b){this.b=H.j(b,H.e(this,0))},
$iT:1,
ga_:function(a){return this.a},
gP:function(a){return this.b}}
U.a0.prototype={
h:function(a){return"Rectangle<"+new H.by(H.e(this,0)).h(0)+"> [left="+H.a(this.a)+", top="+H.a(this.b)+", width="+H.a(this.c)+", height="+H.a(this.d)+"]"},
v:function(a,b){var u
if(b==null)return!1
if(H.Q(b,"$iay",[P.m],"$aay")){u=J.aJ(b)
u=this.a===u.gX(b)&&this.b===u.gY(b)&&this.c===u.gZ(b)&&this.d===u.gV(b)}else u=!1
return u},
gj:function(a){var u,t,s,r
u=C.b.gj(this.a)
t=C.b.gj(this.b)
s=C.b.gj(this.c)
r=C.b.gj(this.d)
return O.hb(O.bm(O.bm(O.bm(O.bm(0,u),t),s),r))},
sX:function(a,b){this.a=H.j(b,H.e(this,0))},
sY:function(a,b){this.b=H.j(b,H.e(this,0))},
sZ:function(a,b){this.c=H.j(b,H.e(this,0))},
sV:function(a,b){this.d=H.j(b,H.e(this,0))},
$iay:1,
gX:function(a){return this.a},
gY:function(a){return this.b},
gZ:function(a){return this.c},
gV:function(a){return this.d}}
N.c_.prototype={
d0:function(a){this.d.ad()
this.e.ad()
this.b.J(0,this.a)},
cZ:function(a){this.d.ad()
this.e.ad()
this.b.bI(new T.dn("Failed to load "+H.a(this.a.src)+".",null))}}
Q.dt.prototype={}
F.fg.prototype={
$1:function(c0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
H.i(c0,"$iM")
if(!!J.x(c0).$iM)if(c0.keyCode===32){u=this.a
P.hN("Current Fractal: "+u.b)
t=this.b
s=t.af
r=new A.d4(s,[A.a6])
if(r.gk(r)===1){r=s.length
if(0>=r)H.G(P.b5("The supplied index is out of bounds."))
else{t.cD(s[0])
C.a.c1(s,0)}}r=this.c
q=this.d
p=C.f.q(r)
o=C.f.q(q)
n=new L.bs(C.z,C.i,C.i,-1)
if(p<=0)H.G(P.b5("width"))
if(o<=0)H.G(P.b5("height"))
m=V.bN(p)
n.a=m
l=V.bN(o)
n.b=l
k=W.fm(l,m)
n.d=k
n.c=k
j=k.getContext("2d")
j.fillStyle=V.fM(4294967295)
j.fillRect(0,0,m,l)
i=n.gc0().c9(1)
m=i.c
l=i.e
h=new A.Y(m.c/l,m.d/l,i)
switch(u.b){case 0:J.h0(this.e,"Mandelbrot")
for(m=i.a,l=4/r,k=4/q,g=h.c.a,f=[L.a9],e=0;e<r;++e)for(d=-2+l*e,c=0;c<q;++c){b=-2+k*c
for(a=b,a0=d,a1=0;a1<100;a0=a2){a2=a0*a0-a*a+d
a=2*a0*a+b
if(Math.abs(a2+a)>16)break;++a1}a3=C.Y.aY(2.55*a1)
if(a1===100)a3=0
a4=m.gaM(m)
a5=T.J()
a6=a4.getContext("2d")
a7=a5.a
a6.setTransform(a7[0],a7[1],a7[2],a7[3],a7[4],a7[5])
a6.globalCompositeOperation="source-over"
a6.globalAlpha=1
new A.b7(h,new L.az(a4,a6,a5,C.d,1,new L.aa(),new P.ag(null,null,0,f),new P.ag(null,null,0,f)),i.gaP()).as(e,c,(4278190080|a3<<16|a3<<8|a3)>>>0)
g.b8()}++u.b
break
case 1:J.h0(this.e,"Julia Set")
a8=Math.cos(u.a*3.213)
a9=Math.sin(u.a)
u.a+=0.02
b0=5*q/r
b1=-b0/2
b2=5/r
b3=(b1+b0-b1)/q
for(m=i.a,l=h.c.a,k=[L.a9],c=b1,b4=0;b4<q;++b4){for(e=-2.5,b5=0;b5<r;++b5){for(b=c,d=e,a1=0;a1<100;d=a0){b6=d*d
b7=b*b
if(b6+b7>4)break
a0=b6-b7+a8
b=2*d*b+a9;++a1}if(a1===100){g=m.gaM(m)
f=T.J()
a4=g.getContext("2d")
a5=f.a
a4.setTransform(a5[0],a5[1],a5[2],a5[3],a5[4],a5[5])
a4.globalCompositeOperation="source-over"
a4.globalAlpha=1
new A.b7(h,new L.az(g,a4,f,C.d,1,new L.aa(),new P.ag(null,null,0,k),new P.ag(null,null,0,k)),i.gaP()).as(b5,b4,4294967295)
l.b8()}else{g=C.b.aY(Math.sqrt(a1/100))
f=m.gaM(m)
a4=T.J()
a5=f.getContext("2d")
a6=a4.a
a5.setTransform(a6[0],a6[1],a6[2],a6[3],a6[4],a6[5])
a5.globalCompositeOperation="source-over"
a5.globalAlpha=1
new A.b7(h,new L.az(f,a5,a4,C.d,1,new L.aa(),new P.ag(null,null,0,k),new P.ag(null,null,0,k)),i.gaP()).as(b5,b4,(4278190080|g<<16|65280|96)>>>0)
l.b8()}e+=b2}c+=b3}++u.b
break
case 2:u.b=0
break
default:break}$.be=$.be+1
b8=new A.cV(h,0,0,0,0,1,1,0,0,0,1,H.p([],[A.b8]),T.J())
t.dq(b8)
C.a.i(s,b8)
b8.sbx(t)
b8.m(0,new R.a7("added",!0))
b9=t.gc4()
if((b9 instanceof A.N?b9:null)!=null)t.bt(b8,"addedToStage")}},
$S:38};(function aliases(){var u=J.y.prototype
u.ce=u.h
u=J.c4.prototype
u.cg=u.h
u=P.w.prototype
u.cf=u.ao
u=W.L.prototype
u.av=u.A
u=W.cH.prototype
u.cj=u.I
u=A.bd.prototype
u.bg=u.W
u=L.cn.prototype
u.ci=u.ab})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
u(H,"j3","iH",39)
t(P,"jf","iR",2)
t(P,"jg","iS",2)
t(P,"jh","iT",2)
u(P,"hF","jb",1)
s(P,"ji",1,null,["$2","$1"],["hx",function(a){return P.hx(a,null)}],3,0)
u(P,"hE","j6",1)
r(P.cy.prototype,"gdG",0,1,null,["$2","$1"],["T","bI"],3,0)
r(P.cJ.prototype,"gdE",1,0,null,["$1","$0"],["J","dF"],15,0)
r(P.E.prototype,"gcE",0,1,null,["$2","$1"],["E","cF"],3,0)
q(P.cC.prototype,"gdg","dh",1)
s(W,"jr",4,null,["$4"],["iU"],9,0)
s(W,"js",4,null,["$4"],["iV"],9,0)
var o
p(o=A.N.prototype,"gd3","d4",26)
p(o,"gd5","d6",34)
p(o,"gd7","d8",28)
p(o,"gd1","d2",29)
p(A.cr.prototype,"gcz","cA",33)
p(o=L.cj.prototype,"gcQ","cR",4)
p(o,"gcS","cT",4)
p(L.cm.prototype,"gcW","cX",36)
p(o=N.c_.prototype,"gd_","d0",7)
p(o,"gcY","cZ",7)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.fv,J.y,J.bT,P.w,H.c5,P.am,H.aN,H.bb,H.e0,P.al,H.bi,H.cI,H.by,P.aQ,H.di,H.dk,H.df,H.eI,P.eX,P.cw,P.bv,P.ei,P.eh,P.cy,P.ah,P.E,P.cx,P.ac,P.el,P.bI,P.cC,P.eT,P.I,P.f_,P.eP,P.bD,P.eG,P.cD,P.H,P.D,P.m,P.dz,P.cq,P.eq,P.d9,P.av,P.t,P.u,P.z,P.fA,P.l,P.bw,W.d2,W.aG,W.a_,W.cc,W.cH,W.eU,W.bZ,W.S,W.eO,W.cM,P.T,K.e7,K.dh,R.bY,A.Y,A.cW,A.cY,A.b7,L.dG,L.cm,A.bu,A.aT,A.X,A.dP,A.aW,A.aX,A.aF,L.d_,L.ch,L.ci,L.ck,L.a9,L.dE,L.cl,L.eH,L.cn,L.bC,L.dL,L.aa,L.bs,L.co,L.cp,L.dM,R.a7,R.bh,R.bk,T.c7,T.aR,U.B,U.a0,N.c_,Q.dt])
s(J.y,[J.de,J.c3,J.c4,J.aw,J.bl,J.aO,H.cb,W.aM,W.bW,W.cA,W.d5,W.bX,W.b,W.c6,W.cF,W.ad,W.cK,W.cN,P.bV,P.cd,P.aA,P.ct,P.bz])
s(J.c4,[J.dA,J.aE,J.ax])
t(J.fu,J.aw)
s(J.bl,[J.c2,J.c1])
s(P.w,[H.d6,H.cv,P.dd])
s(H.d6,[H.aP,H.dj])
t(H.dr,H.aP)
t(H.e6,P.am)
s(H.bb,[H.dB,H.fk,H.dZ,H.fa,H.fb,H.fc,P.ec,P.eb,P.ed,P.ee,P.eY,P.e9,P.e8,P.f0,P.f1,P.f4,P.er,P.ez,P.ev,P.ew,P.ex,P.et,P.ey,P.es,P.eC,P.eD,P.eB,P.eA,P.dV,P.dW,P.eJ,P.f3,P.eM,P.eL,P.eN,P.dq,W.d7,W.ep,W.dx,W.dw,W.eQ,W.eR,W.eW,W.eZ,P.f7,A.cZ,A.cX,A.dI,A.dJ,A.dT,A.dQ,A.dR,A.dS,L.f2,F.fg])
s(P.al,[H.dy,H.dg,H.e3,H.cu,H.dN,P.bp,P.a3,P.e4,P.e2,P.aB,P.d1,P.d3,T.dn])
s(H.dZ,[H.dU,H.b9])
t(P.dp,P.aQ)
s(P.dp,[H.ao,W.ef])
t(H.c8,H.cb)
s(H.c8,[H.bE,H.bG])
t(H.bF,H.bE)
t(H.c9,H.bF)
t(H.bH,H.bG)
t(H.ca,H.bH)
t(H.du,H.c9)
t(H.dv,H.ca)
s(P.bv,[P.eS,W.en,R.fs])
t(P.cz,P.eS)
t(P.eg,P.cz)
t(P.ej,P.ei)
t(P.O,P.ej)
t(P.ag,P.eh)
s(P.cy,[P.ea,P.cJ])
t(P.ek,P.el)
t(P.bJ,P.bI)
t(P.eK,P.f_)
t(P.eF,P.eP)
t(P.dm,P.cD)
s(P.m,[P.ai,P.A])
s(P.a3,[P.ce,P.da])
s(W.aM,[W.o,W.bA])
s(W.o,[W.L,W.at,W.bB])
s(W.L,[W.h,P.d])
s(W.h,[W.bS,W.cU,W.b6,W.as,W.aj,W.d8,W.Z,W.bn,W.dO,W.cs,W.dX,W.dY,W.bx])
t(W.bc,W.cA)
s(W.b,[W.aD,P.a5])
s(W.aD,[W.M,W.W,W.ap])
t(W.P,P.dm)
t(W.cG,W.cF)
t(W.bo,W.cG)
t(W.cL,W.cK)
t(W.e_,W.cL)
t(W.e5,W.bn)
t(W.af,W.W)
t(W.cB,W.bX)
t(W.cO,W.cN)
t(W.cE,W.cO)
t(W.em,W.ef)
t(W.fC,W.en)
s(P.ac,[W.eo,R.aL])
t(W.eV,W.cH)
t(P.bt,P.d)
t(A.a6,R.bY)
s(A.a6,[A.cV,A.dc,A.cr])
t(A.b8,L.dG)
t(A.d4,P.dd)
t(A.bd,A.dc)
t(A.dH,L.cm)
t(A.N,A.bd)
s(L.dE,[L.az,L.cj])
s(L.cn,[L.dK,L.fx,L.fy])
s(R.a7,[R.bU,R.db])
s(R.bU,[R.bg,R.bj,R.br])
s(R.db,[R.a8,R.aq])
u(H.bE,P.H)
u(H.bF,H.aN)
u(H.bG,P.H)
u(H.bH,H.aN)
u(P.cD,P.H)
u(W.cA,W.d2)
u(W.cF,P.H)
u(W.cG,W.a_)
u(W.cK,P.H)
u(W.cL,W.a_)
u(W.cN,P.H)
u(W.cO,W.a_)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.as.prototype
C.v=W.aj.prototype
C.X=J.y.prototype
C.a=J.aw.prototype
C.Y=J.c1.prototype
C.f=J.c2.prototype
C.Z=J.c3.prototype
C.b=J.bl.prototype
C.c=J.aO.prototype
C.a_=J.ax.prototype
C.a3=W.bo.prototype
C.x=J.dA.prototype
C.h=P.aA.prototype
C.J=W.cs.prototype
C.q=J.aE.prototype
C.K=W.af.prototype
C.L=W.bA.prototype
C.d=new L.d_(1,771,"source-over")
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=function() {
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
C.R=function(getTagFallback) {
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
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.Q=function(hooks) {
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
C.P=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.S=new P.dz()
C.e=new P.eK()
C.T=new R.bh("EventPhase.CAPTURING_PHASE")
C.U=new R.bh("EventPhase.AT_TARGET")
C.V=new R.bh("EventPhase.BUBBLING_PHASE")
C.k=new R.bk("InputEventMode.MouseOnly")
C.W=new R.bk("InputEventMode.TouchOnly")
C.w=new R.bk("InputEventMode.MouseAndTouch")
C.a0=H.p(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.a1=H.p(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.l])
C.a2=H.p(u([]),[P.l])
C.l=H.p(u(["bind","if","ref","repeat","syntax"]),[P.l])
C.m=H.p(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.n=new L.ck("RenderEngine.WebGL")
C.y=new L.ck("RenderEngine.Canvas2D")
C.a4=new L.co(9728)
C.z=new L.co(9729)
C.i=new L.dM(33071)
C.A=new A.X("StageAlign.TOP_LEFT")
C.B=new A.X("StageAlign.TOP")
C.C=new A.X("StageAlign.TOP_RIGHT")
C.D=new A.X("StageAlign.LEFT")
C.j=new A.X("StageAlign.NONE")
C.E=new A.X("StageAlign.RIGHT")
C.F=new A.X("StageAlign.BOTTOM_LEFT")
C.G=new A.X("StageAlign.BOTTOM")
C.H=new A.X("StageAlign.BOTTOM_RIGHT")
C.o=new A.bu("StageRenderMode.AUTO")
C.I=new A.bu("StageRenderMode.ONCE")
C.a5=new A.bu("StageRenderMode.STOP")
C.a6=new A.aT("StageScaleMode.EXACT_FIT")
C.a7=new A.aT("StageScaleMode.NO_BORDER")
C.a8=new A.aT("StageScaleMode.NO_SCALE")
C.p=new A.aT("StageScaleMode.SHOW_ALL")})();(function staticFields(){$.dC=null
$.dD=null
$.a4=0
$.ba=null
$.h2=null
$.fG=!1
$.hK=null
$.hC=null
$.hO=null
$.f8=null
$.fd=null
$.fQ=null
$.aY=null
$.bK=null
$.bL=null
$.fH=!1
$.r=C.e
$.fB=null
$.ak=null
$.fp=null
$.h7=null
$.h6=null
$.be=0
$.hr=1
$.dF=0
$.hv=17976931348623157e292
$.fF=-1
$.iE=!1
$.iF="auto"})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"jK","hR",function(){return H.hJ("_$dart_dartClosure")})
u($,"jN","fT",function(){return H.hJ("_$dart_js")})
u($,"jW","hU",function(){return H.ae(H.e1({
toString:function(){return"$receiver$"}}))})
u($,"jX","hV",function(){return H.ae(H.e1({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"jY","hW",function(){return H.ae(H.e1(null))})
u($,"jZ","hX",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"k1","i_",function(){return H.ae(H.e1(void 0))})
u($,"k2","i0",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"k0","hZ",function(){return H.ae(H.hk(null))})
u($,"k_","hY",function(){return H.ae(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"k4","i2",function(){return H.ae(H.hk(void 0))})
u($,"k3","i1",function(){return H.ae(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"k8","fV",function(){return P.iQ()})
u($,"kh","bP",function(){return[]})
u($,"k9","i3",function(){return P.he(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.l)})
u($,"ka","fW",function(){return P.iC(P.l,P.av)})
u($,"jJ","hQ",function(){return new A.cY(H.p([1,2],[P.ai]))})
u($,"kf","fX",function(){return[]})
u($,"kd","i4",function(){return H.p([],[[R.aL,R.bg]])})
u($,"ke","i5",function(){return H.p([],[[R.aL,R.bj]])})
u($,"kg","i6",function(){return H.p([],[[R.aL,R.br]])})
u($,"kk","fY",function(){var t=W.jH().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"kn","i7",function(){return Q.j0()})
u($,"jP","fU",function(){return H.iB(P.l,Q.dt)})
u($,"jO","hS",function(){return P.aC(P.l)})
u($,"jQ","hT",function(){var t=$.hS()
t.toString
return new P.eg(t,[H.e(t,0)])})})()
var v={mangledGlobalNames:{A:"int",ai:"double",m:"num",l:"String",D:"bool",u:"Null",t:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.u},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.n],opt:[P.z]},{func:1,ret:-1,args:[P.a5]},{func:1,args:[,]},{func:1,ret:P.u,args:[,]},{func:1,ret:-1,args:[W.b]},{func:1,ret:-1,args:[A.aF]},{func:1,ret:P.D,args:[W.L,P.l,P.l,W.aG]},{func:1,ret:P.D,args:[P.l]},{func:1,ret:P.D,args:[W.S]},{func:1,ret:P.u,args:[,,]},{func:1,ret:P.A},{func:1,ret:[P.E,,],args:[,]},{func:1,ret:-1,opt:[P.n]},{func:1,ret:P.D,args:[W.o]},{func:1,args:[W.b]},{func:1,args:[P.l]},{func:1,ret:P.u,args:[P.A,,]},{func:1,ret:P.u,args:[,],opt:[P.z]},{func:1,ret:-1,args:[W.o,W.o]},{func:1,ret:A.Y,args:[W.Z]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.D,args:[A.N]},{func:1,ret:-1,args:[A.N]},{func:1,ret:-1,args:[W.W]},{func:1,ret:P.u,args:[,P.z]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:-1,args:[W.M]},{func:1,ret:-1,args:[P.l]},{func:1,ret:-1,args:[,]},{func:1,ret:A.aX},{func:1,ret:-1,args:[A.Y]},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.u,args:[P.m]},{func:1,ret:-1,args:[P.m]},{func:1,args:[,P.l]},{func:1,ret:P.u,args:[W.M]},{func:1,ret:P.m},{func:1,ret:P.u,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[P.l]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.y,CanvasGradient:J.y,CanvasPattern:J.y,DOMError:J.y,DOMImplementation:J.y,MediaError:J.y,Navigator:J.y,NavigatorConcurrentHardware:J.y,NavigatorUserMediaError:J.y,OverconstrainedError:J.y,PositionError:J.y,Range:J.y,WebGLActiveInfo:J.y,WebGLFramebuffer:J.y,WebGLRenderbuffer:J.y,WebGL2RenderingContext:J.y,WebGLShader:J.y,SQLError:J.y,ArrayBufferView:H.cb,Float32Array:H.du,Int16Array:H.dv,HTMLBRElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,HTMLAnchorElement:W.bS,HTMLAreaElement:W.cU,HTMLBaseElement:W.b6,HTMLBodyElement:W.as,HTMLCanvasElement:W.aj,CanvasRenderingContext2D:W.bW,CDATASection:W.at,CharacterData:W.at,Comment:W.at,ProcessingInstruction:W.at,Text:W.at,CSSStyleDeclaration:W.bc,MSStyleCSSProperties:W.bc,CSS2Properties:W.bc,DOMException:W.d5,DOMRectReadOnly:W.bX,Element:W.L,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,Event:W.b,InputEvent:W.b,EventTarget:W.aM,HTMLFormElement:W.d8,HTMLImageElement:W.Z,KeyboardEvent:W.M,Location:W.c6,HTMLAudioElement:W.bn,HTMLMediaElement:W.bn,PointerEvent:W.W,MouseEvent:W.W,DragEvent:W.W,Document:W.o,DocumentFragment:W.o,HTMLDocument:W.o,ShadowRoot:W.o,XMLDocument:W.o,DocumentType:W.o,Node:W.o,NodeList:W.bo,RadioNodeList:W.bo,HTMLSelectElement:W.dO,HTMLTableElement:W.cs,HTMLTableRowElement:W.dX,HTMLTableSectionElement:W.dY,HTMLTemplateElement:W.bx,Touch:W.ad,TouchEvent:W.ap,TouchList:W.e_,CompositionEvent:W.aD,FocusEvent:W.aD,TextEvent:W.aD,UIEvent:W.aD,HTMLVideoElement:W.e5,WheelEvent:W.af,Window:W.bA,DOMWindow:W.bA,Attr:W.bB,ClientRect:W.cB,DOMRect:W.cB,NamedNodeMap:W.cE,MozNamedAttrMap:W.cE,SVGScriptElement:P.bt,SVGAElement:P.d,SVGAnimateElement:P.d,SVGAnimateMotionElement:P.d,SVGAnimateTransformElement:P.d,SVGAnimationElement:P.d,SVGCircleElement:P.d,SVGClipPathElement:P.d,SVGDefsElement:P.d,SVGDescElement:P.d,SVGDiscardElement:P.d,SVGEllipseElement:P.d,SVGFEBlendElement:P.d,SVGFEColorMatrixElement:P.d,SVGFEComponentTransferElement:P.d,SVGFECompositeElement:P.d,SVGFEConvolveMatrixElement:P.d,SVGFEDiffuseLightingElement:P.d,SVGFEDisplacementMapElement:P.d,SVGFEDistantLightElement:P.d,SVGFEFloodElement:P.d,SVGFEFuncAElement:P.d,SVGFEFuncBElement:P.d,SVGFEFuncGElement:P.d,SVGFEFuncRElement:P.d,SVGFEGaussianBlurElement:P.d,SVGFEImageElement:P.d,SVGFEMergeElement:P.d,SVGFEMergeNodeElement:P.d,SVGFEMorphologyElement:P.d,SVGFEOffsetElement:P.d,SVGFEPointLightElement:P.d,SVGFESpecularLightingElement:P.d,SVGFESpotLightElement:P.d,SVGFETileElement:P.d,SVGFETurbulenceElement:P.d,SVGFilterElement:P.d,SVGForeignObjectElement:P.d,SVGGElement:P.d,SVGGeometryElement:P.d,SVGGraphicsElement:P.d,SVGImageElement:P.d,SVGLineElement:P.d,SVGLinearGradientElement:P.d,SVGMarkerElement:P.d,SVGMaskElement:P.d,SVGMetadataElement:P.d,SVGPathElement:P.d,SVGPatternElement:P.d,SVGPolygonElement:P.d,SVGPolylineElement:P.d,SVGRadialGradientElement:P.d,SVGRectElement:P.d,SVGSetElement:P.d,SVGStopElement:P.d,SVGStyleElement:P.d,SVGSVGElement:P.d,SVGSwitchElement:P.d,SVGSymbolElement:P.d,SVGTSpanElement:P.d,SVGTextContentElement:P.d,SVGTextElement:P.d,SVGTextPathElement:P.d,SVGTextPositioningElement:P.d,SVGTitleElement:P.d,SVGUseElement:P.d,SVGViewElement:P.d,SVGGradientElement:P.d,SVGComponentTransferFunctionElement:P.d,SVGFEDropShadowElement:P.d,SVGMPathElement:P.d,SVGElement:P.d,WebGLBuffer:P.bV,WebGLContextEvent:P.a5,WebGLProgram:P.cd,WebGLRenderingContext:P.aA,WebGLTexture:P.ct,WebGLUniformLocation:P.bz})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,WebGLActiveInfo:true,WebGLFramebuffer:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLContextEvent:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ff,[])
else F.ff([])})})()
//# sourceMappingURL=main.dart.js.map
