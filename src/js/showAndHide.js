function showsOne(item) {
  console.log('clicked!');

  $('.showAndHide').each(function (index) {
    if ($(this).attr("id") == item) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
}
