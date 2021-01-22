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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const {
  API_URL
} = publicRuntimeConfig;

const authHeader = () => {
  return {
    Authorization: `Bearer `
  };
};

const get = async api => {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(api, requestOptions).then(handleResponse);
};

const post = async (api, body) => {
  const requestOptions = {
    method: "POST",
    headers: _objectSpread({
      "Content-Type": "application/json"
    }, authHeader()),
    credentials: "include",
    body: JSON.stringify(body)
  };
  return fetch(`${api}`, requestOptions).then(handleResponse);
};

function put(api, body) {
  const requestOptions = {
    method: "PUT",
    headers: _objectSpread({
      "Content-Type": "application/json"
    }, authHeader()),
    body: JSON.stringify(body)
  };
  return fetch(`${api}`, requestOptions).then(handleResponse);
}

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
  get,
  put,
  post,
  API_URL
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9DUlVELnNlcnZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRoZW1lLXVpL3ByZXNldHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiQVBJX1VSTCIsImF1dGhIZWFkZXIiLCJBdXRob3JpemF0aW9uIiwiZ2V0IiwiYXBpIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwiaGFuZGxlUmVzcG9uc2UiLCJwb3N0IiwiYm9keSIsImNyZWRlbnRpYWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1dCIsInJlc3BvbnNlIiwidGV4dCIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiY29kZSIsInN0YXR1cyIsImRhdGEiLCJwYXJzZSIsIm9rIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzVGV4dCIsIkNSVURTZXJ2aWNlIiwiSGVhZGVyIiwiTGF5b3V0IiwiTmF2IiwiQ3VycmVudCIsInNldEN1cnJlbnQiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZU1lbnVDbGljayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ3aWR0aCIsIkNvbnRlbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRoZW1lIiwiZmV0Y2hlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdCbG9ja0VuZCIsInZhcmlhbnQiLCJyb2JvdG8iLCJjb250YWluZXJzIiwiY2FyZCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwicCIsImJveFNoYWRvdyIsInBhZ2UiLCJtIiwibXgiLCJ1bCIsImxpc3RTdHlsZSIsInB4IiwibGkiLCJweSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzdHlsZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5jb25zdCB7IEFQSV9VUkwgfSA9IHB1YmxpY1J1bnRpbWVDb25maWc7XG5cbmNvbnN0IGF1dGhIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciBgIH07XG59O1xuXG5jb25zdCBnZXQgPSBhc3luYyAoYXBpOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiBhdXRoSGVhZGVyKCksXG4gICAgfTtcbiAgICByZXR1cm4gZmV0Y2goYXBpLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XG59O1xuY29uc3QgcG9zdCA9IGFzeW5jIChhcGksIGJvZHkpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLi4uYXV0aEhlYWRlcigpIH0sXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgfTtcbiAgICByZXR1cm4gZmV0Y2goYCR7YXBpfWAsIHJlcXVlc3RPcHRpb25zIGFzIFJlcXVlc3RJbml0KS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn07XG5cbmZ1bmN0aW9uIHB1dChhcGksIGJvZHkpIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAuLi5hdXRoSGVhZGVyKCkgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgfTtcbiAgICByZXR1cm4gZmV0Y2goYCR7YXBpfWAsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKCh0ZXh0KSA9PiB7XG4gICAgICAgIGlmICh0ZXh0LnN0YXJ0c1dpdGgoXCI8IURPQ1RZUEUgaHRtbD5cIikpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoeyBjb2RlOiByZXNwb25zZS5zdGF0dXMgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0ZXh0ICYmIEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB8fCByZXNwb25zZS5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IENSVURTZXJ2aWNlID0ge1xuICAgIGdldCxcbiAgICBwdXQsXG4gICAgcG9zdCxcbiAgICBBUElfVVJMLFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExheW91dCwgTWVudSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dDtcblxuY29uc3QgTmF2OiBGQyA9ICgpID0+IHtcbiAgICBjb25zdCBbQ3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9ICh7IGtleSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVudVwiKTtcblxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSBcImxvZ291dFwiOlxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnQobnVsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hY2NvdW50L2xvZ2luXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWNjb3VudC9yZWdpc3RlclwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgLyR7a2V5fWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkZXIgc3R5bGU9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgekluZGV4OiAxLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9XG4gICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiMlwiXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImhvbWVcIj5Ib21lPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJyZWdpc3RlclwiPlJlZ2lzdGVyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibG9naW5cIj5Mb2dpbjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0hlYWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3RoZW1lXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL25hdi5jb21wb25lbnRcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgdXNlU1dSLCB7IFNXUkNvbmZpZyB9IGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IENSVURTZXJ2aWNlIH0gZnJvbSBcIi4uL19zZXJ2aWNlcy9DUlVELnNlcnZpY2VcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IHsgQ29udGVudCB9ID0gTGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxTV1JDb25maWcgdmFsdWU9e3sgZmV0Y2hlcjogQ1JVRFNlcnZpY2UuZ2V0IH19PlxuICAgICAgICAgICAgICAgIHshbG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgYmFja2dyb3VuZGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCbG9ja0VuZDogXCI4MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dCBtYWluQ29udGFpbmVyIGNvbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImNvbnRhaW5lcnMucGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmQgY29sLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU1dSQ29uZmlnPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7IHJvYm90byB9IGZyb20gXCJAdGhlbWUtdWkvcHJlc2V0c1wiO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgICAuLi5yb2JvdG8sXG4gICAgY29udGFpbmVyczoge1xuICAgICAgICBjYXJkOiB7XG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJtdXRlZFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICAgICAgcDogMixcbiAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICBcIjAgMXB4IDNweCByZ2JhKDAsMCwwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsIDAuMjQpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICAgIG06IDAsXG4gICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHVsOiB7XG4gICAgICAgICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgcHg6IDMsXG4gICAgICAgICAgICBsaToge1xuICAgICAgICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNvbG9yczoge1xuICAgICAgICAuLi5yb2JvdG8uY29sb3JzLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcInRvbWF0b1wiLFxuICAgIH0sXG4gICAgc3R5bGU6IHsgLi4ucm9ib3RvLnN0eWxlcyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGhlbWUtdWkvcHJlc2V0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9