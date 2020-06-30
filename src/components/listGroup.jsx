import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { genres } from "../services/genreService";

const ListGroup = (props) => {
  const { selectProp, valueProp, nameProp, onListChange } = props;
  return (
    <ul className="list-group pagination">
      <button
        className={
          props[selectProp] === null
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
            g === props[selectProp]
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          key={g[valueProp]}
          onClick={() => props.onListChange(g)}
          style={{ cursor: "pointer" }}
        >
          {g[nameProp]}
        </button>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProp: "_id",
  nameProp: "name",
  selectProp: "selected",
};

export default ListGroup;
