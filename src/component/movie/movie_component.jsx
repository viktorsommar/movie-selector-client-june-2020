import React, { Component } from "react";
import axios from "axios";

class Movie extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount (){
    let movieList = await axios.get("/movies");
    this.setState({movies: movieList.data.movies})
  }

  render() {
    return (
      <div>
        <button>Select Movie</button>
      </div>
    );
  }
}

export default Movie;