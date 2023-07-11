const bg = document.querySelector(".bg");
const text = document.querySelector(".blurText");

let load = 0;

const loading = setInterval(bluring, 10);

function bluring() {
 load++;
  document.body.classList.add("noScrool");
 
  if (load > 99) {
   console.log(load);
  document.body.classList.remove("noScrool");
   
    clearInterval(loading);
  }
 text.textContent = `${load}%`;
 bg.style.opacity = scale(load, 0, 100, 0.8, 0)
 bg.style.zIndex = scale(load, 0, 100, 4, 0);
 text.style.opacity = scale(load, 0, 100, 1, 0);
 
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}