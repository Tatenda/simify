webpackHotUpdate_N_E("pages/episode/[id]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL19jb250ZXh0cy9zaG93LmNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlNob3dSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVVBEQVRFIiwicGF5bG9hZCIsImluaXRpYWxTaG93U3RhdGUiLCJTaG93Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJTaG93U3RhdGUiLCJkaXNwYXRjaFNob3ciLCJTaG93UHJvdmlkZXIiLCJQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNoQkMsS0FEZ0IsRUFFaEJDLE1BRmdCLEVBR1Q7QUFDUCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyx3REFBTDtBQUNJLCtCQUFZRixNQUFNLENBQUNHLE9BQW5COztBQUNKO0FBQ0k7QUFKUjs7QUFNQSxTQUFPSixLQUFQO0FBQ0gsQ0FYRDs7S0FBTUQsVztBQWFOLElBQU1NLGdCQUFzQixHQUFJLElBQWhDO0FBRUEsSUFBTUMsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQztBQUM5QkMsV0FBUyxFQUFFSCxnQkFEbUI7QUFFOUJJLGNBQVksRUFBRTtBQUZnQixDQUFELENBQWpDO0FBS0EsSUFBTUMsWUFBWSxHQUFHSixXQUFXLENBQUNLLFFBQWpDO0FBQ2VMLDBFQUFmO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXBpc29kZS9baWRdLjA0OWUxYmI2YzE3OTBmMjljZTMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVQREFURSB9IGZyb20gXCJzcmMvX2hlbHBlcnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgU2hvdyB9IGZyb20gXCJzcmMvX21vZGVscy9zaG93cy5tb2RlbFwiO1xyXG5cclxuY29uc3QgU2hvd1JlZHVjZXIgPSAoXHJcbiAgICBzdGF0ZTogU2hvdyxcclxuICAgIGFjdGlvbjogeyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ6IGFueSB9XHJcbik6IFNob3cgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVVBEQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFNob3dTdGF0ZTogU2hvdyA9IChudWxsIGFzIHVua25vd24pIGFzIFNob3c7XHJcblxyXG5jb25zdCBTaG93Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gICAgU2hvd1N0YXRlOiBpbml0aWFsU2hvd1N0YXRlLFxyXG4gICAgZGlzcGF0Y2hTaG93OiB7fSBhcyBhbnksXHJcbn0pO1xyXG5cclxuY29uc3QgU2hvd1Byb3ZpZGVyID0gU2hvd0NvbnRleHQuUHJvdmlkZXI7XHJcbmV4cG9ydCBkZWZhdWx0IFNob3dDb250ZXh0O1xyXG5leHBvcnQgeyBTaG93UHJvdmlkZXIsIFNob3dSZWR1Y2VyLCBpbml0aWFsU2hvd1N0YXRlIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=