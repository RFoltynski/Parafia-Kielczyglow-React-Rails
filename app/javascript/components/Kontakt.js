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
      recpatureRespons: false,
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  verifyRecapture = (response) => {
    if (response) {
      this.setState({
        recpatureRespons: true,
      });
    }
  };

  reecaptureLoaded = () => {
    console.log("recapture loaded");
  };

  validation = () => {
    if (!this.state.name) {
      this.setState({
        nameError: "To pole nie może być puste",
      });
    } else {
      this.setState({
        nameError: "",
      });
    }
    if (!this.state.email) {
      this.setState({
        emailError: "To pole nie może być puste",
      });
    } else {
      this.setState({
        emailError: "",
      });
    }
    if (!this.state.message) {
      this.setState({
        messageError: "To pole nie może być puste",
      });
    }
    if (!this.state.recpatureRespons) {
      this.setState({
        recaptureError: "Potwierdź, że nie jesteś robotem",
      });
    } else {
      this.setState({
        recaptureError: "",
      });
    }

    if (!this.state.message || !this.state.email || !this.state.name) {
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    let isValid = this.validation();

    if (!isValid) {
      event.preventDefault();
    } else {
      const message = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };

      event.preventDefault();
      axios
        .post("/contacts", message, {
          headers: {
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
              .content,
          },
        })
        .then((response) => {
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
        recaptureError: "",
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="subcategory subcategory_kontakt__background">
        <Navbar />
        <center>
          <h1 className="subcategory__header"> Kontakt </h1>
        </center>
        <div className="subcategory__container">
          <div className="subcategory__view">
            <div className="subcategory__view__row">
              <h2>Dane Kontaktowe</h2>
              <div className="offset-md-1 col-md-10 contact-form ">
                <h4>Adres plebanii:</h4>
                <p>Parafia św Antoniego Padewskiego w Kiełczygłowie</p>
                <p>ul ks Józefa Jansona 14</p>
                <p>98-358 Kiełczygłów</p>
                <h4>Dane kontaktowe:</h4>
                <p>Tel: 000000000000</p>
                <p>8:30-10:00 (w dni powszednie)</p>
                <p>
                  W sprawach pilnych takich jak pogrzeb czy wizyta u chorego,
                  uprzejmie prosimy o kontakt telefoniczny.
                </p>{" "}
                <p>ks Proboszcz Bogdan Ignasiak 000 000 000</p>
                <p>ks Remigiusz Lech 000 000 000</p>
                <p>grabarz: Sylwester Janus 000 000 000</p>
                <p>email: kancelaria@parafiakielczyglow.pl</p>
              </div>
            </div>

            <div className="subcategory__view__row">
              <h2>Formularz kontaktowy</h2>
              <form
                className="offset-md-1 col-md-10 contact-form"
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <center>
                  <p>Wyślij e-mail bezpośrednio ze strony.</p>
                </center>
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
                    placeholder="Twój adres e-mail.."
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
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Kontakt;
