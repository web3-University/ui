import{j as e}from"./index-C_VjMC7g.js";import{an as n,ao as c}from"./index.esm-aOWwFiiu.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const h={title:"shadcn/ui/ScrollArea",component:n,parameters:{layout:"centered"},tags:["autodocs"]},l=Array.from({length:50}).map((s,o,d)=>`v1.2.0-beta.${d.length-o}`),a={render:()=>e.jsx(n,{className:"h-72 w-48 rounded-md border",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"mb-4 text-sm font-medium leading-none",children:"标签"}),l.map(s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-sm",children:s},s),e.jsx(c,{className:"my-2"})]}))]})})};var r,t,m;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">标签</h4>
        {tags.map(tag => <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>)}
      </div>
    </ScrollArea>
}`,...(m=(t=a.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const g=["Default"];export{a as Default,g as __namedExportsOrder,h as default};
