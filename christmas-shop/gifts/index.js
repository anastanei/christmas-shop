/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card/card.module.scss":
/*!**********************************************!*\
  !*** ./src/components/card/card.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   button: () => (/* binding */ _1),
/* harmony export */   card: () => (/* binding */ _2),
/* harmony export */   harmony: () => (/* binding */ _3),
/* harmony export */   health: () => (/* binding */ _4),
/* harmony export */   "hover-default": () => (/* binding */ _5),
/* harmony export */   image: () => (/* binding */ _6),
/* harmony export */   "img-in-picture": () => (/* binding */ _7),
/* harmony export */   tag: () => (/* binding */ _8),
/* harmony export */   textArea: () => (/* binding */ _9),
/* harmony export */   title: () => (/* binding */ _a),
/* harmony export */   work: () => (/* binding */ _b)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "card-module__button__TWO8B";
var _2 = "card-module__card__PKV0I";
var _3 = "card-module__harmony__uMEvq";
var _4 = "card-module__health__dlIHc";
var _5 = "card-module__hover-default__fl5Fw";
var _6 = "card-module__image__a4bTT";
var _7 = "card-module__img-in-picture__eM30k";
var _8 = "card-module__tag__I9HxT";
var _9 = "card-module__textArea__AzGlX";
var _a = "card-module__title__njCQ0";
var _b = "card-module__work__wRAcM";



/***/ }),

/***/ "./src/components/dialog/dialog.module.scss":
/*!**************************************************!*\
  !*** ./src/components/dialog/dialog.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeButton: () => (/* binding */ _1),
/* harmony export */   description: () => (/* binding */ _2),
/* harmony export */   dialog: () => (/* binding */ _3),
/* harmony export */   fadeInScale: () => (/* binding */ _4),
/* harmony export */   feature: () => (/* binding */ _5),
/* harmony export */   "feature-name": () => (/* binding */ _6),
/* harmony export */   "feature-svg-container": () => (/* binding */ _7),
/* harmony export */   "feature-value": () => (/* binding */ _8),
/* harmony export */   features: () => (/* binding */ _9),
/* harmony export */   "features-title": () => (/* binding */ _a),
/* harmony export */   image: () => (/* binding */ _b),
/* harmony export */   "svg-wrapper": () => (/* binding */ _c),
/* harmony export */   transparent: () => (/* binding */ _d)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "dialog-module__closeButton__y1Qtu";
var _2 = "dialog-module__description__GBmT8";
var _3 = "dialog-module__dialog__FVWeA";
var _4 = "dialog-module__fadeInScale__kyaH4";
var _5 = "dialog-module__feature__R3NIR";
var _6 = "dialog-module__feature-name__LoGAv";
var _7 = "dialog-module__feature-svg-container__tRTi1";
var _8 = "dialog-module__feature-value__T91yZ";
var _9 = "dialog-module__features__GkUtv";
var _a = "dialog-module__features-title__q6OPF";
var _b = "dialog-module__image__B24lP";
var _c = "dialog-module__svg-wrapper__jdX80";
var _d = "dialog-module__transparent__yH2xT";



/***/ }),

/***/ "./src/components/nav/nav.module.scss":
/*!********************************************!*\
  !*** ./src/components/nav/nav.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   active: () => (/* binding */ _1),
/* harmony export */   nav: () => (/* binding */ _2),
/* harmony export */   navLink: () => (/* binding */ _3),
/* harmony export */   navList: () => (/* binding */ _4),
/* harmony export */   navListItem: () => (/* binding */ _5),
/* harmony export */   visible: () => (/* binding */ _6)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "nav-module__active__xmUd0";
var _2 = "nav-module__nav__LqNLA";
var _3 = "nav-module__navLink__QZN_C";
var _4 = "nav-module__navList__vQZDV";
var _5 = "nav-module__navListItem__PFUPK";
var _6 = "nav-module__visible__DZRiA";



/***/ }),

/***/ "./src/components/scroll-button/scroll-button.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/scroll-button/scroll-button.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scroll-button": () => (/* binding */ _1)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "scroll-button-module__scroll-button__H9y8l";



/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/svg-baker-runtime/browser-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg-baker-runtime/browser-symbol.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));


/***/ }),

