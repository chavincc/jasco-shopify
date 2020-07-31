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

let usingArrowNavigation = false;
let arrowNavigationCleanup;

const PRIMARY_TAB_BUTTON_ID = "#home-primary-collection-tab-btn";
const SECONDARY_TAB_BUTTON_ID = "#home-secondary-collection-tab-btn";
const BEST_SELLERS_HEADER_ID = "#best-sellers-header";
const BEST_SELLERS_SUBHEADER_ID = "#best-sellers-subheader";

const modulateSlotForward = (current = 0, screenWidth = 0, oneSlot = 0) => {
  const previousSlot = Math.floor(current / oneSlot) * oneSlot;
  const excessSpace = current - previousSlot;
  const totalPixel =
    oneSlot * (Math.floor(screenWidth / oneSlot) - 1) - excessSpace;
  let newCurrent =
    current + (totalPixel > 0 ? totalPixel : oneSlot - excessSpace);
  const { loop } = allSlider.product;
  if (newCurrent > loop * 4) {
    $(allSlider.product.showcaseId).scrollLeft(current - loop);
    newCurrent -= loop;
  }
  return newCurrent;
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

  // INITIALIZE TAB
  hideSlider(allSlider.secondaryProduct);
});

// SLIDE ARROW NAVIGATION -----------------------------------------
Object.keys(allSlider).forEach((slider) => {
  $(allSlider[slider].prevButtonId).click(() => {
    usingArrowNavigation = true;
    clearTimeout(arrowNavigationCleanup);
    arrowNavigationCleanup = setTimeout(() => {
      usingArrowNavigation = false;
    }, 1000);
    const current = $(allSlider[slider].showcaseId).scrollLeft();
    const newCurrent = modulateSlotBackward(
      current,
      window.innerWidth,
      allSlider[slider].slot
    );
    $(allSlider[slider].showcaseId).css("scroll-behavior", "smooth");
    $(allSlider[slider].showcaseId).scrollLeft(newCurrent);
    $(allSlider[slider].showcaseId).css("scroll-behavior", "auto");
  });
  $(allSlider[slider].nextButtonId).click(() => {
    usingArrowNavigation = true;
    clearTimeout(arrowNavigationCleanup);
    arrowNavigationCleanup = setTimeout(() => {
      usingArrowNavigation = false;
    }, 1000);
    const current = $(allSlider[slider].showcaseId).scrollLeft();
    const newCurrent = modulateSlotForward(
      current,
      window.innerWidth,
      allSlider[slider].slot
    );
    $(allSlider[slider].showcaseId).css("scroll-behavior", "smooth");
    $(allSlider[slider].showcaseId).scrollLeft(newCurrent);
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
  $(sliderObject.showcaseId).scrollLeft(
    modulateSlotForward(
      0,
      window.innerWidth,
      allSlider.secondaryProduct.loop * 2
    )
  );
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

// touch device infinite sliding
function touchDeviceInfiniteRelocation(scroll_pos, showcase, loop) {
  if (!usingArrowNavigation) {
    const current = showcase.scrollLeft();
    if (scroll_pos > loop * 4) {
      showcase.scrollLeft(current - loop);
    } else if (scroll_pos < loop) {
      showcase.scrollLeft(current + loop);
    }
  }
}

const primaryShowcaseJquery = $("#best-sellers-product-showcase");
const primaryShowcase = document.getElementById(
  "best-sellers-product-showcase"
);
let primaryScroll = 0;
let primaryTicking = false;
primaryShowcase.addEventListener("scroll", function (e) {
  primaryScroll = primaryShowcaseJquery.scrollLeft();
  if (!primaryTicking) {
    window.requestAnimationFrame(function () {
      touchDeviceInfiniteRelocation(
        primaryScroll,
        primaryShowcaseJquery,
        allSlider.product.loop
      );
      primaryTicking = false;
    });
    primaryTicking = true;
  }
});

const secondaryShowcaseJquery = $("#new-arrival-product-showcase");
const secondaryShowcase = document.getElementById(
  "new-arrival-product-showcase"
);
let secondaryScroll = 0;
let secondaryTicking = false;
secondaryShowcase.addEventListener("scroll", function (e) {
  secondaryScroll = secondaryShowcaseJquery.scrollLeft();
  if (!secondaryTicking) {
    window.requestAnimationFrame(function () {
      touchDeviceInfiniteRelocation(
        secondaryScroll,
        secondaryShowcaseJquery,
        allSlider.secondaryProduct.loop
      );
      secondaryTicking = false;
    });
    secondaryTicking = true;
  }
});
