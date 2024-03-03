import _, { sortedIndexOf } from 'lodash';
import './style.css';
import printMe from'./print.js';
import { addProject, addItems, hiYou, domTask, taskBackground} from './functions.js';
import {n, s, endDate, projectStatus, projectsList} from './functions.js';
import {t, d, hourDue, taskStatus, tasksList} from './functions.js';
import { showTask, dialogProject, dialogTask, callDialog} from './others.js';

printMe();
hiYou();

let node2 = document.querySelectorAll('#projects-list > div.item1 > div.project button'); // delet button for each project
let node4 = document.querySelectorAll('div.item1 > div.todo > div.task_list'); //tasks in projects
let node5 = document.querySelectorAll('#task_list button'); // delete button for each task
let node6 = document.querySelectorAll('#projects-list > div.item1');
let node7 = document.querySelectorAll('#task_list > div.task');
let callTaskForm = document.querySelectorAll('div.item1 button.project-task-form');
const addTaskBtn = document.querySelector('#addToDo');
const addProjectBtn = document.querySelector('#addProject');
let projects_list = document.querySelector('#projects-list');
let dayTask = document.querySelector('#task_list');
callDialog();

let projindex = undefined; // add task to a project

//projects
addProjectBtn.addEventListener('click', () =>{

      dialogProject.close();
      if(n.value == '' && s.value == '') return;

             const div00 = document.createElement('div');
             const div0 = document.createElement('div');
             const div1 = document.createElement('div');
             const div2 = document.createElement('div');
             const div3 = document.createElement('div');
             const del = document.createElement('button');
             const checkbox = document.createElement('input');
       
             div00.classList.add('item1');
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
             let cd = projectsList.findIndex(function(proj){    // project index
              return proj.name === n.value;
            });
            console.log(cd);
             div1.textContent = projectsList[cd].name;
             div2.textContent = 'Start: ' + projectsList[cd].start;
             div3.textContent = 'End: ' + projectsList[cd].end;
             del.textContent = 'delete';
             checkbox.checked = projectsList[cd].status;
             div0.append(div1, div2, div3, del, checkbox);
             div00.append(div0, domTask());
             projects_list.insertBefore(div00, projects_list.children[cd]);
             console.log(cd); 
             n.value = '';
             s.value = '';
             endDate.value = '';
             projectStatus.checked = false;
      node6 = document.querySelectorAll('#projects-list div.item1');
      callTaskForm = document.querySelectorAll('div.item1 button.project-task-form');
      node4 = document.querySelectorAll('div.item1 > div.todo > div.task_list');

      myFunction2();
      myFunction();
      myFunction3();
      showTask();
      deleteProjectTasks();
});
showTask();
//tasks
daytaskDelete();
const taskDate = document.querySelector('#disply');
taskDate.setAttribute('style', 'display: none');

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

    addItems(projindex); 
     if ( projindex == undefined){
         let ti = tasksList.findIndex(function(tsk){
          return tsk.title === t.value;
        });
          div1.textContent = tasksList[ti].title;
          div2.textContent = 'day: ' + tasksList[ti].date;
          div3.textContent = 'hour: ' + tasksList[ti].hour;
          del.textContent = 'delete';
          checkbox.checked = tasksList[ti].status;
          div0.append(div2, div3, div1, del, checkbox);
          dayTask.insertBefore(div0, dayTask.children[ti]);
          projindex = undefined;
          div2.setAttribute('style', 'display: none');

      }else if (projindex != undefined){
         let ti = projectsList[projindex].projectTasks.findIndex(function(tsk){
          return tsk.title === t.value;
          });
            div1.textContent = projectsList[projindex].projectTasks[ti].title;
            div2.textContent = 'day: ' + projectsList[projindex].projectTasks[ti].date;
            div3.textContent = 'hour: ' + projectsList[projindex].projectTasks[ti].hour;
            del.textContent = 'delete';
            checkbox.checked = projectsList[projindex].projectTasks[ti].status;
            div0.append(div2, div3, div1, del, checkbox);
            node4[projindex].insertBefore(div0, node4[projindex].children[ti]);
            projindex = undefined;
      }
        t.value = '';
        d.value = '';
        hourDue.value = '';
        taskStatus.checked = false;

    node7 = document.querySelectorAll('#task_list div.task');
    node5 = document.querySelectorAll('#task_list button');
    node4 = document.querySelectorAll('div.item1 > div.todo > div.task_list');

    myFunction3();
    taskBackground();
    daytaskDelete();
    deleteProjectTasks();
    projindex = undefined;
});

