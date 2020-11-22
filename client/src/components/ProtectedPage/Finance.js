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
        <h4 className="finance__title">Finance Or Lease?</h4>
        <p>
          There are a few things to consider when it comes to leasing or
          financing your new vehicle. Let’s discuss the benefits of both!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          ipsa ab sint dolorum dicta id quidem facilis quam laboriosam odio
          dolores et provident, tempore fugit explicabo corrupti dolor veritatis
          alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur, doloremque laborum odio accusantium magnam maiores
          eligendi vitae quae incidunt nemo et pariatur quisquam exercitationem
          est commodi accusamus enim officia. Consequatur?
        </p>
        <h4 className="finance__title">Get random lottery numbers</h4>
        <div className="finance__lotto">
          <h4 className="finance__lotto-type"> 649 </h4>
          <div className="finance__lotto-result">
            {this.render649()}
            <Button onClick={this.generate649}>
              <FontAwesomeIcon icon={faRedo} />
            </Button>
          </div>
          <h4 className="finance__lotto-type"> MAX </h4>
          <div className="finance__lotto-result">
            {this.renderMax()}
            <Button onClick={this.generateMax}>
              <FontAwesomeIcon icon={faRedo} />
            </Button>
          </div>
        </div>
        <Button
          className="finance__lotto-buybutton"
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
