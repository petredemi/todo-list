export  {addProject, addTasks, domTask, taskBackground, deleteProjectTasks,
        getProject, getTask, getProjectTasks};
export  {n, s, endDate, projectStatus, projectsList};
export  {t, d, hourDue, taskStatus, tasksList};
//add projects
const projectsList = [];
const tasksList = [];

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
      }
      if ( x !== undefined ){ 
        projectsList[x].projectTasks.push(item);
        projectsList[x].projectTasks.sort((date1, date2) => {
          if ( date1.date < date2.date) return -1;
          if (  date1.date > date2.date) return 1;
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
function taskBackground(){     //change background for each current day task by mouse over
      let task = document.querySelectorAll('#task_list > div.task');
      let delbtn = document.querySelectorAll('#task_list > div.task > div.controlbtn > button.del');
      let checkbox = document.querySelectorAll('#task_list > div.task input.check');
      let done  = document.querySelectorAll('#task_list > div.task div.done');
      let activ = document.querySelectorAll('#task_list > div.task div.activ');

      task.forEach((node, index) => node.addEventListener('mouseover', (e) => {
          let check = checkbox[index].checked;
          if(check == false && task[index].style.backgroundColor != 'lightpink'){
      task[index].setAttribute('style', 'background-color: lightyellow');
          }
      }));
      task.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
        let check = checkbox[index].checked;
        if(check == false && task[index].style.backgroundColor != 'lightpink'){
         task[index].setAttribute('style' , 'background-color: none');
        }
      
      }));
      delbtn.forEach((node, index) => node.addEventListener('mouseover', (e) => {
         node.style.backgroundColor = 'yellow';
        }));   
      delbtn.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
            node.setAttribute('style', 'background-color: none');
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
    let  btn = document.querySelectorAll('div.todo > div.task_list > div.task  button') // list del btn for task project
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
      tsklist.forEach((node, index ) => node.addEventListener('mouseover', (e) => {
        indexP = index;
            arrT = Array.from(tsklist[index].children);
            indextsk = arrT.findIndex(checkIndex);
        })); 
      btn.forEach((node, index) => node.addEventListener('click', (e) => {
          if ( btn[index].style.backgroundColor == 'red'){
            task[index].remove();
            arrT.splice(indextsk, 1);
          }
          projectsList[indexP].projectTasks.splice(indextsk, 1);
      }));
}

