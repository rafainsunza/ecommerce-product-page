/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/product-data.js":
/*!**********************************!*\
  !*** ./src/data/product-data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   product_data: () => (/* binding */ product_data)
/* harmony export */ });
/* harmony import */ var _assets_image_product_1_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/image-product-1-thumbnail.jpg */ "./src/assets/image-product-1-thumbnail.jpg");
/* harmony import */ var _assets_image_product_2_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/image-product-2-thumbnail.jpg */ "./src/assets/image-product-2-thumbnail.jpg");
/* harmony import */ var _assets_image_product_3_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/image-product-3-thumbnail.jpg */ "./src/assets/image-product-3-thumbnail.jpg");
/* harmony import */ var _assets_image_product_4_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/image-product-4-thumbnail.jpg */ "./src/assets/image-product-4-thumbnail.jpg");
/* harmony import */ var _assets_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/image-product-1.jpg */ "./src/assets/image-product-1.jpg");
/* harmony import */ var _assets_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/image-product-2.jpg */ "./src/assets/image-product-2.jpg");
/* harmony import */ var _assets_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/image-product-3.jpg */ "./src/assets/image-product-3.jpg");
/* harmony import */ var _assets_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/image-product-4.jpg */ "./src/assets/image-product-4.jpg");








var product_data = [{
  id: 1,
  brand: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250.00,
  currency: "$",
  discount_percentage: 50,
  images: {
    thumbnails: [_assets_image_product_1_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__, _assets_image_product_2_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_image_product_3_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_image_product_4_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__],
    full_size: [_assets_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_6__, _assets_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_7__]
  }
}, {
  id: 2,
  brand: "Sneaker Company",
  title: "Spring Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.00,
  currency: "$",
  discount_percentage: 25,
  images: {
    thumbnails: [_assets_image_product_1_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__, _assets_image_product_2_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_image_product_3_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_image_product_4_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__],
    full_size: [_assets_image_product_1_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_image_product_2_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_image_product_3_jpg__WEBPACK_IMPORTED_MODULE_6__, _assets_image_product_4_jpg__WEBPACK_IMPORTED_MODULE_7__]
  }
}];
product_data.forEach(function (product) {
  if (product.discount_percentage !== 0) {
    product.price_before = product.price;
    product.price = product.price * (1 - product.discount_percentage / 100);
  }
});


/***/ }),

/***/ "./src/modules/cart-module.js":
/*!************************************!*\
  !*** ./src/modules/cart-module.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToCart: () => (/* binding */ addToCart),
/* harmony export */   cart: () => (/* binding */ cart),
/* harmony export */   removeFromCart: () => (/* binding */ removeFromCart)
/* harmony export */ });
var cart = {};
function addToCart(productId, productQuantity) {
  productId in cart ? cart[productId].quantity += productQuantity : cart[productId] = {
    quantity: productQuantity
  };
}
function removeFromCart(productId) {
  delete cart[productId];
}


/***/ }),

/***/ "./src/web-components/custom-button/custom-button.js":
/*!***********************************************************!*\
  !*** ./src/web-components/custom-button/custom-button.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomButton: () => (/* binding */ CustomButton)
/* harmony export */ });
/* harmony import */ var _custom_button_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-button.html */ "./src/web-components/custom-button/custom-button.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        button {\n            box-sizing: border-box;\n            border: none;\n            padding: 0;\n            background-color: inherit;\n            font-weight: inherit;\n            font-family: inherit;\n            font-size: inherit;\n            display: inherit;\n        }\n\n        button:hover {\n            cursor: pointer;\n        }\n\n        .hidden {\n            display: none;\n        }\n    </style>\n\n    ".concat(_custom_button_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var CustomButton = /*#__PURE__*/function (_HTMLElement) {
  function CustomButton() {
    var _this;
    _classCallCheck(this, CustomButton);
    _this = _callSuper(this, CustomButton);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    return _this;
  }
  _inherits(CustomButton, _HTMLElement);
  return _createClass(CustomButton);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('custom-button', CustomButton);


/***/ }),

/***/ "./src/web-components/img-slider/img-slider.js":
/*!*****************************************************!*\
  !*** ./src/web-components/img-slider/img-slider.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImgSlider: () => (/* binding */ ImgSlider)
