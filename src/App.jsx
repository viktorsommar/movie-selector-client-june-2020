import React, { Component } from "react";
import Movie from "./component/movie/Movie";
import Auth from "./component/Auth";
import PaymentForm from "./component/PaymentForm"
import { Elements } from "react-stripe-elements"

class App extends Component {
  state = {
    authenticated: false,
  };
  render() {
    let login;
    this.state.authenticated
      ? (login = (
        <>
      
          <p id="message">
            {" "}
            Welcome, {JSON.parse(sessionStorage.getItem("credentials")).uid} !
          </p>
          <Elements>
          <PaymentForm />
          </Elements>
          </>
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