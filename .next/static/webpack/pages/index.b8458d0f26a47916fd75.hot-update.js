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

    if (error) console.log(error);
  }, [data, error]);

  if (!data && !error) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }
    }, "Loading...");
  }

  if (error) {//display error
  }

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
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
      lineNumber: 52,
      columnNumber: 29
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
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
      lineNumber: 72,
      columnNumber: 37
    }
  }, data.name)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 83,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "#f50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, "Rating: ", data.rating.average))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    sx: {
      fontSize: "16px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_5___default()(data.summary))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 103,
      columnNumber: 37
    }
  }, data.officialSite)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 120,
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
      lineNumber: 128,
      columnNumber: 49
    }
  }, "Network: ", data.network.name))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
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
      lineNumber: 147,
      columnNumber: 49
    }
  }, "Status: ", data.status))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 158,
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
      lineNumber: 166,
      columnNumber: 49
    }
  }, "Genre: ", data.genres[0])))))))))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 185,
      columnNumber: 21
    }
  }, data._embedded.episodes.map(function (x) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(src_components_listItem_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      episode: x,
      key: x.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 29
      }
    });
  })) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQYWdlIiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwidXNlQ29udGV4dCIsIlNob3dDb250ZXh0IiwiU2hvd1N0YXRlIiwiZGlzcGF0Y2hTaG93IiwidXNlRWZmZWN0IiwidHlwZSIsIlVQREFURSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwidmFyaWFudCIsImJnIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJhbGlnblNlbGYiLCJpbWFnZSIsIm9yaWdpbmFsIiwicGxhY2VJdGVtcyIsIm1hcmdpbkJsb2NrRW5kIiwibmFtZSIsImZvbnRTaXplIiwicmF0aW5nIiwiYXZlcmFnZSIsIlJlYWN0SHRtbFBhcnNlciIsInN1bW1hcnkiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIiwib2ZmaWNpYWxTaXRlIiwicGFkZGluZ1kiLCJuZXR3b3JrIiwic3RhdHVzIiwiZ2VucmVzIiwiX2VtYmVkZGVkIiwiZXBpc29kZXMiLCJsZW5ndGgiLCJtYXAiLCJ4IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGdCQUNTQyxtREFBTSxDQUMxQix3RUFEMEIsQ0FEZjtBQUFBLE1BQ1BDLElBRE8sV0FDUEEsSUFETztBQUFBLE1BQ0RDLEtBREMsV0FDREEsS0FEQzs7QUFBQSxvQkFJcUJDLHdEQUFVLENBQUNDLGlFQUFELENBSi9CO0FBQUEsTUFJUEMsU0FKTyxlQUlQQSxTQUpPO0FBQUEsTUFJSUMsWUFKSixlQUlJQSxZQUpKOztBQU1mQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJTixJQUFKLEVBQVU7QUFDTkssa0JBQVksQ0FBQztBQUNURSxZQUFJLEVBQUVDLHdEQURHO0FBRVRDLGVBQU8sRUFBRVQ7QUFGQSxPQUFELENBQVo7QUFJSDs7QUFDRCxRQUFJQyxLQUFKLEVBQVdTLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaO0FBQ2QsR0FSUSxFQVFOLENBQUNELElBQUQsRUFBT0MsS0FBUCxDQVJNLENBQVQ7O0FBVUEsTUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0MsS0FBZCxFQUFxQjtBQUNqQixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDSDs7QUFFRCxNQUFJQSxLQUFKLEVBQVcsQ0FDUDtBQUNIOztBQUVELFNBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsUUFEZDtBQUVJLE1BQUUsRUFBRTtBQUFFVyxhQUFPLEVBQUUsaUJBQVg7QUFBOEJDLFFBQUUsRUFBRTtBQUFsQyxLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxPQURkO0FBRUksTUFBRSxFQUFFO0FBQUVDLGVBQVMsRUFBRSxPQUFiO0FBQXNCQyxjQUFRLEVBQUU7QUFBaEMsS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUk7QUFDSSxhQUFTLEVBQUMsV0FEZDtBQUVJLE1BQUUsRUFBRTtBQUNBQyxZQUFNLEVBQUUsTUFEUjtBQUVBQyxXQUFLLEVBQUUsTUFGUDtBQUdBQyxhQUFPLEVBQUUsTUFIVDtBQUlBQyxlQUFTLEVBQUU7QUFKWCxLQUZSO0FBUUksT0FBRyxFQUFFbkIsSUFBSSxDQUFDb0IsS0FBTCxJQUFjcEIsSUFBSSxDQUFDb0IsS0FBTCxDQUFXQyxRQVJsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQWdCSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxRQURkO0FBRUksTUFBRSxFQUFFO0FBQ0FILGFBQU8sRUFBRSxNQURUO0FBRUFJLGdCQUFVLEVBQUU7QUFGWixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSTtBQUNJLE1BQUUsRUFBRTtBQUNBSixhQUFPLEVBQUUsTUFEVDtBQUVBSSxnQkFBVSxFQUFFLGNBRlo7QUFHQUMsb0JBQWMsRUFBRTtBQUhoQixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPS3ZCLElBQUksQ0FBQ3dCLElBUFYsQ0FQSixDQURKLEVBa0JJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksTUFBRSxFQUFFO0FBQ0FDLGNBQVEsRUFBRSxNQURWO0FBRUFQLGFBQU8sRUFBRSxNQUZUO0FBR0FJLGdCQUFVLEVBQUUsUUFIWjtBQUlBTixZQUFNLEVBQUU7QUFKUixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTSSxxREFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ2FoQixJQUFJLENBQUMwQixNQUFMLENBQVlDLE9BRHpCLENBVEosQ0FESixDQWxCSixFQWlDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLE1BQUUsRUFBRTtBQUFFRixjQUFRLEVBQUU7QUFBWixLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0csd0RBQWUsQ0FBQzVCLElBQUksQ0FBQzZCLE9BQU4sQ0FEcEIsQ0FESixDQWpDSixFQXNDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLE1BQUUsRUFBRTtBQUNBQyxXQUFLLEVBQUUsTUFEUDtBQUVBQyxvQkFBYyxFQUFFLFdBRmhCO0FBR0FOLGNBQVEsRUFBRSxNQUhWO0FBSUEsaUJBQVc7QUFDUE8sY0FBTSxFQUFFO0FBREQsT0FKWDtBQU9BVCxvQkFBYyxFQUFFO0FBUGhCLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdLdkIsSUFBSSxDQUFDaUMsWUFYVixDQURKLENBdENKLEVBcURJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLHdDQUFEO0FBQ0ksU0FBSyxFQUFDLFNBRFY7QUFFSSxNQUFFLEVBQUU7QUFDQUMsY0FBUSxFQUFFLEtBRFY7QUFFQWhCLGFBQU8sRUFBRSxNQUZUO0FBR0FJLGdCQUFVLEVBQUU7QUFIWixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSTtBQUNJLE1BQUUsRUFBRTtBQUNBRyxjQUFRLEVBQUUsTUFEVjtBQUVBRixvQkFBYyxFQUFFO0FBRmhCLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFNY3ZCLElBQUksQ0FBQ21DLE9BQUwsQ0FBYVgsSUFOM0IsQ0FSSixDQURKLENBREosRUFvQkk7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsd0NBQUQ7QUFDSSxTQUFLLEVBQUMsT0FEVjtBQUVJLE1BQUUsRUFBRTtBQUNBVSxjQUFRLEVBQUUsS0FEVjtBQUVBaEIsYUFBTyxFQUFFLE1BRlQ7QUFHQUksZ0JBQVUsRUFBRTtBQUhaLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQ0ksTUFBRSxFQUFFO0FBQ0FHLGNBQVEsRUFBRSxNQURWO0FBRUFGLG9CQUFjLEVBQUU7QUFGaEIsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU1hdkIsSUFBSSxDQUFDb0MsTUFObEIsQ0FSSixDQURKLENBcEJKLEVBdUNJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLHdDQUFEO0FBQ0ksU0FBSyxFQUFDLE1BRFY7QUFFSSxNQUFFLEVBQUU7QUFDQUYsY0FBUSxFQUFFLEtBRFY7QUFFQWhCLGFBQU8sRUFBRSxNQUZUO0FBR0FJLGdCQUFVLEVBQUU7QUFIWixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSTtBQUNJLE1BQUUsRUFBRTtBQUNBRyxjQUFRLEVBQUUsTUFEVjtBQUVBRixvQkFBYyxFQUFFO0FBRmhCLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFNWXZCLElBQUksQ0FBQ3FDLE1BQUwsQ0FBWSxDQUFaLENBTlosQ0FSSixDQURKLENBdkNKLENBREosQ0FyREosQ0FESixDQWhCSixDQUpKLENBREosQ0FESixFQThJSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3JDLElBQUksQ0FBQ3NDLFNBQUwsQ0FBZUMsUUFBZixDQUF3QkMsTUFBeEIsR0FDRztBQUFJLGFBQVMsRUFBQyxLQUFkO0FBQW9CLE1BQUUsRUFBRTtBQUFFNUIsYUFBTyxFQUFFO0FBQVgsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLWixJQUFJLENBQUNzQyxTQUFMLENBQWVDLFFBQWYsQ0FBd0JFLEdBQXhCLENBQTRCLFVBQUNDLENBQUQ7QUFBQSxXQUN6QixxREFBQyx5RUFBRDtBQUFVLGFBQU8sRUFBRUEsQ0FBbkI7QUFBc0IsU0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEeUI7QUFBQSxHQUE1QixDQURMLENBREgsR0FPRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJSLENBOUlKLENBREo7QUE0SkgsQ0FwTEQ7O0dBQU03QyxJO1VBQ3NCQywyQzs7O0tBRHRCRCxJO0FBc0xTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODQ1OGQwZjI2YTQ3OTE2ZmQ3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBUYWcgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcInNyYy9jb21wb25lbnRzL2xpc3RJdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2hvdyB9IGZyb20gXCJzcmMvX21vZGVscy9zaG93cy5tb2RlbFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSBcInJlYWN0LWh0bWwtcGFyc2VyXCI7XG5pbXBvcnQgU2hvd0NvbnRleHQsIHtcbiAgICBTaG93UHJvdmlkZXIsXG4gICAgU2hvd1JlZHVjZXIsXG4gICAgaW5pdGlhbFNob3dTdGF0ZSxcbn0gZnJvbSBcInNyYy9fY29udGV4dHMvc2hvdy5jb250ZXh0XCI7XG5pbXBvcnQgeyBVUERBVEUgfSBmcm9tIFwic3JjL19oZWxwZXJzL3R5cGVzXCI7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPFNob3c+KFxuICAgICAgICBcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2luZ2xlc2VhcmNoL3JpY2stYW5kLW1vcnR5P3E9MjQmZW1iZWQ9ZXBpc29kZXNcIlxuICAgICk7XG4gICAgY29uc3QgeyBTaG93U3RhdGUsIGRpc3BhdGNoU2hvdyB9ID0gdXNlQ29udGV4dChTaG93Q29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hTaG93KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0sIFtkYXRhLCBlcnJvcl0pO1xuXG4gICAgaWYgKCFkYXRhICYmICFlcnJvcikge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICAvL2Rpc3BsYXkgZXJyb3JcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLmNhcmRcIiwgYmc6IFwid2hpdGVcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbWF4SGVpZ2h0OiBcIjI1MHB4XCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2UgJiYgZGF0YS5pbWFnZS5vcmlnaW5hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXIgc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlciBzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5CbG9ja0VuZDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QmFkZ2UgY291bnQ9e2RhdGEucmF0aW5nLmF2ZXJhZ2V9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9XCIjZjUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhdGluZzoge2RhdGEucmF0aW5nLmF2ZXJhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzeD17eyBmb250U2l6ZTogXCIxNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1JlYWN0SHRtbFBhcnNlcihkYXRhLnN1bW1hcnkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5vZmZpY2lhbFNpdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJtYWdlbnRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5CbG9ja0VuZDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR3b3JrOiB7ZGF0YS5uZXR3b3JrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdZOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiB7ZGF0YS5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJjeWFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5CbG9ja0VuZDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZW5yZToge2RhdGEuZ2VucmVzWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5fZW1iZWRkZWQuZXBpc29kZXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicm93XCIgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLnVsXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5fZW1iZWRkZWQuZXBpc29kZXMubWFwKCh4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGVwaXNvZGU9e3h9IGtleT17eC5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Tm8gRXBpc29kZXMgZm91bmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==