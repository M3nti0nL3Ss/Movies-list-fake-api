import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a
            className="navbar-brand waves-effect"
            href="https://mdbootstrap.com/docs/jquery/"
          >
            <strong className="blue-text">MDB</strong>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link waves-effect" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link waves-effect"
                  href="https://mdbootstrap.com/docs/jquery/"
                >
                  About MDB
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link waves-effect"
                  href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
                >
                  Free download
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link waves-effect"
                  href="https://mdbootstrap.com/education/bootstrap/"
                >
                  Free tutorials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
