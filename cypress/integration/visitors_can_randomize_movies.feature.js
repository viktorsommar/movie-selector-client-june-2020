describe("Visitors can randomize movies", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: 'http://localhost:3000/api/v1/movies/random',
      response: "fixture:random_movie.json"
    });
    cy.visit("/");
  });

  it("visitor can get a random movies", () => {
    cy.get("button").should("contain", "Randomize Movie").click();
    cy.get('#random-movie').within(() => {
      cy.get('#movie-title').should("contain", "Star Wars")
      cy.get('#movie-overview').should("contain", "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.")
      cy.get('#movie-release-date').should("contain", "1977-05-25")
      cy.get('#movie-rating').should("contain", "A total of 13937 persons has rated this movie. It has an average rating of 8.2")
    })
    cy.route({
      method: "GET",
      url: 'http://localhost:3000/api/v1/movies/random',
      response: "fixture:another_random_movie.json"
    });
    cy.wait(1000)
    cy.get("button").should("contain", "Randomize Movie").click();
    cy.get('#random-movie').within(() => {
      cy.get('#movie-title').should("contain", "Batman")
      cy.get('#movie-overview').should("contain", "Batman bits up poor people.")
      cy.get('#movie-release-date').should("contain", "1999-05-15")
      cy.get('#movie-rating').should("contain", "A total of 1393 persons has rated this movie. It has an average rating of 7.5")
    })
  })
})