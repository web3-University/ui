import{j as e}from"./index-C_VjMC7g.js";import{ap as c,aq as d,ar as i,as as x,at as t,au as r,av as n}from"./index.esm-aOWwFiiu.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const g={title:"shadcn/ui/Select",component:c,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>e.jsxs(c,{children:[e.jsx(d,{className:"w-[180px]",children:e.jsx(i,{placeholder:"选择一个水果"})}),e.jsxs(x,{children:[e.jsx(t,{value:"apple",children:"苹果"}),e.jsx(t,{value:"banana",children:"香蕉"}),e.jsx(t,{value:"orange",children:"橙子"}),e.jsx(t,{value:"grape",children:"葡萄"})]})]})},a={render:()=>e.jsxs(c,{children:[e.jsx(d,{className:"w-[200px]",children:e.jsx(i,{placeholder:"选择水果或蔬菜"})}),e.jsxs(x,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"水果"}),e.jsx(t,{value:"apple",children:"苹果"}),e.jsx(t,{value:"banana",children:"香蕉"}),e.jsx(t,{value:"orange",children:"橙子"})]}),e.jsxs(r,{children:[e.jsx(n,{children:"蔬菜"}),e.jsx(t,{value:"carrot",children:"胡萝卜"}),e.jsx(t,{value:"lettuce",children:"生菜"}),e.jsx(t,{value:"tomato",children:"番茄"})]})]})]})};var s,o,S;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择一个水果" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">苹果</SelectItem>
        <SelectItem value="banana">香蕉</SelectItem>
        <SelectItem value="orange">橙子</SelectItem>
        <SelectItem value="grape">葡萄</SelectItem>
      </SelectContent>
    </Select>
}`,...(S=(o=l.parameters)==null?void 0:o.docs)==null?void 0:S.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="选择水果或蔬菜" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>蔬菜</SelectLabel>
          <SelectItem value="carrot">胡萝卜</SelectItem>
          <SelectItem value="lettuce">生菜</SelectItem>
          <SelectItem value="tomato">番茄</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const b=["Default","WithGroups"];export{l as Default,a as WithGroups,b as __namedExportsOrder,g as default};
