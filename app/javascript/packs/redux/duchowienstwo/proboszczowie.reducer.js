import Janson from "./../../components/img/ksieza/Józef_Janson.JPG";
import Kruk from "./../../components/img/ksieza/Wincenty_Kruk.JPG";
import Polak from "./../../components/img/ksieza/Edward_Polak.JPG";
import Turbanski from "./../../components/img/ksieza/Antonii_Turbanski.JPG";
import Wrobel from "./../../components/img/ksieza/Antoni_Wrobel.JPG";
const INITIAL_STATE = {
  polak: {
    component: "Bio",
    images: [Polak],
    header: "Ks. Edward Polak (1959-1990)",
    description:
      "Obecnie wikariusz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
    subcontents: [
      {
        header: "Urodzony:",
        description: "15 maja 1993r w Myszkowie.",
      },
    ],
    reverse: false,
  },
  turbanski: {
    component: "Bio",
    images: [Turbanski],
    header: "Ks. Antoni Turbański (1949-1953)",
    description:
      "Obecnie wikariusz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
    subcontents: [
      {
        header: "Urodzony:",
        description: "15 maja 1993r w Myszkowie.",
      },
    ],
    reverse: false,
  },
  janson: {
    component: "Bio",
    images: [Janson],
    header: "Ks.Józef Janson (1945-1949) (1953-1959)",
    description:
      "Obecnie wikariusz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
    subcontents: [
      {
        header: "Urodzony:",
        description: "15 maja 1993r w Myszkowie.",
      },
    ],
    reverse: false,
  },
  kruk: {
    component: "Bio",
    images: [Kruk],
    header: "Ks. Wincenty Kruk (1940-1941)",
    description:
      "Obecnie wikariusz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
    subcontents: [
      {
        header: "Urodzony:",
        description: "15 maja 1993r w Myszkowie.",
      },
    ],
    reverse: false,
  },
  dabrowski: {
    component: "Bio",
    images: [Wrobel],
    header: "Ks. Stanisław Dąbrowski (1938-1939)",
    description:
      "Obecnie wikariusz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
    subcontents: [
      {
        header: "Urodzony:",
        description: "15 maja 1993r w Myszkowie.",
      },
    ],
    reverse: false,
  },
  wrobel: {
    component: "Bio",
    images: [Wrobel],
    header: "Ks. Antonii Wróbel (1925-1938)",
    description:
      "Obecnie wikariusz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
    subcontents: [
      {
        header: "Urodzony:",
        description: "15 maja 1993r w Myszkowie.",
      },
    ],
    reverse: false,
  },
};

const proboszczowieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default proboszczowieReducer;
