import React from "react";
import kaplica from "./../img/miejsca/kaplica.JPG";

function Miejsca() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2> Kościół filialny w Pierzynach </h2>
        <div className="subcategory__view__row">
          <img
            className="buttons-img buttons-img-miejsca col-md-5"
            src={kaplica}
          />
          <div className="buttons-box-text col-md-7 text-center">
            <h3 className="h3-header">Pierzyny Małe 12A,</h3>
            Kościół filialny zbudowany został w latach 1985-1988. Jego budowę
            rozpoczął miejscowy wikariusz ks. Adam Sołtysiak, dokończył
            wikariusz, a nastęþnie proboszcz - ks. Bogdan Ignasiak. Uroczyście
            posœięcił bp Stanisław Nowak 29.05.1988r.
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Miejsca;
