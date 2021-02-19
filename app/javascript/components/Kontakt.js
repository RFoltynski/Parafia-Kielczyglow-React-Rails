import React from "react";
import Navbar from "./Navbar";
import Contactform from "./kontakt/contactForm";
import Information from "./kontakt/Information";
import Submenu from "./Elements/Submenu";

class Kontakt extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentsList = [
    ["Dane Kontaktowe", <Information />],
    ["Formularz", <Contactform />],
  ];

  render() {
    return (
      <div className="subcategory subcategory_kontakt__background">
        <Navbar />
        <center>
          <h1 className="subcategory__header"> Inne </h1>
          <Submenu componentsList={this.componentsList} />
        </center>
      </div>
    );
  }
}

export default Kontakt;
