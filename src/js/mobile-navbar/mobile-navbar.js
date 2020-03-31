const icon = document.querySelector('.nav-sd__icon');
const menu = document.querySelector('.nav-sd__menu');

icon.addEventListener('click', openMenu);

function openMenu() {
  menu.classList.toggle('nav-sd__open');
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    close();
  }
});


