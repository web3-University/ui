import{j as e}from"./index-C_VjMC7g.js";import{ak as r}from"./index.esm-aOWwFiiu.js";import{r as m}from"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const L={title:"shadcn/ui/Data Display/Progress",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsx(r,{value:33,className:"w-[300px]"})},a={render:()=>e.jsx(r,{value:100,className:"w-[300px]"})},o={render:()=>e.jsx(r,{value:0,className:"w-[300px]"})},n={render:()=>{const[s,u]=m.useState(0);return m.useEffect(()=>{const p=setTimeout(()=>u(66),500);return()=>clearTimeout(p)},[]),e.jsx(r,{value:s,className:"w-[300px]"})}},c={render:()=>{const[s,u]=m.useState(13);return m.useEffect(()=>{const p=setInterval(()=>{u(l=>l>=100?0:l+10)},500);return()=>clearInterval(p)},[]),e.jsxs("div",{className:"w-[300px] space-y-2",children:[e.jsx(r,{value:s}),e.jsxs("p",{className:"text-sm text-muted-foreground text-center",children:[s,"%"]})]})}};var d,i,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Progress value={33} className="w-[300px]" />
}`,...(g=(i=t.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var x,v,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Progress value={100} className="w-[300px]" />
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var P,N,w;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Progress value={0} className="w-[300px]" />
}`,...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,E,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    return <Progress value={progress} className="w-[300px]" />;
  }
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var y,D,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(13);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(timer);
    }, []);
    return <div className="w-[300px] space-y-2">
        <Progress value={progress} />
        <p className="text-sm text-muted-foreground text-center">
          {progress}%
        </p>
      </div>;
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const _=["Default","Complete","Empty","Animated","Loading"];export{n as Animated,a as Complete,t as Default,o as Empty,c as Loading,_ as __namedExportsOrder,L as default};