/* harmony export */ });
/* harmony import */ var _img_slider_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-slider.html */ "./src/web-components/img-slider/img-slider.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        /* component reset */\n        a {\n            text-decoration: none;\n        }\n\n        * {\n            box-sizing: border-box;\n            font-family: 'Kumbh Sans';\n            margin: 0;\n        }\n        /* component reset */\n\n        .slider {\n            position: relative;\n            width: 100%;   \n            margin: auto;\n\n            @media(min-width: 1024px) {\n                width: 400px;\n            }\n        }\n\n        .slides {\n            display: grid;\n            grid-auto-flow: column;\n            grid-auto-columns: 100%;\n            \n\n            overflow-x: auto;\n            scroll-snap-type: inline mandatory;\n            scrollbar-width: none;\n\n            @media(min-width: 500px) {\n                gap: 20px;\n                grid-auto-columns: calc(50% - 10px); \n            }\n          \n            @media(min-width: 1024px) {\n                grid-auto-columns: 100%;\n                gap: 0;\n            }\n        }\n\n        ::slotted([slot=\"slide\"]) {\n            width: 100%;\n            scroll-snap-align: start;\n        }\n\n        @media(min-width: 1024px) {\n            ::slotted([slot=\"slide\"]) {\n                border-radius: 15px;                \n            }\n        }\n     \n        .previous:hover, .next:hover {\n            cursor: pointer;\n\n        }\n\n        .previous, .next {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            position: absolute;\n            top: 50%;\n            margin: 0 15px;\n\n            background-color: hsl(0, 0%, 100%);\n            width: 30px;\n            height: 30px;\n            border-radius: 30px;\n\n            @media(min-width: 1024px) {\n                display: none;\n            }\n        }\n\n        .previous > img, .next > img {\n            height: 15px;\n            width: 10px;\n        }\n\n        .next {\n            right: 0;\n        }\n\n\n        .thumbnails {\n            display: grid;\n            grid-auto-flow: column;\n            justify-content: space-between;\n            margin-top: 30px;\n            padding-bottom: 10px;\n            overflow-x: auto;\n            scroll-snap-type: inline mandatory;\n            scrollbar-color: hsl(26, 100%, 55%) hsl(25, 100%, 94%);\n        }\n\n        ::slotted([slot=\"thumbnail\"]) {\n            display: none;\n        }\n\n       @media(min-width: 1024px) {\n            ::slotted([slot=\"thumbnail\"]) {\n                display: block;\n\n                width: 80px;\n                height: 80px;\n                border-radius: 10px;\n            }\n\n            ::slotted([slot=\"thumbnail\"]:hover) {\n                opacity: 50%;\n                cursor: pointer;\n            }\n       }\n\n       .hidden {\n            display: none;\n       }\n\n    </style>\n    ".concat(_img_slider_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var ImgSlider = /*#__PURE__*/function (_HTMLElement) {
  function ImgSlider() {
    var _this;
    _classCallCheck(this, ImgSlider);
    _this = _callSuper(this, ImgSlider);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _this.slidesContainer = _this.shadowRoot.querySelector('.slides');
    _this.slideSlot = _this.shadowRoot.querySelector('slot[name="slide"]');
    _this.thumbnailSlot = _this.shadowRoot.querySelector('slot[name="thumbnail"]');
    _this.thumbnailsContainer = _this.shadowRoot.querySelector('.thumbnails');
    _this.previousBtn = _this.shadowRoot.querySelector('.previous');
    _this.nextBtn = _this.shadowRoot.querySelector('.next');
    _this.images = _this.slideSlot.assignedElements();
    _this.thumbnails = _this.thumbnailSlot.assignedElements();
    _this.activeImageIndex = 0;
    _this.maxImageIndex = _this.images.length - 1;
    _this.thumbnails[_this.activeImageIndex].classList.add('active');
    _this.hasResizedOnce = false;
    _this.previousBtn.addEventListener('click', function (e) {
      return _this.navigateImages(e);
    });
    _this.nextBtn.addEventListener('click', function (e) {
      return _this.navigateImages(e);
    });
    _this.thumbnailsContainer.addEventListener('click', function (e) {
      return _this.thumbnailNavigation(e);
    });
    window.addEventListener('resize', function () {
      return _this.correctDesktopImageAfterResize();
    });

    // const lightbox = this.shadowRoot.querySelector('light-box');

    // this.slideSlot.addEventListener('slotchange', () => {
    //     lightbox.setLightboxImages(this.images);
    // })
    // this.thumbnailSlot.addEventListener('slotchange', () => {
    //     lightbox.setLightBoxThumbnails(this.thumbnails);
    // })
    return _this;
  }
  _inherits(ImgSlider, _HTMLElement);
  return _createClass(ImgSlider, [{
    key: "correctDesktopImageAfterResize",
    value: function correctDesktopImageAfterResize() {
      var _this2 = this;
      if (window.innerWidth >= 1024 && !this.hasResizedOnce) {
        var scrollPositionsAndIndexes = this.getScrollPositionAndIndex();
        var newImageData = scrollPositionsAndIndexes.find(function (imageData) {
          return imageData.index === _this2.activeImageIndex;
        });
        this.slidesContainer.scrollTo({
          left: newImageData.scroll_position,
          behavior: 'smooth'
        });
        this.hasResizedOnce = true;
      } else if (window.innerWidth < 1024) {
        this.hasResizedOnce = false;
      }
    }
  }, {
    key: "getScrollPositionAndIndex",
    value: function getScrollPositionAndIndex() {
      var _this3 = this;
      var thumbnailIndexes = [];
      var imagePositionsAndIndexes = [];
      var imageScrollPosition = 0;
      this.images.forEach(function (image, index) {
        imagePositionsAndIndexes.push({
          scroll_position: imageScrollPosition,
          index: index
        });
        imageScrollPosition = imageScrollPosition + _this3.slidesContainer.scrollWidth / _this3.images.length;
      });
      return imagePositionsAndIndexes;
    }
  }, {
    key: "navigateImages",
    value: function navigateImages(e) {
      var _this4 = this;
      var clickedBtn = e.target.closest('custom-button');
      var scrollPositionsAndIndexes = this.getScrollPositionAndIndex();
      if (clickedBtn === this.nextBtn) {
        this.activeImageIndex < this.maxImageIndex ? this.activeImageIndex++ : null;
        var newImageData = scrollPositionsAndIndexes.find(function (imageData) {
          return imageData.index === _this4.activeImageIndex;
        });
        this.slidesContainer.scrollTo({
          left: newImageData.scroll_position,
          behavior: 'smooth'
        });
      }
      if (clickedBtn === this.previousBtn) {
        this.activeImageIndex > 0 ? this.activeImageIndex-- : null;
        var _newImageData = scrollPositionsAndIndexes.find(function (imageData) {
          return imageData.index === _this4.activeImageIndex;
        });
        this.slidesContainer.scrollTo({
          left: _newImageData.scroll_position,
          behavior: 'smooth'
        });
      }
    }
  }, {
    key: "thumbnailNavigation",
    value: function thumbnailNavigation(e) {
      var clickedThumbnail = e.target.closest('.thumbnail');
      if (clickedThumbnail !== null) {
        var clickedThumbnailIndex = this.thumbnails.indexOf(clickedThumbnail);
        var scrollPositionsAndIndexes = this.getScrollPositionAndIndex();
        var newImageData = scrollPositionsAndIndexes.find(function (imageData) {
          return imageData.index === clickedThumbnailIndex;
        });
        this.thumbnails.forEach(function (thumbnail) {
          return thumbnail.classList.remove('active');
        });
        if (clickedThumbnailIndex !== this.activeImageIndex) {
          this.slidesContainer.scrollTo({
            left: newImageData.scroll_position,
            behavior: 'smooth'
          });
          this.activeImageIndex = newImageData.index;
          clickedThumbnail.classList.add('active');
        }
      }
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('img-slider', ImgSlider);


/***/ }),

/***/ "./src/web-components/nav-menu/nav-menu.js":
/*!*************************************************!*\
  !*** ./src/web-components/nav-menu/nav-menu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavMenu: () => (/* binding */ NavMenu)
/* harmony export */ });
/* harmony import */ var _nav_menu_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-menu.html */ "./src/web-components/nav-menu/nav-menu.html");
/* harmony import */ var _menu_items_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items.json */ "./src/web-components/nav-menu/menu-items.json");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }


