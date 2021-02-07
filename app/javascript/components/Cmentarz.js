import React, { Component } from "react";
import Navbar from "./Navbar";
import CmentarzInfo from "./cmentarz/CmentarzInfo";
import Kaplica from "./cmentarz/Kaplica";
import Pogrzeby from "./cmentarz/Pogrzeby";
class Cmentarz extends Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed1: true,
      buttonPressed2: false,
      buttonPressed3: false,
    };
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleClick = (compName, e) => {
    this.setState({
      render: compName,
    });
  };

  _renderSubComp() {
    switch (this.state.render) {
      case "cmentarzInfo":
        return <CmentarzInfo />;
      case "kaplica":
        return <Kaplica />;
      case "pogrzeby":
        return <Pogrzeby />;
    }
  }

  onClick1 = (event) => {
    this.handleClick("cmentarzInfo");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed1: true,
        buttonPressed2: false,
        buttonPressed3: false,
      });
    })();
  };
  onClick2 = (event) => {
    this.handleClick("kaplica");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed1: false,
        buttonPressed2: true,
        buttonPressed3: false,
      });
    })();
  };
  onClick3 = (event) => {
    this.handleClick("pogrzeby");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: true,
      });
    })();
  };
  render() {
    return (
      <div className="cmentarz">
        <Navbar />
        <center>
          <h1 className="h1-header"> Cmentarz </h1>
          <div className="cmentarz-buttons">
            <button
              onClick={this.onClick1}
              className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
            >
              Cmentarz
            </button>
            <button
              onClick={this.onClick2}
              className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
            >
              Kaplica
            </button>
            <button
              onClick={this.onClick3}
              className={this.state.buttonPressed3 ? "buttonWhite" : "button"}
            >
              Pogrzeby
            </button>
            {this.state.render === "" ? (
              <CmentarzInfo />
            ) : (
              this._renderSubComp()
            )}
          </div>
        </center>
      </div>
    );
  }
}

export default Cmentarz;
