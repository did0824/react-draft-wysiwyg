(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("draft-js"), require("immutable"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["draft-js", "immutable", "react"], factory);
	else if(typeof exports === 'object')
		exports["reactDraftWysiwyg"] = factory(require("draft-js"), require("immutable"), require("react"));
	else
		root["reactDraftWysiwyg"] = factory(root["draft-js"], root["immutable"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_draft_js__, __WEBPACK_EXTERNAL_MODULE_immutable__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/Draft.css":
/*!***********************!*\
  !*** ./css/Draft.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./images/align-center.svg":
/*!*********************************!*\
  !*** ./images/align-center.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuNTU2IDE0Ljg4N0gzLjM4OGEuMzI2LjMyNiAwIDAgMSAwLS42NTJoOC4xNjdhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42MTggMTAuMTYySC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUzaDE0LjI5MmEuMzI2LjMyNiAwIDAgMSAwIC42NTN6TTExLjU1NiA1LjQzNUgzLjM4OGEuMzI2LjMyNiAwIDAgMSAwLS42NTJoOC4xNjdhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42MTguNzA5SC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDE0LjI5MmEuMzI2LjMyNiAwIDAgMSAwIC42NTJ6Ii8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./images/align-justify.svg":
/*!**********************************!*\
  !*** ./images/align-justify.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNjIgMTQuODg4SC4zMjVhLjMyNi4zMjYgMCAwIDEgMC0uNjUySDE0LjYyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjIgMTAuMTYySC4zMjVhLjMyNi4zMjYgMCAwIDEgMC0uNjUySDE0LjYyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjIgNS40MzZILjMyNWEuMzI2LjMyNiAwIDAgMSAwLS42NTJIMTQuNjJhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42Mi43MUguMzI1YS4zMjYuMzI2IDAgMCAxIDAtLjY1M0gxNC42MmEuMzI2LjMyNiAwIDAgMSAwIC42NTN6Ii8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./images/align-left.svg":
/*!*******************************!*\
  !*** ./images/align-left.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOC40OTMgMTQuODg3SC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDguMTY3YS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjE4IDEwLjE2MkguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1M2gxNC4yOTJhLjMyNi4zMjYgMCAwIDEgMCAuNjUzek04LjQ5MyA1LjQzNUguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1Mmg4LjE2N2EuMzI2LjMyNiAwIDAgMSAwIC42NTJ6TTE0LjYxOC43MDlILjMyNmEuMzI2LjMyNiAwIDAgMSAwLS42NTJoMTQuMjkyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnoiLz48L2c+PC9zdmc+");

/***/ }),

/***/ "./images/align-right.svg":
/*!********************************!*\
  !*** ./images/align-right.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNjE4IDE0Ljg4N0g2LjQ1YS4zMjYuMzI2IDAgMCAxIDAtLjY1Mmg4LjE2N2EuMzI2LjMyNiAwIDAgMSAwIC42NTJ6TTE0LjYxOCAxMC4xNjJILjMyNmEuMzI2LjMyNiAwIDAgMSAwLS42NTNoMTQuMjkyYS4zMjYuMzI2IDAgMCAxIDAgLjY1M3pNMTQuNjE4IDUuNDM1SDYuNDVhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDguMTY3YS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjE4LjcwOUguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1MmgxNC4yOTJhLjMyNi4zMjYgMCAwIDEgMCAuNjUyeiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./images/bold.svg":
/*!*************************!*\
  !*** ./images/bold.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuMjM2IDBjMS42NTIgMCAyLjk0LjI5OCAzLjg2Ni44OTMuOTI1LjU5NSAxLjM4OCAxLjQ4NSAxLjM4OCAyLjY2OSAwIC42MDEtLjE3MyAxLjEzOS0uNTE2IDEuNjEtLjM0My40NzQtLjg0NC44My0xLjQ5OSAxLjA2OC44NDMuMTY3IDEuNDc0LjUyMyAxLjg5NSAxLjA3MS40MTkuNTUuNjMgMS4xODMuNjMgMS45MDMgMCAxLjI0NS0uNDQ0IDIuMTg3LTEuMzMgMi44MjUtLjg4Ni42NDEtMi4xNDQuOTYxLTMuNzY5Ljk2MUgwdi0yLjE2N2gxLjQ5NFYyLjE2N0gwVjBoNi4yMzZ6TTQuMzA4IDUuNDQ2aDIuMDI0Yy43NTIgMCAxLjMzLS4xNDMgMS43MzQtLjQzLjQwNS0uMjg1LjYwOC0uNzAxLjYwOC0xLjI1IDAtLjYtLjIwNC0xLjA0NC0uNjEyLTEuMzMtLjQwOC0uMjg2LTEuMDE2LS40MjctMS44MjYtLjQyN0g0LjMwOHYzLjQzN3ptMCAxLjgwNFYxMWgyLjU5M2MuNzQ3IDAgMS4zMTQtLjE1MiAxLjcwNy0uNDUyLjM5LS4zLjU4OC0uNzQ1LjU4OC0xLjMzNCAwLS42MzYtLjE2OC0xLjEyNC0uNS0xLjQ2LS4zMzYtLjMzNS0uODY0LS41MDQtMS41ODItLjUwNEg0LjMwOHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./images/color.svg":
/*!**************************!*\
  !*** ./images/color.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNDA2LjU4NWExLjk5OCAxLjk5OCAwIDAgMC0yLjgyNSAwbC0uNTQuNTRhLjc0MS43NDEgMCAxIDAtMS4wNDggMS4wNDhsLjE3NS4xNzUtNS44MjYgNS44MjUtMi4wMjIgMi4wMjNhLjkxLjkxIDAgMCAwLS4yNjYuNjAybC0uMDA1LjEwOHYuMDAybC0uMDgxIDEuODI5YS4zMDIuMzAyIDAgMCAwIC4zMDIuMzE2aC4wMTNsLjk3LS4wNDQuNTkyLS4wMjYuMjY4LS4wMTJjLjI5Ny0uMDEzLjU3OS0uMTM3Ljc5LS4zNDdsNy43Ny03Ljc3LjE0Ni4xNDRhLjc0Ljc0IDAgMCAwIDEuMDQ4IDBjLjI5LS4yOS4yOS0uNzU5IDAtMS4wNDhsLjU0LS41NGMuNzgtLjc4Ljc4LTIuMDQ0IDAtMi44MjV6TTguNzk1IDcuMzMzbC0yLjczLjUxNSA0LjQ1Mi00LjQ1MiAxLjEwOCAxLjEwNy0yLjgzIDIuODN6TTIuMDggMTMuNjczYy0xLjE0OCAwLTIuMDguMjk1LTIuMDguNjYgMCAuMzYzLjkzMi42NTggMi4wOC42NTggMS4xNSAwIDIuMDgtLjI5NCAyLjA4LS42NTkgMC0uMzY0LS45My0uNjU5LTIuMDgtLjY1OXoiLz48L2c+PC9zdmc+");

/***/ }),

/***/ "./images/embedded.svg":
/*!*****************************!*\
  !*** ./images/embedded.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNzA4IDYuNjE1YS40MzYuNDM2IDAgMCAwLS41NDMuMjkxbC0xLjgzIDYuMDQ1YS40MzYuNDM2IDAgMCAwIC44MzMuMjUyTDcgNy4xNmEuNDM2LjQzNiAwIDAgMC0uMjktLjU0NHpNOC45MzEgNi42MTVhLjQzNi40MzYgMCAwIDAtLjU0My4yOTFsLTEuODMgNi4wNDVhLjQzNi40MzYgMCAwIDAgLjgzNC4yNTJsMS44My02LjA0NGEuNDM2LjQzNiAwIDAgMC0uMjktLjU0NHoiLz48cGF0aCBkPSJNMTYuNTY0IDBILjQzNkEuNDM2LjQzNiAwIDAgMCAwIC40MzZ2MTYuMTI4YzAgLjI0LjE5NS40MzYuNDM2LjQzNmgxNi4xMjhjLjI0IDAgLjQzNi0uMTk1LjQzNi0uNDM2Vi40MzZBLjQzNi40MzYgMCAwIDAgMTYuNTY0IDB6TTMuNDg3Ljg3MmgxMC4wMjZ2MS43NDNIMy40ODdWLjg3MnptLTIuNjE1IDBoMS43NDN2MS43NDNILjg3MlYuODcyem0xNS4yNTYgMTUuMjU2SC44NzJWMy40ODhoMTUuMjU2djEyLjY0em0wLTEzLjUxM2gtMS43NDNWLjg3MmgxLjc0M3YxLjc0M3oiLz48Y2lyY2xlIGN4PSI5My44NjciIGN5PSIyNDUuMDY0IiByPSIxMy4xMjgiIHRyYW5zZm9ybT0ibWF0cml4KC4wMzMyIDAgMCAuMDMzMiAwIDApIi8+PGNpcmNsZSBjeD0iOTMuODY3IiBjeT0iMzYwLjU5MiIgcj0iMTMuMTI4IiB0cmFuc2Zvcm09Im1hdHJpeCguMDMzMiAwIDAgLjAzMzIgMCAwKSIvPjxwYXRoIGQ9Ik0xNC4yNTQgMTIuNjQxSDEwLjJhLjQzNi40MzYgMCAwIDAgMCAuODcyaDQuMDU0YS40MzYuNDM2IDAgMCAwIDAtLjg3MnoiLz48L3N2Zz4=");

/***/ }),

/***/ "./images/emoji.svg":
/*!**************************!*\
  !*** ./images/emoji.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjE1LjcyOSAyMi4wODIgMTcgMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5LjcwOCAyNS4xMDRjLTMuMDIxLTMuMDIyLTcuOTM3LTMuMDIyLTEwLjk1OCAwLTMuMDIxIDMuMDItMy4wMiA3LjkzNiAwIDEwLjk1OCAzLjAyMSAzLjAyIDcuOTM3IDMuMDIgMTAuOTU4LS4wMDEgMy4wMi0zLjAyMSAzLjAyLTcuOTM2IDAtMTAuOTU3em0tLjg0NSAxMC4xMTJhNi41NiA2LjU2IDAgMCAxLTkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAtOS4yNjcgNi41NiA2LjU2IDAgMCAxIDkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAgOS4yNjd6bS03LjUyNC02LjczYS45MDYuOTA2IDAgMSAxIDEuODExIDAgLjkwNi45MDYgMCAwIDEtMS44MTEgMHptNC4xMDYgMGEuOTA2LjkwNiAwIDEgMSAxLjgxMiAwIC45MDYuOTA2IDAgMCAxLTEuODEyIDB6bTIuMTQxIDMuNzA4Yy0uNTYxIDEuMjk4LTEuODc1IDIuMTM3LTMuMzQ4IDIuMTM3LTEuNTA1IDAtMi44MjctLjg0My0zLjM2OS0yLjE0N2EuNDM4LjQzOCAwIDAgMSAuODEtLjMzNmMuNDA1Ljk3NiAxLjQxIDEuNjA3IDIuNTU5IDEuNjA3IDEuMTIzIDAgMi4xMjEtLjYzMSAyLjU0NC0xLjYwOGEuNDM4LjQzOCAwIDAgMSAuODA0LjM0N3oiLz48L3N2Zz4=");

/***/ }),

/***/ "./images/eraser.svg":
/*!***************************!*\
  !*** ./images/eraser.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOC4xIDE0bDYuNC03LjJjLjYtLjcuNi0xLjgtLjEtMi41bC0yLjctMi43Yy0uMy0uNC0uOC0uNi0xLjMtLjZIOC42Yy0uNSAwLTEgLjItMS40LjZMLjUgOS4yYy0uNi43LS42IDEuOS4xIDIuNWwyLjcgMi43Yy4zLjQuOC42IDEuMy42SDE2di0xSDguMXptLTEuMy0uMXMwLS4xIDAgMGwtMi43LTIuN2MtLjQtLjQtLjQtLjkgMC0xLjNMNy41IDZoLTFsLTMgMy4zYy0uNi43LS42IDEuNy4xIDIuNEw1LjkgMTRINC42Yy0uMiAwLS40LS4xLS42LS4yTDEuMiAxMWMtLjMtLjMtLjMtLjggMC0xLjFMNC43IDZoMS44TDEwIDJoMUw3LjUgNmwzLjEgMy43LTMuNSA0Yy0uMS4xLS4yLjEtLjMuMnoiLz48L3N2Zz4=");

/***/ }),

/***/ "./images/font-size.svg":
/*!******************************!*\
  !*** ./images/font-size.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuOTIxIDMuMTE5YS40MjcuNDI3IDAgMCAwIC4zMzUuMTY0aC45N2EuNDI2LjQyNiAwIDAgMCAuMzA0LS4xMy40NDEuNDQxIDAgMCAwIC4xMjUtLjMxbC4wMDItMi40MWEuNDM0LjQzNCAwIDAgMC0uNDMtLjQzMkguNDNBLjQzNC40MzQgMCAwIDAgMCAuNDR2Mi40MDZjMCAuMjQyLjE5Mi40MzguNDMuNDM4aC45N2MuMTMgMCAuMjU0LS4wNi4zMzUtLjE2NWwuNzMtLjkzSDUuNTR2MTEuMzZjMCAuMjQxLjE5Mi40MzcuNDMuNDM3aDEuNzE3Yy4yMzcgMCAuNDMtLjE5Ni40My0uNDM3VjIuMTg4aDMuMDdsLjczNC45MzF6TTEzLjg5OCAxMS4yNjNhLjQyNS40MjUgMCAwIDAtLjQ4Mi0uMTQ2bC0uNTQ3LjE5NFY5LjYxN2EuNDQyLjQ0MiAwIDAgMC0uMTI2LS4zMS40MjYuNDI2IDAgMCAwLS4zMDQtLjEyN2gtLjQyOWEuNDM0LjQzNCAwIDAgMC0uNDMuNDM3djEuNjk0bC0uNTQ3LS4xOTRhLjQyNS40MjUgMCAwIDAtLjQ4MS4xNDYuNDQ0LjQ0NCAwIDAgMC0uMDE2LjUxMmwxLjMzMiAyLjAxN2EuNDI3LjQyNyAwIDAgMCAuNzEzIDBsMS4zMzMtMi4wMTdhLjQ0NC40NDQgMCAwIDAtLjAxNi0uNTEyeiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./images/image.svg":
/*!**************************!*\
  !*** ./images/image.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNzQxIDBILjI2Qy4xMTYgMCAwIC4xMzYgMCAuMzA0djEzLjM5MmMwIC4xNjguMTE2LjMwNC4yNTkuMzA0SDE0Ljc0Yy4xNDMgMCAuMjU5LS4xMzYuMjU5LS4zMDRWLjMwNEMxNSAuMTM2IDE0Ljg4NCAwIDE0Ljc0MSAwem0tLjI1OCAxMy4zOTFILjUxN1YuNjFoMTMuOTY2VjEzLjM5eiIvPjxwYXRoIGQ9Ik00LjEzOCA2LjczOGMuNzk0IDAgMS40NC0uNzYgMS40NC0xLjY5NXMtLjY0Ni0xLjY5NS0xLjQ0LTEuNjk1Yy0uNzk0IDAtMS40NC43Ni0xLjQ0IDEuNjk1IDAgLjkzNC42NDYgMS42OTUgMS40NCAxLjY5NXptMC0yLjc4MWMuNTA5IDAgLjkyMy40ODcuOTIzIDEuMDg2IDAgLjU5OC0uNDE0IDEuMDg2LS45MjMgMS4wODYtLjUwOSAwLS45MjMtLjQ4Ny0uOTIzLTEuMDg2IDAtLjU5OS40MTQtMS4wODYuOTIzLTEuMDg2ek0xLjgxIDEyLjE3NGMuMDYgMCAuMTIyLS4wMjUuMTcxLS4wNzZMNi4yIDcuNzI4bDIuNjY0IDMuMTM0YS4yMzIuMjMyIDAgMCAwIC4zNjYgMCAuMzQzLjM0MyAwIDAgMCAwLS40M0w3Ljk4NyA4Ljk2OWwyLjM3NC0zLjA2IDIuOTEyIDMuMTQyYy4xMDYuMTEzLjI3LjEwNS4zNjYtLjAyYS4zNDMuMzQzIDAgMCAwLS4wMTYtLjQzbC0zLjEwNC0zLjM0N2EuMjQ0LjI0NCAwIDAgMC0uMTg2LS4wOC4yNDUuMjQ1IDAgMCAwLS4xOC4xTDcuNjIyIDguNTM3IDYuMzk0IDcuMDk0YS4yMzIuMjMyIDAgMCAwLS4zNTQtLjAxM2wtNC40IDQuNTZhLjM0My4zNDMgMCAwIDAtLjAyNC40My4yNDMuMjQzIDAgMCAwIC4xOTQuMTAzeiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./images/indent.svg":
/*!***************************!*\
  !*** ./images/indent.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS43MTYgMy4yMTFIMTd2MS4xOTdINS43MTZ6TTAgLjAyaDE3djEuMTk3SDB6TTAgMTIuNzgzaDE3djEuMTk3SDB6TTUuNzE2IDkuNTkzSDE3djEuMTk3SDUuNzE2ek01LjcxNiA2LjQwMkgxN3YxLjE5N0g1LjcxNnpNLjE4NyA5LjQ5MUwyLjUyIDcgLjE4NyA0LjUwOXoiLz48L2c+PC9zdmc+");

/***/ }),

/***/ "./images/italic.svg":
/*!***************************!*\
  !*** ./images/italic.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTcgM1YyaDR2MUg5Ljc1M2wtMyAxMEg4djFINHYtMWgxLjI0N2wzLTEwSDd6Ii8+PC9zdmc+");

/***/ }),

/***/ "./images/link.svg":
/*!*************************!*\
  !*** ./images/link.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjk2Ny45NUEzLjIyNiAzLjIyNiAwIDAgMCAxMS42Ny4wMDJjLS44NyAwLTEuNjg2LjMzNy0yLjI5Ny45NDhMNy4xMDUgMy4yMThBMy4yNDcgMy4yNDcgMCAwIDAgNi4yNCA2LjI0YTMuMjI1IDMuMjI1IDAgMCAwLTMuMDIyLjg2NUwuOTUgOS4zNzNhMy4yNTMgMy4yNTMgMCAwIDAgMCA0LjU5NCAzLjIyNiAzLjIyNiAwIDAgMCAyLjI5Ny45NDhjLjg3IDAgMS42ODYtLjMzNiAyLjI5OC0uOTQ4TDcuODEyIDExLjdhMy4yNDcgMy4yNDcgMCAwIDAgLjg2NS0zLjAyMyAzLjIyNSAzLjIyNSAwIDAgMCAzLjAyMi0uODY1bDIuMjY4LTIuMjY3YTMuMjUyIDMuMjUyIDAgMCAwIDAtNC41OTV6TTcuMTA1IDEwLjk5M0w0LjgzNyAxMy4yNmEyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NSAyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LS42NTUgMi4yNTIgMi4yNTIgMCAwIDEgMC0zLjE4bDIuMjY4LTIuMjY4YTIuMjMyIDIuMjMyIDAgMCAxIDEuNTktLjY1NWMuNDMgMCAuODQxLjEyIDEuMTk1LjM0M0w0Ljc3MiA5LjQzOGEuNS41IDAgMSAwIC43MDcuNzA3bDEuOTM5LTEuOTM4Yy41NDUuODY4LjQ0MiAyLjAzLS4zMTMgMi43ODV6bTYuMTU1LTYuMTU1bC0yLjI2OCAyLjI2N2EyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NWMtLjQzMSAwLS44NDEtLjEyLTEuMTk1LS4zNDNsMS45MzgtMS45MzhhLjUuNSAwIDEgMC0uNzA3LS43MDdMNy40OTkgNi43MWEyLjI1MiAyLjI1MiAwIDAgMSAuMzEzLTIuNzg1bDIuMjY3LTIuMjY4YTIuMjMzIDIuMjMzIDAgMCAxIDEuNTktLjY1NSAyLjIzMyAyLjIzMyAwIDAgMSAyLjI0NiAyLjI0NWMwIC42MDMtLjIzMiAxLjE2OC0uNjU1IDEuNTl6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");

/***/ }),

/***/ "./images/list-ordered.svg":
/*!*********************************!*\
  !*** ./images/list-ordered.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4yMDIgMS40NjZoOC4xNWMuMzM4IDAgLjYxMi0uMzIyLjYxMi0uNzIgMC0uMzk3LS4yNzQtLjcyLS42MTItLjcyaC04LjE1Yy0uMzM4IDAtLjYxMS4zMjMtLjYxMS43MiAwIC4zOTguMjczLjcyLjYxLjcyek0xMi4zNTIgNS43ODNoLTguMTVjLS4zMzggMC0uNjExLjMyMi0uNjExLjcyIDAgLjM5Ny4yNzMuNzIuNjEuNzJoOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5OC0uMjc0LS43Mi0uNjEyLS43MnpNMTIuMzUyIDExLjU0aC04LjE1Yy0uMzM4IDAtLjYxMS4zMjItLjYxMS43MiAwIC4zOTYuMjczLjcxOS42MS43MTloOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5Ny0uMjc0LS43Mi0uNjEyLS43MnpNLjc2NyAxLjI0OXYxLjgwMmMwIC4xOTUuMTM2LjM0My4zMTUuMzQzLjE3NiAwIC4zMTUtLjE1LjMxNS0uMzQzVi4zNTZjMC0uMTktLjEzMy0uMzM5LS4zMDItLjMzOS0uMTQ4IDAtLjIyMy4xMTgtLjI0Ny4xNTZhLjIyOC4yMjggMCAwIDAtLjAwMy4wMDVMLjU3OS42MjFhLjQ3NC40NzQgMCAwIDAtLjA5OC4yNzNjMCAuMTk0LjEyOC4zNTEuMjg2LjM1NXpNLjM1MiA4LjE5SDEuNTVjLjE1NyAwIC4yODUtLjE2Mi4yODUtLjM2MiAwLS4xOTgtLjEyOC0uMzU5LS4yODUtLjM1OUguNjh2LS4wMDZjMC0uMTA3LjIxLS4yODEuMzc4LS40MjIuMzM2LS4yNzguNzUzLS42MjUuNzUzLTEuMjI2IDAtLjU3LS4zNzYtMS0uODc0LTEtLjQ3NyAwLS44MzYuMzg1LS44MzYuODk3IDAgLjI5Ny4xNjQuNDAyLjMwNS40MDIuMiAwIC4zMjEtLjE3Ni4zMjEtLjM0NiAwLS4xMDYuMDIzLS4yMjguMjA0LS4yMjguMjQzIDAgLjI1LjI1NC4yNS4yODMgMCAuMjI4LS4yNTIuNDQyLS40OTUuNjQ5LS4zMDEuMjU1LS42NDIuNTQ0LS42NDIuOTkydi4zODRjMCAuMjA1LjE1OS4zNDMuMzA4LjM0M3pNMS43NyAxMC41NDNjMC0uNTkyLS4yOTYtLjkzMS0uODE0LS45MzEtLjY4IDAtLjg1OS41Ny0uODU5Ljg3MiAwIC4zNTEuMjIyLjM5LjMxOC4zOS4xODUgMCAuMzEtLjE0OC4zMS0uMzY2IDAtLjA4NC4wMjYtLjE4MS4yMjQtLjE4MS4xNDIgMCAuMi4wMjQuMi4yNjcgMCAuMjM3LS4wNDMuMjYzLS4yMTMuMjYzLS4xNjQgMC0uMjg4LjE1Mi0uMjg4LjM1NCAwIC4yLjEyNS4zNS4yOTEuMzUuMjI1IDAgLjI3LjEwOC4yNy4yODN2LjA3NWMwIC4yOTQtLjA5Ny4zNS0uMjc3LjM1LS4yNDggMC0uMjY3LS4xNS0uMjY3LS4xOTcgMC0uMTc0LS4wOTgtLjM1LS4zMTctLjM1LS4xOTIgMC0uMzA3LjE0MS0uMzA3LjM3OCAwIC40My4zMTMuODg4Ljg5NS44ODguNTY0IDAgLjkwMS0uNC45MDEtMS4wN3YtLjA3NGMwLS4yNzQtLjA3NC0uNTAyLS4yMTQtLjY2Ni4wOTYtLjE2My4xNDgtLjM4LjE0OC0uNjM1eiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./images/list-unordered.svg":
/*!***********************************!*\
  !*** ./images/list-unordered.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS43MiAzLjQyN2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3LjAxIDEuNzIuMDFDLjc3LjAwOCAwIC43NzUgMCAxLjcxNWMwIC45NC43NzQgMS43MTEgMS43MiAxLjcxMXptMC0yLjYyNWMuNTEgMCAuOTIyLjQxMi45MjIuOTE0YS45Mi45MiAwIDAgMS0xLjg0MiAwIC45Mi45MiAwIDAgMSAuOTItLjkxNHpNMS43MiA4LjcwM2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3IDUuMjg3IDEuNzIgNS4yODdDLjc3IDUuMjg3IDAgNi4wNTIgMCA2Ljk5NXMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjJjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAwIDEtMS44NDIgMGMwLS41MDUuNDE1LS45MTQuOTItLjkxNHpNMS43MiAxMy45ODJjLjk1MSAwIDEuNzIyLS43NjggMS43MjItMS43MDggMC0uOTQzLS43NzQtMS43MDgtMS43MjEtMS43MDgtLjk0NyAwLTEuNzIxLjc2OC0xLjcyMSAxLjcwOHMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjVjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAxIDEtMS44NDIgMCAuOTIuOTIgMCAwIDEgLjkyLS45MTR6TTUuNzQ0IDIuMTE1aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OS40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDcuMzk0aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOThINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OC40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDEyLjY3aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjQuNC40IDAgMCAwIC40MDIuMzk4eiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./images/monospace.svg":
/*!******************************!*\
  !*** ./images/monospace.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS4wMjEgMi45MDZjLjE4NiAxLjIxOS4zNzIgMS41LjM3MiAyLjcxOUMxLjM5MyA2LjM3NSAwIDcuMDMxIDAgNy4wMzF2LjkzOHMxLjM5My42NTYgMS4zOTMgMS40MDZjMCAxLjIxOS0uMTg2IDEuNS0uMzcyIDIuNzE5Qy43NDMgMTQuMDYzIDEuNzY0IDE1IDIuNjkzIDE1aDEuOTV2LTEuODc1cy0xLjY3Mi4xODgtMS42NzItLjkzOGMwLS44NDMuMTg2LS44NDMuMzcyLTIuNzE4LjA5My0uODQ0LS40NjQtMS41LTEuMDIyLTEuOTY5LjU1OC0uNDY5IDEuMTE1LTEuMDMxIDEuMDIyLTEuODc1QzMuMDY0IDMuNzUgMi45NyAzLjc1IDIuOTcgMi45MDZjMC0xLjEyNSAxLjY3Mi0xLjAzMSAxLjY3Mi0xLjAzMVYwaC0xLjk1QzEuNjcgMCAuNzQzLjkzOCAxLjAyIDIuOTA2ek0xMS45NzkgMi45MDZjLS4xODYgMS4yMTktLjM3MiAxLjUtLjM3MiAyLjcxOSAwIC43NSAxLjM5MyAxLjQwNiAxLjM5MyAxLjQwNnYuOTM4cy0xLjM5My42NTYtMS4zOTMgMS40MDZjMCAxLjIxOS4xODYgMS41LjM3MiAyLjcxOS4yNzggMS45NjktLjc0MyAyLjkwNi0xLjY3MiAyLjkwNmgtMS45NXYtMS44NzVzMS42NzIuMTg4IDEuNjcyLS45MzhjMC0uODQzLS4xODYtLjg0My0uMzcyLTIuNzE4LS4wOTMtLjg0NC40NjQtMS41IDEuMDIyLTEuOTY5LS41NTgtLjQ2OS0xLjExNS0xLjAzMS0xLjAyMi0xLjg3NS4xODYtMS44NzUuMzcyLTEuODc1LjM3Mi0yLjcxOSAwLTEuMTI1LTEuNjcyLTEuMDMxLTEuNjcyLTEuMDMxVjBoMS45NWMxLjAyMiAwIDEuOTUuOTM4IDEuNjcyIDIuOTA2eiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./images/openlink.svg":
/*!*****************************!*\
  !*** ./images/openlink.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuMDcyIDBIOC45MTVhLjkyNS45MjUgMCAwIDAgMCAxLjg0OWgyLjkyNUw2Ljk2MSA2LjcyN2EuOTE4LjkxOCAwIDAgMC0uMjcuNjU0YzAgLjI0Ny4wOTUuNDguMjcuNjU0YS45MTguOTE4IDAgMCAwIC42NTQuMjcuOTE4LjkxOCAwIDAgMCAuNjUzLS4yN2w0Ljg4LTQuODh2Mi45MjZhLjkyNS45MjUgMCAwIDAgMS44NDggMFYuOTI0QS45MjUuOTI1IDAgMCAwIDE0LjA3MiAweiIvPjxwYXRoIGQ9Ik0xMC42MjMgMTMuNDExSDEuNTg1VjQuMzcyaDYuNzk4bDEuNTg0LTEuNTg0SC43OTJBLjc5Mi43OTIgMCAwIDAgMCAzLjU4djEwLjYyNGMwIC40MzcuMzU1Ljc5Mi43OTIuNzkyaDEwLjYyNGEuNzkyLjc5MiAwIDAgMCAuNzkyLS43OTJWNS4wMjlsLTEuNTg1IDEuNTg0djYuNzk4eiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./images/outdent.svg":
/*!****************************!*\
  !*** ./images/outdent.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS4zOTYgMy4xOTNoMTAuNTczVjQuMzlINS4zOTZ6TS4wMzkuMDAzaDE1LjkzVjEuMkguMDM5ek0uMDM5IDEyLjc2NmgxNS45M3YxLjE5N0guMDM5ek01LjM5NiA5LjU3NWgxMC41NzN2MS4xOTdINS4zOTZ6TTUuMzk2IDYuMzg0aDEwLjU3M3YxLjE5N0g1LjM5NnpNMi4xODcgNC40OTFMMCA2Ljk4M2wyLjE4NyAyLjQ5MXoiLz48L2c+PC9zdmc+");

/***/ }),

/***/ "./images/redo.svg":
/*!*************************!*\
  !*** ./images/redo.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNTA0IDEzLjk3N2E0LjQ5NyA0LjQ5NyAwIDAgMS00LjQ5Mi00LjQ5MiA0LjQ5NyA0LjQ5NyAwIDAgMSA0LjQ5Mi00LjQ5M3YyLjk5NWw0Ljk5LTMuOTkzTDYuNTA0IDB2Mi45OTVhNi40OTYgNi40OTYgMCAwIDAtNi40ODggNi40OWMwIDMuNTc4IDIuOTEgNi40OSA2LjQ4OCA2LjQ5YTYuNDk2IDYuNDk2IDAgMCAwIDYuNDg3LTYuNDloLTEuOTk2YTQuNDk3IDQuNDk3IDAgMCAxLTQuNDkxIDQuNDkyeiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");

/***/ }),

