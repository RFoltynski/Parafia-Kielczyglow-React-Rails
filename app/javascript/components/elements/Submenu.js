import React from "react";

class Submenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: this.props.componentsList[0][0],
    };
  }

  _renderSubComp = () => {
    return this.props.componentsList.map((element) => {
      if (this.state.render == element[0]) {
        return element[1];
      }
    });
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
        {this.props.componentsList.map((element, key) => {
          return (
            <button
              key={key}
              name={element[0]}
              onClick={this.onClick}
              className={
                this.state.render == element[0]
                  ? "button_default button_clicked"
                  : "button_default"
              }
            >
              {element[0]}
            </button>
          );
        })}
        {this._renderSubComp()}
      </div>
    );
  }
}
export default Submenu;
