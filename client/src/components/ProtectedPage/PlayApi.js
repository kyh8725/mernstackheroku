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
            Add a New Vehicle{" "}
            <span>
              <FontAwesomeIcon
                icon={this.state.vehicles ? faAngleUp : faAngleDown}
                size="lg"
              />
            </span>
          </h5>
          <form
            className="api__vehicles-form"
            style={{ display: this.state.vehicles ? "flex" : "none" }}
          >
            <label for="make">Make</label>
            <input id="make" placeholder="eg. Acura" required></input>
            <label for="model">Model</label>
            <input id="model" placeholder="eg. NSX" required></input>
            <label for="year" placeholder="eg. 2020">
              Year
            </label>
            <input id="year" required></input>
            <label>Transmission</label>
            <label for="automatic">automatic</label>
            <input
              type="radio"
              id="transmission"
              name="transmission"
              value="automatic"
            ></input>
            <label for="automatic">manual</label>
            <input
              type="radio"
              id="transmission"
              name="transmission"
              value="manual"
            ></input>
            <label for="automatic">CVT</label>
            <input
              type="radio"
              id="transmission"
              name="transmission"
              value="CVT"
            ></input>
            <label for="color">Color</label>
            <input id="color" placeholder="eg. white"></input>
            <label>Type</label>
            <label for="sedan">Sedan</label>
            <input type="radio" id="sedan" name="type" value="sedan"></input>
            <label for="suv">SUV</label>
            <input type="radio" id="suv" name="type" value="suv"></input>
            <label for="coupe">Coupe</label>
            <input type="radio" id="coupe" name="type" value="coupe"></input>

            <label for="price">Price</label>
            <input id="price" placeholder="eg. 15205" required></input>
            <label for="img">
              Image url: default image will be used when empty
            </label>
            <input
              id="img"
              placeholder="eg. https://i.ibb.co/XsgSf9Y/default-Car.png"
            ></input>
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}
