import React from "react";
import Navbar from "./Navbar";
import ButtonMenu from "./Elements/ButtonMenu";
import Ksiazki from "./inne/Ksiazki.jsx";
import MiejscaWSieci from "./inne/MiejscaWSieci.jsx";

const Inne = () => {
  let componentsList = [
    ["ksiazki", <Ksiazki />],
    ["miejscawsieci", <MiejscaWSieci />],
  ];

  return (
    <div className="inne">
      <Navbar />
      <center>
        <h1 className="h1-header"> Inne </h1>
        <ButtonMenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Inne;
