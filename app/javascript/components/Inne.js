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
              <Button
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Miejsca w parafii
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

              {this.state.render === "" ? <Miejsca /> : this._renderSubComp()}
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

export default Parafia;
