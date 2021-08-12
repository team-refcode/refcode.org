const sharp = require("sharp");
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size')
let sourceSets = {}

  fs.readdir("img", function (err, files) {
  if (err) {
    console.error("Could not list the directory.");
    process.exit(1);
  }
  
  let dir = 'public/img';

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  files.forEach((file) => {
    let fileName = path.parse(file).name
    let fileExt = path.parse(file).ext
    let sizes = [320, 640, 960, 1200, 1800, 2400];

    if(!sourceSets[fileName]){
    let destPath = `public/img/${file}`
    sourceSets[fileName] = []

    sharp(`img/${file}`).toFile(destPath);

    fs.readFile(`img/${file}`,(err, buf) => {
    if (err) return  console.log(err);
    const dimensions = sizeOf(buf);
    sizes.forEach(size => {
    if(size < dimensions.width){
    let resizedDestPath = `../img/${fileName}-${size}${fileExt}`
    sourceSets[fileName].push(resizedDestPath + ` ${size}w`);
    
    sharp(`img/${file}`)
    .resize({ width: size})
    .toFile(`public/img/${fileName}-${size}${fileExt}`);
    }
})
    
    if (sourceSets[fileName].length > 0) { sourceSets[fileName].push(`../img/${file}`) }else{ delete sourceSets[fileName] }

    fs.writeFile("public/sourceSets.json",JSON.stringify(sourceSets), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
});

});
    }
});
})