(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_axil-main_src_layouts_main_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  props: {
    color: String,
    icon: String,
    border: Number,
    iconSize: Number,
    size: String
  },
  setup: function setup(__props) {
    var props = __props;
    return {
      props: props,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  props: {
    label: String,
    modelValue: String,
    size: String
  },
  emits: ['update:modelValue'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;

    var updateValue = function updateValue(value) {
      emit('update:modelValue', value);
    };

    var size = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.size ? props.size : 'md';
    });
    return {
      props: props,
      emit: emit,
      updateValue: updateValue,
      size: size,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  props: {
    iconWIdth: Number,
    totalNotification: Number,
    notificationList: Array
  },
  setup: function setup(__props) {
    var props = __props;
    var iconNumberWIdth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.iconWIdth * .8;
    });
    return {
      props: props,
      iconNumberWIdth: iconNumberWIdth,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  props: {
    height: Number,
    title: String,
    status: String,
    image: String
  },
  setup: function setup(__props) {
    var props = __props;
    var statusColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (props.status == 'active') {
        return '#3EB75E';
      } else {
        return '#9c9c9c';
      }
    });
    return {
      props: props,
      statusColor: statusColor,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./resources/js/axil-main/src/layouts/main/controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  setup: function setup(__props) {
    var menu = _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.menu,
        navbar = _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.navbar,
        menuTotalSpace = _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.menuTotalSpace;
    return {
      menu: menu,
      navbar: navbar,
      menuTotalSpace: menuTotalSpace,
      controller: _controller_js__WEBPACK_IMPORTED_MODULE_0__.default
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  setup: function setup(__props) {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_cc_mainsearch_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/cc-mainsearch.vue */ "./resources/js/axil-main/src/components/cc-mainsearch.vue");
/* harmony import */ var _components_cc_profile_image_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/cc-profile-image.vue */ "./resources/js/axil-main/src/components/cc-profile-image.vue");
/* harmony import */ var _components_cc_notification_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cc-notification.vue */ "./resources/js/axil-main/src/components/cc-notification.vue");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller.js */ "./resources/js/axil-main/src/layouts/main/controller.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  setup: function setup(__props) {
    var menu = _controller_js__WEBPACK_IMPORTED_MODULE_3__.default.menu,
        navbar = _controller_js__WEBPACK_IMPORTED_MODULE_3__.default.navbar,
        toggleMenu = _controller_js__WEBPACK_IMPORTED_MODULE_3__.default.toggleMenu,
        menuTotalSpace = _controller_js__WEBPACK_IMPORTED_MODULE_3__.default.menuTotalSpace;
    var select = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(null);
    var ShowFullSearch = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(false);
    return {
      menu: menu,
      navbar: navbar,
      toggleMenu: toggleMenu,
      menuTotalSpace: menuTotalSpace,
      select: select,
      ShowFullSearch: ShowFullSearch,
      CcMainsearch: _components_cc_mainsearch_vue__WEBPACK_IMPORTED_MODULE_0__.default,
      CcProfileImage: _components_cc_profile_image_vue__WEBPACK_IMPORTED_MODULE_1__.default,
      CcNotification: _components_cc_notification_vue__WEBPACK_IMPORTED_MODULE_2__.default,
      controller: _controller_js__WEBPACK_IMPORTED_MODULE_3__.default,
      ref: vue__WEBPACK_IMPORTED_MODULE_4__.ref
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menubar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menubar.vue */ "./resources/js/axil-main/src/layouts/main/Menubar.vue");
/* harmony import */ var _Body_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Body.vue */ "./resources/js/axil-main/src/layouts/main/Body.vue");
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/axil-main/src/layouts/main/Header.vue");
/* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.vue */ "./resources/js/axil-main/src/layouts/main/Footer.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller.js */ "./resources/js/axil-main/src/layouts/main/controller.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  setup: function setup(__props) {
    var innitialLoader = _controller_js__WEBPACK_IMPORTED_MODULE_5__.default.innitialLoader,
        resizeController = _controller_js__WEBPACK_IMPORTED_MODULE_5__.default.resizeController;
    (0,vue__WEBPACK_IMPORTED_MODULE_4__.onBeforeMount)(function () {
      innitialLoader();
      window.addEventListener('resize', resizeController);
    });
    return {
      innitialLoader: innitialLoader,
      resizeController: resizeController,
      LayoutMenubar: _Menubar_vue__WEBPACK_IMPORTED_MODULE_0__.default,
      LayourBody: _Body_vue__WEBPACK_IMPORTED_MODULE_1__.default,
      LayoytHeader: _Header_vue__WEBPACK_IMPORTED_MODULE_2__.default,
      LayoutFooter: _Footer_vue__WEBPACK_IMPORTED_MODULE_3__.default,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_4__.onBeforeMount,
      controller: _controller_js__WEBPACK_IMPORTED_MODULE_5__.default
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_cc_icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/cc-icon.vue */ "./resources/js/axil-main/src/components/cc-icon.vue");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./resources/js/axil-main/src/layouts/main/controller.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./resources/js/axil-main/src/layouts/main/menu.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  expose: [],
  setup: function setup(__props) {
    var menu = _controller_js__WEBPACK_IMPORTED_MODULE_1__.default.menu,
        floatingShadow = _controller_js__WEBPACK_IMPORTED_MODULE_1__.default.floatingShadow,
        toggleMenu = _controller_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleMenu,
        pindetail = _controller_js__WEBPACK_IMPORTED_MODULE_1__.default.pindetail;
    var selectedMenu = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)('home');
    var menuItem = (0,vue__WEBPACK_IMPORTED_MODULE_3__.reactive)([]);

    var menuSelected = function menuSelected(item, index) {
      selectedMenu.value = item;
      menuItem.length = 0;
      menuItem.push.apply(menuItem, _toConsumableArray(_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuData[index].items));
      menu.menuDetail = true;
      console.log(menuItem);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(function () {
      menuItem.push.apply(menuItem, _toConsumableArray(_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuData[0].items));
    });
    return {
      menu: menu,
      floatingShadow: floatingShadow,
      toggleMenu: toggleMenu,
      pindetail: pindetail,
      selectedMenu: selectedMenu,
      menuItem: menuItem,
      menuSelected: menuSelected,
      CcIcon: _components_cc_icon_vue__WEBPACK_IMPORTED_MODULE_0__.default,
      controller: _controller_js__WEBPACK_IMPORTED_MODULE_1__.default,
      menuData: _menu_js__WEBPACK_IMPORTED_MODULE_2__.menuData,
      ref: vue__WEBPACK_IMPORTED_MODULE_3__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_3__.reactive,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_3__.onMounted,
      computed: vue__WEBPACK_IMPORTED_MODULE_3__.computed
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=template&id=2d6bdb8e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=template&id=2d6bdb8e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    "class": "cc-icon",
    style: {
      borderWidth: $setup.props.border == undefined ? '0px' : $setup.props.border + 'px',
      backgroundColor: $setup.props.color,
      fontSize: $setup.props.iconSize + 'px'
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: "/icons/".concat($setup.props.icon, ".svg"),
    style: {
      width: $setup.props.iconSize + 'px',
      display: 'block'
    }
  }, null, 12
  /* STYLE, PROPS */
  , ["src"])], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=template&id=04cebf3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=template&id=04cebf3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cc-main-serach-container"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  style: {
    width: '35px'
  }
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  style: {
    "flex": "auto"
  }
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cc-main-serach-icon-container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/icons/search.svg",
  alt: "*"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "class": "cc-main-serach",
    type: "text",
    placeholder: $setup.props.label,
    value: $setup.props.modelValue,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return $setup.updateValue($event.target.value);
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["placeholder", "value"])]), _hoisted_4]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=template&id=5a45adab":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=template&id=5a45adab ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cc-notification-container"
};
var _hoisted_2 = {
  "class": "cc-notification-icon"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: "/icons/notification.svg",
    style: {
      width: $setup.props.iconWIdth + 'px'
    }
  }, null, 12
  /* STYLE, PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "cc-notification-number",
    style: {
      width: $setup.iconNumberWIdth + 'px',
      height: $setup.iconNumberWIdth + 'px'
    }
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.totalNotification), 5
  /* TEXT, STYLE */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=template&id=e3f70eb2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=template&id=e3f70eb2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cc-profile-image-main-container"
};
var _hoisted_2 = {
  "class": "profile-image-container"
};
var _hoisted_3 = {
  "class": "profile-image-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "profile-image-box",
    style: {
      height: $setup.props.height + 'px',
      width: $setup.props.height + 'px'
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $setup.props.image,
    style: {
      "width": "100%"
    }
  }, null, 8
  /* PROPS */
  , ["src"])], 4
  /* STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "profile-image-status",
    style: {
      backgroundColor: $setup.statusColor
    }
  }, null, 4
  /* STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.title), 1
  /* TEXT */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=template&id=1e6f35d4":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=template&id=1e6f35d4 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    "class": "layout--main-body",
    style: {
      marginLeft: $setup.menuTotalSpace + 'px',
      marginTop: $setup.navbar.height + 'px'
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=template&id=7d19358f":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=template&id=7d19358f ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "layout--main-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=template&id=c368ccfe":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=template&id=c368ccfe ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "w100 flx"
};
var _hoisted_2 = {
  "class": "flx-auto"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/icons/close.svg",
  style: {
    "width": "20px"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 1,
  "class": "flx w100"
};
var _hoisted_5 = {
  "class": "flx-auto hide flx-md"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/icons/list.svg",
  style: {
    "width": "30px"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/icons/f-search.svg",
  style: {
    "width": "25px"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  style: {
    "flex": "3"
  },
  "class": "hide-md"
};
var _hoisted_9 = {
  style: {
    "flex": "2",
    "display": "flex"
  }
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  style: {
    "flex": "1"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "header-notification-container"
};
var _hoisted_12 = {
  "class": "header-propic-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    "class": "layout--main-header",
    style: {
      left: $setup.menuTotalSpace + 'px',
      height: $setup.navbar.height + 'px'
    }
  }, [$setup.menu.fullSearchBar && $setup.ShowFullSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CcMainsearch"], {
    modelValue: $setup.select,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.select = $event;
    }),
    label: "Search"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "center pointer",
    style: {
      "padding": "0px 10px"
    },
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.ShowFullSearch = !$setup.ShowFullSearch;
    })
  }, [_hoisted_3])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.ShowFullSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "center pointer",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleMenu();
    })
  }, [_hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "center pointer",
    style: {
      "padding-left": "20px"
    },
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.ShowFullSearch = !$setup.ShowFullSearch;
    })
  }, [_hoisted_7])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CcMainsearch"], {
    modelValue: $setup.select,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.select = $event;
    }),
    label: "Search"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CcNotification"], {
    iconWIdth: 20,
    totalNotification: 3
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CcProfileImage"], {
    height: 45,
    image: "https://avatars.githubusercontent.com/u/4?v=4",
    status: "active",
    title: "James Anderson"
  })])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=template&id=ea6964a6":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=template&id=ea6964a6 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "layout--main"
};
var _hoisted_2 = {
  style: {
    "flex": "auto"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LayoutMenubar"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LayourBody"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LayoytHeader"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)])])];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=template&id=6e15b0e0":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=template&id=6e15b0e0 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/logo.png",
  style: {
    "width": "100%"
  }
})], -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "menu-icon-container"
};
var _hoisted_3 = {
  "class": "menu-detail-header"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "menu-detail-header-title"
}, "Project", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "menu-detail-header-icon"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  style: {
    "height": "70px"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "menu-detail"
};
var _hoisted_8 = {
  "class": "menu-detail-icon"
};
var _hoisted_9 = {
  "class": "menu-detail-name"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "menu-detail-arrow"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "menu-detail-sub-gap"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "menu-detail-sub-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [$setup.menu.status == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    key: 0,
    "class": "layout--main-menubar",
    style: {
      right: $setup.floatingShadow == true ? 0 : 'auto'
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "layout--main-menu-icon-container",
    style: {
      width: $setup.menu.minifyMenuWidth + 'px',
      height: '100vh'
    }
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.menuData, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      "class": "menu-icon",
      key: index,
      style: {
        backgroundColor: $setup.selectedMenu == item.name ? '#FFFFFF' : ''
      },
      onClick: function onClick($event) {
        return $setup.menuSelected(item.name, index);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      src: "/icons/".concat(item.icon, ".svg"),
      style: {
        width: '20px',
        filter: $setup.selectedMenu == item.name ? 'brightness(0%)' : 'brightness(100%)'
      }
    }, null, 12
    /* STYLE, PROPS */
    , ["src"])], 12
    /* STYLE, PROPS */
    , ["onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 4
  /* STYLE */
  ), $setup.menu.menuDetail ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    key: 0,
    "class": "layout--main-detail-container",
    style: {
      width: $setup.menu.menuWidth + 'px'
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CcIcon"], {
    color: "#0049C6",
    iconSize: 14,
    icon: "plus-black"
  })])]), _hoisted_6, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.menuItem, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      key: index,
      "class": "menu-detail-container"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      src: "/icons/".concat(item.icon, ".svg"),
      style: {
        "width": "15px"
      }
    }, null, 8
    /* PROPS */
    , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ), _hoisted_10]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.subItem, function (subItem, subIndex) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
        key: subIndex,
        "class": "menu-detail-sub"
      }, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subItem.name), 1
      /* TEXT */
      )]);
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 4
  /* STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleMenu();
    }),
    style: {
      "flex": "auto"
    }
  })], 4
  /* STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/controller.js":
/*!***************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/controller.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  minifyMenuWidth: 80,
  menuWidth: 250,
  status: true,
  statusSelected: true,
  menuDetail: true,
  pinned: true,
  smBreakPoint: 500,
  xlBreakPoint: 1200,
  lgBreakPoint: 1000,
  mdBreakPoint: 700,
  windowWidth: 0,
  fullSearchBar: true
});
var navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  height: 90
});
var memory = {
  status: null,
  menuDetail: null
};
var menuTotalSpace = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  if (menu.windowWidth < menu.mdBreakPoint) {
    return 0;
  } else {
    if (menu.status == true && menu.pinned == true) {
      return menu.menuWidth + menu.minifyMenuWidth;
    } else if (menu.status == true && menu.pinned == false) {
      return menu.minifyMenuWidth;
    } else {
      return 0;
    }
  }
});
var floatingShadow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  if (menu.windowWidth < menu.mdBreakPoint && menu.status == true) {
    return true;
  } else {
    if (menu.menuDetail == true && menu.pinned == false && menu.status == true) {
      return true;
    }
  }

  return false;
});

var pindetail = function pindetail() {
  if (menu.pinned == true) {
    menu.pinned = false;
    menu.menuDetail = false;
  } else {
    menu.pinned = true;
  }
};

var toggleMenu = function toggleMenu() {
  if (window.innerWidth > menu.mdBreakPoint) {
    menu.status == true ? menu.menuDetail = false : menu.status = true;
  } else {
    menu.status == true ? menu.status = false : menu.status = true;
    menu.menuDetail = true;
  }
};

var resizeController = function resizeController() {
  menu.windowWidth = window.innerWidth;
  menu.fullSearchBar = false;

  if (window.innerWidth > menu.xlBreakPoint) {
    console.log('cc');

    if (memory.status == true) {
      menu.status = true;
    }

    if (memory.menuDetail == true) {
      menu.menuDetail = true;
      menu.pinned = true;
    }
  } else if (window.innerWidth > menu.lgBreakPoint) {
    if (memory.status == true) {
      menu.status = true;
    }

    menu.menuDetail = false;
    menu.pinned = false;
  } else if (window.innerWidth > menu.mdBreakPoint) {
    if (memory.status == true) {
      menu.status = true;
    }

    menu.menuDetail = false;
    menu.pinned = false;
  } else {
    menu.status = false;
    menu.fullSearchBar = true;
  }
};

var innitialLoader = function innitialLoader() {
  menu.windowWidth = window.innerWidth;
  memory.status = menu.status;
  memory.menuDetail = menu.menuDetail;
  menu.fullSearchBar = false;

  if (window.innerWidth > menu.xlBreakPoint) {} else if (window.innerWidth > menu.lgBreakPoint) {
    menu.menuDetail = false;
    menu.pinned = false;
  } else if (window.innerWidth > menu.mdBreakPoint) {
    menu.menuDetail = false;
    menu.pinned = false;
  } else {
    menu.status = false;
    menu.fullSearchBar = true;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  //Variables
  menu: menu,
  navbar: navbar,
  //Computed Properties
  floatingShadow: floatingShadow,
  menuTotalSpace: menuTotalSpace,
  //Functions
  resizeController: resizeController,
  innitialLoader: innitialLoader,
  pindetail: pindetail,
  toggleMenu: toggleMenu
});

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/menu.js":
/*!*********************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/menu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuData": () => (/* binding */ menuData)
/* harmony export */ });
var menuData = [{
  name: 'home',
  icon: 'home',
  items: [{
    type: 'list',
    icon: 'pulse',
    name: 'In Progress',
    subItem: [{
      type: 'btn',
      name: 'Web App'
    }, {
      type: 'btn',
      name: 'App Design'
    }]
  }]
}, {
  name: 'messenger',
  icon: 'messenger',
  items: []
}, {
  name: 'folder',
  icon: 'folder',
  items: []
}, {
  name: 'mail',
  icon: 'mail',
  items: []
}, {
  name: 'user',
  icon: 'user',
  items: []
}];


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cc-icon {\n  border-radius: 50px;\n  border-color: #EFF1F6;\n  border-style: solid;\n  display: inline-block;\n  padding: 0.6em;\n  cursor: pointer;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cc-main-serach-container {\n  display: flex;\n  position: relative;\n  background-color: #FFFFFF;\n  border-radius: 50px;\n  padding: 20px 25px;\n}\n.cc-main-serach-icon-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  padding: 20px 0px 25px 20px;\n}\n.cc-main-serach-icon-container img {\n  width: 20px;\n}\n.cc-main-serach {\n  font-size: 18px;\n  border-width: 0px;\n  background-color: #FFFFFF;\n  color: #000000;\n  width: 100%;\n}\n.cc-main-serach:focus {\n  outline: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cc-notification-container {\n  position: relative;\n  display: inline-block;\n}\n.cc-notification-icon {\n  cursor: pointer;\n}\n.cc-notification-number {\n  position: absolute;\n  top: -20%;\n  right: -50%;\n  border-radius: 50%;\n  background-color: #ff9100;\n  border: 1px solid #ffffff;\n  font-size: 10px;\n  line-height: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cc-profile-image-main-container {\n  display: flex;\n}\n.profile-image-container {\n  position: relative;\n}\n.profile-image-box {\n  border-radius: 50px;\n  overflow: hidden;\n  border: 1px solid #e6e6e6;\n}\n.profile-image-status {\n  border-radius: 50%;\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  width: 15px;\n  height: 15px;\n  border: 1px solid #FFFFFF;\n}\n.profile-image-title {\n  flex: auto;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  color: #808191;\n  font-size: 14px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-notification-container {\n  display: flex;\n  align-items: center;\n  padding: 0px 30px;\n}\n.header-propic-container {\n  display: flex;\n  align-items: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu-icon-container {\n  padding: 20px 10px 10px 10px;\n  display: flex;\n  flex-direction: column;\n}\n.menu-icon {\n  border-radius: 20px;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.menu-detail-header {\n  display: flex;\n  padding-bottom: 30px;\n}\n.menu-detail-header-title {\n  font-size: 20px;\n  font-weight: bold;\n  flex: auto;\n  padding-top: 3px;\n}\n.menu-detail {\n  display: flex;\n  padding: 8px 0px;\n  color: #808191;\n  font-weight: bold;\n}\n.menu-detail-icon {\n  width: 35px;\n}\n.menu-detail-sub {\n  display: flex;\n}\n.menu-detail-sub-gap {\n  width: 35px;\n}\n.menu-detail-sub-title {\n  padding: 8px 0px;\n  color: #808191;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_icon_vue_vue_type_style_index_0_id_2d6bdb8e_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_icon_vue_vue_type_style_index_0_id_2d6bdb8e_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_icon_vue_vue_type_style_index_0_id_2d6bdb8e_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_mainsearch_vue_vue_type_style_index_0_id_04cebf3e_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_mainsearch_vue_vue_type_style_index_0_id_04cebf3e_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_mainsearch_vue_vue_type_style_index_0_id_04cebf3e_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_notification_vue_vue_type_style_index_0_id_5a45adab_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_notification_vue_vue_type_style_index_0_id_5a45adab_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_notification_vue_vue_type_style_index_0_id_5a45adab_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_profile_image_vue_vue_type_style_index_0_id_e3f70eb2_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_profile_image_vue_vue_type_style_index_0_id_e3f70eb2_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_profile_image_vue_vue_type_style_index_0_id_e3f70eb2_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_c368ccfe_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_c368ccfe_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_c368ccfe_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menubar_vue_vue_type_style_index_0_id_6e15b0e0_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menubar_vue_vue_type_style_index_0_id_6e15b0e0_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menubar_vue_vue_type_style_index_0_id_6e15b0e0_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-icon.vue":
/*!***********************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-icon.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cc_icon_vue_vue_type_template_id_2d6bdb8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cc-icon.vue?vue&type=template&id=2d6bdb8e */ "./resources/js/axil-main/src/components/cc-icon.vue?vue&type=template&id=2d6bdb8e");
/* harmony import */ var _cc_icon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cc-icon.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/components/cc-icon.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _cc_icon_vue_vue_type_style_index_0_id_2d6bdb8e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss */ "./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss");




