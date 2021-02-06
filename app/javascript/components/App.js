import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import axios from "axios";
import Ogloszenia from "./img/kafelki/Ogloszenia.JPG";
import intencje from "./img/kafelki/intencje.JPG";
import parafia from "./img/kafelki/parafia.JPG";
import kaplani from "./img/kafelki/kaplani.JPG";
import kontakt from "./img/kafelki/kontakt.JPG";
import inne from "./img/kafelki/inne.JPG";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      intencions: [],
      error: null,
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
                <a
                  className="box-overlay-link"
                  href={
                    this.state.isLoading
                      ? this.state.intentions.kielczyglow.map((item) => {
                          return item.file;
                        })
                      : ""
                  }
                  target="_blank"
                >
                  <h2 className="box-overlay-h2">Intencje</h2>
                  <img src={intencje} />
                </a>
                <a
                  href={
                    this.state.isLoading
                      ? this.state.intentions.kielczyglow.map((item) => {
                          return item.file;
                        })
                      : ""
                  }
                  target="_blank"
                >
                  <p className="box-overlay-p" />
                </a>
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
                <Link className="box-overlay-link" to="/kaplani">
                  <h2 className="box-overlay-h2">Kapłani</h2>
                  <img src={kaplani} />
                </Link>
                <Link to="/kaplani">
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
