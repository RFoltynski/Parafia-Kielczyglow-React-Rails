import MainSubcomponent from "./mainSubcomponent";
import React from "react";

export const HistoriaParafi = () => {
  return (
    <MainSubcomponent
      reducerProperty={"historia"}
      header={"Historia Parafii"}
    />
  );
};

export const Miejsca = () => {
  return (
    <MainSubcomponent reducerProperty={"miejsca"} header={"Miejsca w parafi"} />
  );
};

export const OPatronie = () => {
  return (
    <MainSubcomponent reducerProperty={"oPatronie"} header={"O patronie"} />
  );
};

export const ParafiaObecnie = () => {
  return (
    <MainSubcomponent reducerProperty={"obecnie"} header={"Parafia Obecnie"} />
  );
};

export const WspolnotyParafialne = (props) => {
  return (
    <MainSubcomponent
      reducerProperty={"wspolnoty"}
      header={"Wspólnoty Parafialne"}
    />
  );
};
