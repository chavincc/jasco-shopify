const QUANTITY_BUTTON_CLASSNAME = "quantity-input-button";
const QUANTITY_BUTTON_ID = {
  add: `#${QUANTITY_BUTTON_CLASSNAME}-add`,
  subtract: `#${QUANTITY_BUTTON_CLASSNAME}-subtract`,
};
const QUANTITY_INPUT_MAIN_ID = "#quantity-input-main";
const getProductDetailQuantity = () => $(QUANTITY_INPUT_MAIN_ID).val();
const setProductDetailQuantity = (value) =>
  $(QUANTITY_INPUT_MAIN_ID).val(value);

const muteProductDetailQuantity = (change) => {
  const newValue = parseInt(getProductDetailQuantity()) + change;
  if (newValue < 1) return;
  setProductDetailQuantity(newValue);
};

$(QUANTITY_BUTTON_ID.add).click(() => {
  muteProductDetailQuantity(1);
});
$(QUANTITY_BUTTON_ID.subtract).click(() => {
  muteProductDetailQuantity(-1);
});
