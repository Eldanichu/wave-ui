import{n as t,t as n}from"./index.679595ee.js";import"./vendor.852d958a.js";const e={};var o=t({data:()=>({showMenu:!1,showListMenu1:!1,showListMenu2:!1,list:null})},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Show on click or on hover")]),e("example",{staticClass:"example1",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-menu>\n  <template #activator="{ on }">\n    <w-button\n      v-on="on"\n      outline\n      color="primary"\n      class="mr3">\n      Show menu on click\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu show-on-hover>\n  <template #activator="{ on }">\n    <w-button v-on="on" outline color="primary">\n      Show menu on hover\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n')]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example1"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mb2 mr3",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on click")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example1","show-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mb2",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on hover")])]}}])},[t._v("Menu content")])],1),e("title-link",{attrs:{h2:""}},[t._v("Persistent menu")]),t._m(0),e("example",{staticClass:"example1",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-menu persistent>\n  <template #activator="{ on }">\n    <w-button\n      v-on="on"\n      outline\n      color="primary"\n      class="mr3">\n      Show persistent menu\n    </w-button>\n  </template>\n  Click on the button again to close\n</w-menu>\n')]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example1",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mb2 mr3",attrs:{outline:"",color:"primary"}},o),[t._v("Show persistent menu")])]}}])},[t._v("Click on the button again to close")])],1),e("title-link",{attrs:{h2:""}},[t._v("Hide menu on click inside")]),t._m(1),e("example",{staticClass:"example1",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-menu hide-on-menu-click>\n  <template #activator="{ on }">\n    <w-button\n      v-on="on"\n      outline\n      color="primary"\n      class="mr3">\n      Show menu\n    </w-button>\n  </template>\n  A click here will close the menu.\n</w-menu>\n')]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example1","hide-on-menu-click":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mb2 mr3",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu")])]}}])},[t._v("A click here will close the menu.")])],1),e("title-link",{attrs:{h2:""}},[t._v("Position")]),e("example",{staticClass:"example2",attrs:{"content-class":"py12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-flex :gap="3" wrap>\n  <w-menu left>\n    <template #activator="{ on }">\n      <w-button v-on="on" outline color="primary">\n        Show menu on left\n      </w-button>\n    </template>\n    Menu content\n  </w-menu>\n\n  <w-menu>\n    <template #activator="{ on }">\n      <w-button v-on="on" outline color="primary">\n        Show menu on bottom\n      </w-button>\n    </template>\n    Menu content\n  </w-menu>\n\n  <w-menu top>\n    <template #activator="{ on }">\n      <w-button v-on="on" outline color="primary">\n        Show menu on top\n      </w-button>\n    </template>\n    Menu content\n  </w-menu>\n\n  <w-menu right>\n    <template #activator="{ on }">\n      <w-button v-on="on" outline color="primary">\n        Show menu on right\n      </w-button>\n    </template>\n    Menu content\n  </w-menu>\n</w-flex>\n')]},proxy:!0}])},[e("w-flex",{attrs:{gap:3,wrap:""}},[e("w-menu",{attrs:{"detach-to":".example2",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on left")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on bottom")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on top")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on right")])]}}])},[t._v("Menu content")])],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Alignments")]),e("p",[t._v("In addition to positions, you can align the menu with its activator.")]),e("example",{staticClass:"example2",scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="title4 mb2">Top position</div>\n<w-menu top align-left>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Align left\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu top>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Centered\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu top align-right>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Align right\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<div class="title4 mt6 mb2">Bottom position</div>\n<w-menu align-left>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Align left\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Centered\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu align-right>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Align right\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<div class="title4 mt6 mb2">Right position</div>\n<w-menu right align-top>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Align top\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu right>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Centered\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu right align-bottom>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">Alig\n      n bottom\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<div class="title4 mt6 mb2">Left position</div>\n<w-menu left align-top>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">A\n      lign top\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu left>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Centered\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n\n<w-menu left align-bottom>\n  <template #activator="{ on }">\n    <w-button class="ma1" v-on="on" outline color="primary">\n      Align bottom\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n')]},proxy:!0}])},[e("div",{staticClass:"title4 mb2"},[t._v("Top position")]),e("w-menu",{attrs:{"detach-to":".example2",top:"","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",top:"","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),e("div",{staticClass:"title4 mt6 mb2"},[t._v("Bottom position")]),e("w-menu",{attrs:{"detach-to":".example2","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),e("div",{staticClass:"title4 mt6 mb2"},[t._v("Right position")]),e("w-menu",{attrs:{"detach-to":".example2",right:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",right:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")]),e("div",{staticClass:"title4 mt6 mb2"},[t._v("Left position")]),e("w-menu",{attrs:{"detach-to":".example2",left:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",left:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")])],1),e("title-link",{attrs:{h2:""}},[t._v("Color & background color")]),t._m(2),e("example",{staticClass:"example3",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-menu color="blue-dark2" bg-color="blue-light5">\n  <template #activator="{ on }">\n    <w-button v-on="on" outline color="primary">\n      Show a blue menu\n    </w-button>\n  </template>\n  Menu content\n</w-menu>\n')]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example3",color:"blue-dark2","bg-color":"blue-light5"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a blue menu")])]}}])},[t._v("Menu content")])],1),e("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),e("example",{staticClass:"example4",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-flex wrap :gap="3">\n  <w-menu tile>\n    <template #activator="{ on }">\n      <w-button v-on="on" outline color="primary">\n        Show a tile menu\n      </w-button>\n    </template>\n    Menu content\n    </template>\n  </w-menu>\n\n  <w-menu round>\n    <template #activator="{ on }">\n      <w-button v-on="on" outline color="primary">\n        Show a round menu\n      </w-button>\n    </template>\n    Menu content\n    </template>\n  </w-menu>\n\n  <w-menu shadow>\n    <template #activator="{ on }">\n      <w-button v-on="on" outline color="primary">\n        Show a shadow menu\n      </w-button>\n    </template>\n    Menu content\n    </template>\n  </w-menu>\n</w-flex>\n')]},proxy:!0}])},[e("w-flex",{attrs:{wrap:"",gap:3}},[e("w-menu",{attrs:{"detach-to":".example4",tile:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a tile menu")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example4",round:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a round menu")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example4",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a shadow menu")])]}}])},[t._v("Menu content")])],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Menu content: w-card")]),e("p",[t._v("By default the menu is a w-card, so it accepts all the props of a w-card.")]),e("example",{staticClass:"example5",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-menu shadow v-model="showMenu">\n  <template #activator>\n    <w-button\n      class="mr3"\n      @click="showMenu = true"\n      outline\n      color="primary">\n      Show a w-card menu\n    </w-button>\n  </template>\n\n  <div class="title4">\n    How much do you like Wave UI?\n  </div>\n\n  <p>Pick a serious answer.</p>\n\n  <w-flex class="pl10 mt4" wrap justify-end>\n    <w-button\n      class="mr1"\n      text\n      color="green"\n      @click="showMenu = false">\n      Love it!\n    </w-button>\n\n    <w-button\n      class="mr1"\n      text\n      color="green"\n      @click="showMenu = false">\n      Love it!\n    </w-button>\n\n    <w-button\n      text\n      color="green"\n      @click="showMenu = false">\n      Love it!\n    </w-button>\n  </w-flex>\n</w-menu>\n\n<w-menu shadow custom>\n  <template #activator="{ on }">\n    <w-button v-on="on" outline color="primary">\n      Show a list menu\n    </w-button>\n  </template>\n\n  <w-card content-class="pa0">\n    <w-toolbar>\n      <div class="title3 ma0">Menu Title</div>\n      <div class="spacer"></div>\n      <span class="ml1">Item 1</span>\n      <span class="ml1">Item 2</span>\n    </w-toolbar>\n\n    <div class="pa3">\n      This is some content in a w-card component.\n    </div>\n  </w-card>\n</w-menu>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false\n})\n")]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example5",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("w-button",{staticClass:"mr3 mb2",attrs:{outline:"",color:"primary"},on:{click:function(n){t.showMenu=!0}}},[t._v("Show a w-card menu")])]},proxy:!0}]),model:{value:t.showMenu,callback:function(n){t.showMenu=n},expression:"showMenu"}},[e("div",{staticClass:"title4"},[t._v("How much do you like Wave UI?")]),e("p",[t._v("Pick a serious answer.")]),e("w-flex",{staticClass:"pl10 mt4",attrs:{wrap:"","justify-end":""}},[e("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(n){t.showMenu=!1}}},[t._v("Love it!")]),e("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(n){t.showMenu=!1}}},[t._v("Love it!")]),e("w-button",{attrs:{text:"",color:"green"},on:{click:function(n){t.showMenu=!1}}},[t._v("Love it!")])],1)],1),e("w-menu",{attrs:{"detach-to":".example5",shadow:"",custom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mb2",attrs:{outline:"",color:"primary"}},o),[t._v("Show a list menu")])]}}])},[e("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[e("w-toolbar",[e("div",{staticClass:"title3 ma0"},[t._v("Menu Title")]),e("div",{staticClass:"spacer"}),e("span",{staticClass:"ml1"},[t._v("Item 1")]),e("span",{staticClass:"ml1"},[t._v("Item 2")])]),e("div",{staticClass:"pa3"},[t._v("This is some content in a w-card component.")])],1)],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Custom content: List menu")]),t._m(3),e("example",{staticClass:"example6",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-menu\n  custom\n  hide-on-menu-click\n  persistent\n  shadow>\n  <template #activator="{ on }">\n    <w-button v-on="on" outline color="primary">\n      Show a list menu\n    </w-button>\n  </template>\n\n  <w-list\n    class="white--bg"\n    v-model="listSelection"\n    :items="listItems"\n    item-class="px8">\n  </w-list>\n</w-menu>\n\n<div class="mt4">\n  <strong>Current selection:</strong>\n  <code class="ml1">'+t._s("{{ listSelection || 'none' }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false,\n  listSelection: null,\n  listItems: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example6",custom:"","hide-on-menu-click":"",persistent:"",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show a list menu")])]}}])},[e("w-list",{staticClass:"white--bg",attrs:{items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],"item-class":"px8"},model:{value:t.list,callback:function(n){t.list=n},expression:"list"}})],1),e("div",{staticClass:"mt4"},[e("strong",[t._v("Current selection:")]),e("code",{staticClass:"ml1"},[t._v(t._s(t.list||"none"))])])],1),e("title-link",{attrs:{h2:""}},[t._v("Menu with overlay")]),e("example",{staticClass:"example7",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-menu v-model="showMenu" shadow custom overlay>\n  <template #activator="{ on }">\n    <w-button v-on="on" outline color="primary">\n      Show a menu & overlay\n    </w-button>\n  </template>\n\n  <w-list\n    class="white--bg"\n    nav\n    :items="listItems"\n    item-class="px8"\n    @item-select="showMenu = false">\n  </w-list>\n</w-menu>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false,\n  listItems: [\n    { label: 'Item 1', route: '#item1' },\n    { label: 'Item 2', route: '#item2' },\n    { label: 'Item 3', route: '#item3' }\n  ]\n})")]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example7",shadow:"",custom:"",overlay:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show a menu & overlay")])]}}]),model:{value:t.showListMenu2,callback:function(n){t.showListMenu2=n},expression:"showListMenu2"}},[e("w-list",{staticClass:"white--bg",attrs:{nav:"",items:[{label:"Item 1",route:"#item1"},{label:"Item 2",route:"#item2"},{label:"Item 3",route:"#item3"}],"item-class":"px8"},on:{"item-select":function(n){t.showListMenu2=!1}}})],1)],1)],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("A persistent menu can only be closed by clicking on the activator again, or programmatically."),e("br"),t._v("\nClicking outside the menu will not close it.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("A persistent menu can only be closed by clicking on the activator again, or programmatically."),e("br"),t._v("\nClicking outside the menu will not close it.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Like in most components, you can define a "),e("code",[t._v("color")]),t._v(" and a  "),e("code",[t._v("bg-color")]),t._v(".")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("By default the menu is a "),e("strong",{staticClass:"code"},[t._v("w-card")]),t._v(". But if you need more flexibility, you can set the\n"),e("code",[t._v("custom")]),t._v(" prop and put whatever you want in the free-of-style menu."),e("br"),t._v("\nIn this example, the menu is "),e("code",[t._v("persistent")]),t._v(" so the user is forced to select an option from\nthe menu when open. Then on click of an option, the menu will hide thanks to the option\n"),e("code",[t._v("hide-on-menu-click")]),t._v(".")])}],!1,a,null,null,null);function a(t){for(let n in e)this[n]=e[n]}var s=function(){return o.exports}();const l={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.',showOnHover:"Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.",hideOnMenuClick:"Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.",color:'Applies a color to the menu\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the menu\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the menu element.",custom:'By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to true.',tile:"Removes the default border-radius and sets sharp edges on the menu.",round:"Sets a maximum border-radius on the corners of the menu, giving it a round look.",noBorder:"Removes the default border from the menu element.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',menuClass:"Applies a custom CSS class to the menu element.",titleClass:"Applies a custom CSS class to the menu's title when using the default card layout (when not using the <code>custom</code> prop).",contentClass:"Applies a custom CSS class to the menu's content when using the default card layout (when not using the <code>custom</code> prop).",detachTo:'Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>By default a wrapper is created around the activator element and the menu is appended inside it.',fixed:"Sets the CSS position of the menu to <code>fixed</code> (absolute by default).",top:"Places the menu at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container otherwise.",bottom:"Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container otherwise.",left:"Places the menu at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container otherwise.",right:"Places the menu at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container otherwise.",alignTop:"Aligns the top of the menu with the top of the activator.",alignBottom:"Aligns the bottom of the menu with the bottom of the activator.",alignLeft:"Aligns the left side of the menu with the left side of the activator.",alignRight:"Aligns the right side of the menu with the right side of the activator.",zIndex:"Applies a z-index (positive or negative integer) to the menu.",minWidth:"Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",overlay:"Displays a full screen overlay underneath the menu.",persistent:"When set to true, clicking outside of the menu will not close the menu."},i={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},title:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The menu content."},actions:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},r={input:"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on menu close.",open:"Emitted on menu open."},c={};var u=t({data:()=>({propsDescs:l,slots:i}),computed:{props:()=>n.props,events:()=>n.emits.reduce(((t,n)=>(t[n]={description:r[n]||""})&&t),{})}},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)}),[],!1,m,null,null,null);function m(t){for(let n in c)this[n]=c[n]}const p={};var h=t({components:{Examples:s,Api:function(){return u.exports}()}},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("ui-component-title",[t._v("w-menu")]),e("examples"),e("api")],1)}),[],!1,w,null,null,null);function w(t){for(let n in p)this[n]=p[n]}var v=function(){return h.exports}();export default v;