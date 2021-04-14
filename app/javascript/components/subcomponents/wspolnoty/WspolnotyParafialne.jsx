import React from "react";
import cmentarz from "./../../img/miejsca/cmentarz.JPG";

function Miejsca() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2> Wspólnoty Parafialne </h2>
        <div className="subcategory__view__column">
          <img
            className="buttons-img buttons-img-miejsca col-md-5"
            src={cmentarz}
          />
          <div className="buttons-box-text col-md-7 text-center">
            <h3 className="h3-header">Żywe róże</h3>
            Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
            Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według podania,
            jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15. a 20.
            rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna, którzy
            mieli swój klasztor na przedmieściu Lizbony.
            <br />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Miejsca;
