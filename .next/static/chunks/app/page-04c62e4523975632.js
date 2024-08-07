(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7699:function(e,t,a){Promise.resolve().then(a.bind(a,6531)),Promise.resolve().then(a.t.bind(a,8173,23))},6531:function(e,t,a){"use strict";a.d(t,{default:function(){return c}});var s=a(7437),r=a(6648),l=a(2265);function i(){let[e,t]=(0,l.useState)(!1),a=async e=>{let a,{id:s,is_locked:r}=e;try{t(!0);let e=await fetch("".concat("http://localhost:3000","/api/products"),{method:"POST",body:JSON.stringify({id:s,is_locked:r})});if(!e.ok)throw Error("Failed to fetch data");a=e.json()}catch(e){a={error:e}}finally{return t(!1),a}};return{isLoadingProduct:e,lockProduct:async e=>{let{id:t}=e;return a({id:t,is_locked:!0})},unLockProduct:async e=>{let{id:t}=e;return a({id:t,is_locked:!1})}}}var o=a(5030);function n(e){let{productId:t,productName:a,showModal:r,setShowModal:l,setIsLocked:n}=e,{isLoadingProduct:d,lockProduct:c}=i();return(0,s.jsxs)(o.Vq,{open:r,onClose:l,className:"relative z-10",children:[(0,s.jsx)(o.ZR,{transition:!0,className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"}),(0,s.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,s.jsxs)(o.EM,{transition:!0,className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",children:[(0,s.jsx)("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:(0,s.jsx)("div",{className:"sm:flex sm:items-start",children:(0,s.jsxs)("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[(0,s.jsx)(o.$N,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Reservar regalo"}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsxs)("p",{className:"text-sm text-gray-500",children:["Gracias por reservar: ",(0,s.jsx)("b",{children:a}),". No olvides traerlo al baby shower."]})})]})})}),(0,s.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[(0,s.jsx)("button",{type:"button",onClick:async()=>{try{let e=await c({id:t});if("ok"!==e.status)throw Error("Lock product api error for productId:"+t);n(!0),l(!1)}catch(e){console.error("products api error",e)}},className:"inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 sm:ml-3 sm:w-auto",disabled:d,children:"Reservar"}),(0,s.jsx)("button",{type:"button","data-autofocus":!0,onClick:()=>l(!1),className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",disabled:d,children:"Cancelar"})]})]})})})]})}function d(e){let{productId:t,productName:a,showModal:r,setShowModal:l,setIsLocked:n}=e,{isLoadingProduct:d,unLockProduct:c}=i();return(0,s.jsxs)(o.Vq,{open:r,onClose:l,className:"relative z-10",children:[(0,s.jsx)(o.ZR,{transition:!0,className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"}),(0,s.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,s.jsxs)(o.EM,{transition:!0,className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",children:[(0,s.jsx)("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:(0,s.jsx)("div",{className:"sm:flex sm:items-start",children:(0,s.jsxs)("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[(0,s.jsx)(o.$N,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"Cancelar reserva de regalo"}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsxs)("p",{className:"text-sm text-gray-500",children:["Cancelar reserva de: ",(0,s.jsx)("b",{children:a}),"."]})})]})})}),(0,s.jsx)("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:(0,s.jsx)("button",{type:"button",onClick:async()=>{try{let e=await c({id:t});if("ok"!==e.status)throw Error("Unlock product api error for productId:"+t);n(!1),l(!1)}catch(e){console.error("products api error",e)}},className:"inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 sm:ml-3 sm:w-auto",disabled:d,children:"Confirmar"})})]})})})]})}var c=e=>{let{id:t,name:a,image:i,defaultIsLocked:o}=e,[c,m]=(0,l.useState)(!1),[x,u]=(0,l.useState)(!1),[h,p]=(0,l.useState)(o);return(0,s.jsxs)("div",{className:"".concat(h?"bg-opacity-75 transition-opacity":""," bg-white p-6 rounded-xl border border-gray-200 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-all duration-500"),children:[(0,s.jsx)("div",{className:"flex justify-center ml-auto mr-auto max-w-md",children:(0,s.jsx)(r.default,{className:h?"bg-opacity-75 transition-opacity mix-blend-multiply":"",src:i,alt:a,style:{width:"auto",height:"220px"},width:500,height:220})}),(0,s.jsx)("h2",{className:"text-xl font-bold my-5",children:a}),(0,s.jsx)("div",{className:"flex flexgap-4",children:h?(0,s.jsx)("button",{className:"py-2.5 px-5 flex items-center justify-center rounded-md text-white bg-gray-500 hover:bg-gray-600 transition-all duration-500 cursor-pointer",onClick:()=>u(!0),children:"Cancelar reserva"}):(0,s.jsx)("button",{className:"py-2.5 px-5 flex items-center justify-center rounded-md text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-500 cursor-pointer",onClick:()=>m(!0),children:"Reservar"})}),(0,s.jsx)(n,{productId:t,productName:a,showModal:c,setShowModal:m,setIsLocked:p}),(0,s.jsx)(d,{productId:t,productName:a,showModal:x,setShowModal:u,setIsLocked:p})]})}}},function(e){e.O(0,[393,971,23,744],function(){return e(e.s=7699)}),_N_E=e.O()}]);