beforeEach(() => {
  cy.visit("http://localhost:3000");
});

describe("Nav Bar", () => {
  it("Shows titles", () => {
    cy.contains("CURRENCY CONVERTER");
    cy.contains("CURRENT EXCHANGE RATE");
  });

  it("Redirects to /current-fx when clicking current exchange rate menu", () => {
    cy.contains("CURRENT EXCHANGE RATE").click();
    cy.url().should("include", "/current-fx");
  });
  it("Returns to '/' when clicking back to CURRENCY CONVERTER", () => {
    cy.contains("CURRENT EXCHANGE RATE").click();
    cy.contains("CURRENCY CONVERTER").click();
    cy.url().should("include", "/");
  });
});
