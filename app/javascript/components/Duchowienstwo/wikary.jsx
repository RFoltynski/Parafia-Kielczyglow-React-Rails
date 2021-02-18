import React from "react";

function Wikary() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>Obecny Wikariusz</h2>
        <h3 className="text-center h3-header">Ks. Remigiusz Michał Lech</h3>
        <div className="ob-proboszczowie-overlay">
          <img
            className="ob-proboszczowie-img "
            alt="ks Remigiusz Michal Lech"
          />
          <p className="ob-proboszczowie-text">
            {" "}
            <span className={"bold-orange-word"}>Urodzony:</span> <br /> Urodził
            się w Myszkowie 15 maja 1993r.
            <br /> <span className={"bold-orange-word"}>Edukacja:</span> <br />
            Szkołę podstawową i gimnazjum ukończył w Myszkowie, a Liceum
            Ogólnokształcące w Koziegłowach. <br />W 2012r. wstąpił do Wyższego
            Seminarium Duchownego w Częstochowie.
            <br /> <span className={"bold-orange-word"}>
              Święcenia:
            </span> <br /> Świecenia kapłańskie otrzymał 30 maja 2020r. z rąk
            J.E. ks. Arcybiskupa Wacława Depo. Dekretem biskupa z 1 lipca 2020r.
            rozpoczął posługę w Parafii Św. Antoniego w Kiełczygłowie.
            <br />
            <span className={"bold-orange-word"}>Duszpasterstwo:</span> <br />
            <br /> Wikariusz w Kiełczygłowie: 2016 do teraz.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Wikary;