/***/ "./src/assets/svg/arrow.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/arrow.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "arrow",
  "use": "arrow-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" id=\"arrow\">\n<path d=\"M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/assets/svg/cross.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/cross.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "cross",
  "use": "cross-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\" fill=\"none\" id=\"cross\">\n  <path d=\"M30 10L10 30\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M10 10L30 30\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/assets/svg/icon-snowflake.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/icon-snowflake.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-snowflake",
  "use": "icon-snowflake-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"icon-snowflake\">\n  <g clip-path=\"url(#icon-snowflake_clip0_8002_840)\">\n    <path d=\"M18.2942 14.8224L17.4727 14.3481L19.674 13.7583L19.3102 12.4006L15.7512 13.3542L14.0725 12.385C14.0957 12.26 14.1084 12.1315 14.1084 12C14.1084 11.8684 14.0957 11.7398 14.0725 11.6149L15.7512 10.6457L19.3102 11.5994L19.674 10.2416L17.4727 9.65177L18.2942 9.17747L21.8194 8.96588L22.3385 6.03095L19.5373 5.01305L17.5914 7.96016L16.7699 8.43446L17.3598 6.23317L16.002 5.86939L15.0484 9.42842L13.3687 10.3982C13.1741 10.2315 12.949 10.0997 12.7028 10.0124V8.0742L15.3082 5.46879L14.3143 4.47488L12.7028 6.08633V5.13772L14.2772 1.98876L12 0L9.72271 1.98886L11.2972 5.13782V6.08642L9.68569 4.47497L8.69178 5.46889L11.2971 8.0743V10.0125C11.051 10.0998 10.8259 10.2316 10.6312 10.3983L8.95154 9.42852L7.99792 5.86949L6.64018 6.23326L7.23003 8.43456L6.40854 7.96025L4.46269 5.01314L1.66148 6.03104L2.18058 8.96597L5.70578 9.17757L6.52727 9.65187L4.32597 10.2417L4.6898 11.5994L8.24882 10.6458L9.92746 11.615C9.90431 11.74 9.89157 11.8685 9.89157 12C9.89157 12.1316 9.90427 12.2602 9.92746 12.3851L8.24882 13.3543L4.6898 12.4006L4.32597 13.7584L6.52727 14.3482L5.70578 14.8225L2.18058 15.034L1.66148 17.969L4.46274 18.9869L6.40859 16.0397L7.23012 15.5654L6.64028 17.7667L7.99801 18.1306L8.95163 14.5715L10.6313 13.6018C10.826 13.7684 11.0511 13.9003 11.2972 13.9875V15.9258L8.69187 18.5311L9.68579 19.525L11.2973 17.9135V18.8621L9.7228 22.0111L12.0001 24L14.2774 22.0111L12.7029 18.8621V17.9135L14.3144 19.525L15.3083 18.5311L12.7029 15.9258V13.9875C12.9491 13.9003 13.1742 13.7684 13.3689 13.6018L15.0485 14.5715L16.0022 18.1306L17.3599 17.7667L16.7701 15.5654L17.5916 16.0397L19.5374 18.9869L22.3387 17.969L21.8196 15.034L18.2942 14.8224Z\" fill=\"currentColor\" />\n  </g>\n  <defs>\n    <clipPath id=\"icon-snowflake_clip0_8002_840\">\n      <rect width=\"24\" height=\"24\" fill=\"white\" />\n    </clipPath>\n  </defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/assets/svg/social-facebook.svg":
/*!********************************************!*\
  !*** ./src/assets/svg/social-facebook.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "social-facebook",
  "use": "social-facebook-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" id=\"social-facebook\">\n  <path d=\"M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/assets/svg/social-instagram.svg":
/*!*********************************************!*\
  !*** ./src/assets/svg/social-instagram.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "social-instagram",
  "use": "social-instagram-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" id=\"social-instagram\">\n  <path d=\"M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z\" stroke=\"currentColor\" stroke-width=\"1.5\" />\n  <path d=\"M17.5 6.51L17.51 6.49889\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/assets/svg/social-telegram.svg":
/*!********************************************!*\
  !*** ./src/assets/svg/social-telegram.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "social-telegram",
  "use": "social-telegram-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" id=\"social-telegram\">\n  <path d=\"M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./src/assets/svg/social-x.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/social-x.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "social-x",
  "use": "social-x-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" id=\"social-x\">\n  <path d=\"M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z\" stroke=\"currentColor\" stroke-width=\"1.5\" />\n  <path d=\"M20 3L4 21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);

/***/ }),

