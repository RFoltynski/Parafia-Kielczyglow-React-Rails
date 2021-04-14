import React from "react";
import { useSpring, animated } from "react-spring";
import proboszcz from "./../../img/ksieza/proboszcz.jpg";

function Proboszcz() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>Obecny Proboszcz</h2>
        <h3 className="subcategory__view__column">Ks. Bogdan Ignasiak</h3>
        <div className="ob-proboszczowie-overlay">
          <img src={proboszcz} className="ob-proboszczowie-img " />
          <p className="ob-proboszczowie-text">
            {" "}
            <span className={"bold-orange-word"}>Urodzony:</span> <br /> 26
            Urodził się 19 listopada 1957 roku. <br />
            <span className={"bold-orange-word"}>Edukacja:</span> <br />
            Szkołę podstawową i liceum ukończył w Czeladzi.
            <br />
            W 1957r wstąpił do Wyższego Częstochowskiego Seminarium Duchownego w
            Krakowie.
            <br />{" "}
            <span className={"bold-orange-word"}>
              Święcenia:
              <br />
            </span>{" "}
            Świecenia Kapłańskie otrzymał 30 maja 1982r w katedrze
            częstochowskiej, z rąk J.E. Ks. Bpa. Stefana Bareły.
            <br />
            <span className={"bold-orange-word"}>Duszpasterstwo:</span>
            <br />
            Pierwsza Parafia po święceniach była Parafia Św. Marii Magdaleny w
            Koziegłowach, w której posługiwał cztery lata.
            <br />W 1986r otrzymał nominacje na wikariusza do Parafii Św.
            Antoniego w Kiełczygłowie, gdzie przyszło mu kontynuować rozpoczęta
            budowę kościoła filialnego w Pierzynach Małych po ks. Adamie
            Sołtysiaku. Po czterech latach posługi jako wikariusz ks. Biskup
            Stanisław Nowak przeniósł ks. Proboszcza Edwarda Polaka na emeryturę
            z prawem zamieszkania na plebanii, a ks. Bogdana mianował nowym
            Proboszczem parafii. Od 1990 r. do dnia dzisiejszego jest
            proboszczem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Proboszcz;
