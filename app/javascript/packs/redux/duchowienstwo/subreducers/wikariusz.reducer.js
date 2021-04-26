import photo from "./../../../components/img/ksieza/proboszcz";
const INITIAL_STATE = {
  mainHeader: "Obecny Wikariusz",
  wikariusz: {
    component: "Bio",
    images: [photo],
    header: "Ks. Remigiusz Michał Lech",
    description:
      "Obecnie wikariusz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
    subcontents: [
      {
        header: "Urodzony:",
        description: "15 maja 1993r w Myszkowie.",
      },
      {
        header: "Edukacja:",
        description:
          "Szkołę podstawową i gimnazjum ukończył w Myszkowie, a Liceum Ogólnokształcące w Koziegłowach. W 2012r. wstąpił do Wyższego Seminarium Duchownego w Częstochowie.",
      },
      {
        header: "Święcenia:",
        description:
          "Świecenia kapłańskie otrzymał 30 maja 2020r. z rąk J.E. ks. Arcybiskupa Wacława Depo. Dekretem biskupa z 1 lipca 2020r.",
      },
      {
        header: "Duszpasterstwo:",
        description: "Wikariusz w Kiełczygłowie",
      },
    ],
    reverse: false,
  },
};

const wikariuszReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default wikariuszReducer;
