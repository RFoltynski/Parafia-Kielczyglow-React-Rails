const INITIAL_STATE = {
  daneKontaktowe: {
    component: "Subcomponent",
    header: "Dane Kontaktowe:",
    description: "Godziny nabożeństw",
    subcontents: [
      {
        header: "Adres plebanii:",
        description:
          "Parafia św Antoniego Padewskiego w Kiełczygłowie ul ks Józefa Jansona 14 98-358 Kiełczygłów",
        reverse: false,
      },
      {
        header: "Kancelaria czynna:",
        description:
          "8:30-10:00 (w dni powszednie) W sprawach pilnych takich jak pogrzeb czy wizyta u chorego,uprzejmie prosimy o kontakt telefoniczny.",
        reverse: false,
      },
      {
        header: "Ks. Proboszcz Bogdan Ignasiak:",
        description: "000 000 000",
        reverse: false,
      },
      {
        header: "Ks. Remigiusz Lech:",
        description: "000 000 000",
        reverse: false,
      },
      {
        header: "Grabarz Sylwester Janus:",
        description: "000 000 000",
        reverse: false,
      },
      {
        header: "Adres e-mail:",
        description: "kancelaria@parafiakielczyglow.pl",
        reverse: false,
      },
    ],
    reverse: false,
  },
};

const danKontaktoweReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default danKontaktoweReducer;
