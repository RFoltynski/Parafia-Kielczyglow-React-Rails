import React, { Component } from "react";
import Navbar from "./Navbar";
import Submenu from "./Elements/Submenu";
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
      <div className="subcategory subcategory_cmentarz__background">
        <Navbar />
        <center>
          <h1 className="subcategory__header"> Cmentarz </h1>
          <Submenu componentsList={this.componentsList} />
        </center>
      </div>
    );
  }
}

export default Cmentarz;
