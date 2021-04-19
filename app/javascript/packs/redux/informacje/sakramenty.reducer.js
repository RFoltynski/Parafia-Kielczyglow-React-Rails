const INITIAL_STATE = {
  chrzest: {
    header: "Chrzest:",
    description:
      "Aby usprawnić formalności związane z chrztem należy przedłożyć:",
    paragraph: [
      "- Akt urodzenia dziecka z USC",
      "- dane rodziców chrzestnych i zaświadczenia, że mogą być dopuszczeni do godności ojca czy matki chrzestnej (nie mogą być chrzestnymi osoby poniżej 16 roku życia bez bierzmowania i osoby żyjące w związkach niesakramentalnych, konkubinatach lub związkach cywilnych  i osoby niepraktykujące)",
    ],
  },
  bierzmowanie: {
    header: "Bierzmowanie:",
    description:
      "Przez 3 lata odbywają się nauki przygotowujące w ostatnią niedzielę miesiąca w połączeniu z Mszą popołudniową. A po Mszy św. katecheza.",
    subcontent: [
      {
        header: "Osoby przygotowujące się do bierzmowania:",
        description:
          "posiadają dzienniczek, w którym ksiądz potwierdza udział w niedzielnej Mszy św., przynajmniej 1 spowiedź w miesiącu, udział w nabożeństwach takich jak: Roraty, Droga Krzyżowa, Gorzkie Żale, nabożeństwa majowe oraz różańcowe (przynajmniej po 4 razy)",
      },
      {
        header: "Świadkowie bierzmowania:",
        description:
          "świadkami bierzmowania mogą być: rodzice chrzestni, starsze rodzeństwo lub ktoś bliski o ile jest wierzącym i praktykującym katolikiem. Świadkami nie mogą być rodzice bierzmowanego.",
      },
    ],
  },
};

const sakramentyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sakramentyReducer;
