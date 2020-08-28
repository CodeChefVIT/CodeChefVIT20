var countDate = new Date('February 20, 2021 00:00:00').getTime();
var i = 0;

// JS for Navbar
const nav = document.querySelector('#medNav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;

// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});

// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__item');

  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

// function for the "latest projects"  section
function tabSwitch(id) {

  let all = document.getElementsByClassName('project');

  let elems = document.getElementsByClassName(id);

  let tabs = document.getElementsByClassName('tab');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("activep");
      current[0].className = current[0].className.replace(" activep", "");
      this.className += " activep";

    });
  }

  for (let i = 0; i < all.length; i++) {
    all[i].style.display = "block";
  }

  for (let i = 0; i < elems.length; i++) {
    elems[i].style.display = "none";

  }

}

function on() {
  document.getElementById("youtube-video").setAttribute("src", "https://www.youtube.com/embed/wYDTHujmThc");
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("youtube-video").setAttribute("src", "");
  document.getElementById("overlay").style.display = "none";
}

tabSwitch('none');


console.clear();