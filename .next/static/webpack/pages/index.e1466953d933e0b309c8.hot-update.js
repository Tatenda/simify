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
var _this = undefined,
    _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\pages\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var Page = function Page() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("https://api.tvmaze.com/singlesearch/shows?q=24&embed=episodes"),
      data = _useSWR.data,
      error = _useSWR.error;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_6__["ShowReducer"], src_contexts_show_context__WEBPACK_IMPORTED_MODULE_6__["initialShowState"]),
      ShowState = _useReducer[0],
      dispatchShow = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data) {
      console.log(data);
    }

    if (error) console.log(error);
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

  if (error) {//display error
  }

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_6__["ShowProvider"], {
    value: {
      ShowState: ShowState,
      dispatchShow: dispatchShow
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
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
      lineNumber: 40,
      columnNumber: 21
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
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
      lineNumber: 45,
      columnNumber: 29
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
      lineNumber: 49,
      columnNumber: 33
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
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
      lineNumber: 62,
      columnNumber: 37
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
      lineNumber: 69,
      columnNumber: 41
    }
  }, data.name)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
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
      lineNumber: 80,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "#f50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 45
    }
  }, "Rating: ", data.rating.average))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 41
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_5___default()(data.summary))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
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
      lineNumber: 100,
      columnNumber: 41
    }
  }, data.officialSite)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 45
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
      lineNumber: 117,
      columnNumber: 49
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }, "Network:", " ", data.network.name))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
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
      lineNumber: 137,
      columnNumber: 49
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 53
    }
  }, "Status: ", data.status))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 45
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
      lineNumber: 156,
      columnNumber: 49
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 53
    }
  }, "Genre: ", data.genres[0])))))))))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, data._embedded.episodes.length ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("ul", {
    className: "row",
    sx: {
      variant: "containers.ul"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 25
    }
  }, data._embedded.episodes.map(function (x) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(src_components_listItem_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      episode: x,
      key: x.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 33
      }
    });
  })) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, "No Episodes found"))));
};

