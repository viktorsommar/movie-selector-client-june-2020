import React, { Component } from "react";
import axios from "axios";

class Movie extends Component {
  state = {
    randomMovie: null
  };

  getRandomMovie = async () => {
    let response = await axios.get(`/movies/random`);
    this.setState({ randomMovie: response.data.movie });
  }
  render() {
    let randomMovie;
    this.state.randomMovie && (
      randomMovie = (
        <div id="random-movie">
          <h2 id="movie-title">{this.state.randomMovie.title}</h2>
          <p id="movie-overview">{this.state.randomMovie.overview}</p>
          <p id="movie-release-date">this movie was released in {this.state.randomMovie.release_date}</p>
          <p id="movie-rating">A total of {this.state.randomMovie.vote_count} persons has rated this movie. It has an average rating of {this.state.randomMovie.vote_average}</p>
        </div>
      )
    )
    return (
      <div>
        <button onClick={this.getRandomMovie} >Randomize Movie</button>
        {randomMovie}
      </div>
    );
  }
}

export default Movie;