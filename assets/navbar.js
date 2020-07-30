let menu_toggle = document.getElementById("xs-menu-toggle");
let head_bar = document.getElementById("xs-head-bars");
let icon_menu = document.getElementById("menu");
let overlay_rec = document.getElementById("overlay-rec");

showHamburgerMenu = () => {
  if (menu_toggle.style.transform === "translateX(100%)") {
    menu_toggle.style.transform = "translateX(0)";
    overlay_rec.style.display = "block";
    head_bar.style.position = "fixed";
  } else {
    menu_toggle.style.transform = "translateX(100%)";
    head_bar.style.position = "fixed";
    overlay_rec.style.display = "none";
  }
};

hideMenuToggle = () => {
  menu_toggle.style.transform = "translateX(100%)";
  head_bar.style.position = "fixed";
  overlay_rec.style.display = "none";
};

const PAGE = $("#page-header li a");
const NAVBAR = $("#navbar-header");
const TOP_POS = NAVBAR.height();
const PRODUCT_DROP = $(".products-hover");
const COLLECTIONS_BAR = $(".collection-menu-row ");
const COLLECTION_HEIGHT = COLLECTIONS_BAR[0].offsetHeight;
const PRODUCT_WORD = {
  product_EN: "PRODUCTS",
  product_TH: "ผลิตภัณฑ์",
};

let home_menu = $(".header-third-row");
let home_menu_top = home_menu.offset().top;

$(document).scroll(() => {
  stickyMenu();
});

stickyMenu = () => {
  if (window.pageYOffset >= home_menu_top) {
    home_menu.addClass("sticky-menu");
    PRODUCT_DROP.addClass("sticky-product-drop");
  } else {
    home_menu.removeClass("sticky-menu");
    PRODUCT_DROP.removeClass("sticky-product-drop");
  }
};

setTabNavbar = (current_page) => {
  if (current_page === "CONTACT US") {
    current_page = "CONTACT  US";
  }
  for (i = 0; i < PAGE.length; i++) {
    if (current_page === PAGE[i].text) {
      PAGE[i].style.fontWeight = "bold";
      PAGE[i].style.textDecoration = "none";
    }
  }
};

setTabNavbar(current_page);

removeTabNavbar = (current_page) => {
  for (i = 0; i < PAGE.length; i++) {
    if (current_page === PAGE[i].text) {
      PAGE[i].style.fontWeight = "normal";
      PAGE[i].style.textDecoration = "none";
    }
  }
};

hover_product_navbar = () => {
  for (let j = 0; j < PAGE.length; j++) {
    if (PAGE[j].text === PRODUCT_WORD.product_EN) {
      PAGE[j].onmouseover = function (e) {
        if ($(e.target).css("fontWeight") === "700") {
          hover_false();
        } else {
          hover_true();
        }
      };
      PAGE[j].onmouseout = function () {
        hover_product();
      };
    } else if (PAGE[j].text === PRODUCT_WORD.product_TH) {
      PAGE[j].onmouseover = function (e) {
        hover_true();
      };
      PAGE[j].onmouseout = function () {
        hover_product();
      };
    } else {
      PAGE[j].onmouseover = function () {
        hover_false();
      };
    }
  }
};

hover_product_mobile = () => {
  $("#products").attr("href", "#");
  $("#page-header li").on("touchstart", function (e) {
    if (
      $(e.target)[0].text === PRODUCT_WORD.product_EN ||
      $(e.target)[0].text === PRODUCT_WORD.product_TH
    ) {
      if ($(e.target).css("fontWeight") === "700") {
        hover_false();
      } else {
        hover_true();
      }
    }
  });
};

is_touch_device = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

if (!is_touch_device()) {
  hover_product_navbar();
} else {
  hover_product_mobile();
}

hover_product = () => {
  $(".products-hover").mouseover(function () {
    $(this).css("display", "flex");
    setTabNavbar("PRODUCTS");
  });
  $(".products-hover").mouseout(function () {
    $(this).css("display", "none");
    removeTabNavbar("PRODUCTS");
  });
  $("#navbar-header-hide").mouseenter(function () {
    hover_false();
  });
};

hover_true = () => {
  PRODUCT_DROP.css({
    display: "flex",
  });
  setTabNavbar("PRODUCTS");
  setTabNavbar("ผลิตภัณฑ์");
};

hover_false = () => {
  PRODUCT_DROP.css({
    display: "none",
  });
  removeTabNavbar("PRODUCTS");
  removeTabNavbar("ผลิตภัณฑ์");
};

let BTN_LANGS_LINK = document.getElementsByClassName(
  "ht-tms-dropdown__list-item__label"
);

findSubstring = (url_language, lang) => {
  const URL_LENGTH = url_language.length;
  const LANG_LENGTH = lang.length;
  let i, j;
  for (i = 0; i <= URL_LENGTH - LANG_LENGTH; i++) {
    for (j = 0; j < LANG_LENGTH; j++) {
      if (url_language[i + j] !== lang[j]) {
        break;
      }
    }
    if (j === LANG_LENGTH) {
      return true;
    }
  }
  return false;
};

selectLanguage = (language) => {
  for (j = 0; j < BTN_LANGS_LINK.length; j++) {
    if (BTN_LANGS_LINK[j].innerText == language) {
      BTN_LANGS_LINK[j].style.fontWeight = "bold";
    } else {
      BTN_LANGS_LINK[j].style.fontWeight = "normal";
    }
  }
};

if (findSubstring(url_language, "th")) {
  selectLanguage("TH");
} else {
  selectLanguage("EN");
}
