import React from "react";
import { useSpring, animated } from "react-spring";

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
              <p> Antonii Wróbel (1925-1938)</p>, Stanisław Dąbrowski
              (1938-1939), Franciszek Figura (1939-1940), Wincenty Kruk
              (1940-1941), Józef Janson (1945-1949), Antoni Turbański
              (1949-1953), Józef Janson (1953-1959), Edward Polak (1959-1990),
              Bogdan Ignasiak (1990- do teraz)
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Proboszczowie;
