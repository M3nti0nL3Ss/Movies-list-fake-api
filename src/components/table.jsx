import React, { Component } from "react";
import Row from "./row";
import Pagination from "./pagination";

class Table extends Component {
  render() {
    const {
      onLike,
      onDelete,
      rows,
      pageSize,
      onPageChange,
      currentPage,
      rowsResized,
    } = this.props;
    return (
      <React.Fragment>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Movie</th>
              <th scope="col">Genre</th>
              <th scope="col">Stars</th>
              <th scope="col">Like</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {rowsResized.map((row) => (
              <Row
                key={row._id}
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
