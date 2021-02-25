describe("header", () => {
  it("shows the text", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Currency converter");
    cy.contains("Please enter the amount you want to convert in any field.");
  });
});
