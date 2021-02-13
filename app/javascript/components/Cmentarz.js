import React, { Component } from "react";
import Navbar from "./Navbar";
import ButtonMenu from "./Elements/ButtonMenu";
import CmentarzInfo from "./cmentarz/CmentarzInfo";
import Kaplica from "./cmentarz/Kaplica";
import Pogrzeby from "./cmentarz/Pogrzeby";
class Cmentarz extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentsList = [
    ["Cmentarz", <CmentarzInfo />],
    ["Kaplica", <Kaplica />],
    ["Pogrzeby", <Pogrzeby />],
  ];

  render() {
    return (
      <div className="cmentarz">
        <Navbar />
        <center>
          <div className="cmentarz-buttons">
            <h1 className="h1-header"> Cmentarz </h1>
            <ButtonMenu componentsList={this.componentsList} />
          </div>
        </center>
      </div>
    );
  }
}

export default Cmentarz;
