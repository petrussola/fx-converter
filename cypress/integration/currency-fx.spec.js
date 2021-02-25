beforeEach(() => {
  cy.visit("http://localhost:3000");
});

describe("currency fx page", () => {
  it("displays the selected currency", () => {
    cy.contains("CURRENT EXCHANGE RATE").click();
    cy.contains("United States Dollar (USD) Exchange Rates");
  });
  it("displays new currency when selected", () => {
    cy.get(".base").find("select").select("AUD");
    cy.contains("CURRENT EXCHANGE RATE").click().wait(500);
    cy.contains("Australian Dollar (AUD) Exchange Rates");
    cy.contains("Exchange Rate = 1 AUD");
    cy.contains("CURRENCY CONVERTER").click();
    cy.get(".base").find("select").select("RUB").wait(500);
    cy.contains("CURRENT EXCHANGE RATE").click();
    cy.contains("Russian Ruble (RUB) Exchange Rates");
    cy.contains("Exchange Rate = 1 RUB");
  });
  it("displays table with fxs", () => {
    cy.contains("CURRENT EXCHANGE RATE").click().wait(500);
    cy.contains("Currency");
    cy.contains("Currency Name");
    cy.contains("Exchange Rate = 1 USD");
  });
});