/***/ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js":
/*!************************************************************************!*\
  !*** ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),
    'aria-hidden': 'true'
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var browser = {
  isChrome: function () { return /chrome/i.test(navigator.userAgent); },
  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },
  isEdge: function () { return /edge/i.test(navigator.userAgent); }
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern, mask, clipPath';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
        config.locationChangeAngularEmitter = typeof window.angular !== 'undefined';
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox();
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({
    attrs: {
      id: spriteNodeId,
      'aria-hidden': 'true'
    }
  });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));


/***/ }),

/***/ "./src/assets/js/create-element.js":
/*!*****************************************!*\
  !*** ./src/assets/js/create-element.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(
  tag = "div",
  classes = "",
  text = "",
  attributes = {},
) {
  const namespace = "http://www.w3.org/2000/svg";
  const isSVGTag = [
    "svg",
    "path",
    "use",
    "g",
    "rect",
    "defs",
    "clipPath",
  ].includes(tag);
  const element = isSVGTag
    ? document.createElementNS(namespace, tag)
    : document.createElement(tag);

  element.textContent = text;

  if (classes.length > 0) {
    element.className = classes;
  }

  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
  return element;
}


/***/ }),

/***/ "./src/assets/js/create-layout.js":
/*!****************************************!*\
  !*** ./src/assets/js/create-layout.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLayout)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style.scss */ "./src/style.scss");
/* harmony import */ var _self_review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./self-review */ "./src/assets/js/self-review.js");
/* harmony import */ var _create_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-svg */ "./src/assets/js/create-svg.js");
/* harmony import */ var _components_nav_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/nav/nav */ "./src/components/nav/nav.js");





function createLayout() {
  (0,_self_review__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_create_svg__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_nav_nav__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./src/assets/js/create-svg.js":
/*!*************************************!*\
  !*** ./src/assets/js/create-svg.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSvg)
/* harmony export */ });
function createSvg() {
  const requireSvg = __webpack_require__("./src/assets/svg sync \\.svg$");
  requireSvg.keys().forEach(requireSvg);
}


/***/ }),

/***/ "./src/assets/js/get-src.js":
/*!**********************************!*\
  !*** ./src/assets/js/get-src.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSrc)
/* harmony export */ });
function getSrc() {
  const isGiftPage = window.location.pathname.includes("/gifts");
  const src = isGiftPage ? "../" : "./";
  return src;
}


/***/ }),

/***/ "./src/assets/js/self-review.js":
/*!**************************************!*\
  !*** ./src/assets/js/self-review.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logSelfReview)
/* harmony export */ });
function logSelfReview() {
  const criteria = {
    title: "CrossCheck Criteria (90/90 points)",
    sections: [
      {
        description: "Implementation of the burger menu on both pages: +22",
      },
      {
        description: "Implementation of the Slider on the home page: +18",
      },
      {
        description: "Implementation of the Timer on the home page: +8",
      },
      {
        description:
          "When both opening or refreshing the page, 4 random cards are displayed in the block Best Gifts on the home page: +4",
      },
      {
        description:
          "Implementation of the Category switching for products on the gifts page: +8",
      },
      {
        description:
          "Implementation of the Scroll-to-Top button on the gifts page: +12",
      },
      {
        description:
          "Implementation of the Modal for selected gift on both pages: +18",
      },
    ],
  };

  const res = criteria.sections
    .map((section, index) => `${index + 1}. ${section.description}`)
    .join("\n");
  console.group();

  console.log(`\x1b[36m${criteria.title}\x1b[0m\n\x1b[33m${res}\x1b[0m`);
  console.groupEnd();
}


/***/ }),

/***/ "./src/assets/js/shuffle-array.js":
/*!****************************************!*\
  !*** ./src/assets/js/shuffle-array.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shuffleArray)
/* harmony export */ });
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


/***/ }),

/***/ "./src/assets/svg sync \\.svg$":
/*!**************************************************!*\
  !*** ./src/assets/svg/ sync nonrecursive \.svg$ ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arrow.svg": "./src/assets/svg/arrow.svg",
	"./cross.svg": "./src/assets/svg/cross.svg",
	"./icon-snowflake.svg": "./src/assets/svg/icon-snowflake.svg",
	"./social-facebook.svg": "./src/assets/svg/social-facebook.svg",
	"./social-instagram.svg": "./src/assets/svg/social-instagram.svg",
	"./social-telegram.svg": "./src/assets/svg/social-telegram.svg",
	"./social-x.svg": "./src/assets/svg/social-x.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/svg sync \\.svg$";

/***/ }),

/***/ "./src/components/card/card.js":
/*!*************************************!*\
  !*** ./src/components/card/card.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.module.scss */ "./src/components/card/card.module.scss");
