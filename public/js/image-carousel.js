const carouselImageWrapper = document.querySelector('.carousel-image-wrapper')
const totalSlides = carouselImageWrapper.childElementCount;
const htmlElem = document.querySelector("html");
const bodyElem = document.querySelector("body");
var visitedAllSlides = false;
var scrolling = false;
var slidingTo = null;

const goToSlide = function (x) {
  slidingTo = x;
  watchSliding();
  const offset = --x * window.innerWidth;
  carouselImageWrapper.scrollTo({
    left: offset,
    behavior: 'smooth'
  });
}
var slidecount = 0;
const watchSliding = function(){
  //console.log("sliiiiide", slidecount++);
  var currentSlide = getCurrentSlide();
  if (slidingTo && (currentSlide + 1) === slidingTo) {
    setTimeout(watchSliding, 100);
  } else {
    slidingTo = false;
    setTimeout(enableScroll,0);
  }
}

const goToNextSlide = function () {
  if (slidingTo) {
    return;
  }
  var currentSlide = getCurrentSlide();
  var nextSlide = ((currentSlide + 1) % (totalSlides + 1));
  if (nextSlide === totalSlides || nextSlide === 0) {
    visitedAllSlides = true;
  }
  goToSlide(nextSlide);
}

const getCurrentSlide = function () {
  var currentScroll = carouselImageWrapper.scrollLeft;
  if (currentScroll >= 0 && currentScroll < window.innerWidth) {
    return 1;
  } else if (currentScroll >= window.innerWidth && currentScroll < (window.innerWidth * 2)) {
    return 2;
  } else if (currentScroll >= (window.innerWidth * 2) && currentScroll < (window.innerWidth * 3)) {
    return 3;
  }
  return 3;
};

const disableScroll = function () {
    htmlElem.style.margin = 0;
    htmlElem.style.height = "100%";
    htmlElem.style.overflow = "hidden";
    bodyElem.style.margin = 0;
    bodyElem.style.height = "100%";
    bodyElem.style.overflow = "hidden";
}

const enableScroll = function () {
    htmlElem.style = null;
    bodyElem.style = null;
    scrolling = false;
}
var scrollcount = 0;
var lastScroll = new Date();
// Scrolljacker
document.addEventListener('scroll', function(e) {
  //console.log("scroooool", scrollcount++);
  var thisScroll = new Date();
  var scrollInterval = thisScroll - lastScroll;
  lastScroll = thisScroll;
  console.log("scroll interval", scrollInterval);
  if(visitedAllSlides || scrolling || slidingTo || scrollInterval < 100) {
    return;
  }
  //disableScroll();
  scrolling = true;
  setTimeout(window.requestAnimationFrame(function() {
    if (getCurrentSlide() !== totalSlides) {
      goToNextSlide();
    }
  }), 0);
  scrolling = true;
});
