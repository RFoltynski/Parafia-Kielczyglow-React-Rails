const INITIAL_STATE = {
  intention: ["no intention yet"],
};

export const intentionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_INTENTIONS":
      return { ...action.payload.data.kielczyglow[0] };
    default:
      return state;
  }
};
