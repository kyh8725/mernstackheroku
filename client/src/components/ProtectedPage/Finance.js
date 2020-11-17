import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

export default class Finance extends Component {
  state = {
    sixfour: [],
    max: [],
  };

  componentDidMount() {
    this.generate649();
    this.generateMax();
  }
  generate649Numbs = () => {
    return Math.floor(Math.random() * 49) + 1;
  };
  generateMaxNumb = () => {
    return Math.floor(Math.random() * 50) + 1;
  };

  generate649 = () => {
    let sixfourArray = [];
    for (let i = 0; i <= 5; i++) {
      let number = this.generate649Numbs();
      sixfourArray.push(number);
    }
    sixfourArray.sort(function (a, b) {
      return a - b;
    });
    this.setState({ sixfour: sixfourArray });
  };

  render649 = () => {
    let numbers = this.state.sixfour.map((number) => {
      return (
        <input
          className="finance__lotto-numbers"
          type="text"
          disabled
          value={number}
        />
      );
    });
    return numbers;
  };
  generateMax = () => {
    let maxArray = [];
    for (let i = 0; i <= 6; i++) {
      let number = this.generateMaxNumb();
      maxArray.push(number);
    }
    maxArray.sort(function (a, b) {
      return a - b;
    });
    this.setState({ max: maxArray });
  };
  renderMax = () => {
    let numbers = this.state.max.map((number) => {
      return (
        <input
          className="finance__lotto-numbers"
          type="text"
          disabled
          value={number}
        />
      );
    });
    return numbers;
  };

  render() {
    return (
      <div className="finance">
        <h4 className="finance__title">Get Random Lottery Number</h4>
        <div className="finance__lotto">
          <h4> 649 </h4>
          {this.render649()}
          <Button onClick={this.generate649}>
            <FontAwesomeIcon icon={faRedo} />
          </Button>
          <h4> MAX </h4>
          {this.renderMax()}
          <Button onClick={this.generateMax}>
            <FontAwesomeIcon icon={faRedo} />
          </Button>
        </div>
        <Button
          href="https://www.playnow.com/"
          target="/blank"
          rel="noopener noreferrer"
          variant="outline-danger"
        >
          Buy Tickets
        </Button>
      </div>
    );
  }
}
