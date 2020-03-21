window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    document.querySelector("#scrollNavbar").style.top = "0";
  } else {
    document.querySelector("#scrollNavbar").style.top = "-65px";
  }
}
