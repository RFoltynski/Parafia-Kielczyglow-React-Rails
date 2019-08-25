import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {" "}
        <center>
          <div className="header-box">
            <h1 class="h1-header header-parafia">Parafia Kiełczygłów</h1>
          </div>
          <div className={"arrow bounce"} />
          <button
            type="button"
            class="admin-panel-button-header"
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
