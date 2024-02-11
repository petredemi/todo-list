
















//import { projectsList} from "./functions";
//export { myFunction, myFunction2};
  /*
let node1 = document.querySelectorAll('#projects-list > div');
let node2 = document.querySelectorAll('#projects-list button');
console.log(node1);
console.log(node2);

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
 //   node1 = document.querySelectorAll('#projects-list > div');
   // node2 = document.querySelectorAll('#projects-list button');
 //   pj = projectsList.length;
  }));
}
//myFunction2()
//myFunction();



/*
let delProject = Array.from(document.querySelectorAll('#projects-list button'));
let indexDel;

//let indexDel;
/*function deleteProject(){
    delProject.splice(indexDel, 1);
   // delProject[indexDel].remove(indexDel);
    projectsList.splice(indexDel, 1);
    projects[indexDel].remove(indexDel);
    projects.splice(indexDel, 1);
}
function removeProject(){
  delProject = Array.from(document.querySelectorAll('#projects-list button'));
  delProject.forEach((button) => button.addEventListener('click', (e) => {
      button.setAttribute('style', 'background-color: yellow'); 

      function checkIndex(button){
            if(button.style.backgroundColor == 'yellow'){
              return button; 
            }}; 
       indexDel = delProject.findIndex(checkIndex);
     //   deleteProject();
       console.log(projectsList);
       console.log(delProject);
       console.log(indexDel);
       button.removeAttribute('style'); 

       delProject.splice(indexDel, 1);
   //    delProject[indexDel].remove(indexDel);
       projectsList.splice(indexDel, 1);
   //    projects[indexDel].remove(indexDel);
       projects.splice(indexDel);
       delProject = Array.from(document.querySelectorAll('#projects-list button'));

      }));
  }
  //removeProject();

  //delProject.forEach((button) => button.addEventListener('mouseup', (e) => {
   // button.removeAttribute('style');
//}))
*/

// function.js
/*
export  {hiYou, addProject, addItems, backgroundDiv,
  removeTask};
export  {n, s, endDate, projectStatus, projectsList};
export  {t, d, hourDue, taskStatus, tasksList};

function hiYou(){
    console.log('how are you');
}

//add projects
const projectsList = ['item'];
const tasksList = ['item'];

const n = document.querySelector('#projectTitle');
const s = document.querySelector('#startDate');
const endDate = document.querySelector('#startDate');
const projectStatus = document.querySelector('#projectStatus');

function addProject(){ //add projects items
    function createProject(name){ //create  project object with factory function
      name = n.value;
      const start = s.value;
      const end = endDate.value;
      const status = projectStatus.checked;
      tasksList;
      return { name, start, end, status, tasksList};
    }
    const item = createProject();
    projectsList.push(item);
}
/*let projects = Array.from(document.querySelectorAll('#projects-list > div.project'));
let indexProj;


function backgroundProject(){
  let click = true;
  projects = Array.from(document.querySelectorAll('#projects-list > div.project'));   
  projects.forEach((div) => div.addEventListener('mouseover', (e) => {
       //   if ( click == true){
           div.setAttribute('style', 'background-color: grey');
       //   }
         }));
  projects.forEach((div) => div.addEventListener('mouseleave', (e) => {
//       if ( click == true){
        div.removeAttribute('style');
        click = true;
//   }
    
    }));

    projects.forEach((div) => div.addEventListener('click', (e) =>{
      
      function projectNumber(div){
             if( div.style.backgroundColor == 'red'){
             return div;
           }};
          if (click == true){
               div.style.backgroundColor = 'red';
               indexProj = projects.findIndex(projectNumber);
               click = false;
           }else if( click == false){
         //      div.style.backgroundColor = '';
               click = true;
           }  
    }));

}

  function removeProject(){
    console.log('hi');
    }
    //removeProject();
    */
