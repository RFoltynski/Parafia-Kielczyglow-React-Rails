import caly from "./../../components/img/budowa/caly.JPG";
import caly2 from "./../../components/img/budowa/caly2.JPG";
import dach from "./../../components/img/budowa/dach.JPG";
import dach2 from "./../../components/img/budowa/dach2.JPG";
import dach3 from "./../../components/img/budowa/dach3.JPG";
import dach4 from "./../../components/img/budowa/dach4.JPG";
import fundamenty from "./../../components/img/budowa/fundamenty.JPG";
import gazeta from "./../../components/img/parafia/HistoriaParafi/gazeta.jpg";
import konsekracja from "./../../components/img/budowa/konsekracja.JPG";
import konsekracja2 from "./../../components/img/budowa/konsekracja2.JPG";
import organy from "./../../components/img/budowa/organy2.JPG";
import pamiatka from "./../../components/img/parafia/HistoriaParafi/pamiatka.jpg";
import stary from "./../../components/img/parafia/HistoriaParafi/stary.jpg";
import stolarka from "./../../components/img/budowa/stolarka.JPG";
import swieto from "./../../components/img/budowa/swieto.JPG";
import ulotka from "./../../components/img/parafia/HistoriaParafi/ulotka.jpg";
import wsrodku from "./../../components/img/budowa/wsrodku.JPG";
import wsrodku2 from "./../../components/img/budowa/wsrodku2.JPG";
import wsrodku3 from "./../../components/img/budowa/wsrodku3.JPG";
import wsrodku4 from "./../../components/img/budowa/wsrodku4.JPG";

const INITIAL_STATE = {
  section1: {
    component: "Bio",
    header: "Powstanie Parafii",
    description:
      "Parafię erygował bp włocławski Stanisław Zdzitkowiecki 21.08.1924",
    images: [stary, ulotka],
    reverse: true,
  },
  section2: {
    component: "ManyImages",
    header: "Budowa kościoła",
    description:
      "Obecny kosciół został wybudowany staraniem ks. Józefa Jansona w latach 1948-1957.",
    images: [fundamenty, caly, caly2, dach, dach2, dach3, dach4],
    reverse: false,
  },
  section3: {
    component: "ManyImages",
    header: "Prace wewnątrz",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [wsrodku, wsrodku2, wsrodku3, wsrodku4, organy, stolarka],
    reverse: false,
  },
  section4: {
    component: "Bio",
    header: "Konsekracja Kościoła",
    description: "Kościół konsekrował bp Zdzisław Goliński 13.06.1957 roku.",
    images: [konsekracja, konsekracja2, swieto],
    reverse: true,
  },
  section5: {
    component: "Bio",
    header: "Artykuł z zatrzymania Ks. Józefa Jansona",
    description: "",
    images: [pamiatka, gazeta],
    reverse: true,
  },
};

const historiaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default historiaReducer;
