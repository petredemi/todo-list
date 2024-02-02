import _ from 'lodash';
import './style.css';
import printMe from'./print.js';
import { addProject, addItems, hiYou, backgroundDiv, removeTask} from './functions.js';
import {n, s, endDate, projectStatus, projectsList} from './functions.js';
import {t, d, hourDue, taskStatus, tasksList} from './functions.js';

printMe();
hiYou();

const addTaskBtn = document.querySelector('#addToDo');
const addProjectBtn = document.querySelector('#addProject');
const projects_list = document.querySelector('#projects-list');
const task_list = document.querySelector('#task_list');
const callProjectForm = document.querySelector('#call-project-form'); //button
const callTaskForm = document.querySelector('#call-task-form'); //button
const dialogProject = document.querySelector('#dialog-project');
const dialogTask = document.querySelector('#dialog-task');
const removeBtn = document.querySelector('#remove-task');

callProjectForm.addEventListener('click', () => {
   dialogProject.showModal(); 
});
callTaskForm.addEventListener('click', () => {
  dialogTask.showModal();
});

//projects

let j = 0; //index number for projects
addProjectBtn.addEventListener('click', () =>{
  dialogProject.close();
  if(n.value == '' && s.value == '') return;
  const div0 = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const checkbox = document.createElement('input');
  div1.classList.add('name');
  div2.classList.add('start', 'width');
  div3.classList.add('end', 'width');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check');
  checkbox.setAttribute('name', 'status');


  addProject();
  div1.textContent = projectsList[j].name;
  div2.textContent = 'Start: ' + projectsList[j].start;
  div3.textContent = 'End: ' + projectsList[j].end;
  checkbox.checked = projectsList[j].status;
  projects_list.appendChild(div0);
  div0.append(div1, div2, div3, checkbox);
  n.value = '';
  s.value = '';
  endDate.value = '';
  projectStatus.checked = false;
  j =  j + 1;

});

//tasks
let i = tasksList.length; // index and node number for task
console.log(i);
addTaskBtn.addEventListener('click', () =>{
  
    dialogTask.close();
    if(t.value == '' && d.value == '') return;
    const div0 = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const checkbox = document.createElement('input');
    
    div0.classList.add('task');
    div1.classList.add('title');
    div2.classList.add('date', 'width');
    div3.classList.add('hour', 'width');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    checkbox.setAttribute('name', 'status');

    addItems();
    div1.textContent = tasksList[i].title;
    div2.textContent = 'day: ' + tasksList[i].date;
    div3.textContent = 'hour: ' + tasksList[i].hour;
    checkbox.checked = tasksList[i].status;
    task_list.appendChild(div0);
    div0.append(div2, div3, div1, checkbox);
    t.value = '';
    d.value = '';
    hourDue.value = '';
    taskStatus.checked = false;
    i =  i + 1;
    backgroundDiv();
});
backgroundDiv();


removeBtn.addEventListener('click', () => {
  removeTask();
  i = tasksList.length;
  //tasksList.splice(indexTask, 1);
  //arrTask[indexTask].remove(indexTask);
  //arrTask.splice(indexTask, 1);
  //i = tasksList.length;

});

