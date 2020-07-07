var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(index) {
  var img;
  const SLIDES = document.getElementsByClassName("slider");
  const DOTS = document.getElementsByClassName("dot");

  if (index > SLIDES.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = SLIDES.length;
  }
  for (img = 0; img < SLIDES.length; img++) {
    SLIDES[img].style.display = "none";
  }
  for (img = 0; img < DOTS.length; img++) {
    DOTS[img].className = DOTS[img].className.replace(" active", "");
  }
  SLIDES[slideIndex - 1].style.display = "block";
  DOTS[slideIndex - 1].className += " active";
}
