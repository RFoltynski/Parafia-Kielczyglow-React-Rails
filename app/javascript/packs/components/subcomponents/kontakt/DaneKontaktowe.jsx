import MainSubcomponent from "../mainSubcomponent";
import React from "react";

const MAIN = "kontakt";

export const DaneKontaktowe = (props) => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"daneKontaktowe"}
      header={"Dane Kontaktowe"}
    />
  );
};
