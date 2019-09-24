import React from "react";
import Navbar from "./Navbar";
import Miejsca from "./inne/Miejsca.jsx";
import Ksiazki from "./inne/Ksiazki.jsx";
import MiejscaWSieci from "./inne/MiejscaWSieci.jsx";

class Parafia extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed: true,
      buttonPressed1: false,
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
      case "Miejsca":
        return <Miejsca />;
      case "ksiazki":
        return <Ksiazki />;
      case "miejscawsieci":
        return <MiejscaWSieci />;
    }
  }

  onClick = event => {
    this.handleClick("Miejsca");
    (this.buttonPress = () => {
      this.setState({
        buttonPressed: true,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: false
      });
    })();
  };
  onClick1 = event => {
    this.handleClick("ksiazki");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
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
        buttonPressed: false,
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
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Miejsca w parafii
              </button>
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
                Miejsca w sieci
              </button>

              {this.state.render === "" ? <Miejsca /> : this._renderSubComp()}
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default Parafia;
