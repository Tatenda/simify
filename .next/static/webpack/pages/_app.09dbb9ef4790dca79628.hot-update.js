webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./theme.tsx");
/* harmony import */ var _components_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav.component */ "./src/components/nav.component.tsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _services_CRUD_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/CRUD.service */ "./src/_services/CRUD.service.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var src_contexts_show_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_contexts/show.context */ "./src/_contexts/show.context.tsx");


var _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\pages\\_app.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Content = antd__WEBPACK_IMPORTED_MODULE_10__["Layout"].Content;
function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_11__["ShowReducer"], src_contexts_show_context__WEBPACK_IMPORTED_MODULE_11__["initialShowState"]),
      ShowState = _useReducer[0],
      dispatchShow = _useReducer[1];

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_11__["ShowProvider"], {
    value: {
      ShowState: ShowState,
      dispatchShow: dispatchShow
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(swr__WEBPACK_IMPORTED_MODULE_8__["SWRConfig"], {
    value: {
      fetcher: _services_CRUD_service__WEBPACK_IMPORTED_MODULE_9__["CRUDService"].get
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, !loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx(_components_nav_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }), __jsx(Content, {
    sx: {
      height: "100%",
      backgroundColor: "background",
      paddingBlockEnd: "80px"
    },
    className: "site-layout mainContainer col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx("div", {
    sx: {
      variant: "containers.page"
    },
    className: "site-layout-background col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  })))))) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "Loading..."))));
}

_s(App, "OgmSEOl4dKnuuu37JxhyhYLpFA4=");

_c = App;

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIkNvbnRlbnQiLCJMYXlvdXQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlUmVkdWNlciIsIlNob3dSZWR1Y2VyIiwiaW5pdGlhbFNob3dTdGF0ZSIsIlNob3dTdGF0ZSIsImRpc3BhdGNoU2hvdyIsInRoZW1lIiwiZmV0Y2hlciIsIkNSVURTZXJ2aWNlIiwiZ2V0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0Jsb2NrRW5kIiwidmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFNUUEsTyxHQUFZQyw0QyxDQUFaRCxPO0FBRU8sU0FBU0UsR0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBQ3BCQyxzREFBUSxDQUFDLEtBQUQsQ0FEWTtBQUFBLE1BQzNDQyxPQUQyQztBQUFBLE1BQ2xDQyxVQURrQzs7QUFBQSxvQkFFbEJDLHdEQUFVLENBQUNDLHNFQUFELEVBQWNDLDJFQUFkLENBRlE7QUFBQSxNQUU3Q0MsU0FGNkM7QUFBQSxNQUVsQ0MsWUFGa0M7O0FBSWxELFNBQ0ksTUFBQyxzREFBRDtBQUFlLFNBQUssRUFBRUMsOENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVFQUFEO0FBQWMsU0FBSyxFQUFFO0FBQUVGLGVBQVMsRUFBVEEsU0FBRjtBQUFhQyxrQkFBWSxFQUFaQTtBQUFiLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQVcsU0FBSyxFQUFFO0FBQUVFLGFBQU8sRUFBRUMsa0VBQVcsQ0FBQ0M7QUFBdkIsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLLENBQUNWLE9BQUQsR0FDRyxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsT0FBRDtBQUNJLE1BQUUsRUFBRTtBQUNBVyxZQUFNLEVBQUUsTUFEUjtBQUVBQyxxQkFBZSxjQUZmO0FBR0FDLHFCQUFlLEVBQUU7QUFIakIsS0FEUjtBQU1JLGFBQVMsRUFBQyxrQ0FOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUU7QUFDQUMsYUFBTyxFQUFFO0FBRFQsS0FEUjtBQUlJLGFBQVMsRUFBQywrQkFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUksTUFBQyxTQUFELHlGQUFlaEIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkosQ0FESixDQVJKLENBRkosQ0FESCxHQXdCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXpCUixDQURKLENBREosQ0FESjtBQWtDSDs7R0F0Q3VCRixHOztLQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDlkYmI5ZWY0NzkwZGNhNzk2MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi90aGVtZVwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYuY29tcG9uZW50XCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHVzZVNXUiwgeyBTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBDUlVEU2VydmljZSB9IGZyb20gXCIuLi9fc2VydmljZXMvQ1JVRC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgICBTaG93UHJvdmlkZXIsXG4gICAgU2hvd1JlZHVjZXIsXG4gICAgaW5pdGlhbFNob3dTdGF0ZSxcbn0gZnJvbSBcInNyYy9fY29udGV4dHMvc2hvdy5jb250ZXh0XCI7XG5cbmNvbnN0IHsgQ29udGVudCB9ID0gTGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGxldCBbU2hvd1N0YXRlLCBkaXNwYXRjaFNob3ddID0gdXNlUmVkdWNlcihTaG93UmVkdWNlciwgaW5pdGlhbFNob3dTdGF0ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPFNob3dQcm92aWRlciB2YWx1ZT17eyBTaG93U3RhdGUsIGRpc3BhdGNoU2hvdyB9fT5cbiAgICAgICAgICAgICAgICA8U1dSQ29uZmlnIHZhbHVlPXt7IGZldGNoZXI6IENSVURTZXJ2aWNlLmdldCB9fT5cbiAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGBiYWNrZ3JvdW5kYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCbG9ja0VuZDogXCI4MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0IG1haW5Db250YWluZXIgY29sLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJjb250YWluZXJzLnBhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmQgY29sLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1NXUkNvbmZpZz5cbiAgICAgICAgICAgIDwvU2hvd1Byb3ZpZGVyPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=