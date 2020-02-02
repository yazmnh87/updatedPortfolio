webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeaderSection.js":
/*!*************************************!*\
  !*** ./components/HeaderSection.js ***!
  \*************************************/
/*! exports provided: HeaderSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSection", function() { return HeaderSection; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/bill/dev/updated_portfolio/components/HeaderSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay: flex;\nheight: 20vh;\nwidth: 100%;\njustify-content:center;\nalign-items:center;\nbackground-color: ", ";\n\n.adjContainer{\n    display: flex;\n    height: 50%;\n    width: 50%;\n    background-color: ", ";\n    border-radius: 8px;\n    justify-content:center;\n    align-items:center;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.white;
});
var HeaderSection = function HeaderSection(props) {
  var adjs = ['Driven', 'attentive', 'organized', 'curious', 'insipred', 'unity', 'imperfect', 'dedicated', 'innovative', 'balanced', 'communicating', 'action', 'aware', 'accomplishing', 'wise', 'human', 'mindful', 'intelligent', 'reflecting', 'endurance', 'integrity', 'spirit', 'abundance', 'life force', 'pure', 'questioning', 'answering', 'vibration', 'Developer'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    currentAdj: adjs[0]
  }),
      state = _useState[0],
      setState = _useState[1];

  var updateAdj = function updateAdj(arr) {
    var i = 1;

    if (i < arr.length) {
      return arr[i++];
    } else if (i === arr.length) {
      arr[i];
      i = 0;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setInterval(function () {
      updateAdj(adjs);
    }, [3000]);
  }, []);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "adjContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "I am ", "".concat(state.currentAdj))));
};

/***/ })

})
//# sourceMappingURL=index.js.1342a48c52e867a3a063.hot-update.js.map