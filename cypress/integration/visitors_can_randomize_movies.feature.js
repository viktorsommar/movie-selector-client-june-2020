describe("Visitors can randomize movies", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/movies",
      response: "fixture:movies.json",
    });
    cy.visit("/");
  });

  it("visitor can generate a movie", () => {
    
    cy.get("button").should("contain", "Select Movie").click();
  }) 

})