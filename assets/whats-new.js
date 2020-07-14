function setHeightOfBlueBg() {
  let section_height = document.getElementById("whats-new-section")
    .clientHeight;
  let section_width = document.getElementById("whats-new-section").clientWidth;
  let height = section_height * 0.7;
  let blue_bg = $(".blue-bg");
  if (section_width <= 992) {
    blue_bg.css("height", section_height + "px");
  } else {
    blue_bg.css("height", height + "px");
  }
}

setHeightOfBlueBg();
window.addEventListener("resize", setHeightOfBlueBg, true);
