describe("basic test", () => {
  it("goes to the site", () => {
    cy.visit("http://localhost:8080");
    cy.title().should("include", "TerraFormer");
  });
  it("navigates to the home page correctly", () => {
    cy.get("#logo").click();
    cy.url().should("contain", "home");
    cy.get("div > div").eq(3).get("h1")
      .should("contain", "Greetings, TerraFormer");
  });
  it("navigates to the create planet page", () => {
    cy.get("#app > #Header");
    cy.get("nav li").eq(0).find("a").click();
    cy.url().should("contain", "editor");
  });
  it("creates planet and navigates to existing terraforms page", () => {
    cy.get("#app button").eq(1).click();
    cy.get("#app #planetName")
      .type("Flibertygibbet");
    cy.get("#app #planetDescription")
      .type("It is a nonsense planet");
    cy.get("#app .btn").eq(6).click();
    cy.get("#app a.btn.btn-secondary")  .click();
    cy.url().should("contain", "planet-cards");
  });
  it("checks to see that there are planet cards on the page", () => {
    cy.get("#app #Card").should("have.length.above", 1);
  });
  it("navagates to about page", () => {
    cy.get("#app nav a").eq(4).click();
    cy.url().should("contain", "about");
  });
});