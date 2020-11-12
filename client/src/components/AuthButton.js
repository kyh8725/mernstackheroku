import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

class AuthButton extends Component {
  state = {
    isAuthenticated: false,
    user: null,
    API_URL: process.env.REACT_APP_API_URL,
  };

  componentDidMount() {
    // Check auth
    axios
      .get(`${this.state.API_URL}/passport/check-auth`, {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({
          isAuthenticated: true,
          user: res.data,
        });
      })
      .catch(() => {
        this.setState({
          isAuthenticated: false,
        });
      });
  }

  signOut = () => {
    // Change location to /logout server route while passing it
    // the URL for redirecting back to a client
    const url = `${window.location.protocol}//${window.location.host}`;
    window.location = `${this.state.API_URL}/passport/logout?from=${url}`;
  };

  render() {
    // Display user name and sign out button for logged in user
    // or a "not logged in" message
    return (
      this.state.isAuthenticated && (
        <p>
          <img
            className="profile-img"
            height="25"
            src={this.state.user.photos[0].value}
            alt={this.state.user.displayName}
          />
          Welcome, {this.state.user.username || this.state.user.displayName}!
          <Button variant="outline-danger" onClick={this.signOut}>
            Sign out
          </Button>
        </p>
      )
    );
  }
}

export default AuthButton;
