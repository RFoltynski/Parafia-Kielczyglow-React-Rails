import React, { useState, useEffect } from "react";
import { debounce } from "./helpers/debounce.js";
import Button from "./img/menu";

const Navbar = () => {
  let [currentLocation, setCurrentLocation] = useState(window.location.href);
  let [prevScrollPos, setPrevScrollPos] = useState(0);
  let [visible, setVisible] = useState(true);
  let [dropMenu, setDropMenu] = useState(false);

  let handleScroll = debounce(() => {
    let currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 180
    );
    setPrevScrollPos(currentScrollPos);
  }, 80);

  let navbarStyles = {
    width: "100%",
    minHeight: "50px",
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
    top: 0,
    position: "fixed",
    zIndex: 10,
    transition: "top 0.3s",
  };

  let navbarStylesUpdate = {
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    top: 50,
  };

  useEffect(
    () => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    [prevScrollPos, dropMenu, visible]
  );

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
  ];
  return (
    <div>
      <div style={{ ...navbarStyles, top: visible ? "0" : "-50px" }}>
        <div className="navbar-logo">
          {" "}
          <a className="navbar-logo-link" href="/">
            Parafia Kiełczygłów
          </a>
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
          <a
            className={
              currentLocation.includes(location[0])
                ? "navbar-link-active"
                : "navbar-link"
            }
            href="/Ogloszenia"
          >
            Ogłoszenia
          </a>
          <a
            className={
              currentLocation.includes(location[1])
                ? "navbar-link-active"
                : "navbar-link"
            }
            href="/cmentarz"
          >
            Cmentarz
          </a>
          <a
            className={
              currentLocation.includes(location[2])
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
              currentLocation.includes(location[3])
                ? "navbar-link-active"
                : "navbar-link"
            }
            href="/Duchowienstwo"
          >
            Duchowieństwo
          </a>
          <a
            className={
              currentLocation.includes(location[4])
                ? "navbar-link-active"
                : "navbar-link"
            }
            href="/kontakt"
          >
            Kontakt
          </a>
          <a
            className={
              currentLocation.includes(location[5])
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
};

export default Navbar;
