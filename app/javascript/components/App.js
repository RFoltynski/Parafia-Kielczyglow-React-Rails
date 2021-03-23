import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="main-page-container">
        <div className="header">
          <div className="navbar-logo-link">Parafia Kiełczygłów</div>
        </div>
        <div className="pills-container">
          <div className="pills-row">
            <Link className="pill" to="/Ogloszenia">
              <h3 className="pill-name">Ogloszenia</h3>
              <i class="fas fa-scroll pill-icon" />
              <div className="pill-description">Aktualnosci, Intencje</div>
            </Link>
            <Link className="pill" to="/cmentarz">
              <h3 className="pill-name">Cmentarz</h3>
              <i class="fas fa-cross pill-icon" />
              <div className="pill-description">
                Pogrzeby, Kaplica, Cmentarz
              </div>
            </Link>
            <Link className="pill" to="/parafia">
              <h3 className="pill-name">Parafia</h3>
              <i class="fas fa-map-marked pill-icon" />{" "}
              <div className="pill-description">Informacje ogolne</div>
            </Link>
          </div>
          <div className="pills-row">
            <Link className="pill" to="/Duchowienstwo">
              <h3 className="pill-name">Kaplani</h3>
              <i class="fas fa-chess-king pill-icon" />
              <div className="pill-description">Osoby duchowne</div>
            </Link>
            <Link className="pill" to="/kontakt">
              <h3 className="pill-name">Kontakt</h3>
              <i class="fas fa-phone pill-icon" />
              <div className="pill-description">Dane kontaktowe</div>
            </Link>
            <Link className="pill" to="/inne">
              <h3 className="pill-name">Wspolnoty</h3>
              <i class="fas fa-people-carry pill-icon" />
              <div className="pill-description">Informacje o wspolnotach</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
