import React, { Component } from "react";
import Header from "./header";

class MoviesDetails extends Component {
  saveMovie = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <br />
        <div className="container">
          <div className="row">
            <h3>Movie - {this.props.match.params.id}</h3>
            <button className="btn btn-primary m-2" onClick={this.saveMovie}>
              Save
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesDetails;
