import React from "react";
import Form from "./form";
import Header from "./header";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/moviesService";

class MovieForm extends Form {
  state = {
    data: {
      _id: "",
      name: "",
      genreId: "",
      stars: "",
    },
    genres: getGenres(),
    errors: {},
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      name: movie.name,
      stars: movie.stars,
      genreId: movie.genre._id,
    };
  };

  schema = {
    _id: Joi.string().allow(""),
    name: Joi.string().required().label("Name"),
    genreId: Joi.string().required().label("Genre"),
    stars: Joi.number().max(8).required().label("Stars"),
  };

  doSubmit = () => {
    //call to server :D
    saveMovie(this.state.data);
    this.props.history.push("/movies");
    console.log("Submited");
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="col">
              {this.renderInput("name", "Title")}
              {this.renderSelection("genreId", "Genres", this.state.genres)}
              {this.renderInput("stars", "Stars")}
              {this.renderButton("Save")}
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
