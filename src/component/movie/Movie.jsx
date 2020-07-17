import React, { Component } from "react";
import axios from "axios";

class Movie extends Component {
  state = {
    randomMovie: null
  };

  addToWatchlist = async (event) => {
    let movieId = event.target.parentElement.dataSet.id
    let credentials = await JSON.parse(sessionStorage.getItem("credentials"))
    let headers = {
      ...credentials,
      "Content-type": "application/json",
      Accept: "application/json"
    }
    let response 
    if (this.state.watchlist.hasOwnProperty("id")) {
    response = await axios.put(
      `/watchlist/${this.state.watchlist.id}`,
      {
        movie_id: movieId,
      },
      {
        headers: headers,
      }
    );
    } else {
      response = await axios.post(
        `/watchlist`,
        {
          movie_id: movieId,
        },
        {
          headers: headers,
        }
      )
    }
    this.setState({
      watchlistMessage: {
        message: response.data.message,
        id: movieId,
      },
      watchlist: response.data.watchlist
    })
  }

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
          <button id="watchlist-button" onClick={this.addToWatchlist}>Add to Watchlist</button> 
          <p id="watchlist-message">{this.state.watchlistMessage.message}</p>   
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