import React from "react";
import Navbar from "./Navbar";
import OgloszeniaIntencje from "./OgloszeniaIntencje";
import OgloszeniaAktualnosci from "./OgloszeniaAktualnosci";
import axios from "axios";

class Ogloszenia extends React.Component {
  constructor(props) {
    super();
    this.state = {
      render: "",
      buttonPressed1: true,
      buttonPressed2: false,
      intencions: [],
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get("api/v1/intentions.json", {}, { "Content-Type": "application/json" })
      .then((res) => {
        this.setState({
          intentions: res.data.data,
          isLoading: true,
        });
      });

    window.scrollTo(0, 0);
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
      case "OgloszeniaAktualnosci":
        return <OgloszeniaAktualnosci />;
      case "OgloszeniaIntencje":
        return (
          <OgloszeniaIntencje
            intentionlink={
              this.state.isLoading
                ? this.state.intentions.kielczyglow.map((item) => {
                    return item.file;
                  })
                : ""
            }
          />
        );
    }
  }

  onClick1 = (event) => {
    this.handleClick("OgloszeniaAktualnosci");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed1: true,
        buttonPressed2: false,
        buttonPressed3: false,
      });
    })();
  };
  onClick2 = (event) => {
    this.handleClick("OgloszeniaIntencje");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed1: false,
        buttonPressed2: true,
        buttonPressed3: false,
      });
    })();
  };

  render() {
    return (
      <div className="Ogloszenia-comp">
        <Navbar />
        <center>
          <h1 className="h1-header"> Ogłoszenia </h1>
          <div className="inne-buttons">
            <button
              onClick={this.onClick1}
              className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
            >
              Aktualnosci
            </button>
            <button
              onClick={this.onClick2}
              className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
            >
              Intencje
            </button>

            {this.state.render === "" ? (
              <OgloszeniaAktualnosci />
            ) : (
              this._renderSubComp()
            )}
          </div>
        </center>
      </div>
    );
  }
}

export default Ogloszenia;
