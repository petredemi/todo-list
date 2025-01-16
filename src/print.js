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
     }));
     y.forEach(item => item.addEventListener('click', (e) => { //remove task
          if (y[j].style.backgroundColor == 'yellow'){
            tl.splice(j, 1);
            y.splice(j, 1);
          for ( let i = 0; i <= l; i++){
                localStorage.setItem( `tsk${i}`, JSON.stringify(tl[i]));
                  }
            localStorage.removeItem(`tsk${l}`);
            }
        task[j].remove();
        task = document.querySelectorAll('#task_list > div.task');
  
      }));
    }

    let weathericon = document.querySelector('#weathericon');
    let nodata = document.querySelector('#nodata');
    let temp = document.querySelector('div.temp');
    const motto = document.querySelector('div.motto')
    let lookfor = document.querySelector('#lookfor')
    let location = document.querySelector('#location')
    //let loc = 'London'
    let loc = JSON.parse(localStorage.getItem('weather'));
    location.value = loc

 async function dayWeather(){
  try{
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=69b808bac1c14633a67231851242404&q=${loc}`,{mode: "cors",})
      const weatherdata = await response.json()
      if(!response.ok){
        throw 'no data'
      }
   //   console.log('https:' + weatherdata.current.condition.icon)
      weathericon.src = 'https:' + weatherdata.current.condition.icon;
      temp.textContent = weatherdata.current.temp_c + '  ºC';
      localStorage.setItem('weather', JSON.stringify(location.value));
  }catch(error){
    nodata.textContent = error;
    //console.log(error)
    };
}
dayWeather()
lookfor.addEventListener('click', (e) => {
  if( location.value === '')return
  loc = location.value
  dayWeather()
})
location.addEventListener('click', (e) => {
   location.value = ''
})

let wondername = document.querySelector('div.wondername');
let wonderlocation = document.querySelector('p.wonderlocation')
let wonderimg = document.querySelector('#wonderimg')
async function dayMotto(){
  try{
      const response = await fetch('https://www.world-wonders-api.org/v0/wonders/random',{mode: "cors",})
      const mottoData = await response.json()
      if(!response.ok){
        throw 'no data'
      }
      console.log(mottoData)
      wonderimg.src = mottoData.links.images[0];
      wondername.textContent = mottoData.name
      motto.textContent = mottoData.summary;
      wonderlocation.textContent = 'location:' + mottoData.location
  }catch(error){
  //  nodata.textContent = error;
   // console.log(error)
  };
}
dayMotto()
