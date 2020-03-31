const icon = document.querySelector('.nav-sd__icon-container');
const menu = document.querySelector('.nav-sd__menu');
const iconTop = document.querySelector('.icon-top');
const iconMiddle = document.querySelector('.icon-middle');
const iconBottom = document.querySelector('.icon-bottom');

icon.addEventListener('click', openMenu);

function openMenu() {
  menu.classList.toggle('nav-sd__open');
  iconTop.classList.toggle('top-opened');
  iconMiddle.classList.toggle('middle-opened');
  iconBottom.classList.toggle('bottom-opened');
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    close();
  }
});


