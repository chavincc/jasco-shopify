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
const getRegistrationItem = (field, type) => {
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
  return $(`${REGISTRATION_FORM_ID}${classDecorator}${field}`);
};

$(REGISTRATION_PASSWORD_TOGGLE_ID).click(() => {
  const passwordInput = getRegistrationItem(
    REGISTRATION_FORM_FIELD.password,
    REGISTRATION_FORM_TYPE.input
  );
  const isPassword = passwordInput.attr("type") === "password";
  toggleRegistrationPasswordButton(isPassword);
  toggleRegistrationPasswordInput(isPassword);
});

const toggleRegistrationPasswordButton = (isPassword) => {
  const passwordButton = $(REGISTRATION_PASSWORD_TOGGLE_ID);
  passwordButton.text(isPassword ? "hide" : "show");
};

const toggleRegistrationPasswordInput = (isPassword) => {
  const passwordInput = getRegistrationItem(
    REGISTRATION_FORM_FIELD.password,
    REGISTRATION_FORM_TYPE.input
  );
  passwordInput.attr("type", isPassword ? "text" : "password");
};

const validateRegisterFirstname = () => {
  const field = REGISTRATION_FORM_FIELD.firstname;
  const firstname = getRegistrationItem(
    field,
    REGISTRATION_FORM_TYPE.input
  ).val();
  if (!firstname) {
    showRegistrationError(field, "please enter your firstname");
    return false;
  }
  return true;
};

const validateRegisterLastname = () => {
  const field = REGISTRATION_FORM_FIELD.lastname;
  const lastname = getRegistrationItem(
    field,
    REGISTRATION_FORM_TYPE.input
  ).val();
  if (!lastname) {
    showRegistrationError(field, "please enter your lastname");
    return false;
  }
  return true;
};

const validateRegisterEmail = () => {
  const field = REGISTRATION_FORM_FIELD.email;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = getRegistrationItem(field, REGISTRATION_FORM_TYPE.input).val();
  if (!email) {
    showRegistrationError(field, "please enter your email");
    return false;
  }
  if (!emailRegex.test(String(email).toLowerCase())) {
    showRegistrationError(field, "your input is not recognized as email");
    return false;
  }
  return true;
};
const validateRegisterPassword = () => {
  const field = REGISTRATION_FORM_FIELD.password;
  const password = getRegistrationItem(
    field,
    REGISTRATION_FORM_TYPE.input
  ).val();
  if (!password) {
    showRegistrationError(field, "please enter your password");
    return false;
  }
  if (password.length < 6) {
    showRegistrationError(field, "password is too short");
    return false;
  }
  if (password.length > 15) {
    showRegistrationError(field, "password is too long");
    return false;
  }
  return true;
};

const showRegistrationError = (field, message) => {
  $(getRegistrationItem(field, REGISTRATION_FORM_TYPE.wrapper)).addClass(
    "error"
  );
  $(getRegistrationItem(field, REGISTRATION_FORM_TYPE.errorMessage)).text(
    message
  );
};
const clearRegistrationError = (field) => {
  $(getRegistrationItem(field, REGISTRATION_FORM_TYPE.wrapper)).removeClass(
    "error"
  );
};

$(REGISTRATION_FORM_ID).submit((e) => {
  e.preventDefault();

  Object.keys(REGISTRATION_FORM_FIELD).forEach((field) => {
    clearRegistrationError(field);
  });

  const firstnameIsValid = validateRegisterFirstname();
  const lastnameIsValid = validateRegisterLastname();
  const emailIsValid = validateRegisterEmail();
  const passwordIsValid = validateRegisterPassword();

  const formIsValid =
    firstnameIsValid && lastnameIsValid && emailIsValid && passwordIsValid;
  if (formIsValid) {
    $(REGISTRATION_FORM_ID).submit();
  }
});
