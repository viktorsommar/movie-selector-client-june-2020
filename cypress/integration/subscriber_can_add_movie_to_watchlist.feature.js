describe("subscriber can add movie to their watchlist", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/movies/random",
      response: "fixture:random_movie.json"
    });
    
    cy.visit("/");
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth",
      response: "fixture:login_response.json",
      headers: {
        uid: "user@mail.com",
      },
    });

    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });

    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/watchlist",
      response: "fixture:watchlist_post_response.json",
    });

    cy.route({
      method: "PUT",
      url: "http://localhost:3000/api/v1/watchlist/1",
      response: "fixture:watchlist_put_response.json",
    });
  });

    it("subscriber can add movie to the watchlist ", () => {
      cy.get("movie-1").within(() => {
        cy.get("button").contains("Add to Watchlist").click();
        cy.get("#message").should(
          "contain",
          "the movie has been added to your watchlist"
        );
      });
    });
});
