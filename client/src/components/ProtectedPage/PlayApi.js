import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default class PlayApi extends Component {
  state = {
    vehicles: false,
  };
  setVehicle = () => {
    this.setState({ vehicles: !this.state.vehicles });
  };

  render() {
    return (
      <div className="api">
        <div className="api__vehicles">
          <h5
            className="api__vehicles-title"
            onClick={() => {
              this.setVehicle(!this.state.vehicles);
            }}
          >
            Add a New Vehicle
            <span>
              <FontAwesomeIcon
                icon={this.state.vehicles ? faAngleUp : faAngleDown}
                size="lg"
              />
            </span>
          </h5>
          <form
            className="api__vehicles-form"
            style={{ display: this.state.vehicles ? "block" : "none" }}
          >
            <label></label>
            <input></input>
          </form>
        </div>
      </div>
    );
  }
}
