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
/* harmony import */ var src_contexts_show_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_contexts/show.context */ "./src/_contexts/show.context.tsx");
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
  let {
    0: ShowState,
    1: dispatchShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_10__["ShowReducer"], src_contexts_show_context__WEBPACK_IMPORTED_MODULE_10__["initialShowState"]);
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_10__["ShowProvider"], {
    value: {
      ShowState,
      dispatchShow
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(swr__WEBPACK_IMPORTED_MODULE_7__["SWRConfig"], {
    value: {
      fetcher: _services_CRUD_service__WEBPACK_IMPORTED_MODULE_8__["CRUDService"].get
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, !loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx(_components_nav_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
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
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx("div", {
    sx: {
      variant: "containers.page"
    },
    className: "site-layout-background col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  })))))) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "Loading..."))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL19jb250ZXh0cy9zaG93LmNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9faGVscGVycy90eXBlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL19zZXJ2aWNlcy9DUlVELnNlcnZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdi5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRoZW1lLXVpL3ByZXNldHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJTaG93UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlVQREFURSIsInBheWxvYWQiLCJpbml0aWFsU2hvd1N0YXRlIiwiU2hvd0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU2hvd1N0YXRlIiwiZGlzcGF0Y2hTaG93IiwiU2hvd1Byb3ZpZGVyIiwiUHJvdmlkZXIiLCJBREQiLCJERUxFVEUiLCJDTEVBUiIsInB1YmxpY1J1bnRpbWVDb25maWciLCJnZXRDb25maWciLCJBUElfVVJMIiwiZ2V0IiwiYXBpIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJmZXRjaCIsInRoZW4iLCJoYW5kbGVSZXNwb25zZSIsInJlc3BvbnNlIiwidGV4dCIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiY29kZSIsInN0YXR1cyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJvayIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1c1RleHQiLCJDUlVEU2VydmljZSIsIkhlYWRlciIsIkxheW91dCIsIk5hdiIsIkN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVNZW51Q2xpY2siLCJrZXkiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBvc2l0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJDb250ZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VSZWR1Y2VyIiwidGhlbWUiLCJmZXRjaGVyIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0Jsb2NrRW5kIiwidmFyaWFudCIsInJvYm90byIsImNvbnRhaW5lcnMiLCJjYXJkIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwIiwiYm94U2hhZG93IiwicGFnZSIsIm0iLCJteCIsInVsIiwibGlzdFN0eWxlIiwicHgiLCJsaSIsInB5IiwiY29sb3JzIiwiYmFja2dyb3VuZCIsInN0eWxlIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LENBQUNtQixNQUFkO0FBM0JFLEVBQVg7O0FBOEJlekIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0EsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVVBEQVRFIH0gZnJvbSBcInNyYy9faGVscGVycy90eXBlc1wiO1xyXG5pbXBvcnQgeyBTaG93IH0gZnJvbSBcInNyYy9fbW9kZWxzL3Nob3dzLm1vZGVsXCI7XHJcblxyXG5jb25zdCBTaG93UmVkdWNlciA9IChcclxuICAgIHN0YXRlOiBTaG93LFxyXG4gICAgYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZDogYW55IH1cclxuKTogU2hvdyA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBVUERBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU2hvd1N0YXRlOiBTaG93ID0gKG51bGwgYXMgdW5rbm93bikgYXMgU2hvdztcclxuXHJcbmNvbnN0IFNob3dDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBTaG93U3RhdGU6IGluaXRpYWxTaG93U3RhdGUsXHJcbiAgICBkaXNwYXRjaFNob3c6IHt9IGFzIGFueSxcclxufSk7XHJcblxyXG5jb25zdCBTaG93UHJvdmlkZXIgPSBTaG93Q29udGV4dC5Qcm92aWRlcjtcclxuZXhwb3J0IGRlZmF1bHQgU2hvd0NvbnRleHQ7XHJcbmV4cG9ydCB7IFNob3dQcm92aWRlciwgU2hvd1JlZHVjZXIsIGluaXRpYWxTaG93U3RhdGUgfTtcclxuIiwiZXhwb3J0IGNvbnN0IEFERCA9IFwiQUREXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEUgPSBcIlVQREFURVwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFID0gXCJERUxFVEVcIjtcclxuZXhwb3J0IGNvbnN0IENMRUFSID0gXCJDTEVBUlwiO1xyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcbmNvbnN0IHsgQVBJX1VSTCB9ID0gcHVibGljUnVudGltZUNvbmZpZztcblxuY29uc3QgZ2V0ID0gYXN5bmMgKGFwaTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChhcGksIHJlcXVlc3RPcHRpb25zIGFzIFJlcXVlc3RJbml0KS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbigodGV4dCkgPT4ge1xuICAgICAgICBpZiAodGV4dC5zdGFydHNXaXRoKFwiPCFET0NUWVBFIGh0bWw+XCIpKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgY29kZTogcmVzcG9uc2Uuc3RhdHVzIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gdGV4dCAmJiBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBDUlVEU2VydmljZSA9IHtcbiAgICBnZXQsXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xuXG5jb25zdCBOYXY6IEZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtDdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKHsga2V5IH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZW51XCIpO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwibG9nb3V0XCI6XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudChudWxsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2FjY291bnQvbG9naW5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hY2NvdW50L3JlZ2lzdGVyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlciBzdHlsZT17eyBwb3NpdGlvbjogXCJmaXhlZFwiLCB6SW5kZXg6IDEsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja31cbiAgICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCIyXCJdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaG9tZVwiPkhvbWU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInJlZ2lzdGVyXCI+UmVnaXN0ZXI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJsb2dpblwiPkxvZ2luPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2LmNvbXBvbmVudFwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcbmltcG9ydCBcIi4uLy4uL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB1c2VTV1IsIHsgU1dSQ29uZmlnIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgQ1JVRFNlcnZpY2UgfSBmcm9tIFwiLi4vX3NlcnZpY2VzL0NSVUQuc2VydmljZVwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gICAgU2hvd1Byb3ZpZGVyLFxuICAgIFNob3dSZWR1Y2VyLFxuICAgIGluaXRpYWxTaG93U3RhdGUsXG59IGZyb20gXCJzcmMvX2NvbnRleHRzL3Nob3cuY29udGV4dFwiO1xuXG5jb25zdCB7IENvbnRlbnQgfSA9IExheW91dDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBsZXQgW1Nob3dTdGF0ZSwgZGlzcGF0Y2hTaG93XSA9IHVzZVJlZHVjZXIoU2hvd1JlZHVjZXIsIGluaXRpYWxTaG93U3RhdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxTaG93UHJvdmlkZXIgdmFsdWU9e3sgU2hvd1N0YXRlLCBkaXNwYXRjaFNob3cgfX0+XG4gICAgICAgICAgICAgICAgPFNXUkNvbmZpZyB2YWx1ZT17eyBmZXRjaGVyOiBDUlVEU2VydmljZS5nZXQgfX0+XG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgYmFja2dyb3VuZGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQmxvY2tFbmQ6IFwiODBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dCBtYWluQ29udGFpbmVyIGNvbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiY29udGFpbmVycy5wYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kIGNvbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TV1JDb25maWc+XG4gICAgICAgICAgICA8L1Nob3dQcm92aWRlcj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyByb2JvdG8gfSBmcm9tIFwiQHRoZW1lLXVpL3ByZXNldHNcIjtcblxuY29uc3QgdGhlbWUgPSB7XG4gICAgLi4ucm9ib3RvLFxuICAgIGNvbnRhaW5lcnM6IHtcbiAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwibXV0ZWRcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIHA6IDIsXG4gICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgXCIwIDFweCAzcHggcmdiYSgwLDAsMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLCAwLjI0KVwiLFxuICAgICAgICB9LFxuICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICBtOiAwLFxuICAgICAgICAgICAgbXg6IFwiYXV0b1wiLFxuICAgICAgICB9LFxuICAgICAgICB1bDoge1xuICAgICAgICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHB4OiAzLFxuICAgICAgICAgICAgbGk6IHtcbiAgICAgICAgICAgICAgICBweTogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgLi4ucm9ib3RvLmNvbG9ycyxcbiAgICAgICAgYmFja2dyb3VuZDogXCJ0b21hdG9cIixcbiAgICB9LFxuICAgIHN0eWxlOiB7IC4uLnJvYm90by5zdHlsZXMgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL3ByZXNldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==