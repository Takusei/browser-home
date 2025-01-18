(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8611:function(e,t,i){Promise.resolve().then(i.bind(i,6201))},6201:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return G}});var r=i(7437),s=i(2265),o=i(5156),n=i(1994),l=i(3335);function a(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,l.m6)((0,n.W)(t))}let c=s.forwardRef((e,t)=>{let{className:i,orientation:s="horizontal",decorative:n=!0,...l}=e;return(0,r.jsx)(o.f,{ref:t,decorative:n,orientation:s,className:a("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",i),...l})});c.displayName=o.f.displayName;var u=i(3818),m=i(5824),d=i(7135),h=i(9596),x=i(5749),g=i(9098),f=i(8773),p=i(6132),j=i(9354),b=i(43),w=i(5293);let v=(0,i(535).j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),y=s.forwardRef((e,t)=>{let{className:i,variant:s,size:o,asChild:n=!1,...l}=e,c=n?w.g7:"button";return(0,r.jsx)(c,{className:a(v({variant:s,size:o,className:i})),ref:t,...l})});y.displayName="Button";var Z=e=>{let{items:t,category:i}=e;return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"flex gap-4 items-center flex-col sm:flex-row",children:[(0,r.jsx)("h4",{className:"text-sm font-medium leading-none",children:i}),t.map((e,t)=>(0,r.jsx)(y,{variant:"secondary",asChild:!0,children:(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2",children:[e.icon,e.title]})},t))]})})},k=i(3145);let N=i(1653).f;function _(){let[e,t]=(0,s.useState)(null);return(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/bing-image"),i=await e.json();if(i.images&&i.images.length>0){let e="https://www.bing.com".concat(i.images[0].url);t(e)}}catch(e){console.error("Error fetching Bing image:",e)}})()},[]),(0,r.jsx)(N,{ratio:16/7,className:"bg-muted",children:e?(0,r.jsx)(k.default,{src:e,alt:"Bing Daily Background",fill:!0,className:"h-full w-full rounded-md object-cover"}):(0,r.jsx)("div",{className:"h-full w-full flex items-center justify-center text-muted-foreground",children:"Loading..."})})}let z=[{title:"Google",url:"https://google.com",icon:(0,r.jsx)(u.Z,{})},{title:"GoogleMap",url:"https://maps.google.com",icon:(0,r.jsx)(m.Z,{})},{title:"Leetcode",url:"https://leetcode.cn/problemset/",icon:(0,r.jsx)(d.Z,{})},{title:"GitHub",url:"https://github.com/Takusei",icon:(0,r.jsx)(h.Z,{})}],B=[{title:"Gmail",url:"https://gmail.com",icon:(0,r.jsx)(x.Z,{})},{title:"LinkedIn",url:"https://linkedin.com",icon:(0,r.jsx)(g.Z,{})},{title:"QQ-Mail",url:"https://mail.qq.com",icon:(0,r.jsx)(x.Z,{})}],E=[{title:"ColaManga",url:"https://colamanga.com",icon:(0,r.jsx)(f.Z,{})},{title:"漫画柜",url:"https://www.manhuagui.com/user/book/shelf",icon:(0,r.jsx)(f.Z,{})},{title:"动漫之家",url:"https://manhua.idmzj.com/",icon:(0,r.jsx)(f.Z,{})},{title:"Webtoon",url:"https://www.webtoons.com",icon:(0,r.jsx)(f.Z,{})},{title:"Komiic",url:"https://komiic.com/",icon:(0,r.jsx)(f.Z,{})},{title:"MangaDex",url:"https://mangadex.org",icon:(0,r.jsx)(f.Z,{})}],M=[{title:"Bilibili",url:"https://bilibili.com",icon:(0,r.jsx)(p.Z,{})},{title:"YouTube",url:"https://youtube.com",icon:(0,r.jsx)(j.Z,{})},{title:"风车动漫",url:"https://www.dmla7.com/type/ribendongman.html",icon:(0,r.jsx)(p.Z,{})},{title:"动漫迷",url:"https://gimy.tv/",icon:(0,r.jsx)(p.Z,{})},{title:"欧乐影院",url:"https://www.olevod.com/",icon:(0,r.jsx)(p.Z,{})},{title:"斗鱼",url:"https://www.douyu.com/directory/myFollow",icon:(0,r.jsx)(p.Z,{})}],C=[{title:"亚马逊",url:"https://amazon.com",icon:(0,r.jsx)(b.Z,{})},{title:"Mercari",url:"https://jp.mercari.com/",icon:(0,r.jsx)(b.Z,{})},{title:"乐天市场",url:"https://rakuten.co.jp",icon:(0,r.jsx)(b.Z,{})},{title:"淘宝",url:"https://taobao.com",icon:(0,r.jsx)(b.Z,{})}];function G(){return(0,r.jsx)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:(0,r.jsxs)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:[(0,r.jsx)(_,{}),(0,r.jsx)(Z,{category:"常用",items:z}),(0,r.jsx)(c,{}),(0,r.jsx)(Z,{category:"社交",items:B}),(0,r.jsx)(c,{}),(0,r.jsx)(Z,{category:"动画",items:M}),(0,r.jsx)(c,{}),(0,r.jsx)(Z,{category:"漫画",items:E}),(0,r.jsx)(c,{}),(0,r.jsx)(Z,{category:"购物",items:C})]})})}}},function(e){e.O(0,[428,971,117,744],function(){return e(e.s=8611)}),_N_E=e.O()}]);