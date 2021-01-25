webpackHotUpdate_N_E("pages/episode/[id]",{

/***/ "./node_modules/@xobotyi/scrollbar-width/dist/index.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@xobotyi/scrollbar-width/dist/index.esm.js ***!
  \*****************************************************************/
/*! exports provided: scrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbarWidth", function() { return e; });
var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var n=o.clientWidth;if(0!==n)return e.__cache=100-n,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};


/***/ }),

/***/ "./node_modules/fast-deep-equal/react.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/react.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/fast-shallow-equal/index.js":
/*!**************************************************!*\
  !*** ./node_modules/fast-shallow-equal/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js":
/*!**************************************************************************!*\
  !*** ./node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkgName = 'nano-css';

module.exports = function warnOnMissingDependencies (addon, renderer, deps) {
    var missing = [];

    for (var i = 0; i < deps.length; i++) {
        var name = deps[i];

        if (!renderer[name]) {
            missing.push(name);
        }
    }

    if (missing.length) {
        var str = 'Addon "' + addon + '" is missing the following dependencies:';

        for (var j = 0; j < missing.length; j++) {
            str += '\n require("' + pkgName + '/addon/' + missing[j] + '").addon(nano);';
        }

        throw new Error(str);
    }
};


/***/ }),

/***/ "./node_modules/nano-css/addon/cssom.js":
/*!**********************************************!*\
  !*** ./node_modules/nano-css/addon/cssom.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "./node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['sh']);
    }

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ "./node_modules/nano-css/addon/vcssom.js":
/*!***********************************************!*\
  !*** ./node_modules/nano-css/addon/vcssom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeRule = __webpack_require__(/*! ./vcssom/removeRule */ "./node_modules/nano-css/addon/vcssom/removeRule.js").removeRule;

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "./node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['createRule']); // cssom
    }

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ "./node_modules/nano-css/addon/vcssom/cssToTree.js":
/*!*********************************************************!*\
  !*** ./node_modules/nano-css/addon/vcssom/cssToTree.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ "./node_modules/nano-css/addon/vcssom/removeRule.js":
/*!**********************************************************!*\
  !*** ./node_modules/nano-css/addon/vcssom/removeRule.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.removeRule = removeRule;


/***/ }),

/***/ "./node_modules/nano-css/index.js":
/*!****************************************!*\
  !*** ./node_modules/nano-css/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var hash = 5381, i = str.length;

    while (i) hash = (hash * 33) ^ str.charCodeAt(--i);

    return '_' + (hash >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (true) {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        },
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (true) {
            renderer.sh.setAttribute('data-nano-css-dev', '');

            // Test style sheet used in DEV mode to test if .insetRule() would throw.
            renderer.shTest = document.createElement('style');
            renderer.shTest.setAttribute('data-nano-css-dev-tests', '');
            document.head.appendChild(renderer.shTest);
        }

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (false) { var sheet; } else {
                // Test if .insertRule() works in dev mode. Unknown pseudo-selectors will throw when
                // .insertRule() is used, but .appendChild() will not throw.
                try {
                    renderer.shTest.sheet.insertRule(rawCssRule, renderer.shTest.sheet.cssRules.length);
                } catch (error) {
                    if (config.verbose) {
                        console.error(error);
                    }
                }

                // Insert pretty-printed CSS for dev mode.
                renderer.sh.appendChild(document.createTextNode(rawCssRule));
            }
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (( true) && !renderer.sourcemaps) {
                    str += '    ' + renderer.decl(prop, value, selector, atrule) + '\n';
                } else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (( true) && !renderer.sourcemaps) {
                str = '\n' + selector + ' {\n' + str + '}\n';
            } else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === "@" && prop !== "@font-face") {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ "./node_modules/react-universal-interface/lib/addClassDecoratorSupport.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-universal-interface/lib/addClassDecoratorSupport.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var wrapInStatefulComponent_1 = tslib_1.__importDefault(__webpack_require__(/*! ./wrapInStatefulComponent */ "./node_modules/react-universal-interface/lib/wrapInStatefulComponent.js"));
var addClassDecoratorSupport = function (Comp) {
    var isSFC = !Comp.prototype;
    return !isSFC ? Comp : wrapInStatefulComponent_1.default(Comp);
};
exports.default = addClassDecoratorSupport;
//# sourceMappingURL=addClassDecoratorSupport.js.map

/***/ }),

/***/ "./node_modules/react-universal-interface/lib/createEnhancer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-universal-interface/lib/createEnhancer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.divWrapper = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var addClassDecoratorSupport_1 = tslib_1.__importDefault(__webpack_require__(/*! ./addClassDecoratorSupport */ "./node_modules/react-universal-interface/lib/addClassDecoratorSupport.js"));
var h = React.createElement;
var noWrap = function (Comp, propName, props, state) {
    var _a;
    return h(Comp, propName ? tslib_1.__assign((_a = {}, _a[propName] = state, _a), props) : tslib_1.__assign(tslib_1.__assign({}, state), props));
};
exports.divWrapper = function (Comp, propName, props, state) {
    return h('div', null, noWrap(Comp, propName, props, state));
};
var createEnhancer = function (Facc, prop, wrapper) {
    if (wrapper === void 0) { wrapper = noWrap; }
    var enhancer = function (Comp, propName, faccProps) {
        if (propName === void 0) { propName = prop; }
        if (faccProps === void 0) { faccProps = null; }
        var isClassDecoratorMethodCall = typeof Comp === 'string';
        if (isClassDecoratorMethodCall) {
            return function (Klass) { return enhancer(Klass, Comp || prop, propName); };
        }
        var Enhanced = function (props) {
            return h(Facc, faccProps, function (state) { return wrapper(Comp, propName, props, state); });
        };
        if (true) {
            Enhanced.displayName = (Facc.displayName || Facc.name) + "(" + (Comp.displayName || Comp.name) + ")";
        }
        return isClassDecoratorMethodCall ? addClassDecoratorSupport_1.default(Enhanced) : Enhanced;
    };
    return enhancer;
};
exports.default = createEnhancer;
//# sourceMappingURL=createEnhancer.js.map

/***/ }),

/***/ "./node_modules/react-universal-interface/lib/hookToRenderProp.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-universal-interface/lib/hookToRenderProp.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var render_1 = tslib_1.__importDefault(__webpack_require__(/*! ./render */ "./node_modules/react-universal-interface/lib/render.js"));
var defaultMapPropsToArgs = function (props) { return [props]; };
var hookToRenderProp = function (hook, mapPropsToArgs) {
    if (mapPropsToArgs === void 0) { mapPropsToArgs = defaultMapPropsToArgs; }
    return function (props) { return render_1.default(props, hook.apply(void 0, mapPropsToArgs(props))); };
};
exports.default = hookToRenderProp;
//# sourceMappingURL=hookToRenderProp.js.map

/***/ }),

/***/ "./node_modules/react-universal-interface/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-universal-interface/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hookToRenderProp = exports.createEnhancer = exports.render = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var render_1 = tslib_1.__importDefault(__webpack_require__(/*! ./render */ "./node_modules/react-universal-interface/lib/render.js"));
exports.render = render_1.default;
var createEnhancer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createEnhancer */ "./node_modules/react-universal-interface/lib/createEnhancer.js"));
exports.createEnhancer = createEnhancer_1.default;
var hookToRenderProp_1 = tslib_1.__importDefault(__webpack_require__(/*! ./hookToRenderProp */ "./node_modules/react-universal-interface/lib/hookToRenderProp.js"));
exports.hookToRenderProp = hookToRenderProp_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-universal-interface/lib/render.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-universal-interface/lib/render.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var isReact16Plus = parseInt(react_1.version.substr(0, react_1.version.indexOf('.'))) > 15;
var isFn = function (fn) { return typeof fn === 'function'; };
var render = function (props, data) {
    var more = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        more[_i - 2] = arguments[_i];
    }
    if (true) {
        if (typeof props !== 'object') {
            throw new TypeError('renderChildren(props, data) first argument must be a props object.');
        }
        var children_1 = props.children, render_1 = props.render;
        if (isFn(children_1) && isFn(render_1)) {
            console.warn('Both "render" and "children" are specified for in a universal interface component. ' +
                'Children will be used.');
            console.trace();
        }
        if (typeof data !== 'object') {
            console.warn('Universal component interface normally expects data to be an object, ' +
                ("\"" + typeof data + "\" received."));
            console.trace();
        }
    }
    var render = props.render, _a = props.children, children = _a === void 0 ? render : _a, component = props.component, _b = props.comp, comp = _b === void 0 ? component : _b;
    if (isFn(children))
        return children.apply(void 0, tslib_1.__spreadArrays([data], more));
    if (comp) {
        return react_1.createElement(comp, data);
    }
    if (children instanceof Array)
        return isReact16Plus ? children : react_1.createElement.apply(void 0, tslib_1.__spreadArrays(['div', null], children));
    if (children && (children instanceof Object)) {
        if (true) {
            if (!children.type || ((typeof children.type !== 'string') && (typeof children.type !== 'function') && (typeof children.type !== 'symbol'))) {
                console.warn('Universal component interface received object as children, ' +
                    'expected React element, but received unexpected React "type".');
                console.trace();
            }
            if (typeof children.type === 'string')
                return children;
            return react_1.cloneElement(children, Object.assign({}, children.props, data));
        }
        else {}
    }
    return children || null;
};
exports.default = render;
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/react-universal-interface/lib/wrapInStatefulComponent.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-universal-interface/lib/wrapInStatefulComponent.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var wrapInStatefulComponent = function (Comp) {
    var Decorated = (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            return Comp(this.props, this.context);
        };
        return class_1;
    }(React.Component));
    if (true) {
        Decorated.displayName = "Decorated(" + (Comp.displayName || Comp.name) + ")";
    }
    return Decorated;
};
exports.default = wrapInStatefulComponent;
//# sourceMappingURL=wrapInStatefulComponent.js.map

/***/ }),

/***/ "./node_modules/react-use/esm/createBreakpoint.js":
/*!********************************************************!*\
  !*** ./node_modules/react-use/esm/createBreakpoint.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), screen = _a[0], setScreen = _a[1];
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            window.addEventListener('resize', setSideScreen);
            return function () {
                window.removeEventListener('resize', setSideScreen);
            };
        });
        var sortedBreakpoints = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [
            breakpoints,
        ]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createBreakpoint);


/***/ }),

/***/ "./node_modules/react-use/esm/createGlobalState.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/createGlobalState.js ***!
  \*********************************************************/
/*! exports provided: createGlobalState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return createGlobalState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");



function createGlobalState(initialState) {
    var store = {
        state: initialState,
        setState: function (state) {
            store.state = state;
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(store.state), globalState = _a[0], stateSetter = _a[1];
        Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
/* harmony default export */ __webpack_exports__["default"] = (createGlobalState);


/***/ }),

/***/ "./node_modules/react-use/esm/createMemo.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/createMemo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createMemo = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return fn.apply(void 0, args); }, args);
}; };
/* harmony default export */ __webpack_exports__["default"] = (createMemo);


/***/ }),

/***/ "./node_modules/react-use/esm/createReducer.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/createReducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");


function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initializer(initialState));
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ref.current), setState = _a[1];
        var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createReducer);


/***/ }),

/***/ "./node_modules/react-use/esm/createReducerContext.js":
/*!************************************************************!*\
  !*** ./node_modules/react-use/esm/createReducerContext.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createReducerContext = function (reducer, defaultInitialState) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
    var providerFactory = function (props, children) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(context.Provider, props, children); };
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
/* harmony default export */ __webpack_exports__["default"] = (createReducerContext);


/***/ }),

/***/ "./node_modules/react-use/esm/createStateContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-use/esm/createStateContext.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createStateContext = function (defaultInitialValue) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
    var providerFactory = function (props, children) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(context.Provider, props, children); };
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
/* harmony default export */ __webpack_exports__["default"] = (createStateContext);


/***/ }),

/***/ "./node_modules/react-use/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-use/esm/index.js ***!
  \*********************************************/
/*! exports provided: createMemo, createReducerContext, createReducer, createStateContext, useAsync, useAsyncFn, useAsyncRetry, useAudio, useBattery, useBeforeUnload, useBoolean, useClickAway, useCookie, useCopyToClipboard, useCounter, useCss, useCustomCompareEffect, useDebounce, useDeepCompareEffect, useDefault, useDrop, useDropArea, useEffectOnce, useEnsuredForwardedRef, ensuredForwardRef, useEvent, useError, useFavicon, useFullscreen, useGeolocation, useGetSet, useGetSetState, useHarmonicIntervalFn, useHover, useHoverDirty, useIdle, useIntersection, useInterval, useIsomorphicLayoutEffect, useKey, createBreakpoint, useKeyPress, useKeyPressEvent, useLatest, useLifecycles, useList, useLocalStorage, useLocation, useLockBodyScroll, useLogger, useLongPress, useMap, useMedia, useMediaDevices, useMediatedState, useMethods, useMotion, useMount, useMountedState, useMouse, useMouseHovered, useMouseWheel, useNetwork, useNumber, useObservable, useOrientation, usePageLeave, usePermission, usePrevious, usePreviousDistinct, usePromise, useQueue, useRaf, useRafLoop, useRafState, useSearchParam, useScratch, useScroll, useScrolling, useSessionStorage, useSetState, useShallowCompareEffect, useSize, useSlider, useSpeech, useStartTyping, useStateWithHistory, useStateList, useThrottle, useThrottleFn, useTimeout, useTimeoutFn, useTitle, useToggle, useTween, useUnmount, useUnmountPromise, useUpdate, useUpdateEffect, useUpsert, useVibrate, useVideo, useStateValidator, useScrollbarWidth, useMultiStateValidator, useWindowScroll, useWindowSize, useMeasure, useRendersCount, useFirstMountState, useSet, createGlobalState, useHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMemo */ "./node_modules/react-use/esm/createMemo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemo", function() { return _createMemo__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createReducerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReducerContext */ "./node_modules/react-use/esm/createReducerContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducerContext", function() { return _createReducerContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createReducer */ "./node_modules/react-use/esm/createReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return _createReducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createStateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStateContext */ "./node_modules/react-use/esm/createStateContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateContext", function() { return _createStateContext__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useAsync */ "./node_modules/react-use/esm/useAsync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _useAsync__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useAsyncFn */ "./node_modules/react-use/esm/useAsyncFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncFn", function() { return _useAsyncFn__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _useAsyncRetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useAsyncRetry */ "./node_modules/react-use/esm/useAsyncRetry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncRetry", function() { return _useAsyncRetry__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _useAudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useAudio */ "./node_modules/react-use/esm/useAudio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAudio", function() { return _useAudio__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useBattery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useBattery */ "./node_modules/react-use/esm/useBattery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBattery", function() { return _useBattery__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _useBeforeUnload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useBeforeUnload */ "./node_modules/react-use/esm/useBeforeUnload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBeforeUnload", function() { return _useBeforeUnload__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useBoolean */ "./node_modules/react-use/esm/useBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _useClickAway__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useClickAway */ "./node_modules/react-use/esm/useClickAway.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClickAway", function() { return _useClickAway__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _useCookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useCookie */ "./node_modules/react-use/esm/useCookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCookie", function() { return _useCookie__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useCopyToClipboard */ "./node_modules/react-use/esm/useCopyToClipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCopyToClipboard", function() { return _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useCounter */ "./node_modules/react-use/esm/useCounter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCounter", function() { return _useCounter__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _useCss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useCss */ "./node_modules/react-use/esm/useCss.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCss", function() { return _useCss__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./useCustomCompareEffect */ "./node_modules/react-use/esm/useCustomCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomCompareEffect", function() { return _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./useDebounce */ "./node_modules/react-use/esm/useDebounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return _useDebounce__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useDeepCompareEffect */ "./node_modules/react-use/esm/useDeepCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeepCompareEffect", function() { return _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _useDefault__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useDefault */ "./node_modules/react-use/esm/useDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDefault", function() { return _useDefault__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _useDrop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useDrop */ "./node_modules/react-use/esm/useDrop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrop", function() { return _useDrop__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _useDropArea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./useDropArea */ "./node_modules/react-use/esm/useDropArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDropArea", function() { return _useDropArea__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffectOnce", function() { return _useEffectOnce__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useEnsuredForwardedRef */ "./node_modules/react-use/esm/useEnsuredForwardedRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEnsuredForwardedRef", function() { return _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensuredForwardRef", function() { return _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__["ensuredForwardRef"]; });

/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./useEvent */ "./node_modules/react-use/esm/useEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEvent", function() { return _useEvent__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _useError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useError */ "./node_modules/react-use/esm/useError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useError", function() { return _useError__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _useFavicon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./useFavicon */ "./node_modules/react-use/esm/useFavicon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFavicon", function() { return _useFavicon__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _useFullscreen__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useFullscreen */ "./node_modules/react-use/esm/useFullscreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFullscreen", function() { return _useFullscreen__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _useGeolocation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./useGeolocation */ "./node_modules/react-use/esm/useGeolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGeolocation", function() { return _useGeolocation__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _useGetSet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./useGetSet */ "./node_modules/react-use/esm/useGetSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetSet", function() { return _useGetSet__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _useGetSetState__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./useGetSetState */ "./node_modules/react-use/esm/useGetSetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetSetState", function() { return _useGetSetState__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _useHarmonicIntervalFn__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./useHarmonicIntervalFn */ "./node_modules/react-use/esm/useHarmonicIntervalFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHarmonicIntervalFn", function() { return _useHarmonicIntervalFn__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./useHover */ "./node_modules/react-use/esm/useHover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _useHover__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _useHoverDirty__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./useHoverDirty */ "./node_modules/react-use/esm/useHoverDirty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHoverDirty", function() { return _useHoverDirty__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _useIdle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./useIdle */ "./node_modules/react-use/esm/useIdle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIdle", function() { return _useIdle__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _useIntersection__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./useIntersection */ "./node_modules/react-use/esm/useIntersection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIntersection", function() { return _useIntersection__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./useInterval */ "./node_modules/react-use/esm/useInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _useKey__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./useKey */ "./node_modules/react-use/esm/useKey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKey", function() { return _useKey__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _createBreakpoint__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./createBreakpoint */ "./node_modules/react-use/esm/createBreakpoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBreakpoint", function() { return _createBreakpoint__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./useKeyPress */ "./node_modules/react-use/esm/useKeyPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPress", function() { return _useKeyPress__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _useKeyPressEvent__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./useKeyPressEvent */ "./node_modules/react-use/esm/useKeyPressEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPressEvent", function() { return _useKeyPressEvent__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./useLatest */ "./node_modules/react-use/esm/useLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLatest", function() { return _useLatest__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _useLifecycles__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./useLifecycles */ "./node_modules/react-use/esm/useLifecycles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLifecycles", function() { return _useLifecycles__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _useList__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./useList */ "./node_modules/react-use/esm/useList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useList", function() { return _useList__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./useLocalStorage */ "./node_modules/react-use/esm/useLocalStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return _useLocalStorage__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _useLocation__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./useLocation */ "./node_modules/react-use/esm/useLocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return _useLocation__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _useLockBodyScroll__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./useLockBodyScroll */ "./node_modules/react-use/esm/useLockBodyScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLockBodyScroll", function() { return _useLockBodyScroll__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _useLogger__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./useLogger */ "./node_modules/react-use/esm/useLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLogger", function() { return _useLogger__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _useLongPress__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./useLongPress */ "./node_modules/react-use/esm/useLongPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLongPress", function() { return _useLongPress__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./useMap */ "./node_modules/react-use/esm/useMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMap", function() { return _useMap__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./useMedia */ "./node_modules/react-use/esm/useMedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return _useMedia__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _useMediaDevices__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./useMediaDevices */ "./node_modules/react-use/esm/useMediaDevices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaDevices", function() { return _useMediaDevices__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _useMediatedState__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./useMediatedState */ "./node_modules/react-use/esm/useMediatedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediatedState", function() { return _useMediatedState__WEBPACK_IMPORTED_MODULE_53__["useMediatedState"]; });

/* harmony import */ var _useMethods__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./useMethods */ "./node_modules/react-use/esm/useMethods.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMethods", function() { return _useMethods__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _useMotion__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./useMotion */ "./node_modules/react-use/esm/useMotion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMotion", function() { return _useMotion__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _useMount__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./useMount */ "./node_modules/react-use/esm/useMount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMount", function() { return _useMount__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMountedState", function() { return _useMountedState__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./useMouse */ "./node_modules/react-use/esm/useMouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouse", function() { return _useMouse__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _useMouseHovered__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./useMouseHovered */ "./node_modules/react-use/esm/useMouseHovered.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseHovered", function() { return _useMouseHovered__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _useMouseWheel__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./useMouseWheel */ "./node_modules/react-use/esm/useMouseWheel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseWheel", function() { return _useMouseWheel__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _useNetwork__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./useNetwork */ "./node_modules/react-use/esm/useNetwork.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNetwork", function() { return _useNetwork__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _useNumber__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./useNumber */ "./node_modules/react-use/esm/useNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNumber", function() { return _useNumber__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _useObservable__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./useObservable */ "./node_modules/react-use/esm/useObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return _useObservable__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _useOrientation__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./useOrientation */ "./node_modules/react-use/esm/useOrientation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOrientation", function() { return _useOrientation__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _usePageLeave__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./usePageLeave */ "./node_modules/react-use/esm/usePageLeave.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageLeave", function() { return _usePageLeave__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _usePermission__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./usePermission */ "./node_modules/react-use/esm/usePermission.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePermission", function() { return _usePermission__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./usePrevious */ "./node_modules/react-use/esm/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _usePreviousDistinct__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./usePreviousDistinct */ "./node_modules/react-use/esm/usePreviousDistinct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePreviousDistinct", function() { return _usePreviousDistinct__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _usePromise__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./usePromise */ "./node_modules/react-use/esm/usePromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePromise", function() { return _usePromise__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _useQueue__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./useQueue */ "./node_modules/react-use/esm/useQueue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueue", function() { return _useQueue__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./useRaf */ "./node_modules/react-use/esm/useRaf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRaf", function() { return _useRaf__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _useRafLoop__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./useRafLoop */ "./node_modules/react-use/esm/useRafLoop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafLoop", function() { return _useRafLoop__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafState", function() { return _useRafState__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _useSearchParam__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./useSearchParam */ "./node_modules/react-use/esm/useSearchParam.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearchParam", function() { return _useSearchParam__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _useScratch__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./useScratch */ "./node_modules/react-use/esm/useScratch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScratch", function() { return _useScratch__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _useScroll__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./useScroll */ "./node_modules/react-use/esm/useScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return _useScroll__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _useScrolling__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./useScrolling */ "./node_modules/react-use/esm/useScrolling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrolling", function() { return _useScrolling__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _useSessionStorage__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./useSessionStorage */ "./node_modules/react-use/esm/useSessionStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSessionStorage", function() { return _useSessionStorage__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./useSetState */ "./node_modules/react-use/esm/useSetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetState", function() { return _useSetState__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./useShallowCompareEffect */ "./node_modules/react-use/esm/useShallowCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShallowCompareEffect", function() { return _useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _useSize__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./useSize */ "./node_modules/react-use/esm/useSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSize", function() { return _useSize__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _useSlider__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./useSlider */ "./node_modules/react-use/esm/useSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSlider", function() { return _useSlider__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _useSpeech__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./useSpeech */ "./node_modules/react-use/esm/useSpeech.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpeech", function() { return _useSpeech__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _useStartTyping__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./useStartTyping */ "./node_modules/react-use/esm/useStartTyping.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStartTyping", function() { return _useStartTyping__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _useStateWithHistory__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./useStateWithHistory */ "./node_modules/react-use/esm/useStateWithHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateWithHistory", function() { return _useStateWithHistory__WEBPACK_IMPORTED_MODULE_85__["useStateWithHistory"]; });

/* harmony import */ var _useStateList__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./useStateList */ "./node_modules/react-use/esm/useStateList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateList", function() { return _useStateList__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _useThrottle__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./useThrottle */ "./node_modules/react-use/esm/useThrottle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottle", function() { return _useThrottle__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _useThrottleFn__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./useThrottleFn */ "./node_modules/react-use/esm/useThrottleFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottleFn", function() { return _useThrottleFn__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./useTimeout */ "./node_modules/react-use/esm/useTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _useTimeout__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./useTimeoutFn */ "./node_modules/react-use/esm/useTimeoutFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeoutFn", function() { return _useTimeoutFn__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _useTitle__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./useTitle */ "./node_modules/react-use/esm/useTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitle", function() { return _useTitle__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./useToggle */ "./node_modules/react-use/esm/useToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return _useToggle__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _useTween__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./useTween */ "./node_modules/react-use/esm/useTween.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTween", function() { return _useTween__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUnmount", function() { return _useUnmount__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _useUnmountPromise__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./useUnmountPromise */ "./node_modules/react-use/esm/useUnmountPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUnmountPromise", function() { return _useUnmountPromise__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdate", function() { return _useUpdate__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return _useUpdateEffect__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _useUpsert__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./useUpsert */ "./node_modules/react-use/esm/useUpsert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpsert", function() { return _useUpsert__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _useVibrate__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./useVibrate */ "./node_modules/react-use/esm/useVibrate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVibrate", function() { return _useVibrate__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _useVideo__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./useVideo */ "./node_modules/react-use/esm/useVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVideo", function() { return _useVideo__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _useStateValidator__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./useStateValidator */ "./node_modules/react-use/esm/useStateValidator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateValidator", function() { return _useStateValidator__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _useScrollbarWidth__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./useScrollbarWidth */ "./node_modules/react-use/esm/useScrollbarWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollbarWidth", function() { return _useScrollbarWidth__WEBPACK_IMPORTED_MODULE_102__["useScrollbarWidth"]; });

/* harmony import */ var _useMultiStateValidator__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./useMultiStateValidator */ "./node_modules/react-use/esm/useMultiStateValidator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMultiStateValidator", function() { return _useMultiStateValidator__WEBPACK_IMPORTED_MODULE_103__["useMultiStateValidator"]; });

/* harmony import */ var _useWindowScroll__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./useWindowScroll */ "./node_modules/react-use/esm/useWindowScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowScroll", function() { return _useWindowScroll__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./useWindowSize */ "./node_modules/react-use/esm/useWindowSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return _useWindowSize__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _useMeasure__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./useMeasure */ "./node_modules/react-use/esm/useMeasure.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMeasure", function() { return _useMeasure__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _useRendersCount__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./useRendersCount */ "./node_modules/react-use/esm/useRendersCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRendersCount", function() { return _useRendersCount__WEBPACK_IMPORTED_MODULE_107__["useRendersCount"]; });

/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./useFirstMountState */ "./node_modules/react-use/esm/useFirstMountState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFirstMountState", function() { return _useFirstMountState__WEBPACK_IMPORTED_MODULE_108__["useFirstMountState"]; });

/* harmony import */ var _useSet__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./useSet */ "./node_modules/react-use/esm/useSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSet", function() { return _useSet__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./createGlobalState */ "./node_modules/react-use/esm/createGlobalState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return _createGlobalState__WEBPACK_IMPORTED_MODULE_110__["createGlobalState"]; });

/* harmony import */ var _useHash__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./useHash */ "./node_modules/react-use/esm/useHash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHash", function() { return _useHash__WEBPACK_IMPORTED_MODULE_111__["useHash"]; });









































// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';












































// not exported because of peer dependency
// export { default as useSpring } from './useSpring';






























/***/ }),

/***/ "./node_modules/react-use/esm/useAsync.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useAsync.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsyncFn */ "./node_modules/react-use/esm/useAsyncFn.js");


function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = Object(_useAsyncFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        callback();
    }, [callback]);
    return state;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useAsyncFn.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useAsyncFn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsyncFn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");



function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), state = _a[0], set = _a[1];
    var callback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        set(function (prevState) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevState), { loading: true })); });
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useAsyncRetry.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useAsyncRetry.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsync */ "./node_modules/react-use/esm/useAsync.js");



var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), attempt = _a[0], setAttempt = _a[1];
    var state = Object(_useAsync__WEBPACK_IMPORTED_MODULE_2__["default"])(fn, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (stateLoading) {
            if (true) {
                console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
            }
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(deps, [stateLoading]));
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { retry: retry });
};
/* harmony default export */ __webpack_exports__["default"] = (useAsyncRetry);


/***/ }),

/***/ "./node_modules/react-use/esm/useAudio.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useAudio.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createHTMLMediaHook */ "./node_modules/react-use/esm/util/createHTMLMediaHook.js");

var useAudio = Object(_util_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__["default"])('audio');
/* harmony default export */ __webpack_exports__["default"] = (useAudio);


/***/ }),

/***/ "./node_modules/react-use/esm/useBattery.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useBattery.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var nav = typeof navigator === 'object' ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDeepEqual"])(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'chargingchange', handleChange);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'chargingtimechange', handleChange);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'dischargingtimechange', handleChange);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'chargingchange', handleChange);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'chargingtimechange', handleChange);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'dischargingtimechange', handleChange);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
/* harmony default export */ __webpack_exports__["default"] = (isBatteryApiSupported ? useBattery : useBatteryMock);


/***/ }),

/***/ "./node_modules/react-use/esm/useBeforeUnload.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useBeforeUnload.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!enabled) {
            return;
        }
        window.addEventListener('beforeunload', handler);
        return function () { return window.removeEventListener('beforeunload', handler); };
    }, [enabled, handler]);
};
/* harmony default export */ __webpack_exports__["default"] = (useBeforeUnload);


/***/ }),

/***/ "./node_modules/react-use/esm/useBoolean.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useBoolean.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useToggle */ "./node_modules/react-use/esm/useToggle.js");

/* harmony default export */ __webpack_exports__["default"] = (_useToggle__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-use/esm/useClickAway.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useClickAway.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onClickAway);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
/* harmony default export */ __webpack_exports__["default"] = (useClickAway);


/***/ }),

/***/ "./node_modules/react-use/esm/useCookie.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useCookie.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


var useCookie = function (cookieName) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newValue, options) {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
/* harmony default export */ __webpack_exports__["default"] = (useCookie);


/***/ }),

/***/ "./node_modules/react-use/esm/useCopyToClipboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-use/esm/useCopyToClipboard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSetState */ "./node_modules/react-use/esm/useSetState.js");




var useCopyToClipboard = function () {
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_3__["default"])({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
        if (!isMounted()) {
            return;
        }
        var noUserInteraction;
        var normalizedValue;
        try {
            // only strings and numbers casted to strings can be copied to clipboard
            if (typeof value !== 'string' && typeof value !== 'number') {
                var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                if (true)
                    console.error(error);
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            // empty strings are also considered invalid
            else if (value === '') {
                var error = new Error("Cannot copy empty string to clipboard.");
                if (true)
                    console.error(error);
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            normalizedValue = value.toString();
            noUserInteraction = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default()(normalizedValue);
            setState({
                value: normalizedValue,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            setState({
                value: normalizedValue,
                error: error,
                noUserInteraction: noUserInteraction,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
/* harmony default export */ __webpack_exports__["default"] = (useCopyToClipboard);


/***/ }),

/***/ "./node_modules/react-use/esm/useCounter.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useCounter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useGetSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useGetSet */ "./node_modules/react-use/esm/useGetSet.js");
/* harmony import */ var _util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/resolveHookState */ "./node_modules/react-use/esm/util/resolveHookState.js");



function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialValue);
    typeof init !== 'number' && console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = Object(_useGetSet__WEBPACK_IMPORTED_MODULE_1__["default"])(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useCss.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useCss.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nano_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nano-css */ "./node_modules/nano-css/index.js");
/* harmony import */ var nano_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nano_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nano-css/addon/cssom */ "./node_modules/nano-css/addon/cssom.js");
/* harmony import */ var nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nano-css/addon/vcssom */ "./node_modules/nano-css/addon/vcssom.js");
/* harmony import */ var nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nano-css/addon/vcssom/cssToTree */ "./node_modules/nano-css/addon/vcssom/cssToTree.js");
/* harmony import */ var nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");






var nano = Object(nano_css__WEBPACK_IMPORTED_MODULE_0__["create"])();
Object(nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__["addon"])(nano);
Object(nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__["addon"])(nano);
var counter = 0;
var useCss = function (css) {
    var className = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () { return new nano.VSheet(); }, []);
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
        var tree = {};
        Object(nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__["cssToTree"])(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
/* harmony default export */ __webpack_exports__["default"] = (useCss);


/***/ }),

/***/ "./node_modules/react-use/esm/useCustomCompareEffect.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-use/esm/useCustomCompareEffect.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, ref.current);
};
/* harmony default export */ __webpack_exports__["default"] = (useCustomCompareEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useDebounce.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useDebounce.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTimeoutFn */ "./node_modules/react-use/esm/useTimeoutFn.js");


function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = Object(_useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(reset, deps);
    return [isReady, cancel];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useDeepCompareEffect.js":
/*!************************************************************!*\
  !*** ./node_modules/react-use/esm/useDeepCompareEffect.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCustomCompareEffect */ "./node_modules/react-use/esm/useCustomCompareEffect.js");


var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    Object(_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(effect, deps, _util__WEBPACK_IMPORTED_MODULE_0__["isDeepEqual"]);
};
/* harmony default export */ __webpack_exports__["default"] = (useDeepCompareEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useDefault.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useDefault.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useDefault = function (defaultValue, initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
/* harmony default export */ __webpack_exports__["default"] = (useDefault);


/***/ }),

/***/ "./node_modules/react-use/esm/useDrop.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useDrop.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var noop = function () { };
var createProcess = function (options) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (event.clipboardData) {
        var text = event.clipboardData.getData('text');
        (options.onText || noop)(text, event);
        return;
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), over = _a[0], setOverRaw = _a[1];
    var setOver = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(setOverRaw, []);
    var process = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return createProcess(options); }, [onFiles, onText, onUri]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        document.addEventListener('dragover', onDragOver);
        document.addEventListener('dragenter', onDragEnter);
        document.addEventListener('dragleave', onDragLeave);
        document.addEventListener('dragexit', onDragExit);
        document.addEventListener('drop', onDrop);
        if (onText) {
            document.addEventListener('paste', onPaste);
        }
        return function () {
            document.removeEventListener('dragover', onDragOver);
            document.removeEventListener('dragenter', onDragEnter);
            document.removeEventListener('dragleave', onDragLeave);
            document.removeEventListener('dragexit', onDragExit);
            document.removeEventListener('drop', onDrop);
            document.removeEventListener('paste', onPaste);
        };
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([process], args));
    return { over: over };
};
/* harmony default export */ __webpack_exports__["default"] = (useDrop);


/***/ }),

/***/ "./node_modules/react-use/esm/useDropArea.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useDropArea.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");


var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), over = _a[0], setOver = _a[1];
    var process = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
/* harmony default export */ __webpack_exports__["default"] = (useDropArea);


/***/ }),

/***/ "./node_modules/react-use/esm/useEffectOnce.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useEffectOnce.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEffectOnce = function (effect) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useEffectOnce);


/***/ }),

/***/ "./node_modules/react-use/esm/useEnsuredForwardedRef.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-use/esm/useEnsuredForwardedRef.js ***!
  \**************************************************************/
/*! exports provided: default, ensuredForwardRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEnsuredForwardedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensuredForwardRef", function() { return ensuredForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(forwardedRef && forwardedRef.current);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
function ensuredForwardRef(Component) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}


/***/ }),

/***/ "./node_modules/react-use/esm/useError.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useError.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useError = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _a[0], setError = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
/* harmony default export */ __webpack_exports__["default"] = (useError);


/***/ }),

/***/ "./node_modules/react-use/esm/useEvent.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useEvent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var defaultTarget = _util__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            target.addEventListener(name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                target.removeEventListener(name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
/* harmony default export */ __webpack_exports__["default"] = (useEvent);


/***/ }),

/***/ "./node_modules/react-use/esm/useFavicon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useFavicon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useFavicon = function (href) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
/* harmony default export */ __webpack_exports__["default"] = (useFavicon);


/***/ }),

/***/ "./node_modules/react-use/esm/useFirstMountState.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-use/esm/useFirstMountState.js ***!
  \**********************************************************/
/*! exports provided: useFirstMountState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFirstMountState", function() { return useFirstMountState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFirstMountState() {
    var isFirst = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useFullscreen.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useFullscreen.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");



var noop = function () { };
var useFullscreen = function (ref, on, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? noop : _a;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(on), isFullscreen = _b[0], setIsFullscreen = _b[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        if (!on) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            onClose();
        };
        var onChange = function () {
            if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
                var isScreenfullFullscreen = screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
            try {
                screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            video.current.addEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
                try {
                    screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.off('change', onChange);
                    screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [on, video, ref]);
    return isFullscreen;
};
/* harmony default export */ __webpack_exports__["default"] = (useFullscreen);


/***/ }),

/***/ "./node_modules/react-use/esm/useGeolocation.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useGeolocation.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useGeolocation = function (options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldState), { loading: false, error: error })); });
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useGeolocation);


/***/ }),

/***/ "./node_modules/react-use/esm/useGetSet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useGetSet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetSet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/resolveHookState */ "./node_modules/react-use/esm/util/resolveHookState.js");



function useGetSet(initialState) {
    var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialState));
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return [
        // get
        function () { return state.current; },
        // set
        function (newState) {
            state.current = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, state.current);
            update();
        },
    ]; }, []);
}


/***/ }),

/***/ "./node_modules/react-use/esm/useGetSetState.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useGetSetState.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");



var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (true) {
        if (typeof initialState !== 'object') {
            console.error('useGetSetState initial state must be an object.');
        }
    }
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initialState));
    var get = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () { return state.current; }, []);
    var set = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (patch) {
        if (!patch) {
            return;
        }
        if (true) {
            if (typeof patch !== 'object') {
                console.error('useGetSetState setter patch must be an object.');
            }
        }
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
/* harmony default export */ __webpack_exports__["default"] = (useGetSetState);


/***/ }),

/***/ "./node_modules/react-use/esm/useHarmonicIntervalFn.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-use/esm/useHarmonicIntervalFn.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! set-harmonic-interval */ "./node_modules/set-harmonic-interval/lib/index.esm.js");


var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () { });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        latestCallback.current = fn;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (delay !== null) {
            var interval_1 = Object(set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__["setHarmonicInterval"])(function () { return latestCallback.current(); }, delay);
            return function () { return Object(set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__["clearHarmonicInterval"])(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ __webpack_exports__["default"] = (useHarmonicIntervalFn);


/***/ }),

/***/ "./node_modules/react-use/esm/useHash.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useHash.js ***!
  \***********************************************/
/*! exports provided: useHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHash", function() { return useHash; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLifecycles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLifecycles */ "./node_modules/react-use/esm/useLifecycles.js");


/**
 * read and write url hash, response to url hash change
 */
var useHash = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return window.location.hash; }), hash = _a[0], setHash = _a[1];
    var onHashChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setHash(window.location.hash);
    }, []);
    Object(_useLifecycles__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        window.addEventListener('hashchange', onHashChange);
    }, function () {
        window.removeEventListener('hashchange', onHashChange);
    });
    var _setHash = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newHash) {
        if (newHash !== hash) {
            window.location.hash = newHash;
        }
    }, [hash]);
    return [hash, _setHash];
};


/***/ }),

/***/ "./node_modules/react-use/esm/useHover.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useHover.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"];
var noop = function () { };
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || noop)(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || noop)(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
/* harmony default export */ __webpack_exports__["default"] = (useHover);


/***/ }),

/***/ "./node_modules/react-use/esm/useHoverDirty.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useHoverDirty.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useHoverDirty expects a single ref argument.');
        }
    }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), value = _a[0], setValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            ref.current.addEventListener('mouseover', onMouseOver);
            ref.current.addEventListener('mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                current.removeEventListener('mouseover', onMouseOver);
                current.removeEventListener('mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
/* harmony default export */ __webpack_exports__["default"] = (useHoverDirty);


/***/ }),

/***/ "./node_modules/react-use/esm/useIdle.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useIdle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/index.umd.js");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");



var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__["throttle"])(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, events[i], onEvent);
        }
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, events[i], onEvent);
            }
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useIdle);


/***/ }),

/***/ "./node_modules/react-use/esm/useIntersection.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useIntersection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIntersection = function (ref, options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
/* harmony default export */ __webpack_exports__["default"] = (useIntersection);


/***/ }),

/***/ "./node_modules/react-use/esm/useInterval.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useInterval.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useInterval = function (callback, delay) {
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () { });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        savedCallback.current = callback;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ __webpack_exports__["default"] = (useInterval);


/***/ }),

/***/ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-use/esm/useIsomorphicLayoutEffect.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useIsomorphicLayoutEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useKey.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useKey.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEvent */ "./node_modules/react-use/esm/useEvent.js");


var noop = function () { };
var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    Object(_useEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(event, useMemoHandler, target, options);
};
/* harmony default export */ __webpack_exports__["default"] = (useKey);


/***/ }),

/***/ "./node_modules/react-use/esm/useKeyPress.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useKeyPress.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKey */ "./node_modules/react-use/esm/useKey.js");


var useKeyPress = function (keyFilter) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([false, null]), state = _a[0], set = _a[1];
    Object(_useKey__WEBPACK_IMPORTED_MODULE_1__["default"])(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    Object(_useKey__WEBPACK_IMPORTED_MODULE_1__["default"])(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useKeyPress);


/***/ }),

/***/ "./node_modules/react-use/esm/useKeyPressEvent.js":
/*!********************************************************!*\
  !*** ./node_modules/react-use/esm/useKeyPressEvent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useKeyPress */ "./node_modules/react-use/esm/useKeyPress.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");


var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = _useKeyPress__WEBPACK_IMPORTED_MODULE_0__["default"]; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
/* harmony default export */ __webpack_exports__["default"] = (useKeyPressEvent);


/***/ }),

/***/ "./node_modules/react-use/esm/useLatest.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useLatest.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useLatest = function (value) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    ref.current = value;
    return ref;
};
/* harmony default export */ __webpack_exports__["default"] = (useLatest);


/***/ }),

/***/ "./node_modules/react-use/esm/useLifecycles.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useLifecycles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useLifecycles = function (mount, unmount) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useLifecycles);


/***/ }),

/***/ "./node_modules/react-use/esm/useList.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/resolveHookState */ "./node_modules/react-use/esm/util/resolveHookState.js");



function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialList));
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var actions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var a = {
            set: function (newList) {
                list.current = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
/* harmony default export */ __webpack_exports__["default"] = (useList);


/***/ }),

/***/ "./node_modules/react-use/esm/useLocalStorage.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useLocalStorage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var noop = function () { };
var useLocalStorage = function (key, initialValue, options) {
    if (!_util__WEBPACK_IMPORTED_MODULE_1__["isClient"]) {
        return [initialValue, noop, noop];
    }
    if (!key) {
        throw new Error('useLocalStorage key may not be falsy');
    }
    var deserializer = options ? (options.raw ? function (value) { return value; } : options.deserializer) : JSON.parse;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        try {
            var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (valOrFunc) {
        try {
            var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
            if (typeof newState === 'undefined')
                return;
            var value = void 0;
            if (options)
                if (options.raw)
                    if (typeof newState === 'string')
                        value = newState;
                    else
                        value = JSON.stringify(newState);
                else if (options.serializer)
                    value = options.serializer(newState);
                else
                    value = JSON.stringify(newState);
            else
                value = JSON.stringify(newState);
            localStorage.setItem(key, value);
            setState(deserializer(value));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [key, setState]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var remove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw.
        }
    }, [key, setState]);
    return [state, set, remove];
};
/* harmony default export */ __webpack_exports__["default"] = (useLocalStorage);


/***/ }),

/***/ "./node_modules/react-use/esm/useLocation.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useLocation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var patchHistoryMethod = function (method) {
    var history = window.history;
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (_util__WEBPACK_IMPORTED_MODULE_1__["isClient"]) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var _a = window.history, state = _a.state, length = _a.length;
    var _b = window.location, hash = _b.hash, host = _b.host, hostname = _b.hostname, href = _b.href, origin = _b.origin, pathname = _b.pathname, port = _b.port, protocol = _b.protocol, search = _b.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(buildState('load')), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'popstate', onPopstate);
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'pushstate', onPushstate);
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'replacestate', onReplacestate);
        return function () {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'popstate', onPopstate);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'pushstate', onPushstate);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
/* harmony default export */ __webpack_exports__["default"] = (_util__WEBPACK_IMPORTED_MODULE_1__["isClient"] && hasEventConstructor ? useLocationBrowser : useLocationServer);


/***/ }),

/***/ "./node_modules/react-use/esm/useLockBodyScroll.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useLockBodyScroll.js ***!
  \*********************************************************/
/*! exports provided: getClosestBody, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestBody", function() { return getClosestBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
/* harmony default export */ __webpack_exports__["default"] = (!doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(doc.body);
        elementRef = elementRef || bodyRef;
        var lock = function (body) {
            var bodyInfo = bodies.get(body);
            if (!bodyInfo) {
                bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                if (isIosDevice) {
                    if (!documentListenerAdded) {
                        document.addEventListener('touchmove', preventDefault, { passive: false });
                        documentListenerAdded = true;
                    }
                }
                else {
                    body.style.overflow = 'hidden';
                }
            }
            else {
                bodies.set(body, { counter: bodyInfo.counter + 1, initialOverflow: bodyInfo.initialOverflow });
            }
        };
        var unlock = function (body) {
            var bodyInfo = bodies.get(body);
            if (bodyInfo) {
                if (bodyInfo.counter === 1) {
                    bodies.delete(body);
                    if (isIosDevice) {
                        body.ontouchmove = null;
                        if (documentListenerAdded) {
                            document.removeEventListener('touchmove', preventDefault);
                            documentListenerAdded = false;
                        }
                    }
                    else {
                        body.style.overflow = bodyInfo.initialOverflow;
                    }
                }
                else {
                    bodies.set(body, { counter: bodyInfo.counter - 1, initialOverflow: bodyInfo.initialOverflow });
                }
            }
        };
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            if (locked) {
                lock(body);
            }
            else {
                unlock(body);
            }
        }, [locked, elementRef.current]);
        // clean up, on un-mount
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            return function () {
                unlock(body);
            };
        }, []);
    });


/***/ }),

/***/ "./node_modules/react-use/esm/useLogger.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useLogger.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");



var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([componentName + " updated"], rest));
    });
};
/* harmony default export */ __webpack_exports__["default"] = (useLogger);


/***/ }),

/***/ "./node_modules/react-use/esm/useLongPress.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useLongPress.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isTouchEvent = function (ev) {
    return 'touches' in ev;
};
var preventDefault = function (ev) {
    if (!isTouchEvent(ev))
        return;
    if (ev.touches.length < 2 && ev.preventDefault) {
        ev.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var target = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var start = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            event.target.addEventListener('touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay, isPreventDefault]);
    var clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            target.current.removeEventListener('touchend', preventDefault);
        }
    }, [isPreventDefault]);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useLongPress);


/***/ }),

/***/ "./node_modules/react-use/esm/useMap.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useMap.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialMap), map = _a[0], set = _a[1];
    var stableActions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ get: Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
/* harmony default export */ __webpack_exports__["default"] = (useMap);


/***/ }),

/***/ "./node_modules/react-use/esm/useMeasure.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useMeasure.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");



var defaultState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};
var useMeasure = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), element = _a[0], ref = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState), rect = _b[0], setRect = _b[1];
    var observer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return new window.ResizeObserver(function (entries) {
            if (entries[0]) {
                var _a = entries[0].contentRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height, top_1 = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
                setRect({ x: x, y: y, width: width, height: height, top: top_1, left: left, bottom: bottom, right: right });
            }
        });
    }, []);
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        if (!element)
            return;
        observer.observe(element);
        return function () {
            observer.disconnect();
        };
    }, [element]);
    return [ref, rect];
};
var useMeasureMock = function () { return [function () { }, defaultState]; };
/* harmony default export */ __webpack_exports__["default"] = (_util__WEBPACK_IMPORTED_MODULE_2__["isClient"] && !!window.ResizeObserver ? useMeasure : useMeasureMock);


/***/ }),

/***/ "./node_modules/react-use/esm/useMedia.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useMedia.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var useMedia = function (query, defaultState) {
    if (defaultState === void 0) { defaultState = false; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_util__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? function () { return window.matchMedia(query).matches; } : defaultState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMedia);


/***/ }),

/***/ "./node_modules/react-use/esm/useMediaDevices.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useMediaDevices.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var noop = function () { };
var useMediaDevices = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({ deviceId: deviceId, groupId: groupId, kind: kind, label: label });
                        }),
                    });
                }
            })
                .catch(noop);
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
/* harmony default export */ __webpack_exports__["default"] = (typeof navigator === 'object' && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock);


/***/ }),

/***/ "./node_modules/react-use/esm/useMediatedState.js":
/*!********************************************************!*\
  !*** ./node_modules/react-use/esm/useMediatedState.js ***!
  \********************************************************/
/*! exports provided: useMediatedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMediatedState", function() { return useMediatedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediatedState(mediator, initialState) {
    var mediatorFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(mediator);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useMethods.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useMethods.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useMethods = function (createMethods, initialState) {
    var reducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
/* harmony default export */ __webpack_exports__["default"] = (useMethods);


/***/ }),

/***/ "./node_modules/react-use/esm/useMotion.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useMotion.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'devicemotion', handler);
        return function () {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMotion);


/***/ }),

/***/ "./node_modules/react-use/esm/useMount.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useMount.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ __webpack_exports__["default"] = (useMount);


/***/ }),

/***/ "./node_modules/react-use/esm/useMountedState.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useMountedState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMountedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMountedState() {
    var mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var get = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return mountedRef.current; }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    });
    return get;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useMouse.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useMouse.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");


var useMouse = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useMouse expects a single ref argument.');
        }
    }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        document.addEventListener('mousemove', moveHandler);
        return function () {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMouse);


/***/ }),

/***/ "./node_modules/react-use/esm/useMouseHovered.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useMouseHovered.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useHoverDirty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useHoverDirty */ "./node_modules/react-use/esm/useHoverDirty.js");
/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMouse */ "./node_modules/react-use/esm/useMouse.js");


var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = Object(_useHoverDirty__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, whenHovered);
    var state = Object(_useMouse__WEBPACK_IMPORTED_MODULE_1__["default"])(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMouseHovered);


/***/ }),

/***/ "./node_modules/react-use/esm/useMouseWheel.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useMouseWheel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), mouseWheelScrolled = _a[0], setMouseWheelScrolled = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var updateScroll = function (e) {
            setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
        };
        window.addEventListener('wheel', updateScroll, false);
        return function () { return window.removeEventListener('wheel', updateScroll); };
    });
    return mouseWheelScrolled;
});


/***/ }),

/***/ "./node_modules/react-use/esm/useMultiStateValidator.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-use/esm/useMultiStateValidator.js ***!
  \**************************************************************/
/*! exports provided: useMultiStateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultiStateValidator", function() { return useMultiStateValidator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validator);
    var statesInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useNetwork.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useNetwork.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");



var getConnection = function () {
    if (typeof navigator !== 'object') {
        return null;
    }
    var nav = navigator;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
};
var getConnectionState = function () {
    var connection = getConnection();
    if (!connection) {
        return {};
    }
    var downlink = connection.downlink, downlinkMax = connection.downlinkMax, effectiveType = connection.effectiveType, type = connection.type, rtt = connection.rtt;
    return {
        downlink: downlink,
        downlinkMax: downlinkMax,
        effectiveType: effectiveType,
        type: type,
        rtt: rtt,
    };
};
var useNetwork = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var localState = state;
        var localSetState = function (patch) {
            localState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, localState), patch);
            setState(localState);
        };
        var connection = getConnection();
        var onOnline = function () {
            localSetState({
                online: true,
                since: new Date(),
            });
        };
        var onOffline = function () {
            localSetState({
                online: false,
                since: new Date(),
            });
        };
        var onConnectionChange = function () {
            localSetState(getConnectionState());
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'online', onOnline);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'offline', onOffline);
        if (connection) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["on"])(connection, 'change', onConnectionChange);
            localSetState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { online: navigator.onLine, since: undefined }), getConnectionState()));
        }
        return function () {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'online', onOnline);
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'offline', onOffline);
            if (connection) {
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["off"])(connection, 'change', onConnectionChange);
            }
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useNetwork);


/***/ }),

/***/ "./node_modules/react-use/esm/useNumber.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useNumber.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCounter */ "./node_modules/react-use/esm/useCounter.js");

/* harmony default export */ __webpack_exports__["default"] = (_useCounter__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-use/esm/useObservable.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useObservable.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue), value = _a[0], update = _a[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ __webpack_exports__["default"] = (useObservable);


/***/ }),

/***/ "./node_modules/react-use/esm/useOrientation.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useOrientation.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var screen = window.screen;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useOrientation);


/***/ }),

/***/ "./node_modules/react-use/esm/usePageLeave.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/usePageLeave.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        document.addEventListener('mouseout', handler);
        return function () {
            document.removeEventListener('mouseout', handler);
        };
    }, args);
};
/* harmony default export */ __webpack_exports__["default"] = (usePageLeave);


/***/ }),

/***/ "./node_modules/react-use/esm/usePermission.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/usePermission.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var noop = function () { };
var usePermission = function (permissionDesc) {
    var mounted = true;
    var permissionStatus = null;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), state = _a[0], setState = _a[1];
    var onChange = function () {
        if (mounted && permissionStatus) {
            setState(permissionStatus.state);
        }
    };
    var changeState = function () {
        onChange();
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(permissionStatus, 'change', onChange);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            changeState();
        })
            .catch(noop);
        return function () {
            mounted = false;
            permissionStatus && Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(permissionStatus, 'change', onChange);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (usePermission);


/***/ }),

/***/ "./node_modules/react-use/esm/usePrevious.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/usePrevious.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePrevious(state) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ }),

/***/ "./node_modules/react-use/esm/usePreviousDistinct.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-use/esm/usePreviousDistinct.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePreviousDistinct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "./node_modules/react-use/esm/useFirstMountState.js");


var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var curRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}


/***/ }),

/***/ "./node_modules/react-use/esm/usePromise.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/usePromise.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");


var usePromise = function () {
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (usePromise);


/***/ }),

/***/ "./node_modules/react-use/esm/useQueue.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useQueue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useQueue);


/***/ }),

/***/ "./node_modules/react-use/esm/useRaf.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useRaf.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), elapsed = _a[0], set = _a[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
/* harmony default export */ __webpack_exports__["default"] = (useRaf);


/***/ }),

/***/ "./node_modules/react-use/esm/useRafLoop.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useRafLoop.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRafLoop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRafLoop(callback, initiallyActive) {
    if (initiallyActive === void 0) { initiallyActive = true; }
    var raf = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var rafActivity = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var rafCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
    rafCallback.current = callback;
    var step = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (time) {
        if (rafActivity.current) {
            rafCallback.current(time);
            raf.current = requestAnimationFrame(step);
        }
    }, []);
    var result = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return [
            function () {
                // stop
                if (rafActivity.current) {
                    rafActivity.current = false;
                    raf.current && cancelAnimationFrame(raf.current);
                }
            },
            function () {
                // start
                if (!rafActivity.current) {
                    rafActivity.current = true;
                    raf.current = requestAnimationFrame(step);
                }
            },
            function () { return rafActivity.current; },
        ];
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (initiallyActive) {
            result[1]();
        }
        return result[0];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return result;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useRafState.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useRafState.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");


var useRafState = function (initialState) {
    var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    var setRafState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
/* harmony default export */ __webpack_exports__["default"] = (useRafState);


/***/ }),

/***/ "./node_modules/react-use/esm/useRendersCount.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useRendersCount.js ***!
  \*******************************************************/
/*! exports provided: useRendersCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRendersCount", function() { return useRendersCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRendersCount() {
    return ++Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0).current;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useScratch.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useScratch.js ***!
  \**************************************************/
/*! exports provided: ScratchSensor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScratchSensor", function() { return ScratchSensor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_universal_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-universal-interface */ "./node_modules/react-universal-interface/lib/index.js");
/* harmony import */ var react_universal_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_universal_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLatest */ "./node_modules/react-use/esm/useLatest.js");




var noop = function () { };
var useScratch = function (params) {
    if (params === void 0) { params = {}; }
    var disabled = params.disabled;
    var paramsRef = Object(_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(params);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ isScratching: false }), state = _a[0], setState = _a[1];
    var refState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(state);
    var refScratching = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    var refAnimationFrame = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), el = _b[0], setEl = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (disabled)
            return;
        if (!el)
            return;
        var onMoveEvent = function (docX, docY) {
            cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = requestAnimationFrame(function () {
                var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
                var elX = left + window.scrollX;
                var elY = top + window.scrollY;
                var x = docX - elX;
                var y = docY - elY;
                setState(function (oldState) {
                    var newState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldState), { dx: x - (oldState.x || 0), dy: y - (oldState.y || 0), end: Date.now(), isScratching: true });
                    refState.current = newState;
                    (paramsRef.current.onScratch || noop)(newState);
                    return newState;
                });
            });
        };
        var onMouseMove = function (event) {
            onMoveEvent(event.pageX, event.pageY);
        };
        var onTouchMove = function (event) {
            onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        var onMouseUp;
        var onTouchEnd;
        var stopScratching = function () {
            if (!refScratching.current)
                return;
            refScratching.current = false;
            refState.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, refState.current), { isScratching: false });
            (paramsRef.current.onScratchEnd || noop)(refState.current);
            setState({ isScratching: false });
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchend', onTouchEnd);
        };
        onMouseUp = stopScratching;
        onTouchEnd = stopScratching;
        var startScratching = function (docX, docY) {
            if (!refScratching.current)
                return;
            var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
            var elX = left + window.scrollX;
            var elY = top + window.scrollY;
            var x = docX - elX;
            var y = docY - elY;
            var time = Date.now();
            var newState = {
                isScratching: true,
                start: time,
                end: time,
                docX: docX,
                docY: docY,
                x: x,
                y: y,
                dx: 0,
                dy: 0,
                elH: el.offsetHeight,
                elW: el.offsetWidth,
                elX: elX,
                elY: elY,
            };
            refState.current = newState;
            (paramsRef.current.onScratchStart || noop)(newState);
            setState(newState);
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('touchmove', onTouchMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchend', onTouchEnd);
        };
        var onMouseDown = function (event) {
            refScratching.current = true;
            startScratching(event.pageX, event.pageY);
        };
        var onTouchStart = function (event) {
            refScratching.current = true;
            startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        el.addEventListener('mousedown', onMouseDown);
        el.addEventListener('touchstart', onTouchStart);
        return function () {
            el.removeEventListener('mousedown', onMouseDown);
            el.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchend', onTouchEnd);
            if (refAnimationFrame.current)
                cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = null;
            refScratching.current = false;
            refState.current = { isScratching: false };
            setState(refState.current);
        };
    }, [el, disabled, paramsRef]);
    return [setEl, state];
};
var ScratchSensor = function (props) {
    var children = props.children, params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["children"]);
    var _a = useScratch(params), ref = _a[0], state = _a[1];
    var element = Object(react_universal_interface__WEBPACK_IMPORTED_MODULE_2__["render"])(props, state);
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(element, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, element.props), { ref: function (el) {
            if (element.props.ref) {
                if (typeof element.props.ref === 'object')
                    element.props.ref.current = el;
                if (typeof element.props.ref === 'function')
                    element.props.ref(el);
            }
            ref(el);
        } }));
};
/* harmony default export */ __webpack_exports__["default"] = (useScratch);


/***/ }),

/***/ "./node_modules/react-use/esm/useScroll.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useScroll.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");


var useScroll = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('`useScroll` expects a single ref argument.');
        }
    }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            ref.current.addEventListener('scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                ref.current.removeEventListener('scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useScroll);


/***/ }),

/***/ "./node_modules/react-use/esm/useScrollbarWidth.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useScrollbarWidth.js ***!
  \*********************************************************/
/*! exports provided: useScrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollbarWidth", function() { return useScrollbarWidth; });
/* harmony import */ var _xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xobotyi/scrollbar-width */ "./node_modules/@xobotyi/scrollbar-width/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useScrollbarWidth() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"])()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(Object(_xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"])());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}


/***/ }),

/***/ "./node_modules/react-use/esm/useScrolling.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useScrolling.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useScrolling = function (ref) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), scrolling = _a[0], setScrolling = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            ref.current.addEventListener('scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    ref.current.removeEventListener('scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
/* harmony default export */ __webpack_exports__["default"] = (useScrolling);


/***/ }),

/***/ "./node_modules/react-use/esm/useSearchParam.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useSearchParam.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var location = window.location;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        window.addEventListener('popstate', onChange);
        window.addEventListener('pushstate', onChange);
        window.addEventListener('replacestate', onChange);
        return function () {
            window.removeEventListener('popstate', onChange);
            window.removeEventListener('pushstate', onChange);
            window.removeEventListener('replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
/* harmony default export */ __webpack_exports__["default"] = (typeof window === 'object' ? useSearchParam : useSearchParamServer);


/***/ }),

/***/ "./node_modules/react-use/esm/useSessionStorage.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useSessionStorage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");


var useSessionStorage = function (key, initialValue, raw) {
    if (!_util__WEBPACK_IMPORTED_MODULE_1__["isClient"]) {
        return [initialValue, function () { }];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // cat throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);


/***/ }),

/***/ "./node_modules/react-use/esm/useSet.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useSet.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(prevSet), [item])); }); };
        var remove = function (item) { return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); }); };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ has: Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
/* harmony default export */ __webpack_exports__["default"] = (useSet);


/***/ }),

/***/ "./node_modules/react-use/esm/useSetState.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useSetState.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], set = _a[1];
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (patch) {
        set(function (prevState) { return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch); });
    }, [set]);
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useSetState);


/***/ }),

/***/ "./node_modules/react-use/esm/useShallowCompareEffect.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-use/esm/useShallowCompareEffect.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-shallow-equal */ "./node_modules/fast-shallow-equal/index.js");
/* harmony import */ var fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCustomCompareEffect */ "./node_modules/react-use/esm/useCustomCompareEffect.js");


var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return Object(fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__["equal"])(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    Object(_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(effect, deps, shallowEqualDepsList);
};
/* harmony default export */ __webpack_exports__["default"] = (useShallowCompareEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useSize.js":
/*!***********************************************!*\
  !*** ./node_modules/react-use/esm/useSize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");



var useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"], useEffect = react__WEBPACK_IMPORTED_MODULE_1__["useEffect"], useRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"];
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!_util__WEBPACK_IMPORTED_MODULE_2__["isClient"]) {
        return [typeof element === 'function' ? element({ width: width, height: height }) : element, { width: width, height: height }];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        windowToListenOn.addEventListener('resize', setSize);
        DRAF(setSize);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                iframe.removeEventListener('load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            iframe.addEventListener('load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                window.removeEventListener('resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(react__WEBPACK_IMPORTED_MODULE_1__, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([element, { style: style }], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(element.props.children))));
    return [sized, state];
};
/* harmony default export */ __webpack_exports__["default"] = (useSize);


/***/ }),

/***/ "./node_modules/react-use/esm/useSlider.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useSlider.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSetState */ "./node_modules/react-use/esm/useSetState.js");




var noop = function () { };
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var isSliding = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_3__["default"])({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    valueRef.current = state.value;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (_util__WEBPACK_IMPORTED_MODULE_1__["isClient"]) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || noop)(valueRef.current);
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mousemove', onMouseMove_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mouseup', stopScrubbing_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchmove', onTouchMove_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mousemove', onMouseMove_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mouseup', stopScrubbing_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchmove', onTouchMove_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || noop)(value);
                    }
                });
            };
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'mousedown', onMouseDown_1);
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'mousedown', onMouseDown_1);
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useSlider);


/***/ }),

/***/ "./node_modules/react-use/esm/useSpeech.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useSpeech.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMount */ "./node_modules/react-use/esm/useMount.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSetState */ "./node_modules/react-use/esm/useSetState.js");



var voices = typeof window === 'object' && typeof window.speechSynthesis === 'object' ? window.speechSynthesis.getVoices() : [];
var useSpeech = function (text, opts) {
    if (opts === void 0) { opts = {}; }
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_2__["default"])({
        isPlaying: false,
        lang: opts.lang || 'default',
        voice: opts.voice || voices[0],
        rate: opts.rate || 1,
        pitch: opts.pitch || 1,
        volume: opts.volume || 1,
    }), state = _a[0], setState = _a[1];
    var uterranceRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    Object(_useMount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var utterance = new SpeechSynthesisUtterance(text);
        opts.lang && (utterance.lang = opts.lang);
        opts.voice && (utterance.voice = opts.voice);
        utterance.rate = opts.rate || 1;
        utterance.pitch = opts.pitch || 1;
        utterance.volume = opts.volume || 1;
        utterance.onstart = function () { return setState({ isPlaying: true }); };
        utterance.onresume = function () { return setState({ isPlaying: true }); };
        utterance.onend = function () { return setState({ isPlaying: false }); };
        utterance.onpause = function () { return setState({ isPlaying: false }); };
        uterranceRef.current = utterance;
        window.speechSynthesis.speak(uterranceRef.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useSpeech);


/***/ }),

/***/ "./node_modules/react-use/esm/useStartTyping.js":
/*!******************************************************!*\
  !*** ./node_modules/react-use/esm/useStartTyping.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-use/esm/useIsomorphicLayoutEffect.js");

var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        document.addEventListener('keydown', keydown);
        return function () {
            document.removeEventListener('keydown', keydown);
        };
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useStartTyping);


/***/ }),

/***/ "./node_modules/react-use/esm/useStateList.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useStateList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStateList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "./node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/react-use/esm/useUpdateEffect.js");





function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var index = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    // If new state list is shorter that before - switch to the last element
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current = newIndex >= 0 ? newIndex % stateSet.length : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ state: stateSet[index.current], currentIndex: index.current }, actions);
}


/***/ }),

/***/ "./node_modules/react-use/esm/useStateValidator.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useStateValidator.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStateValidator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validator);
    var stateInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), validity = _a[0], setValidity = _a[1];
    var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        validate();
    }, [state]);
    return [validity, validate];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useStateWithHistory.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-use/esm/useStateWithHistory.js ***!
  \***********************************************************/
/*! exports provided: useStateWithHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateWithHistory", function() { return useStateWithHistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "./node_modules/react-use/esm/useFirstMountState.js");
/* harmony import */ var _util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/resolveHookState */ "./node_modules/react-use/esm/util/resolveHookState.js");



function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], innerSetState = _a[1];
    var history = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
        innerSetState(function (currentState) {
            newState = Object(_util_resolveHookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useThrottle.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useThrottle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");


var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value), state = _a[0], setState = _a[1];
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var nextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var hasNextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useThrottle);


/***/ }),

/***/ "./node_modules/react-use/esm/useThrottleFn.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useThrottleFn.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");


var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), state = _a[0], setState = _a[1];
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var nextArgs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useThrottleFn);


/***/ }),

/***/ "./node_modules/react-use/esm/useTimeout.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useTimeout.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTimeoutFn */ "./node_modules/react-use/esm/useTimeoutFn.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/react-use/esm/useUpdate.js");


function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(_useTimeoutFn__WEBPACK_IMPORTED_MODULE_0__["default"])(update, ms);
}


/***/ }),

/***/ "./node_modules/react-use/esm/useTimeoutFn.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useTimeoutFn.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeoutFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var callback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
    var isReady = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return ready.current; }, []);
    var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useTitle.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useTitle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(document.title);
    document.title = title;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
/* harmony default export */ __webpack_exports__["default"] = (typeof document !== 'undefined' ? useTitle : function (_title) { });


/***/ }),

/***/ "./node_modules/react-use/esm/useToggle.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useToggle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var toggleReducer = function (state, nextValue) { return (typeof nextValue === 'boolean' ? nextValue : !state); };
var useToggle = function (initialValue) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(toggleReducer, initialValue);
};
/* harmony default export */ __webpack_exports__["default"] = (useToggle);


/***/ }),

/***/ "./node_modules/react-use/esm/useTween.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useTween.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ts_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-easing */ "./node_modules/ts-easing/lib/index.js");
/* harmony import */ var ts_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_easing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRaf */ "./node_modules/react-use/esm/useRaf.js");


var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing__WEBPACK_IMPORTED_MODULE_0__["easing"][easingName];
    var t = Object(_useRaf__WEBPACK_IMPORTED_MODULE_1__["default"])(ms, delay);
    if (true) {
        if (typeof fn !== 'function') {
            console.error('useTween() expected "easingName" property to be a valid easing function name, like:' +
                '"' +
                Object.keys(ts_easing__WEBPACK_IMPORTED_MODULE_0__["easing"]).join('", "') +
                '".');
            console.trace();
            return 0;
        }
    }
    return fn(t);
};
/* harmony default export */ __webpack_exports__["default"] = (useTween);


/***/ }),

/***/ "./node_modules/react-use/esm/useUnmount.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useUnmount.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");


var useUnmount = function (fn) {
    var fnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () { return fnRef.current(); }; });
};
/* harmony default export */ __webpack_exports__["default"] = (useUnmount);


/***/ }),

/***/ "./node_modules/react-use/esm/useUnmountPromise.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use/esm/useUnmountPromise.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useUnmountPromise = function () {
    var refUnmounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
/* harmony default export */ __webpack_exports__["default"] = (useUnmountPromise);


/***/ }),

/***/ "./node_modules/react-use/esm/useUpdate.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useUpdate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var updateReducer = function (num) { return (num + 1) % 1000000; };
var useUpdate = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(updateReducer, 0), update = _a[1];
    return update;
};
/* harmony default export */ __webpack_exports__["default"] = (useUpdate);


/***/ }),

/***/ "./node_modules/react-use/esm/useUpdateEffect.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useUpdateEffect.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "./node_modules/react-use/esm/useFirstMountState.js");


var useUpdateEffect = function (effect, deps) {
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
/* harmony default export */ __webpack_exports__["default"] = (useUpdateEffect);


/***/ }),

/***/ "./node_modules/react-use/esm/useUpsert.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useUpsert.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpsert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useList */ "./node_modules/react-use/esm/useList.js");


/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = Object(_useList__WEBPACK_IMPORTED_MODULE_1__["default"])(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}


/***/ }),

/***/ "./node_modules/react-use/esm/useVibrate.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useVibrate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isVibrationApiSupported = typeof navigator === 'object' && 'vibrate' in navigator;
var useVibrateMock = function () { };
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
/* harmony default export */ __webpack_exports__["default"] = (isVibrationApiSupported ? useVibrate : useVibrateMock);


/***/ }),

/***/ "./node_modules/react-use/esm/useVideo.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useVideo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createHTMLMediaHook */ "./node_modules/react-use/esm/util/createHTMLMediaHook.js");

var useVideo = Object(_util_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__["default"])('video');
/* harmony default export */ __webpack_exports__["default"] = (useVideo);


/***/ }),

/***/ "./node_modules/react-use/esm/useWindowScroll.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useWindowScroll.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");



var useWindowScroll = function () {
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_2__["default"])({
        x: _util__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window.pageXOffset : 0,
        y: _util__WEBPACK_IMPORTED_MODULE_1__["isClient"] ? window.pageYOffset : 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function () {
            setState({
                x: window.pageXOffset,
                y: window.pageYOffset,
            });
        };
        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            window.removeEventListener('scroll', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowScroll);


/***/ }),

/***/ "./node_modules/react-use/esm/useWindowSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useWindowSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/react-use/esm/util.js");



var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        width: _util__WEBPACK_IMPORTED_MODULE_2__["isClient"] ? window.innerWidth : initialWidth,
        height: _util__WEBPACK_IMPORTED_MODULE_2__["isClient"] ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (_util__WEBPACK_IMPORTED_MODULE_2__["isClient"]) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            window.addEventListener('resize', handler_1);
            return function () {
                window.removeEventListener('resize', handler_1);
            };
        }
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);


/***/ }),

/***/ "./node_modules/react-use/esm/util.js":
/*!********************************************!*\
  !*** ./node_modules/react-use/esm/util.js ***!
  \********************************************/
/*! exports provided: isClient, on, off, isDeepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeepEqual", function() { return isDeepEqual; });
/* harmony import */ var fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/react */ "./node_modules/fast-deep-equal/react.js");
/* harmony import */ var fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0__);

var isClient = typeof window === 'object';
var on = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.addEventListener.apply(obj, args);
};
var off = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.removeEventListener.apply(obj, args);
};
var isDeepEqual = fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0___default.a;


/***/ }),

/***/ "./node_modules/react-use/esm/util/createHTMLMediaHook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-use/esm/util/createHTMLMediaHook.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-use/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useSetState */ "./node_modules/react-use/esm/useSetState.js");
/* harmony import */ var _parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseTimeRanges */ "./node_modules/react-use/esm/util/parseTimeRanges.js");





var createHTMLMediaHook = function (tag) { return function (elOrProps) {
    var element;
    var props;
    if (react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](elOrProps)) {
        element = elOrProps;
        props = element.props;
    }
    else {
        props = elOrProps;
    }
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_2__["default"])({
        buffered: [],
        time: 0,
        duration: 0,
        paused: true,
        muted: false,
        volume: 1,
    }), state = _a[0], setState = _a[1];
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var wrapEvent = function (userEvent, proxyEvent) {
        return function (event) {
            try {
                proxyEvent && proxyEvent(event);
            }
            finally {
                userEvent && userEvent(event);
            }
        };
    };
    var onPlay = function () { return setState({ paused: false }); };
    var onPause = function () { return setState({ paused: true }); };
    var onVolumeChange = function () {
        var el = ref.current;
        if (!el) {
            return;
        }
        setState({
            muted: el.muted,
            volume: el.volume,
        });
    };
    var onDurationChange = function () {
        var el = ref.current;
        if (!el) {
            return;
        }
        var duration = el.duration, buffered = el.buffered;
        setState({
            duration: duration,
            buffered: Object(_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__["default"])(buffered),
        });
    };
    var onTimeUpdate = function () {
        var el = ref.current;
        if (!el) {
            return;
        }
        setState({ time: el.currentTime });
    };
    var onProgress = function () {
        var el = ref.current;
        if (!el) {
            return;
        }
        setState({ buffered: Object(_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__["default"])(el.buffered) });
    };
    if (element) {
        element = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](element, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
    }
    else {
        element = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](tag, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
    }
    // Some browsers return `Promise` on `.play()` and may throw errors
    // if one tries to execute another `.play()` or `.pause()` while that
    // promise is resolving. So we prevent that with this lock.
    // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
    var lockPlay = false;
    var controls = {
        play: function () {
            var el = ref.current;
            if (!el) {
                return undefined;
            }
            if (!lockPlay) {
                var promise = el.play();
                var isPromise = typeof promise === 'object';
                if (isPromise) {
                    lockPlay = true;
                    var resetLock = function () {
                        lockPlay = false;
                    };
                    promise.then(resetLock, resetLock);
                }
                return promise;
            }
            return undefined;
        },
        pause: function () {
            var el = ref.current;
            if (el && !lockPlay) {
                return el.pause();
            }
        },
        seek: function (time) {
            var el = ref.current;
            if (!el || state.duration === undefined) {
                return;
            }
            time = Math.min(state.duration, Math.max(0, time));
            el.currentTime = time;
        },
        volume: function (volume) {
            var el = ref.current;
            if (!el) {
                return;
            }
            volume = Math.min(1, Math.max(0, volume));
            el.volume = volume;
            setState({ volume: volume });
        },
        mute: function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            el.muted = true;
        },
        unmute: function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            el.muted = false;
        },
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var el = ref.current;
        if (!el) {
            if (true) {
                if (tag === 'audio') {
                    console.error('useAudio() ref to <audio> element is empty at mount. ' +
                        'It seem you have not rendered the audio element, which it ' +
                        'returns as the first argument const [audio] = useAudio(...).');
                }
                else if (tag === 'video') {
                    console.error('useVideo() ref to <video> element is empty at mount. ' +
                        'It seem you have not rendered the video element, which it ' +
                        'returns as the first argument const [video] = useVideo(...).');
                }
            }
            return;
        }
        setState({
            volume: el.volume,
            muted: el.muted,
            paused: el.paused,
        });
        // Start media, if autoPlay requested.
        if (props.autoPlay && el.paused) {
            controls.play();
        }
    }, [props.src]);
    return [element, state, controls, ref];
}; };
/* harmony default export */ __webpack_exports__["default"] = (createHTMLMediaHook);


/***/ }),

/***/ "./node_modules/react-use/esm/util/parseTimeRanges.js":
/*!************************************************************!*\
  !*** ./node_modules/react-use/esm/util/parseTimeRanges.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var parseTimeRanges = function (ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
};
/* harmony default export */ __webpack_exports__["default"] = (parseTimeRanges);


/***/ }),

/***/ "./node_modules/react-use/esm/util/resolveHookState.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-use/esm/util/resolveHookState.js ***!
  \*************************************************************/
/*! exports provided: resolveHookState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHookState", function() { return resolveHookState; });
function resolveHookState(newState, currentState) {
    if (typeof newState === 'function') {
        return newState(currentState);
    }
    return newState;
}


/***/ }),

/***/ "./node_modules/react-use/node_modules/tslib/tslib.es6.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-use/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/screenfull/dist/screenfull.js":
/*!****************************************************!*\
  !*** ./node_modules/screenfull/dist/screenfull.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v5.0.2 - 2020-02-13
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element) {
			return this.isFullscreen ? this.exit() : this.request(element);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "./node_modules/set-harmonic-interval/lib/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/set-harmonic-interval/lib/index.esm.js ***!
  \*************************************************************/
/*! exports provided: clearHarmonicInterval, setHarmonicInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHarmonicInterval", function() { return clearHarmonicInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHarmonicInterval", function() { return setHarmonicInterval; });
var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};




/***/ }),

/***/ "./node_modules/throttle-debounce/index.umd.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/index.umd.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ "./node_modules/ts-easing/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ts-easing/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/pages/episode/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/episode/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_contexts_show_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_contexts/show.context */ "./src/_contexts/show.context.tsx");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\tjmak\\projects\\simfy_interview\\src\\pages\\episode\\[id].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var EpisodeComponent = function EpisodeComponent() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(src_contexts_show_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      ShowState = _useContext.ShowState,
      dispatchShow = _useContext.dispatchShow;

  Object(react_use__WEBPACK_IMPORTED_MODULE_6__["useEffectOnce"])(function () {
    setData(ShowState._embedded.episodes.find(function (x) {
      return x.id === id;
    }));
  });
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12",
    sx: {
      variant: "containers.card",
      bg: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    sx: {
      maxHeight: "250px",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-10",
    sx: {
      display: "grid",
      placeItems: "center start"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    sx: {
      display: "grid",
      placeItems: "center start",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, data.name)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    sx: {
      fontSize: "18px",
      display: "grid",
      placeItems: "center",
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "#f50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, "Rating: ", data))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(data.summary))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, data)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-12 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "magenta",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 41
    }
  }, "Network: ", data))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "green",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, "Status: ", data))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 33
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: "cyan",
    sx: {
      paddingY: "5px",
      display: "grid",
      placeItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 37
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    sx: {
      fontSize: "16px",
      marginBlockEnd: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 41
    }
  }, "Genre: ", data)))))))));
};

_s(EpisodeComponent, "Hp/btt6ipNjiY1u1X89/zFwf1Q0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_use__WEBPACK_IMPORTED_MODULE_6__["useEffectOnce"]];
});

_c = EpisodeComponent;
/* harmony default export */ __webpack_exports__["default"] = (EpisodeComponent);

var _c;

$RefreshReg$(_c, "EpisodeComponent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B4b2JvdHlpL3Njcm9sbGJhci13aWR0aC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9yZWFjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zhc3Qtc2hhbGxvdy1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmFuby1jc3MvYWRkb24vX19kZXZfXy93YXJuT25NaXNzaW5nRGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmFuby1jc3MvYWRkb24vY3Nzb20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uYW5vLWNzcy9hZGRvbi92Y3Nzb20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uYW5vLWNzcy9hZGRvbi92Y3Nzb20vY3NzVG9UcmVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmFuby1jc3MvYWRkb24vdmNzc29tL3JlbW92ZVJ1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uYW5vLWNzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVuaXZlcnNhbC1pbnRlcmZhY2UvbGliL2FkZENsYXNzRGVjb3JhdG9yU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVuaXZlcnNhbC1pbnRlcmZhY2UvbGliL2NyZWF0ZUVuaGFuY2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdW5pdmVyc2FsLWludGVyZmFjZS9saWIvaG9va1RvUmVuZGVyUHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVuaXZlcnNhbC1pbnRlcmZhY2UvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdW5pdmVyc2FsLWludGVyZmFjZS9saWIvcmVuZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdW5pdmVyc2FsLWludGVyZmFjZS9saWIvd3JhcEluU3RhdGVmdWxDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL2NyZWF0ZUJyZWFrcG9pbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL2NyZWF0ZUdsb2JhbFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9jcmVhdGVNZW1vLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9jcmVhdGVSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9jcmVhdGVSZWR1Y2VyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vY3JlYXRlU3RhdGVDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlQXN5bmMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUFzeW5jRm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUFzeW5jUmV0cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUF1ZGlvLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VCYXR0ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VCZWZvcmVVbmxvYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUJvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUNsaWNrQXdheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlQ29va2llLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VDb3B5VG9DbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUNzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlQ3VzdG9tQ29tcGFyZUVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlRGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZURlZXBDb21wYXJlRWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VEcm9wLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VEcm9wQXJlYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlRWZmZWN0T25jZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlRW5zdXJlZEZvcndhcmRlZFJlZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUV2ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VGYXZpY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VGaXJzdE1vdW50U3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUZ1bGxzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUdlb2xvY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VHZXRTZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUdldFNldFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VIYXJtb25pY0ludGVydmFsRm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUhhc2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUhvdmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VIb3ZlckRpcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VJZGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VJbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUludGVydmFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VLZXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUtleVByZXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VLZXlQcmVzc0V2ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUxpZmVjeWNsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUxvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUxvY2tCb2R5U2Nyb2xsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUxvbmdQcmVzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlTWFwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNZWFzdXJlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNZWRpYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlTWVkaWFEZXZpY2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNZWRpYXRlZFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNZXRob2RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNb3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU1vdW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNb3VudGVkU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU1vdXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNb3VzZUhvdmVyZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU1vdXNlV2hlZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU11bHRpU3RhdGVWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU5ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU51bWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlT3JpZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVBhZ2VMZWF2ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUGVybWlzc2lvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUHJldmlvdXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVByZXZpb3VzRGlzdGluY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVF1ZXVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VSYWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVJhZkxvb3AuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVJhZlN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VSZW5kZXJzQ291bnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVNjcmF0Y2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlU2Nyb2xsYmFyV2lkdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVNjcm9sbGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlU2VhcmNoUGFyYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVNlc3Npb25TdG9yYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VTZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVNldFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VTaGFsbG93Q29tcGFyZUVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlU2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlU2xpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VTcGVlY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVN0YXJ0VHlwaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VTdGF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVN0YXRlVmFsaWRhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VTdGF0ZVdpdGhIaXN0b3J5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VUaHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlVGhyb3R0bGVGbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlVGltZW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlVGltZW91dEZuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VUaXRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlVG9nZ2xlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VUd2Vlbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlVW5tb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlVW5tb3VudFByb21pc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlVXBkYXRlRWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VVcHNlcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVZpYnJhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVZpZGVvLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VXaW5kb3dTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVdpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3V0aWwvY3JlYXRlSFRNTE1lZGlhSG9vay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXRpbC9wYXJzZVRpbWVSYW5nZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3V0aWwvcmVzb2x2ZUhvb2tTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc2NyZWVuZnVsbC9kaXN0L3NjcmVlbmZ1bGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zZXQtaGFybW9uaWMtaW50ZXJ2YWwvbGliL2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2luZGV4LnVtZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RzLWVhc2luZy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9lcGlzb2RlLy50c3giXSwibmFtZXMiOlsiRXBpc29kZUNvbXBvbmVudCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlQ29udGV4dCIsIlNob3dDb250ZXh0IiwiU2hvd1N0YXRlIiwiZGlzcGF0Y2hTaG93IiwidXNlRWZmZWN0T25jZSIsIl9lbWJlZGRlZCIsImVwaXNvZGVzIiwiZmluZCIsIngiLCJ2YXJpYW50IiwiYmciLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduU2VsZiIsImltYWdlIiwib3JpZ2luYWwiLCJwbGFjZUl0ZW1zIiwibWFyZ2luQmxvY2tFbmQiLCJuYW1lIiwiZm9udFNpemUiLCJSZWFjdEh0bWxQYXJzZXIiLCJzdW1tYXJ5IiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciIsInBhZGRpbmdZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLGtCQUFrQix5Q0FBeUMsMkVBQTJFLHVEQUF1RCw4Q0FBOEMsK0pBQStKLG9CQUFvQix1RUFBdUUsK0JBQTJEOzs7Ozs7Ozs7Ozs7O0FDQW5oQjs7QUFFYjs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxLQUFLLElBQTBDO0FBQy9DLEVBQUUsb0NBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLLElBQTJCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQ0ksTUFBRSxFQUFFO0FBQ0FHLGNBQVEsRUFBRSxNQURWO0FBRUFGLG9CQUFjLEVBQUU7QUFGaEIsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU1hdEIsSUFOYixDQVJKLENBREosQ0FwQkosRUF1Q0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsd0NBQUQ7QUFDSSxTQUFLLEVBQUMsTUFEVjtBQUVJLE1BQUUsRUFBRTtBQUNBOEIsY0FBUSxFQUFFLEtBRFY7QUFFQWIsYUFBTyxFQUFFLE1BRlQ7QUFHQUksZ0JBQVUsRUFBRTtBQUhaLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQ0ksTUFBRSxFQUFFO0FBQ0FHLGNBQVEsRUFBRSxNQURWO0FBRUFGLG9CQUFjLEVBQUU7QUFGaEIsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU1ZdEIsSUFOWixDQVJKLENBREosQ0F2Q0osQ0FESixDQWpESixDQURKLENBaEJKLENBSkosQ0FESjtBQXlJSCxDQXZKRDs7R0FBTU4sZ0I7VUFDYUUscUQsRUFLZlUsdUQ7OztLQU5FWixnQjtBQXlKU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXBpc29kZS9baWRdLjlmZjI3NWU2OTdkYzNmNTYzZmQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1mdW5jdGlvbih0KXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuIDA7aWYoZG9jdW1lbnQuYm9keSYmKCFkb2N1bWVudC5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUpKXtpZighMCE9PXQmJlwibnVtYmVyXCI9PXR5cGVvZiBlLl9fY2FjaGUpcmV0dXJuIGUuX19jYWNoZTt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGQ9by5zdHlsZTtkLmRpc3BsYXk9XCJibG9ja1wiLGQucG9zaXRpb249XCJhYnNvbHV0ZVwiLGQud2lkdGg9XCIxMDBweFwiLGQuaGVpZ2h0PVwiMTAwcHhcIixkLmxlZnQ9XCItOTk5cHhcIixkLnRvcD1cIi05OTlweFwiLGQub3ZlcmZsb3c9XCJzY3JvbGxcIixkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShvLG51bGwpO3ZhciBuPW8uY2xpZW50V2lkdGg7aWYoMCE9PW4pcmV0dXJuIGUuX19jYWNoZT0xMDAtbixkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG8pLGUuX19jYWNoZTtkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG8pfX07ZXhwb3J0e2UgYXMgc2Nyb2xsYmFyV2lkdGh9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ID09PSAnX293bmVyJyAmJiBhLiQkdHlwZW9mKSB7XG4gICAgICAgIC8vIFJlYWN0LXNwZWNpZmljOiBhdm9pZCB0cmF2ZXJzaW5nIFJlYWN0IGVsZW1lbnRzJyBfb3duZXIuXG4gICAgICAgIC8vICBfb3duZXIgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgICAgICAvLyBhbmQgaXMgbm90IG5lZWRlZCB3aGVuIGNvbXBhcmluZyB0aGUgYWN0dWFsIGVsZW1lbnRzIChhbmQgbm90IHRoZWlyIG93bmVycylcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0cnVlIGlmIGJvdGggTmFOLCBmYWxzZSBvdGhlcndpc2VcbiAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xufTtcbiIsInZhciBrZXlMaXN0ID0gT2JqZWN0LmtleXM7XG5cbmV4cG9ydHMuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbCAoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBPYmplY3QpIHx8ICEoYiBpbnN0YW5jZW9mIE9iamVjdCkpIHJldHVybiBmYWxzZTtcblxuICB2YXIga2V5cyA9IGtleUxpc3QoYSk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIGlmICghKGtleXNbaV0gaW4gYikpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIGlmIChhW2tleXNbaV1dICE9PSBiW2tleXNbaV1dKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIGxlbmd0aCA9PT0ga2V5TGlzdChiKS5sZW5ndGg7XG59O1xuIiwiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXI7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAoIXJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcikge1xuXHRcdHZhciBPbGRDb29raWVzID0gd2luZG93LkNvb2tpZXM7XG5cdFx0dmFyIGFwaSA9IHdpbmRvdy5Db29raWVzID0gZmFjdG9yeSgpO1xuXHRcdGFwaS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LkNvb2tpZXMgPSBPbGRDb29raWVzO1xuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9O1xuXHR9XG59KGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gZXh0ZW5kICgpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWNvZGUgKHMpIHtcblx0XHRyZXR1cm4gcy5yZXBsYWNlKC8oJVswLTlBLVpdezJ9KSsvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSgpIHt9XG5cblx0XHRmdW5jdGlvbiBzZXQgKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0fSwgYXBpLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IG5ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBhdHRyaWJ1dGVzLmV4cGlyZXMgPyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlID9cblx0XHRcdFx0Y29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpIDpcblx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSlcblx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudClcblx0XHRcdFx0LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcblx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDb25zaWRlcnMgUkZDIDYyNjUgc2VjdGlvbiA1LjI6XG5cdFx0XHRcdC8vIC4uLlxuXHRcdFx0XHQvLyAzLiAgSWYgdGhlIHJlbWFpbmluZyB1bnBhcnNlZC1hdHRyaWJ1dGVzIGNvbnRhaW5zIGEgJXgzQiAoXCI7XCIpXG5cdFx0XHRcdC8vICAgICBjaGFyYWN0ZXI6XG5cdFx0XHRcdC8vIENvbnN1bWUgdGhlIGNoYXJhY3RlcnMgb2YgdGhlIHVucGFyc2VkLWF0dHJpYnV0ZXMgdXAgdG8sXG5cdFx0XHRcdC8vIG5vdCBpbmNsdWRpbmcsIHRoZSBmaXJzdCAleDNCIChcIjtcIikgY2hhcmFjdGVyLlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0uc3BsaXQoJzsnKVswXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0IChrZXksIGpzb24pIHtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGphciA9IHt9O1xuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG5cdFx0XHRcdGlmICghanNvbiAmJiBjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBkZWNvZGUocGFydHNbMF0pO1xuXHRcdFx0XHRcdGNvb2tpZSA9IChjb252ZXJ0ZXIucmVhZCB8fCBjb252ZXJ0ZXIpKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGRlY29kZShjb29raWUpO1xuXG5cdFx0XHRcdFx0aWYgKGpzb24pIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0amFyW25hbWVdID0gY29va2llO1xuXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ga2V5ID8gamFyW2tleV0gOiBqYXI7XG5cdFx0fVxuXG5cdFx0YXBpLnNldCA9IHNldDtcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGdldChrZXksIGZhbHNlIC8qIHJlYWQgYXMgcmF3ICovKTtcblx0XHR9O1xuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGdldChrZXksIHRydWUgLyogcmVhZCBhcyBqc29uICovKTtcblx0XHR9O1xuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRzZXQoa2V5LCAnJywgZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcblx0XHRcdFx0ZXhwaXJlczogLTFcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkud2l0aENvbnZlcnRlciA9IGluaXQ7XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9XG5cblx0cmV0dXJuIGluaXQoZnVuY3Rpb24gKCkge30pO1xufSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGtnTmFtZSA9ICduYW5vLWNzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2Fybk9uTWlzc2luZ0RlcGVuZGVuY2llcyAoYWRkb24sIHJlbmRlcmVyLCBkZXBzKSB7XG4gICAgdmFyIG1pc3NpbmcgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmFtZSA9IGRlcHNbaV07XG5cbiAgICAgICAgaWYgKCFyZW5kZXJlcltuYW1lXSkge1xuICAgICAgICAgICAgbWlzc2luZy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1pc3NpbmcubGVuZ3RoKSB7XG4gICAgICAgIHZhciBzdHIgPSAnQWRkb24gXCInICsgYWRkb24gKyAnXCIgaXMgbWlzc2luZyB0aGUgZm9sbG93aW5nIGRlcGVuZGVuY2llczonO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWlzc2luZy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgc3RyICs9ICdcXG4gcmVxdWlyZShcIicgKyBwa2dOYW1lICsgJy9hZGRvbi8nICsgbWlzc2luZ1tqXSArICdcIikuYWRkb24obmFubyk7JztcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuICAgIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuYWRkb24gPSBmdW5jdGlvbiAocmVuZGVyZXIpIHtcbiAgICAvLyBDU1NPTSBzdXBwb3J0IG9ubHkgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICBpZiAoIXJlbmRlcmVyLmNsaWVudCkgcmV0dXJuO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmVxdWlyZSgnLi9fX2Rldl9fL3dhcm5Pbk1pc3NpbmdEZXBlbmRlbmNpZXMnKSgnY3Nzb20nLCByZW5kZXJlciwgWydzaCddKTtcbiAgICB9XG5cbiAgICAvLyBTdHlsZSBzaGVldCBmb3IgbWVkaWEgcXVlcmllcy5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHJlbmRlcmVyLm1zaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJykpO1xuXG4gICAgcmVuZGVyZXIuY3JlYXRlUnVsZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJlbHVkZSkge1xuICAgICAgICB2YXIgcmF3Q3NzID0gc2VsZWN0b3IgKyAne30nO1xuICAgICAgICBpZiAocHJlbHVkZSkgcmF3Q3NzID0gcHJlbHVkZSArICd7JyArIHJhd0NzcyArICd9JztcbiAgICAgICAgdmFyIHNoZWV0ID0gcHJlbHVkZSA/IHJlbmRlcmVyLm1zaC5zaGVldCA6IHJlbmRlcmVyLnNoLnNoZWV0O1xuICAgICAgICB2YXIgaW5kZXggPSBzaGVldC5pbnNlcnRSdWxlKHJhd0Nzcywgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgdmFyIHJ1bGUgPSAoc2hlZXQuY3NzUnVsZXMgfHwgc2hlZXQucnVsZXMpW2luZGV4XTtcblxuICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIGBpbmRleGAgd2hlcmUgcnVsZSB3YXMgaW5zZXJ0ZWQgaW4gdGhlIHNoZWV0LiBUaGlzIGlzXG4gICAgICAgIC8vIG5lZWRlZCBmb3IgcnVsZSBkZWxldGlvbi5cbiAgICAgICAgcnVsZS5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmIChwcmVsdWRlKSB7XG4gICAgICAgICAgICAvLyBJZiBydWxlIGhhcyBtZWRpYSBxdWVyeSAoaXQgaGFzIHByZWx1ZGUpLCBtb3ZlIHN0eWxlIChDU1NTdHlsZURlY2xhcmF0aW9uKVxuICAgICAgICAgICAgLy8gb2JqZWN0IHRvIHRoZSBcInRvcFwiIHRvIG5vcm1hbGl6ZSBpdCB3aXRoIGEgcnVsZSB3aXRob3V0IHRoZSBtZWRpYVxuICAgICAgICAgICAgLy8gcXVlcnksIHNvIHRoYXQgYm90aCBydWxlcyBoYXZlIGAuc3R5bGVgIHByb3BlcnR5IGF2YWlsYWJsZS5cbiAgICAgICAgICAgIHZhciBzZWxlY3RvclJ1bGUgPSAocnVsZS5jc3NSdWxlcyB8fCBydWxlLnJ1bGVzKVswXTtcbiAgICAgICAgICAgIHJ1bGUuc3R5bGUgPSBzZWxlY3RvclJ1bGUuc3R5bGU7XG4gICAgICAgICAgICBydWxlLnN0eWxlTWFwID0gc2VsZWN0b3JSdWxlLnN0eWxlTWFwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZW1vdmVSdWxlID0gcmVxdWlyZSgnLi92Y3Nzb20vcmVtb3ZlUnVsZScpLnJlbW92ZVJ1bGU7XG5cbmV4cG9ydHMuYWRkb24gPSBmdW5jdGlvbiAocmVuZGVyZXIpIHtcbiAgICAvLyBWQ1NTT00gc3VwcG9ydCBvbmx5IGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgaWYgKCFyZW5kZXJlci5jbGllbnQpIHJldHVybjtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJlcXVpcmUoJy4vX19kZXZfXy93YXJuT25NaXNzaW5nRGVwZW5kZW5jaWVzJykoJ2Nzc29tJywgcmVuZGVyZXIsIFsnY3JlYXRlUnVsZSddKTsgLy8gY3Nzb21cbiAgICB9XG5cbiAgICB2YXIga2ViYWIgPSByZW5kZXJlci5rZWJhYjtcblxuICAgIGZ1bmN0aW9uIFZSdWxlIChzZWxlY3RvciwgcHJlbHVkZSkge1xuICAgICAgICB0aGlzLnJ1bGUgPSByZW5kZXJlci5jcmVhdGVSdWxlKHNlbGVjdG9yLCBwcmVsdWRlKTtcbiAgICAgICAgdGhpcy5kZWNsID0ge307XG4gICAgfVxuICAgIFZSdWxlLnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKG5ld0RlY2wpIHtcbiAgICAgICAgdmFyIG9sZERlY2wgPSB0aGlzLmRlY2w7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMucnVsZS5zdHlsZTtcbiAgICAgICAgdmFyIHByb3BlcnR5O1xuICAgICAgICBmb3IgKHByb3BlcnR5IGluIG9sZERlY2wpXG4gICAgICAgICAgICBpZiAobmV3RGVjbFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gbmV3RGVjbClcbiAgICAgICAgICAgIGlmIChuZXdEZWNsW3Byb3BlcnR5XSAhPT0gb2xkRGVjbFtwcm9wZXJ0eV0pXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkoa2ViYWIocHJvcGVydHkpLCBuZXdEZWNsW3Byb3BlcnR5XSk7XG4gICAgICAgIHRoaXMuZGVjbCA9IG5ld0RlY2w7XG4gICAgfTtcbiAgICBWUnVsZS5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVSdWxlKHRoaXMucnVsZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIFZTaGVldCAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB7XG4gICAgICAgICAqICAgJzxhdC1ydWxlLXByZWx1ZGU+Jzoge1xuICAgICAgICAgKiAgICAgJzxzZWxlY3Rvcj4nOiB7XG4gICAgICAgICAqICAgICAgIGNvbG9yOiAncmVkXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqICAgfVxuICAgICAgICAgKiB9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyZWUgPSB7fTtcbiAgICB9XG4gICAgVlNoZWV0LnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKG5ld1RyZWUpIHtcbiAgICAgICAgdmFyIG9sZFRyZWUgPSB0aGlzLnRyZWU7XG5cbiAgICAgICAgLy8gUmVtb3ZlIG1lZGlhIHF1ZXJpZXMgbm90IHByZXNlbnQgaW4gbmV3IHRyZWUuXG4gICAgICAgIGZvciAodmFyIHByZWx1ZGUgaW4gb2xkVHJlZSkge1xuICAgICAgICAgICAgaWYgKG5ld1RyZWVbcHJlbHVkZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IG9sZFRyZWVbcHJlbHVkZV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgc2VsZWN0b3IgaW4gcnVsZXMpXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzW3NlbGVjdG9yXS5kZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIHByZWx1ZGUgaW4gbmV3VHJlZSkge1xuICAgICAgICAgICAgaWYgKG9sZFRyZWVbcHJlbHVkZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIFdob2xlIG1lZGlhIHF1ZXJ5IGlzIG5ldy5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBuZXdUcmVlW3ByZWx1ZGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBydWxlID0gbmV3IFZSdWxlKHNlbGVjdG9yLCBwcmVsdWRlKTtcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5kaWZmKG5ld1RyZWVbcHJlbHVkZV1bc2VsZWN0b3JdKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJlZVtwcmVsdWRlXVtzZWxlY3Rvcl0gPSBydWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT2xkIHRyZWUgYWxyZWFkeSBoYXMgcnVsZXMgd2l0aCB0aGlzIG1lZGlhIHF1ZXJ5LlxuICAgICAgICAgICAgICAgIHZhciBvbGRSdWxlcyA9IG9sZFRyZWVbcHJlbHVkZV07XG4gICAgICAgICAgICAgICAgdmFyIG5ld1J1bGVzID0gbmV3VHJlZVtwcmVsdWRlXTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBydWxlcyBub3QgcHJlc2VudCBpbiBuZXcgdHJlZS5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBvbGRSdWxlcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdSdWxlc1tzZWxlY3Rvcl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRSdWxlc1tzZWxlY3Rvcl0uZGVsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBuZXcgcnVsZXMuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgc2VsZWN0b3IgaW4gbmV3UnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1bGUgPSBvbGRSdWxlc1tzZWxlY3Rvcl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlLmRpZmYobmV3UnVsZXNbc2VsZWN0b3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1J1bGVzW3NlbGVjdG9yXSA9IHJ1bGU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlID0gbmV3IFZSdWxlKHNlbGVjdG9yLCBwcmVsdWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuZGlmZihuZXdSdWxlc1tzZWxlY3Rvcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UnVsZXNbc2VsZWN0b3JdID0gcnVsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJlZSA9IG5ld1RyZWU7XG4gICAgfTtcblxuICAgIHJlbmRlcmVyLlZSdWxlID0gVlJ1bGU7XG4gICAgcmVuZGVyZXIuVlNoZWV0ID0gVlNoZWV0O1xufTtcbiIsImZ1bmN0aW9uIGNzc1RvVHJlZSAodHJlZSwgY3NzLCBzZWxlY3RvciwgcHJlbHVkZSkge1xuICAgIHZhciBkZWNsYXJhdGlvbnMgPSB7fTtcbiAgICB2YXIgaGFzRGVjbGFyYXRpb25zID0gZmFsc2U7XG4gICAgdmFyIGtleSwgdmFsdWU7XG5cbiAgICBmb3IgKGtleSBpbiBjc3MpIHtcbiAgICAgICAgdmFsdWUgPSBjc3Nba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGhhc0RlY2xhcmF0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICBkZWNsYXJhdGlvbnNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc0RlY2xhcmF0aW9ucykge1xuICAgICAgICBpZiAoIXRyZWVbcHJlbHVkZV0pIHRyZWVbcHJlbHVkZV0gPSB7fTtcbiAgICAgICAgdHJlZVtwcmVsdWRlXVtzZWxlY3Rvcl0gPSBkZWNsYXJhdGlvbnM7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gY3NzKSB7XG4gICAgICAgIHZhbHVlID0gY3NzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoa2V5WzBdID09PSAnQCcpIHtcbiAgICAgICAgICAgICAgICBjc3NUb1RyZWUodHJlZSwgdmFsdWUsIHNlbGVjdG9yLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzQ3VycmVudFN5bWJvbCA9IGtleS5pbmRleE9mKCcmJykgPiAtMTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3JQYXJ0cyA9IHNlbGVjdG9yLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0N1cnJlbnRTeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RvclBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvclBhcnRzW2ldID0ga2V5LnJlcGxhY2UoLyYvZywgc2VsZWN0b3JQYXJ0c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdG9yUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yUGFydHNbaV0gPSBzZWxlY3RvclBhcnRzW2ldICsgJyAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNzc1RvVHJlZSh0cmVlLCB2YWx1ZSwgc2VsZWN0b3JQYXJ0cy5qb2luKCcsJyksIHByZWx1ZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0cy5jc3NUb1RyZWUgPSBjc3NUb1RyZWU7XG4iLCJmdW5jdGlvbiByZW1vdmVSdWxlIChydWxlKSB7XG4gICAgdmFyIG1heEluZGV4ID0gcnVsZS5pbmRleDtcbiAgICB2YXIgc2ggPSBydWxlLnBhcmVudFN0eWxlU2hlZXQ7XG4gICAgdmFyIHJ1bGVzID0gc2guY3NzUnVsZXMgfHwgc2gucnVsZXM7XG4gICAgbWF4SW5kZXggPSBNYXRoLm1heChtYXhJbmRleCwgcnVsZXMubGVuZ3RoIC0gMSk7XG4gICAgd2hpbGUgKG1heEluZGV4ID49IDApIHtcbiAgICAgICAgaWYgKHJ1bGVzW21heEluZGV4XSA9PT0gcnVsZSkge1xuICAgICAgICAgICAgc2guZGVsZXRlUnVsZShtYXhJbmRleCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBtYXhJbmRleC0tO1xuICAgIH1cbn1cblxuZXhwb3J0cy5yZW1vdmVSdWxlID0gcmVtb3ZlUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEtFQkFCX1JFR0VYID0gL1tBLVpdL2c7XG5cbnZhciBoYXNoID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBoYXNoID0gNTM4MSwgaSA9IHN0ci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSkgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoLS1pKTtcblxuICAgIHJldHVybiAnXycgKyAoaGFzaCA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufTtcblxuZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIHZhciBhc3NpZ24gPSBjb25maWcuYXNzaWduIHx8IE9iamVjdC5hc3NpZ247XG4gICAgdmFyIGNsaWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgYXJlIHJlYWxseSBpbiBicm93c2VyIGVudmlyb25tZW50LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgICAgIGlmICgodHlwZW9mIGRvY3VtZW50ICE9PSAnb2JqZWN0JykgfHwgIWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdIVE1MJykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnbmFuby1jc3MgZGV0ZWN0ZWQgYnJvd3NlciBlbnZpcm9ubWVudCBiZWNhdXNlIG9mIFwid2luZG93XCIgZ2xvYmFsLCBidXQgJyArXG4gICAgICAgICAgICAgICAgICAgICdcImRvY3VtZW50XCIgZ2xvYmFsIHNlZW1zIHRvIGJlIGRlZmVjdGl2ZS4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZW5kZXJlciA9IGFzc2lnbih7XG4gICAgICAgIHJhdzogJycsXG4gICAgICAgIHBmeDogJ18nLFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgYXNzaWduOiBhc3NpZ24sXG4gICAgICAgIHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnksXG4gICAgICAgIGtlYmFiOiBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AucmVwbGFjZShLRUJBQl9SRUdFWCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlY2w6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBrZXkgPSByZW5kZXJlci5rZWJhYihrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIGtleSArICc6JyArIHZhbHVlICsgJzsnO1xuICAgICAgICB9LFxuICAgICAgICBoYXNoOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzaChyZW5kZXJlci5zdHJpbmdpZnkob2JqKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdG9yOiBmdW5jdGlvbiAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudCArIChzZWxlY3RvclswXSA9PT0gJzonID8gJycgIDogJyAnKSArIHNlbGVjdG9yO1xuICAgICAgICB9LFxuICAgICAgICBwdXRSYXc6IGZ1bmN0aW9uIChyYXdDc3NSdWxlKSB7XG4gICAgICAgICAgICByZW5kZXJlci5yYXcgKz0gcmF3Q3NzUnVsZTtcbiAgICAgICAgfSxcbiAgICB9LCBjb25maWcpO1xuXG4gICAgaWYgKHJlbmRlcmVyLmNsaWVudCkge1xuICAgICAgICBpZiAoIXJlbmRlcmVyLnNoKVxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChyZW5kZXJlci5zaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJykpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZW5kZXJlci5zaC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFuby1jc3MtZGV2JywgJycpO1xuXG4gICAgICAgICAgICAvLyBUZXN0IHN0eWxlIHNoZWV0IHVzZWQgaW4gREVWIG1vZGUgdG8gdGVzdCBpZiAuaW5zZXRSdWxlKCkgd291bGQgdGhyb3cuXG4gICAgICAgICAgICByZW5kZXJlci5zaFRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2hUZXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW5vLWNzcy1kZXYtdGVzdHMnLCAnJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHJlbmRlcmVyLnNoVGVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJlci5wdXRSYXcgPSBmdW5jdGlvbiAocmF3Q3NzUnVsZSkge1xuICAgICAgICAgICAgLy8gLmluc2VydFJ1bGUoKSBpcyBmYXN0ZXIgdGhhbiAuYXBwZW5kQ2hpbGQoKSwgdGhhdCdzIHdoeSB3ZSB1c2UgaXQgaW4gUFJPRC5cbiAgICAgICAgICAgIC8vIEJ1dCBDU1MgaW5qZWN0ZWQgdXNpbmcgLmluc2VydFJ1bGUoKSBpcyBub3QgZGlzcGxheWVkIGluIENocm9tZSBEZXZ0b29scyxcbiAgICAgICAgICAgIC8vIHRoYXQncyB3aHkgd2UgdXNlIC5hcHBlbmRDaGlsZCBpbiBERVYuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBzaGVldCA9IHJlbmRlcmVyLnNoLnNoZWV0O1xuXG4gICAgICAgICAgICAgICAgLy8gVW5rbm93biBwc2V1ZG8tc2VsZWN0b3JzIHdpbGwgdGhyb3csIHRoaXMgdHJ5L2NhdGNoIHN3YWxsb3dzIGFsbCBlcnJvcnMuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShyYXdDc3NSdWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIC5pbnNlcnRSdWxlKCkgd29ya3MgaW4gZGV2IG1vZGUuIFVua25vd24gcHNldWRvLXNlbGVjdG9ycyB3aWxsIHRocm93IHdoZW5cbiAgICAgICAgICAgICAgICAvLyAuaW5zZXJ0UnVsZSgpIGlzIHVzZWQsIGJ1dCAuYXBwZW5kQ2hpbGQoKSB3aWxsIG5vdCB0aHJvdy5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5zaFRlc3Quc2hlZXQuaW5zZXJ0UnVsZShyYXdDc3NSdWxlLCByZW5kZXJlci5zaFRlc3Quc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnZlcmJvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHByZXR0eS1wcmludGVkIENTUyBmb3IgZGV2IG1vZGUuXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuc2guYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmF3Q3NzUnVsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcmVyLnB1dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGVjbHMsIGF0cnVsZSkge1xuICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgIHZhciBwcm9wLCB2YWx1ZTtcbiAgICAgICAgdmFyIHBvc3Rwb25lZCA9IFtdO1xuXG4gICAgICAgIGZvciAocHJvcCBpbiBkZWNscykge1xuICAgICAgICAgICAgdmFsdWUgPSBkZWNsc1twcm9wXTtcblxuICAgICAgICAgICAgaWYgKCh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgICAgIHBvc3Rwb25lZC5wdXNoKHByb3ApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmICFyZW5kZXJlci5zb3VyY2VtYXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnICAgICcgKyByZW5kZXJlci5kZWNsKHByb3AsIHZhbHVlLCBzZWxlY3RvciwgYXRydWxlKSArICdcXG4nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSByZW5kZXJlci5kZWNsKHByb3AsIHZhbHVlLCBzZWxlY3RvciwgYXRydWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmICFyZW5kZXJlci5zb3VyY2VtYXBzKSB7XG4gICAgICAgICAgICAgICAgc3RyID0gJ1xcbicgKyBzZWxlY3RvciArICcge1xcbicgKyBzdHIgKyAnfVxcbic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ciA9IHNlbGVjdG9yICsgJ3snICsgc3RyICsgJ30nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyZXIucHV0UmF3KGF0cnVsZSA/IGF0cnVsZSArICd7JyArIHN0ciArICd9JyA6IHN0cik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc3Rwb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHJvcCA9IHBvc3Rwb25lZFtpXTtcblxuICAgICAgICAgICAgaWYgKHByb3BbMF0gPT09IFwiQFwiICYmIHByb3AgIT09IFwiQGZvbnQtZmFjZVwiKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucHV0QXQoc2VsZWN0b3IsIGRlY2xzW3Byb3BdLCBwcm9wKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucHV0KHJlbmRlcmVyLnNlbGVjdG9yKHNlbGVjdG9yLCBwcm9wKSwgZGVjbHNbcHJvcF0sIGF0cnVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyZXIucHV0QXQgPSByZW5kZXJlci5wdXQ7XG5cbiAgICByZXR1cm4gcmVuZGVyZXI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciB3cmFwSW5TdGF0ZWZ1bENvbXBvbmVudF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vd3JhcEluU3RhdGVmdWxDb21wb25lbnRcIikpO1xudmFyIGFkZENsYXNzRGVjb3JhdG9yU3VwcG9ydCA9IGZ1bmN0aW9uIChDb21wKSB7XG4gICAgdmFyIGlzU0ZDID0gIUNvbXAucHJvdG90eXBlO1xuICAgIHJldHVybiAhaXNTRkMgPyBDb21wIDogd3JhcEluU3RhdGVmdWxDb21wb25lbnRfMS5kZWZhdWx0KENvbXApO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZENsYXNzRGVjb3JhdG9yU3VwcG9ydDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZENsYXNzRGVjb3JhdG9yU3VwcG9ydC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGl2V3JhcHBlciA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFJlYWN0ID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBhZGRDbGFzc0RlY29yYXRvclN1cHBvcnRfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FkZENsYXNzRGVjb3JhdG9yU3VwcG9ydFwiKSk7XG52YXIgaCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQ7XG52YXIgbm9XcmFwID0gZnVuY3Rpb24gKENvbXAsIHByb3BOYW1lLCBwcm9wcywgc3RhdGUpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIGgoQ29tcCwgcHJvcE5hbWUgPyB0c2xpYl8xLl9fYXNzaWduKChfYSA9IHt9LCBfYVtwcm9wTmFtZV0gPSBzdGF0ZSwgX2EpLCBwcm9wcykgOiB0c2xpYl8xLl9fYXNzaWduKHRzbGliXzEuX19hc3NpZ24oe30sIHN0YXRlKSwgcHJvcHMpKTtcbn07XG5leHBvcnRzLmRpdldyYXBwZXIgPSBmdW5jdGlvbiAoQ29tcCwgcHJvcE5hbWUsIHByb3BzLCBzdGF0ZSkge1xuICAgIHJldHVybiBoKCdkaXYnLCBudWxsLCBub1dyYXAoQ29tcCwgcHJvcE5hbWUsIHByb3BzLCBzdGF0ZSkpO1xufTtcbnZhciBjcmVhdGVFbmhhbmNlciA9IGZ1bmN0aW9uIChGYWNjLCBwcm9wLCB3cmFwcGVyKSB7XG4gICAgaWYgKHdyYXBwZXIgPT09IHZvaWQgMCkgeyB3cmFwcGVyID0gbm9XcmFwOyB9XG4gICAgdmFyIGVuaGFuY2VyID0gZnVuY3Rpb24gKENvbXAsIHByb3BOYW1lLCBmYWNjUHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSB2b2lkIDApIHsgcHJvcE5hbWUgPSBwcm9wOyB9XG4gICAgICAgIGlmIChmYWNjUHJvcHMgPT09IHZvaWQgMCkgeyBmYWNjUHJvcHMgPSBudWxsOyB9XG4gICAgICAgIHZhciBpc0NsYXNzRGVjb3JhdG9yTWV0aG9kQ2FsbCA9IHR5cGVvZiBDb21wID09PSAnc3RyaW5nJztcbiAgICAgICAgaWYgKGlzQ2xhc3NEZWNvcmF0b3JNZXRob2RDYWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKEtsYXNzKSB7IHJldHVybiBlbmhhbmNlcihLbGFzcywgQ29tcCB8fCBwcm9wLCBwcm9wTmFtZSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIEVuaGFuY2VkID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gaChGYWNjLCBmYWNjUHJvcHMsIGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gd3JhcHBlcihDb21wLCBwcm9wTmFtZSwgcHJvcHMsIHN0YXRlKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBFbmhhbmNlZC5kaXNwbGF5TmFtZSA9IChGYWNjLmRpc3BsYXlOYW1lIHx8IEZhY2MubmFtZSkgKyBcIihcIiArIChDb21wLmRpc3BsYXlOYW1lIHx8IENvbXAubmFtZSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNDbGFzc0RlY29yYXRvck1ldGhvZENhbGwgPyBhZGRDbGFzc0RlY29yYXRvclN1cHBvcnRfMS5kZWZhdWx0KEVuaGFuY2VkKSA6IEVuaGFuY2VkO1xuICAgIH07XG4gICAgcmV0dXJuIGVuaGFuY2VyO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVuaGFuY2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlRW5oYW5jZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciByZW5kZXJfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlclwiKSk7XG52YXIgZGVmYXVsdE1hcFByb3BzVG9BcmdzID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBbcHJvcHNdOyB9O1xudmFyIGhvb2tUb1JlbmRlclByb3AgPSBmdW5jdGlvbiAoaG9vaywgbWFwUHJvcHNUb0FyZ3MpIHtcbiAgICBpZiAobWFwUHJvcHNUb0FyZ3MgPT09IHZvaWQgMCkgeyBtYXBQcm9wc1RvQXJncyA9IGRlZmF1bHRNYXBQcm9wc1RvQXJnczsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIHJlbmRlcl8xLmRlZmF1bHQocHJvcHMsIGhvb2suYXBwbHkodm9pZCAwLCBtYXBQcm9wc1RvQXJncyhwcm9wcykpKTsgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBob29rVG9SZW5kZXJQcm9wO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va1RvUmVuZGVyUHJvcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaG9va1RvUmVuZGVyUHJvcCA9IGV4cG9ydHMuY3JlYXRlRW5oYW5jZXIgPSBleHBvcnRzLnJlbmRlciA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIHJlbmRlcl8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyXCIpKTtcbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyXzEuZGVmYXVsdDtcbnZhciBjcmVhdGVFbmhhbmNlcl8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlRW5oYW5jZXJcIikpO1xuZXhwb3J0cy5jcmVhdGVFbmhhbmNlciA9IGNyZWF0ZUVuaGFuY2VyXzEuZGVmYXVsdDtcbnZhciBob29rVG9SZW5kZXJQcm9wXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ob29rVG9SZW5kZXJQcm9wXCIpKTtcbmV4cG9ydHMuaG9va1RvUmVuZGVyUHJvcCA9IGhvb2tUb1JlbmRlclByb3BfMS5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGlzUmVhY3QxNlBsdXMgPSBwYXJzZUludChyZWFjdF8xLnZlcnNpb24uc3Vic3RyKDAsIHJlYWN0XzEudmVyc2lvbi5pbmRleE9mKCcuJykpKSA+IDE1O1xudmFyIGlzRm4gPSBmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJzsgfTtcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAocHJvcHMsIGRhdGEpIHtcbiAgICB2YXIgbW9yZSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG1vcmVbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZW5kZXJDaGlsZHJlbihwcm9wcywgZGF0YSkgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHByb3BzIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hpbGRyZW5fMSA9IHByb3BzLmNoaWxkcmVuLCByZW5kZXJfMSA9IHByb3BzLnJlbmRlcjtcbiAgICAgICAgaWYgKGlzRm4oY2hpbGRyZW5fMSkgJiYgaXNGbihyZW5kZXJfMSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQm90aCBcInJlbmRlclwiIGFuZCBcImNoaWxkcmVuXCIgYXJlIHNwZWNpZmllZCBmb3IgaW4gYSB1bml2ZXJzYWwgaW50ZXJmYWNlIGNvbXBvbmVudC4gJyArXG4gICAgICAgICAgICAgICAgJ0NoaWxkcmVuIHdpbGwgYmUgdXNlZC4nKTtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuaXZlcnNhbCBjb21wb25lbnQgaW50ZXJmYWNlIG5vcm1hbGx5IGV4cGVjdHMgZGF0YSB0byBiZSBhbiBvYmplY3QsICcgK1xuICAgICAgICAgICAgICAgIChcIlxcXCJcIiArIHR5cGVvZiBkYXRhICsgXCJcXFwiIHJlY2VpdmVkLlwiKSk7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlbmRlciA9IHByb3BzLnJlbmRlciwgX2EgPSBwcm9wcy5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYSA9PT0gdm9pZCAwID8gcmVuZGVyIDogX2EsIGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCwgX2IgPSBwcm9wcy5jb21wLCBjb21wID0gX2IgPT09IHZvaWQgMCA/IGNvbXBvbmVudCA6IF9iO1xuICAgIGlmIChpc0ZuKGNoaWxkcmVuKSlcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmFwcGx5KHZvaWQgMCwgdHNsaWJfMS5fX3NwcmVhZEFycmF5cyhbZGF0YV0sIG1vcmUpKTtcbiAgICBpZiAoY29tcCkge1xuICAgICAgICByZXR1cm4gcmVhY3RfMS5jcmVhdGVFbGVtZW50KGNvbXAsIGRhdGEpO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgcmV0dXJuIGlzUmVhY3QxNlBsdXMgPyBjaGlsZHJlbiA6IHJlYWN0XzEuY3JlYXRlRWxlbWVudC5hcHBseSh2b2lkIDAsIHRzbGliXzEuX19zcHJlYWRBcnJheXMoWydkaXYnLCBudWxsXSwgY2hpbGRyZW4pKTtcbiAgICBpZiAoY2hpbGRyZW4gJiYgKGNoaWxkcmVuIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbi50eXBlIHx8ICgodHlwZW9mIGNoaWxkcmVuLnR5cGUgIT09ICdzdHJpbmcnKSAmJiAodHlwZW9mIGNoaWxkcmVuLnR5cGUgIT09ICdmdW5jdGlvbicpICYmICh0eXBlb2YgY2hpbGRyZW4udHlwZSAhPT0gJ3N5bWJvbCcpKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5pdmVyc2FsIGNvbXBvbmVudCBpbnRlcmZhY2UgcmVjZWl2ZWQgb2JqZWN0IGFzIGNoaWxkcmVuLCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2V4cGVjdGVkIFJlYWN0IGVsZW1lbnQsIGJ1dCByZWNlaXZlZCB1bmV4cGVjdGVkIFJlYWN0IFwidHlwZVwiLicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4udHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzEuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBPYmplY3QuYXNzaWduKHt9LCBjaGlsZHJlbi5wcm9wcywgZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbi50eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIE9iamVjdC5hc3NpZ24oe30sIGNoaWxkcmVuLnByb3BzLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuIHx8IG51bGw7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVuZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgUmVhY3QgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHdyYXBJblN0YXRlZnVsQ29tcG9uZW50ID0gZnVuY3Rpb24gKENvbXApIHtcbiAgICB2YXIgRGVjb3JhdGVkID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgdHNsaWJfMS5fX2V4dGVuZHMoY2xhc3NfMSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29tcCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY2xhc3NfMTtcbiAgICB9KFJlYWN0LkNvbXBvbmVudCkpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIERlY29yYXRlZC5kaXNwbGF5TmFtZSA9IFwiRGVjb3JhdGVkKFwiICsgKENvbXAuZGlzcGxheU5hbWUgfHwgQ29tcC5uYW1lKSArIFwiKVwiO1xuICAgIH1cbiAgICByZXR1cm4gRGVjb3JhdGVkO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdyYXBJblN0YXRlZnVsQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JhcEluU3RhdGVmdWxDb21wb25lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbnZhciBjcmVhdGVCcmVha3BvaW50ID0gZnVuY3Rpb24gKGJyZWFrcG9pbnRzKSB7XG4gICAgaWYgKGJyZWFrcG9pbnRzID09PSB2b2lkIDApIHsgYnJlYWtwb2ludHMgPSB7IGxhcHRvcEw6IDE0NDAsIGxhcHRvcDogMTAyNCwgdGFibGV0OiA3NjggfTsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHVzZVN0YXRlKDApLCBzY3JlZW4gPSBfYVswXSwgc2V0U2NyZWVuID0gX2FbMV07XG4gICAgICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2V0U2lkZVNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRTY3JlZW4od2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFNpZGVTY3JlZW4oKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRTaWRlU2NyZWVuKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFNpZGVTY3JlZW4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzb3J0ZWRCcmVha3BvaW50cyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmVudHJpZXMoYnJlYWtwb2ludHMpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIChhWzFdID49IGJbMV0gPyAxIDogLTEpOyB9KTsgfSwgW1xuICAgICAgICAgICAgYnJlYWtwb2ludHMsXG4gICAgICAgIF0pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gc29ydGVkQnJlYWtwb2ludHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCB3aWR0aCA9IF9hWzFdO1xuICAgICAgICAgICAgaWYgKHNjcmVlbiA+PSB3aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc29ydGVkQnJlYWtwb2ludHNbMF1bMF0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnJlYWtwb2ludDtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUVmZmVjdE9uY2UgZnJvbSAnLi91c2VFZmZlY3RPbmNlJztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2xvYmFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdmFyIHN0b3JlID0ge1xuICAgICAgICBzdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgICAgICBzZXRTdGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICBzdG9yZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgc3RvcmUuc2V0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzZXR0ZXIpIHsgcmV0dXJuIHNldHRlcihzdG9yZS5zdGF0ZSk7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXR0ZXJzOiBbXSxcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHVzZVN0YXRlKHN0b3JlLnN0YXRlKSwgZ2xvYmFsU3RhdGUgPSBfYVswXSwgc3RhdGVTZXR0ZXIgPSBfYVsxXTtcbiAgICAgICAgdXNlRWZmZWN0T25jZShmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdG9yZS5zZXR0ZXJzID0gc3RvcmUuc2V0dGVycy5maWx0ZXIoZnVuY3Rpb24gKHNldHRlcikgeyByZXR1cm4gc2V0dGVyICE9PSBzdGF0ZVNldHRlcjsgfSk7XG4gICAgICAgIH07IH0pO1xuICAgICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc3RvcmUuc2V0dGVycy5pbmNsdWRlcyhzdGF0ZVNldHRlcikpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXR0ZXJzLnB1c2goc3RhdGVTZXR0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtnbG9iYWxTdGF0ZSwgc3RvcmUuc2V0U3RhdGVdO1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdGF0ZTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG52YXIgY3JlYXRlTWVtbyA9IGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9LCBhcmdzKTtcbn07IH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW1vO1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVXBkYXRlRWZmZWN0IGZyb20gJy4vdXNlVXBkYXRlRWZmZWN0JztcbmZ1bmN0aW9uIGNvbXBvc2VNaWRkbGV3YXJlKGNoYWluKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0LCBkaXNwYXRjaCkge1xuICAgICAgICByZXR1cm4gY2hhaW4ucmVkdWNlUmlnaHQoZnVuY3Rpb24gKHJlcywgbWlkZGxld2FyZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUoY29udGV4dCkocmVzKTtcbiAgICAgICAgfSwgZGlzcGF0Y2gpO1xuICAgIH07XG59XG52YXIgY3JlYXRlUmVkdWNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWlkZGxld2FyZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBtaWRkbGV3YXJlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgY29tcG9zZWRNaWRkbGV3YXJlID0gY29tcG9zZU1pZGRsZXdhcmUobWlkZGxld2FyZXMpO1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0aWFsaXplcikge1xuICAgICAgICBpZiAoaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkgeyBpbml0aWFsaXplciA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07IH1cbiAgICAgICAgdmFyIHJlZiA9IHVzZVJlZihpbml0aWFsaXplcihpbml0aWFsU3RhdGUpKTtcbiAgICAgICAgdmFyIF9hID0gdXNlU3RhdGUocmVmLmN1cnJlbnQpLCBzZXRTdGF0ZSA9IF9hWzFdO1xuICAgICAgICB2YXIgZGlzcGF0Y2ggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICByZWYuY3VycmVudCA9IHJlZHVjZXIocmVmLmN1cnJlbnQsIGFjdGlvbik7XG4gICAgICAgICAgICBzZXRTdGF0ZShyZWYuY3VycmVudCk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgICB9LCBbcmVkdWNlcl0pO1xuICAgICAgICB2YXIgZGlzcGF0Y2hSZWYgPSB1c2VSZWYoY29tcG9zZWRNaWRkbGV3YXJlKHtcbiAgICAgICAgICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWYuY3VycmVudDsgfSxcbiAgICAgICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaFJlZi5jdXJyZW50LmFwcGx5KGRpc3BhdGNoUmVmLCBhcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIGRpc3BhdGNoKSk7XG4gICAgICAgIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaFJlZi5jdXJyZW50ID0gY29tcG9zZWRNaWRkbGV3YXJlKHtcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVmLmN1cnJlbnQ7IH0sXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2hSZWYuY3VycmVudC5hcHBseShkaXNwYXRjaFJlZiwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIGRpc3BhdGNoKTtcbiAgICAgICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgICAgIHJldHVybiBbcmVmLmN1cnJlbnQsIGRpc3BhdGNoUmVmLmN1cnJlbnRdO1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG52YXIgY3JlYXRlUmVkdWNlckNvbnRleHQgPSBmdW5jdGlvbiAocmVkdWNlciwgZGVmYXVsdEluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBjb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuICAgIHZhciBwcm92aWRlckZhY3RvcnkgPSBmdW5jdGlvbiAocHJvcHMsIGNoaWxkcmVuKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KGNvbnRleHQuUHJvdmlkZXIsIHByb3BzLCBjaGlsZHJlbik7IH07XG4gICAgdmFyIFJlZHVjZXJQcm92aWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgaW5pdGlhbFN0YXRlID0gX2EuaW5pdGlhbFN0YXRlO1xuICAgICAgICB2YXIgc3RhdGUgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSAhPT0gdW5kZWZpbmVkID8gaW5pdGlhbFN0YXRlIDogZGVmYXVsdEluaXRpYWxTdGF0ZSk7XG4gICAgICAgIHJldHVybiBwcm92aWRlckZhY3RvcnkoeyB2YWx1ZTogc3RhdGUgfSwgY2hpbGRyZW4pO1xuICAgIH07XG4gICAgdmFyIHVzZVJlZHVjZXJDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB1c2VDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICBpZiAoc3RhdGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXNlUmVkdWNlckNvbnRleHQgbXVzdCBiZSB1c2VkIGluc2lkZSBhIFJlZHVjZXJQcm92aWRlci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gICAgcmV0dXJuIFt1c2VSZWR1Y2VyQ29udGV4dCwgUmVkdWNlclByb3ZpZGVyLCBjb250ZXh0XTtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyQ29udGV4dDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xudmFyIGNyZWF0ZVN0YXRlQ29udGV4dCA9IGZ1bmN0aW9uIChkZWZhdWx0SW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG4gICAgdmFyIHByb3ZpZGVyRmFjdG9yeSA9IGZ1bmN0aW9uIChwcm9wcywgY2hpbGRyZW4pIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29udGV4dC5Qcm92aWRlciwgcHJvcHMsIGNoaWxkcmVuKTsgfTtcbiAgICB2YXIgU3RhdGVQcm92aWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgaW5pdGlhbFZhbHVlID0gX2EuaW5pdGlhbFZhbHVlO1xuICAgICAgICB2YXIgc3RhdGUgPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZCA/IGluaXRpYWxWYWx1ZSA6IGRlZmF1bHRJbml0aWFsVmFsdWUpO1xuICAgICAgICByZXR1cm4gcHJvdmlkZXJGYWN0b3J5KHsgdmFsdWU6IHN0YXRlIH0sIGNoaWxkcmVuKTtcbiAgICB9O1xuICAgIHZhciB1c2VTdGF0ZUNvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG4gICAgICAgIGlmIChzdGF0ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VTdGF0ZUNvbnRleHQgbXVzdCBiZSB1c2VkIGluc2lkZSBhIFN0YXRlUHJvdmlkZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICAgIHJldHVybiBbdXNlU3RhdGVDb250ZXh0LCBTdGF0ZVByb3ZpZGVyLCBjb250ZXh0XTtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdGF0ZUNvbnRleHQ7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZU1lbW8gfSBmcm9tICcuL2NyZWF0ZU1lbW8nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVSZWR1Y2VyQ29udGV4dCB9IGZyb20gJy4vY3JlYXRlUmVkdWNlckNvbnRleHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9jcmVhdGVTdGF0ZUNvbnRleHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VBc3luYyB9IGZyb20gJy4vdXNlQXN5bmMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VBc3luY0ZuIH0gZnJvbSAnLi91c2VBc3luY0ZuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQXN5bmNSZXRyeSB9IGZyb20gJy4vdXNlQXN5bmNSZXRyeSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUF1ZGlvIH0gZnJvbSAnLi91c2VBdWRpbyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUJhdHRlcnkgfSBmcm9tICcuL3VzZUJhdHRlcnknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VCZWZvcmVVbmxvYWQgfSBmcm9tICcuL3VzZUJlZm9yZVVubG9hZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUJvb2xlYW4gfSBmcm9tICcuL3VzZUJvb2xlYW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VDbGlja0F3YXkgfSBmcm9tICcuL3VzZUNsaWNrQXdheSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNvb2tpZSB9IGZyb20gJy4vdXNlQ29va2llJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAnLi91c2VDb3B5VG9DbGlwYm9hcmQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VDb3VudGVyIH0gZnJvbSAnLi91c2VDb3VudGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQ3NzIH0gZnJvbSAnLi91c2VDc3MnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VDdXN0b21Db21wYXJlRWZmZWN0IH0gZnJvbSAnLi91c2VDdXN0b21Db21wYXJlRWZmZWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRGVib3VuY2UgfSBmcm9tICcuL3VzZURlYm91bmNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRGVlcENvbXBhcmVFZmZlY3QgfSBmcm9tICcuL3VzZURlZXBDb21wYXJlRWZmZWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRGVmYXVsdCB9IGZyb20gJy4vdXNlRGVmYXVsdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZURyb3AgfSBmcm9tICcuL3VzZURyb3AnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VEcm9wQXJlYSB9IGZyb20gJy4vdXNlRHJvcEFyZWEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VFZmZlY3RPbmNlIH0gZnJvbSAnLi91c2VFZmZlY3RPbmNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRW5zdXJlZEZvcndhcmRlZFJlZiwgZW5zdXJlZEZvcndhcmRSZWYgfSBmcm9tICcuL3VzZUVuc3VyZWRGb3J3YXJkZWRSZWYnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VFdmVudCB9IGZyb20gJy4vdXNlRXZlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VFcnJvciB9IGZyb20gJy4vdXNlRXJyb3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VGYXZpY29uIH0gZnJvbSAnLi91c2VGYXZpY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRnVsbHNjcmVlbiB9IGZyb20gJy4vdXNlRnVsbHNjcmVlbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi91c2VHZW9sb2NhdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUdldFNldCB9IGZyb20gJy4vdXNlR2V0U2V0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlR2V0U2V0U3RhdGUgfSBmcm9tICcuL3VzZUdldFNldFN0YXRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlSGFybW9uaWNJbnRlcnZhbEZuIH0gZnJvbSAnLi91c2VIYXJtb25pY0ludGVydmFsRm4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VIb3ZlciB9IGZyb20gJy4vdXNlSG92ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VIb3ZlckRpcnR5IH0gZnJvbSAnLi91c2VIb3ZlckRpcnR5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlSWRsZSB9IGZyb20gJy4vdXNlSWRsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlSW50ZXJzZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlSW50ZXJ2YWwgfSBmcm9tICcuL3VzZUludGVydmFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4vdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUtleSB9IGZyb20gJy4vdXNlS2V5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlQnJlYWtwb2ludCB9IGZyb20gJy4vY3JlYXRlQnJlYWtwb2ludCc7XG4vLyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBvZiBwZWVyIGRlcGVuZGVuY3lcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlS2V5Ym9hcmRKcyB9IGZyb20gJy4vdXNlS2V5Ym9hcmRKcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUtleVByZXNzIH0gZnJvbSAnLi91c2VLZXlQcmVzcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUtleVByZXNzRXZlbnQgfSBmcm9tICcuL3VzZUtleVByZXNzRXZlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VMYXRlc3QgfSBmcm9tICcuL3VzZUxhdGVzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUxpZmVjeWNsZXMgfSBmcm9tICcuL3VzZUxpZmVjeWNsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VMaXN0IH0gZnJvbSAnLi91c2VMaXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi91c2VMb2NhbFN0b3JhZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VMb2NhdGlvbiB9IGZyb20gJy4vdXNlTG9jYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VMb2NrQm9keVNjcm9sbCB9IGZyb20gJy4vdXNlTG9ja0JvZHlTY3JvbGwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VMb2dnZXIgfSBmcm9tICcuL3VzZUxvZ2dlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUxvbmdQcmVzcyB9IGZyb20gJy4vdXNlTG9uZ1ByZXNzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTWFwIH0gZnJvbSAnLi91c2VNYXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNZWRpYSB9IGZyb20gJy4vdXNlTWVkaWEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNZWRpYURldmljZXMgfSBmcm9tICcuL3VzZU1lZGlhRGV2aWNlcyc7XG5leHBvcnQgeyB1c2VNZWRpYXRlZFN0YXRlIH0gZnJvbSAnLi91c2VNZWRpYXRlZFN0YXRlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTWV0aG9kcyB9IGZyb20gJy4vdXNlTWV0aG9kcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZU1vdGlvbiB9IGZyb20gJy4vdXNlTW90aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTW91bnQgfSBmcm9tICcuL3VzZU1vdW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTW91bnRlZFN0YXRlIH0gZnJvbSAnLi91c2VNb3VudGVkU3RhdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNb3VzZSB9IGZyb20gJy4vdXNlTW91c2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNb3VzZUhvdmVyZWQgfSBmcm9tICcuL3VzZU1vdXNlSG92ZXJlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZU1vdXNlV2hlZWwgfSBmcm9tICcuL3VzZU1vdXNlV2hlZWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VOZXR3b3JrIH0gZnJvbSAnLi91c2VOZXR3b3JrJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTnVtYmVyIH0gZnJvbSAnLi91c2VOdW1iZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VPYnNlcnZhYmxlIH0gZnJvbSAnLi91c2VPYnNlcnZhYmxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlT3JpZW50YXRpb24gfSBmcm9tICcuL3VzZU9yaWVudGF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUGFnZUxlYXZlIH0gZnJvbSAnLi91c2VQYWdlTGVhdmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VQZXJtaXNzaW9uIH0gZnJvbSAnLi91c2VQZXJtaXNzaW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUHJldmlvdXMgfSBmcm9tICcuL3VzZVByZXZpb3VzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUHJldmlvdXNEaXN0aW5jdCB9IGZyb20gJy4vdXNlUHJldmlvdXNEaXN0aW5jdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVByb21pc2UgfSBmcm9tICcuL3VzZVByb21pc2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VRdWV1ZSB9IGZyb20gJy4vdXNlUXVldWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VSYWYgfSBmcm9tICcuL3VzZVJhZic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVJhZkxvb3AgfSBmcm9tICcuL3VzZVJhZkxvb3AnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VSYWZTdGF0ZSB9IGZyb20gJy4vdXNlUmFmU3RhdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTZWFyY2hQYXJhbSB9IGZyb20gJy4vdXNlU2VhcmNoUGFyYW0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTY3JhdGNoIH0gZnJvbSAnLi91c2VTY3JhdGNoJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU2Nyb2xsIH0gZnJvbSAnLi91c2VTY3JvbGwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTY3JvbGxpbmcgfSBmcm9tICcuL3VzZVNjcm9sbGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlc3Npb25TdG9yYWdlIH0gZnJvbSAnLi91c2VTZXNzaW9uU3RvcmFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNldFN0YXRlIH0gZnJvbSAnLi91c2VTZXRTdGF0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNoYWxsb3dDb21wYXJlRWZmZWN0IH0gZnJvbSAnLi91c2VTaGFsbG93Q29tcGFyZUVmZmVjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNpemUgfSBmcm9tICcuL3VzZVNpemUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTbGlkZXIgfSBmcm9tICcuL3VzZVNsaWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNwZWVjaCB9IGZyb20gJy4vdXNlU3BlZWNoJztcbi8vIG5vdCBleHBvcnRlZCBiZWNhdXNlIG9mIHBlZXIgZGVwZW5kZW5jeVxuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTcHJpbmcgfSBmcm9tICcuL3VzZVNwcmluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVN0YXJ0VHlwaW5nIH0gZnJvbSAnLi91c2VTdGFydFR5cGluZyc7XG5leHBvcnQgeyB1c2VTdGF0ZVdpdGhIaXN0b3J5IH0gZnJvbSAnLi91c2VTdGF0ZVdpdGhIaXN0b3J5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU3RhdGVMaXN0IH0gZnJvbSAnLi91c2VTdGF0ZUxpc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaHJvdHRsZSB9IGZyb20gJy4vdXNlVGhyb3R0bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaHJvdHRsZUZuIH0gZnJvbSAnLi91c2VUaHJvdHRsZUZuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGltZW91dCB9IGZyb20gJy4vdXNlVGltZW91dCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRpbWVvdXRGbiB9IGZyb20gJy4vdXNlVGltZW91dEZuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGl0bGUgfSBmcm9tICcuL3VzZVRpdGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVG9nZ2xlIH0gZnJvbSAnLi91c2VUb2dnbGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUd2VlbiB9IGZyb20gJy4vdXNlVHdlZW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VVbm1vdW50IH0gZnJvbSAnLi91c2VVbm1vdW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVW5tb3VudFByb21pc2UgfSBmcm9tICcuL3VzZVVubW91bnRQcm9taXNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVXBkYXRlIH0gZnJvbSAnLi91c2VVcGRhdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VVcGRhdGVFZmZlY3QgfSBmcm9tICcuL3VzZVVwZGF0ZUVmZmVjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVVwc2VydCB9IGZyb20gJy4vdXNlVXBzZXJ0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVmlicmF0ZSB9IGZyb20gJy4vdXNlVmlicmF0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVZpZGVvIH0gZnJvbSAnLi91c2VWaWRlbyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVN0YXRlVmFsaWRhdG9yIH0gZnJvbSAnLi91c2VTdGF0ZVZhbGlkYXRvcic7XG5leHBvcnQgeyB1c2VTY3JvbGxiYXJXaWR0aCB9IGZyb20gJy4vdXNlU2Nyb2xsYmFyV2lkdGgnO1xuZXhwb3J0IHsgdXNlTXVsdGlTdGF0ZVZhbGlkYXRvciB9IGZyb20gJy4vdXNlTXVsdGlTdGF0ZVZhbGlkYXRvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVdpbmRvd1Njcm9sbCB9IGZyb20gJy4vdXNlV2luZG93U2Nyb2xsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4vdXNlV2luZG93U2l6ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZU1lYXN1cmUgfSBmcm9tICcuL3VzZU1lYXN1cmUnO1xuZXhwb3J0IHsgdXNlUmVuZGVyc0NvdW50IH0gZnJvbSAnLi91c2VSZW5kZXJzQ291bnQnO1xuZXhwb3J0IHsgdXNlRmlyc3RNb3VudFN0YXRlIH0gZnJvbSAnLi91c2VGaXJzdE1vdW50U3RhdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTZXQgfSBmcm9tICcuL3VzZVNldCc7XG5leHBvcnQgeyBjcmVhdGVHbG9iYWxTdGF0ZSB9IGZyb20gJy4vY3JlYXRlR2xvYmFsU3RhdGUnO1xuZXhwb3J0IHsgdXNlSGFzaCB9IGZyb20gJy4vdXNlSGFzaCc7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQXN5bmNGbiBmcm9tICcuL3VzZUFzeW5jRm4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXN5bmMoZm4sIGRlcHMpIHtcbiAgICBpZiAoZGVwcyA9PT0gdm9pZCAwKSB7IGRlcHMgPSBbXTsgfVxuICAgIHZhciBfYSA9IHVzZUFzeW5jRm4oZm4sIGRlcHMsIHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9KSwgc3RhdGUgPSBfYVswXSwgY2FsbGJhY2sgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH0sIFtjYWxsYmFja10pO1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkU3RhdGUgZnJvbSAnLi91c2VNb3VudGVkU3RhdGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXN5bmNGbihmbiwgZGVwcywgaW5pdGlhbFN0YXRlKSB7XG4gICAgaWYgKGRlcHMgPT09IHZvaWQgMCkgeyBkZXBzID0gW107IH1cbiAgICBpZiAoaW5pdGlhbFN0YXRlID09PSB2b2lkIDApIHsgaW5pdGlhbFN0YXRlID0geyBsb2FkaW5nOiBmYWxzZSB9OyB9XG4gICAgdmFyIGxhc3RDYWxsSWQgPSB1c2VSZWYoMCk7XG4gICAgdmFyIGlzTW91bnRlZCA9IHVzZU1vdW50ZWRTdGF0ZSgpO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSksIHN0YXRlID0gX2FbMF0sIHNldCA9IF9hWzFdO1xuICAgIHZhciBjYWxsYmFjayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbElkID0gKytsYXN0Q2FsbElkLmN1cnJlbnQ7XG4gICAgICAgIHNldChmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIHByZXZTdGF0ZSksIHsgbG9hZGluZzogdHJ1ZSB9KSk7IH0pO1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodm9pZCAwLCBhcmdzKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaXNNb3VudGVkKCkgJiYgY2FsbElkID09PSBsYXN0Q2FsbElkLmN1cnJlbnQgJiYgc2V0KHsgdmFsdWU6IHZhbHVlLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpc01vdW50ZWQoKSAmJiBjYWxsSWQgPT09IGxhc3RDYWxsSWQuY3VycmVudCAmJiBzZXQoeyBlcnJvcjogZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9LCBkZXBzKTtcbiAgICByZXR1cm4gW3N0YXRlLCBjYWxsYmFja107XG59XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiwgX19zcHJlYWRBcnJheXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luYyBmcm9tICcuL3VzZUFzeW5jJztcbnZhciB1c2VBc3luY1JldHJ5ID0gZnVuY3Rpb24gKGZuLCBkZXBzKSB7XG4gICAgaWYgKGRlcHMgPT09IHZvaWQgMCkgeyBkZXBzID0gW107IH1cbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgwKSwgYXR0ZW1wdCA9IF9hWzBdLCBzZXRBdHRlbXB0ID0gX2FbMV07XG4gICAgdmFyIHN0YXRlID0gdXNlQXN5bmMoZm4sIF9fc3ByZWFkQXJyYXlzKGRlcHMsIFthdHRlbXB0XSkpO1xuICAgIHZhciBzdGF0ZUxvYWRpbmcgPSBzdGF0ZS5sb2FkaW5nO1xuICAgIHZhciByZXRyeSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHN0YXRlTG9hZGluZykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdSBhcmUgY2FsbGluZyB1c2VBc3luY1JldHJ5IGhvb2sgcmV0cnkoKSBtZXRob2Qgd2hpbGUgbG9hZGluZyBpbiBwcm9ncmVzcywgdGhpcyBpcyBhIG5vLW9wLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEF0dGVtcHQoZnVuY3Rpb24gKGN1cnJlbnRBdHRlbXB0KSB7IHJldHVybiBjdXJyZW50QXR0ZW1wdCArIDE7IH0pO1xuICAgIH0sIF9fc3ByZWFkQXJyYXlzKGRlcHMsIFtzdGF0ZUxvYWRpbmddKSk7XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgcmV0cnk6IHJldHJ5IH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUFzeW5jUmV0cnk7XG4iLCJpbXBvcnQgY3JlYXRlSFRNTE1lZGlhSG9vayBmcm9tICcuL3V0aWwvY3JlYXRlSFRNTE1lZGlhSG9vayc7XG52YXIgdXNlQXVkaW8gPSBjcmVhdGVIVE1MTWVkaWFIb29rKCdhdWRpbycpO1xuZXhwb3J0IGRlZmF1bHQgdXNlQXVkaW87XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2ZmLCBvbiwgaXNEZWVwRXF1YWwgfSBmcm9tICcuL3V0aWwnO1xudmFyIG5hdiA9IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnID8gbmF2aWdhdG9yIDogdW5kZWZpbmVkO1xudmFyIGlzQmF0dGVyeUFwaVN1cHBvcnRlZCA9IG5hdiAmJiB0eXBlb2YgbmF2LmdldEJhdHRlcnkgPT09ICdmdW5jdGlvbic7XG5mdW5jdGlvbiB1c2VCYXR0ZXJ5TW9jaygpIHtcbiAgICByZXR1cm4geyBpc1N1cHBvcnRlZDogZmFsc2UgfTtcbn1cbmZ1bmN0aW9uIHVzZUJhdHRlcnkoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoeyBpc1N1cHBvcnRlZDogdHJ1ZSwgZmV0Y2hlZDogZmFsc2UgfSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHZhciBiYXR0ZXJ5ID0gbnVsbDtcbiAgICAgICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghaXNNb3VudGVkIHx8ICFiYXR0ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIGlzU3VwcG9ydGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZldGNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGJhdHRlcnkubGV2ZWwsXG4gICAgICAgICAgICAgICAgY2hhcmdpbmc6IGJhdHRlcnkuY2hhcmdpbmcsXG4gICAgICAgICAgICAgICAgZGlzY2hhcmdpbmdUaW1lOiBiYXR0ZXJ5LmRpc2NoYXJnaW5nVGltZSxcbiAgICAgICAgICAgICAgICBjaGFyZ2luZ1RpbWU6IGJhdHRlcnkuY2hhcmdpbmdUaW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICFpc0RlZXBFcXVhbChzdGF0ZSwgbmV3U3RhdGUpICYmIHNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgbmF2LmdldEJhdHRlcnkoKS50aGVuKGZ1bmN0aW9uIChiYXQpIHtcbiAgICAgICAgICAgIGlmICghaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmF0dGVyeSA9IGJhdDtcbiAgICAgICAgICAgIG9uKGJhdHRlcnksICdjaGFyZ2luZ2NoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgICAgICAgICBvbihiYXR0ZXJ5LCAnY2hhcmdpbmd0aW1lY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgICAgIG9uKGJhdHRlcnksICdkaXNjaGFyZ2luZ3RpbWVjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgICAgICAgICAgb24oYmF0dGVyeSwgJ2xldmVsY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGJhdHRlcnkpIHtcbiAgICAgICAgICAgICAgICBvZmYoYmF0dGVyeSwgJ2NoYXJnaW5nY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgICAgICAgICBvZmYoYmF0dGVyeSwgJ2NoYXJnaW5ndGltZWNoYW5nZScsIGhhbmRsZUNoYW5nZSk7XG4gICAgICAgICAgICAgICAgb2ZmKGJhdHRlcnksICdkaXNjaGFyZ2luZ3RpbWVjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgICAgICAgICAgICAgIG9mZihiYXR0ZXJ5LCAnbGV2ZWxjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnQgZGVmYXVsdCBpc0JhdHRlcnlBcGlTdXBwb3J0ZWQgPyB1c2VCYXR0ZXJ5IDogdXNlQmF0dGVyeU1vY2s7XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZUJlZm9yZVVubG9hZCA9IGZ1bmN0aW9uIChlbmFibGVkLCBtZXNzYWdlKSB7XG4gICAgaWYgKGVuYWJsZWQgPT09IHZvaWQgMCkgeyBlbmFibGVkID0gdHJ1ZTsgfVxuICAgIHZhciBoYW5kbGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBmaW5hbEVuYWJsZWQgPSB0eXBlb2YgZW5hYmxlZCA9PT0gJ2Z1bmN0aW9uJyA/IGVuYWJsZWQoKSA6IHRydWU7XG4gICAgICAgIGlmICghZmluYWxFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LCBbZW5hYmxlZCwgbWVzc2FnZV0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBoYW5kbGVyKTsgfTtcbiAgICB9LCBbZW5hYmxlZCwgaGFuZGxlcl0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUJlZm9yZVVubG9hZDtcbiIsImltcG9ydCB1c2VCb29sZWFuIGZyb20gJy4vdXNlVG9nZ2xlJztcbmV4cG9ydCBkZWZhdWx0IHVzZUJvb2xlYW47XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9mZiwgb24gfSBmcm9tICcuL3V0aWwnO1xudmFyIGRlZmF1bHRFdmVudHMgPSBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J107XG52YXIgdXNlQ2xpY2tBd2F5ID0gZnVuY3Rpb24gKHJlZiwgb25DbGlja0F3YXksIGV2ZW50cykge1xuICAgIGlmIChldmVudHMgPT09IHZvaWQgMCkgeyBldmVudHMgPSBkZWZhdWx0RXZlbnRzOyB9XG4gICAgdmFyIHNhdmVkQ2FsbGJhY2sgPSB1c2VSZWYob25DbGlja0F3YXkpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhdmVkQ2FsbGJhY2suY3VycmVudCA9IG9uQ2xpY2tBd2F5O1xuICAgIH0sIFtvbkNsaWNrQXdheV0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgICAgIGVsICYmICFlbC5jb250YWlucyhldmVudC50YXJnZXQpICYmIHNhdmVkQ2FsbGJhY2suY3VycmVudChldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZXZlbnRzXzEgPSBldmVudHM7IF9pIDwgZXZlbnRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnRzXzFbX2ldO1xuICAgICAgICAgICAgb24oZG9jdW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZXZlbnRzXzIgPSBldmVudHM7IF9pIDwgZXZlbnRzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50c18yW19pXTtcbiAgICAgICAgICAgICAgICBvZmYoZG9jdW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2V2ZW50cywgcmVmXSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlQ2xpY2tBd2F5O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbnZhciB1c2VDb29raWUgPSBmdW5jdGlvbiAoY29va2llTmFtZSkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIENvb2tpZXMuZ2V0KGNvb2tpZU5hbWUpIHx8IG51bGw7IH0pLCB2YWx1ZSA9IF9hWzBdLCBzZXRWYWx1ZSA9IF9hWzFdO1xuICAgIHZhciB1cGRhdGVDb29raWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3VmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgQ29va2llcy5zZXQoY29va2llTmFtZSwgbmV3VmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSwgW2Nvb2tpZU5hbWVdKTtcbiAgICB2YXIgZGVsZXRlQ29va2llID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBDb29raWVzLnJlbW92ZShjb29raWVOYW1lKTtcbiAgICAgICAgc2V0VmFsdWUobnVsbCk7XG4gICAgfSwgW2Nvb2tpZU5hbWVdKTtcbiAgICByZXR1cm4gW3ZhbHVlLCB1cGRhdGVDb29raWUsIGRlbGV0ZUNvb2tpZV07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlQ29va2llO1xuIiwiaW1wb3J0IHdyaXRlVGV4dCBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkU3RhdGUgZnJvbSAnLi91c2VNb3VudGVkU3RhdGUnO1xuaW1wb3J0IHVzZVNldFN0YXRlIGZyb20gJy4vdXNlU2V0U3RhdGUnO1xudmFyIHVzZUNvcHlUb0NsaXBib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXNNb3VudGVkID0gdXNlTW91bnRlZFN0YXRlKCk7XG4gICAgdmFyIF9hID0gdXNlU2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBub1VzZXJJbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICB9KSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB2YXIgY29weVRvQ2xpcGJvYXJkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghaXNNb3VudGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9Vc2VySW50ZXJhY3Rpb247XG4gICAgICAgIHZhciBub3JtYWxpemVkVmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBvbmx5IHN0cmluZ3MgYW5kIG51bWJlcnMgY2FzdGVkIHRvIHN0cmluZ3MgY2FuIGJlIGNvcGllZCB0byBjbGlwYm9hcmRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJDYW5ub3QgY29weSB0eXBlb2YgXCIgKyB0eXBlb2YgdmFsdWUgKyBcIiB0byBjbGlwYm9hcmQsIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBub1VzZXJJbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbXB0eSBzdHJpbmdzIGFyZSBhbHNvIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKFwiQ2Fubm90IGNvcHkgZW1wdHkgc3RyaW5nIHRvIGNsaXBib2FyZC5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBub1VzZXJJbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgbm9Vc2VySW50ZXJhY3Rpb24gPSB3cml0ZVRleHQobm9ybWFsaXplZFZhbHVlKTtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbm9ybWFsaXplZFZhbHVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbm9Vc2VySW50ZXJhY3Rpb246IG5vVXNlckludGVyYWN0aW9uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vcm1hbGl6ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgbm9Vc2VySW50ZXJhY3Rpb246IG5vVXNlckludGVyYWN0aW9uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtzdGF0ZSwgY29weVRvQ2xpcGJvYXJkXTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VDb3B5VG9DbGlwYm9hcmQ7XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUdldFNldCBmcm9tICcuL3VzZUdldFNldCc7XG5pbXBvcnQgeyByZXNvbHZlSG9va1N0YXRlIH0gZnJvbSAnLi91dGlsL3Jlc29sdmVIb29rU3RhdGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ291bnRlcihpbml0aWFsVmFsdWUsIG1heCwgbWluKSB7XG4gICAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdm9pZCAwKSB7IGluaXRpYWxWYWx1ZSA9IDA7IH1cbiAgICBpZiAobWF4ID09PSB2b2lkIDApIHsgbWF4ID0gbnVsbDsgfVxuICAgIGlmIChtaW4gPT09IHZvaWQgMCkgeyBtaW4gPSBudWxsOyB9XG4gICAgdmFyIGluaXQgPSByZXNvbHZlSG9va1N0YXRlKGluaXRpYWxWYWx1ZSk7XG4gICAgdHlwZW9mIGluaXQgIT09ICdudW1iZXInICYmIGNvbnNvbGUuZXJyb3IoJ2luaXRpYWxWYWx1ZSBoYXMgdG8gYmUgYSBudW1iZXIsIGdvdCAnICsgdHlwZW9mIGluaXRpYWxWYWx1ZSk7XG4gICAgaWYgKHR5cGVvZiBtaW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGluaXQgPSBNYXRoLm1heChpbml0LCBtaW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtaW4gIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignbWluIGhhcyB0byBiZSBhIG51bWJlciwgZ290ICcgKyB0eXBlb2YgbWluKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGluaXQgPSBNYXRoLm1pbihpbml0LCBtYXgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtYXggIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignbWF4IGhhcyB0byBiZSBhIG51bWJlciwgZ290ICcgKyB0eXBlb2YgbWF4KTtcbiAgICB9XG4gICAgdmFyIF9hID0gdXNlR2V0U2V0KGluaXQpLCBnZXQgPSBfYVswXSwgc2V0SW50ZXJuYWwgPSBfYVsxXTtcbiAgICByZXR1cm4gW1xuICAgICAgICBnZXQoKSxcbiAgICAgICAgdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2V0ID0gZnVuY3Rpb24gKG5ld1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZTdGF0ZSA9IGdldCgpO1xuICAgICAgICAgICAgICAgIHZhciByU3RhdGUgPSByZXNvbHZlSG9va1N0YXRlKG5ld1N0YXRlLCBwcmV2U3RhdGUpO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U3RhdGUgIT09IHJTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1pbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJTdGF0ZSA9IE1hdGgubWF4KHJTdGF0ZSwgbWluKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1heCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJTdGF0ZSA9IE1hdGgubWluKHJTdGF0ZSwgbWF4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmV2U3RhdGUgIT09IHJTdGF0ZSAmJiBzZXRJbnRlcm5hbChyU3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldDogZ2V0LFxuICAgICAgICAgICAgICAgIHNldDogc2V0LFxuICAgICAgICAgICAgICAgIGluYzogZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSA9PT0gdm9pZCAwKSB7IGRlbHRhID0gMTsgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgckRlbHRhID0gcmVzb2x2ZUhvb2tTdGF0ZShkZWx0YSwgZ2V0KCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJEZWx0YSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RlbHRhIGhhcyB0byBiZSBhIG51bWJlciBvciBmdW5jdGlvbiByZXR1cm5pbmcgYSBudW1iZXIsIGdvdCAnICsgdHlwZW9mIHJEZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0KGZ1bmN0aW9uIChudW0pIHsgcmV0dXJuIG51bSArIHJEZWx0YTsgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWM6IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEgPT09IHZvaWQgMCkgeyBkZWx0YSA9IDE7IH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJEZWx0YSA9IHJlc29sdmVIb29rU3RhdGUoZGVsdGEsIGdldCgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByRGVsdGEgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdkZWx0YSBoYXMgdG8gYmUgYSBudW1iZXIgb3IgZnVuY3Rpb24gcmV0dXJuaW5nIGEgbnVtYmVyLCBnb3QgJyArIHR5cGVvZiByRGVsdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldChmdW5jdGlvbiAobnVtKSB7IHJldHVybiBudW0gLSByRGVsdGE7IH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IGluaXQ7IH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJWYWx1ZSA9IHJlc29sdmVIb29rU3RhdGUodmFsdWUsIGdldCgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByVmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd2YWx1ZSBoYXMgdG8gYmUgYSBudW1iZXIgb3IgZnVuY3Rpb24gcmV0dXJuaW5nIGEgbnVtYmVyLCBnb3QgJyArIHR5cGVvZiByVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluaXQgPSByVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHNldChyVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbaW5pdCwgbWluLCBtYXhdKSxcbiAgICBdO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnbmFuby1jc3MnO1xuaW1wb3J0IHsgYWRkb24gYXMgYWRkb25DU1NPTSB9IGZyb20gJ25hbm8tY3NzL2FkZG9uL2Nzc29tJztcbmltcG9ydCB7IGFkZG9uIGFzIGFkZG9uVkNTU09NIH0gZnJvbSAnbmFuby1jc3MvYWRkb24vdmNzc29tJztcbmltcG9ydCB7IGNzc1RvVHJlZSB9IGZyb20gJ25hbm8tY3NzL2FkZG9uL3Zjc3NvbS9jc3NUb1RyZWUnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG52YXIgbmFubyA9IGNyZWF0ZSgpO1xuYWRkb25DU1NPTShuYW5vKTtcbmFkZG9uVkNTU09NKG5hbm8pO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHVzZUNzcyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiAncmVhY3QtdXNlLWNzcy0nICsgKGNvdW50ZXIrKykudG9TdHJpbmcoMzYpOyB9LCBbXSk7XG4gICAgdmFyIHNoZWV0ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgbmFuby5WU2hlZXQoKTsgfSwgW10pO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJlZSA9IHt9O1xuICAgICAgICBjc3NUb1RyZWUodHJlZSwgY3NzLCAnLicgKyBjbGFzc05hbWUsICcnKTtcbiAgICAgICAgc2hlZXQuZGlmZih0cmVlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNoZWV0LmRpZmYoe30pO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc05hbWU7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlQ3NzO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG52YXIgaXNQcmltaXRpdmUgPSBmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWwgIT09IE9iamVjdCh2YWwpOyB9O1xudmFyIHVzZUN1c3RvbUNvbXBhcmVFZmZlY3QgPSBmdW5jdGlvbiAoZWZmZWN0LCBkZXBzLCBkZXBzRXF1YWwpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIShkZXBzIGluc3RhbmNlb2YgQXJyYXkpIHx8ICFkZXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdgdXNlQ3VzdG9tQ29tcGFyZUVmZmVjdGAgc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggbm8gZGVwZW5kZW5jaWVzLiBVc2UgUmVhY3QudXNlRWZmZWN0IGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlcHMuZXZlcnkoaXNQcmltaXRpdmUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2B1c2VDdXN0b21Db21wYXJlRWZmZWN0YCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgYWxsIHByaW1pdGl2ZSB2YWx1ZXMuIFVzZSBSZWFjdC51c2VFZmZlY3QgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRlcHNFcXVhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdgdXNlQ3VzdG9tQ29tcGFyZUVmZmVjdGAgc2hvdWxkIGJlIHVzZWQgd2l0aCBkZXBzRXF1YWwgY2FsbGJhY2sgZm9yIGNvbXBhcmluZyBkZXBzIGxpc3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgaWYgKCFyZWYuY3VycmVudCB8fCAhZGVwc0VxdWFsKGRlcHMsIHJlZi5jdXJyZW50KSkge1xuICAgICAgICByZWYuY3VycmVudCA9IGRlcHM7XG4gICAgfVxuICAgIHVzZUVmZmVjdChlZmZlY3QsIHJlZi5jdXJyZW50KTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VDdXN0b21Db21wYXJlRWZmZWN0O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVRpbWVvdXRGbiBmcm9tICcuL3VzZVRpbWVvdXRGbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEZWJvdW5jZShmbiwgbXMsIGRlcHMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDA7IH1cbiAgICBpZiAoZGVwcyA9PT0gdm9pZCAwKSB7IGRlcHMgPSBbXTsgfVxuICAgIHZhciBfYSA9IHVzZVRpbWVvdXRGbihmbiwgbXMpLCBpc1JlYWR5ID0gX2FbMF0sIGNhbmNlbCA9IF9hWzFdLCByZXNldCA9IF9hWzJdO1xuICAgIHVzZUVmZmVjdChyZXNldCwgZGVwcyk7XG4gICAgcmV0dXJuIFtpc1JlYWR5LCBjYW5jZWxdO1xufVxuIiwiaW1wb3J0IHsgaXNEZWVwRXF1YWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHVzZUN1c3RvbUNvbXBhcmVFZmZlY3QgZnJvbSAnLi91c2VDdXN0b21Db21wYXJlRWZmZWN0JztcbnZhciBpc1ByaW1pdGl2ZSA9IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbCAhPT0gT2JqZWN0KHZhbCk7IH07XG52YXIgdXNlRGVlcENvbXBhcmVFZmZlY3QgPSBmdW5jdGlvbiAoZWZmZWN0LCBkZXBzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCEoZGVwcyBpbnN0YW5jZW9mIEFycmF5KSB8fCAhZGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYHVzZURlZXBDb21wYXJlRWZmZWN0YCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBubyBkZXBlbmRlbmNpZXMuIFVzZSBSZWFjdC51c2VFZmZlY3QgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVwcy5ldmVyeShpc1ByaW1pdGl2ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYHVzZURlZXBDb21wYXJlRWZmZWN0YCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgYWxsIHByaW1pdGl2ZSB2YWx1ZXMuIFVzZSBSZWFjdC51c2VFZmZlY3QgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VDdXN0b21Db21wYXJlRWZmZWN0KGVmZmVjdCwgZGVwcywgaXNEZWVwRXF1YWwpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZURlZXBDb21wYXJlRWZmZWN0O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlRGVmYXVsdCA9IGZ1bmN0aW9uIChkZWZhdWx0VmFsdWUsIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSksIHZhbHVlID0gX2FbMF0sIHNldFZhbHVlID0gX2FbMV07XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtkZWZhdWx0VmFsdWUsIHNldFZhbHVlXTtcbiAgICB9XG4gICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZURlZmF1bHQ7XG4iLCJpbXBvcnQgeyBfX3NwcmVhZEFycmF5cyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbnZhciBjcmVhdGVQcm9jZXNzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHsgcmV0dXJuIGZ1bmN0aW9uIChkYXRhVHJhbnNmZXIsIGV2ZW50KSB7XG4gICAgdmFyIHVyaSA9IGRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3VyaS1saXN0Jyk7XG4gICAgaWYgKHVyaSkge1xuICAgICAgICAob3B0aW9ucy5vblVyaSB8fCBub29wKSh1cmksIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YVRyYW5zZmVyLmZpbGVzICYmIGRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgKG9wdGlvbnMub25GaWxlcyB8fCBub29wKShBcnJheS5mcm9tKGRhdGFUcmFuc2Zlci5maWxlcyksIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuY2xpcGJvYXJkRGF0YSkge1xuICAgICAgICB2YXIgdGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpO1xuICAgICAgICAob3B0aW9ucy5vblRleHQgfHwgbm9vcCkodGV4dCwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufTsgfTtcbnZhciB1c2VEcm9wID0gZnVuY3Rpb24gKG9wdGlvbnMsIGFyZ3MpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmIChhcmdzID09PSB2b2lkIDApIHsgYXJncyA9IFtdOyB9XG4gICAgdmFyIG9uRmlsZXMgPSBvcHRpb25zLm9uRmlsZXMsIG9uVGV4dCA9IG9wdGlvbnMub25UZXh0LCBvblVyaSA9IG9wdGlvbnMub25Vcmk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCBvdmVyID0gX2FbMF0sIHNldE92ZXJSYXcgPSBfYVsxXTtcbiAgICB2YXIgc2V0T3ZlciA9IHVzZUNhbGxiYWNrKHNldE92ZXJSYXcsIFtdKTtcbiAgICB2YXIgcHJvY2VzcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlUHJvY2VzcyhvcHRpb25zKTsgfSwgW29uRmlsZXMsIG9uVGV4dCwgb25VcmldKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25EcmFnT3ZlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldE92ZXIodHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkRyYWdFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldE92ZXIodHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkRyYWdMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldE92ZXIoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25EcmFnRXhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldE92ZXIoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25Ecm9wID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0T3ZlcihmYWxzZSk7XG4gICAgICAgICAgICBwcm9jZXNzKGV2ZW50LmRhdGFUcmFuc2ZlciwgZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25QYXN0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcHJvY2VzcyhldmVudC5jbGlwYm9hcmREYXRhLCBldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnT3Zlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIG9uRHJhZ0VudGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZXhpdCcsIG9uRHJhZ0V4aXQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKTtcbiAgICAgICAgaWYgKG9uVGV4dCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWdPdmVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIG9uRHJhZ0VudGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIG9uRHJhZ0xlYXZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdleGl0Jywgb25EcmFnRXhpdCk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSk7XG4gICAgICAgIH07XG4gICAgfSwgX19zcHJlYWRBcnJheXMoW3Byb2Nlc3NdLCBhcmdzKSk7XG4gICAgcmV0dXJuIHsgb3Zlcjogb3ZlciB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZURyb3A7XG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkU3RhdGUgZnJvbSAnLi91c2VNb3VudGVkU3RhdGUnO1xudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG4vKlxuY29uc3QgZGVmYXVsdFN0YXRlOiBEcm9wQXJlYVN0YXRlID0ge1xuICBvdmVyOiBmYWxzZSxcbn07XG4qL1xudmFyIGNyZWF0ZVByb2Nlc3MgPSBmdW5jdGlvbiAob3B0aW9ucywgbW91bnRlZCkgeyByZXR1cm4gZnVuY3Rpb24gKGRhdGFUcmFuc2ZlciwgZXZlbnQpIHtcbiAgICB2YXIgdXJpID0gZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvdXJpLWxpc3QnKTtcbiAgICBpZiAodXJpKSB7XG4gICAgICAgIChvcHRpb25zLm9uVXJpIHx8IG5vb3ApKHVyaSwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhVHJhbnNmZXIuZmlsZXMgJiYgZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAob3B0aW9ucy5vbkZpbGVzIHx8IG5vb3ApKEFycmF5LmZyb20oZGF0YVRyYW5zZmVyLmZpbGVzKSwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhVHJhbnNmZXIuaXRlbXMgJiYgZGF0YVRyYW5zZmVyLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICBkYXRhVHJhbnNmZXIuaXRlbXNbMF0uZ2V0QXNTdHJpbmcoZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgIGlmIChtb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgKG9wdGlvbnMub25UZXh0IHx8IG5vb3ApKHRleHQsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTsgfTtcbnZhciBjcmVhdGVCb25kID0gZnVuY3Rpb24gKHByb2Nlc3MsIHNldE92ZXIpIHsgcmV0dXJuICh7XG4gICAgb25EcmFnT3ZlcjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcbiAgICBvbkRyYWdFbnRlcjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldE92ZXIodHJ1ZSk7XG4gICAgfSxcbiAgICBvbkRyYWdMZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRPdmVyKGZhbHNlKTtcbiAgICB9LFxuICAgIG9uRHJvcDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgc2V0T3ZlcihmYWxzZSk7XG4gICAgICAgIHByb2Nlc3MoZXZlbnQuZGF0YVRyYW5zZmVyLCBldmVudCk7XG4gICAgfSxcbiAgICBvblBhc3RlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICBwcm9jZXNzKGV2ZW50LmNsaXBib2FyZERhdGEsIGV2ZW50KTtcbiAgICB9LFxufSk7IH07XG52YXIgdXNlRHJvcEFyZWEgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIG9uRmlsZXMgPSBvcHRpb25zLm9uRmlsZXMsIG9uVGV4dCA9IG9wdGlvbnMub25UZXh0LCBvblVyaSA9IG9wdGlvbnMub25Vcmk7XG4gICAgdmFyIGlzTW91bnRlZCA9IHVzZU1vdW50ZWRTdGF0ZSgpO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgb3ZlciA9IF9hWzBdLCBzZXRPdmVyID0gX2FbMV07XG4gICAgdmFyIHByb2Nlc3MgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVByb2Nlc3Mob3B0aW9ucywgaXNNb3VudGVkKCkpOyB9LCBbb25GaWxlcywgb25UZXh0LCBvblVyaV0pO1xuICAgIHZhciBib25kID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVCb25kKHByb2Nlc3MsIHNldE92ZXIpOyB9LCBbcHJvY2Vzcywgc2V0T3Zlcl0pO1xuICAgIHJldHVybiBbYm9uZCwgeyBvdmVyOiBvdmVyIH1dO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZURyb3BBcmVhO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZUVmZmVjdE9uY2UgPSBmdW5jdGlvbiAoZWZmZWN0KSB7XG4gICAgdXNlRWZmZWN0KGVmZmVjdCwgW10pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUVmZmVjdE9uY2U7XG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmLCB1c2VSZWYsIHVzZUVmZmVjdCwgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFbnN1cmVkRm9yd2FyZGVkUmVmKGZvcndhcmRlZFJlZikge1xuICAgIHZhciBlbnN1cmVkUmVmID0gdXNlUmVmKGZvcndhcmRlZFJlZiAmJiBmb3J3YXJkZWRSZWYuY3VycmVudCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFmb3J3YXJkZWRSZWYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3J3YXJkZWRSZWYuY3VycmVudCA9IGVuc3VyZWRSZWYuY3VycmVudDtcbiAgICB9LCBbZm9yd2FyZGVkUmVmXSk7XG4gICAgcmV0dXJuIGVuc3VyZWRSZWY7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlZEZvcndhcmRSZWYoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAgICAgdmFyIGVuc3VyZWRSZWYgPSB1c2VFbnN1cmVkRm9yd2FyZGVkUmVmKHJlZik7XG4gICAgICAgIHJldHVybiBDb21wb25lbnQocHJvcHMsIGVuc3VyZWRSZWYpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUobnVsbCksIGVycm9yID0gX2FbMF0sIHNldEVycm9yID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH0sIFtlcnJvcl0pO1xuICAgIHZhciBkaXNwYXRjaEVycm9yID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVycikge1xuICAgICAgICBzZXRFcnJvcihlcnIpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hFcnJvcjtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VFcnJvcjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi91dGlsJztcbnZhciBkZWZhdWx0VGFyZ2V0ID0gaXNDbGllbnQgPyB3aW5kb3cgOiBudWxsO1xudmFyIGlzTGlzdGVuZXJUeXBlMSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICByZXR1cm4gISF0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcjtcbn07XG52YXIgaXNMaXN0ZW5lclR5cGUyID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHJldHVybiAhIXRhcmdldC5vbjtcbn07XG52YXIgdXNlRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgaGFuZGxlciwgdGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IGRlZmF1bHRUYXJnZXQ7IH1cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xpc3RlbmVyVHlwZTEodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNMaXN0ZW5lclR5cGUyKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5vbihuYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGlzTGlzdGVuZXJUeXBlMSh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0xpc3RlbmVyVHlwZTIodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5vZmYobmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW25hbWUsIGhhbmRsZXIsIHRhcmdldCwgSlNPTi5zdHJpbmdpZnkob3B0aW9ucyldKTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VFdmVudDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VGYXZpY29uID0gZnVuY3Rpb24gKGhyZWYpIHtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbCo9J2ljb24nXVwiKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsudHlwZSA9ICdpbWFnZS94LWljb24nO1xuICAgICAgICBsaW5rLnJlbCA9ICdzaG9ydGN1dCBpY29uJztcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9LCBbaHJlZl0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUZhdmljb247XG4iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlRmlyc3RNb3VudFN0YXRlKCkge1xuICAgIHZhciBpc0ZpcnN0ID0gdXNlUmVmKHRydWUpO1xuICAgIGlmIChpc0ZpcnN0LmN1cnJlbnQpIHtcbiAgICAgICAgaXNGaXJzdC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaXNGaXJzdC5jdXJyZW50O1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc2NyZWVuZnVsbCBmcm9tICdzY3JlZW5mdWxsJztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbnZhciB1c2VGdWxsc2NyZWVuID0gZnVuY3Rpb24gKHJlZiwgb24sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB2aWRlbyA9IG9wdGlvbnMudmlkZW8sIF9hID0gb3B0aW9ucy5vbkNsb3NlLCBvbkNsb3NlID0gX2EgPT09IHZvaWQgMCA/IG5vb3AgOiBfYTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShvbiksIGlzRnVsbHNjcmVlbiA9IF9iWzBdLCBzZXRJc0Z1bGxzY3JlZW4gPSBfYlsxXTtcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25XZWJraXRFbmRGdWxsc2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmlkZW8uY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRlbmRmdWxsc2NyZWVuJywgb25XZWJraXRFbmRGdWxsc2NyZWVuKTtcbiAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHNjcmVlbmZ1bGwuaXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzU2NyZWVuZnVsbEZ1bGxzY3JlZW4gPSBzY3JlZW5mdWxsLmlzRnVsbHNjcmVlbjtcbiAgICAgICAgICAgICAgICBzZXRJc0Z1bGxzY3JlZW4oaXNTY3JlZW5mdWxsRnVsbHNjcmVlbik7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1NjcmVlbmZ1bGxGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChzY3JlZW5mdWxsLmlzRW5hYmxlZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzY3JlZW5mdWxsLnJlcXVlc3QocmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIHNldElzRnVsbHNjcmVlbih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIG9uQ2xvc2UoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNldElzRnVsbHNjcmVlbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzY3JlZW5mdWxsLm9uKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmlkZW8gJiYgdmlkZW8uY3VycmVudCAmJiB2aWRlby5jdXJyZW50LndlYmtpdEVudGVyRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdmlkZW8uY3VycmVudC53ZWJraXRFbnRlckZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIHZpZGVvLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0ZW5kZnVsbHNjcmVlbicsIG9uV2Via2l0RW5kRnVsbHNjcmVlbik7XG4gICAgICAgICAgICBzZXRJc0Z1bGxzY3JlZW4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICBzZXRJc0Z1bGxzY3JlZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRJc0Z1bGxzY3JlZW4oZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHNjcmVlbmZ1bGwuaXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuZnVsbC5vZmYoJ2NoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuZnVsbC5leGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2aWRlbyAmJiB2aWRlby5jdXJyZW50ICYmIHZpZGVvLmN1cnJlbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgICB2aWRlby5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdGVuZGZ1bGxzY3JlZW4nLCBvbldlYmtpdEVuZEZ1bGxzY3JlZW4pO1xuICAgICAgICAgICAgICAgIHZpZGVvLmN1cnJlbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbb24sIHZpZGVvLCByZWZdKTtcbiAgICByZXR1cm4gaXNGdWxsc2NyZWVuO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUZ1bGxzY3JlZW47XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VHZW9sb2NhdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBhY2N1cmFjeTogbnVsbCxcbiAgICAgICAgYWx0aXR1ZGU6IG51bGwsXG4gICAgICAgIGFsdGl0dWRlQWNjdXJhY3k6IG51bGwsXG4gICAgICAgIGhlYWRpbmc6IG51bGwsXG4gICAgICAgIGxhdGl0dWRlOiBudWxsLFxuICAgICAgICBsb25naXR1ZGU6IG51bGwsXG4gICAgICAgIHNwZWVkOiBudWxsLFxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgfSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdmFyIG1vdW50ZWQgPSB0cnVlO1xuICAgIHZhciB3YXRjaElkO1xuICAgIHZhciBvbkV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChtb3VudGVkKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWNjdXJhY3k6IGV2ZW50LmNvb3Jkcy5hY2N1cmFjeSxcbiAgICAgICAgICAgICAgICBhbHRpdHVkZTogZXZlbnQuY29vcmRzLmFsdGl0dWRlLFxuICAgICAgICAgICAgICAgIGFsdGl0dWRlQWNjdXJhY3k6IGV2ZW50LmNvb3Jkcy5hbHRpdHVkZUFjY3VyYWN5LFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6IGV2ZW50LmNvb3Jkcy5oZWFkaW5nLFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBldmVudC5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBldmVudC5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiBldmVudC5jb29yZHMuc3BlZWQsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBldmVudC50aW1lc3RhbXAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uRXZlbnRFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICByZXR1cm4gbW91bnRlZCAmJiBzZXRTdGF0ZShmdW5jdGlvbiAob2xkU3RhdGUpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb2xkU3RhdGUpLCB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyb3IgfSkpOyB9KTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ob25FdmVudCwgb25FdmVudEVycm9yLCBvcHRpb25zKTtcbiAgICAgICAgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKG9uRXZlbnQsIG9uRXZlbnRFcnJvciwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUdlb2xvY2F0aW9uO1xuIiwiaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVwZGF0ZSBmcm9tICcuL3VzZVVwZGF0ZSc7XG5pbXBvcnQgeyByZXNvbHZlSG9va1N0YXRlIH0gZnJvbSAnLi91dGlsL3Jlc29sdmVIb29rU3RhdGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR2V0U2V0KGluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHVzZVJlZihyZXNvbHZlSG9va1N0YXRlKGluaXRpYWxTdGF0ZSkpO1xuICAgIHZhciB1cGRhdGUgPSB1c2VVcGRhdGUoKTtcbiAgICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIC8vIGdldFxuICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZS5jdXJyZW50OyB9LFxuICAgICAgICAvLyBzZXRcbiAgICAgICAgZnVuY3Rpb24gKG5ld1N0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50ID0gcmVzb2x2ZUhvb2tTdGF0ZShuZXdTdGF0ZSwgc3RhdGUuY3VycmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfSxcbiAgICBdOyB9LCBbXSk7XG59XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVcGRhdGUgZnJvbSAnLi91c2VVcGRhdGUnO1xudmFyIHVzZUdldFNldFN0YXRlID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHZvaWQgMCkgeyBpbml0aWFsU3RhdGUgPSB7fTsgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigndXNlR2V0U2V0U3RhdGUgaW5pdGlhbCBzdGF0ZSBtdXN0IGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgdXBkYXRlID0gdXNlVXBkYXRlKCk7XG4gICAgdmFyIHN0YXRlID0gdXNlUmVmKF9fYXNzaWduKHt9LCBpbml0aWFsU3RhdGUpKTtcbiAgICB2YXIgZ2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGUuY3VycmVudDsgfSwgW10pO1xuICAgIHZhciBzZXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocGF0Y2gpIHtcbiAgICAgICAgaWYgKCFwYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGNoICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VzZUdldFNldFN0YXRlIHNldHRlciBwYXRjaCBtdXN0IGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRlLmN1cnJlbnQsIHBhdGNoKTtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbZ2V0LCBzZXRdO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUdldFNldFN0YXRlO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzZXRIYXJtb25pY0ludGVydmFsLCBjbGVhckhhcm1vbmljSW50ZXJ2YWwgfSBmcm9tICdzZXQtaGFybW9uaWMtaW50ZXJ2YWwnO1xudmFyIHVzZUhhcm1vbmljSW50ZXJ2YWxGbiA9IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICB2YXIgbGF0ZXN0Q2FsbGJhY2sgPSB1c2VSZWYoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBsYXRlc3RDYWxsYmFjay5jdXJyZW50ID0gZm47XG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRlbGF5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWxfMSA9IHNldEhhcm1vbmljSW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gbGF0ZXN0Q2FsbGJhY2suY3VycmVudCgpOyB9LCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xlYXJIYXJtb25pY0ludGVydmFsKGludGVydmFsXzEpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgW2RlbGF5XSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlSGFybW9uaWNJbnRlcnZhbEZuO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUxpZmVjeWNsZXMgZnJvbSAnLi91c2VMaWZlY3ljbGVzJztcbi8qKlxuICogcmVhZCBhbmQgd3JpdGUgdXJsIGhhc2gsIHJlc3BvbnNlIHRvIHVybCBoYXNoIGNoYW5nZVxuICovXG5leHBvcnQgdmFyIHVzZUhhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2g7IH0pLCBoYXNoID0gX2FbMF0sIHNldEhhc2ggPSBfYVsxXTtcbiAgICB2YXIgb25IYXNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRIYXNoKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGlmZWN5Y2xlcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICB9KTtcbiAgICB2YXIgX3NldEhhc2ggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3SGFzaCkge1xuICAgICAgICBpZiAobmV3SGFzaCAhPT0gaGFzaCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBuZXdIYXNoO1xuICAgICAgICB9XG4gICAgfSwgW2hhc2hdKTtcbiAgICByZXR1cm4gW2hhc2gsIF9zZXRIYXNoXTtcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZTtcbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xudmFyIHVzZUhvdmVyID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdmFyIG9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChvcmlnaW5hbE9uTW91c2VFbnRlcikgeyByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIChvcmlnaW5hbE9uTW91c2VFbnRlciB8fCBub29wKShldmVudCk7XG4gICAgICAgIHNldFN0YXRlKHRydWUpO1xuICAgIH07IH07XG4gICAgdmFyIG9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChvcmlnaW5hbE9uTW91c2VMZWF2ZSkgeyByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIChvcmlnaW5hbE9uTW91c2VMZWF2ZSB8fCBub29wKShldmVudCk7XG4gICAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICB9OyB9O1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudChzdGF0ZSk7XG4gICAgfVxuICAgIHZhciBlbCA9IFJlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyKGVsZW1lbnQucHJvcHMub25Nb3VzZUVudGVyKSxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUoZWxlbWVudC5wcm9wcy5vbk1vdXNlTGVhdmUpLFxuICAgIH0pO1xuICAgIHJldHVybiBbZWwsIHN0YXRlXTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VIb3ZlcjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBrdWRvczogaHR0cHM6Ly91c2Vob29rcy5jb20vXG52YXIgdXNlSG92ZXJEaXJ0eSA9IGZ1bmN0aW9uIChyZWYsIGVuYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCA9PT0gdm9pZCAwKSB7IGVuYWJsZWQgPSB0cnVlOyB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVmICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmVmLmN1cnJlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1c2VIb3ZlckRpcnR5IGV4cGVjdHMgYSBzaW5nbGUgcmVmIGFyZ3VtZW50LicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgdmFsdWUgPSBfYVswXSwgc2V0VmFsdWUgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25Nb3VzZU92ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRWYWx1ZSh0cnVlKTsgfTtcbiAgICAgICAgdmFyIG9uTW91c2VPdXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRWYWx1ZShmYWxzZSk7IH07XG4gICAgICAgIGlmIChlbmFibGVkICYmIHJlZiAmJiByZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgb25Nb3VzZU92ZXIpO1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1vdXNlT3V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaXhlcyByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgd2FybmluZyBhYm91dCBzdGFsZSByZWYgZWxlbWVudHNcbiAgICAgICAgdmFyIGN1cnJlbnQgPSByZWYuY3VycmVudDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVkICYmIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG9uTW91c2VPdmVyKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25Nb3VzZU91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2VuYWJsZWQsIHJlZl0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VIb3ZlckRpcnR5O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAndGhyb3R0bGUtZGVib3VuY2UnO1xuaW1wb3J0IHsgb2ZmLCBvbiB9IGZyb20gJy4vdXRpbCc7XG52YXIgZGVmYXVsdEV2ZW50cyA9IFsnbW91c2Vtb3ZlJywgJ21vdXNlZG93bicsICdyZXNpemUnLCAna2V5ZG93bicsICd0b3VjaHN0YXJ0JywgJ3doZWVsJ107XG52YXIgb25lTWludXRlID0gNjBlMztcbnZhciB1c2VJZGxlID0gZnVuY3Rpb24gKG1zLCBpbml0aWFsU3RhdGUsIGV2ZW50cykge1xuICAgIGlmIChtcyA9PT0gdm9pZCAwKSB7IG1zID0gb25lTWludXRlOyB9XG4gICAgaWYgKGluaXRpYWxTdGF0ZSA9PT0gdm9pZCAwKSB7IGluaXRpYWxTdGF0ZSA9IGZhbHNlOyB9XG4gICAgaWYgKGV2ZW50cyA9PT0gdm9pZCAwKSB7IGV2ZW50cyA9IGRlZmF1bHRFdmVudHM7IH1cbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpLCBzdGF0ZSA9IF9hWzBdLCBzZXRTdGF0ZSA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHRpbWVvdXQ7XG4gICAgICAgIHZhciBsb2NhbFN0YXRlID0gc3RhdGU7XG4gICAgICAgIHZhciBzZXQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChtb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uRXZlbnQgPSB0aHJvdHRsZSg1MCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzZXQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0KHRydWUpOyB9LCBtcyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgb25WaXNpYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBvbkV2ZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvbih3aW5kb3csIGV2ZW50c1tpXSwgb25FdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgb24oZG9jdW1lbnQsICd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0KHRydWUpOyB9LCBtcyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9mZih3aW5kb3csIGV2ZW50c1tpXSwgb25FdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYoZG9jdW1lbnQsICd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5KTtcbiAgICAgICAgfTtcbiAgICB9LCBbbXMsIGV2ZW50c10pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VJZGxlO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAocmVmLCBvcHRpb25zKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUobnVsbCksIGludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBfYVswXSwgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCAmJiB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KGVudHJpZXNbMF0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcl8xID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJfMS5vYnNlcnZlKHJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeShudWxsKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlcl8xLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgfTtcbiAgICB9LCBbcmVmLmN1cnJlbnQsIG9wdGlvbnMudGhyZXNob2xkLCBvcHRpb25zLnJvb3QsIG9wdGlvbnMucm9vdE1hcmdpbl0pO1xuICAgIHJldHVybiBpbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUludGVyc2VjdGlvbjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZUludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSkge1xuICAgIHZhciBzYXZlZENhbGxiYWNrID0gdXNlUmVmKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gY2FsbGJhY2s7XG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRlbGF5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWxfMSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNhdmVkQ2FsbGJhY2suY3VycmVudCgpOyB9LCBkZWxheSB8fCAwKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsXzEpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgW2RlbGF5XSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlSW50ZXJ2YWw7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5leHBvcnQgZGVmYXVsdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0O1xuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudCBmcm9tICcuL3VzZUV2ZW50JztcbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xudmFyIGNyZWF0ZUtleVByZWRpY2F0ZSA9IGZ1bmN0aW9uIChrZXlGaWx0ZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGtleUZpbHRlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGtleUZpbHRlclxuICAgICAgICA6IHR5cGVvZiBrZXlGaWx0ZXIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gZXZlbnQua2V5ID09PSBrZXlGaWx0ZXI7IH1cbiAgICAgICAgICAgIDoga2V5RmlsdGVyXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfTtcbn07XG52YXIgdXNlS2V5ID0gZnVuY3Rpb24gKGtleSwgZm4sIG9wdHMsIGRlcHMpIHtcbiAgICBpZiAoZm4gPT09IHZvaWQgMCkgeyBmbiA9IG5vb3A7IH1cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIGlmIChkZXBzID09PSB2b2lkIDApIHsgZGVwcyA9IFtrZXldOyB9XG4gICAgdmFyIF9hID0gb3B0cy5ldmVudCwgZXZlbnQgPSBfYSA9PT0gdm9pZCAwID8gJ2tleWRvd24nIDogX2EsIHRhcmdldCA9IG9wdHMudGFyZ2V0LCBvcHRpb25zID0gb3B0cy5vcHRpb25zO1xuICAgIHZhciB1c2VNZW1vSGFuZGxlciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJlZGljYXRlID0gY3JlYXRlS2V5UHJlZGljYXRlKGtleSk7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXJFdmVudCkge1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShoYW5kbGVyRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuKGhhbmRsZXJFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH0sIGRlcHMpO1xuICAgIHVzZUV2ZW50KGV2ZW50LCB1c2VNZW1vSGFuZGxlciwgdGFyZ2V0LCBvcHRpb25zKTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VLZXk7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VLZXkgZnJvbSAnLi91c2VLZXknO1xudmFyIHVzZUtleVByZXNzID0gZnVuY3Rpb24gKGtleUZpbHRlcikge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKFtmYWxzZSwgbnVsbF0pLCBzdGF0ZSA9IF9hWzBdLCBzZXQgPSBfYVsxXTtcbiAgICB1c2VLZXkoa2V5RmlsdGVyLCBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIHNldChbdHJ1ZSwgZXZlbnRdKTsgfSwgeyBldmVudDogJ2tleWRvd24nIH0sIFtzdGF0ZV0pO1xuICAgIHVzZUtleShrZXlGaWx0ZXIsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gc2V0KFtmYWxzZSwgZXZlbnRdKTsgfSwgeyBldmVudDogJ2tleXVwJyB9LCBbc3RhdGVdKTtcbiAgICByZXR1cm4gc3RhdGU7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlS2V5UHJlc3M7XG4iLCJpbXBvcnQgdXNlS2V5UHJlc3NEZWZhdWx0IGZyb20gJy4vdXNlS2V5UHJlc3MnO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3VzZVVwZGF0ZUVmZmVjdCc7XG52YXIgdXNlS2V5UHJlc3NFdmVudCA9IGZ1bmN0aW9uIChrZXksIGtleWRvd24sIGtleXVwLCB1c2VLZXlQcmVzcykge1xuICAgIGlmICh1c2VLZXlQcmVzcyA9PT0gdm9pZCAwKSB7IHVzZUtleVByZXNzID0gdXNlS2V5UHJlc3NEZWZhdWx0OyB9XG4gICAgdmFyIF9hID0gdXNlS2V5UHJlc3Moa2V5KSwgcHJlc3NlZCA9IF9hWzBdLCBldmVudCA9IF9hWzFdO1xuICAgIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghcHJlc3NlZCAmJiBrZXl1cCkge1xuICAgICAgICAgICAga2V5dXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByZXNzZWQgJiYga2V5ZG93bikge1xuICAgICAgICAgICAga2V5ZG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJlc3NlZF0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUtleVByZXNzRXZlbnQ7XG4iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlTGF0ZXN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVmO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUxhdGVzdDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VMaWZlY3ljbGVzID0gZnVuY3Rpb24gKG1vdW50LCB1bm1vdW50KSB7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG1vdW50KSB7XG4gICAgICAgICAgICBtb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodW5tb3VudCkge1xuICAgICAgICAgICAgICAgIHVubW91bnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTGlmZWN5Y2xlcztcbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVcGRhdGUgZnJvbSAnLi91c2VVcGRhdGUnO1xuaW1wb3J0IHsgcmVzb2x2ZUhvb2tTdGF0ZSB9IGZyb20gJy4vdXRpbC9yZXNvbHZlSG9va1N0YXRlJztcbmZ1bmN0aW9uIHVzZUxpc3QoaW5pdGlhbExpc3QpIHtcbiAgICBpZiAoaW5pdGlhbExpc3QgPT09IHZvaWQgMCkgeyBpbml0aWFsTGlzdCA9IFtdOyB9XG4gICAgdmFyIGxpc3QgPSB1c2VSZWYocmVzb2x2ZUhvb2tTdGF0ZShpbml0aWFsTGlzdCkpO1xuICAgIHZhciB1cGRhdGUgPSB1c2VVcGRhdGUoKTtcbiAgICB2YXIgYWN0aW9ucyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYSA9IHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0xpc3QpIHtcbiAgICAgICAgICAgICAgICBsaXN0LmN1cnJlbnQgPSByZXNvbHZlSG9va1N0YXRlKG5ld0xpc3QsIGxpc3QuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1zLmxlbmd0aCAmJiBhY3Rpb25zLnNldChmdW5jdGlvbiAoY3VycikgeyByZXR1cm4gY3Vyci5jb25jYXQoaXRlbXMpOyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVBdDogZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXQoZnVuY3Rpb24gKGN1cnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IGN1cnIuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyW2luZGV4XSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5zZXJ0QXQ6IGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0KGZ1bmN0aW9uIChjdXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBjdXJyLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID4gYXJyLmxlbmd0aCA/IChhcnJbaW5kZXhdID0gaXRlbSkgOiBhcnIuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChwcmVkaWNhdGUsIG5ld0l0ZW0pIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnNldChmdW5jdGlvbiAoY3VycikgeyByZXR1cm4gY3Vyci5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIChwcmVkaWNhdGUoaXRlbSwgbmV3SXRlbSkgPyBuZXdJdGVtIDogaXRlbSk7IH0pOyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVGaXJzdDogZnVuY3Rpb24gKHByZWRpY2F0ZSwgbmV3SXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGxpc3QuY3VycmVudC5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIHByZWRpY2F0ZShpdGVtLCBuZXdJdGVtKTsgfSk7XG4gICAgICAgICAgICAgICAgaW5kZXggPj0gMCAmJiBhY3Rpb25zLnVwZGF0ZUF0KGluZGV4LCBuZXdJdGVtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cHNlcnQ6IGZ1bmN0aW9uIChwcmVkaWNhdGUsIG5ld0l0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBsaXN0LmN1cnJlbnQuZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBwcmVkaWNhdGUoaXRlbSwgbmV3SXRlbSk7IH0pO1xuICAgICAgICAgICAgICAgIGluZGV4ID49IDAgPyBhY3Rpb25zLnVwZGF0ZUF0KGluZGV4LCBuZXdJdGVtKSA6IGFjdGlvbnMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzb3J0OiBmdW5jdGlvbiAoY29tcGFyZUZuKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXQoZnVuY3Rpb24gKGN1cnIpIHsgcmV0dXJuIGN1cnIuc2xpY2UoKS5zb3J0KGNvbXBhcmVGbik7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGNhbGxiYWNrRm4sIHRoaXNBcmcpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnNldChmdW5jdGlvbiAoY3VycikgeyByZXR1cm4gY3Vyci5zbGljZSgpLmZpbHRlcihjYWxsYmFja0ZuLCB0aGlzQXJnKTsgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0KGZ1bmN0aW9uIChjdXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBjdXJyLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXQoW10pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXQocmVzb2x2ZUhvb2tTdGF0ZShpbml0aWFsTGlzdCkuc2xpY2UoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgVXNlIHJlbW92ZUF0IG1ldGhvZCBpbnN0ZWFkXG4gICAgICAgICAqL1xuICAgICAgICBhLnJlbW92ZSA9IGEucmVtb3ZlQXQ7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2xpc3QuY3VycmVudCwgYWN0aW9uc107XG59XG5leHBvcnQgZGVmYXVsdCB1c2VMaXN0O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuL3V0aWwnO1xudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG52YXIgdXNlTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKGtleSwgaW5pdGlhbFZhbHVlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFpc0NsaWVudCkge1xuICAgICAgICByZXR1cm4gW2luaXRpYWxWYWx1ZSwgbm9vcCwgbm9vcF07XG4gICAgfVxuICAgIGlmICgha2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlTG9jYWxTdG9yYWdlIGtleSBtYXkgbm90IGJlIGZhbHN5Jyk7XG4gICAgfVxuICAgIHZhciBkZXNlcmlhbGl6ZXIgPSBvcHRpb25zID8gKG9wdGlvbnMucmF3ID8gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfSA6IG9wdGlvbnMuZGVzZXJpYWxpemVyKSA6IEpTT04ucGFyc2U7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZXIgPSBvcHRpb25zID8gKG9wdGlvbnMucmF3ID8gU3RyaW5nIDogb3B0aW9ucy5zZXJpYWxpemVyKSA6IEpTT04uc3RyaW5naWZ5O1xuICAgICAgICAgICAgdmFyIGxvY2FsU3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZXIobG9jYWxTdG9yYWdlVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplcihpbml0aWFsVmFsdWUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBpbiBwcml2YXRlIG1vZGUgb3IgaGFzIHN0b3JhZ2UgcmVzdHJpY3Rpb25cbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZSBjYW4gdGhyb3cuIEpTT04ucGFyc2UgYW5kIEpTT04uc3RyaW5naWZ5XG4gICAgICAgICAgICAvLyBjYW4gdGhyb3csIHRvby5cbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgICAgIH1cbiAgICB9KSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB2YXIgc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbE9yRnVuYykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0gdHlwZW9mIHZhbE9yRnVuYyA9PT0gJ2Z1bmN0aW9uJyA/IHZhbE9yRnVuYyhzdGF0ZSkgOiB2YWxPckZ1bmM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld1N0YXRlID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAob3B0aW9ucylcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yYXcpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3U3RhdGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5zZXJpYWxpemVyKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbnMuc2VyaWFsaXplcihuZXdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG5ld1N0YXRlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG5ld1N0YXRlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0U3RhdGUoZGVzZXJpYWxpemVyKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBJZiB1c2VyIGlzIGluIHByaXZhdGUgbW9kZSBvciBoYXMgc3RvcmFnZSByZXN0cmljdGlvblxuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlIGNhbiB0aHJvdy4gQWxzbyBKU09OLnN0cmluZ2lmeSBjYW4gdGhyb3cuXG4gICAgICAgIH1cbiAgICB9LCBba2V5LCBzZXRTdGF0ZV0pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHZhciByZW1vdmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgc2V0U3RhdGUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaXMgaW4gcHJpdmF0ZSBtb2RlIG9yIGhhcyBzdG9yYWdlIHJlc3RyaWN0aW9uXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2UgY2FuIHRocm93LlxuICAgICAgICB9XG4gICAgfSwgW2tleSwgc2V0U3RhdGVdKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXQsIHJlbW92ZV07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdG9yYWdlO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQ2xpZW50LCBvZmYsIG9uIH0gZnJvbSAnLi91dGlsJztcbnZhciBwYXRjaEhpc3RvcnlNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgdmFyIGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgICB2YXIgb3JpZ2luYWwgPSBoaXN0b3J5W21ldGhvZF07XG4gICAgaGlzdG9yeVttZXRob2RdID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQobWV0aG9kLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBldmVudC5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn07XG5pZiAoaXNDbGllbnQpIHtcbiAgICBwYXRjaEhpc3RvcnlNZXRob2QoJ3B1c2hTdGF0ZScpO1xuICAgIHBhdGNoSGlzdG9yeU1ldGhvZCgncmVwbGFjZVN0YXRlJyk7XG59XG52YXIgdXNlTG9jYXRpb25TZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgIHRyaWdnZXI6ICdsb2FkJyxcbiAgICBsZW5ndGg6IDEsXG59KTsgfTtcbnZhciBidWlsZFN0YXRlID0gZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICB2YXIgX2EgPSB3aW5kb3cuaGlzdG9yeSwgc3RhdGUgPSBfYS5zdGF0ZSwgbGVuZ3RoID0gX2EubGVuZ3RoO1xuICAgIHZhciBfYiA9IHdpbmRvdy5sb2NhdGlvbiwgaGFzaCA9IF9iLmhhc2gsIGhvc3QgPSBfYi5ob3N0LCBob3N0bmFtZSA9IF9iLmhvc3RuYW1lLCBocmVmID0gX2IuaHJlZiwgb3JpZ2luID0gX2Iub3JpZ2luLCBwYXRobmFtZSA9IF9iLnBhdGhuYW1lLCBwb3J0ID0gX2IucG9ydCwgcHJvdG9jb2wgPSBfYi5wcm90b2NvbCwgc2VhcmNoID0gX2Iuc2VhcmNoO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgIGhvc3Q6IGhvc3QsXG4gICAgICAgIGhvc3RuYW1lOiBob3N0bmFtZSxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgb3JpZ2luOiBvcmlnaW4sXG4gICAgICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICAgICAgcG9ydDogcG9ydCxcbiAgICAgICAgcHJvdG9jb2w6IHByb3RvY29sLFxuICAgICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICB9O1xufTtcbnZhciB1c2VMb2NhdGlvbkJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoYnVpbGRTdGF0ZSgnbG9hZCcpKSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25Qb3BzdGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFN0YXRlKGJ1aWxkU3RhdGUoJ3BvcHN0YXRlJykpOyB9O1xuICAgICAgICB2YXIgb25QdXNoc3RhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRTdGF0ZShidWlsZFN0YXRlKCdwdXNoc3RhdGUnKSk7IH07XG4gICAgICAgIHZhciBvblJlcGxhY2VzdGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFN0YXRlKGJ1aWxkU3RhdGUoJ3JlcGxhY2VzdGF0ZScpKTsgfTtcbiAgICAgICAgb24od2luZG93LCAncG9wc3RhdGUnLCBvblBvcHN0YXRlKTtcbiAgICAgICAgb24od2luZG93LCAncHVzaHN0YXRlJywgb25QdXNoc3RhdGUpO1xuICAgICAgICBvbih3aW5kb3csICdyZXBsYWNlc3RhdGUnLCBvblJlcGxhY2VzdGF0ZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvZmYod2luZG93LCAncG9wc3RhdGUnLCBvblBvcHN0YXRlKTtcbiAgICAgICAgICAgIG9mZih3aW5kb3csICdwdXNoc3RhdGUnLCBvblB1c2hzdGF0ZSk7XG4gICAgICAgICAgICBvZmYod2luZG93LCAncmVwbGFjZXN0YXRlJywgb25SZXBsYWNlc3RhdGUpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gc3RhdGU7XG59O1xudmFyIGhhc0V2ZW50Q29uc3RydWN0b3IgPSB0eXBlb2YgRXZlbnQgPT09ICdmdW5jdGlvbic7XG5leHBvcnQgZGVmYXVsdCBpc0NsaWVudCAmJiBoYXNFdmVudENvbnN0cnVjdG9yID8gdXNlTG9jYXRpb25Ccm93c2VyIDogdXNlTG9jYXRpb25TZXJ2ZXI7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZXN0Qm9keShlbCkge1xuICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsLnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsLnRhZ05hbWUgPT09ICdJRlJBTUUnKSB7XG4gICAgICAgIHZhciBkb2N1bWVudF8xID0gZWwuY29udGVudERvY3VtZW50O1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRfMSA/IGRvY3VtZW50XzEuYm9keSA6IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbG9zZXN0Qm9keShlbC5vZmZzZXRQYXJlbnQpO1xufVxuZnVuY3Rpb24gcHJldmVudERlZmF1bHQocmF3RXZlbnQpIHtcbiAgICB2YXIgZSA9IHJhd0V2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAvLyBEbyBub3QgcHJldmVudCBpZiB0aGUgZXZlbnQgaGFzIG1vcmUgdGhhbiBvbmUgdG91Y2ggKHVzdWFsbHkgbWVhbmluZyB0aGlzIGlzIGEgbXVsdGkgdG91Y2ggZ2VzdHVyZSBsaWtlIHBpbmNoIHRvIHpvb20pLlxuICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID4gMSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG52YXIgaXNJb3NEZXZpY2UgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHdpbmRvdy5uYXZpZ2F0b3IgJiZcbiAgICB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtICYmXG4gICAgL2lQKGFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pO1xudmFyIGJvZGllcyA9IG5ldyBNYXAoKTtcbnZhciBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnID8gZG9jdW1lbnQgOiB1bmRlZmluZWQ7XG52YXIgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG5leHBvcnQgZGVmYXVsdCAhZG9jXG4gICAgPyBmdW5jdGlvbiB1c2VMb2NrQm9keU1vY2soX2xvY2tlZCwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgaWYgKF9sb2NrZWQgPT09IHZvaWQgMCkgeyBfbG9ja2VkID0gdHJ1ZTsgfVxuICAgIH1cbiAgICA6IGZ1bmN0aW9uIHVzZUxvY2tCb2R5KGxvY2tlZCwgZWxlbWVudFJlZikge1xuICAgICAgICBpZiAobG9ja2VkID09PSB2b2lkIDApIHsgbG9ja2VkID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgYm9keVJlZiA9IHVzZVJlZihkb2MuYm9keSk7XG4gICAgICAgIGVsZW1lbnRSZWYgPSBlbGVtZW50UmVmIHx8IGJvZHlSZWY7XG4gICAgICAgIHZhciBsb2NrID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgIHZhciBib2R5SW5mbyA9IGJvZGllcy5nZXQoYm9keSk7XG4gICAgICAgICAgICBpZiAoIWJvZHlJbmZvKSB7XG4gICAgICAgICAgICAgICAgYm9kaWVzLnNldChib2R5LCB7IGNvdW50ZXI6IDEsIGluaXRpYWxPdmVyZmxvdzogYm9keS5zdHlsZS5vdmVyZmxvdyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudExpc3RlbmVyQWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvZGllcy5zZXQoYm9keSwgeyBjb3VudGVyOiBib2R5SW5mby5jb3VudGVyICsgMSwgaW5pdGlhbE92ZXJmbG93OiBib2R5SW5mby5pbml0aWFsT3ZlcmZsb3cgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bmxvY2sgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgdmFyIGJvZHlJbmZvID0gYm9kaWVzLmdldChib2R5KTtcbiAgICAgICAgICAgIGlmIChib2R5SW5mbykge1xuICAgICAgICAgICAgICAgIGlmIChib2R5SW5mby5jb3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZGllcy5kZWxldGUoYm9keSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0lvc0RldmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnRMaXN0ZW5lckFkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IGJvZHlJbmZvLmluaXRpYWxPdmVyZmxvdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9kaWVzLnNldChib2R5LCB7IGNvdW50ZXI6IGJvZHlJbmZvLmNvdW50ZXIgLSAxLCBpbml0aWFsT3ZlcmZsb3c6IGJvZHlJbmZvLmluaXRpYWxPdmVyZmxvdyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGdldENsb3Nlc3RCb2R5KGVsZW1lbnRSZWYuY3VycmVudCk7XG4gICAgICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgbG9jayhib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVubG9jayhib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2xvY2tlZCwgZWxlbWVudFJlZi5jdXJyZW50XSk7XG4gICAgICAgIC8vIGNsZWFuIHVwLCBvbiB1bi1tb3VudFxuICAgICAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBnZXRDbG9zZXN0Qm9keShlbGVtZW50UmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1bmxvY2soYm9keSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXSk7XG4gICAgfTtcbiIsImltcG9ydCB7IF9fc3ByZWFkQXJyYXlzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgdXNlRWZmZWN0T25jZSBmcm9tICcuL3VzZUVmZmVjdE9uY2UnO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3VzZVVwZGF0ZUVmZmVjdCc7XG52YXIgdXNlTG9nZ2VyID0gZnVuY3Rpb24gKGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcmVzdCA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHVzZUVmZmVjdE9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5cyhbY29tcG9uZW50TmFtZSArIFwiIG1vdW50ZWRcIl0sIHJlc3QpKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnNvbGUubG9nKGNvbXBvbmVudE5hbWUgKyBcIiB1bm1vdW50ZWRcIik7IH07XG4gICAgfSk7XG4gICAgdXNlVXBkYXRlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX19zcHJlYWRBcnJheXMoW2NvbXBvbmVudE5hbWUgKyBcIiB1cGRhdGVkXCJdLCByZXN0KSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTG9nZ2VyO1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbnZhciBpc1RvdWNoRXZlbnQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICByZXR1cm4gJ3RvdWNoZXMnIGluIGV2O1xufTtcbnZhciBwcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uIChldikge1xuICAgIGlmICghaXNUb3VjaEV2ZW50KGV2KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChldi50b3VjaGVzLmxlbmd0aCA8IDIgJiYgZXYucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59O1xudmFyIHVzZUxvbmdQcmVzcyA9IGZ1bmN0aW9uIChjYWxsYmFjaywgX2EpIHtcbiAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5pc1ByZXZlbnREZWZhdWx0LCBpc1ByZXZlbnREZWZhdWx0ID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBfYi5kZWxheSwgZGVsYXkgPSBfZCA9PT0gdm9pZCAwID8gMzAwIDogX2Q7XG4gICAgdmFyIHRpbWVvdXQgPSB1c2VSZWYoKTtcbiAgICB2YXIgdGFyZ2V0ID0gdXNlUmVmKCk7XG4gICAgdmFyIHN0YXJ0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIHByZXZlbnQgZ2hvc3QgY2xpY2sgb24gbW9iaWxlIGRldmljZXNcbiAgICAgICAgaWYgKGlzUHJldmVudERlZmF1bHQgJiYgZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBwcmV2ZW50RGVmYXVsdCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHRhcmdldC5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHRpbWVvdXQuY3VycmVudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2soZXZlbnQpOyB9LCBkZWxheSk7XG4gICAgfSwgW2NhbGxiYWNrLCBkZWxheSwgaXNQcmV2ZW50RGVmYXVsdF0pO1xuICAgIHZhciBjbGVhciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY2xlYXJUaW1lb3V0IGFuZCByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgIHRpbWVvdXQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICAgICAgaWYgKGlzUHJldmVudERlZmF1bHQgJiYgdGFyZ2V0LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRhcmdldC5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcHJldmVudERlZmF1bHQpO1xuICAgICAgICB9XG4gICAgfSwgW2lzUHJldmVudERlZmF1bHRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHN0YXJ0KGUpOyB9LFxuICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzdGFydChlKTsgfSxcbiAgICAgICAgb25Nb3VzZVVwOiBjbGVhcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBjbGVhcixcbiAgICAgICAgb25Ub3VjaEVuZDogY2xlYXIsXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VMb25nUHJlc3M7XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiwgX19yZXN0IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlTWFwID0gZnVuY3Rpb24gKGluaXRpYWxNYXApIHtcbiAgICBpZiAoaW5pdGlhbE1hcCA9PT0gdm9pZCAwKSB7IGluaXRpYWxNYXAgPSB7fTsgfVxuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxNYXApLCBtYXAgPSBfYVswXSwgc2V0ID0gX2FbMV07XG4gICAgdmFyIHN0YWJsZUFjdGlvbnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGtleSwgZW50cnkpIHtcbiAgICAgICAgICAgIHNldChmdW5jdGlvbiAocHJldk1hcCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2TWFwKSwgKF9hID0ge30sIF9hW2tleV0gPSBlbnRyeSwgX2EpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWxsOiBmdW5jdGlvbiAobmV3TWFwKSB7XG4gICAgICAgICAgICBzZXQobmV3TWFwKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBzZXQoZnVuY3Rpb24gKHByZXZNYXApIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBwcmV2TWFwLCBfYiA9IGtleSwgb21pdCA9IF9hW19iXSwgcmVzdCA9IF9fcmVzdChfYSwgW3R5cGVvZiBfYiA9PT0gXCJzeW1ib2xcIiA/IF9iIDogX2IgKyBcIlwiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldChpbml0aWFsTWFwKTsgfSxcbiAgICB9KTsgfSwgW3NldF0pO1xuICAgIHZhciB1dGlscyA9IF9fYXNzaWduKHsgZ2V0OiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBtYXBba2V5XTsgfSwgW21hcF0pIH0sIHN0YWJsZUFjdGlvbnMpO1xuICAgIHJldHVybiBbbWFwLCB1dGlsc107XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTWFwO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICcuL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuL3V0aWwnO1xudmFyIGRlZmF1bHRTdGF0ZSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcbn07XG52YXIgdXNlTWVhc3VyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShudWxsKSwgZWxlbWVudCA9IF9hWzBdLCByZWYgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShkZWZhdWx0U3RhdGUpLCByZWN0ID0gX2JbMF0sIHNldFJlY3QgPSBfYlsxXTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gZW50cmllc1swXS5jb250ZW50UmVjdCwgeCA9IF9hLngsIHkgPSBfYS55LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQsIHRvcF8xID0gX2EudG9wLCBsZWZ0ID0gX2EubGVmdCwgYm90dG9tID0gX2EuYm90dG9tLCByaWdodCA9IF9hLnJpZ2h0O1xuICAgICAgICAgICAgICAgIHNldFJlY3QoeyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCB0b3A6IHRvcF8xLCBsZWZ0OiBsZWZ0LCBib3R0b206IGJvdHRvbSwgcmlnaHQ6IHJpZ2h0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZWxlbWVudClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbZWxlbWVudF0pO1xuICAgIHJldHVybiBbcmVmLCByZWN0XTtcbn07XG52YXIgdXNlTWVhc3VyZU1vY2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbZnVuY3Rpb24gKCkgeyB9LCBkZWZhdWx0U3RhdGVdOyB9O1xuZXhwb3J0IGRlZmF1bHQgaXNDbGllbnQgJiYgISF3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgPyB1c2VNZWFzdXJlIDogdXNlTWVhc3VyZU1vY2s7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuL3V0aWwnO1xudmFyIHVzZU1lZGlhID0gZnVuY3Rpb24gKHF1ZXJ5LCBkZWZhdWx0U3RhdGUpIHtcbiAgICBpZiAoZGVmYXVsdFN0YXRlID09PSB2b2lkIDApIHsgZGVmYXVsdFN0YXRlID0gZmFsc2U7IH1cbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShpc0NsaWVudCA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzOyB9IDogZGVmYXVsdFN0YXRlKSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbW91bnRlZCA9IHRydWU7XG4gICAgICAgIHZhciBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgICAgIHZhciBvbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFN0YXRlKCEhbXFsLm1hdGNoZXMpO1xuICAgICAgICB9O1xuICAgICAgICBtcWwuYWRkTGlzdGVuZXIob25DaGFuZ2UpO1xuICAgICAgICBzZXRTdGF0ZShtcWwubWF0Y2hlcyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBtcWwucmVtb3ZlTGlzdGVuZXIob25DaGFuZ2UpO1xuICAgICAgICB9O1xuICAgIH0sIFtxdWVyeV0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VNZWRpYTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvZmYsIG9uIH0gZnJvbSAnLi91dGlsJztcbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xudmFyIHVzZU1lZGlhRGV2aWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSh7fSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAgICAgICAgICAgLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkZXZpY2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlczogZGV2aWNlcy5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRldmljZUlkID0gX2EuZGV2aWNlSWQsIGdyb3VwSWQgPSBfYS5ncm91cElkLCBraW5kID0gX2Eua2luZCwgbGFiZWwgPSBfYS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHsgZGV2aWNlSWQ6IGRldmljZUlkLCBncm91cElkOiBncm91cElkLCBraW5kOiBraW5kLCBsYWJlbDogbGFiZWwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2gobm9vcCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uKG5hdmlnYXRvci5tZWRpYURldmljZXMsICdkZXZpY2VjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgICAgIG9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBvZmYobmF2aWdhdG9yLm1lZGlhRGV2aWNlcywgJ2RldmljZWNoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbnZhciB1c2VNZWRpYURldmljZXNNb2NrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHt9KTsgfTtcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmICEhbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA/IHVzZU1lZGlhRGV2aWNlcyA6IHVzZU1lZGlhRGV2aWNlc01vY2s7XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZWRpYXRlZFN0YXRlKG1lZGlhdG9yLCBpbml0aWFsU3RhdGUpIHtcbiAgICB2YXIgbWVkaWF0b3JGbiA9IHVzZVJlZihtZWRpYXRvcik7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSwgc3RhdGUgPSBfYVswXSwgc2V0TWVkaWF0ZWRTdGF0ZSA9IF9hWzFdO1xuICAgIHZhciBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xuICAgICAgICBpZiAobWVkaWF0b3JGbi5jdXJyZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgbWVkaWF0b3JGbi5jdXJyZW50KG5ld1N0YXRlLCBzZXRNZWRpYXRlZFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldE1lZGlhdGVkU3RhdGUobWVkaWF0b3JGbi5jdXJyZW50KG5ld1N0YXRlKSk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGVdKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV07XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZU1ldGhvZHMgPSBmdW5jdGlvbiAoY3JlYXRlTWV0aG9kcywgaW5pdGlhbFN0YXRlKSB7XG4gICAgdmFyIHJlZHVjZXIgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChyZWR1Y2VyU3RhdGUsIGFjdGlvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSBjcmVhdGVNZXRob2RzKHJlZHVjZXJTdGF0ZSkpW2FjdGlvbi50eXBlXS5hcHBseShfYSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIH07IH0sIFtjcmVhdGVNZXRob2RzXSk7XG4gICAgdmFyIF9hID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpLCBzdGF0ZSA9IF9hWzBdLCBkaXNwYXRjaCA9IF9hWzFdO1xuICAgIHZhciB3cmFwcGVkTWV0aG9kcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aW9uVHlwZXMgPSBPYmplY3Qua2V5cyhjcmVhdGVNZXRob2RzKGluaXRpYWxTdGF0ZSkpO1xuICAgICAgICByZXR1cm4gYWN0aW9uVHlwZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHR5cGUpIHtcbiAgICAgICAgICAgIGFjY1t0eXBlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWRbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgfSwgW2NyZWF0ZU1ldGhvZHMsIGluaXRpYWxTdGF0ZV0pO1xuICAgIHJldHVybiBbc3RhdGUsIHdyYXBwZWRNZXRob2RzXTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VNZXRob2RzO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9mZiwgb24gfSBmcm9tICcuL3V0aWwnO1xudmFyIGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgeDogbnVsbCxcbiAgICAgICAgeTogbnVsbCxcbiAgICAgICAgejogbnVsbCxcbiAgICB9LFxuICAgIGFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk6IHtcbiAgICAgICAgeDogbnVsbCxcbiAgICAgICAgeTogbnVsbCxcbiAgICAgICAgejogbnVsbCxcbiAgICB9LFxuICAgIHJvdGF0aW9uUmF0ZToge1xuICAgICAgICBhbHBoYTogbnVsbCxcbiAgICAgICAgYmV0YTogbnVsbCxcbiAgICAgICAgZ2FtbWE6IG51bGwsXG4gICAgfSxcbiAgICBpbnRlcnZhbDogMTYsXG59O1xudmFyIHVzZU1vdGlvbiA9IGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgICBpZiAoaW5pdGlhbFN0YXRlID09PSB2b2lkIDApIHsgaW5pdGlhbFN0YXRlID0gZGVmYXVsdFN0YXRlOyB9XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGFjY2VsZXJhdGlvbiA9IGV2ZW50LmFjY2VsZXJhdGlvbiwgYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSA9IGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHksIHJvdGF0aW9uUmF0ZSA9IGV2ZW50LnJvdGF0aW9uUmF0ZSwgaW50ZXJ2YWwgPSBldmVudC5pbnRlcnZhbDtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgeDogYWNjZWxlcmF0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGFjY2VsZXJhdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICB6OiBhY2NlbGVyYXRpb24ueixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnksXG4gICAgICAgICAgICAgICAgICAgIHo6IGFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uUmF0ZToge1xuICAgICAgICAgICAgICAgICAgICBhbHBoYTogcm90YXRpb25SYXRlLmFscGhhLFxuICAgICAgICAgICAgICAgICAgICBiZXRhOiByb3RhdGlvblJhdGUuYmV0YSxcbiAgICAgICAgICAgICAgICAgICAgZ2FtbWE6IHJvdGF0aW9uUmF0ZS5nYW1tYSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGludGVydmFsOiBpbnRlcnZhbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvbih3aW5kb3csICdkZXZpY2Vtb3Rpb24nLCBoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9mZih3aW5kb3csICdkZXZpY2Vtb3Rpb24nLCBoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZU1vdGlvbjtcbiIsImltcG9ydCB1c2VFZmZlY3RPbmNlIGZyb20gJy4vdXNlRWZmZWN0T25jZSc7XG52YXIgdXNlTW91bnQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICB1c2VFZmZlY3RPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm4oKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VNb3VudDtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1vdW50ZWRTdGF0ZSgpIHtcbiAgICB2YXIgbW91bnRlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgdmFyIGdldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdW50ZWRSZWYuY3VycmVudDsgfSwgW10pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ2V0O1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVJhZlN0YXRlIGZyb20gJy4vdXNlUmFmU3RhdGUnO1xudmFyIHVzZU1vdXNlID0gZnVuY3Rpb24gKHJlZikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodHlwZW9mIHJlZiAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHJlZi5jdXJyZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigndXNlTW91c2UgZXhwZWN0cyBhIHNpbmdsZSByZWYgYXJndW1lbnQuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIF9hID0gdXNlUmFmU3RhdGUoe1xuICAgICAgICBkb2NYOiAwLFxuICAgICAgICBkb2NZOiAwLFxuICAgICAgICBwb3NYOiAwLFxuICAgICAgICBwb3NZOiAwLFxuICAgICAgICBlbFg6IDAsXG4gICAgICAgIGVsWTogMCxcbiAgICAgICAgZWxIOiAwLFxuICAgICAgICBlbFc6IDAsXG4gICAgfSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAocmVmICYmIHJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGxlZnQgPSBfYS5sZWZ0LCB0b3BfMSA9IF9hLnRvcCwgZWxXID0gX2Eud2lkdGgsIGVsSCA9IF9hLmhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgcG9zWCA9IGxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHBvc1kgPSB0b3BfMSArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgZWxYID0gZXZlbnQucGFnZVggLSBwb3NYO1xuICAgICAgICAgICAgICAgIHZhciBlbFkgPSBldmVudC5wYWdlWSAtIHBvc1k7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkb2NYOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgZG9jWTogZXZlbnQucGFnZVksXG4gICAgICAgICAgICAgICAgICAgIHBvc1g6IHBvc1gsXG4gICAgICAgICAgICAgICAgICAgIHBvc1k6IHBvc1ksXG4gICAgICAgICAgICAgICAgICAgIGVsWDogZWxYLFxuICAgICAgICAgICAgICAgICAgICBlbFk6IGVsWSxcbiAgICAgICAgICAgICAgICAgICAgZWxIOiBlbEgsXG4gICAgICAgICAgICAgICAgICAgIGVsVzogZWxXLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlSGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgfSwgW3JlZl0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VNb3VzZTtcbiIsImltcG9ydCB1c2VIb3ZlckRpcnR5IGZyb20gJy4vdXNlSG92ZXJEaXJ0eSc7XG5pbXBvcnQgdXNlTW91c2UgZnJvbSAnLi91c2VNb3VzZSc7XG52YXIgbnVsbFJlZiA9IHsgY3VycmVudDogbnVsbCB9O1xudmFyIHVzZU1vdXNlSG92ZXJlZCA9IGZ1bmN0aW9uIChyZWYsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB3aGVuSG92ZXJlZCA9ICEhb3B0aW9ucy53aGVuSG92ZXJlZDtcbiAgICB2YXIgYm91bmQgPSAhIW9wdGlvbnMuYm91bmQ7XG4gICAgdmFyIGlzSG92ZXJlZCA9IHVzZUhvdmVyRGlydHkocmVmLCB3aGVuSG92ZXJlZCk7XG4gICAgdmFyIHN0YXRlID0gdXNlTW91c2Uod2hlbkhvdmVyZWQgJiYgIWlzSG92ZXJlZCA/IG51bGxSZWYgOiByZWYpO1xuICAgIGlmIChib3VuZCkge1xuICAgICAgICBzdGF0ZS5lbFggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzdGF0ZS5lbFgsIHN0YXRlLmVsVykpO1xuICAgICAgICBzdGF0ZS5lbFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzdGF0ZS5lbFksIHN0YXRlLmVsSCkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTW91c2VIb3ZlcmVkO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoMCksIG1vdXNlV2hlZWxTY3JvbGxlZCA9IF9hWzBdLCBzZXRNb3VzZVdoZWVsU2Nyb2xsZWQgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXBkYXRlU2Nyb2xsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNldE1vdXNlV2hlZWxTY3JvbGxlZChlLmRlbHRhWSArIG1vdXNlV2hlZWxTY3JvbGxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHVwZGF0ZVNjcm9sbCwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdXBkYXRlU2Nyb2xsKTsgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gbW91c2VXaGVlbFNjcm9sbGVkO1xufSk7XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU11bHRpU3RhdGVWYWxpZGF0b3Ioc3RhdGVzLCB2YWxpZGF0b3IsIGluaXRpYWxWYWxpZGl0eSkge1xuICAgIGlmIChpbml0aWFsVmFsaWRpdHkgPT09IHZvaWQgMCkgeyBpbml0aWFsVmFsaWRpdHkgPSBbdW5kZWZpbmVkXTsgfVxuICAgIGlmICh0eXBlb2Ygc3RhdGVzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0YXRlcyBleHBlY3RlZCB0byBiZSBhbiBvYmplY3Qgb3IgYXJyYXksIGdvdCAnICsgdHlwZW9mIHN0YXRlcyk7XG4gICAgfVxuICAgIHZhciB2YWxpZGF0b3JJbm5lciA9IHVzZVJlZih2YWxpZGF0b3IpO1xuICAgIHZhciBzdGF0ZXNJbm5lciA9IHVzZVJlZihzdGF0ZXMpO1xuICAgIHZhbGlkYXRvcklubmVyLmN1cnJlbnQgPSB2YWxpZGF0b3I7XG4gICAgc3RhdGVzSW5uZXIuY3VycmVudCA9IHN0YXRlcztcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShpbml0aWFsVmFsaWRpdHkpLCB2YWxpZGl0eSA9IF9hWzBdLCBzZXRWYWxpZGl0eSA9IF9hWzFdO1xuICAgIHZhciB2YWxpZGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZhbGlkYXRvcklubmVyLmN1cnJlbnQubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcklubmVyLmN1cnJlbnQoc3RhdGVzSW5uZXIuY3VycmVudCwgc2V0VmFsaWRpdHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VmFsaWRpdHkodmFsaWRhdG9ySW5uZXIuY3VycmVudChzdGF0ZXNJbm5lci5jdXJyZW50KSk7XG4gICAgICAgIH1cbiAgICB9LCBbc2V0VmFsaWRpdHldKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YWxpZGF0ZSgpO1xuICAgIH0sIE9iamVjdC52YWx1ZXMoc3RhdGVzKSk7XG4gICAgcmV0dXJuIFt2YWxpZGl0eSwgdmFsaWRhdGVdO1xufVxuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvZmYsIG9uIH0gZnJvbSAnLi91dGlsJztcbnZhciBnZXRDb25uZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG5hdiA9IG5hdmlnYXRvcjtcbiAgICByZXR1cm4gbmF2LmNvbm5lY3Rpb24gfHwgbmF2Lm1vekNvbm5lY3Rpb24gfHwgbmF2LndlYmtpdENvbm5lY3Rpb247XG59O1xudmFyIGdldENvbm5lY3Rpb25TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29ubmVjdGlvbiA9IGdldENvbm5lY3Rpb24oKTtcbiAgICBpZiAoIWNvbm5lY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICB2YXIgZG93bmxpbmsgPSBjb25uZWN0aW9uLmRvd25saW5rLCBkb3dubGlua01heCA9IGNvbm5lY3Rpb24uZG93bmxpbmtNYXgsIGVmZmVjdGl2ZVR5cGUgPSBjb25uZWN0aW9uLmVmZmVjdGl2ZVR5cGUsIHR5cGUgPSBjb25uZWN0aW9uLnR5cGUsIHJ0dCA9IGNvbm5lY3Rpb24ucnR0O1xuICAgIHJldHVybiB7XG4gICAgICAgIGRvd25saW5rOiBkb3dubGluayxcbiAgICAgICAgZG93bmxpbmtNYXg6IGRvd25saW5rTWF4LFxuICAgICAgICBlZmZlY3RpdmVUeXBlOiBlZmZlY3RpdmVUeXBlLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBydHQ6IHJ0dCxcbiAgICB9O1xufTtcbnZhciB1c2VOZXR3b3JrID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHZvaWQgMCkgeyBpbml0aWFsU3RhdGUgPSB7fTsgfVxuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxvY2FsU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdmFyIGxvY2FsU2V0U3RhdGUgPSBmdW5jdGlvbiAocGF0Y2gpIHtcbiAgICAgICAgICAgIGxvY2FsU3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbG9jYWxTdGF0ZSksIHBhdGNoKTtcbiAgICAgICAgICAgIHNldFN0YXRlKGxvY2FsU3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IGdldENvbm5lY3Rpb24oKTtcbiAgICAgICAgdmFyIG9uT25saW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9jYWxTZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgb25saW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNpbmNlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbk9mZmxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NhbFNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvbmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpbmNlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNvbm5lY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NhbFNldFN0YXRlKGdldENvbm5lY3Rpb25TdGF0ZSgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgb24od2luZG93LCAnb25saW5lJywgb25PbmxpbmUpO1xuICAgICAgICBvbih3aW5kb3csICdvZmZsaW5lJywgb25PZmZsaW5lKTtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIG9uKGNvbm5lY3Rpb24sICdjaGFuZ2UnLCBvbkNvbm5lY3Rpb25DaGFuZ2UpO1xuICAgICAgICAgICAgbG9jYWxTZXRTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3RhdGUpLCB7IG9ubGluZTogbmF2aWdhdG9yLm9uTGluZSwgc2luY2U6IHVuZGVmaW5lZCB9KSwgZ2V0Q29ubmVjdGlvblN0YXRlKCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb2ZmKHdpbmRvdywgJ29ubGluZScsIG9uT25saW5lKTtcbiAgICAgICAgICAgIG9mZih3aW5kb3csICdvZmZsaW5lJywgb25PZmZsaW5lKTtcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgb2ZmKGNvbm5lY3Rpb24sICdjaGFuZ2UnLCBvbkNvbm5lY3Rpb25DaGFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gc3RhdGU7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTmV0d29yaztcbiIsImltcG9ydCB1c2VOdW1iZXIgZnJvbSAnLi91c2VDb3VudGVyJztcbmV4cG9ydCBkZWZhdWx0IHVzZU51bWJlcjtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmZ1bmN0aW9uIHVzZU9ic2VydmFibGUob2JzZXJ2YWJsZSQsIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSksIHZhbHVlID0gX2FbMF0sIHVwZGF0ZSA9IF9hWzFdO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcyA9IG9ic2VydmFibGUkLnN1YnNjcmliZSh1cGRhdGUpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcy51bnN1YnNjcmliZSgpOyB9O1xuICAgIH0sIFtvYnNlcnZhYmxlJF0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZU9ic2VydmFibGU7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2ZmLCBvbiB9IGZyb20gJy4vdXRpbCc7XG52YXIgZGVmYXVsdFN0YXRlID0ge1xuICAgIGFuZ2xlOiAwLFxuICAgIHR5cGU6ICdsYW5kc2NhcGUtcHJpbWFyeScsXG59O1xudmFyIHVzZU9yaWVudGF0aW9uID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHZvaWQgMCkgeyBpbml0aWFsU3RhdGUgPSBkZWZhdWx0U3RhdGU7IH1cbiAgICB2YXIgc2NyZWVuID0gd2luZG93LnNjcmVlbjtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpLCBzdGF0ZSA9IF9hWzBdLCBzZXRTdGF0ZSA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25fMSA9IHNjcmVlbi5vcmllbnRhdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb25fMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYW5nbGUgPSBvcmllbnRhdGlvbl8xLmFuZ2xlLCB0eXBlID0gb3JpZW50YXRpb25fMS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7IGFuZ2xlOiBhbmdsZSwgdHlwZTogdHlwZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod2luZG93Lm9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlOiB0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uID09PSAnbnVtYmVyJyA/IHdpbmRvdy5vcmllbnRhdGlvbiA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb24od2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgICAgIG9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBvZmYod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VPcmllbnRhdGlvbjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VQYWdlTGVhdmUgPSBmdW5jdGlvbiAob25QYWdlTGVhdmUsIGFyZ3MpIHtcbiAgICBpZiAoYXJncyA9PT0gdm9pZCAwKSB7IGFyZ3MgPSBbXTsgfVxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghb25QYWdlTGVhdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudCA/IGV2ZW50IDogd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgdmFyIGZyb20gPSBldmVudC5yZWxhdGVkVGFyZ2V0IHx8IGV2ZW50LnRvRWxlbWVudDtcbiAgICAgICAgICAgIGlmICghZnJvbSB8fCBmcm9tLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgICAgICAgICBvblBhZ2VMZWF2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBhcmdzKTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VQYWdlTGVhdmU7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2ZmLCBvbiB9IGZyb20gJy4vdXRpbCc7XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbnZhciB1c2VQZXJtaXNzaW9uID0gZnVuY3Rpb24gKHBlcm1pc3Npb25EZXNjKSB7XG4gICAgdmFyIG1vdW50ZWQgPSB0cnVlO1xuICAgIHZhciBwZXJtaXNzaW9uU3RhdHVzID0gbnVsbDtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgnJyksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobW91bnRlZCAmJiBwZXJtaXNzaW9uU3RhdHVzKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShwZXJtaXNzaW9uU3RhdHVzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvbkNoYW5nZSgpO1xuICAgICAgICBvbihwZXJtaXNzaW9uU3RhdHVzLCAnY2hhbmdlJywgb25DaGFuZ2UpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmF2aWdhdG9yLnBlcm1pc3Npb25zXG4gICAgICAgICAgICAucXVlcnkocGVybWlzc2lvbkRlc2MpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICBwZXJtaXNzaW9uU3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgY2hhbmdlU3RhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChub29wKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBlcm1pc3Npb25TdGF0dXMgJiYgb2ZmKHBlcm1pc3Npb25TdGF0dXMsICdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VQZXJtaXNzaW9uO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyhzdGF0ZSkge1xuICAgIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWYuY3VycmVudCA9IHN0YXRlO1xuICAgIH0pO1xuICAgIHJldHVybiByZWYuY3VycmVudDtcbn1cbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZpcnN0TW91bnRTdGF0ZSB9IGZyb20gJy4vdXNlRmlyc3RNb3VudFN0YXRlJztcbnZhciBzdHJpY3RFcXVhbHMgPSBmdW5jdGlvbiAocHJldiwgbmV4dCkgeyByZXR1cm4gcHJldiA9PT0gbmV4dDsgfTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByZXZpb3VzRGlzdGluY3QodmFsdWUsIGNvbXBhcmUpIHtcbiAgICBpZiAoY29tcGFyZSA9PT0gdm9pZCAwKSB7IGNvbXBhcmUgPSBzdHJpY3RFcXVhbHM7IH1cbiAgICB2YXIgcHJldlJlZiA9IHVzZVJlZigpO1xuICAgIHZhciBjdXJSZWYgPSB1c2VSZWYodmFsdWUpO1xuICAgIHZhciBpc0ZpcnN0TW91bnQgPSB1c2VGaXJzdE1vdW50U3RhdGUoKTtcbiAgICBpZiAoIWlzRmlyc3RNb3VudCAmJiAhY29tcGFyZShjdXJSZWYuY3VycmVudCwgdmFsdWUpKSB7XG4gICAgICAgIHByZXZSZWYuY3VycmVudCA9IGN1clJlZi5jdXJyZW50O1xuICAgICAgICBjdXJSZWYuY3VycmVudCA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcHJldlJlZi5jdXJyZW50O1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTW91bnRlZFN0YXRlIGZyb20gJy4vdXNlTW91bnRlZFN0YXRlJztcbnZhciB1c2VQcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc01vdW50ZWQgPSB1c2VNb3VudGVkU3RhdGUoKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBvblZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaXNNb3VudGVkKCkgJiYgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpc01vdW50ZWQoKSAmJiByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihvblZhbHVlLCBvbkVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVByb21pc2U7XG4iLCJpbXBvcnQgeyBfX3NwcmVhZEFycmF5cyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlUXVldWUgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlKSB7XG4gICAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdm9pZCAwKSB7IGluaXRpYWxWYWx1ZSA9IFtdOyB9XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKSwgc3RhdGUgPSBfYVswXSwgc2V0ID0gX2FbMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHNldChmdW5jdGlvbiAocXVldWUpIHsgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKHF1ZXVlLCBbdmFsdWVdKTsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHNldChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3QgPSBfYVswXSwgcmVzdCA9IF9hLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZpcnN0O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBnZXQgZmlyc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVbMF07XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsYXN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlW3N0YXRlLmxlbmd0aCAtIDFdO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VRdWV1ZTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbnZhciB1c2VSYWYgPSBmdW5jdGlvbiAobXMsIGRlbGF5KSB7XG4gICAgaWYgKG1zID09PSB2b2lkIDApIHsgbXMgPSAxZTEyOyB9XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoMCksIGVsYXBzZWQgPSBfYVswXSwgc2V0ID0gX2FbMV07XG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByYWY7XG4gICAgICAgIHZhciB0aW1lclN0b3A7XG4gICAgICAgIHZhciBzdGFydDtcbiAgICAgICAgdmFyIG9uRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGltZSA9IE1hdGgubWluKDEsIChEYXRlLm5vdygpIC0gc3RhcnQpIC8gbXMpO1xuICAgICAgICAgICAgc2V0KHRpbWUpO1xuICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShvbkZyYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aW1lclN0b3AgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgICAgICAgICAgICAgIHNldCgxKTtcbiAgICAgICAgICAgIH0sIG1zKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGxvb3AoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRpbWVyRGVsYXkgPSBzZXRUaW1lb3V0KG9uU3RhcnQsIGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lclN0b3ApO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyRGVsYXkpO1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICAgICAgfTtcbiAgICB9LCBbbXMsIGRlbGF5XSk7XG4gICAgcmV0dXJuIGVsYXBzZWQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlUmFmO1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmFmTG9vcChjYWxsYmFjaywgaW5pdGlhbGx5QWN0aXZlKSB7XG4gICAgaWYgKGluaXRpYWxseUFjdGl2ZSA9PT0gdm9pZCAwKSB7IGluaXRpYWxseUFjdGl2ZSA9IHRydWU7IH1cbiAgICB2YXIgcmFmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciByYWZBY3Rpdml0eSA9IHVzZVJlZihmYWxzZSk7XG4gICAgdmFyIHJhZkNhbGxiYWNrID0gdXNlUmVmKGNhbGxiYWNrKTtcbiAgICByYWZDYWxsYmFjay5jdXJyZW50ID0gY2FsbGJhY2s7XG4gICAgdmFyIHN0ZXAgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodGltZSkge1xuICAgICAgICBpZiAocmFmQWN0aXZpdHkuY3VycmVudCkge1xuICAgICAgICAgICAgcmFmQ2FsbGJhY2suY3VycmVudCh0aW1lKTtcbiAgICAgICAgICAgIHJhZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHZhciByZXN1bHQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBzdG9wXG4gICAgICAgICAgICAgICAgaWYgKHJhZkFjdGl2aXR5LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFmQWN0aXZpdHkuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByYWYuY3VycmVudCAmJiBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFydFxuICAgICAgICAgICAgICAgIGlmICghcmFmQWN0aXZpdHkuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICByYWZBY3Rpdml0eS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmFmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJhZkFjdGl2aXR5LmN1cnJlbnQ7IH0sXG4gICAgICAgIF07XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbml0aWFsbHlBY3RpdmUpIHtcbiAgICAgICAgICAgIHJlc3VsdFsxXSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRbMF07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVubW91bnQgZnJvbSAnLi91c2VVbm1vdW50JztcbnZhciB1c2VSYWZTdGF0ZSA9IGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgICB2YXIgZnJhbWUgPSB1c2VSZWYoMCk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB2YXIgc2V0UmFmU3RhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWUuY3VycmVudCk7XG4gICAgICAgIGZyYW1lLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0U3RhdGUodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlVW5tb3VudChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lLmN1cnJlbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFJhZlN0YXRlXTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VSYWZTdGF0ZTtcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZW5kZXJzQ291bnQoKSB7XG4gICAgcmV0dXJuICsrdXNlUmVmKDApLmN1cnJlbnQ7XG59XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiwgX19yZXN0IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LXVuaXZlcnNhbC1pbnRlcmZhY2UnO1xuaW1wb3J0IHVzZUxhdGVzdCBmcm9tICcuL3VzZUxhdGVzdCc7XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbnZhciB1c2VTY3JhdGNoID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSB7fTsgfVxuICAgIHZhciBkaXNhYmxlZCA9IHBhcmFtcy5kaXNhYmxlZDtcbiAgICB2YXIgcGFyYW1zUmVmID0gdXNlTGF0ZXN0KHBhcmFtcyk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoeyBpc1NjcmF0Y2hpbmc6IGZhbHNlIH0pLCBzdGF0ZSA9IF9hWzBdLCBzZXRTdGF0ZSA9IF9hWzFdO1xuICAgIHZhciByZWZTdGF0ZSA9IHVzZVJlZihzdGF0ZSk7XG4gICAgdmFyIHJlZlNjcmF0Y2hpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHZhciByZWZBbmltYXRpb25GcmFtZSA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShudWxsKSwgZWwgPSBfYlswXSwgc2V0RWwgPSBfYlsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZGlzYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBvbk1vdmVFdmVudCA9IGZ1bmN0aW9uIChkb2NYLCBkb2NZKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZWZBbmltYXRpb25GcmFtZS5jdXJyZW50KTtcbiAgICAgICAgICAgIHJlZkFuaW1hdGlvbkZyYW1lLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBsZWZ0ID0gX2EubGVmdCwgdG9wID0gX2EudG9wO1xuICAgICAgICAgICAgICAgIHZhciBlbFggPSBsZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gICAgICAgICAgICAgICAgdmFyIGVsWSA9IHRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICAgICAgICAgIHZhciB4ID0gZG9jWCAtIGVsWDtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGRvY1kgLSBlbFk7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKG9sZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvbGRTdGF0ZSksIHsgZHg6IHggLSAob2xkU3RhdGUueCB8fCAwKSwgZHk6IHkgLSAob2xkU3RhdGUueSB8fCAwKSwgZW5kOiBEYXRlLm5vdygpLCBpc1NjcmF0Y2hpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZlN0YXRlLmN1cnJlbnQgPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgKHBhcmFtc1JlZi5jdXJyZW50Lm9uU2NyYXRjaCB8fCBub29wKShuZXdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIG9uTW92ZUV2ZW50KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgb25Nb3ZlRXZlbnQoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uTW91c2VVcDtcbiAgICAgICAgdmFyIG9uVG91Y2hFbmQ7XG4gICAgICAgIHZhciBzdG9wU2NyYXRjaGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcmVmU2NyYXRjaGluZy5jdXJyZW50KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJlZlNjcmF0Y2hpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgcmVmU3RhdGUuY3VycmVudCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZWZTdGF0ZS5jdXJyZW50KSwgeyBpc1NjcmF0Y2hpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgKHBhcmFtc1JlZi5jdXJyZW50Lm9uU2NyYXRjaEVuZCB8fCBub29wKShyZWZTdGF0ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgaXNTY3JhdGNoaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgICAgIH07XG4gICAgICAgIG9uTW91c2VVcCA9IHN0b3BTY3JhdGNoaW5nO1xuICAgICAgICBvblRvdWNoRW5kID0gc3RvcFNjcmF0Y2hpbmc7XG4gICAgICAgIHZhciBzdGFydFNjcmF0Y2hpbmcgPSBmdW5jdGlvbiAoZG9jWCwgZG9jWSkge1xuICAgICAgICAgICAgaWYgKCFyZWZTY3JhdGNoaW5nLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIF9hID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGxlZnQgPSBfYS5sZWZ0LCB0b3AgPSBfYS50b3A7XG4gICAgICAgICAgICB2YXIgZWxYID0gbGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgICAgICAgICAgdmFyIGVsWSA9IHRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICAgICAgdmFyIHggPSBkb2NYIC0gZWxYO1xuICAgICAgICAgICAgdmFyIHkgPSBkb2NZIC0gZWxZO1xuICAgICAgICAgICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIGlzU2NyYXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdGFydDogdGltZSxcbiAgICAgICAgICAgICAgICBlbmQ6IHRpbWUsXG4gICAgICAgICAgICAgICAgZG9jWDogZG9jWCxcbiAgICAgICAgICAgICAgICBkb2NZOiBkb2NZLFxuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICBkeDogMCxcbiAgICAgICAgICAgICAgICBkeTogMCxcbiAgICAgICAgICAgICAgICBlbEg6IGVsLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICBlbFc6IGVsLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgIGVsWDogZWxYLFxuICAgICAgICAgICAgICAgIGVsWTogZWxZLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlZlN0YXRlLmN1cnJlbnQgPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIChwYXJhbXNSZWYuY3VycmVudC5vblNjcmF0Y2hTdGFydCB8fCBub29wKShuZXdTdGF0ZSk7XG4gICAgICAgICAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJlZlNjcmF0Y2hpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBzdGFydFNjcmF0Y2hpbmcoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmVmU2NyYXRjaGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXJ0U2NyYXRjaGluZyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkpO1xuICAgICAgICB9O1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgICAgICAgaWYgKHJlZkFuaW1hdGlvbkZyYW1lLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVmQW5pbWF0aW9uRnJhbWUuY3VycmVudCk7XG4gICAgICAgICAgICByZWZBbmltYXRpb25GcmFtZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlZlNjcmF0Y2hpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgcmVmU3RhdGUuY3VycmVudCA9IHsgaXNTY3JhdGNoaW5nOiBmYWxzZSB9O1xuICAgICAgICAgICAgc2V0U3RhdGUocmVmU3RhdGUuY3VycmVudCk7XG4gICAgICAgIH07XG4gICAgfSwgW2VsLCBkaXNhYmxlZCwgcGFyYW1zUmVmXSk7XG4gICAgcmV0dXJuIFtzZXRFbCwgc3RhdGVdO1xufTtcbmV4cG9ydCB2YXIgU2NyYXRjaFNlbnNvciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCBwYXJhbXMgPSBfX3Jlc3QocHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcbiAgICB2YXIgX2EgPSB1c2VTY3JhdGNoKHBhcmFtcyksIHJlZiA9IF9hWzBdLCBzdGF0ZSA9IF9hWzFdO1xuICAgIHZhciBlbGVtZW50ID0gcmVuZGVyKHByb3BzLCBzdGF0ZSk7XG4gICAgcmV0dXJuIGNsb25lRWxlbWVudChlbGVtZW50LCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyksIHsgcmVmOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnByb3BzLnJlZikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5wcm9wcy5yZWYgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnByb3BzLnJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LnByb3BzLnJlZiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wcm9wcy5yZWYoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmKGVsKTtcbiAgICAgICAgfSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlU2NyYXRjaDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VSYWZTdGF0ZSBmcm9tICcuL3VzZVJhZlN0YXRlJztcbnZhciB1c2VTY3JvbGwgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVmICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmVmLmN1cnJlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdgdXNlU2Nyb2xsYCBleHBlY3RzIGEgc2luZ2xlIHJlZiBhcmd1bWVudC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgX2EgPSB1c2VSYWZTdGF0ZSh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgfSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHJlZi5jdXJyZW50LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHk6IHJlZi5jdXJyZW50LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbcmVmXSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVNjcm9sbDtcbiIsImltcG9ydCB7IHNjcm9sbGJhcldpZHRoIH0gZnJvbSAnQHhvYm90eWkvc2Nyb2xsYmFyLXdpZHRoJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlU2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoc2Nyb2xsYmFyV2lkdGgoKSksIHNidyA9IF9hWzBdLCBzZXRTYncgPSBfYVsxXTtcbiAgICAvLyB0aGlzIG5lZWRlZCB0byBlbnN1cmUgdGhlIHNjcm9sbGJhciB3aWR0aCBpbiBjYXNlIGhvb2sgY2FsbGVkIGJlZm9yZSB0aGUgRE9NIGlzIHJlYWR5XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzYncgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRTYncoc2Nyb2xsYmFyV2lkdGgoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTsgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHNidztcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlU2Nyb2xsaW5nID0gZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgc2Nyb2xsaW5nID0gX2FbMF0sIHNldFNjcm9sbGluZyA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbGluZ1RpbWVvdXRfMTtcbiAgICAgICAgICAgIHZhciBoYW5kbGVTY3JvbGxFbmRfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRTY3JvbGxpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBoYW5kbGVTY3JvbGxfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRTY3JvbGxpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbGluZ1RpbWVvdXRfMSk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nVGltZW91dF8xID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVTY3JvbGxFbmRfMSgpOyB9LCAxNTApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbF8xLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxfMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgfTtcbiAgICB9LCBbcmVmXSk7XG4gICAgcmV0dXJuIHNjcm9sbGluZztcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VTY3JvbGxpbmc7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xudmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKHNlYXJjaCwgcGFyYW0pIHsgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKS5nZXQocGFyYW0pOyB9O1xudmFyIHVzZVNlYXJjaFBhcmFtID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldFZhbHVlKGxvY2F0aW9uLnNlYXJjaCwgcGFyYW0pOyB9KSwgdmFsdWUgPSBfYVswXSwgc2V0VmFsdWUgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShnZXRWYWx1ZShsb2NhdGlvbi5zZWFyY2gsIHBhcmFtKSk7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9uQ2hhbmdlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2hzdGF0ZScsIG9uQ2hhbmdlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3JlcGxhY2VzdGF0ZScsIG9uQ2hhbmdlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9uQ2hhbmdlKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwdXNoc3RhdGUnLCBvbkNoYW5nZSk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVwbGFjZXN0YXRlJywgb25DaGFuZ2UpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdmFsdWU7XG59O1xudmFyIHVzZVNlYXJjaFBhcmFtU2VydmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gdXNlU2VhcmNoUGFyYW0gOiB1c2VTZWFyY2hQYXJhbVNlcnZlcjtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4vdXRpbCc7XG52YXIgdXNlU2Vzc2lvblN0b3JhZ2UgPSBmdW5jdGlvbiAoa2V5LCBpbml0aWFsVmFsdWUsIHJhdykge1xuICAgIGlmICghaXNDbGllbnQpIHtcbiAgICAgICAgcmV0dXJuIFtpbml0aWFsVmFsdWUsIGZ1bmN0aW9uICgpIHsgfV07XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzZXNzaW9uU3RvcmFnZVZhbHVlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXNzaW9uU3RvcmFnZVZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCByYXcgPyBTdHJpbmcoaW5pdGlhbFZhbHVlKSA6IEpTT04uc3RyaW5naWZ5KGluaXRpYWxWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmF3ID8gc2Vzc2lvblN0b3JhZ2VWYWx1ZSA6IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2VWYWx1ZSB8fCAnbnVsbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBpbiBwcml2YXRlIG1vZGUgb3IgaGFzIHN0b3JhZ2UgcmVzdHJpY3Rpb25cbiAgICAgICAgICAgIC8vIHNlc3Npb25TdG9yYWdlIGNhbiB0aHJvdy4gSlNPTi5wYXJzZSBhbmQgSlNPTi5zdHJpbmdpZnlcbiAgICAgICAgICAgIC8vIGNhdCB0aHJvdywgdG9vLlxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0pLCBzdGF0ZSA9IF9hWzBdLCBzZXRTdGF0ZSA9IF9hWzFdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZFN0YXRlID0gcmF3ID8gU3RyaW5nKHN0YXRlKSA6IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBzZXJpYWxpemVkU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBpbiBwcml2YXRlIG1vZGUgb3IgaGFzIHN0b3JhZ2UgcmVzdHJpY3Rpb25cbiAgICAgICAgICAgIC8vIHNlc3Npb25TdG9yYWdlIGNhbiB0aHJvdy4gQWxzbyBKU09OLnN0cmluZ2lmeSBjYW4gdGhyb3cuXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlU2Vzc2lvblN0b3JhZ2U7XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiwgX19zcHJlYWRBcnJheXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VTZXQgPSBmdW5jdGlvbiAoaW5pdGlhbFNldCkge1xuICAgIGlmIChpbml0aWFsU2V0ID09PSB2b2lkIDApIHsgaW5pdGlhbFNldCA9IG5ldyBTZXQoKTsgfVxuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxTZXQpLCBzZXQgPSBfYVswXSwgc2V0U2V0ID0gX2FbMV07XG4gICAgdmFyIHN0YWJsZUFjdGlvbnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBzZXRTZXQoZnVuY3Rpb24gKHByZXZTZXQpIHsgcmV0dXJuIG5ldyBTZXQoX19zcHJlYWRBcnJheXMoQXJyYXkuZnJvbShwcmV2U2V0KSwgW2l0ZW1dKSk7IH0pOyB9O1xuICAgICAgICB2YXIgcmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIHNldFNldChmdW5jdGlvbiAocHJldlNldCkgeyByZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKHByZXZTZXQpLmZpbHRlcihmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSAhPT0gaXRlbTsgfSkpOyB9KTsgfTtcbiAgICAgICAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0U2V0KGZ1bmN0aW9uIChwcmV2U2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZTZXQuaGFzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgID8gbmV3IFNldChBcnJheS5mcm9tKHByZXZTZXQpLmZpbHRlcihmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSAhPT0gaXRlbTsgfSkpXG4gICAgICAgICAgICAgICAgICAgIDogbmV3IFNldChfX3NwcmVhZEFycmF5cyhBcnJheS5mcm9tKHByZXZTZXQpLCBbaXRlbV0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBhZGQ6IGFkZCwgcmVtb3ZlOiByZW1vdmUsIHRvZ2dsZTogdG9nZ2xlLCByZXNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0U2V0KGluaXRpYWxTZXQpOyB9IH07XG4gICAgfSwgW3NldFNldF0pO1xuICAgIHZhciB1dGlscyA9IF9fYXNzaWduKHsgaGFzOiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gc2V0LmhhcyhpdGVtKTsgfSwgW3NldF0pIH0sIHN0YWJsZUFjdGlvbnMpO1xuICAgIHJldHVybiBbc2V0LCB1dGlsc107XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlU2V0O1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZVNldFN0YXRlID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHZvaWQgMCkgeyBpbml0aWFsU3RhdGUgPSB7fTsgfVxuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSksIHN0YXRlID0gX2FbMF0sIHNldCA9IF9hWzFdO1xuICAgIHZhciBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYXRjaCkge1xuICAgICAgICBzZXQoZnVuY3Rpb24gKHByZXZTdGF0ZSkgeyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCBwYXRjaCBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gcGF0Y2gocHJldlN0YXRlKSA6IHBhdGNoKTsgfSk7XG4gICAgfSwgW3NldF0pO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlXTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VTZXRTdGF0ZTtcbiIsImltcG9ydCB7IGVxdWFsIGFzIGlzU2hhbGxvd0VxdWFsIH0gZnJvbSAnZmFzdC1zaGFsbG93LWVxdWFsJztcbmltcG9ydCB1c2VDdXN0b21Db21wYXJlRWZmZWN0IGZyb20gJy4vdXNlQ3VzdG9tQ29tcGFyZUVmZmVjdCc7XG52YXIgaXNQcmltaXRpdmUgPSBmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWwgIT09IE9iamVjdCh2YWwpOyB9O1xudmFyIHNoYWxsb3dFcXVhbERlcHNMaXN0ID0gZnVuY3Rpb24gKHByZXZEZXBzLCBuZXh0RGVwcykge1xuICAgIHJldHVybiBwcmV2RGVwcy5ldmVyeShmdW5jdGlvbiAoZGVwLCBpbmRleCkgeyByZXR1cm4gaXNTaGFsbG93RXF1YWwoZGVwLCBuZXh0RGVwc1tpbmRleF0pOyB9KTtcbn07XG52YXIgdXNlU2hhbGxvd0NvbXBhcmVFZmZlY3QgPSBmdW5jdGlvbiAoZWZmZWN0LCBkZXBzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCEoZGVwcyBpbnN0YW5jZW9mIEFycmF5KSB8fCAhZGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYHVzZVNoYWxsb3dDb21wYXJlRWZmZWN0YCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBubyBkZXBlbmRlbmNpZXMuIFVzZSBSZWFjdC51c2VFZmZlY3QgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVwcy5ldmVyeShpc1ByaW1pdGl2ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYHVzZVNoYWxsb3dDb21wYXJlRWZmZWN0YCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgYWxsIHByaW1pdGl2ZSB2YWx1ZXMuIFVzZSBSZWFjdC51c2VFZmZlY3QgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VDdXN0b21Db21wYXJlRWZmZWN0KGVmZmVjdCwgZGVwcywgc2hhbGxvd0VxdWFsRGVwc0xpc3QpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVNoYWxsb3dDb21wYXJlRWZmZWN0O1xuIiwiaW1wb3J0IHsgX19zcHJlYWRBcnJheXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi91dGlsJztcbnZhciB1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlLCB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsIHVzZVJlZiA9IFJlYWN0LnVzZVJlZjtcbnZhciBEUkFGID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAzNSk7IH07XG52YXIgdXNlU2l6ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBfYSkge1xuICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLndpZHRoLCB3aWR0aCA9IF9jID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9jLCBfZCA9IF9iLmhlaWdodCwgaGVpZ2h0ID0gX2QgPT09IHZvaWQgMCA/IEluZmluaXR5IDogX2Q7XG4gICAgaWYgKCFpc0NsaWVudCkge1xuICAgICAgICByZXR1cm4gW3R5cGVvZiBlbGVtZW50ID09PSAnZnVuY3Rpb24nID8gZWxlbWVudCh7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkgOiBlbGVtZW50LCB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfV07XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KSwgc3RhdGUgPSBfZVswXSwgc2V0U3RhdGUgPSBfZVsxXTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQoc3RhdGUpO1xuICAgIH1cbiAgICB2YXIgc3R5bGUgPSBlbGVtZW50LnByb3BzLnN0eWxlIHx8IHt9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHdpbmRvdyA9IG51bGw7XG4gICAgdmFyIHNldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZnJhbWUgPSByZWYuY3VycmVudDtcbiAgICAgICAgdmFyIHNpemUgPSBpZnJhbWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpZnJhbWUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpZnJhbWUub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICAgICAgc2V0U3RhdGUoc2l6ZSk7XG4gICAgfTtcbiAgICB2YXIgb25XaW5kb3cgPSBmdW5jdGlvbiAod2luZG93VG9MaXN0ZW5Pbikge1xuICAgICAgICB3aW5kb3dUb0xpc3Rlbk9uLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFNpemUpO1xuICAgICAgICBEUkFGKHNldFNpemUpO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWlmcmFtZSkge1xuICAgICAgICAgICAgLy8gaWZyYW1lIHdpbGwgYmUgdW5kZWZpbmVkIGlmIGNvbXBvbmVudCBpcyBhbHJlYWR5IHVubW91bnRlZFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgICAgICBvbldpbmRvdyh3aW5kb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9uTG9hZF8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkXzEpO1xuICAgICAgICAgICAgICAgIHdpbmRvdyA9IGlmcmFtZS5jb250ZW50V2luZG93O1xuICAgICAgICAgICAgICAgIG9uV2luZG93KHdpbmRvdyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRfMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0U2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB2YXIgc2l6ZWQgPSBSZWFjdC5jbG9uZUVsZW1lbnQuYXBwbHkoUmVhY3QsIF9fc3ByZWFkQXJyYXlzKFtlbGVtZW50LCB7IHN0eWxlOiBzdHlsZSB9XSwgX19zcHJlYWRBcnJheXMoW1xuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7XG4gICAgICAgICAgICByZWY6IHJlZixcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIF0sIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoZWxlbWVudC5wcm9wcy5jaGlsZHJlbikpKSk7XG4gICAgcmV0dXJuIFtzaXplZCwgc3RhdGVdO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVNpemU7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQ2xpZW50LCBvZmYsIG9uIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB1c2VNb3VudGVkU3RhdGUgZnJvbSAnLi91c2VNb3VudGVkU3RhdGUnO1xuaW1wb3J0IHVzZVNldFN0YXRlIGZyb20gJy4vdXNlU2V0U3RhdGUnO1xudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG52YXIgdXNlU2xpZGVyID0gZnVuY3Rpb24gKHJlZiwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGlzTW91bnRlZCA9IHVzZU1vdW50ZWRTdGF0ZSgpO1xuICAgIHZhciBpc1NsaWRpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHZhciB2YWx1ZVJlZiA9IHVzZVJlZigwKTtcbiAgICB2YXIgZnJhbWUgPSB1c2VSZWYoMCk7XG4gICAgdmFyIF9hID0gdXNlU2V0U3RhdGUoe1xuICAgICAgICBpc1NsaWRpbmc6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICB9KSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB2YWx1ZVJlZi5jdXJyZW50ID0gc3RhdGUudmFsdWU7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzQ2xpZW50KSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVzID0gb3B0aW9ucy5zdHlsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLnN0eWxlcztcbiAgICAgICAgICAgIHZhciByZXZlcnNlXzEgPSBvcHRpb25zLnJldmVyc2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogb3B0aW9ucy5yZXZlcnNlO1xuICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50ICYmIHN0eWxlcykge1xuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnRTY3J1YmJpbmdfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzU2xpZGluZy5jdXJyZW50ICYmIGlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIChvcHRpb25zLm9uU2NydWJTdGFydCB8fCBub29wKSgpO1xuICAgICAgICAgICAgICAgICAgICBpc1NsaWRpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgaXNTbGlkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBiaW5kRXZlbnRzXzEoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHN0b3BTY3J1YmJpbmdfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTbGlkaW5nLmN1cnJlbnQgJiYgaXNNb3VudGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKG9wdGlvbnMub25TY3J1YlN0b3AgfHwgbm9vcCkodmFsdWVSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlzU2xpZGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgaXNTbGlkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdW5iaW5kRXZlbnRzXzEoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uTW91c2VEb3duXzEgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdGFydFNjcnViYmluZ18xKCk7XG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmVfMShldmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uTW91c2VNb3ZlXzEgPSBvcHRpb25zLnZlcnRpY2FsXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIG9uU2NydWJfMShldmVudC5jbGllbnRZKTsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBvblNjcnViXzEoZXZlbnQuY2xpZW50WCk7IH07XG4gICAgICAgICAgICB2YXIgb25Ub3VjaFN0YXJ0XzEgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdGFydFNjcnViYmluZ18xKCk7XG4gICAgICAgICAgICAgICAgb25Ub3VjaE1vdmVfMShldmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uVG91Y2hNb3ZlXzEgPSBvcHRpb25zLnZlcnRpY2FsXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIG9uU2NydWJfMShldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZKTsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBvblNjcnViXzEoZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCk7IH07XG4gICAgICAgICAgICB2YXIgYmluZEV2ZW50c18xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9uKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVfMSk7XG4gICAgICAgICAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZXVwJywgc3RvcFNjcnViYmluZ18xKTtcbiAgICAgICAgICAgICAgICBvbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlXzEpO1xuICAgICAgICAgICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2hlbmQnLCBzdG9wU2NydWJiaW5nXzEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB1bmJpbmRFdmVudHNfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZV8xKTtcbiAgICAgICAgICAgICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgc3RvcFNjcnViYmluZ18xKTtcbiAgICAgICAgICAgICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZV8xKTtcbiAgICAgICAgICAgICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGVuZCcsIHN0b3BTY3J1YmJpbmdfMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uU2NydWJfMSA9IGZ1bmN0aW9uIChjbGllbnRYWSkge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIGZyYW1lLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNb3VudGVkKCkgJiYgcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWN0ID0gcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gb3B0aW9ucy52ZXJ0aWNhbCA/IHJlY3QudG9wIDogcmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aF8xID0gb3B0aW9ucy52ZXJ0aWNhbCA/IHJlY3QuaGVpZ2h0IDogcmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgcmV0dXJuaW5nIDAgd2hlbiBlbGVtZW50IGlzIGhpZGRlbiBieSBDU1NcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGVuZ3RoXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAoY2xpZW50WFkgLSBwb3MpIC8gbGVuZ3RoXzE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldmVyc2VfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbnMub25TY3J1YiB8fCBub29wKSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvbihyZWYuY3VycmVudCwgJ21vdXNlZG93bicsIG9uTW91c2VEb3duXzEpO1xuICAgICAgICAgICAgb24ocmVmLmN1cnJlbnQsICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0XzEpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvZmYocmVmLmN1cnJlbnQsICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bl8xKTtcbiAgICAgICAgICAgICAgICBvZmYocmVmLmN1cnJlbnQsICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0XzEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9LCBbcmVmLCBvcHRpb25zLnZlcnRpY2FsXSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVNsaWRlcjtcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudCBmcm9tICcuL3VzZU1vdW50JztcbmltcG9ydCB1c2VTZXRTdGF0ZSBmcm9tICcuL3VzZVNldFN0YXRlJztcbnZhciB2b2ljZXMgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93LnNwZWVjaFN5bnRoZXNpcyA9PT0gJ29iamVjdCcgPyB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpIDogW107XG52YXIgdXNlU3BlZWNoID0gZnVuY3Rpb24gKHRleHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIHZhciBfYSA9IHVzZVNldFN0YXRlKHtcbiAgICAgICAgaXNQbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgbGFuZzogb3B0cy5sYW5nIHx8ICdkZWZhdWx0JyxcbiAgICAgICAgdm9pY2U6IG9wdHMudm9pY2UgfHwgdm9pY2VzWzBdLFxuICAgICAgICByYXRlOiBvcHRzLnJhdGUgfHwgMSxcbiAgICAgICAgcGl0Y2g6IG9wdHMucGl0Y2ggfHwgMSxcbiAgICAgICAgdm9sdW1lOiBvcHRzLnZvbHVtZSB8fCAxLFxuICAgIH0pLCBzdGF0ZSA9IF9hWzBdLCBzZXRTdGF0ZSA9IF9hWzFdO1xuICAgIHZhciB1dGVycmFuY2VSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdXNlTW91bnQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXR0ZXJhbmNlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSh0ZXh0KTtcbiAgICAgICAgb3B0cy5sYW5nICYmICh1dHRlcmFuY2UubGFuZyA9IG9wdHMubGFuZyk7XG4gICAgICAgIG9wdHMudm9pY2UgJiYgKHV0dGVyYW5jZS52b2ljZSA9IG9wdHMudm9pY2UpO1xuICAgICAgICB1dHRlcmFuY2UucmF0ZSA9IG9wdHMucmF0ZSB8fCAxO1xuICAgICAgICB1dHRlcmFuY2UucGl0Y2ggPSBvcHRzLnBpdGNoIHx8IDE7XG4gICAgICAgIHV0dGVyYW5jZS52b2x1bWUgPSBvcHRzLnZvbHVtZSB8fCAxO1xuICAgICAgICB1dHRlcmFuY2Uub25zdGFydCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFN0YXRlKHsgaXNQbGF5aW5nOiB0cnVlIH0pOyB9O1xuICAgICAgICB1dHRlcmFuY2Uub25yZXN1bWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRTdGF0ZSh7IGlzUGxheWluZzogdHJ1ZSB9KTsgfTtcbiAgICAgICAgdXR0ZXJhbmNlLm9uZW5kID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0U3RhdGUoeyBpc1BsYXlpbmc6IGZhbHNlIH0pOyB9O1xuICAgICAgICB1dHRlcmFuY2Uub25wYXVzZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFN0YXRlKHsgaXNQbGF5aW5nOiBmYWxzZSB9KTsgfTtcbiAgICAgICAgdXRlcnJhbmNlUmVmLmN1cnJlbnQgPSB1dHRlcmFuY2U7XG4gICAgICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuc3BlYWsodXRlcnJhbmNlUmVmLmN1cnJlbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VTcGVlY2g7XG4iLCJpbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICcuL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xudmFyIGlzRm9jdXNlZEVsZW1lbnRFZGl0YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGlmICghYWN0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIElmIG5vdCBlbGVtZW50IGhhcyBmb2N1cywgd2UgYXNzdW1lIGl0IGlzIG5vdCBlZGl0YWJsZSwgdG9vLlxuICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBib2R5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQXNzdW1lIDxpbnB1dD4gYW5kIDx0ZXh0YXJlYT4gZWxlbWVudHMgYXJlIGVkaXRhYmxlLlxuICAgIHN3aXRjaCAoYWN0aXZlRWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgJ0lOUFVUJzpcbiAgICAgICAgY2FzZSAnVEVYVEFSRUEnOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGFueSBvdGhlciBmb2N1c2VkIGVsZW1lbnQgaWQgZWRpdGFibGUuXG4gICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbn07XG52YXIgaXNUeXBlZENoYXJHb29kID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGtleUNvZGUgPSBfYS5rZXlDb2RlLCBtZXRhS2V5ID0gX2EubWV0YUtleSwgY3RybEtleSA9IF9hLmN0cmxLZXksIGFsdEtleSA9IF9hLmFsdEtleTtcbiAgICBpZiAobWV0YUtleSB8fCBjdHJsS2V5IHx8IGFsdEtleSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIDAuLi45XG4gICAgaWYgKGtleUNvZGUgPj0gNDggJiYga2V5Q29kZSA8PSA1Nykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gYS4uLnpcbiAgICBpZiAoa2V5Q29kZSA+PSA2NSAmJiBrZXlDb2RlIDw9IDkwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBBbGwgb3RoZXIga2V5cy5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHVzZVN0YXJ0VHlwaW5nID0gZnVuY3Rpb24gKG9uU3RhcnRUeXBpbmcpIHtcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtleWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICFpc0ZvY3VzZWRFbGVtZW50RWRpdGFibGUoKSAmJiBpc1R5cGVkQ2hhckdvb2QoZXZlbnQpICYmIG9uU3RhcnRUeXBpbmcoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVN0YXJ0VHlwaW5nO1xuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkU3RhdGUgZnJvbSAnLi91c2VNb3VudGVkU3RhdGUnO1xuaW1wb3J0IHVzZVVwZGF0ZSBmcm9tICcuL3VzZVVwZGF0ZSc7XG5pbXBvcnQgdXNlVXBkYXRlRWZmZWN0IGZyb20gJy4vdXNlVXBkYXRlRWZmZWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN0YXRlTGlzdChzdGF0ZVNldCkge1xuICAgIGlmIChzdGF0ZVNldCA9PT0gdm9pZCAwKSB7IHN0YXRlU2V0ID0gW107IH1cbiAgICB2YXIgaXNNb3VudGVkID0gdXNlTW91bnRlZFN0YXRlKCk7XG4gICAgdmFyIHVwZGF0ZSA9IHVzZVVwZGF0ZSgpO1xuICAgIHZhciBpbmRleCA9IHVzZVJlZigwKTtcbiAgICAvLyBJZiBuZXcgc3RhdGUgbGlzdCBpcyBzaG9ydGVyIHRoYXQgYmVmb3JlIC0gc3dpdGNoIHRvIHRoZSBsYXN0IGVsZW1lbnRcbiAgICB1c2VVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc3RhdGVTZXQubGVuZ3RoIDw9IGluZGV4LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGluZGV4LmN1cnJlbnQgPSBzdGF0ZVNldC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGVTZXQubGVuZ3RoXSk7XG4gICAgdmFyIGFjdGlvbnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFjdGlvbnMuc2V0U3RhdGVBdChpbmRleC5jdXJyZW50ICsgMSk7IH0sXG4gICAgICAgIHByZXY6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFjdGlvbnMuc2V0U3RhdGVBdChpbmRleC5jdXJyZW50IC0gMSk7IH0sXG4gICAgICAgIHNldFN0YXRlQXQ6IGZ1bmN0aW9uIChuZXdJbmRleCkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZyBvbiB1bm1vdW50ZWQgY29tcG9uZW50XG4gICAgICAgICAgICBpZiAoIWlzTW91bnRlZCgpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmcgb24gZW1wdHkgc3RhdGVzIGxpc3RcbiAgICAgICAgICAgIGlmICghc3RhdGVTZXQubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIGluIGNhc2UgbmV3IGluZGV4IGlzIGVxdWFsIGN1cnJlbnQgLSBkbyBub3RoaW5nXG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IGluZGV4LmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gaXQgZ2l2ZXMgdGhlIGFiaWxpdHkgdG8gdHJhdmVsIHRocm91Z2ggdGhlIGxlZnQgYW5kIHJpZ2h0IGJvcmRlcnMuXG4gICAgICAgICAgICAvLyA0ZXg6IGlmIGxpc3QgY29udGFpbnMgNSBlbGVtZW50cywgYXR0ZW1wdCB0byBzZXQgaW5kZXggOSB3aWxsIGJyaW5nIHVzZSB0byA1dGggZWxlbWVudFxuICAgICAgICAgICAgLy8gaW4gY2FzZSBvZiBuZWdhdGl2ZSBpbmRleCBpdCB3aWxsIHN0YXJ0IGNvdW50aW5nIGZyb20gdGhlIHJpZ2h0LCBzbyAtMTcgd2lsbCBicmluZyB1cyB0byA0dGggZWxlbWVudFxuICAgICAgICAgICAgaW5kZXguY3VycmVudCA9IG5ld0luZGV4ID49IDAgPyBuZXdJbmRleCAlIHN0YXRlU2V0Lmxlbmd0aCA6IHN0YXRlU2V0Lmxlbmd0aCArIChuZXdJbmRleCAlIHN0YXRlU2V0Lmxlbmd0aCk7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U3RhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZyBvbiB1bm1vdW50ZWQgY29tcG9uZW50XG4gICAgICAgICAgICBpZiAoIWlzTW91bnRlZCgpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBuZXdJbmRleCA9IHN0YXRlU2V0Lmxlbmd0aCA/IHN0YXRlU2V0LmluZGV4T2Yoc3RhdGUpIDogLTE7XG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhdGUgJ1wiICsgc3RhdGUgKyBcIicgaXMgbm90IGEgdmFsaWQgc3RhdGUgKGRvZXMgbm90IGV4aXN0IGluIHN0YXRlIGxpc3QpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXguY3VycmVudCA9IG5ld0luZGV4O1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH0sXG4gICAgfSk7IH0sIFtzdGF0ZVNldF0pO1xuICAgIHJldHVybiBfX2Fzc2lnbih7IHN0YXRlOiBzdGF0ZVNldFtpbmRleC5jdXJyZW50XSwgY3VycmVudEluZGV4OiBpbmRleC5jdXJyZW50IH0sIGFjdGlvbnMpO1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN0YXRlVmFsaWRhdG9yKHN0YXRlLCB2YWxpZGF0b3IsIGluaXRpYWxTdGF0ZSkge1xuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHZvaWQgMCkgeyBpbml0aWFsU3RhdGUgPSBbdW5kZWZpbmVkXTsgfVxuICAgIHZhciB2YWxpZGF0b3JJbm5lciA9IHVzZVJlZih2YWxpZGF0b3IpO1xuICAgIHZhciBzdGF0ZUlubmVyID0gdXNlUmVmKHN0YXRlKTtcbiAgICB2YWxpZGF0b3JJbm5lci5jdXJyZW50ID0gdmFsaWRhdG9yO1xuICAgIHN0YXRlSW5uZXIuY3VycmVudCA9IHN0YXRlO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSksIHZhbGlkaXR5ID0gX2FbMF0sIHNldFZhbGlkaXR5ID0gX2FbMV07XG4gICAgdmFyIHZhbGlkYXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodmFsaWRhdG9ySW5uZXIuY3VycmVudC5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgdmFsaWRhdG9ySW5uZXIuY3VycmVudChzdGF0ZUlubmVyLmN1cnJlbnQsIHNldFZhbGlkaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFZhbGlkaXR5KHZhbGlkYXRvcklubmVyLmN1cnJlbnQoc3RhdGVJbm5lci5jdXJyZW50KSk7XG4gICAgICAgIH1cbiAgICB9LCBbc2V0VmFsaWRpdHldKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YWxpZGF0ZSgpO1xuICAgIH0sIFtzdGF0ZV0pO1xuICAgIHJldHVybiBbdmFsaWRpdHksIHZhbGlkYXRlXTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRmlyc3RNb3VudFN0YXRlIH0gZnJvbSAnLi91c2VGaXJzdE1vdW50U3RhdGUnO1xuaW1wb3J0IHsgcmVzb2x2ZUhvb2tTdGF0ZSB9IGZyb20gJy4vdXRpbC9yZXNvbHZlSG9va1N0YXRlJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZVdpdGhIaXN0b3J5KGluaXRpYWxTdGF0ZSwgY2FwYWNpdHksIGluaXRpYWxIaXN0b3J5KSB7XG4gICAgaWYgKGNhcGFjaXR5ID09PSB2b2lkIDApIHsgY2FwYWNpdHkgPSAxMDsgfVxuICAgIGlmIChjYXBhY2l0eSA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FwYWNpdHkgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAxLCBnb3QgJ1wiICsgY2FwYWNpdHkgKyBcIidcIik7XG4gICAgfVxuICAgIHZhciBpc0ZpcnN0TW91bnQgPSB1c2VGaXJzdE1vdW50U3RhdGUoKTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpLCBzdGF0ZSA9IF9hWzBdLCBpbm5lclNldFN0YXRlID0gX2FbMV07XG4gICAgdmFyIGhpc3RvcnkgPSB1c2VSZWYoKGluaXRpYWxIaXN0b3J5ICE9PSBudWxsICYmIGluaXRpYWxIaXN0b3J5ICE9PSB2b2lkIDAgPyBpbml0aWFsSGlzdG9yeSA6IFtdKSk7XG4gICAgdmFyIGhpc3RvcnlQb3NpdGlvbiA9IHVzZVJlZigwKTtcbiAgICAvLyBkbyB0aGUgc3RhdGVzIG1hbmlwdWxhdGlvbiBvbmx5IG9uIGZpcnN0IG1vdW50LCBubyBzZW5zZSB0byBsb2FkIHJlLXJlbmRlcnMgd2l0aCB1c2VsZXNzIGNhbGN1bGF0aW9uc1xuICAgIGlmIChpc0ZpcnN0TW91bnQpIHtcbiAgICAgICAgaWYgKGhpc3RvcnkuY3VycmVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGlmIGxhc3QgZWxlbWVudCBvZiBoaXN0b3J5ICE9PSBpbml0aWFsIC0gcHVzaCBpbml0aWFsIHRvIGhpc3RvcnlcbiAgICAgICAgICAgIGlmIChoaXN0b3J5LmN1cnJlbnRbaGlzdG9yeS5jdXJyZW50Lmxlbmd0aCAtIDFdICE9PSBpbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LmN1cnJlbnQucHVzaChpbml0aWFsU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgaW5pdGlhbCBoaXN0b3J5IGJpZ2dlciB0aGF0IGNhcGFjaXR5IC0gY3JvcCB0aGUgZmlyc3QgZWxlbWVudHMgb3V0XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5jdXJyZW50Lmxlbmd0aCA+IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5jdXJyZW50ID0gaGlzdG9yeS5jdXJyZW50LnNsaWNlKGhpc3RvcnkuY3VycmVudC5sZW5ndGggLSBjYXBhY2l0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpbml0aWF0ZSB0aGUgaGlzdG9yeSB3aXRoIGluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgIGhpc3RvcnkuY3VycmVudC5wdXNoKGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnQgPSBoaXN0b3J5LmN1cnJlbnQubGVuZ3RoICYmIGhpc3RvcnkuY3VycmVudC5sZW5ndGggLSAxO1xuICAgIH1cbiAgICB2YXIgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3U3RhdGUpIHtcbiAgICAgICAgaW5uZXJTZXRTdGF0ZShmdW5jdGlvbiAoY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHJlc29sdmVIb29rU3RhdGUobmV3U3RhdGUpO1xuICAgICAgICAgICAgLy8gaXMgc3RhdGUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSAhPT0gY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgY3VycmVudCBwb3NpdGlvbiBpcyBub3QgdGhlIGxhc3QgLSBwb3AgZWxlbWVudCB0byB0aGUgcmlnaHRcbiAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnQgPCBoaXN0b3J5LmN1cnJlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmN1cnJlbnQgPSBoaXN0b3J5LmN1cnJlbnQuc2xpY2UoMCwgaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnQgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnQgPSBoaXN0b3J5LmN1cnJlbnQucHVzaChuZXdTdGF0ZSkgLSAxO1xuICAgICAgICAgICAgICAgIC8vIGlmIGNhcGFjaXR5IGlzIHJlYWNoZWQgLSBzaGlmdCBmaXJzdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5LmN1cnJlbnQubGVuZ3RoID4gY2FwYWNpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5jdXJyZW50ID0gaGlzdG9yeS5jdXJyZW50LnNsaWNlKGhpc3RvcnkuY3VycmVudC5sZW5ndGggLSBjYXBhY2l0eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICB9KTtcbiAgICB9LCBbc3RhdGUsIGNhcGFjaXR5XSk7XG4gICAgdmFyIGhpc3RvcnlTdGF0ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgaGlzdG9yeTogaGlzdG9yeS5jdXJyZW50LFxuICAgICAgICBwb3NpdGlvbjogaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnQsXG4gICAgICAgIGNhcGFjaXR5OiBjYXBhY2l0eSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDE7IH1cbiAgICAgICAgICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIHdlIGFscmVhZHkgYXQgdGhlIGxlZnQgYm9yZGVyXG4gICAgICAgICAgICBpZiAoIWhpc3RvcnlQb3NpdGlvbi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5uZXJTZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnQgLT0gTWF0aC5taW4oYW1vdW50LCBoaXN0b3J5UG9zaXRpb24uY3VycmVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpc3RvcnkuY3VycmVudFtoaXN0b3J5UG9zaXRpb24uY3VycmVudF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDE7IH1cbiAgICAgICAgICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIHdlIGFscmVhZHkgYXQgdGhlIHJpZ2h0IGJvcmRlclxuICAgICAgICAgICAgaWYgKGhpc3RvcnlQb3NpdGlvbi5jdXJyZW50ID09PSBoaXN0b3J5LmN1cnJlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlubmVyU2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhpc3RvcnlQb3NpdGlvbi5jdXJyZW50ID0gTWF0aC5taW4oaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnQgKyBhbW91bnQsIGhpc3RvcnkuY3VycmVudC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGlzdG9yeS5jdXJyZW50W2hpc3RvcnlQb3NpdGlvbi5jdXJyZW50XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnbzogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IGhpc3RvcnlQb3NpdGlvbi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5uZXJTZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnQgPVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gTWF0aC5tYXgoaGlzdG9yeS5jdXJyZW50Lmxlbmd0aCArIHBvc2l0aW9uLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihoaXN0b3J5LmN1cnJlbnQubGVuZ3RoIC0gMSwgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXN0b3J5LmN1cnJlbnRbaGlzdG9yeVBvc2l0aW9uLmN1cnJlbnRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7IH0sIFtzdGF0ZV0pO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBoaXN0b3J5U3RhdGVdO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVubW91bnQgZnJvbSAnLi91c2VVbm1vdW50JztcbnZhciB1c2VUaHJvdHRsZSA9IGZ1bmN0aW9uICh2YWx1ZSwgbXMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDIwMDsgfVxuICAgIHZhciBfYSA9IHVzZVN0YXRlKHZhbHVlKSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB2YXIgdGltZW91dCA9IHVzZVJlZigpO1xuICAgIHZhciBuZXh0VmFsdWUgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIGhhc05leHRWYWx1ZSA9IHVzZVJlZigwKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRpbWVvdXQuY3VycmVudCkge1xuICAgICAgICAgICAgc2V0U3RhdGUodmFsdWUpO1xuICAgICAgICAgICAgdmFyIHRpbWVvdXRDYWxsYmFja18xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNOZXh0VmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNOZXh0VmFsdWUuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShuZXh0VmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQuY3VycmVudCA9IHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrXzEsIG1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGltZW91dC5jdXJyZW50ID0gc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2tfMSwgbXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV4dFZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGhhc05leHRWYWx1ZS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pO1xuICAgIHVzZVVubW91bnQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aW1lb3V0LmN1cnJlbnQgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQuY3VycmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVRocm90dGxlO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVubW91bnQgZnJvbSAnLi91c2VVbm1vdW50JztcbnZhciB1c2VUaHJvdHRsZUZuID0gZnVuY3Rpb24gKGZuLCBtcywgYXJncykge1xuICAgIGlmIChtcyA9PT0gdm9pZCAwKSB7IG1zID0gMjAwOyB9XG4gICAgdmFyIF9hID0gdXNlU3RhdGUobnVsbCksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdmFyIHRpbWVvdXQgPSB1c2VSZWYoKTtcbiAgICB2YXIgbmV4dEFyZ3MgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRpbWVvdXQuY3VycmVudCkge1xuICAgICAgICAgICAgc2V0U3RhdGUoZm4uYXBwbHkodm9pZCAwLCBhcmdzKSk7XG4gICAgICAgICAgICB2YXIgdGltZW91dENhbGxiYWNrXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRBcmdzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoZm4uYXBwbHkodm9pZCAwLCBuZXh0QXJncy5jdXJyZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRBcmdzLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQuY3VycmVudCA9IHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrXzEsIG1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGltZW91dC5jdXJyZW50ID0gc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2tfMSwgbXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV4dEFyZ3MuY3VycmVudCA9IGFyZ3M7XG4gICAgICAgIH1cbiAgICB9LCBhcmdzKTtcbiAgICB1c2VVbm1vdW50KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZW91dC5jdXJyZW50ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0LmN1cnJlbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VUaHJvdHRsZUZuO1xuIiwiaW1wb3J0IHVzZVRpbWVvdXRGbiBmcm9tICcuL3VzZVRpbWVvdXRGbic7XG5pbXBvcnQgdXNlVXBkYXRlIGZyb20gJy4vdXNlVXBkYXRlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRpbWVvdXQobXMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDA7IH1cbiAgICB2YXIgdXBkYXRlID0gdXNlVXBkYXRlKCk7XG4gICAgcmV0dXJuIHVzZVRpbWVvdXRGbih1cGRhdGUsIG1zKTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRpbWVvdXRGbihmbiwgbXMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDA7IH1cbiAgICB2YXIgcmVhZHkgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHZhciB0aW1lb3V0ID0gdXNlUmVmKCk7XG4gICAgdmFyIGNhbGxiYWNrID0gdXNlUmVmKGZuKTtcbiAgICB2YXIgaXNSZWFkeSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWR5LmN1cnJlbnQ7IH0sIFtdKTtcbiAgICB2YXIgc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICByZWFkeS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHRpbWVvdXQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICAgICAgdGltZW91dC5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWFkeS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmN1cnJlbnQoKTtcbiAgICAgICAgfSwgbXMpO1xuICAgIH0sIFttc10pO1xuICAgIHZhciBjbGVhciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVhZHkuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHRpbWVvdXQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgLy8gdXBkYXRlIHJlZiB3aGVuIGZ1bmN0aW9uIGNoYW5nZXNcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjay5jdXJyZW50ID0gZm47XG4gICAgfSwgW2ZuXSk7XG4gICAgLy8gc2V0IG9uIG1vdW50LCBjbGVhciBvbiB1bm1vdW50XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0KCk7XG4gICAgICAgIHJldHVybiBjbGVhcjtcbiAgICB9LCBbbXNdKTtcbiAgICByZXR1cm4gW2lzUmVhZHksIGNsZWFyLCBzZXRdO1xufVxuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG52YXIgREVGQVVMVF9VU0VfVElUTEVfT1BUSU9OUyA9IHtcbiAgICByZXN0b3JlT25Vbm1vdW50OiBmYWxzZSxcbn07XG5mdW5jdGlvbiB1c2VUaXRsZSh0aXRsZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IERFRkFVTFRfVVNFX1RJVExFX09QVElPTlM7IH1cbiAgICB2YXIgcHJldlRpdGxlUmVmID0gdXNlUmVmKGRvY3VtZW50LnRpdGxlKTtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVzdG9yZU9uVW5tb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHByZXZUaXRsZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VUaXRsZSA6IGZ1bmN0aW9uIChfdGl0bGUpIHsgfTtcbiIsImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG52YXIgdG9nZ2xlUmVkdWNlciA9IGZ1bmN0aW9uIChzdGF0ZSwgbmV4dFZhbHVlKSB7IHJldHVybiAodHlwZW9mIG5leHRWYWx1ZSA9PT0gJ2Jvb2xlYW4nID8gbmV4dFZhbHVlIDogIXN0YXRlKTsgfTtcbnZhciB1c2VUb2dnbGUgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHVzZVJlZHVjZXIodG9nZ2xlUmVkdWNlciwgaW5pdGlhbFZhbHVlKTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VUb2dnbGU7XG4iLCJpbXBvcnQgeyBlYXNpbmcgfSBmcm9tICd0cy1lYXNpbmcnO1xuaW1wb3J0IHVzZVJhZiBmcm9tICcuL3VzZVJhZic7XG52YXIgdXNlVHdlZW4gPSBmdW5jdGlvbiAoZWFzaW5nTmFtZSwgbXMsIGRlbGF5KSB7XG4gICAgaWYgKGVhc2luZ05hbWUgPT09IHZvaWQgMCkgeyBlYXNpbmdOYW1lID0gJ2luQ2lyYyc7IH1cbiAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDIwMDsgfVxuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgIHZhciBmbiA9IGVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgICB2YXIgdCA9IHVzZVJhZihtcywgZGVsYXkpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VzZVR3ZWVuKCkgZXhwZWN0ZWQgXCJlYXNpbmdOYW1lXCIgcHJvcGVydHkgdG8gYmUgYSB2YWxpZCBlYXNpbmcgZnVuY3Rpb24gbmFtZSwgbGlrZTonICtcbiAgICAgICAgICAgICAgICAnXCInICtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhlYXNpbmcpLmpvaW4oJ1wiLCBcIicpICtcbiAgICAgICAgICAgICAgICAnXCIuJyk7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm4odCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVHdlZW47XG4iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRWZmZWN0T25jZSBmcm9tICcuL3VzZUVmZmVjdE9uY2UnO1xudmFyIHVzZVVubW91bnQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgZm5SZWYgPSB1c2VSZWYoZm4pO1xuICAgIC8vIHVwZGF0ZSB0aGUgcmVmIGVhY2ggcmVuZGVyIHNvIGlmIGl0IGNoYW5nZSB0aGUgbmV3ZXN0IGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZFxuICAgIGZuUmVmLmN1cnJlbnQgPSBmbjtcbiAgICB1c2VFZmZlY3RPbmNlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZuUmVmLmN1cnJlbnQoKTsgfTsgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVW5tb3VudDtcbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZVVubW91bnRQcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZWZVbm1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZlVubW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9OyB9KTtcbiAgICB2YXIgd3JhcHBlciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmFjZSA9IGZ1bmN0aW9uIChwcm9taXNlLCBvbkVycm9yKSB7XG4gICAgICAgICAgICB2YXIgbmV3UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZlVubW91bnRlZC5jdXJyZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZlVubW91bnRlZC5jdXJyZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob25FcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1c2VVbm1vdW50UHJvbWlzZScsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1Byb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByYWNlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VVbm1vdW50UHJvbWlzZTtcbiIsImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG52YXIgdXBkYXRlUmVkdWNlciA9IGZ1bmN0aW9uIChudW0pIHsgcmV0dXJuIChudW0gKyAxKSAlIDEwMDAwMDA7IH07XG52YXIgdXNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVJlZHVjZXIodXBkYXRlUmVkdWNlciwgMCksIHVwZGF0ZSA9IF9hWzFdO1xuICAgIHJldHVybiB1cGRhdGU7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVXBkYXRlO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRmlyc3RNb3VudFN0YXRlIH0gZnJvbSAnLi91c2VGaXJzdE1vdW50U3RhdGUnO1xudmFyIHVzZVVwZGF0ZUVmZmVjdCA9IGZ1bmN0aW9uIChlZmZlY3QsIGRlcHMpIHtcbiAgICB2YXIgaXNGaXJzdE1vdW50ID0gdXNlRmlyc3RNb3VudFN0YXRlKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0ZpcnN0TW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0sIGRlcHMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVVwZGF0ZUVmZmVjdDtcbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgdXNlTGlzdCBmcm9tICcuL3VzZUxpc3QnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYHVzZUxpc3RgIGhvb2sncyB1cHNlcnQgYWN0aW9uIGluc3RlYWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXBzZXJ0KHByZWRpY2F0ZSwgaW5pdGlhbExpc3QpIHtcbiAgICBpZiAoaW5pdGlhbExpc3QgPT09IHZvaWQgMCkgeyBpbml0aWFsTGlzdCA9IFtdOyB9XG4gICAgdmFyIF9hID0gdXNlTGlzdChpbml0aWFsTGlzdCksIGxpc3QgPSBfYVswXSwgbGlzdEFjdGlvbnMgPSBfYVsxXTtcbiAgICByZXR1cm4gW1xuICAgICAgICBsaXN0LFxuICAgICAgICBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbGlzdEFjdGlvbnMpLCB7IHVwc2VydDogZnVuY3Rpb24gKG5ld0l0ZW0pIHtcbiAgICAgICAgICAgICAgICBsaXN0QWN0aW9ucy51cHNlcnQocHJlZGljYXRlLCBuZXdJdGVtKTtcbiAgICAgICAgICAgIH0gfSksXG4gICAgXTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbnZhciBpc1ZpYnJhdGlvbkFwaVN1cHBvcnRlZCA9IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmICd2aWJyYXRlJyBpbiBuYXZpZ2F0b3I7XG52YXIgdXNlVmlicmF0ZU1vY2sgPSBmdW5jdGlvbiAoKSB7IH07XG5mdW5jdGlvbiB1c2VWaWJyYXRlKGVuYWJsZWQsIHBhdHRlcm4sIGxvb3ApIHtcbiAgICBpZiAoZW5hYmxlZCA9PT0gdm9pZCAwKSB7IGVuYWJsZWQgPSB0cnVlOyB9XG4gICAgaWYgKHBhdHRlcm4gPT09IHZvaWQgMCkgeyBwYXR0ZXJuID0gWzEwMDAsIDEwMDBdOyB9XG4gICAgaWYgKGxvb3AgPT09IHZvaWQgMCkgeyBsb29wID0gdHJ1ZTsgfVxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnRlcnZhbDtcbiAgICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci52aWJyYXRlKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBwYXR0ZXJuIGluc3RhbmNlb2YgQXJyYXkgPyBwYXR0ZXJuLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSArIGI7IH0pIDogcGF0dGVybjtcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnZpYnJhdGUocGF0dGVybik7XG4gICAgICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvci52aWJyYXRlKDApO1xuICAgICAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbZW5hYmxlZF0pO1xufVxuZXhwb3J0IGRlZmF1bHQgaXNWaWJyYXRpb25BcGlTdXBwb3J0ZWQgPyB1c2VWaWJyYXRlIDogdXNlVmlicmF0ZU1vY2s7XG4iLCJpbXBvcnQgY3JlYXRlSFRNTE1lZGlhSG9vayBmcm9tICcuL3V0aWwvY3JlYXRlSFRNTE1lZGlhSG9vayc7XG52YXIgdXNlVmlkZW8gPSBjcmVhdGVIVE1MTWVkaWFIb29rKCd2aWRlbycpO1xuZXhwb3J0IGRlZmF1bHQgdXNlVmlkZW87XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgdXNlUmFmU3RhdGUgZnJvbSAnLi91c2VSYWZTdGF0ZSc7XG52YXIgdXNlV2luZG93U2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVJhZlN0YXRlKHtcbiAgICAgICAgeDogaXNDbGllbnQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiAwLFxuICAgICAgICB5OiBpc0NsaWVudCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IDAsXG4gICAgfSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVdpbmRvd1Njcm9sbDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VSYWZTdGF0ZSBmcm9tICcuL3VzZVJhZlN0YXRlJztcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi91dGlsJztcbnZhciB1c2VXaW5kb3dTaXplID0gZnVuY3Rpb24gKGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCkge1xuICAgIGlmIChpbml0aWFsV2lkdGggPT09IHZvaWQgMCkgeyBpbml0aWFsV2lkdGggPSBJbmZpbml0eTsgfVxuICAgIGlmIChpbml0aWFsSGVpZ2h0ID09PSB2b2lkIDApIHsgaW5pdGlhbEhlaWdodCA9IEluZmluaXR5OyB9XG4gICAgdmFyIF9hID0gdXNlUmFmU3RhdGUoe1xuICAgICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGluaXRpYWxXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGluaXRpYWxIZWlnaHQsXG4gICAgfSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzQ2xpZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlcl8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcl8xKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXJfMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplO1xuIiwiaW1wb3J0IGlzRGVlcEVxdWFsUmVhY3QgZnJvbSAnZmFzdC1kZWVwLWVxdWFsL3JlYWN0JztcbmV4cG9ydCB2YXIgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JztcbmV4cG9ydCB2YXIgb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gb2JqLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkob2JqLCBhcmdzKTtcbn07XG5leHBvcnQgdmFyIG9mZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseShvYmosIGFyZ3MpO1xufTtcbmV4cG9ydCB2YXIgaXNEZWVwRXF1YWwgPSBpc0RlZXBFcXVhbFJlYWN0O1xuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNldFN0YXRlIGZyb20gJy4uL3VzZVNldFN0YXRlJztcbmltcG9ydCBwYXJzZVRpbWVSYW5nZXMgZnJvbSAnLi9wYXJzZVRpbWVSYW5nZXMnO1xudmFyIGNyZWF0ZUhUTUxNZWRpYUhvb2sgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBmdW5jdGlvbiAoZWxPclByb3BzKSB7XG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgdmFyIHByb3BzO1xuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChlbE9yUHJvcHMpKSB7XG4gICAgICAgIGVsZW1lbnQgPSBlbE9yUHJvcHM7XG4gICAgICAgIHByb3BzID0gZWxlbWVudC5wcm9wcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByb3BzID0gZWxPclByb3BzO1xuICAgIH1cbiAgICB2YXIgX2EgPSB1c2VTZXRTdGF0ZSh7XG4gICAgICAgIGJ1ZmZlcmVkOiBbXSxcbiAgICAgICAgdGltZTogMCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICAgICAgbXV0ZWQ6IGZhbHNlLFxuICAgICAgICB2b2x1bWU6IDEsXG4gICAgfSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdmFyIHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgd3JhcEV2ZW50ID0gZnVuY3Rpb24gKHVzZXJFdmVudCwgcHJveHlFdmVudCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHByb3h5RXZlbnQgJiYgcHJveHlFdmVudChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB1c2VyRXZlbnQgJiYgdXNlckV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBvblBsYXkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRTdGF0ZSh7IHBhdXNlZDogZmFsc2UgfSk7IH07XG4gICAgdmFyIG9uUGF1c2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRTdGF0ZSh7IHBhdXNlZDogdHJ1ZSB9KTsgfTtcbiAgICB2YXIgb25Wb2x1bWVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgbXV0ZWQ6IGVsLm11dGVkLFxuICAgICAgICAgICAgdm9sdW1lOiBlbC52b2x1bWUsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIG9uRHVyYXRpb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gZWwuZHVyYXRpb24sIGJ1ZmZlcmVkID0gZWwuYnVmZmVyZWQ7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGJ1ZmZlcmVkOiBwYXJzZVRpbWVSYW5nZXMoYnVmZmVyZWQpLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBvblRpbWVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3RhdGUoeyB0aW1lOiBlbC5jdXJyZW50VGltZSB9KTtcbiAgICB9O1xuICAgIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFN0YXRlKHsgYnVmZmVyZWQ6IHBhcnNlVGltZVJhbmdlcyhlbC5idWZmZXJlZCkgfSk7XG4gICAgfTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIF9fYXNzaWduKF9fYXNzaWduKHsgY29udHJvbHM6IGZhbHNlIH0sIHByb3BzKSwgeyByZWY6IHJlZiwgb25QbGF5OiB3cmFwRXZlbnQocHJvcHMub25QbGF5LCBvblBsYXkpLCBvblBhdXNlOiB3cmFwRXZlbnQocHJvcHMub25QYXVzZSwgb25QYXVzZSksIG9uVm9sdW1lQ2hhbmdlOiB3cmFwRXZlbnQocHJvcHMub25Wb2x1bWVDaGFuZ2UsIG9uVm9sdW1lQ2hhbmdlKSwgb25EdXJhdGlvbkNoYW5nZTogd3JhcEV2ZW50KHByb3BzLm9uRHVyYXRpb25DaGFuZ2UsIG9uRHVyYXRpb25DaGFuZ2UpLCBvblRpbWVVcGRhdGU6IHdyYXBFdmVudChwcm9wcy5vblRpbWVVcGRhdGUsIG9uVGltZVVwZGF0ZSksIG9uUHJvZ3Jlc3M6IHdyYXBFdmVudChwcm9wcy5vblByb2dyZXNzLCBvblByb2dyZXNzKSB9KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIF9fYXNzaWduKF9fYXNzaWduKHsgY29udHJvbHM6IGZhbHNlIH0sIHByb3BzKSwgeyByZWY6IHJlZiwgb25QbGF5OiB3cmFwRXZlbnQocHJvcHMub25QbGF5LCBvblBsYXkpLCBvblBhdXNlOiB3cmFwRXZlbnQocHJvcHMub25QYXVzZSwgb25QYXVzZSksIG9uVm9sdW1lQ2hhbmdlOiB3cmFwRXZlbnQocHJvcHMub25Wb2x1bWVDaGFuZ2UsIG9uVm9sdW1lQ2hhbmdlKSwgb25EdXJhdGlvbkNoYW5nZTogd3JhcEV2ZW50KHByb3BzLm9uRHVyYXRpb25DaGFuZ2UsIG9uRHVyYXRpb25DaGFuZ2UpLCBvblRpbWVVcGRhdGU6IHdyYXBFdmVudChwcm9wcy5vblRpbWVVcGRhdGUsIG9uVGltZVVwZGF0ZSksIG9uUHJvZ3Jlc3M6IHdyYXBFdmVudChwcm9wcy5vblByb2dyZXNzLCBvblByb2dyZXNzKSB9KSk7IC8vIFRPRE86IGZpeCB0aGlzIHR5cGluZy5cbiAgICB9XG4gICAgLy8gU29tZSBicm93c2VycyByZXR1cm4gYFByb21pc2VgIG9uIGAucGxheSgpYCBhbmQgbWF5IHRocm93IGVycm9yc1xuICAgIC8vIGlmIG9uZSB0cmllcyB0byBleGVjdXRlIGFub3RoZXIgYC5wbGF5KClgIG9yIGAucGF1c2UoKWAgd2hpbGUgdGhhdFxuICAgIC8vIHByb21pc2UgaXMgcmVzb2x2aW5nLiBTbyB3ZSBwcmV2ZW50IHRoYXQgd2l0aCB0aGlzIGxvY2suXG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01OTMyNzNcbiAgICB2YXIgbG9ja1BsYXkgPSBmYWxzZTtcbiAgICB2YXIgY29udHJvbHMgPSB7XG4gICAgICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxvY2tQbGF5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBlbC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdmFyIGlzUHJvbWlzZSA9IHR5cGVvZiBwcm9taXNlID09PSAnb2JqZWN0JztcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2tQbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc2V0TG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tQbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihyZXNldExvY2ssIHJlc2V0TG9jayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSxcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGVsICYmICFsb2NrUGxheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZWVrOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoIWVsIHx8IHN0YXRlLmR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lID0gTWF0aC5taW4oc3RhdGUuZHVyYXRpb24sIE1hdGgubWF4KDAsIHRpbWUpKTtcbiAgICAgICAgICAgIGVsLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICAgICAgfSxcbiAgICAgICAgdm9sdW1lOiBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2b2x1bWUgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB2b2x1bWUpKTtcbiAgICAgICAgICAgIGVsLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgdm9sdW1lOiB2b2x1bWUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG11dGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5tdXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5tdXRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1c2VBdWRpbygpIHJlZiB0byA8YXVkaW8+IGVsZW1lbnQgaXMgZW1wdHkgYXQgbW91bnQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0l0IHNlZW0geW91IGhhdmUgbm90IHJlbmRlcmVkIHRoZSBhdWRpbyBlbGVtZW50LCB3aGljaCBpdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXR1cm5zIGFzIHRoZSBmaXJzdCBhcmd1bWVudCBjb25zdCBbYXVkaW9dID0gdXNlQXVkaW8oLi4uKS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VzZVZpZGVvKCkgcmVmIHRvIDx2aWRlbz4gZWxlbWVudCBpcyBlbXB0eSBhdCBtb3VudC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnSXQgc2VlbSB5b3UgaGF2ZSBub3QgcmVuZGVyZWQgdGhlIHZpZGVvIGVsZW1lbnQsIHdoaWNoIGl0ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3JldHVybnMgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGNvbnN0IFt2aWRlb10gPSB1c2VWaWRlbyguLi4pLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICB2b2x1bWU6IGVsLnZvbHVtZSxcbiAgICAgICAgICAgIG11dGVkOiBlbC5tdXRlZCxcbiAgICAgICAgICAgIHBhdXNlZDogZWwucGF1c2VkLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gU3RhcnQgbWVkaWEsIGlmIGF1dG9QbGF5IHJlcXVlc3RlZC5cbiAgICAgICAgaWYgKHByb3BzLmF1dG9QbGF5ICYmIGVsLnBhdXNlZCkge1xuICAgICAgICAgICAgY29udHJvbHMucGxheSgpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnNyY10pO1xuICAgIHJldHVybiBbZWxlbWVudCwgc3RhdGUsIGNvbnRyb2xzLCByZWZdO1xufTsgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhUTUxNZWRpYUhvb2s7XG4iLCJ2YXIgcGFyc2VUaW1lUmFuZ2VzID0gZnVuY3Rpb24gKHJhbmdlcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLFxuICAgICAgICAgICAgZW5kOiByYW5nZXMuZW5kKGkpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBwYXJzZVRpbWVSYW5nZXM7XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhvb2tTdGF0ZShuZXdTdGF0ZSwgY3VycmVudFN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3U3RhdGUoY3VycmVudFN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLyohXG4qIHNjcmVlbmZ1bGxcbiogdjUuMC4yIC0gMjAyMC0wMi0xM1xuKiAoYykgU2luZHJlIFNvcmh1czsgTUlUIExpY2Vuc2VcbiovXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGRvY3VtZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuZG9jdW1lbnQgOiB7fTtcblx0dmFyIGlzQ29tbW9uanMgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cztcblxuXHR2YXIgZm4gPSAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciB2YWw7XG5cblx0XHR2YXIgZm5NYXAgPSBbXG5cdFx0XHRbXG5cdFx0XHRcdCdyZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCdleGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCdmdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdCdmdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0XHRcdCdmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHRcdFx0J2Z1bGxzY3JlZW5lcnJvcidcblx0XHRcdF0sXG5cdFx0XHQvLyBOZXcgV2ViS2l0XG5cdFx0XHRbXG5cdFx0XHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0XHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHRcdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblxuXHRcdFx0XSxcblx0XHRcdC8vIE9sZCBXZWJLaXRcblx0XHRcdFtcblx0XHRcdFx0J3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHRcdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHQnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdFx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0XHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0XHRcdCdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHRcdFx0J21vekZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0J21vekZ1bGxTY3JlZW5FbmFibGVkJyxcblx0XHRcdFx0J21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdFx0XHQnbW96ZnVsbHNjcmVlbmVycm9yJ1xuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0J21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHQnbXNFeGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdCdtc0Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0J21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdFx0XHQnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcblx0XHRcdFx0J01TRnVsbHNjcmVlbkVycm9yJ1xuXHRcdFx0XVxuXHRcdF07XG5cblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIGwgPSBmbk1hcC5sZW5ndGg7XG5cdFx0dmFyIHJldCA9IHt9O1xuXG5cdFx0Zm9yICg7IGkgPCBsOyBpKyspIHtcblx0XHRcdHZhbCA9IGZuTWFwW2ldO1xuXHRcdFx0aWYgKHZhbCAmJiB2YWxbMV0gaW4gZG9jdW1lbnQpIHtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHJldFtmbk1hcFswXVtpXV0gPSB2YWxbaV07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCk7XG5cblx0dmFyIGV2ZW50TmFtZU1hcCA9IHtcblx0XHRjaGFuZ2U6IGZuLmZ1bGxzY3JlZW5jaGFuZ2UsXG5cdFx0ZXJyb3I6IGZuLmZ1bGxzY3JlZW5lcnJvclxuXHR9O1xuXG5cdHZhciBzY3JlZW5mdWxsID0ge1xuXHRcdHJlcXVlc3Q6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0XHR2YXIgb25GdWxsU2NyZWVuRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLm9mZignY2hhbmdlJywgb25GdWxsU2NyZWVuRW50ZXJlZCk7XG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyk7XG5cblx0XHRcdFx0dGhpcy5vbignY2hhbmdlJywgb25GdWxsU2NyZWVuRW50ZXJlZCk7XG5cblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cdFx0XHRcdHZhciByZXR1cm5Qcm9taXNlID0gZWxlbWVudFtmbi5yZXF1ZXN0RnVsbHNjcmVlbl0oKTtcblxuXHRcdFx0XHRpZiAocmV0dXJuUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcblx0XHRcdFx0XHRyZXR1cm5Qcm9taXNlLnRoZW4ob25GdWxsU2NyZWVuRW50ZXJlZCkuY2F0Y2gocmVqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHR9LFxuXHRcdGV4aXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdGlmICghdGhpcy5pc0Z1bGxzY3JlZW4pIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIG9uRnVsbFNjcmVlbkV4aXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5vZmYoJ2NoYW5nZScsIG9uRnVsbFNjcmVlbkV4aXQpO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpO1xuXG5cdFx0XHRcdHRoaXMub24oJ2NoYW5nZScsIG9uRnVsbFNjcmVlbkV4aXQpO1xuXG5cdFx0XHRcdHZhciByZXR1cm5Qcm9taXNlID0gZG9jdW1lbnRbZm4uZXhpdEZ1bGxzY3JlZW5dKCk7XG5cblx0XHRcdFx0aWYgKHJldHVyblByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuUHJvbWlzZS50aGVuKG9uRnVsbFNjcmVlbkV4aXQpLmNhdGNoKHJlamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0fSxcblx0XHR0b2dnbGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pc0Z1bGxzY3JlZW4gPyB0aGlzLmV4aXQoKSA6IHRoaXMucmVxdWVzdChlbGVtZW50KTtcblx0XHR9LFxuXHRcdG9uY2hhbmdlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHRoaXMub24oJ2NoYW5nZScsIGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdG9uZXJyb3I6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5vbignZXJyb3InLCBjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRvbjogZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZU1hcFtldmVudF07XG5cdFx0XHRpZiAoZXZlbnROYW1lKSB7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b2ZmOiBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lTWFwW2V2ZW50XTtcblx0XHRcdGlmIChldmVudE5hbWUpIHtcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyYXc6IGZuXG5cdH07XG5cblx0aWYgKCFmbikge1xuXHRcdGlmIChpc0NvbW1vbmpzKSB7XG5cdFx0XHRtb2R1bGUuZXhwb3J0cyA9IHtpc0VuYWJsZWQ6IGZhbHNlfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LnNjcmVlbmZ1bGwgPSB7aXNFbmFibGVkOiBmYWxzZX07XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc2NyZWVuZnVsbCwge1xuXHRcdGlzRnVsbHNjcmVlbjoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBCb29sZWFuKGRvY3VtZW50W2ZuLmZ1bGxzY3JlZW5FbGVtZW50XSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbGVtZW50OiB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBkb2N1bWVudFtmbi5mdWxsc2NyZWVuRWxlbWVudF07XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpc0VuYWJsZWQ6IHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Ly8gQ29lcmNlIHRvIGJvb2xlYW4gaW4gY2FzZSBvZiBvbGQgV2ViS2l0XG5cdFx0XHRcdHJldHVybiBCb29sZWFuKGRvY3VtZW50W2ZuLmZ1bGxzY3JlZW5FbmFibGVkXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAoaXNDb21tb25qcykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gc2NyZWVuZnVsbDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuc2NyZWVuZnVsbCA9IHNjcmVlbmZ1bGw7XG5cdH1cbn0pKCk7XG4iLCJ2YXIgY291bnRlciA9IDA7XHJcbnZhciBidWNrZXRzID0ge307XHJcbnZhciBzZXRIYXJtb25pY0ludGVydmFsID0gZnVuY3Rpb24gKGZuLCBtcykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgdmFyIGlkID0gY291bnRlcisrO1xyXG4gICAgaWYgKGJ1Y2tldHNbbXNdKSB7XHJcbiAgICAgICAgYnVja2V0c1ttc10ubGlzdGVuZXJzW2lkXSA9IGZuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gYnVja2V0c1ttc10ubGlzdGVuZXJzO1xyXG4gICAgICAgICAgICB2YXIgZGlkVGhyb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGxhc3RFcnJvcjtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC52YWx1ZXMobGlzdGVuZXJzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpZFRocm93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0RXJyb3IgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlkVGhyb3cpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBsYXN0RXJyb3I7XHJcbiAgICAgICAgfSwgbXMpO1xyXG4gICAgICAgIGJ1Y2tldHNbbXNdID0ge1xyXG4gICAgICAgICAgICBtczogbXMsXHJcbiAgICAgICAgICAgIHRpbWVyOiB0aW1lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJzOiAoX2EgPSB7fSxcclxuICAgICAgICAgICAgICAgIF9hW2lkXSA9IGZuLFxyXG4gICAgICAgICAgICAgICAgX2EpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJ1Y2tldDogYnVja2V0c1ttc10sXHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgfTtcclxufTtcclxudmFyIGNsZWFySGFybW9uaWNJbnRlcnZhbCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGJ1Y2tldCA9IF9hLmJ1Y2tldCwgaWQgPSBfYS5pZDtcclxuICAgIGRlbGV0ZSBidWNrZXQubGlzdGVuZXJzW2lkXTtcclxuICAgIHZhciBoYXNMaXN0ZW5lcnMgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGxpc3RlbmVyIGluIGJ1Y2tldC5saXN0ZW5lcnMpIHtcclxuICAgICAgICBoYXNMaXN0ZW5lcnMgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFoYXNMaXN0ZW5lcnMpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGJ1Y2tldC50aW1lcik7XHJcbiAgICAgICAgZGVsZXRlIGJ1Y2tldHNbYnVja2V0Lm1zXTtcclxuICAgIH1cclxufTtcblxuZXhwb3J0IHsgY2xlYXJIYXJtb25pY0ludGVydmFsLCBzZXRIYXJtb25pY0ludGVydmFsIH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG5cdChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwudGhyb3R0bGVEZWJvdW5jZSA9IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkLG5vLXBhcmFtLXJlYXNzaWduLG5vLXNoYWRvdyAqL1xuXG5cdC8qKlxuXHQgKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcblx0ICogZXhlY3V0aW9uIG9mIGhhbmRsZXJzIG9uIGV2ZW50cyBsaWtlIHJlc2l6ZSBhbmQgc2Nyb2xsLlxuXHQgKlxuXHQgKiBAcGFyYW0gIHtudW1iZXJ9ICAgIGRlbGF5IC0gICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG5cdCAqIEBwYXJhbSAge2Jvb2xlYW59ICAgW25vVHJhaWxpbmddIC0gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMgd2hpbGUgdGhlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZC4gSWYgbm9UcmFpbGluZyBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmUgZmluYWwgdGltZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IHRocm90dGxlZC1mdW5jdGlvbiBjYWxsLiAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcyxcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldCkuXG5cdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgLSAgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG5cdCAqIEBwYXJhbSAge2Jvb2xlYW59ICAgW2RlYm91bmNlTW9kZV0gLSBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSxcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cblx0ICpcblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSAgQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiB0aHJvdHRsZSAoZGVsYXksIG5vVHJhaWxpbmcsIGNhbGxiYWNrLCBkZWJvdW5jZU1vZGUpIHtcblx0ICAvKlxuXHQgICAqIEFmdGVyIHdyYXBwZXIgaGFzIHN0b3BwZWQgYmVpbmcgY2FsbGVkLCB0aGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0XG5cdCAgICogYGNhbGxiYWNrYCBpcyBleGVjdXRlZCBhdCB0aGUgcHJvcGVyIHRpbWVzIGluIGB0aHJvdHRsZWAgYW5kIGBlbmRgXG5cdCAgICogZGVib3VuY2UgbW9kZXMuXG5cdCAgICovXG5cdCAgdmFyIHRpbWVvdXRJRDtcblx0ICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgdGltZSBgY2FsbGJhY2tgIHdhcyBleGVjdXRlZC5cblxuXHQgIHZhciBsYXN0RXhlYyA9IDA7IC8vIEZ1bmN0aW9uIHRvIGNsZWFyIGV4aXN0aW5nIHRpbWVvdXRcblxuXHQgIGZ1bmN0aW9uIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCkge1xuXHQgICAgaWYgKHRpbWVvdXRJRCkge1xuXHQgICAgICBjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0ICAgIH1cblx0ICB9IC8vIEZ1bmN0aW9uIHRvIGNhbmNlbCBuZXh0IGV4ZWNcblxuXG5cdCAgZnVuY3Rpb24gY2FuY2VsKCkge1xuXHQgICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcblx0ICAgIGNhbmNlbGxlZCA9IHRydWU7XG5cdCAgfSAvLyBgbm9UcmFpbGluZ2AgZGVmYXVsdHMgdG8gZmFsc3kuXG5cblxuXHQgIGlmICh0eXBlb2Ygbm9UcmFpbGluZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdCAgICBkZWJvdW5jZU1vZGUgPSBjYWxsYmFjaztcblx0ICAgIGNhbGxiYWNrID0gbm9UcmFpbGluZztcblx0ICAgIG5vVHJhaWxpbmcgPSB1bmRlZmluZWQ7XG5cdCAgfVxuXHQgIC8qXG5cdCAgICogVGhlIGB3cmFwcGVyYCBmdW5jdGlvbiBlbmNhcHN1bGF0ZXMgYWxsIG9mIHRoZSB0aHJvdHRsaW5nIC8gZGVib3VuY2luZ1xuXHQgICAqIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG5cdCAgICogaXMgZXhlY3V0ZWQuXG5cdCAgICovXG5cblxuXHQgIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG5cdCAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzXyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgYXJndW1lbnRzX1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgIH1cblxuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgdmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gbGFzdEV4ZWM7XG5cblx0ICAgIGlmIChjYW5jZWxsZWQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfSAvLyBFeGVjdXRlIGBjYWxsYmFja2AgYW5kIHVwZGF0ZSB0aGUgYGxhc3RFeGVjYCB0aW1lc3RhbXAuXG5cblxuXHQgICAgZnVuY3Rpb24gZXhlYygpIHtcblx0ICAgICAgbGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xuXHQgICAgICBjYWxsYmFjay5hcHBseShzZWxmLCBhcmd1bWVudHNfKTtcblx0ICAgIH1cblx0ICAgIC8qXG5cdCAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbikgdGhpcyBpcyB1c2VkIHRvIGNsZWFyIHRoZSBmbGFnXG5cdCAgICAgKiB0byBhbGxvdyBmdXR1cmUgYGNhbGxiYWNrYCBleGVjdXRpb25zLlxuXHQgICAgICovXG5cblxuXHQgICAgZnVuY3Rpb24gY2xlYXIoKSB7XG5cdCAgICAgIHRpbWVvdXRJRCA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblxuXHQgICAgaWYgKGRlYm91bmNlTW9kZSAmJiAhdGltZW91dElEKSB7XG5cdCAgICAgIC8qXG5cdCAgICAgICAqIFNpbmNlIGB3cmFwcGVyYCBpcyBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZFxuXHQgICAgICAgKiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIGV4ZWN1dGUgYGNhbGxiYWNrYC5cblx0ICAgICAgICovXG5cdCAgICAgIGV4ZWMoKTtcblx0ICAgIH1cblxuXHQgICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcblxuXHQgICAgaWYgKGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPiBkZWxheSkge1xuXHQgICAgICAvKlxuXHQgICAgICAgKiBJbiB0aHJvdHRsZSBtb2RlLCBpZiBgZGVsYXlgIHRpbWUgaGFzIGJlZW4gZXhjZWVkZWQsIGV4ZWN1dGVcblx0ICAgICAgICogYGNhbGxiYWNrYC5cblx0ICAgICAgICovXG5cdCAgICAgIGV4ZWMoKTtcblx0ICAgIH0gZWxzZSBpZiAobm9UcmFpbGluZyAhPT0gdHJ1ZSkge1xuXHQgICAgICAvKlxuXHQgICAgICAgKiBJbiB0cmFpbGluZyB0aHJvdHRsZSBtb2RlLCBzaW5jZSBgZGVsYXlgIHRpbWUgaGFzIG5vdCBiZWVuXG5cdCAgICAgICAqIGV4Y2VlZGVkLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYGRlbGF5YCBtcyBhZnRlciBtb3N0XG5cdCAgICAgICAqIHJlY2VudCBleGVjdXRpb24uXG5cdCAgICAgICAqXG5cdCAgICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlXG5cdCAgICAgICAqIGFmdGVyIGBkZWxheWAgbXMuXG5cdCAgICAgICAqXG5cdCAgICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvXG5cdCAgICAgICAqIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cblx0ICAgICAgICovXG5cdCAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICB3cmFwcGVyLmNhbmNlbCA9IGNhbmNlbDsgLy8gUmV0dXJuIHRoZSB3cmFwcGVyIGZ1bmN0aW9uLlxuXG5cdCAgcmV0dXJuIHdyYXBwZXI7XG5cdH1cblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQgKi9cblx0LyoqXG5cdCAqIERlYm91bmNlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBEZWJvdW5jaW5nLCB1bmxpa2UgdGhyb3R0bGluZyxcblx0ICogZ3VhcmFudGVlcyB0aGF0IGEgZnVuY3Rpb24gaXMgb25seSBleGVjdXRlZCBhIHNpbmdsZSB0aW1lLCBlaXRoZXIgYXQgdGhlXG5cdCAqIHZlcnkgYmVnaW5uaW5nIG9mIGEgc2VyaWVzIG9mIGNhbGxzLCBvciBhdCB0aGUgdmVyeSBlbmQuXG5cdCAqXG5cdCAqIEBwYXJhbSAge251bWJlcn0gICBkZWxheSAtICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG5cdCAqIEBwYXJhbSAge2Jvb2xlYW59ICBbYXRCZWdpbl0gLSAgICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBhdEJlZ2luIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYGRlbGF5YCBtaWxsaXNlY29uZHNcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuIElmIGF0QmVnaW4gaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmx5IGF0IHRoZSBmaXJzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC5cblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KS5cblx0ICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIC0gICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbmV3LCBkZWJvdW5jZWQgZnVuY3Rpb24uXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIGRlYm91bmNlIChkZWxheSwgYXRCZWdpbiwgY2FsbGJhY2spIHtcblx0ICByZXR1cm4gY2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRocm90dGxlKGRlbGF5LCBhdEJlZ2luLCBmYWxzZSkgOiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIGF0QmVnaW4gIT09IGZhbHNlKTtcblx0fVxuXG5cdGV4cG9ydHMuZGVib3VuY2UgPSBkZWJvdW5jZTtcblx0ZXhwb3J0cy50aHJvdHRsZSA9IHRocm90dGxlO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC51bWQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZWFzaW5nID0ge1xuICAgIC8vIE5vIGVhc2luZywgbm8gYWNjZWxlcmF0aW9uXG4gICAgbGluZWFyOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSxcbiAgICAvLyBBY2NlbGVyYXRlcyBmYXN0LCB0aGVuIHNsb3dzIHF1aWNrbHkgdG93YXJkcyBlbmQuXG4gICAgcXVhZHJhdGljOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCAqICgtKHQgKiB0KSAqIHQgKyA0ICogdCAqIHQgLSA2ICogdCArIDQpOyB9LFxuICAgIC8vIE92ZXJzaG9vdHMgb3ZlciAxIGFuZCB0aGVuIHJldHVybnMgdG8gMSB0b3dhcmRzIGVuZC5cbiAgICBjdWJpYzogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiAoNCAqIHQgKiB0IC0gOSAqIHQgKyA2KTsgfSxcbiAgICAvLyBPdmVyc2hvb3RzIG92ZXIgMSBtdWx0aXBsZSB0aW1lcyAtIHdpZ2dsZXMgYXJvdW5kIDEuXG4gICAgZWxhc3RpYzogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiAoMzMgKiB0ICogdCAqIHQgKiB0IC0gMTA2ICogdCAqIHQgKiB0ICsgMTI2ICogdCAqIHQgLSA2NyAqIHQgKyAxNSk7IH0sXG4gICAgLy8gQWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuICAgIGluUXVhZDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiB0OyB9LFxuICAgIC8vIERlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gICAgb3V0UXVhZDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiAoMiAtIHQpOyB9LFxuICAgIC8vIEFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuICAgIGluT3V0UXVhZDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAuNSA/IDIgKiB0ICogdCA6IC0xICsgKDQgLSAyICogdCkgKiB0OyB9LFxuICAgIC8vIEFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHlcbiAgICBpbkN1YmljOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCAqIHQgKiB0OyB9LFxuICAgIC8vIERlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gICAgb3V0Q3ViaWM6IGZ1bmN0aW9uICh0KSB7IHJldHVybiAoLS10KSAqIHQgKiB0ICsgMTsgfSxcbiAgICAvLyBBY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbiAgICBpbk91dEN1YmljOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IC41ID8gNCAqIHQgKiB0ICogdCA6ICh0IC0gMSkgKiAoMiAqIHQgLSAyKSAqICgyICogdCAtIDIpICsgMTsgfSxcbiAgICAvLyBBY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG4gICAgaW5RdWFydDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiB0ICogdCAqIHQ7IH0sXG4gICAgLy8gRGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHlcbiAgICBvdXRRdWFydDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSAoLS10KSAqIHQgKiB0ICogdDsgfSxcbiAgICAvLyBBY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbiAgICBpbk91dFF1YXJ0OiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IC41ID8gOCAqIHQgKiB0ICogdCAqIHQgOiAxIC0gOCAqICgtLXQpICogdCAqIHQgKiB0OyB9LFxuICAgIC8vIEFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHlcbiAgICBpblF1aW50OiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQ7IH0sXG4gICAgLy8gRGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHlcbiAgICBvdXRRdWludDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgKyAoLS10KSAqIHQgKiB0ICogdCAqIHQ7IH0sXG4gICAgLy8gQWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG4gICAgaW5PdXRRdWludDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAuNSA/IDE2ICogdCAqIHQgKiB0ICogdCAqIHQgOiAxICsgMTYgKiAoLS10KSAqIHQgKiB0ICogdCAqIHQ7IH0sXG4gICAgLy8gQWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuICAgIGluU2luZTogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIC1NYXRoLmNvcyh0ICogKE1hdGguUEkgLyAyKSkgKyAxOyB9LFxuICAgIC8vIERlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gICAgb3V0U2luZTogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGguc2luKHQgKiAoTWF0aC5QSSAvIDIpKTsgfSxcbiAgICAvLyBBY2NlbGVyYXRpbmcgdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpbmdcbiAgICBpbk91dFNpbmU6IGZ1bmN0aW9uICh0KSB7IHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpIC8gMjsgfSxcbiAgICAvLyBFeHBvbmVudGlhbCBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG4gICAgaW5FeHBvOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKTsgfSxcbiAgICAvLyBFeHBvbmVudGlhbCBkZWNlbGVyYXRpbmcgdG8gemVybyB2ZWxvY2l0eVxuICAgIG91dEV4cG86IGZ1bmN0aW9uICh0KSB7IHJldHVybiAtTWF0aC5wb3coMiwgLTEwICogdCkgKyAxOyB9LFxuICAgIC8vIEV4cG9uZW50aWFsIGFjY2VsZXJhdGluZyB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGluZ1xuICAgIGluT3V0RXhwbzogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdCAvPSAuNTtcbiAgICAgICAgaWYgKHQgPCAxKVxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgLyAyO1xuICAgICAgICB0LS07XG4gICAgICAgIHJldHVybiAoLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMikgLyAyO1xuICAgIH0sXG4gICAgLy8gQ2lyY3VsYXIgYWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuICAgIGluQ2lyYzogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIC1NYXRoLnNxcnQoMSAtIHQgKiB0KSArIDE7IH0sXG4gICAgLy8gQ2lyY3VsYXIgZGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHkgTW92ZXMgVkVSWSBmYXN0IGF0IHRoZSBiZWdpbm5pbmcgYW5kXG4gICAgLy8gdGhlbiBxdWlja2x5IHNsb3dzIGRvd24gaW4gdGhlIG1pZGRsZS4gVGhpcyB0d2VlbiBjYW4gYWN0dWFsbHkgYmUgdXNlZFxuICAgIC8vIGluIGNvbnRpbnVvdXMgdHJhbnNpdGlvbnMgd2hlcmUgdGFyZ2V0IHZhbHVlIGNoYW5nZXMgYWxsIHRoZSB0aW1lLFxuICAgIC8vIGJlY2F1c2Ugb2YgdGhlIHZlcnkgcXVpY2sgc3RhcnQsIGl0IGhpZGVzIHRoZSBqaXR0ZXIgYmV0d2VlbiB0YXJnZXQgdmFsdWUgY2hhbmdlcy5cbiAgICBvdXRDaXJjOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5zcXJ0KDEgLSAodCA9IHQgLSAxKSAqIHQpOyB9LFxuICAgIC8vIENpcmN1bGFyIGFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuICAgIGluT3V0Q2lyYzogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdCAvPSAuNTtcbiAgICAgICAgaWYgKHQgPCAxKVxuICAgICAgICAgICAgcmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSAvIDI7XG4gICAgICAgIHQgLT0gMjtcbiAgICAgICAgcmV0dXJuIChNYXRoLnNxcnQoMSAtIHQgKiB0KSArIDEpIC8gMjtcbiAgICB9XG59O1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tIFwicmVhY3QtaHRtbC1wYXJzZXJcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2hvd0VwaXNvZGUgfSBmcm9tIFwic3JjL19tb2RlbHMvc2hvd3MubW9kZWxcIjtcclxuaW1wb3J0IFNob3dDb250ZXh0IGZyb20gXCJzcmMvX2NvbnRleHRzL3Nob3cuY29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3RPbmNlIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xyXG5cclxuY29uc3QgRXBpc29kZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8U2hvd0VwaXNvZGU+KCk7XHJcbiAgICBjb25zdCB7IFNob3dTdGF0ZSwgZGlzcGF0Y2hTaG93IH0gPSB1c2VDb250ZXh0KFNob3dDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3RPbmNlKCgpID0+IHtcclxuICAgICAgICBzZXREYXRhKFxyXG4gICAgICAgICAgICBTaG93U3RhdGUuX2VtYmVkZGVkLmVwaXNvZGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoeCkgPT4geC5pZCA9PT0gKCgoaWQgYXMgc3RyaW5nKSBhcyB1bmtub3duKSBhcyBudW1iZXIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMlwiXHJcbiAgICAgICAgICAgIHN4PXt7IHZhcmlhbnQ6IFwiY29udGFpbmVycy5jYXJkXCIsIGJnOiBcIndoaXRlXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IG1heEhlaWdodDogXCIyNTBweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlICYmIGRhdGEuaW1hZ2Uub3JpZ2luYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyIHN0YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXIgc3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJhZGdlIGNvdW50PXtkYXRhLnJhdGluZy5hdmVyYWdlfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwiI2Y1MFwiPlJhdGluZzoge2RhdGF9PC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzeD17eyBmb250U2l6ZTogXCIxNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1JlYWN0SHRtbFBhcnNlcihkYXRhLnN1bW1hcnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjogeyBjdXJzb3I6IFwicG9pbnRlclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJsb2NrRW5kOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJtYWdlbnRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5CbG9ja0VuZDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR3b3JrOiB7ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5CbG9ja0VuZDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXM6IHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiY3lhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdZOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQmxvY2tFbmQ6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VucmU6IHtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9