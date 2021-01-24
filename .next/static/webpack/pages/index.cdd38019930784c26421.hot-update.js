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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\components\\listItem.component.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





var ListItem = function ListItem(_ref) {
  _s();

  var episode = _ref.episode;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "col-3",
    onClick: function onClick() {
      return router.push("/".concat(episode.id));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 16,
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
        lineNumber: 31,
        columnNumber: 25
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
      lineNumber: 40,
      columnNumber: 21
    }
  })), episode.name));
};

_s(ListItem, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uY29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsImVwaXNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwiaWQiLCJ2YXJpYW50IiwiYmciLCJtaW5IZWlnaHQiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduU2VsZiIsImltYWdlIiwib3JpZ2luYWwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDL0MsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFNBQ0k7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFzQixXQUFPLEVBQUU7QUFBQSxhQUFNRCxNQUFNLENBQUNFLElBQVAsWUFBZ0JILE9BQU8sQ0FBQ0ksRUFBeEIsRUFBTjtBQUFBLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLE1BQUUsRUFBRTtBQUNBQyxhQUFPLEVBQUUsaUJBRFQ7QUFFQUMsUUFBRSxFQUFFLFlBRko7QUFHQUMsZUFBUyxFQUFFLE9BSFg7QUFJQUMsV0FBSyxFQUFFLE1BSlA7QUFLQUMsY0FBUSxFQUFFO0FBTFYsS0FEUjtBQVFJLGFBQVMsRUFBQyxRQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSSxxREFBQyxxREFBRDtBQUNJLFNBQUssRUFBQyxNQURWO0FBRUksVUFBTSxFQUFDLEtBRlg7QUFHSSxVQUFNLEVBQUMsS0FIWDtBQUlJLGVBQVcsRUFDUCxxREFBQyw2Q0FBRCxDQUFVLEtBQVY7QUFDSSxRQUFFLEVBQUU7QUFDQUQsYUFBSyxFQUFFLE1BRFA7QUFFQUUsY0FBTSxFQUFFLEtBRlI7QUFHQUgsaUJBQVMsRUFBRTtBQUhYLE9BRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjSTtBQUNJLGFBQVMsRUFBQyxXQURkO0FBRUksTUFBRSxFQUFFO0FBQ0FHLFlBQU0sRUFBRSxPQURSO0FBRUFGLFdBQUssRUFBRSxNQUZQO0FBR0FHLGFBQU8sRUFBRSxNQUhUO0FBSUFDLGVBQVMsRUFBRTtBQUpYLEtBRlI7QUFRSSxPQUFHLEVBQUVaLE9BQU8sQ0FBQ2EsS0FBUixDQUFjQyxRQVJ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosQ0FWSixFQW1DS2QsT0FBTyxDQUFDZSxJQW5DYixDQURKLENBREo7QUF5Q0gsQ0EzQ0Q7O0dBQU1oQixRO1VBQ2FHLHFEOzs7S0FEYkgsUTtBQTZDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2RkMzgwMTk5MzA3ODRjMjY0MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgU2hvd0VwaXNvZGUgfSBmcm9tIFwic3JjL19tb2RlbHMvc2hvd3MubW9kZWxcIjtcclxuaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wIHtcclxuICAgIGVwaXNvZGU6IFNob3dFcGlzb2RlO1xyXG59XHJcblxyXG5jb25zdCBMaXN0SXRlbTogUmVhY3QuRkM8SVByb3A+ID0gKHsgZXBpc29kZSB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbC0zXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8ke2VwaXNvZGUuaWR9YCl9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiY29udGFpbmVycy5jYXJkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmc6IFwid2hpdGVzbW9rZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExhenlMb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24uSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUuaW1hZ2Uub3JpZ2luYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgICB7ZXBpc29kZS5uYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9