myFunction2();
myFunction();
myFunction3();
taskBackground();


function myFunction3(){ //call dialog modal  for each task for projects 
  callTaskForm = document.querySelectorAll('div.item1 button.project-task-form');
  node4 = document.querySelectorAll('div.item1 > div.todo > div.task_list');   
  callTaskForm.forEach((node, index) => node.addEventListener('click', (e) => {
    taskDate.setAttribute('style', 'display: flex')
    dialogTask.showModal();   
    projindex = index;  //where to add task for project
  //  projindex = node4[index];
  }));
}
let indexproj;  //remove project index button;
function rempj(projx){
  projx[indexproj].remove();
}
function myFunction(){     //change background for each project by mouse over
let node1 = document.querySelectorAll('#projects-list > div.item1 > div.project');
    node1.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    node1[index].setAttribute('style', 'background-color: grey');
    }));
    node1.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
      node1[index].setAttribute('style' , 'background-color: none');
    }));
}

function myFunction2(){ //remove button , change color 
  node2 = document.querySelectorAll('#projects-list > div.item1 > div.project button');
  console.log(node2);
  node2.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    indexproj = index;
    node2[index].setAttribute('style' , 'background-color: yellow');
  }));

  node2.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
    node2[index].setAttribute('style' , 'background-color: none');
    
  }));

  node2.forEach((node, index) => node.addEventListener('click', (e) => { //remove project
    rempj(node6);
    projectsList.splice(indexproj, 1);
  }));
}

function daytaskDelete(){ //remove button , change color 
   let removeindex;  //remove index;
   node5 = document.querySelectorAll('#task_list button');
   node5.forEach((node, index) => node.addEventListener('mouseover', (e) => {
       removeindex = index;
       node5[index].setAttribute('style' , 'background-color: yellow');
    }));

   node5.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
        node5[index].setAttribute('style' , 'background-color: none');
   }));

   node5.forEach((node, index) => node.addEventListener('click', (e) => {
       node7[removeindex].remove();
       tasksList.splice(removeindex, 1);
       return node7;

    }));
 };

function deleteProjectTasks(){
  let  node8 = document.querySelectorAll('div.task_list > div.task > button') // list del btn for task project
  let  node9 = document.querySelectorAll('div.item1 > div.todo > div.task_list > div.task'); 
  let  node10 = document.querySelectorAll('div.item1 > div.todo'); //get index for each project arrey
  let node11 = document.querySelectorAll('div.task_list');

    node8.forEach((node, index) => node.addEventListener('mouseover', (e) => {
        node8[index].setAttribute( 'style', 'background-color: lightblue');
    }));
    node8.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
      node8[index].setAttribute( 'style', 'background-color: none');
  }));

    node9.forEach((node, index ) => node.addEventListener( 'mouseenter', (e) => {
      node9[index].setAttribute( 'style', 'background-color: pink');
    }));
    node9.forEach((node, index ) => node.addEventListener( 'mouseleave', (e) => {
      node9[index].setAttribute( 'style', 'background-color: none');
    }));

function checkIndex(div){
   if(div.style.backgroundColor == 'pink'){
      return div;
   }
}
    node10.forEach((node, index ) => node.addEventListener('mouseenter', (e) => {
      console.log(index);
      console.log(node10);
      let arrT = Array.from(node11[index].children);
      console.log(arrT);
   //   let indextsk = arrT.findIndex(checkIndex);
      node9.forEach((node, index ) => node.addEventListener( 'click', (e) => {
      let indextsk = arrT.findIndex(checkIndex);
        console.log(indextsk);
      }));

    }));

    node11.forEach((node, index) => node.addEventListener('click', (e) => {
      console.log(projectsList[index].projectTasks);
    //  console.log(node11[index].children);
    }));
}

deleteProjectTasks();