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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callDialog: () => (/* binding */ callDialog),\n/* harmony export */   colorProjects: () => (/* binding */ colorProjects),\n/* harmony export */   colorProjectsTask: () => (/* binding */ colorProjectsTask),\n/* harmony export */   dialogProject: () => (/* binding */ dialogProject),\n/* harmony export */   dialogTask: () => (/* binding */ dialogTask),\n/* harmony export */   showTask: () => (/* binding */ showTask)\n/* harmony export */ });\n\n\nfunction showTask(){ //show and hide tasks for each project\n  let click = true;\n  let indexproj;\n  let project = document.querySelectorAll('div.item1 > div.project');\n  let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.project input.check');\n  let todo = document.querySelectorAll('div.item1 > div.todo');\n\n      checkbox.forEach((node, index) => node.addEventListener('mouseenter', (e) => {\n            indexproj = true;\n      }));\n      checkbox.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n        indexproj = false;\n       }));\n\n      project.forEach((node, index) => node.addEventListener('click', (e) => {\n        if (indexproj == true) return;\n         if( click == true){\n              todo[index].setAttribute('style', 'display: block');\n           click = false;\n          }\n          else if( click == false){\n              todo[index].setAttribute('style', 'display: none');\n              click = true;\n          }\n        }));\n    }\n\n    function time(){\n      const currentDate = document.querySelector('.currentDate');\n      const currentHour = document.querySelector('.currentHour');\n      const d = new Date();\n      const day = d.getDate();\n      const month = d.getMonth() + 1;\n      const year = d.getUTCFullYear();\n      const hour = d.getHours();\n      const min = d.getMinutes();\n      const sec = d.getSeconds();\n      currentDate.textContent = 'Date: ' + day +'.' + month + '.' + year ;\n      currentHour.textContent = 'Time: ' + hour + ':' + min + ':' + sec;\n    }\n    setInterval(time, 1000);\n\n    const dialogProject = document.querySelector('#dialog-project');\n    const dialogTask = document.querySelector('#dialog-task');\n    const taskDate = document.querySelector('#disply');\n    \n  function callDialog(){  // for projects and dayly tasks only\n        const callProjectForm = document.querySelector('#call-project-form'); //button\n        const callDayTask = document.querySelector('#call-task-form');\n\n        callDayTask.addEventListener('click', (e) => {\n              taskDate.setAttribute('style', 'display: none');\n              dialogTask.showModal()\n        });\n          callProjectForm.addEventListener('click', () => {\n              dialogProject.showModal();\n          });\n  }\n\n  function colorProjects(){     //change background for each project by mouse over\n        let project = document.querySelectorAll('#projects-list > div.item1 > div.project');\n        let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.project input.check');\n        let done  = document.querySelectorAll('#projects-list > div.item1 > div.project div.done');\n        let activ = document.querySelectorAll('#projects-list > div.item1 > div.project div.activ');\n       \n        project.forEach((node, index) => node.addEventListener('mouseover', (e) => {\n          let check = checkbox[index].checked;\n          if(check == false){\n                project[index].setAttribute('style', 'background-color: grey');\n          }\n        }));\n        project.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n          let check = checkbox[index].checked;\n          if(check == false){\n              project[index].setAttribute('style' , 'background-color: none');\n          }\n        }));\n        checkbox.forEach((node, index) => node.addEventListener('change', (e) => {\n          console.log(checkbox[index].checked);\n//          localStorage.setItem(`prj${index}`, JSON.stringify(projectsList[index]));\n          if ( checkbox[index].checked == true){\n              project[index].setAttribute('style', 'background-color: darkcyan; color: white');\n              done[index].setAttribute('style', 'display: block');\n              activ[index].setAttribute('style', 'display: none');\n          } else if(checkbox[index].checked == false){\n              project[index].setAttribute('style', 'background-color: none');\n              done[index].setAttribute('style', 'display: none');\n              activ[index].setAttribute('style', 'display: block');\n          }\n      }));\n    }\nfunction colorProjectsTask(){     //change background for each project by mouse over\n  let task = document.querySelectorAll('#projects-list > div.item1 > div.todo div.task');\n  let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.todo input.check');\n  let done  = document.querySelectorAll('#projects-list > div.item1 > div.todo div.done');\n  let activ = document.querySelectorAll('#projects-list > div.item1 > div.todo div.activ');\n\n  task.forEach((node, index) => node.addEventListener('mouseover', (e) => {\n    let check = checkbox[index].checked;\n    if(check == false){\n          task[index].setAttribute('style', 'background-color: lightyellow');\n    }\n  }));\n  task.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n    let check = checkbox[index].checked;\n    if(check == false){\n        task[index].setAttribute('style' , 'background-color: none');\n    }\n  }));\n  checkbox.forEach((node, index) => node.addEventListener('change', (e) => {\n    console.log(checkbox[index].checked);\n    if ( checkbox[index].checked == true){\n        task[index].setAttribute('style', 'background-color: mediumseagreen; color: white');\n        done[index].setAttribute('style', 'display: block');\n        activ[index].setAttribute('style', 'display: none');\n    } else if(checkbox[index].checked == false){\n        task[index].setAttribute('style', 'background-color: none');\n        done[index].setAttribute('style', 'display: none');\n        activ[index].setAttribute('style', 'display: block');\n      }\n}));\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/others.js?");

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