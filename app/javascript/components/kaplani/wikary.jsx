import React from "react";
import { useSpring, animated } from "react-spring";

function Wikary() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2>Obecny Wikary</h2>
          <div className="buttons-content row">
            <div className="buttons-box-text col-md-8" />
            <div className="col-md-4" />
          </div>
        </div>
      </animated.div>
    </div>
  );
}
export default Wikary;
