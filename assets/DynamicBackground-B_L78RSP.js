import{r as d,j as o}from"./index-Dt3QrGZ4.js";const h=({title:s,children:r})=>{const[a,m]=d.useState(!1),t=()=>{m(!a)};return o.jsxs("div",{className:"toggle-section",children:[o.jsx("button",{className:"button-78",onClick:t,children:a?`Hide ${s}`:`${s}`}),a&&o.jsx("div",{className:"mt-6 flex-center",children:r})]})},f=({image:s,count:r=20})=>{const[a,m]=d.useState([]);return d.useEffect(()=>{const t=Array.from({length:r},()=>({startX:Math.random()*100,startY:Math.random()*100,rotation:Math.random()*360,moveX:-50+Math.random()*100,moveY:-50+Math.random()*100,duration:15+Math.random()*10})),e=document.createElement("style"),i=t.map((n,c)=>`
        @keyframes floating${c} {
          0% {
            transform: translate(0, 0) rotate(${n.rotation}deg);
          }
          50% {
            transform: translate(${n.moveX}vw, ${n.moveY}vh) rotate(${n.rotation+180}deg);
          }
          100% {
            transform: translate(0, 0) rotate(${n.rotation+360}deg);
          }
        }
      `).join(`
`);return e.textContent=i,document.head.appendChild(e),m(t),()=>{document.head.removeChild(e)}},[r]),o.jsx("div",{className:"fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none",children:a.map((t,e)=>o.jsx("img",{src:s,alt:`background-element-${e}`,className:"absolute w-[10vw] opacity-50",style:{left:`${t.startX}vw`,top:`${t.startY}vh`,animation:`floating${e} ${t.duration}s linear infinite`}},e))})};export{f as D,h as T};
