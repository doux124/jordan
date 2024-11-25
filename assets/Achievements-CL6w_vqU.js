var ae=Object.defineProperty;var ne=(n,e,t)=>e in n?ae(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Q=(n,e,t)=>ne(n,typeof e!="symbol"?e+"":e,t);import{r as u,u as he,j as _}from"./index-CyslEz77.js";import{M as de}from"./Music-GCzy869r.js";class ce{constructor(e,t){this.x=0,this.y=0,this.width=e,this.height=t}update(e,t,i){this.x=Math.max(0,Math.min(e.x-this.width/2,t-this.width)),this.y=Math.max(0,Math.min(e.y-this.height/2,i-this.height))}}class h{constructor(e=0,t=0){this.x=e,this.y=t}}class g{constructor({resource:e,frameSize:t,hFrames:i,vFrames:r,frame:a,scale:s,position:y}){this.resource=e,this.frameSize=t??new h(16,16),this.hFrames=i??1,this.vFrames=r??1,this.frame=a??0,this.frameMap=new Map,this.scale=s??1,this.position=y??new h(0,0),this.buildFrameMap()}buildFrameMap(){let e=0;for(let t=0;t<this.vFrames;t++)for(let i=0;i<this.hFrames;i++)this.frameMap.set(e,new h(this.frameSize.x*i,this.frameSize.y*t)),e++}drawImage(e,t,i){if(e.imageSmoothingEnabled=!1,!this.resource.isLoaded)return;let r=0,a=0;const s=this.frameMap.get(this.frame);s&&(r=s.x,a=s.y);const y=this.frameSize.x,b=this.frameSize.y;e.drawImage(this.resource.image,r,a,y,b,t,i,y*this.scale,b*this.scale)}}class le{constructor(){this.toLoad={unlit:"/jordan/sprites/unlit_clean.png",lit1:"/jordan/sprites/background_lit.png",lit2:"/jordan/sprites/background_lit2.png",plant:"/jordan/sprites/plant_gray.png",longroom:"/jordan/sprites/longroom.png",frisk:"/jordan/sprites/frisk.png",heart1:"/jordan/sprites/heart1.png",heart2:"/jordan/sprites/heart2.png",heart3:"/jordan/sprites/heart3.png",radio1:"/jordan/sprites/radio1.png",radio2:"/jordan/sprites/radio2.png",trophy1:"/jordan/sprites/trophy1.png",trophy2:"/jordan/sprites/trophy2.png",trophy3:"/jordan/sprites/trophy3.png",pet1:"/jordan/sprites/pet1.png",pet2:"/jordan/sprites/pet2.png",pet3:"/jordan/sprites/pet3.png",popup:"/jordan/sprites/popup.png"},this.images={},Object.keys(this.toLoad).forEach(e=>{const t=new Image;t.src=this.toLoad[e],this.images[e]={image:t,isLoaded:!1},t.onload=()=>{this.images[e].isLoaded=!0}})}}const o=new le,x={mainRoom:{width:3200,height:1800,background:new g({resource:o.images.unlit,frameSize:new h(3200,1800),scale:2}),walls:[{x1:420,y1:170,x2:520,y2:1270},{x1:520,y1:-250,x2:700,y2:270},{x1:2514,y1:370,x2:2524,y2:770},{x1:1044,y1:-250,x2:1354,y2:270},{x1:1334,y1:270,x2:2574,y2:350},{x1:520,y1:1470,x2:2680,y2:1480},{x1:2514,y1:1380,x2:3220,y2:1580},{x1:2514,y1:820,x2:3220,y2:830},{x1:840,y1:980,x2:1540,y2:1080},{x1:1130,y1:810,x2:1220,y2:820}]},longRoom:{width:6e3,height:1800,background:new g({resource:o.images.longroom,frameSize:new h(6e3,1800),scale:2}),walls:[{x1:50,y1:820,x2:2990,y2:830},{x1:50,y1:1380,x2:2990,y2:1390},{x1:2830,y1:820,x2:3060,y2:1390}]}},F="LEFT",z="RIGHT",H="UP",D="DOWN",j="ENTER";class me{constructor(){this.heldDirections=[],this.touchButtons=[],this.touchStartHandler=this.touchStartHandler.bind(this),this.touchEndHandler=this.touchEndHandler.bind(this),this.mouseDownHandler=this.mouseDownHandler.bind(this),this.mouseUpHandler=this.mouseUpHandler.bind(this),document.addEventListener("keydown",e=>this.keyDownHandler(e)),document.addEventListener("keyup",e=>this.keyUpHandler(e)),this.createTouchControls()}get direction(){return this.heldDirections[0]}onArrowPressed(e){this.heldDirections.indexOf(e)===-1&&this.heldDirections.unshift(e)}onArrowReleased(e){const t=this.heldDirections.indexOf(e);t!==-1&&this.heldDirections.splice(t,1)}keyDownHandler(e){(e.code==="ArrowUp"||e.code==="KeyW")&&this.onArrowPressed(H),(e.code==="ArrowDown"||e.code==="KeyS")&&this.onArrowPressed(D),(e.code==="ArrowLeft"||e.code==="KeyA")&&this.onArrowPressed(F),(e.code==="ArrowRight"||e.code==="KeyD")&&this.onArrowPressed(z),e.code==="Enter"&&this.onArrowPressed(j)}keyUpHandler(e){(e.code==="ArrowUp"||e.code==="KeyW")&&this.onArrowReleased(H),(e.code==="ArrowDown"||e.code==="KeyS")&&this.onArrowReleased(D),(e.code==="ArrowLeft"||e.code==="KeyA")&&this.onArrowReleased(F),(e.code==="ArrowRight"||e.code==="KeyD")&&this.onArrowReleased(z),e.code==="Enter"&&this.onArrowReleased(j)}createTouchControls(){[{id:"UP",direction:H},{id:"DOWN",direction:D},{id:"LEFT",direction:F},{id:"RIGHT",direction:z},{id:"ENTER",direction:j}].forEach(i=>{const r=document.createElement("button");switch(r.id=i.id,r.innerText=i.direction,r.style.position="absolute",r.style.touchAction="none",r.style.width="50px",r.style.height="50px",r.style.color="white",r.style.backgroundColor="black",r.style.fontSize="25px",i.direction){case H:r.style.bottom="120px",r.style.left="60px",r.innerText="W";break;case D:r.style.bottom="40px",r.style.left="60px",r.innerText="S";break;case F:r.style.bottom="80px",r.style.left="20px",r.innerText="A";break;case z:r.style.bottom="80px",r.style.left="100px",r.innerText="D";break;case j:r.style.bottom="80px",r.style.right="70px",r.style.width="100px";break}r.addEventListener("touchstart",this.touchStartHandler),r.addEventListener("touchend",this.touchEndHandler),r.addEventListener("mousedown",this.mouseDownHandler),r.addEventListener("mouseup",this.mouseUpHandler),document.body.appendChild(r),this.touchButtons.push(r)});const t=document.createElement("button");t.style.position="absolute",t.style.width="50px",t.style.height="50px",t.style.backgroundColor="black",t.style.bottom="80px",t.style.left="60px",document.body.appendChild(t),this.touchButtons.push(t)}touchStartHandler(e){e.preventDefault();const t=e.target.id;this.onArrowPressed(t)}touchEndHandler(e){e.preventDefault();const t=e.target.id;this.onArrowReleased(t)}mouseDownHandler(e){e.preventDefault();const t=e.target.id;this.onArrowPressed(t)}mouseUpHandler(e){e.preventDefault();const t=e.target.id;this.onArrowReleased(t)}stop(){this.touchButtons.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),this.touchButtons=[]}}class ue{constructor(){this.walls=[]}addWall(e,t,i,r){this.walls.push({x1:e,y1:t,x2:i,y2:r})}checkCollision(e,t,i,r){return this.walls.some(a=>e<a.x2&&e+i>a.x1&&t<a.y2&&t+r>a.y1)}}class Z extends g{constructor(e,t,i="lightgray",r="black",a=10){super({resource:e.resource,frameSize:e.frameSize,hFrames:e.hFrames,vFrames:e.vFrames,frame:e.frame,scale:e.scale,position:e.position}),this.message=t,this.backgroundColor=i,this.borderColor=r,this.borderWidth=a}drawImage(e,t,i){const b=this.message.split(`
`),v=t+1800/2-200,I=i+1050/2-425;e.fillStyle=this.backgroundColor,this.roundedRect(e,t-this.borderWidth,i-this.borderWidth,1800,1050+this.borderWidth*2,20),e.fill(),e.strokeStyle=this.borderColor,e.lineWidth=this.borderWidth,this.roundedRect(e,t-this.borderWidth,i-this.borderWidth,1800,1050+this.borderWidth*2,20),e.stroke(),super.drawImage(e,v,I);const U=t+1800/2,N=I+650;e.font="bold 120px Caveat",e.fillStyle="black",e.textAlign="center",b.forEach((K,L)=>{e.fillText(K,U,N+L*144)})}roundedRect(e,t,i,r,a,s){e.beginPath(),e.moveTo(t+s,i),e.arcTo(t+r,i,t+r,i+a,s),e.arcTo(t+r,i+a,t,i+a,s),e.arcTo(t,i+a,t,i,s),e.arcTo(t,i,t+r,i,s),e.closePath()}}class fe{constructor(e,t){Q(this,"mainLoop",e=>{if(!this.isRunning)return;let t=e-this.lastFrameTime;for(this.lastFrameTime=e,this.accumulatedTime+=t;this.accumulatedTime>=this.timeStep;)this.update(this.timeStep),this.accumulatedTime-=this.timeStep;this.render(),this.rafId=requestAnimationFrame(this.mainLoop)});this.lastFrameTime=0,this.accumulatedTime=0,this.timeStep=1e3/60,this.update=e,this.render=t,this.rafId=null,this.isRunning=!1}start(){this.isRunning||(this.isRunning=!0,this.rafId=requestAnimationFrame(this.mainLoop))}stop(){this.rafId&&cancelAnimationFrame(this.rafId),this.isRunning=!1}}const pe=()=>{const n=u.useRef(null),e=he(),[t,i]=u.useState("mainRoom"),[r,a]=u.useState(!0),[s,y]=u.useState(new h(760,100)),[b,v]=u.useState(!1),[I,U]=u.useState(!0),[N,K]=u.useState(!1),[L,ee]=u.useState(!0),[te,q]=u.useState(!1);return u.useEffect(()=>{const E=n.current,f=E.getContext("2d"),d=new g({resource:o.images.frisk,frameSize:new h(224,280),hFrames:2,vFrames:4,frame:I?3:t==="mainRoom"?8:7}),C=new g({resource:o.images.radio1,frameSize:new h(138,145),hFrames:1,vFrames:1,frame:1,scale:2}),B=new g({resource:o.images.trophy1,frameSize:new h(234,233),hFrames:1,vFrames:1,frame:1,scale:2}),O=new g({resource:o.images.heart1,frameSize:new h(354,354),hFrames:1,vFrames:1,frame:1,scale:1.7}),W=new g({resource:o.images.pet1,frameSize:new h(178,178),hFrames:1,vFrames:1,frame:1,scale:1.7}),se=new Z(new g({resource:o.images.popup,frameSize:new h(939,485),hFrames:1,vFrames:1,frame:1,scale:2}),`Plant has been added 
 to your inventory`),re=new Z(W,"You have fed the guinea pig"),m=new ce(E.width,E.height),T=new ue;x[t].walls.forEach(p=>{T.addWall(p.x1,p.y1,p.x2,p.y2)});const S=new me;let P=0,R=!0,V=0,G=0,$=0,k=N,A=L,M=0,Y=!1,X=!1,w=te;const ie=()=>{m.update(s,x[t].width,x[t].height);const p=Date.now();if(b&&$<100){G!=0&&($+=p-G),G=p;return}else v(!1);if(t==="mainRoom"&&s.x>3e3?(v(!0),i("longRoom"),y(new h(50,s.y)),a(!1),U(!1)):t==="longRoom"&&s.x<50&&(v(!0),i("mainRoom"),y(new h(2950,s.y)),a(!0)),!k&&r&&(x[t].background.resource=w?o.images.unlit:o.images.plant),P+=1,P<25?(R=!0,k&&r&&(x[t].background.resource=o.images.lit1),A?C.resource=o.images.radio1:C.resource=o.images.radio2,B.resource=M<.5?o.images.trophy1:o.images.trophy3,O.resource=M<.5?o.images.heart1:o.images.heart3,W.resource=M<.5?o.images.pet1:o.images.pet3):(R=!1,k&&r&&(x[t].background.resource=o.images.lit2),A&&(C.resource=o.images.radio2),B.resource=o.images.trophy2,O.resource=o.images.heart2,W.resource=o.images.pet2,P>50&&(P=0,M=Math.random())),S.direction===D&&(T.checkCollision(s.x,s.y+10,d.frameSize.x,d.frameSize.y)||(s.y+=10),d.frame=R?1:3),S.direction===H&&(T.checkCollision(s.x,s.y-10,d.frameSize.x,d.frameSize.y)||(s.y-=10),d.frame=R?4:6),S.direction===F&&(T.checkCollision(s.x-10,s.y,d.frameSize.x,d.frameSize.y)||(s.x-=10),d.frame=R?2:8),S.direction===z&&(T.checkCollision(s.x+10,s.y,d.frameSize.x,d.frameSize.y)||(s.x+=10),d.frame=R?5:7),S.direction===j&&p-V>=1e3){console.log(s),V=p;let c=s.x<2100&&s.x>1700,l=s.y<400&&s.y>200;c&&l&&e("/achievements/research"),c=s.x<1600&&s.x>1300,l=s.y<400&&s.y>200,c&&l&&(k=!k,K(k)),c=s.x<2300&&s.x>2200,l=s.y<1600&&s.y>1450,c&&l&&!w&&(Y=!0,w=!0,q(w)),r||(c=s.x<2610&&s.x>2550,l=s.y<1110&&s.y>820,c&&l&&(A=!A,ee(A)),c=s.x<850&&s.x>600,l=s.y<840&&s.y>800,c&&l&&e("/achievements/research"),c=s.x<1750&&s.x>1640,l=s.y<840&&s.y>800,c&&l&&e("/hobbies/volunteering"),c=s.x<2300&&s.x>2130,l=s.y<840&&s.y>800,c&&l&&(w?X=!0:e("/achievements/pet"),w=!1,q(w)))}},oe=()=>{f.clearRect(0,0,E.width,E.height),x[t].background.drawImage(f,-m.x,-m.y),r||(B.drawImage(f,610-m.x,400-m.y),O.drawImage(f,1600-m.x,320-m.y),W.drawImage(f,2800-m.x,500-m.y),C.drawImage(f,3800-m.x,970-m.y)),d.drawImage(f,s.x,s.y),Y&&(se.drawImage(f,700,350),setTimeout(()=>{Y=!1},1500)),X&&(re.drawImage(f,700,350),setTimeout(()=>{X=!1},1500))},J=new fe(ie,oe);return J.start(),()=>{S.stop(),J.stop()}},[t]),_.jsx("canvas",{id:"game-canvas",ref:n,width:3200,height:1800,children:L&&_.jsx(de,{songName:"spiderDance"})})},xe=()=>_.jsx(pe,{});export{xe as default};
