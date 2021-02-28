import React, { useState, useEffect } from "react";
import Button from "./img/menu";

const Navbar = () => {
  let [currentLocation, setCurrentLocation] = useState(window.location.href);
  let [prevScrollPos, setPrevScrollPos] = useState(0);
  let [visible, setVisible] = useState(true);
  let [dropMenu, setDropMenu] = useState(false);

  let handleScroll = () => {
    let visible = prevScrollPos > window.pageYOffset;
    setVisible(visible);
    setPrevScrollPos(window.pageYOffset);
  };

  useEffect(
    () => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    [prevScrollPos, dropMenu]
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
      <div className={visible ? "navbar-row" : "navbar--hidden"}>
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
