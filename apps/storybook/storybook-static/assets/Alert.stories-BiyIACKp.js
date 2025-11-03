import{j as e}from"./index-C_VjMC7g.js";import{aW as a,aX as A,aY as c}from"./index.esm-aOWwFiiu.js";import{c as h}from"./createLucideIcon-DiGNtmj1.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],j=h("circle-alert",y);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],D=h("terminal",N),v={title:"shadcn/ui/Feedback/Alert",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs(a,{className:"w-[400px]",children:[e.jsx(D,{className:"h-4 w-4"}),e.jsx(A,{children:"提示"}),e.jsx(c,{children:"您可以在设置中添加组件和依赖到您的应用。"})]})},s={render:()=>e.jsxs(a,{variant:"destructive",className:"w-[400px]",children:[e.jsx(j,{className:"h-4 w-4"}),e.jsx(A,{children:"错误"}),e.jsx(c,{children:"您的会话已过期，请重新登录。"})]})},t={render:()=>e.jsx(a,{className:"w-[400px]",children:e.jsx(c,{children:"这是一个简单的提示消息，没有标题和图标。"})})};var n,l,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>提示</AlertTitle>
      <AlertDescription>
        您可以在设置中添加组件和依赖到您的应用。
      </AlertDescription>
    </Alert>
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var o,m,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[400px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>错误</AlertTitle>
      <AlertDescription>
        您的会话已过期，请重新登录。
      </AlertDescription>
    </Alert>
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,x,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <AlertDescription>
        这是一个简单的提示消息，没有标题和图标。
      </AlertDescription>
    </Alert>
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const _=["Default","Destructive","Simple"];export{r as Default,s as Destructive,t as Simple,_ as __namedExportsOrder,v as default};
