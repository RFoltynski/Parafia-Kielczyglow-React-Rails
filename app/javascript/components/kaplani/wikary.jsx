import React from "react";
import { useSpring, animated } from "react-spring";
import proboszcz from "./../img/ksieza/wikariusz.jpg";

function Wikary() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  let year = new Date();
  let age = year.getFullYear() - 1984;
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box text-center">
          <h2>Obecny Wikariusz</h2>
          <h3>Ks. Łukasz Mozler</h3>
          <img src={proboszcz} className="ob-proboszczowie-img" />
          <p>
            {" "}
            Urodzony 26 października 1984 roku ({age} lat) w Rudzie Śląskiej
            Goduli w rodzinie górniczej. <br />
            Po ukończeniu szkoły podstawowej w 1999 rok wstąpił do Niższego
            Seminarium Duchownego Archidiecezji Częstochowskiej, które ukończył
            egzaminem maturalnym w 2002 roku. <br />
            Po ukończeniu tej szkoły, rozpocząl studia teologiczno-filozoficzne
            w Wyższym Seminarium Duchownym Archidiecezji Częstochowskiej, które
            ukończył w 2010 roku pomyślnie zdanym egzaminem magisterskim z
            zakresu Historii Kościoła.
            <br /> Wyświęcony na kapłana przez Arcybiskupa Metroplitę Stanisława
            Nowaka 22 maja 2010 roku w Archikatedrze w Częstochowie. <br />{" "}
            Pracował jako prefekt w Niższym Seminarium Duchownym : 2010-2012.{" "}
            <br /> Wikariusz w rodzinnej parafii bp. Stefana Bareły w Kodrębie
            2012-2016. <br /> Wikariusz w Kiełczygłowie: 2016 do teraz.{" "}
          </p>
        </div>
      </animated.div>
    </div>
  );
}
export default Wikary;
