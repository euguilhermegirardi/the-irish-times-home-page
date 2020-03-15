var header = document.getElementById("list-items");
var items = header.getElementsByClassName("menu__items");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", function () {
    var current = document.getElementsByClassName("active-item");
    current[0].className = current[0].className.replace(" active-item", "");
    this.className += " active-item";
  });
}
