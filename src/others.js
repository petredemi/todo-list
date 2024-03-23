import { projectsList } from "./functions";

export { showTask, dialogProject, dialogTask, callDialog, colorProjects, colorProjectsTask};

function showTask(){ //show and hide tasks for each project
  let click = true;
  let indexproj;
  let project = document.querySelectorAll('div.item1 > div.project');
  let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.project input.check');
  let todo = document.querySelectorAll('div.item1 > div.todo');

      checkbox.forEach((node, index) => node.addEventListener('mouseenter', (e) => {
            indexproj = true;
      }));
      checkbox.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
        indexproj = false;
       }));

      project.forEach((node, index) => node.addEventListener('click', (e) => {
        if (indexproj == true) return;
         if( click == true){
              todo[index].setAttribute('style', 'display: block');
           click = false;
          }
          else if( click == false){
              todo[index].setAttribute('style', 'display: none');
              click = true;
          }
        }));
    }

    function time(){
      const currentDate = document.querySelector('.currentDate');
      const currentHour = document.querySelector('.currentHour');
      const d = new Date();
      const day = d.getDate();
      const month = d.getMonth() + 1;
      const year = d.getUTCFullYear();
      const hour = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      currentDate.textContent = 'Date: ' + day +'.' + month + '.' + year ;
      currentHour.textContent = 'Time: ' + hour + ':' + min + ':' + sec;
    }
    setInterval(time, 1000);

    const dialogProject = document.querySelector('#dialog-project');
    const dialogTask = document.querySelector('#dialog-task');
    const taskDate = document.querySelector('#disply');
    
  function callDialog(){  // for projects and dayly tasks only
        const callProjectForm = document.querySelector('#call-project-form'); //button
        const callDayTask = document.querySelector('#call-task-form');

        callDayTask.addEventListener('click', (e) => {
              taskDate.setAttribute('style', 'display: none');
              dialogTask.showModal()
        });
          callProjectForm.addEventListener('click', () => {
              dialogProject.showModal();
          });
  }

  function colorProjects(){     //change background for each project by mouse over
        let project = document.querySelectorAll('#projects-list > div.item1 > div.project');
        let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.project input.check');
        let done  = document.querySelectorAll('#projects-list > div.item1 > div.project div.done');
        let activ = document.querySelectorAll('#projects-list > div.item1 > div.project div.activ');
       
        project.forEach((node, index) => node.addEventListener('mouseover', (e) => {
          let check = checkbox[index].checked;
          if(check == false){
                project[index].setAttribute('style', 'background-color: grey');
          }
        }));
        project.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
          let check = checkbox[index].checked;
          if(check == false){
              project[index].setAttribute('style' , 'background-color: none');
          }
        }));
        checkbox.forEach((node, index) => node.addEventListener('change', (e) => {
          console.log(checkbox[index].checked);
          if ( checkbox[index].checked == true){
              project[index].setAttribute('style', 'background-color: darkcyan; color: white');
              done[index].setAttribute('style', 'display: block');
              activ[index].setAttribute('style', 'display: none');

          } else if(checkbox[index].checked == false){
              project[index].setAttribute('style', 'background-color: none');
              done[index].setAttribute('style', 'display: none');
              activ[index].setAttribute('style', 'display: block');
          }
      }));
    }
function colorProjectsTask(){     //change background for each project by mouse over
  let task = document.querySelectorAll('#projects-list > div.item1 > div.todo div.task');
  let checkbox = document.querySelectorAll('#projects-list > div.item1 > div.todo input.check');
  let done  = document.querySelectorAll('#projects-list > div.item1 > div.todo div.done');
  let activ = document.querySelectorAll('#projects-list > div.item1 > div.todo div.activ');

  task.forEach((node, index) => node.addEventListener('mouseover', (e) => {
    let check = checkbox[index].checked;
    if(check == false){
          task[index].setAttribute('style', 'background-color: lightyellow');
    }
  }));
  task.forEach((node, index) => node.addEventListener('mouseleave', (e) => {
    let check = checkbox[index].checked;
    if(check == false){
        task[index].setAttribute('style' , 'background-color: none');
    }
  }));
  checkbox.forEach((node, index) => node.addEventListener('change', (e) => {
    console.log(checkbox[index].checked);

    if ( checkbox[index].checked == true){
        task[index].setAttribute('style', 'background-color: mediumseagreen; color: white');
        done[index].setAttribute('style', 'display: block');
        activ[index].setAttribute('style', 'display: none');

    } else if(checkbox[index].checked == false){
        task[index].setAttribute('style', 'background-color: none');
        done[index].setAttribute('style', 'display: none');
        activ[index].setAttribute('style', 'display: block');
      }
     // localStorage.setItem(`prj${index}`, JSON.stringify(projectsList[index]));

}));
}

