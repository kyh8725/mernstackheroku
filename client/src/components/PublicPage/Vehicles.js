import React, { Component } from "react";
import {
  Button,
  ToggleButtonGroup,
  ToggleButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default class Vehicles extends Component {
  state = {
    vehicles: [],
    API_URL: process.env.REACT_APP_API_URL,
    type: "all",
    model: "",
  };

  async componentDidMount() {
    await axios
      .get(`${this.state.API_URL}/vehicles/allvehicles`)
      .then((response) => {
        this.setState({ vehicles: response.data });
      });
  }

  sortModel = (event) => {
    if (event.target.value !== undefined) {
      this.setState({ type: event.target.value });
    }
  };

  getModel = (event) => {
    event.preventDefault();
    console.log(this.state.model);
  };
  setModel = (event) => {
    this.setState({ model: event.target.value });
  };

  vehicleCard = () => {
    let filteredCar = [];
    if (this.state.type === "all") {
      filteredCar = this.state.vehicles;
    } else {
      filteredCar = this.state.vehicles.filter(
        (vehicle) => vehicle.type === this.state.type
      );
    }
    const card = filteredCar.map((vehicle) => {
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
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue="all"
            onClick={this.sortModel}
          >
            <ToggleButton variant="secondary" value="all">
              All
            </ToggleButton>
            <ToggleButton variant="secondary" value="sedan">
              Sedan
            </ToggleButton>
            <ToggleButton variant="secondary" value="coupe">
              Coupe
            </ToggleButton>
            <ToggleButton variant="secondary" value="suv">
              SUV
            </ToggleButton>
          </ToggleButtonGroup>
          {/* <form className="vehicles__searchbyModel" onSubmit={this.getModel}>
            <InputGroup className="mb-3" onChange={this.setModel}>
              <FormControl
                placeholder="search by model"
                aria-label="search by model"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  name="model-input"
                  variant="outline-secondary"
                  onClick={this.getModel}
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </form> */}
          <div className="vehicles__models">{this.vehicleCard()}</div>
        </section>
      );
    }
  }
}
