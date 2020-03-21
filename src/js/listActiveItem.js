var header = document.querySelector("#list-items");
var items = header.querySelectorAll(".menu__items");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    var current = document.querySelectorAll(".active-item");
    current[0].className = current[0].className.replace(" active-item", "");
    this.className += " active-item";
  });
}
