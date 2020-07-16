const testElementId = {
  name: "#related-product-test-name",
  quickLook: "#related-product-test-quick-look",
  cart: "#related-product-test-cart",
};
const productName = "apple";
const relatedProductName = "wireholder";

describe("related product", () => {
  const previewURL = "https://g0y5odme4ejsduwi-42097115292.shopifypreview.com";

  it("load successfully", () => {
    cy.visit(`${previewURL}/products/${productName}`);
  });

  it("links quicklook to itself", () => {
    cy.get(testElementId.quickLook).click();
    cy.url().should("include", `/${relatedProductName}`);
  });

  it("links cart", () => {
    cy.visit(`${previewURL}/products/${productName}`);
    cy.get(testElementId.cart).click();
    cy.url().should("include", "/cart");
    cy.contains(relatedProductName);
  });
});
