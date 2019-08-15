import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {" "}
        <center>
          <h1>Parafia-Kielczyglow.info.pl</h1>

          <button
            type="button"
            class="btn btn-outline-light"
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
