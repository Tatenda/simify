webpackHotUpdate_N_E("pages/episode/[id]",{

/***/ "./src/pages/episode/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/episode/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_contexts_show_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_contexts/show.context */ "./src/_contexts/show.context.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\pages\\episode\\[id].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







var EpisodeComponent = function EpisodeComponent() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      ShowState = _useContext.ShowState;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (ShowState) {
      setData(ShowState._embedded.episodes.find(function (x) {
        return x.id === id;
      }));
    }
  }, [ShowState]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("data", data);
  }, [data]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12",
    sx: {
      variant: "containers.card",
      bg: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    sx: {
      maxHeight: "250px",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
    className: "img-fluid",
    sx: {
      height: "auto",
      width: "100%",
      display: "grid",
      alignSelf: "center"
    },
    src: data.image && data.image.original,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-10",
    sx: {
      display: "grid",
      placeItems: "center start"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    sx: {
      display: "grid",
      placeItems: "center start",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, data.name)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    sx: {
      fontSize: "18px",
      display: "grid",
      placeItems: "center",
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "#f50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  }, "Rating: ", data))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 37
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(data.summary))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      color: "blue",
      textDecoration: "underline",
      fontSize: "16px",
      "&:hover": {
        cursor: "pointer"
      },
      marginBlockEnd: "5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, data)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "magenta",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 45
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 49
    }
  }, "Network: ", data))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "green",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 45
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 49
    }
  }, "Status: ", data))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "cyan",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 45
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 49
    }
  }, "Genre: ", data))))))))));
};

_s(EpisodeComponent, "+Lt0BoyfJFIgMIwxRYujAMudRis=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = EpisodeComponent;
/* harmony default export */ __webpack_exports__["default"] = (EpisodeComponent);

var _c;

$RefreshReg$(_c, "EpisodeComponent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGUvLnRzeCJdLCJuYW1lcyI6WyJFcGlzb2RlQ29tcG9uZW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VDb250ZXh0IiwiU2hvd0NvbnRleHQiLCJTaG93U3RhdGUiLCJ1c2VFZmZlY3QiLCJfZW1iZWRkZWQiLCJlcGlzb2RlcyIsImZpbmQiLCJ4IiwiY29uc29sZSIsImxvZyIsInZhcmlhbnQiLCJiZyIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25TZWxmIiwiaW1hZ2UiLCJvcmlnaW5hbCIsInBsYWNlSXRlbXMiLCJtYXJnaW5CbG9ja0VuZCIsIm5hbWUiLCJmb250U2l6ZSIsIlJlYWN0SHRtbFBhcnNlciIsInN1bW1hcnkiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIiwicGFkZGluZ1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUMzQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDJCLE1BRW5CQyxFQUZtQixHQUVaRixNQUFNLENBQUNHLEtBRkssQ0FFbkJELEVBRm1COztBQUFBLGtCQUdIRSxzREFBUSxFQUhMO0FBQUEsTUFHcEJDLElBSG9CO0FBQUEsTUFHZEMsT0FIYzs7QUFBQSxvQkFJTEMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FKTDtBQUFBLE1BSW5CQyxTQUptQixlQUluQkEsU0FKbUI7O0FBTTNCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRCxTQUFKLEVBQWU7QUFDWEgsYUFBTyxDQUNIRyxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLFFB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QUcsY0FBUSxFQUFFLE1BRFY7QUFFQUYsb0JBQWMsRUFBRTtBQUZoQixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTWF2QixJQU5iLENBUkosQ0FESixDQXBCSixFQXVDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxxREFBQyx3Q0FBRDtBQUNJLFNBQUssRUFBQyxNQURWO0FBRUksTUFBRSxFQUFFO0FBQ0ErQixjQUFRLEVBQUUsS0FEVjtBQUVBYixhQUFPLEVBQUUsTUFGVDtBQUdBSSxnQkFBVSxFQUFFO0FBSFosS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFDSSxNQUFFLEVBQUU7QUFDQUcsY0FBUSxFQUFFLE1BRFY7QUFFQUYsb0JBQWMsRUFBRTtBQUZoQixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTVl2QixJQU5aLENBUkosQ0FESixDQXZDSixDQURKLENBakRKLENBREosQ0FoQkosQ0FKSixDQUZSLENBREo7QUE2SUgsQ0FqS0Q7O0dBQU1OLGdCO1VBQ2FFLHFEOzs7S0FEYkYsZ0I7QUFtS1NBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VwaXNvZGUvW2lkXS4zYzIwZDc1YzljZjYzZDA3OWIzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTaG93RXBpc29kZSB9IGZyb20gXCJzcmMvX21vZGVscy9zaG93cy5tb2RlbFwiO1xyXG5pbXBvcnQgU2hvd0NvbnRleHQgZnJvbSBcInNyYy9fY29udGV4dHMvc2hvdy5jb250ZXh0XCI7XHJcblxyXG5jb25zdCBFcGlzb2RlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxTaG93RXBpc29kZT4oKTtcclxuICAgIGNvbnN0IHsgU2hvd1N0YXRlIH0gPSB1c2VDb250ZXh0KFNob3dDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChTaG93U3RhdGUpIHtcclxuICAgICAgICAgICAgc2V0RGF0YShcclxuICAgICAgICAgICAgICAgIFNob3dTdGF0ZS5fZW1iZWRkZWQuZXBpc29kZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAoeCkgPT4geC5pZCA9PT0gKCgoaWQgYXMgc3RyaW5nKSBhcyB1bmtub3duKSBhcyBudW1iZXIpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1Nob3dTdGF0ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHZhcmlhbnQ6IFwiY29udGFpbmVycy5jYXJkXCIsIGJnOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtYXhIZWlnaHQ6IFwiMjUwcHhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlICYmIGRhdGEuaW1hZ2Uub3JpZ2luYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyIHN0YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXIgc3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5CbG9ja0VuZDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QmFkZ2UgY291bnQ9e2RhdGEucmF0aW5nLmF2ZXJhZ2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cIiNmNTBcIj5SYXRpbmc6IHtkYXRhfTwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzeD17eyBmb250U2l6ZTogXCIxNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UmVhY3RIdG1sUGFyc2VyKGRhdGEuc3VtbWFyeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7IGN1cnNvcjogXCJwb2ludGVyXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5CbG9ja0VuZDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJtYWdlbnRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdZOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldHdvcms6IHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiB7ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImN5YW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VucmU6IHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9