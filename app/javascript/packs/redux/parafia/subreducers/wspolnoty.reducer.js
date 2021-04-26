import franciszek from "./../../../components/img/parafia/Opatronie/franciszek.jpg";

const INITIAL_STATE = {
  mainHeader: "Wspólnoty Parafialne",
  section1: {
    component: "Basic",
    header: "Życie",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [franciszek],
    reverse: false,
  },
};

const wspolnotyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default wspolnotyReducer;
