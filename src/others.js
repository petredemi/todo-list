export { showTask, dialogProject, dialogTask, callDialog};


function showTask(){ //show and hide task for project
  let click = true;
  let project = document.querySelectorAll('div.item1 > div.project');
  let todo = document.querySelectorAll('div.item1 > div.todo');
        project.forEach((node, index) => node.addEventListener('click', (e) => {
         if( click == true){
              todo[index].setAttribute('style', 'background-color: yellow');
              todo[index].setAttribute('style', 'display: block');
           click = false;
          }
          else if( click == false){
              project = document.querySelectorAll('div.item1 > div.project');
              todo[index].setAttribute('style', 'background-color: none')
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
      currentDate.textContent = day +'.' + month + '.' + year ;
      currentHour.textContent = hour + ':' + min + ':' + sec;
    }
    setInterval(time, 1000);

    const dialogProject = document.querySelector('#dialog-project');
    const dialogTask = document.querySelector('#dialog-task');
   // let callTaskForm = document.querySelectorAll('div.item1 button.project-task-form');

  function callDialog(){
        
        const callProjectForm = document.querySelector('#call-project-form'); //button
    //    callTaskForm = document.querySelectorAll('div.item1 button.project-task-form');
        let callDayTask = document.querySelector('#call-task-form');
        
          callProjectForm.addEventListener('click', () => {
            dialogProject.showModal(); 
          });
          callDayTask.addEventListener('click', (e) => {
              dialogTask.showModal();
          })
  //        callTaskForm.forEach(( node, index) => node.addEventListener('click', () => {
    //          dialogTask.showModal();
      //    }));
  }
  