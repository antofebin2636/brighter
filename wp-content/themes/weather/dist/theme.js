/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/theme.scss":
/*!*******************************!*\
  !*** ./src/styles/theme.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"theme.css\");\n\n//# sourceURL=webpack://wordpress-starter/./src/styles/theme.scss?");

/***/ }),

/***/ "./src/scripts/modules/weather.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/weather.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\nfunction init() {\n    const citi = document.querySelector(\"#cities\");\n    const day = document.querySelector(\".date\");\n    const time = document.querySelector(\".time\");\n    const city = document.querySelector(\".date\");\n    const date = document.querySelector(\".weather__date\");\n    const status = document.querySelector(\".weather__now\");\n    const humidity = document.querySelector(\".weather__hum\");\n    const wind = document.querySelector(\".wind\");\n    const currentDeg = document.querySelector(\".deg_cur\");\n    const maxDeg = document.querySelector(\".max__deg\");\n    const img = document.querySelector(\".img\");\n    const de = document.querySelector(\".deg\");\n\n    const today = new Date();\n    const dd = String(today.getDate()).padStart(2, \"0\");\n    const mm = String(today.getMonth() + 1).padStart(2, \"0\"); //January is 0!\n    const yyyy = today.getFullYear();\n\n    var weekday = new Array(7);\n    weekday[0] = \"Sunday\";\n    weekday[1] = \"Monday\";\n    weekday[2] = \"Tuesday\";\n    weekday[3] = \"Wednesday\";\n    weekday[4] = \"Thursday\";\n    weekday[5] = \"Friday\";\n    weekday[6] = \"Saturday\";\n\n    const monthNames = [\n        \"January\",\n        \"February\",\n        \"March\",\n        \"April\",\n        \"May\",\n        \"June\",\n        \"July\",\n        \"August\",\n        \"September\",\n        \"October\",\n        \"November\",\n        \"December\",\n    ];\n\n    var days = weekday[today.getDay()];\n\n    citi.addEventListener(\"change\", function(e) {\n        var value = this.value;\n        const apiKey = \"337bf8da40547bdab99bdb425c4fa034\";\n\n        fetch(\n                `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`\n            )\n            .then((response) => {\n                return response.json();\n            })\n            .then((data) => {\n                // Work with JSON data here\n                if (data.cod != 404) {\n                    de.style.display = \"block\";\n\n                    day.textContent = days;\n                    img.src = \"\";\n                    date.textContent =\n                        dd + \" \" + monthNames[today.getMonth()] + \" \" + yyyy;\n                    time.textContent = new Date().toTimeString().split(\" \")[0];\n                    currentDeg.textContent = Math.round(data.main.temp);\n                    status.textContent = data.weather[0].description;\n                    humidity.textContent = \"Humaidity: \" + data.main.humidity + \"%\";\n                    wind.textContent = \"Wind: \" + data.wind.speed + \" km/hr\";\n                    maxDeg.textContent = Math.round(data.main.temp_max);\n                    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;\n                } else {\n                    de.style.display = \"none\";\n\n                    day.textContent = \"\";\n                    img.src = \"\";\n                    date.textContent = \"\";\n                    time.textContent = \"\";\n                    currentDeg.textContent = \"\";\n                    status.textContent = \"\";\n                    humidity.textContent = \"\";\n                    wind.textContent = \"\";\n                    maxDeg.textContent = \"\";\n                    img.src = \"\";\n                }\n            })\n            .catch((err) => {\n                // Do something for an error here\n            });\n    });\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/weather.js?");

/***/ }),

/***/ "./src/scripts/modules sync recursive ^\\.\\/.*$":
/*!********************************************!*\
  !*** ./src/scripts/modules/ sync ^\.\/.*$ ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./weather\": \"./src/scripts/modules/weather.js\",\n\t\"./weather.js\": \"./src/scripts/modules/weather.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/scripts/modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/scripts/theme.js":
/*!******************************!*\
  !*** ./src/scripts/theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_theme_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/theme.scss */ \"./src/styles/theme.scss\");\n\n\n/* ----------------------------------------------------------------------\n| 📦 Modules - dynamically imported modules\n|--------------------------------------------------------------------- */\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    document.querySelectorAll(\"[data-module]\").forEach((el) => {\n        const name = el.getAttribute(\"data-module\");\n        const moduleInit = __webpack_require__(\"./src/scripts/modules sync recursive ^\\\\.\\\\/.*$\")(`./${name}`).default;\n        // console.log(name);\n        moduleInit({ el });\n    });\n});\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/theme.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/theme.js");
/******/ 	
/******/ })()
;