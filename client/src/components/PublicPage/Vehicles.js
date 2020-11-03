import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class Vehicles extends Component {
  state = {
    vehicles: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/vehicles/allvehicles`).then((response) => {
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
    return (
      <section className="vehicles">
        <h3 className="vehicles__title">BUILD & PRICE</h3>
        <h2 className="vehicles__sub-title">Select your Model</h2>
        <div className="vehicles__models">{this.vehicleCard()}</div>
      </section>
    );
  }
}
