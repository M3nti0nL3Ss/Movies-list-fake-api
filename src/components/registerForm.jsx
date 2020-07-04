import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import Header from "./header";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", username: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
    username: Joi.string().required().label("Username"),
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
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("username", "Username")}
              {this.renderButton("Register")}
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
