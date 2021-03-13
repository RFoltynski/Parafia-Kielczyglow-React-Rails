import React from "react";
import { Link } from "react-router-dom";
import Ogloszenia from "./img/kafelki/Ogloszenia.JPG";
import cmentarz from "./img/kafelki/cmentarz.JPG";
import parafia from "./img/kafelki/parafia.JPG";
import Duchowienstwo from "./img/kafelki/Duchowienstwo.JPG";
import kontakt from "./img/kafelki/kontakt.JPG";
import inne from "./img/kafelki/inne.JPG";

class App extends React.Component {
  render() {
    return (
      <div className="main-page-container">
        <div className="header">
          {" "}
          Parafia Katolicka pw. Świętego Antoniego w Kiełczygłowie
        </div>
        <div className="pills-container">
          <div className="pills-row">
            <div className="pill">
              <a href="/Ogloszenia">Ogszenia</a>
            </div>
            <div className="pill">
              <a href="/cmentarz">Cmentarz</a>
            </div>
            <div className="pill">
              <a href="/parafia"> Parafia </a>
            </div>
          </div>
          <div className="pills-row">
            <div className="pill">
              <a href="/Duchowienstwo">Duchowienstwo</a>
            </div>
            <div className="pill">
              <a href="/kontakt">Kontakt</a>
            </div>
            <div className="pill">
              <a href="/inne">Inne</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
