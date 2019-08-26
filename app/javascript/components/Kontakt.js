import React from "react";
import Navbar from "./Navbar";

class Kontakt extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="kontakt">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 className="h1-header"> Kontakt </h1>

            <div className="kontakt-row">
              <div className="buttons-box">
                <h2 className="scroll-to-historia">Formularz kontaktowy</h2>

                <form className="offset-md-1 col-md-10 contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Imię i Nazwisko.."
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Twój adres email.."
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Twoja wiadomość"
                      name="message"
                      onChange={this.handleChange}
                      value={this.state.message}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Wyślij
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Kontakt;
