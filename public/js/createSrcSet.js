
fetch("../sourceSets.json").then(response => { return response.json();})
.then(data => {
  let images = document.querySelectorAll('img')
  images.forEach(image => {
  let imageId = image.id
    if(imageId && data[imageId]){
    let src = data[imageId].pop()
    let srcset = data[imageId].toString();
    image.src = src;
    image.srcset= srcset;
    }
})
});

