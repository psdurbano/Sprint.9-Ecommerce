(self.webpackChunkservidor=self.webpackChunkservidor||[]).push([[994],{79932:(Dp,Fo,g)=>{"use strict";g.r(Fo),g.d(Fo,{App:()=>di,default:()=>fp});var t=g(67294),ui=g(64593),ie=g(16550),h=g(86597),Se=g(185),Be=g(53979),So=g(17034),Q=g(86896),mi=g(89734),Ao=g.n(mi),Qe=g(87751);const C=e=>`content-manager.${e}`;var We=g(99168),Te=g(45697),n=g.n(Te);const Oo=(0,t.createContext)();function Qt({attributes:e,buttonData:o,children:r,goTo:s,layout:i,metadatas:l,moveItem:a,moveRow:c,onAddData:u,relationsLayout:d,removeField:m,selectedItemName:f,setEditFieldToSelect:p,...y}){return t.createElement(Oo.Provider,{value:{attributes:e,buttonData:o,goTo:s,layout:i,metadatas:l,moveItem:a,moveRow:c,onAddData:u,relationsLayout:d,removeField:m,selectedItemName:f,setEditFieldToSelect:p,...y}},r)}Qt.defaultProps={attributes:{},buttonData:[],goTo(){},layout:[],metadatas:{},moveItem(){},moveRow(){},onAddData(){},relationsLayout:[],removeField(){},selectedItemName:null,setEditFieldToSelect(){}},Qt.propTypes={attributes:n().object,buttonData:n().array,children:n().node.isRequired,goTo:n().func,layout:n().array,metadatas:n().object,moveItem:n().func,moveRow:n().func,onAddData:n().func,relationsLayout:n().array,removeField:n().func,selectedItemName:n().string,setEditFieldToSelect:n().func};const $o=Qt,Ce={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"};var N=g(88972),w=g(11047),G=g(75515),Ae=g(12814),Ke=g(4585),Mt=g(70968);const Zo=e=>e.length>20?`${e.substring(0,20)}...`:e,Kt=(0,N.ZP)(w.k)`
  height: ${({theme:e})=>e.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:e})=>e.spaces[3]};
  }
`,qo=(0,N.ZP)(Kt)`
  padding: 0 ${({theme:e})=>e.spaces[3]};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,pi=(0,N.ZP)(w.k)`
  display: inline-flex;
  max-height: ${32/16}rem;
  opacity: ${({transparent:e})=>e?0:1};
  background-color: ${({theme:e,isSibling:o})=>o?e.colors.neutral100:e.colors.primary100};
  border: 1px solid
    ${({theme:e,isSibling:o})=>o?e.colors.neutral150:e.colors.primary200};

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:e,isSibling:o})=>o?void 0:e.colors.primary600};
    }
  }

  ${G.Z} {
    color: ${({theme:e,isSibling:o})=>o?void 0:e.colors.primary600};
  }

  ${qo} {
    border-right: 1px solid
      ${({theme:e,isSibling:o})=>o?e.colors.neutral150:e.colors.primary200};
  }
`,Yt=({labelField:e,transparent:o,isSibling:r})=>{const s=Zo(e);return t.createElement(pi,{hasRadius:!0,justifyContent:"space-between",transparent:o,isSibling:r},t.createElement(w.k,{gap:3},t.createElement(qo,{alignItems:"center"},t.createElement(Ae.Z,null)),t.createElement(G.Z,{fontWeight:"bold"},s)),t.createElement(w.k,{paddingLeft:3},t.createElement(Kt,{alignItems:"center"},t.createElement(Ke.Z,null)),t.createElement(Kt,{alignItems:"center"},t.createElement(Mt.Z,null))))};Yt.defaultProps={isSibling:!1,transparent:!1},Yt.propTypes={isSibling:n().bool,labelField:n().string.isRequired,transparent:n().bool};const Xt=Yt;var A=g(41580),ge=g(12028),gi=g(12645),we=g(20022);const fi=(0,N.ZP)(A.x)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
`,hi=(0,N.ZP)(A.x)`
  height: ${32/16}rem;
  width: ${32/16}rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${6/16}rem;
    width: ${11/16}rem;
    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
`,yi=N.ZP.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`,No=({displayedValue:e})=>t.createElement(fi,{paddingLeft:3,paddingRight:3,paddingTop:3,paddingBottom:3,hasRadius:!0,background:"neutral0",width:(0,h.Q1)(300)},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(yi,{type:"button"},t.createElement(w.k,null,t.createElement(hi,{background:"neutral200"},t.createElement(gi.Z,null)),t.createElement(w.k,{gap:2,paddingLeft:6,maxWidth:(0,h.Q1)(150)},t.createElement(G.Z,{textColor:"neutral700",ellipsis:!0},e)))),t.createElement(A.x,{paddingLeft:3},t.createElement(w.k,null,t.createElement(ge.h,{noBorder:!0},t.createElement(we.Z,null)),t.createElement(A.x,{paddingLeft:2},t.createElement(ge.h,{noBorder:!0},t.createElement(Ae.Z,null)))))));No.propTypes={displayedValue:n().string.isRequired};const jo=No;var Jt=g(37856),Bo=g(52624),bi=g(50361),Me=g.n(bi);const Dt=(e,o,r)=>{if(Array.isArray(e)&&o>=0&&r>=0&&o<=e.length-1&&r<=e.length-1){const s=Me()(e),i=s.splice(o,1);return s.splice(r,0,i[0]),s}return e};var Ei=g(7334),Wo=g.n(Ei);const zo=e=>{const o=e.type;return o==="relation"?!Wo()(e.relationType).includes("morph"):!["json","dynamiczone","richtext","password"].includes(o)&&!!o},Ci=(e,o)=>{typeof e=="function"?e(o):e!=null&&(e.current=o)},kt=(...e)=>o=>e.forEach(r=>Ci(r,o));var Ri=g(27361),I=g.n(Ri);const Vo=(e,o)=>Object.keys(e).reduce((r,s)=>{const i=I()(e,[s],{}),{default:l,component:a,type:c,required:u,min:d,repeatable:m}=i;if(l!==void 0&&(r[s]=l),c==="component"){const f=o?.[a]?.attributes??{},p=Vo(f,o);if(u===!0&&(r[s]=m===!0?[]:p),d&&m===!0&&u){r[s]=[];for(let y=0;y<d;y+=1)r[s].push(p)}}return c==="dynamiczone"&&u===!0&&(r[s]=[]),r},{}),It=Vo;var vi=g(57557),Uo=g.n(vi);const Lt=({layouts:e,metadatas:o,...r})=>{const s=e.list.map(a=>a.name?a.name:a),i=Object.keys(o).reduce((a,c)=>{const u=I()(o,[c],{});let d=u.edit;return d.mainField&&(d={...d,mainField:u.edit.mainField.name}),{...a,[c]:{edit:d,list:Uo()(u.list,["mainField"])}}},{}),l=e.edit.map(a=>a.map(({name:c,size:u})=>({name:c,size:u})));return{...r,layouts:{edit:l,list:s},metadatas:i}},Ti=(e,o)=>e.map(r=>({...r,subject:o})),Ho=e=>{const o={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(o).reduce((r,s)=>(r[s]=Ti(o[s],e),r),{})};var Mi=g(7654),Go=g.n(Mi);const Qo=e=>e.split(".").filter(o=>Go()(parseInt(o,10))),_t=e=>{if(e.length===0)return-1;const o=Math.max.apply(Math,e.map(r=>r.__temp_key__??0));return Number.isNaN(o)?-1:o},ce=e=>`/content-manager/${e}`;var Di=g(36968),J=g.n(Di);const Ko=(e,o,r)=>{const s=c=>o.find(u=>u.uid===c),i=Object.assign({},e),l=e[r].uid,a=s(l);return J()(i,[r],{...e[r],...a}),Object.keys(e.components).forEach(c=>{const u=s(c);J()(i,["components",c],{...e.components[c],...u})}),i},Yo=(e,o,r)=>{const s=(i,l)=>Object.keys(i).reduce((a,c)=>{const u=(0,h.UN)(l,c),d=I()(i,c),m=(0,h.k2)(l,[c,"component"]),f=(0,h.k2)(l,[c,"repeatable"]);return u==="dynamiczone"?(a[c]=d.map(p=>s(p,r[p.__component])),a):u==="component"?(f?a[c]=d&&d.map(p=>s(p,r[m])):a[c]=d&&s(d,r[m]),a):(u!=="password"&&(a[c]=d),a)},{});return s(e,o)},ze={DRAFT:"draft",PUBLISHED:"published"},en=5,ki=10;var at=g(61080);const Ii=(e,o,{onCancel:r,onDropItem:s,onGrabItem:i,onMoveItem:l})=>{const[a,c]=(0,t.useState)(!1),u=p=>{a&&(p==="UP"?l(o-1,o):p==="DOWN"&&l(o+1,o))},d=()=>{a?(s&&s(o),c(!1)):(i&&i(o),c(!0))},m=()=>{a&&(c(!1),r&&r(o))};return p=>{if(e&&!(p.key==="Tab"&&!a))switch(p.preventDefault(),p.key){case" ":case"Enter":d();break;case"Escape":m();break;case"ArrowDown":case"ArrowRight":u("DOWN");break;case"ArrowUp":case"ArrowLeft":u("UP");break;default:}}},tn=(e,{type:o="STRAPI_DND",index:r,item:s={},onStart:i,onEnd:l,onGrabItem:a,onDropItem:c,onCancel:u,onMoveItem:d,dropSensitivity:m="regular"})=>{const f=(0,t.useRef)(null),[{handlerId:p},y]=(0,We.useDrop)({accept:o,collect(v){return{handlerId:v.getHandlerId()}},hover(v,F){if(!f.current)return;const S=v.index,T=r;if(S!==T){if(m==="regular"){const D=f.current.getBoundingClientRect(),x=(D.bottom-D.top)/2,z=F.getClientOffset().y-D.top;if(S<T&&z<x||S>T&&z>x)return}d(T,S),v.index=T}}}),[{isDragging:b},R,k]=(0,We.useDrag)({type:o,item(){i&&i();const{width:v}=f.current?.getBoundingClientRect()??{};return{index:r,width:v,...s}},end(){l&&l()},canDrag:e,isDragging:s.id?v=>s.id===v.getItem().id:void 0,collect:v=>({isDragging:v.isDragging()})}),E=Ii(e,r,{onGrabItem:a,onDropItem:c,onCancel:u,onMoveItem:d});return[{handlerId:p,isDragging:b,handleKeyDown:E},f,y,R,k]},xt=50,Ye=4,Xo=(0,N.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,Jo=(0,N.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`,nn=({ariaDescribedBy:e,children:o,displayValue:r,canDrag:s,disabled:i,endAction:l,iconButtonAriaLabel:a,style:c,id:u,index:d,name:m,onCancel:f,onDropItem:p,onGrabItem:y,status:b,updatePositionOfRelation:R,...k})=>{const[{handlerId:E,isDragging:v,handleKeyDown:F},S,T,D,x]=tn(s&&!i,{type:`${Ce.RELATION}_${m}`,index:d,item:{displayedValue:r,status:b,id:u},onGrabItem:y,onDropItem:p,onCancel:f,onMoveItem:R,dropSensitivity:"immediate"}),j=kt(S,D);return(0,t.useEffect)(()=>{x((0,at.rX)())},[x]),t.createElement(A.x,{style:c,as:"li",ref:T,"aria-describedby":e,cursor:s?"all-scroll":"default"},v?t.createElement(Li,null):t.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:s?2:4,paddingRight:4,hasRadius:!0,borderSize:1,borderColor:"neutral200",background:i?"neutral150":"neutral0",justifyContent:"space-between",ref:s?j:void 0,"data-handler-id":E,...k},t.createElement(Xo,{gap:1},s?t.createElement(ge.h,{forwardedAs:"div",role:"button",tabIndex:0,"aria-label":a,noBorder:!0,onKeyDown:F,disabled:i},t.createElement(Ae.Z,null)):null,t.createElement(Jo,{justifyContent:"space-between"},o)),l&&t.createElement(A.x,{paddingLeft:4},l)))},Li=()=>t.createElement(A.x,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${Ye}px)`});nn.defaultProps={ariaDescribedBy:"",canDrag:!1,displayValue:"",disabled:!1,endAction:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,style:void 0,status:void 0,updatePositionOfRelation:void 0},nn.propTypes={ariaDescribedBy:n().string,canDrag:n().bool,children:n().node.isRequired,displayValue:n().string,disabled:n().bool,endAction:n().node,iconButtonAriaLabel:n().string.isRequired,id:n().number.isRequired,index:n().number.isRequired,name:n().string.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,status:n().string,style:n().shape({height:n().number,left:n().number,position:n().string,right:n().number,width:n().string}),updatePositionOfRelation:n().func};var xi=g(8748),Pi=g(23620),wi=g(54574),Fi=g(19270),_o=g(39785),Xe=g(63237),Si=g(63428),Ai=g(96404),Pt=g(84495),er=g(30815);const on=({children:e,loadMore:o,search:r,totalNumberOfRelations:s,size:i,...l})=>t.createElement(t.Fragment,null,t.createElement(w.k,{paddingBottom:s>0?3:0,gap:2,justifyContent:"space-between",alignItems:"end",wrap:"wrap"},t.createElement(w.k,{direction:"column",alignItems:"stretch",basis:i<=6?"100%":"70%",gap:1,...l},r),o),e);on.defaultProps={search:void 0,loadMore:void 0,totalNumberOfRelations:0},on.propTypes={children:n().node.isRequired,search:n().node,loadMore:n().node,size:n().number.isRequired,totalNumberOfRelations:n().number};const Oi=(0,N.ZP)(A.x)`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({overflowDirection:e})=>e==="top-bottom"||e==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({overflowDirection:e})=>e==="top-bottom"||e==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,rn=({children:e,overflow:o,...r})=>t.createElement(Oi,{overflowDirection:o,...r},e);rn.defaultProps={overflow:""},rn.propTypes={children:n().node.isRequired,overflow:n().oneOf(["top-bottom","bottom","top",""])};var $i=g(5079);const Zi=N.ZP.div`
  flex-shrink: 0;
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  margin-right: ${({theme:e})=>e.spaces[2]};
  background-color: ${({theme:e,isDraft:o})=>e.colors[o?"secondary600":"success600"]};
  border-radius: 50%;
`,tr=e=>{const{formatMessage:o}=(0,Q.Z)(),r=$i.c.Option,{publicationState:s,mainField:i,id:l}=e.data;if(s){const a=s==="draft",c={id:C("components.Select.draft-info-title"),defaultMessage:"State: Draft"},u={id:C("components.Select.publish-info-title"),defaultMessage:"State: Published"},d=o(a?c:u);return t.createElement(r,{...e},t.createElement(w.k,null,t.createElement(Zi,{title:d,isDraft:a}),t.createElement(G.Z,{ellipsis:!0},i??l)))}return t.createElement(r,{...e},i??l)};tr.propTypes={isFocused:n().bool.isRequired,data:n().shape({id:n().number.isRequired,isDraft:n().bool,mainField:n().string,publicationState:n().oneOfType([n().string,n().bool])}).isRequired};var le=g(86706);const nr=e=>e["content-manager_editViewLayoutManager"].currentLayout,Oe=()=>{const e=(0,le.v9)(nr),o=(0,t.useCallback)(r=>e?.components?.[r]??{},[e]);return{...e,getComponentLayout:o}};var Re=g(52861);const or=(e,o)=>o.find(r=>r.uid===e),qi=(e,o)=>{const r=Ni(e,o),s=rr(r.contentType,o),i=ji(r.contentType,r.components);return J()(r,["contentType","layouts","edit"],s),J()(r,["contentType","layouts","list"],i),Object.keys(r.components).forEach(l=>{const a=rr(r.components[l],o);J()(r,["components",l,"layouts","edit"],a)}),r},Ni=(e,o)=>{const r=Ko(Me()(e),o,"contentType"),{components:s,contentType:i}=r,l=a=>Object.keys(a.metadatas).reduce((c,u)=>{const d=I()(a,["attributes",u],{});let m=a.metadatas[u];if(d.type==="relation"){const f=or(d.targetModel,o),p=m.edit.mainField,y={name:p,schema:I()(f,["attributes",p])};m={list:{...m.list,mainField:y},edit:{...m.edit,mainField:y}}}return c[u]=m,c},{});return J()(r,["contentType","metadatas"],l(i)),Object.keys(s).forEach(a=>{const c=s[a],u=l(c);J()(r,["components",a,"metadatas"],u)}),r},rr=(e,o)=>e.layouts.edit.reduce((r,s)=>{const i=s.map(l=>{const a=I()(e,["attributes",l.name],{}),c={...l,fieldSchema:a,metadatas:I()(e,["metadatas",l.name,"edit"],{})};if(a.type==="relation"){const d=or(a.targetModel,o).pluginOptions||{};J()(c,"targetModelPluginOptions",d),J()(c,"queryInfos",{shouldDisplayRelationLink:Bi(e,l.name,o)})}return c});return r.push(i),r},[]),ji=(e,o)=>e.layouts.list.reduce((s,i)=>{const l=I()(e,["attributes",i],{}),a=I()(e,["metadatas",i,"list"],{}),c=l.type;if(c==="relation")return s.push({key:`__${i}_key__`,name:i,fieldSchema:l,metadatas:a}),s;if(c==="component"){const u=o[l.component],d=u.settings.mainField,m=u.attributes[d];return s.push({key:`__${i}_key__`,name:i,fieldSchema:l,metadatas:{...a,mainField:{...m,name:d}}}),s}return s.push({key:`__${i}_key__`,name:i,fieldSchema:l,metadatas:a}),s},[]),Bi=(e,o,r)=>{const s=I()(e,["attributes",o,"targetModel"],"");return Wi(r).includes(s)},Wi=e=>e.filter(o=>o.isDisplayed).map(({uid:o})=>o),sr=qi;var wt=g(18172);const zi={error:null,isLoading:!0,layout:{},layouts:{}},Vi=(e,o)=>(0,wt.ZP)(e,r=>{switch(o.type){case"GET_DATA":{r.isLoading=!0,r.error=null,r.layout={};break}case"GET_DATA_SUCCEEDED":{const s=o.data.contentType.uid;r.layout=o.data,r.layouts[s]=o.data,r.isLoading=!1;break}case"GET_DATA_ERROR":{r.isLoading=!1,r.error=o.error;break}case"SET_LAYOUT_FROM_STATE":{r.error=null,r.layout=e.layouts[o.uid];break}case"UPDATE_LAYOUT":{const s=e.layout;r.layout={...s,contentType:{uid:s.contentType.uid,...o.newLayout.contentType}},r.layouts[s.contentType.uid]={...s,contentType:{uid:s.contentType.uid,...o.newLayout.contentType}};break}default:return r}});var lt=g(20573),Ui=g(14506);const ct=()=>e=>e["content-manager_app"]||Ui.E,Bp=()=>createSelector(ct(),e=>e),Wp=()=>createSelector(ct(),e=>e.models),Hi=()=>(0,lt.P1)(ct(),e=>({collectionTypeLinks:e.collectionTypeLinks,singleTypeLinks:e.singleTypeLinks})),sn=()=>(0,lt.P1)(ct(),({components:e,models:o})=>({schemas:[...e,...o]})),zp=null,ir=e=>{const[{error:o,isLoading:r,layout:s,layouts:i},l]=(0,t.useReducer)(Vi,zi),a=(0,t.useMemo)(sn,[]),{schemas:c}=(0,le.v9)(p=>a(p),le.wU),u=(0,t.useRef)(!0),{get:d}=(0,h.kY)(),m=(0,t.useCallback)(async(p,y)=>{if(i[p]){l({type:"SET_LAYOUT_FROM_STATE",uid:p});return}l({type:"GET_DATA"});try{const b=ce(`content-types/${p}/configuration`),{data:{data:R}}=await d(b,{cancelToken:y.token});l({type:"GET_DATA_SUCCEEDED",data:sr(R,c)})}catch(b){if(Re.default.isCancel(b))return;u.current&&console.error(b),u.current&&l({type:"GET_DATA_ERROR",error:b})}},[i,c,d]);(0,t.useEffect)(()=>()=>{u.current=!1},[]),(0,t.useEffect)(()=>{const y=Re.default.CancelToken.source();return m(e,y),()=>{y.cancel("Operation canceled by the user.")}},[e,m]);const f=(0,t.useCallback)(p=>{l({type:"UPDATE_LAYOUT",newLayout:sr(p,c)})},[c]);return{error:o,isLoading:r,layout:s,updateLayout:f}},Gi=e=>e["content-manager_app"].collectionTypeLinks;var Fe=g(80129),Qi=g(13218),ar=g.n(Qi);const lr=(e,o)=>Object.keys(e).reduce((r,s)=>{const i=e[s],l=I()(o,[s],i);return ar()(i)?{...r,[s]:lr(i,l)}:(r[s]=l,r)},{}),Ki=(e,o,r)=>{const s=e.find(({to:m})=>m.includes(o));if(!s)return"/";const{to:i,search:l}=s,a=(0,Fe.parse)(l),c=(0,Fe.parse)(r.substring(1)),u=lr(a,c);return`${i}?${(0,Fe.stringify)(u,{encode:!1})}`},cr=e=>{const[{rawQuery:o}]=(0,h.Kx)(),r=(0,le.v9)(Gi);return Ki(r,e,o)},Ve=()=>(0,t.useContext)(Oo),dr=()=>{const{search:e}=(0,ie.TH)(),o=e?(0,Fe.parse)(e.substring(1)):{};return o.plugins?(0,Fe.stringify)({plugins:o.plugins},{encode:!1}):""};var ur=g(80015);const Yi=(e,o,r)=>({type:ur.m,permissions:e,__meta__:{plugins:o,containerName:r}}),Xi=()=>({type:ur.Q}),Ji=e=>e["content-manager_rbacManager"].permissions,_i=e=>e.rbacProvider.collectionTypesRelatedPermissions,mr=(e,o,r="listView")=>{const s=(0,le.v9)(_i),i=(0,le.v9)(Ji),l=(0,le.I0)(),a=s[o];return(0,t.useEffect)(()=>a?(l(Yi(a,e?e.plugins:null,r)),()=>{l(Xi())}):()=>{},[a,l,e,r]),i},Xp=(0,t.createContext)(),Jp=null,_p=()=>useContext(WysiwygContext),eg=null,pr=e=>{const o=(0,t.useRef)();return(0,t.useEffect)(()=>{o.current=e},[e]),o.current},gr=(0,N.ZP)(Pi.r)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,fr=N.ZP.button`
  svg path {
    fill: ${({theme:e,disabled:o})=>o?e.colors.neutral600:e.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:e,disabled:o})=>!o&&e.colors.neutral600};
  }
