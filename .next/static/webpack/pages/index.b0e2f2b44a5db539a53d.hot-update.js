webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_listItem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/listItem.component */ "./src/components/listItem.component.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\pages\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





var Page = function Page() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"),
      data = _useSWR.data,
      error = _useSWR.error;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data) {
      console.log(data);
    }

    if (error) console.log(error);
  }, [data, error]);

  if (!data && !error) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }, "Loading...");
  }

  if (error) {//display error
  }

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, data._embedded.episodes.length ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    className: "row",
    sx: {
      variant: "containers.ul"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, data._embedded.episodes.map(function (x) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_components_listItem_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
      episode: x,
      key: x.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    });
  })) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "No Episodes found")));
};

_s(Page, "i5WvaAFDajHCNU98qq4Vb7coGq0=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQYWdlIiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIl9lbWJlZGRlZCIsImVwaXNvZGVzIiwibGVuZ3RoIiwidmFyaWFudCIsIm1hcCIsIngiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxnQkFDU0MsbURBQU0sQ0FDMUIseUVBRDBCLENBRGY7QUFBQSxNQUNQQyxJQURPLFdBQ1BBLElBRE87QUFBQSxNQUNEQyxLQURDLFdBQ0RBLEtBREM7O0FBS2ZDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlGLElBQUosRUFBVTtBQUNORyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNIOztBQUNELFFBQUlDLEtBQUosRUFBV0UsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDZCxHQUxRLEVBS04sQ0FBQ0QsSUFBRCxFQUFPQyxLQUFQLENBTE0sQ0FBVDs7QUFPQSxNQUFJLENBQUNELElBQUQsSUFBUyxDQUFDQyxLQUFkLEVBQXFCO0FBQ2pCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNIOztBQUVELE1BQUlBLEtBQUosRUFBVyxDQUNQO0FBQ0g7O0FBRUQsU0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsSUFBSSxDQUFDSyxTQUFMLENBQWVDLFFBQWYsQ0FBd0JDLE1BQXhCLEdBQ0c7QUFBSSxhQUFTLEVBQUMsS0FBZDtBQUFvQixNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUixJQUFJLENBQUNLLFNBQUwsQ0FBZUMsUUFBZixDQUF3QkcsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRDtBQUFBLFdBQ3pCLHFEQUFDLHlFQUFEO0FBQVUsYUFBTyxFQUFFQSxDQUFuQjtBQUFzQixTQUFHLEVBQUVBLENBQUMsQ0FBQ0MsRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR5QjtBQUFBLEdBQTVCLENBREwsQ0FESCxHQU9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUlIsQ0FESixDQURKO0FBZUgsQ0FuQ0Q7O0dBQU1iLEk7VUFDc0JDLDJDOzs7S0FEdEJELEk7QUFxQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwZTJmMmI0NGE1ZGI1MzlhNTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJzcmMvY29tcG9uZW50cy9saXN0SXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNob3cgfSBmcm9tIFwic3JjL19tb2RlbHMvc2hvd3MubW9kZWxcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPFNob3c+KFxuICAgICAgICBcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2luZ2xlc2VhcmNoL3Nob3dzP3E9cmljay0mLW1vcnR5JmVtYmVkPWVwaXNvZGVzXCJcbiAgICApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0sIFtkYXRhLCBlcnJvcl0pO1xuXG4gICAgaWYgKCFkYXRhICYmICFlcnJvcikge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICAvL2Rpc3BsYXkgZXJyb3JcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5fZW1iZWRkZWQuZXBpc29kZXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicm93XCIgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLnVsXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5fZW1iZWRkZWQuZXBpc29kZXMubWFwKCh4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGVwaXNvZGU9e3h9IGtleT17eC5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Tm8gRXBpc29kZXMgZm91bmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==