;
_cc_icon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _cc_icon_vue_vue_type_template_id_2d6bdb8e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_cc_icon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/components/cc-icon.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_cc_icon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-mainsearch.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-mainsearch.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cc_mainsearch_vue_vue_type_template_id_04cebf3e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cc-mainsearch.vue?vue&type=template&id=04cebf3e */ "./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=template&id=04cebf3e");
/* harmony import */ var _cc_mainsearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cc-mainsearch.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _cc_mainsearch_vue_vue_type_style_index_0_id_04cebf3e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss */ "./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss");




;
_cc_mainsearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _cc_mainsearch_vue_vue_type_template_id_04cebf3e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_cc_mainsearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/components/cc-mainsearch.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_cc_mainsearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-notification.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-notification.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cc_notification_vue_vue_type_template_id_5a45adab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cc-notification.vue?vue&type=template&id=5a45adab */ "./resources/js/axil-main/src/components/cc-notification.vue?vue&type=template&id=5a45adab");
/* harmony import */ var _cc_notification_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cc-notification.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/components/cc-notification.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _cc_notification_vue_vue_type_style_index_0_id_5a45adab_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss */ "./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss");




;
_cc_notification_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _cc_notification_vue_vue_type_template_id_5a45adab__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_cc_notification_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/components/cc-notification.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_cc_notification_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-profile-image.vue":
/*!********************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-profile-image.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cc_profile_image_vue_vue_type_template_id_e3f70eb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cc-profile-image.vue?vue&type=template&id=e3f70eb2 */ "./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=template&id=e3f70eb2");
/* harmony import */ var _cc_profile_image_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cc-profile-image.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _cc_profile_image_vue_vue_type_style_index_0_id_e3f70eb2_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss */ "./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss");




