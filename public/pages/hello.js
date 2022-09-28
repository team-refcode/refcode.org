
var yellOuch = function () {
  alert("OUCH!");
};

var underlineHeading = function () {
  document.getElementsByTagName("h1")[0].style.textDecoration = "underline";
};

var undoUnderlineHeading = function () {
  document.getElementsByTagName("h1")[0].style.textDecoration = "none";
};


document.images[0].onmouseover = yellOuch;
document.getElementsByTagName("h1")[0].onmouseenter = underlineHeading;
document.getElementsByTagName("h1")[0].onmouseleave = undoUnderlineHeading;
