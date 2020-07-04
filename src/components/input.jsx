import React from "react";

const Input = ({ name, label, smallMsg, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        className="form-control"
        id={name}
        aria-describedby={name + "help"}
      />
      {smallMsg && (
        <small id={name + "help"} className="form-text text-muted">
          {smallMsg}
        </small>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
