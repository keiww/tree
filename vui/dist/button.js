import 'core-js/modules/es6.function.name';
import { _ as _objectSpread, a as __vue_normalize__ } from './chunk-ea0da42a.js';
import _get from 'lodash/get';

var script = {
  name: 'vui-button',
  data: function data() {
    return {
      a: {
        b: {
          c: 'hi'
        }
      }
    };
  },
  created: function created() {
    var _this = this;

    console.log('vui-button created');
    var val = 'hhhh';
    console.log('test const to var', val);
    console.log('test lodash', _get(this.a, 'b.c'));
    console.log('test object spread', _objectSpread({}, this.a));

    var fn = function fn() {
      return _this.a;
    };

    console.log('test arrow function', fn());
  },
  methods: {
    click: function click(e) {
      alert(e.target.textContent);
    }
  }
};

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    { staticClass: "vui-btn", on: { click: _vm.click } },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component(component.name, component);
}

export default component;
export { install };
