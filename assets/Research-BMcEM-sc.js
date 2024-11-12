const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Annuloplasty-BmDVRw-A.js","assets/index-DjX8SLKR.js","assets/index-hSX2HrrB.css","assets/styles--8pTCOHt.js","assets/styles-EBBsXhC6.css","assets/index-BzjpkD12.js","assets/Graphene-EixJxx0Z.js","assets/EEG-InGGHA8n.js"])))=>i.map(i=>d[i]);
import{g as ps,R as to,r as bt,_ as Xa,u as gs,j as ce,L as ea}from"./index-DjX8SLKR.js";import{g as ma}from"./styles--8pTCOHt.js";function ms(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function hs(t,e,r){return e&&ms(t.prototype,e),t}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Se,Mr,Qe,Ut,Gt,Nn,no,on,Jn,ro,Nt,dt,ao,io=function(){return Se||typeof window<"u"&&(Se=window.gsap)&&Se.registerPlugin&&Se},oo=1,En=[],D=[],kt=[],er=Date.now,ha=function(e,r){return r},bs=function(){var e=Jn.core,r=e.bridge||{},n=e._scrollers,a=e._proxies;n.push.apply(n,D),a.push.apply(a,kt),D=n,kt=a,ha=function(s,o){return r[s](o)}},Vt=function(e,r){return~kt.indexOf(e)&&kt[kt.indexOf(e)+1][r]},tr=function(e){return!!~ro.indexOf(e)},Fe=function(e,r,n,a,i){return e.addEventListener(r,n,{passive:a!==!1,capture:!!i})},Le=function(e,r,n,a){return e.removeEventListener(r,n,!!a)},vr="scrollLeft",_r="scrollTop",ba=function(){return Nt&&Nt.isPressed||D.cache++},Yr=function(e,r){var n=function a(i){if(i||i===0){oo&&(Qe.history.scrollRestoration="manual");var s=Nt&&Nt.isPressed;i=a.v=Math.round(i)||(Nt&&Nt.iOS?1:0),e(i),a.cacheID=D.cache,s&&ha("ss",i)}else(r||D.cache!==a.cacheID||ha("ref"))&&(a.cacheID=D.cache,a.v=e());return a.v+a.offset};return n.offset=0,e&&n},He={s:vr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yr(function(t){return arguments.length?Qe.scrollTo(t,me.sc()):Qe.pageXOffset||Ut[vr]||Gt[vr]||Nn[vr]||0})},me={s:_r,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:He,sc:Yr(function(t){return arguments.length?Qe.scrollTo(He.sc(),t):Qe.pageYOffset||Ut[_r]||Gt[_r]||Nn[_r]||0})},Ue=function(e,r){return(r&&r._ctx&&r._ctx.selector||Se.utils.toArray)(e)[0]||(typeof e=="string"&&Se.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},qt=function(e,r){var n=r.s,a=r.sc;tr(e)&&(e=Ut.scrollingElement||Gt);var i=D.indexOf(e),s=a===me.sc?1:2;!~i&&(i=D.push(e)-1),D[i+s]||Fe(e,"scroll",ba);var o=D[i+s],c=o||(D[i+s]=Yr(Vt(e,n),!0)||(tr(e)?a:Yr(function(f){return arguments.length?e[n]=f:e[n]})));return c.target=e,o||(c.smooth=Se.getProperty(e,"scrollBehavior")==="smooth"),c},ya=function(e,r,n){var a=e,i=e,s=er(),o=s,c=r||50,f=Math.max(500,c*3),g=function(b,j){var A=er();j||A-s>c?(i=a,a=b,o=s,s=A):n?a+=b:a=i+(b-i)/(A-o)*(s-o)},h=function(){i=a=n?0:a,o=s=0},p=function(b){var j=o,A=i,M=er();return(b||b===0)&&b!==a&&g(b),s===o||M-o>f?0:(a+(n?A:-A))/((n?M:s)-j)*1e3};return{update:g,reset:h,getVelocity:p}},Bn=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fi=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},so=function(){Jn=Se.core.globals().ScrollTrigger,Jn&&Jn.core&&bs()},lo=function(e){return Se=e||io(),!Mr&&Se&&typeof document<"u"&&document.body&&(Qe=window,Ut=document,Gt=Ut.documentElement,Nn=Ut.body,ro=[Qe,Ut,Gt,Nn],Se.utils.clamp,ao=Se.core.context||function(){},on="onpointerenter"in Nn?"pointer":"mouse",no=re.isTouch=Qe.matchMedia&&Qe.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qe||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,dt=re.eventTypes=("ontouchstart"in Gt?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gt?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return oo=0},500),so(),Mr=1),Mr};He.op=me;D.cache=0;var re=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){Mr||lo(Se)||console.warn("Please gsap.registerPlugin(Observer)"),Jn||so();var a=n.tolerance,i=n.dragMinimum,s=n.type,o=n.target,c=n.lineHeight,f=n.debounce,g=n.preventDefault,h=n.onStop,p=n.onStopDelay,d=n.ignore,b=n.wheelSpeed,j=n.event,A=n.onDragStart,M=n.onDragEnd,E=n.onDrag,Y=n.onPress,x=n.onRelease,V=n.onRight,U=n.onLeft,k=n.onUp,_e=n.onDown,Xe=n.onChangeX,_=n.onChangeY,xe=n.onChange,P=n.onToggleX,At=n.onToggleY,ue=n.onHover,Ne=n.onHoverEnd,Me=n.onMove,X=n.ignoreCheck,ae=n.isNormalizer,ie=n.onGestureStart,l=n.onGestureEnd,de=n.onWheel,Jt=n.onEnable,Lt=n.onDisable,tt=n.onClick,Pt=n.scrollSpeed,Ie=n.capture,oe=n.allowClicks,Re=n.lockAxis,Ae=n.onLockAxis;this.target=o=Ue(o)||Gt,this.vars=n,d&&(d=Se.utils.toArray(d)),a=a||1e-9,i=i||0,b=b||1,Pt=Pt||1,s=s||"wheel,touch,pointer",f=f!==!1,c||(c=parseFloat(Qe.getComputedStyle(Nn).lineHeight)||22);var Ft,De,ot,H,ee,Be,Ge,u=this,$e=0,Ct=0,zt=n.passive||!g,se=qt(o,He),jt=qt(o,me),en=se(),_n=jt(),he=~s.indexOf("touch")&&!~s.indexOf("pointer")&&dt[0]==="pointerdown",Yt=tr(o),te=o.ownerDocument||Ut,st=[0,0,0],nt=[0,0,0],Et=0,jn=function(){return Et=er()},le=function(S,W){return(u.event=S)&&d&&~d.indexOf(S.target)||W&&he&&S.pointerType!=="touch"||X&&X(S,W)},hr=function(){u._vx.reset(),u._vy.reset(),De.pause(),h&&h(u)},Ht=function(){var S=u.deltaX=fi(st),W=u.deltaY=fi(nt),m=Math.abs(S)>=a,O=Math.abs(W)>=a;xe&&(m||O)&&xe(u,S,W,st,nt),m&&(V&&u.deltaX>0&&V(u),U&&u.deltaX<0&&U(u),Xe&&Xe(u),P&&u.deltaX<0!=$e<0&&P(u),$e=u.deltaX,st[0]=st[1]=st[2]=0),O&&(_e&&u.deltaY>0&&_e(u),k&&u.deltaY<0&&k(u),_&&_(u),At&&u.deltaY<0!=Ct<0&&At(u),Ct=u.deltaY,nt[0]=nt[1]=nt[2]=0),(H||ot)&&(Me&&Me(u),ot&&(E(u),ot=!1),H=!1),Be&&!(Be=!1)&&Ae&&Ae(u),ee&&(de(u),ee=!1),Ft=0},xn=function(S,W,m){st[m]+=S,nt[m]+=W,u._vx.update(S),u._vy.update(W),f?Ft||(Ft=requestAnimationFrame(Ht)):Ht()},wn=function(S,W){Re&&!Ge&&(u.axis=Ge=Math.abs(S)>Math.abs(W)?"x":"y",Be=!0),Ge!=="y"&&(st[2]+=S,u._vx.update(S,!0)),Ge!=="x"&&(nt[2]+=W,u._vy.update(W,!0)),f?Ft||(Ft=requestAnimationFrame(Ht)):Ht()},Wt=function(S){if(!le(S,1)){S=Bn(S,g);var W=S.clientX,m=S.clientY,O=W-u.x,w=m-u.y,C=u.isDragging;u.x=W,u.y=m,(C||Math.abs(u.startX-W)>=i||Math.abs(u.startY-m)>=i)&&(E&&(ot=!0),C||(u.isDragging=!0),wn(O,w),C||A&&A(u))}},tn=u.onPress=function(T){le(T,1)||T&&T.button||(u.axis=Ge=null,De.pause(),u.isPressed=!0,T=Bn(T),$e=Ct=0,u.startX=u.x=T.clientX,u.startY=u.y=T.clientY,u._vx.reset(),u._vy.reset(),Fe(ae?o:te,dt[1],Wt,zt,!0),u.deltaX=u.deltaY=0,Y&&Y(u))},I=u.onRelease=function(T){if(!le(T,1)){Le(ae?o:te,dt[1],Wt,!0);var S=!isNaN(u.y-u.startY),W=u.isDragging,m=W&&(Math.abs(u.x-u.startX)>3||Math.abs(u.y-u.startY)>3),O=Bn(T);!m&&S&&(u._vx.reset(),u._vy.reset(),g&&oe&&Se.delayedCall(.08,function(){if(er()-Et>300&&!T.defaultPrevented){if(T.target.click)T.target.click();else if(te.createEvent){var w=te.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,Qe,1,O.screenX,O.screenY,O.clientX,O.clientY,!1,!1,!1,!1,0,null),T.target.dispatchEvent(w)}}})),u.isDragging=u.isGesturing=u.isPressed=!1,h&&W&&!ae&&De.restart(!0),M&&W&&M(u),x&&x(u,m)}},nn=function(S){return S.touches&&S.touches.length>1&&(u.isGesturing=!0)&&ie(S,u.isDragging)},lt=function(){return(u.isGesturing=!1)||l(u)},ct=function(S){if(!le(S)){var W=se(),m=jt();xn((W-en)*Pt,(m-_n)*Pt,1),en=W,_n=m,h&&De.restart(!0)}},ft=function(S){if(!le(S)){S=Bn(S,g),de&&(ee=!0);var W=(S.deltaMode===1?c:S.deltaMode===2?Qe.innerHeight:1)*b;xn(S.deltaX*W,S.deltaY*W,0),h&&!ae&&De.restart(!0)}},rn=function(S){if(!le(S)){var W=S.clientX,m=S.clientY,O=W-u.x,w=m-u.y;u.x=W,u.y=m,H=!0,h&&De.restart(!0),(O||w)&&wn(O,w)}},kn=function(S){u.event=S,ue(u)},Tt=function(S){u.event=S,Ne(u)},Yn=function(S){return le(S)||Bn(S,g)&&tt(u)};De=u._dc=Se.delayedCall(p||.25,hr).pause(),u.deltaX=u.deltaY=0,u._vx=ya(0,50,!0),u._vy=ya(0,50,!0),u.scrollX=se,u.scrollY=jt,u.isDragging=u.isGesturing=u.isPressed=!1,ao(this),u.enable=function(T){return u.isEnabled||(Fe(Yt?te:o,"scroll",ba),s.indexOf("scroll")>=0&&Fe(Yt?te:o,"scroll",ct,zt,Ie),s.indexOf("wheel")>=0&&Fe(o,"wheel",ft,zt,Ie),(s.indexOf("touch")>=0&&no||s.indexOf("pointer")>=0)&&(Fe(o,dt[0],tn,zt,Ie),Fe(te,dt[2],I),Fe(te,dt[3],I),oe&&Fe(o,"click",jn,!0,!0),tt&&Fe(o,"click",Yn),ie&&Fe(te,"gesturestart",nn),l&&Fe(te,"gestureend",lt),ue&&Fe(o,on+"enter",kn),Ne&&Fe(o,on+"leave",Tt),Me&&Fe(o,on+"move",rn)),u.isEnabled=!0,T&&T.type&&tn(T),Jt&&Jt(u)),u},u.disable=function(){u.isEnabled&&(En.filter(function(T){return T!==u&&tr(T.target)}).length||Le(Yt?te:o,"scroll",ba),u.isPressed&&(u._vx.reset(),u._vy.reset(),Le(ae?o:te,dt[1],Wt,!0)),Le(Yt?te:o,"scroll",ct,Ie),Le(o,"wheel",ft,Ie),Le(o,dt[0],tn,Ie),Le(te,dt[2],I),Le(te,dt[3],I),Le(o,"click",jn,!0),Le(o,"click",Yn),Le(te,"gesturestart",nn),Le(te,"gestureend",lt),Le(o,on+"enter",kn),Le(o,on+"leave",Tt),Le(o,on+"move",rn),u.isEnabled=u.isPressed=u.isDragging=!1,Lt&&Lt(u))},u.kill=u.revert=function(){u.disable();var T=En.indexOf(u);T>=0&&En.splice(T,1),Nt===u&&(Nt=0)},En.push(u),ae&&tr(o)&&(Nt=u),u.enable(j)},hs(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();re.version="3.12.5";re.create=function(t){return new re(t)};re.register=lo;re.getAll=function(){return En.slice()};re.getById=function(t){return En.filter(function(e){return e.vars.id===t})[0]};io()&&Se.registerPlugin(re);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var y,Pn,z,Z,pt,G,co,Hr,fr,nr,Gn,xr,Te,Vr,va,je,ui,di,Cn,fo,ta,uo,ze,_a,po,go,Bt,xa,Ba,Mn,Ua,Wr,wa,na,wr=1,Oe=Date.now,ra=Oe(),it=0,$n=0,pi=function(e,r,n){var a=Ke(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=a,a?e.substr(6,e.length-7):e},gi=function(e,r){return r&&(!Ke(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ys=function t(){return $n&&requestAnimationFrame(t)},mi=function(){return Vr=1},hi=function(){return Vr=0},yt=function(e){return e},Vn=function(e){return Math.round(e*1e5)/1e5||0},mo=function(){return typeof window<"u"},ho=function(){return y||mo()&&(y=window.gsap)&&y.registerPlugin&&y},mn=function(e){return!!~co.indexOf(e)},bo=function(e){return(e==="Height"?Ua:z["inner"+e])||pt["client"+e]||G["client"+e]},yo=function(e){return Vt(e,"getBoundingClientRect")||(mn(e)?function(){return Fr.width=z.innerWidth,Fr.height=Ua,Fr}:function(){return Ot(e)})},vs=function(e,r,n){var a=n.d,i=n.d2,s=n.a;return(s=Vt(e,"getBoundingClientRect"))?function(){return s()[a]}:function(){return(r?bo(i):e["client"+i])||0}},_s=function(e,r){return!r||~kt.indexOf(e)?yo(e):function(){return Fr}},_t=function(e,r){var n=r.s,a=r.d2,i=r.d,s=r.a;return Math.max(0,(n="scroll"+a)&&(s=Vt(e,n))?s()-yo(e)()[i]:mn(e)?(pt[n]||G[n])-bo(a):e[n]-e["offset"+a])},kr=function(e,r){for(var n=0;n<Cn.length;n+=3)(!r||~r.indexOf(Cn[n+1]))&&e(Cn[n],Cn[n+1],Cn[n+2])},Ke=function(e){return typeof e=="string"},We=function(e){return typeof e=="function"},qn=function(e){return typeof e=="number"},sn=function(e){return typeof e=="object"},Un=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},aa=function(e,r){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return r(e)}):r(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Sn=Math.abs,vo="left",_o="top",Ga="right",$a="bottom",fn="width",un="height",rr="Right",ar="Left",ir="Top",or="Bottom",fe="padding",rt="margin",Dn="Width",Va="Height",ge="px",at=function(e){return z.getComputedStyle(e)},xs=function(e){var r=at(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},bi=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},Ot=function(e,r){var n=r&&at(e)[va]!=="matrix(1, 0, 0, 1, 0, 0)"&&y.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=e.getBoundingClientRect();return n&&n.progress(0).kill(),a},Xr=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},xo=function(e){var r=[],n=e.labels,a=e.duration(),i;for(i in n)r.push(n[i]/a);return r},ws=function(e){return function(r){return y.utils.snap(xo(e),r)}},qa=function(e){var r=y.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(a,i){return a-i});return n?function(a,i,s){s===void 0&&(s=.001);var o;if(!i)return r(a);if(i>0){for(a-=s,o=0;o<n.length;o++)if(n[o]>=a)return n[o];return n[o-1]}else for(o=n.length,a+=s;o--;)if(n[o]<=a)return n[o];return n[0]}:function(a,i,s){s===void 0&&(s=.001);var o=r(a);return!i||Math.abs(o-a)<s||o-a<0==i<0?o:r(i<0?a-e:a+e)}},ks=function(e){return function(r,n){return qa(xo(e))(r,n.direction)}},Sr=function(e,r,n,a){return n.split(",").forEach(function(i){return e(r,i,a)})},ve=function(e,r,n,a,i){return e.addEventListener(r,n,{passive:!a,capture:!!i})},ye=function(e,r,n,a){return e.removeEventListener(r,n,!!a)},Ar=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},yi={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pr={toggleActions:"play",anticipatePin:0},Br={top:0,left:0,center:.5,bottom:1,right:1},Ir=function(e,r){if(Ke(e)){var n=e.indexOf("="),a=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(a*=r/100),e=e.substr(0,n-1)),e=a+(e in Br?Br[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Cr=function(e,r,n,a,i,s,o,c){var f=i.startColor,g=i.endColor,h=i.fontSize,p=i.indent,d=i.fontWeight,b=Z.createElement("div"),j=mn(n)||Vt(n,"pinType")==="fixed",A=e.indexOf("scroller")!==-1,M=j?G:n,E=e.indexOf("start")!==-1,Y=E?f:g,x="border-color:"+Y+";font-size:"+h+";color:"+Y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((A||c)&&j?"fixed;":"absolute;"),(A||c||!j)&&(x+=(a===me?Ga:$a)+":"+(s+parseFloat(p))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),b._isStart=E,b.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),b.style.cssText=x,b.innerText=r||r===0?e+"-"+r:e,M.children[0]?M.insertBefore(b,M.children[0]):M.appendChild(b),b._offset=b["offset"+a.op.d2],Rr(b,0,a,E),b},Rr=function(e,r,n,a){var i={display:"block"},s=n[a?"os2":"p2"],o=n[a?"p2":"os2"];e._isFlipped=a,i[n.a+"Percent"]=a?-100:0,i[n.a]=a?"1px":0,i["border"+s+Dn]=1,i["border"+o+Dn]=0,i[n.p]=r+"px",y.set(e,i)},N=[],ka={},ur,vi=function(){return Oe()-it>34&&(ur||(ur=requestAnimationFrame(Mt)))},An=function(){(!ze||!ze.isPressed||ze.startX>G.clientWidth)&&(D.cache++,ze?ur||(ur=requestAnimationFrame(Mt)):Mt(),it||bn("scrollStart"),it=Oe())},ia=function(){go=z.innerWidth,po=z.innerHeight},Kn=function(){D.cache++,!Te&&!uo&&!Z.fullscreenElement&&!Z.webkitFullscreenElement&&(!_a||go!==z.innerWidth||Math.abs(z.innerHeight-po)>z.innerHeight*.25)&&Hr.restart(!0)},hn={},Ss=[],wo=function t(){return ye(L,"scrollEnd",t)||cn(!0)},bn=function(e){return hn[e]&&hn[e].map(function(r){return r()})||Ss},qe=[],ko=function(e){for(var r=0;r<qe.length;r+=5)(!e||qe[r+4]&&qe[r+4].query===e)&&(qe[r].style.cssText=qe[r+1],qe[r].getBBox&&qe[r].setAttribute("transform",qe[r+2]||""),qe[r+3].uncache=1)},Ka=function(e,r){var n;for(je=0;je<N.length;je++)n=N[je],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));Wr=!0,r&&ko(r),r||bn("revert")},So=function(e,r){D.cache++,(r||!Ye)&&D.forEach(function(n){return We(n)&&n.cacheID++&&(n.rec=0)}),Ke(e)&&(z.history.scrollRestoration=Ba=e)},Ye,dn=0,_i,As=function(){if(_i!==dn){var e=_i=dn;requestAnimationFrame(function(){return e===dn&&cn(!0)})}},Ao=function(){G.appendChild(Mn),Ua=!ze&&Mn.offsetHeight||z.innerHeight,G.removeChild(Mn)},xi=function(e){return fr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},cn=function(e,r){if(it&&!e&&!Wr){ve(L,"scrollEnd",wo);return}Ao(),Ye=L.isRefreshing=!0,D.forEach(function(a){return We(a)&&++a.cacheID&&(a.rec=a())});var n=bn("refreshInit");fo&&L.sort(),r||Ka(),D.forEach(function(a){We(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),N.slice(0).forEach(function(a){return a.refresh()}),Wr=!1,N.forEach(function(a){if(a._subPinOffset&&a.pin){var i=a.vars.horizontal?"offsetWidth":"offsetHeight",s=a.pin[i];a.revert(!0,1),a.adjustPinSpacing(a.pin[i]-s),a.refresh()}}),wa=1,xi(!0),N.forEach(function(a){var i=_t(a.scroller,a._dir),s=a.vars.end==="max"||a._endClamp&&a.end>i,o=a._startClamp&&a.start>=i;(s||o)&&a.setPositions(o?i-1:a.start,s?Math.max(o?i:a.start+1,i):a.end,!0)}),xi(!1),wa=0,n.forEach(function(a){return a&&a.render&&a.render(-1)}),D.forEach(function(a){We(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),So(Ba,1),Hr.pause(),dn++,Ye=2,Mt(2),N.forEach(function(a){return We(a.vars.onRefresh)&&a.vars.onRefresh(a)}),Ye=L.isRefreshing=!1,bn("refresh")},Sa=0,Dr=1,sr,Mt=function(e){if(e===2||!Ye&&!Wr){L.isUpdating=!0,sr&&sr.update(0);var r=N.length,n=Oe(),a=n-ra>=50,i=r&&N[0].scroll();if(Dr=Sa>i?-1:1,Ye||(Sa=i),a&&(it&&!Vr&&n-it>200&&(it=0,bn("scrollEnd")),Gn=ra,ra=n),Dr<0){for(je=r;je-- >0;)N[je]&&N[je].update(0,a);Dr=1}else for(je=0;je<r;je++)N[je]&&N[je].update(0,a);L.isUpdating=!1}ur=0},Aa=[vo,_o,$a,Ga,rt+or,rt+rr,rt+ir,rt+ar,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Lr=Aa.concat([fn,un,"boxSizing","max"+Dn,"max"+Va,"position",rt,fe,fe+ir,fe+rr,fe+or,fe+ar]),Ps=function(e,r,n){In(n);var a=e._gsap;if(a.spacerIsNative)In(a.spacerState);else if(e._gsap.swappedIn){var i=r.parentNode;i&&(i.insertBefore(e,r),i.removeChild(r))}e._gsap.swappedIn=!1},oa=function(e,r,n,a){if(!e._gsap.swappedIn){for(var i=Aa.length,s=r.style,o=e.style,c;i--;)c=Aa[i],s[c]=n[c];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[$a]=o[Ga]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[fn]=Xr(e,He)+ge,s[un]=Xr(e,me)+ge,s[fe]=o[rt]=o[_o]=o[vo]="0",In(a),o[fn]=o["max"+Dn]=n[fn],o[un]=o["max"+Va]=n[un],o[fe]=n[fe],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},Cs=/([A-Z])/g,In=function(e){if(e){var r=e.t.style,n=e.length,a=0,i,s;for((e.t._gsap||y.core.getCache(e.t)).uncache=1;a<n;a+=2)s=e[a+1],i=e[a],s?r[i]=s:r[i]&&r.removeProperty(i.replace(Cs,"-$1").toLowerCase())}},Er=function(e){for(var r=Lr.length,n=e.style,a=[],i=0;i<r;i++)a.push(Lr[i],n[Lr[i]]);return a.t=e,a},Es=function(e,r,n){for(var a=[],i=e.length,s=n?8:0,o;s<i;s+=2)o=e[s],a.push(o,o in r?r[o]:e[s+1]);return a.t=e.t,a},Fr={left:0,top:0},wi=function(e,r,n,a,i,s,o,c,f,g,h,p,d,b){We(e)&&(e=e(c)),Ke(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?Ir("0"+e.substr(3),n):0));var j=d?d.time():0,A,M,E;if(d&&d.seek(0),isNaN(e)||(e=+e),qn(e))d&&(e=y.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,p,e)),o&&Rr(o,n,a,!0);else{We(r)&&(r=r(c));var Y=(e||"0").split(" "),x,V,U,k;E=Ue(r,c)||G,x=Ot(E)||{},(!x||!x.left&&!x.top)&&at(E).display==="none"&&(k=E.style.display,E.style.display="block",x=Ot(E),k?E.style.display=k:E.style.removeProperty("display")),V=Ir(Y[0],x[a.d]),U=Ir(Y[1]||"0",n),e=x[a.p]-f[a.p]-g+V+i-U,o&&Rr(o,U,a,n-U<20||o._isStart&&U>20),n-=n-U}if(b&&(c[b]=e||-.001,e<0&&(e=0)),s){var _e=e+n,Xe=s._isStart;A="scroll"+a.d2,Rr(s,_e,a,Xe&&_e>20||!Xe&&(h?Math.max(G[A],pt[A]):s.parentNode[A])<=_e+1),h&&(f=Ot(o),h&&(s.style[a.op.p]=f[a.op.p]-a.op.m-s._offset+ge))}return d&&E&&(A=Ot(E),d.seek(p),M=Ot(E),d._caScrollDist=A[a.p]-M[a.p],e=e/d._caScrollDist*p),d&&d.seek(j),d?e:Math.round(e)},Ts=/(webkit|moz|length|cssText|inset)/i,ki=function(e,r,n,a){if(e.parentNode!==r){var i=e.style,s,o;if(r===G){e._stOrig=i.cssText,o=at(e);for(s in o)!+s&&!Ts.test(s)&&o[s]&&typeof i[s]=="string"&&s!=="0"&&(i[s]=o[s]);i.top=n,i.left=a}else i.cssText=e._stOrig;y.core.getCache(e).uncache=1,r.appendChild(e)}},Po=function(e,r,n){var a=r,i=a;return function(s){var o=Math.round(e());return o!==a&&o!==i&&Math.abs(o-a)>3&&Math.abs(o-i)>3&&(s=o,n&&n()),i=a,a=s,s}},Tr=function(e,r,n){var a={};a[r.p]="+="+n,y.set(e,a)},Si=function(e,r){var n=qt(e,r),a="_scroll"+r.p2,i=function s(o,c,f,g,h){var p=s.tween,d=c.onComplete,b={};f=f||n();var j=Po(n,f,function(){p.kill(),s.tween=0});return h=g&&h||0,g=g||o-f,p&&p.kill(),c[a]=o,c.inherit=!1,c.modifiers=b,b[a]=function(){return j(f+g*p.ratio+h*p.ratio*p.ratio)},c.onUpdate=function(){D.cache++,s.tween&&Mt()},c.onComplete=function(){s.tween=0,d&&d.call(p)},p=s.tween=y.to(e,c),p};return e[a]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},ve(e,"wheel",n.wheelHandler),L.isTouch&&ve(e,"touchmove",n.wheelHandler),i},L=function(){function t(r,n){Pn||t.register(y)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xa(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$n){this.update=this.refresh=this.kill=yt;return}n=bi(Ke(n)||qn(n)||n.nodeType?{trigger:n}:n,Pr);var i=n,s=i.onUpdate,o=i.toggleClass,c=i.id,f=i.onToggle,g=i.onRefresh,h=i.scrub,p=i.trigger,d=i.pin,b=i.pinSpacing,j=i.invalidateOnRefresh,A=i.anticipatePin,M=i.onScrubComplete,E=i.onSnapComplete,Y=i.once,x=i.snap,V=i.pinReparent,U=i.pinSpacer,k=i.containerAnimation,_e=i.fastScrollEnd,Xe=i.preventOverlaps,_=n.horizontal||n.containerAnimation&&n.horizontal!==!1?He:me,xe=!h&&h!==0,P=Ue(n.scroller||z),At=y.core.getCache(P),ue=mn(P),Ne=("pinType"in n?n.pinType:Vt(P,"pinType")||ue&&"fixed")==="fixed",Me=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=xe&&n.toggleActions.split(" "),ae="markers"in n?n.markers:Pr.markers,ie=ue?0:parseFloat(at(P)["border"+_.p2+Dn])||0,l=this,de=n.onRefreshInit&&function(){return n.onRefreshInit(l)},Jt=vs(P,ue,_),Lt=_s(P,ue),tt=0,Pt=0,Ie=0,oe=qt(P,_),Re,Ae,Ft,De,ot,H,ee,Be,Ge,u,$e,Ct,zt,se,jt,en,_n,he,Yt,te,st,nt,Et,jn,le,hr,Ht,xn,wn,Wt,tn,I,nn,lt,ct,ft,rn,kn,Tt;if(l._startClamp=l._endClamp=!1,l._dir=_,A*=45,l.scroller=P,l.scroll=k?k.time.bind(k):oe,De=oe(),l.vars=n,a=a||n.animation,"refreshPriority"in n&&(fo=1,n.refreshPriority===-9999&&(sr=l)),At.tweenScroll=At.tweenScroll||{top:Si(P,me),left:Si(P,He)},l.tweenTo=Re=At.tweenScroll[_.p],l.scrubDuration=function(m){nn=qn(m)&&m,nn?I?I.duration(m):I=y.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:nn,paused:!0,onComplete:function(){return M&&M(l)}}):(I&&I.progress(1).kill(),I=0)},a&&(a.vars.lazy=!1,a._initted&&!l.isReverted||a.vars.immediateRender!==!1&&n.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),l.animation=a.pause(),a.scrollTrigger=l,l.scrubDuration(h),Wt=0,c||(c=a.vars.id)),x&&((!sn(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in G.style&&y.set(ue?[G,pt]:P,{scrollBehavior:"auto"}),D.forEach(function(m){return We(m)&&m.target===(ue?Z.scrollingElement||pt:P)&&(m.smooth=!1)}),Ft=We(x.snapTo)?x.snapTo:x.snapTo==="labels"?ws(a):x.snapTo==="labelsDirectional"?ks(a):x.directional!==!1?function(m,O){return qa(x.snapTo)(m,Oe()-Pt<500?0:O.direction)}:y.utils.snap(x.snapTo),lt=x.duration||{min:.1,max:2},lt=sn(lt)?nr(lt.min,lt.max):nr(lt,lt),ct=y.delayedCall(x.delay||nn/2||.1,function(){var m=oe(),O=Oe()-Pt<500,w=Re.tween;if((O||Math.abs(l.getVelocity())<10)&&!w&&!Vr&&tt!==m){var C=(m-H)/se,be=a&&!xe?a.totalProgress():C,F=O?0:(be-tn)/(Oe()-Gn)*1e3||0,ne=y.utils.clamp(-C,1-C,Sn(F/2)*F/.185),Pe=C+(x.inertia===!1?0:ne),J,q,B=x,ut=B.onStart,Q=B.onInterrupt,Ve=B.onComplete;if(J=Ft(Pe,l),qn(J)||(J=Pe),q=Math.round(H+J*se),m<=ee&&m>=H&&q!==m){if(w&&!w._initted&&w.data<=Sn(q-m))return;x.inertia===!1&&(ne=J-C),Re(q,{duration:lt(Sn(Math.max(Sn(Pe-be),Sn(J-be))*.185/F/.05||0)),ease:x.ease||"power3",data:Sn(q-m),onInterrupt:function(){return ct.restart(!0)&&Q&&Q(l)},onComplete:function(){l.update(),tt=oe(),a&&(I?I.resetTo("totalProgress",J,a._tTime/a._tDur):a.progress(J)),Wt=tn=a&&!xe?a.totalProgress():l.progress,E&&E(l),Ve&&Ve(l)}},m,ne*se,q-m-ne*se),ut&&ut(l,Re.tween)}}else l.isActive&&tt!==m&&ct.restart(!0)}).pause()),c&&(ka[c]=l),p=l.trigger=Ue(p||d!==!0&&d),Tt=p&&p._gsap&&p._gsap.stRevert,Tt&&(Tt=Tt(l)),d=d===!0?p:Ue(d),Ke(o)&&(o={targets:p,className:o}),d&&(b===!1||b===rt||(b=!b&&d.parentNode&&d.parentNode.style&&at(d.parentNode).display==="flex"?!1:fe),l.pin=d,Ae=y.core.getCache(d),Ae.spacer?jt=Ae.pinState:(U&&(U=Ue(U),U&&!U.nodeType&&(U=U.current||U.nativeElement),Ae.spacerIsNative=!!U,U&&(Ae.spacerState=Er(U))),Ae.spacer=he=U||Z.createElement("div"),he.classList.add("pin-spacer"),c&&he.classList.add("pin-spacer-"+c),Ae.pinState=jt=Er(d)),n.force3D!==!1&&y.set(d,{force3D:!0}),l.spacer=he=Ae.spacer,wn=at(d),jn=wn[b+_.os2],te=y.getProperty(d),st=y.quickSetter(d,_.a,ge),oa(d,he,wn),_n=Er(d)),ae){Ct=sn(ae)?bi(ae,yi):yi,u=Cr("scroller-start",c,P,_,Ct,0),$e=Cr("scroller-end",c,P,_,Ct,0,u),Yt=u["offset"+_.op.d2];var Yn=Ue(Vt(P,"content")||P);Be=this.markerStart=Cr("start",c,Yn,_,Ct,Yt,0,k),Ge=this.markerEnd=Cr("end",c,Yn,_,Ct,Yt,0,k),k&&(kn=y.quickSetter([Be,Ge],_.a,ge)),!Ne&&!(kt.length&&Vt(P,"fixedMarkers")===!0)&&(xs(ue?G:P),y.set([u,$e],{force3D:!0}),hr=y.quickSetter(u,_.a,ge),xn=y.quickSetter($e,_.a,ge))}if(k){var T=k.vars.onUpdate,S=k.vars.onUpdateParams;k.eventCallback("onUpdate",function(){l.update(0,0,1),T&&T.apply(k,S||[])})}if(l.previous=function(){return N[N.indexOf(l)-1]},l.next=function(){return N[N.indexOf(l)+1]},l.revert=function(m,O){if(!O)return l.kill(!0);var w=m!==!1||!l.enabled,C=Te;w!==l.isReverted&&(w&&(ft=Math.max(oe(),l.scroll.rec||0),Ie=l.progress,rn=a&&a.progress()),Be&&[Be,Ge,u,$e].forEach(function(be){return be.style.display=w?"none":"block"}),w&&(Te=l,l.update(w)),d&&(!V||!l.isActive)&&(w?Ps(d,he,jt):oa(d,he,at(d),le)),w||l.update(w),Te=C,l.isReverted=w)},l.refresh=function(m,O,w,C){if(!((Te||!l.enabled)&&!O)){if(d&&m&&it){ve(t,"scrollEnd",wo);return}!Ye&&de&&de(l),Te=l,Re.tween&&!w&&(Re.tween.kill(),Re.tween=0),I&&I.pause(),j&&a&&a.revert({kill:!1}).invalidate(),l.isReverted||l.revert(!0,!0),l._subPinOffset=!1;var be=Jt(),F=Lt(),ne=k?k.duration():_t(P,_),Pe=se<=.01,J=0,q=C||0,B=sn(w)?w.end:n.end,ut=n.endTrigger||p,Q=sn(w)?w.start:n.start||(n.start===0||!p?0:d?"0 0":"0 100%"),Ve=l.pinnedContainer=n.pinnedContainer&&Ue(n.pinnedContainer,l),gt=p&&Math.max(0,N.indexOf(l))||0,we=gt,ke,Ce,an,br,Ee,pe,mt,Jr,ci,Hn,ht,Wn,yr;for(ae&&sn(w)&&(Wn=y.getProperty(u,_.p),yr=y.getProperty($e,_.p));we--;)pe=N[we],pe.end||pe.refresh(0,1)||(Te=l),mt=pe.pin,mt&&(mt===p||mt===d||mt===Ve)&&!pe.isReverted&&(Hn||(Hn=[]),Hn.unshift(pe),pe.revert(!0,!0)),pe!==N[we]&&(gt--,we--);for(We(Q)&&(Q=Q(l)),Q=pi(Q,"start",l),H=wi(Q,p,be,_,oe(),Be,u,l,F,ie,Ne,ne,k,l._startClamp&&"_startClamp")||(d?-.001:0),We(B)&&(B=B(l)),Ke(B)&&!B.indexOf("+=")&&(~B.indexOf(" ")?B=(Ke(Q)?Q.split(" ")[0]:"")+B:(J=Ir(B.substr(2),be),B=Ke(Q)?Q:(k?y.utils.mapRange(0,k.duration(),k.scrollTrigger.start,k.scrollTrigger.end,H):H)+J,ut=p)),B=pi(B,"end",l),ee=Math.max(H,wi(B||(ut?"100% 0":ne),ut,be,_,oe()+J,Ge,$e,l,F,ie,Ne,ne,k,l._endClamp&&"_endClamp"))||-.001,J=0,we=gt;we--;)pe=N[we],mt=pe.pin,mt&&pe.start-pe._pinPush<=H&&!k&&pe.end>0&&(ke=pe.end-(l._startClamp?Math.max(0,pe.start):pe.start),(mt===p&&pe.start-pe._pinPush<H||mt===Ve)&&isNaN(Q)&&(J+=ke*(1-pe.progress)),mt===d&&(q+=ke));if(H+=J,ee+=J,l._startClamp&&(l._startClamp+=J),l._endClamp&&!Ye&&(l._endClamp=ee||-.001,ee=Math.min(ee,_t(P,_))),se=ee-H||(H-=.01)&&.001,Pe&&(Ie=y.utils.clamp(0,1,y.utils.normalize(H,ee,ft))),l._pinPush=q,Be&&J&&(ke={},ke[_.a]="+="+J,Ve&&(ke[_.p]="-="+oe()),y.set([Be,Ge],ke)),d&&!(wa&&l.end>=_t(P,_)))ke=at(d),br=_===me,an=oe(),nt=parseFloat(te(_.a))+q,!ne&&ee>1&&(ht=(ue?Z.scrollingElement||pt:P).style,ht={style:ht,value:ht["overflow"+_.a.toUpperCase()]},ue&&at(G)["overflow"+_.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+_.a.toUpperCase()]="scroll")),oa(d,he,ke),_n=Er(d),Ce=Ot(d,!0),Jr=Ne&&qt(P,br?He:me)(),b?(le=[b+_.os2,se+q+ge],le.t=he,we=b===fe?Xr(d,_)+se+q:0,we&&(le.push(_.d,we+ge),he.style.flexBasis!=="auto"&&(he.style.flexBasis=we+ge)),In(le),Ve&&N.forEach(function(Xn){Xn.pin===Ve&&Xn.vars.pinSpacing!==!1&&(Xn._subPinOffset=!0)}),Ne&&oe(ft)):(we=Xr(d,_),we&&he.style.flexBasis!=="auto"&&(he.style.flexBasis=we+ge)),Ne&&(Ee={top:Ce.top+(br?an-H:Jr)+ge,left:Ce.left+(br?Jr:an-H)+ge,boxSizing:"border-box",position:"fixed"},Ee[fn]=Ee["max"+Dn]=Math.ceil(Ce.width)+ge,Ee[un]=Ee["max"+Va]=Math.ceil(Ce.height)+ge,Ee[rt]=Ee[rt+ir]=Ee[rt+rr]=Ee[rt+or]=Ee[rt+ar]="0",Ee[fe]=ke[fe],Ee[fe+ir]=ke[fe+ir],Ee[fe+rr]=ke[fe+rr],Ee[fe+or]=ke[fe+or],Ee[fe+ar]=ke[fe+ar],en=Es(jt,Ee,V),Ye&&oe(0)),a?(ci=a._initted,ta(1),a.render(a.duration(),!0,!0),Et=te(_.a)-nt+se+q,Ht=Math.abs(se-Et)>1,Ne&&Ht&&en.splice(en.length-2,2),a.render(0,!0,!0),ci||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),ta(0)):Et=se,ht&&(ht.value?ht.style["overflow"+_.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+_.a));else if(p&&oe()&&!k)for(Ce=p.parentNode;Ce&&Ce!==G;)Ce._pinOffset&&(H-=Ce._pinOffset,ee-=Ce._pinOffset),Ce=Ce.parentNode;Hn&&Hn.forEach(function(Xn){return Xn.revert(!1,!0)}),l.start=H,l.end=ee,De=ot=Ye?ft:oe(),!k&&!Ye&&(De<ft&&oe(ft),l.scroll.rec=0),l.revert(!1,!0),Pt=Oe(),ct&&(tt=-1,ct.restart(!0)),Te=0,a&&xe&&(a._initted||rn)&&a.progress()!==rn&&a.progress(rn||0,!0).render(a.time(),!0,!0),(Pe||Ie!==l.progress||k||j)&&(a&&!xe&&a.totalProgress(k&&H<-.001&&!Ie?y.utils.normalize(H,ee,0):Ie,!0),l.progress=Pe||(De-H)/se===Ie?0:Ie),d&&b&&(he._pinOffset=Math.round(l.progress*Et)),I&&I.invalidate(),isNaN(Wn)||(Wn-=y.getProperty(u,_.p),yr-=y.getProperty($e,_.p),Tr(u,_,Wn),Tr(Be,_,Wn-(C||0)),Tr($e,_,yr),Tr(Ge,_,yr-(C||0))),Pe&&!Ye&&l.update(),g&&!Ye&&!zt&&(zt=!0,g(l),zt=!1)}},l.getVelocity=function(){return(oe()-ot)/(Oe()-Gn)*1e3||0},l.endAnimation=function(){Un(l.callbackAnimation),a&&(I?I.progress(1):a.paused()?xe||Un(a,l.direction<0,1):Un(a,a.reversed()))},l.labelToScroll=function(m){return a&&a.labels&&(H||l.refresh()||H)+a.labels[m]/a.duration()*se||0},l.getTrailing=function(m){var O=N.indexOf(l),w=l.direction>0?N.slice(0,O).reverse():N.slice(O+1);return(Ke(m)?w.filter(function(C){return C.vars.preventOverlaps===m}):w).filter(function(C){return l.direction>0?C.end<=H:C.start>=ee})},l.update=function(m,O,w){if(!(k&&!w&&!m)){var C=Ye===!0?ft:l.scroll(),be=m?0:(C-H)/se,F=be<0?0:be>1?1:be||0,ne=l.progress,Pe,J,q,B,ut,Q,Ve,gt;if(O&&(ot=De,De=k?oe():C,x&&(tn=Wt,Wt=a&&!xe?a.totalProgress():F)),A&&d&&!Te&&!wr&&it&&(!F&&H<C+(C-ot)/(Oe()-Gn)*A?F=1e-4:F===1&&ee>C+(C-ot)/(Oe()-Gn)*A&&(F=.9999)),F!==ne&&l.enabled){if(Pe=l.isActive=!!F&&F<1,J=!!ne&&ne<1,Q=Pe!==J,ut=Q||!!F!=!!ne,l.direction=F>ne?1:-1,l.progress=F,ut&&!Te&&(q=F&&!ne?0:F===1?1:ne===1?2:3,xe&&(B=!Q&&X[q+1]!=="none"&&X[q+1]||X[q],gt=a&&(B==="complete"||B==="reset"||B in a))),Xe&&(Q||gt)&&(gt||h||!a)&&(We(Xe)?Xe(l):l.getTrailing(Xe).forEach(function(an){return an.endAnimation()})),xe||(I&&!Te&&!wr?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",F,a._tTime/a._tDur):(I.vars.totalProgress=F,I.invalidate().restart())):a&&a.totalProgress(F,!!(Te&&(Pt||m)))),d){if(m&&b&&(he.style[b+_.os2]=jn),!Ne)st(Vn(nt+Et*F));else if(ut){if(Ve=!m&&F>ne&&ee+1>C&&C+1>=_t(P,_),V)if(!m&&(Pe||Ve)){var we=Ot(d,!0),ke=C-H;ki(d,G,we.top+(_===me?ke:0)+ge,we.left+(_===me?0:ke)+ge)}else ki(d,he);In(Pe||Ve?en:_n),Ht&&F<1&&Pe||st(nt+(F===1&&!Ve?Et:0))}}x&&!Re.tween&&!Te&&!wr&&ct.restart(!0),o&&(Q||Y&&F&&(F<1||!na))&&fr(o.targets).forEach(function(an){return an.classList[Pe||Y?"add":"remove"](o.className)}),s&&!xe&&!m&&s(l),ut&&!Te?(xe&&(gt&&(B==="complete"?a.pause().totalProgress(1):B==="reset"?a.restart(!0).pause():B==="restart"?a.restart(!0):a[B]()),s&&s(l)),(Q||!na)&&(f&&Q&&aa(l,f),Me[q]&&aa(l,Me[q]),Y&&(F===1?l.kill(!1,1):Me[q]=0),Q||(q=F===1?1:3,Me[q]&&aa(l,Me[q]))),_e&&!Pe&&Math.abs(l.getVelocity())>(qn(_e)?_e:2500)&&(Un(l.callbackAnimation),I?I.progress(1):Un(a,B==="reverse"?1:!F,1))):xe&&s&&!Te&&s(l)}if(xn){var Ce=k?C/k.duration()*(k._caScrollDist||0):C;hr(Ce+(u._isFlipped?1:0)),xn(Ce)}kn&&kn(-C/k.duration()*(k._caScrollDist||0))}},l.enable=function(m,O){l.enabled||(l.enabled=!0,ve(P,"resize",Kn),ue||ve(P,"scroll",An),de&&ve(t,"refreshInit",de),m!==!1&&(l.progress=Ie=0,De=ot=tt=oe()),O!==!1&&l.refresh())},l.getTween=function(m){return m&&Re?Re.tween:I},l.setPositions=function(m,O,w,C){if(k){var be=k.scrollTrigger,F=k.duration(),ne=be.end-be.start;m=be.start+ne*m/F,O=be.start+ne*O/F}l.refresh(!1,!1,{start:gi(m,w&&!!l._startClamp),end:gi(O,w&&!!l._endClamp)},C),l.update()},l.adjustPinSpacing=function(m){if(le&&m){var O=le.indexOf(_.d)+1;le[O]=parseFloat(le[O])+m+ge,le[1]=parseFloat(le[1])+m+ge,In(le)}},l.disable=function(m,O){if(l.enabled&&(m!==!1&&l.revert(!0,!0),l.enabled=l.isActive=!1,O||I&&I.pause(),ft=0,Ae&&(Ae.uncache=1),de&&ye(t,"refreshInit",de),ct&&(ct.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!ue)){for(var w=N.length;w--;)if(N[w].scroller===P&&N[w]!==l)return;ye(P,"resize",Kn),ue||ye(P,"scroll",An)}},l.kill=function(m,O){l.disable(m,O),I&&!O&&I.kill(),c&&delete ka[c];var w=N.indexOf(l);w>=0&&N.splice(w,1),w===je&&Dr>0&&je--,w=0,N.forEach(function(C){return C.scroller===l.scroller&&(w=1)}),w||Ye||(l.scroll.rec=0),a&&(a.scrollTrigger=null,m&&a.revert({kill:!1}),O||a.kill()),Be&&[Be,Ge,u,$e].forEach(function(C){return C.parentNode&&C.parentNode.removeChild(C)}),sr===l&&(sr=0),d&&(Ae&&(Ae.uncache=1),w=0,N.forEach(function(C){return C.pin===d&&w++}),w||(Ae.spacer=0)),n.onKill&&n.onKill(l)},N.push(l),l.enable(!1,!1),Tt&&Tt(l),a&&a.add&&!se){var W=l.update;l.update=function(){l.update=W,H||ee||l.refresh()},y.delayedCall(.01,l.update),se=.01,H=ee=0}else l.refresh();d&&As()},t.register=function(n){return Pn||(y=n||ho(),mo()&&window.document&&t.enable(),Pn=$n),Pn},t.defaults=function(n){if(n)for(var a in n)Pr[a]=n[a];return Pr},t.disable=function(n,a){$n=0,N.forEach(function(s){return s[a?"kill":"disable"](n)}),ye(z,"wheel",An),ye(Z,"scroll",An),clearInterval(xr),ye(Z,"touchcancel",yt),ye(G,"touchstart",yt),Sr(ye,Z,"pointerdown,touchstart,mousedown",mi),Sr(ye,Z,"pointerup,touchend,mouseup",hi),Hr.kill(),kr(ye);for(var i=0;i<D.length;i+=3)Ar(ye,D[i],D[i+1]),Ar(ye,D[i],D[i+2])},t.enable=function(){if(z=window,Z=document,pt=Z.documentElement,G=Z.body,y&&(fr=y.utils.toArray,nr=y.utils.clamp,xa=y.core.context||yt,ta=y.core.suppressOverwrites||yt,Ba=z.history.scrollRestoration||"auto",Sa=z.pageYOffset,y.core.globals("ScrollTrigger",t),G)){$n=1,Mn=document.createElement("div"),Mn.style.height="100vh",Mn.style.position="absolute",Ao(),ys(),re.register(y),t.isTouch=re.isTouch,Bt=re.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_a=re.isTouch===1,ve(z,"wheel",An),co=[z,Z,pt,G],y.matchMedia?(t.matchMedia=function(c){var f=y.matchMedia(),g;for(g in c)f.add(g,c[g]);return f},y.addEventListener("matchMediaInit",function(){return Ka()}),y.addEventListener("matchMediaRevert",function(){return ko()}),y.addEventListener("matchMedia",function(){cn(0,1),bn("matchMedia")}),y.matchMedia("(orientation: portrait)",function(){return ia(),ia})):console.warn("Requires GSAP 3.11.0 or later"),ia(),ve(Z,"scroll",An);var n=G.style,a=n.borderTopStyle,i=y.core.Animation.prototype,s,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=Ot(G),me.m=Math.round(s.top+me.sc())||0,He.m=Math.round(s.left+He.sc())||0,a?n.borderTopStyle=a:n.removeProperty("border-top-style"),xr=setInterval(vi,250),y.delayedCall(.5,function(){return wr=0}),ve(Z,"touchcancel",yt),ve(G,"touchstart",yt),Sr(ve,Z,"pointerdown,touchstart,mousedown",mi),Sr(ve,Z,"pointerup,touchend,mouseup",hi),va=y.utils.checkPrefix("transform"),Lr.push(va),Pn=Oe(),Hr=y.delayedCall(.2,cn).pause(),Cn=[Z,"visibilitychange",function(){var c=z.innerWidth,f=z.innerHeight;Z.hidden?(ui=c,di=f):(ui!==c||di!==f)&&Kn()},Z,"DOMContentLoaded",cn,z,"load",cn,z,"resize",Kn],kr(ve),N.forEach(function(c){return c.enable(0,1)}),o=0;o<D.length;o+=3)Ar(ye,D[o],D[o+1]),Ar(ye,D[o],D[o+2])}},t.config=function(n){"limitCallbacks"in n&&(na=!!n.limitCallbacks);var a=n.syncInterval;a&&clearInterval(xr)||(xr=a)&&setInterval(vi,a),"ignoreMobileResize"in n&&(_a=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(kr(ye)||kr(ve,n.autoRefreshEvents||"none"),uo=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,a){var i=Ue(n),s=D.indexOf(i),o=mn(i);~s&&D.splice(s,o?6:2),a&&(o?kt.unshift(z,a,G,a,pt,a):kt.unshift(i,a))},t.clearMatchMedia=function(n){N.forEach(function(a){return a._ctx&&a._ctx.query===n&&a._ctx.kill(!0,!0)})},t.isInViewport=function(n,a,i){var s=(Ke(n)?Ue(n):n).getBoundingClientRect(),o=s[i?fn:un]*a||0;return i?s.right-o>0&&s.left+o<z.innerWidth:s.bottom-o>0&&s.top+o<z.innerHeight},t.positionInViewport=function(n,a,i){Ke(n)&&(n=Ue(n));var s=n.getBoundingClientRect(),o=s[i?fn:un],c=a==null?o/2:a in Br?Br[a]*o:~a.indexOf("%")?parseFloat(a)*o/100:parseFloat(a)||0;return i?(s.left+c)/z.innerWidth:(s.top+c)/z.innerHeight},t.killAll=function(n){if(N.slice(0).forEach(function(i){return i.vars.id!=="ScrollSmoother"&&i.kill()}),n!==!0){var a=hn.killAll||[];hn={},a.forEach(function(i){return i()})}},t}();L.version="3.12.5";L.saveStyles=function(t){return t?fr(t).forEach(function(e){if(e&&e.style){var r=qe.indexOf(e);r>=0&&qe.splice(r,5),qe.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),y.core.getCache(e),xa())}}):qe};L.revert=function(t,e){return Ka(!t,e)};L.create=function(t,e){return new L(t,e)};L.refresh=function(t){return t?Kn():(Pn||L.register())&&cn(!0)};L.update=function(t){return++D.cache&&Mt(t===!0?2:0)};L.clearScrollMemory=So;L.maxScroll=function(t,e){return _t(t,e?He:me)};L.getScrollFunc=function(t,e){return qt(Ue(t),e?He:me)};L.getById=function(t){return ka[t]};L.getAll=function(){return N.filter(function(t){return t.vars.id!=="ScrollSmoother"})};L.isScrolling=function(){return!!it};L.snapDirectional=qa;L.addEventListener=function(t,e){var r=hn[t]||(hn[t]=[]);~r.indexOf(e)||r.push(e)};L.removeEventListener=function(t,e){var r=hn[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};L.batch=function(t,e){var r=[],n={},a=e.interval||.016,i=e.batchMax||1e9,s=function(f,g){var h=[],p=[],d=y.delayedCall(a,function(){g(h,p),h=[],p=[]}).pause();return function(b){h.length||d.restart(!0),h.push(b.trigger),p.push(b),i<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&We(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return We(i)&&(i=i(),ve(L,"refresh",function(){return i=e.batchMax()})),fr(t).forEach(function(c){var f={};for(o in n)f[o]=n[o];f.trigger=c,r.push(L.create(f))}),r};var Ai=function(e,r,n,a){return r>a?e(a):r<0&&e(0),n>a?(a-r)/(n-r):n<0?r/(r-n):1},sa=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(re.isTouch?" pinch-zoom":""):"none",e===pt&&t(G,r)},Or={auto:1,scroll:1},Os=function(e){var r=e.event,n=e.target,a=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,s=i._gsap||y.core.getCache(i),o=Oe(),c;if(!s._isScrollT||o-s._isScrollT>2e3){for(;i&&i!==G&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Or[(c=at(i)).overflowY]||Or[c.overflowX]));)i=i.parentNode;s._isScroll=i&&i!==n&&!mn(i)&&(Or[(c=at(i)).overflowY]||Or[c.overflowX]),s._isScrollT=o}(s._isScroll||a==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},Co=function(e,r,n,a){return re.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:a=a&&Os,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return n&&ve(Z,re.eventTypes[0],Ci,!1,!0)},onDisable:function(){return ye(Z,re.eventTypes[0],Ci,!0)}})},Ns=/(input|label|select|textarea)/i,Pi,Ci=function(e){var r=Ns.test(e.target.tagName);(r||Pi)&&(e._gsapAllow=!0,Pi=r)},Ms=function(e){sn(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,a=r.momentum,i=r.allowNestedScroll,s=r.onRelease,o,c,f=Ue(e.target)||pt,g=y.core.globals().ScrollSmoother,h=g&&g.get(),p=Bt&&(e.content&&Ue(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=qt(f,me),b=qt(f,He),j=1,A=(re.isTouch&&z.visualViewport?z.visualViewport.scale*z.visualViewport.width:z.outerWidth)/z.innerWidth,M=0,E=We(a)?function(){return a(o)}:function(){return a||2.8},Y,x,V=Co(f,e.type,!0,i),U=function(){return x=!1},k=yt,_e=yt,Xe=function(){c=_t(f,me),_e=nr(Bt?1:0,c),n&&(k=nr(0,_t(f,He))),Y=dn},_=function(){p._gsap.y=Vn(parseFloat(p._gsap.y)+d.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},xe=function(){if(x){requestAnimationFrame(U);var ae=Vn(o.deltaY/2),ie=_e(d.v-ae);if(p&&ie!==d.v+d.offset){d.offset=ie-d.v;var l=Vn((parseFloat(p&&p._gsap.y)||0)-d.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+l+", 0, 1)",p._gsap.y=l+"px",d.cacheID=D.cache,Mt()}return!0}d.offset&&_(),x=!0},P,At,ue,Ne,Me=function(){Xe(),P.isActive()&&P.vars.scrollY>c&&(d()>c?P.progress(1)&&d(c):P.resetTo("scrollY",c))};return p&&y.set(p,{y:"+=0"}),e.ignoreCheck=function(X){return Bt&&X.type==="touchmove"&&xe()||j>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=j;j=Vn((z.visualViewport&&z.visualViewport.scale||1)/A),P.pause(),X!==j&&sa(f,j>1.01?!0:n?!1:"x"),At=b(),ue=d(),Xe(),Y=dn},e.onRelease=e.onGestureStart=function(X,ae){if(d.offset&&_(),!ae)Ne.restart(!0);else{D.cache++;var ie=E(),l,de;n&&(l=b(),de=l+ie*.05*-X.velocityX/.227,ie*=Ai(b,l,de,_t(f,He)),P.vars.scrollX=k(de)),l=d(),de=l+ie*.05*-X.velocityY/.227,ie*=Ai(d,l,de,_t(f,me)),P.vars.scrollY=_e(de),P.invalidate().duration(ie).play(.01),(Bt&&P.vars.scrollY>=c||l>=c-1)&&y.to({},{onUpdate:Me,duration:ie})}s&&s(X)},e.onWheel=function(){P._ts&&P.pause(),Oe()-M>1e3&&(Y=0,M=Oe())},e.onChange=function(X,ae,ie,l,de){if(dn!==Y&&Xe(),ae&&n&&b(k(l[2]===ae?At+(X.startX-X.x):b()+ae-l[1])),ie){d.offset&&_();var Jt=de[2]===ie,Lt=Jt?ue+X.startY-X.y:d()+ie-de[1],tt=_e(Lt);Jt&&Lt!==tt&&(ue+=tt-Lt),d(tt)}(ie||ae)&&Mt()},e.onEnable=function(){sa(f,n?!1:"x"),L.addEventListener("refresh",Me),ve(z,"resize",Me),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=b.smooth=!1),V.enable()},e.onDisable=function(){sa(f,!0),ye(z,"resize",Me),L.removeEventListener("refresh",Me),V.kill()},e.lockAxis=e.lockAxis!==!1,o=new re(e),o.iOS=Bt,Bt&&!d()&&d(1),Bt&&y.ticker.add(yt),Ne=o._dc,P=y.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Po(d,d(),function(){return P.pause()})},onUpdate:Mt,onComplete:Ne.vars.onComplete}),o};L.sort=function(t){return N.sort(t||function(e,r){return(e.vars.refreshPriority||0)*-1e6+e.start-(r.start+(r.vars.refreshPriority||0)*-1e6)})};L.observe=function(t){return new re(t)};L.normalizeScroll=function(t){if(typeof t>"u")return ze;if(t===!0&&ze)return ze.enable();if(t===!1){ze&&ze.kill(),ze=t;return}var e=t instanceof re?t:Ms(t);return ze&&ze.target===e.target&&ze.kill(),mn(e.target)&&(ze=e),e};L.core={_getVelocityProp:ya,_inputObserver:Co,_scrollers:D,_proxies:kt,bridge:{ss:function(){it||bn("scrollStart"),it=Oe()},ref:function(){return Te}}};ho()&&y.registerPlugin(L);const Ei=()=>{};let Qa={},Eo={},To=null,Oo={mark:Ei,measure:Ei};try{typeof window<"u"&&(Qa=window),typeof document<"u"&&(Eo=document),typeof MutationObserver<"u"&&(To=MutationObserver),typeof performance<"u"&&(Oo=performance)}catch{}const{userAgent:Ti=""}=Qa.navigator||{},Kt=Qa,$=Eo,Oi=To,Nr=Oo;Kt.document;const Dt=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",No=~Ti.indexOf("MSIE")||~Ti.indexOf("Trident/");var K="classic",Mo="duotone",Ze="sharp",Je="sharp-duotone",Is=[K,Mo,Ze,Je],Rs={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ni={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ds=["kit"],Ls=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Fs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,zs={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},js={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Ys={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Hs={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Ws={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Xs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Io={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Bs=["solid","regular","light","thin","duotone","brands"],Ro=[1,2,3,4,5,6,7,8,9,10],Us=Ro.concat([11,12,13,14,15,16,17,18,19,20]),Qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gs=[...Object.keys(Hs),...Bs,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qn.GROUP,Qn.SWAP_OPACITY,Qn.PRIMARY,Qn.SECONDARY].concat(Ro.map(t=>"".concat(t,"x"))).concat(Us.map(t=>"w-".concat(t))),$s={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Vs={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},qs={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Mi={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const It="___FONT_AWESOME___",Pa=16,Do="fa",Lo="svg-inline--fa",yn="data-fa-i2svg",Ca="data-fa-pseudo-element",Ks="data-fa-pseudo-element-pending",Za="data-prefix",Ja="data-icon",Ii="fontawesome-i2svg",Qs="async",Zs=["HTML","HEAD","STYLE","SCRIPT"],Fo=(()=>{try{return!0}catch{return!1}})(),zo=[K,Ze,Je];function gr(t){return new Proxy(t,{get(e,r){return r in e?e[r]:e[K]}})}const jo={...Io};jo[K]={...Io[K],...Ni.kit,...Ni["kit-duotone"]};const pn=gr(jo),Ea={...Xs};Ea[K]={...Ea[K],...Mi.kit,...Mi["kit-duotone"]};const dr=gr(Ea),Ta={...Ws};Ta[K]={...Ta[K],...qs.kit};const gn=gr(Ta),Oa={...Ys};Oa[K]={...Oa[K],...Vs.kit};const Js=gr(Oa),el=Ls,Yo="fa-layers-text",tl=Fs,nl={...Rs};gr(nl);const rl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],la=Qn,Ln=new Set;Object.keys(dr[K]).map(Ln.add.bind(Ln));Object.keys(dr[Ze]).map(Ln.add.bind(Ln));Object.keys(dr[Je]).map(Ln.add.bind(Ln));const al=[...Ds,...Gs],lr=Kt.FontAwesomeConfig||{};function il(t){var e=$.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ol(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$&&typeof $.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[r,n]=e;const a=ol(il(r));a!=null&&(lr[n]=a)});const Ho={styleDefault:"solid",familyDefault:"classic",cssPrefix:Do,replacementClass:Lo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lr.familyPrefix&&(lr.cssPrefix=lr.familyPrefix);const Fn={...Ho,...lr};Fn.autoReplaceSvg||(Fn.observeMutations=!1);const v={};Object.keys(Ho).forEach(t=>{Object.defineProperty(v,t,{enumerable:!0,set:function(e){Fn[t]=e,cr.forEach(r=>r(v))},get:function(){return Fn[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){Fn.cssPrefix=t,cr.forEach(e=>e(v))},get:function(){return Fn.cssPrefix}});Kt.FontAwesomeConfig=v;const cr=[];function sl(t){return cr.push(t),()=>{cr.splice(cr.indexOf(t),1)}}const Xt=Pa,xt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ll(t){if(!t||!Dt)return;const e=$.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const r=$.head.childNodes;let n=null;for(let a=r.length-1;a>-1;a--){const i=r[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=i)}return $.head.insertBefore(e,n),t}const cl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pr(){let t=12,e="";for(;t-- >0;)e+=cl[Math.random()*62|0];return e}function zn(t){const e=[];for(let r=(t||[]).length>>>0;r--;)e[r]=t[r];return e}function ei(t){return t.classList?zn(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Wo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fl(t){return Object.keys(t||{}).reduce((e,r)=>e+"".concat(r,'="').concat(Wo(t[r]),'" '),"").trim()}function qr(t){return Object.keys(t||{}).reduce((e,r)=>e+"".concat(r,": ").concat(t[r].trim(),";"),"")}function ti(t){return t.size!==xt.size||t.x!==xt.x||t.y!==xt.y||t.rotate!==xt.rotate||t.flipX||t.flipY}function ul(t){let{transform:e,containerWidth:r,iconWidth:n}=t;const a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:c,path:f}}function dl(t){let{transform:e,width:r=Pa,height:n=Pa,startCentered:a=!1}=t,i="";return a&&No?i+="translate(".concat(e.x/Xt-r/2,"em, ").concat(e.y/Xt-n/2,"em) "):a?i+="translate(calc(-50% + ".concat(e.x/Xt,"em), calc(-50% + ").concat(e.y/Xt,"em)) "):i+="translate(".concat(e.x/Xt,"em, ").concat(e.y/Xt,"em) "),i+="scale(".concat(e.size/Xt*(e.flipX?-1:1),", ").concat(e.size/Xt*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var pl=`:root, :host {
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
}`;function Xo(){const t=Do,e=Lo,r=v.cssPrefix,n=v.replacementClass;let a=pl;if(r!==t||n!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(o,".".concat(n))}return a}let Ri=!1;function ca(){v.autoAddCss&&!Ri&&(ll(Xo()),Ri=!0)}var gl={mixout(){return{dom:{css:Xo,insertCss:ca}}},hooks(){return{beforeDOMElementCreation(){ca()},beforeI2svg(){ca()}}}};const Rt=Kt||{};Rt[It]||(Rt[It]={});Rt[It].styles||(Rt[It].styles={});Rt[It].hooks||(Rt[It].hooks={});Rt[It].shims||(Rt[It].shims=[]);var wt=Rt[It];const Bo=[],Uo=function(){$.removeEventListener("DOMContentLoaded",Uo),Ur=1,Bo.map(t=>t())};let Ur=!1;Dt&&(Ur=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),Ur||$.addEventListener("DOMContentLoaded",Uo));function ml(t){Dt&&(Ur?setTimeout(t,0):Bo.push(t))}function mr(t){const{tag:e,attributes:r={},children:n=[]}=t;return typeof t=="string"?Wo(t):"<".concat(e," ").concat(fl(r),">").concat(n.map(mr).join(""),"</").concat(e,">")}function Di(t,e,r){if(t&&t[e]&&t[e][r])return{prefix:e,iconName:r,icon:t[e][r]}}var fa=function(e,r,n,a){var i=Object.keys(e),s=i.length,o=r,c,f,g;for(n===void 0?(c=1,g=e[i[0]]):(c=0,g=n);c<s;c++)f=i[c],g=o(g,e[f],f,e);return g};function hl(t){const e=[];let r=0;const n=t.length;for(;r<n;){const a=t.charCodeAt(r++);if(a>=55296&&a<=56319&&r<n){const i=t.charCodeAt(r++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),r--)}else e.push(a)}return e}function Na(t){const e=hl(t);return e.length===1?e[0].toString(16):null}function bl(t,e){const r=t.length;let n=t.charCodeAt(e),a;return n>=55296&&n<=56319&&r>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function Li(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return!!n.icon?e[n.iconName]=n.icon:e[r]=n,e},{})}function Ma(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:n=!1}=r,a=Li(e);typeof wt.hooks.addPack=="function"&&!n?wt.hooks.addPack(t,Li(e)):wt.styles[t]={...wt.styles[t]||{},...a},t==="fas"&&Ma("fa",e)}const{styles:ln,shims:yl}=wt,vl={[K]:Object.values(gn[K]),[Ze]:Object.values(gn[Ze]),[Je]:Object.values(gn[Je])};let ni=null,Go={},$o={},Vo={},qo={},Ko={};const _l={[K]:Object.keys(pn[K]),[Ze]:Object.keys(pn[Ze]),[Je]:Object.keys(pn[Je])};function xl(t){return~al.indexOf(t)}function wl(t,e){const r=e.split("-"),n=r[0],a=r.slice(1).join("-");return n===t&&a!==""&&!xl(a)?a:null}const Qo=()=>{const t=n=>fa(ln,(a,i,s)=>(a[s]=fa(i,n,{}),a),{});Go=t((n,a,i)=>(a[3]&&(n[a[3]]=i),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{n[o.toString(16)]=i}),n)),$o=t((n,a,i)=>(n[i]=i,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{n[o]=i}),n)),Ko=t((n,a,i)=>{const s=a[2];return n[i]=i,s.forEach(o=>{n[o]=i}),n});const e="far"in ln||v.autoFetchSvg,r=fa(yl,(n,a)=>{const i=a[0];let s=a[1];const o=a[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});Vo=r.names,qo=r.unicodes,ni=Kr(v.styleDefault,{family:v.familyDefault})};sl(t=>{ni=Kr(t.styleDefault,{family:v.familyDefault})});Qo();function ri(t,e){return(Go[t]||{})[e]}function kl(t,e){return($o[t]||{})[e]}function $t(t,e){return(Ko[t]||{})[e]}function Zo(t){return Vo[t]||{prefix:null,iconName:null}}function Sl(t){const e=qo[t],r=ri("fas",t);return e||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Qt(){return ni}const ai=()=>({prefix:null,iconName:null,rest:[]});function Kr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:r=K}=e,n=pn[r][t],a=dr[r][t]||dr[r][n],i=t in wt.styles?t:null;return a||i||null}const Al={[K]:Object.keys(gn[K]),[Ze]:Object.keys(gn[Ze]),[Je]:Object.keys(gn[Je])};function Qr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:r=!1}=e,n={[K]:"".concat(v.cssPrefix,"-").concat(K),[Ze]:"".concat(v.cssPrefix,"-").concat(Ze),[Je]:"".concat(v.cssPrefix,"-").concat(Je)};let a=null,i=K;const s=Is.filter(c=>c!==Mo);s.forEach(c=>{(t.includes(n[c])||t.some(f=>Al[c].includes(f)))&&(i=c)});const o=t.reduce((c,f)=>{const g=wl(v.cssPrefix,f);if(ln[f]?(f=vl[i].includes(f)?Js[i][f]:f,a=f,c.prefix=f):_l[i].indexOf(f)>-1?(a=f,c.prefix=Kr(f,{family:i})):g?c.iconName=g:f!==v.replacementClass&&!s.some(h=>f===n[h])&&c.rest.push(f),!r&&c.prefix&&c.iconName){const h=a==="fa"?Zo(c.iconName):{},p=$t(c.prefix,c.iconName);h.prefix&&(a=null),c.iconName=h.iconName||p||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!ln.far&&ln.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},ai());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===Ze&&(ln.fass||v.autoFetchSvg)&&(o.prefix="fass",o.iconName=$t(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===Je&&(ln.fasds||v.autoFetchSvg)&&(o.prefix="fasds",o.iconName=$t(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||a==="fa")&&(o.prefix=Qt()||"fas"),o}class Pl{constructor(){this.definitions={}}add(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];const a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},Ma(i,a[i]);const s=gn[K][i];s&&Ma(s,a[i]),Qo()})}reset(){this.definitions={}}_pullDefinitions(e,r){const n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(a=>{const{prefix:i,iconName:s,icon:o}=n[a],c=o[2];e[i]||(e[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[i][f]=o)}),e[i][s]=o}),e}}let Fi=[],Tn={};const Rn={},Cl=Object.keys(Rn);function El(t,e){let{mixoutsTo:r}=e;return Fi=t,Tn={},Object.keys(Rn).forEach(n=>{Cl.indexOf(n)===-1&&delete Rn[n]}),Fi.forEach(n=>{const a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(r[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(s=>{r[i]||(r[i]={}),r[i][s]=a[i][s]})}),n.hooks){const i=n.hooks();Object.keys(i).forEach(s=>{Tn[s]||(Tn[s]=[]),Tn[s].push(i[s])})}n.provides&&n.provides(Rn)}),r}function Ia(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return(Tn[t]||[]).forEach(s=>{e=s.apply(null,[e,...n])}),e}function vn(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];(Tn[t]||[]).forEach(i=>{i.apply(null,r)})}function Zt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Rn[t]?Rn[t].apply(null,e):void 0}function Ra(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const r=t.prefix||Qt();if(e)return e=$t(r,e)||e,Di(Jo.definitions,r,e)||Di(wt.styles,r,e)}const Jo=new Pl,Tl=()=>{v.autoReplaceSvg=!1,v.observeMutations=!1,vn("noAuto")},Ol={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dt?(vn("beforeI2svg",t),Zt("pseudoElements2svg",t),Zt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ml(()=>{Ml({autoReplaceSvgRoot:e}),vn("watch",t)})}},Nl={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Kr(t[0]);return{prefix:r,iconName:$t(r,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(el))){const e=Qr(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Qt(),iconName:$t(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Qt();return{prefix:e,iconName:$t(e,t)||t}}}},et={noAuto:Tl,config:v,dom:Ol,parse:Nl,library:Jo,findIconDefinition:Ra,toHtml:mr},Ml=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$}=t;(Object.keys(wt.styles).length>0||v.autoFetchSvg)&&Dt&&v.autoReplaceSvg&&et.dom.i2svg({node:e})};function Zr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(r=>mr(r))}}),Object.defineProperty(t,"node",{get:function(){if(!Dt)return;const r=$.createElement("div");return r.innerHTML=t.html,r.children}}),t}function Il(t){let{children:e,main:r,mask:n,attributes:a,styles:i,transform:s}=t;if(ti(s)&&r.found&&!n.found){const{width:o,height:c}=r,f={x:o/c/2,y:.5};a.style=qr({...i,"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function Rl(t){let{prefix:e,iconName:r,children:n,attributes:a,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:s},children:n}]}]}function ii(t){const{icons:{main:e,mask:r},prefix:n,iconName:a,transform:i,symbol:s,title:o,maskId:c,titleId:f,extra:g,watchable:h=!1}=t,{width:p,height:d}=r.found?r:e,b=n==="fak",j=[v.replacementClass,a?"".concat(v.cssPrefix,"-").concat(a):""].filter(V=>g.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(g.classes).join(" ");let A={children:[],attributes:{...g.attributes,"data-prefix":n,"data-icon":a,class:j,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(d)}};const M=b&&!~g.classes.indexOf("fa-fw")?{width:"".concat(p/d*16*.0625,"em")}:{};h&&(A.attributes[yn]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||pr())},children:[o]}),delete A.attributes.title);const E={...A,prefix:n,iconName:a,main:e,mask:r,maskId:c,transform:i,symbol:s,styles:{...M,...g.styles}},{children:Y,attributes:x}=r.found&&e.found?Zt("generateAbstractMask",E)||{children:[],attributes:{}}:Zt("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=Y,E.attributes=x,s?Rl(E):Il(E)}function zi(t){const{content:e,width:r,height:n,transform:a,title:i,extra:s,watchable:o=!1}=t,c={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};o&&(c[yn]="");const f={...s.styles};ti(a)&&(f.transform=dl({transform:a,startCentered:!0,width:r,height:n}),f["-webkit-transform"]=f.transform);const g=qr(f);g.length>0&&(c.style=g);const h=[];return h.push({tag:"span",attributes:c,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Dl(t){const{content:e,title:r,extra:n}=t,a={...n.attributes,...r?{title:r}:{},class:n.classes.join(" ")},i=qr(n.styles);i.length>0&&(a.style=i);const s=[];return s.push({tag:"span",attributes:a,children:[e]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}const{styles:ua}=wt;function Da(t){const e=t[0],r=t[1],[n]=t.slice(4);let a=null;return Array.isArray(n)?a={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(la.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(la.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(la.PRIMARY),fill:"currentColor",d:n[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:r,icon:a}}const Ll={found:!1,width:512,height:512};function Fl(t,e){!Fo&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function La(t,e){let r=e;return e==="fa"&&v.styleDefault!==null&&(e=Qt()),new Promise((n,a)=>{if(r==="fa"){const i=Zo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ua[e]&&ua[e][t]){const i=ua[e][t];return n(Da(i))}Fl(t,e),n({...Ll,icon:v.showMissingIcons&&t?Zt("missingIconAbstract")||{}:{}})})}const ji=()=>{},Fa=v.measurePerformance&&Nr&&Nr.mark&&Nr.measure?Nr:{mark:ji,measure:ji},Zn='FA "6.6.0"',zl=t=>(Fa.mark("".concat(Zn," ").concat(t," begins")),()=>es(t)),es=t=>{Fa.mark("".concat(Zn," ").concat(t," ends")),Fa.measure("".concat(Zn," ").concat(t),"".concat(Zn," ").concat(t," begins"),"".concat(Zn," ").concat(t," ends"))};var oi={begin:zl,end:es};const zr=()=>{};function Yi(t){return typeof(t.getAttribute?t.getAttribute(yn):null)=="string"}function jl(t){const e=t.getAttribute?t.getAttribute(Za):null,r=t.getAttribute?t.getAttribute(Ja):null;return e&&r}function Yl(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Hl(){return v.autoReplaceSvg===!0?jr.replace:jr[v.autoReplaceSvg]||jr.replace}function Wl(t){return $.createElementNS("http://www.w3.org/2000/svg",t)}function Xl(t){return $.createElement(t)}function ts(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:r=t.tag==="svg"?Wl:Xl}=e;if(typeof t=="string")return $.createTextNode(t);const n=r(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){n.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){n.appendChild(ts(i,{ceFn:r}))}),n}function Bl(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const jr={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(r=>{e.parentNode.insertBefore(ts(r),e)}),e.getAttribute(yn)===null&&v.keepOriginalSource){let r=$.createComment(Bl(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(t){const e=t[0],r=t[1];if(~ei(e).indexOf(v.replacementClass))return jr.replace(t);const n=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){const i=r[0].attributes.class.split(" ").reduce((s,o)=>(o===v.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const a=r.map(i=>mr(i)).join(`
`);e.setAttribute(yn,""),e.innerHTML=a}};function Hi(t){t()}function ns(t,e){const r=typeof e=="function"?e:zr;if(t.length===0)r();else{let n=Hi;v.mutateApproach===Qs&&(n=Kt.requestAnimationFrame||Hi),n(()=>{const a=Hl(),i=oi.begin("mutate");t.map(a),i(),r()})}}let si=!1;function rs(){si=!0}function za(){si=!1}let Gr=null;function Wi(t){if(!Oi||!v.observeMutations)return;const{treeCallback:e=zr,nodeCallback:r=zr,pseudoElementsCallback:n=zr,observeMutationsRoot:a=$}=t;Gr=new Oi(i=>{if(si)return;const s=Qt();zn(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Yi(o.addedNodes[0])&&(v.searchPseudoElements&&n(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&v.searchPseudoElements&&n(o.target.parentNode),o.type==="attributes"&&Yi(o.target)&&~rl.indexOf(o.attributeName))if(o.attributeName==="class"&&jl(o.target)){const{prefix:c,iconName:f}=Qr(ei(o.target));o.target.setAttribute(Za,c||s),f&&o.target.setAttribute(Ja,f)}else Yl(o.target)&&r(o.target)})}),Dt&&Gr.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ul(){Gr&&Gr.disconnect()}function Gl(t){const e=t.getAttribute("style");let r=[];return e&&(r=e.split(";").reduce((n,a)=>{const i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),r}function $l(t){const e=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"";let a=Qr(ei(t));return a.prefix||(a.prefix=Qt()),e&&r&&(a.prefix=e,a.iconName=r),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=kl(a.prefix,t.innerText)||ri(a.prefix,Na(t.innerText))),!a.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Vl(t){const e=zn(t.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),r=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return v.autoA11y&&(r?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(n||pr()):(e["aria-hidden"]="true",e.focusable="false")),e}function ql(){return{iconName:null,title:null,titleId:null,prefix:null,transform:xt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:r,prefix:n,rest:a}=$l(t),i=Vl(t),s=Ia("parseNodeAttributes",{},t);let o=e.styleParser?Gl(t):[];return{iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:xt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:i},...s}}const{styles:Kl}=wt;function as(t){const e=v.autoReplaceSvg==="nest"?Xi(t,{styleParser:!1}):Xi(t);return~e.extra.classes.indexOf(Yo)?Zt("generateLayersText",t,e):Zt("generateSvgReplacementMutation",t,e)}let St=new Set;zo.map(t=>{St.add("fa-".concat(t))});Object.keys(pn[K]).map(St.add.bind(St));Object.keys(pn[Ze]).map(St.add.bind(St));Object.keys(pn[Je]).map(St.add.bind(St));St=[...St];function Bi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dt)return Promise.resolve();const r=$.documentElement.classList,n=g=>r.add("".concat(Ii,"-").concat(g)),a=g=>r.remove("".concat(Ii,"-").concat(g)),i=v.autoFetchSvg?St:zo.map(g=>"fa-".concat(g)).concat(Object.keys(Kl));i.includes("fa")||i.push("fa");const s=[".".concat(Yo,":not([").concat(yn,"])")].concat(i.map(g=>".".concat(g,":not([").concat(yn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=zn(t.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),a("complete");else return Promise.resolve();const c=oi.begin("onTree"),f=o.reduce((g,h)=>{try{const p=as(h);p&&g.push(p)}catch(p){Fo||p.name==="MissingIcon"&&console.error(p)}return g},[]);return new Promise((g,h)=>{Promise.all(f).then(p=>{ns(p,()=>{n("active"),n("complete"),a("pending"),typeof e=="function"&&e(),c(),g()})}).catch(p=>{c(),h(p)})})}function Ql(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;as(t).then(r=>{r&&ns([r],e)})}function Zl(t){return function(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=(e||{}).icon?e:Ra(e||{});let{mask:a}=r;return a&&(a=(a||{}).icon?a:Ra(a||{})),t(n,{...r,mask:a})}}const Jl=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=xt,symbol:n=!1,mask:a=null,maskId:i=null,title:s=null,titleId:o=null,classes:c=[],attributes:f={},styles:g={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:d}=t;return Zr({type:"icon",...t},()=>(vn("beforeDOMElementCreation",{iconDefinition:t,params:e}),v.autoA11y&&(s?f["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(o||pr()):(f["aria-hidden"]="true",f.focusable="false")),ii({icons:{main:Da(d),mask:a?Da(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:{...xt,...r},symbol:n,title:s,maskId:i,titleId:o,extra:{attributes:f,styles:g,classes:c}})))};var ec={mixout(){return{icon:Zl(Jl)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Bi,t.nodeCallback=Ql,t}}},provides(t){t.i2svg=function(e){const{node:r=$,callback:n=()=>{}}=e;return Bi(r,n)},t.generateSvgReplacementMutation=function(e,r){const{iconName:n,title:a,titleId:i,prefix:s,transform:o,symbol:c,mask:f,maskId:g,extra:h}=r;return new Promise((p,d)=>{Promise.all([La(n,s),f.iconName?La(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[j,A]=b;p([e,ii({icons:{main:j,mask:A},prefix:s,iconName:n,transform:o,symbol:c,maskId:g,title:a,titleId:i,extra:h,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:r,attributes:n,main:a,transform:i,styles:s}=e;const o=qr(s);o.length>0&&(n.style=o);let c;return ti(i)&&(c=Zt("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:n}}}},tc={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:r=[]}=e;return Zr({type:"layer"},()=>{vn("beforeDOMElementCreation",{assembler:t,params:e});let n=[];return t(a=>{Array.isArray(a)?a.map(i=>{n=n.concat(i.abstract)}):n=n.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers"),...r].join(" ")},children:n}]})}}}},nc={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:r=null,classes:n=[],attributes:a={},styles:i={}}=e;return Zr({type:"counter",content:t},()=>(vn("beforeDOMElementCreation",{content:t,params:e}),Dl({content:t.toString(),title:r,extra:{attributes:a,styles:i,classes:["".concat(v.cssPrefix,"-layers-counter"),...n]}})))}}}},rc={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=xt,title:n=null,classes:a=[],attributes:i={},styles:s={}}=e;return Zr({type:"text",content:t},()=>(vn("beforeDOMElementCreation",{content:t,params:e}),zi({content:t,transform:{...xt,...r},title:n,extra:{attributes:i,styles:s,classes:["".concat(v.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,r){const{title:n,transform:a,extra:i}=r;let s=null,o=null;if(No){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/c,o=f.height/c}return v.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,zi({content:e.innerHTML,width:s,height:o,transform:a,title:n,extra:i,watchable:!0})])}}};const ac=new RegExp('"',"ug"),Ui=[1105920,1112319],Gi={FontAwesome:{normal:"fas",400:"fas"},...js,...zs,...$s},ja=Object.keys(Gi).reduce((t,e)=>(t[e.toLowerCase()]=Gi[e],t),{}),ic=Object.keys(ja).reduce((t,e)=>{const r=ja[e];return t[e]=r[900]||[...Object.entries(r)][0][1],t},{});function oc(t){const e=t.replace(ac,""),r=bl(e,0),n=r>=Ui[0]&&r<=Ui[1],a=e.length===2?e[0]===e[1]:!1;return{value:Na(a?e[0]:e),isSecondary:n||a}}function sc(t,e){const r=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),a=isNaN(n)?"normal":n;return(ja[r]||{})[a]||ic[r]}function $i(t,e){const r="".concat(Ks).concat(e.replace(":","-"));return new Promise((n,a)=>{if(t.getAttribute(r)!==null)return n();const s=zn(t.children).filter(p=>p.getAttribute(Ca)===e)[0],o=Kt.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),f=c.match(tl),g=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(s&&!f)return t.removeChild(s),n();if(f&&h!=="none"&&h!==""){const p=o.getPropertyValue("content");let d=sc(c,g);const{value:b,isSecondary:j}=oc(p),A=f[0].startsWith("FontAwesome");let M=ri(d,b),E=M;if(A){const Y=Sl(b);Y.iconName&&Y.prefix&&(M=Y.iconName,d=Y.prefix)}if(M&&!j&&(!s||s.getAttribute(Za)!==d||s.getAttribute(Ja)!==E)){t.setAttribute(r,E),s&&t.removeChild(s);const Y=ql(),{extra:x}=Y;x.attributes[Ca]=e,La(M,d).then(V=>{const U=ii({...Y,icons:{main:V,mask:ai()},prefix:d,iconName:E,extra:x,watchable:!0}),k=$.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(k,t.firstChild):t.appendChild(k),k.outerHTML=U.map(_e=>mr(_e)).join(`
`),t.removeAttribute(r),n()}).catch(a)}else n()}else n()})}function lc(t){return Promise.all([$i(t,"::before"),$i(t,"::after")])}function cc(t){return t.parentNode!==document.head&&!~Zs.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ca)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vi(t){if(Dt)return new Promise((e,r)=>{const n=zn(t.querySelectorAll("*")).filter(cc).map(lc),a=oi.begin("searchPseudoElements");rs(),Promise.all(n).then(()=>{a(),za(),e()}).catch(()=>{a(),za(),r()})})}var fc={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Vi,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:r=$}=e;v.searchPseudoElements&&Vi(r)}}};let qi=!1;var uc={mixout(){return{dom:{unwatch(){rs(),qi=!0}}}},hooks(){return{bootstrap(){Wi(Ia("mutationObserverCallbacks",{}))},noAuto(){Ul()},watch(t){const{observeMutationsRoot:e}=t;qi?za():Wi(Ia("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ki=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((r,n)=>{const a=n.toLowerCase().split("-"),i=a[0];let s=a.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},e)};var dc={mixout(){return{parse:{transform:t=>Ki(t)}}},hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-transform");return r&&(t.transform=Ki(r)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:r,transform:n,containerWidth:a,iconWidth:i}=e;const s={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),g={transform:"".concat(o," ").concat(c," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:g,path:h};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:r.icon.tag,children:r.icon.children,attributes:{...r.icon.attributes,...p.path}}]}]}}}};const da={x:0,y:0,width:"100%",height:"100%"};function Qi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pc(t){return t.tag==="g"?t.children:[t]}var gc={hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-mask"),n=r?Qr(r.split(" ").map(a=>a.trim())):ai();return n.prefix||(n.prefix=Qt()),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:r,attributes:n,main:a,mask:i,maskId:s,transform:o}=e;const{width:c,icon:f}=a,{width:g,icon:h}=i,p=ul({transform:o,containerWidth:g,iconWidth:c}),d={tag:"rect",attributes:{...da,fill:"white"}},b=f.children?{children:f.children.map(Qi)}:{},j={tag:"g",attributes:{...p.inner},children:[Qi({tag:f.tag,attributes:{...f.attributes,...p.path},...b})]},A={tag:"g",attributes:{...p.outer},children:[j]},M="mask-".concat(s||pr()),E="clip-".concat(s||pr()),Y={tag:"mask",attributes:{...da,id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[d,A]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:pc(h)},Y]};return r.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(M,")"),...da}}),{children:r,attributes:n}}}},mc={provides(t){let e=!1;Kt.matchMedia&&(e=Kt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const r=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:{...n,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},s={tag:"circle",attributes:{...n,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),r.push(s),r.push({tag:"path",attributes:{...n,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||r.push({tag:"path",attributes:{...n,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hc={hooks(){return{parseNodeAttributes(t,e){const r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return t.symbol=n,t}}}},bc=[gl,ec,tc,nc,rc,fc,uc,dc,gc,mc,hc];El(bc,{mixoutsTo:et});et.noAuto;et.config;et.library;et.dom;const Ya=et.parse;et.findIconDefinition;et.toHtml;const yc=et.icon;et.layer;et.text;et.counter;var is={exports:{}},vc="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_c=vc,xc=_c;function os(){}function ss(){}ss.resetWarningCache=os;var wc=function(){function t(n,a,i,s,o,c){if(c!==xc){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ss,resetWarningCache:os};return r.PropTypes=r,r};is.exports=wc();var kc=is.exports;const R=ps(kc);function Zi(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Zi(Object(r),!0).forEach(function(n){On(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Zi(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function $r(t){"@babel/helpers - typeof";return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$r(t)}function On(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Sc(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,i;for(i=0;i<n.length;i++)a=n[i],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}function Ac(t,e){if(t==null)return{};var r=Sc(t,e),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Ha(t){return Pc(t)||Cc(t)||Ec(t)||Tc()}function Pc(t){if(Array.isArray(t))return Wa(t)}function Cc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ec(t,e){if(t){if(typeof t=="string")return Wa(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Wa(t,e)}}function Wa(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Tc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oc(t){var e,r=t.beat,n=t.fade,a=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,c=t.spin,f=t.spinPulse,g=t.spinReverse,h=t.pulse,p=t.fixedWidth,d=t.inverse,b=t.border,j=t.listItem,A=t.flip,M=t.size,E=t.rotation,Y=t.pull,x=(e={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":g,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":p,"fa-inverse":d,"fa-border":b,"fa-li":j,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},On(e,"fa-".concat(M),typeof M<"u"&&M!==null),On(e,"fa-rotate-".concat(E),typeof E<"u"&&E!==null&&E!==0),On(e,"fa-pull-".concat(Y),typeof Y<"u"&&Y!==null),On(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(V){return x[V]?V:null}).filter(function(V){return V})}function Nc(t){return t=t-0,t===t}function ls(t){return Nc(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,r){return r?r.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Mc=["style"];function Ic(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Rc(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,r){var n=r.indexOf(":"),a=ls(r.slice(0,n)),i=r.slice(n+1).trim();return a.startsWith("webkit")?e[Ic(a)]=i:e[a]=i,e},{})}function cs(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(c){return cs(t,c)}),a=Object.keys(e.attributes||{}).reduce(function(c,f){var g=e.attributes[f];switch(f){case"class":c.attrs.className=g,delete e.attributes.class;break;case"style":c.attrs.style=Rc(g);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=g:c.attrs[ls(f)]=g}return c},{attrs:{}}),i=r.style,s=i===void 0?{}:i,o=Ac(r,Mc);return a.attrs.style=vt(vt({},a.attrs.style),s),t.apply(void 0,[e.tag,vt(vt({},a.attrs),o)].concat(Ha(n)))}var fs=!1;try{fs=!0}catch{}function Dc(){if(!fs&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ji(t){if(t&&$r(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ya.icon)return Ya.icon(t);if(t===null)return null;if(t&&$r(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function pa(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?On({},t,e):{}}var eo={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},li=to.forwardRef(function(t,e){var r=vt(vt({},eo),t),n=r.icon,a=r.mask,i=r.symbol,s=r.className,o=r.title,c=r.titleId,f=r.maskId,g=Ji(n),h=pa("classes",[].concat(Ha(Oc(r)),Ha((s||"").split(" ")))),p=pa("transform",typeof r.transform=="string"?Ya.transform(r.transform):r.transform),d=pa("mask",Ji(a)),b=yc(g,vt(vt(vt(vt({},h),p),d),{},{symbol:i,title:o,titleId:c,maskId:f}));if(!b)return Dc("Could not find icon",g),null;var j=b.abstract,A={ref:e};return Object.keys(r).forEach(function(M){eo.hasOwnProperty(M)||(A[M]=r[M])}),Lc(j[0],A)});li.displayName="FontAwesomeIcon";li.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};var Lc=cs.bind(null,to.createElement),us={},ds={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",r="house",n=576,a=512,i=[127968,63498,63500,"home","home-alt","home-lg-alt"],s="f015",o="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z";t.definition={prefix:e,iconName:r,icon:[n,a,i,s,o]},t.faHouse=t.definition,t.prefix=e,t.iconName=r,t.width=n,t.height=a,t.ligatures=i,t.unicode=s,t.svgPathData=o,t.aliases=i})(ds);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ds;t.definition={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},t.faHome=t.definition,t.prefix=e.prefix,t.iconName=e.iconName,t.width=e.width,t.height=e.height,t.ligatures=e.aliases,t.unicode=e.unicode,t.svgPathData=e.svgPathData,t.aliases=e.aliases})(us);const Fc=bt.lazy(()=>Xa(()=>import("./Annuloplasty-BmDVRw-A.js"),__vite__mapDeps([0,1,2,3,4,5]))),zc=bt.lazy(()=>Xa(()=>import("./Graphene-EixJxx0Z.js"),__vite__mapDeps([6,1,2,3,4]))),jc=bt.lazy(()=>Xa(()=>import("./EEG-InGGHA8n.js"),__vite__mapDeps([7,1,2,3,4])));ma.registerPlugin(L);const Wc=()=>{const[t,e]=bt.useState(window.innerWidth<768),[r,n]=bt.useState("annuloplasty"),a=gs(),i=bt.useRef(null),s=()=>{e(window.innerWidth<768)},o=c=>{const f=document.getElementById(c);f&&(f.scrollIntoView({behavior:"smooth"}),n(c))};return bt.useEffect(()=>{window.history.scrollRestoration="manual";const c=()=>{const f=i.current.children,g=window.scrollY+window.innerHeight/2;Array.from(f).forEach(h=>{const p=h.offsetTop,d=h.clientHeight;g>=p&&g<p+d&&n(h.id)})};if(window.addEventListener("scroll",c),window.addEventListener("resize",s),i.current){const f=i.current.children;ma.utils.toArray(f).forEach(g=>{ma.to(g,{opacity:1,scrollTrigger:{trigger:g,start:"top 80%",end:"top 20%",scrub:!0}})})}return()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",s)}},[]),ce.jsxs("div",{children:[ce.jsxs("nav",{className:"navbar",children:[ce.jsx("a",{className:`navLink ${r==="annuloplasty"?"navLinkActive":""}`,onClick:()=>o("annuloplasty"),children:t?"Annuloplasty":"Novel Biomedical Device"}),ce.jsx("a",{className:`navLink ${r==="eeg"?"navLinkActive":""}`,onClick:()=>o("eeg"),children:t?"BCI":"Brain Computer Interface"}),ce.jsx("a",{className:`navLink ${r==="graphene"?"navLinkActive":""}`,onClick:()=>o("graphene"),children:t?"Biosensor":"Glucose Biosensor"}),ce.jsx("a",{className:"navLink",onClick:()=>a("/"),children:ce.jsx(li,{icon:us.faHome})})]}),ce.jsxs("main",{ref:i,children:[ce.jsx("div",{id:"annuloplasty",className:"section",style:ga.section,children:ce.jsx(bt.Suspense,{fallback:ce.jsx(ea,{loading:!0}),children:ce.jsx(Fc,{})})}),ce.jsx("div",{id:"eeg",className:"section",style:ga.section,children:ce.jsx(bt.Suspense,{fallback:ce.jsx(ea,{loading:!0}),children:ce.jsx(jc,{})})}),ce.jsx("div",{id:"graphene",className:"section",style:ga.section,children:ce.jsx(bt.Suspense,{fallback:ce.jsx(ea,{loading:!0}),children:ce.jsx(zc,{})})})]})]})},ga={section:{opacity:.5,minHeight:"100vh",transition:"opacity 0.5s",padding:"0px",margin:"0px",borderRadius:"0px"}};export{Wc as default};
