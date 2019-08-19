import React from "react";
import Navbar from "./Navbar";

class Kaplani extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed: true,
      buttonPressed1: false
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
        return <Pytania />;
      case "wikary":
        return <Ksiazki />;
    }
  }

  onClick = event => {
    this.handleClick("proboszcz");
    (this.buttonPress = () => {
      this.setState({
        buttonPressed: true,
        buttonPressed1: false
      });
    })();
  };
  onClick1 = event => {
    this.handleClick("wikary");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: true
      });
    })();
  };

  render() {
    return (
      <div className="kaplani">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 class="h1-header"> Kapłani </h1>
            <div className="inne-buttons">
              <Button
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Proboszcz
              </Button>
              <Button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                Wikary
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

export default Kaplani;
