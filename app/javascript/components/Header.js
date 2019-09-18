import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {" "}
        <center>
          <div className="header-box">
            <h1 className="h1-header header-parafia">Parafia Kiełczygłów</h1>
          </div>
          <div className={"arrow bounce"} />
          <button
            type="button"
            className="admin-panel-button-header"
            onClick={this.props.scroll}
          >
            MENU
          </button>
        </center>{" "}
      </div>
    );
  }
}

export default Header;
