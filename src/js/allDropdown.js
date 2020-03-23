// OPEN AND CLOSE ALL ITEM
function allDropdown() {
  document.querySelector("#menu__all-dropdown").classList.toggle("show2");

  const svg = document.querySelector('.menu__item-svg');
  svg.classList.toggle('menu__item-svg-open');

  const active = document.querySelector('.menu__item--info-all');
  active.classList.toggle('active');
}
// OPEN AND CLOSE ALL ITEM ENDS!
