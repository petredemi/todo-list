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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTasks: () => (/* binding */ addTasks),\n/* harmony export */   d: () => (/* binding */ d),\n/* harmony export */   daytaskDelete: () => (/* binding */ daytaskDelete),\n/* harmony export */   deleteProjectTasks: () => (/* binding */ deleteProjectTasks),\n/* harmony export */   domTask: () => (/* binding */ domTask),\n/* harmony export */   endDate: () => (/* binding */ endDate),\n/* harmony export */   hiYou: () => (/* binding */ hiYou),\n/* harmony export */   hourDue: () => (/* binding */ hourDue),\n/* harmony export */   n: () => (/* binding */ n),\n/* harmony export */   projectStatus: () => (/* binding */ projectStatus),\n/* harmony export */   projectsList: () => (/* binding */ projectsList),\n/* harmony export */   s: () => (/* binding */ s),\n/* harmony export */   t: () => (/* binding */ t),\n/* harmony export */   taskBackground: () => (/* binding */ taskBackground),\n/* harmony export */   taskStatus: () => (/* binding */ taskStatus),\n/* harmony export */   tasksList: () => (/* binding */ tasksList)\n/* harmony export */ });\n\n\n\n\n\nfunction hiYou(){\n    console.log('how are you');\n}\n//add projects\nconst projectsList = ['item'];\nconst tasksList = ['item'];\n\nconst n = document.querySelector('#projectTitle');\nconst s = document.querySelector('#startDate');\nconst endDate = document.querySelector('#startDate');\nconst projectStatus = document.querySelector('#projectStatus');\n\nfunction addProject(){ //add projects items\n    function createProject(name){ //create  project object with factory function\n      name = n.value;\n      const start = s.value;\n      const end = endDate.value;\n      const status = projectStatus.checked;\n      const projectTasks = [];\n\n      return { name, start, end, status, projectTasks};\n    }\n\n    const item = createProject(n.value);\n    projectsList.push(item);\n    projectsList.sort((start1, start2) => {\n      if (start1.start < start2.start) return -1;\n      if (start1.start > start2.start) return 1;\n        return 0;\n      });\n}\n//add todo tasks\nconst t = document.querySelector('#title');\nconst d = document.querySelector('#date');\nconst hourDue = document.querySelector('#hourDue');\nconst taskStatus = document.querySelector('#taskStatus');\nfunction addTasks(x){ //add to do items\n    function createTask(title){ //create task object with factory function\n      title = t.value;\n      const date = d.value;\n      const hour = hourDue.value;\n      const status = taskStatus.checked;\n    return { title, date, hour, status};\n  }\n      const item = createTask();\n      if ( x == undefined){ \n          tasksList.push(item);\n          tasksList.sort((hour1, hour2) => {\n             if ( hour1.hour < hour2.hour) return -1;\n            if (  hour1.hour > hour2.hour) return 1;\n          return 0;\n       }); \n        }\n      if ( x !== undefined ){ \n        projectsList[x].projectTasks.push(item);\n        projectsList[x].projectTasks.sort((date1, date2) => {\n          if ( date1.date < date2.date) return -1;\n          if (  date1.date > date2.date) return 1;\n          return 0;\n    });\n      };\n  };\n\nfunction domTask(){ //create dom task for each project\n      const todo = document.createElement('div');\n      const todo1 = document.createElement('div');\n      const todo2 = document.createElement('div');\n      const h3 = document.createElement('h3');\n      const btn1 = document.createElement('button');\n\n      todo.classList.add('todo');\n      todo1.classList.add('todo1');\n      todo2.classList.add('task_list');\n      btn1.setAttribute('type', 'submit');\n      btn1.setAttribute('open-data-modal', '');\n      btn1.classList.add('project-task-form', 'btn');\n      btn1.textContent = '+';\n      h3.textContent = 'to do list';\n      todo1.append(h3, btn1);\n      todo.append(todo1, todo2);\n      return todo;\n    };\n//task remove button\n\n\nfunction taskBackground(){     //change background for each current day task by mouse over\n      let task = document.querySelectorAll('#task_list > div.task');\n      let checkbox = document.querySelectorAll('#task_list > div.task input.check');\n      let done  = document.querySelectorAll('#task_list > div.task div.done');\n      let activ = document.querySelectorAll('#task_list > div.task div.activ');\n\n        task.forEach((node, index) => node.addEventListener('mouseover', (e) => {\n          let check = checkbox[index].checked;\n          if(check == false){\n        task[index].setAttribute('style', 'background-color: lightyellow');\n          }\n         // checkbox[index] ==false)\n      }));\n      task.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n        let check = checkbox[index].checked;\n        if(check == false){\n         task[index].setAttribute('style' , 'background-color: none');\n        }\n      \n      }));\n      checkbox.forEach((node, index) => node.addEventListener('change', (e) => {\n          console.log(checkbox[index].checked);\n          if ( checkbox[index].checked == true){\n            task[index].setAttribute('style', 'background-color: green; color: white');\n            done[index].setAttribute('style', 'display: block');\n            activ[index].setAttribute('style', 'display: none');\n            console.log(tasksList);\n          } else if(checkbox[index].checked == false){\n            task[index].setAttribute('style', 'background-color: none');\n            done[index].setAttribute('style', 'display: none');\n            activ[index].setAttribute('style', 'display: block');\n          }\n      }));\n  }\n \n  function deleteProjectTasks(){\n    let  btn = document.querySelectorAll('div.todo > div.task_list > div.task > button') // list del btn for task project\n    let  task = document.querySelectorAll('div.item1 > div.todo > div.task_list > div.task'); \n    let  tsklist = document.querySelectorAll('div.task_list');// get index for each project task list\n    function checkIndex(div){\n      if(div.style.backgroundColor == 'lightyellow'){\n         return div;\n      }\n   }\n      btn.forEach((button, index) => button.addEventListener('mouseenter', (e) => {\n          btn[index].setAttribute( 'style', 'background-color: green');\n      }));\n      btn.forEach((button, index) => button.addEventListener('mouseleave', (e) => {\n        btn[index].setAttribute( 'style', 'background-color: none');\n      }));\n  \n  \n  let indextsk; // index of child task\n  let arrT; // arrey for children\n  let indexP; // project index\n      tsklist.forEach((node, index ) => node.addEventListener('mouseenter', (e) => {\n        console.log(index);\n        indexP = index;\n            arrT = Array.from(tsklist[index].children);\n            console.log(arrT);\n      })); \n      btn.forEach((node, index) => node.addEventListener('click', (e) => {\n        let abc = tsklist[indexP].children[indextsk];\n        indextsk = arrT.findIndex(checkIndex);\n          console.log(indextsk + 'fefefe');\n          console.log(indexP + '  www')\n          console.log(abc);\n          if ( btn[index].style.backgroundColor == 'green'){\n          task[index].remove();\n          arrT.splice(indextsk, 1);\n          }\n          projectsList[indexP].projectTasks.splice(indextsk, 1);\n          console.log(arrT);\n          console.log(projectsList[indexP]);\n        }));\n\n      }\n  \n  function daytaskDelete(){ //remove button , change color \n        let removeindex;  //remove index;\n        let node1 = document.querySelectorAll('#task_list button');\n        let node2 = document.querySelectorAll('#task_list > div.task');\n      \n         node1.forEach((node, index) => node.addEventListener('mouseover', (e) => {\n             removeindex = index;\n             node1[index].setAttribute('style' , 'background-color: yellow');\n          }));\n      \n         node1.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n              node1[index].setAttribute('style' , 'background-color: none');\n         }));\n      \n         node1.forEach((node, index) => node.addEventListener('click', (e) => {\n             node2[removeindex].remove();\n             tasksList.splice(removeindex, 1);\n             return node2;\n      \n          }));\n      };\n      \n\n\n//# sourceURL=webpack://todo-list/./src/functions.js?");

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