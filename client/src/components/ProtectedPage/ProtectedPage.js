import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import AuthButton from "../AuthButton";
import Garage from "../ProtectedPage/Garage";
import axios from "axios";
import Warranty from "./Warranty";
import Finance from "./Finance";
import SavedVehicle from "./SavedVehicle";

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
    this.freeAventador();
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

  freeAventador = () => {
    axios
      .get(`${this.state.API_URL}/vehicles/get/5fb5cb4b1c67ee5fab5c3640`)
      .then((response) => {
        let newOwners = response.data[0].owners;
        newOwners.push(this.state.userName);
        axios
          .post(
            `${this.state.API_URL}/vehicles/update/5fb5cb4b1c67ee5fab5c3640`,
            {
              owners: newOwners,
            }
          )
          .then((response) => {
            axios
              .get(`${this.state.API_URL}/vehicles/${this.state.userName}`)
              .then((response) => {
                this.setState({ vehicles: response.data });
              });
          });
      });
  };

  render() {
    return (
      <>
        <AuthButton />
        <h3 style={{ textAlign: "center", color: "red" }}>
          <strong>This page is under construction</strong>
        </h3>
        <h5 style={{ textAlign: "center", color: "red" }}>
          you will get a black Aventador for default value. It will be added to
          your account every time you log in.
        </h5>
        <Garage userName={this.state.userName} />
        <Router>
          <PrivateRoute path="/warranty" component={Warranty} />
          <PrivateRoute path="/finance" component={Finance} />
          <PrivateRoute
            path="/savedVehicle"
            component={() => <SavedVehicle userName={this.state.userName} />}
          />
        </Router>
      </>
    );
  }
}
