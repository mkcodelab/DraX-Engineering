const burger = document.querySelector('.burger-menu');
burger.addEventListener('click', toggleNav);
const nav = document.querySelector('.nav-ul');

function toggleNav() {
  nav.classList.toggle('nav-active');
}