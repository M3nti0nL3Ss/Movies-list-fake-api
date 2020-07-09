import React from "react";
import Form from "./form";
import Header from "./header";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { getMovies, saveMovie } from "../services/moviesService";

class MovieForm extends Form {
  state = {
    data: {
      id: "",
      name: "",
      genreId: "",
      stars: "",
    },
    genres: [],
    errors: {},
  };

  async componentDidMount() {
    const genres = await getGenres();
    this.setState({ genres:genres.data });
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    const movies = await getMovies();
    const movie = movies.data.find(m => m.id === parseInt(movieId));
    let genreId = movie.genre.toString().match("/[0-9]*[0-9]/")[0];
    movie.genre = parseInt(genreId.slice(1,genreId.length -1));
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel = (movie) => {
    return {
      id: movie.id,
      name: movie.name,
      stars: movie.stars,
      genreId: movie.genre,
    };
  };

  schema = {
    id: Joi.number().allow(""),
    name: Joi.string().required().label("Name"),
    genreId: Joi.number().required().label("Genre"),
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
