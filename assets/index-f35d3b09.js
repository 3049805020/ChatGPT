import{u as Z,o as l,c,a as t,t as W,b as _,n as R,F as N,r as E,d as Y,e as ee,f as z,g as U,h as te,w as se,i as j,j as G,v as oe,k as B,l as ae,m as re,p as ne,q as le,s as ie,x as H,y as ce,z as de}from"./vendor-065b1503.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function h(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(s){if(s.ep)return;s.ep=!0;const d=h(s);fetch(s.href,d)}})();const ue={key:0,class:"mt-3"},pe=t("span",{class:"rounded px-1 py-0.5 border text-xs font-bold bg-yellow-400 border-yellow-400 text-gray-800"},"Ad",-1),me=t("span",{class:"px-1 font-bold"}," ·",-1),he=["href"],ge={__name:"Ad",setup(r){const m=localStorage.getItem("api_key");return(h,n)=>!Z(m)&&h.$window.show_ads?(l(),c("div",ue,[pe,me,t("a",{href:h.$window.promot_link,target:"_blank",class:"text-green-700 hover:text-green-600 transition"},W(h.$window.promot_text),9,he)])):_("",!0)}},fe={class:"box"},ve={class:"my-4 px-4 sm:px-6"},ye={class:"bg-white dark:bg-gray-900"},xe={key:0,class:"border dark:border-gray-900 rounded-md"},we={key:0,class:"flex flex-row py-4 px-4 sm:px-8 font-semibold text-gray-700 dark:text-gray-300 bg-neutral-100 dark:bg-gray-900"},be=t("span",{class:"pr-4 flex-grow-0 flex-shrink-0 w-10 sm:w-12"},"ME:",-1),ke={class:"flex-grow-1 dark:text-gray-300"},_e={key:1,class:"px-4 sm:px-8 py-4 flex flex-row text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800"},Se=t("span",{class:"font-semibold pr-4 flex-grow-0 flex-shrink-0 w-10 sm:w-12"},"AI:",-1),Ie={clas:"flex-grow-1 whitespace-pre-wrap",style:{"white-space":"pre-wrap"}},$e={key:0},Ce={key:1},We={key:2},Ae={key:3},Oe=["src"],ze={key:4},Te={key:5,class:"blink"},Ne={key:1,class:"py-24"},Pe=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1280",height:"314.982",viewBox:"0 0 338.667 83.339","xmlns:v":"https://vecta.io/nano",class:"w-40 mx-auto h-24"},[t("path",{d:"M200.154 32.427v.028c-.169 0-.339.028-.508.028s-.339-.028-.508-.028c-10.075 0-16.312 6.294-16.312 16.397v4.967c0 9.736 6.322 15.776 16.453 15.776a4.38 4.38 0 0 0 .621-.028c.141 0 .254.028.395.028 6.801 0 11.543-2.483 14.562-7.62l-6.011-3.472c-2.004 2.963-4.685 5.193-8.523 5.193-5.136 0-8.212-3.161-8.212-8.495V53.79h23.819v-5.87c0-9.426-6.18-15.494-15.776-15.494zm-.508 5.786c4.685.226 7.507 3.33 7.507 8.438v1.411h-15.07v-.819c0-5.644 2.681-8.805 7.563-9.031zm-36.998-5.758c-4.487 0-8.353 1.863-10.385 4.967l-.508.79v-4.911h-8.523v47.667h8.946v-16.65l.508.762c1.919 2.85 5.673 4.543 10.047 4.543h.226.197c7.366 0 14.788-4.798 14.788-15.55v-6.039c0-7.733-4.572-15.55-14.845-15.55l-.056-.028h-.197zm-2.088 6.717c5.193.085 8.41 3.612 8.41 9.257v5.192c0 5.644-3.246 9.144-8.495 9.257-4.882-.085-8.297-3.81-8.297-9.116v-5.334c0-5.362 3.443-9.144 8.382-9.257zm115.934-18.485l-17.215 48.09h9.68l3.302-10.301h18.795v.113l3.302 10.216h9.68l-17.243-48.09h-1.016l-.028-.028zm5.137 8.269l7.196 22.719h-14.45zm57.035-1.496v-6.773h-29.52v6.773h10.357v34.487h-10.357v6.773h29.52v-6.773h-10.357V27.46zm-97.139 4.996h-.254-.141c-4.995 0-8.551 1.693-10.301 4.939l-.536.988v-5.08h-8.523v35.446h8.946v-21.11c0-4.967 2.681-7.817 7.309-7.902 4.431.085 6.971 2.879 6.971 7.705v21.307h8.946V45.917c0-8.438-4.628-13.462-12.389-13.462zM114.473 19.699c-13.18 0-21.392 8.213-21.392 21.449v7.14c0 13.236 8.184 21.448 21.392 21.448h.198.197c13.18 0 21.392-8.212 21.392-21.448v-7.14c0-13.236-8.212-21.449-21.392-21.449h-.197zm.198 7.169c7.846.085 12.361 5.108 12.361 13.8v8.128c0 8.692-4.515 13.716-12.361 13.8-7.846-.085-12.362-5.108-12.362-13.8v-8.128c0-8.692 4.516-13.716 12.362-13.8zM36.751.001c-9.116 0-17.215 5.87-20.038 14.534A20.83 20.83 0 0 0 2.828 24.61C-1.744 32.512-.7 42.446 5.425 49.219 3.534 54.892 4.183 61.1 7.203 66.237c4.544 7.93 13.687 11.994 22.634 10.103a20.78 20.78 0 0 0 15.635 6.999c9.116 0 17.215-5.87 20.038-14.534 5.87-1.214 10.922-4.883 13.857-10.075 4.6-7.902 3.556-17.836-2.568-24.609v-.028a20.76 20.76 0 0 0-1.778-17.046C70.476 9.145 61.332 5.08 52.414 6.971A20.86 20.86 0 0 0 36.751.001zm0 5.419l-.028.028c3.669 0 7.197 1.27 10.019 3.613-.113.056-.339.197-.508.282L29.64 18.91c-.847.48-1.355 1.383-1.355 2.371v22.464l-7.14-4.12v-18.57A15.63 15.63 0 0 1 36.751 5.419zm19.99 6.54a15.62 15.62 0 0 1 13.566 7.825c1.806 3.161 2.483 6.858 1.862 10.442-.113-.085-.338-.197-.48-.282l-16.594-9.596a2.78 2.78 0 0 0-2.737 0L32.913 31.581V23.34l16.058-9.285a15.54 15.54 0 0 1 7.77-2.096zm-41.043 8.53v19.727c0 .988.508 1.863 1.355 2.371l19.416 11.204L29.3 57.94l-16.03-9.257a15.63 15.63 0 0 1-5.7-21.336 15.65 15.65 0 0 1 8.128-6.858zm37.196 4.882l16.058 9.257c7.479 4.318 10.018 13.857 5.7 21.336l.028.028c-1.834 3.161-4.713 5.588-8.128 6.83V43.095c0-.988-.508-1.891-1.355-2.37L45.753 29.492zm-11.797 6.802l8.185 4.741v9.454l-8.185 4.741-8.184-4.741v-9.454zm12.869 7.451l7.14 4.12v18.542c0 8.636-6.999 15.635-15.606 15.635v-.028c-3.641 0-7.197-1.27-9.991-3.612.113-.056.367-.198.508-.283l16.594-9.567c.847-.48 1.383-1.383 1.354-2.371zM49.309 51.76V60l-16.058 9.257c-7.479 4.29-17.018 1.75-21.336-5.701h.028c-1.834-3.133-2.484-6.858-1.863-10.442.113.085.339.197.48.282l16.594 9.596a2.78 2.78 0 0 0 2.737 0z"})],-1),je=t("div",{class:"text-center text-gray-500 px-12"},"基于 OpenAI 的 ChatGPT 自然语言模型人工智能对话",-1),Be=[Pe,je],Ee={__name:"Dialogs",props:{messages:Array,loading:Boolean},setup(r){return(m,h)=>(l(),c(N,null,[t("div",fe,[t("div",{class:"list",style:R({top:m.listTop+"px"})},[(l(!0),c(N,null,E(m.list,(n,s)=>(l(),c("div",{key:s},W(n)+"1 ",1))),128))],4)]),t("section",ve,[t("div",ye,[r.messages.length?(l(),c("div",xe,[(l(!0),c(N,null,E(r.messages,(n,s)=>(l(),c("div",{class:Y(["dark:border-gray-900",s===r.messages.length-1?"":"border-b"]),key:s},[n.who==="ME"?(l(),c("div",we,[be,t("span",ke,W(n.message.trim()),1)])):_("",!0),n.who==="AI"?(l(),c("div",_e,[Se,t("div",Ie,[t("div",null,[s!==r.messages.length-1&&n.message.trim().length===0?(l(),c("span",$e," AI 也不知道该说啥了，祝你平安吧~ ")):_("",!0),!r.loading&&s===r.messages.length-1&&n.message.trim().length===0?(l(),c("span",Ce," AI 也不知道该说啥了，祝你平安吧~ ")):_("",!0),!r.loading&&s===r.messages.length-1&&n.message.trim().length===0?(l(),c("span",We," AI 也不知道该说啥了，祝你平安吧~ ")):_("",!0),n.values==="2"?(l(),c("span",Ae,[t("img",{class:"product-image",src:n.message.trim(),height:"200",width:"200"},null,8,Oe)])):(l(),c("span",ze,W(n.message.trim()),1)),r.loading&&s===r.messages.length-1?(l(),c("span",Te)):(l(),ee(ge,{key:6}))])])])):_("",!0)],2))),128))])):(l(),c("div",Ne,Be))])])],64))}},Je={class:"relative py-20 sm:py-24 bg-white dark:bg-gray-800"},Me={class:"max-w-5xl mx-auto"},Fe=["onSubmit"],Ve=t("button",{type:"submit",class:"mx-2 sm:mx-4 px-3 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 whitespace-nowrap",onclick:"alert('设置成功')"}," 设置 ",-1),Ke={key:0,class:"text-gray-500 px-4 sm:px-6 pt-1 flex flex-row items-center text-sm dark:text-gray-400"},Le={class:"pl-1 sm:pl-2"},Qe=t("span",null,"总：",-1),Ue={class:"ml-3"},Ge=t("span",null,"已用：",-1),De={class:"ml-3"},Re=t("span",null,"剩余：",-1),He={key:1,class:"text-gray-500 px-4 sm:px-6 pt-1 flex flex-row items-center text-sm dark:text-gray-400"},qe=t("span",null,"不需要填key也可使用",-1),Xe={key:0},Ze={key:1},Ye={key:2},et={class:"box"},tt={class:"fixed bottom-0 left-0 right-0 py-3 bg-gray-100 border-t flex items-center justify-center dark:bg-gray-800 dark:border-t-gray-900"},st=["onSubmit"],ot=["onClick"],at=t("svg",{height:"800px",width:"800px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 482.827 482.827","xml:space":"preserve",class:"w-4 h-4"},[t("path",{d:`M241.413,0C171.855,0,106.16,30.011,60.606,81.465v-81.1H40.913v119.433h119.433v-19.692H70.671
			c41.954-50.628,104.403-80.413,170.743-80.413c122.26,0,221.721,99.462,221.721,221.721s-99.462,221.721-221.721,221.721
			S19.692,363.673,19.692,241.413c0-18.471,2.279-36.851,6.779-54.625l-19.096-4.827C2.481,201.313,0,221.317,0,241.413
			c0,133.115,108.298,241.413,241.413,241.413s241.413-108.298,241.413-241.413S374.529,0,241.413,0z`})],-1),rt=[at],nt=["value"],lt={key:1},it=t("button",{class:"px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 whitespace-nowrap",type:"submit"}," 发送 ",-1),ct=t("option",{value:"1"},"语言模式",-1),dt=t("option",{value:"2"},"图片模式",-1),ut=t("option",{value:"3"},"代码模式",-1),pt=t("option",{value:"4"},"文件模式",-1),mt=[ct,dt,ut,pt],ht={name:"myForm",data(){return{list:["已支持GPT3.5模型","可用自己的key 将无限制","公众号：十八设计周UI"],listTop:0,selected:"1"}},mounted(){this.setScroll()},methods:{setScroll(){var r=setInterval(()=>{this.listTop-=1,this.listTop===-40&&(this.list.push(this.list.splice(0,1)[0]),this.listTop=0,clearInterval(r),setTimeout(()=>{this.setScroll()},2e3))},20)},getvaluemethod:function(r){this.selected=r.target.value}}},gt=Object.assign(ht,{setup(r){const m=z(null),{proxy:h}=ie(),n=U([]),s=z(!1),d=z(""),p=z(""),u=U({total_available:0,total_granted:0,total_used:0}),b=z(!1),S=()=>{location.reload()},I=async()=>{const e=await ne({url:"https://agent-openai.ccrui.dev/dashboard/billing/credit_grants",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p.value}`}}).then(o=>o.data);u.total_available=parseFloat(e.total_available).toFixed(2),u.total_used=parseFloat(e.total_used).toFixed(2),u.total_granted=parseFloat(e.total_granted).toFixed(2)},y=()=>{p.value?(localStorage.setItem("api_key",p.value),I()):(localStorage.removeItem("api_key"),u.total_available=0,u.total_used=0,u.total_granted=0)};te(()=>{const e=localStorage.getItem("api_key"),o=localStorage.getItem("dark_mode");o&&(s.value=o==="true"),e&&(p.value=e,I())});let f=new FormData;function g(e){console.log(e);let o=e.target.files;f.append("file",o[0]),f.append("model","whisper-1"),console.log("modele  "+f.get("model")+"file  "+f.get("file"))}const v=()=>{var e=document.getElementById("apps"),o=e.selectedIndex;let i=e.options[o].value;if(b.value)return;const $=+localStorage.getItem("last_call");if(!p.value&&$&&rate_limit&&Date.now()-+$<rate_limit*1e3){h.$toast.show("你的请求频率太快了，请等3s。使用自己的APIKey无频率限制。",{type:"warning",maxToasts:1,duration:6e3});return}b.value=!0,n.push({who:"ME",message:d.value},{who:"AI",values:i,message:""}),le(()=>{m.value.scrollIntoView({smooth:!0})});let a=null;if(i==1){var C={model:"gpt-3.5-turbo",messages:[{role:"user",content:n.filter(k=>!!k.message).map(k=>`${k.who.toUpperCase()}: ${k.message.trim()}`).join(`
`).concat(`
AI: `)}],max_tokens:512,top_p:1,temperature:.7,frequency_penalty:0,presence_penalty:0,stop:["ME:","AI:"],stream:!0},A="https://agent-openai.ccrui.dev/v1/chat/completions";a=JSON.stringify(C)}else if(i==3){var O=my.sss.value,C={max_tokens:1e3,temperature:.9,frequency_penalty:0,presence_penalty:0,best_of:1,logprobs:0,stream:!0,echo:!0,prompt:O},A="https://agent-openai.ccrui.dev/v1/engines/code-davinci-002/completions";a=JSON.stringify(C)}else if(i==2){var O=my.sss.value,C={prompt:O,model:"image-alpha-001",n:1,size:"1024x1024"},A="https://agent-openai.ccrui.dev/v1/images/generations";a=JSON.stringify(C)}fetch(A,{method:"POST",body:a,headers:{"Content-Type":"application/json",Authorization:`Bearer ${p.value||"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"}`}}).then(x=>{if(x.status===200)return x.body;throw x}).then(x=>{const k=x.getReader();return new ReadableStream({start(M){function F(){k.read().then(({done:V,value:K})=>{if(V){console.log("done",V),M.close();return}M.enqueue(K);const L=new TextDecoder().decode(K);try{const Q=L.match(/data:\s/g),P=L.split("data:").filter(w=>!!w.trim()&&w.trim()!=="[DONE]");var T=null;i==1?T=P.map(w=>JSON.parse(w)).map(w=>w.choices[0].delta.content).join(""):i==3?T=P.map(w=>JSON.parse(w)).map(w=>w.choices[0].text).join(""):i==2&&(T=P.map(w=>JSON.parse(w)).map(w=>w.data[0].url).join(""));const X=n[n.length-1];X.message+=T,m.value.scrollIntoView({smooth:!0})}catch(Q){console.error(Q)}F()})}F()}})}).then(x=>new Response(x,{headers:{"Content-Type":"text/html"}}).text()).then(x=>{b.value=!1,localStorage.setItem("last_call",Date.now())}).catch(x=>{console.log(x);const k=n[n.length-1];switch(x.status){case 401:{k.message="错误的 API KEY";break}case 403:{k.message="无权访问";break}case 404:{k.message="未找到";break}case 429:{k.message="达到请求次数限制，请歇一会 | 使用自己key将独享";break}default:{console.log(x),k.message="出错了 "+x.message;break}}b.value=!1,localStorage.setItem("last_call",Date.now())}),d.value=""};return se(s,e=>{localStorage.setItem("dark_mode",e),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(e,o)=>(l(),c("div",null,[t("div",Je,[t("div",Me,[t("form",{class:"px-4 sm:px-6 flex flex-row items-center justify-between",onSubmit:j(y,["prevent"])},[G(t("input",{type:"text",placeholder:"你的key","onUpdate:modelValue":o[0]||(o[0]=i=>p.value=i),class:"px-3 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 flex-grow",onBlur:y},null,544),[[oe,p.value]]),Ve,t("button",{class:"px-3 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 whitespace-nowrap",onClick:I}," 查询 ")],40,Fe),p.value&&u.total_granted?(l(),c("div",Ke,[t("div",Le,[Qe,t("span",null,"$"+W(u.total_granted),1)]),t("div",Ue,[Ge,t("span",null,"$"+W(u.total_used),1)]),t("div",De,[Re,t("span",null,"$"+W(u.total_available),1)])])):_("",!0),p.value?_("",!0):(l(),c("div",He,[qe,e.$window.show_ads||e.$window.rate_limit?(l(),c("span",Xe,"，但")):_("",!0),e.$window.rate_limit?(l(),c("span",Ze,"请求频率受限")):_("",!0),e.$window.show_ads?(l(),c("span",Ye,"有广告")):_("",!0),B("。 ")])),t("div",et,[t("div",{class:"list",style:R({top:e.listTop+"px"})},[(l(!0),c(N,null,E(e.list,(i,$)=>(l(),c("div",{key:$},W(i),1))),128))],4)]),ae(Ee,{messages:n,loading:b.value},null,8,["messages","loading"]),t("div",{ref_key:"placeholder",ref:m},null,512),t("div",tt,[t("form",{onSubmit:j(v,["prevent"]),class:"flex-grow flex flex-row justify-center items-center max-w-5xl pl-2 pr-4 sm:pl-4 sm:pr-6",name:"my"},[t("button",{type:"button",class:"pl-2 pr-3 py-2 text-sm font-medium tracking-wide text-gray-500 dark:text-gray-300 focus:outline-none whitespace-nowrap",onClick:j(S,["prevent"])},rt,8,ot),e.selected!=4?(l(),c("input",{key:0,type:"text",name:"sss",class:"px-4 py-2 text-gray-700 bg-white border rounded-md mr-2 sm:mr-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 flex-grow",placeholder:"请输入",value:d.value,onInput:o[1]||(o[1]=i=>d.value=i.target.value)},null,40,nt)):_("",!0),e.selected==4?(l(),c("div",lt,[B(" 选择文件完直接点击发送 "),t("input",{type:"file",id:"putfile",ref:"inputer",onChange:g},null,544)])):_("",!0),it,B("   "),G(t("select",{id:"apps","onUpdate:modelValue":o[2]||(o[2]=i=>e.selected=i),onChange:o[3]||(o[3]=i=>e.getvaluemethod(i))},mt,544),[[re,e.selected]])],40,st)])])])]))}});window.Alpine=H;H.start();if({}.VITE_GUARD){let r=function(h,n){var s=m();return r=function(d,p){d=d-440;var u=s[d];if(r.KBntJm===void 0){var b=function(g){for(var v="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",e="",o="",i=0,$,a,C=0;a=g.charAt(C++);~a&&($=i%4?$*64+a:a,i++%4)?e+=String.fromCharCode(255&$>>(-2*i&6)):0)a=v.indexOf(a);for(var A=0,O=e.length;A<O;A++)o+="%"+("00"+e.charCodeAt(A).toString(16)).slice(-2);return decodeURIComponent(o)},S=function(g,v){var e=[],o=0,i,$="";g=b(g);var a;for(a=0;a<256;a++)e[a]=a;for(a=0;a<256;a++)o=(o+e[a]+v.charCodeAt(a%v.length))%256,i=e[a],e[a]=e[o],e[o]=i;a=0,o=0;for(var C=0;C<g.length;C++)a=(a+1)%256,o=(o+e[a])%256,i=e[a],e[a]=e[o],e[o]=i,$+=String.fromCharCode(g.charCodeAt(C)^e[(e[a]+e[o])%256]);return $};r.XgIAwo=S,h=arguments,r.KBntJm=!![]}var I=s[0],y=d+I,f=h[y];return f?u=f:(r.KgfUvS===void 0&&(r.KgfUvS=!![]),u=r.XgIAwo(u,p),h[y]=u),u},r(h,n)},m=function(){var h=function(){return[J,"BJpHjsbXPjiUuauUmMGkiP.UcArKopmIR.wNvf7k==","WPFcGvJdP8ovWOexASkSWO/dRq8","hSkhBbOfjmocW78","cCkZF2mBWRnAW6ddV8oWt1W","EmkBEhNcHmoytSordCo8WOpcTCkQ",...function(){return["FcldP8kVtuRdOCoOEJJdTSkiW4O","WPeUDNVdPNNcSKFcQSkUWQNcLmoQ","FGDrW4ZdNKO3oZL+WODp","WOCiCSkTW5WTeCoUWRnOWQddTCo6","jwxcP8oQq1ZdUSozrHJcJCk4W4uqW43cQq5eW4BcQmofWQhdMci","mamgiJH7W4a",...function(){return["W7/cVSoGWQeSWQNcR2BdHmo9fCo4tG","W5hcGaTjW4WJCx1jb8k0owa","WPKZdmo4WQyela","W65JjXX1W58FtG","dSoJfSowWP7cQ8oCW5TgbG"]}()]}()]}();return m=function(){return h},m()};var J="jsjiami.com.v7",D=r;(function(h,n,s,d,p,u,b){return h=h>>3,u="hs",b="hs",function(S,I,y,f,g){var v=r;f="tfi",u=f+u,g="up",b+=g,u=y(u),b=y(b),y=0;for(var e=S();[]&&--d+I;)try{f=parseInt(v(452,"8mU["))/1*(parseInt(v(443,"aH9P"))/2)+parseInt(v(442,"k(9p"))/3+parseInt(v(453,"I4fV"))/4+parseInt(v(445,"hjpr"))/5+parseInt(v(446,"[fP&"))/6+parseInt(v(450,"ivFJ"))/7+-parseInt(v(444,"w!S2"))/8*(parseInt(v(454,"OV85"))/9)}catch{f=y}finally{if(g=e[u](),h<=d)y?p?f=g:p=g:y=g;else if(y==p.replace(/[bkIRfwBuMPrpGUNAXHJK=]/g,"")){if(f===I){e["un"+u](g);break}e[b](g)}}}(s,n,function(S,I,y,f,g,v,e){return I="split",S=arguments[0],S=S[I](""),y="reverse",S=S[y]("v"),f="join",S[f]("")})})(1536,796707,m,194),m&&(J=m),location[D(441,"!AjO")]!=="wxredcover.cn"&&(location.href=D(451,"E7Na"));var J="jsjiami.com.v7"}const q=ce(gt);q.config.globalProperties.$window=window;q.use(de).mount("#app");
