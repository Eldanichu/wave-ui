(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["select-index-vue","select-api-vue","select-examples-vue"],{"0a8b":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"w-divider my12"}),l("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),l("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),l("api",{attrs:{items:e.slots,title:"Slots"}}),l("api",{attrs:{items:e.events,title:"Events"}})],1)},i=[],n=(l("13d5"),l("5530")),a=l("c0bc"),o=l("12fd"),r={items:"Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.",value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The current selection of the select field.<br>Gets updated on selection change.',multiple:"Allows multiple selections. When set to true, the list of choices will stay open after selecting an item.",placeholder:"Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",label:"Sets a visible label for the select field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",itemLabelKey:"The property name (aka key) in each item object where to find the label of the item.",itemValueKey:"The property name (aka key) in each item object where to find the value of the item.",itemClass:"Applies a custom CSS class to each select list item.",menuClass:"Applies a custom CSS class to the select list's floatting menu element.",color:'Applies a color to the select\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the select\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the select field, giving it a round look.",shadow:"Applies a drop shadow to the select field.",tile:"Removes the default border-radius and sets sharp edges on the select field.",dark:!1,returnObject:"The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",name:"Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.",disabled:"Disables the select field making it unreactive to user interactions.",readonly:"The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the select field.",validators:'<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.'},c={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},selection:{description:"Provide a custom template for the selection string.",params:{item:"The selected item(s) object(s). May be an array if <code>multiple</code> is true, or a single object otherwise."}},item:{description:"Provide a common custom template for all the select list items.",params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}}},m={input:{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to true, single value otherwise."}},"update:modelValue":{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to true, single value otherwise."}},focus:{description:"Emitted on select focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on select blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},d={data:function(){return{propsDescs:r,slots:c}},computed:{props:function(){return Object(n["a"])(Object(n["a"])({},o["a"].props),a["a"].props)},events:function(){return o["a"].emits.reduce((function(e,t){return(e[t]=m[t]||{})&&e}),{})}}},u=d,p=l("2877"),b=Object(p["a"])(u,s,i,!1,null,null,null);t["default"]=b.exports},fcee:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("main",[l("ui-component-title",[e._v("w-select")]),l("examples"),l("api")],1)},i=[],n=l("ffa8"),a=l("0a8b"),o={components:{Examples:n["default"],Api:a["default"]}},r=o,c=l("2877"),m=Object(c["a"])(r,s,i,!1,null,null,null);t["default"]=m.exports},ffa8:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("alert",{attrs:{info:""}},[e._v("The "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component can be placed in a hidden overflow container and the dropdown\nmenu will still be fully visible when open."),l("br"),e._v("\nThis is because the select dropdown menu is placed at the "),l("span",{staticClass:"code"},[e._v(".w-app")]),e._v(" level in the DOM,\njust so you don't have to worry about this annoying case.\n")]),l("title-link",{attrs:{h2:""}},[e._v("Basic")]),e._m(0),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1}})],1),l("title-link",{attrs:{h2:""}},[e._v("Label and / or placeholder")]),e._m(1),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" label="Label")\nw-select.mt4(:items="items" placeholder="Placeholder")\nw-select.mt4(:items="items" label="Label" placeholder="Placeholder")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,label:"Label"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,placeholder:"Placeholder"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Label",placeholder:"Placeholder"}})],1),l("alert",{attrs:{tip:""}},[e._v("The items of the select list should have a label, which is by default expected in each item\nobject under the "),l("code",[e._v("label")]),e._v(" name."),l("br"),e._v("\nIf this is a constraint, you can use the option "),l("code",[e._v("item-label-key")]),e._v(" to specify the name of another\nattribute to be used instead.\n")]),l("title-link",{attrs:{h2:""}},[e._v("Outline")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" outline) Label')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,outline:""}},[e._v("Label")])],1),l("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(2),l("div",{staticClass:"title3"},[e._v("Default style (Underline)")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" color="blue") Label\nw-select.mt4(:items="items" bg-color="blue-light5" color="blue-dark3") Label')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,color:"blue"}},[e._v("Label")]),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,"bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Label")])],1),l("div",{staticClass:"title3"},[e._v("Outline style")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" outline color="blue") Label\nw-select.mt4(:items="items" outline bg-color="blue-light5" color="blue-dark3") Label')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,outline:"",color:"blue"}},[e._v("Label")]),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,outline:"","bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Label")])],1),l("title-link",{attrs:{h2:""}},[e._v("Shadow")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Default style (Underline)\nw-select(:items="items" shadow) Label\n\n.title4.mt6.mb2 Outline style\nw-select(:items="items" outline shadow) Label')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4"},[e._v("Default style (Underline)")]),l("w-select",{attrs:{items:e.items1,shadow:""}},[e._v("Label")]),l("div",{staticClass:"title4 mt6"},[e._v("Outline style")]),l("w-select",{attrs:{items:e.items1,outline:"",shadow:""}},[e._v("Label")])],1),l("title-link",{attrs:{h2:""}},[e._v("Tile & round")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4 Default style (Underline)\nw-select.mt3(:items="items" bg-color="purple-light5" tile) Tile\nw-select.mt4(:items="items" bg-color="purple-light5" round) Round\n\n.title4.mt6 Outline style\nw-select.mt3(:items="items" outline tile) Tile\nw-select.mt4(:items="items" outline round) Round')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4"},[e._v("Default style (Underline)")]),l("w-select",{attrs:{items:e.items1,"bg-color":"purple-light5",tile:""}},[e._v("Tile")]),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,"bg-color":"purple-light5",round:""}},[e._v("Round")]),l("div",{staticClass:"title4 mt6"},[e._v("Outline style")]),l("w-select",{attrs:{items:e.items1,outline:"",tile:""}},[e._v("Tile")]),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,outline:"",round:""}},[e._v("Round")])],1),l("title-link",{attrs:{h2:""}},[e._v("Multiple selection")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" multiple)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,multiple:""}})],1),l("title-link",{attrs:{h2:""}},[e._v("V-model")]),l("alert",{attrs:{tip:""}},[e._v("By default, the "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component expects the items to have a "),l("code",[e._v("value")]),e._v(" attribute."),l("br"),e._v("\nIf this is a constraint, you can use the option "),l("code",[e._v("item-value-key")]),e._v(" to specify the name of another\nattribute to be used instead (must have a unique value), like an id for instance.")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(v-model="selection" :items="items" multiple)\nw-flex.align-center.mt4\n  span v-model:\n  code.ml2 '+e._s("{{ selection }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 }\n  ],\n  selection: [1, 3]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items3,multiple:""},model:{value:e.vModelSelect1,callback:function(t){e.vModelSelect1=t},expression:"vModelSelect1"}}),l("w-flex",{staticClass:"align-center mt4"},[l("span",[e._v("v-model:")]),l("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect1))])])],1),l("title-link",{attrs:{h3:""}},[e._v("Without values (using labels)")]),l("p",[e._v("If no values are provided in the items objects, the labels will be used to identify the selected items.")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(v-model="selection" :items="items" multiple)\nw-flex.align-center.mt4\n  span v-model:\n  code.ml2 '+e._s("{{ selection }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ],\n  selection: ['Item 1', 'Item 3']\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,multiple:""},model:{value:e.vModelSelect2,callback:function(t){e.vModelSelect2=t},expression:"vModelSelect2"}}),l("w-flex",{staticClass:"align-center mt4"},[l("span",[e._v("v-model:")]),l("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect2))])])],1),l("title-link",{attrs:{h3:""}},[e._v("Using full objects in v-model")]),e._m(3),l("p"),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(v-model="selection" :items="items" multiple return-object)\nw-flex.align-center.mt4\n  span v-model:\n  code.ml2 '+e._s("{{ selection }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ],\n  selection: [{ label: 'Item 3' }]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,multiple:"","return-object":""},model:{value:e.vModelSelect3,callback:function(t){e.vModelSelect3=t},expression:"vModelSelect3"}}),l("w-flex",{staticClass:"align-center mt4"},[l("span",[e._v("v-model:")]),l("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect3))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Label position")]),l("p",[e._v("By default the label is positioned inside, you can also place it on the left or right outside of\nthe select list.")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" label="Select an item")\nw-select.mt4(:items="items" label="Select an item" label-position="left")\nw-select.mt4(:items="items" label="Select an item" label-position="right")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,label:"Select an item"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select an item","label-position":"left"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select an item","label-position":"right"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Custom label")]),e._m(4),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" label-position="inside" outline)\n  w-icon.orange mdi mdi-arrow-right\n  span.purple.mx1 Inside\n  w-icon.orange mdi mdi-arrow-left\nw-select.mt4(:items="items" label-position="left" outline)\n  span.green.mr1 Left\n  w-icon.orange mdi mdi-arrow-right\nw-select.mt4(:items="items" label-position="right" outline)\n  w-icon.orange mdi mdi-arrow-left\n  span.red.ml1 Right')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,"label-position":"inside",outline:""}},[l("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")]),l("span",{staticClass:"purple mx1"},[e._v("Inside")]),l("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")])],1),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,"label-position":"left",outline:""}},[l("span",{staticClass:"green mr1"},[e._v("Left")]),l("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")])],1),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,"label-position":"right",outline:""}},[l("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")]),l("span",{staticClass:"red ml1"},[e._v("Right")])],1)],1),l("title-link",{attrs:{h2:""}},[e._v("Custom selection string")]),e._m(5),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" v-model="selection" multiple)\n  template(#selection="{ item }")\n    w-tag.mr2(v-for="(item, i) in item" :key="i" bg-color="grey-light4")\n      | '+e._s("{{ item.label }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 }\n  ],\n  selection: [1, 3]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items3,multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){var s=t.item;return e._l(s,(function(t,s){return l("w-tag",{key:s,staticClass:"mr2",attrs:{"bg-color":"grey-light4"}},[e._v(e._s(t.label))])}))}}]),model:{value:e.customSelection,callback:function(t){e.customSelection=t},expression:"customSelection"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Custom list items")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items")\n  template(#item="{ item, selected }")\n    w-icon.primary(v-if="selected") wi-check\n    span.px2(v-else)\n    span.ml1 '+e._s("{{ item.label }}")+'\n    w-tag.ml2(bg-color="grey-light4" xs) '+e._s("{{ item.value }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items3},scopedSlots:e._u([{key:"item",fn:function(t){var s=t.item,i=t.selected;return[i?l("w-icon",{staticClass:"primary"},[e._v("wi-check")]):l("span",{staticClass:"px2"}),l("span",{staticClass:"ml1"},[e._v(e._s(s.label))]),l("w-tag",{staticClass:"ml2",attrs:{"bg-color":"grey-light4",xs:""}},[e._v(e._s(s.value))])]}}])})],1),l("title-link",{attrs:{h2:""}},[e._v("Inner icons")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Label outside\nw-select(:items="items" label="Left" label-position="left" outline inner-icon-left="mdi mdi-star")\nw-select.mt4(:items="items" label="Right" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")\n\n.title4.mt6.mb2 Label inside\nw-select(:items="items" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")\nw-select.mt4(:items="items" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4 mb2"},[e._v("Label outside")]),l("w-select",{attrs:{items:e.items1,label:"Select","label-position":"left",outline:"","inner-icon-left":"mdi mdi-star"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select","label-position":"right",outline:"","inner-icon-right":"mdi mdi-arrow-down"}}),l("div",{staticClass:"title4 mt6 mb2"},[e._v("Label inside")]),l("w-select",{attrs:{items:e.items1,label:"Select","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-star"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-arrow-down"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select.mb4(\n  :items="items"\n  label="Disabled & empty"\n  outline\n  disabled)\nw-select.mb4(\n  :items="items"\n  value="Item 1"\n  label="Disabled & filled"\n  outline\n  disabled)\nw-select.mb4(\n  :items="items"\n  label="Readonly & empty"\n  outline\n  readonly)\nw-select(\n  :items="items"\n  value="Item 1"\n  label="Readonly & filled"\n  outline\n  readonly)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})")]},proxy:!0}])},[l("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Disabled & empty",outline:"",disabled:""}}),l("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Disabled & filled",value:"Item 1",outline:"",disabled:""}}),l("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Readonly & empty",outline:"",readonly:""}}),l("w-select",{attrs:{items:e.items1,value:"Item 1",label:"Readonly & filled",outline:"",readonly:""}})],1)],1)},i=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("This is the most basic use of the "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component. No label, no v-model only items.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("The select list can have a label or not and a placeholder or not."),l("br")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",{staticClass:"mb4"},[e._v("Like in most components, you can set a "),l("code",[e._v("color")]),e._v(" for the text and a "),l("code",[e._v("bg-color")]),e._v(" for the\nbackground."),l("br"),e._v('\nBy default, the text has the "'),l("span",{staticClass:"code"},[e._v("primary")]),e._v('" color.')])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("If it's more convenient for you, you can ask the "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component to return the\nfull items objects in the selection."),l("br"),e._v("\nYou then have the choice to provide an array of either values or full objects in the v-model,\nif you want to prefill the select list.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It is convenient to have the label inside the "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component to let it handle\nthe field focus event on label click."),l("br"),e._v("\nThe "),l("span",{staticClass:"code"},[e._v("label")]),e._v(" prop accepts any HTML, but because passing complex html via a prop is not fun,\nthere is also a prop for setting the label wish will grant more freedom.\n")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("The selection string is customizable through the "),l("code",[e._v("selection")]),e._v(" slot."),l("br"),e._v("\nFor consistency, the name of the provided parameter containing the selected item(s) is "),l("code",[e._v("item")]),e._v(",\nwhether you use a multiple or single select list.")])}],n={data:function(){return{items1:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],items3:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:["Item 1","Item 3"],vModelSelect3:[{label:"Item 3"}]}}},a=n,o=l("2877"),r=Object(o["a"])(a,s,i,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=select-index-vue.e3113fe6.js.map