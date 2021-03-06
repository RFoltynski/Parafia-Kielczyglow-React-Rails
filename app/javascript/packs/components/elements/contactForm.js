import React, { Component } from "react";

import Recaptcha from "react-recaptcha";

class ContactForm extends Component {
  render() {
    return (
      <div className="subcategory__container">
        <div className="subcategory__view">
          <h2>Formularz Kontaktowy</h2>
          <div className="subcategory__view__column">
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
                  <div className={"contact-error"}>{this.state.nameError}</div>
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
                  <div className={"contact-error"}>{this.state.emailError}</div>
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
    );
  }
}

export default ContactForm;
