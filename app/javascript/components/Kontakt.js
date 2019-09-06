import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Spring } from "react-spring/renderprops.cjs";
import Recaptcha from "react-recaptcha";

class Kontakt extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      nameError: "",
      emailError: "",
      messageError: "",
      messageSand: "",
      recpatureRespons: false
    };
  }

  verifyRecapture = response => {
    if (response) {
      this.setState({
        recpatureRespons: true
      });
    }
  };

  reecaptureLoaded = () => {
    console.log("recapture loaded");
  };

  validation = () => {
    if (!this.state.name) {
      this.setState({
        nameError: "To pole nie może być puste"
      });
    } else {
      this.setState({
        nameError: ""
      });
    }
    if (!this.state.email) {
      this.setState({
        emailError: "To pole nie może być puste"
      });
    } else {
      this.setState({
        emailError: ""
      });
    }
    if (!this.state.message) {
      this.setState({
        messageError: "To pole nie może być puste"
      });
    }
    if (!this.state.recpatureRespons) {
      this.setState({
        recaptureError: "Potwierdź, że nie jesteś robotem"
      });
    } else {
      this.setState({
        recaptureError: ""
      });
    }

    if (!this.state.message || !this.state.email || !this.state.name) {
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    let isValid = this.validation();

    if (!isValid) {
      event.preventDefault();
    } else {
      const message = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      };

      event.preventDefault();
      axios
        .post("/contacts", message, {
          headers: {
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
              .content
          }
        })
        .then(response => {
          console.log(response);
          console.log(response.data);
        });

      this.setState({
        name: "",
        email: "",
        message: "",
        nameError: "",
        emailError: "",
        messageError: "",
        messageSand: "Twoja wiadomość została wysłana.",
        recaptureError: ""
      });
    }
  };

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
              <Spring from={{ opacity: 0 }} to={{ opacity: 0.9 }}>
                {props => (
                  <div className="buttons-box" style={props}>
                    <h2 className="scroll-to-historia">Formularz kontaktowy</h2>

                    <form
                      className="offset-md-1 col-md-10 contact-form"
                      onSubmit={e => this.handleSubmit(e)}
                    >
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
                        {this.state.nameError ? (
                          <div className={"contact-error"}>
                            {this.state.nameError}
                          </div>
                        ) : (
                          <div />
                        )}
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
                        {this.state.emailError ? (
                          <div className={"contact-error"}>
                            {this.state.emailError}
                          </div>
                        ) : (
                          <div />
                        )}
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
                        {this.state.messageError ? (
                          <div className={"contact-error"}>
                            {this.state.messageError}
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                      <Recaptcha
                        hl={"pl"}
                        sitekey="6Le7I7YUAAAAAD2jf3pGEjKfLNi01ggPZoznvx1N"
                        render="explicit"
                        onloadCallback={this.reecaptureLoaded}
                        verifyCallback={this.verifyRecapture}
                        size={"compact"}
                        badge={"inline"}
                      />
                      {this.state.recaptureError ? (
                        <div className={"contact-error"}>
                          {this.state.recaptureError}
                        </div>
                      ) : (
                        <div />
                      )}

                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ margin: "5px 0" }}
                      >
                        Wyślij
                      </button>
                      {this.state.messageSand ? (
                        <div
                          className={"contact-error"}
                          style={{ color: "white", backgroundColor: "green" }}
                        >
                          {this.state.messageSand}
                        </div>
                      ) : (
                        <div />
                      )}
                    </form>
                  </div>
                )}
              </Spring>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Kontakt;
