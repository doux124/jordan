const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jspdf.es.min-Dt8_Uzlb.js","assets/index-jhdWyZY9.js","assets/index-DAAGrGmv.css"])))=>i.map(i=>d[i]);
import{r as s,_ as h,j as e}from"./index-jhdWyZY9.js";const w=()=>{const[m,u]=s.useState(""),[o,c]=s.useState(!1);s.useEffect(()=>{(async()=>{try{const r=await(await fetch("/jordan/resume/resume.txt")).text();u(r)}catch(t){console.error("Error fetching resume text:",t)}})()},[]);const x=s.useCallback(async()=>{c(!0);try{const n=document.getElementById("resume-container");if(!n)return;const{jsPDF:t}=await h(async()=>{const{jsPDF:a}=await import("./jspdf.es.min-Dt8_Uzlb.js").then(p=>p.j);return{jsPDF:a}},__vite__mapDeps([0,1,2])),r=(await h(async()=>{const{default:a}=await import("./html2canvas.esm-CBrSDip1.js");return{default:a}},[])).default,i=await r(n,{scale:2,useCORS:!0,logging:!1}),d=new t("p","mm","a4"),l=210,f=297,j=i.height*l/i.width;d.addImage(i.toDataURL("image/jpeg",1),"JPEG",0,0,l,j),d.save("resume.pdf")}catch(n){console.error("Error generating PDF:",n)}finally{c(!1)}},[]);return e.jsxs("div",{children:[e.jsxs("div",{id:"resume-container",className:"resume-container",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"text-6xl font-bold",children:"Jordan Low"}),e.jsx("p",{children:"Software Engineer"}),e.jsxs("div",{children:[e.jsx("p",{children:"john.doe@email.com"}),e.jsx("p",{children:"(123) 456-7890"}),e.jsx("p",{children:"City, Country"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Summary"}),e.jsx("p",{children:m||"Loading summary..."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Experience"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Software Engineer"}),e.jsx("p",{children:"XYZ Tech Solutions"}),e.jsx("p",{children:"Jan 2021 - Present"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Developed and maintained web applications using React and Node.js."}),e.jsx("li",{children:"Collaborated with cross-functional teams to design and implement new features."}),e.jsx("li",{children:"Optimized application performance and improved loading times by 30%."})]})]})]}),e.jsx("footer",{children:e.jsx("p",{children:"Portfolio: www.johndoe.com | LinkedIn: linkedin.com/in/johndoe"})})]}),e.jsx("button",{onClick:x,disabled:o,children:o?"Generating PDF...":"Download Resume as PDF"})]})};export{w as default};
