import MainSubcomponent from "./mainSubcomponent";
import React from "react";

export const Cmentarz = (props) => {
  return <MainSubcomponent reducerProperty={"cmentarz"} header={"Cmentarz"} />;
};

export const Kaplica = (props) => {
  return <MainSubcomponent reducerProperty={"kaplica"} header={"Kaplica"} />;
};

export const Pogrzeby = (props) => {
  return <MainSubcomponent reducerProperty={"pogrzeby"} header={"Pogrzeby"} />;
};
