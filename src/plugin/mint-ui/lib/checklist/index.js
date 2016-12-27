module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 212);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports) {

module.exports = require("mint-ui/lib/cell");

/***/ },

/***/ 1:
/***/ function(module, exports) {

module.exports = require("mint-ui/lib/cell/style.css");

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(96)

/* script */
__vue_exports__ = __webpack_require__(55)

/* template */
var __vue_template__ = __webpack_require__(165)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 165:
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "mint-checklist",
    class: {
      'is-limit': max <= currentValue.length
    }
  }, [_h('label', {
    staticClass: "mint-checklist-title",
    domProps: {
      "textContent": _s(title)
    }
  }), " ", _l((options), function(option) {
    return _h('x-cell', [_h('label', {
      slot: "title",
      staticClass: "mint-checklist-label"
    }, [_h('span', {
      staticClass: "mint-checkbox",
      class: {
        'is-right': align === 'right'
      }
    }, [_h('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (currentValue),
        expression: "currentValue"
      }],
      staticClass: "mint-checkbox-input",
      attrs: {
        "type": "checkbox",
        "disabled": option.disabled
      },
      domProps: {
        "value": option.value || option,
        "checked": Array.isArray(currentValue) ? _i(currentValue, option.value || option) > -1 : _q(currentValue, true)
      },
      on: {
        "change": function($event) {
          var $$a = currentValue,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = option.value || option,
              $$i = _i($$a, $$v);
            if ($$c) {
              $$i < 0 && (currentValue = $$a.concat($$v))
            } else {
              $$i > -1 && (currentValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            currentValue = $$c
          }
        }
      }
    }), " ", _m(0, true)]), " ", _h('span', {
      staticClass: "mint-checkbox-label",
      domProps: {
        "textContent": _s(option.label || option)
      }
    })])])
  })])
}},staticRenderFns: [function (){with(this) {
  return _h('span', {
    staticClass: "mint-checkbox-core"
  })
}}]}

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_checklist_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_checklist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_checklist_vue__);

module.exports = __WEBPACK_IMPORTED_MODULE_0__src_checklist_vue___default.a;


/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui_packages_cell_index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui_packages_cell_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui_packages_cell_index_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


if (true) {
  __webpack_require__(1);
}

/**
 * mt-checklist
 * @module components/checklist
 * @desc 复选框列表，依赖 cell 组件
 *
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <mt-checklist :v-model="value" :options="['a', 'b', 'c']"></mt-checklist>
 */
/* harmony default export */ exports["default"] = {
  name: 'mt-checklist',

  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },

  components: { XCell: __WEBPACK_IMPORTED_MODULE_0_mint_ui_packages_cell_index_js___default.a },

  data: function data() {
    return {
      currentValue: this.value
    };
  },

  computed: {
    limit: function limit() {
      return this.max < this.currentValue.length;
    }
  },

  watch: {
    value: function value(val) {
      this.currentValue = val;
    },

    currentValue: function currentValue(val) {
      if (this.limit) val.pop();
      this.$emit('input', val);
    }
  }
};


/***/ },

/***/ 96:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }

/******/ });