/***/ "./images/strikethrough.svg":
/*!**********************************!*\
  !*** ./images/strikethrough.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4wNCA1Ljk1NGg2LjIxNWE3LjQxMiA3LjQxMiAwIDAgMC0uNzk1LS40MzggMTEuOTA3IDExLjkwNyAwIDAgMC0xLjQ0Ny0uNTU3Yy0xLjE4OC0uMzQ4LTEuOTY2LS43MTEtMi4zMzQtMS4wODgtLjM2OC0uMzc3LS41NTItLjc3LS41NTItMS4xODEgMC0uNDk1LjE4Ny0uOTA2LjU2LTEuMjMyLjM4LS4zMzEuODg3LS40OTcgMS41MjMtLjQ5Ny42OCAwIDEuMjY2LjI1NSAxLjc1Ny43NjcuMjk1LjMxNS41ODIuODkxLjg2MSAxLjczbC4xMTcuMDE2LjcwMy4wNS4xLS4wMjRjLjAyOC0uMTUyLjA0Mi0uMjc5LjA0Mi0uMzggMC0uMzM3LS4wMzktLjg1Mi0uMTE3LTEuNTQ0YTkuMzc0IDkuMzc0IDAgMCAwLS4xNzYtLjk5NUM5Ljg4LjM3OSA5LjM4NS4yNDQgOS4wMTcuMTc2IDguMzY1LjA3IDcuODk5LjAxNiA3LjYyLjAxNmMtMS40NSAwLTIuNTQ1LjM1Ny0zLjI4NyAxLjA3MS0uNzQ3LjcyLTEuMTIgMS41ODktMS4xMiAyLjYwNyAwIC41MTEuMTMzIDEuMDQuNCAxLjU4Ni4xMjkuMjUzLjI3LjQ3OC40MjcuNjc0ek04LjI4IDguMTE0Yy41NzUuMjM2Ljk1Ny40MzYgMS4xNDcuNTk5LjQ1MS40MS42NzcuODUyLjY3NyAxLjMyNCAwIC4zODMtLjEzLjc0NS0uMzkzIDEuMDg4LS4yNS4zMzgtLjU5LjU4LTEuMDIuNzI2YTMuNDE2IDMuNDE2IDAgMCAxLTEuMTYzLjIyOGMtLjQwNyAwLS43NzUtLjA2Mi0xLjEwNC0uMTg2YTIuNjk2IDIuNjk2IDAgMCAxLS44NzgtLjQ4IDMuMTMzIDMuMTMzIDAgMCAxLS42Ny0uNzk0IDEuNTI3IDEuNTI3IDAgMCAxLS4xMDQtLjIyNyA1Ny41MjMgNTcuNTIzIDAgMCAwLS4xODgtLjQ3MyAyMS4zNzEgMjEuMzcxIDAgMCAwLS4yNTEtLjU5OWwtLjg1My4wMTd2LjM3MWwtLjAxNy4zMTNhOS45MiA5LjkyIDAgMCAwIDAgLjU3M2MuMDExLjI3LjAxNy43MDkuMDE3IDEuMzE2di4xMWMwIC4wNzkuMDIyLjE0LjA2Ny4xODUuMDgzLjA2OC4yODQuMTQ3LjYwMi4yMzdsMS4xNy4zMzdjLjQ1Mi4xMy45OTYuMTk0IDEuNjMyLjE5NC42ODYgMCAxLjI1Mi0uMDU5IDEuNjk4LS4xNzdhNC42OTQgNC42OTQgMCAwIDAgMS4yOC0uNTU3Yy40MDEtLjI1OS43MDUtLjQ4Ni45MTEtLjY4My4yNjgtLjI3Ni40NjYtLjU2OC41OTQtLjg3OGE0Ljc0IDQuNzQgMCAwIDAgLjM0My0xLjc4OGMwLS4yOTgtLjAyLS41NTctLjA1OC0uNzc2SDguMjgxek0xNC45MTQgNi41N2EuMjYuMjYgMCAwIDAtLjE5My0uMDc2SC4yNjhhLjI2LjI2IDAgMCAwLS4xOTMuMDc2LjI2NC4yNjQgMCAwIDAtLjA3NS4xOTR2LjU0YzAgLjA3OS4wMjUuMTQzLjA3NS4xOTRhLjI2LjI2IDAgMCAwIC4xOTMuMDc2SDE0LjcyYS4yNi4yNiAwIDAgMCAuMTkzLS4wNzYuMjY0LjI2NCAwIDAgMCAuMDc1LS4xOTR2LS41NGEuMjY0LjI2NCAwIDAgMC0uMDc1LS4xOTR6Ii8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./images/subscript.svg":
/*!******************************!*\
  !*** ./images/subscript.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjg2NiAxMS42NDZIOS4wNkw1Ljg2NyA3Ljk0MmwtMy4xMjEgMy43MDRIMGw0LjUyNC01LjA2NEwuMjE4IDEuODA0aDIuNzdsMyAzLjQ2NCAzLjAyMy0zLjQ2NGgyLjY1TDcuMzA2IDYuNTgybDQuNTYgNS4wNjR6bTEuNzI1IDIuMDU4bDEuODI3LTEuMzY4Yy42NC0uNDM1IDEuMDYyLS44NCAxLjI2NC0xLjIxMi4yMDItLjM3Mi4zMDItLjc3My4zMDItMS4yMDIgMC0uNy0uMjM3LTEuMjY2LS43MS0xLjY5Ni0uNDc0LS40MzEtMS4wOTctLjY0Ni0xLjg2OS0uNjQ2LS43NDQgMC0xLjM0LjIxOC0xLjc4NS42NTMtLjQ0Ni40MzYtLjY3IDEuMDkyLS42NyAxLjk3aDEuNDM2YzAtLjUyNC4wOTQtLjg4Ni4yODEtMS4wODcuMTg4LS4yLjQ0NS0uMzAxLjc3Mi0uMzAxcy41ODYuMTAyLjc3Ny4zMDZjLjE5LjIwNC4yODYuNDU4LjI4Ni43NiAwIC4zMDMtLjA4OC41NzctLjI2Ni44MjItLjE3Ny4yNDUtLjY3LjY1OC0xLjQ3OCAxLjI0LS42OTIuNS0xLjYyOC45NzEtMS45MSAxLjQxM0wxMS44NjQgMTVIMTd2LTEuMjk2aC0zLjQxeiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./images/superscript.svg":
/*!********************************!*\
  !*** ./images/superscript.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuMzA1IDEwLjE2NUwxMS44NjUgMTVIOS4wNTdsLTMuMTkyLTMuNTM2TDIuNzQ2IDE1SDBsNC41MjMtNC44MzVMLjIxOCA1LjYwM2gyLjc3TDUuOTg2IDguOTEgOS4wMSA1LjYwM2gyLjY0OWwtNC4zNTQgNC41NjJ6bTYuMjM0LTMuMjY5bDEuODc5LTEuMzA2Yy42NC0uNDE2IDEuMDYyLS44MDEgMS4yNjQtMS4xNTcuMjAxLS4zNTYuMzAyLS43MzguMzAyLTEuMTQ4IDAtLjY2OS0uMjM3LTEuMjEtLjcxLTEuNjItLjQ3NC0uNDExLTEuMDk3LS42MTctMS44NjgtLjYxNy0uNzQ0IDAtMS4zNC4yMDgtMS43ODUuNjI0LS40NDcuNDE2LS42NyAxLjA0My0uNjcgMS44ODFoMS40MzZjMC0uNS4wOTQtLjg0Ni4yODEtMS4wMzguMTg4LS4xOTEuNDQ1LS4yODcuNzcyLS4yODdzLjU4NS4wOTcuNzc3LjI5MmMuMTkuMTk1LjI4Ni40MzcuMjg2LjcyNiAwIC4yOS0uMDg5LjU1LS4yNjYuNzg1cy0uNjcuNjI4LTEuNDc5IDEuMTg0Yy0uNjkxLjQ3Ny0xLjYyNy45MjctMS45MDggMS4zNWwuMDE0IDEuNTY5SDE3VjYuODk2aC0zLjQ2MXoiLz48L3N2Zz4=");

/***/ }),

/***/ "./images/textColor.svg":
/*!******************************!*\
  !*** ./images/textColor.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgPGcgaWQ9Iuq3uOujuV83NTk5IiBkYXRhLW5hbWU9Iuq3uOujuSA3NTk5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDczIC0xMjg5NikiPg0KICAgIDxyZWN0IGlkPSLsgqzqsIHtmJVfNTYzOCIgZGF0YS1uYW1lPSLsgqzqsIHtmJUgNTYzOCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQ3MyAxMjg5NikiIGZpbGw9IiNmZmYiLz4NCiAgICA8dGV4dCBpZD0iQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0NjUgMTI5MTIpIiBmaWxsPSIjMjUyNTI1IiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0iTm90b1NhbnMtUmVndWxhciwgTm90byBTYW5zIj48dHNwYW4geD0iMCIgeT0iMCI+QTwvdHNwYW4+PC90ZXh0Pg0KICAgIDxyZWN0IGlkPSLsgqzqsIHtmJVfNTYzOSIgZGF0YS1uYW1lPSLsgqzqsIHtmJUgNTYzOSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDY3IDEyOTE0KSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "./images/underline.svg":
/*!******************************!*\
  !*** ./images/underline.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTYuMDQ1IDJ2Ljk5Mkw0Ljc4NSAzdjUuMTcyYzAgLjg1OS4yNDMgMS41MTIuNzI3IDEuOTU3czEuMTI0LjY2OCAxLjkxOC42NjhjLjgzNiAwIDEuNTA5LS4yMjEgMi4wMTktLjY2NC41MTEtLjQ0Mi43NjYtMS4wOTYuNzY2LTEuOTYxVjNsLTEuMjYtLjAwOFYySDEzdi45OTJMMTEuNzM5IDN2NS4xNzJjMCAxLjIzNC0uMzk4IDIuMTgxLTEuMTk1IDIuODQtLjc5Ny42NTktMS44MzUuOTg4LTMuMTE0Ljk4OC0xLjI0MiAwLTIuMjQ4LS4zMjktMy4wMTctLjk4OC0uNzY5LS42NTktMS4xNTItMS42MDUtMS4xNTItMi44NFYzTDIgMi45OTJWMmg0LjA0NXpNMiAxM2gxMXYxSDJ6Ii8+PC9zdmc+");

/***/ }),

/***/ "./images/undo.svg":
/*!*************************!*\
  !*** ./images/undo.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTQuODc1YzIuNjcyIDAgNC44NDYtMi4xNDUgNC44NDYtNC43ODEgMC0yLjYzNy0yLjE3NC00Ljc4MS00Ljg0Ni00Ljc4MVY4LjVMMS42MTUgNC4yNSA3IDB2My4xODhjMy44NiAwIDcgMy4wOTggNyA2LjkwNlMxMC44NiAxNyA3IDE3cy03LTMuMDk4LTctNi45MDZoMi4xNTRjMCAyLjYzNiAyLjE3NCA0Ljc4MSA0Ljg0NiA0Ljc4MXoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./images/unlink.svg":
/*!***************************!*\
  !*** ./images/unlink.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTMuOTU2IDEuMDM3YTMuNTUgMy41NSAwIDAgMC01LjAxNCAwTDYuNDM2IDMuNTQ0YS41NDUuNTQ1IDAgMSAwIC43Ny43N2wyLjUwOC0yLjUwNmEyLjQzOCAyLjQzOCAwIDAgMSAxLjczNS0uNzE1Yy42NTggMCAxLjI3NS4yNTQgMS43MzYuNzE1LjQ2LjQ2MS43MTUgMS4wNzguNzE1IDEuNzM2IDAgLjY1OC0uMjU0IDEuMjc0LS43MTUgMS43MzVMOS45MDcgOC41NThhMi40NTggMi40NTggMCAwIDEtMy40NzIgMCAuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3MSAzLjUzNCAzLjUzNCAwIDAgMCAyLjUwNyAxLjAzN2MuOTA4IDAgMS44MTYtLjM0NiAyLjUwNy0xLjAzN2wzLjI3OC0zLjI3OGEzLjUyIDMuNTIgMCAwIDAgMS4wMzUtMi41MDdjMC0uOTUtLjM2Ny0xLjg0LTEuMDM1LTIuNTA3eiIvPjxwYXRoIGQ9Ik03LjQgMTEuMDY1bC0yLjEyMiAyLjEyYTIuNDM3IDIuNDM3IDAgMCAxLTEuNzM1LjcxNiAyLjQzNyAyLjQzNyAwIDAgMS0xLjczNi0uNzE1IDIuNDU3IDIuNDU3IDAgMCAxIDAtMy40NzFsMy4wODYtMy4wODZhMi40MzggMi40MzggMCAwIDEgMS43MzUtLjcxNWMuNjU4IDAgMS4yNzUuMjU0IDEuNzM2LjcxNWEuNTQ1LjU0NSAwIDEgMCAuNzcxLS43NzEgMy41NSAzLjU1IDAgMCAwLTUuMDE0IDBMMS4wMzYgOC45NDRBMy41MiAzLjUyIDAgMCAwIDAgMTEuNDVjMCAuOTUuMzY3IDEuODQgMS4wMzUgMi41MDdhMy41MiAzLjUyIDAgMCAwIDIuNTA2IDEuMDM1Yy45NSAwIDEuODQtLjM2OCAyLjUwNy0xLjAzNWwyLjEyMi0yLjEyMWEuNTQ1LjU0NSAwIDAgMC0uNzcxLS43NzF6TTkuMjc0IDEyLjAwMmEuNTQ2LjU0NiAwIDAgMC0uNTQ2LjU0NXYxLjYzN2EuNTQ2LjU0NiAwIDAgMCAxLjA5MSAwdi0xLjYzN2EuNTQ1LjU0NSAwIDAgMC0uNTQ1LS41NDV6TTExLjIzIDExLjYxNmEuNTQ1LjU0NSAwIDEgMC0uNzcyLjc3MmwxLjE1NyAxLjE1NmEuNTQzLjU0MyAwIDAgMCAuNzcxIDAgLjU0NS41NDUgMCAwIDAgMC0uNzdsLTEuMTU2LTEuMTU4ek0xMi41MzcgOS44MkgxMC45YS41NDYuNTQ2IDAgMCAwIDAgMS4wOTFoMS42MzdhLjU0Ni41NDYgMCAwIDAgMC0xLjA5ek00LjkxIDMuNTQ3YS41NDYuNTQ2IDAgMCAwIC41NDUtLjU0NVYxLjM2NmEuNTQ2LjU0NiAwIDAgMC0xLjA5IDB2MS42MzZjMCAuMzAxLjI0NC41NDUuNTQ1LjU0NXpNMi44ODggMy45MzNhLjU0My41NDMgMCAwIDAgLjc3MSAwIC41NDUuNTQ1IDAgMCAwIDAtLjc3MUwyLjUwMiAyLjAwNWEuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3bDEuMTU3IDEuMTU4ek0xLjYyOCA1LjczaDEuNjM2YS41NDYuNTQ2IDAgMCAwIDAtMS4wOTJIMS42MjhhLjU0Ni41NDYgMCAwIDAgMCAxLjA5MXoiLz48L2c+PC9zdmc+");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ "./node_modules/draftjs-utils/lib/draftjs-utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/draftjs-utils/lib/draftjs-utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! draft-js */ "draft-js"),__webpack_require__(/*! immutable */ "immutable")):undefined}(window,function(n,r){return u={},o.m=i=[function(t,e){t.exports=n},function(t,e){t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e);var C=n(0),i=n(1);function m(t){var e=t.getSelection(),n=t.getCurrentContent(),r=e.getStartKey(),o=e.getEndKey(),i=n.getBlockMap();return i.toSeq().skipUntil(function(t,e){return e===r}).takeUntil(function(t,e){return e===o}).concat([[o,i.get(o)]])}function a(t){return m(t).toList()}function f(t){if(t)return a(t).get(0)}function r(t){if(t){var n=f(t),e=t.getCurrentContent().getBlockMap().toSeq().toList(),r=0;if(e.forEach(function(t,e){t.get("key")===n.get("key")&&(r=e-1)}),-1<r)return e.get(r)}}function o(t){return t?t.getCurrentContent().getBlockMap().toList():new i.List}function u(t){var e=a(t);if(!e.some(function(t){return t.type!==e.get(0).type}))return e.get(0).type}function c(t){var e=C.RichUtils.tryToRemoveBlockStyle(t);return e?C.EditorState.push(t,e,"change-block-type"):t}function l(t){var e="",n=t.getSelection(),r=n.getAnchorOffset(),o=n.getFocusOffset(),i=a(t);if(0<i.size){if(n.getIsBackward()){var u=r;r=o,o=u}for(var c=0;c<i.size;c+=1){var f=0===c?r:0,l=c===i.size-1?o:i.get(c).getText().length;e+=i.get(c).getText().slice(f,l)}}return e}function s(t){var e=t.getCurrentContent(),n=t.getSelection(),r=C.Modifier.removeRange(e,n,"forward"),o=r.getSelectionAfter(),i=r.getBlockForKey(o.getStartKey());return r=C.Modifier.insertText(r,o,"\n",i.getInlineStyleAt(o.getStartOffset()),null),C.EditorState.push(t,r,"insert-fragment")}function g(t){var e=C.Modifier.splitBlock(t.getCurrentContent(),t.getSelection());return c(C.EditorState.push(t,e,"split-block"))}function d(t){var e=t.getCurrentContent().getBlockMap().toList(),n=t.getSelection().merge({anchorKey:e.first().get("key"),anchorOffset:0,focusKey:e.last().get("key"),focusOffset:e.last().getLength()}),r=C.Modifier.removeRange(t.getCurrentContent(),n,"forward");return C.EditorState.push(t,r,"remove-range")}function S(t,e){var n=C.Modifier.setBlockData(t.getCurrentContent(),t.getSelection(),e);return C.EditorState.push(t,n,"change-block-data")}function p(t){var r=new i.Map({}),e=a(t);if(e&&0<e.size)for(var n=function(t){var n=e.get(t).getData();if(!n||0===n.size)return r=r.clear(),"break";if(0===t)r=n;else if(r.forEach(function(t,e){n.get(e)&&n.get(e)===t||(r=r.delete(e))}),0===r.size)return r=r.clear(),"break"},o=0;o<e.size;o+=1){if("break"===n(o))break}return r}var y=Object(i.Map)({code:{element:"pre"}}),v=C.DefaultDraftBlockRenderMap.merge(y);function b(t){if(t){var e=t.getType();return"unordered-list-item"===e||"ordered-list-item"===e}return!1}function h(t,e,n){var r,o=t.getSelection();r=o.getIsBackward()?o.getFocusKey():o.getAnchorKey();var i=t.getCurrentContent(),u=i.getBlockForKey(r),c=u.getType();if("unordered-list-item"!==c&&"ordered-list-item"!==c)return t;var f=i.getBlockBefore(r);if(!f)return t;if(f.getType()!==c)return t;var l=u.getDepth();if(1===e&&l===n)return t;var a,s,g,d,S,p,y,v=Math.min(f.getDepth()+1,n),b=(s=e,g=v,d=(a=t).getSelection(),S=a.getCurrentContent(),p=S.getBlockMap(),y=m(a).map(function(t){var e=t.getDepth()+s;return e=Math.max(0,Math.min(e,g)),t.set("depth",e)}),p=p.merge(y),S.merge({blockMap:p,selectionBefore:d,selectionAfter:d}));return C.EditorState.push(t,b,"adjust-depth")}function O(t,e){var n;return 13===(n=e).which&&(n.getModifierState("Shift")||n.getModifierState("Alt")||n.getModifierState("Control"))?t.getSelection().isCollapsed()?C.RichUtils.insertSoftNewline(t):s(t):function(t){var e=t.getSelection();if(e.isCollapsed()){var n=t.getCurrentContent(),r=e.getStartKey(),o=n.getBlockForKey(r);if(!b(o)&&"unstyled"!==o.getType()&&o.getLength()===e.getStartOffset())return g(t);if(b(o)&&0===o.getLength()){var i=o.getDepth();if(0===i)return c(t);if(0<i)return h(t,-1,i)}}}(t)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t){var e=t.getSelection();if(e.isCollapsed()){var n={},r=t.getCurrentInlineStyle().toList().toJS();if(r)return["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"].forEach(function(t){n[t]=0<=r.indexOf(t)}),n}var u=e.getStartOffset(),c=e.getEndOffset(),f=a(t);if(0<f.size){var o=function(){for(var n={BOLD:!0,ITALIC:!0,UNDERLINE:!0,STRIKETHROUGH:!0,CODE:!0,SUPERSCRIPT:!0,SUBSCRIPT:!0},r=0;r<f.size;r+=1){var t=0===r?u:0,e=r===f.size-1?c:f.get(r).getText().length;t===e&&0===t?(t=1,e=2):t===e&&--t;for(var o=function(t){var e=f.get(r).getInlineStyleAt(t);["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"].forEach(function(t){n[t]=n[t]&&e.get(t)===t})},i=t;i<e;i+=1)o(i)}return{v:n}}();if("object"===I(o))return o.v}return{}}function B(t){var e,n=t.getSelection(),r=n.getStartOffset(),o=n.getEndOffset();r===o&&0===r?o=1:r===o&&--r;for(var i=f(t),u=r;u<o;u+=1){var c=i.getEntityAt(u);if(!c){e=void 0;break}if(u===r)e=c;else if(e!==c){e=void 0;break}}return e}function T(t,e){var n,r=f(t);return r.findEntityRanges(function(t){return t.get("entity")===e},function(t,e){n={start:t,end:e,text:r.get("text").slice(t,e)}}),n}function P(t,e,n){x[t]["".concat(t.toLowerCase(),"-").concat(n)]=E({},"".concat(e),n)}function j(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){E(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},x.color,{},x.bgcolor,{},x.fontSize,{},x.fontFamily,{CODE:x.CODE,SUPERSCRIPT:x.SUPERSCRIPT,SUBSCRIPT:x.SUBSCRIPT})}var x={color:{},bgcolor:{},fontSize:{},fontFamily:{},CODE:{fontFamily:"monospace",wordWrap:"break-word",background:"#f1f1f1",borderRadius:3,padding:"1px 3px"},SUPERSCRIPT:{fontSize:11,position:"relative",top:-8,display:"inline-flex"},SUBSCRIPT:{fontSize:11,position:"relative",bottom:-8,display:"inline-flex"}};function M(t,e,n){var r=t.getSelection(),o=Object.keys(x[e]).reduce(function(t,e){return C.Modifier.removeInlineStyle(t,r,e)},t.getCurrentContent()),i=C.EditorState.push(t,o,"changeinline-style"),u=t.getCurrentInlineStyle();if(r.isCollapsed()&&(i=u.reduce(function(t,e){return C.RichUtils.toggleInlineStyle(t,e)},i)),"SUPERSCRIPT"===e||"SUBSCRIPT"==e)u.has(n)||(i=C.RichUtils.toggleInlineStyle(i,n));else{var c="bgcolor"===e?"backgroundColor":e;u.has("".concat(c,"-").concat(n))||(i=C.RichUtils.toggleInlineStyle(i,"".concat(e.toLowerCase(),"-").concat(n)),P(e,c,n))}return i}function L(t){t&&t.getCurrentContent().getBlockMap().map(function(t){return t.get("characterList")}).toList().flatten().forEach(function(t){t&&0===t.indexOf("color-")?P("color","color",t.substr(6)):t&&0===t.indexOf("bgcolor-")?P("bgcolor","backgroundColor",t.substr(8)):t&&0===t.indexOf("fontsize-")?P("fontSize","fontSize",+t.substr(9)):t&&0===t.indexOf("fontfamily-")&&P("fontFamily","fontFamily",t.substr(11))})}function U(t,e,n){var r=t.getInlineStyleAt(n).toList().filter(function(t){return t.startsWith(e.toLowerCase())});if(r&&0<r.size)return r.get(0)}function w(r,l){if(r&&l&&0<l.length){var t=function(){var t=r.getSelection(),i={};if(t.isCollapsed())return l.forEach(function(t){i[t]=function(t,e){var n=t.getCurrentInlineStyle().toList().filter(function(t){return t.startsWith(e.toLowerCase())});if(n&&0<n.size)return n.get(0)}(r,t)}),{v:i};var u=t.getStartOffset(),c=t.getEndOffset(),f=a(r);if(0<f.size){for(var e=function(n){var t=0===n?u:0,e=n===f.size-1?c:f.get(n).getText().length;t===e&&0===t?(t=1,e=2):t===e&&--t;for(var r=function(e){e===t?l.forEach(function(t){i[t]=U(f.get(n),t,e)}):l.forEach(function(t){i[t]&&i[t]!==U(f.get(n),t,e)&&(i[t]=void 0)})},o=t;o<e;o+=1)r(o)},n=0;n<f.size;n+=1)e(n);return{v:i}}}();if("object"===I(t))return t.v}return{}}function D(e){var t=e.getCurrentInlineStyle(),n=e.getCurrentContent();return t.forEach(function(t){n=C.Modifier.removeInlineStyle(n,e.getSelection(),t)}),C.EditorState.push(e,n,"change-inline-style")}n.d(e,"isListBlock",function(){return b}),n.d(e,"changeDepth",function(){return h}),n.d(e,"handleNewLine",function(){return O}),n.d(e,"getEntityRange",function(){return T}),n.d(e,"getCustomStyleMap",function(){return j}),n.d(e,"toggleCustomInlineStyle",function(){return M}),n.d(e,"getSelectionEntity",function(){return B}),n.d(e,"extractInlineStyle",function(){return L}),n.d(e,"removeAllInlineStyles",function(){return D}),n.d(e,"getSelectionInlineStyle",function(){return R}),n.d(e,"getSelectionCustomInlineStyle",function(){return w}),n.d(e,"getSelectedBlocksMap",function(){return m}),n.d(e,"getSelectedBlocksList",function(){return a}),n.d(e,"getSelectedBlock",function(){return f}),n.d(e,"getBlockBeforeSelectedBlock",function(){return r}),n.d(e,"getAllBlocks",function(){return o}),n.d(e,"getSelectedBlocksType",function(){return u}),n.d(e,"removeSelectedBlocksStyle",function(){return c}),n.d(e,"getSelectionText",function(){return l}),n.d(e,"addLineBreakRemovingSelection",function(){return s}),n.d(e,"insertNewUnstyledBlock",function(){return g}),n.d(e,"clearEditorContent",function(){return d}),n.d(e,"setBlockData",function(){return S}),n.d(e,"getSelectedBlocksMetadata",function(){return p}),n.d(e,"blockRenderMap",function(){return v})}],o.c=u,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2);function o(t){if(u[t])return u[t].exports;var e=u[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var i,u});

/***/ }),

/***/ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-to-draftjs/dist/html-to-draftjs.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! immutable */ "immutable"), __webpack_require__(/*! draft-js */ "draft-js")) : undefined;
}(window, function (n, r) {
  return o = {}, i.m = a = [function (e, t) {
    e.exports = n;
  }, function (e, t) {
    e.exports = r;
  }, function (e, t, n) {
    e.exports = n(3);
  }, function (e, t, n) {
    "use strict";

    n.r(t);

    var v = n(1),
        u = n(0),
        s = function (e) {
      var t,
          n = null;
      return document.implementation && document.implementation.createHTMLDocument && ((t = document.implementation.createHTMLDocument("foo")).documentElement.innerHTML = e, n = t.getElementsByTagName("body")[0]), n;
    },
        x = function (e, t, n) {
      var r,
          i = e.textContent;
      return "" === i.trim() ? {
        chunk: (r = n, {
          text: " ",
          inlines: [new u.OrderedSet()],
          entities: [r],
          blocks: []
        })
      } : {
        chunk: {
          text: i,
          inlines: Array(i.length).fill(t),
          entities: Array(i.length).fill(n),
          blocks: []
        }
      };
    },
        M = function () {
      return {
        text: "\n",
        inlines: [new u.OrderedSet()],
        entities: new Array(1),
        blocks: []
      };
    },
        k = function () {
      return {
        text: "",
        inlines: [],
        entities: [],
        blocks: []
      };
    },
        E = function (e, t) {
      return {
        text: "",
        inlines: [],
        entities: [],
        blocks: [{
          type: e,
          depth: 0,
          data: t || new u.Map({})
        }]
      };
    },
        w = function (e, t, n) {
      return {
        text: "\r",
        inlines: [],
        entities: [],
        blocks: [{
          type: e,
          depth: Math.max(0, Math.min(4, t)),
          data: n || new u.Map({})
        }]
      };
    },
        T = function (e) {
      return {
        text: "\r ",
        inlines: [new u.OrderedSet()],
        entities: [e],
        blocks: [{
          type: "atomic",
          depth: 0,
          data: new u.Map({})
        }]
      };
    },
        L = function (e, t) {
      return {
        text: e.text + t.text,
        inlines: e.inlines.concat(t.inlines),
        entities: e.entities.concat(t.entities),
        blocks: e.blocks.concat(t.blocks)
      };
    },
        A = new u.Map({
      "header-one": {
        element: "h1"
      },
      "header-two": {
        element: "h2"
      },
      "header-three": {
        element: "h3"
      },
      "header-four": {
        element: "h4"
      },
      "header-five": {
        element: "h5"
      },
      "header-six": {
        element: "h6"
      },
      "unordered-list-item": {
        element: "li",
        wrapper: "ul"
      },
      "ordered-list-item": {
        element: "li",
        wrapper: "ol"
      },
      blockquote: {
        element: "blockquote"
      },
      code: {
        element: "pre"
      },
      atomic: {
        element: "figure"
      },
      unstyled: {
        element: "p",
        aliasedElements: ["div"]
      }
    });

    var O = {
      code: "CODE",
      del: "STRIKETHROUGH",
      em: "ITALIC",
      strong: "BOLD",
      ins: "UNDERLINE",
      sub: "SUBSCRIPT",
      sup: "SUPERSCRIPT"
    };

    function S(e) {
      return e.style.textAlign ? new u.Map({
        "text-align": e.style.textAlign
      }) : e.style.marginLeft ? new u.Map({
        "margin-left": e.style.marginLeft
      }) : void 0;
    }

    var _ = function (e) {
      var t = void 0;

      if (e instanceof HTMLAnchorElement) {
        var n = {};
        t = e.dataset && void 0 !== e.dataset.mention ? (n.url = e.href, n.text = e.innerHTML, n.value = e.dataset.value, v.Entity.__create("MENTION", "IMMUTABLE", n)) : (n.url = e.getAttribute && e.getAttribute("href") || e.href, n.title = e.innerHTML, n.targetOption = e.target, v.Entity.__create("LINK", "MUTABLE", n));
      }

      return t;
    };

    n.d(t, "default", function () {
      return r;
    });
    var d = " ",
        f = new RegExp("&nbsp;", "g"),
        j = !0;

    function I(e, t, n, r, i, a) {
      var o = e.nodeName.toLowerCase();

      if (a) {
        var l = a(o, e);

        if (l) {
          var c = v.Entity.__create(l.type, l.mutability, l.data || {});

          return {
            chunk: T(c)
          };
        }
      }

      if ("#text" === o && "\n" !== e.textContent) return x(e, t, i);
      if ("br" === o) return {
        chunk: M()
      };

      if ("img" === o && e instanceof HTMLImageElement) {
        var u = {};
        u.src = e.getAttribute && e.getAttribute("src") || e.src, u.alt = e.alt, u.height = e.style.height, u.width = e.style.width, e.style.float && (u.alignment = e.style.float);

        var s = v.Entity.__create("IMAGE", "MUTABLE", u);

        return {
          chunk: T(s)
        };
      }

      if ("video" === o && e instanceof HTMLVideoElement) {
        var d = {};
        d.src = e.getAttribute && e.getAttribute("src") || e.src, d.alt = e.alt, d.height = e.style.height, d.width = e.style.width, e.style.float && (d.alignment = e.style.float);

        var f = v.Entity.__create("VIDEO", "MUTABLE", d);

        return {
          chunk: T(f)
        };
      }

      if ("iframe" === o && e instanceof HTMLIFrameElement) {
        var m = {};
        m.src = e.getAttribute && e.getAttribute("src") || e.src, m.height = e.height, m.width = e.width;

        var p = v.Entity.__create("EMBEDDED_LINK", "MUTABLE", m);

        return {
          chunk: T(p)
        };
      }

      var h,
          y = function (t, n) {
        var e = A.filter(function (e) {
          return e.element === t && (!e.wrapper || e.wrapper === n) || e.wrapper === t || e.aliasedElements && -1 < e.aliasedElements.indexOf(t);
        }).keySeq().toSet().toArray();
        if (1 === e.length) return e[0];
      }(o, r);

      y && ("ul" === o || "ol" === o ? (r = o, n += 1) : ("unordered-list-item" !== y && "ordered-list-item" !== y && (r = "", n = -1), j ? (h = E(y, S(e)), j = !1) : h = w(y, n, S(e)))), h = h || k(), t = function (e, t, n) {
        var r,
            i = O[e];
        if (i) r = n.add(i).toOrderedSet();else if (t instanceof HTMLElement) {
          var c = t;
          r = (r = n).withMutations(function (e) {
            var t = c.style.color,
                n = c.style.backgroundColor,
                r = c.style.fontSize,
                i = c.style.fontFamily.replace(/^"|"$/g, ""),
                a = c.style.fontWeight,
                o = c.style.textDecoration,
                l = c.style.fontStyle;
            t && e.add("color-".concat(t.replace(/ /g, ""))), n && e.add("bgcolor-".concat(n.replace(/ /g, ""))), r && e.add("fontsize-".concat(r.replace(/px$/g, ""))), i && e.add("fontfamily-".concat(i)), "bold" === a && e.add(O.strong), "underline" === o && e.add(O.ins), "italic" === l && e.add(O.em);
          }).toOrderedSet();
        }
        return r;
      }(o, e, t);

      for (var b = e.firstChild; b;) {
        var g = I(b, t, n, r, _(b) || i, a).chunk;
        h = L(h, g), b = b.nextSibling;
      }

      return {
        chunk: h
      };
    }

    function r(e, t) {
      var n,
          r,
          i,
          a = (n = t, r = e.trim().replace(f, d), (i = s(r)) ? (j = !0, {
        chunk: I(i, new u.OrderedSet(), -1, "", void 0, n).chunk
      }) : null);

      if (a) {
        var o = a.chunk,
            l = new u.OrderedMap({});
        o.entities && o.entities.forEach(function (e) {
          e && (l = l.set(e, v.Entity.__get(e)));
        });
        var c = 0;
        return {
          contentBlocks: o.text.split("\r").map(function (e, t) {
            var n = c + e.length,
                r = o && o.inlines.slice(c, n),
                i = o && o.entities.slice(c, n),
                a = new u.List(r.map(function (e, t) {
              var n = {
                style: e,
                entity: null
              };
              return i[t] && (n.entity = i[t]), v.CharacterMetadata.create(n);
            }));
            return c = n, new v.ContentBlock({
              key: Object(v.genKey)(),
              type: o && o.blocks[t] && o.blocks[t].type || "unstyled",
              depth: o && o.blocks[t] && o.blocks[t].depth,
              data: o && o.blocks[t] && o.blocks[t].data || new u.Map({}),
              text: e,
              characterList: a
            });
          }),
          entityMap: l
        };
      }

      return null;
    }
  }], i.c = o, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
      return t[e];
    }.bind(null, r));
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 2);

  function i(e) {
    if (o[e]) return o[e].exports;
    var t = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return a[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports;
  }

  var a, o;
});

