import Navbar from "./subcomponents/Navbar";
import React from "react";
import Submenu from "./subcomponents/Submenu";

const RootComponent = (props) => {
  return (
    <div className="subcategory">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> {props.header} </h1>
        <Submenu componentsList={props.componentsList} key={1} />
      </center>
    </div>
  );
};

export default RootComponent;
