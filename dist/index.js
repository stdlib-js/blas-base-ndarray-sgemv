"use strict";var p=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var c=p(function(k,l){
var h=require('@stdlib/ndarray-base-shape/dist'),o=require('@stdlib/ndarray-base-strides/dist'),f=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),x=require('@stdlib/blas-base-sgemv/dist').ndarray;function S(r){var e,v,g,u,s,a,i,t;return a=r[0],i=r[1],t=r[2],e=d(r[3]),v=d(r[4]),g=d(r[5]),u=h(a,!1),s=o(a,!1),x(e,u[0],u[1],v,n(a),s[0],s[1],q(a),n(i),f(i,0),q(i),g,n(t),f(t,0),q(t)),t}l.exports=S
});var m=c();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