/* harmony import */ var _assets_js_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/create-element */ "./src/assets/js/create-element.js");
/* harmony import */ var _dialog_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/dialog */ "./src/components/dialog/dialog.js");
/* harmony import */ var _gift_picture_create_gift_picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gift-picture/create-gift-picture */ "./src/components/gift-picture/create-gift-picture.js");
/* harmony import */ var _type_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type-data.json */ "./src/components/card/type-data.json");






class Card {
  constructor({ item, src }) {
    this.item = item;
    this.type = item.category;
    this.src = src;
    const currentTypeData = _type_data_json__WEBPACK_IMPORTED_MODULE_4__[this.type];

    this.tagName = currentTypeData.tagName;
    this.type = currentTypeData.type;
    this.alt = currentTypeData.alt;

    this.title = item.name;
  }

  createCard() {
    const card = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])("li", _card_module_scss__WEBPACK_IMPORTED_MODULE_0__.card);
    const article = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])("article");
    const button = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])("button", _card_module_scss__WEBPACK_IMPORTED_MODULE_0__.button, "", {
      type: "button",
      "data-card-button": true,
      "aria-label": "Learn more",
    });
    const picture = (0,_gift_picture_create_gift_picture__WEBPACK_IMPORTED_MODULE_3__["default"])({
      type: this.type,
      alt: this.alt,
      src: this.src,
      className: _card_module_scss__WEBPACK_IMPORTED_MODULE_0__.image,
    });
    const textArea = this.createTextArea();
    article.append(picture, textArea, button);
    card.append(article);
    card.addEventListener("click", () => {
      this.openDialog();
    });
    return card;
  }

  createTextArea() {
    const textArea = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])("div", _card_module_scss__WEBPACK_IMPORTED_MODULE_0__.textArea);
    const tagName = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])(
      "div",
      `${_card_module_scss__WEBPACK_IMPORTED_MODULE_0__.tag} ${_card_module_scss__WEBPACK_IMPORTED_MODULE_0__[this.type]} header-4`,
      this.tagName,
    );
    const title = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])("h3", `${_card_module_scss__WEBPACK_IMPORTED_MODULE_0__.title} header-3`, this.title);
    textArea.append(tagName, title);
    return textArea;
  }

  openDialog() {
    const dialog = new _dialog_dialog__WEBPACK_IMPORTED_MODULE_2__["default"]({
      item: this.item,
      src: this.src,
    });
    dialog.openDialog();
  }
}


/***/ }),

/***/ "./src/components/card/generate-cards.js":
/*!***********************************************!*\
  !*** ./src/components/card/generate-cards.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateCards)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/components/card/card.js");
/* harmony import */ var _assets_js_get_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/get-src */ "./src/assets/js/get-src.js");



function generateCards({ containerSelector, cards } = {}) {
  const src = (0,_assets_js_get_src__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const container = document.querySelector(containerSelector);
  cards.forEach((item) => {
    const card = new _card__WEBPACK_IMPORTED_MODULE_0__["default"]({ item, src });
    const cardEl = card.createCard();
    container.append(cardEl);
  });
}


/***/ }),

/***/ "./src/components/dialog/createSnowflakeSvg.js":
/*!*****************************************************!*\
  !*** ./src/components/dialog/createSnowflakeSvg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSnowflakeSvg)
/* harmony export */ });
/* harmony import */ var _assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/create-element */ "./src/assets/js/create-element.js");
/* harmony import */ var _dialog_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.module.scss */ "./src/components/dialog/dialog.module.scss");



function createSnowflakeSvg(isTransparent) {
  const className = isTransparent ? _dialog_module_scss__WEBPACK_IMPORTED_MODULE_1__.transparent : "";
  const svg = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("svg", "", "", {
    viewBox: "0 0 24 24",
    width: "24px",
    height: "24px",
    class: className,
  });
  const use = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("use", "", "", { href: "#icon-snowflake" });
  svg.append(use);
  return svg;
}


/***/ }),

/***/ "./src/components/dialog/dialog.js":
/*!*****************************************!*\
  !*** ./src/components/dialog/dialog.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.module.scss */ "./src/components/dialog/dialog.module.scss");
