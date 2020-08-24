var slideIndex = 1;

plusSlides = (num) => {
  slideIndex += num;
  showSlides(slideIndex);
};

currentSlide = (num) => {
  slideIndex = num;
  showSlides(slideIndex);
};

showSlides = (index) => {
  let img;
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
};

carousel = (slide) => {
  var x = document.getElementsByClassName("xs-slider");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, slider_rate);
};

showSlides(slideIndex);
carousel(0);
