import React from "react";
import Navbar from "./elements/Navbar";

import HistoriaParafi from "./subcomponents/parafia/HistoriaParafi.jsx";
import OPatronie from "./subcomponents/parafia/OPatronie.jsx";
import ParafiaObecnie from "./subcomponents/parafia/ParafiaObecnie";
import Miejsca from "./subcomponents/parafia/Miejsca.jsx";
import Submenu from "./elements/Submenu.js";

const Parafia = () => {
  let componentsList = [
    ["Historia Parafi", <HistoriaParafi key={1} />],
    ["O Patronie", <OPatronie key={2} />],
    ["Miejsca", <Miejsca key={3} />],
    ["Parafia Obecnie", <ParafiaObecnie key={4} />],
  ];

  return (
    <div className="subcategory">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Parafia </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Parafia;
