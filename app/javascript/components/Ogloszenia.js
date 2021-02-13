import React from "react";
import Navbar from "./Navbar";
import OgloszeniaIntencje from "./OgloszeniaIntencje";
import OgloszeniaAktualnosci from "./OgloszeniaAktualnosci";
import ButtonMenu from "./Elements/ButtonMenu";

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
        <ButtonMenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Ogloszenia;
