let menu_toggle = document.getElementById("xs-menu-toggle");
let head_bar = document.getElementById("xs-head-bars");
let icon_menu = document.getElementById("menu");
let overlay_rec = document.getElementById("overlay-rec");

function showHamburgerMenu() {
  if (menu_toggle.style.transform === "translateX(100%)") {
    menu_toggle.style.transform = "translateX(0)";
    overlay_rec.style.display = "block";
    head_bar.style.position = "fixed";
  } else {
    menu_toggle.style.transform = "translateX(100%)";
    head_bar.style.position = "fixed";
    overlay_rec.style.display = "none";
  }
}

function hideMenuToggle() {
  menu_toggle.style.transform = "translateX(100%)";
  head_bar.style.position = "fixed";
  overlay_rec.style.display = "none";
  icon_menu.src = "images/menu1.png";
}

const ALL_PAGES = $("#page-header li");
const PAGE = $("#page-header li a");
const NAVBAR = $("#navbar-header");
const TOP_POS = NAVBAR.height();
const PRODUCT_DROP = $(".products-hover");
const COLLECTIONS_BAR = $(".collection-menu-row ");
const COLLECTION_HEIGHT = COLLECTIONS_BAR[0].offsetHeight;

let home_menu = $(".header-third-row");
let home_menu_top = home_menu.offset().top;

$(document).scroll(function () {
  stickyMenu();
});

function stickyMenu() {
  if (window.pageYOffset >= home_menu_top) {
    home_menu.addClass("sticky-menu");
    PRODUCT_DROP.addClass("sticky-product-drop");
  } else {
    home_menu.removeClass("sticky-menu");
    PRODUCT_DROP.removeClass("sticky-product-drop");
  }
}

function setTabNavbar(current_page) {
  console.log("inin");
  for (i = 0; i < ALL_PAGES.length; i++) {
    if (current_page === i || current_page + 6 === i) {
      PAGE[i].style.fontWeight = "bold";
      PAGE[i].style.textDecoration = "none";
    }
  }
}
function removeTabNavbar(current_page) {
  for (i = 0; i < ALL_PAGES.length; i++) {
    if (current_page === i || current_page + 6 === i) {
      PAGE[i].style.fontWeight = "normal";
      PAGE[i].style.textDecoration = "none";
    }
  }
}

function hover_product_navbar() {
  for (let j = 0; j < ALL_PAGES.length; j++) {
    if (PAGE[j].text === "PRODUCTS") {
      // if (PAGE[j].id === "products") {
      PAGE[j].onmouseover = function () {
        hover_true();
      };
      PAGE[j].onmouseout = function () {
        hover_product();
      };
      // } else {
      //   PAGE[j].onmouseover = function () {
      //     setTabNavbar(2);
      //   };
      //   PAGE[j].onmouseout = function () {
      //     removeTabNavbar(2);
      //   };
      // }
    }
  }
}

function hover_product_mobile() {
  $("#products").attr("href", "#");
  $("#page-header li").on("touchstart", function (e) {
    if ($(e.target)[0].text === "PRODUCTS") {
      if ($(e.target).css("fontWeight") === "700") {
        hover_false();
      } else {
        hover_true();
      }
    }
  });
}

function is_touch_device() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

if (!is_touch_device()) {
  hover_product_navbar();
} else {
  hover_product_mobile();
}

function hover_product() {
  $(".products-hover").mouseover(function () {
    $(this).css("display", "flex");
    setTabNavbar(2);
  });
  $(".products-hover").mouseout(function () {
    $(this).css("display", "none");
    removeTabNavbar(2);
  });
  $("#navbar-header-hide").mouseenter(function () {
    hover_false();
  });
  $("#products").mouseover(function (e) {
    if ($(e.target).css("fontWeight") === "700") {
      hover_false();
    } else {
      hover_true();
    }
  });
}

function hover_true() {
  PRODUCT_DROP.css({
    display: "flex",
  });
  setTabNavbar(2);
}

function hover_false() {
  PRODUCT_DROP.css({
    display: "none",
  });
  removeTabNavbar(2);
}
