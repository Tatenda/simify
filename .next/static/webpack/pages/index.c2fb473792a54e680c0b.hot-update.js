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
/* harmony import */ var _theme_ui_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @theme-ui/color */ "./node_modules/@theme-ui/color/dist/index.esm.js");
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
      return router.push("/episode/".concat(episode.id));
    },
    sx: {
      "&:hover": {
        bg: Object(_theme_ui_color__WEBPACK_IMPORTED_MODULE_5__["darken"])("whitesmoke", 0.1)
      },
      cursor: "pointer"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: {
      variant: "containers.card",
      bg: "whitesmoke",
      width: "auto",
      maxWidth: "100%"
    },
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
        lineNumber: 38,
        columnNumber: 25
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 47,
      columnNumber: 21
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Season ", episode.season)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    className: "mt-2",
    sx: {
      fontWeight: "bold",
      fontSize: "18px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, episode.name)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uY29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsImVwaXNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwiaWQiLCJiZyIsImRhcmtlbiIsImN1cnNvciIsInZhcmlhbnQiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduU2VsZiIsImltYWdlIiwib3JpZ2luYWwiLCJzZWFzb24iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDL0MsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFNBQ0k7QUFDSSxhQUFTLEVBQUMsT0FEZDtBQUVJLFdBQU8sRUFBRTtBQUFBLGFBQU1ELE1BQU0sQ0FBQ0UsSUFBUCxvQkFBd0JILE9BQU8sQ0FBQ0ksRUFBaEMsRUFBTjtBQUFBLEtBRmI7QUFHSSxNQUFFLEVBQUU7QUFDQSxpQkFBVztBQUFFQyxVQUFFLEVBQUVDLDhEQUFNLENBQUMsWUFBRCxFQUFlLEdBQWY7QUFBWixPQURYO0FBRUFDLFlBQU0sRUFBRTtBQUZSLEtBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQ0ksTUFBRSxFQUFFO0FBQ0FDLGFBQU8sRUFBRSxpQkFEVDtBQUVBSCxRQUFFLEVBQUUsWUFGSjtBQUdBSSxXQUFLLEVBQUUsTUFIUDtBQUlBQyxjQUFRLEVBQUU7QUFKVixLQURSO0FBT0ksYUFBUyxFQUFDLFFBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNJLHFEQUFDLHFEQUFEO0FBQ0ksU0FBSyxFQUFDLE1BRFY7QUFFSSxVQUFNLEVBQUMsS0FGWDtBQUdJLFVBQU0sRUFBQyxLQUhYO0FBSUksZUFBVyxFQUNQLHFEQUFDLDZDQUFELENBQVUsS0FBVjtBQUNJLFFBQUUsRUFBRTtBQUNBRCxhQUFLLEVBQUUsTUFEUDtBQUVBRSxjQUFNLEVBQUUsS0FGUjtBQUdBQyxpQkFBUyxFQUFFO0FBSFgsT0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWNJO0FBQ0ksYUFBUyxFQUFDLFdBRGQ7QUFFSSxNQUFFLEVBQUU7QUFDQUQsWUFBTSxFQUFFLE9BRFI7QUFFQUYsV0FBSyxFQUFFLE1BRlA7QUFHQUksYUFBTyxFQUFFLE1BSFQ7QUFJQUMsZUFBUyxFQUFFO0FBSlgsS0FGUjtBQVFJLE9BQUcsRUFBRWQsT0FBTyxDQUFDZSxLQUFSLENBQWNDLFFBUnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixDQVRKLENBUkosRUEyQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBV2hCLE9BQU8sQ0FBQ2lCLE1BQW5CLENBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREosRUFPSTtBQUNJLGFBQVMsRUFBQyxNQURkO0FBRUksTUFBRSxFQUFFO0FBQ0FDLGdCQUFVLEVBQUUsTUFEWjtBQUVBQyxjQUFRLEVBQUU7QUFGVixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPS25CLE9BQU8sQ0FBQ29CLElBUGIsQ0FQSixDQTNDSixDQURKO0FBK0RILENBakVEOztHQUFNckIsUTtVQUNhRyxxRDs7O0tBRGJILFE7QUFtRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMyZmI0NzM3OTJhNTRlNjgwYzBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IFNob3dFcGlzb2RlIH0gZnJvbSBcInNyYy9fbW9kZWxzL3Nob3dzLm1vZGVsXCI7XHJcbmltcG9ydCBMYXp5TG9hZCBmcm9tIFwicmVhY3QtbGF6eWxvYWRcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSBcIkB0aGVtZS11aS9jb2xvclwiO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wIHtcclxuICAgIGVwaXNvZGU6IFNob3dFcGlzb2RlO1xyXG59XHJcblxyXG5jb25zdCBMaXN0SXRlbTogUmVhY3QuRkM8SVByb3A+ID0gKHsgZXBpc29kZSB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0zXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9lcGlzb2RlLyR7ZXBpc29kZS5pZH1gKX1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7IGJnOiBkYXJrZW4oXCJ3aGl0ZXNtb2tlXCIsIDAuMSkgfSxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiY29udGFpbmVycy5jYXJkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmc6IFwid2hpdGVzbW9rZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExhenlMb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24uSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUuaW1hZ2Uub3JpZ2luYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlYXNvbiB7ZXBpc29kZS5zZWFzb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2VwaXNvZGUubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==