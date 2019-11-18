import React from "react";
import { useSpring, animated } from "react-spring";

import pomnik from "./../img/miejsca/pomnik.jpg";
import kaplica from "./../img/miejsca/kaplica.JPG";
import cmentarz from "./../img/miejsca/cmentarz.JPG";

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
          <h2> Cmentarz </h2>
          <div className="inne-row">
            <img
              className="buttons-img buttons-img-miejsca col-md-5"
              src={cmentarz}
            />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header ">Kiełczygłów ul. Piotrkowska 40 </h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony.
              <br />
            </div>
          </div>
          <br />
        </div>
      </animated.div>
    </div>
  );
}

export default Miejsca;