/***/ }),

/***/ "./node_modules/linkify-it/index.js":
/*!******************************************!*\
  !*** ./node_modules/linkify-it/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 ////////////////////////////////////////////////////////////////////////////////
// Helpers
// Merge objects
//

function assign(obj
/*from1, from2, from3, ...*/
) {
  var sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function (source) {
    if (!source) {
      return;
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });
  return obj;
}

function _class(obj) {
  return Object.prototype.toString.call(obj);
}

function isString(obj) {
  return _class(obj) === '[object String]';
}

function isObject(obj) {
  return _class(obj) === '[object Object]';
}

function isRegExp(obj) {
  return _class(obj) === '[object RegExp]';
}

function isFunction(obj) {
  return _class(obj) === '[object Function]';
}

function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
} ////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};

function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}

var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http = new RegExp('^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i');
      }

      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }

      return 0;
    }
  },
  'https:': 'http:',
  'ftp:': 'http:',
  '//': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http = new RegExp('^' + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' + self.re.src_port + self.re.src_host_terminator + self.re.src_path, 'i');
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') {
          return 0;
        }

        if (pos >= 3 && text[pos - 3] === '/') {
          return 0;
        }

        return tail.match(self.re.no_http)[0].length;
      }

      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto = new RegExp('^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i');
      }

      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }

      return 0;
    }
  }
};
/*eslint-disable max-len*/
// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)

var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]'; // DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead

var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');
/*eslint-enable max-len*/
////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }

    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
} // Schemas compiler. Build regexps.
//


function compile(self) {
  // Load & clone RE patterns.
  var re = self.re = __webpack_require__(/*! ./lib/re */ "./node_modules/linkify-it/lib/re.js")(self.__opts__); // Define dynamic patterns


  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }

  tlds.push(re.src_xn);
  re.src_tlds = tlds.join('|');

  function untpl(tpl) {
    return tpl.replace('%TLDS%', re.src_tlds);
  }

  re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), 'i'); //
  // Compile each schema
  //

  var aliases = [];
  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name]; // skip disabled methods

    if (val === null) {
      return;
    }

    var compiled = {
      validate: null,
      link: null
    };
    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  }); //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  }); //
  // Fake record for guessed links
  //

  self.__compiled__[''] = {
    validate: null,
    normalize: createNormalizer()
  }; //
  // Build schema condition
  //

  var slist = Object.keys(self.__compiled__).filter(function (name) {
    // Filter disabled & fake schemas
    return name.length > 0 && self.__compiled__[name];
  }).map(escapeRE).join('|'); // (?!_) cause 1.5x slowdown

  self.re.schema_test = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');
  self.re.pretest = RegExp('(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@', 'i'); //
  // Cleanup
  //

  resetScanCache(self);
}
/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/


function Match(self, shift) {
  var start = self.__index__,
      end = self.__last_index__,
      text = self.__text_cache__.slice(start, end);
  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/


  this.schema = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/

  this.index = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/

  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/

  this.raw = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/

  this.text = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/

  this.url = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}
/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/


function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__ = assign({}, defaultOptions, options); // Cache last tested result. Used to skip repeating steps on next `match` call.

  this.__index__ = -1;
  this.__last_index__ = -1; // Next scan position

  this.__schema__ = '';
  this.__text_cache__ = '';
  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/


LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/


LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};
/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/


LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__ = -1;

  if (!text.length) {
    return false;
  }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos; // try to scan for link with schema - that's the most simple rule

  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;

    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);

      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);

    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = '';
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');

    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {
        shift = me.index + me[1].length;
        next = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = 'mailto:';
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};
/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/


LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};
/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/


LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }

  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};
/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/


LinkifyIt.prototype.match = function match(text) {
  var shift = 0,
      result = []; // Try to take previous element from cache, if .test() called before

  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  } // Cut head if cache was used


  var tail = shift ? text.slice(shift) : text; // Scan string until end reached

  while (this.test(tail)) {
    result.push(createMatch(this, shift));
    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};
/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/


LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [list];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list).sort().filter(function (el, idx, arr) {
    return el !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/


LinkifyIt.prototype.normalize = function normalize(match) {
  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1
  if (!match.schema) {
    match.url = 'http://' + match.url;
  }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};
/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/


LinkifyIt.prototype.onCompile = function onCompile() {};

module.exports = LinkifyIt;

/***/ }),

/***/ "./node_modules/linkify-it/lib/re.js":
/*!*******************************************!*\
  !*** ./node_modules/linkify-it/lib/re.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (opts) {
  var re = {}; // Use direct extract instead of `regenerate` to reduse browserified size

  re.src_Any = __webpack_require__(/*! uc.micro/properties/Any/regex */ "./node_modules/uc.micro/properties/Any/regex.js").source;
  re.src_Cc = __webpack_require__(/*! uc.micro/categories/Cc/regex */ "./node_modules/uc.micro/categories/Cc/regex.js").source;
  re.src_Z = __webpack_require__(/*! uc.micro/categories/Z/regex */ "./node_modules/uc.micro/categories/Z/regex.js").source;
  re.src_P = __webpack_require__(/*! uc.micro/categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js").source; // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)

  re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join('|'); // \p{\Z\Cc} (white spaces + control)

  re.src_ZCc = [re.src_Z, re.src_Cc].join('|'); // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text

  var text_separators = '[><\uff5c]'; // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)

  re.src_pseudo_letter = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')'; // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 = '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'; // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.

  re.src_auth = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';
  re.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';
  re.src_host_terminator = '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';
  re.src_path = '(?:' + '[/?#]' + '(?:' + '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' + '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' + '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' + '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' + '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' + "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" + "\\'(?=" + re.src_pseudo_letter + '|[-]).|' + // allow `I'm_king` if no pair found
  '\\.{2,4}[a-zA-Z0-9%/]|' + // github has ... in commit range links,
  // google has .... in links (issue #66)
  // Restrict to
  // - english
  // - percent-encoded
  // - parts of file path
  // until more examples found.
  '\\.(?!' + re.src_ZCc + '|[.]).|' + (opts && opts['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
  : '\\-+|') + '\\,(?!' + re.src_ZCc + ').|' + // allow `,,,` in paths
  '\\!(?!' + re.src_ZCc + '|[!]).|' + '\\?(?!' + re.src_ZCc + '|[?]).' + ')+' + '|\\/' + ')?'; // Allow anything in markdown spec, forbid quote (") at the first position
  // because emails enclosed in quotes are far more common

  re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re.src_xn = 'xn--[a-z0-9\\-]{1,59}'; // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root = // Allow letters & digits (http://test1)
  '(?:' + re.src_xn + '|' + re.src_pseudo_letter + '{1,63}' + ')';
  re.src_domain = '(?:' + re.src_xn + '|' + '(?:' + re.src_pseudo_letter + ')' + '|' + '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' + ')';
  re.src_host = '(?:' + // Don't need IP check, because digits are already allowed in normal domain names
  //   src_ip4 +
  // '|' +
  '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain
  /*_root*/
  + ')' + ')';
  re.tpl_host_fuzzy = '(?:' + re.src_ip4 + '|' + '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' + ')';
  re.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';
  re.src_host_strict = re.src_host + re.src_host_terminator;
  re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
  re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
  re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
  re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator; ////////////////////////////////////////////////////////////////////////////////
  // Main rules
  // Rude test fuzzy links by host, for quick deny

  re.tpl_host_fuzzy_test = 'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';
  re.tpl_email_fuzzy = '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' + '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';
  re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' + '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';
  re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' + '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';
  return re;
};

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};

  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {
      /**/
    }
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function () {};

if (true) {
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data : {};
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);

        if (checkerResult == null) {
          return null;
        }

        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }

      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/uc.micro/categories/Cc/regex.js":
/*!******************************************************!*\
  !*** ./node_modules/uc.micro/categories/Cc/regex.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /[\0-\x1F\x7F-\x9F]/;

/***/ }),

/***/ "./node_modules/uc.micro/categories/P/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/P/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;

/***/ }),

/***/ "./node_modules/uc.micro/categories/Z/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/Z/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;

/***/ }),

/***/ "./node_modules/uc.micro/properties/Any/regex.js":
/*!*******************************************************!*\
  !*** ./node_modules/uc.micro/properties/Any/regex.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

/***/ }),

/***/ "./src/Editor/index.js":
/*!*****************************!*\
  !*** ./src/Editor/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_handler_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event-handler/modals */ "./src/event-handler/modals.js");
/* harmony import */ var _event_handler_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-handler/focus */ "./src/event-handler/focus.js");
/* harmony import */ var _event_handler_keyDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-handler/keyDown */ "./src/event-handler/keyDown.js");
/* harmony import */ var _event_handler_suggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event-handler/suggestions */ "./src/event-handler/suggestions.js");
/* harmony import */ var _utils_BlockStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/BlockStyle */ "./src/utils/BlockStyle.js");
/* harmony import */ var _utils_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/toolbar */ "./src/utils/toolbar.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_handlePaste__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/handlePaste */ "./src/utils/handlePaste.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../controls */ "./src/controls/index.js");
/* harmony import */ var _decorators_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../decorators/Link */ "./src/decorators/Link/index.js");
/* harmony import */ var _decorators_Mention__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../decorators/Mention */ "./src/decorators/Mention/index.js");
/* harmony import */ var _decorators_HashTag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../decorators/HashTag */ "./src/decorators/HashTag/index.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../renderer */ "./src/renderer/index.js");
/* harmony import */ var _config_defaultToolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config/defaultToolbar */ "./src/config/defaultToolbar.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../i18n */ "./src/i18n/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles.css */ "./src/Editor/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _css_Draft_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../css/Draft.css */ "./css/Draft.css");
/* harmony import */ var _css_Draft_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_css_Draft_css__WEBPACK_IMPORTED_MODULE_21__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
























var WysiwygEditor = /*#__PURE__*/function (_Component) {
  _inherits(WysiwygEditor, _Component);

  var _super = _createSuper(WysiwygEditor);

  function WysiwygEditor(_props) {
    var _this;

    _classCallCheck(this, WysiwygEditor);

    _this = _super.call(this, _props);

    _this.onEditorBlur = function () {
      _this.setState({
        editorFocused: false
      });
    };

    _this.onEditorFocus = function (event) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        editorFocused: true
      });

      var editFocused = _this.focusHandler.isEditorFocused();

      if (onFocus && editFocused) {
        onFocus(event);
      }
    };

    _this.onEditorMouseDown = function () {
      _this.focusHandler.onEditorMouseDown();
    };

    _this.keyBindingFn = function (event) {
      if (event.key === 'Tab') {
        var onTab = _this.props.onTab;

        if (!onTab || !onTab(event)) {
          var editorState = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["changeDepth"])(_this.state.editorState, event.shiftKey ? -1 : 1, 4);

          if (editorState && editorState !== _this.state.editorState) {
            _this.onChange(editorState);

            event.preventDefault();
          }
        }

        return null;
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        if (_event_handler_suggestions__WEBPACK_IMPORTED_MODULE_8__["default"].isOpen()) {
          event.preventDefault();
        }
      }

      return Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["getDefaultKeyBinding"])(event);
    };

    _this.onToolbarFocus = function (event) {
      var onFocus = _this.props.onFocus;

      if (onFocus && _this.focusHandler.isToolbarFocused()) {
        onFocus(event);
      }
    };

    _this.onWrapperBlur = function (event) {
      var onBlur = _this.props.onBlur;

      if (onBlur && _this.focusHandler.isEditorBlur(event)) {
        onBlur(event, _this.getEditorState());
      }
    };

    _this.onChange = function (editorState) {
      var _this$props = _this.props,
          readOnly = _this$props.readOnly,
          onEditorStateChange = _this$props.onEditorStateChange;

      if (!readOnly && !(Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getSelectedBlocksType"])(editorState) === 'atomic' && editorState.getSelection().isCollapsed)) {
        if (onEditorStateChange) {
          onEditorStateChange(editorState, _this.props.wrapperId);
        }

        if (!Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["hasProperty"])(_this.props, 'editorState')) {
          _this.setState({
            editorState: editorState
          }, _this.afterChange(editorState));
        } else {
          _this.afterChange(editorState);
        }
      }
    };

    _this.setWrapperReference = function (ref) {
      _this.wrapper = ref;
    };

    _this.setEditorReference = function (ref) {
      if (_this.props.editorRef) {
        _this.props.editorRef(ref);
      }

      _this.editor = ref;
    };

    _this.getCompositeDecorator = function (toolbar) {
      var decorators = [].concat(_toConsumableArray(_this.props.customDecorators), [Object(_decorators_Link__WEBPACK_IMPORTED_MODULE_14__["default"])({
        showOpenOptionOnHover: toolbar.link.showOpenOptionOnHover
      })]);

      if (_this.props.mention) {
        decorators.push.apply(decorators, _toConsumableArray(Object(_decorators_Mention__WEBPACK_IMPORTED_MODULE_15__["default"])(_objectSpread(_objectSpread({}, _this.props.mention), {}, {
          onChange: _this.onChange,
          getEditorState: _this.getEditorState,
          getSuggestions: _this.getSuggestions,
          getWrapperRef: _this.getWrapperRef,
          modalHandler: _this.modalHandler
        }))));
      }

      if (_this.props.hashtag) {
        decorators.push(Object(_decorators_HashTag__WEBPACK_IMPORTED_MODULE_16__["default"])(_this.props.hashtag));
      }

      return new draft_js__WEBPACK_IMPORTED_MODULE_2__["CompositeDecorator"](decorators);
    };

    _this.getWrapperRef = function () {
      return _this.wrapper;
    };

    _this.getEditorState = function () {
      return _this.state ? _this.state.editorState : null;
    };

    _this.getSuggestions = function () {
      return _this.props.mention && _this.props.mention.suggestions;
    };

    _this.afterChange = function (editorState) {
      setTimeout(function () {
        var _this$props2 = _this.props,
            onChange = _this$props2.onChange,
            onContentStateChange = _this$props2.onContentStateChange;

        if (onChange) {
          onChange(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent()));
        }

        if (onContentStateChange) {
          onContentStateChange(Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertToRaw"])(editorState.getCurrentContent()));
        }
      });
    };

    _this.isReadOnly = function () {
      return _this.props.readOnly;
    };

    _this.isImageAlignmentEnabled = function () {
      return _this.state.toolbar.image.alignmentEnabled;
    };

    _this.createEditorState = function (compositeDecorator) {
      var editorState;

      if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["hasProperty"])(_this.props, 'editorState')) {
        if (_this.props.editorState) {
          editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].set(_this.props.editorState, {
            decorator: compositeDecorator
          });
        }
      } else if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["hasProperty"])(_this.props, 'defaultEditorState')) {
        if (_this.props.defaultEditorState) {
          editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].set(_this.props.defaultEditorState, {
            decorator: compositeDecorator
          });
        }
      } else if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["hasProperty"])(_this.props, 'contentState')) {
        if (_this.props.contentState) {
          var contentState = Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertFromRaw"])(_this.props.contentState);
          editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createWithContent(contentState, compositeDecorator);
          editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].moveSelectionToEnd(editorState);
        }
      } else if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["hasProperty"])(_this.props, 'defaultContentState') || Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["hasProperty"])(_this.props, 'initialContentState')) {
        var _contentState = _this.props.defaultContentState || _this.props.initialContentState;

        if (_contentState) {
          _contentState = Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertFromRaw"])(_contentState);
          editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createWithContent(_contentState, compositeDecorator);
          editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].moveSelectionToEnd(editorState);
        }
      }

      if (!editorState) {
        editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty(compositeDecorator);
      }

      return editorState;
    };

    _this.filterEditorProps = function (props) {
      return Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["filter"])(props, ['onChange', 'onEditorStateChange', 'onContentStateChange', 'initialContentState', 'defaultContentState', 'contentState', 'editorState', 'defaultEditorState', 'locale', 'localization', 'toolbarOnFocus', 'toolbar', 'toolbarCustomButtons', 'toolbarClassName', 'editorClassName', 'toolbarHidden', 'wrapperClassName', 'toolbarStyle', 'editorStyle', 'wrapperStyle', 'uploadCallback', 'onFocus', 'onBlur', 'onTab', 'mention', 'hashtag', 'ariaLabel', 'customBlockRenderFunc', 'customDecorators', 'handlePastedText', 'customStyleMap']);
    };

    _this.getStyleMap = function (props) {
      return _objectSpread(_objectSpread({}, Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getCustomStyleMap"])()), props.customStyleMap);
    };

    _this.changeEditorState = function (contentState) {
      var newContentState = Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["convertFromRaw"])(contentState);
      var editorState = _this.state.editorState;
      editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, newContentState, 'insert-characters');
      editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].moveSelectionToEnd(editorState);
      return editorState;
    };

    _this.focusEditor = function () {
      setTimeout(function () {
        _this.editor.focus();
      });
    };

    _this.handleKeyCommand = function (command) {
      var _this$state = _this.state,
          editorState = _this$state.editorState,
          inline = _this$state.toolbar.inline;

      if (inline && inline.options.indexOf(command) >= 0) {
        var newState = draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].handleKeyCommand(editorState, command);

        if (newState) {
          _this.onChange(newState);

          return true;
        }
      }

      return false;
    };

    _this.handleReturn = function (event) {
      if (_event_handler_suggestions__WEBPACK_IMPORTED_MODULE_8__["default"].isOpen()) {
        return true;
      }

      var editorState = _this.state.editorState;
      var newEditorState = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["handleNewLine"])(editorState, event);

      if (newEditorState) {
        _this.onChange(newEditorState);

        return true;
      }

      return false;
    };

    _this.handlePastedTextFn = function (text, html) {
      var editorState = _this.state.editorState;
      var _this$props3 = _this.props,
          handlePastedTextProp = _this$props3.handlePastedText,
          stripPastedStyles = _this$props3.stripPastedStyles;

      if (handlePastedTextProp) {
        return handlePastedTextProp(text, html, editorState, _this.onChange);
      }

      if (!stripPastedStyles) {
        return Object(_utils_handlePaste__WEBPACK_IMPORTED_MODULE_12__["handlePastedText"])(text, html, editorState, _this.onChange);
      }

      return false;
    };

    _this.preventDefault = function (event) {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'LABEL' || event.target.tagName === 'TEXTAREA') {
        _this.focusHandler.onInputMouseDown();
      } else {
        event.preventDefault();
      }
    };

    var _toolbar = Object(_utils_toolbar__WEBPACK_IMPORTED_MODULE_10__["mergeRecursive"])(_config_defaultToolbar__WEBPACK_IMPORTED_MODULE_18__["default"], _props.toolbar);

    var wrapperId = _props.wrapperId ? _props.wrapperId : Math.floor(Math.random() * 10000);
    _this.wrapperId = "rdw-wrapper-".concat(wrapperId);
    _this.modalHandler = new _event_handler_modals__WEBPACK_IMPORTED_MODULE_5__["default"]();
    _this.focusHandler = new _event_handler_focus__WEBPACK_IMPORTED_MODULE_6__["default"]();
    _this.blockRendererFn = Object(_renderer__WEBPACK_IMPORTED_MODULE_17__["default"])({
      isReadOnly: _this.isReadOnly,
      isImageAlignmentEnabled: _this.isImageAlignmentEnabled,
      getEditorState: _this.getEditorState,
      onChange: _this.onChange
    }, _props.customBlockRenderFunc);
    _this.editorProps = _this.filterEditorProps(_props);
    _this.customStyleMap = _this.getStyleMap(_props);
    _this.compositeDecorator = _this.getCompositeDecorator(_toolbar);

    var _editorState = _this.createEditorState(_this.compositeDecorator);

    Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["extractInlineStyle"])(_editorState);
    _this.state = {
      editorState: _editorState,
      editorFocused: false,
      toolbar: _toolbar
    };
    return _this;
  }

  _createClass(WysiwygEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.modalHandler.init(this.wrapperId);
    } // todo: change decorators depending on properties recceived in componentWillReceiveProps.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps === this.props) return;
      var newState = {};
      var _this$props4 = this.props,
          editorState = _this$props4.editorState,
          contentState = _this$props4.contentState;

      if (!this.state.toolbar) {
        var toolbar = Object(_utils_toolbar__WEBPACK_IMPORTED_MODULE_10__["mergeRecursive"])(_config_defaultToolbar__WEBPACK_IMPORTED_MODULE_18__["default"], toolbar);
        newState.toolbar = toolbar;
      }

      if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["hasProperty"])(this.props, 'editorState') && editorState !== prevProps.editorState) {
        if (editorState) {
          newState.editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].set(editorState, {
            decorator: this.compositeDecorator
          });
        } else {
          newState.editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty(this.compositeDecorator);
        }
      } else if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_11__["hasProperty"])(this.props, 'contentState') && contentState !== prevProps.contentState) {
        if (contentState) {
          var newEditorState = this.changeEditorState(contentState);

          if (newEditorState) {
            newState.editorState = newEditorState;
          }
        } else {
          newState.editorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty(this.compositeDecorator);
        }
      }

      if (prevProps.editorState !== editorState || prevProps.contentState !== contentState) {
        Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["extractInlineStyle"])(newState.editorState);
      }

      if (Object.keys(newState).length) this.setState(newState);
      this.editorProps = this.filterEditorProps(this.props);
      this.customStyleMap = this.getStyleMap(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          editorState = _this$state2.editorState,
          editorFocused = _this$state2.editorFocused,
          toolbar = _this$state2.toolbar;
      var _this$props5 = this.props,
          locale = _this$props5.locale,
          _this$props5$localiza = _this$props5.localization,
          newLocale = _this$props5$localiza.locale,
          translations = _this$props5$localiza.translations,
          toolbarCustomButtons = _this$props5.toolbarCustomButtons,
          toolbarOnFocus = _this$props5.toolbarOnFocus,
          toolbarClassName = _this$props5.toolbarClassName,
          toolbarHidden = _this$props5.toolbarHidden,
          editorClassName = _this$props5.editorClassName,
          wrapperClassName = _this$props5.wrapperClassName,
          toolbarStyle = _this$props5.toolbarStyle,
          editorStyle = _this$props5.editorStyle,
          wrapperStyle = _this$props5.wrapperStyle,
          uploadCallback = _this$props5.uploadCallback,
          ariaLabel = _this$props5.ariaLabel;
      console.log(toolbar);
      var controlProps = {
        modalHandler: this.modalHandler,
        editorState: editorState,
        onChange: this.onChange,
        translations: _objectSpread(_objectSpread({}, _i18n__WEBPACK_IMPORTED_MODULE_19__["default"][locale || newLocale]), translations)
      };
      var toolbarShow = editorFocused || this.focusHandler.isInputFocused() || !toolbarOnFocus;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.wrapperId,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(wrapperClassName, 'rdw-editor-wrapper'),
        style: wrapperStyle,
        onClick: this.modalHandler.onEditorClick,
        onBlur: this.onWrapperBlur,
        "aria-label": "rdw-wrapper"
      }, !toolbarHidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('rdw-editor-toolbar', toolbarClassName),
        style: _objectSpread({
          visibility: toolbarShow ? 'visible' : 'hidden'
        }, toolbarStyle),
        onMouseDown: this.preventDefault,
        "aria-label": "rdw-toolbar",
        "aria-hidden": (!editorFocused && toolbarOnFocus).toString(),
        onFocus: this.onToolbarFocus
      }, toolbar.options.map(function (opt, index) {
        console.log("opt");
        console.log(opt);
        var Control = _controls__WEBPACK_IMPORTED_MODULE_13__["default"][opt];
        console.log("Control");
        console.log(Control);
        var config = toolbar[opt];
        console.log("config");
        console.log(config);

        if (opt === 'image' && uploadCallback) {
          config.uploadCallback = uploadCallback;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Control, _extends({
          key: index
        }, controlProps, {
          config: config
        }));
      }), toolbarCustomButtons && toolbarCustomButtons.map(function (button, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(button, _objectSpread({
          key: index
        }, controlProps));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.setWrapperReference,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(editorClassName, 'rdw-editor-main'),
        style: editorStyle,
        onClick: this.focusEditor,
        onFocus: this.onEditorFocus,
        onBlur: this.onEditorBlur,
        onKeyDown: _event_handler_keyDown__WEBPACK_IMPORTED_MODULE_7__["default"].onKeyDown,
        onMouseDown: this.onEditorMouseDown
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_2__["Editor"], _extends({
        ref: this.setEditorReference,
        keyBindingFn: this.keyBindingFn,
        editorState: editorState,
        onChange: this.onChange,
        blockStyleFn: _utils_BlockStyle__WEBPACK_IMPORTED_MODULE_9__["default"],
        customStyleMap: this.getStyleMap(this.props),
        handleReturn: this.handleReturn,
        handlePastedText: this.handlePastedTextFn,
        blockRendererFn: this.blockRendererFn,
        handleKeyCommand: this.handleKeyCommand,
        ariaLabel: ariaLabel || 'rdw-editor',
        blockRenderMap: draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["blockRenderMap"]
      }, this.editorProps))));
    }
  }]);

  return WysiwygEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WysiwygEditor.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onEditorStateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onContentStateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // initialContentState is deprecated
  initialContentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  defaultContentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  contentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  defaultEditorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toolbarOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  spellCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // eslint-disable-line react/no-unused-prop-types
  stripPastedStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // eslint-disable-line react/no-unused-prop-types
  toolbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toolbarCustomButtons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  toolbarClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toolbarHidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  localization: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  editorClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toolbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  editorStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  uploadCallback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  mention: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  hashtag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  textAlignment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // eslint-disable-line react/no-unused-prop-types
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  ariaOwneeID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  ariaActiveDescendantID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  ariaAutoComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  ariaExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  ariaHasPopup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  customBlockRenderFunc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  wrapperId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  customDecorators: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  editorRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handlePastedText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
WysiwygEditor.defaultProps = {
  toolbarOnFocus: false,
  toolbarHidden: false,
  stripPastedStyles: false,
  localization: {
    locale: 'en',
    translations: {}
  },
  customDecorators: []
};
/* harmony default export */ __webpack_exports__["default"] = (WysiwygEditor); // todo: evaluate draftjs-utils to move some methods here
// todo: move color near font-family

/***/ }),

/***/ "./src/Editor/styles.css":
/*!*******************************!*\
  !*** ./src/Editor/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Dropdown/Dropdown/index.js":
/*!***************************************************!*\
  !*** ./src/components/Dropdown/Dropdown/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/components/Dropdown/Dropdown/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/common */ "./src/utils/common.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      highlighted: -1
    };

    _this.onChange = function (value) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
      }

      _this.toggleExpansion();
    };

    _this.setHighlighted = function (highlighted) {
      _this.setState({
        highlighted: highlighted
      });
    };

    _this.toggleExpansion = function () {
      var _this$props = _this.props,
          doExpand = _this$props.doExpand,
          doCollapse = _this$props.doCollapse,
          expanded = _this$props.expanded;

      if (expanded) {
        doCollapse();
      } else {
        doExpand();
      }
    };

    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var expanded = this.props.expanded;

      if (prevProps.expanded && !expanded) {
        this.setState({
          highlighted: -1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          expanded = _this$props2.expanded,
          children = _this$props2.children,
          className = _this$props2.className,
          optionWrapperClassName = _this$props2.optionWrapperClassName,
          ariaLabel = _this$props2.ariaLabel,
          onExpandEvent = _this$props2.onExpandEvent,
          title = _this$props2.title;
      var highlighted = this.state.highlighted;
      var options = children.slice(1, children.length);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-dropdown-wrapper', className),
        "aria-expanded": expanded,
        "aria-label": ariaLabel || 'rdw-dropdown'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "rdw-dropdown-selectedtext",
        onClick: onExpandEvent,
        title: title
      }, children[0], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          'rdw-dropdown-carettoclose': expanded,
          'rdw-dropdown-carettoopen': !expanded
        })
      })), expanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-dropdown-optionwrapper', optionWrapperClassName),
        onClick: _utils_common__WEBPACK_IMPORTED_MODULE_4__["stopPropagation"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(options, function (option, index) {
        var temp = option && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(option, {
          onSelect: _this2.onChange,
          highlighted: highlighted === index,
          setHighlighted: _this2.setHighlighted,
          index: index
        });
        return temp;
      })) : undefined);
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Dropdown.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  optionWrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};


/***/ }),

/***/ "./src/components/Dropdown/Dropdown/styles.css":
/*!*****************************************************!*\
  !*** ./src/components/Dropdown/Dropdown/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Dropdown/DropdownOption/index.js":
/*!*********************************************************!*\
  !*** ./src/components/Dropdown/DropdownOption/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropDownOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/components/Dropdown/DropdownOption/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var DropDownOption = /*#__PURE__*/function (_Component) {
  _inherits(DropDownOption, _Component);

  var _super = _createSuper(DropDownOption);

  function DropDownOption() {
    var _this;

    _classCallCheck(this, DropDownOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onClick = function (event) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          onClick = _this$props.onClick,
          value = _this$props.value,
          disabled = _this$props.disabled;

      if (!disabled) {
        if (onSelect) {
          onSelect(value);
        }

        if (onClick) {
          event.stopPropagation();
          onClick(value);
        }
      }
    };

    _this.setHighlighted = function () {
      var _this$props2 = _this.props,
          setHighlighted = _this$props2.setHighlighted,
          index = _this$props2.index;
      setHighlighted(index);
    };

    _this.resetHighlighted = function () {
      var setHighlighted = _this.props.setHighlighted;
      setHighlighted(-1);
    };

    return _this;
  }

  _createClass(DropDownOption, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          children = _this$props3.children,
          active = _this$props3.active,
          disabled = _this$props3.disabled,
          highlighted = _this$props3.highlighted,
          className = _this$props3.className,
          activeClassName = _this$props3.activeClassName,
          disabledClassName = _this$props3.disabledClassName,
          highlightedClassName = _this$props3.highlightedClassName,
          title = _this$props3.title;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-dropdownoption-default', className, (_classNames = {}, _defineProperty(_classNames, "rdw-dropdownoption-active ".concat(activeClassName), active), _defineProperty(_classNames, "rdw-dropdownoption-highlighted ".concat(highlightedClassName), highlighted), _defineProperty(_classNames, "rdw-dropdownoption-disabled ".concat(disabledClassName), disabled), _classNames)),
        onMouseEnter: this.setHighlighted,
        onMouseLeave: this.resetHighlighted,
        onClick: this.onClick,
        title: title
      }, children);
    }
  }]);

  return DropDownOption;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // todo: review classname use above.


