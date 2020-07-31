// SLOTTING SLIDE DISTANCE INTO SLOT
const PRODUCT_WIDTH = 300;
const PRODUCT_MARGIN_RIGHT = 30;
const PRODUCT_PADDING_X = 16;
const PRODUCT_SLOT = PRODUCT_WIDTH + PRODUCT_MARGIN_RIGHT + PRODUCT_PADDING_X;

const ARTICLE_WIDTH = 280;
const ARTICLE_MARGIN_RIGHT = 30;
const ARTICLE_PADDING_X = 16;
const ARTICLE_SLOT = ARTICLE_WIDTH + ARTICLE_MARGIN_RIGHT + ARTICLE_PADDING_X;

const allSlider = {
  product: {
    prevButtonId: "#product-switch-prev",
    nextButtonId: "#product-switch-next",
    showcaseId: "#best-sellers-product-showcase",
    wrapperId: "#product-switch-wrapper",
    fallbackId: "#product-switch-wrapper-fallback",
    slot: PRODUCT_SLOT,
    loop: PRODUCT_SLOT * BEST_SELLERS_LIQUID_VARIABLE.primaryCollection.size,
  },
  secondaryProduct: {
    prevButtonId: "#secondary-product-switch-prev",
    nextButtonId: "#secondary-product-switch-next",
    showcaseId: "#new-arrival-product-showcase",
    wrapperId: "#secondary-product-switch-wrapper",
    fallbackId: "#secondary-product-switch-wrapper-fallback",
    slot: PRODUCT_SLOT,
    loop: PRODUCT_SLOT * BEST_SELLERS_LIQUID_VARIABLE.secondaryCollection.size,
  },
  slider: {
    prevButtonId: "#article-switch-prev",
    nextButtonId: "#article-switch-next",
    showcaseId: "#news-events-article-showcase",
    wrapperId: "#article-switch-wrapper",
    fallbackId: "#article-switch-wrapper-fallback",
    slot: ARTICLE_SLOT,
  },
};

const PRIMARY_TAB_BUTTON_ID = "#home-primary-collection-tab-btn";
const SECONDARY_TAB_BUTTON_ID = "#home-secondary-collection-tab-btn";
const BEST_SELLERS_HEADER_ID = "#best-sellers-header";
const BEST_SELLERS_SUBHEADER_ID = "#best-sellers-subheader";

const modulateSlotForward = (current = 0, screenWidth = 0, oneSlot = 0) => {
  const previousSlot = Math.floor(current / oneSlot) * oneSlot;
  const excessSpace = current - previousSlot;
  const totalPixel =
    oneSlot * (Math.floor(screenWidth / oneSlot) - 1) - excessSpace;
  return current + (totalPixel > 0 ? totalPixel : oneSlot - excessSpace);
};

const modulateSlotBackward = (current = 0, screenWidth = 0, oneSlot = 0) => {
  const previousSlot = Math.floor(current / oneSlot) * oneSlot;
  const totalSlotMovement = (Math.floor(screenWidth / oneSlot) - 1) * oneSlot;
  if (previousSlot !== current) return previousSlot;
  else return current - (totalSlotMovement <= 0 ? oneSlot : totalSlotMovement);
};

// ON DOCUMENT READY
$(document).ready(function () {
  // INITIALIZE BEST-SELLERS SLIDER POSITION
  const breakSmall = 576;
  if (window.innerWidth > breakSmall)
    $(allSlider.product.showcaseId).scrollLeft(
      modulateSlotForward(0, window.innerWidth, allSlider.product.loop * 2)
    );
  $(allSlider.secondaryProduct.showcaseId).scrollLeft(
    modulateSlotForward(
      0,
      window.innerWidth,
      allSlider.secondaryProduct.loop * 2
    )
  );

  // INITIALIZE TAB
  hideSlider(allSlider.secondaryProduct);
});

// SLIDE ARROW NAVIGATION -----------------------------------------
Object.keys(allSlider).forEach((slider) => {
  $(allSlider[slider].prevButtonId).click(() => {
    const current = $(allSlider[slider].showcaseId).scrollLeft();
    $(allSlider[slider].showcaseId).css("scroll-behavior", "smooth");
    $(allSlider[slider].showcaseId).scrollLeft(
      modulateSlotBackward(current, window.innerWidth, allSlider[slider].slot)
    );
    $(allSlider[slider].showcaseId).css("scroll-behavior", "auto");
  });
  $(allSlider[slider].nextButtonId).click(() => {
    const current = $(allSlider[slider].showcaseId).scrollLeft();
    $(allSlider[slider].showcaseId).css("scroll-behavior", "smooth");
    $(allSlider[slider].showcaseId).scrollLeft(
      modulateSlotForward(current, window.innerWidth, allSlider[slider].slot)
    );
    $(allSlider[slider].showcaseId).css("scroll-behavior", "auto");
  });
});

// TAB RENDERING FUNCTION
const hideSlider = (sliderObject) => {
  $(sliderObject.showcaseId).css("display", "none");
  $(sliderObject.wrapperId).css("display", "none");
};
const showSlider = (sliderObject) => {
  $(sliderObject.showcaseId).css("display", "flex");
  $(sliderObject.wrapperId).css("display", "block");
};

$(SECONDARY_TAB_BUTTON_ID).click(() => {
  hideSlider(allSlider.product);
  showSlider(allSlider.secondaryProduct);
  $(SECONDARY_TAB_BUTTON_ID).addClass("current");
  $(PRIMARY_TAB_BUTTON_ID).removeClass("current");
  $(BEST_SELLERS_HEADER_ID).text(
    BEST_SELLERS_LIQUID_VARIABLE.secondaryCollection.title
  );
  $(BEST_SELLERS_SUBHEADER_ID).text(
    BEST_SELLERS_LIQUID_VARIABLE.secondaryCollection.description
  );
});

$(PRIMARY_TAB_BUTTON_ID).click(() => {
  hideSlider(allSlider.secondaryProduct);
  showSlider(allSlider.product);
  $(PRIMARY_TAB_BUTTON_ID).addClass("current");
  $(SECONDARY_TAB_BUTTON_ID).removeClass("current");
  $(BEST_SELLERS_HEADER_ID).text(
    BEST_SELLERS_LIQUID_VARIABLE.primaryCollection.title
  );
  $(BEST_SELLERS_SUBHEADER_ID).text(
    BEST_SELLERS_LIQUID_VARIABLE.primaryCollection.description
  );
});

const j_test = $("#best-sellers-product-showcase");
const test = document.getElementById("best-sellers-product-showcase");
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  console.log(scroll_pos);
}

test.addEventListener("scroll", function (e) {
  last_known_scroll_position = j_test.scrollLeft();

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
