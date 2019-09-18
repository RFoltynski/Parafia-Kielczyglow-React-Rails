import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Button from "./img/menu";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: window.location.href,
      dropMenu: false
    };
  }

  dropMenu = () => {
    this.setState({
      dropMenu: !this.state.dropMenu
    });
  };
  hide = e => {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    this.setState({ dropMenu: false });
  };

  componentWillMount() {
    document.body.addEventListener("click", this.hide);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.hide);
  }

  render() {
    let location = [
      "pl/aktualnosci",
      "pl/intencje",
      "pl/parafia",
      "pl/kaplani",
      "pl/kontakt",
      "pl/inne"
    ];
    return (
      <div>
        <div className="navbar-row">
          <div className="navbar-logo">
            {" "}
            <Link className="navbar-logo-link" to="/">
              Parafia Kiełczygłów
            </Link>
          </div>
          <div className="navbar-menu">
            <button
              className="navbar-menu-button"
              onClick={this.dropMenu}
              onBlur={this.hide}
            >
              <img className="navbar-menu-img" src={Button} />
            </button>
          </div>
          <div
            className={
              this.state.dropMenu
                ? "navbar-links navbar-links-drop-show"
                : "navbar-links"
            }
          >
            <Link
              className={
                this.state.currentLocation.includes(location[0])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/aktualnosci"
            >
              Aktualnośći
            </Link>
            <Link
              className={
                this.state.currentLocation.includes(location[1])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/intencje"
            >
              Intencje
            </Link>
            <Link
              className={
                this.state.currentLocation.includes(location[2])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/parafia"
            >
              {" "}
              Parafia
            </Link>
            <Link
              className={
                this.state.currentLocation.includes(location[3])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/kaplani"
            >
              Kapłani
            </Link>
            <Link
              className={
                this.state.currentLocation.includes(location[4])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/kontakt"
            >
              Kontakt
            </Link>
            <Link
              className={
                this.state.currentLocation.includes(location[5])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/inne"
            >
              Inne
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
