const menuItems = document.querySelectorAll('.menu__items');
const subMenus = document.querySelectorAll('.menu__info-items');

function showsOne() {
  menuItems.forEach(element => {

    element.addEventListener('click', () => {
      //before set the new class, "clear" all others
      subMenus.forEach(subMenu => {
        subMenu.style.display = 'none';
      });

      let item = document.getElementById(element.dataset.targetId)
      item.style.display = 'block';
    })
  })
}
showsOne();