;
_cc_profile_image_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _cc_profile_image_vue_vue_type_template_id_e3f70eb2__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_cc_profile_image_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/components/cc-profile-image.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_cc_profile_image_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Body.vue":
/*!**********************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Body.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Body_vue_vue_type_template_id_1e6f35d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Body.vue?vue&type=template&id=1e6f35d4 */ "./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=template&id=1e6f35d4");
/* harmony import */ var _Body_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Body.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=script&setup=true&lang=js");



_Body_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Body_vue_vue_type_template_id_1e6f35d4__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Body_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/layouts/main/Body.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Body_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Footer.vue":
/*!************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Footer.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_7d19358f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=7d19358f */ "./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=template&id=7d19358f");
/* harmony import */ var _Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=script&setup=true&lang=js");



_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Footer_vue_vue_type_template_id_7d19358f__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/layouts/main/Footer.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Header.vue":
/*!************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Header.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_c368ccfe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=c368ccfe */ "./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=template&id=c368ccfe");
/* harmony import */ var _Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Header_vue_vue_type_style_index_0_id_c368ccfe_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss */ "./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss");




;
_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Header_vue_vue_type_template_id_c368ccfe__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/layouts/main/Header.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Main.vue":
/*!**********************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Main.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_ea6964a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=ea6964a6 */ "./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=template&id=ea6964a6");
/* harmony import */ var _Main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=script&setup=true&lang=js");