`,an=({canReorder:e,description:o,disabled:r,error:s,iconButtonAriaLabel:i,id:l,name:a,numberOfRelationsToDisplay:c,label:u,labelAction:d,labelLoadMore:m,labelDisconnectRelation:f,listAriaDescription:p,liveText:y,loadingMessage:b,onCancel:R,onDropItem:k,onGrabItem:E,noRelationsMessage:v,onRelationConnect:F,onRelationLoadMore:S,onRelationDisconnect:T,onRelationReorder:D,onSearchNextPage:x,onSearch:j,placeholder:z,publicationStateTranslations:Z,required:V,relations:B,searchResults:K,size:W})=>{const[X,q]=(0,t.useState)(null),[ee,M]=(0,t.useState)(""),L=(0,t.useRef)(),Y=(0,t.useRef)(),{data:H}=K,$=B.data,O=$.length??0,U=(0,t.useMemo)(()=>O>c?Math.min(O,c)*(xt+Ye)+xt/2:Math.min(O,c)*(xt+Ye),[O,c]),se=!!m&&B.hasNextPage,P=(0,t.useMemo)(()=>H.flat().filter(Boolean).map(te=>({...te,value:te.id,label:te.mainField})),[H]);(0,t.useEffect)(()=>{if(O<=c)return M("");const te=Ie=>{const Po=Ie.target.parentNode.scrollHeight,je=Ie.target.scrollHeight-Ie.target.scrollTop;return Ie.target.scrollTop===0?M("bottom"):M(je===Po?"top":"top-bottom")},pe=Y?.current;return!B.isLoading&&$.length>0&&pe&&Y.current.addEventListener("scroll",te),()=>{pe&&pe.removeEventListener("scroll",te)}},[B,$,c,O]);const[oe,de]=(0,t.useState)(!1),ye=(0,t.useRef)(),it=(0,t.useRef)([]);(0,t.useEffect)(()=>(P.length>0&&it.current.length===0&&de(te=>(te&&(ye.current=setTimeout(()=>{de(!0)},10)),!1)),()=>{it.current=P||[]}),[P]),(0,t.useEffect)(()=>()=>{ye.current&&clearTimeout(ye.current)},[]);const Ct=()=>{de(!1)},Rt=()=>{de(!0),j()},vt=(te,pe)=>{D&&te>=0&&te<$.length&&D(pe,te)},ve=pr($.length),ke=(0,t.useRef)(),Tt=()=>{ke.current="loadMore",S()};(0,t.useEffect)(()=>{ke.current==="onChange"&&$.length!==ve?L.current.scrollToItem($.length,"end"):ke.current==="loadMore"&&$.length!==ve&&L.current.scrollToItem(0,"start"),ke.current=void 0},[ve,$]);const Ne=`${a}-item-instructions`;return t.createElement(wi.g,{error:s,name:a,hint:o,id:l,required:V},t.createElement(on,{totalNumberOfRelations:O,size:W,search:t.createElement(t.Fragment,null,t.createElement(Fi.Q,{action:d},u),t.createElement(h.JV,{menuPosition:"absolute",menuPlacement:"auto",components:{Option:tr},options:P,isDisabled:r,isLoading:K.isLoading,error:s,inputId:l,isSearchable:!0,isClear:!0,loadingMessage:()=>b,onChange:te=>{q(null),F(te),ke.current="onChange"},onInputChange:te=>{q(te),j(te)},onMenuClose:Ct,onMenuOpen:Rt,menuIsOpen:oe,noOptionsMessage:()=>v,onMenuScrollToBottom:()=>{K.hasNextPage&&x()},placeholder:z,name:a,value:X})),loadMore:se&&t.createElement(_o.A,{disabled:B.isLoading||B.isFetchingNextPage,onClick:Tt,loading:B.isLoading||B.isFetchingNextPage,startIcon:t.createElement(er.Z,null)},m)},$.length>0&&t.createElement(rn,{overflow:ee},t.createElement(Xe.T,{id:Ne},p),t.createElement(Xe.T,{"aria-live":"assertive"},y),t.createElement(xi.t7,{height:U,ref:L,outerRef:Y,itemCount:O,itemSize:xt+Ye,itemData:{name:a,ariaDescribedBy:Ne,canDrag:e,disabled:r,handleCancel:R,handleDropItem:k,handleGrabItem:E,iconButtonAriaLabel:i,labelDisconnectRelation:f,onRelationDisconnect:T,publicationStateTranslations:Z,relations:$,updatePositionOfRelation:vt},itemKey:te=>`${$[te].mainField}_${$[te].id}`,innerElementType:"ol"},ln)),(o||s)&&t.createElement(A.x,{paddingTop:2},t.createElement(Si.J,null),t.createElement(Ai.c,null))))},ea=n().shape({data:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),hasNextPage:n().bool,isFetchingNextPage:n().bool.isRequired,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired}),ta=n().shape({data:n().arrayOf(n().shape({id:n().number.isRequired,href:n().string,mainField:n().oneOfType([n().string,n().number]),publicationState:n().oneOfType([n().string,n().bool])})),hasNextPage:n().bool,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired});an.defaultProps={canReorder:!1,description:void 0,disabled:!1,error:void 0,labelAction:null,labelLoadMore:null,liveText:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,required:!1,relations:{data:[]},searchResults:{data:[]}},an.propTypes={error:n().string,canReorder:n().bool,description:n().string,disabled:n().bool,iconButtonAriaLabel:n().string.isRequired,id:n().string.isRequired,label:n().string.isRequired,labelAction:n().element,labelLoadMore:n().string,labelDisconnectRelation:n().string.isRequired,listAriaDescription:n().string.isRequired,liveText:n().string,loadingMessage:n().string.isRequired,name:n().string.isRequired,noRelationsMessage:n().string.isRequired,numberOfRelationsToDisplay:n().number.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,onRelationConnect:n().func.isRequired,onRelationDisconnect:n().func.isRequired,onRelationLoadMore:n().func.isRequired,onRelationReorder:n().func.isRequired,onSearch:n().func.isRequired,onSearchNextPage:n().func.isRequired,placeholder:n().string.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,required:n().bool,searchResults:ta,size:n().number.isRequired,relations:ea};const ln=({data:e,index:o,style:r})=>{const{ariaDescribedBy:s,canDrag:i,disabled:l,handleCancel:a,handleDropItem:c,handleGrabItem:u,iconButtonAriaLabel:d,name:m,labelDisconnectRelation:f,onRelationDisconnect:p,publicationStateTranslations:y,relations:b,updatePositionOfRelation:R}=e,{publicationState:k,href:E,mainField:v,id:F}=b[o],S=k==="draft"?"secondary":"success";return t.createElement(nn,{ariaDescribedBy:s,canDrag:i,disabled:l,displayValue:String(v??F),iconButtonAriaLabel:d,id:F,index:o,name:m,endAction:t.createElement(fr,{"data-testid":`remove-relation-${F}`,disabled:l,type:"button",onClick:()=>p(b[o]),"aria-label":f},t.createElement(Bo.J,{width:"12px",as:Mt.Z})),onCancel:a,onDropItem:c,onGrabItem:u,status:k||void 0,style:{...r,bottom:r.bottom??0+Ye,height:r.height??0-Ye},updatePositionOfRelation:R},t.createElement(A.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},t.createElement(Pt.u,{description:v??`${F}`},E?t.createElement(gr,{to:E},v??F):t.createElement(G.Z,{textColor:l?"neutral600":"primary600",ellipsis:!0},v??F))),k&&t.createElement(Jt.q,{variant:S,showBullet:!1,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${S}700`},y[k])))};ln.defaultProps={data:{}},ln.propTypes={data:n().shape({ariaDescribedBy:n().string.isRequired,canDrag:n().bool.isRequired,disabled:n().bool.isRequired,handleCancel:n().func,handleDropItem:n().func,handleGrabItem:n().func,iconButtonAriaLabel:n().string.isRequired,labelDisconnectRelation:n().string.isRequired,name:n().string.isRequired,onRelationDisconnect:n().func.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,relations:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),updatePositionOfRelation:n().func.isRequired}),index:n().number.isRequired,style:n().object.isRequired};const na=an,hr=({status:e,displayedValue:o,width:r})=>{const{formatMessage:s}=(0,Q.Z)(),i={[ze.DRAFT]:s({id:C("relation.publicationState.draft"),defaultMessage:"Draft"}),[ze.PUBLISHED]:s({id:C("relation.publicationState.published"),defaultMessage:"Published"})},l=e===ze.DRAFT?"secondary":"success";return t.createElement(A.x,{style:{width:r}},t.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderSize:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between"},t.createElement(Xo,{gap:1},t.createElement(ge.h,{noBorder:!0},t.createElement(Ae.Z,null)),t.createElement(Jo,{maxWidth:"100%",justifyContent:"space-between"},t.createElement(A.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},t.createElement(gr,null,t.createElement(G.Z,{textColor:"primary600",ellipsis:!0},o))),e&&t.createElement(Jt.q,{variant:l,showBullet:!1,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${l}700`},i[e])))),t.createElement(A.x,{paddingLeft:4},t.createElement(fr,{type:"button"},t.createElement(Bo.J,{width:"12px",as:Mt.Z})))))};hr.propTypes={status:n().string.isRequired,displayedValue:n().string.isRequired,width:n().number.isRequired};const oa={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function ra(e,o,r){if(!e||!o)return{display:"none"};const{x:s,y:i}=r,l=`translate(${s}px, ${i}px)`;return{transform:l,WebkitTransform:l}}const sa=()=>{const{itemType:e,isDragging:o,item:r,initialOffset:s,currentOffset:i,mouseOffset:l}=(0,We.useDragLayer)(c=>({item:c.getItem(),itemType:c.getItemType(),initialOffset:c.getInitialSourceClientOffset(),currentOffset:c.getSourceClientOffset(),isDragging:c.isDragging(),mouseOffset:c.getClientOffset()}));if(!o)return null;const[a]=e.split("_");return t.createElement($o,null,t.createElement("div",{style:oa},t.createElement("div",{style:ra(s,i,l),className:"col-md-2"},[Ce.EDIT_FIELD,Ce.FIELD].includes(e)&&t.createElement(Xt,{labelField:r.labelField}),a===Ce.COMPONENT&&t.createElement(jo,{displayedValue:r.displayedValue}),a===Ce.DYNAMIC_ZONE&&t.createElement(jo,{displayedValue:r.displayedValue}),a===Ce.RELATION&&t.createElement(hr,{displayedValue:r.displayedValue,status:r.status,width:r.width}))))},yr=(0,t.createContext)();var ia=g(35800);const br=(0,t.createContext)();var Ft=g(80660),Er=g(15113);const aa=()=>({type:Er.c}),la=(e,o)=>({type:Er.O,layout:e,query:o});var ca=g(69590),$e=g.n(ca),Je=g(49066),De=g(11276),fe=g(74571),da=g(98432),ua=g(47713);const ma=()=>(0,t.useContext)(ua.ux),Cr=e=>{const{getAdminInjectedComponents:o}=ma(),[r,s,i]=e.split(".");return o(r,s,i)},Rr=({area:e,...o})=>Cr(e).map(s=>t.createElement(s.Component,{key:s.name,...o}));Rr.propTypes={area:n().string.isRequired};const St=Rr;function pa(e,o){return r=>{const s=o(r.name);return t.createElement(e,{...r,...s})}}const ga=pa;function fa(e){const{addComponentToDynamicZone:o,createActionAllowedFields:r,isCreatingEntry:s,formErrors:i,modifiedData:l,moveComponentField:a,removeComponentFromDynamicZone:c,readActionAllowedFields:u,updateActionAllowedFields:d}=(0,h.Wq)(),m=(0,t.useMemo)(()=>I()(l,[e],[]).map(y=>({componentUid:y.__component,id:y.id??y.__temp_key__})),[l,e]),f=(0,t.useMemo)(()=>(s?r:d).includes(e),[e,s,r,d]),p=(0,t.useMemo)(()=>(s?[]:u).includes(e),[e,s,u]);return{addComponentToDynamicZone:o,formErrors:i,isCreatingEntry:s,isFieldAllowed:f,isFieldReadable:p,moveComponentField:a,removeComponentFromDynamicZone:c,dynamicDisplayedComponents:m}}const ha=fa;var cn=g(48734),dn=g(74756),un=g(63081),ya=g(84238),ba=g.n(ya);function Ea(e,o){return r=>{const s=o(r);return t.createElement(e,{...r,...s})}}const Ca=Ea;var Ra=g(69572),dt=g.n(Ra);function va({isFromDynamicZone:e,name:o}){const{addNonRepeatableComponentToField:r,createActionAllowedFields:s,isCreatingEntry:i,modifiedData:l,removeComponentFromField:a,readActionAllowedFields:c,updateActionAllowedFields:u,formErrors:d}=(0,h.Wq)(),{contentType:m}=Oe(),f=(0,t.useMemo)(()=>{const v=I()(m,["attributes"],{});return Object.keys(v).filter(S=>I()(v,[S,"type"],"")==="dynamiczone")},[m]),p=(0,t.useMemo)(()=>i?s:u,[i,s,u]),y=I()(l,o,null),b=(0,t.useMemo)(()=>Qo(o),[o]),R=(0,t.useMemo)(()=>e&&i||p.filter(S=>S===b[0]).length>0?!0:p.map(S=>S.split(".")).filter(S=>S.length<b.length?!1:dt()(S,b.length).join(".")===b.join(".")).length>0,[e,i,p,b]),k=(0,t.useMemo)(()=>e||f.includes(b[0])?!0:(i?[]:c).map(S=>S.split(".")).filter(S=>S.length<b.length?!1:dt()(S,b.length).join(".")===b.join(".")).length>0,[e,f,b,i,c]),E=(0,t.useMemo)(()=>i||R?!1:k,[R,k,i]);return{addNonRepeatableComponentToField:r,formErrors:d,hasChildrenAllowedFields:R,hasChildrenReadableFields:k,isCreatingEntry:i,isReadOnly:E,removeComponentFromField:a,componentValue:y}}const Ta=va,Ma=(0,N.ZP)(A.x)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,mn=({intlLabel:e,id:o,labelAction:r,name:s,numberOfEntries:i,showNumberOfEntries:l,required:a})=>{const{formatMessage:c}=(0,Q.Z)(),u=e?.id?c(e):s;return t.createElement(A.x,{paddingBottom:1},t.createElement(w.k,null,t.createElement(G.Z,{textColor:"neutral800",htmlFor:o||s,variant:"pi",fontWeight:"bold",as:"label"},u,l&&t.createElement(t.Fragment,null,"\xA0(",i,")"),a&&t.createElement(G.Z,{textColor:"danger600"},"*")),r&&t.createElement(Ma,{paddingLeft:1},r)))};mn.defaultProps={id:void 0,labelAction:void 0,numberOfEntries:0,required:!1,showNumberOfEntries:!1},mn.propTypes={id:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,numberOfEntries:n().number,required:n().bool,showNumberOfEntries:n().bool};const Da=mn;var vr=g(99782);const ka=N.ZP.span`
  > svg {
    width: ${(0,h.Q1)(24)};
    height: ${(0,h.Q1)(24)};
    > circle {
      fill: ${({theme:e})=>e.colors.primary200};
    }
    > path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,pn=({error:e,isReadOnly:o,onClick:r})=>{const{formatMessage:s}=(0,Q.Z)();return t.createElement(t.Fragment,null,t.createElement(A.x,{as:"button",background:"neutral100",borderColor:e?"danger600":"neutral200",disabled:o,hasRadius:!0,onClick:r,paddingTop:9,paddingBottom:9,type:"button"},t.createElement(w.k,{direction:"column",gap:2},t.createElement(w.k,{justifyContent:"center",style:{cursor:o?"not-allowed":"inherit"}},t.createElement(ka,null,t.createElement(vr.Z,null))),t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{textColor:"primary600",variant:"pi",fontWeight:"bold"},s({id:C("components.empty-repeatable"),defaultMessage:"No entry yet. Click on the button below to add one."}))))),e?.id&&t.createElement(G.Z,{textColor:"danger600",variant:"pi"},s(e,{...e.values})))};pn.defaultProps={error:void 0,isReadOnly:!1},pn.propTypes={error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),isReadOnly:n().bool,onClick:n().func.isRequired};const Tr=pn;var Ia=g(44823),gn=g.n(Ia),ig=g(39961),La=g(9980),xa=g.n(La),fn=g(77869),Pa=g(79411),wa=g.n(Pa),Fa=g(40591),Mr=g.n(Fa),Sa=g(30645),Aa=g.n(Sa),Oa=g(46635),$a=g.n(Oa),Za=g(52384),qa=g.n(Za),Na=g(44266),ja=g.n(Na),Ba=g(94574),Wa=g.n(Ba),za=g(40700),Va=g.n(za),Ua=g(97003),Ha=g.n(Ua);(async()=>{await g.e(7347).then(g.bind(g,24840))})();const _e=new(xa())({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(e,o){if(o&&o!=="auto"&&(0,fn.getLanguage)(o))return'<pre class="hljs language-'+_e.utils.escapeHtml(o.toLowerCase())+'"><code>'+(0,fn.highlight)(o,e,!0).value+"</code></pre>";if(o==="auto"){const r=(0,fn.highlightAuto)(e);return'<pre class="hljs language-'+_e.utils.escapeHtml(r.language)+'"><code>'+r.value+"</code></pre>"}return'<pre class="hljs"><code>'+_e.utils.escapeHtml(e)+"</code></pre>"}}).use(wa()).use(Mr(),"warning").use(Mr(),"tip").use(Aa()).use($a()).use(qa()).use(ja()).use(Wa()).use(Va()).use(Ha());_e.renderer.rules.footnote_ref=(e,o,r,s,i)=>'<sup class="footnote-ref"><span>'+i.rules.footnote_caption(e,o,r,s,i)+"</span></sup>",_e.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">\u21A9\uFE0E</span>';const Ga=_e;var Qa=g(91036),Dr=g.n(Qa);const Ka={...Dr().defaults,allowedTags:!1,allowedAttributes:{"*":["href","align","alt","center","width","height","type","controls","target"],img:["src","alt"],source:["src","type"]}},Ya=e=>Dr()(e,Ka),Xa=N.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
  font-size: ${14/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral0};
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: ${({theme:e})=>e.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:e})=>e.spaces[2]};
    margin-block-end: ${({theme:e})=>e.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spaces[2]};
  }

  h1 {
    font-size: ${36/16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30/16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24/16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20/16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:e})=>e.spaces[8]};
    margin-bottom: ${({theme:e})=>e.spaces[7]};
    font-size: ${14/16}rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:e})=>e.colors.neutral150};
    font-style: italic;
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:e})=>e.colors.neutral150};

      th {
        padding: ${({theme:e})=>e.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:e})=>e.spaces[4]};
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14/16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:e})=>e.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`,hn=({data:e})=>{const o=(0,t.useMemo)(()=>Ya(Ga.render(e.replaceAll("\\n",`
`)||"")),[e]);return t.createElement(Xa,null,t.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))};hn.defaultProps={data:""},hn.propTypes={data:n().string};const kr=(0,t.memo)(hn),Ja=N.ZP.div`
  cursor: ${({disabled:e})=>e?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:e})=>e.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14/16}rem;
    height: ${({isExpandMode:e})=>e?"100%":"290px"};
    color: ${({theme:e})=>e.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:e})=>`${e.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:e})=>e.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:e})=>e.colors.neutral800} !important;
  }
`;var yn=g(21817);const Ee=(0,N.ZP)(ge.h)`
  padding: ${({theme:e})=>e.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,_a=(0,N.ZP)(Ee)`
  svg {
    width: ${8/16}rem;
    height: ${8/16}rem;
  }
`,Ir=(0,N.ZP)(ge.o)`
  margin-left: ${({theme:e})=>e.spaces[4]};
