const INITIAL_STATE = {
  intention: ["no intention yet"],
  mainHeader: "Intencje",
  content: {
    intencje: {
      component: "Intentions",
    },
  },
};

export const intentionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_INTENTIONS":
      return { ...state, intention: action.payload.data.kielczyglow[0] };
    default:
      return state;
  }
};
