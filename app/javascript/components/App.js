import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

import aktualnosci from "./img/resize_300/IMG_1446.JPG";
import intencje from "./img/intencje.jpg";
import parafia from "./img/parafia.jpg";
import kaplani from "./img/resize_300/kaplani.JPG";
import kontakt from "./img/resize_300/kontakt.JPG";
import inne from "./img/resize_300/inne.JPG";

class App extends React.Component {
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 1000,
      delay: 0,
      smooth: "easeInQuad"
    });
  }

  render() {
    return (
      <div className="app container-fluid">
        <div className="row menu">
          <Header scroll={this.scrollTo} />
        </div>

        <div name="scroll-to-element" className=" row">
          <div className="box col-md-4 nopadding">
            <div className="box-overlay">
              <Link className="box-overlay-link image-fix" to="/aktualnosci">
                <h2 className="box-overlay-h2">Aktualności</h2>
                <img src={aktualnosci} />
              </Link>
              <Link to="/aktualnosci">
                <p className="box-overlay-p">Aktualności o parafi</p>
              </Link>
            </div>
          </div>
          <div className="box col-md-4 nopadding">
            <div className="box-overlay">
              <Link className="box-overlay-link" to="/intencje">
                <h2 className="box-overlay-h2">Intencje</h2>
                <img src={intencje} />
              </Link>
              <Link to="/intencje">
                <p className="box-overlay-p">
                  Intencje mszy świętych na nadchodzący tydzień
                </p>
              </Link>
            </div>
          </div>
          <div className="box col-md-4 nopadding">
            <div className="box-overlay">
              <Link className="box-overlay-link" to="/parafia">
                <h2 className="box-overlay-h2">Parafia</h2>
                <img src={parafia} />
              </Link>

              <Link to="/parafia">
                <p className="box-overlay-p">
                  Najistotniejsze informacje o parafi
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="box col-md-4 nopadding">
            <div className="box-overlay">
              <Link className="box-overlay-link" to="/kaplani">
                <h2 className="box-overlay-h2">Kapłani</h2>
                <img src={kaplani} />
              </Link>
              <Link to="/kaplani">
                <p className="box-overlay-p">
                  Informacje dotyczące kapłanów sprawójących posługę w parafi
                </p>
              </Link>
            </div>
          </div>
          <div className="box col-md-4 nopadding">
            <div className="box-overlay">
              <Link className="box-overlay-link" to="/kontakt">
                <h2 className="box-overlay-h2">Kontakt</h2>
                <img src={kontakt} />
              </Link>
              <Link to="/kontakt">
                <p className="box-overlay-p">Dane kontaktowe</p>
              </Link>
            </div>
          </div>
          <div className="box col-md-4 nopadding">
            <div className="box-overlay">
              <Link className="box-overlay-link" to="/inne">
                <h2 className="box-overlay-h2">Inne</h2>
                <img src={inne} />
              </Link>
              <Link to="/inne">
                <p className="box-overlay-p">
                  Najistotniejsze informacje o parafi
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
