import _ from 'lodash';
import './style.css';
import printMe from'./print.js';
import { addProject, addItems, hiYou, domTask, taskBackground} from './functions.js';
import {n, s, endDate, projectStatus, projectsList} from './functions.js';
import {t, d, hourDue, taskStatus, tasksList} from './functions.js';
import { showTask, dialogProject, dialogTask, callDialog} from './others.js';

printMe();
hiYou();

let node1 = document.querySelectorAll('#projects-list > div.item1 > div.project');
let node2 = document.querySelectorAll('#projects-list > div.item1 > div.project button'); // delet button for each project
//let node3 = document.querySelectorAll('#projects-list > div.item1 > div.todo');
let node4 = document.querySelectorAll('div.item1 > div.todo > div.task_list');
let node5 = document.querySelectorAll('#task_list button'); // delete button for each task
let node6 = document.querySelectorAll('#projects-list > div.item1');
let node7 = document.querySelectorAll('#task_list > div.task');


const addTaskBtn = document.querySelector('#addToDo');
const addProjectBtn = document.querySelector('#addProject');
let projects_list = document.querySelector('#projects-list');
let dayTask = document.querySelector('#task_list');
callDialog();

//projects
addProjectBtn.addEventListener('click', () =>{
    //  node1 = document.querySelector('#projects-list > div.item1 > div.project');
   //   node2 = document.querySelectorAll('#projects-list > div.item1 > div.project button'); //delete btn
     // node3 = document.querySelectorAll('#projects-list > div.item1 > div.todo'); 
      //callTaskForm = document.querySelectorAll('div.item1 button.project-task-form');
     // node4 = document.querySelectorAll('div.item1 > div.todo > div.task_list');
    //  node5 = document.querySelectorAll('#task_list button');
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
      //       projects_list.append(div00)
             projects_list.insertBefore(div00, projects_list.children[cd]);
             console.log(cd); 
             n.value = '';
             s.value = '';
             endDate.value = '';
             projectStatus.checked = false;
      node6 = document.querySelectorAll('#projects-list div.item1');
      console.table(projectsList);
      console.log(div00);
      console.log(node6);
      console.log(node2);
      myFunction2();
      myFunction();
  //    myFunction3();
      showTask();
});

showTask();
console.log(node6);
console.log(node2);

//tasks
taskDelBtn();
addTaskBtn.addEventListener('click', () =>{ 
      //callTaskForm = document.querySelectorAll('div.item1 button.project-task-form, #call-task-form');
      // node4 = document.querySelectorAll('div.item1 > div.todo > div.task_list, #task_list');
    //  node1 = document.querySelectorAll('#task_list > div.task');
    //  node2 = document.querySelectorAll('#task_list button');      
    //  dayTask = document.querySelector(' #task_list');
      //  node5 = document.querySelectorAll('#task_list button');
      //  node7 = document.querySelectorAll('#task_list > div.task');

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
    let ti = tasksList.findIndex(function(tsk){
      return tsk.title === t.value;
   });

    console.log(ti);
    div1.textContent = tasksList[ti].title;
    div2.textContent = 'day: ' + tasksList[ti].date;
    div3.textContent = 'hour: ' + tasksList[ti].hour;
    del.textContent = 'delete';
    checkbox.checked = tasksList[ti].status;
    div0.append(div2, div3, div1, del, checkbox);
    dayTask.insertBefore(div0, dayTask.children[ti]);
    t.value = '';
    d.value = '';
    hourDue.value = '';
    taskStatus.checked = false;

    node7 = document.querySelectorAll('#task_list div.task');
    node5 = document.querySelectorAll('#task_list button');

    //myFunction3();
    console.table(tasksList);
    taskBackground();
    taskDelBtn();


});
myFunction2();
myFunction();
//myFunction3();
taskBackground();

/*let taskListNumber;
function myFunction3(){ //call dialog modal  for each task for projects 
  callTaskForm = document.querySelectorAll('div.item1 button.project-task-form, #call-task-form');
  node4 = document.querySelectorAll('div.item1 > div.todo > div.task_list, #task_list');   
  callTaskForm.forEach((node, index) => node.addEventListener('click', (e) => {
    dialogTask.showModal();   
    taskListNumber = node4[index];
  }));
}*/
let indexproj;  //remove project;
function rempj(projx){
  projx[indexproj].remove();
}
function myFunction(){     //change background for each project by mouse over
    node1 = document.querySelectorAll('#projects-list > div.item1 > div.project');
    node1.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    node1[index].setAttribute('style', 'background-color: pink');
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
    console.log[node2[index]]
    projectsList.splice(indexproj, 1);
    console.table(projectsList);
    console.log(node6);
  }));
}


function taskDelBtn(){ //remove button , change color 
  //  node3 = document.querySelectorAll('#projects-list > div.item1 > div.todo');
   let removeindex;  //remove index;
   node5 = document.querySelectorAll('#task_list button');
   node5.forEach((node, index) => node.addEventListener('mouseover', (e) => {
       removeindex = index;
       node5[index].setAttribute('style' , 'background-color: yellow');
       console.log(index);
    }));

   node5.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
        node5[index].setAttribute('style' , 'background-color: none');
        console.log(removeindex)
   }));

   node5.forEach((node, index) => node.addEventListener('click', (e) => {
       node7[removeindex].remove();
       tasksList.splice(removeindex, 1);
       console.log(node7);
       console.table(tasksList);
       return node7;

    }));
 };
