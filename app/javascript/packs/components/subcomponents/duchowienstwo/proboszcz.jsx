import { Bio, Basic, ManyImages } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import proboszcz from "./../../img/ksieza/proboszcz.jpg";
import React from "react";

export const Proboszcz = () => {
  const section1 = {
    image: proboszcz,
    header: "Ks. Bogdan Ignasiak",
    description: "Probosz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
    subcontent: [
      {
        header: "Urodzony:",
        description:
          "Urodzony: 26 Urodził się 19 listopada 1957 roku.W 1957r wstąpił do Wyższego Częstochowskiego Seminarium Duchownego w Krakowie.",
      },
      {
        header: "Święcenia:",
        description:
          "Świecenia Kapłańskie otrzymał 30 maja 1982r w katedrze częstochowskiej, z rąk J.E. Ks. Bpa. Stefana Bareły.",
      },
      {
        header: "Duszpasterstwo:",
        description:
          "Pierwsza Parafia po święceniach była Parafia Św. Marii Magdaleny w Koziegłowach, w której posługiwał cztery lata. W 1986r otrzymał nominacje na wikariusza do Parafii Św. Antoniego w Kiełczygłowie, gdzie przyszło mu kontynuować rozpoczęta budowę kościoła filialnego w Pierzynach Małych po ks. Adamie Sołtysiaku. Po czterech latach posługi jako wikariusz ks. Biskup Stanisław Nowak przeniósł ks. Proboszcza Edwarda Polaka na emeryturę z prawem zamieszkania na plebanii, a ks. Bogdana mianował nowym Proboszczem parafii. Od 1990 r. do dnia dzisiejszego jest proboszczem.",
      },
    ],
    reverse: false,
  };
  const subcomponentsContent = [<Bio data={section1} key={1} />];
  return (
    <MainSubcomponent layouts={subcomponentsContent} header={"Proboszcz"} />
  );
};
