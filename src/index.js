import _ from 'lodash';
import './style.css';
import printMe from'./print.js';
import { addProject, addItems, hiYou, backgroundDiv, 
      removeTask} from './functions.js';
import {n, s, endDate, projectStatus, projectsList} from './functions.js';
import {t, d, hourDue, taskStatus, tasksList} from './functions.js';

printMe();
hiYou();

let node1 = document.querySelectorAll('#projects-list > div');
let node2 = document.querySelectorAll('#projects-list button');

let j = projectsList.length; //index number for projects

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
addProjectBtn.addEventListener('click', () =>{
  node1 = document.querySelector('#projects-list > div');
  node2 = document.querySelectorAll('#projects-list button');
    dialogProject.close();
  if(n.value == '' && s.value == '') return;
  const div0 = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const del = document.createElement('button');
  const checkbox = document.createElement('input');
  div0.classList.add('project');
  div1.classList.add('name');
  div2.classList.add('start', 'width');
  div3.classList.add('end', 'width');
  del.classList.add('del');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check');
  checkbox.setAttribute('name', 'status');
  del.setAttribute('type', 'submit');
  addProject();
  div1.textContent = projectsList[j].name;
  div2.textContent = 'Start: ' + projectsList[j].start;
  div3.textContent = 'End: ' + projectsList[j].end;
  del.textContent = 'delete';
  checkbox.checked = projectsList[j].status;
  div0.append(div1, div2, div3, del, checkbox);
  projects_list.appendChild(div0);
  n.value = '';
  s.value = '';
  endDate.value = '';
  projectStatus.checked = false;
  j = j + 1;
  myFunction2();
  myFunction();

});

//tasks
let i = tasksList.length; // index and node number for task
//console.log(i);
addTaskBtn.addEventListener('click', () =>{
  
    dialogTask.close();
    if(t.value == '' && d.value == '') return;
    const div0 = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const del = document.createElement('button');
    const checkbox = document.createElement('input');
    
    div0.classList.add('task');
    div1.classList.add('title');
    div2.classList.add('date', 'width');
    div3.classList.add('hour', 'width');
    del.classList.add('del');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    checkbox.setAttribute('name', 'status');

    addItems();
    div1.textContent = tasksList[i].title;
    div2.textContent = 'day: ' + tasksList[i].date;
    div3.textContent = 'hour: ' + tasksList[i].hour;
    del.textContent = 'delete';
    checkbox.checked = tasksList[i].status;
    div0.append(div2, div3, div1, del, checkbox);
    task_list.appendChild(div0);
    t.value = '';
    d.value = '';
    hourDue.value = '';
    taskStatus.checked = false;
    i =  i + 1;
    backgroundDiv();
});

removeBtn.addEventListener('click', () => {
  removeTask();
  i = tasksList.length;
});

  myFunction2();
  myFunction();

let index1;
function rempj(x){
  x[index1].remove();
}

function myFunction(){     
    node1 = document.querySelectorAll('#projects-list > div');
    node2 = document.querySelectorAll('#projects-list button');
    node1.forEach((node, index) => node.addEventListener('mouseover', (e) => {
      node1[index].setAttribute('style', 'background-color: pink');
    }));
    node1.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
      node1[index].setAttribute('style' , 'background-color: none');
    }));
}

function myFunction2(){
  node2 = document.querySelectorAll('#projects-list button');
  node1 = document.querySelectorAll('#projects-list > div');
  console.log(node2)
  node2.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    index1 = index;
    node2[index].setAttribute('style' , 'background-color: yellow');
    console.log(index);
    console.log(index1);

  }));
  node2.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
    node2[index].setAttribute('style' , 'background-color: none');
  }));

  node2.forEach((node, index) => node.addEventListener('click', (e) => { 
    rempj(node1);
    projectsList.splice(index1, 1);
    j = projectsList.length;
  }));
}

myFunction2()
myFunction();

