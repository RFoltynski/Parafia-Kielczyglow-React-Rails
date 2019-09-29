import React from "react";
import { useSpring, animated } from "react-spring";
import proboszcz from "./../img/ksieza/bogdan_ignasiak.jpg";

function Proboszcz() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box text-center">
          <h2>Obecny Proboszcz</h2>
          <h3>Bogdan Ignasiak</h3>
          <img src={proboszcz} className="proboszczowie-img" />
          <p> Obecny proboszcz parafii kielczyglow pochodzi.</p>
        </div>
      </animated.div>
    </div>
  );
}

export default Proboszcz;
