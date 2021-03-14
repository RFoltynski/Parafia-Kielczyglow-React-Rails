import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="main-page-container">
        <div className="header">
          {" "}
          Katolicka parafia pw.
          <br />
          sw. Antoniego w Kiełczygłowie
        </div>
        <div className="pills-container">
          <div className="pills-row">
            <Link className="pill" to="/Ogloszenia">
              <i class="fas fa-scroll pill-icon" />
              <span className="pill-name">Ogloszenia</span>
              <span className="pill-description">Aktualnosci, Intencje</span>
            </Link>
            <Link className="pill" to="/cmentarz">
              <i class="fas fa-cross pill-icon" />
              <span className="pill-name">Cmentarz</span>
              <span className="pill-description">
                Pogrzeby, Kaplica, Cmentarz
              </span>
            </Link>
            <Link className="pill" to="/parafia">
              <i class="fas fa-map-marked pill-icon" />{" "}
              <span className="pill-name">Parafia</span>
              <span className="pill-description">Informacje ogolne</span>
            </Link>
          </div>
          <div className="pills-row">
            <Link className="pill" to="/Duchowienstwo">
              <i class="fas fa-chess-king pill-icon" />
              <span className="pill-name">Kaplani</span>
              <span className="pill-description">Osoby duchowne</span>
            </Link>
            <Link className="pill" to="/kontakt">
              <i class="fas fa-phone pill-icon" />
              <span className="pill-name">Kontakt</span>
              <span className="pill-description">Dane kontaktowe</span>
            </Link>
            <Link className="pill" to="/inne">
              <i class="fas fa-people-carry pill-icon" />
              <span className="pill-name">Wspolnoty</span>
              <span className="pill-description">Informacje o wspolnotach</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
