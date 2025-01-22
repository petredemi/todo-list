/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeDayTask: () => (/* binding */ removeDayTask)\n/* harmony export */ });\n/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/search.svg */ \"./src/icons/search.svg\");\n\n\n\nconst searchicon = new Image()\nsearchicon.src = _icons_search_svg__WEBPACK_IMPORTED_MODULE_0__\nconst lin = document.querySelector('div.lin')\nlin.addEventListener(('click'), (e) => {\n})\n\nfunction removeDayTask(tl, y){ //remove project button , change color \n    let task = document.querySelectorAll('#task_list > div.task');\n    let j; // find index of task\n    let l; //task list lengt\n    //tl task list\n    // y arrey from delete buttons\n    function lookIndexButton(button){\n            if( button.style.backgroundColor == 'yellow'){\n            return button;\n            }\n        }\n    y.forEach(button => button.addEventListener('mouseover', (e) => {\n           j = y.findIndex(lookIndexButton);\n           l = tl.length - 1;\n     }));\n     y.forEach(item => item.addEventListener('click', (e) => { //remove task\n          if (y[j].style.backgroundColor == 'yellow'){\n            tl.splice(j, 1);\n            y.splice(j, 1);\n          for ( let i = 0; i <= l; i++){\n                localStorage.setItem( `tsk${i}`, JSON.stringify(tl[i]));\n                  }\n            localStorage.removeItem(`tsk${l}`);\n            }\n        task[j].remove();\n        task = document.querySelectorAll('#task_list > div.task');\n  \n      }));\n    }\n\n    let weathericon = document.querySelector('#weathericon');\n    let nodata = document.querySelector('#nodata');\n    let temp = document.querySelector('div.temp');\n    const motto = document.querySelector('div.motto')\n    let lookfor = document.querySelector('#lookfor')\n   // lookfor.appendChild(searchicon)\n    let location = document.querySelector('#location')\n    //let loc = 'London'\n    let loc = JSON.parse(localStorage.getItem('weather'));\n    location.value = loc\n\n async function dayWeather(){\n  try{\n      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=69b808bac1c14633a67231851242404&q=${loc}`,{mode: \"cors\",})\n      const weatherdata = await response.json()\n      if(!response.ok){\n        throw 'no data'\n      }\n   //   console.log('https:' + weatherdata.current.condition.icon)\n      weathericon.src = 'https:' + weatherdata.current.condition.icon;\n      temp.textContent = weatherdata.current.temp_c + '  ºC';\n      localStorage.setItem('weather', JSON.stringify(location.value));\n  }catch(error){\n    nodata.textContent = error;\n    //console.log(error)\n    };\n}\ndayWeather()\nlookfor.addEventListener('click', (e) => {\n  if( location.value === '')return\n  loc = location.value\n  dayWeather()\n})\nlocation.addEventListener('click', (e) => {\n   location.value = ''\n})\n\nlet wondername = document.querySelector('div.wondername');\nlet wonderlocation = document.querySelector('p.wonderlocation')\nlet wonderimg = document.querySelector('#wonderimg')\nasync function dayMotto(){\n  try{\n      const response = await fetch('https://www.world-wonders-api.org/v0/wonders/random',{mode: \"cors\",})\n      const mottoData = await response.json()\n      if(!response.ok){\n        throw 'no data'\n      }\n      wonderimg.src = mottoData.links.images[0];\n      wondername.textContent = mottoData.name\n      motto.textContent = mottoData.summary;\n      wonderlocation.textContent = 'location:' + mottoData.location\n  }catch(error){\n  //  nodata.textContent = error;\n   // console.log(error)\n  };\n}\ndayMotto()\n\n//# sourceURL=webpack://todo-list/./src/print.js?");

/***/ }),

/***/ "./src/icons/search.svg":
/*!******************************!*\
  !*** ./src/icons/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/f9705ffe407455bd10ed.svg\";\n\n//# sourceURL=webpack://todo-list/./src/icons/search.svg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/print.js");
/******/ 	
/******/ })()
;