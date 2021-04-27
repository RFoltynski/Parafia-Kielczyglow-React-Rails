const INITIAL_STATE = {
  intention: ["no intention yet"],
  mainHeader: "Intencje",
  intencje: {
    component: "Subcomponent",
    header: "Dane Kontaktowe:",
    description: "Godziny nabożeństw",
    subcontents: [],
  },
};

export const intentionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_INTENTIONS":
      return { ...action.payload.data.kielczyglow[0] };
    default:
      return state;
  }
};
