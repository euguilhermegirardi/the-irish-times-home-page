// function showsOne(item) {
//   $('.showAndHide').each(function (index) {
//     if ($(this).attr("id") == item) {
//       $(this).show();
//     }
//     else {
//       $(this).hide();
//     }
//   });
// }

const showAndHide = document.getElementsByClassName('showAndHide');

function showsOne(item) {
  Array.from(showAndHide).forEach((showAndHide) => {

    if (showAndHide.id == item) {
      showAndHide.style.display = "block";
    }
    else {
      showAndHide.style.display = "none";
    }
  })
}

