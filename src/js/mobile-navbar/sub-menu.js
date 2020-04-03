// ACCORDION
const toggleItem = (item) => {
  if (isItemOpen(item))
  closeItem(item);
  else
    openItem(item);
}

const isItemOpen = (item) => {
  return item.getAttribute('data-state') === 'open';
}

const closeItem = (item) => {
  item.setAttribute("data-state", "closed");
  item.classList.remove('nav-sd__active');

  var dropdown = item.nextElementSibling;
  if(dropdown) {
    dropdown.style.maxHeight = null;
  }

  var svg = item.children[1];
  if(svg) {
    svg.classList.remove('svg-open');
  }
}

const openItem = (item) => {
  item.setAttribute('data-state', 'open');
  item.classList.add('nav-sd__active');

  var dropdown = item.nextElementSibling;
  if(dropdown) {
    dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
  }

  var svg = item.children[1];
  if(svg) {
    svg.classList.add('svg-open');
  }
}

const closeOtherItems = (item) => {
  var items = document.getElementsByClassName('nav-sd__list-item');
  for (var i = 0; i < items.length; i++) {
    let otherItem = items[i];
    if(isItemOpen(otherItem) && otherItem !== item)
    closeItem(otherItem);
  }
};

const initItems = () => {
  var items = document.getElementsByClassName('nav-sd__list-item');
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    closeItem(item);

    item.addEventListener('click', () => {
      closeOtherItems(item);
      toggleItem(item);
    });
  }
}

initItems();
