import React from "react";
import Navbar from "./Navbar";

import Ksiazki from "./inne/Ksiazki.jsx";
import MiejscaWSieci from "./inne/MiejscaWSieci.jsx";

class Parafia extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed1: true,
      buttonPressed2: false
    };
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleClick = (compName, e) => {
    this.setState({
      render: compName
    });
  };

  _renderSubComp() {
    switch (this.state.render) {
      case "ksiazki":
        return <Ksiazki />;
      case "miejscawsieci":
        return <MiejscaWSieci />;
    }
  }

  onClick1 = event => {
    this.handleClick("ksiazki");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed1: true,
        buttonPressed2: false,
        buttonPressed3: false
      });
    })();
  };
  onClick2 = event => {
    this.handleClick("miejscawsieci");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed1: false,
        buttonPressed2: true,
        buttonPressed3: false
      });
    })();
  };

  render() {
    return (
      <div className="inne">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 className="h1-header"> Inne </h1>
            <div className="inne-buttons">
              <button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                Książki
              </button>
              <button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Stony internetowe
              </button>

              {this.state.render === "" ? <Ksiazki /> : this._renderSubComp()}
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default Parafia;
