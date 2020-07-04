import React from "react";
import Joi from "joi-browser";
import Header from "./header";
import Form from "./form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call to server :D
    console.log("Submited");
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="col">
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
