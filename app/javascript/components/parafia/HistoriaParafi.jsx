import React from "react";
import { useSpring, animated } from "react-spring";

import caly from "./../img/budowa/caly.JPG";
import caly2 from "./../img/budowa/caly2.JPG";
import dach from "./../img/budowa/dach.JPG";
import dach2 from "./../img/budowa/dach2.JPG";
import dach3 from "./../img/budowa/dach3.JPG";
import dach4 from "./../img/budowa/dach4.JPG";
import fundamenty from "./../img/budowa/fundamenty.JPG";
import konsekracja from "./../img/budowa/konsekracja.JPG";
import konsekracja2 from "./../img/budowa/konsekracja2.JPG";
import organy from "./../img/budowa/organy2.JPG";
import stolarka from "./../img/budowa/stolarka.JPG";
import swieto from "./../img/budowa/swieto.JPG";
import wsrodku from "./../img/budowa/wsrodku.JPG";
import wsrodku2 from "./../img/budowa/wsrodku2.JPG";
import wsrodku3 from "./../img/budowa/wsrodku3.JPG";
import wsrodku4 from "./../img/budowa/wsrodku4.JPG";
import stary from "./../img/parafia/HistoriaParafi/stary.jpg";
import gazeta from "./../img/parafia/HistoriaParafi/gazeta.jpg";
import pamiatka from "./../img/parafia/HistoriaParafi/pamiatka.jpg";
import ulotka from "./../img/parafia/HistoriaParafi/ulotka.jpg";

function HistoriaParafi() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="parafia-row">
      <animated.div style={props}>
        <div className="buttons-box" style={{ color: "black" }}>
          <h2>Historia Parafii</h2>
          <br />

          <div className="text-center offset-md-1 col-md-10">
            <h3 className="h3-header">Powstanie Parafii</h3>
            <p>
              {" "}
              Parafię erygował bp włocławski Stanisław Zdzitkowiecki 21.08.1924
              r.
            </p>
            <div className="budowa-images">
              <img src={stary} className="budowa-image" />
            </div>
          </div>
          <div className="text-center offset-md-1 col-md-10">
            <h3 className="h3-header">Budowa Kościoła</h3>
            Obecny kosciół został wybudowany staraniem ks. Józefa Jansona w
            latach 1948-1957.
            <div className="col-md-12">
              <div className="row">
                <img src={fundamenty} className="budowa-image" />
                <img src={ulotka} className="budowa-image" />
                <img src={caly} className="budowa-image" />
                <img src={caly2} className="budowa-image" />
              </div>
              <div className="row">
                <img src={dach} className="budowa-image" />
                <img src={dach2} className="budowa-image" />
                <img src={dach3} className="budowa-image" />
                <img src={dach4} className="budowa-image" />
              </div>
            </div>
            Prace wewnątrz
            <div className="budowa-images">
              <img src={wsrodku} className="budowa-image" />
              <img src={wsrodku2} className="budowa-image" />
              <img src={wsrodku3} className="budowa-image" />
              <img src={wsrodku4} className="budowa-image" />
              <img src={organy} className="budowa-image" />
              <img src={stolarka} className="budowa-image" />
            </div>
          </div>
          <div className="text-center offset-md-1 col-md-10">
            <h3 className="h3-header">Konsekracja Kościoła</h3>
            Konsekrował go bp Zdzisław Goliński 13.06.1957 roku.
            <div className="budowa-images">
              <img src={konsekracja} className="budowa-image" />
              <img src={konsekracja2} className="budowa-image" />
              <img src={swieto} className="budowa-image" />
            </div>
          </div>
          <div className="text-center offset-md-1 col-md-10">
            <h3 className="h3-header">Budowa Kościoła w Pierzynach Małych</h3>
            Kościół filialny zbudowany został w latach 1985-1988. Jego budowę
            rozpoczął miejscowy wikariusz ks. Adam Sołtysiak, dokończył
            wikariusz, a nastęþnie proboszcz - ks. Bogdan Ignasiak. Uroczyście
            posœięcił bp Stanisław Nowak 29.05.1988r.
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default HistoriaParafi;
