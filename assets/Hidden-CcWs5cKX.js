const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CardForm-DOUBsqYi.js","assets/index-Bl1gV0f6.js","assets/index-D8D8mR-6.css","assets/Card-DRCkc8xH.css","assets/RGBWordInput-BzKal-NM.js","assets/RGBWord-C7SQ0aqp.js","assets/Visualiser-Cx9oWXBm.js","assets/VirtualPet-Dqw5cI1U.js","assets/VirtualPet-DQBhvmsZ.css"])))=>i.map(i=>d[i]);
import{r as s,j as e,_ as c,u as h}from"./index-Bl1gV0f6.js";import{F as j,f}from"./faHome-2l4POrul.js";const n=({title:l,children:d})=>{const[i,o]=s.useState(!1),t=()=>{o(!i)};return e.jsxs("div",{className:"toggle-section",children:[e.jsx("button",{className:"button-78",onClick:t,children:i?`Hide ${l}`:`${l}`}),i&&e.jsx("div",{className:"mt-6 flex-center",children:d})]})},u=({image:l,count:d=20})=>{const[i,o]=s.useState([]);return s.useEffect(()=>{const t=Array.from({length:d},()=>({startX:Math.random()*100,startY:Math.random()*100,rotation:Math.random()*360,moveX:-50+Math.random()*100,moveY:-50+Math.random()*100,duration:15+Math.random()*10})),a=document.createElement("style"),m=t.map((r,x)=>`
        @keyframes floating${x} {
          0% {
            transform: translate(0, 0) rotate(${r.rotation}deg);
          }
          50% {
            transform: translate(${r.moveX}vw, ${r.moveY}vh) rotate(${r.rotation+180}deg);
          }
          100% {
            transform: translate(0, 0) rotate(${r.rotation+360}deg);
          }
        }
      `).join(`
`);return a.textContent=m,document.head.appendChild(a),o(t),()=>{document.head.removeChild(a)}},[d]),e.jsx("div",{className:"fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none",children:i.map((t,a)=>e.jsx("img",{src:l,alt:`background-element-${a}`,className:"absolute w-[10vw] opacity-50",style:{left:`${t.startX}vw`,top:`${t.startY}vh`,animation:`floating${a} ${t.duration}s linear infinite`}},a))})},v=s.lazy(()=>c(()=>import("./CardForm-DOUBsqYi.js"),__vite__mapDeps([0,1,2,3]))),w=s.lazy(()=>c(()=>import("./RGBWordInput-BzKal-NM.js"),__vite__mapDeps([4,1,2,5]))),g=s.lazy(()=>c(()=>import("./Visualiser-Cx9oWXBm.js"),__vite__mapDeps([6,1,2]))),p=s.lazy(()=>c(()=>import("./VirtualPet-Dqw5cI1U.js"),__vite__mapDeps([7,1,2,8]))),k=()=>{const l=h();return e.jsxs("div",{children:[e.jsx(u,{image:"/jordan/images/latte.png"}),e.jsx("nav",{className:"mt-10 mr-10 text-2xl flex justify-end",children:e.jsx("a",{className:"navLink",onClick:()=>l("/"),children:e.jsx(j,{icon:f.faHome})})}),e.jsx("div",{className:"section-heading text-center",children:"Tools"}),e.jsxs("div",{className:"w-full flex flex-col md:flex-row -mt-20 md:mt-0",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(n,{title:"Birthday Card",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(v,{})})})}),e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(n,{title:"RBG Words",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(w,{})})})})]}),e.jsxs("div",{className:"w-full flex flex-col md:flex-row",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(n,{title:"Music Visualiser",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(g,{})})})}),e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(n,{title:"Trading",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx("div",{className:"flex-center",children:e.jsx("button",{className:"button-49 text-2xl",onClick:()=>l("/trading"),children:"Click Here"})})})})})]}),e.jsxs("div",{className:"w-full flex flex-col md:flex-row",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(n,{title:"Piano",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx("div",{className:"flex-center",children:e.jsx("button",{className:"button-49 text-2xl",onClick:()=>l("/piano"),children:"Click Here"})})})})}),e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(n,{title:"Virtual Pet",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(p,{})})})})]}),e.jsxs("div",{className:"w-full flex flex-col md:flex-row",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(n,{title:"Resume Generator",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx("div",{className:"flex-center",children:e.jsx("button",{className:"button-49 text-2xl",onClick:()=>l("/resume"),children:"Click Here"})})})})}),e.jsx("div",{className:"w-full md:w-1/2"})]})]})};export{k as default};
