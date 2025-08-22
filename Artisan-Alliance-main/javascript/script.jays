const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

/* Image Slider */
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 1;
slides.forEach((slide, i) => {
  if (slide.classList.contains('active')) {
    index = i;
  }
});

function slideInterval() {
  interval = setInterval(() => {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }, 4000);
}

slideInterval();

prev.addEventListener('click', () => {
  clearInterval(interval);
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  slideInterval();
  interval = null;
});

next.addEventListener('click', () => {
  clearInterval(interval);
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  slideInterval();
  interval = null;
});