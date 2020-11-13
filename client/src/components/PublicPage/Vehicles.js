import React, { Component } from "react";
import {
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default class Vehicles extends Component {
  state = {
    vehicles: [],
    API_URL: process.env.REACT_APP_API_URL,
    type: "all",
    model: "",
    popOver: [],
    isAuthenticating: true,
    isAuthenticated: false,
    user: null,
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

  addVehicle = (event) => {
    axios
      .get(`${this.state.API_URL}/passport/check-auth`, {
        withCredentials: true,
      })
      .then((res) => {
        this.setState(
          {
            isAuthenticating: false,
            isAuthenticated: true,
            user: res.data,
          },
          console.log(res.data)
        );
      })
      .catch(() => {
        this.setState({
          isAuthenticating: false,
          isAuthenticated: false,
        });
      });

    if (this.state.isAuthenticated) {
      axios
        .get(`${this.state.API_URL}/vehicles/get/${event.target.id}`)
        .then((response) => {
          let newOwners = response.data[0].owners;
          newOwners.push(this.state.user);
          console.log(newOwners);
          axios.post(
            `${this.state.API_URL}/vehicles/update/${event.target.id}`,
            { owners: newOwners }
          );
        });
    } else {
      window.location.href = `${this.state.API_URL}/protected`;
    }
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
      if (vehicle.owners.includes("Daniel")) {
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
              {
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  key={vehicle._id}
                  overlay={
                    <Popover id={vehicle._id}>
                      <Popover.Title as="h1">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </Popover.Title>
                      <Popover.Content>
                        <strong>
                          <p>HorsePower (hp): {vehicle.hp} </p>
                          <p>Torque (lb-ft): {vehicle.tq} </p>
                          <p>Transmission: {vehicle.transmission}</p>{" "}
                        </strong>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <Button
                    className="vehicleCard__btn"
                    variant="outline-primary"
                  >
                    Specs
                  </Button>
                </OverlayTrigger>
              }
              <Button
                id={vehicle._id}
                className="vehicleCard__btn"
                variant="outline-primary"
                onClick={this.addVehicle}
              >
                Add to Garage
              </Button>
            </div>
          </>
        );
      }
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
          <h1 className="vehicles__title">BUILD & PRICE</h1>
          <h2 className="vehicles__sub-title">Select your Model</h2>
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue="all"
            onClick={this.sortModel}
          >
            <ToggleButton variant="secondary" value="all">
              ALL
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
          <div className="vehicles__models">{this.vehicleCard()}</div>
        </section>
      );
    }
  }
}
