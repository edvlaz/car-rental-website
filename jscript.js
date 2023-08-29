alert("Promocion de fin de mes ! Descuentos en rentas aniticipadas par el mes de Septiembre !");
function hideElement() {
  var image = document.getElementById('customModal');
  if (image.style.display == "block") {
    image.style.display = "none";
  } else {
    image.style.display ="none";
  }
}
function showElement() {
  var images = document.getElementById('customModal');
  if (images.style.display == "none") {
    images.style.display = "block";
  } else {
    images.style.display ="none";
  }
}
