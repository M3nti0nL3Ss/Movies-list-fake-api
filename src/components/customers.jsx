import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
const Costumers = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="col">
          <br />
          <h3>Customers</h3>
          <ul>
            <li>
              <Link to="/costumers/1">1</Link>
            </li>
            <li>
              <Link to="/costumers/2">2</Link>
            </li>
            <li>
              <Link to="/costumers/3">3</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Costumers;