`,Lr=(0,N.ZP)(ge.h)`
  margin: ${({theme:e})=>`0 ${e.spaces[2]}`};
  padding: ${({theme:e})=>e.spaces[2]};

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,el=(0,N.ZP)(ge.o)`
  margin-right: ${({theme:e})=>`${e.spaces[2]}`};
`,tl=N.ZP.div`
  position: relative;
  height: calc(100% - 48px);
`,nl=(0,N.ZP)(yn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`;var At=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,ol=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,rl=/[*+-]\s/;function sl(e){if(e.getOption("disableInput"))return gn().Pass;for(var o=e.listSelections(),r=[],s=0;s<o.length;s++){var i=o[s].head,l=e.getStateAfter(i.line),a=l.list!==!1,c=l.quote!==0,u=e.getLine(i.line),d=At.exec(u),m=/^\s*$/.test(u.slice(0,i.ch));if(!o[s].empty()||!a&&!c||!d||m){e.execCommand("newlineAndIndent");return}if(ol.test(u)){var f=c&&/>\s*$/.test(u),p=!/>\s*$/.test(u);(f||p)&&e.replaceRange("",{line:i.line,ch:0},{line:i.line,ch:i.ch+1}),r[s]=`
`}else{var y=d[1],b=d[5],R=!(rl.test(d[2])||d[2].indexOf(">")>=0),k=R?parseInt(d[3],10)+1+d[4]:d[2].replace("x"," ");r[s]=`
`+y+k+b,R&&il(e,i)}}e.replaceSelections(r)}function il(e,o){var r=o.line,s=0,i=0,l=At.exec(e.getLine(r)),a=l[1];do{s+=1;var c=r+s,u=e.getLine(c),d=At.exec(u);if(d){var m=d[1],f=parseInt(l[3],10)+s-i,p=parseInt(d[3],10),y=p;if(a===m&&!isNaN(p))f===p&&(y=p+1),f>p&&(y=f+1),e.replaceRange(u.replace(At,m+y+d[4]+d[5]),{line:c,ch:0},{line:c,ch:u.length});else{if(a.length>m.length||a.length<m.length&&s===1)return;i+=1}}}while(d)}const al=sl,bn=({disabled:e,editorRef:o,error:r,isPreviewMode:s,isExpandMode:i,name:l,onChange:a,placeholder:c,textareaRef:u,value:d})=>{const m=(0,t.useRef)(a);return(0,t.useEffect)(()=>{o.current=gn().fromTextArea(u.current,{lineWrapping:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:!1,"Shift-Tab":!1},readOnly:!1,smartIndent:!1,placeholder:c,spellcheck:!0,inputStyle:"contenteditable"}),gn().commands.newlineAndIndentContinueMarkdownList=al,o.current.on("change",f=>{m.current({target:{name:l,value:f.getValue(),type:"wysiwyg"}})})},[o,u,l,c]),(0,t.useEffect)(()=>{d&&!o.current.hasFocus()&&o.current.setValue(d)},[o,d]),(0,t.useEffect)(()=>{s||e?o.current.setOption("readOnly","nocursor"):o.current.setOption("readOnly",!1)},[e,s,o]),(0,t.useEffect)(()=>{r?o.current.setOption("screenReaderLabel",r):o.current.setOption("screenReaderLabel","Editor")},[o,r]),t.createElement(tl,null,t.createElement(Ja,{isExpandMode:i,disabled:e||s},t.createElement("textarea",{ref:u})),s&&t.createElement(kr,{data:d}))};bn.defaultProps={disabled:!1,error:void 0,isPreviewMode:!1,isExpandMode:!1,placeholder:"",value:""},bn.propTypes={disabled:n().bool,editorRef:n().shape({current:n().any}).isRequired,error:n().string,isPreviewMode:n().bool,isExpandMode:n().bool,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().string,textareaRef:n().shape({current:n().any}).isRequired,value:n().string};const ll=bn;var xe=g(48302),he=g(82562),ue=g(29728),cl=g(26048),xr=g(25896),Pr=g(67628),wr=g(54244),Fr=g(71414),Sr=g(49901),dl=g(42164),ul=g(66567),ml=g(86780),pl=g(82752),gl=g(36606),fl=g(63851),hl=g(95629);const En=({disabled:e,editorRef:o,isExpandMode:r,isPreviewMode:s,onActionClick:i,onToggleMediaLib:l,onTogglePreviewMode:a})=>{const[c,u]=(0,t.useState)(!1),{formatMessage:d}=(0,Q.Z)(),m=d({id:"components.Wysiwyg.selectOptions.title",defaultMessage:"Add a title"}),f=(0,t.useRef)(),p=()=>{u(y=>!y)};return e||s?t.createElement(A.x,{padding:2,background:"neutral100"},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(w.k,null,t.createElement(xe.P,{disabled:!0,id:"selectTitle",placeholder:m,size:"S","aria-label":m},t.createElement(he.W,{value:"h1"},"h1"),t.createElement(he.W,{value:"h2"},"h2"),t.createElement(he.W,{value:"h3"},"h3"),t.createElement(he.W,{value:"h4"},"h4"),t.createElement(he.W,{value:"h5"},"h5"),t.createElement(he.W,{value:"h6"},"h6")),t.createElement(Ir,null,t.createElement(Ee,{disabled:!0,id:"Bold",label:"Bold",name:"Bold",icon:t.createElement(Pr.Z,null)}),t.createElement(Ee,{disabled:!0,id:"Italic",label:"Italic",name:"Italic",icon:t.createElement(wr.Z,null)}),t.createElement(Ee,{disabled:!0,id:"Underline",label:"Underline",name:"Underline",icon:t.createElement(Fr.Z,null)})),t.createElement(Lr,{disabled:!0,id:"more",label:"More",icon:t.createElement(Sr.Z,null)})),!r&&t.createElement(ue.z,{onClick:a,variant:"tertiary",id:"preview"},d({id:"components.Wysiwyg.ToggleMode.markdown-mode",defaultMessage:"Markdown mode"})))):t.createElement(A.x,{padding:2,background:"neutral100"},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(w.k,null,t.createElement(xe.P,{id:"selectTitle",placeholder:m,size:"S",onChange:y=>i(y,o)},t.createElement(he.W,{value:"h1"},"h1"),t.createElement(he.W,{value:"h2"},"h2"),t.createElement(he.W,{value:"h3"},"h3"),t.createElement(he.W,{value:"h4"},"h4"),t.createElement(he.W,{value:"h5"},"h5"),t.createElement(he.W,{value:"h6"},"h6")),t.createElement(Ir,null,t.createElement(Ee,{onClick:()=>i("Bold",o),id:"Bold",label:"Bold",name:"Bold",icon:t.createElement(Pr.Z,null)}),t.createElement(Ee,{onClick:()=>i("Italic",o),id:"Italic",label:"Italic",name:"Italic",icon:t.createElement(wr.Z,null)}),t.createElement(Ee,{onClick:()=>i("Underline",o),id:"Underline",label:"Underline",name:"Underline",icon:t.createElement(Fr.Z,null)})),t.createElement(Lr,{ref:f,onClick:p,id:"more",label:"More",icon:t.createElement(Sr.Z,null)}),c&&t.createElement(cl.J2,{centered:!0,source:f,spacing:4,id:"popover"},t.createElement(xr.i,{onEscape:p,restoreFocus:!1},t.createElement(w.k,null,t.createElement(el,null,t.createElement(Ee,{onClick:()=>i("Strikethrough",o,p),id:"Strikethrough",label:"Strikethrough",name:"Strikethrough",icon:t.createElement(dl.Z,null)}),t.createElement(Ee,{onClick:()=>i("BulletList",o,p),id:"BulletList",label:"BulletList",name:"BulletList",icon:t.createElement(ul.Z,null)}),t.createElement(Ee,{onClick:()=>i("NumberList",o,p),id:"NumberList",label:"NumberList",name:"NumberList",icon:t.createElement(ml.Z,null)})),t.createElement(ge.o,null,t.createElement(Ee,{onClick:()=>i("Code",o,p),id:"Code",label:"Code",name:"Code",icon:t.createElement(pl.Z,null)}),t.createElement(Ee,{onClick:()=>{p(),l()},id:"Image",label:"Image",name:"Image",icon:t.createElement(gl.Z,null)}),t.createElement(_a,{onClick:()=>i("Link",o,p),id:"Link",label:"Link",name:"Link",icon:t.createElement(fl.Z,null)}),t.createElement(Ee,{onClick:()=>i("Quote",o,p),id:"Quote",label:"Quote",name:"Quote",icon:t.createElement(hl.Z,null)})))))),a&&t.createElement(ue.z,{onClick:a,variant:"tertiary",id:"preview"},d({id:"components.Wysiwyg.ToggleMode.preview-mode",defaultMessage:"Preview mode"}))))};En.defaultProps={isPreviewMode:!1,onActionClick(){},onToggleMediaLib(){},onTogglePreviewMode:void 0},En.propTypes={disabled:n().bool.isRequired,editorRef:n().shape({current:n().any}).isRequired,isExpandMode:n().bool.isRequired,isPreviewMode:n().bool,onActionClick:n().func,onToggleMediaLib:n().func,onTogglePreviewMode:n().func};const yl=En;var bl=g(19954);const Cn=({onToggleExpand:e})=>{const{formatMessage:o}=(0,Q.Z)();return t.createElement(A.x,{padding:2,background:"neutral100",hasRadius:!0},t.createElement(w.k,{justifyContent:"flex-end",alignItems:"flex-end"},t.createElement(nl,{id:"expand",onClick:e},t.createElement(G.Z,null,o({id:"components.WysiwygBottomControls.fullscreen",defaultMessage:"Expand"})),t.createElement(bl.Z,null))))};Cn.defaultProps={onToggleExpand(){}},Cn.propTypes={onToggleExpand:n().func};const El=Cn,Rn=({id:e,error:o,name:r,hint:s})=>s.length===0||o?null:t.createElement(G.Z,{as:"p",variant:"pi",id:`${e||r}-hint`,textColor:"neutral600"},s);Rn.defaultProps={id:void 0,error:void 0,hint:""},Rn.propTypes={hint:n().oneOfType([n().string,n().array]),error:n().string,id:n().string,name:n().string.isRequired};const Cl=Rn,Ar=(e,o)=>{let r;switch(e){case"Strikethrough":r=`~~${o}~~`;break;case"Bold":r=`**${o}**`;break;case"Italic":r=`_${o}_`;break;case"Underline":r=`<u>${o}</u>`;break;case"Code":r=`\`\`\`
${o}
\`\`\``;break;case"Link":r=`[${o}](link)`;break;case"Quote":r=`>${o}`;break;default:r=o}return r},Or=e=>{let o,r={start:e.length,end:0};switch(e){case"Strikethrough":o=`~~${e}~~`,r.end=2;break;case"Bold":o=`**${e}**`,r.end=2;break;case"Italic":o=`_${e}_`,r.end=1;break;case"alt":o=`[${e}]()`,r.end=3;break;case"Underline":o=`<u>${e}</u>`,r.end=4;break;case"Code":o=`\`\`\`
${e}
\`\`\``,r.end=3;break;case"Link":o=`[${e}](link)`,r.end=7;break;case"Quote":o=`>${e}`,r.end=0;break;default:o=""}return{editedText:o,selection:r}},$r=e=>{let o;switch(e){case"BulletList":o="- ";break;case"NumberList":o="1. ";break;case"h1":o="# ";break;case"h2":o="## ";break;case"h3":o="### ";break;case"h4":o="#### ";break;case"h5":o="##### ";break;case"h6":o="###### ";break;default:return""}return o},Zr=(e,o)=>{const r=e.current.getSelection();let s;if(r){const i=Ar(o,r);e.current.replaceSelection(i),e.current.focus()}else{s=Or(o),e.current.replaceSelection(s.editedText),e.current.focus();const{line:i,ch:l}=e.current.getCursor(),a=l-s.selection.end,c=l-s.selection.end-s.selection.start;e.current.setSelection({line:i,ch:c},{line:i,ch:a})}},Rl=(e,o)=>{const r=e.current.getDoc(),s=o==="BulletList"?"- ":"1. ";if(r.somethingSelected()){const i=r.listSelections();let l=null;e.current.operation(function(){i.forEach(function(a){const c=[a.head.line,a.anchor.line].sort();l==null&&(l=r.getLine(c[0]).startsWith(s));for(let u=c[0];u<=c[1];u++)if(l)r.getLine(u).startsWith(s)&&r.replaceRange("",{line:u,ch:0},{line:u,ch:s.length});else{const d=o==="BulletList"?"- ":`${u+1}. `;r.replaceRange(d,{line:u,ch:0})}})})}else{let{line:i}=r.getCursor();const l=$r(o),a=e.current.getLine(i),c=l+a;e.current.setSelection({line:i,ch:0},{line:i,ch:a.length}),e.current.replaceSelection(c)}e.current.focus()},vl=(e,o)=>{let{line:r}=e.current.getCursor();const s=$r(o),i=e.current.getLine(r),l=i.replace(/#{1,6}\s/g,"").trim(),a=s+l;e.current.setSelection({line:r,ch:0},{line:r,ch:i.length}),e.current.replaceSelection(a),setTimeout(()=>{const c=e.current.getLine(r).length;e.current.focus(),e.current.setCursor({line:r,ch:c})},0)},Tl=(e,o)=>{let{line:r,ch:s}=e.current.getCursor();o.forEach((i,l)=>{let a=e.current.getLine(r).length;e.current.setCursor({line:r,ch:a}),(l>0||l===0&&s!==0)&&(a=e.current.getLine(r).length,e.current.setCursor({line:r,ch:a}),r++,e.current.replaceSelection(`
`)),i.mime.includes("image")?e.current.replaceSelection(`![${i.alt}](${i.url})`):e.current.replaceSelection(`[${i.alt}](${i.url})`)}),setTimeout(()=>e.current.focus(),0)},Ml=(e,o,r,s,i)=>{const l=Ar(o,i),a=e.current.getRange({line:r+1,ch:0},{line:1/0,ch:1/0});if(e.current.replaceRange("",{line:r+1,ch:0},{line:1/0,ch:1/0}),e.current.replaceSelection(""),e.current.setCursor({line:r,ch:s}),e.current.replaceSelection(`
`),e.current.replaceSelection(l),o==="Code"){let{line:c}=e.current.getCursor();e.current.setCursor({line:c-1,ch:i.length})}e.current.replaceRange(a,{line:r+4,ch:0},{line:1/0,ch:1/0}),e.current.focus()},Dl=(e,o,r,s)=>{const i=Or(o),l=e.current.getRange({line:r+1,ch:0},{line:1/0,ch:1/0});if(e.current.replaceRange("",{line:r+1,ch:0},{line:1/0,ch:1/0}),e.current.setCursor({line:r,ch:s}),e.current.replaceSelection(`
`),e.current.replaceSelection(i.editedText),o==="Code")r+=2,e.current.setSelection({line:r,ch:0},{line:r,ch:4});else{r+=1;let{ch:a}=e.current.getCursor(),c=a-i.selection.end,u=a-i.selection.end-i.selection.start;e.current.setSelection({line:r,ch:u},{line:r,ch:c})}e.current.replaceRange(l,{line:r+2,ch:0},{line:1/0,ch:1/0}),e.current.focus()},kl=(e,o)=>{const r=e.current.getSelection();let{line:s}=e.current.getCursor(),i=e.current.getLine(s).length;r?Ml(e,o,s,i,r):Dl(e,o,s,i)};var Il=g(44034),Ll=g(5240);const xl=(e,o)=>`${e}${Math.floor(o*255).toString(16).padStart(2,0)}`,Pl=(0,N.ZP)(w.k)`
  background: ${({theme:e})=>xl(e.colors.neutral800,.2)};
`,wl=(0,N.ZP)(A.x)`
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Fl=(0,N.ZP)(yn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};

    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`,vn=({children:e,isExpandMode:o,error:r,previewContent:s,onCollapse:i})=>{const{formatMessage:l}=(0,Q.Z)();return(0,h.F5)(o),o?t.createElement(Il.h,{role:"dialog","aria-modal":!1},t.createElement(xr.i,{onEscape:i},t.createElement(Pl,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:i},t.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"70%",height:"70%",onClick:a=>a.stopPropagation()},t.createElement(w.k,{height:"100%",alignItems:"flex-start"},t.createElement(wl,{flex:"1",height:"100%"},e),t.createElement(w.k,{alignItems:"start",direction:"column",flex:1,height:"100%",width:"100%"},t.createElement(w.k,{height:(0,h.Q1)(48),background:"neutral100",justifyContent:"flex-end",shrink:0,width:"100%"},t.createElement(Fl,{onClick:i},t.createElement(G.Z,null,l({id:"components.Wysiwyg.collapse",defaultMessage:"Collapse"})),t.createElement(Ll.Z,null))),t.createElement(A.x,{position:"relative",height:"100%",width:"100%"},t.createElement(kr,{data:s})))))))):t.createElement(A.x,{borderColor:r?"danger600":"neutral200",borderStyle:"solid",borderWidth:"1px",hasRadius:!0},e)};vn.defaultProps={error:void 0,previewContent:""},vn.propTypes={children:n().node.isRequired,error:n().string,isExpandMode:n().bool.isRequired,previewContent:n().string,onCollapse:n().func.isRequired};const Sl=(0,N.ZP)(A.x)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Al=(0,N.ZP)(G.Z)`
  line-height: 0;
`,Tn=({hint:e,disabled:o,error:r,intlLabel:s,labelAction:i,name:l,onChange:a,placeholder:c,value:u,required:d})=>{const{formatMessage:m}=(0,Q.Z)(),f=(0,t.useRef)(null),p=(0,t.useRef)(null),[y,b]=(0,t.useState)(!1),[R,k]=(0,t.useState)(!1),[E,v]=(0,t.useState)(!1),{components:F}=(0,h.yX)(),S=F["media-library"],T=()=>k(B=>!B),D=()=>b(B=>!B),x=()=>{b(!1),v(B=>!B)},j=(B,K,W)=>{switch(B){case"Link":case"Strikethrough":{Zr(K,B),W();break}case"Code":case"Quote":{kl(K,B),W();break}case"Bold":case"Italic":case"Underline":{Zr(K,B);break}case"BulletList":case"NumberList":{Rl(K,B),W();break}case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":{vl(K,B);break}default:}},z=B=>{const K=B.map(W=>({alt:W.alternativeText||W.name,url:(0,h.CR)(W.url),mime:W.mime}));Tl(p,K),k(!1)},Z=c?m({id:c.id,defaultMessage:c.defaultMessage},{...c.values}):"",V=s.id?m({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):l;return t.createElement(t.Fragment,null,t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(w.k,{gap:1},t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},V,d&&t.createElement(Al,{textColor:"danger600"},"*")),i&&t.createElement(Sl,{paddingLeft:1},i)),t.createElement(vn,{isExpandMode:E,error:r,previewContent:u,onCollapse:x},t.createElement(yl,{isExpandMode:E,editorRef:p,isPreviewMode:y,onActionClick:j,onToggleMediaLib:T,onTogglePreviewMode:E?void 0:D,disabled:o}),t.createElement(ll,{disabled:o,isExpandMode:E,editorRef:p,error:r,isPreviewMode:y,name:l,onChange:a,placeholder:Z,textareaRef:f,value:u}),!E&&t.createElement(El,{onToggleExpand:x})),t.createElement(Cl,{hint:e,name:l,error:r})),r&&t.createElement(A.x,{paddingTop:1},t.createElement(G.Z,{variant:"pi",textColor:"danger600","data-strapi-field-error":!0},r)),R&&t.createElement(S,{onClose:T,onSelectAssets:z}))};Tn.defaultProps={disabled:!1,error:"",labelAction:void 0,placeholder:null,required:!1,value:"",hint:""},Tn.propTypes={hint:n().oneOfType([n().string,n().array]),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,value:n().string};const Ol=Tn;var Mn=g(16364),$l=g(86783),ut=g(51277),Zl=g(86647);const qr=(e,o)=>{const[r,s]=(0,t.useState)(e);return(0,t.useEffect)(()=>{const i=setTimeout(()=>{s(e)},o);return()=>{clearTimeout(i)}},[e,o]),r},ql=/^[A-Za-z0-9-_.~]*$/;var Nl=g(25752);const jl=(0,N.ZP)(Nl.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Nr=(0,N.ZP)(w.k)`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;

    path {
      fill: ${({theme:e,available:o})=>o?e.colors.success600:e.colors.danger600};
    }
  }
`,Bl=N.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Wl=(0,N.ZP)(w.k)`
  animation: ${Bl} 2s infinite linear;
`,Dn=({attribute:e,contentTypeUID:o,hint:r,disabled:s,error:i,intlLabel:l,labelAction:a,name:c,onChange:u,value:d,placeholder:m,required:f})=>{const{modifiedData:p,initialData:y,layout:b}=(0,h.Wq)(),[R,k]=(0,t.useState)(!1),[E,v]=(0,t.useState)(null),F=qr(d,300),S=(0,t.useRef)(),T=(0,h.lm)(),{formatAPIError:D}=(0,h.So)(),x=y[c],{formatMessage:j}=(0,Q.Z)(),z=b?.options?.timestamps??0,Z=!y[z],V=qr(p[e.targetField],300),[B,K]=(0,t.useState)(!1),[W,X]=(0,t.useState)(null),{post:q}=(0,h.kY)(),ee=l.id?j({id:l.id,defaultMessage:l.defaultMessage},{...l.values}):c,M=m?j({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"";S.current=async(O=!1)=>{k(!0);try{const{data:{data:U}}=await q(ce("uid/generate"),{contentTypeUID:o,field:c,data:p});u({target:{name:c,value:U,type:"text"}},O),k(!1)}catch(U){k(!1),T({type:"warning",message:D(U)})}};const L=async()=>{if(d){k(!0);try{const{data:O}=await q(ce("uid/check-availability"),{contentTypeUID:o,field:c,value:d?d.trim():""});k(!1),v(O)}catch(O){k(!1),T({type:"warning",message:D(O)})}}};(0,t.useEffect)(()=>{!d&&e.required&&S.current(!0)},[e.required,S,d]),(0,t.useEffect)(()=>{F?.trim().match(ql)&&F!==x&&L(),F||v(null)},[x,F]),(0,t.useEffect)(()=>{let O;return E?.isAvailable&&(O=setTimeout(()=>{v(null)},4e3)),()=>{O&&clearTimeout(O)}},[E]),(0,t.useEffect)(()=>{!B&&Z&&V&&p[e.targetField]&&!d&&S.current(!0)},[V,B,Z]);const Y=()=>{X(j({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}))},H=()=>{X(null)},$=O=>{O.target.value&&Z&&K(!0),u(O)};return t.createElement(Mn.o,{disabled:s,error:i,endAction:t.createElement(w.k,{position:"relative",gap:1},E&&!W&&t.createElement(Nr,{alignItems:"center",gap:1,justifyContent:"flex-end",available:!!E?.isAvailable,"data-not-here-outer":!0,position:"absolute",pointerEvents:"none",right:6,width:"100px"},E?.isAvailable?t.createElement($l.Z,null):t.createElement(ut.Z,null),t.createElement(G.Z,{textColor:E.isAvailable?"success600":"danger600",variant:"pi"},j(E.isAvailable?{id:"content-manager.components.uid.available",defaultMessage:"Available"}:{id:"content-manager.components.uid.unavailable",defaultMessage:"Unavailable"}))),!s&&t.createElement(t.Fragment,null,W&&t.createElement(Nr,{alignItems:"center",justifyContent:"flex-end",gap:1},t.createElement(G.Z,{textColor:"primary600",variant:"pi"},W)),t.createElement(jl,{onClick:()=>S.current(),label:j({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}),onMouseEnter:Y,onMouseLeave:H},R?t.createElement(Wl,{"data-testid":"loading-wrapper"},t.createElement(Zl.Z,null)):t.createElement(er.Z,null)))),hint:r,label:ee,labelAction:a,name:c,onChange:$,placeholder:M,value:d||"",required:f})};Dn.propTypes={attribute:n().shape({targetField:n().string,required:n().bool}).isRequired,contentTypeUID:n().string.isRequired,disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,value:n().string,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,hint:n().oneOfType([n().string,n().array])},Dn.defaultProps={disabled:!1,error:void 0,labelAction:void 0,placeholder:void 0,value:"",required:!1,hint:""};const zl=Dn;var Vl=g(78718),kn=g.n(Vl),Ue=g(88767);function Ul(e,o){return r=>{const s=o(r);return t.createElement(e,{...r,...s})}}const Hl=Ul;function Gl({componentUid:e,isUserAllowedToEditField:o,isUserAllowedToReadField:r,name:s,queryInfos:i}){const{isCreatingEntry:l,createActionAllowedFields:a,readActionAllowedFields:c,updateActionAllowedFields:u,slug:d,modifiedData:m}=(0,h.Wq)(),f=(0,t.useMemo)(()=>o===!0?!0:(l?a:u).includes(s),[l,a,s,o,u]),p=(0,t.useMemo)(()=>r?!0:(l?[]:c).includes(s),[l,r,s,c]),y=s.split(".");let b;e&&(b=I()(m,y.slice(0,-1))?.id);const R=(0,t.useMemo)(()=>l?null:e?b?ce(`relations/${e}/${b}/${y.at(-1)}`):null:ce(`relations/${d}/${m.id}/${s.split(".").at(-1)}`),[l,e,d,m.id,s,b,y]),k=(0,t.useMemo)(()=>ce(e?`relations/${e}/${s.split(".").at(-1)}`:`relations/${d}/${s.split(".").at(-1)}`),[e,d,s]);return{componentId:b,isComponentRelation:Boolean(e),queryInfos:{...i,endpoints:{search:k,relation:R}},isCreatingEntry:l,isFieldAllowed:f,isFieldReadable:p}}const Ql=Gl;function Kl(e,o){return`${ce(`collectionType/${e}/${o??""}`)}`}const In=(e,{shouldAddLink:o,mainFieldName:r,targetModel:s})=>{const i={...e};return o&&(i.href=Kl(s,i.id)),i.publicationState=!1,i?.publishedAt!==void 0&&(i.publicationState=i.publishedAt?ze.PUBLISHED:ze.DRAFT),i.mainField=i[r],i},Yl=(e,{shouldAddLink:o=!1,mainFieldName:r,targetModel:s}={})=>[...e].map(i=>In(i,{shouldAddLink:o,mainFieldName:r,targetModel:s})),Xl=(e,{mainFieldName:o})=>{const{data:r}=e,{pages:s=[]}=r??{};return{...e,data:s.map(i=>i?.results.map(l=>In(l,{mainFieldName:o}))).filter(Boolean).flat()}},Jl=(e=[],o=[])=>{const r=e.reduce((i,l)=>o.find(a=>a.id===l.id)?i:[...i,l.id],[]),s=o.reduce((i,l)=>e.find(a=>a.id===l.id)?i:[...i,l.id],[]);return[r,s]},_l=e=>{const o=t.useRef(e);return t.useEffect(()=>{o.current=e}),t.useMemo(()=>(...r)=>o.current?.(...r),[])},ec=(e,{relation:o,search:r})=>{const[s,i]=(0,t.useState)({}),[l,a]=(0,t.useState)(0),{get:c}=(0,h.kY)(),u=async({pageParam:T=1})=>{try{const{data:D}=await c(o?.endpoint,{params:{...o.pageParams??{},page:T}});return a(T),D}catch{return null}},d=async({pageParam:T=1})=>{try{const{data:D}=await c(r.endpoint,{params:{...r.pageParams??{},...s,page:T}});return D}catch{return null}},{onLoad:m,normalizeArguments:f={}}=o,p=(0,Ue.useInfiniteQuery)(["relation",...e],u,{cacheTime:0,enabled:o.enabled,getNextPageParam(T){const D=!T?.pagination;if(!(!T||D||T?.pagination.page>=T?.pagination.pageCount))return T.pagination.page+1},select:T=>({...T,pages:T.pages.map(D=>{if(!D)return D;const{data:x,results:j,pagination:z}=D,Z=!!x;let V=[];return Z?V=[x]:j&&(V=[...j].reverse()),{pagination:z,results:V}})})}),{pageGoal:y}=o,{status:b,data:R,fetchNextPage:k,hasNextPage:E}=p;(0,t.useEffect)(()=>{y>l&&E&&b==="success"&&k({pageParam:l+1})},[y,l,k,E,b]);const v=_l(m);(0,t.useEffect)(()=>{if(b==="success"&&R&&R.pages?.at(-1)?.results&&v){const T=Yl(R.pages.at(-1).results,f);v(T)}},[b,v,R]);const F=(0,Ue.useInfiniteQuery)(["relation",...e,"search",JSON.stringify(s)],d,{enabled:Object.keys(s).length>0,getNextPageParam(T){if(!(!T?.pagination||T.pagination.page>=T.pagination.pageCount))return T.pagination.page+1}});return{relations:p,search:F,searchFor:(T,D={})=>{i({...D,_q:T})}}},jr=(e,o)=>r=>{const s=r.split(".");return s.reduce((i,l,a)=>{const c=I()(e,i),u=I()(o,[...s.slice(0,a),l,"__temp_key__"]);if(Array.isArray(c)&&typeof u=="number"){const d=c.findIndex(m=>m.__temp_key__===u);return i.push(d.toString()),i}return i.push(l),i},[])},Ln=({error:e,componentId:o,isComponentRelation:r,editable:s,description:i,intlLabel:l,isCreatingEntry:a,isFieldAllowed:c,isFieldReadable:u,labelAction:d,mainField:m,name:f,queryInfos:{endpoints:p,defaultParams:y,shouldDisplayRelationLink:b},placeholder:R,required:k,relationType:E,size:v,targetModel:F})=>{const[S,T]=(0,t.useState)(""),{formatMessage:D}=(0,Q.Z)(),{slug:x,initialData:j,modifiedData:z,relationConnect:Z,relationDisconnect:V,relationLoad:B,relationReorder:K}=(0,h.Wq)(),W=f.split("."),X=jr(j,z)(f),q=I()(z,f,[]),ee=Math.ceil(I()(j,f,[]).length/en),{relations:M,search:L,searchFor:Y}=ec([x,X.join("."),z.id,y],{relation:{enabled:!!p.relation,endpoint:p.relation,pageGoal:ee,pageParams:{...y,pageSize:en},onLoad(te){B({target:{initialDataPath:["initialData",...X],modifiedDataPath:["modifiedData",...W],value:te}})},normalizeArguments:{mainFieldName:m.name,shouldAddLink:b,targetModel:F}},search:{endpoint:p.search,pageParams:{...y,entityId:a?void 0:r?o:j.id,pageSize:ki}}}),H=(0,t.useMemo)(()=>E.toLowerCase().includes("morph"),[E]),$=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(E),O=(0,t.useMemo)(()=>H?!0:a?!s:!c&&u||!s,[H,a,s,c,u]),U=te=>{const pe=In(te,{mainFieldName:m.name,shouldAddLink:b,targetModel:F});Z({name:f,value:pe,toOneRelation:$})},se=te=>{V({name:f,id:te.id})},P=()=>{M.fetchNextPage()},oe=(te="")=>{const[pe,Ie]=Jl(q,I()(j,f));Y(te,{idsToInclude:Ie,idsToOmit:pe})},de=()=>{L.fetchNextPage()},ye=te=>`${te+1} of ${q.length}`,it=(te,pe)=>{const Ie=q[te];T(D({id:C("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:Ie.mainField??Ie.id,position:ye(pe)})),K({name:f,newIndex:pe,oldIndex:te})},Ct=te=>{const pe=q[te];T(D({id:C("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:pe.mainField??pe.id,position:ye(te)}))},Rt=te=>{const pe=q[te];T(D({id:C("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:pe.mainField??pe.id,position:ye(te)}))},vt=te=>{const pe=q[te];T(D({id:C("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:pe.mainField??pe.id}))};if(!c&&a||!a&&!c&&!u)return t.createElement(h.X0,{name:f,intlLabel:l,labelAction:d});const ve=q.length,ke=(I()(j,X)??[]).length,Tt=M.data?.pages[0]?.pagination?.total??0,Ne=!M.data&&ve===ke?ve:ve-ke+Tt;return t.createElement(na,{error:e,canReorder:!$,description:i,disabled:O,iconButtonAriaLabel:D({id:C("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),id:f,label:`${D({id:l.id,defaultMessage:l.defaultMessage})} ${Ne>0?`(${Ne})`:""}`,labelAction:d,labelLoadMore:a?null:D({id:C("relation.loadMore"),defaultMessage:"Load More"}),labelDisconnectRelation:D({id:C("relation.disconnect"),defaultMessage:"Remove"}),listAriaDescription:D({id:C("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"}),listHeight:320,liveText:S,loadingMessage:D({id:C("relation.isLoading"),defaultMessage:"Relations are loading"}),name:f,noRelationsMessage:D({id:C("relation.notAvailable"),defaultMessage:"No relations available"}),numberOfRelationsToDisplay:en,onDropItem:Rt,onGrabItem:Ct,onCancel:vt,onRelationConnect:U,onRelationDisconnect:se,onRelationLoadMore:P,onRelationReorder:it,onSearch:te=>oe(te),onSearchNextPage:()=>de(),placeholder:D(R||{id:C("relation.add"),defaultMessage:"Add relation"}),publicationStateTranslations:{[ze.DRAFT]:D({id:C("relation.publicationState.draft"),defaultMessage:"Draft"}),[ze.PUBLISHED]:D({id:C("relation.publicationState.published"),defaultMessage:"Published"})},relations:kn()({...M,data:q},"data","hasNextPage","isFetchingNextPage","isLoading","isSuccess"),required:k,searchResults:Xl(L,{mainFieldName:m.name}),size:v})};Ln.defaultProps={componentId:void 0,editable:!0,error:void 0,description:"",labelAction:null,isComponentRelation:!1,isFieldAllowed:!0,placeholder:null,required:!1},Ln.propTypes={componentId:n().number,editable:n().bool,error:n().string,description:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,isCreatingEntry:n().bool.isRequired,isComponentRelation:n().bool,isFieldAllowed:n().bool,isFieldReadable:n().bool.isRequired,mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired}).isRequired,name:n().string.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,relationType:n().string.isRequired,size:n().number.isRequired,targetModel:n().string.isRequired,queryInfos:n().shape({defaultParams:n().shape({locale:n().string}),endpoints:n().shape({relation:n().string,search:n().string.isRequired}).isRequired,shouldDisplayRelationLink:n().bool.isRequired}).isRequired};const tc=(0,t.memo)(Ln),nc=Hl(tc,Ql);function oc(e,o){return r=>{const s=o(r.keys);return t.createElement(e,{...r,...s})}}const rc=oc,sc=(e,o=!1)=>[{metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},disabled:o,hidden:o},key:"__enum_option_null",value:""},...e.map(r=>({metadatas:{intlLabel:{id:r,defaultMessage:r},hidden:!1,disabled:!1},key:r,value:r}))],ic=(e="")=>{switch(Wo()(e)){case"boolean":return"bool";case"biginteger":return"text";case"decimal":case"float":case"integer":return"number";case"date":case"datetime":case"time":return e;case"email":return"email";case"enumeration":return"select";case"password":return"password";case"string":return"text";case"text":return"textarea";case"media":case"file":case"files":return"media";case"json":return"json";case"wysiwyg":case"WYSIWYG":case"richtext":return"wysiwyg";case"uid":return"uid";default:return e||"text"}},ac=e=>{let o;return e==="float"||e==="decimal"?o=.01:o=1,o};function lc(e){const{createActionAllowedFields:o,formErrors:r,isCreatingEntry:s,modifiedData:i,onChange:l,readActionAllowedFields:a,shouldNotRunValidations:c,updateActionAllowedFields:u}=(0,h.Wq)(),d=(0,t.useMemo)(()=>s?o:u,[s,o,u]),m=(0,t.useMemo)(()=>s?[]:a,[s,a]),f=I()(i,e,null);return{allowedFields:d,formErrors:r,isCreatingEntry:s,onChange:l,readableFields:m,shouldNotRunValidations:c,value:f}}const cc=lc,Br=["type","model","via","collection","default","plugin","enum","regex","pluginOptions"];function xn({allowedFields:e,componentUid:o,fieldSchema:r,formErrors:s,isCreatingEntry:i,keys:l,labelAction:a,metadatas:c,onChange:u,readableFields:d,shouldNotRunValidations:m,queryInfos:f,value:p,size:y,customFieldInputs:b}){const{fields:R}=(0,h.yX)(),{formatMessage:k}=(0,Q.Z)(),{contentType:E}=Oe(),v=(0,t.useMemo)(()=>!I()(c,"editable",!0),[c]),{type:F,customField:S}=r,T=I()(s,[l],null),D=(0,t.useMemo)(()=>Qo(l),[l]),x=(0,t.useMemo)(()=>{const U=Uo()(r,m?[...Br,"required","minLength"]:Br),se=r.regex||null;if(se){const P=new RegExp(se);P&&(U.regex=P)}return U},[r,m]),j=(0,t.useMemo)(()=>I()(x,["required"],!1),[x]),z=(0,t.useMemo)(()=>{const U=I()(E,["attributes"],{});return I()(U,[D[0],"type"],null)==="dynamiczone"},[E,D]),Z=(0,t.useMemo)(()=>ic(F),[F]),V=(0,t.useMemo)(()=>F==="media"&&!p?[]:p,[F,p]),B=(0,t.useMemo)(()=>ac(F),[F]),K=(0,t.useMemo)(()=>{const U=D.join(".");if(e.includes(U))return!0;if(z)return e.includes(D[0]);if(D.length>1){const P=dt()(D,D.length-1).join(".");return e.includes(P)}return!1},[e,D,z]),W=(0,t.useMemo)(()=>{const U=D.join(".");if(d.includes(U))return!0;if(z)return d.includes(D[0]);if(D.length>1){const P=dt()(D,D.length-1).join(".");return d.includes(P)}return!1},[d,D,z]),X=(0,t.useMemo)(()=>W||K,[K,W]),q=(0,t.useMemo)(()=>i?v:W&&!K?!0:v,[v,i,K,W]),ee=(0,t.useMemo)(()=>sc(r.enum||[],j),[r,j]),{label:M,description:L,placeholder:Y,visible:H}=c,$=(0,t.useMemo)(()=>{if(!c.step||Z!=="datetime"&&Z!=="time")return B;if(!V)return c.step;let U;return Z==="datetime"?U=parseInt(V.substr(14,2),10):Z==="time"&&(U=parseInt(V.slice(-2),10)),U%c.step===0?c.step:B},[Z,V,c.step,B]);if(H===!1)return null;if(!X)return t.createElement(h.X0,{description:L?{id:L,defaultMessage:L}:null,intlLabel:{id:M,defaultMessage:M},labelAction:a,error:T&&k(T),name:l,required:j});if(F==="relation")return t.createElement(nc,{...c,...r,componentUid:o,description:c.description?k({id:c.description,defaultMessage:c.description}):void 0,intlLabel:{id:c.label,defaultMessage:c.label},labelAction:a,isUserAllowedToEditField:K,isUserAllowedToReadField:W,name:l,placeholder:c.placeholder?{id:c.placeholder,defaultMessage:c.placeholder}:null,queryInfos:f,size:y,value:p,error:T&&k(T)});const O={uid:zl,media:R.media,wysiwyg:Ol,...R,...b};return t.createElement(h.jm,{attribute:r,autoComplete:"new-password",intlLabel:{id:M,defaultMessage:M},isNullable:Z==="bool"&&[null,void 0].includes(r.default),description:L?{id:L,defaultMessage:L}:null,disabled:q,error:T,labelAction:a,contentTypeUID:E.uid,customInputs:O,multiple:r.multiple||!1,name:l,onChange:u,options:ee,placeholder:Y?{id:Y,defaultMessage:Y}:null,required:r.required||!1,step:$,type:S||Z,value:V,withDefaultValue:!1})}xn.defaultProps={componentUid:void 0,formErrors:{},labelAction:void 0,size:void 0,value:null,queryInfos:{},customFieldInputs:{}},xn.propTypes={allowedFields:n().array.isRequired,componentUid:n().string,fieldSchema:n().object.isRequired,formErrors:n().object,keys:n().string.isRequired,isCreatingEntry:n().bool.isRequired,labelAction:n().element,metadatas:n().object.isRequired,onChange:n().func.isRequired,readableFields:n().array.isRequired,size:n().number,shouldNotRunValidations:n().bool.isRequired,value:n().any,queryInfos:n().shape({containsKey:n().string,defaultParams:n().object,endPoint:n().string}),customFieldInputs:n().object};const dc=(0,t.memo)(xn,$e()),Pn=rc(dc,cc),mt=new Map,wn=(e=[])=>{const[o,r]=(0,t.useState)(Object.fromEntries(mt)),s=e.filter(u=>!mt.get(u)),[i,l]=(0,t.useState)(()=>!!s.length),a=(0,h.mZ)();(0,t.useEffect)(()=>{const u=m=>{r(m),l(!1)},d=async(m,f)=>{const p=await Promise.all(f);m.forEach((y,b)=>{mt.set(y,p[b].default)}),u(Object.fromEntries(mt))};if(s.length>0){l(!0);const m=s.map(f=>a.get(f).components.Input());m.length>0&&d(s,m)}},[s,a]);const c=(0,t.useCallback)(()=>{mt.clear(),r({})},[]);return{isLazyLoading:i,lazyComponentStore:o,cleanup:c}},Fn=({componentUid:e,isFromDynamicZone:o,isNested:r,name:s})=>{const{getComponentLayout:i}=Oe(),a=(0,t.useMemo)(()=>i(e),[e,i]).layouts.edit,{lazyComponentStore:c}=wn();return t.createElement(A.x,{background:o?"":"neutral100",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,hasRadius:r,borderColor:r?"neutral200":""},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},a.map((u,d)=>t.createElement(De.r,{gap:4,key:d},u.map(({name:m,size:f,metadatas:p,fieldSchema:y,queryInfos:b})=>{const R=y.type==="component",k=`${s}.${m}`;if(R){const E=y.component;return t.createElement(fe.P,{col:f,s:12,xs:12,key:m},t.createElement(Ot,{componentUid:E,intlLabel:{id:p.label,defaultMessage:p.label},isNested:!0,isRepeatable:y.repeatable,max:y.max,min:y.min,name:k,required:y.required||!1}))}return t.createElement(fe.P,{col:f,key:m,s:12,xs:12},t.createElement(Pn,{componentUid:e,keys:k,fieldSchema:y,metadatas:p,queryInfos:b,size:f,customFieldInputs:c}))})))))};Fn.defaultProps={isFromDynamicZone:!1,isNested:!1},Fn.propTypes={componentUid:n().string.isRequired,isFromDynamicZone:n().bool,isNested:n().bool,name:n().string.isRequired};const uc=Fn;var pt=g(96315),mc=g(79833),Wr=g.n(mc);const pc=N.ZP.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`,gc=()=>t.createElement(pc,{padding:6,background:"primary100"}),fc=(0,N.ZP)(ge.h)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:e,expanded:o})=>o?e.colors.primary600:e.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }
`,hc=(0,N.ZP)(w.k)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({theme:e,expanded:o})=>o?e.colors.primary600:void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,Sn=({componentFieldName:e,componentUid:o,fields:r,index:s,isOpen:i,isReadOnly:l,mainField:a,moveComponentField:c,onClickToggle:u,toggleCollapses:d,onGrabItem:m,onDropItem:f,onCancel:p})=>{const{modifiedData:y,removeRepeatableField:b,triggerFormValidation:R}=(0,h.Wq)(),k=Wr()(I()(y,[...e.split("."),a],"")),E=(0,t.useRef)(null),{formatMessage:v}=(0,Q.Z)(),[F]=e.split("."),[{handlerId:S,isDragging:T,handleKeyDown:D},x,j,z,Z]=tn(!l,{type:`${Ce.COMPONENT}_${F}`,index:s,item:{displayedValue:k},onMoveItem:c,onStart(){d()},onEnd(){R()},onGrabItem:m,onDropItem:f,onCancel:p});(0,t.useEffect)(()=>{Z((0,at.rX)(),{captureDraggingState:!1})},[Z,s]);const V=kt(E,z),B=kt(x,j),{lazyComponentStore:K}=wn();return t.createElement(A.x,{ref:B},T?t.createElement(gc,null):t.createElement(cn.U,{expanded:i,onToggle:u,id:e,size:"S"},t.createElement(dn.B,{action:l?null:t.createElement(hc,{gap:0,expanded:i},t.createElement(fc,{expanded:i,noBorder:!0,onClick:()=>{b(e),d()},label:v({id:C("containers.Edit.delete"),defaultMessage:"Delete"}),icon:t.createElement(we.Z,null)}),t.createElement(ge.h,{className:"drag-handle",ref:V,forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:W=>W.stopPropagation(),"data-handler-id":S,label:v({id:C("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:D},t.createElement(Ae.Z,null))),title:k,togglePosition:"left"}),t.createElement(un.v,null,t.createElement(w.k,{direction:"column",alignItems:"stretch",background:"neutral100",padding:6,gap:6},r.map((W,X)=>t.createElement(De.r,{gap:4,key:X},W.map(({name:q,fieldSchema:ee,metadatas:M,queryInfos:L,size:Y})=>{const H=ee.type==="component",$=`${e}.${q}`;if(H){const O=ee.component;return t.createElement(fe.P,{col:Y,s:12,xs:12,key:q},t.createElement(Ot,{componentUid:O,intlLabel:{id:M.label,defaultMessage:M.label},isRepeatable:ee.repeatable,isNested:!0,name:$,max:ee.max,min:ee.min,required:ee.required}))}return t.createElement(fe.P,{key:$,col:Y,s:12,xs:12},t.createElement(Pn,{componentUid:o,fieldSchema:ee,keys:$,metadatas:M,queryInfos:L,size:Y,customFieldInputs:K}))})))))))};Sn.defaultProps={componentUid:void 0,fields:[],isReadOnly:!1,isOpen:!1,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0,toggleCollapses(){}},Sn.propTypes={componentFieldName:n().string.isRequired,componentUid:n().string,fields:n().array,index:n().number.isRequired,isOpen:n().bool,isReadOnly:n().bool,mainField:n().string.isRequired,moveComponentField:n().func.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onClickToggle:n().func.isRequired,toggleCollapses:n().func};const yc=(0,t.memo)(Sn);var zr=g(17373);const bc=(0,N.ZP)(A.x)`
  overflow: hidden;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
