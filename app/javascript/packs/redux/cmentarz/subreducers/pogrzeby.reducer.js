const INITIAL_STATE = {
  mainHeader: "Pogrzeby",
  content: {
    pogrzeby: {
      component: "Subcomponent",
      header: "Pogrzeby",
      description: "w budowie",
      subcontents: [],
    },
  },
};

const pogrzebyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default pogrzebyReducer;
