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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var src_components_listItem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/listItem.component */ "./src/components/listItem.component.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_contexts_show_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_contexts/show.context */ "./src/_contexts/show.context.tsx");
/* harmony import */ var src_helpers_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_helpers/types */ "./src/_helpers/types.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\pages\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









var Page = function Page() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("https://api.tvmaze.com/singlesearch/rick-and-morty?q=24&embed=episodes"),
      data = _useSWR.data,
      error = _useSWR.error;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      ShowState = _useContext.ShowState,
      dispatchShow = _useContext.dispatchShow;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data) {
      dispatchShow({
        type: src_helpers_types__WEBPACK_IMPORTED_MODULE_7__["UPDATE"],
        payload: data
      });
    }

    if (error) console.log(error, data);
  }, [data, error]);

  if (!data && !error) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }
    }, "Loading...");
  }

  if (error) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }
    }, "An Error Occured");
  }

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12",
    sx: {
      variant: "containers.card",
      bg: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    sx: {
      maxHeight: "250px",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("img", {
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
      lineNumber: 48,
      columnNumber: 29
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-10",
    sx: {
      display: "grid",
      placeItems: "center start"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h1", {
    sx: {
      display: "grid",
      placeItems: "center start",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }, data.name)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", {
    sx: {
      fontSize: "18px",
      display: "grid",
      placeItems: "center",
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "#f50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, "Rating: ", data.rating.average))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_5___default()(data.summary))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
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
      lineNumber: 99,
      columnNumber: 37
    }
  }, data.officialSite)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "magenta",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 45
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 49
    }
  }, "Network: ", data.network.name))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "green",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 45
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 49
    }
  }, "Status: ", data.status))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "cyan",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 45
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 49
    }
  }, "Genre: ", data.genres[0])))))))))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, data._embedded.episodes.length ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("ul", {
    className: "row",
    sx: {
      variant: "containers.ul"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, data._embedded.episodes.map(function (x) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(src_components_listItem_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      episode: x,
      key: x.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 29
      }
    });
  })) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, "No Episodes found")));
};

_s(Page, "8GFDQsLPmAqlCXF8vlmdu9X8Pto=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQYWdlIiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwidXNlQ29udGV4dCIsIlNob3dDb250ZXh0IiwiU2hvd1N0YXRlIiwiZGlzcGF0Y2hTaG93IiwidXNlRWZmZWN0IiwidHlwZSIsIlVQREFURSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwidmFyaWFudCIsImJnIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJhbGlnblNlbGYiLCJpbWFnZSIsIm9yaWdpbmFsIiwicGxhY2VJdGVtcyIsIm1hcmdpbkJsb2NrRW5kIiwibmFtZSIsImZvbnRTaXplIiwicmF0aW5nIiwiYXZlcmFnZSIsIlJlYWN0SHRtbFBhcnNlciIsInN1bW1hcnkiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIiwib2ZmaWNpYWxTaXRlIiwicGFkZGluZ1kiLCJuZXR3b3JrIiwic3RhdHVzIiwiZ2VucmVzIiwiX2VtYmVkZGVkIiwiZXBpc29kZXMiLCJsZW5ndGgiLCJtYXAiLCJ4IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGdCQUNTQyxtREFBTSxDQUMxQix3RUFEMEIsQ0FEZjtBQUFBLE1BQ1BDLElBRE8sV0FDUEEsSUFETztBQUFBLE1BQ0RDLEtBREMsV0FDREEsS0FEQzs7QUFBQSxvQkFJcUJDLHdEQUFVLENBQUNDLGlFQUFELENBSi9CO0FBQUEsTUFJUEMsU0FKTyxlQUlQQSxTQUpPO0FBQUEsTUFJSUMsWUFKSixlQUlJQSxZQUpKOztBQU1mQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJTixJQUFKLEVBQVU7QUFDTkss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c0MsU0FBTCxDQUFlQyxRQUFmLENBQXdCQyxNQUF4QixHQUNHO0FBQUksYUFBUyxFQUFDLEtBQWQ7QUFBb0IsTUFBRSxFQUFFO0FBQUU1QixhQUFPLEVBQUU7QUFBWCxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0taLElBQUksQ0FBQ3NDLFNBQUwsQ0FBZUMsUUFBZixDQUF3QkUsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRDtBQUFBLFdBQ3pCLHFEQUFDLHlFQUFEO0FBQVUsYUFBTyxFQUFFQSxDQUFuQjtBQUFzQixTQUFHLEVBQUVBLENBQUMsQ0FBQ0MsRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR5QjtBQUFBLEdBQTVCLENBREwsQ0FESCxHQU9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUlIsQ0E5SUosQ0FESjtBQTRKSCxDQXBMRDs7R0FBTTdDLEk7VUFDc0JDLDJDOzs7S0FEdEJELEk7QUFzTFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkNzc0YmIyYTI4N2RhNGYzZTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFRhZyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwic3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaG93IH0gZnJvbSBcInNyYy9fbW9kZWxzL3Nob3dzLm1vZGVsXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcbmltcG9ydCBTaG93Q29udGV4dCBmcm9tIFwic3JjL19jb250ZXh0cy9zaG93LmNvbnRleHRcIjtcbmltcG9ydCB7IFVQREFURSB9IGZyb20gXCJzcmMvX2hlbHBlcnMvdHlwZXNcIjtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1I8U2hvdz4oXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaW5nbGVzZWFyY2gvcmljay1hbmQtbW9ydHk/cT0yNCZlbWJlZD1lcGlzb2Rlc1wiXG4gICAgKTtcbiAgICBjb25zdCB7IFNob3dTdGF0ZSwgZGlzcGF0Y2hTaG93IH0gPSB1c2VDb250ZXh0KFNob3dDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBkaXNwYXRjaFNob3coe1xuICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSBjb25zb2xlLmxvZyhlcnJvciwgZGF0YSk7XG4gICAgfSwgW2RhdGEsIGVycm9yXSk7XG5cbiAgICBpZiAoIWRhdGEgJiYgIWVycm9yKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkFuIEVycm9yIE9jY3VyZWQ8L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHZhcmlhbnQ6IFwiY29udGFpbmVycy5jYXJkXCIsIGJnOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1heEhlaWdodDogXCIyNTBweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlICYmIGRhdGEuaW1hZ2Uub3JpZ2luYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyIHN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXIgc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJhZGdlIGNvdW50PXtkYXRhLnJhdGluZy5hdmVyYWdlfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwiI2Y1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSYXRpbmc6IHtkYXRhLnJhdGluZy5hdmVyYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3g9e3sgZm9udFNpemU6IFwiMTZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSZWFjdEh0bWxQYXJzZXIoZGF0YS5zdW1tYXJ5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEub2ZmaWNpYWxTaXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibWFnZW50YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdZOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV0d29yazoge2RhdGEubmV0d29yay5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nWTogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1czoge2RhdGEuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiY3lhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdZOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VucmU6IHtkYXRhLmdlbnJlc1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuX2VtYmVkZGVkLmVwaXNvZGVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJvd1wiIHN4PXt7IHZhcmlhbnQ6IFwiY29udGFpbmVycy51bFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuX2VtYmVkZGVkLmVwaXNvZGVzLm1hcCgoeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBlcGlzb2RlPXt4fSBrZXk9e3guaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5vIEVwaXNvZGVzIGZvdW5kPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=