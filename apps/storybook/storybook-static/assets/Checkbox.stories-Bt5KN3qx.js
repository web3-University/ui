import{j as e}from"./index-C_VjMC7g.js";import{x as s,L as a}from"./index.esm-aOWwFiiu.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const k={title:"shadcn/ui/Form/Checkbox",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsx(s,{id:"checkbox"})},o={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"terms"}),e.jsx(a,{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"同意条款和条件"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled",disabled:!0}),e.jsx(a,{htmlFor:"disabled",children:"禁用复选框"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"option1"}),e.jsx(a,{htmlFor:"option1",children:"选项 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"option2"}),e.jsx(a,{htmlFor:"option2",children:"选项 2"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"option3",disabled:!0}),e.jsx(a,{htmlFor:"option3",children:"选项 3（禁用）"})]})]})};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Checkbox id="checkbox" />
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var n,m,x;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        同意条款和条件
      </Label>
    </div>
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,b,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled">禁用复选框</Label>
    </div>
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var u,f,j;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" />
        <Label htmlFor="option1">选项 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" />
        <Label htmlFor="option2">选项 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" disabled />
        <Label htmlFor="option3">选项 3（禁用）</Label>
      </div>
    </div>
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const g=["Default","WithLabel","Disabled","Multiple"];export{r as Default,t as Disabled,i as Multiple,o as WithLabel,g as __namedExportsOrder,k as default};
