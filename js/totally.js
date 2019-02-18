/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/code/entry.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/code/common/enumerable.ts":
/*!******************************************!*\
  !*** ./source/code/common/enumerable.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Enumerable {
        constructor(items) {
            this._items = items;
        }
        static from(items) {
            return new Enumerable(items);
        }
        toArray() {
            return this._items;
        }
        foreach(callback) {
            for (let i = 0; i < this._items.length; i++) {
                callback(this._items[i]);
            }
            return this;
        }
        map(callback) {
            const items = [];
            for (let i = 0; i < this._items.length; i++) {
                items.push(callback(this._items[i]));
            }
            return new Enumerable(items);
        }
    }
    exports.default = Enumerable;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./source/code/component/settings.tsx":
/*!********************************************!*\
  !*** ./source/code/component/settings.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! ../common/enumerable */ "./source/code/common/enumerable.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React, enumerable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Settings extends React.Component {
        render() {
            const settings = enumerable_1.default
                .from(Object.keys(this.props.settings))
                .map(key => {
                return (React.createElement("tr", { key: key },
                    React.createElement("td", null, key),
                    React.createElement("td", null,
                        React.createElement("input", { type: "text", value: this.props.settings[key] }))));
            }).toArray();
            return React.createElement("div", { className: "card" },
                React.createElement("table", null,
                    settings,
                    " "));
        }
    }
    exports.Settings = Settings;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./source/code/entry.tsx":
/*!*******************************!*\
  !*** ./source/code/entry.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-dom */ "react-dom"), __webpack_require__(/*! ./component/settings */ "./source/code/component/settings.tsx")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React, ReactDOM, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const settings = {
        a: "a",
        b: "b"
    };
    ReactDOM.render(React.createElement(settings_1.Settings, { settings: settings }), document.getElementById("app"));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "react":
/*!********************************!*\
  !*** external {"amd":"react"} ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"amd":"react-dom"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })

/******/ });
//# sourceMappingURL=totally.js.map