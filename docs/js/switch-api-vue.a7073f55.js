(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["switch-api-vue"],{f252:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:e.slots,title:"Slots"}}),o("component-api",{attrs:{items:e.events,title:"Events"}})],1)},s=[],a=o("5530"),n=o("c0bc"),r=o("35bd"),l={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},c={default:{description:"The switch label content, if the label prop is not flexible enough."}},h={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},d={data:function(){return{propsDescs:l,slots:c}},computed:{props:function(){return Object(a["a"])(Object(a["a"])({},r["a"].props),n["a"].props)},events:function(){return r["a"].emits.reduce((function(e,t){return(e[t]=h[t]||{})&&e}),{})}}},p=d,u=o("2877"),w=Object(u["a"])(p,i,s,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=switch-api-vue.a7073f55.js.map