const icon = document.querySelector('.nav-sd__icon-container');
const menu = document.querySelector('.nav-sd__menu');
const close = document.querySelector('.icon-container');

// OPEN MENU
icon.addEventListener('click', openMenu);

function openMenu() {
  menu.classList.add('nav-sd__open');
};

// CLOSE MENU
close.addEventListener('click', function closeMenu() {
  menu.classList.remove('nav-sd__open');
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    close();
  }
});


