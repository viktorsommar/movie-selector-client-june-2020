import React, { Component } from "react";
import Movie from "./component/Movie";
import Auth from "./component/Auth";
import { Message, Segment, Menu } from 'semantic-ui-react'

class App extends Component {
  state = {
    authenticated: false,
  };
  render() {
    let login;
    this.state.authenticated
      ? (login = (
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