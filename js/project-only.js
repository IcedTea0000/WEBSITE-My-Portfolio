
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function myFunction2(imgs) {
  var expandImg2 = document.getElementById("expandedImg2");
  var imgText2 = document.getElementById("imgtext2");
  expandImg2.src = imgs.src;
  imgText2.innerHTML = imgs.alt;
  expandImg2.parentElement.style.display = "block";
}

function myFunction3(imgs) {
  var expandImg3 = document.getElementById("expandedImg3");
  var imgText3 = document.getElementById("imgtext3");
  expandImg3.src = imgs.src;
  imgText3.innerHTML = imgs.alt;
  expandImg3.parentElement.style.display = "block";
}