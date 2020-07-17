const REGISTRATION_PASSWORD_TOGGLE_ID = "#register-form-password-toggle";

$(REGISTRATION_PASSWORD_TOGGLE_ID).click(() => {
  const passwordInput = $("#CustomerPassword");
  const isPassword = passwordInput.attr("type") === "password";
  toggleRegistrationPasswordButton(isPassword);
  toggleRegistrationPasswordInput(isPassword);
});

const toggleRegistrationPasswordButton = (isPassword) => {
  const passwordButton = $(REGISTRATION_PASSWORD_TOGGLE_ID);
  passwordButton.text(isPassword ? "hide" : "show");
};

const toggleRegistrationPasswordInput = (isPassword) => {
  const passwordInput = $("#CustomerPassword");
  passwordInput.attr("type", isPassword ? "text" : "password");
};
