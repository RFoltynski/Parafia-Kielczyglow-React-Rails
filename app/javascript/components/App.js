import React from "react";
import { Link } from "react-router-dom";
import Ogloszenia from "./img/kafelki/Ogloszenia.JPG";
import cmentarz from "./img/kafelki/cmentarz.JPG";
import parafia from "./img/kafelki/parafia.JPG";
import Duchowienstwo from "./img/kafelki/Duchowienstwo.JPG";
import kontakt from "./img/kafelki/kontakt.JPG";
import inne from "./img/kafelki/inne.JPG";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="boxes-container">
        <div className="logo"> Parafia Kiełczygłów</div>
        <div className="boxes-rows">
          <div className="boxes-row">
            <div className="row-item">
              <div className="box-overlay">
                <Link className="box-overlay-link image-fix" to="/Ogloszenia">
                  <h2 className="box-overlay-h2">Ogłoszenia</h2>
                  <img src={Ogloszenia} />
                </Link>
                <Link to="/Ogloszenia">
                  <p className="box-overlay-p" />
                </Link>
              </div>
            </div>
            <div className="row-item">
              <div className="box-overlay">
                <Link className="box-overlay-link" to="/cmentarz">
                  <h2 className="box-overlay-h2">Cmentarz</h2>
                  <img src={cmentarz} />
                </Link>

                <Link to="/cmentarz">
                  <p className="box-overlay-p" />
                </Link>
              </div>
            </div>
            <div className="row-item">
              <div className="box-overlay">
                <Link className="box-overlay-link" to="/parafia">
                  <h2 className="box-overlay-h2">Parafia</h2>
                  <img src={parafia} />
                </Link>

                <Link to="/parafia">
                  <p className="box-overlay-p" />
                </Link>
              </div>
            </div>
          </div>
          <div className="boxes-row">
            <div className="row-item">
              <div className="box-overlay">
                <Link className="box-overlay-link" to="/Duchowienstwo">
                  <h2 className="box-overlay-h2">Duchowieństwo</h2>
                  <img src={Duchowienstwo} />
                </Link>
                <Link to="/Duchowienstwo">
                  <p className="box-overlay-p" />
                </Link>
              </div>
            </div>
            <div className="row-item">
              <div className="box-overlay">
                <Link className="box-overlay-link" to="/kontakt">
                  <h2 className="box-overlay-h2">Kontakt</h2>
                  <img src={kontakt} />
                </Link>
                <Link to="/kontakt">
                  <p className="box-overlay-p" />
                </Link>
              </div>
            </div>
            <div className="row-item">
              <div className="box-overlay">
                <Link className="box-overlay-link" to="/inne">
                  <h2 className="box-overlay-h2">Inne</h2>
                  <img src={inne} />
                </Link>
                <Link to="/inne">
                  <p className="box-overlay-p" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
