webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/_contexts/show.context.tsx":
/*!****************************************!*\
  !*** ./src/_contexts/show.context.tsx ***!
  \****************************************/
/*! exports provided: default, ShowProvider, ShowReducer, initialShowState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProvider", function() { return ShowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowReducer", function() { return ShowReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialShowState", function() { return initialShowState; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_helpers_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_helpers/types */ "./src/_helpers/types.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ShowReducer = function ShowReducer(state, action) {
  switch (action.type) {
    case src_helpers_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]:
      return _objectSpread({}, action.payload);

    default:
      break;
  }

  return state;
};

_c = ShowReducer;
var initialShowState = null;
var ShowContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  ShowState: initialShowState,
  dispatchShow: {}
});
var ShowProvider = ShowContext.Provider;
/* harmony default export */ __webpack_exports__["default"] = (ShowContext);


var _c;

$RefreshReg$(_c, "ShowReducer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL19jb250ZXh0cy9zaG93LmNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlNob3dSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVVBEQVRFIiwicGF5bG9hZCIsImluaXRpYWxTaG93U3RhdGUiLCJTaG93Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJTaG93U3RhdGUiLCJkaXNwYXRjaFNob3ciLCJTaG93UHJvdmlkZXIiLCJQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNoQkMsS0FEZ0IsRUFFaEJDLE1BRmdCLEVBR1Q7QUFDUCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyx3REFBTDtBQUNJLCtCQUFZRixNQUFNLENBQUNHLE9BQW5COztBQUNKO0FBQ0k7QUFKUjs7QUFNQSxTQUFPSixLQUFQO0FBQ0gsQ0FYRDs7S0FBTUQsVztBQWFOLElBQU1NLGdCQUFzQixHQUFJLElBQWhDO0FBRUEsSUFBTUMsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQztBQUM5QkMsV0FBUyxFQUFFSCxnQkFEbUI7QUFFOUJJLGNBQVksRUFBRTtBQUZnQixDQUFELENBQWpDO0FBS0EsSUFBTUMsWUFBWSxHQUFHSixXQUFXLENBQUNLLFFBQWpDO0FBQ2VMLDBFQUFmO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNDllMWJiNmMxNzkwZjI5Y2UzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVUERBVEUgfSBmcm9tIFwic3JjL19oZWxwZXJzL3R5cGVzXCI7XHJcbmltcG9ydCB7IFNob3cgfSBmcm9tIFwic3JjL19tb2RlbHMvc2hvd3MubW9kZWxcIjtcclxuXHJcbmNvbnN0IFNob3dSZWR1Y2VyID0gKFxyXG4gICAgc3RhdGU6IFNob3csXHJcbiAgICBhY3Rpb246IHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkOiBhbnkgfVxyXG4pOiBTaG93ID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFVQREFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTaG93U3RhdGU6IFNob3cgPSAobnVsbCBhcyB1bmtub3duKSBhcyBTaG93O1xyXG5cclxuY29uc3QgU2hvd0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICAgIFNob3dTdGF0ZTogaW5pdGlhbFNob3dTdGF0ZSxcclxuICAgIGRpc3BhdGNoU2hvdzoge30gYXMgYW55LFxyXG59KTtcclxuXHJcbmNvbnN0IFNob3dQcm92aWRlciA9IFNob3dDb250ZXh0LlByb3ZpZGVyO1xyXG5leHBvcnQgZGVmYXVsdCBTaG93Q29udGV4dDtcclxuZXhwb3J0IHsgU2hvd1Byb3ZpZGVyLCBTaG93UmVkdWNlciwgaW5pdGlhbFNob3dTdGF0ZSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9