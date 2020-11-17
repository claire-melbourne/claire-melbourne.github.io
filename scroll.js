window.onscroll = function() {scrollHeader()};

var header = document.getElementById("scroller");
var sticky = header.offsetTop;

function scrollHeader() {
  if (window.pageYOFfset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}