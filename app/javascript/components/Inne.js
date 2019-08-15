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
      buttonPressed2: false
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
      case "pytania":
        return <Pytania />;
      case "ksiazki":
        return <Ksiazki />;
      case "miejscawsieci":
        return <MiejscaWSieci />;
    }
  }

  onClick = event => {
    this.handleClick("pytania");
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
            <h1> Inne </h1>
            <div className="inne-buttons">
              <Button
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Pytania
              </Button>
              <Button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                Książki
              </Button>
              <Button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Miejsca w sieci
              </Button>

              {this.state.render === "" ? <Pytania /> : this._renderSubComp()}
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

class Pytania extends React.Component {
  render() {
    return (
      <div className="inne-row">
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Często zadawane pytania</h2>
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

class Ksiazki extends React.Component {
  render() {
    return (
      <div className="inne-row">
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Książki, które warto przeczytać</h2>
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

class MiejscaWSieci extends React.Component {
  render() {
    return (
      <div className="inne-row">
        <div className="buttons-box">
          <h2 name="scroll-to-historia">
            Miejsca w sieci, które warto odwiedzić
          </h2>
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

export default Parafia;
