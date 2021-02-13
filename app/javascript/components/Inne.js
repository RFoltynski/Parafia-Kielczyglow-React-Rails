import React from "react";
import Navbar from "./Navbar";
import Submenu from "./Elements/Submenu";
import Ksiazki from "./inne/Ksiazki.jsx";
import MiejscaWSieci from "./inne/MiejscaWSieci.jsx";

const Inne = () => {
  let componentsList = [
    ["Ksiazki", <Ksiazki />],
    ["Miejscawsieci", <MiejscaWSieci />],
  ];

  return (
    <div className="inne">
      <Navbar />
      <center>
        <h1 className="h1-header"> Inne </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Inne;
