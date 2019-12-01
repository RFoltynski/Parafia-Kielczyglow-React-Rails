import React from "react";

class Header extends React.Component {
  render() {
    let link = this.props.link;
    return (
      <div className="header" onClick={this.props.scroll}>
        {" "}
        <div className="header-box">
          <h1 className="header-parafia">Parafia Kiełczygłów</h1>
          <p className="header-parafia-p">
            <a href="/aktualnosci">Aktualności</a> *{" "}
            <a href={link.toString()}>Intencje</a> *{" "}
            <a href="/kontakt">Kontakt</a>
          </p>
          <div className={"arrow bounce"} />
        </div>
      </div>
    );
  }
}

export default Header;
