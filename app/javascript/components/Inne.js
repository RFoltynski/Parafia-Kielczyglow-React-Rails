import React from "react";
import Navbar from "./Navbar";
import Submenu from "./Elements/Submenu";
import Ksiazki from "./subcomponents/wspolnoty/Ksiazki.jsx";
import MiejscaWSieci from "./subcomponents/wspolnoty/MiejscaWSieci.jsx";
import WspolnotyParafialne from "./subcomponents/wspolnoty/WspolnotyParafialne.jsx";

const Inne = () => {
  let componentsList = [
    ["Wspólnoty Parafialne", <WspolnotyParafialne key={1} />],
    ["Ksiazki", <Ksiazki key={2} />],
    ["Miejsca w sieci", <MiejscaWSieci key={3} />],
  ];

  return (
    <div className="subcategory">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Wspólnoty Parafialne </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Inne;
