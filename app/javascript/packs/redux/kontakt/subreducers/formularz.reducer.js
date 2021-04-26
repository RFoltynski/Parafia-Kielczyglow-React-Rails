const INITIAL_STATE = {
  mainHeader: "Formularz Kontaktowy",
  formularz: {
    component: "ContactForm",
    header: "Dane Kontaktowe:",
    description: "Godziny nabożeństw",
    subcontents: [],
  },
};

const formularzReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default formularzReducer;
