import React, { Component } from "react";
import axios from "axios";

export default class Contacts extends Component {
  state = {
    API_URL: process.env.REACT_APP_API_URL,
    loading: false,
  };

  sendEmail = async (event) => {
    this.setState({ loading: true });
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      role: event.target.dropdown.value,
      enthusiast: event.target.sportscar.value,
      comment: event.target.comment.value,
    };
    await axios
      .post(`${this.state.API_URL}/email/send`, JSON.stringify(data))
      .then((response) => {
        if (response.status === 200) {
          window.alert("Email Successfully sent");
        } else {
          window.alert("Error sending email");
        }
      });
    this.setState({ loading: false });
  };

  render() {
    return (
      <>
        <section className="contact">
          <h1 className="contact__title">Contact Daniel</h1>
          <h5 className="contact__description">
            Thank you for taking the time to explore my project.
          </h5>
          <p className="contact__description2">
            This project was first started with intention in practicing
            <strong> OAuth and MongoDB </strong>. It was expanded to a sports
            car dealership-like web site because I like sports cars. Due to
            short man-power, most of the links are external car dealership's
            websites. self-built pages include /home, /vehicles, and /contact.
            Tech used:{" "}
            <strong>
              HTML, CSS5, Sass, Bootstrap, JavaScript, React, Express, Node,
              OAuth, MongoDB
            </strong>
          </p>

          <form className="contact__form" onSubmit={this.sendEmail}>
            <label htmlFor="name" id="name-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="email" id="email-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              required
            />
            <label htmlFor="role-label">
              Which option best describes your current role
            </label>
            <select id="dropdown" defaultValue="Select current role">
              <option value="Select current role" disabled>
                select current role
              </option>

              <option value="student">Student</option>
              <option value="hr">HR Manager</option>
              <option value="tech">Tech Manager</option>
              <option value="learner">Full time learner</option>
              <option value="prefer">Prefer not to say</option>
            </select>
            <label htmlFor="radio">Are you a sports car enthusiast?</label>
            <div className="radio-div">
              <input type="radio" name="sportscar" defaultValue="Definitely" />
              {"  "}Definitely
            </div>
            <div className="radio-div">
              <input type="radio" name="sportscar" defaultValue="Maybe" />
              {"  "}Maybe
            </div>
            <div className="radio-div">
              <input type="radio" name="sportscar" defaultValue="Not at all" />
              {"  "}Not at all
            </div>
            <label htmlFor="comment">Any comments or suggestions?</label>
            <textarea
              placeholder="Enter your comment here..."
              id="comment"
            ></textarea>
            <p>By submitting, you will be sending emails to Daniel </p>
            {this.state.loading && (
              <button
                className="btn btn-outline-dark btn-lg"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Sending...</span>
              </button>
            )}
            {!this.state.loading && (
              <button className="btn btn-outline-dark btn-lg" id="submit">
                <strong>Submit </strong>
              </button>
            )}
          </form>
        </section>
      </>
    );
  }
}
