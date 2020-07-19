describe('User can become subscriber successfully', () => {
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
      url: "http://localhost:3000/api/v1/auth/sign_in",
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
  })

  describe('successfully', () => {
    cy.get("#become-subscriber").click()
    cy.get("#payment-form").should("exist")
  })
})