DropDownOption.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setHighlighted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  highlighted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabledClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  highlightedClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
DropDownOption.defaultProps = {
  activeClassName: '',
  disabledClassName: '',
  highlightedClassName: ''
};


/***/ }),

/***/ "./src/components/Dropdown/DropdownOption/styles.css":
/*!***********************************************************!*\
  !*** ./src/components/Dropdown/DropdownOption/styles.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Dropdown/index.js":
/*!******************************************!*\
  !*** ./src/components/Dropdown/index.js ***!
  \******************************************/
/*! exports provided: Dropdown, DropdownOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "./src/components/Dropdown/Dropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DropdownOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownOption */ "./src/components/Dropdown/DropdownOption/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownOption", function() { return _DropdownOption__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/Option/index.js":
/*!****************************************!*\
  !*** ./src/components/Option/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Option; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/components/Option/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Option = /*#__PURE__*/function (_Component) {
  _inherits(Option, _Component);

  var _super = _createSuper(Option);

  function Option() {
    var _this;

    _classCallCheck(this, Option);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onClick = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          value = _this$props.value;

      if (!disabled) {
        onClick(value);
      }
    };

    return _this;
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          activeClassName = _this$props2.activeClassName,
          active = _this$props2.active,
          disabled = _this$props2.disabled,
          title = _this$props2.title;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-option-wrapper', className, (_classNames = {}, _defineProperty(_classNames, "rdw-option-active ".concat(activeClassName), active), _defineProperty(_classNames, 'rdw-option-disabled', disabled), _classNames)),
        onClick: this.onClick,
        "aria-selected": active,
        title: title
      }, children);
    }
  }]);

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Option.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Option.defaultProps = {
  activeClassName: ''
};


/***/ }),

/***/ "./src/components/Option/styles.css":
/*!******************************************!*\
  !*** ./src/components/Option/styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Spinner/index.js":
/*!*****************************************!*\
  !*** ./src/components/Spinner/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/components/Spinner/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rdw-spinner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rdw-bounce1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rdw-bounce2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rdw-bounce3"
  }));
});

/***/ }),

/***/ "./src/components/Spinner/styles.css":
/*!*******************************************!*\
  !*** ./src/components/Spinner/styles.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/config/defaultToolbar.js":
/*!**************************************!*\
  !*** ./src/config/defaultToolbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_bold_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/bold.svg */ "./images/bold.svg");
/* harmony import */ var _images_italic_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/italic.svg */ "./images/italic.svg");
/* harmony import */ var _images_underline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/underline.svg */ "./images/underline.svg");
/* harmony import */ var _images_strikethrough_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/strikethrough.svg */ "./images/strikethrough.svg");
/* harmony import */ var _images_monospace_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/monospace.svg */ "./images/monospace.svg");
/* harmony import */ var _images_font_size_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/font-size.svg */ "./images/font-size.svg");
/* harmony import */ var _images_indent_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/indent.svg */ "./images/indent.svg");
/* harmony import */ var _images_outdent_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/outdent.svg */ "./images/outdent.svg");
/* harmony import */ var _images_list_ordered_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/list-ordered.svg */ "./images/list-ordered.svg");
/* harmony import */ var _images_list_unordered_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/list-unordered.svg */ "./images/list-unordered.svg");
/* harmony import */ var _images_align_left_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/align-left.svg */ "./images/align-left.svg");
/* harmony import */ var _images_align_center_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/align-center.svg */ "./images/align-center.svg");
/* harmony import */ var _images_align_right_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/align-right.svg */ "./images/align-right.svg");
/* harmony import */ var _images_align_justify_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/align-justify.svg */ "./images/align-justify.svg");
/* harmony import */ var _images_color_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/color.svg */ "./images/color.svg");
/* harmony import */ var _images_eraser_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/eraser.svg */ "./images/eraser.svg");
/* harmony import */ var _images_link_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/link.svg */ "./images/link.svg");
/* harmony import */ var _images_unlink_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../images/unlink.svg */ "./images/unlink.svg");
/* harmony import */ var _images_emoji_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../images/emoji.svg */ "./images/emoji.svg");
/* harmony import */ var _images_embedded_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../images/embedded.svg */ "./images/embedded.svg");
/* harmony import */ var _images_image_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/image.svg */ "./images/image.svg");
/* harmony import */ var _images_undo_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../images/undo.svg */ "./images/undo.svg");
/* harmony import */ var _images_redo_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../images/redo.svg */ "./images/redo.svg");
/* harmony import */ var _images_subscript_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../images/subscript.svg */ "./images/subscript.svg");
/* harmony import */ var _images_superscript_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../images/superscript.svg */ "./images/superscript.svg");
/* harmony import */ var _images_textColor_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../images/textColor.svg */ "./images/textColor.svg");


























/**
* This is default toolbar configuration,
* whatever user passes in toolbar property is deeply merged with this to over-ride defaults.
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "colorPicker", "textColorPicker", "link", "embedded", "emoji", "image", "remove", "history"],
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["bold", "italic", "underline", "strikethrough", "monospace", "superscript", "subscript"],
    bold: {
      icon: _images_bold_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
      className: undefined,
      title: undefined
    },
    italic: {
      icon: _images_italic_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
      className: undefined,
      title: undefined
    },
    underline: {
      icon: _images_underline_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      className: undefined,
      title: undefined
    },
    strikethrough: {
      icon: _images_strikethrough_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
      className: undefined,
      title: undefined
    },
    monospace: {
      icon: _images_monospace_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
      className: undefined,
      title: undefined
    },
    superscript: {
      icon: _images_superscript_svg__WEBPACK_IMPORTED_MODULE_24__["default"],
      className: undefined,
      title: undefined
    },
    subscript: {
      icon: _images_subscript_svg__WEBPACK_IMPORTED_MODULE_23__["default"],
      className: undefined,
      title: undefined
    }
  },
  blockType: {
    inDropdown: true,
    options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6", "Blockquote", "Code"],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: undefined
  },
  fontSize: {
    icon: _images_font_size_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: undefined
  },
  fontFamily: {
    options: ["Arial", "Georgia", "Impact", "Tahoma", "Times New Roman", "Verdana"],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: undefined
  },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["unordered", "ordered", "indent", "outdent"],
    unordered: {
      icon: _images_list_unordered_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
      className: undefined,
      title: undefined
    },
    ordered: {
      icon: _images_list_ordered_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
      className: undefined,
      title: undefined
    },
    indent: {
      icon: _images_indent_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
      className: undefined,
      title: undefined
    },
    outdent: {
      icon: _images_outdent_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
      className: undefined,
      title: undefined
    },
    title: undefined
  },
  textAlign: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["left", "center", "right", "justify"],
    left: {
      icon: _images_align_left_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
      className: undefined,
      title: undefined
    },
    center: {
      icon: _images_align_center_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
      className: undefined,
      title: undefined
    },
    right: {
      icon: _images_align_right_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
      className: undefined,
      title: undefined
    },
    justify: {
      icon: _images_align_justify_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
      className: undefined,
      title: undefined
    },
    title: undefined
  },
  colorPicker: {
    icon: _images_color_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    colors: ["rgb(97,189,109)", "rgb(26,188,156)", "rgb(84,172,210)", "rgb(44,130,201)", "rgb(147,101,184)", "rgb(71,85,119)", "rgb(204,204,204)", "rgb(65,168,95)", "rgb(0,168,133)", "rgb(61,142,185)", "rgb(41,105,176)", "rgb(85,57,130)", "rgb(40,50,78)", "rgb(0,0,0)", "rgb(247,218,100)", "rgb(251,160,38)", "rgb(235,107,86)", "rgb(226,80,65)", "rgb(163,143,132)", "rgb(239,239,239)", "rgb(255,255,255)", "rgb(250,197,28)", "rgb(243,121,52)", "rgb(209,72,65)", "rgb(184,49,47)", "rgb(124,112,107)", "rgb(209,213,216)"],
    title: undefined
  },
  textColorPicker: {
    icon: _images_textColor_svg__WEBPACK_IMPORTED_MODULE_25__["default"],
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    colors: ["rgb(97,189,109)", "rgb(26,188,156)", "rgb(84,172,210)", "rgb(44,130,201)", "rgb(147,101,184)", "rgb(71,85,119)", "rgb(204,204,204)", "rgb(65,168,95)", "rgb(0,168,133)", "rgb(61,142,185)", "rgb(41,105,176)", "rgb(85,57,130)", "rgb(40,50,78)", "rgb(0,0,0)", "rgb(247,218,100)", "rgb(251,160,38)", "rgb(235,107,86)", "rgb(226,80,65)", "rgb(163,143,132)", "rgb(239,239,239)", "rgb(255,255,255)", "rgb(250,197,28)", "rgb(243,121,52)", "rgb(209,72,65)", "rgb(184,49,47)", "rgb(124,112,107)", "rgb(209,213,216)"],
    title: undefined
  },
  link: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    dropdownClassName: undefined,
    showOpenOptionOnHover: true,
    defaultTargetOption: "_self",
    options: ["link", "unlink"],
    link: {
      icon: _images_link_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
      className: undefined,
      title: undefined
    },
    unlink: {
      icon: _images_unlink_svg__WEBPACK_IMPORTED_MODULE_17__["default"],
      className: undefined,
      title: undefined
    },
    linkCallback: undefined
  },
  emoji: {
    icon: _images_emoji_svg__WEBPACK_IMPORTED_MODULE_18__["default"],
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    emojis: ["😀", "😁", "😂", "😃", "😉", "😋", "😎", "😍", "😗", "🤗", "🤔", "😣", "😫", "😴", "😌", "🤓", "😛", "😜", "😠", "😇", "😷", "😈", "👻", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "🙈", "🙉", "🙊", "👼", "👮", "🕵", "💂", "👳", "🎅", "👸", "👰", "👲", "🙍", "🙇", "🚶", "🏃", "💃", "⛷", "🏂", "🏌", "🏄", "🚣", "🏊", "⛹", "🏋", "🚴", "👫", "💪", "👈", "👉", "👆", "🖕", "👇", "🖖", "🤘", "🖐", "👌", "👍", "👎", "✊", "👊", "👏", "🙌", "🙏", "🐵", "🐶", "🐇", "🐥", "🐸", "🐌", "🐛", "🐜", "🐝", "🍉", "🍄", "🍔", "🍤", "🍨", "🍪", "🎂", "🍰", "🍾", "🍷", "🍸", "🍺", "🌍", "🚑", "⏰", "🌙", "🌝", "🌞", "⭐", "🌟", "🌠", "🌨", "🌩", "⛄", "🔥", "🎄", "🎈", "🎉", "🎊", "🎁", "🎗", "🏀", "🏈", "🎲", "🔇", "🔈", "📣", "🔔", "🎵", "🎷", "💰", "🖊", "📅", "✅", "❎", "💯"],
    title: undefined
  },
  embedded: {
    icon: _images_embedded_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    embedCallback: undefined,
    defaultSize: {
      height: "auto",
      width: "auto"
    },
    title: undefined
  },
  image: {
    icon: _images_image_svg__WEBPACK_IMPORTED_MODULE_20__["default"],
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    previewImage: false,
    alignmentEnabled: true,
    uploadCallback: undefined,
    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
    alt: {
      present: false,
      mandatory: false
    },
    defaultSize: {
      height: "auto",
      width: "auto"
    },
    title: undefined
  },
  remove: {
    icon: _images_eraser_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
    className: undefined,
    component: undefined,
    title: undefined
  },
  history: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["undo", "redo"],
    undo: {
      icon: _images_undo_svg__WEBPACK_IMPORTED_MODULE_21__["default"],
      className: undefined,
      title: undefined
    },
    redo: {
      icon: _images_redo_svg__WEBPACK_IMPORTED_MODULE_22__["default"],
      className: undefined,
      title: undefined
    },
    title: undefined
  }
});
/**
 * - add option property to color-picker, emoji.
 */

/***/ }),

/***/ "./src/controls/BlockType/Component/index.js":
/*!***************************************************!*\
  !*** ./src/controls/BlockType/Component/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/controls/BlockType/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent(props) {
    var _this;

    _classCallCheck(this, LayoutComponent);

    _this = _super.call(this, props);

    _this.getBlockTypes = function (translations) {
      return [{
        label: 'Normal',
        displayName: translations['components.controls.blocktype.normal']
      }, {
        label: 'H1',
        displayName: translations['components.controls.blocktype.h1']
      }, {
        label: 'H2',
        displayName: translations['components.controls.blocktype.h2']
      }, {
        label: 'H3',
        displayName: translations['components.controls.blocktype.h3']
      }, {
        label: 'H4',
        displayName: translations['components.controls.blocktype.h4']
      }, {
        label: 'H5',
        displayName: translations['components.controls.blocktype.h5']
      }, {
        label: 'H6',
        displayName: translations['components.controls.blocktype.h6']
      }, {
        label: 'Blockquote',
        displayName: translations['components.controls.blocktype.blockquote']
      }, {
        label: 'Code',
        displayName: translations['components.controls.blocktype.code']
      }];
    };

    _this.state = {
      blockTypes: _this.getBlockTypes(props.translations)
    };
    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var translations = this.props.translations;

      if (translations !== prevProps.translations) {
        this.setState({
          blockTypes: this.getBlockTypes(translations)
        });
      }
    }
  }, {
    key: "renderFlat",
    value: function renderFlat(blocks) {
      var _this$props = this.props,
          className = _this$props.config.className,
          onChange = _this$props.onChange,
          blockType = _this$props.currentState.blockType;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-inline-wrapper', className)
      }, blocks.map(function (block, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: index,
          value: block.label,
          active: blockType === block.label,
          onClick: onChange
        }, block.displayName);
      }));
    }
  }, {
    key: "renderInDropdown",
    value: function renderInDropdown(blocks) {
      var _this$props2 = this.props,
          _this$props2$config = _this$props2.config,
          className = _this$props2$config.className,
          dropdownClassName = _this$props2$config.dropdownClassName,
          title = _this$props2$config.title,
          blockType = _this$props2.currentState.blockType,
          expanded = _this$props2.expanded,
          doExpand = _this$props2.doExpand,
          onExpandEvent = _this$props2.onExpandEvent,
          doCollapse = _this$props2.doCollapse,
          onChange = _this$props2.onChange,
          translations = _this$props2.translations;
      var blockTypes = this.state.blockTypes;
      var currentBlockData = blockTypes.filter(function (blk) {
        return blk.label === blockType;
      });
      var currentLabel = currentBlockData && currentBlockData[0] && currentBlockData[0].displayName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-block-wrapper",
        "aria-label": "rdw-block-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-block-dropdown', className),
        optionWrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dropdownClassName),
        onChange: onChange,
        expanded: expanded,
        doExpand: doExpand,
        doCollapse: doCollapse,
        onExpandEvent: onExpandEvent,
        title: title || translations['components.controls.blocktype.blocktype']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, currentLabel || translations['components.controls.blocktype.blocktype']), blocks.map(function (block, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOption"], {
          active: blockType === block.label,
          value: block.label,
          key: index
        }, block.displayName);
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var config = this.props.config;
      var inDropdown = config.inDropdown;
      var blockTypes = this.state.blockTypes;
      var blocks = blockTypes.filter(function (_ref) {
        var label = _ref.label;
        return config.options.indexOf(label) > -1;
      });
      return inDropdown ? this.renderInDropdown(blocks) : this.renderFlat(blocks);
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutComponent);

/***/ }),

/***/ "./src/controls/BlockType/Component/styles.css":
/*!*****************************************************!*\
  !*** ./src/controls/BlockType/Component/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/BlockType/index.js":
/*!*****************************************!*\
  !*** ./src/controls/BlockType/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ "./src/controls/BlockType/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var BlockType = /*#__PURE__*/function (_Component) {
  _inherits(BlockType, _Component);

  var _super = _createSuper(BlockType);

  function BlockType(props) {
    var _this;

    _classCallCheck(this, BlockType);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.blocksTypes = [{
      label: 'Normal',
      style: 'unstyled'
    }, {
      label: 'H1',
      style: 'header-one'
    }, {
      label: 'H2',
      style: 'header-two'
    }, {
      label: 'H3',
      style: 'header-three'
    }, {
      label: 'H4',
      style: 'header-four'
    }, {
      label: 'H5',
      style: 'header-five'
    }, {
      label: 'H6',
      style: 'header-six'
    }, {
      label: 'Blockquote',
      style: 'blockquote'
    }, {
      label: 'Code',
      style: 'code'
    }];

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.toggleBlockType = function (blockType) {
      var blockTypeValue = _this.blocksTypes.find(function (bt) {
        return bt.label === blockType;
      }).style;

      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleBlockType(editorState, blockTypeValue);

      if (newState) {
        onChange(newState);
      }
    };

    var _editorState = props.editorState,
        modalHandler = props.modalHandler;
    _this.state = {
      expanded: false,
      currentBlockType: _editorState ? Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectedBlocksType"])(_editorState) : 'unstyled'
    };
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(BlockType, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && editorState !== prevProps.editorState) {
        this.setState({
          currentBlockType: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectedBlocksType"])(editorState)
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var _this$state = this.state,
          expanded = _this$state.expanded,
          currentBlockType = _this$state.currentBlockType;
      var BlockTypeComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_4__["default"];
      var blockType = this.blocksTypes.find(function (bt) {
        return bt.style === currentBlockType;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockTypeComponent, {
        config: config,
        translations: translations,
        currentState: {
          blockType: blockType && blockType.label
        },
        onChange: this.toggleBlockType,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return BlockType;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BlockType.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (BlockType);

/***/ }),

/***/ "./src/controls/ColorPicker/Component/index.js":
/*!*****************************************************!*\
  !*** ./src/controls/ColorPicker/Component/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/controls/ColorPicker/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      currentStyle: 'color'
    };

    _this.onChange = function (color) {
      var onChange = _this.props.onChange;
      var currentStyle = _this.state.currentStyle;
      onChange(currentStyle, color);
    };

    _this.setCurrentStyleColor = function () {
      _this.setState({
        currentStyle: 'color'
      });
    };

    _this.setCurrentStyleBgcolor = function () {
      _this.setState({
        currentStyle: 'bgcolor'
      });
    };

    _this.renderModal = function () {
      var _this$props = _this.props,
          _this$props$config = _this$props.config,
          popupClassName = _this$props$config.popupClassName,
          colors = _this$props$config.colors,
          _this$props$currentSt = _this$props.currentState,
          color = _this$props$currentSt.color,
          bgColor = _this$props$currentSt.bgColor,
          translations = _this$props.translations;
      var currentStyle = _this.state.currentStyle;
      var currentSelectedColor = currentStyle === 'color' ? color : bgColor;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-colorpicker-modal', popupClassName),
        onClick: _utils_common__WEBPACK_IMPORTED_MODULE_3__["stopPropagation"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-colorpicker-modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-colorpicker-modal-style-label', {
          'rdw-colorpicker-modal-style-label-active': currentStyle === 'color'
        }),
        onClick: _this.setCurrentStyleColor
      }, translations['components.controls.colorpicker.text']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-colorpicker-modal-style-label', {
          'rdw-colorpicker-modal-style-label-active': currentStyle === 'bgcolor'
        }),
        onClick: _this.setCurrentStyleBgcolor
      }, translations['components.controls.colorpicker.background'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-colorpicker-modal-options"
      }, colors.map(function (c, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: c,
          key: index,
          className: "rdw-colorpicker-option",
          activeClassName: "rdw-colorpicker-option-active",
          active: currentSelectedColor === c,
          onClick: _this.onChange
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            backgroundColor: c
          },
          className: "rdw-colorpicker-cube"
        }));
      })));
    };

    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var expanded = this.props.expanded;

      if (expanded && !prevProps.expanded) {
        this.setState({
          currentStyle: 'color'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$config = _this$props2.config,
          icon = _this$props2$config.icon,
          className = _this$props2$config.className,
          title = _this$props2$config.title,
          expanded = _this$props2.expanded,
          onExpandEvent = _this$props2.onExpandEvent,
          translations = _this$props2.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-colorpicker-wrapper",
        "aria-haspopup": "true",
        "aria-expanded": expanded,
        "aria-label": "rdw-color-picker",
        title: title || translations['components.controls.colorpicker.colorpicker']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: onExpandEvent,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: icon,
        alt: ""
      })), expanded ? this.renderModal() : undefined);
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutComponent);

/***/ }),

/***/ "./src/controls/ColorPicker/Component/styles.css":
/*!*******************************************************!*\
  !*** ./src/controls/ColorPicker/Component/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/ColorPicker/index.js":
/*!*******************************************!*\
  !*** ./src/controls/ColorPicker/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/ColorPicker/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ColorPicker = /*#__PURE__*/function (_Component) {
  _inherits(ColorPicker, _Component);

  var _super = _createSuper(ColorPicker);

  function ColorPicker(props) {
    var _this;

    _classCallCheck(this, ColorPicker);

    _this = _super.call(this, props);
    _this.state = {
      expanded: false,
      currentColor: undefined,
      currentBgColor: undefined
    };

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.toggleColor = function (style, color) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var newState = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["toggleCustomInlineStyle"])(editorState, style, color);

      if (newState) {
        onChange(newState);
      }

      _this.doCollapse();
    };

    var _editorState = props.editorState,
        modalHandler = props.modalHandler;
    var state = {
      expanded: false,
      currentColor: undefined,
      currentBgColor: undefined
    };

    if (_editorState) {
      state.currentColor = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(_editorState, ['COLOR']).COLOR;
      state.currentBgColor = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(_editorState, ['BGCOLOR']).BGCOLOR;
    }

    _this.state = state;
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(ColorPicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && editorState !== prevProps.editorState) {
        this.setState({
          currentColor: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(editorState, ['COLOR']).COLOR,
          currentBgColor: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(editorState, ['BGCOLOR']).BGCOLOR
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var _this$state = this.state,
          currentColor = _this$state.currentColor,
          currentBgColor = _this$state.currentBgColor,
          expanded = _this$state.expanded;
      var ColorPickerComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      var color = currentColor && currentColor.substring(6);
      var bgColor = currentBgColor && currentBgColor.substring(8);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPickerComponent, {
        config: config,
        translations: translations,
        onChange: this.toggleColor,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        currentState: {
          color: color,
          bgColor: bgColor
        }
      });
    }
  }]);

  return ColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ColorPicker.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./src/controls/Embedded/Component/index.js":
/*!**************************************************!*\
  !*** ./src/controls/Embedded/Component/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/controls/Embedded/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      embeddedLink: '',
      height: _this.props.config.defaultSize.height,
      width: _this.props.config.defaultSize.width
    };

    _this.onChange = function () {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          embeddedLink = _this$state.embeddedLink,
          height = _this$state.height,
          width = _this$state.width;
      onChange(embeddedLink, height, width);
    };

    _this.updateValue = function (event) {
      _this.setState(_defineProperty({}, "".concat(event.target.name), event.target.value));
    };

    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          expanded = _this$props.expanded,
          config = _this$props.config;

      if (!expanded && prevProps.expanded) {
        var _config$defaultSize = config.defaultSize,
            height = _config$defaultSize.height,
            width = _config$defaultSize.width;
        this.setState({
          embeddedLink: '',
          height: height,
          width: width
        });
      }
    }
  }, {
    key: "rendeEmbeddedLinkModal",
    value: function rendeEmbeddedLinkModal() {
      var _this$state2 = this.state,
          embeddedLink = _this$state2.embeddedLink,
          height = _this$state2.height,
          width = _this$state2.width;
      var _this$props2 = this.props,
          popupClassName = _this$props2.config.popupClassName,
          doCollapse = _this$props2.doCollapse,
          translations = _this$props2.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-embedded-modal', popupClassName),
        onClick: _utils_common__WEBPACK_IMPORTED_MODULE_3__["stopPropagation"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-embedded-modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-embedded-modal-header-option"
      }, translations['components.controls.embedded.embeddedlink'], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-embedded-modal-header-label"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-embedded-modal-link-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-embedded-modal-link-input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "rdw-embedded-modal-link-input",
        placeholder: translations['components.controls.embedded.enterlink'],
        onChange: this.updateValue,
        onBlur: this.updateValue,
        value: embeddedLink,
        name: "embeddedLink"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-mandatory-sign"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-embedded-modal-size"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.updateValue,
        onBlur: this.updateValue,
        value: height,
        name: "height",
        className: "rdw-embedded-modal-size-input",
        placeholder: "Height"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-mandatory-sign"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.updateValue,
        onBlur: this.updateValue,
        value: width,
        name: "width",
        className: "rdw-embedded-modal-size-input",
        placeholder: "Width"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-mandatory-sign"
      }, "*")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-embedded-modal-btn-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "rdw-embedded-modal-btn",
        onClick: this.onChange,
        disabled: !embeddedLink || !height || !width
      }, translations['generic.add']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "rdw-embedded-modal-btn",
        onClick: doCollapse
      }, translations['generic.cancel'])));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          _this$props3$config = _this$props3.config,
          icon = _this$props3$config.icon,
          className = _this$props3$config.className,
          title = _this$props3$config.title,
          expanded = _this$props3.expanded,
          onExpandEvent = _this$props3.onExpandEvent,
          translations = _this$props3.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-embedded-wrapper",
        "aria-haspopup": "true",
        "aria-expanded": expanded,
        "aria-label": "rdw-embedded-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className),
        value: "unordered-list-item",
        onClick: onExpandEvent,
        title: title || translations['components.controls.embedded.embedded']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: icon,
        alt: ""
      })), expanded ? this.rendeEmbeddedLinkModal() : undefined);
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutComponent);

/***/ }),

/***/ "./src/controls/Embedded/Component/styles.css":
/*!****************************************************!*\
  !*** ./src/controls/Embedded/Component/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/Embedded/index.js":
/*!****************************************!*\
  !*** ./src/controls/Embedded/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/Embedded/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Embedded = /*#__PURE__*/function (_Component) {
  _inherits(Embedded, _Component);

  var _super = _createSuper(Embedded);

  function Embedded() {
    var _this;

    _classCallCheck(this, Embedded);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      expanded: false
    };

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.addEmbeddedLink = function (embeddedLink, height, width) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange,
          embedCallback = _this$props.config.embedCallback;
      var src = embedCallback ? embedCallback(embeddedLink) : embeddedLink;
      var entityKey = editorState.getCurrentContent().createEntity('EMBEDDED_LINK', 'MUTABLE', {
        src: src,
        height: height,
        width: width
      }).getLastCreatedEntityKey();
      var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["AtomicBlockUtils"].insertAtomicBlock(editorState, entityKey, ' ');
      onChange(newEditorState);

      _this.doCollapse();
    };

    return _this;
  }

  _createClass(Embedded, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var expanded = this.state.expanded;
      var EmbeddedComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmbeddedComponent, {
        config: config,
        translations: translations,
        onChange: this.addEmbeddedLink,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return Embedded;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Embedded.propTypes = {
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Embedded); // todo: make default heights configurable

/***/ }),

/***/ "./src/controls/Emoji/Component/index.js":
/*!***********************************************!*\
  !*** ./src/controls/Emoji/Component/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/controls/Emoji/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;
      onChange(event.target.innerHTML);
    };

    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "renderEmojiModal",
    value: function renderEmojiModal() {
      var _this2 = this;

      var _this$props$config = this.props.config,
          popupClassName = _this$props$config.popupClassName,
          emojis = _this$props$config.emojis;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-emoji-modal', popupClassName),
        onClick: _utils_common__WEBPACK_IMPORTED_MODULE_3__["stopPropagation"]
      }, emojis.map(function (emoji, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: index,
          className: "rdw-emoji-icon",
          alt: "",
          onClick: _this2.onChange
        }, emoji);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$config2 = _this$props.config,
          icon = _this$props$config2.icon,
          className = _this$props$config2.className,
          title = _this$props$config2.title,
          expanded = _this$props.expanded,
          onExpandEvent = _this$props.onExpandEvent,
          translations = _this$props.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-emoji-wrapper",
        "aria-haspopup": "true",
        "aria-label": "rdw-emoji-control",
        "aria-expanded": expanded,
        title: title || translations['components.controls.emoji.emoji']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className),
        value: "unordered-list-item",
        onClick: onExpandEvent
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: icon,
        alt: ""
      })), expanded ? this.renderEmojiModal() : undefined);
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutComponent);

/***/ }),

/***/ "./src/controls/Emoji/Component/styles.css":
/*!*************************************************!*\
  !*** ./src/controls/Emoji/Component/styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/Emoji/index.js":
/*!*************************************!*\
  !*** ./src/controls/Emoji/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Emoji; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/Emoji/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Emoji = /*#__PURE__*/function (_Component) {
  _inherits(Emoji, _Component);

  var _super = _createSuper(Emoji);

  function Emoji() {
    var _this;

    _classCallCheck(this, Emoji);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      expanded: false
    };

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.addEmoji = function (emoji) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var contentState = draft_js__WEBPACK_IMPORTED_MODULE_2__["Modifier"].replaceText(editorState.getCurrentContent(), editorState.getSelection(), emoji, editorState.getCurrentInlineStyle());
      onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, contentState, 'insert-characters'));

      _this.doCollapse();
    };

    return _this;
  }

  _createClass(Emoji, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var expanded = this.state.expanded;
      var EmojiComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmojiComponent, {
        config: config,
        translations: translations,
        onChange: this.addEmoji,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onCollpase: this.closeModal
      });
    }
  }]);

  return Emoji;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // todo: unit test cases


Emoji.propTypes = {
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/FontFamily/Component/index.js":
/*!****************************************************!*\
  !*** ./src/controls/FontFamily/Component/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/controls/FontFamily/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      defaultFontFamily: undefined
    };
    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var editorElm = document.getElementsByClassName('DraftEditor-root');

      if (editorElm && editorElm.length > 0) {
        var editorStyles = window.getComputedStyle(editorElm[0]);
        var defaultFontFamily = editorStyles.getPropertyValue('font-family');
        this.setState({
          // eslint-disable-line react/no-did-mount-set-state
          defaultFontFamily: defaultFontFamily
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var defaultFontFamily = this.state.defaultFontFamily;
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          className = _this$props$config.className,
          dropdownClassName = _this$props$config.dropdownClassName,
          options = _this$props$config.options,
          title = _this$props$config.title,
          translations = _this$props.translations,
          onChange = _this$props.onChange,
          expanded = _this$props.expanded,
          doCollapse = _this$props.doCollapse,
          onExpandEvent = _this$props.onExpandEvent,
          doExpand = _this$props.doExpand;
      var currentFontFamily = this.props.currentState.fontFamily;
      currentFontFamily = currentFontFamily || options && defaultFontFamily && options.some(function (opt) {
        return opt.toLowerCase() === defaultFontFamily.toLowerCase();
      }) && defaultFontFamily;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-fontfamily-wrapper",
        "aria-label": "rdw-font-family-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-fontfamily-dropdown', className),
        optionWrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-fontfamily-optionwrapper', dropdownClassName),
        onChange: onChange,
        expanded: expanded,
        doExpand: doExpand,
        doCollapse: doCollapse,
        onExpandEvent: onExpandEvent,
        title: title || translations['components.controls.fontfamily.fontfamily']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-fontfamily-placeholder"
      }, currentFontFamily || translations['components.controls.fontfamily.fontfamily']), options.map(function (family, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownOption"], {
          active: currentFontFamily === family,
          value: family,
          key: index
        }, family);
      })));
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutComponent);

/***/ }),

