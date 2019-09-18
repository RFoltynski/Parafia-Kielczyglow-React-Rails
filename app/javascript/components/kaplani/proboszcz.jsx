import React from "react";
import { useSpring, animated } from "react-spring";

function Proboszcz() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2>Obecny Proboszcz</h2>
        </div>
      </animated.div>
    </div>
  );
}

export default Proboszcz;
