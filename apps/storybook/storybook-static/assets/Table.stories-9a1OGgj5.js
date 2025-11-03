import{j as e}from"./index-C_VjMC7g.js";import{az as m,aA as c,aB as d,aC as o,aD as t,aE as b,aF as l}from"./index.esm-aOWwFiiu.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const y={title:"shadcn/ui/Table",component:m,parameters:{layout:"centered"},tags:["autodocs"]},T=[{invoice:"INV001",paymentStatus:"已支付",totalAmount:"¥250.00",paymentMethod:"信用卡"},{invoice:"INV002",paymentStatus:"待支付",totalAmount:"¥150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"未支付",totalAmount:"¥350.00",paymentMethod:"银行转账"},{invoice:"INV004",paymentStatus:"已支付",totalAmount:"¥450.00",paymentMethod:"信用卡"},{invoice:"INV005",paymentStatus:"已支付",totalAmount:"¥550.00",paymentMethod:"PayPal"}],n={render:()=>e.jsxs(m,{children:[e.jsx(c,{children:"最近的发票列表"}),e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(t,{className:"w-[100px]",children:"发票号"}),e.jsx(t,{children:"状态"}),e.jsx(t,{children:"支付方式"}),e.jsx(t,{className:"text-right",children:"金额"})]})}),e.jsx(b,{children:T.map(a=>e.jsxs(o,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})};var s,i,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>最近的发票列表</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">发票号</TableHead>
          <TableHead>状态</TableHead>
          <TableHead>支付方式</TableHead>
          <TableHead className="text-right">金额</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const j=["Default"];export{n as Default,j as __namedExportsOrder,y as default};
