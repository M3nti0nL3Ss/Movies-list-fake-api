import React, { Component } from "react";
import Row from "./row";
import Pagination from "./pagination";
import TableHeader from "../utils/tableHeader";

class Table extends Component {
  columns = [
    { path: "id", label: "#" },
    { path: "name", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "stars", label: "Rate" },
    { key: "like" },
    { key: "handle" },
  ];
  render() {
    const {
      onLike,
      onDelete,
      rows,
      pageSize,
      onPageChange,
      currentPage,
      rowsResized,
      onSort,
      sorted,
    } = this.props;

    return (
      <React.Fragment>
        <table className="table table-striped table-hover">
          <TableHeader columns={this.columns} onSort={onSort} sorted={sorted} />
          <tbody>
            {rowsResized.map((row) => (
              <Row
                key={row.id}
                onLike={onLike}
                icon={row.clicked}
                row={row}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          totalCount={rows.length}
          pageSize={pageSize}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Table;
