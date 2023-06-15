const timer = document.querySelector(".timer")
const playBtn = document.querySelector("#start-stopBtn")
const resetBtn = document.querySelector("#resetBtn")

let seconds= 0;
let minutes= 0;
let hours= 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// TIMER VARIABLES
 let timerStatus = "stopped"
 let timerInterval = null;


 //const startTimer = setInterval(stopWatch,1000)

function stopWatch(){
  seconds++

  if(seconds === 60 ){
    seconds= 0;
    minutes++

    if(minutes === 60){
      minutes = 0;
      hours++
    }
  }

  if(seconds<10){
    leadingSeconds = "0" + seconds.toString();
  }else{
    leadingSeconds = seconds
  }if(minutes<10){
    leadingMinutes = "0" + minutes.toString();
  }else{
    leadingMinutes = minutes
  }if(hours<10){
    leadingHours = "0" + hours.toString();
  }else{
    leadingHours = hours
  }
    timer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
}

playBtn.addEventListener("click", function(){
     if (timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch,1000);
        playBtn.innerHTML =`<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started"
      }else {
        window.clearInterval(timerInterval)
        playBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus ="stopped"
      }
      
})
 resetBtn.addEventListener("click",function(){

  window.clearInterval(timerInterval);
  minutes = 0;
  hours = 0;
  seconds = 0;
  
  timer.innerText = "00:00:00"
  playBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
  timerStatus ="stopped"
 })