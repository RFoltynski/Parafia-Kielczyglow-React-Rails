import React, { useState } from "react";

import Button from "./../img/menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [currentLocation, setCurrentLocation] = useState(window.location.href);
  let [dropMenu, setDropMenu] = useState(false);

  let navbarStyles = {
    width: "100%",
    minHeight: "50px",
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    top: 0,
    position: "fixed",
    zIndex: 10,
  };

  let dropMenuHnadler = () => {
    setDropMenu(!dropMenu);
  };

  let location = [
    "pl/Ogloszenia",
    "pl/cmentarz",
    "pl/parafia",
    "pl/Duchowienstwo",
    "pl/kontakt",
    "pl/inne",
    "/",
  ];
  return (
    <div>
      {currentLocation[currentLocation.length - 1] === location[6] ? (
        <div style={{ ...navbarStyles, justifyContent: "center" }}>
          <div className="navbar-logo-link"> Parafia-Kielczyglow.pl</div>
        </div>
      ) : (
        <div style={{ ...navbarStyles }}>
          <div className="navbar-logo">
            {" "}
            <Link className="navbar-logo-link" to="/">
              Parafia-Kielczyglow.pl
            </Link>
          </div>
          <div className="navbar-menu">
            <button
              className="navbar-menu-button"
              onClick={dropMenuHnadler}
              style={
                dropMenu
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
              dropMenu ? "navbar-links navbar-links-drop-show" : "navbar-links"
            }
          >
            <Link
              className={
                currentLocation.includes(location[0])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/Ogloszenia"
            >
              Ogłoszenia
            </Link>

            <Link
              className={
                currentLocation.includes(location[1])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/cmentarz"
            >
              Cmentarz
            </Link>

            <Link
              className={
                currentLocation.includes(location[2])
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
                currentLocation.includes(location[3])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/Duchowienstwo"
            >
              Duchowieństwo
            </Link>

            <Link
              className={
                currentLocation.includes(location[4])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/kontakt"
            >
              Kontakt
            </Link>
            <Link
              className={
                currentLocation.includes(location[5])
                  ? "navbar-link-active"
                  : "navbar-link"
              }
              to="/inne"
            >
              Informacje
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
