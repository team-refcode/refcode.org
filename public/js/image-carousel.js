const carouselImageWrapper = document.querySelector('.carousel-image-wrapper')
var visitedAllSlides = false;
var goToSlide = function (x) {
  const offset = --x * 100;
  carouselImageWrapper.style.transform = `translateX(-${offset}%)`;
}

var totalSlides = carouselImageWrapper.childElementCount;
var goToNextSlide = function () {
  var cStr = carouselImageWrapper.style.transform;
  var currentSlide = (cStr === "" ? 0 : cStr.substring(cStr.indexOf('-'), cStr.indexOf('00')) * -1);
  var nextSlide = 1 + ((currentSlide + 1) % totalSlides);
  goToSlide(nextSlide);
  if (nextSlide === totalSlides) {
    visitedAllSlides = true;
  }
  setTimeout(enableScroll, 1000);
}
//
// var autoplay = function () {
//   setTimeout(goToNextSlide, 5000);
// };
//
// autoplay();

var htmlElem = document.querySelector("html");
var bodyElem = document.querySelector("body");

function disableScroll() {
    htmlElem.style.margin = 0;
    htmlElem.style.height = "100%";
    htmlElem.style.overflow = "hidden";
    bodyElem.style.margin = 0;
    bodyElem.style.height = "100%";
    bodyElem.style.overflow = "hidden";

    // window.onscroll = function() {
    //     window.scrollTo({top: 0, behavior: "auto"});
    // };
}
function enableScroll() {
    //window.onscroll = function() {};
    htmlElem.style = null;
    bodyElem.style = null;
    ticking = false;
}

let ticking = false;

document.addEventListener('scroll', function(e) {
  if(visitedAllSlides || ticking) {
    return;
  }
  ticking = true;
  setTimeout(window.requestAnimationFrame(function() {
    disableScroll();
    goToNextSlide();
  }), 0);
  ticking = true;
});
