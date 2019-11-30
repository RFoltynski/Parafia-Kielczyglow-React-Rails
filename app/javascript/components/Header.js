import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header" onClick={this.props.scroll}>
        {" "}
        <div className="header-box">
          <h1 className="header-parafia">Parafia Kiełczygłów</h1>
          <p className="header-parafia-p">
            <a href="/aktualnosci">Aktualności</a> *{" "}
            <a href="/aktualnosci">Intencje</a> *{" "}
            <a href="/aktualnosci">Kontakt</a>
          </p>
          <div className={"arrow bounce"} />
        </div>
      </div>
    );
  }
}

export default Header;
