import React from "react";
import { useSpring, animated } from "react-spring";

import Wrobel from "./../img/ksieza/Antoni_Wrobel.JPG";
import Polak from "./../img/ksieza/Edward_Polak.JPG";
import Janson from "./../img/ksieza/Józef_Janson.JPG";
import Kruk from "./../img/ksieza/Wincenty_Kruk.JPG";
import Turbanski from "./../img/ksieza/Antonii_Turbanski.JPG";

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
          <h2> Poprzedni proboszczowie</h2>

          <div className=" col-md-12 probszczowie text-center">
            <div>
              <img src={Polak} className="proboszczowie-img" />
              <div>Edward Polak (1959-1990) </div>
            </div>
            <hr />
            <div>
              <img src={Turbanski} className="proboszczowie-img" />
              <div> Antoni Turbański (1949-1953) </div>
            </div>
            <hr />
            <div>
              <img src={Janson} className="proboszczowie-img" />
              <div> Józef Janson (1945-1949) (1953-1959) </div>
            </div>
            <hr />
            <div>
              <img src={Kruk} className="proboszczowie-img" />
              <div> Wincenty Kruk (1940-1941) </div>
            </div>
            <hr />
            <div>
              <div className="proboszczowie-img"> BRAK ZDJĘCIA </div>
              <div>Franciszek Figura (1939-1940)</div>
            </div>
            <hr />
            <div>
              <div className="proboszczowie-img"> BRAK ZDJĘCIA </div>
              <div>Stanisław Dąbrowski (1938-1939)</div>
            </div>
            <hr />
            <div>
              <img src={Wrobel} className="proboszczowie-img" />
              <div>Antonii Wróbel (1925-1938)</div>
            </div>
            <hr />
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Proboszczowie;
