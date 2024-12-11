const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Annuloplasty-DfwfqGZI.js","assets/index-D325a2_S.js","assets/index-Cun4Foxn.css","assets/styles--8pTCOHt.js","assets/styles-EBBsXhC6.css","assets/index-Boyj1BZ2.js","assets/Graphene-BSPqymgt.js","assets/EEG-CJOXyqIv.js"])))=>i.map(i=>d[i]);
import{R as to,r as Ot,_ as Wa,u as fs,j as be,L as ci}from"./index-D325a2_S.js";import{g as ga}from"./styles--8pTCOHt.js";import{P as R}from"./index-iYMWn8xW.js";function us(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ds(t,e,r){return e&&us(t.prototype,e),t}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,Nr,Qe,Ut,Gt,Mn,no,on,Jn,ro,Mt,dt,ao,io=function(){return Ae||typeof window<"u"&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},oo=1,Pn=[],D=[],wt=[],er=Date.now,ma=function(e,r){return r},ps=function(){var e=Jn.core,r=e.bridge||{},n=e._scrollers,a=e._proxies;n.push.apply(n,D),a.push.apply(a,wt),D=n,wt=a,ma=function(s,o){return r[s](o)}},Vt=function(e,r){return~wt.indexOf(e)&&wt[wt.indexOf(e)+1][r]},tr=function(e){return!!~ro.indexOf(e)},Fe=function(e,r,n,a,i){return e.addEventListener(r,n,{passive:a!==!1,capture:!!i})},Le=function(e,r,n,a){return e.removeEventListener(r,n,!!a)},yr="scrollLeft",_r="scrollTop",ha=function(){return Mt&&Mt.isPressed||D.cache++},jr=function(e,r){var n=function a(i){if(i||i===0){oo&&(Qe.history.scrollRestoration="manual");var s=Mt&&Mt.isPressed;i=a.v=Math.round(i)||(Mt&&Mt.iOS?1:0),e(i),a.cacheID=D.cache,s&&ma("ss",i)}else(r||D.cache!==a.cacheID||ma("ref"))&&(a.cacheID=D.cache,a.v=e());return a.v+a.offset};return n.offset=0,e&&n},He={s:yr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:jr(function(t){return arguments.length?Qe.scrollTo(t,ge.sc()):Qe.pageXOffset||Ut[yr]||Gt[yr]||Mn[yr]||0})},ge={s:_r,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:He,sc:jr(function(t){return arguments.length?Qe.scrollTo(He.sc(),t):Qe.pageYOffset||Ut[_r]||Gt[_r]||Mn[_r]||0})},Ue=function(e,r){return(r&&r._ctx&&r._ctx.selector||Ae.utils.toArray)(e)[0]||(typeof e=="string"&&Ae.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},qt=function(e,r){var n=r.s,a=r.sc;tr(e)&&(e=Ut.scrollingElement||Gt);var i=D.indexOf(e),s=a===ge.sc?1:2;!~i&&(i=D.push(e)-1),D[i+s]||Fe(e,"scroll",ha);var o=D[i+s],c=o||(D[i+s]=jr(Vt(e,n),!0)||(tr(e)?a:jr(function(f){return arguments.length?e[n]=f:e[n]})));return c.target=e,o||(c.smooth=Ae.getProperty(e,"scrollBehavior")==="smooth"),c},ba=function(e,r,n){var a=e,i=e,s=er(),o=s,c=r||50,f=Math.max(500,c*3),g=function(b,Y){var S=er();Y||S-s>c?(i=a,a=b,o=s,s=S):n?a+=b:a=i+(b-i)/(S-o)*(s-o)},h=function(){i=a=n?0:a,o=s=0},p=function(b){var Y=o,S=i,N=er();return(b||b===0)&&b!==a&&g(b),s===o||N-o>f?0:(a+(n?S:-S))/((n?N:s)-Y)*1e3};return{update:g,reset:h,getVelocity:p}},Bn=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fi=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},so=function(){Jn=Ae.core.globals().ScrollTrigger,Jn&&Jn.core&&ps()},lo=function(e){return Ae=e||io(),!Nr&&Ae&&typeof document<"u"&&document.body&&(Qe=window,Ut=document,Gt=Ut.documentElement,Mn=Ut.body,ro=[Qe,Ut,Gt,Mn],Ae.utils.clamp,ao=Ae.core.context||function(){},on="onpointerenter"in Mn?"pointer":"mouse",no=re.isTouch=Qe.matchMedia&&Qe.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qe||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,dt=re.eventTypes=("ontouchstart"in Gt?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gt?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return oo=0},500),so(),Nr=1),Nr};He.op=ge;D.cache=0;var re=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){Nr||lo(Ae)||console.warn("Please gsap.registerPlugin(Observer)"),Jn||so();var a=n.tolerance,i=n.dragMinimum,s=n.type,o=n.target,c=n.lineHeight,f=n.debounce,g=n.preventDefault,h=n.onStop,p=n.onStopDelay,d=n.ignore,b=n.wheelSpeed,Y=n.event,S=n.onDragStart,N=n.onDragEnd,P=n.onDrag,j=n.onPress,x=n.onRelease,V=n.onRight,U=n.onLeft,k=n.onUp,_e=n.onDown,Xe=n.onChangeX,_=n.onChangeY,xe=n.onChange,C=n.onToggleX,At=n.onToggleY,fe=n.onHover,Me=n.onHoverEnd,Ne=n.onMove,X=n.ignoreCheck,ae=n.isNormalizer,ie=n.onGestureStart,l=n.onGestureEnd,ue=n.onWheel,Jt=n.onEnable,Lt=n.onDisable,tt=n.onClick,St=n.scrollSpeed,Ie=n.capture,oe=n.allowClicks,Re=n.lockAxis,Se=n.onLockAxis;this.target=o=Ue(o)||Gt,this.vars=n,d&&(d=Ae.utils.toArray(d)),a=a||1e-9,i=i||0,b=b||1,St=St||1,s=s||"wheel,touch,pointer",f=f!==!1,c||(c=parseFloat(Qe.getComputedStyle(Mn).lineHeight)||22);var Ft,De,ot,H,ee,Be,Ge,u=this,$e=0,Ct=0,zt=n.passive||!g,se=qt(o,He),Yt=qt(o,ge),en=se(),_n=Yt(),me=~s.indexOf("touch")&&!~s.indexOf("pointer")&&dt[0]==="pointerdown",jt=tr(o),te=o.ownerDocument||Ut,st=[0,0,0],nt=[0,0,0],Et=0,Yn=function(){return Et=er()},le=function(A,W){return(u.event=A)&&d&&~d.indexOf(A.target)||W&&me&&A.pointerType!=="touch"||X&&X(A,W)},hr=function(){u._vx.reset(),u._vy.reset(),De.pause(),h&&h(u)},Ht=function(){var A=u.deltaX=fi(st),W=u.deltaY=fi(nt),m=Math.abs(A)>=a,T=Math.abs(W)>=a;xe&&(m||T)&&xe(u,A,W,st,nt),m&&(V&&u.deltaX>0&&V(u),U&&u.deltaX<0&&U(u),Xe&&Xe(u),C&&u.deltaX<0!=$e<0&&C(u),$e=u.deltaX,st[0]=st[1]=st[2]=0),T&&(_e&&u.deltaY>0&&_e(u),k&&u.deltaY<0&&k(u),_&&_(u),At&&u.deltaY<0!=Ct<0&&At(u),Ct=u.deltaY,nt[0]=nt[1]=nt[2]=0),(H||ot)&&(Ne&&Ne(u),ot&&(P(u),ot=!1),H=!1),Be&&!(Be=!1)&&Se&&Se(u),ee&&(ue(u),ee=!1),Ft=0},xn=function(A,W,m){st[m]+=A,nt[m]+=W,u._vx.update(A),u._vy.update(W),f?Ft||(Ft=requestAnimationFrame(Ht)):Ht()},wn=function(A,W){Re&&!Ge&&(u.axis=Ge=Math.abs(A)>Math.abs(W)?"x":"y",Be=!0),Ge!=="y"&&(st[2]+=A,u._vx.update(A,!0)),Ge!=="x"&&(nt[2]+=W,u._vy.update(W,!0)),f?Ft||(Ft=requestAnimationFrame(Ht)):Ht()},Wt=function(A){if(!le(A,1)){A=Bn(A,g);var W=A.clientX,m=A.clientY,T=W-u.x,w=m-u.y,E=u.isDragging;u.x=W,u.y=m,(E||Math.abs(u.startX-W)>=i||Math.abs(u.startY-m)>=i)&&(P&&(ot=!0),E||(u.isDragging=!0),wn(T,w),E||S&&S(u))}},tn=u.onPress=function(O){le(O,1)||O&&O.button||(u.axis=Ge=null,De.pause(),u.isPressed=!0,O=Bn(O),$e=Ct=0,u.startX=u.x=O.clientX,u.startY=u.y=O.clientY,u._vx.reset(),u._vy.reset(),Fe(ae?o:te,dt[1],Wt,zt,!0),u.deltaX=u.deltaY=0,j&&j(u))},I=u.onRelease=function(O){if(!le(O,1)){Le(ae?o:te,dt[1],Wt,!0);var A=!isNaN(u.y-u.startY),W=u.isDragging,m=W&&(Math.abs(u.x-u.startX)>3||Math.abs(u.y-u.startY)>3),T=Bn(O);!m&&A&&(u._vx.reset(),u._vy.reset(),g&&oe&&Ae.delayedCall(.08,function(){if(er()-Et>300&&!O.defaultPrevented){if(O.target.click)O.target.click();else if(te.createEvent){var w=te.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,Qe,1,T.screenX,T.screenY,T.clientX,T.clientY,!1,!1,!1,!1,0,null),O.target.dispatchEvent(w)}}})),u.isDragging=u.isGesturing=u.isPressed=!1,h&&W&&!ae&&De.restart(!0),N&&W&&N(u),x&&x(u,m)}},nn=function(A){return A.touches&&A.touches.length>1&&(u.isGesturing=!0)&&ie(A,u.isDragging)},lt=function(){return(u.isGesturing=!1)||l(u)},ct=function(A){if(!le(A)){var W=se(),m=Yt();xn((W-en)*St,(m-_n)*St,1),en=W,_n=m,h&&De.restart(!0)}},ft=function(A){if(!le(A)){A=Bn(A,g),ue&&(ee=!0);var W=(A.deltaMode===1?c:A.deltaMode===2?Qe.innerHeight:1)*b;xn(A.deltaX*W,A.deltaY*W,0),h&&!ae&&De.restart(!0)}},rn=function(A){if(!le(A)){var W=A.clientX,m=A.clientY,T=W-u.x,w=m-u.y;u.x=W,u.y=m,H=!0,h&&De.restart(!0),(T||w)&&wn(T,w)}},kn=function(A){u.event=A,fe(u)},Pt=function(A){u.event=A,Me(u)},jn=function(A){return le(A)||Bn(A,g)&&tt(u)};De=u._dc=Ae.delayedCall(p||.25,hr).pause(),u.deltaX=u.deltaY=0,u._vx=ba(0,50,!0),u._vy=ba(0,50,!0),u.scrollX=se,u.scrollY=Yt,u.isDragging=u.isGesturing=u.isPressed=!1,ao(this),u.enable=function(O){return u.isEnabled||(Fe(jt?te:o,"scroll",ha),s.indexOf("scroll")>=0&&Fe(jt?te:o,"scroll",ct,zt,Ie),s.indexOf("wheel")>=0&&Fe(o,"wheel",ft,zt,Ie),(s.indexOf("touch")>=0&&no||s.indexOf("pointer")>=0)&&(Fe(o,dt[0],tn,zt,Ie),Fe(te,dt[2],I),Fe(te,dt[3],I),oe&&Fe(o,"click",Yn,!0,!0),tt&&Fe(o,"click",jn),ie&&Fe(te,"gesturestart",nn),l&&Fe(te,"gestureend",lt),fe&&Fe(o,on+"enter",kn),Me&&Fe(o,on+"leave",Pt),Ne&&Fe(o,on+"move",rn)),u.isEnabled=!0,O&&O.type&&tn(O),Jt&&Jt(u)),u},u.disable=function(){u.isEnabled&&(Pn.filter(function(O){return O!==u&&tr(O.target)}).length||Le(jt?te:o,"scroll",ha),u.isPressed&&(u._vx.reset(),u._vy.reset(),Le(ae?o:te,dt[1],Wt,!0)),Le(jt?te:o,"scroll",ct,Ie),Le(o,"wheel",ft,Ie),Le(o,dt[0],tn,Ie),Le(te,dt[2],I),Le(te,dt[3],I),Le(o,"click",Yn,!0),Le(o,"click",jn),Le(te,"gesturestart",nn),Le(te,"gestureend",lt),Le(o,on+"enter",kn),Le(o,on+"leave",Pt),Le(o,on+"move",rn),u.isEnabled=u.isPressed=u.isDragging=!1,Lt&&Lt(u))},u.kill=u.revert=function(){u.disable();var O=Pn.indexOf(u);O>=0&&Pn.splice(O,1),Mt===u&&(Mt=0)},Pn.push(u),ae&&tr(o)&&(Mt=u),u.enable(Y)},ds(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();re.version="3.12.5";re.create=function(t){return new re(t)};re.register=lo;re.getAll=function(){return Pn.slice()};re.getById=function(t){return Pn.filter(function(e){return e.vars.id===t})[0]};io()&&Ae.registerPlugin(re);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var v,Cn,z,Z,pt,G,co,Hr,fr,nr,Gn,xr,Oe,Vr,va,Ye,ui,di,En,fo,ea,uo,ze,ya,po,go,Bt,_a,Xa,Nn,Ba,Wr,xa,ta,wr=1,Te=Date.now,na=Te(),it=0,$n=0,pi=function(e,r,n){var a=Ke(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=a,a?e.substr(6,e.length-7):e},gi=function(e,r){return r&&(!Ke(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gs=function t(){return $n&&requestAnimationFrame(t)},mi=function(){return Vr=1},hi=function(){return Vr=0},bt=function(e){return e},Vn=function(e){return Math.round(e*1e5)/1e5||0},mo=function(){return typeof window<"u"},ho=function(){return v||mo()&&(v=window.gsap)&&v.registerPlugin&&v},mn=function(e){return!!~co.indexOf(e)},bo=function(e){return(e==="Height"?Ba:z["inner"+e])||pt["client"+e]||G["client"+e]},vo=function(e){return Vt(e,"getBoundingClientRect")||(mn(e)?function(){return Fr.width=z.innerWidth,Fr.height=Ba,Fr}:function(){return Tt(e)})},ms=function(e,r,n){var a=n.d,i=n.d2,s=n.a;return(s=Vt(e,"getBoundingClientRect"))?function(){return s()[a]}:function(){return(r?bo(i):e["client"+i])||0}},hs=function(e,r){return!r||~wt.indexOf(e)?vo(e):function(){return Fr}},yt=function(e,r){var n=r.s,a=r.d2,i=r.d,s=r.a;return Math.max(0,(n="scroll"+a)&&(s=Vt(e,n))?s()-vo(e)()[i]:mn(e)?(pt[n]||G[n])-bo(a):e[n]-e["offset"+a])},kr=function(e,r){for(var n=0;n<En.length;n+=3)(!r||~r.indexOf(En[n+1]))&&e(En[n],En[n+1],En[n+2])},Ke=function(e){return typeof e=="string"},We=function(e){return typeof e=="function"},qn=function(e){return typeof e=="number"},sn=function(e){return typeof e=="object"},Un=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},ra=function(e,r){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return r(e)}):r(e);n&&n.totalTime&&(e.callbackAnimation=n)}},An=Math.abs,yo="left",_o="top",Ua="right",Ga="bottom",fn="width",un="height",rr="Right",ar="Left",ir="Top",or="Bottom",ce="padding",rt="margin",Dn="Width",$a="Height",pe="px",at=function(e){return z.getComputedStyle(e)},bs=function(e){var r=at(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},bi=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},Tt=function(e,r){var n=r&&at(e)[va]!=="matrix(1, 0, 0, 1, 0, 0)"&&v.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=e.getBoundingClientRect();return n&&n.progress(0).kill(),a},Xr=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},xo=function(e){var r=[],n=e.labels,a=e.duration(),i;for(i in n)r.push(n[i]/a);return r},vs=function(e){return function(r){return v.utils.snap(xo(e),r)}},Va=function(e){var r=v.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(a,i){return a-i});return n?function(a,i,s){s===void 0&&(s=.001);var o;if(!i)return r(a);if(i>0){for(a-=s,o=0;o<n.length;o++)if(n[o]>=a)return n[o];return n[o-1]}else for(o=n.length,a+=s;o--;)if(n[o]<=a)return n[o];return n[0]}:function(a,i,s){s===void 0&&(s=.001);var o=r(a);return!i||Math.abs(o-a)<s||o-a<0==i<0?o:r(i<0?a-e:a+e)}},ys=function(e){return function(r,n){return Va(xo(e))(r,n.direction)}},Ar=function(e,r,n,a){return n.split(",").forEach(function(i){return e(r,i,a)})},ye=function(e,r,n,a,i){return e.addEventListener(r,n,{passive:!a,capture:!!i})},ve=function(e,r,n,a){return e.removeEventListener(r,n,!!a)},Sr=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},vi={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cr={toggleActions:"play",anticipatePin:0},Br={top:0,left:0,center:.5,bottom:1,right:1},Ir=function(e,r){if(Ke(e)){var n=e.indexOf("="),a=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(a*=r/100),e=e.substr(0,n-1)),e=a+(e in Br?Br[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Er=function(e,r,n,a,i,s,o,c){var f=i.startColor,g=i.endColor,h=i.fontSize,p=i.indent,d=i.fontWeight,b=Z.createElement("div"),Y=mn(n)||Vt(n,"pinType")==="fixed",S=e.indexOf("scroller")!==-1,N=Y?G:n,P=e.indexOf("start")!==-1,j=P?f:g,x="border-color:"+j+";font-size:"+h+";color:"+j+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((S||c)&&Y?"fixed;":"absolute;"),(S||c||!Y)&&(x+=(a===ge?Ua:Ga)+":"+(s+parseFloat(p))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),b._isStart=P,b.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),b.style.cssText=x,b.innerText=r||r===0?e+"-"+r:e,N.children[0]?N.insertBefore(b,N.children[0]):N.appendChild(b),b._offset=b["offset"+a.op.d2],Rr(b,0,a,P),b},Rr=function(e,r,n,a){var i={display:"block"},s=n[a?"os2":"p2"],o=n[a?"p2":"os2"];e._isFlipped=a,i[n.a+"Percent"]=a?-100:0,i[n.a]=a?"1px":0,i["border"+s+Dn]=1,i["border"+o+Dn]=0,i[n.p]=r+"px",v.set(e,i)},M=[],wa={},ur,yi=function(){return Te()-it>34&&(ur||(ur=requestAnimationFrame(Nt)))},Sn=function(){(!ze||!ze.isPressed||ze.startX>G.clientWidth)&&(D.cache++,ze?ur||(ur=requestAnimationFrame(Nt)):Nt(),it||bn("scrollStart"),it=Te())},aa=function(){go=z.innerWidth,po=z.innerHeight},Kn=function(){D.cache++,!Oe&&!uo&&!Z.fullscreenElement&&!Z.webkitFullscreenElement&&(!ya||go!==z.innerWidth||Math.abs(z.innerHeight-po)>z.innerHeight*.25)&&Hr.restart(!0)},hn={},_s=[],wo=function t(){return ve(L,"scrollEnd",t)||cn(!0)},bn=function(e){return hn[e]&&hn[e].map(function(r){return r()})||_s},qe=[],ko=function(e){for(var r=0;r<qe.length;r+=5)(!e||qe[r+4]&&qe[r+4].query===e)&&(qe[r].style.cssText=qe[r+1],qe[r].getBBox&&qe[r].setAttribute("transform",qe[r+2]||""),qe[r+3].uncache=1)},qa=function(e,r){var n;for(Ye=0;Ye<M.length;Ye++)n=M[Ye],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));Wr=!0,r&&ko(r),r||bn("revert")},Ao=function(e,r){D.cache++,(r||!je)&&D.forEach(function(n){return We(n)&&n.cacheID++&&(n.rec=0)}),Ke(e)&&(z.history.scrollRestoration=Xa=e)},je,dn=0,_i,xs=function(){if(_i!==dn){var e=_i=dn;requestAnimationFrame(function(){return e===dn&&cn(!0)})}},So=function(){G.appendChild(Nn),Ba=!ze&&Nn.offsetHeight||z.innerHeight,G.removeChild(Nn)},xi=function(e){return fr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},cn=function(e,r){if(it&&!e&&!Wr){ye(L,"scrollEnd",wo);return}So(),je=L.isRefreshing=!0,D.forEach(function(a){return We(a)&&++a.cacheID&&(a.rec=a())});var n=bn("refreshInit");fo&&L.sort(),r||qa(),D.forEach(function(a){We(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),M.slice(0).forEach(function(a){return a.refresh()}),Wr=!1,M.forEach(function(a){if(a._subPinOffset&&a.pin){var i=a.vars.horizontal?"offsetWidth":"offsetHeight",s=a.pin[i];a.revert(!0,1),a.adjustPinSpacing(a.pin[i]-s),a.refresh()}}),xa=1,xi(!0),M.forEach(function(a){var i=yt(a.scroller,a._dir),s=a.vars.end==="max"||a._endClamp&&a.end>i,o=a._startClamp&&a.start>=i;(s||o)&&a.setPositions(o?i-1:a.start,s?Math.max(o?i:a.start+1,i):a.end,!0)}),xi(!1),xa=0,n.forEach(function(a){return a&&a.render&&a.render(-1)}),D.forEach(function(a){We(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),Ao(Xa,1),Hr.pause(),dn++,je=2,Nt(2),M.forEach(function(a){return We(a.vars.onRefresh)&&a.vars.onRefresh(a)}),je=L.isRefreshing=!1,bn("refresh")},ka=0,Dr=1,sr,Nt=function(e){if(e===2||!je&&!Wr){L.isUpdating=!0,sr&&sr.update(0);var r=M.length,n=Te(),a=n-na>=50,i=r&&M[0].scroll();if(Dr=ka>i?-1:1,je||(ka=i),a&&(it&&!Vr&&n-it>200&&(it=0,bn("scrollEnd")),Gn=na,na=n),Dr<0){for(Ye=r;Ye-- >0;)M[Ye]&&M[Ye].update(0,a);Dr=1}else for(Ye=0;Ye<r;Ye++)M[Ye]&&M[Ye].update(0,a);L.isUpdating=!1}ur=0},Aa=[yo,_o,Ga,Ua,rt+or,rt+rr,rt+ir,rt+ar,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Lr=Aa.concat([fn,un,"boxSizing","max"+Dn,"max"+$a,"position",rt,ce,ce+ir,ce+rr,ce+or,ce+ar]),ws=function(e,r,n){In(n);var a=e._gsap;if(a.spacerIsNative)In(a.spacerState);else if(e._gsap.swappedIn){var i=r.parentNode;i&&(i.insertBefore(e,r),i.removeChild(r))}e._gsap.swappedIn=!1},ia=function(e,r,n,a){if(!e._gsap.swappedIn){for(var i=Aa.length,s=r.style,o=e.style,c;i--;)c=Aa[i],s[c]=n[c];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[Ga]=o[Ua]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[fn]=Xr(e,He)+pe,s[un]=Xr(e,ge)+pe,s[ce]=o[rt]=o[_o]=o[yo]="0",In(a),o[fn]=o["max"+Dn]=n[fn],o[un]=o["max"+$a]=n[un],o[ce]=n[ce],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},ks=/([A-Z])/g,In=function(e){if(e){var r=e.t.style,n=e.length,a=0,i,s;for((e.t._gsap||v.core.getCache(e.t)).uncache=1;a<n;a+=2)s=e[a+1],i=e[a],s?r[i]=s:r[i]&&r.removeProperty(i.replace(ks,"-$1").toLowerCase())}},Pr=function(e){for(var r=Lr.length,n=e.style,a=[],i=0;i<r;i++)a.push(Lr[i],n[Lr[i]]);return a.t=e,a},As=function(e,r,n){for(var a=[],i=e.length,s=n?8:0,o;s<i;s+=2)o=e[s],a.push(o,o in r?r[o]:e[s+1]);return a.t=e.t,a},Fr={left:0,top:0},wi=function(e,r,n,a,i,s,o,c,f,g,h,p,d,b){We(e)&&(e=e(c)),Ke(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?Ir("0"+e.substr(3),n):0));var Y=d?d.time():0,S,N,P;if(d&&d.seek(0),isNaN(e)||(e=+e),qn(e))d&&(e=v.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,p,e)),o&&Rr(o,n,a,!0);else{We(r)&&(r=r(c));var j=(e||"0").split(" "),x,V,U,k;P=Ue(r,c)||G,x=Tt(P)||{},(!x||!x.left&&!x.top)&&at(P).display==="none"&&(k=P.style.display,P.style.display="block",x=Tt(P),k?P.style.display=k:P.style.removeProperty("display")),V=Ir(j[0],x[a.d]),U=Ir(j[1]||"0",n),e=x[a.p]-f[a.p]-g+V+i-U,o&&Rr(o,U,a,n-U<20||o._isStart&&U>20),n-=n-U}if(b&&(c[b]=e||-.001,e<0&&(e=0)),s){var _e=e+n,Xe=s._isStart;S="scroll"+a.d2,Rr(s,_e,a,Xe&&_e>20||!Xe&&(h?Math.max(G[S],pt[S]):s.parentNode[S])<=_e+1),h&&(f=Tt(o),h&&(s.style[a.op.p]=f[a.op.p]-a.op.m-s._offset+pe))}return d&&P&&(S=Tt(P),d.seek(p),N=Tt(P),d._caScrollDist=S[a.p]-N[a.p],e=e/d._caScrollDist*p),d&&d.seek(Y),d?e:Math.round(e)},Ss=/(webkit|moz|length|cssText|inset)/i,ki=function(e,r,n,a){if(e.parentNode!==r){var i=e.style,s,o;if(r===G){e._stOrig=i.cssText,o=at(e);for(s in o)!+s&&!Ss.test(s)&&o[s]&&typeof i[s]=="string"&&s!=="0"&&(i[s]=o[s]);i.top=n,i.left=a}else i.cssText=e._stOrig;v.core.getCache(e).uncache=1,r.appendChild(e)}},Co=function(e,r,n){var a=r,i=a;return function(s){var o=Math.round(e());return o!==a&&o!==i&&Math.abs(o-a)>3&&Math.abs(o-i)>3&&(s=o,n&&n()),i=a,a=s,s}},Or=function(e,r,n){var a={};a[r.p]="+="+n,v.set(e,a)},Ai=function(e,r){var n=qt(e,r),a="_scroll"+r.p2,i=function s(o,c,f,g,h){var p=s.tween,d=c.onComplete,b={};f=f||n();var Y=Co(n,f,function(){p.kill(),s.tween=0});return h=g&&h||0,g=g||o-f,p&&p.kill(),c[a]=o,c.inherit=!1,c.modifiers=b,b[a]=function(){return Y(f+g*p.ratio+h*p.ratio*p.ratio)},c.onUpdate=function(){D.cache++,s.tween&&Nt()},c.onComplete=function(){s.tween=0,d&&d.call(p)},p=s.tween=v.to(e,c),p};return e[a]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},ye(e,"wheel",n.wheelHandler),L.isTouch&&ye(e,"touchmove",n.wheelHandler),i},L=function(){function t(r,n){Cn||t.register(v)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_a(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$n){this.update=this.refresh=this.kill=bt;return}n=bi(Ke(n)||qn(n)||n.nodeType?{trigger:n}:n,Cr);var i=n,s=i.onUpdate,o=i.toggleClass,c=i.id,f=i.onToggle,g=i.onRefresh,h=i.scrub,p=i.trigger,d=i.pin,b=i.pinSpacing,Y=i.invalidateOnRefresh,S=i.anticipatePin,N=i.onScrubComplete,P=i.onSnapComplete,j=i.once,x=i.snap,V=i.pinReparent,U=i.pinSpacer,k=i.containerAnimation,_e=i.fastScrollEnd,Xe=i.preventOverlaps,_=n.horizontal||n.containerAnimation&&n.horizontal!==!1?He:ge,xe=!h&&h!==0,C=Ue(n.scroller||z),At=v.core.getCache(C),fe=mn(C),Me=("pinType"in n?n.pinType:Vt(C,"pinType")||fe&&"fixed")==="fixed",Ne=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=xe&&n.toggleActions.split(" "),ae="markers"in n?n.markers:Cr.markers,ie=fe?0:parseFloat(at(C)["border"+_.p2+Dn])||0,l=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(l)},Jt=ms(C,fe,_),Lt=hs(C,fe),tt=0,St=0,Ie=0,oe=qt(C,_),Re,Se,Ft,De,ot,H,ee,Be,Ge,u,$e,Ct,zt,se,Yt,en,_n,me,jt,te,st,nt,Et,Yn,le,hr,Ht,xn,wn,Wt,tn,I,nn,lt,ct,ft,rn,kn,Pt;if(l._startClamp=l._endClamp=!1,l._dir=_,S*=45,l.scroller=C,l.scroll=k?k.time.bind(k):oe,De=oe(),l.vars=n,a=a||n.animation,"refreshPriority"in n&&(fo=1,n.refreshPriority===-9999&&(sr=l)),At.tweenScroll=At.tweenScroll||{top:Ai(C,ge),left:Ai(C,He)},l.tweenTo=Re=At.tweenScroll[_.p],l.scrubDuration=function(m){nn=qn(m)&&m,nn?I?I.duration(m):I=v.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:nn,paused:!0,onComplete:function(){return N&&N(l)}}):(I&&I.progress(1).kill(),I=0)},a&&(a.vars.lazy=!1,a._initted&&!l.isReverted||a.vars.immediateRender!==!1&&n.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),l.animation=a.pause(),a.scrollTrigger=l,l.scrubDuration(h),Wt=0,c||(c=a.vars.id)),x&&((!sn(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in G.style&&v.set(fe?[G,pt]:C,{scrollBehavior:"auto"}),D.forEach(function(m){return We(m)&&m.target===(fe?Z.scrollingElement||pt:C)&&(m.smooth=!1)}),Ft=We(x.snapTo)?x.snapTo:x.snapTo==="labels"?vs(a):x.snapTo==="labelsDirectional"?ys(a):x.directional!==!1?function(m,T){return Va(x.snapTo)(m,Te()-St<500?0:T.direction)}:v.utils.snap(x.snapTo),lt=x.duration||{min:.1,max:2},lt=sn(lt)?nr(lt.min,lt.max):nr(lt,lt),ct=v.delayedCall(x.delay||nn/2||.1,function(){var m=oe(),T=Te()-St<500,w=Re.tween;if((T||Math.abs(l.getVelocity())<10)&&!w&&!Vr&&tt!==m){var E=(m-H)/se,he=a&&!xe?a.totalProgress():E,F=T?0:(he-tn)/(Te()-Gn)*1e3||0,ne=v.utils.clamp(-E,1-E,An(F/2)*F/.185),Ce=E+(x.inertia===!1?0:ne),J,q,B=x,ut=B.onStart,Q=B.onInterrupt,Ve=B.onComplete;if(J=Ft(Ce,l),qn(J)||(J=Ce),q=Math.round(H+J*se),m<=ee&&m>=H&&q!==m){if(w&&!w._initted&&w.data<=An(q-m))return;x.inertia===!1&&(ne=J-E),Re(q,{duration:lt(An(Math.max(An(Ce-he),An(J-he))*.185/F/.05||0)),ease:x.ease||"power3",data:An(q-m),onInterrupt:function(){return ct.restart(!0)&&Q&&Q(l)},onComplete:function(){l.update(),tt=oe(),a&&(I?I.resetTo("totalProgress",J,a._tTime/a._tDur):a.progress(J)),Wt=tn=a&&!xe?a.totalProgress():l.progress,P&&P(l),Ve&&Ve(l)}},m,ne*se,q-m-ne*se),ut&&ut(l,Re.tween)}}else l.isActive&&tt!==m&&ct.restart(!0)}).pause()),c&&(wa[c]=l),p=l.trigger=Ue(p||d!==!0&&d),Pt=p&&p._gsap&&p._gsap.stRevert,Pt&&(Pt=Pt(l)),d=d===!0?p:Ue(d),Ke(o)&&(o={targets:p,className:o}),d&&(b===!1||b===rt||(b=!b&&d.parentNode&&d.parentNode.style&&at(d.parentNode).display==="flex"?!1:ce),l.pin=d,Se=v.core.getCache(d),Se.spacer?Yt=Se.pinState:(U&&(U=Ue(U),U&&!U.nodeType&&(U=U.current||U.nativeElement),Se.spacerIsNative=!!U,U&&(Se.spacerState=Pr(U))),Se.spacer=me=U||Z.createElement("div"),me.classList.add("pin-spacer"),c&&me.classList.add("pin-spacer-"+c),Se.pinState=Yt=Pr(d)),n.force3D!==!1&&v.set(d,{force3D:!0}),l.spacer=me=Se.spacer,wn=at(d),Yn=wn[b+_.os2],te=v.getProperty(d),st=v.quickSetter(d,_.a,pe),ia(d,me,wn),_n=Pr(d)),ae){Ct=sn(ae)?bi(ae,vi):vi,u=Er("scroller-start",c,C,_,Ct,0),$e=Er("scroller-end",c,C,_,Ct,0,u),jt=u["offset"+_.op.d2];var jn=Ue(Vt(C,"content")||C);Be=this.markerStart=Er("start",c,jn,_,Ct,jt,0,k),Ge=this.markerEnd=Er("end",c,jn,_,Ct,jt,0,k),k&&(kn=v.quickSetter([Be,Ge],_.a,pe)),!Me&&!(wt.length&&Vt(C,"fixedMarkers")===!0)&&(bs(fe?G:C),v.set([u,$e],{force3D:!0}),hr=v.quickSetter(u,_.a,pe),xn=v.quickSetter($e,_.a,pe))}if(k){var O=k.vars.onUpdate,A=k.vars.onUpdateParams;k.eventCallback("onUpdate",function(){l.update(0,0,1),O&&O.apply(k,A||[])})}if(l.previous=function(){return M[M.indexOf(l)-1]},l.next=function(){return M[M.indexOf(l)+1]},l.revert=function(m,T){if(!T)return l.kill(!0);var w=m!==!1||!l.enabled,E=Oe;w!==l.isReverted&&(w&&(ft=Math.max(oe(),l.scroll.rec||0),Ie=l.progress,rn=a&&a.progress()),Be&&[Be,Ge,u,$e].forEach(function(he){return he.style.display=w?"none":"block"}),w&&(Oe=l,l.update(w)),d&&(!V||!l.isActive)&&(w?ws(d,me,Yt):ia(d,me,at(d),le)),w||l.update(w),Oe=E,l.isReverted=w)},l.refresh=function(m,T,w,E){if(!((Oe||!l.enabled)&&!T)){if(d&&m&&it){ye(t,"scrollEnd",wo);return}!je&&ue&&ue(l),Oe=l,Re.tween&&!w&&(Re.tween.kill(),Re.tween=0),I&&I.pause(),Y&&a&&a.revert({kill:!1}).invalidate(),l.isReverted||l.revert(!0,!0),l._subPinOffset=!1;var he=Jt(),F=Lt(),ne=k?k.duration():yt(C,_),Ce=se<=.01,J=0,q=E||0,B=sn(w)?w.end:n.end,ut=n.endTrigger||p,Q=sn(w)?w.start:n.start||(n.start===0||!p?0:d?"0 0":"0 100%"),Ve=l.pinnedContainer=n.pinnedContainer&&Ue(n.pinnedContainer,l),gt=p&&Math.max(0,M.indexOf(l))||0,we=gt,ke,Ee,an,br,Pe,de,mt,Jr,li,Hn,ht,Wn,vr;for(ae&&sn(w)&&(Wn=v.getProperty(u,_.p),vr=v.getProperty($e,_.p));we--;)de=M[we],de.end||de.refresh(0,1)||(Oe=l),mt=de.pin,mt&&(mt===p||mt===d||mt===Ve)&&!de.isReverted&&(Hn||(Hn=[]),Hn.unshift(de),de.revert(!0,!0)),de!==M[we]&&(gt--,we--);for(We(Q)&&(Q=Q(l)),Q=pi(Q,"start",l),H=wi(Q,p,he,_,oe(),Be,u,l,F,ie,Me,ne,k,l._startClamp&&"_startClamp")||(d?-.001:0),We(B)&&(B=B(l)),Ke(B)&&!B.indexOf("+=")&&(~B.indexOf(" ")?B=(Ke(Q)?Q.split(" ")[0]:"")+B:(J=Ir(B.substr(2),he),B=Ke(Q)?Q:(k?v.utils.mapRange(0,k.duration(),k.scrollTrigger.start,k.scrollTrigger.end,H):H)+J,ut=p)),B=pi(B,"end",l),ee=Math.max(H,wi(B||(ut?"100% 0":ne),ut,he,_,oe()+J,Ge,$e,l,F,ie,Me,ne,k,l._endClamp&&"_endClamp"))||-.001,J=0,we=gt;we--;)de=M[we],mt=de.pin,mt&&de.start-de._pinPush<=H&&!k&&de.end>0&&(ke=de.end-(l._startClamp?Math.max(0,de.start):de.start),(mt===p&&de.start-de._pinPush<H||mt===Ve)&&isNaN(Q)&&(J+=ke*(1-de.progress)),mt===d&&(q+=ke));if(H+=J,ee+=J,l._startClamp&&(l._startClamp+=J),l._endClamp&&!je&&(l._endClamp=ee||-.001,ee=Math.min(ee,yt(C,_))),se=ee-H||(H-=.01)&&.001,Ce&&(Ie=v.utils.clamp(0,1,v.utils.normalize(H,ee,ft))),l._pinPush=q,Be&&J&&(ke={},ke[_.a]="+="+J,Ve&&(ke[_.p]="-="+oe()),v.set([Be,Ge],ke)),d&&!(xa&&l.end>=yt(C,_)))ke=at(d),br=_===ge,an=oe(),nt=parseFloat(te(_.a))+q,!ne&&ee>1&&(ht=(fe?Z.scrollingElement||pt:C).style,ht={style:ht,value:ht["overflow"+_.a.toUpperCase()]},fe&&at(G)["overflow"+_.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+_.a.toUpperCase()]="scroll")),ia(d,me,ke),_n=Pr(d),Ee=Tt(d,!0),Jr=Me&&qt(C,br?He:ge)(),b?(le=[b+_.os2,se+q+pe],le.t=me,we=b===ce?Xr(d,_)+se+q:0,we&&(le.push(_.d,we+pe),me.style.flexBasis!=="auto"&&(me.style.flexBasis=we+pe)),In(le),Ve&&M.forEach(function(Xn){Xn.pin===Ve&&Xn.vars.pinSpacing!==!1&&(Xn._subPinOffset=!0)}),Me&&oe(ft)):(we=Xr(d,_),we&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=we+pe)),Me&&(Pe={top:Ee.top+(br?an-H:Jr)+pe,left:Ee.left+(br?Jr:an-H)+pe,boxSizing:"border-box",position:"fixed"},Pe[fn]=Pe["max"+Dn]=Math.ceil(Ee.width)+pe,Pe[un]=Pe["max"+$a]=Math.ceil(Ee.height)+pe,Pe[rt]=Pe[rt+ir]=Pe[rt+rr]=Pe[rt+or]=Pe[rt+ar]="0",Pe[ce]=ke[ce],Pe[ce+ir]=ke[ce+ir],Pe[ce+rr]=ke[ce+rr],Pe[ce+or]=ke[ce+or],Pe[ce+ar]=ke[ce+ar],en=As(Yt,Pe,V),je&&oe(0)),a?(li=a._initted,ea(1),a.render(a.duration(),!0,!0),Et=te(_.a)-nt+se+q,Ht=Math.abs(se-Et)>1,Me&&Ht&&en.splice(en.length-2,2),a.render(0,!0,!0),li||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),ea(0)):Et=se,ht&&(ht.value?ht.style["overflow"+_.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+_.a));else if(p&&oe()&&!k)for(Ee=p.parentNode;Ee&&Ee!==G;)Ee._pinOffset&&(H-=Ee._pinOffset,ee-=Ee._pinOffset),Ee=Ee.parentNode;Hn&&Hn.forEach(function(Xn){return Xn.revert(!1,!0)}),l.start=H,l.end=ee,De=ot=je?ft:oe(),!k&&!je&&(De<ft&&oe(ft),l.scroll.rec=0),l.revert(!1,!0),St=Te(),ct&&(tt=-1,ct.restart(!0)),Oe=0,a&&xe&&(a._initted||rn)&&a.progress()!==rn&&a.progress(rn||0,!0).render(a.time(),!0,!0),(Ce||Ie!==l.progress||k||Y)&&(a&&!xe&&a.totalProgress(k&&H<-.001&&!Ie?v.utils.normalize(H,ee,0):Ie,!0),l.progress=Ce||(De-H)/se===Ie?0:Ie),d&&b&&(me._pinOffset=Math.round(l.progress*Et)),I&&I.invalidate(),isNaN(Wn)||(Wn-=v.getProperty(u,_.p),vr-=v.getProperty($e,_.p),Or(u,_,Wn),Or(Be,_,Wn-(E||0)),Or($e,_,vr),Or(Ge,_,vr-(E||0))),Ce&&!je&&l.update(),g&&!je&&!zt&&(zt=!0,g(l),zt=!1)}},l.getVelocity=function(){return(oe()-ot)/(Te()-Gn)*1e3||0},l.endAnimation=function(){Un(l.callbackAnimation),a&&(I?I.progress(1):a.paused()?xe||Un(a,l.direction<0,1):Un(a,a.reversed()))},l.labelToScroll=function(m){return a&&a.labels&&(H||l.refresh()||H)+a.labels[m]/a.duration()*se||0},l.getTrailing=function(m){var T=M.indexOf(l),w=l.direction>0?M.slice(0,T).reverse():M.slice(T+1);return(Ke(m)?w.filter(function(E){return E.vars.preventOverlaps===m}):w).filter(function(E){return l.direction>0?E.end<=H:E.start>=ee})},l.update=function(m,T,w){if(!(k&&!w&&!m)){var E=je===!0?ft:l.scroll(),he=m?0:(E-H)/se,F=he<0?0:he>1?1:he||0,ne=l.progress,Ce,J,q,B,ut,Q,Ve,gt;if(T&&(ot=De,De=k?oe():E,x&&(tn=Wt,Wt=a&&!xe?a.totalProgress():F)),S&&d&&!Oe&&!wr&&it&&(!F&&H<E+(E-ot)/(Te()-Gn)*S?F=1e-4:F===1&&ee>E+(E-ot)/(Te()-Gn)*S&&(F=.9999)),F!==ne&&l.enabled){if(Ce=l.isActive=!!F&&F<1,J=!!ne&&ne<1,Q=Ce!==J,ut=Q||!!F!=!!ne,l.direction=F>ne?1:-1,l.progress=F,ut&&!Oe&&(q=F&&!ne?0:F===1?1:ne===1?2:3,xe&&(B=!Q&&X[q+1]!=="none"&&X[q+1]||X[q],gt=a&&(B==="complete"||B==="reset"||B in a))),Xe&&(Q||gt)&&(gt||h||!a)&&(We(Xe)?Xe(l):l.getTrailing(Xe).forEach(function(an){return an.endAnimation()})),xe||(I&&!Oe&&!wr?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",F,a._tTime/a._tDur):(I.vars.totalProgress=F,I.invalidate().restart())):a&&a.totalProgress(F,!!(Oe&&(St||m)))),d){if(m&&b&&(me.style[b+_.os2]=Yn),!Me)st(Vn(nt+Et*F));else if(ut){if(Ve=!m&&F>ne&&ee+1>E&&E+1>=yt(C,_),V)if(!m&&(Ce||Ve)){var we=Tt(d,!0),ke=E-H;ki(d,G,we.top+(_===ge?ke:0)+pe,we.left+(_===ge?0:ke)+pe)}else ki(d,me);In(Ce||Ve?en:_n),Ht&&F<1&&Ce||st(nt+(F===1&&!Ve?Et:0))}}x&&!Re.tween&&!Oe&&!wr&&ct.restart(!0),o&&(Q||j&&F&&(F<1||!ta))&&fr(o.targets).forEach(function(an){return an.classList[Ce||j?"add":"remove"](o.className)}),s&&!xe&&!m&&s(l),ut&&!Oe?(xe&&(gt&&(B==="complete"?a.pause().totalProgress(1):B==="reset"?a.restart(!0).pause():B==="restart"?a.restart(!0):a[B]()),s&&s(l)),(Q||!ta)&&(f&&Q&&ra(l,f),Ne[q]&&ra(l,Ne[q]),j&&(F===1?l.kill(!1,1):Ne[q]=0),Q||(q=F===1?1:3,Ne[q]&&ra(l,Ne[q]))),_e&&!Ce&&Math.abs(l.getVelocity())>(qn(_e)?_e:2500)&&(Un(l.callbackAnimation),I?I.progress(1):Un(a,B==="reverse"?1:!F,1))):xe&&s&&!Oe&&s(l)}if(xn){var Ee=k?E/k.duration()*(k._caScrollDist||0):E;hr(Ee+(u._isFlipped?1:0)),xn(Ee)}kn&&kn(-E/k.duration()*(k._caScrollDist||0))}},l.enable=function(m,T){l.enabled||(l.enabled=!0,ye(C,"resize",Kn),fe||ye(C,"scroll",Sn),ue&&ye(t,"refreshInit",ue),m!==!1&&(l.progress=Ie=0,De=ot=tt=oe()),T!==!1&&l.refresh())},l.getTween=function(m){return m&&Re?Re.tween:I},l.setPositions=function(m,T,w,E){if(k){var he=k.scrollTrigger,F=k.duration(),ne=he.end-he.start;m=he.start+ne*m/F,T=he.start+ne*T/F}l.refresh(!1,!1,{start:gi(m,w&&!!l._startClamp),end:gi(T,w&&!!l._endClamp)},E),l.update()},l.adjustPinSpacing=function(m){if(le&&m){var T=le.indexOf(_.d)+1;le[T]=parseFloat(le[T])+m+pe,le[1]=parseFloat(le[1])+m+pe,In(le)}},l.disable=function(m,T){if(l.enabled&&(m!==!1&&l.revert(!0,!0),l.enabled=l.isActive=!1,T||I&&I.pause(),ft=0,Se&&(Se.uncache=1),ue&&ve(t,"refreshInit",ue),ct&&(ct.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!fe)){for(var w=M.length;w--;)if(M[w].scroller===C&&M[w]!==l)return;ve(C,"resize",Kn),fe||ve(C,"scroll",Sn)}},l.kill=function(m,T){l.disable(m,T),I&&!T&&I.kill(),c&&delete wa[c];var w=M.indexOf(l);w>=0&&M.splice(w,1),w===Ye&&Dr>0&&Ye--,w=0,M.forEach(function(E){return E.scroller===l.scroller&&(w=1)}),w||je||(l.scroll.rec=0),a&&(a.scrollTrigger=null,m&&a.revert({kill:!1}),T||a.kill()),Be&&[Be,Ge,u,$e].forEach(function(E){return E.parentNode&&E.parentNode.removeChild(E)}),sr===l&&(sr=0),d&&(Se&&(Se.uncache=1),w=0,M.forEach(function(E){return E.pin===d&&w++}),w||(Se.spacer=0)),n.onKill&&n.onKill(l)},M.push(l),l.enable(!1,!1),Pt&&Pt(l),a&&a.add&&!se){var W=l.update;l.update=function(){l.update=W,H||ee||l.refresh()},v.delayedCall(.01,l.update),se=.01,H=ee=0}else l.refresh();d&&xs()},t.register=function(n){return Cn||(v=n||ho(),mo()&&window.document&&t.enable(),Cn=$n),Cn},t.defaults=function(n){if(n)for(var a in n)Cr[a]=n[a];return Cr},t.disable=function(n,a){$n=0,M.forEach(function(s){return s[a?"kill":"disable"](n)}),ve(z,"wheel",Sn),ve(Z,"scroll",Sn),clearInterval(xr),ve(Z,"touchcancel",bt),ve(G,"touchstart",bt),Ar(ve,Z,"pointerdown,touchstart,mousedown",mi),Ar(ve,Z,"pointerup,touchend,mouseup",hi),Hr.kill(),kr(ve);for(var i=0;i<D.length;i+=3)Sr(ve,D[i],D[i+1]),Sr(ve,D[i],D[i+2])},t.enable=function(){if(z=window,Z=document,pt=Z.documentElement,G=Z.body,v&&(fr=v.utils.toArray,nr=v.utils.clamp,_a=v.core.context||bt,ea=v.core.suppressOverwrites||bt,Xa=z.history.scrollRestoration||"auto",ka=z.pageYOffset,v.core.globals("ScrollTrigger",t),G)){$n=1,Nn=document.createElement("div"),Nn.style.height="100vh",Nn.style.position="absolute",So(),gs(),re.register(v),t.isTouch=re.isTouch,Bt=re.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ya=re.isTouch===1,ye(z,"wheel",Sn),co=[z,Z,pt,G],v.matchMedia?(t.matchMedia=function(c){var f=v.matchMedia(),g;for(g in c)f.add(g,c[g]);return f},v.addEventListener("matchMediaInit",function(){return qa()}),v.addEventListener("matchMediaRevert",function(){return ko()}),v.addEventListener("matchMedia",function(){cn(0,1),bn("matchMedia")}),v.matchMedia("(orientation: portrait)",function(){return aa(),aa})):console.warn("Requires GSAP 3.11.0 or later"),aa(),ye(Z,"scroll",Sn);var n=G.style,a=n.borderTopStyle,i=v.core.Animation.prototype,s,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=Tt(G),ge.m=Math.round(s.top+ge.sc())||0,He.m=Math.round(s.left+He.sc())||0,a?n.borderTopStyle=a:n.removeProperty("border-top-style"),xr=setInterval(yi,250),v.delayedCall(.5,function(){return wr=0}),ye(Z,"touchcancel",bt),ye(G,"touchstart",bt),Ar(ye,Z,"pointerdown,touchstart,mousedown",mi),Ar(ye,Z,"pointerup,touchend,mouseup",hi),va=v.utils.checkPrefix("transform"),Lr.push(va),Cn=Te(),Hr=v.delayedCall(.2,cn).pause(),En=[Z,"visibilitychange",function(){var c=z.innerWidth,f=z.innerHeight;Z.hidden?(ui=c,di=f):(ui!==c||di!==f)&&Kn()},Z,"DOMContentLoaded",cn,z,"load",cn,z,"resize",Kn],kr(ye),M.forEach(function(c){return c.enable(0,1)}),o=0;o<D.length;o+=3)Sr(ve,D[o],D[o+1]),Sr(ve,D[o],D[o+2])}},t.config=function(n){"limitCallbacks"in n&&(ta=!!n.limitCallbacks);var a=n.syncInterval;a&&clearInterval(xr)||(xr=a)&&setInterval(yi,a),"ignoreMobileResize"in n&&(ya=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(kr(ve)||kr(ye,n.autoRefreshEvents||"none"),uo=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,a){var i=Ue(n),s=D.indexOf(i),o=mn(i);~s&&D.splice(s,o?6:2),a&&(o?wt.unshift(z,a,G,a,pt,a):wt.unshift(i,a))},t.clearMatchMedia=function(n){M.forEach(function(a){return a._ctx&&a._ctx.query===n&&a._ctx.kill(!0,!0)})},t.isInViewport=function(n,a,i){var s=(Ke(n)?Ue(n):n).getBoundingClientRect(),o=s[i?fn:un]*a||0;return i?s.right-o>0&&s.left+o<z.innerWidth:s.bottom-o>0&&s.top+o<z.innerHeight},t.positionInViewport=function(n,a,i){Ke(n)&&(n=Ue(n));var s=n.getBoundingClientRect(),o=s[i?fn:un],c=a==null?o/2:a in Br?Br[a]*o:~a.indexOf("%")?parseFloat(a)*o/100:parseFloat(a)||0;return i?(s.left+c)/z.innerWidth:(s.top+c)/z.innerHeight},t.killAll=function(n){if(M.slice(0).forEach(function(i){return i.vars.id!=="ScrollSmoother"&&i.kill()}),n!==!0){var a=hn.killAll||[];hn={},a.forEach(function(i){return i()})}},t}();L.version="3.12.5";L.saveStyles=function(t){return t?fr(t).forEach(function(e){if(e&&e.style){var r=qe.indexOf(e);r>=0&&qe.splice(r,5),qe.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),v.core.getCache(e),_a())}}):qe};L.revert=function(t,e){return qa(!t,e)};L.create=function(t,e){return new L(t,e)};L.refresh=function(t){return t?Kn():(Cn||L.register())&&cn(!0)};L.update=function(t){return++D.cache&&Nt(t===!0?2:0)};L.clearScrollMemory=Ao;L.maxScroll=function(t,e){return yt(t,e?He:ge)};L.getScrollFunc=function(t,e){return qt(Ue(t),e?He:ge)};L.getById=function(t){return wa[t]};L.getAll=function(){return M.filter(function(t){return t.vars.id!=="ScrollSmoother"})};L.isScrolling=function(){return!!it};L.snapDirectional=Va;L.addEventListener=function(t,e){var r=hn[t]||(hn[t]=[]);~r.indexOf(e)||r.push(e)};L.removeEventListener=function(t,e){var r=hn[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};L.batch=function(t,e){var r=[],n={},a=e.interval||.016,i=e.batchMax||1e9,s=function(f,g){var h=[],p=[],d=v.delayedCall(a,function(){g(h,p),h=[],p=[]}).pause();return function(b){h.length||d.restart(!0),h.push(b.trigger),p.push(b),i<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&We(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return We(i)&&(i=i(),ye(L,"refresh",function(){return i=e.batchMax()})),fr(t).forEach(function(c){var f={};for(o in n)f[o]=n[o];f.trigger=c,r.push(L.create(f))}),r};var Si=function(e,r,n,a){return r>a?e(a):r<0&&e(0),n>a?(a-r)/(n-r):n<0?r/(r-n):1},oa=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(re.isTouch?" pinch-zoom":""):"none",e===pt&&t(G,r)},Tr={auto:1,scroll:1},Cs=function(e){var r=e.event,n=e.target,a=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,s=i._gsap||v.core.getCache(i),o=Te(),c;if(!s._isScrollT||o-s._isScrollT>2e3){for(;i&&i!==G&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Tr[(c=at(i)).overflowY]||Tr[c.overflowX]));)i=i.parentNode;s._isScroll=i&&i!==n&&!mn(i)&&(Tr[(c=at(i)).overflowY]||Tr[c.overflowX]),s._isScrollT=o}(s._isScroll||a==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},Eo=function(e,r,n,a){return re.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:a=a&&Cs,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return n&&ye(Z,re.eventTypes[0],Ei,!1,!0)},onDisable:function(){return ve(Z,re.eventTypes[0],Ei,!0)}})},Es=/(input|label|select|textarea)/i,Ci,Ei=function(e){var r=Es.test(e.target.tagName);(r||Ci)&&(e._gsapAllow=!0,Ci=r)},Ps=function(e){sn(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,a=r.momentum,i=r.allowNestedScroll,s=r.onRelease,o,c,f=Ue(e.target)||pt,g=v.core.globals().ScrollSmoother,h=g&&g.get(),p=Bt&&(e.content&&Ue(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=qt(f,ge),b=qt(f,He),Y=1,S=(re.isTouch&&z.visualViewport?z.visualViewport.scale*z.visualViewport.width:z.outerWidth)/z.innerWidth,N=0,P=We(a)?function(){return a(o)}:function(){return a||2.8},j,x,V=Eo(f,e.type,!0,i),U=function(){return x=!1},k=bt,_e=bt,Xe=function(){c=yt(f,ge),_e=nr(Bt?1:0,c),n&&(k=nr(0,yt(f,He))),j=dn},_=function(){p._gsap.y=Vn(parseFloat(p._gsap.y)+d.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},xe=function(){if(x){requestAnimationFrame(U);var ae=Vn(o.deltaY/2),ie=_e(d.v-ae);if(p&&ie!==d.v+d.offset){d.offset=ie-d.v;var l=Vn((parseFloat(p&&p._gsap.y)||0)-d.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+l+", 0, 1)",p._gsap.y=l+"px",d.cacheID=D.cache,Nt()}return!0}d.offset&&_(),x=!0},C,At,fe,Me,Ne=function(){Xe(),C.isActive()&&C.vars.scrollY>c&&(d()>c?C.progress(1)&&d(c):C.resetTo("scrollY",c))};return p&&v.set(p,{y:"+=0"}),e.ignoreCheck=function(X){return Bt&&X.type==="touchmove"&&xe()||Y>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=Y;Y=Vn((z.visualViewport&&z.visualViewport.scale||1)/S),C.pause(),X!==Y&&oa(f,Y>1.01?!0:n?!1:"x"),At=b(),fe=d(),Xe(),j=dn},e.onRelease=e.onGestureStart=function(X,ae){if(d.offset&&_(),!ae)Me.restart(!0);else{D.cache++;var ie=P(),l,ue;n&&(l=b(),ue=l+ie*.05*-X.velocityX/.227,ie*=Si(b,l,ue,yt(f,He)),C.vars.scrollX=k(ue)),l=d(),ue=l+ie*.05*-X.velocityY/.227,ie*=Si(d,l,ue,yt(f,ge)),C.vars.scrollY=_e(ue),C.invalidate().duration(ie).play(.01),(Bt&&C.vars.scrollY>=c||l>=c-1)&&v.to({},{onUpdate:Ne,duration:ie})}s&&s(X)},e.onWheel=function(){C._ts&&C.pause(),Te()-N>1e3&&(j=0,N=Te())},e.onChange=function(X,ae,ie,l,ue){if(dn!==j&&Xe(),ae&&n&&b(k(l[2]===ae?At+(X.startX-X.x):b()+ae-l[1])),ie){d.offset&&_();var Jt=ue[2]===ie,Lt=Jt?fe+X.startY-X.y:d()+ie-ue[1],tt=_e(Lt);Jt&&Lt!==tt&&(fe+=tt-Lt),d(tt)}(ie||ae)&&Nt()},e.onEnable=function(){oa(f,n?!1:"x"),L.addEventListener("refresh",Ne),ye(z,"resize",Ne),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=b.smooth=!1),V.enable()},e.onDisable=function(){oa(f,!0),ve(z,"resize",Ne),L.removeEventListener("refresh",Ne),V.kill()},e.lockAxis=e.lockAxis!==!1,o=new re(e),o.iOS=Bt,Bt&&!d()&&d(1),Bt&&v.ticker.add(bt),Me=o._dc,C=v.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Co(d,d(),function(){return C.pause()})},onUpdate:Nt,onComplete:Me.vars.onComplete}),o};L.sort=function(t){return M.sort(t||function(e,r){return(e.vars.refreshPriority||0)*-1e6+e.start-(r.start+(r.vars.refreshPriority||0)*-1e6)})};L.observe=function(t){return new re(t)};L.normalizeScroll=function(t){if(typeof t>"u")return ze;if(t===!0&&ze)return ze.enable();if(t===!1){ze&&ze.kill(),ze=t;return}var e=t instanceof re?t:Ps(t);return ze&&ze.target===e.target&&ze.kill(),mn(e.target)&&(ze=e),e};L.core={_getVelocityProp:ba,_inputObserver:Eo,_scrollers:D,_proxies:wt,bridge:{ss:function(){it||bn("scrollStart"),it=Te()},ref:function(){return Oe}}};ho()&&v.registerPlugin(L);const Pi=()=>{};let Ka={},Po={},Oo=null,To={mark:Pi,measure:Pi};try{typeof window<"u"&&(Ka=window),typeof document<"u"&&(Po=document),typeof MutationObserver<"u"&&(Oo=MutationObserver),typeof performance<"u"&&(To=performance)}catch{}const{userAgent:Oi=""}=Ka.navigator||{},Kt=Ka,$=Po,Ti=Oo,Mr=To;Kt.document;const Dt=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",Mo=~Oi.indexOf("MSIE")||~Oi.indexOf("Trident/");var K="classic",No="duotone",Ze="sharp",Je="sharp-duotone",Os=[K,No,Ze,Je],Ts={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Mi={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ms=["kit"],Ns=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Is=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Rs={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ds={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Ls={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Fs={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},zs={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Ys={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Io={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},js=["solid","regular","light","thin","duotone","brands"],Ro=[1,2,3,4,5,6,7,8,9,10],Hs=Ro.concat([11,12,13,14,15,16,17,18,19,20]),Qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ws=[...Object.keys(Fs),...js,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qn.GROUP,Qn.SWAP_OPACITY,Qn.PRIMARY,Qn.SECONDARY].concat(Ro.map(t=>"".concat(t,"x"))).concat(Hs.map(t=>"w-".concat(t))),Xs={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Bs={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Us={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ni={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const It="___FONT_AWESOME___",Sa=16,Do="fa",Lo="svg-inline--fa",vn="data-fa-i2svg",Ca="data-fa-pseudo-element",Gs="data-fa-pseudo-element-pending",Qa="data-prefix",Za="data-icon",Ii="fontawesome-i2svg",$s="async",Vs=["HTML","HEAD","STYLE","SCRIPT"],Fo=(()=>{try{return!0}catch{return!1}})(),zo=[K,Ze,Je];function gr(t){return new Proxy(t,{get(e,r){return r in e?e[r]:e[K]}})}const Yo={...Io};Yo[K]={...Io[K],...Mi.kit,...Mi["kit-duotone"]};const pn=gr(Yo),Ea={...Ys};Ea[K]={...Ea[K],...Ni.kit,...Ni["kit-duotone"]};const dr=gr(Ea),Pa={...zs};Pa[K]={...Pa[K],...Us.kit};const gn=gr(Pa),Oa={...Ls};Oa[K]={...Oa[K],...Bs.kit};const qs=gr(Oa),Ks=Ns,jo="fa-layers-text",Qs=Is,Zs={...Ts};gr(Zs);const Js=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],sa=Qn,Ln=new Set;Object.keys(dr[K]).map(Ln.add.bind(Ln));Object.keys(dr[Ze]).map(Ln.add.bind(Ln));Object.keys(dr[Je]).map(Ln.add.bind(Ln));const el=[...Ms,...Ws],lr=Kt.FontAwesomeConfig||{};function tl(t){var e=$.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function nl(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$&&typeof $.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[r,n]=e;const a=nl(tl(r));a!=null&&(lr[n]=a)});const Ho={styleDefault:"solid",familyDefault:"classic",cssPrefix:Do,replacementClass:Lo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lr.familyPrefix&&(lr.cssPrefix=lr.familyPrefix);const Fn={...Ho,...lr};Fn.autoReplaceSvg||(Fn.observeMutations=!1);const y={};Object.keys(Ho).forEach(t=>{Object.defineProperty(y,t,{enumerable:!0,set:function(e){Fn[t]=e,cr.forEach(r=>r(y))},get:function(){return Fn[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){Fn.cssPrefix=t,cr.forEach(e=>e(y))},get:function(){return Fn.cssPrefix}});Kt.FontAwesomeConfig=y;const cr=[];function rl(t){return cr.push(t),()=>{cr.splice(cr.indexOf(t),1)}}const Xt=Sa,_t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function al(t){if(!t||!Dt)return;const e=$.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const r=$.head.childNodes;let n=null;for(let a=r.length-1;a>-1;a--){const i=r[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=i)}return $.head.insertBefore(e,n),t}const il="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pr(){let t=12,e="";for(;t-- >0;)e+=il[Math.random()*62|0];return e}function zn(t){const e=[];for(let r=(t||[]).length>>>0;r--;)e[r]=t[r];return e}function Ja(t){return t.classList?zn(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Wo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ol(t){return Object.keys(t||{}).reduce((e,r)=>e+"".concat(r,'="').concat(Wo(t[r]),'" '),"").trim()}function qr(t){return Object.keys(t||{}).reduce((e,r)=>e+"".concat(r,": ").concat(t[r].trim(),";"),"")}function ei(t){return t.size!==_t.size||t.x!==_t.x||t.y!==_t.y||t.rotate!==_t.rotate||t.flipX||t.flipY}function sl(t){let{transform:e,containerWidth:r,iconWidth:n}=t;const a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:c,path:f}}function ll(t){let{transform:e,width:r=Sa,height:n=Sa,startCentered:a=!1}=t,i="";return a&&Mo?i+="translate(".concat(e.x/Xt-r/2,"em, ").concat(e.y/Xt-n/2,"em) "):a?i+="translate(calc(-50% + ".concat(e.x/Xt,"em), calc(-50% + ").concat(e.y/Xt,"em)) "):i+="translate(".concat(e.x/Xt,"em, ").concat(e.y/Xt,"em) "),i+="scale(".concat(e.size/Xt*(e.flipX?-1:1),", ").concat(e.size/Xt*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var cl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xo(){const t=Do,e=Lo,r=y.cssPrefix,n=y.replacementClass;let a=cl;if(r!==t||n!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(o,".".concat(n))}return a}let Ri=!1;function la(){y.autoAddCss&&!Ri&&(al(Xo()),Ri=!0)}var fl={mixout(){return{dom:{css:Xo,insertCss:la}}},hooks(){return{beforeDOMElementCreation(){la()},beforeI2svg(){la()}}}};const Rt=Kt||{};Rt[It]||(Rt[It]={});Rt[It].styles||(Rt[It].styles={});Rt[It].hooks||(Rt[It].hooks={});Rt[It].shims||(Rt[It].shims=[]);var xt=Rt[It];const Bo=[],Uo=function(){$.removeEventListener("DOMContentLoaded",Uo),Ur=1,Bo.map(t=>t())};let Ur=!1;Dt&&(Ur=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),Ur||$.addEventListener("DOMContentLoaded",Uo));function ul(t){Dt&&(Ur?setTimeout(t,0):Bo.push(t))}function mr(t){const{tag:e,attributes:r={},children:n=[]}=t;return typeof t=="string"?Wo(t):"<".concat(e," ").concat(ol(r),">").concat(n.map(mr).join(""),"</").concat(e,">")}function Di(t,e,r){if(t&&t[e]&&t[e][r])return{prefix:e,iconName:r,icon:t[e][r]}}var ca=function(e,r,n,a){var i=Object.keys(e),s=i.length,o=r,c,f,g;for(n===void 0?(c=1,g=e[i[0]]):(c=0,g=n);c<s;c++)f=i[c],g=o(g,e[f],f,e);return g};function dl(t){const e=[];let r=0;const n=t.length;for(;r<n;){const a=t.charCodeAt(r++);if(a>=55296&&a<=56319&&r<n){const i=t.charCodeAt(r++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),r--)}else e.push(a)}return e}function Ta(t){const e=dl(t);return e.length===1?e[0].toString(16):null}function pl(t,e){const r=t.length;let n=t.charCodeAt(e),a;return n>=55296&&n<=56319&&r>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function Li(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return!!n.icon?e[n.iconName]=n.icon:e[r]=n,e},{})}function Ma(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:n=!1}=r,a=Li(e);typeof xt.hooks.addPack=="function"&&!n?xt.hooks.addPack(t,Li(e)):xt.styles[t]={...xt.styles[t]||{},...a},t==="fas"&&Ma("fa",e)}const{styles:ln,shims:gl}=xt,ml={[K]:Object.values(gn[K]),[Ze]:Object.values(gn[Ze]),[Je]:Object.values(gn[Je])};let ti=null,Go={},$o={},Vo={},qo={},Ko={};const hl={[K]:Object.keys(pn[K]),[Ze]:Object.keys(pn[Ze]),[Je]:Object.keys(pn[Je])};function bl(t){return~el.indexOf(t)}function vl(t,e){const r=e.split("-"),n=r[0],a=r.slice(1).join("-");return n===t&&a!==""&&!bl(a)?a:null}const Qo=()=>{const t=n=>ca(ln,(a,i,s)=>(a[s]=ca(i,n,{}),a),{});Go=t((n,a,i)=>(a[3]&&(n[a[3]]=i),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{n[o.toString(16)]=i}),n)),$o=t((n,a,i)=>(n[i]=i,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{n[o]=i}),n)),Ko=t((n,a,i)=>{const s=a[2];return n[i]=i,s.forEach(o=>{n[o]=i}),n});const e="far"in ln||y.autoFetchSvg,r=ca(gl,(n,a)=>{const i=a[0];let s=a[1];const o=a[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});Vo=r.names,qo=r.unicodes,ti=Kr(y.styleDefault,{family:y.familyDefault})};rl(t=>{ti=Kr(t.styleDefault,{family:y.familyDefault})});Qo();function ni(t,e){return(Go[t]||{})[e]}function yl(t,e){return($o[t]||{})[e]}function $t(t,e){return(Ko[t]||{})[e]}function Zo(t){return Vo[t]||{prefix:null,iconName:null}}function _l(t){const e=qo[t],r=ni("fas",t);return e||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Qt(){return ti}const ri=()=>({prefix:null,iconName:null,rest:[]});function Kr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:r=K}=e,n=pn[r][t],a=dr[r][t]||dr[r][n],i=t in xt.styles?t:null;return a||i||null}const xl={[K]:Object.keys(gn[K]),[Ze]:Object.keys(gn[Ze]),[Je]:Object.keys(gn[Je])};function Qr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:r=!1}=e,n={[K]:"".concat(y.cssPrefix,"-").concat(K),[Ze]:"".concat(y.cssPrefix,"-").concat(Ze),[Je]:"".concat(y.cssPrefix,"-").concat(Je)};let a=null,i=K;const s=Os.filter(c=>c!==No);s.forEach(c=>{(t.includes(n[c])||t.some(f=>xl[c].includes(f)))&&(i=c)});const o=t.reduce((c,f)=>{const g=vl(y.cssPrefix,f);if(ln[f]?(f=ml[i].includes(f)?qs[i][f]:f,a=f,c.prefix=f):hl[i].indexOf(f)>-1?(a=f,c.prefix=Kr(f,{family:i})):g?c.iconName=g:f!==y.replacementClass&&!s.some(h=>f===n[h])&&c.rest.push(f),!r&&c.prefix&&c.iconName){const h=a==="fa"?Zo(c.iconName):{},p=$t(c.prefix,c.iconName);h.prefix&&(a=null),c.iconName=h.iconName||p||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!ln.far&&ln.fas&&!y.autoFetchSvg&&(c.prefix="fas")}return c},ri());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===Ze&&(ln.fass||y.autoFetchSvg)&&(o.prefix="fass",o.iconName=$t(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===Je&&(ln.fasds||y.autoFetchSvg)&&(o.prefix="fasds",o.iconName=$t(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||a==="fa")&&(o.prefix=Qt()||"fas"),o}class wl{constructor(){this.definitions={}}add(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];const a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},Ma(i,a[i]);const s=gn[K][i];s&&Ma(s,a[i]),Qo()})}reset(){this.definitions={}}_pullDefinitions(e,r){const n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(a=>{const{prefix:i,iconName:s,icon:o}=n[a],c=o[2];e[i]||(e[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[i][f]=o)}),e[i][s]=o}),e}}let Fi=[],On={};const Rn={},kl=Object.keys(Rn);function Al(t,e){let{mixoutsTo:r}=e;return Fi=t,On={},Object.keys(Rn).forEach(n=>{kl.indexOf(n)===-1&&delete Rn[n]}),Fi.forEach(n=>{const a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(r[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(s=>{r[i]||(r[i]={}),r[i][s]=a[i][s]})}),n.hooks){const i=n.hooks();Object.keys(i).forEach(s=>{On[s]||(On[s]=[]),On[s].push(i[s])})}n.provides&&n.provides(Rn)}),r}function Na(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return(On[t]||[]).forEach(s=>{e=s.apply(null,[e,...n])}),e}function yn(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];(On[t]||[]).forEach(i=>{i.apply(null,r)})}function Zt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Rn[t]?Rn[t].apply(null,e):void 0}function Ia(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const r=t.prefix||Qt();if(e)return e=$t(r,e)||e,Di(Jo.definitions,r,e)||Di(xt.styles,r,e)}const Jo=new wl,Sl=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,yn("noAuto")},Cl={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dt?(yn("beforeI2svg",t),Zt("pseudoElements2svg",t),Zt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,ul(()=>{Pl({autoReplaceSvgRoot:e}),yn("watch",t)})}},El={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Kr(t[0]);return{prefix:r,iconName:$t(r,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(Ks))){const e=Qr(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Qt(),iconName:$t(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Qt();return{prefix:e,iconName:$t(e,t)||t}}}},et={noAuto:Sl,config:y,dom:Cl,parse:El,library:Jo,findIconDefinition:Ia,toHtml:mr},Pl=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$}=t;(Object.keys(xt.styles).length>0||y.autoFetchSvg)&&Dt&&y.autoReplaceSvg&&et.dom.i2svg({node:e})};function Zr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(r=>mr(r))}}),Object.defineProperty(t,"node",{get:function(){if(!Dt)return;const r=$.createElement("div");return r.innerHTML=t.html,r.children}}),t}function Ol(t){let{children:e,main:r,mask:n,attributes:a,styles:i,transform:s}=t;if(ei(s)&&r.found&&!n.found){const{width:o,height:c}=r,f={x:o/c/2,y:.5};a.style=qr({...i,"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function Tl(t){let{prefix:e,iconName:r,children:n,attributes:a,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:s},children:n}]}]}function ai(t){const{icons:{main:e,mask:r},prefix:n,iconName:a,transform:i,symbol:s,title:o,maskId:c,titleId:f,extra:g,watchable:h=!1}=t,{width:p,height:d}=r.found?r:e,b=n==="fak",Y=[y.replacementClass,a?"".concat(y.cssPrefix,"-").concat(a):""].filter(V=>g.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(g.classes).join(" ");let S={children:[],attributes:{...g.attributes,"data-prefix":n,"data-icon":a,class:Y,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(d)}};const N=b&&!~g.classes.indexOf("fa-fw")?{width:"".concat(p/d*16*.0625,"em")}:{};h&&(S.attributes[vn]=""),o&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(f||pr())},children:[o]}),delete S.attributes.title);const P={...S,prefix:n,iconName:a,main:e,mask:r,maskId:c,transform:i,symbol:s,styles:{...N,...g.styles}},{children:j,attributes:x}=r.found&&e.found?Zt("generateAbstractMask",P)||{children:[],attributes:{}}:Zt("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=j,P.attributes=x,s?Tl(P):Ol(P)}function zi(t){const{content:e,width:r,height:n,transform:a,title:i,extra:s,watchable:o=!1}=t,c={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};o&&(c[vn]="");const f={...s.styles};ei(a)&&(f.transform=ll({transform:a,startCentered:!0,width:r,height:n}),f["-webkit-transform"]=f.transform);const g=qr(f);g.length>0&&(c.style=g);const h=[];return h.push({tag:"span",attributes:c,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Ml(t){const{content:e,title:r,extra:n}=t,a={...n.attributes,...r?{title:r}:{},class:n.classes.join(" ")},i=qr(n.styles);i.length>0&&(a.style=i);const s=[];return s.push({tag:"span",attributes:a,children:[e]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}const{styles:fa}=xt;function Ra(t){const e=t[0],r=t[1],[n]=t.slice(4);let a=null;return Array.isArray(n)?a={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(sa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(sa.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(sa.PRIMARY),fill:"currentColor",d:n[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:r,icon:a}}const Nl={found:!1,width:512,height:512};function Il(t,e){!Fo&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Da(t,e){let r=e;return e==="fa"&&y.styleDefault!==null&&(e=Qt()),new Promise((n,a)=>{if(r==="fa"){const i=Zo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&fa[e]&&fa[e][t]){const i=fa[e][t];return n(Ra(i))}Il(t,e),n({...Nl,icon:y.showMissingIcons&&t?Zt("missingIconAbstract")||{}:{}})})}const Yi=()=>{},La=y.measurePerformance&&Mr&&Mr.mark&&Mr.measure?Mr:{mark:Yi,measure:Yi},Zn='FA "6.6.0"',Rl=t=>(La.mark("".concat(Zn," ").concat(t," begins")),()=>es(t)),es=t=>{La.mark("".concat(Zn," ").concat(t," ends")),La.measure("".concat(Zn," ").concat(t),"".concat(Zn," ").concat(t," begins"),"".concat(Zn," ").concat(t," ends"))};var ii={begin:Rl,end:es};const zr=()=>{};function ji(t){return typeof(t.getAttribute?t.getAttribute(vn):null)=="string"}function Dl(t){const e=t.getAttribute?t.getAttribute(Qa):null,r=t.getAttribute?t.getAttribute(Za):null;return e&&r}function Ll(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function Fl(){return y.autoReplaceSvg===!0?Yr.replace:Yr[y.autoReplaceSvg]||Yr.replace}function zl(t){return $.createElementNS("http://www.w3.org/2000/svg",t)}function Yl(t){return $.createElement(t)}function ts(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:r=t.tag==="svg"?zl:Yl}=e;if(typeof t=="string")return $.createTextNode(t);const n=r(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){n.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){n.appendChild(ts(i,{ceFn:r}))}),n}function jl(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Yr={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(r=>{e.parentNode.insertBefore(ts(r),e)}),e.getAttribute(vn)===null&&y.keepOriginalSource){let r=$.createComment(jl(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(t){const e=t[0],r=t[1];if(~Ja(e).indexOf(y.replacementClass))return Yr.replace(t);const n=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){const i=r[0].attributes.class.split(" ").reduce((s,o)=>(o===y.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const a=r.map(i=>mr(i)).join(`
`);e.setAttribute(vn,""),e.innerHTML=a}};function Hi(t){t()}function ns(t,e){const r=typeof e=="function"?e:zr;if(t.length===0)r();else{let n=Hi;y.mutateApproach===$s&&(n=Kt.requestAnimationFrame||Hi),n(()=>{const a=Fl(),i=ii.begin("mutate");t.map(a),i(),r()})}}let oi=!1;function rs(){oi=!0}function Fa(){oi=!1}let Gr=null;function Wi(t){if(!Ti||!y.observeMutations)return;const{treeCallback:e=zr,nodeCallback:r=zr,pseudoElementsCallback:n=zr,observeMutationsRoot:a=$}=t;Gr=new Ti(i=>{if(oi)return;const s=Qt();zn(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!ji(o.addedNodes[0])&&(y.searchPseudoElements&&n(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&y.searchPseudoElements&&n(o.target.parentNode),o.type==="attributes"&&ji(o.target)&&~Js.indexOf(o.attributeName))if(o.attributeName==="class"&&Dl(o.target)){const{prefix:c,iconName:f}=Qr(Ja(o.target));o.target.setAttribute(Qa,c||s),f&&o.target.setAttribute(Za,f)}else Ll(o.target)&&r(o.target)})}),Dt&&Gr.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Hl(){Gr&&Gr.disconnect()}function Wl(t){const e=t.getAttribute("style");let r=[];return e&&(r=e.split(";").reduce((n,a)=>{const i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),r}function Xl(t){const e=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"";let a=Qr(Ja(t));return a.prefix||(a.prefix=Qt()),e&&r&&(a.prefix=e,a.iconName=r),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=yl(a.prefix,t.innerText)||ni(a.prefix,Ta(t.innerText))),!a.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Bl(t){const e=zn(t.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),r=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return y.autoA11y&&(r?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(n||pr()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ul(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:r,prefix:n,rest:a}=Xl(t),i=Bl(t),s=Na("parseNodeAttributes",{},t);let o=e.styleParser?Wl(t):[];return{iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:_t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:i},...s}}const{styles:Gl}=xt;function as(t){const e=y.autoReplaceSvg==="nest"?Xi(t,{styleParser:!1}):Xi(t);return~e.extra.classes.indexOf(jo)?Zt("generateLayersText",t,e):Zt("generateSvgReplacementMutation",t,e)}let kt=new Set;zo.map(t=>{kt.add("fa-".concat(t))});Object.keys(pn[K]).map(kt.add.bind(kt));Object.keys(pn[Ze]).map(kt.add.bind(kt));Object.keys(pn[Je]).map(kt.add.bind(kt));kt=[...kt];function Bi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dt)return Promise.resolve();const r=$.documentElement.classList,n=g=>r.add("".concat(Ii,"-").concat(g)),a=g=>r.remove("".concat(Ii,"-").concat(g)),i=y.autoFetchSvg?kt:zo.map(g=>"fa-".concat(g)).concat(Object.keys(Gl));i.includes("fa")||i.push("fa");const s=[".".concat(jo,":not([").concat(vn,"])")].concat(i.map(g=>".".concat(g,":not([").concat(vn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=zn(t.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),a("complete");else return Promise.resolve();const c=ii.begin("onTree"),f=o.reduce((g,h)=>{try{const p=as(h);p&&g.push(p)}catch(p){Fo||p.name==="MissingIcon"&&console.error(p)}return g},[]);return new Promise((g,h)=>{Promise.all(f).then(p=>{ns(p,()=>{n("active"),n("complete"),a("pending"),typeof e=="function"&&e(),c(),g()})}).catch(p=>{c(),h(p)})})}function $l(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;as(t).then(r=>{r&&ns([r],e)})}function Vl(t){return function(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=(e||{}).icon?e:Ia(e||{});let{mask:a}=r;return a&&(a=(a||{}).icon?a:Ia(a||{})),t(n,{...r,mask:a})}}const ql=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=_t,symbol:n=!1,mask:a=null,maskId:i=null,title:s=null,titleId:o=null,classes:c=[],attributes:f={},styles:g={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:d}=t;return Zr({type:"icon",...t},()=>(yn("beforeDOMElementCreation",{iconDefinition:t,params:e}),y.autoA11y&&(s?f["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(o||pr()):(f["aria-hidden"]="true",f.focusable="false")),ai({icons:{main:Ra(d),mask:a?Ra(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:{..._t,...r},symbol:n,title:s,maskId:i,titleId:o,extra:{attributes:f,styles:g,classes:c}})))};var Kl={mixout(){return{icon:Vl(ql)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Bi,t.nodeCallback=$l,t}}},provides(t){t.i2svg=function(e){const{node:r=$,callback:n=()=>{}}=e;return Bi(r,n)},t.generateSvgReplacementMutation=function(e,r){const{iconName:n,title:a,titleId:i,prefix:s,transform:o,symbol:c,mask:f,maskId:g,extra:h}=r;return new Promise((p,d)=>{Promise.all([Da(n,s),f.iconName?Da(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[Y,S]=b;p([e,ai({icons:{main:Y,mask:S},prefix:s,iconName:n,transform:o,symbol:c,maskId:g,title:a,titleId:i,extra:h,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:r,attributes:n,main:a,transform:i,styles:s}=e;const o=qr(s);o.length>0&&(n.style=o);let c;return ei(i)&&(c=Zt("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:n}}}},Ql={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:r=[]}=e;return Zr({type:"layer"},()=>{yn("beforeDOMElementCreation",{assembler:t,params:e});let n=[];return t(a=>{Array.isArray(a)?a.map(i=>{n=n.concat(i.abstract)}):n=n.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...r].join(" ")},children:n}]})}}}},Zl={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:r=null,classes:n=[],attributes:a={},styles:i={}}=e;return Zr({type:"counter",content:t},()=>(yn("beforeDOMElementCreation",{content:t,params:e}),Ml({content:t.toString(),title:r,extra:{attributes:a,styles:i,classes:["".concat(y.cssPrefix,"-layers-counter"),...n]}})))}}}},Jl={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=_t,title:n=null,classes:a=[],attributes:i={},styles:s={}}=e;return Zr({type:"text",content:t},()=>(yn("beforeDOMElementCreation",{content:t,params:e}),zi({content:t,transform:{..._t,...r},title:n,extra:{attributes:i,styles:s,classes:["".concat(y.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,r){const{title:n,transform:a,extra:i}=r;let s=null,o=null;if(Mo){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/c,o=f.height/c}return y.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,zi({content:e.innerHTML,width:s,height:o,transform:a,title:n,extra:i,watchable:!0})])}}};const ec=new RegExp('"',"ug"),Ui=[1105920,1112319],Gi={FontAwesome:{normal:"fas",400:"fas"},...Ds,...Rs,...Xs},za=Object.keys(Gi).reduce((t,e)=>(t[e.toLowerCase()]=Gi[e],t),{}),tc=Object.keys(za).reduce((t,e)=>{const r=za[e];return t[e]=r[900]||[...Object.entries(r)][0][1],t},{});function nc(t){const e=t.replace(ec,""),r=pl(e,0),n=r>=Ui[0]&&r<=Ui[1],a=e.length===2?e[0]===e[1]:!1;return{value:Ta(a?e[0]:e),isSecondary:n||a}}function rc(t,e){const r=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),a=isNaN(n)?"normal":n;return(za[r]||{})[a]||tc[r]}function $i(t,e){const r="".concat(Gs).concat(e.replace(":","-"));return new Promise((n,a)=>{if(t.getAttribute(r)!==null)return n();const s=zn(t.children).filter(p=>p.getAttribute(Ca)===e)[0],o=Kt.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),f=c.match(Qs),g=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(s&&!f)return t.removeChild(s),n();if(f&&h!=="none"&&h!==""){const p=o.getPropertyValue("content");let d=rc(c,g);const{value:b,isSecondary:Y}=nc(p),S=f[0].startsWith("FontAwesome");let N=ni(d,b),P=N;if(S){const j=_l(b);j.iconName&&j.prefix&&(N=j.iconName,d=j.prefix)}if(N&&!Y&&(!s||s.getAttribute(Qa)!==d||s.getAttribute(Za)!==P)){t.setAttribute(r,P),s&&t.removeChild(s);const j=Ul(),{extra:x}=j;x.attributes[Ca]=e,Da(N,d).then(V=>{const U=ai({...j,icons:{main:V,mask:ri()},prefix:d,iconName:P,extra:x,watchable:!0}),k=$.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(k,t.firstChild):t.appendChild(k),k.outerHTML=U.map(_e=>mr(_e)).join(`
`),t.removeAttribute(r),n()}).catch(a)}else n()}else n()})}function ac(t){return Promise.all([$i(t,"::before"),$i(t,"::after")])}function ic(t){return t.parentNode!==document.head&&!~Vs.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ca)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vi(t){if(Dt)return new Promise((e,r)=>{const n=zn(t.querySelectorAll("*")).filter(ic).map(ac),a=ii.begin("searchPseudoElements");rs(),Promise.all(n).then(()=>{a(),Fa(),e()}).catch(()=>{a(),Fa(),r()})})}var oc={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Vi,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:r=$}=e;y.searchPseudoElements&&Vi(r)}}};let qi=!1;var sc={mixout(){return{dom:{unwatch(){rs(),qi=!0}}}},hooks(){return{bootstrap(){Wi(Na("mutationObserverCallbacks",{}))},noAuto(){Hl()},watch(t){const{observeMutationsRoot:e}=t;qi?Fa():Wi(Na("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ki=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((r,n)=>{const a=n.toLowerCase().split("-"),i=a[0];let s=a.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},e)};var lc={mixout(){return{parse:{transform:t=>Ki(t)}}},hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-transform");return r&&(t.transform=Ki(r)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:r,transform:n,containerWidth:a,iconWidth:i}=e;const s={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),g={transform:"".concat(o," ").concat(c," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:g,path:h};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:r.icon.tag,children:r.icon.children,attributes:{...r.icon.attributes,...p.path}}]}]}}}};const ua={x:0,y:0,width:"100%",height:"100%"};function Qi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function cc(t){return t.tag==="g"?t.children:[t]}var fc={hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-mask"),n=r?Qr(r.split(" ").map(a=>a.trim())):ri();return n.prefix||(n.prefix=Qt()),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:r,attributes:n,main:a,mask:i,maskId:s,transform:o}=e;const{width:c,icon:f}=a,{width:g,icon:h}=i,p=sl({transform:o,containerWidth:g,iconWidth:c}),d={tag:"rect",attributes:{...ua,fill:"white"}},b=f.children?{children:f.children.map(Qi)}:{},Y={tag:"g",attributes:{...p.inner},children:[Qi({tag:f.tag,attributes:{...f.attributes,...p.path},...b})]},S={tag:"g",attributes:{...p.outer},children:[Y]},N="mask-".concat(s||pr()),P="clip-".concat(s||pr()),j={tag:"mask",attributes:{...ua,id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[d,S]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:cc(h)},j]};return r.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(N,")"),...ua}}),{children:r,attributes:n}}}},uc={provides(t){let e=!1;Kt.matchMedia&&(e=Kt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const r=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:{...n,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},s={tag:"circle",attributes:{...n,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),r.push(s),r.push({tag:"path",attributes:{...n,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||r.push({tag:"path",attributes:{...n,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},dc={hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return t.symbol=n,t}}}},pc=[fl,Kl,Ql,Zl,Jl,oc,sc,lc,fc,uc,dc];Al(pc,{mixoutsTo:et});et.noAuto;et.config;et.library;et.dom;const Ya=et.parse;et.findIconDefinition;et.toHtml;const gc=et.icon;et.layer;et.text;et.counter;function Zi(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Zi(Object(r),!0).forEach(function(n){Tn(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Zi(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function $r(t){"@babel/helpers - typeof";return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$r(t)}function Tn(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function mc(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,i;for(i=0;i<n.length;i++)a=n[i],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}function hc(t,e){if(t==null)return{};var r=mc(t,e),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function ja(t){return bc(t)||vc(t)||yc(t)||_c()}function bc(t){if(Array.isArray(t))return Ha(t)}function vc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yc(t,e){if(t){if(typeof t=="string")return Ha(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ha(t,e)}}function Ha(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xc(t){var e,r=t.beat,n=t.fade,a=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,c=t.spin,f=t.spinPulse,g=t.spinReverse,h=t.pulse,p=t.fixedWidth,d=t.inverse,b=t.border,Y=t.listItem,S=t.flip,N=t.size,P=t.rotation,j=t.pull,x=(e={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":g,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":p,"fa-inverse":d,"fa-border":b,"fa-li":Y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Tn(e,"fa-".concat(N),typeof N<"u"&&N!==null),Tn(e,"fa-rotate-".concat(P),typeof P<"u"&&P!==null&&P!==0),Tn(e,"fa-pull-".concat(j),typeof j<"u"&&j!==null),Tn(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(V){return x[V]?V:null}).filter(function(V){return V})}function wc(t){return t=t-0,t===t}function is(t){return wc(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,r){return r?r.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var kc=["style"];function Ac(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Sc(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,r){var n=r.indexOf(":"),a=is(r.slice(0,n)),i=r.slice(n+1).trim();return a.startsWith("webkit")?e[Ac(a)]=i:e[a]=i,e},{})}function os(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(c){return os(t,c)}),a=Object.keys(e.attributes||{}).reduce(function(c,f){var g=e.attributes[f];switch(f){case"class":c.attrs.className=g,delete e.attributes.class;break;case"style":c.attrs.style=Sc(g);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=g:c.attrs[is(f)]=g}return c},{attrs:{}}),i=r.style,s=i===void 0?{}:i,o=hc(r,kc);return a.attrs.style=vt(vt({},a.attrs.style),s),t.apply(void 0,[e.tag,vt(vt({},a.attrs),o)].concat(ja(n)))}var ss=!1;try{ss=!0}catch{}function Cc(){if(!ss&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ji(t){if(t&&$r(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ya.icon)return Ya.icon(t);if(t===null)return null;if(t&&$r(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function da(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Tn({},t,e):{}}var eo={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},si=to.forwardRef(function(t,e){var r=vt(vt({},eo),t),n=r.icon,a=r.mask,i=r.symbol,s=r.className,o=r.title,c=r.titleId,f=r.maskId,g=Ji(n),h=da("classes",[].concat(ja(xc(r)),ja((s||"").split(" ")))),p=da("transform",typeof r.transform=="string"?Ya.transform(r.transform):r.transform),d=da("mask",Ji(a)),b=gc(g,vt(vt(vt(vt({},h),p),d),{},{symbol:i,title:o,titleId:c,maskId:f}));if(!b)return Cc("Could not find icon",g),null;var Y=b.abstract,S={ref:e};return Object.keys(r).forEach(function(N){eo.hasOwnProperty(N)||(S[N]=r[N])}),Ec(Y[0],S)});si.displayName="FontAwesomeIcon";si.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};var Ec=os.bind(null,to.createElement),ls={},cs={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",r="house",n=576,a=512,i=[127968,63498,63500,"home","home-alt","home-lg-alt"],s="f015",o="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z";t.definition={prefix:e,iconName:r,icon:[n,a,i,s,o]},t.faHouse=t.definition,t.prefix=e,t.iconName=r,t.width=n,t.height=a,t.ligatures=i,t.unicode=s,t.svgPathData=o,t.aliases=i})(cs);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=cs;t.definition={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},t.faHome=t.definition,t.prefix=e.prefix,t.iconName=e.iconName,t.width=e.width,t.height=e.height,t.ligatures=e.aliases,t.unicode=e.unicode,t.svgPathData=e.svgPathData,t.aliases=e.aliases})(ls);const Pc=Ot.lazy(()=>Wa(()=>import("./Annuloplasty-DfwfqGZI.js"),__vite__mapDeps([0,1,2,3,4,5]))),Oc=Ot.lazy(()=>Wa(()=>import("./Graphene-BSPqymgt.js"),__vite__mapDeps([6,1,2,3,4]))),Tc=Ot.lazy(()=>Wa(()=>import("./EEG-CJOXyqIv.js"),__vite__mapDeps([7,1,2,3,4])));ga.registerPlugin(L);const Rc=()=>{const[t,e]=Ot.useState(window.innerWidth<768),[r,n]=Ot.useState("annuloplasty"),a=fs(),i=Ot.useRef(null),s=()=>{e(window.innerWidth<768)},o=c=>{const f=document.getElementById(c);f&&(f.scrollIntoView({behavior:"smooth"}),n(c))};return Ot.useEffect(()=>{window.history.scrollRestoration="manual";const c=()=>{const f=i.current.children,g=window.scrollY+window.innerHeight/2;Array.from(f).forEach(h=>{const p=h.offsetTop,d=h.clientHeight;g>=p&&g<p+d&&n(h.id)})};if(window.addEventListener("scroll",c),window.addEventListener("resize",s),i.current){const f=i.current.children;ga.utils.toArray(f).forEach(g=>{ga.to(g,{opacity:1,scrollTrigger:{trigger:g,start:"top 80%",end:"top 20%",scrub:!0}})})}return()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",s)}},[]),be.jsxs("div",{children:[be.jsxs("nav",{className:"navbar",children:[be.jsx("a",{className:`navLink ${r==="annuloplasty"?"navLinkActive":""}`,onClick:()=>o("annuloplasty"),children:t?"Annuloplasty":"Novel Biomedical Device"}),be.jsx("a",{className:`navLink ${r==="eeg"?"navLinkActive":""}`,onClick:()=>o("eeg"),children:t?"BCI":"Brain Computer Interface"}),be.jsx("a",{className:`navLink ${r==="graphene"?"navLinkActive":""}`,onClick:()=>o("graphene"),children:t?"Biosensor":"Glucose Biosensor"}),be.jsx("a",{className:"navLink",onClick:()=>a("/"),children:be.jsx(si,{icon:ls.faHome})})]}),be.jsxs("main",{ref:i,children:[be.jsx("div",{id:"annuloplasty",className:"section",style:pa.section,children:be.jsx(Pc,{})}),be.jsx("div",{id:"eeg",className:"section",style:pa.section,children:be.jsx(Ot.Suspense,{fallback:be.jsx(ci,{loading:!0}),children:be.jsx(Tc,{})})}),be.jsx("div",{id:"graphene",className:"section",style:pa.section,children:be.jsx(Ot.Suspense,{fallback:be.jsx(ci,{loading:!0}),children:be.jsx(Oc,{})})})]})]})},pa={section:{opacity:.5,minHeight:"100vh",transition:"opacity 0.5s",padding:"0px",margin:"0px",borderRadius:"0px"}};export{Rc as default};
