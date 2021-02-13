import React from "react";
import Navbar from "./Navbar";
import Proboszcz from "./Duchowienstwo/proboszcz.jsx";
import Proboszczowie from "./Duchowienstwo/proboszczowie";
import Wikary from "./Duchowienstwo/wikary.jsx";
import Powolania from "./Duchowienstwo/powolania.jsx";
import Submenu from "./Elements/Submenu.js";

const Duchowienstwo = () => {
  let componentsList = [
    ["Proboszcz", <Proboszcz />],
    ["Wikary", <Wikary />],
    ["Proboszczowie", <Proboszczowie />],
    ["Powolania", <Powolania />],
  ];

  return (
    <div className="Duchowienstwo">
      <div className="overlay">
        <Navbar />
        <center>
          <h1 className="h1-header"> Duchowieństwo </h1>
          <Submenu componentsList={componentsList} />
        </center>
      </div>
    </div>
  );
};

export default Duchowienstwo;
