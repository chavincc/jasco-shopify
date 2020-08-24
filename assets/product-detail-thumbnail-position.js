// passed down variable
// String :: PRODUCT_FIRST_MEDIA_TYPE
// String :: product_thumbnail_wrap_id

const productThumbnailWrap = $(`#${product_thumbnail_wrap_id}`);
if (PRODUCT_FIRST_MEDIA_TYPE === "model") {
  productThumbnailWrap.css("top", "none");
  productThumbnailWrap.css("bottom", "20px");
} else {
  productThumbnailWrap.css("top", "calc((100vw - 200px) * 3 / 8)");
  productThumbnailWrap.css("bottom", "none");
}
