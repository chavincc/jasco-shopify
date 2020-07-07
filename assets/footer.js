// constants
const FOOTER_FORM_ID = "#ContactFooter";
const FOOTER_ERROR_MESSAGE_ID = "#form-error-description-footer";
const FORM_INPUT_ID = {
  EMAIL: `${FOOTER_FORM_ID}-email`,
  FIRST_NAME: `${FOOTER_FORM_ID}-first-name`,
};
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// return re.test(String(email).toLowerCase());
// intercept form submit and validate
$(FOOTER_FORM_ID).submit((e) => {
  e.preventDefault();
  // clear previous error
  $(FOOTER_FORM_ID).removeClass("error");
  Object.keys(FORM_INPUT_ID).forEach((key) => {
    $(FORM_INPUT_ID[key]).removeClass("error");
  });
  const email = $(FORM_INPUT_ID.EMAIL).val();
  const firstName = $(FORM_INPUT_ID.FIRST_NAME).val();
  let errorMessage = "";
  let formError = false;
  let emailError = false;
  let firstNameError = false;
  console.log(emailRegex.test(String(email).toLowerCase()));
  // validate email
  if (!email) {
    formError = true;
    errorMessage = "please enter your email";
    emailError = true;
  } else if (!emailRegex.test(String(email).toLowerCase())) {
    formError = true;
    errorMessage = "your input is not recognized as email";
    emailError = true;
  } else if (!firstName) {
    formError = true;
    errorMessage = "please enter your name";
    firstNameError = true;
  }
  if (formError) {
    $(FOOTER_ERROR_MESSAGE_ID).text(`* ${errorMessage}`);
    $(FOOTER_FORM_ID).addClass("error");
    if (firstNameError) $(FORM_INPUT_ID.FIRST_NAME).addClass("error");
    else if (emailError) $(FORM_INPUT_ID.EMAIL).addClass("error");
  } else {
    $(FOOTER_FORM_ID).submit();
  }
});
