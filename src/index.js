import _, { forEach, sortedIndexOf } from 'lodash';
import './style.css';
import { addProject, addTasks, domTask, taskBackground, deleteProjectTasks,
        daytaskDelete, getTask, getProject, getProjectTasks} from './functions.js';
import {n, s, endDate, projectStatus, projectsList} from './functions.js';
import {t, d, hourDue, taskStatus, tasksList} from './functions.js';
import { showTask, dialogProject, dialogTask, callDialog, colorProjects, colorProjectsTask} from './others.js';


let keys = [];
function getKey(){
      for (let i = 0; i < localStorage.length; i++){
        let x = localStorage.key(i);
       keys.push(x);
      }}
getKey();
console.log(keys);

function storedProjects(){
   for(let i = 0; i < localStorage.length; i++){
        let x = JSON.parse(localStorage.getItem(`prj${i}`));
        if ( x != null){
          projectsList.push(x);
        }
      }
          getProject();
  };
storedProjects();
getProjectTasks(); // get project tasks from local storage
function storedDayTasks(){
      for(let i = 0; i < localStorage.length; i++){
            let x = JSON.parse(localStorage.getItem(`tsk${i}`));
            if( x != null){
                tasksList.push(x);
                }        
        }
    getTask();
    }
storedDayTasks();
const addTaskBtn = document.querySelector('#addToDo'); 
const addProjectBtn = document.querySelector('#addProject');
let projects_list = document.querySelector('#projects-list');
let tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list'); //tasks in projects
let indexproj;  //remove project index button;

callDialog(); // for projects and day tasks only 

//projects
let projindex = undefined; // index for add task to a project
addProjectBtn.addEventListener('click', () =>{ // button to add projects 
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
             addProject(projindex);

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
             projectsList.forEach((item, index) =>{
                  localStorage.setItem( `prj${index}`, JSON.stringify(item));
             });
             if( projectsList[cd].status == true){
              div0.setAttribute('style', 'background-color: darkcyan; color: white');
              div5.setAttribute('style', 'display: block');
              div6.setAttribute('style', 'display: none');
            };
            n.value = '';
            s.value = '';
            endDate.value = '';
            projectStatus.checked = false;
      tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list');
      removeProject();
      colorProjects();
      colorProjectsTask()
      callDialogTaskProjects();
      showTask();
      deleteProjectTasks();
      removeStoredItems();
   //   checkboxProjectTasks();
});
showTask(); // for each project

//tasks
const taskDate = document.querySelector('#disply'); // hide date for daytasks 
taskDate.setAttribute('style', 'display: none');

addTaskBtn.addEventListener('click', () =>{  // button to add tasks on th list
  let dayTask = document.querySelector('#task_list');
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
            div0.setAttribute('style', 'background-color: mediumseagreen; color: white;');
            div5.setAttribute('style', 'display: block');
            div6.setAttribute('style', 'display: none');
          }
          div0.append(div2, div3, div1, del, div4);
          dayTask.insertBefore(div0, dayTask.children[ti]);

          projindex = undefined;
          div2.setAttribute('style', 'display: none');
        tasksList.forEach((item, index) =>{
            localStorage.setItem(`tsk${index}`, JSON.stringify(item));
          });
          
      }else if (projindex != undefined){
         let ti = projectsList[projindex].projectTasks.findIndex(function(tsk){
          return tsk.title === t.value;
          });
            div1.textContent = projectsList[projindex].projectTasks[ti].title;
            div2.textContent = 'day: ' + projectsList[projindex].projectTasks[ti].date;
            div3.textContent = 'hour: ' + projectsList[projindex].projectTasks[ti].hour;
            del.textContent = 'delete';
            checkbox.checked = projectsList[projindex].projectTasks[ti].status;
            if( projectsList[projindex].projectTasks[ti].status == true){
              div0.setAttribute('style', 'background-color: mediumseagreen; color: floralwhite');
                  }
              div0.append(div2, div3, div1, del, div4);
              tasklistProject[projindex].insertBefore(div0, tasklistProject[projindex].children[ti]);
              projindex = undefined;
       projectsList.forEach((item, index) =>{
        localStorage.setItem( `prj${index}`, JSON.stringify(item));
   });
        console.log(keys);
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
    checkboxProjectTasks();
    projindex = undefined;
});

removeProject();
colorProjects();
colorProjectsTask();
callDialogTaskProjects();
taskBackground();
deleteProjectTasks();
daytaskDelete();

function callDialogTaskProjects(){ //call dialog modal  for each task for projects 
  let taskForm = document.querySelectorAll('div.item1 button.project-task-form');
    taskForm.forEach((node, index) => node.addEventListener('click', (e) => {
      taskDate.setAttribute('style', 'display: flex')
      dialogTask.showModal();   
      projindex = index;  //where to add task for project
    }));
}

function remproject(projx){ // used in removedProject() to remove node
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
      localStorage.removeItem(`prj${indexproj}`);
      projectsList.splice(indexproj, 1);
      }));
    projectsList.forEach((item, index) =>{
        localStorage.setItem( `prj${index}`, JSON.stringify(item));
    });
} 
  function checkboxProject(){
            let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.project input.check');
            checkbox.forEach((node, index) => node.addEventListener('change', (e) => {
                console.log(checkbox[index].checked);
                projectsList[index].status = checkbox[index].checked;
                localStorage.setItem( `prj${index}`, JSON.stringify(projectsList[index]));
            }));
        }
checkboxProject();

function removeStoredItems(){ // remove stored tasks from projectss
  let allProjectsTasks = document.querySelectorAll('div.todo > div.task_list > div.task > button') // list del btn for task project
  allProjectsTasks.forEach((node, index) => node.addEventListener('click', (e) => {
    projectsList.forEach((item, index)  => {
      localStorage.setItem(`prj${index}`, JSON.stringify(projectsList[index]));
    })
    console.log(projectsList);
  }));
}
removeStoredItems();

function checkboxProjectTasks(){  // store checkbox status
 // let task = document.querySelectorAll('#projects-list > div.item1 > div.todo div.task');
  let tsklist = document.querySelectorAll('div.task_list');// get index for each project task list
  let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.todo input.check');
  let indextsk; // index of child task
  let indexP; // project index
  
  function checkIndex(div){
    let x = div.hasAttribute('value', '1');
      if ( x == true){
          return div;
      }
    }
    tsklist.forEach((node, index ) => node.addEventListener('mouseover', (e) => {
      indexP = index;
      let arrT = Array.from(tsklist[index].children);
      indextsk = arrT.findIndex(checkIndex);
          console.log(arrT);
          console.log(indextsk);
      })); 
    checkbox.forEach((input, index) => input.addEventListener('change', (e) => {
         console.log(checkbox[index].checked);
         console.log(indextsk);
         projectsList[indexP].projectTasks[indextsk].status = checkbox[index].checked;
         localStorage.setItem( `prj${indexP}`, JSON.stringify(projectsList[indexP]));
  }));
}
checkboxProjectTasks();

