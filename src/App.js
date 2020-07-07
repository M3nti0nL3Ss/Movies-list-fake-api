import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Costumers from "./components/customers";
import CostumersDetails from "./components/costumersDetails";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import { saveMovie } from "./services/moviesService";

class App extends Component {
  handleAddMovie = (movie) => {
    return saveMovie(movie);
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/costumers" exact component={Costumers} />
          <Route path="/costumers/:id" component={CostumersDetails} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Redirect from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
