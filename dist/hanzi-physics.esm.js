/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var matter$1 = {exports: {}};

/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var matter = matter$1.exports;

var hasRequiredMatter;

function requireMatter () {
	if (hasRequiredMatter) return matter$1.exports;
	hasRequiredMatter = 1;
	(function (module, exports) {
		(function webpackUniversalModuleDefinition(root, factory) {
			module.exports = factory();
		})(matter, function() {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
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
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
		/******/ 	return __webpack_require__(__webpack_require__.s = 20);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ (function(module, exports) {

		/**
		* The `Matter.Common` module contains utility functions that are common to all modules.
		*
		* @class Common
		*/

		var Common = {};

		module.exports = Common;

		(function() {

		    Common._baseDelta = 1000 / 60;
		    Common._nextId = 0;
		    Common._seed = 0;
		    Common._nowStartTime = +(new Date());
		    Common._warnedOnce = {};
		    Common._decomp = null;
		    
		    /**
		     * Extends the object in the first argument using the object in the second argument.
		     * @method extend
		     * @param {} obj
		     * @param {boolean} deep
		     * @return {} obj extended
		     */
		    Common.extend = function(obj, deep) {
		        var argsStart,
		            deepClone;

		        if (typeof deep === 'boolean') {
		            argsStart = 2;
		            deepClone = deep;
		        } else {
		            argsStart = 1;
		            deepClone = true;
		        }

		        for (var i = argsStart; i < arguments.length; i++) {
		            var source = arguments[i];

		            if (source) {
		                for (var prop in source) {
		                    if (deepClone && source[prop] && source[prop].constructor === Object) {
		                        if (!obj[prop] || obj[prop].constructor === Object) {
		                            obj[prop] = obj[prop] || {};
		                            Common.extend(obj[prop], deepClone, source[prop]);
		                        } else {
		                            obj[prop] = source[prop];
		                        }
		                    } else {
		                        obj[prop] = source[prop];
		                    }
		                }
		            }
		        }
		        
		        return obj;
		    };

		    /**
		     * Creates a new clone of the object, if deep is true references will also be cloned.
		     * @method clone
		     * @param {} obj
		     * @param {bool} deep
		     * @return {} obj cloned
		     */
		    Common.clone = function(obj, deep) {
		        return Common.extend({}, deep, obj);
		    };

		    /**
		     * Returns the list of keys for the given object.
		     * @method keys
		     * @param {} obj
		     * @return {string[]} keys
		     */
		    Common.keys = function(obj) {
		        if (Object.keys)
		            return Object.keys(obj);

		        // avoid hasOwnProperty for performance
		        var keys = [];
		        for (var key in obj)
		            keys.push(key);
		        return keys;
		    };

		    /**
		     * Returns the list of values for the given object.
		     * @method values
		     * @param {} obj
		     * @return {array} Array of the objects property values
		     */
		    Common.values = function(obj) {
		        var values = [];
		        
		        if (Object.keys) {
		            var keys = Object.keys(obj);
		            for (var i = 0; i < keys.length; i++) {
		                values.push(obj[keys[i]]);
		            }
		            return values;
		        }
		        
		        // avoid hasOwnProperty for performance
		        for (var key in obj)
		            values.push(obj[key]);
		        return values;
		    };

		    /**
		     * Gets a value from `base` relative to the `path` string.
		     * @method get
		     * @param {} obj The base object
		     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
		     * @param {number} [begin] Path slice begin
		     * @param {number} [end] Path slice end
		     * @return {} The object at the given path
		     */
		    Common.get = function(obj, path, begin, end) {
		        path = path.split('.').slice(begin, end);

		        for (var i = 0; i < path.length; i += 1) {
		            obj = obj[path[i]];
		        }

		        return obj;
		    };

		    /**
		     * Sets a value on `base` relative to the given `path` string.
		     * @method set
		     * @param {} obj The base object
		     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
		     * @param {} val The value to set
		     * @param {number} [begin] Path slice begin
		     * @param {number} [end] Path slice end
		     * @return {} Pass through `val` for chaining
		     */
		    Common.set = function(obj, path, val, begin, end) {
		        var parts = path.split('.').slice(begin, end);
		        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
		        return val;
		    };

		    /**
		     * Shuffles the given array in-place.
		     * The function uses a seeded random generator.
		     * @method shuffle
		     * @param {array} array
		     * @return {array} array shuffled randomly
		     */
		    Common.shuffle = function(array) {
		        for (var i = array.length - 1; i > 0; i--) {
		            var j = Math.floor(Common.random() * (i + 1));
		            var temp = array[i];
		            array[i] = array[j];
		            array[j] = temp;
		        }
		        return array;
		    };

		    /**
		     * Randomly chooses a value from a list with equal probability.
		     * The function uses a seeded random generator.
		     * @method choose
		     * @param {array} choices
		     * @return {object} A random choice object from the array
		     */
		    Common.choose = function(choices) {
		        return choices[Math.floor(Common.random() * choices.length)];
		    };

		    /**
		     * Returns true if the object is a HTMLElement, otherwise false.
		     * @method isElement
		     * @param {object} obj
		     * @return {boolean} True if the object is a HTMLElement, otherwise false
		     */
		    Common.isElement = function(obj) {
		        if (typeof HTMLElement !== 'undefined') {
		            return obj instanceof HTMLElement;
		        }

		        return !!(obj && obj.nodeType && obj.nodeName);
		    };

		    /**
		     * Returns true if the object is an array.
		     * @method isArray
		     * @param {object} obj
		     * @return {boolean} True if the object is an array, otherwise false
		     */
		    Common.isArray = function(obj) {
		        return Object.prototype.toString.call(obj) === '[object Array]';
		    };

		    /**
		     * Returns true if the object is a function.
		     * @method isFunction
		     * @param {object} obj
		     * @return {boolean} True if the object is a function, otherwise false
		     */
		    Common.isFunction = function(obj) {
		        return typeof obj === "function";
		    };

		    /**
		     * Returns true if the object is a plain object.
		     * @method isPlainObject
		     * @param {object} obj
		     * @return {boolean} True if the object is a plain object, otherwise false
		     */
		    Common.isPlainObject = function(obj) {
		        return typeof obj === 'object' && obj.constructor === Object;
		    };

		    /**
		     * Returns true if the object is a string.
		     * @method isString
		     * @param {object} obj
		     * @return {boolean} True if the object is a string, otherwise false
		     */
		    Common.isString = function(obj) {
		        return toString.call(obj) === '[object String]';
		    };
		    
		    /**
		     * Returns the given value clamped between a minimum and maximum value.
		     * @method clamp
		     * @param {number} value
		     * @param {number} min
		     * @param {number} max
		     * @return {number} The value clamped between min and max inclusive
		     */
		    Common.clamp = function(value, min, max) {
		        if (value < min)
		            return min;
		        if (value > max)
		            return max;
		        return value;
		    };
		    
		    /**
		     * Returns the sign of the given value.
		     * @method sign
		     * @param {number} value
		     * @return {number} -1 if negative, +1 if 0 or positive
		     */
		    Common.sign = function(value) {
		        return value < 0 ? -1 : 1;
		    };
		    
		    /**
		     * Returns the current timestamp since the time origin (e.g. from page load).
		     * The result is in milliseconds and will use high-resolution timing if available.
		     * @method now
		     * @return {number} the current timestamp in milliseconds
		     */
		    Common.now = function() {
		        if (typeof window !== 'undefined' && window.performance) {
		            if (window.performance.now) {
		                return window.performance.now();
		            } else if (window.performance.webkitNow) {
		                return window.performance.webkitNow();
		            }
		        }

		        if (Date.now) {
		            return Date.now();
		        }

		        return (new Date()) - Common._nowStartTime;
		    };
		    
		    /**
		     * Returns a random value between a minimum and a maximum value inclusive.
		     * The function uses a seeded random generator.
		     * @method random
		     * @param {number} min
		     * @param {number} max
		     * @return {number} A random number between min and max inclusive
		     */
		    Common.random = function(min, max) {
		        min = (typeof min !== "undefined") ? min : 0;
		        max = (typeof max !== "undefined") ? max : 1;
		        return min + _seededRandom() * (max - min);
		    };

		    var _seededRandom = function() {
		        // https://en.wikipedia.org/wiki/Linear_congruential_generator
		        Common._seed = (Common._seed * 9301 + 49297) % 233280;
		        return Common._seed / 233280;
		    };

		    /**
		     * Converts a CSS hex colour string into an integer.
		     * @method colorToNumber
		     * @param {string} colorString
		     * @return {number} An integer representing the CSS hex string
		     */
		    Common.colorToNumber = function(colorString) {
		        colorString = colorString.replace('#','');

		        if (colorString.length == 3) {
		            colorString = colorString.charAt(0) + colorString.charAt(0)
		                        + colorString.charAt(1) + colorString.charAt(1)
		                        + colorString.charAt(2) + colorString.charAt(2);
		        }

		        return parseInt(colorString, 16);
		    };

		    /**
		     * The console logging level to use, where each level includes all levels above and excludes the levels below.
		     * The default level is 'debug' which shows all console messages.  
		     *
		     * Possible level values are:
		     * - 0 = None
		     * - 1 = Debug
		     * - 2 = Info
		     * - 3 = Warn
		     * - 4 = Error
		     * @static
		     * @property logLevel
		     * @type {Number}
		     * @default 1
		     */
		    Common.logLevel = 1;

		    /**
		     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
		     * The message will be prefixed with 'matter-js' to make it easily identifiable.
		     * @method log
		     * @param ...objs {} The objects to log.
		     */
		    Common.log = function() {
		        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
		            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
		        }
		    };

		    /**
		     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
		     * The message will be prefixed with 'matter-js' to make it easily identifiable.
		     * @method info
		     * @param ...objs {} The objects to log.
		     */
		    Common.info = function() {
		        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
		            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
		        }
		    };

		    /**
		     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
		     * The message will be prefixed with 'matter-js' to make it easily identifiable.
		     * @method warn
		     * @param ...objs {} The objects to log.
		     */
		    Common.warn = function() {
		        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
		            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
		        }
		    };

		    /**
		     * Uses `Common.warn` to log the given message one time only.
		     * @method warnOnce
		     * @param ...objs {} The objects to log.
		     */
		    Common.warnOnce = function() {
		        var message = Array.prototype.slice.call(arguments).join(' ');

		        if (!Common._warnedOnce[message]) {
		            Common.warn(message);
		            Common._warnedOnce[message] = true;
		        }
		    };

		    /**
		     * Shows a deprecated console warning when the function on the given object is called.
		     * The target function will be replaced with a new function that first shows the warning
		     * and then calls the original function.
		     * @method deprecated
		     * @param {object} obj The object or module
		     * @param {string} name The property name of the function on obj
		     * @param {string} warning The one-time message to show if the function is called
		     */
		    Common.deprecated = function(obj, prop, warning) {
		        obj[prop] = Common.chain(function() {
		            Common.warnOnce('🔅 deprecated 🔅', warning);
		        }, obj[prop]);
		    };

		    /**
		     * Returns the next unique sequential ID.
		     * @method nextId
		     * @return {Number} Unique sequential ID
		     */
		    Common.nextId = function() {
		        return Common._nextId++;
		    };

		    /**
		     * A cross browser compatible indexOf implementation.
		     * @method indexOf
		     * @param {array} haystack
		     * @param {object} needle
		     * @return {number} The position of needle in haystack, otherwise -1.
		     */
		    Common.indexOf = function(haystack, needle) {
		        if (haystack.indexOf)
		            return haystack.indexOf(needle);

		        for (var i = 0; i < haystack.length; i++) {
		            if (haystack[i] === needle)
		                return i;
		        }

		        return -1;
		    };

		    /**
		     * A cross browser compatible array map implementation.
		     * @method map
		     * @param {array} list
		     * @param {function} func
		     * @return {array} Values from list transformed by func.
		     */
		    Common.map = function(list, func) {
		        if (list.map) {
		            return list.map(func);
		        }

		        var mapped = [];

		        for (var i = 0; i < list.length; i += 1) {
		            mapped.push(func(list[i]));
		        }

		        return mapped;
		    };

		    /**
		     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
		     * Circular dependencies are allowed.
		     * @method topologicalSort
		     * @param {object} graph
		     * @return {array} Partially ordered set of vertices in topological order.
		     */
		    Common.topologicalSort = function(graph) {
		        // https://github.com/mgechev/javascript-algorithms
		        // Copyright (c) Minko Gechev (MIT license)
		        // Modifications: tidy formatting and naming
		        var result = [],
		            visited = [],
		            temp = [];

		        for (var node in graph) {
		            if (!visited[node] && !temp[node]) {
		                Common._topologicalSort(node, visited, temp, graph, result);
		            }
		        }

		        return result;
		    };

		    Common._topologicalSort = function(node, visited, temp, graph, result) {
		        var neighbors = graph[node] || [];
		        temp[node] = true;

		        for (var i = 0; i < neighbors.length; i += 1) {
		            var neighbor = neighbors[i];

		            if (temp[neighbor]) {
		                // skip circular dependencies
		                continue;
		            }

		            if (!visited[neighbor]) {
		                Common._topologicalSort(neighbor, visited, temp, graph, result);
		            }
		        }

		        temp[node] = false;
		        visited[node] = true;

		        result.push(node);
		    };

		    /**
		     * Takes _n_ functions as arguments and returns a new function that calls them in order.
		     * The arguments applied when calling the new function will also be applied to every function passed.
		     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
		     * Therefore if a passed function does not return a value, the previously returned value is maintained.
		     * After all passed functions have been called the new function returns the last returned value (if any).
		     * If any of the passed functions are a chain, then the chain will be flattened.
		     * @method chain
		     * @param ...funcs {function} The functions to chain.
		     * @return {function} A new function that calls the passed functions in order.
		     */
		    Common.chain = function() {
		        var funcs = [];

		        for (var i = 0; i < arguments.length; i += 1) {
		            var func = arguments[i];

		            if (func._chained) {
		                // flatten already chained functions
		                funcs.push.apply(funcs, func._chained);
		            } else {
		                funcs.push(func);
		            }
		        }

		        var chain = function() {
		            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
		            var lastResult,
		                args = new Array(arguments.length);

		            for (var i = 0, l = arguments.length; i < l; i++) {
		                args[i] = arguments[i];
		            }

		            for (i = 0; i < funcs.length; i += 1) {
		                var result = funcs[i].apply(lastResult, args);

		                if (typeof result !== 'undefined') {
		                    lastResult = result;
		                }
		            }

		            return lastResult;
		        };

		        chain._chained = funcs;

		        return chain;
		    };

		    /**
		     * Chains a function to excute before the original function on the given `path` relative to `base`.
		     * See also docs for `Common.chain`.
		     * @method chainPathBefore
		     * @param {} base The base object
		     * @param {string} path The path relative to `base`
		     * @param {function} func The function to chain before the original
		     * @return {function} The chained function that replaced the original
		     */
		    Common.chainPathBefore = function(base, path, func) {
		        return Common.set(base, path, Common.chain(
		            func,
		            Common.get(base, path)
		        ));
		    };

		    /**
		     * Chains a function to excute after the original function on the given `path` relative to `base`.
		     * See also docs for `Common.chain`.
		     * @method chainPathAfter
		     * @param {} base The base object
		     * @param {string} path The path relative to `base`
		     * @param {function} func The function to chain after the original
		     * @return {function} The chained function that replaced the original
		     */
		    Common.chainPathAfter = function(base, path, func) {
		        return Common.set(base, path, Common.chain(
		            Common.get(base, path),
		            func
		        ));
		    };

		    /**
		     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
		     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
		     * @method setDecomp
		     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
		     */
		    Common.setDecomp = function(decomp) {
		        Common._decomp = decomp;
		    };

		    /**
		     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
		     * otherwise returns the global `decomp` if set.
		     * @method getDecomp
		     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
		     */
		    Common.getDecomp = function() {
		        // get user provided decomp if set
		        var decomp = Common._decomp;

		        try {
		            // otherwise from window global
		            if (!decomp && typeof window !== 'undefined') {
		                decomp = window.decomp;
		            }
		    
		            // otherwise from node global
		            if (!decomp && typeof commonjsGlobal !== 'undefined') {
		                decomp = commonjsGlobal.decomp;
		            }
		        } catch (e) {
		            // decomp not available
		            decomp = null;
		        }

		        return decomp;
		    };
		})();


		/***/ }),
		/* 1 */
		/***/ (function(module, exports) {

		/**
		* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
		*
		* @class Bounds
		*/

		var Bounds = {};

		module.exports = Bounds;

		(function() {

		    /**
		     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
		     * @method create
		     * @param {vertices} vertices
		     * @return {bounds} A new bounds object
		     */
		    Bounds.create = function(vertices) {
		        var bounds = { 
		            min: { x: 0, y: 0 }, 
		            max: { x: 0, y: 0 }
		        };

		        if (vertices)
		            Bounds.update(bounds, vertices);
		        
		        return bounds;
		    };

		    /**
		     * Updates bounds using the given vertices and extends the bounds given a velocity.
		     * @method update
		     * @param {bounds} bounds
		     * @param {vertices} vertices
		     * @param {vector} velocity
		     */
		    Bounds.update = function(bounds, vertices, velocity) {
		        bounds.min.x = Infinity;
		        bounds.max.x = -Infinity;
		        bounds.min.y = Infinity;
		        bounds.max.y = -Infinity;

		        for (var i = 0; i < vertices.length; i++) {
		            var vertex = vertices[i];
		            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
		            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
		            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
		            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
		        }
		        
		        if (velocity) {
		            if (velocity.x > 0) {
		                bounds.max.x += velocity.x;
		            } else {
		                bounds.min.x += velocity.x;
		            }
		            
		            if (velocity.y > 0) {
		                bounds.max.y += velocity.y;
		            } else {
		                bounds.min.y += velocity.y;
		            }
		        }
		    };

		    /**
		     * Returns true if the bounds contains the given point.
		     * @method contains
		     * @param {bounds} bounds
		     * @param {vector} point
		     * @return {boolean} True if the bounds contain the point, otherwise false
		     */
		    Bounds.contains = function(bounds, point) {
		        return point.x >= bounds.min.x && point.x <= bounds.max.x 
		               && point.y >= bounds.min.y && point.y <= bounds.max.y;
		    };

		    /**
		     * Returns true if the two bounds intersect.
		     * @method overlaps
		     * @param {bounds} boundsA
		     * @param {bounds} boundsB
		     * @return {boolean} True if the bounds overlap, otherwise false
		     */
		    Bounds.overlaps = function(boundsA, boundsB) {
		        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
		                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
		    };

		    /**
		     * Translates the bounds by the given vector.
		     * @method translate
		     * @param {bounds} bounds
		     * @param {vector} vector
		     */
		    Bounds.translate = function(bounds, vector) {
		        bounds.min.x += vector.x;
		        bounds.max.x += vector.x;
		        bounds.min.y += vector.y;
		        bounds.max.y += vector.y;
		    };

		    /**
		     * Shifts the bounds to the given position.
		     * @method shift
		     * @param {bounds} bounds
		     * @param {vector} position
		     */
		    Bounds.shift = function(bounds, position) {
		        var deltaX = bounds.max.x - bounds.min.x,
		            deltaY = bounds.max.y - bounds.min.y;
		            
		        bounds.min.x = position.x;
		        bounds.max.x = position.x + deltaX;
		        bounds.min.y = position.y;
		        bounds.max.y = position.y + deltaY;
		    };
		    
		})();


		/***/ }),
		/* 2 */
		/***/ (function(module, exports) {

		/**
		* The `Matter.Vector` module contains methods for creating and manipulating vectors.
		* Vectors are the basis of all the geometry related operations in the engine.
		* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Vector
		*/

		// TODO: consider params for reusing vector objects

		var Vector = {};

		module.exports = Vector;

		(function() {

		    /**
		     * Creates a new vector.
		     * @method create
		     * @param {number} x
		     * @param {number} y
		     * @return {vector} A new vector
		     */
		    Vector.create = function(x, y) {
		        return { x: x || 0, y: y || 0 };
		    };

		    /**
		     * Returns a new vector with `x` and `y` copied from the given `vector`.
		     * @method clone
		     * @param {vector} vector
		     * @return {vector} A new cloned vector
		     */
		    Vector.clone = function(vector) {
		        return { x: vector.x, y: vector.y };
		    };

		    /**
		     * Returns the magnitude (length) of a vector.
		     * @method magnitude
		     * @param {vector} vector
		     * @return {number} The magnitude of the vector
		     */
		    Vector.magnitude = function(vector) {
		        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
		    };

		    /**
		     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
		     * @method magnitudeSquared
		     * @param {vector} vector
		     * @return {number} The squared magnitude of the vector
		     */
		    Vector.magnitudeSquared = function(vector) {
		        return (vector.x * vector.x) + (vector.y * vector.y);
		    };

		    /**
		     * Rotates the vector about (0, 0) by specified angle.
		     * @method rotate
		     * @param {vector} vector
		     * @param {number} angle
		     * @param {vector} [output]
		     * @return {vector} The vector rotated about (0, 0)
		     */
		    Vector.rotate = function(vector, angle, output) {
		        var cos = Math.cos(angle), sin = Math.sin(angle);
		        if (!output) output = {};
		        var x = vector.x * cos - vector.y * sin;
		        output.y = vector.x * sin + vector.y * cos;
		        output.x = x;
		        return output;
		    };

		    /**
		     * Rotates the vector about a specified point by specified angle.
		     * @method rotateAbout
		     * @param {vector} vector
		     * @param {number} angle
		     * @param {vector} point
		     * @param {vector} [output]
		     * @return {vector} A new vector rotated about the point
		     */
		    Vector.rotateAbout = function(vector, angle, point, output) {
		        var cos = Math.cos(angle), sin = Math.sin(angle);
		        if (!output) output = {};
		        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
		        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
		        output.x = x;
		        return output;
		    };

		    /**
		     * Normalises a vector (such that its magnitude is `1`).
		     * @method normalise
		     * @param {vector} vector
		     * @return {vector} A new vector normalised
		     */
		    Vector.normalise = function(vector) {
		        var magnitude = Vector.magnitude(vector);
		        if (magnitude === 0)
		            return { x: 0, y: 0 };
		        return { x: vector.x / magnitude, y: vector.y / magnitude };
		    };

		    /**
		     * Returns the dot-product of two vectors.
		     * @method dot
		     * @param {vector} vectorA
		     * @param {vector} vectorB
		     * @return {number} The dot product of the two vectors
		     */
		    Vector.dot = function(vectorA, vectorB) {
		        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
		    };

		    /**
		     * Returns the cross-product of two vectors.
		     * @method cross
		     * @param {vector} vectorA
		     * @param {vector} vectorB
		     * @return {number} The cross product of the two vectors
		     */
		    Vector.cross = function(vectorA, vectorB) {
		        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
		    };

		    /**
		     * Returns the cross-product of three vectors.
		     * @method cross3
		     * @param {vector} vectorA
		     * @param {vector} vectorB
		     * @param {vector} vectorC
		     * @return {number} The cross product of the three vectors
		     */
		    Vector.cross3 = function(vectorA, vectorB, vectorC) {
		        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
		    };

		    /**
		     * Adds the two vectors.
		     * @method add
		     * @param {vector} vectorA
		     * @param {vector} vectorB
		     * @param {vector} [output]
		     * @return {vector} A new vector of vectorA and vectorB added
		     */
		    Vector.add = function(vectorA, vectorB, output) {
		        if (!output) output = {};
		        output.x = vectorA.x + vectorB.x;
		        output.y = vectorA.y + vectorB.y;
		        return output;
		    };

		    /**
		     * Subtracts the two vectors.
		     * @method sub
		     * @param {vector} vectorA
		     * @param {vector} vectorB
		     * @param {vector} [output]
		     * @return {vector} A new vector of vectorA and vectorB subtracted
		     */
		    Vector.sub = function(vectorA, vectorB, output) {
		        if (!output) output = {};
		        output.x = vectorA.x - vectorB.x;
		        output.y = vectorA.y - vectorB.y;
		        return output;
		    };

		    /**
		     * Multiplies a vector and a scalar.
		     * @method mult
		     * @param {vector} vector
		     * @param {number} scalar
		     * @return {vector} A new vector multiplied by scalar
		     */
		    Vector.mult = function(vector, scalar) {
		        return { x: vector.x * scalar, y: vector.y * scalar };
		    };

		    /**
		     * Divides a vector and a scalar.
		     * @method div
		     * @param {vector} vector
		     * @param {number} scalar
		     * @return {vector} A new vector divided by scalar
		     */
		    Vector.div = function(vector, scalar) {
		        return { x: vector.x / scalar, y: vector.y / scalar };
		    };

		    /**
		     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
		     * @method perp
		     * @param {vector} vector
		     * @param {bool} [negate=false]
		     * @return {vector} The perpendicular vector
		     */
		    Vector.perp = function(vector, negate) {
		        negate = negate === true ? -1 : 1;
		        return { x: negate * -vector.y, y: negate * vector.x };
		    };

		    /**
		     * Negates both components of a vector such that it points in the opposite direction.
		     * @method neg
		     * @param {vector} vector
		     * @return {vector} The negated vector
		     */
		    Vector.neg = function(vector) {
		        return { x: -vector.x, y: -vector.y };
		    };

		    /**
		     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
		     * @method angle
		     * @param {vector} vectorA
		     * @param {vector} vectorB
		     * @return {number} The angle in radians
		     */
		    Vector.angle = function(vectorA, vectorB) {
		        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
		    };

		    /**
		     * Temporary vector pool (not thread-safe).
		     * @property _temp
		     * @type {vector[]}
		     * @private
		     */
		    Vector._temp = [
		        Vector.create(), Vector.create(), 
		        Vector.create(), Vector.create(), 
		        Vector.create(), Vector.create()
		    ];

		})();

		/***/ }),
		/* 3 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
		* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
		* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Vertices
		*/

		var Vertices = {};

		module.exports = Vertices;

		var Vector = __webpack_require__(2);
		var Common = __webpack_require__(0);

		(function() {

		    /**
		     * Creates a new set of `Matter.Body` compatible vertices.
		     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
		     *
		     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
		     *
		     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
		     * but with some additional references required for efficient collision detection routines.
		     *
		     * Vertices must be specified in clockwise order.
		     *
		     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
		     *
		     * @method create
		     * @param {vector[]} points
		     * @param {body} body
		     */
		    Vertices.create = function(points, body) {
		        var vertices = [];

		        for (var i = 0; i < points.length; i++) {
		            var point = points[i],
		                vertex = {
		                    x: point.x,
		                    y: point.y,
		                    index: i,
		                    body: body,
		                    isInternal: false
		                };

		            vertices.push(vertex);
		        }

		        return vertices;
		    };

		    /**
		     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
		     * into a `Matter.Vertices` object for the given `Matter.Body`.
		     * For parsing SVG paths, see `Svg.pathToVertices`.
		     * @method fromPath
		     * @param {string} path
		     * @param {body} body
		     * @return {vertices} vertices
		     */
		    Vertices.fromPath = function(path, body) {
		        var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,
		            points = [];

		        path.replace(pathPattern, function(match, x, y) {
		            points.push({ x: parseFloat(x), y: parseFloat(y) });
		        });

		        return Vertices.create(points, body);
		    };

		    /**
		     * Returns the centre (centroid) of the set of vertices.
		     * @method centre
		     * @param {vertices} vertices
		     * @return {vector} The centre point
		     */
		    Vertices.centre = function(vertices) {
		        var area = Vertices.area(vertices, true),
		            centre = { x: 0, y: 0 },
		            cross,
		            temp,
		            j;

		        for (var i = 0; i < vertices.length; i++) {
		            j = (i + 1) % vertices.length;
		            cross = Vector.cross(vertices[i], vertices[j]);
		            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
		            centre = Vector.add(centre, temp);
		        }

		        return Vector.div(centre, 6 * area);
		    };

		    /**
		     * Returns the average (mean) of the set of vertices.
		     * @method mean
		     * @param {vertices} vertices
		     * @return {vector} The average point
		     */
		    Vertices.mean = function(vertices) {
		        var average = { x: 0, y: 0 };

		        for (var i = 0; i < vertices.length; i++) {
		            average.x += vertices[i].x;
		            average.y += vertices[i].y;
		        }

		        return Vector.div(average, vertices.length);
		    };

		    /**
		     * Returns the area of the set of vertices.
		     * @method area
		     * @param {vertices} vertices
		     * @param {bool} signed
		     * @return {number} The area
		     */
		    Vertices.area = function(vertices, signed) {
		        var area = 0,
		            j = vertices.length - 1;

		        for (var i = 0; i < vertices.length; i++) {
		            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
		            j = i;
		        }

		        if (signed)
		            return area / 2;

		        return Math.abs(area) / 2;
		    };

		    /**
		     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
		     * @method inertia
		     * @param {vertices} vertices
		     * @param {number} mass
		     * @return {number} The polygon's moment of inertia
		     */
		    Vertices.inertia = function(vertices, mass) {
		        var numerator = 0,
		            denominator = 0,
		            v = vertices,
		            cross,
		            j;

		        // find the polygon's moment of inertia, using second moment of area
		        // from equations at http://www.physicsforums.com/showthread.php?t=25293
		        for (var n = 0; n < v.length; n++) {
		            j = (n + 1) % v.length;
		            cross = Math.abs(Vector.cross(v[j], v[n]));
		            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
		            denominator += cross;
		        }

		        return (mass / 6) * (numerator / denominator);
		    };

		    /**
		     * Translates the set of vertices in-place.
		     * @method translate
		     * @param {vertices} vertices
		     * @param {vector} vector
		     * @param {number} scalar
		     */
		    Vertices.translate = function(vertices, vector, scalar) {
		        scalar = typeof scalar !== 'undefined' ? scalar : 1;

		        var verticesLength = vertices.length,
		            translateX = vector.x * scalar,
		            translateY = vector.y * scalar,
		            i;
		        
		        for (i = 0; i < verticesLength; i++) {
		            vertices[i].x += translateX;
		            vertices[i].y += translateY;
		        }

		        return vertices;
		    };

		    /**
		     * Rotates the set of vertices in-place.
		     * @method rotate
		     * @param {vertices} vertices
		     * @param {number} angle
		     * @param {vector} point
		     */
		    Vertices.rotate = function(vertices, angle, point) {
		        if (angle === 0)
		            return;

		        var cos = Math.cos(angle),
		            sin = Math.sin(angle),
		            pointX = point.x,
		            pointY = point.y,
		            verticesLength = vertices.length,
		            vertex,
		            dx,
		            dy,
		            i;

		        for (i = 0; i < verticesLength; i++) {
		            vertex = vertices[i];
		            dx = vertex.x - pointX;
		            dy = vertex.y - pointY;
		            vertex.x = pointX + (dx * cos - dy * sin);
		            vertex.y = pointY + (dx * sin + dy * cos);
		        }

		        return vertices;
		    };

		    /**
		     * Returns `true` if the `point` is inside the set of `vertices`.
		     * @method contains
		     * @param {vertices} vertices
		     * @param {vector} point
		     * @return {boolean} True if the vertices contains point, otherwise false
		     */
		    Vertices.contains = function(vertices, point) {
		        var pointX = point.x,
		            pointY = point.y,
		            verticesLength = vertices.length,
		            vertex = vertices[verticesLength - 1],
		            nextVertex;

		        for (var i = 0; i < verticesLength; i++) {
		            nextVertex = vertices[i];

		            if ((pointX - vertex.x) * (nextVertex.y - vertex.y) 
		                + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
		                return false;
		            }

		            vertex = nextVertex;
		        }

		        return true;
		    };

		    /**
		     * Scales the vertices from a point (default is centre) in-place.
		     * @method scale
		     * @param {vertices} vertices
		     * @param {number} scaleX
		     * @param {number} scaleY
		     * @param {vector} point
		     */
		    Vertices.scale = function(vertices, scaleX, scaleY, point) {
		        if (scaleX === 1 && scaleY === 1)
		            return vertices;

		        point = point || Vertices.centre(vertices);

		        var vertex,
		            delta;

		        for (var i = 0; i < vertices.length; i++) {
		            vertex = vertices[i];
		            delta = Vector.sub(vertex, point);
		            vertices[i].x = point.x + delta.x * scaleX;
		            vertices[i].y = point.y + delta.y * scaleY;
		        }

		        return vertices;
		    };

		    /**
		     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
		     * The radius parameter is a single number or an array to specify the radius for each vertex.
		     * @method chamfer
		     * @param {vertices} vertices
		     * @param {number[]} radius
		     * @param {number} quality
		     * @param {number} qualityMin
		     * @param {number} qualityMax
		     */
		    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
		        if (typeof radius === 'number') {
		            radius = [radius];
		        } else {
		            radius = radius || [8];
		        }

		        // quality defaults to -1, which is auto
		        quality = (typeof quality !== 'undefined') ? quality : -1;
		        qualityMin = qualityMin || 2;
		        qualityMax = qualityMax || 14;

		        var newVertices = [];

		        for (var i = 0; i < vertices.length; i++) {
		            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
		                vertex = vertices[i],
		                nextVertex = vertices[(i + 1) % vertices.length],
		                currentRadius = radius[i < radius.length ? i : radius.length - 1];

		            if (currentRadius === 0) {
		                newVertices.push(vertex);
		                continue;
		            }

		            var prevNormal = Vector.normalise({ 
		                x: vertex.y - prevVertex.y, 
		                y: prevVertex.x - vertex.x
		            });

		            var nextNormal = Vector.normalise({ 
		                x: nextVertex.y - vertex.y, 
		                y: vertex.x - nextVertex.x
		            });

		            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
		                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
		                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
		                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

		            var precision = quality;

		            if (quality === -1) {
		                // automatically decide precision
		                precision = Math.pow(currentRadius, 0.32) * 1.75;
		            }

		            precision = Common.clamp(precision, qualityMin, qualityMax);

		            // use an even value for precision, more likely to reduce axes by using symmetry
		            if (precision % 2 === 1)
		                precision += 1;

		            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
		                theta = alpha / precision;

		            for (var j = 0; j < precision; j++) {
		                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
		            }
		        }

		        return newVertices;
		    };

		    /**
		     * Sorts the input vertices into clockwise order in place.
		     * @method clockwiseSort
		     * @param {vertices} vertices
		     * @return {vertices} vertices
		     */
		    Vertices.clockwiseSort = function(vertices) {
		        var centre = Vertices.mean(vertices);

		        vertices.sort(function(vertexA, vertexB) {
		            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
		        });

		        return vertices;
		    };

		    /**
		     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
		     * @method isConvex
		     * @param {vertices} vertices
		     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
		     */
		    Vertices.isConvex = function(vertices) {
		        // http://paulbourke.net/geometry/polygonmesh/
		        // Copyright (c) Paul Bourke (use permitted)

		        var flag = 0,
		            n = vertices.length,
		            i,
		            j,
		            k,
		            z;

		        if (n < 3)
		            return null;

		        for (i = 0; i < n; i++) {
		            j = (i + 1) % n;
		            k = (i + 2) % n;
		            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
		            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

		            if (z < 0) {
		                flag |= 1;
		            } else if (z > 0) {
		                flag |= 2;
		            }

		            if (flag === 3) {
		                return false;
		            }
		        }

		        if (flag !== 0){
		            return true;
		        } else {
		            return null;
		        }
		    };

		    /**
		     * Returns the convex hull of the input vertices as a new array of points.
		     * @method hull
		     * @param {vertices} vertices
		     * @return [vertex] vertices
		     */
		    Vertices.hull = function(vertices) {
		        // http://geomalgorithms.com/a10-_hull-1.html

		        var upper = [],
		            lower = [], 
		            vertex,
		            i;

		        // sort vertices on x-axis (y-axis for ties)
		        vertices = vertices.slice(0);
		        vertices.sort(function(vertexA, vertexB) {
		            var dx = vertexA.x - vertexB.x;
		            return dx !== 0 ? dx : vertexA.y - vertexB.y;
		        });

		        // build lower hull
		        for (i = 0; i < vertices.length; i += 1) {
		            vertex = vertices[i];

		            while (lower.length >= 2 
		                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
		                lower.pop();
		            }

		            lower.push(vertex);
		        }

		        // build upper hull
		        for (i = vertices.length - 1; i >= 0; i -= 1) {
		            vertex = vertices[i];

		            while (upper.length >= 2 
		                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
		                upper.pop();
		            }

		            upper.push(vertex);
		        }

		        // concatenation of the lower and upper hulls gives the convex hull
		        // omit last points because they are repeated at the beginning of the other list
		        upper.pop();
		        lower.pop();

		        return upper.concat(lower);
		    };

		})();


		/***/ }),
		/* 4 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Body` module contains methods for creating and manipulating rigid bodies.
		* For creating bodies with common configurations such as rectangles, circles and other polygons see the module `Matter.Bodies`.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

		* @class Body
		*/

		var Body = {};

		module.exports = Body;

		var Vertices = __webpack_require__(3);
		var Vector = __webpack_require__(2);
		var Sleeping = __webpack_require__(7);
		var Common = __webpack_require__(0);
		var Bounds = __webpack_require__(1);
		var Axes = __webpack_require__(11);

		(function() {

		    Body._timeCorrection = true;
		    Body._inertiaScale = 4;
		    Body._nextCollidingGroupId = 1;
		    Body._nextNonCollidingGroupId = -1;
		    Body._nextCategory = 0x0001;
		    Body._baseDelta = 1000 / 60;

		    /**
		     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
		     * All properties have default values, and many are pre-calculated automatically based on other properties.
		     * Vertices must be specified in clockwise order.
		     * See the properties section below for detailed information on what you can pass via the `options` object.
		     * @method create
		     * @param {} options
		     * @return {body} body
		     */
		    Body.create = function(options) {
		        var defaults = {
		            id: Common.nextId(),
		            type: 'body',
		            label: 'Body',
		            parts: [],
		            plugin: {},
		            angle: 0,
		            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
		            position: { x: 0, y: 0 },
		            force: { x: 0, y: 0 },
		            torque: 0,
		            positionImpulse: { x: 0, y: 0 },
		            constraintImpulse: { x: 0, y: 0, angle: 0 },
		            totalContacts: 0,
		            speed: 0,
		            angularSpeed: 0,
		            velocity: { x: 0, y: 0 },
		            angularVelocity: 0,
		            isSensor: false,
		            isStatic: false,
		            isSleeping: false,
		            motion: 0,
		            sleepThreshold: 60,
		            density: 0.001,
		            restitution: 0,
		            friction: 0.1,
		            frictionStatic: 0.5,
		            frictionAir: 0.01,
		            collisionFilter: {
		                category: 0x0001,
		                mask: 0xFFFFFFFF,
		                group: 0
		            },
		            slop: 0.05,
		            timeScale: 1,
		            render: {
		                visible: true,
		                opacity: 1,
		                strokeStyle: null,
		                fillStyle: null,
		                lineWidth: null,
		                sprite: {
		                    xScale: 1,
		                    yScale: 1,
		                    xOffset: 0,
		                    yOffset: 0
		                }
		            },
		            events: null,
		            bounds: null,
		            chamfer: null,
		            circleRadius: 0,
		            positionPrev: null,
		            anglePrev: 0,
		            parent: null,
		            axes: null,
		            area: 0,
		            mass: 0,
		            inertia: 0,
		            deltaTime: 1000 / 60,
		            _original: null
		        };

		        var body = Common.extend(defaults, options);

		        _initProperties(body, options);

		        return body;
		    };

		    /**
		     * Returns the next unique group index for which bodies will collide.
		     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
		     * See `body.collisionFilter` for more information.
		     * @method nextGroup
		     * @param {bool} [isNonColliding=false]
		     * @return {Number} Unique group index
		     */
		    Body.nextGroup = function(isNonColliding) {
		        if (isNonColliding)
		            return Body._nextNonCollidingGroupId--;

		        return Body._nextCollidingGroupId++;
		    };

		    /**
		     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
		     * There are 32 available. See `body.collisionFilter` for more information.
		     * @method nextCategory
		     * @return {Number} Unique category bitfield
		     */
		    Body.nextCategory = function() {
		        Body._nextCategory = Body._nextCategory << 1;
		        return Body._nextCategory;
		    };

		    /**
		     * Initialises body properties.
		     * @method _initProperties
		     * @private
		     * @param {body} body
		     * @param {} [options]
		     */
		    var _initProperties = function(body, options) {
		        options = options || {};

		        // init required properties (order is important)
		        Body.set(body, {
		            bounds: body.bounds || Bounds.create(body.vertices),
		            positionPrev: body.positionPrev || Vector.clone(body.position),
		            anglePrev: body.anglePrev || body.angle,
		            vertices: body.vertices,
		            parts: body.parts || [body],
		            isStatic: body.isStatic,
		            isSleeping: body.isSleeping,
		            parent: body.parent || body
		        });

		        Vertices.rotate(body.vertices, body.angle, body.position);
		        Axes.rotate(body.axes, body.angle);
		        Bounds.update(body.bounds, body.vertices, body.velocity);

		        // allow options to override the automatically calculated properties
		        Body.set(body, {
		            axes: options.axes || body.axes,
		            area: options.area || body.area,
		            mass: options.mass || body.mass,
		            inertia: options.inertia || body.inertia
		        });

		        // render properties
		        var defaultFillStyle = (body.isStatic ? '#14151f' : Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])),
		            defaultStrokeStyle = body.isStatic ? '#555' : '#ccc',
		            defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
		        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
		        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
		        body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
		        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
		        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
		    };

		    /**
		     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
		     * Prefer to use the actual setter functions in performance critical situations.
		     * @method set
		     * @param {body} body
		     * @param {} settings A property name (or map of properties and values) to set on the body.
		     * @param {} value The value to set if `settings` is a single property name.
		     */
		    Body.set = function(body, settings, value) {
		        var property;

		        if (typeof settings === 'string') {
		            property = settings;
		            settings = {};
		            settings[property] = value;
		        }

		        for (property in settings) {
		            if (!Object.prototype.hasOwnProperty.call(settings, property))
		                continue;

		            value = settings[property];
		            switch (property) {

		            case 'isStatic':
		                Body.setStatic(body, value);
		                break;
		            case 'isSleeping':
		                Sleeping.set(body, value);
		                break;
		            case 'mass':
		                Body.setMass(body, value);
		                break;
		            case 'density':
		                Body.setDensity(body, value);
		                break;
		            case 'inertia':
		                Body.setInertia(body, value);
		                break;
		            case 'vertices':
		                Body.setVertices(body, value);
		                break;
		            case 'position':
		                Body.setPosition(body, value);
		                break;
		            case 'angle':
		                Body.setAngle(body, value);
		                break;
		            case 'velocity':
		                Body.setVelocity(body, value);
		                break;
		            case 'angularVelocity':
		                Body.setAngularVelocity(body, value);
		                break;
		            case 'speed':
		                Body.setSpeed(body, value);
		                break;
		            case 'angularSpeed':
		                Body.setAngularSpeed(body, value);
		                break;
		            case 'parts':
		                Body.setParts(body, value);
		                break;
		            case 'centre':
		                Body.setCentre(body, value);
		                break;
		            default:
		                body[property] = value;

		            }
		        }
		    };

		    /**
		     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
		     * @method setStatic
		     * @param {body} body
		     * @param {bool} isStatic
		     */
		    Body.setStatic = function(body, isStatic) {
		        for (var i = 0; i < body.parts.length; i++) {
		            var part = body.parts[i];

		            if (isStatic) {
		                if (!part.isStatic) {
		                    part._original = {
		                        restitution: part.restitution,
		                        friction: part.friction,
		                        mass: part.mass,
		                        inertia: part.inertia,
		                        density: part.density,
		                        inverseMass: part.inverseMass,
		                        inverseInertia: part.inverseInertia
		                    };
		                }

		                part.restitution = 0;
		                part.friction = 1;
		                part.mass = part.inertia = part.density = Infinity;
		                part.inverseMass = part.inverseInertia = 0;

		                part.positionPrev.x = part.position.x;
		                part.positionPrev.y = part.position.y;
		                part.anglePrev = part.angle;
		                part.angularVelocity = 0;
		                part.speed = 0;
		                part.angularSpeed = 0;
		                part.motion = 0;
		            } else if (part._original) {
		                part.restitution = part._original.restitution;
		                part.friction = part._original.friction;
		                part.mass = part._original.mass;
		                part.inertia = part._original.inertia;
		                part.density = part._original.density;
		                part.inverseMass = part._original.inverseMass;
		                part.inverseInertia = part._original.inverseInertia;

		                part._original = null;
		            }

		            part.isStatic = isStatic;
		        }
		    };

		    /**
		     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
		     * @method setMass
		     * @param {body} body
		     * @param {number} mass
		     */
		    Body.setMass = function(body, mass) {
		        var moment = body.inertia / (body.mass / 6);
		        body.inertia = moment * (mass / 6);
		        body.inverseInertia = 1 / body.inertia;

		        body.mass = mass;
		        body.inverseMass = 1 / body.mass;
		        body.density = body.mass / body.area;
		    };

		    /**
		     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
		     * @method setDensity
		     * @param {body} body
		     * @param {number} density
		     */
		    Body.setDensity = function(body, density) {
		        Body.setMass(body, density * body.area);
		        body.density = density;
		    };

		    /**
		     * Sets the moment of inertia of the body. This is the second moment of area in two dimensions.
		     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
		     * @method setInertia
		     * @param {body} body
		     * @param {number} inertia
		     */
		    Body.setInertia = function(body, inertia) {
		        body.inertia = inertia;
		        body.inverseInertia = 1 / body.inertia;
		    };

		    /**
		     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
		     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
		     * They are then automatically translated to world space based on `body.position`.
		     *
		     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
		     * Vertices must form a convex hull. Concave vertices must be decomposed into convex parts.
		     * 
		     * @method setVertices
		     * @param {body} body
		     * @param {vector[]} vertices
		     */
		    Body.setVertices = function(body, vertices) {
		        // change vertices
		        if (vertices[0].body === body) {
		            body.vertices = vertices;
		        } else {
		            body.vertices = Vertices.create(vertices, body);
		        }

		        // update properties
		        body.axes = Axes.fromVertices(body.vertices);
		        body.area = Vertices.area(body.vertices);
		        Body.setMass(body, body.density * body.area);

		        // orient vertices around the centre of mass at origin (0, 0)
		        var centre = Vertices.centre(body.vertices);
		        Vertices.translate(body.vertices, centre, -1);

		        // update inertia while vertices are at origin (0, 0)
		        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

		        // update geometry
		        Vertices.translate(body.vertices, body.position);
		        Bounds.update(body.bounds, body.vertices, body.velocity);
		    };

		    /**
		     * Sets the parts of the `body`. 
		     * 
		     * See `body.parts` for details and requirements on how parts are used.
		     * 
		     * See Bodies.fromVertices for a related utility.
		     * 
		     * This function updates `body` mass, inertia and centroid based on the parts geometry.  
		     * Sets each `part.parent` to be this `body`.  
		     * 
		     * The convex hull is computed and set on this `body` (unless `autoHull` is `false`).  
		     * Automatically ensures that the first part in `body.parts` is the `body`.
		     * @method setParts
		     * @param {body} body
		     * @param {body[]} parts
		     * @param {bool} [autoHull=true]
		     */
		    Body.setParts = function(body, parts, autoHull) {
		        var i;

		        // add all the parts, ensuring that the first part is always the parent body
		        parts = parts.slice(0);
		        body.parts.length = 0;
		        body.parts.push(body);
		        body.parent = body;

		        for (i = 0; i < parts.length; i++) {
		            var part = parts[i];
		            if (part !== body) {
		                part.parent = body;
		                body.parts.push(part);
		            }
		        }

		        if (body.parts.length === 1)
		            return;

		        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

		        // find the convex hull of all parts to set on the parent body
		        if (autoHull) {
		            var vertices = [];
		            for (i = 0; i < parts.length; i++) {
		                vertices = vertices.concat(parts[i].vertices);
		            }

		            Vertices.clockwiseSort(vertices);

		            var hull = Vertices.hull(vertices),
		                hullCentre = Vertices.centre(hull);

		            Body.setVertices(body, hull);
		            Vertices.translate(body.vertices, hullCentre);
		        }

		        // sum the properties of all compound parts of the parent body
		        var total = Body._totalProperties(body);

		        body.area = total.area;
		        body.parent = body;
		        body.position.x = total.centre.x;
		        body.position.y = total.centre.y;
		        body.positionPrev.x = total.centre.x;
		        body.positionPrev.y = total.centre.y;

		        Body.setMass(body, total.mass);
		        Body.setInertia(body, total.inertia);
		        Body.setPosition(body, total.centre);
		    };

		    /**
		     * Set the centre of mass of the body. 
		     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
		     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
		     * This is equal to moving `body.position` but not the `body.vertices`.
		     * Invalid if the `centre` falls outside the body's convex hull.
		     * @method setCentre
		     * @param {body} body
		     * @param {vector} centre
		     * @param {bool} relative
		     */
		    Body.setCentre = function(body, centre, relative) {
		        if (!relative) {
		            body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
		            body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
		            body.position.x = centre.x;
		            body.position.y = centre.y;
		        } else {
		            body.positionPrev.x += centre.x;
		            body.positionPrev.y += centre.y;
		            body.position.x += centre.x;
		            body.position.y += centre.y;
		        }
		    };

		    /**
		     * Sets the position of the body. By default velocity is unchanged.
		     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
		     * @method setPosition
		     * @param {body} body
		     * @param {vector} position
		     * @param {boolean} [updateVelocity=false]
		     */
		    Body.setPosition = function(body, position, updateVelocity) {
		        var delta = Vector.sub(position, body.position);

		        if (updateVelocity) {
		            body.positionPrev.x = body.position.x;
		            body.positionPrev.y = body.position.y;
		            body.velocity.x = delta.x;
		            body.velocity.y = delta.y;
		            body.speed = Vector.magnitude(delta);
		        } else {
		            body.positionPrev.x += delta.x;
		            body.positionPrev.y += delta.y;
		        }

		        for (var i = 0; i < body.parts.length; i++) {
		            var part = body.parts[i];
		            part.position.x += delta.x;
		            part.position.y += delta.y;
		            Vertices.translate(part.vertices, delta);
		            Bounds.update(part.bounds, part.vertices, body.velocity);
		        }
		    };

		    /**
		     * Sets the angle of the body. By default angular velocity is unchanged.
		     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
		     * @method setAngle
		     * @param {body} body
		     * @param {number} angle
		     * @param {boolean} [updateVelocity=false]
		     */
		    Body.setAngle = function(body, angle, updateVelocity) {
		        var delta = angle - body.angle;
		        
		        if (updateVelocity) {
		            body.anglePrev = body.angle;
		            body.angularVelocity = delta;
		            body.angularSpeed = Math.abs(delta);
		        } else {
		            body.anglePrev += delta;
		        }

		        for (var i = 0; i < body.parts.length; i++) {
		            var part = body.parts[i];
		            part.angle += delta;
		            Vertices.rotate(part.vertices, delta, body.position);
		            Axes.rotate(part.axes, delta);
		            Bounds.update(part.bounds, part.vertices, body.velocity);
		            if (i > 0) {
		                Vector.rotateAbout(part.position, delta, body.position, part.position);
		            }
		        }
		    };

		    /**
		     * Sets the current linear velocity of the body.  
		     * Affects body speed.
		     * @method setVelocity
		     * @param {body} body
		     * @param {vector} velocity
		     */
		    Body.setVelocity = function(body, velocity) {
		        var timeScale = body.deltaTime / Body._baseDelta;
		        body.positionPrev.x = body.position.x - velocity.x * timeScale;
		        body.positionPrev.y = body.position.y - velocity.y * timeScale;
		        body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
		        body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
		        body.speed = Vector.magnitude(body.velocity);
		    };

		    /**
		     * Gets the current linear velocity of the body.
		     * @method getVelocity
		     * @param {body} body
		     * @return {vector} velocity
		     */
		    Body.getVelocity = function(body) {
		        var timeScale = Body._baseDelta / body.deltaTime;

		        return {
		            x: (body.position.x - body.positionPrev.x) * timeScale,
		            y: (body.position.y - body.positionPrev.y) * timeScale
		        };
		    };

		    /**
		     * Gets the current linear speed of the body.  
		     * Equivalent to the magnitude of its velocity.
		     * @method getSpeed
		     * @param {body} body
		     * @return {number} speed
		     */
		    Body.getSpeed = function(body) {
		        return Vector.magnitude(Body.getVelocity(body));
		    };

		    /**
		     * Sets the current linear speed of the body.  
		     * Direction is maintained. Affects body velocity.
		     * @method setSpeed
		     * @param {body} body
		     * @param {number} speed
		     */
		    Body.setSpeed = function(body, speed) {
		        Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
		    };

		    /**
		     * Sets the current rotational velocity of the body.  
		     * Affects body angular speed.
		     * @method setAngularVelocity
		     * @param {body} body
		     * @param {number} velocity
		     */
		    Body.setAngularVelocity = function(body, velocity) {
		        var timeScale = body.deltaTime / Body._baseDelta;
		        body.anglePrev = body.angle - velocity * timeScale;
		        body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
		        body.angularSpeed = Math.abs(body.angularVelocity);
		    };

		    /**
		     * Gets the current rotational velocity of the body.
		     * @method getAngularVelocity
		     * @param {body} body
		     * @return {number} angular velocity
		     */
		    Body.getAngularVelocity = function(body) {
		        return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
		    };

		    /**
		     * Gets the current rotational speed of the body.  
		     * Equivalent to the magnitude of its angular velocity.
		     * @method getAngularSpeed
		     * @param {body} body
		     * @return {number} angular speed
		     */
		    Body.getAngularSpeed = function(body) {
		        return Math.abs(Body.getAngularVelocity(body));
		    };

		    /**
		     * Sets the current rotational speed of the body.  
		     * Direction is maintained. Affects body angular velocity.
		     * @method setAngularSpeed
		     * @param {body} body
		     * @param {number} speed
		     */
		    Body.setAngularSpeed = function(body, speed) {
		        Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
		    };

		    /**
		     * Moves a body by a given vector relative to its current position. By default velocity is unchanged.
		     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
		     * @method translate
		     * @param {body} body
		     * @param {vector} translation
		     * @param {boolean} [updateVelocity=false]
		     */
		    Body.translate = function(body, translation, updateVelocity) {
		        Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
		    };

		    /**
		     * Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged.
		     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
		     * @method rotate
		     * @param {body} body
		     * @param {number} rotation
		     * @param {vector} [point]
		     * @param {boolean} [updateVelocity=false]
		     */
		    Body.rotate = function(body, rotation, point, updateVelocity) {
		        if (!point) {
		            Body.setAngle(body, body.angle + rotation, updateVelocity);
		        } else {
		            var cos = Math.cos(rotation),
		                sin = Math.sin(rotation),
		                dx = body.position.x - point.x,
		                dy = body.position.y - point.y;
		                
		            Body.setPosition(body, {
		                x: point.x + (dx * cos - dy * sin),
		                y: point.y + (dx * sin + dy * cos)
		            }, updateVelocity);

		            Body.setAngle(body, body.angle + rotation, updateVelocity);
		        }
		    };

		    /**
		     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
		     * @method scale
		     * @param {body} body
		     * @param {number} scaleX
		     * @param {number} scaleY
		     * @param {vector} [point]
		     */
		    Body.scale = function(body, scaleX, scaleY, point) {
		        var totalArea = 0,
		            totalInertia = 0;

		        point = point || body.position;

		        for (var i = 0; i < body.parts.length; i++) {
		            var part = body.parts[i];

		            // scale vertices
		            Vertices.scale(part.vertices, scaleX, scaleY, point);

		            // update properties
		            part.axes = Axes.fromVertices(part.vertices);
		            part.area = Vertices.area(part.vertices);
		            Body.setMass(part, body.density * part.area);

		            // update inertia (requires vertices to be at origin)
		            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
		            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
		            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

		            if (i > 0) {
		                totalArea += part.area;
		                totalInertia += part.inertia;
		            }

		            // scale position
		            part.position.x = point.x + (part.position.x - point.x) * scaleX;
		            part.position.y = point.y + (part.position.y - point.y) * scaleY;

		            // update bounds
		            Bounds.update(part.bounds, part.vertices, body.velocity);
		        }

		        // handle parent body
		        if (body.parts.length > 1) {
		            body.area = totalArea;

		            if (!body.isStatic) {
		                Body.setMass(body, body.density * totalArea);
		                Body.setInertia(body, totalInertia);
		            }
		        }

		        // handle circles
		        if (body.circleRadius) { 
		            if (scaleX === scaleY) {
		                body.circleRadius *= scaleX;
		            } else {
		                // body is no longer a circle
		                body.circleRadius = null;
		            }
		        }
		    };

		    /**
		     * Performs an update by integrating the equations of motion on the `body`.
		     * This is applied every update by `Matter.Engine` automatically.
		     * @method update
		     * @param {body} body
		     * @param {number} [deltaTime=16.666]
		     */
		    Body.update = function(body, deltaTime) {
		        deltaTime = (typeof deltaTime !== 'undefined' ? deltaTime : (1000 / 60)) * body.timeScale;

		        var deltaTimeSquared = deltaTime * deltaTime,
		            correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;

		        // from the previous step
		        var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta),
		            velocityPrevX = (body.position.x - body.positionPrev.x) * correction,
		            velocityPrevY = (body.position.y - body.positionPrev.y) * correction;

		        // update velocity with Verlet integration
		        body.velocity.x = (velocityPrevX * frictionAir) + (body.force.x / body.mass) * deltaTimeSquared;
		        body.velocity.y = (velocityPrevY * frictionAir) + (body.force.y / body.mass) * deltaTimeSquared;

		        body.positionPrev.x = body.position.x;
		        body.positionPrev.y = body.position.y;
		        body.position.x += body.velocity.x;
		        body.position.y += body.velocity.y;
		        body.deltaTime = deltaTime;

		        // update angular velocity with Verlet integration
		        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
		        body.anglePrev = body.angle;
		        body.angle += body.angularVelocity;

		        // transform the body geometry
		        for (var i = 0; i < body.parts.length; i++) {
		            var part = body.parts[i];

		            Vertices.translate(part.vertices, body.velocity);
		            
		            if (i > 0) {
		                part.position.x += body.velocity.x;
		                part.position.y += body.velocity.y;
		            }

		            if (body.angularVelocity !== 0) {
		                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
		                Axes.rotate(part.axes, body.angularVelocity);
		                if (i > 0) {
		                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
		                }
		            }

		            Bounds.update(part.bounds, part.vertices, body.velocity);
		        }
		    };

		    /**
		     * Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
		     * @method updateVelocities
		     * @param {body} body
		     */
		    Body.updateVelocities = function(body) {
		        var timeScale = Body._baseDelta / body.deltaTime,
		            bodyVelocity = body.velocity;

		        bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
		        bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
		        body.speed = Math.sqrt((bodyVelocity.x * bodyVelocity.x) + (bodyVelocity.y * bodyVelocity.y));

		        body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
		        body.angularSpeed = Math.abs(body.angularVelocity);
		    };

		    /**
		     * Applies the `force` to the `body` from the force origin `position` in world-space, over a single timestep, including applying any resulting angular torque.
		     * 
		     * Forces are useful for effects like gravity, wind or rocket thrust, but can be difficult in practice when precise control is needed. In these cases see `Body.setVelocity` and `Body.setPosition` as an alternative.
		     * 
		     * The force from this function is only applied once for the duration of a single timestep, in other words the duration depends directly on the current engine update `delta` and the rate of calls to this function.
		     * 
		     * Therefore to account for time, you should apply the force constantly over as many engine updates as equivalent to the intended duration.
		     * 
		     * If all or part of the force duration is some fraction of a timestep, first multiply the force by `duration / timestep`.
		     * 
		     * The force origin `position` in world-space must also be specified. Passing `body.position` will result in zero angular effect as the force origin would be at the centre of mass.
		     * 
		     * The `body` will take time to accelerate under a force, the resulting effect depends on duration of the force, the body mass and other forces on the body including friction combined.
		     * @method applyForce
		     * @param {body} body
		     * @param {vector} position The force origin in world-space. Pass `body.position` to avoid angular torque.
		     * @param {vector} force
		     */
		    Body.applyForce = function(body, position, force) {
		        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
		        body.force.x += force.x;
		        body.force.y += force.y;
		        body.torque += offset.x * force.y - offset.y * force.x;
		    };

		    /**
		     * Returns the sums of the properties of all compound parts of the parent body.
		     * @method _totalProperties
		     * @private
		     * @param {body} body
		     * @return {}
		     */
		    Body._totalProperties = function(body) {
		        // from equations at:
		        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
		        // http://output.to/sideway/default.asp?qno=121100087

		        var properties = {
		            mass: 0,
		            area: 0,
		            inertia: 0,
		            centre: { x: 0, y: 0 }
		        };

		        // sum the properties of all compound parts of the parent body
		        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
		            var part = body.parts[i],
		                mass = part.mass !== Infinity ? part.mass : 1;

		            properties.mass += mass;
		            properties.area += part.area;
		            properties.inertia += part.inertia;
		            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
		        }

		        properties.centre = Vector.div(properties.centre, properties.mass);

		        return properties;
		    };

		    /*
		    *
		    *  Events Documentation
		    *
		    */

		    /**
		    * Fired when a body starts sleeping (where `this` is the body).
		    *
		    * @event sleepStart
		    * @this {body} The body that has started sleeping
		    * @param {} event An event object
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired when a body ends sleeping (where `this` is the body).
		    *
		    * @event sleepEnd
		    * @this {body} The body that has ended sleeping
		    * @param {} event An event object
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
		     *
		     * @property id
		     * @type number
		     */

		    /**
		     * _Read only_. Set by `Body.create`.
		     * 
		     * A `String` denoting the type of object.
		     *
		     * @readOnly
		     * @property type
		     * @type string
		     * @default "body"
		     */

		    /**
		     * An arbitrary `String` name to help the user identify and manage bodies.
		     *
		     * @property label
		     * @type string
		     * @default "Body"
		     */

		    /**
		     * _Read only_. Use `Body.setParts` to set. 
		     * 
		     * See `Bodies.fromVertices` for a related utility.
		     * 
		     * An array of bodies (the 'parts') that make up this body (the 'parent'). The first body in this array must always be a self-reference to this `body`.  
		     * 
		     * The parts are fixed together and therefore perform as a single unified rigid body.
		     * 
		     * Parts in relation to each other are allowed to overlap, as well as form gaps or holes, so can be used to create complex concave bodies unlike when using a single part. 
		     * 
		     * Use properties and functions on the parent `body` rather than on parts.
		     *   
		     * Outside of their geometry, most properties on parts are not considered or updated.  
		     * As such 'per-part' material properties among others are not currently considered.
		     * 
		     * Parts should be created specifically for their parent body.  
		     * Parts should not be shared or reused between bodies, only one parent is supported.  
		     * Parts should not have their own parts, they are not handled recursively.  
		     * Parts should not be added to the world directly or any other composite.  
		     * Parts own vertices must be convex and in clockwise order.   
		     * 
		     * A body with more than one part is sometimes referred to as a 'compound' body. 
		     * 
		     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.  
		     *
		     * @readOnly
		     * @property parts
		     * @type body[]
		     */

		    /**
		     * An object reserved for storing plugin-specific properties.
		     *
		     * @property plugin
		     * @type {}
		     */

		    /**
		     * _Read only_. Updated by `Body.setParts`.
		     * 
		     * A reference to the body that this is a part of. See `body.parts`.
		     * This is a self reference if the body is not a part of another body.
		     *
		     * @readOnly
		     * @property parent
		     * @type body
		     */

		    /**
		     * A `Number` specifying the angle of the body, in radians.
		     *
		     * @property angle
		     * @type number
		     * @default 0
		     */

		    /**
		     * _Read only_. Use `Body.setVertices` or `Body.setParts` to set. See also `Bodies.fromVertices`.
		     * 
		     * An array of `Vector` objects that specify the convex hull of the rigid body.
		     * These should be provided about the origin `(0, 0)`. E.g.
		     *
		     * `[{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]`
		     * 
		     * Vertices must always be convex, in clockwise order and must not contain any duplicate points.
		     * 
		     * Concave vertices should be decomposed into convex `parts`, see `Bodies.fromVertices` and `Body.setParts`.
		     *
		     * When set the vertices are translated such that `body.position` is at the centre of mass.
		     * Many other body properties are automatically calculated from these vertices when set including `density`, `area` and `inertia`.
		     * 
		     * The module `Matter.Vertices` contains useful methods for working with vertices.
		     *
		     * @readOnly
		     * @property vertices
		     * @type vector[]
		     */

		    /**
		     * _Read only_. Use `Body.setPosition` to set. 
		     * 
		     * A `Vector` that specifies the current world-space position of the body.
		     * 
		     * @readOnly
		     * @property position
		     * @type vector
		     * @default { x: 0, y: 0 }
		     */

		    /**
		     * A `Vector` that accumulates the total force applied to the body for a single update.
		     * Force is zeroed after every `Engine.update`, so constant forces should be applied for every update they are needed. See also `Body.applyForce`.
		     * 
		     * @property force
		     * @type vector
		     * @default { x: 0, y: 0 }
		     */

		    /**
		     * A `Number` that accumulates the total torque (turning force) applied to the body for a single update. See also `Body.applyForce`.
		     * Torque is zeroed after every `Engine.update`, so constant torques should be applied for every update they are needed.
		     *
		     * Torques result in angular acceleration on every update, which depends on body inertia and the engine update delta.
		     * 
		     * @property torque
		     * @type number
		     * @default 0
		     */

		    /**
		     * _Read only_. Use `Body.setSpeed` to set. 
		     * 
		     * See `Body.getSpeed` for details.
		     * 
		     * Equivalent to the magnitude of `body.velocity` (always positive).
		     * 
		     * @readOnly
		     * @property speed
		     * @type number
		     * @default 0
		     */

		    /**
		     * _Read only_. Use `Body.setVelocity` to set. 
		     * 
		     * See `Body.getVelocity` for details.
		     * 
		     * Equivalent to the magnitude of `body.angularVelocity` (always positive).
		     * 
		     * @readOnly
		     * @property velocity
		     * @type vector
		     * @default { x: 0, y: 0 }
		     */

		    /**
		     * _Read only_. Use `Body.setAngularSpeed` to set. 
		     * 
		     * See `Body.getAngularSpeed` for details.
		     * 
		     * 
		     * @readOnly
		     * @property angularSpeed
		     * @type number
		     * @default 0
		     */

		    /**
		     * _Read only_. Use `Body.setAngularVelocity` to set. 
		     * 
		     * See `Body.getAngularVelocity` for details.
		     * 
		     *
		     * @readOnly
		     * @property angularVelocity
		     * @type number
		     * @default 0
		     */

		    /**
		     * _Read only_. Use `Body.setStatic` to set. 
		     * 
		     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
		     *
		     * @readOnly
		     * @property isStatic
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
		     *
		     * @property isSensor
		     * @type boolean
		     * @default false
		     */

		    /**
		     * _Read only_. Use `Sleeping.set` to set. 
		     * 
		     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
		     *
		     * @readOnly
		     * @property isSleeping
		     * @type boolean
		     * @default false
		     */

		    /**
		     * _Read only_. Calculated during engine update only when sleeping is enabled.
		     * 
		     * A `Number` that loosely measures the amount of movement a body currently has.
		     *
		     * Derived from `body.speed^2 + body.angularSpeed^2`. See `Sleeping.update`.
		     * 
		     * @readOnly
		     * @property motion
		     * @type number
		     * @default 0
		     */

		    /**
		     * A `Number` that defines the length of time during which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
		     * 
		     * @property sleepThreshold
		     * @type number
		     * @default 60
		     */

		    /**
		     * _Read only_. Use `Body.setDensity` to set. 
		     * 
		     * A `Number` that defines the density of the body (mass per unit area).
		     * 
		     * Mass will also be updated when set.
		     *
		     * @readOnly
		     * @property density
		     * @type number
		     * @default 0.001
		     */

		    /**
		     * _Read only_. Use `Body.setMass` to set. 
		     * 
		     * A `Number` that defines the mass of the body.
		     * 
		     * Density will also be updated when set.
		     * 
		     * @readOnly
		     * @property mass
		     * @type number
		     */

		    /**
		     * _Read only_. Use `Body.setMass` to set. 
		     * 
		     * A `Number` that defines the inverse mass of the body (`1 / mass`).
		     *
		     * @readOnly
		     * @property inverseMass
		     * @type number
		     */

		    /**
		     * _Read only_. Automatically calculated when vertices, mass or density are set or set through `Body.setInertia`.
		     * 
		     * A `Number` that defines the moment of inertia of the body. This is the second moment of area in two dimensions.
		     * 
		     * Can be manually set to `Infinity` to prevent rotation of the body. See `Body.setInertia`.
		     * 
		     * @readOnly
		     * @property inertia
		     * @type number
		     */

		    /**
		     * _Read only_. Automatically calculated when vertices, mass or density are set or calculated by `Body.setInertia`.
		     * 
		     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
		     * 
		     * @readOnly
		     * @property inverseInertia
		     * @type number
		     */

		    /**
		     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
		     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
		     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
		     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
		     *
		     * `Math.max(bodyA.restitution, bodyB.restitution)`
		     *
		     * @property restitution
		     * @type number
		     * @default 0
		     */

		    /**
		     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
		     * A value of `0` means that the body may slide indefinitely.
		     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
		     *
		     * The effects of the value may be non-linear. 
		     * High values may be unstable depending on the body.
		     * The engine uses a Coulomb friction model including static and kinetic friction.
		     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
		     *
		     * `Math.min(bodyA.friction, bodyB.friction)`
		     *
		     * @property friction
		     * @type number
		     * @default 0.1
		     */

		    /**
		     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
		     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
		     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
		     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
		     *
		     * @property frictionStatic
		     * @type number
		     * @default 0.5
		     */

		    /**
		     * A `Number` that defines the air friction of the body (air resistance). 
		     * A value of `0` means the body will never slow as it moves through space.
		     * The higher the value, the faster a body slows when moving through space.
		     * The effects of the value are non-linear. 
		     *
		     * @property frictionAir
		     * @type number
		     * @default 0.01
		     */

		    /**
		     * An `Object` that specifies the collision filtering properties of this body.
		     *
		     * Collisions between two bodies will obey the following rules:
		     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
		     *   they will always collide if the value is positive, and they will never collide
		     *   if the value is negative.
		     * - If the two bodies have different values of `collisionFilter.group` or if one
		     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
		     *
		     * Each body belongs to a collision category, given by `collisionFilter.category`. This
		     * value is used as a bit field and the category should have only one bit set, meaning that
		     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
		     * different collision categories available.
		     *
		     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
		     * the categories it collides with (the value is the bitwise AND value of all these categories).
		     *
		     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
		     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
		     * are both true.
		     *
		     * @property collisionFilter
		     * @type object
		     */

		    /**
		     * An Integer `Number`, that specifies the collision group this body belongs to.
		     * See `body.collisionFilter` for more information.
		     *
		     * @property collisionFilter.group
		     * @type object
		     * @default 0
		     */

		    /**
		     * A bit field that specifies the collision category this body belongs to.
		     * The category value should have only one bit set, for example `0x0001`.
		     * This means there are up to 32 unique collision categories available.
		     * See `body.collisionFilter` for more information.
		     *
		     * @property collisionFilter.category
		     * @type object
		     * @default 1
		     */

		    /**
		     * A bit mask that specifies the collision categories this body may collide with.
		     * See `body.collisionFilter` for more information.
		     *
		     * @property collisionFilter.mask
		     * @type object
		     * @default -1
		     */

		    /**
		     * A `Number` that specifies a thin boundary around the body where it is allowed to slightly sink into other bodies.
		     * 
		     * This is required for proper collision response, including friction and restitution effects.
		     * 
		     * The default should generally suffice in most cases. You may need to decrease this value for very small bodies that are nearing the default value in scale.
		     *
		     * @property slop
		     * @type number
		     * @default 0.05
		     */

		    /**
		     * A `Number` that specifies per-body time scaling.
		     *
		     * @property timeScale
		     * @type number
		     * @default 1
		     */

		    /**
		     * _Read only_. Updated during engine update.
		     * 
		     * A `Number` that records the last delta time value used to update this body.
		     * Used to calculate speed and velocity.
		     *
		     * @readOnly
		     * @property deltaTime
		     * @type number
		     * @default 1000 / 60
		     */

		    /**
		     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
		     *
		     * @property render
		     * @type object
		     */

		    /**
		     * A flag that indicates if the body should be rendered.
		     *
		     * @property render.visible
		     * @type boolean
		     * @default true
		     */

		    /**
		     * Sets the opacity to use when rendering.
		     *
		     * @property render.opacity
		     * @type number
		     * @default 1
		    */

		    /**
		     * An `Object` that defines the sprite properties to use when rendering, if any.
		     *
		     * @property render.sprite
		     * @type object
		     */

		    /**
		     * An `String` that defines the path to the image to use as the sprite texture, if any.
		     *
		     * @property render.sprite.texture
		     * @type string
		     */
		     
		    /**
		     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
		     *
		     * @property render.sprite.xScale
		     * @type number
		     * @default 1
		     */

		    /**
		     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
		     *
		     * @property render.sprite.yScale
		     * @type number
		     * @default 1
		     */

		    /**
		      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
		      *
		      * @property render.sprite.xOffset
		      * @type number
		      * @default 0
		      */

		    /**
		      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
		      *
		      * @property render.sprite.yOffset
		      * @type number
		      * @default 0
		      */

		    /**
		     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
		     * A value of `0` means no outline will be rendered.
		     *
		     * @property render.lineWidth
		     * @type number
		     * @default 0
		     */

		    /**
		     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
		     * It is the same as when using a canvas, so it accepts CSS style property values.
		     *
		     * @property render.fillStyle
		     * @type string
		     * @default a random colour
		     */

		    /**
		     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
		     * It is the same as when using a canvas, so it accepts CSS style property values.
		     *
		     * @property render.strokeStyle
		     * @type string
		     * @default a random colour
		     */

		    /**
		     * _Read only_. Calculated automatically when vertices are set.
		     * 
		     * An array of unique axis vectors (edge normals) used for collision detection.
		     * These are automatically calculated when vertices are set.
		     * They are constantly updated by `Body.update` during the simulation.
		     *
		     * @readOnly
		     * @property axes
		     * @type vector[]
		     */
		     
		    /**
		     * _Read only_. Calculated automatically when vertices are set.
		     * 
		     * A `Number` that measures the area of the body's convex hull.
		     * 
		     * @readOnly
		     * @property area
		     * @type string
		     * @default 
		     */

		    /**
		     * A `Bounds` object that defines the AABB region for the body.
		     * It is automatically calculated when vertices are set and constantly updated by `Body.update` during simulation.
		     * 
		     * @property bounds
		     * @type bounds
		     */

		    /**
		     * Temporarily may hold parameters to be passed to `Vertices.chamfer` where supported by external functions.
		     * 
		     * See `Vertices.chamfer` for possible parameters this object may hold.
		     * 
		     * Currently only functions inside `Matter.Bodies` provide a utility using this property as a vertices pre-processing option.
		     * 
		     * Alternatively consider using `Vertices.chamfer` directly on vertices before passing them to a body creation function.
		     * 
		     * @property chamfer
		     * @type object|null|undefined
		     */

		})();


		/***/ }),
		/* 5 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Events` module contains methods to fire and listen to events on other objects.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Events
		*/

		var Events = {};

		module.exports = Events;

		var Common = __webpack_require__(0);

		(function() {

		    /**
		     * Subscribes a callback function to the given object's `eventName`.
		     * @method on
		     * @param {} object
		     * @param {string} eventNames
		     * @param {function} callback
		     */
		    Events.on = function(object, eventNames, callback) {
		        var names = eventNames.split(' '),
		            name;

		        for (var i = 0; i < names.length; i++) {
		            name = names[i];
		            object.events = object.events || {};
		            object.events[name] = object.events[name] || [];
		            object.events[name].push(callback);
		        }

		        return callback;
		    };

		    /**
		     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
		     * @method off
		     * @param {} object
		     * @param {string} eventNames
		     * @param {function} callback
		     */
		    Events.off = function(object, eventNames, callback) {
		        if (!eventNames) {
		            object.events = {};
		            return;
		        }

		        // handle Events.off(object, callback)
		        if (typeof eventNames === 'function') {
		            callback = eventNames;
		            eventNames = Common.keys(object.events).join(' ');
		        }

		        var names = eventNames.split(' ');

		        for (var i = 0; i < names.length; i++) {
		            var callbacks = object.events[names[i]],
		                newCallbacks = [];

		            if (callback && callbacks) {
		                for (var j = 0; j < callbacks.length; j++) {
		                    if (callbacks[j] !== callback)
		                        newCallbacks.push(callbacks[j]);
		                }
		            }

		            object.events[names[i]] = newCallbacks;
		        }
		    };

		    /**
		     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
		     * @method trigger
		     * @param {} object
		     * @param {string} eventNames
		     * @param {} event
		     */
		    Events.trigger = function(object, eventNames, event) {
		        var names,
		            name,
		            callbacks,
		            eventClone;

		        var events = object.events;
		        
		        if (events && Common.keys(events).length > 0) {
		            if (!event)
		                event = {};

		            names = eventNames.split(' ');

		            for (var i = 0; i < names.length; i++) {
		                name = names[i];
		                callbacks = events[name];

		                if (callbacks) {
		                    eventClone = Common.clone(event, false);
		                    eventClone.name = name;
		                    eventClone.source = object;

		                    for (var j = 0; j < callbacks.length; j++) {
		                        callbacks[j].apply(object, [eventClone]);
		                    }
		                }
		            }
		        }
		    };

		})();


		/***/ }),
		/* 6 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
		*
		* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
		* A composite could contain anything from a single body all the way up to a whole world.
		* 
		* When making any changes to composites, use the included functions rather than changing their properties directly.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Composite
		*/

		var Composite = {};

		module.exports = Composite;

		var Events = __webpack_require__(5);
		var Common = __webpack_require__(0);
		var Bounds = __webpack_require__(1);
		var Body = __webpack_require__(4);

		(function() {

		    /**
		     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
		     * See the properites section below for detailed information on what you can pass via the `options` object.
		     * @method create
		     * @param {} [options]
		     * @return {composite} A new composite
		     */
		    Composite.create = function(options) {
		        return Common.extend({ 
		            id: Common.nextId(),
		            type: 'composite',
		            parent: null,
		            isModified: false,
		            bodies: [], 
		            constraints: [], 
		            composites: [],
		            label: 'Composite',
		            plugin: {},
		            cache: {
		                allBodies: null,
		                allConstraints: null,
		                allComposites: null
		            }
		        }, options);
		    };

		    /**
		     * Sets the composite's `isModified` flag. 
		     * If `updateParents` is true, all parents will be set (default: false).
		     * If `updateChildren` is true, all children will be set (default: false).
		     * @private
		     * @method setModified
		     * @param {composite} composite
		     * @param {boolean} isModified
		     * @param {boolean} [updateParents=false]
		     * @param {boolean} [updateChildren=false]
		     */
		    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
		        composite.isModified = isModified;

		        if (isModified && composite.cache) {
		            composite.cache.allBodies = null;
		            composite.cache.allConstraints = null;
		            composite.cache.allComposites = null;
		        }

		        if (updateParents && composite.parent) {
		            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
		        }

		        if (updateChildren) {
		            for (var i = 0; i < composite.composites.length; i++) {
		                var childComposite = composite.composites[i];
		                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
		            }
		        }
		    };

		    /**
		     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
		     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
		     * @method add
		     * @param {composite} composite
		     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
		     * @return {composite} The original composite with the objects added
		     */
		    Composite.add = function(composite, object) {
		        var objects = [].concat(object);

		        Events.trigger(composite, 'beforeAdd', { object: object });

		        for (var i = 0; i < objects.length; i++) {
		            var obj = objects[i];

		            switch (obj.type) {

		            case 'body':
		                // skip adding compound parts
		                if (obj.parent !== obj) {
		                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
		                    break;
		                }

		                Composite.addBody(composite, obj);
		                break;
		            case 'constraint':
		                Composite.addConstraint(composite, obj);
		                break;
		            case 'composite':
		                Composite.addComposite(composite, obj);
		                break;
		            case 'mouseConstraint':
		                Composite.addConstraint(composite, obj.constraint);
		                break;

		            }
		        }

		        Events.trigger(composite, 'afterAdd', { object: object });

		        return composite;
		    };

		    /**
		     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
		     * Optionally searching its children recursively.
		     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
		     * @method remove
		     * @param {composite} composite
		     * @param {object|array} object
		     * @param {boolean} [deep=false]
		     * @return {composite} The original composite with the objects removed
		     */
		    Composite.remove = function(composite, object, deep) {
		        var objects = [].concat(object);

		        Events.trigger(composite, 'beforeRemove', { object: object });

		        for (var i = 0; i < objects.length; i++) {
		            var obj = objects[i];

		            switch (obj.type) {

		            case 'body':
		                Composite.removeBody(composite, obj, deep);
		                break;
		            case 'constraint':
		                Composite.removeConstraint(composite, obj, deep);
		                break;
		            case 'composite':
		                Composite.removeComposite(composite, obj, deep);
		                break;
		            case 'mouseConstraint':
		                Composite.removeConstraint(composite, obj.constraint);
		                break;

		            }
		        }

		        Events.trigger(composite, 'afterRemove', { object: object });

		        return composite;
		    };

		    /**
		     * Adds a composite to the given composite.
		     * @private
		     * @method addComposite
		     * @param {composite} compositeA
		     * @param {composite} compositeB
		     * @return {composite} The original compositeA with the objects from compositeB added
		     */
		    Composite.addComposite = function(compositeA, compositeB) {
		        compositeA.composites.push(compositeB);
		        compositeB.parent = compositeA;
		        Composite.setModified(compositeA, true, true, false);
		        return compositeA;
		    };

		    /**
		     * Removes a composite from the given composite, and optionally searching its children recursively.
		     * @private
		     * @method removeComposite
		     * @param {composite} compositeA
		     * @param {composite} compositeB
		     * @param {boolean} [deep=false]
		     * @return {composite} The original compositeA with the composite removed
		     */
		    Composite.removeComposite = function(compositeA, compositeB, deep) {
		        var position = Common.indexOf(compositeA.composites, compositeB);

		        if (position !== -1) {
		            var bodies = Composite.allBodies(compositeB);

		            Composite.removeCompositeAt(compositeA, position);

		            for (var i = 0; i < bodies.length; i++) {
		                bodies[i].sleepCounter = 0;
		            }
		        }

		        if (deep) {
		            for (var i = 0; i < compositeA.composites.length; i++){
		                Composite.removeComposite(compositeA.composites[i], compositeB, true);
		            }
		        }

		        return compositeA;
		    };

		    /**
		     * Removes a composite from the given composite.
		     * @private
		     * @method removeCompositeAt
		     * @param {composite} composite
		     * @param {number} position
		     * @return {composite} The original composite with the composite removed
		     */
		    Composite.removeCompositeAt = function(composite, position) {
		        composite.composites.splice(position, 1);
		        Composite.setModified(composite, true, true, false);
		        return composite;
		    };

		    /**
		     * Adds a body to the given composite.
		     * @private
		     * @method addBody
		     * @param {composite} composite
		     * @param {body} body
		     * @return {composite} The original composite with the body added
		     */
		    Composite.addBody = function(composite, body) {
		        composite.bodies.push(body);
		        Composite.setModified(composite, true, true, false);
		        return composite;
		    };

		    /**
		     * Removes a body from the given composite, and optionally searching its children recursively.
		     * @private
		     * @method removeBody
		     * @param {composite} composite
		     * @param {body} body
		     * @param {boolean} [deep=false]
		     * @return {composite} The original composite with the body removed
		     */
		    Composite.removeBody = function(composite, body, deep) {
		        var position = Common.indexOf(composite.bodies, body);

		        if (position !== -1) {
		            Composite.removeBodyAt(composite, position);
		            body.sleepCounter = 0;
		        }

		        if (deep) {
		            for (var i = 0; i < composite.composites.length; i++){
		                Composite.removeBody(composite.composites[i], body, true);
		            }
		        }

		        return composite;
		    };

		    /**
		     * Removes a body from the given composite.
		     * @private
		     * @method removeBodyAt
		     * @param {composite} composite
		     * @param {number} position
		     * @return {composite} The original composite with the body removed
		     */
		    Composite.removeBodyAt = function(composite, position) {
		        composite.bodies.splice(position, 1);
		        Composite.setModified(composite, true, true, false);
		        return composite;
		    };

		    /**
		     * Adds a constraint to the given composite.
		     * @private
		     * @method addConstraint
		     * @param {composite} composite
		     * @param {constraint} constraint
		     * @return {composite} The original composite with the constraint added
		     */
		    Composite.addConstraint = function(composite, constraint) {
		        composite.constraints.push(constraint);
		        Composite.setModified(composite, true, true, false);
		        return composite;
		    };

		    /**
		     * Removes a constraint from the given composite, and optionally searching its children recursively.
		     * @private
		     * @method removeConstraint
		     * @param {composite} composite
		     * @param {constraint} constraint
		     * @param {boolean} [deep=false]
		     * @return {composite} The original composite with the constraint removed
		     */
		    Composite.removeConstraint = function(composite, constraint, deep) {
		        var position = Common.indexOf(composite.constraints, constraint);
		        
		        if (position !== -1) {
		            Composite.removeConstraintAt(composite, position);
		        }

		        if (deep) {
		            for (var i = 0; i < composite.composites.length; i++){
		                Composite.removeConstraint(composite.composites[i], constraint, true);
		            }
		        }

		        return composite;
		    };

		    /**
		     * Removes a body from the given composite.
		     * @private
		     * @method removeConstraintAt
		     * @param {composite} composite
		     * @param {number} position
		     * @return {composite} The original composite with the constraint removed
		     */
		    Composite.removeConstraintAt = function(composite, position) {
		        composite.constraints.splice(position, 1);
		        Composite.setModified(composite, true, true, false);
		        return composite;
		    };

		    /**
		     * Removes all bodies, constraints and composites from the given composite.
		     * Optionally clearing its children recursively.
		     * @method clear
		     * @param {composite} composite
		     * @param {boolean} keepStatic
		     * @param {boolean} [deep=false]
		     */
		    Composite.clear = function(composite, keepStatic, deep) {
		        if (deep) {
		            for (var i = 0; i < composite.composites.length; i++){
		                Composite.clear(composite.composites[i], keepStatic, true);
		            }
		        }
		        
		        if (keepStatic) {
		            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
		        } else {
		            composite.bodies.length = 0;
		        }

		        composite.constraints.length = 0;
		        composite.composites.length = 0;

		        Composite.setModified(composite, true, true, false);

		        return composite;
		    };

		    /**
		     * Returns all bodies in the given composite, including all bodies in its children, recursively.
		     * @method allBodies
		     * @param {composite} composite
		     * @return {body[]} All the bodies
		     */
		    Composite.allBodies = function(composite) {
		        if (composite.cache && composite.cache.allBodies) {
		            return composite.cache.allBodies;
		        }

		        var bodies = [].concat(composite.bodies);

		        for (var i = 0; i < composite.composites.length; i++)
		            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

		        if (composite.cache) {
		            composite.cache.allBodies = bodies;
		        }

		        return bodies;
		    };

		    /**
		     * Returns all constraints in the given composite, including all constraints in its children, recursively.
		     * @method allConstraints
		     * @param {composite} composite
		     * @return {constraint[]} All the constraints
		     */
		    Composite.allConstraints = function(composite) {
		        if (composite.cache && composite.cache.allConstraints) {
		            return composite.cache.allConstraints;
		        }

		        var constraints = [].concat(composite.constraints);

		        for (var i = 0; i < composite.composites.length; i++)
		            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

		        if (composite.cache) {
		            composite.cache.allConstraints = constraints;
		        }

		        return constraints;
		    };

		    /**
		     * Returns all composites in the given composite, including all composites in its children, recursively.
		     * @method allComposites
		     * @param {composite} composite
		     * @return {composite[]} All the composites
		     */
		    Composite.allComposites = function(composite) {
		        if (composite.cache && composite.cache.allComposites) {
		            return composite.cache.allComposites;
		        }

		        var composites = [].concat(composite.composites);

		        for (var i = 0; i < composite.composites.length; i++)
		            composites = composites.concat(Composite.allComposites(composite.composites[i]));

		        if (composite.cache) {
		            composite.cache.allComposites = composites;
		        }

		        return composites;
		    };

		    /**
		     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
		     * @method get
		     * @param {composite} composite
		     * @param {number} id
		     * @param {string} type
		     * @return {object} The requested object, if found
		     */
		    Composite.get = function(composite, id, type) {
		        var objects,
		            object;

		        switch (type) {
		        case 'body':
		            objects = Composite.allBodies(composite);
		            break;
		        case 'constraint':
		            objects = Composite.allConstraints(composite);
		            break;
		        case 'composite':
		            objects = Composite.allComposites(composite).concat(composite);
		            break;
		        }

		        if (!objects)
		            return null;

		        object = objects.filter(function(object) { 
		            return object.id.toString() === id.toString(); 
		        });

		        return object.length === 0 ? null : object[0];
		    };

		    /**
		     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
		     * @method move
		     * @param {compositeA} compositeA
		     * @param {object[]} objects
		     * @param {compositeB} compositeB
		     * @return {composite} Returns compositeA
		     */
		    Composite.move = function(compositeA, objects, compositeB) {
		        Composite.remove(compositeA, objects);
		        Composite.add(compositeB, objects);
		        return compositeA;
		    };

		    /**
		     * Assigns new ids for all objects in the composite, recursively.
		     * @method rebase
		     * @param {composite} composite
		     * @return {composite} Returns composite
		     */
		    Composite.rebase = function(composite) {
		        var objects = Composite.allBodies(composite)
		            .concat(Composite.allConstraints(composite))
		            .concat(Composite.allComposites(composite));

		        for (var i = 0; i < objects.length; i++) {
		            objects[i].id = Common.nextId();
		        }

		        return composite;
		    };

		    /**
		     * Translates all children in the composite by a given vector relative to their current positions, 
		     * without imparting any velocity.
		     * @method translate
		     * @param {composite} composite
		     * @param {vector} translation
		     * @param {bool} [recursive=true]
		     */
		    Composite.translate = function(composite, translation, recursive) {
		        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

		        for (var i = 0; i < bodies.length; i++) {
		            Body.translate(bodies[i], translation);
		        }

		        return composite;
		    };

		    /**
		     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
		     * @method rotate
		     * @param {composite} composite
		     * @param {number} rotation
		     * @param {vector} point
		     * @param {bool} [recursive=true]
		     */
		    Composite.rotate = function(composite, rotation, point, recursive) {
		        var cos = Math.cos(rotation),
		            sin = Math.sin(rotation),
		            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

		        for (var i = 0; i < bodies.length; i++) {
		            var body = bodies[i],
		                dx = body.position.x - point.x,
		                dy = body.position.y - point.y;
		                
		            Body.setPosition(body, {
		                x: point.x + (dx * cos - dy * sin),
		                y: point.y + (dx * sin + dy * cos)
		            });

		            Body.rotate(body, rotation);
		        }

		        return composite;
		    };

		    /**
		     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
		     * @method scale
		     * @param {composite} composite
		     * @param {number} scaleX
		     * @param {number} scaleY
		     * @param {vector} point
		     * @param {bool} [recursive=true]
		     */
		    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
		        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

		        for (var i = 0; i < bodies.length; i++) {
		            var body = bodies[i],
		                dx = body.position.x - point.x,
		                dy = body.position.y - point.y;
		                
		            Body.setPosition(body, {
		                x: point.x + dx * scaleX,
		                y: point.y + dy * scaleY
		            });

		            Body.scale(body, scaleX, scaleY);
		        }

		        return composite;
		    };

		    /**
		     * Returns the union of the bounds of all of the composite's bodies.
		     * @method bounds
		     * @param {composite} composite The composite.
		     * @returns {bounds} The composite bounds.
		     */
		    Composite.bounds = function(composite) {
		        var bodies = Composite.allBodies(composite),
		            vertices = [];

		        for (var i = 0; i < bodies.length; i += 1) {
		            var body = bodies[i];
		            vertices.push(body.bounds.min, body.bounds.max);
		        }

		        return Bounds.create(vertices);
		    };

		    /*
		    *
		    *  Events Documentation
		    *
		    */

		    /**
		    * Fired when a call to `Composite.add` is made, before objects have been added.
		    *
		    * @event beforeAdd
		    * @param {} event An event object
		    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired when a call to `Composite.add` is made, after objects have been added.
		    *
		    * @event afterAdd
		    * @param {} event An event object
		    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired when a call to `Composite.remove` is made, before objects have been removed.
		    *
		    * @event beforeRemove
		    * @param {} event An event object
		    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired when a call to `Composite.remove` is made, after objects have been removed.
		    *
		    * @event afterRemove
		    * @param {} event An event object
		    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
		     *
		     * @property id
		     * @type number
		     */

		    /**
		     * A `String` denoting the type of object.
		     *
		     * @property type
		     * @type string
		     * @default "composite"
		     * @readOnly
		     */

		    /**
		     * An arbitrary `String` name to help the user identify and manage composites.
		     *
		     * @property label
		     * @type string
		     * @default "Composite"
		     */

		    /**
		     * A flag that specifies whether the composite has been modified during the current step.
		     * This is automatically managed when bodies, constraints or composites are added or removed.
		     *
		     * @property isModified
		     * @type boolean
		     * @default false
		     */

		    /**
		     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
		     *
		     * @property parent
		     * @type composite
		     * @default null
		     */

		    /**
		     * An array of `Body` that are _direct_ children of this composite.
		     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
		     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
		     *
		     * @property bodies
		     * @type body[]
		     * @default []
		     */

		    /**
		     * An array of `Constraint` that are _direct_ children of this composite.
		     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
		     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
		     *
		     * @property constraints
		     * @type constraint[]
		     * @default []
		     */

		    /**
		     * An array of `Composite` that are _direct_ children of this composite.
		     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
		     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
		     *
		     * @property composites
		     * @type composite[]
		     * @default []
		     */

		    /**
		     * An object reserved for storing plugin-specific properties.
		     *
		     * @property plugin
		     * @type {}
		     */

		    /**
		     * An object used for storing cached results for performance reasons.
		     * This is used internally only and is automatically managed.
		     *
		     * @private
		     * @property cache
		     * @type {}
		     */

		})();


		/***/ }),
		/* 7 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
		*
		* @class Sleeping
		*/

		var Sleeping = {};

		module.exports = Sleeping;

		var Body = __webpack_require__(4);
		var Events = __webpack_require__(5);
		var Common = __webpack_require__(0);

		(function() {

		    Sleeping._motionWakeThreshold = 0.18;
		    Sleeping._motionSleepThreshold = 0.08;
		    Sleeping._minBias = 0.9;

		    /**
		     * Puts bodies to sleep or wakes them up depending on their motion.
		     * @method update
		     * @param {body[]} bodies
		     * @param {number} delta
		     */
		    Sleeping.update = function(bodies, delta) {
		        var timeScale = delta / Common._baseDelta,
		            motionSleepThreshold = Sleeping._motionSleepThreshold;
		        
		        // update bodies sleeping status
		        for (var i = 0; i < bodies.length; i++) {
		            var body = bodies[i],
		                speed = Body.getSpeed(body),
		                angularSpeed = Body.getAngularSpeed(body),
		                motion = speed * speed + angularSpeed * angularSpeed;

		            // wake up bodies if they have a force applied
		            if (body.force.x !== 0 || body.force.y !== 0) {
		                Sleeping.set(body, false);
		                continue;
		            }

		            var minMotion = Math.min(body.motion, motion),
		                maxMotion = Math.max(body.motion, motion);
		        
		            // biased average motion estimation between frames
		            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;

		            if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
		                body.sleepCounter += 1;
		                
		                if (body.sleepCounter >= body.sleepThreshold / timeScale) {
		                    Sleeping.set(body, true);
		                }
		            } else if (body.sleepCounter > 0) {
		                body.sleepCounter -= 1;
		            }
		        }
		    };

		    /**
		     * Given a set of colliding pairs, wakes the sleeping bodies involved.
		     * @method afterCollisions
		     * @param {pair[]} pairs
		     */
		    Sleeping.afterCollisions = function(pairs) {
		        var motionSleepThreshold = Sleeping._motionSleepThreshold;

		        // wake up bodies involved in collisions
		        for (var i = 0; i < pairs.length; i++) {
		            var pair = pairs[i];
		            
		            // don't wake inactive pairs
		            if (!pair.isActive)
		                continue;

		            var collision = pair.collision,
		                bodyA = collision.bodyA.parent, 
		                bodyB = collision.bodyB.parent;
		        
		            // don't wake if at least one body is static
		            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
		                continue;
		        
		            if (bodyA.isSleeping || bodyB.isSleeping) {
		                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
		                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

		                if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
		                    Sleeping.set(sleepingBody, false);
		                }
		            }
		        }
		    };
		  
		    /**
		     * Set a body as sleeping or awake.
		     * @method set
		     * @param {body} body
		     * @param {boolean} isSleeping
		     */
		    Sleeping.set = function(body, isSleeping) {
		        var wasSleeping = body.isSleeping;

		        if (isSleeping) {
		            body.isSleeping = true;
		            body.sleepCounter = body.sleepThreshold;

		            body.positionImpulse.x = 0;
		            body.positionImpulse.y = 0;

		            body.positionPrev.x = body.position.x;
		            body.positionPrev.y = body.position.y;

		            body.anglePrev = body.angle;
		            body.speed = 0;
		            body.angularSpeed = 0;
		            body.motion = 0;

		            if (!wasSleeping) {
		                Events.trigger(body, 'sleepStart');
		            }
		        } else {
		            body.isSleeping = false;
		            body.sleepCounter = 0;

		            if (wasSleeping) {
		                Events.trigger(body, 'sleepEnd');
		            }
		        }
		    };

		})();


		/***/ }),
		/* 8 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
		*
		* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
		*
		* See `Matter.Engine` for collision events.
		*
		* @class Collision
		*/

		var Collision = {};

		module.exports = Collision;

		var Vertices = __webpack_require__(3);
		var Pair = __webpack_require__(9);

		(function() {
		    var _supports = [];

		    var _overlapAB = {
		        overlap: 0,
		        axis: null
		    };

		    var _overlapBA = {
		        overlap: 0,
		        axis: null
		    };

		    /**
		     * Creates a new collision record.
		     * @method create
		     * @param {body} bodyA The first body part represented by the collision record
		     * @param {body} bodyB The second body part represented by the collision record
		     * @return {collision} A new collision record
		     */
		    Collision.create = function(bodyA, bodyB) {
		        return { 
		            pair: null,
		            collided: false,
		            bodyA: bodyA,
		            bodyB: bodyB,
		            parentA: bodyA.parent,
		            parentB: bodyB.parent,
		            depth: 0,
		            normal: { x: 0, y: 0 },
		            tangent: { x: 0, y: 0 },
		            penetration: { x: 0, y: 0 },
		            supports: [null, null],
		            supportCount: 0
		        };
		    };

		    /**
		     * Detect collision between two bodies.
		     * @method collides
		     * @param {body} bodyA
		     * @param {body} bodyB
		     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
		     * @return {collision|null} A collision record if detected, otherwise null
		     */
		    Collision.collides = function(bodyA, bodyB, pairs) {
		        Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);

		        if (_overlapAB.overlap <= 0) {
		            return null;
		        }

		        Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);

		        if (_overlapBA.overlap <= 0) {
		            return null;
		        }

		        // reuse collision records for gc efficiency
		        var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)],
		            collision;

		        if (!pair) {
		            collision = Collision.create(bodyA, bodyB);
		            collision.collided = true;
		            collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
		            collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
		            collision.parentA = collision.bodyA.parent;
		            collision.parentB = collision.bodyB.parent;
		        } else {
		            collision = pair.collision;
		        }

		        bodyA = collision.bodyA;
		        bodyB = collision.bodyB;

		        var minOverlap;

		        if (_overlapAB.overlap < _overlapBA.overlap) {
		            minOverlap = _overlapAB;
		        } else {
		            minOverlap = _overlapBA;
		        }

		        var normal = collision.normal,
		            tangent = collision.tangent,
		            penetration = collision.penetration,
		            supports = collision.supports,
		            depth = minOverlap.overlap,
		            minAxis = minOverlap.axis,
		            normalX = minAxis.x,
		            normalY = minAxis.y,
		            deltaX = bodyB.position.x - bodyA.position.x,
		            deltaY = bodyB.position.y - bodyA.position.y;

		        // ensure normal is facing away from bodyA
		        if (normalX * deltaX + normalY * deltaY >= 0) {
		            normalX = -normalX;
		            normalY = -normalY;
		        }

		        normal.x = normalX;
		        normal.y = normalY;
		        
		        tangent.x = -normalY;
		        tangent.y = normalX;

		        penetration.x = normalX * depth;
		        penetration.y = normalY * depth;

		        collision.depth = depth;

		        // find support points, there is always either exactly one or two
		        var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1),
		            supportCount = 0;

		        // find the supports from bodyB that are inside bodyA
		        if (Vertices.contains(bodyA.vertices, supportsB[0])) {
		            supports[supportCount++] = supportsB[0];
		        }

		        if (Vertices.contains(bodyA.vertices, supportsB[1])) {
		            supports[supportCount++] = supportsB[1];
		        }

		        // find the supports from bodyA that are inside bodyB
		        if (supportCount < 2) {
		            var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);

		            if (Vertices.contains(bodyB.vertices, supportsA[0])) {
		                supports[supportCount++] = supportsA[0];
		            }

		            if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
		                supports[supportCount++] = supportsA[1];
		            }
		        }

		        // account for the edge case of overlapping but no vertex containment
		        if (supportCount === 0) {
		            supports[supportCount++] = supportsB[0];
		        }

		        // update support count
		        collision.supportCount = supportCount;

		        return collision;
		    };

		    /**
		     * Find the overlap between two sets of vertices.
		     * @method _overlapAxes
		     * @private
		     * @param {object} result
		     * @param {vertices} verticesA
		     * @param {vertices} verticesB
		     * @param {axes} axes
		     */
		    Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
		        var verticesALength = verticesA.length,
		            verticesBLength = verticesB.length,
		            verticesAX = verticesA[0].x,
		            verticesAY = verticesA[0].y,
		            verticesBX = verticesB[0].x,
		            verticesBY = verticesB[0].y,
		            axesLength = axes.length,
		            overlapMin = Number.MAX_VALUE,
		            overlapAxisNumber = 0,
		            overlap,
		            overlapAB,
		            overlapBA,
		            dot,
		            i,
		            j;

		        for (i = 0; i < axesLength; i++) {
		            var axis = axes[i],
		                axisX = axis.x,
		                axisY = axis.y,
		                minA = verticesAX * axisX + verticesAY * axisY,
		                minB = verticesBX * axisX + verticesBY * axisY,
		                maxA = minA,
		                maxB = minB;
		            
		            for (j = 1; j < verticesALength; j += 1) {
		                dot = verticesA[j].x * axisX + verticesA[j].y * axisY;

		                if (dot > maxA) { 
		                    maxA = dot;
		                } else if (dot < minA) { 
		                    minA = dot;
		                }
		            }

		            for (j = 1; j < verticesBLength; j += 1) {
		                dot = verticesB[j].x * axisX + verticesB[j].y * axisY;

		                if (dot > maxB) { 
		                    maxB = dot;
		                } else if (dot < minB) { 
		                    minB = dot;
		                }
		            }

		            overlapAB = maxA - minB;
		            overlapBA = maxB - minA;
		            overlap = overlapAB < overlapBA ? overlapAB : overlapBA;

		            if (overlap < overlapMin) {
		                overlapMin = overlap;
		                overlapAxisNumber = i;

		                if (overlap <= 0) {
		                    // can not be intersecting
		                    break;
		                }
		            } 
		        }

		        result.axis = axes[overlapAxisNumber];
		        result.overlap = overlapMin;
		    };

		    /**
		     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
		     * @method _findSupports
		     * @private
		     * @param {body} bodyA
		     * @param {body} bodyB
		     * @param {vector} normal
		     * @param {number} direction
		     * @return [vector]
		     */
		    Collision._findSupports = function(bodyA, bodyB, normal, direction) {
		        var vertices = bodyB.vertices,
		            verticesLength = vertices.length,
		            bodyAPositionX = bodyA.position.x,
		            bodyAPositionY = bodyA.position.y,
		            normalX = normal.x * direction,
		            normalY = normal.y * direction,
		            vertexA = vertices[0],
		            vertexB = vertexA,
		            nearestDistance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y),
		            vertexC,
		            distance,
		            j;

		        // find deepest vertex relative to the axis
		        for (j = 1; j < verticesLength; j += 1) {
		            vertexB = vertices[j];
		            distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);

		            // convex hill-climbing
		            if (distance < nearestDistance) {
		                nearestDistance = distance;
		                vertexA = vertexB;
		            }
		        }

		        // measure next vertex
		        vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
		        nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);

		        // compare with previous vertex
		        vertexB = vertices[(vertexA.index + 1) % verticesLength];
		        if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
		            _supports[0] = vertexA;
		            _supports[1] = vertexB;

		            return _supports;
		        }

		        _supports[0] = vertexA;
		        _supports[1] = vertexC;

		        return _supports;
		    };

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * A reference to the pair using this collision record, if there is one.
		     *
		     * @property pair
		     * @type {pair|null}
		     * @default null
		     */

		    /**
		     * A flag that indicates if the bodies were colliding when the collision was last updated.
		     * 
		     * @property collided
		     * @type boolean
		     * @default false
		     */

		    /**
		     * The first body part represented by the collision (see also `collision.parentA`).
		     * 
		     * @property bodyA
		     * @type body
		     */

		    /**
		     * The second body part represented by the collision (see also `collision.parentB`).
		     * 
		     * @property bodyB
		     * @type body
		     */

		    /**
		     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
		     * 
		     * @property parentA
		     * @type body
		     */

		    /**
		     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
		     * 
		     * @property parentB
		     * @type body
		     */

		    /**
		     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
		     *
		     * @readOnly
		     * @property depth
		     * @type number
		     * @default 0
		     */

		    /**
		     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
		     *
		     * @property normal
		     * @type vector
		     * @default { x: 0, y: 0 }
		     */

		    /**
		     * A normalised `Vector` that is the tangent direction to the collision normal.
		     *
		     * @property tangent
		     * @type vector
		     * @default { x: 0, y: 0 }
		     */

		    /**
		     * A `Vector` that represents the direction and depth of the collision.
		     *
		     * @property penetration
		     * @type vector
		     * @default { x: 0, y: 0 }
		     */

		    /**
		     * An array of body vertices that represent the support points in the collision.
		     * 
		     * _Note:_ Only the first `collision.supportCount` items of `collision.supports` are active.
		     * Therefore use `collision.supportCount` instead of `collision.supports.length` when iterating the active supports.
		     * 
		     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
		     *
		     * @property supports
		     * @type vector[]
		     * @default []
		     */

		    /**
		     * The number of active supports for this collision found in `collision.supports`.
		     * 
		     * _Note:_ Only the first `collision.supportCount` items of `collision.supports` are active.
		     * Therefore use `collision.supportCount` instead of `collision.supports.length` when iterating the active supports.
		     *
		     * @property supportCount
		     * @type number
		     * @default 0
		     */

		})();


		/***/ }),
		/* 9 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
		*
		* @class Pair
		*/

		var Pair = {};

		module.exports = Pair;

		var Contact = __webpack_require__(16);

		(function() {
		    
		    /**
		     * Creates a pair.
		     * @method create
		     * @param {collision} collision
		     * @param {number} timestamp
		     * @return {pair} A new pair
		     */
		    Pair.create = function(collision, timestamp) {
		        var bodyA = collision.bodyA,
		            bodyB = collision.bodyB;

		        var pair = {
		            id: Pair.id(bodyA, bodyB),
		            bodyA: bodyA,
		            bodyB: bodyB,
		            collision: collision,
		            contacts: [Contact.create(), Contact.create()],
		            contactCount: 0,
		            separation: 0,
		            isActive: true,
		            isSensor: bodyA.isSensor || bodyB.isSensor,
		            timeCreated: timestamp,
		            timeUpdated: timestamp,
		            inverseMass: 0,
		            friction: 0,
		            frictionStatic: 0,
		            restitution: 0,
		            slop: 0
		        };

		        Pair.update(pair, collision, timestamp);

		        return pair;
		    };

		    /**
		     * Updates a pair given a collision.
		     * @method update
		     * @param {pair} pair
		     * @param {collision} collision
		     * @param {number} timestamp
		     */
		    Pair.update = function(pair, collision, timestamp) {
		        var supports = collision.supports,
		            supportCount = collision.supportCount,
		            contacts = pair.contacts,
		            parentA = collision.parentA,
		            parentB = collision.parentB;
		        
		        pair.isActive = true;
		        pair.timeUpdated = timestamp;
		        pair.collision = collision;
		        pair.separation = collision.depth;
		        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
		        pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
		        pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
		        pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
		        pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;

		        pair.contactCount = supportCount;
		        collision.pair = pair;

		        var supportA = supports[0],
		            contactA = contacts[0],
		            supportB = supports[1],
		            contactB = contacts[1];

		        // match contacts to supports
		        if (contactB.vertex === supportA || contactA.vertex === supportB) {
		            contacts[1] = contactA;
		            contacts[0] = contactA = contactB;
		            contactB = contacts[1];
		        }

		        // update contacts
		        contactA.vertex = supportA;
		        contactB.vertex = supportB;
		    };
		    
		    /**
		     * Set a pair as active or inactive.
		     * @method setActive
		     * @param {pair} pair
		     * @param {bool} isActive
		     * @param {number} timestamp
		     */
		    Pair.setActive = function(pair, isActive, timestamp) {
		        if (isActive) {
		            pair.isActive = true;
		            pair.timeUpdated = timestamp;
		        } else {
		            pair.isActive = false;
		            pair.contactCount = 0;
		        }
		    };

		    /**
		     * Get the id for the given pair.
		     * @method id
		     * @param {body} bodyA
		     * @param {body} bodyB
		     * @return {string} Unique pairId
		     */
		    Pair.id = function(bodyA, bodyB) {
		        return bodyA.id < bodyB.id ? bodyA.id.toString(36) + ':' + bodyB.id.toString(36) 
		            : bodyB.id.toString(36) + ':' + bodyA.id.toString(36);
		    };

		})();


		/***/ }),
		/* 10 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
		* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
		* The stiffness of constraints can be modified to create springs or elastic.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Constraint
		*/

		var Constraint = {};

		module.exports = Constraint;

		var Vertices = __webpack_require__(3);
		var Vector = __webpack_require__(2);
		var Sleeping = __webpack_require__(7);
		var Bounds = __webpack_require__(1);
		var Axes = __webpack_require__(11);
		var Common = __webpack_require__(0);

		(function() {

		    Constraint._warming = 0.4;
		    Constraint._torqueDampen = 1;
		    Constraint._minLength = 0.000001;

		    /**
		     * Creates a new constraint.
		     * All properties have default values, and many are pre-calculated automatically based on other properties.
		     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
		     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
		     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
		     * See the properties section below for detailed information on what you can pass via the `options` object.
		     * @method create
		     * @param {} options
		     * @return {constraint} constraint
		     */
		    Constraint.create = function(options) {
		        var constraint = options;

		        // if bodies defined but no points, use body centre
		        if (constraint.bodyA && !constraint.pointA)
		            constraint.pointA = { x: 0, y: 0 };
		        if (constraint.bodyB && !constraint.pointB)
		            constraint.pointB = { x: 0, y: 0 };

		        // calculate static length using initial world space points
		        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
		            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
		            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
		    
		        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

		        // option defaults
		        constraint.id = constraint.id || Common.nextId();
		        constraint.label = constraint.label || 'Constraint';
		        constraint.type = 'constraint';
		        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
		        constraint.damping = constraint.damping || 0;
		        constraint.angularStiffness = constraint.angularStiffness || 0;
		        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
		        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
		        constraint.plugin = {};

		        // render
		        var render = {
		            visible: true,
		            lineWidth: 2,
		            strokeStyle: '#ffffff',
		            type: 'line',
		            anchors: true
		        };

		        if (constraint.length === 0 && constraint.stiffness > 0.1) {
		            render.type = 'pin';
		            render.anchors = false;
		        } else if (constraint.stiffness < 0.9) {
		            render.type = 'spring';
		        }

		        constraint.render = Common.extend(render, constraint.render);

		        return constraint;
		    };

		    /**
		     * Prepares for solving by constraint warming.
		     * @private
		     * @method preSolveAll
		     * @param {body[]} bodies
		     */
		    Constraint.preSolveAll = function(bodies) {
		        for (var i = 0; i < bodies.length; i += 1) {
		            var body = bodies[i],
		                impulse = body.constraintImpulse;

		            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
		                continue;
		            }

		            body.position.x += impulse.x;
		            body.position.y += impulse.y;
		            body.angle += impulse.angle;
		        }
		    };

		    /**
		     * Solves all constraints in a list of collisions.
		     * @private
		     * @method solveAll
		     * @param {constraint[]} constraints
		     * @param {number} delta
		     */
		    Constraint.solveAll = function(constraints, delta) {
		        var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);

		        // Solve fixed constraints first.
		        for (var i = 0; i < constraints.length; i += 1) {
		            var constraint = constraints[i],
		                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
		                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

		            if (fixedA || fixedB) {
		                Constraint.solve(constraints[i], timeScale);
		            }
		        }

		        // Solve free constraints last.
		        for (i = 0; i < constraints.length; i += 1) {
		            constraint = constraints[i];
		            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
		            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

		            if (!fixedA && !fixedB) {
		                Constraint.solve(constraints[i], timeScale);
		            }
		        }
		    };

		    /**
		     * Solves a distance constraint with Gauss-Siedel method.
		     * @private
		     * @method solve
		     * @param {constraint} constraint
		     * @param {number} timeScale
		     */
		    Constraint.solve = function(constraint, timeScale) {
		        var bodyA = constraint.bodyA,
		            bodyB = constraint.bodyB,
		            pointA = constraint.pointA,
		            pointB = constraint.pointB;

		        if (!bodyA && !bodyB)
		            return;

		        // update reference angle
		        if (bodyA && !bodyA.isStatic) {
		            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
		            constraint.angleA = bodyA.angle;
		        }
		        
		        // update reference angle
		        if (bodyB && !bodyB.isStatic) {
		            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
		            constraint.angleB = bodyB.angle;
		        }

		        var pointAWorld = pointA,
		            pointBWorld = pointB;

		        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
		        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

		        if (!pointAWorld || !pointBWorld)
		            return;

		        var delta = Vector.sub(pointAWorld, pointBWorld),
		            currentLength = Vector.magnitude(delta);

		        // prevent singularity
		        if (currentLength < Constraint._minLength) {
		            currentLength = Constraint._minLength;
		        }

		        // solve distance constraint with Gauss-Siedel method
		        var difference = (currentLength - constraint.length) / currentLength,
		            isRigid = constraint.stiffness >= 1 || constraint.length === 0,
		            stiffness = isRigid ? constraint.stiffness * timeScale 
		                : constraint.stiffness * timeScale * timeScale,
		            damping = constraint.damping * timeScale,
		            force = Vector.mult(delta, difference * stiffness),
		            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
		            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
		            resistanceTotal = massTotal + inertiaTotal,
		            torque,
		            share,
		            normal,
		            normalVelocity,
		            relativeVelocity;
		    
		        if (damping > 0) {
		            var zero = Vector.create();
		            normal = Vector.div(delta, currentLength);

		            relativeVelocity = Vector.sub(
		                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
		                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
		            );

		            normalVelocity = Vector.dot(normal, relativeVelocity);
		        }

		        if (bodyA && !bodyA.isStatic) {
		            share = bodyA.inverseMass / massTotal;

		            // keep track of applied impulses for post solving
		            bodyA.constraintImpulse.x -= force.x * share;
		            bodyA.constraintImpulse.y -= force.y * share;

		            // apply forces
		            bodyA.position.x -= force.x * share;
		            bodyA.position.y -= force.y * share;

		            // apply damping
		            if (damping > 0) {
		                bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
		                bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
		            }

		            // apply torque
		            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
		            bodyA.constraintImpulse.angle -= torque;
		            bodyA.angle -= torque;
		        }

		        if (bodyB && !bodyB.isStatic) {
		            share = bodyB.inverseMass / massTotal;

		            // keep track of applied impulses for post solving
		            bodyB.constraintImpulse.x += force.x * share;
		            bodyB.constraintImpulse.y += force.y * share;
		            
		            // apply forces
		            bodyB.position.x += force.x * share;
		            bodyB.position.y += force.y * share;

		            // apply damping
		            if (damping > 0) {
		                bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
		                bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
		            }

		            // apply torque
		            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
		            bodyB.constraintImpulse.angle += torque;
		            bodyB.angle += torque;
		        }

		    };

		    /**
		     * Performs body updates required after solving constraints.
		     * @private
		     * @method postSolveAll
		     * @param {body[]} bodies
		     */
		    Constraint.postSolveAll = function(bodies) {
		        for (var i = 0; i < bodies.length; i++) {
		            var body = bodies[i],
		                impulse = body.constraintImpulse;

		            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
		                continue;
		            }

		            Sleeping.set(body, false);

		            // update geometry and reset
		            for (var j = 0; j < body.parts.length; j++) {
		                var part = body.parts[j];
		                
		                Vertices.translate(part.vertices, impulse);

		                if (j > 0) {
		                    part.position.x += impulse.x;
		                    part.position.y += impulse.y;
		                }

		                if (impulse.angle !== 0) {
		                    Vertices.rotate(part.vertices, impulse.angle, body.position);
		                    Axes.rotate(part.axes, impulse.angle);
		                    if (j > 0) {
		                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
		                    }
		                }

		                Bounds.update(part.bounds, part.vertices, body.velocity);
		            }

		            // dampen the cached impulse for warming next step
		            impulse.angle *= Constraint._warming;
		            impulse.x *= Constraint._warming;
		            impulse.y *= Constraint._warming;
		        }
		    };

		    /**
		     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
		     * @method pointAWorld
		     * @param {constraint} constraint
		     * @returns {vector} the world-space position
		     */
		    Constraint.pointAWorld = function(constraint) {
		        return {
		            x: (constraint.bodyA ? constraint.bodyA.position.x : 0) 
		                + (constraint.pointA ? constraint.pointA.x : 0),
		            y: (constraint.bodyA ? constraint.bodyA.position.y : 0) 
		                + (constraint.pointA ? constraint.pointA.y : 0)
		        };
		    };

		    /**
		     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
		     * @method pointBWorld
		     * @param {constraint} constraint
		     * @returns {vector} the world-space position
		     */
		    Constraint.pointBWorld = function(constraint) {
		        return {
		            x: (constraint.bodyB ? constraint.bodyB.position.x : 0) 
		                + (constraint.pointB ? constraint.pointB.x : 0),
		            y: (constraint.bodyB ? constraint.bodyB.position.y : 0) 
		                + (constraint.pointB ? constraint.pointB.y : 0)
		        };
		    };

		    /**
		     * Returns the current length of the constraint. 
		     * This is the distance between both of the constraint's end points.
		     * See `constraint.length` for the target rest length.
		     * @method currentLength
		     * @param {constraint} constraint
		     * @returns {number} the current length
		     */
		    Constraint.currentLength = function(constraint) {
		        var pointAX = (constraint.bodyA ? constraint.bodyA.position.x : 0) 
		            + (constraint.pointA ? constraint.pointA.x : 0);

		        var pointAY = (constraint.bodyA ? constraint.bodyA.position.y : 0) 
		            + (constraint.pointA ? constraint.pointA.y : 0);

		        var pointBX = (constraint.bodyB ? constraint.bodyB.position.x : 0) 
		            + (constraint.pointB ? constraint.pointB.x : 0);
		            
		        var pointBY = (constraint.bodyB ? constraint.bodyB.position.y : 0) 
		            + (constraint.pointB ? constraint.pointB.y : 0);

		        var deltaX = pointAX - pointBX;
		        var deltaY = pointAY - pointBY;

		        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		    };

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
		     *
		     * @property id
		     * @type number
		     */

		    /**
		     * A `String` denoting the type of object.
		     *
		     * @property type
		     * @type string
		     * @default "constraint"
		     * @readOnly
		     */

		    /**
		     * An arbitrary `String` name to help the user identify and manage bodies.
		     *
		     * @property label
		     * @type string
		     * @default "Constraint"
		     */

		    /**
		     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
		     *
		     * @property render
		     * @type object
		     */

		    /**
		     * A flag that indicates if the constraint should be rendered.
		     *
		     * @property render.visible
		     * @type boolean
		     * @default true
		     */

		    /**
		     * A `Number` that defines the line width to use when rendering the constraint outline.
		     * A value of `0` means no outline will be rendered.
		     *
		     * @property render.lineWidth
		     * @type number
		     * @default 2
		     */

		    /**
		     * A `String` that defines the stroke style to use when rendering the constraint outline.
		     * It is the same as when using a canvas, so it accepts CSS style property values.
		     *
		     * @property render.strokeStyle
		     * @type string
		     * @default a random colour
		     */

		    /**
		     * A `String` that defines the constraint rendering type. 
		     * The possible values are 'line', 'pin', 'spring'.
		     * An appropriate render type will be automatically chosen unless one is given in options.
		     *
		     * @property render.type
		     * @type string
		     * @default 'line'
		     */

		    /**
		     * A `Boolean` that defines if the constraint's anchor points should be rendered.
		     *
		     * @property render.anchors
		     * @type boolean
		     * @default true
		     */

		    /**
		     * The first possible `Body` that this constraint is attached to.
		     *
		     * @property bodyA
		     * @type body
		     * @default null
		     */

		    /**
		     * The second possible `Body` that this constraint is attached to.
		     *
		     * @property bodyB
		     * @type body
		     * @default null
		     */

		    /**
		     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
		     *
		     * @property pointA
		     * @type vector
		     * @default { x: 0, y: 0 }
		     */

		    /**
		     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
		     *
		     * @property pointB
		     * @type vector
		     * @default { x: 0, y: 0 }
		     */

		    /**
		     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
		     * A value of `1` means the constraint should be very stiff.
		     * A value of `0.2` means the constraint acts like a soft spring.
		     *
		     * @property stiffness
		     * @type number
		     * @default 1
		     */

		    /**
		     * A `Number` that specifies the damping of the constraint, 
		     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
		     * Damping will only be apparent when the constraint also has a very low `stiffness`.
		     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
		     * A value of `0` means the constraint will apply no damping.
		     *
		     * @property damping
		     * @type number
		     * @default 0
		     */

		    /**
		     * A `Number` that specifies the target resting length of the constraint. 
		     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
		     *
		     * @property length
		     * @type number
		     */

		    /**
		     * An object reserved for storing plugin-specific properties.
		     *
		     * @property plugin
		     * @type {}
		     */

		})();


		/***/ }),
		/* 11 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
		*
		* @class Axes
		*/

		var Axes = {};

		module.exports = Axes;

		var Vector = __webpack_require__(2);
		var Common = __webpack_require__(0);

		(function() {

		    /**
		     * Creates a new set of axes from the given vertices.
		     * @method fromVertices
		     * @param {vertices} vertices
		     * @return {axes} A new axes from the given vertices
		     */
		    Axes.fromVertices = function(vertices) {
		        var axes = {};

		        // find the unique axes, using edge normal gradients
		        for (var i = 0; i < vertices.length; i++) {
		            var j = (i + 1) % vertices.length, 
		                normal = Vector.normalise({ 
		                    x: vertices[j].y - vertices[i].y, 
		                    y: vertices[i].x - vertices[j].x
		                }),
		                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
		            
		            // limit precision
		            gradient = gradient.toFixed(3).toString();
		            axes[gradient] = normal;
		        }

		        return Common.values(axes);
		    };

		    /**
		     * Rotates a set of axes by the given angle.
		     * @method rotate
		     * @param {axes} axes
		     * @param {number} angle
		     */
		    Axes.rotate = function(axes, angle) {
		        if (angle === 0)
		            return;
		        
		        var cos = Math.cos(angle),
		            sin = Math.sin(angle);

		        for (var i = 0; i < axes.length; i++) {
		            var axis = axes[i],
		                xx;
		            xx = axis.x * cos - axis.y * sin;
		            axis.y = axis.x * sin + axis.y * cos;
		            axis.x = xx;
		        }
		    };

		})();


		/***/ }),
		/* 12 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Bodies` module contains factory methods for creating rigid body models 
		* with commonly used body configurations (such as rectangles, circles and other polygons).
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Bodies
		*/

		// TODO: true circle bodies

		var Bodies = {};

		module.exports = Bodies;

		var Vertices = __webpack_require__(3);
		var Common = __webpack_require__(0);
		var Body = __webpack_require__(4);
		var Bounds = __webpack_require__(1);
		var Vector = __webpack_require__(2);

		(function() {

		    /**
		     * Creates a new rigid body model with a rectangle hull. 
		     * The options parameter is an object that specifies any properties you wish to override the defaults.
		     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
		     * @method rectangle
		     * @param {number} x
		     * @param {number} y
		     * @param {number} width
		     * @param {number} height
		     * @param {object} [options]
		     * @return {body} A new rectangle body
		     */
		    Bodies.rectangle = function(x, y, width, height, options) {
		        options = options || {};

		        var rectangle = { 
		            label: 'Rectangle Body',
		            position: { x: x, y: y },
		            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
		        };

		        if (options.chamfer) {
		            var chamfer = options.chamfer;
		            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
		                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
		            delete options.chamfer;
		        }

		        return Body.create(Common.extend({}, rectangle, options));
		    };
		    
		    /**
		     * Creates a new rigid body model with a trapezoid hull. 
		     * The `slope` is parameterised as a fraction of `width` and must be < 1 to form a valid trapezoid. 
		     * The options parameter is an object that specifies any properties you wish to override the defaults.
		     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
		     * @method trapezoid
		     * @param {number} x
		     * @param {number} y
		     * @param {number} width
		     * @param {number} height
		     * @param {number} slope Must be a number < 1.
		     * @param {object} [options]
		     * @return {body} A new trapezoid body
		     */
		    Bodies.trapezoid = function(x, y, width, height, slope, options) {
		        options = options || {};

		        if (slope >= 1) {
		            Common.warn('Bodies.trapezoid: slope parameter must be < 1.');
		        }

		        slope *= 0.5;
		        var roof = (1 - (slope * 2)) * width;
		        
		        var x1 = width * slope,
		            x2 = x1 + roof,
		            x3 = x2 + x1,
		            verticesPath;

		        if (slope < 0.5) {
		            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
		        } else {
		            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
		        }

		        var trapezoid = { 
		            label: 'Trapezoid Body',
		            position: { x: x, y: y },
		            vertices: Vertices.fromPath(verticesPath)
		        };

		        if (options.chamfer) {
		            var chamfer = options.chamfer;
		            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
		                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
		            delete options.chamfer;
		        }

		        return Body.create(Common.extend({}, trapezoid, options));
		    };

		    /**
		     * Creates a new rigid body model with a circle hull. 
		     * The options parameter is an object that specifies any properties you wish to override the defaults.
		     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
		     * @method circle
		     * @param {number} x
		     * @param {number} y
		     * @param {number} radius
		     * @param {object} [options]
		     * @param {number} [maxSides]
		     * @return {body} A new circle body
		     */
		    Bodies.circle = function(x, y, radius, options, maxSides) {
		        options = options || {};

		        var circle = {
		            label: 'Circle Body',
		            circleRadius: radius
		        };
		        
		        // approximate circles with polygons until true circles implemented in SAT
		        maxSides = maxSides || 25;
		        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

		        // optimisation: always use even number of sides (half the number of unique axes)
		        if (sides % 2 === 1)
		            sides += 1;

		        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
		    };

		    /**
		     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
		     * The options parameter is an object that specifies any properties you wish to override the defaults.
		     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
		     * @method polygon
		     * @param {number} x
		     * @param {number} y
		     * @param {number} sides
		     * @param {number} radius
		     * @param {object} [options]
		     * @return {body} A new regular polygon body
		     */
		    Bodies.polygon = function(x, y, sides, radius, options) {
		        options = options || {};

		        if (sides < 3)
		            return Bodies.circle(x, y, radius, options);

		        var theta = 2 * Math.PI / sides,
		            path = '',
		            offset = theta * 0.5;

		        for (var i = 0; i < sides; i += 1) {
		            var angle = offset + (i * theta),
		                xx = Math.cos(angle) * radius,
		                yy = Math.sin(angle) * radius;

		            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
		        }

		        var polygon = { 
		            label: 'Polygon Body',
		            position: { x: x, y: y },
		            vertices: Vertices.fromPath(path)
		        };

		        if (options.chamfer) {
		            var chamfer = options.chamfer;
		            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
		                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
		            delete options.chamfer;
		        }

		        return Body.create(Common.extend({}, polygon, options));
		    };

		    /**
		     * Utility to create a compound body based on set(s) of vertices.
		     * 
		     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
		     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
		     * 
		     * The resulting vertices are reorientated about their centre of mass,
		     * and offset such that `body.position` corresponds to this point.
		     * 
		     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
		     * To later move the centre of mass see `Body.setCentre`.
		     * 
		     * Note that automatic conconcave decomposition results are not always optimal. 
		     * For best results, simplify the input vertices as much as possible first.
		     * By default this function applies some addtional simplification to help.
		     * 
		     * Some outputs may also require further manual processing afterwards to be robust.
		     * In particular some parts may need to be overlapped to avoid collision gaps.
		     * Thin parts and sharp points should be avoided or removed where possible.
		     *
		     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
		     * 
		     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
		     * @method fromVertices
		     * @param {number} x
		     * @param {number} y
		     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
		     * @param {object} [options] The body options.
		     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
		     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
		     * @param {number} [minimumArea=10] Threshold when removing small parts.
		     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
		     * @return {body}
		     */
		    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
		        var decomp = Common.getDecomp(),
		            canDecomp,
		            body,
		            parts,
		            isConvex,
		            isConcave,
		            vertices,
		            i,
		            j,
		            k,
		            v,
		            z;

		        // check decomp is as expected
		        canDecomp = Boolean(decomp && decomp.quickDecomp);

		        options = options || {};
		        parts = [];

		        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
		        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
		        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;
		        removeDuplicatePoints = typeof removeDuplicatePoints !== 'undefined' ? removeDuplicatePoints : 0.01;

		        // ensure vertexSets is an array of arrays
		        if (!Common.isArray(vertexSets[0])) {
		            vertexSets = [vertexSets];
		        }

		        for (v = 0; v < vertexSets.length; v += 1) {
		            vertices = vertexSets[v];
		            isConvex = Vertices.isConvex(vertices);
		            isConcave = !isConvex;

		            if (isConcave && !canDecomp) {
		                Common.warnOnce(
		                    'Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.'
		                );
		            }

		            if (isConvex || !canDecomp) {
		                if (isConvex) {
		                    vertices = Vertices.clockwiseSort(vertices);
		                } else {
		                    // fallback to convex hull when decomposition is not possible
		                    vertices = Vertices.hull(vertices);
		                }

		                parts.push({
		                    position: { x: x, y: y },
		                    vertices: vertices
		                });
		            } else {
		                // initialise a decomposition
		                var concave = vertices.map(function(vertex) {
		                    return [vertex.x, vertex.y];
		                });

		                // vertices are concave and simple, we can decompose into parts
		                decomp.makeCCW(concave);
		                if (removeCollinear !== false)
		                    decomp.removeCollinearPoints(concave, removeCollinear);
		                if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
		                    decomp.removeDuplicatePoints(concave, removeDuplicatePoints);

		                // use the quick decomposition algorithm (Bayazit)
		                var decomposed = decomp.quickDecomp(concave);

		                // for each decomposed chunk
		                for (i = 0; i < decomposed.length; i++) {
		                    var chunk = decomposed[i];

		                    // convert vertices into the correct structure
		                    var chunkVertices = chunk.map(function(vertices) {
		                        return {
		                            x: vertices[0],
		                            y: vertices[1]
		                        };
		                    });

		                    // skip small chunks
		                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
		                        continue;

		                    // create a compound part
		                    parts.push({
		                        position: Vertices.centre(chunkVertices),
		                        vertices: chunkVertices
		                    });
		                }
		            }
		        }

		        // create body parts
		        for (i = 0; i < parts.length; i++) {
		            parts[i] = Body.create(Common.extend(parts[i], options));
		        }

		        // flag internal edges (coincident part edges)
		        if (flagInternal) {
		            var coincident_max_dist = 5;

		            for (i = 0; i < parts.length; i++) {
		                var partA = parts[i];

		                for (j = i + 1; j < parts.length; j++) {
		                    var partB = parts[j];

		                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
		                        var pav = partA.vertices,
		                            pbv = partB.vertices;

		                        // iterate vertices of both parts
		                        for (k = 0; k < partA.vertices.length; k++) {
		                            for (z = 0; z < partB.vertices.length; z++) {
		                                // find distances between the vertices
		                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
		                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

		                                // if both vertices are very close, consider the edge concident (internal)
		                                if (da < coincident_max_dist && db < coincident_max_dist) {
		                                    pav[k].isInternal = true;
		                                    pbv[z].isInternal = true;
		                                }
		                            }
		                        }

		                    }
		                }
		            }
		        }

		        if (parts.length > 1) {
		            // create the parent body to be returned, that contains generated compound parts
		            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));

		            // offset such that body.position is at the centre off mass
		            Body.setPosition(body, { x: x, y: y });

		            return body;
		        } else {
		            return parts[0];
		        }
		    };

		})();


		/***/ }),
		/* 13 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
		*
		* @class Detector
		*/

		var Detector = {};

		module.exports = Detector;

		var Common = __webpack_require__(0);
		var Collision = __webpack_require__(8);

		(function() {

		    /**
		     * Creates a new collision detector.
		     * @method create
		     * @param {} options
		     * @return {detector} A new collision detector
		     */
		    Detector.create = function(options) {
		        var defaults = {
		            bodies: [],
		            collisions: [],
		            pairs: null
		        };

		        return Common.extend(defaults, options);
		    };

		    /**
		     * Sets the list of bodies in the detector.
		     * @method setBodies
		     * @param {detector} detector
		     * @param {body[]} bodies
		     */
		    Detector.setBodies = function(detector, bodies) {
		        detector.bodies = bodies.slice(0);
		    };

		    /**
		     * Clears the detector including its list of bodies.
		     * @method clear
		     * @param {detector} detector
		     */
		    Detector.clear = function(detector) {
		        detector.bodies = [];
		        detector.collisions = [];
		    };

		    /**
		     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
		     * 
		     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
		     * If a specific ordering is required then apply a sort to the resulting array.
		     * @method collisions
		     * @param {detector} detector
		     * @return {collision[]} collisions
		     */
		    Detector.collisions = function(detector) {
		        var pairs = detector.pairs,
		            bodies = detector.bodies,
		            bodiesLength = bodies.length,
		            canCollide = Detector.canCollide,
		            collides = Collision.collides,
		            collisions = detector.collisions,
		            collisionIndex = 0,
		            i,
		            j;

		        bodies.sort(Detector._compareBoundsX);

		        for (i = 0; i < bodiesLength; i++) {
		            var bodyA = bodies[i],
		                boundsA = bodyA.bounds,
		                boundXMax = bodyA.bounds.max.x,
		                boundYMax = bodyA.bounds.max.y,
		                boundYMin = bodyA.bounds.min.y,
		                bodyAStatic = bodyA.isStatic || bodyA.isSleeping,
		                partsALength = bodyA.parts.length,
		                partsASingle = partsALength === 1;

		            for (j = i + 1; j < bodiesLength; j++) {
		                var bodyB = bodies[j],
		                    boundsB = bodyB.bounds;

		                if (boundsB.min.x > boundXMax) {
		                    break;
		                }

		                if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
		                    continue;
		                }

		                if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
		                    continue;
		                }

		                if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
		                    continue;
		                }

		                var partsBLength = bodyB.parts.length;

		                if (partsASingle && partsBLength === 1) {
		                    var collision = collides(bodyA, bodyB, pairs);

		                    if (collision) {
		                        collisions[collisionIndex++] = collision;
		                    }
		                } else {
		                    var partsAStart = partsALength > 1 ? 1 : 0,
		                        partsBStart = partsBLength > 1 ? 1 : 0;
		                    
		                    for (var k = partsAStart; k < partsALength; k++) {
		                        var partA = bodyA.parts[k],
		                            boundsA = partA.bounds;

		                        for (var z = partsBStart; z < partsBLength; z++) {
		                            var partB = bodyB.parts[z],
		                                boundsB = partB.bounds;

		                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x
		                                || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
		                                continue;
		                            }

		                            var collision = collides(partA, partB, pairs);

		                            if (collision) {
		                                collisions[collisionIndex++] = collision;
		                            }
		                        }
		                    }
		                }
		            }
		        }

		        if (collisions.length !== collisionIndex) {
		            collisions.length = collisionIndex;
		        }

		        return collisions;
		    };

		    /**
		     * Returns `true` if both supplied collision filters will allow a collision to occur.
		     * See `body.collisionFilter` for more information.
		     * @method canCollide
		     * @param {} filterA
		     * @param {} filterB
		     * @return {bool} `true` if collision can occur
		     */
		    Detector.canCollide = function(filterA, filterB) {
		        if (filterA.group === filterB.group && filterA.group !== 0)
		            return filterA.group > 0;

		        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
		    };

		    /**
		     * The comparison function used in the broadphase algorithm.
		     * Returns the signed delta of the bodies bounds on the x-axis.
		     * @private
		     * @method _sortCompare
		     * @param {body} bodyA
		     * @param {body} bodyB
		     * @return {number} The signed delta used for sorting
		     */
		    Detector._compareBoundsX = function(bodyA, bodyB) {
		        return bodyA.bounds.min.x - bodyB.bounds.min.x;
		    };

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * The array of `Matter.Body` between which the detector finds collisions.
		     * 
		     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
		     * @property bodies
		     * @type body[]
		     * @default []
		     */

		    /**
		     * The array of `Matter.Collision` found in the last call to `Detector.collisions` on this detector.
		     * @property collisions
		     * @type collision[]
		     * @default []
		     */

		    /**
		     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
		     * @property pairs
		     * @type {pairs|null}
		     * @default null
		     */

		})();


		/***/ }),
		/* 14 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
		*
		* @class Mouse
		*/

		var Mouse = {};

		module.exports = Mouse;

		var Common = __webpack_require__(0);

		(function() {

		    /**
		     * Creates a mouse input.
		     * @method create
		     * @param {HTMLElement} element
		     * @return {mouse} A new mouse
		     */
		    Mouse.create = function(element) {
		        var mouse = {};

		        if (!element) {
		            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
		        }
		        
		        mouse.element = element || document.body;
		        mouse.absolute = { x: 0, y: 0 };
		        mouse.position = { x: 0, y: 0 };
		        mouse.mousedownPosition = { x: 0, y: 0 };
		        mouse.mouseupPosition = { x: 0, y: 0 };
		        mouse.offset = { x: 0, y: 0 };
		        mouse.scale = { x: 1, y: 1 };
		        mouse.wheelDelta = 0;
		        mouse.button = -1;
		        mouse.pixelRatio = parseInt(mouse.element.getAttribute('data-pixel-ratio'), 10) || 1;

		        mouse.sourceEvents = {
		            mousemove: null,
		            mousedown: null,
		            mouseup: null,
		            mousewheel: null
		        };
		        
		        mouse.mousemove = function(event) { 
		            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
		                touches = event.changedTouches;

		            if (touches) {
		                mouse.button = 0;
		                event.preventDefault();
		            }

		            mouse.absolute.x = position.x;
		            mouse.absolute.y = position.y;
		            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
		            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
		            mouse.sourceEvents.mousemove = event;
		        };
		        
		        mouse.mousedown = function(event) {
		            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
		                touches = event.changedTouches;

		            if (touches) {
		                mouse.button = 0;
		                event.preventDefault();
		            } else {
		                mouse.button = event.button;
		            }

		            mouse.absolute.x = position.x;
		            mouse.absolute.y = position.y;
		            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
		            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
		            mouse.mousedownPosition.x = mouse.position.x;
		            mouse.mousedownPosition.y = mouse.position.y;
		            mouse.sourceEvents.mousedown = event;
		        };
		        
		        mouse.mouseup = function(event) {
		            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
		                touches = event.changedTouches;

		            if (touches) {
		                event.preventDefault();
		            }
		            
		            mouse.button = -1;
		            mouse.absolute.x = position.x;
		            mouse.absolute.y = position.y;
		            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
		            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
		            mouse.mouseupPosition.x = mouse.position.x;
		            mouse.mouseupPosition.y = mouse.position.y;
		            mouse.sourceEvents.mouseup = event;
		        };

		        mouse.mousewheel = function(event) {
		            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
		            event.preventDefault();
		            mouse.sourceEvents.mousewheel = event;
		        };

		        Mouse.setElement(mouse, mouse.element);

		        return mouse;
		    };

		    /**
		     * Sets the element the mouse is bound to (and relative to).
		     * @method setElement
		     * @param {mouse} mouse
		     * @param {HTMLElement} element
		     */
		    Mouse.setElement = function(mouse, element) {
		        mouse.element = element;

		        element.addEventListener('mousemove', mouse.mousemove, { passive: true });
		        element.addEventListener('mousedown', mouse.mousedown, { passive: true });
		        element.addEventListener('mouseup', mouse.mouseup, { passive: true });
		        
		        element.addEventListener('wheel', mouse.mousewheel, { passive: false });
		        
		        element.addEventListener('touchmove', mouse.mousemove, { passive: false });
		        element.addEventListener('touchstart', mouse.mousedown, { passive: false });
		        element.addEventListener('touchend', mouse.mouseup, { passive: false });
		    };

		    /**
		     * Clears all captured source events.
		     * @method clearSourceEvents
		     * @param {mouse} mouse
		     */
		    Mouse.clearSourceEvents = function(mouse) {
		        mouse.sourceEvents.mousemove = null;
		        mouse.sourceEvents.mousedown = null;
		        mouse.sourceEvents.mouseup = null;
		        mouse.sourceEvents.mousewheel = null;
		        mouse.wheelDelta = 0;
		    };

		    /**
		     * Sets the mouse position offset.
		     * @method setOffset
		     * @param {mouse} mouse
		     * @param {vector} offset
		     */
		    Mouse.setOffset = function(mouse, offset) {
		        mouse.offset.x = offset.x;
		        mouse.offset.y = offset.y;
		        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
		        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
		    };

		    /**
		     * Sets the mouse position scale.
		     * @method setScale
		     * @param {mouse} mouse
		     * @param {vector} scale
		     */
		    Mouse.setScale = function(mouse, scale) {
		        mouse.scale.x = scale.x;
		        mouse.scale.y = scale.y;
		        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
		        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
		    };
		    
		    /**
		     * Gets the mouse position relative to an element given a screen pixel ratio.
		     * @method _getRelativeMousePosition
		     * @private
		     * @param {} event
		     * @param {} element
		     * @param {number} pixelRatio
		     * @return {}
		     */
		    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
		        var elementBounds = element.getBoundingClientRect(),
		            rootNode = (document.documentElement || document.body.parentNode || document.body),
		            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
		            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
		            touches = event.changedTouches,
		            x, y;
		        
		        if (touches) {
		            x = touches[0].pageX - elementBounds.left - scrollX;
		            y = touches[0].pageY - elementBounds.top - scrollY;
		        } else {
		            x = event.pageX - elementBounds.left - scrollX;
		            y = event.pageY - elementBounds.top - scrollY;
		        }

		        return { 
		            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
		            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
		        };
		    };

		})();


		/***/ }),
		/* 15 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
		*
		* @class Plugin
		*/

		var Plugin = {};

		module.exports = Plugin;

		var Common = __webpack_require__(0);

		(function() {

		    Plugin._registry = {};

		    /**
		     * Registers a plugin object so it can be resolved later by name.
		     * @method register
		     * @param plugin {} The plugin to register.
		     * @return {object} The plugin.
		     */
		    Plugin.register = function(plugin) {
		        if (!Plugin.isPlugin(plugin)) {
		            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
		        }

		        if (plugin.name in Plugin._registry) {
		            var registered = Plugin._registry[plugin.name],
		                pluginVersion = Plugin.versionParse(plugin.version).number,
		                registeredVersion = Plugin.versionParse(registered.version).number;

		            if (pluginVersion > registeredVersion) {
		                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
		                Plugin._registry[plugin.name] = plugin;
		            } else if (pluginVersion < registeredVersion) {
		                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
		            } else if (plugin !== registered) {
		                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
		            }
		        } else {
		            Plugin._registry[plugin.name] = plugin;
		        }

		        return plugin;
		    };

		    /**
		     * Resolves a dependency to a plugin object from the registry if it exists. 
		     * The `dependency` may contain a version, but only the name matters when resolving.
		     * @method resolve
		     * @param dependency {string} The dependency.
		     * @return {object} The plugin if resolved, otherwise `undefined`.
		     */
		    Plugin.resolve = function(dependency) {
		        return Plugin._registry[Plugin.dependencyParse(dependency).name];
		    };

		    /**
		     * Returns a pretty printed plugin name and version.
		     * @method toString
		     * @param plugin {} The plugin.
		     * @return {string} Pretty printed plugin name and version.
		     */
		    Plugin.toString = function(plugin) {
		        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
		    };

		    /**
		     * Returns `true` if the object meets the minimum standard to be considered a plugin.
		     * This means it must define the following properties:
		     * - `name`
		     * - `version`
		     * - `install`
		     * @method isPlugin
		     * @param obj {} The obj to test.
		     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
		     */
		    Plugin.isPlugin = function(obj) {
		        return obj && obj.name && obj.version && obj.install;
		    };

		    /**
		     * Returns `true` if a plugin with the given `name` been installed on `module`.
		     * @method isUsed
		     * @param module {} The module.
		     * @param name {string} The plugin name.
		     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
		     */
		    Plugin.isUsed = function(module, name) {
		        return module.used.indexOf(name) > -1;
		    };

		    /**
		     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
		     * If `plugin.for` is not specified then it is assumed to be applicable.
		     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
		     * @method isFor
		     * @param plugin {} The plugin.
		     * @param module {} The module.
		     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
		     */
		    Plugin.isFor = function(plugin, module) {
		        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
		        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
		    };

		    /**
		     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
		     * For installing plugins on `Matter` see the convenience function `Matter.use`.
		     * Plugins may be specified either by their name or a reference to the plugin object.
		     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
		     * Order is important, a topological sort is performed to find the best resulting order of installation.
		     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
		     * This function logs the resulting status of each dependency in the console, along with any warnings.
		     * - A green tick ✅ indicates a dependency was resolved and installed.
		     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
		     * - A red cross ❌ indicates a dependency could not be resolved.
		     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
		     * @method use
		     * @param module {} The module install plugins on.
		     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
		     */
		    Plugin.use = function(module, plugins) {
		        module.uses = (module.uses || []).concat(plugins || []);

		        if (module.uses.length === 0) {
		            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
		            return;
		        }

		        var dependencies = Plugin.dependencies(module),
		            sortedDependencies = Common.topologicalSort(dependencies),
		            status = [];

		        for (var i = 0; i < sortedDependencies.length; i += 1) {
		            if (sortedDependencies[i] === module.name) {
		                continue;
		            }

		            var plugin = Plugin.resolve(sortedDependencies[i]);

		            if (!plugin) {
		                status.push('❌ ' + sortedDependencies[i]);
		                continue;
		            }

		            if (Plugin.isUsed(module, plugin.name)) {
		                continue;
		            }

		            if (!Plugin.isFor(plugin, module)) {
		                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
		                plugin._warned = true;
		            }

		            if (plugin.install) {
		                plugin.install(module);
		            } else {
		                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
		                plugin._warned = true;
		            }

		            if (plugin._warned) {
		                status.push('🔶 ' + Plugin.toString(plugin));
		                delete plugin._warned;
		            } else {
		                status.push('✅ ' + Plugin.toString(plugin));
		            }

		            module.used.push(plugin.name);
		        }

		        if (status.length > 0) {
		            Common.info(status.join('  '));
		        }
		    };

		    /**
		     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
		     * @method dependencies
		     * @param module {} The module.
		     * @return {object} A dependency graph.
		     */
		    Plugin.dependencies = function(module, tracked) {
		        var parsedBase = Plugin.dependencyParse(module),
		            name = parsedBase.name;

		        tracked = tracked || {};

		        if (name in tracked) {
		            return;
		        }

		        module = Plugin.resolve(module) || module;

		        tracked[name] = Common.map(module.uses || [], function(dependency) {
		            if (Plugin.isPlugin(dependency)) {
		                Plugin.register(dependency);
		            }

		            var parsed = Plugin.dependencyParse(dependency),
		                resolved = Plugin.resolve(dependency);

		            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
		                Common.warn(
		                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
		                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
		                );

		                resolved._warned = true;
		                module._warned = true;
		            } else if (!resolved) {
		                Common.warn(
		                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
		                    Plugin.toString(parsedBase), 'could not be resolved.'
		                );

		                module._warned = true;
		            }

		            return parsed.name;
		        });

		        for (var i = 0; i < tracked[name].length; i += 1) {
		            Plugin.dependencies(tracked[name][i], tracked);
		        }

		        return tracked;
		    };

		    /**
		     * Parses a dependency string into its components.
		     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
		     * See documentation for `Plugin.versionParse` for a description of the format.
		     * This function can also handle dependencies that are already resolved (e.g. a module object).
		     * @method dependencyParse
		     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
		     * @return {object} The dependency parsed into its components.
		     */
		    Plugin.dependencyParse = function(dependency) {
		        if (Common.isString(dependency)) {
		            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;

		            if (!pattern.test(dependency)) {
		                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
		            }

		            return {
		                name: dependency.split('@')[0],
		                range: dependency.split('@')[1] || '*'
		            };
		        }

		        return {
		            name: dependency.name,
		            range: dependency.range || dependency.version
		        };
		    };

		    /**
		     * Parses a version string into its components.  
		     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
		     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
		     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
		     * Only the following range types are supported:
		     * - Tilde ranges e.g. `~1.2.3`
		     * - Caret ranges e.g. `^1.2.3`
		     * - Greater than ranges e.g. `>1.2.3`
		     * - Greater than or equal ranges e.g. `>=1.2.3`
		     * - Exact version e.g. `1.2.3`
		     * - Any version `*`
		     * @method versionParse
		     * @param range {string} The version string.
		     * @return {object} The version range parsed into its components.
		     */
		    Plugin.versionParse = function(range) {
		        var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;

		        if (!pattern.test(range)) {
		            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
		        }

		        var parts = pattern.exec(range);
		        var major = Number(parts[4]);
		        var minor = Number(parts[5]);
		        var patch = Number(parts[6]);

		        return {
		            isRange: Boolean(parts[1] || parts[2]),
		            version: parts[3],
		            range: range,
		            operator: parts[1] || parts[2] || '',
		            major: major,
		            minor: minor,
		            patch: patch,
		            parts: [major, minor, patch],
		            prerelease: parts[7],
		            number: major * 1e8 + minor * 1e4 + patch
		        };
		    };

		    /**
		     * Returns `true` if `version` satisfies the given `range`.
		     * See documentation for `Plugin.versionParse` for a description of the format.
		     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
		     * @method versionSatisfies
		     * @param version {string} The version string.
		     * @param range {string} The range string.
		     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
		     */
		    Plugin.versionSatisfies = function(version, range) {
		        range = range || '*';

		        var r = Plugin.versionParse(range),
		            v = Plugin.versionParse(version);

		        if (r.isRange) {
		            if (r.operator === '*' || version === '*') {
		                return true;
		            }

		            if (r.operator === '>') {
		                return v.number > r.number;
		            }

		            if (r.operator === '>=') {
		                return v.number >= r.number;
		            }

		            if (r.operator === '~') {
		                return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
		            }

		            if (r.operator === '^') {
		                if (r.major > 0) {
		                    return v.major === r.major && v.number >= r.number;
		                }

		                if (r.minor > 0) {
		                    return v.minor === r.minor && v.patch >= r.patch;
		                }

		                return v.patch === r.patch;
		            }
		        }

		        return version === range || version === '*';
		    };

		})();


		/***/ }),
		/* 16 */
		/***/ (function(module, exports) {

		/**
		* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
		*
		* @class Contact
		*/

		var Contact = {};

		module.exports = Contact;

		(function() {

		    /**
		     * Creates a new contact.
		     * @method create
		     * @param {vertex} [vertex]
		     * @return {contact} A new contact
		     */
		    Contact.create = function(vertex) {
		        return {
		            vertex: vertex,
		            normalImpulse: 0,
		            tangentImpulse: 0
		        };
		    };

		})();


		/***/ }),
		/* 17 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Engine` module contains methods for creating and manipulating engines.
		* An engine is a controller that manages updating the simulation of the world.
		* See `Matter.Runner` for an optional game loop utility.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Engine
		*/

		var Engine = {};

		module.exports = Engine;

		var Sleeping = __webpack_require__(7);
		var Resolver = __webpack_require__(18);
		var Detector = __webpack_require__(13);
		var Pairs = __webpack_require__(19);
		var Events = __webpack_require__(5);
		var Composite = __webpack_require__(6);
		var Constraint = __webpack_require__(10);
		var Common = __webpack_require__(0);
		var Body = __webpack_require__(4);

		(function() {

		    Engine._deltaMax = 1000 / 60;

		    /**
		     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
		     * All properties have default values, and many are pre-calculated automatically based on other properties.
		     * See the properties section below for detailed information on what you can pass via the `options` object.
		     * @method create
		     * @param {object} [options]
		     * @return {engine} engine
		     */
		    Engine.create = function(options) {
		        options = options || {};

		        var defaults = {
		            positionIterations: 6,
		            velocityIterations: 4,
		            constraintIterations: 2,
		            enableSleeping: false,
		            events: [],
		            plugin: {},
		            gravity: {
		                x: 0,
		                y: 1,
		                scale: 0.001
		            },
		            timing: {
		                timestamp: 0,
		                timeScale: 1,
		                lastDelta: 0,
		                lastElapsed: 0,
		                lastUpdatesPerFrame: 0
		            }
		        };

		        var engine = Common.extend(defaults, options);

		        engine.world = options.world || Composite.create({ label: 'World' });
		        engine.pairs = options.pairs || Pairs.create();
		        engine.detector = options.detector || Detector.create();
		        engine.detector.pairs = engine.pairs;

		        // for temporary back compatibility only
		        engine.grid = { buckets: [] };
		        engine.world.gravity = engine.gravity;
		        engine.broadphase = engine.grid;
		        engine.metrics = {};
		        
		        return engine;
		    };

		    /**
		     * Moves the simulation forward in time by `delta` milliseconds.
		     * Triggers `beforeUpdate`, `beforeSolve` and `afterUpdate` events.
		     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
		     * @method update
		     * @param {engine} engine
		     * @param {number} [delta=16.666]
		     */
		    Engine.update = function(engine, delta) {
		        var startTime = Common.now();

		        var world = engine.world,
		            detector = engine.detector,
		            pairs = engine.pairs,
		            timing = engine.timing,
		            timestamp = timing.timestamp,
		            i;

		        // warn if high delta
		        if (delta > Engine._deltaMax) {
		            Common.warnOnce(
		                'Matter.Engine.update: delta argument is recommended to be less than or equal to', Engine._deltaMax.toFixed(3), 'ms.'
		            );
		        }

		        delta = typeof delta !== 'undefined' ? delta : Common._baseDelta;
		        delta *= timing.timeScale;

		        // increment timestamp
		        timing.timestamp += delta;
		        timing.lastDelta = delta;

		        // create an event object
		        var event = {
		            timestamp: timing.timestamp,
		            delta: delta
		        };

		        Events.trigger(engine, 'beforeUpdate', event);

		        // get all bodies and all constraints in the world
		        var allBodies = Composite.allBodies(world),
		            allConstraints = Composite.allConstraints(world);

		        // if the world has changed
		        if (world.isModified) {
		            // update the detector bodies
		            Detector.setBodies(detector, allBodies);

		            // reset all composite modified flags
		            Composite.setModified(world, false, false, true);
		        }

		        // update sleeping if enabled
		        if (engine.enableSleeping)
		            Sleeping.update(allBodies, delta);

		        // apply gravity to all bodies
		        Engine._bodiesApplyGravity(allBodies, engine.gravity);

		        // update all body position and rotation by integration
		        if (delta > 0) {
		            Engine._bodiesUpdate(allBodies, delta);
		        }

		        Events.trigger(engine, 'beforeSolve', event);

		        // update all constraints (first pass)
		        Constraint.preSolveAll(allBodies);
		        for (i = 0; i < engine.constraintIterations; i++) {
		            Constraint.solveAll(allConstraints, delta);
		        }
		        Constraint.postSolveAll(allBodies);

		        // find all collisions
		        var collisions = Detector.collisions(detector);

		        // update collision pairs
		        Pairs.update(pairs, collisions, timestamp);

		        // wake up bodies involved in collisions
		        if (engine.enableSleeping)
		            Sleeping.afterCollisions(pairs.list);

		        // trigger collision events
		        if (pairs.collisionStart.length > 0) {
		            Events.trigger(engine, 'collisionStart', { 
		                pairs: pairs.collisionStart,
		                timestamp: timing.timestamp,
		                delta: delta
		            });
		        }

		        // iteratively resolve position between collisions
		        var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
		        
		        Resolver.preSolvePosition(pairs.list);
		        for (i = 0; i < engine.positionIterations; i++) {
		            Resolver.solvePosition(pairs.list, delta, positionDamping);
		        }
		        Resolver.postSolvePosition(allBodies);

		        // update all constraints (second pass)
		        Constraint.preSolveAll(allBodies);
		        for (i = 0; i < engine.constraintIterations; i++) {
		            Constraint.solveAll(allConstraints, delta);
		        }
		        Constraint.postSolveAll(allBodies);

		        // iteratively resolve velocity between collisions
		        Resolver.preSolveVelocity(pairs.list);
		        for (i = 0; i < engine.velocityIterations; i++) {
		            Resolver.solveVelocity(pairs.list, delta);
		        }

		        // update body speed and velocity properties
		        Engine._bodiesUpdateVelocities(allBodies);

		        // trigger collision events
		        if (pairs.collisionActive.length > 0) {
		            Events.trigger(engine, 'collisionActive', { 
		                pairs: pairs.collisionActive, 
		                timestamp: timing.timestamp,
		                delta: delta
		            });
		        }

		        if (pairs.collisionEnd.length > 0) {
		            Events.trigger(engine, 'collisionEnd', {
		                pairs: pairs.collisionEnd,
		                timestamp: timing.timestamp,
		                delta: delta
		            });
		        }

		        // clear force buffers
		        Engine._bodiesClearForces(allBodies);

		        Events.trigger(engine, 'afterUpdate', event);

		        // log the time elapsed computing this update
		        engine.timing.lastElapsed = Common.now() - startTime;

		        return engine;
		    };
		    
		    /**
		     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
		     * @method merge
		     * @param {engine} engineA
		     * @param {engine} engineB
		     */
		    Engine.merge = function(engineA, engineB) {
		        Common.extend(engineA, engineB);
		        
		        if (engineB.world) {
		            engineA.world = engineB.world;

		            Engine.clear(engineA);

		            var bodies = Composite.allBodies(engineA.world);

		            for (var i = 0; i < bodies.length; i++) {
		                var body = bodies[i];
		                Sleeping.set(body, false);
		                body.id = Common.nextId();
		            }
		        }
		    };

		    /**
		     * Clears the engine pairs and detector.
		     * @method clear
		     * @param {engine} engine
		     */
		    Engine.clear = function(engine) {
		        Pairs.clear(engine.pairs);
		        Detector.clear(engine.detector);
		    };

		    /**
		     * Zeroes the `body.force` and `body.torque` force buffers.
		     * @method _bodiesClearForces
		     * @private
		     * @param {body[]} bodies
		     */
		    Engine._bodiesClearForces = function(bodies) {
		        var bodiesLength = bodies.length;

		        for (var i = 0; i < bodiesLength; i++) {
		            var body = bodies[i];

		            // reset force buffers
		            body.force.x = 0;
		            body.force.y = 0;
		            body.torque = 0;
		        }
		    };

		    /**
		     * Applies gravitational acceleration to all `bodies`.
		     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
		     * 
		     * @method _bodiesApplyGravity
		     * @private
		     * @param {body[]} bodies
		     * @param {vector} gravity
		     */
		    Engine._bodiesApplyGravity = function(bodies, gravity) {
		        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001,
		            bodiesLength = bodies.length;

		        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
		            return;
		        }
		        
		        for (var i = 0; i < bodiesLength; i++) {
		            var body = bodies[i];

		            if (body.isStatic || body.isSleeping)
		                continue;

		            // add the resultant force of gravity
		            body.force.y += body.mass * gravity.y * gravityScale;
		            body.force.x += body.mass * gravity.x * gravityScale;
		        }
		    };

		    /**
		     * Applies `Body.update` to all given `bodies`.
		     * @method _bodiesUpdate
		     * @private
		     * @param {body[]} bodies
		     * @param {number} delta The amount of time elapsed between updates
		     */
		    Engine._bodiesUpdate = function(bodies, delta) {
		        var bodiesLength = bodies.length;

		        for (var i = 0; i < bodiesLength; i++) {
		            var body = bodies[i];

		            if (body.isStatic || body.isSleeping)
		                continue;

		            Body.update(body, delta);
		        }
		    };

		    /**
		     * Applies `Body.updateVelocities` to all given `bodies`.
		     * @method _bodiesUpdateVelocities
		     * @private
		     * @param {body[]} bodies
		     */
		    Engine._bodiesUpdateVelocities = function(bodies) {
		        var bodiesLength = bodies.length;

		        for (var i = 0; i < bodiesLength; i++) {
		            Body.updateVelocities(bodies[i]);
		        }
		    };

		    /**
		     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
		     * @deprecated use Matter.Runner.run(engine) instead
		     * @method run
		     * @param {engine} engine
		     */

		    /**
		    * Fired just before an update
		    *
		    * @event beforeUpdate
		    * @param {object} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {number} event.delta The delta time in milliseconds value used in the update
		    * @param {engine} event.source The source object of the event
		    * @param {string} event.name The name of the event
		    */

		    /**
		    * Fired after bodies updated based on their velocity and forces, but before any collision detection, constraints and resolving etc.
		    *
		    * @event beforeSolve
		    * @param {object} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {number} event.delta The delta time in milliseconds value used in the update
		    * @param {engine} event.source The source object of the event
		    * @param {string} event.name The name of the event
		    */

		    /**
		    * Fired after engine update and all collision events
		    *
		    * @event afterUpdate
		    * @param {object} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {number} event.delta The delta time in milliseconds value used in the update
		    * @param {engine} event.source The source object of the event
		    * @param {string} event.name The name of the event
		    */

		    /**
		    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
		    *
		    * @event collisionStart
		    * @param {object} event An event object
		    * @param {pair[]} event.pairs List of affected pairs
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {number} event.delta The delta time in milliseconds value used in the update
		    * @param {engine} event.source The source object of the event
		    * @param {string} event.name The name of the event
		    */

		    /**
		    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
		    *
		    * @event collisionActive
		    * @param {object} event An event object
		    * @param {pair[]} event.pairs List of affected pairs
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {number} event.delta The delta time in milliseconds value used in the update
		    * @param {engine} event.source The source object of the event
		    * @param {string} event.name The name of the event
		    */

		    /**
		    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
		    *
		    * @event collisionEnd
		    * @param {object} event An event object
		    * @param {pair[]} event.pairs List of affected pairs
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {number} event.delta The delta time in milliseconds value used in the update
		    * @param {engine} event.source The source object of the event
		    * @param {string} event.name The name of the event
		    */

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * An integer `Number` that specifies the number of position iterations to perform each update.
		     * The higher the value, the higher quality the simulation will be at the expense of performance.
		     *
		     * @property positionIterations
		     * @type number
		     * @default 6
		     */

		    /**
		     * An integer `Number` that specifies the number of velocity iterations to perform each update.
		     * The higher the value, the higher quality the simulation will be at the expense of performance.
		     *
		     * @property velocityIterations
		     * @type number
		     * @default 4
		     */

		    /**
		     * An integer `Number` that specifies the number of constraint iterations to perform each update.
		     * The higher the value, the higher quality the simulation will be at the expense of performance.
		     * The default value of `2` is usually very adequate.
		     *
		     * @property constraintIterations
		     * @type number
		     * @default 2
		     */

		    /**
		     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
		     * Sleeping can improve stability and performance, but often at the expense of accuracy.
		     *
		     * @property enableSleeping
		     * @type boolean
		     * @default false
		     */

		    /**
		     * An `Object` containing properties regarding the timing systems of the engine. 
		     *
		     * @property timing
		     * @type object
		     */

		    /**
		     * A `Number` that specifies the global scaling factor of time for all bodies.
		     * A value of `0` freezes the simulation.
		     * A value of `0.1` gives a slow-motion effect.
		     * A value of `1.2` gives a speed-up effect.
		     *
		     * @property timing.timeScale
		     * @type number
		     * @default 1
		     */

		    /**
		     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
		     * It is incremented on every `Engine.update` by the given `delta` argument. 
		     * 
		     * @property timing.timestamp
		     * @type number
		     * @default 0
		     */

		    /**
		     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
		     * It is updated by timing from the start of the last `Engine.update` call until it ends.
		     *
		     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
		     * 
		     * @property timing.lastElapsed
		     * @type number
		     * @default 0
		     */

		    /**
		     * A `Number` that represents the `delta` value used in the last engine update.
		     * 
		     * @property timing.lastDelta
		     * @type number
		     * @default 0
		     */

		    /**
		     * A `Matter.Detector` instance.
		     *
		     * @property detector
		     * @type detector
		     * @default a Matter.Detector instance
		     */

		    /**
		     * A `Matter.Grid` instance.
		     *
		     * @deprecated replaced by `engine.detector`
		     * @property grid
		     * @type grid
		     * @default a Matter.Grid instance
		     */

		    /**
		     * Replaced by and now alias for `engine.grid`.
		     *
		     * @deprecated replaced by `engine.detector`
		     * @property broadphase
		     * @type grid
		     * @default a Matter.Grid instance
		     */

		    /**
		     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
		     *
		     * @property world
		     * @type composite
		     * @default a Matter.Composite instance
		     */

		    /**
		     * An object reserved for storing plugin-specific properties.
		     *
		     * @property plugin
		     * @type {}
		     */

		    /**
		     * An optional gravitational acceleration applied to all bodies in `engine.world` on every update.
		     * 
		     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet. For gravity in other contexts, disable this and apply forces as needed.
		     * 
		     * To disable set the `scale` component to `0`.
		     * 
		     * This is split into three components for ease of use:  
		     * a normalised direction (`x` and `y`) and magnitude (`scale`).
		     *
		     * @property gravity
		     * @type object
		     */

		    /**
		     * The gravitational direction normal `x` component, to be multiplied by `gravity.scale`.
		     * 
		     * @property gravity.x
		     * @type object
		     * @default 0
		     */

		    /**
		     * The gravitational direction normal `y` component, to be multiplied by `gravity.scale`.
		     *
		     * @property gravity.y
		     * @type object
		     * @default 1
		     */

		    /**
		     * The magnitude of the gravitational acceleration.
		     * 
		     * @property gravity.scale
		     * @type object
		     * @default 0.001
		     */

		})();


		/***/ }),
		/* 18 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Resolver` module contains methods for resolving collision pairs.
		*
		* @class Resolver
		*/

		var Resolver = {};

		module.exports = Resolver;

		var Vertices = __webpack_require__(3);
		var Common = __webpack_require__(0);
		var Bounds = __webpack_require__(1);

		(function() {

		    Resolver._restingThresh = 2;
		    Resolver._restingThreshTangent = Math.sqrt(6);
		    Resolver._positionDampen = 0.9;
		    Resolver._positionWarming = 0.8;
		    Resolver._frictionNormalMultiplier = 5;
		    Resolver._frictionMaxStatic = Number.MAX_VALUE;

		    /**
		     * Prepare pairs for position solving.
		     * @method preSolvePosition
		     * @param {pair[]} pairs
		     */
		    Resolver.preSolvePosition = function(pairs) {
		        var i,
		            pair,
		            contactCount,
		            pairsLength = pairs.length;

		        // find total contacts on each body
		        for (i = 0; i < pairsLength; i++) {
		            pair = pairs[i];
		            
		            if (!pair.isActive)
		                continue;
		            
		            contactCount = pair.contactCount;
		            pair.collision.parentA.totalContacts += contactCount;
		            pair.collision.parentB.totalContacts += contactCount;
		        }
		    };

		    /**
		     * Find a solution for pair positions.
		     * @method solvePosition
		     * @param {pair[]} pairs
		     * @param {number} delta
		     * @param {number} [damping=1]
		     */
		    Resolver.solvePosition = function(pairs, delta, damping) {
		        var i,
		            pair,
		            collision,
		            bodyA,
		            bodyB,
		            normal,
		            contactShare,
		            positionImpulse,
		            positionDampen = Resolver._positionDampen * (damping || 1),
		            slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1),
		            pairsLength = pairs.length;

		        // find impulses required to resolve penetration
		        for (i = 0; i < pairsLength; i++) {
		            pair = pairs[i];
		            
		            if (!pair.isActive || pair.isSensor)
		                continue;

		            collision = pair.collision;
		            bodyA = collision.parentA;
		            bodyB = collision.parentB;
		            normal = collision.normal;

		            // get current separation between body edges involved in collision
		            pair.separation = 
		                collision.depth + normal.x * (bodyB.positionImpulse.x - bodyA.positionImpulse.x)
		                + normal.y * (bodyB.positionImpulse.y - bodyA.positionImpulse.y);
		        }
		        
		        for (i = 0; i < pairsLength; i++) {
		            pair = pairs[i];

		            if (!pair.isActive || pair.isSensor)
		                continue;
		            
		            collision = pair.collision;
		            bodyA = collision.parentA;
		            bodyB = collision.parentB;
		            normal = collision.normal;
		            positionImpulse = pair.separation - pair.slop * slopDampen;

		            if (bodyA.isStatic || bodyB.isStatic)
		                positionImpulse *= 2;
		            
		            if (!(bodyA.isStatic || bodyA.isSleeping)) {
		                contactShare = positionDampen / bodyA.totalContacts;
		                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
		                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
		            }

		            if (!(bodyB.isStatic || bodyB.isSleeping)) {
		                contactShare = positionDampen / bodyB.totalContacts;
		                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
		                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
		            }
		        }
		    };

		    /**
		     * Apply position resolution.
		     * @method postSolvePosition
		     * @param {body[]} bodies
		     */
		    Resolver.postSolvePosition = function(bodies) {
		        var positionWarming = Resolver._positionWarming,
		            bodiesLength = bodies.length,
		            verticesTranslate = Vertices.translate,
		            boundsUpdate = Bounds.update;

		        for (var i = 0; i < bodiesLength; i++) {
		            var body = bodies[i],
		                positionImpulse = body.positionImpulse,
		                positionImpulseX = positionImpulse.x,
		                positionImpulseY = positionImpulse.y,
		                velocity = body.velocity;

		            // reset contact count
		            body.totalContacts = 0;

		            if (positionImpulseX !== 0 || positionImpulseY !== 0) {
		                // update body geometry
		                for (var j = 0; j < body.parts.length; j++) {
		                    var part = body.parts[j];
		                    verticesTranslate(part.vertices, positionImpulse);
		                    boundsUpdate(part.bounds, part.vertices, velocity);
		                    part.position.x += positionImpulseX;
		                    part.position.y += positionImpulseY;
		                }

		                // move the body without changing velocity
		                body.positionPrev.x += positionImpulseX;
		                body.positionPrev.y += positionImpulseY;

		                if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
		                    // reset cached impulse if the body has velocity along it
		                    positionImpulse.x = 0;
		                    positionImpulse.y = 0;
		                } else {
		                    // warm the next iteration
		                    positionImpulse.x *= positionWarming;
		                    positionImpulse.y *= positionWarming;
		                }
		            }
		        }
		    };

		    /**
		     * Prepare pairs for velocity solving.
		     * @method preSolveVelocity
		     * @param {pair[]} pairs
		     */
		    Resolver.preSolveVelocity = function(pairs) {
		        var pairsLength = pairs.length,
		            i,
		            j;
		        
		        for (i = 0; i < pairsLength; i++) {
		            var pair = pairs[i];
		            
		            if (!pair.isActive || pair.isSensor)
		                continue;
		            
		            var contacts = pair.contacts,
		                contactCount = pair.contactCount,
		                collision = pair.collision,
		                bodyA = collision.parentA,
		                bodyB = collision.parentB,
		                normal = collision.normal,
		                tangent = collision.tangent;
		    
		            // resolve each contact
		            for (j = 0; j < contactCount; j++) {
		                var contact = contacts[j],
		                    contactVertex = contact.vertex,
		                    normalImpulse = contact.normalImpulse,
		                    tangentImpulse = contact.tangentImpulse;
		    
		                if (normalImpulse !== 0 || tangentImpulse !== 0) {
		                    // total impulse from contact
		                    var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse,
		                        impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
		                    
		                    // apply impulse from contact
		                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
		                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
		                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
		                        bodyA.anglePrev += bodyA.inverseInertia * (
		                            (contactVertex.x - bodyA.position.x) * impulseY
		                            - (contactVertex.y - bodyA.position.y) * impulseX
		                        );
		                    }
		    
		                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
		                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
		                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
		                        bodyB.anglePrev -= bodyB.inverseInertia * (
		                            (contactVertex.x - bodyB.position.x) * impulseY 
		                            - (contactVertex.y - bodyB.position.y) * impulseX
		                        );
		                    }
		                }
		            }
		        }
		    };

		    /**
		     * Find a solution for pair velocities.
		     * @method solveVelocity
		     * @param {pair[]} pairs
		     * @param {number} delta
		     */
		    Resolver.solveVelocity = function(pairs, delta) {
		        var timeScale = delta / Common._baseDelta,
		            timeScaleSquared = timeScale * timeScale,
		            timeScaleCubed = timeScaleSquared * timeScale,
		            restingThresh = -Resolver._restingThresh * timeScale,
		            restingThreshTangent = Resolver._restingThreshTangent,
		            frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale,
		            frictionMaxStatic = Resolver._frictionMaxStatic,
		            pairsLength = pairs.length,
		            tangentImpulse,
		            maxFriction,
		            i,
		            j;

		        for (i = 0; i < pairsLength; i++) {
		            var pair = pairs[i];
		            
		            if (!pair.isActive || pair.isSensor)
		                continue;
		            
		            var collision = pair.collision,
		                bodyA = collision.parentA,
		                bodyB = collision.parentB,
		                normalX = collision.normal.x,
		                normalY = collision.normal.y,
		                tangentX = collision.tangent.x,
		                tangentY = collision.tangent.y,
		                inverseMassTotal = pair.inverseMass,
		                friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier,
		                contacts = pair.contacts,
		                contactCount = pair.contactCount,
		                contactShare = 1 / contactCount;

		            // get body velocities
		            var bodyAVelocityX = bodyA.position.x - bodyA.positionPrev.x,
		                bodyAVelocityY = bodyA.position.y - bodyA.positionPrev.y,
		                bodyAAngularVelocity = bodyA.angle - bodyA.anglePrev,
		                bodyBVelocityX = bodyB.position.x - bodyB.positionPrev.x,
		                bodyBVelocityY = bodyB.position.y - bodyB.positionPrev.y,
		                bodyBAngularVelocity = bodyB.angle - bodyB.anglePrev;

		            // resolve each contact
		            for (j = 0; j < contactCount; j++) {
		                var contact = contacts[j],
		                    contactVertex = contact.vertex;

		                var offsetAX = contactVertex.x - bodyA.position.x,
		                    offsetAY = contactVertex.y - bodyA.position.y,
		                    offsetBX = contactVertex.x - bodyB.position.x,
		                    offsetBY = contactVertex.y - bodyB.position.y;
		 
		                var velocityPointAX = bodyAVelocityX - offsetAY * bodyAAngularVelocity,
		                    velocityPointAY = bodyAVelocityY + offsetAX * bodyAAngularVelocity,
		                    velocityPointBX = bodyBVelocityX - offsetBY * bodyBAngularVelocity,
		                    velocityPointBY = bodyBVelocityY + offsetBX * bodyBAngularVelocity;

		                var relativeVelocityX = velocityPointAX - velocityPointBX,
		                    relativeVelocityY = velocityPointAY - velocityPointBY;

		                var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY,
		                    tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;

		                // coulomb friction
		                var normalOverlap = pair.separation + normalVelocity;
		                var normalForce = Math.min(normalOverlap, 1);
		                normalForce = normalOverlap < 0 ? 0 : normalForce;

		                var frictionLimit = normalForce * friction;

		                if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
		                    maxFriction = (tangentVelocity > 0 ? tangentVelocity : -tangentVelocity);
		                    tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
		                    
		                    if (tangentImpulse < -maxFriction) {
		                        tangentImpulse = -maxFriction;
		                    } else if (tangentImpulse > maxFriction) {
		                        tangentImpulse = maxFriction;
		                    }
		                } else {
		                    tangentImpulse = tangentVelocity;
		                    maxFriction = frictionMaxStatic;
		                }

		                // account for mass, inertia and contact offset
		                var oAcN = offsetAX * normalY - offsetAY * normalX,
		                    oBcN = offsetBX * normalY - offsetBY * normalX,
		                    share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);

		                // raw impulses
		                var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
		                tangentImpulse *= share;

		                // handle high velocity and resting collisions separately
		                if (normalVelocity < restingThresh) {
		                    // high normal velocity so clear cached contact normal impulse
		                    contact.normalImpulse = 0;
		                } else {
		                    // solve resting collision constraints using Erin Catto's method (GDC08)
		                    // impulse constraint tends to 0
		                    var contactNormalImpulse = contact.normalImpulse;
		                    contact.normalImpulse += normalImpulse;
		                    if (contact.normalImpulse > 0) contact.normalImpulse = 0;
		                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
		                }

		                // handle high velocity and resting collisions separately
		                if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
		                    // high tangent velocity so clear cached contact tangent impulse
		                    contact.tangentImpulse = 0;
		                } else {
		                    // solve resting collision constraints using Erin Catto's method (GDC08)
		                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
		                    var contactTangentImpulse = contact.tangentImpulse;
		                    contact.tangentImpulse += tangentImpulse;
		                    if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
		                    if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
		                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
		                }

		                // total impulse from contact
		                var impulseX = normalX * normalImpulse + tangentX * tangentImpulse,
		                    impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
		                
		                // apply impulse from contact
		                if (!(bodyA.isStatic || bodyA.isSleeping)) {
		                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
		                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
		                    bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
		                }

		                if (!(bodyB.isStatic || bodyB.isSleeping)) {
		                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
		                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
		                    bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
		                }
		            }
		        }
		    };

		})();


		/***/ }),
		/* 19 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
		*
		* @class Pairs
		*/

		var Pairs = {};

		module.exports = Pairs;

		var Pair = __webpack_require__(9);
		var Common = __webpack_require__(0);

		(function() {

		    /**
		     * Creates a new pairs structure.
		     * @method create
		     * @param {object} options
		     * @return {pairs} A new pairs structure
		     */
		    Pairs.create = function(options) {
		        return Common.extend({ 
		            table: {},
		            list: [],
		            collisionStart: [],
		            collisionActive: [],
		            collisionEnd: []
		        }, options);
		    };

		    /**
		     * Updates pairs given a list of collisions.
		     * @method update
		     * @param {object} pairs
		     * @param {collision[]} collisions
		     * @param {number} timestamp
		     */
		    Pairs.update = function(pairs, collisions, timestamp) {
		        var pairUpdate = Pair.update,
		            pairCreate = Pair.create,
		            pairSetActive = Pair.setActive,
		            pairsTable = pairs.table,
		            pairsList = pairs.list,
		            pairsListLength = pairsList.length,
		            pairsListIndex = pairsListLength,
		            collisionStart = pairs.collisionStart,
		            collisionEnd = pairs.collisionEnd,
		            collisionActive = pairs.collisionActive,
		            collisionsLength = collisions.length,
		            collisionStartIndex = 0,
		            collisionEndIndex = 0,
		            collisionActiveIndex = 0,
		            collision,
		            pair,
		            i;

		        for (i = 0; i < collisionsLength; i++) {
		            collision = collisions[i];
		            pair = collision.pair;

		            if (pair) {
		                // pair already exists (but may or may not be active)
		                if (pair.isActive) {
		                    // pair exists and is active
		                    collisionActive[collisionActiveIndex++] = pair;
		                }

		                // update the pair
		                pairUpdate(pair, collision, timestamp);
		            } else {
		                // pair did not exist, create a new pair
		                pair = pairCreate(collision, timestamp);
		                pairsTable[pair.id] = pair;

		                // add the new pair
		                collisionStart[collisionStartIndex++] = pair;
		                pairsList[pairsListIndex++] = pair;
		            }
		        }

		        // find pairs that are no longer active
		        pairsListIndex = 0;
		        pairsListLength = pairsList.length;

		        for (i = 0; i < pairsListLength; i++) {
		            pair = pairsList[i];
		            
		            // pair is active if updated this timestep
		            if (pair.timeUpdated >= timestamp) {
		                // keep active pairs
		                pairsList[pairsListIndex++] = pair;
		            } else {
		                pairSetActive(pair, false, timestamp);

		                // keep inactive pairs if both bodies may be sleeping
		                if (pair.collision.bodyA.sleepCounter > 0 && pair.collision.bodyB.sleepCounter > 0) {
		                    pairsList[pairsListIndex++] = pair;
		                } else {
		                    // remove inactive pairs if either body awake
		                    collisionEnd[collisionEndIndex++] = pair;
		                    delete pairsTable[pair.id];
		                }
		            }
		        }

		        // update array lengths if changed
		        if (pairsList.length !== pairsListIndex) {
		            pairsList.length = pairsListIndex;
		        }

		        if (collisionStart.length !== collisionStartIndex) {
		            collisionStart.length = collisionStartIndex;
		        }

		        if (collisionEnd.length !== collisionEndIndex) {
		            collisionEnd.length = collisionEndIndex;
		        }

		        if (collisionActive.length !== collisionActiveIndex) {
		            collisionActive.length = collisionActiveIndex;
		        }
		    };

		    /**
		     * Clears the given pairs structure.
		     * @method clear
		     * @param {pairs} pairs
		     * @return {pairs} pairs
		     */
		    Pairs.clear = function(pairs) {
		        pairs.table = {};
		        pairs.list.length = 0;
		        pairs.collisionStart.length = 0;
		        pairs.collisionActive.length = 0;
		        pairs.collisionEnd.length = 0;
		        return pairs;
		    };

		})();


		/***/ }),
		/* 20 */
		/***/ (function(module, exports, __webpack_require__) {

		var Matter = module.exports = __webpack_require__(21);

		Matter.Axes = __webpack_require__(11);
		Matter.Bodies = __webpack_require__(12);
		Matter.Body = __webpack_require__(4);
		Matter.Bounds = __webpack_require__(1);
		Matter.Collision = __webpack_require__(8);
		Matter.Common = __webpack_require__(0);
		Matter.Composite = __webpack_require__(6);
		Matter.Composites = __webpack_require__(22);
		Matter.Constraint = __webpack_require__(10);
		Matter.Contact = __webpack_require__(16);
		Matter.Detector = __webpack_require__(13);
		Matter.Engine = __webpack_require__(17);
		Matter.Events = __webpack_require__(5);
		Matter.Grid = __webpack_require__(23);
		Matter.Mouse = __webpack_require__(14);
		Matter.MouseConstraint = __webpack_require__(24);
		Matter.Pair = __webpack_require__(9);
		Matter.Pairs = __webpack_require__(19);
		Matter.Plugin = __webpack_require__(15);
		Matter.Query = __webpack_require__(25);
		Matter.Render = __webpack_require__(26);
		Matter.Resolver = __webpack_require__(18);
		Matter.Runner = __webpack_require__(27);
		Matter.SAT = __webpack_require__(28);
		Matter.Sleeping = __webpack_require__(7);
		Matter.Svg = __webpack_require__(29);
		Matter.Vector = __webpack_require__(2);
		Matter.Vertices = __webpack_require__(3);
		Matter.World = __webpack_require__(30);

		// temporary back compatibility
		Matter.Engine.run = Matter.Runner.run;
		Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');


		/***/ }),
		/* 21 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
		*
		* @class Matter
		*/

		var Matter = {};

		module.exports = Matter;

		var Plugin = __webpack_require__(15);
		var Common = __webpack_require__(0);

		(function() {

		    /**
		     * The library name.
		     * @property name
		     * @readOnly
		     * @type {String}
		     */
		    Matter.name = 'matter-js';

		    /**
		     * The library version.
		     * @property version
		     * @readOnly
		     * @type {String}
		     */
		    Matter.version =  "0.20.0" ;

		    /**
		     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
		     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
		     * @property uses
		     * @type {Array}
		     */
		    Matter.uses = [];

		    /**
		     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
		     * @property used
		     * @readOnly
		     * @type {Array}
		     */
		    Matter.used = [];

		    /**
		     * Installs the given plugins on the `Matter` namespace.
		     * This is a short-hand for `Plugin.use`, see it for more information.
		     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
		     * Avoid calling this function multiple times unless you intend to manually control installation order.
		     * @method use
		     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
		     */
		    Matter.use = function() {
		        Plugin.use(Matter, Array.prototype.slice.call(arguments));
		    };

		    /**
		     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
		     * See also docs for `Common.chain`.
		     * @method before
		     * @param {string} path The path relative to `Matter`
		     * @param {function} func The function to chain before the original
		     * @return {function} The chained function that replaced the original
		     */
		    Matter.before = function(path, func) {
		        path = path.replace(/^Matter./, '');
		        return Common.chainPathBefore(Matter, path, func);
		    };

		    /**
		     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
		     * See also docs for `Common.chain`.
		     * @method after
		     * @param {string} path The path relative to `Matter`
		     * @param {function} func The function to chain after the original
		     * @return {function} The chained function that replaced the original
		     */
		    Matter.after = function(path, func) {
		        path = path.replace(/^Matter./, '');
		        return Common.chainPathAfter(Matter, path, func);
		    };

		})();


		/***/ }),
		/* 22 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Composites` module contains factory methods for creating composite bodies
		* with commonly used configurations (such as stacks and chains).
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Composites
		*/

		var Composites = {};

		module.exports = Composites;

		var Composite = __webpack_require__(6);
		var Constraint = __webpack_require__(10);
		var Common = __webpack_require__(0);
		var Body = __webpack_require__(4);
		var Bodies = __webpack_require__(12);
		var deprecated = Common.deprecated;

		(function() {

		    /**
		     * Create a new composite containing bodies created in the callback in a grid arrangement.
		     * This function uses the body's bounds to prevent overlaps.
		     * @method stack
		     * @param {number} x Starting position in X.
		     * @param {number} y Starting position in Y.
		     * @param {number} columns
		     * @param {number} rows
		     * @param {number} columnGap
		     * @param {number} rowGap
		     * @param {function} callback
		     * @return {composite} A new composite containing objects created in the callback
		     */
		    Composites.stack = function(x, y, columns, rows, columnGap, rowGap, callback) {
		        var stack = Composite.create({ label: 'Stack' }),
		            currentX = x,
		            currentY = y,
		            lastBody,
		            i = 0;

		        for (var row = 0; row < rows; row++) {
		            var maxHeight = 0;
		            
		            for (var column = 0; column < columns; column++) {
		                var body = callback(currentX, currentY, column, row, lastBody, i);
		                    
		                if (body) {
		                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
		                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

		                    if (bodyHeight > maxHeight)
		                        maxHeight = bodyHeight;
		                    
		                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

		                    currentX = body.bounds.max.x + columnGap;

		                    Composite.addBody(stack, body);
		                    
		                    lastBody = body;
		                    i += 1;
		                } else {
		                    currentX += columnGap;
		                }
		            }
		            
		            currentY += maxHeight + rowGap;
		            currentX = x;
		        }

		        return stack;
		    };
		    
		    /**
		     * Chains all bodies in the given composite together using constraints.
		     * @method chain
		     * @param {composite} composite
		     * @param {number} xOffsetA
		     * @param {number} yOffsetA
		     * @param {number} xOffsetB
		     * @param {number} yOffsetB
		     * @param {object} options
		     * @return {composite} A new composite containing objects chained together with constraints
		     */
		    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
		        var bodies = composite.bodies;
		        
		        for (var i = 1; i < bodies.length; i++) {
		            var bodyA = bodies[i - 1],
		                bodyB = bodies[i],
		                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
		                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
		                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
		                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
		        
		            var defaults = {
		                bodyA: bodyA,
		                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
		                bodyB: bodyB,
		                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
		            };
		            
		            var constraint = Common.extend(defaults, options);
		        
		            Composite.addConstraint(composite, Constraint.create(constraint));
		        }

		        composite.label += ' Chain';
		        
		        return composite;
		    };

		    /**
		     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
		     * @method mesh
		     * @param {composite} composite
		     * @param {number} columns
		     * @param {number} rows
		     * @param {boolean} crossBrace
		     * @param {object} options
		     * @return {composite} The composite containing objects meshed together with constraints
		     */
		    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
		        var bodies = composite.bodies,
		            row,
		            col,
		            bodyA,
		            bodyB,
		            bodyC;
		        
		        for (row = 0; row < rows; row++) {
		            for (col = 1; col < columns; col++) {
		                bodyA = bodies[(col - 1) + (row * columns)];
		                bodyB = bodies[col + (row * columns)];
		                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
		            }

		            if (row > 0) {
		                for (col = 0; col < columns; col++) {
		                    bodyA = bodies[col + ((row - 1) * columns)];
		                    bodyB = bodies[col + (row * columns)];
		                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

		                    if (crossBrace && col > 0) {
		                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
		                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
		                    }

		                    if (crossBrace && col < columns - 1) {
		                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
		                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
		                    }
		                }
		            }
		        }

		        composite.label += ' Mesh';
		        
		        return composite;
		    };
		    
		    /**
		     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
		     * This function uses the body's bounds to prevent overlaps.
		     * @method pyramid
		     * @param {number} x Starting position in X.
		     * @param {number} y Starting position in Y.
		     * @param {number} columns
		     * @param {number} rows
		     * @param {number} columnGap
		     * @param {number} rowGap
		     * @param {function} callback
		     * @return {composite} A new composite containing objects created in the callback
		     */
		    Composites.pyramid = function(x, y, columns, rows, columnGap, rowGap, callback) {
		        return Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY, column, row, lastBody, i) {
		            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
		                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
		            
		            if (row > actualRows)
		                return;
		            
		            // reverse row order
		            row = actualRows - row;
		            
		            var start = row,
		                end = columns - 1 - row;

		            if (column < start || column > end)
		                return;
		            
		            // retroactively fix the first body's position, since width was unknown
		            if (i === 1) {
		                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
		            }

		            var xOffset = lastBody ? column * lastBodyWidth : 0;
		            
		            return callback(x + xOffset + column * columnGap, stackY, column, row, lastBody, i);
		        });
		    };

		    /**
		     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
		     * @deprecated moved to newtonsCradle example
		     * @method newtonsCradle
		     * @param {number} x Starting position in X.
		     * @param {number} y Starting position in Y.
		     * @param {number} number
		     * @param {number} size
		     * @param {number} length
		     * @return {composite} A new composite newtonsCradle body
		     */
		    Composites.newtonsCradle = function(x, y, number, size, length) {
		        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

		        for (var i = 0; i < number; i++) {
		            var separation = 1.9,
		                circle = Bodies.circle(x + i * (size * separation), y + length, size, 
		                    { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
		                constraint = Constraint.create({ pointA: { x: x + i * (size * separation), y: y }, bodyB: circle });

		            Composite.addBody(newtonsCradle, circle);
		            Composite.addConstraint(newtonsCradle, constraint);
		        }

		        return newtonsCradle;
		    };

		    deprecated(Composites, 'newtonsCradle', 'Composites.newtonsCradle ➤ moved to newtonsCradle example');
		    
		    /**
		     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
		     * @deprecated moved to car example
		     * @method car
		     * @param {number} x Starting position in X.
		     * @param {number} y Starting position in Y.
		     * @param {number} width
		     * @param {number} height
		     * @param {number} wheelSize
		     * @return {composite} A new composite car body
		     */
		    Composites.car = function(x, y, width, height, wheelSize) {
		        var group = Body.nextGroup(true),
		            wheelBase = 20,
		            wheelAOffset = -width * 0.5 + wheelBase,
		            wheelBOffset = width * 0.5 - wheelBase,
		            wheelYOffset = 0;
		    
		        var car = Composite.create({ label: 'Car' }),
		            body = Bodies.rectangle(x, y, width, height, { 
		                collisionFilter: {
		                    group: group
		                },
		                chamfer: {
		                    radius: height * 0.5
		                },
		                density: 0.0002
		            });
		    
		        var wheelA = Bodies.circle(x + wheelAOffset, y + wheelYOffset, wheelSize, { 
		            collisionFilter: {
		                group: group
		            },
		            friction: 0.8
		        });
		                    
		        var wheelB = Bodies.circle(x + wheelBOffset, y + wheelYOffset, wheelSize, { 
		            collisionFilter: {
		                group: group
		            },
		            friction: 0.8
		        });
		                    
		        var axelA = Constraint.create({
		            bodyB: body,
		            pointB: { x: wheelAOffset, y: wheelYOffset },
		            bodyA: wheelA,
		            stiffness: 1,
		            length: 0
		        });
		                        
		        var axelB = Constraint.create({
		            bodyB: body,
		            pointB: { x: wheelBOffset, y: wheelYOffset },
		            bodyA: wheelB,
		            stiffness: 1,
		            length: 0
		        });
		        
		        Composite.addBody(car, body);
		        Composite.addBody(car, wheelA);
		        Composite.addBody(car, wheelB);
		        Composite.addConstraint(car, axelA);
		        Composite.addConstraint(car, axelB);

		        return car;
		    };

		    deprecated(Composites, 'car', 'Composites.car ➤ moved to car example');

		    /**
		     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
		     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
		     * @deprecated moved to softBody and cloth examples
		     * @method softBody
		     * @param {number} x Starting position in X.
		     * @param {number} y Starting position in Y.
		     * @param {number} columns
		     * @param {number} rows
		     * @param {number} columnGap
		     * @param {number} rowGap
		     * @param {boolean} crossBrace
		     * @param {number} particleRadius
		     * @param {} particleOptions
		     * @param {} constraintOptions
		     * @return {composite} A new composite softBody
		     */
		    Composites.softBody = function(x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
		        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
		        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

		        var softBody = Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY) {
		            return Bodies.circle(stackX, stackY, particleRadius, particleOptions);
		        });

		        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

		        softBody.label = 'Soft Body';

		        return softBody;
		    };

		    deprecated(Composites, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples');
		})();


		/***/ }),
		/* 23 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* This module has now been replaced by `Matter.Detector`.
		*
		* All usage should be migrated to `Matter.Detector` or another alternative.
		* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
		*
		* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
		*
		* @class Grid
		* @deprecated
		*/

		var Grid = {};

		module.exports = Grid;

		var Pair = __webpack_require__(9);
		var Common = __webpack_require__(0);
		var deprecated = Common.deprecated;

		(function() {

		    /**
		     * Creates a new grid.
		     * @deprecated replaced by Matter.Detector
		     * @method create
		     * @param {} options
		     * @return {grid} A new grid
		     */
		    Grid.create = function(options) {
		        var defaults = {
		            buckets: {},
		            pairs: {},
		            pairsList: [],
		            bucketWidth: 48,
		            bucketHeight: 48
		        };

		        return Common.extend(defaults, options);
		    };

		    /**
		     * The width of a single grid bucket.
		     *
		     * @property bucketWidth
		     * @type number
		     * @default 48
		     */

		    /**
		     * The height of a single grid bucket.
		     *
		     * @property bucketHeight
		     * @type number
		     * @default 48
		     */

		    /**
		     * Updates the grid.
		     * @deprecated replaced by Matter.Detector
		     * @method update
		     * @param {grid} grid
		     * @param {body[]} bodies
		     * @param {engine} engine
		     * @param {boolean} forceUpdate
		     */
		    Grid.update = function(grid, bodies, engine, forceUpdate) {
		        var i, col, row,
		            world = engine.world,
		            buckets = grid.buckets,
		            bucket,
		            bucketId,
		            gridChanged = false;

		        for (i = 0; i < bodies.length; i++) {
		            var body = bodies[i];

		            if (body.isSleeping && !forceUpdate)
		                continue;

		            // temporary back compatibility bounds check
		            if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
		                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
		                continue;

		            var newRegion = Grid._getRegion(grid, body);

		            // if the body has changed grid region
		            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {

		                if (!body.region || forceUpdate)
		                    body.region = newRegion;

		                var union = Grid._regionUnion(newRegion, body.region);

		                // update grid buckets affected by region change
		                // iterate over the union of both regions
		                for (col = union.startCol; col <= union.endCol; col++) {
		                    for (row = union.startRow; row <= union.endRow; row++) {
		                        bucketId = Grid._getBucketId(col, row);
		                        bucket = buckets[bucketId];

		                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
		                                                && row >= newRegion.startRow && row <= newRegion.endRow);

		                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
		                                                && row >= body.region.startRow && row <= body.region.endRow);

		                        // remove from old region buckets
		                        if (!isInsideNewRegion && isInsideOldRegion) {
		                            if (isInsideOldRegion) {
		                                if (bucket)
		                                    Grid._bucketRemoveBody(grid, bucket, body);
		                            }
		                        }

		                        // add to new region buckets
		                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
		                            if (!bucket)
		                                bucket = Grid._createBucket(buckets, bucketId);
		                            Grid._bucketAddBody(grid, bucket, body);
		                        }
		                    }
		                }

		                // set the new region
		                body.region = newRegion;

		                // flag changes so we can update pairs
		                gridChanged = true;
		            }
		        }

		        // update pairs list only if pairs changed (i.e. a body changed region)
		        if (gridChanged)
		            grid.pairsList = Grid._createActivePairsList(grid);
		    };

		    deprecated(Grid, 'update', 'Grid.update ➤ replaced by Matter.Detector');

		    /**
		     * Clears the grid.
		     * @deprecated replaced by Matter.Detector
		     * @method clear
		     * @param {grid} grid
		     */
		    Grid.clear = function(grid) {
		        grid.buckets = {};
		        grid.pairs = {};
		        grid.pairsList = [];
		    };

		    deprecated(Grid, 'clear', 'Grid.clear ➤ replaced by Matter.Detector');

		    /**
		     * Finds the union of two regions.
		     * @method _regionUnion
		     * @deprecated replaced by Matter.Detector
		     * @private
		     * @param {} regionA
		     * @param {} regionB
		     * @return {} region
		     */
		    Grid._regionUnion = function(regionA, regionB) {
		        var startCol = Math.min(regionA.startCol, regionB.startCol),
		            endCol = Math.max(regionA.endCol, regionB.endCol),
		            startRow = Math.min(regionA.startRow, regionB.startRow),
		            endRow = Math.max(regionA.endRow, regionB.endRow);

		        return Grid._createRegion(startCol, endCol, startRow, endRow);
		    };

		    /**
		     * Gets the region a given body falls in for a given grid.
		     * @method _getRegion
		     * @deprecated replaced by Matter.Detector
		     * @private
		     * @param {} grid
		     * @param {} body
		     * @return {} region
		     */
		    Grid._getRegion = function(grid, body) {
		        var bounds = body.bounds,
		            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
		            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
		            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
		            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

		        return Grid._createRegion(startCol, endCol, startRow, endRow);
		    };

		    /**
		     * Creates a region.
		     * @method _createRegion
		     * @deprecated replaced by Matter.Detector
		     * @private
		     * @param {} startCol
		     * @param {} endCol
		     * @param {} startRow
		     * @param {} endRow
		     * @return {} region
		     */
		    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
		        return { 
		            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
		            startCol: startCol, 
		            endCol: endCol, 
		            startRow: startRow, 
		            endRow: endRow 
		        };
		    };

		    /**
		     * Gets the bucket id at the given position.
		     * @method _getBucketId
		     * @deprecated replaced by Matter.Detector
		     * @private
		     * @param {} column
		     * @param {} row
		     * @return {string} bucket id
		     */
		    Grid._getBucketId = function(column, row) {
		        return 'C' + column + 'R' + row;
		    };

		    /**
		     * Creates a bucket.
		     * @method _createBucket
		     * @deprecated replaced by Matter.Detector
		     * @private
		     * @param {} buckets
		     * @param {} bucketId
		     * @return {} bucket
		     */
		    Grid._createBucket = function(buckets, bucketId) {
		        var bucket = buckets[bucketId] = [];
		        return bucket;
		    };

		    /**
		     * Adds a body to a bucket.
		     * @method _bucketAddBody
		     * @deprecated replaced by Matter.Detector
		     * @private
		     * @param {} grid
		     * @param {} bucket
		     * @param {} body
		     */
		    Grid._bucketAddBody = function(grid, bucket, body) {
		        var gridPairs = grid.pairs,
		            pairId = Pair.id,
		            bucketLength = bucket.length,
		            i;

		        // add new pairs
		        for (i = 0; i < bucketLength; i++) {
		            var bodyB = bucket[i];

		            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
		                continue;

		            // keep track of the number of buckets the pair exists in
		            // important for Grid.update to work
		            var id = pairId(body, bodyB),
		                pair = gridPairs[id];

		            if (pair) {
		                pair[2] += 1;
		            } else {
		                gridPairs[id] = [body, bodyB, 1];
		            }
		        }

		        // add to bodies (after pairs, otherwise pairs with self)
		        bucket.push(body);
		    };

		    /**
		     * Removes a body from a bucket.
		     * @method _bucketRemoveBody
		     * @deprecated replaced by Matter.Detector
		     * @private
		     * @param {} grid
		     * @param {} bucket
		     * @param {} body
		     */
		    Grid._bucketRemoveBody = function(grid, bucket, body) {
		        var gridPairs = grid.pairs,
		            pairId = Pair.id,
		            i;

		        // remove from bucket
		        bucket.splice(Common.indexOf(bucket, body), 1);

		        var bucketLength = bucket.length;

		        // update pair counts
		        for (i = 0; i < bucketLength; i++) {
		            // keep track of the number of buckets the pair exists in
		            // important for _createActivePairsList to work
		            var pair = gridPairs[pairId(body, bucket[i])];

		            if (pair)
		                pair[2] -= 1;
		        }
		    };

		    /**
		     * Generates a list of the active pairs in the grid.
		     * @method _createActivePairsList
		     * @deprecated replaced by Matter.Detector
		     * @private
		     * @param {} grid
		     * @return [] pairs
		     */
		    Grid._createActivePairsList = function(grid) {
		        var pair,
		            gridPairs = grid.pairs,
		            pairKeys = Common.keys(gridPairs),
		            pairKeysLength = pairKeys.length,
		            pairs = [],
		            k;

		        // iterate over grid.pairs
		        for (k = 0; k < pairKeysLength; k++) {
		            pair = gridPairs[pairKeys[k]];

		            // if pair exists in at least one bucket
		            // it is a pair that needs further collision testing so push it
		            if (pair[2] > 0) {
		                pairs.push(pair);
		            } else {
		                delete gridPairs[pairKeys[k]];
		            }
		        }

		        return pairs;
		    };
		    
		})();


		/***/ }),
		/* 24 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
		* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class MouseConstraint
		*/

		var MouseConstraint = {};

		module.exports = MouseConstraint;

		var Vertices = __webpack_require__(3);
		var Sleeping = __webpack_require__(7);
		var Mouse = __webpack_require__(14);
		var Events = __webpack_require__(5);
		var Detector = __webpack_require__(13);
		var Constraint = __webpack_require__(10);
		var Composite = __webpack_require__(6);
		var Common = __webpack_require__(0);
		var Bounds = __webpack_require__(1);

		(function() {

		    /**
		     * Creates a new mouse constraint.
		     * All properties have default values, and many are pre-calculated automatically based on other properties.
		     * See the properties section below for detailed information on what you can pass via the `options` object.
		     * @method create
		     * @param {engine} engine
		     * @param {} options
		     * @return {MouseConstraint} A new MouseConstraint
		     */
		    MouseConstraint.create = function(engine, options) {
		        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

		        if (!mouse) {
		            if (engine && engine.render && engine.render.canvas) {
		                mouse = Mouse.create(engine.render.canvas);
		            } else if (options && options.element) {
		                mouse = Mouse.create(options.element);
		            } else {
		                mouse = Mouse.create();
		                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
		            }
		        }

		        var constraint = Constraint.create({ 
		            label: 'Mouse Constraint',
		            pointA: mouse.position,
		            pointB: { x: 0, y: 0 },
		            length: 0.01, 
		            stiffness: 0.1,
		            angularStiffness: 1,
		            render: {
		                strokeStyle: '#90EE90',
		                lineWidth: 3
		            }
		        });

		        var defaults = {
		            type: 'mouseConstraint',
		            mouse: mouse,
		            element: null,
		            body: null,
		            constraint: constraint,
		            collisionFilter: {
		                category: 0x0001,
		                mask: 0xFFFFFFFF,
		                group: 0
		            }
		        };

		        var mouseConstraint = Common.extend(defaults, options);

		        Events.on(engine, 'beforeUpdate', function() {
		            var allBodies = Composite.allBodies(engine.world);
		            MouseConstraint.update(mouseConstraint, allBodies);
		            MouseConstraint._triggerEvents(mouseConstraint);
		        });

		        return mouseConstraint;
		    };

		    /**
		     * Updates the given mouse constraint.
		     * @private
		     * @method update
		     * @param {MouseConstraint} mouseConstraint
		     * @param {body[]} bodies
		     */
		    MouseConstraint.update = function(mouseConstraint, bodies) {
		        var mouse = mouseConstraint.mouse,
		            constraint = mouseConstraint.constraint,
		            body = mouseConstraint.body;

		        if (mouse.button === 0) {
		            if (!constraint.bodyB) {
		                for (var i = 0; i < bodies.length; i++) {
		                    body = bodies[i];
		                    if (Bounds.contains(body.bounds, mouse.position) 
		                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
		                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
		                            var part = body.parts[j];
		                            if (Vertices.contains(part.vertices, mouse.position)) {
		                                constraint.pointA = mouse.position;
		                                constraint.bodyB = mouseConstraint.body = body;
		                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
		                                constraint.angleB = body.angle;

		                                Sleeping.set(body, false);
		                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

		                                break;
		                            }
		                        }
		                    }
		                }
		            } else {
		                Sleeping.set(constraint.bodyB, false);
		                constraint.pointA = mouse.position;
		            }
		        } else {
		            constraint.bodyB = mouseConstraint.body = null;
		            constraint.pointB = null;

		            if (body)
		                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
		        }
		    };

		    /**
		     * Triggers mouse constraint events.
		     * @method _triggerEvents
		     * @private
		     * @param {mouse} mouseConstraint
		     */
		    MouseConstraint._triggerEvents = function(mouseConstraint) {
		        var mouse = mouseConstraint.mouse,
		            mouseEvents = mouse.sourceEvents;

		        if (mouseEvents.mousemove)
		            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

		        if (mouseEvents.mousedown)
		            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

		        if (mouseEvents.mouseup)
		            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

		        // reset the mouse state ready for the next step
		        Mouse.clearSourceEvents(mouse);
		    };

		    /*
		    *
		    *  Events Documentation
		    *
		    */

		    /**
		    * Fired when the mouse has moved (or a touch moves) during the last step
		    *
		    * @event mousemove
		    * @param {} event An event object
		    * @param {mouse} event.mouse The engine's mouse instance
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired when the mouse is down (or a touch has started) during the last step
		    *
		    * @event mousedown
		    * @param {} event An event object
		    * @param {mouse} event.mouse The engine's mouse instance
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired when the mouse is up (or a touch has ended) during the last step
		    *
		    * @event mouseup
		    * @param {} event An event object
		    * @param {mouse} event.mouse The engine's mouse instance
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired when the user starts dragging a body
		    *
		    * @event startdrag
		    * @param {} event An event object
		    * @param {mouse} event.mouse The engine's mouse instance
		    * @param {body} event.body The body being dragged
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired when the user ends dragging a body
		    *
		    * @event enddrag
		    * @param {} event An event object
		    * @param {mouse} event.mouse The engine's mouse instance
		    * @param {body} event.body The body that has stopped being dragged
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * A `String` denoting the type of object.
		     *
		     * @property type
		     * @type string
		     * @default "constraint"
		     * @readOnly
		     */

		    /**
		     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
		     *
		     * @property mouse
		     * @type mouse
		     * @default mouse
		     */

		    /**
		     * The `Body` that is currently being moved by the user, or `null` if no body.
		     *
		     * @property body
		     * @type body
		     * @default null
		     */

		    /**
		     * The `Constraint` object that is used to move the body during interaction.
		     *
		     * @property constraint
		     * @type constraint
		     */

		    /**
		     * An `Object` that specifies the collision filter properties.
		     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
		     * See `body.collisionFilter` for more information.
		     *
		     * @property collisionFilter
		     * @type object
		     */

		})();


		/***/ }),
		/* 25 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Query` module contains methods for performing collision queries.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Query
		*/

		var Query = {};

		module.exports = Query;

		var Vector = __webpack_require__(2);
		var Collision = __webpack_require__(8);
		var Bounds = __webpack_require__(1);
		var Bodies = __webpack_require__(12);
		var Vertices = __webpack_require__(3);

		(function() {

		    /**
		     * Returns a list of collisions between `body` and `bodies`.
		     * @method collides
		     * @param {body} body
		     * @param {body[]} bodies
		     * @return {collision[]} Collisions
		     */
		    Query.collides = function(body, bodies) {
		        var collisions = [],
		            bodiesLength = bodies.length,
		            bounds = body.bounds,
		            collides = Collision.collides,
		            overlaps = Bounds.overlaps;

		        for (var i = 0; i < bodiesLength; i++) {
		            var bodyA = bodies[i],
		                partsALength = bodyA.parts.length,
		                partsAStart = partsALength === 1 ? 0 : 1;
		            
		            if (overlaps(bodyA.bounds, bounds)) {
		                for (var j = partsAStart; j < partsALength; j++) {
		                    var part = bodyA.parts[j];

		                    if (overlaps(part.bounds, bounds)) {
		                        var collision = collides(part, body);

		                        if (collision) {
		                            collisions.push(collision);
		                            break;
		                        }
		                    }
		                }
		            }
		        }

		        return collisions;
		    };

		    /**
		     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
		     * @method ray
		     * @param {body[]} bodies
		     * @param {vector} startPoint
		     * @param {vector} endPoint
		     * @param {number} [rayWidth]
		     * @return {collision[]} Collisions
		     */
		    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
		        rayWidth = rayWidth || 1e-100;

		        var rayAngle = Vector.angle(startPoint, endPoint),
		            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
		            rayX = (endPoint.x + startPoint.x) * 0.5,
		            rayY = (endPoint.y + startPoint.y) * 0.5,
		            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
		            collisions = Query.collides(ray, bodies);

		        for (var i = 0; i < collisions.length; i += 1) {
		            var collision = collisions[i];
		            collision.body = collision.bodyB = collision.bodyA;            
		        }

		        return collisions;
		    };

		    /**
		     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
		     * @method region
		     * @param {body[]} bodies
		     * @param {bounds} bounds
		     * @param {bool} [outside=false]
		     * @return {body[]} The bodies matching the query
		     */
		    Query.region = function(bodies, bounds, outside) {
		        var result = [];

		        for (var i = 0; i < bodies.length; i++) {
		            var body = bodies[i],
		                overlaps = Bounds.overlaps(body.bounds, bounds);
		            if ((overlaps && !outside) || (!overlaps && outside))
		                result.push(body);
		        }

		        return result;
		    };

		    /**
		     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
		     * @method point
		     * @param {body[]} bodies
		     * @param {vector} point
		     * @return {body[]} The bodies matching the query
		     */
		    Query.point = function(bodies, point) {
		        var result = [];

		        for (var i = 0; i < bodies.length; i++) {
		            var body = bodies[i];
		            
		            if (Bounds.contains(body.bounds, point)) {
		                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
		                    var part = body.parts[j];

		                    if (Bounds.contains(part.bounds, point)
		                        && Vertices.contains(part.vertices, point)) {
		                        result.push(body);
		                        break;
		                    }
		                }
		            }
		        }

		        return result;
		    };

		})();


		/***/ }),
		/* 26 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Render` module is a lightweight, optional utility which provides a simple canvas based renderer for visualising instances of `Matter.Engine`.
		* It is intended for development and debugging purposes, but may also be suitable for simple games.
		* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
		*
		* @class Render
		*/

		var Render = {};

		module.exports = Render;

		var Body = __webpack_require__(4);
		var Common = __webpack_require__(0);
		var Composite = __webpack_require__(6);
		var Bounds = __webpack_require__(1);
		var Events = __webpack_require__(5);
		var Vector = __webpack_require__(2);
		var Mouse = __webpack_require__(14);

		(function() {

		    var _requestAnimationFrame,
		        _cancelAnimationFrame;

		    if (typeof window !== 'undefined') {
		        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
		                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
		                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

		        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
		                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
		    }

		    Render._goodFps = 30;
		    Render._goodDelta = 1000 / 60;

		    /**
		     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
		     * All properties have default values, and many are pre-calculated automatically based on other properties.
		     * See the properties section below for detailed information on what you can pass via the `options` object.
		     * @method create
		     * @param {object} [options]
		     * @return {render} A new renderer
		     */
		    Render.create = function(options) {
		        var defaults = {
		            engine: null,
		            element: null,
		            canvas: null,
		            mouse: null,
		            frameRequestId: null,
		            timing: {
		                historySize: 60,
		                delta: 0,
		                deltaHistory: [],
		                lastTime: 0,
		                lastTimestamp: 0,
		                lastElapsed: 0,
		                timestampElapsed: 0,
		                timestampElapsedHistory: [],
		                engineDeltaHistory: [],
		                engineElapsedHistory: [],
		                engineUpdatesHistory: [],
		                elapsedHistory: []
		            },
		            options: {
		                width: 800,
		                height: 600,
		                pixelRatio: 1,
		                background: '#14151f',
		                wireframeBackground: '#14151f',
		                wireframeStrokeStyle: '#bbb',
		                hasBounds: !!options.bounds,
		                enabled: true,
		                wireframes: true,
		                showSleeping: true,
		                showDebug: false,
		                showStats: false,
		                showPerformance: false,
		                showBounds: false,
		                showVelocity: false,
		                showCollisions: false,
		                showSeparations: false,
		                showAxes: false,
		                showPositions: false,
		                showAngleIndicator: false,
		                showIds: false,
		                showVertexNumbers: false,
		                showConvexHulls: false,
		                showInternalEdges: false,
		                showMousePosition: false
		            }
		        };

		        var render = Common.extend(defaults, options);

		        if (render.canvas) {
		            render.canvas.width = render.options.width || render.canvas.width;
		            render.canvas.height = render.options.height || render.canvas.height;
		        }

		        render.mouse = options.mouse;
		        render.engine = options.engine;
		        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
		        render.context = render.canvas.getContext('2d');
		        render.textures = {};

		        render.bounds = render.bounds || {
		            min: {
		                x: 0,
		                y: 0
		            },
		            max: {
		                x: render.canvas.width,
		                y: render.canvas.height
		            }
		        };

		        // for temporary back compatibility only
		        render.controller = Render;
		        render.options.showBroadphase = false;

		        if (render.options.pixelRatio !== 1) {
		            Render.setPixelRatio(render, render.options.pixelRatio);
		        }

		        if (Common.isElement(render.element)) {
		            render.element.appendChild(render.canvas);
		        }

		        return render;
		    };

		    /**
		     * Continuously updates the render canvas on the `requestAnimationFrame` event.
		     * @method run
		     * @param {render} render
		     */
		    Render.run = function(render) {
		        (function loop(time){
		            render.frameRequestId = _requestAnimationFrame(loop);
		            
		            _updateTiming(render, time);

		            Render.world(render, time);

		            render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);

		            if (render.options.showStats || render.options.showDebug) {
		                Render.stats(render, render.context, time);
		            }

		            if (render.options.showPerformance || render.options.showDebug) {
		                Render.performance(render, render.context, time);
		            }

		            render.context.setTransform(1, 0, 0, 1, 0, 0);
		        })();
		    };

		    /**
		     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
		     * @method stop
		     * @param {render} render
		     */
		    Render.stop = function(render) {
		        _cancelAnimationFrame(render.frameRequestId);
		    };

		    /**
		     * Sets the pixel ratio of the renderer and updates the canvas.
		     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
		     * @method setPixelRatio
		     * @param {render} render
		     * @param {number} pixelRatio
		     */
		    Render.setPixelRatio = function(render, pixelRatio) {
		        var options = render.options,
		            canvas = render.canvas;

		        if (pixelRatio === 'auto') {
		            pixelRatio = _getPixelRatio(canvas);
		        }

		        options.pixelRatio = pixelRatio;
		        canvas.setAttribute('data-pixel-ratio', pixelRatio);
		        canvas.width = options.width * pixelRatio;
		        canvas.height = options.height * pixelRatio;
		        canvas.style.width = options.width + 'px';
		        canvas.style.height = options.height + 'px';
		    };

		    /**
		     * Sets the render `width` and `height`.
		     * 
		     * Updates the canvas accounting for `render.options.pixelRatio`.  
		     * 
		     * Updates the bottom right render bound `render.bounds.max` relative to the provided `width` and `height`.
		     * The top left render bound `render.bounds.min` isn't changed.
		     * 
		     * Follow this call with `Render.lookAt` if you need to change the render bounds.
		     * 
		     * See also `Render.setPixelRatio`.
		     * @method setSize
		     * @param {render} render
		     * @param {number} width The width (in CSS pixels)
		     * @param {number} height The height (in CSS pixels)
		     */
		    Render.setSize = function(render, width, height) {
		        render.options.width = width;
		        render.options.height = height;
		        render.bounds.max.x = render.bounds.min.x + width;
		        render.bounds.max.y = render.bounds.min.y + height;

		        if (render.options.pixelRatio !== 1) {
		            Render.setPixelRatio(render, render.options.pixelRatio);
		        } else {
		            render.canvas.width = width;
		            render.canvas.height = height;
		        }
		    };

		    /**
		     * Positions and sizes the viewport around the given object bounds.
		     * Objects must have at least one of the following properties:
		     * - `object.bounds`
		     * - `object.position`
		     * - `object.min` and `object.max`
		     * - `object.x` and `object.y`
		     * @method lookAt
		     * @param {render} render
		     * @param {object[]} objects
		     * @param {vector} [padding]
		     * @param {bool} [center=true]
		     */
		    Render.lookAt = function(render, objects, padding, center) {
		        center = typeof center !== 'undefined' ? center : true;
		        objects = Common.isArray(objects) ? objects : [objects];
		        padding = padding || {
		            x: 0,
		            y: 0
		        };

		        // find bounds of all objects
		        var bounds = {
		            min: { x: Infinity, y: Infinity },
		            max: { x: -Infinity, y: -Infinity }
		        };

		        for (var i = 0; i < objects.length; i += 1) {
		            var object = objects[i],
		                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
		                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

		            if (min && max) {
		                if (min.x < bounds.min.x)
		                    bounds.min.x = min.x;

		                if (max.x > bounds.max.x)
		                    bounds.max.x = max.x;

		                if (min.y < bounds.min.y)
		                    bounds.min.y = min.y;

		                if (max.y > bounds.max.y)
		                    bounds.max.y = max.y;
		            }
		        }

		        // find ratios
		        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
		            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
		            viewHeight = render.canvas.height,
		            viewWidth = render.canvas.width,
		            outerRatio = viewWidth / viewHeight,
		            innerRatio = width / height,
		            scaleX = 1,
		            scaleY = 1;

		        // find scale factor
		        if (innerRatio > outerRatio) {
		            scaleY = innerRatio / outerRatio;
		        } else {
		            scaleX = outerRatio / innerRatio;
		        }

		        // enable bounds
		        render.options.hasBounds = true;

		        // position and size
		        render.bounds.min.x = bounds.min.x;
		        render.bounds.max.x = bounds.min.x + width * scaleX;
		        render.bounds.min.y = bounds.min.y;
		        render.bounds.max.y = bounds.min.y + height * scaleY;

		        // center
		        if (center) {
		            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
		            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
		            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
		            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
		        }

		        // padding
		        render.bounds.min.x -= padding.x;
		        render.bounds.max.x -= padding.x;
		        render.bounds.min.y -= padding.y;
		        render.bounds.max.y -= padding.y;

		        // update mouse
		        if (render.mouse) {
		            Mouse.setScale(render.mouse, {
		                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
		                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
		            });

		            Mouse.setOffset(render.mouse, render.bounds.min);
		        }
		    };

		    /**
		     * Applies viewport transforms based on `render.bounds` to a render context.
		     * @method startViewTransform
		     * @param {render} render
		     */
		    Render.startViewTransform = function(render) {
		        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
		            boundsHeight = render.bounds.max.y - render.bounds.min.y,
		            boundsScaleX = boundsWidth / render.options.width,
		            boundsScaleY = boundsHeight / render.options.height;

		        render.context.setTransform(
		            render.options.pixelRatio / boundsScaleX, 0, 0, 
		            render.options.pixelRatio / boundsScaleY, 0, 0
		        );
		        
		        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
		    };

		    /**
		     * Resets all transforms on the render context.
		     * @method endViewTransform
		     * @param {render} render
		     */
		    Render.endViewTransform = function(render) {
		        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
		    };

		    /**
		     * Renders the given `engine`'s `Matter.World` object.
		     * This is the entry point for all rendering and should be called every time the scene changes.
		     * @method world
		     * @param {render} render
		     */
		    Render.world = function(render, time) {
		        var startTime = Common.now(),
		            engine = render.engine,
		            world = engine.world,
		            canvas = render.canvas,
		            context = render.context,
		            options = render.options,
		            timing = render.timing;

		        var allBodies = Composite.allBodies(world),
		            allConstraints = Composite.allConstraints(world),
		            background = options.wireframes ? options.wireframeBackground : options.background,
		            bodies = [],
		            constraints = [],
		            i;

		        var event = {
		            timestamp: engine.timing.timestamp
		        };

		        Events.trigger(render, 'beforeRender', event);

		        // apply background if it has changed
		        if (render.currentBackground !== background)
		            _applyBackground(render, background);

		        // clear the canvas with a transparent fill, to allow the canvas background to show
		        context.globalCompositeOperation = 'source-in';
		        context.fillStyle = "transparent";
		        context.fillRect(0, 0, canvas.width, canvas.height);
		        context.globalCompositeOperation = 'source-over';

		        // handle bounds
		        if (options.hasBounds) {
		            // filter out bodies that are not in view
		            for (i = 0; i < allBodies.length; i++) {
		                var body = allBodies[i];
		                if (Bounds.overlaps(body.bounds, render.bounds))
		                    bodies.push(body);
		            }

		            // filter out constraints that are not in view
		            for (i = 0; i < allConstraints.length; i++) {
		                var constraint = allConstraints[i],
		                    bodyA = constraint.bodyA,
		                    bodyB = constraint.bodyB,
		                    pointAWorld = constraint.pointA,
		                    pointBWorld = constraint.pointB;

		                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
		                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

		                if (!pointAWorld || !pointBWorld)
		                    continue;

		                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
		                    constraints.push(constraint);
		            }

		            // transform the view
		            Render.startViewTransform(render);

		            // update mouse
		            if (render.mouse) {
		                Mouse.setScale(render.mouse, {
		                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
		                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
		                });

		                Mouse.setOffset(render.mouse, render.bounds.min);
		            }
		        } else {
		            constraints = allConstraints;
		            bodies = allBodies;

		            if (render.options.pixelRatio !== 1) {
		                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
		            }
		        }

		        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
		            // fully featured rendering of bodies
		            Render.bodies(render, bodies, context);
		        } else {
		            if (options.showConvexHulls)
		                Render.bodyConvexHulls(render, bodies, context);

		            // optimised method for wireframes only
		            Render.bodyWireframes(render, bodies, context);
		        }

		        if (options.showBounds)
		            Render.bodyBounds(render, bodies, context);

		        if (options.showAxes || options.showAngleIndicator)
		            Render.bodyAxes(render, bodies, context);

		        if (options.showPositions)
		            Render.bodyPositions(render, bodies, context);

		        if (options.showVelocity)
		            Render.bodyVelocity(render, bodies, context);

		        if (options.showIds)
		            Render.bodyIds(render, bodies, context);

		        if (options.showSeparations)
		            Render.separations(render, engine.pairs.list, context);

		        if (options.showCollisions)
		            Render.collisions(render, engine.pairs.list, context);

		        if (options.showVertexNumbers)
		            Render.vertexNumbers(render, bodies, context);

		        if (options.showMousePosition)
		            Render.mousePosition(render, render.mouse, context);

		        Render.constraints(constraints, context);

		        if (options.hasBounds) {
		            // revert view transforms
		            Render.endViewTransform(render);
		        }

		        Events.trigger(render, 'afterRender', event);

		        // log the time elapsed computing this update
		        timing.lastElapsed = Common.now() - startTime;
		    };

		    /**
		     * Renders statistics about the engine and world useful for debugging.
		     * @private
		     * @method stats
		     * @param {render} render
		     * @param {RenderingContext} context
		     * @param {Number} time
		     */
		    Render.stats = function(render, context, time) {
		        var engine = render.engine,
		            world = engine.world,
		            bodies = Composite.allBodies(world),
		            parts = 0,
		            width = 55,
		            height = 44,
		            x = 0,
		            y = 0;
		        
		        // count parts
		        for (var i = 0; i < bodies.length; i += 1) {
		            parts += bodies[i].parts.length;
		        }

		        // sections
		        var sections = {
		            'Part': parts,
		            'Body': bodies.length,
		            'Cons': Composite.allConstraints(world).length,
		            'Comp': Composite.allComposites(world).length,
		            'Pair': engine.pairs.list.length
		        };

		        // background
		        context.fillStyle = '#0e0f19';
		        context.fillRect(x, y, width * 5.5, height);

		        context.font = '12px Arial';
		        context.textBaseline = 'top';
		        context.textAlign = 'right';

		        // sections
		        for (var key in sections) {
		            var section = sections[key];
		            // label
		            context.fillStyle = '#aaa';
		            context.fillText(key, x + width, y + 8);

		            // value
		            context.fillStyle = '#eee';
		            context.fillText(section, x + width, y + 26);

		            x += width;
		        }
		    };

		    /**
		     * Renders engine and render performance information.
		     * @private
		     * @method performance
		     * @param {render} render
		     * @param {RenderingContext} context
		     */
		    Render.performance = function(render, context) {
		        var engine = render.engine,
		            timing = render.timing,
		            deltaHistory = timing.deltaHistory,
		            elapsedHistory = timing.elapsedHistory,
		            timestampElapsedHistory = timing.timestampElapsedHistory,
		            engineDeltaHistory = timing.engineDeltaHistory,
		            engineUpdatesHistory = timing.engineUpdatesHistory,
		            engineElapsedHistory = timing.engineElapsedHistory,
		            lastEngineUpdatesPerFrame = engine.timing.lastUpdatesPerFrame,
		            lastEngineDelta = engine.timing.lastDelta;
		        
		        var deltaMean = _mean(deltaHistory),
		            elapsedMean = _mean(elapsedHistory),
		            engineDeltaMean = _mean(engineDeltaHistory),
		            engineUpdatesMean = _mean(engineUpdatesHistory),
		            engineElapsedMean = _mean(engineElapsedHistory),
		            timestampElapsedMean = _mean(timestampElapsedHistory),
		            rateMean = (timestampElapsedMean / deltaMean) || 0,
		            neededUpdatesPerFrame = Math.round(deltaMean / lastEngineDelta),
		            fps = (1000 / deltaMean) || 0;

		        var graphHeight = 4,
		            gap = 12,
		            width = 60,
		            height = 34,
		            x = 10,
		            y = 69;

		        // background
		        context.fillStyle = '#0e0f19';
		        context.fillRect(0, 50, gap * 5 + width * 6 + 22, height);

		        // show FPS
		        Render.status(
		            context, x, y, width, graphHeight, deltaHistory.length, 
		            Math.round(fps) + ' fps', 
		            fps / Render._goodFps,
		            function(i) { return (deltaHistory[i] / deltaMean) - 1; }
		        );

		        // show engine delta
		        Render.status(
		            context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length,
		            lastEngineDelta.toFixed(2) + ' dt', 
		            Render._goodDelta / lastEngineDelta,
		            function(i) { return (engineDeltaHistory[i] / engineDeltaMean) - 1; }
		        );

		        // show engine updates per frame
		        Render.status(
		            context, x + (gap + width) * 2, y, width, graphHeight, engineUpdatesHistory.length,
		            lastEngineUpdatesPerFrame + ' upf', 
		            Math.pow(Common.clamp((engineUpdatesMean / neededUpdatesPerFrame) || 1, 0, 1), 4),
		            function(i) { return (engineUpdatesHistory[i] / engineUpdatesMean) - 1; }
		        );

		        // show engine update time
		        Render.status(
		            context, x + (gap + width) * 3, y, width, graphHeight, engineElapsedHistory.length,
		            engineElapsedMean.toFixed(2) + ' ut', 
		            1 - (lastEngineUpdatesPerFrame * engineElapsedMean / Render._goodFps),
		            function(i) { return (engineElapsedHistory[i] / engineElapsedMean) - 1; }
		        );

		        // show render time
		        Render.status(
		            context, x + (gap + width) * 4, y, width, graphHeight, elapsedHistory.length,
		            elapsedMean.toFixed(2) + ' rt', 
		            1 - (elapsedMean / Render._goodFps),
		            function(i) { return (elapsedHistory[i] / elapsedMean) - 1; }
		        );

		        // show effective speed
		        Render.status(
		            context, x + (gap + width) * 5, y, width, graphHeight, timestampElapsedHistory.length, 
		            rateMean.toFixed(2) + ' x', 
		            rateMean * rateMean * rateMean,
		            function(i) { return (((timestampElapsedHistory[i] / deltaHistory[i]) / rateMean) || 0) - 1; }
		        );
		    };

		    /**
		     * Renders a label, indicator and a chart.
		     * @private
		     * @method status
		     * @param {RenderingContext} context
		     * @param {number} x
		     * @param {number} y
		     * @param {number} width
		     * @param {number} height
		     * @param {number} count
		     * @param {string} label
		     * @param {string} indicator
		     * @param {function} plotY
		     */
		    Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
		        // background
		        context.strokeStyle = '#888';
		        context.fillStyle = '#444';
		        context.lineWidth = 1;
		        context.fillRect(x, y + 7, width, 1);

		        // chart
		        context.beginPath();
		        context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
		        for (var i = 0; i < width; i += 1) {
		            context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
		        }
		        context.stroke();

		        // indicator
		        context.fillStyle = 'hsl(' + Common.clamp(25 + 95 * indicator, 0, 120) + ',100%,60%)';
		        context.fillRect(x, y - 7, 4, 4);

		        // label
		        context.font = '12px Arial';
		        context.textBaseline = 'middle';
		        context.textAlign = 'right';
		        context.fillStyle = '#eee';
		        context.fillText(label, x + width, y - 5);
		    };

		    /**
		     * Description
		     * @private
		     * @method constraints
		     * @param {constraint[]} constraints
		     * @param {RenderingContext} context
		     */
		    Render.constraints = function(constraints, context) {
		        var c = context;

		        for (var i = 0; i < constraints.length; i++) {
		            var constraint = constraints[i];

		            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
		                continue;

		            var bodyA = constraint.bodyA,
		                bodyB = constraint.bodyB,
		                start,
		                end;

		            if (bodyA) {
		                start = Vector.add(bodyA.position, constraint.pointA);
		            } else {
		                start = constraint.pointA;
		            }

		            if (constraint.render.type === 'pin') {
		                c.beginPath();
		                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
		                c.closePath();
		            } else {
		                if (bodyB) {
		                    end = Vector.add(bodyB.position, constraint.pointB);
		                } else {
		                    end = constraint.pointB;
		                }

		                c.beginPath();
		                c.moveTo(start.x, start.y);

		                if (constraint.render.type === 'spring') {
		                    var delta = Vector.sub(end, start),
		                        normal = Vector.perp(Vector.normalise(delta)),
		                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
		                        offset;

		                    for (var j = 1; j < coils; j += 1) {
		                        offset = j % 2 === 0 ? 1 : -1;

		                        c.lineTo(
		                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
		                            start.y + delta.y * (j / coils) + normal.y * offset * 4
		                        );
		                    }
		                }

		                c.lineTo(end.x, end.y);
		            }

		            if (constraint.render.lineWidth) {
		                c.lineWidth = constraint.render.lineWidth;
		                c.strokeStyle = constraint.render.strokeStyle;
		                c.stroke();
		            }

		            if (constraint.render.anchors) {
		                c.fillStyle = constraint.render.strokeStyle;
		                c.beginPath();
		                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
		                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
		                c.closePath();
		                c.fill();
		            }
		        }
		    };

		    /**
		     * Description
		     * @private
		     * @method bodies
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.bodies = function(render, bodies, context) {
		        var c = context;
		            render.engine;
		            var options = render.options,
		            showInternalEdges = options.showInternalEdges || !options.wireframes,
		            body,
		            part,
		            i,
		            k;

		        for (i = 0; i < bodies.length; i++) {
		            body = bodies[i];

		            if (!body.render.visible)
		                continue;

		            // handle compound parts
		            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
		                part = body.parts[k];

		                if (!part.render.visible)
		                    continue;

		                if (options.showSleeping && body.isSleeping) {
		                    c.globalAlpha = 0.5 * part.render.opacity;
		                } else if (part.render.opacity !== 1) {
		                    c.globalAlpha = part.render.opacity;
		                }

		                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
		                    // part sprite
		                    var sprite = part.render.sprite,
		                        texture = _getTexture(render, sprite.texture);

		                    c.translate(part.position.x, part.position.y);
		                    c.rotate(part.angle);

		                    c.drawImage(
		                        texture,
		                        texture.width * -sprite.xOffset * sprite.xScale,
		                        texture.height * -sprite.yOffset * sprite.yScale,
		                        texture.width * sprite.xScale,
		                        texture.height * sprite.yScale
		                    );

		                    // revert translation, hopefully faster than save / restore
		                    c.rotate(-part.angle);
		                    c.translate(-part.position.x, -part.position.y);
		                } else {
		                    // part polygon
		                    if (part.circleRadius) {
		                        c.beginPath();
		                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
		                    } else {
		                        c.beginPath();
		                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

		                        for (var j = 1; j < part.vertices.length; j++) {
		                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
		                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
		                            } else {
		                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
		                            }

		                            if (part.vertices[j].isInternal && !showInternalEdges) {
		                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
		                            }
		                        }

		                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
		                        c.closePath();
		                    }

		                    if (!options.wireframes) {
		                        c.fillStyle = part.render.fillStyle;

		                        if (part.render.lineWidth) {
		                            c.lineWidth = part.render.lineWidth;
		                            c.strokeStyle = part.render.strokeStyle;
		                            c.stroke();
		                        }

		                        c.fill();
		                    } else {
		                        c.lineWidth = 1;
		                        c.strokeStyle = render.options.wireframeStrokeStyle;
		                        c.stroke();
		                    }
		                }

		                c.globalAlpha = 1;
		            }
		        }
		    };

		    /**
		     * Optimised method for drawing body wireframes in one pass
		     * @private
		     * @method bodyWireframes
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.bodyWireframes = function(render, bodies, context) {
		        var c = context,
		            showInternalEdges = render.options.showInternalEdges,
		            body,
		            part,
		            i,
		            j,
		            k;

		        c.beginPath();

		        // render all bodies
		        for (i = 0; i < bodies.length; i++) {
		            body = bodies[i];

		            if (!body.render.visible)
		                continue;

		            // handle compound parts
		            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
		                part = body.parts[k];

		                c.moveTo(part.vertices[0].x, part.vertices[0].y);

		                for (j = 1; j < part.vertices.length; j++) {
		                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
		                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
		                    } else {
		                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
		                    }

		                    if (part.vertices[j].isInternal && !showInternalEdges) {
		                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
		                    }
		                }

		                c.lineTo(part.vertices[0].x, part.vertices[0].y);
		            }
		        }

		        c.lineWidth = 1;
		        c.strokeStyle = render.options.wireframeStrokeStyle;
		        c.stroke();
		    };

		    /**
		     * Optimised method for drawing body convex hull wireframes in one pass
		     * @private
		     * @method bodyConvexHulls
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.bodyConvexHulls = function(render, bodies, context) {
		        var c = context,
		            body,
		            i,
		            j;

		        c.beginPath();

		        // render convex hulls
		        for (i = 0; i < bodies.length; i++) {
		            body = bodies[i];

		            if (!body.render.visible || body.parts.length === 1)
		                continue;

		            c.moveTo(body.vertices[0].x, body.vertices[0].y);

		            for (j = 1; j < body.vertices.length; j++) {
		                c.lineTo(body.vertices[j].x, body.vertices[j].y);
		            }

		            c.lineTo(body.vertices[0].x, body.vertices[0].y);
		        }

		        c.lineWidth = 1;
		        c.strokeStyle = 'rgba(255,255,255,0.2)';
		        c.stroke();
		    };

		    /**
		     * Renders body vertex numbers.
		     * @private
		     * @method vertexNumbers
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.vertexNumbers = function(render, bodies, context) {
		        var c = context,
		            i,
		            j,
		            k;

		        for (i = 0; i < bodies.length; i++) {
		            var parts = bodies[i].parts;
		            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
		                var part = parts[k];
		                for (j = 0; j < part.vertices.length; j++) {
		                    c.fillStyle = 'rgba(255,255,255,0.2)';
		                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
		                }
		            }
		        }
		    };

		    /**
		     * Renders mouse position.
		     * @private
		     * @method mousePosition
		     * @param {render} render
		     * @param {mouse} mouse
		     * @param {RenderingContext} context
		     */
		    Render.mousePosition = function(render, mouse, context) {
		        var c = context;
		        c.fillStyle = 'rgba(255,255,255,0.8)';
		        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
		    };

		    /**
		     * Draws body bounds
		     * @private
		     * @method bodyBounds
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.bodyBounds = function(render, bodies, context) {
		        var c = context;
		            render.engine;
		            var options = render.options;

		        c.beginPath();

		        for (var i = 0; i < bodies.length; i++) {
		            var body = bodies[i];

		            if (body.render.visible) {
		                var parts = bodies[i].parts;
		                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
		                    var part = parts[j];
		                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
		                }
		            }
		        }

		        if (options.wireframes) {
		            c.strokeStyle = 'rgba(255,255,255,0.08)';
		        } else {
		            c.strokeStyle = 'rgba(0,0,0,0.1)';
		        }

		        c.lineWidth = 1;
		        c.stroke();
		    };

		    /**
		     * Draws body angle indicators and axes
		     * @private
		     * @method bodyAxes
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.bodyAxes = function(render, bodies, context) {
		        var c = context;
		            render.engine;
		            var options = render.options,
		            part,
		            i,
		            j,
		            k;

		        c.beginPath();

		        for (i = 0; i < bodies.length; i++) {
		            var body = bodies[i],
		                parts = body.parts;

		            if (!body.render.visible)
		                continue;

		            if (options.showAxes) {
		                // render all axes
		                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
		                    part = parts[j];
		                    for (k = 0; k < part.axes.length; k++) {
		                        var axis = part.axes[k];
		                        c.moveTo(part.position.x, part.position.y);
		                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
		                    }
		                }
		            } else {
		                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
		                    part = parts[j];
		                    for (k = 0; k < part.axes.length; k++) {
		                        // render a single axis indicator
		                        c.moveTo(part.position.x, part.position.y);
		                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
		                            (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
		                    }
		                }
		            }
		        }

		        if (options.wireframes) {
		            c.strokeStyle = 'indianred';
		            c.lineWidth = 1;
		        } else {
		            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
		            c.globalCompositeOperation = 'overlay';
		            c.lineWidth = 2;
		        }

		        c.stroke();
		        c.globalCompositeOperation = 'source-over';
		    };

		    /**
		     * Draws body positions
		     * @private
		     * @method bodyPositions
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.bodyPositions = function(render, bodies, context) {
		        var c = context;
		            render.engine;
		            var options = render.options,
		            body,
		            part,
		            i,
		            k;

		        c.beginPath();

		        // render current positions
		        for (i = 0; i < bodies.length; i++) {
		            body = bodies[i];

		            if (!body.render.visible)
		                continue;

		            // handle compound parts
		            for (k = 0; k < body.parts.length; k++) {
		                part = body.parts[k];
		                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
		                c.closePath();
		            }
		        }

		        if (options.wireframes) {
		            c.fillStyle = 'indianred';
		        } else {
		            c.fillStyle = 'rgba(0,0,0,0.5)';
		        }
		        c.fill();

		        c.beginPath();

		        // render previous positions
		        for (i = 0; i < bodies.length; i++) {
		            body = bodies[i];
		            if (body.render.visible) {
		                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
		                c.closePath();
		            }
		        }

		        c.fillStyle = 'rgba(255,165,0,0.8)';
		        c.fill();
		    };

		    /**
		     * Draws body velocity
		     * @private
		     * @method bodyVelocity
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.bodyVelocity = function(render, bodies, context) {
		        var c = context;

		        c.beginPath();

		        for (var i = 0; i < bodies.length; i++) {
		            var body = bodies[i];

		            if (!body.render.visible)
		                continue;

		            var velocity = Body.getVelocity(body);

		            c.moveTo(body.position.x, body.position.y);
		            c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
		        }

		        c.lineWidth = 3;
		        c.strokeStyle = 'cornflowerblue';
		        c.stroke();
		    };

		    /**
		     * Draws body ids
		     * @private
		     * @method bodyIds
		     * @param {render} render
		     * @param {body[]} bodies
		     * @param {RenderingContext} context
		     */
		    Render.bodyIds = function(render, bodies, context) {
		        var c = context,
		            i,
		            j;

		        for (i = 0; i < bodies.length; i++) {
		            if (!bodies[i].render.visible)
		                continue;

		            var parts = bodies[i].parts;
		            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
		                var part = parts[j];
		                c.font = "12px Arial";
		                c.fillStyle = 'rgba(255,255,255,0.5)';
		                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
		            }
		        }
		    };

		    /**
		     * Description
		     * @private
		     * @method collisions
		     * @param {render} render
		     * @param {pair[]} pairs
		     * @param {RenderingContext} context
		     */
		    Render.collisions = function(render, pairs, context) {
		        var c = context,
		            options = render.options,
		            pair,
		            collision,
		            i,
		            j;

		        c.beginPath();

		        // render collision positions
		        for (i = 0; i < pairs.length; i++) {
		            pair = pairs[i];

		            if (!pair.isActive)
		                continue;

		            collision = pair.collision;
		            for (j = 0; j < pair.contactCount; j++) {
		                var contact = pair.contacts[j],
		                    vertex = contact.vertex;
		                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
		            }
		        }

		        if (options.wireframes) {
		            c.fillStyle = 'rgba(255,255,255,0.7)';
		        } else {
		            c.fillStyle = 'orange';
		        }
		        c.fill();

		        c.beginPath();

		        // render collision normals
		        for (i = 0; i < pairs.length; i++) {
		            pair = pairs[i];

		            if (!pair.isActive)
		                continue;

		            collision = pair.collision;

		            if (pair.contactCount > 0) {
		                var normalPosX = pair.contacts[0].vertex.x,
		                    normalPosY = pair.contacts[0].vertex.y;

		                if (pair.contactCount === 2) {
		                    normalPosX = (pair.contacts[0].vertex.x + pair.contacts[1].vertex.x) / 2;
		                    normalPosY = (pair.contacts[0].vertex.y + pair.contacts[1].vertex.y) / 2;
		                }

		                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
		                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
		                } else {
		                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
		                }

		                c.lineTo(normalPosX, normalPosY);
		            }
		        }

		        if (options.wireframes) {
		            c.strokeStyle = 'rgba(255,165,0,0.7)';
		        } else {
		            c.strokeStyle = 'orange';
		        }

		        c.lineWidth = 1;
		        c.stroke();
		    };

		    /**
		     * Description
		     * @private
		     * @method separations
		     * @param {render} render
		     * @param {pair[]} pairs
		     * @param {RenderingContext} context
		     */
		    Render.separations = function(render, pairs, context) {
		        var c = context,
		            options = render.options,
		            pair,
		            collision,
		            bodyA,
		            bodyB,
		            i;

		        c.beginPath();

		        // render separations
		        for (i = 0; i < pairs.length; i++) {
		            pair = pairs[i];

		            if (!pair.isActive)
		                continue;

		            collision = pair.collision;
		            bodyA = collision.bodyA;
		            bodyB = collision.bodyB;

		            var k = 1;

		            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
		            if (bodyB.isStatic) k = 0;

		            c.moveTo(bodyB.position.x, bodyB.position.y);
		            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

		            k = 1;

		            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
		            if (bodyA.isStatic) k = 0;

		            c.moveTo(bodyA.position.x, bodyA.position.y);
		            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
		        }

		        if (options.wireframes) {
		            c.strokeStyle = 'rgba(255,165,0,0.5)';
		        } else {
		            c.strokeStyle = 'orange';
		        }
		        c.stroke();
		    };

		    /**
		     * Description
		     * @private
		     * @method inspector
		     * @param {inspector} inspector
		     * @param {RenderingContext} context
		     */
		    Render.inspector = function(inspector, context) {
		        inspector.engine;
		            var selected = inspector.selected,
		            render = inspector.render,
		            options = render.options,
		            bounds;

		        if (options.hasBounds) {
		            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
		                boundsHeight = render.bounds.max.y - render.bounds.min.y,
		                boundsScaleX = boundsWidth / render.options.width,
		                boundsScaleY = boundsHeight / render.options.height;

		            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
		            context.translate(-render.bounds.min.x, -render.bounds.min.y);
		        }

		        for (var i = 0; i < selected.length; i++) {
		            var item = selected[i].data;

		            context.translate(0.5, 0.5);
		            context.lineWidth = 1;
		            context.strokeStyle = 'rgba(255,165,0,0.9)';
		            context.setLineDash([1,2]);

		            switch (item.type) {

		            case 'body':

		                // render body selections
		                bounds = item.bounds;
		                context.beginPath();
		                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
		                    Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
		                context.closePath();
		                context.stroke();

		                break;

		            case 'constraint':

		                // render constraint selections
		                var point = item.pointA;
		                if (item.bodyA)
		                    point = item.pointB;
		                context.beginPath();
		                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
		                context.closePath();
		                context.stroke();

		                break;

		            }

		            context.setLineDash([]);
		            context.translate(-0.5, -0.5);
		        }

		        // render selection region
		        if (inspector.selectStart !== null) {
		            context.translate(0.5, 0.5);
		            context.lineWidth = 1;
		            context.strokeStyle = 'rgba(255,165,0,0.6)';
		            context.fillStyle = 'rgba(255,165,0,0.1)';
		            bounds = inspector.selectBounds;
		            context.beginPath();
		            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
		                Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
		            context.closePath();
		            context.stroke();
		            context.fill();
		            context.translate(-0.5, -0.5);
		        }

		        if (options.hasBounds)
		            context.setTransform(1, 0, 0, 1, 0, 0);
		    };

		    /**
		     * Updates render timing.
		     * @method _updateTiming
		     * @private
		     * @param {render} render
		     * @param {number} time
		     */
		    var _updateTiming = function(render, time) {
		        var engine = render.engine,
		            timing = render.timing,
		            historySize = timing.historySize,
		            timestamp = engine.timing.timestamp;

		        timing.delta = time - timing.lastTime || Render._goodDelta;
		        timing.lastTime = time;

		        timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
		        timing.lastTimestamp = timestamp;

		        timing.deltaHistory.unshift(timing.delta);
		        timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);

		        timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
		        timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);

		        timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
		        timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);

		        timing.engineUpdatesHistory.unshift(engine.timing.lastUpdatesPerFrame);
		        timing.engineUpdatesHistory.length = Math.min(timing.engineUpdatesHistory.length, historySize);

		        timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
		        timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);

		        timing.elapsedHistory.unshift(timing.lastElapsed);
		        timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
		    };

		    /**
		     * Returns the mean value of the given numbers.
		     * @method _mean
		     * @private
		     * @param {Number[]} values
		     * @return {Number} the mean of given values
		     */
		    var _mean = function(values) {
		        var result = 0;
		        for (var i = 0; i < values.length; i += 1) {
		            result += values[i];
		        }
		        return (result / values.length) || 0;
		    };

		    /**
		     * @method _createCanvas
		     * @private
		     * @param {} width
		     * @param {} height
		     * @return canvas
		     */
		    var _createCanvas = function(width, height) {
		        var canvas = document.createElement('canvas');
		        canvas.width = width;
		        canvas.height = height;
		        canvas.oncontextmenu = function() { return false; };
		        canvas.onselectstart = function() { return false; };
		        return canvas;
		    };

		    /**
		     * Gets the pixel ratio of the canvas.
		     * @method _getPixelRatio
		     * @private
		     * @param {HTMLElement} canvas
		     * @return {Number} pixel ratio
		     */
		    var _getPixelRatio = function(canvas) {
		        var context = canvas.getContext('2d'),
		            devicePixelRatio = window.devicePixelRatio || 1,
		            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
		                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
		                                      || context.backingStorePixelRatio || 1;

		        return devicePixelRatio / backingStorePixelRatio;
		    };

		    /**
		     * Gets the requested texture (an Image) via its path
		     * @method _getTexture
		     * @private
		     * @param {render} render
		     * @param {string} imagePath
		     * @return {Image} texture
		     */
		    var _getTexture = function(render, imagePath) {
		        var image = render.textures[imagePath];

		        if (image)
		            return image;

		        image = render.textures[imagePath] = new Image();
		        image.src = imagePath;

		        return image;
		    };

		    /**
		     * Applies the background to the canvas using CSS.
		     * @method applyBackground
		     * @private
		     * @param {render} render
		     * @param {string} background
		     */
		    var _applyBackground = function(render, background) {
		        var cssBackground = background;

		        if (/(jpg|gif|png)$/.test(background))
		            cssBackground = 'url(' + background + ')';

		        render.canvas.style.background = cssBackground;
		        render.canvas.style.backgroundSize = "contain";
		        render.currentBackground = background;
		    };

		    /*
		    *
		    *  Events Documentation
		    *
		    */

		    /**
		    * Fired before rendering
		    *
		    * @event beforeRender
		    * @param {} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired after rendering
		    *
		    * @event afterRender
		    * @param {} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * A back-reference to the `Matter.Render` module.
		     *
		     * @deprecated
		     * @property controller
		     * @type render
		     */

		    /**
		     * A reference to the `Matter.Engine` instance to be used.
		     *
		     * @property engine
		     * @type engine
		     */

		    /**
		     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
		     *
		     * @property element
		     * @type HTMLElement
		     * @default null
		     */

		    /**
		     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
		     *
		     * @property canvas
		     * @type HTMLCanvasElement
		     * @default null
		     */

		    /**
		     * A `Bounds` object that specifies the drawing view region.
		     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
		     * This allows for creating views that can pan or zoom around the scene.
		     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
		     *
		     * @property bounds
		     * @type bounds
		     */

		    /**
		     * The 2d rendering context from the `render.canvas` element.
		     *
		     * @property context
		     * @type CanvasRenderingContext2D
		     */

		    /**
		     * The sprite texture cache.
		     *
		     * @property textures
		     * @type {}
		     */

		    /**
		     * The mouse to render if `render.options.showMousePosition` is enabled.
		     *
		     * @property mouse
		     * @type mouse
		     * @default null
		     */

		    /**
		     * The configuration options of the renderer.
		     *
		     * @property options
		     * @type {}
		     */

		    /**
		     * The target width in pixels of the `render.canvas` to be created.
		     * See also the `options.pixelRatio` property to change render quality.
		     *
		     * @property options.width
		     * @type number
		     * @default 800
		     */

		    /**
		     * The target height in pixels of the `render.canvas` to be created.
		     * See also the `options.pixelRatio` property to change render quality.
		     *
		     * @property options.height
		     * @type number
		     * @default 600
		     */

		    /**
		     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
		     *
		     * @property options.pixelRatio
		     * @type number
		     * @default 1
		     */

		    /**
		     * A CSS background color string to use when `render.options.wireframes` is disabled.
		     * This may be also set to `'transparent'` or equivalent.
		     *
		     * @property options.background
		     * @type string
		     * @default '#14151f'
		     */

		    /**
		     * A CSS color string to use for background when `render.options.wireframes` is enabled.
		     * This may be also set to `'transparent'` or equivalent.
		     *
		     * @property options.wireframeBackground
		     * @type string
		     * @default '#14151f'
		     */

		    /**
		     * A CSS color string to use for stroke when `render.options.wireframes` is enabled.
		     * This may be also set to `'transparent'` or equivalent.
		     *
		     * @property options.wireframeStrokeStyle
		     * @type string
		     * @default '#bbb'
		     */

		    /**
		     * A flag that specifies if `render.bounds` should be used when rendering.
		     *
		     * @property options.hasBounds
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable all debug information overlays together.  
		     * This includes and has priority over the values of:
		     *
		     * - `render.options.showStats`
		     * - `render.options.showPerformance`
		     *
		     * @property options.showDebug
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the engine stats info overlay.  
		     * From left to right, the values shown are:
		     *
		     * - body parts total
		     * - body total
		     * - constraints total
		     * - composites total
		     * - collision pairs total
		     *
		     * @property options.showStats
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable performance charts.  
		     * From left to right, the values shown are:
		     *
		     * - average render frequency (e.g. 60 fps)
		     * - exact engine delta time used for last update (e.g. 16.66ms)
		     * - average updates per frame (e.g. 1)
		     * - average engine execution duration (e.g. 5.00ms)
		     * - average render execution duration (e.g. 0.40ms)
		     * - average effective play speed (e.g. '1.00x' is 'real-time')
		     *
		     * Each value is recorded over a fixed sample of past frames (60 frames).
		     *
		     * A chart shown below each value indicates the variance from the average over the sample.
		     * The more stable or fixed the value is the flatter the chart will appear.
		     *
		     * @property options.showPerformance
		     * @type boolean
		     * @default false
		     */
		    
		    /**
		     * A flag to enable or disable rendering entirely.
		     *
		     * @property options.enabled
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
		     *
		     * @property options.wireframes
		     * @type boolean
		     * @default true
		     */

		    /**
		     * A flag to enable or disable sleeping bodies indicators.
		     *
		     * @property options.showSleeping
		     * @type boolean
		     * @default true
		     */

		    /**
		     * A flag to enable or disable the debug information overlay.
		     *
		     * @property options.showDebug
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the collision broadphase debug overlay.
		     *
		     * @deprecated no longer implemented
		     * @property options.showBroadphase
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body bounds debug overlay.
		     *
		     * @property options.showBounds
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body velocity debug overlay.
		     *
		     * @property options.showVelocity
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body collisions debug overlay.
		     *
		     * @property options.showCollisions
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the collision resolver separations debug overlay.
		     *
		     * @property options.showSeparations
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body axes debug overlay.
		     *
		     * @property options.showAxes
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body positions debug overlay.
		     *
		     * @property options.showPositions
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body angle debug overlay.
		     *
		     * @property options.showAngleIndicator
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body and part ids debug overlay.
		     *
		     * @property options.showIds
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body vertex numbers debug overlay.
		     *
		     * @property options.showVertexNumbers
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body convex hulls debug overlay.
		     *
		     * @property options.showConvexHulls
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the body internal edges debug overlay.
		     *
		     * @property options.showInternalEdges
		     * @type boolean
		     * @default false
		     */

		    /**
		     * A flag to enable or disable the mouse position debug overlay.
		     *
		     * @property options.showMousePosition
		     * @type boolean
		     * @default false
		     */

		})();


		/***/ }),
		/* 27 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Runner` module is an optional utility that provides a game loop for running a `Matter.Engine` inside a browser environment.
		* A runner will continuously update a `Matter.Engine` whilst synchronising engine updates with the browser frame rate.
		* This runner favours a smoother user experience over perfect time keeping.
		* This runner is optional and is used for development and debugging but could be useful as a starting point for implementing some games and experiences.
		* Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation as may be needed inside other environments.
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Runner
		*/

		var Runner = {};

		module.exports = Runner;

		var Events = __webpack_require__(5);
		var Engine = __webpack_require__(17);
		var Common = __webpack_require__(0);

		(function() {

		    Runner._maxFrameDelta = 1000 / 15;
		    Runner._frameDeltaFallback = 1000 / 60;
		    Runner._timeBufferMargin = 1.5;
		    Runner._elapsedNextEstimate = 1;
		    Runner._smoothingLowerBound = 0.1;
		    Runner._smoothingUpperBound = 0.9;

		    /**
		     * Creates a new Runner. 
		     * See the properties section below for detailed information on what you can pass via the `options` object.
		     * @method create
		     * @param {} options
		     */
		    Runner.create = function(options) {
		        var defaults = {
		            delta: 1000 / 60,
		            frameDelta: null,
		            frameDeltaSmoothing: true,
		            frameDeltaSnapping: true,
		            frameDeltaHistory: [],
		            frameDeltaHistorySize: 100,
		            frameRequestId: null,
		            timeBuffer: 0,
		            timeLastTick: null,
		            maxUpdates: null,
		            maxFrameTime: 1000 / 30,
		            lastUpdatesDeferred: 0,
		            enabled: true
		        };

		        var runner = Common.extend(defaults, options);

		        // for temporary back compatibility only
		        runner.fps = 0;

		        return runner;
		    };

		    /**
		     * Runs a `Matter.Engine` whilst synchronising engine updates with the browser frame rate. 
		     * See module and properties descriptions for more information on this runner.
		     * Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation.
		     * @method run
		     * @param {runner} runner
		     * @param {engine} [engine]
		     * @return {runner} runner
		     */
		    Runner.run = function(runner, engine) {
		        // initial time buffer for the first frame
		        runner.timeBuffer = Runner._frameDeltaFallback;

		        (function onFrame(time){
		            runner.frameRequestId = Runner._onNextFrame(runner, onFrame);

		            if (time && runner.enabled) {
		                Runner.tick(runner, engine, time);
		            }
		        })();

		        return runner;
		    };

		    /**
		     * Performs a single runner tick as used inside `Runner.run`.
		     * See module and properties descriptions for more information on this runner.
		     * Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation.
		     * @method tick
		     * @param {runner} runner
		     * @param {engine} engine
		     * @param {number} time
		     */
		    Runner.tick = function(runner, engine, time) {
		        var tickStartTime = Common.now(),
		            engineDelta = runner.delta,
		            updateCount = 0;

		        // find frame delta time since last call
		        var frameDelta = time - runner.timeLastTick;

		        // fallback for unusable frame delta values (e.g. 0, NaN, on first frame or long pauses)
		        if (!frameDelta || !runner.timeLastTick || frameDelta > Math.max(Runner._maxFrameDelta, runner.maxFrameTime)) {
		            // reuse last accepted frame delta else fallback
		            frameDelta = runner.frameDelta || Runner._frameDeltaFallback;
		        }

		        if (runner.frameDeltaSmoothing) {
		            // record frame delta over a number of frames
		            runner.frameDeltaHistory.push(frameDelta);
		            runner.frameDeltaHistory = runner.frameDeltaHistory.slice(-runner.frameDeltaHistorySize);

		            // sort frame delta history
		            var deltaHistorySorted = runner.frameDeltaHistory.slice(0).sort();

		            // sample a central window to limit outliers
		            var deltaHistoryWindow = runner.frameDeltaHistory.slice(
		                deltaHistorySorted.length * Runner._smoothingLowerBound, 
		                deltaHistorySorted.length * Runner._smoothingUpperBound
		            );

		            // take the mean of the central window
		            var frameDeltaSmoothed = _mean(deltaHistoryWindow);
		            frameDelta = frameDeltaSmoothed || frameDelta;
		        }

		        if (runner.frameDeltaSnapping) {
		            // snap frame delta to the nearest 1 Hz
		            frameDelta = 1000 / Math.round(1000 / frameDelta);
		        }

		        // update runner values for next call
		        runner.frameDelta = frameDelta;
		        runner.timeLastTick = time;

		        // accumulate elapsed time
		        runner.timeBuffer += runner.frameDelta;

		        // limit time buffer size to a single frame of updates
		        runner.timeBuffer = Common.clamp(
		            runner.timeBuffer, 0, runner.frameDelta + engineDelta * Runner._timeBufferMargin
		        );

		        // reset count of over budget updates
		        runner.lastUpdatesDeferred = 0;

		        // get max updates per frame
		        var maxUpdates = runner.maxUpdates || Math.ceil(runner.maxFrameTime / engineDelta);

		        // create event object
		        var event = {
		            timestamp: engine.timing.timestamp
		        };

		        // tick events before update
		        Events.trigger(runner, 'beforeTick', event);
		        Events.trigger(runner, 'tick', event);

		        var updateStartTime = Common.now();

		        // simulate time elapsed between calls
		        while (engineDelta > 0 && runner.timeBuffer >= engineDelta * Runner._timeBufferMargin) {
		            // update the engine
		            Events.trigger(runner, 'beforeUpdate', event);
		            Engine.update(engine, engineDelta);
		            Events.trigger(runner, 'afterUpdate', event);

		            // consume time simulated from buffer
		            runner.timeBuffer -= engineDelta;
		            updateCount += 1;

		            // find elapsed time during this tick
		            var elapsedTimeTotal = Common.now() - tickStartTime,
		                elapsedTimeUpdates = Common.now() - updateStartTime,
		                elapsedNextEstimate = elapsedTimeTotal + Runner._elapsedNextEstimate * elapsedTimeUpdates / updateCount;

		            // defer updates if over performance budgets for this frame
		            if (updateCount >= maxUpdates || elapsedNextEstimate > runner.maxFrameTime) {
		                runner.lastUpdatesDeferred = Math.round(Math.max(0, (runner.timeBuffer / engineDelta) - Runner._timeBufferMargin));
		                break;
		            }
		        }

		        // track timing metrics
		        engine.timing.lastUpdatesPerFrame = updateCount;

		        // tick events after update
		        Events.trigger(runner, 'afterTick', event);

		        // show useful warnings if needed
		        if (runner.frameDeltaHistory.length >= 100) {
		            if (runner.lastUpdatesDeferred && Math.round(runner.frameDelta / engineDelta) > maxUpdates) {
		                Common.warnOnce('Matter.Runner: runner reached runner.maxUpdates, see docs.');
		            } else if (runner.lastUpdatesDeferred) {
		                Common.warnOnce('Matter.Runner: runner reached runner.maxFrameTime, see docs.');
		            }

		            if (typeof runner.isFixed !== 'undefined') {
		                Common.warnOnce('Matter.Runner: runner.isFixed is now redundant, see docs.');
		            }

		            if (runner.deltaMin || runner.deltaMax) {
		                Common.warnOnce('Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.');
		            }

		            if (runner.fps !== 0) {
		                Common.warnOnce('Matter.Runner: runner.fps was replaced by runner.delta, see docs.');
		            }
		        }
		    };

		    /**
		     * Ends execution of `Runner.run` on the given `runner` by canceling the frame loop.
		     * Alternatively to temporarily pause the runner, see `runner.enabled`.
		     * @method stop
		     * @param {runner} runner
		     */
		    Runner.stop = function(runner) {
		        Runner._cancelNextFrame(runner);
		    };

		    /**
		     * Schedules the `callback` on this `runner` for the next animation frame.
		     * @private
		     * @method _onNextFrame
		     * @param {runner} runner
		     * @param {function} callback
		     * @return {number} frameRequestId
		     */
		    Runner._onNextFrame = function(runner, callback) {
		        if (typeof window !== 'undefined' && window.requestAnimationFrame) {
		            runner.frameRequestId = window.requestAnimationFrame(callback);
		        } else {
		            throw new Error('Matter.Runner: missing required global window.requestAnimationFrame.');
		        }

		        return runner.frameRequestId;
		    };

		    /**
		     * Cancels the last callback scheduled by `Runner._onNextFrame` on this `runner`.
		     * @private
		     * @method _cancelNextFrame
		     * @param {runner} runner
		     */
		    Runner._cancelNextFrame = function(runner) {
		        if (typeof window !== 'undefined' && window.cancelAnimationFrame) {
		            window.cancelAnimationFrame(runner.frameRequestId);
		        } else {
		            throw new Error('Matter.Runner: missing required global window.cancelAnimationFrame.');
		        }
		    };

		    /**
		     * Returns the mean of the given numbers.
		     * @method _mean
		     * @private
		     * @param {Number[]} values
		     * @return {Number} the mean of given values.
		     */
		    var _mean = function(values) {
		        var result = 0,
		            valuesLength = values.length;

		        for (var i = 0; i < valuesLength; i += 1) {
		            result += values[i];
		        }

		        return (result / valuesLength) || 0;
		    };

		    /*
		    *
		    *  Events Documentation
		    *
		    */

		    /**
		    * Fired once at the start of the browser frame, before any engine updates.
		    *
		    * @event beforeTick
		    * @param {} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired once at the start of the browser frame, after `beforeTick`.
		    *
		    * @event tick
		    * @param {} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired once at the end of the browser frame, after `beforeTick`, `tick` and after any engine updates.
		    *
		    * @event afterTick
		    * @param {} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired before each and every engine update in this browser frame (if any). 
		    * There may be multiple engine update calls per browser frame (or none) depending on framerate and timestep delta.
		    *
		    * @event beforeUpdate
		    * @param {} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /**
		    * Fired after each and every engine update in this browser frame (if any). 
		    * There may be multiple engine update calls per browser frame (or none) depending on framerate and timestep delta.
		    *
		    * @event afterUpdate
		    * @param {} event An event object
		    * @param {number} event.timestamp The engine.timing.timestamp of the event
		    * @param {} event.source The source object of the event
		    * @param {} event.name The name of the event
		    */

		    /*
		    *
		    *  Properties Documentation
		    *
		    */

		    /**
		     * The fixed timestep size used for `Engine.update` calls in milliseconds, known as `delta`.
		     * 
		     * This value is recommended to be `1000 / 60` ms or smaller (i.e. equivalent to at least 60hz).
		     * 
		     * Smaller `delta` values provide higher quality results at the cost of performance.
		     * 
		     * You should usually avoid changing `delta` during running, otherwise quality may be affected. 
		     * 
		     * For smoother frame pacing choose a `delta` that is an even multiple of each display FPS you target, i.e. `1000 / (n * fps)` as this helps distribute an equal number of updates over each display frame.
		     * 
		     * For example with a 60 Hz `delta` i.e. `1000 / 60` the runner will on average perform one update per frame on displays running 60 FPS and one update every two frames on displays running 120 FPS, etc.
		     * 
		     * Where as e.g. using a 240 Hz `delta` i.e. `1000 / 240` the runner will on average perform four updates per frame on displays running 60 FPS and two updates per frame on displays running 120 FPS, etc.
		     * 
		     * Therefore `Runner.run` will call multiple engine updates (or none) as needed to simulate the time elapsed between browser frames. 
		     * 
		     * In practice the number of updates in any particular frame may be restricted to respect the runner's performance budgets. These are specified by `runner.maxFrameTime` and `runner.maxUpdates`, see those properties for details.
		     * 
		     * @property delta
		     * @type number
		     * @default 1000 / 60
		     */

		    /**
		     * A flag that can be toggled to enable or disable tick calls on this runner, therefore pausing engine updates and events while the runner loop remains running.
		     *
		     * @property enabled
		     * @type boolean
		     * @default true
		     */

		    /**
		     * The accumulated time elapsed that has yet to be simulated in milliseconds.
		     * This value is clamped within certain limits (see `Runner.tick` code).
		     *
		     * @private
		     * @property timeBuffer
		     * @type number
		     * @default 0
		     */

		    /**
		     * The measured time elapsed between the last two browser frames measured in milliseconds.
		     * This is useful e.g. to estimate the current browser FPS using `1000 / runner.frameDelta`.
		     *
		     * @readonly
		     * @property frameDelta
		     * @type number
		     */

		    /**
		     * Enables averaging to smooth frame rate measurements and therefore stabilise play rate.
		     *
		     * @property frameDeltaSmoothing
		     * @type boolean
		     * @default true
		     */

		    /**
		     * Rounds measured browser frame delta to the nearest 1 Hz.
		     * This option can help smooth frame rate measurements and simplify handling hardware timing differences e.g. 59.94Hz and 60Hz displays.
		     * For best results you should also round your `runner.delta` equivalent to the nearest 1 Hz.
		     *
		     * @property frameDeltaSnapping
		     * @type boolean
		     * @default true
		     */

		    /**
		     * A performance budget that limits execution time allowed for this runner per browser frame in milliseconds.
		     * 
		     * To calculate the effective browser FPS at which this throttle is applied use `1000 / runner.maxFrameTime`.
		     * 
		     * This performance budget is intended to help maintain browser interactivity and help improve framerate recovery during temporary high CPU usage.
		     * 
		     * This budget only covers the measured time elapsed executing the functions called in the scope of the runner tick, including `Engine.update` and its related user event callbacks.
		     * 
		     * You may also reduce this budget to allow for any significant additional processing you perform on the same thread outside the scope of this runner tick, e.g. rendering time.
		     * 
		     * See also `runner.maxUpdates`.
		     *
		     * @property maxFrameTime
		     * @type number
		     * @default 1000 / 30
		     */

		    /**
		     * An optional limit for maximum engine update count allowed per frame tick in addition to `runner.maxFrameTime`.
		     * 
		     * Unless you set a value it is automatically chosen based on `runner.delta` and `runner.maxFrameTime`.
		     * 
		     * See also `runner.maxFrameTime`.
		     * 
		     * @property maxUpdates
		     * @type number
		     * @default null
		     */

		    /**
		     * The timestamp of the last call to `Runner.tick` used to measure `frameDelta`.
		     *
		     * @private
		     * @property timeLastTick
		     * @type number
		     * @default 0
		     */

		    /**
		     * The id of the last call to `Runner._onNextFrame`.
		     *
		     * @private
		     * @property frameRequestId
		     * @type number
		     * @default null
		     */

		})();


		/***/ }),
		/* 28 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* This module has now been replaced by `Matter.Collision`.
		*
		* All usage should be migrated to `Matter.Collision`.
		* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
		*
		* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
		*
		* @class SAT
		* @deprecated
		*/

		var SAT = {};

		module.exports = SAT;

		var Collision = __webpack_require__(8);
		var Common = __webpack_require__(0);
		var deprecated = Common.deprecated;

		(function() {

		    /**
		     * Detect collision between two bodies using the Separating Axis Theorem.
		     * @deprecated replaced by Collision.collides
		     * @method collides
		     * @param {body} bodyA
		     * @param {body} bodyB
		     * @return {collision} collision
		     */
		    SAT.collides = function(bodyA, bodyB) {
		        return Collision.collides(bodyA, bodyB);
		    };

		    deprecated(SAT, 'collides', 'SAT.collides ➤ replaced by Collision.collides');

		})();


		/***/ }),
		/* 29 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
		*
		* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
		*
		* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
		*
		* @class Svg
		*/

		var Svg = {};

		module.exports = Svg;

		__webpack_require__(1);
		var Common = __webpack_require__(0);

		(function() {

		    /**
		     * Converts an SVG path into an array of vector points.
		     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
		     * See `Bodies.fromVertices` which provides support for this.
		     * Note that this function is not guaranteed to support complex paths (such as those with holes).
		     * You must load the `pathseg.js` polyfill on newer browsers.
		     * @method pathToVertices
		     * @param {SVGPathElement} path
		     * @param {Number} [sampleLength=15]
		     * @return {Vector[]} points
		     */
		    Svg.pathToVertices = function(path, sampleLength) {
		        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
		            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
		        }

		        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
		        var i, il, total, point, segment, segments, 
		            segmentsQueue, lastSegment, 
		            lastPoint, segmentIndex, points = [],
		            lx, ly, length = 0, x = 0, y = 0;

		        sampleLength = sampleLength || 15;

		        var addPoint = function(px, py, pathSegType) {
		            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
		            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

		            // when the last point doesn't equal the current point add the current point
		            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
		                if (lastPoint && isRelative) {
		                    lx = lastPoint.x;
		                    ly = lastPoint.y;
		                } else {
		                    lx = 0;
		                    ly = 0;
		                }

		                var point = {
		                    x: lx + px,
		                    y: ly + py
		                };

		                // set last point
		                if (isRelative || !lastPoint) {
		                    lastPoint = point;
		                }

		                points.push(point);

		                x = lx + px;
		                y = ly + py;
		            }
		        };

		        var addSegmentPoint = function(segment) {
		            var segType = segment.pathSegTypeAsLetter.toUpperCase();

		            // skip path ends
		            if (segType === 'Z') 
		                return;

		            // map segment to x and y
		            switch (segType) {

		            case 'M':
		            case 'L':
		            case 'T':
		            case 'C':
		            case 'S':
		            case 'Q':
		                x = segment.x;
		                y = segment.y;
		                break;
		            case 'H':
		                x = segment.x;
		                break;
		            case 'V':
		                y = segment.y;
		                break;
		            }

		            addPoint(x, y, segment.pathSegType);
		        };

		        // ensure path is absolute
		        Svg._svgPathToAbsolute(path);

		        // get total length
		        total = path.getTotalLength();

		        // queue segments
		        segments = [];
		        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
		            segments.push(path.pathSegList.getItem(i));

		        segmentsQueue = segments.concat();

		        // sample through path
		        while (length < total) {
		            // get segment at position
		            segmentIndex = path.getPathSegAtLength(length);
		            segment = segments[segmentIndex];

		            // new segment
		            if (segment != lastSegment) {
		                while (segmentsQueue.length && segmentsQueue[0] != segment)
		                    addSegmentPoint(segmentsQueue.shift());

		                lastSegment = segment;
		            }

		            // add points in between when curving
		            // TODO: adaptive sampling
		            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

		            case 'C':
		            case 'T':
		            case 'S':
		            case 'Q':
		            case 'A':
		                point = path.getPointAtLength(length);
		                addPoint(point.x, point.y, 0);
		                break;

		            }

		            // increment by sample value
		            length += sampleLength;
		        }

		        // add remaining segments not passed by sampling
		        for (i = 0, il = segmentsQueue.length; i < il; ++i)
		            addSegmentPoint(segmentsQueue[i]);

		        return points;
		    };

		    Svg._svgPathToAbsolute = function(path) {
		        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
		        // Copyright (c) Gavin Kistner
		        // http://phrogz.net/js/_ReuseLicense.txt
		        // Modifications: tidy formatting and naming
		        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
		            x = 0, y = 0, len = segs.numberOfItems;

		        for (var i = 0; i < len; ++i) {
		            var seg = segs.getItem(i),
		                segType = seg.pathSegTypeAsLetter;

		            if (/[MLHVCSQTA]/.test(segType)) {
		                if ('x' in seg) x = seg.x;
		                if ('y' in seg) y = seg.y;
		            } else {
		                if ('x1' in seg) x1 = x + seg.x1;
		                if ('x2' in seg) x2 = x + seg.x2;
		                if ('y1' in seg) y1 = y + seg.y1;
		                if ('y2' in seg) y2 = y + seg.y2;
		                if ('x' in seg) x += seg.x;
		                if ('y' in seg) y += seg.y;

		                switch (segType) {

		                case 'm':
		                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
		                    break;
		                case 'l':
		                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
		                    break;
		                case 'h':
		                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
		                    break;
		                case 'v':
		                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
		                    break;
		                case 'c':
		                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
		                    break;
		                case 's':
		                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
		                    break;
		                case 'q':
		                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
		                    break;
		                case 't':
		                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
		                    break;
		                case 'a':
		                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
		                    break;
		                case 'z':
		                case 'Z':
		                    x = x0;
		                    y = y0;
		                    break;

		                }
		            }

		            if (segType == 'M' || segType == 'm') {
		                x0 = x;
		                y0 = y;
		            }
		        }
		    };

		})();

		/***/ }),
		/* 30 */
		/***/ (function(module, exports, __webpack_require__) {

		/**
		* This module has now been replaced by `Matter.Composite`.
		*
		* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
		* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
		*
		* The property `world.gravity` has been moved to `engine.gravity`.
		*
		* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
		* Eventually this alias module will be marked as deprecated and then later removed in a future release.
		*
		* @class World
		*/

		var World = {};

		module.exports = World;

		var Composite = __webpack_require__(6);
		__webpack_require__(0);

		(function() {

		    /**
		     * See above, aliases for back compatibility only
		     */
		    World.create = Composite.create;
		    World.add = Composite.add;
		    World.remove = Composite.remove;
		    World.clear = Composite.clear;
		    World.addComposite = Composite.addComposite;
		    World.addBody = Composite.addBody;
		    World.addConstraint = Composite.addConstraint;

		})();


		/***/ })
		/******/ ]);
		}); 
	} (matter$1));
	return matter$1.exports;
}

var matterExports = requireMatter();
var Matter = /*@__PURE__*/getDefaultExportFromCjs(matterExports);

var opentype$1 = {exports: {}};

var opentype_1 = opentype$1.exports;

var hasRequiredOpentype;

function requireOpentype () {
	if (hasRequiredOpentype) return opentype$1.exports;
	hasRequiredOpentype = 1;
	(function (module) {
		var opentype = (() => {
		  var __defProp = Object.defineProperty;
		  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		  var __getOwnPropNames = Object.getOwnPropertyNames;
		  var __hasOwnProp = Object.prototype.hasOwnProperty;
		  var __export = (target, all) => {
		    for (var name in all)
		      __defProp(target, name, { get: all[name], enumerable: true });
		  };
		  var __copyProps = (to, from, except, desc) => {
		    if (from && typeof from === "object" || typeof from === "function") {
		      for (let key of __getOwnPropNames(from))
		        if (!__hasOwnProp.call(to, key) && key !== except)
		          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
		    }
		    return to;
		  };
		  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

		  // src/opentype.mjs
		  var opentype_exports = {};
		  __export(opentype_exports, {
		    BoundingBox: () => bbox_default,
		    Font: () => font_default,
		    Glyph: () => glyph_default,
		    Path: () => path_default,
		    _parse: () => parse_default,
		    load: () => load,
		    loadSync: () => loadSync,
		    parse: () => parseBuffer
		  });

		  // src/tiny-inflate@1.0.3.esm.mjs
		  var TINF_OK = 0;
		  var TINF_DATA_ERROR = -3;
		  function Tree() {
		    this.table = new Uint16Array(16);
		    this.trans = new Uint16Array(288);
		  }
		  function Data(source, dest) {
		    this.source = source;
		    this.sourceIndex = 0;
		    this.tag = 0;
		    this.bitcount = 0;
		    this.dest = dest;
		    this.destLen = 0;
		    this.ltree = new Tree();
		    this.dtree = new Tree();
		  }
		  var sltree = new Tree();
		  var sdtree = new Tree();
		  var length_bits = new Uint8Array(30);
		  var length_base = new Uint16Array(30);
		  var dist_bits = new Uint8Array(30);
		  var dist_base = new Uint16Array(30);
		  var clcidx = new Uint8Array([
		    16,
		    17,
		    18,
		    0,
		    8,
		    7,
		    9,
		    6,
		    10,
		    5,
		    11,
		    4,
		    12,
		    3,
		    13,
		    2,
		    14,
		    1,
		    15
		  ]);
		  var code_tree = new Tree();
		  var lengths = new Uint8Array(288 + 32);
		  function tinf_build_bits_base(bits, base, delta, first) {
		    var i, sum;
		    for (i = 0; i < delta; ++i) bits[i] = 0;
		    for (i = 0; i < 30 - delta; ++i) bits[i + delta] = i / delta | 0;
		    for (sum = first, i = 0; i < 30; ++i) {
		      base[i] = sum;
		      sum += 1 << bits[i];
		    }
		  }
		  function tinf_build_fixed_trees(lt, dt) {
		    var i;
		    for (i = 0; i < 7; ++i) lt.table[i] = 0;
		    lt.table[7] = 24;
		    lt.table[8] = 152;
		    lt.table[9] = 112;
		    for (i = 0; i < 24; ++i) lt.trans[i] = 256 + i;
		    for (i = 0; i < 144; ++i) lt.trans[24 + i] = i;
		    for (i = 0; i < 8; ++i) lt.trans[24 + 144 + i] = 280 + i;
		    for (i = 0; i < 112; ++i) lt.trans[24 + 144 + 8 + i] = 144 + i;
		    for (i = 0; i < 5; ++i) dt.table[i] = 0;
		    dt.table[5] = 32;
		    for (i = 0; i < 32; ++i) dt.trans[i] = i;
		  }
		  var offs = new Uint16Array(16);
		  function tinf_build_tree(t, lengths2, off, num) {
		    var i, sum;
		    for (i = 0; i < 16; ++i) t.table[i] = 0;
		    for (i = 0; i < num; ++i) t.table[lengths2[off + i]]++;
		    t.table[0] = 0;
		    for (sum = 0, i = 0; i < 16; ++i) {
		      offs[i] = sum;
		      sum += t.table[i];
		    }
		    for (i = 0; i < num; ++i) {
		      if (lengths2[off + i]) t.trans[offs[lengths2[off + i]]++] = i;
		    }
		  }
		  function tinf_getbit(d) {
		    if (!d.bitcount--) {
		      d.tag = d.source[d.sourceIndex++];
		      d.bitcount = 7;
		    }
		    var bit = d.tag & 1;
		    d.tag >>>= 1;
		    return bit;
		  }
		  function tinf_read_bits(d, num, base) {
		    if (!num)
		      return base;
		    while (d.bitcount < 24) {
		      d.tag |= d.source[d.sourceIndex++] << d.bitcount;
		      d.bitcount += 8;
		    }
		    var val = d.tag & 65535 >>> 16 - num;
		    d.tag >>>= num;
		    d.bitcount -= num;
		    return val + base;
		  }
		  function tinf_decode_symbol(d, t) {
		    while (d.bitcount < 24) {
		      d.tag |= d.source[d.sourceIndex++] << d.bitcount;
		      d.bitcount += 8;
		    }
		    var sum = 0, cur = 0, len = 0;
		    var tag = d.tag;
		    do {
		      cur = 2 * cur + (tag & 1);
		      tag >>>= 1;
		      ++len;
		      sum += t.table[len];
		      cur -= t.table[len];
		    } while (cur >= 0);
		    d.tag = tag;
		    d.bitcount -= len;
		    return t.trans[sum + cur];
		  }
		  function tinf_decode_trees(d, lt, dt) {
		    var hlit, hdist, hclen;
		    var i, num, length;
		    hlit = tinf_read_bits(d, 5, 257);
		    hdist = tinf_read_bits(d, 5, 1);
		    hclen = tinf_read_bits(d, 4, 4);
		    for (i = 0; i < 19; ++i) lengths[i] = 0;
		    for (i = 0; i < hclen; ++i) {
		      var clen = tinf_read_bits(d, 3, 0);
		      lengths[clcidx[i]] = clen;
		    }
		    tinf_build_tree(code_tree, lengths, 0, 19);
		    for (num = 0; num < hlit + hdist; ) {
		      var sym = tinf_decode_symbol(d, code_tree);
		      switch (sym) {
		        case 16:
		          var prev = lengths[num - 1];
		          for (length = tinf_read_bits(d, 2, 3); length; --length) {
		            lengths[num++] = prev;
		          }
		          break;
		        case 17:
		          for (length = tinf_read_bits(d, 3, 3); length; --length) {
		            lengths[num++] = 0;
		          }
		          break;
		        case 18:
		          for (length = tinf_read_bits(d, 7, 11); length; --length) {
		            lengths[num++] = 0;
		          }
		          break;
		        default:
		          lengths[num++] = sym;
		          break;
		      }
		    }
		    tinf_build_tree(lt, lengths, 0, hlit);
		    tinf_build_tree(dt, lengths, hlit, hdist);
		  }
		  function tinf_inflate_block_data(d, lt, dt) {
		    for (; ; ) {
		      var sym = tinf_decode_symbol(d, lt);
		      if (sym === 256) {
		        return TINF_OK;
		      }
		      if (sym < 256) {
		        d.dest[d.destLen++] = sym;
		      } else {
		        var length, dist, offs2;
		        var i;
		        sym -= 257;
		        length = tinf_read_bits(d, length_bits[sym], length_base[sym]);
		        dist = tinf_decode_symbol(d, dt);
		        offs2 = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);
		        for (i = offs2; i < offs2 + length; ++i) {
		          d.dest[d.destLen++] = d.dest[i];
		        }
		      }
		    }
		  }
		  function tinf_inflate_uncompressed_block(d) {
		    var length, invlength;
		    var i;
		    while (d.bitcount > 8) {
		      d.sourceIndex--;
		      d.bitcount -= 8;
		    }
		    length = d.source[d.sourceIndex + 1];
		    length = 256 * length + d.source[d.sourceIndex];
		    invlength = d.source[d.sourceIndex + 3];
		    invlength = 256 * invlength + d.source[d.sourceIndex + 2];
		    if (length !== (~invlength & 65535))
		      return TINF_DATA_ERROR;
		    d.sourceIndex += 4;
		    for (i = length; i; --i)
		      d.dest[d.destLen++] = d.source[d.sourceIndex++];
		    d.bitcount = 0;
		    return TINF_OK;
		  }
		  function tinf_uncompress(source, dest) {
		    var d = new Data(source, dest);
		    var bfinal, btype, res;
		    do {
		      bfinal = tinf_getbit(d);
		      btype = tinf_read_bits(d, 2, 0);
		      switch (btype) {
		        case 0:
		          res = tinf_inflate_uncompressed_block(d);
		          break;
		        case 1:
		          res = tinf_inflate_block_data(d, sltree, sdtree);
		          break;
		        case 2:
		          tinf_decode_trees(d, d.ltree, d.dtree);
		          res = tinf_inflate_block_data(d, d.ltree, d.dtree);
		          break;
		        default:
		          res = TINF_DATA_ERROR;
		      }
		      if (res !== TINF_OK)
		        throw new Error("Data error");
		    } while (!bfinal);
		    if (d.destLen < d.dest.length) {
		      if (typeof d.dest.slice === "function")
		        return d.dest.slice(0, d.destLen);
		      else
		        return d.dest.subarray(0, d.destLen);
		    }
		    return d.dest;
		  }
		  tinf_build_fixed_trees(sltree, sdtree);
		  tinf_build_bits_base(length_bits, length_base, 4, 3);
		  tinf_build_bits_base(dist_bits, dist_base, 2, 1);
		  length_bits[28] = 0;
		  length_base[28] = 258;

		  // src/bbox.mjs
		  function derive(v0, v1, v2, v3, t) {
		    return Math.pow(1 - t, 3) * v0 + 3 * Math.pow(1 - t, 2) * t * v1 + 3 * (1 - t) * Math.pow(t, 2) * v2 + Math.pow(t, 3) * v3;
		  }
		  function BoundingBox() {
		    this.x1 = Number.NaN;
		    this.y1 = Number.NaN;
		    this.x2 = Number.NaN;
		    this.y2 = Number.NaN;
		  }
		  BoundingBox.prototype.isEmpty = function() {
		    return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
		  };
		  BoundingBox.prototype.addPoint = function(x, y) {
		    if (typeof x === "number") {
		      if (isNaN(this.x1) || isNaN(this.x2)) {
		        this.x1 = x;
		        this.x2 = x;
		      }
		      if (x < this.x1) {
		        this.x1 = x;
		      }
		      if (x > this.x2) {
		        this.x2 = x;
		      }
		    }
		    if (typeof y === "number") {
		      if (isNaN(this.y1) || isNaN(this.y2)) {
		        this.y1 = y;
		        this.y2 = y;
		      }
		      if (y < this.y1) {
		        this.y1 = y;
		      }
		      if (y > this.y2) {
		        this.y2 = y;
		      }
		    }
		  };
		  BoundingBox.prototype.addX = function(x) {
		    this.addPoint(x, null);
		  };
		  BoundingBox.prototype.addY = function(y) {
		    this.addPoint(null, y);
		  };
		  BoundingBox.prototype.addBezier = function(x0, y0, x1, y1, x2, y2, x, y) {
		    const p0 = [x0, y0];
		    const p1 = [x1, y1];
		    const p2 = [x2, y2];
		    const p3 = [x, y];
		    this.addPoint(x0, y0);
		    this.addPoint(x, y);
		    for (let i = 0; i <= 1; i++) {
		      const b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
		      const a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
		      const c = 3 * p1[i] - 3 * p0[i];
		      if (a === 0) {
		        if (b === 0) continue;
		        const t = -c / b;
		        if (0 < t && t < 1) {
		          if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t));
		          if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t));
		        }
		        continue;
		      }
		      const b2ac = Math.pow(b, 2) - 4 * c * a;
		      if (b2ac < 0) continue;
		      const t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
		      if (0 < t1 && t1 < 1) {
		        if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t1));
		        if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t1));
		      }
		      const t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
		      if (0 < t2 && t2 < 1) {
		        if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t2));
		        if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t2));
		      }
		    }
		  };
		  BoundingBox.prototype.addQuad = function(x0, y0, x1, y1, x, y) {
		    const cp1x = x0 + 2 / 3 * (x1 - x0);
		    const cp1y = y0 + 2 / 3 * (y1 - y0);
		    const cp2x = cp1x + 1 / 3 * (x - x0);
		    const cp2y = cp1y + 1 / 3 * (y - y0);
		    this.addBezier(x0, y0, cp1x, cp1y, cp2x, cp2y, x, y);
		  };
		  var bbox_default = BoundingBox;

		  // src/path.mjs
		  function Path() {
		    this.commands = [];
		    this.fill = "black";
		    this.stroke = null;
		    this.strokeWidth = 1;
		  }
		  var decimalRoundingCache = {};
		  function roundDecimal(float, places) {
		    const integerPart = Math.floor(float);
		    const decimalPart = float - integerPart;
		    if (!decimalRoundingCache[places]) {
		      decimalRoundingCache[places] = {};
		    }
		    if (decimalRoundingCache[places][decimalPart] !== void 0) {
		      const roundedDecimalPart2 = decimalRoundingCache[places][decimalPart];
		      return integerPart + roundedDecimalPart2;
		    }
		    const roundedDecimalPart = +(Math.round(decimalPart + "e+" + places) + "e-" + places);
		    decimalRoundingCache[places][decimalPart] = roundedDecimalPart;
		    return integerPart + roundedDecimalPart;
		  }
		  function optimizeCommands(commands) {
		    let subpaths = [[]];
		    let startX = 0, startY = 0;
		    for (let i = 0; i < commands.length; i += 1) {
		      const subpath = subpaths[subpaths.length - 1];
		      const cmd = commands[i];
		      const firstCommand = subpath[0];
		      const secondCommand = subpath[1];
		      const previousCommand = subpath[subpath.length - 1];
		      const nextCommand = commands[i + 1];
		      subpath.push(cmd);
		      if (cmd.type === "M") {
		        startX = cmd.x;
		        startY = cmd.y;
		      } else if (cmd.type === "L" && (!nextCommand || nextCommand.type === "Z")) {
		        if (!(Math.abs(cmd.x - startX) > 1 || Math.abs(cmd.y - startY) > 1)) {
		          subpath.pop();
		        }
		      } else if (cmd.type === "L" && previousCommand && previousCommand.x === cmd.x && previousCommand.y === cmd.y) {
		        subpath.pop();
		      } else if (cmd.type === "Z") {
		        if (firstCommand && secondCommand && previousCommand && firstCommand.type === "M" && secondCommand.type === "L" && previousCommand.type === "L" && previousCommand.x === firstCommand.x && previousCommand.y === firstCommand.y) {
		          subpath.shift();
		          subpath[0].type = "M";
		        }
		        if (i + 1 < commands.length) {
		          subpaths.push([]);
		        }
		      }
		    }
		    commands = [].concat.apply([], subpaths);
		    return commands;
		  }
		  function createSVGParsingOptions(options) {
		    const defaultOptions = {
		      decimalPlaces: 2,
		      optimize: true,
		      flipY: true,
		      flipYBase: void 0,
		      scale: 1,
		      x: 0,
		      y: 0
		    };
		    const newOptions = Object.assign({}, defaultOptions, options);
		    return newOptions;
		  }
		  function createSVGOutputOptions(options) {
		    if (parseInt(options) === options) {
		      options = { decimalPlaces: options, flipY: false };
		    }
		    const defaultOptions = {
		      decimalPlaces: 2,
		      optimize: true,
		      flipY: true,
		      flipYBase: void 0
		    };
		    const newOptions = Object.assign({}, defaultOptions, options);
		    return newOptions;
		  }
		  Path.prototype.fromSVG = function(pathData, options = {}) {
		    if (typeof SVGPathElement !== "undefined" && pathData instanceof SVGPathElement) {
		      pathData = pathData.getAttribute("d");
		    }
		    options = createSVGParsingOptions(options);
		    this.commands = [];
		    const number = "0123456789";
		    const supportedCommands = "MmLlQqCcZzHhVv";
		    const unsupportedCommands = "SsTtAa";
		    const sign = "-+";
		    let command = {};
		    let buffer = [""];
		    let isUnexpected = false;
		    function parseBuffer2(buffer2) {
		      return buffer2.filter((b) => b.length).map((b) => {
		        let float = parseFloat(b);
		        if (options.decimalPlaces || options.decimalPlaces === 0) {
		          float = roundDecimal(float, options.decimalPlaces);
		        }
		        return float;
		      });
		    }
		    function makeRelative(buffer2) {
		      if (!this.commands.length) {
		        return buffer2;
		      }
		      const lastCommand = this.commands[this.commands.length - 1];
		      for (let i = 0; i < buffer2.length; i++) {
		        buffer2[i] += lastCommand[i & 1 ? "y" : "x"];
		      }
		      return buffer2;
		    }
		    function applyCommand() {
		      if (command.type === void 0) {
		        return;
		      }
		      const commandType = command.type.toUpperCase();
		      const relative = commandType !== "Z" && command.type.toUpperCase() !== command.type;
		      let parsedBuffer = parseBuffer2(buffer);
		      buffer = [""];
		      if (!parsedBuffer.length && commandType !== "Z") {
		        return;
		      }
		      if (relative && commandType !== "H" && commandType !== "V") {
		        parsedBuffer = makeRelative.apply(this, [parsedBuffer]);
		      }
		      const currentX = this.commands.length ? this.commands[this.commands.length - 1].x || 0 : 0;
		      const currentY = this.commands.length ? this.commands[this.commands.length - 1].y || 0 : 0;
		      switch (commandType) {
		        case "M":
		          this.moveTo(...parsedBuffer);
		          break;
		        case "L":
		          this.lineTo(...parsedBuffer);
		          break;
		        case "V":
		          for (let i = 0; i < parsedBuffer.length; i++) {
		            let offset = 0;
		            if (relative) {
		              offset = this.commands.length ? this.commands[this.commands.length - 1].y || 0 : 0;
		            }
		            this.lineTo(currentX, parsedBuffer[i] + offset);
		          }
		          break;
		        case "H":
		          for (let i = 0; i < parsedBuffer.length; i++) {
		            let offset = 0;
		            if (relative) {
		              offset = this.commands.length ? this.commands[this.commands.length - 1].x || 0 : 0;
		            }
		            this.lineTo(parsedBuffer[i] + offset, currentY);
		          }
		          break;
		        case "C":
		          this.bezierCurveTo(...parsedBuffer);
		          break;
		        case "Q":
		          this.quadraticCurveTo(...parsedBuffer);
		          break;
		        case "Z":
		          if (this.commands.length < 1 || this.commands[this.commands.length - 1].type !== "Z") {
		            this.close();
		          }
		          break;
		      }
		      if (this.commands.length) {
		        for (const prop in this.commands[this.commands.length - 1]) {
		          if (this.commands[this.commands.length - 1][prop] === void 0) {
		            this.commands[this.commands.length - 1][prop] = 0;
		          }
		        }
		      }
		    }
		    for (let i = 0; i < pathData.length; i++) {
		      const token = pathData.charAt(i);
		      const lastBuffer = buffer[buffer.length - 1];
		      if (number.indexOf(token) > -1) {
		        buffer[buffer.length - 1] += token;
		      } else if (sign.indexOf(token) > -1) {
		        if (!command.type && !this.commands.length) {
		          command.type = "L";
		        }
		        if (token === "-") {
		          if (!command.type || lastBuffer.indexOf("-") > 0) {
		            isUnexpected = true;
		          } else if (lastBuffer.length) {
		            buffer.push("-");
		          } else {
		            buffer[buffer.length - 1] = token;
		          }
		        } else {
		          if (!command.type || lastBuffer.length > 0) {
		            isUnexpected = true;
		          } else {
		            continue;
		          }
		        }
		      } else if (supportedCommands.indexOf(token) > -1) {
		        if (command.type) {
		          applyCommand.apply(this);
		          command = { type: token };
		        } else {
		          command.type = token;
		        }
		      } else if (unsupportedCommands.indexOf(token) > -1) {
		        throw new Error("Unsupported path command: " + token + ". Currently supported commands are " + supportedCommands.split("").join(", ") + ".");
		      } else if (" ,	\n\r\f\v".indexOf(token) > -1) {
		        buffer.push("");
		      } else if (token === ".") {
		        if (!command.type || lastBuffer.indexOf(token) > -1) {
		          isUnexpected = true;
		        } else {
		          buffer[buffer.length - 1] += token;
		        }
		      } else {
		        isUnexpected = true;
		      }
		      if (isUnexpected) {
		        throw new Error("Unexpected character: " + token + " at offset " + i);
		      }
		    }
		    applyCommand.apply(this);
		    if (options.optimize) {
		      this.commands = optimizeCommands(this.commands);
		    }
		    const flipY = options.flipY;
		    let flipYBase = options.flipYBase;
		    if (flipY === true && options.flipYBase === void 0) {
		      const boundingBox = this.getBoundingBox();
		      flipYBase = boundingBox.y1 + boundingBox.y2;
		    }
		    for (const i in this.commands) {
		      const cmd = this.commands[i];
		      for (const prop in cmd) {
		        if (["x", "x1", "x2"].includes(prop)) {
		          this.commands[i][prop] = options.x + cmd[prop] * options.scale;
		        } else if (["y", "y1", "y2"].includes(prop)) {
		          this.commands[i][prop] = options.y + (flipY ? flipYBase - cmd[prop] : cmd[prop]) * options.scale;
		        }
		      }
		    }
		    return this;
		  };
		  Path.fromSVG = function(path, options) {
		    const newPath = new Path();
		    return newPath.fromSVG(path, options);
		  };
		  Path.prototype.moveTo = function(x, y) {
		    this.commands.push({
		      type: "M",
		      x,
		      y
		    });
		  };
		  Path.prototype.lineTo = function(x, y) {
		    this.commands.push({
		      type: "L",
		      x,
		      y
		    });
		  };
		  Path.prototype.curveTo = Path.prototype.bezierCurveTo = function(x1, y1, x2, y2, x, y) {
		    this.commands.push({
		      type: "C",
		      x1,
		      y1,
		      x2,
		      y2,
		      x,
		      y
		    });
		  };
		  Path.prototype.quadTo = Path.prototype.quadraticCurveTo = function(x1, y1, x, y) {
		    this.commands.push({
		      type: "Q",
		      x1,
		      y1,
		      x,
		      y
		    });
		  };
		  Path.prototype.close = Path.prototype.closePath = function() {
		    this.commands.push({
		      type: "Z"
		    });
		  };
		  Path.prototype.extend = function(pathOrCommands) {
		    if (pathOrCommands.commands) {
		      pathOrCommands = pathOrCommands.commands;
		    } else if (pathOrCommands instanceof bbox_default) {
		      const box = pathOrCommands;
		      this.moveTo(box.x1, box.y1);
		      this.lineTo(box.x2, box.y1);
		      this.lineTo(box.x2, box.y2);
		      this.lineTo(box.x1, box.y2);
		      this.close();
		      return;
		    }
		    Array.prototype.push.apply(this.commands, pathOrCommands);
		  };
		  Path.prototype.getBoundingBox = function() {
		    const box = new bbox_default();
		    let startX = 0;
		    let startY = 0;
		    let prevX = 0;
		    let prevY = 0;
		    for (let i = 0; i < this.commands.length; i++) {
		      const cmd = this.commands[i];
		      switch (cmd.type) {
		        case "M":
		          box.addPoint(cmd.x, cmd.y);
		          startX = prevX = cmd.x;
		          startY = prevY = cmd.y;
		          break;
		        case "L":
		          box.addPoint(cmd.x, cmd.y);
		          prevX = cmd.x;
		          prevY = cmd.y;
		          break;
		        case "Q":
		          box.addQuad(prevX, prevY, cmd.x1, cmd.y1, cmd.x, cmd.y);
		          prevX = cmd.x;
		          prevY = cmd.y;
		          break;
		        case "C":
		          box.addBezier(prevX, prevY, cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
		          prevX = cmd.x;
		          prevY = cmd.y;
		          break;
		        case "Z":
		          prevX = startX;
		          prevY = startY;
		          break;
		        default:
		          throw new Error("Unexpected path command " + cmd.type);
		      }
		    }
		    if (box.isEmpty()) {
		      box.addPoint(0, 0);
		    }
		    return box;
		  };
		  Path.prototype.draw = function(ctx) {
		    const layers = this._layers;
		    if (layers && layers.length) {
		      for (let l = 0; l < layers.length; l++) {
		        this.draw.call(layers[l], ctx);
		      }
		      return;
		    }
		    const image = this._image;
		    if (image) {
		      ctx.drawImage(image.image, image.x, image.y, image.width, image.height);
		      return;
		    }
		    ctx.beginPath();
		    for (let i = 0; i < this.commands.length; i += 1) {
		      const cmd = this.commands[i];
		      if (cmd.type === "M") {
		        ctx.moveTo(cmd.x, cmd.y);
		      } else if (cmd.type === "L") {
		        ctx.lineTo(cmd.x, cmd.y);
		      } else if (cmd.type === "C") {
		        ctx.bezierCurveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
		      } else if (cmd.type === "Q") {
		        ctx.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y);
		      } else if (cmd.type === "Z" && this.stroke && this.strokeWidth) {
		        ctx.closePath();
		      }
		    }
		    if (this.fill) {
		      ctx.fillStyle = this.fill;
		      ctx.fill();
		    }
		    if (this.stroke) {
		      ctx.strokeStyle = this.stroke;
		      ctx.lineWidth = this.strokeWidth;
		      ctx.stroke();
		    }
		  };
		  Path.prototype.toPathData = function(options) {
		    options = createSVGOutputOptions(options);
		    function floatToString(v) {
		      const rounded = roundDecimal(v, options.decimalPlaces);
		      if (Math.round(v) === rounded) {
		        return "" + rounded;
		      } else {
		        return rounded.toFixed(options.decimalPlaces);
		      }
		    }
		    function packValues() {
		      let s = "";
		      for (let i = 0; i < arguments.length; i += 1) {
		        const v = arguments[i];
		        if (v >= 0 && i > 0) {
		          s += " ";
		        }
		        s += floatToString(v);
		      }
		      return s;
		    }
		    let commandsCopy = this.commands;
		    if (options.optimize) {
		      commandsCopy = JSON.parse(JSON.stringify(this.commands));
		      commandsCopy = optimizeCommands(commandsCopy);
		    }
		    const flipY = options.flipY;
		    let flipYBase = options.flipYBase;
		    if (flipY === true && flipYBase === void 0) {
		      const tempPath = new Path();
		      tempPath.extend(commandsCopy);
		      const boundingBox = tempPath.getBoundingBox();
		      flipYBase = boundingBox.y1 + boundingBox.y2;
		    }
		    let d = "";
		    for (let i = 0; i < commandsCopy.length; i += 1) {
		      const cmd = commandsCopy[i];
		      if (cmd.type === "M") {
		        d += "M" + packValues(
		          cmd.x,
		          flipY ? flipYBase - cmd.y : cmd.y
		        );
		      } else if (cmd.type === "L") {
		        d += "L" + packValues(
		          cmd.x,
		          flipY ? flipYBase - cmd.y : cmd.y
		        );
		      } else if (cmd.type === "C") {
		        d += "C" + packValues(
		          cmd.x1,
		          flipY ? flipYBase - cmd.y1 : cmd.y1,
		          cmd.x2,
		          flipY ? flipYBase - cmd.y2 : cmd.y2,
		          cmd.x,
		          flipY ? flipYBase - cmd.y : cmd.y
		        );
		      } else if (cmd.type === "Q") {
		        d += "Q" + packValues(
		          cmd.x1,
		          flipY ? flipYBase - cmd.y1 : cmd.y1,
		          cmd.x,
		          flipY ? flipYBase - cmd.y : cmd.y
		        );
		      } else if (cmd.type === "Z") {
		        d += "Z";
		      }
		    }
		    return d;
		  };
		  Path.prototype.toSVG = function(options, pathData) {
		    if (this._layers && this._layers.length) {
		      console.warn("toSVG() does not support colr font layers yet");
		    }
		    if (this._image) {
		      console.warn("toSVG() does not support SVG glyphs yet");
		    }
		    if (!pathData) {
		      pathData = this.toPathData(options);
		    }
		    let svg = '<path d="';
		    svg += pathData;
		    svg += '"';
		    if (this.fill !== void 0 && this.fill !== "black") {
		      if (this.fill === null) {
		        svg += ' fill="none"';
		      } else {
		        svg += ' fill="' + this.fill + '"';
		      }
		    }
		    if (this.stroke) {
		      svg += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"';
		    }
		    svg += "/>";
		    return svg;
		  };
		  Path.prototype.toDOMElement = function(options, pathData) {
		    if (this._layers && this._layers.length) {
		      console.warn("toDOMElement() does not support colr font layers yet");
		    }
		    if (!pathData) {
		      pathData = this.toPathData(options);
		    }
		    const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
		    newPath.setAttribute("d", pathData);
		    if (this.fill !== void 0 && this.fill !== "black") {
		      if (this.fill === null) {
		        newPath.setAttribute("fill", "none");
		      } else {
		        newPath.setAttribute("fill", this.fill);
		      }
		    }
		    if (this.stroke) {
		      newPath.setAttribute("stroke", this.stroke);
		      newPath.setAttribute("stroke-width", this.strokeWidth);
		    }
		    return newPath;
		  };
		  var path_default = Path;

		  // src/check.mjs
		  function fail(message) {
		    throw new Error(message);
		  }
		  function argument(predicate, message) {
		    if (!predicate) {
		      fail(message);
		    }
		  }
		  var check_default = { fail, argument, assert: argument };

		  // src/types.mjs
		  var LIMIT16 = 32768;
		  var LIMIT32 = 2147483648;
		  var MIN_16_16 = -32768;
		  var MAX_16_16 = (1 << 15) - 1 + 1 / (1 << 16);
		  var decode = {};
		  var encode = {};
		  var sizeOf = {};
		  function constant(v) {
		    return function() {
		      return v;
		    };
		  }
		  encode.BYTE = function(v) {
		    check_default.argument(v >= 0 && v <= 255, "Byte value should be between 0 and 255.");
		    return [v];
		  };
		  sizeOf.BYTE = constant(1);
		  encode.CHAR = function(v) {
		    return [v.charCodeAt(0)];
		  };
		  sizeOf.CHAR = constant(1);
		  encode.CHARARRAY = function(v) {
		    if (v === null || typeof v === "undefined") {
		      v = "";
		      console.warn("CHARARRAY with undefined or null value encountered and treated as an empty string. This is probably caused by a missing glyph name.");
		    }
		    const b = [];
		    for (let i = 0; i < v.length; i += 1) {
		      b[i] = v.charCodeAt(i);
		    }
		    return b;
		  };
		  sizeOf.CHARARRAY = function(v) {
		    if (typeof v === "undefined") {
		      return 0;
		    }
		    return v.length;
		  };
		  encode.USHORT = function(v) {
		    return [v >> 8 & 255, v & 255];
		  };
		  sizeOf.USHORT = constant(2);
		  encode.SHORT = function(v) {
		    if (v >= LIMIT16) {
		      v = -(2 * LIMIT16 - v);
		    }
		    return [v >> 8 & 255, v & 255];
		  };
		  sizeOf.SHORT = constant(2);
		  encode.UINT24 = function(v) {
		    return [v >> 16 & 255, v >> 8 & 255, v & 255];
		  };
		  sizeOf.UINT24 = constant(3);
		  encode.ULONG = function(v) {
		    return [v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, v & 255];
		  };
		  sizeOf.ULONG = constant(4);
		  encode.LONG = function(v) {
		    if (v >= LIMIT32) {
		      v = -(2 * LIMIT32 - v);
		    }
		    return [v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, v & 255];
		  };
		  sizeOf.LONG = constant(4);
		  encode.FLOAT = function(v) {
		    if (v > MAX_16_16 || v < MIN_16_16) {
		      throw new Error(`Value ${v} is outside the range of representable values in 16.16 format`);
		    }
		    const fixedValue = Math.round(v * (1 << 16)) << 0;
		    return encode.ULONG(fixedValue);
		  };
		  sizeOf.FLOAT = sizeOf.ULONG;
		  encode.FIXED = encode.ULONG;
		  sizeOf.FIXED = sizeOf.ULONG;
		  encode.FWORD = encode.SHORT;
		  sizeOf.FWORD = sizeOf.SHORT;
		  encode.UFWORD = encode.USHORT;
		  sizeOf.UFWORD = sizeOf.USHORT;
		  encode.F2DOT14 = function(v) {
		    return encode.USHORT(v * 16384);
		  };
		  sizeOf.F2DOT14 = sizeOf.USHORT;
		  encode.LONGDATETIME = function(v) {
		    return [0, 0, 0, 0, v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, v & 255];
		  };
		  sizeOf.LONGDATETIME = constant(8);
		  encode.TAG = function(v) {
		    check_default.argument(v.length === 4, "Tag should be exactly 4 ASCII characters.");
		    return [
		      v.charCodeAt(0),
		      v.charCodeAt(1),
		      v.charCodeAt(2),
		      v.charCodeAt(3)
		    ];
		  };
		  sizeOf.TAG = constant(4);
		  encode.Card8 = encode.BYTE;
		  sizeOf.Card8 = sizeOf.BYTE;
		  encode.Card16 = encode.USHORT;
		  sizeOf.Card16 = sizeOf.USHORT;
		  encode.OffSize = encode.BYTE;
		  sizeOf.OffSize = sizeOf.BYTE;
		  encode.SID = encode.USHORT;
		  sizeOf.SID = sizeOf.USHORT;
		  encode.NUMBER = function(v) {
		    if (v >= -107 && v <= 107) {
		      return [v + 139];
		    } else if (v >= 108 && v <= 1131) {
		      v = v - 108;
		      return [(v >> 8) + 247, v & 255];
		    } else if (v >= -1131 && v <= -108) {
		      v = -v - 108;
		      return [(v >> 8) + 251, v & 255];
		    } else if (v >= -32768 && v <= 32767) {
		      return encode.NUMBER16(v);
		    } else {
		      return encode.NUMBER32(v);
		    }
		  };
		  sizeOf.NUMBER = function(v) {
		    return encode.NUMBER(v).length;
		  };
		  encode.NUMBER16 = function(v) {
		    return [28, v >> 8 & 255, v & 255];
		  };
		  sizeOf.NUMBER16 = constant(3);
		  encode.NUMBER32 = function(v) {
		    return [29, v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, v & 255];
		  };
		  sizeOf.NUMBER32 = constant(5);
		  encode.REAL = function(v) {
		    let value = v.toString();
		    const m = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(value);
		    if (m) {
		      const epsilon = parseFloat("1e" + ((m[2] ? +m[2] : 0) + m[1].length));
		      value = (Math.round(v * epsilon) / epsilon).toString();
		    }
		    let nibbles = "";
		    for (let i = 0, ii = value.length; i < ii; i += 1) {
		      const c = value[i];
		      if (c === "e") {
		        nibbles += value[++i] === "-" ? "c" : "b";
		      } else if (c === ".") {
		        nibbles += "a";
		      } else if (c === "-") {
		        nibbles += "e";
		      } else {
		        nibbles += c;
		      }
		    }
		    nibbles += nibbles.length & 1 ? "f" : "ff";
		    const out = [30];
		    for (let i = 0, ii = nibbles.length; i < ii; i += 2) {
		      out.push(parseInt(nibbles.substr(i, 2), 16));
		    }
		    return out;
		  };
		  sizeOf.REAL = function(v) {
		    return encode.REAL(v).length;
		  };
		  encode.NAME = encode.CHARARRAY;
		  sizeOf.NAME = sizeOf.CHARARRAY;
		  encode.STRING = encode.CHARARRAY;
		  sizeOf.STRING = sizeOf.CHARARRAY;
		  decode.UTF8 = function(data, offset, numBytes) {
		    const codePoints = [];
		    const numChars = numBytes;
		    for (let j = 0; j < numChars; j++, offset += 1) {
		      codePoints[j] = data.getUint8(offset);
		    }
		    return String.fromCharCode.apply(null, codePoints);
		  };
		  decode.UTF16 = function(data, offset, numBytes) {
		    const codePoints = [];
		    const numChars = numBytes / 2;
		    for (let j = 0; j < numChars; j++, offset += 2) {
		      codePoints[j] = data.getUint16(offset);
		    }
		    return String.fromCharCode.apply(null, codePoints);
		  };
		  encode.UTF16 = function(v) {
		    const b = [];
		    for (let i = 0; i < v.length; i += 1) {
		      const codepoint = v.charCodeAt(i);
		      b[b.length] = codepoint >> 8 & 255;
		      b[b.length] = codepoint & 255;
		    }
		    return b;
		  };
		  sizeOf.UTF16 = function(v) {
		    return v.length * 2;
		  };
		  var eightBitMacEncodings = {
		    "x-mac-croatian": (
		      // Python: 'mac_croatian'
		      "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\u0160\u2122\xB4\xA8\u2260\u017D\xD8\u221E\xB1\u2264\u2265\u2206\xB5\u2202\u2211\u220F\u0161\u222B\xAA\xBA\u03A9\u017E\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u0106\xAB\u010C\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u0110\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203A\xC6\xBB\u2013\xB7\u201A\u201E\u2030\xC2\u0107\xC1\u010D\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u0111\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u03C0\xCB\u02DA\xB8\xCA\xE6\u02C7"
		    ),
		    "x-mac-cyrillic": (
		      // Python: 'mac_cyrillic'
		      "\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u2020\xB0\u0490\xA3\xA7\u2022\xB6\u0406\xAE\xA9\u2122\u0402\u0452\u2260\u0403\u0453\u221E\xB1\u2264\u2265\u0456\xB5\u0491\u0408\u0404\u0454\u0407\u0457\u0409\u0459\u040A\u045A\u0458\u0405\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\u040B\u045B\u040C\u045C\u0455\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u201E\u040E\u045E\u040F\u045F\u2116\u0401\u0451\u044F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E"
		    ),
		    "x-mac-gaelic": (
		      // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/GAELIC.TXT
		      "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u1E02\xB1\u2264\u2265\u1E03\u010A\u010B\u1E0A\u1E0B\u1E1E\u1E1F\u0120\u0121\u1E40\xE6\xF8\u1E41\u1E56\u1E57\u027C\u0192\u017F\u1E60\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\u1E61\u1E9B\xFF\u0178\u1E6A\u20AC\u2039\u203A\u0176\u0177\u1E6B\xB7\u1EF2\u1EF3\u204A\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u2663\xD2\xDA\xDB\xD9\u0131\xDD\xFD\u0174\u0175\u1E84\u1E85\u1E80\u1E81\u1E82\u1E83"
		    ),
		    "x-mac-greek": (
		      // Python: 'mac_greek'
		      "\xC4\xB9\xB2\xC9\xB3\xD6\xDC\u0385\xE0\xE2\xE4\u0384\xA8\xE7\xE9\xE8\xEA\xEB\xA3\u2122\xEE\xEF\u2022\xBD\u2030\xF4\xF6\xA6\u20AC\xF9\xFB\xFC\u2020\u0393\u0394\u0398\u039B\u039E\u03A0\xDF\xAE\xA9\u03A3\u03AA\xA7\u2260\xB0\xB7\u0391\xB1\u2264\u2265\xA5\u0392\u0395\u0396\u0397\u0399\u039A\u039C\u03A6\u03AB\u03A8\u03A9\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026\xA0\u03A5\u03A7\u0386\u0388\u0153\u2013\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD"
		    ),
		    "x-mac-icelandic": (
		      // Python: 'mac_iceland'
		      "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xDD\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\xD0\xF0\xDE\xFE\xFD\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
		    ),
		    "x-mac-inuit": (
		      // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/INUIT.TXT
		      "\u1403\u1404\u1405\u1406\u140A\u140B\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144E\u144F\u1450\u1451\u1455\u1456\u1466\u146D\u146E\u146F\u1470\u1472\u1473\u1483\u148B\u148C\u148D\u148E\u1490\u1491\xB0\u14A1\u14A5\u14A6\u2022\xB6\u14A7\xAE\xA9\u2122\u14A8\u14AA\u14AB\u14BB\u14C2\u14C3\u14C4\u14C5\u14C7\u14C8\u14D0\u14EF\u14F0\u14F1\u14F2\u14F4\u14F5\u1505\u14D5\u14D6\u14D7\u14D8\u14DA\u14DB\u14EA\u1528\u1529\u152A\u152B\u152D\u2026\xA0\u152E\u153E\u1555\u1556\u1557\u2013\u2014\u201C\u201D\u2018\u2019\u1558\u1559\u155A\u155D\u1546\u1547\u1548\u1549\u154B\u154C\u1550\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u157C\u0141\u0142"
		    ),
		    "x-mac-ce": (
		      // Python: 'mac_latin2'
		      "\xC4\u0100\u0101\xC9\u0104\xD6\xDC\xE1\u0105\u010C\xE4\u010D\u0106\u0107\xE9\u0179\u017A\u010E\xED\u010F\u0112\u0113\u0116\xF3\u0117\xF4\xF6\xF5\xFA\u011A\u011B\xFC\u2020\xB0\u0118\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\u0119\xA8\u2260\u0123\u012E\u012F\u012A\u2264\u2265\u012B\u0136\u2202\u2211\u0142\u013B\u013C\u013D\u013E\u0139\u013A\u0145\u0146\u0143\xAC\u221A\u0144\u0147\u2206\xAB\xBB\u2026\xA0\u0148\u0150\xD5\u0151\u014C\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\u014D\u0154\u0155\u0158\u2039\u203A\u0159\u0156\u0157\u0160\u201A\u201E\u0161\u015A\u015B\xC1\u0164\u0165\xCD\u017D\u017E\u016A\xD3\xD4\u016B\u016E\xDA\u016F\u0170\u0171\u0172\u0173\xDD\xFD\u0137\u017B\u0141\u017C\u0122\u02C7"
		    ),
		    macintosh: (
		      // Python: 'mac_roman'
		      "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
		    ),
		    "x-mac-romanian": (
		      // Python: 'mac_romanian'
		      "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\u0102\u0218\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\u0103\u0219\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\u021A\u021B\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
		    ),
		    "x-mac-turkish": (
		      // Python: 'mac_turkish'
		      "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u011E\u011F\u0130\u0131\u015E\u015F\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\uF8A0\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
		    )
		  };
		  decode.MACSTRING = function(dataView, offset, dataLength, encoding) {
		    const table = eightBitMacEncodings[encoding];
		    if (table === void 0) {
		      return void 0;
		    }
		    let result = "";
		    for (let i = 0; i < dataLength; i++) {
		      const c = dataView.getUint8(offset + i);
		      if (c <= 127) {
		        result += String.fromCharCode(c);
		      } else {
		        result += table[c & 127];
		      }
		    }
		    return result;
		  };
		  var macEncodingTableCache = typeof WeakMap === "function" && /* @__PURE__ */ new WeakMap();
		  var macEncodingCacheKeys;
		  var getMacEncodingTable = function(encoding) {
		    if (!macEncodingCacheKeys) {
		      macEncodingCacheKeys = {};
		      for (let e in eightBitMacEncodings) {
		        macEncodingCacheKeys[e] = new String(e);
		      }
		    }
		    const cacheKey = macEncodingCacheKeys[encoding];
		    if (cacheKey === void 0) {
		      return void 0;
		    }
		    if (macEncodingTableCache) {
		      const cachedTable = macEncodingTableCache.get(cacheKey);
		      if (cachedTable !== void 0) {
		        return cachedTable;
		      }
		    }
		    const decodingTable = eightBitMacEncodings[encoding];
		    if (decodingTable === void 0) {
		      return void 0;
		    }
		    const encodingTable = {};
		    for (let i = 0; i < decodingTable.length; i++) {
		      encodingTable[decodingTable.charCodeAt(i)] = i + 128;
		    }
		    if (macEncodingTableCache) {
		      macEncodingTableCache.set(cacheKey, encodingTable);
		    }
		    return encodingTable;
		  };
		  encode.MACSTRING = function(str, encoding) {
		    const table = getMacEncodingTable(encoding);
		    if (table === void 0) {
		      return void 0;
		    }
		    const result = [];
		    for (let i = 0; i < str.length; i++) {
		      let c = str.charCodeAt(i);
		      if (c >= 128) {
		        c = table[c];
		        if (c === void 0) {
		          return void 0;
		        }
		      }
		      result[i] = c;
		    }
		    return result;
		  };
		  sizeOf.MACSTRING = function(str, encoding) {
		    const b = encode.MACSTRING(str, encoding);
		    if (b !== void 0) {
		      return b.length;
		    } else {
		      return 0;
		    }
		  };
		  function isByteEncodable(value) {
		    return value >= -128 && value <= 127;
		  }
		  function encodeVarDeltaRunAsZeroes(deltas, pos, result) {
		    let runLength = 0;
		    const numDeltas = deltas.length;
		    while (pos < numDeltas && runLength < 64 && deltas[pos] === 0) {
		      ++pos;
		      ++runLength;
		    }
		    result.push(128 | runLength - 1);
		    return pos;
		  }
		  function encodeVarDeltaRunAsBytes(deltas, offset, result) {
		    let runLength = 0;
		    const numDeltas = deltas.length;
		    let pos = offset;
		    while (pos < numDeltas && runLength < 64) {
		      const value = deltas[pos];
		      if (!isByteEncodable(value)) {
		        break;
		      }
		      if (value === 0 && pos + 1 < numDeltas && deltas[pos + 1] === 0) {
		        break;
		      }
		      ++pos;
		      ++runLength;
		    }
		    result.push(runLength - 1);
		    for (let i = offset; i < pos; ++i) {
		      result.push(deltas[i] + 256 & 255);
		    }
		    return pos;
		  }
		  function encodeVarDeltaRunAsWords(deltas, offset, result) {
		    let runLength = 0;
		    const numDeltas = deltas.length;
		    let pos = offset;
		    while (pos < numDeltas && runLength < 64) {
		      const value = deltas[pos];
		      if (value === 0) {
		        break;
		      }
		      if (isByteEncodable(value) && pos + 1 < numDeltas && isByteEncodable(deltas[pos + 1])) {
		        break;
		      }
		      ++pos;
		      ++runLength;
		    }
		    result.push(64 | runLength - 1);
		    for (let i = offset; i < pos; ++i) {
		      const val = deltas[i];
		      result.push(val + 65536 >> 8 & 255, val + 256 & 255);
		    }
		    return pos;
		  }
		  encode.VARDELTAS = function(deltas) {
		    let pos = 0;
		    const result = [];
		    while (pos < deltas.length) {
		      const value = deltas[pos];
		      if (value === 0) {
		        pos = encodeVarDeltaRunAsZeroes(deltas, pos, result);
		      } else if (value >= -128 && value <= 127) {
		        pos = encodeVarDeltaRunAsBytes(deltas, pos, result);
		      } else {
		        pos = encodeVarDeltaRunAsWords(deltas, pos, result);
		      }
		    }
		    return result;
		  };
		  encode.INDEX = function(l) {
		    let offset = 1;
		    const offsets = [offset];
		    const data = [];
		    for (let i = 0; i < l.length; i += 1) {
		      const v = encode.OBJECT(l[i]);
		      Array.prototype.push.apply(data, v);
		      offset += v.length;
		      offsets.push(offset);
		    }
		    if (data.length === 0) {
		      return [0, 0];
		    }
		    const encodedOffsets = [];
		    const offSize = 1 + Math.floor(Math.log(offset) / Math.log(2)) / 8 | 0;
		    const offsetEncoder = [void 0, encode.BYTE, encode.USHORT, encode.UINT24, encode.ULONG][offSize];
		    for (let i = 0; i < offsets.length; i += 1) {
		      const encodedOffset = offsetEncoder(offsets[i]);
		      Array.prototype.push.apply(encodedOffsets, encodedOffset);
		    }
		    return Array.prototype.concat(
		      encode.Card16(l.length),
		      encode.OffSize(offSize),
		      encodedOffsets,
		      data
		    );
		  };
		  sizeOf.INDEX = function(v) {
		    return encode.INDEX(v).length;
		  };
		  encode.DICT = function(m) {
		    let d = [];
		    const keys = Object.keys(m);
		    const length = keys.length;
		    for (let i = 0; i < length; i += 1) {
		      const k = parseInt(keys[i], 0);
		      const v = m[k];
		      const enc1 = encode.OPERAND(v.value, v.type);
		      const enc2 = encode.OPERATOR(k);
		      for (let j = 0; j < enc1.length; j++) {
		        d.push(enc1[j]);
		      }
		      for (let j = 0; j < enc2.length; j++) {
		        d.push(enc2[j]);
		      }
		    }
		    return d;
		  };
		  sizeOf.DICT = function(m) {
		    return encode.DICT(m).length;
		  };
		  encode.OPERATOR = function(v) {
		    if (v < 1200) {
		      return [v];
		    } else {
		      return [12, v - 1200];
		    }
		  };
		  encode.OPERAND = function(v, type) {
		    let d = [];
		    if (Array.isArray(type)) {
		      for (let i = 0; i < type.length; i += 1) {
		        check_default.argument(v.length === type.length, "Not enough arguments given for type" + type);
		        const enc1 = encode.OPERAND(v[i], type[i]);
		        for (let j = 0; j < enc1.length; j++) {
		          d.push(enc1[j]);
		        }
		      }
		    } else {
		      if (type === "SID") {
		        const enc1 = encode.NUMBER(v);
		        for (let j = 0; j < enc1.length; j++) {
		          d.push(enc1[j]);
		        }
		      } else if (type === "offset") {
		        const enc1 = encode.NUMBER32(v);
		        for (let j = 0; j < enc1.length; j++) {
		          d.push(enc1[j]);
		        }
		      } else if (type === "number") {
		        const enc1 = encode.NUMBER(v);
		        for (let j = 0; j < enc1.length; j++) {
		          d.push(enc1[j]);
		        }
		      } else if (type === "real") {
		        const enc1 = encode.REAL(v);
		        for (let j = 0; j < enc1.length; j++) {
		          d.push(enc1[j]);
		        }
		      } else {
		        throw new Error("Unknown operand type " + type);
		      }
		    }
		    return d;
		  };
		  encode.OP = encode.BYTE;
		  sizeOf.OP = sizeOf.BYTE;
		  var wmm = typeof WeakMap === "function" && /* @__PURE__ */ new WeakMap();
		  encode.CHARSTRING = function(ops) {
		    if (wmm) {
		      const cachedValue = wmm.get(ops);
		      if (cachedValue !== void 0) {
		        return cachedValue;
		      }
		    }
		    let d = [];
		    const length = ops.length;
		    for (let i = 0; i < length; i += 1) {
		      const op = ops[i];
		      const enc1 = encode[op.type](op.value);
		      for (let j = 0; j < enc1.length; j++) {
		        d.push(enc1[j]);
		      }
		    }
		    if (wmm) {
		      wmm.set(ops, d);
		    }
		    return d;
		  };
		  sizeOf.CHARSTRING = function(ops) {
		    return encode.CHARSTRING(ops).length;
		  };
		  encode.OBJECT = function(v) {
		    const encodingFunction = encode[v.type];
		    check_default.argument(encodingFunction !== void 0, "No encoding function for type " + v.type);
		    return encodingFunction(v.value);
		  };
		  sizeOf.OBJECT = function(v) {
		    const sizeOfFunction = sizeOf[v.type];
		    check_default.argument(sizeOfFunction !== void 0, "No sizeOf function for type " + v.type);
		    return sizeOfFunction(v.value);
		  };
		  encode.TABLE = function(table) {
		    let d = [];
		    const length = (table.fields || []).length;
		    const subtables = [];
		    const subtableOffsets = [];
		    for (let i = 0; i < length; i += 1) {
		      const field = table.fields[i];
		      const encodingFunction = encode[field.type];
		      check_default.argument(encodingFunction !== void 0, "No encoding function for field type " + field.type + " (" + field.name + ")");
		      let value = table[field.name];
		      if (value === void 0) {
		        value = field.value;
		      }
		      const bytes = encodingFunction(value);
		      if (field.type === "TABLE") {
		        if (value.fields !== null) {
		          subtableOffsets.push(d.length);
		          subtables.push(bytes);
		        }
		        d.push(...[0, 0]);
		      } else {
		        for (let j = 0; j < bytes.length; j++) {
		          d.push(bytes[j]);
		        }
		      }
		    }
		    for (let i = 0; i < subtables.length; i += 1) {
		      const o = subtableOffsets[i];
		      const offset = d.length;
		      check_default.argument(offset < 65536, "Table " + table.tableName + " too big.");
		      d[o] = offset >> 8;
		      d[o + 1] = offset & 255;
		      for (let j = 0; j < subtables[i].length; j++) {
		        d.push(subtables[i][j]);
		      }
		    }
		    return d;
		  };
		  sizeOf.TABLE = function(table) {
		    let numBytes = 0;
		    const length = (table.fields || []).length;
		    for (let i = 0; i < length; i += 1) {
		      const field = table.fields[i];
		      const sizeOfFunction = sizeOf[field.type];
		      check_default.argument(sizeOfFunction !== void 0, "No sizeOf function for field type " + field.type + " (" + field.name + ")");
		      let value = table[field.name];
		      if (value === void 0) {
		        value = field.value;
		      }
		      numBytes += sizeOfFunction(value);
		      if (field.type === "TABLE") {
		        numBytes += 2;
		      }
		    }
		    return numBytes;
		  };
		  encode.RECORD = encode.TABLE;
		  sizeOf.RECORD = sizeOf.TABLE;
		  encode.LITERAL = function(v) {
		    return v;
		  };
		  sizeOf.LITERAL = function(v) {
		    return v.length;
		  };

		  // src/table.mjs
		  function Table(tableName, fields, options) {
		    if (fields && fields.length) {
		      for (let i = 0; i < fields.length; i += 1) {
		        const field = fields[i];
		        this[field.name] = field.value;
		      }
		    }
		    this.tableName = tableName;
		    this.fields = fields;
		    if (options) {
		      const optionKeys = Object.keys(options);
		      for (let i = 0; i < optionKeys.length; i += 1) {
		        const k = optionKeys[i];
		        const v = options[k];
		        if (this[k] !== void 0) {
		          this[k] = v;
		        }
		      }
		    }
		  }
		  Table.prototype.encode = function() {
		    return encode.TABLE(this);
		  };
		  Table.prototype.sizeOf = function() {
		    return sizeOf.TABLE(this);
		  };
		  function ushortList(itemName, list, count) {
		    if (count === void 0) {
		      count = list.length;
		    }
		    const fields = new Array(list.length + 1);
		    fields[0] = { name: itemName + "Count", type: "USHORT", value: count };
		    for (let i = 0; i < list.length; i++) {
		      fields[i + 1] = { name: itemName + i, type: "USHORT", value: list[i] };
		    }
		    return fields;
		  }
		  function tableList(itemName, records, itemCallback) {
		    const count = records.length;
		    const fields = new Array(count + 1);
		    fields[0] = { name: itemName + "Count", type: "USHORT", value: count };
		    for (let i = 0; i < count; i++) {
		      fields[i + 1] = { name: itemName + i, type: "TABLE", value: itemCallback(records[i], i) };
		    }
		    return fields;
		  }
		  function recordList(itemName, records, itemCallback) {
		    const count = records.length;
		    let fields = [];
		    fields[0] = { name: itemName + "Count", type: "USHORT", value: count };
		    for (let i = 0; i < count; i++) {
		      fields = fields.concat(itemCallback(records[i], i));
		    }
		    return fields;
		  }
		  function Coverage(coverageTable) {
		    if (coverageTable.format === 1) {
		      Table.call(
		        this,
		        "coverageTable",
		        [{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(ushortList("glyph", coverageTable.glyphs))
		      );
		    } else if (coverageTable.format === 2) {
		      Table.call(
		        this,
		        "coverageTable",
		        [{ name: "coverageFormat", type: "USHORT", value: 2 }].concat(recordList("rangeRecord", coverageTable.ranges, function(RangeRecord, i) {
		          return [
		            { name: "startGlyphID" + i, type: "USHORT", value: RangeRecord.start },
		            { name: "endGlyphID" + i, type: "USHORT", value: RangeRecord.end },
		            { name: "startCoverageIndex" + i, type: "USHORT", value: RangeRecord.index }
		          ];
		        }))
		      );
		    } else {
		      check_default.assert(false, "Coverage format must be 1 or 2.");
		    }
		  }
		  Coverage.prototype = Object.create(Table.prototype);
		  Coverage.prototype.constructor = Coverage;
		  function ScriptList(scriptListTable) {
		    Table.call(
		      this,
		      "scriptListTable",
		      recordList("scriptRecord", scriptListTable, function(scriptRecord, i) {
		        const script = scriptRecord.script;
		        let defaultLangSys = script.defaultLangSys;
		        check_default.assert(!!defaultLangSys, "Unable to write GSUB: script " + scriptRecord.tag + " has no default language system.");
		        return [
		          { name: "scriptTag" + i, type: "TAG", value: scriptRecord.tag },
		          { name: "script" + i, type: "TABLE", value: new Table("scriptTable", [
		            { name: "defaultLangSys", type: "TABLE", value: new Table("defaultLangSys", [
		              { name: "lookupOrder", type: "USHORT", value: 0 },
		              { name: "reqFeatureIndex", type: "USHORT", value: defaultLangSys.reqFeatureIndex }
		            ].concat(ushortList("featureIndex", defaultLangSys.featureIndexes))) }
		          ].concat(recordList("langSys", script.langSysRecords, function(langSysRecord, i2) {
		            const langSys = langSysRecord.langSys;
		            return [
		              { name: "langSysTag" + i2, type: "TAG", value: langSysRecord.tag },
		              { name: "langSys" + i2, type: "TABLE", value: new Table("langSys", [
		                { name: "lookupOrder", type: "USHORT", value: 0 },
		                { name: "reqFeatureIndex", type: "USHORT", value: langSys.reqFeatureIndex }
		              ].concat(ushortList("featureIndex", langSys.featureIndexes))) }
		            ];
		          }))) }
		        ];
		      })
		    );
		  }
		  ScriptList.prototype = Object.create(Table.prototype);
		  ScriptList.prototype.constructor = ScriptList;
		  function FeatureList(featureListTable) {
		    Table.call(
		      this,
		      "featureListTable",
		      recordList("featureRecord", featureListTable, function(featureRecord, i) {
		        const feature = featureRecord.feature;
		        return [
		          { name: "featureTag" + i, type: "TAG", value: featureRecord.tag },
		          { name: "feature" + i, type: "TABLE", value: new Table("featureTable", [
		            { name: "featureParams", type: "USHORT", value: feature.featureParams }
		          ].concat(ushortList("lookupListIndex", feature.lookupListIndexes))) }
		        ];
		      })
		    );
		  }
		  FeatureList.prototype = Object.create(Table.prototype);
		  FeatureList.prototype.constructor = FeatureList;
		  function LookupList(lookupListTable, subtableMakers3) {
		    Table.call(this, "lookupListTable", tableList("lookup", lookupListTable, function(lookupTable) {
		      let subtableCallback = subtableMakers3[lookupTable.lookupType];
		      check_default.assert(!!subtableCallback, "Unable to write GSUB lookup type " + lookupTable.lookupType + " tables.");
		      return new Table("lookupTable", [
		        { name: "lookupType", type: "USHORT", value: lookupTable.lookupType },
		        { name: "lookupFlag", type: "USHORT", value: lookupTable.lookupFlag }
		      ].concat(tableList("subtable", lookupTable.subtables, subtableCallback)));
		    }));
		  }
		  LookupList.prototype = Object.create(Table.prototype);
		  LookupList.prototype.constructor = LookupList;
		  function ClassDef(classDefTable) {
		    if (classDefTable.format === 1) {
		      Table.call(
		        this,
		        "classDefTable",
		        [
		          { name: "classFormat", type: "USHORT", value: 1 },
		          { name: "startGlyphID", type: "USHORT", value: classDefTable.startGlyph }
		        ].concat(ushortList("glyph", classDefTable.classes))
		      );
		    } else if (classDefTable.format === 2) {
		      Table.call(
		        this,
		        "classDefTable",
		        [{ name: "classFormat", type: "USHORT", value: 2 }].concat(recordList("rangeRecord", classDefTable.ranges, function(RangeRecord, i) {
		          return [
		            { name: "startGlyphID" + i, type: "USHORT", value: RangeRecord.start },
		            { name: "endGlyphID" + i, type: "USHORT", value: RangeRecord.end },
		            { name: "class" + i, type: "USHORT", value: RangeRecord.classId }
		          ];
		        }))
		      );
		    } else {
		      check_default.assert(false, "Class format must be 1 or 2.");
		    }
		  }
		  ClassDef.prototype = Object.create(Table.prototype);
		  ClassDef.prototype.constructor = ClassDef;
		  var table_default = {
		    Table,
		    Record: Table,
		    Coverage,
		    ClassDef,
		    ScriptList,
		    FeatureList,
		    LookupList,
		    ushortList,
		    tableList,
		    recordList
		  };

		  // src/parse.mjs
		  function getByte(dataView, offset) {
		    return dataView.getUint8(offset);
		  }
		  function getUShort(dataView, offset) {
		    return dataView.getUint16(offset, false);
		  }
		  function getShort(dataView, offset) {
		    return dataView.getInt16(offset, false);
		  }
		  function getUInt24(dataView, offset) {
		    return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);
		  }
		  function getULong(dataView, offset) {
		    return dataView.getUint32(offset, false);
		  }
		  function getLong(dataView, offset) {
		    return dataView.getInt32(offset, false);
		  }
		  function getFixed(dataView, offset) {
		    const decimal = dataView.getInt16(offset, false);
		    const fraction = dataView.getUint16(offset + 2, false);
		    return decimal + fraction / 65535;
		  }
		  function getTag(dataView, offset) {
		    let tag = "";
		    for (let i = offset; i < offset + 4; i += 1) {
		      tag += String.fromCharCode(dataView.getInt8(i));
		    }
		    return tag;
		  }
		  function getOffset(dataView, offset, offSize) {
		    let v = 0;
		    for (let i = 0; i < offSize; i += 1) {
		      v <<= 8;
		      v += dataView.getUint8(offset + i);
		    }
		    return v;
		  }
		  function getBytes(dataView, startOffset, endOffset) {
		    const bytes = [];
		    for (let i = startOffset; i < endOffset; i += 1) {
		      bytes.push(dataView.getUint8(i));
		    }
		    return bytes;
		  }
		  function bytesToString(bytes) {
		    let s = "";
		    for (let i = 0; i < bytes.length; i += 1) {
		      s += String.fromCharCode(bytes[i]);
		    }
		    return s;
		  }
		  var typeOffsets = {
		    byte: 1,
		    uShort: 2,
		    f2dot14: 2,
		    short: 2,
		    uInt24: 3,
		    uLong: 4,
		    fixed: 4,
		    longDateTime: 8,
		    tag: 4
		  };
		  var masks = {
		    LONG_WORDS: 32768,
		    WORD_DELTA_COUNT_MASK: 32767,
		    SHARED_POINT_NUMBERS: 32768,
		    COUNT_MASK: 4095,
		    EMBEDDED_PEAK_TUPLE: 32768,
		    INTERMEDIATE_REGION: 16384,
		    PRIVATE_POINT_NUMBERS: 8192,
		    TUPLE_INDEX_MASK: 4095,
		    POINTS_ARE_WORDS: 128,
		    POINT_RUN_COUNT_MASK: 127,
		    DELTAS_ARE_ZERO: 128,
		    DELTAS_ARE_WORDS: 64,
		    DELTA_RUN_COUNT_MASK: 63,
		    INNER_INDEX_BIT_COUNT_MASK: 15,
		    MAP_ENTRY_SIZE_MASK: 48
		  };
		  function Parser(data, offset) {
		    this.data = data;
		    this.offset = offset;
		    this.relativeOffset = 0;
		  }
		  Parser.prototype.parseByte = function() {
		    const v = this.data.getUint8(this.offset + this.relativeOffset);
		    this.relativeOffset += 1;
		    return v;
		  };
		  Parser.prototype.parseChar = function() {
		    const v = this.data.getInt8(this.offset + this.relativeOffset);
		    this.relativeOffset += 1;
		    return v;
		  };
		  Parser.prototype.parseCard8 = Parser.prototype.parseByte;
		  Parser.prototype.parseUShort = function() {
		    const v = this.data.getUint16(this.offset + this.relativeOffset);
		    this.relativeOffset += 2;
		    return v;
		  };
		  Parser.prototype.parseCard16 = Parser.prototype.parseUShort;
		  Parser.prototype.parseSID = Parser.prototype.parseUShort;
		  Parser.prototype.parseOffset16 = Parser.prototype.parseUShort;
		  Parser.prototype.parseShort = function() {
		    const v = this.data.getInt16(this.offset + this.relativeOffset);
		    this.relativeOffset += 2;
		    return v;
		  };
		  Parser.prototype.parseF2Dot14 = function() {
		    const v = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
		    this.relativeOffset += 2;
		    return v;
		  };
		  Parser.prototype.parseUInt24 = function() {
		    const v = getUInt24(this.data, this.offset + this.relativeOffset);
		    this.relativeOffset += 3;
		    return v;
		  };
		  Parser.prototype.parseULong = function() {
		    const v = getULong(this.data, this.offset + this.relativeOffset);
		    this.relativeOffset += 4;
		    return v;
		  };
		  Parser.prototype.parseLong = function() {
		    const v = getLong(this.data, this.offset + this.relativeOffset);
		    this.relativeOffset += 4;
		    return v;
		  };
		  Parser.prototype.parseOffset32 = Parser.prototype.parseULong;
		  Parser.prototype.parseFixed = function() {
		    const v = getFixed(this.data, this.offset + this.relativeOffset);
		    this.relativeOffset += 4;
		    return v;
		  };
		  Parser.prototype.parseString = function(length) {
		    const dataView = this.data;
		    const offset = this.offset + this.relativeOffset;
		    let string = "";
		    this.relativeOffset += length;
		    for (let i = 0; i < length; i++) {
		      string += String.fromCharCode(dataView.getUint8(offset + i));
		    }
		    return string;
		  };
		  Parser.prototype.parseTag = function() {
		    return this.parseString(4);
		  };
		  Parser.prototype.parseLongDateTime = function() {
		    let v = getULong(this.data, this.offset + this.relativeOffset + 4);
		    v -= 2082844800;
		    this.relativeOffset += 8;
		    return v;
		  };
		  Parser.prototype.parseVersion = function(minorBase) {
		    const major = getUShort(this.data, this.offset + this.relativeOffset);
		    const minor = getUShort(this.data, this.offset + this.relativeOffset + 2);
		    this.relativeOffset += 4;
		    if (minorBase === void 0) minorBase = 4096;
		    return major + minor / minorBase / 10;
		  };
		  Parser.prototype.skip = function(type, amount) {
		    if (amount === void 0) {
		      amount = 1;
		    }
		    this.relativeOffset += typeOffsets[type] * amount;
		  };
		  Parser.prototype.parseULongList = function(count) {
		    if (count === void 0) {
		      count = this.parseULong();
		    }
		    const offsets = new Array(count);
		    const dataView = this.data;
		    let offset = this.offset + this.relativeOffset;
		    for (let i = 0; i < count; i++) {
		      offsets[i] = dataView.getUint32(offset);
		      offset += 4;
		    }
		    this.relativeOffset += count * 4;
		    return offsets;
		  };
		  Parser.prototype.parseOffset16List = Parser.prototype.parseUShortList = function(count) {
		    if (count === void 0) {
		      count = this.parseUShort();
		    }
		    const offsets = new Array(count);
		    const dataView = this.data;
		    let offset = this.offset + this.relativeOffset;
		    for (let i = 0; i < count; i++) {
		      offsets[i] = dataView.getUint16(offset);
		      offset += 2;
		    }
		    this.relativeOffset += count * 2;
		    return offsets;
		  };
		  Parser.prototype.parseShortList = function(count) {
		    const list = new Array(count);
		    const dataView = this.data;
		    let offset = this.offset + this.relativeOffset;
		    for (let i = 0; i < count; i++) {
		      list[i] = dataView.getInt16(offset);
		      offset += 2;
		    }
		    this.relativeOffset += count * 2;
		    return list;
		  };
		  Parser.prototype.parseByteList = function(count) {
		    const list = new Array(count);
		    const dataView = this.data;
		    let offset = this.offset + this.relativeOffset;
		    for (let i = 0; i < count; i++) {
		      list[i] = dataView.getUint8(offset++);
		    }
		    this.relativeOffset += count;
		    return list;
		  };
		  Parser.prototype.parseList = function(count, itemCallback) {
		    if (!itemCallback) {
		      itemCallback = count;
		      count = this.parseUShort();
		    }
		    const list = new Array(count);
		    for (let i = 0; i < count; i++) {
		      list[i] = itemCallback.call(this);
		    }
		    return list;
		  };
		  Parser.prototype.parseList32 = function(count, itemCallback) {
		    if (!itemCallback) {
		      itemCallback = count;
		      count = this.parseULong();
		    }
		    const list = new Array(count);
		    for (let i = 0; i < count; i++) {
		      list[i] = itemCallback.call(this);
		    }
		    return list;
		  };
		  Parser.prototype.parseRecordList = function(count, recordDescription) {
		    if (!recordDescription) {
		      recordDescription = count;
		      count = this.parseUShort();
		    }
		    const records = new Array(count);
		    const fields = Object.keys(recordDescription);
		    for (let i = 0; i < count; i++) {
		      const rec = {};
		      for (let j = 0; j < fields.length; j++) {
		        const fieldName = fields[j];
		        const fieldType = recordDescription[fieldName];
		        rec[fieldName] = fieldType.call(this);
		      }
		      records[i] = rec;
		    }
		    return records;
		  };
		  Parser.prototype.parseRecordList32 = function(count, recordDescription) {
		    if (!recordDescription) {
		      recordDescription = count;
		      count = this.parseULong();
		    }
		    const records = new Array(count);
		    const fields = Object.keys(recordDescription);
		    for (let i = 0; i < count; i++) {
		      const rec = {};
		      for (let j = 0; j < fields.length; j++) {
		        const fieldName = fields[j];
		        const fieldType = recordDescription[fieldName];
		        rec[fieldName] = fieldType.call(this);
		      }
		      records[i] = rec;
		    }
		    return records;
		  };
		  Parser.prototype.parseTupleRecords = function(tupleCount, axisCount) {
		    let tuples = [];
		    for (let i = 0; i < tupleCount; i++) {
		      let tuple = [];
		      for (let axisIndex = 0; axisIndex < axisCount; axisIndex++) {
		        tuple.push(this.parseF2Dot14());
		      }
		      tuples.push(tuple);
		    }
		    return tuples;
		  };
		  Parser.prototype.parseStruct = function(description) {
		    if (typeof description === "function") {
		      return description.call(this);
		    } else {
		      const fields = Object.keys(description);
		      const struct = {};
		      for (let j = 0; j < fields.length; j++) {
		        const fieldName = fields[j];
		        const fieldType = description[fieldName];
		        struct[fieldName] = fieldType.call(this);
		      }
		      return struct;
		    }
		  };
		  Parser.prototype.parseValueRecord = function(valueFormat) {
		    if (valueFormat === void 0) {
		      valueFormat = this.parseUShort();
		    }
		    if (valueFormat === 0) {
		      return;
		    }
		    const valueRecord = {};
		    if (valueFormat & 1) {
		      valueRecord.xPlacement = this.parseShort();
		    }
		    if (valueFormat & 2) {
		      valueRecord.yPlacement = this.parseShort();
		    }
		    if (valueFormat & 4) {
		      valueRecord.xAdvance = this.parseShort();
		    }
		    if (valueFormat & 8) {
		      valueRecord.yAdvance = this.parseShort();
		    }
		    if (valueFormat & 16) {
		      valueRecord.xPlaDevice = void 0;
		      this.parseShort();
		    }
		    if (valueFormat & 32) {
		      valueRecord.yPlaDevice = void 0;
		      this.parseShort();
		    }
		    if (valueFormat & 64) {
		      valueRecord.xAdvDevice = void 0;
		      this.parseShort();
		    }
		    if (valueFormat & 128) {
		      valueRecord.yAdvDevice = void 0;
		      this.parseShort();
		    }
		    return valueRecord;
		  };
		  Parser.prototype.parseValueRecordList = function() {
		    const valueFormat = this.parseUShort();
		    const valueCount = this.parseUShort();
		    const values = new Array(valueCount);
		    for (let i = 0; i < valueCount; i++) {
		      values[i] = this.parseValueRecord(valueFormat);
		    }
		    return values;
		  };
		  Parser.prototype.parsePointer = function(description) {
		    const structOffset = this.parseOffset16();
		    if (structOffset > 0) {
		      return new Parser(this.data, this.offset + structOffset).parseStruct(description);
		    }
		    return void 0;
		  };
		  Parser.prototype.parsePointer32 = function(description) {
		    const structOffset = this.parseOffset32();
		    if (structOffset > 0) {
		      return new Parser(this.data, this.offset + structOffset).parseStruct(description);
		    }
		    return void 0;
		  };
		  Parser.prototype.parseListOfLists = function(itemCallback) {
		    const offsets = this.parseOffset16List();
		    const count = offsets.length;
		    const relativeOffset = this.relativeOffset;
		    const list = new Array(count);
		    for (let i = 0; i < count; i++) {
		      const start = offsets[i];
		      if (start === 0) {
		        list[i] = void 0;
		        continue;
		      }
		      this.relativeOffset = start;
		      if (itemCallback) {
		        const subOffsets = this.parseOffset16List();
		        const subList = new Array(subOffsets.length);
		        for (let j = 0; j < subOffsets.length; j++) {
		          this.relativeOffset = start + subOffsets[j];
		          subList[j] = itemCallback.call(this);
		        }
		        list[i] = subList;
		      } else {
		        list[i] = this.parseUShortList();
		      }
		    }
		    this.relativeOffset = relativeOffset;
		    return list;
		  };
		  Parser.prototype.parseCoverage = function() {
		    const startOffset = this.offset + this.relativeOffset;
		    const format = this.parseUShort();
		    const count = this.parseUShort();
		    if (format === 1) {
		      return {
		        format: 1,
		        glyphs: this.parseUShortList(count)
		      };
		    } else if (format === 2) {
		      const ranges = new Array(count);
		      for (let i = 0; i < count; i++) {
		        ranges[i] = {
		          start: this.parseUShort(),
		          end: this.parseUShort(),
		          index: this.parseUShort()
		        };
		      }
		      return {
		        format: 2,
		        ranges
		      };
		    }
		    throw new Error("0x" + startOffset.toString(16) + ": Coverage format must be 1 or 2.");
		  };
		  Parser.prototype.parseClassDef = function() {
		    const startOffset = this.offset + this.relativeOffset;
		    const format = this.parseUShort();
		    if (format === 1) {
		      return {
		        format: 1,
		        startGlyph: this.parseUShort(),
		        classes: this.parseUShortList()
		      };
		    } else if (format === 2) {
		      return {
		        format: 2,
		        ranges: this.parseRecordList({
		          start: Parser.uShort,
		          end: Parser.uShort,
		          classId: Parser.uShort
		        })
		      };
		    }
		    console.warn(`0x${startOffset.toString(16)}: This font file uses an invalid ClassDef format of ${format}. It might be corrupted and should be reacquired if it doesn't display as intended.`);
		    return {
		      format
		    };
		  };
		  Parser.list = function(count, itemCallback) {
		    return function() {
		      return this.parseList(count, itemCallback);
		    };
		  };
		  Parser.list32 = function(count, itemCallback) {
		    return function() {
		      return this.parseList32(count, itemCallback);
		    };
		  };
		  Parser.recordList = function(count, recordDescription) {
		    return function() {
		      return this.parseRecordList(count, recordDescription);
		    };
		  };
		  Parser.recordList32 = function(count, recordDescription) {
		    return function() {
		      return this.parseRecordList32(count, recordDescription);
		    };
		  };
		  Parser.pointer = function(description) {
		    return function() {
		      return this.parsePointer(description);
		    };
		  };
		  Parser.pointer32 = function(description) {
		    return function() {
		      return this.parsePointer32(description);
		    };
		  };
		  Parser.tag = Parser.prototype.parseTag;
		  Parser.byte = Parser.prototype.parseByte;
		  Parser.uShort = Parser.offset16 = Parser.prototype.parseUShort;
		  Parser.uShortList = Parser.prototype.parseUShortList;
		  Parser.uInt24 = Parser.prototype.parseUInt24;
		  Parser.uLong = Parser.offset32 = Parser.prototype.parseULong;
		  Parser.uLongList = Parser.prototype.parseULongList;
		  Parser.fixed = Parser.prototype.parseFixed;
		  Parser.f2Dot14 = Parser.prototype.parseF2Dot14;
		  Parser.struct = Parser.prototype.parseStruct;
		  Parser.coverage = Parser.prototype.parseCoverage;
		  Parser.classDef = Parser.prototype.parseClassDef;
		  var langSysTable = {
		    reserved: Parser.uShort,
		    reqFeatureIndex: Parser.uShort,
		    featureIndexes: Parser.uShortList
		  };
		  Parser.prototype.parseScriptList = function() {
		    return this.parsePointer(Parser.recordList({
		      tag: Parser.tag,
		      script: Parser.pointer({
		        defaultLangSys: Parser.pointer(langSysTable),
		        langSysRecords: Parser.recordList({
		          tag: Parser.tag,
		          langSys: Parser.pointer(langSysTable)
		        })
		      })
		    })) || [];
		  };
		  Parser.prototype.parseFeatureList = function() {
		    return this.parsePointer(Parser.recordList({
		      tag: Parser.tag,
		      feature: Parser.pointer({
		        featureParams: Parser.offset16,
		        lookupListIndexes: Parser.uShortList
		      })
		    })) || [];
		  };
		  Parser.prototype.parseLookupList = function(lookupTableParsers) {
		    return this.parsePointer(Parser.list(Parser.pointer(function() {
		      const lookupType = this.parseUShort();
		      check_default.argument(1 <= lookupType && lookupType <= 9, "GPOS/GSUB lookup type " + lookupType + " unknown.");
		      const lookupFlag = this.parseUShort();
		      const useMarkFilteringSet = lookupFlag & 16;
		      return {
		        lookupType,
		        lookupFlag,
		        subtables: this.parseList(Parser.pointer(lookupTableParsers[lookupType])),
		        markFilteringSet: useMarkFilteringSet ? this.parseUShort() : void 0
		      };
		    }))) || [];
		  };
		  Parser.prototype.parseFeatureVariationsList = function() {
		    return this.parsePointer32(function() {
		      const majorVersion = this.parseUShort();
		      const minorVersion = this.parseUShort();
		      check_default.argument(majorVersion === 1 && minorVersion < 1, "GPOS/GSUB feature variations table unknown.");
		      const featureVariations = this.parseRecordList32({
		        conditionSetOffset: Parser.offset32,
		        featureTableSubstitutionOffset: Parser.offset32
		      });
		      return featureVariations;
		    }) || [];
		  };
		  Parser.prototype.parseVariationStore = function() {
		    const vsOffset = this.relativeOffset;
		    const length = this.parseUShort();
		    const variationStore = {
		      itemVariationStore: this.parseItemVariationStore()
		    };
		    this.relativeOffset = vsOffset + length + 2;
		    return variationStore;
		  };
		  Parser.prototype.parseItemVariationStore = function() {
		    const itemStoreOffset = this.relativeOffset;
		    const iVStore = {
		      format: this.parseUShort(),
		      variationRegions: [],
		      itemVariationSubtables: []
		    };
		    const variationRegionListOffset = this.parseOffset32();
		    const itemVariationDataCount = this.parseUShort();
		    const itemVariationDataOffsets = this.parseULongList(itemVariationDataCount);
		    this.relativeOffset = itemStoreOffset + variationRegionListOffset;
		    iVStore.variationRegions = this.parseVariationRegionList();
		    for (let i = 0; i < itemVariationDataCount; i++) {
		      const subtableOffset = itemVariationDataOffsets[i];
		      this.relativeOffset = itemStoreOffset + subtableOffset;
		      iVStore.itemVariationSubtables.push(this.parseItemVariationSubtable());
		    }
		    return iVStore;
		  };
		  Parser.prototype.parseVariationRegionList = function() {
		    const axisCount = this.parseUShort();
		    const regionCount = this.parseUShort();
		    return this.parseRecordList(regionCount, {
		      regionAxes: Parser.recordList(axisCount, {
		        startCoord: Parser.f2Dot14,
		        peakCoord: Parser.f2Dot14,
		        endCoord: Parser.f2Dot14
		      })
		    });
		  };
		  Parser.prototype.parseItemVariationSubtable = function() {
		    const itemCount = this.parseUShort();
		    const wordDeltaCount = this.parseUShort();
		    const regionIndexes = this.parseUShortList();
		    const regionIndexCount = regionIndexes.length;
		    const subtable = {
		      regionIndexes,
		      deltaSets: itemCount && regionIndexCount ? this.parseDeltaSets(itemCount, wordDeltaCount, regionIndexCount) : []
		    };
		    return subtable;
		  };
		  Parser.prototype.parseDeltaSetIndexMap = function() {
		    const format = this.parseByte();
		    const entryFormat = this.parseByte();
		    const map = [];
		    let mapCount = 0;
		    switch (format) {
		      case 0:
		        mapCount = this.parseUShort();
		        break;
		      case 1:
		        mapCount = this.parseULong();
		        break;
		      default:
		        console.error(`unsupported DeltaSetIndexMap format ${format}`);
		    }
		    if (!mapCount) return {
		      format,
		      entryFormat
		    };
		    const bitCount = (entryFormat & masks.INNER_INDEX_BIT_COUNT_MASK) + 1;
		    const entrySize = ((entryFormat & masks.MAP_ENTRY_SIZE_MASK) >> 4) + 1;
		    for (let n = 0; n < mapCount; n++) {
		      let entry;
		      if (entrySize === 1) {
		        entry = this.parseByte();
		      } else if (entrySize === 2) {
		        entry = this.parseUShort();
		      } else if (entrySize === 3) {
		        entry = this.parseUInt24();
		      } else if (entrySize === 4) {
		        entry = this.parseULong();
		      } else {
		        throw new Error(`Invalid entry size of ${entrySize}`);
		      }
		      const outerIndex = entry >> bitCount;
		      const innerIndex = entry & (1 << bitCount) - 1;
		      map.push({ outerIndex, innerIndex });
		    }
		    return {
		      format,
		      entryFormat,
		      map
		    };
		  };
		  Parser.prototype.parseDeltaSets = function(itemCount, wordDeltaCount, regionIndexCount) {
		    const deltas = Array.from({ length: itemCount }, () => []);
		    const longFlag = wordDeltaCount & masks.LONG_WORDS;
		    const wordCount = wordDeltaCount & masks.WORD_DELTA_COUNT_MASK;
		    if (wordCount > regionIndexCount) {
		      throw Error("wordCount must be less than or equal to regionIndexCount");
		    }
		    const wordParser = (longFlag ? this.parseLong : this.parseShort).bind(this);
		    const restParser = (longFlag ? this.parseShort : this.parseChar).bind(this);
		    for (let i = 0; i < itemCount; i++) {
		      for (let j = 0; j < regionIndexCount; j++) {
		        if (j < wordCount) {
		          deltas[i].push(wordParser());
		        } else {
		          deltas[i].push(restParser());
		        }
		      }
		    }
		    return deltas;
		  };
		  Parser.prototype.parseTupleVariationStoreList = function(axisCount, flavor, glyphs) {
		    const glyphCount = this.parseUShort();
		    const flags = this.parseUShort();
		    const offsetSizeIs32Bit = flags & 1;
		    const glyphVariationDataArrayOffset = this.parseOffset32();
		    const parseOffset = (offsetSizeIs32Bit ? this.parseULong : this.parseUShort).bind(this);
		    const glyphVariations = {};
		    let currentOffset = parseOffset();
		    if (!offsetSizeIs32Bit) currentOffset *= 2;
		    let nextOffset;
		    for (let i = 0; i < glyphCount; i++) {
		      nextOffset = parseOffset();
		      if (!offsetSizeIs32Bit) nextOffset *= 2;
		      const length = nextOffset - currentOffset;
		      glyphVariations[i] = length ? this.parseTupleVariationStore(
		        glyphVariationDataArrayOffset + currentOffset,
		        axisCount,
		        flavor,
		        glyphs,
		        i
		      ) : void 0;
		      currentOffset = nextOffset;
		    }
		    return glyphVariations;
		  };
		  Parser.prototype.parseTupleVariationStore = function(tableOffset, axisCount, flavor, glyphs, glyphIndex) {
		    const relativeOffset = this.relativeOffset;
		    this.relativeOffset = tableOffset;
		    if (flavor === "cvar") {
		      this.relativeOffset += 4;
		    }
		    const tupleVariationCount = this.parseUShort();
		    const hasSharedPoints = !!(tupleVariationCount & masks.SHARED_POINT_NUMBERS);
		    const count = tupleVariationCount & masks.COUNT_MASK;
		    let dataOffset = this.parseOffset16();
		    const headers = [];
		    let sharedPoints = [];
		    for (let h = 0; h < count; h++) {
		      const headerData = this.parseTupleVariationHeader(axisCount, flavor);
		      headers.push(headerData);
		    }
		    if (this.relativeOffset !== tableOffset + dataOffset) {
		      console.warn(`Unexpected offset after parsing tuple variation headers! Expected ${tableOffset + dataOffset}, actually ${this.relativeOffset}`);
		      this.relativeOffset = tableOffset + dataOffset;
		    }
		    if (hasSharedPoints) {
		      sharedPoints = this.parsePackedPointNumbers();
		    }
		    let serializedDataOffset = this.relativeOffset;
		    for (let h = 0; h < count; h++) {
		      const header = headers[h];
		      header.privatePoints = [];
		      this.relativeOffset = serializedDataOffset;
		      if (flavor === "cvar" && !header.peakTuple) {
		        console.warn("An embedded peak tuple is required in TupleVariationHeaders for the cvar table.");
		      }
		      if (header.flags.privatePointNumbers) {
		        header.privatePoints = this.parsePackedPointNumbers();
		      }
		      delete header.flags;
		      const deltasOffset = this.offset;
		      const deltasRelativeOffset = this.relativeOffset;
		      const defineDeltas = (propertyName) => {
		        let _deltas = void 0;
		        let _deltasY = void 0;
		        const parseDeltas = () => {
		          let pointsCount = 0;
		          if (flavor === "gvar") {
		            pointsCount = header.privatePoints.length || sharedPoints.length;
		            if (!pointsCount) {
		              const glyph = glyphs.get(glyphIndex);
		              glyph.path;
		              pointsCount = glyph.points.length;
		              pointsCount += 4;
		            }
		          } else if (flavor === "cvar") {
		            pointsCount = glyphs.length;
		          }
		          this.offset = deltasOffset;
		          this.relativeOffset = deltasRelativeOffset;
		          _deltas = this.parsePackedDeltas(pointsCount);
		          if (flavor === "gvar") {
		            _deltasY = this.parsePackedDeltas(pointsCount);
		          }
		        };
		        return {
		          configurable: true,
		          get: function() {
		            if (_deltas === void 0) parseDeltas();
		            return propertyName === "deltasY" ? _deltasY : _deltas;
		          },
		          set: function(deltas) {
		            if (_deltas === void 0) parseDeltas();
		            if (propertyName === "deltasY") {
		              _deltasY = deltas;
		            } else {
		              _deltas = deltas;
		            }
		          }
		        };
		      };
		      Object.defineProperty(header, "deltas", defineDeltas.call(this, "deltas"));
		      if (flavor === "gvar") {
		        Object.defineProperty(header, "deltasY", defineDeltas.call(this, "deltasY"));
		      }
		      serializedDataOffset += header.variationDataSize;
		      delete header.variationDataSize;
		    }
		    this.relativeOffset = relativeOffset;
		    const result = {
		      headers
		    };
		    result.sharedPoints = sharedPoints;
		    return result;
		  };
		  Parser.prototype.parseTupleVariationHeader = function(axisCount, flavor) {
		    const variationDataSize = this.parseUShort();
		    const tupleIndex = this.parseUShort();
		    const embeddedPeakTuple = !!(tupleIndex & masks.EMBEDDED_PEAK_TUPLE);
		    const intermediateRegion = !!(tupleIndex & masks.INTERMEDIATE_REGION);
		    const privatePointNumbers = !!(tupleIndex & masks.PRIVATE_POINT_NUMBERS);
		    const sharedTupleRecordsIndex = embeddedPeakTuple ? void 0 : tupleIndex & masks.TUPLE_INDEX_MASK;
		    const peakTuple = embeddedPeakTuple ? this.parseTupleRecords(1, axisCount)[0] : void 0;
		    const intermediateStartTuple = intermediateRegion ? this.parseTupleRecords(1, axisCount)[0] : void 0;
		    const intermediateEndTuple = intermediateRegion ? this.parseTupleRecords(1, axisCount)[0] : void 0;
		    const result = {
		      variationDataSize,
		      peakTuple,
		      intermediateStartTuple,
		      intermediateEndTuple,
		      flags: {
		        embeddedPeakTuple,
		        intermediateRegion,
		        privatePointNumbers
		      }
		    };
		    if (flavor === "gvar") {
		      result.sharedTupleRecordsIndex = sharedTupleRecordsIndex;
		    }
		    return result;
		  };
		  Parser.prototype.parsePackedPointNumbers = function() {
		    const countByte1 = this.parseByte();
		    const points = [];
		    let totalPointCount = countByte1;
		    if (countByte1 >= 128) {
		      const countByte2 = this.parseByte();
		      totalPointCount = (countByte1 & masks.POINT_RUN_COUNT_MASK) << 8 | countByte2;
		    }
		    let lastPoint = 0;
		    while (points.length < totalPointCount) {
		      const controlByte = this.parseByte();
		      const numbersAre16Bit = !!(controlByte & masks.POINTS_ARE_WORDS);
		      let runCount = (controlByte & masks.POINT_RUN_COUNT_MASK) + 1;
		      for (let i = 0; i < runCount && points.length < totalPointCount; i++) {
		        let pointDelta;
		        if (numbersAre16Bit) {
		          pointDelta = this.parseUShort();
		        } else {
		          pointDelta = this.parseByte();
		        }
		        lastPoint = lastPoint + pointDelta;
		        points.push(lastPoint);
		      }
		    }
		    return points;
		  };
		  Parser.prototype.parsePackedDeltas = function(expectedCount) {
		    const deltas = [];
		    while (deltas.length < expectedCount) {
		      const controlByte = this.parseByte();
		      const zeroData = !!(controlByte & masks.DELTAS_ARE_ZERO);
		      const deltaWords = !!(controlByte & masks.DELTAS_ARE_WORDS);
		      const runCount = (controlByte & masks.DELTA_RUN_COUNT_MASK) + 1;
		      for (let i = 0; i < runCount && deltas.length < expectedCount; i++) {
		        if (zeroData) {
		          deltas.push(0);
		        } else if (deltaWords) {
		          deltas.push(this.parseShort());
		        } else {
		          deltas.push(this.parseChar());
		        }
		      }
		    }
		    return deltas;
		  };
		  var parse_default = {
		    getByte,
		    getCard8: getByte,
		    getUShort,
		    getCard16: getUShort,
		    getShort,
		    getUInt24,
		    getULong,
		    getFixed,
		    getTag,
		    getOffset,
		    getBytes,
		    bytesToString,
		    Parser
		  };

		  // src/tables/name.mjs
		  var nameTableNames = [
		    "copyright",
		    // 0
		    "fontFamily",
		    // 1
		    "fontSubfamily",
		    // 2
		    "uniqueID",
		    // 3
		    "fullName",
		    // 4
		    "version",
		    // 5
		    "postScriptName",
		    // 6
		    "trademark",
		    // 7
		    "manufacturer",
		    // 8
		    "designer",
		    // 9
		    "description",
		    // 10
		    "manufacturerURL",
		    // 11
		    "designerURL",
		    // 12
		    "license",
		    // 13
		    "licenseURL",
		    // 14
		    "reserved",
		    // 15
		    "preferredFamily",
		    // 16
		    "preferredSubfamily",
		    // 17
		    "compatibleFullName",
		    // 18
		    "sampleText",
		    // 19
		    "postScriptFindFontName",
		    // 20
		    "wwsFamily",
		    // 21
		    "wwsSubfamily"
		    // 22
		  ];
		  var macLanguages = {
		    0: "en",
		    1: "fr",
		    2: "de",
		    3: "it",
		    4: "nl",
		    5: "sv",
		    6: "es",
		    7: "da",
		    8: "pt",
		    9: "no",
		    10: "he",
		    11: "ja",
		    12: "ar",
		    13: "fi",
		    14: "el",
		    15: "is",
		    16: "mt",
		    17: "tr",
		    18: "hr",
		    19: "zh-Hant",
		    20: "ur",
		    21: "hi",
		    22: "th",
		    23: "ko",
		    24: "lt",
		    25: "pl",
		    26: "hu",
		    27: "es",
		    28: "lv",
		    29: "se",
		    30: "fo",
		    31: "fa",
		    32: "ru",
		    33: "zh",
		    34: "nl-BE",
		    35: "ga",
		    36: "sq",
		    37: "ro",
		    38: "cz",
		    39: "sk",
		    40: "si",
		    41: "yi",
		    42: "sr",
		    43: "mk",
		    44: "bg",
		    45: "uk",
		    46: "be",
		    47: "uz",
		    48: "kk",
		    49: "az-Cyrl",
		    50: "az-Arab",
		    51: "hy",
		    52: "ka",
		    53: "mo",
		    54: "ky",
		    55: "tg",
		    56: "tk",
		    57: "mn-CN",
		    58: "mn",
		    59: "ps",
		    60: "ks",
		    61: "ku",
		    62: "sd",
		    63: "bo",
		    64: "ne",
		    65: "sa",
		    66: "mr",
		    67: "bn",
		    68: "as",
		    69: "gu",
		    70: "pa",
		    71: "or",
		    72: "ml",
		    73: "kn",
		    74: "ta",
		    75: "te",
		    76: "si",
		    77: "my",
		    78: "km",
		    79: "lo",
		    80: "vi",
		    81: "id",
		    82: "tl",
		    83: "ms",
		    84: "ms-Arab",
		    85: "am",
		    86: "ti",
		    87: "om",
		    88: "so",
		    89: "sw",
		    90: "rw",
		    91: "rn",
		    92: "ny",
		    93: "mg",
		    94: "eo",
		    128: "cy",
		    129: "eu",
		    130: "ca",
		    131: "la",
		    132: "qu",
		    133: "gn",
		    134: "ay",
		    135: "tt",
		    136: "ug",
		    137: "dz",
		    138: "jv",
		    139: "su",
		    140: "gl",
		    141: "af",
		    142: "br",
		    143: "iu",
		    144: "gd",
		    145: "gv",
		    146: "ga",
		    147: "to",
		    148: "el-polyton",
		    149: "kl",
		    150: "az",
		    151: "nn"
		  };
		  var macLanguageToScript = {
		    0: 0,
		    // langEnglish → smRoman
		    1: 0,
		    // langFrench → smRoman
		    2: 0,
		    // langGerman → smRoman
		    3: 0,
		    // langItalian → smRoman
		    4: 0,
		    // langDutch → smRoman
		    5: 0,
		    // langSwedish → smRoman
		    6: 0,
		    // langSpanish → smRoman
		    7: 0,
		    // langDanish → smRoman
		    8: 0,
		    // langPortuguese → smRoman
		    9: 0,
		    // langNorwegian → smRoman
		    10: 5,
		    // langHebrew → smHebrew
		    11: 1,
		    // langJapanese → smJapanese
		    12: 4,
		    // langArabic → smArabic
		    13: 0,
		    // langFinnish → smRoman
		    14: 6,
		    // langGreek → smGreek
		    15: 0,
		    // langIcelandic → smRoman (modified)
		    16: 0,
		    // langMaltese → smRoman
		    17: 0,
		    // langTurkish → smRoman (modified)
		    18: 0,
		    // langCroatian → smRoman (modified)
		    19: 2,
		    // langTradChinese → smTradChinese
		    20: 4,
		    // langUrdu → smArabic
		    21: 9,
		    // langHindi → smDevanagari
		    22: 21,
		    // langThai → smThai
		    23: 3,
		    // langKorean → smKorean
		    24: 29,
		    // langLithuanian → smCentralEuroRoman
		    25: 29,
		    // langPolish → smCentralEuroRoman
		    26: 29,
		    // langHungarian → smCentralEuroRoman
		    27: 29,
		    // langEstonian → smCentralEuroRoman
		    28: 29,
		    // langLatvian → smCentralEuroRoman
		    29: 0,
		    // langSami → smRoman
		    30: 0,
		    // langFaroese → smRoman (modified)
		    31: 4,
		    // langFarsi → smArabic (modified)
		    32: 7,
		    // langRussian → smCyrillic
		    33: 25,
		    // langSimpChinese → smSimpChinese
		    34: 0,
		    // langFlemish → smRoman
		    35: 0,
		    // langIrishGaelic → smRoman (modified)
		    36: 0,
		    // langAlbanian → smRoman
		    37: 0,
		    // langRomanian → smRoman (modified)
		    38: 29,
		    // langCzech → smCentralEuroRoman
		    39: 29,
		    // langSlovak → smCentralEuroRoman
		    40: 0,
		    // langSlovenian → smRoman (modified)
		    41: 5,
		    // langYiddish → smHebrew
		    42: 7,
		    // langSerbian → smCyrillic
		    43: 7,
		    // langMacedonian → smCyrillic
		    44: 7,
		    // langBulgarian → smCyrillic
		    45: 7,
		    // langUkrainian → smCyrillic (modified)
		    46: 7,
		    // langByelorussian → smCyrillic
		    47: 7,
		    // langUzbek → smCyrillic
		    48: 7,
		    // langKazakh → smCyrillic
		    49: 7,
		    // langAzerbaijani → smCyrillic
		    50: 4,
		    // langAzerbaijanAr → smArabic
		    51: 24,
		    // langArmenian → smArmenian
		    52: 23,
		    // langGeorgian → smGeorgian
		    53: 7,
		    // langMoldavian → smCyrillic
		    54: 7,
		    // langKirghiz → smCyrillic
		    55: 7,
		    // langTajiki → smCyrillic
		    56: 7,
		    // langTurkmen → smCyrillic
		    57: 27,
		    // langMongolian → smMongolian
		    58: 7,
		    // langMongolianCyr → smCyrillic
		    59: 4,
		    // langPashto → smArabic
		    60: 4,
		    // langKurdish → smArabic
		    61: 4,
		    // langKashmiri → smArabic
		    62: 4,
		    // langSindhi → smArabic
		    63: 26,
		    // langTibetan → smTibetan
		    64: 9,
		    // langNepali → smDevanagari
		    65: 9,
		    // langSanskrit → smDevanagari
		    66: 9,
		    // langMarathi → smDevanagari
		    67: 13,
		    // langBengali → smBengali
		    68: 13,
		    // langAssamese → smBengali
		    69: 11,
		    // langGujarati → smGujarati
		    70: 10,
		    // langPunjabi → smGurmukhi
		    71: 12,
		    // langOriya → smOriya
		    72: 17,
		    // langMalayalam → smMalayalam
		    73: 16,
		    // langKannada → smKannada
		    74: 14,
		    // langTamil → smTamil
		    75: 15,
		    // langTelugu → smTelugu
		    76: 18,
		    // langSinhalese → smSinhalese
		    77: 19,
		    // langBurmese → smBurmese
		    78: 20,
		    // langKhmer → smKhmer
		    79: 22,
		    // langLao → smLao
		    80: 30,
		    // langVietnamese → smVietnamese
		    81: 0,
		    // langIndonesian → smRoman
		    82: 0,
		    // langTagalog → smRoman
		    83: 0,
		    // langMalayRoman → smRoman
		    84: 4,
		    // langMalayArabic → smArabic
		    85: 28,
		    // langAmharic → smEthiopic
		    86: 28,
		    // langTigrinya → smEthiopic
		    87: 28,
		    // langOromo → smEthiopic
		    88: 0,
		    // langSomali → smRoman
		    89: 0,
		    // langSwahili → smRoman
		    90: 0,
		    // langKinyarwanda → smRoman
		    91: 0,
		    // langRundi → smRoman
		    92: 0,
		    // langNyanja → smRoman
		    93: 0,
		    // langMalagasy → smRoman
		    94: 0,
		    // langEsperanto → smRoman
		    128: 0,
		    // langWelsh → smRoman (modified)
		    129: 0,
		    // langBasque → smRoman
		    130: 0,
		    // langCatalan → smRoman
		    131: 0,
		    // langLatin → smRoman
		    132: 0,
		    // langQuechua → smRoman
		    133: 0,
		    // langGuarani → smRoman
		    134: 0,
		    // langAymara → smRoman
		    135: 7,
		    // langTatar → smCyrillic
		    136: 4,
		    // langUighur → smArabic
		    137: 26,
		    // langDzongkha → smTibetan
		    138: 0,
		    // langJavaneseRom → smRoman
		    139: 0,
		    // langSundaneseRom → smRoman
		    140: 0,
		    // langGalician → smRoman
		    141: 0,
		    // langAfrikaans → smRoman
		    142: 0,
		    // langBreton → smRoman (modified)
		    143: 28,
		    // langInuktitut → smEthiopic (modified)
		    144: 0,
		    // langScottishGaelic → smRoman (modified)
		    145: 0,
		    // langManxGaelic → smRoman (modified)
		    146: 0,
		    // langIrishGaelicScript → smRoman (modified)
		    147: 0,
		    // langTongan → smRoman
		    148: 6,
		    // langGreekAncient → smRoman
		    149: 0,
		    // langGreenlandic → smRoman
		    150: 0,
		    // langAzerbaijanRoman → smRoman
		    151: 0
		    // langNynorsk → smRoman
		  };
		  var windowsLanguages = {
		    1078: "af",
		    1052: "sq",
		    1156: "gsw",
		    1118: "am",
		    5121: "ar-DZ",
		    15361: "ar-BH",
		    3073: "ar",
		    2049: "ar-IQ",
		    11265: "ar-JO",
		    13313: "ar-KW",
		    12289: "ar-LB",
		    4097: "ar-LY",
		    6145: "ary",
		    8193: "ar-OM",
		    16385: "ar-QA",
		    1025: "ar-SA",
		    10241: "ar-SY",
		    7169: "aeb",
		    14337: "ar-AE",
		    9217: "ar-YE",
		    1067: "hy",
		    1101: "as",
		    2092: "az-Cyrl",
		    1068: "az",
		    1133: "ba",
		    1069: "eu",
		    1059: "be",
		    2117: "bn",
		    1093: "bn-IN",
		    8218: "bs-Cyrl",
		    5146: "bs",
		    1150: "br",
		    1026: "bg",
		    1027: "ca",
		    3076: "zh-HK",
		    5124: "zh-MO",
		    2052: "zh",
		    4100: "zh-SG",
		    1028: "zh-TW",
		    1155: "co",
		    1050: "hr",
		    4122: "hr-BA",
		    1029: "cs",
		    1030: "da",
		    1164: "prs",
		    1125: "dv",
		    2067: "nl-BE",
		    1043: "nl",
		    3081: "en-AU",
		    10249: "en-BZ",
		    4105: "en-CA",
		    9225: "en-029",
		    16393: "en-IN",
		    6153: "en-IE",
		    8201: "en-JM",
		    17417: "en-MY",
		    5129: "en-NZ",
		    13321: "en-PH",
		    18441: "en-SG",
		    7177: "en-ZA",
		    11273: "en-TT",
		    2057: "en-GB",
		    1033: "en",
		    12297: "en-ZW",
		    1061: "et",
		    1080: "fo",
		    1124: "fil",
		    1035: "fi",
		    2060: "fr-BE",
		    3084: "fr-CA",
		    1036: "fr",
		    5132: "fr-LU",
		    6156: "fr-MC",
		    4108: "fr-CH",
		    1122: "fy",
		    1110: "gl",
		    1079: "ka",
		    3079: "de-AT",
		    1031: "de",
		    5127: "de-LI",
		    4103: "de-LU",
		    2055: "de-CH",
		    1032: "el",
		    1135: "kl",
		    1095: "gu",
		    1128: "ha",
		    1037: "he",
		    1081: "hi",
		    1038: "hu",
		    1039: "is",
		    1136: "ig",
		    1057: "id",
		    1117: "iu",
		    2141: "iu-Latn",
		    2108: "ga",
		    1076: "xh",
		    1077: "zu",
		    1040: "it",
		    2064: "it-CH",
		    1041: "ja",
		    1099: "kn",
		    1087: "kk",
		    1107: "km",
		    1158: "quc",
		    1159: "rw",
		    1089: "sw",
		    1111: "kok",
		    1042: "ko",
		    1088: "ky",
		    1108: "lo",
		    1062: "lv",
		    1063: "lt",
		    2094: "dsb",
		    1134: "lb",
		    1071: "mk",
		    2110: "ms-BN",
		    1086: "ms",
		    1100: "ml",
		    1082: "mt",
		    1153: "mi",
		    1146: "arn",
		    1102: "mr",
		    1148: "moh",
		    1104: "mn",
		    2128: "mn-CN",
		    1121: "ne",
		    1044: "nb",
		    2068: "nn",
		    1154: "oc",
		    1096: "or",
		    1123: "ps",
		    1045: "pl",
		    1046: "pt",
		    2070: "pt-PT",
		    1094: "pa",
		    1131: "qu-BO",
		    2155: "qu-EC",
		    3179: "qu",
		    1048: "ro",
		    1047: "rm",
		    1049: "ru",
		    9275: "smn",
		    4155: "smj-NO",
		    5179: "smj",
		    3131: "se-FI",
		    1083: "se",
		    2107: "se-SE",
		    8251: "sms",
		    6203: "sma-NO",
		    7227: "sms",
		    1103: "sa",
		    7194: "sr-Cyrl-BA",
		    3098: "sr",
		    6170: "sr-Latn-BA",
		    2074: "sr-Latn",
		    1132: "nso",
		    1074: "tn",
		    1115: "si",
		    1051: "sk",
		    1060: "sl",
		    11274: "es-AR",
		    16394: "es-BO",
		    13322: "es-CL",
		    9226: "es-CO",
		    5130: "es-CR",
		    7178: "es-DO",
		    12298: "es-EC",
		    17418: "es-SV",
		    4106: "es-GT",
		    18442: "es-HN",
		    2058: "es-MX",
		    19466: "es-NI",
		    6154: "es-PA",
		    15370: "es-PY",
		    10250: "es-PE",
		    20490: "es-PR",
		    // Microsoft has defined two different language codes for
		    // “Spanish with modern sorting” and “Spanish with traditional
		    // sorting”. This makes sense for collation APIs, and it would be
		    // possible to express this in BCP 47 language tags via Unicode
		    // extensions (eg., es-u-co-trad is Spanish with traditional
		    // sorting). However, for storing names in fonts, the distinction
		    // does not make sense, so we give “es” in both cases.
		    3082: "es",
		    1034: "es",
		    21514: "es-US",
		    14346: "es-UY",
		    8202: "es-VE",
		    2077: "sv-FI",
		    1053: "sv",
		    1114: "syr",
		    1064: "tg",
		    2143: "tzm",
		    1097: "ta",
		    1092: "tt",
		    1098: "te",
		    1054: "th",
		    1105: "bo",
		    1055: "tr",
		    1090: "tk",
		    1152: "ug",
		    1058: "uk",
		    1070: "hsb",
		    1056: "ur",
		    2115: "uz-Cyrl",
		    1091: "uz",
		    1066: "vi",
		    1106: "cy",
		    1160: "wo",
		    1157: "sah",
		    1144: "ii",
		    1130: "yo"
		  };
		  function getLanguageCode(platformID, languageID, ltag) {
		    switch (platformID) {
		      case 0:
		        if (languageID === 65535) {
		          return "und";
		        } else if (ltag) {
		          return ltag[languageID];
		        }
		        break;
		      case 1:
		        return macLanguages[languageID];
		      case 3:
		        return windowsLanguages[languageID];
		    }
		    return void 0;
		  }
		  var utf16 = "utf-16";
		  var macScriptEncodings = {
		    0: "macintosh",
		    // smRoman
		    1: "x-mac-japanese",
		    // smJapanese
		    2: "x-mac-chinesetrad",
		    // smTradChinese
		    3: "x-mac-korean",
		    // smKorean
		    6: "x-mac-greek",
		    // smGreek
		    7: "x-mac-cyrillic",
		    // smCyrillic
		    9: "x-mac-devanagai",
		    // smDevanagari
		    10: "x-mac-gurmukhi",
		    // smGurmukhi
		    11: "x-mac-gujarati",
		    // smGujarati
		    12: "x-mac-oriya",
		    // smOriya
		    13: "x-mac-bengali",
		    // smBengali
		    14: "x-mac-tamil",
		    // smTamil
		    15: "x-mac-telugu",
		    // smTelugu
		    16: "x-mac-kannada",
		    // smKannada
		    17: "x-mac-malayalam",
		    // smMalayalam
		    18: "x-mac-sinhalese",
		    // smSinhalese
		    19: "x-mac-burmese",
		    // smBurmese
		    20: "x-mac-khmer",
		    // smKhmer
		    21: "x-mac-thai",
		    // smThai
		    22: "x-mac-lao",
		    // smLao
		    23: "x-mac-georgian",
		    // smGeorgian
		    24: "x-mac-armenian",
		    // smArmenian
		    25: "x-mac-chinesesimp",
		    // smSimpChinese
		    26: "x-mac-tibetan",
		    // smTibetan
		    27: "x-mac-mongolian",
		    // smMongolian
		    28: "x-mac-ethiopic",
		    // smEthiopic
		    29: "x-mac-ce",
		    // smCentralEuroRoman
		    30: "x-mac-vietnamese",
		    // smVietnamese
		    31: "x-mac-extarabic"
		    // smExtArabic
		  };
		  var macLanguageEncodings = {
		    15: "x-mac-icelandic",
		    // langIcelandic
		    17: "x-mac-turkish",
		    // langTurkish
		    18: "x-mac-croatian",
		    // langCroatian
		    24: "x-mac-ce",
		    // langLithuanian
		    25: "x-mac-ce",
		    // langPolish
		    26: "x-mac-ce",
		    // langHungarian
		    27: "x-mac-ce",
		    // langEstonian
		    28: "x-mac-ce",
		    // langLatvian
		    30: "x-mac-icelandic",
		    // langFaroese
		    37: "x-mac-romanian",
		    // langRomanian
		    38: "x-mac-ce",
		    // langCzech
		    39: "x-mac-ce",
		    // langSlovak
		    40: "x-mac-ce",
		    // langSlovenian
		    143: "x-mac-inuit",
		    // langInuktitut
		    146: "x-mac-gaelic"
		    // langIrishGaelicScript
		  };
		  function getEncoding(platformID, encodingID, languageID) {
		    switch (platformID) {
		      case 0:
		        return utf16;
		      case 1:
		        return macLanguageEncodings[languageID] || macScriptEncodings[encodingID];
		      case 3:
		        if (encodingID === 1 || encodingID === 10) {
		          return utf16;
		        }
		        break;
		    }
		    return void 0;
		  }
		  var platforms = {
		    0: "unicode",
		    1: "macintosh",
		    2: "reserved",
		    3: "windows"
		  };
		  function getPlatform(platformID) {
		    return platforms[platformID];
		  }
		  function parseNameTable(data, start, ltag) {
		    const name = {};
		    const p = new parse_default.Parser(data, start);
		    const format = p.parseUShort();
		    const count = p.parseUShort();
		    const stringOffset = p.offset + p.parseUShort();
		    for (let i = 0; i < count; i++) {
		      const platformID = p.parseUShort();
		      const encodingID = p.parseUShort();
		      const languageID = p.parseUShort();
		      const nameID = p.parseUShort();
		      const property = nameTableNames[nameID] || nameID;
		      const byteLength = p.parseUShort();
		      const offset = p.parseUShort();
		      const language = getLanguageCode(platformID, languageID, ltag);
		      const encoding = getEncoding(platformID, encodingID, languageID);
		      const platformName = getPlatform(platformID);
		      if (encoding !== void 0 && language !== void 0 && platformName !== void 0) {
		        let text;
		        if (encoding === utf16) {
		          text = decode.UTF16(data, stringOffset + offset, byteLength);
		        } else {
		          text = decode.MACSTRING(data, stringOffset + offset, byteLength, encoding);
		        }
		        if (text) {
		          let platform = name[platformName];
		          if (platform === void 0) {
		            platform = name[platformName] = {};
		          }
		          let translations = platform[property];
		          if (translations === void 0) {
		            translations = platform[property] = {};
		          }
		          translations[language] = text;
		        }
		      }
		    }
		    if (format === 1) {
		      p.parseUShort();
		    }
		    return name;
		  }
		  function reverseDict(dict) {
		    const result = {};
		    for (let key in dict) {
		      result[dict[key]] = parseInt(key);
		    }
		    return result;
		  }
		  function makeNameRecord(platformID, encodingID, languageID, nameID, length, offset) {
		    return new table_default.Record("NameRecord", [
		      { name: "platformID", type: "USHORT", value: platformID },
		      { name: "encodingID", type: "USHORT", value: encodingID },
		      { name: "languageID", type: "USHORT", value: languageID },
		      { name: "nameID", type: "USHORT", value: nameID },
		      { name: "length", type: "USHORT", value: length },
		      { name: "offset", type: "USHORT", value: offset }
		    ]);
		  }
		  function findSubArray(needle, haystack) {
		    const needleLength = needle.length;
		    const limit = haystack.length - needleLength + 1;
		    loop:
		      for (let pos = 0; pos < limit; pos++) {
		        for (; pos < limit; pos++) {
		          for (let k = 0; k < needleLength; k++) {
		            if (haystack[pos + k] !== needle[k]) {
		              continue loop;
		            }
		          }
		          return pos;
		        }
		      }
		    return -1;
		  }
		  function addStringToPool(s, pool) {
		    let offset = findSubArray(s, pool);
		    if (offset < 0) {
		      offset = pool.length;
		      let i = 0;
		      const len = s.length;
		      for (; i < len; ++i) {
		        pool.push(s[i]);
		      }
		    }
		    return offset;
		  }
		  function makeNameTable(names, ltag) {
		    const platformNameIds = reverseDict(platforms);
		    const macLanguageIds = reverseDict(macLanguages);
		    const windowsLanguageIds = reverseDict(windowsLanguages);
		    const nameRecords = [];
		    const stringPool = [];
		    for (let platform in names) {
		      let nameID;
		      const nameIDs = [];
		      const namesWithNumericKeys = {};
		      const nameTableIds = reverseDict(nameTableNames);
		      const platformID = platformNameIds[platform];
		      for (let key in names[platform]) {
		        let id = nameTableIds[key];
		        if (id === void 0) {
		          id = key;
		        }
		        nameID = parseInt(id);
		        if (isNaN(nameID)) {
		          throw new Error('Name table entry "' + key + '" does not exist, see nameTableNames for complete list.');
		        }
		        namesWithNumericKeys[nameID] = names[platform][key];
		        nameIDs.push(nameID);
		      }
		      for (let i = 0; i < nameIDs.length; i++) {
		        nameID = nameIDs[i];
		        const translations = namesWithNumericKeys[nameID];
		        for (let lang in translations) {
		          const text = translations[lang];
		          if (platformID === 1 || platformID === 0) {
		            let macLanguage = macLanguageIds[lang];
		            let macScript = macLanguageToScript[macLanguage];
		            const macEncoding = getEncoding(platformID, macScript, macLanguage);
		            let macName = encode.MACSTRING(text, macEncoding);
		            if (platformID === 0) {
		              macLanguage = ltag.indexOf(lang);
		              if (macLanguage < 0) {
		                macLanguage = ltag.length;
		                ltag.push(lang);
		              }
		              macScript = 4;
		              macName = encode.UTF16(text);
		            }
		            if (macName !== void 0) {
		              const macNameOffset = addStringToPool(macName, stringPool);
		              nameRecords.push(makeNameRecord(
		                platformID,
		                macScript,
		                macLanguage,
		                nameID,
		                macName.length,
		                macNameOffset
		              ));
		            }
		          }
		          if (platformID === 3) {
		            const winLanguage = windowsLanguageIds[lang];
		            if (winLanguage !== void 0) {
		              const winName = encode.UTF16(text);
		              const winNameOffset = addStringToPool(winName, stringPool);
		              nameRecords.push(makeNameRecord(
		                3,
		                1,
		                winLanguage,
		                nameID,
		                winName.length,
		                winNameOffset
		              ));
		            }
		          }
		        }
		      }
		    }
		    nameRecords.sort(function(a, b) {
		      return a.platformID - b.platformID || a.encodingID - b.encodingID || a.languageID - b.languageID || a.nameID - b.nameID;
		    });
		    const t = new table_default.Table("name", [
		      { name: "format", type: "USHORT", value: 0 },
		      { name: "count", type: "USHORT", value: nameRecords.length },
		      { name: "stringOffset", type: "USHORT", value: 6 + nameRecords.length * 12 }
		    ]);
		    for (let r = 0; r < nameRecords.length; r++) {
		      t.fields.push({ name: "record_" + r, type: "RECORD", value: nameRecords[r] });
		    }
		    t.fields.push({ name: "strings", type: "LITERAL", value: stringPool });
		    return t;
		  }
		  function getNameByID(names, nameID, allowedStandardIDs = []) {
		    if (nameID < 256 && nameID in nameTableNames) {
		      if (allowedStandardIDs.length && !allowedStandardIDs.includes(parseInt(nameID))) {
		        return void 0;
		      }
		      nameID = nameTableNames[nameID];
		    }
		    for (let platform in names) {
		      for (let nameKey in names[platform]) {
		        if (nameKey === nameID || parseInt(nameKey) === nameID) {
		          return names[platform][nameKey];
		        }
		      }
		    }
		    return void 0;
		  }
		  var name_default = { parse: parseNameTable, make: makeNameTable, getNameByID };

		  // src/tables/cmap.mjs
		  function parseCmapTableFormat0(cmap, p, platformID, encodingID) {
		    cmap.length = p.parseUShort();
		    cmap.language = p.parseUShort() - 1;
		    const indexMap = p.parseByteList(cmap.length);
		    const glyphIndexMap = Object.assign({}, indexMap);
		    const encoding = getEncoding(platformID, encodingID, cmap.language);
		    const decodingTable = eightBitMacEncodings[encoding];
		    for (let i = 0; i < decodingTable.length; i++) {
		      glyphIndexMap[decodingTable.charCodeAt(i)] = indexMap[128 + i];
		    }
		    cmap.glyphIndexMap = glyphIndexMap;
		  }
		  function parseCmapTableFormat12or13(cmap, p, format) {
		    p.parseUShort();
		    cmap.length = p.parseULong();
		    cmap.language = p.parseULong();
		    let groupCount;
		    cmap.groupCount = groupCount = p.parseULong();
		    cmap.glyphIndexMap = {};
		    for (let i = 0; i < groupCount; i += 1) {
		      const startCharCode = p.parseULong();
		      const endCharCode = p.parseULong();
		      let startGlyphId = p.parseULong();
		      for (let c = startCharCode; c <= endCharCode; c += 1) {
		        cmap.glyphIndexMap[c] = startGlyphId;
		        if (format === 12) {
		          startGlyphId++;
		        }
		      }
		    }
		  }
		  function parseCmapTableFormat4(cmap, p, data, start, offset) {
		    cmap.length = p.parseUShort();
		    cmap.language = p.parseUShort();
		    let segCount;
		    cmap.segCount = segCount = p.parseUShort() >> 1;
		    p.skip("uShort", 3);
		    cmap.glyphIndexMap = {};
		    const endCountParser = new parse_default.Parser(data, start + offset + 14);
		    const startCountParser = new parse_default.Parser(data, start + offset + 16 + segCount * 2);
		    const idDeltaParser = new parse_default.Parser(data, start + offset + 16 + segCount * 4);
		    const idRangeOffsetParser = new parse_default.Parser(data, start + offset + 16 + segCount * 6);
		    let glyphIndexOffset = start + offset + 16 + segCount * 8;
		    for (let i = 0; i < segCount - 1; i += 1) {
		      let glyphIndex;
		      const endCount = endCountParser.parseUShort();
		      const startCount = startCountParser.parseUShort();
		      const idDelta = idDeltaParser.parseShort();
		      const idRangeOffset = idRangeOffsetParser.parseUShort();
		      for (let c = startCount; c <= endCount; c += 1) {
		        if (idRangeOffset !== 0) {
		          glyphIndexOffset = idRangeOffsetParser.offset + idRangeOffsetParser.relativeOffset - 2;
		          glyphIndexOffset += idRangeOffset;
		          glyphIndexOffset += (c - startCount) * 2;
		          glyphIndex = parse_default.getUShort(data, glyphIndexOffset);
		          if (glyphIndex !== 0) {
		            glyphIndex = glyphIndex + idDelta & 65535;
		          }
		        } else {
		          glyphIndex = c + idDelta & 65535;
		        }
		        cmap.glyphIndexMap[c] = glyphIndex;
		      }
		    }
		  }
		  function parseCmapTableFormat14(cmap, p) {
		    const varSelectorList = {};
		    p.skip("uLong");
		    const numVarSelectorRecords = p.parseULong();
		    for (let i = 0; i < numVarSelectorRecords; i += 1) {
		      const varSelector = p.parseUInt24();
		      const varSelectorRecord = {
		        varSelector
		      };
		      const defaultUVSOffset = p.parseOffset32();
		      const nonDefaultUVSOffset = p.parseOffset32();
		      const currentOffset = p.relativeOffset;
		      if (defaultUVSOffset) {
		        p.relativeOffset = defaultUVSOffset;
		        varSelectorRecord.defaultUVS = p.parseStruct({
		          ranges: function() {
		            return p.parseRecordList32({
		              startUnicodeValue: p.parseUInt24,
		              additionalCount: p.parseByte
		            });
		          }
		        });
		      }
		      if (nonDefaultUVSOffset) {
		        p.relativeOffset = nonDefaultUVSOffset;
		        varSelectorRecord.nonDefaultUVS = p.parseStruct({
		          uvsMappings: function() {
		            const map = {};
		            const list = p.parseRecordList32({
		              unicodeValue: p.parseUInt24,
		              glyphID: p.parseUShort
		            });
		            for (let i2 = 0; i2 < list.length; i2 += 1) {
		              map[list[i2].unicodeValue] = list[i2];
		            }
		            return map;
		          }
		        });
		      }
		      varSelectorList[varSelector] = varSelectorRecord;
		      p.relativeOffset = currentOffset;
		    }
		    cmap.varSelectorList = varSelectorList;
		  }
		  function parseCmapTable(data, start) {
		    const cmap = {};
		    cmap.version = parse_default.getUShort(data, start);
		    check_default.argument(cmap.version === 0, "cmap table version should be 0.");
		    cmap.numTables = parse_default.getUShort(data, start + 2);
		    let format14Parser = null;
		    let format14offset = -1;
		    let offset = -1;
		    let platformId = null;
		    let encodingId = null;
		    const platform0Encodings = [0, 1, 2, 3, 4, 6];
		    const platform3Encodings = [0, 1, 10];
		    for (let i = cmap.numTables - 1; i >= 0; i -= 1) {
		      platformId = parse_default.getUShort(data, start + 4 + i * 8);
		      encodingId = parse_default.getUShort(data, start + 4 + i * 8 + 2);
		      if (platformId === 3 && platform3Encodings.includes(encodingId) || platformId === 0 && platform0Encodings.includes(encodingId) || platformId === 1 && encodingId === 0) {
		        if (offset > 0) continue;
		        offset = parse_default.getULong(data, start + 4 + i * 8 + 4);
		        if (format14Parser) {
		          break;
		        }
		      } else if (platformId === 0 && encodingId === 5) {
		        format14offset = parse_default.getULong(data, start + 4 + i * 8 + 4);
		        format14Parser = new parse_default.Parser(data, start + format14offset);
		        if (format14Parser.parseUShort() !== 14) {
		          format14offset = -1;
		          format14Parser = null;
		        } else if (offset > 0) {
		          break;
		        }
		      }
		    }
		    if (offset === -1) {
		      throw new Error("No valid cmap sub-tables found.");
		    }
		    const p = new parse_default.Parser(data, start + offset);
		    cmap.format = p.parseUShort();
		    if (cmap.format === 0) {
		      parseCmapTableFormat0(cmap, p, platformId, encodingId);
		    } else if (cmap.format === 12 || cmap.format === 13) {
		      parseCmapTableFormat12or13(cmap, p, cmap.format);
		    } else if (cmap.format === 4) {
		      parseCmapTableFormat4(cmap, p, data, start, offset);
		    } else {
		      throw new Error(
		        "Only format 0 (platformId 1, encodingId 0), 4, 12 and 14 cmap tables are supported (found format " + cmap.format + ", platformId " + platformId + ", encodingId " + encodingId + ")."
		      );
		    }
		    if (format14Parser) {
		      parseCmapTableFormat14(cmap, format14Parser);
		    }
		    return cmap;
		  }
		  function addSegment(t, code, glyphIndex) {
		    t.segments.push({
		      end: code,
		      start: code,
		      delta: -(code - glyphIndex),
		      offset: 0,
		      glyphIndex
		    });
		  }
		  function addTerminatorSegment(t) {
		    t.segments.push({
		      end: 65535,
		      start: 65535,
		      delta: 1,
		      offset: 0
		    });
		  }
		  function mergeSegments(segments) {
		    if (segments.length === 0) return segments;
		    const merged = [segments[0]];
		    for (let i = 1; i < segments.length; i++) {
		      const prev = merged[merged.length - 1];
		      const curr = segments[i];
		      if (prev.end + 1 === curr.start && prev.delta === curr.delta && curr.end !== 65535) {
		        prev.end = curr.end;
		      } else {
		        merged.push(curr);
		      }
		    }
		    return merged;
		  }
		  function makeCmapTable(glyphs) {
		    let isPlan0Only = true;
		    let i;
		    for (i = glyphs.length - 1; i > 0; i -= 1) {
		      const g = glyphs.get(i);
		      if (g.unicode > 65535) {
		        isPlan0Only = false;
		        break;
		      }
		    }
		    let cmapTable = [
		      { name: "version", type: "USHORT", value: 0 },
		      { name: "numTables", type: "USHORT", value: isPlan0Only ? 1 : 2 },
		      // CMAP 4 header
		      { name: "platformID", type: "USHORT", value: 3 },
		      { name: "encodingID", type: "USHORT", value: 1 },
		      { name: "offset", type: "ULONG", value: isPlan0Only ? 12 : 12 + 8 }
		    ];
		    if (!isPlan0Only)
		      cmapTable.push(...[
		        // CMAP 12 header
		        { name: "cmap12PlatformID", type: "USHORT", value: 3 },
		        // We encode only for PlatformID = 3 (Windows) because it is supported everywhere
		        { name: "cmap12EncodingID", type: "USHORT", value: 10 },
		        { name: "cmap12Offset", type: "ULONG", value: 0 }
		      ]);
		    cmapTable.push(...[
		      // CMAP 4 Subtable
		      { name: "format", type: "USHORT", value: 4 },
		      { name: "cmap4Length", type: "USHORT", value: 0 },
		      { name: "language", type: "USHORT", value: 0 },
		      { name: "segCountX2", type: "USHORT", value: 0 },
		      { name: "searchRange", type: "USHORT", value: 0 },
		      { name: "entrySelector", type: "USHORT", value: 0 },
		      { name: "rangeShift", type: "USHORT", value: 0 }
		    ]);
		    const t = new table_default.Table("cmap", cmapTable);
		    t.segments = [];
		    for (i = 0; i < glyphs.length; i += 1) {
		      const glyph = glyphs.get(i);
		      for (let j = 0; j < glyph.unicodes.length; j += 1) {
		        addSegment(t, glyph.unicodes[j], i);
		      }
		    }
		    t.segments.sort(function(a, b) {
		      return a.start - b.start;
		    });
		    t.segments = mergeSegments(t.segments);
		    addTerminatorSegment(t);
		    const segCount = t.segments.length;
		    let segCountToRemove = 0;
		    let endCounts = [];
		    let startCounts = [];
		    let idDeltas = [];
		    let idRangeOffsets = [];
		    let glyphIds = [];
		    let cmap12Groups = [];
		    for (i = 0; i < segCount; i += 1) {
		      const segment = t.segments[i];
		      if (segment.end <= 65535 && segment.start <= 65535) {
		        endCounts.push({ name: "end_" + i, type: "USHORT", value: segment.end });
		        startCounts.push({ name: "start_" + i, type: "USHORT", value: segment.start });
		        idDeltas.push({ name: "idDelta_" + i, type: "SHORT", value: segment.delta });
		        idRangeOffsets.push({ name: "idRangeOffset_" + i, type: "USHORT", value: segment.offset });
		        if (segment.glyphId !== void 0) {
		          glyphIds.push({ name: "glyph_" + i, type: "USHORT", value: segment.glyphId });
		        }
		      } else {
		        segCountToRemove += 1;
		      }
		      if (!isPlan0Only && segment.glyphIndex !== void 0) {
		        cmap12Groups.push({ name: "cmap12Start_" + i, type: "ULONG", value: segment.start });
		        cmap12Groups.push({ name: "cmap12End_" + i, type: "ULONG", value: segment.end });
		        cmap12Groups.push({ name: "cmap12Glyph_" + i, type: "ULONG", value: segment.glyphIndex });
		      }
		    }
		    t.segCountX2 = (segCount - segCountToRemove) * 2;
		    t.searchRange = Math.pow(2, Math.floor(Math.log(segCount - segCountToRemove) / Math.log(2))) * 2;
		    t.entrySelector = Math.log(t.searchRange / 2) / Math.log(2);
		    t.rangeShift = t.segCountX2 - t.searchRange;
		    for (let i2 = 0; i2 < endCounts.length; i2++) {
		      t.fields.push(endCounts[i2]);
		    }
		    t.fields.push({ name: "reservedPad", type: "USHORT", value: 0 });
		    for (let i2 = 0; i2 < startCounts.length; i2++) {
		      t.fields.push(startCounts[i2]);
		    }
		    for (let i2 = 0; i2 < idDeltas.length; i2++) {
		      t.fields.push(idDeltas[i2]);
		    }
		    for (let i2 = 0; i2 < idRangeOffsets.length; i2++) {
		      t.fields.push(idRangeOffsets[i2]);
		    }
		    for (let i2 = 0; i2 < glyphIds.length; i2++) {
		      t.fields.push(glyphIds[i2]);
		    }
		    t.cmap4Length = 14 + // Subtable header
		    endCounts.length * 2 + 2 + // reservedPad
		    startCounts.length * 2 + idDeltas.length * 2 + idRangeOffsets.length * 2 + glyphIds.length * 2;
		    if (!isPlan0Only) {
		      const cmap12Length = 16 + // Subtable header
		      cmap12Groups.length * 4;
		      t.cmap12Offset = 12 + 2 * 2 + 4 + t.cmap4Length;
		      t.fields.push(...[
		        { name: "cmap12Format", type: "USHORT", value: 12 },
		        { name: "cmap12Reserved", type: "USHORT", value: 0 },
		        { name: "cmap12Length", type: "ULONG", value: cmap12Length },
		        { name: "cmap12Language", type: "ULONG", value: 0 },
		        { name: "cmap12nGroups", type: "ULONG", value: cmap12Groups.length / 3 }
		      ]);
		      for (let i2 = 0; i2 < cmap12Groups.length; i2++) {
		        t.fields.push(cmap12Groups[i2]);
		      }
		    }
		    return t;
		  }
		  var cmap_default = { parse: parseCmapTable, make: makeCmapTable };

		  // src/encoding.mjs
		  var cffStandardStrings = [
		    ".notdef",
		    "space",
		    "exclam",
		    "quotedbl",
		    "numbersign",
		    "dollar",
		    "percent",
		    "ampersand",
		    "quoteright",
		    "parenleft",
		    "parenright",
		    "asterisk",
		    "plus",
		    "comma",
		    "hyphen",
		    "period",
		    "slash",
		    "zero",
		    "one",
		    "two",
		    "three",
		    "four",
		    "five",
		    "six",
		    "seven",
		    "eight",
		    "nine",
		    "colon",
		    "semicolon",
		    "less",
		    "equal",
		    "greater",
		    "question",
		    "at",
		    "A",
		    "B",
		    "C",
		    "D",
		    "E",
		    "F",
		    "G",
		    "H",
		    "I",
		    "J",
		    "K",
		    "L",
		    "M",
		    "N",
		    "O",
		    "P",
		    "Q",
		    "R",
		    "S",
		    "T",
		    "U",
		    "V",
		    "W",
		    "X",
		    "Y",
		    "Z",
		    "bracketleft",
		    "backslash",
		    "bracketright",
		    "asciicircum",
		    "underscore",
		    "quoteleft",
		    "a",
		    "b",
		    "c",
		    "d",
		    "e",
		    "f",
		    "g",
		    "h",
		    "i",
		    "j",
		    "k",
		    "l",
		    "m",
		    "n",
		    "o",
		    "p",
		    "q",
		    "r",
		    "s",
		    "t",
		    "u",
		    "v",
		    "w",
		    "x",
		    "y",
		    "z",
		    "braceleft",
		    "bar",
		    "braceright",
		    "asciitilde",
		    "exclamdown",
		    "cent",
		    "sterling",
		    "fraction",
		    "yen",
		    "florin",
		    "section",
		    "currency",
		    "quotesingle",
		    "quotedblleft",
		    "guillemotleft",
		    "guilsinglleft",
		    "guilsinglright",
		    "fi",
		    "fl",
		    "endash",
		    "dagger",
		    "daggerdbl",
		    "periodcentered",
		    "paragraph",
		    "bullet",
		    "quotesinglbase",
		    "quotedblbase",
		    "quotedblright",
		    "guillemotright",
		    "ellipsis",
		    "perthousand",
		    "questiondown",
		    "grave",
		    "acute",
		    "circumflex",
		    "tilde",
		    "macron",
		    "breve",
		    "dotaccent",
		    "dieresis",
		    "ring",
		    "cedilla",
		    "hungarumlaut",
		    "ogonek",
		    "caron",
		    "emdash",
		    "AE",
		    "ordfeminine",
		    "Lslash",
		    "Oslash",
		    "OE",
		    "ordmasculine",
		    "ae",
		    "dotlessi",
		    "lslash",
		    "oslash",
		    "oe",
		    "germandbls",
		    "onesuperior",
		    "logicalnot",
		    "mu",
		    "trademark",
		    "Eth",
		    "onehalf",
		    "plusminus",
		    "Thorn",
		    "onequarter",
		    "divide",
		    "brokenbar",
		    "degree",
		    "thorn",
		    "threequarters",
		    "twosuperior",
		    "registered",
		    "minus",
		    "eth",
		    "multiply",
		    "threesuperior",
		    "copyright",
		    "Aacute",
		    "Acircumflex",
		    "Adieresis",
		    "Agrave",
		    "Aring",
		    "Atilde",
		    "Ccedilla",
		    "Eacute",
		    "Ecircumflex",
		    "Edieresis",
		    "Egrave",
		    "Iacute",
		    "Icircumflex",
		    "Idieresis",
		    "Igrave",
		    "Ntilde",
		    "Oacute",
		    "Ocircumflex",
		    "Odieresis",
		    "Ograve",
		    "Otilde",
		    "Scaron",
		    "Uacute",
		    "Ucircumflex",
		    "Udieresis",
		    "Ugrave",
		    "Yacute",
		    "Ydieresis",
		    "Zcaron",
		    "aacute",
		    "acircumflex",
		    "adieresis",
		    "agrave",
		    "aring",
		    "atilde",
		    "ccedilla",
		    "eacute",
		    "ecircumflex",
		    "edieresis",
		    "egrave",
		    "iacute",
		    "icircumflex",
		    "idieresis",
		    "igrave",
		    "ntilde",
		    "oacute",
		    "ocircumflex",
		    "odieresis",
		    "ograve",
		    "otilde",
		    "scaron",
		    "uacute",
		    "ucircumflex",
		    "udieresis",
		    "ugrave",
		    "yacute",
		    "ydieresis",
		    "zcaron",
		    "exclamsmall",
		    "Hungarumlautsmall",
		    "dollaroldstyle",
		    "dollarsuperior",
		    "ampersandsmall",
		    "Acutesmall",
		    "parenleftsuperior",
		    "parenrightsuperior",
		    "266 ff",
		    "onedotenleader",
		    "zerooldstyle",
		    "oneoldstyle",
		    "twooldstyle",
		    "threeoldstyle",
		    "fouroldstyle",
		    "fiveoldstyle",
		    "sixoldstyle",
		    "sevenoldstyle",
		    "eightoldstyle",
		    "nineoldstyle",
		    "commasuperior",
		    "threequartersemdash",
		    "periodsuperior",
		    "questionsmall",
		    "asuperior",
		    "bsuperior",
		    "centsuperior",
		    "dsuperior",
		    "esuperior",
		    "isuperior",
		    "lsuperior",
		    "msuperior",
		    "nsuperior",
		    "osuperior",
		    "rsuperior",
		    "ssuperior",
		    "tsuperior",
		    "ff",
		    "ffi",
		    "ffl",
		    "parenleftinferior",
		    "parenrightinferior",
		    "Circumflexsmall",
		    "hyphensuperior",
		    "Gravesmall",
		    "Asmall",
		    "Bsmall",
		    "Csmall",
		    "Dsmall",
		    "Esmall",
		    "Fsmall",
		    "Gsmall",
		    "Hsmall",
		    "Ismall",
		    "Jsmall",
		    "Ksmall",
		    "Lsmall",
		    "Msmall",
		    "Nsmall",
		    "Osmall",
		    "Psmall",
		    "Qsmall",
		    "Rsmall",
		    "Ssmall",
		    "Tsmall",
		    "Usmall",
		    "Vsmall",
		    "Wsmall",
		    "Xsmall",
		    "Ysmall",
		    "Zsmall",
		    "colonmonetary",
		    "onefitted",
		    "rupiah",
		    "Tildesmall",
		    "exclamdownsmall",
		    "centoldstyle",
		    "Lslashsmall",
		    "Scaronsmall",
		    "Zcaronsmall",
		    "Dieresissmall",
		    "Brevesmall",
		    "Caronsmall",
		    "Dotaccentsmall",
		    "Macronsmall",
		    "figuredash",
		    "hypheninferior",
		    "Ogoneksmall",
		    "Ringsmall",
		    "Cedillasmall",
		    "questiondownsmall",
		    "oneeighth",
		    "threeeighths",
		    "fiveeighths",
		    "seveneighths",
		    "onethird",
		    "twothirds",
		    "zerosuperior",
		    "foursuperior",
		    "fivesuperior",
		    "sixsuperior",
		    "sevensuperior",
		    "eightsuperior",
		    "ninesuperior",
		    "zeroinferior",
		    "oneinferior",
		    "twoinferior",
		    "threeinferior",
		    "fourinferior",
		    "fiveinferior",
		    "sixinferior",
		    "seveninferior",
		    "eightinferior",
		    "nineinferior",
		    "centinferior",
		    "dollarinferior",
		    "periodinferior",
		    "commainferior",
		    "Agravesmall",
		    "Aacutesmall",
		    "Acircumflexsmall",
		    "Atildesmall",
		    "Adieresissmall",
		    "Aringsmall",
		    "AEsmall",
		    "Ccedillasmall",
		    "Egravesmall",
		    "Eacutesmall",
		    "Ecircumflexsmall",
		    "Edieresissmall",
		    "Igravesmall",
		    "Iacutesmall",
		    "Icircumflexsmall",
		    "Idieresissmall",
		    "Ethsmall",
		    "Ntildesmall",
		    "Ogravesmall",
		    "Oacutesmall",
		    "Ocircumflexsmall",
		    "Otildesmall",
		    "Odieresissmall",
		    "OEsmall",
		    "Oslashsmall",
		    "Ugravesmall",
		    "Uacutesmall",
		    "Ucircumflexsmall",
		    "Udieresissmall",
		    "Yacutesmall",
		    "Thornsmall",
		    "Ydieresissmall",
		    "001.000",
		    "001.001",
		    "001.002",
		    "001.003",
		    "Black",
		    "Bold",
		    "Book",
		    "Light",
		    "Medium",
		    "Regular",
		    "Roman",
		    "Semibold"
		  ];
		  var cffISOAdobeStrings = [
		    ".notdef",
		    "space",
		    "exclam",
		    "quotedbl",
		    "numbersign",
		    "dollar",
		    "percent",
		    "ampersand",
		    "quoteright",
		    "parenleft",
		    "parenright",
		    "asterisk",
		    "plus",
		    "comma",
		    "hyphen",
		    "period",
		    "slash",
		    "zero",
		    "one",
		    "two",
		    "three",
		    "four",
		    "five",
		    "six",
		    "seven",
		    "eight",
		    "nine",
		    "colon",
		    "semicolon",
		    "less",
		    "equal",
		    "greater",
		    "question",
		    "at",
		    "A",
		    "B",
		    "C",
		    "D",
		    "E",
		    "F",
		    "G",
		    "H",
		    "I",
		    "J",
		    "K",
		    "L",
		    "M",
		    "N",
		    "O",
		    "P",
		    "Q",
		    "R",
		    "S",
		    "T",
		    "U",
		    "V",
		    "W",
		    "X",
		    "Y",
		    "Z",
		    "bracketleft",
		    "backslash",
		    "bracketright",
		    "asciicircum",
		    "underscore",
		    "quoteleft",
		    "a",
		    "b",
		    "c",
		    "d",
		    "e",
		    "f",
		    "g",
		    "h",
		    "i",
		    "j",
		    "k",
		    "l",
		    "m",
		    "n",
		    "o",
		    "p",
		    "q",
		    "r",
		    "s",
		    "t",
		    "u",
		    "v",
		    "w",
		    "x",
		    "y",
		    "z",
		    "braceleft",
		    "bar",
		    "braceright",
		    "asciitilde",
		    "exclamdown",
		    "cent",
		    "sterling",
		    "fraction",
		    "yen",
		    "florin",
		    "section",
		    "currency",
		    "quotesingle",
		    "quotedblleft",
		    "guillemotleft",
		    "guilsinglleft",
		    "guilsinglright",
		    "fi",
		    "fl",
		    "endash",
		    "dagger",
		    "daggerdbl",
		    "periodcentered",
		    "paragraph",
		    "bullet",
		    "quotesinglbase",
		    "quotedblbase",
		    "quotedblright",
		    "guillemotright",
		    "ellipsis",
		    "perthousand",
		    "questiondown",
		    "grave",
		    "acute",
		    "circumflex",
		    "tilde",
		    "macron",
		    "breve",
		    "dotaccent",
		    "dieresis",
		    "ring",
		    "cedilla",
		    "hungarumlaut",
		    "ogonek",
		    "caron",
		    "emdash",
		    "AE",
		    "ordfeminine",
		    "Lslash",
		    "Oslash",
		    "OE",
		    "ordmasculine",
		    "ae",
		    "dotlessi",
		    "lslash",
		    "oslash",
		    "oe",
		    "germandbls",
		    "onesuperior",
		    "logicalnot",
		    "mu",
		    "trademark",
		    "Eth",
		    "onehalf",
		    "plusminus",
		    "Thorn",
		    "onequarter",
		    "divide",
		    "brokenbar",
		    "degree",
		    "thorn",
		    "threequarters",
		    "twosuperior",
		    "registered",
		    "minus",
		    "eth",
		    "multiply",
		    "threesuperior",
		    "copyright",
		    "Aacute",
		    "Acircumflex",
		    "Adieresis",
		    "Agrave",
		    "Aring",
		    "Atilde",
		    "Ccedilla",
		    "Eacute",
		    "Ecircumflex",
		    "Edieresis",
		    "Egrave",
		    "Iacute",
		    "Icircumflex",
		    "Idieresis",
		    "Igrave",
		    "Ntilde",
		    "Oacute",
		    "Ocircumflex",
		    "Odieresis",
		    "Ograve",
		    "Otilde",
		    "Scaron",
		    "Uacute",
		    "Ucircumflex",
		    "Udieresis",
		    "Ugrave",
		    "Yacute",
		    "Ydieresis",
		    "Zcaron",
		    "aacute",
		    "acircumflex",
		    "adieresis",
		    "agrave",
		    "aring",
		    "atilde",
		    "ccedilla",
		    "eacute",
		    "ecircumflex",
		    "edieresis",
		    "egrave",
		    "iacute",
		    "icircumflex",
		    "idieresis",
		    "igrave",
		    "ntilde",
		    "oacute",
		    "ocircumflex",
		    "odieresis",
		    "ograve",
		    "otilde",
		    "scaron",
		    "uacute",
		    "ucircumflex",
		    "udieresis",
		    "ugrave",
		    "yacute",
		    "ydieresis",
		    "zcaron"
		  ];
		  var cffIExpertStrings = [
		    ".notdef",
		    "space",
		    "exclamsmall",
		    "Hungarumlautsmall",
		    "dollaroldstyle",
		    "dollarsuperior",
		    "ampersandsmall",
		    "Acutesmall",
		    "parenleftsuperior",
		    "parenrightsuperior",
		    "twodotenleader",
		    "onedotenleader",
		    "comma",
		    "hyphen",
		    "period",
		    "fraction",
		    "zerooldstyle",
		    "oneoldstyle",
		    "twooldstyle",
		    "threeoldstyle",
		    "fouroldstyle",
		    "fiveoldstyle",
		    "sixoldstyle",
		    "sevenoldstyle",
		    "eightoldstyle",
		    "nineoldstyle",
		    "colon",
		    "semicolon",
		    "commasuperior",
		    "threequartersemdash",
		    "periodsuperior",
		    "questionsmall",
		    "asuperior",
		    "bsuperior",
		    "centsuperior",
		    "dsuperior",
		    "esuperior",
		    "isuperior",
		    "lsuperior",
		    "msuperior",
		    "nsuperior",
		    "osuperior",
		    "rsuperior",
		    "ssuperior",
		    "tsuperior",
		    "ff",
		    "fi",
		    "fl",
		    "ffi",
		    "ffl",
		    "parenleftinferior",
		    "parenrightinferior",
		    "Circumflexsmall",
		    "hyphensuperior",
		    "Gravesmall",
		    "Asmall",
		    "Bsmall",
		    "Csmall",
		    "Dsmall",
		    "Esmall",
		    "Fsmall",
		    "Gsmall",
		    "Hsmall",
		    "Ismall",
		    "Jsmall",
		    "Ksmall",
		    "Lsmall",
		    "Msmall",
		    "Nsmall",
		    "Osmall",
		    "Psmall",
		    "Qsmall",
		    "Rsmall",
		    "Ssmall",
		    "Tsmall",
		    "Usmall",
		    "Vsmall",
		    "Wsmall",
		    "Xsmall",
		    "Ysmall",
		    "Zsmall",
		    "colonmonetary",
		    "onefitted",
		    "rupiah",
		    "Tildesmall",
		    "exclamdownsmall",
		    "centoldstyle",
		    "Lslashsmall",
		    "Scaronsmall",
		    "Zcaronsmall",
		    "Dieresissmall",
		    "Brevesmall",
		    "Caronsmall",
		    "Dotaccentsmall",
		    "Macronsmall",
		    "figuredash",
		    "hypheninferior",
		    "Ogoneksmall",
		    "Ringsmall",
		    "Cedillasmall",
		    "onequarter",
		    "onehalf",
		    "threequarters",
		    "questiondownsmall",
		    "oneeighth",
		    "threeeighths",
		    "fiveeighths",
		    "seveneighths",
		    "onethird",
		    "twothirds",
		    "zerosuperior",
		    "onesuperior",
		    "twosuperior",
		    "threesuperior",
		    "foursuperior",
		    "fivesuperior",
		    "sixsuperior",
		    "sevensuperior",
		    "eightsuperior",
		    "ninesuperior",
		    "zeroinferior",
		    "oneinferior",
		    "twoinferior",
		    "threeinferior",
		    "fourinferior",
		    "fiveinferior",
		    "sixinferior",
		    "seveninferior",
		    "eightinferior",
		    "nineinferior",
		    "centinferior",
		    "dollarinferior",
		    "periodinferior",
		    "commainferior",
		    "Agravesmall",
		    "Aacutesmall",
		    "Acircumflexsmall",
		    "Atildesmall",
		    "Adieresissmall",
		    "Aringsmall",
		    "AEsmall",
		    "Ccedillasmall",
		    "Egravesmall",
		    "Eacutesmall",
		    "Ecircumflexsmall",
		    "Edieresissmall",
		    "Igravesmall",
		    "Iacutesmall",
		    "Icircumflexsmall",
		    "Idieresissmall",
		    "Ethsmall",
		    "Ntildesmall",
		    "Ogravesmall",
		    "Oacutesmall",
		    "Ocircumflexsmall",
		    "Otildesmall",
		    "Odieresissmall",
		    "OEsmall",
		    "Oslashsmall",
		    "Ugravesmall",
		    "Uacutesmall",
		    "Ucircumflexsmall",
		    "Udieresissmall",
		    "Yacutesmall",
		    "Thornsmall",
		    "Ydieresissmall"
		  ];
		  var cffExpertSubsetStrings = [
		    ".notdef",
		    "space",
		    "dollaroldstyle",
		    "dollarsuperior",
		    "parenleftsuperior",
		    "parenrightsuperior",
		    "twodotenleader",
		    "onedotenleader",
		    "comma",
		    "hyphen",
		    "period",
		    "fraction",
		    "zerooldstyle",
		    "oneoldstyle",
		    "twooldstyle",
		    "threeoldstyle",
		    "fouroldstyle",
		    "fiveoldstyle",
		    "sixoldstyle",
		    "sevenoldstyle",
		    "eightoldstyle",
		    "nineoldstyle",
		    "colon",
		    "semicolon",
		    "commasuperior",
		    "threequartersemdash",
		    "periodsuperior",
		    "asuperior",
		    "bsuperior",
		    "centsuperior",
		    "dsuperior",
		    "esuperior",
		    "isuperior",
		    "lsuperior",
		    "msuperior",
		    "nsuperior",
		    "osuperior",
		    "rsuperior",
		    "ssuperior",
		    "tsuperior",
		    "ff",
		    "fi",
		    "fl",
		    "ffi",
		    "ffl",
		    "parenleftinferior",
		    "parenrightinferior",
		    "hyphensuperior",
		    "colonmonetary",
		    "onefitted",
		    "rupiah",
		    "centoldstyle",
		    "figuredash",
		    "hypheninferior",
		    "onequarter",
		    "onehalf",
		    "threequarters",
		    "oneeighth",
		    "threeeighths",
		    "fiveeighths",
		    "seveneighths",
		    "onethird",
		    "twothirds",
		    "zerosuperior",
		    "onesuperior",
		    "twosuperior",
		    "threesuperior",
		    "foursuperior",
		    "fivesuperior",
		    "sixsuperior",
		    "sevensuperior",
		    "eightsuperior",
		    "ninesuperior",
		    "zeroinferior",
		    "oneinferior",
		    "twoinferior",
		    "threeinferior",
		    "fourinferior",
		    "fiveinferior",
		    "sixinferior",
		    "seveninferior",
		    "eightinferior",
		    "nineinferior",
		    "centinferior",
		    "dollarinferior",
		    "periodinferior",
		    "commainferior"
		  ];
		  var cffStandardEncoding = [
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "space",
		    "exclam",
		    "quotedbl",
		    "numbersign",
		    "dollar",
		    "percent",
		    "ampersand",
		    "quoteright",
		    "parenleft",
		    "parenright",
		    "asterisk",
		    "plus",
		    "comma",
		    "hyphen",
		    "period",
		    "slash",
		    "zero",
		    "one",
		    "two",
		    "three",
		    "four",
		    "five",
		    "six",
		    "seven",
		    "eight",
		    "nine",
		    "colon",
		    "semicolon",
		    "less",
		    "equal",
		    "greater",
		    "question",
		    "at",
		    "A",
		    "B",
		    "C",
		    "D",
		    "E",
		    "F",
		    "G",
		    "H",
		    "I",
		    "J",
		    "K",
		    "L",
		    "M",
		    "N",
		    "O",
		    "P",
		    "Q",
		    "R",
		    "S",
		    "T",
		    "U",
		    "V",
		    "W",
		    "X",
		    "Y",
		    "Z",
		    "bracketleft",
		    "backslash",
		    "bracketright",
		    "asciicircum",
		    "underscore",
		    "quoteleft",
		    "a",
		    "b",
		    "c",
		    "d",
		    "e",
		    "f",
		    "g",
		    "h",
		    "i",
		    "j",
		    "k",
		    "l",
		    "m",
		    "n",
		    "o",
		    "p",
		    "q",
		    "r",
		    "s",
		    "t",
		    "u",
		    "v",
		    "w",
		    "x",
		    "y",
		    "z",
		    "braceleft",
		    "bar",
		    "braceright",
		    "asciitilde",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "exclamdown",
		    "cent",
		    "sterling",
		    "fraction",
		    "yen",
		    "florin",
		    "section",
		    "currency",
		    "quotesingle",
		    "quotedblleft",
		    "guillemotleft",
		    "guilsinglleft",
		    "guilsinglright",
		    "fi",
		    "fl",
		    "",
		    "endash",
		    "dagger",
		    "daggerdbl",
		    "periodcentered",
		    "",
		    "paragraph",
		    "bullet",
		    "quotesinglbase",
		    "quotedblbase",
		    "quotedblright",
		    "guillemotright",
		    "ellipsis",
		    "perthousand",
		    "",
		    "questiondown",
		    "",
		    "grave",
		    "acute",
		    "circumflex",
		    "tilde",
		    "macron",
		    "breve",
		    "dotaccent",
		    "dieresis",
		    "",
		    "ring",
		    "cedilla",
		    "",
		    "hungarumlaut",
		    "ogonek",
		    "caron",
		    "emdash",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "AE",
		    "",
		    "ordfeminine",
		    "",
		    "",
		    "",
		    "",
		    "Lslash",
		    "Oslash",
		    "OE",
		    "ordmasculine",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "ae",
		    "",
		    "",
		    "",
		    "dotlessi",
		    "",
		    "",
		    "lslash",
		    "oslash",
		    "oe",
		    "germandbls"
		  ];
		  var cffExpertEncoding = [
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "space",
		    "exclamsmall",
		    "Hungarumlautsmall",
		    "",
		    "dollaroldstyle",
		    "dollarsuperior",
		    "ampersandsmall",
		    "Acutesmall",
		    "parenleftsuperior",
		    "parenrightsuperior",
		    "twodotenleader",
		    "onedotenleader",
		    "comma",
		    "hyphen",
		    "period",
		    "fraction",
		    "zerooldstyle",
		    "oneoldstyle",
		    "twooldstyle",
		    "threeoldstyle",
		    "fouroldstyle",
		    "fiveoldstyle",
		    "sixoldstyle",
		    "sevenoldstyle",
		    "eightoldstyle",
		    "nineoldstyle",
		    "colon",
		    "semicolon",
		    "commasuperior",
		    "threequartersemdash",
		    "periodsuperior",
		    "questionsmall",
		    "",
		    "asuperior",
		    "bsuperior",
		    "centsuperior",
		    "dsuperior",
		    "esuperior",
		    "",
		    "",
		    "isuperior",
		    "",
		    "",
		    "lsuperior",
		    "msuperior",
		    "nsuperior",
		    "osuperior",
		    "",
		    "",
		    "rsuperior",
		    "ssuperior",
		    "tsuperior",
		    "",
		    "ff",
		    "fi",
		    "fl",
		    "ffi",
		    "ffl",
		    "parenleftinferior",
		    "",
		    "parenrightinferior",
		    "Circumflexsmall",
		    "hyphensuperior",
		    "Gravesmall",
		    "Asmall",
		    "Bsmall",
		    "Csmall",
		    "Dsmall",
		    "Esmall",
		    "Fsmall",
		    "Gsmall",
		    "Hsmall",
		    "Ismall",
		    "Jsmall",
		    "Ksmall",
		    "Lsmall",
		    "Msmall",
		    "Nsmall",
		    "Osmall",
		    "Psmall",
		    "Qsmall",
		    "Rsmall",
		    "Ssmall",
		    "Tsmall",
		    "Usmall",
		    "Vsmall",
		    "Wsmall",
		    "Xsmall",
		    "Ysmall",
		    "Zsmall",
		    "colonmonetary",
		    "onefitted",
		    "rupiah",
		    "Tildesmall",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "",
		    "exclamdownsmall",
		    "centoldstyle",
		    "Lslashsmall",
		    "",
		    "",
		    "Scaronsmall",
		    "Zcaronsmall",
		    "Dieresissmall",
		    "Brevesmall",
		    "Caronsmall",
		    "",
		    "Dotaccentsmall",
		    "",
		    "",
		    "Macronsmall",
		    "",
		    "",
		    "figuredash",
		    "hypheninferior",
		    "",
		    "",
		    "Ogoneksmall",
		    "Ringsmall",
		    "Cedillasmall",
		    "",
		    "",
		    "",
		    "onequarter",
		    "onehalf",
		    "threequarters",
		    "questiondownsmall",
		    "oneeighth",
		    "threeeighths",
		    "fiveeighths",
		    "seveneighths",
		    "onethird",
		    "twothirds",
		    "",
		    "",
		    "zerosuperior",
		    "onesuperior",
		    "twosuperior",
		    "threesuperior",
		    "foursuperior",
		    "fivesuperior",
		    "sixsuperior",
		    "sevensuperior",
		    "eightsuperior",
		    "ninesuperior",
		    "zeroinferior",
		    "oneinferior",
		    "twoinferior",
		    "threeinferior",
		    "fourinferior",
		    "fiveinferior",
		    "sixinferior",
		    "seveninferior",
		    "eightinferior",
		    "nineinferior",
		    "centinferior",
		    "dollarinferior",
		    "periodinferior",
		    "commainferior",
		    "Agravesmall",
		    "Aacutesmall",
		    "Acircumflexsmall",
		    "Atildesmall",
		    "Adieresissmall",
		    "Aringsmall",
		    "AEsmall",
		    "Ccedillasmall",
		    "Egravesmall",
		    "Eacutesmall",
		    "Ecircumflexsmall",
		    "Edieresissmall",
		    "Igravesmall",
		    "Iacutesmall",
		    "Icircumflexsmall",
		    "Idieresissmall",
		    "Ethsmall",
		    "Ntildesmall",
		    "Ogravesmall",
		    "Oacutesmall",
		    "Ocircumflexsmall",
		    "Otildesmall",
		    "Odieresissmall",
		    "OEsmall",
		    "Oslashsmall",
		    "Ugravesmall",
		    "Uacutesmall",
		    "Ucircumflexsmall",
		    "Udieresissmall",
		    "Yacutesmall",
		    "Thornsmall",
		    "Ydieresissmall"
		  ];
		  var standardNames = [
		    ".notdef",
		    ".null",
		    "nonmarkingreturn",
		    "space",
		    "exclam",
		    "quotedbl",
		    "numbersign",
		    "dollar",
		    "percent",
		    "ampersand",
		    "quotesingle",
		    "parenleft",
		    "parenright",
		    "asterisk",
		    "plus",
		    "comma",
		    "hyphen",
		    "period",
		    "slash",
		    "zero",
		    "one",
		    "two",
		    "three",
		    "four",
		    "five",
		    "six",
		    "seven",
		    "eight",
		    "nine",
		    "colon",
		    "semicolon",
		    "less",
		    "equal",
		    "greater",
		    "question",
		    "at",
		    "A",
		    "B",
		    "C",
		    "D",
		    "E",
		    "F",
		    "G",
		    "H",
		    "I",
		    "J",
		    "K",
		    "L",
		    "M",
		    "N",
		    "O",
		    "P",
		    "Q",
		    "R",
		    "S",
		    "T",
		    "U",
		    "V",
		    "W",
		    "X",
		    "Y",
		    "Z",
		    "bracketleft",
		    "backslash",
		    "bracketright",
		    "asciicircum",
		    "underscore",
		    "grave",
		    "a",
		    "b",
		    "c",
		    "d",
		    "e",
		    "f",
		    "g",
		    "h",
		    "i",
		    "j",
		    "k",
		    "l",
		    "m",
		    "n",
		    "o",
		    "p",
		    "q",
		    "r",
		    "s",
		    "t",
		    "u",
		    "v",
		    "w",
		    "x",
		    "y",
		    "z",
		    "braceleft",
		    "bar",
		    "braceright",
		    "asciitilde",
		    "Adieresis",
		    "Aring",
		    "Ccedilla",
		    "Eacute",
		    "Ntilde",
		    "Odieresis",
		    "Udieresis",
		    "aacute",
		    "agrave",
		    "acircumflex",
		    "adieresis",
		    "atilde",
		    "aring",
		    "ccedilla",
		    "eacute",
		    "egrave",
		    "ecircumflex",
		    "edieresis",
		    "iacute",
		    "igrave",
		    "icircumflex",
		    "idieresis",
		    "ntilde",
		    "oacute",
		    "ograve",
		    "ocircumflex",
		    "odieresis",
		    "otilde",
		    "uacute",
		    "ugrave",
		    "ucircumflex",
		    "udieresis",
		    "dagger",
		    "degree",
		    "cent",
		    "sterling",
		    "section",
		    "bullet",
		    "paragraph",
		    "germandbls",
		    "registered",
		    "copyright",
		    "trademark",
		    "acute",
		    "dieresis",
		    "notequal",
		    "AE",
		    "Oslash",
		    "infinity",
		    "plusminus",
		    "lessequal",
		    "greaterequal",
		    "yen",
		    "mu",
		    "partialdiff",
		    "summation",
		    "product",
		    "pi",
		    "integral",
		    "ordfeminine",
		    "ordmasculine",
		    "Omega",
		    "ae",
		    "oslash",
		    "questiondown",
		    "exclamdown",
		    "logicalnot",
		    "radical",
		    "florin",
		    "approxequal",
		    "Delta",
		    "guillemotleft",
		    "guillemotright",
		    "ellipsis",
		    "nonbreakingspace",
		    "Agrave",
		    "Atilde",
		    "Otilde",
		    "OE",
		    "oe",
		    "endash",
		    "emdash",
		    "quotedblleft",
		    "quotedblright",
		    "quoteleft",
		    "quoteright",
		    "divide",
		    "lozenge",
		    "ydieresis",
		    "Ydieresis",
		    "fraction",
		    "currency",
		    "guilsinglleft",
		    "guilsinglright",
		    "fi",
		    "fl",
		    "daggerdbl",
		    "periodcentered",
		    "quotesinglbase",
		    "quotedblbase",
		    "perthousand",
		    "Acircumflex",
		    "Ecircumflex",
		    "Aacute",
		    "Edieresis",
		    "Egrave",
		    "Iacute",
		    "Icircumflex",
		    "Idieresis",
		    "Igrave",
		    "Oacute",
		    "Ocircumflex",
		    "apple",
		    "Ograve",
		    "Uacute",
		    "Ucircumflex",
		    "Ugrave",
		    "dotlessi",
		    "circumflex",
		    "tilde",
		    "macron",
		    "breve",
		    "dotaccent",
		    "ring",
		    "cedilla",
		    "hungarumlaut",
		    "ogonek",
		    "caron",
		    "Lslash",
		    "lslash",
		    "Scaron",
		    "scaron",
		    "Zcaron",
		    "zcaron",
		    "brokenbar",
		    "Eth",
		    "eth",
		    "Yacute",
		    "yacute",
		    "Thorn",
		    "thorn",
		    "minus",
		    "multiply",
		    "onesuperior",
		    "twosuperior",
		    "threesuperior",
		    "onehalf",
		    "onequarter",
		    "threequarters",
		    "franc",
		    "Gbreve",
		    "gbreve",
		    "Idotaccent",
		    "Scedilla",
		    "scedilla",
		    "Cacute",
		    "cacute",
		    "Ccaron",
		    "ccaron",
		    "dcroat"
		  ];
		  function DefaultEncoding(font) {
		    this.font = font;
		  }
		  DefaultEncoding.prototype.charToGlyphIndex = function(c) {
		    const code = c.codePointAt(0);
		    const glyphs = this.font.glyphs;
		    if (glyphs) {
		      for (let i = 0; i < glyphs.length; i += 1) {
		        const glyph = glyphs.get(i);
		        for (let j = 0; j < glyph.unicodes.length; j += 1) {
		          if (glyph.unicodes[j] === code) {
		            return i;
		          }
		        }
		      }
		    }
		    return null;
		  };
		  function CmapEncoding(cmap) {
		    this.cmap = cmap;
		  }
		  CmapEncoding.prototype.charToGlyphIndex = function(c) {
		    return this.cmap.glyphIndexMap[c.codePointAt(0)] || 0;
		  };
		  function CffEncoding(encoding, charset) {
		    this.encoding = encoding;
		    this.charset = charset;
		  }
		  CffEncoding.prototype.charToGlyphIndex = function(s) {
		    const code = s.codePointAt(0);
		    const charName = this.encoding[code];
		    return this.charset.indexOf(charName);
		  };
		  function GlyphNames(post) {
		    switch (post.version) {
		      case 1:
		        this.names = standardNames.slice();
		        break;
		      case 2:
		        this.names = new Array(post.numberOfGlyphs);
		        for (let i = 0; i < post.numberOfGlyphs; i++) {
		          if (post.glyphNameIndex[i] < standardNames.length) {
		            this.names[i] = standardNames[post.glyphNameIndex[i]];
		          } else {
		            this.names[i] = post.names[post.glyphNameIndex[i] - standardNames.length];
		          }
		        }
		        break;
		      case 2.5:
		        this.names = new Array(post.numberOfGlyphs);
		        for (let i = 0; i < post.numberOfGlyphs; i++) {
		          this.names[i] = standardNames[i + post.glyphNameIndex[i]];
		        }
		        break;
		      case 3:
		        this.names = [];
		        break;
		      default:
		        this.names = [];
		        break;
		    }
		  }
		  GlyphNames.prototype.nameToGlyphIndex = function(name) {
		    return this.names.indexOf(name);
		  };
		  GlyphNames.prototype.glyphIndexToName = function(gid) {
		    return this.names[gid];
		  };
		  function addGlyphNamesAll(font) {
		    let glyph;
		    const glyphIndexMap = font.tables.cmap.glyphIndexMap;
		    const charCodes = Object.keys(glyphIndexMap);
		    for (let i = 0; i < charCodes.length; i += 1) {
		      const c = charCodes[i];
		      const glyphIndex = glyphIndexMap[c];
		      glyph = font.glyphs.get(glyphIndex);
		      glyph.addUnicode(parseInt(c));
		    }
		    for (let i = 0; i < font.glyphs.length; i += 1) {
		      glyph = font.glyphs.get(i);
		      if (font.cffEncoding) {
		        glyph.name = font.cffEncoding.charset[i];
		      } else if (font.glyphNames.names) {
		        glyph.name = font.glyphNames.glyphIndexToName(i);
		      }
		    }
		  }
		  function addGlyphNamesToUnicodeMap(font) {
		    font._IndexToUnicodeMap = {};
		    const glyphIndexMap = font.tables.cmap.glyphIndexMap;
		    const charCodes = Object.keys(glyphIndexMap);
		    for (let i = 0; i < charCodes.length; i += 1) {
		      const c = charCodes[i];
		      let glyphIndex = glyphIndexMap[c];
		      if (font._IndexToUnicodeMap[glyphIndex] === void 0) {
		        font._IndexToUnicodeMap[glyphIndex] = {
		          unicodes: [parseInt(c)]
		        };
		      } else {
		        font._IndexToUnicodeMap[glyphIndex].unicodes.push(parseInt(c));
		      }
		    }
		  }
		  function addGlyphNames(font, opt) {
		    if (opt.lowMemory) {
		      addGlyphNamesToUnicodeMap(font);
		    } else {
		      addGlyphNamesAll(font);
		    }
		  }

		  // src/draw.mjs
		  function line(ctx, x1, y1, x2, y2) {
		    ctx.beginPath();
		    ctx.moveTo(x1, y1);
		    ctx.lineTo(x2, y2);
		    ctx.stroke();
		  }
		  var draw_default = { line };

		  // src/tables/cpal.mjs
		  function parseCpalTable(data, start) {
		    const p = new Parser(data, start);
		    const version = p.parseShort();
		    if (version !== 0) {
		      console.warn("Only CPALv0 is currently fully supported.");
		    }
		    const numPaletteEntries = p.parseShort();
		    const numPalettes = p.parseShort();
		    const numColorRecords = p.parseShort();
		    const colorRecordsArrayOffset = p.parseOffset32();
		    const colorRecordIndices = p.parseUShortList(numPalettes);
		    p.relativeOffset = colorRecordsArrayOffset;
		    const colorRecords = p.parseULongList(numColorRecords);
		    p.relativeOffset = colorRecordsArrayOffset;
		    return {
		      version,
		      numPaletteEntries,
		      colorRecords,
		      colorRecordIndices
		    };
		  }
		  function makeCpalTable({ version = 0, numPaletteEntries = 0, colorRecords = [], colorRecordIndices = [0] }) {
		    check_default.argument(version === 0, "Only CPALv0 are supported.");
		    check_default.argument(colorRecords.length, "No colorRecords given.");
		    check_default.argument(colorRecordIndices.length, "No colorRecordIndices given.");
		    if (colorRecordIndices.length > 1) {
		      check_default.argument(numPaletteEntries, "Can't infer numPaletteEntries on multiple colorRecordIndices");
		    }
		    return new table_default.Table("CPAL", [
		      { name: "version", type: "USHORT", value: version },
		      { name: "numPaletteEntries", type: "USHORT", value: numPaletteEntries || colorRecords.length },
		      { name: "numPalettes", type: "USHORT", value: colorRecordIndices.length },
		      { name: "numColorRecords", type: "USHORT", value: colorRecords.length },
		      { name: "colorRecordsArrayOffset", type: "ULONG", value: 12 + 2 * colorRecordIndices.length },
		      ...colorRecordIndices.map((palette, i) => ({ name: "colorRecordIndices_" + i, type: "USHORT", value: palette })),
		      ...colorRecords.map((color, i) => ({ name: "colorRecords_" + i, type: "ULONG", value: color }))
		    ]);
		  }
		  function parseCPALColor(bgra) {
		    var b = (bgra & 4278190080) >> 24;
		    var g = (bgra & 16711680) >> 16;
		    var r = (bgra & 65280) >> 8;
		    var a = bgra & 255;
		    b = b + 256 & 255;
		    g = g + 256 & 255;
		    r = r + 256 & 255;
		    a = (a + 256 & 255) / 255;
		    return { b, g, r, a };
		  }
		  function getPaletteColor(font, index, palette = 0, colorFormat = "hexa") {
		    if (index == 65535) {
		      return "currentColor";
		    }
		    const cpalTable = font && font.tables && font.tables.cpal;
		    if (!cpalTable) return "currentColor";
		    if (palette > cpalTable.colorRecordIndices.length - 1) {
		      throw new Error(`Palette index out of range (colorRecordIndices.length: ${cpalTable.colorRecordIndices.length}, index: ${index})`);
		    }
		    if (index > cpalTable.numPaletteEntries) {
		      throw new Error(`Color index out of range (numPaletteEntries: ${cpalTable.numPaletteEntries}, index: ${index})`);
		    }
		    const lookupIndex = cpalTable.colorRecordIndices[palette] + index;
		    if (lookupIndex > cpalTable.colorRecords) {
		      throw new Error(`Color index out of range (colorRecords.length: ${cpalTable.colorRecords.length}, lookupIndex: ${lookupIndex})`);
		    }
		    const color = parseCPALColor(cpalTable.colorRecords[lookupIndex]);
		    if (colorFormat === "bgra") {
		      return color;
		    }
		    return formatColor(color, colorFormat);
		  }
		  function toHex(d) {
		    return ("0" + parseInt(d).toString(16)).slice(-2);
		  }
		  function rgbToHSL(bgra) {
		    const r = bgra.r / 255;
		    const g = bgra.g / 255;
		    const b = bgra.b / 255;
		    const max = Math.max(r, g, b), min = Math.min(r, g, b);
		    let h, s, l = (max + min) / 2;
		    if (max === min) {
		      h = s = 0;
		    } else {
		      const d = max - min;
		      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		      switch (max) {
		        case r:
		          h = (g - b) / d + (g < b ? 6 : 0);
		          break;
		        case g:
		          h = (b - r) / d + 2;
		          break;
		        case b:
		          h = (r - g) / d + 4;
		          break;
		      }
		      h /= 6;
		    }
		    return {
		      h: h * 360,
		      s: s * 100,
		      l: l * 100
		    };
		  }
		  function hslToRGB(hsla) {
		    let { h, s, l, a } = hsla;
		    h = h % 360;
		    s /= 100;
		    l /= 100;
		    const c = (1 - Math.abs(2 * l - 1)) * s;
		    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
		    const m = l - c / 2;
		    let r = 0, g = 0, b = 0;
		    if (0 <= h && h < 60) {
		      r = c;
		      g = x;
		      b = 0;
		    } else if (60 <= h && h < 120) {
		      r = x;
		      g = c;
		      b = 0;
		    } else if (120 <= h && h < 180) {
		      r = 0;
		      g = c;
		      b = x;
		    } else if (180 <= h && h < 240) {
		      r = 0;
		      g = x;
		      b = c;
		    } else if (240 <= h && h < 300) {
		      r = x;
		      g = 0;
		      b = c;
		    } else if (300 <= h && h <= 360) {
		      r = c;
		      g = 0;
		      b = x;
		    }
		    return {
		      r: Math.round((r + m) * 255),
		      g: Math.round((g + m) * 255),
		      b: Math.round((b + m) * 255),
		      a
		    };
		  }
		  function bgraToRaw(color) {
		    return parseInt(`0x${toHex(color.b)}${toHex(color.g)}${toHex(color.r)}${toHex(color.a * 255)}`, 16);
		  }
		  function parseColor(color, targetFormat = "hexa") {
		    const returnRaw = targetFormat == "raw" || targetFormat == "cpal";
		    const isRaw = Number.isInteger(color);
		    let validFormat = true;
		    if (isRaw && returnRaw || color === "currentColor") {
		      return color;
		    } else if (typeof color === "object") {
		      if (targetFormat == "bgra") {
		        return color;
		      }
		      if (returnRaw) {
		        return bgraToRaw(color);
		      }
		    } else if (!isRaw && /^#([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})$/i.test(color.trim())) {
		      color = color.trim().substring(1);
		      switch (color.length) {
		        case 3:
		          color = {
		            r: parseInt(color[0].repeat(2), 16),
		            g: parseInt(color[1].repeat(2), 16),
		            b: parseInt(color[2].repeat(2), 16),
		            a: 1
		          };
		          break;
		        case 4:
		          color = {
		            r: parseInt(color[0].repeat(2), 16),
		            g: parseInt(color[1].repeat(2), 16),
		            b: parseInt(color[2].repeat(2), 16),
		            a: parseInt(color[3].repeat(2), 16) / 255
		          };
		          break;
		        case 6:
		          color = {
		            r: parseInt(color[0] + color[1], 16),
		            g: parseInt(color[2] + color[3], 16),
		            b: parseInt(color[4] + color[5], 16),
		            a: 1
		          };
		          break;
		        case 8:
		          color = {
		            r: parseInt(color[0] + color[1], 16),
		            g: parseInt(color[2] + color[3], 16),
		            b: parseInt(color[4] + color[5], 16),
		            a: parseInt(color[6] + color[7], 16) / 255
		          };
		          break;
		      }
		      if (targetFormat == "bgra") {
		        return color;
		      }
		    } else if (typeof document !== "undefined" && /^[a-z]+$/i.test(color)) {
		      const ctx = document.createElement("canvas").getContext("2d");
		      ctx.fillStyle = color;
		      const detectedColor = formatColor(ctx.fillStyle, "hexa");
		      if (detectedColor === "#000000ff" && color.toLowerCase() !== "black") {
		        validFormat = false;
		      } else {
		        color = detectedColor;
		      }
		    } else {
		      color = color.trim();
		      const rgbaRegex = /rgba?\(\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;
		      if (rgbaRegex.test(color)) {
		        const matches = color.match(rgbaRegex).filter((i) => typeof i !== "undefined");
		        color = {
		          r: Math.round(parseFloat(matches[1]) / (matches[2] ? 100 / 255 : 1)),
		          g: Math.round(parseFloat(matches[3]) / (matches[4] ? 100 / 255 : 1)),
		          b: Math.round(parseFloat(matches[5]) / (matches[6] ? 100 / 255 : 1)),
		          a: !matches[7] ? 1 : parseFloat(matches[7]) / (matches[8] ? 100 : 1)
		        };
		      } else {
		        const hslaRegex = /hsla?\(\s*(?:(\d*\.\d+|\d+)(deg|turn|))\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;
		        if (hslaRegex.test(color)) {
		          const matches = color.match(hslaRegex).filter((i) => typeof i !== "undefined");
		          color = hslToRGB({
		            h: parseFloat(matches[1]) * (matches[2] === "turn" ? 360 : 1),
		            s: parseFloat(matches[3]),
		            l: parseFloat(matches[4]),
		            a: !matches[5] ? 1 : parseFloat(matches[5]) / (matches[6] ? 100 : 1)
		          });
		        } else {
		          validFormat = false;
		        }
		      }
		    }
		    if (!validFormat) {
		      throw new Error(`Invalid color format: ${color}`);
		    }
		    return formatColor(color, targetFormat);
		  }
		  function formatColor(bgra, format = "hexa") {
		    if (bgra === "currentColor") return bgra;
		    if (Number.isInteger(bgra)) {
		      if (format == "raw" || format == "cpal") {
		        return bgra;
		      }
		      bgra = parseCPALColor(bgra);
		    } else if (typeof bgra !== "object") {
		      bgra = parseColor(bgra, "bgra");
		    }
		    let hsl = ["hsl", "hsla"].includes(format) ? rgbToHSL(bgra) : null;
		    switch (format) {
		      case "rgba":
		        return `rgba(${bgra.r}, ${bgra.g}, ${bgra.b}, ${parseFloat(bgra.a.toFixed(3))})`;
		      case "rgb":
		        return `rgb(${bgra.r}, ${bgra.g}, ${bgra.b})`;
		      case "hex":
		      case "hex6":
		      case "hex-6":
		        return `#${toHex(bgra.r)}${toHex(bgra.g)}${toHex(bgra.b)}`;
		      case "hexa":
		      case "hex8":
		      case "hex-8":
		        return `#${toHex(bgra.r)}${toHex(bgra.g)}${toHex(bgra.b)}${toHex(bgra.a * 255)}`;
		      case "hsl":
		        return `hsl(${hsl.h.toFixed(2)}, ${hsl.s.toFixed(2)}%, ${hsl.l.toFixed(2)}%)`;
		      case "hsla":
		        return `hsla(${hsl.h.toFixed(2)}, ${hsl.s.toFixed(2)}%, ${hsl.l.toFixed(2)}%, ${parseFloat(bgra.a.toFixed(3))})`;
		      case "bgra":
		        return bgra;
		      case "raw":
		      case "cpal":
		        return bgraToRaw(bgra);
		      default:
		        throw new Error("Unknown color format: " + format);
		    }
		  }
		  var cpal_default = { parse: parseCpalTable, make: makeCpalTable, getPaletteColor, parseColor, formatColor };

		  // src/glyph.mjs
		  function getPathDefinition(glyph, path) {
		    let _path = path || new path_default();
		    return {
		      configurable: true,
		      get: function() {
		        if (typeof _path === "function") {
		          _path = _path();
		        }
		        return _path;
		      },
		      set: function(p) {
		        _path = p;
		      }
		    };
		  }
		  function Glyph(options) {
		    this.bindConstructorValues(options);
		  }
		  Glyph.prototype.bindConstructorValues = function(options) {
		    this.index = options.index || 0;
		    if (options.name === ".notdef") {
		      options.unicode = void 0;
		    } else if (options.name === ".null") {
		      options.unicode = 0;
		    }
		    if (options.unicode === 0 && options.name !== ".null") {
		      throw new Error('The unicode value "0" is reserved for the glyph name ".null" and cannot be used by any other glyph.');
		    }
		    this.name = options.name || null;
		    this.unicode = options.unicode;
		    this.unicodes = options.unicodes || (options.unicode !== void 0 ? [options.unicode] : []);
		    if ("xMin" in options) {
		      this.xMin = options.xMin;
		    }
		    if ("yMin" in options) {
		      this.yMin = options.yMin;
		    }
		    if ("xMax" in options) {
		      this.xMax = options.xMax;
		    }
		    if ("yMax" in options) {
		      this.yMax = options.yMax;
		    }
		    if ("advanceWidth" in options) {
		      this.advanceWidth = options.advanceWidth;
		    }
		    if ("leftSideBearing" in options) {
		      this.leftSideBearing = options.leftSideBearing;
		    }
		    if ("points" in options) {
		      this.points = options.points;
		    }
		    Object.defineProperty(this, "path", getPathDefinition(this, options.path));
		  };
		  Glyph.prototype.addUnicode = function(unicode) {
		    if (this.unicodes.length === 0) {
		      this.unicode = unicode;
		    }
		    this.unicodes.push(unicode);
		  };
		  Glyph.prototype.getBoundingBox = function() {
		    return this.path.getBoundingBox();
		  };
		  Glyph.prototype.getPath = function(x, y, fontSize, options, font) {
		    x = x !== void 0 ? x : 0;
		    y = y !== void 0 ? y : 0;
		    fontSize = fontSize !== void 0 ? fontSize : 72;
		    options = Object.assign({}, font && font.defaultRenderOptions, options);
		    let commands;
		    let hPoints;
		    let xScale = options.xScale;
		    let yScale = options.yScale;
		    const scale = 1 / (this.path.unitsPerEm || 1e3) * fontSize;
		    let useGlyph = this;
		    if (font && font.variation) {
		      useGlyph = font.variation.getTransform(this, options.variation);
		      commands = useGlyph.path.commands;
		    }
		    if (options.hinting && font && font.hinting) {
		      hPoints = useGlyph.path && font.hinting.exec(useGlyph, fontSize, options);
		    }
		    if (hPoints) {
		      commands = font.hinting.getCommands(hPoints);
		      x = Math.round(x);
		      y = Math.round(y);
		      xScale = yScale = 1;
		    } else {
		      commands = useGlyph.path.commands;
		      if (xScale === void 0) xScale = scale;
		      if (yScale === void 0) yScale = scale;
		    }
		    const p = new path_default();
		    if (options.drawSVG) {
		      const svgImage = this.getSvgImage(font);
		      if (svgImage) {
		        const layer = new path_default();
		        layer._image = {
		          image: svgImage.image,
		          x: x + svgImage.leftSideBearing * scale,
		          y: y - svgImage.baseline * scale,
		          width: svgImage.image.width * scale,
		          height: svgImage.image.height * scale
		        };
		        p._layers = [layer];
		        return p;
		      }
		    }
		    if (options.drawLayers) {
		      const layers = this.getLayers(font);
		      if (layers && layers.length) {
		        p._layers = [];
		        for (let i = 0; i < layers.length; i += 1) {
		          const layer = layers[i];
		          let color = getPaletteColor(font, layer.paletteIndex, options.usePalette);
		          if (color === "currentColor") {
		            color = options.fill || "black";
		          } else {
		            color = formatColor(color, options.colorFormat || "rgba");
		          }
		          options = Object.assign({}, options, { fill: color });
		          p._layers.push(this.getPath.call(layer.glyph, x, y, fontSize, options, font));
		        }
		        return p;
		      }
		    }
		    p.fill = options.fill || this.path.fill;
		    p.stroke = this.path.stroke;
		    p.strokeWidth = this.path.strokeWidth * scale;
		    for (let i = 0; i < commands.length; i += 1) {
		      const cmd = commands[i];
		      if (cmd.type === "M") {
		        p.moveTo(x + cmd.x * xScale, y + -cmd.y * yScale);
		      } else if (cmd.type === "L") {
		        p.lineTo(x + cmd.x * xScale, y + -cmd.y * yScale);
		      } else if (cmd.type === "Q") {
		        p.quadraticCurveTo(
		          x + cmd.x1 * xScale,
		          y + -cmd.y1 * yScale,
		          x + cmd.x * xScale,
		          y + -cmd.y * yScale
		        );
		      } else if (cmd.type === "C") {
		        p.curveTo(
		          x + cmd.x1 * xScale,
		          y + -cmd.y1 * yScale,
		          x + cmd.x2 * xScale,
		          y + -cmd.y2 * yScale,
		          x + cmd.x * xScale,
		          y + -cmd.y * yScale
		        );
		      } else if (cmd.type === "Z" && p.stroke && p.strokeWidth) {
		        p.closePath();
		      }
		    }
		    return p;
		  };
		  Glyph.prototype.getLayers = function(font) {
		    if (!font) {
		      throw new Error("The font object is required to read the colr/cpal tables in order to get the layers.");
		    }
		    return font.layers.get(this.index);
		  };
		  Glyph.prototype.getSvgImage = function(font) {
		    if (!font) {
		      throw new Error("The font object is required to read the svg table in order to get the image.");
		    }
		    return font.svgImages.get(this.index);
		  };
		  Glyph.prototype.getContours = function(transformedPoints = null) {
		    if (this.points === void 0 && !transformedPoints) {
		      return [];
		    }
		    const contours = [];
		    let currentContour = [];
		    let points = transformedPoints ? transformedPoints : this.points;
		    for (let i = 0; i < points.length; i += 1) {
		      const pt = points[i];
		      currentContour.push(pt);
		      if (pt.lastPointOfContour) {
		        contours.push(currentContour);
		        currentContour = [];
		      }
		    }
		    check_default.argument(currentContour.length === 0, "There are still points left in the current contour.");
		    return contours;
		  };
		  Glyph.prototype.getMetrics = function() {
		    const commands = this.path.commands;
		    const xCoords = [];
		    const yCoords = [];
		    for (let i = 0; i < commands.length; i += 1) {
		      const cmd = commands[i];
		      if (cmd.type !== "Z") {
		        xCoords.push(cmd.x);
		        yCoords.push(cmd.y);
		      }
		      if (cmd.type === "Q" || cmd.type === "C") {
		        xCoords.push(cmd.x1);
		        yCoords.push(cmd.y1);
		      }
		      if (cmd.type === "C") {
		        xCoords.push(cmd.x2);
		        yCoords.push(cmd.y2);
		      }
		    }
		    const metrics = {
		      xMin: Math.min.apply(null, xCoords),
		      yMin: Math.min.apply(null, yCoords),
		      xMax: Math.max.apply(null, xCoords),
		      yMax: Math.max.apply(null, yCoords),
		      leftSideBearing: this.leftSideBearing
		    };
		    if (!isFinite(metrics.xMin)) {
		      metrics.xMin = 0;
		    }
		    if (!isFinite(metrics.xMax)) {
		      metrics.xMax = this.advanceWidth;
		    }
		    if (!isFinite(metrics.yMin)) {
		      metrics.yMin = 0;
		    }
		    if (!isFinite(metrics.yMax)) {
		      metrics.yMax = 0;
		    }
		    metrics.rightSideBearing = this.advanceWidth - metrics.leftSideBearing - (metrics.xMax - metrics.xMin);
		    return metrics;
		  };
		  Glyph.prototype.draw = function(ctx, x, y, fontSize, options, font) {
		    options = Object.assign({}, font && font.defaultRenderOptions, options);
		    const path = this.getPath(x, y, fontSize, options, font);
		    path.draw(ctx);
		  };
		  Glyph.prototype.drawPoints = function(ctx, x, y, fontSize, options, font) {
		    options = Object.assign({}, font && font.defaultRenderOptions, options);
		    if (options.drawLayers) {
		      const layers = this.getLayers(font);
		      if (layers && layers.length) {
		        for (let l = 0; l < layers.length; l += 1) {
		          if (layers[l].glyph.index !== this.index) {
		            this.drawPoints.call(layers[l].glyph, ctx, x, y, fontSize);
		          }
		        }
		        return;
		      }
		    }
		    function drawCircles(l, x2, y2, scale2) {
		      ctx.beginPath();
		      for (let j = 0; j < l.length; j += 1) {
		        ctx.moveTo(x2 + l[j].x * scale2, y2 + l[j].y * scale2);
		        ctx.arc(x2 + l[j].x * scale2, y2 + l[j].y * scale2, 2, 0, Math.PI * 2, false);
		      }
		      ctx.fill();
		    }
		    x = x !== void 0 ? x : 0;
		    y = y !== void 0 ? y : 0;
		    fontSize = fontSize !== void 0 ? fontSize : 24;
		    const scale = 1 / this.path.unitsPerEm * fontSize;
		    const blueCircles = [];
		    const redCircles = [];
		    const path = this.path;
		    let commands = path.commands;
		    if (font && font.variation) {
		      commands = font.variation.getTransform(this, options.variation).path.commands;
		    }
		    for (let i = 0; i < commands.length; i += 1) {
		      const cmd = commands[i];
		      if (cmd.x !== void 0) {
		        blueCircles.push({ x: cmd.x, y: -cmd.y });
		      }
		      if (cmd.x1 !== void 0) {
		        redCircles.push({ x: cmd.x1, y: -cmd.y1 });
		      }
		      if (cmd.x2 !== void 0) {
		        redCircles.push({ x: cmd.x2, y: -cmd.y2 });
		      }
		    }
		    ctx.fillStyle = "blue";
		    drawCircles(blueCircles, x, y, scale);
		    ctx.fillStyle = "red";
		    drawCircles(redCircles, x, y, scale);
		  };
		  Glyph.prototype.drawMetrics = function(ctx, x, y, fontSize) {
		    let scale;
		    x = x !== void 0 ? x : 0;
		    y = y !== void 0 ? y : 0;
		    fontSize = fontSize !== void 0 ? fontSize : 24;
		    scale = 1 / this.path.unitsPerEm * fontSize;
		    ctx.lineWidth = 1;
		    ctx.strokeStyle = "black";
		    draw_default.line(ctx, x, -1e4, x, 1e4);
		    draw_default.line(ctx, -1e4, y, 1e4, y);
		    const xMin = this.xMin || 0;
		    let yMin = this.yMin || 0;
		    const xMax = this.xMax || 0;
		    let yMax = this.yMax || 0;
		    const advanceWidth = this.advanceWidth || 0;
		    ctx.strokeStyle = "blue";
		    draw_default.line(ctx, x + xMin * scale, -1e4, x + xMin * scale, 1e4);
		    draw_default.line(ctx, x + xMax * scale, -1e4, x + xMax * scale, 1e4);
		    draw_default.line(ctx, -1e4, y + -yMin * scale, 1e4, y + -yMin * scale);
		    draw_default.line(ctx, -1e4, y + -yMax * scale, 1e4, y + -yMax * scale);
		    ctx.strokeStyle = "green";
		    draw_default.line(ctx, x + advanceWidth * scale, -1e4, x + advanceWidth * scale, 1e4);
		  };
		  Glyph.prototype.toPathData = function(options, font) {
		    options = Object.assign({}, { variation: font && font.defaultRenderOptions.variation }, options);
		    let useGlyph = this;
		    if (font && font.variation) {
		      useGlyph = font.variation.getTransform(this, options.variation);
		    }
		    let usePath = useGlyph.points && options.pointsTransform ? options.pointsTransform(useGlyph.points) : useGlyph.path;
		    if (options.pathTransform) {
		      usePath = options.pathTransform(usePath);
		    }
		    return usePath.toPathData(options);
		  };
		  Glyph.prototype.fromSVG = function(pathData, options = {}) {
		    return this.path.fromSVG(pathData, options);
		  };
		  Glyph.prototype.toSVG = function(options, font) {
		    const pathData = this.toPathData.apply(this, [options, font]);
		    return this.path.toSVG(options, pathData);
		  };
		  Glyph.prototype.toDOMElement = function(options, font) {
		    options = Object.assign({}, { variation: font && font.defaultRenderOptions.variation }, options);
		    let usePath = this.path;
		    if (font && font.variation) {
		      usePath = font.variation.getTransform(this, options.variation).path;
		    }
		    return usePath.toDOMElement(options);
		  };
		  var glyph_default = Glyph;

		  // src/glyphset.mjs
		  function defineDependentProperty(glyph, externalName, internalName) {
		    Object.defineProperty(glyph, externalName, {
		      get: function() {
		        typeof glyph[internalName] === "undefined" && glyph.path;
		        return glyph[internalName];
		      },
		      set: function(newValue) {
		        glyph[internalName] = newValue;
		      },
		      enumerable: true,
		      configurable: true
		    });
		  }
		  function GlyphSet(font, glyphs) {
		    this.font = font;
		    this.glyphs = {};
		    if (Array.isArray(glyphs)) {
		      for (let i = 0; i < glyphs.length; i++) {
		        const glyph = glyphs[i];
		        glyph.path.unitsPerEm = font.unitsPerEm;
		        this.glyphs[i] = glyph;
		      }
		    }
		    this.length = glyphs && glyphs.length || 0;
		  }
		  if (typeof Symbol !== "undefined" && Symbol.iterator) {
		    GlyphSet.prototype[Symbol.iterator] = function() {
		      let n = -1;
		      return {
		        next: function() {
		          n++;
		          const done = n >= this.length - 1;
		          return { value: this.get(n), done };
		        }.bind(this)
		      };
		    };
		  }
		  GlyphSet.prototype.get = function(index) {
		    if (this.font._push && this.glyphs[index] === void 0) {
		      this.font._push(index);
		      if (typeof this.glyphs[index] === "function") {
		        this.glyphs[index] = this.glyphs[index]();
		      }
		      let glyph = this.glyphs[index];
		      let unicodeObj = this.font._IndexToUnicodeMap[index];
		      if (unicodeObj) {
		        for (let j = 0; j < unicodeObj.unicodes.length; j++)
		          glyph.addUnicode(unicodeObj.unicodes[j]);
		      }
		      if (this.font.cffEncoding) {
		        glyph.name = this.font.cffEncoding.charset[index];
		      } else if (this.font.glyphNames.names) {
		        glyph.name = this.font.glyphNames.glyphIndexToName(index);
		      }
		      this.glyphs[index].advanceWidth = this.font._hmtxTableData[index].advanceWidth;
		      this.glyphs[index].leftSideBearing = this.font._hmtxTableData[index].leftSideBearing;
		    } else {
		      if (typeof this.glyphs[index] === "function") {
		        this.glyphs[index] = this.glyphs[index]();
		      }
		    }
		    return this.glyphs[index];
		  };
		  GlyphSet.prototype.push = function(index, loader) {
		    this.glyphs[index] = loader;
		    this.length++;
		  };
		  function glyphLoader(font, index) {
		    return new glyph_default({ index, font });
		  }
		  function ttfGlyphLoader(font, index, parseGlyph2, data, position, buildPath2) {
		    return function() {
		      const glyph = new glyph_default({ index, font });
		      glyph.path = function() {
		        parseGlyph2(glyph, data, position);
		        const path = buildPath2(font.glyphs, glyph);
		        path.unitsPerEm = font.unitsPerEm;
		        return path;
		      };
		      defineDependentProperty(glyph, "numberOfContours", "_numberOfContours");
		      defineDependentProperty(glyph, "xMin", "_xMin");
		      defineDependentProperty(glyph, "xMax", "_xMax");
		      defineDependentProperty(glyph, "yMin", "_yMin");
		      defineDependentProperty(glyph, "yMax", "_yMax");
		      defineDependentProperty(glyph, "points", "_points");
		      return glyph;
		    };
		  }
		  function cffGlyphLoader(font, index, parseCFFCharstring2, charstring, version) {
		    return function() {
		      const glyph = new glyph_default({ index, font });
		      glyph.path = function() {
		        const path = parseCFFCharstring2(font, glyph, charstring, version);
		        path.unitsPerEm = font.unitsPerEm;
		        return path;
		      };
		      return glyph;
		    };
		  }
		  var glyphset_default = { GlyphSet, glyphLoader, ttfGlyphLoader, cffGlyphLoader };

		  // src/tables/cff.mjs
		  function equals(a, b) {
		    if (a === b) {
		      return true;
		    } else if (Array.isArray(a) && Array.isArray(b)) {
		      if (a.length !== b.length) {
		        return false;
		      }
		      for (let i = 0; i < a.length; i += 1) {
		        if (!equals(a[i], b[i])) {
		          return false;
		        }
		      }
		      return true;
		    } else {
		      return false;
		    }
		  }
		  var MAX_CALL_DEPTH = 10;
		  function calcCFFSubroutineBias(subrs) {
		    let bias;
		    if (subrs.length < 1240) {
		      bias = 107;
		    } else if (subrs.length < 33900) {
		      bias = 1131;
		    } else {
		      bias = 32768;
		    }
		    return bias;
		  }
		  function parseCFFIndex(data, start, conversionFn, version) {
		    const offsets = [];
		    const objects = [];
		    const count = version > 1 ? parse_default.getULong(data, start) : parse_default.getCard16(data, start);
		    const countLength = version > 1 ? 4 : 2;
		    let objectOffset;
		    let endOffset;
		    if (count !== 0) {
		      const offsetSize = parse_default.getByte(data, start + countLength);
		      objectOffset = start + (count + 1) * offsetSize + countLength;
		      let pos = start + countLength + 1;
		      for (let i = 0; i < count + 1; i += 1) {
		        offsets.push(parse_default.getOffset(data, pos, offsetSize));
		        pos += offsetSize;
		      }
		      endOffset = objectOffset + offsets[count];
		    } else {
		      endOffset = start + countLength;
		    }
		    for (let i = 0; i < offsets.length - 1; i += 1) {
		      let value = parse_default.getBytes(data, objectOffset + offsets[i], objectOffset + offsets[i + 1]);
		      if (conversionFn) {
		        value = conversionFn(value, data, start, version);
		      }
		      objects.push(value);
		    }
		    return { objects, startOffset: start, endOffset };
		  }
		  function parseCFFIndexLowMemory(data, start, version) {
		    const offsets = [];
		    const count = version > 1 ? parse_default.getULong(data, start) : parse_default.getCard16(data, start);
		    const countLength = version > 1 ? 4 : 2;
		    let objectOffset;
		    let endOffset;
		    if (count !== 0) {
		      const offsetSize = parse_default.getByte(data, start + countLength);
		      objectOffset = start + (count + 1) * offsetSize + countLength;
		      let pos = start + countLength + 1;
		      for (let i = 0; i < count + 1; i += 1) {
		        offsets.push(parse_default.getOffset(data, pos, offsetSize));
		        pos += offsetSize;
		      }
		      endOffset = objectOffset + offsets[count];
		    } else {
		      endOffset = start + countLength;
		    }
		    return { offsets, startOffset: start, endOffset };
		  }
		  function getCffIndexObject(i, offsets, data, start, conversionFn, version) {
		    const count = version > 1 ? parse_default.getULong(data, start) : parse_default.getCard16(data, start);
		    const countLength = version > 1 ? 4 : 2;
		    let objectOffset = 0;
		    if (count !== 0) {
		      const offsetSize = parse_default.getByte(data, start + countLength);
		      objectOffset = start + (count + 1) * offsetSize + countLength;
		    }
		    let value = parse_default.getBytes(data, objectOffset + offsets[i], objectOffset + offsets[i + 1]);
		    return value;
		  }
		  function parseFloatOperand(parser) {
		    let s = "";
		    const eof = 15;
		    const lookup = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];
		    for (; ; ) {
		      const b = parser.parseByte();
		      const n1 = b >> 4;
		      const n2 = b & 15;
		      if (n1 === eof) {
		        break;
		      }
		      s += lookup[n1];
		      if (n2 === eof) {
		        break;
		      }
		      s += lookup[n2];
		    }
		    return parseFloat(s);
		  }
		  function parseOperand(parser, b0) {
		    let b1;
		    let b2;
		    let b3;
		    let b4;
		    if (b0 === 28) {
		      b1 = parser.parseByte();
		      b2 = parser.parseByte();
		      return b1 << 8 | b2;
		    }
		    if (b0 === 29) {
		      b1 = parser.parseByte();
		      b2 = parser.parseByte();
		      b3 = parser.parseByte();
		      b4 = parser.parseByte();
		      return b1 << 24 | b2 << 16 | b3 << 8 | b4;
		    }
		    if (b0 === 30) {
		      return parseFloatOperand(parser);
		    }
		    if (b0 >= 32 && b0 <= 246) {
		      return b0 - 139;
		    }
		    if (b0 >= 247 && b0 <= 250) {
		      b1 = parser.parseByte();
		      return (b0 - 247) * 256 + b1 + 108;
		    }
		    if (b0 >= 251 && b0 <= 254) {
		      b1 = parser.parseByte();
		      return -(b0 - 251) * 256 - b1 - 108;
		    }
		    throw new Error("Invalid b0 " + b0);
		  }
		  function entriesToObject(entries) {
		    const o = {};
		    for (let i = 0; i < entries.length; i += 1) {
		      const key = entries[i][0];
		      const values = entries[i][1];
		      let value;
		      if (values.length === 1) {
		        value = values[0];
		      } else {
		        value = values;
		      }
		      if (Object.prototype.hasOwnProperty.call(o, key) && !isNaN(o[key])) {
		        throw new Error("Object " + o + " already has key " + key);
		      }
		      o[key] = value;
		    }
		    return o;
		  }
		  function parseCFFDict(data, start, size, version) {
		    start = start !== void 0 ? start : 0;
		    const parser = new parse_default.Parser(data, start);
		    const entries = [];
		    let operands = [];
		    size = size !== void 0 ? size : data.byteLength;
		    let operandsStart = version < 2 ? 22 : 28;
		    while (parser.relativeOffset < size) {
		      let op = parser.parseByte();
		      if (op < operandsStart) {
		        if (op === 12) {
		          op = 1200 + parser.parseByte();
		        }
		        if (version > 1 && op === 23) {
		          parseBlend(operands);
		          continue;
		        }
		        entries.push([op, operands]);
		        operands = [];
		      } else {
		        operands.push(parseOperand(parser, op));
		      }
		    }
		    return entriesToObject(entries);
		  }
		  function getCFFString(strings, index) {
		    if (index <= 390) {
		      index = cffStandardStrings[index];
		    } else if (strings) {
		      index = strings[index - 391];
		    } else {
		      index = void 0;
		    }
		    return index;
		  }
		  function interpretDict(dict, meta, strings) {
		    const newDict = {};
		    let value;
		    for (let i = 0; i < meta.length; i += 1) {
		      const m = meta[i];
		      if (Array.isArray(m.type)) {
		        const values = [];
		        values.length = m.type.length;
		        for (let j = 0; j < m.type.length; j++) {
		          value = dict[m.op] !== void 0 ? dict[m.op][j] : void 0;
		          if (value === void 0) {
		            value = m.value !== void 0 && m.value[j] !== void 0 ? m.value[j] : null;
		          }
		          if (m.type[j] === "SID") {
		            value = getCFFString(strings, value);
		          }
		          values[j] = value;
		        }
		        newDict[m.name] = values;
		      } else {
		        value = dict[m.op];
		        if (value === void 0) {
		          value = m.value !== void 0 ? m.value : null;
		        }
		        if (m.type === "SID") {
		          value = getCFFString(strings, value);
		        }
		        newDict[m.name] = value;
		      }
		    }
		    return newDict;
		  }
		  function parseCFFHeader(data, start) {
		    const header = {};
		    header.formatMajor = parse_default.getCard8(data, start);
		    header.formatMinor = parse_default.getCard8(data, start + 1);
		    if (header.formatMajor > 2) {
		      throw new Error(`Unsupported CFF table version ${header.formatMajor}.${header.formatMinor}`);
		    }
		    header.size = parse_default.getCard8(data, start + 2);
		    if (header.formatMajor < 2) {
		      header.offsetSize = parse_default.getCard8(data, start + 3);
		      header.startOffset = start;
		      header.endOffset = start + 4;
		    } else {
		      header.topDictLength = parse_default.getCard16(data, start + 3);
		      header.endOffset = start + 8;
		    }
		    return header;
		  }
		  var TOP_DICT_META = [
		    { name: "version", op: 0, type: "SID" },
		    { name: "notice", op: 1, type: "SID" },
		    { name: "copyright", op: 1200, type: "SID" },
		    { name: "fullName", op: 2, type: "SID" },
		    { name: "familyName", op: 3, type: "SID" },
		    { name: "weight", op: 4, type: "SID" },
		    { name: "isFixedPitch", op: 1201, type: "number", value: 0 },
		    { name: "italicAngle", op: 1202, type: "number", value: 0 },
		    { name: "underlinePosition", op: 1203, type: "number", value: -100 },
		    { name: "underlineThickness", op: 1204, type: "number", value: 50 },
		    { name: "paintType", op: 1205, type: "number", value: 0 },
		    { name: "charstringType", op: 1206, type: "number", value: 2 },
		    {
		      name: "fontMatrix",
		      op: 1207,
		      type: ["real", "real", "real", "real", "real", "real"],
		      value: [1e-3, 0, 0, 1e-3, 0, 0]
		    },
		    { name: "uniqueId", op: 13, type: "number" },
		    { name: "fontBBox", op: 5, type: ["number", "number", "number", "number"], value: [0, 0, 0, 0] },
		    { name: "strokeWidth", op: 1208, type: "number", value: 0 },
		    { name: "xuid", op: 14, type: [], value: null },
		    { name: "charset", op: 15, type: "offset", value: 0 },
		    { name: "encoding", op: 16, type: "offset", value: 0 },
		    { name: "charStrings", op: 17, type: "offset", value: 0 },
		    { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] },
		    { name: "ros", op: 1230, type: ["SID", "SID", "number"] },
		    { name: "cidFontVersion", op: 1231, type: "number", value: 0 },
		    { name: "cidFontRevision", op: 1232, type: "number", value: 0 },
		    { name: "cidFontType", op: 1233, type: "number", value: 0 },
		    { name: "cidCount", op: 1234, type: "number", value: 8720 },
		    { name: "uidBase", op: 1235, type: "number" },
		    { name: "fdArray", op: 1236, type: "offset" },
		    { name: "fdSelect", op: 1237, type: "offset" },
		    { name: "fontName", op: 1238, type: "SID" }
		  ];
		  var TOP_DICT_META_CFF2 = [
		    {
		      name: "fontMatrix",
		      op: 1207,
		      type: ["real", "real", "real", "real", "real", "real"],
		      value: [1e-3, 0, 0, 1e-3, 0, 0]
		    },
		    { name: "charStrings", op: 17, type: "offset" },
		    { name: "fdArray", op: 1236, type: "offset" },
		    { name: "fdSelect", op: 1237, type: "offset" },
		    { name: "vstore", op: 24, type: "offset" }
		  ];
		  var PRIVATE_DICT_META = [
		    { name: "subrs", op: 19, type: "offset", value: 0 },
		    { name: "defaultWidthX", op: 20, type: "number", value: 0 },
		    { name: "nominalWidthX", op: 21, type: "number", value: 0 }
		  ];
		  var PRIVATE_DICT_META_CFF2 = [
		    { name: "blueValues", op: 6, type: "delta" },
		    { name: "otherBlues", op: 7, type: "delta" },
		    { name: "familyBlues", op: 7, type: "delta" },
		    { name: "familyBlues", op: 8, type: "delta" },
		    { name: "familyOtherBlues", op: 9, type: "delta" },
		    { name: "blueScale", op: 1209, type: "number", value: 0.039625 },
		    { name: "blueShift", op: 1210, type: "number", value: 7 },
		    { name: "blueFuzz", op: 1211, type: "number", value: 1 },
		    { name: "stdHW", op: 10, type: "number" },
		    { name: "stdVW", op: 11, type: "number" },
		    { name: "stemSnapH", op: 1212, type: "number" },
		    { name: "stemSnapV", op: 1213, type: "number" },
		    { name: "languageGroup", op: 1217, type: "number", value: 0 },
		    { name: "expansionFactor", op: 1218, type: "number", value: 0.06 },
		    { name: "vsindex", op: 22, type: "number", value: 0 },
		    { name: "subrs", op: 19, type: "offset" }
		  ];
		  var FONT_DICT_META = [
		    { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] }
		  ];
		  function parseCFFTopDict(data, start, strings, version) {
		    const dict = parseCFFDict(data, start, data.byteLength, version);
		    return interpretDict(dict, version > 1 ? TOP_DICT_META_CFF2 : TOP_DICT_META, strings);
		  }
		  function parseCFFPrivateDict(data, start, size, strings, version) {
		    const dict = parseCFFDict(data, start, size, version);
		    return interpretDict(dict, version > 1 ? PRIVATE_DICT_META_CFF2 : PRIVATE_DICT_META, strings);
		  }
		  function parseFontDict(data, start, version) {
		    const dict = parseCFFDict(data, start, void 0, version);
		    return interpretDict(dict, FONT_DICT_META);
		  }
		  function gatherCFF2FontDicts(data, start, fdArray) {
		    const fontDictArray = [];
		    for (let i = 0; i < fdArray.length; i++) {
		      const fontDictData = new DataView(new Uint8Array(fdArray[i]).buffer);
		      const fontDict = parseFontDict(fontDictData, 0, 2);
		      const privateSize = fontDict.private[0];
		      const privateOffset = fontDict.private[1];
		      if (privateSize !== 0 && privateOffset !== 0) {
		        const privateDict = parseCFFPrivateDict(data, privateOffset + start, privateSize, [], 2);
		        if (privateDict.subrs) {
		          const subrOffset = privateOffset + privateDict.subrs;
		          const subrIndex = parseCFFIndex(data, subrOffset + start, void 0, 2);
		          fontDict._subrs = subrIndex.objects;
		          fontDict._subrsBias = calcCFFSubroutineBias(fontDict._subrs);
		        }
		        fontDict._privateDict = privateDict;
		      }
		      fontDictArray.push(fontDict);
		    }
		    return fontDictArray;
		  }
		  function gatherCFFTopDicts(data, start, cffIndex, strings, version) {
		    const topDictArray = [];
		    for (let iTopDict = 0; iTopDict < cffIndex.length; iTopDict += 1) {
		      const topDictData = new DataView(new Uint8Array(cffIndex[iTopDict]).buffer);
		      const topDict = parseCFFTopDict(topDictData, 0, strings, version);
		      topDict._subrs = [];
		      topDict._subrsBias = 0;
		      topDict._defaultWidthX = 0;
		      topDict._nominalWidthX = 0;
		      const privateSize = version < 2 ? topDict.private[0] : 0;
		      const privateOffset = version < 2 ? topDict.private[1] : 0;
		      if (privateSize !== 0 && privateOffset !== 0) {
		        const privateDict = parseCFFPrivateDict(data, privateOffset + start, privateSize, strings, version);
		        topDict._defaultWidthX = privateDict.defaultWidthX;
		        topDict._nominalWidthX = privateDict.nominalWidthX;
		        if (privateDict.subrs !== 0) {
		          const subrOffset = privateOffset + privateDict.subrs;
		          const subrIndex = parseCFFIndex(data, subrOffset + start, void 0, version);
		          topDict._subrs = subrIndex.objects;
		          topDict._subrsBias = calcCFFSubroutineBias(topDict._subrs);
		        }
		        topDict._privateDict = privateDict;
		      }
		      topDictArray.push(topDict);
		    }
		    return topDictArray;
		  }
		  function parseCFFCharset(data, start, nGlyphs, strings, isCIDFont) {
		    let sid;
		    let count;
		    const parser = new parse_default.Parser(data, start);
		    nGlyphs -= 1;
		    const charset = [".notdef"];
		    const format = parser.parseCard8();
		    if (format === 0) {
		      for (let i = 0; i < nGlyphs; i += 1) {
		        sid = parser.parseSID();
		        if (isCIDFont) {
		          charset.push(sid);
		        } else {
		          charset.push(getCFFString(strings, sid) || sid);
		        }
		      }
		    } else if (format === 1) {
		      while (charset.length <= nGlyphs) {
		        sid = parser.parseSID();
		        count = parser.parseCard8();
		        for (let i = 0; i <= count; i += 1) {
		          if (isCIDFont) {
		            charset.push("cid" + ("00000" + sid).slice(-5));
		          } else {
		            charset.push(getCFFString(strings, sid) || sid);
		          }
		          sid += 1;
		        }
		      }
		    } else if (format === 2) {
		      while (charset.length <= nGlyphs) {
		        sid = parser.parseSID();
		        count = parser.parseCard16();
		        for (let i = 0; i <= count; i += 1) {
		          if (isCIDFont) {
		            charset.push("cid" + ("00000" + sid).slice(-5));
		          } else {
		            charset.push(getCFFString(strings, sid) || sid);
		          }
		          sid += 1;
		        }
		      }
		    } else {
		      throw new Error("Unknown charset format " + format);
		    }
		    return charset;
		  }
		  function parseCFFEncoding(data, start) {
		    let code;
		    const encoding = {};
		    const parser = new parse_default.Parser(data, start);
		    const format = parser.parseCard8();
		    if (format === 0) {
		      const nCodes = parser.parseCard8();
		      for (let i = 0; i < nCodes; i += 1) {
		        code = parser.parseCard8();
		        encoding[code] = i;
		      }
		    } else if (format === 1) {
		      const nRanges = parser.parseCard8();
		      code = 1;
		      for (let i = 0; i < nRanges; i += 1) {
		        const first = parser.parseCard8();
		        const nLeft = parser.parseCard8();
		        for (let j = first; j <= first + nLeft; j += 1) {
		          encoding[j] = code;
		          code += 1;
		        }
		      }
		    } else {
		      throw new Error("Unknown encoding format " + format);
		    }
		    return encoding;
		  }
		  function parseBlend(operands) {
		    let numberOfBlends = operands.pop();
		    while (operands.length > numberOfBlends) {
		      operands.pop();
		    }
		  }
		  function applyPaintType(font, path) {
		    const paintType = font.tables.cff && font.tables.cff.topDict && font.tables.cff.topDict.paintType || 0;
		    if (paintType === 2) {
		      path.fill = null;
		      path.stroke = "black";
		      path.strokeWidth = font.tables.cff.topDict.strokeWidth || 0;
		    }
		    return paintType;
		  }
		  function parseCFFCharstring(font, glyph, code, version, coords) {
		    let c1x;
		    let c1y;
		    let c2x;
		    let c2y;
		    const p = new path_default();
		    const stack = [];
		    let nStems = 0;
		    let haveWidth = false;
		    let open = false;
		    let x = 0;
		    let y = 0;
		    let subrs;
		    let subrsBias;
		    let defaultWidthX;
		    let nominalWidthX;
		    let vsindex = 0;
		    let vstore = [];
		    let blendVector;
		    let callDepth = 0;
		    const cffTable = font.tables.cff2 || font.tables.cff;
		    defaultWidthX = cffTable.topDict._defaultWidthX;
		    nominalWidthX = cffTable.topDict._nominalWidthX;
		    coords = coords || font.variation && font.variation.get();
		    if (!glyph.getBlendPath) {
		      glyph.getBlendPath = function(variationCoords) {
		        return parseCFFCharstring(font, glyph, code, version, variationCoords);
		      };
		    }
		    if (font.isCIDFont || version > 1) {
		      const fdIndex = cffTable.topDict._fdSelect ? cffTable.topDict._fdSelect[glyph.index] : 0;
		      const fdDict = cffTable.topDict._fdArray[fdIndex];
		      subrs = fdDict._subrs;
		      subrsBias = fdDict._subrsBias;
		      if (version > 1) {
		        vstore = cffTable.topDict._vstore.itemVariationStore;
		        vsindex = fdDict._privateDict.vsindex;
		      } else {
		        defaultWidthX = fdDict._defaultWidthX;
		        nominalWidthX = fdDict._nominalWidthX;
		      }
		    } else {
		      subrs = cffTable.topDict._subrs;
		      subrsBias = cffTable.topDict._subrsBias;
		    }
		    const paintType = applyPaintType(font, p);
		    let width = defaultWidthX;
		    function newContour(x2, y2) {
		      if (open && paintType !== 2) {
		        p.closePath();
		      }
		      p.moveTo(x2, y2);
		      open = true;
		    }
		    function parseStems() {
		      let hasWidthArg;
		      hasWidthArg = (stack.length & 1) !== 0;
		      if (hasWidthArg && !haveWidth) {
		        width = stack.shift() + nominalWidthX;
		      }
		      nStems += stack.length >> 1;
		      stack.length = 0;
		      haveWidth = true;
		    }
		    function parse(code2) {
		      let b1;
		      let b2;
		      let b3;
		      let b4;
		      let codeIndex;
		      let subrCode;
		      let jpx;
		      let jpy;
		      let c3x;
		      let c3y;
		      let c4x;
		      let c4y;
		      let i = 0;
		      while (i < code2.length) {
		        let v = code2[i];
		        i += 1;
		        switch (v) {
		          case 1:
		            parseStems();
		            break;
		          case 3:
		            parseStems();
		            break;
		          case 4:
		            if (stack.length > 1 && !haveWidth) {
		              width = stack.shift() + nominalWidthX;
		              haveWidth = true;
		            }
		            y += stack.pop();
		            newContour(x, y);
		            break;
		          case 5:
		            while (stack.length > 0) {
		              x += stack.shift();
		              y += stack.shift();
		              p.lineTo(x, y);
		            }
		            break;
		          case 6:
		            while (stack.length > 0) {
		              x += stack.shift();
		              p.lineTo(x, y);
		              if (stack.length === 0) {
		                break;
		              }
		              y += stack.shift();
		              p.lineTo(x, y);
		            }
		            break;
		          case 7:
		            while (stack.length > 0) {
		              y += stack.shift();
		              p.lineTo(x, y);
		              if (stack.length === 0) {
		                break;
		              }
		              x += stack.shift();
		              p.lineTo(x, y);
		            }
		            break;
		          case 8:
		            while (stack.length > 0) {
		              c1x = x + stack.shift();
		              c1y = y + stack.shift();
		              c2x = c1x + stack.shift();
		              c2y = c1y + stack.shift();
		              x = c2x + stack.shift();
		              y = c2y + stack.shift();
		              p.curveTo(c1x, c1y, c2x, c2y, x, y);
		            }
		            break;
		          case 10:
		            codeIndex = stack.pop() + subrsBias;
		            subrCode = subrs[codeIndex];
		            if (subrCode) {
		              if (callDepth >= MAX_CALL_DEPTH) {
		                console.warn("CFF charstring subroutine call depth exceeded, skipping callsubr");
		                break;
		              }
		              callDepth++;
		              parse(subrCode);
		              callDepth--;
		            }
		            break;
		          case 11:
		            if (version > 1) {
		              console.error("CFF CharString operator return (11) is not supported in CFF2");
		              break;
		            }
		            return;
		          case 12:
		            v = code2[i];
		            i += 1;
		            switch (v) {
		              case 35:
		                c1x = x + stack.shift();
		                c1y = y + stack.shift();
		                c2x = c1x + stack.shift();
		                c2y = c1y + stack.shift();
		                jpx = c2x + stack.shift();
		                jpy = c2y + stack.shift();
		                c3x = jpx + stack.shift();
		                c3y = jpy + stack.shift();
		                c4x = c3x + stack.shift();
		                c4y = c3y + stack.shift();
		                x = c4x + stack.shift();
		                y = c4y + stack.shift();
		                stack.shift();
		                p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
		                p.curveTo(c3x, c3y, c4x, c4y, x, y);
		                break;
		              case 34:
		                c1x = x + stack.shift();
		                c1y = y;
		                c2x = c1x + stack.shift();
		                c2y = c1y + stack.shift();
		                jpx = c2x + stack.shift();
		                jpy = c2y;
		                c3x = jpx + stack.shift();
		                c3y = c2y;
		                c4x = c3x + stack.shift();
		                c4y = y;
		                x = c4x + stack.shift();
		                p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
		                p.curveTo(c3x, c3y, c4x, c4y, x, y);
		                break;
		              case 36:
		                c1x = x + stack.shift();
		                c1y = y + stack.shift();
		                c2x = c1x + stack.shift();
		                c2y = c1y + stack.shift();
		                jpx = c2x + stack.shift();
		                jpy = c2y;
		                c3x = jpx + stack.shift();
		                c3y = c2y;
		                c4x = c3x + stack.shift();
		                c4y = c3y + stack.shift();
		                x = c4x + stack.shift();
		                p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
		                p.curveTo(c3x, c3y, c4x, c4y, x, y);
		                break;
		              case 37:
		                c1x = x + stack.shift();
		                c1y = y + stack.shift();
		                c2x = c1x + stack.shift();
		                c2y = c1y + stack.shift();
		                jpx = c2x + stack.shift();
		                jpy = c2y + stack.shift();
		                c3x = jpx + stack.shift();
		                c3y = jpy + stack.shift();
		                c4x = c3x + stack.shift();
		                c4y = c3y + stack.shift();
		                if (Math.abs(c4x - x) > Math.abs(c4y - y)) {
		                  x = c4x + stack.shift();
		                } else {
		                  y = c4y + stack.shift();
		                }
		                p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
		                p.curveTo(c3x, c3y, c4x, c4y, x, y);
		                break;
		              default:
		                console.log("Glyph " + glyph.index + ": unknown operator 1200" + v);
		                stack.length = 0;
		            }
		            break;
		          case 14:
		            if (version > 1) {
		              console.error("CFF CharString operator endchar (14) is not supported in CFF2");
		              break;
		            }
		            if (stack.length >= 4) {
		              const acharName = cffStandardEncoding[stack.pop()];
		              const bcharName = cffStandardEncoding[stack.pop()];
		              const ady = stack.pop();
		              const adx = stack.pop();
		              if (acharName && bcharName) {
		                glyph.isComposite = true;
		                glyph.components = [];
		                const acharGlyphIndex = font.cffEncoding.charset.indexOf(acharName);
		                const bcharGlyphIndex = font.cffEncoding.charset.indexOf(bcharName);
		                glyph.components.push({
		                  glyphIndex: bcharGlyphIndex,
		                  dx: 0,
		                  dy: 0
		                });
		                glyph.components.push({
		                  glyphIndex: acharGlyphIndex,
		                  dx: adx,
		                  dy: ady
		                });
		                p.extend(font.glyphs.get(bcharGlyphIndex).path);
		                const acharGlyph = font.glyphs.get(acharGlyphIndex);
		                const shiftedCommands = JSON.parse(JSON.stringify(acharGlyph.path.commands));
		                for (let i2 = 0; i2 < shiftedCommands.length; i2 += 1) {
		                  const cmd = shiftedCommands[i2];
		                  if (cmd.type !== "Z") {
		                    cmd.x += adx;
		                    cmd.y += ady;
		                  }
		                  if (cmd.type === "Q" || cmd.type === "C") {
		                    cmd.x1 += adx;
		                    cmd.y1 += ady;
		                  }
		                  if (cmd.type === "C") {
		                    cmd.x2 += adx;
		                    cmd.y2 += ady;
		                  }
		                }
		                p.extend(shiftedCommands);
		              }
		            } else if (stack.length > 0 && !haveWidth) {
		              width = stack.shift() + nominalWidthX;
		              haveWidth = true;
		            }
		            if (open && paintType !== 2) {
		              p.closePath();
		              open = false;
		            }
		            break;
		          case 15:
		            if (version < 2) {
		              console.error("CFF2 CharString operator vsindex (15) is not supported in CFF");
		              break;
		            }
		            vsindex = stack.pop();
		            break;
		          case 16:
		            if (version < 2) {
		              console.error("CFF2 CharString operator blend (16) is not supported in CFF");
		              break;
		            }
		            if (!blendVector) {
		              blendVector = font.variation && coords && font.variation.process.getBlendVector(vstore, vsindex, coords);
		            }
		            var n = stack.pop();
		            var axisCount = blendVector ? blendVector.length : vstore.itemVariationSubtables[vsindex].regionIndexes.length;
		            var deltaSetCount = n * axisCount;
		            var delta = stack.length - deltaSetCount;
		            var deltaSetIndex = delta - n;
		            if (blendVector) {
		              for (let i2 = 0; i2 < n; i2++) {
		                var sum = stack[deltaSetIndex + i2];
		                for (let j = 0; j < axisCount; j++) {
		                  sum += blendVector[j] * stack[delta++];
		                }
		                stack[deltaSetIndex + i2] = sum;
		              }
		            }
		            while (deltaSetCount--) {
		              stack.pop();
		            }
		            break;
		          case 18:
		            parseStems();
		            break;
		          case 19:
		          // hintmask
		          case 20:
		            parseStems();
		            i += nStems + 7 >> 3;
		            break;
		          case 21:
		            if (stack.length > 2 && !haveWidth) {
		              width = stack.shift() + nominalWidthX;
		              haveWidth = true;
		            }
		            y += stack.pop();
		            x += stack.pop();
		            newContour(x, y);
		            break;
		          case 22:
		            if (stack.length > 1 && !haveWidth) {
		              width = stack.shift() + nominalWidthX;
		              haveWidth = true;
		            }
		            x += stack.pop();
		            newContour(x, y);
		            break;
		          case 23:
		            parseStems();
		            break;
		          case 24:
		            while (stack.length > 2) {
		              c1x = x + stack.shift();
		              c1y = y + stack.shift();
		              c2x = c1x + stack.shift();
		              c2y = c1y + stack.shift();
		              x = c2x + stack.shift();
		              y = c2y + stack.shift();
		              p.curveTo(c1x, c1y, c2x, c2y, x, y);
		            }
		            x += stack.shift();
		            y += stack.shift();
		            p.lineTo(x, y);
		            break;
		          case 25:
		            while (stack.length > 6) {
		              x += stack.shift();
		              y += stack.shift();
		              p.lineTo(x, y);
		            }
		            c1x = x + stack.shift();
		            c1y = y + stack.shift();
		            c2x = c1x + stack.shift();
		            c2y = c1y + stack.shift();
		            x = c2x + stack.shift();
		            y = c2y + stack.shift();
		            p.curveTo(c1x, c1y, c2x, c2y, x, y);
		            break;
		          case 26:
		            if (stack.length & 1) {
		              x += stack.shift();
		            }
		            while (stack.length > 0) {
		              c1x = x;
		              c1y = y + stack.shift();
		              c2x = c1x + stack.shift();
		              c2y = c1y + stack.shift();
		              x = c2x;
		              y = c2y + stack.shift();
		              p.curveTo(c1x, c1y, c2x, c2y, x, y);
		            }
		            break;
		          case 27:
		            if (stack.length & 1) {
		              y += stack.shift();
		            }
		            while (stack.length > 0) {
		              c1x = x + stack.shift();
		              c1y = y;
		              c2x = c1x + stack.shift();
		              c2y = c1y + stack.shift();
		              x = c2x + stack.shift();
		              y = c2y;
		              p.curveTo(c1x, c1y, c2x, c2y, x, y);
		            }
		            break;
		          case 28:
		            b1 = code2[i];
		            b2 = code2[i + 1];
		            stack.push((b1 << 24 | b2 << 16) >> 16);
		            i += 2;
		            break;
		          case 29:
		            codeIndex = stack.pop() + font.gsubrsBias;
		            subrCode = font.gsubrs[codeIndex];
		            if (subrCode) {
		              if (callDepth >= MAX_CALL_DEPTH) {
		                console.warn("CFF charstring subroutine call depth exceeded, skipping callgsubr");
		                break;
		              }
		              callDepth++;
		              parse(subrCode);
		              callDepth--;
		            }
		            break;
		          case 30:
		            while (stack.length > 0) {
		              c1x = x;
		              c1y = y + stack.shift();
		              c2x = c1x + stack.shift();
		              c2y = c1y + stack.shift();
		              x = c2x + stack.shift();
		              y = c2y + (stack.length === 1 ? stack.shift() : 0);
		              p.curveTo(c1x, c1y, c2x, c2y, x, y);
		              if (stack.length === 0) {
		                break;
		              }
		              c1x = x + stack.shift();
		              c1y = y;
		              c2x = c1x + stack.shift();
		              c2y = c1y + stack.shift();
		              y = c2y + stack.shift();
		              x = c2x + (stack.length === 1 ? stack.shift() : 0);
		              p.curveTo(c1x, c1y, c2x, c2y, x, y);
		            }
		            break;
		          case 31:
		            while (stack.length > 0) {
		              c1x = x + stack.shift();
		              c1y = y;
		              c2x = c1x + stack.shift();
		              c2y = c1y + stack.shift();
		              y = c2y + stack.shift();
		              x = c2x + (stack.length === 1 ? stack.shift() : 0);
		              p.curveTo(c1x, c1y, c2x, c2y, x, y);
		              if (stack.length === 0) {
		                break;
		              }
		              c1x = x;
		              c1y = y + stack.shift();
		              c2x = c1x + stack.shift();
		              c2y = c1y + stack.shift();
		              x = c2x + stack.shift();
		              y = c2y + (stack.length === 1 ? stack.shift() : 0);
		              p.curveTo(c1x, c1y, c2x, c2y, x, y);
		            }
		            break;
		          default:
		            if (v < 32) {
		              console.log("Glyph " + glyph.index + ": unknown operator " + v);
		            } else if (v < 247) {
		              stack.push(v - 139);
		            } else if (v < 251) {
		              b1 = code2[i];
		              i += 1;
		              stack.push((v - 247) * 256 + b1 + 108);
		            } else if (v < 255) {
		              b1 = code2[i];
		              i += 1;
		              stack.push(-(v - 251) * 256 - b1 - 108);
		            } else {
		              b1 = code2[i];
		              b2 = code2[i + 1];
		              b3 = code2[i + 2];
		              b4 = code2[i + 3];
		              i += 4;
		              stack.push((b1 << 24 | b2 << 16 | b3 << 8 | b4) / 65536);
		            }
		        }
		      }
		    }
		    parse(code);
		    if (font.variation && coords) {
		      p.commands = p.commands.map((c) => {
		        const keys = Object.keys(c);
		        for (let i = 0; i < keys.length; i++) {
		          const key = keys[i];
		          if (key === "type") continue;
		          c[key] = Math.round(c[key]);
		        }
		        return c;
		      });
		    }
		    if (haveWidth) {
		      glyph.advanceWidth = width;
		    }
		    return p;
		  }
		  function parseCFFFDSelect(data, start, nGlyphs, fdArrayCount, version) {
		    const fdSelect = [];
		    let fdIndex;
		    const parser = new parse_default.Parser(data, start);
		    const format = parser.parseCard8();
		    if (format === 0) {
		      for (let iGid = 0; iGid < nGlyphs; iGid++) {
		        fdIndex = parser.parseCard8();
		        if (fdIndex >= fdArrayCount) {
		          throw new Error("CFF table CID Font FDSelect has bad FD index value " + fdIndex + " (FD count " + fdArrayCount + ")");
		        }
		        fdSelect.push(fdIndex);
		      }
		    } else if (format === 3 || version > 1 && format === 4) {
		      const nRanges = format === 4 ? parser.parseULong() : parser.parseCard16();
		      let first = format === 4 ? parser.parseULong() : parser.parseCard16();
		      if (first !== 0) {
		        throw new Error(`CFF Table CID Font FDSelect format ${format} range has bad initial GID ${first}`);
		      }
		      let next;
		      for (let iRange = 0; iRange < nRanges; iRange++) {
		        fdIndex = format === 4 ? parser.parseUShort() : parser.parseCard8();
		        next = format === 4 ? parser.parseULong() : parser.parseCard16();
		        if (fdIndex >= fdArrayCount) {
		          throw new Error("CFF table CID Font FDSelect has bad FD index value " + fdIndex + " (FD count " + fdArrayCount + ")");
		        }
		        if (next > nGlyphs) {
		          throw new Error(`CFF Table CID Font FDSelect format ${version} range has bad GID ${next}`);
		        }
		        for (; first < next; first++) {
		          fdSelect.push(fdIndex);
		        }
		        first = next;
		      }
		      if (next !== nGlyphs) {
		        throw new Error("CFF Table CID Font FDSelect format 3 range has bad final (Sentinal) GID " + next);
		      }
		    } else {
		      throw new Error("CFF Table CID Font FDSelect table has unsupported format " + format);
		    }
		    return fdSelect;
		  }
		  function parseCFFTable(data, start, font, opt) {
		    let resultTable;
		    const header = parseCFFHeader(data, start);
		    if (header.formatMajor === 2) {
		      resultTable = font.tables.cff2 = {};
		    } else {
		      resultTable = font.tables.cff = {};
		    }
		    const nameIndex = header.formatMajor > 1 ? null : parseCFFIndex(data, header.endOffset, parse_default.bytesToString);
		    const topDictIndex = header.formatMajor > 1 ? null : parseCFFIndex(data, nameIndex.endOffset);
		    const stringIndex = header.formatMajor > 1 ? null : parseCFFIndex(data, topDictIndex.endOffset, parse_default.bytesToString);
		    const globalSubrIndex = parseCFFIndex(data, header.formatMajor > 1 ? start + header.size + header.topDictLength : stringIndex.endOffset, void 0, header.formatMajor);
		    font.gsubrs = globalSubrIndex.objects;
		    font.gsubrsBias = calcCFFSubroutineBias(font.gsubrs);
		    let topDict;
		    if (header.formatMajor > 1) {
		      const topDictOffset = start + header.size;
		      const topDictData = parse_default.getBytes(data, topDictOffset, topDictOffset + header.topDictLength);
		      topDict = gatherCFFTopDicts(data, 0, [topDictData], void 0, header.formatMajor)[0];
		    } else {
		      const topDictArray = gatherCFFTopDicts(data, start, topDictIndex.objects, stringIndex.objects, header.formatMajor);
		      if (topDictArray.length !== 1) {
		        throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + topDictArray.length);
		      }
		      topDict = topDictArray[0];
		    }
		    resultTable.topDict = topDict;
		    if (topDict._privateDict) {
		      font.defaultWidthX = topDict._privateDict.defaultWidthX;
		      font.nominalWidthX = topDict._privateDict.nominalWidthX;
		    }
		    if (header.formatMajor < 2 && topDict.ros[0] !== void 0 && topDict.ros[1] !== void 0) {
		      font.isCIDFont = true;
		    }
		    if (header.formatMajor > 1) {
		      let fdArrayIndexOffset = topDict.fdArray;
		      let fdSelectOffset = topDict.fdSelect;
		      if (!fdArrayIndexOffset) {
		        throw new Error("This is a CFF2 font, but FDArray information is missing");
		      }
		      const fdArrayIndex = parseCFFIndex(data, start + fdArrayIndexOffset, null, header.formatMajor);
		      const fdArray = gatherCFF2FontDicts(data, start, fdArrayIndex.objects);
		      topDict._fdArray = fdArray;
		      if (fdSelectOffset) {
		        topDict._fdSelect = parseCFFFDSelect(data, start + fdSelectOffset, font.numGlyphs, fdArray.length, header.formatMajor);
		      }
		    } else if (font.isCIDFont) {
		      let fdArrayOffset = topDict.fdArray;
		      let fdSelectOffset = topDict.fdSelect;
		      if (fdArrayOffset === 0 || fdSelectOffset === 0) {
		        throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
		      }
		      fdArrayOffset += start;
		      const fdArrayIndex = parseCFFIndex(data, fdArrayOffset);
		      const fdArray = gatherCFFTopDicts(data, start, fdArrayIndex.objects, stringIndex.objects, header.formatMajor);
		      topDict._fdArray = fdArray;
		      fdSelectOffset += start;
		      topDict._fdSelect = parseCFFFDSelect(data, fdSelectOffset, font.numGlyphs, fdArray.length, header.formatMajor);
		    }
		    if (header.formatMajor < 2) {
		      const privateDictOffset = start + topDict.private[1];
		      const privateDict = parseCFFPrivateDict(data, privateDictOffset, topDict.private[0], stringIndex.objects, header.formatMajor);
		      font.defaultWidthX = privateDict.defaultWidthX;
		      font.nominalWidthX = privateDict.nominalWidthX;
		      if (privateDict.subrs !== 0) {
		        const subrOffset = privateDictOffset + privateDict.subrs;
		        const subrIndex = parseCFFIndex(data, subrOffset);
		        font.subrs = subrIndex.objects;
		        font.subrsBias = calcCFFSubroutineBias(font.subrs);
		      } else {
		        font.subrs = [];
		        font.subrsBias = 0;
		      }
		    }
		    let charStringsIndex;
		    if (opt.lowMemory) {
		      charStringsIndex = parseCFFIndexLowMemory(data, start + topDict.charStrings, header.formatMajor);
		      font.nGlyphs = charStringsIndex.offsets.length - (header.formatMajor > 1 ? 1 : 0);
		    } else {
		      charStringsIndex = parseCFFIndex(data, start + topDict.charStrings, null, header.formatMajor);
		      font.nGlyphs = charStringsIndex.objects.length;
		    }
		    if (header.formatMajor > 1 && font.tables.maxp && font.nGlyphs !== font.tables.maxp.numGlyphs) {
		      console.error(`Glyph count in the CFF2 table (${font.nGlyphs}) must correspond to the glyph count in the maxp table (${font.tables.maxp.numGlyphs})`);
		    }
		    if (header.formatMajor < 2) {
		      let charset = [];
		      let encoding = [];
		      if (topDict.charset === 0) {
		        charset = cffISOAdobeStrings;
		      } else if (topDict.charset === 1) {
		        charset = cffIExpertStrings;
		      } else if (topDict.charset === 2) {
		        charset = cffExpertSubsetStrings;
		      } else {
		        charset = parseCFFCharset(data, start + topDict.charset, font.nGlyphs, stringIndex.objects, font.isCIDFont);
		      }
		      if (topDict.encoding === 0) {
		        encoding = cffStandardEncoding;
		      } else if (topDict.encoding === 1) {
		        encoding = cffExpertEncoding;
		      } else {
		        encoding = parseCFFEncoding(data, start + topDict.encoding);
		      }
		      font.cffEncoding = new CffEncoding(encoding, charset);
		      font.encoding = font.encoding || font.cffEncoding;
		    }
		    font.glyphs = new glyphset_default.GlyphSet(font);
		    if (opt.lowMemory) {
		      font._push = function(i) {
		        const charString = getCffIndexObject(i, charStringsIndex.offsets, data, start + topDict.charStrings, void 0, header.formatMajor);
		        font.glyphs.push(i, glyphset_default.cffGlyphLoader(font, i, parseCFFCharstring, charString, header.formatMajor));
		      };
		    } else {
		      for (let i = 0; i < font.nGlyphs; i += 1) {
		        const charString = charStringsIndex.objects[i];
		        font.glyphs.push(i, glyphset_default.cffGlyphLoader(font, i, parseCFFCharstring, charString, header.formatMajor));
		      }
		    }
		    if (topDict.vstore) {
		      const p = new parse_default.Parser(data, start + topDict.vstore);
		      topDict._vstore = p.parseVariationStore();
		    }
		  }
		  function encodeString(s, strings) {
		    let sid;
		    let i = cffStandardStrings.indexOf(s);
		    if (i >= 0) {
		      sid = i;
		    }
		    i = strings.indexOf(s);
		    if (i >= 0) {
		      sid = i + cffStandardStrings.length;
		    } else {
		      sid = cffStandardStrings.length + strings.length;
		      strings.push(s);
		    }
		    return sid;
		  }
		  function makeHeader() {
		    return new table_default.Record("Header", [
		      { name: "major", type: "Card8", value: 1 },
		      { name: "minor", type: "Card8", value: 0 },
		      { name: "hdrSize", type: "Card8", value: 4 },
		      { name: "major", type: "Card8", value: 1 }
		    ]);
		  }
		  function makeNameIndex(fontNames) {
		    const t = new table_default.Record("Name INDEX", [
		      { name: "names", type: "INDEX", value: [] }
		    ]);
		    t.names = [];
		    for (let i = 0; i < fontNames.length; i += 1) {
		      t.names.push({ name: "name_" + i, type: "NAME", value: fontNames[i] });
		    }
		    return t;
		  }
		  function makeDict(meta, attrs, strings) {
		    const m = {};
		    for (let i = 0; i < meta.length; i += 1) {
		      const entry = meta[i];
		      let value = attrs[entry.name];
		      if (value !== void 0 && !equals(value, entry.value)) {
		        if (entry.type === "SID") {
		          value = encodeString(value, strings);
		        }
		        m[entry.op] = { name: entry.name, type: entry.type, value };
		      }
		    }
		    return m;
		  }
		  function makeTopDict(attrs, strings, version) {
		    const t = new table_default.Record("Top DICT", [
		      { name: "dict", type: "DICT", value: {} }
		    ]);
		    t.dict = makeDict(TOP_DICT_META, attrs, strings);
		    return t;
		  }
		  function makeTopDictIndex(topDict) {
		    const t = new table_default.Record("Top DICT INDEX", [
		      { name: "topDicts", type: "INDEX", value: [] }
		    ]);
		    t.topDicts = [{ name: "topDict_0", type: "TABLE", value: topDict }];
		    return t;
		  }
		  function makeStringIndex(strings) {
		    const t = new table_default.Record("String INDEX", [
		      { name: "strings", type: "INDEX", value: [] }
		    ]);
		    t.strings = [];
		    for (let i = 0; i < strings.length; i += 1) {
		      t.strings.push({ name: "string_" + i, type: "STRING", value: strings[i] });
		    }
		    return t;
		  }
		  function makeGlobalSubrIndex() {
		    return new table_default.Record("Global Subr INDEX", [
		      { name: "subrs", type: "INDEX", value: [] }
		    ]);
		  }
		  function makeCharsets(glyphNames, strings) {
		    const t = new table_default.Record("Charsets", [
		      { name: "format", type: "Card8", value: 0 }
		    ]);
		    for (let i = 0; i < glyphNames.length; i += 1) {
		      const glyphName = glyphNames[i];
		      const glyphSID = encodeString(glyphName, strings);
		      t.fields.push({ name: "glyph_" + i, type: "SID", value: glyphSID });
		    }
		    return t;
		  }
		  function glyphToOps(glyph, version) {
		    const ops = [];
		    const path = glyph.path;
		    {
		      ops.push({ name: "width", type: "NUMBER", value: glyph.advanceWidth });
		    }
		    let x = 0;
		    let y = 0;
		    for (let i = 0; i < path.commands.length; i += 1) {
		      let dx;
		      let dy;
		      let cmd = path.commands[i];
		      if (cmd.type === "Q") {
		        const _13 = 1 / 3;
		        const _23 = 2 / 3;
		        cmd = {
		          type: "C",
		          x: cmd.x,
		          y: cmd.y,
		          x1: Math.round(_13 * x + _23 * cmd.x1),
		          y1: Math.round(_13 * y + _23 * cmd.y1),
		          x2: Math.round(_13 * cmd.x + _23 * cmd.x1),
		          y2: Math.round(_13 * cmd.y + _23 * cmd.y1)
		        };
		      }
		      if (cmd.type === "M") {
		        dx = Math.round(cmd.x - x);
		        dy = Math.round(cmd.y - y);
		        ops.push({ name: "dx", type: "NUMBER", value: dx });
		        ops.push({ name: "dy", type: "NUMBER", value: dy });
		        ops.push({ name: "rmoveto", type: "OP", value: 21 });
		        x = Math.round(cmd.x);
		        y = Math.round(cmd.y);
		      } else if (cmd.type === "L") {
		        dx = Math.round(cmd.x - x);
		        dy = Math.round(cmd.y - y);
		        ops.push({ name: "dx", type: "NUMBER", value: dx });
		        ops.push({ name: "dy", type: "NUMBER", value: dy });
		        ops.push({ name: "rlineto", type: "OP", value: 5 });
		        x = Math.round(cmd.x);
		        y = Math.round(cmd.y);
		      } else if (cmd.type === "C") {
		        const dx1 = Math.round(cmd.x1 - x);
		        const dy1 = Math.round(cmd.y1 - y);
		        const dx2 = Math.round(cmd.x2 - cmd.x1);
		        const dy2 = Math.round(cmd.y2 - cmd.y1);
		        dx = Math.round(cmd.x - cmd.x2);
		        dy = Math.round(cmd.y - cmd.y2);
		        ops.push({ name: "dx1", type: "NUMBER", value: dx1 });
		        ops.push({ name: "dy1", type: "NUMBER", value: dy1 });
		        ops.push({ name: "dx2", type: "NUMBER", value: dx2 });
		        ops.push({ name: "dy2", type: "NUMBER", value: dy2 });
		        ops.push({ name: "dx", type: "NUMBER", value: dx });
		        ops.push({ name: "dy", type: "NUMBER", value: dy });
		        ops.push({ name: "rrcurveto", type: "OP", value: 8 });
		        x = Math.round(cmd.x);
		        y = Math.round(cmd.y);
		      }
		    }
		    {
		      ops.push({ name: "endchar", type: "OP", value: 14 });
		    }
		    return ops;
		  }
		  function makeCharStringsIndex(glyphs, version) {
		    const t = new table_default.Record("CharStrings INDEX", [
		      { name: "charStrings", type: "INDEX", value: [] }
		    ]);
		    for (let i = 0; i < glyphs.length; i += 1) {
		      const glyph = glyphs.get(i);
		      const ops = glyphToOps(glyph);
		      t.charStrings.push({ name: glyph.name, type: "CHARSTRING", value: ops });
		    }
		    return t;
		  }
		  function makePrivateDict(attrs, strings, version) {
		    const t = new table_default.Record("Private DICT", [
		      { name: "dict", type: "DICT", value: {} }
		    ]);
		    t.dict = makeDict(PRIVATE_DICT_META, attrs, strings);
		    return t;
		  }
		  function makeCFFTable(glyphs, options) {
		    const t = new table_default.Table("CFF ", [
		      { name: "header", type: "RECORD" },
		      { name: "nameIndex", type: "RECORD" },
		      { name: "topDictIndex", type: "RECORD" },
		      { name: "stringIndex", type: "RECORD" },
		      { name: "globalSubrIndex", type: "RECORD" },
		      { name: "charsets", type: "RECORD" },
		      { name: "charStringsIndex", type: "RECORD" },
		      { name: "privateDict", type: "RECORD" }
		    ]);
		    const fontScale = 1 / options.unitsPerEm;
		    const attrs = {
		      version: options.version,
		      fullName: options.fullName,
		      familyName: options.familyName,
		      weight: options.weightName,
		      fontBBox: options.fontBBox || [0, 0, 0, 0],
		      fontMatrix: [fontScale, 0, 0, fontScale, 0, 0],
		      charset: 999,
		      encoding: 0,
		      charStrings: 999,
		      private: [0, 999]
		    };
		    const topDictOptions = options && options.topDict || {};
		    if (topDictOptions.paintType) {
		      attrs.paintType = topDictOptions.paintType;
		      attrs.strokeWidth = topDictOptions.strokeWidth || 0;
		    }
		    const privateAttrs = {};
		    const glyphNames = [];
		    let glyph;
		    for (let i = 1; i < glyphs.length; i += 1) {
		      glyph = glyphs.get(i);
		      glyphNames.push(glyph.name);
		    }
		    const strings = [];
		    t.header = makeHeader();
		    t.nameIndex = makeNameIndex([options.postScriptName]);
		    let topDict = makeTopDict(attrs, strings);
		    t.topDictIndex = makeTopDictIndex(topDict);
		    t.globalSubrIndex = makeGlobalSubrIndex();
		    t.charsets = makeCharsets(glyphNames, strings);
		    t.charStringsIndex = makeCharStringsIndex(glyphs);
		    t.privateDict = makePrivateDict(privateAttrs, strings);
		    t.stringIndex = makeStringIndex(strings);
		    const startOffset = t.header.sizeOf() + t.nameIndex.sizeOf() + t.topDictIndex.sizeOf() + t.stringIndex.sizeOf() + t.globalSubrIndex.sizeOf();
		    attrs.charset = startOffset;
		    attrs.encoding = 0;
		    attrs.charStrings = attrs.charset + t.charsets.sizeOf();
		    attrs.private[1] = attrs.charStrings + t.charStringsIndex.sizeOf();
		    topDict = makeTopDict(attrs, strings);
		    t.topDictIndex = makeTopDictIndex(topDict);
		    return t;
		  }
		  var cff_default = { parse: parseCFFTable, make: makeCFFTable };

		  // src/tables/head.mjs
		  function parseHeadTable(data, start) {
		    const head = {};
		    const p = new parse_default.Parser(data, start);
		    head.version = p.parseVersion();
		    head.fontRevision = Math.round(p.parseFixed() * 1e3) / 1e3;
		    head.checkSumAdjustment = p.parseULong();
		    head.magicNumber = p.parseULong();
		    check_default.argument(head.magicNumber === 1594834165, "Font header has wrong magic number.");
		    head.flags = p.parseUShort();
		    head.unitsPerEm = p.parseUShort();
		    head.created = p.parseLongDateTime();
		    head.modified = p.parseLongDateTime();
		    head.xMin = p.parseShort();
		    head.yMin = p.parseShort();
		    head.xMax = p.parseShort();
		    head.yMax = p.parseShort();
		    head.macStyle = p.parseUShort();
		    head.lowestRecPPEM = p.parseUShort();
		    head.fontDirectionHint = p.parseShort();
		    head.indexToLocFormat = p.parseShort();
		    head.glyphDataFormat = p.parseShort();
		    return head;
		  }
		  function makeHeadTable(options) {
		    const timestamp = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3) + 2082844800;
		    let createdTimestamp = timestamp;
		    let macStyle = options.macStyle || 0;
		    if (options.createdTimestamp) {
		      createdTimestamp = options.createdTimestamp + 2082844800;
		    }
		    return new table_default.Table("head", [
		      { name: "version", type: "FIXED", value: 65536 },
		      { name: "fontRevision", type: "FIXED", value: 65536 },
		      { name: "checkSumAdjustment", type: "ULONG", value: 0 },
		      { name: "magicNumber", type: "ULONG", value: 1594834165 },
		      { name: "flags", type: "USHORT", value: 0 },
		      { name: "unitsPerEm", type: "USHORT", value: 1e3 },
		      { name: "created", type: "LONGDATETIME", value: createdTimestamp },
		      { name: "modified", type: "LONGDATETIME", value: timestamp },
		      { name: "xMin", type: "SHORT", value: 0 },
		      { name: "yMin", type: "SHORT", value: 0 },
		      { name: "xMax", type: "SHORT", value: 0 },
		      { name: "yMax", type: "SHORT", value: 0 },
		      { name: "macStyle", type: "USHORT", value: macStyle },
		      { name: "lowestRecPPEM", type: "USHORT", value: 0 },
		      { name: "fontDirectionHint", type: "SHORT", value: 2 },
		      { name: "indexToLocFormat", type: "SHORT", value: 0 },
		      { name: "glyphDataFormat", type: "SHORT", value: 0 }
		    ], options);
		  }
		  var head_default = { parse: parseHeadTable, make: makeHeadTable };

		  // src/tables/hhea.mjs
		  function parseHheaTable(data, start) {
		    const hhea = {};
		    const p = new parse_default.Parser(data, start);
		    hhea.version = p.parseVersion();
		    hhea.ascender = p.parseShort();
		    hhea.descender = p.parseShort();
		    hhea.lineGap = p.parseShort();
		    hhea.advanceWidthMax = p.parseUShort();
		    hhea.minLeftSideBearing = p.parseShort();
		    hhea.minRightSideBearing = p.parseShort();
		    hhea.xMaxExtent = p.parseShort();
		    hhea.caretSlopeRise = p.parseShort();
		    hhea.caretSlopeRun = p.parseShort();
		    hhea.caretOffset = p.parseShort();
		    p.relativeOffset += 8;
		    hhea.metricDataFormat = p.parseShort();
		    hhea.numberOfHMetrics = p.parseUShort();
		    return hhea;
		  }
		  function makeHheaTable(options) {
		    return new table_default.Table("hhea", [
		      { name: "version", type: "FIXED", value: 65536 },
		      { name: "ascender", type: "FWORD", value: 0 },
		      { name: "descender", type: "FWORD", value: 0 },
		      { name: "lineGap", type: "FWORD", value: 0 },
		      { name: "advanceWidthMax", type: "UFWORD", value: 0 },
		      { name: "minLeftSideBearing", type: "FWORD", value: 0 },
		      { name: "minRightSideBearing", type: "FWORD", value: 0 },
		      { name: "xMaxExtent", type: "FWORD", value: 0 },
		      { name: "caretSlopeRise", type: "SHORT", value: 1 },
		      { name: "caretSlopeRun", type: "SHORT", value: 0 },
		      { name: "caretOffset", type: "SHORT", value: 0 },
		      { name: "reserved1", type: "SHORT", value: 0 },
		      { name: "reserved2", type: "SHORT", value: 0 },
		      { name: "reserved3", type: "SHORT", value: 0 },
		      { name: "reserved4", type: "SHORT", value: 0 },
		      { name: "metricDataFormat", type: "SHORT", value: 0 },
		      { name: "numberOfHMetrics", type: "USHORT", value: 0 }
		    ], options);
		  }
		  var hhea_default = { parse: parseHheaTable, make: makeHheaTable };

		  // src/tables/hmtx.mjs
		  function parseHmtxTableAll(data, start, numMetrics, numGlyphs, glyphs) {
		    let advanceWidth;
		    let leftSideBearing;
		    const p = new parse_default.Parser(data, start);
		    for (let i = 0; i < numGlyphs; i += 1) {
		      if (i < numMetrics) {
		        advanceWidth = p.parseUShort();
		        leftSideBearing = p.parseShort();
		      }
		      const glyph = glyphs.get(i);
		      glyph.advanceWidth = advanceWidth;
		      glyph.leftSideBearing = leftSideBearing;
		    }
		  }
		  function parseHmtxTableOnLowMemory(font, data, start, numMetrics, numGlyphs) {
		    font._hmtxTableData = {};
		    let advanceWidth;
		    let leftSideBearing;
		    const p = new parse_default.Parser(data, start);
		    for (let i = 0; i < numGlyphs; i += 1) {
		      if (i < numMetrics) {
		        advanceWidth = p.parseUShort();
		        leftSideBearing = p.parseShort();
		      }
		      font._hmtxTableData[i] = {
		        advanceWidth,
		        leftSideBearing
		      };
		    }
		  }
		  function parseHmtxTable(font, data, start, numMetrics, numGlyphs, glyphs, opt) {
		    if (opt.lowMemory)
		      parseHmtxTableOnLowMemory(font, data, start, numMetrics, numGlyphs);
		    else
		      parseHmtxTableAll(data, start, numMetrics, numGlyphs, glyphs);
		  }
		  function makeHmtxTable(glyphs) {
		    const t = new table_default.Table("hmtx", []);
		    for (let i = 0; i < glyphs.length; i += 1) {
		      const glyph = glyphs.get(i);
		      const advanceWidth = glyph.advanceWidth || 0;
		      const leftSideBearing = glyph.leftSideBearing || 0;
		      t.fields.push({ name: "advanceWidth_" + i, type: "USHORT", value: advanceWidth });
		      t.fields.push({ name: "leftSideBearing_" + i, type: "SHORT", value: leftSideBearing });
		    }
		    return t;
		  }
		  var hmtx_default = { parse: parseHmtxTable, make: makeHmtxTable };

		  // src/tables/ltag.mjs
		  function makeLtagTable(tags) {
		    const result = new table_default.Table("ltag", [
		      { name: "version", type: "ULONG", value: 1 },
		      { name: "flags", type: "ULONG", value: 0 },
		      { name: "numTags", type: "ULONG", value: tags.length }
		    ]);
		    let stringPool = "";
		    const stringPoolOffset = 12 + tags.length * 4;
		    for (let i = 0; i < tags.length; ++i) {
		      let pos = stringPool.indexOf(tags[i]);
		      if (pos < 0) {
		        pos = stringPool.length;
		        stringPool += tags[i];
		      }
		      result.fields.push({ name: "offset " + i, type: "USHORT", value: stringPoolOffset + pos });
		      result.fields.push({ name: "length " + i, type: "USHORT", value: tags[i].length });
		    }
		    result.fields.push({ name: "stringPool", type: "CHARARRAY", value: stringPool });
		    return result;
		  }
		  function parseLtagTable(data, start) {
		    const p = new parse_default.Parser(data, start);
		    const tableVersion = p.parseULong();
		    check_default.argument(tableVersion === 1, "Unsupported ltag table version.");
		    p.skip("uLong", 1);
		    const numTags = p.parseULong();
		    const tags = [];
		    for (let i = 0; i < numTags; i++) {
		      let tag = "";
		      const offset = start + p.parseUShort();
		      const length = p.parseUShort();
		      for (let j = offset; j < offset + length; ++j) {
		        tag += String.fromCharCode(data.getInt8(j));
		      }
		      tags.push(tag);
		    }
		    return tags;
		  }
		  var ltag_default = { make: makeLtagTable, parse: parseLtagTable };

		  // src/tables/maxp.mjs
		  function parseMaxpTable(data, start) {
		    const maxp = {};
		    const p = new parse_default.Parser(data, start);
		    maxp.version = p.parseVersion();
		    maxp.numGlyphs = p.parseUShort();
		    if (maxp.version === 1) {
		      maxp.maxPoints = p.parseUShort();
		      maxp.maxContours = p.parseUShort();
		      maxp.maxCompositePoints = p.parseUShort();
		      maxp.maxCompositeContours = p.parseUShort();
		      maxp.maxZones = p.parseUShort();
		      maxp.maxTwilightPoints = p.parseUShort();
		      maxp.maxStorage = p.parseUShort();
		      maxp.maxFunctionDefs = p.parseUShort();
		      maxp.maxInstructionDefs = p.parseUShort();
		      maxp.maxStackElements = p.parseUShort();
		      maxp.maxSizeOfInstructions = p.parseUShort();
		      maxp.maxComponentElements = p.parseUShort();
		      maxp.maxComponentDepth = p.parseUShort();
		    }
		    return maxp;
		  }
		  function makeMaxpTable(numGlyphs) {
		    return new table_default.Table("maxp", [
		      { name: "version", type: "FIXED", value: 20480 },
		      { name: "numGlyphs", type: "USHORT", value: numGlyphs }
		    ]);
		  }
		  var maxp_default = { parse: parseMaxpTable, make: makeMaxpTable };

		  // src/tables/os2.mjs
		  var unicodeRanges = [
		    { begin: 0, end: 127 },
		    // Basic Latin
		    { begin: 128, end: 255 },
		    // Latin-1 Supplement
		    { begin: 256, end: 383 },
		    // Latin Extended-A
		    { begin: 384, end: 591 },
		    // Latin Extended-B
		    { begin: 592, end: 687 },
		    // IPA Extensions
		    { begin: 688, end: 767 },
		    // Spacing Modifier Letters
		    { begin: 768, end: 879 },
		    // Combining Diacritical Marks
		    { begin: 880, end: 1023 },
		    // Greek and Coptic
		    { begin: 11392, end: 11519 },
		    // Coptic
		    { begin: 1024, end: 1279 },
		    // Cyrillic
		    { begin: 1328, end: 1423 },
		    // Armenian
		    { begin: 1424, end: 1535 },
		    // Hebrew
		    { begin: 42240, end: 42559 },
		    // Vai
		    { begin: 1536, end: 1791 },
		    // Arabic
		    { begin: 1984, end: 2047 },
		    // NKo
		    { begin: 2304, end: 2431 },
		    // Devanagari
		    { begin: 2432, end: 2559 },
		    // Bengali
		    { begin: 2560, end: 2687 },
		    // Gurmukhi
		    { begin: 2688, end: 2815 },
		    // Gujarati
		    { begin: 2816, end: 2943 },
		    // Oriya
		    { begin: 2944, end: 3071 },
		    // Tamil
		    { begin: 3072, end: 3199 },
		    // Telugu
		    { begin: 3200, end: 3327 },
		    // Kannada
		    { begin: 3328, end: 3455 },
		    // Malayalam
		    { begin: 3584, end: 3711 },
		    // Thai
		    { begin: 3712, end: 3839 },
		    // Lao
		    { begin: 4256, end: 4351 },
		    // Georgian
		    { begin: 6912, end: 7039 },
		    // Balinese
		    { begin: 4352, end: 4607 },
		    // Hangul Jamo
		    { begin: 7680, end: 7935 },
		    // Latin Extended Additional
		    { begin: 7936, end: 8191 },
		    // Greek Extended
		    { begin: 8192, end: 8303 },
		    // General Punctuation
		    { begin: 8304, end: 8351 },
		    // Superscripts And Subscripts
		    { begin: 8352, end: 8399 },
		    // Currency Symbol
		    { begin: 8400, end: 8447 },
		    // Combining Diacritical Marks For Symbols
		    { begin: 8448, end: 8527 },
		    // Letterlike Symbols
		    { begin: 8528, end: 8591 },
		    // Number Forms
		    { begin: 8592, end: 8703 },
		    // Arrows
		    { begin: 8704, end: 8959 },
		    // Mathematical Operators
		    { begin: 8960, end: 9215 },
		    // Miscellaneous Technical
		    { begin: 9216, end: 9279 },
		    // Control Pictures
		    { begin: 9280, end: 9311 },
		    // Optical Character Recognition
		    { begin: 9312, end: 9471 },
		    // Enclosed Alphanumerics
		    { begin: 9472, end: 9599 },
		    // Box Drawing
		    { begin: 9600, end: 9631 },
		    // Block Elements
		    { begin: 9632, end: 9727 },
		    // Geometric Shapes
		    { begin: 9728, end: 9983 },
		    // Miscellaneous Symbols
		    { begin: 9984, end: 10175 },
		    // Dingbats
		    { begin: 12288, end: 12351 },
		    // CJK Symbols And Punctuation
		    { begin: 12352, end: 12447 },
		    // Hiragana
		    { begin: 12448, end: 12543 },
		    // Katakana
		    { begin: 12544, end: 12591 },
		    // Bopomofo
		    { begin: 12592, end: 12687 },
		    // Hangul Compatibility Jamo
		    { begin: 43072, end: 43135 },
		    // Phags-pa
		    { begin: 12800, end: 13055 },
		    // Enclosed CJK Letters And Months
		    { begin: 13056, end: 13311 },
		    // CJK Compatibility
		    { begin: 44032, end: 55215 },
		    // Hangul Syllables
		    { begin: 55296, end: 57343 },
		    // Non-Plane 0 *
		    { begin: 67840, end: 67871 },
		    // Phoenicia
		    { begin: 19968, end: 40959 },
		    // CJK Unified Ideographs
		    { begin: 57344, end: 63743 },
		    // Private Use Area (plane 0)
		    { begin: 12736, end: 12783 },
		    // CJK Strokes
		    { begin: 64256, end: 64335 },
		    // Alphabetic Presentation Forms
		    { begin: 64336, end: 65023 },
		    // Arabic Presentation Forms-A
		    { begin: 65056, end: 65071 },
		    // Combining Half Marks
		    { begin: 65040, end: 65055 },
		    // Vertical Forms
		    { begin: 65104, end: 65135 },
		    // Small Form Variants
		    { begin: 65136, end: 65279 },
		    // Arabic Presentation Forms-B
		    { begin: 65280, end: 65519 },
		    // Halfwidth And Fullwidth Forms
		    { begin: 65520, end: 65535 },
		    // Specials
		    { begin: 3840, end: 4095 },
		    // Tibetan
		    { begin: 1792, end: 1871 },
		    // Syriac
		    { begin: 1920, end: 1983 },
		    // Thaana
		    { begin: 3456, end: 3583 },
		    // Sinhala
		    { begin: 4096, end: 4255 },
		    // Myanmar
		    { begin: 4608, end: 4991 },
		    // Ethiopic
		    { begin: 5024, end: 5119 },
		    // Cherokee
		    { begin: 5120, end: 5759 },
		    // Unified Canadian Aboriginal Syllabics
		    { begin: 5760, end: 5791 },
		    // Ogham
		    { begin: 5792, end: 5887 },
		    // Runic
		    { begin: 6016, end: 6143 },
		    // Khmer
		    { begin: 6144, end: 6319 },
		    // Mongolian
		    { begin: 10240, end: 10495 },
		    // Braille Patterns
		    { begin: 40960, end: 42127 },
		    // Yi Syllables
		    { begin: 5888, end: 5919 },
		    // Tagalog
		    { begin: 66304, end: 66351 },
		    // Old Italic
		    { begin: 66352, end: 66383 },
		    // Gothic
		    { begin: 66560, end: 66639 },
		    // Deseret
		    { begin: 118784, end: 119039 },
		    // Byzantine Musical Symbols
		    { begin: 119808, end: 120831 },
		    // Mathematical Alphanumeric Symbols
		    { begin: 1044480, end: 1048573 },
		    // Private Use (plane 15)
		    { begin: 65024, end: 65039 },
		    // Variation Selectors
		    { begin: 917504, end: 917631 },
		    // Tags
		    { begin: 6400, end: 6479 },
		    // Limbu
		    { begin: 6480, end: 6527 },
		    // Tai Le
		    { begin: 6528, end: 6623 },
		    // New Tai Lue
		    { begin: 6656, end: 6687 },
		    // Buginese
		    { begin: 11264, end: 11359 },
		    // Glagolitic
		    { begin: 11568, end: 11647 },
		    // Tifinagh
		    { begin: 19904, end: 19967 },
		    // Yijing Hexagram Symbols
		    { begin: 43008, end: 43055 },
		    // Syloti Nagri
		    { begin: 65536, end: 65663 },
		    // Linear B Syllabary
		    { begin: 65856, end: 65935 },
		    // Ancient Greek Numbers
		    { begin: 66432, end: 66463 },
		    // Ugaritic
		    { begin: 66464, end: 66527 },
		    // Old Persian
		    { begin: 66640, end: 66687 },
		    // Shavian
		    { begin: 66688, end: 66735 },
		    // Osmanya
		    { begin: 67584, end: 67647 },
		    // Cypriot Syllabary
		    { begin: 68096, end: 68191 },
		    // Kharoshthi
		    { begin: 119552, end: 119647 },
		    // Tai Xuan Jing Symbols
		    { begin: 73728, end: 74751 },
		    // Cuneiform
		    { begin: 119648, end: 119679 },
		    // Counting Rod Numerals
		    { begin: 7040, end: 7103 },
		    // Sundanese
		    { begin: 7168, end: 7247 },
		    // Lepcha
		    { begin: 7248, end: 7295 },
		    // Ol Chiki
		    { begin: 43136, end: 43231 },
		    // Saurashtra
		    { begin: 43264, end: 43311 },
		    // Kayah Li
		    { begin: 43312, end: 43359 },
		    // Rejang
		    { begin: 43520, end: 43615 },
		    // Cham
		    { begin: 65936, end: 65999 },
		    // Ancient Symbols
		    { begin: 66e3, end: 66047 },
		    // Phaistos Disc
		    { begin: 66208, end: 66271 },
		    // Carian
		    { begin: 127024, end: 127135 }
		    // Domino Tiles
		  ];
		  function getUnicodeRange(unicode) {
		    for (let i = 0; i < unicodeRanges.length; i += 1) {
		      const range = unicodeRanges[i];
		      if (unicode >= range.begin && unicode < range.end) {
		        return i;
		      }
		    }
		    return -1;
		  }
		  function parseOS2Table(data, start) {
		    const os2 = {};
		    const p = new parse_default.Parser(data, start);
		    os2.version = p.parseUShort();
		    os2.xAvgCharWidth = p.parseShort();
		    os2.usWeightClass = p.parseUShort();
		    os2.usWidthClass = p.parseUShort();
		    os2.fsType = p.parseUShort();
		    os2.ySubscriptXSize = p.parseShort();
		    os2.ySubscriptYSize = p.parseShort();
		    os2.ySubscriptXOffset = p.parseShort();
		    os2.ySubscriptYOffset = p.parseShort();
		    os2.ySuperscriptXSize = p.parseShort();
		    os2.ySuperscriptYSize = p.parseShort();
		    os2.ySuperscriptXOffset = p.parseShort();
		    os2.ySuperscriptYOffset = p.parseShort();
		    os2.yStrikeoutSize = p.parseShort();
		    os2.yStrikeoutPosition = p.parseShort();
		    os2.sFamilyClass = p.parseShort();
		    os2.panose = [];
		    for (let i = 0; i < 10; i++) {
		      os2.panose[i] = p.parseByte();
		    }
		    os2.ulUnicodeRange1 = p.parseULong();
		    os2.ulUnicodeRange2 = p.parseULong();
		    os2.ulUnicodeRange3 = p.parseULong();
		    os2.ulUnicodeRange4 = p.parseULong();
		    os2.achVendID = String.fromCharCode(p.parseByte(), p.parseByte(), p.parseByte(), p.parseByte());
		    os2.fsSelection = p.parseUShort();
		    os2.usFirstCharIndex = p.parseUShort();
		    os2.usLastCharIndex = p.parseUShort();
		    os2.sTypoAscender = p.parseShort();
		    os2.sTypoDescender = p.parseShort();
		    os2.sTypoLineGap = p.parseShort();
		    os2.usWinAscent = p.parseUShort();
		    os2.usWinDescent = p.parseUShort();
		    if (os2.version >= 1) {
		      os2.ulCodePageRange1 = p.parseULong();
		      os2.ulCodePageRange2 = p.parseULong();
		    }
		    if (os2.version >= 2) {
		      os2.sxHeight = p.parseShort();
		      os2.sCapHeight = p.parseShort();
		      os2.usDefaultChar = p.parseUShort();
		      os2.usBreakChar = p.parseUShort();
		      os2.usMaxContent = p.parseUShort();
		    }
		    return os2;
		  }
		  function makeOS2Table(options) {
		    return new table_default.Table("OS/2", [
		      { name: "version", type: "USHORT", value: 3 },
		      { name: "xAvgCharWidth", type: "SHORT", value: 0 },
		      { name: "usWeightClass", type: "USHORT", value: 0 },
		      { name: "usWidthClass", type: "USHORT", value: 0 },
		      { name: "fsType", type: "USHORT", value: 0 },
		      { name: "ySubscriptXSize", type: "SHORT", value: 650 },
		      { name: "ySubscriptYSize", type: "SHORT", value: 699 },
		      { name: "ySubscriptXOffset", type: "SHORT", value: 0 },
		      { name: "ySubscriptYOffset", type: "SHORT", value: 140 },
		      { name: "ySuperscriptXSize", type: "SHORT", value: 650 },
		      { name: "ySuperscriptYSize", type: "SHORT", value: 699 },
		      { name: "ySuperscriptXOffset", type: "SHORT", value: 0 },
		      { name: "ySuperscriptYOffset", type: "SHORT", value: 479 },
		      { name: "yStrikeoutSize", type: "SHORT", value: 49 },
		      { name: "yStrikeoutPosition", type: "SHORT", value: 258 },
		      { name: "sFamilyClass", type: "SHORT", value: 0 },
		      { name: "bFamilyType", type: "BYTE", value: 0 },
		      { name: "bSerifStyle", type: "BYTE", value: 0 },
		      { name: "bWeight", type: "BYTE", value: 0 },
		      { name: "bProportion", type: "BYTE", value: 0 },
		      { name: "bContrast", type: "BYTE", value: 0 },
		      { name: "bStrokeVariation", type: "BYTE", value: 0 },
		      { name: "bArmStyle", type: "BYTE", value: 0 },
		      { name: "bLetterform", type: "BYTE", value: 0 },
		      { name: "bMidline", type: "BYTE", value: 0 },
		      { name: "bXHeight", type: "BYTE", value: 0 },
		      { name: "ulUnicodeRange1", type: "ULONG", value: 0 },
		      { name: "ulUnicodeRange2", type: "ULONG", value: 0 },
		      { name: "ulUnicodeRange3", type: "ULONG", value: 0 },
		      { name: "ulUnicodeRange4", type: "ULONG", value: 0 },
		      { name: "achVendID", type: "CHARARRAY", value: "XXXX" },
		      { name: "fsSelection", type: "USHORT", value: 0 },
		      { name: "usFirstCharIndex", type: "USHORT", value: 0 },
		      { name: "usLastCharIndex", type: "USHORT", value: 0 },
		      { name: "sTypoAscender", type: "SHORT", value: 0 },
		      { name: "sTypoDescender", type: "SHORT", value: 0 },
		      { name: "sTypoLineGap", type: "SHORT", value: 0 },
		      { name: "usWinAscent", type: "USHORT", value: 0 },
		      { name: "usWinDescent", type: "USHORT", value: 0 },
		      { name: "ulCodePageRange1", type: "ULONG", value: 0 },
		      { name: "ulCodePageRange2", type: "ULONG", value: 0 },
		      { name: "sxHeight", type: "SHORT", value: 0 },
		      { name: "sCapHeight", type: "SHORT", value: 0 },
		      { name: "usDefaultChar", type: "USHORT", value: 0 },
		      { name: "usBreakChar", type: "USHORT", value: 0 },
		      { name: "usMaxContext", type: "USHORT", value: 0 }
		    ], options);
		  }
		  var os2_default = { parse: parseOS2Table, make: makeOS2Table, unicodeRanges, getUnicodeRange };

		  // src/tables/post.mjs
		  function parsePostTable(data, start) {
		    const post = {};
		    const p = new parse_default.Parser(data, start);
		    post.version = p.parseVersion();
		    post.italicAngle = p.parseFixed();
		    post.underlinePosition = p.parseShort();
		    post.underlineThickness = p.parseShort();
		    post.isFixedPitch = p.parseULong();
		    post.minMemType42 = p.parseULong();
		    post.maxMemType42 = p.parseULong();
		    post.minMemType1 = p.parseULong();
		    post.maxMemType1 = p.parseULong();
		    switch (post.version) {
		      case 1:
		        post.names = standardNames.slice();
		        break;
		      case 2:
		        post.numberOfGlyphs = p.parseUShort();
		        post.glyphNameIndex = new Array(post.numberOfGlyphs);
		        for (let i = 0; i < post.numberOfGlyphs; i++) {
		          post.glyphNameIndex[i] = p.parseUShort();
		        }
		        post.names = [];
		        for (let i = 0; i < post.numberOfGlyphs; i++) {
		          if (post.glyphNameIndex[i] >= standardNames.length) {
		            const nameLength = p.parseChar();
		            post.names.push(p.parseString(nameLength));
		          }
		        }
		        break;
		      case 2.5:
		        post.numberOfGlyphs = p.parseUShort();
		        post.offset = new Array(post.numberOfGlyphs);
		        for (let i = 0; i < post.numberOfGlyphs; i++) {
		          post.offset[i] = p.parseChar();
		        }
		        break;
		    }
		    return post;
		  }
		  function makePostTable(font) {
		    const {
		      italicAngle = Math.round((font.italicAngle || 0) * 65536),
		      underlinePosition = 0,
		      underlineThickness = 0,
		      isFixedPitch = 0,
		      minMemType42 = 0,
		      maxMemType42 = 0,
		      minMemType1 = 0,
		      maxMemType1 = 0
		    } = font.tables.post || {};
		    return new table_default.Table("post", [
		      { name: "version", type: "FIXED", value: 196608 },
		      { name: "italicAngle", type: "FIXED", value: italicAngle },
		      { name: "underlinePosition", type: "FWORD", value: underlinePosition },
		      { name: "underlineThickness", type: "FWORD", value: underlineThickness },
		      { name: "isFixedPitch", type: "ULONG", value: isFixedPitch },
		      { name: "minMemType42", type: "ULONG", value: minMemType42 },
		      { name: "maxMemType42", type: "ULONG", value: maxMemType42 },
		      { name: "minMemType1", type: "ULONG", value: minMemType1 },
		      { name: "maxMemType1", type: "ULONG", value: maxMemType1 }
		    ]);
		  }
		  var post_default = { parse: parsePostTable, make: makePostTable };

		  // src/tables/gsub.mjs
		  var subtableParsers = new Array(9);
		  subtableParsers[1] = function parseLookup1() {
		    const start = this.offset + this.relativeOffset;
		    const substFormat = this.parseUShort();
		    if (substFormat === 1) {
		      return {
		        substFormat: 1,
		        coverage: this.parsePointer(Parser.coverage),
		        deltaGlyphId: this.parseShort()
		      };
		    } else if (substFormat === 2) {
		      return {
		        substFormat: 2,
		        coverage: this.parsePointer(Parser.coverage),
		        substitute: this.parseOffset16List()
		      };
		    }
		    check_default.assert(false, "0x" + start.toString(16) + ": lookup type 1 format must be 1 or 2.");
		  };
		  subtableParsers[2] = function parseLookup2() {
		    const substFormat = this.parseUShort();
		    check_default.argument(substFormat === 1, "GSUB Multiple Substitution Subtable identifier-format must be 1");
		    return {
		      substFormat,
		      coverage: this.parsePointer(Parser.coverage),
		      sequences: this.parseListOfLists()
		    };
		  };
		  subtableParsers[3] = function parseLookup3() {
		    const substFormat = this.parseUShort();
		    check_default.argument(substFormat === 1, "GSUB Alternate Substitution Subtable identifier-format must be 1");
		    return {
		      substFormat,
		      coverage: this.parsePointer(Parser.coverage),
		      alternateSets: this.parseListOfLists()
		    };
		  };
		  subtableParsers[4] = function parseLookup4() {
		    const substFormat = this.parseUShort();
		    check_default.argument(substFormat === 1, "GSUB ligature table identifier-format must be 1");
		    return {
		      substFormat,
		      coverage: this.parsePointer(Parser.coverage),
		      ligatureSets: this.parseListOfLists(function() {
		        return {
		          ligGlyph: this.parseUShort(),
		          components: this.parseUShortList(this.parseUShort() - 1)
		        };
		      })
		    };
		  };
		  var lookupRecordDesc = {
		    sequenceIndex: Parser.uShort,
		    lookupListIndex: Parser.uShort
		  };
		  subtableParsers[5] = function parseLookup5() {
		    const start = this.offset + this.relativeOffset;
		    const substFormat = this.parseUShort();
		    if (substFormat === 1) {
		      return {
		        substFormat,
		        coverage: this.parsePointer(Parser.coverage),
		        ruleSets: this.parseListOfLists(function() {
		          const glyphCount = this.parseUShort();
		          const substCount = this.parseUShort();
		          return {
		            input: this.parseUShortList(glyphCount - 1),
		            lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
		          };
		        })
		      };
		    } else if (substFormat === 2) {
		      return {
		        substFormat,
		        coverage: this.parsePointer(Parser.coverage),
		        classDef: this.parsePointer(Parser.classDef),
		        classSets: this.parseListOfLists(function() {
		          const glyphCount = this.parseUShort();
		          const substCount = this.parseUShort();
		          return {
		            classes: this.parseUShortList(glyphCount - 1),
		            lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
		          };
		        })
		      };
		    } else if (substFormat === 3) {
		      const glyphCount = this.parseUShort();
		      const substCount = this.parseUShort();
		      return {
		        substFormat,
		        coverages: this.parseList(glyphCount, Parser.pointer(Parser.coverage)),
		        lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
		      };
		    }
		    check_default.assert(false, "0x" + start.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
		  };
		  subtableParsers[6] = function parseLookup6() {
		    const start = this.offset + this.relativeOffset;
		    const substFormat = this.parseUShort();
		    if (substFormat === 1) {
		      return {
		        substFormat: 1,
		        coverage: this.parsePointer(Parser.coverage),
		        chainRuleSets: this.parseListOfLists(function() {
		          return {
		            backtrack: this.parseUShortList(),
		            input: this.parseUShortList(this.parseShort() - 1),
		            lookahead: this.parseUShortList(),
		            lookupRecords: this.parseRecordList(lookupRecordDesc)
		          };
		        })
		      };
		    } else if (substFormat === 2) {
		      return {
		        substFormat: 2,
		        coverage: this.parsePointer(Parser.coverage),
		        backtrackClassDef: this.parsePointer(Parser.classDef),
		        inputClassDef: this.parsePointer(Parser.classDef),
		        lookaheadClassDef: this.parsePointer(Parser.classDef),
		        chainClassSet: this.parseListOfLists(function() {
		          return {
		            backtrack: this.parseUShortList(),
		            input: this.parseUShortList(this.parseShort() - 1),
		            lookahead: this.parseUShortList(),
		            lookupRecords: this.parseRecordList(lookupRecordDesc)
		          };
		        })
		      };
		    } else if (substFormat === 3) {
		      return {
		        substFormat: 3,
		        backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
		        inputCoverage: this.parseList(Parser.pointer(Parser.coverage)),
		        lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
		        lookupRecords: this.parseRecordList(lookupRecordDesc)
		      };
		    }
		    check_default.assert(false, "0x" + start.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
		  };
		  subtableParsers[7] = function parseLookup7() {
		    const substFormat = this.parseUShort();
		    check_default.argument(substFormat === 1, "GSUB Extension Substitution subtable identifier-format must be 1");
		    const extensionLookupType = this.parseUShort();
		    const extensionParser = new Parser(this.data, this.offset + this.parseULong());
		    return {
		      substFormat: 1,
		      lookupType: extensionLookupType,
		      extension: subtableParsers[extensionLookupType].call(extensionParser)
		    };
		  };
		  subtableParsers[8] = function parseLookup8() {
		    const substFormat = this.parseUShort();
		    check_default.argument(substFormat === 1, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1");
		    return {
		      substFormat,
		      coverage: this.parsePointer(Parser.coverage),
		      backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
		      lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
		      substitutes: this.parseUShortList()
		    };
		  };
		  function parseGsubTable(data, start) {
		    start = start || 0;
		    const p = new Parser(data, start);
		    const tableVersion = p.parseVersion(1);
		    check_default.argument(tableVersion === 1 || tableVersion === 1.1, "Unsupported GSUB table version.");
		    if (tableVersion === 1) {
		      return {
		        version: tableVersion,
		        scripts: p.parseScriptList(),
		        features: p.parseFeatureList(),
		        lookups: p.parseLookupList(subtableParsers)
		      };
		    } else {
		      return {
		        version: tableVersion,
		        scripts: p.parseScriptList(),
		        features: p.parseFeatureList(),
		        lookups: p.parseLookupList(subtableParsers),
		        variations: p.parseFeatureVariationsList()
		      };
		    }
		  }
		  var subtableMakers = new Array(9);
		  subtableMakers[1] = function makeLookup1(subtable) {
		    if (subtable.substFormat === 1) {
		      return new table_default.Table("substitutionTable", [
		        { name: "substFormat", type: "USHORT", value: 1 },
		        { name: "coverage", type: "TABLE", value: new table_default.Coverage(subtable.coverage) },
		        { name: "deltaGlyphID", type: "SHORT", value: subtable.deltaGlyphId }
		      ]);
		    } else if (subtable.substFormat === 2) {
		      return new table_default.Table("substitutionTable", [
		        { name: "substFormat", type: "USHORT", value: 2 },
		        { name: "coverage", type: "TABLE", value: new table_default.Coverage(subtable.coverage) }
		      ].concat(table_default.ushortList("substitute", subtable.substitute)));
		    }
		    check_default.fail("Lookup type 1 substFormat must be 1 or 2.");
		  };
		  subtableMakers[2] = function makeLookup2(subtable) {
		    check_default.assert(subtable.substFormat === 1, "Lookup type 2 substFormat must be 1.");
		    return new table_default.Table("substitutionTable", [
		      { name: "substFormat", type: "USHORT", value: 1 },
		      { name: "coverage", type: "TABLE", value: new table_default.Coverage(subtable.coverage) }
		    ].concat(table_default.tableList("seqSet", subtable.sequences, function(sequenceSet) {
		      return new table_default.Table("sequenceSetTable", table_default.ushortList("sequence", sequenceSet));
		    })));
		  };
		  subtableMakers[3] = function makeLookup3(subtable) {
		    check_default.assert(subtable.substFormat === 1, "Lookup type 3 substFormat must be 1.");
		    return new table_default.Table("substitutionTable", [
		      { name: "substFormat", type: "USHORT", value: 1 },
		      { name: "coverage", type: "TABLE", value: new table_default.Coverage(subtable.coverage) }
		    ].concat(table_default.tableList("altSet", subtable.alternateSets, function(alternateSet) {
		      return new table_default.Table("alternateSetTable", table_default.ushortList("alternate", alternateSet));
		    })));
		  };
		  subtableMakers[4] = function makeLookup4(subtable) {
		    check_default.assert(subtable.substFormat === 1, "Lookup type 4 substFormat must be 1.");
		    return new table_default.Table("substitutionTable", [
		      { name: "substFormat", type: "USHORT", value: 1 },
		      { name: "coverage", type: "TABLE", value: new table_default.Coverage(subtable.coverage) }
		    ].concat(table_default.tableList("ligSet", subtable.ligatureSets, function(ligatureSet) {
		      return new table_default.Table("ligatureSetTable", table_default.tableList("ligature", ligatureSet, function(ligature) {
		        return new table_default.Table(
		          "ligatureTable",
		          [{ name: "ligGlyph", type: "USHORT", value: ligature.ligGlyph }].concat(table_default.ushortList("component", ligature.components, ligature.components.length + 1))
		        );
		      }));
		    })));
		  };
		  subtableMakers[5] = function makeLookup5(subtable) {
		    if (subtable.substFormat === 1) {
		      return new table_default.Table("contextualSubstitutionTable", [
		        { name: "substFormat", type: "USHORT", value: subtable.substFormat },
		        { name: "coverage", type: "TABLE", value: new table_default.Coverage(subtable.coverage) }
		      ].concat(table_default.tableList("sequenceRuleSet", subtable.ruleSets, function(sequenceRuleSet) {
		        if (!sequenceRuleSet) {
		          return new table_default.Table("NULL", null);
		        }
		        return new table_default.Table("sequenceRuleSetTable", table_default.tableList("sequenceRule", sequenceRuleSet, function(sequenceRule) {
		          let tableData = table_default.ushortList("seqLookup", [], sequenceRule.lookupRecords.length).concat(table_default.ushortList("inputSequence", sequenceRule.input, sequenceRule.input.length + 1));
		          [tableData[0], tableData[1]] = [tableData[1], tableData[0]];
		          for (let i = 0; i < sequenceRule.lookupRecords.length; i++) {
		            const record = sequenceRule.lookupRecords[i];
		            tableData = tableData.concat({ name: "sequenceIndex" + i, type: "USHORT", value: record.sequenceIndex }).concat({ name: "lookupListIndex" + i, type: "USHORT", value: record.lookupListIndex });
		          }
		          return new table_default.Table("sequenceRuleTable", tableData);
		        }));
		      })));
		    } else if (subtable.substFormat === 2) {
		      return new table_default.Table("contextualSubstitutionTable", [
		        { name: "substFormat", type: "USHORT", value: subtable.substFormat },
		        { name: "coverage", type: "TABLE", value: new table_default.Coverage(subtable.coverage) },
		        { name: "classDef", type: "TABLE", value: new table_default.ClassDef(subtable.classDef) }
		      ].concat(table_default.tableList("classSeqRuleSet", subtable.classSets, function(classSeqRuleSet) {
		        if (!classSeqRuleSet) {
		          return new table_default.Table("NULL", null);
		        }
		        return new table_default.Table("classSeqRuleSetTable", table_default.tableList("classSeqRule", classSeqRuleSet, function(classSeqRule) {
		          let tableData = table_default.ushortList("classes", classSeqRule.classes, classSeqRule.classes.length + 1).concat(table_default.ushortList("seqLookupCount", [], classSeqRule.lookupRecords.length));
		          for (let i = 0; i < classSeqRule.lookupRecords.length; i++) {
		            const record = classSeqRule.lookupRecords[i];
		            tableData = tableData.concat({ name: "sequenceIndex" + i, type: "USHORT", value: record.sequenceIndex }).concat({ name: "lookupListIndex" + i, type: "USHORT", value: record.lookupListIndex });
		          }
		          return new table_default.Table("classSeqRuleTable", tableData);
		        }));
		      })));
		    } else if (subtable.substFormat === 3) {
		      let tableData = [
		        { name: "substFormat", type: "USHORT", value: subtable.substFormat }
		      ];
		      tableData.push({ name: "inputGlyphCount", type: "USHORT", value: subtable.coverages.length });
		      tableData.push({ name: "substitutionCount", type: "USHORT", value: subtable.lookupRecords.length });
		      for (let i = 0; i < subtable.coverages.length; i++) {
		        const coverage = subtable.coverages[i];
		        tableData.push({ name: "inputCoverage" + i, type: "TABLE", value: new table_default.Coverage(coverage) });
		      }
		      for (let i = 0; i < subtable.lookupRecords.length; i++) {
		        const record = subtable.lookupRecords[i];
		        tableData = tableData.concat({ name: "sequenceIndex" + i, type: "USHORT", value: record.sequenceIndex }).concat({ name: "lookupListIndex" + i, type: "USHORT", value: record.lookupListIndex });
		      }
		      let returnTable = new table_default.Table("contextualSubstitutionTable", tableData);
		      return returnTable;
		    }
		    check_default.assert(false, "lookup type 5 format must be 1, 2 or 3.");
		  };
		  subtableMakers[6] = function makeLookup6(subtable) {
		    if (subtable.substFormat === 1) {
		      let returnTable = new table_default.Table("chainContextTable", [
		        { name: "substFormat", type: "USHORT", value: subtable.substFormat },
		        { name: "coverage", type: "TABLE", value: new table_default.Coverage(subtable.coverage) }
		      ].concat(table_default.tableList("chainRuleSet", subtable.chainRuleSets, function(chainRuleSet) {
		        return new table_default.Table("chainRuleSetTable", table_default.tableList("chainRule", chainRuleSet, function(chainRule) {
		          let tableData = table_default.ushortList("backtrackGlyph", chainRule.backtrack, chainRule.backtrack.length).concat(table_default.ushortList("inputGlyph", chainRule.input, chainRule.input.length + 1)).concat(table_default.ushortList("lookaheadGlyph", chainRule.lookahead, chainRule.lookahead.length)).concat(table_default.ushortList("substitution", [], chainRule.lookupRecords.length));
		          for (let i = 0; i < chainRule.lookupRecords.length; i++) {
		            const record = chainRule.lookupRecords[i];
		            tableData = tableData.concat({ name: "sequenceIndex" + i, type: "USHORT", value: record.sequenceIndex }).concat({ name: "lookupListIndex" + i, type: "USHORT", value: record.lookupListIndex });
		          }
		          return new table_default.Table("chainRuleTable", tableData);
		        }));
		      })));
		      return returnTable;
		    } else if (subtable.substFormat === 2) {
		      check_default.assert(false, "lookup type 6 format 2 is not yet supported.");
		    } else if (subtable.substFormat === 3) {
		      let tableData = [
		        { name: "substFormat", type: "USHORT", value: subtable.substFormat }
		      ];
		      tableData.push({ name: "backtrackGlyphCount", type: "USHORT", value: subtable.backtrackCoverage.length });
		      for (let i = 0; i < subtable.backtrackCoverage.length; i++) {
		        const coverage = subtable.backtrackCoverage[i];
		        tableData.push({ name: "backtrackCoverage" + i, type: "TABLE", value: new table_default.Coverage(coverage) });
		      }
		      tableData.push({ name: "inputGlyphCount", type: "USHORT", value: subtable.inputCoverage.length });
		      for (let i = 0; i < subtable.inputCoverage.length; i++) {
		        const coverage = subtable.inputCoverage[i];
		        tableData.push({ name: "inputCoverage" + i, type: "TABLE", value: new table_default.Coverage(coverage) });
		      }
		      tableData.push({ name: "lookaheadGlyphCount", type: "USHORT", value: subtable.lookaheadCoverage.length });
		      for (let i = 0; i < subtable.lookaheadCoverage.length; i++) {
		        const coverage = subtable.lookaheadCoverage[i];
		        tableData.push({ name: "lookaheadCoverage" + i, type: "TABLE", value: new table_default.Coverage(coverage) });
		      }
		      tableData.push({ name: "substitutionCount", type: "USHORT", value: subtable.lookupRecords.length });
		      for (let i = 0; i < subtable.lookupRecords.length; i++) {
		        const record = subtable.lookupRecords[i];
		        tableData = tableData.concat({ name: "sequenceIndex" + i, type: "USHORT", value: record.sequenceIndex }).concat({ name: "lookupListIndex" + i, type: "USHORT", value: record.lookupListIndex });
		      }
		      let returnTable = new table_default.Table("chainContextTable", tableData);
		      return returnTable;
		    }
		    check_default.assert(false, "lookup type 6 format must be 1, 2 or 3.");
		  };
		  function makeGsubTable(gsub) {
		    return new table_default.Table("GSUB", [
		      { name: "version", type: "ULONG", value: 65536 },
		      { name: "scripts", type: "TABLE", value: new table_default.ScriptList(gsub.scripts) },
		      { name: "features", type: "TABLE", value: new table_default.FeatureList(gsub.features) },
		      { name: "lookups", type: "TABLE", value: new table_default.LookupList(gsub.lookups, subtableMakers) }
		    ]);
		  }
		  var gsub_default = { parse: parseGsubTable, make: makeGsubTable };

		  // src/tables/meta.mjs
		  function parseMetaTable(data, start) {
		    const p = new parse_default.Parser(data, start);
		    const tableVersion = p.parseULong();
		    check_default.argument(tableVersion === 1, "Unsupported META table version.");
		    p.parseULong();
		    p.parseULong();
		    const numDataMaps = p.parseULong();
		    const tags = {};
		    for (let i = 0; i < numDataMaps; i++) {
		      const tag = p.parseTag();
		      const dataOffset = p.parseULong();
		      const dataLength = p.parseULong();
		      if (tag === "appl" || tag === "bild")
		        continue;
		      const text = decode.UTF8(data, start + dataOffset, dataLength);
		      tags[tag] = text;
		    }
		    return tags;
		  }
		  function makeMetaTable(tags) {
		    const numTags = Object.keys(tags).length;
		    let stringPool = "";
		    const stringPoolOffset = 16 + numTags * 12;
		    const result = new table_default.Table("meta", [
		      { name: "version", type: "ULONG", value: 1 },
		      { name: "flags", type: "ULONG", value: 0 },
		      { name: "offset", type: "ULONG", value: stringPoolOffset },
		      { name: "numTags", type: "ULONG", value: numTags }
		    ]);
		    for (let tag in tags) {
		      const pos = stringPool.length;
		      stringPool += tags[tag];
		      result.fields.push({ name: "tag " + tag, type: "TAG", value: tag });
		      result.fields.push({ name: "offset " + tag, type: "ULONG", value: stringPoolOffset + pos });
		      result.fields.push({ name: "length " + tag, type: "ULONG", value: tags[tag].length });
		    }
		    result.fields.push({ name: "stringPool", type: "CHARARRAY", value: stringPool });
		    return result;
		  }
		  var meta_default = { parse: parseMetaTable, make: makeMetaTable };

		  // src/tables/colr.mjs
		  function parseColrTable(data, start) {
		    const p = new Parser(data, start);
		    const version = p.parseUShort();
		    if (version !== 0) {
		      console.warn("Only COLRv0 is currently fully supported. A subset of color glyphs might be available in this font if provided in the v0 format.");
		    }
		    const numBaseGlyphRecords = p.parseUShort();
		    const baseGlyphRecordsOffset = p.parseOffset32();
		    const layerRecordsOffset = p.parseOffset32();
		    const numLayerRecords = p.parseUShort();
		    p.relativeOffset = baseGlyphRecordsOffset;
		    const baseGlyphRecords = p.parseRecordList(numBaseGlyphRecords, {
		      glyphID: Parser.uShort,
		      firstLayerIndex: Parser.uShort,
		      numLayers: Parser.uShort
		    });
		    p.relativeOffset = layerRecordsOffset;
		    const layerRecords = p.parseRecordList(numLayerRecords, {
		      glyphID: Parser.uShort,
		      paletteIndex: Parser.uShort
		    });
		    return {
		      version,
		      baseGlyphRecords,
		      layerRecords
		    };
		  }
		  function makeColrTable({ version = 0, baseGlyphRecords = [], layerRecords = [] }) {
		    check_default.argument(version === 0, "Only COLRv0 supported.");
		    const baseGlyphRecordsOffset = 14;
		    const layerRecordsOffset = baseGlyphRecordsOffset + baseGlyphRecords.length * 6;
		    return new table_default.Table("COLR", [
		      { name: "version", type: "USHORT", value: version },
		      { name: "numBaseGlyphRecords", type: "USHORT", value: baseGlyphRecords.length },
		      { name: "baseGlyphRecordsOffset", type: "ULONG", value: baseGlyphRecordsOffset },
		      { name: "layerRecordsOffset", type: "ULONG", value: layerRecordsOffset },
		      { name: "numLayerRecords", type: "USHORT", value: layerRecords.length },
		      ...baseGlyphRecords.map((glyph, i) => [
		        { name: "glyphID_" + i, type: "USHORT", value: glyph.glyphID },
		        { name: "firstLayerIndex_" + i, type: "USHORT", value: glyph.firstLayerIndex },
		        { name: "numLayers_" + i, type: "USHORT", value: glyph.numLayers }
		      ]).flat(),
		      ...layerRecords.map((layer, i) => [
		        { name: "LayerGlyphID_" + i, type: "USHORT", value: layer.glyphID },
		        { name: "paletteIndex_" + i, type: "USHORT", value: layer.paletteIndex }
		      ]).flat()
		    ]);
		  }
		  var colr_default = { parse: parseColrTable, make: makeColrTable };

		  // src/tables/fvar.mjs
		  function makeFvarAxis(n, axis) {
		    return [
		      { name: "tag_" + n, type: "TAG", value: axis.tag },
		      { name: "minValue_" + n, type: "FIXED", value: axis.minValue << 16 },
		      { name: "defaultValue_" + n, type: "FIXED", value: axis.defaultValue << 16 },
		      { name: "maxValue_" + n, type: "FIXED", value: axis.maxValue << 16 },
		      { name: "flags_" + n, type: "USHORT", value: 0 },
		      { name: "nameID_" + n, type: "USHORT", value: axis.axisNameID }
		    ];
		  }
		  function parseFvarAxis(data, start, names) {
		    const axis = {};
		    const p = new parse_default.Parser(data, start);
		    axis.tag = p.parseTag();
		    axis.minValue = p.parseFixed();
		    axis.defaultValue = p.parseFixed();
		    axis.maxValue = p.parseFixed();
		    p.skip("uShort", 1);
		    const axisNameID = p.parseUShort();
		    axis.axisNameID = axisNameID;
		    axis.name = getNameByID(names, axisNameID);
		    return axis;
		  }
		  function makeFvarInstance(n, inst, axes, optionalFields = {}) {
		    const fields = [
		      { name: "nameID_" + n, type: "USHORT", value: inst.subfamilyNameID },
		      { name: "flags_" + n, type: "USHORT", value: 0 }
		    ];
		    for (let i = 0; i < axes.length; ++i) {
		      const axisTag = axes[i].tag;
		      fields.push({
		        name: "axis_" + n + " " + axisTag,
		        type: "FIXED",
		        value: inst.coordinates[axisTag] << 16
		      });
		    }
		    if (optionalFields && optionalFields.postScriptNameID) {
		      fields.push({
		        name: "postScriptNameID_",
		        type: "USHORT",
		        value: inst.postScriptNameID !== void 0 ? inst.postScriptNameID : 65535
		      });
		    }
		    return fields;
		  }
		  function parseFvarInstance(data, start, axes, names, instanceSize) {
		    const inst = {};
		    const p = new parse_default.Parser(data, start);
		    const subfamilyNameID = p.parseUShort();
		    inst.subfamilyNameID = subfamilyNameID;
		    inst.name = getNameByID(names, subfamilyNameID, [2, 17]);
		    p.skip("uShort", 1);
		    inst.coordinates = {};
		    for (let i = 0; i < axes.length; ++i) {
		      inst.coordinates[axes[i].tag] = p.parseFixed();
		    }
		    if (p.relativeOffset === instanceSize) {
		      inst.postScriptNameID = void 0;
		      inst.postScriptName = void 0;
		      return inst;
		    }
		    const postScriptNameID = p.parseUShort();
		    inst.postScriptNameID = postScriptNameID == 65535 ? void 0 : postScriptNameID;
		    inst.postScriptName = inst.postScriptNameID !== void 0 ? getNameByID(names, postScriptNameID, [6]) : "";
		    return inst;
		  }
		  function makeFvarTable(fvar, names) {
		    const result = new table_default.Table("fvar", [
		      { name: "version", type: "ULONG", value: 65536 },
		      { name: "offsetToData", type: "USHORT", value: 0 },
		      { name: "countSizePairs", type: "USHORT", value: 2 },
		      { name: "axisCount", type: "USHORT", value: fvar.axes.length },
		      { name: "axisSize", type: "USHORT", value: 20 },
		      { name: "instanceCount", type: "USHORT", value: fvar.instances.length },
		      { name: "instanceSize", type: "USHORT", value: 4 + fvar.axes.length * 4 }
		    ]);
		    result.offsetToData = result.sizeOf();
		    for (let i = 0; i < fvar.axes.length; i++) {
		      result.fields = result.fields.concat(makeFvarAxis(i, fvar.axes[i]));
		    }
		    const optionalFields = {};
		    for (let j = 0; j < fvar.instances.length; j++) {
		      if (fvar.instances[j].postScriptNameID !== void 0) {
		        result.instanceSize += 2;
		        optionalFields.postScriptNameID = true;
		        break;
		      }
		    }
		    for (let j = 0; j < fvar.instances.length; j++) {
		      result.fields = result.fields.concat(makeFvarInstance(
		        j,
		        fvar.instances[j],
		        fvar.axes,
		        optionalFields
		      ));
		    }
		    return result;
		  }
		  function parseFvarTable(data, start, names) {
		    const p = new parse_default.Parser(data, start);
		    const tableVersion = p.parseULong();
		    check_default.argument(tableVersion === 65536, "Unsupported fvar table version.");
		    const offsetToData = p.parseOffset16();
		    p.skip("uShort", 1);
		    const axisCount = p.parseUShort();
		    const axisSize = p.parseUShort();
		    const instanceCount = p.parseUShort();
		    const instanceSize = p.parseUShort();
		    const axes = [];
		    for (let i = 0; i < axisCount; i++) {
		      axes.push(parseFvarAxis(data, start + offsetToData + i * axisSize, names));
		    }
		    const instances = [];
		    const instanceStart = start + offsetToData + axisCount * axisSize;
		    for (let j = 0; j < instanceCount; j++) {
		      instances.push(parseFvarInstance(data, instanceStart + j * instanceSize, axes, names, instanceSize));
		    }
		    return { axes, instances };
		  }
		  var fvar_default = { make: makeFvarTable, parse: parseFvarTable };

		  // src/tables/stat.mjs
		  var axisRecordStruct = {
		    tag: Parser.tag,
		    nameID: Parser.uShort,
		    ordering: Parser.uShort
		  };
		  var axisValueParsers = new Array(5);
		  axisValueParsers[1] = function axisValueParser1() {
		    return {
		      axisIndex: this.parseUShort(),
		      flags: this.parseUShort(),
		      valueNameID: this.parseUShort(),
		      value: this.parseFixed()
		    };
		  };
		  axisValueParsers[2] = function axisValueParser2() {
		    return {
		      axisIndex: this.parseUShort(),
		      flags: this.parseUShort(),
		      valueNameID: this.parseUShort(),
		      nominalValue: this.parseFixed(),
		      rangeMinValue: this.parseFixed(),
		      rangeMaxValue: this.parseFixed()
		    };
		  };
		  axisValueParsers[3] = function axisValueParser3() {
		    return {
		      axisIndex: this.parseUShort(),
		      flags: this.parseUShort(),
		      valueNameID: this.parseUShort(),
		      value: this.parseFixed(),
		      linkedValue: this.parseFixed()
		    };
		  };
		  axisValueParsers[4] = function axisValueParser4() {
		    const axisCount = this.parseUShort();
		    return {
		      flags: this.parseUShort(),
		      valueNameID: this.parseUShort(),
		      axisValues: this.parseList(axisCount, function() {
		        return {
		          axisIndex: this.parseUShort(),
		          value: this.parseFixed()
		        };
		      })
		    };
		  };
		  function parseSTATAxisValue() {
		    const valueTableFormat = this.parseUShort();
		    const axisValueParser = axisValueParsers[valueTableFormat];
		    const formatStub = {
		      format: valueTableFormat
		    };
		    if (axisValueParser === void 0) {
		      console.warn(`Unknown axis value table format ${valueTableFormat}`);
		      return formatStub;
		    }
		    return Object.assign(formatStub, this.parseStruct(axisValueParser.bind(this)));
		  }
		  function parseSTATTable(data, start, fvar) {
		    if (!start) {
		      start = 0;
		    }
		    const p = new parse_default.Parser(data, start);
		    const tableVersionMajor = p.parseUShort();
		    const tableVersionMinor = p.parseUShort();
		    if (tableVersionMajor !== 1) {
		      console.warn(`Unsupported STAT table version ${tableVersionMajor}.${tableVersionMinor}`);
		    }
		    const version = [
		      tableVersionMajor,
		      tableVersionMinor
		    ];
		    const designAxisSize = p.parseUShort();
		    const designAxisCount = p.parseUShort();
		    const designAxesOffset = p.parseOffset32();
		    const axisValueCount = p.parseUShort();
		    const offsetToAxisValueOffsets = p.parseOffset32();
		    const elidedFallbackNameID = tableVersionMajor > 1 || tableVersionMinor > 0 ? p.parseUShort() : void 0;
		    if (fvar !== void 0) {
		      check_default.argument(designAxisCount >= fvar.axes.length, "STAT axis count must be greater than or equal to fvar axis count");
		    }
		    if (axisValueCount > 0) {
		      check_default.argument(designAxisCount >= 0, "STAT axis count must be greater than 0 if STAT axis value count is greater than 0");
		    }
		    const axes = [];
		    for (let i = 0; i < designAxisCount; i++) {
		      p.offset = start + designAxesOffset;
		      p.relativeOffset = i * designAxisSize;
		      axes.push(p.parseStruct(axisRecordStruct));
		    }
		    p.offset = start;
		    p.relativeOffset = offsetToAxisValueOffsets;
		    const valueOffsets = p.parseUShortList(axisValueCount);
		    const values = [];
		    for (let i = 0; i < axisValueCount; i++) {
		      p.offset = start + offsetToAxisValueOffsets;
		      p.relativeOffset = valueOffsets[i];
		      values.push(parseSTATAxisValue.apply(p));
		    }
		    return {
		      version,
		      axes,
		      values,
		      elidedFallbackNameID
		    };
		  }
		  var axisValueMakers = new Array(5);
		  axisValueMakers[1] = function axisValueMaker1(n, table) {
		    return [
		      { name: `format${n}`, type: "USHORT", value: 1 },
		      { name: `axisIndex${n}`, type: "USHORT", value: table.axisIndex },
		      { name: `flags${n}`, type: "USHORT", value: table.flags },
		      { name: `valueNameID${n}`, type: "USHORT", value: table.valueNameID },
		      { name: `value${n}`, type: "FLOAT", value: table.value }
		    ];
		  };
		  axisValueMakers[2] = function axisValueMaker2(n, table) {
		    return [
		      { name: `format${n}`, type: "USHORT", value: 2 },
		      { name: `axisIndex${n}`, type: "USHORT", value: table.axisIndex },
		      { name: `flags${n}`, type: "USHORT", value: table.flags },
		      { name: `valueNameID${n}`, type: "USHORT", value: table.valueNameID },
		      { name: `nominalValue${n}`, type: "FLOAT", value: table.nominalValue },
		      { name: `rangeMinValue${n}`, type: "FLOAT", value: table.rangeMinValue },
		      { name: `rangeMaxValue${n}`, type: "FLOAT", value: table.rangeMaxValue }
		    ];
		  };
		  axisValueMakers[3] = function axisValueMaker3(n, table) {
		    return [
		      { name: `format${n}`, type: "USHORT", value: 3 },
		      { name: `axisIndex${n}`, type: "USHORT", value: table.axisIndex },
		      { name: `flags${n}`, type: "USHORT", value: table.flags },
		      { name: `valueNameID${n}`, type: "USHORT", value: table.valueNameID },
		      { name: `value${n}`, type: "FLOAT", value: table.value },
		      { name: `linkedValue${n}`, type: "FLOAT", value: table.linkedValue }
		    ];
		  };
		  axisValueMakers[4] = function axisValueMaker4(n, table) {
		    let returnFields = [
		      { name: `format${n}`, type: "USHORT", value: 4 },
		      { name: `axisCount${n}`, type: "USHORT", value: table.axisValues.length },
		      { name: `flags${n}`, type: "USHORT", value: table.flags },
		      { name: `valueNameID${n}`, type: "USHORT", value: table.valueNameID }
		    ];
		    for (let i = 0; i < table.axisValues.length; i++) {
		      returnFields = returnFields.concat([
		        { name: `format${n}axisIndex${i}`, type: "USHORT", value: table.axisValues[i].axisIndex },
		        { name: `format${n}value${i}`, type: "FLOAT", value: table.axisValues[i].value }
		      ]);
		    }
		    return returnFields;
		  };
		  function makeSTATAxisRecord(n, axis) {
		    return new table_default.Record("axisRecord_" + n, [
		      { name: "axisTag_" + n, type: "TAG", value: axis.tag },
		      { name: "axisNameID_" + n, type: "USHORT", value: axis.nameID },
		      { name: "axisOrdering_" + n, type: "USHORT", value: axis.ordering }
		    ]);
		  }
		  function makeSTATValueTable(n, tableData) {
		    const valueTableFormat = tableData.format;
		    const axisValueMaker = axisValueMakers[valueTableFormat];
		    check_default.argument(axisValueMaker !== void 0, `Unknown axis value table format ${valueTableFormat}`);
		    const fields = axisValueMaker(n, tableData);
		    return new table_default.Table("axisValueTable_" + n, fields);
		  }
		  function makeSTATTable(STAT) {
		    const result = new table_default.Table("STAT", [
		      { name: "majorVersion", type: "USHORT", value: 1 },
		      { name: "minorVersion", type: "USHORT", value: 2 },
		      { name: "designAxisSize", type: "USHORT", value: 8 },
		      { name: "designAxisCount", type: "USHORT", value: STAT.axes.length },
		      { name: "designAxesOffset", type: "ULONG", value: 0 },
		      { name: "axisValueCount", type: "USHORT", value: STAT.values.length },
		      { name: "offsetToAxisValueOffsets", type: "ULONG", value: 0 },
		      { name: "elidedFallbackNameID", type: "USHORT", value: STAT.elidedFallbackNameID }
		    ]);
		    result.designAxesOffset = result.offsetToAxisValueOffsets = result.sizeOf();
		    for (let i = 0; i < STAT.axes.length; i++) {
		      const axisRecord = makeSTATAxisRecord(i, STAT.axes[i]);
		      result.offsetToAxisValueOffsets += axisRecord.sizeOf();
		      result.fields = result.fields.concat(axisRecord.fields);
		    }
		    const axisValueOffsets = [];
		    let axisValueTables = [];
		    let axisValueTableOffset = STAT.values.length * 2;
		    for (let j = 0; j < STAT.values.length; j++) {
		      const axisValueTable = makeSTATValueTable(j, STAT.values[j]);
		      axisValueOffsets.push({
		        name: "offset_" + j,
		        type: "USHORT",
		        value: axisValueTableOffset
		      });
		      axisValueTableOffset += axisValueTable.sizeOf();
		      axisValueTables = axisValueTables.concat(axisValueTable.fields);
		    }
		    result.fields = result.fields.concat(axisValueOffsets);
		    result.fields = result.fields.concat(axisValueTables);
		    return result;
		  }
		  var stat_default = { make: makeSTATTable, parse: parseSTATTable };

		  // src/tables/avar.mjs
		  function makeAvarAxisValueMap(n, axisValueMap) {
		    return new table_default.Record("axisValueMap_" + n, [
		      { name: "fromCoordinate_" + n, type: "F2DOT14", value: axisValueMap.fromCoordinate },
		      { name: "toCoordinate_" + n, type: "F2DOT14", value: axisValueMap.toCoordinate }
		    ]);
		  }
		  function makeAvarSegmentMap(n, axis) {
		    const returnTable = new table_default.Record("segmentMap_" + n, [
		      { name: "positionMapCount_" + n, type: "USHORT", value: axis.axisValueMaps.length }
		    ]);
		    let axisValueMaps = [];
		    for (let i = 0; i < axis.axisValueMaps.length; i++) {
		      const valueMap = makeAvarAxisValueMap(`${n}_${i}`, axis.axisValueMaps[i]);
		      axisValueMaps = axisValueMaps.concat(valueMap.fields);
		    }
		    returnTable.fields = returnTable.fields.concat(axisValueMaps);
		    return returnTable;
		  }
		  function makeAvarTable(avar, fvar) {
		    check_default.argument(avar.axisSegmentMaps.length === fvar.axes.length, "avar axis count must correspond to fvar axis count");
		    const result = new table_default.Table("avar", [
		      { name: "majorVersion", type: "USHORT", value: 1 },
		      { name: "minorVersion", type: "USHORT", value: 0 },
		      { name: "reserved", type: "USHORT", value: 0 },
		      { name: "axisCount", type: "USHORT", value: avar.axisSegmentMaps.length }
		    ]);
		    for (let i = 0; i < avar.axisSegmentMaps.length; i++) {
		      const axisRecord = makeAvarSegmentMap(i, avar.axisSegmentMaps[i]);
		      result.fields = result.fields.concat(axisRecord.fields);
		    }
		    return result;
		  }
		  function parseAvarTable(data, start, fvar) {
		    if (!start) {
		      start = 0;
		    }
		    const p = new Parser(data, start);
		    const tableVersionMajor = p.parseUShort();
		    const tableVersionMinor = p.parseUShort();
		    if (tableVersionMajor !== 1) {
		      console.warn(`Unsupported avar table version ${tableVersionMajor}.${tableVersionMinor}`);
		    }
		    p.skip("uShort", 1);
		    const axisCount = p.parseUShort();
		    check_default.argument(axisCount === fvar.axes.length, "avar axis count must correspond to fvar axis count");
		    const axisSegmentMaps = [];
		    for (let i = 0; i < axisCount; i++) {
		      const axisValueMaps = [];
		      const positionMapCount = p.parseUShort();
		      for (let j = 0; j < positionMapCount; j++) {
		        const fromCoordinate = p.parseF2Dot14();
		        const toCoordinate = p.parseF2Dot14();
		        axisValueMaps.push({
		          fromCoordinate,
		          toCoordinate
		        });
		      }
		      axisSegmentMaps.push({
		        axisValueMaps
		      });
		    }
		    return {
		      version: [tableVersionMajor, tableVersionMinor],
		      axisSegmentMaps
		    };
		  }
		  var avar_default = { make: makeAvarTable, parse: parseAvarTable };

		  // src/tables/cvar.mjs
		  function parseCvarTable(data, start, fvar, cvt) {
		    const p = new parse_default.Parser(data, start);
		    const cvtVariations = p.parseTupleVariationStore(
		      p.relativeOffset,
		      fvar.axes.length,
		      "cvar",
		      cvt
		    );
		    const tableVersionMajor = p.parseUShort();
		    const tableVersionMinor = p.parseUShort();
		    if (tableVersionMajor !== 1) {
		      console.warn(`Unsupported cvar table version ${tableVersionMajor}.${tableVersionMinor}`);
		    }
		    return {
		      version: [tableVersionMajor, tableVersionMinor],
		      ...cvtVariations
		    };
		  }
		  function makeCvarTable() {
		    console.warn("Writing of cvar tables is not yet supported.");
		  }
		  var cvar_default = { make: makeCvarTable, parse: parseCvarTable };

		  // src/tables/gvar.mjs
		  function parseGvarTable(data, start, fvar, glyphs) {
		    const p = new parse_default.Parser(data, start);
		    const tableVersionMajor = p.parseUShort();
		    const tableVersionMinor = p.parseUShort();
		    if (tableVersionMajor !== 1) {
		      console.warn(`Unsupported gvar table version ${tableVersionMajor}.${tableVersionMinor}`);
		    }
		    const axisCount = p.parseUShort();
		    if (axisCount !== fvar.axes.length) {
		      console.warn(`axisCount ${axisCount} in gvar table does not match the number of axes ${fvar.axes.length} in the fvar table!`);
		    }
		    const sharedTupleCount = p.parseUShort();
		    const sharedTuples = p.parsePointer32(function() {
		      return this.parseTupleRecords(sharedTupleCount, axisCount);
		    });
		    const glyphVariations = p.parseTupleVariationStoreList(axisCount, "gvar", glyphs);
		    return {
		      version: [tableVersionMajor, tableVersionMinor],
		      sharedTuples,
		      glyphVariations
		    };
		  }
		  function makeGvarTable() {
		    console.warn("Writing of gvar tables is not yet supported.");
		  }
		  var gvar_default = { make: makeGvarTable, parse: parseGvarTable };

		  // src/tables/gasp.mjs
		  function parseGaspTable(data, start) {
		    const gasp = {};
		    const p = new parse_default.Parser(data, start);
		    gasp.version = p.parseUShort();
		    check_default.argument(gasp.version <= 1, "Unsupported gasp table version.");
		    gasp.numRanges = p.parseUShort();
		    gasp.gaspRanges = [];
		    for (let i = 0; i < gasp.numRanges; i++) {
		      gasp.gaspRanges[i] = {
		        rangeMaxPPEM: p.parseUShort(),
		        rangeGaspBehavior: p.parseUShort()
		      };
		    }
		    return gasp;
		  }
		  function makeGaspTable(gasp) {
		    const result = new table_default.Table("gasp", [
		      { name: "version", type: "USHORT", value: 1 },
		      { name: "numRanges", type: "USHORT", value: gasp.numRanges }
		    ]);
		    for (let i in gasp.gaspRanges) {
		      result.fields.push({ name: "rangeMaxPPEM", type: "USHORT", value: gasp.gaspRanges[i].rangeMaxPPEM });
		      result.fields.push({ name: "rangeGaspBehavior", type: "USHORT", value: gasp.gaspRanges[i].rangeGaspBehavior });
		    }
		    return result;
		  }
		  var gasp_default = { parse: parseGaspTable, make: makeGaspTable };

		  // src/tables/svg.mjs
		  function parseSvgTable(data, offset) {
		    const svgTable = /* @__PURE__ */ new Map();
		    const buf = data.buffer;
		    const p = new Parser(data, offset);
		    const version = p.parseUShort();
		    if (version !== 0) return svgTable;
		    p.relativeOffset = p.parseOffset32();
		    const svgDocumentListOffset = data.byteOffset + offset + p.relativeOffset;
		    const numEntries = p.parseUShort();
		    const svgDocMap = /* @__PURE__ */ new Map();
		    for (let i = 0; i < numEntries; i++) {
		      const startGlyphID = p.parseUShort();
		      const endGlyphID = p.parseUShort();
		      const svgDocOffset = svgDocumentListOffset + p.parseOffset32();
		      const svgDocLength = p.parseULong();
		      let svgDoc = svgDocMap.get(svgDocOffset);
		      if (svgDoc === void 0) {
		        svgDoc = new Uint8Array(buf, svgDocOffset, svgDocLength);
		        svgDocMap.set(svgDocOffset, svgDoc);
		      }
		      for (let i2 = startGlyphID; i2 <= endGlyphID; i2++) {
		        svgTable.set(i2, svgDoc);
		      }
		    }
		    return svgTable;
		  }
		  function makeSvgTable(svgTable) {
		    const glyphIds = Array.from(svgTable.keys()).sort();
		    const documentRecords = [];
		    const documentBuffers = [];
		    const documentOffsets = /* @__PURE__ */ new Map();
		    let nextSvgDocOffset = 0;
		    let record = { endGlyphID: null };
		    for (let i = 0, l = glyphIds.length; i < l; i++) {
		      const glyphId = glyphIds[i];
		      const svgDoc = svgTable.get(glyphId);
		      let svgDocOffset = documentOffsets.get(svgDoc);
		      if (svgDocOffset === void 0) {
		        svgDocOffset = nextSvgDocOffset;
		        documentBuffers.push(svgDoc);
		        documentOffsets.set(svgDoc, svgDocOffset);
		        nextSvgDocOffset += svgDoc.byteLength;
		      }
		      if (glyphId - 1 === record.endGlyphID && svgDocOffset === record.svgDocOffset) {
		        record.endGlyphID = glyphId;
		      } else {
		        record = {
		          startGlyphID: glyphId,
		          endGlyphID: glyphId,
		          svgDocOffset,
		          svgDocLength: svgDoc.byteLength
		        };
		        documentRecords.push(record);
		      }
		    }
		    const numEntries = documentRecords.length;
		    const numDocuments = documentBuffers.length;
		    const documentsOffset = 2 + numEntries * (2 + 2 + 4 + 4);
		    const fields = new Array(3 + 1 + numEntries * 4 + numDocuments);
		    let fieldIndex = 0;
		    fields[fieldIndex++] = { name: "version", type: "USHORT", value: 0 };
		    fields[fieldIndex++] = { name: "svgDocumentListOffset", type: "ULONG", value: 2 + 4 + 4 };
		    fields[fieldIndex++] = { name: "reserved", type: "ULONG", value: 0 };
		    fields[fieldIndex++] = { name: "numEntries", type: "USHORT", value: numEntries };
		    for (let i = 0; i < numEntries; i++) {
		      const namePrefix = "documentRecord_" + i;
		      const { startGlyphID, endGlyphID, svgDocOffset, svgDocLength } = documentRecords[i];
		      fields[fieldIndex++] = { name: namePrefix + "_startGlyphID", type: "USHORT", value: startGlyphID };
		      fields[fieldIndex++] = { name: namePrefix + "_endGlyphID", type: "USHORT", value: endGlyphID };
		      fields[fieldIndex++] = { name: namePrefix + "_svgDocOffset", type: "ULONG", value: documentsOffset + svgDocOffset };
		      fields[fieldIndex++] = { name: namePrefix + "_svgDocLength", type: "ULONG", value: svgDocLength };
		    }
		    for (let i = 0; i < numDocuments; i++) {
		      fields[fieldIndex++] = { name: "svgDoc_" + i, type: "LITERAL", value: documentBuffers[i] };
		    }
		    return new table_default.Table("SVG ", fields);
		  }
		  var svg_default = {
		    make: makeSvgTable,
		    parse: parseSvgTable
		  };

		  // src/tables/sfnt.mjs
		  function log2(v) {
		    return Math.log(v) / Math.log(2) | 0;
		  }
		  function computeCheckSum(bytes) {
		    while (bytes.length % 4 !== 0) {
		      bytes.push(0);
		    }
		    let sum = 0;
		    for (let i = 0; i < bytes.length; i += 4) {
		      sum += (bytes[i] << 24) + (bytes[i + 1] << 16) + (bytes[i + 2] << 8) + bytes[i + 3];
		    }
		    sum %= Math.pow(2, 32);
		    return sum;
		  }
		  function makeTableRecord(tag, checkSum, offset, length) {
		    return new table_default.Record("Table Record", [
		      { name: "tag", type: "TAG", value: tag !== void 0 ? tag : "" },
		      { name: "checkSum", type: "ULONG", value: checkSum !== void 0 ? checkSum : 0 },
		      { name: "offset", type: "ULONG", value: offset !== void 0 ? offset : 0 },
		      { name: "length", type: "ULONG", value: length !== void 0 ? length : 0 }
		    ]);
		  }
		  function makeSfntTable(tables) {
		    const sfnt = new table_default.Table("sfnt", [
		      { name: "version", type: "TAG", value: "OTTO" },
		      { name: "numTables", type: "USHORT", value: 0 },
		      { name: "searchRange", type: "USHORT", value: 0 },
		      { name: "entrySelector", type: "USHORT", value: 0 },
		      { name: "rangeShift", type: "USHORT", value: 0 }
		    ]);
		    sfnt.tables = tables;
		    sfnt.numTables = tables.length;
		    const highestPowerOf2 = Math.pow(2, log2(sfnt.numTables));
		    sfnt.searchRange = 16 * highestPowerOf2;
		    sfnt.entrySelector = log2(highestPowerOf2);
		    sfnt.rangeShift = sfnt.numTables * 16 - sfnt.searchRange;
		    const recordFields = [];
		    const tableFields = [];
		    let offset = sfnt.sizeOf() + makeTableRecord().sizeOf() * sfnt.numTables;
		    while (offset % 4 !== 0) {
		      offset += 1;
		      tableFields.push({ name: "padding", type: "BYTE", value: 0 });
		    }
		    for (let i = 0; i < tables.length; i += 1) {
		      const t = tables[i];
		      check_default.argument(t.tableName.length === 4, "Table name" + t.tableName + " is invalid.");
		      const tableLength = t.sizeOf();
		      const tableRecord = makeTableRecord(t.tableName, computeCheckSum(t.encode()), offset, tableLength);
		      recordFields.push({ name: tableRecord.tag + " Table Record", type: "RECORD", value: tableRecord });
		      tableFields.push({ name: t.tableName + " table", type: "RECORD", value: t });
		      offset += tableLength;
		      check_default.argument(!isNaN(offset), "Something went wrong calculating the offset.");
		      while (offset % 4 !== 0) {
		        offset += 1;
		        tableFields.push({ name: "padding", type: "BYTE", value: 0 });
		      }
		    }
		    recordFields.sort(function(r1, r2) {
		      if (r1.value.tag > r2.value.tag) {
		        return 1;
		      } else {
		        return -1;
		      }
		    });
		    sfnt.fields = sfnt.fields.concat(recordFields);
		    sfnt.fields = sfnt.fields.concat(tableFields);
		    return sfnt;
		  }
		  function metricsForChar(font, chars, notFoundMetrics) {
		    for (let i = 0; i < chars.length; i += 1) {
		      const glyphIndex = font.charToGlyphIndex(chars[i]);
		      if (glyphIndex > 0) {
		        const glyph = font.glyphs.get(glyphIndex);
		        return glyph.getMetrics();
		      }
		    }
		    return notFoundMetrics;
		  }
		  function average(vs) {
		    let sum = 0;
		    for (let i = 0; i < vs.length; i += 1) {
		      sum += vs[i];
		    }
		    return sum / vs.length;
		  }
		  function fontToSfntTable(font) {
		    const xMins = [];
		    const yMins = [];
		    const xMaxs = [];
		    const yMaxs = [];
		    const advanceWidths = [];
		    const leftSideBearings = [];
		    const rightSideBearings = [];
		    let firstCharIndex;
		    let lastCharIndex = 0;
		    let ulUnicodeRange1 = 0;
		    let ulUnicodeRange2 = 0;
		    let ulUnicodeRange3 = 0;
		    let ulUnicodeRange4 = 0;
		    for (let i = 0; i < font.glyphs.length; i += 1) {
		      const glyph = font.glyphs.get(i);
		      const unicode = glyph.unicode | 0;
		      if (isNaN(glyph.advanceWidth)) {
		        throw new Error("Glyph " + glyph.name + " (" + i + "): advanceWidth is not a number.");
		      }
		      if (firstCharIndex > unicode || firstCharIndex === void 0) {
		        if (unicode > 0) {
		          firstCharIndex = unicode;
		        }
		      }
		      if (lastCharIndex < unicode) {
		        lastCharIndex = unicode;
		      }
		      const position = os2_default.getUnicodeRange(unicode);
		      if (position < 32) {
		        ulUnicodeRange1 |= 1 << position;
		      } else if (position < 64) {
		        ulUnicodeRange2 |= 1 << position - 32;
		      } else if (position < 96) {
		        ulUnicodeRange3 |= 1 << position - 64;
		      } else if (position < 123) {
		        ulUnicodeRange4 |= 1 << position - 96;
		      } else {
		        throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
		      }
		      if (glyph.name === ".notdef") continue;
		      const metrics = glyph.getMetrics();
		      xMins.push(metrics.xMin);
		      yMins.push(metrics.yMin);
		      xMaxs.push(metrics.xMax);
		      yMaxs.push(metrics.yMax);
		      leftSideBearings.push(metrics.leftSideBearing);
		      rightSideBearings.push(metrics.rightSideBearing);
		      advanceWidths.push(glyph.advanceWidth);
		    }
		    const globals = {
		      xMin: Math.min.apply(null, xMins),
		      yMin: Math.min.apply(null, yMins),
		      xMax: Math.max.apply(null, xMaxs),
		      yMax: Math.max.apply(null, yMaxs),
		      advanceWidthMax: Math.max.apply(null, advanceWidths),
		      advanceWidthAvg: average(advanceWidths),
		      minLeftSideBearing: Math.min.apply(null, leftSideBearings),
		      maxLeftSideBearing: Math.max.apply(null, leftSideBearings),
		      minRightSideBearing: Math.min.apply(null, rightSideBearings)
		    };
		    globals.ascender = font.ascender;
		    globals.descender = font.descender;
		    let macStyle = 0;
		    if (font.weightClass >= 600) {
		      macStyle |= font.macStyleValues.BOLD;
		    }
		    if (font.italicAngle < 0) {
		      macStyle |= font.macStyleValues.ITALIC;
		    }
		    const headTable = head_default.make({
		      flags: 3,
		      // 00000011 (baseline for font at y=0; left sidebearing point at x=0)
		      unitsPerEm: font.unitsPerEm,
		      xMin: globals.xMin,
		      yMin: globals.yMin,
		      xMax: globals.xMax,
		      yMax: globals.yMax,
		      lowestRecPPEM: 3,
		      macStyle,
		      createdTimestamp: font.createdTimestamp
		    });
		    const hheaTable = hhea_default.make({
		      ascender: globals.ascender,
		      descender: globals.descender,
		      advanceWidthMax: globals.advanceWidthMax,
		      minLeftSideBearing: globals.minLeftSideBearing,
		      minRightSideBearing: globals.minRightSideBearing,
		      xMaxExtent: globals.maxLeftSideBearing + (globals.xMax - globals.xMin),
		      numberOfHMetrics: font.glyphs.length
		    });
		    const maxpTable = maxp_default.make(font.glyphs.length);
		    const os2Table = os2_default.make(Object.assign({
		      xAvgCharWidth: Math.round(globals.advanceWidthAvg),
		      usFirstCharIndex: firstCharIndex,
		      usLastCharIndex: lastCharIndex,
		      ulUnicodeRange1,
		      ulUnicodeRange2,
		      ulUnicodeRange3,
		      ulUnicodeRange4,
		      // See http://typophile.com/node/13081 for more info on vertical metrics.
		      // We get metrics for typical characters (such as "x" for xHeight).
		      // We provide some fallback characters if characters are unavailable: their
		      // ordering was chosen experimentally.
		      sTypoAscender: globals.ascender,
		      sTypoDescender: globals.descender,
		      sTypoLineGap: 0,
		      usWinAscent: globals.yMax,
		      usWinDescent: Math.abs(globals.yMin),
		      ulCodePageRange1: 1,
		      // FIXME: hard-code Latin 1 support for now
		      sxHeight: metricsForChar(font, "xyvw", { yMax: Math.round(globals.ascender / 2) }).yMax,
		      sCapHeight: metricsForChar(font, "HIKLEFJMNTZBDPRAGOQSUVWXY", globals).yMax,
		      usDefaultChar: font.hasChar(" ") ? 32 : 0,
		      // Use space as the default character, if available.
		      usBreakChar: font.hasChar(" ") ? 32 : 0
		      // Use space as the break character, if available.
		    }, font.tables.os2));
		    const hmtxTable = hmtx_default.make(font.glyphs);
		    const cmapTable = cmap_default.make(font.glyphs);
		    const englishFamilyName = font.getEnglishName("fontFamily");
		    const englishStyleName = font.getEnglishName("fontSubfamily");
		    const englishFullName = englishFamilyName + " " + englishStyleName;
		    let postScriptName = font.getEnglishName("postScriptName");
		    if (!postScriptName) {
		      postScriptName = englishFamilyName.replace(/\s/g, "") + "-" + englishStyleName;
		    }
		    const names = {};
		    for (let n in font.names) {
		      names[n] = font.names[n];
		    }
		    names.unicode = names.unicode || {};
		    names.macintosh = names.macintosh || {};
		    names.windows = names.windows || {};
		    const fontNamesUnicode = font.names.unicode || {};
		    const fontNamesMacintosh = font.names.macintosh || {};
		    const fontNamesWindows = font.names.windows || {};
		    for (const platform in names) {
		      names[platform] = names[platform] || {};
		      if (!names[platform].uniqueID) {
		        const manufacturer = font.getEnglishName("manufacturer") || "";
		        names[platform].uniqueID = { en: `${manufacturer}: ${englishFullName}` };
		      }
		      if (!names[platform].postScriptName) {
		        names[platform].postScriptName = { en: postScriptName };
		      }
		    }
		    if (!names.unicode.preferredFamily) {
		      names.unicode.preferredFamily = fontNamesUnicode.fontFamily || fontNamesMacintosh.fontFamily || fontNamesWindows.fontFamily;
		    }
		    if (!names.macintosh.preferredFamily) {
		      names.macintosh.preferredFamily = fontNamesMacintosh.fontFamily || fontNamesUnicode.fontFamily || fontNamesWindows.fontFamily;
		    }
		    if (!names.windows.preferredFamily) {
		      names.windows.preferredFamily = fontNamesWindows.fontFamily || fontNamesUnicode.fontFamily || fontNamesMacintosh.fontFamily;
		    }
		    if (!names.unicode.preferredSubfamily) {
		      names.unicode.preferredSubfamily = fontNamesUnicode.fontSubfamily || fontNamesMacintosh.fontSubfamily || fontNamesWindows.fontSubfamily;
		    }
		    if (!names.macintosh.preferredSubfamily) {
		      names.macintosh.preferredSubfamily = fontNamesMacintosh.fontSubfamily || fontNamesUnicode.fontSubfamily || fontNamesWindows.fontSubfamily;
		    }
		    if (!names.windows.preferredSubfamily) {
		      names.windows.preferredSubfamily = fontNamesWindows.fontSubfamily || fontNamesUnicode.fontSubfamily || fontNamesMacintosh.fontSubfamily;
		    }
		    const languageTags = [];
		    const nameTable = name_default.make(names, languageTags);
		    const ltagTable = languageTags.length > 0 ? ltag_default.make(languageTags) : void 0;
		    const postTable = post_default.make(font);
		    const cffTable = cff_default.make(font.glyphs, {
		      version: font.getEnglishName("version"),
		      fullName: englishFullName,
		      familyName: englishFamilyName,
		      weightName: englishStyleName,
		      postScriptName,
		      unitsPerEm: font.unitsPerEm,
		      fontBBox: [0, globals.yMin, globals.ascender, globals.advanceWidthMax],
		      topDict: font.tables.cff && font.tables.cff.topDict || {}
		    });
		    const metaTable = font.metas && Object.keys(font.metas).length > 0 ? meta_default.make(font.metas) : void 0;
		    const tables = [headTable, hheaTable, maxpTable, os2Table, nameTable, cmapTable, postTable, cffTable, hmtxTable];
		    if (ltagTable) {
		      tables.push(ltagTable);
		    }
		    const optionalTables = {
		      gsub: gsub_default,
		      cpal: cpal_default,
		      colr: colr_default,
		      stat: stat_default,
		      avar: avar_default,
		      cvar: cvar_default,
		      fvar: fvar_default,
		      gvar: gvar_default,
		      gasp: gasp_default,
		      svg: svg_default
		    };
		    const optionalTableArgs = {
		      avar: [font.tables.fvar],
		      fvar: [font.names]
		    };
		    for (let tableName in optionalTables) {
		      const table = font.tables[tableName];
		      if (table) {
		        const tableData = optionalTables[tableName].make.call(font, table, ...optionalTableArgs[tableName] || []);
		        if (tableData) {
		          tables.push(tableData);
		        }
		      }
		    }
		    if (metaTable) {
		      tables.push(metaTable);
		    }
		    const sfntTable = makeSfntTable(tables);
		    const bytes = sfntTable.encode();
		    const checkSum = computeCheckSum(bytes);
		    const tableFields = sfntTable.fields;
		    let checkSumAdjusted = false;
		    for (let i = 0; i < tableFields.length; i += 1) {
		      if (tableFields[i].name === "head table") {
		        tableFields[i].value.checkSumAdjustment = 2981146554 - checkSum;
		        checkSumAdjusted = true;
		        break;
		      }
		    }
		    if (!checkSumAdjusted) {
		      throw new Error("Could not find head table with checkSum to adjust.");
		    }
		    return sfntTable;
		  }
		  var sfnt_default = { make: makeSfntTable, fontToTable: fontToSfntTable, computeCheckSum };

		  // src/layout.mjs
		  function searchTag(arr, tag) {
		    let imin = 0;
		    let imax = arr.length - 1;
		    while (imin <= imax) {
		      const imid = imin + imax >>> 1;
		      const val = arr[imid].tag;
		      if (val === tag) {
		        return imid;
		      } else if (val < tag) {
		        imin = imid + 1;
		      } else {
		        imax = imid - 1;
		      }
		    }
		    return -imin - 1;
		  }
		  function binSearch(arr, value) {
		    let imin = 0;
		    let imax = arr.length - 1;
		    while (imin <= imax) {
		      const imid = imin + imax >>> 1;
		      const val = arr[imid];
		      if (val === value) {
		        return imid;
		      } else if (val < value) {
		        imin = imid + 1;
		      } else {
		        imax = imid - 1;
		      }
		    }
		    return -imin - 1;
		  }
		  function searchRange(ranges, value) {
		    let range;
		    let imin = 0;
		    let imax = ranges.length - 1;
		    while (imin <= imax) {
		      const imid = imin + imax >>> 1;
		      range = ranges[imid];
		      const start = range.start;
		      if (start === value) {
		        return range;
		      } else if (start < value) {
		        imin = imid + 1;
		      } else {
		        imax = imid - 1;
		      }
		    }
		    if (imin > 0) {
		      range = ranges[imin - 1];
		      if (value > range.end) return 0;
		      return range;
		    }
		  }
		  function Layout(font, tableName) {
		    this.font = font;
		    this.tableName = tableName;
		  }
		  Layout.prototype = {
		    /**
		     * Binary search an object by "tag" property
		     * @instance
		     * @function searchTag
		     * @memberof opentype.Layout
		     * @param  {Array} arr
		     * @param  {string} tag
		     * @return {number}
		     */
		    searchTag,
		    /**
		     * Binary search in a list of numbers
		     * @instance
		     * @function binSearch
		     * @memberof opentype.Layout
		     * @param  {Array} arr
		     * @param  {number} value
		     * @return {number}
		     */
		    binSearch,
		    /**
		     * Get or create the Layout table (GSUB, GPOS etc).
		     * @param  {boolean} create - Whether to create a new one.
		     * @return {Object} The GSUB or GPOS table.
		     */
		    getTable: function(create) {
		      let layout = this.font.tables[this.tableName];
		      if (!layout && create) {
		        layout = this.font.tables[this.tableName] = this.createDefaultTable();
		      }
		      return layout;
		    },
		    /**
		     * Returns all scripts in the substitution table.
		     * @instance
		     * @return {Array}
		     */
		    getScriptNames: function() {
		      let layout = this.getTable();
		      if (!layout) {
		        return [];
		      }
		      return layout.scripts.map(function(script) {
		        return script.tag;
		      });
		    },
		    /**
		     * Returns the best bet for a script name.
		     * Returns 'DFLT' if it exists.
		     * If not, returns 'latn' if it exists.
		     * If neither exist, returns undefined.
		     */
		    getDefaultScriptName: function() {
		      let layout = this.getTable();
		      if (!layout) {
		        return;
		      }
		      let hasLatn = false;
		      for (let i = 0; i < layout.scripts.length; i++) {
		        const name = layout.scripts[i].tag;
		        if (name === "DFLT") return name;
		        if (name === "latn") hasLatn = true;
		      }
		      if (hasLatn) return "latn";
		    },
		    /**
		     * Returns all LangSysRecords in the given script.
		     * @instance
		     * @param {string} [script='DFLT']
		     * @param {boolean} create - forces the creation of this script table if it doesn't exist.
		     * @return {Object} An object with tag and script properties.
		     */
		    getScriptTable: function(script, create) {
		      const layout = this.getTable(create);
		      if (layout) {
		        script = script || "DFLT";
		        const scripts = layout.scripts;
		        const pos = searchTag(layout.scripts, script);
		        if (pos >= 0) {
		          return scripts[pos].script;
		        } else if (create) {
		          const scr = {
		            tag: script,
		            script: {
		              defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] },
		              langSysRecords: []
		            }
		          };
		          scripts.splice(-1 - pos, 0, scr);
		          return scr.script;
		        }
		      }
		    },
		    /**
		     * Returns a language system table
		     * @instance
		     * @param {string} [script='DFLT']
		     * @param {string} [language='dlft']
		     * @param {boolean} create - forces the creation of this langSysTable if it doesn't exist.
		     * @return {Object}
		     */
		    getLangSysTable: function(script, language, create) {
		      const scriptTable = this.getScriptTable(script, create);
		      if (scriptTable) {
		        if (!language || language === "dflt" || language === "DFLT") {
		          return scriptTable.defaultLangSys;
		        }
		        const pos = searchTag(scriptTable.langSysRecords, language);
		        if (pos >= 0) {
		          return scriptTable.langSysRecords[pos].langSys;
		        } else if (create) {
		          const langSysRecord = {
		            tag: language,
		            langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }
		          };
		          scriptTable.langSysRecords.splice(-1 - pos, 0, langSysRecord);
		          return langSysRecord.langSys;
		        }
		      }
		    },
		    /**
		     * Get a specific feature table.
		     * @instance
		     * @param {string} [script='DFLT']
		     * @param {string} [language='dlft']
		     * @param {string} feature - One of the codes listed at https://www.microsoft.com/typography/OTSPEC/featurelist.htm
		     * @param {boolean} create - forces the creation of the feature table if it doesn't exist.
		     * @return {Object}
		     */
		    getFeatureTable: function(script, language, feature, create) {
		      const langSysTable2 = this.getLangSysTable(script, language, create);
		      if (langSysTable2) {
		        let featureRecord;
		        const featIndexes = langSysTable2.featureIndexes;
		        const allFeatures = this.font.tables[this.tableName].features;
		        for (let i = 0; i < featIndexes.length; i++) {
		          featureRecord = allFeatures[featIndexes[i]];
		          if (featureRecord.tag === feature) {
		            return featureRecord.feature;
		          }
		        }
		        if (create) {
		          const index = allFeatures.length;
		          check_default.assert(index === 0 || feature >= allFeatures[index - 1].tag, "Features must be added in alphabetical order.");
		          featureRecord = {
		            tag: feature,
		            feature: { params: 0, lookupListIndexes: [] }
		          };
		          allFeatures.push(featureRecord);
		          featIndexes.push(index);
		          return featureRecord.feature;
		        }
		      }
		    },
		    /**
		     * Get the lookup tables of a given type for a script/language/feature.
		     * @instance
		     * @param {string} [script='DFLT']
		     * @param {string} [language='dlft']
		     * @param {string} feature - 4-letter feature code
		     * @param {number} lookupType - 1 to 9
		     * @param {boolean} create - forces the creation of the lookup table if it doesn't exist, with no subtables.
		     * @return {Object[]}
		     */
		    getLookupTables: function(script, language, feature, lookupType, create) {
		      const featureTable = this.getFeatureTable(script, language, feature, create);
		      const tables = [];
		      if (featureTable) {
		        let lookupTable;
		        const lookupListIndexes = featureTable.lookupListIndexes;
		        const allLookups = this.font.tables[this.tableName].lookups;
		        for (let i = 0; i < lookupListIndexes.length; i++) {
		          lookupTable = allLookups[lookupListIndexes[i]];
		          if (lookupTable.lookupType === lookupType) {
		            tables.push(lookupTable);
		          }
		        }
		        if (tables.length === 0 && create) {
		          lookupTable = {
		            lookupType,
		            lookupFlag: 0,
		            subtables: [],
		            markFilteringSet: void 0
		          };
		          const index = allLookups.length;
		          allLookups.push(lookupTable);
		          lookupListIndexes.push(index);
		          return [lookupTable];
		        }
		      }
		      return tables;
		    },
		    /**
		     * Find a glyph in a class definition table
		     * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table
		     * @param {object} classDefTable - an OpenType Layout class definition table
		     * @param {number} glyphIndex - the index of the glyph to find
		     * @returns {number} -1 if not found
		     */
		    getGlyphClass: function(classDefTable, glyphIndex) {
		      switch (classDefTable.format) {
		        case 1: {
		          if (classDefTable.startGlyph <= glyphIndex && glyphIndex < classDefTable.startGlyph + classDefTable.classes.length) {
		            return classDefTable.classes[glyphIndex - classDefTable.startGlyph];
		          }
		          return 0;
		        }
		        case 2: {
		          const range = searchRange(classDefTable.ranges, glyphIndex);
		          return range ? range.classId : 0;
		        }
		      }
		    },
		    /**
		     * Find a glyph in a coverage table
		     * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table
		     * @param {object} coverageTable - an OpenType Layout coverage table
		     * @param {number} glyphIndex - the index of the glyph to find
		     * @returns {number} -1 if not found
		     */
		    getCoverageIndex: function(coverageTable, glyphIndex) {
		      switch (coverageTable.format) {
		        case 1: {
		          const index = binSearch(coverageTable.glyphs, glyphIndex);
		          return index >= 0 ? index : -1;
		        }
		        case 2: {
		          const range = searchRange(coverageTable.ranges, glyphIndex);
		          return range ? range.index + glyphIndex - range.start : -1;
		        }
		      }
		    },
		    /**
		     * Returns the list of glyph indexes of a coverage table.
		     * Format 1: the list is stored raw
		     * Format 2: compact list as range records.
		     * @instance
		     * @param  {Object} coverageTable
		     * @return {Array}
		     */
		    expandCoverage: function(coverageTable) {
		      if (coverageTable.format === 1) {
		        return coverageTable.glyphs;
		      } else {
		        const glyphs = [];
		        const ranges = coverageTable.ranges;
		        for (let i = 0; i < ranges.length; i++) {
		          const range = ranges[i];
		          const start = range.start;
		          const end = range.end;
		          for (let j = start; j <= end; j++) {
		            glyphs.push(j);
		          }
		        }
		        return glyphs;
		      }
		    }
		  };
		  var layout_default = Layout;

		  // src/position.mjs
		  function Position(font) {
		    layout_default.call(this, font, "gpos");
		  }
		  Position.prototype = layout_default.prototype;
		  Position.prototype.init = function() {
		    const script = this.getDefaultScriptName();
		    this.defaultKerningTables = this.getKerningTables(script);
		  };
		  Position.prototype.getKerningValue = function(kerningLookups, leftIndex, rightIndex) {
		    for (let i = 0; i < kerningLookups.length; i++) {
		      const subtables = kerningLookups[i].subtables;
		      for (let j = 0; j < subtables.length; j++) {
		        const subtable = subtables[j];
		        const covIndex = this.getCoverageIndex(subtable.coverage, leftIndex);
		        if (covIndex < 0) continue;
		        switch (subtable.posFormat) {
		          case 1: {
		            let pairSet = subtable.pairSets[covIndex];
		            for (let k = 0; k < pairSet.length; k++) {
		              let pair = pairSet[k];
		              if (pair.secondGlyph === rightIndex) {
		                return pair.value1 && pair.value1.xAdvance || 0;
		              }
		            }
		            break;
		          }
		          case 2: {
		            const class1 = this.getGlyphClass(subtable.classDef1, leftIndex);
		            const class2 = this.getGlyphClass(subtable.classDef2, rightIndex);
		            const pair = subtable.classRecords[class1][class2];
		            return pair.value1 && pair.value1.xAdvance || 0;
		          }
		        }
		      }
		    }
		    return 0;
		  };
		  Position.prototype.getKerningTables = function(script, language) {
		    if (this.font.tables.gpos) {
		      return this.getLookupTables(script, language, "kern", 2);
		    }
		  };
		  var position_default = Position;

		  // src/util.mjs
		  function arraysEqual(ar1, ar2) {
		    const n = ar1.length;
		    if (n !== ar2.length) {
		      return false;
		    }
		    for (let i = 0; i < n; i++) {
		      if (ar1[i] !== ar2[i]) {
		        return false;
		      }
		    }
		    return true;
		  }
		  function binarySearch(array, key, value) {
		    let low = 0, high = array.length - 1;
		    let result = null;
		    while (low <= high) {
		      const mid = Math.floor((low + high) / 2);
		      const record = array[mid];
		      const recordValue = record[key];
		      if (recordValue < value) {
		        low = mid + 1;
		      } else if (recordValue > value) {
		        high = mid - 1;
		      } else {
		        result = record;
		        break;
		      }
		    }
		    return result;
		  }
		  function binarySearchIndex(array, key, value) {
		    let low = 0, high = array.length - 1;
		    while (low <= high) {
		      const mid = Math.floor((low + high) / 2);
		      const element = array[mid];
		      if (element[key] < value) {
		        low = mid + 1;
		      } else if (element[key] > value) {
		        high = mid - 1;
		      } else {
		        return mid;
		      }
		    }
		    return -1;
		  }
		  function binarySearchInsert(array, key, value) {
		    let low = 0, high = array.length;
		    const compare = (a, b) => a[key] - b[key];
		    while (low < high) {
		      const mid = low + high >>> 1;
		      if (compare(array[mid], value) < 0) low = mid + 1;
		      else high = mid;
		    }
		    array.splice(low, 0, value);
		    return low;
		  }
		  function isGzip(buf) {
		    return buf[0] === 31 && buf[1] === 139 && buf[2] === 8;
		  }
		  function unGzip(gzip) {
		    const data = new DataView(gzip.buffer, gzip.byteOffset, gzip.byteLength);
		    let start = 10;
		    const end = gzip.byteLength - 8;
		    const flg = data.getInt8(3);
		    if (flg & 4) {
		      start += 2 + data.getUint16(start, true);
		    }
		    if (flg & 8) {
		      while (start < end) if (gzip[start++] === 0) break;
		    }
		    if (flg & 16) {
		      while (start < end) if (gzip[start++] === 0) break;
		    }
		    if (flg & 2) {
		      start += 2;
		    }
		    if (start >= end) throw new Error("Can't find compressed blocks");
		    const isize = data.getUint32(data.byteLength - 4, true);
		    return tinf_uncompress(gzip.subarray(start, end), new Uint8Array(isize));
		  }
		  function copyPoint(p) {
		    return {
		      x: p.x,
		      y: p.y,
		      onCurve: p.onCurve,
		      lastPointOfContour: p.lastPointOfContour
		    };
		  }
		  function copyComponent(c) {
		    return {
		      glyphIndex: c.glyphIndex,
		      xScale: c.xScale,
		      scale01: c.scale01,
		      scale10: c.scale10,
		      yScale: c.yScale,
		      dx: c.dx,
		      dy: c.dy
		    };
		  }

		  // src/substitution.mjs
		  function Substitution(font) {
		    layout_default.call(this, font, "gsub");
		  }
		  function getSubstFormat(lookupTable, format, defaultSubtable) {
		    const subtables = lookupTable.subtables;
		    for (let i = 0; i < subtables.length; i++) {
		      const subtable = subtables[i];
		      if (subtable.substFormat === format) {
		        return subtable;
		      }
		    }
		    if (defaultSubtable) {
		      subtables.push(defaultSubtable);
		      return defaultSubtable;
		    }
		    return void 0;
		  }
		  Substitution.prototype = layout_default.prototype;
		  Substitution.prototype.createDefaultTable = function() {
		    return {
		      version: 1,
		      scripts: [{
		        tag: "DFLT",
		        script: {
		          defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] },
		          langSysRecords: []
		        }
		      }],
		      features: [],
		      lookups: []
		    };
		  };
		  Substitution.prototype.getSingle = function(feature, script, language) {
		    const substitutions = [];
		    const lookupTables = this.getLookupTables(script, language, feature, 1);
		    for (let idx = 0; idx < lookupTables.length; idx++) {
		      const subtables = lookupTables[idx].subtables;
		      for (let i = 0; i < subtables.length; i++) {
		        const subtable = subtables[i];
		        const glyphs = this.expandCoverage(subtable.coverage);
		        let j;
		        if (subtable.substFormat === 1) {
		          const delta = subtable.deltaGlyphId;
		          for (j = 0; j < glyphs.length; j++) {
		            const glyph = glyphs[j];
		            substitutions.push({ sub: glyph, by: glyph + delta });
		          }
		        } else {
		          const substitute = subtable.substitute;
		          for (j = 0; j < glyphs.length; j++) {
		            substitutions.push({ sub: glyphs[j], by: substitute[j] });
		          }
		        }
		      }
		    }
		    return substitutions;
		  };
		  Substitution.prototype.getMultiple = function(feature, script, language) {
		    const substitutions = [];
		    const lookupTables = this.getLookupTables(script, language, feature, 2);
		    for (let idx = 0; idx < lookupTables.length; idx++) {
		      const subtables = lookupTables[idx].subtables;
		      for (let i = 0; i < subtables.length; i++) {
		        const subtable = subtables[i];
		        const glyphs = this.expandCoverage(subtable.coverage);
		        let j;
		        for (j = 0; j < glyphs.length; j++) {
		          const glyph = glyphs[j];
		          const replacements = subtable.sequences[j];
		          substitutions.push({ sub: glyph, by: replacements });
		        }
		      }
		    }
		    return substitutions;
		  };
		  Substitution.prototype.getAlternates = function(feature, script, language) {
		    const alternates = [];
		    const lookupTables = this.getLookupTables(script, language, feature, 3);
		    for (let idx = 0; idx < lookupTables.length; idx++) {
		      const subtables = lookupTables[idx].subtables;
		      for (let i = 0; i < subtables.length; i++) {
		        const subtable = subtables[i];
		        const glyphs = this.expandCoverage(subtable.coverage);
		        const alternateSets = subtable.alternateSets;
		        for (let j = 0; j < glyphs.length; j++) {
		          alternates.push({ sub: glyphs[j], by: alternateSets[j] });
		        }
		      }
		    }
		    return alternates;
		  };
		  Substitution.prototype.getLigatures = function(feature, script, language) {
		    const ligatures = [];
		    const lookupTables = this.getLookupTables(script, language, feature, 4);
		    for (let idx = 0; idx < lookupTables.length; idx++) {
		      const subtables = lookupTables[idx].subtables;
		      for (let i = 0; i < subtables.length; i++) {
		        const subtable = subtables[i];
		        const glyphs = this.expandCoverage(subtable.coverage);
		        const ligatureSets = subtable.ligatureSets;
		        for (let j = 0; j < glyphs.length; j++) {
		          const startGlyph = glyphs[j];
		          const ligSet = ligatureSets[j];
		          for (let k = 0; k < ligSet.length; k++) {
		            const lig = ligSet[k];
		            ligatures.push({
		              sub: [startGlyph].concat(lig.components),
		              by: lig.ligGlyph
		            });
		          }
		        }
		      }
		    }
		    return ligatures;
		  };
		  Substitution.prototype.addSingle = function(feature, substitution, script, language) {
		    const lookupTable = this.getLookupTables(script, language, feature, 1, true)[0];
		    const subtable = getSubstFormat(lookupTable, 2, {
		      // lookup type 1 subtable, format 2, coverage format 1
		      substFormat: 2,
		      coverage: { format: 1, glyphs: [] },
		      substitute: []
		    });
		    check_default.assert(subtable.coverage.format === 1, "Single: unable to modify coverage table format " + subtable.coverage.format);
		    const coverageGlyph = substitution.sub;
		    let pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
		    if (pos < 0) {
		      pos = -1 - pos;
		      subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
		      subtable.substitute.splice(pos, 0, 0);
		    }
		    subtable.substitute[pos] = substitution.by;
		  };
		  Substitution.prototype.addMultiple = function(feature, substitution, script, language) {
		    check_default.assert(substitution.by instanceof Array && substitution.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
		    const lookupTable = this.getLookupTables(script, language, feature, 2, true)[0];
		    const subtable = getSubstFormat(lookupTable, 1, {
		      // lookup type 2 subtable, format 1, coverage format 1
		      substFormat: 1,
		      coverage: { format: 1, glyphs: [] },
		      sequences: []
		    });
		    check_default.assert(subtable.coverage.format === 1, "Multiple: unable to modify coverage table format " + subtable.coverage.format);
		    const coverageGlyph = substitution.sub;
		    let pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
		    if (pos < 0) {
		      pos = -1 - pos;
		      subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
		      subtable.sequences.splice(pos, 0, 0);
		    }
		    subtable.sequences[pos] = substitution.by;
		  };
		  Substitution.prototype.addAlternate = function(feature, substitution, script, language) {
		    const lookupTable = this.getLookupTables(script, language, feature, 3, true)[0];
		    const subtable = getSubstFormat(lookupTable, 1, {
		      // lookup type 3 subtable, format 1, coverage format 1
		      substFormat: 1,
		      coverage: { format: 1, glyphs: [] },
		      alternateSets: []
		    });
		    check_default.assert(subtable.coverage.format === 1, "Alternate: unable to modify coverage table format " + subtable.coverage.format);
		    const coverageGlyph = substitution.sub;
		    let pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
		    if (pos < 0) {
		      pos = -1 - pos;
		      subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
		      subtable.alternateSets.splice(pos, 0, 0);
		    }
		    subtable.alternateSets[pos] = substitution.by;
		  };
		  Substitution.prototype.addLigature = function(feature, ligature, script, language) {
		    const lookupTable = this.getLookupTables(script, language, feature, 4, true)[0];
		    let subtable = lookupTable.subtables[0];
		    if (!subtable) {
		      subtable = {
		        // lookup type 4 subtable, format 1, coverage format 1
		        substFormat: 1,
		        coverage: { format: 1, glyphs: [] },
		        ligatureSets: []
		      };
		      lookupTable.subtables[0] = subtable;
		    }
		    check_default.assert(subtable.coverage.format === 1, "Ligature: unable to modify coverage table format " + subtable.coverage.format);
		    const coverageGlyph = ligature.sub[0];
		    const ligComponents = ligature.sub.slice(1);
		    const ligatureTable = {
		      ligGlyph: ligature.by,
		      components: ligComponents
		    };
		    let pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
		    if (pos >= 0) {
		      const ligatureSet = subtable.ligatureSets[pos];
		      for (let i = 0; i < ligatureSet.length; i++) {
		        if (arraysEqual(ligatureSet[i].components, ligComponents)) {
		          return;
		        }
		      }
		      ligatureSet.push(ligatureTable);
		    } else {
		      pos = -1 - pos;
		      subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
		      subtable.ligatureSets.splice(pos, 0, [ligatureTable]);
		    }
		  };
		  Substitution.prototype.getFeature = function(feature, script, language) {
		    if (/ss\d\d/.test(feature)) {
		      return this.getSingle(feature, script, language);
		    }
		    switch (feature) {
		      case "aalt":
		      case "salt":
		        return this.getSingle(feature, script, language).concat(this.getAlternates(feature, script, language));
		      case "dlig":
		      case "liga":
		      case "rlig":
		        return this.getLigatures(feature, script, language);
		      case "ccmp":
		        return this.getMultiple(feature, script, language).concat(this.getLigatures(feature, script, language));
		      case "stch":
		        return this.getMultiple(feature, script, language);
		    }
		    return void 0;
		  };
		  Substitution.prototype.add = function(feature, sub, script, language) {
		    if (/ss\d\d/.test(feature)) {
		      return this.addSingle(feature, sub, script, language);
		    }
		    switch (feature) {
		      case "aalt":
		      case "salt":
		        if (typeof sub.by === "number") {
		          return this.addSingle(feature, sub, script, language);
		        }
		        return this.addAlternate(feature, sub, script, language);
		      case "dlig":
		      case "liga":
		      case "rlig":
		        return this.addLigature(feature, sub, script, language);
		      case "ccmp":
		        if (sub.by instanceof Array) {
		          return this.addMultiple(feature, sub, script, language);
		        }
		        return this.addLigature(feature, sub, script, language);
		    }
		    return void 0;
		  };
		  var substitution_default = Substitution;

		  // src/palettes.mjs
		  var PaletteManager = class {
		    // private properties don't work with reify
		    // @TODO: refactor once we migrated to ES6 modules, see https://github.com/opentypejs/opentype.js/pull/579
		    // #font = null;
		    /**
		     * @type {integer} CPAL color used to (pre)fill unset colors in a palette.
		     * Format 0xBBGGRRAA
		     */
		    // defaultValue = 0x000000FF;
		    /**
		     * 
		     * @param {opentype.Font} font 
		     */
		    constructor(font) {
		      this.defaultValue = 255;
		      this.font = font;
		    }
		    /**
		     * Returns the font's cpal table object if present
		     * @returns {Object}
		     */
		    cpal() {
		      if (this.font.tables && this.font.tables.cpal) {
		        return this.font.tables.cpal;
		      }
		      return false;
		    }
		    /**
		     * Returns an array of arrays of color values for each palette, optionally in a specified color format
		     * @param {string} colorFormat 
		     * @returns {Array<Array>}
		     */
		    getAll(colorFormat) {
		      const palettes = [];
		      const cpal = this.cpal();
		      if (!cpal) return palettes;
		      for (let i = 0; i < cpal.colorRecordIndices.length; i++) {
		        const startIndex = cpal.colorRecordIndices[i];
		        const paletteColors = [];
		        for (let j = startIndex; j < startIndex + cpal.numPaletteEntries; j++) {
		          paletteColors.push(formatColor(cpal.colorRecords[j], colorFormat || "hexa"));
		        }
		        palettes.push(paletteColors);
		      }
		      return palettes;
		    }
		    /**
		     * Converts a color value string or array of color value strings to CPAL integer color value(s)
		     * @param {string|Array<string></string>} color 
		     * @returns {integer}
		     */
		    toCPALcolor(color) {
		      if (Array.isArray(color)) {
		        return color.map((color2) => parseColor(color2, "raw"));
		      }
		      return parseColor(color, "raw");
		    }
		    /**
		     * Fills a set of palette colors (from palette index, or a provided array of CPAL color values) with a set of colors, falling back to the default color value, until a given count
		     * @param {Array<string>|integer} palette Palette index integer or Array of colors to be filled
		     * @param {Array<string|integer>} colors Colors to fill the palette with
		     * @param {integer} _colorCount Number of colors to fill the palette with, defaults to the value of the numPaletteEntries field. Used internally by extend() and shouldn't be set manually
		     * @returns 
		     */
		    fillPalette(palette, colors = [], _colorCount = this.cpal().numPaletteEntries) {
		      palette = Number.isInteger(palette) ? this.get(palette, "raw") : palette;
		      return Object.assign(Array(_colorCount).fill(this.defaultValue), this.toCPALcolor(palette).concat(this.toCPALcolor(colors)));
		    }
		    /**
		     * Extend existing palettes and numPaletteEntries by a number of color slots
		     * @param {integer} num number of additional color slots to add to all palettes
		     */
		    extend(num) {
		      if (this.ensureCPAL(Array(num).fill(this.defaultValue))) {
		        return;
		      }
		      const cpal = this.cpal();
		      const newCount = cpal.numPaletteEntries + num;
		      const palettes = this.getAll().map((palette) => this.fillPalette(palette, [], newCount));
		      cpal.numPaletteEntries = newCount;
		      cpal.colorRecords = this.toCPALcolor(palettes.flat());
		      this.updateIndices();
		    }
		    /**
		     * Get a specific palette by its zero-based index
		     * @param {integer} paletteIndex 
		     * @param {string} [colorFormat='hexa']
		     * @returns {Array}
		     */
		    get(paletteIndex, colorFormat = "hexa") {
		      return this.getAll(colorFormat)[paletteIndex] || null;
		    }
		    /**
		     * Get a color from a specific palette by its zero-based index
		     * @param {integer} index 
		     * @param {integer} paletteIndex
		     * @param {string} [colorFormat ='hexa']
		     * @returns 
		     */
		    getColor(index, paletteIndex = 0, colorFormat = "hexa") {
		      return getPaletteColor(this.font, index, paletteIndex, colorFormat);
		    }
		    /**
		     * Set one or more colors on a specific palette by its zero-based index
		     * @param {integer} index zero-based color index to start filling from
		     * @param {string|integer|Array<string|integer>} color color value or array of color values
		     * @param {integer} paletteIndex
		     * @returns 
		     */
		    setColor(index, colors, paletteIndex = 0) {
		      index = parseInt(index);
		      paletteIndex = parseInt(paletteIndex);
		      let palettes = this.getAll("raw");
		      let palette = palettes[paletteIndex];
		      if (!palette) {
		        throw Error(`paletteIndex ${paletteIndex} out of range`);
		      }
		      const cpal = this.cpal();
		      const colorCount = cpal.numPaletteEntries;
		      if (!Array.isArray(colors)) {
		        colors = [colors];
		      }
		      if (colors.length + index > colorCount) {
		        this.extend(colors.length + index - colorCount);
		        palettes = this.getAll("raw");
		        palette = palettes[paletteIndex];
		      }
		      for (let i = 0; i < colors.length; i++) {
		        palette[i + index] = this.toCPALcolor(colors[i]);
		      }
		      cpal.colorRecords = palettes.flat();
		      this.updateIndices();
		    }
		    /**
		     * Add a new palette. 
		     * @param {Array} colors (optional) colors to add to the palette, differences to existing palettes will be filled with the defaultValue.
		     * @returns 
		     */
		    add(colors) {
		      if (this.ensureCPAL(colors)) {
		        return;
		      }
		      const cpal = this.cpal();
		      const colorCount = cpal.numPaletteEntries;
		      if (colors && colors.length) {
		        colors = this.toCPALcolor(colors);
		        if (colors.length > colorCount) {
		          this.extend(colors.length - colorCount);
		        } else if (colors.length < colorCount) {
		          colors = this.fillPalette(colors);
		        }
		        cpal.colorRecordIndices.push(cpal.colorRecords.length);
		        cpal.colorRecords.push(...colors);
		      } else {
		        cpal.colorRecordIndices.push(cpal.colorRecords.length);
		        cpal.colorRecords.push(...Array(colorCount).fill(this.defaultValue));
		      }
		    }
		    /**
		     * deletes a palette by its zero-based index
		     * @param {integer} paletteIndex 
		     */
		    delete(paletteIndex) {
		      const palettes = this.getAll("raw");
		      delete palettes[paletteIndex];
		      const cpal = this.cpal();
		      cpal.colorRecordIndices.pop();
		      cpal.colorRecords = palettes.flat();
		    }
		    /**
		     * Deletes a specific color index in all palettes and updates all layers using that color with the replacement index
		     * @param {integer} colorIndex index of the color that should be deleted
		     * @param {integer} replacementIndex index (according to the palette before deletion) of the color to replace in layers using the color to be to deleted
		     */
		    deleteColor(colorIndex, replacementIndex) {
		      if (colorIndex === replacementIndex) {
		        throw Error("replacementIndex cannot be the same as colorIndex");
		      }
		      const cpal = this.cpal();
		      const palettes = this.getAll("raw");
		      const updatedPalettes = [];
		      if (replacementIndex > cpal.numPaletteEntries - 1) {
		        throw Error(`Replacement index out of range: numPaletteEntries after deletion: ${cpal.numPaletteEntries - 1}, replacementIndex: ${replacementIndex})`);
		      }
		      for (let i = 0; i < palettes.length; i++) {
		        const palette = palettes[i];
		        const updatedPalette = palette.filter((color, index) => index !== colorIndex);
		        updatedPalettes.push(updatedPalette);
		      }
		      const colrTable = this.font.tables.colr;
		      if (colrTable) {
		        const layerRecords = colrTable.layerRecords;
		        for (let i = 0; i < layerRecords.length; i++) {
		          const currentIndex = layerRecords[i].paletteIndex;
		          if (currentIndex > colorIndex) {
		            const shiftAmount = 1;
		            layerRecords[i].paletteIndex -= shiftAmount;
		          } else if (currentIndex === colorIndex) {
		            let replacementShift = 0;
		            for (let j = 0; j < palettes.length; j++) {
		              if (replacementIndex > colorIndex && replacementIndex <= colorIndex + palettes[j].length) {
		                replacementShift++;
		                break;
		              }
		            }
		            layerRecords[i].paletteIndex = replacementIndex - replacementShift;
		          }
		        }
		        this.font.tables.colr = {
		          ...colrTable,
		          layerRecords
		        };
		      }
		      const flattenedPalettes = updatedPalettes.flat();
		      for (let i = 0; i < palettes.length; i++) {
		        cpal.colorRecordIndices[i] -= i;
		      }
		      cpal.numPaletteEntries = Math.max(0, cpal.numPaletteEntries - 1);
		      cpal.colorRecords = this.toCPALcolor(flattenedPalettes);
		    }
		    /**
		     * Makes sure that the CPAL table exists and is populated with default values.
		     * @param {Array} colors (optional) colors to populate on creation
		     * @returns {Boolean} true if it was created, false if it already existed.
		     */
		    ensureCPAL(colors) {
		      if (!this.cpal()) {
		        if (!colors || !colors.length) {
		          colors = [this.defaultValue];
		        } else {
		          colors = this.toCPALcolor(colors);
		        }
		        this.font.tables.cpal = {
		          version: 0,
		          numPaletteEntries: colors.length,
		          colorRecords: colors,
		          colorRecordIndices: [0]
		        };
		        return true;
		      }
		      return false;
		    }
		    /**
		     * Mainly used internally. Recalculates the colorRecordIndices array based on the numPaletteEntries and number of palettes
		     */
		    updateIndices() {
		      const cpal = this.cpal();
		      const paletteCount = Math.ceil(cpal.colorRecords.length / cpal.numPaletteEntries);
		      cpal.colorRecordIndices = [];
		      for (let i = 0; i < paletteCount; i++) {
		        cpal.colorRecordIndices.push(i * cpal.numPaletteEntries);
		      }
		    }
		  };

		  // src/layers.mjs
		  var LayerManager = class {
		    // private properties don't work with reify
		    // @TODO: refactor once we migrated to ES6 modules, see https://github.com/opentypejs/opentype.js/pull/579
		    // #font = null;
		    constructor(font) {
		      this.font = font;
		    }
		    /**
		     * Mainly used internally. Ensures that the COLR table exists and is populated with default values
		     * @returns the LayerManager's font instance for chaining
		     */
		    ensureCOLR() {
		      if (!this.font.tables.colr) {
		        this.font.tables.colr = {
		          version: 0,
		          baseGlyphRecords: [],
		          layerRecords: []
		        };
		      }
		      return this.font;
		    }
		    /**
		     * Gets the layers for a specific glyph
		     * @param {integer} glyphIndex
		     * @returns {Array<Object>} array of layer objects {glyph, paletteIndex}
		     */
		    get(glyphIndex) {
		      const font = this.font;
		      const layers = [];
		      const colr = font.tables.colr;
		      const cpal = font.tables.cpal;
		      if (!colr || !cpal) {
		        return layers;
		      }
		      const baseGlyph = binarySearch(colr.baseGlyphRecords, "glyphID", glyphIndex);
		      if (!baseGlyph) {
		        return layers;
		      }
		      const firstIndex = baseGlyph.firstLayerIndex;
		      const numLayers = baseGlyph.numLayers;
		      for (let l = 0; l < numLayers; l++) {
		        const layer = colr.layerRecords[firstIndex + l];
		        layers.push({
		          glyph: font.glyphs.get(layer.glyphID),
		          paletteIndex: layer.paletteIndex
		        });
		      }
		      return layers;
		    }
		    /**
		     * Adds one or more layers to a glyph, at the end or at a specific position.
		     * @param {integer} glyphIndex glyph index to add the layer(s) to.
		     * @param {Array|Object} layers layer object {glyph, paletteIndex}/{glyphID, paletteIndex} or array of layer objects.
		     * @param {integer?} position position to insert the layers at (will default to adding at the end).
		     */
		    add(glyphIndex, layers, position) {
		      const currentLayers = this.get(glyphIndex);
		      layers = Array.isArray(layers) ? layers : [layers];
		      if (position === void 0 || position === Infinity || position > currentLayers.length) {
		        position = currentLayers.length;
		      } else if (position < 0) {
		        position = currentLayers.length + 1 + position % (currentLayers.length + 1);
		        if (position >= currentLayers.length + 1) {
		          position -= currentLayers.length + 1;
		        }
		      }
		      const newLayers = [];
		      for (let i = 0; i < position; i++) {
		        const glyphID = Number.isInteger(currentLayers[i].glyph) ? currentLayers[i].glyph : currentLayers[i].glyph.index;
		        newLayers.push({
		          glyphID,
		          paletteIndex: currentLayers[i].paletteIndex
		        });
		      }
		      for (const layer of layers) {
		        const glyphID = Number.isInteger(layer.glyph) ? layer.glyph : layer.glyph.index;
		        newLayers.push({
		          glyphID,
		          paletteIndex: layer.paletteIndex
		        });
		      }
		      for (let i = position; i < currentLayers.length; i++) {
		        const glyphID = Number.isInteger(currentLayers[i].glyph) ? currentLayers[i].glyph : currentLayers[i].glyph.index;
		        newLayers.push({
		          glyphID,
		          paletteIndex: currentLayers[i].paletteIndex
		        });
		      }
		      this.updateColrTable(glyphIndex, newLayers);
		    }
		    /**
		     * Sets a color glyph layer's paletteIndex property to a new index
		     * @param {integer} glyphIndex glyph in the font by zero-based glyph index
		     * @param {integer} layerIndex layer in the glyph by zero-based layer index
		     * @param {integer} paletteIndex new color to set for the layer by zero-based index in any palette
		     */
		    setPaletteIndex(glyphIndex, layerIndex, paletteIndex) {
		      let layers = this.get(glyphIndex);
		      if (layers[layerIndex]) {
		        layers = layers.map((layer, index) => ({
		          glyphID: layer.glyph.index,
		          paletteIndex: index === layerIndex ? paletteIndex : layer.paletteIndex
		        }));
		        this.updateColrTable(glyphIndex, layers);
		      } else {
		        console.error("Invalid layer index");
		      }
		    }
		    /**
		     * Removes one or more layers from a glyph.
		     * @param {integer} glyphIndex glyph index to remove the layer(s) from
		     * @param {integer} start index to remove the layer at
		     * @param {integer?} end (optional) if provided, removes all layers from start index to (and including) end index
		     */
		    remove(glyphIndex, start, end = start) {
		      let currentLayers = this.get(glyphIndex);
		      currentLayers = currentLayers.map((layer) => ({
		        glyphID: layer.glyph.index,
		        paletteIndex: layer.paletteIndex
		      }));
		      currentLayers.splice(start, end - start + 1);
		      this.updateColrTable(glyphIndex, currentLayers);
		    }
		    /**
		     * Mainly used internally. Mainly used internally. Updates the colr table, adding a baseGlyphRecord if needed,
		     * ensuring that it's inserted at the correct position, updating numLayers, and adjusting firstLayerIndex values
		     * for all baseGlyphRecords according to any deletions or insertions.
		     * @param {integer} glyphIndex 
		     * @param {Array<Object>} layers array of layer objects {glyphID, paletteIndex}
		     */
		    updateColrTable(glyphIndex, layers) {
		      this.ensureCOLR();
		      const font = this.font;
		      const colr = font.tables.colr;
		      let index = binarySearchIndex(colr.baseGlyphRecords, "glyphID", glyphIndex);
		      const addBaseGlyph = index === -1;
		      if (addBaseGlyph) {
		        const newBaseGlyphRecord = { glyphID: glyphIndex, firstLayerIndex: colr.layerRecords.length, numLayers: 0 };
		        index = binarySearchInsert(colr.baseGlyphRecords, "glyphID", newBaseGlyphRecord);
		      }
		      const baseGlyphRecord = colr.baseGlyphRecords[index];
		      const originalNumLayers = baseGlyphRecord.numLayers;
		      const newNumLayers = layers.length;
		      const layerDiff = newNumLayers - originalNumLayers;
		      if (layerDiff > 0) {
		        const newLayers = layers.slice(originalNumLayers).map((layer) => ({
		          glyphID: layer.glyphID,
		          paletteIndex: layer.paletteIndex
		        }));
		        colr.layerRecords.splice(baseGlyphRecord.firstLayerIndex + originalNumLayers, 0, ...newLayers);
		      } else if (layerDiff < 0) {
		        colr.layerRecords.splice(baseGlyphRecord.firstLayerIndex + newNumLayers, -layerDiff);
		      }
		      for (let i = 0; i < Math.min(originalNumLayers, newNumLayers); i++) {
		        colr.layerRecords[baseGlyphRecord.firstLayerIndex + i] = {
		          glyphID: layers[i].glyphID,
		          paletteIndex: layers[i].paletteIndex
		        };
		      }
		      baseGlyphRecord.numLayers = newNumLayers;
		      if (layerDiff !== 0) {
		        for (let i = 0; i < colr.baseGlyphRecords.length; i++) {
		          const sibling = colr.baseGlyphRecords[i];
		          if (i === index || sibling.firstLayerIndex < baseGlyphRecord.firstLayerIndex) continue;
		          colr.baseGlyphRecords[i].firstLayerIndex += layerDiff;
		        }
		      }
		    }
		  };

		  // src/svgimages.mjs
		  var SVGImageManager = class {
		    /**
		     * @param {opentype.Font} font
		     */
		    constructor(font) {
		      this.font = font;
		      this.cache = /* @__PURE__ */ new WeakMap();
		    }
		    /**
		     * @param {number} glyphIndex
		     * @returns {SvgImage | undefined}
		     */
		    get(glyphIndex) {
		      const svgImageCacheEntry = this.getOrCreateSvgImageCacheEntry(glyphIndex);
		      return svgImageCacheEntry && svgImageCacheEntry.image;
		    }
		    /**
		     * @param {number} glyphIndex
		     * @returns {Promise<SvgImage> | undefined}
		     */
		    getAsync(glyphIndex) {
		      const svgImageCacheEntry = this.getOrCreateSvgImageCacheEntry(glyphIndex);
		      return svgImageCacheEntry && svgImageCacheEntry.promise;
		    }
		    /**
		     * @param {number} glyphIndex
		     * @returns {SVGImageCacheEntry | undefined}
		     */
		    getOrCreateSvgImageCacheEntry(glyphIndex) {
		      const svg = this.font.tables.svg;
		      if (svg === void 0) return;
		      const svgBuf = svg.get(glyphIndex);
		      if (svgBuf === void 0) return;
		      let svgDocCacheEntry = this.cache.get(svgBuf);
		      if (svgDocCacheEntry === void 0) {
		        svgDocCacheEntry = createSvgDocCacheEntry(svgBuf);
		        this.cache.set(svgBuf, svgDocCacheEntry);
		      }
		      let svgImageCacheEntry = svgDocCacheEntry.images.get(glyphIndex);
		      if (svgImageCacheEntry === void 0) {
		        svgImageCacheEntry = createSvgImageCacheEntry(this.font, svgDocCacheEntry.template, glyphIndex);
		        svgImageCacheEntry.promise.then((svgImage) => {
		          svgImageCacheEntry.image = svgImage;
		          if (typeof this.font.onGlyphUpdated === "function") {
		            try {
		              this.font.onGlyphUpdated(glyphIndex);
		            } catch (error) {
		              console.error("font.onGlyphUpdated", glyphIndex, error);
		            }
		          }
		        });
		        svgDocCacheEntry.images.set(glyphIndex, svgImageCacheEntry);
		      }
		      return svgImageCacheEntry;
		    }
		  };
		  function createSvgDocCacheEntry(svgBuf) {
		    return {
		      template: decodeSvgDocument(svgBuf).then(makeSvgTemplate),
		      images: /* @__PURE__ */ new Map()
		    };
		  }
		  function createSvgImageCacheEntry(font, svgTemplatePromise, glyphIndex) {
		    return {
		      promise: svgTemplatePromise.then((svgTemplate) => {
		        let svgText;
		        if (typeof svgTemplate === "string") {
		          svgText = svgTemplate;
		        } else {
		          svgTemplate[4] = glyphIndex;
		          svgText = svgTemplate.join("");
		        }
		        const svgImage = makeSvgImage(svgText, font.unitsPerEm);
		        return svgImage.image.decode().then(() => svgImage);
		      }),
		      image: void 0
		    };
		  }
		  var decodeSvgDocument = typeof DecompressionStream === "function" ? decodeSvgDocumentWithDecompressionStream : decodeSvgDocumentWithTinyInflate;
		  function decodeSvgDocumentWithTinyInflate(buf) {
		    try {
		      return Promise.resolve(new TextDecoder().decode(isGzip(buf) ? unGzip(buf) : buf));
		    } catch (error) {
		      return Promise.reject(error);
		    }
		  }
		  function decodeSvgDocumentWithDecompressionStream(buf) {
		    if (isGzip(buf)) {
		      return new Response(new Response(buf).body.pipeThrough(new DecompressionStream("gzip"))).text();
		    }
		    try {
		      return Promise.resolve(new TextDecoder().decode(buf));
		    } catch (error) {
		      return Promise.reject(error);
		    }
		  }
		  function makeSvgTemplate(text) {
		    const documentStart = text.indexOf("<svg");
		    const contentStart = text.indexOf(">", documentStart + 4) + 1;
		    if (/ id=['"]glyph\d+['"]/.test(text.substring(documentStart, contentStart))) {
		      return text;
		    }
		    const contentEnd = text.lastIndexOf("</svg>");
		    return [
		      text.substring(0, contentStart),
		      "<defs>",
		      text.substring(contentStart, contentEnd),
		      '</defs><use href="#glyph',
		      "",
		      '"/>',
		      text.substring(contentEnd)
		    ];
		  }
		  function makeSvgImage(text, unitsPerEm) {
		    const svgDocument = new DOMParser().parseFromString(text, "image/svg+xml");
		    const svg = svgDocument.documentElement;
		    const viewBoxVal = svg.viewBox.baseVal;
		    const widthVal = svg.width.baseVal;
		    const heightVal = svg.height.baseVal;
		    let xScale = 1;
		    let yScale = 1;
		    if (viewBoxVal.width > 0 && viewBoxVal.height > 0) {
		      if (widthVal.unitType === 1) {
		        xScale = widthVal.valueInSpecifiedUnits / viewBoxVal.width;
		        yScale = heightVal.unitType === 1 ? heightVal.valueInSpecifiedUnits / viewBoxVal.height : xScale;
		      } else if (heightVal.unitType === 1) {
		        yScale = heightVal.valueInSpecifiedUnits / viewBoxVal.height;
		        xScale = yScale;
		      } else if (unitsPerEm) {
		        xScale = unitsPerEm / viewBoxVal.width;
		        yScale = unitsPerEm / viewBoxVal.height;
		      }
		    }
		    const div = document.createElement("div");
		    div.style.position = "fixed";
		    div.style.visibility = "hidden";
		    div.appendChild(svg);
		    document.body.appendChild(div);
		    const bbox = svg.getBBox();
		    document.body.removeChild(div);
		    const leftSideBearing = (bbox.x - viewBoxVal.x) * xScale;
		    const baseline = (viewBoxVal.y - bbox.y) * yScale;
		    const width = bbox.width * xScale;
		    const height = bbox.height * yScale;
		    svg.setAttribute("viewBox", [bbox.x, bbox.y, bbox.width, bbox.height].join(" "));
		    if (xScale !== 1) svg.setAttribute("width", width);
		    if (yScale !== 1) svg.setAttribute("height", height);
		    const image = new Image(width, height);
		    image.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.outerHTML);
		    return { leftSideBearing, baseline, image };
		  }

		  // src/tables/glyf.mjs
		  var _resolving = /* @__PURE__ */ new WeakMap();
		  function parseGlyphCoordinate(p, flag, previousValue, shortVectorBitMask, sameBitMask) {
		    let v;
		    if ((flag & shortVectorBitMask) > 0) {
		      v = p.parseByte();
		      if ((flag & sameBitMask) === 0) {
		        v = -v;
		      }
		      v = previousValue + v;
		    } else {
		      if ((flag & sameBitMask) > 0) {
		        v = previousValue;
		      } else {
		        v = previousValue + p.parseShort();
		      }
		    }
		    return v;
		  }
		  function parseGlyph(glyph, data, start) {
		    const p = new parse_default.Parser(data, start);
		    glyph._numberOfContours = p.parseShort();
		    glyph._xMin = p.parseShort();
		    glyph._yMin = p.parseShort();
		    glyph._xMax = p.parseShort();
		    glyph._yMax = p.parseShort();
		    let flags;
		    let flag;
		    if (glyph._numberOfContours > 0) {
		      const endPointIndices = glyph.endPointIndices = [];
		      for (let i = 0; i < glyph._numberOfContours; i += 1) {
		        endPointIndices.push(p.parseUShort());
		      }
		      glyph.instructionLength = p.parseUShort();
		      glyph.instructions = [];
		      for (let i = 0; i < glyph.instructionLength; i += 1) {
		        glyph.instructions.push(p.parseByte());
		      }
		      const numberOfCoordinates = endPointIndices[endPointIndices.length - 1] + 1;
		      flags = [];
		      for (let i = 0; i < numberOfCoordinates; i += 1) {
		        flag = p.parseByte();
		        flags.push(flag);
		        if ((flag & 8) > 0) {
		          const repeatCount = p.parseByte();
		          for (let j = 0; j < repeatCount; j += 1) {
		            flags.push(flag);
		            i += 1;
		          }
		        }
		      }
		      check_default.argument(flags.length === numberOfCoordinates, "Bad flags.");
		      if (endPointIndices.length > 0) {
		        const points = [];
		        let point;
		        if (numberOfCoordinates > 0) {
		          for (let i = 0; i < numberOfCoordinates; i += 1) {
		            flag = flags[i];
		            point = {};
		            point.onCurve = !!(flag & 1);
		            point.lastPointOfContour = endPointIndices.indexOf(i) >= 0;
		            points.push(point);
		          }
		          let px = 0;
		          for (let i = 0; i < numberOfCoordinates; i += 1) {
		            flag = flags[i];
		            point = points[i];
		            point.x = parseGlyphCoordinate(p, flag, px, 2, 16);
		            px = point.x;
		          }
		          let py = 0;
		          for (let i = 0; i < numberOfCoordinates; i += 1) {
		            flag = flags[i];
		            point = points[i];
		            point.y = parseGlyphCoordinate(p, flag, py, 4, 32);
		            py = point.y;
		          }
		        }
		        glyph.points = points;
		      } else {
		        glyph.points = [];
		      }
		    } else if (glyph._numberOfContours === 0) {
		      glyph.points = [];
		    } else {
		      glyph.isComposite = true;
		      glyph.points = [];
		      glyph.components = [];
		      let moreComponents = true;
		      while (moreComponents) {
		        flags = p.parseUShort();
		        const component = {
		          glyphIndex: p.parseUShort(),
		          xScale: 1,
		          scale01: 0,
		          scale10: 0,
		          yScale: 1,
		          dx: 0,
		          dy: 0
		        };
		        if ((flags & 1) > 0) {
		          if ((flags & 2) > 0) {
		            component.dx = p.parseShort();
		            component.dy = p.parseShort();
		          } else {
		            component.matchedPoints = [p.parseUShort(), p.parseUShort()];
		          }
		        } else {
		          if ((flags & 2) > 0) {
		            component.dx = p.parseChar();
		            component.dy = p.parseChar();
		          } else {
		            component.matchedPoints = [p.parseByte(), p.parseByte()];
		          }
		        }
		        if ((flags & 8) > 0) {
		          component.xScale = component.yScale = p.parseF2Dot14();
		        } else if ((flags & 64) > 0) {
		          component.xScale = p.parseF2Dot14();
		          component.yScale = p.parseF2Dot14();
		        } else if ((flags & 128) > 0) {
		          component.xScale = p.parseF2Dot14();
		          component.scale01 = p.parseF2Dot14();
		          component.scale10 = p.parseF2Dot14();
		          component.yScale = p.parseF2Dot14();
		        }
		        glyph.components.push(component);
		        moreComponents = !!(flags & 32);
		      }
		      if (flags & 256) {
		        glyph.instructionLength = p.parseUShort();
		        glyph.instructions = [];
		        for (let i = 0; i < glyph.instructionLength; i += 1) {
		          glyph.instructions.push(p.parseByte());
		        }
		      }
		    }
		  }
		  function transformPoints(points, transform) {
		    const newPoints = [];
		    for (let i = 0; i < points.length; i += 1) {
		      const pt = points[i];
		      const newPt = {
		        x: transform.xScale * pt.x + transform.scale10 * pt.y + transform.dx,
		        y: transform.scale01 * pt.x + transform.yScale * pt.y + transform.dy,
		        onCurve: pt.onCurve,
		        lastPointOfContour: pt.lastPointOfContour
		      };
		      newPoints.push(newPt);
		    }
		    return newPoints;
		  }
		  function getContours(points) {
		    const contours = [];
		    let currentContour = [];
		    for (let i = 0; i < points.length; i += 1) {
		      const pt = points[i];
		      currentContour.push(pt);
		      if (pt.lastPointOfContour) {
		        contours.push(currentContour);
		        currentContour = [];
		      }
		    }
		    check_default.argument(currentContour.length === 0, "There are still points left in the current contour.");
		    return contours;
		  }
		  function getPath(points) {
		    const p = new path_default();
		    if (!points) {
		      return p;
		    }
		    const contours = getContours(points);
		    for (let contourIndex = 0; contourIndex < contours.length; ++contourIndex) {
		      const contour = contours[contourIndex];
		      let curr = contour[contour.length - 1];
		      let next = contour[0];
		      if (curr.onCurve) {
		        p.moveTo(curr.x, curr.y);
		      } else {
		        if (next.onCurve) {
		          p.moveTo(next.x, next.y);
		        } else {
		          const start = { x: (curr.x + next.x) * 0.5, y: (curr.y + next.y) * 0.5 };
		          p.moveTo(start.x, start.y);
		        }
		      }
		      for (let i = 0; i < contour.length; ++i) {
		        curr = next;
		        next = contour[(i + 1) % contour.length];
		        if (curr.onCurve) {
		          p.lineTo(curr.x, curr.y);
		        } else {
		          let next2 = next;
		          if (!next.onCurve) {
		            next2 = { x: (curr.x + next.x) * 0.5, y: (curr.y + next.y) * 0.5 };
		          }
		          p.quadraticCurveTo(curr.x, curr.y, next2.x, next2.y);
		        }
		      }
		      p.closePath();
		    }
		    return p;
		  }
		  function buildPath(glyphs, glyph) {
		    if (glyph.isComposite) {
		      if (!_resolving.has(glyphs)) {
		        _resolving.set(glyphs, /* @__PURE__ */ new Set());
		      }
		      const resolving = _resolving.get(glyphs);
		      resolving.add(glyph.index);
		      try {
		        for (let j = 0; j < glyph.components.length; j += 1) {
		          const component = glyph.components[j];
		          if (resolving.has(component.glyphIndex)) {
		            continue;
		          }
		          const componentGlyph = glyphs.get(component.glyphIndex);
		          componentGlyph.getPath();
		          if (componentGlyph.points) {
		            let transformedPoints;
		            if (component.matchedPoints === void 0) {
		              transformedPoints = transformPoints(componentGlyph.points, component);
		            } else {
		              if (component.matchedPoints[0] > glyph.points.length - 1 || component.matchedPoints[1] > componentGlyph.points.length - 1) {
		                throw Error("Matched points out of range in " + glyph.name);
		              }
		              const firstPt = glyph.points[component.matchedPoints[0]];
		              let secondPt = componentGlyph.points[component.matchedPoints[1]];
		              const transform = {
		                xScale: component.xScale,
		                scale01: component.scale01,
		                scale10: component.scale10,
		                yScale: component.yScale,
		                dx: 0,
		                dy: 0
		              };
		              secondPt = transformPoints([secondPt], transform)[0];
		              transform.dx = firstPt.x - secondPt.x;
		              transform.dy = firstPt.y - secondPt.y;
		              transformedPoints = transformPoints(componentGlyph.points, transform);
		            }
		            glyph.points = glyph.points.concat(transformedPoints);
		          }
		        }
		      } finally {
		        resolving.delete(glyph.index);
		      }
		    }
		    return getPath(glyph.points);
		  }
		  function parseGlyfTableAll(data, start, loca, font) {
		    const glyphs = new glyphset_default.GlyphSet(font);
		    for (let i = 0; i < loca.length - 1; i += 1) {
		      const offset = loca[i];
		      const nextOffset = loca[i + 1];
		      if (offset !== nextOffset) {
		        glyphs.push(i, glyphset_default.ttfGlyphLoader(font, i, parseGlyph, data, start + offset, buildPath));
		      } else {
		        glyphs.push(i, glyphset_default.glyphLoader(font, i));
		      }
		    }
		    return glyphs;
		  }
		  function parseGlyfTableOnLowMemory(data, start, loca, font) {
		    const glyphs = new glyphset_default.GlyphSet(font);
		    font._push = function(i) {
		      const offset = loca[i];
		      const nextOffset = loca[i + 1];
		      if (offset !== nextOffset) {
		        glyphs.push(i, glyphset_default.ttfGlyphLoader(font, i, parseGlyph, data, start + offset, buildPath));
		      } else {
		        glyphs.push(i, glyphset_default.glyphLoader(font, i));
		      }
		    };
		    return glyphs;
		  }
		  function parseGlyfTable(data, start, loca, font, opt) {
		    if (opt.lowMemory)
		      return parseGlyfTableOnLowMemory(data, start, loca, font);
		    else
		      return parseGlyfTableAll(data, start, loca, font);
		  }
		  var glyf_default = { getPath, parse: parseGlyfTable };

		  // src/variationprocessor.mjs
		  var VariationProcessor = class {
		    constructor(font) {
		      this.font = font;
		    }
		    /**
		     * Modifies a coords object to make sure that tags have a length of 4
		     * @param {Object} coords - variation coordinates
		     */
		    normalizeCoordTags(coords) {
		      for (const tag in coords) {
		        if (tag.length < 4) {
		          const padded = tag.padEnd(4, " ");
		          coords[padded] === void 0 && (coords[padded] = coords[tag]);
		          delete coords[tag];
		        }
		      }
		    }
		    /**
		     * Normalizes the coordinates from the axis ranges to a range of -1 to 1.
		     * @param {Object} coords - The coordinates object to normalize.
		     * @returns {Array<number>} The normalized coordinates as an array
		     */
		    getNormalizedCoords(coords) {
		      if (!coords) {
		        coords = this.font.variation.get();
		      }
		      let normalized = [];
		      this.normalizeCoordTags(coords);
		      for (let i = 0; i < this.fvar().axes.length; i++) {
		        const axis = this.fvar().axes[i];
		        let tagValue = coords[axis.tag];
		        if (tagValue === void 0) {
		          tagValue = axis.defaultValue;
		        }
		        if (tagValue < axis.defaultValue) {
		          normalized.push((tagValue - axis.defaultValue + Number.EPSILON) / (axis.defaultValue - axis.minValue + Number.EPSILON));
		        } else {
		          normalized.push((tagValue - axis.defaultValue + Number.EPSILON) / (axis.maxValue - axis.defaultValue + Number.EPSILON));
		        }
		      }
		      if (this.avar()) {
		        for (let i = 0; i < this.avar().axisSegmentMaps.length; i++) {
		          let segment = this.avar().axisSegmentMaps[i];
		          for (let j = 0; j < segment.axisValueMaps.length; j++) {
		            let pair = segment.axisValueMaps[j];
		            if (j >= 1 && normalized[i] < pair.fromCoordinate) {
		              let prev = segment.axisValueMaps[j - 1];
		              normalized[i] = ((normalized[i] - prev.fromCoordinate) * (pair.toCoordinate - prev.toCoordinate) + Number.EPSILON) / (pair.fromCoordinate - prev.fromCoordinate + Number.EPSILON) + prev.toCoordinate;
		              break;
		            }
		          }
		        }
		      }
		      return normalized;
		    }
		    /**
		     * Interpolates points within a glyph if deltas are not provided for all points.
		     * @param {Array<Object>} points - The points to be interpolated.
		     * @param {Array<Object>} glyphPoints - Reference points from the glyph.
		     * @param {Object} deltaMap - A map indicating which points have deltas.
		     */
		    interpolatePoints(points, glyphPoints, deltaMap) {
		      if (points.length === 0) {
		        return;
		      }
		      let pointIndex = 0;
		      while (pointIndex < points.length) {
		        let firstPoint = pointIndex;
		        let endPoint = pointIndex;
		        let point = points[endPoint];
		        while (!point.lastPointOfContour) {
		          point = points[++endPoint];
		        }
		        while (pointIndex <= endPoint && !deltaMap[pointIndex]) {
		          pointIndex++;
		        }
		        if (pointIndex > endPoint) {
		          continue;
		        }
		        let firstDelta = pointIndex;
		        let curDelta = pointIndex;
		        pointIndex++;
		        while (pointIndex <= endPoint) {
		          if (deltaMap[pointIndex]) {
		            this.deltaInterpolate(curDelta + 1, pointIndex - 1, curDelta, pointIndex, glyphPoints, points);
		            curDelta = pointIndex;
		          }
		          pointIndex++;
		        }
		        if (curDelta === firstDelta) {
		          this.deltaShift(firstPoint, endPoint, curDelta, glyphPoints, points);
		        } else {
		          this.deltaInterpolate(curDelta + 1, endPoint, curDelta, firstDelta, glyphPoints, points);
		          if (firstDelta > 0) {
		            this.deltaInterpolate(firstPoint, firstDelta - 1, curDelta, firstDelta, glyphPoints, points);
		          }
		        }
		        pointIndex = endPoint + 1;
		      }
		    }
		    /**
		     * Interpolates delta values between two points.
		     * @param {number} p1 - Start point index for interpolation.
		     * @param {number} p2 - End point index for interpolation.
		     * @param {number} ref1 - Reference point index for the start delta.
		     * @param {number} ref2 - Reference point index for the end delta.
		     * @param {Array<Object>} glyphPoints - Reference points from the glyph.
		     * @param {Array<Object>} points - The points to be adjusted.
		     */
		    deltaInterpolate(p1, p2, ref1, ref2, glyphPoints, points) {
		      if (p1 > p2) {
		        return;
		      }
		      let iterable = ["x", "y"];
		      for (let i = 0; i < iterable.length; i++) {
		        let k = iterable[i];
		        if (glyphPoints[ref1][k] > glyphPoints[ref2][k]) {
		          var p = ref1;
		          ref1 = ref2;
		          ref2 = p;
		        }
		        let in1 = glyphPoints[ref1][k];
		        let in2 = glyphPoints[ref2][k];
		        let out1 = points[ref1][k];
		        let out2 = points[ref2][k];
		        if (in1 !== in2 || out1 === out2) {
		          let scale = in1 === in2 ? 0 : (out2 - out1) / (in2 - in1);
		          for (let p3 = p1; p3 <= p2; p3++) {
		            let out = glyphPoints[p3][k];
		            if (out <= in1) {
		              out += out1 - in1;
		            } else if (out >= in2) {
		              out += out2 - in2;
		            } else {
		              out = out1 + (out - in1) * scale;
		            }
		            points[p3][k] = out;
		          }
		        }
		      }
		    }
		    /**
		     * Applies a delta shift to a range of points based on a reference point.
		     * @param {number} p1 - Start point index for shifting.
		     * @param {number} p2 - End point index for shifting.
		     * @param {number} ref - Reference point index.
		     * @param {Array<Object>} glyphPoints - Reference points from the glyph.
		     * @param {Array<Object>} points - The points to be shifted.
		     */
		    deltaShift(p1, p2, ref, glyphPoints, points) {
		      let deltaX = points[ref].x - glyphPoints[ref].x;
		      let deltaY = points[ref].y - glyphPoints[ref].y;
		      if (deltaX === 0 && deltaY === 0) {
		        return;
		      }
		      for (let p = p1; p <= p2; p++) {
		        if (p !== ref) {
		          points[p].x += deltaX;
		          points[p].y += deltaY;
		        }
		      }
		    }
		    /**
		     * Transforms glyph components based on variation data.
		     * @param {Glyph} glyph - The composite glyph to transform.
		     * @param {Array<Object>} transformedPoints - Points that are already transformed.
		     * @param {Object} coords - Variation coordinates.
		     * @param {Array<number>} tuplePoints - Points that are part of the tuple.
		     * @param {Object} header - Header information from the variation data.
		     * @param {number} factor - The scaling factor for the transformation.
		     */
		    transformComponents(glyph, transformedPoints, coords, tuplePoints, header, factor) {
		      let pointsIndex = 0;
		      for (let c = 0; c < glyph.components.length; c++) {
		        const component = glyph.components[c];
		        const componentGlyph = this.font.glyphs.get(component.glyphIndex);
		        const componentTransform = copyComponent(component);
		        const deltaIndex = tuplePoints.indexOf(c);
		        if (deltaIndex > -1) {
		          componentTransform.dx += Math.round(header.deltas[deltaIndex] * factor);
		          componentTransform.dy += Math.round(header.deltasY[deltaIndex] * factor);
		        }
		        const transformedComponentPoints = transformPoints(this.getTransform(componentGlyph, coords).points, componentTransform);
		        transformedPoints.splice(pointsIndex, transformedComponentPoints.length, ...transformedComponentPoints);
		        pointsIndex += componentGlyph.points.length;
		      }
		    }
		    applyTupleVariationStore(variationData, points, coords, flavor = "gvar", args = {}) {
		      if (!coords) {
		        coords = this.font.variation.get();
		      }
		      const normalizedCoords = this.getNormalizedCoords(coords);
		      const { headers, sharedPoints } = variationData;
		      const axisCount = this.fvar().axes.length;
		      let transformedPoints;
		      if (flavor === "gvar") {
		        transformedPoints = points.map(copyPoint);
		      } else if (flavor === "cvar") {
		        transformedPoints = [...points];
		      }
		      for (let h = 0; h < headers.length; h++) {
		        const header = headers[h];
		        let factor = 1;
		        for (let a = 0; a < axisCount; a++) {
		          let tupleCoords = [0];
		          switch (flavor) {
		            case "gvar":
		              tupleCoords = header.peakTuple ? header.peakTuple : this.gvar().sharedTuples[header.sharedTupleRecordsIndex];
		              break;
		            case "cvar":
		              tupleCoords = header.peakTuple;
		              break;
		          }
		          if (tupleCoords[a] === 0) {
		            continue;
		          }
		          if (normalizedCoords[a] === 0) {
		            factor = 0;
		            break;
		          }
		          if (!header.intermediateStartTuple) {
		            if (normalizedCoords[a] < Math.min(0, tupleCoords[a]) || normalizedCoords[a] > Math.max(0, tupleCoords[a])) {
		              factor = 0;
		              break;
		            }
		            factor = (factor * normalizedCoords[a] + Number.EPSILON) / (tupleCoords[a] + Number.EPSILON);
		          } else {
		            if (normalizedCoords[a] < header.intermediateStartTuple[a] || normalizedCoords[a] > header.intermediateEndTuple[a]) {
		              factor = 0;
		              break;
		            } else if (normalizedCoords[a] < tupleCoords[a]) {
		              factor = factor * (normalizedCoords[a] - header.intermediateStartTuple[a] + Number.EPSILON) / (tupleCoords[a] - header.intermediateStartTuple[a] + Number.EPSILON);
		            } else {
		              factor = factor * (header.intermediateEndTuple[a] - normalizedCoords[a] + Number.EPSILON) / (header.intermediateEndTuple[a] - tupleCoords[a] + Number.EPSILON);
		            }
		          }
		        }
		        if (factor === 0) {
		          continue;
		        }
		        const tuplePoints = header.privatePoints.length ? header.privatePoints : sharedPoints;
		        if (flavor === "gvar" && args.glyph && args.glyph.isComposite) {
		          this.transformComponents(args.glyph, transformedPoints, coords, tuplePoints, header, factor);
		        } else if (tuplePoints.length === 0) {
		          for (let i = 0; i < transformedPoints.length; i++) {
		            const point = transformedPoints[i];
		            if (flavor === "gvar") {
		              transformedPoints[i] = {
		                x: Math.round(point.x + header.deltas[i] * factor),
		                y: Math.round(point.y + header.deltasY[i] * factor),
		                onCurve: point.onCurve,
		                lastPointOfContour: point.lastPointOfContour
		              };
		            } else if (flavor === "cvar") {
		              transformedPoints[i] = Math.round(point + header.deltas[i] * factor);
		            }
		          }
		        } else {
		          let interpolatedPoints;
		          if (flavor === "gvar") {
		            interpolatedPoints = transformedPoints.map(copyPoint);
		          } else if (flavor === "cvar") {
		            interpolatedPoints = transformedPoints;
		          }
		          const deltaMap = Array(points.length).fill(false);
		          for (let i = 0; i < tuplePoints.length; i++) {
		            let pointIndex = tuplePoints[i];
		            if (pointIndex < points.length) {
		              let point = interpolatedPoints[pointIndex];
		              if (flavor === "gvar") {
		                deltaMap[pointIndex] = true;
		                point.x += header.deltas[i] * factor;
		                point.y += header.deltasY[i] * factor;
		              } else if (flavor === "cvar") {
		                transformedPoints[pointIndex] = Math.round(point + header.deltas[i] * factor);
		              }
		            }
		          }
		          if (flavor === "gvar") {
		            this.interpolatePoints(interpolatedPoints, transformedPoints, deltaMap);
		            for (let i = 0; i < points.length; i++) {
		              let deltaX = interpolatedPoints[i].x - transformedPoints[i].x;
		              let deltaY = interpolatedPoints[i].y - transformedPoints[i].y;
		              transformedPoints[i].x = Math.round(transformedPoints[i].x + deltaX);
		              transformedPoints[i].y = Math.round(transformedPoints[i].y + deltaY);
		            }
		          }
		        }
		      }
		      return transformedPoints;
		    }
		    /**
		     * Retrieves a transformed copy of a glyph based on the provided variation coordinates, or the glyph itself if no variation was applied
		     * @param {opentype.Glyph|number} glyph - Glyph or index of glyph to transform.
		     * @param {Object} coords - Variation coords object (will fall back to variation coords in the defaultRenderOptions)
		     * @returns {opentype.Glyph} - The transformed glyph.
		     */
		    getTransform(glyph, coords) {
		      if (Number.isInteger(glyph)) {
		        glyph = this.font.glyphs.get(glyph);
		      }
		      const hasBlend = glyph.getBlendPath;
		      const hasPoints = !!(glyph.points && glyph.points.length);
		      let transformedGlyph = glyph;
		      if (hasBlend || hasPoints) {
		        if (!coords) {
		          coords = this.font.variation.get();
		        }
		        if (hasPoints) {
		          const variationData = this.gvar() && this.gvar().glyphVariations[glyph.index];
		          if (variationData) {
		            const glyphPoints = glyph.points;
		            let transformedPoints = this.applyTupleVariationStore(variationData, glyphPoints, coords, "gvar", { glyph });
		            transformedGlyph = new glyph_default(Object.assign({}, glyph, { points: transformedPoints, path: getPath(transformedPoints) }));
		          }
		        } else if (hasBlend) {
		          const blendPath = glyph.getBlendPath(coords);
		          transformedGlyph = new glyph_default(Object.assign({}, glyph, { path: blendPath }));
		        }
		      }
		      if (this.font.tables.hvar) {
		        glyph._advanceWidth = typeof glyph._advanceWidth !== "undefined" ? glyph._advanceWidth : glyph.advanceWidth;
		        glyph.advanceWidth = transformedGlyph.advanceWidth = Math.round(glyph._advanceWidth + this.getVariableAdjustment(transformedGlyph.index, "hvar", "advanceWidth", coords));
		        glyph._leftSideBearing = typeof glyph._leftSideBearing !== "undefined" ? glyph._leftSideBearing : glyph.leftSideBearing;
		        glyph.leftSideBearing = transformedGlyph.leftSideBearing = Math.round(glyph._leftSideBearing + this.getVariableAdjustment(transformedGlyph.index, "hvar", "lsb", coords));
		      }
		      return transformedGlyph;
		    }
		    getCvarTransform(coords) {
		      const cvt = this.font.tables.cvt;
		      const variationData = this.cvar();
		      if (!cvt || !cvt.length || !variationData || !variationData.headers.length) return cvt;
		      return this.applyTupleVariationStore(variationData, cvt, coords, "cvar");
		    }
		    /**
		     * Calculates the variable adjustment for a glyph property from variation data.
		     * @param {number} gid - Glyph ID.
		     * @param {string} tableName - The name of the variation data table.
		     * @param {string} parameter - The property to adjust.
		     * @param {Object} coords - Variation coordinates.
		     * @returns {number} - The calculated adjustment.
		     */
		    getVariableAdjustment(gid, tableName, parameter, coords) {
		      coords = coords || this.font.variation.get();
		      let outerIndex, innerIndex;
		      const table = this.font.tables[tableName];
		      if (!table) {
		        throw Error(`trying to get variation adjustment from non-existent table "${table}"`);
		      }
		      if (!table.itemVariationStore) {
		        throw Error(`trying to get variation adjustment from table "${table}" which does not have an itemVariationStore`);
		      }
		      const mapSize = table[parameter] && table[parameter].map.length;
		      if (mapSize) {
		        let i = gid;
		        if (i >= mapSize) {
		          i = mapSize - 1;
		        }
		        ({ outerIndex, innerIndex } = table[parameter].map[i]);
		      } else {
		        outerIndex = 0;
		        innerIndex = gid;
		      }
		      return this.getDelta(table.itemVariationStore, outerIndex, innerIndex, coords);
		    }
		    /**
		     * Retrieves the delta value from a variation store.
		     * @param {Object} itemStore - The item variation store.
		     * @param {number} outerIndex - The outer index in the variation subtables.
		     * @param {number} innerIndex - The inner index in the delta sets.
		     * @param {Object} coords - Variation coordinates.
		     * @returns {number} - The delta value.
		     */
		    getDelta(itemStore, outerIndex, innerIndex, coords) {
		      if (outerIndex >= itemStore.itemVariationSubtables.length) {
		        return 0;
		      }
		      let varData = itemStore.itemVariationSubtables[outerIndex];
		      if (innerIndex >= varData.deltaSets.length) {
		        return 0;
		      }
		      let deltaSet = varData.deltaSets[innerIndex];
		      let blendVector = this.getBlendVector(itemStore, outerIndex, coords);
		      let netAdjustment = 0;
		      for (let master = 0; master < varData.regionIndexes.length; master++) {
		        netAdjustment += deltaSet[master] * blendVector[master];
		      }
		      return netAdjustment;
		    }
		    /**
		     * Calculates the blend vector for a set of variation coordinates.
		     * @param {Object} itemStore - The item variation store.
		     * @param {number} itemIndex - Index of the current item in the variation subtables.
		     * @param {Object} coords - Variation coordinates.
		     * @returns {Array<number>} - The blend vector for the given coordinates.
		     */
		    getBlendVector(itemStore, itemIndex, coords) {
		      if (!coords) {
		        coords = this.font.variation.get();
		      }
		      let varData = itemStore.itemVariationSubtables[itemIndex];
		      const normalizedCoords = this.getNormalizedCoords(coords);
		      let blendVector = [];
		      for (let master = 0; master < varData.regionIndexes.length; master++) {
		        let scalar = 1;
		        let regionIndex = varData.regionIndexes[master];
		        let axes = itemStore.variationRegions[regionIndex].regionAxes;
		        for (let j = 0; j < axes.length; j++) {
		          let axis = axes[j];
		          let axisScalar;
		          if (axis.startCoord > axis.peakCoord || axis.peakCoord > axis.endCoord) {
		            axisScalar = 1;
		          } else if (axis.startCoord < 0 && axis.endCoord > 0 && axis.peakCoord !== 0) {
		            axisScalar = 1;
		          } else if (axis.peakCoord === 0) {
		            axisScalar = 1;
		          } else if (normalizedCoords[j] < axis.startCoord || normalizedCoords[j] > axis.endCoord) {
		            axisScalar = 0;
		          } else {
		            if (normalizedCoords[j] === axis.peakCoord) {
		              axisScalar = 1;
		            } else if (normalizedCoords[j] < axis.peakCoord) {
		              axisScalar = (normalizedCoords[j] - axis.startCoord + Number.EPSILON) / (axis.peakCoord - axis.startCoord + Number.EPSILON);
		            } else {
		              axisScalar = (axis.endCoord - normalizedCoords[j] + Number.EPSILON) / (axis.endCoord - axis.peakCoord + Number.EPSILON);
		            }
		          }
		          scalar *= axisScalar;
		        }
		        blendVector[master] = scalar;
		      }
		      return blendVector;
		    }
		    /**
		     * Helper method that returns the font's avar table if present
		     * @returns {Object|undefined}
		     */
		    avar() {
		      return this.font.tables.avar;
		    }
		    /**
		     * Helper method that returns the font's cvar table if present
		     * @returns {Object|undefined}
		     */
		    cvar() {
		      return this.font.tables.cvar;
		    }
		    /**
		     * Helper method that returns the font's fvar table if present
		     * @returns {Object|undefined}
		     */
		    fvar() {
		      return this.font.tables.fvar;
		    }
		    /**
		     * Helper method that returns the font's gvar table if present
		     * @returns {Object|undefined}
		     */
		    gvar() {
		      return this.font.tables.gvar;
		    }
		    /**
		     * Helper method that returns the font's hvar table if present
		     * @returns {Object|undefined}
		     */
		    hvar() {
		      return this.font.tables.hvar;
		    }
		  };

		  // src/variation.mjs
		  var VariationManager = class {
		    constructor(font) {
		      this.font = font;
		      this.process = new VariationProcessor(this.font);
		      this.activateDefaultVariation();
		      this.getTransform = this.process.getTransform.bind(this.process);
		    }
		    /**
		     * Tries to determine the default instance and sets its variation data as the font.defaultRenderOptions.
		     * If not defaultInstance can be determined, the default coordinates of all axes are used.
		     */
		    activateDefaultVariation() {
		      const defaultInstance = this.getDefaultInstanceIndex();
		      if (defaultInstance > -1) {
		        this.set(defaultInstance);
		      } else {
		        this.set(this.getDefaultCoordinates());
		      }
		    }
		    /**
		     * Retrieves the default coordinates for the font's variation axes.
		     * @returns {Object} An object mapping axis tags to their default values.
		     */
		    getDefaultCoordinates() {
		      return this.fvar().axes.reduce((acc, axis) => {
		        acc[axis.tag] = axis.defaultValue;
		        return acc;
		      }, {});
		    }
		    /**
		     * Gets the index of the default variation instance or -1 if not able to determine
		     * @returns {integer} default index or -1
		     */
		    getDefaultInstanceIndex() {
		      const defaultCoordinates = this.getDefaultCoordinates();
		      let defaultInstanceIndex = this.getInstanceIndex(defaultCoordinates);
		      if (defaultInstanceIndex < 0) {
		        defaultInstanceIndex = this.fvar().instances.findIndex((instance) => instance.name && instance.name.en === "Regular");
		      }
		      return defaultInstanceIndex;
		    }
		    /**
		     * Retrieves the index of the variation instance matching the coordinates object or -1 if not able to determine
		     * @param {integer|Object} coordinates An object where keys are axis tags and values are the corresponding variation values.
		     * @returns {integer} The index of the matching instance or -1 if no match is found.
		     */
		    getInstanceIndex(coordinates) {
		      return this.fvar().instances.findIndex(
		        (instance) => Object.keys(coordinates).every(
		          (axis) => instance.coordinates[axis] === coordinates[axis]
		        )
		      );
		    }
		    /**
		     * Retrieves a variation instance by its zero-based index
		     * @param {integer} index - zero-based index of the variation instance
		     * @returns {Object} - variation instance or null if the index is invalid.
		     */
		    getInstance(index) {
		      return this.fvar().instances && this.fvar().instances[index];
		    }
		    /**
		     * Set the variation coordinates to use by default for rendering in the font.defaultRenderOptions
		     * @param {integer|Object} instanceIdOrObject Either the zero-based index of a variation instance or an object with axis tags as keys and variation values as values
		     */
		    set(instanceIdOrObject) {
		      let variationData;
		      if (Number.isInteger(instanceIdOrObject)) {
		        const instance = this.getInstance(instanceIdOrObject);
		        if (!instance) {
		          throw Error(`Invalid instance index ${instanceIdOrObject}`);
		        }
		        variationData = { ...instance.coordinates };
		      } else {
		        variationData = instanceIdOrObject;
		        this.process.normalizeCoordTags(variationData);
		      }
		      variationData = Object.assign(
		        {},
		        this.font.defaultRenderOptions.variation,
		        variationData
		      );
		      this.font.defaultRenderOptions = Object.assign(
		        {},
		        this.font.defaultRenderOptions,
		        { variation: variationData }
		      );
		    }
		    /**
		     * Returns the variation coordinates currently set in the font.defaultRenderOptions
		     * @returns {Object}
		     */
		    get() {
		      return Object.assign({}, this.font.defaultRenderOptions.variation);
		    }
		    /**
		     * Helper method that returns the font's avar table if present
		     * @returns {Object|undefined}
		     */
		    avar() {
		      return this.font.tables.avar;
		    }
		    /**
		     * Helper method that returns the font's cvar table if present
		     * @returns {Object|undefined}
		     */
		    cvar() {
		      return this.font.tables.cvar;
		    }
		    /**
		     * Helper method that returns the font's fvar table if present
		     * @returns {Object|undefined}
		     */
		    fvar() {
		      return this.font.tables.fvar;
		    }
		    /**
		     * Helper method that returns the font's gvar table if present
		     * @returns {Object|undefined}
		     */
		    gvar() {
		      return this.font.tables.gvar;
		    }
		    /**
		     * Helper method that returns the font's hvar table if present
		     * @returns {Object|undefined}
		     */
		    hvar() {
		      return this.font.tables.hvar;
		    }
		  };

		  // src/hintingtt.mjs
		  var MAX_INSTRUCTIONS = 1e6;
		  var MAX_CALL_DEPTH2 = 64;
		  var MAX_LOOP_COUNT = 1e4;
		  var instructionTable;
		  var exec;
		  var execGlyph;
		  var execComponent;
		  function Hinting(font) {
		    this.font = font;
		    this.getCommands = function(hPoints) {
		      return glyf_default.getPath(hPoints).commands;
		    };
		    this._fpgmState = this._prepState = void 0;
		    this._errorState = 0;
		  }
		  function roundOff(v) {
		    return v;
		  }
		  function roundToGrid(v) {
		    return Math.sign(v) * Math.round(Math.abs(v));
		  }
		  function roundToDoubleGrid(v) {
		    return Math.sign(v) * Math.round(Math.abs(v * 2)) / 2;
		  }
		  function roundToHalfGrid(v) {
		    return Math.sign(v) * (Math.round(Math.abs(v) + 0.5) - 0.5);
		  }
		  function roundUpToGrid(v) {
		    return Math.sign(v) * Math.ceil(Math.abs(v));
		  }
		  function roundDownToGrid(v) {
		    return Math.sign(v) * Math.floor(Math.abs(v));
		  }
		  var roundSuper = function(v) {
		    const period = this.srPeriod;
		    let phase = this.srPhase;
		    const threshold = this.srThreshold;
		    let sign = 1;
		    if (v < 0) {
		      v = -v;
		      sign = -1;
		    }
		    v += threshold - phase;
		    v = Math.trunc(v / period) * period;
		    v += phase;
		    if (v < 0) return phase * sign;
		    return v * sign;
		  };
		  var xUnitVector = {
		    x: 1,
		    y: 0,
		    axis: "x",
		    // Gets the projected distance between two points.
		    // o1/o2 ... if true, respective original position is used.
		    distance: function(p1, p2, o1, o2) {
		      return (o1 ? p1.xo : p1.x) - (o2 ? p2.xo : p2.x);
		    },
		    // Moves point p so the moved position has the same relative
		    // position to the moved positions of rp1 and rp2 than the
		    // original positions had.
		    //
		    // See APPENDIX on INTERPOLATE at the bottom of this file.
		    interpolate: function(p, rp1, rp2, pv) {
		      let do1;
		      let do2;
		      let doa1;
		      let doa2;
		      let dm1;
		      let dm2;
		      let dt;
		      if (!pv || pv === this) {
		        do1 = p.xo - rp1.xo;
		        do2 = p.xo - rp2.xo;
		        dm1 = rp1.x - rp1.xo;
		        dm2 = rp2.x - rp2.xo;
		        doa1 = Math.abs(do1);
		        doa2 = Math.abs(do2);
		        dt = doa1 + doa2;
		        if (dt === 0) {
		          p.x = p.xo + (dm1 + dm2) / 2;
		          return;
		        }
		        p.x = p.xo + (dm1 * doa2 + dm2 * doa1) / dt;
		        return;
		      }
		      do1 = pv.distance(p, rp1, true, true);
		      do2 = pv.distance(p, rp2, true, true);
		      dm1 = pv.distance(rp1, rp1, false, true);
		      dm2 = pv.distance(rp2, rp2, false, true);
		      doa1 = Math.abs(do1);
		      doa2 = Math.abs(do2);
		      dt = doa1 + doa2;
		      if (dt === 0) {
		        xUnitVector.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
		        return;
		      }
		      xUnitVector.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
		    },
		    // Slope of line normal to this
		    normalSlope: Number.NEGATIVE_INFINITY,
		    // Sets the point 'p' relative to point 'rp'
		    // by the distance 'd'.
		    //
		    // See APPENDIX on SETRELATIVE at the bottom of this file.
		    //
		    // p   ... point to set
		    // rp  ... reference point
		    // d   ... distance on projection vector
		    // pv  ... projection vector (undefined = this)
		    // org ... if true, uses the original position of rp as reference.
		    setRelative: function(p, rp, d, pv, org) {
		      if (!pv || pv === this) {
		        p.x = (org ? rp.xo : rp.x) + d;
		        return;
		      }
		      const rpx = org ? rp.xo : rp.x;
		      const rpy = org ? rp.yo : rp.y;
		      const rpdx = rpx + d * pv.x;
		      const rpdy = rpy + d * pv.y;
		      p.x = rpdx + (p.y - rpdy) / pv.normalSlope;
		    },
		    // Slope of vector line.
		    slope: 0,
		    // Touches the point p.
		    touch: function(p) {
		      p.xTouched = true;
		    },
		    // Tests if a point p is touched.
		    touched: function(p) {
		      return p.xTouched;
		    },
		    // Untouches the point p.
		    untouch: function(p) {
		      p.xTouched = false;
		    }
		  };
		  var yUnitVector = {
		    x: 0,
		    y: 1,
		    axis: "y",
		    // Gets the projected distance between two points.
		    // o1/o2 ... if true, respective original position is used.
		    distance: function(p1, p2, o1, o2) {
		      return (o1 ? p1.yo : p1.y) - (o2 ? p2.yo : p2.y);
		    },
		    // Moves point p so the moved position has the same relative
		    // position to the moved positions of rp1 and rp2 than the
		    // original positions had.
		    //
		    // See APPENDIX on INTERPOLATE at the bottom of this file.
		    interpolate: function(p, rp1, rp2, pv) {
		      let do1;
		      let do2;
		      let doa1;
		      let doa2;
		      let dm1;
		      let dm2;
		      let dt;
		      if (!pv || pv === this) {
		        do1 = p.yo - rp1.yo;
		        do2 = p.yo - rp2.yo;
		        dm1 = rp1.y - rp1.yo;
		        dm2 = rp2.y - rp2.yo;
		        doa1 = Math.abs(do1);
		        doa2 = Math.abs(do2);
		        dt = doa1 + doa2;
		        if (dt === 0) {
		          p.y = p.yo + (dm1 + dm2) / 2;
		          return;
		        }
		        p.y = p.yo + (dm1 * doa2 + dm2 * doa1) / dt;
		        return;
		      }
		      do1 = pv.distance(p, rp1, true, true);
		      do2 = pv.distance(p, rp2, true, true);
		      dm1 = pv.distance(rp1, rp1, false, true);
		      dm2 = pv.distance(rp2, rp2, false, true);
		      doa1 = Math.abs(do1);
		      doa2 = Math.abs(do2);
		      dt = doa1 + doa2;
		      if (dt === 0) {
		        yUnitVector.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
		        return;
		      }
		      yUnitVector.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
		    },
		    // Slope of line normal to this.
		    normalSlope: 0,
		    // Sets the point 'p' relative to point 'rp'
		    // by the distance 'd'
		    //
		    // See APPENDIX on SETRELATIVE at the bottom of this file.
		    //
		    // p   ... point to set
		    // rp  ... reference point
		    // d   ... distance on projection vector
		    // pv  ... projection vector (undefined = this)
		    // org ... if true, uses the original position of rp as reference.
		    setRelative: function(p, rp, d, pv, org) {
		      if (!pv || pv === this) {
		        p.y = (org ? rp.yo : rp.y) + d;
		        return;
		      }
		      const rpx = org ? rp.xo : rp.x;
		      const rpy = org ? rp.yo : rp.y;
		      const rpdx = rpx + d * pv.x;
		      const rpdy = rpy + d * pv.y;
		      p.y = rpdy + pv.normalSlope * (p.x - rpdx);
		    },
		    // Slope of vector line.
		    slope: Number.POSITIVE_INFINITY,
		    // Touches the point p.
		    touch: function(p) {
		      p.yTouched = true;
		    },
		    // Tests if a point p is touched.
		    touched: function(p) {
		      return p.yTouched;
		    },
		    // Untouches the point p.
		    untouch: function(p) {
		      p.yTouched = false;
		    }
		  };
		  Object.freeze(xUnitVector);
		  Object.freeze(yUnitVector);
		  function UnitVector(x, y) {
		    this.x = x;
		    this.y = y;
		    this.axis = void 0;
		    this.slope = y / x;
		    this.normalSlope = -x / y;
		    Object.freeze(this);
		  }
		  UnitVector.prototype.distance = function(p1, p2, o1, o2) {
		    return this.x * xUnitVector.distance(p1, p2, o1, o2) + this.y * yUnitVector.distance(p1, p2, o1, o2);
		  };
		  UnitVector.prototype.interpolate = function(p, rp1, rp2, pv) {
		    let dm1;
		    let dm2;
		    let do1;
		    let do2;
		    let doa1;
		    let doa2;
		    let dt;
		    do1 = pv.distance(p, rp1, true, true);
		    do2 = pv.distance(p, rp2, true, true);
		    dm1 = pv.distance(rp1, rp1, false, true);
		    dm2 = pv.distance(rp2, rp2, false, true);
		    doa1 = Math.abs(do1);
		    doa2 = Math.abs(do2);
		    dt = doa1 + doa2;
		    if (dt === 0) {
		      this.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
		      return;
		    }
		    this.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
		  };
		  UnitVector.prototype.setRelative = function(p, rp, d, pv, org) {
		    pv = pv || this;
		    const rpx = org ? rp.xo : rp.x;
		    const rpy = org ? rp.yo : rp.y;
		    const rpdx = rpx + d * pv.x;
		    const rpdy = rpy + d * pv.y;
		    const pvns = pv.normalSlope;
		    const fvs = this.slope;
		    const px = p.x;
		    const py = p.y;
		    p.x = (fvs * px - pvns * rpdx + rpdy - py) / (fvs - pvns);
		    p.y = fvs * (p.x - px) + py;
		  };
		  UnitVector.prototype.touch = function(p) {
		    p.xTouched = true;
		    p.yTouched = true;
		  };
		  function getUnitVector(x, y) {
		    const d = Math.sqrt(x * x + y * y);
		    x /= d;
		    y /= d;
		    if (x === 1 && y === 0) return xUnitVector;
		    else if (x === 0 && y === 1) return yUnitVector;
		    else return new UnitVector(x, y);
		  }
		  function HPoint(x, y, lastPointOfContour, onCurve) {
		    this.x = this.xo = Math.round(x * 64) / 64;
		    this.y = this.yo = Math.round(y * 64) / 64;
		    this.lastPointOfContour = lastPointOfContour;
		    this.onCurve = onCurve;
		    this.prevPointOnContour = void 0;
		    this.nextPointOnContour = void 0;
		    this.xTouched = false;
		    this.yTouched = false;
		    Object.preventExtensions(this);
		  }
		  HPoint.prototype.nextTouched = function(v) {
		    let p = this.nextPointOnContour;
		    while (!v.touched(p) && p !== this) p = p.nextPointOnContour;
		    return p;
		  };
		  HPoint.prototype.prevTouched = function(v) {
		    let p = this.prevPointOnContour;
		    while (!v.touched(p) && p !== this) p = p.prevPointOnContour;
		    return p;
		  };
		  var HPZero = Object.freeze(new HPoint(0, 0));
		  var defaultState = {
		    cvCutIn: 17 / 16,
		    // control value cut in
		    deltaBase: 9,
		    deltaShift: 0.125,
		    loop: 1,
		    // loops some instructions
		    minDis: 1,
		    // minimum distance
		    autoFlip: true
		  };
		  function State(env, prog) {
		    this.env = env;
		    this.stack = [];
		    this.prog = prog;
		    switch (env) {
		      case "glyf":
		        this.zp0 = this.zp1 = this.zp2 = 1;
		        this.rp0 = this.rp1 = this.rp2 = 0;
		      /* fall through */
		      case "prep":
		        this.fv = this.pv = this.dpv = xUnitVector;
		        this.round = roundToGrid;
		    }
		  }
		  Hinting.prototype.exec = function(glyph, ppem) {
		    if (typeof ppem !== "number") {
		      throw new Error("Point size is not a number!");
		    }
		    if (this._errorState > 2) return;
		    const font = this.font;
		    let prepState = this._prepState;
		    if (!prepState || prepState.ppem !== ppem) {
		      let fpgmState = this._fpgmState;
		      if (!fpgmState) {
		        State.prototype = defaultState;
		        fpgmState = this._fpgmState = new State("fpgm", font.tables.fpgm);
		        fpgmState.funcs = [];
		        fpgmState.font = font;
		        fpgmState.instructionCount = 0;
		        fpgmState.callDepth = 0;
		        try {
		          exec(fpgmState);
		        } catch (e) {
		          console.log("Hinting error in FPGM:" + e);
		          this._errorState = 3;
		          return;
		        }
		      }
		      State.prototype = fpgmState;
		      prepState = this._prepState = new State("prep", font.tables.prep);
		      prepState.ppem = ppem;
		      prepState.instructionCount = 0;
		      prepState.callDepth = 0;
		      const oCvt = font.variation && font.variation.process.getCvarTransform() || font.tables.cvt;
		      if (oCvt) {
		        const cvt = prepState.cvt = new Array(oCvt.length);
		        const scale = ppem / font.unitsPerEm;
		        for (let c = 0; c < oCvt.length; c++) {
		          cvt[c] = oCvt[c] * scale;
		        }
		      } else {
		        prepState.cvt = [];
		      }
		      try {
		        exec(prepState);
		      } catch (e) {
		        if (this._errorState < 2) {
		          console.log("Hinting error in PREP:" + e);
		        }
		        this._errorState = 2;
		      }
		    }
		    if (this._errorState > 1) return;
		    try {
		      return execGlyph(glyph, prepState);
		    } catch (e) {
		      if (this._errorState < 1) {
		        console.log("Hinting error:" + e);
		        console.log("Note: further hinting errors are silenced");
		      }
		      this._errorState = 1;
		      return void 0;
		    }
		  };
		  execGlyph = function(glyph, prepState) {
		    const xScale = prepState.ppem / prepState.font.unitsPerEm;
		    const yScale = xScale;
		    let components = glyph.components;
		    let contours;
		    let gZone;
		    let state;
		    State.prototype = prepState;
		    if (!components) {
		      state = new State("glyf", glyph.instructions);
		      state.instructionCount = 0;
		      state.callDepth = 0;
		      execComponent(glyph, state, xScale, yScale);
		      gZone = state.gZone;
		    } else {
		      const font = prepState.font;
		      gZone = [];
		      contours = [];
		      for (let i = 0; i < components.length; i++) {
		        const c = components[i];
		        const cg = font.glyphs.get(c.glyphIndex);
		        state = new State("glyf", cg.instructions);
		        state.instructionCount = 0;
		        state.callDepth = 0;
		        execComponent(cg, state, xScale, yScale);
		        const dx = Math.round(c.dx * xScale);
		        const dy = Math.round(c.dy * yScale);
		        const gz = state.gZone;
		        const cc = state.contours;
		        for (let pi = 0; pi < gz.length; pi++) {
		          const p = gz[pi];
		          p.xTouched = p.yTouched = false;
		          p.xo = p.x = p.x + dx;
		          p.yo = p.y = p.y + dy;
		        }
		        const gLen = gZone.length;
		        gZone.push.apply(gZone, gz);
		        for (let j = 0; j < cc.length; j++) {
		          contours.push(cc[j] + gLen);
		        }
		      }
		      if (glyph.instructions && !state.inhibitGridFit) {
		        state = new State("glyf", glyph.instructions);
		        state.gZone = state.z0 = state.z1 = state.z2 = gZone;
		        state.contours = contours;
		        gZone.push(
		          new HPoint(0, 0),
		          new HPoint(Math.round(glyph.advanceWidth * xScale), 0)
		        );
		        exec(state);
		        gZone.length -= 2;
		      }
		    }
		    return gZone;
		  };
		  execComponent = function(glyph, state, xScale, yScale) {
		    const points = glyph.points || [];
		    const pLen = points.length;
		    const gZone = state.gZone = state.z0 = state.z1 = state.z2 = [];
		    const contours = state.contours = [];
		    let cp;
		    for (let i = 0; i < pLen; i++) {
		      cp = points[i];
		      gZone[i] = new HPoint(
		        cp.x * xScale,
		        cp.y * yScale,
		        cp.lastPointOfContour,
		        cp.onCurve
		      );
		    }
		    let sp;
		    let np;
		    for (let i = 0; i < pLen; i++) {
		      cp = gZone[i];
		      if (!sp) {
		        sp = cp;
		        contours.push(i);
		      }
		      if (cp.lastPointOfContour) {
		        cp.nextPointOnContour = sp;
		        sp.prevPointOnContour = cp;
		        sp = void 0;
		      } else {
		        np = gZone[i + 1];
		        cp.nextPointOnContour = np;
		        np.prevPointOnContour = cp;
		      }
		    }
		    if (state.inhibitGridFit) return;
		    gZone.push(
		      new HPoint(0, 0),
		      new HPoint(Math.round(glyph.advanceWidth * xScale), 0)
		    );
		    exec(state);
		    gZone.length -= 2;
		  };
		  exec = function(state) {
		    let prog = state.prog;
		    if (!prog) return;
		    const pLen = prog.length;
		    let ins;
		    for (state.ip = 0; state.ip < pLen; state.ip++) {
		      if (++state.instructionCount > MAX_INSTRUCTIONS) {
		        throw new Error(
		          "Hinting instructions exceeded maximum of " + MAX_INSTRUCTIONS
		        );
		      }
		      ins = instructionTable[prog[state.ip]];
		      if (!ins) {
		        throw new Error(
		          "unknown instruction: 0x" + Number(prog[state.ip]).toString(16)
		        );
		      }
		      ins(state);
		    }
		  };
		  function initTZone(state) {
		    const tZone = state.tZone = new Array(state.gZone.length);
		    for (let i = 0; i < tZone.length; i++) {
		      tZone[i] = new HPoint(0, 0);
		    }
		  }
		  function skip(state, handleElse) {
		    const prog = state.prog;
		    let ip = state.ip;
		    let nesting = 1;
		    let ins;
		    do {
		      ins = prog[++ip];
		      if (ins === 88)
		        nesting++;
		      else if (ins === 89)
		        nesting--;
		      else if (ins === 64)
		        ip += prog[ip + 1] + 1;
		      else if (ins === 65)
		        ip += 2 * prog[ip + 1] + 1;
		      else if (ins >= 176 && ins <= 183)
		        ip += ins - 176 + 1;
		      else if (ins >= 184 && ins <= 191)
		        ip += (ins - 184 + 1) * 2;
		      else if (handleElse && nesting === 1 && ins === 27)
		        break;
		    } while (nesting > 0);
		    state.ip = ip;
		  }
		  function SVTCA(v, state) {
		    state.fv = state.pv = state.dpv = v;
		  }
		  function SPVTCA(v, state) {
		    state.pv = state.dpv = v;
		  }
		  function SFVTCA(v, state) {
		    state.fv = v;
		  }
		  function SPVTL(a, state) {
		    const stack = state.stack;
		    const p2i = stack.pop();
		    const p1i = stack.pop();
		    const p2 = state.z2[p2i];
		    const p1 = state.z1[p1i];
		    let dx;
		    let dy;
		    if (!a) {
		      dx = p1.x - p2.x;
		      dy = p1.y - p2.y;
		    } else {
		      dx = p2.y - p1.y;
		      dy = p1.x - p2.x;
		    }
		    state.pv = state.dpv = getUnitVector(dx, dy);
		  }
		  function SFVTL(a, state) {
		    const stack = state.stack;
		    const p2i = stack.pop();
		    const p1i = stack.pop();
		    const p2 = state.z2[p2i];
		    const p1 = state.z1[p1i];
		    let dx;
		    let dy;
		    if (!a) {
		      dx = p1.x - p2.x;
		      dy = p1.y - p2.y;
		    } else {
		      dx = p2.y - p1.y;
		      dy = p1.x - p2.x;
		    }
		    state.fv = getUnitVector(dx, dy);
		  }
		  function SPVFS(state) {
		    const stack = state.stack;
		    const y = stack.pop();
		    const x = stack.pop();
		    state.pv = state.dpv = getUnitVector(x, y);
		  }
		  function SFVFS(state) {
		    const stack = state.stack;
		    const y = stack.pop();
		    const x = stack.pop();
		    state.fv = getUnitVector(x, y);
		  }
		  function GPV(state) {
		    const stack = state.stack;
		    const pv = state.pv;
		    stack.push(pv.x * 16384);
		    stack.push(pv.y * 16384);
		  }
		  function GFV(state) {
		    const stack = state.stack;
		    const fv = state.fv;
		    stack.push(fv.x * 16384);
		    stack.push(fv.y * 16384);
		  }
		  function SFVTPV(state) {
		    state.fv = state.pv;
		  }
		  function ISECT(state) {
		    const stack = state.stack;
		    const pa0i = stack.pop();
		    const pa1i = stack.pop();
		    const pb0i = stack.pop();
		    const pb1i = stack.pop();
		    const pi = stack.pop();
		    const z0 = state.z0;
		    const z1 = state.z1;
		    const pa0 = z0[pa0i];
		    const pa1 = z0[pa1i];
		    const pb0 = z1[pb0i];
		    const pb1 = z1[pb1i];
		    const p = state.z2[pi];
		    const x1 = pa0.x;
		    const y1 = pa0.y;
		    const x2 = pa1.x;
		    const y2 = pa1.y;
		    const x3 = pb0.x;
		    const y3 = pb0.y;
		    const x4 = pb1.x;
		    const y4 = pb1.y;
		    const div = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
		    const f1 = x1 * y2 - y1 * x2;
		    const f2 = x3 * y4 - y3 * x4;
		    p.x = (f1 * (x3 - x4) - f2 * (x1 - x2)) / div;
		    p.y = (f1 * (y3 - y4) - f2 * (y1 - y2)) / div;
		  }
		  function SRP0(state) {
		    state.rp0 = state.stack.pop();
		  }
		  function SRP1(state) {
		    state.rp1 = state.stack.pop();
		  }
		  function SRP2(state) {
		    state.rp2 = state.stack.pop();
		  }
		  function SZP0(state) {
		    const n = state.stack.pop();
		    state.zp0 = n;
		    switch (n) {
		      case 0:
		        if (!state.tZone) initTZone(state);
		        state.z0 = state.tZone;
		        break;
		      case 1:
		        state.z0 = state.gZone;
		        break;
		      default:
		        throw new Error("Invalid zone pointer");
		    }
		  }
		  function SZP1(state) {
		    const n = state.stack.pop();
		    state.zp1 = n;
		    switch (n) {
		      case 0:
		        if (!state.tZone) initTZone(state);
		        state.z1 = state.tZone;
		        break;
		      case 1:
		        state.z1 = state.gZone;
		        break;
		      default:
		        throw new Error("Invalid zone pointer");
		    }
		  }
		  function SZP2(state) {
		    const n = state.stack.pop();
		    state.zp2 = n;
		    switch (n) {
		      case 0:
		        if (!state.tZone) initTZone(state);
		        state.z2 = state.tZone;
		        break;
		      case 1:
		        state.z2 = state.gZone;
		        break;
		      default:
		        throw new Error("Invalid zone pointer");
		    }
		  }
		  function SZPS(state) {
		    const n = state.stack.pop();
		    state.zp0 = state.zp1 = state.zp2 = n;
		    switch (n) {
		      case 0:
		        if (!state.tZone) initTZone(state);
		        state.z0 = state.z1 = state.z2 = state.tZone;
		        break;
		      case 1:
		        state.z0 = state.z1 = state.z2 = state.gZone;
		        break;
		      default:
		        throw new Error("Invalid zone pointer");
		    }
		  }
		  function SLOOP(state) {
		    state.loop = state.stack.pop();
		    if (state.loop > MAX_LOOP_COUNT) {
		      state.loop = MAX_LOOP_COUNT;
		    }
		  }
		  function RTG(state) {
		    state.round = roundToGrid;
		  }
		  function RTHG(state) {
		    state.round = roundToHalfGrid;
		  }
		  function SMD(state) {
		    const d = state.stack.pop();
		    state.minDis = d / 64;
		  }
		  function ELSE(state) {
		    skip(state, false);
		  }
		  function JMPR(state) {
		    const o = state.stack.pop();
		    state.ip += o - 1;
		  }
		  function SCVTCI(state) {
		    const n = state.stack.pop();
		    state.cvCutIn = n / 64;
		  }
		  function DUP(state) {
		    const stack = state.stack;
		    stack.push(stack[stack.length - 1]);
		  }
		  function POP(state) {
		    state.stack.pop();
		  }
		  function CLEAR(state) {
		    state.stack.length = 0;
		  }
		  function SWAP(state) {
		    const stack = state.stack;
		    const a = stack.pop();
		    const b = stack.pop();
		    stack.push(a);
		    stack.push(b);
		  }
		  function DEPTH(state) {
		    const stack = state.stack;
		    stack.push(stack.length);
		  }
		  function LOOPCALL(state) {
		    const stack = state.stack;
		    const fn = stack.pop();
		    let c = stack.pop();
		    if (c > MAX_LOOP_COUNT) c = MAX_LOOP_COUNT;
		    if (++state.callDepth > MAX_CALL_DEPTH2) {
		      throw new Error("Hinting call depth exceeded maximum of " + MAX_CALL_DEPTH2);
		    }
		    const cip = state.ip;
		    const cprog = state.prog;
		    state.prog = state.funcs[fn];
		    for (let i = 0; i < c; i++) {
		      exec(state);
		    }
		    state.ip = cip;
		    state.prog = cprog;
		    state.callDepth--;
		  }
		  function CALL(state) {
		    const fn = state.stack.pop();
		    if (++state.callDepth > MAX_CALL_DEPTH2) {
		      throw new Error("Hinting call depth exceeded maximum of " + MAX_CALL_DEPTH2);
		    }
		    const cip = state.ip;
		    const cprog = state.prog;
		    state.prog = state.funcs[fn];
		    exec(state);
		    state.ip = cip;
		    state.prog = cprog;
		    state.callDepth--;
		  }
		  function CINDEX(state) {
		    const stack = state.stack;
		    const k = stack.pop();
		    stack.push(stack[stack.length - k]);
		  }
		  function MINDEX(state) {
		    const stack = state.stack;
		    const k = stack.pop();
		    stack.push(stack.splice(stack.length - k, 1)[0]);
		  }
		  function FDEF(state) {
		    if (state.env !== "fpgm") throw new Error("FDEF not allowed here");
		    const stack = state.stack;
		    const prog = state.prog;
		    let ip = state.ip;
		    const fn = stack.pop();
		    const ipBegin = ip;
		    while (prog[++ip] !== 45) ;
		    state.ip = ip;
		    state.funcs[fn] = prog.slice(ipBegin + 1, ip);
		  }
		  function MDAP(round, state) {
		    const pi = state.stack.pop();
		    const p = state.z0[pi];
		    const fv = state.fv;
		    const pv = state.pv;
		    let d = pv.distance(p, HPZero);
		    if (round) d = state.round(d);
		    fv.setRelative(p, HPZero, d, pv);
		    fv.touch(p);
		    state.rp0 = state.rp1 = pi;
		  }
		  function IUP(v, state) {
		    const z2 = state.z2;
		    const pLen = z2.length - 2;
		    let cp;
		    let pp;
		    let np;
		    for (let i = 0; i < pLen; i++) {
		      cp = z2[i];
		      if (v.touched(cp)) continue;
		      pp = cp.prevTouched(v);
		      if (pp === cp) continue;
		      np = cp.nextTouched(v);
		      if (pp === np) {
		        v.setRelative(cp, cp, v.distance(pp, pp, false, true), v, true);
		      }
		      v.interpolate(cp, pp, np, v);
		    }
		  }
		  function SHP(a, state) {
		    const stack = state.stack;
		    const rpi = a ? state.rp1 : state.rp2;
		    const rp = (a ? state.z0 : state.z1)[rpi];
		    const fv = state.fv;
		    const pv = state.pv;
		    let loop = state.loop;
		    const z2 = state.z2;
		    while (loop--) {
		      const pi = stack.pop();
		      const p = z2[pi];
		      const d = pv.distance(rp, rp, false, true);
		      fv.setRelative(p, p, d, pv);
		      fv.touch(p);
		    }
		    state.loop = 1;
		  }
		  function SHC(a, state) {
		    const stack = state.stack;
		    const rpi = a ? state.rp1 : state.rp2;
		    const rp = (a ? state.z0 : state.z1)[rpi];
		    const fv = state.fv;
		    const pv = state.pv;
		    const ci = stack.pop();
		    const sp = state.z2[state.contours[ci]];
		    let p = sp;
		    const d = pv.distance(rp, rp, false, true);
		    do {
		      if (p !== rp) fv.setRelative(p, p, d, pv);
		      p = p.nextPointOnContour;
		    } while (p !== sp);
		  }
		  function SHZ(a, state) {
		    const stack = state.stack;
		    const rpi = a ? state.rp1 : state.rp2;
		    const rp = (a ? state.z0 : state.z1)[rpi];
		    const fv = state.fv;
		    const pv = state.pv;
		    const e = stack.pop();
		    let z;
		    switch (e) {
		      case 0:
		        z = state.tZone;
		        break;
		      case 1:
		        z = state.gZone;
		        break;
		      default:
		        throw new Error("Invalid zone");
		    }
		    let p;
		    const d = pv.distance(rp, rp, false, true);
		    const pLen = z.length - 2;
		    for (let i = 0; i < pLen; i++) {
		      p = z[i];
		      fv.setRelative(p, p, d, pv);
		    }
		  }
		  function SHPIX(state) {
		    const stack = state.stack;
		    let loop = state.loop;
		    const fv = state.fv;
		    const d = stack.pop() / 64;
		    const z2 = state.z2;
		    while (loop--) {
		      const pi = stack.pop();
		      const p = z2[pi];
		      fv.setRelative(p, p, d);
		      fv.touch(p);
		    }
		    state.loop = 1;
		  }
		  function IP(state) {
		    const stack = state.stack;
		    const rp1i = state.rp1;
		    const rp2i = state.rp2;
		    let loop = state.loop;
		    const rp1 = state.z0[rp1i];
		    const rp2 = state.z1[rp2i];
		    const fv = state.fv;
		    const pv = state.dpv;
		    const z2 = state.z2;
		    while (loop--) {
		      const pi = stack.pop();
		      const p = z2[pi];
		      fv.interpolate(p, rp1, rp2, pv);
		      fv.touch(p);
		    }
		    state.loop = 1;
		  }
		  function MSIRP(a, state) {
		    const stack = state.stack;
		    const d = stack.pop() / 64;
		    const pi = stack.pop();
		    const p = state.z1[pi];
		    const rp0 = state.z0[state.rp0];
		    const fv = state.fv;
		    const pv = state.pv;
		    fv.setRelative(p, rp0, d, pv);
		    fv.touch(p);
		    state.rp1 = state.rp0;
		    state.rp2 = pi;
		    if (a) state.rp0 = pi;
		  }
		  function ALIGNRP(state) {
		    const stack = state.stack;
		    const rp0i = state.rp0;
		    const rp0 = state.z0[rp0i];
		    let loop = state.loop;
		    const fv = state.fv;
		    const pv = state.pv;
		    const z1 = state.z1;
		    while (loop--) {
		      const pi = stack.pop();
		      const p = z1[pi];
		      fv.setRelative(p, rp0, 0, pv);
		      fv.touch(p);
		    }
		    state.loop = 1;
		  }
		  function RTDG(state) {
		    state.round = roundToDoubleGrid;
		  }
		  function MIAP(round, state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    const pi = stack.pop();
		    const p = state.z0[pi];
		    const fv = state.fv;
		    const pv = state.pv;
		    let cv = state.cvt[n];
		    let d = pv.distance(p, HPZero);
		    if (round) {
		      if (Math.abs(d - cv) < state.cvCutIn) d = cv;
		      d = state.round(d);
		    }
		    fv.setRelative(p, HPZero, d, pv);
		    if (state.zp0 === 0) {
		      p.xo = p.x;
		      p.yo = p.y;
		    }
		    fv.touch(p);
		    state.rp0 = state.rp1 = pi;
		  }
		  function NPUSHB(state) {
		    const prog = state.prog;
		    let ip = state.ip;
		    const stack = state.stack;
		    const n = prog[++ip];
		    for (let i = 0; i < n; i++) stack.push(prog[++ip]);
		    state.ip = ip;
		  }
		  function NPUSHW(state) {
		    let ip = state.ip;
		    const prog = state.prog;
		    const stack = state.stack;
		    const n = prog[++ip];
		    for (let i = 0; i < n; i++) {
		      let w = prog[++ip] << 8 | prog[++ip];
		      if (w & 32768) w = -((w ^ 65535) + 1);
		      stack.push(w);
		    }
		    state.ip = ip;
		  }
		  function WS(state) {
		    const stack = state.stack;
		    let store = state.store;
		    if (!store) store = state.store = [];
		    const v = stack.pop();
		    const l = stack.pop();
		    store[l] = v;
		  }
		  function RS(state) {
		    const stack = state.stack;
		    const store = state.store;
		    const l = stack.pop();
		    const v = store && store[l] || 0;
		    stack.push(v);
		  }
		  function WCVTP(state) {
		    const stack = state.stack;
		    const v = stack.pop();
		    const l = stack.pop();
		    state.cvt[l] = v / 64;
		  }
		  function RCVT(state) {
		    const stack = state.stack;
		    const cvte = stack.pop();
		    stack.push(state.cvt[cvte] * 64);
		  }
		  function GC(a, state) {
		    const stack = state.stack;
		    const pi = stack.pop();
		    const p = state.z2[pi];
		    stack.push(state.dpv.distance(p, HPZero, a, false) * 64);
		  }
		  function MD(a, state) {
		    const stack = state.stack;
		    const pi2 = stack.pop();
		    const pi1 = stack.pop();
		    const p2 = state.z1[pi2];
		    const p1 = state.z0[pi1];
		    const d = state.dpv.distance(p1, p2, a, a);
		    state.stack.push(Math.round(d * 64));
		  }
		  function MPPEM(state) {
		    state.stack.push(state.ppem);
		  }
		  function FLIPON(state) {
		    state.autoFlip = true;
		  }
		  function LT(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(e1 < e2 ? 1 : 0);
		  }
		  function LTEQ(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(e1 <= e2 ? 1 : 0);
		  }
		  function GT(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(e1 > e2 ? 1 : 0);
		  }
		  function GTEQ(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(e1 >= e2 ? 1 : 0);
		  }
		  function EQ(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(e2 === e1 ? 1 : 0);
		  }
		  function NEQ(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(e2 !== e1 ? 1 : 0);
		  }
		  function ODD(state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    stack.push(Math.trunc(n) & 1 ? 1 : 0);
		  }
		  function EVEN(state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    stack.push(Math.trunc(n) & 1 ? 0 : 1);
		  }
		  function IF(state) {
		    let test = state.stack.pop();
		    if (!test) {
		      skip(state, true);
		    }
		  }
		  function EIF(state) {
		  }
		  function AND(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(e2 && e1 ? 1 : 0);
		  }
		  function OR(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(e2 || e1 ? 1 : 0);
		  }
		  function NOT(state) {
		    const stack = state.stack;
		    const e = stack.pop();
		    stack.push(e ? 0 : 1);
		  }
		  function DELTAP123(b, state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    const fv = state.fv;
		    const pv = state.pv;
		    const ppem = state.ppem;
		    const base = state.deltaBase + (b - 1) * 16;
		    const ds = state.deltaShift;
		    const z0 = state.z0;
		    for (let i = 0; i < n; i++) {
		      const pi = stack.pop();
		      const arg = stack.pop();
		      const appem = base + ((arg & 240) >> 4);
		      if (appem !== ppem) continue;
		      let mag = (arg & 15) - 8;
		      if (mag >= 0) mag++;
		      const p = z0[pi];
		      fv.setRelative(p, p, mag * ds, pv);
		    }
		  }
		  function SDB(state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    state.deltaBase = n;
		  }
		  function SDS(state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    state.deltaShift = Math.pow(0.5, n);
		  }
		  function ADD(state) {
		    const stack = state.stack;
		    const n2 = stack.pop();
		    const n1 = stack.pop();
		    stack.push(n1 + n2);
		  }
		  function SUB(state) {
		    const stack = state.stack;
		    const n2 = stack.pop();
		    const n1 = stack.pop();
		    stack.push(n1 - n2);
		  }
		  function DIV(state) {
		    const stack = state.stack;
		    const n2 = stack.pop();
		    const n1 = stack.pop();
		    stack.push(n1 * 64 / n2);
		  }
		  function MUL(state) {
		    const stack = state.stack;
		    const n2 = stack.pop();
		    const n1 = stack.pop();
		    stack.push(n1 * n2 / 64);
		  }
		  function ABS(state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    stack.push(Math.abs(n));
		  }
		  function NEG(state) {
		    const stack = state.stack;
		    let n = stack.pop();
		    stack.push(-n);
		  }
		  function FLOOR(state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    stack.push(Math.floor(n / 64) * 64);
		  }
		  function CEILING(state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    stack.push(Math.ceil(n / 64) * 64);
		  }
		  function ROUND(dt, state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    stack.push(state.round(n / 64) * 64);
		  }
		  function WCVTF(state) {
		    const stack = state.stack;
		    const v = stack.pop();
		    const l = stack.pop();
		    state.cvt[l] = v * state.ppem / state.font.unitsPerEm;
		  }
		  function DELTAC123(b, state) {
		    const stack = state.stack;
		    const n = stack.pop();
		    const ppem = state.ppem;
		    const base = state.deltaBase + (b - 1) * 16;
		    const ds = state.deltaShift;
		    for (let i = 0; i < n; i++) {
		      const c = stack.pop();
		      const arg = stack.pop();
		      const appem = base + ((arg & 240) >> 4);
		      if (appem !== ppem) continue;
		      let mag = (arg & 15) - 8;
		      if (mag >= 0) mag++;
		      const delta = mag * ds;
		      state.cvt[c] += delta;
		    }
		  }
		  function SROUND(state) {
		    let n = state.stack.pop();
		    state.round = roundSuper;
		    let period;
		    switch (n & 192) {
		      case 0:
		        period = 0.5;
		        break;
		      case 64:
		        period = 1;
		        break;
		      case 128:
		        period = 2;
		        break;
		      default:
		        throw new Error("invalid SROUND value");
		    }
		    state.srPeriod = period;
		    switch (n & 48) {
		      case 0:
		        state.srPhase = 0;
		        break;
		      case 16:
		        state.srPhase = 0.25 * period;
		        break;
		      case 32:
		        state.srPhase = 0.5 * period;
		        break;
		      case 48:
		        state.srPhase = 0.75 * period;
		        break;
		      default:
		        throw new Error("invalid SROUND value");
		    }
		    n &= 15;
		    if (n === 0) state.srThreshold = 0;
		    else state.srThreshold = (n / 8 - 0.5) * period;
		  }
		  function S45ROUND(state) {
		    let n = state.stack.pop();
		    state.round = roundSuper;
		    let period;
		    switch (n & 192) {
		      case 0:
		        period = Math.sqrt(2) / 2;
		        break;
		      case 64:
		        period = Math.sqrt(2);
		        break;
		      case 128:
		        period = 2 * Math.sqrt(2);
		        break;
		      default:
		        throw new Error("invalid S45ROUND value");
		    }
		    state.srPeriod = period;
		    switch (n & 48) {
		      case 0:
		        state.srPhase = 0;
		        break;
		      case 16:
		        state.srPhase = 0.25 * period;
		        break;
		      case 32:
		        state.srPhase = 0.5 * period;
		        break;
		      case 48:
		        state.srPhase = 0.75 * period;
		        break;
		      default:
		        throw new Error("invalid S45ROUND value");
		    }
		    n &= 15;
		    if (n === 0) state.srThreshold = 0;
		    else state.srThreshold = (n / 8 - 0.5) * period;
		  }
		  function ROFF(state) {
		    state.round = roundOff;
		  }
		  function RUTG(state) {
		    state.round = roundUpToGrid;
		  }
		  function RDTG(state) {
		    state.round = roundDownToGrid;
		  }
		  function SCANCTRL(state) {
		    state.stack.pop();
		  }
		  function SDPVTL(a, state) {
		    const stack = state.stack;
		    const p2i = stack.pop();
		    const p1i = stack.pop();
		    const p2 = state.z2[p2i];
		    const p1 = state.z1[p1i];
		    let dx;
		    let dy;
		    if (!a) {
		      dx = p1.x - p2.x;
		      dy = p1.y - p2.y;
		    } else {
		      dx = p2.y - p1.y;
		      dy = p1.x - p2.x;
		    }
		    state.dpv = getUnitVector(dx, dy);
		  }
		  function GETINFO(state) {
		    const stack = state.stack;
		    const sel = stack.pop();
		    let r = 0;
		    if (sel & 1) r = 35;
		    if (sel & 32) r |= 4096;
		    stack.push(r);
		  }
		  function ROLL(state) {
		    const stack = state.stack;
		    const a = stack.pop();
		    const b = stack.pop();
		    const c = stack.pop();
		    stack.push(b);
		    stack.push(a);
		    stack.push(c);
		  }
		  function MAX(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(Math.max(e1, e2));
		  }
		  function MIN(state) {
		    const stack = state.stack;
		    const e2 = stack.pop();
		    const e1 = stack.pop();
		    stack.push(Math.min(e1, e2));
		  }
		  function SCANTYPE(state) {
		    state.stack.pop();
		  }
		  function INSTCTRL(state) {
		    const s = state.stack.pop();
		    let v = state.stack.pop();
		    switch (s) {
		      case 1:
		        state.inhibitGridFit = !!v;
		        return;
		      case 2:
		        state.ignoreCvt = !!v;
		        return;
		      default:
		        throw new Error("invalid INSTCTRL[] selector");
		    }
		  }
		  function PUSHB(n, state) {
		    const stack = state.stack;
		    const prog = state.prog;
		    let ip = state.ip;
		    for (let i = 0; i < n; i++) stack.push(prog[++ip]);
		    state.ip = ip;
		  }
		  function PUSHW(n, state) {
		    let ip = state.ip;
		    const prog = state.prog;
		    const stack = state.stack;
		    for (let i = 0; i < n; i++) {
		      let w = prog[++ip] << 8 | prog[++ip];
		      if (w & 32768) w = -((w ^ 65535) + 1);
		      stack.push(w);
		    }
		    state.ip = ip;
		  }
		  function MDRP_MIRP(indirect, setRp0, keepD, ro, dt, state) {
		    const stack = state.stack;
		    const cvte = indirect && stack.pop();
		    const pi = stack.pop();
		    const rp0i = state.rp0;
		    const rp = state.z0[rp0i];
		    const p = state.z1[pi];
		    const md = state.minDis;
		    const fv = state.fv;
		    const pv = state.dpv;
		    let d;
		    let sign;
		    let cv;
		    d = pv.distance(p, rp, true, true);
		    sign = d >= 0 ? 1 : -1;
		    d = Math.abs(d);
		    if (indirect) {
		      cv = state.cvt[cvte];
		      if (ro && Math.abs(d - cv) < state.cvCutIn) d = cv;
		    }
		    if (keepD && d < md) d = md;
		    if (ro) d = state.round(d);
		    fv.setRelative(p, rp, sign * d, pv);
		    fv.touch(p);
		    state.rp1 = state.rp0;
		    state.rp2 = pi;
		    if (setRp0) state.rp0 = pi;
		  }
		  instructionTable = [
		    /* 0x00 */
		    SVTCA.bind(void 0, yUnitVector),
		    /* 0x01 */
		    SVTCA.bind(void 0, xUnitVector),
		    /* 0x02 */
		    SPVTCA.bind(void 0, yUnitVector),
		    /* 0x03 */
		    SPVTCA.bind(void 0, xUnitVector),
		    /* 0x04 */
		    SFVTCA.bind(void 0, yUnitVector),
		    /* 0x05 */
		    SFVTCA.bind(void 0, xUnitVector),
		    /* 0x06 */
		    SPVTL.bind(void 0, 0),
		    /* 0x07 */
		    SPVTL.bind(void 0, 1),
		    /* 0x08 */
		    SFVTL.bind(void 0, 0),
		    /* 0x09 */
		    SFVTL.bind(void 0, 1),
		    /* 0x0A */
		    SPVFS,
		    /* 0x0B */
		    SFVFS,
		    /* 0x0C */
		    GPV,
		    /* 0x0D */
		    GFV,
		    /* 0x0E */
		    SFVTPV,
		    /* 0x0F */
		    ISECT,
		    /* 0x10 */
		    SRP0,
		    /* 0x11 */
		    SRP1,
		    /* 0x12 */
		    SRP2,
		    /* 0x13 */
		    SZP0,
		    /* 0x14 */
		    SZP1,
		    /* 0x15 */
		    SZP2,
		    /* 0x16 */
		    SZPS,
		    /* 0x17 */
		    SLOOP,
		    /* 0x18 */
		    RTG,
		    /* 0x19 */
		    RTHG,
		    /* 0x1A */
		    SMD,
		    /* 0x1B */
		    ELSE,
		    /* 0x1C */
		    JMPR,
		    /* 0x1D */
		    SCVTCI,
		    /* 0x1E */
		    void 0,
		    // TODO SSWCI
		    /* 0x1F */
		    void 0,
		    // TODO SSW
		    /* 0x20 */
		    DUP,
		    /* 0x21 */
		    POP,
		    /* 0x22 */
		    CLEAR,
		    /* 0x23 */
		    SWAP,
		    /* 0x24 */
		    DEPTH,
		    /* 0x25 */
		    CINDEX,
		    /* 0x26 */
		    MINDEX,
		    /* 0x27 */
		    void 0,
		    // TODO ALIGNPTS
		    /* 0x28 */
		    void 0,
		    /* 0x29 */
		    void 0,
		    // TODO UTP
		    /* 0x2A */
		    LOOPCALL,
		    /* 0x2B */
		    CALL,
		    /* 0x2C */
		    FDEF,
		    /* 0x2D */
		    void 0,
		    // ENDF (eaten by FDEF)
		    /* 0x2E */
		    MDAP.bind(void 0, 0),
		    /* 0x2F */
		    MDAP.bind(void 0, 1),
		    /* 0x30 */
		    IUP.bind(void 0, yUnitVector),
		    /* 0x31 */
		    IUP.bind(void 0, xUnitVector),
		    /* 0x32 */
		    SHP.bind(void 0, 0),
		    /* 0x33 */
		    SHP.bind(void 0, 1),
		    /* 0x34 */
		    SHC.bind(void 0, 0),
		    /* 0x35 */
		    SHC.bind(void 0, 1),
		    /* 0x36 */
		    SHZ.bind(void 0, 0),
		    /* 0x37 */
		    SHZ.bind(void 0, 1),
		    /* 0x38 */
		    SHPIX,
		    /* 0x39 */
		    IP,
		    /* 0x3A */
		    MSIRP.bind(void 0, 0),
		    /* 0x3B */
		    MSIRP.bind(void 0, 1),
		    /* 0x3C */
		    ALIGNRP,
		    /* 0x3D */
		    RTDG,
		    /* 0x3E */
		    MIAP.bind(void 0, 0),
		    /* 0x3F */
		    MIAP.bind(void 0, 1),
		    /* 0x40 */
		    NPUSHB,
		    /* 0x41 */
		    NPUSHW,
		    /* 0x42 */
		    WS,
		    /* 0x43 */
		    RS,
		    /* 0x44 */
		    WCVTP,
		    /* 0x45 */
		    RCVT,
		    /* 0x46 */
		    GC.bind(void 0, 0),
		    /* 0x47 */
		    GC.bind(void 0, 1),
		    /* 0x48 */
		    void 0,
		    // TODO SCFS
		    /* 0x49 */
		    MD.bind(void 0, 0),
		    /* 0x4A */
		    MD.bind(void 0, 1),
		    /* 0x4B */
		    MPPEM,
		    /* 0x4C */
		    void 0,
		    // TODO MPS
		    /* 0x4D */
		    FLIPON,
		    /* 0x4E */
		    void 0,
		    // TODO FLIPOFF
		    /* 0x4F */
		    void 0,
		    // TODO DEBUG
		    /* 0x50 */
		    LT,
		    /* 0x51 */
		    LTEQ,
		    /* 0x52 */
		    GT,
		    /* 0x53 */
		    GTEQ,
		    /* 0x54 */
		    EQ,
		    /* 0x55 */
		    NEQ,
		    /* 0x56 */
		    ODD,
		    /* 0x57 */
		    EVEN,
		    /* 0x58 */
		    IF,
		    /* 0x59 */
		    EIF,
		    /* 0x5A */
		    AND,
		    /* 0x5B */
		    OR,
		    /* 0x5C */
		    NOT,
		    /* 0x5D */
		    DELTAP123.bind(void 0, 1),
		    /* 0x5E */
		    SDB,
		    /* 0x5F */
		    SDS,
		    /* 0x60 */
		    ADD,
		    /* 0x61 */
		    SUB,
		    /* 0x62 */
		    DIV,
		    /* 0x63 */
		    MUL,
		    /* 0x64 */
		    ABS,
		    /* 0x65 */
		    NEG,
		    /* 0x66 */
		    FLOOR,
		    /* 0x67 */
		    CEILING,
		    /* 0x68 */
		    ROUND.bind(void 0, 0),
		    /* 0x69 */
		    ROUND.bind(void 0, 1),
		    /* 0x6A */
		    ROUND.bind(void 0, 2),
		    /* 0x6B */
		    ROUND.bind(void 0, 3),
		    /* 0x6C */
		    void 0,
		    // TODO NROUND[ab]
		    /* 0x6D */
		    void 0,
		    // TODO NROUND[ab]
		    /* 0x6E */
		    void 0,
		    // TODO NROUND[ab]
		    /* 0x6F */
		    void 0,
		    // TODO NROUND[ab]
		    /* 0x70 */
		    WCVTF,
		    /* 0x71 */
		    DELTAP123.bind(void 0, 2),
		    /* 0x72 */
		    DELTAP123.bind(void 0, 3),
		    /* 0x73 */
		    DELTAC123.bind(void 0, 1),
		    /* 0x74 */
		    DELTAC123.bind(void 0, 2),
		    /* 0x75 */
		    DELTAC123.bind(void 0, 3),
		    /* 0x76 */
		    SROUND,
		    /* 0x77 */
		    S45ROUND,
		    /* 0x78 */
		    void 0,
		    // TODO JROT[]
		    /* 0x79 */
		    void 0,
		    // TODO JROF[]
		    /* 0x7A */
		    ROFF,
		    /* 0x7B */
		    void 0,
		    /* 0x7C */
		    RUTG,
		    /* 0x7D */
		    RDTG,
		    /* 0x7E */
		    POP,
		    // actually SANGW, supposed to do only a pop though
		    /* 0x7F */
		    POP,
		    // actually AA, supposed to do only a pop though
		    /* 0x80 */
		    void 0,
		    // TODO FLIPPT
		    /* 0x81 */
		    void 0,
		    // TODO FLIPRGON
		    /* 0x82 */
		    void 0,
		    // TODO FLIPRGOFF
		    /* 0x83 */
		    void 0,
		    /* 0x84 */
		    void 0,
		    /* 0x85 */
		    SCANCTRL,
		    /* 0x86 */
		    SDPVTL.bind(void 0, 0),
		    /* 0x87 */
		    SDPVTL.bind(void 0, 1),
		    /* 0x88 */
		    GETINFO,
		    /* 0x89 */
		    void 0,
		    // TODO IDEF
		    /* 0x8A */
		    ROLL,
		    /* 0x8B */
		    MAX,
		    /* 0x8C */
		    MIN,
		    /* 0x8D */
		    SCANTYPE,
		    /* 0x8E */
		    INSTCTRL,
		    /* 0x8F */
		    void 0,
		    /* 0x90 */
		    void 0,
		    /* 0x91 */
		    void 0,
		    /* 0x92 */
		    void 0,
		    /* 0x93 */
		    void 0,
		    /* 0x94 */
		    void 0,
		    /* 0x95 */
		    void 0,
		    /* 0x96 */
		    void 0,
		    /* 0x97 */
		    void 0,
		    /* 0x98 */
		    void 0,
		    /* 0x99 */
		    void 0,
		    /* 0x9A */
		    void 0,
		    /* 0x9B */
		    void 0,
		    /* 0x9C */
		    void 0,
		    /* 0x9D */
		    void 0,
		    /* 0x9E */
		    void 0,
		    /* 0x9F */
		    void 0,
		    /* 0xA0 */
		    void 0,
		    /* 0xA1 */
		    void 0,
		    /* 0xA2 */
		    void 0,
		    /* 0xA3 */
		    void 0,
		    /* 0xA4 */
		    void 0,
		    /* 0xA5 */
		    void 0,
		    /* 0xA6 */
		    void 0,
		    /* 0xA7 */
		    void 0,
		    /* 0xA8 */
		    void 0,
		    /* 0xA9 */
		    void 0,
		    /* 0xAA */
		    void 0,
		    /* 0xAB */
		    void 0,
		    /* 0xAC */
		    void 0,
		    /* 0xAD */
		    void 0,
		    /* 0xAE */
		    void 0,
		    /* 0xAF */
		    void 0,
		    /* 0xB0 */
		    PUSHB.bind(void 0, 1),
		    /* 0xB1 */
		    PUSHB.bind(void 0, 2),
		    /* 0xB2 */
		    PUSHB.bind(void 0, 3),
		    /* 0xB3 */
		    PUSHB.bind(void 0, 4),
		    /* 0xB4 */
		    PUSHB.bind(void 0, 5),
		    /* 0xB5 */
		    PUSHB.bind(void 0, 6),
		    /* 0xB6 */
		    PUSHB.bind(void 0, 7),
		    /* 0xB7 */
		    PUSHB.bind(void 0, 8),
		    /* 0xB8 */
		    PUSHW.bind(void 0, 1),
		    /* 0xB9 */
		    PUSHW.bind(void 0, 2),
		    /* 0xBA */
		    PUSHW.bind(void 0, 3),
		    /* 0xBB */
		    PUSHW.bind(void 0, 4),
		    /* 0xBC */
		    PUSHW.bind(void 0, 5),
		    /* 0xBD */
		    PUSHW.bind(void 0, 6),
		    /* 0xBE */
		    PUSHW.bind(void 0, 7),
		    /* 0xBF */
		    PUSHW.bind(void 0, 8),
		    /* 0xC0 */
		    MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 0),
		    /* 0xC1 */
		    MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 1),
		    /* 0xC2 */
		    MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 2),
		    /* 0xC3 */
		    MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 3),
		    /* 0xC4 */
		    MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 0),
		    /* 0xC5 */
		    MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 1),
		    /* 0xC6 */
		    MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 2),
		    /* 0xC7 */
		    MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 3),
		    /* 0xC8 */
		    MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 0),
		    /* 0xC9 */
		    MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 1),
		    /* 0xCA */
		    MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 2),
		    /* 0xCB */
		    MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 3),
		    /* 0xCC */
		    MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 0),
		    /* 0xCD */
		    MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 1),
		    /* 0xCE */
		    MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 2),
		    /* 0xCF */
		    MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 3),
		    /* 0xD0 */
		    MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 0),
		    /* 0xD1 */
		    MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 1),
		    /* 0xD2 */
		    MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 2),
		    /* 0xD3 */
		    MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 3),
		    /* 0xD4 */
		    MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 0),
		    /* 0xD5 */
		    MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 1),
		    /* 0xD6 */
		    MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 2),
		    /* 0xD7 */
		    MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 3),
		    /* 0xD8 */
		    MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 0),
		    /* 0xD9 */
		    MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 1),
		    /* 0xDA */
		    MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 2),
		    /* 0xDB */
		    MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 3),
		    /* 0xDC */
		    MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 0),
		    /* 0xDD */
		    MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 1),
		    /* 0xDE */
		    MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 2),
		    /* 0xDF */
		    MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 3),
		    /* 0xE0 */
		    MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 0),
		    /* 0xE1 */
		    MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 1),
		    /* 0xE2 */
		    MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 2),
		    /* 0xE3 */
		    MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 3),
		    /* 0xE4 */
		    MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 0),
		    /* 0xE5 */
		    MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 1),
		    /* 0xE6 */
		    MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 2),
		    /* 0xE7 */
		    MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 3),
		    /* 0xE8 */
		    MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 0),
		    /* 0xE9 */
		    MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 1),
		    /* 0xEA */
		    MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 2),
		    /* 0xEB */
		    MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 3),
		    /* 0xEC */
		    MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 0),
		    /* 0xED */
		    MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 1),
		    /* 0xEE */
		    MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 2),
		    /* 0xEF */
		    MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 3),
		    /* 0xF0 */
		    MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 0),
		    /* 0xF1 */
		    MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 1),
		    /* 0xF2 */
		    MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 2),
		    /* 0xF3 */
		    MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 3),
		    /* 0xF4 */
		    MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 0),
		    /* 0xF5 */
		    MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 1),
		    /* 0xF6 */
		    MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 2),
		    /* 0xF7 */
		    MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 3),
		    /* 0xF8 */
		    MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 0),
		    /* 0xF9 */
		    MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 1),
		    /* 0xFA */
		    MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 2),
		    /* 0xFB */
		    MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 3),
		    /* 0xFC */
		    MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 0),
		    /* 0xFD */
		    MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 1),
		    /* 0xFE */
		    MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 2),
		    /* 0xFF */
		    MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 3)
		  ];
		  var hintingtt_default = Hinting;

		  // src/tokenizer.mjs
		  function Token(char) {
		    this.char = char;
		    this.state = {};
		    this.activeState = null;
		  }
		  function ContextRange(startIndex, endOffset, contextName) {
		    this.contextName = contextName;
		    this.startIndex = startIndex;
		    this.endOffset = endOffset;
		  }
		  function ContextChecker(contextName, checkStart, checkEnd) {
		    this.contextName = contextName;
		    this.openRange = null;
		    this.ranges = [];
		    this.checkStart = checkStart;
		    this.checkEnd = checkEnd;
		  }
		  function ContextParams(context, currentIndex) {
		    this.context = context;
		    this.index = currentIndex;
		    this.length = context.length;
		    this.current = context[currentIndex];
		    this.backtrack = context.slice(0, currentIndex);
		    this.lookahead = context.slice(currentIndex + 1);
		  }
		  function Event(eventId) {
		    this.eventId = eventId;
		    this.subscribers = [];
		  }
		  function initializeCoreEvents(events) {
		    const coreEvents = [
		      "start",
		      "end",
		      "next",
		      "newToken",
		      "contextStart",
		      "contextEnd",
		      "insertToken",
		      "removeToken",
		      "removeRange",
		      "replaceToken",
		      "replaceRange",
		      "composeRUD",
		      "updateContextsRanges"
		    ];
		    for (let i = 0; i < coreEvents.length; i++) {
		      const eventId = coreEvents[i];
		      Object.defineProperty(this.events, eventId, {
		        value: new Event(eventId)
		      });
		    }
		    if (events) {
		      for (let i = 0; i < coreEvents.length; i++) {
		        const eventId = coreEvents[i];
		        const event = events[eventId];
		        if (typeof event === "function") {
		          this.events[eventId].subscribe(event);
		        }
		      }
		    }
		    const requiresContextUpdate = [
		      "insertToken",
		      "removeToken",
		      "removeRange",
		      "replaceToken",
		      "replaceRange",
		      "composeRUD"
		    ];
		    for (let i = 0; i < requiresContextUpdate.length; i++) {
		      const eventId = requiresContextUpdate[i];
		      this.events[eventId].subscribe(
		        this.updateContextsRanges
		      );
		    }
		  }
		  function Tokenizer(events) {
		    this.tokens = [];
		    this.registeredContexts = {};
		    this.contextCheckers = [];
		    this.events = {};
		    this.registeredModifiers = [];
		    initializeCoreEvents.call(this, events);
		  }
		  Token.prototype.setState = function(key, value) {
		    this.state[key] = value;
		    this.activeState = { key, value: this.state[key] };
		    return this.activeState;
		  };
		  Token.prototype.getState = function(stateId) {
		    return this.state[stateId] || null;
		  };
		  Tokenizer.prototype.inboundIndex = function(index) {
		    return index >= 0 && index < this.tokens.length;
		  };
		  Tokenizer.prototype.composeRUD = function(RUDs) {
		    const silent = true;
		    const state = RUDs.map((RUD) => this[RUD[0]].apply(this, RUD.slice(1).concat(silent)));
		    const hasFAILObject = (obj) => typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, "FAIL");
		    if (state.every(hasFAILObject)) {
		      return {
		        FAIL: "composeRUD: one or more operations hasn't completed successfully",
		        report: state.filter(hasFAILObject)
		      };
		    }
		    this.dispatch("composeRUD", [state.filter((op) => !hasFAILObject(op))]);
		  };
		  Tokenizer.prototype.replaceRange = function(startIndex, offset, tokens, silent) {
		    offset = offset !== null ? offset : this.tokens.length;
		    const isTokenType = tokens.every((token) => token instanceof Token);
		    if (!isNaN(startIndex) && this.inboundIndex(startIndex) && isTokenType) {
		      const replaced = this.tokens.splice.apply(
		        this.tokens,
		        [startIndex, offset].concat(tokens)
		      );
		      if (!silent) this.dispatch("replaceToken", [startIndex, offset, tokens]);
		      return [replaced, tokens];
		    } else {
		      return { FAIL: "replaceRange: invalid tokens or startIndex." };
		    }
		  };
		  Tokenizer.prototype.replaceToken = function(index, token, silent) {
		    if (!isNaN(index) && this.inboundIndex(index) && token instanceof Token) {
		      const replaced = this.tokens.splice(index, 1, token);
		      if (!silent) this.dispatch("replaceToken", [index, token]);
		      return [replaced[0], token];
		    } else {
		      return { FAIL: "replaceToken: invalid token or index." };
		    }
		  };
		  Tokenizer.prototype.removeRange = function(startIndex, offset, silent) {
		    offset = !isNaN(offset) ? offset : this.tokens.length;
		    const tokens = this.tokens.splice(startIndex, offset);
		    if (!silent) this.dispatch("removeRange", [tokens, startIndex, offset]);
		    return tokens;
		  };
		  Tokenizer.prototype.removeToken = function(index, silent) {
		    if (!isNaN(index) && this.inboundIndex(index)) {
		      const token = this.tokens.splice(index, 1);
		      if (!silent) this.dispatch("removeToken", [token, index]);
		      return token;
		    } else {
		      return { FAIL: "removeToken: invalid token index." };
		    }
		  };
		  Tokenizer.prototype.insertToken = function(tokens, index, silent) {
		    const tokenType = tokens.every(
		      (token) => token instanceof Token
		    );
		    if (tokenType) {
		      this.tokens.splice.apply(
		        this.tokens,
		        [index, 0].concat(tokens)
		      );
		      if (!silent) this.dispatch("insertToken", [tokens, index]);
		      return tokens;
		    } else {
		      return { FAIL: "insertToken: invalid token(s)." };
		    }
		  };
		  Tokenizer.prototype.registerModifier = function(modifierId, condition, modifier) {
		    this.events.newToken.subscribe(function(token, contextParams) {
		      const conditionParams = [token, contextParams];
		      const canApplyModifier = condition === null || condition.apply(this, conditionParams) === true;
		      const modifierParams = [token, contextParams];
		      if (canApplyModifier) {
		        let newStateValue = modifier.apply(this, modifierParams);
		        token.setState(modifierId, newStateValue);
		      }
		    });
		    this.registeredModifiers.push(modifierId);
		  };
		  Event.prototype.subscribe = function(eventHandler) {
		    if (typeof eventHandler === "function") {
		      return this.subscribers.push(eventHandler) - 1;
		    } else {
		      return { FAIL: `invalid '${this.eventId}' event handler` };
		    }
		  };
		  Event.prototype.unsubscribe = function(subsId) {
		    this.subscribers.splice(subsId, 1);
		  };
		  ContextParams.prototype.setCurrentIndex = function(index) {
		    this.index = index;
		    this.current = this.context[index];
		    this.backtrack = this.context.slice(0, index);
		    this.lookahead = this.context.slice(index + 1);
		  };
		  ContextParams.prototype.get = function(offset) {
		    switch (true) {
		      case offset === 0:
		        return this.current;
		      case (offset < 0 && Math.abs(offset) <= this.backtrack.length):
		        return this.backtrack.slice(offset)[0];
		      case (offset > 0 && offset <= this.lookahead.length):
		        return this.lookahead[offset - 1];
		      default:
		        return null;
		    }
		  };
		  Tokenizer.prototype.rangeToText = function(range) {
		    if (range instanceof ContextRange) {
		      return this.getRangeTokens(range).map((token) => token.char).join("");
		    }
		  };
		  Tokenizer.prototype.getText = function() {
		    return this.tokens.map((token) => token.char).join("");
		  };
		  Tokenizer.prototype.getContext = function(contextName) {
		    let context = this.registeredContexts[contextName];
		    return context ? context : null;
		  };
		  Tokenizer.prototype.on = function(eventName, eventHandler) {
		    const event = this.events[eventName];
		    if (event) {
		      return event.subscribe(eventHandler);
		    } else {
		      return null;
		    }
		  };
		  Tokenizer.prototype.dispatch = function(eventName, args) {
		    const event = this.events[eventName];
		    if (event instanceof Event) {
		      for (let i = 0; i < event.subscribers.length; i++) {
		        const subscriber = event.subscribers[i];
		        subscriber.apply(this, args || []);
		      }
		    }
		  };
		  Tokenizer.prototype.registerContextChecker = function(contextName, contextStartCheck, contextEndCheck) {
		    if (this.getContext(contextName)) return {
		      FAIL: `context name '${contextName}' is already registered.`
		    };
		    if (typeof contextStartCheck !== "function") return {
		      FAIL: "missing context start check."
		    };
		    if (typeof contextEndCheck !== "function") return {
		      FAIL: "missing context end check."
		    };
		    const contextCheckers = new ContextChecker(
		      contextName,
		      contextStartCheck,
		      contextEndCheck
		    );
		    this.registeredContexts[contextName] = contextCheckers;
		    this.contextCheckers.push(contextCheckers);
		    return contextCheckers;
		  };
		  Tokenizer.prototype.getRangeTokens = function(range) {
		    const endIndex = range.startIndex + range.endOffset;
		    return [].concat(
		      this.tokens.slice(range.startIndex, endIndex)
		    );
		  };
		  Tokenizer.prototype.getContextRanges = function(contextName) {
		    const context = this.getContext(contextName);
		    if (context) {
		      return context.ranges;
		    } else {
		      return { FAIL: `context checker '${contextName}' is not registered.` };
		    }
		  };
		  Tokenizer.prototype.resetContextsRanges = function() {
		    const registeredContexts = this.registeredContexts;
		    for (const contextName in registeredContexts) {
		      if (Object.prototype.hasOwnProperty.call(registeredContexts, contextName)) {
		        const context = registeredContexts[contextName];
		        context.ranges = [];
		      }
		    }
		  };
		  Tokenizer.prototype.updateContextsRanges = function() {
		    this.resetContextsRanges();
		    const chars = this.tokens.map((token) => token.char);
		    for (let i = 0; i < chars.length; i++) {
		      const contextParams = new ContextParams(chars, i);
		      this.runContextCheck(contextParams);
		    }
		    this.dispatch("updateContextsRanges", [this.registeredContexts]);
		  };
		  Tokenizer.prototype.setEndOffset = function(offset, contextName) {
		    const startIndex = this.getContext(contextName).openRange.startIndex;
		    let range = new ContextRange(startIndex, offset, contextName);
		    const ranges = this.getContext(contextName).ranges;
		    range.rangeId = `${contextName}.${ranges.length}`;
		    ranges.push(range);
		    this.getContext(contextName).openRange = null;
		    return range;
		  };
		  Tokenizer.prototype.runContextCheck = function(contextParams) {
		    const index = contextParams.index;
		    for (let i = 0; i < this.contextCheckers.length; i++) {
		      const contextChecker = this.contextCheckers[i];
		      let contextName = contextChecker.contextName;
		      let openRange = this.getContext(contextName).openRange;
		      if (!openRange && contextChecker.checkStart(contextParams)) {
		        openRange = new ContextRange(index, null, contextName);
		        this.getContext(contextName).openRange = openRange;
		        this.dispatch("contextStart", [contextName, index]);
		      }
		      if (!!openRange && contextChecker.checkEnd(contextParams)) {
		        const offset = index - openRange.startIndex + 1;
		        const range = this.setEndOffset(offset, contextName);
		        this.dispatch("contextEnd", [contextName, range]);
		      }
		    }
		  };
		  Tokenizer.prototype.tokenize = function(text) {
		    this.tokens = [];
		    this.resetContextsRanges();
		    let chars = Array.from(text);
		    this.dispatch("start");
		    for (let i = 0; i < chars.length; i++) {
		      const char = chars[i];
		      const contextParams = new ContextParams(chars, i);
		      this.dispatch("next", [contextParams]);
		      this.runContextCheck(contextParams);
		      let token = new Token(char);
		      this.tokens.push(token);
		      this.dispatch("newToken", [token, contextParams]);
		    }
		    this.dispatch("end", [this.tokens]);
		    return this.tokens;
		  };
		  var tokenizer_default = Tokenizer;

		  // src/char.mjs
		  function isArabicChar(c) {
		    return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(c);
		  }
		  function isIsolatedArabicChar(char) {
		    return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(char);
		  }
		  function isTashkeelArabicChar(char) {
		    return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(char);
		  }
		  function isThaiChar(c) {
		    return /[\u0E00-\u0E7F]/.test(c);
		  }
		  function isLatinChar(c) {
		    return /[A-z]/.test(c);
		  }
		  function isWhiteSpace(c) {
		    return /\s/.test(c);
		  }

		  // src/features/featureQuery.mjs
		  function FeatureQuery(font) {
		    this.font = font;
		    this.features = {};
		  }
		  function SubstitutionAction(action) {
		    this.id = action.id;
		    this.tag = action.tag;
		    this.substitution = action.substitution;
		  }
		  function lookupCoverage(glyphIndex, coverage) {
		    if (!glyphIndex) return -1;
		    switch (coverage.format) {
		      case 1:
		        return coverage.glyphs.indexOf(glyphIndex);
		      case 2: {
		        let ranges = coverage.ranges;
		        for (let i = 0; i < ranges.length; i++) {
		          const range = ranges[i];
		          if (glyphIndex >= range.start && glyphIndex <= range.end) {
		            let offset = glyphIndex - range.start;
		            return range.index + offset;
		          }
		        }
		        break;
		      }
		      default:
		        return -1;
		    }
		    return -1;
		  }
		  function singleSubstitutionFormat1(glyphIndex, subtable) {
		    let substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
		    if (substituteIndex === -1) return null;
		    return glyphIndex + subtable.deltaGlyphId;
		  }
		  function singleSubstitutionFormat2(glyphIndex, subtable) {
		    let substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
		    if (substituteIndex === -1) return null;
		    return subtable.substitute[substituteIndex];
		  }
		  function lookupCoverageList(coverageList, contextParams) {
		    let lookupList = [];
		    for (let i = 0; i < coverageList.length; i++) {
		      const coverage = coverageList[i];
		      let glyphIndex = contextParams.current;
		      glyphIndex = Array.isArray(glyphIndex) ? glyphIndex[0] : glyphIndex;
		      const lookupIndex = lookupCoverage(glyphIndex, coverage);
		      if (lookupIndex !== -1) {
		        lookupList.push(lookupIndex);
		      }
		    }
		    if (lookupList.length !== coverageList.length) return -1;
		    return lookupList;
		  }
		  function chainingSubstitutionFormat3(contextParams, subtable) {
		    const lookupsCount = subtable.inputCoverage.length + subtable.lookaheadCoverage.length + subtable.backtrackCoverage.length;
		    if (contextParams.context.length < lookupsCount) return [];
		    let inputLookups = lookupCoverageList(
		      subtable.inputCoverage,
		      contextParams
		    );
		    if (inputLookups === -1) return [];
		    const lookaheadOffset = subtable.inputCoverage.length - 1;
		    if (contextParams.lookahead.length < subtable.lookaheadCoverage.length) return [];
		    let lookaheadContext = contextParams.lookahead.slice(lookaheadOffset);
		    while (lookaheadContext.length && isTashkeelArabicChar(lookaheadContext[0].char)) {
		      lookaheadContext.shift();
		    }
		    const lookaheadParams = new ContextParams(lookaheadContext, 0);
		    let lookaheadLookups = lookupCoverageList(
		      subtable.lookaheadCoverage,
		      lookaheadParams
		    );
		    let backtrackContext = [].concat(contextParams.backtrack);
		    backtrackContext.reverse();
		    while (backtrackContext.length && isTashkeelArabicChar(backtrackContext[0].char)) {
		      backtrackContext.shift();
		    }
		    if (backtrackContext.length < subtable.backtrackCoverage.length) return [];
		    const backtrackParams = new ContextParams(backtrackContext, 0);
		    let backtrackLookups = lookupCoverageList(
		      subtable.backtrackCoverage,
		      backtrackParams
		    );
		    const contextRulesMatch = inputLookups.length === subtable.inputCoverage.length && lookaheadLookups.length === subtable.lookaheadCoverage.length && backtrackLookups.length === subtable.backtrackCoverage.length;
		    let substitutions = [];
		    if (contextRulesMatch) {
		      for (let i = 0; i < subtable.lookupRecords.length; i++) {
		        const lookupRecord = subtable.lookupRecords[i];
		        const lookupListIndex = lookupRecord.lookupListIndex;
		        const lookupTable = this.getLookupByIndex(lookupListIndex);
		        for (let s = 0; s < lookupTable.subtables.length; s++) {
		          let subtable2 = lookupTable.subtables[s];
		          let lookup;
		          let substitutionType = this.getSubstitutionType(lookupTable, subtable2);
		          if (substitutionType === "71") {
		            substitutionType = this.getSubstitutionType(subtable2, subtable2.extension);
		            lookup = this.getLookupMethod(subtable2, subtable2.extension);
		            subtable2 = subtable2.extension;
		          } else {
		            lookup = this.getLookupMethod(lookupTable, subtable2);
		          }
		          if (substitutionType === "12") {
		            const glyphIndex = contextParams.get(lookupRecord.sequenceIndex);
		            const substitution = lookup(glyphIndex);
		            if (substitution) substitutions.push(substitution);
		          } else if (substitutionType === "21") {
		            const glyphIndex = contextParams.get(lookupRecord.sequenceIndex);
		            const substitution = lookup(glyphIndex);
		            if (substitution) substitutions.push(substitution);
		          } else {
		            throw new Error(`Substitution type ${substitutionType} is not supported in chaining substitution`);
		          }
		        }
		      }
		    }
		    return substitutions;
		  }
		  function ligatureSubstitutionFormat1(contextParams, subtable) {
		    let glyphIndex = contextParams.current;
		    let ligSetIndex = lookupCoverage(glyphIndex, subtable.coverage);
		    if (ligSetIndex === -1) return null;
		    let ligature;
		    let ligatureSet = subtable.ligatureSets[ligSetIndex];
		    for (let s = 0; s < ligatureSet.length; s++) {
		      ligature = ligatureSet[s];
		      for (let l = 0; l < ligature.components.length; l++) {
		        const lookaheadItem = contextParams.lookahead[l];
		        const component = ligature.components[l];
		        if (lookaheadItem !== component) break;
		        if (l === ligature.components.length - 1) return ligature;
		      }
		    }
		    return null;
		  }
		  function contextSubstitutionFormat1(contextParams, subtable) {
		    let glyphId = contextParams.current;
		    let ligSetIndex = lookupCoverage(glyphId, subtable.coverage);
		    if (ligSetIndex === -1)
		      return null;
		    for (const ruleSet of subtable.ruleSets) {
		      for (const rule of ruleSet) {
		        let matched = true;
		        for (let i = 0; i < rule.input.length; i++) {
		          if (contextParams.lookahead[i] !== rule.input[i]) {
		            matched = false;
		            break;
		          }
		        }
		        if (matched) {
		          let substitutions = [];
		          substitutions.push(glyphId);
		          for (let i = 0; i < rule.input.length; i++) {
		            substitutions.push(rule.input[i]);
		          }
		          const parser = (substitutions2, lookupRecord) => {
		            const { lookupListIndex, sequenceIndex } = lookupRecord;
		            const { subtables } = this.getLookupByIndex(lookupListIndex);
		            for (const subtable2 of subtables) {
		              let ligSetIndex2 = lookupCoverage(substitutions2[sequenceIndex], subtable2.coverage);
		              if (ligSetIndex2 !== -1) {
		                substitutions2[sequenceIndex] = subtable2.deltaGlyphId;
		              }
		            }
		          };
		          for (let i = 0; i < rule.lookupRecords.length; i++) {
		            const lookupRecord = rule.lookupRecords[i];
		            parser(substitutions, lookupRecord);
		          }
		          return substitutions;
		        }
		      }
		    }
		    return null;
		  }
		  function contextSubstitutionFormat3(contextParams, subtable) {
		    if (contextParams.context.length < subtable.coverages.length) {
		      return [];
		    }
		    for (let i = 0; i < subtable.coverages.length; i++) {
		      let glyphIndex = contextParams.get(i);
		      glyphIndex = Array.isArray(glyphIndex) ? glyphIndex[0] : glyphIndex;
		      if (lookupCoverage(glyphIndex, subtable.coverages[i]) === -1) {
		        return [];
		      }
		    }
		    let substitutions = [];
		    for (let i = 0; i < subtable.lookupRecords.length; i++) {
		      const lookupRecord = subtable.lookupRecords[i];
		      const lookupListIndex = lookupRecord.lookupListIndex;
		      const lookupTable = this.getLookupByIndex(lookupListIndex);
		      for (let s = 0; s < lookupTable.subtables.length; s++) {
		        let subtable2 = lookupTable.subtables[s];
		        let lookup;
		        let substitutionType = this.getSubstitutionType(lookupTable, subtable2);
		        if (substitutionType === "71") {
		          substitutionType = this.getSubstitutionType(subtable2, subtable2.extension);
		          lookup = this.getLookupMethod(subtable2, subtable2.extension);
		          subtable2 = subtable2.extension;
		        } else {
		          lookup = this.getLookupMethod(lookupTable, subtable2);
		        }
		        if (substitutionType === "12") {
		          const glyphIndex = contextParams.get(lookupRecord.sequenceIndex);
		          const substitution = lookup(glyphIndex);
		          if (substitution) substitutions.push(substitution);
		        } else if (substitutionType === "21") {
		          const glyphIndex = contextParams.get(lookupRecord.sequenceIndex);
		          const substitution = lookup(glyphIndex);
		          if (substitution) substitutions.push(substitution);
		        }
		      }
		    }
		    return substitutions;
		  }
		  function decompositionSubstitutionFormat1(glyphIndex, subtable) {
		    let substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
		    if (substituteIndex === -1) return null;
		    return subtable.sequences[substituteIndex];
		  }
		  FeatureQuery.prototype.getDefaultScriptFeaturesIndexes = function() {
		    const scripts = this.font.tables.gsub.scripts;
		    for (let s = 0; s < scripts.length; s++) {
		      const script = scripts[s];
		      if (script.tag === "DFLT") return script.script.defaultLangSys.featureIndexes;
		    }
		    return [];
		  };
		  FeatureQuery.prototype.getScriptFeaturesIndexes = function(scriptTag) {
		    const tables = this.font.tables;
		    if (!tables.gsub) return [];
		    if (!scriptTag) return this.getDefaultScriptFeaturesIndexes();
		    const scripts = this.font.tables.gsub.scripts;
		    for (let i = 0; i < scripts.length; i++) {
		      const script = scripts[i];
		      if (script.tag === scriptTag && script.script.defaultLangSys) {
		        return script.script.defaultLangSys.featureIndexes;
		      } else {
		        let langSysRecords = script.langSysRecords;
		        if (langSysRecords) {
		          for (let j = 0; j < langSysRecords.length; j++) {
		            const langSysRecord = langSysRecords[j];
		            if (langSysRecord.tag === scriptTag) {
		              let langSys = langSysRecord.langSys;
		              return langSys.featureIndexes;
		            }
		          }
		        }
		      }
		    }
		    return this.getDefaultScriptFeaturesIndexes();
		  };
		  FeatureQuery.prototype.mapTagsToFeatures = function(features, scriptTag) {
		    let tags = {};
		    for (let i = 0; i < features.length; i++) {
		      const tag = features[i].tag;
		      const feature = features[i].feature;
		      tags[tag] = feature;
		    }
		    this.features[scriptTag].tags = tags;
		  };
		  FeatureQuery.prototype.getScriptFeatures = function(scriptTag) {
		    let features = this.features[scriptTag];
		    if (Object.prototype.hasOwnProperty.call(this.features, scriptTag)) return features;
		    const featuresIndexes = this.getScriptFeaturesIndexes(scriptTag);
		    if (!featuresIndexes) return null;
		    const gsub = this.font.tables.gsub;
		    features = featuresIndexes.map((index) => gsub.features[index]);
		    this.features[scriptTag] = features;
		    this.mapTagsToFeatures(features, scriptTag);
		    return features;
		  };
		  FeatureQuery.prototype.getSubstitutionType = function(lookupTable, subtable) {
		    const lookupType = lookupTable.lookupType.toString();
		    const substFormat = subtable.substFormat.toString();
		    return lookupType + substFormat;
		  };
		  FeatureQuery.prototype.getLookupMethod = function(lookupTable, subtable) {
		    let substitutionType = this.getSubstitutionType(lookupTable, subtable);
		    switch (substitutionType) {
		      case "11":
		        return (glyphIndex) => singleSubstitutionFormat1.apply(
		          this,
		          [glyphIndex, subtable]
		        );
		      case "12":
		        return (glyphIndex) => singleSubstitutionFormat2.apply(
		          this,
		          [glyphIndex, subtable]
		        );
		      case "63":
		        return (contextParams) => chainingSubstitutionFormat3.apply(
		          this,
		          [contextParams, subtable]
		        );
		      case "41":
		        return (contextParams) => ligatureSubstitutionFormat1.apply(
		          this,
		          [contextParams, subtable]
		        );
		      case "21":
		        return (glyphIndex) => decompositionSubstitutionFormat1.apply(
		          this,
		          [glyphIndex, subtable]
		        );
		      case "51":
		        return (contextParams) => contextSubstitutionFormat1.apply(
		          this,
		          [contextParams, subtable]
		        );
		      case "53":
		        return (contextParams) => contextSubstitutionFormat3.apply(
		          this,
		          [contextParams, subtable]
		        );
		      default:
		        throw new Error(
		          `substitutionType : ${substitutionType} lookupType: ${lookupTable.lookupType} - substFormat: ${subtable.substFormat} is not yet supported`
		        );
		    }
		  };
		  FeatureQuery.prototype.lookupFeature = function(query) {
		    let contextParams = query.contextParams;
		    let currentIndex = contextParams.index;
		    const feature = this.getFeature({
		      tag: query.tag,
		      script: query.script
		    });
		    if (!feature) return new Error(
		      `font '${(this.font.names.unicode || this.font.names.windows || this.font.names.macintosh).fullName.en}' doesn't support feature '${query.tag}' for script '${query.script}'.`
		    );
		    const lookups = this.getFeatureLookups(feature);
		    const substitutions = [].concat(contextParams.context);
		    for (let l = 0; l < lookups.length; l++) {
		      const lookupTable = lookups[l];
		      const subtables = this.getLookupSubtables(lookupTable);
		      for (let s = 0; s < subtables.length; s++) {
		        let subtable = subtables[s];
		        let substType = this.getSubstitutionType(lookupTable, subtable);
		        let lookup;
		        if (substType === "71") {
		          substType = this.getSubstitutionType(subtable, subtable.extension);
		          lookup = this.getLookupMethod(subtable, subtable.extension);
		          subtable = subtable.extension;
		        } else {
		          lookup = this.getLookupMethod(lookupTable, subtable);
		        }
		        let substitution;
		        switch (substType) {
		          case "11":
		            substitution = lookup(contextParams.current);
		            if (substitution) {
		              substitutions.splice(currentIndex, 1, new SubstitutionAction({
		                id: 11,
		                tag: query.tag,
		                substitution
		              }));
		            }
		            break;
		          case "12":
		            substitution = lookup(contextParams.current);
		            if (substitution) {
		              substitutions.splice(currentIndex, 1, new SubstitutionAction({
		                id: 12,
		                tag: query.tag,
		                substitution
		              }));
		            }
		            break;
		          case "63":
		            substitution = lookup(contextParams);
		            if (Array.isArray(substitution) && substitution.length) {
		              substitutions.splice(currentIndex, 1, new SubstitutionAction({
		                id: 63,
		                tag: query.tag,
		                substitution
		              }));
		            }
		            break;
		          case "41":
		            substitution = lookup(contextParams);
		            if (substitution) {
		              substitutions.splice(currentIndex, 1, new SubstitutionAction({
		                id: 41,
		                tag: query.tag,
		                substitution
		              }));
		            }
		            break;
		          case "21":
		            substitution = lookup(contextParams.current);
		            if (substitution) {
		              substitutions.splice(currentIndex, 1, new SubstitutionAction({
		                id: 21,
		                tag: query.tag,
		                substitution
		              }));
		            }
		            break;
		          case "51":
		          case "53":
		            substitution = lookup(contextParams);
		            if (Array.isArray(substitution) && substitution.length) {
		              substitutions.splice(currentIndex, 1, new SubstitutionAction({
		                id: parseInt(substType),
		                tag: query.tag,
		                substitution
		              }));
		            }
		            break;
		        }
		        contextParams = new ContextParams(substitutions, currentIndex);
		        if (Array.isArray(substitution) && !substitution.length) continue;
		        substitution = null;
		      }
		    }
		    return substitutions.length ? substitutions : null;
		  };
		  FeatureQuery.prototype.supports = function(query) {
		    if (!query.script) return false;
		    this.getScriptFeatures(query.script);
		    const supportedScript = Object.prototype.hasOwnProperty.call(this.features, query.script);
		    if (!query.tag) return supportedScript;
		    const supportedFeature = this.features[query.script].some((feature) => feature.tag === query.tag);
		    return supportedScript && supportedFeature;
		  };
		  FeatureQuery.prototype.getLookupSubtables = function(lookupTable) {
		    return lookupTable.subtables || null;
		  };
		  FeatureQuery.prototype.getLookupByIndex = function(index) {
		    const lookups = this.font.tables.gsub.lookups;
		    return lookups[index] || null;
		  };
		  FeatureQuery.prototype.getFeatureLookups = function(feature) {
		    return feature.lookupListIndexes.map(this.getLookupByIndex.bind(this));
		  };
		  FeatureQuery.prototype.getFeature = function getFeature(query) {
		    if (!this.font) return { FAIL: "No font was found" };
		    if (!Object.prototype.hasOwnProperty.call(this.features, query.script)) {
		      this.getScriptFeatures(query.script);
		    }
		    const scriptFeatures = this.features[query.script];
		    if (!scriptFeatures) return { FAIL: `No feature for script ${query.script}` };
		    if (!scriptFeatures.tags[query.tag]) return null;
		    return this.features[query.script].tags[query.tag];
		  };
		  var featureQuery_default = FeatureQuery;

		  // src/features/arab/contextCheck/arabicWord.mjs
		  function arabicWordStartCheck(contextParams) {
		    const char = contextParams.current;
		    const prevChar = contextParams.get(-1);
		    return (
		      // ? arabic first char
		      prevChar === null && isArabicChar(char) || // ? arabic char preceded with a non arabic char
		      !isArabicChar(prevChar) && isArabicChar(char)
		    );
		  }
		  function arabicWordEndCheck(contextParams) {
		    const nextChar = contextParams.get(1);
		    return (
		      // ? last arabic char
		      nextChar === null || // ? next char is not arabic
		      !isArabicChar(nextChar)
		    );
		  }
		  var arabicWord_default = {
		    startCheck: arabicWordStartCheck,
		    endCheck: arabicWordEndCheck
		  };

		  // src/features/arab/contextCheck/arabicSentence.mjs
		  function arabicSentenceStartCheck(contextParams) {
		    const char = contextParams.current;
		    const prevChar = contextParams.get(-1);
		    return (
		      // ? an arabic char preceded with a non arabic char
		      (isArabicChar(char) || isTashkeelArabicChar(char)) && !isArabicChar(prevChar)
		    );
		  }
		  function arabicSentenceEndCheck(contextParams) {
		    const nextChar = contextParams.get(1);
		    switch (true) {
		      case nextChar === null:
		        return true;
		      case (!isArabicChar(nextChar) && !isTashkeelArabicChar(nextChar)): {
		        const nextIsWhitespace = isWhiteSpace(nextChar);
		        if (!nextIsWhitespace) return true;
		        if (nextIsWhitespace) {
		          let arabicCharAhead = false;
		          arabicCharAhead = contextParams.lookahead.some(
		            (c) => isArabicChar(c) || isTashkeelArabicChar(c)
		          );
		          if (!arabicCharAhead) return true;
		        }
		        break;
		      }
		      default:
		        return false;
		    }
		  }
		  var arabicSentence_default = {
		    startCheck: arabicSentenceStartCheck,
		    endCheck: arabicSentenceEndCheck
		  };

		  // src/features/applySubstitution.mjs
		  function singleSubstitutionFormat12(action, tokens, index) {
		    tokens[index].setState(action.tag, action.substitution);
		  }
		  function singleSubstitutionFormat22(action, tokens, index) {
		    tokens[index].setState(action.tag, action.substitution);
		  }
		  function chainingSubstitutionFormat32(action, tokens, index) {
		    for (let i = 0; i < action.substitution.length; i++) {
		      const subst = action.substitution[i];
		      const token = tokens[index + i];
		      if (Array.isArray(subst)) {
		        if (subst.length) {
		          token.setState(action.tag, subst[0]);
		        } else {
		          token.setState("deleted", true);
		        }
		        continue;
		      }
		      token.setState(action.tag, subst);
		    }
		  }
		  function ligatureSubstitutionFormat12(action, tokens, index) {
		    let token = tokens[index];
		    token.setState(action.tag, action.substitution.ligGlyph);
		    const compsCount = action.substitution.components.length;
		    for (let i = 0; i < compsCount; i++) {
		      token = tokens[index + i + 1];
		      token.setState("deleted", true);
		    }
		  }
		  var SUBSTITUTIONS = {
		    11: singleSubstitutionFormat12,
		    12: singleSubstitutionFormat22,
		    63: chainingSubstitutionFormat32,
		    41: ligatureSubstitutionFormat12,
		    51: chainingSubstitutionFormat32,
		    53: chainingSubstitutionFormat32
		  };
		  function applySubstitution(action, tokens, index) {
		    if (action instanceof SubstitutionAction && SUBSTITUTIONS[action.id]) {
		      SUBSTITUTIONS[action.id](action, tokens, index);
		    }
		  }
		  var applySubstitution_default = applySubstitution;

		  // src/features/arab/arabicPresentationForms.mjs
		  function willConnectPrev(charContextParams) {
		    let backtrack = [].concat(charContextParams.backtrack);
		    for (let i = backtrack.length - 1; i >= 0; i--) {
		      const prevChar = backtrack[i];
		      const isolated = isIsolatedArabicChar(prevChar);
		      const tashkeel = isTashkeelArabicChar(prevChar);
		      if (!isolated && !tashkeel) return true;
		      if (isolated) return false;
		    }
		    return false;
		  }
		  function willConnectNext(charContextParams) {
		    if (isIsolatedArabicChar(charContextParams.current)) return false;
		    for (let i = 0; i < charContextParams.lookahead.length; i++) {
		      const nextChar = charContextParams.lookahead[i];
		      const tashkeel = isTashkeelArabicChar(nextChar);
		      if (!tashkeel) return true;
		    }
		    return false;
		  }
		  function arabicPresentationForms(range) {
		    const script = "arab";
		    const tags = this.featuresTags[script];
		    const tokens = this.tokenizer.getRangeTokens(range);
		    if (tokens.length === 1) return;
		    let contextParams = new ContextParams(
		      tokens.map(
		        (token) => token.getState("glyphIndex")
		      ),
		      0
		    );
		    const charContextParams = new ContextParams(
		      tokens.map(
		        (token) => token.char
		      ),
		      0
		    );
		    for (let i = 0; i < tokens.length; i++) {
		      const token = tokens[i];
		      if (isTashkeelArabicChar(token.char)) continue;
		      contextParams.setCurrentIndex(i);
		      charContextParams.setCurrentIndex(i);
		      let CONNECT = 0;
		      if (willConnectPrev(charContextParams)) CONNECT |= 1;
		      if (willConnectNext(charContextParams)) CONNECT |= 2;
		      let tag;
		      switch (CONNECT) {
		        case 1:
		          tag = "fina";
		          break;
		        case 2:
		          tag = "init";
		          break;
		        case 3:
		          tag = "medi";
		          break;
		      }
		      if (tags.indexOf(tag) === -1) continue;
		      let substitutions = this.query.lookupFeature({
		        tag,
		        script,
		        contextParams
		      });
		      if (substitutions instanceof Error) {
		        console.info(substitutions.message);
		        continue;
		      }
		      for (let j = 0; j < substitutions.length; j++) {
		        const action = substitutions[j];
		        if (action instanceof SubstitutionAction) {
		          applySubstitution_default(action, tokens, j);
		          contextParams.context[j] = action.substitution;
		        }
		      }
		    }
		  }
		  var arabicPresentationForms_default = arabicPresentationForms;

		  // src/features/arab/arabicRequiredLigatures.mjs
		  function getContextParams(tokens, index) {
		    const context = tokens.map((token) => token.activeState.value);
		    return new ContextParams(context, 0);
		  }
		  function arabicRequiredLigatures(range) {
		    const script = "arab";
		    let tokens = this.tokenizer.getRangeTokens(range);
		    let contextParams = getContextParams(tokens);
		    for (let index = 0; index < contextParams.context.length; index++) {
		      contextParams.setCurrentIndex(index);
		      let substitutions = this.query.lookupFeature({
		        tag: "rlig",
		        script,
		        contextParams
		      });
		      if (substitutions.length) {
		        for (let i = 0; i < substitutions.length; i++) {
		          const action = substitutions[i];
		          applySubstitution_default(action, tokens, index);
		        }
		        contextParams = getContextParams(tokens);
		      }
		    }
		  }
		  var arabicRequiredLigatures_default = arabicRequiredLigatures;

		  // src/features/ccmp/contextCheck/ccmpReplacement.mjs
		  function ccmpReplacementStartCheck(contextParams) {
		    return contextParams.index === 0 && contextParams.context.length > 1;
		  }
		  function ccmpReplacementEndCheck(contextParams) {
		    return contextParams.index === contextParams.context.length - 1;
		  }
		  var ccmpReplacement_default = {
		    startCheck: ccmpReplacementStartCheck,
		    endCheck: ccmpReplacementEndCheck
		  };

		  // src/features/ccmp/ccmpReplacementLigatures.mjs
		  function getContextParams2(tokens, index) {
		    const context = tokens.map((token) => token.activeState.value);
		    return new ContextParams(context, 0);
		  }
		  function ccmpReplacementLigatures(range) {
		    const script = "delf";
		    const tag = "ccmp";
		    let tokens = this.tokenizer.getRangeTokens(range);
		    let contextParams = getContextParams2(tokens);
		    for (let index = 0; index < contextParams.context.length; index++) {
		      if (!this.query.getFeature({ tag, script, contextParams })) {
		        continue;
		      }
		      contextParams.setCurrentIndex(index);
		      let substitutions = this.query.lookupFeature({
		        tag,
		        script,
		        contextParams
		      });
		      if (substitutions.length) {
		        for (let i = 0; i < substitutions.length; i++) {
		          const action = substitutions[i];
		          applySubstitution_default(action, tokens, index);
		        }
		        contextParams = getContextParams2(tokens);
		      }
		    }
		  }
		  var ccmpReplacementLigatures_default = ccmpReplacementLigatures;

		  // src/features/latn/contextCheck/latinWord.mjs
		  function latinWordStartCheck(contextParams) {
		    const char = contextParams.current;
		    const prevChar = contextParams.get(-1);
		    return (
		      // ? latin first char
		      prevChar === null && isLatinChar(char) || // ? latin char preceded with a non latin char
		      !isLatinChar(prevChar) && isLatinChar(char)
		    );
		  }
		  function latinWordEndCheck(contextParams) {
		    const nextChar = contextParams.get(1);
		    return (
		      // ? last latin char
		      nextChar === null || // ? next char is not latin
		      !isLatinChar(nextChar)
		    );
		  }
		  var latinWord_default = {
		    startCheck: latinWordStartCheck,
		    endCheck: latinWordEndCheck
		  };

		  // src/features/latn/latinLigatures.mjs
		  function getContextParams3(tokens, index) {
		    const context = tokens.map((token) => token.activeState.value);
		    return new ContextParams(context, 0);
		  }
		  function latinLigature(range) {
		    const script = "latn";
		    let tokens = this.tokenizer.getRangeTokens(range);
		    let contextParams = getContextParams3(tokens);
		    for (let index = 0; index < contextParams.context.length; index++) {
		      contextParams.setCurrentIndex(index);
		      let substitutions = this.query.lookupFeature({
		        tag: "liga",
		        script,
		        contextParams
		      });
		      if (substitutions.length) {
		        for (let i = 0; i < substitutions.length; i++) {
		          const action = substitutions[i];
		          applySubstitution_default(action, tokens, index);
		        }
		        contextParams = getContextParams3(tokens);
		      }
		    }
		  }
		  var latinLigatures_default = latinLigature;

		  // src/features/thai/contextCheck/thaiWord.mjs
		  function thaiWordStartCheck(contextParams) {
		    const char = contextParams.current;
		    const prevChar = contextParams.get(-1);
		    return (
		      // ? thai first char
		      prevChar === null && isThaiChar(char) || // ? thai char preceded with a non thai char
		      !isThaiChar(prevChar) && isThaiChar(char)
		    );
		  }
		  function thaiWordEndCheck(contextParams) {
		    const nextChar = contextParams.get(1);
		    return (
		      // ? last thai char
		      nextChar === null || // ? next char is not thai
		      !isThaiChar(nextChar)
		    );
		  }
		  var thaiWord_default = {
		    startCheck: thaiWordStartCheck,
		    endCheck: thaiWordEndCheck
		  };

		  // src/features/thai/thaiGlyphComposition.mjs
		  function getContextParams4(tokens, index) {
		    const context = tokens.map((token) => token.activeState.value);
		    return new ContextParams(context, index || 0);
		  }
		  function thaiGlyphComposition(range) {
		    const script = "thai";
		    let tokens = this.tokenizer.getRangeTokens(range);
		    let contextParams = getContextParams4(tokens, 0);
		    for (let index = 0; index < contextParams.context.length; index++) {
		      contextParams.setCurrentIndex(index);
		      let substitutions = this.query.lookupFeature({
		        tag: "ccmp",
		        script,
		        contextParams
		      });
		      if (substitutions.length) {
		        for (let i = 0; i < substitutions.length; i++) {
		          const action = substitutions[i];
		          applySubstitution_default(action, tokens, index);
		        }
		        contextParams = getContextParams4(tokens, index);
		      }
		    }
		  }
		  var thaiGlyphComposition_default = thaiGlyphComposition;

		  // src/features/thai/thaiLigatures.mjs
		  function getContextParams5(tokens, index) {
		    const context = tokens.map((token) => token.activeState.value);
		    return new ContextParams(context, index || 0);
		  }
		  function thaiLigatures(range) {
		    const script = "thai";
		    let tokens = this.tokenizer.getRangeTokens(range);
		    let contextParams = getContextParams5(tokens, 0);
		    for (let index = 0; index < contextParams.context.length; index++) {
		      contextParams.setCurrentIndex(index);
		      let substitutions = this.query.lookupFeature({
		        tag: "liga",
		        script,
		        contextParams
		      });
		      if (substitutions.length) {
		        for (let i = 0; i < substitutions.length; i++) {
		          const action = substitutions[i];
		          applySubstitution_default(action, tokens, index);
		        }
		        contextParams = getContextParams5(tokens, index);
		      }
		    }
		  }
		  var thaiLigatures_default = thaiLigatures;

		  // src/features/thai/thaiRequiredLigatures.mjs
		  function getContextParams6(tokens, index) {
		    const context = tokens.map((token) => token.activeState.value);
		    return new ContextParams(context, index || 0);
		  }
		  function thaiRequiredLigatures(range) {
		    const script = "thai";
		    let tokens = this.tokenizer.getRangeTokens(range);
		    let contextParams = getContextParams6(tokens, 0);
		    for (let index = 0; index < contextParams.context.length; index++) {
		      contextParams.setCurrentIndex(index);
		      let substitutions = this.query.lookupFeature({
		        tag: "rlig",
		        script,
		        contextParams
		      });
		      if (substitutions.length) {
		        for (let i = 0; i < substitutions.length; i++) {
		          const action = substitutions[i];
		          applySubstitution_default(action, tokens, index);
		        }
		        contextParams = getContextParams6(tokens, index);
		      }
		    }
		  }
		  var thaiRequiredLigatures_default = thaiRequiredLigatures;

		  // src/features/unicode/contextCheck/variationSequenceCheck.mjs
		  function isVariationSequenceSelector(char) {
		    if (char === null) return false;
		    const charCode = char.codePointAt(0);
		    return (
		      // Mongolian Variation Selectors
		      charCode >= 6155 && charCode <= 6157 || // Generic Variation Selectors
		      charCode >= 65024 && charCode <= 65039 || // Ideographic Variation Sequences
		      charCode >= 917760 && charCode <= 917999
		    );
		  }
		  function unicodeVariationSequenceStartCheck(contextParams) {
		    const char = contextParams.current;
		    const nextChar = contextParams.get(1);
		    return nextChar === null && isVariationSequenceSelector(char) || isVariationSequenceSelector(nextChar);
		  }
		  function unicodeVariationSequenceEndCheck(contextParams) {
		    const nextChar = contextParams.get(1);
		    return nextChar === null || !isVariationSequenceSelector(nextChar);
		  }
		  var variationSequenceCheck_default = {
		    startCheck: unicodeVariationSequenceStartCheck,
		    endCheck: unicodeVariationSequenceEndCheck
		  };

		  // src/features/unicode/variationSequences.mjs
		  function unicodeVariationSequence(range) {
		    const font = this.query.font;
		    const tokens = this.tokenizer.getRangeTokens(range);
		    tokens[1].setState("deleted", true);
		    if (font.tables.cmap && font.tables.cmap.varSelectorList) {
		      const baseCodePoint = tokens[0].char.codePointAt(0);
		      const vsCodePoint = tokens[1].char.codePointAt(0);
		      const selectorLookup = font.tables.cmap.varSelectorList[vsCodePoint];
		      if (selectorLookup !== void 0) {
		        if (selectorLookup.nonDefaultUVS) {
		          const mappings = selectorLookup.nonDefaultUVS.uvsMappings;
		          if (mappings[baseCodePoint]) {
		            const replacementGlyphId = mappings[baseCodePoint].glyphID;
		            if (font.glyphs.glyphs[replacementGlyphId] !== void 0) {
		              tokens[0].setState("glyphIndex", replacementGlyphId);
		            }
		          }
		        }
		      }
		    }
		  }
		  var variationSequences_default = unicodeVariationSequence;

		  // src/bidi.mjs
		  function Bidi(baseDir) {
		    this.baseDir = baseDir || "ltr";
		    this.tokenizer = new tokenizer_default();
		    this.featuresTags = {};
		  }
		  Bidi.prototype.setText = function(text) {
		    this.text = text;
		  };
		  Bidi.prototype.contextChecks = {
		    ccmpReplacementCheck: ccmpReplacement_default,
		    latinWordCheck: latinWord_default,
		    arabicWordCheck: arabicWord_default,
		    arabicSentenceCheck: arabicSentence_default,
		    thaiWordCheck: thaiWord_default,
		    unicodeVariationSequenceCheck: variationSequenceCheck_default
		  };
		  function registerContextChecker(checkId) {
		    const check = this.contextChecks[`${checkId}Check`];
		    return this.tokenizer.registerContextChecker(
		      checkId,
		      check.startCheck,
		      check.endCheck
		    );
		  }
		  function tokenizeText() {
		    registerContextChecker.call(this, "ccmpReplacement");
		    registerContextChecker.call(this, "latinWord");
		    registerContextChecker.call(this, "arabicWord");
		    registerContextChecker.call(this, "arabicSentence");
		    registerContextChecker.call(this, "thaiWord");
		    registerContextChecker.call(this, "unicodeVariationSequence");
		    return this.tokenizer.tokenize(this.text);
		  }
		  function reverseArabicSentences() {
		    const ranges = this.tokenizer.getContextRanges("arabicSentence");
		    for (let i = 0; i < ranges.length; i++) {
		      const range = ranges[i];
		      let rangeTokens = this.tokenizer.getRangeTokens(range);
		      this.tokenizer.replaceRange(
		        range.startIndex,
		        range.endOffset,
		        rangeTokens.reverse()
		      );
		    }
		  }
		  Bidi.prototype.registerFeatures = function(script, tags) {
		    const supportedTags = tags.filter(
		      (tag) => this.query.supports({ script, tag })
		    );
		    if (!Object.prototype.hasOwnProperty.call(this.featuresTags, script)) {
		      this.featuresTags[script] = supportedTags;
		    } else {
		      this.featuresTags[script] = this.featuresTags[script].concat(supportedTags);
		    }
		  };
		  Bidi.prototype.applyFeatures = function(font, features) {
		    if (!font) throw new Error(
		      "No valid font was provided to apply features"
		    );
		    if (!this.query) this.query = new featureQuery_default(font);
		    for (let f = 0; f < features.length; f++) {
		      const feature = features[f];
		      if (!this.query.supports({ script: feature.script })) continue;
		      this.registerFeatures(feature.script, feature.tags);
		    }
		  };
		  Bidi.prototype.registerModifier = function(modifierId, condition, modifier) {
		    this.tokenizer.registerModifier(modifierId, condition, modifier);
		  };
		  function checkGlyphIndexStatus() {
		    if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1) {
		      throw new Error(
		        "glyphIndex modifier is required to apply arabic presentation features."
		      );
		    }
		  }
		  function applyArabicPresentationForms() {
		    const script = "arab";
		    if (!Object.prototype.hasOwnProperty.call(this.featuresTags, script)) return;
		    checkGlyphIndexStatus.call(this);
		    const ranges = this.tokenizer.getContextRanges("arabicWord");
		    for (let i = 0; i < ranges.length; i++) {
		      const range = ranges[i];
		      arabicPresentationForms_default.call(this, range);
		    }
		  }
		  function applyCcmpReplacement() {
		    checkGlyphIndexStatus.call(this);
		    const ranges = this.tokenizer.getContextRanges("ccmpReplacement");
		    for (let i = 0; i < ranges.length; i++) {
		      const range = ranges[i];
		      ccmpReplacementLigatures_default.call(this, range);
		    }
		  }
		  function applyArabicRequireLigatures() {
		    if (!this.hasFeatureEnabled("arab", "rlig")) return;
		    checkGlyphIndexStatus.call(this);
		    const ranges = this.tokenizer.getContextRanges("arabicWord");
		    for (let i = 0; i < ranges.length; i++) {
		      const range = ranges[i];
		      arabicRequiredLigatures_default.call(this, range);
		    }
		  }
		  function applyLatinLigatures() {
		    if (!this.hasFeatureEnabled("latn", "liga")) return;
		    checkGlyphIndexStatus.call(this);
		    const ranges = this.tokenizer.getContextRanges("latinWord");
		    for (let i = 0; i < ranges.length; i++) {
		      const range = ranges[i];
		      latinLigatures_default.call(this, range);
		    }
		  }
		  function applyUnicodeVariationSequences() {
		    const ranges = this.tokenizer.getContextRanges("unicodeVariationSequence");
		    for (let i = 0; i < ranges.length; i++) {
		      const range = ranges[i];
		      variationSequences_default.call(this, range);
		    }
		  }
		  function applyThaiFeatures() {
		    checkGlyphIndexStatus.call(this);
		    const ranges = this.tokenizer.getContextRanges("thaiWord");
		    for (let i = 0; i < ranges.length; i++) {
		      const range = ranges[i];
		      if (this.hasFeatureEnabled("thai", "liga")) thaiLigatures_default.call(this, range);
		      if (this.hasFeatureEnabled("thai", "rlig")) thaiRequiredLigatures_default.call(this, range);
		      if (this.hasFeatureEnabled("thai", "ccmp")) thaiGlyphComposition_default.call(this, range);
		    }
		  }
		  Bidi.prototype.checkContextReady = function(contextId) {
		    return !!this.tokenizer.getContext(contextId);
		  };
		  Bidi.prototype.applyFeaturesToContexts = function() {
		    if (this.checkContextReady("ccmpReplacement")) {
		      applyCcmpReplacement.call(this);
		    }
		    if (this.checkContextReady("arabicWord")) {
		      applyArabicPresentationForms.call(this);
		      applyArabicRequireLigatures.call(this);
		    }
		    if (this.checkContextReady("latinWord")) {
		      applyLatinLigatures.call(this);
		    }
		    if (this.checkContextReady("arabicSentence")) {
		      reverseArabicSentences.call(this);
		    }
		    if (this.checkContextReady("thaiWord")) {
		      applyThaiFeatures.call(this);
		    }
		    if (this.checkContextReady("unicodeVariationSequence")) {
		      applyUnicodeVariationSequences.call(this);
		    }
		  };
		  Bidi.prototype.hasFeatureEnabled = function(script, tag) {
		    return (this.featuresTags[script] || []).indexOf(tag) !== -1;
		  };
		  Bidi.prototype.processText = function(text) {
		    if (!this.text || this.text !== text) {
		      this.setText(text);
		      tokenizeText.call(this);
		      this.applyFeaturesToContexts();
		    }
		  };
		  Bidi.prototype.getBidiText = function(text) {
		    this.processText(text);
		    return this.tokenizer.getText();
		  };
		  Bidi.prototype.getTextGlyphs = function(text) {
		    this.processText(text);
		    let indexes = [];
		    for (let i = 0; i < this.tokenizer.tokens.length; i++) {
		      const token = this.tokenizer.tokens[i];
		      if (token.state.deleted) continue;
		      const index = token.activeState.value;
		      indexes.push(Array.isArray(index) ? index[0] : index);
		    }
		    return indexes;
		  };
		  var bidi_default = Bidi;

		  // src/font.mjs
		  function createDefaultNamesInfo(options) {
		    return {
		      fontFamily: { en: options.familyName || " " },
		      fontSubfamily: { en: options.styleName || " " },
		      fullName: { en: options.fullName || options.familyName + " " + options.styleName },
		      // postScriptName may not contain any whitespace
		      postScriptName: { en: options.postScriptName || (options.familyName + options.styleName).replace(/\s/g, "") },
		      designer: { en: options.designer || " " },
		      designerURL: { en: options.designerURL || " " },
		      manufacturer: { en: options.manufacturer || " " },
		      manufacturerURL: { en: options.manufacturerURL || " " },
		      license: { en: options.license || " " },
		      licenseURL: { en: options.licenseURL || " " },
		      version: { en: options.version || "Version 0.1" },
		      description: { en: options.description || " " },
		      copyright: { en: options.copyright || " " },
		      trademark: { en: options.trademark || " " }
		    };
		  }
		  function Font(options) {
		    options = options || {};
		    options.tables = options.tables || {};
		    if (!options.empty) {
		      if (!options.familyName) throw new Error("When creating a new Font object, familyName is required.");
		      if (!options.styleName) throw new Error("When creating a new Font object, styleName is required.");
		      if (!options.unitsPerEm) throw new Error("When creating a new Font object, unitsPerEm is required.");
		      if (!options.ascender) throw new Error("When creating a new Font object, ascender is required.");
		      if (options.descender > 0) throw new Error("When creating a new Font object, negative descender value is required.");
		      this.names = {};
		      this.names.unicode = createDefaultNamesInfo(options);
		      this.names.macintosh = createDefaultNamesInfo(options);
		      this.names.windows = createDefaultNamesInfo(options);
		      this.unitsPerEm = options.unitsPerEm || 1e3;
		      this.ascender = options.ascender;
		      this.descender = options.descender;
		      this.createdTimestamp = options.createdTimestamp;
		      this.italicAngle = options.italicAngle || 0;
		      this.weightClass = options.weightClass || 0;
		      let selection = 0;
		      if (options.fsSelection) {
		        selection = options.fsSelection;
		      } else {
		        if (this.italicAngle < 0) {
		          selection |= this.fsSelectionValues.ITALIC;
		        } else if (this.italicAngle > 0) {
		          selection |= this.fsSelectionValues.OBLIQUE;
		        }
		        if (this.weightClass >= 600) {
		          selection |= this.fsSelectionValues.BOLD;
		        }
		        if (selection === 0) {
		          selection = this.fsSelectionValues.REGULAR;
		        }
		      }
		      if (!options.panose || !Array.isArray(options.panose)) {
		        options.panose = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		      }
		      this.tables = Object.assign(options.tables, {
		        os2: Object.assign({
		          usWeightClass: options.weightClass || this.usWeightClasses.MEDIUM,
		          usWidthClass: options.widthClass || this.usWidthClasses.MEDIUM,
		          bFamilyType: options.panose[0] || 0,
		          bSerifStyle: options.panose[1] || 0,
		          bWeight: options.panose[2] || 0,
		          bProportion: options.panose[3] || 0,
		          bContrast: options.panose[4] || 0,
		          bStrokeVariation: options.panose[5] || 0,
		          bArmStyle: options.panose[6] || 0,
		          bLetterform: options.panose[7] || 0,
		          bMidline: options.panose[8] || 0,
		          bXHeight: options.panose[9] || 0,
		          fsSelection: selection
		        }, options.tables.os2)
		      });
		    }
		    this.supported = true;
		    this.glyphs = new glyphset_default.GlyphSet(this, options.glyphs || []);
		    this.encoding = new DefaultEncoding(this);
		    this.position = new position_default(this);
		    this.substitution = new substitution_default(this);
		    this.tables = this.tables || {};
		    this.tables = new Proxy(this.tables, {
		      set: (tables, tableName, tableData) => {
		        tables[tableName] = tableData;
		        if (tables.fvar && (tables.gvar || tables.cff2) && !this.variation) {
		          this.variation = new VariationManager(this);
		        }
		        return true;
		      }
		    });
		    this.palettes = new PaletteManager(this);
		    this.layers = new LayerManager(this);
		    this.svgImages = new SVGImageManager(this);
		    this._push = null;
		    this._hmtxTableData = {};
		    Object.defineProperty(this, "hinting", {
		      get: function() {
		        if (this._hinting) return this._hinting;
		        if (this.outlinesFormat === "truetype") {
		          return this._hinting = new hintingtt_default(this);
		        }
		        return null;
		      }
		    });
		  }
		  Font.prototype.hasChar = function(c) {
		    return this.encoding.charToGlyphIndex(c) > 0;
		  };
		  Font.prototype.charToGlyphIndex = function(s) {
		    return this.encoding.charToGlyphIndex(s);
		  };
		  Font.prototype.charToGlyph = function(c) {
		    const glyphIndex = this.charToGlyphIndex(c);
		    let glyph = this.glyphs.get(glyphIndex);
		    if (!glyph) {
		      glyph = this.glyphs.get(0);
		    }
		    return glyph;
		  };
		  Font.prototype.updateFeatures = function(options) {
		    return this.defaultRenderOptions.features.map((feature) => {
		      if (feature.script === "latn") {
		        return {
		          script: "latn",
		          tags: feature.tags.filter((tag) => options[tag])
		        };
		      } else {
		        return feature;
		      }
		    });
		  };
		  Font.prototype.stringToGlyphIndexes = function(s, options) {
		    const bidi = new bidi_default();
		    const charToGlyphIndexMod = (token) => this.charToGlyphIndex(token.char);
		    bidi.registerModifier("glyphIndex", null, charToGlyphIndexMod);
		    let features = options ? this.updateFeatures(options.features) : this.defaultRenderOptions.features;
		    bidi.applyFeatures(this, features);
		    return bidi.getTextGlyphs(s);
		  };
		  Font.prototype.stringToGlyphs = function(s, options) {
		    const indexes = this.stringToGlyphIndexes(s, options);
		    let length = indexes.length;
		    const glyphs = new Array(length);
		    const notdef = this.glyphs.get(0);
		    for (let i = 0; i < length; i += 1) {
		      glyphs[i] = this.glyphs.get(indexes[i]) || notdef;
		    }
		    return glyphs;
		  };
		  Font.prototype.nameToGlyphIndex = function(name) {
		    return this.glyphNames.nameToGlyphIndex(name);
		  };
		  Font.prototype.nameToGlyph = function(name) {
		    const glyphIndex = this.nameToGlyphIndex(name);
		    let glyph = this.glyphs.get(glyphIndex);
		    if (!glyph) {
		      glyph = this.glyphs.get(0);
		    }
		    return glyph;
		  };
		  Font.prototype.glyphIndexToName = function(gid) {
		    if (!this.glyphNames.glyphIndexToName) {
		      return "";
		    }
		    return this.glyphNames.glyphIndexToName(gid);
		  };
		  Font.prototype.getKerningValue = function(leftGlyph, rightGlyph) {
		    leftGlyph = leftGlyph.index || leftGlyph;
		    rightGlyph = rightGlyph.index || rightGlyph;
		    const gposKerning = this.position.defaultKerningTables;
		    if (gposKerning) {
		      return this.position.getKerningValue(gposKerning, leftGlyph, rightGlyph);
		    }
		    return this.kerningPairs[leftGlyph + "," + rightGlyph] || 0;
		  };
		  Font.prototype.defaultRenderOptions = {
		    kerning: true,
		    features: [
		      /**
		       * these 4 features are required to render Arabic text properly
		       * and shouldn't be turned off when rendering arabic text.
		       */
		      { script: "arab", tags: ["init", "medi", "fina", "rlig"] },
		      { script: "latn", tags: ["liga", "rlig"] },
		      { script: "thai", tags: ["liga", "rlig", "ccmp"] }
		    ],
		    hinting: false,
		    usePalette: 0,
		    drawLayers: true,
		    drawSVG: true
		  };
		  Font.prototype.forEachGlyph = function(text, x, y, fontSize, options, callback) {
		    x = x !== void 0 ? x : 0;
		    y = y !== void 0 ? y : 0;
		    fontSize = fontSize !== void 0 ? fontSize : 72;
		    options = Object.assign({}, this.defaultRenderOptions, options);
		    const fontScale = 1 / this.unitsPerEm * fontSize;
		    const glyphs = this.stringToGlyphs(text, options);
		    let kerningLookups;
		    if (options.kerning) {
		      const script = options.script || this.position.getDefaultScriptName();
		      kerningLookups = this.position.getKerningTables(script, options.language);
		    }
		    for (let i = 0; i < glyphs.length; i += 1) {
		      const glyph = glyphs[i];
		      callback.call(this, glyph, x, y, fontSize, options);
		      if (glyph.advanceWidth) {
		        x += glyph.advanceWidth * fontScale;
		      }
		      if (options.kerning && i < glyphs.length - 1) {
		        const kerningValue = kerningLookups ? this.position.getKerningValue(kerningLookups, glyph.index, glyphs[i + 1].index) : this.getKerningValue(glyph, glyphs[i + 1]);
		        x += kerningValue * fontScale;
		      }
		      if (options.letterSpacing) {
		        x += options.letterSpacing * fontSize;
		      } else if (options.tracking) {
		        x += options.tracking / 1e3 * fontSize;
		      }
		    }
		    return x;
		  };
		  Font.prototype.getPath = function(text, x, y, fontSize, options) {
		    options = Object.assign({}, this.defaultRenderOptions, options);
		    const fullPath = new path_default();
		    fullPath._layers = [];
		    applyPaintType(this, fullPath);
		    if (fullPath.stroke) {
		      const scale = 1 / (fullPath.unitsPerEm || 1e3) * fontSize;
		      fullPath.strokeWidth *= scale;
		    }
		    this.forEachGlyph(text, x, y, fontSize, options, (glyph, gX, gY, gFontSize) => {
		      const glyphPath = glyph.getPath(gX, gY, gFontSize, options, this);
		      if (options.drawSVG || options.drawLayers) {
		        const layers = glyphPath._layers;
		        if (layers && layers.length) {
		          for (let l = 0; l < layers.length; l++) {
		            const layer = layers[l];
		            fullPath._layers.push(layer);
		          }
		          return;
		        }
		      }
		      fullPath.extend(glyphPath);
		    });
		    return fullPath;
		  };
		  Font.prototype.getPaths = function(text, x, y, fontSize, options) {
		    options = Object.assign({}, this.defaultRenderOptions, options);
		    const glyphPaths = [];
		    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
		      const glyphPath = glyph.getPath(gX, gY, gFontSize, options, this);
		      glyphPaths.push(glyphPath);
		    });
		    return glyphPaths;
		  };
		  Font.prototype.getAdvanceWidth = function(text, fontSize, options) {
		    options = Object.assign({}, this.defaultRenderOptions, options);
		    return this.forEachGlyph(text, 0, 0, fontSize, options, function() {
		    });
		  };
		  Font.prototype.draw = function(ctx, text, x, y, fontSize, options) {
		    const path = this.getPath(text, x, y, fontSize, options);
		    path.draw(ctx);
		  };
		  Font.prototype.drawPoints = function(ctx, text, x, y, fontSize, options) {
		    options = Object.assign({}, this.defaultRenderOptions, options);
		    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
		      glyph.drawPoints(ctx, gX, gY, gFontSize, options, this);
		    });
		  };
		  Font.prototype.drawMetrics = function(ctx, text, x, y, fontSize, options) {
		    options = Object.assign({}, this.defaultRenderOptions, options);
		    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
		      glyph.drawMetrics(ctx, gX, gY, gFontSize);
		    });
		  };
		  Font.prototype.getEnglishName = function(name) {
		    const translations = (this.names.unicode || this.names.macintosh || this.names.windows)[name];
		    if (translations) {
		      return translations.en;
		    }
		  };
		  Font.prototype.validate = function() {
		    const warnings = [];
		    const _this = this;
		    function assert(predicate, message) {
		      if (!predicate) {
		        console.warn(`[opentype.js] ${message}`);
		        warnings.push(message);
		      }
		    }
		    function assertNamePresent(name) {
		      const englishName = _this.getEnglishName(name);
		      assert(
		        englishName && englishName.trim().length > 0,
		        "No English " + name + " specified."
		      );
		    }
		    assertNamePresent("fontFamily");
		    assertNamePresent("weightName");
		    assertNamePresent("manufacturer");
		    assertNamePresent("copyright");
		    assertNamePresent("version");
		    assert(this.unitsPerEm > 0, "No unitsPerEm specified.");
		    if (this.tables.colr) {
		      const baseGlyphs = this.tables.colr.baseGlyphRecords;
		      let previousID = -1;
		      for (let b = 0; b < baseGlyphs.length; b++) {
		        const currentGlyphID = baseGlyphs[b].glyphID;
		        assert(previousID < baseGlyphs[b].glyphID, `baseGlyphs must be sorted by GlyphID in ascending order, but glyphID ${currentGlyphID} comes after ${previousID}`);
		        if (previousID > baseGlyphs[b].glyphID) {
		          break;
		        }
		        previousID = currentGlyphID;
		      }
		    }
		    return warnings;
		  };
		  Font.prototype.toTables = function() {
		    return sfnt_default.fontToTable(this);
		  };
		  Font.prototype.toBuffer = function() {
		    console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.");
		    return this.toArrayBuffer();
		  };
		  Font.prototype.toArrayBuffer = function() {
		    const sfntTable = this.toTables();
		    const bytes = sfntTable.encode();
		    const buffer = new ArrayBuffer(bytes.length);
		    const intArray = new Uint8Array(buffer);
		    for (let i = 0; i < bytes.length; i++) {
		      intArray[i] = bytes[i];
		    }
		    return buffer;
		  };
		  Font.prototype.download = function() {
		    console.error("DEPRECATED: platform-specific actions are to be implemented on user-side");
		  };
		  Font.prototype.fsSelectionValues = {
		    ITALIC: 1,
		    //1
		    UNDERSCORE: 2,
		    //2
		    NEGATIVE: 4,
		    //4
		    OUTLINED: 8,
		    //8
		    STRIKEOUT: 16,
		    //16
		    BOLD: 32,
		    //32
		    REGULAR: 64,
		    //64
		    USER_TYPO_METRICS: 128,
		    //128
		    WWS: 256,
		    //256
		    OBLIQUE: 512
		    //512
		  };
		  Font.prototype.macStyleValues = {
		    BOLD: 1,
		    //1
		    ITALIC: 2,
		    //2
		    UNDERLINE: 4,
		    //4
		    OUTLINED: 8,
		    //8
		    SHADOW: 16,
		    //16
		    CONDENSED: 32,
		    //32
		    EXTENDED: 64
		    //64
		  };
		  Font.prototype.usWidthClasses = {
		    ULTRA_CONDENSED: 1,
		    EXTRA_CONDENSED: 2,
		    CONDENSED: 3,
		    SEMI_CONDENSED: 4,
		    MEDIUM: 5,
		    SEMI_EXPANDED: 6,
		    EXPANDED: 7,
		    EXTRA_EXPANDED: 8,
		    ULTRA_EXPANDED: 9
		  };
		  Font.prototype.usWeightClasses = {
		    THIN: 100,
		    EXTRA_LIGHT: 200,
		    LIGHT: 300,
		    NORMAL: 400,
		    MEDIUM: 500,
		    SEMI_BOLD: 600,
		    BOLD: 700,
		    EXTRA_BOLD: 800,
		    BLACK: 900
		  };
		  var font_default = Font;

		  // src/tables/hvar.mjs
		  function parseHvarTable(data, start) {
		    const p = new parse_default.Parser(data, start);
		    const tableVersionMajor = p.parseUShort();
		    const tableVersionMinor = p.parseUShort();
		    if (tableVersionMajor !== 1) {
		      console.warn(`Unsupported hvar table version ${tableVersionMajor}.${tableVersionMinor}`);
		    }
		    const version = [
		      tableVersionMajor,
		      tableVersionMinor
		    ];
		    const itemVariationStore = p.parsePointer32(function() {
		      return this.parseItemVariationStore();
		    });
		    const advanceWidth = p.parsePointer32(function() {
		      return this.parseDeltaSetIndexMap();
		    });
		    const lsb = p.parsePointer32(function() {
		      return this.parseDeltaSetIndexMap();
		    });
		    const rsb = p.parsePointer32(function() {
		      return this.parseDeltaSetIndexMap();
		    });
		    return {
		      version,
		      itemVariationStore,
		      advanceWidth,
		      lsb,
		      rsb
		    };
		  }
		  function makeHvarTable() {
		    console.warn("Writing of hvar tables is not yet supported.");
		  }
		  var hvar_default = { make: makeHvarTable, parse: parseHvarTable };

		  // src/tables/gdef.mjs
		  var attachList = function() {
		    return {
		      coverage: this.parsePointer(Parser.coverage),
		      attachPoints: this.parseList(Parser.pointer(Parser.uShortList))
		    };
		  };
		  var caretValue = function() {
		    var format = this.parseUShort();
		    check_default.argument(
		      format === 1 || format === 2 || format === 3,
		      "Unsupported CaretValue table version."
		    );
		    if (format === 1) {
		      return { coordinate: this.parseShort() };
		    } else if (format === 2) {
		      return { pointindex: this.parseShort() };
		    } else if (format === 3) {
		      return { coordinate: this.parseShort() };
		    }
		  };
		  var ligGlyph = function() {
		    return this.parseList(Parser.pointer(caretValue));
		  };
		  var ligCaretList = function() {
		    return {
		      coverage: this.parsePointer(Parser.coverage),
		      ligGlyphs: this.parseList(Parser.pointer(ligGlyph))
		    };
		  };
		  var markGlyphSets = function() {
		    this.parseUShort();
		    return this.parseList(Parser.pointer(Parser.coverage));
		  };
		  function parseGDEFTable(data, start) {
		    start = start || 0;
		    const p = new Parser(data, start);
		    const tableVersion = p.parseVersion(1);
		    check_default.argument(
		      tableVersion === 1 || tableVersion === 1.2 || tableVersion === 1.3,
		      "Unsupported GDEF table version."
		    );
		    var gdef = {
		      version: tableVersion,
		      classDef: p.parsePointer(Parser.classDef),
		      attachList: p.parsePointer(attachList),
		      ligCaretList: p.parsePointer(ligCaretList),
		      markAttachClassDef: p.parsePointer(Parser.classDef)
		    };
		    if (tableVersion >= 1.2) {
		      gdef.markGlyphSets = p.parsePointer(markGlyphSets);
		    }
		    return gdef;
		  }
		  var gdef_default = { parse: parseGDEFTable };

		  // src/tables/gpos.mjs
		  var subtableParsers2 = new Array(10);
		  subtableParsers2[1] = function parseLookup12() {
		    const start = this.offset + this.relativeOffset;
		    const posformat = this.parseUShort();
		    if (posformat === 1) {
		      return {
		        posFormat: 1,
		        coverage: this.parsePointer(Parser.coverage),
		        value: this.parseValueRecord()
		      };
		    } else if (posformat === 2) {
		      return {
		        posFormat: 2,
		        coverage: this.parsePointer(Parser.coverage),
		        values: this.parseValueRecordList()
		      };
		    }
		    check_default.assert(false, "0x" + start.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
		  };
		  subtableParsers2[2] = function parseLookup22() {
		    const start = this.offset + this.relativeOffset;
		    const posFormat = this.parseUShort();
		    check_default.assert(posFormat === 1 || posFormat === 2, "0x" + start.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
		    const coverage = this.parsePointer(Parser.coverage);
		    const valueFormat1 = this.parseUShort();
		    const valueFormat2 = this.parseUShort();
		    if (posFormat === 1) {
		      return {
		        posFormat,
		        coverage,
		        valueFormat1,
		        valueFormat2,
		        pairSets: this.parseList(Parser.pointer(Parser.list(function() {
		          return {
		            // pairValueRecord
		            secondGlyph: this.parseUShort(),
		            value1: this.parseValueRecord(valueFormat1),
		            value2: this.parseValueRecord(valueFormat2)
		          };
		        })))
		      };
		    } else if (posFormat === 2) {
		      const classDef1 = this.parsePointer(Parser.classDef);
		      const classDef2 = this.parsePointer(Parser.classDef);
		      const class1Count = this.parseUShort();
		      const class2Count = this.parseUShort();
		      return {
		        // Class Pair Adjustment
		        posFormat,
		        coverage,
		        valueFormat1,
		        valueFormat2,
		        classDef1,
		        classDef2,
		        class1Count,
		        class2Count,
		        classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
		          return {
		            value1: this.parseValueRecord(valueFormat1),
		            value2: this.parseValueRecord(valueFormat2)
		          };
		        }))
		      };
		    }
		  };
		  subtableParsers2[3] = function parseLookup32() {
		    return { error: "GPOS Lookup 3 not supported" };
		  };
		  subtableParsers2[4] = function parseLookup42() {
		    return { error: "GPOS Lookup 4 not supported" };
		  };
		  subtableParsers2[5] = function parseLookup52() {
		    return { error: "GPOS Lookup 5 not supported" };
		  };
		  subtableParsers2[6] = function parseLookup62() {
		    return { error: "GPOS Lookup 6 not supported" };
		  };
		  subtableParsers2[7] = function parseLookup72() {
		    return { error: "GPOS Lookup 7 not supported" };
		  };
		  subtableParsers2[8] = function parseLookup82() {
		    return { error: "GPOS Lookup 8 not supported" };
		  };
		  subtableParsers2[9] = function parseLookup9() {
		    return { error: "GPOS Lookup 9 not supported" };
		  };
		  function parseGposTable(data, start) {
		    start = start || 0;
		    const p = new Parser(data, start);
		    const tableVersion = p.parseVersion(1);
		    check_default.argument(tableVersion === 1 || tableVersion === 1.1, "Unsupported GPOS table version " + tableVersion);
		    if (tableVersion === 1) {
		      return {
		        version: tableVersion,
		        scripts: p.parseScriptList(),
		        features: p.parseFeatureList(),
		        lookups: p.parseLookupList(subtableParsers2)
		      };
		    } else {
		      return {
		        version: tableVersion,
		        scripts: p.parseScriptList(),
		        features: p.parseFeatureList(),
		        lookups: p.parseLookupList(subtableParsers2),
		        variations: p.parseFeatureVariationsList()
		      };
		    }
		  }
		  var subtableMakers2 = new Array(10);
		  function makeGposTable(gpos) {
		    return new table_default.Table("GPOS", [
		      { name: "version", type: "ULONG", value: 65536 },
		      { name: "scripts", type: "TABLE", value: new table_default.ScriptList(gpos.scripts) },
		      { name: "features", type: "TABLE", value: new table_default.FeatureList(gpos.features) },
		      { name: "lookups", type: "TABLE", value: new table_default.LookupList(gpos.lookups, subtableMakers2) }
		    ]);
		  }
		  var gpos_default = { parse: parseGposTable, make: makeGposTable };

		  // src/tables/kern.mjs
		  function parseWindowsKernTable(p) {
		    const pairs = {};
		    p.skip("uShort");
		    const subtableVersion = p.parseUShort();
		    check_default.argument(subtableVersion === 0, "Unsupported kern sub-table version.");
		    p.skip("uShort", 2);
		    const nPairs = p.parseUShort();
		    p.skip("uShort", 3);
		    for (let i = 0; i < nPairs; i += 1) {
		      const leftIndex = p.parseUShort();
		      const rightIndex = p.parseUShort();
		      const value = p.parseShort();
		      pairs[leftIndex + "," + rightIndex] = value;
		    }
		    return pairs;
		  }
		  function parseMacKernTable(p) {
		    const pairs = {};
		    p.skip("uShort");
		    const nTables = p.parseULong();
		    if (nTables > 1) {
		      console.warn("Only the first kern subtable is supported.");
		    }
		    p.skip("uLong");
		    const coverage = p.parseUShort();
		    const subtableVersion = coverage & 255;
		    p.skip("uShort");
		    if (subtableVersion === 0) {
		      const nPairs = p.parseUShort();
		      p.skip("uShort", 3);
		      for (let i = 0; i < nPairs; i += 1) {
		        const leftIndex = p.parseUShort();
		        const rightIndex = p.parseUShort();
		        const value = p.parseShort();
		        pairs[leftIndex + "," + rightIndex] = value;
		      }
		    }
		    return pairs;
		  }
		  function parseKernTable(data, start) {
		    const p = new parse_default.Parser(data, start);
		    const tableVersion = p.parseUShort();
		    if (tableVersion === 0) {
		      return parseWindowsKernTable(p);
		    } else if (tableVersion === 1) {
		      return parseMacKernTable(p);
		    } else {
		      throw new Error("Unsupported kern table version (" + tableVersion + ").");
		    }
		  }
		  var kern_default = { parse: parseKernTable };

		  // src/tables/loca.mjs
		  function parseLocaTable(data, start, numGlyphs, shortVersion) {
		    const p = new parse_default.Parser(data, start);
		    const parseFn = shortVersion ? p.parseUShort : p.parseULong;
		    const glyphOffsets = [];
		    for (let i = 0; i < numGlyphs + 1; i += 1) {
		      let glyphOffset = parseFn.call(p);
		      if (shortVersion) {
		        glyphOffset *= 2;
		      }
		      glyphOffsets.push(glyphOffset);
		    }
		    return glyphOffsets;
		  }
		  var loca_default = { parse: parseLocaTable };

		  // src/opentype.mjs
		  function parseOpenTypeTableEntries(data, numTables) {
		    const tableEntries = [];
		    let p = 12;
		    for (let i = 0; i < numTables; i += 1) {
		      const tag = parse_default.getTag(data, p);
		      const checksum = parse_default.getULong(data, p + 4);
		      const offset = parse_default.getULong(data, p + 8);
		      const length = parse_default.getULong(data, p + 12);
		      tableEntries.push({ tag, checksum, offset, length, compression: false });
		      p += 16;
		    }
		    return tableEntries;
		  }
		  function parseWOFFTableEntries(data, numTables) {
		    const tableEntries = [];
		    let p = 44;
		    for (let i = 0; i < numTables; i += 1) {
		      const tag = parse_default.getTag(data, p);
		      const offset = parse_default.getULong(data, p + 4);
		      const compLength = parse_default.getULong(data, p + 8);
		      const origLength = parse_default.getULong(data, p + 12);
		      let compression;
		      if (compLength < origLength) {
		        compression = "WOFF";
		      } else {
		        compression = false;
		      }
		      tableEntries.push({
		        tag,
		        offset,
		        compression,
		        compressedLength: compLength,
		        length: origLength
		      });
		      p += 20;
		    }
		    return tableEntries;
		  }
		  function uncompressTable(data, tableEntry) {
		    if (tableEntry.compression === "WOFF") {
		      const inBuffer = new Uint8Array(data.buffer, tableEntry.offset + 2, tableEntry.compressedLength - 2);
		      const outBuffer = new Uint8Array(tableEntry.length);
		      tinf_uncompress(inBuffer, outBuffer);
		      if (outBuffer.byteLength !== tableEntry.length) {
		        throw new Error("Decompression error: " + tableEntry.tag + " decompressed length doesn't match recorded length");
		      }
		      const view = new DataView(outBuffer.buffer, 0);
		      return { data: view, offset: 0 };
		    } else {
		      return { data, offset: tableEntry.offset };
		    }
		  }
		  function parseBuffer(buffer, opt = {}) {
		    let indexToLocFormat;
		    let ltagTable;
		    const font = new font_default({ empty: true });
		    if (buffer.constructor !== ArrayBuffer) {
		      buffer = new Uint8Array(buffer).buffer;
		    }
		    const data = new DataView(buffer, 0);
		    let numTables;
		    let tableEntries = [];
		    const signature = parse_default.getTag(data, 0);
		    if (signature === String.fromCharCode(0, 1, 0, 0) || signature === "true" || signature === "typ1") {
		      font.outlinesFormat = "truetype";
		      numTables = parse_default.getUShort(data, 4);
		      tableEntries = parseOpenTypeTableEntries(data, numTables);
		    } else if (signature === "OTTO") {
		      font.outlinesFormat = "cff";
		      numTables = parse_default.getUShort(data, 4);
		      tableEntries = parseOpenTypeTableEntries(data, numTables);
		    } else if (signature === "wOFF") {
		      const flavor = parse_default.getTag(data, 4);
		      if (flavor === String.fromCharCode(0, 1, 0, 0)) {
		        font.outlinesFormat = "truetype";
		      } else if (flavor === "OTTO") {
		        font.outlinesFormat = "cff";
		      } else {
		        throw new Error("Unsupported OpenType flavor " + signature);
		      }
		      numTables = parse_default.getUShort(data, 12);
		      tableEntries = parseWOFFTableEntries(data, numTables);
		    } else if (signature === "wOF2") {
		      const issue = "https://github.com/opentypejs/opentype.js/issues/183#issuecomment-1147228025";
		      throw new Error("WOFF2 require an external decompressor library, see examples at: " + issue);
		    } else {
		      throw new Error("Unsupported OpenType signature " + signature);
		    }
		    let cffTableEntry;
		    let cff2TableEntry;
		    let fvarTableEntry;
		    let statTableEntry;
		    let gvarTableEntry;
		    let cvarTableEntry;
		    let avarTableEntry;
		    let glyfTableEntry;
		    let gdefTableEntry;
		    let gposTableEntry;
		    let gsubTableEntry;
		    let hmtxTableEntry;
		    let hvarTableEntry;
		    let kernTableEntry;
		    let locaTableEntry;
		    let nameTableEntry;
		    let metaTableEntry;
		    let p;
		    for (let i = 0; i < numTables; i += 1) {
		      const tableEntry = tableEntries[i];
		      let table;
		      switch (tableEntry.tag) {
		        case "avar":
		          avarTableEntry = tableEntry;
		          break;
		        case "cmap":
		          table = uncompressTable(data, tableEntry);
		          font.tables.cmap = cmap_default.parse(table.data, table.offset);
		          font.encoding = new CmapEncoding(font.tables.cmap);
		          break;
		        case "cvt ":
		          table = uncompressTable(data, tableEntry);
		          p = new parse_default.Parser(table.data, table.offset);
		          font.tables.cvt = p.parseShortList(tableEntry.length / 2);
		          break;
		        case "fvar":
		          fvarTableEntry = tableEntry;
		          break;
		        case "STAT":
		          statTableEntry = tableEntry;
		          break;
		        case "gvar":
		          gvarTableEntry = tableEntry;
		          break;
		        case "cvar":
		          cvarTableEntry = tableEntry;
		          break;
		        case "fpgm":
		          table = uncompressTable(data, tableEntry);
		          p = new parse_default.Parser(table.data, table.offset);
		          font.tables.fpgm = p.parseByteList(tableEntry.length);
		          break;
		        case "head":
		          table = uncompressTable(data, tableEntry);
		          font.tables.head = head_default.parse(table.data, table.offset);
		          font.unitsPerEm = font.tables.head.unitsPerEm;
		          indexToLocFormat = font.tables.head.indexToLocFormat;
		          break;
		        case "hhea":
		          table = uncompressTable(data, tableEntry);
		          font.tables.hhea = hhea_default.parse(table.data, table.offset);
		          font.ascender = font.tables.hhea.ascender;
		          font.descender = font.tables.hhea.descender;
		          font.numberOfHMetrics = font.tables.hhea.numberOfHMetrics;
		          break;
		        case "HVAR":
		          hvarTableEntry = tableEntry;
		          break;
		        case "hmtx":
		          hmtxTableEntry = tableEntry;
		          break;
		        case "ltag":
		          table = uncompressTable(data, tableEntry);
		          ltagTable = ltag_default.parse(table.data, table.offset);
		          break;
		        case "COLR":
		          table = uncompressTable(data, tableEntry);
		          font.tables.colr = colr_default.parse(table.data, table.offset);
		          break;
		        case "CPAL":
		          table = uncompressTable(data, tableEntry);
		          font.tables.cpal = cpal_default.parse(table.data, table.offset);
		          break;
		        case "maxp":
		          table = uncompressTable(data, tableEntry);
		          font.tables.maxp = maxp_default.parse(table.data, table.offset);
		          font.numGlyphs = font.tables.maxp.numGlyphs;
		          break;
		        case "name":
		          nameTableEntry = tableEntry;
		          break;
		        case "OS/2":
		          table = uncompressTable(data, tableEntry);
		          font.tables.os2 = os2_default.parse(table.data, table.offset);
		          break;
		        case "post":
		          table = uncompressTable(data, tableEntry);
		          font.tables.post = post_default.parse(table.data, table.offset);
		          font.glyphNames = new GlyphNames(font.tables.post);
		          break;
		        case "prep":
		          table = uncompressTable(data, tableEntry);
		          p = new parse_default.Parser(table.data, table.offset);
		          font.tables.prep = p.parseByteList(tableEntry.length);
		          break;
		        case "glyf":
		          glyfTableEntry = tableEntry;
		          break;
		        case "loca":
		          locaTableEntry = tableEntry;
		          break;
		        case "CFF ":
		          cffTableEntry = tableEntry;
		          break;
		        case "CFF2":
		          cff2TableEntry = tableEntry;
		          break;
		        case "kern":
		          kernTableEntry = tableEntry;
		          break;
		        case "GDEF":
		          gdefTableEntry = tableEntry;
		          break;
		        case "GPOS":
		          gposTableEntry = tableEntry;
		          break;
		        case "GSUB":
		          gsubTableEntry = tableEntry;
		          break;
		        case "meta":
		          metaTableEntry = tableEntry;
		          break;
		        case "gasp":
		          try {
		            table = uncompressTable(data, tableEntry);
		            font.tables.gasp = gasp_default.parse(table.data, table.offset);
		          } catch (e) {
		            console.warn("Failed to parse gasp table, skipping.");
		            console.warn(e);
		          }
		          break;
		        case "SVG ":
		          table = uncompressTable(data, tableEntry);
		          font.tables.svg = svg_default.parse(table.data, table.offset);
		          break;
		      }
		    }
		    const nameTable = uncompressTable(data, nameTableEntry);
		    font.tables.name = name_default.parse(nameTable.data, nameTable.offset, ltagTable);
		    font.names = font.tables.name;
		    if (glyfTableEntry && locaTableEntry) {
		      const shortVersion = indexToLocFormat === 0;
		      const locaTable = uncompressTable(data, locaTableEntry);
		      const locaOffsets = loca_default.parse(locaTable.data, locaTable.offset, font.numGlyphs, shortVersion);
		      const glyfTable = uncompressTable(data, glyfTableEntry);
		      font.glyphs = glyf_default.parse(glyfTable.data, glyfTable.offset, locaOffsets, font, opt);
		    } else if (cffTableEntry) {
		      const cffTable = uncompressTable(data, cffTableEntry);
		      cff_default.parse(cffTable.data, cffTable.offset, font, opt);
		    } else if (cff2TableEntry) {
		      const cffTable2 = uncompressTable(data, cff2TableEntry);
		      cff_default.parse(cffTable2.data, cffTable2.offset, font, opt);
		    } else {
		      throw new Error("Font doesn't contain TrueType, CFF or CFF2 outlines.");
		    }
		    const hmtxTable = uncompressTable(data, hmtxTableEntry);
		    hmtx_default.parse(font, hmtxTable.data, hmtxTable.offset, font.numberOfHMetrics, font.numGlyphs, font.glyphs, opt);
		    addGlyphNames(font, opt);
		    if (kernTableEntry) {
		      const kernTable = uncompressTable(data, kernTableEntry);
		      font.kerningPairs = kern_default.parse(kernTable.data, kernTable.offset);
		    } else {
		      font.kerningPairs = {};
		    }
		    if (gdefTableEntry) {
		      const gdefTable = uncompressTable(data, gdefTableEntry);
		      font.tables.gdef = gdef_default.parse(gdefTable.data, gdefTable.offset);
		    }
		    if (gposTableEntry) {
		      const gposTable = uncompressTable(data, gposTableEntry);
		      font.tables.gpos = gpos_default.parse(gposTable.data, gposTable.offset);
		      font.position.init();
		    }
		    if (gsubTableEntry) {
		      const gsubTable = uncompressTable(data, gsubTableEntry);
		      font.tables.gsub = gsub_default.parse(gsubTable.data, gsubTable.offset);
		    }
		    if (fvarTableEntry) {
		      const fvarTable = uncompressTable(data, fvarTableEntry);
		      font.tables.fvar = fvar_default.parse(fvarTable.data, fvarTable.offset, font.names);
		    }
		    if (statTableEntry) {
		      const statTable = uncompressTable(data, statTableEntry);
		      font.tables.stat = stat_default.parse(statTable.data, statTable.offset, font.tables.fvar);
		    }
		    if (gvarTableEntry) {
		      if (!fvarTableEntry) {
		        console.warn("This font provides a gvar table, but no fvar table, which is required for variable fonts.");
		      }
		      if (!glyfTableEntry) {
		        console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");
		      }
		      const gvarTable = uncompressTable(data, gvarTableEntry);
		      font.tables.gvar = gvar_default.parse(gvarTable.data, gvarTable.offset, font.tables.fvar, font.glyphs);
		    }
		    if (cvarTableEntry) {
		      if (!fvarTableEntry) {
		        console.warn("This font provides a cvar table, but no fvar table, which is required for variable fonts.");
		      }
		      if (!font.tables.cvt) {
		        console.warn("This font provides a cvar table, but no cvt table which could be made variable.");
		      }
		      if (!glyfTableEntry) {
		        console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");
		      }
		      const cvarTable = uncompressTable(data, cvarTableEntry);
		      font.tables.cvar = cvar_default.parse(cvarTable.data, cvarTable.offset, font.tables.fvar, font.tables.cvt || []);
		    }
		    if (avarTableEntry) {
		      if (!fvarTableEntry) {
		        console.warn("This font provides an avar table, but no fvar table, which is required for variable fonts.");
		      }
		      const avarTable = uncompressTable(data, avarTableEntry);
		      font.tables.avar = avar_default.parse(avarTable.data, avarTable.offset, font.tables.fvar);
		    }
		    if (hvarTableEntry) {
		      if (!fvarTableEntry) {
		        console.warn("This font provides an HVAR table, but no fvar table, which is required for variable fonts.");
		      }
		      if (!hmtxTableEntry) {
		        console.warn("This font provides an HVAR table, but no hmtx table to vary.");
		      }
		      const hvarTable = uncompressTable(data, hvarTableEntry);
		      font.tables.hvar = hvar_default.parse(hvarTable.data, hvarTable.offset, font.tables.fvar);
		    }
		    if (metaTableEntry) {
		      const metaTable = uncompressTable(data, metaTableEntry);
		      font.tables.meta = meta_default.parse(metaTable.data, metaTable.offset);
		      font.metas = font.tables.meta;
		    }
		    font.palettes = new PaletteManager(font);
		    return font;
		  }
		  function load() {
		    console.error("DEPRECATED! migrate to: opentype.parse(buffer, opt) See: https://github.com/opentypejs/opentype.js/issues/675");
		  }
		  function loadSync() {
		    console.error('DEPRECATED! migrate to: opentype.parse(require("fs").readFileSync(url), opt)');
		  }
		  return __toCommonJS(opentype_exports);
		})();
		(function (root, factory) { if (module.exports)module.exports = factory(); else root.opentype = factory(); }(typeof self !== 'undefined' ? self : opentype_1, () => ({...opentype,'default':opentype}))); 
	} (opentype$1));
	return opentype$1.exports;
}

var opentypeExports = /*@__PURE__*/ requireOpentype();
var opentype = /*@__PURE__*/getDefaultExportFromCjs(opentypeExports);

class FontLoader {
    constructor() {
        this.font = null;
    }
    loadFont(buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            this.font = opentype.parse(buffer);
        });
    }
    getFont() {
        if (!this.font)
            throw new Error('Font not loaded');
        return this.font;
    }
}

var simplify$1 = {exports: {}};

/*
 (c) 2017, Vladimir Agafonkin
 Simplify.js, a high-performance JS polyline simplification library
 mourner.github.io/simplify-js
*/

var hasRequiredSimplify;

function requireSimplify () {
	if (hasRequiredSimplify) return simplify$1.exports;
	hasRequiredSimplify = 1;
	(function (module) {
		(function () {
		// to suit your point format, run search/replace for '.x' and '.y';
		// for 3D version, see 3d branch (configurability would draw significant performance overhead)

		// square distance between 2 points
		function getSqDist(p1, p2) {

		    var dx = p1.x - p2.x,
		        dy = p1.y - p2.y;

		    return dx * dx + dy * dy;
		}

		// square distance from a point to a segment
		function getSqSegDist(p, p1, p2) {

		    var x = p1.x,
		        y = p1.y,
		        dx = p2.x - x,
		        dy = p2.y - y;

		    if (dx !== 0 || dy !== 0) {

		        var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);

		        if (t > 1) {
		            x = p2.x;
		            y = p2.y;

		        } else if (t > 0) {
		            x += dx * t;
		            y += dy * t;
		        }
		    }

		    dx = p.x - x;
		    dy = p.y - y;

		    return dx * dx + dy * dy;
		}
		// rest of the code doesn't care about point format

		// basic distance-based simplification
		function simplifyRadialDist(points, sqTolerance) {

		    var prevPoint = points[0],
		        newPoints = [prevPoint],
		        point;

		    for (var i = 1, len = points.length; i < len; i++) {
		        point = points[i];

		        if (getSqDist(point, prevPoint) > sqTolerance) {
		            newPoints.push(point);
		            prevPoint = point;
		        }
		    }

		    if (prevPoint !== point) newPoints.push(point);

		    return newPoints;
		}

		function simplifyDPStep(points, first, last, sqTolerance, simplified) {
		    var maxSqDist = sqTolerance,
		        index;

		    for (var i = first + 1; i < last; i++) {
		        var sqDist = getSqSegDist(points[i], points[first], points[last]);

		        if (sqDist > maxSqDist) {
		            index = i;
		            maxSqDist = sqDist;
		        }
		    }

		    if (maxSqDist > sqTolerance) {
		        if (index - first > 1) simplifyDPStep(points, first, index, sqTolerance, simplified);
		        simplified.push(points[index]);
		        if (last - index > 1) simplifyDPStep(points, index, last, sqTolerance, simplified);
		    }
		}

		// simplification using Ramer-Douglas-Peucker algorithm
		function simplifyDouglasPeucker(points, sqTolerance) {
		    var last = points.length - 1;

		    var simplified = [points[0]];
		    simplifyDPStep(points, 0, last, sqTolerance, simplified);
		    simplified.push(points[last]);

		    return simplified;
		}

		// both algorithms combined for awesome performance
		function simplify(points, tolerance, highestQuality) {

		    if (points.length <= 2) return points;

		    var sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;

		    points = highestQuality ? points : simplifyRadialDist(points, sqTolerance);
		    points = simplifyDouglasPeucker(points, sqTolerance);

		    return points;
		}

		// export as AMD module / Node module / browser or worker variable
		{
		    module.exports = simplify;
		    module.exports.default = simplify;
		}

		})(); 
	} (simplify$1));
	return simplify$1.exports;
}

var simplifyExports = requireSimplify();
var simplify = /*@__PURE__*/getDefaultExportFromCjs(simplifyExports);

class PathParser {
    static getCharOutline(font, char, fontSize = 100) {
        const path = font.getPath(char, 0, 0, fontSize);
        const commands = path.commands;
        const points = [];
        for (const cmd of commands) {
            if (cmd.type === 'M' || cmd.type === 'L') {
                points.push({ x: cmd.x, y: cmd.y });
            }
            else if (cmd.type === 'Q') {
                points.push({ x: cmd.x1, y: cmd.y1 });
                points.push({ x: cmd.x, y: cmd.y });
            }
            else if (cmd.type === 'C') {
                points.push({ x: cmd.x1, y: cmd.y1 });
                points.push({ x: cmd.x2, y: cmd.y2 });
                points.push({ x: cmd.x, y: cmd.y });
            }
        }
        // 使用 RDP 算法简化顶点（tolerance 越大，物理体越简单，性能越好）
        const simplifiedPoints = simplify(points, 1.0, true);
        return simplifiedPoints;
    }
}

const tmpPoint1 = [0, 0];
const tmpPoint2 = [0, 0];
const tmpLine1 = [[0, 0], [0, 0]];
const tmpLine2 = [[0, 0], [0, 0]];

/**
 * Compute the intersection between two lines.
 * @param l1 Line vector 1
 * @param l2 Line vector 2
 * @param precision Precision to use when checking if the lines are parallel
 * @return The intersection point.
 */
function lineInt(l1, l2, precision) {
  if (precision === void 0) {
    precision = 0;
  }
  precision = precision || 0;
  const i = [0, 0]; // point
  const a1 = l1[1][1] - l1[0][1];
  const b1 = l1[0][0] - l1[1][0];
  const c1 = a1 * l1[0][0] + b1 * l1[0][1];
  const a2 = l2[1][1] - l2[0][1];
  const b2 = l2[0][0] - l2[1][0];
  const c2 = a2 * l2[0][0] + b2 * l2[0][1];
  const det = a1 * b2 - a2 * b1;
  if (!scalarsEqual(det, 0, precision)) {
    // lines are not parallel
    i[0] = (b2 * c1 - b1 * c2) / det;
    i[1] = (a1 * c2 - a2 * c1) / det;
  }
  return i;
}

/**
 * Checks if two line segments intersects.
 * @param p1 The start vertex of the first line segment.
 * @param p2 The end vertex of the first line segment.
 * @param q1 The start vertex of the second line segment.
 * @param q2 The end vertex of the second line segment.
 * @return True if the two line segments intersect
 */
function lineSegmentsIntersect(p1, p2, q1, q2) {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  const da = q2[0] - q1[0];
  const db = q2[1] - q1[1];

  // segments are parallel
  if (da * dy - db * dx === 0) {
    return false;
  }
  const s = (dx * (q1[1] - p1[1]) + dy * (p1[0] - q1[0])) / (da * dy - db * dx);
  const t = (da * (p1[1] - q1[1]) + db * (q1[0] - p1[0])) / (db * dx - da * dy);
  return s >= 0 && s <= 1 && t >= 0 && t <= 1;
}

/**
 * Get the area of a triangle spanned by the three given points. Note that the area will be negative if the points are not given in counter-clockwise order.
 * @param a point 1
 * @param b point 2
 * @param c point 3
 * @return the area of a triangle spanned by the three given points
 */
function triangleArea(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
}
function isLeft(a, b, c) {
  return triangleArea(a, b, c) > 0;
}
function isLeftOn(a, b, c) {
  return triangleArea(a, b, c) >= 0;
}
function isRight(a, b, c) {
  return triangleArea(a, b, c) < 0;
}
function isRightOn(a, b, c) {
  return triangleArea(a, b, c) <= 0;
}

/**
 * Check if three points are collinear
 * @param a point 1
 * @param b point 2
 * @param c point 3
 * @param thresholdAngle angle to use when comparing the vectors. The function will return true if the angle between the resulting vectors is less than this value. Use zero for max precision.
 * @return whether the points are collinear
 */
function collinear(a, b, c, thresholdAngle) {
  if (thresholdAngle === void 0) {
    thresholdAngle = 0;
  }
  if (!thresholdAngle) {
    return triangleArea(a, b, c) === 0;
  } else {
    const ab = tmpPoint1;
    const bc = tmpPoint2;
    ab[0] = b[0] - a[0];
    ab[1] = b[1] - a[1];
    bc[0] = c[0] - b[0];
    bc[1] = c[1] - b[1];
    const dot = ab[0] * bc[0] + ab[1] * bc[1];
    const magA = Math.sqrt(ab[0] * ab[0] + ab[1] * ab[1]);
    const magB = Math.sqrt(bc[0] * bc[0] + bc[1] * bc[1]);
    const angle = Math.acos(dot / (magA * magB));
    return angle < thresholdAngle;
  }
}
function sqdist(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  return dx * dx + dy * dy;
}

/**
 * Get a vertex at position i. It does not matter if i is out of bounds, this function will just cycle.
 * @param i vertex position
 * @return vertex at position i
 */
function polygonAt(polygon, i) {
  const s = polygon.length;
  return polygon[i < 0 ? i % s + s : i % s];
}

/**
 * Clear the polygon data
 */
function polygonClear(polygon) {
  polygon.length = 0;
}

/**
 * Append points "from" to "to" -1 from an other polygon "poly" onto this one.
 * @param polygon the polygon to append to
 * @param poly The polygon to get points from.
 * @param from The vertex index in "poly".
 * @param to The end vertex index in "poly". Note that this vertex is NOT included when appending.
 */
function polygonAppend(polygon, poly, from, to) {
  for (let i = from; i < to; i++) {
    polygon.push(poly[i]);
  }
}

/**
 * Make sure that the polygon vertices are ordered counter-clockwise.
 */
function makeCCW(polygon) {
  let br = 0;
  const v = polygon;

  // find bottom right point
  for (let i = 1; i < polygon.length; ++i) {
    if (v[i][1] < v[br][1] || v[i][1] === v[br][1] && v[i][0] > v[br][0]) {
      br = i;
    }
  }

  // reverse poly if clockwise
  if (!isLeft(polygonAt(polygon, br - 1), polygonAt(polygon, br), polygonAt(polygon, br + 1))) {
    polygonReverse(polygon);
    return true;
  } else {
    return false;
  }
}

/**
 * Reverse the vertices in the polygon
 */
function polygonReverse(polygon) {
  const tmp = [];
  const N = polygon.length;
  for (let i = 0; i !== N; i++) {
    tmp.push(polygon.pop());
  }
  for (let i = 0; i !== N; i++) {
    polygon[i] = tmp[i];
  }
}

/**
 * Check if a point in the polygon is a reflex point
 * @param i the point in the polygon to check
 * @return whether the given point in the polygon is a reflex point
 */
function polygonIsReflex(polygon, i) {
  return isRight(polygonAt(polygon, i - 1), polygonAt(polygon, i), polygonAt(polygon, i + 1));
}

/**
 * Check if two vertices in the polygon can see each other
 * @param a vertex index 1
 * @param b vertex index 2
 * @return whether two vertices in the polygon can see each other
 */
function polygonCanSee(polygon, a, b) {
  const l1 = tmpLine1;
  const l2 = tmpLine2;
  if (isLeftOn(polygonAt(polygon, a + 1), polygonAt(polygon, a), polygonAt(polygon, b)) && isRightOn(polygonAt(polygon, a - 1), polygonAt(polygon, a), polygonAt(polygon, b))) {
    return false;
  }
  const dist = sqdist(polygonAt(polygon, a), polygonAt(polygon, b));
  for (let i = 0; i !== polygon.length; ++i) {
    // for each edge
    if ((i + 1) % polygon.length === a || i === a) {
      // ignore incident edges
      continue;
    }
    if (isLeftOn(polygonAt(polygon, a), polygonAt(polygon, b), polygonAt(polygon, i + 1)) && isRightOn(polygonAt(polygon, a), polygonAt(polygon, b), polygonAt(polygon, i))) {
      // if diag intersects an edge
      l1[0] = polygonAt(polygon, a);
      l1[1] = polygonAt(polygon, b);
      l2[0] = polygonAt(polygon, i);
      l2[1] = polygonAt(polygon, i + 1);
      const p = lineInt(l1, l2);
      if (sqdist(polygonAt(polygon, a), p) < dist) {
        // if edge is blocking visibility to b
        return false;
      }
    }
  }
  return true;
}

/**
 * Check if two vertices in the polygon can see each other
 * @param a vertex index 1
 * @param b vertex index 2
 * @return if two vertices in the polygon can see each other
 */
function polygonCanSee2(polygon, a, b) {
  // for each edge
  for (let i = 0; i !== polygon.length; ++i) {
    // ignore incident edges
    if (i === a || i === b || (i + 1) % polygon.length === a || (i + 1) % polygon.length === b) {
      continue;
    }
    if (lineSegmentsIntersect(polygonAt(polygon, a), polygonAt(polygon, b), polygonAt(polygon, i), polygonAt(polygon, i + 1))) {
      return false;
    }
  }
  return true;
}

/**
 * Copy the polygon from vertex i to vertex j.
 * @param i the start vertex to copy from
 * @param j the end vertex to copy from
 * @param targetPoly optional target polygon to save in.
 * @return the resulting copy.
 */
function polygonCopy(polygon, i, j, targetPoly) {
  if (targetPoly === void 0) {
    targetPoly = [];
  }
  polygonClear(targetPoly);
  if (i < j) {
    // Insert all vertices from i to j
    for (let k = i; k <= j; k++) {
      targetPoly.push(polygon[k]);
    }
  } else {
    // Insert vertices 0 to j
    for (let k = 0; k <= j; k++) {
      targetPoly.push(polygon[k]);
    }

    // Insert vertices i to end
    for (let k = i; k < polygon.length; k++) {
      targetPoly.push(polygon[k]);
    }
  }
  return targetPoly;
}

/**
 * Decomposes the polygon into convex pieces. Returns a list of edges [[p1,p2],[p2,p3],...] that cuts the polygon.
 * Note that this algorithm has complexity O(N^4) and will be very slow for polygons with many vertices.
 * @return a list of edges that cuts the polygon
 */
function getCutEdges(polygon) {
  let min = [];
  let tmp1;
  let tmp2;
  const tmpPoly = [];
  let nDiags = Number.MAX_VALUE;
  for (let i = 0; i < polygon.length; ++i) {
    if (polygonIsReflex(polygon, i)) {
      for (let j = 0; j < polygon.length; ++j) {
        if (polygonCanSee(polygon, i, j)) {
          tmp1 = getCutEdges(polygonCopy(polygon, i, j, tmpPoly));
          tmp2 = getCutEdges(polygonCopy(polygon, j, i, tmpPoly));
          for (let k = 0; k < tmp2.length; k++) {
            tmp1.push(tmp2[k]);
          }
          if (tmp1.length < nDiags) {
            min = tmp1;
            nDiags = tmp1.length;
            min.push([polygonAt(polygon, i), polygonAt(polygon, j)]);
          }
        }
      }
    }
  }
  return min;
}

/**
 * Decomposes the polygon into one or more convex sub-Polygons.
 * @return An array of Polygon objects, or false if decomposition fails
 */
function decomp(polygon) {
  const edges = getCutEdges(polygon);
  if (edges.length > 0) {
    return slicePolygon(polygon, edges);
  } else {
    return [polygon];
  }
}

/**
 * Slices the polygon given one or more cut edges. If given one, this function will return two polygons (false on failure). If many, an array of polygons.
 * @param cutEdges A list of edges, as returned by .getCutEdges()
 * @return the sliced polygons, or false if the operation was unsuccessful
 */
function slicePolygon(polygon, cutEdges) {
  if (cutEdges.length === 0) {
    return [polygon];
  }

  // if given multiple edges
  if (cutEdges instanceof Array && cutEdges.length && cutEdges[0] instanceof Array && cutEdges[0].length === 2 && cutEdges[0][0] instanceof Array) {
    const polys = [polygon];
    for (let i = 0; i < cutEdges.length; i++) {
      const cutEdge = cutEdges[i];
      // Cut all polys
      for (let j = 0; j < polys.length; j++) {
        const poly = polys[j];
        const result = slicePolygon(poly, cutEdge);
        if (result) {
          // Found poly! Cut and quit
          polys.splice(j, 1);
          polys.push(result[0], result[1]);
          break;
        }
      }
    }
    return polys;
  } else {
    // Was given one edge
    const cutEdge = cutEdges;
    const i = polygon.indexOf(cutEdge[0]);
    const j = polygon.indexOf(cutEdge[1]);
    if (i !== -1 && j !== -1) {
      return [polygonCopy(polygon, i, j), polygonCopy(polygon, j, i)];
    } else {
      return false;
    }
  }
}

/**
 * Checks that the line segments of this polygon do not intersect each other.
 * @param polygon An array of vertices e.g. [[0,0],[0,1],...]
 * @return whether line segments of this polygon do not intersect each other.
 * @todo Should it check all segments with all others?
 */
function isSimple(polygon) {
  const path = polygon;
  let i;

  // Check
  for (i = 0; i < path.length - 1; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (lineSegmentsIntersect(path[i], path[i + 1], path[j], path[j + 1])) {
        return false;
      }
    }
  }

  // Check the segment between the last and the first point to all others
  for (i = 1; i < path.length - 2; i++) {
    if (lineSegmentsIntersect(path[0], path[path.length - 1], path[i], path[i + 1])) {
      return false;
    }
  }
  return true;
}
function getIntersectionPoint(p1, p2, q1, q2, delta) {
  if (delta === void 0) {
    delta = 0;
  }
  const a1 = p2[1] - p1[1];
  const b1 = p1[0] - p2[0];
  const c1 = a1 * p1[0] + b1 * p1[1];
  const a2 = q2[1] - q1[1];
  const b2 = q1[0] - q2[0];
  const c2 = a2 * q1[0] + b2 * q1[1];
  const det = a1 * b2 - a2 * b1;
  if (!scalarsEqual(det, 0, delta)) {
    return [(b2 * c1 - b1 * c2) / det, (a1 * c2 - a2 * c1) / det];
  } else {
    return [0, 0];
  }
}

/**
 * Quickly decompose the Polygon into convex sub-polygons.
 * @param polygon the polygon to decompose
 * @param result
 * @param reflexVertices
 * @param steinerPoints
 * @param delta
 * @param maxlevel
 * @param level
 * @return the decomposed sub-polygons
 */
function quickDecomp(polygon, result, reflexVertices, steinerPoints, delta, maxlevel, level) {
  if (result === void 0) {
    result = [];
  }
  if (reflexVertices === void 0) {
    reflexVertices = [];
  }
  if (steinerPoints === void 0) {
    steinerPoints = [];
  }
  if (delta === void 0) {
    delta = 25;
  }
  if (maxlevel === void 0) {
    maxlevel = 100;
  }
  if (level === void 0) {
    level = 0;
  }
  // Points
  let upperInt = [0, 0];
  let lowerInt = [0, 0];
  let p = [0, 0];

  // scalars
  let upperDist = 0;
  let lowerDist = 0;
  let d = 0;
  let closestDist = 0;

  // Integers
  let upperIndex = 0;
  let lowerIndex = 0;
  let closestIndex = 0;

  // polygons
  const lowerPoly = [];
  const upperPoly = [];
  const poly = polygon;
  const v = polygon;
  if (v.length < 3) {
    return result;
  }
  level++;
  if (level > maxlevel) {
    console.warn('quickDecomp: max level (' + maxlevel + ') reached.');
    return result;
  }
  for (let i = 0; i < polygon.length; ++i) {
    if (polygonIsReflex(poly, i)) {
      reflexVertices.push(poly[i]);
      upperDist = lowerDist = Number.MAX_VALUE;
      for (let j = 0; j < polygon.length; ++j) {
        if (isLeft(polygonAt(poly, i - 1), polygonAt(poly, i), polygonAt(poly, j)) && isRightOn(polygonAt(poly, i - 1), polygonAt(poly, i), polygonAt(poly, j - 1))) {
          // if line intersects with an edge
          p = getIntersectionPoint(polygonAt(poly, i - 1), polygonAt(poly, i), polygonAt(poly, j), polygonAt(poly, j - 1)); // find the point of intersection
          if (isRight(polygonAt(poly, i + 1), polygonAt(poly, i), p)) {
            // make sure it's inside the poly
            d = sqdist(poly[i], p);
            if (d < lowerDist) {
              // keep only the closest intersection
              lowerDist = d;
              lowerInt = p;
              lowerIndex = j;
            }
          }
        }
        if (isLeft(polygonAt(poly, i + 1), polygonAt(poly, i), polygonAt(poly, j + 1)) && isRightOn(polygonAt(poly, i + 1), polygonAt(poly, i), polygonAt(poly, j))) {
          p = getIntersectionPoint(polygonAt(poly, i + 1), polygonAt(poly, i), polygonAt(poly, j), polygonAt(poly, j + 1));
          if (isLeft(polygonAt(poly, i - 1), polygonAt(poly, i), p)) {
            d = sqdist(poly[i], p);
            if (d < upperDist) {
              upperDist = d;
              upperInt = p;
              upperIndex = j;
            }
          }
        }
      }

      // if there are no vertices to connect to, choose a point in the middle
      if (lowerIndex === (upperIndex + 1) % polygon.length) {
        p[0] = (lowerInt[0] + upperInt[0]) / 2;
        p[1] = (lowerInt[1] + upperInt[1]) / 2;
        steinerPoints.push(p);
        if (i < upperIndex) {
          polygonAppend(lowerPoly, poly, i, upperIndex + 1);
          lowerPoly.push(p);
          upperPoly.push(p);
          if (lowerIndex !== 0) {
            polygonAppend(upperPoly, poly, lowerIndex, poly.length);
          }
          polygonAppend(upperPoly, poly, 0, i + 1);
        } else {
          if (i !== 0) {
            polygonAppend(lowerPoly, poly, i, poly.length);
          }
          polygonAppend(lowerPoly, poly, 0, upperIndex + 1);
          lowerPoly.push(p);
          upperPoly.push(p);
          polygonAppend(upperPoly, poly, lowerIndex, i + 1);
        }
      } else {
        // connect to the closest point within the triangle
        if (lowerIndex > upperIndex) {
          upperIndex += polygon.length;
        }
        closestDist = Number.MAX_VALUE;
        if (upperIndex < lowerIndex) {
          return result;
        }
        for (let j = lowerIndex; j <= upperIndex; ++j) {
          if (isLeftOn(polygonAt(poly, i - 1), polygonAt(poly, i), polygonAt(poly, j)) && isRightOn(polygonAt(poly, i + 1), polygonAt(poly, i), polygonAt(poly, j))) {
            d = sqdist(polygonAt(poly, i), polygonAt(poly, j));
            if (d < closestDist && polygonCanSee2(poly, i, j)) {
              closestDist = d;
              closestIndex = j % polygon.length;
            }
          }
        }
        if (i < closestIndex) {
          polygonAppend(lowerPoly, poly, i, closestIndex + 1);
          if (closestIndex !== 0) {
            polygonAppend(upperPoly, poly, closestIndex, v.length);
          }
          polygonAppend(upperPoly, poly, 0, i + 1);
        } else {
          if (i !== 0) {
            polygonAppend(lowerPoly, poly, i, v.length);
          }
          polygonAppend(lowerPoly, poly, 0, closestIndex + 1);
          polygonAppend(upperPoly, poly, closestIndex, i + 1);
        }
      }

      // solve smallest poly first
      if (lowerPoly.length < upperPoly.length) {
        quickDecomp(lowerPoly, result, reflexVertices, steinerPoints, delta, maxlevel, level);
        quickDecomp(upperPoly, result, reflexVertices, steinerPoints, delta, maxlevel, level);
      } else {
        quickDecomp(upperPoly, result, reflexVertices, steinerPoints, delta, maxlevel, level);
        quickDecomp(lowerPoly, result, reflexVertices, steinerPoints, delta, maxlevel, level);
      }
      return result;
    }
  }
  result.push(polygon);
  return result;
}

/**
 * Remove collinear points in the polygon.
 * @param thresholdAngle The threshold angle to use when determining whether two edges are collinear. Use zero for finest precision.
 * @return The number of points removed
 */
function removeCollinearPoints(polygon, thresholdAngle) {
  if (thresholdAngle === void 0) {
    thresholdAngle = 0;
  }
  let num = 0;
  for (let i = polygon.length - 1; polygon.length > 3 && i >= 0; --i) {
    if (collinear(polygonAt(polygon, i - 1), polygonAt(polygon, i), polygonAt(polygon, i + 1), thresholdAngle)) {
      // Remove the middle point
      polygon.splice(i % polygon.length, 1);
      num++;
    }
  }
  return num;
}

/**
 * Check if two scalars are equal
 * @param a scalar a
 * @param b scalar b
 * @param precision the precision for the equality check
 * @return whether the two scalars are equal with the given precision
 */
function scalarsEqual(a, b, precision) {
  if (precision === void 0) {
    precision = 0;
  }
  precision = precision || 0;
  return Math.abs(a - b) <= precision;
}

/**
 * Check if two points are equal
 * @param a point a
 * @param b point b
 * @param precision the precision for the equality check
 * @return if the two points are equal
 */
function pointsEqual(a, b, precision) {
  if (precision === void 0) {
    precision = 0;
  }
  return scalarsEqual(a[0], b[0], precision) && scalarsEqual(a[1], b[1], precision);
}

/**
 * Remove duplicate points in the polygon.
 * @param precision The threshold to use when determining whether two points are the same. Use zero for best precision.
 */
function removeDuplicatePoints(polygon, precision) {
  if (precision === void 0) {
    precision = 0;
  }
  for (let i = polygon.length - 1; i >= 1; --i) {
    const pi = polygon[i];
    for (let j = i - 1; j >= 0; --j) {
      if (pointsEqual(pi, polygon[j], precision)) {
        polygon.splice(i, 1);
        continue;
      }
    }
  }
}

var decomp$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    decomp: decomp,
    isSimple: isSimple,
    makeCCW: makeCCW,
    quickDecomp: quickDecomp,
    removeCollinearPoints: removeCollinearPoints,
    removeDuplicatePoints: removeDuplicatePoints
});

// 将 poly-decomp 注入 Matter.js 处理凹多边形
Matter.Common.setDecomp(decomp$1);
class PhysicsFactory {
    static createBodyFromPoints(points, options = {}) {
        const vertices = points.map(p => ({ x: p.x, y: p.y }));
        // 【核心修复】：提取 position，把它作为 fromVertices 的 x, y 参数
        // 否则 fromVertices(0, 0, ...) 会把所有汉字都创建在屏幕左上角
        const { position } = options, restOptions = __rest(options, ["position"]);
        const pos = position || { x: 0, y: 0 };
        const body = Matter.Bodies.fromVertices(pos.x, pos.y, [vertices], restOptions);
        if (!body) {
            console.warn('多边形生成失败，已降级为矩形。');
            const fallbackOptions = Object.assign(Object.assign({}, restOptions), { position: pos });
            return Matter.Bodies.rectangle(pos.x, pos.y, 50, 50, fallbackOptions);
        }
        return body;
    }
}

class CanvasRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    clear(width, height) {
        this.ctx.clearRect(0, 0, width, height);
    }
    drawBody(body, text) {
        const { x, y } = body.position;
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(body.angle);
        // 绘制物理体轮廓（调试用）
        this.ctx.strokeStyle = 'rgba(76, 175, 80, 0.5)';
        this.ctx.beginPath();
        body.vertices.forEach((v, i) => {
            if (i === 0)
                this.ctx.moveTo(v.x - x, v.y - y);
            else
                this.ctx.lineTo(v.x - x, v.y - y);
        });
        this.ctx.closePath();
        this.ctx.stroke();
        // 绘制汉字
        this.ctx.font = 'bold 32px sans-serif';
        this.ctx.fillStyle = '#333';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(text, 0, 0);
        this.ctx.restore();
    }
}

class HanziPhysics {
    constructor(canvas) {
        this.engine = Matter.Engine.create();
        this.renderer = new CanvasRenderer(canvas);
        this.fontLoader = new FontLoader();
    }
    initFont(buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fontLoader.loadFont(buffer);
        });
    }
    createHanzi(char, x, y, options) {
        const font = this.fontLoader.getFont();
        const points = PathParser.getCharOutline(font, char);
        const body = PhysicsFactory.createBodyFromPoints(points, Object.assign({ position: { x, y } }, options));
        // 【核心修复1】：如果物理体创建失败（顶点不足），直接返回 null，避免崩溃
        if (!body) {
            console.warn(`汉字 "${char}" 的物理体创建失败（顶点数量不足）`);
            return null;
        }
        // 【核心修复2】：将汉字文本绑定到父级和所有有效子部件上
        body.renderText = char;
        if (body.parts && Array.isArray(body.parts)) {
            body.parts.forEach((part) => {
                if (part) {
                    part.renderText = char;
                }
            });
        }
        Matter.Composite.add(this.engine.world, body);
        return body;
    }
    addStaticBoundary(x, y, width, height) {
        const boundary = Matter.Bodies.rectangle(x, y, width, height, { isStatic: true });
        Matter.Composite.add(this.engine.world, boundary);
    }
    start(onRender) {
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, this.engine);
        const loop = () => {
            onRender(Matter.Composite.allBodies(this.engine.world));
            requestAnimationFrame(loop);
        };
        loop();
    }
}

export { HanziPhysics };
