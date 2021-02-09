import React from "react";
import Navbar from "./Navbar";
import Proboszcz from "./Duchowienstwo/proboszcz.jsx";
import Proboszczowie from "./Duchowienstwo/proboszczowie";
import Wikary from "./Duchowienstwo/wikary.jsx";
import Powolania from "./Duchowienstwo/powolania.jsx";

class Duchowienstwo extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed: true,
      buttonPressed1: false,
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
      case "proboszcz":
        return <Proboszcz />;
      case "wikary":
        return <Wikary />;
      case "proboszczowie":
        return <Proboszczowie />;
      case "powolania":
        return <Powolania />;
    }
  }

  onClick = (event) => {
    this.handleClick("proboszcz");
    (this.buttonPress = () => {
      this.setState({
        buttonPressed: true,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: false,
      });
    })();
  };
  onClick1 = (event) => {
    this.handleClick("wikary");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: true,
        buttonPressed2: false,
        buttonPressed3: false,
      });
    })();
  };
  onClick2 = (event) => {
    this.handleClick("proboszczowie");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: true,
        buttonPressed3: false,
      });
    })();
  };
  onClick3 = (event) => {
    this.handleClick("powolania");
    (this.buttonPress3 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: true,
      });
    })();
  };

  render() {
    return (
      <div className="Duchowienstwo">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 className="h1-header"> Duchowieństwo </h1>
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
                Wikariusz
              </button>
              <button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Poprzedni Proboszczowie
              </button>
              <button
                onClick={this.onClick3}
                className={this.state.buttonPressed3 ? "buttonWhite" : "button"}
              >
                Powolania w Parafii
              </button>

              {this.state.render === "" ? <Proboszcz /> : this._renderSubComp()}
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Duchowienstwo;
