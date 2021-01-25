webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL19jb250ZXh0cy9zaG93LmNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlNob3dSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVVBEQVRFIiwicGF5bG9hZCIsImluaXRpYWxTaG93U3RhdGUiLCJTaG93Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJTaG93U3RhdGUiLCJkaXNwYXRjaFNob3ciLCJTaG93UHJvdmlkZXIiLCJQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUNoQkMsS0FEZ0IsRUFFaEJDLE1BRmdCLEVBR1Q7QUFDUCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyx3REFBTDtBQUNJLCtCQUFZRixNQUFNLENBQUNHLE9BQW5COztBQUNKO0FBQ0k7QUFKUjs7QUFNQSxTQUFPSixLQUFQO0FBQ0gsQ0FYRDs7S0FBTUQsVztBQWFOLElBQU1NLGdCQUFzQixHQUFJLElBQWhDO0FBRUEsSUFBTUMsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQztBQUM5QkMsV0FBUyxFQUFFSCxnQkFEbUI7QUFFOUJJLGNBQVksRUFBRTtBQUZnQixDQUFELENBQWpDO0FBS0EsSUFBTUMsWUFBWSxHQUFHSixXQUFXLENBQUNLLFFBQWpDO0FBQ2VMLDBFQUFmO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDQ5ZTFiYjZjMTc5MGYyOWNlMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVVBEQVRFIH0gZnJvbSBcInNyYy9faGVscGVycy90eXBlc1wiO1xyXG5pbXBvcnQgeyBTaG93IH0gZnJvbSBcInNyYy9fbW9kZWxzL3Nob3dzLm1vZGVsXCI7XHJcblxyXG5jb25zdCBTaG93UmVkdWNlciA9IChcclxuICAgIHN0YXRlOiBTaG93LFxyXG4gICAgYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZDogYW55IH1cclxuKTogU2hvdyA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBVUERBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU2hvd1N0YXRlOiBTaG93ID0gKG51bGwgYXMgdW5rbm93bikgYXMgU2hvdztcclxuXHJcbmNvbnN0IFNob3dDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBTaG93U3RhdGU6IGluaXRpYWxTaG93U3RhdGUsXHJcbiAgICBkaXNwYXRjaFNob3c6IHt9IGFzIGFueSxcclxufSk7XHJcblxyXG5jb25zdCBTaG93UHJvdmlkZXIgPSBTaG93Q29udGV4dC5Qcm92aWRlcjtcclxuZXhwb3J0IGRlZmF1bHQgU2hvd0NvbnRleHQ7XHJcbmV4cG9ydCB7IFNob3dQcm92aWRlciwgU2hvd1JlZHVjZXIsIGluaXRpYWxTaG93U3RhdGUgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==