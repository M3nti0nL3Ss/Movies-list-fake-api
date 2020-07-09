import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getGenres } from "../services/genreService";

class ListGroup extends Component {
  state= {genres: []};
  componentDidMount() {
    getGenres().then(res => {this.setState({genres:res.data})});
  }
  render() {
    const { selectProp, valueProp, nameProp, onListChange } = this.props;
    return (
      <ul className="list-group pagination">
        <button
          className={
            this.props[selectProp] === null
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onListChange(null)}
          style={{ cursor: "pointer" }}
        >
          All genres
        </button>
        {this.state.genres.map((g) => (
          <button
            className={
              g === this.props[selectProp]
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            key={g[valueProp]}
            onClick={() => this.props.onListChange(g)}
            style={{ cursor: "pointer" }}
          >
            {g[nameProp]}
          </button>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  valueProp: "id",
  nameProp: "name",
  selectProp: "selected",
};

export default ListGroup;
