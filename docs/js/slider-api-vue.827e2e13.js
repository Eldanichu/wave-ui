(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["slider-api-vue"],{e498:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"w-divider my12"}),r("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),r("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),r("component-api",{attrs:{items:e.slots,title:"Slots"}}),r("component-api",{attrs:{items:e.events,title:"Events"}})],1)},o=[],a=r("1352"),l={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.',color:'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color to the slider\'s track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',stepLabels:"A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.",thumblabel:"Sets a visible label for the slider.",thumbLabelClass:"Applies a custom CSS class to the slider's thumb label.",trackClass:"Applies a custom CSS class to the slider's track.",rangeClass:"Applies a custom CSS class to the slider's highlighted range.",step:"Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.",min:"Sets an integer or floating minimum number for the slider.",max:"Sets an integer or floating maximum number for the slider.",labelLeft:"Defines a label to display on the left of the slider.",labelRight:"Defines a label to display on the right of the slider.",name:"Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.",disabled:"Disables the slider making it unreactive to user interactions.",readonly:"The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the slider.",validators:'<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.'},i={},n={input:{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current value of the slider."}},"update:modelValue":{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current value of the slider."}},focus:{description:"Emitted when the slider is focused (the thumb button).",params:{"[DOM event object]":"The associated focus DOM event."}}},c={data:function(){return{propsDescs:l,slots:i}},computed:{props:function(){return a["a"].props},events:function(){return a["a"].emits.reduce((function(e,t){return(e[t]=n[t]||{})&&e}),{})}}},d=c,u=r("2877"),h=Object(u["a"])(d,s,o,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=slider-api-vue.827e2e13.js.map