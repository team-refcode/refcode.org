fetch("../sourceSets.json").then(response => { return response.json();})
.then(data => {
  // generate and insert srcset attributes for  <img> elements that have a src
  let imagesTagged = document.querySelectorAll('img[data-src]');
  imagesTagged.forEach(image => {
    let sourceURL = image.getAttribute("data-src");
    let imageSrc = sourceURL.split("/").pop().split(".")[0]; // better hope your filenames don't have dots or slashes in them
      if (imageSrc && data[imageSrc]) {
        let srcset = data[imageSrc].toString();
        image.srcset= srcset;
      }
      image.src = sourceURL;
  });

});

