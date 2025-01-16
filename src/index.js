//export default dueDate
import _, { forEach, sortedIndexOf } from 'lodash';
import './style.css';
import search from './icons/search.svg'
import { addProject, addTasks, domTask, taskBackground, deleteProjectTasks, getTask, getProject, getProjectTasks} from './functions.js';
import {n, s, endDate, projectStatus, projectsList} from './functions.js';
import {t, d, hourDue, taskStatus, tasksList} from './functions.js';
import { showTask, dialogProject, dialogTask, callDialog, colorProjects, colorProjectsTask,
        removeProject} from './others.js';
import {removeDayTask} from './print.js';
const searchimg = new Image()
searchimg.src = search

let keys = []; // it is not used in program
let arrBtn = []; // project delete buttons;
let delTsk = []; // day task delete buttons;
function getKey(){
      for (let i = 0; i < localStorage.length; i++){
        let x = localStorage.key(i);
       keys.push(x);
      }}
getKey();
function storedProjects(){
   for(let i = 0; i < localStorage.length; i++){
        let x = JSON.parse(localStorage.getItem(`prj${i}`));
        if ( x != null){
          projectsList.push(x);
        }
      }
          getProject(arrBtn);
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
    getTask(delTsk);
    }
storedDayTasks();
const addTaskBtn = document.querySelector('#addToDo'); 
const addProjectBtn = document.querySelector('#addProject');
let tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list'); //tasks in projects
console.log(projectsList)
callDialog(); // for projects and day tasks only 
let week = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
//projects
let projindex = undefined; // index for add task to a project
addProjectBtn.addEventListener('click', () =>{ // button to add projects 
      let projects_list = document.querySelector('#projects-list');
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
             const div22 = document.createElement('div')
             const p1 = document.createElement('p')
             const div33 = document.createElement('div')
             const p3 = document.createElement('p')


             div00.classList.add('item1');
             div0.classList.add('project');
             div1.classList.add('name');
             div2.classList.add('start', 'width');
             div3.classList.add('end', 'width');
             del.classList.add('del');
             div22.classList.add('dateDue')
             p1.classList.add('startDayField')
             p3.classList.add('endDayField')
             div33.classList.add('projEndDay')

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
             div22.textContent = projectsList[cd].start;
             p1.textContent = 'Start'
             //div2.textContent = 'Start: ' + projectsList[cd].start;
             div2.append(p1, div22)

        //     div3.textContent = 'End: ' + projectsList[cd].end;
             div33.textContent = projectsList[cd].end
             p3.textContent = 'End: ';
             div3.append(p3, div33);
             del.textContent = 'del';
             checkbox.checked = projectsList[cd].status;
             div0.append(div1, div2, div3, div4, del);
             div00.append(div0, domTask());
             projects_list.insertBefore(div00, projects_list.children[cd]);
             for ( let i = 0; i < projectsList.length; i++){
              localStorage.setItem( `prj${i}`, JSON.stringify(projectsList[i]));
             }
             if( projectsList[cd].status == true){
                div0.setAttribute('style', 'background-color: darkcyan; color: white');
                div5.setAttribute('style', 'display: block');
                div6.setAttribute('style', 'display: none');
            };

            arrBtn.push(del);
            n.value = '';
            s.value = '';
            endDate.value = '';
            projectStatus.checked = false;
      tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list');
  
      colorProjectsTask();
      callDialogTaskProjects();
      showTask();
      deleteProjectTasks();
      removeStoredItems();
      colorProjects();
      removeProject(projectsList, arrBtn);
   //   checkboxProjectTasks();
   //   console.log(projectsList);
    //  console.log(del);
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
    const div7 = document.createElement('div')
    const div33 = document.createElement('div')
    const p1 = document.createElement('p')

    div0.classList.add('task');
    div1.classList.add('title');
    div2.classList.add('date', 'width');
    div3.classList.add('hour', 'width');
    div33.classList.add('dateDueTsk')
    p1.classList.add('startDayTsk')


    del.classList.add('del');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    checkbox.setAttribute('name', 'status');
    div4.classList.add('status');
    div5.classList.add('done');
    div6.classList.add('activ');
    div7.classList.add('controlbtn')
    div5.textContent = 'completed';
    div6.textContent = 'still active';
    div4.append(div5, div6, checkbox);

    addTasks(projindex); 
     if ( projindex == undefined){ //daily task
         let ti = tasksList.findIndex(function(tsk){
          return tsk.title === t.value;
        });
          div1.textContent = tasksList[ti].title;
          div2.textContent = 'day: ' + tasksList[ti].date;
         // div3.textContent = 'hour: ' + tasksList[ti].hour;
          del.textContent = 'del';
          checkbox.checked = tasksList[ti].status;
          div33.textContent = tasksList[ti].hour;
          p1.textContent = 'Start:'


          if( tasksList[ti].status == true){
            div0.setAttribute('style', 'background-color: mediumseagreen; color: white;');
            div5.setAttribute('style', 'display: block');
            div6.setAttribute('style', 'display: none');
          }
          div3.append(p1, div33)
          div7.append(div3,  div4, del)
          div0.append(div2, div1,div7);
          dayTask.insertBefore(div0, dayTask.children[ti]);
        //  daytaskDelete();
          projindex = undefined;
          div2.setAttribute('style', 'display: none');
          for ( let i = 0; i < tasksList.length; i++){
            localStorage.setItem( `tsk${i}`, JSON.stringify(tasksList[i]));
           }
    //      tasksList.forEach((item, index) =>{
    //      localStorage.setItem(`tsk${index}`, JSON.stringify(item));
    //    });
        delTsk.push(del); // insert delete button

          
      }else if (projindex != undefined){
         let ti = projectsList[projindex].projectTasks.findIndex(function(tsk){
          return tsk.title === t.value;
          });
            div1.textContent = projectsList[projindex].projectTasks[ti].title;
            div2.textContent = 'day: ' + projectsList[projindex].projectTasks[ti].date;
            div3.textContent = 'hour: ' + projectsList[projindex].projectTasks[ti].hour;
            const div8 = document.createElement('div')
            div8.classList.add('day_hour')
            const div9 = document.createElement('div')
            div9.classList.add('check_del')

            del.textContent = 'delete';
            checkbox.checked = projectsList[projindex].projectTasks[ti].status;
            if( projectsList[projindex].projectTasks[ti].status == true){
              div0.setAttribute('style', 'background-color: mediumseagreen; color: floralwhite');
                  }
              div8.append(div2, div3)
              div9.append(div4, del)
              div0.append(div8, div1, div9);
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
    deleteProjectTasks();
    checkboxProjectTasks();
    dueDateDayTask()
    projindex = undefined;
    removeDayTask(tasksList, delTsk);


});
colorProjects();
colorProjectsTask();
callDialogTaskProjects();
taskBackground();
deleteProjectTasks();
//daytaskDelete();
removeProject(projectsList, arrBtn);
removeDayTask(tasksList, delTsk);
function dueDate(){
      let currentDay = new Date()
      let project = document.querySelectorAll('#projects-list > div.item1 > div.project');
      let dateDue = document.querySelectorAll('#projects-list >div.item1 > div.project div.dateDue')
      dateDue.forEach((node, index) => {
        let d = new Date(node.textContent) // date of project
        if( currentDay >= d && project[index].style.backgroundColor != 'darkcyan'){
            project[index].setAttribute('style', 'background-color: lightpink');
        }
      })
}
dueDate()
function dueDateDayTask(){
  let currentHour = new Date()
  let h = currentHour.getHours() + 5
  let m = currentHour.getMinutes()
  let c = h * 60 + m
  let task = document.querySelectorAll('#task_list > div.task');
  let dateDue = document.querySelectorAll('#task_list > div.task > div.controlbtn > div.hour > div.dateDueTsk');
  dateDue.forEach((node, index) => {
    let d = node.textContent
    let d1 = Number(d.slice(0, 2))
    let d2 = Number(d.slice(3))
    let dx = d1 * 60 + d2
    if( c > dx && task[index].style.backgroundColor != 'darkcyan'){
        task[index].setAttribute('style', 'background-color: lightpink');
    }
  })
  // console.log(dateDue.value)
}
dueDateDayTask()

function callDialogTaskProjects(){ //call dialog modal  for each task for projects 
  let taskForm = document.querySelectorAll('div.item1 button.project-task-form');
    taskForm.forEach((node, index) => node.addEventListener('click', (e) => {
      taskDate.setAttribute('style', 'display: flex')
      dialogTask.showModal();   
      projindex = index;  //where to add task for project
    }));
}

  function checkboxProject(){
            let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.project input.check');
            checkbox.forEach((node, index) => node.addEventListener('change', (e) => {
                projectsList[index].status = checkbox[index].checked;
                dueDate()
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
      })); 
    checkbox.forEach((input, index) => input.addEventListener('change', (e) => {
         projectsList[indexP].projectTasks[indextsk].status = checkbox[index].checked;
         localStorage.setItem( `prj${indexP}`, JSON.stringify(projectsList[indexP]));
  }));
}
checkboxProjectTasks();

