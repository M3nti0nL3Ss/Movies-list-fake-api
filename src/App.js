import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";
import "bootstrap/dist/css/bootstrap.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { movies } from "./services/moviesService";
import { paginate } from "./utils/paginate";
import ListGroup from "./components/listGroup";
import Header from "./components/header";
import _ from "lodash";

class App extends Component {
  state = {
    allRows: [],
    rows: [],
    selectedRow: null,
    currentPage: 1,
    pageSize: 3,
    sorted: { path: "name", order: "asc" },
  };

  componentDidMount() {
    this.setState({ rows: movies, allRows: movies });
  }

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

  handleSort = (sorted) => {
    this.setState({ sorted });
  };

  render() {
    const {
      rows: all,
      pageSize,
      currentPage,
      selectedRow,
      allRows,
      sorted,
    } = this.state;
    if (allRows.length === 0)
      return (
        <div className="container">
          <p>There's no movie</p>
        </div>
      );
    const allSorted = _.orderBy(all, [sorted.path], [sorted.order]);
    const rowsResized = paginate(allSorted, currentPage, pageSize);
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <ListGroup
                onListChange={this.handleListChange}
                rows={allSorted}
                selected={selectedRow}
              />
            </div>
            <div className="col-8">
              <p>Showing {allSorted.length} movies in the database.</p>

              <Table
                rowsResized={rowsResized}
                rows={allSorted}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handelPageChange}
                onSort={this.handleSort}
                sorted={sorted}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
