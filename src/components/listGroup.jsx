import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { genres } from "../services/genreService";

const ListGroup = (props) => {
  return (
    <ul className="list-group pagination">
      <button
        className={
          props.selected === null
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        }
        onClick={() => props.onListChange(null)}
        style={{ cursor: "pointer" }}
      >
        All genres
      </button>
      {genres.map((g) => (
        <button
          className={
            g === props.selected
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          key={g._id}
          onClick={() => props.onListChange(g)}
          style={{ cursor: "pointer" }}
        >
          {g.name}
        </button>
      ))}
    </ul>
  );
};

export default ListGroup;
