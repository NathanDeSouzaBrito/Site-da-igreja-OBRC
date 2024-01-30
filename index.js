var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}

// =========CAROUSEL FROM MAIN =======
var slideIndex = 0;
carouselM();

function carouselM() {
  var i;
  var x = document.getElementsByClassName("mySlidesM");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carouselM, 5000);
}

//  SCROLL OF NAVBAR
window.addEventListener("scroll", function () {
  var navColor = document.getElementById("navColor");
  if (window.pageYOffset > 0) {
    navColor.classList.add("changeStyle");
  } else {
    navColor.classList.remove("changeStyle");
  }
});
