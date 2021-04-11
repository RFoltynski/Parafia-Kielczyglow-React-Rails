import React from "react";
import Navbar from "./Navbar";
import OgloszeniaIntencje from "./OgloszeniaIntencje";
import OgloszeniaAktualnosci from "./OgloszeniaAktualnosci";
import Submenu from "./Elements/Submenu";

const Ogloszenia = () => {
  let componentsList = [
    ["Aktualnosci", <OgloszeniaAktualnosci key={1} />],
    ["Intencje", <OgloszeniaIntencje key={2} />],
  ];

  return (
    <div className="subcategory subcategory_ogloszenia__background">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Ogłoszenia </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Ogloszenia;
