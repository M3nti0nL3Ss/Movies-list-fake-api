import React from "react";
import Header from "./header";

const CostumersDetails = (props) => {
  return (
    <React.Fragment>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <h3>Customer - {props.match.params.id}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CostumersDetails;
