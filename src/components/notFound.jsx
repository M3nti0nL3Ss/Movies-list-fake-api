import React from "react";
import Header from "./header";

const NotFound = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="col">
          <br />
          <h1>404 - Not FOUND</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
