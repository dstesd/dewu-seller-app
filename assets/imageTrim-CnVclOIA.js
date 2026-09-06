import{c as p}from"./index-BFoyPUDv.js";/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],v=p("image-plus",u);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],I=p("tag",x),T=["运动鞋","服装","配饰","电子产品","美妆护肤","家居用品","其他"],E=.3,y=.67,k=n=>{if(!n.getContext("2d"))return n;const s=n.width,a=n.height;if(s<10||a<10)return n;const o=Math.floor(a*E),d=Math.floor(a*y),c=s,t=d-o;if(t<10)return n;const r=document.createElement("canvas");r.width=c,r.height=t;const e=r.getContext("2d");return e?(e.fillStyle="#ffffff",e.fillRect(0,0,c,t),e.drawImage(n,0,o,c,t,0,0,c,t),r):n},M=(n,l=400,s=.7)=>new Promise((a,o)=>{const d=new FileReader;d.onload=c=>{var r;const t=new Image;t.onload=()=>{try{const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const w=e.getContext("2d");if(!w){o(new Error("canvas context 不可用"));return}w.drawImage(t,0,0);const h=k(e);let i=h.width,f=h.height;i>l&&(f=f*l/i,i=l);const g=document.createElement("canvas");g.width=i,g.height=f;const m=g.getContext("2d");if(!m){a(h.toDataURL("image/jpeg",s));return}m.fillStyle="#ffffff",m.fillRect(0,0,i,f),m.drawImage(h,0,0,i,f),a(g.toDataURL("image/jpeg",s))}catch(e){o(e instanceof Error?e:new Error("图片处理失败"))}},t.onerror=()=>o(new Error("图片加载失败")),t.src=(r=c.target)==null?void 0:r.result},d.onerror=()=>o(new Error("文件读取失败")),d.readAsDataURL(n)});export{T as C,v as I,I as T,M as t};
