import React from "react";
import franciszek from "./../img/parafia/Opatronie/franciszek.jpg";
import franciszekM from "./../img/parafia/Opatronie/franciszek-mlody.jpg";
import franciszekP from "./../img/parafia/Opatronie/franciszek-prosto.jpg";

function OPatronie() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>Św. Antoni Padewski</h2>
        <div className="subcategory__view__column">
          <img src={franciszek} alt="sw.franciszek" class="images-desktop" />
          <img src={franciszekM} alt="sw.franciszek" class="images-desktop" />
          <img src={franciszekP} alt="sw.franciszek" class="images-desktop" />
        </div>
      </div>
    </div>
  );
}

export default OPatronie;
