describe("home", () => {
  const submitForm = () => {
    cy.contains("Subscribe").click();
  };

  it("validate footer form", () => {
    cy.visit("https://jasco-kos.myshopify.com/");

    const email = () => cy.get("#ContactFooter-email");
    const firstName = () => cy.get("#ContactFooter-first-name");

    submitForm();
    email().should("have.class", "error");
    firstName().should("not.have.class", "error");

    email().type("@mail.com");
    submitForm();
    email().should("have.class", "error");
    firstName().should("not.have.class", "error");

    email().clear().type("test@mail.com");
    submitForm();
    email().should("not.have.class", "error");
    firstName().should("have.class", "error");

    firstName().type("cypress_name_test");
    submitForm();
    email().should("not.have.class", "error");
    firstName().should("not.have.class", "error");
  });
});