/***/ "./src/controls/FontFamily/Component/styles.css":
/*!******************************************************!*\
  !*** ./src/controls/FontFamily/Component/styles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/FontFamily/index.js":
/*!******************************************!*\
  !*** ./src/controls/FontFamily/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FontFamily; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/FontFamily/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var FontFamily = /*#__PURE__*/function (_Component) {
  _inherits(FontFamily, _Component);

  var _super = _createSuper(FontFamily);

  function FontFamily(props) {
    var _this;

    _classCallCheck(this, FontFamily);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.toggleFontFamily = function (fontFamily) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var newState = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["toggleCustomInlineStyle"])(editorState, 'fontFamily', fontFamily);

      if (newState) {
        onChange(newState);
      }
    };

    var _editorState = props.editorState,
        modalHandler = props.modalHandler;
    _this.state = {
      expanded: undefined,
      currentFontFamily: _editorState ? Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(_editorState, ['FONTFAMILY']).FONTFAMILY : undefined
    };
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(FontFamily, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && editorState !== prevProps.editorState) {
        this.setState({
          currentFontFamily: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(editorState, ['FONTFAMILY']).FONTFAMILY
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var _this$state = this.state,
          expanded = _this$state.expanded,
          currentFontFamily = _this$state.currentFontFamily;
      var FontFamilyComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      var fontFamily = currentFontFamily && currentFontFamily.substring(11);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontFamilyComponent, {
        translations: translations,
        config: config,
        currentState: {
          fontFamily: fontFamily
        },
        onChange: this.toggleFontFamily,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return FontFamily;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

FontFamily.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/FontSize/Component/index.js":
/*!**************************************************!*\
  !*** ./src/controls/FontSize/Component/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/controls/FontSize/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      defaultFontSize: undefined
    };
    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var editorElm = document.getElementsByClassName('DraftEditor-root');

      if (editorElm && editorElm.length > 0) {
        var editorStyles = window.getComputedStyle(editorElm[0]);
        var defaultFontSize = editorStyles.getPropertyValue('font-size');
        defaultFontSize = defaultFontSize.substring(0, defaultFontSize.length - 2);
        this.setState({
          // eslint-disable-line react/no-did-mount-set-state
          defaultFontSize: defaultFontSize
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          icon = _this$props$config.icon,
          className = _this$props$config.className,
          dropdownClassName = _this$props$config.dropdownClassName,
          options = _this$props$config.options,
          title = _this$props$config.title,
          onChange = _this$props.onChange,
          expanded = _this$props.expanded,
          doCollapse = _this$props.doCollapse,
          onExpandEvent = _this$props.onExpandEvent,
          doExpand = _this$props.doExpand,
          translations = _this$props.translations;
      var currentFontSize = this.props.currentState.fontSize;
      var defaultFontSize = this.state.defaultFontSize;
      defaultFontSize = Number(defaultFontSize);
      currentFontSize = currentFontSize || options && options.indexOf(defaultFontSize) >= 0 && defaultFontSize;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-fontsize-wrapper",
        "aria-label": "rdw-font-size-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-fontsize-dropdown', className),
        optionWrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dropdownClassName),
        onChange: onChange,
        expanded: expanded,
        doExpand: doExpand,
        doCollapse: doCollapse,
        onExpandEvent: onExpandEvent,
        title: title || translations['components.controls.fontsize.fontsize']
      }, currentFontSize ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, currentFontSize) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: icon,
        alt: ""
      }), options.map(function (size, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownOption"], {
          className: "rdw-fontsize-option",
          active: currentFontSize === size,
          value: size,
          key: index
        }, size);
      })));
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/FontSize/Component/styles.css":
/*!****************************************************!*\
  !*** ./src/controls/FontSize/Component/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/FontSize/index.js":
/*!****************************************!*\
  !*** ./src/controls/FontSize/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FontSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/FontSize/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var FontSize = /*#__PURE__*/function (_Component) {
  _inherits(FontSize, _Component);

  var _super = _createSuper(FontSize);

  function FontSize(props) {
    var _this;

    _classCallCheck(this, FontSize);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.toggleFontSize = function (fontSize) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var newState = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["toggleCustomInlineStyle"])(editorState, 'fontSize', fontSize);

      if (newState) {
        onChange(newState);
      }
    };

    var _editorState = props.editorState,
        modalHandler = props.modalHandler;
    _this.state = {
      expanded: undefined,
      currentFontSize: _editorState ? Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(_editorState, ['FONTSIZE']).FONTSIZE : undefined
    };
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(FontSize, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && editorState !== prevProps.editorState) {
        this.setState({
          currentFontSize: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(editorState, ['FONTSIZE']).FONTSIZE
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var _this$state = this.state,
          expanded = _this$state.expanded,
          currentFontSize = _this$state.currentFontSize;
      var FontSizeComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      var fontSize = currentFontSize && Number(currentFontSize.substring(9));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontSizeComponent, {
        config: config,
        translations: translations,
        currentState: {
          fontSize: fontSize
        },
        onChange: this.toggleFontSize,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return FontSize;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

FontSize.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/History/Component/index.js":
/*!*************************************************!*\
  !*** ./src/controls/History/Component/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/toolbar */ "./src/utils/toolbar.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/controls/History/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var History = /*#__PURE__*/function (_Component) {
  _inherits(History, _Component);

  var _super = _createSuper(History);

  function History() {
    var _this;

    _classCallCheck(this, History);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onChange = function (obj) {
      var onChange = _this.props.onChange;
      onChange(obj);
    };

    return _this;
  }

  _createClass(History, [{
    key: "renderInDropDown",
    value: function renderInDropDown() {
      var _this$props = this.props,
          config = _this$props.config,
          expanded = _this$props.expanded,
          doExpand = _this$props.doExpand,
          onExpandEvent = _this$props.onExpandEvent,
          doCollapse = _this$props.doCollapse,
          _this$props$currentSt = _this$props.currentState,
          undoDisabled = _this$props$currentSt.undoDisabled,
          redoDisabled = _this$props$currentSt.redoDisabled,
          translations = _this$props.translations;
      var options = config.options,
          undo = config.undo,
          redo = config.redo,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-history-dropdown', className),
        optionWrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dropdownClassName),
        expanded: expanded,
        doExpand: doExpand,
        doCollapse: doCollapse,
        onExpandEvent: onExpandEvent,
        "aria-label": "rdw-history-control",
        title: title || translations['components.controls.history.history']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: Object(_utils_toolbar__WEBPACK_IMPORTED_MODULE_3__["getFirstIcon"])(config),
        alt: ""
      }), options.indexOf('undo') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownOption"], {
        value: "undo",
        onClick: this.onChange,
        disabled: undoDisabled,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-history-dropdownoption', undo.className),
        title: undo.title || translations['components.controls.history.undo']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: undo.icon,
        alt: ""
      })), options.indexOf('redo') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownOption"], {
        value: "redo",
        onClick: this.onChange,
        disabled: redoDisabled,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-history-dropdownoption', redo.className),
        title: redo.title || translations['components.controls.history.redo']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: redo.icon,
        alt: ""
      })));
    }
  }, {
    key: "renderInFlatList",
    value: function renderInFlatList() {
      var _this$props2 = this.props,
          _this$props2$config = _this$props2.config,
          options = _this$props2$config.options,
          undo = _this$props2$config.undo,
          redo = _this$props2$config.redo,
          className = _this$props2$config.className,
          _this$props2$currentS = _this$props2.currentState,
          undoDisabled = _this$props2$currentS.undoDisabled,
          redoDisabled = _this$props2$currentS.redoDisabled,
          translations = _this$props2.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-history-wrapper', className),
        "aria-label": "rdw-history-control"
      }, options.indexOf('undo') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: "undo",
        onClick: this.onChange,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(undo.className),
        disabled: undoDisabled,
        title: undo.title || translations['components.controls.history.undo']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: undo.icon,
        alt: ""
      })), options.indexOf('redo') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: "redo",
        onClick: this.onChange,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(redo.className),
        disabled: redoDisabled,
        title: redo.title || translations['components.controls.history.redo']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: redo.icon,
        alt: ""
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var config = this.props.config;

      if (config.inDropdown) {
        return this.renderInDropDown();
      }

      return this.renderInFlatList();
    }
  }]);

  return History;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

History.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/History/Component/styles.css":
/*!***************************************************!*\
  !*** ./src/controls/History/Component/styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/History/index.js":
/*!***************************************!*\
  !*** ./src/controls/History/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/History/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var History = /*#__PURE__*/function (_Component) {
  _inherits(History, _Component);

  var _super = _createSuper(History);

  function History(props) {
    var _this;

    _classCallCheck(this, History);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.onChange = function (action) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"][action](editorState);

      if (newState) {
        onChange(newState);
      }
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    var state = {
      expanded: false,
      undoDisabled: false,
      redoDisabled: false
    };
    var _editorState = props.editorState,
        modalHandler = props.modalHandler;

    if (_editorState) {
      state.undoDisabled = _editorState.getUndoStack().size === 0;
      state.redoDisabled = _editorState.getRedoStack().size === 0;
    }

    _this.state = state;
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(History, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && prevProps.editorState !== editorState) {
        this.setState({
          undoDisabled: editorState.getUndoStack().size === 0,
          redoDisabled: editorState.getRedoStack().size === 0
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var _this$state = this.state,
          undoDisabled = _this$state.undoDisabled,
          redoDisabled = _this$state.redoDisabled,
          expanded = _this$state.expanded;
      var HistoryComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HistoryComponent, {
        config: config,
        translations: translations,
        currentState: {
          undoDisabled: undoDisabled,
          redoDisabled: redoDisabled
        },
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onChange: this.onChange
      });
    }
  }]);

  return History;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

History.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/Image/Component/index.js":
/*!***********************************************!*\
  !*** ./src/controls/Image/Component/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/controls/Image/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      imgSrc: '',
      dragEnter: false,
      uploadHighlighted: _this.props.config.uploadEnabled && !!_this.props.config.uploadCallback,
      showImageLoading: false,
      height: _this.props.config.defaultSize.height,
      width: _this.props.config.defaultSize.width,
      alt: ''
    };

    _this.onDragEnter = function (event) {
      _this.stopPropagation(event);

      _this.setState({
        dragEnter: true
      });
    };

    _this.onImageDrop = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.setState({
        dragEnter: false
      }); // Check if property name is files or items
      // IE uses 'files' instead of 'items'


      var data;
      var dataIsItems;

      if (event.dataTransfer.items) {
        data = event.dataTransfer.items;
        dataIsItems = true;
      } else {
        data = event.dataTransfer.files;
        dataIsItems = false;
      }

      for (var i = 0; i < data.length; i += 1) {
        if ((!dataIsItems || data[i].kind === 'file') && data[i].type.match('^image/')) {
          var file = dataIsItems ? data[i].getAsFile() : data[i];

          _this.uploadImage(file);
        }
      }
    };

    _this.showImageUploadOption = function () {
      _this.setState({
        uploadHighlighted: true
      });
    };

    _this.addImageFromState = function () {
      var _this$state = _this.state,
          imgSrc = _this$state.imgSrc,
          alt = _this$state.alt;
      var _this$state2 = _this.state,
          height = _this$state2.height,
          width = _this$state2.width;
      var onChange = _this.props.onChange;

      if (!isNaN(height)) {
        height += 'px';
      }

      if (!isNaN(width)) {
        width += 'px';
      }

      onChange(imgSrc, height, width, alt);
    };

    _this.showImageURLOption = function () {
      _this.setState({
        uploadHighlighted: false
      });
    };

    _this.toggleShowImageLoading = function () {
      var showImageLoading = !_this.state.showImageLoading;

      _this.setState({
        showImageLoading: showImageLoading
      });
    };

    _this.updateValue = function (event) {
      _this.setState(_defineProperty({}, "".concat(event.target.name), event.target.value));
    };

    _this.selectImage = function (event) {
      if (event.target.files && event.target.files.length > 0) {
        _this.uploadImage(event.target.files[0]);
      }
    };

    _this.uploadImage = function (file) {
      _this.toggleShowImageLoading();

      var uploadCallback = _this.props.config.uploadCallback;
      uploadCallback(file).then(function (_ref) {
        var data = _ref.data;

        _this.setState({
          showImageLoading: false,
          dragEnter: false,
          imgSrc: data.link || data.url
        });

        _this.fileUpload = false;
      })["catch"](function () {
        _this.setState({
          showImageLoading: false,
          dragEnter: false
        });
      });
    };

    _this.fileUploadClick = function (event) {
      _this.fileUpload = true;
      event.stopPropagation();
    };

    _this.stopPropagation = function (event) {
      if (!_this.fileUpload) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        _this.fileUpload = false;
      }
    };

    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var config = this.props.config;

      if (prevProps.expanded && !this.props.expanded) {
        this.setState({
          imgSrc: '',
          dragEnter: false,
          uploadHighlighted: config.uploadEnabled && !!config.uploadCallback,
          showImageLoading: false,
          height: config.defaultSize.height,
          width: config.defaultSize.width,
          alt: ''
        });
      } else if (config.uploadCallback !== prevProps.config.uploadCallback || config.uploadEnabled !== prevProps.config.uploadEnabled) {
        this.setState({
          uploadHighlighted: config.uploadEnabled && !!config.uploadCallback
        });
      }
    }
  }, {
    key: "renderAddImageModal",
    value: function renderAddImageModal() {
      var _this$state3 = this.state,
          imgSrc = _this$state3.imgSrc,
          uploadHighlighted = _this$state3.uploadHighlighted,
          showImageLoading = _this$state3.showImageLoading,
          dragEnter = _this$state3.dragEnter,
          height = _this$state3.height,
          width = _this$state3.width,
          alt = _this$state3.alt;
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          popupClassName = _this$props$config.popupClassName,
          uploadCallback = _this$props$config.uploadCallback,
          uploadEnabled = _this$props$config.uploadEnabled,
          urlEnabled = _this$props$config.urlEnabled,
          previewImage = _this$props$config.previewImage,
          inputAccept = _this$props$config.inputAccept,
          altConf = _this$props$config.alt,
          doCollapse = _this$props.doCollapse,
          translations = _this$props.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-image-modal', popupClassName),
        onClick: this.stopPropagation
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-image-modal-header"
      }, uploadEnabled && uploadCallback && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.showImageUploadOption,
        className: "rdw-image-modal-header-option"
      }, translations['components.controls.image.fileUpload'], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-image-modal-header-label', {
          'rdw-image-modal-header-label-highlighted': uploadHighlighted
        })
      })), urlEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.showImageURLOption,
        className: "rdw-image-modal-header-option"
      }, translations['components.controls.image.byURL'], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-image-modal-header-label', {
          'rdw-image-modal-header-label-highlighted': !uploadHighlighted
        })
      }))), uploadHighlighted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.fileUploadClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onDragEnter: this.onDragEnter,
        onDragOver: this.stopPropagation,
        onDrop: this.onImageDrop,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-image-modal-upload-option', {
          'rdw-image-modal-upload-option-highlighted': dragEnter
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "file",
        className: "rdw-image-modal-upload-option-label"
      }, previewImage && imgSrc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: imgSrc,
        alt: imgSrc,
        className: "rdw-image-modal-upload-option-image-preview"
      }) : imgSrc || translations['components.controls.image.dropFileText'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        id: "file",
        accept: inputAccept,
        onChange: this.selectImage,
        className: "rdw-image-modal-upload-option-input"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-image-modal-url-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "rdw-image-modal-url-input",
        placeholder: translations['components.controls.image.enterlink'],
        name: "imgSrc",
        onChange: this.updateValue,
        onBlur: this.updateValue,
        value: imgSrc
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-mandatory-sign"
      }, "*")), altConf.present && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-image-modal-size"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-modal-alt-lbl"
      }, "Alt Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.updateValue,
        onBlur: this.updateValue,
        value: alt,
        name: "alt",
        className: "rdw-image-modal-alt-input",
        placeholder: "alt"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-mandatory-sign"
      }, altConf.mandatory && '*')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-image-modal-size"
      }, "\u2195\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.updateValue,
        onBlur: this.updateValue,
        value: height,
        name: "height",
        className: "rdw-image-modal-size-input",
        placeholder: "Height"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-mandatory-sign"
      }, "*"), "\xA0\u2194\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.updateValue,
        onBlur: this.updateValue,
        value: width,
        name: "width",
        className: "rdw-image-modal-size-input",
        placeholder: "Width"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-mandatory-sign"
      }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-image-modal-btn-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "rdw-image-modal-btn",
        onClick: this.addImageFromState,
        disabled: !imgSrc || !height || !width || altConf.mandatory && !alt
      }, translations['generic.add']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "rdw-image-modal-btn",
        onClick: doCollapse
      }, translations['generic.cancel'])), showImageLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-image-modal-spinner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null)) : undefined);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$config = _this$props2.config,
          icon = _this$props2$config.icon,
          className = _this$props2$config.className,
          title = _this$props2$config.title,
          expanded = _this$props2.expanded,
          onExpandEvent = _this$props2.onExpandEvent,
          translations = _this$props2.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-image-wrapper",
        "aria-haspopup": "true",
        "aria-expanded": expanded,
        "aria-label": "rdw-image-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className),
        value: "unordered-list-item",
        onClick: onExpandEvent,
        title: title || translations['components.controls.image.image']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: icon,
        alt: ""
      })), expanded ? this.renderAddImageModal() : undefined);
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutComponent);

/***/ }),

/***/ "./src/controls/Image/Component/styles.css":
/*!*************************************************!*\
  !*** ./src/controls/Image/Component/styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/Image/index.js":
/*!*************************************!*\
  !*** ./src/controls/Image/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/Image/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ImageControl = /*#__PURE__*/function (_Component) {
  _inherits(ImageControl, _Component);

  var _super = _createSuper(ImageControl);

  function ImageControl(props) {
    var _this;

    _classCallCheck(this, ImageControl);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.addImage = function (src, height, width, alt) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange,
          config = _this$props.config;
      var entityData = {
        src: src,
        height: height,
        width: width
      };

      if (config.alt.present) {
        entityData.alt = alt;
      }

      var entityKey = editorState.getCurrentContent().createEntity('IMAGE', 'MUTABLE', entityData).getLastCreatedEntityKey();
      var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["AtomicBlockUtils"].insertAtomicBlock(editorState, entityKey, ' ');
      onChange(newEditorState);

      _this.doCollapse();
    };

    var modalHandler = _this.props.modalHandler;
    _this.state = {
      expanded: false
    };
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(ImageControl, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var expanded = this.state.expanded;
      var ImageComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageComponent, {
        config: config,
        translations: translations,
        onChange: this.addImage,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return ImageControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ImageControl.propTypes = {
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ImageControl);

/***/ }),

/***/ "./src/controls/Inline/Component/index.js":
/*!************************************************!*\
  !*** ./src/controls/Inline/Component/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/toolbar */ "./src/utils/toolbar.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/controls/Inline/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Inline = /*#__PURE__*/function (_Component) {
  _inherits(Inline, _Component);

  var _super = _createSuper(Inline);

  function Inline() {
    _classCallCheck(this, Inline);

    return _super.apply(this, arguments);
  }

  _createClass(Inline, [{
    key: "renderInFlatList",
    value: function renderInFlatList() {
      var _this$props = this.props,
          config = _this$props.config,
          currentState = _this$props.currentState,
          onChange = _this$props.onChange,
          translations = _this$props.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-inline-wrapper', config.className),
        "aria-label": "rdw-inline-control"
      }, config.options.map(function (style, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index,
          value: style,
          onClick: onChange,
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(config[style].className),
          active: currentState[style] === true || style === 'MONOSPACE' && currentState.CODE,
          title: config[style].title || translations["components.controls.inline.".concat(style)]
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          alt: "",
          src: config[style].icon
        }));
      }));
    }
  }, {
    key: "renderInDropDown",
    value: function renderInDropDown() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          expanded = _this$props2.expanded,
          doExpand = _this$props2.doExpand,
          onExpandEvent = _this$props2.onExpandEvent,
          doCollapse = _this$props2.doCollapse,
          currentState = _this$props2.currentState,
          onChange = _this$props2.onChange,
          translations = _this$props2.translations;
      var className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-inline-dropdown', className),
        optionWrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dropdownClassName),
        onChange: onChange,
        expanded: expanded,
        doExpand: doExpand,
        doCollapse: doCollapse,
        onExpandEvent: onExpandEvent,
        "aria-label": "rdw-inline-control",
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: Object(_utils_toolbar__WEBPACK_IMPORTED_MODULE_3__["getFirstIcon"])(config),
        alt: ""
      }), config.options.map(function (style, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownOption"], {
          key: index,
          value: style,
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-inline-dropdownoption', config[style].className),
          active: currentState[style] === true || style === 'MONOSPACE' && currentState.CODE,
          title: config[style].title || translations["components.controls.inline.".concat(style)]
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: config[style].icon,
          alt: ""
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }

      return this.renderInFlatList();
    }
  }]);

  return Inline;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // todo: make subscript less low


Inline.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/Inline/Component/styles.css":
/*!**************************************************!*\
  !*** ./src/controls/Inline/Component/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/Inline/index.js":
/*!**************************************!*\
  !*** ./src/controls/Inline/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component */ "./src/controls/Inline/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Inline = /*#__PURE__*/function (_Component) {
  _inherits(Inline, _Component);

  var _super = _createSuper(Inline);

  function Inline(props) {
    var _this;

    _classCallCheck(this, Inline);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.toggleInlineStyle = function (style) {
      var newStyle = style === 'monospace' ? 'CODE' : style.toUpperCase();
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleInlineStyle(editorState, newStyle);

      if (style === 'subscript' || style === 'superscript') {
        var removeStyle = style === 'subscript' ? 'SUPERSCRIPT' : 'SUBSCRIPT';
        var contentState = draft_js__WEBPACK_IMPORTED_MODULE_3__["Modifier"].removeInlineStyle(newState.getCurrentContent(), newState.getSelection(), removeStyle);
        newState = draft_js__WEBPACK_IMPORTED_MODULE_3__["EditorState"].push(newState, contentState, 'change-inline-style');
      }

      if (newState) {
        onChange(newState);
      }
    };

    _this.changeKeys = function (style) {
      if (style) {
        var st = {};
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["forEach"])(style, function (key, value) {
          st[key === 'CODE' ? 'monospace' : key.toLowerCase()] = value;
        });
        return st;
      }

      return undefined;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    var _this$props2 = _this.props,
        _editorState = _this$props2.editorState,
        modalHandler = _this$props2.modalHandler;
    _this.state = {
      currentStyles: _editorState ? _this.changeKeys(Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionInlineStyle"])(_editorState)) : {}
    };
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(Inline, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && editorState !== prevProps.editorState) {
        this.setState({
          currentStyles: this.changeKeys(Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionInlineStyle"])(editorState))
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          config = _this$props3.config,
          translations = _this$props3.translations;
      var _this$state = this.state,
          expanded = _this$state.expanded,
          currentStyles = _this$state.currentStyles;
      var InlineComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_5__["default"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InlineComponent, {
        config: config,
        translations: translations,
        currentState: currentStyles,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onChange: this.toggleInlineStyle
      });
    }
  }]);

  return Inline;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // make subscript less low


Inline.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/Link/Component/index.js":
/*!**********************************************!*\
  !*** ./src/controls/Link/Component/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/toolbar */ "./src/utils/toolbar.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.css */ "./src/controls/Link/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      showModal: false,
      linkTarget: '',
      linkTitle: '',
      linkTargetOption: _this.props.config.defaultTargetOption
    };

    _this.removeLink = function () {
      var onChange = _this.props.onChange;
      onChange('unlink');
    };

    _this.addLink = function () {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          linkTitle = _this$state.linkTitle,
          linkTarget = _this$state.linkTarget,
          linkTargetOption = _this$state.linkTargetOption;
      onChange('link', linkTitle, linkTarget, linkTargetOption);
    };

    _this.updateValue = function (event) {
      _this.setState(_defineProperty({}, "".concat(event.target.name), event.target.value));
    };

    _this.updateTargetOption = function (event) {
      _this.setState({
        linkTargetOption: event.target.checked ? '_blank' : '_self'
      });
    };

    _this.hideModal = function () {
      _this.setState({
        showModal: false
      });
    };

    _this.signalExpandShowModal = function () {
      var _this$props = _this.props,
          onExpandEvent = _this$props.onExpandEvent,
          _this$props$currentSt = _this$props.currentState,
          link = _this$props$currentSt.link,
          selectionText = _this$props$currentSt.selectionText;
      var linkTargetOption = _this.state.linkTargetOption;
      onExpandEvent();

      _this.setState({
        showModal: true,
        linkTarget: link && link.target || '',
        linkTargetOption: link && link.targetOption || linkTargetOption,
        linkTitle: link && link.title || selectionText
      });
    };

    _this.forceExpandAndShowModal = function () {
      var _this$props2 = _this.props,
          doExpand = _this$props2.doExpand,
          _this$props2$currentS = _this$props2.currentState,
          link = _this$props2$currentS.link,
          selectionText = _this$props2$currentS.selectionText;
      var linkTargetOption = _this.state.linkTargetOption;
      doExpand();

      _this.setState({
        showModal: true,
        linkTarget: link && link.target,
        linkTargetOption: link && link.targetOption || linkTargetOption,
        linkTitle: link && link.title || selectionText
      });
    };

    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.expanded && !this.props.expanded) {
        this.setState({
          showModal: false,
          linkTarget: '',
          linkTitle: '',
          linkTargetOption: this.props.config.defaultTargetOption
        });
      }
    }
  }, {
    key: "renderAddLinkModal",
    value: function renderAddLinkModal() {
      var _this$props3 = this.props,
          popupClassName = _this$props3.config.popupClassName,
          doCollapse = _this$props3.doCollapse,
          translations = _this$props3.translations;
      var _this$state2 = this.state,
          linkTitle = _this$state2.linkTitle,
          linkTarget = _this$state2.linkTarget,
          linkTargetOption = _this$state2.linkTargetOption;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-link-modal', popupClassName),
        onClick: _utils_common__WEBPACK_IMPORTED_MODULE_3__["stopPropagation"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "rdw-link-modal-label",
        htmlFor: "linkTitle"
      }, translations['components.controls.link.linkTitle']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "linkTitle",
        className: "rdw-link-modal-input",
        onChange: this.updateValue,
        onBlur: this.updateValue,
        name: "linkTitle",
        value: linkTitle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "rdw-link-modal-label",
        htmlFor: "linkTarget"
      }, translations['components.controls.link.linkTarget']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "linkTarget",
        className: "rdw-link-modal-input",
        onChange: this.updateValue,
        onBlur: this.updateValue,
        name: "linkTarget",
        value: linkTarget
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-link-modal-buttonsection"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "rdw-link-modal-btn",
        onClick: this.addLink,
        disabled: !linkTarget || !linkTitle
      }, translations['generic.add']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "rdw-link-modal-btn",
        onClick: doCollapse
      }, translations['generic.cancel'])));
    }
  }, {
    key: "renderInFlatList",
    value: function renderInFlatList() {
      var _this$props4 = this.props,
          _this$props4$config = _this$props4.config,
          options = _this$props4$config.options,
          link = _this$props4$config.link,
          unlink = _this$props4$config.unlink,
          className = _this$props4$config.className,
          currentState = _this$props4.currentState,
          expanded = _this$props4.expanded,
          translations = _this$props4.translations;
      var showModal = this.state.showModal;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-link-wrapper', className),
        "aria-label": "rdw-link-control"
      }, options.indexOf('link') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: "unordered-list-item",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(link.className),
        onClick: this.signalExpandShowModal,
        "aria-haspopup": "true",
        "aria-expanded": showModal,
        title: link.title || translations['components.controls.link.link']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: link.icon,
        alt: ""
      })), options.indexOf('unlink') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disabled: !currentState.link,
        value: "ordered-list-item",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(unlink.className),
        onClick: this.removeLink,
        title: unlink.title || translations['components.controls.link.unlink']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: unlink.icon,
        alt: ""
      })), expanded && showModal ? this.renderAddLinkModal() : undefined);
    }
  }, {
    key: "renderInDropDown",
    value: function renderInDropDown() {
      var _this$props5 = this.props,
          expanded = _this$props5.expanded,
          onExpandEvent = _this$props5.onExpandEvent,
          doCollapse = _this$props5.doCollapse,
          doExpand = _this$props5.doExpand,
          onChange = _this$props5.onChange,
          config = _this$props5.config,
          currentState = _this$props5.currentState,
          translations = _this$props5.translations;
      var options = config.options,
          link = config.link,
          unlink = config.unlink,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;
      var showModal = this.state.showModal;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-link-wrapper",
        "aria-haspopup": "true",
        "aria-label": "rdw-link-control",
        "aria-expanded": expanded,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-link-dropdown', className),
        optionWrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dropdownClassName),
        onChange: onChange,
        expanded: expanded && !showModal,
        doExpand: doExpand,
        doCollapse: doCollapse,
        onExpandEvent: onExpandEvent
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: Object(_utils_toolbar__WEBPACK_IMPORTED_MODULE_4__["getFirstIcon"])(config),
        alt: ""
      }), options.indexOf('link') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownOption"], {
        onClick: this.forceExpandAndShowModal,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-link-dropdownoption', link.className),
        title: link.title || translations['components.controls.link.link']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: link.icon,
        alt: ""
      })), options.indexOf('unlink') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownOption"], {
        onClick: this.removeLink,
        disabled: !currentState.link,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-link-dropdownoption', unlink.className),
        title: unlink.title || translations['components.controls.link.unlink']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: unlink.icon,
        alt: ""
      }))), expanded && showModal ? this.renderAddLinkModal() : undefined);
    }
  }, {
    key: "render",
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }

      return this.renderInFlatList();
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutComponent);

/***/ }),

/***/ "./src/controls/Link/Component/styles.css":
/*!************************************************!*\
  !*** ./src/controls/Link/Component/styles.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/Link/index.js":
/*!************************************!*\
  !*** ./src/controls/Link/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var linkify_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! linkify-it */ "./node_modules/linkify-it/index.js");
