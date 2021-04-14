import React from "react";
import Navbar from "./Navbar";
import Contactform from "./subcomponents/kontakt/contactForm";
import Information from "./subcomponents/kontakt/Information";
import Submenu from "./Elements/Submenu";

const Kontakt = () => {
  const componentsList = [
    ["Dane Kontaktowe", <Information key={1} />],
    ["Formularz", <Contactform key={2} />],
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

export default Kontakt;
