import franciszek from "./../../../components/img/parafia/Opatronie/franciszek.jpg";
import franciszekM from "./../../../components/img/parafia/Opatronie/franciszek-mlody.jpg";
import franciszekP from "./../../../components/img/parafia/Opatronie/franciszek-prosto.jpg";

const INITIAL_STATE = {
  mainHeader: "O Patronie",
  section1: {
    component: "Basic",
    header: "Życie",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [franciszek],
    reverse: false,
  },
  section2: {
    component: "ManyImages",
    header: "Powołanie",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [franciszek, franciszekM, franciszekP],
    reverse: false,
  },
  section3: {
    component: "Basic",
    header: "Duszpasterstwo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe a voluptatem blanditiis tempore ipsa dolore, amet porro minus quos ea illum eaque consequuntur molestias iusto corrupti sint facilis nam!",
    images: [franciszek, franciszek],
    reverse: true,
  },
};

const oPatronieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default oPatronieReducer;
