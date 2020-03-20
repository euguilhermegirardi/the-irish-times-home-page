window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    document.getElementById("scrollNavbar").style.top = "0";
  } else {
    document.getElementById("scrollNavbar").style.top = "-65px";
  }
}
