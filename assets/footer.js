const FOOTER_FORM_ID = "#ContactFooter";
const FORM_INPUT_ID = {
  EMAIL: `${FOOTER_FORM_ID}-email`,
  FIRST_NAME: `${FOOTER_FORM_ID}-first-name`,
};

// intercept form submit and validate
$(FOOTER_FORM_ID).submit((e) => {
  e.preventDefault();

  const email = $(FORM_INPUT_ID.EMAIL).val();
  const firstName = $(FORM_INPUT_ID.FIRST_NAME).val();

  $(FOOTER_FORM_ID).addClass("error");
  $(FORM_INPUT_ID.EMAIL).addClass("error");

  //   $(FOOTER_FORM_ID).submit();
});
