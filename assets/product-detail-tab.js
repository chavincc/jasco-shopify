const PRODUCT_DETAIL_CONTENT_ID = {
  description: "#product-detail-tab-content-description",
  dimension: "#product-detail-tab-content-dimension",
};
const PRODUCT_DETAIL_TAB_ID = {
  description: "#tab-description",
  dimension: "#tab-dimension",
};

const productDetailOppositeKey = (key) => {
  if (key === "description") return "dimension";
  if (key === "dimension") return "description";
  return;
};

const switchProductDetailTab = (key) => {
  $(PRODUCT_DETAIL_TAB_ID[key]).addClass("current");
  $(PRODUCT_DETAIL_TAB_ID[productDetailOppositeKey(key)]).removeClass(
    "current"
  );
};

const switchProductDetailContent = (key) => {
  $(PRODUCT_DETAIL_CONTENT_ID[key]).css("display", "flex");
  $(PRODUCT_DETAIL_CONTENT_ID[productDetailOppositeKey(key)]).css(
    "display",
    "none"
  );
};

Object.keys(PRODUCT_DETAIL_TAB_ID).forEach((key) => {
  $(PRODUCT_DETAIL_TAB_ID[key]).click(() => {
    switchProductDetailContent(key);
    switchProductDetailTab(key);
  });
});