_s(Page, "BoarF2OMUK1UHCPh5SAaBRAdZco=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQYWdlIiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwidXNlUmVkdWNlciIsIlNob3dSZWR1Y2VyIiwiaW5pdGlhbFNob3dTdGF0ZSIsIlNob3dTdGF0ZSIsImRpc3BhdGNoU2hvdyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50IiwiYmciLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduU2VsZiIsImltYWdlIiwib3JpZ2luYWwiLCJwbGFjZUl0ZW1zIiwibWFyZ2luQmxvY2tFbmQiLCJuYW1lIiwiZm9udFNpemUiLCJyYXRpbmciLCJhdmVyYWdlIiwiUmVhY3RIdG1sUGFyc2VyIiwic3VtbWFyeSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJjdXJzb3IiLCJvZmZpY2lhbFNpdGUiLCJwYWRkaW5nWSIsIm5ldHdvcmsiLCJzdGF0dXMiLCJnZW5yZXMiLCJfZW1iZWRkZWQiLCJlcGlzb2RlcyIsImxlbmd0aCIsIm1hcCIsIngiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsZ0JBQ1NDLG1EQUFNLENBQzFCLCtEQUQwQixDQURmO0FBQUEsTUFDUEMsSUFETyxXQUNQQSxJQURPO0FBQUEsTUFDREMsS0FEQyxXQUNEQSxLQURDOztBQUFBLG9CQUlpQkMsd0RBQVUsQ0FBQ0MscUVBQUQsRUFBY0MsMEVBQWQsQ0FKM0I7QUFBQSxNQUlWQyxTQUpVO0FBQUEsTUFJQ0MsWUFKRDs7QUFNZkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVAsSUFBSixFQUFVO0FBQ05RLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaO0FBQ0g7O0FBQ0QsUUFBSUMsS0FBSixFQUFXTyxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNkLEdBTFEsRUFLTixDQUFDRCxJQUFELEVBQU9DLEtBQVAsQ0FMTSxDQUFUOztBQU9BLE1BQUksQ0FBQ0QsSUFBRCxJQUFTLENBQUNDLEtBQWQsRUFBcUI7QUFDakIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0g7O0FBRUQsTUFBSUEsS0FBSixFQUFXLENBQ1A7QUFDSDs7QUFFRCxTQUNJLHFEQUFDLHNFQUFEO0FBQWMsU0FBSyxFQUFFO0FBQUVJLGVBQVMsRUFBVEEsU0FBRjtBQUFhQyxrQkFBWSxFQUFaQTtBQUFiLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxRQURkO0FBRUksTUFBRSxFQUFFO0FBQUVJLGFBQU8sRUFBRSxpQkFBWDtBQUE4QkMsUUFBRSxFQUFFO0FBQWxDLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLE9BRGQ7QUFFSSxNQUFFLEVBQUU7QUFBRUMsZUFBUyxFQUFFLE9BQWI7QUFBc0JDLGNBQVEsRUFBRTtBQUFoQyxLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUNJLGFBQVMsRUFBQyxXQURkO0FBRUksTUFBRSxFQUFFO0FBQ0FDLFlBQU0sRUFBRSxNQURSO0FBRUFDLFdBQUssRUFBRSxNQUZQO0FBR0FDLGFBQU8sRUFBRSxNQUhUO0FBSUFDLGVBQVMsRUFBRTtBQUpYLEtBRlI7QUFRSSxPQUFHLEVBQUVqQixJQUFJLENBQUNrQixLQUFMLElBQWNsQixJQUFJLENBQUNrQixLQUFMLENBQVdDLFFBUmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBZ0JJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLFFBRGQ7QUFFSSxNQUFFLEVBQUU7QUFDQUgsYUFBTyxFQUFFLE1BRFQ7QUFFQUksZ0JBQVUsRUFBRTtBQUZaLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JO0FBQ0ksTUFBRSxFQUFFO0FBQ0FKLGFBQU8sRUFBRSxNQURUO0FBRUFJLGdCQUFVLEVBQUUsY0FGWjtBQUdBQyxvQkFBYyxFQUFFO0FBSGhCLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9LckIsSUFBSSxDQUFDc0IsSUFQVixDQVBKLENBREosRUFrQkk7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUU7QUFDQUMsY0FBUSxFQUFFLE1BRFY7QUFFQVAsYUFBTyxFQUFFLE1BRlQ7QUFHQUksZ0JBQVUsRUFBRSxRQUhaO0FBSUFOLFlBQU0sRUFBRTtBQUpSLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNJLHFEQUFDLHdDQUFEO0FBQUssU0FBSyxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDYWQsSUFBSSxDQUFDd0IsTUFBTCxDQUFZQyxPQUR6QixDQVRKLENBREosQ0FsQkosRUFpQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxNQUFFLEVBQUU7QUFBRUYsY0FBUSxFQUFFO0FBQVosS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tHLHdEQUFlLENBQUMxQixJQUFJLENBQUMyQixPQUFOLENBRHBCLENBREosQ0FqQ0osRUFzQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUU7QUFDQUMsV0FBSyxFQUFFLE1BRFA7QUFFQUMsb0JBQWMsRUFBRSxXQUZoQjtBQUdBTixjQUFRLEVBQUUsTUFIVjtBQUlBLGlCQUFXO0FBQ1BPLGNBQU0sRUFBRTtBQURELE9BSlg7QUFPQVQsb0JBQWMsRUFBRTtBQVBoQixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXS3JCLElBQUksQ0FBQytCLFlBWFYsQ0FESixDQXRDSixFQXFESTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxxREFBQyx3Q0FBRDtBQUNJLFNBQUssRUFBQyxTQURWO0FBRUksTUFBRSxFQUFFO0FBQ0FDLGNBQVEsRUFBRSxLQURWO0FBRUFoQixhQUFPLEVBQUUsTUFGVDtBQUdBSSxnQkFBVSxFQUFFO0FBSFosS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFDSSxNQUFFLEVBQUU7QUFDQUcsY0FBUSxFQUFFLE1BRFY7QUFFQUYsb0JBQWMsRUFBRTtBQUZoQixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTWEsR0FOYixFQU9LckIsSUFBSSxDQUFDaUMsT0FBTCxDQUFhWCxJQVBsQixDQVJKLENBREosQ0FESixFQXFCSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxxREFBQyx3Q0FBRDtBQUNJLFNBQUssRUFBQyxPQURWO0FBRUksTUFBRSxFQUFFO0FBQ0FVLGNBQVEsRUFBRSxLQURWO0FBRUFoQixhQUFPLEVBQUUsTUFGVDtBQUdBSSxnQkFBVSxFQUFFO0FBSFosS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFDSSxNQUFFLEVBQUU7QUFDQUcsY0FBUSxFQUFFLE1BRFY7QUFFQUYsb0JBQWMsRUFBRTtBQUZoQixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTWFyQixJQUFJLENBQUNrQyxNQU5sQixDQVJKLENBREosQ0FyQkosRUF3Q0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsd0NBQUQ7QUFDSSxTQUFLLEVBQUMsTUFEVjtBQUVJLE1BQUUsRUFBRTtBQUNBRixjQUFRLEVBQUUsS0FEVjtBQUVBaEIsYUFBTyxFQUFFLE1BRlQ7QUFHQUksZ0JBQVUsRUFBRTtBQUhaLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQ0ksTUFBRSxFQUFFO0FBQ0FHLGNBQVEsRUFBRSxNQURWO0FBRUFGLG9CQUFjLEVBQUU7QUFGaEIsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU1ZckIsSUFBSSxDQUFDbUMsTUFBTCxDQUFZLENBQVosQ0FOWixDQVJKLENBREosQ0F4Q0osQ0FESixDQXJESixDQURKLENBaEJKLENBSkosQ0FESixDQURKLEVBK0lJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLbkMsSUFBSSxDQUFDb0MsU0FBTCxDQUFlQyxRQUFmLENBQXdCQyxNQUF4QixHQUNHO0FBQUksYUFBUyxFQUFDLEtBQWQ7QUFBb0IsTUFBRSxFQUFFO0FBQUU1QixhQUFPLEVBQUU7QUFBWCxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tWLElBQUksQ0FBQ29DLFNBQUwsQ0FBZUMsUUFBZixDQUF3QkUsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRDtBQUFBLFdBQ3pCLHFEQUFDLHlFQUFEO0FBQVUsYUFBTyxFQUFFQSxDQUFuQjtBQUFzQixTQUFHLEVBQUVBLENBQUMsQ0FBQ0MsRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR5QjtBQUFBLEdBQTVCLENBREwsQ0FESCxHQU9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUlIsQ0EvSUosQ0FESixDQURKO0FBK0pILENBcExEOztHQUFNM0MsSTtVQUNzQkMsMkM7OztLQUR0QkQsSTtBQXNMU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTE0NjY5NTNkOTMzZTBiMzA5YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgVGFnIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJzcmMvY29tcG9uZW50cy9saXN0SXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNob3cgfSBmcm9tIFwic3JjL19tb2RlbHMvc2hvd3MubW9kZWxcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gXCJyZWFjdC1odG1sLXBhcnNlclwiO1xuaW1wb3J0IHtcbiAgICBTaG93UHJvdmlkZXIsXG4gICAgU2hvd1JlZHVjZXIsXG4gICAgaW5pdGlhbFNob3dTdGF0ZSxcbn0gZnJvbSBcInNyYy9fY29udGV4dHMvc2hvdy5jb250ZXh0XCI7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPFNob3c+KFxuICAgICAgICBcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2luZ2xlc2VhcmNoL3Nob3dzP3E9MjQmZW1iZWQ9ZXBpc29kZXNcIlxuICAgICk7XG4gICAgbGV0IFtTaG93U3RhdGUsIGRpc3BhdGNoU2hvd10gPSB1c2VSZWR1Y2VyKFNob3dSZWR1Y2VyLCBpbml0aWFsU2hvd1N0YXRlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9LCBbZGF0YSwgZXJyb3JdKTtcblxuICAgIGlmICghZGF0YSAmJiAhZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgLy9kaXNwbGF5IGVycm9yXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNob3dQcm92aWRlciB2YWx1ZT17eyBTaG93U3RhdGUsIGRpc3BhdGNoU2hvdyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLmNhcmRcIiwgYmc6IFwid2hpdGVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtYXhIZWlnaHQ6IFwiMjUwcHhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2UgJiYgZGF0YS5pbWFnZS5vcmlnaW5hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXIgc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlciBzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJhZGdlIGNvdW50PXtkYXRhLnJhdGluZy5hdmVyYWdlfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cIiNmNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhdGluZzoge2RhdGEucmF0aW5nLmF2ZXJhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN4PXt7IGZvbnRTaXplOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1JlYWN0SHRtbFBhcnNlcihkYXRhLnN1bW1hcnkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5vZmZpY2lhbFNpdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibWFnZW50YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldHdvcms6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uZXR3b3JrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1czoge2RhdGEuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiY3lhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbnJlOiB7ZGF0YS5nZW5yZXNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLl9lbWJlZGRlZC5lcGlzb2Rlcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicm93XCIgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLnVsXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuX2VtYmVkZGVkLmVwaXNvZGVzLm1hcCgoeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gZXBpc29kZT17eH0ga2V5PXt4LmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Tm8gRXBpc29kZXMgZm91bmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Nob3dQcm92aWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=