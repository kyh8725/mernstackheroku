import React, { Component } from "react";
import GoogleMap from "./GoogleMap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown,
  faCaretSquareUp,
} from "@fortawesome/free-solid-svg-icons";

export default class Dealers extends Component {
  state = {
    dealers: [],
    API_URL: process.env.REACT_APP_API_URL,
    active: [],
    activeDealer: "",
  };

  async componentDidMount() {
    let activeState = [];
    await axios.get(`${this.state.API_URL}/dealers/getall`).then((response) => {
      response.data.map((dealer) => {
        let tempState = {};
        tempState.id = dealer._id;
        tempState.active = false;
        activeState.push(tempState);
      });
      this.setState({ dealers: response.data, active: activeState });
    });
  }

  setActive = (event) => {
    this.state.active.forEach((dealer) => {
      if (dealer.id === event.currentTarget.id) {
        this.setState({ activeDealer: dealer.id });
      }
    });
  };
  setDeactive = () => {
    this.setState({ activeDealer: "" });
  };

  dealerList = () => {
    let counter = 0;
    const dealers = this.state.dealers.map((dealer) => {
      counter++;
      return (
        <div>
          <div className="dealer__name">
            <h4>
              {counter}. {dealer.name}
              &nbsp;&nbsp;
            </h4>
            &nbsp;&nbsp;
            {this.state.activeDealer !== dealer._id && (
              <FontAwesomeIcon
                icon={faCaretSquareDown}
                size="lg"
                id={dealer._id}
                onClick={this.setActive}
              />
            )}
            {this.state.activeDealer === dealer._id && (
              <FontAwesomeIcon
                icon={faCaretSquareUp}
                size="lg"
                id={dealer._id}
                onClick={this.setDeactive}
              />
            )}
          </div>
          {this.state.activeDealer === dealer._id && (
            <div className="dealer__info" id={dealer._id}>
              <h5 className="dealer__info-address">{dealer.address}</h5>
              <h5 className="dealer__info-tel">tel: {dealer.tel}</h5>
              <h5 className="dealer__info-fax">fax: {dealer.fax}</h5>
              <h5 className="dealer__info-web">{dealer.web}</h5>
            </div>
          )}
        </div>
      );
    });
    return dealers;
  };
  render() {
    return (
      <>
        <h3 style={{ textAlign: "center", margin: "1rem", color: "red" }}>
          UNDER CONSTRUCTION
        </h3>
        <section className="dealer">
          <div className="dealer__map">
            <GoogleMap />
          </div>
          <div className="dealer__list">{this.dealerList()}</div>
        </section>
      </>
    );
  }
}
