webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/listItem.component.tsx":
/*!***********************************************!*\
  !*** ./src/components/listItem.component.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\components\\listItem.component.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var ListItem = function ListItem(_ref) {
  var episode = _ref.episode;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: {
      variant: "containers.card",
      bg: "whitesmoke",
      minHeight: "200px",
      width: "auto",
      maxWidth: "100%"
    },
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
    width: "100%",
    height: "100",
    offset: "100",
    placeholder: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"].Image, {
      sx: {
        width: "100%",
        height: "150",
        minHeight: "100"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
    className: "img-fluid",
    sx: {
      height: "150px",
      width: "100%",
      display: "grid",
      alignSelf: "center"
    },
    src: episode.image.original,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  })), episode.name));
};

_c = ListItem;
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

var _c;

$RefreshReg$(_c, "ListItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uY29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsImVwaXNvZGUiLCJ2YXJpYW50IiwiYmciLCJtaW5IZWlnaHQiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduU2VsZiIsImltYWdlIiwib3JpZ2luYWwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1BLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQy9DLFNBQ0k7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUU7QUFDQUMsYUFBTyxFQUFFLGlCQURUO0FBRUFDLFFBQUUsRUFBRSxZQUZKO0FBR0FDLGVBQVMsRUFBRSxPQUhYO0FBSUFDLFdBQUssRUFBRSxNQUpQO0FBS0FDLGNBQVEsRUFBRTtBQUxWLEtBRFI7QUFRSSxhQUFTLEVBQUMsUUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUkscURBQUMscURBQUQ7QUFDSSxTQUFLLEVBQUMsTUFEVjtBQUVJLFVBQU0sRUFBQyxLQUZYO0FBR0ksVUFBTSxFQUFDLEtBSFg7QUFJSSxlQUFXLEVBQ1AscURBQUMsNkNBQUQsQ0FBVSxLQUFWO0FBQ0ksUUFBRSxFQUFFO0FBQ0FELGFBQUssRUFBRSxNQURQO0FBRUFFLGNBQU0sRUFBRSxLQUZSO0FBR0FILGlCQUFTLEVBQUU7QUFIWCxPQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBY0k7QUFDSSxhQUFTLEVBQUMsV0FEZDtBQUVJLE1BQUUsRUFBRTtBQUNBRyxZQUFNLEVBQUUsT0FEUjtBQUVBRixXQUFLLEVBQUUsTUFGUDtBQUdBRyxhQUFPLEVBQUUsTUFIVDtBQUlBQyxlQUFTLEVBQUU7QUFKWCxLQUZSO0FBUUksT0FBRyxFQUFFUixPQUFPLENBQUNTLEtBQVIsQ0FBY0MsUUFSdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRKLENBVkosRUFtQ0tWLE9BQU8sQ0FBQ1csSUFuQ2IsQ0FESixDQURKO0FBeUNILENBMUNEOztLQUFNWixRO0FBNENTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMWQ4NTE1ZjJlMTU0NjFjMzk3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBTaG93RXBpc29kZSB9IGZyb20gXCJzcmMvX21vZGVscy9zaG93cy5tb2RlbFwiO1xyXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSBcInJlYWN0LWxhenlsb2FkXCI7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmludGVyZmFjZSBJUHJvcCB7XHJcbiAgICBlcGlzb2RlOiBTaG93RXBpc29kZTtcclxufVxyXG5cclxuY29uc3QgTGlzdEl0ZW06IFJlYWN0LkZDPElQcm9wPiA9ICh7IGVwaXNvZGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImNvbnRhaW5lcnMuY2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJnOiBcIndoaXRlc21va2VcIixcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMYXp5TG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uLkltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLmltYWdlLm9yaWdpbmFsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxyXG4gICAgICAgICAgICAgICAge2VwaXNvZGUubmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==