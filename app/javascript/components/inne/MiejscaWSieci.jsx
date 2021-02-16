import React from "react";
import { useSpring, animated } from "react-spring";

function MiejscaWSieci() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  return (
    <div className="subcategory__container">
      <animated.div style={props}>
        <div className="subcategory__view">
          <h2 name="scroll-to-historia">Mijsca w sieci</h2>
          <br />
          <div className="subcategory__view__row">
            <div className="buttons-box-text col-md-12 text-center">
              {" "}
              <h3 className="h3-header">
                <a
                  href={"https://www.deon.pl/"}
                  className="h3-header"
                  target="_blank"
                >
                  Deon{" "}
                </a>
              </h3>{" "}
              Wiele ciekawych artykułów, na różne tematy.
            </div>
          </div>
          <div className="subcategory__view__row">
            <div className="buttons-box-text col-md-12 text-center">
              <h3 className="h3-header">
                <a href={"https://stacja7.pl/"} target="_blank">
                  Stacja7
                </a>
              </h3>
              Katolickie miejsce w sieci warte odwiedzenia.
            </div>
          </div>
          <div className="subcategory__view__row">
            <div className="buttons-box-text col-md-12 text-center">
              <h3 className="h3-header">
                <a href={"https://dominikanie.pl/"} target="_blank">
                  Dominiknie.pl{" "}
                </a>
              </h3>
              Słowo Boże w przystępnej formie.
            </div>
          </div>
          <div className="subcategory__view__row">
            <div className="buttons-box-text col-md-12 text-center">
              <h3 className="h3-header">
                <a href={"https://www.niedziela.pl/"} target="_blank">
                  Niedziela.pl{" "}
                </a>
              </h3>
              Tygodnik Niedziela w Internecie.
            </div>
          </div>
          <br />
        </div>
      </animated.div>
    </div>
  );
}

export default MiejscaWSieci;
