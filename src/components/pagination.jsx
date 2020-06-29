import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { totalCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(totalCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <button
              onClick={() => onPageChange(page)}
              className="page-link"
              style={{ cursor: "pointer" }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
