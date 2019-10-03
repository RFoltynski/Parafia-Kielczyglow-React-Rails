import React from "react";
import { useSpring, animated } from "react-spring";

import stacja7 from "./../img/webs/Stacja7.png";
import deon from "./../img/webs/deon.jpg";
import dominikanie from "./../img/webs/dominikanie.jpg";
import niedziela from "./../img/webs/niedziela.jpg";

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
              Wiele ciekawych artykułów, na różne tematy.
            </div>
          </div>
          <div className="parafia-row">
            <img className=" col-md-3 offset-md-1" src={stacja7} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <a href={"https://stacja7.pl/"}>
                <h3 className="h3-header">Stacja7</h3>
              </a>
              Katolickie miejsce w sieci warte odwiedzenia.
            </div>
          </div>
          <div className="parafia-row">
            <img className=" col-md-3 offset-md-1" src={dominikanie} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <a href={"https://dominikanie.pl/"}>
                <h3 className="h3-header">Dominiknie.pl</h3>
              </a>
              Słowo Boże w przystępnej formie.
            </div>
          </div>
          <div className="parafia-row">
            <img className=" col-md-3 offset-md-1" src={niedziela} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <a href={"https://www.niedziela.pl/"}>
                <h3 className="h3-header">Niedziela.pl</h3>
              </a>
              Tygodnik Niedziela w Internecie.
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default MiejscaWSieci;
