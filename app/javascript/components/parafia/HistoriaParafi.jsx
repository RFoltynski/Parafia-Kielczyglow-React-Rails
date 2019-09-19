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
        <div className="buttons-box">
          <h2>Historia Parafii</h2>
          <br />
          <Slider>
            <div style={{ color: "red" }}>czosnek</div>
            <div>czosnek2</div>
            <div>czosnek3</div>
          </Slider>
        </div>
      </animated.div>
    </div>
  );
}

export default HistoriaParafi;
