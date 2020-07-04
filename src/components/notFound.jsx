import React from "react";
import Header from "./header";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <Header />
          <br />
          <h1>404 - Not FOUND</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