/* harmony import */ var linkify_it__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(linkify_it__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component */ "./src/controls/Link/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var linkify = linkify_it__WEBPACK_IMPORTED_MODULE_4___default()();

var linkifyLink = function linkifyLink(params) {
  var links = linkify.match(params.target);
  return _objectSpread(_objectSpread({}, params), {}, {
    target: links && links[0] && links[0].url || params.target
  });
};

var Link = /*#__PURE__*/function (_Component) {
  _inherits(Link, _Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.onChange = function (action, title, target, targetOption) {
      var linkCallback = _this.props.config.linkCallback;

      if (action === 'link') {
        var linkifyCallback = linkCallback || linkifyLink;
        var linkified = linkifyCallback({
          title: title,
          target: target,
          targetOption: targetOption
        });

        _this.addLink(linkified.title, linkified.target, linkified.targetOption);
      } else {
        _this.removeLink();
      }
    };

    _this.getCurrentValues = function () {
      var editorState = _this.props.editorState;
      var currentEntity = _this.state.currentEntity;
      var contentState = editorState.getCurrentContent();
      var currentValues = {};

      if (currentEntity && contentState.getEntity(currentEntity).get('type') === 'LINK') {
        currentValues.link = {};
        var entityRange = currentEntity && Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getEntityRange"])(editorState, currentEntity);
        currentValues.link.target = currentEntity && contentState.getEntity(currentEntity).get('data').url;
        currentValues.link.targetOption = currentEntity && contentState.getEntity(currentEntity).get('data').targetOption;
        currentValues.link.title = entityRange && entityRange.text;
      }

      currentValues.selectionText = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getSelectionText"])(editorState);
      return currentValues;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.removeLink = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var currentEntity = _this.state.currentEntity;
      var selection = editorState.getSelection();

      if (currentEntity) {
        var entityRange = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getEntityRange"])(editorState, currentEntity);
        var isBackward = selection.getIsBackward();

        if (isBackward) {
          selection = selection.merge({
            anchorOffset: entityRange.end,
            focusOffset: entityRange.start
          });
        } else {
          selection = selection.merge({
            anchorOffset: entityRange.start,
            focusOffset: entityRange.end
          });
        }

        onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleLink(editorState, selection, null));
      }
    };

    _this.addLink = function (linkTitle, linkTarget, linkTargetOption) {
      var _this$props2 = _this.props,
          editorState = _this$props2.editorState,
          onChange = _this$props2.onChange;
      var currentEntity = _this.state.currentEntity;
      var selection = editorState.getSelection();

      if (currentEntity) {
        var entityRange = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getEntityRange"])(editorState, currentEntity);
        var isBackward = selection.getIsBackward();

        if (isBackward) {
          selection = selection.merge({
            anchorOffset: entityRange.end,
            focusOffset: entityRange.start
          });
        } else {
          selection = selection.merge({
            anchorOffset: entityRange.start,
            focusOffset: entityRange.end
          });
        }
      }

      var entityKey = editorState.getCurrentContent().createEntity('LINK', 'MUTABLE', {
        url: linkTarget,
        targetOption: linkTargetOption
      }).getLastCreatedEntityKey();
      var contentState = draft_js__WEBPACK_IMPORTED_MODULE_2__["Modifier"].replaceText(editorState.getCurrentContent(), selection, "".concat(linkTitle), editorState.getCurrentInlineStyle(), entityKey);
      var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, contentState, 'insert-characters'); // insert a blank space after link

      selection = newEditorState.getSelection().merge({
        anchorOffset: selection.get('anchorOffset') + linkTitle.length,
        focusOffset: selection.get('anchorOffset') + linkTitle.length
      });
      newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].acceptSelection(newEditorState, selection);
      contentState = draft_js__WEBPACK_IMPORTED_MODULE_2__["Modifier"].insertText(newEditorState.getCurrentContent(), selection, ' ', newEditorState.getCurrentInlineStyle(), undefined);
      onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(newEditorState, contentState, 'insert-characters'));

      _this.doCollapse();
    };

    var _this$props3 = _this.props,
        _editorState = _this$props3.editorState,
        modalHandler = _this$props3.modalHandler;
    _this.state = {
      expanded: false,
      link: undefined,
      selectionText: undefined,
      currentEntity: _editorState ? Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getSelectionEntity"])(_editorState) : undefined
    };
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(Link, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && editorState !== prevProps.editorState) {
        this.setState({
          currentEntity: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getSelectionEntity"])(editorState)
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          config = _this$props4.config,
          translations = _this$props4.translations;
      var expanded = this.state.expanded;

      var _this$getCurrentValue = this.getCurrentValues(),
          link = _this$getCurrentValue.link,
          selectionText = _this$getCurrentValue.selectionText;

      var LinkComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_5__["default"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkComponent, {
        config: config,
        translations: translations,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        currentState: {
          link: link,
          selectionText: selectionText
        },
        onChange: this.onChange
      });
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Link.propTypes = {
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Link); // todo refct
// 1. better action names here
// 2. align update signatue
// 3. align current value signature

/***/ }),

/***/ "./src/controls/List/Component/index.js":
/*!**********************************************!*\
  !*** ./src/controls/List/Component/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/toolbar */ "./src/utils/toolbar.js");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/controls/List/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.options = ['unordered', 'ordered', 'indent', 'outdent'];

    _this.toggleBlockType = function (blockType) {
      var onChange = _this.props.onChange;
      onChange(blockType);
    };

    _this.indent = function () {
      var onChange = _this.props.onChange;
      onChange('indent');
    };

    _this.outdent = function () {
      var onChange = _this.props.onChange;
      onChange('outdent');
    };

    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "renderInFlatList",
    value: // todo: evaluate refactoring this code to put a loop there and in other places also in code
    // hint: it will require moving click handlers
    function renderInFlatList() {
      var _this$props = this.props,
          config = _this$props.config,
          listType = _this$props.currentState.listType,
          translations = _this$props.translations,
          indentDisabled = _this$props.indentDisabled,
          outdentDisabled = _this$props.outdentDisabled;
      var options = config.options,
          unordered = config.unordered,
          ordered = config.ordered,
          indent = config.indent,
          outdent = config.outdent,
          className = config.className;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-list-wrapper', className),
        "aria-label": "rdw-list-control"
      }, options.indexOf('unordered') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: "unordered",
        onClick: this.toggleBlockType,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(unordered.className),
        active: listType === 'unordered',
        title: unordered.title || translations['components.controls.list.unordered']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: unordered.icon,
        alt: ""
      })), options.indexOf('ordered') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: "ordered",
        onClick: this.toggleBlockType,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(ordered.className),
        active: listType === 'ordered',
        title: ordered.title || translations['components.controls.list.ordered']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: ordered.icon,
        alt: ""
      })), options.indexOf('indent') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: this.indent,
        disabled: indentDisabled,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(indent.className),
        title: indent.title || translations['components.controls.list.indent']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: indent.icon,
        alt: ""
      })), options.indexOf('outdent') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: this.outdent,
        disabled: outdentDisabled,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(outdent.className),
        title: outdent.title || translations['components.controls.list.outdent']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: outdent.icon,
        alt: ""
      })));
    }
  }, {
    key: "renderInDropDown",
    value: function renderInDropDown() {
      var _this2 = this;

      var _this$props2 = this.props,
          config = _this$props2.config,
          expanded = _this$props2.expanded,
          doCollapse = _this$props2.doCollapse,
          doExpand = _this$props2.doExpand,
          onExpandEvent = _this$props2.onExpandEvent,
          onChange = _this$props2.onChange,
          listType = _this$props2.currentState.listType,
          translations = _this$props2.translations;
      var options = config.options,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-list-dropdown', className),
        optionWrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dropdownClassName),
        onChange: onChange,
        expanded: expanded,
        doExpand: doExpand,
        doCollapse: doCollapse,
        onExpandEvent: onExpandEvent,
        "aria-label": "rdw-list-control",
        title: title || translations['components.controls.list.list']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: Object(_utils_toolbar__WEBPACK_IMPORTED_MODULE_3__["getFirstIcon"])(config),
        alt: ""
      }), this.options.filter(function (option) {
        return options.indexOf(option) >= 0;
      }).map(function (option, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOption"], {
          key: index,
          value: option,
          disabled: _this2.props["".concat(option, "Disabled")],
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-list-dropdownOption', config[option].className),
          active: listType === option,
          title: config[option].title || translations["components.controls.list.".concat(option)]
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: config[option].icon,
          alt: ""
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }

      return this.renderInFlatList();
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  indentDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  outdentDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};


/***/ }),

/***/ "./src/controls/List/Component/styles.css":
/*!************************************************!*\
  !*** ./src/controls/List/Component/styles.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/List/index.js":
/*!************************************!*\
  !*** ./src/controls/List/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ "./src/controls/List/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var List = /*#__PURE__*/function (_Component) {
  _inherits(List, _Component);

  var _super = _createSuper(List);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.onChange = function (value) {
      if (value === 'unordered') {
        _this.toggleBlockType('unordered-list-item');
      } else if (value === 'ordered') {
        _this.toggleBlockType('ordered-list-item');
      } else if (value === 'indent') {
        _this.adjustDepth(1);
      } else {
        _this.adjustDepth(-1);
      }
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.toggleBlockType = function (blockType) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          editorState = _this$props.editorState;
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleBlockType(editorState, blockType);

      if (newState) {
        onChange(newState);
      }
    };

    _this.adjustDepth = function (adjustment) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          editorState = _this$props2.editorState;
      var newState = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["changeDepth"])(editorState, adjustment, 4);

      if (newState) {
        onChange(newState);
      }
    };

    _this.isIndentDisabled = function () {
      var editorState = _this.props.editorState;
      var currentBlock = _this.state.currentBlock;
      var previousBlock = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getBlockBeforeSelectedBlock"])(editorState);

      if (!previousBlock || !Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["isListBlock"])(currentBlock) || previousBlock.get('type') !== currentBlock.get('type') || previousBlock.get('depth') < currentBlock.get('depth')) {
        return true;
      }

      return false;
    };

    _this.isOutdentDisabled = function () {
      var currentBlock = _this.state.currentBlock;
      return !currentBlock || !Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["isListBlock"])(currentBlock) || currentBlock.get('depth') <= 0;
    };

    var _this$props3 = _this.props,
        _editorState = _this$props3.editorState,
        modalHandler = _this$props3.modalHandler;
    _this.state = {
      expanded: false,
      currentBlock: _editorState ? Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getSelectedBlock"])(_editorState) : undefined
    };
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(List, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && editorState !== prevProps.editorState) {
        this.setState({
          currentBlock: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getSelectedBlock"])(editorState)
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          config = _this$props4.config,
          translations = _this$props4.translations;
      var _this$state = this.state,
          expanded = _this$state.expanded,
          currentBlock = _this$state.currentBlock;
      var ListComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_4__["default"];
      var listType;

      if (currentBlock.get('type') === 'unordered-list-item') {
        listType = 'unordered';
      } else if (currentBlock.get('type') === 'ordered-list-item') {
        listType = 'ordered';
      }

      var indentDisabled = this.isIndentDisabled();
      var outdentDisabled = this.isOutdentDisabled();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListComponent, {
        config: config,
        translations: translations,
        currentState: {
          listType: listType
        },
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onChange: this.onChange,
        indentDisabled: indentDisabled,
        outdentDisabled: outdentDisabled
      });
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

List.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/Remove/Component/index.js":
/*!************************************************!*\
  !*** ./src/controls/Remove/Component/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/controls/Remove/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);






var RemoveComponent = function RemoveComponent(_ref) {
  var config = _ref.config,
      onChange = _ref.onChange,
      translations = _ref.translations;
  var icon = config.icon,
      className = config.className,
      title = config.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rdw-remove-wrapper",
    "aria-label": "rdw-remove-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className),
    onClick: onChange,
    title: title || translations['components.controls.remove.remove']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon,
    alt: ""
  })));
};

RemoveComponent.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (RemoveComponent);

/***/ }),

/***/ "./src/controls/Remove/Component/styles.css":
/*!**************************************************!*\
  !*** ./src/controls/Remove/Component/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/Remove/index.js":
/*!**************************************!*\
  !*** ./src/controls/Remove/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Remove; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component */ "./src/controls/Remove/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Remove = /*#__PURE__*/function (_Component) {
  _inherits(Remove, _Component);

  var _super = _createSuper(Remove);

  function Remove() {
    var _this;

    _classCallCheck(this, Remove);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      expanded: false
    };

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.removeInlineStyles = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      onChange(_this.removeAllInlineStyles(editorState));
    };

    _this.removeAllInlineStyles = function (editorState) {
      var contentState = editorState.getCurrentContent();
      ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'MONOSPACE', 'SUPERSCRIPT', 'SUBSCRIPT'].forEach(function (style) {
        contentState = draft_js__WEBPACK_IMPORTED_MODULE_2__["Modifier"].removeInlineStyle(contentState, editorState.getSelection(), style);
      });
      var customStyles = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_3__["getSelectionCustomInlineStyle"])(editorState, ['FONTSIZE', 'FONTFAMILY', 'COLOR', 'BGCOLOR']);
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["forEach"])(customStyles, function (key, value) {
        if (value) {
          contentState = draft_js__WEBPACK_IMPORTED_MODULE_2__["Modifier"].removeInlineStyle(contentState, editorState.getSelection(), value);
        }
      });
      return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, contentState, 'change-inline-style');
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    return _this;
  }

  _createClass(Remove, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var expanded = this.state.expanded;
      var RemoveComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_5__["default"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RemoveComponent, {
        config: config,
        translations: translations,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onChange: this.removeInlineStyles
      });
    }
  }]);

  return Remove;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // todo: unit test coverage


Remove.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/TextAlign/Component/index.js":
/*!***************************************************!*\
  !*** ./src/controls/TextAlign/Component/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextAlign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Dropdown */ "./src/components/Dropdown/index.js");
/* harmony import */ var _utils_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/toolbar */ "./src/utils/toolbar.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/controls/TextAlign/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var TextAlign = /*#__PURE__*/function (_Component) {
  _inherits(TextAlign, _Component);

  var _super = _createSuper(TextAlign);

  function TextAlign() {
    _classCallCheck(this, TextAlign);

    return _super.apply(this, arguments);
  }

  _createClass(TextAlign, [{
    key: "renderInFlatList",
    value: function renderInFlatList() {
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          options = _this$props$config.options,
          left = _this$props$config.left,
          center = _this$props$config.center,
          right = _this$props$config.right,
          justify = _this$props$config.justify,
          className = _this$props$config.className,
          onChange = _this$props.onChange,
          textAlignment = _this$props.currentState.textAlignment,
          translations = _this$props.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-text-align-wrapper', className),
        "aria-label": "rdw-textalign-control"
      }, options.indexOf('left') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: "left",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(left.className),
        active: textAlignment === 'left',
        onClick: onChange,
        title: left.title || translations['components.controls.textalign.left']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: left.icon,
        alt: ""
      })), options.indexOf('center') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: "center",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(center.className),
        active: textAlignment === 'center',
        onClick: onChange,
        title: center.title || translations['components.controls.textalign.center']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: center.icon,
        alt: ""
      })), options.indexOf('right') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: "right",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(right.className),
        active: textAlignment === 'right',
        onClick: onChange,
        title: right.title || translations['components.controls.textalign.right']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: right.icon,
        alt: ""
      })), options.indexOf('justify') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: "justify",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(justify.className),
        active: textAlignment === 'justify',
        onClick: onChange,
        title: justify.title || translations['components.controls.textalign.justify']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: justify.icon,
        alt: ""
      })));
    }
  }, {
    key: "renderInDropDown",
    value: function renderInDropDown() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          expanded = _this$props2.expanded,
          doExpand = _this$props2.doExpand,
          onExpandEvent = _this$props2.onExpandEvent,
          doCollapse = _this$props2.doCollapse,
          textAlignment = _this$props2.currentState.textAlignment,
          onChange = _this$props2.onChange,
          translations = _this$props2.translations;
      var options = config.options,
          left = config.left,
          center = config.center,
          right = config.right,
          justify = config.justify,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-text-align-dropdown', className),
        optionWrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dropdownClassName),
        onChange: onChange,
        expanded: expanded,
        doExpand: doExpand,
        doCollapse: doCollapse,
        onExpandEvent: onExpandEvent,
        "aria-label": "rdw-textalign-control",
        title: title || translations['components.controls.textalign.textalign']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: textAlignment && config[textAlignment] && config[textAlignment].icon || Object(_utils_toolbar__WEBPACK_IMPORTED_MODULE_5__["getFirstIcon"])(config),
        alt: ""
      }), options.indexOf('left') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOption"], {
        value: "left",
        active: textAlignment === 'left',
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-text-align-dropdownOption', left.className),
        title: left.title || translations['components.controls.textalign.left']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: left.icon,
        alt: ""
      })), options.indexOf('center') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOption"], {
        value: "center",
        active: textAlignment === 'center',
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-text-align-dropdownOption', center.className),
        title: center.title || translations['components.controls.textalign.center']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: center.icon,
        alt: ""
      })), options.indexOf('right') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOption"], {
        value: "right",
        active: textAlignment === 'right',
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-text-align-dropdownOption', right.className),
        title: right.title || translations['components.controls.textalign.right']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: right.icon,
        alt: ""
      })), options.indexOf('justify') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownOption"], {
        value: "justify",
        active: textAlignment === 'justify',
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-text-align-dropdownOption', justify.className),
        title: justify.title || translations['components.controls.textalign.justify']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: justify.icon,
        alt: ""
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }

      return this.renderInFlatList();
    }
  }]);

  return TextAlign;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TextAlign.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  doCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/TextAlign/Component/styles.css":
/*!*****************************************************!*\
  !*** ./src/controls/TextAlign/Component/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/TextAlign/index.js":
/*!*****************************************!*\
  !*** ./src/controls/TextAlign/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextAlign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/TextAlign/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var TextAlign = /*#__PURE__*/function (_Component) {
  _inherits(TextAlign, _Component);

  var _super = _createSuper(TextAlign);

  function TextAlign(props) {
    var _this;

    _classCallCheck(this, TextAlign);

    _this = _super.call(this, props);

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.addBlockAlignmentData = function (value) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var currentTextAlignment = _this.state.currentTextAlignment;

      if (currentTextAlignment !== value) {
        onChange(Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["setBlockData"])(editorState, {
          'text-align': value
        }));
      } else {
        onChange(Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["setBlockData"])(editorState, {
          'text-align': undefined
        }));
      }
    };

    var modalHandler = _this.props.modalHandler;
    _this.state = {
      currentTextAlignment: undefined
    };
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(TextAlign, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState !== prevProps.editorState) {
        this.setState({
          currentTextAlignment: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectedBlocksMetadata"])(editorState).get('text-align')
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var _this$state = this.state,
          expanded = _this$state.expanded,
          currentTextAlignment = _this$state.currentTextAlignment;
      var TextAlignmentComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextAlignmentComponent, {
        config: config,
        translations: translations,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        currentState: {
          textAlignment: currentTextAlignment
        },
        onChange: this.addBlockAlignmentData
      });
    }
  }]);

  return TextAlign;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TextAlign.propTypes = {
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/***/ }),

/***/ "./src/controls/TextColorPicker/Component/index.js":
/*!*********************************************************!*\
  !*** ./src/controls/TextColorPicker/Component/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/controls/TextColorPicker/Component/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var LayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(LayoutComponent, _Component);

  var _super = _createSuper(LayoutComponent);

  function LayoutComponent() {
    var _this;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      currentStyle: 'color'
    };

    _this.onChange = function (color) {
      var onChange = _this.props.onChange;
      var currentStyle = _this.state.currentStyle;
      onChange(currentStyle, color);
    };

    _this.renderModal = function () {
      var _this$props = _this.props,
          _this$props$config = _this$props.config,
          popupClassName = _this$props$config.popupClassName,
          colors = _this$props$config.colors,
          color = _this$props.currentState.color;
      var currentSelectedColor = color;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-colorpicker-modal', popupClassName),
        onClick: _utils_common__WEBPACK_IMPORTED_MODULE_3__["stopPropagation"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "rdw-colorpicker-modal-options"
      }, colors.map(function (c, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: c,
          key: index,
          className: "rdw-colorpicker-option",
          activeClassName: "rdw-colorpicker-option-active",
          active: currentSelectedColor === c,
          onClick: _this.onChange
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            backgroundColor: c
          },
          className: "rdw-colorpicker-cube"
        }));
      })));
    };

    return _this;
  }

  _createClass(LayoutComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var expanded = this.props.expanded;

      if (expanded && !prevProps.expanded) {
        this.setState({
          currentStyle: 'color'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$config = _this$props2.config,
          icon = _this$props2$config.icon,
          className = _this$props2$config.className,
          title = _this$props2$config.title,
          expanded = _this$props2.expanded,
          onExpandEvent = _this$props2.onExpandEvent,
          translations = _this$props2.translations;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rdw-colorpicker-wrapper",
        "aria-haspopup": "true",
        "aria-expanded": expanded,
        "aria-label": "rdw-color-picker",
        title: title || translations['components.controls.colorpicker.colorpicker']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: onExpandEvent,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: icon,
        alt: ""
      })), expanded ? this.renderModal() : undefined);
    }
  }]);

  return LayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutComponent.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onExpandEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  currentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutComponent);

/***/ }),

/***/ "./src/controls/TextColorPicker/Component/styles.css":
/*!***********************************************************!*\
  !*** ./src/controls/TextColorPicker/Component/styles.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/controls/TextColorPicker/index.js":
/*!***********************************************!*\
  !*** ./src/controls/TextColorPicker/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/controls/TextColorPicker/Component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var TextColorPicker = /*#__PURE__*/function (_Component) {
  _inherits(TextColorPicker, _Component);

  var _super = _createSuper(TextColorPicker);

  function TextColorPicker(props) {
    var _this;

    _classCallCheck(this, TextColorPicker);

    _this = _super.call(this, props);
    _this.state = {
      expanded: false,
      currentColor: undefined
    };

    _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    };

    _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });

      _this.signalExpanded = false;
    };

    _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    };

    _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    };

    _this.toggleColor = function (style, color) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var newState = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["toggleCustomInlineStyle"])(editorState, style, color);

      if (newState) {
        onChange(newState);
      }

      _this.doCollapse();
    };

    var _editorState = props.editorState,
        modalHandler = props.modalHandler;
    var state = {
      expanded: false,
      currentColor: undefined
    };

    if (_editorState) {
      state.currentColor = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(_editorState, ['COLOR']).COLOR;
    }

    _this.state = state;
    modalHandler.registerCallBack(_this.expandCollapse);
    return _this;
  }

  _createClass(TextColorPicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var editorState = this.props.editorState;

      if (editorState && editorState !== prevProps.editorState) {
        this.setState({
          currentColor: Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_2__["getSelectionCustomInlineStyle"])(editorState, ['COLOR']).COLOR
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;
      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          translations = _this$props2.translations;
      var _this$state = this.state,
          currentColor = _this$state.currentColor,
          expanded = _this$state.expanded;
      var ColorPickerComponent = config.component || _Component__WEBPACK_IMPORTED_MODULE_3__["default"];
      var color = currentColor && currentColor.substring(6);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPickerComponent, {
        config: config,
        translations: translations,
        onChange: this.toggleColor,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        currentState: {
          color: color
        }
      });
    }
  }]);

  return TextColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TextColorPicker.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editorState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  modalHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  translations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (TextColorPicker);

/***/ }),

/***/ "./src/controls/index.js":
/*!*******************************!*\
  !*** ./src/controls/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inline */ "./src/controls/Inline/index.js");
/* harmony import */ var _BlockType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockType */ "./src/controls/BlockType/index.js");
/* harmony import */ var _FontSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FontSize */ "./src/controls/FontSize/index.js");
/* harmony import */ var _FontFamily__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FontFamily */ "./src/controls/FontFamily/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ "./src/controls/List/index.js");
/* harmony import */ var _TextAlign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextAlign */ "./src/controls/TextAlign/index.js");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ColorPicker */ "./src/controls/ColorPicker/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Link */ "./src/controls/Link/index.js");
/* harmony import */ var _Embedded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Embedded */ "./src/controls/Embedded/index.js");
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Emoji */ "./src/controls/Emoji/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Image */ "./src/controls/Image/index.js");
/* harmony import */ var _Remove__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Remove */ "./src/controls/Remove/index.js");
/* harmony import */ var _History__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./History */ "./src/controls/History/index.js");
/* harmony import */ var _TextColorPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TextColorPicker */ "./src/controls/TextColorPicker/index.js");














/* harmony default export */ __webpack_exports__["default"] = ({
  inline: _Inline__WEBPACK_IMPORTED_MODULE_0__["default"],
  blockType: _BlockType__WEBPACK_IMPORTED_MODULE_1__["default"],
  fontSize: _FontSize__WEBPACK_IMPORTED_MODULE_2__["default"],
  fontFamily: _FontFamily__WEBPACK_IMPORTED_MODULE_3__["default"],
  list: _List__WEBPACK_IMPORTED_MODULE_4__["default"],
  textAlign: _TextAlign__WEBPACK_IMPORTED_MODULE_5__["default"],
  colorPicker: _ColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"],
  link: _Link__WEBPACK_IMPORTED_MODULE_7__["default"],
  embedded: _Embedded__WEBPACK_IMPORTED_MODULE_8__["default"],
  emoji: _Emoji__WEBPACK_IMPORTED_MODULE_9__["default"],
  image: _Image__WEBPACK_IMPORTED_MODULE_10__["default"],
  remove: _Remove__WEBPACK_IMPORTED_MODULE_11__["default"],
  history: _History__WEBPACK_IMPORTED_MODULE_12__["default"],
  textColorPicker: _TextColorPicker__WEBPACK_IMPORTED_MODULE_13__["default"]
});

/***/ }),

/***/ "./src/decorators/HashTag/index.js":
/*!*****************************************!*\
  !*** ./src/decorators/HashTag/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/decorators/HashTag/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Hashtag = /*#__PURE__*/_createClass(function Hashtag(config) {
  var _this = this;

  _classCallCheck(this, Hashtag);

  this.getHashtagComponent = function () {
    var className = _this.className;

    var HashtagComponent = function HashtagComponent(_ref) {
      var children = _ref.children;
      var text = children[0].props.text;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: text,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("rdw-hashtag-link", className)
      }, children);
    };

    HashtagComponent.propTypes = {
      children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    };
    return HashtagComponent;
  };

  this.findHashtagEntities = function (contentBlock, callback) {
    var text = contentBlock.getText();
    var startIndex = 0;
    var counter = 0;

    for (; text.length > 0 && startIndex >= 0;) {
      if (text[0] === _this.hashCharacter) {
        startIndex = 0;
        counter = 0;
        text = text.substr(_this.hashCharacter.length);
      } else {
        startIndex = text.indexOf(_this.separator + _this.hashCharacter);

        if (startIndex >= 0) {
          text = text.substr(startIndex + (_this.separator + _this.hashCharacter).length);
          counter += startIndex + _this.separator.length;
        }
      }

      if (startIndex >= 0) {
        var endIndex = text.indexOf(_this.separator) >= 0 ? text.indexOf(_this.separator) : text.length;
        var hashtagText = text.substr(0, endIndex);

        if (hashtagText && hashtagText.length > 0) {
          callback(counter, counter + hashtagText.length + _this.hashCharacter.length);
          counter += _this.hashCharacter.length;
        }
      }
    }
  };

  this.getHashtagDecorator = function () {
    return {
      strategy: _this.findHashtagEntities,
      component: _this.getHashtagComponent()
    };
  };

  this.className = config.className;
  this.hashCharacter = config.hashCharacter || "#";
  this.separator = config.separator || " ";
});

var getDecorator = function getDecorator(config) {
  return new Hashtag(config).getHashtagDecorator();
};

/* harmony default export */ __webpack_exports__["default"] = (getDecorator);

/***/ }),

/***/ "./src/decorators/HashTag/styles.css":
/*!*******************************************!*\
  !*** ./src/decorators/HashTag/styles.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/decorators/Link/index.js":
/*!**************************************!*\
  !*** ./src/decorators/Link/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/url */ "./src/utils/url.js");
/* harmony import */ var _images_openlink_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/openlink.svg */ "./images/openlink.svg");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/decorators/Link/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

function getLinkComponent(config) {
  var _class;

  var showOpenOptionOnHover = config.showOpenOptionOnHover;
  return _class = /*#__PURE__*/function (_Component) {
    _inherits(Link, _Component);

    var _super = _createSuper(Link);

    function Link() {
      var _this;

      _classCallCheck(this, Link);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        showPopOver: false
      };

      _this.openLink = function () {
        var _this$props = _this.props,
            entityKey = _this$props.entityKey,
            contentState = _this$props.contentState;

        var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
            url = _contentState$getEnti.url;

        var linkTab = window.open(Object(_utils_url__WEBPACK_IMPORTED_MODULE_2__["ensureSafeUrl"])(url), 'blank'); // eslint-disable-line no-undef
        // linkTab can be null when the window failed to open.

        if (linkTab) {
          linkTab.focus();
        }
      };

      _this.toggleShowPopOver = function () {
        var showPopOver = !_this.state.showPopOver;

        _this.setState({
          showPopOver: showPopOver
        });
      };

      return _this;
    }

    _createClass(Link, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            entityKey = _this$props2.entityKey,
            contentState = _this$props2.contentState;

        var _contentState$getEnti2 = contentState.getEntity(entityKey).getData(),
            url = _contentState$getEnti2.url,
            targetOption = _contentState$getEnti2.targetOption;

        var showPopOver = this.state.showPopOver;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "rdw-link-decorator-wrapper",
          onMouseEnter: this.toggleShowPopOver,
          onMouseLeave: this.toggleShowPopOver
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: Object(_utils_url__WEBPACK_IMPORTED_MODULE_2__["ensureSafeUrl"])(url),
          target: targetOption
        }, children), showPopOver && showOpenOptionOnHover ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _images_openlink_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
          alt: "",
          onClick: this.openLink,
          className: "rdw-link-decorator-icon"
        }) : undefined);
      }
    }]);

    return Link;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.propTypes = {
    entityKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
    contentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }, _class;
}

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
  return {
    strategy: findLinkEntities,
    component: getLinkComponent(config)
  };
});

/***/ }),

/***/ "./src/decorators/Link/styles.css":
/*!****************************************!*\
  !*** ./src/decorators/Link/styles.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/decorators/Mention/Mention/index.js":
/*!*************************************************!*\
  !*** ./src/decorators/Mention/Mention/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/decorators/Mention/Mention/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Mention = /*#__PURE__*/_createClass(function Mention(_className) {
  var _this = this;

  _classCallCheck(this, Mention);

  this.getMentionComponent = function () {
    var className = _this.className;

    var MentionComponent = function MentionComponent(_ref) {
      var entityKey = _ref.entityKey,
          children = _ref.children,
          contentState = _ref.contentState;

      var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
          url = _contentState$getEnti.url,
          value = _contentState$getEnti.value;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: url || value,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("rdw-mention-link", className)
      }, children);
    };

    MentionComponent.propTypes = {
      entityKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
      children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
      contentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    };
    return MentionComponent;
  };

  this.getMentionDecorator = function () {
    return {
      strategy: _this.findMentionEntities,
      component: _this.getMentionComponent()
    };
  };

  this.className = _className;
});

Mention.prototype.findMentionEntities = function (contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === "MENTION";
  }, callback);
};

/* harmony default export */ __webpack_exports__["default"] = (Mention);

/***/ }),

/***/ "./src/decorators/Mention/Mention/styles.css":
/*!***************************************************!*\
  !*** ./src/decorators/Mention/Mention/styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/decorators/Mention/Suggestion/index.js":
/*!****************************************************!*\
  !*** ./src/decorators/Mention/Suggestion/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addMention__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMention */ "./src/decorators/Mention/addMention.js");
/* harmony import */ var _event_handler_keyDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../event-handler/keyDown */ "./src/event-handler/keyDown.js");
/* harmony import */ var _event_handler_suggestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../event-handler/suggestions */ "./src/event-handler/suggestions.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/decorators/Mention/Suggestion/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var Suggestion = /*#__PURE__*/_createClass(function Suggestion(config) {
  var _this = this;

  _classCallCheck(this, Suggestion);

  this.findSuggestionEntities = function (contentBlock, callback) {
    if (_this.config.getEditorState()) {
      var _this$config = _this.config,
          separator = _this$config.separator,
          trigger = _this$config.trigger,
          getSuggestions = _this$config.getSuggestions,
          getEditorState = _this$config.getEditorState;
      var selection = getEditorState().getSelection();

      if (selection.get('anchorKey') === contentBlock.get('key') && selection.get('anchorKey') === selection.get('focusKey')) {
        var text = contentBlock.getText();
        text = text.substr(0, selection.get('focusOffset') === text.length - 1 ? text.length : selection.get('focusOffset') + 1);
        var index = text.lastIndexOf(separator + trigger);
        var preText = separator + trigger;

        if ((index === undefined || index < 0) && text[0] === trigger) {
          index = 0;
          preText = trigger;
        }

        if (index >= 0) {
          var mentionText = text.substr(index + preText.length, text.length);
          var suggestionPresent = getSuggestions().some(function (suggestion) {
            if (suggestion.value) {
              if (_this.config.caseSensitive) {
                return suggestion.value.indexOf(mentionText) >= 0;
              }

              return suggestion.value.toLowerCase().indexOf(mentionText && mentionText.toLowerCase()) >= 0;
            }

            return false;
          });

          if (suggestionPresent) {
            callback(index === 0 ? 0 : index + 1, text.length);
          }
        }
      }
    }
  };

  this.getSuggestionComponent = getSuggestionComponent.bind(this);

  this.getSuggestionDecorator = function () {
    return {
      strategy: _this.findSuggestionEntities,
      component: _this.getSuggestionComponent()
    };
  };

  var _separator = config.separator,
      _trigger = config.trigger,
      _getSuggestions = config.getSuggestions,
      onChange = config.onChange,
      _getEditorState = config.getEditorState,
      getWrapperRef = config.getWrapperRef,
      caseSensitive = config.caseSensitive,
      dropdownClassName = config.dropdownClassName,
      optionClassName = config.optionClassName,
      modalHandler = config.modalHandler;
  this.config = {
    separator: _separator,
    trigger: _trigger,
    getSuggestions: _getSuggestions,
    onChange: onChange,
    getEditorState: _getEditorState,
    getWrapperRef: getWrapperRef,
    caseSensitive: caseSensitive,
    dropdownClassName: dropdownClassName,
    optionClassName: optionClassName,
    modalHandler: modalHandler
  };
});

