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
            <img className="col-md-3 offset-md-1" src={deon} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <a href={"https://www.deon.pl/"}>
                {" "}
                <h3 className="h3-header">Deon</h3>{" "}
              </a>
              Wiele ciekawych artykułów, poświęconych wielu dziedziną życia
            </div>
          </div>
          <div className="parafia-row">
            <img className=" col-md-3 offset-md-1" src={stacja7} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <a href={"https://stacja7.pl/"}>
                <h3 className="h3-header">Stacja7</h3>
              </a>
              Podobnie jak na portalu Deon.pl, znajduje się tutaj wiele
              ciekawych artykułów poświęconych rozwojowi duchowemu, ale nie
              tylko.
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default MiejscaWSieci;
