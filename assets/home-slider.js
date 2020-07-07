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
  },
  secondaryProduct: {
    prevButtonId: "#secondary-product-switch-prev",
    nextButtonId: "#secondary-product-switch-next",
    showcaseId: "#new-arrival-product-showcase",
    wrapperId: "#secondary-product-switch-wrapper",
    fallbackId: "#secondary-product-switch-wrapper-fallback",
    slot: PRODUCT_SLOT,
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
      modulateSlotForward(0, window.innerWidth, PRODUCT_SLOT)
    );

  // INITIALIZE TAB
  hideSlider(allSlider.secondaryProduct);
});

// SLIDE ARROW NAVIGATION -----------------------------------------
Object.keys(allSlider).forEach((slider) => {
  $(allSlider[slider].prevButtonId).click(() => {
    const current = $(allSlider[slider].showcaseId).scrollLeft();
    $(allSlider[slider].showcaseId).scrollLeft(
      modulateSlotBackward(current, window.innerWidth, allSlider[slider].slot)
    );
  });
  $(allSlider[slider].nextButtonId).click(() => {
    const current = $(allSlider[slider].showcaseId).scrollLeft();
    $(allSlider[slider].showcaseId).scrollLeft(
      modulateSlotForward(current, window.innerWidth, allSlider[slider].slot)
    );
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

$("#home-new-arrival-tab-btn").click(() => {
  hideSlider(allSlider.product);
  showSlider(allSlider.secondaryProduct);
  $("#home-new-arrival-tab-btn").addClass("current");
  $("#home-best-sellers-tab-btn").removeClass("current");
});
$("#home-best-sellers-tab-btn").click(() => {
  hideSlider(allSlider.secondaryProduct);
  showSlider(allSlider.product);
  $("#home-best-sellers-tab-btn").addClass("current");
  $("#home-new-arrival-tab-btn").removeClass("current");
});
