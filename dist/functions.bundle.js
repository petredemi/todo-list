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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItems: () => (/* binding */ addItems),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   d: () => (/* binding */ d),\n/* harmony export */   domTask: () => (/* binding */ domTask),\n/* harmony export */   endDate: () => (/* binding */ endDate),\n/* harmony export */   hiYou: () => (/* binding */ hiYou),\n/* harmony export */   hourDue: () => (/* binding */ hourDue),\n/* harmony export */   n: () => (/* binding */ n),\n/* harmony export */   projectStatus: () => (/* binding */ projectStatus),\n/* harmony export */   projectsList: () => (/* binding */ projectsList),\n/* harmony export */   s: () => (/* binding */ s),\n/* harmony export */   t: () => (/* binding */ t),\n/* harmony export */   taskBackground: () => (/* binding */ taskBackground),\n/* harmony export */   taskDelBtn: () => (/* binding */ taskDelBtn),\n/* harmony export */   taskStatus: () => (/* binding */ taskStatus),\n/* harmony export */   tasksList: () => (/* binding */ tasksList)\n/* harmony export */ });\n\n\n\n\n\nfunction hiYou(){\n    console.log('how are you');\n}\n//add projects\nconst projectsList = ['item'];\nconst tasksList = ['item'];\n\nconst n = document.querySelector('#projectTitle');\nconst s = document.querySelector('#startDate');\nconst endDate = document.querySelector('#startDate');\nconst projectStatus = document.querySelector('#projectStatus');\n\nfunction addProject(){ //add projects items\n    function createProject(name){ //create  project object with factory function\n      name = n.value;\n      const start = s.value;\n      const end = endDate.value;\n      const status = projectStatus.checked;\n      const projectTasks = [];\n\n      return { name, start, end, status, projectTasks};\n    }\nconst item = createProject(n.value);\nprojectsList.push(item);\nprojectsList.sort((start1, start2) => {\n   if (start1.start < start2.start) return -1;\n   if (start1.start > start2.start) return 1;\n    return 0;\n  });\n}\n//add todo tasks\nconst t = document.querySelector('#title');\nconst d = document.querySelector('#date');\nconst hourDue = document.querySelector('#hourDue')\nconst taskStatus = document.querySelector('#taskStatus');\n\nfunction addItems(){ //add to do items\n    function createTask(title){ //create task object with factory function\n      title = t.value;\n      const date = d.value;\n      const hour = hourDue.value;\n      const status = taskStatus.checked;\n    return { title, date, hour, status};\n  }\n  const item = createTask();\n  tasksList.push(item);\n  tasksList.sort((hour1, hour2) => {\n    if ( hour1.hour < hour2.hour) return -1;\n    if (  hour1.hour > hour2.hour) return 1;\n    return 0;\n  });\n}\n\nfunction domTask(){ //create dom task for each project\n      const todo = document.createElement('div');\n      const todo1 = document.createElement('div');\n      const todo2 = document.createElement('div');\n      const h3 = document.createElement('h3');\n      const btn1 = document.createElement('button');\n\n      todo.classList.add('todo');\n      todo1.classList.add('todo1');\n      todo2.classList.add('task_list');\n      btn1.setAttribute('type', 'submit');\n      btn1.setAttribute('open-data-modal', '');\n      btn1.classList.add('project-task-form', 'btn');\n      btn1.textContent = '+';\n      h3.textContent = 'to do list';\n      todo1.append(h3, btn1);\n      todo.append(todo1, todo2);\n      return todo;\n}\n\n//task remove button\nlet index1;  //remove index\nfunction removeT(x){ //remove task function \n      x[index1].remove();\n}\n\nlet node1 = document.querySelectorAll('#task_list > div.task');\nlet node2 = document.querySelectorAll('#task_list button');\nfunction taskBackground(){     //change background for each task by mouse over\n      node1 = document.querySelectorAll('#task_list > div.task');\n\n      node1.forEach((node, index) => node.addEventListener('mouseover', (e) => {\n        node1[index].setAttribute('style', 'background-color: green');\n      }));\n      node1.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n        node1[index].setAttribute('style' , 'background-color: none');\n      }));\n  }\n  \n  function taskDelBtn(){ //remove button , change color \n     //  node3 = document.querySelectorAll('#projects-list > div.item1 > div.todo');\n       node1 = document.querySelectorAll('#task_list > div.task');\n       node2 = document.querySelectorAll('#task_list button');\n       node2.forEach((node, index) => node.addEventListener('mouseover', (e) => {\n         index1 = index;\n         node2[index].setAttribute('style' , 'background-color: yellow');\n       }));\n     \n       node2.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n           node2[index].setAttribute('style' , 'background-color: none');\n       }));\n\n       node2.forEach((node, index) => node.addEventListener('click', (e) => {\n        removeT(node1);\n        tasksList.splice(index1, 1);\n        console.table(tasksList);\n        node1 = document.querySelectorAll('#task_list > div.task');\n\n       }));\n\n    }\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/functions.js?");

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