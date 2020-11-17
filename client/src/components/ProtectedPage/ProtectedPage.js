import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import AuthButton from "../AuthButton";
import Garage from "../ProtectedPage/Garage";
import axios from "axios";
import PlayApi from "./PlayApi";
import Warranty from "./Warranty";

export default class ProtectedPage extends Component {
  state = {
    API_URL: process.env.REACT_APP_API_URL,
    users: [],
    userName: this.props.user.username || this.props.user.displayName,
  };

  async componentDidMount() {
    await axios.get(`${this.state.API_URL}/users/allUsers`).then((response) => {
      this.setState({ users: response.data });
    });
    this.createUser();
  }

  createUser = () => {
    try {
      axios
        .post(`${this.state.API_URL}/users/newUser`, {
          userName: this.state.userName,
        })
        .then((response) => {
          console.log(`${this.state.userName}, created"`);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <AuthButton />
        <h3 style={{ textAlign: "center", color: "red" }}>
          <strong>This page is under construction</strong>
        </h3>
        <Garage userName={this.state.userName} />
        <Router>
          <PrivateRoute path="/warranty" component={Warranty} />
          <PrivateRoute path="/history" component={PlayApi} />
          <PrivateRoute path="/lease" component={Warranty} />
        </Router>
      </>
    );
  }
}
