import{j as e,r,R as ke}from"./react-C252U15y.js";import{c as Le}from"./react-dom-BAAMzEs4.js";import{B as De}from"./react-router-dom-ClROt8Fl.js";import{O as Pe,u as Ae,a as W,N as K,b as Oe,c as Q}from"./react-router-BQrhW6os.js";import{L as G,T as X,C as Z,R as Ie,a as ee,I as Te,S as te,b as se,P as _e,c as ae,V as Ee,d as re,e as ne,f as Ve,g as Fe,h as oe,i as Be,j as ze,k as Ue,O as ie,l as $e,m as le,n as Qe,o as de,D as ce,p as qe}from"./@radix-ui-CehGYX5k.js";import{c as Je}from"./clsx-B-dksMZM.js";import{t as Me}from"./tailwind-merge-D696Ktp4.js";import{C as me,a as He,b as Ye,c as We,U as q,X as Ke,d as Ge,e as Xe,S as Ze,F as et,f as tt}from"./lucide-react-BNiSQRYJ.js";import{c as I}from"./class-variance-authority-Dp3B9jqt.js";import{j as J}from"./jsqr-DgODXIw-.js";import{V as M,O as st}from"./react-hot-toast-vo2GgA2A.js";import"./scheduler-DYLXRpC5.js";import"./@remix-run-C821s7Ri.js";import"./@floating-ui-CsIYOSCl.js";import"./aria-hidden-DQ5UC2Eg.js";import"./react-remove-scroll-C-05hfGa.js";import"./tslib-CDuPK5Eb.js";import"./react-remove-scroll-bar-BvAwWdOY.js";import"./react-style-singleton-BVG2qVoU.js";import"./get-nonce-C-Z93AgS.js";import"./use-sidecar-BjxMYoMA.js";import"./use-callback-ref-CD1LLw1M.js";import"./goober-np-fLvOt.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();const at=()=>e.jsxs("main",{className:"w-full h-full",children:[e.jsx(Pe,{}),e.jsx("div",{className:"mt-32"})]});function i(...t){return Me(Je(t))}const ue=Ie,T=r.forwardRef(({className:t,...s},a)=>e.jsx(G,{ref:a,className:i("inline-flex h-10 gap-4 items-center justify-center rounded-md  p-1 text-muted-foreground",t),...s}));T.displayName=G.displayName;const S=r.forwardRef(({className:t,...s},a)=>e.jsx(X,{ref:a,className:i("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-black data-[state=active]:text-white",t),...s}));S.displayName=X.displayName;const O=r.forwardRef(({className:t,...s},a)=>e.jsx(Z,{ref:a,className:i("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...s}));O.displayName=Z.displayName;const rt=({selectedLevel:t,setSelectedLevel:s})=>e.jsx("div",{className:"py-1 border-b border-secondary",children:e.jsx(ue,{defaultValue:t,className:"w-full",children:e.jsxs(T,{className:"w-full  justify-start",children:[e.jsx(S,{className:"rounded-full font-bold  bg-secondary",value:"Primary",onClick:()=>s("Primary"),children:"Primary"}),e.jsx(S,{value:"O'Level",className:"rounded-full  bg-secondary font-bold",onClick:()=>s("O'Level"),children:"O'Level"})]})})}),nt=({sidebar:t,content:s})=>e.jsxs("div",{className:"flex flex-1 container mx-auto",children:[t,e.jsx("main",{className:"flex-1 ml-4 rounded-xl mt-4 ring-1 ring-secondary p-4",children:s})]}),ot=({children:t})=>e.jsx("div",{className:"flex flex-col min-h-screen  items-center justify-center",children:e.jsx("div",{className:"container mx-auto max-w-5xl px-4",children:t})}),_=({children:t,variant:s="default",className:a=""})=>{const n={default:"text-base",title:"font-bold text-xl",subtitle:"text-sm text-gray-500",label:"font-medium text-sm text-gray-500"};return e.jsx("span",{className:`${n[s]} ${a}`,children:t})},it=()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("img",{width:40,height:40,src:"/images/logo.png",alt:""}),e.jsx(_,{variant:"title",children:"Exam Results"})]}),lt=Be,dt=ze,fe=r.forwardRef(({className:t,children:s,...a},n)=>e.jsxs(ee,{ref:n,className:i("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-full border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...a,children:[s,e.jsx(Te,{asChild:!0,children:e.jsx(me,{className:"h-4 w-4 opacity-50"})})]}));fe.displayName=ee.displayName;const xe=r.forwardRef(({className:t,...s},a)=>e.jsx(te,{ref:a,className:i("flex cursor-default items-center justify-center py-1",t),...s,children:e.jsx(He,{className:"h-4 w-4"})}));xe.displayName=te.displayName;const ge=r.forwardRef(({className:t,...s},a)=>e.jsx(se,{ref:a,className:i("flex cursor-default items-center justify-center py-1",t),...s,children:e.jsx(me,{className:"h-4 w-4"})}));ge.displayName=se.displayName;const he=r.forwardRef(({className:t,children:s,position:a="popper",...n},o)=>e.jsx(_e,{children:e.jsxs(ae,{ref:o,className:i("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:a,...n,children:[e.jsx(xe,{}),e.jsx(Ee,{className:i("p-1",a==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),e.jsx(ge,{})]})}));he.displayName=ae.displayName;const ct=r.forwardRef(({className:t,...s},a)=>e.jsx(re,{ref:a,className:i("px-2 py-1.5 text-sm font-semibold",t),...s}));ct.displayName=re.displayName;const y=r.forwardRef(({className:t,children:s,...a},n)=>e.jsxs(ne,{ref:n,className:i("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...a,children:[e.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(Ve,{children:e.jsx(Ye,{className:"h-4 w-4"})})}),e.jsx(Fe,{children:s})]}));y.displayName=ne.displayName;const mt=r.forwardRef(({className:t,...s},a)=>e.jsx(oe,{ref:a,className:i("-mx-1 my-1 h-px bg-muted",t),...s}));mt.displayName=oe.displayName;const ut=({selectedYear:t,setSelectedYear:s})=>e.jsxs(lt,{value:t,onValueChange:s,children:[e.jsx(fe,{className:"w-36",children:e.jsx(dt,{placeholder:"Year"})}),e.jsxs(he,{children:[e.jsx(y,{value:"2025",children:"2025"}),e.jsx(y,{value:"2024",children:"2024"}),e.jsx(y,{value:"2023",children:"2023"}),e.jsx(y,{value:"2022",children:"2022"}),e.jsx(y,{value:"2021",children:"2021"})]})]}),R=({icon:t,size:s=4,className:a=""})=>e.jsx(t,{className:`h-${s} w-${s} ${a}`}),ft=I("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground  hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground  hover:bg-destructive/90",outline:"border border-input bg-background  hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground  hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),N=r.forwardRef(({className:t,variant:s,size:a,asChild:n=!1,...o},l)=>{const c=n?Ue:"button";return e.jsx(c,{className:i(ft({variant:s,size:a,className:t})),ref:l,...o})});N.displayName="Button";const E=r.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:i("rounded-xl border bg-card text-card-foreground ",t),...s}));E.displayName="Card";const V=r.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:i("flex flex-col space-y-1.5 p-6",t),...s}));V.displayName="CardHeader";const F=r.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:i("font-semibold leading-none tracking-tight",t),...s}));F.displayName="CardTitle";const xt=r.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:i("text-sm text-muted-foreground",t),...s}));xt.displayName="CardDescription";const B=r.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:i("p-6 pt-0",t),...s}));B.displayName="CardContent";const pe=r.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:i("flex items-center p-6 pt-0",t),...s}));pe.displayName="CardFooter";const gt=({onScanSuccess:t})=>{const[s,a]=r.useState("camera"),[n,o]=r.useState(!1),[l,c]=r.useState(null),x=r.useRef(null),j=r.useRef(null),h=r.useRef(null),k=async()=>{try{c(null);const d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});x.current&&(x.current.srcObject=d,h.current=d,o(!0),requestAnimationFrame(f))}catch(d){c("Camera access denied or not available."),console.error("Error accessing camera:",d)}},p=()=>{h.current&&(h.current.getTracks().forEach(d=>d.stop()),h.current=null),o(!1)},f=()=>{if(!n||!x.current||!j.current)return;const d=x.current,m=j.current,v=m.getContext("2d");if(v&&d.readyState===d.HAVE_ENOUGH_DATA){m.height=d.videoHeight,m.width=d.videoWidth,v.drawImage(d,0,0,m.width,m.height);const u=v.getImageData(0,0,m.width,m.height),L=J(u.data,u.width,u.height,{inversionAttempts:"dontInvert"});if(L)try{const g=JSON.parse(L.data);if(b(g)){p(),t(g);return}}catch(g){console.log("error________________",g)}requestAnimationFrame(f)}else requestAnimationFrame(f)},w=d=>{var u;const m=(u=d.target.files)==null?void 0:u[0];if(!m)return;c(null);const v=new FileReader;v.onload=L=>{var U;const g=new Image;g.onload=()=>{const C=document.createElement("canvas"),D=C.getContext("2d");if(!D){c("Could not process image");return}C.width=g.width,C.height=g.height,D.drawImage(g,0,0);const P=D.getImageData(0,0,C.width,C.height),$=J(P.data,P.width,P.height,{inversionAttempts:"dontInvert"});if($)try{const A=JSON.parse($.data);if(b(A)){t(A);return}c("Invalid QR code format")}catch{c("Invalid QR code content")}else c("No QR code found in image")},g.src=(U=L.target)==null?void 0:U.result},v.readAsDataURL(m)},b=d=>typeof d=="object"&&typeof d.token=="string"&&typeof d.number=="string"&&typeof d.isExpired=="boolean";return ke.useEffect(()=>(s==="camera"?k():p(),()=>{p()}),[s]),e.jsxs(E,{className:"w-full max-w-md mx-auto",children:[e.jsx(V,{children:e.jsx(F,{children:"Scan QR Code"})}),e.jsxs(ue,{value:s,onValueChange:a,children:[e.jsxs(T,{className:"grid w-full grid-cols-2",children:[e.jsxs(S,{value:"camera",children:[e.jsx(We,{className:"mr-2 h-4 w-4"})," Camera"]}),e.jsxs(S,{value:"upload",children:[e.jsx(q,{className:"mr-2 h-4 w-4"})," Upload"]})]}),e.jsxs(B,{className:"p-4",children:[e.jsx(O,{value:"camera",className:"mt-0",children:e.jsxs("div",{className:"relative aspect-video bg-muted rounded overflow-hidden",children:[e.jsx("video",{ref:x,className:"w-full h-full object-cover",autoPlay:!0,playsInline:!0}),e.jsx("canvas",{ref:j,className:"hidden"}),n&&e.jsx("div",{className:"absolute inset-0 border-2 border-primary pointer-events-none",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"h-48 w-48 border-2 border-white border-dashed rounded-lg"})})})]})}),e.jsx(O,{value:"upload",className:"mt-0",children:e.jsxs("div",{className:"flex flex-col items-center justify-center p-6 border-2 border-dashed border-muted-foreground rounded-lg min-h-40",children:[e.jsx(q,{className:"h-10 w-10 text-muted-foreground mb-4"}),e.jsx("p",{className:"text-center text-sm text-muted-foreground mb-2",children:"Upload an image containing a QR code"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",id:"qr-file-input",onChange:w}),e.jsx(N,{variant:"outline",size:"sm",onClick:()=>{var d;return(d=document.getElementById("qr-file-input"))==null?void 0:d.click()},children:"Select File"})]})})]})]}),l&&e.jsx(pe,{className:"pt-0",children:e.jsx("p",{className:"text-sm text-destructive",children:l})})]})},ht=qe,pt=$e,ve=r.forwardRef(({className:t,...s},a)=>e.jsx(ie,{ref:a,className:i("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s}));ve.displayName=ie.displayName;const je=r.forwardRef(({className:t,children:s,...a},n)=>e.jsxs(pt,{children:[e.jsx(ve,{}),e.jsxs(le,{ref:n,className:i("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...a,children:[s,e.jsxs(Qe,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx(Ke,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));je.displayName=le.displayName;const be=r.forwardRef(({className:t,...s},a)=>e.jsx(de,{ref:a,className:i("text-lg font-semibold leading-none tracking-tight",t),...s}));be.displayName=de.displayName;const vt=r.forwardRef(({className:t,...s},a)=>e.jsx(ce,{ref:a,className:i("text-sm text-muted-foreground",t),...s}));vt.displayName=ce.displayName;const ye=r.createContext(null),jt=()=>{const t=sessionStorage.getItem("userData");if(!t)return null;try{return JSON.parse(t)}catch{return null}},bt=({children:t})=>{const[s,a]=r.useState(!1),[n,o]=r.useState(null),[l,c]=r.useState(!0),x=Ae();r.useEffect(()=>{j()},[]);const j=()=>{const f=jt();f&&(o(f),a(!0)),c(!1)},p={isAuthenticated:s,userData:n,login:(f,w)=>{const b={token:f,number:w};sessionStorage.setItem("userData",JSON.stringify(b)),o(b),a(!0),M.success("Logged in successfully"),x("/distribute")},logout:async()=>{sessionStorage.removeItem("userData"),o(null),a(!1),M.success("Logged out successfully"),x("/")},loading:l};return e.jsx(ye.Provider,{value:p,children:!l&&t})},z=()=>{const t=r.useContext(ye);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},yt=()=>{const[t,s]=r.useState(!1),{login:a}=z(),n=o=>{if(o.isExpired){alert("This QR code has expired. Please use a valid code.");return}console.log("data",o.token,o.number),s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(N,{variant:"outline",size:"sm",className:"flex rounded-full items-center",onClick:()=>s(!0),children:[e.jsx(R,{icon:Ge,className:"mr-2"}),"Login"]}),e.jsx(ht,{open:t,onOpenChange:s,children:e.jsxs(je,{children:[e.jsx(be,{children:"Login with QR Code"}),e.jsx(gt,{onScanSuccess:n})]})})]})},Nt=({selectedYear:t,setSelectedYear:s})=>e.jsx("header",{className:"bg-gray-150 border-b border-b-secondary shadow-none",children:e.jsxs("div",{className:"container mx-auto px-4 py-3 flex items-center justify-between",children:[e.jsx(it,{}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(ut,{selectedYear:t,setSelectedYear:s}),e.jsx(yt,{})]})]})}),wt=I("relative w-full rounded-lg border border-gray-200 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 [&>svg~*]:pl-7 dark:border-gray-800 dark:[&>svg]:text-gray-50",{variants:{variant:{default:"bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),Ne=r.forwardRef(({className:t,variant:s,...a},n)=>e.jsx("div",{ref:n,role:"alert",className:i(wt({variant:s}),t),...a}));Ne.displayName="Alert";const Ct=r.forwardRef(({className:t,...s},a)=>e.jsx("h5",{ref:a,className:i("mb-1 font-medium leading-none tracking-tight",t),...s}));Ct.displayName="AlertTitle";const we=r.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:i("text-sm [&_p]:leading-relaxed",t),...s}));we.displayName="AlertDescription";const St=()=>e.jsxs(Ne,{className:"mb-6",children:[e.jsx(R,{icon:Xe,className:"h-4 w-4"}),e.jsx(we,{children:"Please enter your registration number to view your examination results"})]}),Ce=r.forwardRef(({className:t,type:s,...a},n)=>e.jsx("input",{type:s,className:i("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:n,...a}));Ce.displayName="Input";const Se=({placeholder:t,value:s,onChange:a,onSearch:n=null})=>e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(R,{icon:Ze,className:"absolute left-2 top-2.5 text-gray-500"}),e.jsx(Ce,{placeholder:t,className:"pl-8 rounded-full",value:s,onChange:o=>a(o.target.value)})]}),n&&e.jsx("div",{className:"ml-2",children:e.jsx(N,{className:"text-black",onClick:n,children:"Search"})})]}),Rt=({registrationNumber:t,setRegistrationNumber:s,handleSearch:a})=>e.jsx("div",{className:"mb-6  p-3 rounded-md ",children:e.jsx(Se,{placeholder:"Search by registration number...",value:t,onChange:s,onSearch:a})}),kt=I("inline-flex items-center rounded-md border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300",{variants:{variant:{default:"border-transparent bg-gray-900 text-gray-50 shadow hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80",secondary:"border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",destructive:"border-transparent bg-red-500 text-gray-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/80",outline:"text-gray-950 dark:text-gray-50"}},defaultVariants:{variant:"default"}});function Lt({className:t,variant:s,...a}){return e.jsx("div",{className:i(kt({variant:s}),t),...a})}const Re=()=>e.jsx("div",{className:" flex flex-col items-center justify-center",children:e.jsxs("div",{className:"relative w-10 h-10",children:[e.jsx("div",{className:"absolute w-6 h-6 border border-white rounded-full"}),e.jsx("div",{className:"absolute w-6 h-6 border border-[#854836] rounded-full border-t-transparent animate-spin"})]})}),Dt=({results:t,selectedYear:s,selectedLevel:a})=>e.jsxs(E,{children:[e.jsx(V,{className:"pb-3 border-b",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(F,{children:"Examination Results"}),e.jsxs(_,{variant:"subtitle",children:[a," • ",s," • Showing ",t.length," results"]})]}),e.jsxs(Lt,{variant:"outline",className:"flex rounded-full py-2 items-center",children:[e.jsx(R,{icon:et,size:4,className:"mr-1 text-black"}),s]})]})}),e.jsx(B,{className:"p-0",children:t.length>0?e.jsx("div",{className:"divide-y",children:t.map(n=>e.jsxs("div",{className:"p-4 flex items-center justify-between hover:bg-gray-50",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium",children:n.name}),e.jsxs("div",{className:"flex items-center text-sm text-gray-500 mt-1 space-x-2",children:[e.jsxs("span",{className:"flex items-center",children:[e.jsx(R,{icon:tt,size:4,className:"mr-1"}),n.regNumber]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:n.level})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"mr-4",children:e.jsx("span",{className:"font-bold text-lg",children:n.score})}),e.jsx(N,{variant:"outline",size:"sm",children:"View Details"})]})]},n.id))}):e.jsx("div",{className:"p-8 text-center text-gray-500",children:e.jsx(Re,{})})})]}),Pt=({level:t,selectedLevel:s,onClick:a})=>e.jsx(N,{variant:s===t.id?"default":"ghost",className:"w-full text-black font-bold justify-start",onClick:()=>a(t.id),children:t.name}),At=({sidebarSearch:t,setSidebarSearch:s,selectedLevel:a,setSelectedLevel:n})=>{const l=[{id:"Primary",name:"Primary Level"},{id:"O'Level",name:"O'Level"}].filter(c=>c.name.toLowerCase().includes(t.toLowerCase()));return e.jsxs("aside",{className:"w-64 mt-4 rounded-xl bg-white p-4 ring-1 ring-secondary",children:[e.jsx("div",{className:"mb-6",children:e.jsx(Se,{placeholder:"Search levels...",value:t,onChange:s})}),e.jsxs("div",{className:"mt-6",children:[e.jsx(_,{variant:"label",className:"mb-2 block",children:"Choose Your Level"}),e.jsx("div",{className:"space-y-1",children:l.map(c=>e.jsx(Pt,{level:c,selectedLevel:a,onClick:n},c.id))})]})]})},Ot=()=>{const[t,s]=r.useState("2024"),[a,n]=r.useState("Primary"),[o,l]=r.useState(""),[c,x]=r.useState(""),[j,h]=r.useState(!1),[k,p]=r.useState([]),[f,w]=r.useState({}),b=[{id:1,name:"John Doe",level:"Primary",regNumber:"P2024001",year:"2024",score:"78%"},{id:2,name:"Jane Smith",level:"O'Level",regNumber:"O2024152",year:"2024",score:"82%"},{id:3,name:"Mike Johnson",level:"Primary",regNumber:"P2023087",year:"2023",score:"91%"},{id:4,name:"Sarah Williams",level:"O'Level",regNumber:"O2023045",year:"2023",score:"76%"},{id:5,name:"David Brown",level:"Primary",regNumber:"P2025012",year:"2025",score:"85%"}],d=()=>{if(!o)return;const m=`${o}-${t}-${a}`;if(f[m]){p(f[m]),h(!0);return}setTimeout(()=>{const v=b.filter(u=>u.regNumber.toLowerCase().includes(o.toLowerCase())&&u.year===t&&u.level===a);w(u=>({...u,[m]:v})),p(v),h(!0)},500)};return r.useEffect(()=>{p([]),h(!1)},[t,a]),e.jsxs(ot,{children:[e.jsx(Nt,{selectedYear:t,setSelectedYear:s}),e.jsx(nt,{sidebar:e.jsx(At,{sidebarSearch:c,setSidebarSearch:x,selectedLevel:a,setSelectedLevel:n}),content:e.jsxs(e.Fragment,{children:[e.jsx(rt,{selectedLevel:a,setSelectedLevel:n}),!j&&e.jsx(St,{}),e.jsx(Rt,{registrationNumber:o,setRegistrationNumber:l,handleSearch:d}),e.jsx(Dt,{results:j?k:[],selectedYear:t,selectedLevel:a})]})})]})},It=[{path:"/",element:at,protected:!1,children:[{path:"",element:Ot,protected:!1,allowedRoles:["admin","student","teacher"]}],allowedRoles:["admin","student","teacher"]}],Tt=["/","/login"],H=({children:t})=>{const{isAuthenticated:s,loading:a}=z(),n=W();return a?e.jsx("div",{children:"Loading..."}):s&&Tt.includes(n.pathname)?e.jsx(K,{to:"/distribute",replace:!0}):e.jsx(e.Fragment,{children:t})},Y=({children:t,path:s})=>{const{isAuthenticated:a,userData:n,loading:o}=z(),l=W();return o?e.jsx(Re,{}):a?s==="/distribute"&&l.pathname==="/distribute"?e.jsx(e.Fragment,{children:t}):e.jsx(e.Fragment,{children:t}):e.jsx(K,{to:"/",state:{from:l},replace:!0})},_t=()=>e.jsx(De,{children:e.jsx(bt,{children:e.jsxs("main",{className:"overflow-x-hidden",children:[e.jsx(Oe,{children:It.map((t,s)=>e.jsx(Q,{path:t.path,element:t.protected?e.jsx(Y,{path:t.path,children:e.jsx(t.element,{})}):e.jsx(H,{children:e.jsx(t.element,{})}),children:t.children&&t.children.map((a,n)=>e.jsx(Q,{path:a.path,element:a.protected?e.jsx(Y,{path:a.path,children:e.jsx(a.element,{})}):e.jsx(H,{children:e.jsx(a.element,{})})},n))},s))}),e.jsx(st,{})]})})});Le(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(_t,{})}));