_Main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Main_vue_vue_type_template_id_ea6964a6__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/layouts/main/Main.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Menubar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Menubar.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menubar_vue_vue_type_template_id_6e15b0e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menubar.vue?vue&type=template&id=6e15b0e0 */ "./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=template&id=6e15b0e0");
/* harmony import */ var _Menubar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menubar.vue?vue&type=script&setup=true&lang=js */ "./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Menubar_vue_vue_type_style_index_0_id_6e15b0e0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss */ "./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss");




;
_Menubar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Menubar_vue_vue_type_template_id_6e15b0e0__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Menubar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/axil-main/src/layouts/main/Menubar.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Menubar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-icon.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-icon.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_icon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_icon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-icon.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_mainsearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_mainsearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-mainsearch.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-notification.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-notification.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_notification_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_notification_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-notification.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_profile_image_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_profile_image_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-profile-image.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Body_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Body_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Body.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Main.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menubar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menubar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Menubar.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-icon.vue?vue&type=template&id=2d6bdb8e":
/*!*****************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-icon.vue?vue&type=template&id=2d6bdb8e ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_icon_vue_vue_type_template_id_2d6bdb8e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_icon_vue_vue_type_template_id_2d6bdb8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-icon.vue?vue&type=template&id=2d6bdb8e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=template&id=2d6bdb8e");


/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=template&id=04cebf3e":
/*!***********************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=template&id=04cebf3e ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_mainsearch_vue_vue_type_template_id_04cebf3e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_mainsearch_vue_vue_type_template_id_04cebf3e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-mainsearch.vue?vue&type=template&id=04cebf3e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=template&id=04cebf3e");


/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-notification.vue?vue&type=template&id=5a45adab":
/*!*************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-notification.vue?vue&type=template&id=5a45adab ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_notification_vue_vue_type_template_id_5a45adab__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_notification_vue_vue_type_template_id_5a45adab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-notification.vue?vue&type=template&id=5a45adab */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=template&id=5a45adab");


