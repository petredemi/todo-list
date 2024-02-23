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

/***/ "./src/others.js":
/*!***********************!*\
  !*** ./src/others.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callDialog: () => (/* binding */ callDialog),\n/* harmony export */   dialogProject: () => (/* binding */ dialogProject),\n/* harmony export */   dialogTask: () => (/* binding */ dialogTask),\n/* harmony export */   showTask: () => (/* binding */ showTask)\n/* harmony export */ });\n\n\n\nfunction showTask(){ //show and hide task for project\n  let click = true;\n  let project = document.querySelectorAll('div.item1 > div.project');\n  let todo = document.querySelectorAll('div.item1 > div.todo');\n        project.forEach((node, index) => node.addEventListener('click', (e) => {\n         if( click == true){\n              todo[index].setAttribute('style', 'background-color: yellow');\n              todo[index].setAttribute('style', 'display: block');\n           click = false;\n          }\n          else if( click == false){\n              project = document.querySelectorAll('div.item1 > div.project');\n              todo[index].setAttribute('style', 'background-color: none')\n              todo[index].setAttribute('style', 'display: none');\n           click = true;\n          }\n  \n        }));\n    }\n\n    function time(){\n      const currentDate = document.querySelector('.currentDate');\n      const currentHour = document.querySelector('.currentHour');\n      const d = new Date();\n      const day = d.getDate();\n      const month = d.getMonth() + 1;\n      const year = d.getUTCFullYear();\n      const hour = d.getHours();\n      const min = d.getMinutes();\n      const sec = d.getSeconds();\n      currentDate.textContent = day +'.' + month + '.' + year ;\n      currentHour.textContent = hour + ':' + min + ':' + sec;\n    }\n    setInterval(time, 1000);\n\n    const dialogProject = document.querySelector('#dialog-project');\n    const dialogTask = document.querySelector('#dialog-task');\n   // let callTaskForm = document.querySelectorAll('div.item1 button.project-task-form');\n\n  function callDialog(){\n        \n        const callProjectForm = document.querySelector('#call-project-form'); //button\n    //    callTaskForm = document.querySelectorAll('div.item1 button.project-task-form');\n        let callDayTask = document.querySelector('#call-task-form');\n        \n          callProjectForm.addEventListener('click', () => {\n            dialogProject.showModal(); \n          });\n          callDayTask.addEventListener('click', (e) => {\n              dialogTask.showModal();\n          })\n  //        callTaskForm.forEach(( node, index) => node.addEventListener('click', () => {\n    //          dialogTask.showModal();\n      //    }));\n  }\n  \n\n//# sourceURL=webpack://todo-list/./src/others.js?");

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
/******/ 	__webpack_modules__["./src/others.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;