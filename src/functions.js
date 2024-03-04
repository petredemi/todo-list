
export  {hiYou, addProject, addItems, domTask, taskBackground, deleteProjectTasks,
        daytaskDelete};
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
const hourDue = document.querySelector('#hourDue');
const taskStatus = document.querySelector('#taskStatus');
//let x = 1;
function addItems(x){ //add to do items
    function createTask(title){ //create task object with factory function
      title = t.value;
      const date = d.value;
      const hour = hourDue.value;
      const status = taskStatus.checked;
    return { title, date, hour, status};
  }
      const item = createTask();
      if ( x == undefined){ 
          tasksList.push(item);
          tasksList.sort((hour1, hour2) => {
             if ( hour1.hour < hour2.hour) return -1;
            if (  hour1.hour > hour2.hour) return 1;
          return 0;
       }); 
        }
      if ( x !== undefined ){ 
        projectsList[x].projectTasks.push(item);
        projectsList[x].projectTasks.sort((hour1, hour2) => {
          if ( hour1.hour < hour2.hour) return -1;
          if (  hour1.hour > hour2.hour) return 1;
          return 0;
    });
      };
  };

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
    };
//task remove button
let node7 = document.querySelectorAll('#task_list > div.task');
let taskCheck = document.querySelectorAll('#task_list input.check');

function taskBackground(){     //change background for each task by mouse over
        let on = taskCheck.value;
        node7 = document.querySelectorAll('#task_list > div.task');
        node7.forEach((node, index) => node.addEventListener('mouseover', (e) => {
        node7[index].setAttribute('style', 'background-color: lightyellow');
      }));
      node7.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
         node7[index].setAttribute('style' , 'background-color: none');
      
      }));

  }
 
  function deleteProjectTasks(){
    let  node1 = document.querySelectorAll('div.todo > div.task_list > div.task > button') // list del btn for task project
    let  node2 = document.querySelectorAll('div.item1 > div.todo > div.task_list > div.task'); 
    let  node3 = document.querySelectorAll('div.task_list');// get index for each project task list
  
      node1.forEach((button, index) => button.addEventListener('mouseenter', (e) => {
          node1[index].setAttribute( 'style', 'background-color: green');
      }));
      node1.forEach((button, index) => button.addEventListener('mouseleave', (e) => {
        node1[index].setAttribute( 'style', 'background-color: none');
      }));
  
      node2.forEach((node, index ) => node.addEventListener( 'mouseenter', (e) => {
        node2[index].setAttribute( 'style', 'background-color: lightyellow');
      }));
      node2.forEach((node, index ) => node.addEventListener( 'mouseleave', (e) => {
        node2[index].setAttribute( 'style', 'background-color: none');
      }));
  
  function checkIndex(div){
     if(div.style.backgroundColor == 'lightyellow'){
        return div;
     }
  }
  let indextsk; // index of child task
  let arrT; // arrey for children
  let indexP; // project index
      node3.forEach((node, index ) => node.addEventListener('mouseenter', (e) => {
        console.log(index);
        indexP = index;
            arrT = Array.from(node3[index].children);
            console.log(arrT);
      })); 
      node2.forEach((node, index) => node.addEventListener('click', (e) => {
        let abc = node3[indexP].children[indextsk];
        indextsk = arrT.findIndex(checkIndex);
          console.log(indextsk + 'fefefe');
          console.log(indexP + '  www')
          console.log(abc);
          if ( node2[index].style.backgroundColor == 'lightyellow'){
          node2[index].remove();
          arrT.splice(indextsk, 1);
          }
          projectsList[indexP].projectTasks.splice(indextsk, 1);
          console.log(arrT);
          console.log(projectsList[indexP]);
        }));

      }
  
  function daytaskDelete(){ //remove button , change color 
        let removeindex;  //remove index;
        let node1 = document.querySelectorAll('#task_list button');
        let node2 = document.querySelectorAll('#task_list > div.task');
      
         node1.forEach((node, index) => node.addEventListener('mouseover', (e) => {
             removeindex = index;
             node1[index].setAttribute('style' , 'background-color: yellow');
          }));
      
         node1.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
              node1[index].setAttribute('style' , 'background-color: none');
         }));
      
         node1.forEach((node, index) => node.addEventListener('click', (e) => {
             node2[removeindex].remove();
             tasksList.splice(removeindex, 1);
             return node2;
      
          }));
      };
      
