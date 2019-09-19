import React from "react";
import { useSpring, animated } from "react-spring";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import pamiatka from "./../img/parafia/HistoriaParafi/pamiatka.jpg";
import stary from "./../img/parafia/HistoriaParafi/stary.jpg";
import gazeta from "./../img/parafia/HistoriaParafi/gazeta.jpg";

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
          <Slider>
            <div className="text-center offset-md-1 col-md-10">
              <h2>Powstanie Parafii</h2>
              <p>
                {" "}
                Parafię erygował bp włocławski Stanisław Zdzitkowiecki
                21.08.1924 r.
              </p>
              <div className="row">
                <img src={stary} />
              </div>
            </div>
            <div className="text-center offset-md-1 col-md-10">
              <h2>Budowa Kościoła</h2>
              Obecny kosciół został wybudowany staraniem ks. Józefa Jansona w
              latach 1948-1957.
            </div>
            <div className="text-center offset-md-1 col-md-10">
              <h2>Konsekracja Kościoła</h2>
              Konsekrował go bp Zdzisław Goliński 13.06.1957 roku.
            </div>
            <div className="text-center offset-md-1 col-md-10">
              <h2>Budowa Kościoła w Pierzynach Małych</h2>
              Kościół filialny zbudowany został w latach 1985-1988. Jego budowę
              rozpoczął miejscowy wikariusz ks. Adam Sołtysiak, dokończył
              wikariusz, a nastęþnie proboszcz - ks. Bogdan Ignasiak. Uroczyście
              posœięcił bp Stanisław Nowak 29.05.1988r.
            </div>
          </Slider>
        </div>
      </animated.div>
    </div>
  );
}

export default HistoriaParafi;
