const INITIAL_STATE = {
  mainHeader: "Parafia Obecnie",
  obecnie: {
    component: "Subcomponent",
    header: "Parafia rzymskokatolicka w Kiełczygłowie.",
    description: "Należy do Dekanatu Pajęczno archidiecezji częstochowskiej.",
    subcontents: [
      {
        header: "Mieszkańcy:",
        description: "2500",
      },
      {
        header: "Miejscowości należące do parafii Kiełczygłów::",
        description:
          "Dryganek Duży, Dryganek Mały, Glina Duża, Glina Mała, Kule, Gumnisko,  Dąbrowa, Pierzyny Duże, Pierzyny Małe, Kiełczygłów - Okupniki, Kiełczygłów, Huta, Lipie, Kiełczygłówek, Osina Mała, Osina Duża, Beresie Małe, Obrów, Kiełczygłów Kolonia (nr 1 - 19)",
      },
    ],
    reverse: false,
  },
};

const obecnieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default obecnieReducer;
