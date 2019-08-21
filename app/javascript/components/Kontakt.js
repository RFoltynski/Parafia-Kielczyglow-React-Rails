import React from "react";
import Navbar from "./Navbar";
import { useSpring, animated } from "react-spring";

function Kontakt() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="kontakt">
      <div className="overlay">
        <Navbar />
        <center>
          <h1 class="h1-header"> Kontakt </h1>

          <div className="kontakt-row">
            <animated.div style={props}>
              <div className="buttons-box">
                <h2 name="scroll-to-historia">Dane Kontaktowe</h2>
                <div className="buttons-content row">
                  <div className="buttons-box-text col-md-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec lacinia hendrerit massa lobortis imperdiet. Duis at
                    nibh tempor, congue eros dapibus, tristique ante. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Donec suscipit, lorem vitae iaculis
                    scelerisque, orci nulla fermentum nulla, in sollicitudin
                    velit nisl iaculis sem. Etiam ullamcorper urna eu lectus
                    efficitur, vehicula faucibus nibh blandit. Ut mattis ac nisi
                    in convallis. Mauris malesuada mauris nisi, eu aliquet leo
                    dapibus et. Sed augue ligula, dictum nec condimentum eu,
                    consequat in ligula. Integer aliquam elementum nisl, ut
                    bibendum tortor porttitor id. Donec dapibus feugiat ornare.
                    Integer blandit elementum eros, nec dictum sem hendrerit id.
                    Phasellus lacus nulla, aliquet a purus quis, porttitor
                    posuere leo. Nunc a pharetra tortor. Nam tempor iaculis
                    arcu, et bibendum enim facilisis quis
                  </div>
                </div>
              </div>
            </animated.div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Kontakt;