/* harmony import */ var _card_card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card.module.scss */ "./src/components/card/card.module.scss");
/* harmony import */ var _assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/create-element */ "./src/assets/js/create-element.js");
/* harmony import */ var _gift_picture_create_gift_picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gift-picture/create-gift-picture */ "./src/components/gift-picture/create-gift-picture.js");
/* harmony import */ var _createSnowflakeSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createSnowflakeSvg */ "./src/components/dialog/createSnowflakeSvg.js");
/* harmony import */ var _card_type_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/type-data.json */ "./src/components/card/type-data.json");







class Dialog {
  constructor({ item, src }) {
    this.item = item;
    this.type = item.category;
    this.title = this.item.name;
    this.src = src;

    const currentTypeData = _card_type_data_json__WEBPACK_IMPORTED_MODULE_5__[this.type];
    this.tagName = currentTypeData.tagName;
    this.type = currentTypeData.type;
    this.alt = currentTypeData.alt;

    this.dialogElement = this.createDialog();
  }

  createDialog() {
    const dialog = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])(
      "dialog",
      `${_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1__.card} ${_dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__.dialog}`,
    );

    const article = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])("article");
    const picture = (0,_gift_picture_create_gift_picture__WEBPACK_IMPORTED_MODULE_3__["default"])({
      type: this.type,
      alt: this.alt,
      src: this.src,
      className: _dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__.image,
    });

    const textArea = this.createTextArea();

    const closeButton = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])("button", _dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__.closeButton, "", {
      "aria-label": "Close info",
    });

    closeButton.addEventListener("click", () => this.closeDialog());
    article.append(picture, textArea, closeButton);

    dialog.append(article);

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        this.closeDialog();
      }
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closeDialog();
      }
    });

    document.body.append(dialog);

    return dialog;
  }

  createTextArea() {
    const textArea = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])("div", _card_card_module_scss__WEBPACK_IMPORTED_MODULE_1__.textArea);
    const tagName = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])(
      "div",
      `${_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1__.tag} ${_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1__[this.type]} header-4`,
      this.tagName,
    );
    const title = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])(
      "h3",
      `${_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1__.title} header-3`,
      this.title,
    );
    const description = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])(
      "p",
      `paragraph ${_dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__.description}`,
      this.item.description,
    );

    const features = this.createFeatures();
    textArea.append(tagName, title, description, features);
    return textArea;
  }

  createFeatures() {
    const featuresContainer = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])("div", _dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__.features);

    const featuresTitle = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])(
      "h4",
      `header-4 ${_dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__["features-title"]}`,
      "Adds superpowers to:",
    );

    featuresContainer.append(featuresTitle);

    Object.entries(this.item.superpowers).forEach(([name, value]) => {
      const feature = this.createFeature([name, value]);
      featuresContainer.append(feature);
    });

    return featuresContainer;
  }

  createFeature([name, value]) {
    const feature = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])("div", _dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__.feature);

    const featureName = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])(
      "div",
      `${_dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__["feature-name"]} paragraph`,
      name,
    );
    const featureValue = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])(
      "div",
      _dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__["feature-value"],
      value,
    );
    const svgWrapper = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])("div", _dialog_module_scss__WEBPACK_IMPORTED_MODULE_0__["svg-wrapper"]);
    const shortValue = value / 100;

    for (let i = 0; i < 5; i += 1) {
      const isTransparent = !(i < shortValue);
      svgWrapper.append((0,_createSnowflakeSvg__WEBPACK_IMPORTED_MODULE_4__["default"])(isTransparent));
    }
    feature.append(featureName, featureValue, svgWrapper);
    return feature;
  }

  openDialog() {
    this.dialogElement.showModal();
    document.body.classList.add("overflow-hidden");
  }

  closeDialog() {
    this.dialogElement.close();
    document.body.classList.remove("overflow-hidden");
    this.dialogElement.remove();
  }
}


/***/ }),

/***/ "./src/components/gift-picture/create-gift-picture.js":
/*!************************************************************!*\
  !*** ./src/components/gift-picture/create-gift-picture.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createGiftPicture)
/* harmony export */ });
/* harmony import */ var _assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/create-element */ "./src/assets/js/create-element.js");


function createGiftPicture({ type, alt, src, className }) {
  const imgName = type;
  const imgAlt = alt;
  const imgPath = `${src}images/${imgName}`;
  const picture = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("picture", className);
  const sourceAVIF = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("source", "", "", {
    srcSet: `${imgPath}.avif`,
    type: "image/avif",
  });
  const sourceWEBP = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("source", "", "", {
    srcSet: `${imgPath}.webp`,
    type: "image/webp",
  });
  const img = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("img", "img-in-picture", "", {
    src: `${imgPath}.png`,
    alt: imgAlt,
    width: 310,
    height: 230,
  });
  picture.append(sourceAVIF, sourceWEBP, img);
  return picture;
}


