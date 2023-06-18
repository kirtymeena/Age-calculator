/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/funtioncalCode/CalculateAge.js":
/*!***********************************************!*\
  !*** ./src/js/funtioncalCode/CalculateAge.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CalculateAge = /*#__PURE__*/function () {
  function CalculateAge(day, month, year) {
    _classCallCheck(this, CalculateAge);
    this.day = day;
    this.month = month;
    this.year = year;
  }
  _createClass(CalculateAge, [{
    key: "calculateYear",
    value: function calculateYear() {}
  }, {
    key: "calculateMonth",
    value: function calculateMonth() {}
  }, {
    key: "calculateDays",
    value: function calculateDays() {}
  }, {
    key: "renderResult",
    value: function renderResult() {}
  }]);
  return CalculateAge;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculateAge);

// export const calculateYears = (year) => {
//     const currentYear = new Date().getFullYear();

//     return Math.abs(currentYear - year) -1
// }

// export const calculateMonth = (month) => {
//     const m1 = 12 - month;
//     const m2 = new Date().getMonth()
//     return m1 + m2
// }

// export const calculateDays = (day, month) => {
//     const currentDate = new Date()
//     const d1 = month + "/" + day + "/" + (currentDate.getFullYear() - 1)
//     const d2 = currentDate.getMonth() + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();
//     return Math.abs(Math.floor((Date.parse(d1) - Date.parse(d2)) / (1000 * 60 * 60 * 24)));

// }

/***/ }),

/***/ "./src/js/funtioncalCode/Validation.js":
/*!*********************************************!*\
  !*** ./src/js/funtioncalCode/Validation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Validate = /*#__PURE__*/function () {
  function Validate(dayEle, monthEle, yearEle, dayError, monthError, yearError, title) {
    _classCallCheck(this, Validate);
    this.day = dayEle;
    this.month = monthEle;
    this.year = yearEle;
    this.dayError = dayError;
    this.monthError = monthError;
    this.yearError = yearError;
    this.title = title;
    this.monthWith30 = [4, 6, 9, 11];
    this.errorCount = 0;
    this.currentYear = new Date().getFullYear();
  }
  _createClass(Validate, [{
    key: "isLeapYear",
    value: function isLeapYear() {
      return year % 4 === 0 && year % 400 === 0;
    }
  }, {
    key: "checkEmptyField",
    value: function checkEmptyField() {
      console.log(this.day, this.month, this.year, this.day.value === "", this.day.value.length === 0);
      if (this.day.value === '') {
        this.errorCount += 1;
        this.renderErrorMsg("The field is required", this.day, this.dayError, 0);
      } else if (this.errorCount === 0) {
        this.removeErrorMsg(this.day, this.dayError, '0');
      }
      if (this.month.value === '') {
        console.log("30th", this.month.value);
        this.errorCount += 1;
        this.renderErrorMsg("The field is required", this.month, this.monthError, 1);
      } else if (this.errorCount === 0) {
        console.log("errorcount", this.errorCount);
        this.removeErrorMsg(this.month, this.monthError, 1);
      }
      if (this.year.value === '') {
        this.errorCount += 1;
        this.renderErrorMsg("The field is required", this.year, this.yearError, 2);
      } else if (this.errorCount === 0) {
        this.removeErrorMsg(this.year, this.yearError, 2);
      }
      return this.errorCount > 0;
    }
  }, {
    key: "validateAllFields",
    value: function validateAllFields() {
      if (isNaN(this.day.value) || this.day === '00' || Number(this.day.value) > 30 && !this.monthWith30.includes(this.month.value) || this.isLeapYear(this.year.value) && Number(this.day.value) > 29 || Number(this.day.value) > 31) {
        this.renderErrorMsg("Must be a valid day", this.day, this.dayError, 0);
        this.errorCount += 1;
      } else {
        this.removeErrorMsg(this.day, this.dayError, '0');
      }
      if (Number(this.month.value) > 12 || isNaN(this.month.value) || this.month.value === '000') {
        this.renderErrorMsg("Must be a valid month", this.month, this.monthError, 1);
        this.errorCount += 1;
      } else {
        this.removeErrorMsg(this.month, this.monthError, 1);
      }
      if (Number(this.year.value) >= this.currentYear || this.year.value === '0000' || isNaN(this.year.value)) {
        this.renderErrorMsg("Must be in the past", this.year, this.yearError, 2);
        this.errorCount += 1;
      } else {
        this.removeErrorMsg(this.year, this.yearError, 2);
      }
      return this.errorCount > 0;
    }
  }, {
    key: "renderErrorMsg",
    value: function renderErrorMsg(msg, field, error, titleIndex) {
      field.style.border = '1px solid #ff5959';
      error.innerText = msg;
      this.title[titleIndex].style.color = '#ff5959';
    }
  }, {
    key: "removeErrorMsg",
    value: function removeErrorMsg(field, error, titleIndex) {
      field.style.border = '';
      error.innerText = '';
      this.title[titleIndex].style.color = '';
    }
  }]);
  return Validate;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100%;
  background-color: var(--light-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: var(--ff);
}

.card__wrapper {
  background-color: var(--white);
  width: 840px;
  height: 651px;
  border-radius: 38px 16px 238px 16px;
  padding: 48px 24px 48px 24px;
  display: flex;
  flex-direction: column;
  gap: 3.3rem;
}

.card__header {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

.card__header > div {
  width: 87.67px;
}

.title {
  font-size: var(--fs-sm);
  line-height: var(--line-height-sm);
  letter-spacing: var(--letter-spacing);
  color: var(--grey);
  font-weight: var(--fw);
  text-transform: uppercase;
}

.inner__header > div:nth-child(even) {
  height: 54px;
  width: 100%;
}

/* input field */
#day,
#month,
#year {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  transition: 0.4s border;
  font-size: var(--fs-lg);
  color: var(--black);
  font-weight: var(--fw);
  cursor: pointer;
  appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: none;
  margin: 0;
}
#day:focus,
#month:focus,
#year:focus {
  outline: none;
  border: 1px solid #854dff;
}

