import React from "react";
import Navbar from "./Navbar";

import HistoriaParafi from "./parafia/HistoriaParafi.jsx";
import OPatronie from "./parafia/OPatronie.jsx";
import ParafiaObecnie from "./parafia/ParafiaObecnie";
import Miejsca from "./parafia/Miejsca.jsx";
import WspolnotyParafialne from "./parafia/WspolnotyParafialne.jsx";
import ButtonMenu from "./Elements/ButtonMenu.js";

const Parafia = () => {
  let componentsList = [
    ["O Patronie", <OPatronie />],
    ["Historia Parafi", <HistoriaParafi />],
    ["Miejsca", <Miejsca />],
    ["Wspólnoty Parafialne", <WspolnotyParafialne />],
    ["Parafia Obecnie", <ParafiaObecnie />],
  ];

  return (
    <div className="parafia">
      <div className="overlay">
        <Navbar />
        <center>
          <h1 className="h1-header"> Inne </h1>
          <ButtonMenu componentsList={componentsList} />
        </center>
      </div>
    </div>
  );
};

export default Parafia;