var template = document.createElement('template');
template.innerHTML = "\n    <style>\n     \n        /* component reset */\n        a {\n            text-decoration: none;\n        }\n\n        * {\n            box-sizing: border-box;\n            font-family: 'Kumbh Sans';\n        }\n        /* component reset */\n\n\n        .nav-menu-container {\n            position: fixed;\n            top: 0;\n            left: 0;    \n            z-index: 3;\n\n            height: 100%;\n            width: 70%;\n            padding: 30px;\n\n            font-weight: 700;\n            background-color: hsl(0, 0%, 100%);\n\n            @media(min-width: 1024px) {\n                position: static;\n                display: flex;\n                width: auto;\n                padding: 0;\n            }\n        }          \n\n        .nav-items {\n            display: flex;\n            flex-direction: column;\n\n            @media(min-width: 1024px) {\n                flex-direction: row;\n                margin-left: 40px;\n            }\n        }\n\n        .nav-link {\n            color: hsl(220, 13%, 13%);\n            padding: 15px 0;\n\n            @media(min-width: 1024px) {\n                align-content: center;\n                padding: 0 15px;\n\n                border-bottom: 3px solid hsl(0, 0%, 100%);\n\n                font-weight: 400;\n                color: hsl(219, 9%, 45%);\n            }\n        }\n\n        .nav-link:hover {\n            @media(min-width: 1024px) {\n                color: hsl(220, 13%, 13%);\n                border-bottom: 3px solid hsl(26, 100%, 55%);\n            }\n        }\n\n        .open-nav-btn {\n            display: flex;\n\n            @media(min-width: 1024px) {\n                display: none;\n            }\n        }\n\n        .close-nav-btn {\n            margin-bottom: 30px;\n\n            @media(min-width: 1024px) {\n                display: none;\n            }\n        }\n    \n        @media(max-width: 1024px) {\n            .hidden {\n                display: none;\n            }\n        }\n\n    </style>\n\n    ".concat(_nav_menu_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var NavMenu = /*#__PURE__*/function (_HTMLElement) {
  function NavMenu() {
    var _this;
    _classCallCheck(this, NavMenu);
    _this = _callSuper(this, NavMenu);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    _menu_items_json__WEBPACK_IMPORTED_MODULE_1__.forEach(function (item) {
      var link = document.createElement('a');
      link.href = item.url;
      link.innerText = item.title;
      link.classList.add('nav-link');
      _this.shadowRoot.querySelector('.nav-items').append(link);
    });
    var openNavBtn = _this.shadowRoot.querySelector('.open-nav-btn');
    var closeNavBtn = _this.shadowRoot.querySelector('.close-nav-btn');
    var navMenuContainer = _this.shadowRoot.querySelector('.nav-menu-container');
    var overlay = document.querySelector('screen-overlay');
    function openCloseNavMenu(e) {
      var clickedBtn = e.target.closest('custom-button');
      clickedBtn.classList.contains('open-nav-btn') ? navMenuContainer.classList.toggle('hidden') : overlay.toggleVisibility();
      clickedBtn.classList.contains('close-nav-btn') ? navMenuContainer.classList.toggle('hidden') : overlay.toggleVisibility();
    }
    closeNavBtn.addEventListener('click', openCloseNavMenu);
    openNavBtn.addEventListener('click', openCloseNavMenu);
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) {
        overlay.hideOverlay();
        navMenuContainer.classList.add('hidden');
      }
    });
    return _this;
  }
  _inherits(NavMenu, _HTMLElement);
  return _createClass(NavMenu);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('nav-menu', NavMenu);


/***/ }),

/***/ "./src/web-components/product-card/product-card.js":
/*!*********************************************************!*\
  !*** ./src/web-components/product-card/product-card.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCard: () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var _product_card_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-card.html */ "./src/web-components/product-card/product-card.html");
/* harmony import */ var _data_product_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/product-data.js */ "./src/data/product-data.js");
/* harmony import */ var _modules_cart_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/cart-module.js */ "./src/modules/cart-module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }



