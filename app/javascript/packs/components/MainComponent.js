import React from "react";
import Navbar from "./elements/Navbar";
import Submenu from "./elements/Submenu";

const Main = (props) => {
  return (
    <div className="subcategory">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> {props.header} </h1>
        <Submenu componentsList={props.componentsList} />
      </center>
    </div>
  );
};

export default Main;