/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=template&id=e3f70eb2":
/*!**************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=template&id=e3f70eb2 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_profile_image_vue_vue_type_template_id_e3f70eb2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_profile_image_vue_vue_type_template_id_e3f70eb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-profile-image.vue?vue&type=template&id=e3f70eb2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=template&id=e3f70eb2");


/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=template&id=1e6f35d4":
/*!****************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=template&id=1e6f35d4 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Body_vue_vue_type_template_id_1e6f35d4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Body_vue_vue_type_template_id_1e6f35d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Body.vue?vue&type=template&id=1e6f35d4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Body.vue?vue&type=template&id=1e6f35d4");


/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=template&id=7d19358f":
/*!******************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=template&id=7d19358f ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_7d19358f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_7d19358f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=7d19358f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Footer.vue?vue&type=template&id=7d19358f");


/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=template&id=c368ccfe":
/*!******************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=template&id=c368ccfe ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_c368ccfe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_c368ccfe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=c368ccfe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=template&id=c368ccfe");


/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=template&id=ea6964a6":
/*!****************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=template&id=ea6964a6 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Main_vue_vue_type_template_id_ea6964a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Main_vue_vue_type_template_id_ea6964a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Main.vue?vue&type=template&id=ea6964a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Main.vue?vue&type=template&id=ea6964a6");


/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=template&id=6e15b0e0":
/*!*******************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=template&id=6e15b0e0 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menubar_vue_vue_type_template_id_6e15b0e0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menubar_vue_vue_type_template_id_6e15b0e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Menubar.vue?vue&type=template&id=6e15b0e0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=template&id=6e15b0e0");


/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss":
/*!********************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_icon_vue_vue_type_style_index_0_id_2d6bdb8e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-icon.vue?vue&type=style&index=0&id=2d6bdb8e&lang=scss");


/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_mainsearch_vue_vue_type_style_index_0_id_04cebf3e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-mainsearch.vue?vue&type=style&index=0&id=04cebf3e&lang=scss");


/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_notification_vue_vue_type_style_index_0_id_5a45adab_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-notification.vue?vue&type=style&index=0&id=5a45adab&lang=scss");


/***/ }),

/***/ "./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cc_profile_image_vue_vue_type_style_index_0_id_e3f70eb2_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/components/cc-profile-image.vue?vue&type=style&index=0&id=e3f70eb2&lang=scss");


/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_c368ccfe_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Header.vue?vue&type=style&index=0&id=c368ccfe&lang=scss");


/***/ }),

/***/ "./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menubar_vue_vue_type_style_index_0_id_6e15b0e0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/axil-main/src/layouts/main/Menubar.vue?vue&type=style&index=0&id=6e15b0e0&lang=scss");


/***/ })

}]);