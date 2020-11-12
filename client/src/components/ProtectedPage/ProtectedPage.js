import React, { Component } from "react";
import AuthButton from "../AuthButton";
import axios from "axios";

export default class ProtectedPage extends Component {
  state = {
    API_URL: process.env.REACT_APP_API_URL,
    users: [],
  };

  async componentDidMount() {
    await axios.get(`${this.state.API_URL}/users/allUsers`).then((response) => {
      this.setState({ users: response.data });
    });
    this.createUser();
  }

  createUser = () => {
    const newUserName = this.props.user.username || this.props.user.displayName;
    try {
      axios
        .post(`${this.state.API_URL}/users/newUser`, {
          userName: newUserName,
        })
        .then((response) => {
          console.log(`${newUserName}, created"`);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log("protected render", this.props);
    console.log("protected render", this.state.users);
    return (
      <>
        <section className="garage">
          <AuthButton />
          <p>
            <strong>This page is under construction </strong>
          </p>
          <p>saved vehicles will be shown here</p>
          <h1>{this.props.user.username || this.props.user.displayName}</h1>
        </section>
      </>
    );
  }
}
