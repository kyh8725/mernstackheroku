import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default class SavedVehicle extends Component {
  state = {
    vehicles: [],
    API_URL: process.env.REACT_APP_API_URL,
  };

  async componentDidMount() {
    console.log(this.props);
    await axios
      .get(`${this.state.API_URL}/vehicles/${this.props.userName}`)
      .then((response) => {
        this.setState({ vehicles: response.data });
      });
  }
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
    const filteredVehicles = this.state.vehicles.filter((car) => {
      if (car.owners.includes("Daniel")) {
        return car;
      }
    });
    const ownedVehicles = filteredVehicles.map((car) => {
      return (
        <>
          <div className="saved-card">
            <div className="saved-card-top">
              <h6 className="saved-card-title">Saved Vehicle</h6>
              <h5>
                {car.year} {car.make} {car.model}
              </h5>
              <p>Power: {car.hp} hp</p>
              <p>Torque: {car.tq} lb-ft</p>
              <p>Price: $ {car.price.toLocaleString()}</p>
            </div>
            <div className="saved-card-bottom">
              <img src={car.img} alt="" />
            </div>
            <div className="saved-card-button">
              <Button
                id={car._id}
                className="saved-card-delete"
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
        <h1 className="api">Saved Vehicles</h1>
        <div className="saved">{this.renderCars()}</div>
      </>
    );
  }
}
