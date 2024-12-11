import{f as Ze,g as B,r as R,j as T,c as $,R as P}from"./index-BIHptfdg.js";import{P as l}from"./index-BN1Yiwrg.js";var Ee={exports:{}},Re={exports:{}};function Qe(e){return e>64&&e<91?e-65:e>96&&e<123?e-71:e>47&&e<58?e+4:e===43?62:e===47?63:0}function et(e,t){for(var r=e.replace(/[^A-Za-z0-9\+\/]/g,""),n=r.length,o=t?Math.ceil((n*3+1>>2)/t)*t:n*3+1>>2,i=new Uint8Array(o),s,a,u=0,c=0,v=0;v<n;v++)if(a=v&3,u|=Qe(r.charCodeAt(v))<<18-6*a,a===3||n-v===1){for(s=0;s<3&&c<o;s++,c++)i[c]=u>>>(16>>>s&24)&255;u=0}return i}var tt={decode:et},nt=function(e,t){return new Promise(function(r,n){var o=new XMLHttpRequest;t&&(o.responseType=t),o.open("GET",e),o.onload=function(){o.status===200?r(o.response):n(Error(o.statusText))},o.onerror=function(){n(Error("Network Error"))},o.send()})};(function(e){var t=tt,r=nt;function n(g){return function(h){return typeof h=="string"&&g.test(h)}}function o(g,h){return typeof g=="string"?g+h:typeof g=="function"?g(h):h}function i(g,h,_,A){var j=s(h)?a:u(h)?c:v(h)?p:f(h)?b:m(h)?d:y(h)?w:M(h)?Y:Je(h)?Xe:null,x=_||{};return j?j(g,h,x):A?Promise.resolve(A):Promise.reject("Source not valid ("+h+")")}i.fetch=r;function s(g){return g instanceof ArrayBuffer}function a(g,h,_){return new Promise(function(A,j){g.decodeAudioData(h,function(x){A(x)},function(){j("Can't decode audio data ("+h.slice(0,30)+"...)")})})}var u=n(/\.(mp3|wav|ogg)(\?.*)?$/i);function c(g,h,_){var A=o(_.from,h);return i(g,i.fetch(A,"arraybuffer"),_)}function v(g){return g&&typeof g.then=="function"}function p(g,h,_){return h.then(function(A){return i(g,A,_)})}var f=Array.isArray;function b(g,h,_){return Promise.all(h.map(function(A){return i(g,A,_,A)}))}function m(g){return g&&typeof g=="object"}function d(g,h,_){var A={},j=Object.keys(h).map(function(x){if(_.only&&_.only.indexOf(x)===-1)return null;var ve=h[x];return i(g,ve,_,ve).then(function(Ye){A[x]=Ye})});return Promise.all(j).then(function(){return A})}var y=n(/\.json(\?.*)?$/i);function w(g,h,_){var A=o(_.from,h);return i(g,i.fetch(A,"text").then(JSON.parse),_)}var M=n(/^data:audio/);function Y(g,h,_){var A=h.indexOf(",");return i(g,t.decode(h.slice(A+1)).buffer,_)}var Je=n(/\.js(\?.*)?$/i);function Xe(g,h,_){var A=o(_.from,h);return i(g,i.fetch(A,"text").then(ze),_)}function ze(g){var h=g.indexOf("MIDI.Soundfont.");if(h<0)throw Error("Invalid MIDI.js Soundfont format");h=g.indexOf("=",h)+2;var _=g.lastIndexOf(",");return JSON.parse(g.slice(h,_)+"}")}e.exports&&(e.exports=i),typeof window<"u"&&(window.loadAudio=i)})(Re);var rt=Re.exports,Ie={exports:{}},ot=it;function it(e){var t=e.createGain(),r=t._voltage=ut(e),n=k(r),o=k(r),i=k(r);return t._startAmount=k(o),t._endAmount=k(i),t._multiplier=k(n),t._multiplier.connect(t),t._startAmount.connect(t),t._endAmount.connect(t),t.value=n.gain,t.startValue=o.gain,t.endValue=i.gain,t.startValue.value=0,t.endValue.value=0,Object.defineProperties(t,at),t}var at={attack:{value:0,writable:!0},decay:{value:0,writable:!0},sustain:{value:1,writable:!0},release:{value:0,writable:!0},getReleaseDuration:{value:function(){return this.release}},start:{value:function(e){var t=this._multiplier.gain,r=this._startAmount.gain,n=this._endAmount.gain;this._voltage.start(e),this._decayFrom=this._decayFrom=e+this.attack,this._startedAt=e;var o=this.sustain;t.cancelScheduledValues(e),r.cancelScheduledValues(e),n.cancelScheduledValues(e),n.setValueAtTime(0,e),this.attack?(t.setValueAtTime(0,e),t.linearRampToValueAtTime(1,e+this.attack),r.setValueAtTime(1,e),r.linearRampToValueAtTime(0,e+this.attack)):(t.setValueAtTime(1,e),r.setValueAtTime(0,e)),this.decay&&t.setTargetAtTime(o,this._decayFrom,me(this.decay))}},stop:{value:function(e,t){t&&(e=e-this.release);var r=e+this.release;if(this.release){var n=this._multiplier.gain,o=this._startAmount.gain,i=this._endAmount.gain;n.cancelScheduledValues(e),o.cancelScheduledValues(e),i.cancelScheduledValues(e);var s=me(this.release);if(this.attack&&e<this._decayFrom){var a=ct(0,1,this._startedAt,this._decayFrom,e);n.linearRampToValueAtTime(a,e),o.linearRampToValueAtTime(1-a,e),o.setTargetAtTime(0,e,s)}i.setTargetAtTime(1,e,s),n.setTargetAtTime(0,e,s)}return this._voltage.stop(r),r}},onended:{get:function(){return this._voltage.onended},set:function(e){this._voltage.onended=e}}},st=new Float32Array([1,1]);function ut(e){var t=e.createBufferSource(),r=e.createBuffer(1,2,e.sampleRate);return r.getChannelData(0).set(st),t.buffer=r,t.loop=!0,t}function k(e){var t=e.context.createGain();return e.connect(t),t}function me(e){return Math.log(e+1)/Math.log(100)}function ct(e,t,r,n,o){var i=t-e,s=n-r,a=o-r,u=a/s,c=e+u*i;return c<=e&&(c=e),c>=t&&(c=t),c}var lt=ot,ft={},dt={gain:1,attack:.01,decay:.1,sustain:.9,release:.3,loop:!1,cents:0,loopStart:0,loopEnd:0};function pt(e,t,r){var n=!1,o=0,i={},s=e.createGain();s.gain.value=1;var a=Object.assign({},dt,r),u={context:e,out:s,opts:a};return t instanceof AudioBuffer?u.buffer=t:u.buffers=t,u.start=function(p,f,b){if(u.buffer&&p!==null)return u.start(null,p,f);var m=p?u.buffers[p]:u.buffer;if(m){if(!n){console.warn("SamplePlayer not connected to any node.");return}}else{console.warn("Buffer "+p+" not found.");return}var d=b||ft;f=Math.max(e.currentTime,f||0),u.emit("start",f,p,d);var y=v(p,m,d);return y.id=c(p,y),y.env.start(f),y.source.start(f),u.emit("started",f,y.id,y),d.duration&&y.stop(f+d.duration),y},u.play=function(p,f,b){return u.start(p,f,b)},u.stop=function(p,f){var b;return f=f||Object.keys(i),f.map(function(m){return b=i[m],b?(b.stop(p),b.id):null})},u.connect=function(p){return n=!0,s.connect(p),u},u.emit=function(p,f,b,m){u.onevent&&u.onevent(p,f,b,m);var d=u["on"+p];d&&d(f,b,m)},u;function c(p,f){return f.id=o++,i[f.id]=f,f.source.onended=function(){var b=e.currentTime;f.source.disconnect(),f.env.disconnect(),f.disconnect(),u.emit("ended",b,f.id,f)},f.id}function v(p,f,b){var m=e.createGain();return m.gain.value=0,m.connect(s),m.env=vt(e,b,a),m.env.connect(m.gain),m.source=e.createBufferSource(),m.source.buffer=f,m.source.connect(m),m.source.loop=b.loop||a.loop,m.source.playbackRate.value=mt(b.cents||a.cents),m.source.loopStart=b.loopStart||a.loopStart,m.source.loopEnd=b.loopEnd||a.loopEnd,m.stop=function(d){var y=d||e.currentTime;u.emit("stop",y,p);var w=m.env.stop(y);m.source.stop(w)},m}}function ye(e){return typeof e=="number"}var ht=["attack","decay","sustain","release"];function vt(e,t,r){var n=lt(e),o=t.adsr||r.adsr;return ht.forEach(function(i,s){o?n[i]=o[s]:n[i]=t[i]||r[i]}),n.value.value=ye(t.gain)?t.gain:ye(r.gain)?r.gain:1,n}function mt(e){return e?Math.pow(2,e/1200):1}var yt=pt,gt=function(e){return e.on=function(t,r){if(arguments.length===1&&typeof t=="function")return e.on("event",t);var n="on"+t,o=e[n];return e[n]=o?bt(o,r):r,e},e};function bt(e,t){return function(r,n,o,i){e(r,n,o,i),t(r,n,o,i)}}var Me=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function Nt(){return Me}var _t=[0,2,4,5,7,9,11];function xe(e,t,r){if(typeof e!="string")return null;var n=Me.exec(e);if(!n||!t&&n[4])return null;var o={letter:n[1].toUpperCase(),acc:n[2].replace(/x/g,"##")};return o.pc=o.letter+o.acc,o.step=(o.letter.charCodeAt(0)+3)%7,o.alt=o.acc[0]==="b"?-o.acc.length:o.acc.length,o.chroma=_t[o.step]+o.alt,n[3]&&(o.oct=+n[3],o.midi=o.chroma+12*(o.oct+1),o.freq=Oe(o.midi,r)),t&&(o.tonicOf=n[4]),o}function Oe(e,t){return Math.pow(2,(e-69)/12)*(t||440)}var je={parse:xe,regex:Nt,midiToFreq:Oe},At=["letter","acc","pc","step","alt","chroma","oct","midi","freq"];At.forEach(function(e){je[e]=function(t){var r=xe(t);return r&&typeof r[e]<"u"?r[e]:null}});var St=je,wt=St,Tt=function(e){return e!==null&&e!==[]&&e>=0&&e<129},Pt=function(e){return Tt(e)?+e:wt.midi(e)},Et=function(e){if(e.buffers){var t=e.opts.map,r=typeof t=="function"?t:Pt,n=function(i){return i?r(i)||i:null};e.buffers=Rt(e.buffers,n);var o=e.start;e.start=function(i,s,a){var u=n(i),c=u%1;return c&&(u=Math.floor(u),a=Object.assign(a||{},{cents:Math.floor(c*100)})),o(u,s,a)}}return e};function Rt(e,t){return Object.keys(e).reduce(function(r,n){return r[t(n)]=e[n],r},{})}var It=Array.isArray,Mt=function(e){return e&&typeof e=="object"},xt={},Ot=function(e){return e.schedule=function(t,r){var n=e.context.currentTime,o=t<n?n:t;e.emit("schedule",o,r);var i,s,a,u;return r.map(function(c){if(c)It(c)?(i=c[0],s=c[1]):(i=c.time,s=c);else return null;return Mt(s)?(a=s.name||s.key||s.note||s.midi||null,u=s):(a=s,u=xt),e.start(a,o+(i||0),u)})},e};function L(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ke={exports:{}};(function(e,t){(function(r){e.exports=r()})(function(){return function r(n,o,i){function s(c,v){if(!o[c]){if(!n[c]){var p=typeof L=="function"&&L;if(!v&&p)return p(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var b=o[c]={exports:{}};n[c][0].call(b.exports,function(m){var d=n[c][1][m];return s(d||m)},b,b.exports,r,n,o,i)}return o[c].exports}for(var a=typeof L=="function"&&L,u=0;u<i.length;u++)s(i[u]);return s}({1:[function(r,n,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(i){function s(a){if(this._event=a,this._data=a.data,this.receivedTime=a.receivedTime,this._data&&this._data.length<2){console.warn("Illegal MIDI message of length",this._data.length);return}switch(this._messageCode=a.data[0]&240,this.channel=a.data[0]&15,this._messageCode){case 128:this.messageType="noteoff",this.key=a.data[1]&127,this.velocity=a.data[2]&127;break;case 144:this.messageType="noteon",this.key=a.data[1]&127,this.velocity=a.data[2]&127;break;case 160:this.messageType="keypressure",this.key=a.data[1]&127,this.pressure=a.data[2]&127;break;case 176:this.messageType="controlchange",this.controllerNumber=a.data[1]&127,this.controllerValue=a.data[2]&127,this.controllerNumber===120&&this.controllerValue===0?this.channelModeMessage="allsoundoff":this.controllerNumber===121?this.channelModeMessage="resetallcontrollers":this.controllerNumber===122?this.controllerValue===0?this.channelModeMessage="localcontroloff":this.channelModeMessage="localcontrolon":this.controllerNumber===123&&this.controllerValue===0?this.channelModeMessage="allnotesoff":this.controllerNumber===124&&this.controllerValue===0?this.channelModeMessage="omnimodeoff":this.controllerNumber===125&&this.controllerValue===0?this.channelModeMessage="omnimodeon":this.controllerNumber===126?this.channelModeMessage="monomodeon":this.controllerNumber===127&&(this.channelModeMessage="polymodeon");break;case 192:this.messageType="programchange",this.program=a.data[1];break;case 208:this.messageType="channelpressure",this.pressure=a.data[1]&127;break;case 224:this.messageType="pitchbendchange";var u=a.data[2]&127,c=a.data[1]&127;this.pitchBend=(u<<8)+c;break}}return new s(i)},n.exports=o.default},{}]},{},[1])(1)})})(ke);var jt=ke.exports,kt=jt,Dt=function(e){return e.listenToMidi=function(t,r){var n={},o=r||{},i=o.gain||function(s){return s/127};return t.onmidimessage=function(s){var a=s.messageType?s:kt(s);if(a.messageType==="noteon"&&a.velocity===0&&(a.messageType="noteoff"),!(o.channel&&a.channel!==o.channel))switch(a.messageType){case"noteon":n[a.key]=e.play(a.key,0,{gain:i(a.velocity)});break;case"noteoff":n[a.key]&&(n[a.key].stop(),delete n[a.key]);break}},e},e};(function(e){var t=yt,r=gt,n=Et,o=Ot,i=Dt;function s(a,u,c){return i(o(n(r(t(a,u,c)))))}e.exports&&(e.exports=s),typeof window<"u"&&(window.SamplePlayer=s)})(Ie);var Ct=Ie.exports;function ge(e,t){return Array(t+1).join(e)}function oe(e){return typeof e=="number"}function qt(e){return typeof e=="string"}function Kt(e){return typeof e<"u"}function De(e,t){return Math.pow(2,(e-69)/12)*(t||440)}var Ce=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function $t(){return Ce}var Lt=[0,2,4,5,7,9,11];function I(e,t,r){if(typeof e!="string")return null;var n=Ce.exec(e);if(!n||!t&&n[4])return null;var o={letter:n[1].toUpperCase(),acc:n[2].replace(/x/g,"##")};o.pc=o.letter+o.acc,o.step=(o.letter.charCodeAt(0)+3)%7,o.alt=o.acc[0]==="b"?-o.acc.length:o.acc.length;var i=Lt[o.step]+o.alt;return o.chroma=i<0?12+i:i%12,n[3]&&(o.oct=+n[3],o.midi=i+12*(o.oct+1),o.freq=De(o.midi,r)),t&&(o.tonicOf=n[4]),o}var Ft="CDEFGAB";function Ut(e){return oe(e)?e<0?ge("b",-e):ge("#",e):""}function Bt(e){return oe(e)?""+e:""}function qe(e,t,r){return e===null||typeof e>"u"?null:e.step?qe(e.step,e.alt,e.oct):e<0||e>6?null:Ft.charAt(e)+Ut(t)+Bt(r)}function Ke(e){if((oe(e)||qt(e))&&e>=0&&e<128)return+e;var t=I(e);return t&&Kt(t.midi)?t.midi:null}function Gt(e,t){var r=Ke(e);return r===null?null:De(r,t)}function Vt(e){return(I(e)||{}).letter}function Ht(e){return(I(e)||{}).acc}function Wt(e){return(I(e)||{}).pc}function Jt(e){return(I(e)||{}).step}function Xt(e){return(I(e)||{}).alt}function zt(e){return(I(e)||{}).chroma}function Yt(e){return(I(e)||{}).oct}const Zt=Object.freeze(Object.defineProperty({__proto__:null,acc:Ht,alt:Xt,build:qe,chroma:zt,freq:Gt,letter:Vt,midi:Ke,oct:Yt,parse:I,pc:Wt,regex:$t,step:Jt},Symbol.toStringTag,{value:"Module"})),Qt=Ze(Zt);var Z,be;function en(){if(be)return Z;be=1;var e=Qt;function t(o,i){if(console.warn("new Soundfont() is deprected"),console.log("Please use Soundfont.instrument() instead of new Soundfont().instrument()"),!(this instanceof t))return new t(o);this.nameToUrl=i||t.nameToUrl,this.ctx=o,this.instruments={},this.promises=[]}t.prototype.onready=function(o){console.warn("deprecated API"),console.log("Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()"),Promise.all(this.promises).then(o)},t.prototype.instrument=function(o,i){console.warn("new Soundfont().instrument() is deprecated."),console.log("Please use Soundfont.instrument() instead.");var s=this.ctx;if(o=o||"default",o in this.instruments)return this.instruments[o];var a={name:o,play:n(s,i)};if(this.instruments[o]=a,o!=="default"){var u=t.instrument(s,o,i).then(function(c){return a.play=c.play,a});this.promises.push(u),a.onready=function(c){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),u.then(c)}}else a.onready=function(c){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),c()};return a};function r(o,i,s){return console.warn("Soundfont.loadBuffers is deprecate."),console.log("Use Soundfont.instrument(..) and get buffers properties from the result."),t.instrument(o,i,s).then(function(a){return a.buffers})}t.loadBuffers=r;function n(o,i){return i=i||{},function(s,a,u,c){console.warn("The oscillator player is deprecated."),console.log("Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.");var v=s>0&&s<129?+s:e.midi(s),p=v?e.midiToFreq(v,440):null;if(p){u=u||.2,c=c||{};var f=c.destination||i.destination||o.destination,b=c.vcoType||i.vcoType||"sine",m=c.gain||i.gain||.4,d=o.createOscillator();d.type=b,d.frequency.value=p;var y=o.createGain();return y.gain.value=m,d.connect(y),y.connect(f),d.start(a),u>0&&d.stop(a+u),d}}}return t.noteToMidi=e.midi,Z=t,Z}(function(e){var t=rt,r=Ct;function n(a,u,c){if(arguments.length===1)return function(m,d){return n(a,m,d)};var v=c||{},p=v.isSoundfontURL||o,f=v.nameToUrl||i,b=p(u)?u:f(u,v.soundfont,v.format);return t(a,b,{only:v.only||v.notes}).then(function(m){var d=r(a,m,v).connect(v.destination?v.destination:a.destination);return d.url=b,d.name=u,d})}function o(a){return/\.js(\?.*)?$/i.test(a)}function i(a,u,c){return c=c==="ogg"?c:"mp3",u=u==="FluidR3_GM"?u:"MusyngKite","https://gleitz.github.io/midi-js-soundfonts/"+u+"/"+a+"-"+c+".js"}var s=en();s.instrument=n,s.nameToUrl=i,e.exports&&(e.exports=s),typeof window<"u"&&(window.Soundfont=s)})(Ee);var tn=Ee.exports;const $e=B(tn);function nn({setHighlightedNote:e}){const[t,r]=R.useState(null),[n,o]=R.useState(null),i=["C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3"];R.useEffect(()=>{$e.instrument(new AudioContext,"acoustic_grand_piano").then(o)},[]);const s=()=>{const a=i[Math.floor(Math.random()*i.length)];r(a),e(a),n&&n.play(a)};return T.jsxs("div",{children:[T.jsx("div",{className:"flex-center flex-wrap gap-4 p-6",children:T.jsx("button",{className:"button-85",onClick:s,children:"Play Random Note"})}),t&&T.jsxs("p",{children:["Played Note: ",t]})]})}var rn=on;function on(e,t,r){if(e!=null&&typeof e!="number")throw new Error("start must be a number or null");if(t!=null&&typeof t!="number")throw new Error("stop must be a number or null");if(r!=null&&typeof r!="number")throw new Error("step must be a number or null");t==null&&(t=e||0,e=0),r==null&&(r=t>e?1:-1);for(var n=[],o=e<t;o?e<t:e>t;e+=r)n.push(e);return n}const ie=B(rn);var Le={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(i=o(i,n(a)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var s="";for(var a in i)t.call(i,a)&&i[a]&&(s=o(s,a));return s}function o(i,s){return s?i?i+" "+s:i+s:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Le);var an=Le.exports;const ae=B(an);var sn=200,se="__lodash_hash_undefined__",un=9007199254740991,cn="[object Arguments]",ln="[object Function]",fn="[object GeneratorFunction]",dn=/[\\^$.*+?()[\]{}|]/g,pn=/^\[object .+?Constructor\]$/,hn=typeof $=="object"&&$&&$.Object===Object&&$,vn=typeof self=="object"&&self&&self.Object===Object&&self,ue=hn||vn||Function("return this")();function mn(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function yn(e,t){var r=e?e.length:0;return!!r&&Nn(e,t,0)>-1}function gn(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function bn(e,t,r,n){for(var o=e.length,i=r+-1;++i<o;)if(t(e[i],i,e))return i;return-1}function Nn(e,t,r){if(t!==t)return bn(e,_n,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function _n(e){return e!==e}function An(e,t){return e.has(t)}function Sn(e,t){return e==null?void 0:e[t]}function wn(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var Tn=Array.prototype,Pn=Function.prototype,ce=Object.prototype,Q=ue["__core-js_shared__"],Ne=function(){var e=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fe=Pn.toString,G=ce.hasOwnProperty,Ue=ce.toString,En=RegExp("^"+Fe.call(G).replace(dn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_e=ue.Symbol,Rn=ce.propertyIsEnumerable,In=Tn.splice,Ae=_e?_e.isConcatSpreadable:void 0,Se=Math.max,Mn=Be(ue,"Map"),K=Be(Object,"create");function O(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function xn(){this.__data__=K?K(null):{}}function On(e){return this.has(e)&&delete this.__data__[e]}function jn(e){var t=this.__data__;if(K){var r=t[e];return r===se?void 0:r}return G.call(t,e)?t[e]:void 0}function kn(e){var t=this.__data__;return K?t[e]!==void 0:G.call(t,e)}function Dn(e,t){var r=this.__data__;return r[e]=K&&t===void 0?se:t,this}O.prototype.clear=xn;O.prototype.delete=On;O.prototype.get=jn;O.prototype.has=kn;O.prototype.set=Dn;function C(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Cn(){this.__data__=[]}function qn(e){var t=this.__data__,r=V(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():In.call(t,r,1),!0}function Kn(e){var t=this.__data__,r=V(t,e);return r<0?void 0:t[r][1]}function $n(e){return V(this.__data__,e)>-1}function Ln(e,t){var r=this.__data__,n=V(r,e);return n<0?r.push([e,t]):r[n][1]=t,this}C.prototype.clear=Cn;C.prototype.delete=qn;C.prototype.get=Kn;C.prototype.has=$n;C.prototype.set=Ln;function q(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Fn(){this.__data__={hash:new O,map:new(Mn||C),string:new O}}function Un(e){return H(this,e).delete(e)}function Bn(e){return H(this,e).get(e)}function Gn(e){return H(this,e).has(e)}function Vn(e,t){return H(this,e).set(e,t),this}q.prototype.clear=Fn;q.prototype.delete=Un;q.prototype.get=Bn;q.prototype.has=Gn;q.prototype.set=Vn;function F(e){var t=-1,r=e?e.length:0;for(this.__data__=new q;++t<r;)this.add(e[t])}function Hn(e){return this.__data__.set(e,se),this}function Wn(e){return this.__data__.has(e)}F.prototype.add=F.prototype.push=Hn;F.prototype.has=Wn;function V(e,t){for(var r=e.length;r--;)if(rr(e[r][0],t))return r;return-1}function Jn(e,t,r,n){var o=-1,i=yn,s=!0,a=e.length,u=[],c=t.length;if(!a)return u;t.length>=sn&&(i=An,s=!1,t=new F(t));e:for(;++o<a;){var v=e[o],p=v;if(v=v!==0?v:0,s&&p===p){for(var f=c;f--;)if(t[f]===p)continue e;u.push(v)}else i(t,p,n)||u.push(v)}return u}function Xn(e,t,r,n,o){var i=-1,s=e.length;for(r||(r=Zn),o||(o=[]);++i<s;){var a=e[i];r(a)&&gn(o,a)}return o}function zn(e){if(!Ve(e)||er(e))return!1;var t=Ge(e)||wn(e)?En:pn;return t.test(tr(e))}function Yn(e,t){return t=Se(t===void 0?e.length-1:t,0),function(){for(var r=arguments,n=-1,o=Se(r.length-t,0),i=Array(o);++n<o;)i[n]=r[t+n];n=-1;for(var s=Array(t+1);++n<t;)s[n]=r[n];return s[t]=i,mn(e,this,s)}}function H(e,t){var r=e.__data__;return Qn(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Be(e,t){var r=Sn(e,t);return zn(r)?r:void 0}function Zn(e){return ir(e)||or(e)||!!(Ae&&e&&e[Ae])}function Qn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function er(e){return!!Ne&&Ne in e}function tr(e){if(e!=null){try{return Fe.call(e)}catch{}try{return e+""}catch{}}return""}var nr=Yn(function(e,t){return ee(e)?Jn(e,Xn(t,1,ee)):[]});function rr(e,t){return e===t||e!==e&&t!==t}function or(e){return ee(e)&&G.call(e,"callee")&&(!Rn.call(e,"callee")||Ue.call(e)==cn)}var ir=Array.isArray;function ar(e){return e!=null&&sr(e.length)&&!Ge(e)}function ee(e){return ur(e)&&ar(e)}function Ge(e){var t=Ve(e)?Ue.call(e):"";return t==ln||t==fn}function sr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=un}function Ve(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ur(e){return!!e&&typeof e=="object"}var cr=nr;const we=B(cr);function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e,t,r){return t&&lr(e.prototype,t),e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te.apply(this,arguments)}function X(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},D(e)}function ne(e,t){return ne=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},ne(e,t)}function fr(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function dr(e,t){if(e==null)return{};var r=fr(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:S(e)}function pr(e,t){return hr(e)||vr(e,t)||mr()}function hr(e){if(Array.isArray(e))return e}function vr(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s=e[Symbol.iterator](),a;!(n=(a=s.next()).done)&&(r.push(a.value),!(t&&r.length===t));n=!0);}catch(u){o=!0,i=u}finally{try{!n&&s.return!=null&&s.return()}finally{if(o)throw i}}return r}function mr(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var yr=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],gr=["Db","Eb","Gb","Ab","Bb"],br={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},U=12,le=U,fe=127,Nr=/([a-g])([#b]?)(\d+)/,re=12;function _r(e){if(!e)throw Error("Invalid note argument");var t=Nr.exec(e.toLowerCase());if(!t)throw Error("Invalid note argument");var r=pr(t,4),n=r[1],o=r[2],i=r[3],s="".concat(n.toUpperCase()).concat(o),a=br[s];if(a==null)throw Error("Invalid note argument");return U+a+re*parseInt(i,10)}function Ar(e){var t=(e-U)%re,r=Math.floor((e-U)/re),n=yr[t];return{note:"".concat(n).concat(r),pitchName:n,octave:r,midiNumber:e,isAccidental:gr.includes(n)}}function Sr(){return ie(le,fe+1).reduce(function(e,t){return e[t]=Ar(t),e},{})}var wr=Sr();function He(e){var t=wr[e];if(!t)throw Error("Invalid MIDI number");return t}var Tr=ie(le,fe+1).filter(function(e){return!He(e).isAccidental}),E={fromNote:_r,getAttributes:He,MIN_MIDI_NUMBER:le,MAX_MIDI_NUMBER:fe,NATURAL_MIDI_NUMBERS:Tr},de=function(e){X(t,e);function t(){var r,n;W(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=z(this,(r=D(t)).call.apply(r,[this].concat(i))),N(S(n),"onPlayNoteInput",function(){n.props.onPlayNoteInput(n.props.midiNumber)}),N(S(n),"onStopNoteInput",function(){n.props.onStopNoteInput(n.props.midiNumber)}),n}return J(t,[{key:"getAbsoluteKeyPosition",value:function(n){var o=7,i=E.getAttributes(n),s=i.octave,a=i.pitchName,u=this.props.pitchPositions[a],c=o*s;return u+c}},{key:"getRelativeKeyPosition",value:function(n){return this.getAbsoluteKeyPosition(n)-this.getAbsoluteKeyPosition(this.props.noteRange.first)}},{key:"render",value:function(){var n=this.props,o=n.naturalKeyWidth,i=n.accidentalWidthRatio,s=n.midiNumber,a=n.gliss,u=n.useTouchEvents,c=n.accidental,v=n.active,p=n.disabled,f=n.children;return P.createElement("div",{className:ae("ReactPiano__Key",{"ReactPiano__Key--accidental":c,"ReactPiano__Key--natural":!c,"ReactPiano__Key--disabled":p,"ReactPiano__Key--active":v}),style:{left:Te(this.getRelativeKeyPosition(s)*o),width:Te(c?i*o:o)},onMouseDown:u?null:this.onPlayNoteInput,onMouseUp:u?null:this.onStopNoteInput,onMouseEnter:a?this.onPlayNoteInput:null,onMouseLeave:this.onStopNoteInput,onTouchStart:u?this.onPlayNoteInput:null,onTouchCancel:u?this.onStopNoteInput:null,onTouchEnd:u?this.onStopNoteInput:null},P.createElement("div",{className:"ReactPiano__NoteLabelContainer"},f))}}]),t}(P.Component);N(de,"propTypes",{midiNumber:l.number.isRequired,naturalKeyWidth:l.number.isRequired,gliss:l.bool.isRequired,useTouchEvents:l.bool.isRequired,accidental:l.bool.isRequired,active:l.bool.isRequired,disabled:l.bool.isRequired,onPlayNoteInput:l.func.isRequired,onStopNoteInput:l.func.isRequired,accidentalWidthRatio:l.number.isRequired,pitchPositions:l.object.isRequired,children:l.node});N(de,"defaultProps",{accidentalWidthRatio:.65,pitchPositions:{C:0,Db:.55,D:1,Eb:1.8,E:2,F:3,Gb:3.5,G:4,Ab:4.7,A:5,Bb:5.85,B:6}});function Te(e){return"".concat(e*100,"%")}var pe=function(e){X(t,e);function t(){return W(this,t),z(this,D(t).apply(this,arguments))}return J(t,[{key:"getMidiNumbers",value:function(){return ie(this.props.noteRange.first,this.props.noteRange.last+1)}},{key:"getNaturalKeyCount",value:function(){return this.getMidiNumbers().filter(function(n){var o=E.getAttributes(n),i=o.isAccidental;return!i}).length}},{key:"getNaturalKeyWidth",value:function(){return 1/this.getNaturalKeyCount()}},{key:"getWidth",value:function(){return this.props.width?this.props.width:"100%"}},{key:"getHeight",value:function(){if(!this.props.width)return"100%";var n=this.props.width*this.getNaturalKeyWidth();return"".concat(n/this.props.keyWidthToHeight,"px")}},{key:"render",value:function(){var n=this,o=this.getNaturalKeyWidth();return P.createElement("div",{className:ae("ReactPiano__Keyboard",this.props.className),style:{width:this.getWidth(),height:this.getHeight()}},this.getMidiNumbers().map(function(i){var s=E.getAttributes(i);s.note;var a=s.isAccidental,u=!n.props.disabled&&n.props.activeNotes.includes(i);return P.createElement(de,{naturalKeyWidth:o,midiNumber:i,noteRange:n.props.noteRange,active:u,accidental:a,disabled:n.props.disabled,onPlayNoteInput:n.props.onPlayNoteInput,onStopNoteInput:n.props.onStopNoteInput,gliss:n.props.gliss,useTouchEvents:n.props.useTouchEvents,key:i},n.props.disabled?null:n.props.renderNoteLabel({isActive:u,isAccidental:a,midiNumber:i}))}))}}]),t}(P.Component);N(pe,"propTypes",{noteRange:Pr,activeNotes:l.arrayOf(l.number),onPlayNoteInput:l.func.isRequired,onStopNoteInput:l.func.isRequired,renderNoteLabel:l.func.isRequired,keyWidthToHeight:l.number.isRequired,className:l.string,disabled:l.bool,gliss:l.bool,useTouchEvents:l.bool,width:l.number});N(pe,"defaultProps",{disabled:!1,gliss:!1,useTouchEvents:!1,keyWidthToHeight:.33,renderNoteLabel:function(){}});function Pe(e){return typeof e!="number"?!1:E.NATURAL_MIDI_NUMBERS.includes(e)}function Pr(e,t,r){var n=e[t],o=n.first,i=n.last;if(!o||!i)return new Error("Invalid prop ".concat(t," supplied to ").concat(r,". ").concat(t," must be an object with .first and .last values."));if(!Pe(o)||!Pe(i))return new Error("Invalid prop ".concat(t," supplied to ").concat(r,". ").concat(t," values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes)."));if(o>=i)return new Error("Invalid prop ".concat(t," supplied to ").concat(r,". ").concat(t,".first must be smaller than ").concat(t,".last."))}var he=function(e){X(t,e);function t(){var r,n;W(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=z(this,(r=D(t)).call.apply(r,[this].concat(i))),N(S(n),"state",{isMouseDown:!1,useTouchEvents:!1}),N(S(n),"handleNoteChanges",function(a){var u=a.prevActiveNotes,c=a.nextActiveNotes;if(!n.props.disabled){var v=we(u,c),p=we(c,u);p.forEach(function(f){n.props.playNote(f)}),v.forEach(function(f){n.props.stopNote(f)})}}),N(S(n),"getMidiNumberForKey",function(a){if(!n.props.keyboardShortcuts)return null;var u=n.props.keyboardShortcuts.find(function(c){return c.key===a});return u&&u.midiNumber}),N(S(n),"getKeyForMidiNumber",function(a){if(!n.props.keyboardShortcuts)return null;var u=n.props.keyboardShortcuts.find(function(c){return c.midiNumber===a});return u&&u.key}),N(S(n),"onKeyDown",function(a){if(!(a.ctrlKey||a.metaKey||a.shiftKey)){var u=n.getMidiNumberForKey(a.key);u&&n.onPlayNoteInput(u)}}),N(S(n),"onKeyUp",function(a){var u=n.getMidiNumberForKey(a.key);u&&n.onStopNoteInput(u)}),N(S(n),"onPlayNoteInput",function(a){n.props.disabled||n.props.onPlayNoteInput(a,n.props.activeNotes)}),N(S(n),"onStopNoteInput",function(a){n.props.disabled||n.props.onStopNoteInput(a,n.props.activeNotes)}),N(S(n),"onMouseDown",function(){n.setState({isMouseDown:!0})}),N(S(n),"onMouseUp",function(){n.setState({isMouseDown:!1})}),N(S(n),"onTouchStart",function(){n.setState({useTouchEvents:!0})}),N(S(n),"renderNoteLabel",function(a){var u=a.midiNumber,c=a.isActive,v=a.isAccidental,p=n.getKeyForMidiNumber(u);return n.props.renderNoteLabel({keyboardShortcut:p,midiNumber:u,isActive:c,isAccidental:v})}),n}return J(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}},{key:"componentDidUpdate",value:function(n,o){this.props.activeNotes!==n.activeNotes&&this.handleNoteChanges({prevActiveNotes:n.activeNotes||[],nextActiveNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){return P.createElement("div",{style:{width:"100%",height:"100%"},onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchStart:this.onTouchStart,"data-testid":"container"},P.createElement(pe,{noteRange:this.props.noteRange,onPlayNoteInput:this.onPlayNoteInput,onStopNoteInput:this.onStopNoteInput,activeNotes:this.props.activeNotes,className:this.props.className,disabled:this.props.disabled,width:this.props.width,keyWidthToHeight:this.props.keyWidthToHeight,gliss:this.state.isMouseDown,useTouchEvents:this.state.useTouchEvents,renderNoteLabel:this.renderNoteLabel}))}}]),t}(P.Component);N(he,"propTypes",{noteRange:l.object.isRequired,activeNotes:l.arrayOf(l.number.isRequired).isRequired,playNote:l.func.isRequired,stopNote:l.func.isRequired,onPlayNoteInput:l.func.isRequired,onStopNoteInput:l.func.isRequired,renderNoteLabel:l.func.isRequired,className:l.string,disabled:l.bool,width:l.number,keyWidthToHeight:l.number,keyboardShortcuts:l.arrayOf(l.shape({key:l.string.isRequired,midiNumber:l.number.isRequired}))});N(he,"defaultProps",{renderNoteLabel:function(t){var r=t.keyboardShortcut;t.midiNumber;var n=t.isActive,o=t.isAccidental;return r?P.createElement("div",{className:ae("ReactPiano__NoteLabel",{"ReactPiano__NoteLabel--active":n,"ReactPiano__NoteLabel--accidental":o,"ReactPiano__NoteLabel--natural":!o})},r):null}});var We=function(e){X(t,e);function t(){var r,n;W(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=z(this,(r=D(t)).call.apply(r,[this].concat(i))),N(S(n),"state",{activeNotes:n.props.activeNotes||[]}),N(S(n),"handlePlayNoteInput",function(a){n.setState(function(u){return n.props.onPlayNoteInput&&n.props.onPlayNoteInput(a,{prevActiveNotes:u.activeNotes}),u.activeNotes.includes(a)?null:{activeNotes:u.activeNotes.concat(a)}})}),N(S(n),"handleStopNoteInput",function(a){n.setState(function(u){return n.props.onStopNoteInput&&n.props.onStopNoteInput(a,{prevActiveNotes:n.state.activeNotes}),{activeNotes:u.activeNotes.filter(function(c){return a!==c})}})}),n}return J(t,[{key:"componentDidUpdate",value:function(n){n.activeNotes!==this.props.activeNotes&&this.state.activeNotes!==this.props.activeNotes&&this.setState({activeNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){var n=this.props;n.activeNotes,n.onPlayNoteInput,n.onStopNoteInput;var o=dr(n,["activeNotes","onPlayNoteInput","onStopNoteInput"]);return P.createElement(he,te({activeNotes:this.state.activeNotes,onPlayNoteInput:this.handlePlayNoteInput,onStopNoteInput:this.handleStopNoteInput},o))}}]),t}(P.Component);N(We,"propTypes",{noteRange:l.object.isRequired,activeNotes:l.arrayOf(l.number.isRequired),playNote:l.func.isRequired,stopNote:l.func.isRequired,onPlayNoteInput:l.func,onStopNoteInput:l.func,renderNoteLabel:l.func,className:l.string,disabled:l.bool,width:l.number,keyWidthToHeight:l.number,keyboardShortcuts:l.arrayOf(l.shape({key:l.string.isRequired,midiNumber:l.number.isRequired}))});const Er=({highlightedNote:e})=>{const[t,r]=R.useState(null),[n,o]=R.useState(null),[i,s]=R.useState([]),a=E.fromNote("c3"),u=E.fromNote("f5");R.useEffect(()=>{const d=new(window.AudioContext||window.webkitAudioContext);return r(d),$e.instrument(d,"acoustic_grand_piano").then(y=>{o(y)}),()=>{t&&t.close()}},[]);const c=d=>{if(n){const y=E.getAttributes(d).note;n.play(y),s(w=>[...w,y].slice(-8))}},v=d=>{n&&n.stop()},p=d=>{if(!e)return!1;const y=b(d),w=b(e);return y===w},f={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},b=d=>{const y=d.slice(0,-1),w=d.slice(-1);return`${f[y]||y}${w}`},m=d=>{const y=["C#","D#","F#","G#","A#"],w=d.slice(0,-1);return y.includes(w)};return T.jsxs("div",{children:[T.jsx(We,{noteRange:{first:a,last:u},playNote:c,stopNote:v,width:1e3,renderNoteLabel:({midiNumber:d})=>{const y=E.getAttributes(d).note,w=b(y),M=p(y),Y=m(w);return T.jsx("span",{className:`piano-note-label ${M?"highlighted":""} ${Y?"sharp-note":"non-sharp-note"}`,children:w})},renderKey:({midiNumber:d})=>{const y=E.getAttributes(d).note,w=p(y),M=m(y);return T.jsx("div",{className:`piano-key ${w?"highlighted":""} ${M?"sharp-key":"non-sharp-key"}`},d)}}),T.jsxs("div",{children:[T.jsx("h3",{className:"mt-5",children:"Notes Played:"}),T.jsx("p",{children:i.map((d,y)=>T.jsxs("span",{style:{color:y<i.length-1?"gray":"white"},children:[b(d),y<i.length-1&&", "]},y))})]})]})};function Mr(){const[e,t]=R.useState(null),[r,n]=R.useState(!1),o=()=>{n(!0)};return T.jsxs("div",{className:"text-center",children:[T.jsx(nn,{setHighlightedNote:t}),T.jsx("button",{className:"button-89 mb-5",onClick:o,children:"Send Note to Keyboard"}),T.jsx(Er,{highlightedNote:r?e:null})]})}export{Mr as default};
