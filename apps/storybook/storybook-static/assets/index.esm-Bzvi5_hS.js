import{R as m,r as p}from"./index-D4lIrffr.js";var y={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g;function C(){if(g)return f;g=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function o(l,r,a){var c=null;if(a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),"key"in r){a={};for(var i in r)i!=="key"&&(a[i]=r[i])}else a=r;return r=a.ref,{$$typeof:s,type:l,key:c,ref:r!==void 0?r:null,props:a}}return f.Fragment=t,f.jsx=o,f.jsxs=o,f}y.exports=C();var e=y.exports;const N={display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",fontWeight:500,transition:"all 0.2s",cursor:"pointer",border:"none",outline:"none"},w={primary:{backgroundColor:"#2563eb",color:"#ffffff"},secondary:{backgroundColor:"#4b5563",color:"#ffffff"},outline:{backgroundColor:"transparent",color:"#2563eb",border:"2px solid #2563eb"},ghost:{backgroundColor:"transparent",color:"#2563eb"},danger:{backgroundColor:"#dc2626",color:"#ffffff"}},_={primary:{backgroundColor:"#1d4ed8"},secondary:{backgroundColor:"#374151"},outline:{backgroundColor:"#eff6ff"},ghost:{backgroundColor:"#eff6ff"},danger:{backgroundColor:"#b91c1c"}},$={sm:{height:"32px",padding:"0 12px",fontSize:"14px"},md:{height:"40px",padding:"0 16px",fontSize:"16px"},lg:{height:"48px",padding:"0 24px",fontSize:"18px"}},E={opacity:.5,cursor:"not-allowed",pointerEvents:"none"},j=m.forwardRef(({variant:s="primary",size:t="md",style:o,children:l,disabled:r,...a},c)=>{const[i,d]=m.useState(!1),n={...N,...w[s],...$[t],...i&&!r?_[s]:{},...r?E:{},...o};return e.jsx("button",{ref:c,style:n,disabled:r,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),...a,children:l})});j.displayName="ButtonCva";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,l)=>l?l.toUpperCase():o.toLowerCase()),b=s=>{const t=B(s);return t.charAt(0).toUpperCase()+t.slice(1)},k=(...s)=>s.filter((t,o,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===o).join(" ").trim(),F=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=p.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:r="",children:a,iconNode:c,...i},d)=>p.createElement("svg",{ref:d,...R,width:t,height:t,stroke:s,strokeWidth:l?Number(o)*24/Number(t):o,className:k("lucide",r),...!a&&!F(i)&&{"aria-hidden":"true"},...i},[...c.map(([n,x])=>p.createElement(n,x)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(s,t)=>{const o=p.forwardRef(({className:l,...r},a)=>p.createElement(A,{ref:a,iconNode:t,className:k(`lucide-${M(b(s))}`,`lucide-${s}`,l),...r}));return o.displayName=b(s),o};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],L=u("book-open",S);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],q=u("chart-column",z);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],v=u("clock",I);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],T=u("play",P);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],W=u("star",V);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],D=u("users",H);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],U=u("wallet",J),O=s=>{const{course:t,onDetail:o,clickable:l=!0,children:r}=s;if(!t)return console.error("CourseCard: course prop is required"),null;const a=n=>{n.target.closest('[data-slot="actions"]')||l&&o&&o(t)},c=n=>{switch(n){case"1":return{label:"初级",color:"text-green-600",bgColor:"bg-green-100"};case"2":return{label:"中级",color:"text-blue-600",bgColor:"bg-blue-100"};case"3":return{label:"高级",color:"text-purple-600",bgColor:"bg-purple-100"};default:return{label:"初级",color:"text-green-600",bgColor:"bg-green-100"}}},i=n=>{if(!n)return"未知时长";const x=Math.floor(n/60),h=n%60;return x>0?h>0?`${x}小时${h}分钟`:`${x}小时`:`${h}分钟`},d=c(t.difficulty);return e.jsxs("article",{onClick:a,className:`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-white to-[#F7F5FF] px-6 pb-6 pt-6 shadow-[0_22px_60px_rgba(168,174,255,0.22)] ring-1 ring-[#ECEBFF] transition-transform duration-200 hover:-translate-y-2 ${l?"cursor-pointer":""}`,children:[e.jsxs("div",{className:`relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${t.coverColor||"from-gray-400 to-gray-600"}`,children:[e.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[e.jsxs("div",{className:"relative",children:[e.jsx(L,{className:"h-16 w-16 text-white/80",strokeWidth:1.5}),e.jsx(T,{className:"absolute -bottom-2 -right-2 h-8 w-8 text-white/60",strokeWidth:1.5})]}),e.jsx("div",{className:"absolute top-8 left-8",children:e.jsx("div",{className:"h-3 w-3 rounded-full bg-white/30"})}),e.jsx("div",{className:"absolute bottom-8 right-8",children:e.jsx("div",{className:"h-2 w-2 rounded-full bg-white/40"})}),e.jsx("div",{className:"absolute top-16 right-12",children:e.jsx("div",{className:"h-1.5 w-1.5 rounded-full bg-white/50"})}),e.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:e.jsxs("div",{className:"flex items-center justify-between text-white/70 text-xs",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(D,{className:"h-3 w-3"}),"在线课程"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(v,{className:"h-3 w-3"}),"随时学习"]})]})})]}),e.jsx("span",{className:"absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#2B2558]",children:t.category||"未分类"}),t.difficulty&&e.jsxs("span",{className:`absolute right-4 top-4 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${d.bgColor} ${d.color}`,children:[e.jsx(q,{className:"h-3 w-3"}),d.label]})]}),e.jsxs("div",{className:"flex flex-1 flex-col gap-4 pt-6 text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-[#2B2558] line-clamp-2",children:t.title||"未命名课程"}),t.description&&e.jsx("p",{className:"mt-2 text-sm text-[#7B7EA9] line-clamp-2",children:t.description}),e.jsxs("p",{className:"mt-2 text-sm text-[#7B7EA9]",children:["讲师：",t.instructor||"未知"]})]}),e.jsxs("div",{className:"flex items-center justify-between text-xs text-[#8F92B5]",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[t.duration&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(v,{className:"h-3 w-3"}),e.jsx("span",{children:i(t.duration)})]}),e.jsxs("div",{className:"flex items-center gap-1 text-[#F5B742]",children:[e.jsx(W,{className:"h-3 w-3 fill-[#F5B742] text-[#F5B742]"}),e.jsx("span",{className:"font-semibold",children:(t.rating||0).toFixed(1)}),e.jsxs("span",{className:"text-[#8F92B5]",children:["(",t.students||0,"人)"]})]})]}),e.jsxs("div",{className:"flex items-center gap-1 text-[#FF9F50]",children:[e.jsx(U,{className:"h-4 w-4"}),e.jsxs("span",{className:"text-base font-semibold",children:["YD ",t.price||0]})]})]}),r&&e.jsx("div",{"data-slot":"actions",children:r})]})]},t.id)};j.__docgenInfo={description:"",methods:[],displayName:"ButtonCva",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1}}};export{j as B,O as C};
