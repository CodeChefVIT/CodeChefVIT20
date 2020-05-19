AOS.init();

var countDate = new Date('Sept 1, 2020 00:00:00').getTime();
var i = 0;



//Function to display Countdown in banner

function countDown() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let min = second * 60;
  let hour = min * 60;
  let day = hour * 24;
  let week = day * 7;

  let w = Math.floor(gap / (week));
  let d = Math.floor(gap % (week) / (day));
  let h = Math.floor(gap % (day) / (hour));

  document.getElementById('wk').innerText = w;
  document.getElementById('day').innerText = d;
  document.getElementById('hr').innerText = h;
}

// function for the "latest projects"  section

function tabSwitch(id) {

  let all = document.getElementsByClassName('project');

  let elems = document.getElementsByClassName(id);

  let tabs = document.getElementsByClassName('tab');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

    });
  }

  for(let i = 0; i<all.length; i++){
    all[i].style.display = "block";
  }

  for(let i = 0; i<elems.length; i++){
    elems[i].style.display = "none";

  }

}  //function end

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

setInterval(() => countDown(), 1000);

tabSwitch('none');
