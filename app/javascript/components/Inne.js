import React from "react";
import Navbar from "./Navbar";
import ButtonMenu from "./Elements/ButtonMenu";
import Ksiazki from "./inne/Ksiazki.jsx";
import MiejscaWSieci from "./inne/MiejscaWSieci.jsx";

class Parafia extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed1: true,
      buttonPressed2: false,
    };
  }

  ksiazki = [["ksiazki", <Ksiazki />], ["miejscawsieci", <MiejscaWSieci />]];

  render() {
    return (
      <div className="inne">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 className="h1-header"> Inne </h1>
            <ButtonMenu ksiazki={this.ksiazki} />
          </center>
        </div>
      </div>
    );
  }
}
export default Parafia;
