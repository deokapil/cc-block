/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BLK"] = factory();
	else
		root["BLK"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checks.js":
/*!***********************!*\
  !*** ./src/checks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isOnBlacklist\": () => (/* binding */ isOnBlacklist),\n/* harmony export */   \"willBeUnblocked\": () => (/* binding */ willBeUnblocked)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\nvar isOnBlacklist = function isOnBlacklist(src, type) {\n  return src && (!type || type !== _variables__WEBPACK_IMPORTED_MODULE_0__.TYPE_ATTRIBUTE) && (!_variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist || _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist.some(function (pattern) {\n    return pattern.test(src);\n  })) && (!_variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist || _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist.every(function (pattern) {\n    return !pattern.test(src);\n  }));\n};\nvar willBeUnblocked = function willBeUnblocked(script) {\n  var src = script.getAttribute('src');\n  return _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist && _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist.every(function (entry) {\n    return !entry.test(src);\n  }) || _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist && _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist.some(function (entry) {\n    return entry.test(src);\n  });\n};\n\n//# sourceURL=webpack://BLK/./src/checks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unblock\": () => (/* reexport safe */ _unblock__WEBPACK_IMPORTED_MODULE_1__.unblock)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./src/observer.js\");\n/* harmony import */ var _unblock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unblock */ \"./src/unblock.js\");\n\n\n\n\n//# sourceURL=webpack://BLK/./src/index.js?");

/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"observer\": () => (/* binding */ observer)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checks */ \"./src/checks.js\");\n\n\nvar observer = new MutationObserver(function (mutations) {\n  for (var i = 0; i < mutations.length; i++) {\n    var addedNodes = mutations[i].addedNodes;\n\n    var _loop = function _loop(_i) {\n      var node = addedNodes[_i]; // For each added script tag\n\n      if (node.nodeType === 1 && node.tagName === 'SCRIPT') {\n        var src = node.src;\n        var type = node.type;\n        console.log(\"trying ...\" + src);\n\n        if ((0,_checks__WEBPACK_IMPORTED_MODULE_1__.isOnBlacklist)(src, type)) {\n          // remove attribute src -- copy  data-cd-src to  \n          console.log(\"Blocking ...\" + src);\n          _variables__WEBPACK_IMPORTED_MODULE_0__.backupScripts.blacklisted.push([node, node.type]);\n          node.type = _variables__WEBPACK_IMPORTED_MODULE_0__.TYPE_ATTRIBUTE;\n\n          var beforeScriptExecuteListener = function beforeScriptExecuteListener(event) {\n            if (node.getAttribute('type') === _variables__WEBPACK_IMPORTED_MODULE_0__.TYPE_ATTRIBUTE) event.preventDefault();\n            node.removeEventListener('beforescriptexecute', beforeScriptExecuteListener);\n          };\n\n          node.addEventListener('beforescriptexecute', beforeScriptExecuteListener);\n          node.parentElement && node.parentElement.removeChild(node);\n        }\n      }\n    };\n\n    for (var _i = 0; _i < addedNodes.length; _i++) {\n      _loop(_i);\n    }\n  }\n}); // Starts the monitoring\n\nobserver.observe(document.documentElement, {\n  childList: true,\n  subtree: true\n});\n\n//# sourceURL=webpack://BLK/./src/observer.js?");

/***/ }),

