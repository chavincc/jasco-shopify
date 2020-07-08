// constants
const FOOTER_FORM_ID = "#ContactFooter";
const FOOTER_ERROR_MESSAGE_ID = "#form-error-description-footer";
const FORM_INPUT_ID = {
  EMAIL: `${FOOTER_FORM_ID}-email`,
  FIRST_NAME: `${FOOTER_FORM_ID}-first-name`,
};

// intercept form submit and validate
$(FOOTER_FORM_ID).submit((e) => {
  e.preventDefault();

  clearFooterFormError();

  const email = $(FORM_INPUT_ID.EMAIL).val();
  const firstName = $(FORM_INPUT_ID.FIRST_NAME).val();

  const [fieldError, errorMessage] = validateFooterInput({ email, firstName });

  if (fieldError) {
    $(FOOTER_ERROR_MESSAGE_ID).text(`* ${errorMessage}`);
    $(FOOTER_FORM_ID).addClass("error");
    switch (fieldError) {
      case "EMAIL":
        $(FORM_INPUT_ID.EMAIL).addClass("error");
        break;
      case "FIRST_NAME":
        $(FORM_INPUT_ID.FIRST_NAME).addClass("error");
        break;
      default:
        break;
    }
  } else {
    $(FOOTER_FORM_ID).submit();
  }
});

const validateFooterInput = ({ email, firstName }) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let fieldError = false;
  let errorMessage = "";

  if (!email) {
    errorMessage = "please enter your email";
    fieldError = "EMAIL";
  } else if (!emailRegex.test(String(email).toLowerCase())) {
    errorMessage = "your input is not recognized as email";
    fieldError = "EMAIL";
  } else if (!firstName) {
    errorMessage = "please enter your name";
    fieldError = "FIRST_NAME";
  }

  return [fieldError, errorMessage];
};

const clearFooterFormError = () => {
  $(FOOTER_FORM_ID).removeClass("error");
  Object.keys(FORM_INPUT_ID).forEach((key) => {
    $(FORM_INPUT_ID[key]).removeClass("error");
  });
};
