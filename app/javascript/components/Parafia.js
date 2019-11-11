import React from "react";
import Navbar from "./Navbar";

import HistoriaParafi from "./parafia/HistoriaParafi.jsx";
import OPatronie from "./parafia/OPatronie.jsx";
import ParafiaObecnie from "./parafia/ParafiaObecnie";
import Miejsca from "./parafia/Miejsca.jsx";
import Cmentarz from "./parafia/Cmentarz.jsx";

class Parafia extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed: true,
      buttonPressed1: false,
      buttonPressed2: false,
      buttonPressed3: false,
      buttonPressed4: false
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
      case "kosciolFiliarny":
        return <Miejsca />;
      case "cmentarz":
        return <Cmentarz />;
    }
  }

  onClick = event => {
    this.handleClick("parafiaObecnie");
    (this.buttonPress = () => {
      this.setState({
        buttonPressed: true,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: false,
        buttonPressed4: false
      });
    })();
  };
  onClick1 = event => {
    this.handleClick("oPatronie");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: true,
        buttonPressed2: false,
        buttonPressed3: false,
        buttonPressed4: false
      });
    })();
  };
  onClick2 = event => {
    this.handleClick("historiaParafi");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: true,
        buttonPressed3: false,
        buttonPressed4: false
      });
    })();
  };
  onClick3 = event => {
    this.handleClick("kosciolFiliarny");
    (this.buttonPress3 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: true,
        buttonPressed4: false
      });
    })();
  };
  onClick4 = event => {
    this.handleClick("cmentarz");
    (this.buttonPress4 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: false,
        buttonPressed4: true
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
                Nabożeństwa
              </button>
              <button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                Patron
              </button>
              <button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Historia
              </button>
              <button
                onClick={this.onClick3}
                className={this.state.buttonPressed3 ? "buttonWhite" : "button"}
              >
                Kościół Filiarny
              </button>
              <button
                onClick={this.onClick4}
                className={this.state.buttonPressed4 ? "buttonWhite" : "button"}
              >
                Cmentarz
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
