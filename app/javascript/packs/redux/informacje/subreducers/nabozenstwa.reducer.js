const INITIAL_STATE = {
  mainHeader: "Nabożeństwa",
  content: {
    msze: {
      component: "Subcomponent",
      header: "Msze swięte:",
      description: "Godziny nabożeństw",
      subcontents: [
        {
          header: "Kielczygłów:",
          description:
            "Niedziela i święta: 9.00, 12.00, 15.30 <br />vŚwięta zniesione: 8:00, 10:00, 16:00 <br /> Dni powszednie: 7:00 (msza koncelebrowana) ",
        },
        {
          header: "Pierzyny Małe:",
          description:
            "niedziela i święta - 10:30 <br /> Dni powszednie: <br />- czas letni: 18.00 <br /> - czas zimowy:16.00 <br />",
        },
      ],
      reverse: false,
    },
    odpust: {
      component: "Subcomponent",
      header: "Odpust:",
      description:
        "Obecnie wikariusz parafi pw. św. Antoniego Padewskiego w Kiełczygłowie",
      subcontents: [
        {
          header: "Kiełczygłów:",
          description:
            " 1. św. Antioniego - 13 czerwca <br /> 2. Niepokalanego Serca NMP - niedziela ok. 22 sierpnia",
        },
        {
          header: "Pierzyny Małe:",
          description: "1. NMP Królowej Polski - 3 maja",
        },
      ],
      reverse: false,
    },
  },
};

const nabozenstwaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default nabozenstwaReducer;
