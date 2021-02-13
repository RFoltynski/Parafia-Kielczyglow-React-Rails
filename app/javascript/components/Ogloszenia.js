import React from "react";
import Navbar from "./Navbar";
import OgloszeniaIntencje from "./OgloszeniaIntencje";
import OgloszeniaAktualnosci from "./OgloszeniaAktualnosci";
import Submenu from "./Elements/Submenu";

const Ogloszenia = () => {
  let componentsList = [
    ["Aktualnosci", <OgloszeniaAktualnosci />],
    ["Intencje", <OgloszeniaIntencje />],
  ];

  return (
    <div className="Ogloszenia-comp">
      <Navbar />
      <center>
        <h1 className="h1-header"> Ogłoszenia </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Ogloszenia;
