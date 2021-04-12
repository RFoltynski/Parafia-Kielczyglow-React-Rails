import React from "react";
import Navbar from "./Navbar";

import HistoriaParafi from "./parafia/HistoriaParafi.jsx";
import OPatronie from "./parafia/OPatronie.jsx";
import ParafiaObecnie from "./parafia/ParafiaObecnie";
import Miejsca from "./parafia/Miejsca.jsx";
import WspolnotyParafialne from "./inne/WspolnotyParafialne.jsx";
import Submenu from "./Elements/Submenu.js";

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
