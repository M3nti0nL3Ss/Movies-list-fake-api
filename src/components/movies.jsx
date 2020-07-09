import React, { Component } from "react";
import "../App.css";
import Table from "./table";
import "bootstrap/dist/css/bootstrap.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { getMovies, getMovieByName,movieToRender } from "../services/moviesService";
import { paginate } from "../utils/paginate";
import ListGroup from "./listGroup";
import Header from "./header";
import _ from "lodash";
import { Link } from "react-router-dom";
import Input from "./input";
import http from "../services/httpService";
import config from "../config.json";

class Movies extends Component {
  state = {
    allRows: [],
    rows: [],
    selectedRow: null,
    currentPage: 1,
    pageSize: 3,
    searchText: "",
    sorted: { path: "name", order: "asc" },
  };

  async componentDidMount() {
    //has to be corrected
    const movies = await getMovies();
    const data = [];
    for(let row of movies.data){
      data.push(await movieToRender(row));
    }
    this.setState({rows:data,allRows:data});
    }

  handleLike = (row) => {
    const rows = [...this.state.rows];
    const index = rows.indexOf(row);
    rows[index].clicked = rows[index].clicked === faHeart ? farHeart : faHeart;
    this.setState({ rows });
  };

  handleDelete = async (row) => {
    await http.delete(`${config.movieapi}${row.id}/`,row);
    const rows = this.state.rows.filter((c) => c.id !== row.id);
    this.setState({ rows, allRows: rows });
  };

  handelPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleListChange = (genre) => {
    let rows = [...this.state.allRows];
    if (genre !== null) rows = rows.filter((r) => r.genre.id === genre.id);
    this.setState({ rows, selectedRow: genre, currentPage: 1, searchText: "" });
  };

  handleSort = (sorted) => {
    this.setState({ sorted });
  };

  handleSearch = async ({ currentTarget }) => {
    const string = currentTarget.value;
    const rows = string !== "" ? await getMovieByName(string) : this.state.allRows;
    //console.log(rows);
    this.setState({
      searchText: string,
      currentPage: 1,
      selectedRow: null,
      rows: rows,
    });
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
          <p>Loading...</p>
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
              <Link
                className="btn btn-primary"
                to="/movies/new"
                style={{ marginBottom: 20 }}
              >
                New Movie
              </Link>
              <Input
                name="search"
                label="Search"
                value={this.state.searchText}
                onChange={this.handleSearch}
              />
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

export default Movies;
