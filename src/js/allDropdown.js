// OPEN AND CLOSE ALL ITEM
function allDropdown() {
  document.querySelector("#allDropdown").classList.toggle("show2");

  const svg = document.querySelector('.menu__info-svg');
  svg.classList.toggle('menu__info-svg--open');

  const active = document.querySelector('#menu__info-all p');
  active.classList.toggle('active');

  const svgActive = document.querySelector('.menu__info-svg');
  svgActive.classList.toggle('active2');
}
// OPEN AND CLOSE ALL ITEM ENDS!
