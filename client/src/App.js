import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/PublicPage/Header";
import LoginPage from "./components/LoginPage";
import PublicPage from "./components/PublicPage";
import ProtectedPage from "./components/ProtectedPage";
import Contact from "./components/PublicPage/Contact";
import Footer from "./components/PublicPage/Footer";
import Vehicles from "./components/PublicPage/Vehicles";
import "./styles/index.css";
import "react-fancybox/lib/fancybox.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="app">
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={PublicPage} />
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute path="/protected" component={ProtectedPage} />
        </div>
        <Footer />
      </Router>
    );
  }
}
