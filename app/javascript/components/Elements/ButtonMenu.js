import React from "react";

class Parafia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: this.props.componentsList[0][0],
    };
  }

  _renderSubComp() {
    switch (this.state.render) {
      case "ksiazki":
        return this.props.componentsList[0][1];
      case "miejscawsieci":
        return this.props.componentsList[1][1];
    }
  }

  onClick = (event) => {
    let compName = event.target.name || this.props.componentsList[0][1];
    this.setState({
      render: compName,
    });
  };

  render() {
    return (
      <div className="submenu">
        {this.props.componentsList.map((element) => {
          return (
            <button
              name={element[0]}
              onClick={this.onClick}
              className={
                this.state.render == element[0] ? "buttonWhite" : "button"
              }
            >
              {element[0]}
            </button>
          );
        })}
        {this.state.render == ""
          ? this.props.firstToDisplay
          : this._renderSubComp()}
      </div>
    );
  }
}
export default Parafia;