.card__seperator {
  display: flex;
  justify-content: center;
  width: 100%;
}

.seperator__circle {
  background-color: var(--purple);
  border-radius: 50%;
  aspect-ratio: 1;
  width: 64px;
  height: 64px;
  z-index: 100;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.3s background;
}
.seperator__circle:hover {
  background-color: #151515;
}
.seperator__circle:active {
  background-color: var(--purple);
}
svg {
  fill: whitesmoke;
}
.right__seperator,
.left__seperator {
  width: 50%;
  position: relative;
}
.right__seperator::after {
  position: absolute;
  display: inline-block;
  content: "";
  border: 1px solid var(--light-grey);
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.left__seperator::before {
  position: absolute;
  display: inline-block;
  content: "";
  border: 1px solid var(--light-grey);
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

#dayError,
#monthError,
#yearError {
  color: var(--red);
  font-size: var(--fs-14);
  font-style: italic;
  line-height: 21px;
}

.result-1,
.result-2,
.result-3 {
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 56px;
  line-height: 114.4px;
}
.dash-1,
.dash-2,
.dash-3 {
  color: var(--purple);
  padding-right: 1rem;
}

/* ================= media queries ===================== */

@media only screen and (min-width: 608px) {
  body {
    padding: 100px;
  }
  .card__wrapper {
    border-radius: 24px 24px 200px 24px;
    gap:32px
  }

  .card__header {
    justify-content: flex-start;
  }
  .card__header > div {
    width: 160px;
  }
  .inner__header > div:nth-child(even) {
    height: 72px;
    width: 100%;
  }

  .title {
    font-size: var(--fs-md);
    line-height: var(--line-height-lg);
    letter-spacing: var(--letter-spacing);
  }
}

@media only screen and (min-width: 992px) {
  .result-1,
  .result-2,
  .result-3 {
    font-size: 104px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,mCAAmC;EACnC,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,kCAAkC;EAClC,qCAAqC;EACrC,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,gBAAgB;AAChB;;;EAGE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,SAAS;AACX;AACA;;;EAGE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,+BAA+B;AACjC;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,mCAAmC;EACnC,WAAW;EACX,QAAQ;EACR,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,mCAAmC;EACnC,WAAW;EACX,QAAQ;EACR,2BAA2B;AAC7B;;AAEA;;;EAGE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;AACtB;AACA;;;EAGE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA,0DAA0D;;AAE1D;EACE;IACE,cAAc;EAChB;EACA;IACE,mCAAmC;IACnC;EACF;;EAEA;IACE,2BAA2B;EAC7B;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,uBAAuB;IACvB,kCAAkC;IAClC,qCAAqC;EACvC;AACF;;AAEA;EACE;;;IAGE,gBAAgB;EAClB;AACF","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: var(--light-grey);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  font-family: var(--ff);\r\n}\r\n\r\n.card__wrapper {\r\n  background-color: var(--white);\r\n  width: 840px;\r\n  height: 651px;\r\n  border-radius: 38px 16px 238px 16px;\r\n  padding: 48px 24px 48px 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 3.3rem;\r\n}\r\n\r\n.card__header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n}\r\n\r\n.card__header > div {\r\n  width: 87.67px;\r\n}\r\n\r\n.title {\r\n  font-size: var(--fs-sm);\r\n  line-height: var(--line-height-sm);\r\n  letter-spacing: var(--letter-spacing);\r\n  color: var(--grey);\r\n  font-weight: var(--fw);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.inner__header > div:nth-child(even) {\r\n  height: 54px;\r\n  width: 100%;\r\n}\r\n\r\n/* input field */\r\n#day,\r\n#month,\r\n#year {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  border-radius: 8px;\r\n  border: 1px solid #dcdcdc;\r\n  transition: 0.4s border;\r\n  font-size: var(--fs-lg);\r\n  color: var(--black);\r\n  font-weight: var(--fw);\r\n  cursor: pointer;\r\n  appearance: none;\r\n}\r\ninput[type=\"number\"] {\r\n  -moz-appearance: textfield;\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n#day:focus,\r\n#month:focus,\r\n#year:focus {\r\n  outline: none;\r\n  border: 1px solid #854dff;\r\n}\r\n\r\n.card__seperator {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.seperator__circle {\r\n  background-color: var(--purple);\r\n  border-radius: 50%;\r\n  aspect-ratio: 1;\r\n  width: 64px;\r\n  height: 64px;\r\n  z-index: 100;\r\n  cursor: pointer;\r\n  padding: 0.5rem;\r\n  transition: 0.3s background;\r\n}\r\n.seperator__circle:hover {\r\n  background-color: #151515;\r\n}\r\n.seperator__circle:active {\r\n  background-color: var(--purple);\r\n}\r\nsvg {\r\n  fill: whitesmoke;\r\n}\r\n.right__seperator,\r\n.left__seperator {\r\n  width: 50%;\r\n  position: relative;\r\n}\r\n.right__seperator::after {\r\n  position: absolute;\r\n  display: inline-block;\r\n  content: \"\";\r\n  border: 1px solid var(--light-grey);\r\n  width: 100%;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n.left__seperator::before {\r\n  position: absolute;\r\n  display: inline-block;\r\n  content: \"\";\r\n  border: 1px solid var(--light-grey);\r\n  width: 100%;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n#dayError,\r\n#monthError,\r\n#yearError {\r\n  color: var(--red);\r\n  font-size: var(--fs-14);\r\n  font-style: italic;\r\n  line-height: 21px;\r\n}\r\n\r\n.result-1,\r\n.result-2,\r\n.result-3 {\r\n  display: flex;\r\n  align-items: center;\r\n  font-weight: 800;\r\n  font-size: 56px;\r\n  line-height: 114.4px;\r\n}\r\n.dash-1,\r\n.dash-2,\r\n.dash-3 {\r\n  color: var(--purple);\r\n  padding-right: 1rem;\r\n}\r\n\r\n/* ================= media queries ===================== */\r\n\r\n@media only screen and (min-width: 608px) {\r\n  body {\r\n    padding: 100px;\r\n  }\r\n  .card__wrapper {\r\n    border-radius: 24px 24px 200px 24px;\r\n    gap:32px\r\n  }\r\n\r\n  .card__header {\r\n    justify-content: flex-start;\r\n  }\r\n  .card__header > div {\r\n    width: 160px;\r\n  }\r\n  .inner__header > div:nth-child(even) {\r\n    height: 72px;\r\n    width: 100%;\r\n  }\r\n\r\n  .title {\r\n    font-size: var(--fs-md);\r\n    line-height: var(--line-height-lg);\r\n    letter-spacing: var(--letter-spacing);\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .result-1,\r\n  .result-2,\r\n  .result-3 {\r\n    font-size: 104px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/variables.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/variables.css ***!
  \************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --light-grey: #f0f0f0;
  --grey: #716f6f;
  --white: #ffffff;
  --black: #151515;
  --purple: #854dff;
  --ff: "Poppins", sans-serif;
  --red: #ff5959;

  --fs-sm: 12px;
  --fs-14: 14px;
  --fs-lg: 20px;
  --fs-md: 14px;

  --line-height-sm: 18px;
  --line-height-lg: 21px;
  --letter-spacing: 0.25em;
  --fw: 700;
}
`, "",{"version":3,"sources":["webpack://./src/styles/variables.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,2BAA2B;EAC3B,cAAc;;EAEd,aAAa;EACb,aAAa;EACb,aAAa;EACb,aAAa;;EAEb,sBAAsB;EACtB,sBAAsB;EACtB,wBAAwB;EACxB,SAAS;AACX","sourcesContent":[":root {\r\n  --light-grey: #f0f0f0;\r\n  --grey: #716f6f;\r\n  --white: #ffffff;\r\n  --black: #151515;\r\n  --purple: #854dff;\r\n  --ff: \"Poppins\", sans-serif;\r\n  --red: #ff5959;\r\n\r\n  --fs-sm: 12px;\r\n  --fs-14: 14px;\r\n  --fs-lg: 20px;\r\n  --fs-md: 14px;\r\n\r\n  --line-height-sm: 18px;\r\n  --line-height-lg: 21px;\r\n  --letter-spacing: 0.25em;\r\n  --fw: 700;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/variables.css":
/*!**********************************!*\
  !*** ./src/styles/variables.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/variables.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/variables.css */ "./src/styles/variables.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _js_funtioncalCode_Validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/funtioncalCode/Validation */ "./src/js/funtioncalCode/Validation.js");
/* harmony import */ var _js_funtioncalCode_CalculateAge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/funtioncalCode/CalculateAge */ "./src/js/funtioncalCode/CalculateAge.js");





var dayEle = document.getElementById("day");
var monthEle = document.getElementById("month");
var yearEle = document.getElementById("year");
var btn = document.getElementById("btn");
var dayError = document.getElementById('dayError');
var monthError = document.getElementById('monthError');
var yearError = document.getElementById('yearError');
var title = document.querySelectorAll('.title');
var resulyYear = document.querySelector('.dash-1');
var resultMonth = document.querySelector('.dash-2');
var resultDay = document.querySelector('.dash-3');
btn.addEventListener('click', function (e) {
  toggleAria();
  var validate = new _js_funtioncalCode_Validation__WEBPACK_IMPORTED_MODULE_2__["default"](dayEle, monthEle, yearEle, dayError, monthError, yearError, title);
  if (!validate.checkEmptyField()) {
    if (!validate.validateAllFields()) {
      console.log("calculate");
    }

    // resulyYear.innerHTML = calculateYears(yearEle.value)
    // resultMonth.innerHTML = calculateMonth(monthEle.value)
    // resultDay.innerHTML = calculateDays(dayEle.value, monthEle.value)
  }
});

var toggleAria = function toggleAria() {
  btn.setAttribute('aria-pressed', true);
};
var keyboardAccessBtn = function keyboardAccessBtn(e) {
  if (e.keyCode === 13 || e.keyCode === 32) {
    toggleAria();
  }
};
})();

/******/ })()
;
//# sourceMappingURL=bundle26b0847b6af0d65f4ac5.js.map