const carouselImageWrapper = document.getElementById('carousel-image-wrapper')

function slide(image) {
  carouselImageWrapper.style.transform = `translateX(-${image.id}00%)`
  carouselImageWrapper.style.transition = "0s";
}

setTimeout(function () {
  carouselImageWrapper.style.transform = "translateX(-200%)";
}, 2000)
