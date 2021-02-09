import React from "react";
import { useSpring, animated } from "react-spring";

function Powolania() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box text-center">
          <h2>Powołania w Parafii</h2>
          <h3 className="text-center h3-header">Powołania w Parafii</h3>
          <div className="ob-powolaniaowie-overlay" />
        </div>
      </animated.div>
    </div>
  );
}

export default Powolania;