/***/ }),

/***/ "./src/components/nav/nav.js":
/*!***********************************!*\
  !*** ./src/components/nav/nav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* binding */ Nav),
/* harmony export */   "default": () => (/* binding */ appendNav)
/* harmony export */ });
/* harmony import */ var _assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/create-element */ "./src/assets/js/create-element.js");
/* harmony import */ var _nav_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.module.scss */ "./src/components/nav/nav.module.scss");



class Nav {
  constructor() {
    this.isGiftPage = window.location.pathname.includes("/gifts");
    this.src = this.isGiftPage ? "../" : "./";
    this.button = document.querySelector(`[data-burger]`);
    this.button.addEventListener("click", () => this.toggleMenu());
    this.initMediaQuery();
  }

  createNavContainer() {
    this.nav = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("nav", `header__nav ${_nav_module_scss__WEBPACK_IMPORTED_MODULE_1__.nav}`, "", {
      "data-nav": true,
    });
    this.navList = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", _nav_module_scss__WEBPACK_IMPORTED_MODULE_1__.navList);
    this.nav.append(this.navList);
    this.createNavElements();
    return this.nav;
  }

  createNavElements() {
    const navItems = [
      { text: "gifts", href: `./gifts/` },
      { text: "about", href: `${this.src}#about` },
      { text: "best", href: `${this.src}#best` },
      { text: "contacts", href: `#footer` },
    ];

    navItems.forEach((item) => {
      const listItem = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("li", _nav_module_scss__WEBPACK_IMPORTED_MODULE_1__.navListItem);
      const link = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "a",
        `${_nav_module_scss__WEBPACK_IMPORTED_MODULE_1__.navLink} text-action-l`,
        item.text,
        {
          href: item.href,
          "data-nav-link": true,
        },
      );

      if (this.isGiftPage && item.text === "gifts") {
        link.classList.add(`${_nav_module_scss__WEBPACK_IMPORTED_MODULE_1__.active}`);
        link.removeAttribute("href");
      }

      listItem.append(link);
      this.navList.append(listItem);
      listItem.addEventListener("click", () => this.toggleMenu(false));
    });
  }

  toggleMenu(forceHide = null) {
    const isOpened =
      forceHide !== null ? false : !this.nav.classList.contains(_nav_module_scss__WEBPACK_IMPORTED_MODULE_1__.visible);
    this.nav.classList.toggle(_nav_module_scss__WEBPACK_IMPORTED_MODULE_1__.visible, isOpened);
    this.button.classList.toggle("burger--opened", isOpened);
    document.body.classList.toggle("overflow-hidden", isOpened);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  initMediaQuery(breakpoint = 769) {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    mediaQuery.addEventListener("change", (event) =>
      this.handleMediaChange(event),
    );
  }

  handleMediaChange(event) {
    if (event.matches && this.nav.classList.contains(_nav_module_scss__WEBPACK_IMPORTED_MODULE_1__.visible)) {
      this.toggleMenu(false);
    }
  }
}

function appendNav(parentSelector = "[data-header]") {
  const nav = new Nav();
  const navEl = nav.createNavContainer();
  document.body.querySelector(parentSelector).append(navEl);
}


/***/ }),

/***/ "./src/components/scroll-button/scroll-button.js":
/*!*******************************************************!*\
  !*** ./src/components/scroll-button/scroll-button.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initScrollButton)
/* harmony export */ });
/* harmony import */ var _assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/create-element */ "./src/assets/js/create-element.js");
/* harmony import */ var _scroll_button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-button.module.scss */ "./src/components/scroll-button/scroll-button.module.scss");



class ScrollButton {
  constructor() {
    this.initButton();
    this.addScrollListener();
  }

  initButton() {
    this.button = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("button", _scroll_button_module_scss__WEBPACK_IMPORTED_MODULE_1__["scroll-button"], "", {
      id: "scrollToTop",
      ariaLabel: "Scroll to top",
    });

    const svg = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("svg", "", "", {
      viewBox: "0 0 24 24",
      width: "24px",
      height: "24px",
    });
    const use = (0,_assets_js_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])("use", "", "", { href: "#arrow" });
    svg.append(use);
    this.button.append(svg);

    document.body.append(this.button);

    this.button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  addScrollListener() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300 && window.innerWidth <= 768) {
        this.button.style.display = "flex";
      } else {
        this.button.style.display = "none";
      }
    });
  }
}