`,Ec=(0,N.ZP)(A.x)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({theme:e})=>e.colors.primary600};
  }
`,An=({children:e,error:o})=>{const{formatMessage:r}=(0,Q.Z)();return t.createElement(zr.k,{attributeName:"data-strapi-accordion-toggle"},e,o&&t.createElement(A.x,{paddingTop:1},t.createElement(G.Z,{variant:"pi",textColor:"danger600"},r({id:o.id,defaultMessage:o.defaultMessage},{...o.values}))))};An.defaultProps={error:void 0},An.propTypes={children:n().node.isRequired,error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object})};function Cc(e,o={}){return Object.keys(o).filter(r=>r.startsWith(e)).map(r=>r.split(".").slice(0,e.split(".").length+1).join("."))}const Rc=(0,N.ZP)(_o.A)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,On=({componentUid:e,componentValue:o,componentValueLength:r,isReadOnly:s,max:i,min:l,name:a})=>{const{addRepeatableComponentToField:c,formErrors:u,moveComponentField:d}=(0,h.Wq)(),m=(0,h.lm)(),{formatMessage:f}=(0,Q.Z)(),[p,y]=(0,t.useState)(""),[b,R]=(0,t.useState)(""),{getComponentLayout:k,components:E}=Oe(),v=(0,t.useMemo)(()=>k(e),[e,k]),F=(0,t.useMemo)(()=>_t(o||[])+1,[o]),S=Cc(a,u),T=l-r,D=I()(u,a,{id:""}).id.includes("min"),x=()=>{y("")},j=()=>{s||(r<i?(c(a,v,E,D),y(F)):r>=i&&m({type:"info",message:{id:C("components.notification.info.maximum-requirement")}}))},z=(M,L)=>{R(f({id:C("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${a}.${L}`,position:B(M)})),d({name:a,newIndex:M,currentIndex:L})},Z=I()(v,["settings","mainField"],"id"),V=M=>()=>{y(p===M?"":M)},B=M=>`${M+1} of ${r}`,K=M=>{R(f({id:C("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${a}.${M}`}))},W=M=>{R(f({id:C("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${a}.${M}`,position:B(M)}))},X=M=>{R(f({id:C("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${a}.${M}`,position:B(M)}))};let q=u[a];if(D?q={id:C("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",values:{number:T}}:S.some(M=>M.split(".").length>1)&&!D&&(q={id:C("components.RepeatableComponent.error-message"),defaultMessage:"The component(s) contain error(s)"}),r===0)return t.createElement(Tr,{error:q,isReadOnly:s,onClick:j});const ee=`${a}-item-instructions`;return t.createElement(A.x,{hasRadius:!0},t.createElement(Xe.T,{id:ee},f({id:C("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),t.createElement(Xe.T,{"aria-live":"assertive"},b),t.createElement(An,{error:q,ariaDescribedBy:ee},t.createElement(Ec,{"aria-describedby":ee},o.map(({__temp_key__:M},L)=>t.createElement(yc,{componentFieldName:`${a}.${L}`,componentUid:e,fields:v.layouts.edit,key:M,index:L,isOpen:p===M,isReadOnly:s,mainField:Z,moveComponentField:z,onClickToggle:V(M),toggleCollapses:x,onCancel:K,onDropItem:X,onGrabItem:W}))),t.createElement(bc,null,t.createElement(w.k,{justifyContent:"center",height:"48px",background:"neutral0"},t.createElement(Rc,{disabled:s,onClick:j,startIcon:t.createElement(pt.Z,null)},f({id:C("containers.EditView.add.new-entry"),defaultMessage:"Add an entry"}))))))};On.defaultProps={componentValue:null,componentValueLength:0,isReadOnly:!1,max:1/0,min:0},On.propTypes={componentUid:n().string.isRequired,componentValue:n().oneOfType([n().array,n().object]),componentValueLength:n().number,isReadOnly:n().bool,max:n().number,min:n().number,name:n().string.isRequired};const vc=(0,t.memo)(On),$n=({addNonRepeatableComponentToField:e,componentUid:o,intlLabel:r,isCreatingEntry:s,isFromDynamicZone:i,isRepeatable:l,isNested:a,labelAction:c,max:u,min:d,name:m,hasChildrenAllowedFields:f,hasChildrenReadableFields:p,isReadOnly:y,componentValue:b,removeComponentFromField:R,required:k})=>{const{formatMessage:E}=(0,Q.Z)(),v=ba()(b),F=b!==null||i,S=!l&&F&&!i&&f,{getComponentLayout:T,components:D}=Oe(),x=(0,t.useMemo)(()=>T(o),[o,T]);if(!f&&s)return t.createElement(h.X0,{labelAction:c,intlLabel:r,name:m});if(!f&&!s&&!p)return t.createElement(h.X0,{labelAction:c,intlLabel:r,name:m});const j=()=>{e(m,x,D)};return t.createElement(A.x,null,t.createElement(w.k,{justifyContent:"space-between"},r&&t.createElement(Da,{intlLabel:r,labelAction:c,name:m,numberOfEntries:v,showNumberOfEntries:l,required:k}),S&&t.createElement(ge.h,{label:E({id:C("components.reset-entry"),defaultMessage:"Reset Entry"}),icon:t.createElement(we.Z,null),noBorder:!0,onClick:()=>{R(m,o)}})),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},!l&&!F&&t.createElement(Tr,{isReadOnly:y,onClick:j}),!l&&F&&t.createElement(uc,{componentUid:o,isFromDynamicZone:i,isNested:a,name:m}),l&&t.createElement(vc,{componentValue:b,componentValueLength:v,componentUid:o,isReadOnly:y,max:u,min:d,name:m})))};$n.defaultProps={componentValue:null,hasChildrenAllowedFields:!1,hasChildrenReadableFields:!1,intlLabel:void 0,isFromDynamicZone:!1,isReadOnly:!1,isRepeatable:!1,isNested:!1,labelAction:void 0,max:1/0,min:-1/0,required:!1},$n.propTypes={addNonRepeatableComponentToField:n().func.isRequired,componentUid:n().string.isRequired,componentValue:n().oneOfType([n().object,n().array]),hasChildrenAllowedFields:n().bool,hasChildrenReadableFields:n().bool,isCreatingEntry:n().bool.isRequired,isFromDynamicZone:n().bool,isReadOnly:n().bool,isRepeatable:n().bool,isNested:n().bool,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),labelAction:n().element,max:n().number,min:n().number,name:n().string.isRequired,removeComponentFromField:n().func.isRequired,required:n().bool};const Tc=(0,t.memo)($n,$e()),Ot=Ca(Tc,Ta),Mc=(0,N.ZP)(w.k)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`,Dc=(0,N.ZP)(ge.h)`
  background-color: transparent;

  svg path {
    fill: ${({theme:e,expanded:o})=>o?e.colors.primary600:e.colors.neutral600};
  }
`,kc=(0,N.ZP)(A.x)`
  > div:first-child {
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  }
`,Ic=(0,N.ZP)(A.x)`
  border-radius: 0 0 ${({theme:e})=>e.spaces[1]} ${({theme:e})=>e.spaces[1]};
`,Lc=(0,N.ZP)(A.x)`
  width: ${({theme:e})=>e.spaces[2]};
  height: ${({theme:e})=>e.spaces[4]};
`,xc=N.ZP.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`,Pc=(0,N.ZP)(A.x)`
  list-style: none;
  padding: 0;
  margin: 0;
`,Zn=({componentUid:e,formErrors:o,index:r,isFieldAllowed:s,name:i,onRemoveComponentClick:l,onMoveComponent:a,onGrabItem:c,onDropItem:u,onCancel:d})=>{const[m,f]=(0,t.useState)(!0),{formatMessage:p}=(0,Q.Z)(),{getComponentLayout:y}=Oe(),{modifiedData:b}=(0,h.Wq)(),{icon:R,friendlyName:k,mainValue:E}=(0,t.useMemo)(()=>{const W=y(e),{info:{icon:X,displayName:q}}=W,ee=I()(W,["settings","mainField"],"id"),M=I()(b,[i,r,ee])??"",L=ee==="id"?"":String(M).trim(),Y=L.length>0?` - ${L}`:L;return{friendlyName:q,icon:X,mainValue:Y}},[e,y,b,i,r]),v=Object.keys(o).filter(W=>{const X=W.split(".");return`${X[0]}.${X[1]}`==`${i}.${r}`});let F;v.length>0&&(F=p({id:C("components.DynamicZone.error-message"),defaultMessage:"The component contains error(s)"}));const S=()=>{f(W=>!W)},[{handlerId:T,isDragging:D,handleKeyDown:x},j,z,Z,V]=tn(s,{type:`${Ce.DYNAMIC_ZONE}_${i}`,index:r,item:{displayedValue:`${k}${E}`,icon:R},onMoveItem:a,onGrabItem:c,onDropItem:u,onCancel:d});(0,t.useEffect)(()=>{V((0,at.rX)(),{captureDraggingState:!1})},[V,r]);const B=kt(j,z),K=s?t.createElement(Mc,{gap:0,expanded:m},t.createElement(Dc,{noBorder:!0,label:p({id:C("components.DynamicZone.delete-label"),defaultMessage:"Delete {name}"},{name:k}),onClick:l},t.createElement(we.Z,null)),t.createElement(ge.h,{forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:W=>W.stopPropagation(),"data-handler-id":T,ref:Z,label:p({id:C("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:x},t.createElement(Ae.Z,null))):null;return t.createElement(Pc,{as:"li"},t.createElement(w.k,{justifyContent:"center"},t.createElement(Lc,{background:"neutral200"})),t.createElement(kc,{ref:B,hasRadius:!0},D?t.createElement(xc,{padding:6,background:"primary100"}):t.createElement(cn.U,{expanded:m,onToggle:S,size:"S",error:F},t.createElement(dn.B,{action:K,title:`${k}${E}`,togglePosition:"left"}),t.createElement(un.v,null,t.createElement(Ic,{background:"neutral0"},t.createElement(Ot,{componentUid:e,icon:R,name:`${i}.${r}`,isFromDynamicZone:!0}))))))};Zn.defaultProps={formErrors:{},index:0,isFieldAllowed:!0,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0},Zn.propTypes={componentUid:n().string.isRequired,formErrors:n().object,index:n().number,isFieldAllowed:n().bool,name:n().string.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onMoveComponent:n().func.isRequired,onRemoveComponentClick:n().func.isRequired};const wc=Zn,qn=(0,N.ZP)(vr.Z)`
  transform: ${({$isOpen:e})=>e?"rotate(45deg)":"rotate(0deg)"};
  > circle {
    fill: ${({theme:e,$hasError:o})=>o?e.colors.danger200:e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e,$hasError:o})=>o?e.colors.danger600:e.colors.neutral600};
  }
`,Fc=(0,N.ZP)(yn.Y)`
  border-radius: 26px;
  border-color: ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-top: ${({theme:e})=>e.spaces[3]};
  padding-right: ${({theme:e})=>e.spaces[4]};
  padding-bottom: ${({theme:e})=>e.spaces[3]};
  padding-left: ${({theme:e})=>e.spaces[4]};

  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};
    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${qn} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
  &:active {
    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    ${qn} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,Sc=(0,N.ZP)(A.x)`
  height: 100%;
`,Nn=({hasError:e,hasMaxError:o,hasMinError:r,isDisabled:s,isOpen:i,label:l,missingComponentNumber:a,name:c,onClick:u})=>{const{formatMessage:d}=(0,Q.Z)(),m=d({id:C("components.DynamicZone.add-component"),defaultMessage:"Add a component to {componentName}"},{componentName:l||c}),f=d({id:"app.utils.close-label",defaultMessage:"Close"});let p=i?f:m;return o&&!i&&(p=d({id:"components.Input.error.validation.max",defaultMessage:"The value is too high."})),r&&!i&&(p=d({id:C("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"},{number:a})),t.createElement(w.k,{justifyContent:"center"},t.createElement(A.x,{style:{cursor:s?"not-allowed":"pointer"}},t.createElement(Fc,{type:"button",onClick:u,disabled:s,hasError:e},t.createElement(w.k,null,t.createElement(Sc,{"aria-hidden":!0,paddingRight:2},t.createElement(qn,{$isOpen:i,$hasError:e&&!i})),t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:e&&!i?"danger600":"neutral500"},p)))))};Nn.defaultProps={hasError:!1,hasMaxError:!1,hasMinError:!1,isDisabled:!1,isOpen:!1,label:"",missingComponentNumber:0},Nn.propTypes={label:n().string,hasError:n().bool,hasMaxError:n().bool,hasMinError:n().bool,isDisabled:n().bool,isOpen:n().bool,missingComponentNumber:n().number,name:n().string.isRequired,onClick:n().func.isRequired};const Ac=Nn,Oc=(0,N.ZP)(A.x)`
  border-radius: ${(0,h.Q1)(26)};
`,jn=({label:e,labelAction:o,name:r,numberOfComponents:s,required:i,intlDescription:l})=>{const{formatMessage:a}=(0,Q.Z)(),c=a({id:e||r,defaultMessage:e||r});return t.createElement(w.k,{justifyContent:"center"},t.createElement(A.x,null,t.createElement(Oc,{paddingTop:3,paddingBottom:3,paddingRight:4,paddingLeft:4,background:"neutral0",shadow:"filterShadow",color:"neutral500"},t.createElement(w.k,{direction:"column",justifyContent:"center"},t.createElement(w.k,{maxWidth:(0,h.Q1)(356)},t.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold",ellipsis:!0},c,"\xA0"),t.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold"},"(",s,")"),i&&t.createElement(G.Z,{textColor:"danger600"},"*"),o&&t.createElement(A.x,{paddingLeft:1},o)),l&&t.createElement(A.x,{paddingTop:1,maxWidth:(0,h.Q1)(356)},t.createElement(G.Z,{variant:"pi",textColor:"neutral600",ellipsis:!0},a(l)))))))};jn.defaultProps={intlDescription:void 0,label:"",labelAction:void 0,numberOfComponents:0,required:!1},jn.propTypes={intlDescription:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired}),label:n().string,labelAction:n().element,name:n().string.isRequired,numberOfComponents:n().number,required:n().bool};const $c=jn;var Zc=g(7739),Vr=g.n(Zc);const $t=5,Zt=8,qc=(0,N.ZP)(w.k)`
  border-radius: ${({showBackground:e})=>e?"50%":0};
  color: ${({theme:e})=>e.colors.neutral600};
  height: ${({theme:e,size:o})=>e.spaces[o==="S"?$t:Zt]};
  width: ${({theme:e,size:o})=>e.spaces[o==="S"?$t:Zt]};

  svg {
    height: ${({theme:e,size:o})=>e.spaces[o==="S"?$t-2:Zt-3]};
    width: ${({theme:e,size:o})=>e.spaces[o==="S"?$t-2:Zt-3]};
  }
`;function qt({showBackground:e=!0,size:o="M"}){return t.createElement(qc,{alignItems:"center",background:e?"neutral200":null,justifyContent:"center",size:o,showBackground:e},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}qt.defaultProps={showBackground:!0,size:"M"},qt.propTypes={showBackground:n().bool,size:n().string};const Nc=(0,N.ZP)(A.x)`
  flex-shrink: 0;
  height: ${(0,h.Q1)(84)};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`;function Bn({children:e,onClick:o}){return t.createElement(Nc,{as:"button",type:"button",onClick:o,hasRadius:!0},t.createElement(w.k,{direction:"column",gap:1,alignItems:"center",justifyContent:"center"},t.createElement(qt,null),t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral600"},e)))}Bn.defaultProps={onClick(){}},Bn.propTypes={children:n().node.isRequired,onClick:n().func};const jc=N.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140/16}rem);
  grid-gap: ${({theme:e})=>e.spaces[1]};
`,Wn=({category:e,components:o,variant:r,isOpen:s,onAddComponent:i,onToggle:l})=>{const{formatMessage:a}=(0,Q.Z)(),c=()=>{l(e)};return t.createElement(cn.U,{expanded:s,onToggle:c,size:"S"},t.createElement(dn.B,{variant:r,title:a({id:e,defaultMessage:e}),togglePosition:"left"}),t.createElement(un.v,null,t.createElement(A.x,{paddingTop:4,paddingBottom:4,paddingLeft:3,paddingRight:3},t.createElement(jc,null,o.map(({componentUid:u,info:{displayName:d}})=>t.createElement(Bn,{key:u,onClick:i(u)},a({id:d,defaultMessage:d})))))))};Wn.defaultProps={components:[],isOpen:!1,variant:"primary"},Wn.propTypes={category:n().string.isRequired,components:n().array,isOpen:n().bool,onAddComponent:n().func.isRequired,onToggle:n().func.isRequired,variant:n().oneOf(["primary","secondary"])};const Bc=Wn,zn=({components:e,isOpen:o,onClickAddComponent:r})=>{const{formatMessage:s}=(0,Q.Z)(),{getComponentLayout:i}=Oe(),[l,a]=(0,t.useState)(""),c=(0,t.useMemo)(()=>{const m=e.map(p=>{const{category:y,info:b}=i(p);return{componentUid:p,category:y,info:b}}),f=Vr()(m,"category");return Object.keys(f).reduce((p,y)=>(p.push({category:y,components:f[y]}),p),[])},[e,i]);(0,t.useEffect)(()=>{o&&c.length>0&&a(c[0].category)},[o,c]);const u=m=>()=>{r(m),a("")},d=m=>{a(f=>f===m?"":m)};return o?t.createElement(A.x,{paddingBottom:6},t.createElement(A.x,{paddingTop:6,paddingBottom:6,paddingLeft:5,paddingRight:5,background:"neutral0",shadow:"tableShadow",borderColor:"neutral150",hasRadius:!0},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral600"},s({id:C("components.DynamicZone.ComponentPicker-label"),defaultMessage:"Pick one component"}))),t.createElement(A.x,{paddingTop:2},t.createElement(zr.k,{attributeName:"data-strapi-accordion-toggle"},c.map(({category:m,components:f},p)=>t.createElement(Bc,{key:m,category:m,components:f,onAddComponent:u,isOpen:m===l,onToggle:d,variant:p%2===1?"primary":"secondary"})))))):null};zn.defaultProps={components:[],isOpen:!1},zn.propTypes={components:n().array,isOpen:n().bool,onClickAddComponent:n().func.isRequired};const Wc=zn,Vn=({name:e,addComponentToDynamicZone:o,formErrors:r,isCreatingEntry:s,isFieldAllowed:i,isFieldReadable:l,labelAction:a,moveComponentField:c,removeComponentFromDynamicZone:u,dynamicDisplayedComponents:d,fieldSchema:m,metadatas:f})=>{const[p,y]=(0,t.useState)(!1),[b,R]=(0,t.useState)(""),{formatMessage:k}=(0,Q.Z)(),E=(0,h.lm)(),{getComponentLayout:v,components:F}=Oe(),S=d.length,T=f.description?{id:f.description,defaultMessage:f.description}:null,{max:D=1/0,min:x=-1/0}=m,j=(0,t.useMemo)(()=>Object.keys(r).filter($=>$===e).map($=>r[$]),[r,e]),z=x-S,Z=j.length>0,V=j.length>0&&I()(j,[0,"id"],"").includes("min"),B=Z&&I()(j,[0,"id"],"")==="components.Input.error.validation.max",K=$=>{y(!1);const O=v($);o(e,O,F,Z)},W=()=>{S<D?y($=>!$):E({type:"info",message:{id:C("components.notification.info.maximum-requirement")}})},X=($,O)=>{R(k({id:C("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${e}.${O}`,position:q($)})),c({name:e,newIndex:$,currentIndex:O})},q=$=>`${$+1} of ${d.length}`,ee=$=>{R(k({id:C("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${e}.${$}`}))},M=$=>{R(k({id:C("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${e}.${$}`,position:q($)}))},L=$=>{R(k({id:C("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${e}.${$}`,position:q($)}))},Y=($,O)=>()=>{u($,O)};if(!i&&(s||!l&&!s))return t.createElement(h.X0,{description:T,intlLabel:{id:f.label,defaultMessage:f.label},labelAction:a,name:e});const H=`${e}-item-instructions`;return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},S>0&&t.createElement(A.x,null,t.createElement($c,{intlDescription:T,label:f.label,labelAction:a,name:e,numberOfComponents:S,required:m.required||!1}),t.createElement(Xe.T,{id:H},k({id:C("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),t.createElement(Xe.T,{"aria-live":"assertive"},b),t.createElement("ol",{"aria-describedby":H},d.map(({componentUid:$,id:O},U)=>t.createElement(wc,{componentUid:$,formErrors:r,key:`${$}-${O}`,index:U,isFieldAllowed:i,name:e,onMoveComponent:X,onRemoveComponentClick:Y(e,U),onCancel:ee,onDropItem:L,onGrabItem:M})))),t.createElement(Ac,{hasError:Z,hasMaxError:B,hasMinError:V,isDisabled:!i,label:f.label,missingComponentNumber:z,isOpen:p,name:e,onClick:W}),t.createElement(Wc,{isOpen:p,components:m.components??[],onClickAddComponent:K}))};Vn.defaultProps={dynamicDisplayedComponents:[],fieldSchema:{max:1/0,min:-1/0},labelAction:null},Vn.propTypes={addComponentToDynamicZone:n().func.isRequired,dynamicDisplayedComponents:n().arrayOf(n().shape({componentUid:n().string.isRequired,id:n().number.isRequired})),fieldSchema:n().shape({components:n().array.isRequired,max:n().number,min:n().number,required:n().bool}),formErrors:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isFieldAllowed:n().bool.isRequired,isFieldReadable:n().bool.isRequired,labelAction:n().element,metadatas:n().shape({description:n().string,label:n().string}).isRequired,moveComponentField:n().func.isRequired,name:n().string.isRequired,removeComponentFromDynamicZone:n().func.isRequired};const zc=(0,t.memo)(Vn,$e()),Vc=ga(zc,ha);var Ze=g(46781);const Nt=()=>({type:Ze.ZA}),Un=e=>({type:Ze.Id,data:e}),Hn=(e,o=!1)=>({type:Ze.TP,rawQuery:e,isSingleType:o}),Ur=()=>({type:Ze.c2}),Hr=(e,o)=>({type:Ze.w7,componentsDataStructure:e,contentTypeDataStructure:o}),ae=e=>({type:Ze.d0,status:e}),qe=e=>({type:Ze.t9,data:e}),Uc=()=>({type:Ze.tE}),Gn=e=>e["content-manager_editViewCrudReducer"],Qn=({allLayoutData:e,children:o,slug:r,id:s,origin:i})=>{const l=(0,Ue.useQueryClient)(),a=(0,h.lm)(),{setCurrentStep:c}=(0,h.c1)(),{trackUsage:u}=(0,h.rS)(),{push:d,replace:m}=(0,ie.k6)(),[{rawQuery:f}]=(0,h.Kx)(),p=(0,le.I0)(),{componentsDataStructure:y,contentTypeDataStructure:b,data:R,isLoading:k,status:E}=(0,le.v9)(Gn),v=cr(r),{formatAPIError:F}=(0,h.So)(C),S=(0,t.useRef)(!0),T=(0,t.useRef)(u),D=(0,t.useRef)(e),x=(0,h.kY)(),{put:j,post:z,del:Z}=x,V=s===null,B=(0,t.useMemo)(()=>V&&!i?null:ce(`collection-types/${r}/${i||s}`),[r,s,V,i]),K=(0,t.useCallback)(O=>i?(0,h.w6)(O,D.current.contentType,D.current.components):O,[i]),W=(0,t.useCallback)(O=>{const U=Yo(O,D.current.contentType,D.current.components);return(0,h.dU)(U,D.current.contentType,D.current.components)},[]);(0,t.useEffect)(()=>{const O=Object.keys(e.components).reduce((P,oe)=>{const de=It(I()(e,["components",oe,"attributes"],{}),e.components);return P[oe]=(0,h.dU)(de,e.components[oe],e.components),P},{}),U=It(e.contentType.attributes,e.components),se=(0,h.dU)(U,e.contentType,e.components);p(Hr(O,se))},[e,p]),(0,t.useEffect)(()=>()=>{p(Ur())},[p]),(0,t.useEffect)(()=>{const U=Re.default.CancelToken.source(),se=async oe=>{p(Nt());try{const{data:de}=await x.get(B,{cancelToken:oe.token});p(Un(W(K(de))))}catch(de){if(Re.default.isCancel(de))return;const ye=I()(de,"response.status",null);if(ye===404){d(v);return}ye===403&&(a({type:"info",message:{id:C("permissions.not-allowed.update")}}),d(v))}},P=async()=>{await p(Nt()),await p(Hn(f))};return S.current?(B?se(U):P(),()=>{U.cancel("Operation canceled by the user.")}):()=>{}},[x,K,W,d,B,p,f,v,a]);const X=(0,t.useCallback)(O=>{a({type:"warning",message:F(O)})},[a,F]),q=(0,t.useCallback)(async O=>{try{T.current("willDeleteEntry",O);const{data:U}=await Z(ce(`collection-types/${r}/${s}`));return a({type:"success",message:{id:C("success.record.delete")}}),T.current("didDeleteEntry",O),Promise.resolve(U)}catch(U){return T.current("didNotDeleteEntry",{error:U,...O}),Promise.reject(U)}},[s,r,a,Z]),ee=(0,t.useCallback)(()=>{m(v)},[v,m]),M=(0,t.useCallback)(async(O,U)=>{const se=`${ce(`collection-types/${r}`)}${f}`;try{p(ae("submit-pending"));const{data:P}=await z(se,O);return T.current("didCreateEntry",U),a({type:"success",message:{id:C("success.record.save")}}),c("contentManager.success"),l.invalidateQueries(["relation"]),p(qe(W(P))),p(ae("resolved")),m(`/content-manager/collectionType/${r}/${P.id}${f}`),Promise.resolve(P)}catch(P){return X(P),T.current("didNotCreateEntry",{error:P,trackerProperty:U}),p(ae("resolved")),Promise.reject(P)}},[W,X,m,r,p,f,a,c,l,z]),L=(0,t.useCallback)(async()=>{try{T.current("willCheckDraftRelations");const O=ce(`collection-types/${r}/${s}/actions/numberOfDraftRelations`);p(ae("draft-relation-check-pending"));const U=await x.get(O);return T.current("didCheckDraftRelations"),p(ae("resolved")),U.data.data}catch(O){return X(O),p(ae("resolved")),Promise.reject(O)}},[X,s,r,p,x]),Y=(0,t.useCallback)(async()=>{try{T.current("willPublishEntry");const O=ce(`collection-types/${r}/${s}/actions/publish`);p(ae("publish-pending"));const{data:U}=await z(O);return T.current("didPublishEntry"),p(qe(W(U))),p(ae("resolved")),a({type:"success",message:{id:C("success.record.publish")}}),Promise.resolve(U)}catch(O){return X(O),p(ae("resolved")),Promise.reject(O)}},[W,X,s,r,p,a,z]),H=(0,t.useCallback)(async(O,U)=>{const se=ce(`collection-types/${r}/${s}`);try{T.current("willEditEntry",U),p(ae("submit-pending"));const{data:P}=await j(se,O);return T.current("didEditEntry",{trackerProperty:U}),a({type:"success",message:{id:C("success.record.save")}}),l.invalidateQueries(["relation"]),p(qe(W(P))),p(ae("resolved")),Promise.resolve(P)}catch(P){return T.current("didNotEditEntry",{error:P,trackerProperty:U}),X(P),p(ae("resolved")),Promise.reject(P)}},[W,X,r,s,p,a,l,j]),$=(0,t.useCallback)(async()=>{const O=ce(`collection-types/${r}/${s}/actions/unpublish`);p(ae("unpublish-pending"));try{T.current("willUnpublishEntry");const{data:U}=await z(O);return T.current("didUnpublishEntry"),a({type:"success",message:{id:C("success.record.unpublish")}}),p(qe(W(U))),p(ae("resolved")),Promise.resolve(U)}catch(U){return p(ae("resolved")),X(U),Promise.reject(U)}},[W,X,s,r,p,a,z]);return o({componentsDataStructure:y,contentTypeDataStructure:b,data:R,isCreatingEntry:V,isLoadingForData:k,onDelete:q,onDeleteSucceeded:ee,onPost:M,onPublish:Y,onDraftRelationCheck:L,onPut:H,onUnpublish:$,status:E,redirectionLink:v})};Qn.defaultProps={id:null,origin:null},Qn.propTypes={allLayoutData:n().exact({components:n().object.isRequired,contentType:n().shape({apiID:n().string.isRequired,attributes:n().object.isRequired,info:n().object.isRequired,isDisplayed:n().bool.isRequired,kind:n().string.isRequired,layouts:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,pluginOptions:n().object,settings:n().object.isRequired,uid:n().string.isRequired}).isRequired}).isRequired,children:n().func.isRequired,id:n().string,origin:n().string,slug:n().string.isRequired};const Hc=(0,t.memo)(Qn,$e());var Gc=g(41609),be=g.n(Gc),Qc=g(18446),gt=g.n(Qc),Kc=g(98601),Yc=g.n(Kc),Xc=g(45578),Gr=g.n(Xc),Kn=g(38190);const Qr=(e,o,r,s)=>{const i=e.slice();return i.splice(o,1),i.splice(r,0,s),i};var Jc=g(1469),_c=g.n(Jc);const ed=({browserState:e,serverState:o},r,s)=>{const i=o,l=e,a=(d,m)=>I()(d,["attributes",m,"type"],""),c=(d,m)=>I()(d,["attributes",...m],""),u=(d,m,f,p)=>Object.keys(d).reduce((y,b)=>{const R=p?`${p}.${b}`:b,k=a(f,b),E=I()(d,b),v=I()(m,b),F=c(f,[b,"component"]),S=c(f,[b,"repeatable"]);let T;switch(k){case"json":T=JSON.parse(E);break;case"time":{T=E,E&&E.split(":").length<3&&(T=`${E}:00`);break}case"media":c(f,[b,"multiple"])===!0?T=E?E.filter(D=>!(D instanceof File)):null:T=I()(E,0)instanceof File?null:I()(E,"id",null);break;case"component":S?T=E&&E.map((D,x)=>u(D,(v??[])[x],s[F],`${R}.${x}`)):T=E&&u(E,v,s[F],R);break;case"relation":{const D=jr(i,l)(R).join(".");let x=I()(i,D,[]);const j=E.reduce((Z,V,B,K)=>{const W=x.find(q=>q.id===V.id),X=K[B+1];if(!W||W.__temp_key__!==V.__temp_key__){const q=X?{before:X.id}:{end:!0};return[...Z,{id:V.id,position:q}]}return Z},[]);T={disconnect:x.reduce((Z,V)=>E.find(B=>B.id===V.id)?Z:[...Z,{id:V.id}],[]),connect:j.reverse()};break}case"dynamiczone":T=E.map((D,x)=>u(D,(v??[])[x],s[D.__component],`${R}.${x}`));break;default:T=td(E,"id")}return y[b]=T,y},{});return u(e,o,r,"")},td=(e,o)=>_c()(e)?e.map(r=>r[o]?r[o]:r):ar()(e)?e[o]:e,nd=ed;var od=g(51584),rd=g.n(od),sd=g(14841),et=g.n(sd),me=g(87561);function ft(e){return["integer","biginteger","decimal","float","number"].includes(e)}me.kM(me.nK,"defined",function(){return this.test("defined",h.I0.required,e=>e!==void 0)}),me.kM(me.IX,"notEmptyMin",function(e){return this.test("notEmptyMin",h.I0.min,o=>be()(o)?!0:o.length>=e)}),me.kM(me.Z_,"isInferior",function(e,o){return this.test("isInferior",e,function(r){return!r||Number.isNaN(et()(r))?!0:et()(o)>=et()(r)})}),me.kM(me.Z_,"isSuperior",function(e,o){return this.test("isSuperior",e,function(r){return!r||Number.isNaN(et()(r))?!0:et()(r)>=et()(o)})});const id=e=>I()(e,["attributes"],{}),Yn=(e,{components:o},r={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const s=id(e);return me.Ry().shape(Object.keys(s).reduce((i,l)=>{const a=s[l];if(a.type!=="relation"&&a.type!=="component"&&a.type!=="dynamiczone"){const c=ad(a.type,a,r);i[l]=c}if(a.type==="relation"&&(i[l]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(a.relationType)?me.Ry().nullable():me.IX().nullable()),a.type==="component"){const c=Yn(o[a.component],{components:o},{...r,isFromComponent:!0});if(a.repeatable===!0){const{min:d,max:m,required:f}=a;let p=me.Vo(y=>{let b=me.IX().of(c);return d?f?b=b.min(d,h.I0.min):f!==!0&&be()(y)?b=b.nullable():b=b.min(d,h.I0.min):f&&!r.isDraft&&(b=b.min(1,h.I0.required)),m&&(b=b.max(m,h.I0.max)),b});return i[l]=p,i}const u=me.Vo(d=>d!==void 0?a.required===!0&&!r.isDraft?c.defined():c.nullable():a.required===!0?me.Ry().defined():me.Ry().nullable());return i[l]=u,i}if(a.type==="dynamiczone"){let c=me.IX().of(me.Vo(({__component:m})=>Yn(o[m],{components:o},{...r,isFromComponent:!0})));const{max:u,min:d}=a;d?a.required?c=c.test("min",h.I0.min,m=>r.isCreatingEntry?m&&m.length>=d:m===void 0?!0:m!==null&&m.length>=d).test("required",h.I0.required,m=>r.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null):c=c.notEmptyMin(d):a.required&&!r.isDraft&&(c=c.test("required",h.I0.required,m=>r.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null)),u&&(c=c.max(u,h.I0.max)),i[l]=c}return i},{}))},ad=(e,o,r)=>{let s=me.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(e)&&(s=me.Z_()),e==="json"&&(s=me.nK(h.I0.json).test("isJSON",h.I0.json,i=>{if(!i||!i.length)return!0;try{return JSON.parse(i),!0}catch{return!1}}).nullable().test("required",h.I0.required,i=>!(o.required&&(!i||!i.length)))),e==="email"&&(s=s.email(h.I0.email)),["number","integer","float","decimal"].includes(e)&&(s=me.Rx().transform(i=>Go()(i)?void 0:i).typeError()),e==="biginteger"&&(s=me.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(e)&&(s=me.hT()),Object.keys(o).forEach(i=>{const l=o[i];if(l||!rd()(l)&&Number.isInteger(Math.floor(l))||l===0)switch(i){case"required":{r.isDraft||(e==="password"&&r.isCreatingEntry&&(s=s.required(h.I0.required)),e!=="password"&&(r.isCreatingEntry?s=s.required(h.I0.required):s=s.test("required",h.I0.required,a=>a===void 0&&!r.isFromComponent?!0:ft(e)?a===0?!0:!!a:e==="boolean"?a!=null:e==="date"||e==="datetime"?typeof a=="string"?!be()(a):!be()(a?.toString()):!be()(a))));break}case"max":{e==="biginteger"?s=s.isInferior(h.I0.max,l):s=s.max(l,h.I0.max);break}case"maxLength":s=s.max(l,h.I0.maxLength);break;case"min":{e==="biginteger"?s=s.isSuperior(h.I0.min,l):s=s.min(l,h.I0.min);break}case"minLength":{r.isDraft||(s=s.min(l,h.I0.minLength));break}case"regex":s=s.matches(new RegExp(l),{message:h.I0.regex,excludeEmptyString:!o.required});break;case"lowercase":["text","textarea","email","string"].includes(e)&&(s=s.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(e)&&(s=s.strict().uppercase());break;case"positive":ft(e)&&(s=s.positive());break;case"negative":ft(e)&&(s=s.negative());break;default:s=s.nullable()}}),s},Kr=Yn,jt=(e,o=()=>!1,r=void 0)=>{const s=(i,l,{ignoreFalseyValues:a=!1,path:c=[],parent:u=l}={})=>Object.entries(l).reduce((d,[m,f])=>{if(a&&(d==null||d[m]===void 0||d[m]===null))return d;if(o(f,{path:[...c,m],parent:u})&&(d[m]=typeof r=="function"?r(d[m],{path:[...c,m],parent:d}):r),f.type==="component"){const p=e[f.component].attributes;!f.repeatable&&d[m]&&typeof d[m]=="object"?d[m]=s(d[m],p,{ignoreFalseyValues:a,path:[...c,m],parent:l[m]}):f.repeatable&&Array.isArray(d[m])&&(d[m]=d[m].map((y,b)=>s(y,p,{ignoreFalseyValues:a,path:[...c,m,b],parent:l[m]})))}else f.type==="dynamiczone"&&Array.isArray(d[m])&&(d[m]=d[m].map((p,y)=>{const b=e[p.__component].attributes;return s(p,b,{ignoreFalseyValues:a,path:[...c,m,y],parent:l[m]})}));return d},{...i});return s},ld={componentsDataStructure:{},contentTypeDataStructure:{},formErrors:{},initialData:{},modifiedData:null,shouldCheckErrors:!1,modifiedDZName:null,publishConfirmation:{show:!1,draftCount:0}},cd=(e,o)=>(0,wt.ZP)(e,r=>{switch(o.type){case"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD":{const{componentLayoutData:s,allComponents:i}=o,l={...e.componentsDataStructure[s.uid]},c=jt(i,u=>u.type==="relation",[])(l,s.attributes);J()(r,["modifiedData",...o.keys],c);break}case"ADD_COMPONENT_TO_DYNAMIC_ZONE":case"ADD_REPEATABLE_COMPONENT_TO_FIELD":{const{keys:s,allComponents:i,componentLayoutData:l,shouldCheckErrors:a}=o;a&&(r.shouldCheckErrors=!e.shouldCheckErrors),o.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"&&(r.modifiedDZName=s[0]);const c=I()(e,["modifiedData",...s],[]),u=o.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"?{...e.componentsDataStructure[l.uid],__component:l.uid,__temp_key__:_t(c)+1}:{...e.componentsDataStructure[l.uid],__temp_key__:_t(c)+1},m=jt(i,p=>p.type==="relation",[])(u,l.attributes),f=Array.isArray(c)?[...c,m]:[m];J()(r,["modifiedData",...s],f);break}case"LOAD_RELATION":{const{initialDataPath:s,modifiedDataPath:i,value:l}=o,a=I()(e,s),c=I()(e,i),u=a?l.filter(f=>!a.some(p=>p.id===f.id)):l,d=(0,Kn.zJ)(null,c[0]?.__temp_key__,u.length),m=u.map((f,p)=>({...f,__temp_key__:d[p]}));J()(r,s,Gr()([...m,...a],"id")),J()(r,i,Gr()([...m,...c],"id"));break}case"CONNECT_RELATION":{const s=["modifiedData",...o.keys],{value:i,toOneRelation:l}=o;if(l)J()(r,s,[i]);else{const a=I()(e,s),[c]=(0,Kn.zJ)(a.at(-1)?.__temp_key__,null,1),u=[...a,{...i,__temp_key__:c}];J()(r,s,u)}break}case"DISCONNECT_RELATION":{const s=["modifiedData",...o.keys],{id:i}=o,a=I()(e,[...s]).filter(c=>c.id!==i);J()(r,s,a);break}case"MOVE_COMPONENT_FIELD":case"REORDER_RELATION":{const{oldIndex:s,newIndex:i,keys:l}=o,a=["modifiedData",...l],c=I()(e,[...a]),u=c[s],d=[...c];if(o.type==="REORDER_RELATION"){const[m]=(0,Kn.zJ)(c[i-1]?.__temp_key__,c[i]?.__temp_key__,1);d.splice(s,1),d.splice(i,0,{...u,__temp_key__:m})}else d.splice(s,1),d.splice(i,0,u);J()(r,a,d);break}case"INIT_FORM":{const{initialValues:s,components:i={},attributes:l={},setModifiedDataOnly:a}=o,c=Me()(s),d=jt(i,p=>p.type==="relation",(p,{path:y})=>e.modifiedData?.id===c.id&&I()(e.modifiedData,y)?I()(e.modifiedData,y):[])(c,l),f=jt(i,p=>p.type==="dynamiczone"||p.type==="component"&&!p.repeatable,p=>Array.isArray(p)?p.map((y,b)=>({...y,__temp_key__:b})):{...p,__temp_key__:0})(d,l,{ignoreFalseyValues:!0});a||(r.initialData=f),r.modifiedData=f,r.formErrors={},r.modifiedDZName=null,r.shouldCheckErrors=!1;break}case"MOVE_COMPONENT_UP":case"MOVE_COMPONENT_DOWN":{const{currentIndex:s,dynamicZoneName:i,shouldCheckErrors:l}=o;l&&(r.shouldCheckErrors=!e.shouldCheckErrors);const a=e.modifiedData[i],c=o.type==="MOVE_COMPONENT_UP"?s-1:s+1,u=e.modifiedData[i][s],d=Qr(a,s,c,u);J()(r,["modifiedData",o.dynamicZoneName],d);break}case"MOVE_FIELD":{const s=I()(e,["modifiedData",...o.keys],[]).slice(),i=I()(e,["modifiedData",...o.keys,o.dragIndex]),l=Qr(s,o.dragIndex,o.overIndex,i);J()(r,["modifiedData",...o.keys],l);break}case"ON_CHANGE":{const[s]=o.keys;if(o.shouldSetInitialValue&&J()(r,["initialData",...o.keys],o.value),o.keys.length===2&&I()(e,["modifiedData",s])===null){J()(r,["modifiedData",s],{[o.keys[1]]:o.value});break}J()(r,["modifiedData",...o.keys],o.value);break}case"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE":{o.shouldCheckErrors&&(r.shouldCheckErrors=!e.shouldCheckErrors),r.modifiedData[o.dynamicZoneName].splice(o.index,1);break}case"REMOVE_COMPONENT_FROM_FIELD":{const s=["modifiedData",...o.keys];J()(r,s,null);break}case"REMOVE_PASSWORD_FIELD":{Yc()(r,["modifiedData",...o.keys]);break}case"REMOVE_REPEATABLE_FIELD":{const s=o.keys.length-1,i=["modifiedData",...dt()(o.keys,s)];Object.keys(e.formErrors).length>0&&(r.shouldCheckErrors=!e.shouldCheckErrors);const a=I()(e,i).slice();a.splice(parseInt(o.keys[s],10),1),J()(r,i,a);break}case"SET_DEFAULT_DATA_STRUCTURES":{r.componentsDataStructure=o.componentsDataStructure,r.contentTypeDataStructure=o.contentTypeDataStructure;break}case"SET_FORM_ERRORS":{r.modifiedDZName=null,r.formErrors=o.errors;break}case"TRIGGER_FORM_VALIDATION":{Object.keys(e.formErrors).length>0&&(r.shouldCheckErrors=!e.shouldCheckErrors);break}case"SET_PUBLISH_CONFIRMATION":{r.publishConfirmation={...o.publishConfirmation};break}case"RESET_PUBLISH_CONFIRMATION":{r.publishConfirmation={...e.publishConfirmation,show:!1};break}default:return r}}),Xn=({allLayoutData:e,allowedActions:{canRead:o,canUpdate:r},children:s,componentsDataStructure:i,contentTypeDataStructure:l,createActionAllowedFields:a,from:c,initialValues:u,isCreatingEntry:d,isLoadingForData:m,isSingleType:f,onPost:p,onPublish:y,onDraftRelationCheck:b,onPut:R,onUnpublish:k,readActionAllowedFields:E,redirectToPreviousPage:v,slug:F,status:S,updateActionAllowedFields:T})=>{const[D,x]=(0,t.useReducer)(cd,ld),{formErrors:j,initialData:z,modifiedData:Z,modifiedDZName:V,shouldCheckErrors:B,publishConfirmation:K}=D,{setModifiedDataOnly:W}=(0,le.v9)(Gn),X=(0,le.I0)(),q=(0,h.lm)(),{lockApp:ee,unlockApp:M}=(0,h.o1)(),L=I()(e,["contentType"],{}),Y=(0,t.useMemo)(()=>I()(L,["options","draftAndPublish"],!1),[L]),H=(0,t.useMemo)(()=>Y&&!z.publishedAt,[Y,z.publishedAt]),{trackUsage:$}=(0,h.rS)(),{formatMessage:O}=(0,Q.Z)(),U=(0,t.useRef)($),se=(0,t.useMemo)(()=>m||d?!1:o===!1&&r===!1,[m,d,o,r]);(0,t.useEffect)(()=>{S==="resolved"?M():ee()},[ee,M,S]),(0,t.useEffect)(()=>{m||ke()},[B]),(0,t.useEffect)(()=>{const ne=Object.keys(j);if(ne.length>0){const _=ne[0],re=document.getElementById(_);re&&re.focus()}},[j]),(0,t.useEffect)(()=>{se&&q({type:"info",message:{id:C("permissions.not-allowed.update")}})},[se,q]),(0,t.useEffect)(()=>{x({type:"SET_DEFAULT_DATA_STRUCTURES",componentsDataStructure:i,contentTypeDataStructure:l})},[i,l]);const{components:P}=e,oe=pr(u);(0,t.useEffect)(()=>{u&&L?.attributes&&!gt()(oe,u)&&(x({type:"INIT_FORM",initialValues:u,components:P,attributes:L.attributes,setModifiedDataOnly:W}),W&&X(Uc()))},[u,L,P,W,X,oe]);const de=(0,t.useCallback)(ne=>(_,re,Le,Ge=!1)=>{U.current("didAddComponentToDynamicZone"),x({type:ne,keys:_.split("."),componentLayoutData:re,allComponents:Le,shouldCheckErrors:Ge})},[]),ye=de("ADD_COMPONENT_TO_DYNAMIC_ZONE"),it=(0,t.useCallback)((ne,_,re)=>{x({type:"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",keys:ne.split("."),componentLayoutData:_,allComponents:re})},[]),Ct=(0,t.useCallback)(({name:ne,value:_,toOneRelation:re})=>{x({type:"CONNECT_RELATION",keys:ne.split("."),value:_,toOneRelation:re})},[]),Rt=(0,t.useCallback)(({target:{initialDataPath:ne,modifiedDataPath:_,value:re}})=>{x({type:"LOAD_RELATION",modifiedDataPath:_,initialDataPath:ne,value:re})},[]),vt=de("ADD_REPEATABLE_COMPONENT_TO_FIELD"),ve=(0,t.useMemo)(()=>{const ne={isCreatingEntry:d,isDraft:H,isFromComponent:!1};return Kr(L,{components:e.components||{}},ne)},[e.components,L,d,H]),ke=(0,t.useCallback)(async(ne={})=>{let _={};const re=Me()(Z);be()(re)||J()(re,ne.path,ne.value);try{await ve.validate(re,{abortEarly:!1})}catch(Le){_=(0,h.CJ)(Le),V&&(_=Object.keys(_).reduce((Ge,wo)=>(wo.split(".")[0]!==V&&(Ge[wo]=_[wo]),Ge),{}))}x({type:"SET_FORM_ERRORS",errors:_})},[V,Z,ve]),Tt=(0,t.useCallback)(({target:{name:ne,value:_,type:re}},Le=!1)=>{let Ge=_;if(["text","textarea","string","email","uid","select","select-one","number"].includes(re)&&!_&&_!==0&&(Ge=null),re==="password"&&!_){x({type:"REMOVE_PASSWORD_FIELD",keys:ne.split(".")});return}x({type:"ON_CHANGE",keys:ne.split("."),value:Ge,shouldSetInitialValue:Le})},[]),Ne=(0,t.useCallback)((ne,_)=>nd({browserState:ne,serverState:_},L,e.components),[e.components,L]),te=(0,t.useMemo)(()=>Y?H?{status:"draft"}:{}:{},[Y,H]),pe=(0,t.useCallback)(async ne=>(ne.preventDefault(),x({type:"RESET_PUBLISH_CONFIRMATION"})),[]),Ie=(0,t.useCallback)(async ne=>{ne.preventDefault();let _={};try{await ve.validate(Z,{abortEarly:!1})}catch(re){_=(0,h.CJ)(re)}try{if(be()(_)){const re=Ne(Z,z);d?await p(re,te):await R(re,te)}}catch(re){_={..._,...(0,h.nn)(re,{getTrad:C})}}x({type:"SET_FORM_ERRORS",errors:_})},[Ne,d,Z,z,p,R,te,ve]),Po=(0,t.useCallback)(async()=>{const ne=Kr(L,{components:I()(e,"components",{})},{isCreatingEntry:d,isDraft:!1,isFromComponent:!1}),_=await b();if(!K.show&&_>0){x({type:"SET_PUBLISH_CONFIRMATION",publishConfirmation:{show:!0,draftCount:_}});return}x({type:"RESET_PUBLISH_CONFIRMATION"});let re={};try{await ne.validate(Z,{abortEarly:!1})}catch(Le){re=(0,h.CJ)(Le)}try{be()(re)&&await y()}catch(Le){re={...re,...(0,h.nn)(Le,{getTrad:C})}}x({type:"SET_FORM_ERRORS",errors:re})},[e,L,d,Z,K.show,y,b]),je=(0,t.useCallback)(ne=>{const _=Object.keys(j).some(Le=>Le.split(".")[0]===ne);return!be()(j)&&_},[j]),hp=(0,t.useCallback)((ne,_)=>{U.current("changeComponentsOrder"),x({type:"MOVE_COMPONENT_DOWN",dynamicZoneName:ne,currentIndex:_,shouldCheckErrors:je(ne)})},[je]),yp=(0,t.useCallback)((ne,_)=>{U.current("changeComponentsOrder"),x({type:"MOVE_COMPONENT_UP",dynamicZoneName:ne,currentIndex:_,shouldCheckErrors:je(ne)})},[je]),bp=(0,t.useCallback)(({name:ne,newIndex:_,currentIndex:re})=>{x({type:"MOVE_COMPONENT_FIELD",keys:ne.split("."),newIndex:_,oldIndex:re})},[]),Ep=(0,t.useCallback)(({name:ne,id:_})=>{x({type:"DISCONNECT_RELATION",keys:ne.split("."),id:_})},[]),Cp=(0,t.useCallback)(({name:ne,oldIndex:_,newIndex:re})=>{x({type:"REORDER_RELATION",keys:ne.split("."),oldIndex:_,newIndex:re})},[]),Rp=(0,t.useCallback)((ne,_)=>{U.current("removeComponentFromDynamicZone"),x({type:"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",dynamicZoneName:ne,index:_,shouldCheckErrors:je(ne)})},[je]),vp=(0,t.useCallback)((ne,_)=>{x({type:"REMOVE_COMPONENT_FROM_FIELD",keys:ne.split("."),componentUid:_})},[]),Tp=(0,t.useCallback)((ne,_)=>{x({type:"REMOVE_REPEATABLE_FIELD",keys:ne.split("."),componentUid:_})},[]),Mp=(0,t.useCallback)(()=>{x({type:"TRIGGER_FORM_VALIDATION"})},[]);return se?t.createElement(ie.l_,{to:c}):Z?t.createElement(h.W1.Provider,{value:{addComponentToDynamicZone:ye,addNonRepeatableComponentToField:it,addRepeatableComponentToField:vt,allLayoutData:e,checkFormErrors:ke,createActionAllowedFields:a,formErrors:j,hasDraftAndPublish:Y,initialData:z,isCreatingEntry:d,isSingleType:f,shouldNotRunValidations:H,status:S,layout:L,modifiedData:Z,moveComponentField:bp,moveComponentDown:hp,moveComponentUp:yp,onChange:Tt,onPublish:Po,onUnpublish:k,readActionAllowedFields:E,redirectToPreviousPage:v,removeComponentFromDynamicZone:Rp,removeComponentFromField:vp,removeRepeatableField:Tp,relationConnect:Ct,relationDisconnect:Ep,relationLoad:Rt,relationReorder:Cp,slug:F,triggerFormValidation:Mp,updateActionAllowedFields:T,onPublishPromptDismissal:pe,publishConfirmation:K}},m||!d&&!z.id?t.createElement(Se.o,{"aria-busy":"true"},t.createElement(h.dO,null)):t.createElement(t.Fragment,null,t.createElement(ie.NL,{when:!gt()(Z,z),message:O({id:"global.prompt.unsaved"})}),t.createElement("form",{noValidate:!0,onSubmit:Ie},s))):null};Xn.defaultProps={from:"/",initialValues:null,redirectToPreviousPage(){}},Xn.propTypes={allLayoutData:n().object.isRequired,allowedActions:n().object.isRequired,children:n().node.isRequired,componentsDataStructure:n().object.isRequired,contentTypeDataStructure:n().object.isRequired,createActionAllowedFields:n().array.isRequired,from:n().string,initialValues:n().object,isCreatingEntry:n().bool.isRequired,isLoadingForData:n().bool.isRequired,isSingleType:n().bool.isRequired,onPost:n().func.isRequired,onPublish:n().func.isRequired,onDraftRelationCheck:n().func.isRequired,onPut:n().func.isRequired,onUnpublish:n().func.isRequired,readActionAllowedFields:n().array.isRequired,redirectToPreviousPage:n().func,slug:n().string.isRequired,status:n().string.isRequired,updateActionAllowedFields:n().array.isRequired};const dd=Xn,He=e=>ce(`single-types/${e}`),ud=e=>Object.values(e||{}).reduce((o,r)=>Object.assign(o,r),{}),Yr=(e={})=>{const{plugins:o,_q:r,...s}={...e,...ud(e.plugins)};return r&&J()(s,"_q",encodeURIComponent(r)),`${(0,Fe.stringify)(s,{encode:!1,addQueryPrefix:!0})}`},Xr=({allLayoutData:e,children:o,slug:r})=>{const s=(0,Ue.useQueryClient)(),{trackUsage:i}=(0,h.rS)(),{push:l}=(0,ie.k6)(),{setCurrentStep:a}=(0,h.c1)(),c=(0,t.useRef)(i),[u,d]=(0,t.useState)(!0),[{query:m,rawQuery:f}]=(0,h.Kx)(),p=Yr(m),y=(0,h.lm)(),b=(0,le.I0)(),{formatAPIError:R}=(0,h.So)(C),k=(0,h.kY)(),{post:E,put:v,del:F}=k,{componentsDataStructure:S,contentTypeDataStructure:T,data:D,isLoading:x,status:j}=(0,le.v9)(Gn),z=(0,t.useCallback)(M=>{const L=Yo(M,e.contentType,e.components);return(0,h.dU)(L,e.contentType,e.components)},[e]);(0,t.useEffect)(()=>()=>{b(Ur())},[b]),(0,t.useEffect)(()=>{const M=Object.keys(e.components).reduce((H,$)=>{const O=It(I()(e,["components",$,"attributes"],{}),e.components);return H[$]=(0,h.dU)(O,e.components[$],e.components),H},{}),L=It(e.contentType.attributes,e.components),Y=(0,h.dU)(L,e.contentType,e.components);b(Hr(M,Y))},[e,b]),(0,t.useEffect)(()=>{const L=Re.default.CancelToken.source();return(async H=>{b(Nt()),d(!0);try{const{data:$}=await k.get(He(`${r}${p}`),{cancelToken:H.token});b(Un(z($))),d(!1)}catch($){if(Re.default.isCancel($))return;const O=I()($,"response.status",null);O===404&&b(Hn(f,!0)),O===403&&(y({type:"info",message:{id:C("permissions.not-allowed.update")}}),l("/"))}})(L),()=>L.cancel("Operation canceled by the user.")},[k,z,l,r,b,p,f,y]);const Z=(0,t.useCallback)(M=>{y({type:"warning",message:R(M)})},[y,R]),V=(0,t.useCallback)(async M=>{try{c.current("willDeleteEntry",M);const{data:L}=await F(He(`${r}${p}`));return y({type:"success",message:{id:C("success.record.delete")}}),c.current("didDeleteEntry",M),Promise.resolve(L)}catch(L){return c.current("didNotDeleteEntry",{error:L,...M}),Z(L),Promise.reject(L)}},[F,r,Z,y,p]),B=(0,t.useCallback)(()=>{d(!0),b(Hn(f,!0))},[b,f]),K=(0,t.useCallback)(async(M,L)=>{const Y=He(`${r}${f}`);try{b(ae("submit-pending"));const{data:H}=await v(Y,M);return c.current("didCreateEntry",L),y({type:"success",message:{id:C("success.record.save")}}),a("contentManager.success"),s.invalidateQueries(["relation"]),b(qe(z(H))),d(!1),b(ae("resolved")),Promise.resolve(H)}catch(H){return c.current("didNotCreateEntry",{error:H,trackerProperty:L}),Z(H),b(ae("resolved")),Promise.reject(H)}},[v,z,Z,r,b,f,y,a,s]),W=(0,t.useCallback)(async()=>{try{c.current("willCheckDraftRelations");const M=He(`${r}/actions/numberOfDraftRelations`);b(ae("draft-relation-check-pending"));const L=await k.get(M);return c.current("didCheckDraftRelations"),b(ae("resolved")),L.data.data}catch(M){return Z(M),b(ae("resolved")),Promise.reject(M)}},[k,Z,r,b]),X=(0,t.useCallback)(async()=>{try{c.current("willPublishEntry");const M=He(`${r}/actions/publish${p}`);b(ae("publish-pending"));const{data:L}=await E(M);return c.current("didPublishEntry"),y({type:"success",message:{id:C("success.record.publish")}}),b(qe(z(L))),b(ae("resolved")),Promise.resolve(L)}catch(M){return Z(M),b(ae("resolved")),Promise.reject(M)}},[E,z,Z,r,p,b,y]),q=(0,t.useCallback)(async(M,L)=>{const Y=He(`${r}${f}`);try{c.current("willEditEntry",L),b(ae("submit-pending"));const{data:H}=await v(Y,M);return y({type:"success",message:{id:C("success.record.save")}}),c.current("didEditEntry",{trackerProperty:L}),s.invalidateQueries(["relation"]),b(qe(z(H))),b(ae("resolved")),Promise.resolve(H)}catch(H){return Z(H),c.current("didNotEditEntry",{error:H,trackerProperty:L}),b(ae("resolved")),Promise.reject(H)}},[v,z,Z,r,b,f,y,s]),ee=(0,t.useCallback)(async()=>{const M=He(`${r}/actions/unpublish${p}`);b(ae("unpublish-pending"));try{c.current("willUnpublishEntry");const{data:L}=await E(M);c.current("didUnpublishEntry"),y({type:"success",message:{id:C("success.record.unpublish")}}),b(qe(z(L))),b(ae("resolved"))}catch(L){b(ae("resolved")),Z(L)}},[E,z,y,Z,r,b,p]);return o({componentsDataStructure:S,contentTypeDataStructure:T,data:D,isCreatingEntry:u,isLoadingForData:x,onDelete:V,onDeleteSucceeded:B,onPost:K,onDraftRelationCheck:W,onPublish:X,onPut:q,onUnpublish:ee,redirectionLink:"/",status:j})};Xr.propTypes={allLayoutData:n().shape({components:n().object.isRequired,contentType:n().object.isRequired}).isRequired,children:n().func.isRequired,slug:n().string.isRequired};const md=(0,t.memo)(Xr);var pd=g(71818);function gd(e,o){return r=>{const s=o();return t.createElement(e,{...r,...s})}}const fd=gd;function hd(){const{initialData:e,hasDraftAndPublish:o}=(0,h.Wq)(),r=e.publishedAt!==void 0&&e.publishedAt!==null;return{hasDraftAndPublish:o,isPublished:r}}const yd=hd,bd=(0,N.ZP)(pd.Z)`
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  * {
    fill: ${({theme:e,$bulletColor:o})=>e.colors[o]};
  }
`,Jr=({hasDraftAndPublish:e,isPublished:o})=>{const{formatMessage:r}=(0,Q.Z)();if(!e)return null;const s={draft:{textColor:"secondary700",bulletColor:"secondary600",box:{background:"secondary100",borderColor:"secondary200"}},published:{textColor:"success700",bulletColor:"success600",box:{background:"success100",borderColor:"success200"}}},i=o?s.published:s.draft;return t.createElement(A.x,{hasRadius:!0,as:"aside",paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,...i.box},t.createElement(A.x,{as:w.k},t.createElement(bd,{$bulletColor:i.bulletColor}),t.createElement(A.x,{paddingLeft:3},t.createElement(G.Z,{textColor:i.textColor},r({id:C("containers.Edit.information.editing"),defaultMessage:"Editing"}),"\xA0"),t.createElement(G.Z,{fontWeight:"bold",textColor:i.textColor},o&&r({id:C("containers.Edit.information.publishedVersion"),defaultMessage:"published version"}),!o&&r({id:C("containers.Edit.information.draftVersion"),defaultMessage:"draft version"})))))};Jr.propTypes={hasDraftAndPublish:n().bool.isRequired,isPublished:n().bool.isRequired};const Ed=fd(Jr,yd);var Jn=g(70004);const _n=60*1e3,eo=_n*60,Bt=eo*24,_r=Bt*30,es=Bt*365,Cd=e=>e<_n?{unit:"second",value:-Math.round(e/1e3)}:e<eo?{unit:"minute",value:-Math.round(e/_n)}:e<Bt?{unit:"hour",value:-Math.round(e/eo)}:e<_r?{unit:"day",value:-Math.round(e/Bt)}:e<es?{unit:"month",value:-Math.round(e/_r)}:{unit:"year",value:-Math.round(e/es)};var ts=g(19631);const ht=({label:e,value:o})=>t.createElement(w.k,{justifyContent:"space-between"},t.createElement(G.Z,{as:"dt",fontWeight:"bold",textColor:"neutral600"},e),t.createElement(G.Z,{as:"dd"},o));ht.propTypes={label:n().string.isRequired,value:n().string.isRequired};const Rd=()=>{const{formatMessage:e,formatRelativeTime:o}=(0,Q.Z)(),{initialData:r,isCreatingEntry:s}=(0,h.Wq)(),i=(0,t.useRef)(Date.now()),l=(u,d)=>{const{firstname:m,lastname:f,username:p}=r[d]??{},y=m??"",b=f??"",R=p??(0,ts.Pp)(y,b),E=(r[u]?new Date(r[u]).getTime():Date.now())-i.current,{unit:v,value:F}=Cd(-E);return{at:o(F,v,{numeric:"auto"}),by:s?"-":R}},a=l("updatedAt","updatedBy"),c=l("createdAt","createdBy");return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(G.Z,{variant:"sigma",textColor:"neutral600",id:"additional-information"},e({id:C("containers.Edit.information"),defaultMessage:"Information"})),t.createElement(A.x,{paddingBottom:4},t.createElement(Jn.i,null)),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},t.createElement(ht,{label:e({id:C("containers.Edit.information.created"),defaultMessage:"Created"}),value:c.at}),t.createElement(ht,{label:e({id:C("containers.Edit.information.by"),defaultMessage:"By"}),value:c.by})),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},t.createElement(ht,{label:e({id:C("containers.Edit.information.lastUpdate"),defaultMessage:"Last update"}),value:a.at}),t.createElement(ht,{label:e({id:C("containers.Edit.information.by"),defaultMessage:"By"}),value:a.by}))))};var tt=g(85018),Wt=g(67109),zt=g(47149),Vt=g(47824),Ut=g(98426);function vd(e,o){return r=>{const s=o();return t.createElement(e,{...r,...s})}}const Td=vd;function Md(){const{initialData:e,isCreatingEntry:o,isSingleType:r,status:s,layout:i,hasDraftAndPublish:l,modifiedData:a,onPublish:c,onUnpublish:u,publishConfirmation:d,onPublishPromptDismissal:m}=(0,h.Wq)();return{initialData:e,isCreatingEntry:o,isSingleType:r,status:s,layout:i,hasDraftAndPublish:l,modifiedData:a,onPublish:c,onUnpublish:u,publishConfirmation:d,onPublishPromptDismissal:m}}const Dd=Md,ns=(0,N.ZP)(w.k)`
  text-align: center;
`,os=({allowedActions:{canUpdate:e,canCreate:o,canPublish:r},initialData:s,isCreatingEntry:i,isSingleType:l,hasDraftAndPublish:a,layout:c,modifiedData:u,onPublish:d,onUnpublish:m,status:f,publishConfirmation:{show:p,draftCount:y},onPublishPromptDismissal:b})=>{const{goBack:R}=(0,ie.k6)(),[k,E]=(0,t.useState)(!1),{formatMessage:v}=(0,Q.Z)(),F=I()(c,["settings","mainField"],"id"),S=I()(c,["info","displayName"],"NOT FOUND"),T=!gt()(s,u)||i&&!be()(u);let x=v({id:C("containers.Edit.pluginHeader.title.new"),defaultMessage:"Create an entry"});!i&&!l&&(x=s[F]||S),l&&(x=S);let j=null;if(i&&o&&(j=t.createElement(w.k,{gap:2},a&&t.createElement(ue.z,{disabled:!0,startIcon:t.createElement(tt.Z,null),variant:"secondary"},v({id:"app.utils.publish",defaultMessage:"Publish"})),t.createElement(ue.z,{disabled:!T,loading:f==="submit-pending",type:"submit"},v({id:C("containers.Edit.submit"),defaultMessage:"Save"})))),!i&&e){const B=a&&r,K=!be()(s.publishedAt),W=K?f==="unpublish-pending":f==="publish-pending",X=K?{id:"app.utils.unpublish",defaultMessage:"Unpublish"}:{id:"app.utils.publish",defaultMessage:"Publish"},q=K?()=>E(!0):()=>d();j=t.createElement(w.k,null,B&&t.createElement(ue.z,{disabled:T,loading:W,onClick:q,startIcon:t.createElement(tt.Z,null),variant:"secondary"},v(X)),t.createElement(A.x,{paddingLeft:B?2:0},t.createElement(ue.z,{disabled:!T,loading:f==="submit-pending",type:"submit"},v({id:C("containers.Edit.submit"),defaultMessage:"Save"}))))}const z=()=>E(B=>!B),Z=()=>{z(),m()},V=`${v({id:C("api.id"),defaultMessage:"API ID "})} : ${c.apiID}`;return t.createElement(t.Fragment,null,t.createElement(Be.T,{title:x.toString(),primaryAction:j,subtitle:V,navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Wt.Z,null),onClick:B=>{B.preventDefault(),R()},to:"/"},v({id:"global.back",defaultMessage:"Back"}))}),t.createElement(zt.V,{onClose:z,title:"Confirmation",labelledBy:"confirmation",describedBy:"confirm-description",isOpen:k},t.createElement(Vt.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},t.createElement(G.Z,{id:"confirm-description"},v({id:C("popUpWarning.warning.unpublish"),defaultMessage:"Unpublish this content will automatically change it to a draft."},{br:()=>t.createElement("br",null)}))),t.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},t.createElement(G.Z,{id:"confirm-description"},v({id:C("popUpWarning.warning.unpublish-question"),defaultMessage:"Are you sure you want to unpublish it?"}))))),t.createElement(Ut.c,{startAction:t.createElement(ue.z,{onClick:z,variant:"tertiary"},v({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{variant:"danger-light",onClick:Z},v({id:"components.popUpWarning.button.confirm",defaultMessage:"Confirm"}))})),t.createElement(zt.V,{onClose:b,title:v({id:C("popUpWarning.warning.has-draft-relations.title"),defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:p},t.createElement(Vt.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(ns,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},y,v({id:C("popUpwarning.warning.has-draft-relations.message"),defaultMessage:"<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."},{b:B=>t.createElement(G.Z,{fontWeight:"bold"},B),count:y}))),t.createElement(ns,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},v({id:C("popUpWarning.warning.publish-question"),defaultMessage:"Do you still want to publish?"}))))),t.createElement(Ut.c,{startAction:t.createElement(ue.z,{onClick:b,variant:"tertiary"},v({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{variant:"success",onClick:d},v({id:C("popUpwarning.warning.has-draft-relations.button-confirm"),defaultMessage:"Publish"}))})))};os.propTypes={allowedActions:n().shape({canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canPublish:n().bool.isRequired}).isRequired,initialData:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isSingleType:n().bool.isRequired,status:n().string.isRequired,layout:n().object.isRequired,hasDraftAndPublish:n().bool.isRequired,modifiedData:n().object.isRequired,onPublish:n().func.isRequired,onUnpublish:n().func.isRequired,publishConfirmation:n().shape({show:n().bool.isRequired,draftCount:n().number.isRequired}).isRequired,onPublishPromptDismissal:n().func.isRequired};const kd=(0,t.memo)(os,$e()),Id=Td(kd,Dd),Ld=e=>{if(!e.layouts)return[];const o=e.layouts.edit,r=e.attributes,s=a=>I()(r,[a,"type"],"");let i=0;const l=[];return o.forEach(a=>{const c=a.some(({name:u})=>s(u)==="dynamiczone");l[i]||(l[i]=[]),c?(i=i===0&&be()(l[0])?0:i+1,l[i]||(l[i]=[]),l[i].push(a),i+=1):l[i].push(a)}),l.filter(a=>a.length>0)};var xd=g(44908),Pd=g.n(xd),wd=g(94654),rs=g.n(wd);const Fd=(e,o)=>{const r=s=>{const i=(0,h.ZT)(e,[{action:`plugin::content-manager.explorer.${s}`,subject:o}]);return Pd()(rs()(i,"properties.fields"))};return{createActionAllowedFields:r("create"),readActionAllowedFields:r("read"),updateActionAllowedFields:r("update")}},Sd=e=>{if(!e)return[];const r=[...e.contentType.layouts.edit,...Object.values(e.components).flatMap(i=>i.layouts.edit)].flat().filter(i=>i.fieldSchema.customField).map(i=>i.fieldSchema.customField);return[...new Set(r)]};function Ad(e,o){return r=>{const s=o();return t.createElement(e,{...r,...s})}}const Od=Ad;function $d(){const{hasDraftAndPublish:e,modifiedData:o}=(0,h.Wq)();let r={};return e&&(r=be()(o.publishedAt)?{status:"draft"}:{status:"published"}),{hasDraftAndPublish:e,trackerProperty:r}}const Zd=$d,ss=({isCreatingEntry:e,onDelete:o,onDeleteSucceeded:r,trackerProperty:s})=>{const[i,l]=(0,t.useState)(!1),[a,c]=(0,t.useState)(!1),{formatMessage:u}=(0,Q.Z)(),{formatAPIError:d}=(0,h.So)(C),m=(0,h.lm)(),f=()=>l(y=>!y),p=async()=>{try{c(!0),await o(s),c(!1),f(),r()}catch(y){c(!1),f(),m({type:"warning",message:d(y)})}};return e?null:t.createElement(t.Fragment,null,t.createElement(ue.z,{onClick:f,size:"S",startIcon:t.createElement(we.Z,null),variant:"danger-light"},u({id:C("containers.Edit.delete-entry"),defaultMessage:"Delete this entry"})),t.createElement(h.QH,{isConfirmButtonLoading:a,isOpen:i,onConfirm:p,onToggleDialog:f}))};ss.propTypes={isCreatingEntry:n().bool.isRequired,onDelete:n().func.isRequired,onDeleteSucceeded:n().func.isRequired,trackerProperty:n().object.isRequired};const qd=(0,t.memo)(ss,$e()),Nd=Od(qd,Zd),to=({columns:e,customFieldInputs:o})=>t.createElement(De.r,{gap:4},e.map(({fieldSchema:r,labelAction:s,metadatas:i,name:l,size:a,queryInfos:c})=>{if(r.type==="component"){const{component:d,max:m,min:f,repeatable:p=!1,required:y=!1}=r;return t.createElement(fe.P,{col:a,s:12,xs:12,key:d},t.createElement(Ot,{componentUid:d,labelAction:s,isRepeatable:p,intlLabel:{id:i.label,defaultMessage:i.label},max:m,min:f,name:l,required:y}))}return t.createElement(fe.P,{col:a,key:l,s:12,xs:12},t.createElement(Pn,{size:a,fieldSchema:r,keys:l,labelAction:s,metadatas:i,queryInfos:c,customFieldInputs:o}))}));to.defaultProps={customFieldInputs:{}},to.propTypes={columns:n().array.isRequired,customFieldInputs:n().object};const jd=to,no=e=>e["content-manager_editViewLayoutManager"].currentLayout,Bd=(0,lt.P1)(no,e=>Ld(e?.contentType??{})),Wd=(0,lt.P1)(no,e=>Sd(e)),is=Qe.Z.contentManager,zd=[{action:"plugin::content-type-builder.read",subject:null}],oo=({allowedActions:e,isSingleType:o,goBack:r,slug:s,id:i,origin:l,userPermissions:a})=>{const{trackUsage:c}=(0,h.rS)(),{formatMessage:u}=(0,Q.Z)(),{layout:d,formattedContentTypeLayout:m,customFieldUids:f}=(0,le.v9)(T=>({layout:no(T),formattedContentTypeLayout:Bd(T),customFieldUids:Wd(T)})),{isLazyLoading:p,lazyComponentStore:y}=wn(f),{createActionAllowedFields:b,readActionAllowedFields:R,updateActionAllowedFields:k}=Fd(a,s),E=o?is.singleTypesConfigurations:is.collectionTypesConfigurations,v=`/content-manager/${o?"singleType":"collectionType"}/${s}/configurations/edit`,F=o?md:Hc,S=T=>T.every(D=>D.every(x=>x.fieldSchema.type==="dynamiczone"));return p?t.createElement(h.dO,null):t.createElement(F,{allLayoutData:d,slug:s,id:i,origin:l},({componentsDataStructure:T,contentTypeDataStructure:D,data:x,isCreatingEntry:j,isLoadingForData:z,onDelete:Z,onDeleteSucceeded:V,onPost:B,onPublish:K,onDraftRelationCheck:W,onPut:X,onUnpublish:q,redirectionLink:ee,status:M})=>t.createElement(dd,{allowedActions:e,allLayoutData:d,createActionAllowedFields:b,componentsDataStructure:T,contentTypeDataStructure:D,from:ee,initialValues:x,isCreatingEntry:j,isLoadingForData:z,isSingleType:o,onPost:B,onPublish:K,onDraftRelationCheck:W,onPut:X,onUnpublish:q,readActionAllowedFields:R,redirectToPreviousPage:r,slug:s,status:M,updateActionAllowedFields:k},t.createElement(Se.o,{"aria-busy":M!=="resolved"},t.createElement(Id,{allowedActions:e}),t.createElement(Je.D,null,t.createElement(De.r,{gap:4},t.createElement(fe.P,{col:9,s:12},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},m.map((L,Y)=>{if(S(L)){const{0:{0:{name:H,fieldSchema:$,metadatas:O,labelAction:U}}}=L;return t.createElement(A.x,{key:Y},t.createElement(De.r,{gap:4},t.createElement(fe.P,{col:12,s:12,xs:12},t.createElement(Vc,{name:H,fieldSchema:$,labelAction:U,metadatas:O}))))}return t.createElement(A.x,{key:Y,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},L.map((H,$)=>t.createElement(jd,{columns:H,customFieldInputs:y,key:$}))))}))),t.createElement(fe.P,{col:3,s:12},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(Ed,null),t.createElement(A.x,{as:"aside","aria-labelledby":"additional-information",background:"neutral0",borderColor:"neutral150",hasRadius:!0,paddingBottom:4,paddingLeft:4,paddingRight:4,paddingTop:6,shadow:"tableShadow"},t.createElement(Rd,null),t.createElement(St,{area:"contentManager.editView.informations"})),t.createElement(A.x,{as:"aside","aria-labelledby":"links"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(St,{area:"contentManager.editView.right-links",slug:s}),s!=="strapi::administrator"&&t.createElement(h.jW,{permissions:zd},t.createElement(h.Qj,{onClick:()=>{c("willEditEditLayout")},size:"S",startIcon:t.createElement(Ke.Z,null),style:{width:"100%"},to:`/plugins/content-type-builder/content-types/${s}`,variant:"secondary"},u({id:C("link-to-ctb"),defaultMessage:"Edit the model"}))),t.createElement(h.jW,{permissions:E},t.createElement(h.Qj,{size:"S",startIcon:t.createElement(da.Z,null),style:{width:"100%"},to:v,variant:"secondary"},u({id:"app.links.configure-view",defaultMessage:"Configure the view"}))),e.canDelete&&t.createElement(Nd,{isCreatingEntry:j,onDelete:Z,onDeleteSucceeded:V}))))))))))};oo.defaultProps={id:null,isSingleType:!1,origin:null,userPermissions:[]},oo.propTypes={allowedActions:n().shape({canRead:n().bool.isRequired,canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canDelete:n().bool.isRequired}).isRequired,id:n().string,isSingleType:n().bool,goBack:n().func.isRequired,origin:n().string,slug:n().string.isRequired,userPermissions:n().array};const Vd=(0,t.memo)(oo),ro=e=>{const o=(0,t.useMemo)(()=>Ho(e.slug),[e.slug]),{isLoading:r,allowedActions:s}=(0,h.ss)(o,e.userPermissions);return r?t.createElement(h.dO,null):t.createElement(Vd,{...e,allowedActions:s})};ro.defaultProps={permissions:[]},ro.propTypes={permissions:n().array,slug:n().string.isRequired,userPermissions:n().array.isRequired};const Ud=(0,t.memo)(ro,$e()),as=({layout:e,...o})=>{const r=(0,le.v9)(nr),s=(0,le.I0)(),[{query:i}]=(0,h.Kx)(),{runHookWaterfall:l}=(0,h.j1)(),a=mr(i,o.slug,"editView");return(0,t.useEffect)(()=>{const c=l(Ft.Eo,{layout:e,query:i});return s(la(c.layout,i)),()=>{s(aa())}},[e,s,i,l]),!r||!a?t.createElement(h.dO,null):t.createElement(Ud,{...o,userPermissions:a})};as.propTypes={layout:n().shape({components:n().object.isRequired,contentType:n().shape({uid:n().string.isRequired,settings:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().object.isRequired}).isRequired}).isRequired};const Ht=as;var Hd=g(11700),yt=g.n(Hd);const so=e=>e.reduce((o,r)=>o+r.size,0),Gd=e=>e.reduce((o,r,s)=>{const i={rowId:s,rowContent:r};return o.concat(i)},[]),nt=e=>e.reduce((o,r)=>{let s=[];const i=r.rowContent.reduce((c,u)=>{const d=so(c);return u.name==="_TEMP_"||(d+u.size<=12?c.push(u):s.push(u)),c},[]),l=o.length===0?0:Math.max.apply(Math,o.map(c=>c.rowId))+1,a=so(i);if(a<12&&i.push({name:"_TEMP_",size:12-a}),o.push({rowId:l,rowContent:i}),s.length>0){const c=so(s);c<12&&s.push({name:"_TEMP_",size:12-c}),o.push({rowId:l+1,rowContent:s}),s=[]}return o},[]).filter(o=>o.rowContent.length>0).filter(o=>o.rowContent.length===1?o.rowContent[0].name!=="_TEMP_":!0),Qd=e=>e.reduce((o,r)=>{const s=r.rowContent.filter(i=>i.name!=="_TEMP_");return o.concat([s])},[]),ls=e=>{switch(e){case"boolean":case"date":case"integer":case"float":case"biginteger":case"decimal":case"time":return 4;case"json":case"component":case"richtext":case"dynamiczone":return 12;default:return 6}},Kd=(e,o=[])=>o.reduce((r,{rowContent:s})=>{const i=s.find(l=>l.name===e)?.size??null;return i&&(r=i),r},null),Yd=(e,o,r=[])=>r.map(s=>(s.rowContent=s.rowContent.map(i=>i.name===e?{...i,size:o}:i),s)),io={fieldForm:{},componentLayouts:{},metaToEdit:"",initialData:{},metaForm:{},modifiedData:{}},Xd=(e=io,o)=>(0,wt.ZP)(e,r=>{const s=["modifiedData","layouts","edit"];switch(o.type){case"MOVE_ROW":{const i=I()(e,s,[]),{fromIndex:l,toIndex:a}=o;J()(r,s,Dt(i,l,a));break}case"ON_ADD_FIELD":{const i=Me()(e),l=ls(I()(i,["modifiedData","attributes",o.name,"type"],"")),a=I()(i,s,[]).length,c=[...s,a-1,"rowContent"],u=I()(i,c,[]);let d=I()(i,s,[]);Array.isArray(u)?J()(d,[a>0?a-1:0,"rowContent"],[...u,{name:o.name,size:l}]):J()(d,[a>0?a-1:0,"rowContent"],[{name:o.name,size:l}]);const m=nt(d);J()(r,s,m);break}case"ON_CHANGE":{J()(r,["modifiedData",...o.keys],o.value);break}case"ON_CHANGE_META":{J()(r,["metaForm","metadata",...o.keys],o.value);break}case"ON_CHANGE_SIZE":{J()(r,["metaForm","size"],o.value);break}case"ON_RESET":{r.modifiedData=e.initialData;break}case"REMOVE_FIELD":{const i=I()(e,[...s,o.rowIndex,"rowContent"],[]);let l=Me()(e);if(i.length===1||i.length===2&&I()(i,[1,"name"],"")==="_TEMP_"){const c=I()(e,s,[]);J()(l,s,c.filter((u,d)=>o.rowIndex!==d))}else J()(l,[...s,o.rowIndex,"rowContent"],i.filter((c,u)=>u!==o.fieldIndex));const a=nt(I()(l,s,[]));J()(r,s,a);break}case"REORDER_DIFF_ROW":{const i=I()(e,[...s,o.dragRowIndex,"rowContent"],[]),l=I()(e,[...s,o.hoverRowIndex,"rowContent"],[]),a=I()(e,[...s,o.dragRowIndex,"rowContent",o.dragIndex],{}),c=[...l,a];let u=Me()(e);J()(u,[...s,o.dragRowIndex,"rowContent"],i.filter((m,f)=>o.dragIndex!==f)),J()(u,[...s,o.hoverRowIndex,"rowContent"],Dt(c,c.length-1,o.hoverIndex));const d=nt(I()(u,s,[]));J()(r,s,d);break}case"REORDER_ROW":{const i=Me()(e),l=I()(i,[...s,o.dragRowIndex,"rowContent"],[]);J()(i,[...s,o.dragRowIndex,"rowContent"],Dt(l,o.dragIndex,o.hoverIndex));const a=nt(I()(i,s,[]));J()(r,s,a);break}case"SET_FIELD_TO_EDIT":{r.metaToEdit=o.name,r.metaForm={metadata:I()(e,["modifiedData","metadatas",o.name,"edit"],{}),size:Kd(o.name,e.modifiedData?.layouts?.edit)??ls()};break}case"SUBMIT_META_FORM":{J()(r,["modifiedData","metadatas",e.metaToEdit,"edit"],e.metaForm.metadata);const i=Me()(I()(e,s,[])),l=Yd(e.metaToEdit,e.metaForm.size,i);l.length>0&&J()(r,s,nt(l));break}case"SUBMIT_SUCCEEDED":{r.initialData=e.modifiedData;break}case"UNSET_FIELD_TO_EDIT":{r.metaToEdit="",r.metaForm={};break}default:return r}}),Jd=(e,o,r)=>{let s=Me()(o);return J()(s,["layouts","edit"],nt(Gd(o.layouts.edit))),{...e,initialData:s,modifiedData:s,componentLayouts:r}};var Pe=g(17205),cs=g(78114);const ds=({componentUid:e})=>{const{componentLayouts:o}=Ve(),{formatMessage:r}=(0,Q.Z)(),s=I()(o,[e],{}),i=I()(s,["layouts","edit"],[]);return t.createElement(A.x,{padding:3},i.map((l,a)=>t.createElement(De.r,{gap:4,key:a},l.map(c=>t.createElement(fe.P,{key:c.name,col:c.size},t.createElement(A.x,{paddingTop:2},t.createElement(w.k,{alignItems:"center",background:"neutral0",paddingLeft:3,paddingRight:3,height:`${32/16}rem`,hasRadius:!0,borderColor:"neutral200"},t.createElement(G.Z,{textColor:"neutral800"},c.name))))))),t.createElement(A.x,{paddingTop:2},t.createElement(h.rU,{startIcon:t.createElement(cs.Z,null),to:`/content-manager/components/${e}/configurations/edit`},r({id:C("components.FieldItem.linkToComponentLayout"),defaultMessage:"Set the component's layout"}))))};ds.propTypes={componentUid:n().string.isRequired};const _d=ds;var ot=g(73727);const eu=(0,N.ZP)(w.k)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-color: ${e.colors.primary200};

      ${G.Z} {
          color: ${e.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,us=({components:e})=>{const{componentLayouts:o}=Ve();return t.createElement(w.k,{gap:2,overflow:"scroll hidden",padding:3},e.map(r=>t.createElement(eu,{hasRadius:!0,background:"neutral0",justifyContent:"center",alignItems:"center",height:`${84/16}rem`,minWidth:`${140/16}rem`,key:r,padding:2,direction:"column",borderColor:"neutral200",as:ot.rU,to:`/content-manager/components/${r}/configurations/edit`},t.createElement(qt,null),t.createElement(A.x,{paddingTop:1},t.createElement(G.Z,{fontSize:1,textColor:"neutral600",fontWeight:"bold"},o?.[r]?.info?.displayName??"")))))};us.propTypes={components:n().arrayOf(n().string).isRequired};const tu=us,ms=(0,N.ZP)(ge.h)`
  background-color: transparent;
  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,ao=({attribute:e,onEditField:o,onDeleteField:r,children:s})=>{const{formatMessage:i}=(0,Q.Z)();return t.createElement(A.x,{overflow:"hidden",width:"100%"},t.createElement(w.k,{paddingLeft:3,alignItems:"center",justifyContent:"space-between"},t.createElement(G.Z,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0},s),t.createElement(w.k,null,t.createElement(ms,{label:i({id:C("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:s}),onClick:o,icon:t.createElement(Ke.Z,null),noBorder:!0}),t.createElement(ms,{label:i({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:s}),"data-testid":"delete-field",onClick:r,icon:t.createElement(we.Z,null),noBorder:!0}))),e?.type==="component"&&t.createElement(_d,{componentUid:e.component}),e?.type==="dynamiczone"&&t.createElement(tu,{components:e.components}))};ao.defaultProps={attribute:void 0},ao.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),onEditField:n().func.isRequired,onDeleteField:n().func.isRequired,children:n().string.isRequired};const nu=ao,ou=(0,N.ZP)(w.k)`
  position: relative;
  ${({isFirst:e,isLast:o,hasHorizontalPadding:r})=>e?`
        padding-right: 4px;
      `:o?`
        padding-left: 4px;
      `:r?`
        padding: 0 4px;
      `:""}
  ${({showRightCarret:e,showLeftCarret:o,theme:r})=>e?`
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${r.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:o?`
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${r.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:""};
`,ru=(0,N.ZP)(Ae.Z)`
  height: ${12/16}rem;
  width: ${12/16}rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,su=(0,N.ZP)(w.k)`
  display: ${({dragStart:e})=>e?"none":"flex"};
  opacity: ${({isDragging:e,isFullSize:o,isHidden:r})=>e&&!o?.2:e&&o||r?0:1};
`,iu=(0,N.ZP)(w.k)`
  cursor: all-scroll;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,lo=({attribute:e,children:o,index:r,lastIndex:s,moveItem:i,moveRow:l,name:a,onDeleteField:c,onEditField:u,rowIndex:d,size:m})=>{const[f,p]=(0,t.useState)(!1),y=a==="_TEMP_",{setIsDraggingSibling:b}=Ve(),R=m===12,k=(0,t.useRef)(null),E=(0,t.useRef)(null),[{clientOffset:v,isOver:F},S]=(0,We.useDrop)({accept:Ce.EDIT_FIELD,hover(q,ee){if(!E.current||q.size!==12)return;const M=ee.getItem().index,L=r,Y=ee.getItem().rowIndex,H=d;if(M===L&&Y===H)return;const $=E.current.getBoundingClientRect(),O=($.bottom-$.top)/2,se=ee.getClientOffset().y-$.top;Y<H&&se<O||Y>H&&se>O||(l(Y,H),q.rowIndex=H,q.itemIndex=L)},drop(q,ee){if(!E.current)return;const M=ee.getItem().index,L=r,Y=ee.getItem().rowIndex,H=d;if(q.size===12||M===L&&Y===H)return;const $=E.current.getBoundingClientRect();if(Math.abs(ee.getClientOffset().x-$.left)>$.width/1.8){i(M,L+1,Y,H),q.itemIndex=L+1,q.rowIndex=H;return}i(M,L,Y,H),q.itemIndex=L,q.rowIndex=H},collect:q=>({canDrop:q.canDrop(),clientOffset:q.getClientOffset(),isOver:q.isOver(),isOverCurrent:q.isOver({shallow:!0}),itemType:q.getItemType()})}),[{isDragging:T,getItem:D},x,j]=(0,We.useDrag)({type:Ce.EDIT_FIELD,item(){return b(!0),{index:r,labelField:o,rowIndex:d,name:a,size:m}},canDrag(){return a!=="_TEMP_"},collect:q=>({isDragging:q.isDragging(),getItem:q.getItem()}),end(){b(!1)}});(0,t.useEffect)(()=>{j((0,at.rX)(),{captureDraggingState:!0})},[j]);const z={dragRef:x(k),dropRef:S(E)};let Z=!1,V=!1;if(E.current&&v){const q=E.current.getBoundingClientRect();Z=F&&D.size!==12&&Math.abs(v.x-q.left)<q.width/2,V=F&&D.size!==12&&Math.abs(v.x-q.left)>q.width/2,a==="_TEMP_"&&(Z=F&&D.size!==12,V=!1)}const B=()=>e&&R?`${74/16}rem`:`${32/16}rem`,K=r===0&&!R,W=r===s&&!R,X=r!==0&&!R;return t.createElement(fe.P,{col:m},t.createElement(ou,{ref:z.dropRef,showLeftCarret:Z,showRightCarret:V,isFirst:K,isLast:W,hasHorizontalPadding:X,onDrag:()=>{R&&!f&&p(!0)},onDragEnd:()=>{R&&p(!1)}},f&&R&&t.createElement(A.x,{width:"100%",height:"2px",background:"primary600"}),t.createElement(su,{width:R&&f?0:"100%",borderColor:"neutral150",hasRadius:!0,background:"neutral100",minHeight:B(),alignItems:"stretch",isDragging:T,dragStart:f,isFullSize:R,isHidden:y},t.createElement(iu,{as:"span",type:"button",ref:z.dragRef,onClick:q=>q.stopPropagation(),alignItems:"center",paddingLeft:3,paddingRight:3,tabIndex:-1},t.createElement(ru,null)),!y&&t.createElement(nu,{attribute:e,onEditField:u,onDeleteField:c},o))))};lo.defaultProps={attribute:void 0},lo.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),children:n().string.isRequired,index:n().number.isRequired,moveItem:n().func.isRequired,moveRow:n().func.isRequired,name:n().string.isRequired,onDeleteField:n().func.isRequired,onEditField:n().func.isRequired,rowIndex:n().number.isRequired,lastIndex:n().number.isRequired,size:n().number.isRequired};const au=lo,ps=({rowItem:e,onRemoveField:o,rowId:r,rowIndex:s,index:i,lastIndex:l})=>{const{setEditFieldToSelect:a,attributes:c,modifiedData:u,moveRow:d,moveItem:m}=Ve(),f=I()(c,[e.name],{}),p=I()(u,["metadatas",e.name,"edit","label"],"");return t.createElement(au,{onEditField:()=>a(e.name),onDeleteField:()=>o(r,i),attribute:f,index:i,lastIndex:l,rowIndex:s,name:e.name,size:e.size,moveRow:d,moveItem:m},p||e.name)};ps.propTypes={index:n().number.isRequired,lastIndex:n().number.isRequired,onRemoveField:n().func.isRequired,rowId:n().number.isRequired,rowIndex:n().number.isRequired,rowItem:n().object.isRequired};const lu=ps,gs=({row:e,onRemoveField:o,rowIndex:r})=>t.createElement(De.r,null,e.rowContent.map((s,i)=>t.createElement(lu,{key:s.name,rowItem:s,index:i,rowId:e.rowId,onRemoveField:o,rowIndex:r,lastIndex:e.rowContent.length-1})));gs.propTypes={onRemoveField:n().func.isRequired,row:n().object.isRequired,rowIndex:n().number.isRequired};const cu=gs,du=[{action:"plugin::content-type-builder.read",subject:null}],uu=()=>{const{trackUsage:e}=(0,h.rS)(),{formatMessage:o}=(0,Q.Z)(),{slug:r,modifiedData:s,isContentTypeView:i}=Ve(),l=i?"content-types":"components",a=`/plugins/content-type-builder/${l==="content-types"?l:"component-categories"}`,c=I()(s,"category",""),u=l==="content-types"?r:`${c}/${r}`,d=()=>{e("willEditEditLayout")};return r==="strapi::administrator"?null:t.createElement(h.jW,{permissions:du},t.createElement(h.Qj,{to:`${a}/${u}`,onClick:d,size:"S",startIcon:t.createElement(Ke.Z,null),variant:"secondary"},o({id:C(`edit-settings-view.link-to-ctb.${l}`),defaultMessage:"Edit the content type"})))},fs=({editLayout:e,fields:o,onRemoveField:r,onAddField:s})=>{const{formatMessage:i}=(0,Q.Z)();return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(w.k,{justifyContent:"space-between"},t.createElement("div",null,t.createElement(A.x,null,t.createElement(G.Z,{fontWeight:"bold"},i({id:C("containers.ListPage.displayedFields"),defaultMessage:"Displayed fields"}))),t.createElement(A.x,null,t.createElement(G.Z,{variant:"pi",textColor:"neutral600"},i({id:"containers.SettingPage.editSettings.description",defaultMessage:"Drag & drop the fields to build the layout"})))),t.createElement(uu,null)),t.createElement(A.x,{padding:4,hasRadius:!0,borderStyle:"dashed",borderWidth:"1px",borderColor:"neutral300"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.map((l,a)=>t.createElement(cu,{key:l.rowId,row:l,rowIndex:a,onRemoveField:r})),t.createElement(Pe.O,{id:"label",label:i({id:C("containers.SettingPage.add.field"),defaultMessage:"Insert another field"}),as:ue.z,"data-testid":"add-field",fullWidth:!0,startIcon:t.createElement(pt.Z,null),endIcon:null,variant:"secondary",disabled:o.length===0},o.map(l=>t.createElement(Pe.s,{key:l,onClick:()=>s(l)},l))))))};fs.propTypes={editLayout:n().array.isRequired,fields:n().array.isRequired,onAddField:n().func.isRequired,onRemoveField:n().func.isRequired};const mu=fs;var hs=g(42866),ys=g(24969),bs=g(59946),Es=g(36856),bt=g(31666),pu=g(14484),Gt=g(34668),gu=g(73145),Cs=g(82574),co=g(74525),fu=g(48394),uo=g(21210),hu=g(60133),yu=g(55884),bu=g(85038),Eu=g(65531);const Rs={biginteger:t.createElement(bt.Z,null),boolean:t.createElement(pu.Z,null),date:t.createElement(Gt.Z,null),datetime:t.createElement(Gt.Z,null),decimal:t.createElement(bt.Z,null),email:t.createElement(gu.Z,null),enum:t.createElement(Cs.Z,null),enumeration:t.createElement(Cs.Z,null),file:t.createElement(co.Z,null),files:t.createElement(co.Z,null),float:t.createElement(bt.Z,null),integer:t.createElement(bt.Z,null),media:t.createElement(co.Z,null),number:t.createElement(bt.Z,null),relation:t.createElement(fu.Z,null),string:t.createElement(uo.Z,null),text:t.createElement(uo.Z,null),richtext:t.createElement(uo.Z,null),time:t.createElement(Gt.Z,null),timestamp:t.createElement(Gt.Z,null),json:t.createElement(hu.Z,null),uid:t.createElement(yu.Z,null),component:t.createElement(bu.Z,null),dynamiczone:t.createElement(Eu.Z,null)},mo=({type:e,customFieldUid:o})=>{const r=(0,h.mZ)();let s=Rs[e];if(o){const l=r.get(o).icon;l&&(s=t.createElement(A.x,{marginRight:3,width:7,height:6},t.createElement(l,null)))}return Rs[e]?s:null};mo.defaultProps={customFieldUid:null},mo.propTypes={type:n().string.isRequired,customFieldUid:n().string};const vs=mo,Cu=e=>e.reduce((o,r)=>{const s=r?.attributes??{},i=Object.keys(s).filter(l=>!["boolean","component","dynamiczone","json","media","password","relation","text","richtext"].includes(s?.[l]?.type??""));return o[r.uid]=i,o},{}),Ts=e=>{let o;switch(e){case"description":case"label":case"placeholder":o="text";break;case"mainField":o="select";break;case"editable":o="bool";break;default:o=""}const r=C(e==="mainField"?"containers.SettingPage.editSettings.entry.title":`form.Input.${e}`);return{type:o,label:{id:r}}};var Et=g(20707);const po=({type:e,options:o,onChange:r,value:s,name:i,...l})=>{const{formatMessage:a}=(0,Q.Z)();switch(e){case"text":return t.createElement(Mn.o,{onChange:r,value:s,name:i,...l});case"bool":return t.createElement(Et.s,{onChange:c=>{r({target:{name:i,value:c.target.checked}})},checked:s,name:i,onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),...l});case"select":return t.createElement(xe.P,{value:s,name:i,onChange:c=>r({target:{name:i,value:c}}),...l},o.map(c=>t.createElement(he.W,{key:c,value:c},c)));default:return null}};po.defaultProps={options:void 0},po.propTypes={type:n().string.isRequired,options:n().arrayOf(n().string),onChange:n().func.isRequired,value:n().oneOfType([n().string,n().bool]).isRequired,name:n().string.isRequired};const Ru=po,vu=[[4,"33%"],[6,"50%"],[8,"66%"],[12,"100%"]],Tu=["dynamiczone","component","json","richtext"],Mu=[1,5,10,15,30,60],Du=["datetime","time"],Ms=({onMetaChange:e,onSizeChange:o})=>{const{formatMessage:r}=(0,Q.Z)(),{modifiedData:s,selectedField:i,attributes:l,fieldForm:a}=Ve(),c=(0,t.useMemo)(sn,[]),{schemas:u}=(0,le.v9)(E=>c(E),le.wU),d=(0,t.useMemo)(()=>{if(!i)return[];const E=I()(s,["metadatas",i,"edit"],{});return Object.keys(E).filter(v=>v!=="visible")},[i,s]),m=(0,t.useMemo)(()=>Cu(u),[u]),f=(0,t.useCallback)(E=>{if(E!=="relation"&&E!=="component")return[];const v=E==="component"?"component":"targetModel",F=I()(s,["attributes",i,v],"");return I()(m,[F],[])},[i,m,s]),p=d.map(E=>{const v=I()(l,[i,"type"]);return["component","dynamiczone"].includes(v)&&!["label","description"].includes(E)||v==="component"&&E!=="label"||["media","json","boolean"].includes(v)&&E==="placeholder"||E==="step"?null:t.createElement(fe.P,{col:6,key:E},t.createElement(Ru,{type:Ts(E).type,hint:E==="mainField"?r({id:C("containers.SettingPage.editSettings.relation-field.description")}):"",label:r({id:I()(Ts(E),"label.id","app.utils.defaultMessage")}),name:E,onChange:e,value:I()(a,["metadata",E],""),options:f(v)}))}),y=!Tu.includes(l[i].type),b=t.createElement(fe.P,{col:6,key:"size"},t.createElement(xe.P,{value:a?.size,name:"size",onChange:E=>{o({name:i,value:E})},label:r({id:C("containers.SettingPage.editSettings.size.label"),defaultMessage:"Size"})},vu.map(([E,v])=>t.createElement(he.W,{key:E,value:E},v)))),R=Du.includes(l[i].type),k=t.createElement(fe.P,{col:6,key:"step"},t.createElement(xe.P,{value:I()(a,["metadata","step"],1),name:"step",onChange:E=>e({target:{name:"step",value:E}}),label:r({id:C("containers.SettingPage.editSettings.step.label"),defaultMessage:"Time interval (minutes)"})},Mu.map(E=>t.createElement(he.W,{key:E,value:E},E))));return t.createElement(t.Fragment,null,p,y&&b,R&&k)};Ms.propTypes={onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired};const ku=Ms,Iu=(0,N.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:e})=>e.spaces[3]};
  }
`,go=({onToggle:e,onMetaChange:o,onSizeChange:r,onSubmit:s,type:i,customFieldUid:l})=>{const{selectedField:a}=Ve(),{formatMessage:c}=(0,Q.Z)(),u=()=>i==="timestamp"?"date":["decimal","float","integer","biginter"].includes(i)?"number":i;return t.createElement(hs.P,{onClose:e,labelledBy:"title"},t.createElement("form",{onSubmit:s},t.createElement(ys.x,null,t.createElement(Iu,null,t.createElement(vs,{type:u(),customFieldUid:l}),t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:C("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:yt()(a)})))),t.createElement(bs.f,null,t.createElement(De.r,{gap:4},t.createElement(ku,{onMetaChange:o,onSizeChange:r}))),t.createElement(Es.m,{startActions:t.createElement(ue.z,{onClick:e,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ue.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};go.defaultProps={customFieldUid:null},go.propTypes={customFieldUid:n().string,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired,type:n().string.isRequired};const Lu=go,xu=(e,o,r)=>{const{put:s}=(0,h.tg)();return s(ce(r?`content-types/${o}/configuration`:`components/${o}/configuration`),e)},fo=({mainLayout:e,components:o,isContentTypeView:r,slug:s,updateLayout:i})=>{const[l,a]=(0,t.useReducer)(Xd,io,()=>Jd(io,e,o)),[c,u]=(0,t.useState)(!1),{trackUsage:d}=(0,h.rS)(),m=(0,h.lm)(),{goBack:f}=(0,ie.k6)(),[p,y]=(0,t.useState)(!1),[b,R]=(0,t.useState)(!1),{componentLayouts:k,initialData:E,modifiedData:v,metaToEdit:F,metaForm:S}=l,{formatMessage:T}=(0,Q.Z)(),D=I()(e,["info","displayName"],""),x=I()(v,["attributes"],{}),j=Object.keys(x).filter(P=>{const oe=I()(x,[P,"type"],"");return!["dynamiczone","json","text","relation","component","boolean","media","password","richtext","timestamp"].includes(oe)&&!!oe}),z=I()(v,["layouts","edit"],[]),Z=rs()(z,"rowContent"),V=Object.keys(v.attributes).filter(P=>I()(v,["metadatas",P,"edit","visible"],!1)===!0).filter(P=>Z.findIndex(oe=>oe.name===P)===-1).sort(),B=({target:{name:P,value:oe}})=>{a({type:"ON_CHANGE",keys:P.split("."),value:oe})},K=()=>{y(P=>!P)},W=()=>{R(P=>!P)},X=({target:{name:P,value:oe}})=>{a({type:"ON_CHANGE_META",keys:P.split("."),value:oe})},q=({name:P,value:oe})=>{a({type:"ON_CHANGE_SIZE",name:P,value:oe})},ee=P=>{P.preventDefault(),a({type:"SUBMIT_META_FORM"}),K()},M=P=>{P.preventDefault(),W()},L=(0,Ue.useMutation)(P=>xu(P,s,r),{onSuccess({data:P}){i&&i(P.data),a({type:"SUBMIT_SUCCEEDED"}),W(),d("didEditEditSettings")},onError(){m({type:"warning",message:{id:"notification.error"}})}}),{isLoading:Y}=L,H=()=>{const P=kn()(Me()(v),["layouts","metadatas","settings"]);J()(P,"layouts.edit",Qd(P.layouts.edit)),L.mutate(P)},$=(P,oe)=>{a({type:"MOVE_RELATION",fromIndex:P,toIndex:oe})},O=(P,oe)=>{a({type:"MOVE_FIELD",fromIndex:P,toIndex:oe})},U=(P,oe,de,ye)=>{a(de===ye?{type:"REORDER_ROW",dragRowIndex:de,dragIndex:P,hoverIndex:oe}:{type:"REORDER_DIFF_ROW",dragIndex:P,hoverIndex:oe,dragRowIndex:de,hoverRowIndex:ye})},se=(P,oe)=>{a({type:"MOVE_ROW",fromIndex:P,toIndex:oe})};return t.createElement($o,{isContentTypeView:r,attributes:x,modifiedData:v,slug:s,componentLayouts:k,selectedField:F,fieldForm:S,onMoveRelation:$,onMoveField:O,moveRow:se,moveItem:U,setEditFieldToSelect:P=>{a({type:"SET_FIELD_TO_EDIT",name:P}),K()},isDraggingSibling:c,setIsDraggingSibling:u},t.createElement(Se.o,null,t.createElement("form",{onSubmit:M},t.createElement(Be.T,{title:T({id:C("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:`Configure the view - ${yt()(D)}`},{name:yt()(D)}),subtitle:T({id:C("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),defaultMessage:"Customize how the edit view will look like."}),navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Wt.Z,null),onClick:P=>{P.preventDefault(),f()},to:"/"},T({id:"global.back",defaultMessage:"Back"})),primaryAction:t.createElement(ue.z,{disabled:gt()(E,v),startIcon:t.createElement(tt.Z,null),type:"submit"},T({id:"global.save",defaultMessage:"Save"}))}),t.createElement(Je.D,null,t.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},T({id:C("containers.SettingPage.settings"),defaultMessage:"Settings"})),t.createElement(De.r,null,t.createElement(fe.P,{col:6,s:12},t.createElement(xe.P,{label:T({id:C("containers.SettingPage.editSettings.entry.title"),defaultMessage:"Entry title"}),hint:T({id:C("containers.SettingPage.editSettings.entry.title.description"),defaultMessage:"Set the display field of your entry"}),onChange:P=>{B({target:{name:"settings.mainField",value:P===""?null:P}})},value:v.settings.mainField},j.map(P=>t.createElement(he.W,{key:P,value:P},P))))),t.createElement(A.x,{paddingTop:2,paddingBottom:2},t.createElement(Jn.i,null)),t.createElement(G.Z,{variant:"delta",as:"h3"},T({id:C("containers.SettingPage.view"),defaultMessage:"View"})),t.createElement(mu,{attributes:x,editLayout:z,fields:V,onAddField:P=>{a({type:"ON_ADD_FIELD",name:P})},onRemoveField:(P,oe)=>{a({type:"REMOVE_FIELD",rowIndex:P,fieldIndex:oe})}})))),t.createElement(h.QH,{bodyText:{id:C("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:t.createElement(tt.Z,null),isConfirmButtonLoading:Y,isOpen:b,onToggleDialog:W,onConfirm:H,variantRightButton:"success-light"})),p&&t.createElement(Lu,{onSubmit:ee,onToggle:K,onMetaChange:X,onSizeChange:q,type:I()(x,[F,"type"],""),customFieldUid:I()(x,[F,"customField"],"")})))};fo.defaultProps={isContentTypeView:!1,updateLayout:null},fo.propTypes={components:n().object.isRequired,isContentTypeView:n().bool,mainLayout:n().shape({attributes:n().object.isRequired,info:n().object.isRequired,layouts:n().shape({list:n().array.isRequired,edit:n().array.isRequired}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired}).isRequired,slug:n().string.isRequired,updateLayout:n().func};const ho=fo;var rt=g(28933);const Pu=()=>({type:rt.ZA}),wu=(e,o)=>({type:rt.Id,pagination:e,data:o}),Fu=()=>({type:rt.MP});function Su(){return{type:rt.c2}}const Au=({components:e,contentType:o})=>{const{layouts:r}=o;return{contentType:o,components:e,displayedHeaders:r.list,type:rt.Zz}},yo=e=>({type:rt.Rp,target:e});var Ds=g(14890),bo=g(14087),ks=g(36989),Ou=g(37562);const $u=()=>e=>e["content-manager_listView"]||Ou.E,Zu=()=>(0,lt.P1)($u(),e=>e),Is=e=>{const{displayedHeaders:o}=e["content-manager_listView"];return o},qu=Zu;var Nu=g(15234),ju=g(79031),Eo=g(37909),Bu=g(41451),Wu=g(65186),zu=g(42274);const Vu=(0,N.ZP)(w.k)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`,Ls=({children:e,...o})=>t.createElement(Vu,{justifyContent:"center",alignItems:"center",as:"span",...o},t.createElement(G.Z,{variant:"sigma",textColor:"neutral600"},e));Ls.propTypes={children:n().string.isRequired};const xs=Ls,Co=({url:e,mime:o,alternativeText:r,name:s,ext:i,formats:l})=>{const a=(0,h.CR)(e);if(o.includes("image")){const d=l?.thumbnail?.url||null,m=(0,h.CR)(d)||a;return t.createElement(zu.q,{src:m,alt:r||s,preview:!0})}const c=(0,h.mD)(i),u=s.length>100?`${s.substring(0,100)}...`:s;return t.createElement(Pt.u,{description:u},t.createElement(xs,null,c))};Co.defaultProps={alternativeText:null,formats:null},Co.propTypes={alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired};const Ps=Co;var Uu=g(56704);const ws=({value:e})=>t.createElement(Uu.H,null,e.map((o,r)=>{const s=`${o.id}${r}`;if(r===3){const i=`+${e.length-3}`;return t.createElement(xs,{key:s,preview:!1},i)}return r>3?null:t.createElement(Ps,{key:s,...o})}));ws.propTypes={value:n().arrayOf(n().shape({alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired})).isRequired};const Hu=ws;var Fs=g(30190),Gu=g(88655),Qu=g(23855);const Ss=({type:e,value:o})=>{const{formatDate:r,formatTime:s,formatNumber:i}=(0,Q.Z)();let l=o;if(e==="date"&&(l=r((0,Qu.Z)(o),{dateStyle:"full"})),e==="datetime"&&(l=r(o,{dateStyle:"full",timeStyle:"short"})),e==="time"){const[a,c,u]=o.split(":"),d=new Date;d.setHours(a),d.setMinutes(c),d.setSeconds(u),l=s(d,{numeric:"auto",style:"short"})}return["float","decimal"].includes(e)&&(l=i(o,{maximumFractionDigits:20})),["integer","biginteger"].includes(e)&&(l=i(o,{maximumFractionDigits:0})),Wr()(l)};Ss.propTypes={type:n().string.isRequired,value:n().any.isRequired};const st=Ss,Ku=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,Yu=async(e,o,r)=>{const{data:{results:s,pagination:i}}=await r(e);return o(),{results:s,pagination:i}},As=({fieldSchema:e,metadatas:o,name:r,entityId:s,value:i,contentType:l})=>{const{formatMessage:a}=(0,Q.Z)(),{notifyStatus:c}=(0,bo.G)(),u=(0,t.useMemo)(()=>ce(`relations/${l.uid}/${s}/${r.split(".")[0]}`),[s,r,l]),[d,m]=(0,t.useState)(!1),{get:f}=(0,h.kY)(),p=t.createElement(w.k,{gap:1,wrap:"nowrap"},t.createElement(Fs.C,null,i.count),a({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:i.count})),y=()=>{const k=a({id:C("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"});c(k)},{data:b,status:R}=(0,Ue.useQuery)([e.targetModel,s],()=>Yu(u,y,f),{enabled:d,staleTime:0,select:k=>({...k,results:[...k.results].reverse()})});return t.createElement(A.x,{...h.UW},t.createElement(Pe.O,{label:p,size:"S",onOpen:()=>m(!0),onClose:()=>m(!1)},R!=="success"&&t.createElement(Pe.s,{"aria-disabled":!0},t.createElement(Gu.a,{small:!0},a({id:C("DynamicTable.relation-loading"),defaultMessage:"Relations are loading"}))),R==="success"&&t.createElement(t.Fragment,null,b?.results.map(k=>t.createElement(Pe.s,{key:k.id,"aria-disabled":!0},t.createElement(Ku,{ellipsis:!0},t.createElement(st,{type:o.mainField.schema.type,value:k[o.mainField.name]||k.id})))),b?.pagination.total>10&&t.createElement(Pe.s,{"aria-disabled":!0,"aria-label":a({id:C("DynamicTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"})},t.createElement(G.Z,null,"\u2026")))))};As.propTypes={contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({relation:n().string,targetModel:n().string,type:n().string.isRequired}).isRequired,metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,name:n().string.isRequired,entityId:n().oneOfType([n().string,n().number]).isRequired,value:n().object.isRequired};const Xu=As,Ju=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,Os=({metadatas:e,value:o})=>t.createElement(Ju,{textColor:"neutral800",ellipsis:!0},t.createElement(st,{type:e.mainField.schema.type,value:o[e.mainField.name]??o.id}));Os.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,value:n().object.isRequired};const _u=Os,em=(0,N.ZP)(G.Z)`
  max-width: 500px;
`,$s=({value:e,metadatas:o})=>{const{formatMessage:r}=(0,Q.Z)(),{mainField:{type:s,name:i}}=o,l=t.createElement(t.Fragment,null,t.createElement(Fs.C,null,e.length)," ",r({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:e.length}));return t.createElement(A.x,{...h.UW},t.createElement(Pe.O,{label:l,size:"S"},e.map(a=>t.createElement(Pe.s,{key:a.id,"aria-disabled":!0},t.createElement(em,{ellipsis:!0},t.createElement(st,{type:s,value:a[i]||a.id}))))))};$s.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().array.isRequired};const tm=$s,nm=(0,N.ZP)(G.Z)`
  max-width: 250px;
`,Zs=({value:e,metadatas:o})=>{const{mainField:r}=o,s=e[r.name];return t.createElement(Pt.u,{label:s},t.createElement(nm,{textColor:"neutral800",ellipsis:!0},t.createElement(st,{type:r.type,value:s})))};Zs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().object.isRequired};const om=Zs;var rm=g(81763),qs=g.n(rm);function Ns(e){return["oneToOne","manyToOne","oneToOneMorph"].includes(e)}function sm(e,o,r,s){if(e==="component"){const{mainField:{name:i,type:l}}=r;if(s?.repeatable)return o.length>0;const a=o?.[i];return i==="id"&&![void 0,null].includes(a)?!0:ft(l)&&l!=="biginteger"&&i!=="id"?qs()(a):!be()(a)}return e==="relation"?Ns(s.relation)?!be()(o):o?.count>0:ft(e)&&e!=="biginteger"?qs()(o):e==="boolean"?o!==null:!be()(o)}const js=(0,N.ZP)(G.Z)`
  max-width: 300px;
`,Ro=({content:e,fieldSchema:o,metadatas:r,name:s,rowId:i,contentType:l})=>{const{type:a}=o;if(!sm(a,e,r,o))return t.createElement(G.Z,{textColor:"neutral800"},"-");switch(a){case"media":return o.multiple?t.createElement(Hu,{value:e}):t.createElement(Ps,{...e});case"relation":return Ns(o.relation)?t.createElement(_u,{metadatas:r,value:e}):t.createElement(Xu,{fieldSchema:o,metadatas:r,value:e,name:s,entityId:i,contentType:l});case"component":return o.repeatable===!0?t.createElement(tm,{value:e,metadatas:r}):t.createElement(om,{value:e,metadatas:r});case"string":return t.createElement(Pt.u,{description:e},t.createElement(js,{ellipsis:!0,textColor:"neutral800"},t.createElement(st,{type:a,value:e})));default:return t.createElement(js,{ellipsis:!0,textColor:"neutral800"},t.createElement(st,{type:a,value:e}))}};Ro.defaultProps={content:void 0},Ro.propTypes={content:n().any,contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({component:n().string,multiple:n().bool,type:n().string.isRequired,repeatable:n().bool,relation:n().string}).isRequired,metadatas:n().object.isRequired,name:n().string.isRequired,rowId:n().oneOfType([n().string,n().number]).isRequired};const im=Ro,vo=({canCreate:e,canDelete:o,contentType:r,headers:s,entriesToDelete:i,onClickDelete:l,onSelectRow:a,withMainAction:c,withBulkActions:u,rows:d})=>{const{push:m,location:{pathname:f}}=(0,ie.k6)(),{formatMessage:p}=(0,Q.Z)(),{trackUsage:y}=(0,h.rS)(),b=dr();return t.createElement(Nu.p,null,d.map((R,k)=>{const E=i.findIndex(F=>F===R.id)!==-1,v=p({id:"content-manager.components.DynamicTable.row-line",defaultMessage:"item line {number}"},{number:k});return t.createElement(ju.Tr,{key:R.id,...(0,h.X7)({fn(){y("willEditEntryFromList"),m({pathname:`${f}/${R.id}`,state:{from:f},search:b})},condition:u})},c&&t.createElement(Eo.Td,{...h.UW},t.createElement(Bu.C,{"aria-label":p({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,ts.Pp)(R.firstname,R.lastname)}),checked:E,onChange:()=>{a({name:R.id,value:!E})}})),s.map(({key:F,cellFormatter:S,name:T,...D})=>t.createElement(Eo.Td,{key:F},typeof S=="function"?S(R,{key:F,name:T,...D}):t.createElement(im,{content:R[T.split(".")[0]],name:T,contentType:r,...D,rowId:R.id}))),u&&t.createElement(Eo.Td,null,t.createElement(w.k,{justifyContent:"end",...h.UW},t.createElement(ge.h,{forwardedAs:ot.rU,onClick:()=>{y("willEditEntryFromButton")},to:{pathname:`${f}/${R.id}`,state:{from:f},search:b},label:p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:v}),noBorder:!0,icon:t.createElement(Ke.Z,null)}),e&&t.createElement(A.x,{paddingLeft:1},t.createElement(ge.h,{forwardedAs:ot.rU,to:{pathname:`${f}/create/clone/${R.id}`,state:{from:f},search:b},label:p({id:"app.component.table.duplicate",defaultMessage:"Duplicate {target}"},{target:v}),noBorder:!0,icon:t.createElement(Wu.Z,null)})),o&&t.createElement(A.x,{paddingLeft:1},t.createElement(ge.h,{onClick:()=>{y("willDeleteEntryFromList"),l(R.id)},label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:v}),noBorder:!0,icon:t.createElement(we.Z,null)})))))}))};vo.defaultProps={canCreate:!1,canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},vo.propTypes={canCreate:n().bool,canDelete:n().bool,contentType:n().shape({uid:n().string.isRequired}).isRequired,entriesToDelete:n().array,headers:n().array.isRequired,onClickDelete:n().func,onSelectRow:n().func,rows:n().array,withBulkActions:n().bool,withMainAction:n().bool};const am=vo,Bs=({area:e,...o})=>{const r=Cr(e);return r?t.createElement("ul",null,r.map(s=>s.Component(o)?t.createElement(A.x,{key:s.name,padding:3,style:{textAlign:"center"}},t.createElement(s.Component,{...o})):null)):null};Bs.propTypes={area:n().string.isRequired};const Ws=Bs,zs=({isConfirmButtonLoading:e,isOpen:o,onToggleDialog:r,onConfirm:s})=>{const{formatMessage:i}=(0,Q.Z)();return t.createElement(zt.V,{onClose:r,title:i({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:o},t.createElement(Vt.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},i({id:C("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these entries?"}))),t.createElement(w.k,null,t.createElement(Ws,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),t.createElement(Ut.c,{startAction:t.createElement(ue.z,{onClick:r,variant:"tertiary"},i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{onClick:s,variant:"danger-light",startIcon:t.createElement(we.Z,null),id:"confirm-delete",loading:e},i({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};zs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};const lm=zs,Vs=({isConfirmButtonLoading:e,isOpen:o,onToggleDialog:r,onConfirm:s})=>{const{formatMessage:i}=(0,Q.Z)();return t.createElement(zt.V,{onClose:r,title:i({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:o},t.createElement(Vt.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},i({id:"components.popUpWarning.message",defaultMessage:"Are you sure you want to delete this?"}))),t.createElement(w.k,null,t.createElement(Ws,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),t.createElement(Ut.c,{startAction:t.createElement(ue.z,{onClick:r,variant:"tertiary"},i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{onClick:s,variant:"danger-light",startIcon:t.createElement(we.Z,null),id:"confirm-delete",loading:e},i({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Vs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};const cm=Vs,dm=(0,N.ZP)(Jt.q)`
  width: min-content;
`,To=({canCreate:e,canDelete:o,contentTypeName:r,action:s,isBulkable:i,isLoading:l,onConfirmDelete:a,onConfirmDeleteAll:c,layout:u,rows:d})=>{const{runHookWaterfall:m}=(0,h.j1)(),f=u.contentType.options.draftAndPublish||!1,{formatMessage:p}=(0,Q.Z)(),y=(0,le.v9)(Is),b=(0,t.useMemo)(()=>{const k=m(Ft.No,{displayedHeaders:y,layout:u}).displayedHeaders.map(E=>{const{metadatas:v}=E;if(E.fieldSchema.type==="relation"){const F=`${E.name}.${E.metadatas.mainField.name}`;return{...E,metadatas:{...v,label:p({id:C(`containers.ListPage.table-headers.${E.name}`),defaultMessage:v.label})},name:F}}return{...E,metadatas:{...v,label:p({id:C(`containers.ListPage.table-headers.${E.name}`),defaultMessage:v.label})}}});return f?[...k,{key:"__published_at_temp_key__",name:"publishedAt",fieldSchema:{type:"custom"},metadatas:{label:p({id:C("containers.ListPage.table-headers.publishedAt"),defaultMessage:"publishedAt"}),searchable:!1,sortable:!0},cellFormatter(E){const v=E.publishedAt,F=v?"success":"secondary";return t.createElement(dm,{showBullet:!1,variant:F,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${F}700`},p({id:C(`containers.List.${v?"published":"draft"}`),defaultMessage:v?"Published":"Draft"})))}}]:k},[m,y,u,f,p]);return t.createElement(h.tM,{components:{ConfirmDialogDelete:cm,ConfirmDialogDeleteAll:lm},contentType:r,action:s,isLoading:l,headers:b,onConfirmDelete:a,onConfirmDeleteAll:c,onOpenDeleteAllModalTrackedEvent:"willBulkDeleteEntries",rows:d,withBulkActions:!0,withMainAction:o&&i},t.createElement(am,{canCreate:e,canDelete:o,contentType:u.contentType,headers:b,rows:d,withBulkActions:!0,withMainAction:o&&i}))};To.defaultProps={action:void 0},To.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,contentTypeName:n().string.isRequired,action:n().node,isBulkable:n().bool.isRequired,isLoading:n().bool.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,onConfirmDelete:n().func.isRequired,onConfirmDeleteAll:n().func.isRequired,rows:n().array.isRequired};const um=To,mm=["json","component","media","richtext","dynamiczone","password"],pm=["createdAt","updatedAt"],gm=(e,o)=>{const{allPermissions:r}=(0,h.vn)(),s=(0,h.ZT)(r,[{action:"plugin::content-manager.explorer.read",subject:o}]),i=I()(s,["0","properties","fields"],[]);return Object.keys(I()(e,["attributes"]),{}).filter(c=>{const u=I()(e,["attributes",c],{});return!(!u.type||mm.includes(u.type)||!i.includes(c)&&c!=="id"&&!pm.includes(c))}).sort()};var fm=g(89597);const Us=({displayedFilters:e})=>{const[o,r]=(0,t.useState)(!1),{formatMessage:s}=(0,Q.Z)(),i=(0,t.useRef)(),{trackUsage:l}=(0,h.rS)(),a=()=>{o||l("willFilterEntries"),r(c=>!c)};return t.createElement(t.Fragment,null,t.createElement(A.x,{paddingTop:1,paddingBottom:1},t.createElement(ue.z,{variant:"tertiary",ref:i,startIcon:t.createElement(fm.Z,null),onClick:a,size:"S"},s({id:"app.utils.filters",defaultMessage:"Filters"})),o&&t.createElement(h.J5,{displayedFilters:e,isVisible:o,onToggle:a,source:i})),t.createElement(h.W$,{filtersSchema:e}))};Us.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};const hm=Us,Hs=({contentType:e,slug:o,metadatas:r})=>{const{formatMessage:s}=(0,Q.Z)(),l=gm(e,o).map(a=>{const c=e.attributes[a],{type:u,enum:d}=c,m={name:"didFilterEntries",properties:{useRelation:u==="relation"}},{mainField:f,label:p}=r[a].list;return{name:a,metadatas:{label:s({id:p,defaultMessage:p})},fieldSchema:{type:u,options:d,mainField:f},trackedEvent:m}});return t.createElement(hm,{displayedFilters:l})};Hs.propTypes={contentType:n().object.isRequired,metadatas:n().object.isRequired,slug:n().string.isRequired};const ym=Hs,bm=e=>Object.keys(e).reduce((r,s)=>{const i=e[s];return zo(i)&&r.push(s),r},[]).sort(),Gs=({layout:e})=>{const o=(0,le.I0)(),r=(0,le.v9)(Is),{trackUsage:s}=(0,h.rS)(),{formatMessage:i}=(0,Q.Z)(),l=bm(e.contentType.attributes).map(u=>{const d=e.contentType.metadatas[u].list;return{name:u,intlLabel:{id:d.label,defaultMessage:d.label}}}),a=r.map(({name:u})=>u),c=u=>{if(s("didChangeDisplayedFields"),u.length<a.length){const d=a.filter(m=>u.indexOf(m)===-1);o(yo({name:d[0],value:!0}))}else{const d=u.filter(m=>a.indexOf(m)===-1);o(yo({name:d[0],value:!1}))}};return t.createElement(A.x,{paddingTop:1,paddingBottom:1},t.createElement(xe.P,{"aria-label":"change displayed fields",value:a,onChange:c,customizeContent:u=>i({id:C("select.currently.selected"),defaultMessage:"{count} currently selected"},{count:u.length}),multi:!0,size:"S"},l.map(u=>t.createElement(he.W,{key:u.name,value:u.name},i({id:u.intlLabel.id||u.name,defaultMessage:u.intlLabel.defaultMessage||u.name})))))};Gs.propTypes={layout:n().shape({contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired};const Em=(0,t.memo)(Gs),Mo=({pagination:e})=>t.createElement(A.x,{paddingTop:4},t.createElement(w.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(h.v4,{trackedEvent:"willChangeNumberOfEntriesPerPage"}),t.createElement(h.tU,{pagination:e})));Mo.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Mo.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};const Cm=Mo,Rm=Qe.Z.contentManager,vm=(0,N.ZP)(A.x)`
  svg {
    path {
      fill: ${({theme:e})=>e.colors.neutral900};
    }
  }
`;function Qs({canCreate:e,canDelete:o,canRead:r,data:s,getData:i,getDataSucceeded:l,isLoading:a,layout:c,pagination:u,slug:d}){const{total:m}=u,{contentType:{metadatas:f,settings:{bulkable:p,filterable:y,searchable:b}}}=c,R=(0,h.lm)(),{trackUsage:k}=(0,h.rS)(),{refetchPermissions:E}=(0,h.vn)(),v=(0,t.useRef)(k),F=(0,t.useRef)(E),{notifyStatus:S}=(0,bo.G)(),{formatAPIError:T}=(0,h.So)(C);(0,h.go)();const[{query:D}]=(0,h.Kx)(),x=Yr(D),j=(0,Fe.stringify)({plugins:D.plugins},{encode:!1}),{pathname:z}=(0,ie.TH)(),{push:Z}=(0,ie.k6)(),{formatMessage:V}=(0,Q.Z)(),B=c.contentType,K=I()(B,"options.draftAndPublish",!1),W=(0,h.kY)(),{post:X,del:q}=W,ee=(0,t.useRef)(""),M=(0,t.useCallback)(async(se,P)=>{i();try{const oe=P?{cancelToken:P.token}:null,{data:{results:de,pagination:ye}}=await W.get(se,oe);S(V({id:C("utils.data-loaded"),defaultMessage:"{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"},{number:ye.count})),l(ye,de)}catch(oe){if(Re.default.isCancel(oe))return;if(I()(oe,"response.status",null)===403){await F.current(),R({type:"info",message:{id:C("permissions.not-allowed.update")}}),Z("/");return}R({type:"warning",message:{id:C("error.model.fetch")}})}},[V,i,l,S,Z,R,W]),L=(0,t.useCallback)(async se=>{try{await X(ce(`collection-types/${d}/actions/bulkDelete`),{ids:se});const P=ce(`collection-types/${d}${x}`);M(P),v.current("didBulkDeleteEntries")}catch(P){R({type:"warning",message:T(P)})}},[M,x,d,R,T,X]),Y=(0,t.useCallback)(async se=>{try{await q(ce(`collection-types/${d}/${se}`));const P=ce(`collection-types/${d}${x}`);M(P),R({type:"success",message:{id:C("success.record.delete")}})}catch(P){R({type:"warning",message:T(P)})}},[d,x,M,R,T,q]);(0,t.useEffect)(()=>{const P=Re.default.CancelToken.source(),oe=r,de=ce(`collection-types/${d}${x}`);return oe&&de.includes(ee.current)&&M(de,P),()=>{ee.current=d,P.cancel("Operation canceled by the user.")}},[r,i,d,x,l,M]);const H=V({id:C("header.name"),defaultMessage:"Content"}),$=V({id:B.info.displayName,defaultMessage:B.info.displayName||H}),O=r?V({id:C("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:m}):null,U=se=>e?t.createElement(ue.z,{...se,forwardedAs:ot.rU,onClick:()=>{const P=K?{status:"draft"}:{};v.current("willCreateEntry",P)},to:{pathname:`${z}/create`,search:D.plugins?j:""},startIcon:t.createElement(pt.Z,null),style:{textDecoration:"none"}},V({id:C("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})):null;return t.createElement(Se.o,{"aria-busy":a},t.createElement(Be.T,{primaryAction:U(),subtitle:O,title:$,navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Wt.Z,null),to:"/content-manager/"},V({id:"global.back",defaultMessage:"Back"}))}),!r&&t.createElement(ks.Z,{endActions:t.createElement(St,{area:"contentManager.listView.actions"})}),r&&t.createElement(ks.Z,{endActions:t.createElement(t.Fragment,null,t.createElement(St,{area:"contentManager.listView.actions"}),t.createElement(Em,{layout:c}),t.createElement(h.jW,{permissions:Rm.collectionTypesConfigurations},t.createElement(vm,{paddingTop:1,paddingBottom:1},t.createElement(ge.h,{onClick:()=>{k("willEditListLayout")},forwardedAs:ot.rU,to:{pathname:`${d}/configurations/list`,search:j},icon:t.createElement(cs.Z,null),label:V({id:"app.links.configure-view",defaultMessage:"Configure the view"})})))),startActions:t.createElement(t.Fragment,null,b&&t.createElement(h.m,{label:V({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:$}),placeholder:V({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),y&&t.createElement(ym,{contentType:B,slug:d,metadatas:f}))}),t.createElement(Je.D,null,r?t.createElement(t.Fragment,null,t.createElement(um,{canCreate:e,canDelete:o,contentTypeName:$,onConfirmDeleteAll:L,onConfirmDelete:Y,isBulkable:p,isLoading:a,layout:c,rows:s,action:U({variant:"secondary"})}),t.createElement(Cm,{pagination:{pageCount:u?.pageCount||1}})):t.createElement(h.ZF,null)))}Qs.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,canRead:n().bool.isRequired,data:n().array.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,info:n().shape({displayName:n().string.isRequired}).isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,isLoading:n().bool.isRequired,getData:n().func.isRequired,getDataSucceeded:n().func.isRequired,pagination:n().shape({total:n().number.isRequired,pageCount:n().number}).isRequired,slug:n().string.isRequired};const Tm=qu();function Mm(e){return(0,Ds.bindActionCreators)({getData:Pu,getDataSucceeded:wu,onChangeListHeaders:yo,onResetListHeaders:Fu},e)}const Dm=(0,le.$j)(Tm,Mm),km=(0,Ds.compose)(Dm)((0,t.memo)(Qs,$e())),Do=e=>{const o=(0,t.useMemo)(()=>Ho(e.slug),[e.slug]),{isLoading:r,allowedActions:s}=(0,h.ss)(o,e.permissions);return r?t.createElement(h.dO,null):t.createElement(km,{...e,...s})};Do.defaultProps={permissions:[]},Do.propTypes={permissions:n().array,slug:n().string.isRequired};const Im=(0,t.memo)(Do,(e,o)=>{const r=(0,h.e5)(e,o);return Object.keys(r).filter(i=>i!=="state").length>0}),Ks=({layout:e,...o})=>{const r=(0,le.I0)(),{replace:s}=(0,ie.k6)(),[{query:i,rawQuery:l}]=(0,h.Kx)(),a=mr(i,o.slug,"listView"),c=cr(o.slug);return(0,t.useEffect)(()=>{l||s(c)},[l,s,c]),(0,t.useEffect)(()=>{r(Au(e))},[r,e]),(0,t.useEffect)(()=>()=>{r(Su())},[r]),a?t.createElement(Im,{...o,layout:e,permissions:a}):null};Ks.propTypes={layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired,pluginOptions:n().object}).isRequired}).isRequired,slug:n().string.isRequired};const Lm=Ks,xm=(e,o)=>{const{put:r}=(0,h.tg)();return r(ce(`content-types/${o}/configuration`),e)},ko=({modifiedData:e,onChange:o,sortOptions:r})=>{const{formatMessage:s}=(0,Q.Z)(),{settings:i,metadatas:l}=e;return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},s({id:C("containers.SettingPage.settings"),defaultMessage:"Settings"})),t.createElement(w.k,{justifyContent:"space-between",gap:4},t.createElement(A.x,{width:"100%"},t.createElement(Et.s,{label:s({id:C("form.Input.search"),defaultMessage:"Enable search"}),onChange:a=>{o({target:{name:"settings.searchable",value:a.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.searchable",checked:i.searchable})),t.createElement(A.x,{width:"100%"},t.createElement(Et.s,{label:s({id:C("form.Input.filters"),defaultMessage:"Enable filters"}),onChange:a=>{o({target:{name:"settings.filterable",value:a.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.filterable",checked:i.filterable})),t.createElement(A.x,{width:"100%"},t.createElement(Et.s,{label:s({id:C("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"}),onChange:a=>{o({target:{name:"settings.bulkable",value:a.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.bulkable",checked:i.bulkable}))),t.createElement(De.r,{gap:4},t.createElement(fe.P,{s:12,col:6},t.createElement(xe.P,{label:s({id:C("form.Input.pageEntries"),defaultMessage:"Entries per page"}),hint:s({id:C("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."}),onChange:a=>o({target:{name:"settings.pageSize",value:a}}),name:"settings.pageSize",value:e.settings.pageSize||""},[10,20,50,100].map(a=>t.createElement(he.W,{key:a,value:a},a)))),t.createElement(fe.P,{s:12,col:3},t.createElement(xe.P,{label:s({id:C("form.Input.defaultSort"),defaultMessage:"Default sort attribute"}),onChange:a=>o({target:{name:"settings.defaultSortBy",value:a}}),name:"settings.defaultSortBy",value:e.settings.defaultSortBy||""},r.map(a=>t.createElement(he.W,{key:a,value:a},l[a].list.label||a)))),t.createElement(fe.P,{s:12,col:3},t.createElement(xe.P,{label:s({id:C("form.Input.sort.order"),defaultMessage:"Default sort order"}),onChange:a=>o({target:{name:"settings.defaultSortOrder",value:a}}),name:"settings.defaultSortOrder",value:e.settings.defaultSortOrder||""},["ASC","DESC"].map(a=>t.createElement(he.W,{key:a,value:a},a))))))};ko.defaultProps={modifiedData:{},sortOptions:[]},ko.propTypes={modifiedData:n().object,onChange:n().func.isRequired,sortOptions:n().array};const Pm=ko,Io=N.ZP.button`
  display: flex;
  align-items: center;
  height: ${({theme:e})=>e.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:e})=>e.spaces[3]};
  }
`,Ys=(0,N.ZP)(Io)`
  padding: 0 ${({theme:e})=>e.spaces[3]};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,wm=(0,N.ZP)(w.k)`
  max-height: ${32/16}rem;
  cursor: pointer;

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-color: ${({theme:e})=>e.colors.primary200};

    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }

    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${Ys} {
      border-right: 1px solid ${({theme:e})=>e.colors.primary200};
    }
  }
`,Fm=(0,N.ZP)(A.x)`
  &:last-child {
    padding-right: ${({theme:e})=>e.spaces[3]};
  }
`,Xs=({index:e,isDraggingSibling:o,labelField:r,onClickEditField:s,onMoveField:i,onRemoveField:l,name:a,setIsDraggingSibling:c})=>{const{formatMessage:u}=(0,Q.Z)(),d=(0,t.useRef)(null),m=(0,t.useRef)(null),[,f]=(0,t.useState)(!1),p=(0,t.useRef)(),y=Zo(r),b=()=>{p.current&&p.current.click()},[,R]=(0,We.useDrop)({accept:Ce.FIELD,hover(S,T){if(!m.current)return;const D=S.index,x=e;if(D===x)return;const j=m.current.getBoundingClientRect(),z=(j.right-j.left)/2,V=T.getClientOffset().x-j.left;D>x&&V>z||D<x&&V<z||(i(D,x),S.index=x)}}),[{isDragging:k},E,v]=(0,We.useDrag)({type:Ce.FIELD,item(){return{index:e,labelField:r,name:a}},collect:S=>({isDragging:S.isDragging()}),end(){c(!1)}});(0,t.useEffect)(()=>{v((0,at.rX)(),{captureDraggingState:!1})},[v]),(0,t.useEffect)(()=>{k&&c(!0)},[k,c]),(0,t.useEffect)(()=>{o||f(S=>!S)},[o]);const F={dragRef:E(d),dropRef:R(m)};return t.createElement(Fm,{ref:F?F.dropRef:null},k&&t.createElement(Xt,{transparent:!0,labelField:y}),!k&&o&&t.createElement(Xt,{isSibling:!0,labelField:y}),!k&&!o&&t.createElement(wm,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:b,isDragging:k},t.createElement(w.k,{gap:3},t.createElement(Ys,{as:"span","aria-label":u({id:C("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:r}),onClick:S=>S.stopPropagation(),ref:F.dragRef,type:"button"},t.createElement(Ae.Z,null)),t.createElement(G.Z,{fontWeight:"bold"},y)),t.createElement(w.k,{paddingLeft:3},t.createElement(Io,{ref:p,onClick:S=>{S.stopPropagation(),s(a)},"aria-label":u({id:C("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:r}),type:"button"},t.createElement(Ke.Z,null)),t.createElement(Io,{onClick:l,"data-testid":`delete-${a}`,"aria-label":u({id:C("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:r}),type:"button"},t.createElement(Mt.Z,null)))))};Xs.propTypes={index:n().number.isRequired,isDraggingSibling:n().bool.isRequired,labelField:n().string.isRequired,name:n().string.isRequired,onClickEditField:n().func.isRequired,onMoveField:n().func.isRequired,onRemoveField:n().func.isRequired,setIsDraggingSibling:n().func.isRequired};const Sm=Xs,Js=(0,N.ZP)(A.x)`
  flex: ${({size:e})=>e};
`,Am=(0,N.ZP)(Js)`
  overflow-x: scroll;
  overflow-y: hidden;
`,Om=(0,N.ZP)(Js)`
  max-width: ${32/16}rem;
`,_s=({displayedFields:e,listRemainingFields:o,metadatas:r,onAddField:s,onClickEditField:i,onMoveField:l,onRemoveField:a})=>{const{formatMessage:c}=(0,Q.Z)(),[u,d]=(0,t.useState)(!1),[m,f]=(0,t.useState)(null),p=(0,t.useRef)();function y(...R){f("add"),s(...R)}function b(...R){f("remove"),a(...R)}return(0,t.useEffect)(()=>{m==="add"&&p?.current&&(p.current.scrollLeft=p.current.scrollWidth)},[e,m]),t.createElement(t.Fragment,null,t.createElement(A.x,{paddingBottom:4},t.createElement(G.Z,{variant:"delta",as:"h2"},c({id:C("containers.SettingPage.view"),defaultMessage:"View"}))),t.createElement(w.k,{paddingTop:4,paddingLeft:4,paddingRight:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0},t.createElement(Am,{size:"1",paddingBottom:4,ref:p},t.createElement(w.k,{gap:3},e.map((R,k)=>t.createElement(Sm,{key:R,index:k,isDraggingSibling:u,onMoveField:l,onClickEditField:i,onRemoveField:E=>b(E,k),name:R,labelField:r[R].list.label||R,setIsDraggingSibling:d})))),t.createElement(Om,{size:"auto",paddingBottom:4},t.createElement(Pe.O,{label:c({id:C("components.FieldSelect.label"),defaultMessage:"Add a field"}),as:ge.h,icon:t.createElement(pt.Z,null),disabled:o.length<=0,"data-testid":"add-field"},o.map(R=>t.createElement(Pe.s,{key:R,onClick:()=>y(R)},r[R].list.label||R))))))};_s.propTypes={displayedFields:Te.PropTypes.array.isRequired,listRemainingFields:Te.PropTypes.array.isRequired,metadatas:Te.PropTypes.objectOf(Te.PropTypes.shape({list:Te.PropTypes.shape({label:Te.PropTypes.string})})).isRequired,onAddField:Te.PropTypes.func.isRequired,onClickEditField:Te.PropTypes.func.isRequired,onMoveField:Te.PropTypes.func.isRequired,onRemoveField:Te.PropTypes.func.isRequired};const $m=_s,Zm=(0,N.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:e})=>e.spaces[3]};
  }
`,ei=({attributes:e,fieldForm:o,fieldToEdit:r,onCloseModal:s,onChangeEditLabel:i,onSubmit:l,type:a})=>{const{formatMessage:c}=(0,Q.Z)(),u=e[r].relationType;let d=!["media","relation"].includes(a);return["oneWay","oneToOne","manyToOne"].includes(u)&&(d=!0),t.createElement(hs.P,{onClose:s,labelledBy:"title"},t.createElement("form",{onSubmit:l},t.createElement(ys.x,null,t.createElement(Zm,null,t.createElement(vs,{type:a}),t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:C("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:yt()(r)})))),t.createElement(bs.f,null,t.createElement(De.r,{gap:4},t.createElement(fe.P,{s:12,col:6},t.createElement(Mn.o,{id:"label-input",label:c({id:C("form.Input.label"),defaultMessage:"Label"}),name:"label",onChange:m=>i(m),value:o.label,hint:c({id:C("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"})})),d&&t.createElement(fe.P,{s:12,col:6},t.createElement(Et.s,{"data-testid":"Enable sort on this field",checked:o.sortable,label:c({id:C("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",onChange:m=>i({target:{name:"sortable",value:m.target.checked}}),onLabel:c({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:c({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"})})))),t.createElement(Es.m,{startActions:t.createElement(ue.z,{onClick:s,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ue.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};ei.propTypes={attributes:n().objectOf(n().shape({relationType:n().string})).isRequired,fieldForm:n().shape({label:n().string,sortable:n().bool}).isRequired,fieldToEdit:n().string.isRequired,onChangeEditLabel:n().func.isRequired,onCloseModal:n().func.isRequired,onSubmit:n().func.isRequired,type:n().string.isRequired};const qm=ei,Nm=(e,o)=>({...e,initialData:o,modifiedData:o}),Lo={fieldForm:{},fieldToEdit:"",initialData:{},modifiedData:{}},jm=(e=Lo,o)=>(0,wt.ZP)(e,r=>{const s=["modifiedData","layouts","list"];switch(o.type){case"ADD_FIELD":{const i=I()(e,s,[]);J()(r,s,[...i,o.item]);break}case"MOVE_FIELD":{const i=I()(e,s,[]),{originalIndex:l,atIndex:a}=o;J()(r,s,Dt(i,l,a));break}case"ON_CHANGE":{J()(r,["modifiedData",...o.keys.split(".")],o.value);break}case"ON_CHANGE_FIELD_METAS":{J()(r,["fieldForm",o.name],o.value);break}case"REMOVE_FIELD":{const i=I()(e,s,[]);J()(r,s,i.filter((l,a)=>o.index!==a));break}case"SET_FIELD_TO_EDIT":{const{fieldToEdit:i}=o;r.fieldToEdit=i,r.fieldForm.label=I()(r,["modifiedData","metadatas",i,"list","label"],""),r.fieldForm.sortable=I()(r,["modifiedData","metadatas",i,"list","sortable"],"");break}case"UNSET_FIELD_TO_EDIT":{r.fieldForm={},r.fieldToEdit="";break}case"SUBMIT_FIELD_FORM":{const i=["modifiedData","metadatas",e.fieldToEdit,"list"];J()(r,[...i,"label"],e.fieldForm.label),J()(r,[...i,"sortable"],e.fieldForm.sortable);break}default:return r}}),Bm=["media","richtext","dynamiczone","relation","component","json"],ti=({layout:e,slug:o})=>{const{formatMessage:r}=(0,Q.Z)(),{trackUsage:s}=(0,h.rS)(),i=dr(),l=(0,h.lm)(),{refetchData:a}=(0,t.useContext)(yr),[c,u]=(0,t.useState)(!1),d=()=>u(M=>!M),[m,f]=(0,t.useReducer)(jm,Lo,()=>Nm(Lo,e)),{fieldToEdit:p,fieldForm:y,initialData:b,modifiedData:R}=m,k=!be()(y),{attributes:E}=e,v=R.layouts.list,F=()=>{const{settings:{pageSize:M,defaultSortBy:L,defaultSortOrder:Y},kind:H,uid:$}=b,O=`${L}:${Y}`,U=`${(0,Fe.stringify)({page:1,pageSize:M,sort:O},{encode:!1})}${i?`&${i}`:""}`;return`/content-manager/${H}/${$}?${U}`},S=({target:{name:M,value:L}})=>{f({type:"ON_CHANGE",keys:M,value:M==="settings.pageSize"?parseInt(L,10):L})},T=async()=>{const M=kn()(R,["layouts","settings","metadatas"]);B.mutate(M)},D=M=>{f({type:"ADD_FIELD",item:M})},x=(M,L)=>{M.stopPropagation(),v.length===1?l({type:"info",message:{id:C("notification.info.minimumFields")}}):f({type:"REMOVE_FIELD",index:L})},j=M=>{M.preventDefault(),d(),s("willSaveContentTypeLayout")},z=M=>{f({type:"SET_FIELD_TO_EDIT",fieldToEdit:M})},Z=()=>{f({type:"UNSET_FIELD_TO_EDIT"})},V=M=>{M.preventDefault(),f({type:"SUBMIT_FIELD_FORM"})},B=(0,Ue.useMutation)(M=>xm(M,o),{onSuccess(){s("didEditListSettings"),a()},onError(){l({type:"warning",message:{id:"notification.error"}})}}),{isLoading:K}=B,W=({target:{name:M,value:L}})=>{f({type:"ON_CHANGE_FIELD_METAS",name:M,value:L})},X=Object.entries(E).reduce((M,L)=>{const[Y,H]=L,$=zo(H),O=v.includes(Y);return $&&!O&&M.push(Y),M},[]).sort(),q=Object.entries(E).reduce((M,L)=>{const[Y,{type:H}]=L;return Bm.includes(H)||M.push(Y),M},[]),ee=(M,L)=>{f({type:"MOVE_FIELD",originalIndex:M,atIndex:L})};return t.createElement(So.A,null,t.createElement(Se.o,{"aria-busy":K},t.createElement("form",{onSubmit:j},t.createElement(Be.T,{navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Wt.Z,null),to:F,id:"go-back"},r({id:"global.back",defaultMessage:"Back"})),primaryAction:t.createElement(ue.z,{size:"S",startIcon:t.createElement(tt.Z,null),disabled:gt()(R,b),type:"submit"},r({id:"global.save",defaultMessage:"Save"})),subtitle:r({id:C("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:r({id:C("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:yt()(R.info.displayName)})}),t.createElement(Je.D,null,t.createElement(A.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(Pm,{modifiedData:R,onChange:S,sortOptions:q}),t.createElement(A.x,{paddingTop:6,paddingBottom:6},t.createElement(Jn.i,null)),t.createElement($m,{listRemainingFields:X,displayedFields:v,onAddField:D,onClickEditField:z,onMoveField:ee,onRemoveField:x,metadatas:R.metadatas}))),t.createElement(h.QH,{bodyText:{id:C("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:t.createElement(tt.Z,null),isConfirmButtonLoading:K,isOpen:c,onToggleDialog:d,onConfirm:T,variantRightButton:"success-light"})),k&&t.createElement(qm,{attributes:E,fieldForm:y,fieldToEdit:p,onChangeEditLabel:W,onCloseModal:Z,onSubmit:V,type:I()(E,[p,"type"],"text")})))};ti.propTypes={layout:n().shape({uid:n().string.isRequired,settings:n().shape({bulkable:n().bool,defaultSortBy:n().string,defaultSortOrder:n().string,filterable:n().bool,pageSize:n().number,searchable:n().bool}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().objectOf(n().shape({type:n().string})).isRequired}).isRequired,slug:n().string.isRequired};const Wm=(0,t.memo)(ti),zm=()=>t.createElement(A.x,{padding:8},t.createElement(h.Hn,null)),ni=Qe.Z.contentManager,oi=({match:{params:{slug:e},url:o}})=>{const{isLoading:r,layout:s,updateLayout:i}=ir(e),{rawContentTypeLayout:l,rawComponentsLayouts:a}=(0,t.useMemo)(()=>{let m={},f={};return s.contentType&&(m=Lt(s.contentType)),s.components&&(f=Object.keys(s.components).reduce((p,y)=>(p[y]=Lt(s.components[y]),p),{})),{rawContentTypeLayout:m,rawComponentsLayouts:f}},[s]);if((s?.contentType?.uid??null)!==e||r)return t.createElement(h.dO,null);const u=({location:{state:m},history:{goBack:f},match:{params:{id:p,origin:y}}},b)=>t.createElement(b,{slug:e,layout:s,state:m,goBack:f,id:p,origin:y}),d=[{path:"create/clone/:origin",comp:Ht},{path:"create",comp:Ht},{path:":id",comp:Ht},{path:"",comp:Lm}].map(({path:m,comp:f})=>t.createElement(ie.AW,{key:m,path:`${o}/${m}`,render:p=>u(p,f)}));return t.createElement(ia.ErrorBoundary,{FallbackComponent:zm},t.createElement(br.Provider,{value:s},t.createElement(ie.rs,null,t.createElement(ie.AW,{path:`${o}/configurations/list`},t.createElement(h.O4,{permissions:ni.collectionTypesConfigurations},t.createElement(Wm,{layout:l,slug:e,updateLayout:i}))),t.createElement(ie.AW,{path:`${o}/configurations/edit`},t.createElement(h.O4,{permissions:ni.collectionTypesConfigurations},t.createElement(ho,{components:a,isContentTypeView:!0,mainLayout:l,slug:e,updateLayout:i}))),d)))};oi.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};const Vm=(0,t.memo)(oi);var ri=g(23089);const Um=Qe.Z.contentManager,Hm=()=>{const[{isLoading:e,data:o},r]=(0,t.useReducer)(ri.Z,ri.q),s=(0,t.useMemo)(sn,[]),{schemas:i}=(0,le.v9)(c=>s(c),le.wU),{uid:l}=(0,ie.UO)(),{get:a}=(0,h.kY)();return(0,t.useEffect)(()=>{const u=Re.default.CancelToken.source();return(async m=>{try{r(Nt());const{data:{data:f}}=await a(ce(`components/${l}/configuration`),{cancelToken:m.token});r(Un(Ko(f,i,"component")))}catch(f){if(Re.default.isCancel(f))return;console.error(f)}})(u),()=>{u.cancel("Operation canceled by the user.")}},[l,i,a]),e?t.createElement(h.dO,null):t.createElement(h.O4,{permissions:Um.componentsConfigurations},t.createElement(ho,{components:o.components,mainLayout:o.component,slug:l}))},Gm=(0,t.memo)(Hm);var Qm=g(89722),Km=g(86031);const Ym=()=>{const{formatMessage:e}=(0,Q.Z)();return(0,h.go)(),t.createElement(Se.o,null,t.createElement(Be.T,{title:e({id:C("header.name"),defaultMessage:"Content"})}),t.createElement(Je.D,null,t.createElement(Qm.x,{action:t.createElement(h.Qj,{variant:"secondary",startIcon:t.createElement(pt.Z,null),to:"/plugins/content-type-builder/content-types/create-content-type"},e({id:"app.components.HomePage.create",defaultMessage:"Create your first Content-type"})),content:e({id:"content-manager.pages.NoContentType.text",defaultMessage:"You don't have any content yet, we recommend you to create your first Content-Type."}),hasRadius:!0,icon:t.createElement(Km.Z,{width:"10rem"}),shadow:"tableShadow"})))},Xm=()=>{const{formatMessage:e}=(0,Q.Z)();return(0,h.go)(),t.createElement(Se.o,null,t.createElement(Be.T,{title:e({id:C("header.name"),defaultMessage:"Content"})}),t.createElement(Je.D,null,t.createElement(h.ZF,null)))},Jm=Qe.Z.contentManager,si=({match:{params:{slug:e},url:o}})=>{const{isLoading:r,layout:s,updateLayout:i}=ir(e),{rawContentTypeLayout:l,rawComponentsLayouts:a}=(0,t.useMemo)(()=>{let c={},u={};return s.contentType&&(u=Lt(s.contentType)),s.components&&(c=Object.keys(s.components).reduce((d,m)=>(d[m]=Lt(s.components[m]),d),{})),{rawContentTypeLayout:u,rawComponentsLayouts:c}},[s]);return r?t.createElement(h.dO,null):t.createElement(br.Provider,{value:s},t.createElement(ie.rs,null,t.createElement(ie.AW,{path:`${o}/configurations/edit`},t.createElement(h.O4,{permissions:Jm.singleTypesConfigurations},t.createElement(ho,{components:a,isContentTypeView:!0,mainLayout:l,slug:e,updateLayout:i}))),t.createElement(ie.AW,{path:o,render:({location:{state:c},history:{goBack:u}})=>t.createElement(Ht,{layout:s,slug:e,isSingleType:!0,state:c,goBack:u})})))};si.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};const _m=(0,t.memo)(si);var ep=g(53192),tp=g(60984),np=g(34446),op=g(29489),rp=g(52305),sp=g(90233),ip=g(68929),ii=g.n(ip);const ai=(e,o)=>o?(0,sp.Z)(e,o.toLowerCase(),{keys:[r=>r.title.toLowerCase()]}):e.sort((r,s)=>{const i=ii()(r.title),l=ii()(s.title);return i<l?-1:i>l?1:0}),ap=()=>{const[e,o]=(0,t.useState)(""),{formatMessage:r}=(0,Q.Z)(),s=(0,t.useMemo)(Hi,[]),{collectionTypeLinks:i,singleTypeLinks:l}=(0,le.v9)(y=>s(y),le.wU),a=y=>y.map(b=>({...b,title:r({id:b.title,defaultMessage:b.title})})),c=a(i),u=a(l),d=[{id:"collectionTypes",title:{id:C("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"},searchable:!0,links:ai(c,e)},{id:"singleTypes",title:{id:C("components.LeftMenu.single-types"),defaultMessage:"Single Types"},searchable:!0,links:ai(u,e)}],m=()=>{o("")},f=({target:{value:y}})=>{o(y)},p=r({id:C("header.name"),defaultMessage:"Content"});return t.createElement(ep.m,{ariaLabel:p},t.createElement(tp.p,{label:p,searchable:!0,value:e,onChange:f,onClear:m,searchLabel:r({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),t.createElement(np.Z,null,d.map(y=>{const b=r({id:y.title.id,defaultMessage:y.title.defaultMessage},y.title.values);return t.createElement(op.D,{key:y.id,label:b,badgeLabel:y.links.length.toString()},y.links.map(R=>{const k=R.search?`?${R.search}`:"";return t.createElement(rp.E,{as:ot.OL,key:R.uid,to:`${R.to}${k}`},R.title)}))})))};var xo=g(21358);const lp=()=>({type:xo.ZA}),cp=()=>({type:xo.c2}),dp=(e,o,r,s)=>({type:xo.ix,data:{authorizedCtLinks:e,authorizedStLinks:o,components:s,contentTypeSchemas:r}}),li=(e,o,r=[])=>e.filter(s=>s.isDisplayed).map(s=>{const i=[{action:"plugin::content-manager.explorer.create",subject:s.uid},{action:"plugin::content-manager.explorer.read",subject:s.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:s.uid}],a=o==="collectionTypes"?i:l,c=r.find(({uid:d})=>d===s.uid);let u=null;if(c){const d={page:1,pageSize:c.settings.pageSize,sort:`${c.settings.defaultSortBy}:${c.settings.defaultSortOrder}`};u=(0,Fe.stringify)(d,{encode:!1})}return{permissions:a,search:u,kind:s.kind,title:s.info.displayName,to:`/content-manager/${s.kind}/${s.uid}`,uid:s.uid,name:s.uid,isDisplayed:s.isDisplayed}}),up=(e,o)=>{const r=Object.entries(Vr()(e,"kind")).map(([l,a])=>({name:l,links:a})),[s,i]=Ao()(r,"name");return{collectionTypesSectionLinks:li(s?.links||[],"collectionTypes",o),singleTypesSectionLinks:li(i?.links??[],"singleTypes")}},ci=(e,o)=>o.map(({permissions:r})=>(0,h.qX)(e,r)),mp=async(e,o,r)=>{const{get:s}=(0,h.tg)();try{const{data:{data:i}}=await s(ce("content-types-settings")),{collectionTypesSectionLinks:l,singleTypesSectionLinks:a}=up(e,i),c=ci(o,l),u=await Promise.all(c),d=l.filter((y,b)=>u[b]),m=ci(o,a),f=await Promise.all(m),p=a.filter((y,b)=>f[b]);return{authorizedCtLinks:d,authorizedStLinks:p}}catch(i){return console.error(i),r({type:"warning",message:{id:"notification.error"}}),{authorizedCtLinks:[],authorizedStLinks:[],contentTypes:[]}}},pp=()=>{const e=(0,le.I0)(),o=(0,h.lm)(),r=(0,le.v9)(ct()),s=(0,t.useRef)(),{allPermissions:i}=(0,h.vn)(),{runHookWaterfall:l}=(0,h.j1)(),c=Re.default.CancelToken.source(),{notifyStatus:u}=(0,bo.G)(),{formatMessage:d}=(0,Q.Z)(),{get:m}=(0,h.kY)(),f=async()=>{e(lp());try{const[{data:{data:p}},{data:{data:y}}]=await Promise.all(["components","content-types"].map(F=>m(ce(F),{cancelToken:c.token})));u(d({id:C("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}));const{authorizedCtLinks:b,authorizedStLinks:R}=await mp(y,i,o),{ctLinks:k}=l(Ft.LK,{ctLinks:b,models:y}),{stLinks:E}=l(Ft.dV,{stLinks:R,models:y}),v=dp(k,E,y,p);e(v)}catch(p){if(Re.default.isCancel(p))return;console.error(p),o({type:"warning",message:{id:"notification.error"}})}};return s.current=f,(0,t.useEffect)(()=>(s.current(),()=>{c.cancel("Operation canceled by the user."),e(cp())}),[e,o]),{...r,refetchData:s.current}},gp=Qe.Z.contentManager,di=()=>{const e=(0,ie.$B)("/content-manager/:kind/:uid"),{status:o,collectionTypeLinks:r,singleTypeLinks:s,models:i,refetchData:l}=pp(),a=Ao()([...r,...s],p=>p.title.toLowerCase()),{pathname:c}=(0,ie.TH)(),{formatMessage:u}=(0,Q.Z)(),{startSection:d}=(0,h.c1)(),m=(0,t.useRef)(d);if((0,t.useEffect)(()=>{m.current&&m.current("contentManager")},[]),o==="loading")return t.createElement(Se.o,{"aria-busy":"true"},t.createElement(Be.T,{title:u({id:C("header.name"),defaultMessage:"Content"})}),t.createElement(h.dO,null));const f=i.filter(({isDisplayed:p})=>p);return a.length===0&&f.length>0&&c!=="/content-manager/403"?t.createElement(ie.l_,{to:"/content-manager/403"}):f.length===0&&c!=="/content-manager/no-content-types"?t.createElement(ie.l_,{to:"/content-manager/no-content-types"}):!e&&a.length>0?t.createElement(ie.l_,{to:`${a[0].to}${a[0].search?`?${a[0].search}`:""}`}):t.createElement(So.A,{sideNav:t.createElement(ap,null)},t.createElement(sa,null),t.createElement(yr.Provider,{value:{refetchData:l}},t.createElement(ie.rs,null,t.createElement(ie.AW,{path:"/content-manager/components/:uid/configurations/edit"},t.createElement(h.O4,{permissions:gp.componentsConfigurations},t.createElement(Gm,null))),t.createElement(ie.AW,{path:"/content-manager/collectionType/:slug",component:Vm}),t.createElement(ie.AW,{path:"/content-manager/singleType/:slug",component:_m}),t.createElement(ie.AW,{path:"/content-manager/403"},t.createElement(Xm,null)),t.createElement(ie.AW,{path:"/content-manager/no-content-types"},t.createElement(Ym,null)),t.createElement(ie.AW,{path:"",component:h.Hn}))))};function fp(){const{formatMessage:e}=(0,Q.Z)();return t.createElement(t.Fragment,null,t.createElement(ui.q,{title:e({id:C("plugin.name"),defaultMessage:"Content Manager"})}),t.createElement(di,null))}},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