//add todo tasks
/*
const t = document.querySelector('#title');
const d = document.querySelector('#date');
const hourDue = document.querySelector('#hourDue')
const taskStatus = document.querySelector('#taskStatus');

function addItems(){ //add to do items
    function createTask(title){ //create object with factory function
     title = t.value;
     const date = d.value;
     const hour = hourDue.value;
     const status = taskStatus.checked;
    return { title, date, hour, status};
  }
  const item = createTask();
  tasksList.push(item);
}

let arrTask = Array.from(document.querySelectorAll('#task_list > div.task'));
let indexTask;

function backgroundDiv(){
      let click = true;
        arrTask = Array.from(document.querySelectorAll('#task_list > div.task'));
        arrTask.forEach((div) => div.addEventListener('mouseover', (e) => {
     //   if ( click == true){
          div.setAttribute('style', 'background-color: grey');
     //   }
        }));
        arrTask.forEach((div) => div.addEventListener('mouseleave', (e) => {
   //       if ( click == true){
          div.removeAttribute('style');
          click = true;
       //   }
          
        }));
      arrTask.forEach((div) => div.addEventListener( 'click', (e) => {
        function checkIndex(div){
              if(div.style.backgroundColor == 'red'){
                return div; 
          }} 
              if(click == true){ 
                div.style.backgroundColor = 'red'; 
                indexTask = arrTask.findIndex(checkIndex);
                click = false;
              }
              else if (click == false){
          //      div.setAttribute('style', 'background-color: grey');
                click = true;
              }
              console.log(indexTask);
              console.log(click);
        }));
      }
      backgroundDiv();

  function removeTask(){
    if( indexTask == undefined) return;
          tasksList.splice(indexTask, 1);
          arrTask[indexTask].remove(indexTask);
          arrTask.splice(indexTask, 1);
          indexTask = undefined;
    }







/*
  //    delProject.forEach((button) => button.addEventListener('mouseup', (e) => {
  //  removeProject();
    //    j = j -1;

      //  button.style.backgroundColor = '';
   // }))
   function deleteProject(){
    projectsList.splice(indexDel, 1);
    projects[indexDel].remove(indexDel);
    delProject[indexDel].remove(indexDel);
    projects.splice(indexDel, 1);
    delProject.splice(indexDel, 1);
    console.log(indexDel);
  }
  function del1(){
    delProject = Array.from(document.querySelectorAll('#projects-list button'));
    projects = Array.from(document.querySelectorAll('#projects-list > div.project'));

      delProject.forEach((button) => button.addEventListener('click', (e) => {
        removeProject();
          deleteProject();

      }));
  
    }

// index.js

/*
import _ from 'lodash';
import './style.css';
import printMe from'./print.js';
import { addProject, addItems, hiYou, backgroundDiv, 
      removeTask} from './functions.js';
import {n, s, endDate, projectStatus, projectsList} from './functions.js';
import {t, d, hourDue, taskStatus, tasksList} from './functions.js';
//import { removeProject, delProject} from './others.js';

printMe();
hiYou();
let node = document.querySelectorAll('#projects-list > div.project');
let delProject = Array.from(document.querySelectorAll('#projects-list button.del'));
let indexDel;
let projects = Array.from(document.querySelectorAll('#projects-list > div.project'));
let indexProj;

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
  j =  j + 1;
  delProject = Array.from(document.querySelectorAll('#projects-list button.del'));
  //projects = Array.from(document.querySelectorAll('#projects-list > div.project'));
  removeProject();
 // delProject.push(del)

  projects.push(div0);
  console.log(delProject);
  console.log(projects);
  node = document.querySelectorAll('#projects-list > div.project');
  backgroundProject();
  del1();
});
console.log(delProject);
console.log(projects);
console.log(node);

backgroundProject();

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

//delProject = Array.from(document.querySelectorAll('#projects-list button'));
//projects = Array.from(document.querySelectorAll('#projects-list > div.project'));  
function del1(){
delProject.forEach((button) => button.addEventListener('mouseover', (e) => {
  delProject = Array.from(document.querySelectorAll('#projects-list button'));

  button.setAttribute('style', 'background-color: yellow'); 

 function checkIndex(button){
       if(button.style.backgroundColor == 'yellow'){
         return button; 
       }}; 
  indexDel = delProject.findIndex(checkIndex);
  console.log(indexDel)
//   deleteProject();
//  button.removeAttribute('style'); 
}));
delProject.forEach((button) => button.addEventListener('mouseleave', (e) => {
    button.removeAttribute('style');
}));
}
del1();
delProject.forEach((button) => button.addEventListener('click', (e) => {

  delProject = Array.from(document.querySelectorAll('#projects-list button'));
  projects = Array.from(document.querySelectorAll('#projects-list > div.project'));  
  console.log(indexDel);

  delProject.splice(indexDel, 1);
  node[indexDel].remove(indexDel);

   // delProject[indexDel].remove(indexDel);
    projectsList.splice(indexDel, 1);
    projects.splice(indexDel, 1);

   j = j-1; 
   delProject = Array.from(document.querySelectorAll('#projects-list button'));
   projects = Array.from(document.querySelectorAll('#projects-list > div.project')); 
   console.log(delProject);
   console.log(projects);
   console.log(indexDel);
   console.log(indexProj);
   node = document.querySelectorAll('#projects-list > div.project');


}))


function backgroundProject(){
  let click = true;
  projects = Array.from(document.querySelectorAll('#projects-list > div.project'));   
  projects.forEach((div) => div.addEventListener('mouseover', (e) => {
       //   if ( click == true){
           div.setAttribute('style', 'background-color: grey');
       //   }
         }));
  projects.forEach((div) => div.addEventListener('mouseleave', (e) => {
//       if ( click == true){
        div.removeAttribute('style');
        click = true;
//   
    }));

    projects.forEach((div) => div.addEventListener('click', (e) =>{
      
      function projectNumber(div){
             if( div.style.backgroundColor == 'red'){
             return div;
           }};
          if (click == true){
               div.style.backgroundColor = 'red';
               indexProj = projects.findIndex(projectNumber);
               click = false;
           }else if( click == false){
         //      div.style.backgroundColor = '';
               click = true;
           }  
    }));

}

  function removeProject(){
    console.log('hi');
    }
    removeProject();
  








//function deleteProject(){
//delProject.splice(indexDel, 1);
// delProject[indexDel].remove(indexDel);
//projectsList.splice(indexDel, 1);
//projects[indexDel].remove(indexDel);
//projects.splice(indexDel, 1);
//}

*/