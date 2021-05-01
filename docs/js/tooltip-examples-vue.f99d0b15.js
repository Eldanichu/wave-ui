(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tooltip-examples-vue"],{2914:function(t,n,o){},"3f75":function(t,n,o){"use strict";o("2914")},e565:function(t,n,o){"use strict";o.r(n);var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"tooltips-demo"},[o("alert",{attrs:{tip:""}},[o("strong",[t._v("Important notes")]),o("br"),t._v("\nBy default when you use "),o("code",[t._v("<w-tooltip>")]),t._v(", it creates a wrapper around the activator\nelement and the tooltip is added inside this wrapper."),o("br"),t._v("\nIn this case you can add classes to the wrapper to style it as desired."),o("br"),o("br"),t._v("\nBut in some cases, for instance if the activator element is placed in a container that has a hidden\noverflow, the tooltip needs to be placed outside of this container to be fully visible."),o("br"),t._v("\nYou can use the "),o("code",[t._v("detachTo")]),t._v(" prop to place it elsewhere in the DOM, like in the\n"),o("a",{attrs:{href:"#appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),t._v(" example."),o("br"),t._v("\nIn this case, the wrapper will be hidden and unstylable whereas the tooltip itself will be appended to\nthe DOM node you provided.\n")]),o("title-link",{attrs:{h2:""}},[t._v("Tooltip position")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="text-center">\n  <w-tooltip left>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="primary-light2">\n        mdi mdi-home\n      </w-icon>\n    </template>\n    Home\n  </w-tooltip>\n\n  <w-tooltip top>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="primary-light2">\n        mdi mdi-home\n      </w-icon>\n    </template>\n    Home\n  </w-tooltip>\n\n  <w-tooltip>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="primary-light2">\n        mdi mdi-home\n      </w-icon>\n    </template>\n    Home\n  </w-tooltip>\n\n  <w-tooltip right>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="primary-light2">\n        mdi mdi-home\n      </w-icon>\n    </template>\n    Home\n  </w-tooltip>\n</div>\n')]},proxy:!0}])},[o("w-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1),o("title-link",{attrs:{h2:""}},[t._v("Toggle on click")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="text-center">\n  <w-tooltip show-on-click left>\n    <template #activator="{ on }">\n      <w-button\n        class="ma2"\n        v-on="on"\n        bg-color="info">\n        <w-icon class="mr1">\n          wi-star\n        </w-icon>\n        Star\n      </w-button>\n    </template>\n    Star\n  </w-tooltip>\n\n  <w-tooltip show-on-click right>\n    <template #activator="{ on }">\n      <w-button\n        class="ma2"\n        v-on="on"\n        bg-color="info-dark2"\n        dark>\n        <w-icon class="mr1">\n          wi-star\n        </w-icon>\n        Star\n      </w-button>\n    </template>\n    Star\n  </w-tooltip>\n</div>\n')]},proxy:!0}])},[o("w-tooltip",{attrs:{"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info"}},a),[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info-dark2",dark:""}},a),[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")])],1),o("title-link",{attrs:{h2:""}},[t._v("Using v-model")]),o("title-link",{attrs:{h3:""}},[t._v("Toggle with v-model")]),o("p",[t._v("Click the button to toggle the tooltips.")]),o("example",{attrs:{"content-class":"text-center my4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="text-center">\n  <w-button\n    @click="showTooltip = !showTooltip"\n    class="my2 mx6"\n    bg-color="primary"\n    dark\n    width="6em">\n    '+t._s("{{ showTooltip ? 'Hide' : 'Show' }}")+' tooltip\n  </w-button>\n\n  <div class="d-iblock my2 mx6">\n    <w-tooltip\n      class="ma2"\n      v-model="showTooltip"\n      show-on-click\n      left>\n      <template #activator="{ on }">\n        <w-icon v-on="on">wi-star</w-icon>\n      </template>\n      Star\n    </w-tooltip>\n\n    <w-tooltip\n      class="ma2"\n      v-model="showTooltip"\n      show-on-click\n      top>\n      <template #activator="{ on }">\n        <w-icon v-on="on">wi-star</w-icon>\n      </template>\n      Star\n    </w-tooltip>\n\n    <w-tooltip\n      class="ma2"\n      v-model="showTooltip"\n      show-on-click>\n      <template #activator="{ on }">\n        <w-icon v-on="on">wi-star</w-icon>\n      </template>\n      Star\n    </w-tooltip>\n\n    <w-tooltip\n      class="ma2"\n      v-model="showTooltip"\n      show-on-click\n      right>\n      <template #activator="{ on }">\n        <w-icon v-on="on">wi-star</w-icon>\n      </template>\n      Star\n    </w-tooltip>\n  </div>\n</div>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showTooltip: false\n})\n")]},proxy:!0}])},[o("w-button",{staticClass:"my2 mx6",attrs:{"bg-color":"primary",dark:"",width:"6em"},on:{click:function(n){t.showTooltip=!t.showTooltip}}},[t._v(t._s(t.showTooltip?"Hide":"Show")+" tooltip")]),o("div",{staticClass:"d-iblock my2 mx6"},[o("w-tooltip",{staticClass:"ma2",attrs:{value:t.showTooltip,"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({},a),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{staticClass:"ma2",attrs:{value:t.showTooltip,"show-on-click":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({},a),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{staticClass:"ma2",attrs:{value:t.showTooltip,"show-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({},a),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{staticClass:"ma2",attrs:{value:t.showTooltip,"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({},a),[t._v("wi-star")])]}}])},[t._v("Star")])],1)],1),o("title-link",{attrs:{h3:""}},[t._v("Using v-model to update a variable")]),o("p",[t._v("Click the star to toggle the tooltip.")]),o("example",{attrs:{"content-class":"text-center my4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tooltip\n  v-model="showTooltip"\n  show-on-click\n  right>\n  <template #activator="{ on }">\n    <w-icon v-on="on">wi-star</w-icon>\n  </template>\n  Star\n</w-tooltip>\n\n<div class="mt4">\n  The tooltip is '+t._s("{{ showTooltip ? 'visible' : 'hidden' }}")+".\n</div>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showTooltip: false\n})\n")]},proxy:!0}])},[o("w-tooltip",{attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({},a),[t._v("wi-star")])]}}]),model:{value:t.showTooltip2,callback:function(n){t.showTooltip2=n},expression:"showTooltip2"}},[t._v("Star")]),o("div",{staticClass:"mt4"},[t._v("The tooltip is "+t._s(t.showTooltip2?"visible":"hidden")+".")])],1),o("title-link",{attrs:{h2:""}},[t._v("Background color & text color")]),t._m(0),o("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="text-center pb8">\n  <w-tooltip color="white" bg-color="blue">\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="blue">\n        wi-star\n      </w-icon>\n    </template>\n    Star\n  </w-tooltip>\n\n  <w-tooltip color="white" bg-color="purple">\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="purple">\n        wi-star\n      </w-icon>\n    </template>\n    Star\n  </w-tooltip>\n\n  <w-tooltip\n    color="orange-dark1"\n    bg-color="yellow-light3">\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="amber">\n        wi-star\n      </w-icon>\n    </template>\n    Star\n  </w-tooltip>\n\n  <w-tooltip color="orange">\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl>\n        wi-star\n      </w-icon>\n    </template>\n    Star\n  </w-tooltip>\n</div>\n')]},proxy:!0}])},[o("w-tooltip",{attrs:{color:"white","bg-color":"blue"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"blue"}},a),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"white","bg-color":"purple"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"purple"}},a),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"orange-dark1","bg-color":"yellow-light3"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},a),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"orange"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:""}},a),[t._v("wi-star")])]}}])},[t._v("Star")])],1),o("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),o("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="text-center pb8">\n  <w-tooltip color="red-light2" tile>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="red-light2">\n        mdi mdi-square\n      </w-icon>\n    </template>\n    Tile\n  </w-tooltip>\n\n  <w-tooltip color="amber-dark1" round>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="amber">\n        mdi mdi-circle\n      </w-icon>\n    </template>\n    Round\n  </w-tooltip>\n\n  <w-tooltip color="pink-light1" shadow>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="pink-light1">\n        mdi mdi-heart\n      </w-icon>\n    </template>\n    Shadow\n  </w-tooltip>\n</div>\n')]},proxy:!0}])},[o("w-tooltip",{attrs:{color:"red-light2",tile:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"red-light2"}},a),[t._v("mdi mdi-square")])]}}])},[t._v("Tile")]),o("w-tooltip",{attrs:{color:"amber-dark1",round:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},a),[t._v("mdi mdi-circle")])]}}])},[t._v("Round")]),o("w-tooltip",{attrs:{color:"pink-light1",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"pink-light1"}},a),[t._v("mdi mdi-heart")])]}}])},[t._v("Shadow")])],1),o("title-link",{attrs:{h2:""}},[t._v("Different contents")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="text-center">\n  <w-tooltip class="ma3" color="primary">\n    <template #activator="{ on }">\n      <span v-on="on">\n        Content with icon\n      </span>\n    </template>\n    <w-icon class="mr1">wi-star</w-icon>\n    Star\n  </w-tooltip>\n\n  <w-tooltip class="ma3" color="primary">\n    <template #activator="{ on }">\n      <span v-on="on" ref="truc">\n        Very long content\n      </span>\n    </template>\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n    <br />\n    Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!\n    <br />\n    <br />\n    Recusandae distinctio perferendis expedita pariatur fuga.\n  </w-tooltip>\n</div>\n')]},proxy:!0}])},[o("w-tooltip",{staticClass:"ma3",attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("span",t._g({},a),[t._v("Content with icon")])]}}])},[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1),o("w-tooltip",{staticClass:"ma3",attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("span",t._g({ref:"truc"},a),[t._v("Very long content")])]}}])},[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),o("br"),t._v("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),o("br"),o("br"),t._v("Recusandae distinctio perferendis expedita pariatur fuga.")])],1),o("title-link",{attrs:{h2:""}},[t._v("Transitions")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="text-center">\n  <w-radios\n    class="my4"\n    inline\n    v-model="transition"\n    :items="transitions">\n  </w-radios>\n\n  <div class="text-center py6">\n    <w-tooltip :transition="transition" left>\n      <template #activator="{ on }">\n        <w-icon\n          class="ma2"\n          v-on="on"\n          color="primary"\n          xl>\n          mdi mdi-home\n        </w-icon>\n      </template>\n      Home\n    </w-tooltip>\n\n    <w-tooltip :transition="transition">\n      <template #activator="{ on }">\n        <w-icon\n          class="ma2"\n          v-on="on"\n          color="primary"\n          xl>\n          mdi mdi-home\n        </w-icon>\n      </template>\n      Home\n    </w-tooltip>\n\n    <w-tooltip :transition="transition" top>\n      <template #activator="{ on }">\n        <w-icon\n          class="ma2"\n          v-on="on"\n          color="primary"\n          xl>\n          mdi mdi-home\n        </w-icon>\n      </template>\n      Home\n    </w-tooltip>\n\n    <w-tooltip :transition="transition" right>\n      <template #activator="{ on }">\n        <w-icon\n          class="ma2"\n          v-on="on"\n          color="primary"\n          xl>\n          mdi mdi-home\n        </w-icon>\n      </template>\n      Home\n    </w-tooltip>\n  </div>\n</div>\n')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  transition: 'bounce',\n  transitions: [\n    { label: 'Default', value: '' },\n    { label: 'Bounce', value: 'bounce' },\n    { label: 'Scale', value: 'scale' },\n    { label: 'Twist', value: 'twist' },\n    { label: 'Fade', value: 'fade' },\n    { label: 'Scale-fade', value: 'scale-fade' }\n  ]\n})\n")]},proxy:!0}])},[o("w-radios",{staticClass:"my4",attrs:{inline:"",items:t.transitions},model:{value:t.transition,callback:function(n){t.transition=n},expression:"transition"}}),o("div",{staticClass:"text-center py6"},[o("w-tooltip",{attrs:{transition:t.transition,left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{transition:t.transition},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{transition:t.transition,top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{transition:t.transition,right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},a),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1)],1),o("title-link",{attrs:{h2:"",slug:"appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),o("p",[t._v("In this example, the yellow container of the pink activator has an overflow hidden, but we want the\ntooltip to be fully visible. So we detach it to the green container.")]),o("example",{staticClass:"mb12",attrs:{"content-class":"pa0"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="wrapper text-center green-light5--bg pa6">\n  <w-card bg-color="yellow-light5">\n    <w-tooltip detach-to=".wrapper">\n      <template #activator="{ on }">\n        <w-tag\n          v-on="on"\n          lg\n          color="pink-light1"\n          bg-color="pink-light5">\n          <w-icon class="mr1">mdi mdi-bomb</w-icon>\n          Hover me\n      </template>\n\n      <span>\n        This tooltip is appended to the green container!\n      </span>\n    </w-tooltip>\n  </w-card>\n</div>')]},proxy:!0},{key:"css",fn:function(){return[t._v(".wrapper {position: relative;}\n\n.w-card {\n  overflow: hidden;\n  display: inline-block;\n  padding: 8px;\n}\n\n.w-card:before, .w-card:after {\n  content: '';\n  position: absolute;\n  background-color: #ffea62;\n  width: 6em;\n  height: 6em;\n  border-radius: 100%;\n}\n\n.w-card:before {top: 0;left: 0;}\n.w-card:after {bottom: 0;right: 0;}\n\n.w-tag {z-index: 1;}\n")]},proxy:!0}])},[o("div",{staticClass:"another-container text-center green-light5--bg pa6"},[o("w-card",{attrs:{"bg-color":"yellow-light5"}},[o("w-tooltip",{attrs:{"detach-to":".another-container"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[o("w-tag",t._g({attrs:{lg:"",color:"pink-light1","bg-color":"pink-light5"}},a),[o("w-icon",{staticClass:"mr1"},[t._v("mdi mdi-bomb")]),t._v("Hover me")],1)]}}])},[o("span",[t._v("This tooltip is appended to the "),o("span",{staticClass:"green"},[t._v("green")]),t._v(" container!")])])],1)],1)]),o("alert",{attrs:{warning:""}},[t._v("The DOM element that the tooltip is detached to must have a position (fixed, absolute or\nrelative).")])],1)},i=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("p",[t._v("Like in most components, you can set a "),o("code",[t._v("color")]),t._v(" for the text and a "),o("code",[t._v("bg-color")]),t._v(" for the\nbackground.")])}],e={data:function(){return{showTooltip:!1,showTooltip2:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}]}}},l=e,r=(o("3f75"),o("2877")),s=Object(r["a"])(l,a,i,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=tooltip-examples-vue.f99d0b15.js.map