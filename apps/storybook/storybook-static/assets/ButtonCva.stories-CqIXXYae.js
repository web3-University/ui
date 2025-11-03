import{j as a}from"./index-C_VjMC7g.js";import{f as W,w as N,u as y,e as t}from"./index-DtL3pAzF.js";import{r as e}from"./index.esm-aOWwFiiu.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const ea={title:"UI/ButtonCva",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}},args:{onClick:W()}},r={args:{children:"Primary Button",variant:"primary"},play:async({canvasElement:v,args:g})=>{const n=N(v).getByRole("button");await y.click(n),await t(g.onClick).toHaveBeenCalled(),await y.hover(n),await t(n).toHaveStyle({backgroundColor:"#1d4ed8"}),await y.unhover(n),await t(n).toHaveStyle({backgroundColor:"#2563eb"})}},s={args:{children:"Secondary Button",variant:"secondary"}},o={args:{children:"Outline Button",variant:"secondary",size:"sm"}},i={args:{children:"Ghost Button",variant:"secondary"}},c={args:{children:"Danger Button",variant:"danger"}},l={args:{children:"Small Button",size:"sm"}},d={args:{children:"Medium Button",size:"sm"}},u={args:{children:"Large Button",size:"lg"}},m={args:{children:"Disabled Button",disabled:!0},play:async({canvasElement:v,args:g})=>{const n=N(v).getByRole("button");await t(n).toBeDisabled(),await t(n).toHaveStyle({opacity:"0.5",cursor:"not-allowed"}),await t(g.onClick).not.toHaveBeenCalled()}},p={render:()=>a.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[a.jsx(e,{variant:"primary",children:"Primary"}),a.jsx(e,{variant:"secondary",children:"Secondary"}),a.jsx(e,{variant:"outline",children:"Outline"}),a.jsx(e,{variant:"ghost",children:"Ghost"}),a.jsx(e,{variant:"danger",children:"Danger"})]}),a.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[a.jsx(e,{size:"sm",children:"Small"}),a.jsx(e,{size:"md",children:"Medium"}),a.jsx(e,{size:"lg",children:"Large"})]})]})};var h,B,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    // Test click functionality
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();

    // Test hover state
    await userEvent.hover(button);
    await expect(button).toHaveStyle({
      backgroundColor: "#1d4ed8"
    });
    await userEvent.unhover(button);
    await expect(button).toHaveStyle({
      backgroundColor: "#2563eb"
    });
  }
}`,...(b=(B=r.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var C,x,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,f,z;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "secondary",
    size: "sm"
  }
}`,...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var k,D,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Ghost Button",
    variant: "secondary"
  }
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var E,H,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger"
  }
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,L,M;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    size: "sm"
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,R,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Medium Button",
    size: "sm"
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var I,A,V;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "lg"
  }
}`,...(V=(A=u.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var _,U,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    // Test disabled state
    await expect(button).toBeDisabled();
    await expect(button).toHaveStyle({
      opacity: "0.5",
      cursor: "not-allowed"
    });

    // onClick should not be called when disabled
    // (user-event can't click disabled buttons with pointer-events: none)
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...(q=(U=m.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var F,J,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexDirection: "column"
  }}>
      <div style={{
      display: "flex",
      gap: "0.5rem"
    }}>
        <ButtonCva variant="primary">Primary</ButtonCva>
        <ButtonCva variant="secondary">Secondary</ButtonCva>
        <ButtonCva variant="outline">Outline</ButtonCva>
        <ButtonCva variant="ghost">Ghost</ButtonCva>
        <ButtonCva variant="danger">Danger</ButtonCva>
      </div>
      <div style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center"
    }}>
        <ButtonCva size="sm">Small</ButtonCva>
        <ButtonCva size="md">Medium</ButtonCva>
        <ButtonCva size="lg">Large</ButtonCva>
      </div>
    </div>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const na=["Primary","Secondary","Outline","Ghost","Danger","Small","Medium","Large","Disabled","AllVariants"];export{p as AllVariants,c as Danger,m as Disabled,i as Ghost,u as Large,d as Medium,o as Outline,r as Primary,s as Secondary,l as Small,na as __namedExportsOrder,ea as default};