function getSuggestionComponent() {
  var _class;

  var config = this.config;
  return _class = /*#__PURE__*/function (_Component) {
    _inherits(SuggestionComponent, _Component);

    var _super = _createSuper(SuggestionComponent);

    function SuggestionComponent() {
      var _this2;

      _classCallCheck(this, SuggestionComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2 = _super.call.apply(_super, [this].concat(args));
      _this2.state = {
        style: {
          left: 15
        },
        activeOption: -1,
        showSuggestions: true
      };

      _this2.onEditorKeyDown = function (event) {
        var activeOption = _this2.state.activeOption;
        var newState = {};

        if (event.key === 'ArrowDown') {
          event.preventDefault();

          if (activeOption === _this2.filteredSuggestions.length - 1) {
            newState.activeOption = 0;
          } else {
            newState.activeOption = activeOption + 1;
          }
        } else if (event.key === 'ArrowUp') {
          if (activeOption <= 0) {
            newState.activeOption = _this2.filteredSuggestions.length - 1;
          } else {
            newState.activeOption = activeOption - 1;
          }
        } else if (event.key === 'Escape') {
          newState.showSuggestions = false;
          _event_handler_suggestions__WEBPACK_IMPORTED_MODULE_5__["default"].close();
        } else if (event.key === 'Enter') {
          _this2.addMention();
        }

        _this2.setState(newState);
      };

      _this2.onOptionMouseEnter = function (event) {
        var index = event.target.getAttribute('data-index');

        _this2.setState({
          activeOption: index
        });
      };

      _this2.onOptionMouseLeave = function () {
        _this2.setState({
          activeOption: -1
        });
      };

      _this2.setSuggestionReference = function (ref) {
        _this2.suggestion = ref;
      };

      _this2.setDropdownReference = function (ref) {
        _this2.dropdown = ref;
      };

      _this2.closeSuggestionDropdown = function () {
        _this2.setState({
          showSuggestions: false
        });
      };

      _this2.filteredSuggestions = [];

      _this2.filterSuggestions = function (props) {
        var mentionText = props.children[0].props.text.substr(1);
        var suggestions = config.getSuggestions();
        _this2.filteredSuggestions = suggestions && suggestions.filter(function (suggestion) {
          if (!mentionText || mentionText.length === 0) {
            return true;
          }

          if (config.caseSensitive) {
            return suggestion.value.indexOf(mentionText) >= 0;
          }

          return suggestion.value.toLowerCase().indexOf(mentionText && mentionText.toLowerCase()) >= 0;
        });
      };

      _this2.addMention = function () {
        var activeOption = _this2.state.activeOption;
        var editorState = config.getEditorState();
        var onChange = config.onChange,
            separator = config.separator,
            trigger = config.trigger;
        var selectedMention = _this2.filteredSuggestions[activeOption];

        if (selectedMention) {
          Object(_addMention__WEBPACK_IMPORTED_MODULE_3__["default"])(editorState, onChange, separator, trigger, selectedMention);
        }
      };

      return _this2;
    }

    _createClass(SuggestionComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var editorRect = config.getWrapperRef().getBoundingClientRect();
        var suggestionRect = this.suggestion.getBoundingClientRect();
        var dropdownRect = this.dropdown.getBoundingClientRect();
        var left;
        var right;
        var bottom;

        if (editorRect.width < suggestionRect.left - editorRect.left + dropdownRect.width) {
          right = 15;
        } else {
          left = 15;
        }

        if (editorRect.bottom < dropdownRect.bottom) {
          bottom = 0;
        }

        this.setState({
          // eslint-disable-line react/no-did-mount-set-state
          style: {
            left: left,
            right: right,
            bottom: bottom
          }
        });
        _event_handler_keyDown__WEBPACK_IMPORTED_MODULE_4__["default"].registerCallBack(this.onEditorKeyDown);
        _event_handler_suggestions__WEBPACK_IMPORTED_MODULE_5__["default"].open();
        config.modalHandler.setSuggestionCallback(this.closeSuggestionDropdown);
        this.filterSuggestions(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(props) {
        var children = this.props.children;

        if (children !== props.children) {
          this.filterSuggestions(props);
          this.setState({
            showSuggestions: true
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _event_handler_keyDown__WEBPACK_IMPORTED_MODULE_4__["default"].deregisterCallBack(this.onEditorKeyDown);
        _event_handler_suggestions__WEBPACK_IMPORTED_MODULE_5__["default"].close();
        config.modalHandler.removeSuggestionCallback();
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var children = this.props.children;
        var _this$state = this.state,
            activeOption = _this$state.activeOption,
            showSuggestions = _this$state.showSuggestions;
        var dropdownClassName = config.dropdownClassName,
            optionClassName = config.optionClassName;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "rdw-suggestion-wrapper",
          ref: this.setSuggestionReference,
          onClick: config.modalHandler.onSuggestionClick,
          "aria-haspopup": "true",
          "aria-label": "rdw-suggestion-popup"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, children), showSuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-suggestion-dropdown', dropdownClassName),
          contentEditable: "false",
          suppressContentEditableWarning: true,
          style: this.state.style,
          ref: this.setDropdownReference
        }, this.filteredSuggestions.map(function (suggestion, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            key: index,
            spellCheck: false,
            onClick: _this3.addMention,
            "data-index": index,
            onMouseEnter: _this3.onOptionMouseEnter,
            onMouseLeave: _this3.onOptionMouseLeave,
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rdw-suggestion-option', optionClassName, {
              'rdw-suggestion-option-active': index === activeOption
            })
          }, suggestion.text);
        })));
      }
    }]);

    return SuggestionComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  }, _class;
}

/* harmony default export */ __webpack_exports__["default"] = (Suggestion);

/***/ }),

/***/ "./src/decorators/Mention/Suggestion/styles.css":
/*!******************************************************!*\
  !*** ./src/decorators/Mention/Suggestion/styles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/decorators/Mention/addMention.js":
/*!**********************************************!*\
  !*** ./src/decorators/Mention/addMention.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addMention; });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_1__);


function addMention(editorState, onChange, separator, trigger, suggestion) {
  var value = suggestion.value,
      url = suggestion.url;
  var entityKey = editorState.getCurrentContent().createEntity('MENTION', 'IMMUTABLE', {
    text: "".concat(trigger).concat(value),
    value: value,
    url: url
  }).getLastCreatedEntityKey();
  var selectedBlock = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_1__["getSelectedBlock"])(editorState);
  var selectedBlockText = selectedBlock.getText();
  var focusOffset = editorState.getSelection().focusOffset;
  var mentionIndex = (selectedBlockText.lastIndexOf(separator + trigger, focusOffset) || 0) + 1;
  var spaceAlreadyPresent = false;

  if (selectedBlockText.length === mentionIndex + 1) {
    focusOffset = selectedBlockText.length;
  }

  if (selectedBlockText[focusOffset] === ' ') {
    spaceAlreadyPresent = true;
  }

  var updatedSelection = editorState.getSelection().merge({
    anchorOffset: mentionIndex,
    focusOffset: focusOffset
  });
  var newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].acceptSelection(editorState, updatedSelection);
  var contentState = draft_js__WEBPACK_IMPORTED_MODULE_0__["Modifier"].replaceText(newEditorState.getCurrentContent(), updatedSelection, "".concat(trigger).concat(value), newEditorState.getCurrentInlineStyle(), entityKey);
  newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].push(newEditorState, contentState, 'insert-characters');

  if (!spaceAlreadyPresent) {
    // insert a blank space after mention
    updatedSelection = newEditorState.getSelection().merge({
      anchorOffset: mentionIndex + value.length + trigger.length,
      focusOffset: mentionIndex + value.length + trigger.length
    });
    newEditorState = draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].acceptSelection(newEditorState, updatedSelection);
    contentState = draft_js__WEBPACK_IMPORTED_MODULE_0__["Modifier"].insertText(newEditorState.getCurrentContent(), updatedSelection, ' ', newEditorState.getCurrentInlineStyle(), undefined);
  }

  onChange(draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].push(newEditorState, contentState, 'insert-characters'));
}

/***/ }),

/***/ "./src/decorators/Mention/index.js":
/*!*****************************************!*\
  !*** ./src/decorators/Mention/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mention__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mention */ "./src/decorators/Mention/Mention/index.js");
/* harmony import */ var _Suggestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Suggestion */ "./src/decorators/Mention/Suggestion/index.js");



var getDecorators = function getDecorators(config) {
  return [new _Mention__WEBPACK_IMPORTED_MODULE_0__["default"](config.mentionClassName).getMentionDecorator(), new _Suggestion__WEBPACK_IMPORTED_MODULE_1__["default"](config).getSuggestionDecorator()];
};

/* harmony default export */ __webpack_exports__["default"] = (getDecorators);

/***/ }),

/***/ "./src/event-handler/focus.js":
/*!************************************!*\
  !*** ./src/event-handler/focus.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FocusHandler; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FocusHandler = /*#__PURE__*/_createClass(function FocusHandler() {
  var _this = this;

  _classCallCheck(this, FocusHandler);

  this.inputFocused = false;
  this.editorMouseDown = false;

  this.onEditorMouseDown = function () {
    _this.editorFocused = true;
  };

  this.onInputMouseDown = function () {
    _this.inputFocused = true;
  };

  this.isEditorBlur = function (event) {
    if ((event.target.tagName === 'INPUT' || event.target.tagName === 'LABEL' || event.target.tagName === 'TEXTAREA') && !_this.editorFocused) {
      _this.inputFocused = false;
      return true;
    } else if ((event.target.tagName !== 'INPUT' || event.target.tagName !== 'LABEL' || event.target.tagName !== 'TEXTAREA') && !_this.inputFocused) {
      _this.editorFocused = false;
      return true;
    }

    return false;
  };

  this.isEditorFocused = function () {
    if (!_this.inputFocused) {
      return true;
    }

    _this.inputFocused = false;
    return false;
  };

  this.isToolbarFocused = function () {
    if (!_this.editorFocused) {
      return true;
    }

    _this.editorFocused = false;
    return false;
  };

  this.isInputFocused = function () {
    return _this.inputFocused;
  };
});



/***/ }),

/***/ "./src/event-handler/keyDown.js":
/*!**************************************!*\
  !*** ./src/event-handler/keyDown.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var callBacks = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  onKeyDown: function onKeyDown(event) {
    callBacks.forEach(function (callBack) {
      callBack(event);
    });
  },
  registerCallBack: function registerCallBack(callBack) {
    callBacks.push(callBack);
  },
  deregisterCallBack: function deregisterCallBack(callBack) {
    callBacks = callBacks.filter(function (cb) {
      return cb !== callBack;
    });
  }
});

/***/ }),

/***/ "./src/event-handler/modals.js":
/*!*************************************!*\
  !*** ./src/event-handler/modals.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalHandler; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalHandler = /*#__PURE__*/_createClass(function ModalHandler() {
  var _this = this;

  _classCallCheck(this, ModalHandler);

  this.callBacks = [];
  this.suggestionCallback = undefined;
  this.editorFlag = false;
  this.suggestionFlag = false;

  this.closeAllModals = function (event) {
    _this.callBacks.forEach(function (callBack) {
      callBack(event);
    });
  };

  this.init = function (wrapperId) {
    var wrapper = document.getElementById(wrapperId); // eslint-disable-line no-undef

    if (wrapper) {
      wrapper.addEventListener('click', function () {
        _this.editorFlag = true;
      });
    }

    if (document) {
      document.addEventListener('click', function () {
        // eslint-disable-line no-undef
        if (!_this.editorFlag) {
          _this.closeAllModals();

          if (_this.suggestionCallback) {
            _this.suggestionCallback();
          }
        } else {
          _this.editorFlag = false;
        }
      });
      document.addEventListener('keydown', function (event) {
        // eslint-disable-line no-undef
        if (event.key === 'Escape') {
          _this.closeAllModals();
        }
      });
    }
  };

  this.onEditorClick = function () {
    _this.closeModals();

    if (!_this.suggestionFlag && _this.suggestionCallback) {
      _this.suggestionCallback();
    } else {
      _this.suggestionFlag = false;
    }
  };

  this.closeModals = function (event) {
    _this.closeAllModals(event);
  };

  this.registerCallBack = function (callBack) {
    _this.callBacks.push(callBack);
  };

  this.deregisterCallBack = function (callBack) {
    _this.callBacks = _this.callBacks.filter(function (cb) {
      return cb !== callBack;
    });
  };

  this.setSuggestionCallback = function (callBack) {
    _this.suggestionCallback = callBack;
  };

  this.removeSuggestionCallback = function () {
    _this.suggestionCallback = undefined;
  };

  this.onSuggestionClick = function () {
    _this.suggestionFlag = true;
  };
});



/***/ }),

/***/ "./src/event-handler/suggestions.js":
/*!******************************************!*\
  !*** ./src/event-handler/suggestions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var suggestionDropdownOpen;
/* harmony default export */ __webpack_exports__["default"] = ({
  open: function open() {
    suggestionDropdownOpen = true;
  },
  close: function close() {
    suggestionDropdownOpen = false;
  },
  isOpen: function isOpen() {
    return suggestionDropdownOpen;
  }
});

/***/ }),

/***/ "./src/i18n/da.js":
/*!************************!*\
  !*** ./src/i18n/da.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Tilføj",
  "generic.cancel": "Annuller",
  // BlockType
  "components.controls.blocktype.h1": "Overskrift 1",
  "components.controls.blocktype.h2": "Overskrift 2",
  "components.controls.blocktype.h3": "Overskrift 3",
  "components.controls.blocktype.h4": "Overskrift 4",
  "components.controls.blocktype.h5": "Overskrift 5",
  "components.controls.blocktype.h6": "Overskrift 6",
  "components.controls.blocktype.blockquote": "Blokcitat",
  "components.controls.blocktype.code": "Kode",
  "components.controls.blocktype.blocktype": "Blok Type",
  "components.controls.blocktype.normal": "Normal",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Farver",
  "components.controls.colorpicker.text": "Tekst",
  "components.controls.colorpicker.background": "Baggrund",
  // Embedded
  "components.controls.embedded.embedded": "Indlejre",
  "components.controls.embedded.embeddedlink": "Indlejre Link",
  "components.controls.embedded.enterlink": "Indtast link",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Fonttype",
  // FontSize
  "components.controls.fontsize.fontsize": "Fontstørrelser",
  // History
  "components.controls.history.history": "Historie",
  "components.controls.history.undo": "Fortryd",
  "components.controls.history.redo": "Gendan",
  // Image
  "components.controls.image.image": "Billede",
  "components.controls.image.fileUpload": "Filoverførsel",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Drop filen eller klik for at uploade",
  // Inline
  "components.controls.inline.bold": "Fed",
  "components.controls.inline.italic": "Kursiv",
  "components.controls.inline.underline": "Understrege",
  "components.controls.inline.strikethrough": "Gennemstreget",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Hævet",
  "components.controls.inline.subscript": "Sænket",
  // Link
  "components.controls.link.linkTitle": "Link Titel",
  "components.controls.link.linkTarget": "Link Mål",
  "components.controls.link.linkTargetOption": "Åbn link i nyt vindue",
  "components.controls.link.link": "Link",
  "components.controls.link.unlink": "Fjern link",
  // List
  "components.controls.list.list": "Liste",
  "components.controls.list.unordered": "Uordnet",
  "components.controls.list.ordered": "Ordnet",
  "components.controls.list.indent": "Indrykning",
  "components.controls.list.outdent": "Udrykning",
  // Remove
  "components.controls.remove.remove": "Fjern",
  // TextAlign
  "components.controls.textalign.textalign": "Tekstjustering",
  "components.controls.textalign.left": "Venstre",
  "components.controls.textalign.center": "Center",
  "components.controls.textalign.right": "Højre",
  "components.controls.textalign.justify": "Margener"
});

/***/ }),

/***/ "./src/i18n/de.js":
/*!************************!*\
  !*** ./src/i18n/de.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Hinzufügen",
  "generic.cancel": "Abbrechen",
  // BlockType
  "components.controls.blocktype.h1": "Überschrift 1",
  "components.controls.blocktype.h2": "Überschrift 2",
  "components.controls.blocktype.h3": "Überschrift 3",
  "components.controls.blocktype.h4": "Überschrift 4",
  "components.controls.blocktype.h5": "Überschrift 5",
  "components.controls.blocktype.h6": "Überschrift 6",
  "components.controls.blocktype.blockquote": "Zitat",
  "components.controls.blocktype.code": "Quellcode",
  "components.controls.blocktype.blocktype": "Blocktyp",
  "components.controls.blocktype.normal": "Normal",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Farbauswahl",
  "components.controls.colorpicker.text": "Text",
  "components.controls.colorpicker.background": "Hintergrund",
  // Embedded
  "components.controls.embedded.embedded": "Eingebettet",
  "components.controls.embedded.embeddedlink": "Eingebetteter Link",
  "components.controls.embedded.enterlink": "Link eingeben",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Schriftart",
  // FontSize
  "components.controls.fontsize.fontsize": "Schriftgröße",
  // History
  "components.controls.history.history": "Historie",
  "components.controls.history.undo": "Zurücknehmen",
  "components.controls.history.redo": "Wiederholen",
  // Image
  "components.controls.image.image": "Bild",
  "components.controls.image.fileUpload": "Datei-Upload",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Dateien ziehen und ablegen, oder klicken zum Hochladen",
  // Inline
  "components.controls.inline.bold": "Fett",
  "components.controls.inline.italic": "Kursiv",
  "components.controls.inline.underline": "Unterstreichen",
  "components.controls.inline.strikethrough": "Durchstreichen",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Hochgestellt",
  "components.controls.inline.subscript": "Tiefgestellt",
  // Link
  "components.controls.link.linkTitle": "Link-Titel",
  "components.controls.link.linkTarget": "Link-Ziel",
  "components.controls.link.linkTargetOption": "Link in neuem Fenster öffnen",
  "components.controls.link.link": "Link",
  "components.controls.link.unlink": "Aufheben",
  // List
  "components.controls.list.list": "Liste",
  "components.controls.list.unordered": "Aufzählung",
  "components.controls.list.ordered": "Nummerierte Liste",
  "components.controls.list.indent": "Einzug vergrößern",
  "components.controls.list.outdent": "Einzug reduzieren",
  // Remove
  "components.controls.remove.remove": "Entfernen",
  // TextAlign
  "components.controls.textalign.textalign": "Textausrichtung",
  "components.controls.textalign.left": "Linksbündig",
  "components.controls.textalign.center": "Zentrieren",
  "components.controls.textalign.right": "Rechtsbündig",
  "components.controls.textalign.justify": "Blocksatz"
});

/***/ }),

/***/ "./src/i18n/en.js":
/*!************************!*\
  !*** ./src/i18n/en.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Add",
  "generic.cancel": "Cancel",
  // BlockType
  "components.controls.blocktype.h1": "H1",
  "components.controls.blocktype.h2": "H2",
  "components.controls.blocktype.h3": "H3",
  "components.controls.blocktype.h4": "H4",
  "components.controls.blocktype.h5": "H5",
  "components.controls.blocktype.h6": "H6",
  "components.controls.blocktype.blockquote": "Blockquote",
  "components.controls.blocktype.code": "Code",
  "components.controls.blocktype.blocktype": "Block Type",
  "components.controls.blocktype.normal": "Normal",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Color Picker",
  "components.controls.colorpicker.text": "Text",
  "components.controls.colorpicker.background": "Highlight",
  // Embedded
  "components.controls.embedded.embedded": "Embedded",
  "components.controls.embedded.embeddedlink": "Embedded Link",
  "components.controls.embedded.enterlink": "Enter link",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Font",
  // FontSize
  "components.controls.fontsize.fontsize": "Font Size",
  // History
  "components.controls.history.history": "History",
  "components.controls.history.undo": "Undo",
  "components.controls.history.redo": "Redo",
  // Image
  "components.controls.image.image": "Image",
  "components.controls.image.fileUpload": "File Upload",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Drop the file or click to upload",
  // Inline
  "components.controls.inline.bold": "Bold",
  "components.controls.inline.italic": "Italic",
  "components.controls.inline.underline": "Underline",
  "components.controls.inline.strikethrough": "Strikethrough",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Superscript",
  "components.controls.inline.subscript": "Subscript",
  // Link
  "components.controls.link.linkTitle": "Link Title",
  "components.controls.link.linkTarget": "Link Target",
  "components.controls.link.linkTargetOption": "Open link in new window",
  "components.controls.link.link": "Link",
  "components.controls.link.unlink": "Unlink",
  // List
  "components.controls.list.list": "List",
  "components.controls.list.unordered": "Unordered",
  "components.controls.list.ordered": "Ordered",
  "components.controls.list.indent": "Indent",
  "components.controls.list.outdent": "Outdent",
  // Remove
  "components.controls.remove.remove": "Remove",
  // TextAlign
  "components.controls.textalign.textalign": "Text Align",
  "components.controls.textalign.left": "Left",
  "components.controls.textalign.center": "Center",
  "components.controls.textalign.right": "Right",
  "components.controls.textalign.justify": "Justify"
});

/***/ }),

/***/ "./src/i18n/es.js":
/*!************************!*\
  !*** ./src/i18n/es.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Añadir",
  "generic.cancel": "Cancelar",
  // BlockType
  "components.controls.blocktype.h1": "H1",
  "components.controls.blocktype.h2": "H2",
  "components.controls.blocktype.h3": "H3",
  "components.controls.blocktype.h4": "H4",
  "components.controls.blocktype.h5": "H5",
  "components.controls.blocktype.h6": "H6",
  "components.controls.blocktype.blockquote": "Blockquote",
  "components.controls.blocktype.code": "Código",
  "components.controls.blocktype.blocktype": "Tipo de bloque",
  "components.controls.blocktype.normal": "Normal",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Seleccionar color",
  "components.controls.colorpicker.text": "Texto",
  "components.controls.colorpicker.background": "Subrayado",
  // Embedded
  "components.controls.embedded.embedded": "Adjuntar",
  "components.controls.embedded.embeddedlink": "Adjuntar Link",
  "components.controls.embedded.enterlink": "Introducir link",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Fuente",
  // FontSize
  "components.controls.fontsize.fontsize": "Tamaño de fuente",
  // History
  "components.controls.history.history": "Histórico",
  "components.controls.history.undo": "Deshacer",
  "components.controls.history.redo": "Rehacer",
  // Image
  "components.controls.image.image": "Imagen",
  "components.controls.image.fileUpload": "Subir archivo",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Arrastra el archivo o haz click para subirlo",
  // Inline
  "components.controls.inline.bold": "Negrita",
  "components.controls.inline.italic": "Cursiva",
  "components.controls.inline.underline": "Subrayado",
  "components.controls.inline.strikethrough": "Tachado",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Sobreíndice",
  "components.controls.inline.subscript": "Subíndice",
  // Link
  "components.controls.link.linkTitle": "Título del enlace",
  "components.controls.link.linkTarget": "Objetivo del enlace",
  "components.controls.link.linkTargetOption": "Abrir en nueva ventana",
  "components.controls.link.link": "Enlazar",
  "components.controls.link.unlink": "Desenlazar",
  // List
  "components.controls.list.list": "Lista",
  "components.controls.list.unordered": "Desordenada",
  "components.controls.list.ordered": "Ordenada",
  "components.controls.list.indent": "Indentada",
  "components.controls.list.outdent": "Dentada",
  // Remove
  "components.controls.remove.remove": "Eliminar",
  // TextAlign
  "components.controls.textalign.textalign": "Alineación del texto",
  "components.controls.textalign.left": "Izquierda",
  "components.controls.textalign.center": "Centrado",
  "components.controls.textalign.right": "Derecha",
  "components.controls.textalign.justify": "Justificado"
});

/***/ }),

/***/ "./src/i18n/fr.js":
/*!************************!*\
  !*** ./src/i18n/fr.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Ok",
  "generic.cancel": "Annuler",
  // BlockType
  "components.controls.blocktype.h1": "Titre 1",
  "components.controls.blocktype.h2": "Titre 2",
  "components.controls.blocktype.h3": "Titre 3",
  "components.controls.blocktype.h4": "Titre 4",
  "components.controls.blocktype.h5": "Titre 5",
  "components.controls.blocktype.h6": "Titre 6",
  "components.controls.blocktype.blockquote": "Citation",
  "components.controls.blocktype.code": "Code",
  "components.controls.blocktype.blocktype": "Type bloc",
  "components.controls.blocktype.normal": "Normal",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Palette de couleur",
  "components.controls.colorpicker.text": "Texte",
  "components.controls.colorpicker.background": "Fond",
  // Embedded
  "components.controls.embedded.embedded": "Embedded",
  "components.controls.embedded.embeddedlink": "Lien iFrame",
  "components.controls.embedded.enterlink": "Entrer le lien",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Police",
  // FontSize
  "components.controls.fontsize.fontsize": "Taille de police",
  // History
  "components.controls.history.history": "Historique",
  "components.controls.history.undo": "Précédent",
  "components.controls.history.redo": "Suivant",
  // Image
  "components.controls.image.image": "Image",
  "components.controls.image.fileUpload": "Téléchargement",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Glisser une image ou cliquer pour télécharger",
  // Inline
  "components.controls.inline.bold": "Gras",
  "components.controls.inline.italic": "Italique",
  "components.controls.inline.underline": "Souligner",
  "components.controls.inline.strikethrough": "Barrer",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Exposant",
  "components.controls.inline.subscript": "Indice",
  // Link
  "components.controls.link.linkTitle": "Titre du lien",
  "components.controls.link.linkTarget": "Cible du lien",
  "components.controls.link.linkTargetOption": "Ouvrir le lien dans une nouvelle fenêtre",
  "components.controls.link.link": "Lier",
  "components.controls.link.unlink": "Délier",
  // List
  "components.controls.list.list": "Liste",
  "components.controls.list.unordered": "Désordonnée",
  "components.controls.list.ordered": "Ordonnée",
  "components.controls.list.indent": "Augmenter le retrait",
  "components.controls.list.outdent": "Diminuer le retrait",
  // Remove
  "components.controls.remove.remove": "Supprimer",
  // TextAlign
  "components.controls.textalign.textalign": "Alignement du texte",
  "components.controls.textalign.left": "Gauche",
  "components.controls.textalign.center": "Centre",
  "components.controls.textalign.right": "Droite",
  "components.controls.textalign.justify": "Justifier"
});

/***/ }),

/***/ "./src/i18n/index.js":
/*!***************************!*\
  !*** ./src/i18n/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ "./src/i18n/en.js");
/* harmony import */ var _fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fr */ "./src/i18n/fr.js");
/* harmony import */ var _zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zh */ "./src/i18n/zh.js");
/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ru */ "./src/i18n/ru.js");
/* harmony import */ var _pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pt */ "./src/i18n/pt.js");
/* harmony import */ var _ko__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ko */ "./src/i18n/ko.js");
/* harmony import */ var _it__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it */ "./src/i18n/it.js");
/* harmony import */ var _nl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nl */ "./src/i18n/nl.js");
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./de */ "./src/i18n/de.js");
/* harmony import */ var _da__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./da */ "./src/i18n/da.js");
/* harmony import */ var _zh_tw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zh_tw */ "./src/i18n/zh_tw.js");
/* harmony import */ var _pl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pl */ "./src/i18n/pl.js");
/* harmony import */ var _es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./es */ "./src/i18n/es.js");
/* harmony import */ var _ja__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ja */ "./src/i18n/ja.js");














/* harmony default export */ __webpack_exports__["default"] = ({
  en: _en__WEBPACK_IMPORTED_MODULE_0__["default"],
  fr: _fr__WEBPACK_IMPORTED_MODULE_1__["default"],
  zh: _zh__WEBPACK_IMPORTED_MODULE_2__["default"],
  ru: _ru__WEBPACK_IMPORTED_MODULE_3__["default"],
  pt: _pt__WEBPACK_IMPORTED_MODULE_4__["default"],
  ko: _ko__WEBPACK_IMPORTED_MODULE_5__["default"],
  it: _it__WEBPACK_IMPORTED_MODULE_6__["default"],
  nl: _nl__WEBPACK_IMPORTED_MODULE_7__["default"],
  de: _de__WEBPACK_IMPORTED_MODULE_8__["default"],
  da: _da__WEBPACK_IMPORTED_MODULE_9__["default"],
  zh_tw: _zh_tw__WEBPACK_IMPORTED_MODULE_10__["default"],
  pl: _pl__WEBPACK_IMPORTED_MODULE_11__["default"],
  es: _es__WEBPACK_IMPORTED_MODULE_12__["default"],
  ja: _ja__WEBPACK_IMPORTED_MODULE_13__["default"]
});

/***/ }),

/***/ "./src/i18n/it.js":
/*!************************!*\
  !*** ./src/i18n/it.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Aggiungi",
  "generic.cancel": "Annulla",
  // BlockType
  "components.controls.blocktype.h1": "H1",
  "components.controls.blocktype.h2": "H2",
  "components.controls.blocktype.h3": "H3",
  "components.controls.blocktype.h4": "H4",
  "components.controls.blocktype.h5": "H5",
  "components.controls.blocktype.h6": "H6",
  "components.controls.blocktype.blockquote": "Citazione",
  "components.controls.blocktype.code": "Codice",
  "components.controls.blocktype.blocktype": "Stili",
  "components.controls.blocktype.normal": "Normale",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Colore testo",
  "components.controls.colorpicker.text": "Testo",
  "components.controls.colorpicker.background": "Evidenziazione",
  // Embedded
  "components.controls.embedded.embedded": "Incorpora",
  "components.controls.embedded.embeddedlink": "Incorpora link",
  "components.controls.embedded.enterlink": "Inserisci link",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Carattere",
  // FontSize
  "components.controls.fontsize.fontsize": "Dimensione carattere",
  // History
  "components.controls.history.history": "Modifiche",
  "components.controls.history.undo": "Annulla",
  "components.controls.history.redo": "Ripristina",
  // Image
  "components.controls.image.image": "Immagine",
  "components.controls.image.fileUpload": "Carica immagine",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Trascina il file o clicca per caricare",
  // Inline
  "components.controls.inline.bold": "Grassetto",
  "components.controls.inline.italic": "Corsivo",
  "components.controls.inline.underline": "Sottolineato",
  "components.controls.inline.strikethrough": "Barrato",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Apice",
  "components.controls.inline.subscript": "Pedice",
  // Link
  "components.controls.link.linkTitle": "Testo",
  "components.controls.link.linkTarget": "Link",
  "components.controls.link.linkTargetOption": "Apri link in una nuova finestra",
  "components.controls.link.link": "Inserisci link",
  "components.controls.link.unlink": "Rimuovi link",
  // List
  "components.controls.list.list": "Lista",
  "components.controls.list.unordered": "Elenco puntato",
  "components.controls.list.ordered": "Elenco numerato",
  "components.controls.list.indent": "Indent",
  "components.controls.list.outdent": "Outdent",
  // Remove
  "components.controls.remove.remove": "Rimuovi formattazione",
  // TextAlign
  "components.controls.textalign.textalign": "Allineamento del testo",
  "components.controls.textalign.left": "Allinea a sinistra",
  "components.controls.textalign.center": "Allinea al centro",
  "components.controls.textalign.right": "Allinea a destra",
  "components.controls.textalign.justify": "Giustifica"
});

/***/ }),

