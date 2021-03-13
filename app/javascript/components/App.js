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
              <i class="fas fa-scroll" />
              <span className="pill-name">Ogloszenia</span>
            </Link>
            <Link className="pill" to="/cmentarz">
              <i class="fas fa-cross" />
              <span className="pill-name">Cmentarz</span>
            </Link>
            <Link className="pill" to="/parafia">
              <i class="fas fa-map-marked" />{" "}
              <span className="pill-name">Parafia</span>
            </Link>
          </div>
          <div className="pills-row">
            <Link className="pill" to="/Duchowienstwo">
              <i class="fas fa-chess-king" />
              <span className="pill-name">Duchowienstwo</span>
            </Link>
            <Link className="pill" to="/kontakt">
              <i class="fas fa-phone" />
              <span className="pill-name">Kontakt</span>
            </Link>
            <Link className="pill" to="/inne">
              <i class="fas fa-people-carry" />
              <span className="pill-name">Wspolnota</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
