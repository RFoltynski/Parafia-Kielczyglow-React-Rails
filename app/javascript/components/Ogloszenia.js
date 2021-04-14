import React from "react";
import Navbar from "./Navbar";
import OgloszeniaIntencje from "./subcomponents/ogloszenia/OgloszeniaIntencje";
import OgloszeniaAktualnosci from "./subcomponents/ogloszenia/OgloszeniaAktualnosci";
import Submenu from "./Elements/Submenu";

const Ogloszenia = () => {
  let componentsList = [
    ["Aktualnosci", <OgloszeniaAktualnosci key={1} />],
    ["Intencje", <OgloszeniaIntencje key={2} />],
  ];

  return (
    <div className="subcategory">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Ogłoszenia </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Ogloszenia;
