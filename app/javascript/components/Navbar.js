import React, { Component } from "react";
import Button from "./img/menu";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      currentLocation: window.location.href,
      dropMenu: false,
      intencions: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    axios
      .get("api/v1/intentions.json", {}, { "Content-Type": "application/json" })
      .then((res) => {
        this.setState({
          intentions: res.data.data,
          isLoading: true,
        });
      });

    window.scrollTo(0, 0);
  }

  dropMenu = () => {
    this.setState({
      dropMenu: !this.state.dropMenu,
    });
  };
  hide = (e) => {
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
      "pl/Ogloszenia",
      "pl/cmentarz",
      "pl/parafia",
      "pl/Duchowienstwo",
      "pl/kontakt",
      "pl/inne",
    ];
    return (
      <div>
        <div className="navbar-row">
          <div className="navbar-logo">
            {" "}
            <a className="navbar-logo-link" href="/">
              Parafia Kiełczygłów
            </a>
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
            <a
              className={
                this.state.currentLocation.includes(location[0])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              href="/Ogloszenia"
            >
              Ogłoszenia
            </a>
            <a
              className={
                this.state.currentLocation.includes(location[1])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              href="/cmentarz"
            >
              Cmentarz
            </a>
            <a
              className={
                this.state.currentLocation.includes(location[2])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              href="/parafia"
            >
              {" "}
              Parafia
            </a>
            <a
              className={
                this.state.currentLocation.includes(location[3])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              href="/Duchowienstwo"
            >
              Duchowieństwo
            </a>
            <a
              className={
                this.state.currentLocation.includes(location[4])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              href="/kontakt"
            >
              Kontakt
            </a>
            <a
              className={
                this.state.currentLocation.includes(location[5])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              href="/inne"
            >
              Inne
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
