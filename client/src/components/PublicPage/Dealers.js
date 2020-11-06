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

  getActiveMarker = (id) => {
    this.setState({ activeDealer: id });
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
              <div>
                <a href={`tel:${dealer.tel}}`}>
                  <h5 className="dealer__info-tel">tel: {dealer.tel}</h5>
                </a>
                <a href={`fax:${dealer.fax}}`}>
                  <h5 className="dealer__info-fax">fax: {dealer.fax}</h5>
                </a>
                <a
                  href="https://kyh8725.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="dealer__info-web">{dealer.web}</h5>
                </a>
                <p>Hours: Mon - Sat 8:00 - 6:00</p>
              </div>
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
        <h1 className="dealer__title">Find Dealers in Vancouver</h1>
        <div className="dealer">
          <GoogleMap getActiveMarker={this.getActiveMarker} />
          <div className="dealer__list">{this.dealerList()}</div>
        </div>
      </>
    );
  }
}
