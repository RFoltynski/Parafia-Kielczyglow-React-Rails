import React from "react";
import Navbar from "./Navbar";
import Submenu from "./Elements/Submenu";
import CmentarzInfo from "./cmentarz/CmentarzInfo";
import Kaplica from "./cmentarz/Kaplica";
import Pogrzeby from "./cmentarz/Pogrzeby";
const Cmentarz = () => {
  const componentsList = [
    ["Cmentarz", <CmentarzInfo />],
    ["Kaplica", <Kaplica />],
    ["Pogrzeby", <Pogrzeby />],
  ];

  return (
    <div className="subcategory subcategory_cmentarz__background">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Cmentarz </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Cmentarz;
