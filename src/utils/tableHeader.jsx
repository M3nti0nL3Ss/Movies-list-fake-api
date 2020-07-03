import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sorted = { ...this.props.sorted };
    if (sorted.path === path)
      sorted.order = sorted.order === "asc" ? "desc" : "asc";
    else {
      sorted.path = path;
      sorted.order = "asc";
    }
    this.props.onSort(sorted);
  };
  renderSortIcon = (column) => {
    const { sorted } = this.props;
    if (column.path !== sorted.path || column.key) return null;
    if (sorted.order === "asc") return <FontAwesomeIcon icon={faSortUp} />;
    return <FontAwesomeIcon icon={faSortDown} />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              onClick={() => this.raiseSort(column.path)}
              scope="col"
              key={column.path || column.key}
              className="clickable"
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
