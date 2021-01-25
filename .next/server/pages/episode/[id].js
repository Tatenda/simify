module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/episode/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_contexts/show.context.tsx":
/*!****************************************!*\
  !*** ./src/_contexts/show.context.tsx ***!
  \****************************************/
/*! exports provided: default, ShowProvider, ShowReducer, initialShowState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProvider", function() { return ShowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowReducer", function() { return ShowReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialShowState", function() { return initialShowState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_helpers_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/_helpers/types */ "./src/_helpers/types.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ShowReducer = (state, action) => {
  switch (action.type) {
    case src_helpers_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]:
      return _objectSpread({}, action.payload);

    default:
      break;
  }

  return state;
};

const initialShowState = null;
const ShowContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  ShowState: initialShowState,
  dispatchShow: {}
});
const ShowProvider = ShowContext.Provider;
/* harmony default export */ __webpack_exports__["default"] = (ShowContext);


/***/ }),

/***/ "./src/_helpers/types.tsx":
/*!********************************!*\
  !*** ./src/_helpers/types.tsx ***!
  \********************************/
/*! exports provided: ADD, UPDATE, DELETE, CLEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return CLEAR; });
const ADD = "ADD";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const CLEAR = "CLEAR";

/***/ }),

/***/ "./src/pages/episode/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/episode/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_contexts_show_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_contexts/show.context */ "./src/_contexts/show.context.tsx");
var _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\pages\\episode\\[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







const EpisodeComponent = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    ShowState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ShowState) {
      const res = ShowState._embedded.episodes.find(x => x.id === Number(id));

      setData(res);
    }
  }, [ShowState]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("data", data);
  }, [data]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12",
    sx: {
      variant: "containers.card",
      bg: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    sx: {
      maxHeight: "250px",
      overflow: "hidden"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-10",
    sx: {
      display: "grid",
      placeItems: "center start"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    sx: {
      display: "grid",
      placeItems: "center start",
      marginBlockEnd: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, data.name)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    sx: {
      fontSize: "18px",
      display: "grid",
      placeItems: "center",
      height: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "#f50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }, data.runtime, "minutes"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(data.summary))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, data.url)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "magenta",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 45
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 49
    }
  }, "Season: ", data.season))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 41
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "green",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 45
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 49
    }
  }, "Episode: ", data.number))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (EpisodeComponent);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL19jb250ZXh0cy9zaG93LmNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy90eXBlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2VwaXNvZGUvLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJTaG93UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlVQREFURSIsInBheWxvYWQiLCJpbml0aWFsU2hvd1N0YXRlIiwiU2hvd0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU2hvd1N0YXRlIiwiZGlzcGF0Y2hTaG93IiwiU2hvd1Byb3ZpZGVyIiwiUHJvdmlkZXIiLCJBREQiLCJERUxFVEUiLCJDTEVBUiIsIkVwaXNvZGVDb21wb25lbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJyZXMiLCJfZW1iZWRkZWQiLCJlcGlzb2RlcyIsImZpbmQiLCJ4IiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnQiLCJiZyIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25TZWxmIiwiaW1hZ2UiLCJvcmlnaW5hbCIsInBsYWNlSXRlbXMiLCJtYXJnaW5CbG9ja0VuZCIsIm5hbWUiLCJmb250U2l6ZSIsInJ1bnRpbWUiLCJSZWFjdEh0bWxQYXJzZXIiLCJzdW1tYXJ5IiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciIsInVybCIsInBhZGRpbmdZIiwic2Vhc29uIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUdBLE1BQU1BLFdBQVcsR0FBRyxDQUNoQkMsS0FEZ0IsRUFFaEJDLE1BRmdCLEtBR1Q7QUFDUCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyx3REFBTDtBQUNJLCtCQUFZRixNQUFNLENBQUNHLE9BQW5COztBQUNKO0FBQ0k7QUFKUjs7QUFNQSxTQUFPSixLQUFQO0FBQ0gsQ0FYRDs7QUFhQSxNQUFNSyxnQkFBc0IsR0FBSSxJQUFoQztBQUVBLE1BQU1DLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUM7QUFDOUJDLFdBQVMsRUFBRUgsZ0JBRG1CO0FBRTlCSSxj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Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2VwaXNvZGUvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2VwaXNvZGUvW2lkXS50c3hcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVQREFURSB9IGZyb20gXCJzcmMvX2hlbHBlcnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgU2hvdyB9IGZyb20gXCJzcmMvX21vZGVscy9zaG93cy5tb2RlbFwiO1xyXG5cclxuY29uc3QgU2hvd1JlZHVjZXIgPSAoXHJcbiAgICBzdGF0ZTogU2hvdyxcclxuICAgIGFjdGlvbjogeyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ6IGFueSB9XHJcbik6IFNob3cgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVVBEQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFNob3dTdGF0ZTogU2hvdyA9IChudWxsIGFzIHVua25vd24pIGFzIFNob3c7XHJcblxyXG5jb25zdCBTaG93Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gICAgU2hvd1N0YXRlOiBpbml0aWFsU2hvd1N0YXRlLFxyXG4gICAgZGlzcGF0Y2hTaG93OiB7fSBhcyBhbnksXHJcbn0pO1xyXG5cclxuY29uc3QgU2hvd1Byb3ZpZGVyID0gU2hvd0NvbnRleHQuUHJvdmlkZXI7XHJcbmV4cG9ydCBkZWZhdWx0IFNob3dDb250ZXh0O1xyXG5leHBvcnQgeyBTaG93UHJvdmlkZXIsIFNob3dSZWR1Y2VyLCBpbml0aWFsU2hvd1N0YXRlIH07XHJcbiIsImV4cG9ydCBjb25zdCBBREQgPSBcIkFERFwiO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFID0gXCJVUERBVEVcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURSA9IFwiREVMRVRFXCI7XHJcbmV4cG9ydCBjb25zdCBDTEVBUiA9IFwiQ0xFQVJcIjtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTaG93RXBpc29kZSB9IGZyb20gXCJzcmMvX21vZGVscy9zaG93cy5tb2RlbFwiO1xyXG5pbXBvcnQgU2hvd0NvbnRleHQgZnJvbSBcInNyYy9fY29udGV4dHMvc2hvdy5jb250ZXh0XCI7XHJcblxyXG5jb25zdCBFcGlzb2RlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxTaG93RXBpc29kZT4oKTtcclxuICAgIGNvbnN0IHsgU2hvd1N0YXRlIH0gPSB1c2VDb250ZXh0KFNob3dDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChTaG93U3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gU2hvd1N0YXRlLl9lbWJlZGRlZC5lcGlzb2Rlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHgpID0+IHguaWQgPT09IE51bWJlcihpZCBhcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldERhdGEocmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbU2hvd1N0YXRlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgdmFyaWFudDogXCJjb250YWluZXJzLmNhcmRcIiwgYmc6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1heEhlaWdodDogXCIyNTBweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2UgJiYgZGF0YS5pbWFnZS5vcmlnaW5hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXIgc3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlciBzdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCYWRnZSBjb3VudD17ZGF0YS5yYXRpbmcuYXZlcmFnZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwiI2Y1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnJ1bnRpbWV9bWludXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN4PXt7IGZvbnRTaXplOiBcIjE2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSZWFjdEh0bWxQYXJzZXIoZGF0YS5zdW1tYXJ5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJtYWdlbnRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdZOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlYXNvbjoge2RhdGEuc2Vhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXBpc29kZToge2RhdGEubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlQ29tcG9uZW50O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWh0bWwtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=