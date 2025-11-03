import{j as r}from"./index-C_VjMC7g.js";import{f as z,w as q,u as y,e as G}from"./index-DtL3pAzF.js";import{P as t}from"./index.esm-aOWwFiiu.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const Z={title:"UI/CourseCard",component:t,parameters:{layout:"centered",docs:{description:{component:"课程卡片组件，用于展示课程信息，支持点击事件和插槽内容。"}}},tags:["autodocs"],argTypes:{course:{description:"课程信息对象",control:"object"},onDetail:{description:"点击卡片时的回调函数",action:"onDetail"},clickable:{description:"是否可点击",control:"boolean"},children:{description:"插槽内容，通常用于放置操作按钮",control:"text"}},args:{onDetail:z(),clickable:!0}},p={id:"1",title:"区块链基础入门",category:"区块链",instructor:"张教授",rating:4.8,students:1234,price:299,coverColor:"from-blue-400 to-purple-600"},n={args:{course:p},play:async({canvasElement:e,args:o})=>{const m=q(e).getByRole("article");await y.click(m),await G(o.onDetail).toHaveBeenCalledWith(p)}},s={args:{},render:()=>r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl",children:[r.jsx(t,{course:{id:"1",title:"智能合约开发",category:"区块链",instructor:"李老师",rating:4.9,students:856,price:399,coverColor:"from-blue-400 to-purple-600"}}),r.jsx(t,{course:{id:"2",title:"DeFi 协议分析",category:"DeFi",instructor:"王教授",rating:4.7,students:642,price:499,coverColor:"from-green-400 to-blue-500"}}),r.jsx(t,{course:{id:"3",title:"NFT 市场研究",category:"NFT",instructor:"陈博士",rating:4.6,students:423,price:199,coverColor:"from-pink-400 to-red-500"}})]})},a={args:{course:{id:"2",title:"以太坊高级开发",category:"区块链",instructor:"赵专家",rating:4.9,students:2156,price:599,coverColor:"from-yellow-400 to-orange-500"}}},c={args:{course:{id:"3",title:"加密货币入门",category:"基础",instructor:"刘老师",rating:4.3,students:3421,price:99,coverColor:"from-teal-400 to-cyan-500"}}},i={args:{course:p,clickable:!1}},l={args:{course:p,children:r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white border-none rounded-lg cursor-pointer text-sm font-medium hover:bg-blue-700 transition-colors",onClick:e=>{e.stopPropagation(),alert("购买课程")},children:"立即购买"}),r.jsx("button",{className:"px-4 py-2 bg-transparent text-gray-500 border border-gray-300 rounded-lg cursor-pointer text-sm font-medium hover:bg-gray-50 transition-colors",onClick:e=>{e.stopPropagation(),alert("添加到收藏")},children:"收藏"})]})},play:async({canvasElement:e})=>{const o=q(e),v=o.getByText("立即购买");await y.click(v);const m=o.getByText("收藏");await y.click(m)}},u={args:{course:{id:"4",title:"",category:"",instructor:"",rating:0,students:0,price:0,coverColor:""}}},d={args:{course:{id:"5",title:"这是一个非常非常长的课程标题，用来测试文本溢出和换行的情况",category:"超长类别名称测试",instructor:"拥有超长名字的教授先生",rating:5,students:99999,price:9999,coverColor:"from-indigo-400 via-purple-500 to-pink-500"}}},g={args:{},render:()=>r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl",children:[r.jsx(t,{course:{id:"1",title:"基础课程",category:"入门",instructor:"新手导师",rating:4.2,students:100,price:99,coverColor:"from-gray-400 to-gray-600"}}),r.jsx(t,{course:{id:"2",title:"进阶课程",category:"进阶",instructor:"资深专家",rating:4.7,students:500,price:299,coverColor:"from-blue-400 to-indigo-600"}}),r.jsx(t,{course:{id:"3",title:"高级课程",category:"高级",instructor:"顶级大师",rating:4.9,students:1e3,price:599,coverColor:"from-purple-400 to-pink-600"},children:r.jsx("button",{className:"w-full py-3 bg-emerald-500 text-white border-none rounded-lg cursor-pointer font-semibold hover:bg-emerald-600 transition-colors",children:"立即报名"})})]})};var C,b,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    course: defaultCourse
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole("article");

    // 测试卡片点击功能
    await userEvent.click(card);
    await expect(args.onDetail).toHaveBeenCalledWith(defaultCourse);
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,h,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <CourseCard course={{
      id: "1",
      title: "智能合约开发",
      category: "区块链",
      instructor: "李老师",
      rating: 4.9,
      students: 856,
      price: 399,
      coverColor: "from-blue-400 to-purple-600"
    }} />
      <CourseCard course={{
      id: "2",
      title: "DeFi 协议分析",
      category: "DeFi",
      instructor: "王教授",
      rating: 4.7,
      students: 642,
      price: 499,
      coverColor: "from-green-400 to-blue-500"
    }} />
      <CourseCard course={{
      id: "3",
      title: "NFT 市场研究",
      category: "NFT",
      instructor: "陈博士",
      rating: 4.6,
      students: 423,
      price: 199,
      coverColor: "from-pink-400 to-red-500"
    }} />
    </div>
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var k,N,D;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    course: {
      id: "2",
      title: "以太坊高级开发",
      category: "区块链",
      instructor: "赵专家",
      rating: 4.9,
      students: 2156,
      price: 599,
      coverColor: "from-yellow-400 to-orange-500"
    }
  }
}`,...(D=(N=a.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var j,B,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    course: {
      id: "3",
      title: "加密货币入门",
      category: "基础",
      instructor: "刘老师",
      rating: 4.3,
      students: 3421,
      price: 99,
      coverColor: "from-teal-400 to-cyan-500"
    }
  }
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var S,T,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    course: defaultCourse,
    clickable: false
  }
}`,...(F=(T=i.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var P,R,A;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    course: defaultCourse,
    children: <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white border-none rounded-lg cursor-pointer text-sm font-medium hover:bg-blue-700 transition-colors" onClick={e => {
        e.stopPropagation();
        alert("购买课程");
      }}>
          立即购买
        </button>
        <button className="px-4 py-2 bg-transparent text-gray-500 border border-gray-300 rounded-lg cursor-pointer text-sm font-medium hover:bg-gray-50 transition-colors" onClick={e => {
        e.stopPropagation();
        alert("添加到收藏");
      }}>
          收藏
        </button>
      </div>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 测试操作按钮不会触发卡片点击
    const buyButton = canvas.getByText("立即购买");
    await userEvent.click(buyButton);
    const favoriteButton = canvas.getByText("收藏");
    await userEvent.click(favoriteButton);
  }
}`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var H,W,L;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    course: {
      id: "4",
      title: "",
      category: "",
      instructor: "",
      rating: 0,
      students: 0,
      price: 0,
      coverColor: ""
    }
  }
}`,...(L=(W=u.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var M,V,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    course: {
      id: "5",
      title: "这是一个非常非常长的课程标题，用来测试文本溢出和换行的情况",
      category: "超长类别名称测试",
      instructor: "拥有超长名字的教授先生",
      rating: 5.0,
      students: 99999,
      price: 9999,
      coverColor: "from-indigo-400 via-purple-500 to-pink-500"
    }
  }
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var I,O,U;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <CourseCard course={{
      id: "1",
      title: "基础课程",
      category: "入门",
      instructor: "新手导师",
      rating: 4.2,
      students: 100,
      price: 99,
      coverColor: "from-gray-400 to-gray-600"
    }} />
      <CourseCard course={{
      id: "2",
      title: "进阶课程",
      category: "进阶",
      instructor: "资深专家",
      rating: 4.7,
      students: 500,
      price: 299,
      coverColor: "from-blue-400 to-indigo-600"
    }} />
      <CourseCard course={{
      id: "3",
      title: "高级课程",
      category: "高级",
      instructor: "顶级大师",
      rating: 4.9,
      students: 1000,
      price: 599,
      coverColor: "from-purple-400 to-pink-600"
    }}>
        <button className="w-full py-3 bg-emerald-500 text-white border-none rounded-lg cursor-pointer font-semibold hover:bg-emerald-600 transition-colors">
          立即报名
        </button>
      </CourseCard>
    </div>
}`,...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const $=["Default","DifferentCategories","HighRated","LowPrice","NonClickable","WithActions","MissingData","ExtremeData","AllVariants"];export{g as AllVariants,n as Default,s as DifferentCategories,d as ExtremeData,a as HighRated,c as LowPrice,u as MissingData,i as NonClickable,l as WithActions,$ as __namedExportsOrder,Z as default};
