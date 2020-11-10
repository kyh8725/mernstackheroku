import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Login extends Component {
  state = {
    API_URL: process.env.REACT_APP_API_URL,
  };

  login = () => {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const url = `${window.location.protocol}//${window.location.host}${from.pathname}`;
    window.location = `${this.state.API_URL}/passport/login/?from=${url}`;
  };
  loginGoogle = () => {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const url = `${window.location.protocol}//${window.location.host}${from.pathname}`;
    window.location = `${this.state.API_URL}/passport/google/?from=${url}`;
  };

  render() {
    return (
      <div className="login">
        <div className="login__title">LOGIN</div>
        <div className="login__welcome">
          <p>Welcome to dreamGarage </p>
          <p>You can log in with Github or Google+ id. </p>
        </div>
        <div className="login__btn-wrap">
          <Button
            variant="secondary"
            className="login__button"
            onClick={this.login}
          >
            <i className="fa fa-github"> Github</i>
          </Button>

          <Button
            variant="danger"
            className="login__button"
            onClick={this.loginGoogle}
          >
            <i className="fa fa-google"> Google</i>
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
