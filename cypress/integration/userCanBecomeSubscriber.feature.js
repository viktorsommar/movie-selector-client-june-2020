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

  it('successfully', () => {
    cy.get("#become-subscriber").click()
    cy.get("#payment-form").should("exist")
    cy.wait(1000)
    cy.get('iframe[name^="__privateStripeFrame5"]').then($iframe => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find('input[name="cardnumber"]')
        .type("4242424242424242", { delay: 50 })
    })

  })
})