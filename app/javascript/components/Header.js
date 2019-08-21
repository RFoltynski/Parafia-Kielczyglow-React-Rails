import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {" "}
        <center>
          <div className="header-box">
            <h1 class="h1-header header-parafia">
              Parafia-Kielczyglow.info.pl
            </h1>
          </div>
          <div className={"arrow bounce"} />
          <button
            type="button"
            class="btn btn-light button-header"
            onClick={this.props.scroll}
          >
            {" "}
            MENU{" "}
          </button>
        </center>{" "}
      </div>
    );
  }
}

export default Header;
