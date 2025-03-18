let minut = document.querySelector("#mint");
let scnd = document.querySelector("#scnd");
let hour = document.querySelector("#hour");
let start = document.querySelector("#start");
let lap = document.querySelector("#lap");


function btnClrChange() {
  start.classList.toggle("btn-danger");
  start.classList.toggle("btn-primary");
}
function startToStop() {
  start.innerText = "Stop";
}
function stopToStart() {
  start.innerText = "Start";
}

start.addEventListener("click", () => {
  if (start.innerText == "Start") {
    start.innerText = "Stop";
    btnClrChange();
    intervalId = setInterval(second, 1000);
  } else if (start.innerText == "Stop") {
    start.innerText = "Start";
    btnClrChange();
    clearInterval(intervalId);
  }
});


lap.addEventListener("click",()=>{


})

function second() {
  let seconds = Number(scnd.innerText);
  let minutes = Number(minut.innerText);
  let hours = Number(hour.innerText);
  if (seconds >= 60) {
    minut.innerText = minutes + 1;
    scnd.innerHTML = 1;
  }
  if (seconds < 60) {
    scnd.innerText = seconds + 1;
  }
  if (minutes >= 60) {
    hour.innerText = hours + 1;
    minut.innerHTML = 1;
  }
}
