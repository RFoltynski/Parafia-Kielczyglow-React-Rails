import React from "react";
import Navbar from "./Navbar";
import Proboszcz from "./kaplani/proboszcz.jsx";
import Proboszczowie from "./kaplani/proboszczowie";
import Wikary from "./kaplani/wikary.jsx";

class Kaplani extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed: true,
      buttonPressed1: false,
      buttonPressed2: false
    };
  }

  handleClick = (compName, e) => {
    this.setState({
      render: compName
    });
  };

  _renderSubComp() {
    switch (this.state.render) {
      case "proboszcz":
        return <Proboszcz />;
      case "wikary":
        return <Wikary />;
      case "proboszczowie":
        return <Proboszczowie />;
    }
  }

  onClick = event => {
    this.handleClick("proboszcz");
    (this.buttonPress = () => {
      this.setState({
        buttonPressed: true,
        buttonPressed1: false,
        buttonPressed2: false
      });
    })();
  };
  onClick1 = event => {
    this.handleClick("wikary");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: true,
        buttonPressed2: false
      });
    })();
  };
  onClick2 = event => {
    this.handleClick("proboszczowie");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: true
      });
    })();
  };

  render() {
    return (
      <div className="kaplani">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 className="h1-header"> Kapłani </h1>
            <div className="inne-buttons">
              <button
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Proboszcz
              </button>
              <button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                Wikary
              </button>
              <button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Poprzedni Proboszczowie
              </button>

              {this.state.render === "" ? <Proboszcz /> : this._renderSubComp()}
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Kaplani;
