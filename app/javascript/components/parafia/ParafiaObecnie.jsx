import React from "react";

function ParafiaObecnie() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>Informacje Ogólne</h2>
        <br />
        <div className="subcategory__view__column">
          <div className="buttons-box-text col-md-12">
            <h3 className="h3-header text-center">
              Parafia Świętego Antoniego z Padwy w Kiełczygłowie
            </h3>{" "}
            <p className="text-center">
              Parafia rzymskokatolicka w Kiełczygłowie. Należy do Dekanatu
              Pajęczno archidiecezji częstochowskiej.
            </p>
          </div>
        </div>
        <br />
        <div className="subcategory__view__column text-center">
          <div className="buttons-box-text col-md-12">
            <h3 className="h3-header">Msze swięte:</h3>
            <br />
            <p>
              {" "}
              <b>Kielczygłów:</b> <br />
              Niedziela i święta: 9.00, 12.00, 15.30 <br />
              Święta zniesione: 8:00, 10:00, 16:00 <br />
              Dni powszednie: 7:00 (msza koncelebrowana) <br />
              <br />
              <b>Pierzyny Małe:</b> <br />
              Msze św.: niedziela i święta - 10:30 <br />
              Dni powszednie: <br />- czas letni: 18.00 <br /> - czas zimowy:
              16.00 <br />
            </p>
            <h3 className="h3-header">Odpust:</h3>
            <br />
            <p>
              <b>Kielczygłów:</b> <br />
              1. św. Antioniego - 13 czerwca <br />
              2. Niepokalanego Serca NMP - niedziela ok. 22 sierpnia
            </p>
            <p>
              <b>Pierzyny Małe:</b> <br />
              1. NMP Królowej Polski - 3 maja
            </p>
            <h3 className="h3-header">Doba Eucharystyczna:</h3>
            <br />
            <p>
              {" "}
              <b>Kielczygłów:</b> <br />
              30/31 października{" "}
            </p>
            <p>
              {" "}
              <b>Pierzyny Małe:</b> <br />
              18 stycznia
            </p>
            <h3 className="h3-header">Mieszkańcy:</h3>
            <br />
            <p> 2500</p>
          </div>
        </div>

        <div className="subcategory__view__column text-center">
          <div className="buttons-box-text">
            <h3 className="h3-header">
              Miejscowości należące do parafii Kiełczygłów:
            </h3>
          </div>
          <div className="parafia-row">
            <ul>
              <li>Dryganek Duży</li>
              <li>Dryganek Mały</li>
              <li>Glina Duża</li>
              <li>Glina Mała</li>
              <li>Kule</li>
              <li>Gumnisko</li>
            </ul>
            <ul>
              <li>Dąbrowa</li>
              <li>Pierzyny Duże</li>
              <li>Pierzyny Małe</li>
              <li>Kiełczygłów - Okupniki</li>
              <li>Kiełczygłów</li>
              <li>Huta</li>
              <li>Lipie</li>
            </ul>
            <ul>
              <li>Kiełczygłówek</li>
              <li>Osina Mała</li>
              <li>Osina Duża</li>
              <li>Beresie Małe</li>
              <li>Obrów</li>
              <li>Kiełczygłów Kolonia (nr 1 - 19)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParafiaObecnie;
