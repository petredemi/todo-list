
export  {hiYou, addProject, addItems, domTask, taskBackground, taskDelBtn};
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
      const projectTasks = [];

      return { name, start, end, status, projectTasks};
    }
const item = createProject(n.value);
projectsList.push(item);
projectsList.sort((start1, start2) => {
   if (start1.start < start2.start) return -1;
   if (start1.start > start2.start) return 1;
    return 0;
  });
}
//add todo tasks
const t = document.querySelector('#title');
const d = document.querySelector('#date');
const hourDue = document.querySelector('#hourDue')
const taskStatus = document.querySelector('#taskStatus');

function addItems(){ //add to do items
    function createTask(title){ //create task object with factory function
      title = t.value;
      const date = d.value;
      const hour = hourDue.value;
      const status = taskStatus.checked;
    return { title, date, hour, status};
  }
  const item = createTask();
  tasksList.push(item);
  tasksList.sort((hour1, hour2) => {
    if ( hour1.hour < hour2.hour) return -1;
    if (  hour1.hour > hour2.hour) return 1;
    return 0;
  });
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

//task remove button
let index1;  //remove index
function removeT(x){ //remove task function 
      x[index1].remove();
}

let node1 = document.querySelectorAll('#task_list > div.task');
let node2 = document.querySelectorAll('#task_list button');
function taskBackground(){     //change background for each task by mouse over
      node1 = document.querySelectorAll('#task_list > div.task');

      node1.forEach((node, index) => node.addEventListener('mouseover', (e) => {
        node1[index].setAttribute('style', 'background-color: green');
      }));
      node1.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
        node1[index].setAttribute('style' , 'background-color: none');
      }));
  }
  
  function taskDelBtn(){ //remove button , change color 
     //  node3 = document.querySelectorAll('#projects-list > div.item1 > div.todo');
       node1 = document.querySelectorAll('#task_list > div.task');
       node2 = document.querySelectorAll('#task_list button');
       node2.forEach((node, index) => node.addEventListener('mouseover', (e) => {
         index1 = index;
         node2[index].setAttribute('style' , 'background-color: yellow');
       }));
     
       node2.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
           node2[index].setAttribute('style' , 'background-color: none');
       }));

       node2.forEach((node, index) => node.addEventListener('click', (e) => {
        removeT(node1);
        tasksList.splice(index1, 1);
        console.table(tasksList);
        node1 = document.querySelectorAll('#task_list > div.task');

       }));

    }




