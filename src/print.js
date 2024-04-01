export { removeDayTask};


function removeDayTask(tl, y){ //remove project button , change color 
    let task = document.querySelectorAll('#task_list > div.task');
    let j; // find index of task
    let l; //task list lengt
    //tl task list
    // y arrey from delete buttons
    function lookIndexButton(button){
            if( button.style.backgroundColor == 'yellow'){
            return button;
            }
        }
    y.forEach(button => button.addEventListener('mouseover', (e) => {
           j = y.findIndex(lookIndexButton);
           l = tl.length - 1;
           console.log(y);
           console.log(tl);
           console.log(j);
     }));
     y.forEach(item => item.addEventListener('click', (e) => { //remove task
          if (y[j].style.backgroundColor == 'yellow'){
            tl.splice(j, 1);
            y.splice(j, 1);
            console.log(tl);
            console.log(y); 
          for ( let i = 0; i <= l; i++){
                localStorage.setItem( `tsk${i}`, JSON.stringify(tl[i]));
                  }
            localStorage.removeItem(`tsk${l}`);
            }
        task[j].remove();
        task = document.querySelectorAll('#task_list > div.task');
        console.log(task);
  
      }));
    } 
  