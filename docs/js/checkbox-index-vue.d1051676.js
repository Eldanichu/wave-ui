(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["checkbox-index-vue","checkbox-api-vue","checkbox-examples-vue"],{4754:function(e,t,o){"use strict";o.r(t);var c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-checkboxes-api"}},[e._v("<w-checkboxes> API")]),o("api",{staticClass:"mt0",attrs:{items:e.checkboxesProps,descriptions:e.checkboxes.propsDescs,title:"Props"}}),o("api",{attrs:{items:e.checkboxes.slots,title:"Slots"}}),o("api",{attrs:{items:e.checkboxesEvents,title:"Events"}}),o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-checkbox-api"}},[e._v("<w-checkbox> API")]),o("api",{staticClass:"mt0",attrs:{items:e.checkboxProps,descriptions:e.checkbox.propsDescs,title:"Props"}}),o("api",{attrs:{items:e.checkbox.slots,title:"Slots"}}),o("api",{attrs:{items:e.checkboxEvents,title:"Events"}})],1)},s=[],n=(o("13d5"),o("5530")),l=o("c0bc"),a=o("fc6d"),i=o("b0e5"),r={propsDescs:{items:"An array of checkbox items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of values to dictate the checked state of all the checkboxes.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each checkbox.",itemLabelKey:"The property name (aka key) in each item object where to find the label of the item (if any).",itemValueKey:"The property name (aka key) in each item object where to find the value of the item (if any).",itemColorKey:"The property name (aka key) in each item object where to find the color of the item (if any).",inline:"Displays all the checkboxes inline instead of in column.",round:"Displays round checkboxes instead of square ones.",color:'Applies a color to the active checkbox. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique common name will be computed and applied to all the checkboxes.",disabled:"Disables all the checkboxes making them unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each checkbox.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-checkboxes</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{item:{description:"Provide a custom content for each checkbox label."}},events:{input:{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the checkboxes is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"Array of <code>return-value</code> of each checked checkbox.<br>The <code>return-value</code> is one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},h={propsDescs:{value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a boolean to dictate the checked state the checkbox.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML checkbox element uses the <code>value</code> attribute to define the checked state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the checkbox is checked (instead of returning <code>true</code>).",label:"Sets a visible label for the checkbox.",labelOnLeft:"Moves the label to the left of the checkbox. By default the label is displayed on the right.",color:'Applies a color to the checkbox when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',noRipple:"Removes the ripple animation on check.",indeterminate:"Applies an indeterminate state on the checkbox. E.g. when it represents the selected state of a collection of elements where some are checked and some not.",round:"Displays a round checkbox instead of a square one.",name:"Provide a native HTML <code>name</code> attribute to the checkbox. If not provided, a unique name will be computed.",disabled:"Disables the checkbox making it unreactive to user interactions.",readonly:"The checkbox will still look like an interactive checkbox except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the checkbox.",validators:'<span class="deep-orange">Only for validation, when the checkbox is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the checkbox. Each function will be executed on checkbox validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the checkbox.'},slots:{default:{description:"The checkbox label content."}},events:{input:{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the checkbox."}},"update:modelValue":{description:"Emitted each time the state of the checkbox changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the checkbox."}},focus:{description:"Emitted on each checkbox focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},d={data:function(){return{checkboxes:r,checkbox:h}},computed:{checkboxesProps:function(){return Object(n["a"])(Object(n["a"])({},a["a"].props),l["a"].props)},checkboxProps:function(){return Object(n["a"])(Object(n["a"])({},i["a"].props),l["a"].props)},checkboxesEvents:function(){return a["a"].emits.reduce((function(e,t){return(e[t]=r.events[t]||{})&&e}),{})},checkboxEvents:function(){return i["a"].emits.reduce((function(e,t){return(e[t]=h.events[t]||{})&&e}),{})}}},b=d,u=o("2877"),m=Object(u["a"])(b,c,s,!1,null,null,null);t["default"]=m.exports},"494d":function(e,t,o){"use strict";o.r(t);var c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("w-card",{attrs:{"bg-color":"blue-light5"}},[o("p",{staticClass:"mb3"},[e._v("What it looks like:")]),o("w-checkboxes",{attrs:{items:e.checkboxes1,inline:""}}),o("div",{staticClass:"title4 mt4"},[e._v("States")]),o("div",{staticClass:"w-flex wrap"},[o("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,label:"Checked"}}),o("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!1,label:"Unchecked"}}),o("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,indeterminate:"",label:"Indeterminate"}}),o("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",label:"Checked &amp; disabled"}}),o("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!1,disabled:"",label:"Unchecked &amp; disabled"}}),o("w-checkbox",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",indeterminate:"",label:"Indeterminate &amp; disabled"}})],1)],1),e._m(0),e._m(1),o("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-checkbox"}},[e._v("<w-checkbox>")]),o("div",{staticClass:"w-divider"}),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Basic use\nw-checkbox Single option\n.title4.mt8.mb2 Using v-model on a single checkbox\nw-flex.align-center\n  w-checkbox(v-model="selection1") Single option\n  span.ml6\n    | v-model:\n    code.ml1 '+e._s("{{ selection1 }}")+'\n.title4.mt8.mb2 Using an array of v-model for multiple checkboxes\nw-flex.align-center\n  w-checkbox.mr2(v-model="selection2[0]") Option 1\n  w-checkbox.mr2(v-model="selection2[1]") Option 2\n  w-checkbox(v-model="selection2[2]") Option 3\n  span.ml6\n    | v-model:\n    code.ml1 '+e._s("{{ selection2 }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: false,\n  selection2: [false, false, false]\n})\n")]},proxy:!0}])},[o("div",{staticClass:"title4 mb2"},[e._v("Basic use")]),o("w-checkbox",[e._v("Single option")]),o("div",{staticClass:"title4 mt8 mb2"},[e._v("Using v-model on a single checkbox")]),o("w-flex",{staticClass:"align-center"},[o("w-checkbox",{model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}},[e._v("Single option")]),o("span",{staticClass:"ml6"},[e._v("v-model:"),o("code",{staticClass:"ml1"},[e._v(e._s(e.selection1))])])],1),o("div",{staticClass:"title4 mt8 mb2"},[e._v("Using an array of v-model for multiple checkboxes")]),o("w-flex",{staticClass:"align-center"},[o("w-checkbox",{staticClass:"mr2",model:{value:e.selection2[0],callback:function(t){e.$set(e.selection2,0,t)},expression:"selection2[0]"}},[e._v("Option 1")]),o("w-checkbox",{staticClass:"mr2",model:{value:e.selection2[1],callback:function(t){e.$set(e.selection2,1,t)},expression:"selection2[1]"}},[e._v("Option 2")]),o("w-checkbox",{model:{value:e.selection2[2],callback:function(t){e.$set(e.selection2,2,t)},expression:"selection2[2]"}},[e._v("Option 3")]),o("span",{staticClass:"ml6"},[e._v("v-model:"),o("code",{staticClass:"ml1"},[e._v(e._s(e.selection2))])])],1)],1),o("alert",{attrs:{info:""}},[e._v("Unlike the radio buttons, checkboxes don't need the "),o("code",[e._v("name")]),e._v(" prop in addition to the "),o("code",[e._v("v-model")]),e._v("\nto work together and control with arrow keys since the default HTML behavior does not include control from\nthe keyboard arrows (you can navigate with "),o("kbd",[e._v("tab")]),e._v(" and toggle with "),o("kbd",[e._v("space")]),e._v(" or "),o("kbd",[e._v("enter")]),e._v(")."),o("br"),e._v("\nWhen you use a group of checkboxes via <w-checkboxes>, Wave UI will add the name attributes for you.\n")]),o("alert",{attrs:{tip:""}},[o("strong",{staticClass:"title5"},[e._v("Form validation")]),o("p",[e._v("When a validation is needed on checkboxes, each individual checkbox ("),o("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(") has a\nseparate validation message."),o("br"),e._v("\nIf you want only one validation for a group of checkboxes you must use the "),o("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component.\n")])]),o("title-link",{attrs:{h2:""}},[e._v("Custom label in w-checkbox")]),e._m(2),o("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkbox.mr5(name="checkbox1")\n  span.pr1 Choice 1 has an icon\n  w-icon(md) mdi mdi-star\nw-checkbox(name="checkbox1")\n  w-tag(bg-color="green-light5" color="green-dark2")\n    | Choice 2 is a tag\n    w-icon.ml1 mdi mdi-heart\n')]},proxy:!0}])},[o("w-checkbox",{staticClass:"mr5",attrs:{name:"checkbox4"}},[o("span",{staticClass:"pr1"},[e._v("Choice 1 has an icon")]),o("w-icon",{attrs:{md:""}},[e._v("mdi mdi-star")])],1),o("w-checkbox",{attrs:{name:"checkbox4"}},[o("w-tag",{attrs:{"bg-color":"green-light5",color:"green-dark2"}},[e._v("Choice 2 is a tag"),o("w-icon",{staticClass:"ml1"},[e._v("mdi mdi-heart")])],1)],1)],1),o("alert",{staticClass:"mt8",attrs:{tip:""}},[e._v("As seen in this example, the "),o("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" component allows you to have complete freedom\nregarding your checkboxes content, style and layout."),o("br"),e._v("\nBut because in most cases you won't need that, the "),o("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component will make you\ngo much faster.\n")]),o("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-checkboxes"}},[e._v("<w-checkboxes>")]),o("div",{staticClass:"w-divider"}),e._m(3),o("title-link",{staticClass:"title2 primary",attrs:{h3:""}},[e._v("V-model")]),o("alert",{attrs:{info:""}},[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),o("br"),e._v("\nIf no value is set, the choice's label will be returned instead.")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.align-center\n  w-checkboxes(v-model="selection" :items="checkboxes")\n  .title3.ml8 v-model: '+e._s("{{ selection || '[]' }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: [],\n  checkboxes: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[o("div",{staticClass:"w-flex align-center"},[o("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selection1b,callback:function(t){e.selection1b=t},expression:"selection1b"}}),o("div",{staticClass:"title3 ml8"},[e._v("v-model:"),o("code",{staticClass:"ml1"},[e._v(e._s(e.selection1b||"[]"))])])],1)]),o("p",[e._v("The v-model can also be preset, or updated externally.")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.align-center\n  div\n    w-checkboxes(v-model="selection" :items="checkboxes")\n    w-button.mt2(@click="selection = selection.length ? [] : [2]")\n      | Toggle checkbox 2\n  div.title3.ml8\n    | v-model:\n    code.ml1 '+e._s("{{ selection || '[]' }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: [],\n  checkboxes: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[o("div",{staticClass:"w-flex align-center"},[o("div",[o("w-checkboxes",{attrs:{items:e.checkboxes1},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}}),o("w-button",{staticClass:"mt2",on:{click:function(t){e.selection3=e.selection3.length?[]:[2]}}},[e._v("Toggle checkbox 2")])],1),o("div",{staticClass:"title3 ml8"},[e._v("v-model:"),o("code",{staticClass:"ml1"},[e._v(e._s(e.selection3||"[]"))])])])]),o("title-link",{attrs:{h2:""}},[e._v("Layout")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Default column layout\nw-checkboxes(:items="checkboxes")\n\n.title4.mt6.mb2 Inline layout\nw-checkboxes(:items="checkboxes" inline)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  checkboxes: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[o("div",{staticClass:"title4 mb2"},[e._v("Default column layout")]),o("w-checkboxes",{attrs:{items:e.checkboxes1}}),o("div",{staticClass:"title4 mt6 mb2"},[e._v("Inline layout")]),o("w-checkboxes",{attrs:{items:e.checkboxes1,inline:""}})],1),o("title-link",{attrs:{h2:""}},[e._v("Custom label content")]),e._m(4),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkboxes(:items="checkboxes" color="green")\n  template(#item="{ item }")\n    span.pr2 '+e._s("{{ item.label }}")+"\n    w-icon.deep-purple "+e._s("{{ item.icon }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  checkboxes: [\n    { label: 'Square', icon: 'mdi mdi-square' },\n    { label: 'Circle', icon: 'mdi mdi-circle' },\n    { label: 'Triangle', icon: 'mdi mdi-triangle' }\n  ]\n})\n")]},proxy:!0}])},[o("w-checkboxes",{attrs:{items:e.checkboxes3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(t){var c=t.item;return[o("span",{staticClass:"pr2"},[e._v(e._s(c.label))]),o("w-icon",{staticClass:"deep-purple"},[e._v(e._s(c.icon))])]}}])})],1),o("div",{staticClass:"w-divider grey-light5 my12"}),o("title-link",{attrs:{h2:""}},[e._v("Round checkboxes")]),o("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkboxes(v-model="selection" :items="checkboxes" round inline)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: [1],\n  checkboxes: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[o("w-checkboxes",{attrs:{items:e.checkboxes1,round:"",inline:""},model:{value:e.selection8,callback:function(t){e.selection8=t},expression:"selection8"}})],1),o("title-link",{attrs:{h2:""}},[e._v("Color")]),e._m(5),o("title-link",{attrs:{h3:"",slug:"w-checkboxes--colors"}},[o("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" colors")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkboxes(v-model="selection1" :items="checkboxes1" color="purple")\n\n.title4.mt8.mb2 Different color per item\nw-checkboxes(v-model="selection2" :items="checkboxes2")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: [1, 2, 3],\n  checkboxes1: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ],\n  selection2: [1, 2, 3],\n  checkboxes2: [\n    { label: 'Choice 1', value: 1, color: 'amber' },\n    { label: 'Choice 2', value: 2, color: 'warning' },\n    { label: 'Choice 3', value: 3, color: 'error' }\n  ]\n})")]},proxy:!0}])},[o("w-checkboxes",{attrs:{items:e.checkboxes1,color:"purple"},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}}),o("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),o("w-checkboxes",{attrs:{items:e.checkboxes4},model:{value:e.selection7,callback:function(t){e.selection7=t},expression:"selection7"}})],1),o("title-link",{attrs:{h3:"",slug:"w-checkbox--colors"}},[o("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" colors")]),o("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-checkbox.mr2(v-model="selection1[0]" color="teal-light1") Option 1\nw-checkbox(v-model="selection1[1]" color="teal-light1") Option 2\n\n.title4.mt8.mb2 Different color per item\nw-checkbox.mr2(v-model="selection2[0]" color="pink-light3") Option 1\nw-checkbox(v-model="selection2[1]" color="blue-light1") Option 2')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: [true, true],\n  selection2: [true, true],\n  checkboxes: [\n    { label: 'Choice 1' },\n    { label: 'Choice 2' },\n    { label: 'Choice 3' }\n  ]\n})")]},proxy:!0}])},[o("w-checkbox",{staticClass:"mr2",attrs:{color:"teal-light1"},model:{value:e.selection5[0],callback:function(t){e.$set(e.selection5,0,t)},expression:"selection5[0]"}},[e._v("Option 1")]),o("w-checkbox",{attrs:{color:"teal-light1"},model:{value:e.selection5[1],callback:function(t){e.$set(e.selection5,1,t)},expression:"selection5[1]"}},[e._v("Option 2")]),o("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),o("w-checkbox",{staticClass:"mr2",attrs:{color:"pink-light3"},model:{value:e.selection6[0],callback:function(t){e.$set(e.selection6,0,t)},expression:"selection6[0]"}},[e._v("Option 1")]),o("w-checkbox",{attrs:{color:"blue-light1"},model:{value:e.selection6[1],callback:function(t){e.$set(e.selection6,1,t)},expression:"selection6[1]"}},[e._v("Option 2")])],1)],1)},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"mt12"},[e._v("There are 2 components: "),o("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),o("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(".\nThe later is a group of checkboxes for convenience.\n")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("In most cases what you need is the "),o("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component bellow, but let's start with the\nbasic component as it might be useful in single checkboxes and edge cases.\n")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("code",[e._v("w-checkbox")]),e._v(" provides a default slot to customize the content.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"my5"},[e._v("The "),o("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" component allows a fast and easy rendering of\nmultiple checkboxes by passing the items through a prop."),o("br"),e._v("\nIt accepts an inline parameter to display the checkboxes inline,\nand allows you to customize the label of each checkbox through slot.\n")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" provides a "),o("code",[e._v("label")]),e._v(" slot to customize the label of each checkbox button.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("By default the "),o("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),o("span",{staticClass:"code"},[e._v("w-checkboxes")]),e._v(" components will use the\nprimary color."),o("br"),e._v("\nYou can provide a different color with the "),o("code",[e._v("color")]),e._v(" option, or you can even set a different\ncolor per item by providing a "),o("code",[e._v("color")]),e._v(" attribute in each of the item objects.\n")])}],n={data:function(){return{selection1:!1,selection1b:[],selection2:[!1,!1,!1],selection3:[2],selection4:[1,2,3],selection5:[!0,!0],selection6:[!0,!0],selection7:[1,2,3],selection8:[1],checkboxes1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],checkboxes2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],checkboxes3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],checkboxes4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]}}},l=n,a=o("2877"),i=Object(a["a"])(l,c,s,!1,null,null,null);t["default"]=i.exports},a229:function(e,t,o){"use strict";o.r(t);var c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("ui-component-title",{attrs:{slug:"w-checkbox-and-w-checkboxes",code:!1}},[o("span",{staticClass:"code"},[e._v("w-checkbox")]),e._v(" & "),o("span",{staticClass:"code"},[e._v("w-checkboxes")])]),o("examples"),o("api")],1)},s=[],n=o("494d"),l=o("4754"),a={components:{Examples:n["default"],Api:l["default"]}},i=a,r=o("2877"),h=Object(r["a"])(i,c,s,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=checkbox-index-vue.d1051676.js.map