import React, { Component } from "react";
import Movie from "./component/Movie";
import Auth from "./component/Auth";
<<<<<<< HEAD
import PaymentForm from "./component/PaymentForm"
import { Elements } from "react-stripe-elements"
=======
import { Message, Segment, Menu } from 'semantic-ui-react'
>>>>>>> bcc20c2eaa424b7bf45276169d61a0092e13a7a6

class App extends Component {
  state = {
    authenticated: false,
  };
  render() {
    let login;
    this.state.authenticated
      ? (login = (
<<<<<<< HEAD
        <>
      
          <p id="message">
            {" "}
            Welcome, {JSON.parse(sessionStorage.getItem("credentials")).uid} !
          </p>
          <Elements>
          <PaymentForm />
          </Elements>
          </>
=======
        <Segment inverted>
        <Menu inverted pointing secondary>
        <Menu.Item as="h1">MovieSeletor</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="h4">
            <Message color='black' as="h3" id="message">
            {" "}
            Welcome, {JSON.parse(sessionStorage.getItem("credentials")).uid} !
          </Message>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
         
>>>>>>> bcc20c2eaa424b7bf45276169d61a0092e13a7a6
        ))
      : (login = (
          <Auth
            setAuthenticated={() => this.setState({ authenticated: true })}
          />
        ));

    return (
      <>
      
        <div>{login}</div>
        <div>
          <Movie authenticated={this.state.authenticated} />
        </div>
      </>
    );
  }
}

export default App;