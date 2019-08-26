import React from "react";
import Navbar from "./Navbar";
import { useSpring, animated } from "react-spring";

function Kontakt() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="kontakt">
      <div className="overlay">
        <Navbar />
        <center>
          <h1 className="h1-header"> Kontakt </h1>

          <div className="kontakt-row">
            <animated.div style={props}>
              <div className="buttons-box">
                <h2 className="scroll-to-historia">Formularz kontaktowy</h2>

                <form className="offset-md-1 col-md-10 contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Imię i Nazwisko.."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Twój adres email.."
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Twoja wiadomość"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Wyślij
                  </button>
                </form>
              </div>
            </animated.div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Kontakt;
