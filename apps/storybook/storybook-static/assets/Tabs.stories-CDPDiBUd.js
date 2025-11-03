import{j as a}from"./index-C_VjMC7g.js";import{aG as t,aH as x,aI as e,aJ as s,C as d,s as l,t as c,u as i,v as o}from"./index.esm-aOWwFiiu.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const N={title:"shadcn/ui/Layout/Tabs",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>a.jsxs(t,{defaultValue:"account",className:"w-[400px]",children:[a.jsxs(x,{className:"grid w-full grid-cols-2",children:[a.jsx(e,{value:"account",children:"账户"}),a.jsx(e,{value:"password",children:"密码"})]}),a.jsx(s,{value:"account",children:a.jsxs(d,{children:[a.jsxs(l,{children:[a.jsx(c,{children:"账户"}),a.jsx(i,{children:"在这里更改您的账户设置。"})]}),a.jsx(o,{className:"space-y-2",children:a.jsx("p",{children:"账户设置内容"})})]})}),a.jsx(s,{value:"password",children:a.jsxs(d,{children:[a.jsxs(l,{children:[a.jsx(c,{children:"密码"}),a.jsx(i,{children:"在这里更改您的密码。"})]}),a.jsx(o,{className:"space-y-2",children:a.jsx("p",{children:"密码设置内容"})})]})})]})},n={render:()=>a.jsxs(t,{defaultValue:"tab1",className:"w-[400px]",children:[a.jsxs(x,{className:"grid w-full grid-cols-3",children:[a.jsx(e,{value:"tab1",children:"标签 1"}),a.jsx(e,{value:"tab2",children:"标签 2"}),a.jsx(e,{value:"tab3",children:"标签 3"})]}),a.jsx(s,{value:"tab1",children:a.jsx("div",{className:"p-4",children:"第一个标签的内容"})}),a.jsx(s,{value:"tab2",children:a.jsx("div",{className:"p-4",children:"第二个标签的内容"})}),a.jsx(s,{value:"tab3",children:a.jsx("div",{className:"p-4",children:"第三个标签的内容"})})]})};var u,T,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">账户</TabsTrigger>
        <TabsTrigger value="password">密码</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>账户</CardTitle>
            <CardDescription>
              在这里更改您的账户设置。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>账户设置内容</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>密码</CardTitle>
            <CardDescription>
              在这里更改您的密码。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>密码设置内容</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...(b=(T=r.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var p,C,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">标签 1</TabsTrigger>
        <TabsTrigger value="tab2">标签 2</TabsTrigger>
        <TabsTrigger value="tab3">标签 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">第一个标签的内容</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">第二个标签的内容</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">第三个标签的内容</div>
      </TabsContent>
    </Tabs>
}`,...(m=(C=n.parameters)==null?void 0:C.docs)==null?void 0:m.source}}};const f=["Default","ThreeTabs"];export{r as Default,n as ThreeTabs,f as __namedExportsOrder,N as default};
