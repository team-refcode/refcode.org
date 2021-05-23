const carouselImageWrapper = document.querySelector('.carousel-image-wrapper')
const totalSlides = carouselImageWrapper.childElementCount;
const htmlElem = document.querySelector("html");
const bodyElem = document.querySelector("body");
var visitedAllSlides = false;
var scrolling = false;

const goToSlide = function (x) {
  const offset = --x * window.innerWidth;
  carouselImageWrapper.scrollTo({
    left: offset,
    behavior: 'smooth'
  });
}

const goToNextSlide = function () {
  var currentSlide = getCurrentSlide();
  var nextSlide = ((currentSlide + 1) % (totalSlides + 1));
  goToSlide(nextSlide);
  if (nextSlide === totalSlides || nextSlide === 0) {
    visitedAllSlides = true;
  }
  setTimeout(enableScroll, 1400);
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

// Scrolljacker
document.addEventListener('scroll', function(e) {
  if(visitedAllSlides || scrolling) {
    return;
  }
  scrolling = true;
  setTimeout(window.requestAnimationFrame(function() {
    if (getCurrentSlide() !== totalSlides) {
      disableScroll();
      goToNextSlide();
    }
  }), 0);
  scrolling = true;
});
