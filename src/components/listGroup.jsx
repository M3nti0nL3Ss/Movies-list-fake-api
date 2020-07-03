import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { genres } from "../services/genreService";

class ListGroup extends Component {
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
        {genres.map((g) => (
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
  valueProp: "_id",
  nameProp: "name",
  selectProp: "selected",
};

export default ListGroup;
