import React from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import Navbar from "./Navbar";

class Parafia extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed: true,
      buttonPressed1: false,
      buttonPressed2: false,
      buttonPressed3: false
    };
  }
  componentDidMount() {
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
      case "Miejscowosci":
        return <Miejscowosci />;
    }
  }

  onClick = event => {
    this.handleClick("parafiaObecnie");
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
    this.handleClick("oPatronie");
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
    this.handleClick("historiaParafi");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: true,
        buttonPressed3: false
      });
    })();
  };
  onClick3 = event => {
    this.handleClick("Miejscowosci");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: true
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
              <Button
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Parafia Obecnie
              </Button>
              <Button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                O Patronie
              </Button>
              <Button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Historia Parafi
              </Button>
              <Button
                onClick={this.onClick3}
                className={this.state.buttonPressed3 ? "buttonWhite" : "button"}
              >
                Miejscowości
              </Button>
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

class Button extends React.Component {
  render() {
    const { children, onClick, className } = this.props;
    return (
      <button
        type="button"
        onClick={
          onClick
          // (this.scrollTo = () => {
          //   scroller.scrollTo("scroll-to-patron", {
          //     duration: 500,
          //     delay: 0,
          //     smooth: "easeInQuad"
          //   });
          // })
        }
        className={className}
      >
        {children}
      </button>
    );
  }
}

class OPatronie extends React.Component {
  render() {
    return (
      <div className="parafia-row">
        <div className="buttons-box">
          <h2 name="scroll-to-historia">O Patronie</h2>
          <div className="buttons-content row">
            <div className="buttons-box-text col-md-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia hendrerit massa lobortis imperdiet. Duis at nibh tempor,
              congue eros dapibus, tristique ante. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              suscipit, lorem vitae iaculis scelerisque, orci nulla fermentum
              nulla, in sollicitudin velit nisl iaculis sem. Etiam ullamcorper
              urna eu lectus efficitur, vehicula faucibus nibh blandit. Ut
              mattis ac nisi in convallis. Mauris malesuada mauris nisi, eu
              aliquet leo dapibus et. Sed augue ligula, dictum nec condimentum
              eu, consequat in ligula. Integer aliquam elementum nisl, ut
              bibendum tortor porttitor id. Donec dapibus feugiat ornare.
              Integer blandit elementum eros, nec dictum sem hendrerit id.
              Phasellus lacus nulla, aliquet a purus quis, porttitor posuere
              leo. Nunc a pharetra tortor. Nam tempor iaculis arcu, et bibendum
              enim facilisis quis
            </div>
            <div className="col-md-4">
              <img
                className="buttons-img"
                src="..\img\parafia\franciszek.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ParafiaObecnie extends React.Component {
  render() {
    return (
      <div className="parafia-row">
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Parafia Obecnie</h2>
          <div className="buttons-content row">
            <div className="buttons-box-text col-md-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia hendrerit massa lobortis imperdiet. Duis at nibh tempor,
              congue eros dapibus, tristique ante. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              suscipit, lorem vitae iaculis scelerisque, orci nulla fermentum
              nulla, in sollicitudin velit nisl iaculis sem. Etiam ullamcorper
              urna eu lectus efficitur, vehicula faucibus nibh blandit. Ut
              mattis ac nisi in convallis. Mauris malesuada mauris nisi, eu
              aliquet leo dapibus et. Sed augue ligula, dictum nec condimentum
              eu, consequat in ligula. Integer aliquam elementum nisl, ut
              bibendum tortor porttitor id. Donec dapibus feugiat ornare.
              Integer blandit elementum eros, nec dictum sem hendrerit id.
              Phasellus lacus nulla, aliquet a purus quis, porttitor posuere
              leo. Nunc a pharetra tortor. Nam tempor iaculis arcu, et bibendum
              enim facilisis quis
            </div>
            <div className="col-md-4">
              <img className="buttons-img" src="..\img\parafia\obecnie.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class HistoriaParafi extends React.Component {
  render() {
    return (
      <div className="parafia-row">
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Historia Parafi</h2>
          <div className="buttons-content row">
            <div className="buttons-box-text col-md-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia hendrerit massa lobortis imperdiet. Duis at nibh tempor,
              congue eros dapibus, tristique ante. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              suscipit, lorem vitae iaculis scelerisque, orci nulla fermentum
              nulla, in sollicitudin velit nisl iaculis sem. Etiam ullamcorper
              urna eu lectus efficitur, vehicula faucibus nibh blandit. Ut
              mattis ac nisi in convallis. Mauris malesuada mauris nisi, eu
              aliquet leo dapibus et. Sed augue ligula, dictum nec condimentum
              eu, consequat in ligula. Integer aliquam elementum nisl, ut
              bibendum tortor porttitor id. Donec dapibus feugiat ornare.
              Integer blandit elementum eros, nec dictum sem hendrerit id.
              Phasellus lacus nulla, aliquet a purus quis, porttitor posuere
              leo. Nunc a pharetra tortor. Nam tempor iaculis arcu, et bibendum
              enim facilisis quis
            </div>
            <div className="col-md-4">
              <img className="buttons-img" src="..\img\parafia\stary.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Miejscowosci extends React.Component {
  render() {
    return (
      <div className="parafia-row">
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Parafia Obecnie</h2>
          <div className="buttons-content row">
            <div className="buttons-box-text col-md-8">
              <ul>
                <li>Dryganek Duży</li>
                <li>Dryganek Mały</li>
                <li>Glina Duża</li>
                <li>Glina Mała</li>
                <li>Kule</li>
                <li>Gumnisko</li>
                <li>Dąbrowa</li>
                <li>Pierzyny Duże</li>
                <li>Pierzyny Małe</li>
                <li>Kiełczygłów - Okupniki</li>
                <li>Kiełczygłów</li>
                <li>Huta</li>
                <li>Lipie</li>
                <li>Kiełczygłówek</li>
                <li>Osina Mała</li>
                <li>Osina Duża</li>
                <li>Beresie Małe</li>
                <li>Obrów</li>
                <li>Kiełczygłów Kolonia (nr od 1 do 19)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parafia;
