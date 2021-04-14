import React from "react";
import Navbar from "./elements/Navbar";
import Submenu from "./elements/Submenu";
import CmentarzInfo from "./subcomponents/cmentarz/CmentarzInfo";
import Kaplica from "./subcomponents/cmentarz/Kaplica";
import Pogrzeby from "./subcomponents/cmentarz/Pogrzeby";

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
