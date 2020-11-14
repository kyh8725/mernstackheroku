import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import axios from "axios";
export default class garage extends Component {
  state = {
    vehicles: [],
    owners: false,
    shopping: false,
    finance: false,
    API_URL: process.env.REACT_APP_API_URL,
    refresh: false,
  };

  async componentDidMount() {
    await axios
      .get(`${this.state.API_URL}/vehicles/${this.props.userName}`)
      .then((response) => {
        this.setState({ vehicles: response.data });
      });
  }

  setOwners = (opposite) => {
    this.setState({ owners: opposite });
  };

  setShopping = (opposite) => {
    this.setState({ shopping: opposite });
  };

  setFinance = (opposite) => {
    this.setState({ finance: opposite });
  };

  deleteCar = (event) => {
    const vehicleId = event.target.id;

    axios
      .get(`${this.state.API_URL}/vehicles/get/${vehicleId}`)
      .then((response) => {
        let newOwners = response.data[0].owners.filter(
          (user) => user !== this.props.userName
        );
        axios
          .post(`${this.state.API_URL}/vehicles/update/${vehicleId}`, {
            owners: newOwners,
          })
          .then((response) => {
            axios
              .get(`${this.state.API_URL}/vehicles/${this.props.userName}`)
              .then((response) => {
                this.setState({ vehicles: response.data });
              });
            window.alert("vehicle successfully removed from your garage");
          });
      });
  };

  renderCars = () => {
    const ownedVehicles = this.state.vehicles.map((car) => {
      return (
        <>
          <div className="garage__car-card">
            <div className="garage__car-card-top">
              <h6 className="garage__car-card-yourcar">Your Vehicle</h6>
              <h5>
                {car.year} {car.make} {car.model}
              </h5>
              <p>Your VIN</p>
              <p>{car.vin}</p>
            </div>
            <div className="garage__car-card-bottom">
              <img src={car.img} alt="" />
            </div>
            <div className="garage__car-card-button">
              <Button
                id={car._id}
                className="garage__car-card-update"
                variant="outline-primary"
              >
                update
              </Button>
              <Button
                id={car._id}
                className="garage__car-card-delete"
                variant="outline-danger"
                onClick={this.deleteCar}
              >
                delete
              </Button>
            </div>
          </div>
        </>
      );
    });
    return ownedVehicles;
  };

  render() {
    return (
      <>
        <div className="garage">
          <div className="garage__app">
            <div className="garage__app-top">
              <div className="garage__app-top-menu">
                <h5
                  className="garage__app-top-menu-title"
                  onClick={() => {
                    this.setOwners(!this.state.owners);
                    this.setShopping(false);
                    this.setFinance(false);
                  }}
                >
                  Owner's
                  <span>
                    <FontAwesomeIcon
                      icon={this.state.owners ? faMinus : faPlus}
                      size="lg"
                    />
                  </span>
                </h5>
                <ul
                  className="garage__collapse"
                  style={{ display: this.state.owners ? "block" : "none" }}
                >
                  <li>
                    <a href="/protected">Dashboard</a>
                  </li>
                  <li>
                    <a href="/maintenance">Maintenance</a>
                  </li>
                  <li>
                    <a href="/warranty">Warranty</a>
                  </li>
                </ul>
              </div>
              <div className="garage__app-top-menu">
                <h5
                  className="garage__app-top-menu-title"
                  onClick={() => {
                    this.setOwners(false);
                    this.setShopping(!this.state.shopping);
                    this.setFinance(false);
                  }}
                >
                  Shopping Tools
                  <span>
                    <FontAwesomeIcon
                      icon={this.state.shopping ? faMinus : faPlus}
                      size="lg"
                    />
                  </span>
                </h5>
                <ul
                  className="garage__collapse"
                  style={{ display: this.state.shopping ? "block" : "none" }}
                >
                  <li>
                    <a href="/protected">My Saved Vehicles</a>
                  </li>
                  <li>
                    <a href="/dealers">Find a Dealer</a>
                  </li>
                </ul>
              </div>
              <div className="garage__app-top-menu">
                <h5
                  className="garage__app-top-menu-title"
                  onClick={() => {
                    this.setOwners(false);
                    this.setShopping(false);
                    this.setFinance(!this.state.finance);
                  }}
                >
                  Financial Information
                  <span>
                    <FontAwesomeIcon
                      icon={this.state.finance ? faMinus : faPlus}
                      size="lg"
                    />
                  </span>
                </h5>
                <ul
                  className="garage__collapse"
                  style={{ display: this.state.finance ? "block" : "none" }}
                >
                  <li>
                    <a href="/protected">Trnasaction History</a>
                  </li>
                  <li>
                    <a href="/protected">Lease Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="garage__app-bottom">
              <div className="garage__app-bottom-title">
                <h2 className="garage__title">
                  {this.props.userName}'s Dashboard
                </h2>
              </div>
              <div className="garage__app-bottom-car">{this.renderCars()}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
