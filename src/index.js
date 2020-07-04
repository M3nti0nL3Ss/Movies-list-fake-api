import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Costumers from "./components/customers";
import CostumersDetails from "./components/costumersDetails";
import NotFound from "./components/notFound";
import MoviesDetails from "./components/moviesDetails";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/costumers" exact component={Costumers} />
        <Route path="/costumers/:id" component={CostumersDetails} />
        <Route path="/movies" exact component={App} />
        <Route path="/movies/:id" component={MoviesDetails} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Redirect from="/" to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
