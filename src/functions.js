import { indexOf } from "lodash";

export  {addProject, addTasks, domTask, taskBackground, deleteProjectTasks,
        daytaskDelete, getProject, getTask};
export  {n, s, endDate, projectStatus, projectsList};
export  {t, d, hourDue, taskStatus, tasksList};

//add projects
const projectsList = [];
const tasksList = [];
//localStorage.setItem('tsk0', JSON.stringify('item'));

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
      projectsList.forEach((item, index) =>{
        localStorage.setItem(`prj${index}`, JSON.stringify(item))
  });

}
//add todo tasks
    const t = document.querySelector('#title');
    const d = document.querySelector('#date');
    const hourDue = document.querySelector('#hourDue');
    const taskStatus = document.querySelector('#taskStatus');

function addTasks(x){ //add to do items
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
        tasksList.forEach((item, index) =>{
                localStorage.setItem(`tsk${index}`, JSON.stringify(item))
          });
      }

      if ( x !== undefined ){ 
        projectsList[x].projectTasks.push(item);
        projectsList[x].projectTasks.sort((date1, date2) => {
          if ( date1.date < date2.date) return -1;
          if (  date1.date > date2.date) return 1;
          return 0;
      });
      projectsList[x].projectTasks.forEach((item, index) =>{
        localStorage.setItem(`tskprj${x}/${index}`, JSON.stringify(item))
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
function taskBackground(){     //change background for each current day task by mouse over
      let task = document.querySelectorAll('#task_list > div.task');
      let checkbox = document.querySelectorAll('#task_list > div.task input.check');
      let done  = document.querySelectorAll('#task_list > div.task div.done');
      let activ = document.querySelectorAll('#task_list > div.task div.activ');

        task.forEach((node, index) => node.addEventListener('mouseover', (e) => {
          let check = checkbox[index].checked;
          if(check == false){
        task[index].setAttribute('style', 'background-color: lightyellow');
          }
         // checkbox[index] ==false)
      }));
      task.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
        let check = checkbox[index].checked;
        if(check == false){
         task[index].setAttribute('style' , 'background-color: none');
        }
      
      }));
      checkbox.forEach((node, index) => node.addEventListener('change', (e) => {
          console.log(checkbox[index].checked);
          tasksList[index].status = checkbox[index].checked;
          localStorage.setItem(`tsk${index}`, JSON.stringify(tasksList[index]));
          if ( checkbox[index].checked == true){
            task[index].setAttribute('style', 'background-color: mediumseagreen; color: white');
            done[index].setAttribute('style', 'display: block');
            activ[index].setAttribute('style', 'display: none');
            console.log(tasksList);
          } else if(checkbox[index].checked == false){
            task[index].setAttribute('style', 'background-color: none');
            done[index].setAttribute('style', 'display: none');
            activ[index].setAttribute('style', 'display: block');
          }
      }));
  }
 
  function deleteProjectTasks(){
    let  btn = document.querySelectorAll('div.todo > div.task_list > div.task > button') // list del btn for task project
    let  task = document.querySelectorAll('div.item1 > div.todo > div.task_list > div.task'); 
    let  tsklist = document.querySelectorAll('div.task_list');// get index for each project task list
    function checkIndex(div){
      if(div.style.backgroundColor == 'lightyellow'){
         return div;
      }
   }
      btn.forEach((button, index) => button.addEventListener('mouseenter', (e) => {
          btn[index].setAttribute( 'style', 'background-color: red');
      }));
      btn.forEach((button, index) => button.addEventListener('mouseleave', (e) => {
        btn[index].setAttribute( 'style', 'background-color: none');
      }));
  
  
  let indextsk; // index of child task
  let arrT; // arrey for children
  let indexP; // project index
      tsklist.forEach((node, index ) => node.addEventListener('mouseenter', (e) => {
        console.log(index);
        indexP = index;
            arrT = Array.from(tsklist[index].children);
            console.log(arrT);
      })); 
      btn.forEach((node, index) => node.addEventListener('click', (e) => {
     //   let abc = tsklist[indexP].children[indextsk];
        indextsk = arrT.findIndex(checkIndex);
          if ( btn[index].style.backgroundColor == 'red'){
          task[index].remove();
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
             localStorage.removeItem(`tsk${removeindex}`);
             return node2;
          }));
      };



      let dayTask = document.querySelector('#task_list');
      function getTask(index){
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
                  div1.textContent = tasksList[index].title;
                  div2.textContent = 'day: ' + tasksList[index].date;
                  div3.textContent = 'hour: ' + tasksList[index].hour;
                  del.textContent = 'delete';
                  checkbox.checked = tasksList[index].status;
                  if ( tasksList[index].status == true){
                      div0.setAttribute('style', 'background-color: mediumseagreen');
                  }
                  div0.append(div2, div3, div1, del, div4);
                  dayTask.insertBefore(div0, dayTask.children[index]);
                  div2.setAttribute('style', 'display: none');
      }
      
  let projects_list = document.querySelector('#projects-list');
  function getProject(index){
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
           div1.textContent = projectsList[index].name;
           div2.textContent = 'Start: ' + projectsList[index].start;
           div3.textContent = 'End: ' + projectsList[index].end;
           del.textContent = 'delete';
           checkbox.checked = projectsList[index].status;
           if ( projectsList[index].status == true){
            div0.setAttribute('style', 'background-color: darkcyan; color: white');
            div5.setAttribute('style', 'display: block');
            div6.setAttribute('style', 'display: none');
          }
           div0.append(div1, div2, div3, del, div4);
           div00.append(div0, domTask());
           projects_list.insertBefore(div00, projects_list.children[index]);
    };
let tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list');
function getProjectTasks( x, y){
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


          div1.textContent = projectsList[x].projectTasks[y].title;
          div2.textContent = 'day: ' + projectsList[x].projectTasks[y].date;
          div3.textContent = 'hour: ' + projectsList[x].projectTasks[y].hour;
          del.textContent = 'delete';
          checkbox.checked = projectsList[x].projectTasks[y].status;
          if( projectsList[x].projectTasks[y].status == true){
            div0.setAttribute('style', 'background-color: mediumseagreen');
          }
          div0.append(div2, div3, div1, del, div4);
          tasklistProject[x].insertBefore(div0, tasklistProject[x].children[y]);
      }
