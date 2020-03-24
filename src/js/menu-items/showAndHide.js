const menuItems = document.querySelectorAll('.menu__items');
const subMenus = document.querySelectorAll('.menu__info-items');

function showsOne() {
  menuItems.forEach(e => {

    e.addEventListener('click', () => {
      // before set the new class I have to "clear" all others
      subMenus.forEach(subMenu => {
        subMenu.style.display = 'none';
      });

      let item = document.getElementById(e.dataset.targetId)
      item.style.display = 'block';
    })
  })
}
showsOne();


