const INQUIRY_FORM_ID = "#get-in-touch-inquiry-form";
const INQUIRY_FORM_FIELDS = ["name", "email", "message"];

const generateInquiryFormId = (type, field) => {
  switch (type) {
    case "wrapper":
      return `${INQUIRY_FORM_ID}-input-wrapper-${field}`;
    case "message":
      return `${INQUIRY_FORM_ID}-error-message-${field}`;
    case "input":
      return `${INQUIRY_FORM_ID}-${field}`;
    default:
      throw new Error("type is not recognized");
  }
};

$(INQUIRY_FORM_ID).submit((e) => {
  e.preventDefault();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // clear previous error
  INQUIRY_FORM_FIELDS.forEach((field) => {
    $(generateInquiryFormId("wrapper", field)).removeClass("error");
  });

  const [name, email, message] = INQUIRY_FORM_FIELDS.map((field) =>
    $(generateInquiryFormId("input", field)).val()
  );

  const validationResult = {
    name: {
      isError: false,
      errorMessage: "",
    },
    email: {
      isError: false,
      errorMessage: "",
    },
    message: {
      isError: false,
      errorMessage: "",
    },
  };

  if (!name) {
    validationResult.name.isError = true;
    validationResult.name.errorMessage = "please enter your name";
  }
  if (!email) {
    validationResult.email.isError = true;
    validationResult.email.errorMessage = "please enter your email";
  } else if (!emailRegex.test(String(email).toLowerCase())) {
    validationResult.email.isError = true;
    validationResult.email.errorMessage =
      "your input is not recognized as email";
  }
  if (!message) {
    validationResult.message.isError = true;
    validationResult.message.errorMessage = "please enter your message";
  }

  let formIsError = false;
  INQUIRY_FORM_FIELDS.forEach((key) => {
    if (validationResult[key].isError) {
      formIsError = true;
      $(generateInquiryFormId("message", key)).text(
        validationResult[key].errorMessage
      );
      $(generateInquiryFormId("wrapper", key)).addClass("error");
    }
  });

  console.log(formIsError);
  if (!formIsError) {
    $(INQUIRY_FORM_ID).submit();
  }
});