function initScrollButton() {
  new ScrollButton();
}


/***/ }),

/***/ "./src/components/tabs/tabs.js":
/*!*************************************!*\
  !*** ./src/components/tabs/tabs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTabs)
/* harmony export */ });
/* harmony import */ var _card_generate_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/generate-cards */ "./src/components/card/generate-cards.js");
/* harmony import */ var _card_gift_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/gift-data.json */ "./src/components/card/gift-data.json");
/* harmony import */ var _assets_js_shuffle_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/shuffle-array */ "./src/assets/js/shuffle-array.js");




class Tabs {
  constructor() {
    this.tabs = document.querySelector("[data-tabs]");
    this.giftContainerSelector = "[data-gifts]";
    this.giftContainer = document.querySelector(this.giftContainerSelector);

    this.typeAll = this.tabs.querySelector("[data-tabs-all]");
    this.type0 = this.tabs.querySelector("[data-tabs-0]");
    this.type1 = this.tabs.querySelector("[data-tabs-1]");
    this.type2 = this.tabs.querySelector("[data-tabs-2]");
    this.createCards(_card_gift_data_json__WEBPACK_IMPORTED_MODULE_1__);

    this.typeAll.addEventListener("change", () => this.createCards(_card_gift_data_json__WEBPACK_IMPORTED_MODULE_1__));
    this.type0.addEventListener("change", () =>
      this.filterAndRenderCards("For Work"),
    );
    this.type1.addEventListener("change", () =>
      this.filterAndRenderCards("For Health"),
    );
    this.type2.addEventListener("change", () =>
      this.filterAndRenderCards("For Harmony"),
    );
  }

  filterAndRenderCards(category) {
    const filteredCards = _card_gift_data_json__WEBPACK_IMPORTED_MODULE_1__.filter((card) => card.category === category);
    this.createCards(filteredCards);
  }

  createCards(data) {
    this.giftContainer.textContent = "";
    (0,_assets_js_shuffle_array__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    (0,_card_generate_cards__WEBPACK_IMPORTED_MODULE_0__["default"])({
      containerSelector: this.giftContainerSelector,
      cards: data,
    });
  }
}

function initTabs() {
  new Tabs();
}


/***/ }),

