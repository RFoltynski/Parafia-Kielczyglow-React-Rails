import React from "react";
import Navbar from "./Navbar";

import HistoriaParafi from "./parafia/HistoriaParafi.jsx";
import OPatronie from "./parafia/OPatronie.jsx";
import ParafiaObecnie from "./parafia/ParafiaObecnie";
import Miejsca from "./parafia/Miejsca.jsx";
import WspolnotyParafialne from "./parafia/WspolnotyParafialne.jsx";
import Submenu from "./Elements/Submenu.js";

const Parafia = () => {
  let componentsList = [
    ["O Patronie", <OPatronie key={1} />],
    ["Historia Parafi", <HistoriaParafi key={2} />],
    ["Miejsca", <Miejsca key={3} />],
    ["Wspólnoty Parafialne", <WspolnotyParafialne key={4} />],
    ["Parafia Obecnie", <ParafiaObecnie key={5} />],
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
