const dropdown = document.getElementsByClassName('nav-sd__dropdown');
var i;


for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {

  this.classList.toggle("nav-sd__active");

  const dropdownContent = this.nextElementSibling;

  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
