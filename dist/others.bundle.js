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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callDialog: () => (/* binding */ callDialog),\n/* harmony export */   colorProjects: () => (/* binding */ colorProjects),\n/* harmony export */   colorProjectsTask: () => (/* binding */ colorProjectsTask),\n/* harmony export */   dialogProject: () => (/* binding */ dialogProject),\n/* harmony export */   dialogTask: () => (/* binding */ dialogTask),\n/* harmony export */   removeProject: () => (/* binding */ removeProject),\n/* harmony export */   showTask: () => (/* binding */ showTask)\n/* harmony export */ });\n\nfunction showTask(){ //show and hide tasks for each project\n  let click = true;\n  let indexproj;\n  let project1 = document.querySelectorAll('div.item1 > div.project, div.item1x > div.projectx');\n  let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.project input.check');\n  let todo = document.querySelectorAll('div.item1 > div.todo, div.item1x > div.todo');\n\n      checkbox.forEach((node, index) => node.addEventListener('mouseenter', (e) => {\n            indexproj = true;\n      }));\n      checkbox.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n        indexproj = false;\n       }));\n\n      project1.forEach((node, index) => node.addEventListener('click', (e) => {\n        if (indexproj == true) return;\n         if( click == true){\n              todo[index].setAttribute('style', 'display: block');\n           click = false;\n          }\n          else if( click == false){\n              todo[index].setAttribute('style', 'display: none');\n              click = true;\n          }\n        }));\n    }\n\n    function time(){\n      const currentDateP = document.querySelector('.currentDateP');\n      const currentHourP = document.querySelector('.currentHourP');\n      const currentDate = document.querySelector('.currentDate');\n      const currentHour = document.querySelector('.currentHour')\n\n      const d = new Date();\n      const day = d.getDate();\n      const month = d.getMonth();\n      const year = d.getUTCFullYear();\n      const hour = d.getHours();\n      const min = d.getMinutes();\n      const sec = d.getSeconds();\n      const  dayName = d.getDay()\n      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\n      let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n      currentDate.textContent =  weekday[dayName] + ': ' + day +' ' + months[month] + ' ' + year ;\n      currentHour.textContent = 'Time: ' + hour + ':' + min + ':' + sec;\n      currentDateP.textContent =  weekday[dayName] + ': '  + day +' ' + months[month] + ' ' + year ;\n      currentHourP.textContent = 'Time: ' + hour + ':' + min + ':' + sec;\n\n    }\n    setInterval(time, 1000);\n\n    const dialogProject = document.querySelector('#dialog-project');\n    const dialogTask = document.querySelector('#dialog-task');\n    const taskDate = document.querySelector('#disply');\n    \n  function callDialog(){  // for projects and dayly tasks only\n        const callProjectForm = document.querySelector('#call-project-form'); //button\n        const callDayTask = document.querySelector('#call-task-form');\n\n        callDayTask.addEventListener('click', (e) => {\n              taskDate.setAttribute('style', 'display: none');\n              dialogTask.showModal()\n        });\n          callProjectForm.addEventListener('click', () => {\n              dialogProject.showModal();\n          });\n  }\n\n\n  function colorProjects(){     //change background for each project by mouse over\n        let project = document.querySelectorAll('#projects-list > div.item1 > div.project');\n        let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.project input.check');\n        let done  = document.querySelectorAll('#projects-list > div.item1 > div.project div.done');\n        let activ = document.querySelectorAll('#projects-list > div.item1 > div.project div.activ');\n        let deleteButton = document.querySelectorAll('#projects-list > div.item1 > div.project > button');\n\n        project.forEach((node, index) => node.addEventListener('mouseover', (e) => {\n          let check = checkbox[index].checked;\n          if(check === false && project[index].style.backgroundColor != 'lightpink'){\n                project[index].setAttribute('style', 'background-color: grey');\n          }\n\n        }));\n        project.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n          let check = checkbox[index].checked;\n          if(check == false && project[index].style.backgroundColor != 'lightpink'){\n              project[index].setAttribute('style' , 'background-color: none');\n          }\n        }));\n        deleteButton.forEach((node, index) => node.addEventListener('mouseover', () => {\n              node.setAttribute('style', 'background-color: yellow');\n        }));\n        deleteButton.forEach((node, index) => node.addEventListener('mouseleave', () => {\n          node.setAttribute('style', 'background-color: none');\n        }));\n\n        checkbox.forEach((node, index) => node.addEventListener('change', (e) => {\n          if ( checkbox[index].checked == true){\n              project[index].setAttribute('style', 'background-color: darkcyan; color: white');\n              done[index].setAttribute('style', 'display: block');\n              activ[index].setAttribute('style', 'display: none');\n\n          } else if(checkbox[index].checked == false){\n              project[index].setAttribute('style', 'background-color: none');\n              done[index].setAttribute('style', 'display: none');\n              activ[index].setAttribute('style', 'display: block');\n        //      dueDate()\n          }\n      }));\n    }\nfunction colorProjectsTask(){     //change background for each project by mouse over\n  let task = document.querySelectorAll('#projects-list > div.item1 > div.todo div.task');\n  let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.todo input.check');\n  let done  = document.querySelectorAll('#projects-list > div.item1 > div.todo div.done');\n  let activ = document.querySelectorAll('#projects-list > div.item1 > div.todo div.activ');\n\n  task.forEach((node, index) => node.addEventListener('mouseover', (e) => {\n    let check = checkbox[index].checked;\n    task[index].setAttribute('value', '1'); // to find index of project task in index.js\n    if(check == false){\n          task[index].setAttribute('style', 'background-color: lightyellow');\n    }\n  }));\n  task.forEach((node, index) => node.addEventListener('mouseleave', (e) => {\n    let check = checkbox[index].checked;\n    task[index].removeAttribute('value', '1');\n    if(check == false){\n        task[index].setAttribute('style' , 'background-color: none');\n    }\n  }));\n  checkbox.forEach((node, index) => node.addEventListener('change', (e) => {\n\n    if ( checkbox[index].checked == true){\n        task[index].setAttribute('style', 'background-color: mediumseagreen; color: white');\n        done[index].setAttribute('style', 'display: block');\n        activ[index].setAttribute('style', 'display: none');\n\n    } else if(checkbox[index].checked == false){\n        task[index].setAttribute('style', 'background-color: none');\n        done[index].setAttribute('style', 'display: none');\n        activ[index].setAttribute('style', 'display: block');\n      }\n     // localStorage.setItem(`prj${index}`, JSON.stringify(projectsList[index]));\n\n}));\n}\n\n// pl = projectsList\n\nfunction removeProject(pl){ //remove project button , change color \n  // pl - project list\n  let projectItem1 = document.querySelectorAll('#projects-list > div.item1');\n  let deleteButton = document.querySelectorAll('#projects-list > div.item1 > div.project > button');\n\n  let j; // find index of project\n  let arrP \n      function lookIndexButton(div){\n          if( div.style.backgroundColor === 'lightyellow'){\n          return div;\n          }\n      }\n   projectItem1.forEach((node) => node.addEventListener('mouseover', (e) => {\n         arrP = Array.from(projectItem1) \n         j = arrP.findIndex(lookIndexButton);\n         console.log(j)\n   }));\n   deleteButton.forEach((button, index) => button.addEventListener('click', (e) => { //remove project\n        if (deleteButton[index].style.backgroundColor === 'yellow'){\n          pl.splice(j, 1);\n          arrP.splice(j, 1);\n      //  for ( let i = 0; i <= l; i++){\n           //   localStorage.setItem( `prj${i}`, JSON.stringify(pl[i]));\n            //    }\n            localStorage.removeItem(`prj${index}`);\n          }\n      projectItem1[index].remove();\n    }));\n  } \n\n\n//# sourceURL=webpack://todo-list/./src/others.js?");

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