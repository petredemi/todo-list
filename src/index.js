import _, { sortedIndexOf } from 'lodash';
import './style.css';
//import {getData} from'./functions.js';
import { addProject, addTasks, domTask, taskBackground, deleteProjectTasks,
        daytaskDelete, getData} from './functions.js';
import {n, s, endDate, projectStatus, projectsList} from './functions.js';
import {t, d, hourDue, taskStatus, tasksList} from './functions.js';
import { showTask, dialogProject, dialogTask, callDialog, colorProjects, colorProjectsTask} from './others.js';


for( let i =1 ; i <= localStorage.length; i++){
    tasksList.push(JSON.parse(localStorage.getItem(`tsk${i}`)));
}
tasksList.forEach(getData);
console.log(tasksList);
let taskForm = document.querySelectorAll('div.item1 button.project-task-form'); // for project tasks
const addTaskBtn = document.querySelector('#addToDo');
const addProjectBtn = document.querySelector('#addProject');
let projects_list = document.querySelector('#projects-list');
let dayTask = document.querySelector('#task_list');
let tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list'); //tasks in projects

//abc();

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
             const div4 = document.createElement('div');
             const div5 = document.createElement('div');
             const div6 = document.createElement('div');
             
             div00.classList.add('item1');
             div0.classList.add('project');
             div1.classList.add('name');
             div2.classList.add('start', 'width');
             div3.classList.add('end', 'width');
             del.classList.add('del');

             div4.classList.add('status');
             div5.classList.add('done');
             div6.classList.add('activ');
             div5.textContent = 'completed';
             div6.textContent = 'still active';
             div4.append(div5, div6, checkbox); 

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
             div0.append(div1, div2, div3, del, div4);
             div00.append(div0, domTask());
             projects_list.insertBefore(div00, projects_list.children[cd]);
             console.log(cd); 
             n.value = '';
             s.value = '';
             endDate.value = '';
             projectStatus.checked = false;
      taskForm = document.querySelectorAll('div.item1 button.project-task-form');
      tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list');

      removeProject();
      colorProjects();
      colorProjectsTask()
      callDialogTaskProjects();
      showTask();
      deleteProjectTasks();
});
showTask();
//tasks
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
    const div4 = document.createElement('div');
    const div5 = document.createElement('div');
    const div6 = document.createElement('div');

    div0.classList.add('task');
    div1.classList.add('title');
    div2.classList.add('date', 'width');
    div3.classList.add('hour', 'width');
    del.classList.add('del');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    checkbox.setAttribute('name', 'status');
    
    div4.classList.add('status');
    div5.classList.add('done');
    div6.classList.add('activ');
    div5.textContent = 'completed';
    div6.textContent = 'still active';
    div4.append(div5, div6, checkbox);

    
    addTasks(projindex); 
     if ( projindex == undefined){
         let ti = tasksList.findIndex(function(tsk){
          return tsk.title === t.value;
        });
          div1.textContent = tasksList[ti].title;
          div2.textContent = 'day: ' + tasksList[ti].date;
          div3.textContent = 'hour: ' + tasksList[ti].hour;
          del.textContent = 'delete';
          checkbox.checked = tasksList[ti].status;
          if( tasksList[ti].status == true){
            div0.setAttribute('style', 'background-color: mediumseagreen');
          }
          div0.append(div2, div3, div1, del, div4);
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

            div0.append(div2, div3, div1, del, div4);
            tasklistProject[projindex].insertBefore(div0, tasklistProject[projindex].children[ti]);
            projindex = undefined;
      }
        t.value = '';
        d.value = '';
        hourDue.value = '';
        taskStatus.checked = false;
    tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list');
    callDialogTaskProjects();
    taskBackground();
    colorProjectsTask();
    daytaskDelete();
    deleteProjectTasks();
    projindex = undefined;
    console.log(tasksList);
    console.log(tasksList.length);


});

removeProject();
colorProjects();
colorProjectsTask();
callDialogTaskProjects();
taskBackground();
deleteProjectTasks();
daytaskDelete();

function callDialogTaskProjects(){ //call dialog modal  for each task for projects 
    taskForm = document.querySelectorAll('div.item1 button.project-task-form');
    
    taskForm.forEach((node, index) => node.addEventListener('click', (e) => {
      taskDate.setAttribute('style', 'display: flex')
      dialogTask.showModal();   
      projindex = index;  //where to add task for project
    }));
}
let indexproj;  //remove project index button;
      function remproject(projx){
           projx[indexproj].remove();
      }
function removeProject(){ //remove project button , change color 
  let deleteButton = document.querySelectorAll('#projects-list > div.item1 > div.project button');
  let projects = document.querySelectorAll('#projects-list > div.item1');

  deleteButton.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    indexproj = index;
    deleteButton[index].setAttribute('style' , 'background-color: yellow');
  }));

  deleteButton.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
    deleteButton[index].setAttribute('style' , 'background-color: none');
    
  }));

  deleteButton.forEach((node, index) => node.addEventListener('click', (e) => { //remove project
    remproject(projects);
    projectsList.splice(indexproj, 1);
  }));
}