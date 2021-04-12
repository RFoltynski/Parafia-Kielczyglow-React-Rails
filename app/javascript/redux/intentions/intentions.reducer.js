const INITIAL_STATE = {
  intention: ["no intention yet"],
};

export const intentionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_INTENTIONS":
      return { ...state, intentions: action.payload };
    default:
      return state;
  }
};
