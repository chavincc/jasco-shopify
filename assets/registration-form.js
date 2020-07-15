const REGISTRATION_FORM_ID = "#registration-form";
const REGISTRATION_PASSWORD_TOGGLE_ID = "#register-form-password-toggle";
const REGISTRATION_FORM_FIELD = {
  firstname: "firstname",
  lastname: "lastname",
  email: "email",
  password: "password",
};
const REGISTRATION_FORM_TYPE = {
  input: "input",
  errorMessage: "errorMessage",
  wrapper: "wrapper",
};
const getRegistrationItemId = (field, type) => {
  let classDecorator;
  switch (type) {
    case "input":
      classDecorator = "-";
      break;
    case "errorMessage":
      classDecorator = "-error-message-";
      break;
    case "wrapper":
      classDecorator = "-input-with-error-wrapper-";
      break;
    default:
      throw new Error(`type "${type}" does not exist`);
  }
  return `${REGISTRATION_FORM_ID}${classDecorator}${field}`;
};

$(REGISTRATION_PASSWORD_TOGGLE_ID).click(() => {
  toggleRegistrationPasswordInput();
  toggleRegistrationPasswordButton();
});

const toggleRegistrationPasswordButton = () => {
  const passwordInput = $(
    getRegistrationItemId(
      REGISTRATION_FORM_FIELD.password,
      REGISTRATION_FORM_TYPE.input
    )
  );
  const passwordButton = $(REGISTRATION_PASSWORD_TOGGLE_ID);

  if (passwordInput.attr("type") === "password") {
    passwordButton.text("Show");
  } else {
    passwordButton.text("Hide");
  }
};

const toggleRegistrationPasswordInput = () => {
  const passwordInput = $(
    getRegistrationItemId(
      REGISTRATION_FORM_FIELD.password,
      REGISTRATION_FORM_TYPE.input
    )
  );

  if (passwordInput.attr("type") === "password") {
    passwordInput.attr("type", "text");
  } else {
    passwordInput.attr("type", "password");
  }
};

$(REGISTRATION_FORM_ID).submit((e) => {
  e.preventDefault();
  const formIsValid =
    validateRegisterFirstname() &&
    validateRegisterLastname() &&
    validateRegisterEmail() &&
    validateRegisterPassword();

  if (formIsValid) {
    $(REGISTRATION_FORM_ID).submit();
  }
});

const validateRegisterFirstname = () => false;
const validateRegisterLastname = () => false;
const validateRegisterEmail = () => false;
const validateRegisterPassword = () => false;
