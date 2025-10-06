"use strict";(self.webpackChunkservidor=self.webpackChunkservidor||[]).push([[4121],{11199:(U,L,t)=>{t.r(L),t.d(L,{default:()=>ue});var e=t(67294),o=t(86597),b=t(87751),h=t(16550),O=t(86896),y=t(14087),C=t(17034),D=t(185),c=t(53979),f=t(36989),i=t(75515),M=t(29728),x=t(49066),H=t(41580),_=t(38939),ee=t(49386),te=t(8060),G=t(79031),E=t(37909),N=t(41451),ne=t(63237),le=t(15234),S=t(11047),p=t(45697),V=t(88972);const $=V.ZP.div`
  background: ${({theme:l})=>l.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:l})=>l?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:l})=>l.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:l})=>l.spaces[1]};
    top: ${({theme:l})=>l.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,oe=V.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${$} {
    background: ${({theme:l})=>l.colors.success500};
  }

  &[aria-checked='true'] ${$}:before {
    transform: translateX(1rem);
  }
`,W=e.forwardRef(({label:l,onChange:r,onLabel:s,offLabel:d,selected:T,visibleLabels:v,...u},a)=>e.createElement(oe,{ref:a,role:"switch","aria-checked":T,"aria-label":l,onClick:r,visibleLabels:v,type:"button",...u},e.createElement(S.k,null,e.createElement($,null,e.createElement("span",null,s),e.createElement("span",null,d)),v&&e.createElement(H.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:T?"success600":"danger600"},T?s:d))));W.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},W.propTypes={label:p.string.isRequired,offLabel:p.string,onChange:p.func.isRequired,onLabel:p.string,selected:p.bool.isRequired,visibleLabels:p.bool},W.displayName="Switch";var j=t(12028),ae=t(89722),R=t(96315),F=t(20022),se=t(4585),re=t(86031),ie=t(18172),de=t(36968),ce=t.n(de);const Ee={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},me=(l,r)=>(0,ie.ZP)(l,s=>{switch(r.type){case"GET_DATA_SUCCEEDED":{s.webhooks=r.data,s.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{s.loadingWebhooks=!l.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{ce()(s,["webhooks",...r.keys],r.value);break}case"SET_WEBHOOK_TO_DELETE":{s.webhookToDelete=r.id;break}case"SET_WEBHOOKS_TO_DELETE":{r.value?s.webhooksToDelete.push(r.id):s.webhooksToDelete=l.webhooksToDelete.filter(d=>d!==r.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{l.webhooksToDelete.length===0?s.webhooksToDelete=l.webhooks.map(d=>d.id):s.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{s.webhooks=l.webhooks.filter(d=>!l.webhooksToDelete.includes(d.id)),s.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{s.webhooks=l.webhooks.filter((d,T)=>T!==r.index),s.webhookToDelete=null;break}default:return s}}),he=()=>{const{isLoading:l,allowedActions:{canCreate:r,canRead:s,canUpdate:d,canDelete:T}}=(0,o.ss)(b.Z.settings.webhooks),v=(0,o.lm)(),u=(0,e.useRef)(!0),{formatMessage:a}=(0,O.Z)(),[ge,P]=(0,e.useState)(!1),[{webhooks:B,webhooksToDelete:Z,webhookToDelete:K,loadingWebhooks:I},g]=(0,e.useReducer)(me,Ee),{notifyStatus:be}=(0,y.G)();(0,o.go)();const{push:fe}=(0,h.k6)(),{pathname:z}=(0,h.TH)(),A=B.length,k=Z.length,Y=n=>B.findIndex(m=>m.id===n);(0,e.useEffect)(()=>(u.current=!0,()=>{u.current=!1}),[]),(0,e.useEffect)(()=>{s&&Te()},[s]);const Te=async()=>{try{const{data:n}=await(0,o.WY)("/admin/webhooks",{method:"GET"});u.current&&(g({type:"GET_DATA_SUCCEEDED",data:n}),be("webhooks have been loaded"))}catch(n){console.log(n),u.current&&(n.code!==20&&v({type:"warning",message:{id:"notification.error"}}),g({type:"TOGGLE_LOADING"}))}},De=()=>{P(n=>!n)},ve=()=>{K?Le():Oe()},Le=async()=>{try{await(0,o.WY)(`/admin/webhooks/${K}`,{method:"DELETE"}),g({type:"WEBHOOK_DELETED",index:Y(K)})}catch(n){n.code!==20&&v({type:"warning",message:{id:"notification.error"}})}P(!1)},Oe=async()=>{const n={ids:Z};try{await(0,o.WY)("/admin/webhooks/batch-delete",{method:"POST",body:n}),u.current&&g({type:"WEBHOOKS_DELETED"})}catch(m){u.current&&m.code!==20&&v({type:"warning",message:{id:"notification.error"}})}P(!1)},Q=n=>{P(!0),n!=="all"&&g({type:"SET_WEBHOOK_TO_DELETE",id:n})},ye=async(n,m)=>{const X=Y(m),ke=B[X],J=[X,"isEnabled"],q={...ke,isEnabled:n};delete q.id;try{g({type:"SET_WEBHOOK_ENABLED",keys:J,value:n}),await(0,o.WY)(`/admin/webhooks/${m}`,{method:"PUT",body:q})}catch(Me){u.current&&(g({type:"SET_WEBHOOK_ENABLED",keys:J,value:!n}),Me.code!==20&&v({type:"warning",message:{id:"notification.error"}}))}},pe=()=>{g({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},Ce=(n,m)=>{g({type:"SET_WEBHOOKS_TO_DELETE",value:n,id:m})},w=n=>{fe(`${z}/${n}`)};return e.createElement(C.A,null,e.createElement(o.SL,{name:"Webhooks"}),e.createElement(D.o,{"aria-busy":l||I},e.createElement(c.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:r&&!I&&e.createElement(o.Qj,{startIcon:e.createElement(R.Z,null),variant:"default",to:`${z}/create`,size:"S"},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),k>0&&T&&e.createElement(f.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(i.Z,{variant:"epsilon",textColor:"neutral600"},a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:k})),e.createElement(M.z,{onClick:()=>Q("all"),startIcon:e.createElement(F.Z,null),size:"L",variant:"danger-light"},a({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(x.D,null,l||I?e.createElement(H.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(o.dO,null)):A>0?e.createElement(_.i,{colCount:5,rowCount:A+1,footer:e.createElement(ee.c,{onClick:()=>r?w("create"):{},icon:e.createElement(R.Z,null)},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.h,null,e.createElement(G.Tr,null,e.createElement(E.Th,null,e.createElement(N.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:k>0&&k<A,value:k===A,onValueChange:pe})),e.createElement(E.Th,{width:"20%"},e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(E.Th,{width:"60%"},e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(E.Th,{width:"20%"},e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(E.Th,null,e.createElement(ne.T,null,a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(le.p,null,B.map(n=>e.createElement(G.Tr,{key:n.id,...(0,o.X7)({fn:()=>w(n.id),condition:d})},e.createElement(E.Td,{...o.UW},e.createElement(N.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:Z?.includes(n.id),onValueChange:m=>Ce(m,n.id),id:"select",name:"select"})),e.createElement(E.Td,null,e.createElement(i.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(E.Td,null,e.createElement(i.Z,{textColor:"neutral800"},n.url)),e.createElement(E.Td,null,e.createElement(S.k,{...o.UW},e.createElement(W,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:()=>ye(!n.isEnabled,n.id),visibleLabels:!0}))),e.createElement(E.Td,null,e.createElement(S.k,{gap:1,...o.UW},d&&e.createElement(j.h,{onClick:()=>{w(n.id)},label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(se.Z,null),noBorder:!0}),T&&e.createElement(j.h,{onClick:()=>Q(n.id),label:a({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(F.Z,null),noBorder:!0,id:`delete-${n.id}`}))))))):e.createElement(ae.x,{icon:e.createElement(re.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(M.z,{variant:"secondary",startIcon:e.createElement(R.Z,null),onClick:()=>r?w("create"):{}},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(o.QH,{isOpen:ge,onToggleDialog:De,onConfirm:ve}))},ue=()=>e.createElement(o.O4,{permissions:b.Z.settings.webhooks.main},e.createElement(he,null))},36989:(U,L,t)=>{t.d(L,{Z:()=>D});var e=t(67294),o=t(45697),b=t(88972),h=t(41580),O=t(11047);const y=(0,b.ZP)(O.k)`
  & > * + * {
    margin-left: ${({theme:c})=>c.spaces[2]};
  }

  margin-left: ${({pullRight:c})=>c?"auto":void 0};
`,C=(0,b.ZP)(y)`
  flex-shrink: 0;
`,D=({startActions:c,endActions:f})=>c||f?e.createElement(h.x,{paddingLeft:10,paddingRight:10},e.createElement(h.x,{paddingBottom:4},e.createElement(O.k,{justifyContent:"space-between",alignItems:"flex-start"},c&&e.createElement(y,{wrap:"wrap"},c),f&&e.createElement(C,{pullRight:!0},f)))):null;D.defaultProps={endActions:void 0,startActions:void 0},D.propTypes={endActions:o.node,startActions:o.node}},49386:(U,L,t)=>{t.d(L,{c:()=>f});var e=t(67294),o=t(45697),b=t(88972),h=t(41580),O=t(70004),y=t(11047),C=t(75515);const D=(0,b.ZP)(h.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:i})=>i.colors.primary600};
  }
`,c=(0,b.ZP)(h.x)`
  border-radius: 0 0 ${({theme:i})=>i.borderRadius} ${({theme:i})=>i.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,f=({children:i,icon:M,...x})=>e.createElement("div",null,e.createElement(O.i,null),e.createElement(c,{as:"button",background:"primary100",padding:5,...x},e.createElement(y.k,null,e.createElement(D,{"aria-hidden":!0,background:"primary200"},M),e.createElement(h.x,{paddingLeft:3},e.createElement(C.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},i)))));f.propTypes={children:o.string.isRequired,icon:o.node.isRequired}}}]);
