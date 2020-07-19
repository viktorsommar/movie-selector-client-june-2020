import React, { Component } from "react";
import axios from "axios";
import { Button, Segment } from 'semantic-ui-react'

class Movie extends Component {
  state = {
    randomMovie: null,
    watchlistMessage: {},
    watchlistDetails: {}
  };

  addToWatchlist = async (movie) => {
    let credentials = await JSON.parse(sessionStorage.getItem("credentials"))
    let headers = {
      ...credentials,
      "Content-type": "application/json",
      Accept: "application/json"
    }
    let response
    if (this.state.watchlistDetails.hasOwnProperty("id")) {
      response = await axios.put(
        `/watchlist_items/${this.state.watchlistDetails.id}`,
        {
          movie_db_id: this.state.randomMovie.id,
        },
        {
          headers: headers,
        }
      );
    } else {
      response = await axios.post(
        `/watchlist_items`,
        {
          movie_db_id: this.state.randomMovie.id,
        },
        {
          headers: headers,
        }
      )
    }
    this.setState({
      watchlistMessage: {
        message: response.data.message,
        id: movie.id,
      },
      watchlistDetails: response.data.watchlist
    })
  }

  getRandomMovie = async () => {
    let response = await axios.get(`/movies/random`);
    this.setState({ randomMovie: response.data.movie });
  }
  render() {
    let randomMovie;
    let watchlistDetailsDisplay
    this.state.randomMovie && (
      randomMovie = (
        <div id="random-movie">
          <h2 id="movie-title">{this.state.randomMovie.title}</h2>
          <p id="movie-overview">{this.state.randomMovie.overview}</p>
          <p id="movie-release-date">this movie was released in {this.state.randomMovie.release_date}</p>
          <p id="movie-rating">A total of {this.state.randomMovie.vote_count} persons has rated this movie. It has an average rating of {this.state.randomMovie.vote_average}</p>

          {this.props.authenticated && (

            <Button id="watchlist-button" onClick={this.addToWatchlist}>Add to Watchlist</Button>

          )}
          <p id="watchlist-message">{this.state.watchlistMessage.message}</p>
        </div>
      )
    )

    if (this.state.watchlistDetails.hasOwnProperty("movies")) {
      watchlistDetailsDisplay = this.state.watchlistDetails.movies.map((movie) => {
        return <li key={movie.title}>{`${movie.title}`}</li>;
      });
    } else {
      watchlistDetailsDisplay = "You have no movies in your watchlist";
    }

    return (
      <>
        <div>
          <Segment style={{ marginLeft: '10em', marginRight: '25em', marginTop: '5em' }}>
            <Button onClick={this.getRandomMovie} >Randomize Movie</Button>
            {randomMovie}
          </Segment>
        </div>

        {this.state.watchlistDetails.hasOwnProperty("movies") && (
          <Button
            onClick={() => this.setState({ showWatchlist: !this.state.showWatchlist })}
          >
            View watchlist
          </Button>
        )}
        {this.state.showWatchlist &&
          <>
            <ul id="watchlist-details">{watchlistDetailsDisplay}</ul>
          </>
        }
      </>
    );
  }
}

export default Movie;