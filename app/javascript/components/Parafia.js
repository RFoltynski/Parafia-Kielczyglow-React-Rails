import React from "react";
import Navbar from "./Navbar";

import HistoriaParafi from "./parafia/HistoriaParafi.jsx";
import OPatronie from "./parafia/OPatronie.jsx";
import ParafiaObecnie from "./parafia/ParafiaObecnie";

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
      case "parafiaObecnie":
        return <ParafiaObecnie />;
      case "oPatronie":
        return <OPatronie />;
      case "historiaParafi":
        return <HistoriaParafi />;
    }
  }

  onClick = event => {
    this.handleClick("parafiaObecnie");
    (this.buttonPress = () => {
      this.setState({
        buttonPressed: true,
        buttonPressed1: false,
        buttonPressed2: false
      });
    })();
  };
  onClick1 = event => {
    this.handleClick("oPatronie");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: true,
        buttonPressed2: false
      });
    })();
  };
  onClick2 = event => {
    this.handleClick("historiaParafi");
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
      <div className="parafia">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 class="h1-header"> Parafia </h1>
            <div className="parafia-buttons">
              <button
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Informacje Ogólne
              </button>
              <button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                O Patronie
              </button>
              <button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Historia Parafi
              </button>

              {this.state.render === "" ? (
                <ParafiaObecnie />
              ) : (
                this._renderSubComp()
              )}
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Parafia;