let task;
let i;
//let removeindex;  //remove index; v
  function daytaskDelete(){ //remove button , change color 
    let node1 = document.querySelectorAll('#task_list > div.task > button.del');
    let node2 = document.querySelectorAll('#task_list > div.task');
        task = Array.from(node2);
        function checkIndex(div){
          if(div.style.backgroundColor == 'lightyellow'){
             return div;
            }
          }
        node2.forEach((node, index) => node.addEventListener('mouseenter', () => {
          node1 = document.querySelectorAll('#task_list > div.task > button.del');
          node2 = document.querySelectorAll('#task_list > div.task');
          i = task.findIndex(checkIndex);

        }));
        node1.forEach((button, index) => button.addEventListener('mouseover', (e) => {
          node1[index].style.backgroundColor = 'yellow';
      //    console.log( i + 'index');
          }));   
         node1.forEach((button, index) => button.addEventListener('mouseleave', (e) => {
              node1[index].setAttribute('style', 'background-color: none');
         }));
         node1.forEach((node, index) => node.addEventListener('click', () => {
              tasksList.splice(i, 1);
              task.splice(i, 1);      
              localStorage.removeItem(`tsk${index}`);
              console.log(index + 'indextsk')
              console.log(tasksList);
              node1[i].remove();
              node2[i].remove();
              task = Array.from(node2);
              node1 = document.querySelectorAll('#task_list > div.task > button.del');
              node2 = document.querySelectorAll('#task_list > div.task');

          }));
     //    tasksList.forEach((item, index) =>{
        //    localStorage.setItem(`tsk${index}`, JSON.stringify(item))
      //    });
  
      };

      
  function getTask(y){ // from local store
        let dayTaskList = document.querySelector('#task_list');
          for (let x = 0; x < tasksList.length; x++ ){
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
            del.classList.add('del');
            div33.classList.add('dateDueTsk')
            p1.classList.add('startDayTsk')
        

            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add('check');
            checkbox.setAttribute('name', 'status');
      
            div4.classList.add('status');
            div5.classList.add('done');
            div6.classList.add('activ');
            div5.textContent = 'completed';
            div6.textContent = 'still active';
            div7.classList.add('controlbtn')

            div4.append(div5, div6, checkbox);
                  div1.textContent = tasksList[x].title;
                  div2.textContent = 'day: ' + tasksList[x].date;
               //   div3.textContent = 'hour: ' + tasksList[x].hour;
                  div3.append(p1, div33)
                  div33.textContent = tasksList[x].hour;
                  p1.textContent = 'Start:'
        

                  del.textContent = 'del';
                  checkbox.checked = tasksList[x].status;
                  if ( tasksList[x].status == true){
                      div0.setAttribute('style', 'background-color: mediumseagreen');
                  }
                  div7.append(div3, div4, del)
                  div0.append(div2, div1,div7);


                  dayTaskList.appendChild(div0);
                  dayTaskList.insertBefore(div0, dayTaskList.children[x]);
                  div2.setAttribute('style', 'display: none');
                  if( tasksList[x].status == true){
                    div0.setAttribute('style', 'background-color: mediumseagreen; color: white;');
                    div5.setAttribute('style', 'display: block');
                    div6.setAttribute('style', 'display: none');
                  }
                  y.push(del); // arrey from delete buttons 
        
          };
      }
      
  function getProject(x){ // from local store
        let projects_list = document.querySelector('#projects-list');
        for ( let i = 0; i < projectsList.length; i++){
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
           const div23 = document.createElement('div')

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
           div23.classList.add('startendprj')

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
           div1.textContent = projectsList[i].name;
           div22.textContent = projectsList[i].start;
           p1.textContent = 'Start'
           div2.append(p1, div22)
          // div2.textContent = 'Start: ' + projectsList[i].start;
        //   div3.textContent = 'End: ' + projectsList[i].end;
           div33.textContent = projectsList[i].end
           p3.textContent = 'End: ';
           div3.append(p3, div33);
           div23.append(div2, div3)
           del.textContent = 'del'
           checkbox.checked = projectsList[i].status;
           if ( projectsList[i].status == true){
            div0.setAttribute('style', 'background-color: darkcyan; color: white');
            div5.setAttribute('style', 'display: block');
            div6.setAttribute('style', 'display: none');
          }
        //   div0.append(div1, div2, div3, div4, del);
          div0.append(div23, div1, div4, del);

           div00.append(div0, domTask());
           projects_list.insertBefore(div00, projects_list.children[i]);
           x.push(del);
        }
    };

  function getProjectTasks(){ // from local store
        let tasklistProject = document.querySelectorAll('div.item1 > div.todo > div.task_list');  
        tasklistProject.forEach((item, x) => {
          for ( let y = 0; y < projectsList[x].projectTasks.length; y++){
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
               const div8 = document.createElement('div')
               div8.classList.add('day_hour')
               const div9 = document.createElement('div')
               div9.classList.add('check_del')   
               div4.append(div5, div6, checkbox);
    
                div1.textContent = projectsList[x].projectTasks[y].title;
                div2.textContent = 'day: ' + projectsList[x].projectTasks[y].date;
                div3.textContent = 'hour: ' + projectsList[x].projectTasks[y].hour;
                div8.append(div2, div3)
                div9.append(div4, del)

                del.textContent = 'del';
                checkbox.checked = projectsList[x].projectTasks[y].status;
                if( projectsList[x].projectTasks[y].status == true){
                  div0.setAttribute('style', 'background-color: mediumseagreen; color: floralwhite;');
                  div5.setAttribute('style', 'display: block');
                  div6.setAttribute('style', 'display: none');
      
                }
                div0.append(div8, div1, div9);
                tasklistProject[x].insertBefore(div0, tasklistProject[x].children[y]);
              }
      })  
}
