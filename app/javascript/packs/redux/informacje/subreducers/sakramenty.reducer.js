const INITIAL_STATE = {
  chrzest: {
    component: "Subcomponent",
    header: "Chrzest:",
    description:
      "Aby usprawnić formalności związane z chrztem należy przedłożyć:",
    subcontents: [
      {
        paragraphs: [
          "- Akt urodzenia dziecka z USC",
          "- dane rodziców chrzestnych i zaświadczenia, że mogą być dopuszczeni do godności ojca czy matki chrzestnej (nie mogą być chrzestnymi osoby poniżej 16 roku życia bez bierzmowania i osoby żyjące w związkach niesakramentalnych, konkubinatach lub związkach cywilnych  i osoby niepraktykujące)",
        ],
      },
    ],
  },
  bierzmowanie: {
    component: "Subcomponent",
    header: "Bierzmowanie:",
    description:
      "Przez 3 lata odbywają się nauki przygotowujące w ostatnią niedzielę miesiąca w połączeniu z Mszą popołudniową. A po Mszy św. katecheza.",
    subcontents: [
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
  komunia: {
    component: "Subcomponent",
    header: "Pierwsza Komunia Św.",
    description:
      "Pierwsza Komunia  Święta odbywa się w naszej parafii w Uroczystość Zesłania Ducha Świętego. Od lat rodzice tych dzieci są zgodni co do jednolitych strojów komunijnych. Przygotowanie do Pierwszej Komunii św. rozpoczyna się w klasie trzeciej podczas dwóch godzin katechez tygodniowo. Oprócz tego odbywają się już wiosną spotkania praktycznie przygotowujące dzieci do przeżycia liturgii Mszy św. Są także spotkania okresowe z rodzicami:",
    subcontents: [
      {
        paragraphs: [
          "1 przed przyjęciem różańca",
          "2 przed przyjęciem medalika podczas uroczystości Niepokalanego Poczęcia NMP 8 grudnia",
          "3 przed przyjęciem świecy i książeczki podczas święta Ofiarowania Pańskiego 2 lutego",
        ],
      },
    ],
  },
  namaszczenieChorych: {
    component: "Subcomponent",
    header: "Namaszczenie chorych",
    description:
      "Sakrament Namaszczenia Chorych można przyjąć w każdej chorobie, jeżeli chory czuje się zagrożony. Jeżeli chory zostaje zabrany do szpitala i istnieje obawa o jego życie, to powinno się poprosić kapelana szpitala  o spowiedź chorego, namaszczenie i Komunię Świeta. Wezwanie kapłana wcale nie oznacza, że chory ma zaraz umrzeć. Ten sakrament można przyjąć kilkakrotnie w zyciu. Przed przyjściem kapłana należy przygotować stolik przykryty białym obrusem, na którym stawia się:",
    subcontents: [
      {
        paragraphs: [
          "zapalone świece,",
          "krzyż,",
          "(ewentualnie) wodę święconą i trochę waty Jeśli nie ma wody święconej, można użyć wody zwykłej i poprosić kapłana o poświęcenie jej.",
        ],
        finParagraph:
          "Na tak przygotowanym stoliku kładzie kapłan Najświętszy Sakrament oraz oleje.",
      },
    ],
  },
  pogrzeb: {
    component: "Subcomponent",
    header: "Pogrzeb katolicki",
    description:
      "Aby ustalić datę pogrzebu należy zabrać ze sobą do kancelarii:",
    subcontents: [
      {
        paragraphs: [
          "Kartę zgonu (jeśli zmarły będzie chowany na cmentarzu parafialnym),",
          "Jeśli osoba zmarła mieszkała poza parafią w której ma się odbyć pogrzeb, należy poinformować właściwego proboszcza miejsca o pochówku, oraz poprosić o pisemna zgodę i opinie o zmarłym.",
        ],
      },
    ],
  },
  slub: {
    component: "Subcomponent",
    header: "Sakrament małżeństwa",
    description:
      "Sugerujemy wczesniejsza rezzerwacje terminu ślubu. Następnie Narzeczeni zgłaszają się do kancelarii przynajmniej 3 miesiące przed planowanym ślubem na spotkanie należy przynieść: ",
    subcontents: [
      {
        paragraphs: [
          "Dowód osobisty",
          "Metrykę chrztu nie starszą niż 6 miesięcy (jeżeli chrzest miał miejsce poza naszą parafią),",
          "Metrykę bierzmowania (jeżeli nie ma o nim adnotacji na metryce chrztu),",
          "Świadectwo ukończenia nauki religii.",
          "W przypadku osób owdowiałych - wyciąg z księgi zmarłych, wydany przez parafię, w której odbył się pogrzeb współmałżonka,",
          "W późniejszym terminie:",
          "Świadectwo ukończenia kursu przedmałżeńskiego (Jeśli już został ukończony, można przynieść świadectwo na pierwsze spotkanie). PRE-Kany odbywają się w Archidiecezjalnym Ośrodku Duszpasterstwa Rodzin NAZARET w Pajęcznie Plac Dworcowy 2. Zapisy odbywają się pod nr telefonu 502 455 984 (pn.-pt. w godz. 16:00 - 20:00). Dokładniejsze informacje znajdują się na stronie: www.nazaret.pro",
          "Dokumenty z USC, do zawarcia małżeństwa konkordatowego (są ważne 6 miesiące).",
        ],
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
