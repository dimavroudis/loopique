(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/js/animate.js":
/*!***************************!*\
  !*** ./src/js/animate.js ***!
  \***************************/
/*! exports provided: AnimateOnEntry, AnimateOnExit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimateOnEntry\", function() { return AnimateOnEntry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimateOnExit\", function() { return AnimateOnExit; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar AnimateOnEntry = /*#__PURE__*/function () {\n  function AnimateOnEntry(elements) {\n    var _this = this;\n\n    _classCallCheck(this, AnimateOnEntry);\n\n    _defineProperty(this, \"elements\", void 0);\n\n    _defineProperty(this, \"observer\", new IntersectionObserver(this.observerCallback, {\n      root: null,\n      rootMargin: '0px',\n      threshold: this.buildThresholdList(10)\n    }));\n\n    this.elements = elements;\n    this.elements.forEach(function (element) {\n      _this.observer.observe(element);\n    });\n  }\n\n  _createClass(AnimateOnEntry, [{\n    key: \"buildThresholdList\",\n    value: function buildThresholdList() {\n      var numSteps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n      var thresholds = [];\n\n      for (var i = 1.0; i <= numSteps; i++) {\n        var ratio = i / numSteps;\n        thresholds.push(ratio);\n      }\n\n      thresholds.push(0);\n      return thresholds;\n    }\n  }, {\n    key: \"observerCallback\",\n    value: function observerCallback(entries) {\n      entries.forEach(function (entry) {\n        if (entry.target.dataset.ratio && entry.intersectionRatio >= entry.target.dataset.ratio || !entry.target.dataset.ratio && entry.isIntersecting) {\n          entry.target.classList.add('animated');\n        }\n      });\n    }\n  }]);\n\n  return AnimateOnEntry;\n}();\nvar AnimateOnExit = /*#__PURE__*/function () {\n  function AnimateOnExit(elements) {\n    var _this2 = this;\n\n    _classCallCheck(this, AnimateOnExit);\n\n    _defineProperty(this, \"elements\", void 0);\n\n    _defineProperty(this, \"observer\", new IntersectionObserver(this.observerCallback, {\n      root: null,\n      rootMargin: '0px',\n      threshold: this.buildThresholdList(100)\n    }));\n\n    this.elements = elements;\n    this.elements.forEach(function (element) {\n      if (element.dataset.animateParent) {\n        var parentElement = element.closest(element.dataset.animateParent);\n\n        if (parentElement.animateOnExit) {\n          parentElement.animateOnExit.push(element);\n        } else {\n          parentElement.animateOnExit = [element];\n        }\n\n        _this2.observer.observe(parentElement);\n\n        return;\n      }\n\n      _this2.observer.observe(element);\n    });\n  }\n\n  _createClass(AnimateOnExit, [{\n    key: \"buildThresholdList\",\n    value: function buildThresholdList() {\n      var numSteps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;\n      var thresholds = [];\n\n      for (var i = 1.0; i <= numSteps; i++) {\n        var ratio = i / numSteps;\n        thresholds.push(ratio);\n      }\n\n      thresholds.push(0);\n      return thresholds;\n    }\n  }, {\n    key: \"observerCallback\",\n    value: function observerCallback(entries) {\n      entries.forEach(function (entry) {\n        if (entry.target.animateOnExit) {\n          entry.target.animateOnExit.forEach(function (element) {\n            element.style.opacity = Math.pow(entry.intersectionRatio, 4);\n            element.style.transform = 'translateY(-' + Math.sqrt(1 - entry.intersectionRatio, 2) * 100 + '%)';\n          });\n        } else {\n          entry.target.style.opacity = Math.pow(entry.intersectionRatio, 4);\n          entry.target.style.transform = 'translateY(-' + Math.sqrt(1 - entry.intersectionRatio, 3) * 100 + '%)';\n        }\n      });\n    }\n  }]);\n\n  return AnimateOnExit;\n}();\n\n//# sourceURL=webpack:///./src/js/animate.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Form = /*#__PURE__*/function () {\n  function Form(form, endpoint) {\n    var _this = this;\n\n    _classCallCheck(this, Form);\n\n    _defineProperty(this, \"form\", void 0);\n\n    _defineProperty(this, \"inputs\", void 0);\n\n    this.form = form;\n    this.inputs = form.querySelectorAll('.form__group input, .form__group textarea');\n    this.inputs.forEach(function (elem) {\n      elem.addEventListener('blur', function () {\n        _this.setActive(elem, false);\n      });\n      elem.addEventListener('focus', function () {\n        _this.setActive(elem, true);\n      });\n    });\n  }\n\n  _createClass(Form, [{\n    key: \"setActive\",\n    value: function setActive(el, active) {\n      var formGroup = el.parentNode;\n\n      if (active) {\n        formGroup.classList.add('form__group--active');\n      } else {\n        formGroup.classList.remove('form__group--active');\n\n        if (el.value === '') {\n          formGroup.classList.remove('form__group--filled');\n        } else {\n          formGroup.classList.add('form__group--filled');\n        }\n      }\n    }\n  }]);\n\n  return Form;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/js/nav.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ \"./src/js/animate.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/js/form.js\");\n\n\n\n/*\r\n * Menu\r\n */\n\nvar primaryMenu = new _nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#site-navigation', '.burger-trigger');\n/*\r\n * Animations\r\n */\n\nvar animteOnEntry = new _animate__WEBPACK_IMPORTED_MODULE_1__[\"AnimateOnEntry\"](document.querySelectorAll('.animate-me'));\nvar animateOnExit = new _animate__WEBPACK_IMPORTED_MODULE_1__[\"AnimateOnExit\"](document.querySelectorAll('.hero__content'));\n/*\r\n * Form\r\n */\n\nvar form = new _form__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.getElementById('contactForm'));\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PrimaryMenu; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar PrimaryMenu = /*#__PURE__*/function () {\n  function PrimaryMenu(menuSelector, burgerSelector) {\n    var _this = this;\n\n    var siteHeaderSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \".site-header\";\n\n    _classCallCheck(this, PrimaryMenu);\n\n    _defineProperty(this, \"menu\", void 0);\n\n    _defineProperty(this, \"burger\", void 0);\n\n    _defineProperty(this, \"status\", void 0);\n\n    this.menu = document.querySelector(menuSelector);\n    this.burger = document.querySelector(burgerSelector);\n    this.siteHeader = document.querySelector(siteHeaderSelector);\n    if (!this.menu) throw Error(\"No \" + menuSelector + \" found\");\n    if (!this.burger) throw Error(\"No \" + burgerSelector + \" found\");\n    var ariaExpanded = this.burger.getAttribute(\"aria-expanded\");\n    if (ariaExpanded && ariaExpanded === \"true\") this.status = \"open\";else this.status = \"closed\";\n    this.burger.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      _this.toggleMenu();\n    });\n  }\n\n  _createClass(PrimaryMenu, [{\n    key: \"toggleMenu\",\n    value: function toggleMenu() {\n      if (this.status === \"closed\") {\n        this.openMenu();\n      } else {\n        this.closeMenu();\n      }\n    }\n  }, {\n    key: \"openMenu\",\n    value: function openMenu() {\n      this.menu.style.top = getComputedStyle(document.documentElement).marginTop;\n      this.menu.classList.add(\"open\");\n      this.burger.setAttribute(\"aria-expanded\", \"true\");\n      this.status = \"open\";\n    }\n  }, {\n    key: \"closeMenu\",\n    value: function closeMenu() {\n      this.menu.classList.remove(\"open\");\n      this.burger.setAttribute(\"aria-expanded\", \"false\");\n      this.status = \"closed\";\n      document.body.style = \"\";\n      this.siteHeader.style = \"\";\n    }\n  }]);\n\n  return PrimaryMenu;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/nav.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/sass/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/sass/main.scss */\"./src/sass/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/sass/main.scss?");

/***/ })

},[[0,"runtime"]]]);