/***/ "./src/unblock.js":
/*!************************!*\
  !*** ./src/unblock.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unblock\": () => (/* binding */ unblock)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checks */ \"./src/checks.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer */ \"./src/observer.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar URL_REPLACER_REGEXP = new RegExp('[|\\\\{}()[\\\\]^$+*?.]', 'g'); // Unblocks all (or a selection of) blacklisted scripts.\n\nvar unblock = function unblock() {\n  for (var _len = arguments.length, scriptUrlsOrRegexes = new Array(_len), _key = 0; _key < _len; _key++) {\n    scriptUrlsOrRegexes[_key] = arguments[_key];\n  }\n\n  if (scriptUrlsOrRegexes.length < 1) {\n    _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist = [];\n    _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist = [];\n  } else {\n    if (_variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist) {\n      _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist = _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist.filter(function (pattern) {\n        return scriptUrlsOrRegexes.every(function (urlOrRegexp) {\n          if (typeof urlOrRegexp === 'string') return !pattern.test(urlOrRegexp);else if (urlOrRegexp instanceof RegExp) return pattern.toString() !== urlOrRegexp.toString();\n        });\n      });\n    }\n\n    if (_variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist) {\n      _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist = [].concat(_toConsumableArray(_variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist), _toConsumableArray(scriptUrlsOrRegexes.map(function (urlOrRegexp) {\n        if (typeof urlOrRegexp === 'string') {\n          var escapedUrl = urlOrRegexp.replace(URL_REPLACER_REGEXP, '\\\\$&');\n          var permissiveRegexp = '.*' + escapedUrl + '.*';\n\n          if (_variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist.every(function (p) {\n            return p.toString() !== permissiveRegexp.toString();\n          })) {\n            return new RegExp(permissiveRegexp);\n          }\n        } else if (urlOrRegexp instanceof RegExp) {\n          if (_variables__WEBPACK_IMPORTED_MODULE_0__.patterns.whitelist.every(function (p) {\n            return p.toString() !== urlOrRegexp.toString();\n          })) {\n            return urlOrRegexp;\n          }\n        }\n\n        return null;\n      }).filter(Boolean)));\n    }\n  } // Parse existing script tags with a marked type\n\n\n  var tags = document.querySelectorAll(\"script[type=\\\"\".concat(_variables__WEBPACK_IMPORTED_MODULE_0__.TYPE_ATTRIBUTE, \"\\\"]\"));\n\n  for (var i = 0; i < tags.length; i++) {\n    var script = tags[i];\n\n    if ((0,_checks__WEBPACK_IMPORTED_MODULE_1__.willBeUnblocked)(script)) {\n      _variables__WEBPACK_IMPORTED_MODULE_0__.backupScripts.blacklisted.push([script, 'application/javascript']);\n      script.parentElement.removeChild(script);\n    }\n  } // Exclude 'whitelisted' scripts from the blacklist and append them to <head>\n\n\n  var indexOffset = 0;\n\n  _toConsumableArray(_variables__WEBPACK_IMPORTED_MODULE_0__.backupScripts.blacklisted).forEach(function (_ref, index) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        script = _ref2[0],\n        type = _ref2[1];\n\n    var scriptNode = document.createElement('script');\n\n    for (var _i2 = 0; _i2 < script.attributes.length; _i2++) {\n      var attribute = script.attributes[_i2];\n\n      if (attribute.name !== 'src' && attribute.name !== 'type') {\n        scriptNode.setAttribute(attribute.name, script.attributes[_i2].value);\n      }\n    }\n\n    scriptNode.setAttribute('src', script.src);\n    scriptNode.setAttribute('type', type || 'application/javascript');\n    document.head.appendChild(scriptNode);\n    _variables__WEBPACK_IMPORTED_MODULE_0__.backupScripts.blacklisted.splice(index - indexOffset, 1);\n    indexOffset++;\n    console.log(_variables__WEBPACK_IMPORTED_MODULE_0__.backupScripts.blacklisted);\n  }); // Disconnect the observer if the blacklist is empty for performance reasons\n\n\n  if (_variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist && _variables__WEBPACK_IMPORTED_MODULE_0__.patterns.blacklist.length < 1) {\n    _observer__WEBPACK_IMPORTED_MODULE_2__.observer.disconnect();\n  }\n};\n\n//# sourceURL=webpack://BLK/./src/unblock.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TYPE_ATTRIBUTE\": () => (/* binding */ TYPE_ATTRIBUTE),\n/* harmony export */   \"patterns\": () => (/* binding */ patterns),\n/* harmony export */   \"backupScripts\": () => (/* binding */ backupScripts)\n/* harmony export */ });\nvar TYPE_ATTRIBUTE = 'javascript/blocked';\nvar patterns = {\n  blacklist: window.BLOCK_EM,\n  whitelist: window.DO_NOT_BLOCK\n}; // Backup list containing the original blacklisted script elements\n\nvar backupScripts = {\n  blacklisted: []\n};\n\n//# sourceURL=webpack://BLK/./src/variables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});