/***/ "./src/components/card/gift-data.json":
/*!********************************************!*\
  !*** ./src/components/card/gift-data.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"name":"Bug Magnet","description":"Able to find bugs in code like they were placed there on purpose.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+400"}},{"name":"Console.log Guru","description":"Uses console.log like a crystal ball to find any issue.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+400"}},{"name":"Shortcut Cheater","description":"Knows every keyboard shortcut like they were born with them.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+400","dream":"+200"}},{"name":"Merge Master","description":"Merges branches in Git without conflicts, like a wizard during an exam.","category":"For Work","superpowers":{"live":"+200","create":"+500","love":"+200","dream":"+300"}},{"name":"Async Tamer","description":"Handles asynchronous code and promises like well-trained pets.","category":"For Work","superpowers":{"live":"+100","create":"+400","love":"+200","dream":"+300"}},{"name":"CSS Tamer","description":"Can make Flexbox and Grid work together like they were always best friends.","category":"For Work","superpowers":{"live":"+200","create":"+500","love":"+200","dream":"+300"}},{"name":"Time Hacker","description":"Writes code at the last moment but always meets the deadline.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+200"}},{"name":"Layout Master","description":"Creates perfect layouts on the first try, like they can read the designer\'s mind.","category":"For Work","superpowers":{"live":"+500","create":"+300","love":"+200","dream":"+200"}},{"name":"Documentation Whisperer","description":"Understands cryptic documentation as if they wrote it themselves.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+100"}},{"name":"Feedback Master","description":"Accepts client revisions with the Zen calm of Buddha.","category":"For Work","superpowers":{"live":"+300","create":"+500","love":"+300","dream":"+400"}},{"name":"Code Minimalist","description":"Writes code so concise that one line does more than a whole file.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+200"}},{"name":"Pixel-Perfect Magician","description":"Aligns elements to the last pixel, even when the design looks abstract.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+400","dream":"+400"}},{"name":"Posture Levitation","description":"Can sit for hours, but maintains perfect posture like a ballerina.","category":"For Health","superpowers":{"live":"+400","create":"+500","love":"+500","dream":"+400"}},{"name":"Step Master","description":"Gets 10,000 steps a day even while sitting at the computer.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+500","dream":"+400"}},{"name":"Snack Resister","description":"Ignoring desktop snacks like a strict dietician.","category":"For Health","superpowers":{"live":"+400","create":"+100","love":"+200","dream":"+400"}},{"name":"Hydration Bot","description":"Drinks the recommended 2 liters of water a day like a health-programmed robot.","category":"For Health","superpowers":{"live":"+500","create":"+300","love":"+500","dream":"+500"}},{"name":"Sleep Overlord","description":"Sleeps 6 hours but feels like they had 10.","category":"For Health","superpowers":{"live":"+400","create":"+500","love":"+500","dream":"+500"}},{"name":"Break Guru","description":"Takes a stretch break every hour without forgetting, no matter how focused.","category":"For Health","superpowers":{"live":"+300","create":"+300","love":"+300","dream":"+400"}},{"name":"Eye Protector","description":"Can work all day at the monitor without feeling like their eyes are on fire.","category":"For Health","superpowers":{"live":"+100","create":"+300","love":"+500","dream":"+400"}},{"name":"Stress Dodger","description":"Masters meditation right at the keyboard.","category":"For Health","superpowers":{"live":"+100","create":"+400","love":"+200","dream":"+400"}},{"name":"Yoga Coder","description":"Easily switches from coding to yoga and back.","category":"For Health","superpowers":{"live":"+400","create":"+400","love":"+400","dream":"+400"}},{"name":"Healthy Snacker","description":"Always picks fruit, even when chocolate is within arm’s reach.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+200","dream":"+400"}},{"name":"Chair Exerciser","description":"Manages to work out without leaving the chair.","category":"For Health","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+400"}},{"name":"Caffeine Filter","description":"Drinks coffee at night and still falls asleep with no problem.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+500","dream":"+200"}},{"name":"Joy Charger","description":"Finds joy in the little things—even in a build that finishes unexpectedly fast.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+500","dream":"+500"}},{"name":"Error Laugher","description":"Laughs at code errors like they’re jokes instead of getting angry.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+500"}},{"name":"Bug Acceptance Guru","description":"Accepts bugs as part of the journey to perfection — it’s just another task.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+400"}},{"name":"Spontaneous Coding Philosopher","description":"Philosophically accepts any client suggestion after a long refactor.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+400"}},{"name":"Deadline Sage","description":"Remains zen even when the deadline is close and the project manager is stressed.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+300","dream":"+500"}},{"name":"Inspiration Maestro","description":"Finds inspiration on an empty screen as if masterpieces are already there.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+400","dream":"+100"}},{"name":"Peace Keeper","description":"Maintains inner calm even in moments of intense crisis.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+500","dream":"+500"}},{"name":"Empathy Guru","description":"Feels the team’s mood and can lift everyone’s spirits.","category":"For Harmony","superpowers":{"live":"+500","create":"+200","love":"+500","dream":"+500"}},{"name":"Laughter Generator","description":"Can lighten any tense situation with a joke that even bugs laugh at.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+200","dream":"+500"}},{"name":"Pause Master","description":"Knows when to just step back from the keyboard and breathe.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+100","dream":"+100"}},{"name":"Coder Healer","description":"Can support a colleague in their darkest hour, even if it’s a 500 error.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+500"}},{"name":"Music Code Curator","description":"Creates work playlists so good, even deadlines follow the rhythm.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+300","dream":"+200"}}]');

/***/ }),

/***/ "./src/components/card/type-data.json":
/*!********************************************!*\
  !*** ./src/components/card/type-data.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"For Work":{"tagName":"for work","type":"work","alt":"A transparent glass Christmas tree ball ornament with a gold top, containing a pink gift box with a gold ribbon and small gold decorations inside."},"For Health":{"tagName":"for health","type":"health","alt":"A transparent glass Christmas tree ball ornament with a gold top, containing a small snowman with a pink hat and scarf, along with gold decorations inside."},"For Harmony":{"tagName":"for harmony","type":"harmony","alt":"A transparent glass Christmas tree ball ornament with a gold top, containing a miniature purple Christmas tree, gold decorations, and small gifts inside."}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/pages/gifts/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_create_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/create-layout */ "./src/assets/js/create-layout.js");
/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tabs/tabs */ "./src/components/tabs/tabs.js");
/* harmony import */ var _components_scroll_button_scroll_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/scroll-button/scroll-button */ "./src/components/scroll-button/scroll-button.js");




(0,_assets_js_create_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_components_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_scroll_button_scroll_button__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map