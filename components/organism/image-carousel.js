  const carousel_image_wrapper = document.getElementById('carousel-image-wrapper')
  function slide(image){
    carousel_image_wrapper.style.transform = `translateX(-${image.id}00%)`
    carousel_image_wrapper.style.transition = "0s";

  }
  setTimeout(function (){
    carousel_image_wrapper.style.transform = "translateX(-200%)";
  },2000)

  // setTimeout(function (){
  //   // alert('hello')
  //   carousel_image_wrapper.style.transform = `translateX(-200%)`
  // },12000)
