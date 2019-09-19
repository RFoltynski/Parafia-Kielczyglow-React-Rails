import React from "react";
import { useSpring, animated } from "react-spring";

import Wrobel from "./../img/ksieza/Antoni_Wrobel.JPG";
import Polak from "./../img/ksieza/Edward_Polak.JPG";
import Janson from "./../img/ksieza/Józef_Janson.JPG";
import Kruk from "./../img/ksieza/Wincenty_Kruk.JPG";
import NieWiem from "./../img/ksieza/IMG_1768.JPG";

function Proboszczowie() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2> Dotychczasowi proboszczowie</h2>
          <div className="row">
            <div className="col-md-8">
              <div>
                <div>Antonii Wróbel (1925-1938)</div>
                <img src={Wrobel} />
              </div>
              <div>
                <div>Stanisław Dąbrowski (1938-1939)</div>
                <img src={NieWiem} />
              </div>
              <div>
                <div>Franciszek Figura (1939-1940)</div>
                <img src={NieWiem} />
              </div>
              <div>
                <div> Wincenty Kruk (1940-1941) </div>
                <img src={Kruk} />
              </div>
              <div>
                <div> Józef Janson (1945-1949) (1953-1959) </div>
                <img src={Janson} />
              </div>
              <div>
                <div> Antoni Turbański (1949-1953) </div>
                <img src={Kruk} />
              </div>
              <div>
                <div>Edward Polak (1959-1990) </div>
                <img src={Polak} />
              </div>
              <div>
                <div>Bogdan Ignasiak (1990- do teraz)) </div>
                <img src={Polak} />
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Proboszczowie;
