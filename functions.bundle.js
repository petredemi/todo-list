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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItems: () => (/* binding */ addItems),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   backgroundDiv: () => (/* binding */ backgroundDiv),\n/* harmony export */   d: () => (/* binding */ d),\n/* harmony export */   endDate: () => (/* binding */ endDate),\n/* harmony export */   hiYou: () => (/* binding */ hiYou),\n/* harmony export */   hourDue: () => (/* binding */ hourDue),\n/* harmony export */   n: () => (/* binding */ n),\n/* harmony export */   projectStatus: () => (/* binding */ projectStatus),\n/* harmony export */   projectsList: () => (/* binding */ projectsList),\n/* harmony export */   removeTask: () => (/* binding */ removeTask),\n/* harmony export */   s: () => (/* binding */ s),\n/* harmony export */   t: () => (/* binding */ t),\n/* harmony export */   taskStatus: () => (/* binding */ taskStatus),\n/* harmony export */   tasksList: () => (/* binding */ tasksList)\n/* harmony export */ });\n\n\n\n\nfunction hiYou(){\n    console.log('how are you');\n}\n//add projects\nconst projectsList = ['item'];\nconst tasksList = ['item'];\n\nconst n = document.querySelector('#projectTitle');\nconst s = document.querySelector('#startDate');\nconst endDate = document.querySelector('#startDate');\nconst projectStatus = document.querySelector('#projectStatus');\n\nfunction addProject(){ //add projects items\n    function createProject(name){ //create  project object with factory function\n      name = n.value;\n      const start = s.value;\n      const end = endDate.value;\n      const status = projectStatus.checked;\n      tasksList;\n      return { name, start, end, status, tasksList};\n    }\n    const item = createProject();\n    projectsList.push(item);\n}\n\n//add todo tasks\nconst t = document.querySelector('#title');\nconst d = document.querySelector('#date');\nconst hourDue = document.querySelector('#hourDue')\nconst taskStatus = document.querySelector('#taskStatus');\n\nfunction addItems(){ //add to do items\n    function createTask(title){ //create object with factory function\n     title = t.value;\n     const date = d.value;\n     const hour = hourDue.value;\n     const status = taskStatus.checked;\n    return { title, date, hour, status};\n  }\n  const item = createTask();\n  tasksList.push(item);\n}\n\nlet arrTask = Array.from(document.querySelectorAll('#task_list > div.task'));\nlet indexTask;\n\nfunction backgroundDiv(){\n      let click = true;\n        arrTask = Array.from(document.querySelectorAll('#task_list > div.task'));\n        arrTask.forEach((div) => div.addEventListener('mouseover', (e) => {\n     //   if ( click == true){\n          div.setAttribute('style', 'background-color: grey');\n     //   }\n        }));\n        arrTask.forEach((div) => div.addEventListener('mouseleave', (e) => {\n   //       if ( click == true){\n          div.removeAttribute('style');\n          click = true;\n       //   }\n          \n        }));\n      arrTask.forEach((div) => div.addEventListener( 'click', (e) => {\n        function checkIndex(div){\n              if(div.style.backgroundColor == 'red'){\n                return div; \n          }} \n              if(click == true){ \n                div.style.backgroundColor = 'red'; \n                indexTask = arrTask.findIndex(checkIndex);\n                click = false;\n              }\n              else if (click == false){\n          //      div.setAttribute('style', 'background-color: grey');\n                click = true;\n              }\n              console.log(indexTask);\n              console.log(click);\n        }));\n      }\n      backgroundDiv();\n\n  function removeTask(){\n    if( indexTask == undefined) return;\n          tasksList.splice(indexTask, 1);\n          arrTask[indexTask].remove(indexTask);\n          arrTask.splice(indexTask, 1);\n          indexTask = undefined;\n    }\n\n\n\n\n\n\n\n/*\n  //    delProject.forEach((button) => button.addEventListener('mouseup', (e) => {\n  //  removeProject();\n    //    j = j -1;\n\n      //  button.style.backgroundColor = '';\n   // }))\n   function deleteProject(){\n    projectsList.splice(indexDel, 1);\n    projects[indexDel].remove(indexDel);\n    delProject[indexDel].remove(indexDel);\n    projects.splice(indexDel, 1);\n    delProject.splice(indexDel, 1);\n    console.log(indexDel);\n  }\n  function del1(){\n    delProject = Array.from(document.querySelectorAll('#projects-list button'));\n    projects = Array.from(document.querySelectorAll('#projects-list > div.project'));\n\n      delProject.forEach((button) => button.addEventListener('click', (e) => {\n        removeProject();\n          deleteProject();\n\n      }));\n  \n    }\n*/\n\n\n\n//# sourceURL=webpack://todo-list/./src/functions.js?");

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
/******/ 	__webpack_modules__["./src/functions.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;