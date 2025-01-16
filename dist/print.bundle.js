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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeDayTask: () => (/* binding */ removeDayTask)\n/* harmony export */ });\n\n\n\nfunction removeDayTask(tl, y){ //remove project button , change color \n    let task = document.querySelectorAll('#task_list > div.task');\n    let j; // find index of task\n    let l; //task list lengt\n    //tl task list\n    // y arrey from delete buttons\n    function lookIndexButton(button){\n            if( button.style.backgroundColor == 'yellow'){\n            return button;\n            }\n        }\n    y.forEach(button => button.addEventListener('mouseover', (e) => {\n           j = y.findIndex(lookIndexButton);\n           l = tl.length - 1;\n     }));\n     y.forEach(item => item.addEventListener('click', (e) => { //remove task\n          if (y[j].style.backgroundColor == 'yellow'){\n            tl.splice(j, 1);\n            y.splice(j, 1);\n          for ( let i = 0; i <= l; i++){\n                localStorage.setItem( `tsk${i}`, JSON.stringify(tl[i]));\n                  }\n            localStorage.removeItem(`tsk${l}`);\n            }\n        task[j].remove();\n        task = document.querySelectorAll('#task_list > div.task');\n  \n      }));\n    }\n\n    let weathericon = document.querySelector('#weathericon');\n    let nodata = document.querySelector('#nodata');\n    let temp = document.querySelector('div.temp');\n    const motto = document.querySelector('div.motto')\n    let lookfor = document.querySelector('#lookfor')\n    let location = document.querySelector('#location')\n    let loc = 'London'\n async function dayWeather(){\n  try{\n      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=69b808bac1c14633a67231851242404&q=${loc}`,{mode: \"cors\",})\n      const weatherdata = await response.json()\n      if(!response.ok){\n        throw 'no data'\n      }\n   //   console.log('https:' + weatherdata.current.condition.icon)\n      weathericon.src = 'https:' + weatherdata.current.condition.icon;\n      temp.textContent = weatherdata.current.temp_c + '  ºC';\n  }catch(error){\n    nodata.textContent = error;\n    //console.log(error)\n    };\n}\ndayWeather()\nlookfor.addEventListener('click', (e) => {\n  if( location.value === '')return\n  loc = location.value\n  dayWeather()\n})\nlocation.addEventListener('click', (e) => {\n   location.value = ''\n})\n\nlet wondername = document.querySelector('div.wondername');\nlet wonderlocation = document.querySelector('p.wonderlocation')\nlet wonderimg = document.querySelector('#wonderimg')\nasync function dayMotto(){\n  try{\n      const response = await fetch('https://www.world-wonders-api.org/v0/wonders/random',{mode: \"cors\",})\n      const mottoData = await response.json()\n      if(!response.ok){\n        throw 'no data'\n      }\n   //   console.log(mottoData)\n      wonderimg.src = mottoData.links.images[1];\n      wondername.textContent = mottoData.name\n      motto.textContent = mottoData.summary;\n      wonderlocation.textContent = 'location:' + mottoData.location\n  }catch(error){\n  //  nodata.textContent = error;\n   // console.log(error)\n  };\n}\ndayMotto()\n\n\n//# sourceURL=webpack://todo-list/./src/print.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/print.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;