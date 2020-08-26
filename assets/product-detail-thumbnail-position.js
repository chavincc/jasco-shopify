// passed down variable
// String :: PRODUCT_FIRST_MEDIA_TYPE
// String :: product_thumbnail_wrap_id
// String :: group_product_image_id

const productThumbnailWrap = $(`#${product_thumbnail_wrap_id}`);
const groupProductImage = $(`#${group_product_image_id}`);

const setPositionToModel = (productThumbnailWrap) => {
  if (screen.width >= 768) {
    productThumbnailWrap.css("top", "");
    productThumbnailWrap.css("bottom", "20px");
    groupProductImage.css("padding-bottom", "");
    groupProductImage.css("margin-bottom", "");
  } else if (screen.width >= 370) {
    productThumbnailWrap.css("top", "");
    productThumbnailWrap.css("bottom", "0");
    groupProductImage.css("padding-bottom", "75px");
    groupProductImage.css("margin-bottom", "25px");
  } else {
    productThumbnailWrap.css("top", "");
    productThumbnailWrap.css("bottom", "0");
    groupProductImage.css("padding-bottom", "130px");
    groupProductImage.css("margin-bottom", "25px");
  }
};

const setPositionToRegularMedia = (productThumbnailWrap) => {
  if (screen.width >= 768) {
    productThumbnailWrap.css("top", "calc((100vw - 200px) * 3 / 8)");
    productThumbnailWrap.css("bottom", "");
    groupProductImage.css("padding-bottom", "");
    groupProductImage.css("margin-bottom", "");
  } else if (screen.width >= 370) {
    productThumbnailWrap.css("top", "");
    productThumbnailWrap.css("bottom", "0");
    groupProductImage.css("padding-bottom", "75px");
    groupProductImage.css("margin-bottom", "25px");
  } else {
    productThumbnailWrap.css("top", "");
    productThumbnailWrap.css("bottom", "0");
    groupProductImage.css("padding-bottom", "130px");
    groupProductImage.css("margin-bottom", "25px");
  }
};

const setPosition = () => {
  if (PRODUCT_FIRST_MEDIA_TYPE === "model") {
    setPositionToModel(productThumbnailWrap);
  } else {
    setPositionToRegularMedia(productThumbnailWrap);
  }
};

$(`.${product_thumbnail_wrap_id}-model`).click(() => {
  setPositionToModel(productThumbnailWrap);
});

$(`.${product_thumbnail_wrap_id}-regular-media`).click(() => {
  setPositionToRegularMedia(productThumbnailWrap);
});

setPosition();
let resizeTicking = false;
$(window).resize(() => {
  if (!resizeTicking) {
    resizeTicking = true;
    setPosition();
    resizeTicking = false;
  }
});
