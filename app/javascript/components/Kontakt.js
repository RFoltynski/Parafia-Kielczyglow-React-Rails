import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Spring } from "react-spring/renderprops.cjs";

class Kontakt extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      nameError: "",
      emailError: "",
      messageError: ""
    };
  }

  validation = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

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
    } else {
      this.setState({
        messageError: ""
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
                        <div style={{ color: "red", padding: 10 }}>
                          {this.state.nameError}
                        </div>
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
                        <div style={{ color: "red", padding: 10 }}>
                          {this.state.emailError}
                        </div>
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
                        <div style={{ color: "red", padding: 10 }}>
                          {this.state.messageError}
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Wyślij
                      </button>
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
