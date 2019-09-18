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
              <p> Antonii Wróbel (1925-1938)</p>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Proboszczowie;
