export  {hiYou, addProject, addItems, backgroundDiv,
  removeTask, domTask};
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

//add todo tasks
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

function domTask(){ //create dom task for each project
  const todo = document.createElement('div');
  const todo1 = document.createElement('div');
  const todo2 = document.createElement('div');
  const h3 = document.createElement('h3');
  const btn1 = document.createElement('button');

  todo.classList.add('todo');
  todo1.classList.add('todo1');
  todo2.classList.add('task_list');
  btn1.setAttribute('type', 'submit');
  btn1.setAttribute('open-data-modal', '');
  btn1.classList.add('project-task-form', 'btn');
  btn1.textContent = '+';
  h3.textContent = 'to do list';
  todo1.append(h3, btn1);
  todo.append(todo1, todo2);
 return todo;

  }





