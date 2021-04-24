import MainSubcomponent from "./mainSubcomponent";
import React from "react";

const MAIN = "parafia";

export const HistoriaParafi = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"historia"}
      header={"Historia Parafii"}
      key={1}
    />
  );
};

export const Miejsca = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"miejsca"}
      header={"Miejsca w parafi"}
      key={2}
    />
  );
};

export const OPatronie = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"oPatronie"}
      header={"O patronie"}
      key={3}
    />
  );
};

export const ParafiaObecnie = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"obecnie"}
      header={"Parafia Obecnie"}
      key={3}
    />
  );
};

export const WspolnotyParafialne = (props) => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"wspolnoty"}
      header={"Wspólnoty Parafialne"}
      key={3}
    />
  );
};
