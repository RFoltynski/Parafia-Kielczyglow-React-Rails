import React from "react";
import { useSpring, animated } from "react-spring";

import stacja7 from "./../img/webs/Stacja7.png";
import deon from "./../img/webs/deon.jpg";

function MiejscaWSieci() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Mijsca w sieci</h2>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-3 offset-md-1" src={deon} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <h3 className="h3-header">Deon</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Święty Antoni
              urodził się w roku 1195 w Lizbonie, stolicy Portugalii. Na chrzcie
              św. otrzymał imię Ferdynand.
            </div>
          </div>
          <div className="parafia-row">
            <img className="buttons-img col-md-3 offset-md-1" src={stacja7} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <h3 className="h3-header">Stacja7</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Święty Antoni
              urodził się w roku 1195 w Lizbonie, stolicy Portugalii. Na chrzcie
              św. otrzymał imię Ferdynand.
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default MiejscaWSieci;
