import React from "react";
import Navbar from "./Navbar";
import Submenu from "./Elements/Submenu";
import CmentarzInfo from "./cmentarz/CmentarzInfo";
import Kaplica from "./cmentarz/Kaplica";
import Pogrzeby from "./cmentarz/Pogrzeby";
const Cmentarz = () => {
  const componentsList = [
    ["Cmentarz", <CmentarzInfo key={1} />],
    ["Kaplica", <Kaplica key={2} />],
    ["Pogrzeby", <Pogrzeby key={3} />],
  ];

  return (
    <div className="subcategory">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Cmentarz </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Cmentarz;
