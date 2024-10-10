import{r as t,j as e,c as C,R as N}from"./chunk-bdfe01d7.js";import"./chunk-725317a4.js";/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=(...a)=>a.filter((n,r,o)=>!!n&&o.indexOf(n)===r).join(" ");/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=t.forwardRef(({color:a="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:i="",children:c,iconNode:m,...h},u)=>t.createElement("svg",{ref:u,...M,width:n,height:n,stroke:a,strokeWidth:o?Number(r)*24/Number(n):r,className:S("lucide",i),...h},[...m.map(([p,d])=>t.createElement(p,d)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(a,n)=>{const r=t.forwardRef(({className:o,...i},c)=>t.createElement(E,{ref:c,iconNode:n,className:S(`lucide-${R(a)}`,o),...i}));return r.displayName=`${a}`,r};/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=x("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=x("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=x("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),T=()=>{const[a,n]=t.useState(!1),[r,o]=t.useState(0),[i,c]=t.useState(""),[m,h]=t.useState(!1),[u,p]=t.useState(""),[d,f]=t.useState(!1),[g,y]=t.useState(!1);t.useEffect(()=>{chrome.storage.sync.get("darkMode",s=>{s.darkMode!==void 0&&n(s.darkMode)})},[]),t.useEffect(()=>{document.body.classList.toggle("dark-mode",a),chrome.storage.sync.set({darkMode:a})},[a]);const w=()=>{f(!0),o(0),chrome.tabs.query({active:!0,currentWindow:!0},s=>{s[0].id&&chrome.tabs.sendMessage(s[0].id,{action:"START_OCR"})})},v=async()=>{y(!0);try{const j=(await(await fetch("https://op-answers.vercel.app/generate_answer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:u})})).json()).answer||"No answer found.";chrome.tabs.query({active:!0,currentWindow:!0},b=>{b[0].id&&chrome.tabs.sendMessage(b[0].id,{action:"SHOW_ANSWER",answer:j})}),console.log(j)}catch(s){console.error("Error submitting question:",s)}finally{y(!1)}};return t.useEffect(()=>{const s=l=>{l.action==="OCR_PROGRESS"?o(l.progress*100):l.action==="OCR_RESULT"&&(c(l.text),f(!1))};return chrome.runtime.onMessage.addListener(s),()=>{chrome.runtime.onMessage.removeListener(s)}},[]),t.useEffect(()=>{const s=setTimeout(()=>{h(!0),setTimeout(()=>{window.close()},300)},3e5);return()=>clearTimeout(s)},[]),e.jsxs("div",{className:`popup-container ${a?"dark-mode":""} ${m?"closing":""}`,children:[e.jsx("header",{className:"popup-header",children:e.jsx("h1",{children:"Homework AI"})}),e.jsxs("main",{className:"popup-content",children:[e.jsxs("div",{className:"input-container",children:[e.jsx("input",{type:"text",placeholder:"Enter your question",value:u,onChange:s=>p(s.target.value)}),e.jsx("button",{className:`icon-button ${g?"submitting":""}`,onClick:v,"aria-label":"Submit question",disabled:g,children:g?e.jsx(k,{size:20,className:"spin"}):e.jsx(O,{size:20})})]}),e.jsx("div",{className:"button-container",children:e.jsxs("button",{className:`start-ocr-button ${d?"scanning":""}`,onClick:w,disabled:d,children:[d?e.jsx(k,{size:20,className:"spin"}):e.jsx(L,{size:20}),e.jsx("span",{children:d?"Scanning...":"Scan"})]})}),r>0&&r<100&&e.jsx("div",{className:"progress-bar-container",children:e.jsx("div",{className:"progress-bar",style:{width:`${r}%`},role:"progressbar","aria-valuenow":r,"aria-valuemin":"0","aria-valuemax":"100"})}),i&&e.jsxs("div",{className:"ocr-result",children:[e.jsx("h2",{children:"Scanned Text:"}),e.jsx("p",{children:i})]})]})]})};C.createRoot(document.getElementById("app")).render(e.jsx(N.StrictMode,{children:e.jsx(T,{})}));
