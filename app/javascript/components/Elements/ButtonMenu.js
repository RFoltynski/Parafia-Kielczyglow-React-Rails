import React from "react";

class Parafia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
    };
  }

  _renderSubComp = () => {
    let comp = this.props.componentsList.filter((element) => {
      if (this.state.render == element[0]) {
        return element[1];
      }
    });
    return comp;
  };

  onClick = (event) => {
    let compName = event.target.name;
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
          ? this.props.componentsList[0][1]
          : this._renderSubComp()}
      </div>
    );
  }
}
export default Parafia;