/***/ "./src/i18n/ja.js":
/*!************************!*\
  !*** ./src/i18n/ja.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "追加",
  "generic.cancel": "キャンセル",
  // BlockType
  "components.controls.blocktype.h1": "見出し1",
  "components.controls.blocktype.h2": "見出し2",
  "components.controls.blocktype.h3": "見出し3",
  "components.controls.blocktype.h4": "見出し4",
  "components.controls.blocktype.h5": "見出し5",
  "components.controls.blocktype.h6": "見出し6",
  "components.controls.blocktype.blockquote": "引用",
  "components.controls.blocktype.code": "コード",
  "components.controls.blocktype.blocktype": "スタイル",
  "components.controls.blocktype.normal": "標準テキスト",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "テキストの色",
  "components.controls.colorpicker.text": "テキスト",
  "components.controls.colorpicker.background": "ハイライト",
  // Embedded
  "components.controls.embedded.embedded": "埋め込み",
  "components.controls.embedded.embeddedlink": "埋め込みリンク",
  "components.controls.embedded.enterlink": "リンクを入力してください",
  // Emoji
  "components.controls.emoji.emoji": "絵文字",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "フォント",
  // FontSize
  "components.controls.fontsize.fontsize": "フォントサイズ",
  // History
  "components.controls.history.history": "履歴",
  "components.controls.history.undo": "元に戻す",
  "components.controls.history.redo": "やり直し",
  // Image
  "components.controls.image.image": "画像",
  "components.controls.image.fileUpload": "ファイルをアップロード",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "ここに画像をドラッグするか、クリックしてください",
  // Inline
  "components.controls.inline.bold": "太字",
  "components.controls.inline.italic": "斜体",
  "components.controls.inline.underline": "下線",
  "components.controls.inline.strikethrough": "取り消し線",
  "components.controls.inline.monospace": "等幅フォント",
  "components.controls.inline.superscript": "上付き文字",
  "components.controls.inline.subscript": "下付き文字",
  // Link
  "components.controls.link.linkTitle": "リンクタイトル",
  "components.controls.link.linkTarget": "リンク対象",
  "components.controls.link.linkTargetOption": "新しいウィンドウで開く",
  "components.controls.link.link": "リンク",
  "components.controls.link.unlink": "リンクを解除",
  // List
  "components.controls.list.list": "リスト",
  "components.controls.list.unordered": "箇条書き",
  "components.controls.list.ordered": "番号付き",
  "components.controls.list.indent": "インデント増",
  "components.controls.list.outdent": "インデント減",
  // Remove
  "components.controls.remove.remove": "書式をクリア",
  // TextAlign
  "components.controls.textalign.textalign": "整列",
  "components.controls.textalign.left": "左揃え",
  "components.controls.textalign.center": "中央揃え",
  "components.controls.textalign.right": "右揃え",
  "components.controls.textalign.justify": "両端揃え"
});

/***/ }),

/***/ "./src/i18n/ko.js":
/*!************************!*\
  !*** ./src/i18n/ko.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "입력",
  "generic.cancel": "취소",
  // BlockType
  "components.controls.blocktype.h1": "제목1",
  "components.controls.blocktype.h2": "제목2",
  "components.controls.blocktype.h3": "제목3",
  "components.controls.blocktype.h4": "제목4",
  "components.controls.blocktype.h5": "제목5",
  "components.controls.blocktype.h6": "제목6",
  "components.controls.blocktype.blockquote": "인용",
  "components.controls.blocktype.code": "Code",
  "components.controls.blocktype.blocktype": "블록",
  "components.controls.blocktype.normal": "표준",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "색상 선택",
  "components.controls.colorpicker.text": "글꼴색",
  "components.controls.colorpicker.background": "배경색",
  // Embedded
  "components.controls.embedded.embedded": "임베드",
  "components.controls.embedded.embeddedlink": "임베드 링크",
  "components.controls.embedded.enterlink": "주소를 입력하세요",
  // Emoji
  "components.controls.emoji.emoji": "이모지",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "글꼴",
  // FontSize
  "components.controls.fontsize.fontsize": "글꼴 크기",
  // History
  "components.controls.history.history": "히스토리",
  "components.controls.history.undo": "실행 취소",
  "components.controls.history.redo": "다시 실행",
  // Image
  "components.controls.image.image": "이미지",
  "components.controls.image.fileUpload": "파일 업로드",
  "components.controls.image.byURL": "주소",
  "components.controls.image.dropFileText": "클릭하거나 파일을 드롭하여 업로드하세요",
  // Inline
  "components.controls.inline.bold": "굵게",
  "components.controls.inline.italic": "기울임꼴",
  "components.controls.inline.underline": "밑줄",
  "components.controls.inline.strikethrough": "취소선",
  "components.controls.inline.monospace": "고정 너비",
  "components.controls.inline.superscript": "위 첨자",
  "components.controls.inline.subscript": "아래 첨자",
  // Link
  "components.controls.link.linkTitle": "링크 제목",
  "components.controls.link.linkTarget": "링크 타겟",
  "components.controls.link.linkTargetOption": "새창으로 열기",
  "components.controls.link.link": "링크",
  "components.controls.link.unlink": "링크 제거",
  // List
  "components.controls.list.list": "리스트",
  "components.controls.list.unordered": "일반 리스트",
  "components.controls.list.ordered": "순서 리스트",
  "components.controls.list.indent": "들여쓰기",
  "components.controls.list.outdent": "내어쓰기",
  // Remove
  "components.controls.remove.remove": "삭제",
  // TextAlign
  "components.controls.textalign.textalign": "텍스트 정렬",
  "components.controls.textalign.left": "왼쪽",
  "components.controls.textalign.center": "중앙",
  "components.controls.textalign.right": "오른쪽",
  "components.controls.textalign.justify": "양쪽"
});

/***/ }),

/***/ "./src/i18n/nl.js":
/*!************************!*\
  !*** ./src/i18n/nl.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Toevoegen",
  "generic.cancel": "Annuleren",
  // BlockType
  "components.controls.blocktype.h1": "H1",
  "components.controls.blocktype.h2": "H2",
  "components.controls.blocktype.h3": "H3",
  "components.controls.blocktype.h4": "H4",
  "components.controls.blocktype.h5": "H5",
  "components.controls.blocktype.h6": "H6",
  "components.controls.blocktype.blockquote": "Blockquote",
  "components.controls.blocktype.code": "Code",
  "components.controls.blocktype.blocktype": "Blocktype",
  "components.controls.blocktype.normal": "Normaal",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Kleurkiezer",
  "components.controls.colorpicker.text": "Tekst",
  "components.controls.colorpicker.background": "Achtergrond",
  // Embedded
  "components.controls.embedded.embedded": "Ingevoegd",
  "components.controls.embedded.embeddedlink": "Ingevoegde link",
  "components.controls.embedded.enterlink": "Voeg link toe",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Lettertype",
  // FontSize
  "components.controls.fontsize.fontsize": "Lettergrootte",
  // History
  "components.controls.history.history": "Geschiedenis",
  "components.controls.history.undo": "Ongedaan maken",
  "components.controls.history.redo": "Opnieuw",
  // Image
  "components.controls.image.image": "Afbeelding",
  "components.controls.image.fileUpload": "Bestand uploaden",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Drop het bestand hier of klik om te uploaden",
  // Inline
  "components.controls.inline.bold": "Dikgedrukt",
  "components.controls.inline.italic": "Schuingedrukt",
  "components.controls.inline.underline": "Onderstrepen",
  "components.controls.inline.strikethrough": "Doorstrepen",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Superscript",
  "components.controls.inline.subscript": "Subscript",
  // Link
  "components.controls.link.linkTitle": "Linktitel",
  "components.controls.link.linkTarget": "Link bestemming",
  "components.controls.link.linkTargetOption": "Open link in een nieuw venster",
  "components.controls.link.link": "Link",
  "components.controls.link.unlink": "Unlink",
  // List
  "components.controls.list.list": "Lijst",
  "components.controls.list.unordered": "Ongeordend",
  "components.controls.list.ordered": "Geordend",
  "components.controls.list.indent": "Inspringen",
  "components.controls.list.outdent": "Inspringen verkleinen",
  // Remove
  "components.controls.remove.remove": "Verwijderen",
  // TextAlign
  "components.controls.textalign.textalign": "Tekst uitlijnen",
  "components.controls.textalign.left": "Links",
  "components.controls.textalign.center": "Gecentreerd",
  "components.controls.textalign.right": "Rechts",
  "components.controls.textalign.justify": "Uitgelijnd"
});

/***/ }),

/***/ "./src/i18n/pl.js":
/*!************************!*\
  !*** ./src/i18n/pl.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Dodaj",
  "generic.cancel": "Anuluj",
  // BlockType
  "components.controls.blocktype.h1": "Nagłówek 1",
  "components.controls.blocktype.h2": "Nagłówek 2",
  "components.controls.blocktype.h3": "Nagłówek 3",
  "components.controls.blocktype.h4": "Nagłówek 4",
  "components.controls.blocktype.h5": "Nagłówek 5",
  "components.controls.blocktype.h6": "Nagłówek 6",
  "components.controls.blocktype.blockquote": "Cytat",
  "components.controls.blocktype.code": "Kod",
  "components.controls.blocktype.blocktype": "Format",
  "components.controls.blocktype.normal": "Normalny",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Kolor",
  "components.controls.colorpicker.text": "Tekst",
  "components.controls.colorpicker.background": "Tło",
  // Embedded
  "components.controls.embedded.embedded": "Osadź",
  "components.controls.embedded.embeddedlink": "Osadź odnośnik",
  "components.controls.embedded.enterlink": "Wprowadź odnośnik",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Krój czcionki",
  // FontSize
  "components.controls.fontsize.fontsize": "Rozmiar czcionki",
  // History
  "components.controls.history.history": "Historia",
  "components.controls.history.undo": "Cofnij",
  "components.controls.history.redo": "Ponów",
  // Image
  "components.controls.image.image": "Obrazek",
  "components.controls.image.fileUpload": "Prześlij plik",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Upuść plik lub kliknij, aby przesłać",
  // Inline
  "components.controls.inline.bold": "Pogrubienie",
  "components.controls.inline.italic": "Kursywa",
  "components.controls.inline.underline": "Podkreślenie",
  "components.controls.inline.strikethrough": "Przekreślenie",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Indeks górny",
  "components.controls.inline.subscript": "Indeks dolny",
  // Link
  "components.controls.link.linkTitle": "Tytuł odnośnika",
  "components.controls.link.linkTarget": "Adres odnośnika",
  "components.controls.link.linkTargetOption": "Otwórz odnośnik w nowej karcie",
  "components.controls.link.link": "Wstaw odnośnik",
  "components.controls.link.unlink": "Usuń odnośnik",
  // List
  "components.controls.list.list": "Lista",
  "components.controls.list.unordered": "Lista nieuporządkowana",
  "components.controls.list.ordered": "Lista uporządkowana",
  "components.controls.list.indent": "Zwiększ wcięcie",
  "components.controls.list.outdent": "Zmniejsz wcięcie",
  // Remove
  "components.controls.remove.remove": "Usuń",
  // TextAlign
  "components.controls.textalign.textalign": "Wyrównaj tekst",
  "components.controls.textalign.left": "Do lewej",
  "components.controls.textalign.center": "Do środka",
  "components.controls.textalign.right": "Do prawej",
  "components.controls.textalign.justify": "Wyjustuj"
});

/***/ }),

/***/ "./src/i18n/pt.js":
/*!************************!*\
  !*** ./src/i18n/pt.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Ok",
  "generic.cancel": "Cancelar",
  // BlockType
  "components.controls.blocktype.h1": "Título 1",
  "components.controls.blocktype.h2": "Título 2",
  "components.controls.blocktype.h3": "Título 3",
  "components.controls.blocktype.h4": "Título 4",
  "components.controls.blocktype.h5": "Título 5",
  "components.controls.blocktype.h6": "Título 6",
  "components.controls.blocktype.blockquote": "Citação",
  "components.controls.blocktype.code": "Code",
  "components.controls.blocktype.blocktype": "Estilo",
  "components.controls.blocktype.normal": "Normal",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Paleta de cores",
  "components.controls.colorpicker.text": "Texto",
  "components.controls.colorpicker.background": "Fundo",
  // Embedded
  "components.controls.embedded.embedded": "Embarcado",
  "components.controls.embedded.embeddedlink": "Link embarcado",
  "components.controls.embedded.enterlink": "Coloque o link",
  // Emoji
  "components.controls.emoji.emoji": "Emoji",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Fonte",
  // FontSize
  "components.controls.fontsize.fontsize": "Tamanho da Fonte",
  // History
  "components.controls.history.history": "Histórico",
  "components.controls.history.undo": "Desfazer",
  "components.controls.history.redo": "Refazer",
  // Image
  "components.controls.image.image": "Imagem",
  "components.controls.image.fileUpload": "Carregar arquivo",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Arraste uma imagem aqui ou clique para carregar",
  // Inline
  "components.controls.inline.bold": "Negrito",
  "components.controls.inline.italic": "Itálico",
  "components.controls.inline.underline": "Sublinhado",
  "components.controls.inline.strikethrough": "Strikethrough",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Sobrescrito",
  "components.controls.inline.subscript": "Subscrito",
  // Link
  "components.controls.link.linkTitle": "Título do link",
  "components.controls.link.linkTarget": "Alvo do link",
  "components.controls.link.linkTargetOption": "Abrir link em outra janela",
  "components.controls.link.link": "Adicionar Link",
  "components.controls.link.unlink": "Remover link",
  // List
  "components.controls.list.list": "Lista",
  "components.controls.list.unordered": "Sem ordenção",
  "components.controls.list.ordered": "Ordenada",
  "components.controls.list.indent": "Aumentar recuo",
  "components.controls.list.outdent": "Diminuir recuo",
  // Remove
  "components.controls.remove.remove": "Remover",
  // TextAlign
  "components.controls.textalign.textalign": "Alinhamento do texto",
  "components.controls.textalign.left": "À Esquerda",
  "components.controls.textalign.center": "Centralizado",
  "components.controls.textalign.right": "À Direita",
  "components.controls.textalign.justify": "Justificado"
});

/***/ }),

/***/ "./src/i18n/ru.js":
/*!************************!*\
  !*** ./src/i18n/ru.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "Добавить",
  "generic.cancel": "Отменить",
  // BlockType
  "components.controls.blocktype.h1": "Заголовок 1",
  "components.controls.blocktype.h2": "Заголовок 2",
  "components.controls.blocktype.h3": "Заголовок 3",
  "components.controls.blocktype.h4": "Заголовок 4",
  "components.controls.blocktype.h5": "Заголовок 5",
  "components.controls.blocktype.h6": "Заголовок 6",
  "components.controls.blocktype.blockquote": "Цитата",
  "components.controls.blocktype.code": "Код",
  "components.controls.blocktype.blocktype": "Форматирование",
  "components.controls.blocktype.normal": "Обычный",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "Выбор цвета",
  "components.controls.colorpicker.text": "Текст",
  "components.controls.colorpicker.background": "Фон",
  // Embedded
  "components.controls.embedded.embedded": "Встраивание",
  "components.controls.embedded.embeddedlink": "Ссылка в iFrame",
  "components.controls.embedded.enterlink": "Вставьте ссылку",
  // Emoji
  "components.controls.emoji.emoji": "Эмодзи",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "Шрифт",
  // FontSize
  "components.controls.fontsize.fontsize": "Размер шрифта",
  // History
  "components.controls.history.history": "История",
  "components.controls.history.undo": "Отменить",
  "components.controls.history.redo": "Вернуть",
  // Image
  "components.controls.image.image": "Изображение",
  "components.controls.image.fileUpload": "Файлы",
  "components.controls.image.byURL": "URL",
  "components.controls.image.dropFileText": "Переместите в эту область файлы или кликните для загрузки",
  // Inline
  "components.controls.inline.bold": "Жирный",
  "components.controls.inline.italic": "Курсив",
  "components.controls.inline.underline": "Подчеркивание",
  "components.controls.inline.strikethrough": "Зачеркивание",
  "components.controls.inline.monospace": "Monospace",
  "components.controls.inline.superscript": "Верхний индекс",
  "components.controls.inline.subscript": "Нижний индекс",
  // Link
  "components.controls.link.linkTitle": "Текст",
  "components.controls.link.linkTarget": "Адрес ссылки",
  "components.controls.link.linkTargetOption": "Открывать в новом окне",
  "components.controls.link.link": "Ссылка",
  "components.controls.link.unlink": "Убрать ссылку",
  // List
  "components.controls.list.list": "Список",
  "components.controls.list.unordered": "Неупорядоченный",
  "components.controls.list.ordered": "Упорядоченный",
  "components.controls.list.indent": "Отступ",
  "components.controls.list.outdent": "Выступ",
  // Remove
  "components.controls.remove.remove": "Удалить",
  // TextAlign
  "components.controls.textalign.textalign": "Выравнивание текста",
  "components.controls.textalign.left": "Слева",
  "components.controls.textalign.center": "По центру",
  "components.controls.textalign.right": "Справа",
  "components.controls.textalign.justify": "Выравнить"
});

/***/ }),

/***/ "./src/i18n/zh.js":
/*!************************!*\
  !*** ./src/i18n/zh.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "添加",
  "generic.cancel": "取消",
  // BlockType
  "components.controls.blocktype.h1": "标题1",
  "components.controls.blocktype.h2": "标题2",
  "components.controls.blocktype.h3": "标题3",
  "components.controls.blocktype.h4": "标题4",
  "components.controls.blocktype.h5": "标题5",
  "components.controls.blocktype.h6": "标题6",
  "components.controls.blocktype.blockquote": "引用",
  "components.controls.blocktype.code": "源码",
  "components.controls.blocktype.blocktype": "样式",
  "components.controls.blocktype.normal": "正文",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "选色器",
  "components.controls.colorpicker.text": "文字",
  "components.controls.colorpicker.background": "背景",
  // Embedded
  "components.controls.embedded.embedded": "内嵌",
  "components.controls.embedded.embeddedlink": "内嵌网页",
  "components.controls.embedded.enterlink": "输入网页地址",
  // Emoji
  "components.controls.emoji.emoji": "表情符号",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "字体",
  // FontSize
  "components.controls.fontsize.fontsize": "字号",
  // History
  "components.controls.history.history": "历史",
  "components.controls.history.undo": "撤销",
  "components.controls.history.redo": "恢复",
  // Image
  "components.controls.image.image": "图片",
  "components.controls.image.fileUpload": "来自文件",
  "components.controls.image.byURL": "在线图片",
  "components.controls.image.dropFileText": "点击或者拖拽文件上传",
  // Inline
  "components.controls.inline.bold": "粗体",
  "components.controls.inline.italic": "斜体",
  "components.controls.inline.underline": "下划线",
  "components.controls.inline.strikethrough": "删除线",
  "components.controls.inline.monospace": "等宽字体",
  "components.controls.inline.superscript": "上标",
  "components.controls.inline.subscript": "下标",
  // Link
  "components.controls.link.linkTitle": "超链接",
  "components.controls.link.linkTarget": "输入链接地址",
  "components.controls.link.linkTargetOption": "在新窗口中打开链接",
  "components.controls.link.link": "链接",
  "components.controls.link.unlink": "删除链接",
  // List
  "components.controls.list.list": "列表",
  "components.controls.list.unordered": "项目符号",
  "components.controls.list.ordered": "编号",
  "components.controls.list.indent": "增加缩进量",
  "components.controls.list.outdent": "减少缩进量",
  // Remove
  "components.controls.remove.remove": "清除格式",
  // TextAlign
  "components.controls.textalign.textalign": "文本对齐",
  "components.controls.textalign.left": "文本左对齐",
  "components.controls.textalign.center": "居中",
  "components.controls.textalign.right": "文本右对齐",
  "components.controls.textalign.justify": "两端对齐"
});

/***/ }),

/***/ "./src/i18n/zh_tw.js":
/*!***************************!*\
  !*** ./src/i18n/zh_tw.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Generic
  "generic.add": "新增",
  "generic.cancel": "取消",
  // BlockType
  "components.controls.blocktype.h1": "標題1",
  "components.controls.blocktype.h2": "標題2",
  "components.controls.blocktype.h3": "標題3",
  "components.controls.blocktype.h4": "標題4",
  "components.controls.blocktype.h5": "標題5",
  "components.controls.blocktype.h6": "標題6",
  "components.controls.blocktype.blockquote": "引用",
  "components.controls.blocktype.code": "程式碼",
  "components.controls.blocktype.blocktype": "樣式",
  "components.controls.blocktype.normal": "正文",
  // Color Picker
  "components.controls.colorpicker.colorpicker": "選色器",
  "components.controls.colorpicker.text": "文字",
  "components.controls.colorpicker.background": "背景",
  // Embedded
  "components.controls.embedded.embedded": "內嵌",
  "components.controls.embedded.embeddedlink": "內嵌網頁",
  "components.controls.embedded.enterlink": "輸入網頁地址",
  // Emoji
  "components.controls.emoji.emoji": "表情符號",
  // FontFamily
  "components.controls.fontfamily.fontfamily": "字體",
  // FontSize
  "components.controls.fontsize.fontsize": "字體大小",
  // History
  "components.controls.history.history": "歷史紀錄",
  "components.controls.history.undo": "復原",
  "components.controls.history.redo": "重做",
  // Image
  "components.controls.image.image": "圖片",
  "components.controls.image.fileUpload": "檔案上傳",
  "components.controls.image.byURL": "網址",
  "components.controls.image.dropFileText": "點擊或拖曳檔案上傳",
  // Inline
  "components.controls.inline.bold": "粗體",
  "components.controls.inline.italic": "斜體",
  "components.controls.inline.underline": "底線",
  "components.controls.inline.strikethrough": "刪除線",
  "components.controls.inline.monospace": "等寬字體",
  "components.controls.inline.superscript": "上標",
  "components.controls.inline.subscript": "下標",
  // Link
  "components.controls.link.linkTitle": "超連結",
  "components.controls.link.linkTarget": "輸入連結位址",
  "components.controls.link.linkTargetOption": "在新視窗打開連結",
  "components.controls.link.link": "連結",
  "components.controls.link.unlink": "刪除連結",
  // List
  "components.controls.list.list": "列表",
  "components.controls.list.unordered": "項目符號",
  "components.controls.list.ordered": "編號",
  "components.controls.list.indent": "增加縮排",
  "components.controls.list.outdent": "減少縮排",
  // Remove
  "components.controls.remove.remove": "清除格式",
  // TextAlign
  "components.controls.textalign.textalign": "文字對齊",
  "components.controls.textalign.left": "文字向左對齊",
  "components.controls.textalign.center": "文字置中",
  "components.controls.textalign.right": "文字向右對齊",
  "components.controls.textalign.justify": "兩端對齊"
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./src/Editor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/renderer/Embedded/index.js":
/*!****************************************!*\
  !*** ./src/renderer/Embedded/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Embed = function Embed(_ref) {
  var block = _ref.block,
      contentState = _ref.contentState;
  var entity = contentState.getEntity(block.getEntityAt(0));

  var _entity$getData = entity.getData(),
      src = _entity$getData.src,
      height = _entity$getData.height,
      width = _entity$getData.width;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    height: height,
    width: width,
    src: src,
    frameBorder: "0",
    allowFullScreen: true,
    title: "Wysiwyg Embedded Content"
  });
};

Embed.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  contentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Embed);

/***/ }),

/***/ "./src/renderer/Image/index.js":
/*!*************************************!*\
  !*** ./src/renderer/Image/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Option */ "./src/components/Option/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/renderer/Image/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var getImageComponent = function getImageComponent(config) {
  var _class;

  return _class = /*#__PURE__*/function (_Component) {
    _inherits(Image, _Component);

    var _super = _createSuper(Image);

    function Image() {
      var _this;

      _classCallCheck(this, Image);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        hovered: false
      };

      _this.setEntityAlignmentLeft = function () {
        _this.setEntityAlignment('left');
      };

      _this.setEntityAlignmentRight = function () {
        _this.setEntityAlignment('right');
      };

      _this.setEntityAlignmentCenter = function () {
        _this.setEntityAlignment('none');
      };

      _this.setEntityAlignment = function (alignment) {
        var _this$props = _this.props,
            block = _this$props.block,
            contentState = _this$props.contentState;
        var entityKey = block.getEntityAt(0);
        contentState.mergeEntityData(entityKey, {
          alignment: alignment
        });
        config.onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(config.getEditorState(), contentState, 'change-block-data'));

        _this.setState({
          dummy: true
        });
      };

      _this.toggleHovered = function () {
        var hovered = !_this.state.hovered;

        _this.setState({
          hovered: hovered
        });
      };

      return _this;
    }

    _createClass(Image, [{
      key: "renderAlignmentOptions",
      value: function renderAlignmentOptions(alignment) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('rdw-image-alignment-options-popup', {
            'rdw-image-alignment-options-popup-right': alignment === 'right'
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: this.setEntityAlignmentLeft,
          className: "rdw-image-alignment-option"
        }, "L"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: this.setEntityAlignmentCenter,
          className: "rdw-image-alignment-option"
        }, "C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: this.setEntityAlignmentRight,
          className: "rdw-image-alignment-option"
        }, "R"));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            block = _this$props2.block,
            contentState = _this$props2.contentState;
        var hovered = this.state.hovered;
        var isReadOnly = config.isReadOnly,
            isImageAlignmentEnabled = config.isImageAlignmentEnabled;
        var entity = contentState.getEntity(block.getEntityAt(0));

        var _entity$getData = entity.getData(),
            src = _entity$getData.src,
            alignment = _entity$getData.alignment,
            height = _entity$getData.height,
            width = _entity$getData.width,
            alt = _entity$getData.alt;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onMouseEnter: this.toggleHovered,
          onMouseLeave: this.toggleHovered,
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('rdw-image-alignment', {
            'rdw-image-left': alignment === 'left',
            'rdw-image-right': alignment === 'right',
            'rdw-image-center': !alignment || alignment === 'none'
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "rdw-image-imagewrapper"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: src,
          alt: alt,
          style: {
            height: height,
            width: width
          }
        }), !isReadOnly() && hovered && isImageAlignmentEnabled() ? this.renderAlignmentOptions(alignment) : undefined));
      }
    }]);

    return Image;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.propTypes = {
    block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    contentState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }, _class;
};

/* harmony default export */ __webpack_exports__["default"] = (getImageComponent);

/***/ }),

/***/ "./src/renderer/Image/styles.css":
/*!***************************************!*\
  !*** ./src/renderer/Image/styles.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/renderer/index.js":
/*!*******************************!*\
  !*** ./src/renderer/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Embedded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Embedded */ "./src/renderer/Embedded/index.js");
/* harmony import */ var _renderer_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/Image */ "./src/renderer/Image/index.js");



var getBlockRenderFunc = function getBlockRenderFunc(config, customBlockRenderer) {
  return function (block) {
    if (typeof customBlockRenderer === 'function') {
      var renderedComponent = customBlockRenderer(block, config, config.getEditorState);
      if (renderedComponent) return renderedComponent;
    }

    if (block.getType() === 'atomic') {
      var contentState = config.getEditorState().getCurrentContent();
      var entity = contentState.getEntity(block.getEntityAt(0));

      if (entity && entity.type === 'IMAGE') {
        return {
          component: Object(_renderer_Image__WEBPACK_IMPORTED_MODULE_1__["default"])(config),
          editable: false
        };
      } else if (entity && entity.type === 'EMBEDDED_LINK') {
        return {
          component: _Embedded__WEBPACK_IMPORTED_MODULE_0__["default"],
          editable: false
        };
      }
    }

    return undefined;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getBlockRenderFunc);

/***/ }),

/***/ "./src/utils/BlockStyle.js":
/*!*********************************!*\
  !*** ./src/utils/BlockStyle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blockStyleFn; });
// The function will return block inline styles using block level meta-data
function blockStyleFn(block) {
  var blockAlignment = block.getData() && block.getData().get('text-align');

  if (blockAlignment) {
    return "rdw-".concat(blockAlignment, "-aligned-block");
  }

  return '';
}

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: forEach, hasProperty, isEmptyString, isMap, filter, stopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return hasProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
/**
* Utility function to execute callback for eack key->value pair.
*/
function forEach(obj, callback) {
  if (obj) {
    for (var key in obj) {
      // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key, obj[key]);
      }
    }
  }
}
function hasProperty(obj, property) {
  var result = false;

  if (obj) {
    for (var key in obj) {
      // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key) && property === key) {
        result = true;
        break;
      }
    }
  }

  return result;
}
/**
* The function returns true if the string passed to it has no content.
*/

function isEmptyString(str) {
  return !str || !str.trim();
}
/**
* The function will return true for simple javascript object,
* which is not any other built in type like Array.
*/

function isMap(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
* The function will return filter out props fron and return new props.
*/

function filter(obj, keys) {
  var filteredKeys = Object.keys(obj).filter(function (key) {
    return keys.indexOf(key) < 0;
  });
  var filteredObject = {};

  if (filteredKeys && filteredKeys.length > 0) {
    filteredKeys.forEach(function (key) {
      filteredObject[key] = obj[key];
    });
  }

  return filteredObject;
}
function stopPropagation(event) {
  event.stopPropagation();
}

/***/ }),

/***/ "./src/utils/handlePaste.js":
/*!**********************************!*\
  !*** ./src/utils/handlePaste.js ***!
  \**********************************/
/*! exports provided: handlePastedText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePastedText", function() { return handlePastedText; });
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draftjs-utils */ "./node_modules/draftjs-utils/lib/draftjs-utils.js");
/* harmony import */ var draftjs_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draftjs_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);




var handlePastedText = function handlePastedText(text, html, editorState, onChange) {
  var selectedBlock = Object(draftjs_utils__WEBPACK_IMPORTED_MODULE_0__["getSelectedBlock"])(editorState);

  if (selectedBlock && selectedBlock.type === "code") {
    var contentState = draft_js__WEBPACK_IMPORTED_MODULE_1__["Modifier"].replaceText(editorState.getCurrentContent(), editorState.getSelection(), text, editorState.getCurrentInlineStyle());
    onChange(draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].push(editorState, contentState, "insert-characters"));
    return true;
  } else if (html) {
    var contentBlock = html_to_draftjs__WEBPACK_IMPORTED_MODULE_2___default()(html);

    var _contentState = editorState.getCurrentContent();

    contentBlock.entityMap.forEach(function (value, key) {
      _contentState = _contentState.mergeEntityData(key, value);
    });
    _contentState = draft_js__WEBPACK_IMPORTED_MODULE_1__["Modifier"].replaceWithFragment(_contentState, editorState.getSelection(), new immutable__WEBPACK_IMPORTED_MODULE_3__["List"](contentBlock.contentBlocks));
    onChange(draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].push(editorState, _contentState, "insert-characters"));
    return true;
  }

  return false;
};

/***/ }),

/***/ "./src/utils/toolbar.js":
/*!******************************!*\
  !*** ./src/utils/toolbar.js ***!
  \******************************/
/*! exports provided: getFirstIcon, mergeRecursive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstIcon", function() { return getFirstIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRecursive", function() { return mergeRecursive; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/utils/common.js");

/**
 * This function is used when displaying options in drop-down.
 * Icon for first available options is used in drop-down placeholder.
 */

var getFirstIcon = function getFirstIcon(config) {
  return config[config.options[0]].icon;
};
/**
 * The function is used to recursively merge toolbar options.
 * It assumes all the options are peresent in obj1.
 * It recursively merges objects but not arrays.
 */

var mergeRecursive = function mergeRecursive(obj1, obj2) {
  if (obj1 && obj2 === undefined) {
    return obj1;
  }

  var mergedValue = {};
  Object(_common__WEBPACK_IMPORTED_MODULE_0__["forEach"])(obj1, function (key, value) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isMap"])(value)) {
      mergedValue[key] = mergeRecursive(value, obj2[key]);
    } else {
      mergedValue[key] = obj2[key] !== undefined ? obj2[key] : value;
    }
  });
  return mergedValue;
}; // todo: writing test cases for these methods and new methods added in common.js

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/*! exports provided: ensureSafeUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureSafeUrl", function() { return ensureSafeUrl; });
var ATTRIBUTE_WHITESPACES = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g; // eslint-disable-line no-control-regex

var SAFE_URL = /^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;
/**
 * Returns a safe URL based on a given value.
 * A URL is considered safe if it is safe for the user (does not contain any malicious code).
 * If a URL is considered unsafe, a simple `"#"` is returned.
 *
 * Based on: https://github.com/ckeditor/ckeditor5/blob/bce8267e16fccb25448b4c68acc3bf54336aa087/packages/ckeditor5-link/src/utils.js#L63
 */

function ensureSafeUrl(url) {
  var normalizedUrl = String(url).replace(ATTRIBUTE_WHITESPACES, '');
  return normalizedUrl.match(SAFE_URL) ? url : '#';
}

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./src/index ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index */"./src/index.js");


/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_draft_js__;

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-draft-wysiwyg.js.map