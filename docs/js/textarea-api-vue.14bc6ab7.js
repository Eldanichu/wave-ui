(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["textarea-api-vue"],{f9bc:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),a("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),a("component-api",{attrs:{items:e.slots,title:"Slots"}}),a("component-api",{attrs:{items:e.events,title:"Events"}})],1)},i=[],r=a("5530"),n=a("c0bc"),s=a("2d9f"),l={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The text content of the textarea.<br>Gets updated on textarea input.',label:"Sets a visible label for the textarea.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the textarea when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.",color:'Applies a color to the textarea\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the textarea\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the textarea.",noAutogrow:"Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.",resizable:"Allows native resizing of the textarea's height.",tile:"Removes the default border-radius and sets sharp edges on the textarea.",rows:"The default and minimum number of rows to display in the textarea (native HTML attribute).",cols:"Applies the native HTML <code>cols</code> attribute to the textarea (native HTML attribute).",name:"Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.",disabled:"Disables the textarea making it unreactive to user interactions.",readonly:"The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the textarea.",validators:'<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.'},c={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},d={input:{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textarea value."}},"update:modelValue":{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textarea value."}},focus:{description:"Emitted on textarea focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on textarea blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},h={data:function(){return{propsDescs:l,slots:c}},computed:{props:function(){return Object(r["a"])(Object(r["a"])({},s["a"].props),n["a"].props)},events:function(){return s["a"].emits.reduce((function(e,t){return(e[t]=d[t]||{})&&e}),{})}}},p=h,u=a("2877"),b=Object(u["a"])(p,o,i,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=textarea-api-vue.14bc6ab7.js.map