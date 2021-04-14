import React from "react";
import Navbar from "./elements/Navbar";
import Proboszcz from "./subcomponents/duchowienstwo/proboszcz.jsx";
import Proboszczowie from "./subcomponents/duchowienstwo/proboszczowie";
import Wikary from "./subcomponents/duchowienstwo/wikary.jsx";
import Powolania from "./subcomponents/duchowienstwo/powolania.jsx";
import Submenu from "./elements/Submenu.js";

const Duchowienstwo = () => {
  let componentsList = [
    ["Proboszcz", <Proboszcz key={1} />],
    ["Wikary", <Wikary key={2} />],
    ["Proboszczowie", <Proboszczowie key={3} />],
    ["Powolania", <Powolania key={4} />],
  ];

  return (
    <div className="subcategory">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Duchowieństwo </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Duchowienstwo;
