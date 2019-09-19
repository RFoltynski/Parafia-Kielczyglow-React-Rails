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
          <h2>Parafia Obecnie</h2>
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
          <div className="parafia-row">
            <div className="buttons-box-text col-md-12">
              <h3>Msze swięte:</h3>
              <p>
                {" "}
                niedziela i święta: 9.00, 12.00, 15.30; Święta zniesione: 8:00,
                10:00, 16:00; dni powszednie: 7:00, 7:30
              </p>
              <h3>Odpust:</h3>
              <p>
                {" "}
                1. św. Antioniego - 13 czerwca, 2. Niepokalanego Serca NMP -
                niedziela ok. 22 sierpnia
              </p>
              <h3>Doba Eucharystyczna:</h3>
              <p> 30/31 października </p>
              <h3>Kaplica</h3>
              <p>
                {" "}
                Pierzyny Małe - kościół p.w. NMP Królowej Polski; Msze św.:
                niedziela i święta - 10:30, święta zniesione: 12:00, dni
                powszednie: 18:00, Doba Eucharystyczna: 18 stycznia
              </p>
              <h3>Mieszkańcy:</h3>
              <p> 2500</p>

              <h3>Z parafii pochodzą księża:</h3>
              <p> Józef Wiśńiewski, Stanisław Lechowski</p>
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <div className="buttons-box-text col-md-8">
              Św. Franciszek był zamożnym rycerzem, niestroniącym od dobrej
              zabawy. Po nawróceniu zamienił swoje bogate ubranie z żebrakiem,
              modlił się i pokutował. Pewnego dnia usłyszał słowa:{" "}
              <blockquote> Franciszku napraw mój kościół </blockquote> Zapragnął
              radykalnie żyć Ewangelią, zachowując ubóstwo i głosząc nawrócenie.
              Zgromadzili się wokół niego naśladowcy, dla których spisał regułę
              życia ewangelicznego, dając początek Zakonowi Braci Mniejszych,
              nazywanych dzisiaj od jego imienia franciszkanami. Franciszek
              zrozumiał, że celem ubóstwa jest większa miłość, zaś owocem –
              radość.
              <br />
              <br />W jego wspomnienie dziękujemy Panu za dar zbawienia,
              prosząc, byśmy przyjęli Go tak żarliwie jak Franciszek.
            </div>
            <img className="buttons-img col-md-4" src={oltarz} />
          </div>
          <br />
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
                <li>Kiełczygłów Kolonia (nr od 1 do 19)</li>
              </ul>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ParafiaObecnie;
