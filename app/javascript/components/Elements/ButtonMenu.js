import React from "react";

class Parafia extends React.Component {
  constructor(props) {
    super();
    this.state = {
      render: "",
    };
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  _renderSubComp() {
    switch (this.state.render) {
      case "ksiazki":
        return this.props.ksiazki[0][1];
      case "miejscawsieci":
        return this.props.ksiazki[1][1];
    }
  }

  onClick = (event) => {
    let compName = event.target.name || "ksiazki";

    this.setState({
      render: compName,
    });
  };

  render() {
    return (
      <div className="inne">
        <div className="inne-buttons">
          {this.props.ksiazki.map((element) => {
            return (
              <button name={element[0]} onClick={this.onClick}>
                {element[0]}
              </button>
            );
          })}
          {this.state.render === ""
            ? this.props.ksiazki[0]
            : this._renderSubComp()}
        </div>
      </div>
    );
  }
}
export default Parafia;
