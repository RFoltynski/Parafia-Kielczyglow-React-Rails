import React from "react";
import { useSpring, animated } from "react-spring";

import kaplica from "./../img/miejsca/kaplica.JPG";

function Miejsca() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2> Kościół filialny w Pierzynach </h2>
          <div className="inne-row">
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
      </animated.div>
    </div>
  );
}

export default Miejsca;
