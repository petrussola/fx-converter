beforeEach(() => {
  cy.visit("http://localhost:3000");
});

describe("Body component", () => {
  it("displays text", () => {
    cy.contains("Enter amount");
    cy.contains("Currency");
    cy.get(".base")
      .find(":selected")
      .should("have.text", "United States Dollar (USD)");
    cy.get(".destination").find(":selected").should("have.text", "Euro (EUR)");
  });
  it("change currency", () => {
    cy.get(".base")
      .find("select")
      .select("AUD")
      .find(":selected")
      .should("have.text", "Australian Dollar (AUD)");
    cy.get(".destination")
      .find("select")
      .select("AUD")
      .find(":selected")
      .should("have.text", "Australian Dollar (AUD)");
  });
  it("shows amount when typed amount", () => {
    cy.get(".base")
      .find('input[type="number"]')
      .wait(1000)
      .type("3000")
      .should("have.value", "3000");
    cy.get(".destination")
      .find('input[type="number"]')
      .wait(1000)
      .type("3000")
      .should("have.value", "3000");
  });
});
