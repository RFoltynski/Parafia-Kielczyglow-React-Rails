import React from "react";
import Navbar from "./Navbar";
import Submenu from "./Elements/Submenu";
import Ksiazki from "./inne/Ksiazki.jsx";
import MiejscaWSieci from "./inne/MiejscaWSieci.jsx";

const Inne = () => {
  let componentsList = [
    ["Ksiazki", <Ksiazki key={1} />],
    ["Miejsca w sieci", <MiejscaWSieci key={2} />],
  ];

  return (
    <div className="subcategory">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Inne </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Inne;
