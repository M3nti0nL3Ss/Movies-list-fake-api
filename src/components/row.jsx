import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Row = (props) => {
  return (
    <tr>
      <th scope="row">{props.row.id}</th>
      <td>
        <Link to={"/movies/" + props.row.id}>{props.row.name}</Link>
      </td>
      <td>{props.row.genre.name}</td>
      <td>{props.row.stars}</td>
      <td>
        <FontAwesomeIcon
          icon={props.icon}
          onClick={() => props.onLike(props.row)}
          style={{
            cursor: "pointer",
            color: props.icon === faHeart ? "black" : "indianred",
          }}
          size="2x"
        />
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => props.onDelete(props.row)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
