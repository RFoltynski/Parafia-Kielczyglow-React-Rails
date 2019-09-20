import React from "react";
import { useSpring, animated } from "react-spring";

import oltarz from "./../img/parafia/ParafiaObecnie/oltarz.jpg";

function ParafiaObecnie() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="parafia-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2>Informacje Ogólne</h2>
          <br />
          <div className="parafia-row">
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
          <div className="parafia-row text-center">
            <div className="buttons-box-text col-md-12">
              <h3 className="h3-header">Msze swięte:</h3>
              <br />
              <p>
                {" "}
                <b>Kielczygłów:</b> <br />
                Niedziela i święta: 9.00, 12.00, 15.30 <br />
                Święta zniesione: 8:00, 10:00, 16:00 <br />
                Dni powszednie: 7:00, 7:30 <br />
                <br />
                <b>Pierzyny Małe:</b> <br />
                Msze św.: niedziela i święta - 10:30 <br />
                Święta zniesione: 12:00 <br />
                Dni powszednie: 18:00 <br />
                Doba Eucharystyczna: 18 stycznia
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

          <div className="parafia-row-column text-center">
            <div className="buttons-box-text">
              <h3 className="h3-header">
                Miejscowości należące do parafii Kiełczygłów:
              </h3>
            </div>
            <div className="parafia-row">
              <ul className="parafia-obecenie">
                <li>Dryganek Duży</li>
                <li>Dryganek Mały</li>
                <li>Glina Duża</li>
                <li>Glina Mała</li>
                <li>Kule</li>
                <li>Gumnisko</li>
              </ul>
              <ul className="parafia-obecenie">
                <li>Dąbrowa</li>
                <li>Pierzyny Duże</li>
                <li>Pierzyny Małe</li>
                <li>Kiełczygłów - Okupniki</li>
                <li>Kiełczygłów</li>
                <li>Huta</li>
                <li>Lipie</li>
              </ul>
              <ul className="parafia-obecenie">
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
      </animated.div>
    </div>
  );
}

export default ParafiaObecnie;
