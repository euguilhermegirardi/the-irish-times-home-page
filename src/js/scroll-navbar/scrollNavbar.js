window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    document.querySelector("#navbar--scroll").style.top = "0";
  } else {
    document.querySelector("#navbar--scroll").style.top = "-65px";
  }
}
