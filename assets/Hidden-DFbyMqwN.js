import{r as c,j as e,u as d}from"./index-GnYbyia3.js";/* empty css             */const m=({title:a,children:n})=>{const[s,r]=c.useState(!1),l=()=>{r(!s)};return e.jsxs("div",{className:"toggle-section",children:[e.jsx("button",{className:"btn",onClick:l,children:s?`Hide ${a}`:`${a}`}),s&&e.jsx("div",{className:"mt-6 flex-center",children:n})]})},x=()=>{const[a,n]=c.useState(""),[s,r]=c.useState(""),l=d(),o=t=>{t.preventDefault();const i=encodeURIComponent(s);l(`/HappyBirthday/${a}?message=${i}`)};return e.jsx("div",{children:e.jsxs("form",{onSubmit:o,className:"form-container mt-10",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Name:"}),e.jsx("input",{type:"text",value:a,onChange:t=>n(t.target.value),required:!0,className:"form-input"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Message:"}),e.jsx("textarea",{value:s,onChange:t=>r(t.target.value),required:!0,className:"form-textarea"})]}),e.jsx("button",{type:"submit",className:"form-button",children:"Generate Card"})]})})},g=()=>e.jsxs("div",{children:[e.jsx("div",{className:"section-heading text-center",style:{opacity:1},children:"Tools"}),e.jsxs("div",{className:"w-full flex mt-10",children:[e.jsx("div",{className:"w-1/2",children:e.jsx(m,{title:"Birthday Card",children:e.jsx(x,{})})}),e.jsx("div",{className:"w-1/2"})]})]});export{g as default};
