export  {hiYou, addProject, addItems, backgroundDiv, removeTask};
export  {n, s, endDate, projectStatus, projectsList};
export  {t, d, hourDue, taskStatus, tasksList};


function hiYou(){
    console.log('how are you');
}
const projectsList = ['item'];
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
      return { name, start, end, status};
    }
    const item = createProject();
    projectsList.push(item);
}

const tasksList = [];
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
let click = false;


function backgroundDiv(){
      click = false;
    if( click == false){
        arrTask = Array.from(document.querySelectorAll('#task_list > div.task'));
        arrTask.forEach((div) => div.addEventListener('mouseover', (e) => {
          div.setAttribute('style', 'background-color: grey');
          console.log(arrTask);
        }));
        arrTask.forEach((div) => div.addEventListener('mouseleave', (e) => {
          div.removeAttribute('style');
        }));
      };      
      backgroundDiv();
      arrTask.forEach((div) => div.addEventListener( 'click', (e) => {
            div.style.backgroundColor = 'red';    
            function checkIndex(div){
              if(div.style.backgroundColor == 'red'){
                click = true;
                return div; 
            }}          
              indexTask = arrTask.findIndex(checkIndex);
              console.log(indexTask);
              if ( click == true) { click = false};
        }));
        console.log(click);
    }

    function removeTask(){
          tasksList.splice(indexTask, 1);
          arrTask[indexTask].remove(indexTask);
          arrTask.splice(indexTask, 1);
    }