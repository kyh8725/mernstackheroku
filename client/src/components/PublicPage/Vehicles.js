import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default class Vehicles extends Component {
  state = {
    vehicles: [],
    API_URL: process.env.REACT_APP_API_URL,
  };

  componentDidMount() {
    axios.get(`${this.state.API_URL}/vehicles/allvehicles`).then((response) => {
      this.setState({ vehicles: response.data });
    });
  }

  vehicleCard = () => {
    const card = this.state.vehicles.map((vehicle) => {
      return (
        <>
          <div className="vehicleCard">
            <h3 className="vehicleCard__title">
              {vehicle.year} {"  "}
              {vehicle.make}
              {"  "}
              {vehicle.model}
            </h3>
            <div className="vehicleCard__imgD">
              <img src={vehicle.img} alt="" />
            </div>
            <h6 className="vehicleCard__msrp">MSRP starting from </h6>
            <h5 className="vehicleCard__price">
              ${vehicle.price.toLocaleString()}
            </h5>
            <Button className="vehicleCard__btn" variant="outline-primary">
              Features
            </Button>
            <Button className="vehicleCard__btn" variant="outline-primary">
              Add to Garage
            </Button>
          </div>
        </>
      );
    });
    return card;
  };

  render() {
    if (this.state.vehicles.length === 0) {
      return (
        <div className="spinner-wrap">
          <Spinner animation="border" />
        </div>
      );
    } else {
      return (
        <section className="vehicles">
          <h3 className="vehicles__title">BUILD & PRICE</h3>
          <h2 className="vehicles__sub-title">Select your Model</h2>
          <p>
            sorting button will be implemented. by type (SUV, sedan ...) and by
            maker
          </p>
          <p>More vehicles will be added later with different types</p>
          <p>add to garage and features button not working yet.</p>
          <div className="vehicles__models">{this.vehicleCard()}</div>
        </section>
      );
    }
  }
}
