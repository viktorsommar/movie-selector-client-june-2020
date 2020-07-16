import React, { Component } from "react";
import axios from "axios";

class Movie extends Component {
    state = {
      randomMovie: {}
    };
  



  getRandomMovie = ()=> {
    let response = await axios.get(`/movies/${randomId}`);
    this.setState({ randomMovies: response.data.results });
  }
   
  

  render() {
    return (
      <div>
        <button onClick={this.getRandomMovie} >Select Movie</button>
      </div>
    );
  }
}

export default Movie;