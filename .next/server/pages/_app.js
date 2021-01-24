module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_services/CRUD.service.tsx":
/*!****************************************!*\
  !*** ./src/_services/CRUD.service.tsx ***!
  \****************************************/
/*! exports provided: CRUDService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDService", function() { return CRUDService; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const {
  API_URL
} = publicRuntimeConfig;

const get = async api => {
  const requestOptions = {
    method: "GET"
  };
  return fetch(api, requestOptions).then(handleResponse);
};

function handleResponse(response) {
  return response.text().then(text => {
    if (text.startsWith("<!DOCTYPE html>")) return Promise.reject({
      code: response.status
    });
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

const CRUDService = {
  get
};

/***/ }),

/***/ "./src/components/nav.component.tsx":
/*!******************************************!*\
  !*** ./src/components/nav.component.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\components\\nav.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];

const Nav = () => {
  const {
    0: Current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const handleMenuClick = ({
    key
  }) => {
    console.log("Menu");

    switch (key) {
      case "logout":
        setCurrent(null);
        break;

      case "login":
        router.push("/account/login");
        break;

      case "register":
        router.push("/account/register");
        break;

      case "home":
        router.push("/");
        break;

      default:
        router.push(`/${key}`);
        break;
    }
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Header, {
    style: {
      position: "fixed",
      zIndex: 1,
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    onClick: handleMenuClick,
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ["2"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Home"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Register"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "Login"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./theme.tsx");
/* harmony import */ var _components_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav.component */ "./src/components/nav.component.tsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_CRUD_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/CRUD.service */ "./src/_services/CRUD.service.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const {
  Content
} = antd__WEBPACK_IMPORTED_MODULE_9__["Layout"];
function App({
  Component,
  pageProps
}) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(swr__WEBPACK_IMPORTED_MODULE_7__["SWRConfig"], {
    value: {
      fetcher: _services_CRUD_service__WEBPACK_IMPORTED_MODULE_8__["CRUDService"].get
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, !loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx(_components_nav_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }), __jsx(Content, {
    sx: {
      height: "100%",
      backgroundColor: `background`,
      paddingBlockEnd: "80px"
    },
    className: "site-layout mainContainer col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    sx: {
      variant: "containers.page"
    },
    className: "site-layout-background col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  })))))) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Loading...")));
}

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./theme.tsx":
/*!*******************!*\
  !*** ./theme.tsx ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/presets */ "@theme-ui/presets");
/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const theme = _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__["roboto"]), {}, {
  containers: {
    card: {
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
      boxShadow: "0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)"
    },
    page: {
      m: 0,
      mx: "auto"
    },
    ul: {
      listStyle: "none",
      px: 3,
      li: {
        py: 2
      }
    }
  },
  colors: _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__["roboto"].colors), {}, {
    background: "tomato"
  }),
  style: _objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__["roboto"].styles)
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@theme-ui/presets":
/*!************************************!*\
  !*** external "@theme-ui/presets" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@theme-ui/presets");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

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

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9DUlVELnNlcnZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRoZW1lLXVpL3ByZXNldHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiQVBJX1VSTCIsImdldCIsImFwaSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiZmV0Y2giLCJ0aGVuIiwiaGFuZGxlUmVzcG9uc2UiLCJyZXNwb25zZSIsInRleHQiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImNvZGUiLCJzdGF0dXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwib2siLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0IiwiQ1JVRFNlcnZpY2UiLCJIZWFkZXIiLCJMYXlvdXQiLCJOYXYiLCJDdXJyZW50Iiwic2V0Q3VycmVudCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTWVudUNsaWNrIiwia2V5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJwb3NpdGlvbiIsInpJbmRleCIsIndpZHRoIiwiQ29udGVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidGhlbWUiLCJmZXRjaGVyIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0Jsb2NrRW5kIiwidmFyaWFudCIsInJvYm90byIsImNvbnRhaW5lcnMiLCJjYXJkIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwIiwiYm94U2hhZG93IiwicGFnZSIsIm0iLCJteCIsInVsIiwibGlzdFN0eWxlIiwicHgiLCJsaSIsInB5IiwiY29sb3JzIiwiYmFja2dyb3VuZCIsInN0eWxlIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQTBCQyxrREFBUyxF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Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcbmNvbnN0IHsgQVBJX1VSTCB9ID0gcHVibGljUnVudGltZUNvbmZpZztcblxuY29uc3QgZ2V0ID0gYXN5bmMgKGFwaTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChhcGksIHJlcXVlc3RPcHRpb25zIGFzIFJlcXVlc3RJbml0KS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbigodGV4dCkgPT4ge1xuICAgICAgICBpZiAodGV4dC5zdGFydHNXaXRoKFwiPCFET0NUWVBFIGh0bWw+XCIpKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgY29kZTogcmVzcG9uc2Uuc3RhdHVzIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gdGV4dCAmJiBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBDUlVEU2VydmljZSA9IHtcbiAgICBnZXQsXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xuXG5jb25zdCBOYXY6IEZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtDdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKHsga2V5IH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZW51XCIpO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwibG9nb3V0XCI6XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudChudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2FjY291bnQvbG9naW5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hY2NvdW50L3JlZ2lzdGVyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlciBzdHlsZT17eyBwb3NpdGlvbjogXCJmaXhlZFwiLCB6SW5kZXg6IDEsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja31cbiAgICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCIyXCJdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaG9tZVwiPkhvbWU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInJlZ2lzdGVyXCI+UmVnaXN0ZXI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJsb2dpblwiPkxvZ2luPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2LmNvbXBvbmVudFwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcbmltcG9ydCBcIi4uLy4uL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB1c2VTV1IsIHsgU1dSQ29uZmlnIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgQ1JVRFNlcnZpY2UgfSBmcm9tIFwiLi4vX3NlcnZpY2VzL0NSVUQuc2VydmljZVwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPFNXUkNvbmZpZyB2YWx1ZT17eyBmZXRjaGVyOiBDUlVEU2VydmljZS5nZXQgfX0+XG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGBiYWNrZ3JvdW5kYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0Jsb2NrRW5kOiBcIjgwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0IG1haW5Db250YWluZXIgY29sLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiY29udGFpbmVycy5wYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZCBjb2wtMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TV1JDb25maWc+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgcm9ib3RvIH0gZnJvbSBcIkB0aGVtZS11aS9wcmVzZXRzXCI7XG5cbmNvbnN0IHRoZW1lID0ge1xuICAgIC4uLnJvYm90byxcbiAgICBjb250YWluZXJzOiB7XG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIm11dGVkXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICBwOiAyLFxuICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgIFwiMCAxcHggM3B4IHJnYmEoMCwwLDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwgMC4yNClcIixcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgbTogMCxcbiAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgfSxcbiAgICAgICAgdWw6IHtcbiAgICAgICAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgICAgICAgICBweDogMyxcbiAgICAgICAgICAgIGxpOiB7XG4gICAgICAgICAgICAgICAgcHk6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY29sb3JzOiB7XG4gICAgICAgIC4uLnJvYm90by5jb2xvcnMsXG4gICAgICAgIGJhY2tncm91bmQ6IFwidG9tYXRvXCIsXG4gICAgfSxcbiAgICBzdHlsZTogeyAuLi5yb2JvdG8uc3R5bGVzIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0aGVtZS11aS9wcmVzZXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=