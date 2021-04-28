const INITIAL_STATE = {
  mainHeader: "Kaplica",
  content: {
    kaplica: {
      component: "Subcomponent",
      header: "Kaplica",
      description: "w budowie",
      subcontents: [],
    },
  },
};

const kaplicaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default kaplicaReducer;
