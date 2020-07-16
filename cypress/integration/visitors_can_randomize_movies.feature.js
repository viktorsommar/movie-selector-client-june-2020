describe("Visitors can randomize movies", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: 'http://localhost:3000/api/v1/movies/random',
      response: "fixtures:random_movie.json",
    });
    cy.visit("/");
  });

  it("visitor can get a random movie", () => {
    cy.get("button").should("contain", "Randomize Movie").click();
    cy.get('#random-movie').within(() => {
      cy.get('#movie-title').should("contain", "Star Wars")
      cy.get('#movie-overview').should("contain", "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.")
      cy.get('#movie-release-date').should("contain", "1977-05-25")
      cy.get('#movie-rating').should("contain", "13937 has rated this movie. It has an average ratings of 8.2")
    })
  }) 

})