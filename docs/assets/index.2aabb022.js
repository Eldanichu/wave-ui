var k=Object.defineProperty;var f=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(s,l,r)=>l in s?k(s,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[l]=r,h=(s,l)=>{for(var r in l||(l={}))$.call(l,r)&&y(s,r,l[r]);if(f)for(var r of f(l))V.call(l,r)&&y(s,r,l[r]);return s};import{r as d,o as p,f as _,a as n,w as o,b as t,h as m,e}from"./vendor.34d201f5.js";import{_ as v,A as x,F as z}from"./index.c056c3d3.js";const S=e("Default"),T=e("w-rating"),D=e(`<w-rating></w-rating>
`),A=e("V-model"),E={class:"mt2"},M=t("strong",{class:"mr2"},"v-model:",-1),C={class:"mt2"},P=t("strong",{class:"mr2"},"v-model:",-1),N=e(`w-rating(v-model="rating1")
div.mt2
  strong.mr2 v-model:
  code `+m("{{ rating1 }}")+`

w-rating.mt4(v-model="rating2")
div.mt2
  strong.mr2 v-model:
  code `+m("{{ rating2 }}")),O=e(`<w-rating v-model="rating1"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+m("{{ rating1 }}")+`</code>
</div>

<w-rating class="mt4" v-model="rating2"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+m("{{ rating2 }}")+`</code>
</div>`),U=e(`data: () => ({
  rating1: 3,
  rating2: 3.42
})
`),j=e("Color"),W=t("p",null,[e("Like in most components, you can set a "),t("code",null,"color"),e(" for the foreground icons (when on) and a "),t("code",null,"bg-color"),e(` for the
background icons when off.`),t("br"),e(`
The default background color is grey and the default active color is `),t("code",null,"primary"),e(".")],-1),q=t("br",null,null,-1),B=e(`w-rating.my2(color="green")
br
w-rating.my2(bg-color="light-green" color="yellow")`),I=e(`<w-rating
  class="my2"
  color="green">
</w-rating>

<br />

<w-rating
  class="my2"
  bg-color="light-green"
  color="yellow">
</w-rating>
`),L=e("Custom Icons"),R=t("br",null,null,-1),F=e(`w-rating.my2(icon="mdi mdi-heart" :model-value="3.4")
br
w-rating.my2(icon="mdi mdi-heart-outline" :model-value="3.4")`),H=e(`<w-rating
  class="my2"
  icon="mdi mdi-heart"
  :model-value="3.4">
</w-rating>

<br />

<w-rating
  class="my2"
  icon="mdi mdi-heart-outline"
  :model-value="3.4">
</w-rating>
`),G=e("Max (number of buttons)"),J=t("p",null,[e("The number of buttons is set via the "),t("code",null,"max"),e(" prop."),t("br"),e(`
As expected, the `),t("code",null,"max"),e(` prop also sets the maximum number you can set or display via the
`),t("span",{class:"code"},"w-rating"),e(" component."),t("br"),e(`
When setting a rating, the component will always return an integer between 1 and `),t("code",null,"max"),e(" included.")],-1),K=t("br",null,null,-1),Q=e(`w-rating.my2(:model-value="2" :max="3")
br
w-rating.my2(:model-value="6" :max="10")`),X=e(`<w-rating
  :model-value="2"
  class="my2"
  :max="3">
</w-rating>
<br />
<w-rating
  :model-value="6"
  class="my2"
  :max="10">
</w-rating>
`),Y=e("Sizes"),Z=t("p",null,[e("The rating component's size can be controlled via the preset sizes "),t("code",null,"xs"),e(", "),t("code",null,"sm"),e(`,
`),t("code",null,"md"),e(", "),t("code",null,"lg"),e(", "),t("code",null,"xl"),e(` or via CSS override.
`)],-1),ee=t("br",null,null,-1),ne=t("br",null,null,-1),te=t("br",null,null,-1),oe=t("br",null,null,-1),ae=e(`w-rating.my2(xs)
br
w-rating.my2(sm)
br
w-rating.my2(md)
br
w-rating.my2(lg)
br
w-rating.my2(xl)`),se=e(`<w-rating class="my2" xs></w-rating>
<br />
<w-rating class="my2" sm></w-rating>
<br />
<w-rating class="my2" md></w-rating>
<br />
<w-rating class="my2" lg></w-rating>
<br />
<w-rating class="my2" xl></w-rating>
`),le=e("Disabled & readonly"),re=t("p",null,"Use the disabled or readonly options to display a rating but prevent user votes.",-1),ie=t("br",null,null,-1),ce=e(`w-rating.my2(:model-value="3" disabled)
br
w-rating.my2(:model-value="3" readonly)`),de=e(`<w-rating class="my2" :model-value="3" disabled></w-rating>
<br />
<w-rating class="my2" :model-value="3" readonly></w-rating>`);function me(s,l,r,b,w,u){const i=d("title-link"),a=d("w-rating"),c=d("example");return p(),_("div",null,[n(i,{h2:""},{default:o(()=>[S]),_:1}),n(c,null,{pug:o(()=>[T]),html:o(()=>[D]),default:o(()=>[n(a)]),_:1}),n(i,{h2:""},{default:o(()=>[A]),_:1}),n(c,null,{pug:o(()=>[N]),html:o(()=>[O]),js:o(()=>[U]),default:o(()=>[n(a,{modelValue:s.rating1,"onUpdate:modelValue":l[0]||(l[0]=g=>s.rating1=g)},null,8,["modelValue"]),t("div",E,[M,t("code",null,m(s.rating1),1)]),n(a,{class:"mt4",modelValue:s.rating2,"onUpdate:modelValue":l[1]||(l[1]=g=>s.rating2=g)},null,8,["modelValue"]),t("div",C,[P,t("code",null,m(s.rating2),1)])]),_:1}),n(i,{h2:""},{default:o(()=>[j]),_:1}),W,n(c,null,{pug:o(()=>[B]),html:o(()=>[I]),default:o(()=>[n(a,{class:"my2",color:"green"}),q,n(a,{class:"my2","bg-color":"light-green",color:"yellow"})]),_:1}),n(i,{h2:""},{default:o(()=>[L]),_:1}),n(c,null,{pug:o(()=>[F]),html:o(()=>[H]),default:o(()=>[n(a,{class:"my2",icon:"mdi mdi-heart","model-value":3}),R,n(a,{class:"my2",icon:"mdi mdi-heart-outline","model-value":3.4},null,8,["model-value"])]),_:1}),n(i,{h2:"",slug:"max"},{default:o(()=>[G]),_:1}),J,n(c,null,{pug:o(()=>[Q]),html:o(()=>[X]),default:o(()=>[n(a,{class:"my2","model-value":2,max:3}),K,n(a,{class:"my2","model-value":6,max:10})]),_:1}),n(i,{h2:""},{default:o(()=>[Y]),_:1}),Z,n(c,null,{pug:o(()=>[ae]),html:o(()=>[se]),default:o(()=>[n(a,{class:"my2",xs:""}),ee,n(a,{class:"my2",sm:""}),ne,n(a,{class:"my2",md:""}),te,n(a,{class:"my2",lg:""}),oe,n(a,{class:"my2",xl:""})]),_:1}),n(i,{h2:""},{default:o(()=>[le]),_:1}),re,n(c,null,{pug:o(()=>[ce]),html:o(()=>[de]),default:o(()=>[n(a,{class:"my2","model-value":3,disabled:""}),ie,n(a,{class:"my2","model-value":3,readonly:""})]),_:1})])}const ue={data:()=>({rating1:3,rating2:3.42})};var ge=v(ue,[["render",me]]);const he=t("div",{class:"w-divider my12"},null,-1),pe=e("API");function _e(s,l,r,b,w,u){const i=d("title-link"),a=d("component-api");return p(),_("div",null,[he,n(i,{class:"title1",h2:""},{default:o(()=>[pe]),_:1}),n(a,{class:"mt0",items:u.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(a,{items:s.slots,title:"Slots"},null,8,["items"]),n(a,{items:u.events,title:"Events"},null,8,["items"])])}const ve={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.',max:"The total count of buttons (usually stars) to display in the rating component.",icon:"Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",color:'Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the rating component (font-size).",sm:"Sets the size of the rating component (font-size).",md:"Sets the size of the rating component (font-size).",lg:"Sets the size of the rating component (font-size).",xl:"Sets the size of the rating component (font-size).",noRipple:"Removes the ripple animation on click of one of the buttons.",name:"Provide a native HTML <code>name</code> attribute to the rating component. If not provided, a unique name will be computed.",disabled:"Disables the rating component making it unreactive to user interactions.",readonly:"The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the rating component.",validators:'<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.'},be={item:{description:"Provide a custom content for each item.",params:{index:"The item index, starting at 1."}}},we={input:{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current rating."}},"update:modelValue":{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current rating."}},focus:{description:"Emitted when the rating component is focused (any button).",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted when the rating component is blurred (any button).",params:{"[DOM event object]":"The associated blur DOM event."}}},fe={data:()=>({propsDescs:ve,slots:be}),computed:{props(){return h(h({},x.props),z.props)},events(){return x.emits.reduce((s,l)=>(s[l]=we[l]||{})&&s,{})}}};var ye=v(fe,[["render",_e]]);const xe=e("w-rating");function ke(s,l,r,b,w,u){const i=d("ui-component-title"),a=d("examples"),c=d("api");return p(),_("main",null,[n(i,{slug:"w-rating"},{default:o(()=>[xe]),_:1}),n(a),n(c)])}const $e={components:{Examples:ge,Api:ye}};var Te=v($e,[["render",ke]]);export{Te as default};
