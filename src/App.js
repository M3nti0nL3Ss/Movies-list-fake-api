import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";
import "bootstrap/dist/css/bootstrap.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { movies } from "./services/moviesService";
import { paginate } from "./utils/paginate";
import ListGroup from "./components/listGroup";

class App extends Component {
  state = {
    allRows: movies,
    rows: movies,
    selectedRow: null,
    currentPage: 1,
    pageSize: 3,
  };

  handleLike = (row) => {
    const rows = [...this.state.rows];
    const index = rows.indexOf(row);
    rows[index].clicked = rows[index].clicked === faHeart ? farHeart : faHeart;
    this.setState({ rows });
  };

  handleDelete = (row) => {
    const rows = this.state.rows.filter((c) => c._id !== row._id);
    this.setState({ rows, allRows: rows });
  };

  handelPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleListChange = (genre) => {
    let rows = [...this.state.allRows];
    if (genre !== null) rows = rows.filter((r) => r.genre._id === genre._id);
    this.setState({ rows, selectedRow: genre, currentPage: 1 });
  };

  render() {
    const { rows: all, pageSize, currentPage, selectedRow } = this.state;
    if (all.length === 0)
      return (
        <div className="container">
          <p>There's no movie</p>
        </div>
      );
    const rowsResized = paginate(all, currentPage, pageSize);
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ListGroup
              onListChange={this.handleListChange}
              rows={all}
              selected={selectedRow}
            />
          </div>
          <div className="col-8">
            <p>Showing {all.length} movies in the database.</p>
            <Table
              rowsResized={rowsResized}
              rows={all}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handelPageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