var template = document.createElement('template');
template.innerHTML = "\n    <style>\n\n        /* component reset */\n        a {\n            text-decoration: none;\n        }\n\n        * {\n            box-sizing: border-box;\n            font-family: 'Kumbh Sans';\n            margin: 0;\n        }\n        /* component reset */\n\n        .card {\n            @media(min-width: 1024px) {\n                display: flex;\n                margin: 80px 120px 0 120px;\n            }\n\n            @media(min-width: 1300px) {\n                margin: 80px 180px 0 180px;\n            }\n           \n        }\n\n        .product-info {\n            padding: 0 20px 20px 20px;\n\n            @media(min-width: 600px) {\n                width: 80%;\n                margin: auto;\n            }\n\n            @media(min-width: 1024px) {\n                width: 100%;\n                margin-left: 80px;\n            }       \n        }\n\n        .brand {\n            color: hsl(219, 9%, 45%);\n            font-weight: 700;\n            font-size: 12px;\n            text-transform: uppercase;\n            letter-spacing: 1px;\n        }\n\n        .product-title {\n            font-weight: 700;\n            font-size: 28px;\n            line-height: 30px;\n\n            padding: 20px 0;\n\n            @media(min-width: 1024px) {\n                font-size: 36px;\n                line-height: 38px;\n            }\n        }\n\n        .description {\n            color: hsl(219, 9%, 45%);\n            line-height: 24px;\n            margin-bottom: 15px;\n        }\n      \n        .price {\n            display: flex;\n            padding: 20px 0;\n\n            @media(min-width: 1024px) {\n                flex-wrap: wrap;\n            }\n        }\n\n        .price-before-container {\n            display: flex;\n            justify-content: flex-end;\n            width: 100%;\n            \n            @media(min-width: 1024px) {\n                justify-content: flex-start;    \n                margin-top: 15px;    \n            }\n        }\n   \n        .currency:first-of-type, .price-after {\n            font-weight: 700;\n            font-size: 28px;  \n        }\n\n        .discount { \n            align-content: center;\n\n            font-weight: 700;\n            color: hsl(0, 0%, 100%);\n\n            background-color: hsl(220, 13%, 13%);\n            border-radius: 5px;\n            padding: 0 10px;\n            margin-left: 20px;\n        }\n\n        .currency:nth-last-of-type(2), .price-before {\n            font-weight: 700;\n            font-size: inherit;\n            color: hsl(219, 9%, 45%);\n            text-decoration: line-through;\n            text-decoration-color: hsl(219, 9%, 45%);\n        }\n\n        .actions-container {\n            @media(min-width: 1024px) {\n                display: flex;\n                justify-content: space-between;\n            }\n        }\n\n        .quantity-container {\n            display: flex;\n            justify-content: space-between;\n\n            padding: 0 20px;\n            margin-bottom: 15px;\n\n            background-color: hsl(223, 64%, 98%);\n            border-radius: 7.5px;\n\n            @media(min-width: 1024px) {\n                width: 40%;\n            }\n        }\n\n        .add-to-cart-container {\n            @media(min-width: 1024px) {\n                width: 50%;\n            }\n\n        }\n\n        .less, .more {\n            display: flex;\n            align-items: center;\n\n            height: 55px; \n            width: 15px;  \n        }\n\n       .less:hover, .more:hover{\n            cursor: pointer;\n        }\n\n        .less-icon, .more-icon {\n            color: hsl(26, 100%, 55%);\n        }\n\n        .less:hover .less-icon,\n        .more:hover .more-icon {\n            color: hsla(26, 100%, 55%, 0.5);\n        }\n\n        .quantity {\n            align-content: center;\n            font-weight: 700;\n        }\n\n        .add-to-cart {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            background-color: hsl(26, 100%, 55%);\n            font-weight: 700;\n            border-radius: 7.5px;\n\n            height: 55px;\n        }\n\n        .add-to-cart:hover {\n            cursor: pointer;\n            opacity: 80%;\n        }\n\n        .cart-icon {\n            margin-right: 20px;\n            font-size: 15px;\n        }\n\n        .hidden {\n            display: none;\n        }\n\n        .active {\n            border: 3px solid hsl(26, 100%, 55%);\n            opacity: 70%;\n        }\n\n\n    </style>\n\n    ".concat(_product_card_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var ProductCard = /*#__PURE__*/function (_HTMLElement) {
  function ProductCard() {
    var _this;
    _classCallCheck(this, ProductCard);
    _this = _callSuper(this, ProductCard);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));

    // handle full size images
    var productId = Number(_this.getAttribute('product-id'));
    var product = _data_product_data_js__WEBPACK_IMPORTED_MODULE_1__.product_data.find(function (product) {
      return product.id === productId;
    });
    _this.fullSizeImages = product.images.full_size;
    _this.thumbnails = product.images.thumbnails;

    // handle product info
    var info = _this.shadowRoot.querySelector('.info');
    var price = _this.shadowRoot.querySelector('.price');
    info.innerHTML = "\n            <p class=\"brand\">".concat(product.brand, "</p>\n            <p class=\"product-title\">").concat(product.title, "</p>\n            <p class=\"description\">").concat(product.description, "</p>\n        ");
    price.innerHTML = "\n            <span class=\"currency\">".concat(product.currency, "</span>\n            <span class=\"price-after\">").concat(product.price.toFixed(2), "</span>\n            <span class=\"discount\">").concat(product.discount_percentage, "%</span>\n\n            <div class=\"price-before-container\">\n                <span class=\"currency\">").concat(product.currency, "</span>\n                <span class=\"price-before\">").concat(product.price_before.toFixed(2), "</span>\n            </div>\n              \n        ");

    // handle add to cart
    _this.amountOfItemsToBeAddedToCart = 0;
    var quantitySpan = _this.shadowRoot.querySelector('.quantity');
    quantitySpan.innerHTML = _this.amountOfItemsToBeAddedToCart;
    _this.shadowRoot.querySelector('.less').addEventListener('click', function (e) {
      return _this.handleCartQuantity(e);
    });
    _this.shadowRoot.querySelector('.more').addEventListener('click', function (e) {
      return _this.handleCartQuantity(e);
    });
    _this.shadowRoot.querySelector('.add-to-cart').addEventListener('click', function () {
      return _this.handleCartAdd(product);
    });
    return _this;
  }
  _inherits(ProductCard, _HTMLElement);
  return _createClass(ProductCard, [{
    key: "setInitialImages",
    value: function setInitialImages() {
      var fullSizeImageContainer = this.shadowRoot.querySelector('.full-size-image-container');
      var thumbnailsContainer = this.shadowRoot.querySelector('.thumbnails-container');
      var fullSizeImage = this.fullSizeImages[this.activeImage];
      var fullSizeImgElement = document.createElement('img');
      fullSizeImgElement.src = fullSizeImage;
      fullSizeImgElement.classList.add('full-size-image');
      fullSizeImageContainer.append(fullSizeImgElement);
      this.thumbnails.forEach(function (thumbnail) {
        var img = document.createElement('img');
        img.src = thumbnail;
        img.classList.add('hidden');
        thumbnailsContainer.appendChild(img);
      });
    }
  }, {
    key: "handleCartAdd",
    value: function handleCartAdd(product) {
      if (this.amountOfItemsToBeAddedToCart > 0) {
        (0,_modules_cart_module_js__WEBPACK_IMPORTED_MODULE_2__.addToCart)(product.id, this.amountOfItemsToBeAddedToCart);
        this.amountOfItemsToBeAddedToCart = 0;
        this.updateCartQuantity();
        this.dispatchEvent(new CustomEvent('custom-event', {
          bubbles: true,
          composed: true
        }));
      }
    }
  }, {
    key: "handleCartQuantity",
    value: function handleCartQuantity(e) {
      var clickedBtn = e.target.closest('custom-button');
      if (clickedBtn.classList.contains('less') && this.amountOfItemsToBeAddedToCart > 0) {
        this.amountOfItemsToBeAddedToCart--;
      }
      if (clickedBtn.classList.contains('more')) {
        this.amountOfItemsToBeAddedToCart++;
      }
      this.updateCartQuantity();
    }
  }, {
    key: "updateCartQuantity",
    value: function updateCartQuantity() {
      this.shadowRoot.querySelector('.quantity').textContent = this.amountOfItemsToBeAddedToCart;
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('product-card', ProductCard);


/***/ }),

/***/ "./src/web-components/screen-overlay/screen-overlay.js":
/*!*************************************************************!*\
  !*** ./src/web-components/screen-overlay/screen-overlay.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenOverlay: () => (/* binding */ ScreenOverlay)
/* harmony export */ });
/* harmony import */ var _screen_overlay_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-overlay.html */ "./src/web-components/screen-overlay/screen-overlay.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        a {\n            text-decoration: none;\n        }\n\n        * {\n            box-sizing: border-box;\n            font-family: 'Kumbh Sans';\n        }\n\n        .overlay {\n            position: fixed;\n            top: 0;\n            right: 0;\n            z-index: 2;\n\n            height: 100vh;\n            width: 100%;\n\n            background-color: hsla(0, 0%, 0%, 0.75);\n        }\n\n        .hidden {\n            display: none;\n        }\n    </style>\n\n    ".concat(_screen_overlay_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var ScreenOverlay = /*#__PURE__*/function (_HTMLElement) {
  function ScreenOverlay() {
    var _this;
    _classCallCheck(this, ScreenOverlay);
    _this = _callSuper(this, ScreenOverlay);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    return _this;
  }
  _inherits(ScreenOverlay, _HTMLElement);
  return _createClass(ScreenOverlay, [{
    key: "toggleVisibility",
    value: function toggleVisibility() {
      this.shadowRoot.querySelector('.overlay').classList.toggle('hidden');
    }
  }, {
    key: "hideOverlay",
    value: function hideOverlay() {
      this.shadowRoot.querySelector('.overlay').classList.add('hidden');
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('screen-overlay', ScreenOverlay);


/***/ }),

/***/ "./src/web-components/shopping-cart/shopping-cart.js":
/*!***********************************************************!*\
  !*** ./src/web-components/shopping-cart/shopping-cart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShoppingCart: () => (/* binding */ ShoppingCart)
/* harmony export */ });
/* harmony import */ var _shopping_cart_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart.html */ "./src/web-components/shopping-cart/shopping-cart.html");
/* harmony import */ var _assets_icon_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icon-delete.svg */ "./src/assets/icon-delete.svg");
/* harmony import */ var _data_product_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/product-data.js */ "./src/data/product-data.js");
/* harmony import */ var _modules_cart_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/cart-module.js */ "./src/modules/cart-module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var template = document.createElement('template');
template.innerHTML = "\n    <style>\n\n        /* component reset */\n        a {\n            text-decoration: none;\n        }\n\n        * {\n            box-sizing: border-box;\n            font-family: 'Kumbh Sans';\n            margin: 0;\n        }\n        /* component reset */\n\n        .cart-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            position: absolute;\n\n            top: calc(100% + 15px); \n            left: 50%;\n            transform: translateX(-50%);\n            z-index: 1;\n\n            min-height: 250px;\n            max-width: 350px;\n            min-width: 300px;\n            width: 100%;\n\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n            border-radius: 5px;\n            background-color: hsl(0, 0%, 100%);\n            color: hsl(220, 13%, 13%);\n\n            @media(min-width: 1024px) {\n                transform: none;\n                top: 90%;\n                left: auto;\n                right: -5%;\n\n            }\n        }\n\n        .cart-header {\n            border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n            font-weight: 700;\n\n            padding: 25px 15px;\n        }\n\n        .cart-body {\n            padding: 20px 20px 0 20px;\n        }\n\n        .cart-footer {\n            padding: 0 20px 20px 20px;\n            height: 70px;\n        }\n\n        .product-data {\n            display: flex;\n            margin-bottom: 20px;\n        }\n\n        .cart-thumbnail {\n            width: 50px;\n            border-radius: 5px;\n        }\n\n        .product-title-and-price {\n            display: flex;\n            flex-direction: column;\n\n            padding: 5px 15px;\n        }\n\n        .product-title {\n            color: hsl(219, 9%, 45%);\n\n            margin: 0;\n        }   \n        \n        .price {\n            display: flex;\n\n            margin-top: auto;\n\n            font-weight: 500;\n        }\n\n        .product-price {\n            display: flex;\n\n            color: hsl(219, 9%, 45%);\n        }\n\n        .product-quantity {\n            color: hsl(219, 9%, 45%);\n\n            margin: 0 5px;\n        }\n    \n        .total-price {\n            display: flex;\n\n            font-weight: 700;\n        }\n\n        .remove-cart-item-btn {\n            display: flex;\n            align-items: center;\n        }\n\n        .checkout-btn {\n            display: flex;\n            justify-content: center;\n\n            font-weight: 700;\n            font-size: 16px;\n\n            padding: 15px;\n\n            border-radius: 7.5px;\n            background-color: hsl(26, 100%, 55%);\n        }\n\n        .checkout-btn:hover {\n            cursor: pointer;\n        }   \n  \n        .empty-cart {\n            text-align: center;\n            color: hsl(219, 9%, 45%);\n            font-weight: 700;\n\n        }\n\n        .cart-btn {\n            position: relative;\n        }\n\n        .cart-icon {\n            color: hsl(219, 9%, 45%)\n        }\n\n        .cart-btn:hover .cart-icon {\n            color: hsl(220, 13%, 13%);\n        }\n\n        .cart-total {\n            position: absolute;\n            top: -7.5px;\n            right: -7.5px;\n\n            padding: 1px 8px;\n            border-radius: 15px;\n\n            background-color: hsl(26, 100%, 55%);\n\n            color: hsl(0, 0%, 100%);\n            font-weight: 700;\n            font-size: 10px;\n        }\n\n        .hidden {\n            display: none;\n        }\n\n    </style>\n\n    ".concat(_shopping_cart_html__WEBPACK_IMPORTED_MODULE_0__["default"], "\n");
var ShoppingCart = /*#__PURE__*/function (_HTMLElement) {
  function ShoppingCart() {
    var _this;
    _classCallCheck(this, ShoppingCart);
    _this = _callSuper(this, ShoppingCart);
    _defineProperty(_this, "cartContent", []);
    _defineProperty(_this, "cartTotal", 0);
    _this.attachShadow({
      mode: 'open'
    });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    var cartContainer = _this.shadowRoot.querySelector('.cart-container');
    var cartBtn = _this.shadowRoot.querySelector('.cart-btn');
    _this.updateCartContent(_modules_cart_module_js__WEBPACK_IMPORTED_MODULE_3__.cart);
    _this.displayCartContent();
    cartBtn.addEventListener('click', function () {
      return _this.openAndCloseCart(cartContainer);
    });
    cartContainer.addEventListener('click', function (e) {
      if (e.target.closest('.remove-cart-item-btn')) {
        (0,_modules_cart_module_js__WEBPACK_IMPORTED_MODULE_3__.removeFromCart)(e.target.closest('.product-data').id);
        _this.updateCartContent(_modules_cart_module_js__WEBPACK_IMPORTED_MODULE_3__.cart);
        _this.displayCartContent();
      }
    });
    return _this;
  }
  _inherits(ShoppingCart, _HTMLElement);
  return _createClass(ShoppingCart, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      document.addEventListener('custom-event', function (event) {
        _this2.updateCartContent(_modules_cart_module_js__WEBPACK_IMPORTED_MODULE_3__.cart);
        _this2.displayCartContent();
      });
    }
  }, {
    key: "openAndCloseCart",
    value: function openAndCloseCart(cartContainer) {
      cartContainer.classList.toggle('hidden');
    }
  }, {
    key: "updateCartContent",
    value: function updateCartContent(cart) {
      this.cartContent = _data_product_data_js__WEBPACK_IMPORTED_MODULE_2__.product_data.filter(function (product) {
        return product.id in cart;
      });
      this.updateCartTotal(cart);
    }
  }, {
    key: "updateCartTotal",
    value: function updateCartTotal(cart) {
      var _this3 = this;
      this.cartTotal = 0;
      Object.values(cart).forEach(function (product) {
        _this3.cartTotal += product.quantity;
      });
    }
  }, {
    key: "displayCartContent",
    value: function displayCartContent() {
      var productDataContainer = this.shadowRoot.querySelector('.product-data-container');
      var cartTotalIcon = this.shadowRoot.querySelector('.cart-total');
      productDataContainer.innerHTML = '';
      if (this.cartContent.length > 0) {
        this.cartContent.forEach(function (product) {
          var div = document.createElement('div');
          div.classList.add('product-data');
          div.id = product.id;
          div.innerHTML = "\n                    <img src=\"".concat(product.images.thumbnails[0], "\" class=\"cart-thumbnail\" /> \n                    <div class=\"product-title-and-price\">\n                        <p class=\"product-title\">").concat(product.title, "</p>\n                        <div class=\"price\">\n                            <div class=\"product-price\">\n                                <span>").concat(product.currency, "</span>\n                                <span>").concat(product.price.toFixed(2), "</span>\n                            </div>\n\n                            <span class=\"product-quantity\">x ").concat(_modules_cart_module_js__WEBPACK_IMPORTED_MODULE_3__.cart[product.id].quantity, "</span>\n\n                            <div class=\"total-price\">\n                                <span>").concat(product.currency, "</span>\n                                <span>").concat((product.price * _modules_cart_module_js__WEBPACK_IMPORTED_MODULE_3__.cart[product.id].quantity).toFixed(2), "</span>\n                            </div>\n                        </div>\n                    </div>\n                    <custom-button class=\"remove-cart-item-btn\"><img src=\"").concat(_assets_icon_delete_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"Delete Item\"/></custom-button>\n                    ");
          productDataContainer.appendChild(div);
        });
        cartTotalIcon.classList.remove('hidden');
        this.shadowRoot.querySelector('.cart-total').innerHTML = "<span>".concat(this.cartTotal, "</span>");
        this.shadowRoot.querySelector('.checkout-btn').classList.remove('hidden');
      } else {
        var div = document.createElement('div');
        div.classList.add('empty-cart');
        div.innerHTML = "\n                <p>Your cart is empty.</p>\n                ";
        productDataContainer.appendChild(div);
        cartTotalIcon.classList.add('hidden');
        this.shadowRoot.querySelector('.checkout-btn').classList.add('hidden');
      }
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('shopping-cart', ShoppingCart);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-family: "Kumbh Sans";
  height: 100%;
}

body {
  height: 100%;
}

header {
  background-color: hsl(0, 0%, 100%);
  margin: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 1024px) {
  header {
    margin: 0 120px;
    border-bottom: 1px solid #dcdcdc;
    height: 100px;
  }
}

.menu-section {
  display: flex;
  align-items: flex-end;
}
@media (min-width: 1024px) {
  .menu-section {
    height: 100%;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  nav-menu {
    order: 2;
    height: 100%;
  }
}

.logo {
  margin: 0 10px 0 10px;
}
@media (min-width: 1024px) {
  .logo {
    order: 1;
    margin: 0;
  }
}

.cart-section {
  display: flex;
  align-items: flex-end;
}
@media (min-width: 600px) {
  .cart-section {
    align-items: center;
  }
}

shopping-cart {
  margin: 0 20px 0 20px;
}
@media (min-width: 1024px) {
  shopping-cart {
    margin: 0 40px 0 40px;
  }
}

.profile-btn {
  background-color: hsl(0, 0%, 100%);
  border: 0;
  padding: 0;
  border-radius: 25px;
}

.profile-img {
  height: 25px;
  width: 25px;
  border-radius: 25px;
  border: 1px solid hsl(0, 0%, 100%);
}
.profile-img:hover {
  cursor: pointer;
  border: 1px solid hsl(26, 100%, 55%);
}
@media (min-width: 600px) {
  .profile-img {
    height: 50px;
    width: 50px;
    border: 3px solid hsl(0, 0%, 100%);
  }
  .profile-img:hover {
    border: 3px solid hsl(26, 100%, 55%);
  }
}

product-card {
  border-bottom: 1px solid red;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.sass"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,YAAA;AACJ;;AACA;EACI,YAAA;AAEJ;;AAAA;EACI,kCAAA;EACA,YAAA;EAEA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAEJ;AAAI;EATJ;IAUQ,eAAA;IACA,gCAAA;IACA,aAAA;EAGN;AACF;;AAFA;EACI,aAAA;EACA,qBAAA;AAKJ;AAHI;EAJJ;IAKQ,YAAA;IACA,mBAAA;EAMN;AACF;;AAJI;EADJ;IAEQ,QAAA;IACA,YAAA;EAQN;AACF;;AAPA;EACI,qBAAA;AAUJ;AARI;EAHJ;IAIQ,QAAA;IACA,SAAA;EAWN;AACF;;AAVA;EACI,aAAA;EACA,qBAAA;AAaJ;AAXI;EAJJ;IAKQ,mBAAA;EAcN;AACF;;AAbA;EACI,qBAAA;AAgBJ;AAdI;EAHJ;IAIQ,qBAAA;EAiBN;AACF;;AAhBA;EACI,kCAAA;EAEA,SAAA;EAEA,UAAA;EACA,mBAAA;AAiBJ;;AAfA;EACI,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kCAAA;AAkBJ;AAhBI;EACI,eAAA;EACA,oCAAA;AAkBR;AAhBI;EAVJ;IAWQ,YAAA;IACA,WAAA;IACA,kCAAA;EAmBN;EAjBM;IACI,oCAAA;EAmBV;AACF;;AAnBA;EACI,4BAAA;AAsBJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/web-components/custom-button/custom-button.html":
/*!*************************************************************!*\
  !*** ./src/web-components/custom-button/custom-button.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<button>
  <slot>Custom Button</slot>
</button>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/web-components/img-slider/img-slider.html":
/*!*******************************************************!*\
  !*** ./src/web-components/img-slider/img-slider.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icon-previous.svg */ "./src/assets/icon-previous.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icon-next.svg */ "./src/assets/icon-next.svg"), __webpack_require__.b);
// Module
var code = `<div class="slider">
  <div class="slides">
    <slot name="slide"></slot>

    <custom-button class="previous">
      <img src="${___HTML_LOADER_IMPORT_0___}" alt="Previous" />
    </custom-button>
    <custom-button class="next">
      <img src="${___HTML_LOADER_IMPORT_1___}" alt="Next" />
    </custom-button>
  </div>
  <div class="thumbnails">
    <slot name="thumbnail"></slot>
  </div>
</div>

<light-box></light-box>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/web-components/nav-menu/nav-menu.html":
/*!***************************************************!*\
  !*** ./src/web-components/nav-menu/nav-menu.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/icon-menu.svg */ "./src/assets/icon-menu.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/icon-close.svg */ "./src/assets/icon-close.svg"), __webpack_require__.b);
// Module
var code = `<custom-button class="open-nav-btn">
  <img src="${___HTML_LOADER_IMPORT_0___}" alt="Open Menu" class="open-icon" />
</custom-button>

<div class="nav-menu-container hidden">
  <custom-button class="close-nav-btn">
    <img src="${___HTML_LOADER_IMPORT_1___}" alt="Close Menu" class="close-icon" />
  </custom-button>
  <div class="nav-items"></div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/web-components/product-card/product-card.html":
/*!***********************************************************!*\
  !*** ./src/web-components/product-card/product-card.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/image-product-1.jpg */ "./src/assets/image-product-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/image-product-2.jpg */ "./src/assets/image-product-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/image-product-3.jpg */ "./src/assets/image-product-3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/image-product-4.jpg */ "./src/assets/image-product-4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/image-product-1-thumbnail.jpg */ "./src/assets/image-product-1-thumbnail.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/image-product-2-thumbnail.jpg */ "./src/assets/image-product-2-thumbnail.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/image-product-3-thumbnail.jpg */ "./src/assets/image-product-3-thumbnail.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/image-product-4-thumbnail.jpg */ "./src/assets/image-product-4-thumbnail.jpg"), __webpack_require__.b);
// Module
var code = `<div class="card">
  <img-slider>
    <img
      src="${___HTML_LOADER_IMPORT_0___}"
      slot="slide"
      class="slide product-1"
    />
    <img
      src="${___HTML_LOADER_IMPORT_1___}"
      slot="slide"
      class="slide product-2"
    />
    <img
      src="${___HTML_LOADER_IMPORT_2___}"
      slot="slide"
      class="slide product-3"
    />
    <img
      src="${___HTML_LOADER_IMPORT_3___}"
      slot="slide"
      class="slide product-4"
    />
    <img
      src="${___HTML_LOADER_IMPORT_4___}"
      slot="thumbnail"
      class="thumbnail product-1"
    />

    <img
      src="${___HTML_LOADER_IMPORT_5___}"
      slot="thumbnail"
      class="thumbnail product-2"
    />

    <img
      src="${___HTML_LOADER_IMPORT_6___}"
      slot="thumbnail"
      class="thumbnail product-3"
    />

    <img
      src="${___HTML_LOADER_IMPORT_7___}"
      slot="thumbnail"
      class="thumbnail product-4"
    />
  </img-slider>

  <div class="product-info">
    <div class="info"></div>

    <div class="price"></div>

    <div class="actions-container">
      <div class="quantity-container">
        <custom-button class="less">
          <svg
            width="12"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="less-icon"
          >
            <defs>
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
              />
            </defs>
            <use fill="currentColor" fill-rule="nonzero" xlink:href="#a" />
          </svg>
        </custom-button>

        <span class="quantity"></span>

        <custom-button class="more">
          <svg
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="more-icon"
          >
            <defs>
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                id="b"
              />
            </defs>
            <use fill="currentColor" fill-rule="nonzero" xlink:href="#b" />
          </svg>
        </custom-button>
      </div>

      <div class="add-to-cart-container">
        <custom-button class="add-to-cart">
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            class="cart-icon"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="currentColor"
              fill-rule="nonzero"
            />
          </svg>
          Add to cart
        </custom-button>
      </div>
    </div>
  </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/web-components/screen-overlay/screen-overlay.html":
/*!***************************************************************!*\
  !*** ./src/web-components/screen-overlay/screen-overlay.html ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="overlay hidden"></div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/web-components/shopping-cart/shopping-cart.html":
/*!*************************************************************!*\
  !*** ./src/web-components/shopping-cart/shopping-cart.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<custom-button class="cart-btn">
  <svg
    width="22"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    class="cart-icon"
  >
    <path
      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
      fill="currentColor"
      fill-rule="nonzero"
    />
  </svg>

  <div class="cart-total hidden"></div>
</custom-button>

<div class="cart-container hidden">
  <div class="cart-header">Cart</div>
  <div class="cart-body">
    <div class="product-data-container"></div>
  </div>
  <div class="cart-footer">
    <custom-button class="checkout-btn">Checkout</custom-button>
  </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles/main.sass":
/*!******************************!*\
  !*** ./src/styles/main.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icon-close.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-close.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-close.svg";

/***/ }),

/***/ "./src/assets/icon-delete.svg":
/*!************************************!*\
  !*** ./src/assets/icon-delete.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-delete.svg";

/***/ }),

/***/ "./src/assets/icon-menu.svg":
/*!**********************************!*\
  !*** ./src/assets/icon-menu.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-menu.svg";

/***/ }),

/***/ "./src/assets/icon-next.svg":
/*!**********************************!*\
  !*** ./src/assets/icon-next.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-next.svg";

/***/ }),

/***/ "./src/assets/icon-previous.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-previous.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-previous.svg";

/***/ }),

/***/ "./src/assets/image-product-1-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/assets/image-product-1-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image-product-1-thumbnail.jpg";

/***/ }),

/***/ "./src/assets/image-product-1.jpg":
/*!****************************************!*\
  !*** ./src/assets/image-product-1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image-product-1.jpg";

/***/ }),

/***/ "./src/assets/image-product-2-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/assets/image-product-2-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image-product-2-thumbnail.jpg";

/***/ }),

/***/ "./src/assets/image-product-2.jpg":
/*!****************************************!*\
  !*** ./src/assets/image-product-2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image-product-2.jpg";

/***/ }),

/***/ "./src/assets/image-product-3-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/assets/image-product-3-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image-product-3-thumbnail.jpg";

/***/ }),

/***/ "./src/assets/image-product-3.jpg":
/*!****************************************!*\
  !*** ./src/assets/image-product-3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image-product-3.jpg";

/***/ }),

/***/ "./src/assets/image-product-4-thumbnail.jpg":
/*!**************************************************!*\
  !*** ./src/assets/image-product-4-thumbnail.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image-product-4-thumbnail.jpg";

/***/ }),

/***/ "./src/assets/image-product-4.jpg":
/*!****************************************!*\
  !*** ./src/assets/image-product-4.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/image-product-4.jpg";

/***/ }),

/***/ "./src/web-components/nav-menu/menu-items.json":
/*!*****************************************************!*\
  !*** ./src/web-components/nav-menu/menu-items.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"id":1,"title":"Home","url":"/"},{"id":2,"title":"Collections","url":"#"},{"id":3,"title":"Men","url":"#"},{"id":4,"title":"Women","url":"#"},{"id":5,"title":"About","url":"#"},{"id":6,"title":"Contact","url":"#"}]');

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_components_nav_menu_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-components/nav-menu/nav-menu.js */ "./src/web-components/nav-menu/nav-menu.js");
/* harmony import */ var _web_components_shopping_cart_shopping_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-components/shopping-cart/shopping-cart.js */ "./src/web-components/shopping-cart/shopping-cart.js");
/* harmony import */ var _web_components_custom_button_custom_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-components/custom-button/custom-button.js */ "./src/web-components/custom-button/custom-button.js");
/* harmony import */ var _web_components_screen_overlay_screen_overlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-components/screen-overlay/screen-overlay.js */ "./src/web-components/screen-overlay/screen-overlay.js");
/* harmony import */ var _web_components_product_card_product_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-components/product-card/product-card.js */ "./src/web-components/product-card/product-card.js");
/* harmony import */ var _web_components_img_slider_img_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-components/img-slider/img-slider.js */ "./src/web-components/img-slider/img-slider.js");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/main.sass */ "./src/styles/main.sass");






// import { LightBox } from "./web-components/light-box/light-box.js";



/******/ })()
;
//# sourceMappingURL=bundle.38d9da67171ff657a6fe.js.map