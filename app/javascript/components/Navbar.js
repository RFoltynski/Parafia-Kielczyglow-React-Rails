import React, { Component } from "react";
import Button from "./img/menu";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: window.location.href,
      prevScrollpos: window.pageYOffset,
      visible: true,
      dropMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  dropMenu = () => {
    this.setState({
      dropMenu: !this.state.dropMenu,
    });
  };

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  componentWillMount() {
    document.body.addEventListener("click", this.hide);
  }

  componentWillUnmount() {
    window.addEventListener("scroll", this.handleScroll);
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
        <div className={this.state.visible ? "navbar-row" : "navbar--hidden"}>
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
              style={
                this.state.dropMenu
                  ? {
                      position: "fixed",
                      top: "0px",
                      right: "0px",
                    }
                  : {}
              }
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
