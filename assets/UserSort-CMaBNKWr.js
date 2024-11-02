import{g as u,a as w,s as N,o as F,_ as l,f as c,r as p,u as P,b as T,j as o,c as $,d as U,R as E}from"./index-ChjW3XlE.js";import{B as G,L as M,u as _,h as D,m as W,I as H,S as z}from"./Select-SAy5KdPP.js";import"./assertThisInitialized-DIFuz7Pv.js";const O=u("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),R=u("MuiListItemIcon",["root","alignItemsFlexStart"]),j=u("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function A(e){return w("MuiMenuItem",e)}const n=u("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),q=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],J=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},K=e=>{const{disabled:t,dense:a,divider:s,disableGutters:d,selected:g,classes:i}=e,r=U({root:["root",a&&"dense",t&&"disabled",!d&&"gutters",s&&"divider",g&&"selected"]},A,i);return l({},i,r)},Q=N(G,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:J})(({theme:e,ownerState:t})=>l({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${j.root}`]:{marginTop:0,marginBottom:0},[`& .${j.inset}`]:{paddingLeft:36},[`& .${R.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&l({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${R.root} svg`]:{fontSize:"1.25rem"}}))),v=p.forwardRef(function(t,a){const s=P({props:t,name:"MuiMenuItem"}),{autoFocus:d=!1,component:g="li",dense:i=!1,divider:f=!1,disableGutters:r=!1,focusVisibleClassName:S,role:h="menuitem",tabIndex:x,className:k}=s,B=T(s,q),y=p.useContext(M),C=p.useMemo(()=>({dense:i||y.dense||!1,disableGutters:r}),[y.dense,i,r]),m=p.useRef(null);_(()=>{d&&m.current&&m.current.focus()},[d]);const L=l({},s,{dense:C.dense,divider:f,disableGutters:r}),b=K(s),V=D(m,a);let I;return s.disabled||(I=x!==void 0?x:-1),o.jsx(M.Provider,{value:C,children:o.jsx(Q,l({ref:V,role:h,tabIndex:I,component:g,focusVisibleClassName:$(b.focusVisible,S),className:$(b.root,k)},B,{ownerState:L,classes:b}))})}),X=({sortField:e,setSortField:t})=>{const a=s=>{t(s.target.value)};return o.jsxs(W,{fullWidth:!0,variant:"outlined",margin:"normal",children:[" ",o.jsx(H,{id:"sort-label",children:"Sort By"})," ",o.jsxs(z,{labelId:"sort-label",value:e,onChange:a,label:"Sort By...",children:[o.jsx(v,{value:"",children:"None"}),o.jsx(v,{value:"name",children:"Name"}),o.jsx(v,{value:"email",children:"Email"})]})]})},te=E.memo(X);export{te as default};
