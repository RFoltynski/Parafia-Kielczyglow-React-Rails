const INITIAL_STATE = {
  mainHeader: "Cmentarz",
  content: {
    cmentarz: {
      component: "Subcomponent",
      header: "Cmentarz",
      description: "w budowie",
      subcontents: [],
    },
  },
};

const cmentarzReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cmentarzReducer;
