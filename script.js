let minut = document.querySelector("#mint");
let scnd = document.querySelector("#scnd");
let ms = document.querySelector("#ms");
let hour = document.querySelector("#hour");
let start = document.querySelector("#start-btn");
let laps = document.querySelector("#laps");
let lap = document.querySelector("#lap-btn");
let count = 0;



// start and stop timer

start.addEventListener("click", () => {
  count++;
  if (start.innerText == "Start") {
    if (count == 1 ) {
      lap.classList.toggle("lap-btn");
      lap.classList.toggle("lap-btn1");
      
      
    }
    if (count > 1) {
      lap.textContent = "Lap";
    }
    start.innerText = "Stop";
    intervalId = setInterval(clockFn, 10);
  } else if (start.innerText == "Stop") {
    if (count > 1) {
      lap.textContent = "Reset";
     
    }
    start.innerText = "Start";
    clearInterval(intervalId);
  }
});

// adding time laps
lap.addEventListener("click", () => {
  if (lap.textContent == "Lap" && count > 0) {
    let lapTime = document.createElement("p");

    lapTime.textContent = `${hour.textContent}:${minut.textContent}:${scnd.textContent}:${ms.textContent}`;

    laps.append(lapTime);
  } else if (lap.textContent == "Reset") {
    hour.textContent = "00";
    minut.textContent = "00";
    scnd.textContent = "00";
    ms.textContent = "00";
    lap.textContent = "Lap";
    lap.classList.toggle("lap-btn");
    lap.classList.toggle("lap-btn1");
    count = 0;
    while (laps.firstChild) {
      laps.removeChild(laps.firstChild);
    }
  }
});

//clockFn function

function clockFn() {
  let mss = Number(ms.innerText);
  let seconds = Number(scnd.innerText);
  let minutes = Number(minut.innerText);
  let hours = Number(hour.innerText);
  if (mss < 100) {
    ms.innerText = `${+ms.textContent < 9 ? 0 + String(mss + 1) : mss + 1}`;
  }
  if (mss == 100) {
    scnd.innerText = `${
      +scnd.textContent < 9 ? 0 + String(seconds + 1) : seconds + 1
    }`;
    ms.textContent = 1;
  }
  if (seconds == 60) {
    minut.innerText = `${
      +minut.textContent < 9 ? 0 + String(minutes + 1) : minutes + 1
    }`;
    scnd.textContent = 1;
  }
  if (minutes == 60) {
    hour.innerText = `${
      +hour.textContent < 9 ? 0 + String(hours + 1) : hours + 1
    }`;

    minut.textContent = 1;
  }
}
