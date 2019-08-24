let carousel_image_wrapper = document.getElementById('carousel-image-wrapper')
  function slide(image){
    carousel_image_wrapper.style.transform = `translateX(-${image.id}00%)`
  }
    setTimeout(function (){
      // alert('hello')
      carousel_image_wrapper.style.transform = `translateX(-100%)`
     },2000)
     setTimeout(function (){
      // alert('hello')
      carousel_image_wrapper.style.transform = `translateX(-200%)`
     },12000)