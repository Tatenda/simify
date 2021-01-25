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
      minHeight: "200px",
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
        lineNumber: 39,
        columnNumber: 25
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 48,
      columnNumber: 21
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    className: "",
    sx: {
      fontWeight: "bold"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uY29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsImVwaXNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwiaWQiLCJiZyIsImRhcmtlbiIsImN1cnNvciIsInZhcmlhbnQiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduU2VsZiIsImltYWdlIiwib3JpZ2luYWwiLCJmb250V2VpZ2h0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQy9DLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxTQUNJO0FBQ0ksYUFBUyxFQUFDLE9BRGQ7QUFFSSxXQUFPLEVBQUU7QUFBQSxhQUFNRCxNQUFNLENBQUNFLElBQVAsb0JBQXdCSCxPQUFPLENBQUNJLEVBQWhDLEVBQU47QUFBQSxLQUZiO0FBR0ksTUFBRSxFQUFFO0FBQ0EsaUJBQVc7QUFBRUMsVUFBRSxFQUFFQyw4REFBTSxDQUFDLFlBQUQsRUFBZSxHQUFmO0FBQVosT0FEWDtBQUVBQyxZQUFNLEVBQUU7QUFGUixLQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSTtBQUNJLE1BQUUsRUFBRTtBQUNBQyxhQUFPLEVBQUUsaUJBRFQ7QUFFQUgsUUFBRSxFQUFFLFlBRko7QUFHQUksZUFBUyxFQUFFLE9BSFg7QUFJQUMsV0FBSyxFQUFFLE1BSlA7QUFLQUMsY0FBUSxFQUFFO0FBTFYsS0FEUjtBQVFJLGFBQVMsRUFBQyxRQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSSxxREFBQyxxREFBRDtBQUNJLFNBQUssRUFBQyxNQURWO0FBRUksVUFBTSxFQUFDLEtBRlg7QUFHSSxVQUFNLEVBQUMsS0FIWDtBQUlJLGVBQVcsRUFDUCxxREFBQyw2Q0FBRCxDQUFVLEtBQVY7QUFDSSxRQUFFLEVBQUU7QUFDQUQsYUFBSyxFQUFFLE1BRFA7QUFFQUUsY0FBTSxFQUFFLEtBRlI7QUFHQUgsaUJBQVMsRUFBRTtBQUhYLE9BRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjSTtBQUNJLGFBQVMsRUFBQyxXQURkO0FBRUksTUFBRSxFQUFFO0FBQ0FHLFlBQU0sRUFBRSxPQURSO0FBRUFGLFdBQUssRUFBRSxNQUZQO0FBR0FHLGFBQU8sRUFBRSxNQUhUO0FBSUFDLGVBQVMsRUFBRTtBQUpYLEtBRlI7QUFRSSxPQUFHLEVBQUVkLE9BQU8sQ0FBQ2UsS0FBUixDQUFjQyxRQVJ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosQ0FWSixDQVJKLEVBNENJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLEVBRGQ7QUFFSSxNQUFFLEVBQUU7QUFDQUMsZ0JBQVUsRUFBRTtBQURaLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LakIsT0FBTyxDQUFDa0IsSUFOYixDQURKLENBNUNKLENBREo7QUF5REgsQ0EzREQ7O0dBQU1uQixRO1VBQ2FHLHFEOzs7S0FEYkgsUTtBQTZEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Q1ZWE1ZTk1ZTE4ZTY5ZDE3OGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgU2hvd0VwaXNvZGUgfSBmcm9tIFwic3JjL19tb2RlbHMvc2hvd3MubW9kZWxcIjtcclxuaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tIFwiQHRoZW1lLXVpL2NvbG9yXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3Age1xyXG4gICAgZXBpc29kZTogU2hvd0VwaXNvZGU7XHJcbn1cclxuXHJcbmNvbnN0IExpc3RJdGVtOiBSZWFjdC5GQzxJUHJvcD4gPSAoeyBlcGlzb2RlIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTNcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2VwaXNvZGUvJHtlcGlzb2RlLmlkfWApfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHsgYmc6IGRhcmtlbihcIndoaXRlc21va2VcIiwgMC4xKSB9LFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJjb250YWluZXJzLmNhcmRcIixcclxuICAgICAgICAgICAgICAgICAgICBiZzogXCJ3aGl0ZXNtb2tlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGF6eUxvYWRcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbi5JbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogXCIxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS5pbWFnZS5vcmlnaW5hbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7ZXBpc29kZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9