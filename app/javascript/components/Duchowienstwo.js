import React from "react";
import Navbar from "./Navbar";
import Proboszcz from "./Duchowienstwo/proboszcz.jsx";
import Proboszczowie from "./Duchowienstwo/proboszczowie";
import Wikary from "./Duchowienstwo/wikary.jsx";
import Powolania from "./Duchowienstwo/powolania.jsx";
import Submenu from "./Elements/Submenu.js";

const Duchowienstwo = () => {
  let componentsList = [
    ["Proboszcz", <Proboszcz key={1} />],
    ["Wikary", <Wikary key={2} />],
    ["Proboszczowie", <Proboszczowie key={3} />],
    ["Powolania", <Powolania key={4} />],
  ];

  return (
    <div className="subcategory subcategory_duchowienstwo__background">
      <Navbar />
      <center>
        <h1 className="subcategory__header"> Duchowieństwo </h1>
        <Submenu componentsList={componentsList} />
      </center>
    </div>
  );
};

export default Duchowienstwo;
