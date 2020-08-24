// passed down variable
// String :: PRODUCT_FIRST_MEDIA_TYPE
// String :: product_thumbnail_wrap_id

const productThumbnailWrap = $(`#${product_thumbnail_wrap_id}`);

const setPositionToModel = (productThumbnailWrap) => {
  productThumbnailWrap.css("top", "none");
  productThumbnailWrap.css("bottom", "20px");
};

const setPositionToRegularMedia = (productThumbnailWrap) => {
  productThumbnailWrap.css("top", "calc((100vw - 200px) * 3 / 8)");
  productThumbnailWrap.css("bottom", "none");
};

if (PRODUCT_FIRST_MEDIA_TYPE === "model") {
  setPositionToModel(productThumbnailWrap);
} else {
  setPositionToRegularMedia(productThumbnailWrap);
}
