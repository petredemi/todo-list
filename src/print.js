export { removeDayTask};
import Search from './icons/search.svg'

const searchicon = new Image()
searchicon.src = Search
const lin = document.querySelector('div.lin')
lin.addEventListener(('click'), (e) => {
})
function removeDayTask(tl){ //remove project button , change color 
  let task = document.querySelectorAll('#task_list > div.task');
  let btn = document.querySelectorAll('#task_list > div.task > div.controlbtn  > button.del')
  let j; // find index of task
  //tl task list
  let arr 
  function lookIndexButton(button){
          if( button.style.backgroundColor == 'lightyellow'){
          return button;
          }
      }
  task.forEach((node) => node.addEventListener('mouseover', (e) => {
        arr = Array.from (task) 
         j = arr.findIndex(lookIndexButton);
         console.log(j)
   }));
   btn.forEach((button, index) => button.addEventListener('click', (e) => { //remove task
        if (btn[index].style.backgroundColor == 'yellow'){
          tl.splice(j, 1);
          arr.splice(j, 1);
          task[index].remove();
        }
     //  for ( let i = 0; i < l; i++){
      //  localStorage.setItem( `tsk${i}`, JSON.stringify(tl[i]));
    //    }
      localStorage.removeItem(`tsk${index}`);
      console.log(tl)
    }));
  }

    let weathericon = document.querySelector('#weathericon');
    let nodata = document.querySelector('#nodata');
    let temp = document.querySelector('div.temp');
    const motto = document.querySelector('div.motto')
    let lookfor = document.querySelector('#lookfor')
   // lookfor.appendChild(searchicon)
    let location = document.querySelector('#location')
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
      wonderimg.src = mottoData.links.images[0];
      wondername.textContent = mottoData.name
      motto.textContent = mottoData.summary;
      wonderlocation.textContent = 'location:' + mottoData.location
  }catch(error){
    nodata.textContent = error;
   // console.log(error)
  };
}
dayMotto()