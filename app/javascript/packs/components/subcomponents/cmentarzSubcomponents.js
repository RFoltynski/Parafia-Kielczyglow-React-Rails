import MainSubcomponent from "./mainSubcomponent";
import React from "react";

const MAIN = "cmentarz";

export const Cmentarz = (props) => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"cmentarz"}
      header={"Cmentarz"}
      key={1}
    />
  );
};

export const Kaplica = (props) => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"kaplica"}
      header={"Kaplica"}
      key={2}
    />
  );
};

export const Pogrzeby = (props) => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"pogrzeby"}
      header={"Pogrzeby"}
      key={3}
    />
  );
};
