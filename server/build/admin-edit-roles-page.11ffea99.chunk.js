(self.webpackChunkservidor=self.webpackChunkservidor||[]).push([[2544],{23341:(X,F,a)=>{"use strict";a.r(F),a.d(F,{CreatePage:()=>Ee,default:()=>Oe});var e=a(67294),y=a(66115),o=a(86597),x=a(185),k=a(53979),R=a(11047),E=a(29728),S=a(49066),P=a(41580),M=a(75515),T=a(11276),I=a(74571),C=a(16364),u=a(64256),N=a(67109),Q=a(41054),U=a(27361),he=a.n(U),A=a(41609),K=a.n(A),me=a(86896),h=a(16550),q=a(88972),z=a(18280),ee=a(48474),ie=a(87751),le=a(87561);const Ce=le.Ry().shape({name:le.Z_().required(o.I0.required),description:le.Z_().required(o.I0.required)}),ce=q.ZP.div`
  border: 1px solid ${({theme:H})=>H.colors.primary200};
  background: ${({theme:H})=>H.colors.primary100};
  padding: ${({theme:H})=>`${H.spaces[2]} ${H.spaces[4]}`};
  color: ${({theme:H})=>H.colors.primary600};
  border-radius: ${({theme:H})=>H.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Ee=()=>{const H=(0,o.lm)(),{lockApp:re,unlockApp:D}=(0,o.o1)(),{formatMessage:j}=(0,me.Z)(),[_,se]=(0,e.useState)(!1),{replace:de}=(0,h.k6)(),te=(0,e.useRef)(),{trackUsage:ue}=(0,o.rS)(),Le=(0,h.$B)("/settings/roles/duplicate/:id"),xe=he()(Le,"params.id",null),{isLoading:ke,data:fe}=(0,ee.U_)(),{permissions:$e,isLoading:Me}=(0,ee.Dq)(xe),Ie=Re=>{re(),se(!0),ue(xe?"willDuplicateRole":"willCreateNewRole"),Promise.resolve((0,o.WY)("/admin/roles",{method:"POST",body:Re})).then(async Y=>{const{permissionsToSend:w}=te.current.getPermissions();return ue(xe?"didDuplicateRole":"didCreateNewRole"),Y.data.id&&!K()(w)&&await(0,o.WY)(`/admin/roles/${Y.data.id}/permissions`,{method:"PUT",body:{permissions:w}}),Y}).then(Y=>{se(!1),H({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),de(`/settings/roles/${Y.data.id}`)}).catch(Y=>{console.error(Y),se(!1),H({type:"warning",message:{id:"notification.error"}})}).finally(()=>{D()})},Ze=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,y.Z)(new Date,"PPP")}`;return e.createElement(x.o,null,e.createElement(o.SL,{name:"Roles"}),e.createElement(Q.J9,{initialValues:{name:"",description:Ze},onSubmit:Ie,validationSchema:Ce,validateOnChange:!1},({handleSubmit:Re,values:Y,errors:w,handleReset:ye,handleChange:ae})=>e.createElement(o.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(k.T,{primaryAction:e.createElement(R.k,{gap:2},e.createElement(E.z,{variant:"secondary",onClick:()=>{ye(),te.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(E.z,{onClick:Re,loading:_,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(o.rU,{startIcon:e.createElement(N.Z,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(S.D,null,e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(P.x,null,e.createElement(P.x,null,e.createElement(M.Z,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(P.x,null,e.createElement(M.Z,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ce,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(T.r,{gap:4},e.createElement(I.P,{col:6},e.createElement(C.o,{name:"name",error:w.name&&j({id:w.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:ae,value:Y.name})),e.createElement(I.P,{col:6},e.createElement(u.g,{label:j({id:"global.description",defaultMessage:"Description"}),name:"description",error:w.description&&j({id:w.description}),onChange:ae},Y.description))))),!ke&&!Me?e.createElement(P.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(z.Z,{isFormDisabled:!1,ref:te,permissions:$e,layout:fe})):e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(o.dO,null))))))))};function Oe(){return e.createElement(o.O4,{permissions:ie.Z.settings.roles.create},e.createElement(Ee,null))}},18280:(X,F,a)=>{"use strict";a.d(F,{Z:()=>_n});var e=a(67294),y=a(45697),o=a.n(y),x=a(86597),k=a(82777),R=a(60633),E=a(42761),S=a(18721),P=a.n(S),M=a(41609),T=a.n(M),I=a(86896),C=a(41580),u=a(88972),N=a(89734),Q=a.n(N),U=a(52337),he=a(66942),A=a(11047),K=a(41451),me=a(27361),h=a.n(me),q=a(57557),z=a.n(q),ee=a(48474),ie=a(78114),le=a(29728);const Se=u.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Ce=({onClick:t,className:n,hasConditions:r,variant:s})=>{const{formatMessage:i}=(0,I.Z)();return e.createElement(Se,{hasConditions:r,className:n},e.createElement(le.z,{variant:s,startIcon:e.createElement(ie.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};Ce.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},Ce.propTypes={onClick:o().func.isRequired,className:o().string,hasConditions:o().bool,variant:o().string};const ce=(0,u.ZP)(Ce)``;var Ee=a(42866),Oe=a(24969),H=a(2407),re=a(59946),D=a(75515),j=a(36856),_=a(18172),se=a(7739),de=a.n(se),te=a(11700),ue=a.n(te),Le=a(17603);const xe=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),ke=t=>t.reduce((n,[r,s])=>(n.push({label:ue()(r),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),fe=(t,n)=>t.map(([,r])=>r).flat().reduce((r,s)=>({[s.id]:n.includes(s.id),...r}),{}),$e=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,I.Z)(),p=m=>{l(i,fe(t,m))};return e.createElement(A.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(A.k,{paddingLeft:6,style:{width:180}},e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(D.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(C.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Le.Q,{id:i,customizeContent:m=>`${m.length} currently selected`,onChange:p,value:xe(c),options:ke(t),disabled:n})))};$e.propTypes={arrayOfOptionsGroupedByCategory:o().array.isRequired,isFormDisabled:o().bool.isRequired,isGrey:o().bool.isRequired,label:o().string.isRequired,name:o().string.isRequired,value:o().object.isRequired,onChange:o().func.isRequired};const Me=$e,Ie=(t,n)=>t.reduce((r,s)=>(r[s.id]=h()(n,s.id,!1),r),{}),Ze=(t,n)=>t.reduce((r,s)=>{const[i,l]=s,c=Ie(l,n);return r[i]=c,r},{}),Y=(t,n,r)=>t.reduce((s,i)=>{const l=h()(n,[...i.pathToConditionsObject,"conditions"],{}),c=Ze(r,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),w=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,I.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:p}=(0,ee.$_)(),m=(0,e.useMemo)(()=>Object.entries(de()(c,"category")),[c]),g=t.filter(({isDisplayed:f,hasSomeActionsSelected:Z,hasAllActionsSelected:L})=>f&&(Z||L)),v=(0,e.useMemo)(()=>Y(g,d,m),[g,d,m]),[O,W]=(0,e.useState)(v),$=(f,Z)=>{W((0,_.ZP)(L=>{L[f]||(L[f]={}),L[f].default||(L[f].default={}),L[f].default=Z}))},b=()=>{const f=Object.entries(O).reduce((Z,L)=>{const[B,ne]=L,G=Object.values(ne).reduce((J,V)=>({...J,...V}),{});return Z[B]=G,Z},{});p(f),i()};return e.createElement(Ee.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Oe.x,null,e.createElement(H.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map(f=>e.createElement(H.$,{key:f},ue()(l({id:f,defaultMessage:f})))))),e.createElement(re.f,null,g.length===0&&e.createElement(D.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,g.map(({actionId:f,label:Z,pathToConditionsObject:L},B)=>{const ne=L.join("..");return e.createElement(Me,{key:f,arrayOfOptionsGroupedByCategory:m,label:Z,isFormDisabled:r,isGrey:B%2===0,name:ne,onChange:$,value:h()(O,ne,{})})}))),e.createElement(j.m,{startActions:e.createElement(le.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(le.z,{onClick:b},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};w.propTypes={actions:o().arrayOf(o().shape({actionId:o().string.isRequired,checkboxName:o().string,hasSomeActionsSelected:o().bool.isRequired,hasAllActionsSelected:o().bool,isDisplayed:o().bool.isRequired,label:o().string})).isRequired,headerBreadCrumbs:o().arrayOf(o().string).isRequired,isFormDisabled:o().bool.isRequired,onClosed:o().func.isRequired,onToggle:o().func.isRequired};const ye=w,ae=`${120/16}rem`,Be=`${200/16}rem`,Ve=`${53/16}rem`,Ge=u.ZP.div`
  width: ${ae};
`,st=(0,u.ZP)(A.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ue=({children:t,isCollapsable:n,isActive:r,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:p,value:m})=>{const{formatMessage:g}=(0,I.Z)();return e.createElement(A.k,{alignItems:"center",paddingLeft:6,style:{width:Be,flexShrink:0}},e.createElement(C.x,{paddingRight:2},e.createElement(K.C,{name:d,"aria-label":g({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:v=>l({target:{name:d,value:v}}),indeterminate:p,value:m})),e.createElement(st,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":r,onKeyDown:({key:v})=>(v==="Enter"||v===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(D.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ue()(i)),t))};Ue.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ue.propTypes={checkboxName:o().string,children:o().node,label:o().string.isRequired,isCollapsable:o().bool,isFormDisabled:o().bool.isRequired,onChange:o().func,onClick:o().func.isRequired,someChecked:o().bool,value:o().bool,isActive:o().bool.isRequired};const ot=(0,e.memo)(Ue);var Bt=a(42348),Ft=a.n(Bt),Nt=a(13218),be=a.n(Nt);const rt=t=>be()(t)?Ft()(Object.values(t).map(n=>be()(n)?rt(n):n)):[],De=rt,Ke=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Pe=t=>{const n=Ke(t),r=De(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=r.every(l=>l),i=r.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}},Wt=(t,n,r)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...r.split(".."),s],p=T()(l)?[...d,"properties","enabled"]:d,m=p.join(".."),g=h()(n,[...d,"conditions"],null),v=De(g).some(b=>b);if(T()(l)){const b=h()(n,p,!1);return{actionId:s,checkboxName:m,hasAllActionsSelected:b,hasConditions:v,hasSomeActionsSelected:b,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const O=h()(n,p,null),{hasAllActionsSelected:W,hasSomeActionsSelected:$}=Pe(O);return{actionId:s,checkboxName:m,hasAllActionsSelected:W,hasConditions:v,hasSomeActionsSelected:$,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}});var Vt=a(12645);const Fe=(0,u.ZP)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ne=t=>`
  ${D.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Fe} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,ze=(t,n)=>`
  ${at} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${lt} {
    display: flex;
  }
  ${ce} {
    display: block;
  }
  &:hover {
   ${Ne(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:s})=>ze(r,s)}
  }
  
`,at=u.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ve};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Ht=u.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${ce} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&ze(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>ze(t,n)}
  }
`,it=(0,u.ZP)(A.k)`
  width: ${ae};
  position: relative;
`,lt=(0,u.ZP)(C.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ct=u.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Gt=(0,u.ZP)(C.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,dt=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,p]=(0,e.useState)(!1),{formatMessage:m}=(0,I.Z)(),{modifiedData:g,onChangeParentCheckbox:v,onChangeSimpleCheckbox:O}=(0,ee.$_)(),W=()=>{p(G=>!G)},$=()=>{p(!1)},b=h()(g,c.split(".."),{}),f=(0,e.useMemo)(()=>Object.keys(b).reduce((G,J)=>(G[J]=z()(b[J],"conditions"),G),{}),[b]),{hasAllActionsSelected:Z,hasSomeActionsSelected:L}=Pe(f),B=(0,e.useMemo)(()=>Wt(t,g,c),[t,g,c]),ne=B.some(({hasConditions:G})=>G);return e.createElement(Ht,{isActive:n},e.createElement(at,{isGrey:r},e.createElement(ot,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:v,onClick:l,someChecked:L,value:Z,isActive:n},e.createElement(lt,{paddingLeft:2},n?e.createElement(U.Z,null):e.createElement(he.Z,null))),e.createElement(A.k,{style:{flex:1}},B.map(({actionId:G,hasConditions:J,hasAllActionsSelected:V,hasSomeActionsSelected:ge,isDisplayed:je,isParentCheckbox:oe,checkboxName:ve,label:We})=>je?oe?e.createElement(it,{key:G,justifyContent:"center",alignItems:"center"},J&&e.createElement(ct,null),e.createElement(K.C,{disabled:s,name:ve,"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${We} ${i}`}),onValueChange:Te=>{v({target:{name:ve,value:Te}})},indeterminate:ge,value:V})):e.createElement(it,{key:G,justifyContent:"center",alignItems:"center"},J&&e.createElement(ct,null),e.createElement(K.C,{disabled:s,indeterminate:J,name:ve,onValueChange:Te=>{O({target:{name:ve,value:Te}})},value:V})):e.createElement(Ge,{key:G}))),d&&e.createElement(ye,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:B,isFormDisabled:s,onClosed:$,onToggle:W})),e.createElement(Gt,null,e.createElement(ce,{onClick:W,hasConditions:ne})))};dt.propTypes={availableActions:o().array.isRequired,isActive:o().bool.isRequired,isGrey:o().bool.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,onClickToggle:o().func.isRequired,pathToData:o().string.isRequired};const Ut=dt,Kt=(t,n)=>t.map(r=>{const s=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:s}}),ut=(0,u.ZP)(A.k)`
  width: ${ae};
  flex-shrink: 0;
`,zt=(0,u.ZP)(A.k)`
  width: ${Be};
  height: ${Ve};
  flex-shrink: 0;
`,mt=({headers:t,label:n})=>{const{formatMessage:r}=(0,I.Z)(),s=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(A.k,null,e.createElement(zt,{alignItems:"center",paddingLeft:6},e.createElement(D.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ut,{justifyContent:"center",key:i.label},e.createElement(D.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ut,{key:i.label})))};mt.propTypes={headers:o().arrayOf(o().shape({label:o().string.isRequired,isActionRelatedToCurrentProperty:o().bool.isRequired})).isRequired,label:o().string.isRequired};const Yt=mt,Xt=u.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(Xt,null,"*"),wt=(t,n)=>t.map(r=>{const s=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:s}}),Jt=(0,u.ZP)(C.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=u.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ye=t=>e.createElement(Jt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Ye.defaultProps={fill:"primary200"},Ye.propTypes={fill:o().string};const qt=(0,e.memo)(Ye),gt=(0,u.ZP)(A.k)`
  width: ${ae};
  position: relative;
`,_t=(0,u.ZP)(A.k)`
  height: ${Ve};
`,en=(0,u.ZP)(C.x)`
  padding-left: ${31/16}rem;
`,tn=(0,u.ZP)(C.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,nn=(0,u.ZP)(A.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Fe} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ne(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ne(n)};
`,sn=u.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Xe=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,I.Z)(),{modifiedData:p,onChangeParentCheckbox:m,onChangeSimpleCheckbox:g}=(0,ee.$_)(),[v,O]=(0,e.useState)(null),W=b=>{O(f=>f===b?null:b)},$=(0,e.useMemo)(()=>v?t.find(({value:b})=>b===v):null,[v,t]);return e.createElement(en,null,e.createElement(sn,null),t.map(({label:b,value:f,required:Z,children:L},B)=>{const ne=B+1<t.length,G=Array.isArray(L),J=v===f;return e.createElement(tn,{key:f,isVisible:ne},e.createElement(_t,null,e.createElement(qt,{color:"primary200"}),e.createElement(A.k,{style:{flex:1}},e.createElement(nn,{level:r,isActive:J,isCollapsable:G},e.createElement(st,{alignItems:"center",isCollapsable:G,...G&&{onClick:()=>W(f),"aria-expanded":J,onKeyDown:({key:V})=>(V==="Enter"||V===" ")&&W(f),tabIndex:0,role:"button"},title:b},e.createElement(D.Z,{ellipsis:!0},ue()(b)),Z&&e.createElement(pt,null),e.createElement(Fe,{$isActive:J}))),e.createElement(A.k,{style:{flex:1}},i.map(({actionId:V,label:ge,isActionRelatedToCurrentProperty:je})=>{if(!je)return e.createElement(Ge,{key:V});const oe=[...s.split(".."),V,"properties",c,...l.split(".."),f],ve=h()(p,oe,!1);if(!L)return e.createElement(gt,{key:ge,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:n,name:oe.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${b} ${ge}`}),onValueChange:Ae=>{g({target:{name:oe.join(".."),value:Ae}})},value:ve}));const{hasAllActionsSelected:We,hasSomeActionsSelected:Te}=Pe(ve);return e.createElement(gt,{key:ge,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{key:ge,disabled:n,name:oe.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${b} ${ge}`}),onValueChange:Ae=>{m({target:{name:oe.join(".."),value:Ae}})},value:We,indeterminate:Te}))})))),$&&J&&e.createElement(C.x,{paddingBottom:2},e.createElement(Xe,{isFormDisabled:n,parentName:`${l}..${f}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:r+1,childrenForm:$.children})))}))};Xe.propTypes={childrenForm:o().array.isRequired,isFormDisabled:o().bool.isRequired,parentName:o().string.isRequired,pathToDataFromActionRow:o().string.isRequired,propertyActions:o().array.isRequired,propertyName:o().string.isRequired,recursiveLevel:o().number.isRequired};const on=(0,e.memo)(Xe),rn=t=>t.reduce((r,s)=>(s.isActionRelatedToCurrentProperty&&r.push(s.actionId),r),[]),an=(t,n,r,s,i)=>{const c=rn(t).reduce((d,p)=>{const m=[...r.split(".."),p,"properties",s,i],g=h()(n,m,!1);return d[p]=g,d},{});return Pe(c)},ht=(0,u.ZP)(A.k)`
  width: ${ae};
  position: relative;
`,ln=(0,u.ZP)(A.k)`
  height: ${Ve};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Fe} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ne(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ne(n)};
`,we=({childrenForm:t,label:n,isFormDisabled:r,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:p})=>{const{formatMessage:m}=(0,I.Z)(),[g,v]=(0,e.useState)(null),{modifiedData:O,onChangeCollectionTypeLeftActionRowCheckbox:W,onChangeParentCheckbox:$,onChangeSimpleCheckbox:b}=(0,ee.$_)(),f=g===s,Z=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=Z.length>0,B=(0,e.useCallback)(()=>{L&&v(V=>V===s?null:s)},[L,s]),ne=({target:{value:V}})=>{W(l,d,s,V)},{hasAllActionsSelected:G,hasSomeActionsSelected:J}=(0,e.useMemo)(()=>an(c,O,l,d,s),[c,O,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(ln,{alignItems:"center",isCollapsable:L,isActive:f,background:p?"neutral100":"neutral0"},e.createElement(A.k,null,e.createElement(ot,{onChange:ne,onClick:B,isCollapsable:L,isFormDisabled:r,label:n,someChecked:J,value:G,isActive:f},i&&e.createElement(pt,null),e.createElement(Fe,{$isActive:f})),e.createElement(A.k,null,c.map(({label:V,isActionRelatedToCurrentProperty:ge,actionId:je})=>{if(!ge)return e.createElement(Ge,{key:V});const oe=[...l.split(".."),je,"properties",d,s];if(!L){const Ae=h()(O,oe,!1);return e.createElement(ht,{key:je,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:r,name:oe.join(".."),"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${V}`}),onValueChange:es=>{b({target:{name:oe.join(".."),value:es}})},value:Ae}))}const ve=h()(O,oe,{}),{hasAllActionsSelected:We,hasSomeActionsSelected:Te}=Pe(ve);return e.createElement(ht,{key:V,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:r,name:oe.join(".."),onValueChange:Ae=>{$({target:{name:oe.join(".."),value:Ae}})},"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${V}`}),value:We,indeterminate:Te}))})))),f&&e.createElement(on,{childrenForm:Z,isFormDisabled:r,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};we.defaultProps={childrenForm:[],required:!1},we.propTypes={childrenForm:o().array,label:o().string.isRequired,isFormDisabled:o().bool.isRequired,name:o().string.isRequired,pathToData:o().string.isRequired,propertyActions:o().array.isRequired,propertyName:o().string.isRequired,required:o().bool,isOdd:o().bool.isRequired};const cn=(0,e.memo)(we),dn=u.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,ft=({availableActions:t,childrenForm:n,isFormDisabled:r,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>Kt(t,l),[t,l]);return e.createElement(dn,null,e.createElement(Yt,{label:s,headers:c}),e.createElement(C.x,null,n.map(({children:d,label:p,value:m,required:g},v)=>e.createElement(cn,{childrenForm:d,key:m,label:p,isFormDisabled:r,name:m,required:g,propertyActions:c,pathToData:i,propertyName:l,isOdd:v%2===0}))))};ft.propTypes={childrenForm:o().array.isRequired,availableActions:o().array.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,pathToData:o().string.isRequired,propertyName:o().string.isRequired};const un=ft,mn=u.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,yt=({allActions:t,contentTypeName:n,label:r,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:p})=>{const m=(0,e.useCallback)(()=>{c(n)},[n,c]),g=(0,e.useMemo)(()=>wt(t,n),[t,n]);return e.createElement(mn,{isActive:i},e.createElement(Ut,{availableActions:g,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:r,onClickToggle:m,pathToData:d}),i&&p.map(({label:v,value:O,children:W})=>e.createElement(un,{availableActions:g,childrenForm:W,isFormDisabled:l,label:v,pathToData:d,propertyName:O,key:O})))};yt.propTypes={allActions:o().array.isRequired,contentTypeName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,onClickToggleCollapse:o().func.isRequired,pathToData:o().string.isRequired,properties:o().array.isRequired};const pn=yt,Je=({actions:t,isFormDisabled:n,pathToData:r,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:p,properties:m},g)=>e.createElement(pn,{allActions:t,key:d,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:n,index:g,onClickToggleCollapse:c,pathToData:`${r}..${d}`,properties:m}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:o().array.isRequired,isFormDisabled:o().bool.isRequired,pathToData:o().string.isRequired,subjects:o().arrayOf(o().shape({uid:o().string.isRequired,label:o().string.isRequired,properties:o().array.isRequired}))};const gn=(0,e.memo)(Je),hn=t=>t.filter(({subjects:n})=>n&&n.length),fn=t=>t.map(({actionId:n})=>n),yn=(t,n)=>t.reduce((r,s)=>(Object.keys(n).forEach(i=>{const l=h()(n,[i,s],{}),c={[i]:Ke(l)};r[s]?r[s]={...r[s],...c}:r[s]=c}),r),{}),Cn=(t,n)=>{const r=fn(t),s=yn(r,n);return Object.keys(s).reduce((l,c)=>(l[c]=Pe(s[c]),l),{})},En=(0,u.ZP)(A.k)`
  width: ${ae};
  flex-shrink: 0;
`,Qe=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:s}=(0,I.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,ee.$_)(),c=(0,e.useMemo)(()=>hn(t),[t]),d=(0,e.useMemo)(()=>Cn(c,i[r]),[i,c,r]);return e.createElement(C.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Be}},e.createElement(A.k,{gap:0},c.map(({label:p,actionId:m})=>e.createElement(En,{direction:"column",alignItems:"center",justifyContent:"center",key:m,gap:3},e.createElement(D.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(K.C,{disabled:n,onValueChange:g=>{l(r,m,g)},name:m,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:h()(d,[m,"hasAllActionsSelected"],!1),indeterminate:h()(d,[m,"hasSomeActionsSelected"],!1)})))))};Qe.defaultProps={actions:[]},Qe.propTypes={actions:o().arrayOf(o().shape({label:o().string.isRequired,actionId:o().string.isRequired,subjects:o().array.isRequired})),isFormDisabled:o().bool.isRequired,kind:o().string.isRequired};const vn=(0,e.memo)(Qe),bn=(0,u.ZP)(C.x)`
  overflow-x: auto;
`,Ct=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:s}})=>{const i=Q()([...s],"label");return e.createElement(bn,{background:"neutral0"},e.createElement(vn,{actions:r,kind:n,isFormDisabled:t}),e.createElement(gn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};Ct.propTypes={isFormDisabled:o().bool.isRequired,kind:o().string.isRequired,layout:o().shape({actions:o().array,subjects:o().arrayOf(o().shape({uid:o().string.isRequired,label:o().string.isRequired,properties:o().array.isRequired}))}).isRequired};const Et=(0,e.memo)(Ct);var xn=a(47713);const vt=({children:t,value:n})=>e.createElement(xn.$l.Provider,{value:n},t);vt.propTypes={children:o().node.isRequired,value:o().exact({availableConditions:o().array.isRequired,modifiedData:o().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:o().func.isRequired,onChangeConditions:o().func.isRequired,onChangeSimpleCheckbox:o().func.isRequired,onChangeParentCheckbox:o().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:o().func.isRequired}).isRequired};const Rn=vt;var Pn=a(48734),Tn=a(74756),An=a(63081),bt=a(36213),Sn=a(11276),On=a(74571);const $n=(t,n,r)=>t.map(s=>{const i=[...r,s.action,"properties","enabled"],l=h()(n,i,!1),c=h()(n,[...r,s.action,"conditions"],{}),d=De(c).some(p=>p);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...r,s.action]}}),Mn=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return De(n).some(s=>s)},Dn=u.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,jn=u.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,xt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:m}=(0,ee.$_)(),{formatMessage:g}=(0,I.Z)(),v=h()(d,i,{}),O=(0,e.useMemo)(()=>Object.keys(v).reduce((B,ne)=>(B[ne]=Ke(v[ne]),B),{}),[v]),{hasAllActionsSelected:W,hasSomeActionsSelected:$}=Pe(O),b=()=>{c(B=>!B)},f=()=>{c(!1)},Z=$n(s,d,i),L=Mn(h()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(C.x,null,e.createElement(A.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(C.x,{paddingRight:4},e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(Dn,null),e.createElement(C.x,{paddingLeft:4},e.createElement(bt.X,{name:i.join(".."),disabled:n,onValueChange:B=>{p({target:{name:i.join(".."),value:B}})},indeterminate:$,value:W},g({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(A.k,{paddingTop:6,paddingBottom:6},e.createElement(Sn.r,{gap:2,style:{flex:1}},Z.map(({checkboxName:B,value:ne,action:G,displayName:J,hasConditions:V})=>e.createElement(On.P,{col:3,key:G},e.createElement(jn,{disabled:n,hasConditions:V},e.createElement(bt.X,{name:B,disabled:n,onValueChange:ge=>{m({target:{name:B,value:ge}})},value:ne},J))))),e.createElement(ce,{hasConditions:L,onClick:b}))),l&&e.createElement(ye,{headerBreadCrumbs:[t,r],actions:Z,isFormDisabled:n,onClosed:f,onToggle:b}))};xt.propTypes={actions:o().array.isRequired,categoryName:o().string.isRequired,isFormDisabled:o().bool.isRequired,subCategoryName:o().string.isRequired,pathToData:o().array.isRequired};const Ln=xt,qe=({childrenForm:t,kind:n,name:r,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:p}=(0,I.Z)(),m=()=>{c(r)},g=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Pn.U,{expanded:s,onToggle:m,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Tn.B,{title:ue()(g),description:`${p({id:"Settings.permissions.category"},{category:g})} ${n==="plugins"?"plugin":n}`}),e.createElement(An.v,null,e.createElement(C.x,{padding:6},t.map(({actions:v,subCategoryName:O,subCategoryId:W})=>e.createElement(Ln,{key:O,actions:v,categoryName:g,isFormDisabled:i,subCategoryName:O,pathToData:[...d,W]})))))};qe.defaultProps={},qe.propTypes={childrenForm:o().array.isRequired,isOpen:o().bool.isRequired,isFormDisabled:o().bool.isRequired,isWhite:o().bool.isRequired,kind:o().string.isRequired,name:o().string.isRequired,onOpenCategory:o().func.isRequired,pathToData:o().array.isRequired};const kn=qe,Rt=({isFormDisabled:t,kind:n,layout:r})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(C.x,{padding:6,background:"neutral0"},r.map(({category:c,categoryId:d,childrenForm:p},m)=>e.createElement(kn,{key:c,childrenForm:p,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:m%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Rt.propTypes={isFormDisabled:o().bool.isRequired,kind:o().string.isRequired,layout:o().arrayOf(o().shape({category:o().string.isRequired,categoryId:o().string.isRequired,childrenForm:o().arrayOf(o().shape({actions:o().array.isRequired})).isRequired}).isRequired).isRequired};const Pt=Rt;var In=a(82492),Zn=a.n(In),Bn=a(36968),pe=a.n(Bn);const Tt=(t,n,r)=>t.find(s=>s.action===n&&s.subject===r),At=(t,n=[])=>t.reduce((r,s)=>(r[s.id]=n.indexOf(s.id)!==-1,r),{}),St=({children:t},n,r="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:St(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return s[i.value]=l,s},{}),Fn=(t,n,r)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=h()(r,["properties",l.value],[]),d=St(l,c);s.properties[i]=d}return s},{properties:{}}),Nn=(t,n)=>n.reduce((r,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(r[s]=i),r},{}),Ot=({subjects:t},n,r,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Nn(t,c);if(T()(d))return i;const p=Object.keys(d).reduce((m,g)=>{const{actionId:v,applyToProperties:O}=l,b=d[g].properties.map(({value:B})=>B).every(B=>(O||[]).indexOf(B)===-1),f=Tt(s,v,g),Z=At(r,h()(f,"conditions",[]));if(T()(O)||b)return pe()(m,[g,v],{properties:{enabled:f!==void 0},conditions:Z}),m;const L=Fn(O,d[g],f);return pe()(m,[g,v],{...L,conditions:Z}),m},{});return Zn()(i,p)},{}),Wn=(t,n,r)=>t.reduce((s,i)=>{const l=Tt(r,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:At(n,l?.conditions??[])},s},{}),Vn=(t,n,r)=>t.reduce((s,i)=>(s[i.subCategoryId]=Wn(i.actions,n,r),s),{}),$t=(t,n,r=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Vn(l,n,r);return s[i]=c,s},{}),Mt=t=>t.split(" ").join("-"),Dt=(t,n)=>Object.entries(de()(t,n)).map(([r,s])=>({category:r,categoryId:Mt(r),childrenForm:Object.entries(de()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Mt(i),actions:l}))})),Hn=(t,n)=>{const{conditions:r,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:Dt(l,"plugin"),settings:Dt(c,"category")},p={collectionTypes:Ot(s,s.actions||[],r,n),singleTypes:Ot(i,i.actions||[],r,n),plugins:$t(d.plugins,r,n),settings:$t(d.settings,r,n)};return{initialData:p,modifiedData:p,layouts:d}};var Gn=a(50361),_e=a.n(Gn);const jt=t=>Object.keys(t).reduce((n,r)=>{const s=t[r];if(be()(s)&&!P()(s,"conditions"))return{...n,[r]:jt(s)};if(be()(s)&&P()(s,"conditions")&&!De(z()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[r]:{...s,conditions:l}}}return n[r]=s,n},{}),et=jt,Lt=(t,n)=>Object.keys(t).reduce((r,s)=>{const i=t[s];return s==="conditions"?(r[s]=i,r):be()(i)?{...r,[s]:Lt(i,n)}:(r[s]=n,r)},{}),He=Lt,Un={initialData:{},modifiedData:{},layouts:{}},Kn=(t,n)=>(0,_.ZP)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(h()(t,c)).forEach(d=>{const p=h()(t,[...c,d,i],void 0);if(p){let m=He(p,l);if(!l&&m.conditions){const g=He(m.conditions,!1);m={...m,conditions:g}}pe()(r,[...c,d,i],m)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=_e()(t.modifiedData);const p=s.split(".."),m=h()(d,p,{});Object.keys(m).forEach(g=>{if(P()(m[g],`properties.${i}`)){const v=h()(m,[g,"properties",i,l]),O=[...p,g,"properties",i,l];if(!be()(v))pe()(d,O,c);else{const W=He(v,c);pe()(d,O,W)}}}),c||(d=et(d)),pe()(r,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;pe()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=_e()(t.modifiedData);pe()(s,[...n.keys.split("..")],n.value),n.value||(s=et(s)),pe()(r,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=_e()(t.modifiedData);const d=h()(c,l,{}),p=He(d,i);pe()(c,l,p),i||(c=et(c)),pe()(r,["modifiedData"],c);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),tt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),zn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:tt(r),properties:{}}},Yn=t=>Object.values(t).reduce((n,r)=>{const s=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=zn(l);return i.push(d),i},[]);return[...n,...s]},[]),kt=t=>Object.values(t).reduce((n,r)=>{const s=Yn(r);return[...n,...s]},[]),It=(t,n="")=>Object.entries(t).reduce((r,s)=>{const[i,l]=s;return be()(l)?[...r,...It(l,`${n}${i}.`)]:(l&&!be()(l)&&r.push(`${n}${i}`),r)},[]),Xn=(t,n,{conditions:r,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=It(d),i},{action:t,subject:n,conditions:tt(r),properties:{}}),wn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:tt(r)}),Jn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!De(c).some(m=>m))return s;if(!c?.properties?.enabled){const m=Xn(l,t,c);return[...s,m]}if(!c.properties.enabled)return s;const p=wn(l,t,c);return s.push(p),s},[]),Zt=t=>Object.entries(t).reduce((r,s)=>{const[i,l]=s,c=Jn(i,l);return[...r,...c]},[]),Qn=t=>{const n=kt(t.plugins),r=kt(t.settings),s=Zt(t.collectionTypes),i=Zt(t.singleTypes);return[...n,...r,...s,...i]},qn=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],nt=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Kn,Un,()=>Hn(t,r)),{formatMessage:p}=(0,I.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const $=(0,x.e5)(i.collectionTypes,c.collectionTypes),b=(0,x.e5)(i.singleTypes,c.singleTypes),f={...$,...b};let Z;return T()(f)?Z=!1:Z=Object.values(f).some(L=>Object.values(L).some(B=>P()(B,"conditions"))),{permissionsToSend:Qn(c),didUpdateConditions:Z}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const m=($,b,f,Z)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:$,propertyName:b,rowName:f,value:Z})},g=($,b,f)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:$,actionId:b,value:f})},v=$=>{d({type:"ON_CHANGE_CONDITIONS",conditions:$})},O=(0,e.useCallback)(({target:{name:$,value:b}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:$,value:b})},[]),W=(0,e.useCallback)(({target:{name:$,value:b}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:$,value:b})},[]);return e.createElement(Rn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:v,onChangeSimpleCheckbox:O,onChangeParentCheckbox:W,onChangeCollectionTypeLeftActionRowCheckbox:m,onChangeCollectionTypeGlobalActionCheckbox:g}},e.createElement(k.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(R.m,null,qn.map($=>e.createElement(R.O,{key:$.id},p({id:$.labelId,defaultMessage:$.defaultMessage})))),e.createElement(E.n,{style:{position:"relative"}},e.createElement(E.x,null,e.createElement(Et,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(Et,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(Pt,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(E.x,null,e.createElement(Pt,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});nt.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},nt.propTypes={layout:o().object,isFormDisabled:o().bool.isRequired,permissions:o().array};const _n=(0,e.memo)(nt)},92100:(X,F,a)=>{"use strict";a.r(F),a.d(F,{default:()=>H});var e=a(67294),y=a(86597),o=a(16550),x=a(87751),k=a(185),R=a(53979),E=a(11047),S=a(29728),P=a(49066),M=a(41580),T=a(41054),I=a(67109),C=a(27361),u=a.n(C),N=a(86896),Q=a(18280),U=a(75515),he=a(11276),A=a(74571),K=a(16364),me=a(64256),h=a(45697),q=a.n(h);const z=({disabled:re,role:D,values:j,errors:_,onChange:se,onBlur:de})=>{const{formatMessage:te}=(0,N.Z)();return e.createElement(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.k,{justifyContent:"space-between"},e.createElement(M.x,null,e.createElement(M.x,null,e.createElement(U.Z,{fontWeight:"bold"},D?D.name:te({id:"global.details",defaultMessage:"Details"}))),e.createElement(M.x,null,e.createElement(U.Z,{textColor:"neutral500",variant:"pi"},D?D.description:te({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(S.z,{disabled:!0,variant:"secondary"},te({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:D.usersCount}))),e.createElement(he.r,{gap:4},e.createElement(A.P,{col:6},e.createElement(K.o,{disabled:re,name:"name",error:_.name&&te({id:_.name}),label:te({id:"global.name",defaultMessage:"Name"}),onChange:se,onBlur:de,value:j.name||""})),e.createElement(A.P,{col:6},e.createElement(me.g,{disabled:re,label:te({id:"global.description",defaultMessage:"Description"}),name:"description",error:_.name&&te({id:_.name}),onChange:se,onBlur:de},j.description||"")))))};z.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},z.propTypes={disabled:q().bool,errors:q().object.isRequired,onBlur:q().func.isRequired,onChange:q().func.isRequired,role:q().object,values:q().object};const ee=z;var ie=a(48474),le=a(87561);const Ce=le.Ry().shape({name:le.Z_().required(y.I0.required)}),Ee=()=>{const re=(0,y.lm)(),{formatMessage:D}=(0,N.Z)(),{params:{id:j}}=(0,o.$B)("/settings/roles/:id"),[_,se]=(0,e.useState)(!1),de=(0,e.useRef)(),{lockApp:te,unlockApp:ue}=(0,y.o1)(),{trackUsage:Le}=(0,y.rS)(),{isLoading:xe,data:ke}=(0,ie.U_)(j),{role:fe,permissions:$e,isLoading:Me,onSubmitSucceeded:Ie}=(0,ie.Dq)(j),Ze=async Y=>{try{te(),se(!0);const{permissionsToSend:w,didUpdateConditions:ye}=de.current.getPermissions();await(0,y.WY)(`/admin/roles/${j}`,{method:"PUT",body:Y}),fe.code!=="strapi-super-admin"&&(await(0,y.WY)(`/admin/roles/${j}/permissions`,{method:"PUT",body:{permissions:w}}),ye&&Le("didUpdateConditions")),de.current.setFormAfterSubmit(),Ie({name:Y.name,description:Y.description}),re({type:"success",message:{id:"notification.success.saved"}})}catch(w){console.error(w.response);const ye=u()(w,"response.payload.message","An error occured"),ae=u()(w,"response.payload.data.permissions[0]",ye);re({type:"warning",message:ae})}finally{se(!1),ue()}},Re=fe.code==="strapi-super-admin";return e.createElement(k.o,null,e.createElement(y.SL,{name:"Roles"}),e.createElement(T.J9,{enableReinitialize:!0,initialValues:{name:fe.name,description:fe.description},onSubmit:Ze,validationSchema:Ce,validateOnChange:!1},({handleSubmit:Y,values:w,errors:ye,handleChange:ae,handleBlur:Be})=>e.createElement("form",{onSubmit:Y},e.createElement(R.T,{primaryAction:e.createElement(E.k,{gap:2},e.createElement(S.z,{disabled:fe.code==="strapi-super-admin",onClick:Y,loading:_,size:"L"},D({id:"global.save",defaultMessage:"Save"}))),title:D({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:D({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(y.rU,{startIcon:e.createElement(I.Z,null),to:"/settings/roles"},D({id:"global.back",defaultMessage:"Back"}))}),e.createElement(P.D,null,e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(ee,{isLoading:Me,disabled:Re,errors:ye,values:w,onChange:ae,onBlur:Be,role:fe}),!xe&&!Me?e.createElement(M.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(Q.Z,{isFormDisabled:Re,permissions:$e,ref:de,layout:ke})):e.createElement(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(y.dO,null)))))))},H=()=>{const re=(0,e.useMemo)(()=>({read:x.Z.settings.roles.read,update:x.Z.settings.roles.update}),[]),{isLoading:D,allowedActions:{canRead:j,canUpdate:_}}=(0,y.ss)(re);return D?e.createElement(y.dO,null):!j&&!_?e.createElement(o.l_,{to:"/"}):e.createElement(Ee,null)}},44174:X=>{function F(a,e,y,o){for(var x=-1,k=a==null?0:a.length;++x<k;){var R=a[x];e(o,R,y(R),a)}return o}X.exports=F},81119:(X,F,a)=>{var e=a(89881);function y(o,x,k,R){return e(o,function(E,S,P){x(R,E,k(E),P)}),R}X.exports=y},55189:(X,F,a)=>{var e=a(44174),y=a(81119),o=a(67206),x=a(1469);function k(R,E){return function(S,P){var M=x(S)?e:y,T=E?E():{};return M(S,R,o(P,2),T)}}X.exports=k},42348:(X,F,a)=>{var e=a(21078),y=1/0;function o(x){var k=x==null?0:x.length;return k?e(x,y):[]}X.exports=o},7739:(X,F,a)=>{var e=a(89465),y=a(55189),o=Object.prototype,x=o.hasOwnProperty,k=y(function(R,E,S){x.call(R,S)?R[S].push(E):e(R,S,[E])});X.exports=k},48734:(X,F,a)=>{"use strict";a.d(F,{U:()=>I,y:()=>M});var e=a(85893),y=a(67294),o=a(88972),x=a(13819),k=a(41580),R=a(11047),E=a(2504),S=a(75515);const P=({theme:C,expanded:u,variant:N,disabled:Q,error:U})=>U?`1px solid ${C.colors.danger600} !important`:Q?`1px solid ${C.colors.neutral150}`:u?`1px solid ${C.colors.primary600}`:N==="primary"?`1px solid ${C.colors.neutral0}`:`1px solid ${C.colors.neutral100}`,M=(0,o.ZP)(S.Z)``,T=(0,o.ZP)(k.x)`
  border: ${P};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:C})=>C.colors.primary600};

    ${M} {
      color: ${({theme:C,expanded:u})=>u?void 0:C.colors.primary700};
    }

    ${S.Z} {
      color: ${({theme:C,expanded:u})=>u?void 0:C.colors.primary600};
    }

    & > ${R.k} {
      background: ${({theme:C})=>C.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:C})=>C.colors.primary200};
    }
  }
`,I=({children:C,disabled:u=!1,error:N,expanded:Q=!1,hasErrorMessage:U=!0,id:he,onToggle:A,toggle:K,size:me="M",variant:h="primary",shadow:q})=>{const z=(0,E.M)(he),ee=y.useMemo(()=>({expanded:Q,onToggle:A,toggle:K,id:z,size:me,variant:h,disabled:u}),[u,Q,z,A,me,K,h]);return(0,e.jsxs)(x.S.Provider,{value:ee,children:[(0,e.jsx)(T,{"data-strapi-expanded":Q,disabled:u,"aria-disabled":u,expanded:Q,hasRadius:!0,variant:h,error:N,shadow:q,children:C}),N&&U&&(0,e.jsx)(k.x,{paddingTop:1,children:(0,e.jsx)(S.Z,{variant:"pi",textColor:"danger600",children:N})})]})}},63081:(X,F,a)=>{"use strict";a.d(F,{v:()=>x});var e=a(85893),y=a(13819),o=a(41580);const x=({children:k,...R})=>{const{expanded:E,id:S}=(0,y.A)();if(!E)return null;const P=`accordion-content-${S}`,M=`accordion-label-${S}`,T=`accordion-desc-${S}`;return(0,e.jsx)(o.x,{role:"region",id:P,"aria-labelledby":M,"aria-describedby":T,...R,children:k})}},13819:(X,F,a)=>{"use strict";a.d(F,{A:()=>o,S:()=>y});var e=a(67294);const y=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),o=()=>(0,e.useContext)(y)},74756:(X,F,a)=>{"use strict";a.d(F,{B:()=>C});var e=a(85893),y=a(12645),o=a(88972),x=a(48734),k=a(13819);const R=({expanded:u,disabled:N,variant:Q})=>{let U="neutral100";return u?U="primary100":N?U="neutral150":Q==="primary"&&(U="neutral0"),U};var E=a(11047),S=a(52624),P=a(39785),M=a(75515);const T=(0,o.ZP)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:N})=>N?u.colors.primary600:u.colors.neutral500};
    }
  }
`,I=(0,o.ZP)(E.k)`
  min-height: ${({theme:u,size:N})=>u.sizes.accordions[N]};
  border-radius: ${({theme:u,expanded:N})=>N?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,C=({title:u,description:N,as:Q="span",togglePosition:U="right",action:he,...A})=>{const{onToggle:K,toggle:me,expanded:h,id:q,size:z,variant:ee,disabled:ie}=(0,k.A)(),le=`accordion-content-${q}`,Se=`accordion-label-${q}`,Ce=`accordion-desc-${q}`,ce=z==="M"?6:4,Ee=z==="M"?ce:ce-2,Oe=R({expanded:h,disabled:ie,variant:ee}),H={as:Q,fontWeight:z==="S"?"bold":void 0,id:Se,textColor:h?"primary600":"neutral700",ellipsis:!0,variant:z==="M"?"delta":void 0},re=h?"primary600":"neutral600",D=h?"primary200":"neutral200",j=z==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{ie||(me&&!K?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),me()):K&&K())},se=(0,e.jsx)(E.k,{justifyContent:"center",borderRadius:"50%",height:j,width:j,transform:h?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:D,cursor:ie?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(S.J,{as:y.Z,width:z==="M"?`${11/16}rem`:`${8/16}rem`,color:h?"primary600":"neutral600"})});return(0,e.jsx)(I,{paddingBottom:Ee,paddingLeft:ce,paddingRight:ce,paddingTop:Ee,background:Oe,expanded:h,size:z,justifyContent:"space-between",cursor:ie?"not-allowed":"",children:(0,e.jsxs)(E.k,{gap:3,flex:1,maxWidth:"100%",children:[U==="left"&&se,(0,e.jsx)(T,{onClick:_,"aria-disabled":ie,"aria-expanded":h,"aria-controls":le,"aria-labelledby":Se,"data-strapi-accordion-toggle":!0,expanded:h,type:"button",flex:1,minWidth:0,...A,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.y,{...H,children:u}),N&&(0,e.jsx)(M.Z,{as:"p",id:Ce,textColor:re,children:N})]})}),U==="right"&&(0,e.jsxs)(E.k,{gap:3,children:[se,he]}),U==="left"&&he]})})}},2407:(X,F,a)=>{"use strict";a.d(F,{$:()=>P,O:()=>M});var e=a(85893),y=a(16405),o=a(88972),x=a(41580),k=a(11047),R=a(75515),E=a(63237);const S=(0,o.ZP)(k.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:T})=>T.colors.neutral500};
    }
  }
  :last-of-type ${x.x} {
    display: none;
  }
  :last-of-type ${R.Z} {
    color: ${({theme:T})=>T.colors.neutral800};
    font-weight: ${({theme:T})=>T.fontWeights.bold};
  }
`,P=({children:T})=>(0,e.jsxs)(S,{inline:!0,as:"li",children:[(0,e.jsx)(R.Z,{variant:"pi",textColor:"neutral600",children:T}),(0,e.jsx)(x.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(y.Z,{})})]});P.displayName="Crumb";const M=({children:T,label:I,...C})=>(0,e.jsxs)(k.k,{...C,children:[(0,e.jsx)(E.T,{children:I}),(0,e.jsx)("ol",{"aria-hidden":!0,children:T})]});M.displayName="Breadcrumbs"},17603:(X,F,a)=>{"use strict";a.d(F,{Q:()=>R});var e=a(67294),y=a(45697),o=a(82562);const x=({children:E,label:S,...P})=>{const M=E.map(T=>T.props.value);return e.createElement(e.Fragment,null,e.createElement(o.W,{"data-opt-group":!0,"data-opt-group-children":M,"aria-label":`${S}, ${E.length} items`,...P},S),E)};x.propTypes={children:y.arrayOf(y.node).isRequired,label:y.string.isRequired},x.displayName="OptGroup";var k=a(48302);const R=({options:E,...S})=>e.createElement(k.P,{multi:!0,...S},E.map(({label:P,value:M,children:T})=>T?e.createElement(x,{key:P,label:P},T?.map(I=>e.createElement(o.W,{key:I.value,value:I.value},I.label))):e.createElement(o.W,{key:M,value:M},P)));R.propTypes={options:y.arrayOf(y.object).isRequired}}}]);
