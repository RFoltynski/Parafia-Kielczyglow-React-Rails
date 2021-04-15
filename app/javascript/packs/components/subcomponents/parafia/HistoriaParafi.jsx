import { Basic, ManyImages } from "./../../elements/contentLayouts";

import React from "react";
import caly from "./../../img/budowa/caly.JPG";
import caly2 from "./../../img/budowa/caly2.JPG";
import dach from "./../../img/budowa/dach.JPG";
import dach2 from "./../../img/budowa/dach2.JPG";
import dach3 from "./../../img/budowa/dach3.JPG";
import dach4 from "./../../img/budowa/dach4.JPG";
import fundamenty from "./../../img/budowa/fundamenty.JPG";
import gazeta from "./../../img/parafia/HistoriaParafi/gazeta.jpg";
import konsekracja from "./../../img/budowa/konsekracja.JPG";
import konsekracja2 from "./../../img/budowa/konsekracja2.JPG";
import organy from "./../../img/budowa/organy2.JPG";
import pamiatka from "./../../img/parafia/HistoriaParafi/pamiatka.jpg";
import stary from "./../../img/parafia/HistoriaParafi/stary.jpg";
import stolarka from "./../../img/budowa/stolarka.JPG";
import swieto from "./../../img/budowa/swieto.JPG";
import ulotka from "./../../img/parafia/HistoriaParafi/ulotka.jpg";
import wsrodku from "./../../img/budowa/wsrodku.JPG";
import wsrodku2 from "./../../img/budowa/wsrodku2.JPG";
import wsrodku3 from "./../../img/budowa/wsrodku3.JPG";
import wsrodku4 from "./../../img/budowa/wsrodku4.JPG";

const HistoriaParafi = () => {
  const section1 = {
    header: "Powstanie Parafii",
    description:
      "Parafię erygował bp włocławski Stanisław Zdzitkowiecki 21.08.1924",
    images: [stary, ulotka],
    reverse: true,
  };

  const section2 = {
    header: "Budowa kościoła",
    description:
      "Obecny kosciół został wybudowany staraniem ks. Józefa Jansona w latach 1948-1957.",
    images: [fundamenty, caly, caly2, dach, dach2, dach3, dach4],
    reverse: false,
  };
  const section3 = {
    header: "Prace wewnątrz",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [wsrodku, wsrodku2, wsrodku3, wsrodku4, organy, stolarka],
    reverse: false,
  };
  const section4 = {
    header: "Konsekracja Kościoła",
    description: "Kościół konsekrował bp Zdzisław Goliński 13.06.1957 roku.",
    images: [konsekracja, konsekracja2, swieto],
    reverse: true,
  };
  const section5 = {
    header: "Artykuł z zatrzymania Ks. Józefa Jansona",
    description: "",
    images: [pamiatka, gazeta],
    reverse: true,
  };

  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>Historia Parafii</h2>

        <br />
        <Basic data={section1} key={1} />
        <ManyImages data={section2} key={2} />
        <ManyImages data={section3} key={3} />
        <Basic data={section4} key={4} />
        <Basic data={section5} key={5} />
      </div>
    </div>
  );
};

export default HistoriaParafi;
